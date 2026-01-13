# Fujisan.AI 課金フロー設計書 v18.21.0

## 概要

Stripe Payment Links + Webhook + Firestore を使用した課金システム。
ユーザー状態はすべてFirestoreで管理し、フロントエンドは同期のみ行う。

---

## アーキテクチャ

```
┌─────────────────────────────────────────────────────────────────────────┐
│                           FUJISAN.AI 課金フロー                           │
└─────────────────────────────────────────────────────────────────────────┘

┌──────────┐    ┌──────────┐    ┌────────────────┐    ┌──────────────┐
│  ユーザー  │───▶│  Firebase │───▶│ プラン選択モーダル │───▶│ Stripe決済   │
│  (LP)    │    │  認証     │    │ (3プラン選択)     │    │ (Payment Link)│
└──────────┘    └──────────┘    └────────────────┘    └──────────────┘
                                                              │
                     ┌────────────────────────────────────────┘
                     │
                     ▼
              ┌─────────────┐
              │ Stripe      │
              │ Webhook     │
              │ (決済完了)   │
              └─────────────┘
                     │
                     ▼
         ┌───────────────────────┐
         │ Netlify Function      │
         │ /api/stripe-webhook   │
         └───────────────────────┘
                     │
                     ▼
              ┌─────────────┐
              │  Firestore  │
              │  更新       │
              │ (subscription)│
              └─────────────┘
                     │
                     ▼
         ┌───────────────────────┐
         │ app.js: syncUserData() │
         │ - Firestoreから取得    │
         │ - localState更新      │
         │ - UI反映              │
         └───────────────────────┘
```

---

## Stripeイベント処理

| イベント | 処理 | Firestoreフィールド |
|---------|------|---------------------|
| `checkout.session.completed` | 新規契約 | `subscription.status = 'trialing'` |
| `customer.subscription.updated` | プラン変更/更新 | `subscription.status`, `currentPeriodEnd` |
| `customer.subscription.deleted` | 解約 | `subscription.status = 'cancelled'` |
| `invoice.paid` | 継続課金成功 | `currentPeriodEnd` 更新 |
| `invoice.payment_failed` | 支払い失敗 | `subscription.status = 'past_due'` |

---

## Firestoreデータ構造

```javascript
// users/{userId}
{
  email: "user@example.com",
  subscription: {
    stripeCustomerId: "cus_xxx",
    stripeSubscriptionId: "sub_xxx",
    status: "trialing" | "active" | "cancelled" | "past_due",
    plan: "basic" | "standard" | "premium",
    billing: "monthly" | "annual",
    trialEnd: "2025-01-20T00:00:00.000Z",
    currentPeriodStart: "2025-01-13T00:00:00.000Z",
    currentPeriodEnd: "2026-01-13T00:00:00.000Z",
    createdAt: "2025-01-13T00:00:00.000Z",
    updatedAt: "2025-01-13T00:00:00.000Z",
    cancelledAt: null // 解約時のみ
  },
  referredBy: "ABC123", // 紹介コード
  // ... その他のユーザーデータ
}
```

---

## フロントエンド状態 (app.js state)

```javascript
state = {
  // Subscription (Firestoreから同期)
  plan: null,           // 'basic', 'standard', 'premium'
  billing: null,        // 'monthly', 'annual'
  planExpiry: null,     // currentPeriodEnd
  isTrialing: false,    // status === 'trialing'
  trialEndDate: null,   // trialEnd
  isCancelled: false,   // status === 'cancelled'
  paymentFailed: false, // status === 'past_due'
  stripeCustomerId: null,
  stripeSubscriptionId: null,
  // ...
}
```

---

## ユーザーフロー

### 1. 新規登録フロー

```
1. LP訪問 → 「Start Free Trial」クリック
2. Firebase認証（Email/Google）
3. プラン選択モーダル表示
4. プラン選択 → Stripe Payment Link へ
5. Stripe決済画面（カード情報入力）
6. 決済完了 → success.html へリダイレクト
7. Webhook → Firestore更新
8. app.html へリダイレクト
9. syncUserData() → Firestoreからsubscription取得
10. アプリ利用開始（7日間トライアル）
```

### 2. ログインフロー（既存ユーザー）

```
1. app.html アクセス
2. Firebase認証
3. onAuthStateChanged → syncUserData()
4. Firestoreからsubscription取得
5. status確認:
   - active/trialing → アプリ表示
   - cancelled (期間内) → アプリ表示 + 「expires on」表示
   - cancelled (期間外) → 再契約モーダル表示
   - past_due → 支払い更新モーダル表示
```

### 3. 解約フロー

```
1. Settings → 「Manage Subscription」クリック
2. Stripe Customer Portal へ遷移
3. ポータルで「Cancel」
4. Stripe → Webhook (customer.subscription.deleted)
5. Netlify Function → Firestore更新 (status: cancelled)
6. 次回ログイン時、syncUserData()で反映
7. 期間終了まで利用可、終了後は再契約モーダル
```

---

## Stripe Dashboard設定

### Payment Links設定

各Payment Linkで以下を設定:

1. **Success URL**: `https://fujisan.ai/app.html?from_checkout=success`
2. **Cancel URL**: `https://fujisan.ai/cancel.html`
3. **Trial期間**: 7日間
4. **Metadata**: `plan`, `billing` を設定

### Webhook設定

1. **Endpoint**: `https://fujisan.ai/api/stripe-webhook`
2. **Events**:
   - `checkout.session.completed`
   - `customer.subscription.created`
   - `customer.subscription.updated`
   - `customer.subscription.deleted`
   - `invoice.paid`
   - `invoice.payment_failed`

---

## Netlify環境変数

Netlify Dashboardで設定:

```
STRIPE_SECRET_KEY=sk_live_xxx
STRIPE_WEBHOOK_SECRET=whsec_xxx
FIREBASE_SERVICE_ACCOUNT=<Base64 encoded service account JSON>
GEMINI_API_KEY=xxx
```

### Firebase Service Account の Base64エンコード

```bash
cat firebase-service-account.json | base64 -w 0
```

---

## デバッグ

ブラウザコンソールで:

```javascript
// サブスク状態確認
checkSubscriptionStatus()

// 強制トライアル開始
forceTrial(7)

// トライアル終了
endTrial()
```

---

## 料金表

| プラン | Monthly | Annual | 年間割引 |
|--------|---------|--------|---------|
| Basic | $7.99 | $47.99 | 50% |
| Standard | $14.99 | $89.99 | 50% |
| Premium | $29.99 | $179.99 | 50% |

---

## 変更履歴

- v18.21.0: Webhook統合、Firestore同期、フロー整理
- v18.20.x: URLパラメータベース（非推奨）
