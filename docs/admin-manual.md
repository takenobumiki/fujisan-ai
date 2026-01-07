# Fujisan.AI 管理者マニュアル

## ⚠️ 重要: Stripe 7日間無料トライアル設定

### Payment Linkでのトライアル設定手順

1. **Stripe Dashboard** にログイン: https://dashboard.stripe.com

2. **Payment Links** を開く

3. 各プラン（Basic/Pro/Ultimate）のPayment Linkを編集:
   - Payment Linkをクリック → 「Edit」
   - または新規作成時に設定

4. **Subscription settings** で以下を設定:
   ```
   ✅ Add a free trial
   Trial period: 7 days
   ```

5. **Payment method collection**:
   ```
   ✅ Require payment method upfront
   （カード情報を先に取得 → トライアル終了後自動課金）
   ```

6. 保存して各プランに適用

### 確認ポイント
- [ ] Basic: 7日間トライアル設定済み
- [ ] Pro: 7日間トライアル設定済み  
- [ ] Ultimate: 7日間トライアル設定済み
- [ ] 全プランでカード情報事前取得が有効

### Webhook設定（トライアル終了通知）

Stripeから以下のイベントを受信するよう設定:
- `customer.subscription.trial_will_end` (トライアル終了3日前)
- `customer.subscription.updated` (トライアル→有料移行)
- `invoice.payment_failed` (トライアル後の課金失敗)

---

> **Version**: 7.10.0  
> **最終更新**: 2025年12月

---

## 目次

1. [初期セットアップ](#1-初期セットアップ)
2. [管理画面へのアクセス](#2-管理画面へのアクセス)
3. [ダッシュボード](#3-ダッシュボード)
4. [合格レポート管理](#4-合格レポート管理)
5. [紹介プログラム管理](#5-紹介プログラム管理)
6. [ユーザー管理](#6-ユーザー管理)
7. [Stripe管理](#7-stripe管理)
8. [Firebase Console操作](#8-firebase-console操作)
9. [トラブルシューティング](#9-トラブルシューティング)
10. [運用チェックリスト](#10-運用チェックリスト)

---

## 1. 初期セットアップ

### 1.1 Firebase プロジェクト設定

1. [Firebase Console](https://console.firebase.google.com/) にアクセス
2. プロジェクト「fujisan-ai」を選択
3. Authentication → Sign-in method → **Google** を有効化

### 1.2 Cloud Functions デプロイ

```bash
# プロジェクトフォルダに移動
cd fujisan-ai/functions

# 依存関係インストール
npm install

# 環境変数を設定
firebase functions:config:set admin.setup_key="任意の秘密鍵"
firebase functions:config:set stripe.secret_key="sk_live_xxxxx"
firebase functions:config:set stripe.webhook_secret="whsec_xxxxx"

# デプロイ
firebase deploy --only functions
```

### 1.3 管理者アカウント設定

1. `https://fujisan.ai/admin/setup.html` にアクセス
2. 「Googleでログイン」をクリック
3. 管理者として使用するGoogleアカウントでログイン
4. 設定したセットアップキーを入力
5. 「管理者権限を付与」をクリック
6. 「管理画面へ」をクリックして完了

> ⚠️ **重要**: 設定完了後、`admin/setup.html` はセキュリティのため削除してください。

### 1.4 追加の管理者を設定する場合

既存の管理者が Firebase Console から手動で設定するか、以下のコードを Cloud Functions で実行：

```javascript
// Firebase Admin SDK
admin.auth().setCustomUserClaims(uid, { admin: true });
```

---

## 2. 管理画面へのアクセス

### URL
```
https://fujisan.ai/admin/
```

### ログイン方法
1. 「Googleでログイン」をクリック
2. 管理者権限を持つGoogleアカウントでログイン
3. 自動的にダッシュボードが表示される

### ログアウト
- サイドバー下部の 🚪 アイコンをクリック

---

## 3. ダッシュボード

ダッシュボードでは、サービス全体の概要を確認できます。

### 3.1 主要指標

| 指標 | 説明 |
|------|------|
| **月間売上 (MRR)** | 当月の経常収益（概算） |
| **アクティブユーザー** | 有料サブスクリプション中のユーザー数 |
| **トライアル中** | 無料トライアル期間のユーザー数 |
| **今月の解約** | 当月に解約したユーザー数 |
| **未承認レポート** | 審査待ちの合格レポート数 |
| **紹介成功 (今月)** | 当月の紹介登録数 |
| **合格レポート総数** | 累計の合格レポート数 |
| **総ユーザー数** | 全登録ユーザー数 |

### 3.2 最近のアクティビティ

直近の合格レポート提出などのアクティビティが表示されます。

---

## 4. 合格レポート管理

### 4.1 概要

ユーザーがJLPT合格を報告すると、証明書写真とともにレポートが提出されます。
管理者が承認すると、ユーザーに **3ヶ月無料ボーナス** が付与されます。

### 4.2 タブの説明

| タブ | 説明 |
|------|------|
| **未承認** | 審査待ちのレポート |
| **承認済み** | 承認されたレポート |
| **拒否済み** | 拒否されたレポート |

### 4.3 レポートの確認項目

1. **証明書画像**: クリックで拡大表示
2. **名前**: ユーザーが入力した名前/イニシャル
3. **レベル**: N5〜N1
4. **スコア**: 任意入力（例: 156/180）
5. **コメント**: 感想・体験談
6. **提出日**: レポート提出日時

### 4.4 承認手順

1. 「未承認」タブを開く
2. 証明書画像をクリックして確認
3. 以下をチェック：
   - 証明書が本物か（JLPTの公式フォーマット）
   - 名前とレベルが一致しているか
   - 日付が妥当か
4. 問題なければ「✓ 承認」をクリック
5. 確認ダイアログで「OK」

### 4.5 拒否手順

1. 「✕ 拒否」をクリック
2. 拒否理由を入力（例: 「証明書が不鮮明」「偽造の疑い」）
3. 「OK」をクリック

### 4.6 承認時の自動処理

- ユーザーの `passBonus` に3ヶ月分のボーナスが設定される
- ユーザーの `freeMonths` が +3 される
- サブスクリプション期限が3ヶ月延長される
- レポートが LP の「Success Stories」に表示される（3件以上で表示）

---

## 5. 紹介プログラム管理

### 5.1 紹介フロー

```
1. ユーザーA が紹介リンクを共有
   https://fujisan.ai/app.html?ref=user_abc123
        ↓
2. ユーザーB がリンクからアクセス → トライアル開始
   ステータス: trial
        ↓
3. ユーザーB が有料プランに課金
   ステータス: paid
        ↓
4. 30日経過（自動処理）
   ステータス: rewarded
   ユーザーA に1ヶ月無料が付与
```

### 5.2 ステータスの意味

| ステータス | 説明 |
|------------|------|
| **trial** | 被紹介者がトライアル中 |
| **paid** | 被紹介者が課金済み（30日待ち） |
| **rewarded** | リワード付与完了 |
| **cancelled** | 被紹介者が30日以内に解約 |

### 5.3 統計の見方

| 指標 | 説明 |
|------|------|
| **総紹介数** | 累計の紹介登録数 |
| **トライアル中** | 現在トライアル中の被紹介者数 |
| **課金済み (30日待ち)** | 課金したがリワード待ちの数 |
| **リワード付与済み** | リワードが付与された数 |

### 5.4 手動リワード付与

通常は30日後に自動付与されますが、例外的に手動で付与する場合：

1. 対象の紹介行をみつける
2. 「リワード付与」ボタンをクリック
3. 確認ダイアログで「OK」

> ⚠️ 通常は自動処理に任せてください。手動付与は返金やキャンペーン対応など特別な場合のみ。

### 5.5 不正検知

以下のパターンに注意：

- 同一デバイスからの複数紹介
- 短時間での大量紹介
- 紹介者と被紹介者のIPが同一
- 30日以内の解約パターン

疑わしい場合は Firebase Console で詳細を確認してください。

---

## 6. ユーザー管理

### 6.1 ユーザー一覧

全ユーザーの情報を確認できます。

| 項目 | 説明 |
|------|------|
| **ユーザーID** | 一意の識別子（user_xxxxx） |
| **ニックネーム** | ユーザーが設定した表示名 |
| **プラン** | basic / pro / ultimate / none |
| **ステータス** | active / trial / cancelled |
| **登録日** | サブスクリプション開始日 |
| **有効期限** | サブスクリプション終了日 |

### 6.2 フィルター

| フィルター | 説明 |
|------------|------|
| **すべて** | 全ユーザー |
| **アクティブ** | 有料サブスクリプション中 |
| **トライアル** | 無料トライアル中 |
| **解約済み** | 解約したユーザー |

### 6.3 フリー月付与

カスタマーサポートや補償として、ユーザーに無料期間を付与する場合：

1. 対象ユーザーの行を見つける
2. 「+1ヶ月」ボタンをクリック
3. 確認ダイアログで「OK」

> 💡 付与した無料月は `users/{userId}/freeMonths` に記録されます。

---

## 7. Stripe管理

### 7.1 Stripe Dashboard

詳細な売上管理は Stripe Dashboard で行います。

```
https://dashboard.stripe.com/
```

### 7.2 よく使う機能

| 機能 | 場所 |
|------|------|
| 売上一覧 | Payments → All payments |
| サブスク一覧 | Billing → Subscriptions |
| 顧客情報 | Customers |
| Webhook ログ | Developers → Webhooks |

### 7.3 返金処理

1. Stripe Dashboard → Payments
2. 対象の支払いを選択
3. 「Refund」をクリック
4. 金額を入力（全額 or 一部）
5. 理由を選択
6. 「Refund」で確定

### 7.4 サブスクリプションのキャンセル

1. Stripe Dashboard → Subscriptions
2. 対象のサブスクリプションを選択
3. 「Cancel subscription」をクリック
4. 即時 or 期間終了時を選択
5. 確定

---

## 8. Firebase Console操作

### 8.1 アクセス

```
https://console.firebase.google.com/project/fujisan-ai/
```

### 8.2 Realtime Database

データの直接確認・編集が可能です。

主なパス：

| パス | 内容 |
|------|------|
| `/users` | ユーザーデータ |
| `/passReports` | 合格レポート |
| `/referrals` | 紹介データ |
| `/rankings` | ランキングデータ |
| `/feedback` | フィードバック |
| `/admins` | 管理者リスト |

### 8.3 データの編集

1. Realtime Database を開く
2. 対象のパスに移動
3. 値をクリックして編集
4. Enter で確定

> ⚠️ **注意**: 直接編集は慎重に行ってください。誤った変更はサービスに影響します。

### 8.4 Cloud Functions ログ

1. Functions を開く
2. ログタブを選択
3. フィルターで特定の関数を絞り込み

### 8.5 Authentication

1. Authentication を開く
2. Users タブでユーザー一覧
3. 特定ユーザーの詳細確認・削除が可能

---

## 9. トラブルシューティング

### 9.1 管理画面にログインできない

**原因**: 管理者権限（カスタムクレーム）が設定されていない

**対処**:
1. Firebase Console → Authentication でユーザーのUIDを確認
2. Cloud Functions または Firebase Admin SDK で権限を付与：

```javascript
admin.auth().setCustomUserClaims('ユーザーUID', { admin: true });
```

### 9.2 合格レポートの承認ボタンが動作しない

**原因**: Cloud Functions がデプロイされていない、またはエラー

**対処**:
1. Firebase Console → Functions でエラーログを確認
2. 必要に応じて再デプロイ：

```bash
firebase deploy --only functions
```

### 9.3 紹介リワードが自動付与されない

**原因**: Scheduled Function が動作していない

**対処**:
1. Firebase Console → Functions → checkReferralRewards のログを確認
2. エラーがあれば修正してデプロイ

### 9.4 Stripe Webhook が動作しない

**原因**: Webhook Secret が正しく設定されていない

**対処**:
1. Stripe Dashboard → Webhooks でエンドポイントを確認
2. Signing secret をコピー
3. Firebase に設定：

```bash
firebase functions:config:set stripe.webhook_secret="whsec_xxxxx"
firebase deploy --only functions
```

### 9.5 ユーザーのプランが正しく表示されない

**原因**: Firebase とローカルストレージの不整合

**対処**:
- ユーザーにブラウザのキャッシュクリアを依頼
- Firebase Console で `users/{userId}/subscription` を確認・修正

---

## 10. 運用チェックリスト

### 毎日

- [ ] 未承認レポートの確認・処理
- [ ] ダッシュボードで異常値がないか確認

### 毎週

- [ ] 紹介プログラムの不正パターンチェック
- [ ] Stripe Dashboard で売上確認
- [ ] Cloud Functions のエラーログ確認

### 毎月

- [ ] MRR / ARR の集計
- [ ] 解約率の計算
- [ ] 紹介プログラムの効果測定
- [ ] フィードバックの確認・対応

### 四半期

- [ ] Firebase のセキュリティルール見直し
- [ ] Cloud Functions のコスト確認
- [ ] バックアップの確認

---

## 付録

### A. 主要URL

| 用途 | URL |
|------|-----|
| LP | https://fujisan.ai/ |
| アプリ | https://fujisan.ai/app.html |
| 管理画面 | https://fujisan.ai/admin/ |
| Firebase Console | https://console.firebase.google.com/project/fujisan-ai/ |
| Stripe Dashboard | https://dashboard.stripe.com/ |
| Google Analytics | https://analytics.google.com/ |
| Google Tag Manager | https://tagmanager.google.com/ |

### B. 問い合わせ対応テンプレート

#### 返金リクエスト

```
ご連絡ありがとうございます。

返金処理を完了いたしました。
3-5営業日以内にお戻しされます。

今後ともよろしくお願いいたします。
```

#### 合格レポート確認中

```
合格おめでとうございます！🎉

レポートを確認中です。
承認され次第、3ヶ月の無料ボーナスが
自動的に適用されます。

しばらくお待ちください。
```

#### 技術的な問題

```
ご不便をおかけして申し訳ございません。

問題を確認いたします。
お手数ですが、以下の情報をお知らせください：

- ご使用のブラウザ
- エラーメッセージ（あれば）
- 発生した日時

よろしくお願いいたします。
```

### C. セキュリティ注意事項

1. **admin/setup.html** は初期設定後に削除
2. **セットアップキー** は定期的に変更
3. **Firebase セキュリティルール** を適切に設定
4. **管理者アカウント** は最小限に
5. **Stripe API キー** は環境変数で管理

---

**サポート連絡先**: support@fujisan.ai
