// Scheduled function to cache context for all regions
// Can be triggered manually or via scheduled function

// 対象言語と地域
const REGIONS = {
  'ja': { country: 'Japan', city: 'Tokyo', timezone: 'Asia/Tokyo' },
  'en': { country: 'USA', city: 'New York', timezone: 'America/New_York' },
  'zh-CN': { country: 'China', city: 'Beijing', timezone: 'Asia/Shanghai' },
  'zh-TW': { country: 'Taiwan', city: 'Taipei', timezone: 'Asia/Taipei' },
  'ko': { country: 'South Korea', city: 'Seoul', timezone: 'Asia/Seoul' },
  'vi': { country: 'Vietnam', city: 'Hanoi', timezone: 'Asia/Ho_Chi_Minh' },
  'id': { country: 'Indonesia', city: 'Jakarta', timezone: 'Asia/Jakarta' },
  'es': { country: 'Spain', city: 'Madrid', timezone: 'Europe/Madrid' },
  'pt': { country: 'Brazil', city: 'São Paulo', timezone: 'America/Sao_Paulo' }
};

// Gemini APIでコンテキスト情報を取得
async function fetchContextForRegion(lang, region, apiKey) {
  const prompt = `You are gathering current information for ${region.country} (${region.city}).
Provide the following in JSON format. Be concise and accurate.

{
  "weather": {
    "condition": "sunny/cloudy/rainy/snowy/etc",
    "temperature": "temperature in Celsius",
    "description": "brief description in ${lang === 'ja' ? 'Japanese' : 'English'}"
  },
  "news": [
    {"headline": "news headline 1", "summary": "brief summary"},
    {"headline": "news headline 2", "summary": "brief summary"}
  ],
  "events": {
    "holiday": "current or upcoming holiday if any, null otherwise",
    "events": ["notable event 1", "notable event 2"]
  },
  "sports": {
    "recent": "recent major sports result or upcoming match",
    "popular": "currently popular sport topic"
  },
  "entertainment": {
    "movie": "popular movie currently",
    "drama": "popular TV drama currently"
  },
  "anime": {
    "trending": ["top trending anime 1", "top trending anime 2", "top trending anime 3"],
    "manga": ["popular manga 1", "popular manga 2"],
    "news": "recent anime/manga news if any"
  }
}

Return ONLY valid JSON, no markdown, no explanation.`;

  try {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{ role: 'user', parts: [{ text: prompt }] }],
          tools: [{ googleSearch: {} }],
          generationConfig: {
            temperature: 0.3,
            maxOutputTokens: 1000
          }
        })
      }
    );

    const data = await response.json();
    
    if (data.error) {
      console.error(`Error for ${lang}:`, data.error);
      return null;
    }

    const text = data.candidates[0].content.parts[0].text;
    const jsonMatch = text.match(/\{[\s\S]*\}/);
    if (jsonMatch) {
      return JSON.parse(jsonMatch[0]);
    }
  } catch (e) {
    console.error(`Parse error for ${lang}:`, e);
  }
  
  return null;
}

// In-memory cache (will be reset on cold start, but that's OK)
let cachedContexts = null;
let cacheTimestamp = null;

// メイン処理
exports.handler = async (event) => {
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Content-Type': 'application/json'
  };

  // Handle preflight
  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 204, headers };
  }

  const apiKey = process.env.GEMINI_API_KEY;
  
  if (!apiKey) {
    return { statusCode: 500, headers, body: JSON.stringify({ error: 'API key not configured' }) };
  }

  // Check if we should use cache (within 2 hours)
  const now = Date.now();
  if (cachedContexts && cacheTimestamp && (now - cacheTimestamp < 2 * 60 * 60 * 1000)) {
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        contexts: cachedContexts,
        updatedAt: new Date(cacheTimestamp).toISOString(),
        fromCache: true
      })
    };
  }

  const results = {};
  const timestamp = new Date().toISOString();

  // 各言語のコンテキストを取得
  for (const [lang, region] of Object.entries(REGIONS)) {
    console.log(`Fetching context for ${lang} (${region.country})...`);
    const context = await fetchContextForRegion(lang, region, apiKey);
    if (context) {
      results[lang] = {
        ...context,
        region: region,
        updatedAt: timestamp
      };
    }
    // Rate limit対策: 少し待つ
    await new Promise(resolve => setTimeout(resolve, 500));
  }

  // Update cache
  cachedContexts = results;
  cacheTimestamp = now;

  console.log('Context cache updated:', timestamp);

  return {
    statusCode: 200,
    headers,
    body: JSON.stringify({ 
      contexts: results, 
      updatedAt: timestamp,
      languages: Object.keys(results)
    })
  };
};
