const { schedule } = require('@netlify/functions');

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

  try {
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

// メイン処理
const handler = async (event) => {
  const apiKey = process.env.GEMINI_API_KEY;
  
  if (!apiKey) {
    return { statusCode: 500, body: 'API key not configured' };
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
    await new Promise(resolve => setTimeout(resolve, 1000));
  }

  // Netlify Blobsに保存（または環境変数でFirestoreに保存）
  // ここではBlobs APIを使用
  const { getStore } = await import('@netlify/blobs');
  const store = getStore('talk-context');
  
  await store.setJSON('current', {
    contexts: results,
    updatedAt: timestamp
  });

  console.log('Context cache updated:', timestamp);

  return {
    statusCode: 200,
    body: JSON.stringify({ success: true, updatedAt: timestamp, languages: Object.keys(results) })
  };
};

// 8:00, 13:00, 17:00, 21:00 JST (UTC: 23:00, 4:00, 8:00, 12:00)
// Cron: 分 時 日 月 曜日
module.exports.handler = schedule('0 23,4,8,12 * * *', handler);
