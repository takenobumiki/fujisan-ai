<!-- 
  Google Ads Conversion Tracking & Enhanced Conversions
  Fujisan.AI
  
  設定手順:
  1. Google広告アカウントでコンバージョンアクションを作成
  2. 以下のIDを自分のものに置き換え:
     - AW-XXXXXXXXXX: Google広告のコンバージョンID
     - AW-XXXXXXXXXX/XXXXXXXXXXX: コンバージョンラベル
-->

<!-- ========================================
     STEP 1: Google Tag (gtag.js) - <head>内に設置
     ======================================== -->

<!-- Global site tag (gtag.js) - Google Ads -->
<script async src="https://www.googletagmanager.com/gtag/js?id=AW-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  
  // Google Ads
  gtag('config', 'AW-XXXXXXXXXX');
  
  // Google Analytics 4 (推奨)
  gtag('config', 'G-XXXXXXXXXX');
</script>


<!-- ========================================
     STEP 2: 拡張コンバージョン設定
     ======================================== -->

<script>
// 拡張コンバージョン用のユーザーデータ送信関数
function sendEnhancedConversion(userData, conversionLabel) {
  gtag('set', 'user_data', {
    'email': userData.email,                    // ハッシュ化される
    'phone_number': userData.phone || '',       // オプション
    'address': {
      'first_name': userData.firstName || '',   // オプション
      'last_name': userData.lastName || '',     // オプション
      'country': userData.country || ''         // オプション
    }
  });
  
  gtag('event', 'conversion', {
    'send_to': conversionLabel,
    'value': userData.value || 0,
    'currency': 'USD'
  });
}
</script>


<!-- ========================================
     STEP 3: コンバージョンイベント
     Firebase Authと連携して使用
     ======================================== -->

<script>
// Fujisan.AI コンバージョントラッキング

const FujisanTracking = {
  
  // コンバージョンラベル（Google広告で取得して置き換え）
  CONVERSION_LABELS: {
    SIGNUP: 'AW-XXXXXXXXXX/signup_label',           // 無料登録
    TRIAL_START: 'AW-XXXXXXXXXX/trial_label',       // 模試開始
    PURCHASE_MONTHLY: 'AW-XXXXXXXXXX/monthly_label', // 月額課金
    PURCHASE_ANNUAL: 'AW-XXXXXXXXXX/annual_label'   // 年額課金
  },
  
  // 1. 無料登録コンバージョン
  trackSignup: function(email) {
    // 基本コンバージョン
    gtag('event', 'conversion', {
      'send_to': this.CONVERSION_LABELS.SIGNUP
    });
    
    // 拡張コンバージョン（メールアドレス付き）
    gtag('set', 'user_data', { 'email': email });
    gtag('event', 'conversion', {
      'send_to': this.CONVERSION_LABELS.SIGNUP
    });
    
    // GA4イベント
    gtag('event', 'sign_up', {
      'method': 'email'
    });
    
    console.log('Tracked: Signup conversion');
  },
  
  // 2. 模試開始コンバージョン
  trackTrialStart: function(level) {
    gtag('event', 'conversion', {
      'send_to': this.CONVERSION_LABELS.TRIAL_START
    });
    
    // GA4イベント
    gtag('event', 'begin_tutorial', {
      'level': level
    });
    
    console.log('Tracked: Trial start - ' + level);
  },
  
  // 3. 月額課金コンバージョン
  trackPurchaseMonthly: function(email, value) {
    value = value || 14.99;
    
    gtag('set', 'user_data', { 'email': email });
    gtag('event', 'conversion', {
      'send_to': this.CONVERSION_LABELS.PURCHASE_MONTHLY,
      'value': value,
      'currency': 'USD',
      'transaction_id': 'txn_' + Date.now()
    });
    
    // GA4 Ecommerce
    gtag('event', 'purchase', {
      'transaction_id': 'txn_' + Date.now(),
      'value': value,
      'currency': 'USD',
      'items': [{
        'item_id': 'monthly_plan',
        'item_name': 'Fujisan.AI Monthly',
        'price': value,
        'quantity': 1
      }]
    });
    
    console.log('Tracked: Monthly purchase - $' + value);
  },
  
  // 4. 年額課金コンバージョン
  trackPurchaseAnnual: function(email, value) {
    value = value || 99.00;
    
    gtag('set', 'user_data', { 'email': email });
    gtag('event', 'conversion', {
      'send_to': this.CONVERSION_LABELS.PURCHASE_ANNUAL,
      'value': value,
      'currency': 'USD',
      'transaction_id': 'txn_' + Date.now()
    });
    
    // GA4 Ecommerce
    gtag('event', 'purchase', {
      'transaction_id': 'txn_' + Date.now(),
      'value': value,
      'currency': 'USD',
      'items': [{
        'item_id': 'annual_plan',
        'item_name': 'Fujisan.AI Annual',
        'price': value,
        'quantity': 1
      }]
    });
    
    console.log('Tracked: Annual purchase - $' + value);
  },
  
  // 5. ページビュー（SPAの場合）
  trackPageView: function(pagePath, pageTitle) {
    gtag('event', 'page_view', {
      'page_path': pagePath,
      'page_title': pageTitle
    });
  }
};

// グローバルに公開
window.FujisanTracking = FujisanTracking;
</script>


<!-- ========================================
     STEP 4: 使用例（Firebase Auth連携）
     ======================================== -->

<!--
Firebase Authの登録完了時に呼び出す例:

firebase.auth().createUserWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // 登録成功
    FujisanTracking.trackSignup(email);
  });

Googleログイン時:

firebase.auth().signInWithPopup(googleProvider)
  .then((result) => {
    FujisanTracking.trackSignup(result.user.email);
  });

課金完了時（Stripe等のWebhook後）:

FujisanTracking.trackPurchaseMonthly(userEmail, 14.99);
// or
FujisanTracking.trackPurchaseAnnual(userEmail, 99.00);
-->


<!-- ========================================
     STEP 5: リマーケティングタグ
     ======================================== -->

<script>
// リマーケティング用オーディエンスセグメント
const FujisanRemarketing = {
  
  // 訪問者をセグメント分け
  tagVisitor: function(segment) {
    gtag('event', 'page_view', {
      'send_to': 'AW-XXXXXXXXXX',
      'user_segment': segment
    });
  },
  
  // セグメント例
  SEGMENTS: {
    HOMEPAGE_VISITOR: 'homepage',
    PRICING_VIEWER: 'pricing_viewed',
    SIGNUP_STARTED: 'signup_started',
    SIGNUP_ABANDONED: 'signup_abandoned',
    FREE_USER: 'free_user',
    PAID_USER: 'paid_user'
  }
};

// 使用例:
// 料金ページを見た人
// FujisanRemarketing.tagVisitor(FujisanRemarketing.SEGMENTS.PRICING_VIEWER);

window.FujisanRemarketing = FujisanRemarketing;
</script>
