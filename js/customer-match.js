/**
 * Fujisan.AI - Customer Match Integration
 * 
 * Google広告カスタマーマッチ用のユーザーデータエクスポート
 * 
 * 使用方法:
 * 1. Firebase Admin SDKでユーザーリストを取得
 * 2. このスクリプトでCSVを生成
 * 3. Google広告にアップロード
 */

// ========================================
// CSVフォーマット（Google推奨）
// ========================================

/*
Google広告カスタマーマッチのCSVフォーマット:

Email,Phone,First Name,Last Name,Country,Zip
user@example.com,+1234567890,John,Doe,US,94043
another@example.com,,Jane,Smith,JP,

※ Email は必須、他はオプション
※ ハッシュ化は Google側で自動実行される（プレーンテキストでOK）
*/


// ========================================
// Firebase → CSV エクスポート（Node.js）
// ========================================

const admin = require('firebase-admin');
const fs = require('fs');

// Firebase初期化
admin.initializeApp({
  credential: admin.credential.applicationDefault(),
  databaseURL: 'https://your-project.firebaseio.com'
});

const db = admin.firestore();

/**
 * ユーザーセグメント別にエクスポート
 */
async function exportCustomerMatch(segment) {
  
  let query;
  
  switch(segment) {
    case 'all':
      // 全ユーザー
      query = db.collection('users');
      break;
      
    case 'free':
      // 無料ユーザー（有料へのアップセル対象）
      query = db.collection('users').where('plan', '==', 'free');
      break;
      
    case 'monthly':
      // 月額ユーザー（年額へのアップセル対象）
      query = db.collection('users').where('plan', '==', 'monthly');
      break;
      
    case 'paid':
      // 有料ユーザー（除外用 or 類似拡張用）
      query = db.collection('users').where('plan', 'in', ['monthly', 'annual']);
      break;
      
    case 'churned':
      // 解約ユーザー（復帰促進用）
      query = db.collection('users').where('status', '==', 'churned');
      break;
      
    case 'high_engagement':
      // 高エンゲージメント（類似拡張用）
      query = db.collection('users').where('sessions', '>=', 10);
      break;
      
    default:
      query = db.collection('users');
  }
  
  const snapshot = await query.get();
  
  // CSVヘッダー
  let csv = 'Email,First Name,Country\n';
  
  snapshot.forEach(doc => {
    const user = doc.data();
    if (user.email) {
      const firstName = user.displayName ? user.displayName.split(' ')[0] : '';
      const country = user.country || '';
      csv += `${user.email},${firstName},${country}\n`;
    }
  });
  
  // ファイル保存
  const filename = `customer_match_${segment}_${Date.now()}.csv`;
  fs.writeFileSync(filename, csv);
  
  console.log(`Exported ${snapshot.size} users to ${filename}`);
  return filename;
}

// 使用例
// exportCustomerMatch('free');      // 無料ユーザー
// exportCustomerMatch('paid');      // 有料ユーザー
// exportCustomerMatch('churned');   // 解約ユーザー

module.exports = { exportCustomerMatch };


// ========================================
// クライアントサイド: リアルタイムオーディエンス更新
// ========================================

/**
 * ユーザーのセグメント変更時にGoogle広告へ通知
 * （Google Ads APIを使用する場合）
 */
const FujisanCustomerMatch = {
  
  // ユーザーデータをdataLayerにプッシュ（GTM経由）
  pushUserData: function(userData) {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      'event': 'user_data_update',
      'user_data': {
        'email': userData.email,
        'phone_number': userData.phone || '',
        'address': {
          'first_name': userData.firstName || '',
          'last_name': userData.lastName || '',
          'country': userData.country || ''
        }
      },
      'user_segment': userData.segment  // free, monthly, annual
    });
  },
  
  // プラン変更時に呼び出し
  onPlanChange: function(email, newPlan) {
    this.pushUserData({
      email: email,
      segment: newPlan
    });
    
    // GA4にもイベント送信
    gtag('event', 'plan_change', {
      'new_plan': newPlan
    });
  }
};

window.FujisanCustomerMatch = FujisanCustomerMatch;


// ========================================
// 推奨オーディエンスリスト
// ========================================

/*
作成すべきカスタマーマッチリスト:

1. 【除外用】有料会員
   - 目的: 新規獲得広告から除外
   - 対象: plan = monthly OR annual
   
2. 【アップセル】無料会員
   - 目的: 有料プランへの転換促進
   - 対象: plan = free, sessions >= 3
   - 広告: 「Unlock unlimited practice」
   
3. 【アップセル】月額会員
   - 目的: 年額プランへの転換促進
   - 対象: plan = monthly, 利用3ヶ月以上
   - 広告: 「Save 45% with annual plan」
   
4. 【復帰促進】解約ユーザー
   - 目的: 再登録を促す
   - 対象: status = churned
   - 広告: 「We miss you! Come back for 50% off」
   
5. 【類似拡張】高エンゲージメント
   - 目的: 類似ユーザーへの広告配信
   - 対象: sessions >= 20, 正解率 >= 70%
   - 使用: Similar Audiences
   
6. 【類似拡張】有料転換済み
   - 目的: 課金しやすいユーザーを見つける
   - 対象: 無料→有料に転換した全ユーザー
   - 使用: Similar Audiences
*/
