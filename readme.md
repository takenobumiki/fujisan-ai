# Fujisan.AI Framework Documentation

**Version**: 16.0.0  
**Last Updated**: 2024-12-31  
**Author**: TORAIZ Inc.

---

## 📋 Table of Contents

1. [Overview](#overview)
2. [Value Proposition](#value-proposition)
3. [Architecture](#architecture)
4. [Learning System](#learning-system)
5. [Data Structure](#data-structure)
6. [Version Control](#version-control)
7. [Installation](#installation)
8. [File Structure](#file-structure)
9. [API Reference](#api-reference)
10. [Changelog](#changelog)

---

## Overview

Fujisan.AI is a comprehensive JLPT (Japanese Language Proficiency Test) preparation application designed for effective Japanese language learning through a multi-skill approach.

### Key Features

- **4-Skill Learning System**: Listening, Reading, Meaning, Writing
- **JLPT Levels**: N5 → N1 full support
- **Mock Tests**: 100 sets (20 per level) in official JLPT format
- **Progress Tracking**: Unit-based completion system
- **Multi-language Support**: EN, 繁中, 简中, 한국어, Tiếng Việt, Indonesia
- **PWA Support**: Offline learning capability

### Target Users

- JLPT exam candidates (N5-N1)
- Japanese language learners worldwide
- Language schools and institutions

---

## Value Proposition

### Core Marketing Messages

| Message | Description |
|---------|-------------|
| **1語4スキルで確実に定着** | Each word is learned through 4 different skills (Listening, Reading, Meaning, Writing), ensuring deep retention without complex SRS algorithms |
| **1日15分、45日でN5マスター** | Clear, achievable goals with predictable completion timelines |
| **模試100セットで本番対策** | 20 mock tests per level (N5-N1), the most comprehensive JLPT practice available |

### Why NOT SRS (Spaced Repetition System)

Traditional SRS apps (like Anki) have drawbacks for JLPT preparation:

| SRS Problems | Fujisan.AI Solution |
|--------------|---------------------|
| "Today's review: 247 items" → Overwhelming | Fixed 22 items/day = predictable |
| Never-ending reviews → No completion feeling | Unit-based = clear progress |
| One skill only → Shallow learning | 4 skills = deep mastery |
| Complex setup → User friction | Start immediately → Zero friction |

**Fujisan.AI's 4-Skill System naturally provides repetition:**
```
1 word × 4 skills = 4 exposures per item
+ Review mode for mistakes = additional repetition
= Effective retention WITHOUT complex algorithms
```

### Competitive Advantages

| Feature | Fujisan.AI | Duolingo | JLPT Apps | Anki |
|---------|------------|----------|-----------|------|
| JLPT-focused | ✅ 100% | ❌ General | ✅ | ❌ |
| Mock tests | ✅ 100 sets | ❌ | △ 5-10 | ❌ |
| 4-skill learning | ✅ Unique | ❌ | ❌ | ❌ |
| Clear completion | ✅ Unit-based | ❌ | △ | ❌ |
| Audio included | ✅ | ✅ | △ | ❌ |
| Multi-language | ✅ 6 languages | ✅ | △ | ❌ |
| Price | ¥980-1,980/mo | ¥1,100/mo | ¥500-1,000 | Free |

### Target Positioning

```
         High Price
              │
      Language Schools (¥100,000+)
              │
      Online Courses (¥10,000+)
              │
              │   ★ Fujisan.AI
              │   JLPT-focused × Affordable
              │   
──────────────┼──────────────
  JLPT-Only   │  General
              │
   Free JLPT  │     Duolingo
   Apps       │     Busuu
              │
         Low Price
```

### Key Metrics to Communicate

| Metric | Value | Comparison |
|--------|-------|------------|
| Mock test sets | 100 | Competitors: 5-20 |
| Learning skills | 4 per item | Competitors: 1 |
| N5 completion | 45 days | Clear timeline |
| N5→N1 completion | 16 months | Structured path |
| Languages | 6 | Broad accessibility |
| Offline support | ✅ PWA | Study anywhere |

---

## Pricing Strategy

### Pricing Plans

| Plan | Monthly | Yearly | Yearly/Month | Target Ratio |
|------|---------|--------|--------------|--------------|
| 梅 Basic | $7.99 | $47.99 | $4.00 | 15% |
| **竹 Standard** | **$14.99** | **$83.99** | **$7.00** | **70%** |
| 松 Premium | $29.99 | $167.99 | $14.00 | 15% |

**Yearly discount: ~47% OFF (industry standard)**

### Feature Matrix

| Feature | 梅 Basic | 竹 Standard | 松 Premium |
|---------|----------|-------------|------------|
| **Drill** | N5 only | All levels | All levels |
| **Mock Tests** | ❌ | 100 sets (20×5) | 100 sets (20×5) |
| **4-Skill Learning** | ✅ | ✅ | ✅ |
| **Review Mode** | ✅ | ✅ | ✅ |
| **Progress Tracking** | Basic | Detailed | Detailed |
| **Offline Mode** | ❌ | ✅ | ✅ |
| **Ads** | Yes | No | No |
| **AI Explanation** | ❌ | ❌ | ✅ |
| **AI Q&A** | ❌ | ❌ | ✅ |

### Free Trial

| Item | Details |
|------|---------|
| Duration | 7 days |
| Features | All features (Premium equivalent) |
| Requirement | **Credit card registration required** |
| Purpose | Seriousness filter |

### Plan Changes

| Change Type | Timing |
|-------------|--------|
| Upgrade | Next billing cycle |
| Downgrade | Next billing cycle |

*No prorated charges. Simple billing management.*

### Why Users Choose 竹 (70% Target)

**梅 → 竹 Upgrade Triggers:**
| 梅 Limitation | User Psychology |
|---------------|-----------------|
| N5 only | "I want to study N4..." |
| No mock tests | "I can't prepare for the real exam" |
| Ads | "Annoying, want to remove" |
| No offline | "Can't use during commute" |

**竹 → 松 Upgrade Barriers (Intentional):**
| 竹 Satisfaction | User Psychology |
|-----------------|-----------------|
| All levels | "I can go to N1" |
| 100 mock tests | "More than enough" |
| No ads | "Comfortable" |
| Offline | "Can use anywhere" |

→ Most users: "AI is nice, but not worth extra $15/month"

### Unit Economics

**Assumptions:**
- CAC: $20 (advertising-focused)
- 竹 ratio: 70%
- Yearly ratio: 50%
- Monthly churn: 15%
- Yearly churn: 40% (at renewal)

**Per 100 Users Acquired:**

| Metric | Value |
|--------|-------|
| First Year Revenue | $8,204 |
| Average LTV | $82.04 |
| **LTV/CAC** | **4.1** ✅ |
| **CAC Payback** | **1.7 months** ✅ |

### Stripe Implementation

**Products to Create:**
```
Fujisan Basic    → $7.99/month, $47.99/year
Fujisan Standard → $14.99/month, $83.99/year  
Fujisan Premium  → $29.99/month, $167.99/year
```

**Subscription Settings:**
```javascript
// Plan change (no proration)
stripe.subscriptions.update(subscriptionId, {
  items: [{ price: newPriceId }],
  proration_behavior: 'none',
  billing_cycle_anchor: 'unchanged'
});
```

**Customer Portal:** Enable for self-service plan changes, cancellations, and billing history.

---

## AI Integration (Premium Feature)

### Technology Stack

| Component | Choice | Cost |
|-----------|--------|------|
| **AI Model** | Gemini 1.5 Flash | ~$0.01/user/month |
| **Backend** | Netlify Functions | Free tier |
| **API** | Google Generative AI | Pay-as-you-go |

### AI Features

| Feature | Description | Endpoint |
|---------|-------------|----------|
| **AI Explanation** | Detailed explanation when user answers incorrectly | `/.netlify/functions/ai-explain` |
| **AI Q&A** | Ask any Japanese learning question | `/.netlify/functions/ai-question` |

### Setup Instructions

1. **Get Gemini API Key**
   - Visit: https://aistudio.google.com/app/apikey
   - Create new API key

2. **Configure Netlify**
   ```bash
   # In Netlify Dashboard → Site settings → Environment variables
   GEMINI_API_KEY=your-api-key-here
   ```

3. **Deploy**
   ```bash
   netlify deploy --prod
   ```

### Cost Analysis

| Usage | Tokens/Request | Requests/User/Month | Cost/User/Month |
|-------|----------------|---------------------|-----------------|
| AI Explanation | ~800 | 50 | $0.006 |
| AI Q&A | ~1000 | 30 | $0.005 |
| **Total** | - | 80 | **~$0.01** |

### API Request Format

**AI Explanation:**
```javascript
POST /.netlify/functions/ai-explain
{
  "word": "食べる",
  "reading": "たべる", 
  "meaning": "to eat",
  "skill": "meaning",
  "userAnswer": "to drink",
  "correctAnswer": "to eat",
  "lang": "en"
}
```

**AI Q&A:**
```javascript
POST /.netlify/functions/ai-question
{
  "question": "What's the difference between は and が?",
  "context": "User studying N5, 80% accuracy",
  "level": "N5",
  "lang": "en"
}
```

### Fallback Behavior

If Netlify Functions unavailable:
1. Try Firebase Vertex AI (if configured)
2. Fall back to local pre-written responses

---

## Architecture

### Technology Stack

```
┌─────────────────────────────────────┐
│            Frontend                 │
├─────────────────────────────────────┤
│  HTML5 / CSS3 / Vanilla JavaScript  │
│  PWA (Service Worker)               │
│  LocalStorage for state             │
└─────────────────────────────────────┘
         │
         ▼
┌─────────────────────────────────────┐
│            Data Layer               │
├─────────────────────────────────────┤
│  JSON-based vocabulary data         │
│  Lazy loading per level             │
│  Audio files (MP3)                  │
└─────────────────────────────────────┘
```

### File Structure

```
fujisan-ai/
├── app.html              # Main application (559 lines)
├── index.html            # Landing page
├── css/
│   └── style.css         # Styles (491 lines)
├── js/
│   └── app.js            # Application logic (2,496 lines)
├── data/
│   ├── n5/               # N5 level data
│   │   ├── vocab.js      # 800 vocabulary items
│   │   ├── kanji.js      # 100 kanji items
│   │   └── grammar.js    # 80 grammar patterns
│   ├── n4/               # N4 level data
│   ├── n3/               # N3 level data
│   ├── n2/               # N2 level data
│   ├── n1/               # N1 level data
│   └── mock/             # Mock test data
│       └── n5/
│           └── mock.js   # 20 practice sets
├── audio/
│   └── n5/               # Audio files for mock tests
│       ├── v1/           # Set 1 audio
│       ├── v2/           # Set 2 audio
│       └── ...           # Sets 3-20
├── sw.js                 # Service Worker
├── manifest.json         # PWA manifest
└── FRAMEWORK.md          # This document
```

---

## Learning System

### Core Concept: 4-Skill Mastery

Each vocabulary/kanji item must be mastered through **all 4 skills**:

```
「食べる」を学習中...

Q1/4: 🔊 [音声] → 正しい単語は？ (Listening)
Q2/4: 「食べる」の読み方は？ (Reading)
Q3/4: 「食べる」の意味は？ (Meaning)
Q4/4: 「たべる (to eat)」の漢字は？ (Writing)

→ 4つ全正解で「食べる」習得！
```

### Skill Definitions

| Skill | Question Format | Answer Format | JLPT Section |
|-------|-----------------|---------------|--------------|
| Listening | Audio playback | Select word | 聴解 |
| Reading | Kanji display | Select reading | 文字・語彙 |
| Meaning | Word + reading | Select meaning | 文字・語彙 |
| Writing | Reading + meaning | Select kanji | 文字・語彙 |

### Mode Selection

```
Select Mode
┌─────────────┐ ┌─────────────┐
│ 学 Learning │ │ 復 Review   │
│ New items   │ │ Mistakes(5) │
└─────────────┘ └─────────────┘
```

- **Learning Mode**: Learn new items (22 items × 4 skills = 88 questions per session)
- **Review Mode**: Re-study mistaken items with full 4-skill approach

### Unit System

| Parameter | Value |
|-----------|-------|
| Items per Unit | 22 |
| Questions per Unit | 88 (22 × 4) |
| Time per Unit | ~15 minutes |
| Time per Question | ~10 seconds |

### Mastery Criteria

An item is considered **mastered** when all 4 skills are correctly answered:

```javascript
const SKILL_TYPES = ['listening', 'reading', 'meaning', 'writing'];

// Check mastery
const isMastered = SKILL_TYPES.every(skill => 
  state.skills[`${level}_${itemId}_${skill}`]
);
```

### Learning Duration by Level

| Level | Items | Units | Duration (15min/day) |
|-------|-------|-------|---------------------|
| N5 | 980 | 45 | **~1.5 months** |
| N4 | 1,020 | 46 | **~1.5 months** |
| N3 | 2,636 | 120 | **~4 months** |
| N2 | 3,052 | 139 | **~4.5 months** |
| N1 | 2,669 | 121 | **~4 months** |
| **Total** | **10,357** | **471** | **~16 months** |

---

## Data Structure

### Vocabulary Item

```javascript
{
  "id": "V001",
  "w": "食べる",        // Word (hiragana for grammar)
  "k": "食べる",        // Kanji form (optional)
  "r": "たべる",        // Reading
  "m": {                // Meanings (multi-language)
    "en": "to eat",
    "zh-TW": "吃",
    "zh-CN": "吃",
    "ko": "먹다",
    "vi": "Ăn",
    "id": "Makan"
  },
  "ex": "ご飯を食べる",  // Example sentence
  "exm": {              // Example meaning
    "en": "eat rice",
    ...
  }
}
```

### Kanji Item

```javascript
{
  "id": "K001",
  "k": "日",            // Kanji character
  "r": "ひ、にち",      // Readings
  "m": {
    "en": "day, sun",
    ...
  }
}
```

### Grammar Item

```javascript
{
  "id": "G001",
  "p": "～は～です",     // Pattern
  "m": {
    "en": "A is B (polite)",
    ...
  },
  "ex": "これは本です",
  "exm": {
    "en": "This is a book",
    ...
  }
}
```

### Data Count by Level

| Level | Vocab | Kanji | Grammar | Total |
|-------|-------|-------|---------|-------|
| N5 | 800 | 100 | 80 | **980** |
| N4 | 700 | 200 | 120 | **1,020** |
| N3 | 2,186 | 350 | 100 | **2,636** |
| N2 | 2,500 | 352 | 200 | **3,052** |
| N1 | 1,969 | 500 | 200 | **2,669** |

---

## Version Control

### Versioning Rules

Fujisan.AI follows **Semantic Versioning (SemVer)**:

```
MAJOR.MINOR.PATCH

Example: 16.0.0
         │  │  └── Patch: Bug fixes
         │  └───── Minor: New features (backward compatible)
         └──────── Major: Breaking changes
```

### Version Locations

When updating version, change ALL of these:

```javascript
// 1. js/app.js - Line 2
const APP_VERSION = '16.0.0';

// 2. js/app.js - Line 3
const STORAGE_KEY = 'fujisan_v1600';

// 3. sw.js - Line 1-2
// Fujisan.AI Service Worker v16.0.0
const CACHE_NAME = 'fujisan-v16.0.0';
```

### Storage Key Convention

```
fujisan_v{MAJOR}{MINOR}{PATCH}

Examples:
- v16.0.0 → fujisan_v1600
- v16.1.0 → fujisan_v1610
- v16.1.5 → fujisan_v1615
```

**Important**: Changing STORAGE_KEY resets user progress. Only change for major versions or breaking data structure changes.

### Release Checklist

```bash
# 1. Update version numbers
sed -i "s/APP_VERSION = '.*'/APP_VERSION = 'X.Y.Z'/" js/app.js
sed -i "s/STORAGE_KEY = '.*'/STORAGE_KEY = 'fujisan_vXYZ'/" js/app.js
sed -i "s/CACHE_NAME = '.*'/CACHE_NAME = 'fujisan-vX.Y.Z'/" sw.js

# 2. Syntax check
node --check js/app.js

# 3. Create package
zip -r fujisan-ai-vX.Y.Z.zip . -x "*.DS_Store" -x "__MACOSX/*"

# 4. Test deployment
# Upload to staging and verify
```

---

## Installation

### Quick Install

```bash
# Download and extract
curl -L https://your-domain.com/fujisan-ai-v16.0.0.zip -o fujisan.zip
unzip fujisan.zip -d fujisan-ai
cd fujisan-ai

# Serve locally (choose one)
npx serve .
# or
python3 -m http.server 8080
# or
php -S localhost:8080
```

### Netlify Deployment

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Deploy
netlify deploy --prod --dir=.
```

### Manual Server Setup (Nginx)

```nginx
server {
    listen 80;
    server_name fujisan.ai;
    root /var/www/fujisan-ai;
    index app.html;
    
    location / {
        try_files $uri $uri/ /app.html;
    }
    
    location ~* \.(js|css|mp3)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}
```

---

## API Reference

### State Object

```javascript
let state = {
  level: 'N5',           // Current JLPT level
  category: 'vocab',     // Current category
  lang: 'en',            // UI language
  qCount: 10,            // Questions per session (legacy)
  learned: {},           // Legacy learned items
  skills: {},            // Skill completion: {N5_V001_listening: true, ...}
  mistakes: {},          // Mistake items by category
  streak: 0,             // Daily streak count
  lastStudy: null,       // Last study date
  totalCorrect: 0,       // Total correct answers
  totalAnswered: 0,      // Total answered questions
  plan: null,            // Subscription plan
  planExpiry: null,      // Plan expiration date
  xp: 0,                 // Experience points
  passReportSubmitted: false,
  passBonusExpiry: null,
  pwaDismissed: false
};
```

### Key Functions

| Function | Description |
|----------|-------------|
| `startLearning()` | Start new learning session |
| `startReview()` | Start review session for mistakes |
| `showLearningQuestion()` | Display current question |
| `selectLearningAnswer()` | Handle answer selection |
| `updateProgressCard()` | Update UI progress display |
| `saveState()` | Persist state to localStorage |
| `loadState()` | Load state from localStorage |

### Constants

```javascript
const ITEMS_PER_UNIT = 22;
const SKILL_TYPES = ['listening', 'reading', 'meaning', 'writing'];
const TOTAL_ITEMS = {
  N5: 980,
  N4: 1020,
  N3: 2636,
  N2: 3052,
  N1: 2669
};
```

---

## Changelog

### v16.0.0 (2024-12-31) - Major Release

**Breaking Changes**
- Complete learning system redesign
- New storage key (user progress reset)

**New Features**
- 4-skill mastery system (Listening, Reading, Meaning, Writing)
- Unified learning flow (1 item = 4 questions)
- Accurate data counts (fixed 3x counting bug)
- Review mode with full 4-skill approach

**UI Changes**
- Simplified mode selection (Learning / Review only)
- New progress card with unit tracking
- Removed 4-mode selection UI

**Technical**
- New `skills` state object for tracking per-skill completion
- `ITEMS_PER_UNIT = 22` constant
- `TOTAL_ITEMS` with correct counts

### v15.5.0 (2024-12-31)

- Added progress card to drill screen
- Unit-based progress tracking
- Fixed incorrect data counting

### v15.4.0 (2024-12-31)

- Redesigned to 4 JLPT-aligned modes
- Listening, Reading, Meaning, Writing modes

### v15.3.0 (2024-12-31)

- Split monolithic HTML into separate files
- css/style.css, js/app.js structure
- Improved cacheability

### v15.2.x (2024-12-30)

- Lazy loading implementation
- Mock test level support
- Code cleanup and optimization

---

## Support

- **Documentation**: https://docs.fujisan.ai
- **Issues**: https://github.com/toraiz/fujisan-ai/issues
- **Email**: support@fujisan.ai

---

© 2024 TORAIZ Inc. All Rights Reserved.
