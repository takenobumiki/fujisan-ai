// Fujisan.AI - AI Explanation Function (Gemini 1.5 Flash)
// Cost: ~$0.01/user/month

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
    const { word, reading, meaning, skill, userAnswer, correctAnswer, lang } = JSON.parse(event.body);

    // Validate required fields
    if (!word || !correctAnswer) {
      return { 
        statusCode: 400, 
        headers, 
        body: JSON.stringify({ error: 'Missing required fields' }) 
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

    // Build prompt based on skill type
    const skillPrompts = {
      listening: `The user heard the word "${word}" (${reading}) but selected "${userAnswer}" instead of "${correctAnswer}".
Explain why "${correctAnswer}" is correct and how to distinguish similar-sounding words.`,
      
      reading: `The user saw the kanji "${word}" and selected the reading "${userAnswer}" instead of "${correctAnswer}".
Explain the correct reading and any common reading patterns or exceptions.`,
      
      meaning: `The user saw "${word}" (${reading}) and selected the meaning "${userAnswer}" instead of "${correctAnswer}".
Explain the correct meaning and any nuances or usage notes.`,
      
      writing: `The user was asked to write "${reading}" (meaning: ${meaning}) and selected "${userAnswer}" instead of "${correctAnswer}".
Explain the correct kanji and any tips for remembering it.`
    };

    const prompt = `You are a helpful Japanese language tutor for JLPT preparation.

${skillPrompts[skill] || `Explain why the correct answer is "${correctAnswer}" for the word "${word}".`}

Respond in ${lang === 'ja' ? 'Japanese' : lang === 'zh-TW' ? 'Traditional Chinese' : lang === 'zh-CN' ? 'Simplified Chinese' : lang === 'ko' ? 'Korean' : lang === 'vi' ? 'Vietnamese' : lang === 'id' ? 'Indonesian' : 'English'}.

Keep your explanation concise (2-3 sentences) and helpful for a language learner.`;

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
            maxOutputTokens: 256
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
    const explanation = data.candidates?.[0]?.content?.parts?.[0]?.text || 'Unable to generate explanation.';

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ explanation })
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
