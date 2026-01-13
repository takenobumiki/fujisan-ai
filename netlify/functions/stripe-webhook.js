/**
 * Fujisan.AI - Stripe Webhook Handler (Netlify Functions)
 * 
 * 処理するイベント:
 * - checkout.session.completed: 新規契約完了
 * - customer.subscription.updated: プラン変更・更新
 * - customer.subscription.deleted: 解約
 * - invoice.paid: 継続課金成功
 * - invoice.payment_failed: 支払い失敗
 * 
 * 環境変数 (Netlify Dashboard で設定):
 * - STRIPE_SECRET_KEY: sk_live_xxx または sk_test_xxx
 * - STRIPE_WEBHOOK_SECRET: whsec_xxx
 * - FIREBASE_SERVICE_ACCOUNT: Firebase サービスアカウント JSON (Base64エンコード)
 */

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

// Firebase Admin SDK (lazy init)
let admin = null;
let db = null;

function initFirebase() {
  if (admin) return;
  
  admin = require('firebase-admin');
  
  if (!admin.apps.length) {
    // 環境変数からサービスアカウントを取得 (Base64エンコード)
    const serviceAccount = JSON.parse(
      Buffer.from(process.env.FIREBASE_SERVICE_ACCOUNT, 'base64').toString('utf8')
    );
    
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount)
    });
  }
  
  db = admin.firestore();
}

// ステータスマッピング
const STATUS_MAP = {
  'active': 'active',
  'trialing': 'trialing',
  'past_due': 'past_due',
  'canceled': 'cancelled',
  'unpaid': 'unpaid',
  'incomplete': 'incomplete',
  'incomplete_expired': 'expired'
};

exports.handler = async (event, context) => {
  // CORS & Method check
  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 200, body: '' };
  }
  
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  const sig = event.headers['stripe-signature'];
  let stripeEvent;

  // Webhook署名検証
  try {
    stripeEvent = stripe.webhooks.constructEvent(
      event.body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET
    );
  } catch (err) {
    console.error('Webhook signature verification failed:', err.message);
    return {
      statusCode: 400,
      body: JSON.stringify({ error: `Webhook Error: ${err.message}` })
    };
  }

  console.log('Received Stripe event:', stripeEvent.type);

  try {
    initFirebase();

    switch (stripeEvent.type) {
      case 'checkout.session.completed':
        await handleCheckoutCompleted(stripeEvent.data.object);
        break;

      case 'customer.subscription.created':
      case 'customer.subscription.updated':
        await handleSubscriptionUpdate(stripeEvent.data.object);
        break;

      case 'customer.subscription.deleted':
        await handleSubscriptionDeleted(stripeEvent.data.object);
        break;

      case 'invoice.paid':
        await handleInvoicePaid(stripeEvent.data.object);
        break;

      case 'invoice.payment_failed':
        await handlePaymentFailed(stripeEvent.data.object);
        break;

      default:
        console.log('Unhandled event type:', stripeEvent.type);
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ received: true })
    };

  } catch (error) {
    console.error('Webhook handler error:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message })
    };
  }
};

/**
 * チェックアウト完了 - 新規契約時
 */
async function handleCheckoutCompleted(session) {
  console.log('Checkout completed:', session.id);

  const customerId = session.customer;
  const customerEmail = session.customer_details?.email;
  const subscriptionId = session.subscription;
  
  // client_reference_id = Firebase UID (Payment Link設定で渡す)
  const userId = session.client_reference_id;
  
  // メタデータからプラン情報取得
  const plan = session.metadata?.plan || 'standard';
  const billing = session.metadata?.billing || 'annual';

  // Check if this is a returning user (was previously subscribed)
  let isReturningUser = false;
  if (userId) {
    try {
      const userDoc = await db.collection('users').doc(userId).get();
      if (userDoc.exists) {
        const userData = userDoc.data();
        isReturningUser = userData.wasSubscribed === true;
        console.log(`User ${userId} isReturningUser:`, isReturningUser);
      }
    } catch (err) {
      console.log('Could not check wasSubscribed:', err.message);
    }
  }

  // サブスクリプション詳細を取得
  let subscriptionData = {
    stripeCustomerId: customerId,
    stripeSubscriptionId: subscriptionId,
    email: customerEmail,
    plan: plan,
    billing: billing,
    status: 'trialing', // デフォルトはトライアル
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    isReturningUser: isReturningUser
  };

  if (subscriptionId) {
    try {
      let subscription = await stripe.subscriptions.retrieve(subscriptionId);
      
      // If returning user and still in trial, end the trial immediately
      if (isReturningUser && subscription.status === 'trialing') {
        console.log(`Ending trial for returning user ${userId}`);
        subscription = await stripe.subscriptions.update(subscriptionId, {
          trial_end: 'now'
        });
        console.log(`Trial ended, new status: ${subscription.status}`);
      }
      
      subscriptionData.status = STATUS_MAP[subscription.status] || subscription.status;
      subscriptionData.currentPeriodStart = new Date(subscription.current_period_start * 1000).toISOString();
      subscriptionData.currentPeriodEnd = new Date(subscription.current_period_end * 1000).toISOString();
      
      if (subscription.trial_end && typeof subscription.trial_end === 'number') {
        subscriptionData.trialEnd = new Date(subscription.trial_end * 1000).toISOString();
      }
    } catch (err) {
      console.log('Could not retrieve/update subscription:', err.message);
    }
  }

  // Firestoreに保存
  if (userId) {
    // client_reference_idがある場合（推奨）
    await db.collection('users').doc(userId).set({
      subscription: subscriptionData
    }, { merge: true });
    console.log(`User ${userId} subscription created`);
  } else {
    // メールアドレスでユーザーを検索
    const usersSnapshot = await db.collection('users')
      .where('email', '==', customerEmail)
      .limit(1)
      .get();
    
    if (!usersSnapshot.empty) {
      const userDoc = usersSnapshot.docs[0];
      await userDoc.ref.update({ subscription: subscriptionData });
      console.log(`User ${userDoc.id} subscription created (by email)`);
    } else {
      // 新規ユーザーとして作成（メールをキーに）
      await db.collection('subscriptions').doc(customerId).set(subscriptionData);
      console.log(`Subscription ${customerId} created (no user found)`);
    }
  }

  // 紹介者がいる場合の処理
  if (userId) {
    await processReferral(userId, customerEmail, plan);
  }
}

/**
 * サブスクリプション更新
 */
async function handleSubscriptionUpdate(subscription) {
  console.log('Subscription updated:', subscription.id, 'status:', subscription.status);

  const customerId = subscription.customer;
  const status = STATUS_MAP[subscription.status] || subscription.status;

  const updateData = {
    'subscription.status': status,
    'subscription.currentPeriodStart': new Date(subscription.current_period_start * 1000).toISOString(),
    'subscription.currentPeriodEnd': new Date(subscription.current_period_end * 1000).toISOString(),
    'subscription.updatedAt': new Date().toISOString()
  };

  // トライアル終了日
  if (subscription.trial_end && typeof subscription.trial_end === 'number') {
    updateData['subscription.trialEnd'] = new Date(subscription.trial_end * 1000).toISOString();
  }

  // プラン変更の検出
  if (subscription.items?.data?.[0]?.price?.metadata?.plan) {
    updateData['subscription.plan'] = subscription.items.data[0].price.metadata.plan;
  }

  // ユーザーを検索して更新
  const usersSnapshot = await db.collection('users')
    .where('subscription.stripeCustomerId', '==', customerId)
    .limit(1)
    .get();

  if (!usersSnapshot.empty) {
    await usersSnapshot.docs[0].ref.update(updateData);
    console.log(`User ${usersSnapshot.docs[0].id} subscription updated to ${status}`);
  } else {
    console.log(`No user found for customer ${customerId}`);
  }
}

/**
 * サブスクリプション解約
 */
async function handleSubscriptionDeleted(subscription) {
  console.log('Subscription deleted:', subscription.id);

  const customerId = subscription.customer;

  // ユーザーを検索
  const usersSnapshot = await db.collection('users')
    .where('subscription.stripeCustomerId', '==', customerId)
    .limit(1)
    .get();

  if (!usersSnapshot.empty) {
    const userDoc = usersSnapshot.docs[0];
    const userId = userDoc.id;

    await userDoc.ref.update({
      'subscription.status': 'cancelled',
      'subscription.cancelledAt': new Date().toISOString(),
      'subscription.updatedAt': new Date().toISOString()
    });

    console.log(`User ${userId} subscription cancelled`);

    // 紹介リワードのキャンセル（30日以内）
    await cancelReferralRewardIfNeeded(userId);
  }
}

/**
 * 請求書支払い成功
 */
async function handleInvoicePaid(invoice) {
  console.log('Invoice paid:', invoice.id);

  // 継続課金の場合、currentPeriodEndを更新
  if (invoice.subscription) {
    try {
      const subscription = await stripe.subscriptions.retrieve(invoice.subscription);
      await handleSubscriptionUpdate(subscription);
    } catch (err) {
      console.log('Could not update subscription from invoice:', err.message);
    }
  }
}

/**
 * 支払い失敗
 */
async function handlePaymentFailed(invoice) {
  console.log('Payment failed:', invoice.id);

  const customerId = invoice.customer;

  const usersSnapshot = await db.collection('users')
    .where('subscription.stripeCustomerId', '==', customerId)
    .limit(1)
    .get();

  if (!usersSnapshot.empty) {
    await usersSnapshot.docs[0].ref.update({
      'subscription.status': 'past_due',
      'subscription.lastPaymentError': invoice.last_payment_error?.message || 'Payment failed',
      'subscription.updatedAt': new Date().toISOString()
    });
    console.log(`User ${usersSnapshot.docs[0].id} marked as past_due`);
  }
}

/**
 * 紹介処理
 */
async function processReferral(userId, email, plan) {
  try {
    // ユーザーのreferredBy確認
    const userDoc = await db.collection('users').doc(userId).get();
    if (!userDoc.exists) return;

    const referredBy = userDoc.data()?.referredBy;
    if (!referredBy) return;

    // 紹介レコードを更新
    const referralsSnapshot = await db.collection('referrals')
      .where('referrerCode', '==', referredBy)
      .where('referredUserId', '==', userId)
      .limit(1)
      .get();

    if (!referralsSnapshot.empty) {
      await referralsSnapshot.docs[0].ref.update({
        status: 'paid',
        paidAt: new Date().toISOString(),
        plan: plan
      });
      console.log(`Referral updated: ${referredBy} -> ${userId}`);
    }
  } catch (err) {
    console.log('Referral processing error:', err.message);
  }
}

/**
 * 30日以内のキャンセルで紹介リワード取消
 */
async function cancelReferralRewardIfNeeded(userId) {
  try {
    const referralsSnapshot = await db.collection('referrals')
      .where('referredUserId', '==', userId)
      .where('status', '==', 'paid')
      .limit(1)
      .get();

    if (referralsSnapshot.empty) return;

    const referralDoc = referralsSnapshot.docs[0];
    const paidAt = new Date(referralDoc.data().paidAt);
    const daysSincePaid = (Date.now() - paidAt.getTime()) / (1000 * 60 * 60 * 24);

    if (daysSincePaid < 30) {
      await referralDoc.ref.update({
        status: 'cancelled',
        cancelledAt: new Date().toISOString(),
        cancelReason: 'Subscription cancelled within 30 days'
      });
      console.log(`Referral reward cancelled for ${userId} (within 30 days)`);
    }
  } catch (err) {
    console.log('Referral cancellation error:', err.message);
  }
}
// force redeploy 2026年 1月13日 火曜日 17時30分08秒 JST
