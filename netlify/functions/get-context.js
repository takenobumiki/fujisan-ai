exports.handler = async (event) => {
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'GET, OPTIONS',
    'Content-Type': 'application/json'
  };

  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 204, headers };
  }

  try {
    const { getStore } = await import('@netlify/blobs');
    const store = getStore('talk-context');
    
    const data = await store.get('current', { type: 'json' });
    
    if (!data) {
      return {
        statusCode: 200,
        headers,
        body: JSON.stringify({ contexts: {}, updatedAt: null })
      };
    }

    // 特定の言語だけ返す場合
    const lang = event.queryStringParameters?.lang;
    if (lang && data.contexts[lang]) {
      return {
        statusCode: 200,
        headers,
        body: JSON.stringify({
          context: data.contexts[lang],
          updatedAt: data.updatedAt
        })
      };
    }

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify(data)
    };

  } catch (error) {
    console.error('Error fetching context:', error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: error.message })
    };
  }
};
