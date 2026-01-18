// This function now just forwards to scheduled-context
// The actual caching happens in scheduled-context.js

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
    // Forward to scheduled-context to get cached data
    // In production, this would use a shared cache/database
    // For now, return empty and let client handle it
    
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ 
        contexts: {}, 
        updatedAt: null,
        message: 'Use scheduled-context endpoint to fetch and cache data'
      })
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
