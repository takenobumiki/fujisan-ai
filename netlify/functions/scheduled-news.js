// Scheduled function to fetch and cache news daily
// Runs once per day at 6:00 AM UTC
// Uses Netlify Blobs for persistent storage (free tier: 1GB)

const { getStore } = require("@netlify/blobs");

// Main countries to cache news for
const COUNTRIES = ['JP', 'US', 'KR', 'CN', 'TW', 'VN', 'ID', 'BR', 'ES', 'TH'];

// Country to language mapping
const COUNTRY_LANG = {
  'JP': 'ja', 'US': 'en', 'GB': 'en', 'AU': 'en', 'CA': 'en',
  'CN': 'zh', 'TW': 'zh', 'HK': 'zh',
  'KR': 'ko',
  'VN': 'vi',
  'ID': 'id',
  'ES': 'es', 'MX': 'es', 'AR': 'es',
  'BR': 'pt', 'PT': 'pt',
  'FR': 'fr', 'DE': 'de', 'TH': 'th'
};

// Country names in Japanese
const COUNTRY_NAMES_JA = {
  'JP': '日本', 'US': 'アメリカ', 'GB': 'イギリス', 'AU': 'オーストラリア',
  'CN': '中国', 'TW': '台湾', 'HK': '香港', 'KR': '韓国',
  'VN': 'ベトナム', 'ID': 'インドネシア',
  'ES': 'スペイン', 'MX': 'メキシコ', 'BR': 'ブラジル', 'PT': 'ポルトガル',
  'FR': 'フランス', 'DE': 'ドイツ', 'TH': 'タイ'
};

// Netlify Scheduled Function config
exports.config = {
  schedule: "0 6 * * *"  // Run daily at 6:00 AM UTC
};

exports.handler = async (event) => {
  console.log('Starting daily news fetch...');
  
  try {
    const store = getStore("news-cache");
    const results = {};
    
    for (const country of COUNTRIES) {
      try {
        console.log(`Fetching news for ${country}...`);
        const news = await fetchNewsForCountry(country);
        
        if (news && news.length > 0) {
          const cacheData = {
            news: news,
            country: country,
            countryNameJa: COUNTRY_NAMES_JA[country] || country,
            fetchedAt: new Date().toISOString()
          };
          
          // Store in Netlify Blobs
          await store.setJSON(`news_${country}`, cacheData);
          results[country] = { success: true, count: news.length };
          console.log(`Cached ${news.length} news items for ${country}`);
        } else {
          results[country] = { success: false, error: 'No news found' };
        }
        
        // Small delay to avoid rate limiting
        await new Promise(r => setTimeout(r, 500));
        
      } catch (err) {
        console.error(`Error fetching news for ${country}:`, err.message);
        results[country] = { success: false, error: err.message };
      }
    }
    
    // Store metadata about the last fetch
    await store.setJSON('_metadata', {
      lastFetch: new Date().toISOString(),
      countries: COUNTRIES,
      results: results
    });
    
    console.log('Daily news fetch complete:', results);
    
    return {
      statusCode: 200,
      body: JSON.stringify({ success: true, results })
    };
    
  } catch (error) {
    console.error('News fetch failed:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message })
    };
  }
};

// Fetch news for a specific country using Google News RSS (FREE)
async function fetchNewsForCountry(country) {
  const lang = COUNTRY_LANG[country] || 'en';
  const rssUrl = `https://news.google.com/rss?hl=${lang}&gl=${country}&ceid=${country}:${lang}`;
  
  const response = await fetch(rssUrl);
  if (!response.ok) {
    throw new Error(`RSS fetch failed: ${response.status}`);
  }
  
  const xml = await response.text();
  return parseRssNews(xml, 5);
}

// Parse RSS XML to extract news items
function parseRssNews(xml, limit = 5) {
  const news = [];
  const itemRegex = /<item>([\s\S]*?)<\/item>/g;
  let match;
  
  while ((match = itemRegex.exec(xml)) !== null && news.length < limit) {
    const item = match[1];
    
    const title = extractTag(item, 'title');
    const link = extractTag(item, 'link');
    const pubDate = extractTag(item, 'pubDate');
    const source = extractTag(item, 'source');
    
    if (title) {
      news.push({
        title: decodeHtmlEntities(title),
        link,
        pubDate,
        source: source || 'News',
        topicJa: generateTopicJa(title)
      });
    }
  }
  
  return news;
}

function extractTag(xml, tag) {
  const regex = new RegExp(`<${tag}[^>]*><!\\[CDATA\\[([\\s\\S]*?)\\]\\]><\\/${tag}>|<${tag}[^>]*>([\\s\\S]*?)<\\/${tag}>`);
  const match = xml.match(regex);
  return match ? (match[1] || match[2] || '').trim() : '';
}

function decodeHtmlEntities(text) {
  return text
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&nbsp;/g, ' ');
}

// Generate Japanese topic from title keywords
function generateTopicJa(title) {
  const keywords = {
    'election': '選挙', 'vote': '選挙', '投票': '選挙', '大統領': '政治',
    'weather': '天気', 'rain': '天気', 'storm': '天気', 'snow': '雪', 'typhoon': '台風',
    'earthquake': '地震', '地震': '地震', 'tsunami': '津波',
    'sports': 'スポーツ', 'soccer': 'サッカー', 'football': 'サッカー', 'baseball': '野球', 
    'basketball': 'バスケ', 'tennis': 'テニス', 'olympics': 'オリンピック',
    'movie': '映画', 'film': '映画', '映画': '映画', 'hollywood': '映画',
    'music': '音楽', 'concert': 'コンサート', '音楽': '音楽', 'k-pop': 'K-POP', 'j-pop': 'J-POP',
    'technology': 'テクノロジー', 'tech': 'テクノロジー', 'AI': 'AI', 'robot': 'ロボット', 'apple': 'テック', 'google': 'テック',
    'economy': '経済', 'stock': '株式', 'market': '市場', '経済': '経済', 'bitcoin': '仮想通貨',
    'health': '健康', 'covid': 'コロナ', 'virus': 'ウイルス', 'vaccine': 'ワクチン',
    'food': '食べ物', 'restaurant': 'レストラン', '料理': '料理', 'ramen': 'ラーメン',
    'travel': '旅行', 'tourism': '観光', '旅行': '旅行', 'hotel': 'ホテル',
    'anime': 'アニメ', 'manga': '漫画', 'アニメ': 'アニメ', 'ghibli': 'ジブリ',
    'game': 'ゲーム', 'gaming': 'ゲーム', 'ゲーム': 'ゲーム', 'nintendo': '任天堂', 'playstation': 'ゲーム'
  };
  
  const lowerTitle = title.toLowerCase();
  for (const [keyword, topic] of Object.entries(keywords)) {
    if (lowerTitle.includes(keyword.toLowerCase())) {
      return topic;
    }
  }
  
  return 'ニュース';
}
