// Get news for user's country
// Reads from Netlify Blobs cache (populated daily by scheduled-news.js)
// Falls back to live fetch if cache miss

const { getStore } = require("@netlify/blobs");

// Country to language mapping for news
const COUNTRY_LANG = {
  'JP': 'ja', 'US': 'en', 'GB': 'en', 'AU': 'en', 'CA': 'en',
  'CN': 'zh', 'TW': 'zh', 'HK': 'zh',
  'KR': 'ko',
  'VN': 'vi',
  'ID': 'id',
  'ES': 'es', 'MX': 'es', 'AR': 'es', 'CO': 'es', 'PE': 'es', 'CL': 'es',
  'BR': 'pt', 'PT': 'pt',
  'FR': 'fr', 'DE': 'de', 'IT': 'it', 'NL': 'nl', 'RU': 'ru',
  'TH': 'th', 'MY': 'ms', 'PH': 'en', 'SG': 'en'
};

// Country names in Japanese for Sakura to use
const COUNTRY_NAMES_JA = {
  'JP': '日本', 'US': 'アメリカ', 'GB': 'イギリス', 'AU': 'オーストラリア', 'CA': 'カナダ',
  'CN': '中国', 'TW': '台湾', 'HK': '香港',
  'KR': '韓国',
  'VN': 'ベトナム',
  'ID': 'インドネシア',
  'ES': 'スペイン', 'MX': 'メキシコ', 'AR': 'アルゼンチン', 'CO': 'コロンビア', 'PE': 'ペルー', 'CL': 'チリ',
  'BR': 'ブラジル', 'PT': 'ポルトガル',
  'FR': 'フランス', 'DE': 'ドイツ', 'IT': 'イタリア', 'NL': 'オランダ', 'RU': 'ロシア',
  'TH': 'タイ', 'MY': 'マレーシア', 'PH': 'フィリピン', 'SG': 'シンガポール'
};

exports.handler = async (event) => {
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Content-Type': 'application/json',
    'Cache-Control': 'public, max-age=3600' // Browser cache for 1 hour
  };

  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 200, headers, body: '' };
  }

  try {
    // Get country from query param
    const params = event.queryStringParameters || {};
    let country = params.country || 'JP';
    country = country.toUpperCase();
    
    // Try to get from Netlify Blobs cache first
    try {
      const store = getStore("news-cache");
      const cached = await store.get(`news_${country}`, { type: 'json' });
      
      if (cached && cached.news && cached.news.length > 0) {
        // Check if cache is not too old (max 48 hours)
        const fetchedAt = new Date(cached.fetchedAt);
        const now = new Date();
        const hoursSinceFetch = (now - fetchedAt) / (1000 * 60 * 60);
        
        if (hoursSinceFetch < 48) {
          return {
            statusCode: 200,
            headers,
            body: JSON.stringify({
              news: cached.news,
              country: cached.country,
              countryNameJa: cached.countryNameJa,
              cached: true,
              fetchedAt: cached.fetchedAt
            })
          };
        }
      }
    } catch (blobError) {
      console.log('Blob cache miss or error:', blobError.message);
    }
    
    // Fallback: fetch live from Google News RSS
    console.log(`Cache miss for ${country}, fetching live...`);
    const lang = COUNTRY_LANG[country] || 'en';
    const rssUrl = `https://news.google.com/rss?hl=${lang}&gl=${country}&ceid=${country}:${lang}`;
    
    const response = await fetch(rssUrl);
    const xml = await response.text();
    const news = parseRssNews(xml, 5);
    
    // Try to cache the result for next time
    try {
      const store = getStore("news-cache");
      await store.setJSON(`news_${country}`, {
        news: news,
        country: country,
        countryNameJa: COUNTRY_NAMES_JA[country] || country,
        fetchedAt: new Date().toISOString()
      });
    } catch (cacheError) {
      console.log('Failed to cache:', cacheError.message);
    }

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        news: news,
        country: country,
        countryNameJa: COUNTRY_NAMES_JA[country] || country,
        cached: false
      })
    };

  } catch (error) {
    console.error('News fetch error:', error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: 'Failed to fetch news', message: error.message })
    };
  }
};

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
    'technology': 'テクノロジー', 'tech': 'テクノロジー', 'AI': 'AI', 'robot': 'ロボット',
    'economy': '経済', 'stock': '株式', 'market': '市場', '経済': '経済', 'bitcoin': '仮想通貨',
    'health': '健康', 'covid': 'コロナ', 'virus': 'ウイルス', 'vaccine': 'ワクチン',
    'food': '食べ物', 'restaurant': 'レストラン', '料理': '料理',
    'travel': '旅行', 'tourism': '観光', '旅行': '旅行',
    'anime': 'アニメ', 'manga': '漫画', 'アニメ': 'アニメ',
    'game': 'ゲーム', 'gaming': 'ゲーム', 'ゲーム': 'ゲーム'
  };
  
  const lowerTitle = title.toLowerCase();
  for (const [keyword, topic] of Object.entries(keywords)) {
    if (lowerTitle.includes(keyword.toLowerCase())) {
      return topic;
    }
  }
  
  return 'ニュース';
}
