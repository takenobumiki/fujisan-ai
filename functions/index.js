/**
 * Fujisan.AI - Firebase Cloud Functions
 * 
 * 機能:
 * 1. Stripe Webhook受信 - 課金ステータス更新
 * 2. 30日後リワード付与 - Scheduled Function
 * 3. 紹介統計更新
 * 4. 合格レポート検証・ボーナス付与
 * 5. 管理者権限設定
 * 
 * デプロイ:
 * firebase deploy --only functions
 */

const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp();
const db = admin.database();
const auth = admin.auth();

// =============================================
// 設定 (環境変数から取得)
// =============================================
// firebase functions:config:set stripe.webhook_secret="whsec_xxx"
// firebase functions:config:set stripe.secret_key="sk_xxx"
// firebase functions:config:set admin.emails="email1@example.com,email2@example.com"

const STRIPE_WEBHOOK_SECRET = functions.config().stripe?.webhook_secret || process.env.STRIPE_WEBHOOK_SECRET;
const STRIPE_SECRET_KEY = functions.config().stripe?.secret_key || process.env.STRIPE_SECRET_KEY;
const ADMIN_EMAILS = (functions.config().admin?.emails || process.env.ADMIN_EMAILS || '').split(',').map(e => e.trim()).filter(e => e);

let stripe;
if (STRIPE_SECRET_KEY) {
    stripe = require('stripe')(STRIPE_SECRET_KEY);
}

// =============================================
// 管理者権限チェック
// =============================================
async function verifyAdmin(context) {
    if (!context.auth) {
        throw new functions.https.HttpsError('unauthenticated', 'Authentication required');
    }
    
    const token = context.auth.token;
    if (!token.admin) {
        throw new functions.https.HttpsError('permission-denied', 'Admin access required');
    }
    
    return true;
}

// =============================================
// 管理者権限を付与 (初期設定用)
// =============================================
exports.setAdminClaim = functions.https.onCall(async (data, context) => {
    const { email, secretKey } = data;
    
    // セキュリティ: 秘密鍵または既存管理者からのリクエストのみ許可
    const SETUP_KEY = functions.config().admin?.setup_key || 'fujisan_setup_2024';
    
    const isSetupKey = secretKey === SETUP_KEY;
    const isExistingAdmin = context.auth?.token?.admin === true;
    const isAllowedEmail = ADMIN_EMAILS.includes(email);
    
    if (!isSetupKey && !isExistingAdmin) {
        throw new functions.https.HttpsError('permission-denied', 'Setup key or admin access required');
    }
    
    if (!email) {
        throw new functions.https.HttpsError('invalid-argument', 'Email is required');
    }
    
    try {
        // ユーザーをメールアドレスで検索
        const user = await auth.getUserByEmail(email);
        
        // 管理者クレームを設定
        await auth.setCustomUserClaims(user.uid, { admin: true });
        
        // 管理者リストにも追加
        await db.ref(`admins/${user.uid}`).set({
            email: email,
            grantedAt: new Date().toISOString(),
            grantedBy: context.auth?.uid || 'setup'
        });
        
        console.log(`Admin claim set for ${email} (${user.uid})`);
        
        return { success: true, message: `Admin access granted to ${email}` };
        
    } catch (error) {
        if (error.code === 'auth/user-not-found') {
            throw new functions.https.HttpsError('not-found', 'User not found. Please sign in with Google first.');
        }
        throw new functions.https.HttpsError('internal', error.message);
    }
});

// =============================================
// 管理者権限を削除
// =============================================
exports.removeAdminClaim = functions.https.onCall(async (data, context) => {
    await verifyAdmin(context);
    
    const { email } = data;
    
    if (!email) {
        throw new functions.https.HttpsError('invalid-argument', 'Email is required');
    }
    
    // 自分自身の権限は削除できない
    if (context.auth.token.email === email) {
        throw new functions.https.HttpsError('invalid-argument', 'Cannot remove your own admin access');
    }
    
    try {
        const user = await auth.getUserByEmail(email);
        await auth.setCustomUserClaims(user.uid, { admin: false });
        await db.ref(`admins/${user.uid}`).remove();
        
        return { success: true, message: `Admin access removed from ${email}` };
        
    } catch (error) {
        throw new functions.https.HttpsError('internal', error.message);
    }
});

// =============================================
// 管理者一覧取得
// =============================================
exports.listAdmins = functions.https.onCall(async (data, context) => {
    await verifyAdmin(context);
    
    const snapshot = await db.ref('admins').once('value');
    const admins = snapshot.val() || {};
    
    return { admins: Object.values(admins) };
});

// =============================================
// 1. Stripe Webhook Handler
// =============================================
exports.stripeWebhook = functions.https.onRequest(async (req, res) => {
    if (req.method !== 'POST') {
        return res.status(405).send('Method Not Allowed');
    }

    let event;

    // Webhook署名検証
    if (STRIPE_WEBHOOK_SECRET && stripe) {
        const sig = req.headers['stripe-signature'];
        try {
            event = stripe.webhooks.constructEvent(
                req.rawBody,
                sig,
                STRIPE_WEBHOOK_SECRET
            );
        } catch (err) {
            console.error('Webhook signature verification failed:', err.message);
            return res.status(400).send(`Webhook Error: ${err.message}`);
        }
    } else {
        // 開発用: 署名検証なし
        event = req.body;
        console.warn('Webhook signature verification skipped (dev mode)');
    }

    console.log('Received Stripe event:', event.type);

    try {
        switch (event.type) {
            case 'checkout.session.completed':
                await handleCheckoutCompleted(event.data.object);
                break;
            
            case 'customer.subscription.created':
            case 'customer.subscription.updated':
                await handleSubscriptionUpdate(event.data.object);
                break;
            
            case 'customer.subscription.deleted':
                await handleSubscriptionCancelled(event.data.object);
                break;
            
            case 'invoice.paid':
                await handleInvoicePaid(event.data.object);
                break;
            
            default:
                console.log('Unhandled event type:', event.type);
        }

        res.json({ received: true });
    } catch (error) {
        console.error('Webhook handler error:', error);
        res.status(500).json({ error: error.message });
    }
});

// チェックアウト完了時
async function handleCheckoutCompleted(session) {
    console.log('Checkout completed:', session.id);
    
    const userId = session.client_reference_id;
    const customerEmail = session.customer_details?.email;
    const customerId = session.customer;
    const subscriptionId = session.subscription;
    
    if (!userId) {
        console.log('No client_reference_id, skipping referral check');
        return;
    }
    
    // サブスクリプション詳細を取得してトライアル情報を確認
    let trialEndDate = null;
    let subscriptionStatus = 'active';
    
    if (stripe && subscriptionId) {
        try {
            const subscription = await stripe.subscriptions.retrieve(subscriptionId);
            if (subscription.status === 'trialing' && subscription.trial_end) {
                subscriptionStatus = 'trialing';
                trialEndDate = new Date(subscription.trial_end * 1000).toISOString();
            }
        } catch (err) {
            console.log('Could not retrieve subscription details:', err.message);
        }
    }
    
    // ユーザーのサブスクリプション情報を保存
    const subscriptionData = {
        stripeCustomerId: customerId,
        customerId: customerId, // 後方互換性のため
        subscriptionId: subscriptionId,
        email: customerEmail,
        status: subscriptionStatus,
        startDate: new Date().toISOString(),
        plan: session.metadata?.plan || 'pro',
        billing: session.metadata?.billing || 'annual'
    };
    
    // トライアル情報があれば追加
    if (trialEndDate) {
        subscriptionData.trialEndDate = trialEndDate;
    }
    
    await db.ref(`users/${userId}/subscription`).set(subscriptionData);
    
    // 紹介経由かチェック
    const userSnapshot = await db.ref(`users/${userId}/referredBy`).once('value');
    const referrerId = userSnapshot.val();
    
    if (referrerId) {
        console.log(`User ${userId} was referred by ${referrerId}`);
        
        // 紹介者のreferralsを更新
        await db.ref(`referrals/${referrerId}/${userId}`).update({
            status: 'paid',
            paidDate: new Date().toISOString(),
            email: customerEmail,
            plan: session.metadata?.plan || 'pro'
        });
        
        // 紹介者の統計を更新
        await updateReferrerStats(referrerId);
        
        console.log(`Referral status updated for ${referrerId} -> ${userId}`);
    }
}

// サブスクリプション更新時
async function handleSubscriptionUpdate(subscription) {
    console.log('Subscription updated:', subscription.id, 'status:', subscription.status);
    
    // customer IDからユーザーを検索
    const usersSnapshot = await db.ref('users')
        .orderByChild('subscription/customerId')
        .equalTo(subscription.customer)
        .once('value');
    
    if (usersSnapshot.exists()) {
        usersSnapshot.forEach(userSnapshot => {
            const userId = userSnapshot.key;
            const updateData = {
                status: subscription.status,
                currentPeriodEnd: new Date(subscription.current_period_end * 1000).toISOString()
            };
            
            // トライアル情報を追加
            if (subscription.status === 'trialing' && subscription.trial_end) {
                updateData.trialEndDate = new Date(subscription.trial_end * 1000).toISOString();
            }
            
            // トライアル終了後は通常activeに移行
            if (subscription.status === 'active' && !subscription.trial_end) {
                updateData.trialEndDate = null; // トライアル終了
            }
            
            db.ref(`users/${userId}/subscription`).update(updateData);
            console.log(`User ${userId} subscription updated:`, subscription.status);
        });
    }
}

// サブスクリプションキャンセル時
async function handleSubscriptionCancelled(subscription) {
    console.log('Subscription cancelled:', subscription.id);
    
    const usersSnapshot = await db.ref('users')
        .orderByChild('subscription/subscriptionId')
        .equalTo(subscription.id)
        .once('value');
    
    if (usersSnapshot.exists()) {
        usersSnapshot.forEach(async userSnapshot => {
            const userId = userSnapshot.key;
            
            // サブスクリプション状態を更新
            await db.ref(`users/${userId}/subscription`).update({
                status: 'cancelled',
                cancelledDate: new Date().toISOString()
            });
            
            // 紹介者がいる場合、リワードをキャンセル（30日以内なら）
            const referredBySnapshot = await db.ref(`users/${userId}/referredBy`).once('value');
            const referrerId = referredBySnapshot.val();
            
            if (referrerId) {
                const referralSnapshot = await db.ref(`referrals/${referrerId}/${userId}`).once('value');
                const referralData = referralSnapshot.val();
                
                if (referralData && referralData.status === 'paid') {
                    const paidDate = new Date(referralData.paidDate);
                    const daysSincePaid = (Date.now() - paidDate.getTime()) / (1000 * 60 * 60 * 24);
                    
                    if (daysSincePaid < 30) {
                        // 30日以内のキャンセルはリワード対象外
                        await db.ref(`referrals/${referrerId}/${userId}`).update({
                            status: 'cancelled',
                            cancelledDate: new Date().toISOString()
                        });
                        console.log(`Referral reward cancelled (cancelled within 30 days)`);
                    }
                }
            }
        });
    }
}

// 請求書支払い完了時
async function handleInvoicePaid(invoice) {
    console.log('Invoice paid:', invoice.id);
    // 継続課金の場合の処理（必要に応じて）
}

// 紹介者の統計を更新
async function updateReferrerStats(referrerId) {
    const referralsSnapshot = await db.ref(`referrals/${referrerId}`).once('value');
    
    let totalReferred = 0;
    let pendingRewards = 0;
    let earnedMonths = 0;
    
    referralsSnapshot.forEach(referral => {
        const data = referral.val();
        totalReferred++;
        
        if (data.status === 'paid') {
            pendingRewards++;
        } else if (data.status === 'rewarded') {
            earnedMonths++;
        }
    });
    
    await db.ref(`users/${referrerId}/referralStats`).set({
        totalReferred,
        pendingRewards,
        earnedMonths,
        lastUpdated: new Date().toISOString()
    });
}

// =============================================
// 2. 30日後リワード付与 (Scheduled Function)
// =============================================
exports.checkReferralRewards = functions.pubsub
    .schedule('every 24 hours')
    .timeZone('Asia/Tokyo')
    .onRun(async (context) => {
        console.log('Running daily referral reward check...');
        
        const referralsSnapshot = await db.ref('referrals').once('value');
        const now = Date.now();
        let rewardsGranted = 0;
        
        const updates = {};
        
        referralsSnapshot.forEach(referrerSnapshot => {
            const referrerId = referrerSnapshot.key;
            
            referrerSnapshot.forEach(refereeSnapshot => {
                const refereeId = refereeSnapshot.key;
                const data = refereeSnapshot.val();
                
                // 'paid'ステータスで30日以上経過したものをチェック
                if (data.status === 'paid' && data.paidDate) {
                    const paidDate = new Date(data.paidDate);
                    const daysSincePaid = (now - paidDate.getTime()) / (1000 * 60 * 60 * 24);
                    
                    if (daysSincePaid >= 30) {
                        console.log(`Granting reward: ${referrerId} <- ${refereeId} (${daysSincePaid.toFixed(1)} days)`);
                        
                        // リワード付与
                        updates[`referrals/${referrerId}/${refereeId}/status`] = 'rewarded';
                        updates[`referrals/${referrerId}/${refereeId}/rewardedDate`] = new Date().toISOString();
                        
                        // ユーザーのフリー月を増加
                        updates[`users/${referrerId}/freeMonths`] = admin.database.ServerValue.increment(1);
                        
                        rewardsGranted++;
                    }
                }
            });
        });
        
        if (Object.keys(updates).length > 0) {
            await db.ref().update(updates);
            console.log(`Granted ${rewardsGranted} referral rewards`);
        } else {
            console.log('No rewards to grant today');
        }
        
        return null;
    });

// =============================================
// 3. 紹介リンク経由の登録を記録
// =============================================
exports.recordReferral = functions.https.onCall(async (data, context) => {
    const { userId, referrerId, deviceId } = data;
    
    if (!userId || !referrerId) {
        throw new functions.https.HttpsError('invalid-argument', 'Missing userId or referrerId');
    }
    
    // 自己紹介防止
    if (userId === referrerId) {
        throw new functions.https.HttpsError('invalid-argument', 'Cannot refer yourself');
    }
    
    // 既に紹介済みかチェック
    const existingRef = await db.ref(`referrals/${referrerId}/${userId}`).once('value');
    if (existingRef.exists()) {
        return { success: true, message: 'Already recorded' };
    }
    
    // 同一デバイスからの紹介防止（簡易チェック）
    if (deviceId) {
        const deviceSnapshot = await db.ref('devices').orderByValue().equalTo(referrerId).once('value');
        if (deviceSnapshot.exists()) {
            let sameDevice = false;
            deviceSnapshot.forEach(d => {
                if (d.key === deviceId) sameDevice = true;
            });
            if (sameDevice) {
                throw new functions.https.HttpsError('invalid-argument', 'Same device referral not allowed');
            }
        }
        // デバイスIDを記録
        await db.ref(`devices/${deviceId}`).set(userId);
    }
    
    // 紹介を記録
    await db.ref(`referrals/${referrerId}/${userId}`).set({
        status: 'trial',
        date: new Date().toISOString(),
        deviceId: deviceId || null
    });
    
    // 被紹介者に紹介者を記録
    await db.ref(`users/${userId}/referredBy`).set(referrerId);
    
    // 紹介者の統計を更新
    await updateReferrerStats(referrerId);
    
    return { success: true, message: 'Referral recorded' };
});

// =============================================
// 4. 紹介統計取得
// =============================================
exports.getReferralStats = functions.https.onCall(async (data, context) => {
    const { userId } = data;
    
    if (!userId) {
        throw new functions.https.HttpsError('invalid-argument', 'Missing userId');
    }
    
    const statsSnapshot = await db.ref(`users/${userId}/referralStats`).once('value');
    const freeMonthsSnapshot = await db.ref(`users/${userId}/freeMonths`).once('value');
    
    return {
        stats: statsSnapshot.val() || { totalReferred: 0, pendingRewards: 0, earnedMonths: 0 },
        freeMonths: freeMonthsSnapshot.val() || 0
    };
});

// =============================================
// 5. フリー月を消費
// =============================================
exports.useFreeMonth = functions.https.onCall(async (data, context) => {
    const { userId } = data;
    
    if (!userId) {
        throw new functions.https.HttpsError('invalid-argument', 'Missing userId');
    }
    
    const freeMonthsSnapshot = await db.ref(`users/${userId}/freeMonths`).once('value');
    const freeMonths = freeMonthsSnapshot.val() || 0;
    
    if (freeMonths <= 0) {
        throw new functions.https.HttpsError('failed-precondition', 'No free months available');
    }
    
    // フリー月を減らす
    await db.ref(`users/${userId}/freeMonths`).set(freeMonths - 1);
    
    // 使用履歴を記録
    await db.ref(`users/${userId}/freeMonthsUsed`).push({
        usedAt: new Date().toISOString()
    });
    
    return { success: true, remainingFreeMonths: freeMonths - 1 };
});

// =============================================
// 6. 合格レポート送信
// =============================================
exports.submitPassReport = functions.https.onCall(async (data, context) => {
    const { userId, level, score, name, comment, photo, country, language, planType } = data;
    
    if (!userId || !level || !name || !comment) {
        throw new functions.https.HttpsError('invalid-argument', 'Missing required fields');
    }
    
    // ユーザーのサブスクリプション状態を確認
    const userSnapshot = await db.ref(`users/${userId}/subscription`).once('value');
    const subscription = userSnapshot.val();
    
    if (!subscription || subscription.status !== 'active') {
        throw new functions.https.HttpsError('permission-denied', 'Active subscription required');
    }
    
    // 既に同レベルでレポート済みかチェック
    const existingReportSnapshot = await db.ref(`passReports`)
        .orderByChild('userId')
        .equalTo(userId)
        .once('value');
    
    let alreadyReported = false;
    existingReportSnapshot.forEach(child => {
        if (child.val().level === level) {
            alreadyReported = true;
        }
    });
    
    if (alreadyReported) {
        throw new functions.https.HttpsError('already-exists', 'Already reported for this level');
    }
    
    // レポートを保存（未承認状態）
    const reportRef = await db.ref('passReports').push({
        userId,
        level,
        score: score || null,
        name,
        comment,
        photo: photo || null,
        country: country || 'Unknown',
        language: language || 'en',
        planType: planType || 'unknown',
        timestamp: new Date().toISOString(),
        status: 'pending', // pending → approved → rejected
        bonusApplied: false
    });
    
    // ユーザーにレポートIDを記録
    await db.ref(`users/${userId}/passReports/${level}`).set({
        reportId: reportRef.key,
        timestamp: new Date().toISOString(),
        status: 'pending'
    });
    
    return { 
        success: true, 
        reportId: reportRef.key,
        message: 'Report submitted for review'
    };
});

// =============================================
// 7. 合格レポート承認（管理者用）
// =============================================
exports.approvePassReport = functions.https.onCall(async (data, context) => {
    // 管理者認証
    await verifyAdmin(context);
    
    const { reportId } = data;
    
    if (!reportId) {
        throw new functions.https.HttpsError('invalid-argument', 'Report ID required');
    }
    
    // レポートを取得
    const reportSnapshot = await db.ref(`passReports/${reportId}`).once('value');
    const report = reportSnapshot.val();
    
    if (!report) {
        throw new functions.https.HttpsError('not-found', 'Report not found');
    }
    
    if (report.status === 'approved') {
        return { success: true, message: 'Already approved' };
    }
    
    // レポートを承認
    await db.ref(`passReports/${reportId}`).update({
        status: 'approved',
        approvedAt: new Date().toISOString(),
        approvedBy: context.auth.uid
    });
    
    // 3ヶ月ボーナスを付与
    const bonusEnd = new Date();
    bonusEnd.setMonth(bonusEnd.getMonth() + 3);
    
    await db.ref(`users/${report.userId}/passBonus`).set({
        level: report.level,
        appliedAt: new Date().toISOString(),
        expiresAt: bonusEnd.toISOString(),
        reportId: reportId
    });
    
    // ユーザーのレポート状態を更新
    await db.ref(`users/${report.userId}/passReports/${report.level}`).update({
        status: 'approved',
        bonusApplied: true
    });
    
    // サブスクリプション期限を延長
    const subSnapshot = await db.ref(`users/${report.userId}/subscription`).once('value');
    const subscription = subSnapshot.val();
    
    if (subscription && subscription.currentPeriodEnd) {
        const currentEnd = new Date(subscription.currentPeriodEnd);
        currentEnd.setMonth(currentEnd.getMonth() + 3);
        await db.ref(`users/${report.userId}/subscription/currentPeriodEnd`).set(currentEnd.toISOString());
    }
    
    return { 
        success: true, 
        message: 'Report approved, 3-month bonus applied',
        userId: report.userId
    };
});

// =============================================
// 8. 合格レポート拒否（管理者用）
// =============================================
exports.rejectPassReport = functions.https.onCall(async (data, context) => {
    // 管理者認証
    await verifyAdmin(context);
    
    const { reportId, reason } = data;
    
    if (!reportId) {
        throw new functions.https.HttpsError('invalid-argument', 'Report ID required');
    }
    
    const reportSnapshot = await db.ref(`passReports/${reportId}`).once('value');
    const report = reportSnapshot.val();
    
    if (!report) {
        throw new functions.https.HttpsError('not-found', 'Report not found');
    }
    
    // レポートを拒否
    await db.ref(`passReports/${reportId}`).update({
        status: 'rejected',
        rejectedAt: new Date().toISOString(),
        rejectedBy: context.auth.uid,
        rejectionReason: reason || 'Did not meet requirements'
    });
    
    // ユーザーのレポート状態を更新
    await db.ref(`users/${report.userId}/passReports/${report.level}`).update({
        status: 'rejected'
    });
    
    return { success: true, message: 'Report rejected' };
});

// =============================================
// 9. 未承認レポート一覧取得（管理者用）
// =============================================
exports.getPendingReports = functions.https.onCall(async (data, context) => {
    // 管理者認証
    await verifyAdmin(context);
    
    const reportsSnapshot = await db.ref('passReports')
        .orderByChild('status')
        .equalTo('pending')
        .once('value');
    
    const reports = [];
    reportsSnapshot.forEach(child => {
        reports.push({
            id: child.key,
            ...child.val()
        });
    });
    
    return { reports };
});

// =============================================
// 10. ユーザーのボーナス状態確認
// =============================================
exports.checkPassBonus = functions.https.onCall(async (data, context) => {
    const { userId } = data;
    
    if (!userId) {
        throw new functions.https.HttpsError('invalid-argument', 'User ID required');
    }
    
    const bonusSnapshot = await db.ref(`users/${userId}/passBonus`).once('value');
    const bonus = bonusSnapshot.val();
    
    if (!bonus) {
        return { hasBonus: false };
    }
    
    const isActive = new Date(bonus.expiresAt) > new Date();
    
    return {
        hasBonus: isActive,
        bonus: isActive ? bonus : null
    };
});

// =============================================
// 11. Stripe Customer Portal Session作成
// =============================================
exports.createStripePortalSession = functions.https.onCall(async (data, context) => {
    const { userId, returnUrl } = data;
    
    if (!stripe) {
        throw new functions.https.HttpsError('failed-precondition', 'Stripe is not configured');
    }
    
    if (!userId) {
        throw new functions.https.HttpsError('invalid-argument', 'User ID required');
    }
    
    try {
        // FirebaseからStripe Customer IDを取得
        const userSnapshot = await db.ref(`users/${userId}/subscription`).once('value');
        const subscription = userSnapshot.val();
        
        let customerId = subscription?.stripeCustomerId;
        
        // Customer IDがない場合、emailで検索
        if (!customerId && subscription?.email) {
            const customers = await stripe.customers.list({
                email: subscription.email,
                limit: 1
            });
            if (customers.data.length > 0) {
                customerId = customers.data[0].id;
                // 保存しておく
                await db.ref(`users/${userId}/subscription/stripeCustomerId`).set(customerId);
            }
        }
        
        if (!customerId) {
            throw new functions.https.HttpsError('not-found', 'No Stripe customer found for this user');
        }
        
        // Customer Portal Sessionを作成
        const session = await stripe.billingPortal.sessions.create({
            customer: customerId,
            return_url: returnUrl || 'https://fujisan.ai/app.html'
        });
        
        console.log(`Portal session created for customer ${customerId}`);
        
        return { url: session.url };
        
    } catch (error) {
        console.error('Error creating portal session:', error);
        
        if (error.type === 'StripeInvalidRequestError') {
            throw new functions.https.HttpsError('not-found', 'Customer not found in Stripe');
        }
        
        throw new functions.https.HttpsError('internal', error.message);
    }
});

// =============================================
// 12. 紹介記録（クライアントから呼び出し）
// =============================================
exports.recordReferral = functions.https.onCall(async (data, context) => {
    const { userId, referrerId, deviceId } = data;
    
    if (!userId || !referrerId) {
        throw new functions.https.HttpsError('invalid-argument', 'userId and referrerId required');
    }
    
    // 自己紹介防止
    if (userId === referrerId) {
        throw new functions.https.HttpsError('invalid-argument', 'Cannot refer yourself');
    }
    
    try {
        const now = new Date().toISOString();
        
        // 紹介記録を保存
        await db.ref(`referrals/${referrerId}/${userId}`).set({
            status: 'trial',
            date: now,
            deviceId: deviceId || null
        });
        
        // ユーザーに紹介者を記録
        await db.ref(`users/${userId}/referredBy`).set(referrerId);
        
        console.log(`Referral recorded: ${referrerId} -> ${userId}`);
        
        return { success: true };
        
    } catch (error) {
        console.error('Error recording referral:', error);
        throw new functions.https.HttpsError('internal', error.message);
    }
});

console.log('Fujisan.AI Cloud Functions loaded');
