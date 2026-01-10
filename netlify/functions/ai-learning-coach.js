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

    const prompt = `You are a warm, supportive Learning Coach and Life Coach for JLPT ${level} preparation. Your role is to help learners study effectively and stay motivated.

**Analysis Framework (use internally, don't mention theory names to user):**
- Krashen's i+1: Is the current level appropriate?
- Output Hypothesis: Is there a gap between receptive (listening/reading) and productive (meaning/writing) skills?
- Forgetting Curve: Are there items or units that need review?
- Cognitive Load: Signs of overwhelm (low accuracy, inconsistent study)?
- Growth Mindset: Frame challenges as opportunities
- Self-Efficacy: Build confidence through achievable steps

**Learner Data:**
- Level: ${level}
- Total answers: ${learnerData.totalAnswers}
- Overall accuracy: ${learnerData.accuracy}%
- Study streak: ${learnerData.streak} days
- Average daily answers: ${learnerData.avgDailyAnswers}
- Days studied: ${learnerData.studyDays}

**Skill Balance:**
- Listening: ${learnerData.skillStats?.listening?.total || 0} answers, ${learnerData.skillStats?.listening?.total > 0 ? Math.round(learnerData.skillStats.listening.correct / learnerData.skillStats.listening.total * 100) : 0}% correct
- Reading: ${learnerData.skillStats?.reading?.total || 0} answers, ${learnerData.skillStats?.reading?.total > 0 ? Math.round(learnerData.skillStats.reading.correct / learnerData.skillStats.reading.total * 100) : 0}% correct
- Meaning: ${learnerData.skillStats?.meaning?.total || 0} answers, ${learnerData.skillStats?.meaning?.total > 0 ? Math.round(learnerData.skillStats.meaning.correct / learnerData.skillStats.meaning.total * 100) : 0}% correct
- Writing: ${learnerData.skillStats?.writing?.total || 0} answers, ${learnerData.skillStats?.writing?.total > 0 ? Math.round(learnerData.skillStats.writing.correct / learnerData.skillStats.writing.total * 100) : 0}% correct
- Receptive (Listen+Read) average: ${learnerData.receptiveAccuracy}%
- Productive (Meaning+Write) average: ${learnerData.productiveAccuracy}%

**Category Performance:**
${JSON.stringify(learnerData.categoryWeakness || [])}

**Unit Progress:**
- Completed units: ${JSON.stringify(learnerData.completedUnits || [])}
- In progress: ${JSON.stringify(learnerData.inProgressUnits || [])}
- Units needing review (low accuracy): ${JSON.stringify(learnerData.unitsNeedingReview || [])}

**Recent Mistakes (last 20):**
${(learnerData.recentWrongItems || []).slice(0, 10).map(w => `- ${w.word} (${w.category}/${w.skill})`).join('\n') || 'None yet'}

**User's Goals:**
- Exam date: ${learnerData.examDate || 'Not set'}
- Daily study goal: ${learnerData.dailyStudyTime || 'Not set'} minutes

**Response Language:** ${langMap[lang] || 'English'}

**Output JSON (be specific based on their actual data):**
{
  "weeklyFocus": "One clear, actionable focus in 10 words or less (based on their weakest area)",
  "focusReason": "Why this matters - reference their specific data (e.g., 'Your listening is at 85%, but meaning is 60%')",
  "skillBalance": {
    "receptive": ${learnerData.receptiveAccuracy || 0},
    "productive": ${learnerData.productiveAccuracy || 0},
    "insight": "Specific observation about the skill gap and what to do"
  },
  "recommendedUnits": [next logical units to study based on their progress],
  "reviewUnits": [${(learnerData.unitsNeedingReview || []).slice(0, 3).join(', ')}],
  "encouragement": "Personalized message referencing their actual progress (e.g., '${learnerData.streak} day streak!', '${learnerData.totalAnswers} questions completed'). Be specific, not generic.",
  "celebrateWin": "One specific achievement from their data (highest skill, completed units, streak, etc.)"
}

**Critical: Be specific!** Reference actual numbers from their data. Generic praise like "Great job!" is not helpful.`;

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
