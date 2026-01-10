# Fujisan.AI - GTM & Google Ads コンバージョン設定ガイド

## 概要

このドキュメントでは、Fujisan.AIのコンバージョントラッキングと紹介プログラムの設定方法を説明します。

---

## 1. 現在の構成

### ファイル構成
```
fujisan.ai/
├── index.html          # LPページ（GTM設置済み、begin_checkoutイベント発火）
├── app.html            # アプリページ（GTM設置済み、紹介機能）
├── success.html        # 決済完了ページ（purchaseイベント発火）★CVページ
├── cancel.html         # 決済キャンセルページ
├── functions/          # Firebase Cloud Functions
│   ├── index.js        # Stripe Webhook、リワード処理
│   └── package.json
└── docs/
    └── GTM-SETUP-GUIDE.md
```

### 発火するイベント

| ページ | イベント | トリガー |
|--------|----------|----------|
| index.html | `begin_checkout` | Stripeボタンクリック時 |
| success.html | `purchase` | ページ読み込み時 |
| cancel.html | `checkout_cancelled` | ページ読み込み時 |

---

## 2. Firebase Cloud Functions デプロイ

### 前提条件
- Firebase CLI インストール済み
- Firebase Blaze プラン（従量課金）

### デプロイ手順

```bash
# 1. Firebase にログイン
firebase login

# 2. プロジェクト設定
firebase use fujisan-ai

# 3. Stripe シークレット設定
firebase functions:config:set stripe.secret_key="sk_live_xxxxx"
firebase functions:config:set stripe.webhook_secret="whsec_xxxxx"

# 4. Functions ディレクトリに移動
cd functions

# 5. 依存関係インストール
npm install

# 6. デプロイ
firebase deploy --only functions
```

### デプロイされる Functions

| Function | トリガー | 説明 |
|----------|----------|------|
| `stripeWebhook` | HTTPS | Stripe Webhookを受信 |
| `checkReferralRewards` | 毎日 | 30日経過した紹介にリワード付与 |
| `recordReferral` | Callable | 紹介を記録 |
| `getReferralStats` | Callable | 紹介統計を取得 |
| `useFreeMonth` | Callable | フリー月を消費 |

---

## 3. Stripe設定

### 3.1 Payment Links の設定

Stripeダッシュボードで各Payment Linkの設定を更新：

1. **Stripe Dashboard** → **Payment Links** → 各リンクを編集

2. **After payment** セクションで設定：
   - **Confirmation page**: `Don't show confirmation page`
   - **Redirect URL**: 以下のURLを設定

### Redirect URL一覧

| プラン | Billing | Success URL |
|--------|---------|-------------|
| Basic | Monthly | `https://fujisan.ai/success.html?plan=basic&billing=monthly&session_id={CHECKOUT_SESSION_ID}` |
| Basic | Annual | `https://fujisan.ai/success.html?plan=basic&billing=annual&session_id={CHECKOUT_SESSION_ID}` |
| Pro | Monthly | `https://fujisan.ai/success.html?plan=pro&billing=monthly&session_id={CHECKOUT_SESSION_ID}` |
| Pro | Annual | `https://fujisan.ai/success.html?plan=pro&billing=annual&session_id={CHECKOUT_SESSION_ID}` |
| Ultimate | Monthly | `https://fujisan.ai/success.html?plan=ultimate&billing=monthly&session_id={CHECKOUT_SESSION_ID}` |
| Ultimate | Annual | `https://fujisan.ai/success.html?plan=ultimate&billing=annual&session_id={CHECKOUT_SESSION_ID}` |

**Cancel URL（全プラン共通）:**
`https://fujisan.ai/cancel.html`

### 3.2 Webhook 設定

1. **Stripe Dashboard** → **Developers** → **Webhooks**
2. **Add endpoint** をクリック
3. 設定：
   - **Endpoint URL**: `https://us-central1-fujisan-ai.cloudfunctions.net/stripeWebhook`
   - **Events**:
     - `checkout.session.completed`
     - `customer.subscription.created`
     - `customer.subscription.updated`
     - `customer.subscription.deleted`
     - `invoice.paid`

4. **Webhook signing secret** をコピーして Firebase Functions に設定

---

## 4. 紹介プログラムのフロー

```
1. ユーザーA: 紹介リンク取得 (https://fujisan.ai/app.html?ref=u_xxx)
         ↓
2. ユーザーB: リンクからアクセス
         ↓
3. app.html: referredBy を localStorage に保存
         ↓
4. Firebase: referrals/u_xxx/u_yyy = {status: 'trial', date: ...}
         ↓
5. ユーザーA: バナー表示「🎉 A friend started trial!」
         ↓
6. ユーザーB: Stripe で課金（client_reference_id=u_yyy）
         ↓
7. Stripe Webhook → Cloud Function: status を 'paid' に更新
         ↓
8. ユーザーA: バナー表示「🎊 A friend subscribed!」
         ↓
9. 30日後: Scheduled Function → status を 'rewarded' に更新
         ↓
10. ユーザーA: 1ヶ月無料付与、バナー表示「🎁 Reward unlocked!」
```

---

## 5. GTM設定

### GTM Container ID
`GTM-WG9LDKZG`

### 設定するタグ

#### 5.1 Google Ads コンバージョンタグ（購入）

1. **Tags** → **New** → **Google Ads Conversion Tracking**

2. 設定：
   ```
   Conversion ID: AW-XXXXXXXXXX（Google Adsで取得）
   Conversion Label: XXXXXXXXXXX（Google Adsで取得）
   Conversion Value: {{Ecommerce Value}}
   Currency: USD
   Transaction ID: {{Ecommerce Transaction ID}}
   ```

3. **Triggering**: 新規トリガー作成
   ```
   Trigger Type: Custom Event
   Event name: purchase
   ```

### 設定する変数

| 変数名 | Data Layer Variable Name |
|--------|--------------------------|
| Ecommerce Value | ecommerce.value |
| Ecommerce Transaction ID | ecommerce.transaction_id |

---

## 6. Google Ads設定

### コンバージョンアクションの作成

1. **Google Ads** → **ツールと設定** → **測定** → **コンバージョン**
2. **新しいコンバージョンアクション** → **ウェブサイト**
3. 設定：
   ```
   コンバージョン名: Fujisan Purchase
   カテゴリ: 購入
   値: 各コンバージョンで異なる値を使用
   カウント方法: 1回（推奨）
   ```

4. **コンバージョンID**と**コンバージョンラベル**をメモ

### success.htmlの更新

取得したIDとラベルで `success.html` を更新：
- `AW-CONVERSION_ID` を実際のIDに置換
- `AW-CONVERSION_ID/PURCHASE_LABEL` を実際のラベルに置換

---

## 7. テスト方法

### 紹介フローのテスト

```bash
# 1. 紹介リンクでアクセス
https://fujisan.ai/app.html?ref=test_referrer_123

# 2. ブラウザコンソールで確認
localStorage.getItem('fujisan_referred_by') // → 'test_referrer_123'

# 3. テスト決済を実行（Stripeテストモード）

# 4. Firebase Console でデータ確認
# referrals/test_referrer_123/xxx → status: 'paid'
```

### Cloud Functions のローカルテスト

```bash
cd functions
npm run serve

# 別ターミナルでWebhookをテスト
curl -X POST http://localhost:5001/fujisan-ai/us-central1/stripeWebhook \
  -H "Content-Type: application/json" \
  -d '{"type": "checkout.session.completed", "data": {"object": {"client_reference_id": "test_user"}}}'
```

---

## 8. チェックリスト

### Stripe側
- [ ] 各Payment LinkのSuccess URLを設定
- [ ] Cancel URLを設定
- [ ] Webhook endpointを設定
- [ ] Webhook signing secretをCloud Functionsに設定
- [ ] テスト決済で動作確認

### Firebase側
- [ ] Cloud Functionsをデプロイ
- [ ] Database rulesを設定
- [ ] Scheduled Functionが動作確認

### GTM側
- [ ] Google Adsコンバージョンタグを設定
- [ ] Ecommerce変数を設定
- [ ] Preview Modeでテスト
- [ ] 公開

---

## 9. トラブルシューティング

### 紹介が記録されない
1. `localStorage.getItem('fujisan_referred_by')` を確認
2. Firebase Console で `referrals/` ノードを確認
3. Cloud Functions のログを確認

### リワードが付与されない
1. `checkReferralRewards` Function のログを確認
2. 30日経過しているか確認
3. ステータスが `paid` か確認

### Webhook が動作しない
1. Stripe Dashboard → Webhooks → Recent attempts を確認
2. Cloud Functions のログを確認
3. Webhook signing secret が正しいか確認

---

## サポート

質問がある場合は support@fujisan.ai までお問い合わせください。
