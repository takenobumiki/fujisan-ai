// Fujisan.AI - AI Question Function (Gemini 1.5 Flash)
// For Premium (松) users: Ask any Japanese learning question

exports.handler = async (event, context) => {
  // CORS headers
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Content-Type': 'application/json'
  };

  // Handle preflight
  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 200, headers, body: '' };
  }

  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, headers, body: JSON.stringify({ error: 'Method not allowed' }) };
  }

  try {
    const { question, context: userContext, level, lang } = JSON.parse(event.body);

    // Validate required fields
    if (!question) {
      return { 
        statusCode: 400, 
        headers, 
        body: JSON.stringify({ error: 'Question is required' }) 
      };
    }

    const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
    if (!GEMINI_API_KEY) {
      return { 
        statusCode: 500, 
        headers, 
        body: JSON.stringify({ error: 'API key not configured' }) 
      };
    }

    const langMap = {
      'en': 'English',
      'ja': 'Japanese',
      'zh-TW': 'Traditional Chinese',
      'zh-CN': 'Simplified Chinese',
      'ko': 'Korean',
      'vi': 'Vietnamese',
      'id': 'Indonesian'
    };

    const prompt = `You are a helpful Japanese language tutor specializing in JLPT ${level || 'N5-N1'} preparation.

${userContext ? `Context: ${userContext}\n\n` : ''}User's question: ${question}

Respond in ${langMap[lang] || 'English'}.

Provide a clear, helpful answer. If it's about grammar, include examples. If it's about vocabulary, explain nuances. Keep the response concise but thorough (3-5 sentences typically).`;

    // Call Gemini API
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${GEMINI_API_KEY}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }],
          generationConfig: {
            temperature: 0.7,
            maxOutputTokens: 512
          }
        })
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Gemini API error:', errorText);
      return { 
        statusCode: 500, 
        headers, 
        body: JSON.stringify({ error: 'AI service error' }) 
      };
    }

    const data = await response.json();
    const answer = data.candidates?.[0]?.content?.parts?.[0]?.text || 'Unable to generate answer.';

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ answer })
    };

  } catch (error) {
    console.error('Function error:', error);
    return { 
      statusCode: 500, 
      headers, 
      body: JSON.stringify({ error: 'Internal server error' }) 
    };
  }
};
