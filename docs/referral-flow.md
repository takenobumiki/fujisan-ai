# 紹介機能フロー確認

## 全体フロー

```
紹介者がリンクを共有
        ↓
新規ユーザーが ?ref=xxx 付きURLでアクセス
        ↓
┌─────────────────────────────────────────┐
│ index.html (LP) または app.html         │
│                                         │
│ 1. URLから ref パラメータを検出         │
│ 2. localStorage に保存                  │
│    - fujisan_referral                   │
│    - fujisan_referred_by                │
│ 3. 紹介用UIを表示                       │
└─────────────────────────────────────────┘
        ↓
ユーザーがプランを選択してStripe決済
        ↓
┌─────────────────────────────────────────┐
│ Stripe Payment Link                     │
│                                         │
│ 紹介用リンク → 14日間トライアル         │
│ 通常リンク → 7日間トライアル            │
└─────────────────────────────────────────┘
        ↓
決済成功 → success.html
        ↓
Firebase にサブスクリプション情報保存
```

---

## 各ファイルの役割

### index.html (LP)

**検出:**
```javascript
function isReferredUser() {
    const urlParams = new URLSearchParams(window.location.search);
    const refId = urlParams.get('ref');
    if (refId) {
        localStorage.setItem('fujisan_referral', refId);
        localStorage.setItem('fujisan_referred_by', refId);
        return true;
    }
    return localStorage.getItem('fujisan_referral') || 
           localStorage.getItem('fujisan_referred_by') ? true : false;
}
```

**Stripeリンク切り替え:**
```javascript
function getStripeLinks() {
    return isReferredUser() ? stripeLinksReferral : stripeLinks;
}
```

**UI表示:**
- 紹介バナー表示
- トライアル期間表示を14日に変更
- CTAボタンテキスト変更

---

### app.html

**検出 (checkReferralOnLoad):**
```javascript
const refId = params.get('ref');
if (refId && refId !== S.uniqueId && !S.referredBy) {
    S.referredBy = refId;
    S.trialDays = 14;
    localStorage.setItem('fujisan_referred_by', refId);
    localStorage.setItem('fujisan_referral', refId);
    // Firebase に記録
}
```

**アップグレード導線 (goToUpgrade):**
```javascript
function goToUpgrade() {
    const isReferred = S.referredBy || localStorage.getItem('fujisan_referral');
    const url = isReferred ? 'index.html?ref=referred#pricing' : 'index.html#pricing';
    window.location.href = url;
}
```

---

## Stripeリンク一覧

### 通常（7日トライアル）
| プラン | Monthly | Annual |
|--------|---------|--------|
| Basic | `...6h743S0p` | `...7lb43S0q` |
| Pro | `...bBr43S0r` | `...6h743S0s` |
| Ultimate | `...48Z43S0t` | `...axn43S0u` |

### 紹介用（14日トライアル）
| プラン | Monthly | Annual |
|--------|---------|--------|
| Basic | `...bBr43S0v` | `...bBr43S0w` |
| Pro | `...34V43S0x` | `...0WN43S0y` |
| Ultimate | `...eND43S0z` | `...axn43S0A` |

---

## localStorage キー

| キー | 用途 |
|------|------|
| `fujisan_referral` | index.html用 |
| `fujisan_referred_by` | app.html用 |
| `fujisan_user_id` | ユーザーID |
| `fujisan_device_id_v7` | デバイスID |

**注意:** 両方のキーを同期して保存することで、index.html ↔ app.html 間の遷移で紹介フラグを維持

---

## テスト方法

### 1. LP経由
```
https://fujisan.ai/?ref=test123
```
→ 紹介バナー表示、14日トライアルリンクに切り替わることを確認

### 2. アプリ経由
```
https://fujisan.ai/app.html?ref=test123
```
→ トースト表示、Firebase記録を確認

### 3. アップグレード導線
アプリ内から「Upgrade」をクリック
→ 紹介ユーザーの場合、LPの14日トライアルリンクが表示されることを確認

---

## 確認済み項目

- [x] index.html: ref パラメータ検出
- [x] index.html: localStorage 保存（両キー）
- [x] index.html: 紹介バナー表示
- [x] index.html: Pricing テキスト変更
- [x] index.html: Stripe リンク切り替え
- [x] app.html: ref パラメータ検出
- [x] app.html: localStorage 保存（両キー）
- [x] app.html: Firebase 記録
- [x] app.html: goToUpgrade で紹介フラグ維持

---

## 潜在的な問題

1. **紹介者自身が自分のリンクを使用**
   - 対策: `refId !== S.uniqueId` でチェック済み

2. **同一デバイスで複数アカウント作成**
   - 対策: `fujisan_device_id_v7` でデバイスID記録

3. **紹介フラグの有効期限なし**
   - 現状: 無期限で保持
   - 必要に応じて期限を設定可能
