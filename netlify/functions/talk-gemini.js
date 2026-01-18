exports.handler = async (event) => {
  // CORS headers
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Content-Type': 'application/json'
  };

  // Handle preflight
  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 204, headers };
  }

  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, headers, body: JSON.stringify({ error: 'Method not allowed' }) };
  }

  try {
    const { messages, systemPrompt } = JSON.parse(event.body);
    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
      return { 
        statusCode: 500, 
        headers, 
        body: JSON.stringify({ error: 'API key not configured' }) 
      };
    }

    // Convert messages to Gemini format
    const geminiMessages = messages.map(m => ({
      role: m.role === 'ai' ? 'model' : 'user',
      parts: [{ text: m.role === 'ai' ? JSON.stringify({ ja: m.ja, en: m.en }) : m.ja }]
    }));

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: geminiMessages,
          systemInstruction: { parts: [{ text: systemPrompt }] },
          tools: [{
            googleSearch: {}
          }],
          generationConfig: {
            temperature: 0.8,
            maxOutputTokens: 500
          }
        })
      }
    );

    const data = await response.json();

    if (data.error) {
      return { 
        statusCode: 400, 
        headers, 
        body: JSON.stringify({ error: data.error.message }) 
      };
    }

    const text = data.candidates[0].content.parts[0].text;
    
    // Parse JSON response
    const jsonMatch = text.match(/\{[\s\S]*\}/);
    if (jsonMatch) {
      return { 
        statusCode: 200, 
        headers, 
        body: jsonMatch[0] 
      };
    }

    return { 
      statusCode: 200, 
      headers, 
      body: JSON.stringify({ ja: text, en: '' }) 
    };

  } catch (error) {
    return { 
      statusCode: 500, 
      headers, 
      body: JSON.stringify({ error: error.message }) 
    };
  }
};
