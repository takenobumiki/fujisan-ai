# Fujisan.AI 機能チェックリスト

## コード検証結果サマリー

| カテゴリ | 状態 | 備考 |
|----------|------|------|
| 認証機能 | ✅ | Firebase Auth設定済み |
| 決済機能 | ✅ | Stripe 12リンク（通常6+紹介6） |
| 紹介機能 | ✅ | localStorage同期済み |
| 学習機能 | ✅ | 201関数定義済み |
| 多言語機能 | ✅ | 6言語、191翻訳キー |
| 外部連携 | ✅ | Firebase/Stripe/GTM設定済み |

---

## 1. 認証・アカウント機能

### index.html (LP)
| 機能 | 関数 | 状態 | 備考 |
|------|------|------|------|
| Googleログイン | `loginWithGoogle()` | ✅ | Firebase Auth |
| メールログイン | `loginWithEmail()` | ✅ | Firebase Auth |
| Googleサインアップ | `signupWithGoogle()` | ✅ | Firebase Auth |
| メールサインアップ | `signupWithEmail()` | ✅ | Firebase Auth |
| ログアウト | `logout()` | ✅ | |
| アカウント削除 | `deleteAccount()` | ✅ | |
| ユーザーメニュー表示 | `toggleUserMenu()` | ✅ | |

### app.html
| 機能 | 関数 | 状態 | 備考 |
|------|------|------|------|
| ニックネーム設定 | `saveNickname()` | ✅ | Firebase保存 |
| ニックネームスキップ | `skipNickname()` | ✅ | |

---

## 2. 決済・サブスクリプション機能

### Stripeリンク設定
| タイプ | プラン数 | 状態 | 備考 |
|--------|----------|------|------|
| 通常（7日トライアル） | 6 | ✅ | Basic/Pro/Ultimate × Monthly/Annual |
| 紹介用（14日トライアル） | 6 | ✅ | Basic/Pro/Ultimate × Monthly/Annual |

### index.html
| 機能 | 関数/設定 | 状態 | 備考 |
|------|----------|------|------|
| 通常Stripeリンク（7日） | `stripeLinks` | ✅ | 6プラン |
| 紹介用Stripeリンク（14日） | `stripeLinksReferral` | ✅ | 6プラン |
| リンク切り替え | `getStripeLinks()` | ✅ | 紹介判定 |
| 月額/年額切り替え | `updateStripeLinks()` | ✅ | |
| プラン選択表示 | `updatePricingDisplay()` | ✅ | |
| Stripe決済追跡 | GTM dataLayer push | ✅ | begin_checkout |

### success.html / cancel.html
| 機能 | 状態 | 備考 |
|------|------|------|
| Firebase初期化 | ✅ | SDK 10.7.1 |
| 決済成功/キャンセル表示 | ✅ | |

### app.html
| 機能 | 関数 | 状態 | 備考 |
|------|------|------|------|
| プラン確認 | `isPlanActive()` | ✅ | |
| トライアル確認 | `isTrialing()` | ✅ | |
| トライアル残日数 | `getTrialDaysRemaining()` | ✅ | |
| Firebase同期 | `syncPlanFromFirebase()` | ✅ | |
| 機能制限確認 | `canUseFeature()` | ✅ | |
| アップグレード導線 | `goToUpgrade()` | ✅ | 紹介フラグ維持 |
| アップグレードモーダル | `showUpgradeModal()` | ✅ | |

---

## 3. 紹介機能

### index.html
| 機能 | 関数 | 状態 | 備考 |
|------|------|------|------|
| 紹介パラメータ検出 | `isReferredUser()` | ✅ | ?ref=xxx |
| localStorage保存 | (両キー同期) | ✅ | fujisan_referral + fujisan_referred_by |
| 紹介バナー表示 | `showReferralUI()` | ✅ | |
| 14日トライアル表示 | (テキスト切り替え) | ✅ | 3箇所 |
| 14日Stripeリンク | `getStripeLinks()` | ✅ | |
| 初期化時リンク更新 | `initBillingToggle()` | ✅ | updateStripeLinks呼び出し |

### app.html
| 機能 | 関数 | 状態 | 備考 |
|------|------|------|------|
| 紹介パラメータ検出 | `checkReferralOnLoad()` | ✅ | |
| Firebase記録 | (直接 or Cloud Function) | ✅ | |
| localStorage同期 | (両キー) | ✅ | fujisan_referral + fujisan_referred_by |
| 紹介リンク生成 | `getReferralLink()` | ✅ | |
| 紹介UI初期化 | `initReferralUI()` | ✅ | init()から呼び出し |
| 紹介イベント通知 | `listenForReferralEvents()` | ✅ | |
| アップグレード時紹介維持 | `goToUpgrade()` | ✅ | |

---

## 4. 学習機能（app.html）

| 機能カテゴリ | 関数数 | 状態 |
|--------------|--------|------|
| クイズ・問題 | 15+ | ✅ |
| AI機能 | 5 | ✅ |
| 進捗・分析 | 10+ | ✅ |
| SRS | 1 | ✅ |

---

## 5. ランキング機能（app.html）

| 機能 | 関数 | 状態 |
|------|------|------|
| ランキング読み込み | `loadRanking()` | ✅ |
| ランキング表示 | `renderRanking()` | ✅ |
| ローカルランキング | `renderLocalRanking()` | ✅ |
| ランキングデータ更新 | `updateRankingData()` | ✅ |

---

## 6. 合格報告機能（app.html）

| 機能 | 関数 | 状態 |
|------|------|------|
| 報告モーダル | `openPassReportModal()` | ✅ |
| 報告送信 | `submitPassReport()` | ✅ |
| 承認確認 | `checkPendingReportApproval()` | ✅ |
| ボーナスUI | `updatePassBonusUI()` | ✅ |

---

## 7. デモ機能（index.html）

| 機能 | 関数 | 状態 |
|------|------|------|
| デモ初期化 | `initDemo()` | ✅ |
| デモ問題表示 | `renderDemoQuestion()` | ✅ |
| デモ音声再生 | `playDemoAudio()` | ✅ |
| AI解説表示 | `showAIExplanation()` | ✅ |
| デモ結果表示 | `showDemoResult()` | ✅ |

---

## 8. 多言語機能

| 項目 | 値 | 状態 |
|------|-----|------|
| 対応言語数 | 6 | ✅ |
| 翻訳キー数 | 191 | ✅ |
| 紹介用翻訳 | 5キー | ✅ |

対応言語: en, zh-tw, zh-cn, ko, vi, id

---

## 9. 外部サービス連携

| サービス | 設定 | 状態 |
|----------|------|------|
| Firebase Auth | ✅ | fujisan-ai プロジェクト |
| Firebase Realtime DB | ✅ | |
| Firebase Functions | ✅ | recordReferral等 |
| Firebase Vertex AI | ✅ | AI解説生成 |
| Stripe | ✅ | 12 Payment Links |
| GTM | ✅ | GTM-WG9LDKZG |

### Firebase SDK バージョン
| ファイル | バージョン | 状態 |
|----------|-----------|------|
| index.html | 10.7.1 | ✅ |
| app.html | 10.7.1 | ✅ |
| success.html | 10.7.1 | ✅ |

---

## 10. データ・ストレージ

### localStorage キー（統一済み）
| キー | 用途 | 同期 |
|------|------|------|
| `fujisan_referral` | 紹介フラグ | ✅ 両方保存 |
| `fujisan_referred_by` | 紹介フラグ | ✅ 両方保存 |
| `fujisan_user_id` | ユーザーID | ✅ |
| `fujisan_device_id_v7` | デバイスID | ✅ |
| `fujisanState_v7.0.x` | アプリ状態 | ✅ |

---

## 潜在的な問題・注意点

### ⚠️ 要確認
1. **Stripe Webhook** - success.htmlからFirebaseへのサブスク情報保存はWebhook経由推奨
2. **Cloud Functions** - recordReferral等がデプロイされているか確認必要
3. **問題データ** - N5のみ315問、他レベルは未実装

### ✅ 解決済み
1. ~~Firebase SDKバージョン不一致~~ → 10.7.1に統一
2. ~~localStorageキー不一致~~ → 両キー同期に修正
3. ~~10,000問表記~~ → 削除済み

---

## テスト推奨項目

```bash
# 紹介機能テスト
https://fujisan.ai/?ref=test123#pricing

# 言語切り替えテスト
https://fujisan.ai/?lang=ko

# アプリ紹介テスト  
https://fujisan.ai/app.html?ref=test123
```
