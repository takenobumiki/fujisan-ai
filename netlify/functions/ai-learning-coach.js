// Fujisan.AI - AI Learning Coach (Adaptive Learning Engine)
// Based on Instructional Design & SLA Theory
// Analyzes learner data and provides personalized recommendations

exports.handler = async (event, context) => {
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Content-Type': 'application/json'
  };

  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 200, headers, body: '' };
  }

  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, headers, body: JSON.stringify({ error: 'Method not allowed' }) };
  }

  try {
    const { learnerData, level, lang } = JSON.parse(event.body);

    if (!learnerData) {
      return { 
        statusCode: 400, 
        headers, 
        body: JSON.stringify({ error: 'Learner data required' }) 
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

    const prompt = `You are a warm, supportive Learning Coach and Life Coach for JLPT ${level} preparation. Your role is to help learners not just study effectively, but stay motivated and believe in their growth.

**Analysis Framework (use internally, don't mention theory names):**

SLA & Instructional Design:
- Krashen's i+1: Is difficulty appropriate?
- Output Hypothesis: Balance of receptive vs productive skills?
- Forgetting Curve: Which items need review?
- Cognitive Load: Signs of overload?

Life Coaching Principles:
- Growth Mindset: Frame challenges as opportunities
- Small Wins: Celebrate progress, no matter how small
- Intrinsic Motivation: Connect learning to personal goals
- Self-Efficacy: Build confidence through achievable steps
- Resilience: Normalize struggles as part of the journey

**Learner Data:**
${JSON.stringify(learnerData, null, 2)}

**Response Language:** ${langMap[lang] || 'English'}

**Output JSON (use warm, encouraging, coach-like language):**
{
  "weeklyFocus": "One clear, actionable focus in 10 words or less",
  "focusReason": "Why this matters for THEIR journey - 1 motivating sentence",
  "skillBalance": {
    "receptive": 0-100,
    "productive": 0-100,
    "insight": "Supportive observation about the gap (if any) - frame positively"
  },
  "recommendedUnits": [array of 1-3 unit numbers],
  "reviewUnits": [array of 0-3 units needing review],
  "encouragement": "Personalized motivational message (2-3 sentences). Reference their specific progress. Use coaching techniques: acknowledge effort, highlight growth, inspire next step. Make them feel seen and capable.",
  "celebrateWin": "One specific thing they did well recently (optional, only if data shows clear strength)"
}

**Tone Guidelines:**
- Speak like a supportive coach who genuinely believes in them
- Use "you" and "your" to make it personal
- Acknowledge effort, not just results
- Frame weaknesses as "growth areas" or "next opportunities"
- Be specific - generic praise feels empty
- Balance honesty with encouragement`;

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${GEMINI_API_KEY}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }],
          generationConfig: {
            temperature: 0.7,
            maxOutputTokens: 512,
            responseMimeType: 'application/json'
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
    const textContent = data.candidates?.[0]?.content?.parts?.[0]?.text;
    
    let analysis;
    try {
      analysis = JSON.parse(textContent);
    } catch (e) {
      // If JSON parsing fails, try to extract JSON from markdown code blocks
      const jsonMatch = textContent.match(/```json\s*([\s\S]*?)\s*```/);
      if (jsonMatch) {
        analysis = JSON.parse(jsonMatch[1]);
      } else {
        analysis = {
          weeklyFocus: "Keep practicing daily!",
          focusReason: "Consistency is key to language learning.",
          skillBalance: { receptive: 50, productive: 50, insight: "Balanced practice" },
          recommendedUnits: [],
          reviewUnits: [],
          encouragement: "You're making progress!"
        };
      }
    }

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ analysis })
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
