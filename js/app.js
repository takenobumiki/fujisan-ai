// ========== CONFIG ==========
// ============================================================
// 【重要】バージョン更新時は sync-version.sh を実行すること！
// 手動編集禁止 - versionファイルが Single Source of Truth
// ============================================================
const APP_VERSION = '19.8.18';
const STORAGE_KEY = 'fujisan_v1820';
const PROGRESS_KEY_PREFIX = 'fujisan_progress_';

// ========== VERSION INTEGRITY CHECK ==========
// 起動時にversionファイルと照合し、不一致なら警告
(async function checkVersionIntegrity() {
  try {
    const res = await fetch('/version?t=' + Date.now(), { cache: 'no-store' });
    if (!res.ok) return;
    const serverVersion = (await res.text()).trim();
    if (serverVersion !== APP_VERSION) {
      console.error(`[VERSION MISMATCH] app.js: ${APP_VERSION}, version file: ${serverVersion}`);
      console.error('[VERSION MISMATCH] Run sync-version.sh before deploying!');
      // 開発者向け警告（本番では非表示）
      if (location.hostname === 'localhost' || location.hostname === '127.0.0.1') {
        alert(`⚠️ VERSION MISMATCH!\n\napp.js: ${APP_VERSION}\nversion file: ${serverVersion}\n\nRun: ./sync-version.sh`);
      }
    }
  } catch(e) { /* ignore */ }
})();

// ========== FURIGANA SYSTEM ==========
// 各レベルで学習済みとみなす漢字セット（そのレベルより下のレベルの漢字）
// N5では全ての漢字にふりがなが必要
// N4ではN5漢字は学習済み、N4新出漢字にはふりがな必要
// N3ではN5+N4漢字は学習済み、N3新出漢字にはふりがな必要...
const LEARNED_KANJI = {
  N5: new Set(),
  N4: new Set(),
  N3: new Set(),
  N2: new Set(),
  N1: new Set()
};

// 各レベルの漢字セット（そのレベルで新出の漢字）
const LEVEL_KANJI = {
  N5: new Set(),
  N4: new Set(),
  N3: new Set(),
  N2: new Set(),
  N1: new Set()
};

// 文字が漢字かどうか判定
function isKanji(char) {
  const code = char.charCodeAt(0);
  return (code >= 0x4E00 && code <= 0x9FFF) || (code >= 0x3400 && code <= 0x4DBF);
}

// 漢字データからそのレベルの漢字セットを構築
function updateLearnedKanjiSet(level) {
  const kanjiVar = `${level}_KANJI`;
  if (typeof window[kanjiVar] === 'undefined') return;
  
  // そのレベルの新出漢字を収集
  window[kanjiVar].forEach(item => {
    if (item.k) {
      for (const char of item.k) {
        if (isKanji(char)) {
          LEVEL_KANJI[level].add(char);
        }
      }
    }
  });
  
  // 学習済み漢字セットを再構築（下のレベルの漢字を累積）
  const levels = ['N5', 'N4', 'N3', 'N2', 'N1'];
  let cumulative = new Set();
  
  for (let i = 0; i < levels.length; i++) {
    const lvl = levels[i];
    // このレベルでは、前のレベルまでの漢字が学習済み
    LEARNED_KANJI[lvl] = new Set(cumulative);
    // 次のレベル用に、このレベルの漢字を累積に追加
    LEVEL_KANJI[lvl].forEach(k => cumulative.add(k));
  }
  
  console.log(`[Furigana] ${level}: ${LEVEL_KANJI[level].size} kanji, learned: ${LEARNED_KANJI[level].size}`);
}

// テキストに振り仮名を追加（レベルに応じて）
// 振り仮名ルール:
// - N5: すべての漢字に振り仮名
// - N4: N5範囲外の漢字に振り仮名
// - N3: N4範囲外の漢字に振り仮名
// - N2: N3範囲外の漢字に振り仮名
// - N1: 振り仮名不要
function addFurigana(text, reading, level) {
  if (!text || !level) return text;
  
  // N1では振り仮名不要
  if (level === 'N1') return text;
  
  const learnedSet = LEARNED_KANJI[level] || new Set();
  
  // 未学習の漢字があるかチェック
  let needsFurigana = false;
  for (const char of text) {
    if (isKanji(char) && !learnedSet.has(char)) {
      needsFurigana = true;
      break;
    }
  }
  
  if (!needsFurigana) {
    return text; // ふりがな不要（全て学習済み漢字）
  }
  
  // ふりがなが必要な場合
  if (reading) {
    // 読みがある場合はrubyタグで囲む
    // 送り仮名を除去（括弧内の送り仮名を削除）
    const cleanReading = reading.split('、')[0].replace(/（.*?）/g, '');
    return `<ruby>${text}<rt>${cleanReading}</rt></ruby>`;
  }
  
  return text;
}

// 選択肢配列にふりがなを追加
function addFuriganaToOptions(options, level) {
  if (!options || !Array.isArray(options)) return options;
  // 選択肢は通常読みがないので、そのまま返す
  // TODO: 選択肢用の読み情報があれば対応
  return options;
}

// ========== FORCE UPDATE SYSTEM ==========
// Check for updates on app load
async function checkForUpdates() {
  try {
    // Fetch server version with cache-busting
    const res = await fetch('/version?t=' + Date.now(), { cache: 'no-store' });
    if (!res.ok) return;
    
    const serverVersion = (await res.text()).trim();
    console.log('[Update] Local:', APP_VERSION, 'Server:', serverVersion);
    
    // Compare versions (ignore suffixes like "-rebuild")
    const localClean = APP_VERSION.replace(/-.*$/, '');
    const serverClean = serverVersion.replace(/-.*$/, '');
    
    if (serverClean && serverClean !== localClean) {
      console.log('[Update] Version mismatch, forcing update...');
      await forceUpdate();
    }
  } catch(e) {
    console.log('[Update] Check failed:', e.message);
  }
}

// Force update: clear all caches and reload
async function forceUpdate() {
  // Prevent multiple calls
  if (window._forceUpdateCalled) {
    console.log('[Update] Already updating, skipping...');
    return;
  }
  window._forceUpdateCalled = true;
  console.log('[Update] Starting force update...');
  
  try {
    // 1. Unregister service worker
    if ('serviceWorker' in navigator) {
      const registrations = await navigator.serviceWorker.getRegistrations();
      for (const registration of registrations) {
        await registration.unregister();
        console.log('[Update] Service Worker unregistered');
      }
    }
    
    // 2. Clear all caches
    if ('caches' in window) {
      const cacheNames = await caches.keys();
      await Promise.all(cacheNames.map(name => {
        console.log('[Update] Deleting cache:', name);
        return caches.delete(name);
      }));
    }
    
    // 3. Clear localStorage version marker (but keep user data)
    localStorage.removeItem('fujisan_app_version');
    
    // 4. Hard reload immediately
    window.location.reload(true);
    
  } catch(e) {
    console.error('[Update] Force update failed:', e);
    // Fallback: just reload
    window.location.reload(true);
  }
}

// Listen for Service Worker update messages
let isUpdating = false;
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.addEventListener('message', event => {
    if (event.data && event.data.type === 'SW_UPDATED') {
      console.log('[SW] Updated to version:', event.data.version, 'Local:', APP_VERSION);
      // Only update if versions differ AND not already updating
      if (event.data.version !== APP_VERSION && !isUpdating) {
        isUpdating = true;
        forceUpdate();
      }
    }
  });
}

// Run update check when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => setTimeout(checkForUpdates, 1000));
} else {
  setTimeout(checkForUpdates, 1000);
}

// ========== UI TRANSLATIONS ==========
const UI_TEXTS = {
  en: {
    // Navigation
    nav_drill: 'Drill', nav_mock: 'Mock', nav_ai: 'AI', nav_talk: 'Talk',
    nav_vocab: 'Vocab', nav_kanji: 'Kanji', nav_new_kanji: 'New Kanji', nav_grammar: 'Grammar',
    // Talk (AI Conversation)
    talk_title: 'AI Conversation Practice',
    talk_desc: 'Practice Japanese conversation with AI',
    talk_unit_mode: 'Unit-linked Mode',
    talk_start: 'Start',
    talk_free_theme: 'Free Theme',
    talk_greeting: 'Self-intro',
    talk_restaurant: 'Restaurant',
    talk_shopping: 'Shopping',
    talk_directions: 'Directions',
    talk_travel: 'Travel',
    talk_free: 'Free Talk',
    talk_api_required: 'Gemini API key required',
    talk_setup_api: 'Setup in Settings',
    talk_unit_practice: 'Practice with Unit 1-{n} vocabulary',
    talk_intro_want: 'I want to introduce myself',
    talk_hobby_want: 'I want to talk about hobbies',
    talk_japan_question: 'I have questions about Japan',
    talk_input_placeholder: 'Type in Japanese...',
    talk_unit_desc_default: 'Practice with Unit vocabulary',
    talk_chat_title: 'AI Conversation',
    talk_first_msg: 'Hello! Let\'s talk using {level} vocabulary. What would you like to talk about?',
    talk_feedback: 'Feedback',
    talk_you: 'You',
    // Onboarding
    onboarding_welcome: 'Welcome to Fujisan.AI',
    onboarding_welcome_desc: 'Your AI-powered JLPT tutor. Master Japanese with personalized learning.',
    onboarding_goal: "What's your goal?",
    onboarding_goal_desc: 'Select your target JLPT level',
    onboarding_beginner: 'Beginner', onboarding_elementary: 'Elementary',
    onboarding_intermediate: 'Intermediate', onboarding_advanced: 'Advanced', onboarding_expert: 'Expert',
    onboarding_features: '3 Ways to Learn',
    onboarding_drill: 'Drill', onboarding_drill_desc: 'Vocabulary, kanji & grammar practice',
    onboarding_mock: 'Mock Test', onboarding_mock_desc: 'Real JLPT format practice tests',
    onboarding_talk_feature: 'Talk', onboarding_talk_feature_desc: 'AI conversation practice with Sakura',
    onboarding_sakura_title: 'Meet Sakura, Your AI Partner',
    onboarding_sakura_desc: 'Practice real Japanese conversations anytime',
    onboarding_talk: 'Talk with Sakura',
    onboarding_talk_desc: 'Have natural voice conversations in Japanese - Sakura speaks and listens!',
    onboarding_ai_explain: 'Why? Button',
    onboarding_ai_explain_desc: "Don't understand? Tap \"Why?\" for instant AI explanations",
    onboarding_ai_coach: 'Smart Review',
    onboarding_ai_coach_desc: 'AI tracks your progress and helps you improve',
    onboarding_ready: "You're all set!",
    onboarding_ready_desc: 'Start learning with Drill, test yourself with Mock, or chat with Sakura!',
    onboarding_tip: 'Pro Tip:', onboarding_skip: 'Skip', onboarding_next: 'Next', onboarding_start: "Let's Go!",
    // Quiz/Drill
    quiz_prompt: 'What does this mean?', quiz_correct: 'Correct', quiz_wrong: 'Wrong', quiz_time: 'Time', correct_answer: 'Correct answer',
    quiz_review_title: 'Review Your Mistakes', quiz_review_btn: 'Review Mistakes',
    quiz_try_again: 'Try Again', quiz_home: 'Home', quiz_continue: 'Continue', quiz_next_unit: 'Next Unit →', quiz_next: 'Next →',
    quiz_listen_select: 'Listen and select the correct word',
    generating_explanation: 'Generating explanation...',
    quiz_tap_play: 'Tap play to listen',
    quiz_select_reading: 'Select the correct reading',
    quiz_select_meaning: 'Select the correct meaning',
    quiz_select_kanji: 'Select the correct kanji/word',
    quiz_drill_title: 'Drill',
    quiz_review_mode: 'Review',
    // Pass Report
    pass_submitting: 'Submitting...',
    pass_submitted: 'Submitted!',
    pass_change_photo: 'Click to change photo',
    // Trial
    trial_bonus_applied: 'Trial bonus applied',
    // Mock Test
    mock_title: 'Mock Test', mock_mode: 'Mode', mock_full: 'Full', mock_section: 'Section',
    mock_select_set: 'Select a set to start', mock_not_attempted: 'Not attempted',
    mock_set: 'Set', mock_random: '🎲 Random', mock_last_score: 'Last Score',
    mock_start: 'Start Test', mock_next: 'Next →', mock_prev: '← Previous',
    mock_result: 'Mock Test Result', mock_analyzing: 'Analyzing your results...',
    mock_try_again: 'Try Again', mock_back: 'Back to Mock Tests', mock_practice_weak: 'Practice Weak Areas',
    // AI Screen
    ai_title: 'AI Study Coach', ai_desc: 'Your guide through the language acquisition journey',
    ai_premium: 'Premium Feature',
    ai_science: 'Science-Based Explanations', ai_science_desc: 'Understanding builds stronger memories than memorization',
    ai_scaffold: 'Personalized Scaffolding', ai_scaffold_desc: 'Guidance tailored to your current level (i+1)',
    ai_growth: 'Growth-Focused Coaching', ai_growth_desc: 'Frame challenges as opportunities, not obstacles',
    ai_support: '24/7 Support', ai_support_desc: 'Questions at 2am? Your coach is always here',
    ai_send: 'Send', ai_placeholder: 'Ask about grammar, vocabulary, or learning strategies...',
    ai_growth_areas: '📊 My Growth Areas', ai_study_science: '📚 Study Science', ai_error_patterns: '🧠 Error Patterns',
    // Settings
    settings_title: 'Settings', settings_account: 'Account', settings_email: 'Email',
    settings_plan: 'Current Plan', settings_not_logged: 'Not logged in', settings_free: 'Free Trial',
    settings_study: 'Study Settings', settings_qcount: 'Questions per Unit', settings_qcount_desc: 'Items in each session',
    settings_sound: 'Sound Effects', settings_sound_desc: 'Quiz sounds',
    settings_data: 'Data', settings_reset: 'Reset Progress', settings_reset_desc: 'Clear all learning data',
    settings_logout: 'Log Out', settings_logout_desc: 'Sign out of your account',
    settings_manage: 'Manage Subscription', settings_help: 'Help', settings_support: 'Support',
    // Subscription Modal
    sub_choose: 'Choose Your Plan', sub_basic: 'Basic', sub_standard: 'Standard', sub_premium: 'Premium',
    sub_basic_f1: 'JLPT N5-N3 content', sub_basic_f2: 'Learn / Practice / Review / Test',
    sub_basic_f3: 'Progress tracking', sub_basic_f4: 'Unlimited study',
    sub_std_f1: 'Everything in Basic', sub_std_f2: 'Full mock tests', sub_std_f3: 'AI explanations',
    sub_prem_f1: 'Everything in Standard', sub_prem_f2: 'All JLPT levels (N5-N1)',
    sub_prem_f3: 'AI Tutor', sub_prem_f4: 'Priority support',
    // Trial Modal
    trial_title: 'Start Your Free Trial',
    trial_desc: 'Get <strong>full access</strong> to all JLPT levels, Mock Tests, and AI Tutor for <strong>7 days free</strong>.',
    trial_f1: 'All N5-N1 vocabulary, kanji & grammar', trial_f2: '20 full Mock Tests per level',
    trial_f3: 'AI Tutor explains every mistake', trial_f4: 'Cancel anytime before trial ends',
    trial_start: 'Start 7-Day Free Trial', trial_note: '7-day free trial • Cancel anytime',
    // Trial success message
    trial_welcome: '🎉 Welcome! Your 7-day free trial of {plan} ({billing}) plan has started. All features are unlocked!',
    billing_annual: 'Annual', billing_monthly: 'Monthly',
    // AI Coach (Adaptive Learning)
    ai_coach_title: "This Week's Focus",
    ai_coach_loading: 'Analyzing your progress...',
    ai_coach_details: 'View Details',
    ai_coach_hide: 'Hide Details',
    ai_coach_receptive: 'Understanding (Listen/Read)',
    ai_coach_productive: 'Using (Meaning/Write)',
    ai_coach_recommended: 'Focus',
    ai_coach_review: 'Review',
    ai_coach_fallback_focus: 'Keep up your daily practice!',
    ai_coach_fallback_reason: 'Consistency is the key to mastering Japanese.',
    ai_coach_fallback_encourage: "You're making great progress!",
    ai_coach_welcome_title: "Welcome! Let's begin your journey.",
    ai_coach_welcome_desc: "Complete 10 questions and I'll create a personalized study plan just for you.",
    ai_coach_progress_title: "Great start! Keep going.",
    ai_coach_progress_desc: "Your personalized AI analysis is almost ready!",
    ai_coach_intro_title: "I'm your AI Study Coach",
    ai_coach_intro_desc: "I'll create a personalized roadmap to JLPT success. Let's get started!",
    ai_coach_q_name: "What's your name?",
    ai_coach_name_placeholder: "Enter your name",
    ai_coach_q_exam: "When do you plan to take the JLPT?",
    ai_coach_q_target: "What JLPT level do you want to pass?",
    ai_coach_q_level: "What's your current Japanese level?",
    ai_coach_q_time: "How much time can you study daily?",
    ai_coach_select: "Select...",
    ai_coach_july: "July 2025",
    ai_coach_december: "December 2025",
    ai_coach_july_next: "July 2026",
    ai_coach_undecided: "Not decided yet",
    ai_coach_level_beginner: "Complete beginner",
    ai_coach_level_hiragana: "Know hiragana/katakana",
    ai_coach_level_n5: "N5 level (basic)",
    ai_coach_level_n4: "N4 level (elementary)",
    ai_coach_level_n3: "N3 level (intermediate)",
    ai_coach_level_n2: "N2+ level (advanced)",
    ai_coach_time_15: "15 minutes",
    ai_coach_time_30: "30 minutes",
    ai_coach_time_60: "1 hour",
    ai_coach_time_90: "1+ hours",
    ai_coach_your_roadmap: "Your Personalized Roadmap",
    ai_coach_roadmap_suffix: "'s Roadmap",
    ai_coach_this_week: "This week's focus:",
    ai_coach_goal: "Your Goal",
    ai_coach_start_btn: "Let's Begin!",
    ai_coach_journey_started: "Your journey has begun!",
    ai_coach_journey_desc: "Complete 10 questions to unlock your detailed weekly analysis.",
    // Pass Probability
    pass_probability: "Pass Probability",
    pass_section_vocab: "Vocabulary",
    pass_section_grammar: "Grammar",
    pass_section_reading: "Reading",
    pass_section_listening: "Listening",
    // SRS Review
    srs_review_due: "Review Due",
    srs_urgent: "urgent",
    srs_soon: "today",
    srs_later: "this week",
    srs_start: "Start Review",
    srs_no_items: "No items due for review!",
    // Habit Tracker
    habit_greeting_morning: "Good morning",
    habit_greeting_afternoon: "Good afternoon",
    habit_greeting_evening: "Good evening",
    habit_day_streak: "day streak",
    habit_min_today: "min today",
    habit_dont_break: "don't break your",
    habit_streak_suffix: "-day streak!",
    habit_start_study: "start your study session!",
    habit_more_minutes: "more minutes to reach your daily goal!",
    // Daily Coach
    habit_build_foundation: "let's build your foundation!",
    habit_more_questions: "more questions to unlock personalized analysis.",
    habit_journey_begun: "your journey has begun!",
    // Mock Result Report
    mock_report_analyzing: '🔍 AI is analyzing your results...',
    mock_report_strengths: 'Strengths',
    mock_report_weaknesses: 'Areas to Improve',
    mock_report_next_steps: 'Recommended Study Plan',
    mock_report_error: 'Unable to generate AI report. Please try again.',
    // Pass Report Modal
    pass_title: 'Report Your Success', pass_level: 'JLPT Level Passed *', pass_select: 'Select level...',
    pass_score: 'Your Score (optional)', pass_name: 'Display Name *',
    pass_country: 'Your Country/Region', pass_message: 'Your Message (will be shown on our website)',
    pass_photo: 'Certificate Photo (optional)', pass_upload: 'Click to upload your certificate',
    pass_submit: 'Submit Report',
    // Feedback
    feedback_cta: "How's Fujisan.AI? Share your thoughts →",
    ask_more: 'Ask more →',
    feedback_title: 'Share Your Feedback',
    feedback_desc: 'Your feedback helps us improve Fujisan.AI!',
    feedback_rating: 'How would you rate Fujisan.AI?',
    feedback_comment: 'Your comment',
    feedback_comment_placeholder: 'What do you like? What could be better?',
    feedback_nickname: 'Nickname (optional)',
    feedback_nickname_placeholder: 'How should we call you?',
    feedback_permission: 'I allow my feedback to be displayed on the website',
    feedback_submit: 'Send Feedback',
    feedback_select_rating: 'Please select a rating',
    feedback_sending: 'Sending...',
    feedback_thanks: 'Thank you for your feedback!',
    feedback_thank_title: 'Thank you!',
    feedback_thank_desc: 'Your feedback helps us improve.',
    // Common
    upgrade: 'Upgrade', upgrade_premium: 'Upgrade to Premium',
    feedback_prompt: 'How do you like Fujisan.AI?', feedback_title: 'Your Feedback', feedback_placeholder: 'Tell us what you think...', feedback_submit: 'Submit', feedback_thanks: 'Thank you for your feedback!', feedback_rating: 'Rate your experience',
    // LP - Methodology Banner
    methodology_label: 'A New Paradigm in Language Learning',
    methodology_headline: 'Instructional Design. SLA Theory. AI.',
    methodology_desc: 'The science of language acquisition, engineered for measurable outcomes.',
    // LP - Hero
    hero_badge: 'Evidence-Based Learning',
    hero_title: 'Master Japanese. Scientifically.',
    hero_subtitle: 'The science-backed method that works. Pass JLPT N5-N1 with AI-powered personalization.',
    hero_cta: 'Start Free',
    hero_note: '7-day trial • Cancel anytime',
    hero_stat_retention: 'Retention',
    hero_stat_students: 'Learners',
    hero_stat_levels: 'Coverage',
    hero_stat_experience: 'Research Data',
    // LP - Science Section
    science_label: 'Theoretical Foundation',
    science_title: 'Built on Proven Learning Science',
    science_subtitle: 'Where Instructional Design principles meet Second Language Acquisition research',
    science_krashen_title: "Krashen's Input Hypothesis (i+1)",
    science_krashen_desc: "Our AI calibrates content to be just beyond your current level—comprehensible input that drives natural acquisition.",
    science_krashen_stat: 'Optimal Input Level',
    science_ebbinghaus_title: 'Ebbinghaus Spaced Repetition',
    science_ebbinghaus_desc: 'ML-enhanced interval scheduling based on the forgetting curve. AI predicts your optimal review timing.',
    science_ebbinghaus_stat: 'vs 20% traditional retention',
    science_swain_title: "Swain's Output Hypothesis",
    science_swain_desc: 'Active production practice drives deeper processing. Our multimodal system integrates listening, reading, meaning recognition, and writing.',
    science_swain_stat: 'Multimodal Processing',
    science_gagne_title: "Gagné's Instructional Events",
    science_gagne_desc: 'Systematic learning architecture with optimal cognitive load management. Evidence-based sequencing.',
    science_gagne_stat: 'Instructional Framework',
    science_zpd_title: 'Zone of Proximal Development',
    science_zpd_desc: "Based on Vygotsky's ZPD theory, our adaptive engine keeps you challenged at exactly the right level.",
    science_zpd_stat: 'Faster Skill Acquisition',
    science_elaborative_title: 'Elaborative Encoding',
    science_elaborative_desc: 'AI-generated contextual explanations create rich associative networks. Every mistake becomes a learning opportunity.',
    science_elaborative_stat: 'Stronger Memory Encoding',
    science_quote: 'Language acquisition is not a linear process of memorization—it is the emergent result of optimized input, meaningful practice, and adaptive feedback.',
    // LP - Features Section
    features_label: 'Platform Capabilities',
    features_headline: 'Engineered for Measurable Outcomes',
    features_subheadline: 'Comprehensive JLPT preparation infrastructure with adaptive assessment and AI-driven feedback.',
    feature_mock_title: 'Authentic Assessment',
    feature_mock_desc: '100 JLPT-format tests with timed conditions, performance analytics, and detailed item analysis.',
    feature_ai_title: 'AI-Powered Feedback',
    feature_ai_desc: 'Google Gemini generates personalized explanations in your native language. Transform errors into learning.',
    feature_srs_title: 'Adaptive Scheduling',
    feature_srs_desc: 'ML-enhanced spaced repetition calculates optimal review intervals. Maximize retention efficiency.',
    feature_lang_title: 'Multilingual L1 Support',
    feature_lang_desc: 'Interface and AI explanations in 8 languages. Native-language scaffolding accelerates comprehension.',
    // LP - 4 Modes Section
    modes_label: 'Systematic Learning Architecture',
    modes_title: '4-Mode Acquisition Framework',
    modes_subtitle: 'Input → Intake → Integration → Assessment. A structured path through learning.',
    mode_learn_title: 'Input Phase',
    mode_learn_desc: 'Comprehensible input delivery with contextual examples. Multimodal presentation: kanji, reading, meaning.',
    mode_practice_title: 'Active Recall',
    mode_practice_desc: '4-skill retrieval practice: Listening, Reading, Meaning, Writing. Forced production strengthens memory.',
    mode_review_title: 'Spaced Review',
    mode_review_desc: 'ML-optimized interval scheduling based on individual forgetting curves. Consolidate before decay.',
    mode_mock_title: 'Summative Assessment',
    mode_mock_desc: '100 authentic mock tests calibrated to official JLPT specifications. Predictive scoring analytics.',
    // LP - Levels Section
    levels_label: 'Content Scope',
    levels_title: 'Comprehensive JLPT Curriculum',
    levels_subtitle: 'Complete coverage validated against official specifications—vocabulary, kanji, grammar, and integrated skills',
    coverage_vocab: 'Vocabulary',
    coverage_kanji: 'Kanji',
    coverage_grammar: 'Grammar',
    coverage_mock: 'Mock Tests',
    level_beginner: 'Beginner',
    level_elementary: 'Elementary',
    level_intermediate: 'Intermediate',
    level_advanced: 'Advanced',
    level_expert: 'Expert',
    level_vocabulary: 'Vocabulary',
    level_new_kanji: 'New Kanji',
    level_grammar: 'Grammar',
    level_total: 'Total Items',
    level_n5_desc: 'Start your Japanese journey. Master hiragana, katakana, basic kanji, and essential grammar.',
    level_n5_f1: 'Hiragana & Katakana mastery',
    level_n5_f2: 'Basic sentence patterns',
    level_n5_f3: 'Self-introduction & daily life',
    level_n4_desc: 'Build on your foundation. Handle complex conversations and read simple texts.',
    level_n4_f1: 'て-form and verb conjugations',
    level_n4_f2: 'Potential and passive forms',
    level_n4_f3: 'Reading short passages',
    level_n3_desc: 'The bridge to fluency. Understand everyday Japanese and express nuanced opinions.',
    level_n3_f1: 'Complex grammar patterns',
    level_n3_f2: 'Natural conversation',
    level_n3_f3: 'Business Japanese basics',
    level_n2_desc: 'Professional-level Japanese. Read newspapers and handle business situations.',
    level_n2_f1: 'Business Japanese',
    level_n2_f2: 'Academic reading',
    level_n2_f3: 'Complex listening',
    level_n1_desc: 'Near-native proficiency. Master literary Japanese and sophisticated communication.',
    level_n1_f1: 'Literary expressions',
    level_n1_f2: 'Nuanced communication',
    level_n1_f3: 'University-level texts',
    // LP - Japan Section
    japan_title: '19 Years of Data + Cutting-Edge AI',
    japan_p1: "Fujisan.AI isn't just another AI app. It's the result of combining Google Gemini AI with TORAIZ Inc.'s 19 years of language education data from 16,000+ students.",
    japan_p2: 'Our AI models are trained on real learner patterns — what mistakes are common, what explanations work, when students give up. This is AI optimized specifically for Japanese learners.',
    japan_p3: 'The result: hyper-personalized learning that adapts to YOUR brain, backed by nearly two decades of proven methodology from Tokyo.',
    // LP - Comparison Section
    compare_label: 'Comparison',
    compare_title: 'Why Choose Fujisan.AI?',
    compare_subtitle: 'See how our AI-powered learning compares to other options',
    compare_feature: 'Feature',
    compare_textbooks: 'Textbooks',
    compare_other: 'Other Apps',
    compare_jlpt: 'JLPT-Focused Curriculum',
    compare_mock: 'Authentic Mock Tests',
    compare_japan: 'Made in Japan (Tokyo)',
    compare_levels: 'All JLPT Levels (N5-N1)',
    compare_full: 'Full support',
    compare_partial: 'Partial/Limited',
    compare_none: 'Not available',
    // LP - Pricing Section
    section_pricing: 'Choose Your Plan',
    referral_input_title: 'Have a referral code?',
    referral_input_hint: 'Get 30-day free trial instead of 7 days!',
    plan_basic_monthly: 'or $7.99/month',
    plan_standard_monthly: 'or $14.99/month',
    plan_premium_monthly: 'or $29.99/month',
    plan_save: 'Save 17% yearly',
    plan_popular: 'Most Popular',
    plan_best: 'Best Value',
    plan_basic_f1: 'JLPT N5-N3 all content',
    plan_basic_f2: 'Learn / Practice / Test modes',
    plan_basic_f3: 'Progress tracking dashboard',
    plan_standard_f1: 'Everything in Basic, plus:',
    plan_standard_f2: 'AI Explanations',
    plan_standard_f3: 'AI Pass Probability Prediction',
    plan_standard_f4: 'Full mock tests',
    plan_premium_f1: 'Everything in Standard, plus:',
    plan_premium_f2: 'AI Tutor (24/7 Japanese Q&A)',
    plan_premium_f3: 'All JLPT levels (N5-N1)',
    plan_premium_f4: 'Priority support',
    price_cta: 'Start 7-Day Free Trial',
    price_card_note: 'Card required for trial. Cancel anytime before trial ends.',
    referral_title: 'Invite Friends, Earn Free Months!',
    referral_desc: 'Get 1 free month for every friend who subscribes',
    // LP - Final CTA
    final_cta_title: 'Stop Wasting Time on Inefficient Study',
    final_cta_sub: 'Experience AI-optimized learning. 7-day free trial · Card required · Cancel anytime',
    // LP - FAQ
    faq_label: 'FAQ',
    faq_title: 'Frequently Asked Questions',
    faq_q1: "What's the difference between Basic, Pro, and Premium?",
    faq_a1: 'Basic includes all N5 content and AI explanations. Standard adds Full mock tests. Premium includes everything plus AI Tutor and all JLPT levels (N5-N1).',
    faq_q2: 'How long is the free trial?',
    faq_a2: "You get a 7-day free trial on all plans. Cancel anytime before the trial ends and you won't be charged.",
    faq_q3: 'What is the AI Tutor?',
    faq_a3: 'The AI Tutor (Premium only) lets you ask any question about Japanese grammar, vocabulary, or study strategies. Get instant, personalized answers.',
    faq_q4: 'How does the referral program work?',
    faq_a4: "Share your unique referral link with friends. When they subscribe, you both get 1 free month. There's no limit!",
    faq_q5: 'Can I get a bonus for passing JLPT?',
    faq_a5: 'Yes! Paid subscribers who pass JLPT can submit their certificate and get 3 free months added to their subscription.',
    // LP - Footer
    footer_desc: 'AI-powered Japanese learning, crafted in Tokyo by TORAIZ Inc. — pioneers in online language education since 2006.',
    footer_product: 'Product',
    footer_features: 'Features',
    footer_levels: 'Levels',
    footer_pricing: 'Pricing',
    footer_legal: 'Legal',
    footer_terms: 'Terms',
    footer_privacy: 'Privacy',
    footer_contact: 'Contact',
    footer_copyright: '© 2025 TORAIZ Inc. All rights reserved.',
    footer_made: 'Made with ❤️ in Tokyo, Japan',
    // LP - Navigation
    nav_features: 'Features',
    nav_levels: 'Levels',
    nav_pricing: 'Pricing',
    btn_login: 'Log In',
    btn_start: 'Start Free',
    btn_account: 'Account',
    btn_logout: 'Log Out',
    demo_listen: 'Play',
    coming_soon: 'Soon',
    coming: 'Coming',
    coming_2025: '2025',
    level_n5_units: '50 Units',
    referral_banner_title: 'Invite Friends, Get Free!',
    referral_banner_sub: '1 month free per friend',
    greeting_morning: 'Good morning',
    greeting_afternoon: 'Good afternoon', 
    greeting_evening: 'Good evening',
    greeting_start: 'Ready to continue?',
    greeting_continue: 'Great progress today. Keep going.',
    ai_recommend_label: 'Recommended for you',
    ai_recommend_start: 'Start',
    ai_recommend_default: 'Start with vocabulary basics',
    ai_recommend_review: 'Review items you found challenging',
    ai_recommend_continue: 'Continue with',
    ai_recommend_focus: 'Focus on',
    ai_recommend_today: 'today',
    ai_recommend_about: 'About',
    ai_recommend_minutes: 'minutes',
    ai_recommend_complete: 'complete',
    nav_learn: 'Learn',
    nav_invite: 'Invite',
    // JLPT Level Detail Info (Official JLPT descriptions)
    level_detail_title: 'About This Level',
    level_detail_official: 'Official JLPT Description',
    level_detail_cando: 'What You Can Do',
    level_detail_content: 'Fujisan.AI Content',
    level_detail_study_hours: 'Study Hours',
    level_detail_pass_mark: 'Pass Mark',
    level_detail_test_time: 'Test Duration',
    level_detail_start: 'Start Learning',
    level_detail_reading: 'Reading',
    level_detail_listening: 'Listening',
    level_n5_difficulty: 'Beginner',
    level_n4_difficulty: 'Elementary',
    level_n3_difficulty: 'Intermediate',
    level_n2_difficulty: 'Advanced',
    level_n1_difficulty: 'Expert',
    // N5 Official
    level_n5_official: 'The ability to understand some basic Japanese.',
    level_n5_reading: 'Read and understand typical expressions and sentences written in hiragana, katakana, and basic kanji.',
    level_n5_listening: 'Listen and comprehend conversations about topics regularly encountered in daily life and classroom situations, picking up necessary information from short conversations spoken slowly.',
    level_n5_cando_1: 'Introduce yourself and family',
    level_n5_cando_2: 'Ask for and give basic directions',
    level_n5_cando_3: 'Order food at restaurants',
    level_n5_cando_4: 'Understand simple announcements',
    // N4 Official
    level_n4_official: 'The ability to understand basic Japanese.',
    level_n4_reading: 'Read and understand passages on familiar daily topics written in basic vocabulary and kanji.',
    level_n4_listening: 'Listen and comprehend conversations encountered in daily life, generally following their contents when spoken slowly.',
    level_n4_cando_1: 'Have simple conversations about daily life',
    level_n4_cando_2: 'Read and understand short notices and signs',
    level_n4_cando_3: 'Write simple messages and postcards',
    level_n4_cando_4: 'Follow basic TV programs with visual aids',
    // N3 Official
    level_n3_official: 'The ability to understand Japanese used in everyday situations to a certain degree.',
    level_n3_reading: 'Read materials with specific contents on everyday topics. Grasp summary information such as newspaper headlines. Understand slightly difficult writings if alternative phrases are available.',
    level_n3_listening: 'Listen and comprehend coherent conversations in everyday situations at near-natural speed, following contents and grasping relationships among people involved.',
    level_n3_cando_1: 'Understand most everyday conversations',
    level_n3_cando_2: 'Read newspaper headlines and simple articles',
    level_n3_cando_3: 'Express opinions on familiar topics',
    level_n3_cando_4: 'Handle basic business communications',
    // N2 Official
    level_n2_official: 'The ability to understand Japanese used in everyday situations, and in a variety of circumstances to a certain degree.',
    level_n2_reading: 'Read materials written clearly on various topics such as newspaper/magazine articles and simple critiques. Follow narratives on general topics and understand the intent of writers.',
    level_n2_listening: 'Comprehend news reports and conversations at nearly natural speed in everyday situations, understanding relationships among people and essential points.',
    level_n2_cando_1: 'Work in Japanese business environments',
    level_n2_cando_2: 'Read newspapers and magazines comfortably',
    level_n2_cando_3: 'Attend university lectures in Japanese',
    level_n2_cando_4: 'Understand most TV programs and movies',
    // N1 Official
    level_n1_official: 'The ability to understand Japanese used in a variety of circumstances.',
    level_n1_reading: 'Read writings with logical complexity and abstract topics such as editorials and critiques. Read materials with profound contents and understand the intent of writers comprehensively.',
    level_n1_listening: 'Comprehend news reports, lectures, and coherent conversations at natural speed in broad settings. Understand relationships, logical structures, and essential points comprehensively.',
    level_n1_cando_1: 'Read academic papers and literary works',
    level_n1_cando_2: 'Participate in professional discussions fluently',
    level_n1_cando_3: 'Understand subtle nuances and cultural references',
    level_n1_cando_4: 'Work as translator/interpreter',
    // Unit Preview
    unit_preview_title: 'Unit Preview',
    unit_preview_items: 'Items in this unit',
    unit_preview_vocab: 'Vocabulary',
    unit_preview_kanji: 'Kanji',
    unit_preview_grammar: 'Grammar',
    unit_preview_start: 'Start Unit',
    unit_preview_sample: 'Sample items',
    units: 'Units'
  },
  'zh-TW': {
    nav_drill: '練習', nav_mock: '模擬', nav_ai: 'AI', nav_talk: '對話',
    nav_vocab: '單字', nav_kanji: '漢字', nav_new_kanji: '新出漢字', nav_grammar: '文法',
    // Talk
    talk_title: 'AI對話練習',
    talk_desc: '與AI練習日語會話',
    talk_unit_mode: '單元連動模式',
    talk_start: '開始',
    talk_free_theme: '自由主題',
    talk_greeting: '自我介紹',
    talk_restaurant: '餐廳',
    talk_shopping: '購物',
    talk_directions: '問路',
    talk_travel: '旅行',
    talk_free: '自由對話',
    talk_unit_practice: '使用Unit 1-{n}的單字練習',
    talk_intro_want: '我想自我介紹',
    talk_hobby_want: '我想聊興趣',
    talk_japan_question: '我有關於日本的問題',
    talk_input_placeholder: '用日語輸入...',
    talk_unit_desc_default: '使用單元單字練習',
    talk_chat_title: 'AI對話',
    talk_first_msg: '你好！讓我們用{level}的單字來聊天吧。你想聊什麼？',
    talk_feedback: '反饋',
    talk_you: '你',
    onboarding_welcome: '歡迎使用 Fujisan.AI',
    onboarding_welcome_desc: '您的AI日語學習夥伴。透過個人化學習掌握日語。',
    onboarding_goal: '您的目標是什麼？',
    onboarding_goal_desc: '選擇您的目標JLPT等級',
    onboarding_beginner: '初學者', onboarding_elementary: '基礎',
    onboarding_intermediate: '中級', onboarding_advanced: '高級', onboarding_expert: '專家',
    onboarding_features: '3種學習方式',
    onboarding_drill: '練習', onboarding_drill_desc: '單字、漢字和文法練習',
    onboarding_mock: '模擬測驗', onboarding_mock_desc: '真實JLPT格式練習題',
    onboarding_talk_feature: '對話', onboarding_talk_feature_desc: '與Sakura進行AI會話練習',
    onboarding_sakura_title: '認識Sakura，您的AI夥伴',
    onboarding_sakura_desc: '隨時練習真實的日語對話',
    onboarding_talk: '與Sakura對話',
    onboarding_talk_desc: '用日語進行自然的語音對話 - Sakura會說會聽！',
    onboarding_ai_explain: '為什麼？按鈕',
    onboarding_ai_explain_desc: '不懂？點擊「為什麼？」即可獲得AI解說',
    onboarding_ai_coach: '智能複習',
    onboarding_ai_coach_desc: 'AI追蹤您的進度，幫助您提升',
    onboarding_ready: '準備就緒！',
    onboarding_ready_desc: '開始練習、模擬測驗，或與Sakura聊天！',
    onboarding_tip: '小提示：', onboarding_skip: '跳過', onboarding_next: '下一步', onboarding_start: '開始',
    quiz_prompt: '這是什麼意思？', quiz_correct: '正確', quiz_wrong: '錯誤', quiz_time: '時間', correct_answer: '正確答案',
    quiz_review_title: '複習錯誤', quiz_review_btn: '複習錯誤',
    quiz_try_again: '再試一次', quiz_home: '首頁', quiz_continue: '繼續', quiz_next_unit: '下一單元 →', quiz_next: '下一題 →',
    quiz_listen_select: '聽並選擇正確的單字',
    generating_explanation: '生成解說中...',
    quiz_tap_play: '點擊播放收聽',
    quiz_select_reading: '選擇正確的讀音',
    quiz_select_meaning: '選擇正確的意思',
    quiz_select_kanji: '選擇正確的漢字/單字',
    quiz_drill_title: '練習',
    quiz_review_mode: '複習',
    pass_submitting: '提交中...',
    pass_submitted: '已提交！',
    pass_change_photo: '點擊更換照片',
    trial_bonus_applied: '試用獎勵已套用',
    mock_title: '模擬測驗', mock_mode: '模式', mock_full: '完整', mock_section: '分段',
    mock_select_set: '選擇套題開始', mock_not_attempted: '尚未作答',
    mock_set: '套', mock_random: '🎲 隨機', mock_last_score: '上次分數',
    mock_start: '開始測驗', mock_next: '下一題 →', mock_prev: '← 上一題',
    mock_result: '模擬測驗結果', mock_analyzing: '正在分析您的結果...',
    mock_try_again: '再試一次', mock_back: '返回模擬測驗', mock_practice_weak: '練習弱點',
    ai_title: 'AI學習教練', ai_desc: '引導您的語言學習之旅',
    ai_premium: '高級功能',
    ai_science: '科學解釋', ai_science_desc: '理解比死記硬背更能建立強大記憶',
    ai_scaffold: '個人化支持', ai_scaffold_desc: '根據您目前的水平量身定制指導',
    ai_growth: '成長導向指導', ai_growth_desc: '將挑戰視為機會而非障礙',
    ai_support: '24/7 支援', ai_support_desc: '凌晨2點有問題？教練隨時在這裡',
    ai_send: '發送', ai_placeholder: '詢問文法、單字或學習策略...',
    ai_growth_areas: '📊 我的成長領域', ai_study_science: '📚 學習科學', ai_error_patterns: '🧠 錯誤模式',
    settings_title: '設定', settings_account: '帳戶', settings_email: '電子郵件',
    settings_plan: '目前方案', settings_not_logged: '未登入', settings_free: '免費試用',
    settings_study: '學習設定', settings_qcount: '每單元題數', settings_qcount_desc: '每次練習的題目數',
    settings_sound: '音效', settings_sound_desc: '測驗音效',
    settings_data: '數據', settings_reset: '重置進度', settings_reset_desc: '清除所有學習數據',
    settings_logout: '登出', settings_logout_desc: '登出您的帳戶',
    settings_manage: '管理訂閱', settings_help: '幫助', settings_support: '支援',
    sub_choose: '選擇方案', sub_basic: '基本', sub_standard: '標準', sub_premium: '高級',
    sub_basic_f1: 'JLPT N5-N3 內容', sub_basic_f2: '學習/練習/複習/測驗',
    sub_basic_f3: '進度追蹤', sub_basic_f4: '無限練習',
    sub_std_f1: '基本方案全部功能', sub_std_f2: '完整模擬測驗', sub_std_f3: 'AI解釋',
    sub_prem_f1: '標準方案全部功能', sub_prem_f2: '所有JLPT等級(N5-N1)',
    sub_prem_f3: 'AI導師', sub_prem_f4: '優先支援',
    trial_title: '開始免費試用',
    trial_desc: '獲得所有JLPT等級、模擬測驗和AI導師的<strong>完整存取權</strong>，<strong>7天免費</strong>。',
    trial_f1: '所有N5-N1單字、漢字和文法', trial_f2: '每個等級20套完整模擬測驗',
    trial_f3: 'AI導師解釋每個錯誤', trial_f4: '試用期結束前可隨時取消',
    trial_start: '立即免費試用7天', trial_note: '7天免費試用 • 隨時取消', trial_later: '稍後再說',
    trial_welcome: '🎉 歡迎！您的 {plan}（{billing}）方案 7 天免費試用已開始。所有功能已解鎖！',
    billing_annual: '年付', billing_monthly: '月付',
    // AI Coach
    ai_coach_title: '本週重點',
    ai_coach_loading: '正在分析您的學習進度...',
    ai_coach_details: '查看詳情',
    ai_coach_hide: '隱藏詳情',
    ai_coach_receptive: '理解能力（聽/讀）',
    ai_coach_productive: '運用能力（意思/寫）',
    ai_coach_recommended: '重點',
    ai_coach_review: '複習',
    ai_coach_fallback_focus: '保持每日練習！',
    ai_coach_fallback_reason: '持續學習是掌握日語的關鍵。',
    ai_coach_fallback_encourage: '您正在取得很好的進步！',
    ai_coach_welcome_title: '歡迎！讓我們開始學習之旅。',
    ai_coach_welcome_desc: '完成10題後，我會為您制定專屬學習計劃。',
    ai_coach_progress_title: '好的開始！繼續加油。',
    ai_coach_progress_desc: '您的專屬AI分析即將完成！',
    ai_coach_intro_title: "我是您的AI學習教練",
    ai_coach_intro_desc: "我會為您制定JLPT成功的專屬路線圖。讓我們開始吧！",
    ai_coach_q_name: "請問您的名字是？",
    ai_coach_name_placeholder: "輸入您的名字",
    ai_coach_q_exam: "您計劃何時參加JLPT考試？",
    ai_coach_q_target: "您想通過哪個JLPT等級？",
    ai_coach_q_level: "您目前的日語程度如何？",
    ai_coach_q_time: "您每天能學習多長時間？",
    ai_coach_select: "請選擇...",
    ai_coach_july: "2025年7月",
    ai_coach_december: "2025年12月",
    ai_coach_july_next: "2026年7月",
    ai_coach_undecided: "尚未決定",
    ai_coach_level_beginner: "完全初學者",
    ai_coach_level_hiragana: "已會平假名/片假名",
    ai_coach_level_n5: "N5程度（基礎）",
    ai_coach_level_n4: "N4程度（初級）",
    ai_coach_level_n3: "N3程度（中級）",
    ai_coach_level_n2: "N2+程度（進階）",
    ai_coach_time_15: "15分鐘",
    ai_coach_time_30: "30分鐘",
    ai_coach_time_60: "1小時",
    ai_coach_time_90: "1小時以上",
    ai_coach_your_roadmap: "您的專屬學習路線圖",
    ai_coach_roadmap_suffix: "的學習路線圖",
    ai_coach_this_week: "本週重點：",
    ai_coach_goal: "您的目標",
    ai_coach_start_btn: "開始學習！",
    ai_coach_journey_started: "您的學習之旅已開始！",
    ai_coach_journey_desc: "完成10題後即可解鎖詳細的每週分析。",
    pass_probability: "合格可能性",
    pass_section_vocab: "詞彙",
    pass_section_grammar: "文法",
    pass_section_reading: "閱讀",
    pass_section_listening: "聽力",
    srs_review_due: "待複習",
    srs_urgent: "緊急",
    srs_soon: "今日",
    srs_later: "本週",
    srs_start: "開始複習",
    srs_no_items: "沒有待複習的項目！",
    habit_greeting_morning: "早安",
    habit_greeting_afternoon: "午安",
    habit_greeting_evening: "晚安",
    habit_day_streak: "天連續學習",
    habit_min_today: "分鐘（今日）",
    habit_dont_break: "不要中斷您的",
    habit_streak_suffix: "天連續記錄！",
    habit_start_study: "開始今天的學習吧！",
    habit_more_minutes: "分鐘即可達成今日目標！",
    habit_build_foundation: "來打好基礎吧！",
    habit_more_questions: "題後即可解鎖個人化分析。",
    habit_journey_begun: "您的學習之旅開始了！",
    mock_report_analyzing: '🔍 AI 正在分析您的結果...',
    mock_report_strengths: '優勢',
    mock_report_weaknesses: '需要加強的領域',
    mock_report_next_steps: '建議學習計劃',
    mock_report_error: '無法生成 AI 報告。請稍後再試。',
    pass_title: '報告您的成功', pass_level: '通過的JLPT等級 *', pass_select: '選擇等級...',
    pass_score: '您的分數（選填）', pass_name: '顯示名稱 *',
    pass_country: '您的國家/地區', pass_message: '您的留言（將顯示在我們的網站上）',
    pass_photo: '證書照片（選填）', pass_upload: '點擊上傳您的證書',
    pass_submit: '提交報告',
    upgrade: '升級', upgrade_premium: '升級至高級',
    feedback_prompt: 'Fujisan.AI使用感如何？', feedback_title: '您的意見', feedback_placeholder: '請告訴我們您的想法...', feedback_submit: '提交', feedback_thanks: '感謝您的寶貴意見！', feedback_rating: '評價您的體驗', feedback_cta: 'Fujisan.AI如何？分享您的想法 →',
    ask_more: '詳細を聞く →',
    feedback_desc: '您的回饋幫助我們改進Fujisan.AI！', feedback_comment: '您的評論', feedback_comment_placeholder: '您喜歡什麼？有什麼可以改進的？', feedback_nickname: '暱稱（選填）', feedback_nickname_placeholder: '您希望我們怎麼稱呼您？', feedback_permission: '我允許在網站上展示我的回饋',
    // LP - 繁體中文
    methodology_label: '語言學習新範式',
    methodology_headline: '教學設計・第二語言習得理論・AI',
    methodology_desc: '以科學為基礎的語言習得方法，專為可衡量的學習成效而設計。',
    hero_badge: '科學實證學習',
    hero_title: '科學方法，精通日語。',
    hero_subtitle: '教學設計結合第二語言習得理論與AI個人化學習。通過JLPT N5-N1，成效可期。',
    hero_cta: '免費開始',
    hero_note: '7天試用・隨時取消',
    hero_stat_retention: '記憶保持率',
    hero_stat_students: '學習者',
    hero_stat_levels: '涵蓋等級',
    hero_stat_experience: '研究數據',
    science_label: '理論基礎',
    science_title: '基於實證的學習科學',
    science_subtitle: '教學設計原則與第二語言習得研究的完美結合',
    features_label: '平台功能',
    features_headline: '為可衡量成效而設計',
    features_subheadline: '完整的JLPT備考系統：適性測驗、AI回饋、驗證過的內容。',
    feature_mock_title: '真實模擬測驗',
    feature_mock_desc: '100套JLPT格式測驗，含計時、成績分析與詳細題目解析。',
    feature_ai_title: 'AI智能回饋',
    feature_ai_desc: 'Google Gemini以您的母語生成個人化解說。將錯誤轉化為學習機會。',
    feature_srs_title: '適性複習排程',
    feature_srs_desc: '機器學習強化的間隔重複，計算最佳複習時機。',
    feature_lang_title: '8種語言支援',
    feature_lang_desc: '介面與AI解說支援8種語言。母語輔助加速理解。',
    modes_label: '系統化學習架構',
    modes_title: '四階段習得框架',
    modes_subtitle: '輸入→吸收→整合→評估。科學化的學習路徑。',
    mode_learn_title: '輸入階段',
    mode_learn_desc: '可理解輸入與情境例句。多模態呈現：漢字、讀音、意義。',
    mode_practice_title: '主動回想',
    mode_practice_desc: '四技能檢索練習：聽力、閱讀、意義、書寫。',
    mode_review_title: '間隔複習',
    mode_review_desc: '基於個人遺忘曲線的ML優化排程。在遺忘前鞏固記憶。',
    mode_mock_title: '總結性評估',
    mode_mock_desc: '100套符合JLPT官方規格的模擬測驗。預測性分數分析。',
    levels_label: '內容範圍',
    levels_title: 'JLPT完整課程',
    levels_subtitle: '經官方規格驗證的完整內容——詞彙、漢字、文法與綜合技能',
    coverage_vocab: '詞彙', coverage_kanji: '漢字', coverage_grammar: '文法', coverage_mock: '模擬測驗',
    level_beginner: '初學者', level_elementary: '基礎', level_intermediate: '中級', level_advanced: '高級', level_expert: '專家',
    level_vocabulary: '詞彙', level_new_kanji: '新漢字', level_grammar: '文法', level_total: '總項目',
    level_n5_desc: '開始日語之旅。掌握平假名、片假名、基礎漢字和基本文法。',
    level_n5_f1: '平假名與片假名精熟', level_n5_f2: '基本句型', level_n5_f3: '自我介紹與日常生活',
    level_n4_desc: '打好基礎。處理複雜對話並閱讀簡單文章。',
    level_n4_f1: 'て形與動詞變化', level_n4_f2: '可能形與被動形', level_n4_f3: '閱讀短文',
    level_n3_desc: '通往流利的橋樑。理解日常日語並表達細膩觀點。',
    level_n3_f1: '複雜文法句型', level_n3_f2: '自然對話', level_n3_f3: '商務日語基礎',
    level_n2_desc: '專業級日語。閱讀報紙並處理商務情境。',
    level_n2_f1: '商務日語', level_n2_f2: '學術閱讀', level_n2_f3: '複雜聽力',
    level_n1_desc: '近母語水平。精通文學日語與高級溝通。',
    level_n1_f1: '文學表達', level_n1_f2: '細膩溝通', level_n1_f3: '大學程度文章',
    japan_title: '19年數據 + 尖端AI',
    japan_p1: 'Fujisan.AI 不只是另一個AI應用。它結合了 Google Gemini AI 與 TORAIZ Inc. 19年來自16,000+學生的語言教育數據。',
    japan_p2: '我們的AI模型基於真實學習者模式訓練——常見錯誤、有效解說、學習瓶頸。這是專為日語學習者優化的AI。',
    japan_p3: '結果：適應您大腦的超個人化學習，背後是來自東京近二十年的實證方法論。',
    compare_label: '比較', compare_title: '為什麼選擇Fujisan.AI？', compare_subtitle: '看看我們的AI學習如何與其他選項比較',
    compare_feature: '功能', compare_textbooks: '教科書', compare_other: '其他App',
    compare_jlpt: 'JLPT專注課程', compare_mock: '真實模擬測驗', compare_japan: '日本製造（東京）', compare_levels: '所有JLPT等級（N5-N1）',
    compare_full: '完整支援', compare_partial: '部分/有限', compare_none: '不可用',
    section_pricing: '選擇方案',
    referral_input_title: '有推薦碼？', referral_input_hint: '獲得30天免費試用而非7天！',
    plan_basic_monthly: '或 $7.99/月', plan_standard_monthly: '或 $14.99/月', plan_premium_monthly: '或 $29.99/月',
    plan_save: '年付省17%', plan_popular: '最受歡迎', plan_best: '最佳價值',
    plan_basic_f1: 'JLPT N5-N3全部內容', plan_basic_f2: '學習/練習/測驗模式', plan_basic_f3: '進度追蹤儀表板',
    plan_standard_f1: '基本方案全部功能，加：', plan_standard_f2: 'AI解說', plan_standard_f3: 'AI通過機率預測', plan_standard_f4: '完整模擬測驗',
    plan_premium_f1: '標準方案全部功能，加：', plan_premium_f2: 'AI導師（24/7日語問答）', plan_premium_f3: '所有JLPT等級（N5-N1）', plan_premium_f4: '優先支援',
    price_cta: '開始7天免費試用', price_card_note: '試用需要信用卡。試用期結束前可隨時取消。',
    referral_title: '邀請朋友，獲得免費月份！', referral_desc: '每位訂閱的朋友讓您獲得1個月免費',
    final_cta_title: '別再浪費時間在低效學習上', final_cta_sub: '體驗AI優化學習。7天免費試用·需要信用卡·隨時取消',
    faq_label: '常見問題', faq_title: '常見問題',
    faq_q1: '基本、標準和高級有什麼區別？', faq_a1: '基本包含N5內容和AI解說。標準增加完整模擬測驗。高級包含一切加AI導師和所有JLPT等級（N5-N1）。',
    faq_q2: '免費試用多長時間？', faq_a2: '所有方案享有7天免費試用。試用期結束前取消不會收費。',
    faq_q3: '什麼是AI導師？', faq_a3: 'AI導師（僅限高級）讓您詢問任何日語文法、詞彙或學習策略問題。獲得即時個人化答案。',
    faq_q4: '推薦計劃如何運作？', faq_a4: '與朋友分享您的推薦連結。當他們訂閱時，您們都獲得1個月免費。無上限！',
    faq_q5: '通過JLPT可以獲得獎勵嗎？', faq_a5: '是的！付費訂閱者通過JLPT可提交證書，獲得3個月免費。',
    footer_desc: 'AI驅動的日語學習，由東京TORAIZ Inc.精心打造——自2006年以來的線上語言教育先驅。',
    footer_product: '產品', footer_features: '功能', footer_levels: '等級', footer_pricing: '價格',
    footer_legal: '法律', footer_terms: '條款', footer_privacy: '隱私',
    footer_contact: '聯絡', footer_copyright: '© 2025 TORAIZ Inc. 保留所有權利。', footer_made: '用❤️在東京製作',
    nav_features: '功能', nav_levels: '等級', nav_pricing: '價格',
    btn_login: '登入', btn_start: '免費開始', btn_account: '帳戶', btn_logout: '登出',
    demo_listen: '播放', coming_soon: '即將', coming: '即將推出', coming_2025: '2025', level_n5_units: '50單元',
    referral_banner_title: '邀請好友，免費學習！',
    referral_banner_sub: '每位好友贈送1個月',
    greeting_morning: '早安',
    greeting_afternoon: '午安',
    greeting_evening: '晚安',
    ai_recommend_start: '開始',
    ai_recommend_default: '從詞彙基礎開始',
    ai_recommend_review: '複習需要加強的項目',
    ai_recommend_continue: '繼續學習',
    ai_recommend_focus: '專注於',
    ai_recommend_today: '今天',
    ai_recommend_about: '約',
    ai_recommend_minutes: '分鐘',
    ai_recommend_complete: '完成',
    nav_learn: '學習',
    nav_invite: '邀請',
    day_streak: '天連續',
    // JLPT Level Info
    level_detail_title: '關於此級別',
    level_detail_study_hours: '學習時數',
    level_detail_pass_mark: '合格分數',
    level_detail_test_time: '考試時長',
    level_detail_start: '開始學習',
    level_detail_reading: '閱讀',
    level_detail_listening: '聽力',
    level_detail_cando: '你能做什麼',
    level_detail_content: 'Fujisan.AI 內容',
    level_n5_difficulty: '初學者',
    level_n4_difficulty: '基礎',
    level_n3_difficulty: '中級',
    level_n2_difficulty: '進階',
    level_n1_difficulty: '專家',
    level_n5_official: '理解一些基本日語的能力。',
    level_n5_reading: '閱讀並理解用平假名、片假名和基本漢字書寫的典型表達和句子。',
    level_n5_listening: '聽懂日常生活和課堂中經常遇到的話題對話，從慢速短對話中獲取必要資訊。',
    level_n5_cando_1: '自我介紹和家人介紹',
    level_n5_cando_2: '詢問和提供基本方向',
    level_n5_cando_3: '在餐廳點餐',
    level_n5_cando_4: '理解簡單的通知',
    level_n4_official: '理解基本日語的能力。',
    level_n4_reading: '閱讀並理解用基本詞彙和漢字書寫的熟悉日常話題文章。',
    level_n4_listening: '聽懂日常生活中的對話，在慢速說話時大致理解其內容。',
    level_n4_cando_1: '進行日常生活的簡單對話',
    level_n4_cando_2: '閱讀和理解簡短的通知和標誌',
    level_n4_cando_3: '寫簡單的訊息和明信片',
    level_n4_cando_4: '藉助視覺輔助觀看基本電視節目',
    level_n3_official: '在一定程度上理解日常情境中使用的日語的能力。',
    level_n3_reading: '閱讀關於日常話題的具體內容材料。掌握報紙標題等摘要資訊。如有替代表達輔助，可理解稍難的文章。',
    level_n3_listening: '以接近自然的速度聽懂日常情境中的連貫對話，理解內容並把握人物關係。',
    level_n3_cando_1: '理解大部分日常對話',
    level_n3_cando_2: '閱讀報紙標題和簡單文章',
    level_n3_cando_3: '就熟悉的話題表達意見',
    level_n3_cando_4: '處理基本的商務溝通',
    level_n2_official: '在一定程度上理解日常情境和各種情況中使用的日語的能力。',
    level_n2_reading: '閱讀報章雜誌文章和簡單評論等各種話題的清晰材料。理解一般話題的敘述和作者意圖。',
    level_n2_listening: '在日常和各種情境中，以接近自然的速度理解新聞報導和對話，把握人物關係和要點。',
    level_n2_cando_1: '在日語商務環境中工作',
    level_n2_cando_2: '輕鬆閱讀報紙和雜誌',
    level_n2_cando_3: '參加日語大學講座',
    level_n2_cando_4: '理解大部分電視節目和電影',
    level_n1_official: '理解各種情況中使用的日語的能力。',
    level_n1_reading: '閱讀邏輯複雜和抽象的文章，如社論和評論。閱讀內容深刻的材料，全面理解作者意圖。',
    level_n1_listening: '在各種場合以自然速度理解新聞報導、演講和連貫對話。全面理解人物關係、邏輯結構和要點。',
    level_n1_cando_1: '閱讀學術論文和文學作品',
    level_n1_cando_2: '流利地參與專業討論',
    level_n1_cando_3: '理解微妙的語氣和文化含義',
    level_n1_cando_4: '擔任翻譯/口譯工作',
    unit_preview_title: '單元預覽',
    unit_preview_vocab: '詞彙',
    unit_preview_kanji: '漢字',
    unit_preview_grammar: '文法',
    unit_preview_start: '開始單元',
    unit_preview_sample: '範例項目',
    units: '單元'
  },
  'zh-CN': {
    nav_drill: '练习', nav_mock: '模拟', nav_ai: 'AI', nav_talk: '对话',
    nav_vocab: '单词', nav_kanji: '汉字', nav_new_kanji: '新出汉字', nav_grammar: '语法',
    // Talk
    talk_title: 'AI对话练习',
    talk_desc: '与AI练习日语会话',
    talk_unit_mode: '单元联动模式',
    talk_start: '开始',
    talk_free_theme: '自由主题',
    talk_greeting: '自我介绍',
    talk_restaurant: '餐厅',
    talk_shopping: '购物',
    talk_directions: '问路',
    talk_travel: '旅行',
    talk_free: '自由对话',
    talk_unit_practice: '使用Unit 1-{n}的单词练习',
    talk_intro_want: '我想自我介绍',
    talk_hobby_want: '我想聊兴趣',
    talk_japan_question: '我有关于日本的问题',
    talk_input_placeholder: '用日语输入...',
    talk_unit_desc_default: '使用单元单词练习',
    talk_chat_title: 'AI对话',
    talk_first_msg: '你好！让我们用{level}的单词来聊天吧。你想聊什么？',
    talk_feedback: '反馈',
    talk_you: '你',
    onboarding_welcome: '欢迎使用 Fujisan.AI',
    onboarding_welcome_desc: '您的AI日语学习伙伴。通过个性化学习掌握日语。',
    onboarding_goal: '您的目标是什么？',
    onboarding_goal_desc: '选择您的目标JLPT等级',
    onboarding_beginner: '初学者', onboarding_elementary: '基础',
    onboarding_intermediate: '中级', onboarding_advanced: '高级', onboarding_expert: '专家',
    onboarding_features: '3种学习方式',
    onboarding_drill: '练习', onboarding_drill_desc: '单词、汉字和语法练习',
    onboarding_mock: '模拟测验', onboarding_mock_desc: '真实JLPT格式练习题',
    onboarding_talk_feature: '对话', onboarding_talk_feature_desc: '与Sakura进行AI会话练习',
    onboarding_sakura_title: '认识Sakura，您的AI伙伴',
    onboarding_sakura_desc: '随时练习真实的日语对话',
    onboarding_talk: '与Sakura对话',
    onboarding_talk_desc: '用日语进行自然的语音对话 - Sakura会说会听！',
    onboarding_ai_explain: '为什么？按钮',
    onboarding_ai_explain_desc: '不懂？点击「为什么？」即可获得AI解说',
    onboarding_ai_coach: '智能复习',
    onboarding_ai_coach_desc: 'AI追踪您的进度，帮助您提升',
    onboarding_ready: '准备就绪！',
    onboarding_ready_desc: '开始练习、模拟测验，或与Sakura聊天！',
    onboarding_tip: '小提示：', onboarding_skip: '跳过', onboarding_next: '下一步', onboarding_start: '开始',
    quiz_prompt: '这是什么意思？', quiz_correct: '正确', quiz_wrong: '错误', quiz_time: '时间', correct_answer: '正确答案',
    quiz_review_title: '复习错误', quiz_review_btn: '复习错误',
    quiz_try_again: '再试一次', quiz_home: '首页', quiz_continue: '继续', quiz_next_unit: '下一单元 →', quiz_next: '下一题 →',
    quiz_listen_select: '听并选择正确的单词',
    generating_explanation: '生成解说中...',
    quiz_tap_play: '点击播放收听',
    quiz_select_reading: '选择正确的读音',
    quiz_select_meaning: '选择正确的意思',
    quiz_select_kanji: '选择正确的汉字/单词',
    quiz_drill_title: '练习',
    quiz_review_mode: '复习',
    pass_submitting: '提交中...',
    pass_submitted: '已提交！',
    pass_change_photo: '点击更换照片',
    trial_bonus_applied: '试用奖励已应用',
    mock_title: '模拟测验', mock_mode: '模式', mock_full: '完整', mock_section: '分段',
    mock_select_set: '选择套题开始', mock_not_attempted: '尚未作答',
    mock_set: '套', mock_random: '🎲 随机', mock_last_score: '上次分数',
    mock_start: '开始测验', mock_next: '下一题 →', mock_prev: '← 上一题',
    mock_result: '模拟测验结果', mock_analyzing: '正在分析您的结果...',
    mock_try_again: '再试一次', mock_back: '返回模拟测验', mock_practice_weak: '练习弱点',
    ai_title: 'AI学习教练', ai_desc: '引导您的语言学习之旅',
    ai_premium: '高级功能',
    ai_science: '科学解释', ai_science_desc: '理解比死记硬背更能建立强大记忆',
    ai_scaffold: '个性化支持', ai_scaffold_desc: '根据您目前的水平量身定制指导',
    ai_growth: '成长导向指导', ai_growth_desc: '将挑战视为机会而非障碍',
    ai_support: '24/7 支持', ai_support_desc: '凌晨2点有问题？教练随时在这里',
    ai_send: '发送', ai_placeholder: '询问语法、单词或学习策略...',
    ai_growth_areas: '📊 我的成长领域', ai_study_science: '📚 学习科学', ai_error_patterns: '🧠 错误模式',
    settings_title: '设置', settings_account: '账户', settings_email: '电子邮件',
    settings_plan: '当前方案', settings_not_logged: '未登录', settings_free: '免费试用',
    settings_study: '学习设置', settings_qcount: '每单元题数', settings_qcount_desc: '每次练习的题目数',
    settings_sound: '音效', settings_sound_desc: '测验音效',
    settings_data: '数据', settings_reset: '重置进度', settings_reset_desc: '清除所有学习数据',
    settings_logout: '登出', settings_logout_desc: '登出您的账户',
    settings_manage: '管理订阅', settings_help: '帮助', settings_support: '支持',
    sub_choose: '选择方案', sub_basic: '基本', sub_standard: '标准', sub_premium: '高级',
    sub_basic_f1: 'JLPT N5-N3 内容', sub_basic_f2: '学习/练习/复习/测验',
    sub_basic_f3: '进度追踪', sub_basic_f4: '无限练习',
    sub_std_f1: '基本方案全部功能', sub_std_f2: '完整模拟测验', sub_std_f3: 'AI解释',
    sub_prem_f1: '标准方案全部功能', sub_prem_f2: '所有JLPT等级(N5-N1)',
    sub_prem_f3: 'AI导师', sub_prem_f4: '优先支持',
    trial_title: '开始免费试用',
    trial_desc: '获得所有JLPT等级、模拟测验和AI导师的<strong>完整访问权</strong>，<strong>7天免费</strong>。',
    trial_f1: '所有N5-N1单词、汉字和语法', trial_f2: '每个等级20套完整模拟测验',
    trial_f3: 'AI导师解释每个错误', trial_f4: '试用期结束前可随时取消',
    trial_start: '立即免费试用7天', trial_note: '7天免费试用 • 随时取消', trial_later: '稍后再说',
    trial_welcome: '🎉 欢迎！您的 {plan}（{billing}）方案 7 天免费试用已开始。所有功能已解锁！',
    billing_annual: '年付', billing_monthly: '月付',
    // AI Coach
    ai_coach_title: '本周重点',
    ai_coach_loading: '正在分析您的学习进度...',
    ai_coach_details: '查看详情',
    ai_coach_hide: '隐藏详情',
    ai_coach_receptive: '理解能力（听/读）',
    ai_coach_productive: '运用能力（意思/写）',
    ai_coach_recommended: '重点',
    ai_coach_review: '复习',
    ai_coach_fallback_focus: '保持每日练习！',
    ai_coach_fallback_reason: '持续学习是掌握日语的关键。',
    ai_coach_fallback_encourage: '您正在取得很好的进步！',
    ai_coach_welcome_title: '欢迎！让我们开始学习之旅。',
    ai_coach_welcome_desc: '完成10题后，我会为您制定专属学习计划。',
    ai_coach_progress_title: '好的开始！继续加油。',
    ai_coach_progress_desc: '您的专属AI分析即将完成！',
    ai_coach_intro_title: "我是您的AI学习教练",
    ai_coach_intro_desc: "我会为您制定JLPT成功的专属路线图。让我们开始吧！",
    ai_coach_q_name: "请问您的名字是？",
    ai_coach_name_placeholder: "输入您的名字",
    ai_coach_q_exam: "您计划何时参加JLPT考试？",
    ai_coach_q_target: "您想通过哪个JLPT等级？",
    ai_coach_q_level: "您目前的日语程度如何？",
    ai_coach_q_time: "您每天能学习多长时间？",
    ai_coach_select: "请选择...",
    ai_coach_july: "2025年7月",
    ai_coach_december: "2025年12月",
    ai_coach_july_next: "2026年7月",
    ai_coach_undecided: "尚未决定",
    ai_coach_level_beginner: "完全初学者",
    ai_coach_level_hiragana: "已会平假名/片假名",
    ai_coach_level_n5: "N5程度（基础）",
    ai_coach_level_n4: "N4程度（初级）",
    ai_coach_level_n3: "N3程度（中级）",
    ai_coach_level_n2: "N2+程度（进阶）",
    ai_coach_time_15: "15分钟",
    ai_coach_time_30: "30分钟",
    ai_coach_time_60: "1小时",
    ai_coach_time_90: "1小时以上",
    ai_coach_your_roadmap: "您的专属学习路线图",
    ai_coach_roadmap_suffix: "的学习路线图",
    ai_coach_this_week: "本周重点：",
    ai_coach_goal: "您的目标",
    ai_coach_start_btn: "开始学习！",
    ai_coach_journey_started: "您的学习之旅已开始！",
    ai_coach_journey_desc: "完成10题后即可解锁详细的每周分析。",
    pass_probability: "合格可能性",
    pass_section_vocab: "词汇",
    pass_section_grammar: "语法",
    pass_section_reading: "阅读",
    pass_section_listening: "听力",
    srs_review_due: "待复习",
    srs_urgent: "紧急",
    srs_soon: "今日",
    srs_later: "本周",
    srs_start: "开始复习",
    srs_no_items: "没有待复习的项目！",
    habit_greeting_morning: "早上好",
    habit_greeting_afternoon: "下午好",
    habit_greeting_evening: "晚上好",
    habit_day_streak: "天连续学习",
    habit_min_today: "分钟（今日）",
    habit_dont_break: "不要中断您的",
    habit_streak_suffix: "天连续记录！",
    habit_start_study: "开始今天的学习吧！",
    habit_more_minutes: "分钟即可达成今日目标！",
    habit_build_foundation: "来打好基础吧！",
    habit_more_questions: "题后即可解锁个人化分析。",
    habit_journey_begun: "您的学习之旅开始了！",
    mock_report_analyzing: '🔍 AI 正在分析您的结果...',
    mock_report_strengths: '优势',
    mock_report_weaknesses: '需要加强的领域',
    mock_report_next_steps: '建议学习计划',
    mock_report_error: '无法生成 AI 报告。请稍后再试。',
    pass_title: '报告您的成功', pass_level: '通过的JLPT等级 *', pass_select: '选择等级...',
    pass_score: '您的分数（选填）', pass_name: '显示名称 *',
    pass_country: '您的国家/地区', pass_message: '您的留言（将显示在我们的网站上）',
    pass_photo: '证书照片（选填）', pass_upload: '点击上传您的证书',
    pass_submit: '提交报告',
    // Feedback
    feedback_cta: 'Fujisan.AI怎么样？分享您的想法 →',
    ask_more: '了解更多 →',
    feedback_title: '分享您的反馈',
    feedback_desc: '您的反馈帮助我们改进Fujisan.AI！',
    feedback_rating: '您如何评价Fujisan.AI？',
    feedback_comment: '您的评论',
    feedback_comment_placeholder: '您喜欢什么？有什么可以改进的？',
    feedback_nickname: '昵称（可选）',
    feedback_nickname_placeholder: '您希望我们怎么称呼您？',
    feedback_permission: '我允许在网站上展示我的反馈',
    feedback_submit: '发送反馈',
    feedback_select_rating: '请选择评分',
    feedback_sending: '发送中...',
    feedback_thanks: '感谢您的反馈！',
    feedback_thank_title: '谢谢！',
    feedback_thank_desc: '您的反馈帮助我们改进。',
    upgrade: '升级', upgrade_premium: '升级至高级',
    feedback_prompt: 'Fujisan.AI使用感如何？', feedback_title: '您的意见', feedback_placeholder: '请告诉我们您的想法...', feedback_submit: '提交', feedback_thanks: '感谢您的宝贵意见！', feedback_rating: '评价您的体验',
    // LP - 简体中文
    methodology_label: '语言学习新范式',
    methodology_headline: '教学设计・第二语言习得理论・AI',
    methodology_desc: '以科学为基础的语言习得方法，专为可衡量的学习成效而设计。',
    hero_badge: '科学实证学习',
    hero_title: '科学方法，精通日语。',
    hero_subtitle: '教学设计结合第二语言习得理论与AI个性化学习。通过JLPT N5-N1，成效可期。',
    hero_cta: '免费开始',
    hero_note: '7天试用・随时取消',
    hero_stat_retention: '记忆保持率',
    hero_stat_students: '学习者',
    hero_stat_levels: '涵盖等级',
    hero_stat_experience: '研究数据',
    science_label: '理论基础',
    science_title: '基于实证的学习科学',
    science_subtitle: '教学设计原则与第二语言习得研究的完美结合',
    features_label: '平台功能',
    features_headline: '为可衡量成效而设计',
    features_subheadline: '完整的JLPT备考系统：适性测验、AI反馈、验证过的内容。',
    feature_mock_title: '真实模拟测验',
    feature_mock_desc: '100套JLPT格式测验，含计时、成绩分析与详细题目解析。',
    feature_ai_title: 'AI智能反馈',
    feature_ai_desc: 'Google Gemini以您的母语生成个性化解说。将错误转化为学习机会。',
    feature_srs_title: '适性复习排程',
    feature_srs_desc: '机器学习强化的间隔重复，计算最佳复习时机。',
    feature_lang_title: '8种语言支持',
    feature_lang_desc: '界面与AI解说支持8种语言。母语辅助加速理解。',
    modes_label: '系统化学习架构',
    modes_title: '四阶段习得框架',
    modes_subtitle: '输入→吸收→整合→评估。科学化的学习路径。',
    mode_learn_title: '输入阶段',
    mode_learn_desc: '可理解输入与情境例句。多模态呈现：汉字、读音、意义。',
    mode_practice_title: '主动回想',
    mode_practice_desc: '四技能检索练习：听力、阅读、意义、书写。',
    mode_review_title: '间隔复习',
    mode_review_desc: '基于个人遗忘曲线的ML优化排程。在遗忘前巩固记忆。',
    mode_mock_title: '总结性评估',
    mode_mock_desc: '100套符合JLPT官方规格的模拟测验。预测性分数分析。',
    levels_label: '内容范围',
    levels_title: 'JLPT完整课程',
    levels_subtitle: '经官方规格验证的完整内容——词汇、汉字、语法与综合技能',
    coverage_vocab: '词汇', coverage_kanji: '汉字', coverage_grammar: '语法', coverage_mock: '模拟测验',
    level_beginner: '初学者', level_elementary: '基础', level_intermediate: '中级', level_advanced: '高级', level_expert: '专家',
    level_vocabulary: '词汇', level_new_kanji: '新汉字', level_grammar: '语法', level_total: '总项目',
    level_n5_desc: '开始日语之旅。掌握平假名、片假名、基础汉字和基本语法。',
    level_n5_f1: '平假名与片假名精熟', level_n5_f2: '基本句型', level_n5_f3: '自我介绍与日常生活',
    level_n4_desc: '打好基础。处理复杂对话并阅读简单文章。',
    level_n4_f1: 'て形与动词变化', level_n4_f2: '可能形与被动形', level_n4_f3: '阅读短文',
    level_n3_desc: '通往流利的桥梁。理解日常日语并表达细腻观点。',
    level_n3_f1: '复杂语法句型', level_n3_f2: '自然对话', level_n3_f3: '商务日语基础',
    level_n2_desc: '专业级日语。阅读报纸并处理商务情境。',
    level_n2_f1: '商务日语', level_n2_f2: '学术阅读', level_n2_f3: '复杂听力',
    level_n1_desc: '近母语水平。精通文学日语与高级沟通。',
    level_n1_f1: '文学表达', level_n1_f2: '细腻沟通', level_n1_f3: '大学程度文章',
    japan_title: '19年数据 + 尖端AI',
    japan_p1: 'Fujisan.AI 不只是另一个AI应用。它结合了 Google Gemini AI 与 TORAIZ Inc. 19年来自16,000+学生的语言教育数据。',
    japan_p2: '我们的AI模型基于真实学习者模式训练——常见错误、有效解说、学习瓶颈。这是专为日语学习者优化的AI。',
    japan_p3: '结果：适应您大脑的超个性化学习，背后是来自东京近二十年的实证方法论。',
    compare_label: '比较', compare_title: '为什么选择Fujisan.AI？', compare_subtitle: '看看我们的AI学习如何与其他选项比较',
    compare_feature: '功能', compare_textbooks: '教科书', compare_other: '其他App',
    compare_jlpt: 'JLPT专注课程', compare_mock: '真实模拟测验', compare_japan: '日本制造（东京）', compare_levels: '所有JLPT等级（N5-N1）',
    compare_full: '完整支持', compare_partial: '部分/有限', compare_none: '不可用',
    section_pricing: '选择方案',
    referral_input_title: '有推荐码？', referral_input_hint: '获得30天免费试用而非7天！',
    plan_basic_monthly: '或 $7.99/月', plan_standard_monthly: '或 $14.99/月', plan_premium_monthly: '或 $29.99/月',
    plan_save: '年付省17%', plan_popular: '最受欢迎', plan_best: '最佳价值',
    plan_basic_f1: 'JLPT N5-N3全部内容', plan_basic_f2: '学习/练习/测验模式', plan_basic_f3: '进度追踪仪表板',
    plan_standard_f1: '基本方案全部功能，加：', plan_standard_f2: 'AI解说', plan_standard_f3: 'AI通过概率预测', plan_standard_f4: '完整模拟测验',
    plan_premium_f1: '标准方案全部功能，加：', plan_premium_f2: 'AI导师（24/7日语问答）', plan_premium_f3: '所有JLPT等级（N5-N1）', plan_premium_f4: '优先支持',
    price_cta: '开始7天免费试用', price_card_note: '试用需要信用卡。试用期结束前可随时取消。',
    referral_title: '邀请朋友，获得免费月份！', referral_desc: '每位订阅的朋友让您获得1个月免费',
    final_cta_title: '别再浪费时间在低效学习上', final_cta_sub: '体验AI优化学习。7天免费试用·需要信用卡·随时取消',
    faq_label: '常见问题', faq_title: '常见问题',
    faq_q1: '基本、标准和高级有什么区别？', faq_a1: '基本包含N5内容和AI解说。标准增加完整模拟测验。高级包含一切加AI导师和所有JLPT等级（N5-N1）。',
    faq_q2: '免费试用多长时间？', faq_a2: '所有方案享有7天免费试用。试用期结束前取消不会收费。',
    faq_q3: '什么是AI导师？', faq_a3: 'AI导师（仅限高级）让您询问任何日语语法、词汇或学习策略问题。获得即时个性化答案。',
    faq_q4: '推荐计划如何运作？', faq_a4: '与朋友分享您的推荐链接。当他们订阅时，您们都获得1个月免费。无上限！',
    faq_q5: '通过JLPT可以获得奖励吗？', faq_a5: '是的！付费订阅者通过JLPT可提交证书，获得3个月免费。',
    footer_desc: 'AI驱动的日语学习，由东京TORAIZ Inc.精心打造——自2006年以来的在线语言教育先驱。',
    footer_product: '产品', footer_features: '功能', footer_levels: '等级', footer_pricing: '价格',
    footer_legal: '法律', footer_terms: '条款', footer_privacy: '隐私',
    footer_contact: '联系', footer_copyright: '© 2025 TORAIZ Inc. 保留所有权利。', footer_made: '用❤️在东京制作',
    nav_features: '功能', nav_levels: '等级', nav_pricing: '价格',
    btn_login: '登录', btn_start: '免费开始', btn_account: '账户', btn_logout: '登出',
    demo_listen: '播放', coming_soon: '即将', coming: '即将推出', coming_2025: '2025', level_n5_units: '50单元',
    greeting_morning: '早上好',
    greeting_afternoon: '下午好',
    greeting_evening: '晚上好',
    ai_recommend_start: '开始',
    ai_recommend_default: '从词汇基础开始',
    ai_recommend_review: '复习需要加强的项目',
    ai_recommend_continue: '继续学习',
    ai_recommend_focus: '专注于',
    ai_recommend_today: '今天',
    ai_recommend_about: '约',
    ai_recommend_minutes: '分钟',
    ai_recommend_complete: '完成',
    nav_learn: '学习',
    nav_invite: '邀请',
    day_streak: '天连续',
    // JLPT Level Info
    level_detail_title: '关于此级别',
    level_detail_study_hours: '学习时长',
    level_detail_pass_mark: '合格分数',
    level_detail_test_time: '考试时长',
    level_detail_start: '开始学习',
    level_detail_reading: '阅读',
    level_detail_listening: '听力',
    level_detail_cando: '你能做什么',
    level_detail_content: 'Fujisan.AI 内容',
    level_n5_difficulty: '初学者',
    level_n4_difficulty: '基础',
    level_n3_difficulty: '中级',
    level_n2_difficulty: '进阶',
    level_n1_difficulty: '专家',
    level_n5_official: '理解一些基本日语的能力。',
    level_n5_reading: '阅读并理解用平假名、片假名和基本汉字书写的典型表达和句子。',
    level_n5_listening: '听懂日常生活和课堂中经常遇到的话题对话，从慢速短对话中获取必要信息。',
    level_n5_cando_1: '自我介绍和家人介绍',
    level_n5_cando_2: '询问和提供基本方向',
    level_n5_cando_3: '在餐厅点餐',
    level_n5_cando_4: '理解简单的通知',
    level_n4_official: '理解基本日语的能力。',
    level_n4_reading: '阅读并理解用基本词汇和汉字书写的熟悉日常话题文章。',
    level_n4_listening: '听懂日常生活中的对话，在慢速说话时大致理解其内容。',
    level_n4_cando_1: '进行日常生活的简单对话',
    level_n4_cando_2: '阅读和理解简短的通知和标志',
    level_n4_cando_3: '写简单的消息和明信片',
    level_n4_cando_4: '借助视觉辅助观看基本电视节目',
    level_n3_official: '在一定程度上理解日常情境中使用的日语的能力。',
    level_n3_reading: '阅读关于日常话题的具体内容材料。掌握报纸标题等摘要信息。如有替代表达辅助，可理解稍难的文章。',
    level_n3_listening: '以接近自然的速度听懂日常情境中的连贯对话，理解内容并把握人物关系。',
    level_n3_cando_1: '理解大部分日常对话',
    level_n3_cando_2: '阅读报纸标题和简单文章',
    level_n3_cando_3: '就熟悉的话题表达意见',
    level_n3_cando_4: '处理基本的商务沟通',
    level_n2_official: '在一定程度上理解日常情境和各种情况中使用的日语的能力。',
    level_n2_reading: '阅读报刊杂志文章和简单评论等各种话题的清晰材料。理解一般话题的叙述和作者意图。',
    level_n2_listening: '在日常和各种情境中，以接近自然的速度理解新闻报道和对话，把握人物关系和要点。',
    level_n2_cando_1: '在日语商务环境中工作',
    level_n2_cando_2: '轻松阅读报纸和杂志',
    level_n2_cando_3: '参加日语大学讲座',
    level_n2_cando_4: '理解大部分电视节目和电影',
    level_n1_official: '理解各种情况中使用的日语的能力。',
    level_n1_reading: '阅读逻辑复杂和抽象的文章，如社论和评论。阅读内容深刻的材料，全面理解作者意图。',
    level_n1_listening: '在各种场合以自然速度理解新闻报道、演讲和连贯对话。全面理解人物关系、逻辑结构和要点。',
    level_n1_cando_1: '阅读学术论文和文学作品',
    level_n1_cando_2: '流利地参与专业讨论',
    level_n1_cando_3: '理解微妙的语气和文化含义',
    level_n1_cando_4: '担任翻译/口译工作',
    unit_preview_title: '单元预览',
    unit_preview_vocab: '词汇',
    unit_preview_kanji: '汉字',
    unit_preview_grammar: '语法',
    unit_preview_start: '开始单元',
    unit_preview_sample: '示例项目',
    units: '单元'
  },
  ko: {
    nav_drill: '연습', nav_mock: '모의', nav_ai: 'AI', nav_talk: '대화',
    nav_vocab: '단어', nav_kanji: '한자', nav_new_kanji: '새 한자', nav_grammar: '문법',
    // Talk
    talk_title: 'AI 회화 연습',
    talk_desc: 'AI와 일본어 회화 연습',
    talk_unit_mode: '유닛 연동 모드',
    talk_start: '시작',
    talk_free_theme: '자유 주제',
    talk_greeting: '자기소개',
    talk_restaurant: '레스토랑',
    talk_shopping: '쇼핑',
    talk_directions: '길 안내',
    talk_travel: '여행',
    talk_free: '자유 대화',
    talk_unit_practice: 'Unit 1-{n} 단어로 연습',
    talk_intro_want: '자기소개를 하고 싶어요',
    talk_hobby_want: '취미에 대해 이야기하고 싶어요',
    talk_japan_question: '일본에 대해 질문이 있어요',
    talk_input_placeholder: '일본어로 입력...',
    talk_unit_desc_default: '유닛 단어로 연습',
    talk_chat_title: 'AI 대화',
    talk_first_msg: '안녕하세요! {level} 단어로 이야기해요. 무엇에 대해 이야기할까요?',
    talk_feedback: '피드백',
    talk_you: '나',
    onboarding_welcome: 'Fujisan.AI에 오신 것을 환영합니다',
    onboarding_welcome_desc: 'AI 기반 JLPT 튜터. 맞춤형 학습으로 일본어를 마스터하세요.',
    onboarding_goal: '목표가 무엇인가요?',
    onboarding_goal_desc: '목표 JLPT 레벨을 선택하세요',
    onboarding_beginner: '초급', onboarding_elementary: '기초',
    onboarding_intermediate: '중급', onboarding_advanced: '고급', onboarding_expert: '전문가',
    onboarding_features: '3가지 학습 방법',
    onboarding_drill: '연습', onboarding_drill_desc: '단어, 한자 및 문법 연습',
    onboarding_mock: '모의 테스트', onboarding_mock_desc: '실제 JLPT 형식 연습문제',
    onboarding_talk_feature: '대화', onboarding_talk_feature_desc: 'Sakura와 AI 회화 연습',
    onboarding_sakura_title: 'AI 파트너 Sakura를 만나보세요',
    onboarding_sakura_desc: '언제든지 실제 일본어 대화를 연습하세요',
    onboarding_talk: 'Sakura와 대화',
    onboarding_talk_desc: '일본어로 자연스러운 음성 대화를 해보세요 - Sakura가 말하고 들어요!',
    onboarding_ai_explain: '왜? 버튼',
    onboarding_ai_explain_desc: '이해가 안 되나요? "왜?"를 탭하면 AI가 설명해 드려요',
    onboarding_ai_coach: '스마트 복습',
    onboarding_ai_coach_desc: 'AI가 진행 상황을 추적하고 향상을 도와드려요',
    onboarding_ready: '준비 완료!',
    onboarding_ready_desc: '연습, 모의 테스트, 또는 Sakura와 채팅을 시작하세요!',
    onboarding_tip: '팁:', onboarding_skip: '건너뛰기', onboarding_next: '다음', onboarding_start: '시작',
    quiz_prompt: '이것은 무슨 뜻인가요?', quiz_correct: '정답', quiz_wrong: '오답', quiz_time: '시간', correct_answer: '정답',
    quiz_review_title: '오답 복습', quiz_review_btn: '오답 복습',
    quiz_try_again: '다시 시도', quiz_home: '홈', quiz_continue: '계속', quiz_next_unit: '다음 단원 →', quiz_next: '다음 →',
    quiz_listen_select: '듣고 올바른 단어를 선택하세요',
    generating_explanation: '해설 생성 중...',
    quiz_tap_play: '재생을 눌러 들으세요',
    quiz_select_reading: '올바른 읽기를 선택하세요',
    quiz_select_meaning: '올바른 의미를 선택하세요',
    quiz_select_kanji: '올바른 한자/단어를 선택하세요',
    quiz_drill_title: '연습',
    quiz_review_mode: '복습',
    pass_submitting: '제출 중...',
    pass_submitted: '제출 완료!',
    pass_change_photo: '사진 변경하려면 클릭',
    trial_bonus_applied: '체험 보너스 적용됨',
    mock_title: '모의 테스트', mock_mode: '모드', mock_full: '전체', mock_section: '섹션',
    mock_select_set: '세트를 선택하여 시작', mock_not_attempted: '미응시',
    mock_set: '세트', mock_random: '🎲 랜덤', mock_last_score: '이전 점수',
    mock_start: '테스트 시작', mock_next: '다음 →', mock_prev: '← 이전',
    mock_result: '모의 테스트 결과', mock_analyzing: '결과 분석 중...',
    mock_try_again: '다시 시도', mock_back: '모의 테스트로 돌아가기', mock_practice_weak: '약점 연습',
    ai_title: 'AI 학습 코치', ai_desc: '언어 학습 여정을 안내합니다',
    ai_premium: '프리미엄 기능',
    ai_science: '과학적 설명', ai_science_desc: '단순 암기보다 이해가 더 오래 기억됩니다',
    ai_scaffold: '맞춤형 지원', ai_scaffold_desc: '지금 수준에 딱 맞는 학습 안내',
    ai_growth: '성장 중심 코칭', ai_growth_desc: '어려움을 성장의 기회로 바꿔드려요',
    ai_support: '24/7 지원', ai_support_desc: '새벽에 궁금한 게 있어도 괜찮아요. 언제든 물어보세요',
    ai_send: '보내기', ai_placeholder: '문법, 어휘 또는 학습 전략에 대해 질문하세요...',
    ai_growth_areas: '📊 나의 성장 영역', ai_study_science: '📚 학습 과학', ai_error_patterns: '🧠 오류 패턴',
    settings_title: '설정', settings_account: '계정', settings_email: '이메일',
    settings_plan: '현재 플랜', settings_not_logged: '로그인하지 않음', settings_free: '무료 체험',
    settings_study: '학습 설정', settings_qcount: '단원당 문제 수', settings_qcount_desc: '세션당 항목 수',
    settings_sound: '효과음', settings_sound_desc: '퀴즈 소리',
    settings_data: '데이터', settings_reset: '진행 상황 초기화', settings_reset_desc: '모든 학습 데이터 삭제',
    settings_logout: '로그아웃', settings_logout_desc: '계정에서 로그아웃',
    settings_manage: '구독 관리', settings_help: '도움말', settings_support: '지원',
    sub_choose: '플랜 선택', sub_basic: '베이직', sub_standard: '스탠다드', sub_premium: '프리미엄',
    sub_basic_f1: 'JLPT N5-N3 콘텐츠', sub_basic_f2: '학습/연습/복습/테스트',
    sub_basic_f3: '진행 상황 추적', sub_basic_f4: '무제한 학습',
    sub_std_f1: '베이직의 모든 기능', sub_std_f2: '전체 모의 테스트', sub_std_f3: 'AI 설명',
    sub_prem_f1: '스탠다드의 모든 기능', sub_prem_f2: '모든 JLPT 레벨(N5-N1)',
    sub_prem_f3: 'AI 튜터', sub_prem_f4: '우선 지원',
    trial_title: '무료 체험 시작',
    trial_desc: '모든 JLPT 레벨, 모의 테스트 및 AI 튜터에 <strong>7일간 무료</strong>로 <strong>전체 액세스</strong>하세요.',
    trial_f1: '모든 N5-N1 단어, 한자 및 문법', trial_f2: '레벨당 20개의 전체 모의 테스트',
    trial_f3: 'AI 튜터가 모든 실수 설명', trial_f4: '체험 기간 종료 전 언제든 취소 가능',
    trial_start: '지금 7일 무료 체험!', trial_note: '7일 무료 체험 • 언제든 취소', trial_later: '나중에',
    trial_welcome: '🎉 환영합니다! {plan}({billing}) 플랜의 7일 무료 체험이 시작되었습니다. 모든 기능이 잠금 해제되었어요!',
    billing_annual: '연간', billing_monthly: '월간',
    // AI Coach
    ai_coach_title: '이번 주 중점',
    ai_coach_loading: '학습 진도를 분석 중...',
    ai_coach_details: '상세 보기',
    ai_coach_hide: '상세 숨기기',
    ai_coach_receptive: '이해력 (듣기/읽기)',
    ai_coach_productive: '활용력 (의미/쓰기)',
    ai_coach_recommended: '중점',
    ai_coach_review: '복습',
    ai_coach_fallback_focus: '매일 꾸준히 연습하세요!',
    ai_coach_fallback_reason: '꾸준함이 일본어 마스터의 핵심입니다.',
    ai_coach_fallback_encourage: '잘 하고 계세요!',
    ai_coach_welcome_title: '환영합니다! 학습을 시작해볼까요.',
    ai_coach_welcome_desc: '10문제를 풀면 맞춤형 학습 계획을 만들어 드릴게요.',
    ai_coach_progress_title: '좋은 시작이에요! 계속 화이팅.',
    ai_coach_progress_desc: '맞춤형 AI 분석이 거의 준비됐어요!',
    ai_coach_intro_title: "저는 AI 학습 코치입니다",
    ai_coach_intro_desc: "JLPT 합격을 위한 맞춤형 로드맵을 만들어 드릴게요. 시작해볼까요!",
    ai_coach_q_name: "이름이 어떻게 되세요?",
    ai_coach_name_placeholder: "이름을 입력하세요",
    ai_coach_q_exam: "JLPT 시험은 언제 볼 예정인가요?",
    ai_coach_q_target: "어떤 JLPT 레벨에 합격하고 싶으세요?",
    ai_coach_q_level: "현재 일본어 실력은 어느 정도인가요?",
    ai_coach_q_time: "하루에 얼마나 공부할 수 있나요?",
    ai_coach_select: "선택...",
    ai_coach_july: "2025년 7월",
    ai_coach_december: "2025년 12월",
    ai_coach_july_next: "2026년 7월",
    ai_coach_undecided: "아직 미정",
    ai_coach_level_beginner: "완전 초보",
    ai_coach_level_hiragana: "히라가나/가타카나 가능",
    ai_coach_level_n5: "N5 수준 (기초)",
    ai_coach_level_n4: "N4 수준 (초급)",
    ai_coach_level_n3: "N3 수준 (중급)",
    ai_coach_level_n2: "N2+ 수준 (고급)",
    ai_coach_time_15: "15분",
    ai_coach_time_30: "30분",
    ai_coach_time_60: "1시간",
    ai_coach_time_90: "1시간 이상",
    ai_coach_your_roadmap: "나만의 학습 로드맵",
    ai_coach_roadmap_suffix: "님의 로드맵",
    ai_coach_this_week: "이번 주 중점:",
    ai_coach_goal: "목표",
    ai_coach_start_btn: "시작하기!",
    ai_coach_journey_started: "학습 여정이 시작됐어요!",
    ai_coach_journey_desc: "10문제를 풀면 상세한 주간 분석이 열려요.",
    pass_probability: "합격 가능성",
    pass_section_vocab: "어휘",
    pass_section_grammar: "문법",
    pass_section_reading: "독해",
    pass_section_listening: "청해",
    srs_review_due: "복습 필요",
    srs_urgent: "긴급",
    srs_soon: "오늘",
    srs_later: "이번 주",
    srs_start: "복습 시작",
    srs_no_items: "복습할 항목이 없습니다!",
    habit_greeting_morning: "좋은 아침이에요",
    habit_greeting_afternoon: "좋은 오후에요",
    habit_greeting_evening: "좋은 저녁이에요",
    habit_day_streak: "일 연속 학습",
    habit_min_today: "분 (오늘)",
    habit_dont_break: "연속 기록을 끊지 마세요!",
    habit_streak_suffix: "일!",
    habit_start_study: "오늘 학습을 시작하세요!",
    habit_more_minutes: "분 더 하면 오늘 목표 달성!",
    habit_build_foundation: "기초를 다져요!",
    habit_more_questions: "문제 더 풀면 맞춤 분석이 열려요.",
    habit_journey_begun: "학습 여정이 시작됐어요!",
    mock_report_analyzing: '🔍 AI가 결과를 분석 중입니다...',
    mock_report_strengths: '강점',
    mock_report_weaknesses: '개선이 필요한 부분',
    mock_report_next_steps: '추천 학습 계획',
    mock_report_error: 'AI 보고서를 생성할 수 없습니다. 다시 시도해 주세요.',
    pass_title: '성공 보고', pass_level: '합격한 JLPT 레벨 *', pass_select: '레벨 선택...',
    pass_score: '점수(선택)', pass_name: '표시 이름 *',
    pass_country: '국가/지역', pass_message: '메시지(웹사이트에 표시됨)',
    pass_photo: '증명서 사진(선택)', pass_upload: '증명서를 업로드하려면 클릭',
    pass_submit: '보고서 제출',
    upgrade: '업그레이드', upgrade_premium: '프리미엄으로 업그레이드',
    feedback_prompt: 'Fujisan.AI 어떠세요?', feedback_title: '피드백', feedback_placeholder: '의견을 들려주세요...', feedback_submit: '제출', feedback_thanks: '소중한 의견 감사합니다!', feedback_rating: '경험 평가하기', feedback_cta: 'Fujisan.AI 어떠세요? 의견을 공유해주세요 →',
    ask_more: '더 알아보기 →',
    feedback_desc: '여러분의 피드백이 Fujisan.AI 개선에 도움이 됩니다!', feedback_comment: '코멘트', feedback_comment_placeholder: '무엇이 좋았나요? 개선할 점이 있나요?', feedback_nickname: '닉네임 (선택)', feedback_nickname_placeholder: '어떻게 불러드릴까요?', feedback_permission: '웹사이트에 내 피드백 표시를 허용합니다',
    // LP - 한국어
    methodology_label: '언어 학습의 새로운 패러다임',
    methodology_headline: '교수 설계・제2언어 습득 이론・AI',
    methodology_desc: '측정 가능한 학습 성과를 위해 설계된 과학적 언어 습득 방법.',
    hero_badge: '과학적 실증 학습',
    hero_title: '과학적으로, 일본어 마스터.',
    hero_subtitle: '교수 설계와 제2언어 습득 이론, AI 개인화 학습의 결합. JLPT N5-N1 합격을 위한 검증된 시스템.',
    hero_cta: '무료로 시작하기',
    hero_note: '7일 체험・언제든 취소',
    hero_stat_retention: '기억 유지율',
    hero_stat_students: '학습자',
    hero_stat_levels: '커버리지',
    hero_stat_experience: '연구 데이터',
    science_label: '이론적 기반',
    science_title: '검증된 학습 과학 기반',
    science_subtitle: '교수 설계 원칙과 제2언어 습득 연구의 만남',
    features_label: '플랫폼 기능',
    features_headline: '측정 가능한 성과를 위한 설계',
    features_subheadline: '적응형 평가와 AI 피드백을 갖춘 종합 JLPT 대비 시스템.',
    feature_mock_title: '실전 모의고사',
    feature_mock_desc: '타이머, 성적 분석, 상세 문항 분석을 갖춘 100세트 JLPT 형식 테스트.',
    feature_ai_title: 'AI 피드백',
    feature_ai_desc: 'Google Gemini가 모국어로 맞춤 설명을 생성. 실수를 학습 기회로.',
    feature_srs_title: '적응형 복습 스케줄',
    feature_srs_desc: '머신러닝 기반 간격 반복으로 최적의 복습 타이밍 계산.',
    feature_lang_title: '8개 언어 지원',
    feature_lang_desc: '8개 언어로 인터페이스와 AI 설명 지원. 모국어 지원으로 이해 가속화.',
    modes_label: '체계적 학습 구조',
    modes_title: '4단계 습득 프레임워크',
    modes_subtitle: '입력 → 흡수 → 통합 → 평가. 과학적 학습 경로.',
    mode_learn_title: '입력 단계',
    mode_learn_desc: '맥락적 예문과 함께하는 이해 가능한 입력. 한자, 읽기, 의미의 다중 모드 제시.',
    mode_practice_title: '능동적 회상',
    mode_practice_desc: '듣기, 읽기, 의미, 쓰기 4가지 기술 연습.',
    mode_review_title: '간격 복습',
    mode_review_desc: '개인 망각 곡선 기반 ML 최적화 스케줄. 잊기 전에 복습.',
    mode_mock_title: '총괄 평가',
    mode_mock_desc: 'JLPT 공식 규격에 맞춘 100세트 모의고사. 예측 점수 분석.',
    levels_label: '콘텐츠 범위',
    levels_title: 'JLPT 종합 커리큘럼',
    levels_subtitle: '공식 규격 검증 완료 — 어휘, 한자, 문법, 통합 기술',
    coverage_vocab: '어휘', coverage_kanji: '한자', coverage_grammar: '문법', coverage_mock: '모의고사',
    level_beginner: '초급', level_elementary: '기초', level_intermediate: '중급', level_advanced: '고급', level_expert: '전문가',
    level_vocabulary: '어휘', level_new_kanji: '새 한자', level_grammar: '문법', level_total: '총 항목',
    level_n5_desc: '일본어 여정 시작. 히라가나, 가타카나, 기초 한자, 기본 문법 마스터.',
    level_n5_f1: '히라가나 & 가타카나 완성', level_n5_f2: '기본 문형', level_n5_f3: '자기소개 & 일상생활',
    level_n4_desc: '기초 다지기. 복잡한 대화와 간단한 글 읽기.',
    level_n4_f1: 'て형과 동사 활용', level_n4_f2: '가능형과 수동형', level_n4_f3: '짧은 글 읽기',
    level_n3_desc: '유창함으로 가는 다리. 일상 일본어 이해와 섬세한 의견 표현.',
    level_n3_f1: '복잡한 문법 패턴', level_n3_f2: '자연스러운 대화', level_n3_f3: '비즈니스 일본어 기초',
    level_n2_desc: '전문가급 일본어. 신문 읽기와 비즈니스 상황 대응.',
    level_n2_f1: '비즈니스 일본어', level_n2_f2: '학술 읽기', level_n2_f3: '복잡한 청해',
    level_n1_desc: '원어민 수준. 문학 일본어와 고급 커뮤니케이션 마스터.',
    level_n1_f1: '문학적 표현', level_n1_f2: '섬세한 커뮤니케이션', level_n1_f3: '대학 수준 텍스트',
    japan_title: '19년 데이터 + 최첨단 AI',
    japan_p1: 'Fujisan.AI는 단순한 AI 앱이 아닙니다. Google Gemini AI와 TORAIZ Inc.의 16,000+ 학생 19년 언어 교육 데이터의 결합입니다.',
    japan_p2: '우리 AI 모델은 실제 학습자 패턴으로 훈련되었습니다 — 흔한 실수, 효과적인 설명, 포기 시점. 일본어 학습자를 위해 최적화된 AI입니다.',
    japan_p3: '결과: 당신의 뇌에 적응하는 초개인화 학습, 도쿄에서 20년 가까이 검증된 방법론.',
    compare_label: '비교', compare_title: 'Fujisan.AI를 선택하는 이유', compare_subtitle: 'AI 학습이 다른 옵션과 어떻게 비교되는지 확인',
    compare_feature: '기능', compare_textbooks: '교재', compare_other: '다른 앱',
    compare_jlpt: 'JLPT 집중 커리큘럼', compare_mock: '실전 모의고사', compare_japan: '일본 제작 (도쿄)', compare_levels: '전 JLPT 레벨 (N5-N1)',
    compare_full: '완전 지원', compare_partial: '부분/제한', compare_none: '미지원',
    section_pricing: '플랜 선택',
    referral_input_title: '추천 코드가 있나요?', referral_input_hint: '7일 대신 30일 무료 체험!',
    plan_basic_monthly: '또는 $7.99/월', plan_standard_monthly: '또는 $14.99/월', plan_premium_monthly: '또는 $29.99/월',
    plan_save: '연간 17% 절약', plan_popular: '가장 인기', plan_best: '최고 가치',
    plan_basic_f1: 'JLPT N5-N3 전체 콘텐츠', plan_basic_f2: '학습/연습/테스트 모드', plan_basic_f3: '진도 추적 대시보드',
    plan_standard_f1: '기본 플랜 전체 기능 +', plan_standard_f2: 'AI 해설', plan_standard_f3: 'AI 합격 확률 예측', plan_standard_f4: '전체 모의고사',
    plan_premium_f1: '스탠다드 플랜 전체 기능 +', plan_premium_f2: 'AI 튜터 (24시간 일본어 Q&A)', plan_premium_f3: '전 JLPT 레벨 (N5-N1)', plan_premium_f4: '우선 지원',
    price_cta: '7일 무료 체험 시작', price_card_note: '체험에 카드 필요. 체험 종료 전 언제든 취소.',
    referral_title: '친구 초대하고 무료 혜택 받기!', referral_desc: '친구가 구독하면 1개월 무료',
    final_cta_title: '비효율적인 학습에 시간 낭비 그만', final_cta_sub: 'AI 최적화 학습 체험. 7일 무료 체험·카드 필요·언제든 취소',
    faq_label: '자주 묻는 질문', faq_title: '자주 묻는 질문',
    faq_q1: '기본/스탠다드/프리미엄의 차이점은?', faq_a1: '기본은 N5 콘텐츠와 AI 해설 포함. 스탠다드는 전체 모의고사 추가. 프리미엄은 AI 튜터와 전 JLPT 레벨(N5-N1) 포함.',
    faq_q2: '무료 체험 기간은?', faq_a2: '모든 플랜 7일 무료 체험. 체험 종료 전 취소하면 무료.',
    faq_q3: 'AI 튜터란?', faq_a3: 'AI 튜터(Premium 전용)로 일본어 문법, 어휘, 학습 전략 질문 가능. 즉시 맞춤 답변.',
    faq_q4: '추천 프로그램은 어떻게 작동하나요?', faq_a4: '추천 링크를 친구와 공유. 친구가 구독하면 둘 다 1개월 무료. 무제한!',
    faq_q5: 'JLPT 합격 보너스가 있나요?', faq_a5: '네! 유료 구독자가 JLPT 합격 후 증명서 제출하면 3개월 무료.',
    footer_desc: '도쿄 TORAIZ Inc.가 만든 AI 기반 일본어 학습 — 2006년부터 온라인 언어 교육 선구자.',
    footer_product: '제품', footer_features: '기능', footer_levels: '레벨', footer_pricing: '가격',
    footer_legal: '법률', footer_terms: '이용약관', footer_privacy: '개인정보',
    footer_contact: '연락처', footer_copyright: '© 2025 TORAIZ Inc. All rights reserved.', footer_made: '도쿄에서 ❤️로 제작',
    nav_features: '기능', nav_levels: '레벨', nav_pricing: '가격',
    btn_login: '로그인', btn_start: '무료 시작', btn_account: '계정', btn_logout: '로그아웃',
    demo_listen: '재생', coming_soon: '곧', coming: '출시 예정', coming_2025: '2025', level_n5_units: '50 단원',
    greeting_morning: '좋은 아침이에요',
    greeting_afternoon: '좋은 오후에요',
    greeting_evening: '좋은 저녁이에요',
    ai_recommend_start: '시작',
    ai_recommend_default: '어휘 기초부터 시작',
    ai_recommend_review: '어려웠던 항목 복습',
    ai_recommend_continue: '계속 학습',
    ai_recommend_focus: '집중하기',
    ai_recommend_today: '오늘',
    ai_recommend_about: '약',
    ai_recommend_minutes: '분',
    ai_recommend_complete: '완료',
    nav_learn: '학습',
    nav_invite: '초대',
    day_streak: '일 연속',
    // JLPT Level Info
    level_detail_title: '이 레벨 정보',
    level_detail_study_hours: '학습 시간',
    level_detail_pass_mark: '합격 점수',
    level_detail_test_time: '시험 시간',
    level_detail_start: '학습 시작',
    level_detail_reading: '읽기',
    level_detail_listening: '듣기',
    level_detail_cando: '할 수 있는 것',
    level_detail_content: 'Fujisan.AI 콘텐츠',
    level_n5_difficulty: '초급',
    level_n4_difficulty: '기초',
    level_n3_difficulty: '중급',
    level_n2_difficulty: '고급',
    level_n1_difficulty: '전문가',
    level_n5_official: '기본적인 일본어를 어느 정도 이해하는 능력.',
    level_n5_reading: '히라가나, 가타카나, 기본 한자로 쓰인 전형적인 표현과 문장을 읽고 이해합니다.',
    level_n5_listening: '일상생활과 교실에서 자주 접하는 주제의 대화를 듣고, 천천히 말하는 짧은 대화에서 필요한 정보를 얻습니다.',
    level_n5_cando_1: '자기소개와 가족 소개',
    level_n5_cando_2: '기본적인 길 안내 묻고 답하기',
    level_n5_cando_3: '식당에서 주문하기',
    level_n5_cando_4: '간단한 안내 이해하기',
    level_n4_official: '기본적인 일본어를 이해하는 능력.',
    level_n4_reading: '기본 어휘와 한자로 쓰인 익숙한 일상 주제의 글을 읽고 이해합니다.',
    level_n4_listening: '일상생활의 대화를 듣고, 천천히 말할 때 대체로 내용을 이해합니다.',
    level_n4_cando_1: '일상생활에 대한 간단한 대화하기',
    level_n4_cando_2: '짧은 공지와 표지판 읽고 이해하기',
    level_n4_cando_3: '간단한 메시지와 엽서 쓰기',
    level_n4_cando_4: '시각 보조와 함께 기본 TV 프로그램 시청',
    level_n3_official: '일상 상황에서 사용되는 일본어를 어느 정도 이해하는 능력.',
    level_n3_reading: '일상 주제에 관한 구체적인 내용의 글을 읽습니다. 신문 헤드라인 같은 요약 정보를 파악합니다. 대체 표현이 있으면 약간 어려운 글도 이해합니다.',
    level_n3_listening: '거의 자연스러운 속도로 일상 상황의 연속된 대화를 듣고, 내용과 인물 관계를 파악합니다.',
    level_n3_cando_1: '대부분의 일상 대화 이해',
    level_n3_cando_2: '신문 헤드라인과 간단한 기사 읽기',
    level_n3_cando_3: '익숙한 주제에 대해 의견 표현',
    level_n3_cando_4: '기본적인 비즈니스 커뮤니케이션 처리',
    level_n2_official: '일상 상황과 다양한 상황에서 사용되는 일본어를 어느 정도 이해하는 능력.',
    level_n2_reading: '신문·잡지 기사와 간단한 평론 등 다양한 주제의 명확한 글을 읽습니다. 일반 주제의 서술과 작자의 의도를 이해합니다.',
    level_n2_listening: '일상과 다양한 상황에서 거의 자연스러운 속도로 뉴스와 대화를 이해하고, 인물 관계와 요점을 파악합니다.',
    level_n2_cando_1: '일본어 비즈니스 환경에서 근무',
    level_n2_cando_2: '신문과 잡지를 편하게 읽기',
    level_n2_cando_3: '일본어 대학 강의 수강',
    level_n2_cando_4: '대부분의 TV 프로그램과 영화 이해',
    level_n1_official: '다양한 상황에서 사용되는 일본어를 이해하는 능력.',
    level_n1_reading: '사설과 평론 같은 논리적으로 복잡하고 추상적인 글을 읽습니다. 심도 있는 내용의 글을 읽고 작자의 의도를 종합적으로 이해합니다.',
    level_n1_listening: '다양한 장면에서 자연스러운 속도로 뉴스, 강연, 연속된 대화를 이해합니다. 인물 관계, 논리 구조, 요점을 종합적으로 이해합니다.',
    level_n1_cando_1: '학술 논문과 문학 작품 읽기',
    level_n1_cando_2: '전문적인 토론에 유창하게 참여',
    level_n1_cando_3: '미묘한 뉘앙스와 문화적 의미 이해',
    level_n1_cando_4: '번역/통역 업무 수행',
    unit_preview_title: '유닛 미리보기',
    unit_preview_vocab: '어휘',
    unit_preview_kanji: '한자',
    unit_preview_grammar: '문법',
    unit_preview_start: '유닛 시작',
    unit_preview_sample: '샘플 항목',
    units: '유닛'
  },
  vi: {
    nav_drill: 'Luyện tập', nav_mock: 'Thi thử', nav_ai: 'AI', nav_talk: 'Hội thoại',
    nav_vocab: 'Từ vựng', nav_kanji: 'Kanji', nav_new_kanji: 'Kanji mới', nav_grammar: 'Ngữ pháp',
    // Talk
    talk_title: 'Luyện hội thoại AI',
    talk_desc: 'Luyện hội thoại tiếng Nhật với AI',
    talk_unit_mode: 'Chế độ liên kết Unit',
    talk_start: 'Bắt đầu',
    talk_free_theme: 'Chủ đề tự do',
    talk_greeting: 'Giới thiệu',
    talk_restaurant: 'Nhà hàng',
    talk_shopping: 'Mua sắm',
    talk_directions: 'Hỏi đường',
    talk_travel: 'Du lịch',
    talk_free: 'Trò chuyện tự do',
    talk_unit_practice: 'Luyện với từ vựng Unit 1-{n}',
    talk_intro_want: 'Tôi muốn tự giới thiệu',
    talk_hobby_want: 'Tôi muốn nói về sở thích',
    talk_japan_question: 'Tôi có câu hỏi về Nhật Bản',
    talk_input_placeholder: 'Nhập tiếng Nhật...',
    talk_unit_desc_default: 'Luyện với từ vựng Unit',
    talk_chat_title: 'Hội thoại AI',
    talk_first_msg: 'Xin chào! Hãy trò chuyện bằng từ vựng {level}. Bạn muốn nói về gì?',
    talk_feedback: 'Phản hồi',
    talk_you: 'Bạn',
    onboarding_welcome: 'Chào mừng đến với Fujisan.AI',
    onboarding_welcome_desc: 'Gia sư JLPT AI của bạn. Làm chủ tiếng Nhật với học tập cá nhân hóa.',
    onboarding_goal: 'Mục tiêu của bạn là gì?',
    onboarding_goal_desc: 'Chọn cấp độ JLPT mục tiêu của bạn',
    onboarding_beginner: 'Sơ cấp', onboarding_elementary: 'Cơ bản',
    onboarding_intermediate: 'Trung cấp', onboarding_advanced: 'Cao cấp', onboarding_expert: 'Chuyên gia',
    onboarding_features: '3 Cách học',
    onboarding_drill: 'Luyện tập', onboarding_drill_desc: 'Luyện từ vựng, kanji & ngữ pháp',
    onboarding_mock: 'Thi thử', onboarding_mock_desc: 'Đề thi định dạng JLPT thực',
    onboarding_talk_feature: 'Hội thoại', onboarding_talk_feature_desc: 'Luyện hội thoại AI với Sakura',
    onboarding_sakura_title: 'Gặp Sakura, đối tác AI của bạn',
    onboarding_sakura_desc: 'Luyện hội thoại tiếng Nhật thực tế bất cứ lúc nào',
    onboarding_talk: 'Trò chuyện với Sakura',
    onboarding_talk_desc: 'Hội thoại tự nhiên bằng giọng nói tiếng Nhật - Sakura nói và nghe!',
    onboarding_ai_explain: 'Nút Tại sao?',
    onboarding_ai_explain_desc: 'Không hiểu? Nhấn "Tại sao?" để AI giải thích ngay',
    onboarding_ai_coach: 'Ôn tập thông minh',
    onboarding_ai_coach_desc: 'AI theo dõi tiến độ và giúp bạn cải thiện',
    onboarding_ready: 'Bạn đã sẵn sàng!',
    onboarding_ready_desc: 'Bắt đầu luyện tập, thi thử, hoặc trò chuyện với Sakura!',
    onboarding_tip: 'Mẹo:', onboarding_skip: 'Bỏ qua', onboarding_next: 'Tiếp', onboarding_start: 'Bắt đầu',
    quiz_prompt: 'Điều này có nghĩa là gì?', quiz_correct: 'Đúng', quiz_wrong: 'Sai', quiz_time: 'Thời gian', correct_answer: 'Đáp án đúng',
    quiz_review_title: 'Xem lại lỗi sai', quiz_review_btn: 'Xem lại lỗi',
    quiz_try_again: 'Thử lại', quiz_home: 'Trang chủ', quiz_continue: 'Tiếp tục', quiz_next_unit: 'Bài tiếp theo →', quiz_next: 'Tiếp →',
    quiz_listen_select: 'Nghe và chọn từ đúng',
    generating_explanation: 'Đang tạo giải thích...',
    quiz_tap_play: 'Nhấn để nghe',
    quiz_select_reading: 'Chọn cách đọc đúng',
    quiz_select_meaning: 'Chọn nghĩa đúng',
    quiz_select_kanji: 'Chọn kanji/từ đúng',
    quiz_drill_title: 'Luyện tập',
    quiz_review_mode: 'Ôn tập',
    pass_submitting: 'Đang gửi...',
    pass_submitted: 'Đã gửi!',
    pass_change_photo: 'Nhấp để thay đổi ảnh',
    trial_bonus_applied: 'Đã áp dụng thưởng dùng thử',
    mock_title: 'Thi thử', mock_mode: 'Chế độ', mock_full: 'Đầy đủ', mock_section: 'Phần',
    mock_select_set: 'Chọn bộ để bắt đầu', mock_not_attempted: 'Chưa làm',
    mock_set: 'Bộ', mock_random: '🎲 Ngẫu nhiên', mock_last_score: 'Điểm trước',
    mock_start: 'Bắt đầu thi', mock_next: 'Tiếp →', mock_prev: '← Trước',
    mock_result: 'Kết quả thi thử', mock_analyzing: 'Đang phân tích kết quả...',
    mock_try_again: 'Thử lại', mock_back: 'Quay lại thi thử', mock_practice_weak: 'Luyện điểm yếu',
    ai_title: 'Huấn luyện viên AI', ai_desc: 'Hướng dẫn hành trình học ngôn ngữ của bạn',
    ai_premium: 'Tính năng Premium',
    ai_science: 'Giải thích khoa học', ai_science_desc: 'Hiểu sâu giúp nhớ lâu hơn học vẹt',
    ai_scaffold: 'Hỗ trợ cá nhân hóa', ai_scaffold_desc: 'Hướng dẫn phù hợp với trình độ của bạn',
    ai_growth: 'Huấn luyện phát triển', ai_growth_desc: 'Biến thử thách thành cơ hội',
    ai_support: 'Hỗ trợ 24/7', ai_support_desc: 'Có thắc mắc lúc 2 giờ sáng? Hỏi ngay, trả lời liền',
    ai_send: 'Gửi', ai_placeholder: 'Hỏi về ngữ pháp, từ vựng hoặc chiến lược học...',
    ai_growth_areas: '📊 Lĩnh vực phát triển', ai_study_science: '📚 Khoa học học tập', ai_error_patterns: '🧠 Mẫu lỗi',
    settings_title: 'Cài đặt', settings_account: 'Tài khoản', settings_email: 'Email',
    settings_plan: 'Gói hiện tại', settings_not_logged: 'Chưa đăng nhập', settings_free: 'Dùng thử miễn phí',
    settings_study: 'Cài đặt học', settings_qcount: 'Số câu hỏi mỗi bài', settings_qcount_desc: 'Số mục mỗi phiên',
    settings_sound: 'Hiệu ứng âm thanh', settings_sound_desc: 'Âm thanh bài kiểm tra',
    settings_data: 'Dữ liệu', settings_reset: 'Đặt lại tiến trình', settings_reset_desc: 'Xóa tất cả dữ liệu học',
    settings_logout: 'Đăng xuất', settings_logout_desc: 'Đăng xuất khỏi tài khoản',
    settings_manage: 'Quản lý đăng ký', settings_help: 'Trợ giúp', settings_support: 'Hỗ trợ',
    sub_choose: 'Chọn gói', sub_basic: 'Cơ bản', sub_standard: 'Tiêu chuẩn', sub_premium: 'Cao cấp',
    sub_basic_f1: 'Nội dung JLPT N5-N3', sub_basic_f2: 'Học/Luyện/Ôn/Thi',
    sub_basic_f3: 'Theo dõi tiến trình', sub_basic_f4: 'Học không giới hạn',
    sub_std_f1: 'Tất cả tính năng Cơ bản', sub_std_f2: 'Thi thử đầy đủ', sub_std_f3: 'Giải thích AI',
    sub_prem_f1: 'Tất cả tính năng Tiêu chuẩn', sub_prem_f2: 'Tất cả cấp JLPT(N5-N1)',
    sub_prem_f3: 'Gia sư AI', sub_prem_f4: 'Hỗ trợ ưu tiên',
    trial_title: 'Bắt đầu dùng thử miễn phí',
    trial_desc: 'Truy cập <strong>đầy đủ</strong> tất cả cấp JLPT, Thi thử và Gia sư AI trong <strong>7 ngày miễn phí</strong>.',
    trial_f1: 'Tất cả từ vựng, kanji & ngữ pháp N5-N1', trial_f2: '20 bộ thi thử đầy đủ mỗi cấp',
    trial_f3: 'Gia sư AI giải thích mọi lỗi', trial_f4: 'Hủy bất cứ lúc nào trước khi hết thử nghiệm',
    trial_start: 'Bắt đầu 7 ngày miễn phí', trial_note: '7 ngày miễn phí • Hủy bất cứ lúc nào', trial_later: 'Để sau',
    trial_welcome: '🎉 Chào mừng! Bản dùng thử 7 ngày miễn phí gói {plan} ({billing}) đã bắt đầu. Tất cả tính năng đã được mở khóa!',
    billing_annual: 'Năm', billing_monthly: 'Tháng',
    // AI Coach
    ai_coach_title: 'Trọng tâm tuần này',
    ai_coach_loading: 'Đang phân tích tiến độ học...',
    ai_coach_details: 'Xem chi tiết',
    ai_coach_hide: 'Ẩn chi tiết',
    ai_coach_receptive: 'Khả năng hiểu (Nghe/Đọc)',
    ai_coach_productive: 'Khả năng sử dụng (Nghĩa/Viết)',
    ai_coach_recommended: 'Trọng tâm',
    ai_coach_review: 'Ôn tập',
    ai_coach_fallback_focus: 'Hãy luyện tập mỗi ngày!',
    ai_coach_fallback_reason: 'Sự kiên trì là chìa khóa để thành thạo tiếng Nhật.',
    ai_coach_fallback_encourage: 'Bạn đang tiến bộ rất tốt!',
    ai_coach_welcome_title: 'Chào mừng! Hãy bắt đầu hành trình học.',
    ai_coach_welcome_desc: 'Hoàn thành 10 câu và tôi sẽ tạo kế hoạch học tập riêng cho bạn.',
    ai_coach_progress_title: 'Khởi đầu tuyệt vời! Tiếp tục nhé.',
    ai_coach_progress_desc: 'Phân tích AI cá nhân hóa sắp hoàn thành!',
    ai_coach_intro_title: "Tôi là Huấn luyện viên AI của bạn",
    ai_coach_intro_desc: "Tôi sẽ tạo lộ trình cá nhân hóa để thành công JLPT. Hãy bắt đầu!",
    ai_coach_q_name: "Tên bạn là gì?",
    ai_coach_name_placeholder: "Nhập tên của bạn",
    ai_coach_q_exam: "Bạn dự định thi JLPT khi nào?",
    ai_coach_q_target: "Bạn muốn đỗ cấp JLPT nào?",
    ai_coach_q_level: "Trình độ tiếng Nhật hiện tại của bạn?",
    ai_coach_q_time: "Bạn có thể học bao lâu mỗi ngày?",
    ai_coach_select: "Chọn...",
    ai_coach_july: "Tháng 7/2025",
    ai_coach_december: "Tháng 12/2025",
    ai_coach_july_next: "Tháng 7/2026",
    ai_coach_undecided: "Chưa quyết định",
    ai_coach_level_beginner: "Hoàn toàn mới bắt đầu",
    ai_coach_level_hiragana: "Biết hiragana/katakana",
    ai_coach_level_n5: "Trình độ N5 (cơ bản)",
    ai_coach_level_n4: "Trình độ N4 (sơ cấp)",
    ai_coach_level_n3: "Trình độ N3 (trung cấp)",
    ai_coach_level_n2: "Trình độ N2+ (nâng cao)",
    ai_coach_time_15: "15 phút",
    ai_coach_time_30: "30 phút",
    ai_coach_time_60: "1 giờ",
    ai_coach_time_90: "1+ giờ",
    ai_coach_your_roadmap: "Lộ trình cá nhân của bạn",
    ai_coach_roadmap_suffix: " - Lộ trình",
    ai_coach_this_week: "Trọng tâm tuần này:",
    ai_coach_goal: "Mục tiêu",
    ai_coach_start_btn: "Bắt đầu!",
    ai_coach_journey_started: "Hành trình của bạn đã bắt đầu!",
    ai_coach_journey_desc: "Hoàn thành 10 câu để mở khóa phân tích chi tiết hàng tuần.",
    pass_probability: "Xác suất đỗ",
    pass_section_vocab: "Từ vựng",
    pass_section_grammar: "Ngữ pháp",
    pass_section_reading: "Đọc hiểu",
    pass_section_listening: "Nghe hiểu",
    srs_review_due: "Cần ôn tập",
    srs_urgent: "khẩn cấp",
    srs_soon: "hôm nay",
    srs_later: "tuần này",
    srs_start: "Bắt đầu ôn",
    srs_no_items: "Không có mục nào cần ôn tập!",
    habit_greeting_morning: "Chào buổi sáng",
    habit_greeting_afternoon: "Chào buổi chiều",
    habit_greeting_evening: "Chào buổi tối",
    habit_day_streak: "ngày liên tục",
    habit_min_today: "phút hôm nay",
    habit_dont_break: "đừng phá vỡ chuỗi",
    habit_streak_suffix: " ngày!",
    habit_start_study: "bắt đầu học hôm nay!",
    habit_more_minutes: "phút nữa để đạt mục tiêu!",
    habit_build_foundation: "hãy xây dựng nền tảng!",
    habit_more_questions: "câu nữa để mở khóa phân tích cá nhân.",
    habit_journey_begun: "hành trình của bạn đã bắt đầu!",
    mock_report_analyzing: '🔍 AI đang phân tích kết quả của bạn...',
    mock_report_strengths: 'Điểm mạnh',
    mock_report_weaknesses: 'Cần cải thiện',
    mock_report_next_steps: 'Kế hoạch học tập đề xuất',
    mock_report_error: 'Không thể tạo báo cáo AI. Vui lòng thử lại.',
    pass_title: 'Báo cáo thành công', pass_level: 'Cấp JLPT đã đỗ *', pass_select: 'Chọn cấp...',
    pass_score: 'Điểm của bạn (tùy chọn)', pass_name: 'Tên hiển thị *',
    pass_country: 'Quốc gia/Khu vực', pass_message: 'Tin nhắn của bạn (sẽ hiển thị trên website)',
    pass_photo: 'Ảnh chứng chỉ (tùy chọn)', pass_upload: 'Nhấp để tải lên chứng chỉ',
    pass_submit: 'Gửi báo cáo',
    upgrade: 'Nâng cấp', upgrade_premium: 'Nâng cấp lên Cao cấp',
    feedback_prompt: 'Bạn thấy Fujisan.AI thế nào?', feedback_title: 'Phản hồi của bạn', feedback_placeholder: 'Cho chúng tôi biết ý kiến của bạn...', feedback_submit: 'Gửi', feedback_thanks: 'Cảm ơn phản hồi của bạn!', feedback_rating: 'Đánh giá trải nghiệm', feedback_cta: 'Fujisan.AI thế nào? Chia sẻ ý kiến →',
    ask_more: 'Hỏi thêm →',
    feedback_desc: 'Phản hồi của bạn giúp chúng tôi cải thiện Fujisan.AI!', feedback_comment: 'Bình luận của bạn', feedback_comment_placeholder: 'Bạn thích gì? Điều gì có thể cải thiện?', feedback_nickname: 'Biệt danh (tùy chọn)', feedback_nickname_placeholder: 'Bạn muốn được gọi là gì?', feedback_permission: 'Tôi cho phép hiển thị phản hồi của tôi trên website',
    // LP - Tiếng Việt
    methodology_label: 'Mô hình mới trong học ngôn ngữ',
    methodology_headline: 'Thiết kế giảng dạy. Lý thuyết SLA. AI.',
    methodology_desc: 'Khoa học tiếp thu ngôn ngữ, được thiết kế cho kết quả đo lường được.',
    hero_badge: 'Học tập dựa trên bằng chứng',
    hero_title: 'Thành thạo tiếng Nhật. Khoa học.',
    hero_subtitle: 'Thiết kế giảng dạy kết hợp lý thuyết SLA và cá nhân hóa AI. Đỗ JLPT N5-N1 với hệ thống được thiết kế cho kết quả.',
    hero_cta: 'Bắt đầu Miễn phí',
    hero_note: '7 ngày dùng thử • Hủy bất cứ lúc nào',
    hero_stat_retention: 'Ghi nhớ', hero_stat_students: 'Học viên', hero_stat_levels: 'Phạm vi', hero_stat_experience: 'Dữ liệu nghiên cứu',
    features_label: 'Khả năng nền tảng',
    features_headline: 'Được thiết kế cho kết quả đo lường được',
    features_subheadline: 'Cơ sở hạ tầng chuẩn bị JLPT toàn diện với đánh giá thích ứng và phản hồi AI.',
    feature_mock_title: 'Đánh giá thực tế', feature_mock_desc: '100 bài thi theo định dạng JLPT với điều kiện thời gian, phân tích kết quả.',
    feature_ai_title: 'Phản hồi AI', feature_ai_desc: 'Google Gemini tạo giải thích cá nhân hóa bằng ngôn ngữ mẹ đẻ.',
    feature_srs_title: 'Lịch ôn tập thích ứng', feature_srs_desc: 'Lặp lại cách quãng được tăng cường ML tính toán thời điểm ôn tập tối ưu.',
    feature_lang_title: 'Hỗ trợ đa ngôn ngữ', feature_lang_desc: 'Giao diện và giải thích AI bằng 8 ngôn ngữ.',
    modes_label: 'Kiến trúc học tập có hệ thống', modes_title: 'Khung 4 chế độ', modes_subtitle: 'Đầu vào → Tiếp nhận → Tích hợp → Đánh giá.',
    mode_learn_title: 'Giai đoạn đầu vào', mode_learn_desc: 'Đầu vào có thể hiểu với ví dụ ngữ cảnh.',
    mode_practice_title: 'Hồi tưởng chủ động', mode_practice_desc: 'Thực hành 4 kỹ năng: Nghe, Đọc, Nghĩa, Viết.',
    mode_review_title: 'Ôn tập cách quãng', mode_review_desc: 'Lịch trình ML tối ưu dựa trên đường cong quên.',
    mode_mock_title: 'Đánh giá tổng kết', mode_mock_desc: '100 bài thi thử theo đúng tiêu chuẩn JLPT.',
    levels_label: 'Phạm vi nội dung', levels_title: 'Chương trình JLPT toàn diện', levels_subtitle: 'Nội dung đầy đủ đã xác nhận',
    coverage_vocab: 'Từ vựng', coverage_kanji: 'Kanji', coverage_grammar: 'Ngữ pháp', coverage_mock: 'Thi thử',
    level_beginner: 'Sơ cấp', level_elementary: 'Cơ bản', level_intermediate: 'Trung cấp', level_advanced: 'Cao cấp', level_expert: 'Chuyên gia',
    level_vocabulary: 'Từ vựng', level_new_kanji: 'Kanji mới', level_grammar: 'Ngữ pháp', level_total: 'Tổng mục',
    level_n5_desc: 'Bắt đầu hành trình tiếng Nhật. Thành thạo hiragana, katakana, kanji cơ bản.',
    level_n5_f1: 'Thành thạo Hiragana & Katakana', level_n5_f2: 'Mẫu câu cơ bản', level_n5_f3: 'Giới thiệu bản thân',
    level_n4_desc: 'Xây dựng nền tảng. Xử lý hội thoại phức tạp.',
    level_n4_f1: 'て-form và chia động từ', level_n4_f2: 'Thể khả năng và bị động', level_n4_f3: 'Đọc đoạn ngắn',
    level_n3_desc: 'Cầu nối đến lưu loát. Hiểu tiếng Nhật hàng ngày.',
    level_n3_f1: 'Mẫu ngữ pháp phức tạp', level_n3_f2: 'Hội thoại tự nhiên', level_n3_f3: 'Tiếng Nhật kinh doanh cơ bản',
    level_n2_desc: 'Tiếng Nhật chuyên nghiệp. Đọc báo và xử lý tình huống kinh doanh.',
    level_n2_f1: 'Tiếng Nhật kinh doanh', level_n2_f2: 'Đọc học thuật', level_n2_f3: 'Nghe phức tạp',
    level_n1_desc: 'Trình độ gần như người bản xứ. Thành thạo tiếng Nhật văn học.',
    level_n1_f1: 'Biểu đạt văn học', level_n1_f2: 'Giao tiếp tinh tế', level_n1_f3: 'Văn bản cấp đại học',
    japan_title: '19 năm dữ liệu + AI tiên tiến',
    japan_p1: 'Fujisan.AI không chỉ là ứng dụng AI khác. Đó là kết quả kết hợp Google Gemini AI với 19 năm dữ liệu giáo dục.',
    japan_p2: 'Mô hình AI được huấn luyện trên mẫu học viên thực. AI được tối ưu hóa cho người học tiếng Nhật.',
    japan_p3: 'Kết quả: Học tập siêu cá nhân hóa thích ứng với não của BẠN.',
    compare_label: 'So sánh', compare_title: 'Tại sao chọn Fujisan.AI?', compare_subtitle: 'Xem học AI so sánh với các lựa chọn khác',
    compare_feature: 'Tính năng', compare_textbooks: 'Sách giáo khoa', compare_other: 'Ứng dụng khác',
    compare_jlpt: 'Chương trình tập trung JLPT', compare_mock: 'Thi thử thực tế', compare_japan: 'Sản xuất tại Nhật', compare_levels: 'Tất cả cấp JLPT (N5-N1)',
    compare_full: 'Hỗ trợ đầy đủ', compare_partial: 'Một phần/Giới hạn', compare_none: 'Không có',
    section_pricing: 'Chọn gói',
    referral_input_title: 'Có mã giới thiệu?', referral_input_hint: 'Nhận 30 ngày dùng thử thay vì 7 ngày!',
    plan_basic_monthly: 'hoặc $7.99/tháng', plan_standard_monthly: 'hoặc $14.99/tháng', plan_premium_monthly: 'hoặc $29.99/tháng',
    plan_save: 'Tiết kiệm 17% hàng năm', plan_popular: 'Phổ biến nhất', plan_best: 'Giá trị tốt nhất',
    plan_basic_f1: 'Toàn bộ nội dung JLPT N5-N3', plan_basic_f2: 'Chế độ Học/Luyện/Thi', plan_basic_f3: 'Bảng theo dõi tiến độ',
    plan_standard_f1: 'Tất cả tính năng Cơ bản +', plan_standard_f2: 'Giải thích AI', plan_standard_f3: 'Dự đoán xác suất đỗ AI', plan_standard_f4: 'Thi thử đầy đủ',
    plan_premium_f1: 'Tất cả tính năng Tiêu chuẩn +', plan_premium_f2: 'Gia sư AI (Hỏi đáp tiếng Nhật 24/7)', plan_premium_f3: 'Tất cả cấp JLPT (N5-N1)', plan_premium_f4: 'Hỗ trợ ưu tiên',
    price_cta: 'Dùng thử 7 ngày miễn phí', price_card_note: 'Cần thẻ để dùng thử. Hủy bất cứ lúc nào.',
    referral_title: 'Mời bạn bè, nhận tháng miễn phí!', referral_desc: 'Nhận 1 tháng miễn phí cho mỗi bạn đăng ký',
    final_cta_title: 'Đừng lãng phí thời gian học không hiệu quả', final_cta_sub: 'Trải nghiệm học tập tối ưu AI. 7 ngày dùng thử·Cần thẻ·Hủy bất cứ lúc nào',
    faq_label: 'Câu hỏi thường gặp', faq_title: 'Câu hỏi thường gặp',
    faq_q1: 'Sự khác biệt giữa Cơ bản, Tiêu chuẩn và Cao cấp?', faq_a1: 'Cơ bản: nội dung N5 + giải thích AI. Tiêu chuẩn: thêm thi thử đầy đủ. Cao cấp: thêm Gia sư AI và tất cả cấp JLPT.',
    faq_q2: 'Thời gian dùng thử miễn phí?', faq_a2: 'Bạn có 7 ngày dùng thử miễn phí. Hủy trước khi hết thử và không bị tính phí.',
    faq_q3: 'Gia sư AI là gì?', faq_a3: 'Gia sư AI cho phép bạn hỏi bất kỳ câu hỏi về ngữ pháp, từ vựng tiếng Nhật.',
    faq_q4: 'Chương trình giới thiệu hoạt động thế nào?', faq_a4: 'Chia sẻ liên kết giới thiệu với bạn bè. Khi họ đăng ký, cả hai đều nhận 1 tháng miễn phí.',
    faq_q5: 'Có thưởng khi đỗ JLPT không?', faq_a5: 'Có! Người đăng ký trả phí đỗ JLPT có thể gửi chứng chỉ và nhận 3 tháng miễn phí.',
    footer_desc: 'Học tiếng Nhật với AI, được tạo tại Tokyo bởi TORAIZ Inc. — tiên phong trong giáo dục ngôn ngữ trực tuyến từ năm 2006.',
    footer_product: 'Sản phẩm', footer_features: 'Tính năng', footer_levels: 'Cấp độ', footer_pricing: 'Giá',
    footer_legal: 'Pháp lý', footer_terms: 'Điều khoản', footer_privacy: 'Quyền riêng tư',
    footer_contact: 'Liên hệ', footer_copyright: '© 2025 TORAIZ Inc.', footer_made: 'Được làm với ❤️ tại Tokyo',
    nav_features: 'Tính năng', nav_levels: 'Cấp độ', nav_pricing: 'Giá',
    btn_login: 'Đăng nhập', btn_start: 'Bắt đầu miễn phí', btn_account: 'Tài khoản', btn_logout: 'Đăng xuất',
    demo_listen: 'Phát', coming_soon: 'Sắp', coming: 'Sắp ra mắt', coming_2025: '2025', level_n5_units: '50 Bài',
    greeting_morning: 'Chào buổi sáng',
    greeting_afternoon: 'Chào buổi chiều',
    greeting_evening: 'Chào buổi tối',
    ai_recommend_start: 'Bắt đầu',
    ai_recommend_default: 'Bắt đầu với từ vựng cơ bản',
    ai_recommend_review: 'Ôn tập các mục cần cải thiện',
    ai_recommend_continue: 'Tiếp tục với',
    ai_recommend_focus: 'Tập trung vào',
    ai_recommend_today: 'hôm nay',
    ai_recommend_about: 'Khoảng',
    ai_recommend_minutes: 'phút',
    ai_recommend_complete: 'hoàn thành',
    nav_learn: 'Học',
    nav_invite: 'Mời',
    day_streak: 'ngày liên tiếp',
    // JLPT Level Info
    level_detail_title: 'Về Cấp Độ Này',
    level_detail_study_hours: 'Giờ Học',
    level_detail_pass_mark: 'Điểm Đậu',
    level_detail_test_time: 'Thời Gian Thi',
    level_detail_start: 'Bắt Đầu Học',
    level_detail_reading: 'Đọc',
    level_detail_listening: 'Nghe',
    level_detail_cando: 'Bạn Có Thể Làm Gì',
    level_detail_content: 'Nội Dung Fujisan.AI',
    level_n5_difficulty: 'Sơ cấp',
    level_n4_difficulty: 'Cơ bản',
    level_n3_difficulty: 'Trung cấp',
    level_n2_difficulty: 'Cao cấp',
    level_n1_difficulty: 'Chuyên gia',
    level_n5_official: 'Khả năng hiểu một số tiếng Nhật cơ bản.',
    level_n5_reading: 'Đọc và hiểu các biểu đạt và câu điển hình viết bằng hiragana, katakana và kanji cơ bản.',
    level_n5_listening: 'Nghe và hiểu các cuộc hội thoại về chủ đề thường gặp trong cuộc sống và lớp học, lấy thông tin cần thiết từ các cuộc hội thoại ngắn nói chậm.',
    level_n5_cando_1: 'Giới thiệu bản thân và gia đình',
    level_n5_cando_2: 'Hỏi và chỉ đường cơ bản',
    level_n5_cando_3: 'Gọi món ở nhà hàng',
    level_n5_cando_4: 'Hiểu thông báo đơn giản',
    level_n4_official: 'Khả năng hiểu tiếng Nhật cơ bản.',
    level_n4_reading: 'Đọc và hiểu các đoạn văn về chủ đề quen thuộc viết bằng từ vựng và kanji cơ bản.',
    level_n4_listening: 'Nghe và hiểu các cuộc hội thoại hàng ngày, nắm được nội dung khi nói chậm.',
    level_n4_cando_1: 'Hội thoại đơn giản về cuộc sống hàng ngày',
    level_n4_cando_2: 'Đọc và hiểu thông báo và biển báo ngắn',
    level_n4_cando_3: 'Viết tin nhắn và bưu thiếp đơn giản',
    level_n4_cando_4: 'Xem chương trình TV cơ bản với hình ảnh hỗ trợ',
    level_n3_official: 'Khả năng hiểu tiếng Nhật sử dụng trong tình huống hàng ngày ở mức độ nhất định.',
    level_n3_reading: 'Đọc tài liệu có nội dung cụ thể về chủ đề hàng ngày. Nắm được thông tin tóm tắt như tiêu đề báo. Hiểu văn bản khó hơn nếu có cách diễn đạt thay thế.',
    level_n3_listening: 'Nghe và hiểu hội thoại liền mạch trong tình huống hàng ngày ở tốc độ gần tự nhiên, nắm được nội dung và quan hệ giữa các nhân vật.',
    level_n3_cando_1: 'Hiểu hầu hết hội thoại hàng ngày',
    level_n3_cando_2: 'Đọc tiêu đề báo và bài viết đơn giản',
    level_n3_cando_3: 'Bày tỏ ý kiến về chủ đề quen thuộc',
    level_n3_cando_4: 'Xử lý giao tiếp kinh doanh cơ bản',
    level_n2_official: 'Khả năng hiểu tiếng Nhật sử dụng trong tình huống hàng ngày và các tình huống đa dạng ở mức độ nhất định.',
    level_n2_reading: 'Đọc tài liệu rõ ràng về nhiều chủ đề như bài báo và bình luận đơn giản. Hiểu nội dung và ý định của tác giả.',
    level_n2_listening: 'Hiểu tin tức và hội thoại ở tốc độ gần tự nhiên trong tình huống hàng ngày và đa dạng, nắm được quan hệ và điểm chính.',
    level_n2_cando_1: 'Làm việc trong môi trường kinh doanh Nhật',
    level_n2_cando_2: 'Đọc báo và tạp chí thoải mái',
    level_n2_cando_3: 'Tham dự bài giảng đại học bằng tiếng Nhật',
    level_n2_cando_4: 'Hiểu hầu hết chương trình TV và phim',
    level_n1_official: 'Khả năng hiểu tiếng Nhật sử dụng trong nhiều tình huống khác nhau.',
    level_n1_reading: 'Đọc văn bản logic phức tạp và trừu tượng như xã luận và phê bình. Đọc tài liệu sâu sắc và hiểu toàn diện ý định tác giả.',
    level_n1_listening: 'Hiểu tin tức, bài giảng và hội thoại liền mạch ở tốc độ tự nhiên trong nhiều tình huống. Hiểu toàn diện quan hệ, cấu trúc logic và điểm chính.',
    level_n1_cando_1: 'Đọc luận văn và tác phẩm văn học',
    level_n1_cando_2: 'Tham gia thảo luận chuyên môn lưu loát',
    level_n1_cando_3: 'Hiểu sắc thái tinh tế và ý nghĩa văn hóa',
    level_n1_cando_4: 'Làm phiên dịch/biên dịch',
    unit_preview_title: 'Xem Trước Bài',
    unit_preview_vocab: 'Từ vựng',
    unit_preview_kanji: 'Kanji',
    unit_preview_grammar: 'Ngữ pháp',
    unit_preview_start: 'Bắt Đầu Bài',
    unit_preview_sample: 'Mục mẫu',
    units: 'Bài'
  },
  id: {
    // Bahasa Indonesia - App & LP
    nav_drill: 'Latihan', nav_mock: 'Simulasi', nav_ai: 'AI', nav_talk: 'Percakapan',
    nav_vocab: 'Kosakata', nav_kanji: 'Kanji', nav_new_kanji: 'Kanji Baru', nav_grammar: 'Tata Bahasa',
    // Talk
    talk_title: 'Latihan Percakapan AI',
    talk_desc: 'Latihan percakapan bahasa Jepang dengan AI',
    talk_unit_mode: 'Mode Unit Terkait',
    talk_start: 'Mulai',
    talk_free_theme: 'Tema Bebas',
    talk_greeting: 'Perkenalan',
    talk_restaurant: 'Restoran',
    talk_shopping: 'Belanja',
    talk_directions: 'Tanya Arah',
    talk_travel: 'Wisata',
    talk_free: 'Obrolan Bebas',
    talk_unit_practice: 'Latihan dengan kosakata Unit 1-{n}',
    talk_intro_want: 'Saya ingin memperkenalkan diri',
    talk_hobby_want: 'Saya ingin bicara tentang hobi',
    talk_japan_question: 'Saya punya pertanyaan tentang Jepang',
    talk_input_placeholder: 'Ketik dalam bahasa Jepang...',
    talk_unit_desc_default: 'Latihan dengan kosakata Unit',
    talk_chat_title: 'Percakapan AI',
    talk_first_msg: 'Halo! Mari bicara menggunakan kosakata {level}. Anda ingin bicara tentang apa?',
    talk_feedback: 'Umpan balik',
    talk_you: 'Anda',
    onboarding_welcome: 'Selamat datang di Fujisan.AI',
    onboarding_welcome_desc: 'Tutor JLPT AI Anda. Kuasai bahasa Jepang dengan pembelajaran personal.',
    onboarding_goal: 'Apa tujuan Anda?',
    onboarding_goal_desc: 'Pilih level JLPT target Anda',
    onboarding_beginner: 'Pemula', onboarding_elementary: 'Dasar',
    onboarding_intermediate: 'Menengah', onboarding_advanced: 'Lanjutan', onboarding_expert: 'Ahli',
    onboarding_features: '3 Cara Belajar',
    onboarding_drill: 'Latihan', onboarding_drill_desc: 'Latihan kosakata, kanji & tata bahasa',
    onboarding_mock: 'Simulasi', onboarding_mock_desc: 'Soal latihan format JLPT asli',
    onboarding_talk_feature: 'Percakapan', onboarding_talk_feature_desc: 'Latihan percakapan AI dengan Sakura',
    onboarding_sakura_title: 'Temui Sakura, partner AI Anda',
    onboarding_sakura_desc: 'Latihan percakapan Jepang nyata kapan saja',
    onboarding_talk: 'Ngobrol dengan Sakura',
    onboarding_talk_desc: 'Percakapan suara alami dalam bahasa Jepang - Sakura berbicara dan mendengar!',
    onboarding_ai_explain: 'Tombol Kenapa?',
    onboarding_ai_explain_desc: 'Tidak mengerti? Ketuk "Kenapa?" untuk penjelasan AI',
    onboarding_ai_coach: 'Review Pintar',
    onboarding_ai_coach_desc: 'AI melacak kemajuan dan membantu Anda meningkat',
    onboarding_ready: 'Anda siap!',
    onboarding_ready_desc: 'Mulai latihan, simulasi, atau ngobrol dengan Sakura!',
    onboarding_tip: 'Tips:', onboarding_skip: 'Lewati', onboarding_next: 'Lanjut', onboarding_start: 'Mulai',
    quiz_prompt: 'Apa artinya ini?', quiz_correct: 'Benar', quiz_wrong: 'Salah', quiz_time: 'Waktu', correct_answer: 'Jawaban benar',
    quiz_review_title: 'Review Kesalahan', quiz_review_btn: 'Review Kesalahan',
    quiz_try_again: 'Coba lagi', quiz_home: 'Beranda', quiz_continue: 'Lanjut', quiz_next_unit: 'Unit Selanjutnya →', quiz_next: 'Lanjut →',
    quiz_listen_select: 'Dengarkan dan pilih kata yang benar',
    generating_explanation: 'Membuat penjelasan...',
    quiz_tap_play: 'Ketuk untuk mendengarkan',
    quiz_select_reading: 'Pilih bacaan yang benar',
    quiz_select_meaning: 'Pilih arti yang benar',
    quiz_select_kanji: 'Pilih kanji/kata yang benar',
    quiz_drill_title: 'Latihan',
    quiz_review_mode: 'Ulasan',
    pass_submitting: 'Mengirim...',
    pass_submitted: 'Terkirim!',
    pass_change_photo: 'Klik untuk ganti foto',
    trial_bonus_applied: 'Bonus uji coba diterapkan',
    mock_title: 'Simulasi', mock_mode: 'Mode', mock_full: 'Lengkap', mock_section: 'Bagian',
    mock_select_set: 'Pilih set untuk mulai', mock_not_attempted: 'Belum dicoba',
    mock_set: 'Set', mock_random: '🎲 Acak', mock_last_score: 'Skor terakhir',
    mock_start: 'Mulai Tes', mock_next: 'Lanjut →', mock_prev: '← Sebelum',
    mock_result: 'Hasil Simulasi', mock_analyzing: 'Menganalisis hasil...',
    mock_try_again: 'Coba lagi', mock_back: 'Kembali ke Simulasi', mock_practice_weak: 'Latih Kelemahan',
    ai_title: 'Pelatih AI', ai_desc: 'Membimbing perjalanan belajar bahasa Anda',
    ai_premium: 'Fitur Premium',
    ai_science: 'Penjelasan Ilmiah', ai_science_desc: 'Pemahaman membangun memori lebih kuat',
    ai_scaffold: 'Dukungan Personal', ai_scaffold_desc: 'Bimbingan disesuaikan dengan level Anda',
    ai_growth: 'Pelatihan Pertumbuhan', ai_growth_desc: 'Ubah tantangan menjadi peluang',
    ai_support: 'Dukungan 24/7', ai_support_desc: 'Ada pertanyaan jam 2 pagi? Pelatih selalu di sini',
    ai_send: 'Kirim', ai_placeholder: 'Tanya tentang tata bahasa, kosakata, atau strategi belajar...',
    ai_growth_areas: '📊 Area Pertumbuhan', ai_study_science: '📚 Ilmu Belajar', ai_error_patterns: '🧠 Pola Kesalahan',
    settings_title: 'Pengaturan', settings_account: 'Akun', settings_email: 'Email',
    settings_plan: 'Paket Saat Ini', settings_not_logged: 'Belum login', settings_free: 'Uji Coba Gratis',
    settings_study: 'Pengaturan Belajar', settings_qcount: 'Pertanyaan per Unit', settings_qcount_desc: 'Item per sesi',
    settings_sound: 'Efek Suara', settings_sound_desc: 'Suara kuis',
    settings_data: 'Data', settings_reset: 'Reset Kemajuan', settings_reset_desc: 'Hapus semua data belajar',
    settings_logout: 'Keluar', settings_logout_desc: 'Keluar dari akun',
    settings_manage: 'Kelola Langganan', settings_help: 'Bantuan', settings_support: 'Dukungan',
    sub_choose: 'Pilih Paket', sub_basic: 'Dasar', sub_standard: 'Standar', sub_premium: 'Premium',
    sub_basic_f1: 'Konten JLPT N5-N3', sub_basic_f2: 'Belajar/Latihan/Review/Tes',
    sub_basic_f3: 'Pelacakan kemajuan', sub_basic_f4: 'Belajar tanpa batas',
    sub_std_f1: 'Semua fitur Dasar', sub_std_f2: 'Simulasi lengkap', sub_std_f3: 'Penjelasan AI',
    sub_prem_f1: 'Semua fitur Standar', sub_prem_f2: 'Semua level JLPT(N5-N1)',
    sub_prem_f3: 'Tutor AI', sub_prem_f4: 'Dukungan prioritas',
    trial_title: 'Mulai Uji Coba Gratis',
    trial_desc: 'Akses <strong>penuh</strong> ke semua level JLPT, Simulasi, dan Tutor AI selama <strong>7 hari gratis</strong>.',
    trial_f1: 'Semua kosakata, kanji & tata bahasa N5-N1', trial_f2: '20 set simulasi lengkap per level',
    trial_f3: 'Tutor AI menjelaskan setiap kesalahan', trial_f4: 'Batalkan kapan saja sebelum uji coba berakhir',
    trial_start: 'Mulai 7 Hari Gratis', trial_note: '7 hari gratis • Batalkan kapan saja', trial_later: 'Nanti',
    trial_welcome: '🎉 Selamat datang! Uji coba 7 hari gratis paket {plan} ({billing}) telah dimulai. Semua fitur terbuka!',
    billing_annual: 'Tahunan', billing_monthly: 'Bulanan',
    // AI Coach
    ai_coach_title: 'Fokus Minggu Ini',
    ai_coach_loading: 'Menganalisis kemajuan belajar...',
    ai_coach_details: 'Lihat Detail',
    ai_coach_hide: 'Sembunyikan Detail',
    ai_coach_receptive: 'Pemahaman (Dengar/Baca)',
    ai_coach_productive: 'Penggunaan (Arti/Tulis)',
    ai_coach_recommended: 'Fokus',
    ai_coach_review: 'Ulang',
    ai_coach_fallback_focus: 'Terus berlatih setiap hari!',
    ai_coach_fallback_reason: 'Konsistensi adalah kunci menguasai bahasa Jepang.',
    ai_coach_fallback_encourage: 'Anda membuat kemajuan yang bagus!',
    ai_coach_welcome_title: 'Selamat datang! Mari mulai perjalanan belajar.',
    ai_coach_welcome_desc: 'Selesaikan 10 soal dan saya akan membuat rencana belajar khusus untuk Anda.',
    ai_coach_progress_title: 'Awal yang bagus! Terus semangat.',
    ai_coach_progress_desc: 'Analisis AI personal Anda hampir siap!',
    ai_coach_intro_title: "Saya Pelatih AI Anda",
    ai_coach_intro_desc: "Saya akan membuat peta jalan personal untuk sukses JLPT. Mari mulai!",
    ai_coach_q_name: "Siapa nama Anda?",
    ai_coach_name_placeholder: "Masukkan nama Anda",
    ai_coach_q_exam: "Kapan Anda berencana mengikuti JLPT?",
    ai_coach_q_target: "Level JLPT apa yang ingin Anda lulus?",
    ai_coach_q_level: "Bagaimana level bahasa Jepang Anda saat ini?",
    ai_coach_q_time: "Berapa lama Anda bisa belajar setiap hari?",
    ai_coach_select: "Pilih...",
    ai_coach_july: "Juli 2025",
    ai_coach_december: "Desember 2025",
    ai_coach_july_next: "Juli 2026",
    ai_coach_undecided: "Belum memutuskan",
    ai_coach_level_beginner: "Pemula total",
    ai_coach_level_hiragana: "Bisa hiragana/katakana",
    ai_coach_level_n5: "Level N5 (dasar)",
    ai_coach_level_n4: "Level N4 (pemula)",
    ai_coach_level_n3: "Level N3 (menengah)",
    ai_coach_level_n2: "Level N2+ (mahir)",
    ai_coach_time_15: "15 menit",
    ai_coach_time_30: "30 menit",
    ai_coach_time_60: "1 jam",
    ai_coach_time_90: "1+ jam",
    ai_coach_your_roadmap: "Peta Jalan Personal Anda",
    ai_coach_roadmap_suffix: " - Peta Jalan",
    ai_coach_this_week: "Fokus minggu ini:",
    ai_coach_goal: "Tujuan Anda",
    ai_coach_start_btn: "Mulai!",
    ai_coach_journey_started: "Perjalanan Anda telah dimulai!",
    ai_coach_journey_desc: "Selesaikan 10 soal untuk membuka analisis mingguan detail.",
    pass_probability: "Probabilitas Lulus",
    pass_section_vocab: "Kosakata",
    pass_section_grammar: "Tata Bahasa",
    pass_section_reading: "Membaca",
    pass_section_listening: "Mendengar",
    srs_review_due: "Perlu Review",
    srs_urgent: "mendesak",
    srs_soon: "hari ini",
    srs_later: "minggu ini",
    srs_start: "Mulai Review",
    srs_no_items: "Tidak ada item untuk direview!",
    habit_greeting_morning: "Selamat pagi",
    habit_greeting_afternoon: "Selamat siang",
    habit_greeting_evening: "Selamat malam",
    habit_day_streak: "hari berturut-turut",
    habit_min_today: "menit hari ini",
    habit_dont_break: "jangan putus streak",
    habit_streak_suffix: " hari!",
    habit_start_study: "mulai belajar hari ini!",
    habit_more_minutes: "menit lagi untuk capai target!",
    habit_build_foundation: "mari bangun fondasi!",
    habit_more_questions: "soal lagi untuk buka analisis personal.",
    habit_journey_begun: "perjalanan Anda telah dimulai!",
    mock_report_analyzing: '🔍 AI sedang menganalisis hasil Anda...',
    mock_report_strengths: 'Kekuatan', mock_report_weaknesses: 'Perlu Ditingkatkan', mock_report_next_steps: 'Rencana Belajar',
    mock_report_error: 'Tidak dapat membuat laporan AI. Silakan coba lagi.',
    pass_title: 'Laporkan Keberhasilan', pass_level: 'Level JLPT Lulus *', pass_select: 'Pilih level...',
    pass_score: 'Skor Anda (opsional)', pass_name: 'Nama Tampilan *',
    pass_country: 'Negara/Wilayah', pass_message: 'Pesan Anda (akan ditampilkan di website)',
    pass_photo: 'Foto Sertifikat (opsional)', pass_upload: 'Klik untuk upload sertifikat',
    pass_submit: 'Kirim Laporan',
    upgrade: 'Tingkatkan', upgrade_premium: 'Upgrade ke Premium',
    feedback_prompt: 'Bagaimana pendapat Anda tentang Fujisan.AI?', feedback_title: 'Masukan Anda', feedback_placeholder: 'Beritahu kami pendapat Anda...', feedback_submit: 'Kirim', feedback_thanks: 'Terima kasih atas masukan Anda!', feedback_rating: 'Nilai pengalaman Anda', feedback_cta: 'Bagaimana Fujisan.AI? Bagikan pendapat Anda →',
    ask_more: 'Tanya lagi →',
    feedback_desc: 'Masukan Anda membantu kami meningkatkan Fujisan.AI!', feedback_comment: 'Komentar Anda', feedback_comment_placeholder: 'Apa yang Anda suka? Apa yang bisa diperbaiki?', feedback_nickname: 'Nama panggilan (opsional)', feedback_nickname_placeholder: 'Bagaimana kami harus memanggil Anda?', feedback_permission: 'Saya mengizinkan masukan saya ditampilkan di website',
    // LP - Bahasa Indonesia
    methodology_label: 'Paradigma Baru dalam Pembelajaran Bahasa',
    methodology_headline: 'Desain Instruksional. Teori SLA. AI.',
    methodology_desc: 'Ilmu akuisisi bahasa, dirancang untuk hasil terukur.',
    hero_badge: 'Pembelajaran Berbasis Bukti',
    hero_title: 'Kuasai Bahasa Jepang. Secara Ilmiah.',
    hero_subtitle: 'Desain Instruksional bertemu teori SLA dan personalisasi AI. Lulus JLPT N5-N1 dengan sistem untuk hasil.',
    hero_cta: 'Mulai Gratis',
    hero_note: 'Uji coba 7 hari • Batalkan kapan saja',
    hero_stat_retention: 'Retensi', hero_stat_students: 'Pelajar', hero_stat_levels: 'Cakupan', hero_stat_experience: 'Data Riset',
    features_label: 'Kemampuan Platform', features_headline: 'Dirancang untuk Hasil Terukur',
    features_subheadline: 'Infrastruktur persiapan JLPT komprehensif dengan penilaian adaptif dan umpan balik AI.',
    feature_mock_title: 'Penilaian Autentik', feature_mock_desc: '100 tes format JLPT dengan kondisi waktu dan analisis.',
    feature_ai_title: 'Umpan Balik AI', feature_ai_desc: 'Google Gemini menghasilkan penjelasan personal.',
    feature_srs_title: 'Jadwal Review Adaptif', feature_srs_desc: 'Pengulangan berjarak ML menghitung waktu review optimal.',
    feature_lang_title: 'Dukungan 8 Bahasa', feature_lang_desc: 'Antarmuka dan penjelasan AI dalam 8 bahasa.',
    modes_label: 'Arsitektur Pembelajaran Sistematis', modes_title: 'Kerangka 4 Mode', modes_subtitle: 'Input → Penyerapan → Integrasi → Penilaian.',
    mode_learn_title: 'Fase Input', mode_learn_desc: 'Input yang dapat dipahami dengan contoh kontekstual.',
    mode_practice_title: 'Recall Aktif', mode_practice_desc: 'Latihan 4 keterampilan: Mendengar, Membaca, Makna, Menulis.',
    mode_review_title: 'Review Berjarak', mode_review_desc: 'Jadwal optimal ML berdasarkan kurva lupa.',
    mode_mock_title: 'Penilaian Sumatif', mode_mock_desc: '100 simulasi sesuai spesifikasi JLPT resmi.',
    levels_label: 'Cakupan Konten', levels_title: 'Kurikulum JLPT Komprehensif', levels_subtitle: 'Cakupan lengkap yang divalidasi',
    coverage_vocab: 'Kosakata', coverage_kanji: 'Kanji', coverage_grammar: 'Tata Bahasa', coverage_mock: 'Simulasi',
    level_beginner: 'Pemula', level_elementary: 'Dasar', level_intermediate: 'Menengah', level_advanced: 'Lanjutan', level_expert: 'Ahli',
    level_vocabulary: 'Kosakata', level_new_kanji: 'Kanji Baru', level_grammar: 'Tata Bahasa', level_total: 'Total Item',
    level_n5_desc: 'Mulai perjalanan bahasa Jepang. Kuasai hiragana, katakana, kanji dasar.',
    level_n5_f1: 'Penguasaan Hiragana & Katakana', level_n5_f2: 'Pola kalimat dasar', level_n5_f3: 'Perkenalan diri',
    level_n4_desc: 'Bangun fondasi. Tangani percakapan kompleks.',
    level_n4_f1: 'て-form dan konjugasi', level_n4_f2: 'Bentuk potensial dan pasif', level_n4_f3: 'Membaca paragraf pendek',
    level_n3_desc: 'Jembatan menuju kefasihan. Pahami bahasa Jepang sehari-hari.',
    level_n3_f1: 'Pola tata bahasa kompleks', level_n3_f2: 'Percakapan alami', level_n3_f3: 'Dasar bahasa Jepang bisnis',
    level_n2_desc: 'Bahasa Jepang profesional. Baca koran dan tangani situasi bisnis.',
    level_n2_f1: 'Bahasa Jepang bisnis', level_n2_f2: 'Membaca akademik', level_n2_f3: 'Mendengar kompleks',
    level_n1_desc: 'Kemahiran mendekati penutur asli. Kuasai bahasa Jepang sastra.',
    level_n1_f1: 'Ekspresi sastra', level_n1_f2: 'Komunikasi bernuansa', level_n1_f3: 'Teks tingkat universitas',
    japan_title: '19 Tahun Data + AI Mutakhir',
    japan_p1: 'Fujisan.AI bukan sekadar aplikasi AI. Ini hasil penggabungan Google Gemini AI dengan 19 tahun data pendidikan.',
    japan_p2: 'Model AI kami dilatih pada pola pelajar nyata. AI yang dioptimalkan untuk pelajar bahasa Jepang.',
    japan_p3: 'Hasilnya: pembelajaran sangat personal yang beradaptasi dengan otak ANDA.',
    compare_label: 'Perbandingan', compare_title: 'Mengapa Pilih Fujisan.AI?', compare_subtitle: 'Lihat bagaimana pembelajaran AI kami dibandingkan',
    compare_feature: 'Fitur', compare_textbooks: 'Buku Teks', compare_other: 'Aplikasi Lain',
    compare_jlpt: 'Kurikulum Fokus JLPT', compare_mock: 'Simulasi Autentik', compare_japan: 'Dibuat di Jepang', compare_levels: 'Semua Level JLPT',
    compare_full: 'Dukungan penuh', compare_partial: 'Sebagian/Terbatas', compare_none: 'Tidak tersedia',
    section_pricing: 'Pilih Paket',
    referral_input_title: 'Punya kode referral?', referral_input_hint: 'Dapatkan uji coba 30 hari!',
    plan_basic_monthly: 'atau $7.99/bulan', plan_standard_monthly: 'atau $14.99/bulan', plan_premium_monthly: 'atau $29.99/bulan',
    plan_save: 'Hemat 17% tahunan', plan_popular: 'Paling Populer', plan_best: 'Nilai Terbaik',
    plan_basic_f1: 'Semua konten JLPT N5-N3', plan_basic_f2: 'Mode Belajar/Latihan/Tes', plan_basic_f3: 'Dasbor pelacakan kemajuan',
    plan_standard_f1: 'Semua fitur Dasar +', plan_standard_f2: 'Penjelasan AI', plan_standard_f3: 'Prediksi probabilitas lulus AI', plan_standard_f4: 'Simulasi lengkap',
    plan_premium_f1: 'Semua fitur Standar +', plan_premium_f2: 'Tutor AI (Tanya Jawab 24/7)', plan_premium_f3: 'Semua level JLPT (N5-N1)', plan_premium_f4: 'Dukungan prioritas',
    price_cta: 'Mulai 7 Hari Gratis', price_card_note: 'Kartu diperlukan. Batalkan kapan saja.',
    referral_title: 'Undang Teman, Dapatkan Bulan Gratis!', referral_desc: 'Dapatkan 1 bulan gratis untuk setiap teman',
    final_cta_title: 'Berhenti Buang Waktu Belajar Tidak Efisien', final_cta_sub: 'Rasakan pembelajaran AI. 7 hari uji coba·Kartu diperlukan·Batalkan kapan saja',
    faq_label: 'FAQ', faq_title: 'Pertanyaan Umum',
    faq_q1: 'Apa beda paket Dasar, Standar, Premium?', faq_a1: 'Dasar: konten N5 + penjelasan AI. Standar: + simulasi lengkap. Premium: + Tutor AI dan semua level JLPT.',
    faq_q2: 'Berapa lama uji coba?', faq_a2: '7 hari gratis. Batalkan sebelum berakhir dan tidak dikenakan biaya.',
    faq_q3: 'Apa itu Tutor AI?', faq_a3: 'Tanya apa saja tentang tata bahasa, kosakata Jepang. Jawaban instan dan personal.',
    faq_q4: 'Bagaimana program rujukan?', faq_a4: 'Bagikan tautan rujukan. Teman berlangganan, keduanya dapat 1 bulan gratis.',
    faq_q5: 'Ada bonus lulus JLPT?', faq_a5: 'Ya! Kirim sertifikat lulus, dapat 3 bulan gratis.',
    footer_desc: 'Pembelajaran bahasa Jepang berbasis AI, dibuat di Tokyo oleh TORAIZ Inc. — pelopor pendidikan bahasa online sejak 2006.',
    footer_product: 'Produk', footer_features: 'Fitur', footer_levels: 'Level', footer_pricing: 'Harga',
    footer_legal: 'Legal', footer_terms: 'Syarat', footer_privacy: 'Privasi',
    footer_contact: 'Kontak', footer_copyright: '© 2025 TORAIZ Inc.', footer_made: 'Dibuat dengan ❤️ di Tokyo',
    nav_features: 'Fitur', nav_levels: 'Level', nav_pricing: 'Harga',
    btn_login: 'Masuk', btn_start: 'Mulai Gratis', btn_account: 'Akun', btn_logout: 'Keluar',
    demo_listen: 'Putar', coming_soon: 'Segera', coming: 'Segera', coming_2025: '2025', level_n5_units: '50 Unit',
    greeting_morning: 'Selamat pagi',
    greeting_afternoon: 'Selamat siang',
    greeting_evening: 'Selamat malam',
    ai_recommend_start: 'Mulai',
    ai_recommend_default: 'Mulai dengan dasar kosakata',
    ai_recommend_review: 'Ulang item yang perlu diperbaiki',
    ai_recommend_continue: 'Lanjutkan dengan',
    ai_recommend_focus: 'Fokus pada',
    ai_recommend_today: 'hari ini',
    ai_recommend_about: 'Sekitar',
    ai_recommend_minutes: 'menit',
    ai_recommend_complete: 'selesai',
    nav_learn: 'Belajar',
    nav_invite: 'Undang',
    day_streak: 'hari berturut',
    // JLPT Level Info
    level_detail_title: 'Tentang Level Ini',
    level_detail_study_hours: 'Jam Belajar',
    level_detail_pass_mark: 'Nilai Lulus',
    level_detail_test_time: 'Durasi Ujian',
    level_detail_start: 'Mulai Belajar',
    level_detail_reading: 'Membaca',
    level_detail_listening: 'Mendengar',
    level_detail_cando: 'Yang Bisa Kamu Lakukan',
    level_detail_content: 'Konten Fujisan.AI',
    level_n5_difficulty: 'Pemula',
    level_n4_difficulty: 'Dasar',
    level_n3_difficulty: 'Menengah',
    level_n2_difficulty: 'Lanjutan',
    level_n1_difficulty: 'Ahli',
    level_n5_official: 'Kemampuan memahami beberapa bahasa Jepang dasar.',
    level_n5_reading: 'Membaca dan memahami ekspresi dan kalimat khas yang ditulis dalam hiragana, katakana, dan kanji dasar.',
    level_n5_listening: 'Mendengarkan dan memahami percakapan tentang topik yang sering ditemui dalam kehidupan sehari-hari dan situasi kelas, mengambil informasi yang diperlukan dari percakapan pendek yang diucapkan perlahan.',
    level_n5_cando_1: 'Memperkenalkan diri dan keluarga',
    level_n5_cando_2: 'Menanyakan dan memberikan petunjuk arah dasar',
    level_n5_cando_3: 'Memesan makanan di restoran',
    level_n5_cando_4: 'Memahami pengumuman sederhana',
    level_n4_official: 'Kemampuan memahami bahasa Jepang dasar.',
    level_n4_reading: 'Membaca dan memahami teks tentang topik sehari-hari yang akrab dengan kosakata dan kanji dasar.',
    level_n4_listening: 'Mendengarkan dan memahami percakapan dalam kehidupan sehari-hari, umumnya mengikuti isinya saat diucapkan perlahan.',
    level_n4_cando_1: 'Melakukan percakapan sederhana tentang kehidupan sehari-hari',
    level_n4_cando_2: 'Membaca dan memahami pemberitahuan dan tanda pendek',
    level_n4_cando_3: 'Menulis pesan dan kartu pos sederhana',
    level_n4_cando_4: 'Mengikuti program TV dasar dengan bantuan visual',
    level_n3_official: 'Kemampuan memahami bahasa Jepang yang digunakan dalam situasi sehari-hari sampai tingkat tertentu.',
    level_n3_reading: 'Membaca materi dengan konten spesifik tentang topik sehari-hari. Menangkap informasi ringkasan seperti headline surat kabar. Memahami tulisan yang sedikit sulit jika ada frasa alternatif.',
    level_n3_listening: 'Mendengarkan dan memahami percakapan koheren dalam situasi sehari-hari dengan kecepatan mendekati alami, mengikuti isi dan memahami hubungan antar orang.',
    level_n3_cando_1: 'Memahami sebagian besar percakapan sehari-hari',
    level_n3_cando_2: 'Membaca headline surat kabar dan artikel sederhana',
    level_n3_cando_3: 'Mengekspresikan pendapat tentang topik yang akrab',
    level_n3_cando_4: 'Menangani komunikasi bisnis dasar',
    level_n2_official: 'Kemampuan memahami bahasa Jepang yang digunakan dalam situasi sehari-hari dan berbagai keadaan sampai tingkat tertentu.',
    level_n2_reading: 'Membaca materi yang ditulis dengan jelas tentang berbagai topik seperti artikel koran/majalah dan kritik sederhana. Mengikuti narasi dan memahami maksud penulis.',
    level_n2_listening: 'Memahami laporan berita dan percakapan dengan kecepatan mendekati alami dalam situasi sehari-hari dan berbagai setting, memahami hubungan dan poin penting.',
    level_n2_cando_1: 'Bekerja di lingkungan bisnis Jepang',
    level_n2_cando_2: 'Membaca koran dan majalah dengan nyaman',
    level_n2_cando_3: 'Menghadiri kuliah universitas dalam bahasa Jepang',
    level_n2_cando_4: 'Memahami sebagian besar program TV dan film',
    level_n1_official: 'Kemampuan memahami bahasa Jepang yang digunakan dalam berbagai keadaan.',
    level_n1_reading: 'Membaca tulisan dengan kompleksitas logis dan abstrak seperti editorial dan kritik. Membaca materi mendalam dan memahami maksud penulis secara komprehensif.',
    level_n1_listening: 'Memahami laporan berita, ceramah, dan percakapan koheren dengan kecepatan alami dalam berbagai setting. Memahami hubungan, struktur logis, dan poin penting secara komprehensif.',
    level_n1_cando_1: 'Membaca makalah akademik dan karya sastra',
    level_n1_cando_2: 'Berpartisipasi dalam diskusi profesional dengan lancar',
    level_n1_cando_3: 'Memahami nuansa halus dan referensi budaya',
    level_n1_cando_4: 'Bekerja sebagai penerjemah/interpreter',
    unit_preview_title: 'Pratinjau Unit',
    unit_preview_vocab: 'Kosakata',
    unit_preview_kanji: 'Kanji',
    unit_preview_grammar: 'Tata Bahasa',
    unit_preview_start: 'Mulai Unit',
    unit_preview_sample: 'Item contoh',
    units: 'Unit'
  },
  es: {
    nav_drill: 'Práctica', nav_mock: 'Simulacro', nav_ai: 'IA', nav_talk: 'Hablar',
    nav_vocab: 'Vocabulario', nav_kanji: 'Kanji', nav_new_kanji: 'Kanji Nuevo', nav_grammar: 'Gramática',
    // Talk
    talk_title: 'Práctica de Conversación IA',
    talk_desc: 'Practica conversación en japonés con IA',
    talk_unit_mode: 'Modo Unidad Vinculada',
    talk_start: 'Iniciar',
    talk_free_theme: 'Tema Libre',
    talk_greeting: 'Presentación',
    talk_restaurant: 'Restaurante',
    talk_shopping: 'Compras',
    talk_directions: 'Direcciones',
    talk_travel: 'Viaje',
    talk_free: 'Charla Libre',
    talk_unit_practice: 'Practica con vocabulario de Unit 1-{n}',
    talk_intro_want: 'Quiero presentarme',
    talk_hobby_want: 'Quiero hablar de pasatiempos',
    talk_japan_question: 'Tengo preguntas sobre Japón',
    talk_input_placeholder: 'Escribe en japonés...',
    talk_unit_desc_default: 'Practica con vocabulario de Unit',
    talk_chat_title: 'Conversación IA',
    talk_first_msg: '¡Hola! Hablemos usando vocabulario de {level}. ¿De qué quieres hablar?',
    talk_feedback: 'Comentarios',
    talk_you: 'Tú',
    onboarding_welcome: 'Bienvenido a Fujisan.AI',
    onboarding_welcome_desc: 'Tu tutor JLPT con IA. Domina el japonés con aprendizaje personalizado.',
    onboarding_goal: '¿Cuál es tu objetivo?', onboarding_goal_desc: 'Selecciona tu nivel JLPT objetivo',
    onboarding_beginner: 'Principiante', onboarding_elementary: 'Elemental',
    onboarding_intermediate: 'Intermedio', onboarding_advanced: 'Avanzado', onboarding_expert: 'Experto',
    onboarding_features: '3 Formas de Aprender',
    onboarding_drill: 'Práctica', onboarding_drill_desc: 'Vocabulario, kanji y gramática',
    onboarding_mock: 'Simulacro', onboarding_mock_desc: 'Exámenes formato JLPT real',
    onboarding_talk_feature: 'Conversar', onboarding_talk_feature_desc: 'Practica conversación IA con Sakura',
    onboarding_sakura_title: 'Conoce a Sakura, tu compañera IA',
    onboarding_sakura_desc: 'Practica conversaciones reales en japonés cuando quieras',
    onboarding_talk: 'Habla con Sakura',
    onboarding_talk_desc: 'Conversaciones de voz naturales en japonés - ¡Sakura habla y escucha!',
    onboarding_ai_explain: 'Botón ¿Por qué?', onboarding_ai_explain_desc: '¿No entiendes? Toca "¿Por qué?" para explicación IA',
    onboarding_ai_coach: 'Repaso Inteligente', onboarding_ai_coach_desc: 'La IA rastrea tu progreso y te ayuda a mejorar',
    onboarding_ready: '¡Estás listo!', onboarding_ready_desc: '¡Comienza a practicar, haz simulacros o chatea con Sakura!',
    onboarding_tip: 'Consejo:', onboarding_skip: 'Saltar', onboarding_next: 'Siguiente', onboarding_start: 'Empezar',
    quiz_prompt: '¿Qué significa esto?', quiz_correct: 'Correcto', quiz_wrong: 'Incorrecto', quiz_time: 'Tiempo', correct_answer: 'Respuesta correcta',
    quiz_review_title: 'Revisa tus Errores', quiz_review_btn: 'Revisar Errores',
    quiz_try_again: 'Intentar de Nuevo', quiz_home: 'Inicio', quiz_continue: 'Continuar', quiz_next_unit: 'Siguiente Unidad →', quiz_next: 'Siguiente →',
    quiz_listen_select: 'Escucha y selecciona la palabra correcta', quiz_tap_play: 'Toca reproducir',
    generating_explanation: 'Generando explicación...',
    quiz_select_reading: 'Selecciona la lectura correcta', quiz_select_meaning: 'Selecciona el significado correcto',
    quiz_select_kanji: 'Selecciona el kanji correcto', quiz_drill_title: 'Práctica', quiz_review_mode: 'Repaso',
    pass_submitting: 'Enviando...', pass_submitted: '¡Enviado!', pass_change_photo: 'Cambiar foto',
    trial_bonus_applied: 'Bonificación aplicada',
    mock_title: 'Simulacro', mock_mode: 'Modo', mock_full: 'Completo', mock_section: 'Sección',
    mock_select_set: 'Selecciona un set para empezar', mock_not_attempted: 'Sin intentar',
    mock_set: 'Set', mock_random: '🎲 Aleatorio', mock_last_score: 'Última Puntuación',
    mock_start: 'Iniciar Examen', mock_next: 'Siguiente →', mock_prev: '← Anterior',
    mock_result: 'Resultado del Simulacro', mock_analyzing: 'Analizando resultados...',
    mock_try_again: 'Intentar de Nuevo', mock_back: 'Volver a Simulacros', mock_practice_weak: 'Practicar Áreas Débiles',
    ai_title: 'Coach de Estudio IA', ai_desc: 'Tu guía en el aprendizaje de idiomas', ai_premium: 'Función Premium',
    ai_science: 'Explicaciones Científicas', ai_science_desc: 'La comprensión construye memorias fuertes',
    ai_scaffold: 'Apoyo Personalizado', ai_scaffold_desc: 'Orientación a tu nivel (i+1)',
    ai_growth: 'Coaching de Crecimiento', ai_growth_desc: 'Desafíos como oportunidades',
    ai_support: 'Soporte 24/7', ai_support_desc: '¿Preguntas a las 2am? Estamos aquí',
    ai_send: 'Enviar', ai_placeholder: 'Pregunta sobre gramática, vocabulario...',
    ai_growth_areas: '📊 Áreas de Crecimiento', ai_study_science: '📚 Ciencia del Estudio', ai_error_patterns: '🧠 Patrones de Error',
    settings_title: 'Configuración', settings_account: 'Cuenta', settings_email: 'Correo',
    settings_plan: 'Plan Actual', settings_not_logged: 'No conectado', settings_free: 'Prueba Gratuita',
    settings_study: 'Config. de Estudio', settings_qcount: 'Preguntas por Unidad', settings_qcount_desc: 'Ítems por sesión',
    settings_sound: 'Efectos de Sonido', settings_sound_desc: 'Sonidos del quiz',
    settings_data: 'Datos', settings_reset: 'Reiniciar Progreso', settings_reset_desc: 'Borrar todos los datos',
    settings_logout: 'Cerrar Sesión', settings_logout_desc: 'Salir de cuenta',
    settings_manage: 'Gestionar Suscripción', settings_help: 'Ayuda', settings_support: 'Soporte',
    sub_choose: 'Elige tu Plan', sub_basic: 'Básico', sub_standard: 'Estándar', sub_premium: 'Premium',
    sub_basic_f1: 'Contenido JLPT N5-N3', sub_basic_f2: 'Aprender/Practicar/Repasar/Probar',
    sub_basic_f3: 'Seguimiento de progreso', sub_basic_f4: 'Estudio ilimitado',
    sub_std_f1: 'Todo lo de Básico', sub_std_f2: 'Simulacros completos', sub_std_f3: 'Explicaciones IA',
    sub_prem_f1: 'Todo lo de Estándar', sub_prem_f2: 'Todos los niveles JLPT (N5-N1)',
    sub_prem_f3: 'Tutor IA', sub_prem_f4: 'Soporte prioritario',
    trial_title: 'Inicia tu Prueba Gratuita',
    trial_desc: '<strong>Acceso total</strong> a todo el contenido JLPT por <strong>7 días gratis</strong>. Sin compromiso.',
    trial_f1: 'Todo vocabulario, kanji y gramática N5-N1', trial_f2: '20 simulacros por nivel',
    trial_f3: 'Tutor IA explica cada error', trial_f4: 'Cancela cuando quieras',
    trial_start: '¡Prueba 7 Días Gratis!', trial_note: '7 días gratis • Cancela cuando quieras', trial_later: 'Ahora No',
    trial_welcome: '🎉 ¡Bienvenido! Tu prueba de {plan} ({billing}) ha comenzado.',
    billing_annual: 'Anual', billing_monthly: 'Mensual',
    ai_coach_title: 'Enfoque de esta Semana', ai_coach_loading: 'Analizando progreso...',
    ai_coach_details: 'Ver Detalles', ai_coach_hide: 'Ocultar Detalles',
    ai_coach_receptive: 'Comprensión (Escuchar/Leer)', ai_coach_productive: 'Uso (Significado/Escribir)',
    ai_coach_recommended: 'Enfoque', ai_coach_review: 'Repaso',
    ai_coach_fallback_focus: '¡Mantén tu práctica diaria!', ai_coach_fallback_reason: 'La consistencia es clave.',
    ai_coach_fallback_encourage: '¡Estás progresando muy bien!',
    ai_coach_welcome_title: '¡Bienvenido! Comencemos.', ai_coach_welcome_desc: 'Completa 10 preguntas para tu plan.',
    ai_coach_progress_title: '¡Gran comienzo!', ai_coach_progress_desc: '¡Tu análisis IA está casi listo!',
    ai_coach_intro_title: 'Soy tu Coach de Estudio IA', ai_coach_intro_desc: 'Crearé tu hoja de ruta para el JLPT.',
    ai_coach_q_name: '¿Cuál es tu nombre?', ai_coach_name_placeholder: 'Ingresa tu nombre',
    ai_coach_q_exam: '¿Cuándo tomarás el JLPT?', ai_coach_q_target: '¿Qué nivel quieres aprobar?',
    ai_coach_q_level: '¿Tu nivel actual de japonés?', ai_coach_q_time: '¿Tiempo de estudio diario?',
    ai_coach_select: 'Seleccionar...', ai_coach_july: 'Julio 2025', ai_coach_december: 'Diciembre 2025',
    ai_coach_july_next: 'Julio 2026', ai_coach_undecided: 'Aún no decidido',
    ai_coach_level_beginner: 'Principiante total', ai_coach_level_hiragana: 'Conozco hiragana/katakana',
    ai_coach_level_n5: 'Nivel N5', ai_coach_level_n4: 'Nivel N4', ai_coach_level_n3: 'Nivel N3', ai_coach_level_n2: 'Nivel N2+',
    ai_coach_time_15: '15 minutos', ai_coach_time_30: '30 minutos', ai_coach_time_60: '1 hora', ai_coach_time_90: '1+ horas',
    ai_coach_your_roadmap: 'Tu Hoja de Ruta', ai_coach_roadmap_suffix: ' - Hoja de Ruta',
    ai_coach_this_week: 'Enfoque:', ai_coach_goal: 'Tu Objetivo', ai_coach_start_btn: '¡Comencemos!',
    ai_coach_journey_started: '¡Tu viaje ha comenzado!', ai_coach_journey_desc: 'Completa 10 preguntas para análisis.',
    pass_probability: 'Probabilidad de Aprobar', pass_section_vocab: 'Vocabulario', pass_section_grammar: 'Gramática',
    pass_section_reading: 'Lectura', pass_section_listening: 'Comprensión Auditiva',
    srs_review_due: 'Repaso Pendiente', srs_urgent: 'urgente', srs_soon: 'hoy', srs_later: 'esta semana',
    srs_start: 'Iniciar Repaso', srs_no_items: '¡No hay ítems pendientes!',
    habit_greeting_morning: 'Buenos días', habit_greeting_afternoon: 'Buenas tardes', habit_greeting_evening: 'Buenas noches',
    habit_day_streak: 'días consecutivos', habit_min_today: 'min hoy', habit_dont_break: 'no rompas tu racha de',
    habit_streak_suffix: ' días!', habit_start_study: '¡comienza a estudiar!', habit_more_minutes: 'minutos para tu meta!',
    habit_build_foundation: '¡construyamos tu base!', habit_more_questions: 'preguntas más para análisis.',
    habit_journey_begun: '¡tu viaje ha comenzado!',
    mock_report_analyzing: '🔍 Analizando resultados...', mock_report_strengths: 'Fortalezas',
    mock_report_weaknesses: 'Áreas a Mejorar', mock_report_next_steps: 'Plan Recomendado', mock_report_error: 'Error al generar informe.',
    pass_title: 'Reporta tu Éxito', pass_level: 'Nivel JLPT *', pass_select: 'Selecciona nivel...',
    pass_score: 'Puntuación (opcional)', pass_name: 'Nombre *', pass_country: 'País/Región',
    pass_message: 'Tu Mensaje', pass_photo: 'Foto Certificado', pass_upload: 'Subir certificado', pass_submit: 'Enviar',
    upgrade: 'Mejorar', upgrade_premium: 'Mejorar a Premium',
    feedback_prompt: '¿Qué te parece Fujisan.AI?', feedback_title: 'Tu opinión', feedback_placeholder: 'Cuéntanos qué piensas...', feedback_submit: 'Enviar', feedback_thanks: '¡Gracias por tu opinión!', feedback_rating: 'Califica tu experiencia', feedback_cta: '¿Qué tal Fujisan.AI? Comparte tu opinión →',
    ask_more: 'Preguntar más →',
    feedback_desc: '¡Tu opinión nos ayuda a mejorar Fujisan.AI!', feedback_comment: 'Tu comentario', feedback_comment_placeholder: '¿Qué te gusta? ¿Qué podría mejorar?', feedback_nickname: 'Apodo (opcional)', feedback_nickname_placeholder: '¿Cómo te llamamos?', feedback_permission: 'Permito que mi opinión se muestre en el sitio web',
    methodology_label: 'Nuevo Paradigma', methodology_headline: 'Diseño Instruccional. SLA. IA.',
    methodology_desc: 'Ciencia de adquisición de idiomas para resultados medibles.',
    hero_badge: 'Aprendizaje Científico', hero_title: '¡Domina el Japonés de Verdad!',
    hero_subtitle: 'El método científico que funciona. Pasa el JLPT N5-N1 con IA personalizada.',
    hero_cta: '¡Empieza Gratis!', hero_note: '7 días • Cancela cuando quieras',
    hero_stat_retention: 'Retención', hero_stat_students: 'Estudiantes Activos', hero_stat_levels: 'Cobertura', hero_stat_experience: 'Datos',
    science_label: 'Fundamento Teórico', science_title: 'Ciencia del Aprendizaje Comprobada',
    science_subtitle: 'Diseño Instruccional + Investigación SLA',
    features_label: 'Capacidades', features_headline: 'Diseñado para Resultados',
    features_subheadline: 'Infraestructura completa de preparación JLPT.',
    feature_mock_title: 'Evaluación Auténtica', feature_mock_desc: '100 tests formato JLPT.',
    feature_ai_title: 'Retroalimentación IA', feature_ai_desc: 'Gemini genera explicaciones personalizadas.',
    feature_srs_title: 'Programación Adaptativa', feature_srs_desc: 'Repetición espaciada con ML.',
    feature_lang_title: '8 Idiomas', feature_lang_desc: 'Interfaz y explicaciones en 8 idiomas.',
    modes_label: 'Arquitectura', modes_title: 'Marco de 4 Modos', modes_subtitle: 'Entrada → Absorción → Integración → Evaluación.',
    mode_learn_title: 'Entrada', mode_learn_desc: 'Input comprensible con ejemplos.',
    mode_practice_title: 'Recuerdo Activo', mode_practice_desc: 'Práctica de 4 habilidades.',
    mode_review_title: 'Repaso Espaciado', mode_review_desc: 'Programación ML optimizada.',
    mode_mock_title: 'Evaluación', mode_mock_desc: '100 simulacros JLPT.',
    levels_label: 'Contenido', levels_title: 'Plan de Estudios JLPT', levels_subtitle: 'Cobertura completa validada',
    coverage_vocab: 'Vocabulario', coverage_kanji: 'Kanji', coverage_grammar: 'Gramática', coverage_mock: 'Simulacros',
    level_beginner: 'Principiante', level_elementary: 'Elemental', level_intermediate: 'Intermedio', level_advanced: 'Avanzado', level_expert: 'Experto',
    level_vocabulary: 'Vocabulario', level_new_kanji: 'Kanji Nuevo', level_grammar: 'Gramática', level_total: 'Total',
    level_n5_desc: 'Comienza tu viaje en japonés.', level_n5_f1: 'Hiragana y katakana', level_n5_f2: 'Patrones básicos', level_n5_f3: 'Vida diaria',
    level_n4_desc: 'Construye tu base.', level_n4_f1: 'Forma て', level_n4_f2: 'Formas potencial/pasiva', level_n4_f3: 'Lectura',
    level_n3_desc: 'Puente hacia fluidez.', level_n3_f1: 'Gramática compleja', level_n3_f2: 'Conversación natural', level_n3_f3: 'Japonés de negocios',
    level_n2_desc: 'Japonés profesional.', level_n2_f1: 'Negocios', level_n2_f2: 'Lectura académica', level_n2_f3: 'Comprensión compleja',
    level_n1_desc: 'Casi nativo.', level_n1_f1: 'Expresiones literarias', level_n1_f2: 'Comunicación matizada', level_n1_f3: 'Textos universitarios',
    japan_title: '19 Años de Datos + IA', japan_p1: 'Google Gemini + 19 años de datos educativos.',
    japan_p2: 'Modelos entrenados con patrones reales.', japan_p3: 'Aprendizaje hiper-personalizado.',
    compare_label: 'Comparación', compare_title: '¿Por qué Fujisan.AI?', compare_subtitle: 'Compara nuestro aprendizaje IA',
    compare_feature: 'Característica', compare_textbooks: 'Libros', compare_other: 'Otras Apps',
    compare_jlpt: 'Enfocado en JLPT', compare_mock: 'Simulacros auténticos', compare_japan: 'Hecho en Japón', compare_levels: 'Todos los niveles',
    compare_full: 'Completo', compare_partial: 'Parcial', compare_none: 'No disponible',
    section_pricing: 'Elige tu Plan', referral_input_title: '¿Código de referido?', referral_input_hint: '¡30 días de prueba!',
    plan_basic_monthly: 'o $7.99/mes', plan_standard_monthly: 'o $14.99/mes', plan_premium_monthly: 'o $29.99/mes',
    plan_save: 'Ahorra 17%', plan_popular: 'Más Popular', plan_best: 'Mejor Valor',
    plan_basic_f1: 'JLPT N5-N3', plan_basic_f2: 'Todos los modos', plan_basic_f3: 'Seguimiento',
    plan_standard_f1: 'Básico +', plan_standard_f2: 'Explicaciones IA', plan_standard_f3: 'Predicción', plan_standard_f4: 'Simulacros completos',
    plan_premium_f1: 'Estándar +', plan_premium_f2: 'Tutor IA 24/7', plan_premium_f3: 'Todos los niveles', plan_premium_f4: 'Soporte prioritario',
    price_cta: '¡Empieza Gratis Ahora!', price_card_note: 'Tarjeta requerida. Cancela cuando quieras.',
    referral_title: '¡Invita y Gana!', referral_desc: '1 mes gratis por amigo',
    final_cta_title: 'Deja de Perder Tiempo', final_cta_sub: 'Aprendizaje IA. 7 días gratis.',
    faq_label: 'FAQ', faq_title: 'Preguntas Frecuentes',
    faq_q1: '¿Diferencia entre planes?', faq_a1: 'Básico: N5 + IA. Estándar: + simulacros. Premium: + Tutor IA + todos los niveles.',
    faq_q2: '¿Duración de prueba?', faq_a2: '7 días gratis. Cancela antes y no se cobra.',
    faq_q3: '¿Qué es Tutor IA?', faq_a3: 'Pregunta cualquier duda de japonés. Respuestas instantáneas.',
    faq_q4: '¿Programa de referidos?', faq_a4: 'Comparte tu link. Ambos obtienen 1 mes gratis.',
    faq_q5: '¿Bonificación por aprobar?', faq_a5: 'Sí, 3 meses gratis con certificado.',
    footer_desc: 'Aprendizaje IA de japonés, creado en Tokio por TORAIZ Inc. desde 2006.',
    footer_product: 'Producto', footer_features: 'Características', footer_levels: 'Niveles', footer_pricing: 'Precios',
    footer_legal: 'Legal', footer_terms: 'Términos', footer_privacy: 'Privacidad',
    footer_contact: 'Contacto', footer_copyright: '© 2025 TORAIZ Inc.', footer_made: 'Hecho con ❤️ en Tokio',
    nav_features: 'Características', nav_levels: 'Niveles', nav_pricing: 'Precios',
    btn_login: 'Iniciar Sesión', btn_start: 'Comenzar Gratis', btn_account: 'Cuenta', btn_logout: 'Cerrar Sesión',
    demo_listen: 'Reproducir', coming_soon: 'Pronto', coming: 'Próximamente', coming_2025: '2025', level_n5_units: '50 Unidades',
    greeting_morning: 'Buenos días',
    greeting_afternoon: 'Buenas tardes',
    greeting_evening: 'Buenas noches',
    ai_recommend_start: 'Comenzar',
    ai_recommend_default: 'Empieza con vocabulario básico',
    ai_recommend_review: 'Repasa los items difíciles',
    ai_recommend_continue: 'Continuar con',
    ai_recommend_focus: 'Enfócate en',
    ai_recommend_today: 'hoy',
    ai_recommend_about: 'Aproximadamente',
    ai_recommend_minutes: 'minutos',
    ai_recommend_complete: 'completado',
    nav_learn: 'Aprender',
    nav_invite: 'Invitar',
    day_streak: 'días seguidos',
    // JLPT Level Info
    level_detail_title: 'Sobre Este Nivel',
    level_detail_study_hours: 'Horas de Estudio',
    level_detail_pass_mark: 'Nota de Aprobación',
    level_detail_test_time: 'Duración del Examen',
    level_detail_start: 'Comenzar a Aprender',
    level_detail_reading: 'Lectura',
    level_detail_listening: 'Comprensión Auditiva',
    level_detail_cando: 'Lo Que Puedes Hacer',
    level_detail_content: 'Contenido de Fujisan.AI',
    level_n5_difficulty: 'Principiante',
    level_n4_difficulty: 'Elemental',
    level_n3_difficulty: 'Intermedio',
    level_n2_difficulty: 'Avanzado',
    level_n1_difficulty: 'Experto',
    level_n5_official: 'Capacidad para entender algo de japonés básico.',
    level_n5_reading: 'Leer y comprender expresiones y oraciones típicas escritas en hiragana, katakana y kanji básico.',
    level_n5_listening: 'Escuchar y comprender conversaciones sobre temas que se encuentran regularmente en la vida diaria y situaciones de clase, obteniendo información necesaria de conversaciones cortas habladas lentamente.',
    level_n5_cando_1: 'Presentarse a sí mismo y a la familia',
    level_n5_cando_2: 'Pedir y dar direcciones básicas',
    level_n5_cando_3: 'Pedir comida en restaurantes',
    level_n5_cando_4: 'Entender anuncios simples',
    level_n4_official: 'Capacidad para entender japonés básico.',
    level_n4_reading: 'Leer y comprender textos sobre temas cotidianos familiares escritos con vocabulario y kanji básico.',
    level_n4_listening: 'Escuchar y comprender conversaciones de la vida diaria, siguiendo generalmente su contenido cuando se habla lentamente.',
    level_n4_cando_1: 'Tener conversaciones simples sobre la vida diaria',
    level_n4_cando_2: 'Leer y entender avisos y señales cortas',
    level_n4_cando_3: 'Escribir mensajes y postales simples',
    level_n4_cando_4: 'Seguir programas de TV básicos con ayuda visual',
    level_n3_official: 'Capacidad para entender el japonés usado en situaciones cotidianas hasta cierto grado.',
    level_n3_reading: 'Leer materiales con contenido específico sobre temas cotidianos. Captar información resumida como titulares de periódicos. Comprender escritos algo difíciles si hay frases alternativas.',
    level_n3_listening: 'Escuchar y comprender conversaciones coherentes en situaciones cotidianas a velocidad casi natural, siguiendo el contenido y captando las relaciones entre las personas.',
    level_n3_cando_1: 'Entender la mayoría de conversaciones cotidianas',
    level_n3_cando_2: 'Leer titulares de periódicos y artículos simples',
    level_n3_cando_3: 'Expresar opiniones sobre temas familiares',
    level_n3_cando_4: 'Manejar comunicaciones comerciales básicas',
    level_n2_official: 'Capacidad para entender el japonés usado en situaciones cotidianas y en diversas circunstancias hasta cierto grado.',
    level_n2_reading: 'Leer materiales escritos claramente sobre diversos temas como artículos de periódicos/revistas y críticas simples. Seguir narraciones y comprender la intención de los escritores.',
    level_n2_listening: 'Comprender noticias y conversaciones a velocidad casi natural en situaciones cotidianas, entendiendo relaciones y puntos esenciales.',
    level_n2_cando_1: 'Trabajar en entornos empresariales japoneses',
    level_n2_cando_2: 'Leer periódicos y revistas cómodamente',
    level_n2_cando_3: 'Asistir a clases universitarias en japonés',
    level_n2_cando_4: 'Entender la mayoría de programas de TV y películas',
    level_n1_official: 'Capacidad para entender el japonés usado en diversas circunstancias.',
    level_n1_reading: 'Leer escritos con complejidad lógica y temas abstractos como editoriales y críticas. Leer materiales profundos y comprender la intención de los escritores de manera integral.',
    level_n1_listening: 'Comprender noticias, conferencias y conversaciones coherentes a velocidad natural en diversos entornos. Entender relaciones, estructuras lógicas y puntos esenciales de manera integral.',
    level_n1_cando_1: 'Leer trabajos académicos y obras literarias',
    level_n1_cando_2: 'Participar en discusiones profesionales con fluidez',
    level_n1_cando_3: 'Entender matices sutiles y referencias culturales',
    level_n1_cando_4: 'Trabajar como traductor/intérprete',
    unit_preview_title: 'Vista Previa de Unidad',
    unit_preview_vocab: 'Vocabulario',
    unit_preview_kanji: 'Kanji',
    unit_preview_grammar: 'Gramática',
    unit_preview_start: 'Comenzar Unidad',
    unit_preview_sample: 'Elementos de muestra',
    units: 'Unidades'
  },
  pt: {
    nav_drill: 'Prática', nav_mock: 'Simulado', nav_ai: 'IA', nav_talk: 'Falar',
    nav_vocab: 'Vocabulário', nav_kanji: 'Kanji', nav_new_kanji: 'Kanji Novo', nav_grammar: 'Gramática',
    // Talk
    talk_title: 'Prática de Conversação IA',
    talk_desc: 'Pratique conversação em japonês com IA',
    talk_unit_mode: 'Modo Unidade Vinculada',
    talk_start: 'Iniciar',
    talk_free_theme: 'Tema Livre',
    talk_greeting: 'Apresentação',
    talk_restaurant: 'Restaurante',
    talk_shopping: 'Compras',
    talk_directions: 'Direções',
    talk_travel: 'Viagem',
    talk_free: 'Conversa Livre',
    talk_unit_practice: 'Pratique com vocabulário de Unit 1-{n}',
    talk_intro_want: 'Quero me apresentar',
    talk_hobby_want: 'Quero falar sobre hobbies',
    talk_japan_question: 'Tenho perguntas sobre o Japão',
    talk_input_placeholder: 'Digite em japonês...',
    talk_unit_desc_default: 'Pratique com vocabulário de Unit',
    talk_chat_title: 'Conversa IA',
    talk_first_msg: 'Olá! Vamos conversar usando vocabulário de {level}. Sobre o que você quer falar?',
    talk_feedback: 'Feedback',
    talk_you: 'Você',
    onboarding_welcome: 'Bem-vindo ao Fujisan.AI',
    onboarding_welcome_desc: 'Seu tutor JLPT com IA. Domine o japonês com aprendizado personalizado.',
    onboarding_goal: 'Qual é seu objetivo?', onboarding_goal_desc: 'Selecione seu nível JLPT alvo',
    onboarding_beginner: 'Iniciante', onboarding_elementary: 'Elementar',
    onboarding_intermediate: 'Intermediário', onboarding_advanced: 'Avançado', onboarding_expert: 'Expert',
    onboarding_features: '3 Formas de Aprender',
    onboarding_drill: 'Prática', onboarding_drill_desc: 'Vocabulário, kanji e gramática',
    onboarding_mock: 'Simulado', onboarding_mock_desc: 'Testes em formato JLPT real',
    onboarding_talk_feature: 'Conversar', onboarding_talk_feature_desc: 'Pratique conversação IA com Sakura',
    onboarding_sakura_title: 'Conheça Sakura, sua parceira IA',
    onboarding_sakura_desc: 'Pratique conversas reais em japonês a qualquer momento',
    onboarding_talk: 'Fale com Sakura',
    onboarding_talk_desc: 'Conversas de voz naturais em japonês - Sakura fala e ouve!',
    onboarding_ai_explain: 'Botão Por quê?', onboarding_ai_explain_desc: 'Não entende? Toque "Por quê?" para explicação IA',
    onboarding_ai_coach: 'Revisão Inteligente', onboarding_ai_coach_desc: 'A IA rastreia seu progresso e ajuda você a melhorar',
    onboarding_ready: 'Você está pronto!', onboarding_ready_desc: 'Comece a praticar, faça simulados ou converse com Sakura!',
    onboarding_tip: 'Dica:', onboarding_skip: 'Pular', onboarding_next: 'Próximo', onboarding_start: 'Começar',
    quiz_prompt: 'O que significa?', quiz_correct: 'Correto', quiz_wrong: 'Incorreto', quiz_time: 'Tempo', correct_answer: 'Resposta correta',
    quiz_review_title: 'Revise seus Erros', quiz_review_btn: 'Revisar Erros',
    quiz_try_again: 'Tentar Novamente', quiz_home: 'Início', quiz_continue: 'Continuar', quiz_next_unit: 'Próxima Unidade →', quiz_next: 'Próximo →',
    quiz_listen_select: 'Ouça e selecione a palavra correta', quiz_tap_play: 'Toque para ouvir',
    generating_explanation: 'Gerando explicação...',
    quiz_select_reading: 'Selecione a leitura correta', quiz_select_meaning: 'Selecione o significado correto',
    quiz_select_kanji: 'Selecione o kanji correto', quiz_drill_title: 'Prática', quiz_review_mode: 'Revisão',
    pass_submitting: 'Enviando...', pass_submitted: 'Enviado!', pass_change_photo: 'Trocar foto',
    trial_bonus_applied: 'Bônus aplicado',
    mock_title: 'Simulado', mock_mode: 'Modo', mock_full: 'Completo', mock_section: 'Seção',
    mock_select_set: 'Selecione um set para começar', mock_not_attempted: 'Não tentado',
    mock_set: 'Conjunto', mock_random: '🎲 Aleatório', mock_last_score: 'Última Pontuação',
    mock_start: 'Iniciar Teste', mock_next: 'Próximo →', mock_prev: '← Anterior',
    mock_result: 'Resultado do Simulado', mock_analyzing: 'Analisando resultados...',
    mock_try_again: 'Tentar Novamente', mock_back: 'Voltar aos Simulados', mock_practice_weak: 'Praticar Pontos Fracos',
    ai_title: 'Coach de Estudos IA', ai_desc: 'Seu guia no aprendizado de idiomas', ai_premium: 'Recurso Premium',
    ai_science: 'Explicações Científicas', ai_science_desc: 'Compreensão constrói memórias fortes',
    ai_scaffold: 'Apoio Personalizado', ai_scaffold_desc: 'Orientação ao seu nível (i+1)',
    ai_growth: 'Coaching de Crescimento', ai_growth_desc: 'Desafios como oportunidades',
    ai_support: 'Suporte 24/7', ai_support_desc: 'Perguntas às 2h? Estamos aqui',
    ai_send: 'Enviar', ai_placeholder: 'Pergunte sobre gramática, vocabulário...',
    ai_growth_areas: '📊 Áreas de Crescimento', ai_study_science: '📚 Ciência do Estudo', ai_error_patterns: '🧠 Padrões de Erro',
    settings_title: 'Configurações', settings_account: 'Conta', settings_email: 'Email',
    settings_plan: 'Plano Atual', settings_not_logged: 'Não conectado', settings_free: 'Teste Gratuito',
    settings_study: 'Config. de Estudo', settings_qcount: 'Perguntas por Unidade', settings_qcount_desc: 'Itens por sessão',
    settings_sound: 'Efeitos Sonoros', settings_sound_desc: 'Sons do quiz',
    settings_data: 'Dados', settings_reset: 'Resetar Progresso', settings_reset_desc: 'Limpar todos os dados',
    settings_logout: 'Sair', settings_logout_desc: 'Desconectar da conta',
    settings_manage: 'Gerenciar Assinatura', settings_help: 'Ajuda', settings_support: 'Suporte',
    sub_choose: 'Escolha seu Plano', sub_basic: 'Básico', sub_standard: 'Padrão', sub_premium: 'Premium',
    sub_basic_f1: 'Conteúdo JLPT N5-N3', sub_basic_f2: 'Aprender/Praticar/Revisar/Testar',
    sub_basic_f3: 'Acompanhamento de progresso', sub_basic_f4: 'Estudo ilimitado',
    sub_std_f1: 'Tudo do Básico', sub_std_f2: 'Simulados completos', sub_std_f3: 'Explicações IA',
    sub_prem_f1: 'Tudo do Padrão', sub_prem_f2: 'Todos os níveis JLPT (N5-N1)',
    sub_prem_f3: 'Tutor IA', sub_prem_f4: 'Suporte prioritário',
    trial_title: 'Inicie seu Teste Gratuito',
    trial_desc: '<strong>Acesso total</strong> a todo conteúdo JLPT por <strong>7 dias grátis</strong>. Sem compromisso.',
    trial_f1: 'Todo vocabulário, kanji e gramática N5-N1', trial_f2: '20 simulados por nível',
    trial_f3: 'Tutor IA explica cada erro', trial_f4: 'Cancele quando quiser',
    trial_start: 'Testar 7 Dias Grátis!', trial_note: '7 dias grátis • Cancele quando quiser', trial_later: 'Agora Não',
    trial_welcome: '🎉 Bem-vindo! Seu teste de {plan} ({billing}) começou.',
    billing_annual: 'Anual', billing_monthly: 'Mensal',
    ai_coach_title: 'Foco desta Semana', ai_coach_loading: 'Analisando progresso...',
    ai_coach_details: 'Ver Detalhes', ai_coach_hide: 'Ocultar Detalhes',
    ai_coach_receptive: 'Compreensão (Ouvir/Ler)', ai_coach_productive: 'Uso (Significado/Escrever)',
    ai_coach_recommended: 'Foco', ai_coach_review: 'Revisão',
    ai_coach_fallback_focus: 'Mantenha sua prática diária!', ai_coach_fallback_reason: 'Consistência é a chave.',
    ai_coach_fallback_encourage: 'Você está progredindo muito bem!',
    ai_coach_welcome_title: 'Bem-vindo! Vamos começar.', ai_coach_welcome_desc: 'Complete 10 perguntas para seu plano.',
    ai_coach_progress_title: 'Ótimo começo!', ai_coach_progress_desc: 'Sua análise IA está quase pronta!',
    ai_coach_intro_title: 'Sou seu Coach de Estudos IA', ai_coach_intro_desc: 'Criarei seu roteiro para o JLPT.',
    ai_coach_q_name: 'Qual é seu nome?', ai_coach_name_placeholder: 'Digite seu nome',
    ai_coach_q_exam: 'Quando fará o JLPT?', ai_coach_q_target: 'Que nível quer passar?',
    ai_coach_q_level: 'Seu nível atual de japonês?', ai_coach_q_time: 'Tempo de estudo diário?',
    ai_coach_select: 'Selecionar...', ai_coach_july: 'Julho 2025', ai_coach_december: 'Dezembro 2025',
    ai_coach_july_next: 'Julho 2026', ai_coach_undecided: 'Ainda não decidido',
    ai_coach_level_beginner: 'Iniciante total', ai_coach_level_hiragana: 'Conheço hiragana/katakana',
    ai_coach_level_n5: 'Nível N5', ai_coach_level_n4: 'Nível N4', ai_coach_level_n3: 'Nível N3', ai_coach_level_n2: 'Nível N2+',
    ai_coach_time_15: '15 minutos', ai_coach_time_30: '30 minutos', ai_coach_time_60: '1 hora', ai_coach_time_90: '1+ horas',
    ai_coach_your_roadmap: 'Seu Roteiro', ai_coach_roadmap_suffix: ' - Roteiro',
    ai_coach_this_week: 'Foco:', ai_coach_goal: 'Seu Objetivo', ai_coach_start_btn: 'Vamos Começar!',
    ai_coach_journey_started: 'Sua jornada começou!', ai_coach_journey_desc: 'Complete 10 perguntas para análise.',
    pass_probability: 'Probabilidade de Passar', pass_section_vocab: 'Vocabulário', pass_section_grammar: 'Gramática',
    pass_section_reading: 'Leitura', pass_section_listening: 'Compreensão Auditiva',
    srs_review_due: 'Revisão Pendente', srs_urgent: 'urgente', srs_soon: 'hoje', srs_later: 'esta semana',
    srs_start: 'Iniciar Revisão', srs_no_items: 'Não há itens pendentes!',
    habit_greeting_morning: 'Bom dia', habit_greeting_afternoon: 'Boa tarde', habit_greeting_evening: 'Boa noite',
    habit_day_streak: 'dias consecutivos', habit_min_today: 'min hoje', habit_dont_break: 'não quebre sua sequência de',
    habit_streak_suffix: ' dias!', habit_start_study: 'comece a estudar!', habit_more_minutes: 'minutos para sua meta!',
    habit_build_foundation: 'vamos construir sua base!', habit_more_questions: 'perguntas para análise.',
    habit_journey_begun: 'sua jornada começou!',
    mock_report_analyzing: '🔍 Analisando resultados...', mock_report_strengths: 'Pontos Fortes',
    mock_report_weaknesses: 'Áreas para Melhorar', mock_report_next_steps: 'Plano Recomendado', mock_report_error: 'Erro ao gerar relatório.',
    pass_title: 'Relate seu Sucesso', pass_level: 'Nível JLPT *', pass_select: 'Selecione o nível...',
    pass_score: 'Pontuação (opcional)', pass_name: 'Nome *', pass_country: 'País/Região',
    pass_message: 'Sua Mensagem', pass_photo: 'Foto Certificado', pass_upload: 'Enviar certificado', pass_submit: 'Enviar',
    upgrade: 'Fazer Upgrade', upgrade_premium: 'Upgrade para Premium',
    feedback_prompt: 'O que acha do Fujisan.AI?', feedback_title: 'Sua opinião', feedback_placeholder: 'Conte-nos o que você pensa...', feedback_submit: 'Enviar', feedback_thanks: 'Obrigado pela sua opinião!', feedback_rating: 'Avalie sua experiência', feedback_cta: 'O que acha do Fujisan.AI? Compartilhe →',
    ask_more: 'Perguntar mais →',
    feedback_desc: 'Sua opinião nos ajuda a melhorar o Fujisan.AI!', feedback_comment: 'Seu comentário', feedback_comment_placeholder: 'O que você gosta? O que poderia melhorar?', feedback_nickname: 'Apelido (opcional)', feedback_nickname_placeholder: 'Como devemos chamá-lo?', feedback_permission: 'Permito que minha opinião seja exibida no site',
    methodology_label: 'Novo Paradigma', methodology_headline: 'Design Instrucional. SLA. IA.',
    methodology_desc: 'Ciência de aquisição de idiomas para resultados mensuráveis.',
    hero_badge: 'Aprendizado Científico', hero_title: 'Domine o Japonês de Verdade!',
    hero_subtitle: 'O método científico que funciona. Passe no JLPT N5-N1 com IA personalizada.',
    hero_cta: 'Começar Grátis!', hero_note: '7 dias • Cancele quando quiser',
    hero_stat_retention: 'Retenção', hero_stat_students: 'Estudantes Ativos', hero_stat_levels: 'Cobertura', hero_stat_experience: 'Dados',
    science_label: 'Fundamento Teórico', science_title: 'Ciência do Aprendizado Comprovada',
    science_subtitle: 'Design Instrucional + Pesquisa SLA',
    features_label: 'Capacidades', features_headline: 'Projetado para Resultados',
    features_subheadline: 'Infraestrutura completa de preparação JLPT.',
    feature_mock_title: 'Avaliação Autêntica', feature_mock_desc: '100 testes formato JLPT.',
    feature_ai_title: 'Feedback IA', feature_ai_desc: 'Gemini gera explicações personalizadas.',
    feature_srs_title: 'Programação Adaptativa', feature_srs_desc: 'Repetição espaçada com ML.',
    feature_lang_title: '8 Idiomas', feature_lang_desc: 'Interface e explicações em 8 idiomas.',
    modes_label: 'Arquitetura', modes_title: 'Framework de 4 Modos', modes_subtitle: 'Entrada → Absorção → Integração → Avaliação.',
    mode_learn_title: 'Entrada', mode_learn_desc: 'Input compreensível com exemplos.',
    mode_practice_title: 'Recordação Ativa', mode_practice_desc: 'Prática de 4 habilidades.',
    mode_review_title: 'Revisão Espaçada', mode_review_desc: 'Programação ML otimizada.',
    mode_mock_title: 'Avaliação', mode_mock_desc: '100 simulados JLPT.',
    levels_label: 'Conteúdo', levels_title: 'Currículo JLPT', levels_subtitle: 'Cobertura completa validada',
    coverage_vocab: 'Vocabulário', coverage_kanji: 'Kanji', coverage_grammar: 'Gramática', coverage_mock: 'Simulados',
    level_beginner: 'Iniciante', level_elementary: 'Elementar', level_intermediate: 'Intermediário', level_advanced: 'Avançado', level_expert: 'Expert',
    level_vocabulary: 'Vocabulário', level_new_kanji: 'Kanji Novo', level_grammar: 'Gramática', level_total: 'Total',
    level_n5_desc: 'Comece sua jornada em japonês.', level_n5_f1: 'Hiragana e katakana', level_n5_f2: 'Padrões básicos', level_n5_f3: 'Vida diária',
    level_n4_desc: 'Construa sua base.', level_n4_f1: 'Forma て', level_n4_f2: 'Formas potencial/passiva', level_n4_f3: 'Leitura',
    level_n3_desc: 'Ponte para fluência.', level_n3_f1: 'Gramática complexa', level_n3_f2: 'Conversação natural', level_n3_f3: 'Japonês comercial',
    level_n2_desc: 'Japonês profissional.', level_n2_f1: 'Negócios', level_n2_f2: 'Leitura acadêmica', level_n2_f3: 'Compreensão complexa',
    level_n1_desc: 'Quase nativo.', level_n1_f1: 'Expressões literárias', level_n1_f2: 'Comunicação nuançada', level_n1_f3: 'Textos universitários',
    japan_title: '19 Anos de Dados + IA', japan_p1: 'Google Gemini + 19 anos de dados educacionais.',
    japan_p2: 'Modelos treinados com padrões reais.', japan_p3: 'Aprendizado hiper-personalizado.',
    compare_label: 'Comparação', compare_title: 'Por que Fujisan.AI?', compare_subtitle: 'Compare nosso aprendizado IA',
    compare_feature: 'Recurso', compare_textbooks: 'Livros', compare_other: 'Outros Apps',
    compare_jlpt: 'Focado em JLPT', compare_mock: 'Simulados autênticos', compare_japan: 'Feito no Japão', compare_levels: 'Todos os níveis',
    compare_full: 'Completo', compare_partial: 'Parcial', compare_none: 'Não disponível',
    section_pricing: 'Escolha seu Plano', referral_input_title: 'Código de indicação?', referral_input_hint: '30 dias de teste!',
    plan_basic_monthly: 'ou R$39,99/mês', plan_standard_monthly: 'ou R$74,99/mês', plan_premium_monthly: 'ou R$149,99/mês',
    plan_save: 'Economize 17%', plan_popular: 'Mais Popular', plan_best: 'Melhor Valor',
    plan_basic_f1: 'JLPT N5-N3', plan_basic_f2: 'Todos os modos', plan_basic_f3: 'Acompanhamento',
    plan_standard_f1: 'Básico +', plan_standard_f2: 'Explicações IA', plan_standard_f3: 'Previsão', plan_standard_f4: 'Simulados completos',
    plan_premium_f1: 'Padrão +', plan_premium_f2: 'Tutor IA 24/7', plan_premium_f3: 'Todos os níveis', plan_premium_f4: 'Suporte prioritário',
    price_cta: 'Iniciar 7 Dias Grátis', price_card_note: 'Cartão necessário. Cancele quando quiser.',
    referral_title: 'Convide e Ganhe!', referral_desc: '1 mês grátis por amigo',
    final_cta_title: 'Pare de Perder Tempo', final_cta_sub: 'Aprendizado IA. 7 dias grátis.',
    faq_label: 'FAQ', faq_title: 'Perguntas Frequentes',
    faq_q1: 'Diferença entre planos?', faq_a1: 'Básico: N5 + IA. Padrão: + simulados. Premium: + Tutor IA + todos os níveis.',
    faq_q2: 'Duração do teste?', faq_a2: '7 dias grátis. Cancele antes e não é cobrado.',
    faq_q3: 'O que é Tutor IA?', faq_a3: 'Pergunte qualquer dúvida de japonês. Respostas instantâneas.',
    faq_q4: 'Programa de indicação?', faq_a4: 'Compartilhe seu link. Ambos ganham 1 mês grátis.',
    faq_q5: 'Bônus por passar?', faq_a5: 'Sim, 3 meses grátis com certificado.',
    footer_desc: 'Aprendizado IA de japonês, criado em Tóquio pela TORAIZ Inc. desde 2006.',
    footer_product: 'Produto', footer_features: 'Recursos', footer_levels: 'Níveis', footer_pricing: 'Preços',
    footer_legal: 'Legal', footer_terms: 'Termos', footer_privacy: 'Privacidade',
    footer_contact: 'Contato', footer_copyright: '© 2025 TORAIZ Inc.', footer_made: 'Feito com ❤️ em Tóquio',
    nav_features: 'Recursos', nav_levels: 'Níveis', nav_pricing: 'Preços',
    btn_login: 'Entrar', btn_start: 'Começar Grátis', btn_account: 'Conta', btn_logout: 'Sair',
    demo_listen: 'Reproduzir', coming_soon: 'Em breve', coming: 'Em breve', coming_2025: '2025', level_n5_units: '50 Unidades',
    greeting_morning: 'Bom dia',
    greeting_afternoon: 'Boa tarde',
    greeting_evening: 'Boa noite',
    ai_recommend_start: 'Começar',
    ai_recommend_default: 'Comece com vocabulário básico',
    ai_recommend_review: 'Revise os itens difíceis',
    ai_recommend_continue: 'Continuar com',
    ai_recommend_focus: 'Foque em',
    ai_recommend_today: 'hoje',
    ai_recommend_about: 'Aproximadamente',
    ai_recommend_minutes: 'minutos',
    ai_recommend_complete: 'completo',
    nav_learn: 'Aprender',
    nav_invite: 'Convidar',
    day_streak: 'dias seguidos',
    // JLPT Level Info
    level_detail_title: 'Sobre Este Nível',
    level_detail_study_hours: 'Horas de Estudo',
    level_detail_pass_mark: 'Nota de Aprovação',
    level_detail_test_time: 'Duração do Exame',
    level_detail_start: 'Começar a Aprender',
    level_detail_reading: 'Leitura',
    level_detail_listening: 'Compreensão Auditiva',
    level_detail_cando: 'O Que Você Pode Fazer',
    level_detail_content: 'Conteúdo do Fujisan.AI',
    level_n5_difficulty: 'Iniciante',
    level_n4_difficulty: 'Elementar',
    level_n3_difficulty: 'Intermediário',
    level_n2_difficulty: 'Avançado',
    level_n1_difficulty: 'Expert',
    level_n5_official: 'Capacidade de entender algum japonês básico.',
    level_n5_reading: 'Ler e compreender expressões e frases típicas escritas em hiragana, katakana e kanji básico.',
    level_n5_listening: 'Ouvir e compreender conversas sobre temas encontrados regularmente na vida diária e situações de sala de aula, obtendo informações necessárias de conversas curtas faladas lentamente.',
    level_n5_cando_1: 'Apresentar-se e apresentar a família',
    level_n5_cando_2: 'Pedir e dar direções básicas',
    level_n5_cando_3: 'Pedir comida em restaurantes',
    level_n5_cando_4: 'Entender anúncios simples',
    level_n4_official: 'Capacidade de entender japonês básico.',
    level_n4_reading: 'Ler e compreender textos sobre temas cotidianos familiares escritos com vocabulário e kanji básico.',
    level_n4_listening: 'Ouvir e compreender conversas do dia a dia, geralmente acompanhando seu conteúdo quando faladas lentamente.',
    level_n4_cando_1: 'Ter conversas simples sobre a vida diária',
    level_n4_cando_2: 'Ler e entender avisos e placas curtas',
    level_n4_cando_3: 'Escrever mensagens e cartões postais simples',
    level_n4_cando_4: 'Acompanhar programas de TV básicos com ajuda visual',
    level_n3_official: 'Capacidade de entender o japonês usado em situações cotidianas até certo grau.',
    level_n3_reading: 'Ler materiais com conteúdo específico sobre temas cotidianos. Captar informações resumidas como manchetes de jornais. Compreender textos um pouco difíceis se houver frases alternativas.',
    level_n3_listening: 'Ouvir e compreender conversas coerentes em situações cotidianas em velocidade quase natural, acompanhando o conteúdo e captando as relações entre as pessoas.',
    level_n3_cando_1: 'Entender a maioria das conversas cotidianas',
    level_n3_cando_2: 'Ler manchetes de jornais e artigos simples',
    level_n3_cando_3: 'Expressar opiniões sobre temas familiares',
    level_n3_cando_4: 'Lidar com comunicações comerciais básicas',
    level_n2_official: 'Capacidade de entender o japonês usado em situações cotidianas e em várias circunstâncias até certo grau.',
    level_n2_reading: 'Ler materiais escritos claramente sobre vários temas como artigos de jornais/revistas e críticas simples. Acompanhar narrativas e compreender a intenção dos escritores.',
    level_n2_listening: 'Compreender notícias e conversas em velocidade quase natural em situações cotidianas, entendendo relações e pontos essenciais.',
    level_n2_cando_1: 'Trabalhar em ambientes empresariais japoneses',
    level_n2_cando_2: 'Ler jornais e revistas confortavelmente',
    level_n2_cando_3: 'Assistir aulas universitárias em japonês',
    level_n2_cando_4: 'Entender a maioria dos programas de TV e filmes',
    level_n1_official: 'Capacidade de entender o japonês usado em várias circunstâncias.',
    level_n1_reading: 'Ler textos com complexidade lógica e temas abstratos como editoriais e críticas. Ler materiais profundos e compreender a intenção dos escritores de forma abrangente.',
    level_n1_listening: 'Compreender notícias, palestras e conversas coerentes em velocidade natural em diversos ambientes. Entender relações, estruturas lógicas e pontos essenciais de forma abrangente.',
    level_n1_cando_1: 'Ler trabalhos acadêmicos e obras literárias',
    level_n1_cando_2: 'Participar de discussões profissionais com fluência',
    level_n1_cando_3: 'Entender nuances sutis e referências culturais',
    level_n1_cando_4: 'Trabalhar como tradutor/intérprete',
    unit_preview_title: 'Prévia da Unidade',
    unit_preview_vocab: 'Vocabulário',
    unit_preview_kanji: 'Kanji',
    unit_preview_grammar: 'Gramática',
    unit_preview_start: 'Começar Unidade',
    unit_preview_sample: 'Itens de amostra',
    units: 'Unidades'
  }
};

// Get UI text helper
function t(key) {
  const lang = state.lang || 'en';
  return UI_TEXTS[lang]?.[key] || UI_TEXTS['en'][key] || key;
}

// Alias for getText
const getText = t;

// ========== CONSTANTS ==========
const LEVELS = ['N5', 'N4', 'N3', 'N2', 'N1'];
const CATEGORIES = ['vocab', 'kanji', 'grammar'];
const PASS_THRESHOLD = 60;
const MOCK_TIME = { full: 105, moji: 25, bunpou: 50, choukai: 30 };
const MOCK_QUESTIONS = { full: 91, moji: 35, bunpou: 32, choukai: 24 };

// Unit system: 22 items per unit (15 min @ 4 questions per item)
const ITEMS_PER_UNIT = 22;
const TOTAL_ITEMS = {
  N5: 1024,  // 800 vocab + 144 kanji + 80 grammar
  N4: 1947,  // 1500 vocab + 247 kanji + 200 grammar
  N3: 4777,  // 3750 vocab + 577 kanji + 450 grammar
  N2: 6913,  // 6000 vocab + 663 kanji + 250 grammar
  N1: 10775  // 10000 vocab + 575 kanji + 200 grammar
};
const SKILL_TYPES = ['listening', 'reading', 'meaning', 'writing'];

// ========== JLPT LEVEL INFO (Official + Fujisan.AI Data) ==========
const JLPT_LEVEL_INFO = {
  N5: {
    color: '#34c759',
    difficulty: 'Beginner',
    studyHours: '250-450',
    passRate: '80/180 (44%)',
    testTime: '105 min',
    vocab: 800,
    kanji: 144,
    grammar: 75,
    units: 47
  },
  N4: {
    color: '#007aff',
    difficulty: 'Elementary',
    studyHours: '400-700',
    passRate: '90/180 (50%)',
    testTime: '125 min',
    vocab: 1500,
    kanji: 247,
    grammar: 190,
    units: 89
  },
  N3: {
    color: '#af52de',
    difficulty: 'Intermediate',
    studyHours: '700-1100',
    passRate: '95/180 (53%)',
    testTime: '140 min',
    vocab: 3750,
    kanji: 577,
    grammar: 450,
    units: 218
  },
  N2: {
    color: '#1e3a5f',
    difficulty: 'Advanced',
    studyHours: '1150-1800',
    passRate: '90/180 (50%)',
    testTime: '155 min',
    vocab: 6000,
    kanji: 663,
    grammar: 249,
    units: 315
  },
  N1: {
    color: '#ff3b30',
    difficulty: 'Expert',
    studyHours: '1700-2600',
    passRate: '100/180 (56%)',
    testTime: '170 min',
    vocab: 10000,
    kanji: 575,
    grammar: 195,
    units: 490
  }
};

// ========== AUDIO PATH HELPER ==========
function getAudioPath(level, setNum, audioFile) {
  if (!audioFile) return null;
  const lvl = level.toLowerCase();
  return `audio/${lvl}/v${setNum}/${audioFile}`;
}

// ========== KEY HELPERS ==========
function getQuestionKey(questionId) {
  return `${state.level}_${questionId}`;
}

function getCategoryKey() {
  return `${state.level}_${state.category}`;
}

// ========== FREE CAMPAIGN SETTINGS ==========
// Campaign runs until March 31, 2025 23:59:59 JST
const FREE_CAMPAIGN_END = new Date('2026-03-31T23:59:59+09:00');
const IS_FREE_CAMPAIGN = new Date() < FREE_CAMPAIGN_END;

// ========== STRIPE LINKS ==========
const STRIPE_LINKS = {
  basic_monthly: 'https://buy.stripe.com/4gMeVeaF65YGaKD3Ma6g800',
  basic_annual: 'https://buy.stripe.com/dRm3cwbJa72K1a36Ym6g801',
  standard_monthly: 'https://buy.stripe.com/5kQ6oIeVmgDk4mffuS6g802',
  standard_annual: 'https://buy.stripe.com/eVq4gA14w72KaKD4Qe6g803',
  premium_monthly: 'https://buy.stripe.com/dRm8wQeVmcn4f0T3Ma6g804',
  premium_annual: 'https://buy.stripe.com/00w14ofZq72Kg4X6Ym6g805'
};

// Stripe Customer Portal URL (for managing subscriptions / cancellation)
const STRIPE_CUSTOMER_PORTAL = 'https://billing.stripe.com/p/login/4gMeVeaF65YGaKD3Ma6g800';

// ========== REFERRAL SYSTEM ==========
const REFERRAL_CODES = ['REF001', 'REF002', 'REF003', 'REF004', 'REF005', 'REF006', 'REF007', 'REF008', 'REF009', 'REF010'];

// Generate unique referral code for user
function generateUniqueReferralCode() {
  // Use userId if available, otherwise create random
  const base = state.userId ? state.userId.substring(0, 6).toUpperCase() : '';
  const random = Math.random().toString(36).substring(2, 6).toUpperCase();
  return 'FJ' + (base || random) + random.substring(0, 2);
}

// Get user's assigned referral code (for now, based on user index or manual assignment)
function getMyReferralCode() {
  // Check if already assigned
  let myCode = localStorage.getItem('fujisan_my_referral_code');
  if (myCode && myCode !== 'Coming Soon') return myCode;
  
  // Generate unique code based on userId or random
  if (state.userId) {
    myCode = generateUniqueReferralCode();
    localStorage.setItem('fujisan_my_referral_code', myCode);
    
    // Also save to Firestore for tracking
    if (typeof db !== 'undefined') {
      db.collection('users').doc(state.userId).set({
        referralCode: myCode,
        referralCodeCreatedAt: firebase.firestore.FieldValue.serverTimestamp()
      }, { merge: true }).catch(e => console.log('Could not save referral code:', e));
    }
    
    return myCode;
  }
  
  // Fallback to predefined codes for non-logged-in users
  const userIndex = parseInt(localStorage.getItem('fujisan_user_index') || '0');
  if (userIndex < REFERRAL_CODES.length) {
    myCode = REFERRAL_CODES[userIndex];
    localStorage.setItem('fujisan_my_referral_code', myCode);
    return myCode;
  }
  
  // If no more codes and not logged in, generate temporary one
  myCode = generateUniqueReferralCode();
  localStorage.setItem('fujisan_my_referral_code', myCode);
  return myCode;
}

// Handle incoming referral code from URL
async function handleReferralCode(refCode) {
  // Validate referral code format
  if (!refCode || refCode.length < 3) return;
  
  // Don't allow self-referral
  const myCode = localStorage.getItem('fujisan_my_referral_code');
  if (myCode && myCode === refCode) {
    console.log('Self-referral not allowed');
    return;
  }
  
  // Check if already referred
  if (state.referredBy) {
    console.log('Already referred by:', state.referredBy);
    return;
  }
  
  // Store referral info
  state.referredBy = refCode;
  state.referredAt = new Date().toISOString();
  
  // Grant 30-day extended trial (instead of 7 days)
  const trialExpiry = new Date();
  trialExpiry.setDate(trialExpiry.getDate() + 30);
  state.planExpiry = trialExpiry.toISOString();
  state.isTrialing = true;
  state.plan = state.plan || 'basic'; // Give basic plan if none
  state.referralBonus = '30-day-trial';
  
  saveState();
  
  // Clean URL
  window.history.replaceState({}, '', window.location.pathname);
  
  // Note: Firestore recording happens in syncUserData() after login
  
  // Show welcome message
  const lang = state.lang || 'en';
  const messages = {
    en: '🎁 Welcome! You\'ve been referred by a friend and received a 30-day free trial!',
    'zh-TW': '🎁 歡迎！您透過朋友推薦獲得了30天免費試用！',
    'zh-CN': '🎁 欢迎！您通过朋友推荐获得了30天免费试用！',
    ko: '🎁 환영합니다! 친구 추천으로 30일 무료 체험을 받으셨습니다!',
    vi: '🎁 Chào mừng! Bạn đã được giới thiệu và nhận 30 ngày dùng thử miễn phí!',
    id: '🎁 Selamat datang! Anda mendapat uji coba gratis 30 hari dari referensi teman!'
  };
  
  setTimeout(() => {
    alert(messages[lang] || messages.en);
  }, 800);
  
  console.log('Referral applied:', { refCode, trialExpiry: state.planExpiry });
}

// Check and reward referrer when user subscribes
async function checkAndRewardReferrer() {
  if (!state.referredBy || state.referrerRewarded) return;
  
  // Only reward when user actually subscribes (not during trial)
  if (state.isTrialing) return;
  
  try {
    if (typeof db !== 'undefined') {
      // Find referrer by code and grant them 1 month free
      const referralsRef = db.collection('referrals');
      const snapshot = await referralsRef
        .where('referrerCode', '==', state.referredBy)
        .where('referredUserId', '==', state.userId)
        .where('status', '==', 'pending')
        .get();
      
      if (!snapshot.empty) {
        const doc = snapshot.docs[0];
        await doc.ref.update({
          status: 'completed',
          completedAt: firebase.firestore.FieldValue.serverTimestamp(),
          referrerReward: '1-month-free'
        });
        
        state.referrerRewarded = true;
        saveState();
        
        console.log('Referrer reward recorded');
      }
    }
  } catch (e) {
    console.log('Could not reward referrer:', e);
  }
}

// Copy referral code to clipboard
function copyReferralCode() {
  const code = getMyReferralCode();
  if (code === 'Coming Soon') {
    alert('Referral codes are currently limited. Please contact support.');
    return;
  }
  
  const referralUrl = `https://fujisan.ai/?ref=${code}`;
  
  if (navigator.clipboard) {
    navigator.clipboard.writeText(referralUrl).then(() => {
      showToast('✅ Referral link copied!');
    }).catch(() => {
      fallbackCopyReferralCode(referralUrl);
    });
  } else {
    fallbackCopyReferralCode(referralUrl);
  }
}

function fallbackCopyReferralCode(text) {
  const textarea = document.createElement('textarea');
  textarea.value = text;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand('copy');
  document.body.removeChild(textarea);
  showToast('✅ Referral link copied!');
}

// Copy referral link from Settings page
function copyReferralLink() {
  const code = getMyReferralCode();
  const referralUrl = `https://fujisan.ai/?ref=${code}`;
  
  const btn = document.getElementById('copyReferralBtn');
  
  if (navigator.clipboard) {
    navigator.clipboard.writeText(referralUrl).then(() => {
      showToast('✅ Link copied!');
      if (btn) {
        btn.innerHTML = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg><span>Copied!</span>';
        setTimeout(() => {
          btn.innerHTML = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg><span>Copy</span>';
        }, 2000);
      }
    }).catch(() => {
      fallbackCopyReferralCode(referralUrl);
    });
  } else {
    fallbackCopyReferralCode(referralUrl);
  }
}

// Share on Twitter/X
function shareReferralTwitter() {
  const code = getMyReferralCode();
  const referralUrl = `https://fujisan.ai/?ref=${code}`;
  const text = encodeURIComponent("I'm studying Japanese with Fujisan.AI! 🗻🇯🇵 AI-powered JLPT prep that actually works. Try it free:");
  window.open(`https://twitter.com/intent/tweet?text=${text}&url=${encodeURIComponent(referralUrl)}`, '_blank');
}

// Share on LINE
function shareReferralLine() {
  const code = getMyReferralCode();
  const referralUrl = `https://fujisan.ai/?ref=${code}`;
  const text = encodeURIComponent("Fujisan.AIで日本語勉強してる！AIでJLPT対策ができるよ🗻 無料で試してみて:");
  window.open(`https://line.me/R/msg/text/?${text}%20${encodeURIComponent(referralUrl)}`, '_blank');
}

// Share on WhatsApp
function shareReferralWhatsApp() {
  const code = getMyReferralCode();
  const referralUrl = `https://fujisan.ai/?ref=${code}`;
  const text = encodeURIComponent(`I'm learning Japanese with Fujisan.AI! 🗻 AI-powered JLPT prep. Try it free: ${referralUrl}`);
  window.open(`https://wa.me/?text=${text}`, '_blank');
}

// Initialize referral link input in Settings
function initReferralSection() {
  const input = document.getElementById('referralLinkInput');
  if (input) {
    const code = getMyReferralCode();
    input.value = `fujisan.ai/?ref=${code}`;
  }
}

// Update referral code display in settings
function updateReferralDisplay() {
  const codeEl = document.getElementById('myReferralCode');
  if (codeEl) {
    const code = getMyReferralCode();
    codeEl.textContent = `fujisan.ai/?ref=${code}`;
  }
  
  // Also update new referral link input
  initReferralSection();
  
  // Show referral status if user was referred
  const statusEl = document.getElementById('referralStatus');
  const bonusTextEl = document.getElementById('referralBonusText');
  if (statusEl && state.referredBy) {
    statusEl.style.display = 'block';
    if (bonusTextEl) {
      const expiry = state.planExpiry ? new Date(state.planExpiry) : null;
      if (expiry && expiry > new Date()) {
        const daysLeft = Math.ceil((expiry - new Date()) / (1000 * 60 * 60 * 24));
        bonusTextEl.textContent = `30-day trial: ${daysLeft} days remaining`;
      } else {
        bonusTextEl.textContent = getText('trial_bonus_applied') || 'Trial bonus applied';
      }
    }
  } else if (statusEl) {
    statusEl.style.display = 'none';
  }
}

// Simple toast notification
function showToast(message) {
  // Remove existing toast
  const existing = document.querySelector('.toast-notification');
  if (existing) existing.remove();
  
  const toast = document.createElement('div');
  toast.className = 'toast-notification';
  toast.textContent = message;
  toast.style.cssText = `
    position: fixed;
    bottom: 100px;
    left: 50%;
    transform: translateX(-50%);
    background: rgba(0,0,0,0.8);
    color: #fff;
    padding: 12px 24px;
    border-radius: 8px;
    font-size: 14px;
    z-index: 10000;
    animation: fadeInUp 0.3s ease;
  `;
  document.body.appendChild(toast);
  
  setTimeout(() => {
    toast.style.opacity = '0';
    setTimeout(() => toast.remove(), 300);
  }, 2000);
}

function openCustomerPortal() {
  if (!currentUser) {
    alert('Please log in to manage your subscription.');
    return;
  }
  window.open(STRIPE_CUSTOMER_PORTAL, '_blank');
}

// ========== SF SYMBOLS STYLE ICONS ==========
const SF_ICONS = {
  // Navigation & UI
  home: '<svg viewBox="0 0 24 24"><path d="M12 3L4 9v12h5v-7h6v7h5V9l-8-6z"/></svg>',
  book: '<svg viewBox="0 0 24 24"><path d="M4 4h6c1.1 0 2 .9 2 2v14c0-.55-.45-1-1-1H4V4zm16 0h-6c-1.1 0-2 .9-2 2v14c0-.55.45-1 1-1h7V4z"/></svg>',
  doc: '<svg viewBox="0 0 24 24"><path d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm-1 2l5 5h-5V4zM6 20V4h6v6h6v10H6z"/></svg>',
  chart: '<svg viewBox="0 0 24 24"><path d="M3 13h4v8H3v-8zm7-10h4v18h-4V3zm7 6h4v12h-4V9z"/></svg>',
  settings: '<svg viewBox="0 0 24 24"><path d="M19.14 12.94c.04-.31.06-.63.06-.94 0-.31-.02-.63-.06-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.04.31-.06.63-.06.94s.02.63.06.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"/></svg>',
  
  // Learning
  target: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="12" cy="12" r="6" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="12" cy="12" r="2"/></svg>',
  brain: '<svg viewBox="0 0 24 24"><path d="M12 2C9.5 2 7.5 4 7.5 6.5c0 .5.1 1 .2 1.5C6.1 8.5 5 10 5 12c0 1.5.7 2.9 1.8 3.8-.1.4-.2.8-.2 1.2 0 2.2 1.8 4 4 4h2.8c2.2 0 4-1.8 4-4 0-.4-.1-.8-.2-1.2 1.1-.9 1.8-2.3 1.8-3.8 0-2-1.1-3.5-2.7-4 .1-.5.2-1 .2-1.5C16.5 4 14.5 2 12 2z"/></svg>',
  trophy: '<svg viewBox="0 0 24 24"><path d="M19 5h-2V3H7v2H5c-1.1 0-2 .9-2 2v1c0 2.55 1.92 4.63 4.39 4.94.63 1.5 1.98 2.63 3.61 2.96V19H8v2h8v-2h-3v-3.1c1.63-.33 2.98-1.46 3.61-2.96C19.08 12.63 21 10.55 21 8V7c0-1.1-.9-2-2-2zM5 8V7h2v3.82C5.84 10.4 5 9.3 5 8zm14 0c0 1.3-.84 2.4-2 2.82V7h2v1z"/></svg>',
  star: '<svg viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>',
  flame: '<svg viewBox="0 0 24 24"><path d="M12 23c-3.9 0-7-3.1-7-7 0-2.1 1.1-4.5 2.5-6.3.4-.5 1.2-.4 1.5.1.2.3.2.7 0 1-.9 1.3-1.5 2.9-1.5 4.2 0 2.5 2 4.5 4.5 4.5s4.5-2 4.5-4.5c0-2.1-1.5-4.5-3.5-6.5L12 8l-1.5.5c-.5.2-1-.2-1-.7 0-.3.1-.5.3-.7C11.3 5.5 13 3 13 1c0-.6.4-1 1-1s1 .4 1 1c0 2.2-.9 4.4-2.3 6.2 2.3 2.2 4.3 5.2 4.3 8.8 0 3.9-3.1 7-5 7z"/></svg>',
  
  // Actions
  play: '<svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>',
  pause: '<svg viewBox="0 0 24 24"><path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/></svg>',
  refresh: '<svg viewBox="0 0 24 24"><path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"/></svg>',
  check: '<svg viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>',
  close: '<svg viewBox="0 0 24 24"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>',
  
  // Status
  lock: '<svg viewBox="0 0 24 24"><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"/></svg>',
  unlock: '<svg viewBox="0 0 24 24"><path d="M12 17c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm6-9h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6h1.9c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm0 12H6V10h12v10z"/></svg>',
  gift: '<svg viewBox="0 0 24 24"><path d="M20 6h-2.18c.11-.31.18-.65.18-1 0-1.66-1.34-3-3-3-1.05 0-1.96.54-2.5 1.35l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-5-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm11 15H4v-2h16v2zm0-5H4V8h5.08L7 10.83 8.62 12 11 8.76l1-1.36 1 1.36L15.38 12 17 10.83 14.92 8H20v6z"/></svg>',
  sparkle: '<svg viewBox="0 0 24 24"><path d="M12 2L9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61z"/></svg>',
  
  // Media
  speaker: '<svg viewBox="0 0 24 24"><path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/></svg>',
  timer: '<svg viewBox="0 0 24 24"><path d="M15 1H9v2h6V1zm-4 13h2V8h-2v6zm8.03-6.61l1.42-1.42c-.43-.51-.9-.99-1.41-1.41l-1.42 1.42C16.07 4.74 14.12 4 12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9 9-4.03 9-9c0-2.12-.74-4.07-1.97-5.61zM12 20c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z"/></svg>',
  
  // Tiers
  bronze: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" stroke-width="2"/><text x="12" y="16" text-anchor="middle" font-size="10" font-weight="600">3</text></svg>',
  silver: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" stroke-width="2"/><text x="12" y="16" text-anchor="middle" font-size="10" font-weight="600">2</text></svg>',
  gold: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" stroke-width="2"/><text x="12" y="16" text-anchor="middle" font-size="10" font-weight="600">1</text></svg>',
  diamond: '<svg viewBox="0 0 24 24"><path d="M12 2L2 9l10 13 10-13-10-7zM12 5.5L18.5 9 12 19 5.5 9 12 5.5z"/></svg>',
  
  // Categories
  vocab: '<svg viewBox="0 0 24 24"><path d="M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v2h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z"/></svg>',
  kanji: '<svg viewBox="0 0 24 24"><path d="M5 4v3h5.5v12h3V7H19V4H5z"/></svg>',
  grammar: '<svg viewBox="0 0 24 24"><path d="M14 17H4v2h10v-2zm6-8H4v2h16V9zM4 15h16v-2H4v2zM4 5v2h16V5H4z"/></svg>',
  
  // Misc  
  fuji: '<svg viewBox="0 0 24 24"><path d="M12 4L2 20h20L12 4zm0 4l6 10H6l6-10z"/><path d="M12 4L8 10h8L12 4z" fill="white" opacity="0.5"/></svg>',
  globe: '<svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></svg>',
  phone: '<svg viewBox="0 0 24 24"><path d="M15.5 1h-8C6.12 1 5 2.12 5 3.5v17C5 21.88 6.12 23 7.5 23h8c1.38 0 2.5-1.12 2.5-2.5v-17C18 2.12 16.88 1 15.5 1zm-4 21c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm4.5-4H7V4h9v14z"/></svg>',
  pencil: '<svg viewBox="0 0 24 24"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/></svg>',
  arrowRight: '<svg viewBox="0 0 24 24"><path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/></svg>',
  arrowLeft: '<svg viewBox="0 0 24 24"><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/></svg>'
};

function sfIcon(name, className = '') {
  const svg = SF_ICONS[name] || SF_ICONS.star;
  return `<span class="sf-icon ${className}">${svg}</span>`;
}

// ========== AMOEBA AI ICON ==========
function getAmoebaIcon(size = 'normal') {
  const sizeClass = size === 'large' ? 'large' : size === 'xlarge' ? 'xlarge' : '';
  return `<span class="ai-amoeba-icon ${sizeClass}"><svg viewBox="0 0 100 100">
    <ellipse class="amoeba-glow" cx="50" cy="50" rx="42" ry="42"/>
    <path class="amoeba-body" d="M50,15 C70,10 90,30 85,50 C90,70 70,90 50,85 C30,90 10,70 15,50 C10,30 30,10 50,15"/>
    <circle class="amoeba-core" cx="50" cy="50" r="12"/>
    <circle cx="42" cy="45" r="3" fill="rgba(255,255,255,0.6)"/>
  </svg></span>`;
}

// ========== DATA REGISTRY ==========
// Initialize with pre-loaded data if available, otherwise empty for lazy loading
const DATA = {
  N5: { 
    vocab: typeof N5_VOCAB !== 'undefined' ? N5_VOCAB : [], 
    kanji: typeof N5_KANJI !== 'undefined' ? N5_KANJI : [], 
    grammar: typeof N5_GRAMMAR !== 'undefined' ? N5_GRAMMAR : [],
    loaded: typeof N5_VOCAB !== 'undefined'
  },
  N4: { 
    vocab: typeof N4_VOCAB !== 'undefined' ? N4_VOCAB : [], 
    kanji: typeof N4_KANJI !== 'undefined' ? N4_KANJI : [], 
    grammar: typeof N4_GRAMMAR !== 'undefined' ? N4_GRAMMAR : [],
    loaded: typeof N4_VOCAB !== 'undefined'
  },
  N3: { 
    vocab: typeof N3_VOCAB !== 'undefined' ? N3_VOCAB : [], 
    kanji: typeof N3_KANJI !== 'undefined' ? N3_KANJI : [], 
    grammar: typeof N3_GRAMMAR !== 'undefined' ? N3_GRAMMAR : [],
    loaded: typeof N3_VOCAB !== 'undefined'
  },
  N2: { 
    vocab: typeof N2_VOCAB !== 'undefined' ? N2_VOCAB : [], 
    kanji: typeof N2_KANJI !== 'undefined' ? N2_KANJI : [], 
    grammar: typeof N2_GRAMMAR !== 'undefined' ? N2_GRAMMAR : [],
    loaded: typeof N2_VOCAB !== 'undefined'
  },
  N1: { 
    vocab: typeof N1_VOCAB !== 'undefined' ? N1_VOCAB : [], 
    kanji: typeof N1_KANJI !== 'undefined' ? N1_KANJI : [], 
    grammar: typeof N1_GRAMMAR !== 'undefined' ? N1_GRAMMAR : [],
    loaded: typeof N1_VOCAB !== 'undefined'
  }
};

// MOCK_DATA is defined by mock.js when loaded (on window object)

// Loading state
let loadingData = {};

// Load script dynamically
function loadScript(src) {
  return new Promise((resolve, reject) => {
    if (document.querySelector(`script[src="${src}"]`)) {
      resolve();
      return;
    }
    const script = document.createElement('script');
    script.src = src;
    script.onload = resolve;
    script.onerror = reject;
    document.head.appendChild(script);
  });
}

// Load Drill data for a level
async function loadDrillData(level) {
  if (DATA[level].loaded) return true;
  if (loadingData[`drill_${level}`]) return loadingData[`drill_${level}`];
  
  const lvl = level.toLowerCase();
  loadingData[`drill_${level}`] = (async () => {
    try {
      await Promise.all([
        loadScript(`data/${lvl}/vocab.js`),
        loadScript(`data/${lvl}/kanji.js`),
        loadScript(`data/${lvl}/grammar.js`)
      ]);
      
      // Map loaded data
      const vocabVar = `${level}_VOCAB`;
      const kanjiVar = `${level}_KANJI`;
      const grammarVar = `${level}_GRAMMAR`;
      
      if (typeof window[vocabVar] !== 'undefined') DATA[level].vocab = window[vocabVar];
      if (typeof window[kanjiVar] !== 'undefined') DATA[level].kanji = window[kanjiVar];
      if (typeof window[grammarVar] !== 'undefined') DATA[level].grammar = window[grammarVar];
      
      DATA[level].loaded = true;
      
      // 学習済み漢字セットを更新
      updateLearnedKanjiSet(level);
      
      console.log(`Drill data loaded: ${level}`);
      return true;
    } catch (e) {
      console.error(`Failed to load drill data for ${level}:`, e);
      return false;
    }
  })();
  
  return loadingData[`drill_${level}`];
}

// Load Mock data for a level
async function loadMockData(level) {
  // Check if already loaded (mock.js sets MOCK_DATA directly)
  if (typeof window.MOCK_DATA !== 'undefined' && window.MOCK_DATA[level] && window.MOCK_DATA[level].sets && Object.keys(window.MOCK_DATA[level].sets).length > 0) {
    return true;
  }
  if (loadingData[`mock_${level}`]) return loadingData[`mock_${level}`];
  
  const lvl = level.toLowerCase();
  loadingData[`mock_${level}`] = (async () => {
    try {
      await loadScript(`data/mock/${lvl}/mock.js`);
      
      // Verify data was loaded
      if (typeof window.MOCK_DATA !== 'undefined' && window.MOCK_DATA[level] && window.MOCK_DATA[level].sets) {
        console.log(`Mock data loaded: ${level} (${window.MOCK_DATA[level].info?.totalSets || 0} sets)`);
        return true;
      }
      return false;
    } catch (e) {
      console.error(`Failed to load mock data for ${level}:`, e);
      return false;
    }
  })();
  
  return loadingData[`mock_${level}`];
}

// Show loading indicator
function showLoading(message = 'Loading...') {
  let loader = document.getElementById('dataLoader');
  if (!loader) {
    loader = document.createElement('div');
    loader.id = 'dataLoader';
    loader.style.cssText = 'position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(0,0,0,0.7);display:flex;align-items:center;justify-content:center;z-index:9999;';
    loader.innerHTML = `<div style="background:white;padding:24px 32px;border-radius:12px;text-align:center;">
      <div style="width:32px;height:32px;border:3px solid #eee;border-top-color:#E53935;border-radius:50%;animation:spin 1s linear infinite;margin:0 auto 12px;"></div>
      <div id="loadingText" style="font-size:14px;color:#333;">${message}</div>
    </div>`;
    document.body.appendChild(loader);
  } else {
    loader.style.display = 'flex';
    document.getElementById('loadingText').textContent = message;
  }
}

function hideLoading() {
  const loader = document.getElementById('dataLoader');
  if (loader) loader.style.display = 'none';
}

// ========== STATE ==========
let state = { 
  level: 'N5', 
  category: 'vocab', 
  lang: 'en', 
  qCount: 22, 
  soundEnabled: true,
  learned: {}, 
  skills: {},  // Track 4 skills per item: {N5_V001_listening: true, ...}
  mistakes: {}, 
  streak: 0, 
  lastStudy: null, 
  totalCorrect: 0, 
  totalAnswered: 0,
  // Last session tracking for "Continue" feature
  lastSession: null, // { level: 'N5', unit: 1, category: 'vocab', timestamp: Date }
  // Plan System (synced from Firestore via Stripe Webhook)
  plan: null,           // 'basic', 'standard', 'premium'
  billing: null,        // 'monthly', 'annual'
  planExpiry: null,     // ISO date string (currentPeriodEnd)
  isTrialing: false,    // True during trial period
  trialEndDate: null,   // ISO date string
  isCancelled: false,   // True if subscription cancelled (may still have access)
  isExpiredUser: false, // True if subscription expired (no trial on re-subscribe)
  previousPlan: null,   // Previous plan before cancellation
  paymentFailed: false, // True if payment failed
  lastPaymentError: null,
  stripeCustomerId: null,
  stripeSubscriptionId: null,
  // FREE CAMPAIGN
  freeCampaign: false,
  freeCampaignEnd: null,
  planStatus: null,
  createdAt: null,
  // XP & Progress
  xp: 0,
  // Pass Report
  passReportSubmitted: false,
  passBonusExpiry: null,
  // PWA
  pwaDismissed: false,
  onboardingComplete: false,
  // SRS (Spaced Repetition System)
  srs: {}, // { "N5_vocab_V0001": { interval, ease, nextReview, reviewCount, lastReview }, ... }
  // AI Coach System
  jlptExamDate: null,  // JLPT試験日 (ISO date string)
  aiCoachMessage: null, // キャッシュされたAIコーチメッセージ
  aiCoachTimestamp: null // 最後にメッセージを生成した時刻
};
let session = { mode: null, questions: [], current: 0, correct: 0, wrong: 0, startTime: null, answers: [], currentItem: null, currentSkillIndex: 0 };
let currentWord = '';
let timerInterval = null;
let deferredPrompt = null; // PWA install prompt

// ========== NAVIGATION ==========
function goHome() {
  // Only confirm if actively in a drill with progress
  const quizActive = document.getElementById('screen-quiz').classList.contains('active');
  const mockQActive = document.getElementById('screen-mock-q').classList.contains('active');
  
  if ((quizActive && currentQuestionIndex > 0) || mockQActive) {
    if (!confirm('Leave drill and go home?')) return;
  }
  showScreen('drill');
}

// Hide app loading overlay with smooth fade
function hideAppLoadingOverlay() {
  const overlay = document.getElementById('app-loading-overlay');
  if (overlay) {
    overlay.style.opacity = '0';
    overlay.style.pointerEvents = 'none';
    setTimeout(() => {
      overlay.style.display = 'none';
      if (overlay.parentNode) overlay.remove();
    }, 300);
  }
}

let currentScreenId = 'drill'; // Track current screen

function showScreen(id) {
  // Skip if already on the same screen
  if (id === currentScreenId) return;
  currentScreenId = id;
  
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  const targetScreen = document.getElementById('screen-' + id);
  if (targetScreen) {
    targetScreen.classList.add('active');
  }
  document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.toggle('active', btn.dataset.screen === id));
  // Update footer nav (90-point dashboard)
  document.querySelectorAll('.footer-btn-90').forEach(btn => btn.classList.toggle('active', btn.dataset.screen === id));
  if (id === 'drill') updateDrillScreen();
  if (id === 'mock') updateMockScreen();
  if (id === 'ai') updateAIScreen();
  if (id === 'talk') initTalkScreen();
  if (id === 'settings') updateSettingsUI();
  
  // Track screen view
  FujisanAnalytics.trackScreenView(id);
}

function updateAIScreen() {
  // Check if user has premium plan OR is in trial period (trial = all features)
  const hasPremium = state.plan === 'premium' || isInTrialPeriod();
  const aiLocked = document.getElementById('aiLocked');
  const aiUnlocked = document.getElementById('aiUnlocked');
  
  if (aiLocked && aiUnlocked) {
    aiLocked.style.display = hasPremium ? 'none' : 'block';
    aiUnlocked.style.display = hasPremium ? 'block' : 'none';
  }
}

function updateDrillScreen() {
  updateDrillCounts();
  updateDashboardUnitGrid();
  updateDrillColors();
  updateHabitTracker();
  updateSimpleDashboard(); // 新しいシンプルダッシュボード更新
  syncLangSwiper(); // 言語スワイパー同期
  checkFeedbackSubmitted(); // フィードバック送信済みチェック
  
  // Update level selector buttons
  document.querySelectorAll('.level-select-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.level === state.level);
  });
  
  // Update category button selection state
  document.querySelectorAll('.category-btn').forEach(btn => {
    btn.classList.toggle('selected', btn.dataset.cat === state.category);
  });
}

// Simple Dashboard Progress Update (案A)
function updateSimpleDashboard() {
  const level = state.level;
  const d = DATA[level];
  if (!d) return;
  
  // Level colors
  const levelColors = { N5: '#34c759', N4: '#007aff', N3: '#af52de', N2: '#1e3a5f', N1: '#ff3b30' };
  const levelColor = levelColors[level] || '#007aff';
  
  // Apply level color as CSS variable to dashboard
  const dashboard = document.querySelector('.dashboard-90');
  if (dashboard) {
    dashboard.style.setProperty('--level-color', levelColor);
  }
  
  // Update level mini buttons
  document.querySelectorAll('.level-mini-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.level === level);
  });
  
  // Calculate progress per category
  const categories = ['vocab', 'kanji', 'grammar'];
  let totalMastered = 0;
  let totalItems = 0;
  let categoryProgress = {};
  
  categories.forEach(cat => {
    const items = d[cat] || [];
    let mastered = 0;
    items.forEach(item => {
      const baseKey = `${level}_${item.id}`;
      const allComplete = SKILL_TYPES.every(skill => state.skills && state.skills[`${baseKey}_${skill}`]);
      if (allComplete) mastered++;
    });
    
    totalMastered += mastered;
    totalItems += items.length;
    categoryProgress[cat] = { mastered, total: items.length, percent: items.length > 0 ? Math.round((mastered / items.length) * 100) : 0 };
    
    // Update category link progress
    const progressEl = document.getElementById(`${cat}-progress`);
    if (progressEl) {
      progressEl.textContent = `${categoryProgress[cat].percent}%`;
    }
  });
  
  // Update overall progress - now in units format
  const overallPercent = totalItems > 0 ? Math.round((totalMastered / totalItems) * 100) : 0;
  
  // Calculate completed units
  const allItems = [...(d.vocab || []), ...(d.kanji || []), ...(d.grammar || [])];
  const totalUnits = Math.ceil(allItems.length / ITEMS_PER_UNIT);
  let completedUnits = 0;
  
  for (let u = 0; u < totalUnits; u++) {
    const unitStart = u * ITEMS_PER_UNIT;
    const unitEnd = Math.min(unitStart + ITEMS_PER_UNIT, allItems.length);
    const unitItems = allItems.slice(unitStart, unitEnd);
    
    let unitMastered = 0;
    unitItems.forEach(item => {
      const baseKey = `${level}_${item.id}`;
      const allComplete = SKILL_TYPES.every(skill => state.skills && state.skills[`${baseKey}_${skill}`]);
      if (allComplete) unitMastered++;
    });
    
    if (unitMastered === unitItems.length) completedUnits++;
  }
  
  const levelEl = document.getElementById('progress-level');
  const percentEl = document.getElementById('progress-percent');
  const barEl = document.getElementById('progress-bar-fill');
  const unitGridCountEl = document.getElementById('unit-grid-count');
  
  if (levelEl) levelEl.textContent = level;
  if (percentEl) percentEl.textContent = `${completedUnits}/${totalUnits} units (${overallPercent}%)`;
  if (barEl) barEl.style.width = `${overallPercent}%`;
  if (unitGridCountEl) unitGridCountEl.textContent = `${completedUnits}/${totalUnits}`;
  
  // Update AI greeting (90-point version - combined with recommendation)
  updateAIGreeting90(categoryProgress, level);
  
  // Update habit tracker
  updateHabitTracker90();
  
  // Update footer nav active state
  document.querySelectorAll('.footer-btn-90').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.screen === 'drill');
  });
}

// AI Greeting + Recommendation Combined (90-point version)
// Now uses the new AI Coach Message System
function updateAIGreeting90(categoryProgress, level) {
  // Use the new AI Coach system
  updateAICoachMessage();
}

// Show level info in AI card when level changes
function showLevelInfoInCard(level) {
  const greetingEl = document.getElementById('ai-greeting-text');
  const titleEl = document.getElementById('ai-recommend-title');
  const metaEl = document.getElementById('ai-recommend-meta');
  const btnEl = document.getElementById('ai-recommend-btn');
  
  if (!greetingEl || !titleEl || !metaEl) return;
  
  const info = JLPT_LEVEL_INFO[level];
  if (!info) return;
  
  // Get localized texts
  const officialDesc = getText('level_' + level.toLowerCase() + '_official') || '';
  const difficulty = getText('level_' + level.toLowerCase() + '_difficulty') || info.difficulty;
  
  // Update card with level info
  greetingEl.innerHTML = `<span style="color:${info.color}">${level}</span> - ${difficulty}`;
  titleEl.textContent = officialDesc;
  metaEl.textContent = `${info.vocab.toLocaleString()} vocab · ${info.kanji} kanji · ${info.grammar} grammar · ${info.units} units`;
  
  // Change button to "Start Learning"
  if (btnEl) {
    const startText = getText('level_detail_start') || 'Start Learning';
    btnEl.querySelector('span').textContent = startText;
    btnEl.dataset.action = 'level';
    btnEl.dataset.type = 'level';
  }
  
  // Reset to normal after 5 seconds
  setTimeout(() => {
    updateDrillScreen();
  }, 5000);
}

// Show unit info in AI card when unit is selected
async function showUnitInfoInCard(unitIndex) {
  const greetingEl = document.getElementById('ai-greeting-text');
  const titleEl = document.getElementById('ai-recommend-title');
  const metaEl = document.getElementById('ai-recommend-meta');
  const btnEl = document.getElementById('ai-recommend-btn');
  
  if (!greetingEl || !titleEl || !metaEl) return;
  
  const level = state.level;
  
  // Ensure data is loaded
  if (!DATA[level] || !DATA[level].vocab) {
    await loadDrillData(level);
  }
  
  const d = DATA[level];
  if (!d) return;
  
  const allItems = [...(d.vocab || []), ...(d.kanji || []), ...(d.grammar || [])];
  const unitStart = unitIndex * ITEMS_PER_UNIT;
  const unitEnd = Math.min(unitStart + ITEMS_PER_UNIT, allItems.length);
  const unitItems = allItems.slice(unitStart, unitEnd);
  
  // Categorize items
  const vocabItems = unitItems.filter(item => item.w);
  const kanjiItems = unitItems.filter(item => item.k && !item.w);
  const grammarItems = unitItems.filter(item => item.p);
  
  // Get sample words
  const samples = [];
  if (vocabItems.length > 0) samples.push(vocabItems.slice(0, 2).map(v => v.w).join(', '));
  if (kanjiItems.length > 0) samples.push(kanjiItems.slice(0, 2).map(k => k.k).join(', '));
  if (grammarItems.length > 0) samples.push(grammarItems[0]?.p || '');
  
  const levelColor = JLPT_LEVEL_INFO[level]?.color || '#007aff';
  
  // Update card with unit info
  greetingEl.innerHTML = `<span style="color:${levelColor}">${level} Unit ${unitIndex + 1}</span>`;
  titleEl.textContent = samples.join(' · ') || 'Ready to learn!';
  metaEl.textContent = `${vocabItems.length} vocab · ${kanjiItems.length} kanji · ${grammarItems.length} grammar`;
  
  // Update button - use dataset to pass unit info
  if (btnEl) {
    const startText = getText('unit_preview_start') || 'Start Unit';
    btnEl.querySelector('span').textContent = `${startText} ${unitIndex + 1}`;
    btnEl.dataset.action = 'unit';
    btnEl.dataset.type = 'unit';
    btnEl.dataset.unitIndex = unitIndex;
  }
}

// Habit Tracker 90-point version
function updateHabitTracker90() {
  const daysEl = document.getElementById('habit-week');
  const streakEl = document.getElementById('habit-streak');
  const streakBadgeEl = document.getElementById('streak-badge');
  const streakCountEl = document.getElementById('streak-count');
  if (!daysEl) return;
  
  const today = new Date();
  const dayNames = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
  const studyHistory = JSON.parse(localStorage.getItem('fujisan_study_history') || '{}');
  
  let html = '';
  let streak = calculateStreak(); // Use the unified streak calculation
  
  // Generate week days
  for (let i = 6; i >= 0; i--) {
    const d = new Date(today);
    d.setDate(d.getDate() - i);
    const dateKey = d.toISOString().split('T')[0];
    const isToday = i === 0;
    const hasStudied = studyHistory[dateKey] && studyHistory[dateKey].minutes > 0;
    
    html += `<div class="habit-day ${hasStudied ? 'active' : ''} ${isToday ? 'today' : ''}">${dayNames[d.getDay()]}</div>`;
  }
  
  daysEl.innerHTML = html;
  
  // Update streak text in habit tracker
  if (streakEl) {
    streakEl.textContent = `${streak} day streak`;
  }
  
  // Update streak badge in header
  if (streakBadgeEl && streakCountEl) {
    streakCountEl.textContent = streak;
    streakBadgeEl.dataset.streak = streak;
    // Show/hide based on streak
    if (streak > 0) {
      streakBadgeEl.classList.remove('hidden');
    } else {
      streakBadgeEl.classList.add('hidden');
    }
  }
}

// Start AI Recommendation
function startAIRecommendation() {
  const btnEl = document.getElementById('ai-recommend-btn');
  if (!btnEl) return;
  
  const action = btnEl.dataset.action || 'vocab';
  const type = btnEl.dataset.type || 'new';
  
  if (type === 'review') {
    startReview();
  } else if (type === 'unit') {
    // Start specific unit
    const unitIndex = parseInt(btnEl.dataset.unitIndex || '0');
    startUnitDrill(unitIndex);
  } else if (type === 'level') {
    // Level info was shown, just start with default category
    selectCategoryAndStart('vocab');
  } else {
    selectCategoryAndStart(action);
  }
}

// Progress encouraging messages (no emoji)
function getProgressMessage(percent, mastered, total) {
  if (percent === 0) {
    return { message: "Let's take the first step together." };
  } else if (percent < 10) {
    return { message: "Great start. Keep the momentum going." };
  } else if (percent < 25) {
    return { message: "You're building a solid foundation." };
  } else if (percent < 50) {
    return { message: "Real progress. You're getting there." };
  } else if (percent < 75) {
    return { message: "Halfway and beyond. Well done." };
  } else if (percent < 90) {
    return { message: "The finish line is in sight." };
  } else if (percent < 100) {
    return { message: "Almost there. One final push." };
  } else {
    return { message: "Mastered. Ready for the next level?" };
  }
}

function updateHabitTrackerCompact() {
  const weekEl = document.querySelector('.habit-week-compact');
  if (!weekEl) return;
  
  const today = new Date();
  const dayNames = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
  const studyHistory = JSON.parse(localStorage.getItem('fujisan_study_history') || '{}');
  
  let html = '';
  let streak = 0;
  
  for (let i = 6; i >= 0; i--) {
    const d = new Date(today);
    d.setDate(d.getDate() - i);
    const dateKey = d.toISOString().split('T')[0];
    const isToday = i === 0;
    const hasStudied = studyHistory[dateKey] && studyHistory[dateKey].minutes > 0;
    
    html += `<div class="habit-day ${hasStudied ? 'active' : ''} ${isToday ? 'today' : ''}">${dayNames[d.getDay()]}</div>`;
  }
  
  weekEl.innerHTML = html;
  
  // Calculate streak
  for (let i = 0; i <= 365; i++) {
    const d = new Date(today);
    d.setDate(d.getDate() - i);
    const dateKey = d.toISOString().split('T')[0];
    if (studyHistory[dateKey] && studyHistory[dateKey].minutes > 0) {
      streak++;
    } else if (i > 0) {
      break;
    }
  }
  
  // Update streak display (no emoji)
  const streakEl = document.querySelector('.habit-streak-compact');
  if (streakEl) {
    const todayKey = today.toISOString().split('T')[0];
    const todayMinutes = studyHistory[todayKey]?.minutes || 0;
    streakEl.innerHTML = `<span>${streak} day streak</span><span>${todayMinutes} min today</span>`;
  }
}

// S1: Auto-select first incomplete unit
function getFirstIncompleteUnit() {
  const level = state.level;
  const d = DATA[level];
  if (!d) return 0;
  
  const allItems = [...(d.vocab || []), ...(d.kanji || []), ...(d.grammar || [])];
  if (allItems.length === 0) return 0;
  
  const totalUnits = Math.ceil(allItems.length / ITEMS_PER_UNIT);
  
  for (let u = 0; u < totalUnits; u++) {
    const unitStart = u * ITEMS_PER_UNIT;
    const unitEnd = Math.min(unitStart + ITEMS_PER_UNIT, allItems.length);
    const unitItems = allItems.slice(unitStart, unitEnd);
    
    let unitMastered = 0;
    unitItems.forEach(item => {
      const baseKey = `${level}_${item.id}`;
      const allComplete = SKILL_TYPES.every(skill => state.skills && state.skills[`${baseKey}_${skill}`]);
      if (allComplete) unitMastered++;
    });
    
    if (unitMastered < unitItems.length) {
      return u; // Return first incomplete unit
    }
  }
  return 0; // All complete, return first
}

function updateMockScreen() {
  // Update hero level badge
  const heroLevel = document.getElementById('mock-hero-level');
  if (heroLevel) heroLevel.textContent = state.level;
  
  // Update level buttons
  document.querySelectorAll('#mock-level-row .level-mini-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.level === state.level);
  });
  
  // Apply level color
  updateMockLevelColor();
  
  // Sync language swiper
  syncLangSwiper();
  
  // Generate set list
  renderMockSetList();
  
  // Check feedback submitted
  checkFeedbackSubmitted();
}

function updateMockLevelColor() {
  const levelColors = {
    N5: { color: '#22c55e', shadow: 'rgba(34, 197, 94, 0.35)' },
    N4: { color: '#3b82f6', shadow: 'rgba(59, 130, 246, 0.35)' },
    N3: { color: '#a855f7', shadow: 'rgba(168, 85, 247, 0.35)' },
    N2: { color: '#f97316', shadow: 'rgba(249, 115, 22, 0.35)' },
    N1: { color: '#ef4444', shadow: 'rgba(239, 68, 68, 0.35)' }
  };
  const colors = levelColors[state.level] || levelColors.N5;
  const mockScreen = document.getElementById('screen-mock');
  if (mockScreen) {
    mockScreen.style.setProperty('--level-color', colors.color);
    mockScreen.style.setProperty('--level-shadow', colors.shadow);
  }
}

function renderMockSetList() {
  const container = document.getElementById('mock-set-list');
  if (!container) return;
  
  // Get mock scores from localStorage
  const mockScores = JSON.parse(localStorage.getItem('fujisan_mock_scores') || '{}');
  const levelScores = mockScores[state.level] || {};
  
  // Find first incomplete set
  let firstIncompleteSet = 1;
  for (let i = 1; i <= 20; i++) {
    if (!levelScores[i]) {
      firstIncompleteSet = i;
      break;
    }
    if (i === 20) firstIncompleteSet = 1; // All complete, start from 1
  }
  
  // Update hero subtitle
  const subtitle = document.getElementById('mock-hero-subtitle');
  if (subtitle) {
    subtitle.textContent = `Set ${firstIncompleteSet} • ${t('mock_select_set') || 'Select a set to start'}`;
  }
  
  // Store selected set
  state.mockSet = firstIncompleteSet;
  mockState.selectedSet = firstIncompleteSet;
  mockState.mode = 'full';
  
  // Generate set items
  let html = '';
  for (let i = 1; i <= 20; i++) {
    const scoreData = levelScores[i];
    const isCompleted = !!scoreData;
    const isActive = i === firstIncompleteSet;
    
    let meta = '';
    let scoreDisplay = '';
    
    if (isCompleted) {
      const date = scoreData.date ? new Date(scoreData.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' }) : '';
      meta = date + (scoreData.correct !== undefined ? ` • ${scoreData.correct}/${scoreData.total}` : '');
      scoreDisplay = scoreData.percent !== undefined ? `${scoreData.percent}%` : '--';
    } else {
      meta = t('mock_not_attempted') || 'Not attempted';
      scoreDisplay = '--';
    }
    
    html += `
      <div class="mock-set-item ${isCompleted ? 'completed' : ''} ${isActive ? 'active' : ''}" onclick="selectMockSetNew(${i}, this)">
        <div class="mock-set-num">${i}</div>
        <div class="mock-set-info">
          <div class="mock-set-title">Set ${i}</div>
          <div class="mock-set-meta">${meta}</div>
        </div>
        <div class="mock-set-score ${isCompleted ? '' : 'not-attempted'}">${scoreDisplay}</div>
      </div>
    `;
  }
  
  container.innerHTML = html;
}

function selectMockSetNew(setNum, element) {
  state.mockSet = setNum;
  mockState.selectedSet = setNum;
  mockState.mode = 'full'; // Default to full mode
  
  // Update active state
  document.querySelectorAll('.mock-set-item').forEach(item => {
    item.classList.remove('active');
  });
  if (element) element.classList.add('active');
  
  // Update hero subtitle
  const subtitle = document.getElementById('mock-hero-subtitle');
  if (subtitle) {
    subtitle.textContent = `Set ${setNum} • Tap Start to begin`;
  }
}

document.querySelectorAll('.nav-btn').forEach(btn => { 
  btn.onclick = (e) => {
    e.stopPropagation();
    console.log('Nav button clicked:', btn.dataset.screen);
    showScreen(btn.dataset.screen);
  };
});

// Level buttons in drill screen (level-select-btn)
document.querySelectorAll('.level-select-btn').forEach(btn => {
  btn.onclick = function() {
    const level = this.dataset.level;
    if (!canAccessLevel(level)) {
      const requiredPlan = (level === 'N2' || level === 'N1') ? 'Premium' : 'Basic';
      showUpgradeModal('level', requiredPlan);
      return;
    }
    document.querySelectorAll('.level-select-btn').forEach(b => b.classList.remove('active'));
    this.classList.add('active');
    state.level = level;
    saveState();
    updateDrillScreen();
  };
});

// Level mini buttons (90-point dashboard + mock screen)
document.querySelectorAll('.level-mini-btn').forEach(btn => {
  btn.onclick = function() {
    const level = this.dataset.level;
    if (!canAccessLevel(level)) {
      const requiredPlan = (level === 'N2' || level === 'N1') ? 'Premium' : 'Basic';
      showUpgradeModal('level', requiredPlan);
      return;
    }
    document.querySelectorAll('.level-mini-btn').forEach(b => b.classList.remove('active'));
    this.classList.add('active');
    state.level = level;
    saveState();
    updateDrillScreen();
    updateMockScreen();
    // Show level info in AI card
    showLevelInfoInCard(level);
  };
});

document.querySelectorAll('.level-btn').forEach(btn => {
  btn.onclick = function() {
    const level = this.dataset.level;
    if (!canAccessLevel(level)) {
      const requiredPlan = (level === 'N2' || level === 'N1') ? 'Premium' : 'Basic';
      showUpgradeModal('level', requiredPlan);
      return;
    }
    this.parentElement.querySelectorAll('.level-btn, .level-select-btn').forEach(b => b.classList.remove('active'));
    this.classList.add('active');
    state.level = level;
    updateDrillCounts();
    if (this.parentElement.id === 'mock-levels') updateMockScreen();
    saveState();
  };
});

// ========== DRILL SCREEN ==========
function selectCategoryAndStart(cat) {
  state.category = cat;
  saveState();
  
  // Update category button selection state
  document.querySelectorAll('.category-btn').forEach(btn => {
    btn.classList.toggle('selected', btn.dataset.cat === cat);
  });
  
  startDrill();
}

function updateDrillColors() {
  // Level colors for UI elements
  const levelColors = { N5: '#34c759', N4: '#007aff', N3: '#af52de', N2: '#1e3a5f', N1: '#ff3b30' };
  const levelLightColors = { N5: 'rgba(52, 199, 89, 0.1)', N4: 'rgba(0, 122, 255, 0.1)', N3: 'rgba(175, 82, 222, 0.1)', N2: 'rgba(30, 58, 95, 0.1)', N1: 'rgba(255, 59, 48, 0.1)' };
  const levelShadowColors = { N5: 'rgba(52, 199, 89, 0.3)', N4: 'rgba(0, 122, 255, 0.3)', N3: 'rgba(175, 82, 222, 0.3)', N2: 'rgba(30, 58, 95, 0.3)', N1: 'rgba(255, 59, 48, 0.3)' };
  
  const currentColor = levelColors[state.level] || levelColors.N5;
  const currentLight = levelLightColors[state.level] || levelLightColors.N5;
  const currentShadow = levelShadowColors[state.level] || levelShadowColors.N5;
  
  // Set CSS variables
  document.documentElement.style.setProperty('--level-color', currentColor);
  document.documentElement.style.setProperty('--level-light', currentLight);
  document.documentElement.style.setProperty('--level-shadow', currentShadow);
}

function updateReviewHeaderButton() {
  const btn = document.getElementById('review-header-btn');
  const countEl = document.getElementById('review-header-count');
  if (!btn) return;
  
  const categoryKey = getCategoryKey();
  const mistakeCount = (state.mistakes && state.mistakes[categoryKey]) ? state.mistakes[categoryKey].length : 0;
  
  // Get SRS due count for current level/category
  const srsDueCount = getSrsDueCount();
  const totalCount = Math.max(mistakeCount, srsDueCount);
  
  if (totalCount > 0 && session.mode !== 'review') {
    btn.style.display = 'block';
    if (countEl) {
      countEl.textContent = totalCount;
      // Highlight if SRS items are due
      if (srsDueCount > 0) {
        countEl.style.background = '#ff9500'; // Orange for SRS due
        countEl.title = `${srsDueCount} items due for spaced review`;
      } else {
        countEl.style.background = '#ff3b30'; // Red for mistakes
        countEl.title = `${mistakeCount} mistakes to review`;
      }
    }
  } else {
    btn.style.display = 'none';
  }
}

// Alias for updateDrillScreen (for backward compatibility)
function updateDashboard() {
  updateDrillScreen();
}

function updateDashboardUnitGrid() {
  const grid = document.getElementById('unit-grid');
  if (!grid) return;
  
  const level = state.level;
  const d = DATA[level];
  if (!d) return;
  
  const allItems = [...(d.vocab || []), ...(d.kanji || []), ...(d.grammar || [])];
  if (allItems.length === 0) {
    grid.innerHTML = '<div style="color:#999;font-size:12px;padding:8px;">Loading...</div>';
    return;
  }
  
  const totalUnits = Math.ceil(allItems.length / ITEMS_PER_UNIT);
  
  // Level colors
  const levelColors = { N5: '#34c759', N4: '#007aff', N3: '#af52de', N2: '#1e3a5f', N1: '#ff3b30' };
  const levelColor = levelColors[level] || '#007aff';
  
  grid.dataset.level = level;
  grid.innerHTML = '';
  
  for (let u = 0; u < totalUnits; u++) {
    const unitStart = u * ITEMS_PER_UNIT;
    const unitEnd = Math.min(unitStart + ITEMS_PER_UNIT, allItems.length);
    const unitItems = allItems.slice(unitStart, unitEnd);
    
    let unitMastered = 0;
    unitItems.forEach(item => {
      const baseKey = `${level}_${item.id}`;
      const allComplete = SKILL_TYPES.every(skill => state.skills && state.skills[`${baseKey}_${skill}`]);
      if (allComplete) unitMastered++;
    });
    
    const percent = Math.round((unitMastered / unitItems.length) * 100);
    
    const cell = document.createElement('div');
    cell.className = 'unit-cell';
    
    if (percent === 100) {
      // Complete: solid color with checkmark
      cell.classList.add('complete');
      cell.style.background = levelColor;
    } else if (percent > 0) {
      // In progress: gradient fill from bottom based on percent
      cell.classList.add('in-progress');
      cell.style.background = `linear-gradient(to top, ${levelColor}40 ${percent}%, var(--bg) ${percent}%)`;
      cell.style.borderColor = levelColor;
      cell.innerHTML = `<span class="unit-num">${u + 1}</span><span class="unit-percent">${percent}%</span>`;
    } else {
      // Available: no progress
      cell.classList.add('available');
      cell.textContent = u + 1;
    }
    
    cell.onclick = () => showUnitInfoInCard(u);
    grid.appendChild(cell);
  }
}

function updateProgressStats() {
  // Get today's stats from localStorage
  const today = new Date().toISOString().split('T')[0];
  const statsKey = `fujisan_stats_${today}`;
  const todayStats = JSON.parse(localStorage.getItem(statsKey) || '{"quizzes":0,"correct":0,"total":0}');
  
  // Update UI
  const quizzesEl = document.getElementById('statDrillzesToday');
  const accuracyEl = document.getElementById('statCorrectRate');
  const streakEl = document.getElementById('statStreak');
  
  if (quizzesEl) quizzesEl.textContent = todayStats.quizzes || 0;
  if (accuracyEl) {
    const rate = todayStats.total > 0 ? Math.round((todayStats.correct / todayStats.total) * 100) : 0;
    accuracyEl.textContent = todayStats.total > 0 ? rate + '%' : '-%';
  }
  if (streakEl) streakEl.textContent = calculateStreak();
}

function calculateStreak() {
  // Calculate consecutive days of study
  let streak = 0;
  const today = new Date();
  
  for (let i = 0; i < 365; i++) {
    const checkDate = new Date(today);
    checkDate.setDate(today.getDate() - i);
    const dateStr = checkDate.toISOString().split('T')[0];
    const stats = JSON.parse(localStorage.getItem(`fujisan_stats_${dateStr}`) || '{}');
    
    if (stats.quizzes && stats.quizzes > 0) {
      streak++;
    } else if (i > 0) {
      break; // Break streak if not today
    }
  }
  
  return streak;
}

// ========== AI COACH MESSAGE SYSTEM ==========
// Generates personalized motivational messages based on user data

async function generateAICoachMessage() {
  const streak = calculateStreak();
  const level = state.level;
  const lang = state.lang || 'en';
  
  // Get today's stats
  const today = new Date().toISOString().split('T')[0];
  const todayStats = JSON.parse(localStorage.getItem(`fujisan_stats_${today}`) || '{}');
  const studiedToday = todayStats.quizzes > 0;
  
  // Get overall progress for current level
  const d = DATA[level];
  if (!d) return getDefaultCoachMessage(streak, level, lang);
  
  const allItems = [...(d.vocab || []), ...(d.kanji || []), ...(d.grammar || [])];
  let masteredCount = 0;
  allItems.forEach(item => {
    const baseKey = `${level}_${item.id}`;
    const allComplete = SKILL_TYPES.every(skill => state.skills && state.skills[`${baseKey}_${skill}`]);
    if (allComplete) masteredCount++;
  });
  const progressPercent = allItems.length > 0 ? Math.round((masteredCount / allItems.length) * 100) : 0;
  
  // Get units info
  const totalUnits = Math.ceil(allItems.length / ITEMS_PER_UNIT);
  let completedUnits = 0;
  let currentUnit = 0;
  for (let u = 0; u < totalUnits; u++) {
    const unitStart = u * ITEMS_PER_UNIT;
    const unitEnd = Math.min(unitStart + ITEMS_PER_UNIT, allItems.length);
    const unitItems = allItems.slice(unitStart, unitEnd);
    let unitMastered = 0;
    unitItems.forEach(item => {
      const baseKey = `${level}_${item.id}`;
      const allComplete = SKILL_TYPES.every(skill => state.skills && state.skills[`${baseKey}_${skill}`]);
      if (allComplete) unitMastered++;
    });
    if (unitMastered === unitItems.length) {
      completedUnits++;
    } else if (unitMastered > 0 && currentUnit === 0) {
      currentUnit = u + 1;
    }
  }
  if (currentUnit === 0) currentUnit = completedUnits + 1;
  
  // Calculate days until JLPT exam
  let daysUntilExam = null;
  if (state.jlptExamDate) {
    const examDate = new Date(state.jlptExamDate);
    const now = new Date();
    daysUntilExam = Math.ceil((examDate - now) / (1000 * 60 * 60 * 24));
  }
  
  // Get category progress
  const categoryProgress = getCategoryProgress(level);
  const weakestCategory = Object.entries(categoryProgress)
    .filter(([_, data]) => data.total > 0)
    .sort((a, b) => a[1].percent - b[1].percent)[0];
  
  // Build context for AI
  const context = {
    streak,
    level,
    progressPercent,
    completedUnits,
    totalUnits,
    currentUnit,
    daysUntilExam,
    studiedToday,
    todayCorrect: todayStats.correct || 0,
    todayTotal: todayStats.total || 0,
    weakestCategory: weakestCategory ? weakestCategory[0] : null,
    weakestPercent: weakestCategory ? weakestCategory[1].percent : null
  };
  
  // Generate message locally (no API call for speed)
  return generateLocalCoachMessage(context, lang);
}

function generateLocalCoachMessage(ctx, lang) {
  const { streak, level, progressPercent, completedUnits, totalUnits, currentUnit, 
          daysUntilExam, studiedToday, todayCorrect, todayTotal, weakestCategory, weakestPercent } = ctx;
  
  // Message templates by language
  const templates = getCoachTemplates(lang);
  
  let greeting = '';
  let recommendation = '';
  let meta = '';
  
  // === GREETING (based on streak and study status) ===
  if (streak >= 30) {
    greeting = templates.streak30.replace('{streak}', streak);
  } else if (streak >= 7) {
    greeting = templates.streak7.replace('{streak}', streak);
  } else if (streak >= 3) {
    greeting = templates.streak3.replace('{streak}', streak);
  } else if (streak === 1 && studiedToday) {
    greeting = templates.streakStart;
  } else if (!studiedToday && streak === 0) {
    greeting = templates.comeBack;
  } else {
    greeting = templates.default;
  }
  
  // === RECOMMENDATION (based on progress and exam date) ===
  if (daysUntilExam !== null && daysUntilExam <= 30 && daysUntilExam > 0) {
    // Exam coming soon - urgent mode
    recommendation = templates.examSoon.replace('{days}', daysUntilExam);
    meta = templates.examMeta.replace('{level}', level);
  } else if (daysUntilExam !== null && daysUntilExam <= 90 && daysUntilExam > 30) {
    // Exam in 1-3 months
    recommendation = templates.examPrepare.replace('{days}', daysUntilExam);
    meta = templates.unitMeta.replace('{current}', currentUnit).replace('{total}', totalUnits);
  } else if (weakestCategory && weakestPercent < 50) {
    // Focus on weak area
    const catName = templates.categories[weakestCategory] || weakestCategory;
    recommendation = templates.focusWeak.replace('{category}', catName).replace('{percent}', weakestPercent);
    meta = templates.focusMeta;
  } else if (progressPercent < 30) {
    // Early stage - encourage progress
    recommendation = templates.keepGoing.replace('{unit}', currentUnit);
    meta = templates.progressMeta.replace('{percent}', progressPercent);
  } else if (progressPercent >= 80) {
    // Almost done!
    recommendation = templates.almostDone.replace('{percent}', progressPercent);
    meta = templates.finishMeta.replace('{remaining}', totalUnits - completedUnits);
  } else {
    // Normal progress
    recommendation = templates.continueUnit.replace('{unit}', currentUnit);
    meta = templates.progressMeta.replace('{percent}', progressPercent);
  }
  
  // Add today's accuracy if studied
  if (studiedToday && todayTotal >= 5) {
    const accuracy = Math.round((todayCorrect / todayTotal) * 100);
    if (accuracy >= 90) {
      greeting += ' ' + templates.excellentToday;
    } else if (accuracy >= 70) {
      greeting += ' ' + templates.goodToday;
    }
  }
  
  return { greeting, recommendation, meta };
}

function getCoachTemplates(lang) {
  const templates = {
    'en': {
      streak30: '🔥 {streak} days! Incredible dedication!',
      streak7: '🔥 {streak} day streak! Keep it up!',
      streak3: '{streak} days in a row! Nice momentum.',
      streakStart: 'Great start today!',
      comeBack: 'Ready to get back on track?',
      default: 'Let\'s make progress today.',
      examSoon: 'JLPT in {days} days. Focus time!',
      examPrepare: '{days} days until JLPT. You\'ve got this.',
      examMeta: 'Review {level} essentials',
      focusWeak: 'Let\'s strengthen {category} ({percent}%)',
      focusMeta: 'About 10 minutes',
      keepGoing: 'Continue Unit {unit}',
      progressMeta: '{percent}% complete',
      almostDone: '{percent}% mastered! Final push!',
      finishMeta: '{remaining} units to go',
      continueUnit: 'Unit {unit} awaits',
      unitMeta: 'Unit {current}/{total}',
      excellentToday: 'Excellent accuracy today! 🎯',
      goodToday: 'Good progress!',
      categories: { vocab: 'Vocabulary', kanji: 'Kanji', grammar: 'Grammar' }
    },
    'zh-TW': {
      streak30: '🔥 連續{streak}天！太厲害了！',
      streak7: '🔥 連續{streak}天！繼續保持！',
      streak3: '連續{streak}天！保持這個勢頭。',
      streakStart: '今天開始得很棒！',
      comeBack: '準備好回來學習了嗎？',
      default: '今天也一起進步吧。',
      examSoon: 'JLPT還有{days}天，衝刺！',
      examPrepare: '距離JLPT還有{days}天，加油！',
      examMeta: '複習{level}重點',
      focusWeak: '加強{category}（{percent}%）',
      focusMeta: '約10分鐘',
      keepGoing: '繼續第{unit}單元',
      progressMeta: '已完成{percent}%',
      almostDone: '已掌握{percent}%！最後衝刺！',
      finishMeta: '還剩{remaining}個單元',
      continueUnit: '第{unit}單元等著你',
      unitMeta: '單元{current}/{total}',
      excellentToday: '今天正確率超高！🎯',
      goodToday: '進步很大！',
      categories: { vocab: '單字', kanji: '漢字', grammar: '文法' }
    },
    'zh-CN': {
      streak30: '🔥 连续{streak}天！太厉害了！',
      streak7: '🔥 连续{streak}天！继续保持！',
      streak3: '连续{streak}天！保持这个势头。',
      streakStart: '今天开始得很棒！',
      comeBack: '准备好回来学习了吗？',
      default: '今天也一起进步吧。',
      examSoon: 'JLPT还有{days}天，冲刺！',
      examPrepare: '距离JLPT还有{days}天，加油！',
      examMeta: '复习{level}重点',
      focusWeak: '加强{category}（{percent}%）',
      focusMeta: '约10分钟',
      keepGoing: '继续第{unit}单元',
      progressMeta: '已完成{percent}%',
      almostDone: '已掌握{percent}%！最后冲刺！',
      finishMeta: '还剩{remaining}个单元',
      continueUnit: '第{unit}单元等着你',
      unitMeta: '单元{current}/{total}',
      excellentToday: '今天正确率超高！🎯',
      goodToday: '进步很大！',
      categories: { vocab: '词汇', kanji: '汉字', grammar: '语法' }
    },
    'ko': {
      streak30: '🔥 {streak}일 연속! 대단해요!',
      streak7: '🔥 {streak}일 연속! 계속 힘내세요!',
      streak3: '{streak}일 연속! 좋은 흐름이에요.',
      streakStart: '오늘 좋은 시작이에요!',
      comeBack: '다시 시작할 준비 됐나요?',
      default: '오늘도 함께 성장해요.',
      examSoon: 'JLPT {days}일 전. 집중!',
      examPrepare: 'JLPT까지 {days}일. 화이팅!',
      examMeta: '{level} 핵심 복습',
      focusWeak: '{category} 강화 ({percent}%)',
      focusMeta: '약 10분',
      keepGoing: '유닛 {unit} 계속하기',
      progressMeta: '{percent}% 완료',
      almostDone: '{percent}% 마스터! 마지막 스퍼트!',
      finishMeta: '{remaining}개 유닛 남음',
      continueUnit: '유닛 {unit} 시작',
      unitMeta: '유닛 {current}/{total}',
      excellentToday: '오늘 정답률 최고! 🎯',
      goodToday: '잘하고 있어요!',
      categories: { vocab: '어휘', kanji: '한자', grammar: '문법' }
    },
    'vi': {
      streak30: '🔥 {streak} ngày liên tục! Tuyệt vời!',
      streak7: '🔥 {streak} ngày liên tục! Tiếp tục nhé!',
      streak3: '{streak} ngày liên tục! Giữ vững nhịp độ.',
      streakStart: 'Khởi đầu tốt hôm nay!',
      comeBack: 'Sẵn sàng quay lại chưa?',
      default: 'Hôm nay cùng tiến bộ nhé.',
      examSoon: 'Còn {days} ngày đến JLPT. Tập trung!',
      examPrepare: 'Còn {days} ngày đến JLPT. Cố lên!',
      examMeta: 'Ôn tập {level}',
      focusWeak: 'Củng cố {category} ({percent}%)',
      focusMeta: 'Khoảng 10 phút',
      keepGoing: 'Tiếp tục Unit {unit}',
      progressMeta: 'Đã hoàn thành {percent}%',
      almostDone: 'Đã nắm {percent}%! Nước rút cuối!',
      finishMeta: 'Còn {remaining} unit',
      continueUnit: 'Unit {unit} đang chờ',
      unitMeta: 'Unit {current}/{total}',
      excellentToday: 'Độ chính xác hôm nay tuyệt vời! 🎯',
      goodToday: 'Tiến bộ tốt!',
      categories: { vocab: 'Từ vựng', kanji: 'Kanji', grammar: 'Ngữ pháp' }
    },
    'id': {
      streak30: '🔥 {streak} hari berturut! Luar biasa!',
      streak7: '🔥 {streak} hari berturut! Lanjutkan!',
      streak3: '{streak} hari berturut! Momentum bagus.',
      streakStart: 'Awal yang bagus hari ini!',
      comeBack: 'Siap kembali belajar?',
      default: 'Mari buat kemajuan hari ini.',
      examSoon: 'JLPT dalam {days} hari. Fokus!',
      examPrepare: '{days} hari menuju JLPT. Semangat!',
      examMeta: 'Review {level}',
      focusWeak: 'Perkuat {category} ({percent}%)',
      focusMeta: 'Sekitar 10 menit',
      keepGoing: 'Lanjutkan Unit {unit}',
      progressMeta: '{percent}% selesai',
      almostDone: '{percent}% dikuasai! Sedikit lagi!',
      finishMeta: '{remaining} unit tersisa',
      continueUnit: 'Unit {unit} menanti',
      unitMeta: 'Unit {current}/{total}',
      excellentToday: 'Akurasi hari ini sangat bagus! 🎯',
      goodToday: 'Kemajuan bagus!',
      categories: { vocab: 'Kosakata', kanji: 'Kanji', grammar: 'Tata bahasa' }
    },
    'es': {
      streak30: '🔥 ¡{streak} días! ¡Increíble dedicación!',
      streak7: '🔥 ¡{streak} días seguidos! ¡Sigue así!',
      streak3: '¡{streak} días seguidos! Buen ritmo.',
      streakStart: '¡Buen comienzo hoy!',
      comeBack: '¿Listo para volver?',
      default: 'Hagamos progreso hoy.',
      examSoon: 'JLPT en {days} días. ¡A enfocarse!',
      examPrepare: '{days} días para JLPT. ¡Tú puedes!',
      examMeta: 'Repasar {level}',
      focusWeak: 'Fortalecer {category} ({percent}%)',
      focusMeta: 'Unos 10 minutos',
      keepGoing: 'Continuar Unidad {unit}',
      progressMeta: '{percent}% completado',
      almostDone: '¡{percent}% dominado! ¡Último empujón!',
      finishMeta: '{remaining} unidades restantes',
      continueUnit: 'Unidad {unit} te espera',
      unitMeta: 'Unidad {current}/{total}',
      excellentToday: '¡Excelente precisión hoy! 🎯',
      goodToday: '¡Buen progreso!',
      categories: { vocab: 'Vocabulario', kanji: 'Kanji', grammar: 'Gramática' }
    },
    'pt': {
      streak30: '🔥 {streak} dias! Dedicação incrível!',
      streak7: '🔥 {streak} dias seguidos! Continue assim!',
      streak3: '{streak} dias seguidos! Bom ritmo.',
      streakStart: 'Ótimo começo hoje!',
      comeBack: 'Pronto para voltar?',
      default: 'Vamos progredir hoje.',
      examSoon: 'JLPT em {days} dias. Hora de focar!',
      examPrepare: '{days} dias para JLPT. Você consegue!',
      examMeta: 'Revisar {level}',
      focusWeak: 'Fortalecer {category} ({percent}%)',
      focusMeta: 'Cerca de 10 minutos',
      keepGoing: 'Continuar Unidade {unit}',
      progressMeta: '{percent}% completo',
      almostDone: '{percent}% dominado! Reta final!',
      finishMeta: '{remaining} unidades restantes',
      continueUnit: 'Unidade {unit} aguarda',
      unitMeta: 'Unidade {current}/{total}',
      excellentToday: 'Excelente precisão hoje! 🎯',
      goodToday: 'Bom progresso!',
      categories: { vocab: 'Vocabulário', kanji: 'Kanji', grammar: 'Gramática' }
    }
  };
  
  return templates[lang] || templates['en'];
}

function getDefaultCoachMessage(streak, level, lang) {
  const templates = getCoachTemplates(lang);
  return {
    greeting: streak > 0 ? templates.streak3.replace('{streak}', streak) : templates.default,
    recommendation: templates.keepGoing.replace('{unit}', '1'),
    meta: templates.progressMeta.replace('{percent}', '0')
  };
}

function getCategoryProgress(level) {
  const d = DATA[level];
  if (!d) return {};
  
  const progress = {};
  ['vocab', 'kanji', 'grammar'].forEach(cat => {
    const items = d[cat] || [];
    let mastered = 0;
    items.forEach(item => {
      const baseKey = `${level}_${item.id}`;
      const allComplete = SKILL_TYPES.every(skill => state.skills && state.skills[`${baseKey}_${skill}`]);
      if (allComplete) mastered++;
    });
    progress[cat] = {
      mastered,
      total: items.length,
      percent: items.length > 0 ? Math.round((mastered / items.length) * 100) : 0
    };
  });
  
  return progress;
}

// Update AI Coach message in the UI
async function updateAICoachMessage() {
  const greetingEl = document.getElementById('ai-greeting-text');
  const titleEl = document.getElementById('ai-recommend-title');
  const metaEl = document.getElementById('ai-recommend-meta');
  
  if (!greetingEl || !titleEl || !metaEl) return;
  
  try {
    const message = await generateAICoachMessage();
    greetingEl.textContent = message.greeting;
    titleEl.textContent = message.recommendation;
    metaEl.textContent = message.meta;
  } catch (e) {
    console.error('AI Coach message error:', e);
  }
}

function recordDrillActivity(correct) {
  const today = new Date().toISOString().split('T')[0];
  const statsKey = `fujisan_stats_${today}`;
  const stats = JSON.parse(localStorage.getItem(statsKey) || '{"quizzes":0,"correct":0,"total":0}');
  
  const wasFirstAnswerToday = stats.total === 0;
  
  stats.total++;
  if (correct) stats.correct++;
  stats.quizzes = Math.ceil(stats.total / 10); // Approximate quiz count
  
  localStorage.setItem(statsKey, JSON.stringify(stats));
  updateProgressStats();
  
  // Track daily study on first answer of the day
  if (wasFirstAnswerToday) {
    const streak = calculateStreak();
    FujisanAnalytics.trackDailyStudy(streak, stats.total);
    FujisanAnalytics.trackStreakMilestone(streak);
  }
}

function selectLevelFromDashboard(level) {
  const oldLevel = state.level;
  state.level = level;
  saveState();
  updateDashboard();
  updateDrillCounts();
  
  // Track level change
  if (oldLevel !== level) {
    FujisanAnalytics.trackLevelChange(oldLevel, level);
    FujisanAnalytics.setUserProperties({ user_level: level });
  }
  
  // Set level theme color on body
  document.body.setAttribute('data-theme', level);
  
  // Update all level buttons across screens
  document.querySelectorAll('.level-select-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.level === level);
  });
  document.querySelectorAll('.level-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.level === level);
  });
}

// Update set dropdown with completion status
function updateMockSetDropdown() {
  const select = document.getElementById('mockSetSelect');
  if (!select) return;
  
  const lang = state.lang || 'en';
  const texts = UI_TEXTS[lang] || UI_TEXTS['en'];
  
  // Get completed sets for current level
  const history = state.mockHistory || [];
  const completedSets = {};
  history.forEach(h => {
    if (h.level === state.level && h.setNumber) {
      // Keep the best score for each set
      if (!completedSets[h.setNumber] || h.score > completedSets[h.setNumber].score) {
        completedSets[h.setNumber] = { score: h.score, passed: h.passed };
      }
    }
  });
  
  // Update options
  for (let i = 1; i <= 20; i++) {
    const option = select.querySelector(`option[value="${i}"]`);
    if (option) {
      const completed = completedSets[i];
      if (completed) {
        const icon = completed.passed ? '✓' : '○';
        option.textContent = `Set ${i} ${icon} ${completed.score}%`;
        option.style.color = completed.passed ? '#34c759' : '#ff9500';
      } else {
        option.textContent = `Set ${i}`;
        option.style.color = '';
      }
    }
  }
  
  // Also update Random option
  const randomOption = select.querySelector('option[value="random"]');
  if (randomOption) {
    randomOption.textContent = texts.mock_random || '🎲 Random';
  }
}

// Update recent score display in compact Mock screen
function updateMockRecentScore() {
  const recentEl = document.getElementById('mockRecent');
  const scoreEl = document.getElementById('mockRecentScore');
  if (!recentEl || !scoreEl) return;
  
  const history = state.mockHistory || [];
  const levelHistory = history.filter(h => h.level === state.level);
  
  if (levelHistory.length > 0) {
    const lastTest = levelHistory[levelHistory.length - 1];
    const percentage = Math.round((lastTest.correct / lastTest.total) * 100);
    scoreEl.textContent = `${percentage}%`;
    scoreEl.style.color = percentage >= 60 ? 'var(--success)' : 'var(--error)';
    recentEl.style.display = 'flex';
  } else {
    recentEl.style.display = 'none';
  }
}

function updateMockHistory() {
  const tableEl = document.getElementById('mockHistoryTable');
  const summaryEl = document.getElementById('mockHistorySummary');
  if (!tableEl) return;
  
  const history = state.mockHistory || [];
  
  if (history.length === 0) {
    tableEl.innerHTML = '<div class="mock-history-empty">No tests taken yet. Start your first mock test!</div>';
    if (summaryEl) summaryEl.innerHTML = '';
    return;
  }
  
  // Build table
  let html = `
    <div class="mock-history-row header">
      <div>Date</div>
      <div>Level</div>
      <div>Score</div>
      <div></div>
    </div>
  `;
  
  // Show most recent 10
  const recentHistory = history.slice(-10).reverse();
  recentHistory.forEach(item => {
    const date = new Date(item.date);
    const dateStr = `${(date.getMonth()+1)}/${date.getDate()} ${date.getHours()}:${String(date.getMinutes()).padStart(2,'0')}`;
    const passIcon = item.passed ? '✓' : '✗';
    const passColor = item.passed ? 'color:var(--success)' : 'color:var(--primary)';
    
    html += `
      <div class="mock-history-row">
        <div class="mock-history-date">${dateStr}</div>
        <div class="mock-history-level">${item.level}</div>
        <div class="mock-history-score">${item.score}%</div>
        <div class="mock-history-pass" style="${passColor}">${passIcon}</div>
      </div>
    `;
  });
  
  tableEl.innerHTML = html;
  
  // Calculate summary
  if (summaryEl && history.length > 0) {
    const scores = history.map(h => h.score);
    const best = Math.max(...scores);
    const avg = Math.round(scores.reduce((a,b) => a+b, 0) / scores.length);
    
    summaryEl.innerHTML = `
      <div class="mock-history-stat">
        <div class="mock-history-stat-value">${best}%</div>
        <div class="mock-history-stat-label">Best</div>
      </div>
      <div class="mock-history-stat">
        <div class="mock-history-stat-value">${avg}%</div>
        <div class="mock-history-stat-label">Average</div>
      </div>
      <div class="mock-history-stat">
        <div class="mock-history-stat-value">${history.length}</div>
        <div class="mock-history-stat-label">Tests</div>
      </div>
    `;
  }
}

// ========== EXAM DATE & CURRICULUM ==========
function startExamSetupChat() {
  // Pre-populate AI chat with exam setup question
  const aiInput = document.getElementById('aiInput');
  const chatHistory = document.getElementById('aiChatHistory');
  
  if (chatHistory) {
    chatHistory.innerHTML = `
      <div class="ai-message assistant">
        <b>Let's plan your JLPT journey!</b><br><br>
        I'll help you create a personalized study schedule. First, tell me:<br><br>
        1️⃣ Which JLPT level are you targeting? (N5/N4/N3/N2/N1)<br>
        2️⃣ When is your exam date?<br><br>
        For example: "I'm taking N3 on July 6, 2025"
      </div>
    `;
  }
}

// Save exam date from AI chat
function setExamDate(level, dateString) {
  const examDate = new Date(dateString);
  if (isNaN(examDate.getTime())) {
    return false;
  }
  
  state.examLevel = level;
  state.examDate = examDate.toISOString();
  state.studyStartDate = new Date().toISOString();
  
  // Calculate daily target
  const d = DATA[level];
  const totalItems = d.vocab.length + d.kanji.length + d.grammar.length;
  const daysUntilExam = Math.ceil((examDate - new Date()) / (1000 * 60 * 60 * 24));
  state.dailyTarget = Math.ceil(totalItems / Math.max(daysUntilExam, 1));
  
  saveState();
  updateDashboard();
  
  return true;
}

// Track daily activity
function trackDailyActivity() {
  const today = new Date().toISOString().split('T')[0];
  if (!state.weeklyActivity) state.weeklyActivity = {};
  state.weeklyActivity[today] = (state.weeklyActivity[today] || 0) + 1;
  
  // Track today's XP
  if (!state.todayDate || state.todayDate !== today) {
    state.todayDate = today;
    state.todayXP = 0;
  }
  state.todayXP = (state.todayXP || 0) + 10;
  
  // Clean old data (keep only last 14 days)
  const cutoff = new Date();
  cutoff.setDate(cutoff.getDate() - 14);
  Object.keys(state.weeklyActivity).forEach(key => {
    if (new Date(key) < cutoff) delete state.weeklyActivity[key];
  });
  
  saveState();
}

function updateDrillCounts() {
  const d = DATA[state.level];
  if (!d) return;
  
  const vocabCount = d.vocab ? d.vocab.length : 0;
  const kanjiCount = d.kanji ? d.kanji.length : 0;
  const grammarCount = d.grammar ? d.grammar.length : 0;
  
  document.getElementById('cat-vocab-count')?.textContent && (document.getElementById('cat-vocab-count').textContent = vocabCount || '-');
  document.getElementById('cat-kanji-count')?.textContent && (document.getElementById('cat-kanji-count').textContent = kanjiCount || '-');
  document.getElementById('cat-grammar-count')?.textContent && (document.getElementById('cat-grammar-count').textContent = grammarCount || '-');
  
  // Update category names based on language
  updateCategoryNames();
  
  // Update review count with SRS info
  const categoryKey = getCategoryKey();
  const mistakeCount = (state.mistakes[categoryKey] || []).length;
  const srsDueCount = getSrsDueCount();
  const reviewCountEl = document.getElementById('review-count');
  if (reviewCountEl) {
    if (srsDueCount > 0) {
      reviewCountEl.innerHTML = `<span style="color:#ff9500;">📅 Due (${srsDueCount})</span>`;
    } else if (mistakeCount > 0) {
      reviewCountEl.textContent = `Mistakes (${mistakeCount})`;
    } else {
      reviewCountEl.textContent = `Review`;
    }
  }
  
  // Update SRS stats display if element exists
  updateSrsDisplay();
  
  // Update progress card
  updateProgressCard();
}

function updateCategoryNames() {
  const names = {
    en: { vocab: 'Vocab', kanji: 'Kanji', grammar: 'Grammar' },
    'zh-TW': { vocab: '單字', kanji: '漢字', grammar: '文法' },
    'zh-CN': { vocab: '词汇', kanji: '汉字', grammar: '语法' },
    ko: { vocab: '어휘', kanji: '한자', grammar: '문법' },
    vi: { vocab: 'Từ vựng', kanji: 'Hán tự', grammar: 'Ngữ pháp' },
    id: { vocab: 'Kosakata', kanji: 'Kanji', grammar: 'Tata bahasa' }
  };
  
  // Mock section names
  const sectionNames = {
    en: { 
      selectSection: 'Select Section',
      sectionMoji: 'Vocabulary & Kanji', 
      sectionBunpou: 'Grammar & Reading', 
      sectionChoukai: 'Listening',
      testMode: 'Test Mode',
      practiceSet: 'Practice Set'
    },
    'zh-TW': { 
      selectSection: '選擇部分',
      sectionMoji: '文字・語彙', 
      sectionBunpou: '文法・讀解', 
      sectionChoukai: '聽解',
      testMode: '測試模式',
      practiceSet: '練習套題'
    },
    'zh-CN': { 
      selectSection: '选择部分',
      sectionMoji: '文字・词汇', 
      sectionBunpou: '语法・阅读', 
      sectionChoukai: '听力',
      testMode: '测试模式',
      practiceSet: '练习套题'
    },
    ko: { 
      selectSection: '섹션 선택',
      sectionMoji: '문자・어휘', 
      sectionBunpou: '문법・독해', 
      sectionChoukai: '청해',
      testMode: '테스트 모드',
      practiceSet: '연습 세트'
    },
    vi: { 
      selectSection: 'Chọn phần',
      sectionMoji: 'Chữ・Từ vựng', 
      sectionBunpou: 'Ngữ pháp・Đọc hiểu', 
      sectionChoukai: 'Nghe hiểu',
      testMode: 'Chế độ kiểm tra',
      practiceSet: 'Bộ luyện tập'
    },
    id: { 
      selectSection: 'Pilih Bagian',
      sectionMoji: 'Huruf・Kosakata', 
      sectionBunpou: 'Tata bahasa・Membaca', 
      sectionChoukai: 'Mendengarkan',
      testMode: 'Mode Tes',
      practiceSet: 'Set Latihan'
    }
  };
  
  const lang = state.lang || 'en';
  const n = names[lang] || names.en;
  const s = sectionNames[lang] || sectionNames.en;
  
  // Update category names
  document.querySelectorAll('.category-btn').forEach(btn => {
    const cat = btn.dataset.cat;
    const nameEl = btn.querySelector('.category-name');
    if (nameEl && n[cat]) {
      nameEl.textContent = n[cat];
    }
  });
  
  // Update Mock section names
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (s[key]) {
      el.textContent = s[key];
    }
  });
}

// Update all UI texts based on current language
function updateUITexts() {
  const lang = state.lang || 'en';
  const texts = UI_TEXTS[lang] || UI_TEXTS['en'];
  
  // Navigation buttons
  document.querySelectorAll('.nav-btn[data-screen="drill"]').forEach(el => {
    const txt = el.querySelector('.nav-text');
    if (txt) txt.textContent = texts.nav_drill;
    else if (el.textContent.includes('Drill') || el.textContent.includes('練習')) {
      el.innerHTML = el.innerHTML.replace(/>Drill<|>練習<|>연습<|>Luyện tập</g, '>' + texts.nav_drill + '<');
    }
  });
  document.querySelectorAll('.nav-btn[data-screen="mock"]').forEach(el => {
    const txt = el.querySelector('.nav-text');
    if (txt) txt.textContent = texts.nav_mock;
  });
  document.querySelectorAll('.nav-btn[data-screen="ai"]').forEach(el => {
    const txt = el.querySelector('.nav-text');
    if (txt) txt.textContent = texts.nav_ai;
  });
  
  // Category buttons
  document.querySelectorAll('.category-btn[data-cat="vocab"] .category-name').forEach(el => el.textContent = texts.nav_vocab);
  document.querySelectorAll('.category-btn[data-cat="kanji"] .category-name').forEach(el => el.textContent = texts.nav_new_kanji);
  document.querySelectorAll('.category-btn[data-cat="grammar"] .category-name').forEach(el => el.textContent = texts.nav_grammar);
  
  // Onboarding
  const onboardingEls = {
    '.onboarding-step[data-step="1"] .onboarding-title': texts.onboarding_welcome,
    '.onboarding-step[data-step="1"] .onboarding-desc': texts.onboarding_welcome_desc,
    '.onboarding-step[data-step="2"] .onboarding-title': texts.onboarding_goal,
    '.onboarding-step[data-step="2"] .onboarding-desc': texts.onboarding_goal_desc,
    '.onboarding-step[data-step="4"] .onboarding-title': texts.onboarding_ready,
    '.onboarding-step[data-step="4"] .onboarding-desc': texts.onboarding_ready_desc,
    '.onboarding-skip': texts.onboarding_skip,
    '#onboarding-next-text': texts.onboarding_next
  };
  Object.entries(onboardingEls).forEach(([sel, txt]) => {
    const el = document.querySelector(sel);
    if (el) el.textContent = txt;
  });
  
  // Onboarding level names
  document.querySelectorAll('.onboarding-level-btn').forEach(btn => {
    const nameEl = btn.querySelector('.level-name');
    if (nameEl) {
      const level = btn.dataset.level;
      const levelNames = { N5: texts.onboarding_beginner, N4: texts.onboarding_elementary, N3: texts.onboarding_intermediate, N2: texts.onboarding_advanced, N1: texts.onboarding_expert };
      if (levelNames[level]) nameEl.textContent = levelNames[level];
    }
  });
  
  // Onboarding features
  const featureEls = document.querySelectorAll('.onboarding-feature');
  if (featureEls.length >= 3) {
    const featureTexts = [
      { title: texts.onboarding_drill, desc: texts.onboarding_drill_desc },
      { title: texts.onboarding_mock, desc: texts.onboarding_mock_desc },
      { title: texts.onboarding_ai, desc: texts.onboarding_ai_desc }
    ];
    featureEls.forEach((el, i) => {
      if (featureTexts[i]) {
        const strong = el.querySelector('strong');
        const span = el.querySelector('span:last-child');
        if (strong) strong.textContent = featureTexts[i].title;
        if (span) span.textContent = featureTexts[i].desc;
      }
    });
  }
  
  // Quiz/Drill result stats
  document.querySelectorAll('.result-stat-label').forEach(el => {
    if (el.textContent === 'Correct' || el.textContent === '正確' || el.textContent === '정답') el.textContent = texts.quiz_correct;
    if (el.textContent === 'Wrong' || el.textContent === '錯誤' || el.textContent === '오답') el.textContent = texts.quiz_wrong;
    if (el.textContent === 'Time' || el.textContent === '時間' || el.textContent === '시간') el.textContent = texts.quiz_time;
  });
  
  // Result buttons
  const reviewBtn = document.getElementById('reviewMistakesBtn');
  if (reviewBtn) reviewBtn.textContent = texts.quiz_review_btn;
  
  document.querySelectorAll('.btn-secondary').forEach(btn => {
    if (btn.textContent === 'Try Again' || btn.textContent === '再試一次') btn.textContent = texts.quiz_try_again;
    if (btn.textContent === 'Home' || btn.textContent === '首頁') btn.textContent = texts.quiz_home;
    if (btn.textContent === 'Back to Mock Tests') btn.textContent = texts.mock_back;
    if (btn.textContent === 'Practice Weak Areas') btn.textContent = texts.mock_practice_weak;
  });
  
  const wrongTitle = document.querySelector('.wrong-answers-title');
  if (wrongTitle) wrongTitle.textContent = texts.quiz_review_title;
  
  // Continue button
  const continueBtnText = document.getElementById('continue-btn-text');
  if (continueBtnText) continueBtnText.textContent = texts.quiz_continue;
  
  // Mock screen
  const mockQuickTitle = document.querySelector('.mock-quick-title');
  if (mockQuickTitle) mockQuickTitle.textContent = texts.mock_title;
  
  document.querySelectorAll('.mock-option-label').forEach(el => {
    if (el.textContent === 'Mode' || el.textContent === '模式') el.textContent = texts.mock_mode;
    if (el.textContent === 'Set' || el.textContent === '套') el.textContent = texts.mock_set;
  });
  
  document.querySelectorAll('.mock-toggle-btn[data-mode="full"]').forEach(el => el.textContent = texts.mock_full);
  document.querySelectorAll('.mock-toggle-btn[data-mode="section"]').forEach(el => el.textContent = texts.mock_section);
  
  const mockRecentLabel = document.querySelector('.mock-recent-label');
  if (mockRecentLabel) mockRecentLabel.textContent = texts.mock_last_score;
  
  const mockStartBtn = document.querySelector('.mock-start-btn');
  if (mockStartBtn) mockStartBtn.textContent = texts.mock_start;
  
  const mockNextBtn = document.getElementById('mockNextBtn');
  if (mockNextBtn) mockNextBtn.textContent = texts.mock_next;
  
  const mockPrevBtn = document.getElementById('mockPrevBtn');
  if (mockPrevBtn) mockPrevBtn.textContent = texts.mock_prev;
  
  // AI Screen
  const aiTitle = document.querySelector('.ai-title');
  if (aiTitle) aiTitle.textContent = texts.ai_title;
  
  const aiDesc = document.querySelector('.ai-desc');
  if (aiDesc) aiDesc.textContent = texts.ai_desc;
  
  const aiBadge = document.querySelector('.ai-badge');
  if (aiBadge) aiBadge.textContent = texts.ai_premium;
  
  // AI features
  const aiFeatures = document.querySelectorAll('.ai-feature');
  const aiFeatureTexts = [
    { title: texts.ai_science, desc: texts.ai_science_desc },
    { title: texts.ai_scaffold, desc: texts.ai_scaffold_desc },
    { title: texts.ai_growth, desc: texts.ai_growth_desc },
    { title: texts.ai_support, desc: texts.ai_support_desc }
  ];
  aiFeatures.forEach((el, i) => {
    if (aiFeatureTexts[i]) {
      const title = el.querySelector('.ai-feature-title');
      const desc = el.querySelector('.ai-feature-desc');
      if (title) title.textContent = aiFeatureTexts[i].title;
      if (desc) desc.textContent = aiFeatureTexts[i].desc;
    }
  });
  
  // AI chips
  document.querySelectorAll('.ai-chip').forEach(el => {
    if (el.textContent.includes('Growth Areas')) el.textContent = texts.ai_growth_areas;
    if (el.textContent.includes('Study Science')) el.textContent = texts.ai_study_science;
    if (el.textContent.includes('Error Patterns')) el.textContent = texts.ai_error_patterns;
  });
  
  // AI send button
  const aiSendBtn = document.querySelector('.ai-send-btn');
  if (aiSendBtn) aiSendBtn.textContent = texts.ai_send;
  
  // Settings
  const settingsTitle = document.querySelector('.settings-title');
  if (settingsTitle) settingsTitle.textContent = texts.settings_title;
  
  document.querySelectorAll('.settings-section-title').forEach(el => {
    if (el.textContent === 'Account' || el.textContent === '帳戶') el.textContent = texts.settings_account;
    if (el.textContent === 'Study Settings' || el.textContent === '學習設定' || el.textContent === '学习设置' || el.textContent === '학습 설정' || el.textContent === 'Cài đặt học' || el.textContent === 'Pengaturan Belajar' || el.textContent === 'Config. de Estudio' || el.textContent === 'Config. de Estudo') el.textContent = texts.settings_study;
    if (el.textContent === 'Data' || el.textContent === '數據' || el.textContent === '数据' || el.textContent === '데이터' || el.textContent === 'Dữ liệu' || el.textContent === 'Datos' || el.textContent === 'Dados') el.textContent = texts.settings_data;
  });
  
  document.querySelectorAll('.setting-title').forEach(el => {
    if (el.textContent === 'Email' || el.textContent === '電子郵件' || el.textContent === '电子邮件' || el.textContent === '이메일' || el.textContent === 'Correo') el.textContent = texts.settings_email;
    if (el.textContent === 'Current Plan' || el.textContent === '目前方案' || el.textContent === '当前方案' || el.textContent === '현재 플랜' || el.textContent === 'Gói hiện tại' || el.textContent === 'Paket Saat Ini' || el.textContent === 'Plan Actual' || el.textContent === 'Plano Atual') el.textContent = texts.settings_plan;
    if (el.textContent === 'Questions per Unit' || el.textContent === '每單元問題數' || el.textContent === '每单元问题数' || el.textContent === '유닛당 문제 수' || el.textContent === 'Câu hỏi mỗi Unit' || el.textContent === 'Pertanyaan per Unit' || el.textContent === 'Preguntas por Unidad' || el.textContent === 'Perguntas por Unidade') el.textContent = texts.settings_qcount;
    if (el.textContent === 'Sound Effects' || el.textContent === '音效' || el.textContent === '효과음' || el.textContent === 'Hiệu ứng âm thanh' || el.textContent === 'Efek Suara' || el.textContent === 'Efectos de Sonido' || el.textContent === 'Efeitos Sonoros') el.textContent = texts.settings_sound;
    if (el.textContent === 'Reset Progress' || el.textContent === '重設進度' || el.textContent === '重置进度' || el.textContent === '진도 초기화' || el.textContent === 'Đặt lại tiến độ' || el.textContent === 'Reset Kemajuan' || el.textContent === 'Resetear Progreso' || el.textContent === 'Resetar Progresso') el.textContent = texts.settings_reset;
  });
  
  document.querySelectorAll('.setting-desc').forEach(el => {
    if (el.textContent === 'Items in each session' || el.textContent === '每次練習題數' || el.textContent === '每次练习题数' || el.textContent === '세션 당 문항 수' || el.textContent === 'Số câu mỗi phiên' || el.textContent === 'Item per sesi' || el.textContent === 'Ítems por sesión' || el.textContent === 'Itens por sessão') el.textContent = texts.settings_qcount_desc;
    if (el.textContent === 'Quiz sounds' || el.textContent === '測驗音效' || el.textContent === '测验音效' || el.textContent === '퀴즈 소리' || el.textContent === 'Âm thanh quiz' || el.textContent === 'Suara kuis' || el.textContent === 'Sonidos del quiz' || el.textContent === 'Sons do quiz') el.textContent = texts.settings_sound_desc;
    if (el.textContent === 'Clear all learning data' || el.textContent === '清除所有學習資料' || el.textContent === '清除所有学习数据' || el.textContent === '모든 학습 데이터 삭제' || el.textContent === 'Xóa toàn bộ dữ liệu' || el.textContent === 'Hapus semua data' || el.textContent === 'Borrar todos los datos' || el.textContent === 'Limpar todos os dados') el.textContent = texts.settings_reset_desc;
    if (el.textContent === 'Sign out of your account') el.textContent = texts.settings_logout_desc;
  });
  
  // Subscription modal
  const subTitle = document.querySelector('#subscriptionModal .modal-title');
  if (subTitle) subTitle.textContent = texts.sub_choose;
  
  document.querySelectorAll('.plan-name').forEach(el => {
    if (el.textContent === 'Basic') el.textContent = texts.sub_basic;
    if (el.textContent === 'Standard') el.textContent = texts.sub_standard;
    if (el.textContent === 'Premium') el.textContent = texts.sub_premium;
  });
  
  // Trial modal
  const trialTitle = document.querySelector('#subscriptionRequiredModal h3');
  if (trialTitle) trialTitle.textContent = texts.trial_title;
  
  const trialStartBtn = document.querySelector('#subscriptionRequiredModal .btn-primary');
  if (trialStartBtn) trialStartBtn.textContent = texts.trial_start;
  
  const trialLaterBtn = document.querySelector('#subscriptionRequiredModal .btn-secondary');
  if (trialLaterBtn) trialLaterBtn.textContent = texts.trial_later;
  
  // Talk screen placeholders and titles
  const talkInput = document.getElementById('talk-input');
  if (talkInput && texts.talk_input_placeholder) {
    talkInput.placeholder = texts.talk_input_placeholder;
  }
  
  const talkChatTitle = document.getElementById('talk-chat-title');
  if (talkChatTitle && texts.talk_chat_title) {
    talkChatTitle.textContent = texts.talk_chat_title;
  }
  
  // Update all data-i18n-placeholder elements
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.dataset.i18nPlaceholder;
    if (texts[key]) {
      el.placeholder = texts[key];
    }
  });
}

function updateProgressCard() {
  const level = state.level;
  const totalItems = TOTAL_ITEMS[level];
  const totalUnits = Math.ceil(totalItems / ITEMS_PER_UNIT);
  
  // Count mastered items (all 4 skills completed)
  let masteredItems = 0;
  const d = DATA[level];
  const allItems = [...(d.vocab || []), ...(d.kanji || []), ...(d.grammar || [])];
  
  allItems.forEach(item => {
    const baseKey = `${level}_${item.id}`;
    const allSkillsComplete = SKILL_TYPES.every(skill => 
      state.skills && state.skills[`${baseKey}_${skill}`]
    );
    if (allSkillsComplete) {
      masteredItems++;
    }
  });
  
  // Calculate completed units
  const completedUnits = Math.floor(masteredItems / ITEMS_PER_UNIT);
  const percent = Math.min(100, Math.round((masteredItems / totalItems) * 100));
  
  // Update UI (check if elements exist)
  const progressLevel = document.getElementById('progress-level');
  const progressPercent = document.getElementById('progress-percent');
  const progressBarFill = document.getElementById('progress-bar-fill');
  const progressDetail = document.getElementById('progress-detail');
  
  if (progressLevel) progressLevel.textContent = level;
  if (progressPercent) progressPercent.textContent = percent + '%';
  if (progressBarFill) progressBarFill.style.width = percent + '%';
  if (progressDetail) progressDetail.textContent = `Unit ${completedUnits}/${totalUnits} • ${masteredItems}/${totalItems} mastered`;
  
  // Update unit grid
  updateUnitGrid(level, totalUnits, masteredItems, allItems);
}

function updateUnitGrid(level, totalUnits, masteredItems, allItems) {
  const grid = document.getElementById('unit-grid');
  if (!grid) return;
  
  grid.dataset.level = level;
  grid.innerHTML = '';
  
  // Level colors
  const levelColors = { N5: '#34c759', N4: '#007aff', N3: '#af52de', N2: '#1e3a5f', N1: '#ff3b30' };
  const levelColor = levelColors[level] || '#007aff';
  
  // Calculate items per unit and their completion status
  for (let u = 0; u < totalUnits; u++) {
    const unitStart = u * ITEMS_PER_UNIT;
    const unitEnd = Math.min(unitStart + ITEMS_PER_UNIT, allItems.length);
    const unitItems = allItems.slice(unitStart, unitEnd);
    
    // Count mastered items in this unit
    let unitMastered = 0;
    unitItems.forEach(item => {
      const baseKey = `${level}_${item.id}`;
      const allComplete = SKILL_TYPES.every(skill => state.skills && state.skills[`${baseKey}_${skill}`]);
      if (allComplete) unitMastered++;
    });
    
    const percent = Math.round((unitMastered / unitItems.length) * 100);
    
    const cell = document.createElement('div');
    cell.className = 'unit-cell';
    
    if (percent === 100) {
      // Complete: solid color with checkmark
      cell.classList.add('complete');
      cell.style.background = levelColor;
    } else if (percent > 0) {
      // In progress: gradient fill from bottom based on percent
      cell.classList.add('in-progress');
      cell.style.background = `linear-gradient(to top, ${levelColor}40 ${percent}%, var(--bg) ${percent}%)`;
      cell.style.borderColor = levelColor;
      cell.innerHTML = `<span class="unit-num">${u + 1}</span><span class="unit-percent">${percent}%</span>`;
    } else {
      // Available: no progress
      cell.classList.add('available');
      cell.textContent = u + 1;
    }
    
    // Click to start specific unit
    cell.onclick = () => showUnitInfoInCard(u);
    grid.appendChild(cell);
  }
}

async function startUnitDrill(unitIndex) {
  // Check for resume session
  const resumeData = localStorage.getItem('fujisan_resume_session');
  if (resumeData) {
    try {
      const resume = JSON.parse(resumeData);
      // Check if same level/category/unit and not too old (6 months)
      if (resume.level === state.level && 
          resume.category === state.category && 
          resume.unit === unitIndex &&
          Date.now() - resume.timestamp < 6 * 30 * 24 * 60 * 60 * 1000) {
        if (confirm('Resume previous session?')) {
          localStorage.removeItem('fujisan_resume_session');
          return resumeDrill(resume);
        }
      }
      // Clear old resume data
      localStorage.removeItem('fujisan_resume_session');
    } catch (e) {
      localStorage.removeItem('fujisan_resume_session');
    }
  }
  
  // All levels require valid subscription or trial
  if (!hasValidPlan() && !isInTrialPeriod()) {
    window.location.href = 'https://fujisan.ai/#pricing';
    return;
  }
  
  showLoading(`Loading ${state.level} data...`);
  const loaded = await loadDrillData(state.level);
  hideLoading();
  
  if (!loaded) {
    alert('Failed to load data.');
    return;
  }
  
  // Get all items (vocab + kanji + grammar) for unit grid consistency
  const d = DATA[state.level];
  const allItems = [...(d.vocab || []), ...(d.kanji || []), ...(d.grammar || [])];
  
  if (allItems.length === 0) {
    alert('No data available.');
    return;
  }
  
  const unitStart = unitIndex * ITEMS_PER_UNIT;
  const unitEnd = Math.min(unitStart + ITEMS_PER_UNIT, allItems.length);
  const unitItems = allItems.slice(unitStart, unitEnd);
  
  if (unitItems.length === 0) {
    alert('No items in this unit.');
    return;
  }
  
  // Create question queue
  const questionQueue = [];
  unitItems.forEach((item, itemIndex) => {
    // For grammar items (item.p exists), exclude 'writing' and 'reading' skills
    // (reading for grammar shows meaning anyway, so it duplicates meaning skill)
    let skills = item.p ? SKILL_TYPES.filter(s => s !== 'writing' && s !== 'reading') : SKILL_TYPES;
    // Skip reading/listening/writing skills if word and reading are the same (e.g., hiragana-only words without kanji)
    // These skills require kanji to be meaningful
    if (item.w && item.r && item.w === item.r && !item.k) {
      skills = skills.filter(s => s !== 'reading' && s !== 'listening' && s !== 'writing');
    }
    skills.forEach((skill, skillIndex) => {
      questionQueue.push({ item, itemIndex, skill, skillIndex });
    });
  });
  
  const shuffledQueue = shuffleWithNoConsecutive(questionQueue);
  
  session = { 
    mode: 'quiz', 
    items: unitItems,
    questionQueue: shuffledQueue,
    currentQuestionIndex: 0,
    currentItemIndex: 0,
    currentSkillIndex: 0,
    correct: 0, 
    wrong: 0, 
    startTime: Date.now(), 
    answers: [],
    itemResults: {},
    allItems: allItems,  // Store all items for distractors
    unitIndex: unitIndex  // Store unit index for next unit navigation
  };
  
  // S2: Save last session for continue feature
  state.lastSession = { level: state.level, unit: unitIndex, category: state.category, timestamp: Date.now() };
  saveState();
  
  document.getElementById('quiz-title').textContent = `${state.level} Unit ${unitIndex + 1}`;
  showScreen('quiz');
  showLearningQuestion();
}

// ========== DRILL ==========
function getPool() {
  const d = DATA[state.level];
  if (state.category === 'vocab') return d.vocab;
  if (state.category === 'kanji') return d.kanji;
  if (state.category === 'grammar') return d.grammar;
  return [];
}

// Filter items that need learning (not all 4 skills complete)
function getUnlearnedItems(pool) {
  return pool.filter(item => {
    const baseKey = `${state.level}_${item.id}`;
    return !SKILL_TYPES.every(skill => state.skills && state.skills[`${baseKey}_${skill}`]);
  });
}

// Get items with mistakes
function getMistakeItems(pool) {
  const key = getCategoryKey();
  const mistakeIds = state.mistakes[key] || [];
  return pool.filter(item => mistakeIds.includes(item.id));
}

// ========== SRS (Spaced Repetition System) ==========

// Get SRS key for an item
function getSrsKey(item) {
  return `${state.level}_${state.category}_${item.id}`;
}

// Initialize SRS data for an item (first time wrong)
function initSrsItem(item) {
  const key = getSrsKey(item);
  if (!state.srs) state.srs = {};
  if (!state.srs[key]) {
    state.srs[key] = {
      interval: 1,
      ease: 2.5,
      nextReview: getTodayString(),
      reviewCount: 0,
      lastReview: null
    };
  }
  return state.srs[key];
}

// Get today's date as string (YYYY-MM-DD)
function getTodayString() {
  return new Date().toISOString().split('T')[0];
}

// Update SRS after answering (SM-2 algorithm simplified)
function updateSrs(item, isCorrect) {
  const key = getSrsKey(item);
  if (!state.srs) state.srs = {};
  
  let srsData = state.srs[key];
  if (!srsData) {
    // First time seeing this item
    if (!isCorrect) {
      // Only track items user got wrong
      srsData = initSrsItem(item);
    } else {
      return; // Don't track items user got correct first time
    }
  }
  
  const today = getTodayString();
  srsData.lastReview = today;
  srsData.reviewCount++;
  
  if (isCorrect) {
    // Correct: increase interval
    if (srsData.interval === 1) {
      srsData.interval = 3; // 1 day → 3 days
    } else {
      srsData.interval = Math.round(srsData.interval * srsData.ease);
    }
    // Cap at 180 days
    srsData.interval = Math.min(srsData.interval, 180);
    
    // Slightly increase ease (max 3.0)
    srsData.ease = Math.min(srsData.ease + 0.1, 3.0);
  } else {
    // Wrong: reset interval, decrease ease
    srsData.interval = 1;
    srsData.ease = Math.max(srsData.ease - 0.2, 1.3);
  }
  
  // Calculate next review date
  const nextDate = new Date();
  nextDate.setDate(nextDate.getDate() + srsData.interval);
  srsData.nextReview = nextDate.toISOString().split('T')[0];
  
  state.srs[key] = srsData;
  saveState();
}

// Get items due for review today (across all categories for current level)
function getSrsDueItems(pool) {
  if (!state.srs) return [];
  
  const today = getTodayString();
  const dueItems = [];
  
  pool.forEach(item => {
    const key = getSrsKey(item);
    const srsData = state.srs[key];
    if (srsData && srsData.nextReview <= today) {
      dueItems.push({ item, srsData });
    }
  });
  
  // Sort by overdue days (most overdue first)
  dueItems.sort((a, b) => {
    return a.srsData.nextReview.localeCompare(b.srsData.nextReview);
  });
  
  return dueItems.map(d => d.item);
}

// Get count of items due for review today for current level/category
function getSrsDueCount() {
  if (!state.srs) return 0;
  
  const today = getTodayString();
  const prefix = `${state.level}_${state.category}_`;
  
  return Object.entries(state.srs).filter(([key, data]) => {
    return key.startsWith(prefix) && data.nextReview <= today;
  }).length;
}

// Get total SRS due count for current level (all categories)
function getTotalSrsDueCount() {
  if (!state.srs) return 0;
  
  const today = getTodayString();
  const prefix = `${state.level}_`;
  
  return Object.entries(state.srs).filter(([key, data]) => {
    return key.startsWith(prefix) && data.nextReview <= today;
  }).length;
}

// Get SRS stats for display
function getSrsStats() {
  if (!state.srs) return { total: 0, dueToday: 0, mastered: 0 };
  
  const today = getTodayString();
  const prefix = `${state.level}_`;
  
  let total = 0;
  let dueToday = 0;
  let mastered = 0; // interval >= 30 days
  
  Object.entries(state.srs).forEach(([key, data]) => {
    if (key.startsWith(prefix)) {
      total++;
      if (data.nextReview <= today) dueToday++;
      if (data.interval >= 30) mastered++;
    }
  });
  
  return { total, dueToday, mastered };
}

// Update Today's Focus display on dashboard
function updateTodayFocus() {
  const content = document.getElementById('today-focus-content');
  const startBtn = document.getElementById('today-focus-start-btn');
  const aiCoachCard = document.getElementById('ai-coach-card');
  if (!content) return;
  
  // Always show the card
  if (aiCoachCard) aiCoachCard.style.display = 'block';
  
  const stats = getSrsStats();
  const totalDue = getTotalSrsDueCount();
  const categoryKey = `${state.level}_${state.category}`;
  const mistakeCount = (state.mistakes[categoryKey] || []).length;
  const unitProgress = getUnitProgressInfo();
  
  const lang = state.lang || 'en';
  const labels = {
    en: { 
      reviewDue: 'items due for review',
      mistakes: 'items to master',
      continueUnit: 'Continue Unit',
      complete: 'complete',
      noTasks: 'All caught up! Start a new drill.',
      startReview: 'Start Review',
      startPractice: 'Start Practice',
      startDrill: 'Start Drill'
    },
    'zh-TW': { 
      reviewDue: '項需要複習',
      mistakes: '項待掌握',
      continueUnit: '繼續單元',
      complete: '完成',
      noTasks: '全部完成！開始新的練習。',
      startReview: '開始複習',
      startPractice: '開始練習',
      startDrill: '開始練習'
    },
    'zh-CN': { 
      reviewDue: '项需要复习',
      mistakes: '项待掌握',
      continueUnit: '继续单元',
      complete: '完成',
      noTasks: '全部完成！开始新的练习。',
      startReview: '开始复习',
      startPractice: '开始练习',
      startDrill: '开始练习'
    },
    ko: { 
      reviewDue: '개 복습 필요',
      mistakes: '개 마스터 필요',
      continueUnit: '계속 유닛',
      complete: '완료',
      noTasks: '모두 완료! 새로운 연습을 시작하세요.',
      startReview: '복습 시작',
      startPractice: '연습 시작',
      startDrill: '연습 시작'
    },
    vi: { 
      reviewDue: 'mục cần ôn tập',
      mistakes: 'mục cần thành thạo',
      continueUnit: 'Tiếp tục Unit',
      complete: 'hoàn thành',
      noTasks: 'Hoàn thành! Bắt đầu bài tập mới.',
      startReview: 'Bắt đầu ôn tập',
      startPractice: 'Bắt đầu luyện tập',
      startDrill: 'Bắt đầu luyện tập'
    },
    id: { 
      reviewDue: 'item perlu diulang',
      mistakes: 'item untuk dikuasai',
      continueUnit: 'Lanjutkan Unit',
      complete: 'selesai',
      noTasks: 'Semua selesai! Mulai latihan baru.',
      startReview: 'Mulai Ulang',
      startPractice: 'Mulai Latihan',
      startDrill: 'Mulai Latihan'
    }
  };
  const l = labels[lang] || labels.en;
  
  let html = '';
  let hasTasks = false;
  let primaryAction = null;
  
  // 1. Due items (SRS)
  if (totalDue > 0) {
    hasTasks = true;
    primaryAction = primaryAction || 'srs';
    html += `
      <div class="today-focus-item due" onclick="startSRSReview()">
        <span class="today-focus-item-icon"><svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/></svg></span>
        <span class="today-focus-item-text">${totalDue} ${l.reviewDue}</span>
        <span class="today-focus-item-arrow"><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"/></svg></span>
      </div>
    `;
  }
  
  // 2. Items to master (was: mistakes)
  if (mistakeCount > 0) {
    hasTasks = true;
    primaryAction = primaryAction || 'mistakes';
    html += `
      <div class="today-focus-item mistakes" onclick="startMistakesReview()">
        <span class="today-focus-item-icon"><svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg></span>
        <span class="today-focus-item-text">${mistakeCount} ${l.mistakes}</span>
        <span class="today-focus-item-arrow"><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"/></svg></span>
      </div>
    `;
  }
  
  // 3. Current unit progress
  if (unitProgress.currentUnit && unitProgress.progress < 100) {
    hasTasks = true;
    primaryAction = primaryAction || 'unit';
    html += `
      <div class="today-focus-item progress" onclick="continueUnit()">
        <span class="today-focus-item-icon"><svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg></span>
        <span class="today-focus-item-text">${l.continueUnit} ${unitProgress.currentUnit} (${unitProgress.progress}% ${l.complete})</span>
        <span class="today-focus-item-arrow"><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"/></svg></span>
      </div>
    `;
  }
  
  // No tasks - show encouragement
  if (!hasTasks) {
    html = `
      <div class="today-focus-item empty">
        <span class="today-focus-item-icon"><svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg></span>
        <span class="today-focus-item-text">${l.noTasks}</span>
      </div>
    `;
  }
  
  content.innerHTML = html;
  
  // Level colors
  const levelColors = { N5: '#34c759', N4: '#007aff', N3: '#af52de', N2: '#1e3a5f', N1: '#ff3b30' };
  const currentColor = levelColors[state.level] || levelColors.N5;
  
  // Update start button - uses CSS variable so it changes on hover
  if (startBtn) {
    if (hasTasks) {
      startBtn.style.display = 'flex';
      // Remove inline style to let CSS variable control color
      startBtn.style.removeProperty('background-color');
      const btnText = startBtn.querySelector('span');
      if (btnText) {
        if (primaryAction === 'srs') btnText.textContent = l.startReview;
        else if (primaryAction === 'mistakes') btnText.textContent = l.startPractice;
        else btnText.textContent = l.startDrill;
      }
    } else {
      startBtn.style.display = 'none';
    }
  }
  
  // Store primary action for button click
  window._todayFocusPrimaryAction = primaryAction;
}

// Get unit progress info
function getUnitProgressInfo() {
  const currentUnit = state.selectedUnit || 1;
  
  // Calculate progress based on completed questions in current unit
  const pool = getPool();
  if (!pool || pool.length === 0) return { currentUnit: null, progress: 0 };
  
  // Get items for current unit (22 items per unit)
  const unitSize = 22;
  const startIdx = (currentUnit - 1) * unitSize;
  const endIdx = Math.min(startIdx + unitSize, pool.length);
  const unitItems = pool.slice(startIdx, endIdx);
  
  if (unitItems.length === 0) return { currentUnit: null, progress: 0 };
  
  // Check how many items have been answered correctly (in SRS or completed)
  const categoryKey = `${state.level}_${state.category}`;
  let completed = 0;
  
  unitItems.forEach(item => {
    const srsKey = `${categoryKey}_${item.id}`;
    if (state.srs && state.srs[srsKey] && state.srs[srsKey].interval > 0) {
      completed++;
    }
  });
  
  const progress = Math.round((completed / unitItems.length) * 100);
  return { currentUnit, progress };
}

// Start Today's Focus action (primary action)
function startTodaysFocus() {
  const action = window._todayFocusPrimaryAction;
  if (action === 'srs') {
    startSRSReview();
  } else if (action === 'mistakes') {
    startMistakesReview();
  } else {
    continueUnit();
  }
}

// Start mistakes review - uses existing startReview which handles both SRS and mistakes
async function startMistakesReview() {
  await startReview();
}

// Continue current unit
function continueUnit() {
  startDrill();
}

// Legacy function - redirect to new one
function updateSrsDisplay() {
  updateTodayFocus();
}

// ========== END SRS ==========

async function startDrill() {
  // All levels require valid subscription or trial
  if (!hasValidPlan() && !isInTrialPeriod()) {
    window.location.href = 'https://fujisan.ai/#pricing';
    return;
  }
  
  showLoading(`Loading ${state.level} data...`);
  const loaded = await loadDrillData(state.level);
  hideLoading();
  
  if (!loaded) {
    alert('Failed to load data. Please check your connection.');
    return;
  }
  
  const pool = getPool();
  if (pool.length === 0) { 
    alert('No data available for ' + state.level + ' ' + state.category); 
    return; 
  }
  
  // Get unlearned items
  const unlearnedItems = getUnlearnedItems(pool);
  if (unlearnedItems.length === 0) {
    alert('All items mastered! Try Review mode or another category.');
    return;
  }
  
  // Track drill start
  FujisanAnalytics.trackDrillStart(state.category, state.level, state.unit || 1);
  
  // Pick items for this session (22 items = 1 unit)
  const sessionItems = [...unlearnedItems].sort(() => Math.random() - 0.5).slice(0, ITEMS_PER_UNIT);
  
  // Create question queue: each item x skills (grammar excludes writing and reading), then shuffle
  const questionQueue = [];
  sessionItems.forEach((item, itemIndex) => {
    // For grammar items (item.p exists), exclude 'writing' and 'reading' skills
    // (reading for grammar shows meaning anyway, so it duplicates meaning skill)
    let skills = item.p ? SKILL_TYPES.filter(s => s !== 'writing' && s !== 'reading') : SKILL_TYPES;
    // Skip reading/listening/writing skills if word and reading are the same (e.g., hiragana-only words without kanji)
    // These skills require kanji to be meaningful
    if (item.w && item.r && item.w === item.r && !item.k) {
      skills = skills.filter(s => s !== 'reading' && s !== 'listening' && s !== 'writing');
    }
    skills.forEach((skill, skillIndex) => {
      questionQueue.push({ item, itemIndex, skill, skillIndex });
    });
  });
  
  // Shuffle with constraint: no consecutive same item
  const shuffledQueue = shuffleWithNoConsecutive(questionQueue);
  
  session = { 
    mode: 'quiz', 
    items: sessionItems,
    questionQueue: shuffledQueue,
    currentQuestionIndex: 0,
    currentItemIndex: 0,
    currentSkillIndex: 0,
    correct: 0, 
    wrong: 0, 
    startTime: Date.now(), 
    answers: [],
    itemResults: {} // Track results per item
  };
  
  document.getElementById('quiz-title').textContent = `${state.level} ${getText('quiz_drill_title') || 'Drill'}`;
  showScreen('quiz');
  showLearningQuestion();
}

// Shuffle array ensuring no consecutive items with same itemIndex
function shuffleWithNoConsecutive(arr) {
  if (arr.length <= 1) return arr;
  
  // Group by itemIndex
  const groups = {};
  arr.forEach(q => {
    if (!groups[q.itemIndex]) groups[q.itemIndex] = [];
    groups[q.itemIndex].push(q);
  });
  
  // Shuffle within groups
  Object.values(groups).forEach(g => g.sort(() => Math.random() - 0.5));
  
  // Interleave: pick from different groups
  const result = [];
  const groupKeys = Object.keys(groups).sort(() => Math.random() - 0.5);
  let lastItemIndex = -1;
  let attempts = 0;
  const maxAttempts = arr.length * 10;
  
  while (result.length < arr.length && attempts < maxAttempts) {
    attempts++;
    let added = false;
    
    // Try to find a group different from last
    for (const key of groupKeys) {
      if (groups[key].length > 0 && parseInt(key) !== lastItemIndex) {
        const q = groups[key].shift();
        result.push(q);
        lastItemIndex = q.itemIndex;
        added = true;
        break;
      }
    }
    
    // If all remaining are same itemIndex, just add one
    if (!added) {
      for (const key of groupKeys) {
        if (groups[key].length > 0) {
          const q = groups[key].shift();
          result.push(q);
          lastItemIndex = q.itemIndex;
          break;
        }
      }
    }
  }
  
  return result;
}

async function startReview() {
  showLoading(`Loading ${state.level} data...`);
  const loaded = await loadDrillData(state.level);
  hideLoading();
  
  if (!loaded) {
    alert('Failed to load data. Please check your connection.');
    return;
  }
  
  const pool = getPool();
  
  // Get SRS due items first, then fall back to mistakes
  let reviewItems = getSrsDueItems(pool);
  
  // If no SRS items, use traditional mistakes
  if (reviewItems.length === 0) {
    reviewItems = getMistakeItems(pool);
  }
  
  if (reviewItems.length === 0) {
    const lang = state.lang || 'en';
    const messages = {
      en: 'No items to review! Great job! 🎉',
      'zh-TW': '沒有需要復習的項目！做得好！🎉',
      'zh-CN': '没有需要复习的项目！做得好！🎉',
      ko: '복습할 항목이 없습니다! 잘했어요! 🎉',
      vi: 'Không có mục nào cần ôn tập! Tuyệt vời! 🎉',
      id: 'Tidak ada item untuk ditinjau! Bagus! 🎉'
    };
    alert(messages[lang] || messages.en);
    return;
  }
  
  // Track review start
  FujisanAnalytics.trackReviewStart(state.category, reviewItems.length);
  
  // Create question queue with shuffle (grammar excludes writing and reading)
  const questionQueue = [];
  reviewItems.forEach((item, itemIndex) => {
    // For grammar items (item.p exists), exclude 'writing' and 'reading' skills
    const skills = item.p ? SKILL_TYPES.filter(s => s !== 'writing' && s !== 'reading') : SKILL_TYPES;
    skills.forEach((skill, skillIndex) => {
      questionQueue.push({ item, itemIndex, skill, skillIndex });
    });
  });
  
  const shuffledQueue = shuffleWithNoConsecutive(questionQueue);
  
  session = { 
    mode: 'review', 
    items: reviewItems,
    questionQueue: shuffledQueue,
    currentQuestionIndex: 0,
    currentItemIndex: 0,
    currentSkillIndex: 0,
    correct: 0, 
    wrong: 0, 
    startTime: Date.now(), 
    answers: [],
    itemResults: {}
  };
  
  // Show SRS badge count if available
  const srsDue = getSrsDueCount();
  const title = srsDue > 0 ? `🔄 Review (${srsDue} due)` : '🔄 Review';
  document.getElementById('quiz-title').textContent = title;
  showScreen('quiz');
  showLearningQuestion();
}

// ========== SOUND EFFECTS ==========
const SFX = {
  newQuestion: null,
  correct: null,
  incorrect: null
};

// Create Apple-style minimal sound effects using Web Audio API
function initSoundEffects() {
  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;
    
    const ctx = new AudioContext();
    
    // Correct sound - Apple-style marimba "pop" (like iPhone text sent)
    SFX.correct = () => {
      const t = ctx.currentTime;
      
      // Main tone (marimba-like)
      const osc1 = ctx.createOscillator();
      const gain1 = ctx.createGain();
      osc1.type = 'sine';
      osc1.frequency.setValueAtTime(1400, t); // High, bright
      osc1.frequency.exponentialRampToValueAtTime(1200, t + 0.08);
      gain1.gain.setValueAtTime(0.3, t);
      gain1.gain.exponentialRampToValueAtTime(0.001, t + 0.12);
      osc1.connect(gain1);
      gain1.connect(ctx.destination);
      osc1.start(t);
      osc1.stop(t + 0.15);
      
      // Harmonic for wooden texture
      const osc2 = ctx.createOscillator();
      const gain2 = ctx.createGain();
      osc2.type = 'triangle';
      osc2.frequency.setValueAtTime(2800, t);
      gain2.gain.setValueAtTime(0.08, t);
      gain2.gain.exponentialRampToValueAtTime(0.001, t + 0.06);
      osc2.connect(gain2);
      gain2.connect(ctx.destination);
      osc2.start(t);
      osc2.stop(t + 0.08);
    };
    
    // Incorrect sound - Soft low "tock" (gentle feedback)
    SFX.incorrect = () => {
      const t = ctx.currentTime;
      
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      const filter = ctx.createBiquadFilter();
      
      filter.type = 'lowpass';
      filter.frequency.value = 600;
      
      osc.type = 'sine';
      osc.frequency.setValueAtTime(400, t);
      osc.frequency.exponentialRampToValueAtTime(300, t + 0.08);
      
      gain.gain.setValueAtTime(0.2, t);
      gain.gain.exponentialRampToValueAtTime(0.001, t + 0.1);
      
      osc.connect(filter);
      filter.connect(gain);
      gain.connect(ctx.destination);
      osc.start(t);
      osc.stop(t + 0.12);
    };
    
    // New question sound - Subtle high "tick"
    SFX.newQuestion = () => {
      const t = ctx.currentTime;
      
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      
      osc.type = 'sine';
      osc.frequency.setValueAtTime(1800, t);
      
      gain.gain.setValueAtTime(0.08, t);
      gain.gain.exponentialRampToValueAtTime(0.001, t + 0.05);
      
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(t);
      osc.stop(t + 0.06);
    };
  } catch (e) {
    console.log('Sound effects not available');
  }
}

function playSound(type) {
  if (state.soundEnabled === false) return; // Check if sound is disabled
  try {
    if (SFX[type]) SFX[type]();
  } catch (e) {}
}

// Initialize on first user interaction
document.addEventListener('click', () => {
  if (!SFX.newQuestion) initSoundEffects();
}, { once: true });

// ========== SKILL BADGE ==========
const SKILL_LABELS = {
  listening: {
    icon: '👂',
    en: 'Listening', 'zh-TW': '聽力', 'zh-CN': '听力', ko: '듣기', vi: 'Nghe', id: 'Mendengar'
  },
  reading: {
    icon: '👁',
    en: 'Reading', 'zh-TW': '閱讀', 'zh-CN': '阅读', ko: '읽기', vi: 'Đọc', id: 'Membaca'
  },
  meaning: {
    icon: '💡',
    en: 'Meaning', 'zh-TW': '意思', 'zh-CN': '意思', ko: '의미', vi: 'Nghĩa', id: 'Arti'
  },
  writing: {
    icon: '✍️',
    en: 'Writing', 'zh-TW': '書寫', 'zh-CN': '书写', ko: '쓰기', vi: 'Viết', id: 'Menulis'
  }
};

function updateSkillBadge(skill) {
  const badge = document.getElementById('skill-badge');
  if (!badge) return;
  
  const labels = SKILL_LABELS[skill] || SKILL_LABELS.meaning;
  const lang = state.lang || 'en';
  const label = labels[lang] || labels.en;
  
  badge.className = 'skill-badge ' + skill;
  badge.innerHTML = `${labels.icon} ${label}`;
}

function updateDrillLevelColor() {
  const quizScreen = document.getElementById('screen-quiz');
  if (quizScreen) {
    quizScreen.dataset.level = state.level;
  }
}

// ========== LEARNING QUIZ (shuffled question queue) ==========
function showLearningQuestion() {
  // Hide feedback area from previous question
  const feedbackArea = document.getElementById('feedback-area');
  if (feedbackArea) feedbackArea.style.display = 'none';
  
  // Update review button in header
  updateReviewHeaderButton();
  
  // Get current question from queue
  const queue = session.questionQueue;
  console.log('showLearningQuestion - queue:', queue, 'index:', session.currentQuestionIndex);
  if (!queue || session.currentQuestionIndex >= queue.length) {
    showResult();
    return;
  }
  
  const currentQ = queue[session.currentQuestionIndex];
  const item = currentQ.item;
  const skill = currentQ.skill;
  console.log('currentQ:', currentQ, 'item:', item, 'skill:', skill);
  console.log('item.w:', item?.w, 'item.k:', item?.k, 'item.r:', item?.r);
  
  // Update session tracking
  session.currentItemIndex = currentQ.itemIndex;
  session.currentSkillIndex = currentQ.skillIndex;
  
  // Update skill badge and level color
  updateSkillBadge(skill);
  updateDrillLevelColor();
  
  // Play new question sound
  playSound('newQuestion');
  
  // Use session.allItems if available (for unit quiz), otherwise getPool()
  const pool = session.allItems || getPool();
  
  // Filter pool to same item type (vocab/kanji/grammar) for distractors
  const getItemType = (i) => i.k ? 'kanji' : i.p ? 'grammar' : 'vocab';
  const itemType = getItemType(item);
  const sameTypePool = pool.filter(i => getItemType(i) === itemType);
  
  if (!pool || pool.length === 0) {
    console.error('No pool data available');
    alert('Error: No data available for quiz.');
    showScreen('drill');
    return;
  }
  
  const totalQuestions = queue.length;
  const currentQuestion = session.currentQuestionIndex + 1;
  document.getElementById('quiz-progress').textContent = `${currentQuestion}/${totalQuestions}`;
  
  const wordEl = document.getElementById('quiz-word');
  const readingEl = document.getElementById('quiz-reading');
  const promptEl = document.getElementById('quiz-prompt');
  const audioBtn = document.getElementById('quiz-audio-btn');
  
  let correct, options = [];
  
  if (skill === 'listening') {
    promptEl.textContent = getText('quiz_listen_select') || 'Listen and select the correct word';
    wordEl.textContent = '🔊';
    readingEl.textContent = getText('quiz_tap_play') || 'Tap play to listen';
    audioBtn.style.display = 'block';
    
    // Helper: convert katakana to hiragana
    const katakanaToHiragana = (str) => {
      if (!str) return '';
      return str.replace(/[\u30A1-\u30F6]/g, (match) => 
        String.fromCharCode(match.charCodeAt(0) - 0x60)
      );
    };
    // Helper: get all readings as array
    const getAllReadings = (r) => r ? r.split('、').map(s => s.trim()).filter(s => s) : [];
    // Helper: get random reading from all readings
    const getRandomReading = (r) => {
      const readings = getAllReadings(r);
      if (readings.length === 0) return '';
      return readings[Math.floor(Math.random() * readings.length)];
    };
    // Helper: convert reading to TTS format (hiragana, remove parentheses)
    const getReadingForTTS = (reading) => {
      if (!reading) return '';
      // Convert katakana to hiragana for better TTS
      const hiragana = katakanaToHiragana(reading);
      // "かな（う）" → "かなう"
      return hiragana.replace(/（/g, '').replace(/）/g, '');
    };
    // Helper: format kanji with okurigana for display based on selected reading
    const formatKanjiWithOkurigana = (kanji, reading) => {
      if (!kanji || !reading) return kanji;
      // Extract okurigana from reading like "かな（う）" or "カナ（ウ）" → "う"
      const match = reading.match(/（(.+)）/);
      if (match) {
        return kanji + '（' + katakanaToHiragana(match[1]) + '）';
      }
      return kanji;
    };
    
    // For grammar items: listen to pattern, select meaning
    if (item.p) {
      promptEl.textContent = getText('quiz_listen_select_meaning') || 'Listen and select the correct meaning';
      currentWord = item.r || item.p;
      session.currentItem = item;
      setTimeout(() => playAudio(), 300);
      
      correct = item.m[state.lang] || item.m.en;
      options = [correct];
      
      // Filter out items with same meaning
      sameTypePool.filter(i => {
        if (i.id === item.id) return false;
        const iMeaning = i.m ? (i.m[state.lang] || i.m.en) : null;
        if (!iMeaning) return false;
        if (iMeaning === correct) return false;
        return true;
      })
        .sort(() => Math.random() - 0.5)
        .slice(0, 3)
        .forEach(i => options.push(i.m[state.lang] || i.m.en));
    } else {
      // For kanji/vocab: listen to reading, select reading (all hiragana for consistency)
      // For kanji, randomly select one reading (訓読み or 音読み)
      let selectedReading = '';
      if (item.k && item.r) {
        selectedReading = getRandomReading(item.r);
      }
      
      // For TTS, use selected reading (as hiragana)
      currentWord = getReadingForTTS(selectedReading) || item.r || item.w || item.k;
      session.currentItem = item;
      setTimeout(() => playAudio(), 300);
      
      // Always use hiragana reading for listening options (consistent display)
      correct = getReadingForTTS(selectedReading) || item.r || item.w;
      options = [correct];
      
      // Get correct item's reading for comparison (without okurigana markers)
      const correctReading = getReadingForTTS(selectedReading) || item.r || '';
      
      // Filter out items with same reading (to avoid multiple correct answers)
      sameTypePool.filter(i => {
        if (i.id === item.id) return false;
        if (!(i.r || i.w)) return false;
        // Exclude items with any reading that matches correct answer
        const iReadings = getAllReadings(i.r).map(r => getReadingForTTS(r));
        if (correctReading && iReadings.includes(correctReading)) return false;
        // Also exclude if w matches (for hiragana-only words)
        if (i.w === correctReading) return false;
        return true;
      })
        .sort(() => Math.random() - 0.5)
        .slice(0, 3)
        .forEach(i => {
          // Always use hiragana reading for distractors
          const distReading = getRandomReading(i.r);
          options.push(getReadingForTTS(distReading) || i.r || i.w);
        });
    }
      
  } else if (skill === 'reading') {
    promptEl.textContent = getText('quiz_select_reading') || 'Select the correct reading';
    
    // For grammar items, show pattern and ask for meaning instead
    if (item.p) {
      // Grammar: pattern → meaning (since there's no "reading" for grammar)
      promptEl.textContent = getText('quiz_select_meaning') || 'Select the correct meaning';
      wordEl.textContent = item.p;
      readingEl.textContent = '';
      audioBtn.style.display = 'block';
      currentWord = item.r || item.p;
      session.currentItem = item;
      
      correct = item.m[state.lang] || item.m.en;
      options = [correct];
      
      sameTypePool.filter(i => {
        if (i.id === item.id) return false;
        const iMeaning = i.m ? (i.m[state.lang] || i.m.en) : null;
        if (!iMeaning) return false;
        if (iMeaning === correct) return false;
        return true;
      })
        .sort(() => Math.random() - 0.5)
        .slice(0, 3)
        .forEach(i => options.push(i.m[state.lang] || i.m.en));
    } else {
      // Vocab/Kanji: word → reading
      wordEl.textContent = item.k || item.w || item.p;
      readingEl.textContent = '';
      audioBtn.style.display = 'block';
      const getFirstReading = (r) => r ? r.split('、')[0].trim() : '';
      currentWord = getFirstReading(item.r) || item.p || item.w;
      session.currentItem = item;
      
      correct = item.r || item.p || item.w;
      options = [correct];
      
      sameTypePool.filter(i => {
        if (i.id === item.id) return false;
        if (!(i.r || i.p || i.w)) return false;
        const iReading = i.r || i.p || i.w;
        if (iReading === correct) return false;
        return true;
      })
        .sort(() => Math.random() - 0.5)
        .slice(0, 3)
        .forEach(i => options.push(i.r || i.p || i.w));
    }
      
  } else if (skill === 'meaning') {
    promptEl.textContent = getText('quiz_select_meaning') || 'Select the correct meaning';
    if (item.k) {
      // 漢字アイテム：読みを下に表示
      wordEl.textContent = item.k;
      readingEl.textContent = item.r || '';
      currentWord = item.r || item.k;
    } else if (item.p) {
      // 文法アイテム
      wordEl.textContent = item.p;
      readingEl.textContent = '';
      currentWord = item.r || item.p;
    } else {
      // 語彙アイテム：レベルに応じて振り仮名を適用
      const wordWithFurigana = addFurigana(item.w, item.r, state.level);
      wordEl.innerHTML = wordWithFurigana;
      // 振り仮名が付いた場合は読みを非表示
      readingEl.textContent = wordWithFurigana.includes('<ruby>') ? '' : (item.r || '');
      currentWord = item.r || item.w;
    }
    audioBtn.style.display = 'block';
    session.currentItem = item; // Store for playAudio
    
    correct = item.m[state.lang] || item.m.en;
    options = [correct];
    // Filter to only use items with proper translations (not English fallback when lang != 'en')
    const hasProperTranslation = (i) => {
      if (state.lang === 'en') return true;
      const trans = i.m[state.lang];
      // Check if translation exists and is not just English (contains non-ASCII)
      return trans && /[^\x00-\x7F]/.test(trans);
    };
    // Filter out items with same meaning (to avoid duplicate options)
    sameTypePool.filter(i => {
      if (i.id === item.id) return false;
      if (!hasProperTranslation(i)) return false;
      // Exclude items with same meaning
      const iMeaning = i.m[state.lang] || i.m.en;
      if (iMeaning === correct) return false;
      return true;
    })
      .sort(() => Math.random() - 0.5)
      .slice(0, 3)
      .forEach(i => options.push(i.m[state.lang] || i.m.en));
      
  } else if (skill === 'writing') {
    promptEl.textContent = getText('quiz_select_kanji') || 'Select the correct kanji/word';
    // Show reading and meaning, user selects kanji
    wordEl.textContent = item.r || item.p || '';
    readingEl.textContent = item.m[state.lang] || item.m.en || '';
    audioBtn.style.display = 'block';
    
    // For TTS, use reading if available
    currentWord = item.r || item.w || item.k || item.p;
    session.currentItem = item; // Store for playAudio
    
    correct = item.k || item.w || item.p;
    options = [correct];
    
    // Get correct item's reading for comparison
    const getFirstReading = (r) => r ? r.split('、')[0].trim() : '';
    const correctReading = getFirstReading(item.r) || '';
    
    // Filter out items with same reading (to avoid multiple correct answers when reading is shown)
    sameTypePool.filter(i => {
      if (i.id === item.id) return false;
      if (!(i.k || i.w || i.p)) return false;
      // Exclude items with same reading
      const iReading = getFirstReading(i.r) || '';
      if (correctReading && iReading === correctReading) return false;
      return true;
    })
      .sort(() => Math.random() - 0.5)
      .slice(0, 3)
      .forEach(i => options.push(i.k || i.w || i.p));
  }
  
  // Helper to check proper translation
  const hasProperTrans = (i) => {
    if (state.lang === 'en' || !i.m) return true;
    const trans = i.m[state.lang];
    return trans && /[^\x00-\x7F]/.test(trans);
  };
  
  // Ensure 4 unique options
  options = [...new Set(options)];
  let attempts = 0;
  const maxAttempts = 50; // Prevent infinite loop
  while (options.length < 4 && attempts < maxAttempts) {
    attempts++;
    const extra = sameTypePool[Math.floor(Math.random() * sameTypePool.length)];
    if (extra) {
      let opt;
      if (skill === 'listening' || skill === 'writing') opt = extra.k || extra.w || extra.p;
      else if (skill === 'reading') {
        // For grammar items in reading skill, we ask for meaning not reading
        if (extra.p && extra.m) {
          opt = extra.m[state.lang] || extra.m.en;
        } else {
          opt = extra.r || extra.w;
        }
      }
      else if (skill === 'meaning') {
        // For meaning skill, only use items with proper meaning data
        if (extra.m && hasProperTrans(extra)) {
          opt = extra.m[state.lang] || extra.m.en;
        } else if (extra.m && attempts > 30) {
          // After many attempts, use English as fallback
          opt = extra.m.en;
        }
      }
      if (opt && !options.includes(opt)) options.push(opt);
    }
  }
  
  // Final fallback: fill with English if still not enough
  if (options.length < 4 && skill === 'meaning') {
    const englishOptions = sameTypePool
      .filter(i => i.m && i.m.en && !options.includes(i.m.en))
      .map(i => i.m.en)
      .sort(() => Math.random() - 0.5);
    while (options.length < 4 && englishOptions.length > 0) {
      options.push(englishOptions.pop());
    }
  }
  options = options.sort(() => Math.random() - 0.5);
  
  const optionsDiv = document.getElementById('quiz-options');
  optionsDiv.innerHTML = '';
  options.forEach(opt => {
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    btn.textContent = opt;
    btn.onclick = () => selectLearningAnswer(btn, opt, correct, item, skill);
    optionsDiv.appendChild(btn);
  });
}

function selectLearningAnswer(btn, selected, correct, item, skill) {
  document.querySelectorAll('#quiz-options .option-btn').forEach(b => { 
    b.onclick = null; 
    if (b.textContent === correct) b.classList.add('correct'); 
  });
  
  const isCorrect = selected === correct;
  const baseKey = `${state.level}_${item.id}`;
  const skillKey = `${baseKey}_${skill}`;
  const categoryKey = getCategoryKey();
  
  // Play sound effect
  playSound(isCorrect ? 'correct' : 'incorrect');
  
  // Track answer
  FujisanAnalytics.trackAnswer(state.category, skill, isCorrect, item.id);
  
  if (isCorrect) {
    session.correct++;
    state.totalCorrect++;
    state.skills[skillKey] = true;
    
    // Remove from mistakes immediately when answered correctly
    if (state.mistakes[categoryKey]) {
      state.mistakes[categoryKey] = state.mistakes[categoryKey].filter(id => id !== item.id);
    }
  } else {
    btn.classList.add('incorrect');
    session.wrong++;
    // Add to mistakes
    if (!state.mistakes[categoryKey]) state.mistakes[categoryKey] = [];
    if (!state.mistakes[categoryKey].includes(item.id)) {
      state.mistakes[categoryKey].push(item.id);
    }
  }
  
  // Update SRS (Spaced Repetition System)
  updateSrs(item, isCorrect);
  
  state.totalAnswered++;
  trackDailyActivity();
  recordDrillActivity(isCorrect); // Record for progress stats
  
  // Record detailed progress for AI Coach
  recordProgressForCoach({
    level: state.level,
    unit: state.unit || 1,
    category: state.category || 'vocab',
    skill: skill,
    correct: isCorrect,
    itemId: item.id,
    itemWord: item.w || item.k || item.p || ''
  });
  
  session.answers.push({ item, skill, selected, correct, isCorrect });
  session.lastAnswer = { item, skill, selected, correct, isCorrect };
  saveState();
  
  // Disable all options
  document.querySelectorAll('.option-btn').forEach(b => b.disabled = true);
  
  // Show feedback area
  showFeedbackArea(item, skill, selected, correct, isCorrect);
}

function showFeedbackArea(item, skill, userAnswer, correctAnswer, isCorrect) {
  const feedbackArea = document.getElementById('feedback-area');
  const feedbackResult = document.getElementById('feedback-result');
  const feedbackText = feedbackResult.querySelector('.feedback-text');
  const feedbackAnswer = document.getElementById('feedback-answer');
  const feedbackAiSection = document.getElementById('feedback-ai-section');
  const feedbackAiComment = document.getElementById('feedback-ai-comment');
  const followupInput = document.getElementById('followup-input');
  const followupResponse = document.getElementById('followup-response');
  
  // Get translations
  const texts = UI_TEXTS[state.lang] || UI_TEXTS['en'];
  const correctText = texts.quiz_correct || 'Correct';
  const incorrectText = texts.quiz_wrong || 'Wrong';
  const correctAnswerLabel = texts.correct_answer || 'Correct answer';
  
  // Reset
  feedbackResult.className = 'feedback-result ' + (isCorrect ? 'correct' : 'incorrect');
  feedbackText.textContent = isCorrect ? `✓ ${correctText}！` : `✗ ${incorrectText}`;
  followupResponse.style.display = 'none';
  followupResponse.innerHTML = '';
  if (followupInput) followupInput.value = '';
  
  // Show correct answer for wrong answers
  if (!isCorrect) {
    feedbackAnswer.textContent = `${correctAnswerLabel}: ${correctAnswer}`;
    feedbackAnswer.style.display = 'block';
    
    // Show AI section and auto-load explanation
    if (canUseAITutor()) {
      feedbackAiSection.style.display = 'block';
      feedbackAiComment.innerHTML = '<div class="ai-comment-loading">' + getText('generating_explanation') + '</div>';
      
      // Store for follow-up questions
      session.pendingAI = { item, skill, userAnswer, correctAnswer };
      
      // Update placeholder based on language
      updateFollowupPlaceholder();
      
      // Auto-fetch AI explanation
      fetchAIExplanationAuto(item, skill, userAnswer, correctAnswer);
    } else {
      feedbackAiSection.style.display = 'none';
    }
  } else {
    feedbackAnswer.style.display = 'none';
    feedbackAiSection.style.display = 'none';
    session.pendingAI = null;
  }
  
  feedbackArea.style.display = 'block';
  
  // Show next button with localized text
  const nextBtn = document.getElementById('feedback-next-btn');
  if (nextBtn) {
    const texts = UI_TEXTS[state.lang] || UI_TEXTS.en;
    nextBtn.textContent = texts.quiz_next || 'Next →';
    nextBtn.style.display = 'block';
  }
}

function updateFollowupPlaceholder() {
  const input = document.getElementById('followup-input');
  if (!input) return;
  
  const placeholders = {
    en: 'Ask a follow-up question...',
    'zh-TW': '輸入追問...',
    'zh-CN': '输入追问...',
    ko: '추가 질문을 입력하세요...',
    vi: 'Đặt câu hỏi tiếp theo...',
    id: 'Ajukan pertanyaan lanjutan...'
  };
  
  input.placeholder = placeholders[state.lang] || placeholders.en;
}

async function fetchAIExplanationAuto(item, skill, userAnswer, correctAnswer) {
  const feedbackAiComment = document.getElementById('feedback-ai-comment');
  const itemId = item.id;
  const cacheKey = `${state.level}_${itemId}_${state.lang}_${skill}`;
  
  // Check cache first
  const cached = getCachedAIExplanation(itemId + '_' + state.lang + '_' + skill, state.level);
  if (cached) {
    feedbackAiComment.innerHTML = cached;
    console.log('AI explanation loaded from cache:', cacheKey);
    return;
  }
  
  try {
    const word = item.w || item.k || item.p || '';
    const reading = item.r || '';
    const meaning = item.m ? (item.m[state.lang] || item.m.en) : '';
    
    const langInstructions = {
      en: 'Respond in English. Be concise (2-3 sentences max).',
      'zh-TW': '用繁體中文回答。簡潔扼要（最多2-3句）。',
      'zh-CN': '用简体中文回答。简洁扼要（最多2-3句）。',
      ko: '한국어로 답변. 간결하게 (2-3문장).',
      vi: 'Trả lời bằng tiếng Việt. Ngắn gọn (2-3 câu).',
      id: 'Jawab dalam Bahasa Indonesia. Singkat (2-3 kalimat).'
    };
    
    const skillNames = {
      listening: 'listening (heard audio, chose wrong word)',
      reading: 'reading (saw kanji, chose wrong reading)',
      meaning: 'meaning (saw word, chose wrong meaning)',
      writing: 'writing (saw reading, chose wrong kanji)'
    };
    
    const prompt = `${langInstructions[state.lang] || langInstructions.en}

Japanese word: ${word}
Reading: ${reading}  
Meaning: ${meaning}
Question type: ${skillNames[skill] || skill}
User's wrong answer: ${userAnswer}
Correct answer: ${correctAnswer}

Explain briefly:
1. Why "${correctAnswer}" is correct
2. A quick memory tip`;

    console.log('Fetching AI explanation for:', word);
    const response = await callGeminiAPI(prompt);
    
    if (response) {
      setAICache(cacheKey, response);
      feedbackAiComment.innerHTML = response;
    } else {
      feedbackAiComment.innerHTML = getSimpleExplanation(item, skill, correctAnswer);
    }
    
  } catch (error) {
    console.error('AI explanation error:', error);
    // Show simple fallback explanation instead of error message
    feedbackAiComment.innerHTML = getSimpleExplanation(item, skill, correctAnswer);
  }
}

// Simple fallback explanation when AI is not available
function getSimpleExplanation(item, skill, correctAnswer) {
  const word = item.w || item.k || item.p || '';
  const reading = item.r || '';
  const meaning = item.m ? (item.m[state.lang] || item.m.en) : '';
  
  const explanations = {
    en: `<strong>${word}</strong> (${reading})<br>Meaning: ${meaning}<br><em>Study this word carefully and try again!</em>`,
    'zh-TW': `<strong>${word}</strong> (${reading})<br>意思: ${meaning}<br><em>請仔細學習這個詞彙！</em>`,
    'zh-CN': `<strong>${word}</strong> (${reading})<br>意思: ${meaning}<br><em>请仔细学习这个词汇！</em>`,
    ko: `<strong>${word}</strong> (${reading})<br>의미: ${meaning}<br><em>이 단어를 잘 공부하세요!</em>`,
    vi: `<strong>${word}</strong> (${reading})<br>Nghĩa: ${meaning}<br><em>Hãy học kỹ từ này!</em>`,
    id: `<strong>${word}</strong> (${reading})<br>Arti: ${meaning}<br><em>Pelajari kata ini dengan baik!</em>`
  };
  
  return explanations[state.lang] || explanations.en;
}

function getErrorMessage() {
  const messages = {
    en: 'Could not load explanation. You can ask a question below.',
    'zh-TW': '無法載入解説。您可以在下方提問。',
    'zh-CN': '无法加载解说。您可以在下方提问。',
    ko: '설명을 불러올 수 없습니다. 아래에서 질문할 수 있습니다.',
    vi: 'Không thể tải giải thích. Bạn có thể đặt câu hỏi bên dưới.',
    id: 'Tidak dapat memuat penjelasan. Anda bisa bertanya di bawah.'
  };
  return messages[state.lang] || messages.en;
}

function toggleFollowup() {
  const followupDiv = document.getElementById('feedback-followup');
  const askMoreBtn = document.getElementById('ask-more-btn');
  if (followupDiv.style.display === 'none') {
    followupDiv.style.display = 'flex';
    askMoreBtn.style.display = 'none';
    document.getElementById('followup-input').focus();
  } else {
    followupDiv.style.display = 'none';
    askMoreBtn.style.display = 'block';
  }
}

async function askFollowup() {
  const input = document.getElementById('followup-input');
  const btn = document.getElementById('followup-btn');
  const responseDiv = document.getElementById('followup-response');
  
  const question = input.value.trim();
  if (!question || !session.pendingAI) return;
  
  btn.disabled = true;
  responseDiv.style.display = 'block';
  responseDiv.innerHTML = '<span style="color:#667eea">Loading...</span>';
  
  try {
    const { item } = session.pendingAI;
    const word = item.w || item.k || item.p || '';
    const reading = item.r || '';
    const meaning = item.m ? (item.m[state.lang] || item.m.en) : '';
    
    const langInstructions = {
      en: 'Please respond in English.',
      'zh-TW': '請用繁體中文回答。',
      'zh-CN': '请用简体中文回答。',
      ko: '한국어로 답변해 주세요.',
      vi: 'Vui lòng trả lời bằng tiếng Việt.',
      id: 'Tolong jawab dalam Bahasa Indonesia.'
    };
    
    const prompt = `${langInstructions[state.lang] || langInstructions.en}

Context: The learner is studying this Japanese word:
Word: ${word}
Reading: ${reading}
Meaning: ${meaning}

Learner's question: ${question}

Give a helpful, concise answer (2-3 sentences).`;

    const response = await callGeminiAPI(prompt);
    responseDiv.innerHTML = response || getErrorMessage();
    
  } catch (error) {
    console.error('Follow-up error:', error);
    responseDiv.innerHTML = getErrorMessage();
  }
  
  btn.disabled = false;
  input.value = '';
}

// AI Explanation Cache
const AI_CACHE_KEY = 'fujisan_ai_cache_v1';
const AI_CACHE_MAX_AGE = 30 * 24 * 60 * 60 * 1000; // 30 days

// Call Gemini API for explanations
async function callGeminiAPI(prompt) {
  // Try Netlify Function first
  try {
    console.log('Calling Netlify function...');
    const response = await fetch('/.netlify/functions/ai-question', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        question: prompt,
        context: 'AI explanation for quiz answer',
        level: state.level,
        lang: state.lang
      })
    });
    
    console.log('Netlify response status:', response.status);
    
    if (response.ok) {
      const data = await response.json();
      console.log('Netlify response data:', data);
      return data.answer ? data.answer.replace(/\n/g, '<br>') : null;
    } else {
      const errorData = await response.text();
      console.error('Netlify function error response:', response.status, errorData);
    }
  } catch (error) {
    console.error('Netlify function error:', error.message);
  }
  
  // Fallback: Try Vertex AI if available
  try {
    if (typeof firebase !== 'undefined' && firebase.app) {
      console.log('Trying Vertex AI fallback...');
      const { getVertexAI, getGenerativeModel } = await import('https://www.gstatic.com/firebasejs/10.7.1/firebase-vertexai-preview.js');
      const vertexAI = getVertexAI(firebase.app());
      const model = getGenerativeModel(vertexAI, { model: 'gemini-2.0-flash' });
      
      const result = await model.generateContent(prompt);
      const response = await result.response;
      return response.text().replace(/\n/g, '<br>');
    }
  } catch (error) {
    console.error('Vertex AI error:', error.message);
  }
  
  throw new Error('AI API not available');
}

function getAICache() {
  try {
    const cache = JSON.parse(localStorage.getItem(AI_CACHE_KEY) || '{}');
    // Clean expired entries
    const now = Date.now();
    let cleaned = false;
    Object.keys(cache).forEach(key => {
      if (cache[key].timestamp && now - cache[key].timestamp > AI_CACHE_MAX_AGE) {
        delete cache[key];
        cleaned = true;
      }
    });
    if (cleaned) localStorage.setItem(AI_CACHE_KEY, JSON.stringify(cache));
    return cache;
  } catch (e) {
    return {};
  }
}

function setAICache(key, value) {
  try {
    const cache = getAICache();
    cache[key] = { value, timestamp: Date.now() };
    
    // Limit cache size (max 500 entries)
    const keys = Object.keys(cache);
    if (keys.length > 500) {
      // Remove oldest entries
      keys.sort((a, b) => (cache[a].timestamp || 0) - (cache[b].timestamp || 0));
      keys.slice(0, keys.length - 500).forEach(k => delete cache[k]);
    }
    
    localStorage.setItem(AI_CACHE_KEY, JSON.stringify(cache));
  } catch (e) {
    console.warn('AI cache save failed:', e);
  }
}

function getCachedAIExplanation(itemId, level) {
  const cache = getAICache();
  const key = `${level}_${itemId}`;
  return cache[key]?.value || null;
}

function advanceToNextQuestion() {
  // Hide feedback area
  const feedbackArea = document.getElementById('feedback-area');
  if (feedbackArea) feedbackArea.style.display = 'none';
  
  // Hide next button
  const nextBtn = document.getElementById('feedback-next-btn');
  if (nextBtn) nextBtn.style.display = 'none';
  
  session.pendingAI = null;
  
  // Move to next question in queue
  session.currentQuestionIndex++;
  
  if (!session.questionQueue || session.currentQuestionIndex >= session.questionQueue.length) {
    showResult();
  } else {
    showLearningQuestion();
  }
}

// ========== AI EXPLANATION SYSTEM ==========
// AI explanation is now handled via feedback area (showFeedbackArea function)

async function fetchAIExplanation(item, skill, userAnswer, correctAnswer) {
  // Legacy function - now handled by fetchAIExplanationForFeedback
  return;
}

function hideAIExplanation() {
  // Legacy function - feedback area handles this now
}

// ========== MOCK (JLPT Format) ==========
let mockState = {
  mode: 'full', // full, quick, section
  selectedSet: 1,
  selectedSection: null,
  questions: [],
  current: 0,
  answers: {},
  listeningSet: null,
  audioPlayed: {}
};

function selectMockMode(mode) {
  mockState.mode = mode;
  // Update mode buttons (both old and new style)
  document.querySelectorAll('.mock-mode-btn, .mock-toggle-btn').forEach(b => b.classList.remove('active'));
  const modeBtn = document.querySelector(`.mock-mode-btn[data-mode="${mode}"]`);
  const toggleBtn = document.querySelector(`.mock-toggle-btn[data-mode="${mode}"]`);
  if (modeBtn) modeBtn.classList.add('active');
  if (toggleBtn) toggleBtn.classList.add('active');
  
  const sectionSelect = document.getElementById('mockSectionSelect');
  if (mode === 'section') {
    sectionSelect.classList.remove('hidden');
  } else {
    sectionSelect.classList.add('hidden');
    mockState.selectedSection = null;
    document.querySelectorAll('.mock-section-btn').forEach(b => b.classList.remove('active'));
  }
  
  updateMockInfo();
}

function selectMockSection(btn) {
  document.querySelectorAll('.mock-section-btn, .mock-pill').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  mockState.selectedSection = btn.dataset.section;
  updateMockInfo();
}

function selectMockSet(set) {
  mockState.selectedSet = set;
  // Update grid buttons (if they exist)
  document.querySelectorAll('.mock-set-btn').forEach(b => b.classList.remove('active'));
  const gridBtn = document.querySelector(`.mock-set-btn[data-set="${set}"]`);
  if (gridBtn) gridBtn.classList.add('active');
  
  // Update select dropdown
  const selectEl = document.getElementById('mockSetSelect');
  if (selectEl) selectEl.value = set;
  
  // Update label (if exists)
  const labelEl = document.getElementById('mockSetLabel');
  if (labelEl) labelEl.textContent = set === 'random' ? '(Random)' : `(Set ${set})`;
  
  // No longer open HTML in new tab - use unified mock.js interface instead
}

function updateMockInfo() {
  let qCount = MOCK_QUESTIONS.full;
  let time = MOCK_TIME.full;
  
  if (mockState.mode === 'section' && mockState.selectedSection) {
    qCount = MOCK_QUESTIONS[mockState.selectedSection] || MOCK_QUESTIONS.full;
    time = MOCK_TIME[mockState.selectedSection] || MOCK_TIME.full;
  }
  
  document.getElementById('mock-q-count').textContent = qCount;
  document.getElementById('mock-time').textContent = time;
}

async function startMock() {
  if (!canUseMockTest()) {
    showUpgradeModal('mock', 'Pro');
    return;
  }
  
  // Load Mock data
  showLoading(`Loading ${state.level} Mock Test...`);
  const loaded = await loadMockData(state.level);
  hideLoading();
  
  if (!loaded || !window.MOCK_DATA[state.level]) {
    alert('Mock test data not available for ' + state.level + '. Please try again.');
    return;
  }
  
  const mockData = window.MOCK_DATA[state.level];
  
  // Check if data has sets
  if (!mockData.sets || !mockData.sets[1]) {
    alert('Mock test data is invalid. Please refresh the page.');
    return;
  }
  
  // Get set number
  const setNum = mockState.selectedSet === 'random' ? mockData.getRandomSet() : mockState.selectedSet;
  mockState.listeningSet = setNum;
  
  // Build questions based on mode
  let questions = [];
  const sectionMap = {
    'moji': '言語知識（文字・語彙）',
    'bunpou': '言語知識（文法）・読解',
    'choukai': '聴解'
  };
  
  if (mockState.mode === 'full') {
    questions = mockData.sets[setNum].map(q => ({ ...q, setNum }));
  } else if (mockState.mode === 'section' && mockState.selectedSection) {
    const sectionName = sectionMap[mockState.selectedSection];
    questions = mockData.getSectionQuestions(setNum, sectionName).map(q => ({ ...q, setNum }));
  }
  
  if (questions.length === 0) {
    alert('No questions available for selected options.');
    return;
  }
  
  // Initialize session
  mockState.questions = questions;
  mockState.current = 0;
  mockState.answers = {};
  mockState.audioPlayed = {};
  
  session = { 
    mode: 'mock', 
    questions: questions, 
    current: 0, 
    correct: 0, 
    wrong: 0, 
    startTime: Date.now(), 
    answers: [] 
  };
  
  // Calculate time using constants
  let timeMinutes = MOCK_TIME.full;
  if (mockState.mode === 'section') {
    timeMinutes = MOCK_TIME[mockState.selectedSection] || MOCK_TIME.full;
  }
  
  // Track mock test start
  FujisanAnalytics.trackMockStart(state.level, setNum, mockState.mode);
  
  showScreen('mock-q');
  startTimer(timeMinutes * 60);
  showMockQuestion();
}

function showMockQuestion() {
  const q = mockState.questions[mockState.current];
  
  // Update progress
  document.getElementById('mock-progress').textContent = `${mockState.current + 1}/${mockState.questions.length}`;
  
  // Update section header (innerHTML for ruby support)
  document.getElementById('mockSectionCurrent').innerHTML = q.section || '';
  document.getElementById('mockSubsectionCurrent').innerHTML = (q.subsection || q.type || '').replace('_', ' ');
  
  // Get instruction based on subsection
  const instruction = getMockInstruction(q.subsection || q.type);
  document.getElementById('mock-instruction').innerHTML = instruction;
  
  // Show question text (聴解以外)
  const isListeningSection = (q.section || '').includes('聴解') || (q.type || '').includes('聴解') ||
                             ['課題理解', 'ポイント理解', '概要理解', '即時応答', '統合理解'].includes(q.type || '');
  if (!isListeningSection) {
    const questionText = (q.q || q.text || '').replace(/<u>/g, '<u>').replace(/<\/u>/g, '</u>');
    document.getElementById('mock-question-text').innerHTML = questionText;
  }
  
  // Handle audio for listening section
  const audioBtn = document.getElementById('mockAudioBtn');
  const audioEl = document.getElementById('mockAudio');
  const questionTextEl = document.getElementById('mock-question-text');
  
  // N5聴解セクション判定
  const isListening = (q.section || '').includes('聴解') || (q.type || '').includes('聴解') || 
                      ['課題理解', 'ポイント理解', '概要理解', '即時応答', '統合理解'].includes(q.type || '');
  
  if (isListening) {
    // 聴解問題：テキスト非表示、TTSボタン表示、質問文は表示
    const listeningMsg = {
      en: '🎧 Press play to listen',
      ja: '🎧 音声を再生してください',
      zh: '🎧 请点击播放音频',
      ko: '🎧 재생을 눌러 들으세요',
      vi: '🎧 Nhấn phát để nghe',
      th: '🎧 กดเล่นเพื่อฟัง',
      id: '🎧 Tekan putar untuk mendengarkan',
      es: '🎧 Presiona reproducir para escuchar',
      fr: '🎧 Appuyez sur lecture pour écouter',
      pt: '🎧 Pressione play para ouvir'
    };
    const lang = localStorage.getItem('fujisan_lang') || (state && state.lang) || 'en';
    const msg = listeningMsg[lang] || listeningMsg['en'];
    
    // 質問文を取得（question または q フィールド）
    const questionText = q.question || q.q || '';
    
    // 会話形式の判定（scriptフィールドも確認）
    const scriptContent = q.script || '';
    const isConversation = scriptContent.includes('おとこのひと') || scriptContent.includes('おんなのひと') || 
                           scriptContent.includes('男の人') || scriptContent.includes('女の人') ||
                           scriptContent.includes('おとこ：') || scriptContent.includes('おんな：') || 
                           scriptContent.includes('男：') || scriptContent.includes('女：') ||
                           scriptContent.includes('M:') || scriptContent.includes('F:');
    
    if (isConversation) {
      questionTextEl.innerHTML = '<div style="text-align:center;padding:10px;">' +
        '<img src="images/mock/conversation.png" alt="会話" style="max-width:280px;width:100%;margin-bottom:10px;">' +
        '<div style="color:#666;">' + msg + '</div></div>';
    } else {
      questionTextEl.innerHTML = '<div style="text-align:center;padding:20px;color:#666;">' + msg + '</div>';
    }
    
    // TTSテキスト：script + question を連結
    // 質問文が主語なしの場合、適切な主語を追加
    let questionForTTS = questionText;
    if (questionText && !questionText.match(/^(男|女|おとこ|おんな|何|なに|どこ|いつ|だれ|どれ|どの|どう|いくつ|いくら)/)) {
      // 会話の最後の発話者に基づいて主語を推測
      if (scriptContent.includes('M:') || scriptContent.includes('おとこ：') || scriptContent.includes('男：')) {
        if (scriptContent.lastIndexOf('M:') > scriptContent.lastIndexOf('F:') ||
            scriptContent.lastIndexOf('おとこ：') > scriptContent.lastIndexOf('おんな：')) {
          questionForTTS = '男の人は、' + questionText;
        } else {
          questionForTTS = '女の人は、' + questionText;
        }
      }
    }
    
    const ttsText = (q.script || q.q || (typeof q.text === 'string' ? q.text : '') || '') + 
                    (questionForTTS ? '。質問：' + questionForTTS : '');
    
    audioBtn.classList.remove('hidden');
    audioBtn.innerHTML = '🔊';
    audioBtn.onclick = () => playListeningTTS(ttsText);
    audioEl.src = '';
  } else if (q.audio) {
    audioBtn.classList.remove('hidden');
    const audioPath = getAudioPath(state.level, q.setNum, q.audio);
    audioEl.src = audioPath;
    audioBtn.onclick = () => playMockAudio();
  } else {
    audioBtn.classList.add('hidden');
    audioEl.src = '';
  }
  
  // Show options
  const optionsDiv = document.getElementById('mock-options');
  optionsDiv.innerHTML = '';
  
  const labels = ['A', 'B', 'C', 'D'];
  const options = q.opts || q.options;
  
  // 絵文字のみの選択肢かどうかを検出
  const isEmojiOnly = options.every(opt => {
    if (!opt) return true;
    const str = String(opt).trim();
    // 絵文字のみかチェック（絵文字は2文字以下で、通常の文字を含まない）
    return str.length <= 4 && /^[\u{1F300}-\u{1F9FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}\u{1F600}-\u{1F64F}\u{1F680}-\u{1F6FF}]+$/u.test(str);
  });
  
  if (isEmojiOnly) {
    optionsDiv.classList.add('emoji-grid');
  } else {
    optionsDiv.classList.remove('emoji-grid');
  }
  
  options.forEach((opt, idx) => {
    if (!opt) return; // Skip empty options
    
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    
    // 絵文字のみの場合は大きく表示
    if (isEmojiOnly) {
      btn.classList.add('emoji-option');
    }
    
    // Check if already answered - show selection only (no correct/incorrect until end)
    if (mockState.answers[q.id]) {
      const answer = mockState.answers[q.id];
      if (labels[idx] === answer.selected) {
        btn.classList.add('selected');
        const levelColors = { N5: '#34c759', N4: '#007aff', N3: '#af52de', N2: '#1e3a5f', N1: '#ff3b30' };
        const levelColor = levelColors[state.level] || '#007aff';
        btn.style.backgroundColor = levelColor + '20';
        btn.style.borderColor = levelColor;
        btn.style.color = levelColor;
      }
    }
    btn.onclick = () => selectMockAnswer(btn, labels[idx], q);
    
    // アイコン表示（icons配列がある場合）
    let iconHtml = '';
    if (q.icons && q.icons[idx]) {
      const count = (q.counts && q.counts[idx]) || 1;
      iconHtml = `<span class="option-icons" style="font-size:1.5em;margin-right:8px;">${q.icons[idx].repeat(count)}</span>`;
    }
    
    if (isEmojiOnly) {
      btn.innerHTML = `<span class="option-label">${labels[idx]}</span><span style="font-size:2em;margin-left:8px;">${opt}</span>`;
    } else {
      btn.innerHTML = `<span class="option-label">${labels[idx]}</span> ${iconHtml}${opt}`;
    }
    optionsDiv.appendChild(btn);
  });
  
  // Update navigation buttons
  document.getElementById('mockPrevBtn').disabled = mockState.current === 0;
  document.getElementById('mockNextBtn').textContent = mockState.current === mockState.questions.length - 1 ? 'Finish' : 'Next →';
}


// TTS再生関数 (N5聴解対応)
function playTTS(text) {
  if ('speechSynthesis' in window) {
    speechSynthesis.cancel();
    // rubyタグは漢字部分だけ残す（ふりがなを除去）
    const cleanText = text
      .replace(/<ruby>([^<]*)<rt>[^<]*<\/rt><\/ruby>/g, '$1')
      .replace(/<[^>]*>/g, '');
    const utterance = new SpeechSynthesisUtterance(cleanText);
    utterance.lang = 'ja-JP';
    utterance.rate = 0.9;
    
    const audioBtn = document.getElementById('mockAudioBtn');
    if (audioBtn) {
      utterance.onstart = () => {
        audioBtn.innerHTML = '<svg viewBox="0 0 24 24" width="24" height="24"><path fill="currentColor" d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg> 再生中...';
      };
      utterance.onend = () => {
        audioBtn.innerHTML = '<svg viewBox="0 0 24 24" width="24" height="24"><path fill="currentColor" d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/></svg> もう一度';
      };
    }
    speechSynthesis.speak(utterance);
  }
}


// N5聴解用TTS関数 - 男女の声で会話を読み上げ
function playListeningTTS(text) {
  if (!('speechSynthesis' in window)) {
    alert('このブラウザはTTSに対応していません');
    return;
  }
  
  speechSynthesis.cancel();
  
  // rubyタグは漢字部分だけ残す（ふりがなを除去）
  let cleanText = text
    .replace(/<ruby>([^<]*)<rt>[^<]*<\/rt><\/ruby>/g, '$1')
    .replace(/<[^>]*>/g, '');
  
  // 改行で分割してから処理
  const rawLines = cleanText.split('\n').map(l => l.trim()).filter(l => l);
  
  // 会話パターン（M: F: おとこ： おんな： 男： 女： 話者A： 話者B： 上司： 部下： 社員： 課長：）でさらに分割
  const lines = [];
  rawLines.forEach(line => {
    // 話者ラベルを含む行は分割
    const parts = line.split(/(?=M:|F:|おとこ：|おんな：|男：|女：|話者A：|話者B：|上司：|部下：|社員：|課長：)/);
    parts.forEach(p => {
      if (p.trim()) lines.push(p.trim());
    });
  });
  
  const audioBtn = document.getElementById('mockAudioBtn');
  if (audioBtn) {
    audioBtn.innerHTML = '⏹️ 再生中...';
    audioBtn.disabled = true;
  }
  
  let index = 0;
  
  function speakNext() {
    if (index >= lines.length) {
      if (audioBtn) {
        audioBtn.innerHTML = '🔊';
        audioBtn.disabled = false;
      }
      return;
    }
    
    let line = lines[index].trim();
    if (!line) { index++; speakNext(); return; }
    
    let isMale = false;
    let isFemale = false;
    
    // M: F: 形式に対応
    if (line.startsWith('M:') || line.startsWith('M：')) {
      isMale = true;
      line = line.replace(/^M[:：]\s*/, '').trim();
    } else if (line.startsWith('F:') || line.startsWith('F：')) {
      isFemale = true;
      line = line.replace(/^F[:：]\s*/, '').trim();
    } else if (line.startsWith('おとこ：') || line.startsWith('男：')) {
      isMale = true;
      line = line.replace(/^(おとこ：|男：)/, '').trim();
    } else if (line.startsWith('おんな：') || line.startsWith('女：')) {
      isFemale = true;
      line = line.replace(/^(おんな：|女：)/, '').trim();
    } else if (line.startsWith('話者A：') || line.startsWith('話者A:')) {
      isMale = true;
      line = line.replace(/^話者A[:：]\s*/, '').trim();
    } else if (line.startsWith('話者B：') || line.startsWith('話者B:')) {
      isFemale = true;
      line = line.replace(/^話者B[:：]\s*/, '').trim();
    } else if (line.startsWith('上司：') || line.startsWith('上司:') || line.startsWith('課長：') || line.startsWith('課長:')) {
      isMale = true;
      line = line.replace(/^(上司|課長)[:：]\s*/, '').trim();
    } else if (line.startsWith('部下：') || line.startsWith('部下:') || line.startsWith('社員：') || line.startsWith('社員:')) {
      isFemale = true;
      line = line.replace(/^(部下|社員)[:：]\s*/, '').trim();
    }
    
    if (!line) { index++; speakNext(); return; }
    
    const utterance = new SpeechSynthesisUtterance(line);
    utterance.lang = 'ja-JP';
    utterance.rate = 0.85;
    
    const voices = speechSynthesis.getVoices();
    const japaneseVoices = voices.filter(v => v.lang.startsWith('ja'));
    
    // 男性と女性の声を分ける
    const maleVoices = japaneseVoices.filter(v => 
      v.name.toLowerCase().includes('male') || 
      v.name.includes('Otoya') || 
      v.name.includes('Ichiro') ||
      (!v.name.toLowerCase().includes('female') && !v.name.includes('Kyoko') && !v.name.includes('O-Ren'))
    );
    const femaleVoices = japaneseVoices.filter(v => 
      v.name.toLowerCase().includes('female') || 
      v.name.includes('Kyoko') || 
      v.name.includes('O-Ren')
    );
    
    if (japaneseVoices.length > 0) {
      if (isMale) {
        utterance.voice = maleVoices.length > 0 ? maleVoices[0] : japaneseVoices[0];
        utterance.pitch = 0.85;
      } else if (isFemale) {
        utterance.voice = femaleVoices.length > 0 ? femaleVoices[0] : japaneseVoices[japaneseVoices.length > 1 ? 1 : 0];
        utterance.pitch = 1.2;
      } else {
        // 状況説明などはニュートラルな声
        utterance.voice = japaneseVoices[0];
        utterance.pitch = 1.0;
      }
    }
    
    utterance.onend = () => { index++; setTimeout(speakNext, 400); };
    utterance.onerror = () => { index++; speakNext(); };
    speechSynthesis.speak(utterance);
  }
  
  if (speechSynthesis.getVoices().length === 0) {
    speechSynthesis.onvoiceschanged = () => speakNext();
  } else {
    speakNext();
  }
}

function stopListeningTTS() {
  speechSynthesis.cancel();
  const audioBtn = document.getElementById('mockAudioBtn');
  if (audioBtn) {
    audioBtn.innerHTML = '🔊';
    audioBtn.disabled = false;
  }
}

function getMockInstruction(subsection) {
  const instructions = {
    'もんだい1_漢字読み': '＿のことばはひらがなでどうかきますか。いちばんいいものをえらんでください。',
    'もんだい2_表記': '＿のことばはどうかきますか。いちばんいいものをえらんでください。',
    'もんだい3_文脈規定': '（　）になにがはいりますか。いちばんいいものをえらんでください。',
    'もんだい4_言い換え': '＿のことばとだいたいおなじいみのものをえらんでください。',
    'もんだい1_文の文法1': '（　）になにがはいりますか。いちばんいいものをえらんでください。',
    'もんだい2_文の組み立て': '＿のぶんにはどのようにいれますか。いちばんいいものをえらんでください。',
    'もんだい3_文章の文法': 'つぎのぶんしょうをよんで、しつもんにこたえてください。',
    'もんだい4_短文読解': 'つぎのぶんしょうをよんで、しつもんにこたえてください。',
    'もんだい5_中文読解': 'つぎのぶんしょうをよんで、しつもんにこたえてください。',
    'もんだい6_情報検索': 'つぎのぶんしょうをよんで、しつもんにこたえてください。',
    'もんだい1_課題理解': 'しつもんをきいて、いちばんいいこたえをえらんでください。',
    'もんだい2_ポイント理解': 'しつもんをきいて、いちばんいいこたえをえらんでください。',
    'もんだい3_発話表現': 'えをみながらしつもんをきいてください。➡のひとはなんといいますか。',
    'もんだい4_即時応答': 'しつもんをきいて、いちばんいいこたえをえらんでください。'
  };
  return instructions[subsection] || '';
}

function playMockAudio() {
  const audioEl = document.getElementById('mockAudio');
  const audioBtn = document.getElementById('mockAudioBtn');
  
  if (audioEl.paused) {
    audioEl.play();
    audioBtn.classList.add('playing');
    audioBtn.innerHTML = '<svg viewBox="0 0 24 24" width="24" height="24"><path fill="currentColor" d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg> Playing...';
  } else {
    audioEl.pause();
    audioBtn.classList.remove('playing');
    audioBtn.innerHTML = '<svg viewBox="0 0 24 24" width="24" height="24"><path fill="currentColor" d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/></svg> Play Audio';
  }
  
  audioEl.onended = () => {
    audioBtn.classList.remove('playing');
    audioBtn.innerHTML = '<svg viewBox="0 0 24 24" width="24" height="24"><path fill="currentColor" d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/></svg> Play Again';
  };
}

function selectMockAnswer(btn, selected, question) {
  // Save answer without showing correct/incorrect (real exam style)
  mockState.answers[question.id] = { selected, question };
  
  // Play selection sound
  playSound('newQuestion');
  
  // Get level color
  const levelColors = { N5: '#34c759', N4: '#007aff', N3: '#af52de', N2: '#1e3a5f', N1: '#ff3b30' };
  const levelColor = levelColors[state.level] || '#007aff';
  
  // Highlight selected answer with level color
  document.querySelectorAll('#mock-options .option-btn').forEach(b => {
    b.classList.remove('selected');
    b.style.backgroundColor = '';
    b.style.borderColor = '';
    b.style.color = '';
  });
  btn.classList.add('selected');
  btn.style.backgroundColor = levelColor + '20'; // 20% opacity
  btn.style.borderColor = levelColor;
  btn.style.color = levelColor;
}

function mockPrevQuestion() {
  if (mockState.current > 0) {
    mockState.current--;
    showMockQuestion();
  }
}

function mockNextQuestion() {
  if (mockState.current < mockState.questions.length - 1) {
    mockState.current++;
    showMockQuestion();
  } else {
    // All questions answered - go to grading
    clearInterval(timerInterval);
    showMockResult();
  }
}

function showMockResult() {
  // Grade all answers
  let correct = 0;
  let wrong = 0;
  const wrongAnswers = [];
  
  mockState.questions.forEach(q => {
    const answer = mockState.answers[q.id];
    if (answer) {
      const isCorrect = (answer.selected === q.ans || answer.selected === ['A','B','C','D'][q.answer]);
      if (isCorrect) {
        correct++;
        state.totalCorrect++;
      } else {
        wrong++;
        wrongAnswers.push({ question: q, selected: answer.selected, correct: q.ans || ['A','B','C','D'][q.answer] });
      }
      state.totalAnswered++;
    } else {
      // Unanswered = wrong
      wrong++;
      wrongAnswers.push({ question: q, selected: null, correct: q.ans || ['A','B','C','D'][q.answer] });
    }
  });
  
  trackDailyActivity();
  
  // Calculate score and pass/fail
  const total = mockState.questions.length;
  const score = Math.round((correct / total) * 100);
  const passed = score >= PASS_THRESHOLD;
  
  // Save mock result to history
  if (!state.mockHistory) state.mockHistory = [];
  state.mockHistory.push({
    date: new Date().toISOString(),
    level: state.level,
    setNumber: mockState.selectedSet,
    score: score,
    correct: correct,
    total: total,
    passed: passed,
    mode: mockState.mode
  });
  saveState();
  
  // Track mock test complete
  FujisanAnalytics.trackMockComplete(state.level, mockState.selectedSet, score, correct, total, passed);
  
  // Show result screen
  showScreen('mock-result');
  
  // Display score
  document.getElementById('mock-result-icon').textContent = passed ? 'PASS' : 'FAIL';
  document.getElementById('mock-result-icon').className = 'mock-result-icon ' + (passed ? 'passed' : 'failed');
  document.getElementById('mock-result-score').textContent = score + '%';
  document.getElementById('mock-result-label').textContent = passed ? '合格 PASSED!' : '不合格 Keep Studying!';
  document.getElementById('mock-result-label').className = 'mock-result-label ' + (passed ? 'passed' : 'failed');
  document.getElementById('mock-result-stats').innerHTML = `
    <div class="mock-result-stat"><div class="mock-result-stat-value">${correct}</div><div class="mock-result-stat-label">Correct</div></div>
    <div class="mock-result-stat"><div class="mock-result-stat-value">${wrong}</div><div class="mock-result-stat-label">Wrong</div></div>
    <div class="mock-result-stat"><div class="mock-result-stat-value">${total}</div><div class="mock-result-stat-label">Total</div></div>
  `;
  
  // Section breakdown
  const sectionScores = {};
  mockState.questions.forEach(q => {
    const section = q.section || 'Other';
    if (!sectionScores[section]) sectionScores[section] = { correct: 0, total: 0 };
    sectionScores[section].total++;
    const answer = mockState.answers[q.id];
    if (answer && (answer.selected === q.ans || answer.selected === ['A','B','C','D'][q.answer])) sectionScores[section].correct++;
  });
  
  // Save for AI Coach pass probability
  saveMockResultForCoach(sectionScores, score);
  
  let sectionHtml = '<div class="section-breakdown-title">Section Breakdown</div>';
  Object.entries(sectionScores).forEach(([section, data]) => {
    const pct = Math.round((data.correct / data.total) * 100);
    const sectionName = section === 'moji_goi' ? '文字・語彙' : section === 'bunpou_dokkai' ? '文法・読解' : section === 'choukai' ? '聴解' : section;
    sectionHtml += `
      <div class="section-score-row">
        <span class="section-name">${sectionName}</span>
        <span class="section-score ${pct >= PASS_THRESHOLD ? 'pass' : 'fail'}">${data.correct}/${data.total} (${pct}%)</span>
      </div>
    `;
  });
  document.getElementById('mock-section-breakdown').innerHTML = sectionHtml;
  
  // Generate wrong answers with explanations
  generateMockExplanations(wrongAnswers);
  
  // Generate AI study guidance
  generateAIStudyGuidance(sectionScores, score, passed);
}

function generateMockExplanations(wrongAnswers) {
  const listEl = document.getElementById('mock-explanations-list');
  if (!listEl) return;
  
  if (wrongAnswers.length === 0) {
    listEl.innerHTML = '<div style="text-align:center;padding:20px;color:var(--success);font-weight:600;">Perfect score! No mistakes to review.</div>';
    return;
  }
  
  let html = '';
  wrongAnswers.forEach((item, i) => {
    const q = item.question;
    const yourAnswer = item.selected || '(No answer)';
    const correctAnswer = item.correct;
    
    // Generate explanation based on question type
    let explanation = generateQuestionExplanation(q);
    
    html += `
      <div class="mock-explanation-item">
        <div class="mock-explanation-q">${i + 1}. ${q.q || q.text || 'Question'}</div>
        <div class="mock-explanation-your">Your answer: ${yourAnswer}</div>
        <div class="mock-explanation-correct">Correct: ${correctAnswer}</div>
        <div class="mock-explanation-detail">${explanation}</div>
      </div>
    `;
  });
  
  listEl.innerHTML = html;
}

function generateQuestionExplanation(q) {
  // Generate contextual explanation based on question type
  const subsection = q.subsection || '';
  
  if (subsection.includes('漢字読み')) {
    return `<b>漢字の読み方:</b> This kanji reading question tests your ability to recognize how kanji are pronounced in context. Focus on common readings and practice identifying 音読み (on'yomi) vs 訓読み (kun'yomi).`;
  }
  if (subsection.includes('表記')) {
    return `<b>表記 (Writing):</b> This tests your ability to write words correctly. Pay attention to when to use kanji vs hiragana, and common spelling patterns.`;
  }
  if (subsection.includes('文脈規定')) {
    return `<b>文脈規定 (Context):</b> This vocabulary question requires understanding how words fit in context. The correct answer matches both meaning and grammatical usage.`;
  }
  if (subsection.includes('言い換え')) {
    return `<b>言い換え (Paraphrase):</b> This tests your understanding of synonyms and similar expressions. Build your vocabulary by learning word families.`;
  }
  if (subsection.includes('文の文法')) {
    return `<b>文法 (Grammar):</b> This grammar point tests sentence structure. Review the pattern and practice with similar examples.`;
  }
  if (subsection.includes('読解')) {
    return `<b>読解 (Reading):</b> For reading comprehension, practice scanning for key information and understanding the main idea before looking at details.`;
  }
  if (subsection.includes('聴解') || q.section === 'choukai') {
    return `<b>聴解 (Listening):</b> Listening questions require understanding spoken Japanese. Practice with native audio and focus on key phrases and question words.`;
  }
  
  return `Review this question type and practice similar patterns. Understanding the underlying grammar or vocabulary concept will help you answer correctly next time.`;
}

function generateAIStudyGuidance(sectionScores, score, passed) {
  const guidanceEl = document.getElementById('ai-guidance-content');
  if (!guidanceEl) return;
  
  const lang = state.lang || 'en';
  const texts = UI_TEXTS[lang] || UI_TEXTS['en'];
  
  // Show loading state
  guidanceEl.innerHTML = `<div style="text-align:center;padding:20px;color:var(--text-light);">${texts.mock_report_analyzing}</div>`;
  
  // Build section analysis data
  const sectionData = [];
  Object.entries(sectionScores).forEach(([section, data]) => {
    const pct = Math.round((data.correct / data.total) * 100);
    const sectionName = section === 'moji_goi' ? 'Vocabulary & Kanji (文字・語彙)' : 
                        section === 'bunpou_dokkai' ? 'Grammar & Reading (文法・読解)' : 
                        section === 'choukai' ? 'Listening (聴解)' : section;
    sectionData.push({ name: sectionName, score: pct, correct: data.correct, total: data.total });
  });
  
  // Language instruction for AI
  const langInstruction = {
    'en': 'Respond in English.',
    'zh-TW': 'Please respond entirely in Traditional Chinese (繁體中文).',
    'zh-CN': 'Please respond entirely in Simplified Chinese (简体中文).',
    'ko': 'Please respond entirely in Korean (한국어).',
    'vi': 'Please respond entirely in Vietnamese (Tiếng Việt).'
  };
  
  // Create prompt for Gemini
  const prompt = `You are an expert JLPT tutor. Analyze this mock test result and provide a detailed study report.

**Test Results:**
- JLPT Level: ${state.level}
- Overall Score: ${score}%
- Pass Status: ${passed ? 'PASSED (60%+ required)' : 'NOT PASSED (60% required)'}
- Section Breakdown:
${sectionData.map(s => `  • ${s.name}: ${s.score}% (${s.correct}/${s.total})`).join('\n')}

**Instructions:**
${langInstruction[lang] || langInstruction['en']}

Please provide a structured analysis with these sections:

## 📊 Overall Assessment
(2-3 sentences about the overall performance)

## ✅ ${texts.mock_report_strengths}
(List 2-3 specific strengths based on the scores)

## ⚠️ ${texts.mock_report_weaknesses}  
(List 2-3 specific areas that need improvement)

## 📚 ${texts.mock_report_next_steps}
(Provide a concrete 2-week study plan with daily/weekly goals)

## Pro Tips
(2-3 specific, actionable study techniques for the weak areas)

Keep the response concise but informative. Use bullet points for clarity.`;

  // Call Gemini API
  fetchAIGuidance(prompt, guidanceEl, texts);
}

async function fetchAIGuidance(prompt, guidanceEl, texts) {
  try {
    const response = await fetch('/.netlify/functions/ai-question', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        question: prompt,
        context: 'mock_analysis',
        level: state.level
      })
    });
    
    if (!response.ok) throw new Error('API request failed');
    
    const data = await response.json();
    const report = data.answer || data.explanation || '';
    
    if (report) {
      // Format the response with proper styling
      const formattedReport = report
        .replace(/## /g, '<h4 style="margin:16px 0 8px;color:var(--primary);">')
        .replace(/\n\n/g, '</h4>')
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
        .replace(/• /g, '<br>• ')
        .replace(/- /g, '<br>• ');
      
      guidanceEl.innerHTML = `<div class="ai-report">${formattedReport}</div>`;
    } else {
      throw new Error('Empty response');
    }
  } catch (error) {
    console.error('AI Guidance error:', error);
    // Fallback to static guidance
    generateStaticGuidance(guidanceEl, texts);
  }
}

// Fallback static guidance when API fails
function generateStaticGuidance(guidanceEl, texts) {
  const lang = state.lang || 'en';
  
  const staticMessages = {
    'en': `<b>📊 Your results have been recorded.</b><br><br>
      <b>${texts.mock_report_next_steps}:</b><br>
      • Review the wrong answers above<br>
      • Focus on weak sections in your daily practice<br>
      • Take another mock test in 1 week to measure progress<br>
      • Use the Drill mode to strengthen vocabulary and grammar`,
    'zh-TW': `<b>📊 您的結果已記錄。</b><br><br>
      <b>${texts.mock_report_next_steps}:</b><br>
      • 複習上面的錯誤答案<br>
      • 在日常練習中專注於弱點部分<br>
      • 一週後再做一次模擬測驗來衡量進步<br>
      • 使用練習模式來加強詞彙和文法`,
    'zh-CN': `<b>📊 您的结果已记录。</b><br><br>
      <b>${texts.mock_report_next_steps}:</b><br>
      • 复习上面的错误答案<br>
      • 在日常练习中专注于弱点部分<br>
      • 一周后再做一次模拟测验来衡量进步<br>
      • 使用练习模式来加强词汇和语法`,
    'ko': `<b>📊 결과가 기록되었습니다.</b><br><br>
      <b>${texts.mock_report_next_steps}:</b><br>
      • 위의 틀린 답을 복습하세요<br>
      • 매일 연습에서 약한 부분에 집중하세요<br>
      • 1주일 후 다시 모의 테스트를 보고 진전을 측정하세요<br>
      • 드릴 모드를 사용하여 어휘와 문법을 강화하세요`,
    'vi': `<b>📊 Kết quả của bạn đã được ghi lại.</b><br><br>
      <b>${texts.mock_report_next_steps}:</b><br>
      • Xem lại các câu trả lời sai ở trên<br>
      • Tập trung vào các phần yếu trong luyện tập hàng ngày<br>
      • Làm bài thi thử khác sau 1 tuần để đo lường tiến bộ<br>
      • Sử dụng chế độ Luyện tập để củng cố từ vựng và ngữ pháp`
  };
  
  guidanceEl.innerHTML = staticMessages[lang] || staticMessages['en'];
}

function confirmExitMock() { 
  if (confirm('Exit mock test? Your progress will be saved for review.')) { 
    clearInterval(timerInterval); 
    showScreen('mock'); 
  } 
}

// ========== TIMER ==========
function startTimer(seconds) {
  const timerEl = document.getElementById('timer');
  timerEl.className = 'timer';
  let remaining = seconds;
  timerInterval = setInterval(() => {
    remaining--;
    timerEl.textContent = `${Math.floor(remaining / 60)}:${(remaining % 60).toString().padStart(2, '0')}`;
    if (remaining <= 60) timerEl.classList.add('danger');
    else if (remaining <= 300) timerEl.classList.add('warning');
    if (remaining <= 0) { clearInterval(timerInterval); showResult(); }
  }, 1000);
}

// ========== RESULT ==========
function showResult() {
  clearInterval(timerInterval);
  const total = session.questions.length;
  const score = total > 0 ? Math.round(session.correct / total * 100) : 0;
  const elapsed = Date.now() - session.startTime;
  
  // Track drill complete
  FujisanAnalytics.trackDrillComplete(
    state.category, 
    state.level, 
    session.unitIndex || state.unit || 1, 
    session.correct, 
    total, 
    score
  );
  
  document.getElementById('result-score').textContent = score + '%';
  document.getElementById('result-correct').textContent = session.correct;
  document.getElementById('result-wrong').textContent = session.wrong;
  document.getElementById('result-time').textContent = `${Math.floor(elapsed / 60000)}:${Math.floor((elapsed % 60000) / 1000).toString().padStart(2, '0')}`;
  
  // Level color styling
  const levelColors = {
    'N5': '#34c759', 'N4': '#007aff', 'N3': '#af52de', 'N2': '#1e3a5f', 'N1': '#ff3b30'
  };
  const levelColor = levelColors[state.level] || '#007aff';
  const resultCard = document.getElementById('result-card');
  
  // Praise messages by language
  const praiseMessages = {
    'en': {
      excellent: ['🎉 Excellent!', 'Amazing work! You\'re mastering this unit!'],
      good: ['👍 Good job!', 'Keep up the great work!'],
      keep: ['💪 Keep going!', 'Practice makes perfect!']
    },
    'zh-TW': {
      excellent: ['🎉 太棒了！', '你完全掌握了這個單元！'],
      good: ['👍 做得好！', '繼續保持！'],
      keep: ['💪 加油！', '熟能生巧！']
    },
    'zh-CN': {
      excellent: ['🎉 太棒了！', '你完全掌握了这个单元！'],
      good: ['👍 做得好！', '继续保持！'],
      keep: ['💪 加油！', '熟能生巧！']
    },
    'ko': {
      excellent: ['🎉 훌륭해요!', '이 유닛을 완벽하게 마스터했어요!'],
      good: ['👍 잘했어요!', '계속 화이팅!'],
      keep: ['💪 힘내세요!', '연습이 완벽을 만들어요!']
    },
    'vi': {
      excellent: ['🎉 Xuất sắc!', 'Bạn đã thành thạo bài học này!'],
      good: ['👍 Tốt lắm!', 'Tiếp tục phát huy nhé!'],
      keep: ['💪 Cố lên!', 'Luyện tập tạo nên hoàn hảo!']
    },
    'id': {
      excellent: ['🎉 Luar biasa!', 'Kamu sudah menguasai unit ini!'],
      good: ['👍 Bagus!', 'Terus semangat!'],
      keep: ['💪 Semangat!', 'Latihan membuat sempurna!']
    }
  };
  
  const lang = state.lang || 'en';
  const msgs = praiseMessages[lang] || praiseMessages['en'];
  
  let praise, label;
  if (score >= 80) { 
    document.getElementById('result-icon').textContent = '✓'; 
    label = msgs.excellent[0];
    praise = msgs.excellent[1];
    resultCard.style.borderTop = `4px solid ${levelColor}`;
    resultCard.style.background = `linear-gradient(135deg, ${levelColor}15, ${levelColor}05)`;
  } else if (score >= PASS_THRESHOLD) { 
    document.getElementById('result-icon').textContent = '👍'; 
    label = msgs.good[0];
    praise = msgs.good[1];
    resultCard.style.borderTop = `4px solid ${levelColor}`;
    resultCard.style.background = '';
  } else { 
    document.getElementById('result-icon').textContent = '→'; 
    label = msgs.keep[0];
    praise = msgs.keep[1];
    resultCard.style.borderTop = '';
    resultCard.style.background = '';
  }
  
  document.getElementById('result-label').textContent = label;
  document.getElementById('result-praise').textContent = praise;
  document.getElementById('result-praise').style.color = levelColor;
  
  // Mark unit as complete if score >= pass threshold
  const unitComplete = score >= PASS_THRESHOLD;
  if (unitComplete && session.unitIndex !== undefined) {
    // Store completed unit
    if (!state.completedUnits) state.completedUnits = {};
    if (!state.completedUnits[state.level]) state.completedUnits[state.level] = [];
    if (!state.completedUnits[state.level].includes(session.unitIndex)) {
      state.completedUnits[state.level].push(session.unitIndex);
    }
    saveState();
  }
  
  // Show/hide next unit button
  const nextUnitBtn = document.getElementById('nextUnitBtn');
  const reviewBtn = document.getElementById('reviewMistakesBtn');
  
  if (session.unitIndex !== undefined) {
    const d = DATA[state.level];
    const allItems = [...(d.vocab || []), ...(d.kanji || []), ...(d.grammar || [])];
    const totalUnits = Math.ceil(allItems.length / ITEMS_PER_UNIT);
    const hasNextUnit = session.unitIndex < totalUnits - 1;
    
    if (hasNextUnit) {
      nextUnitBtn.style.display = 'block';
      nextUnitBtn.style.background = levelColor;
      nextUnitBtn.textContent = `Unit ${session.unitIndex + 2} →`;
    } else {
      nextUnitBtn.style.display = 'none';
    }
  } else {
    nextUnitBtn.style.display = 'none';
  }
  
  // Show review button only if there are mistakes
  const wrongs = session.answers.filter(a => !a.isCorrect);
  reviewBtn.style.display = wrongs.length > 0 ? 'block' : 'none';
  
  const today = new Date().toDateString();
  if (state.lastStudy !== today) { state.streak = state.lastStudy === new Date(Date.now() - 86400000).toDateString() ? state.streak + 1 : 1; state.lastStudy = today; saveState(); }
  
  // Show wrong answers with AI explanation
  const wrongSection = document.getElementById('wrongAnswersSection');
  const wrongList = document.getElementById('wrongAnswersList');
  
  if (wrongs.length > 0) {
    wrongSection.style.display = 'block';
    wrongList.innerHTML = wrongs.map((a, i) => {
      const q = a.question;
      const word = q.k || q.p || q.w || '';
      const qId = `${state.level}_${q.id}`;
      return `
        <div class="wrong-answer-card">
          <div class="wrong-answer-q">${word}</div>
          <div class="wrong-answer-info">
            <span class="wrong-answer-your">Your answer: ${a.selected}</span>
            <span class="wrong-answer-correct">✓ Correct: ${a.correct}</span>
          </div>
          <div class="ai-explanation" id="ai-exp-${i}">
            <div class="ai-explanation-loading">
              <div class="spinner"></div>
              <span>Loading AI explanation...</span>
            </div>
          </div>
        </div>
      `;
    }).join('');
    
    // Fetch AI explanations for each wrong answer
    wrongs.forEach((a, i) => {
      const q = a.question;
      const qId = `${state.level}_${q.id}_${a.selected.replace(/[^a-zA-Z0-9]/g, '')}`;
      
      // Check if this question was wrong before
      const mistakeKey = `${state.level}_${state.category}`;
      const wasPreviouslyWrong = state.mistakes[mistakeKey] && state.mistakes[mistakeKey].includes(q.id);
      const mistakeCount = getMistakeCount(q.id);
      
      fetchMockAIExplanation(q, a.selected, a.correct, qId, i, { wasPreviouslyWrong, mistakeCount });
    });
  } else {
    wrongSection.style.display = 'none';
  }
  
  // Generate AI Coach feedback for the result
  updateResultAIFeedback(score, session.correct, session.wrong, session.answers);
  
  showScreen('result');
}

// Generate AI feedback for result screen
function updateResultAIFeedback(score, correct, wrong, answers) {
  const feedbackEl = document.getElementById('ai-feedback-text');
  if (!feedbackEl) return;
  
  const lang = state.lang || 'en';
  const streak = calculateStreak();
  const level = state.level;
  
  // Feedback templates by language
  const templates = {
    'en': {
      excellent: [
        `Perfect! ${correct} correct answers shows real mastery.`,
        `Outstanding! Your ${level} skills are improving fast.`,
        `${score}%! You're ready for the next challenge.`
      ],
      good: [
        `Nice work! ${correct} out of ${correct + wrong} correct.`,
        `Good progress! Focus on the ${wrong} mistakes for next time.`,
        `${score}% - getting stronger! Review and try again.`
      ],
      needsWork: [
        `${correct} correct - keep practicing! Every mistake is a learning opportunity.`,
        `Focus on the items you missed. You'll get there!`,
        `${wrong} to review. Small steps lead to big progress.`
      ],
      streakBonus: ` ${streak} day streak! 🔥`,
      unitComplete: ` Unit complete!`
    },
    'zh-TW': {
      excellent: [
        `完美！${correct}題正確，真的很棒！`,
        `太厲害了！你的${level}能力進步很快。`,
        `${score}%！準備好迎接下一個挑戰了。`
      ],
      good: [
        `做得好！${correct + wrong}題中答對${correct}題。`,
        `進步了！下次專注練習這${wrong}個錯誤。`,
        `${score}% - 越來越強了！複習後再試一次。`
      ],
      needsWork: [
        `答對${correct}題 - 繼續練習！每個錯誤都是學習機會。`,
        `專注練習錯的題目，你一定可以的！`,
        `${wrong}題要複習。小步驟帶來大進步。`
      ],
      streakBonus: ` 連續${streak}天！🔥`,
      unitComplete: ` 單元完成！`
    },
    'zh-CN': {
      excellent: [
        `完美！${correct}题正确，真的很棒！`,
        `太厉害了！你的${level}能力进步很快。`,
        `${score}%！准备好迎接下一个挑战了。`
      ],
      good: [
        `做得好！${correct + wrong}题中答对${correct}题。`,
        `进步了！下次专注练习这${wrong}个错误。`,
        `${score}% - 越来越强了！复习后再试一次。`
      ],
      needsWork: [
        `答对${correct}题 - 继续练习！每个错误都是学习机会。`,
        `专注练习错的题目，你一定可以的！`,
        `${wrong}题要复习。小步骤带来大进步。`
      ],
      streakBonus: ` 连续${streak}天！🔥`,
      unitComplete: ` 单元完成！`
    },
    'ko': {
      excellent: [
        `완벽해요! ${correct}개 정답, 정말 대단해요!`,
        `훌륭해요! ${level} 실력이 빠르게 늘고 있어요.`,
        `${score}%! 다음 도전 준비 완료!`
      ],
      good: [
        `잘했어요! ${correct + wrong}개 중 ${correct}개 정답.`,
        `발전했어요! 다음엔 ${wrong}개 오답에 집중해봐요.`,
        `${score}% - 점점 강해지고 있어요! 복습 후 다시 도전!`
      ],
      needsWork: [
        `${correct}개 정답 - 계속 연습해요! 실수는 배움의 기회예요.`,
        `틀린 문제에 집중하면 분명 할 수 있어요!`,
        `${wrong}개 복습할 거예요. 작은 걸음이 큰 발전을 만들어요.`
      ],
      streakBonus: ` ${streak}일 연속! 🔥`,
      unitComplete: ` 유닛 완료!`
    },
    'vi': {
      excellent: [
        `Hoàn hảo! ${correct} câu đúng, tuyệt vời!`,
        `Xuất sắc! Kỹ năng ${level} của bạn tiến bộ nhanh.`,
        `${score}%! Sẵn sàng cho thử thách tiếp theo.`
      ],
      good: [
        `Tốt lắm! ${correct}/${correct + wrong} câu đúng.`,
        `Tiến bộ rồi! Lần sau tập trung vào ${wrong} câu sai nhé.`,
        `${score}% - đang mạnh lên! Ôn tập và thử lại.`
      ],
      needsWork: [
        `${correct} câu đúng - tiếp tục luyện tập! Mỗi lỗi sai là cơ hội học.`,
        `Tập trung vào phần sai. Bạn làm được!`,
        `${wrong} câu cần ôn. Bước nhỏ tạo tiến bộ lớn.`
      ],
      streakBonus: ` ${streak} ngày liên tục! 🔥`,
      unitComplete: ` Hoàn thành unit!`
    },
    'id': {
      excellent: [
        `Sempurna! ${correct} jawaban benar, luar biasa!`,
        `Hebat! Kemampuan ${level} kamu berkembang pesat.`,
        `${score}%! Siap untuk tantangan berikutnya.`
      ],
      good: [
        `Bagus! ${correct} dari ${correct + wrong} benar.`,
        `Maju terus! Fokus pada ${wrong} kesalahan untuk lain kali.`,
        `${score}% - semakin kuat! Ulang dan coba lagi.`
      ],
      needsWork: [
        `${correct} benar - terus berlatih! Setiap kesalahan adalah kesempatan belajar.`,
        `Fokus pada yang salah. Kamu pasti bisa!`,
        `${wrong} untuk diulang. Langkah kecil membawa kemajuan besar.`
      ],
      streakBonus: ` ${streak} hari berturut! 🔥`,
      unitComplete: ` Unit selesai!`
    },
    'es': {
      excellent: [
        `¡Perfecto! ${correct} respuestas correctas, ¡increíble!`,
        `¡Excelente! Tus habilidades de ${level} mejoran rápido.`,
        `¡${score}%! Listo para el siguiente desafío.`
      ],
      good: [
        `¡Bien! ${correct} de ${correct + wrong} correctas.`,
        `¡Progresando! Enfócate en los ${wrong} errores la próxima vez.`,
        `${score}% - ¡cada vez mejor! Repasa y vuelve a intentar.`
      ],
      needsWork: [
        `${correct} correctas - ¡sigue practicando! Cada error es oportunidad de aprender.`,
        `Enfócate en lo que fallaste. ¡Lo lograrás!`,
        `${wrong} para repasar. Pequeños pasos, gran progreso.`
      ],
      streakBonus: ` ¡${streak} días seguidos! 🔥`,
      unitComplete: ` ¡Unidad completada!`
    },
    'pt': {
      excellent: [
        `Perfeito! ${correct} respostas corretas, incrível!`,
        `Excelente! Suas habilidades de ${level} estão melhorando rápido.`,
        `${score}%! Pronto para o próximo desafio.`
      ],
      good: [
        `Bom trabalho! ${correct} de ${correct + wrong} corretas.`,
        `Progredindo! Foque nos ${wrong} erros na próxima vez.`,
        `${score}% - cada vez melhor! Revise e tente novamente.`
      ],
      needsWork: [
        `${correct} corretas - continue praticando! Cada erro é chance de aprender.`,
        `Foque no que errou. Você consegue!`,
        `${wrong} para revisar. Pequenos passos, grande progresso.`
      ],
      streakBonus: ` ${streak} dias seguidos! 🔥`,
      unitComplete: ` Unidade completa!`
    }
  };
  
  const t = templates[lang] || templates['en'];
  let feedback = '';
  
  // Select feedback based on score
  if (score >= 90) {
    feedback = t.excellent[Math.floor(Math.random() * t.excellent.length)];
  } else if (score >= 60) {
    feedback = t.good[Math.floor(Math.random() * t.good.length)];
  } else {
    feedback = t.needsWork[Math.floor(Math.random() * t.needsWork.length)];
  }
  
  // Add streak bonus message if streak >= 3
  if (streak >= 3) {
    feedback += t.streakBonus;
  }
  
  feedbackEl.textContent = feedback;
}

function goToNextUnit() {
  if (session.unitIndex === undefined) return;
  
  const nextUnit = session.unitIndex + 1;
  const d = DATA[state.level];
  const allItems = [...(d.vocab || []), ...(d.kanji || []), ...(d.grammar || [])];
  const totalUnits = Math.ceil(allItems.length / ITEMS_PER_UNIT);
  
  if (nextUnit < totalUnits) {
    showScreen('drill');
    startUnitDrill(nextUnit);
  } else {
    alert('Congratulations! You\'ve completed all units!');
    goHome();
  }
}

function reviewMistakes() {
  // Get unique items that had wrong answers
  const wrongItems = [];
  const seenIds = new Set();
  session.answers.filter(a => !a.isCorrect).forEach(a => {
    if (!seenIds.has(a.item.id)) {
      seenIds.add(a.item.id);
      wrongItems.push(a.item);
    }
  });
  
  if (wrongItems.length === 0) { 
    alert('No mistakes to review!'); 
    return; 
  }
  
  session = { 
    mode: 'review', 
    items: wrongItems,
    currentItemIndex: 0,
    currentSkillIndex: 0,
    correct: 0, 
    wrong: 0, 
    startTime: Date.now(), 
    answers: [],
    itemResults: {}
  };
  
  document.getElementById('quiz-title').textContent = '📖 ' + (getText('quiz_review_mode') || 'Review');
  showScreen('quiz'); 
  showLearningQuestion();
}

function retrySession() {
  const items = session.items || [];
  if (items.length === 0) {
    alert('No items to retry.');
    return;
  }
  
  session = { 
    mode: session.mode, 
    items: items.sort(() => Math.random() - 0.5),
    currentItemIndex: 0,
    currentSkillIndex: 0,
    correct: 0, 
    wrong: 0, 
    startTime: Date.now(), 
    answers: [],
    itemResults: {}
  };
  
  if (session.mode === 'mock') { 
    showScreen('mock-q'); 
    startTimer(25 * 60); 
    showMockQuestion(); 
  } else { 
    showScreen('quiz'); 
    showLearningQuestion(); 
  }
}

function endSession() { showScreen('drill'); updateDrillCounts(); }
function confirmExit() {
  // Save current progress for resume
  if (session.queue && session.queue.length > 0) {
    const resumeData = {
      level: state.level,
      category: state.category,
      unit: session.unitIndex,
      queue: session.queue,
      currentIndex: session.currentQuestionIndex,
      correctCount: session.correctCount,
      timestamp: Date.now()
    };
    localStorage.setItem('fujisan_resume_session', JSON.stringify(resumeData));
  }
  clearInterval(timerInterval);
  showScreen('drill');
  updateDrillCounts();
}

// Resume drill from saved session
async function resumeDrill(resume) {
  showLoading(`Resuming ${resume.level} drill...`);
  const loaded = await loadDrillData(resume.level);
  hideLoading();
  
  if (!loaded) {
    alert('Failed to load data.');
    return;
  }
  
  session = {
    mode: 'quiz',
    queue: resume.queue,
    currentQuestionIndex: resume.currentIndex,
    correctCount: resume.correctCount || 0,
    unitIndex: resume.unit
  };
  
  showScreen('quiz');
  showLearningQuestion();
}

// ========== AUDIO ==========
let speechSynth = window.speechSynthesis;
function playAudio() {
  const btn = document.querySelector('.screen.active .audio-btn');
  if (btn) { btn.style.transform = 'scale(1.1)'; setTimeout(() => btn.style.transform = 'scale(1)', 200); }
  
  // ドリルモードの場合は事前生成音声を使用
  const item = session.currentItem;
  if (item && item.id && state.level) {
    const level = state.level.toLowerCase();
    const id = item.id;
    
    // カテゴリ判定（漢字はkanji、文法はgrammar、それ以外は直下）
    let subDir = '';
    if (item.k) subDir = '/kanji';
    else if (item.p) subDir = '/grammar';
    
    const audioPath = `/audio/tts/${level}${subDir}/${id}.mp3`;
    const audio = new Audio(audioPath);
    
    audio.play().catch(e => {
      // フォールバック：ブラウザTTS（currentWordには最初の読み方のみが設定されている）
      console.log('TTS file not found, using browser TTS:', e.message);
      playBrowserTTS(currentWord || item.r?.split('、')[0] || item.w || item.k || item.p);
    });
    return;
  }
  
  // 通常のブラウザTTS（模試など）
  if (!currentWord) return;
  playBrowserTTS(currentWord);
}

function playBrowserTTS(text) {
  if (!text) return;
  speechSynth.cancel();
  // rubyタグは漢字部分だけ残す（ふりがなを除去）
  const cleanText = text
    .replace(/<ruby>([^<]*)<rt>[^<]*<\/rt><\/ruby>/g, '$1')
    .replace(/<[^>]*>/g, '');
  const utterance = new SpeechSynthesisUtterance(cleanText);
  utterance.lang = 'ja-JP'; utterance.rate = 0.8;
  const voices = speechSynth.getVoices();
  const jpVoice = voices.find(v => v.lang.includes('ja'));
  if (jpVoice) utterance.voice = jpVoice;
  speechSynth.speak(utterance);
}
speechSynth.onvoiceschanged = () => speechSynth.getVoices();

// ========== SETTINGS ==========
function changeLang(lang) { 
  // 翻訳カバー率が低い言語・レベルの組み合わせに警告
  const lowCoverage = {
    'N2': ['zh-TW', 'zh-CN', 'ko', 'vi'],
    'N3': ['zh-TW', 'zh-CN', 'ko', 'vi']
  };
  if (lang !== 'en' && lowCoverage[state.level]?.includes(lang)) {
    const msgs = {
      'zh-TW': '繁體中文の翻訳は一部のみです。英語が混ざる場合があります。',
      'zh-CN': '简体中文の翻訳は一部のみです。英語が混ざる場合があります。',
      'ko': '한국어の翻訳は一部のみです。英語が混ざる場合があります。',
      'vi': 'Tiếng Việtの翻訳は一部のみです。英語が混ざる場合があります。'
    };
    alert(msgs[lang] || 'Translation coverage is limited for this level.');
  }
  
  // Track language change
  FujisanAnalytics.trackLanguageChange(lang);
  FujisanAnalytics.setUserProperties({ user_language: lang });
  
  state.lang = lang; 
  saveState();
  // LPとの言語設定を同期
  localStorage.setItem('fujisan_lang', lang);
  // 全ての言語セレクターを同期
  document.querySelectorAll('.lang-selector').forEach(sel => sel.value = lang);
  // スワイプ言語セレクターを同期
  syncLangSwiper();
  // カテゴリ名を更新
  updateCategoryNames();
  // UIテキストを更新
  updateUITexts();
  // 90点ダッシュボードを更新
  updateAIGreeting90();
}

// Language Swiper functions
function selectLangSwipe(el, lang) {
  // Update active state
  document.querySelectorAll('.lang-option').forEach(opt => opt.classList.remove('active'));
  el.classList.add('active');
  
  // Scroll to center the selected option
  el.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
  
  // Change language (reuse existing function but skip alert for swipe)
  state.lang = lang;
  saveState();
  localStorage.setItem('fujisan_lang', lang);
  
  // Track
  FujisanAnalytics.trackLanguageChange(lang);
  FujisanAnalytics.setUserProperties({ user_language: lang });
  
  // Update UI instantly
  document.querySelectorAll('.lang-selector').forEach(sel => sel.value = lang);
  updateCategoryNames();
  updateUITexts();
  updateAIGreeting90();
}

function syncLangSwiper() {
  const currentLang = state.lang || 'en';
  document.querySelectorAll('.lang-option').forEach(opt => {
    opt.classList.toggle('active', opt.dataset.lang === currentLang);
    if (opt.dataset.lang === currentLang) {
      setTimeout(() => opt.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' }), 100);
    }
  });
}

function changeQCount(count) { state.qCount = parseInt(count); saveState(); }
function toggleSound(enabled) { 
  state.soundEnabled = enabled; 
  saveState(); 
}
function resetProgress() { if (confirm('Reset all progress? This cannot be undone.')) { localStorage.removeItem(STORAGE_KEY); location.reload(); } }

// Update settings UI when showing settings screen
function updateSettingsUI() {
  const qCountSelect = document.getElementById('q-count');
  if (qCountSelect) qCountSelect.value = state.qCount || 22;
  
  const soundToggle = document.getElementById('sound-toggle');
  if (soundToggle) soundToggle.checked = state.soundEnabled !== false;
  
  const versionDisplay = document.getElementById('app-version-display');
  if (versionDisplay) versionDisplay.textContent = APP_VERSION;
  
  // Update referral code display
  updateReferralDisplay();
  
  // Update current goal display
  updateGoalDisplay();
}

// ========== PLAN SYSTEM ==========
function openSubscriptionModal() { document.getElementById('subscriptionModal').classList.remove('hidden'); }
function closeSubscriptionModal() { document.getElementById('subscriptionModal').classList.add('hidden'); }

function selectPlan(plan) {
  // Default to annual plan
  const linkKey = plan + '_annual';
  if (STRIPE_LINKS[linkKey]) {
    window.location.href = STRIPE_LINKS[linkKey];
  }
}

/**
 * URL Parameters Handler
 * 
 * 処理するパラメータ:
 * - ref: 紹介コード → handleReferralCode()
 * - from_checkout: Stripe決済後のリダイレクト（表示用のみ）
 * 
 * 注意: プラン情報はStripe WebhookでFirestoreに保存され、
 * syncUserData()で取得するため、URLパラメータでは設定しない
 */
function checkPlanFromURL() {
  const params = new URLSearchParams(window.location.search);
  const refCode = params.get('ref');
  const fromCheckout = params.get('from_checkout');
  const status = params.get('status');
  const plan = params.get('plan');
  const billing = params.get('billing');
  
  // Handle referral code: ?ref=XXX
  if (refCode && !state.referredBy) {
    handleReferralCode(refCode);
  }
  
  // Stripeからのリダイレクト時（status=success）
  if (status === 'success') {
    console.log('[Checkout] Returned from Stripe with success');
    
    // コンバージョントラッキング（Google Ads）
    const purchasePlan = plan || 'standard';
    const purchaseBilling = billing || 'annual';
    const price = getPriceForPlan(purchasePlan, purchaseBilling);
    
    FujisanAnalytics.trackPurchase(purchasePlan, price, 'USD', params.get('session_id') || '');
    console.log('[Analytics] Purchase conversion tracked:', purchasePlan, purchaseBilling, price);
    
    // URLをクリーンに
    window.history.replaceState({}, '', window.location.pathname);
    
    // ウェルカムメッセージは syncUserData() 完了後に表示
    state.showWelcomeMessage = true;
    saveState();
  }
  
  // 旧形式のリダイレクト対応（from_checkout=success）
  if (fromCheckout === 'success') {
    console.log('[Checkout] Returned from Stripe - subscription will be synced from Firestore');
    
    // URLをクリーンに
    window.history.replaceState({}, '', window.location.pathname);
    
    // ウェルカムメッセージは syncUserData() 完了後に表示
    state.showWelcomeMessage = true;
    saveState();
  }
}

/**
 * プランと課金周期から価格を取得
 */
function getPriceForPlan(plan, billing) {
  const prices = {
    basic: { monthly: 7.99, annual: 47.99 },
    standard: { monthly: 14.99, annual: 89.99 },
    premium: { monthly: 29.99, annual: 179.99 }
  };
  return prices[plan]?.[billing] || 89.99;
}

// ========== STORAGE ==========
function saveState() { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); }
function loadState() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved) { 
    state = { ...state, ...JSON.parse(saved) }; 
  }
  // LPとの言語設定を同期（fujisan_langを優先）
  const sharedLang = localStorage.getItem('fujisan_lang');
  if (sharedLang) {
    state.lang = sharedLang;
  }
  // 全ての言語セレクターを同期
  document.querySelectorAll('.lang-selector').forEach(sel => sel.value = state.lang);
  const qCount = document.getElementById('q-count');
  if (qCount) qCount.value = state.qCount;
}

// ========== PLAN RESTRICTIONS ==========
// Plans: basic, standard, premium (all include 7-day free trial with card)
// During trial period: ALL features unlocked regardless of plan type
// After trial: features restricted based on plan

function isTrialActive() {
  if (!state.plan || !state.planExpiry) return false;
  const now = new Date();
  const expiry = new Date(state.planExpiry);
  const planStart = new Date(expiry.getTime() - 7 * 24 * 60 * 60 * 1000); // Trial is 7 days before expiry
  // Trial is active if within 7 days of signup and before expiry
  return now < expiry;
}

function isInFreeCampaign() {
  // Check if currently in free campaign period AND user signed up during campaign
  if (!IS_FREE_CAMPAIGN) return false;
  // If user has freeCampaign flag in their state
  if (state.freeCampaign || state.planStatus === 'free_campaign') return true;
  // Or if signed in during campaign period
  return IS_FREE_CAMPAIGN && state.userId;
}

function isInTrialPeriod() {
  // FREE CAMPAIGN: All features unlocked during campaign
  if (isInFreeCampaign()) return true;
  
  // Check if user is in the trial period (first 7 days after signup)
  if (!state.plan || !state.planExpiry) return false;
  const now = new Date();
  const expiry = new Date(state.planExpiry);
  
  // Method 1: Check trialEndDate if available
  if (state.trialEndDate) {
    const trialEnd = new Date(state.trialEndDate);
    if (now < trialEnd) return true;
  }
  
  // Method 2: If isTrialing flag is set, use it
  if (state.isTrialing === true && now < expiry) return true;
  
  // Method 3: Check planStartDate + 7 days
  if (state.planStartDate) {
    const planStart = new Date(state.planStartDate);
    const trialEnd = new Date(planStart.getTime() + 7 * 24 * 60 * 60 * 1000);
    if (now < trialEnd) return true;
  }
  
  // Method 4: Fallback for monthly plans (expiry is ~30 days, so check if within first 7 days)
  // For annual plans, this won't work since expiry is 365 days away
  const daysUntilExpiry = (expiry - now) / (1000 * 60 * 60 * 24);
  
  // If expiry is 7 days or less (trial-only period)
  if (state.plan && daysUntilExpiry > 0 && daysUntilExpiry <= 7) {
    return true;
  }
  
  return false;
}

function hasValidPlan() {
  if (!state.plan) return false;
  // If in trial period, plan is valid
  if (isInTrialPeriod()) return true;
  // After trial, check if subscription is still active
  return state.planExpiry && new Date(state.planExpiry) > new Date();
}

function canAccessLevel(level) {
  // During trial: all levels unlocked (any plan with valid expiry in first 7 days)
  if (isInTrialPeriod()) return true;
  // No plan: only N5 free
  if (!hasValidPlan()) return level === 'N5';
  // Basic/Standard: N5-N3
  if (state.plan === 'basic' || state.plan === 'standard') {
    return ['N5', 'N4', 'N3'].includes(level);
  }
  // Premium: all levels
  return true;
}

function canUseMockTest() {
  // During trial: all features unlocked
  if (isInTrialPeriod()) return true;
  // Standard or Premium required
  return state.plan === 'standard' || state.plan === 'premium';
}

function canUseAITutor() {
  // During trial: all features unlocked
  if (isInTrialPeriod()) return true;
  // Premium only
  return state.plan === 'premium';
}

function canUsePassPrediction() {
  // During trial: all features unlocked
  if (isInTrialPeriod()) return true;
  // Standard or Premium required
  return state.plan === 'standard' || state.plan === 'premium';
}

function showUpgradeModal(feature, requiredPlan) {
  // Track upgrade modal shown
  FujisanAnalytics.trackUpgradeModalShown(feature, requiredPlan);
  
  const messages = {
    'level': `${requiredPlan} plan required to access this level.`,
    'mock': 'Pro plan required for Mock Tests.',
    'ai': 'Premium plan required for AI Tutor.',
    'prediction': 'Pro plan required for Pass Prediction.'
  };
  alert(messages[feature] || 'Upgrade required for this feature.');
  openSubscriptionModal();
}

function showSubscriptionRequiredModal() {
  const modal = document.getElementById('subscriptionRequiredModal');
  
  // Check if user was on free campaign (campaign ended)
  const isFreeCampaignExpired = state.freeCampaign && !IS_FREE_CAMPAIGN;
  
  if (modal) {
    // Update modal content based on user status
    const titleEl = modal.querySelector('.modal-title');
    const subtitleEl = modal.querySelector('.subscription-modal-subtitle');
    const noteEl = document.getElementById('trialNote');
    const returningNotice = document.getElementById('returningUserNotice');
    
    if (isFreeCampaignExpired) {
      // Free campaign user after campaign ended
      if (titleEl) titleEl.textContent = 'Free Campaign Ended';
      if (subtitleEl) subtitleEl.textContent = 'Subscribe to continue learning';
      if (noteEl) noteEl.innerHTML = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#00C853" stroke-width="2" style="vertical-align:-2px;margin-right:4px;"><path d="M20 6L9 17l-5-5"/></svg> Your progress is saved • Start from $4/month';
      if (returningNotice) {
        returningNotice.classList.remove('hidden');
        returningNotice.innerHTML = '<p style="background:#fff3e0;padding:12px;border-radius:8px;font-size:13px;color:#e65100;margin-top:12px;display:flex;align-items:flex-start;gap:8px;"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#e65100" stroke-width="2" style="flex-shrink:0;margin-top:2px;"><circle cx="12" cy="12" r="10"/><path d="M12 8v4M12 16h.01"/></svg><span>The free campaign ended on March 31, 2026. To continue using Fujisan.AI, please choose a plan below. Your learning progress has been saved!</span></p>';
      }
    } else if (state.isExpiredUser) {
      // Returning user (previously subscribed, now expired)
      if (titleEl) titleEl.textContent = 'Welcome Back!';
      if (subtitleEl) subtitleEl.textContent = 'Reactivate your subscription';
      if (noteEl) noteEl.innerHTML = '💳 Subscription starts immediately • Your progress is saved';
      if (returningNotice) returningNotice.classList.remove('hidden');
    } else {
      // New user
      if (titleEl) titleEl.textContent = 'Start Your Free Trial';
      if (subtitleEl) subtitleEl.textContent = '7-day free trial • Cancel anytime';
      if (noteEl) noteEl.innerHTML = '💳 Card required • No charge until trial ends';
      if (returningNotice) returningNotice.classList.add('hidden');
    }
    
    modal.classList.remove('hidden');
  } else {
    // Fallback if modal doesn't exist
    if (isFreeCampaignExpired) {
      if (confirm('Free Campaign Ended\n\nThank you for trying Fujisan.AI during our free campaign!\n\nThe campaign ended on March 31, 2026. Your learning progress is saved.\n\nSubscribe now to continue learning?')) {
        const email = currentUser?.email || '';
        redirectToStripeCheckout(email);
      }
    } else if (state.isExpiredUser) {
      if (confirm('Welcome Back!\n\nYour subscription has expired. Your learning data is still saved.\n\nAs a returning user, subscriptions start immediately (no free trial).\n\nSubscribe now to continue?')) {
        const email = currentUser?.email || '';
        redirectToStripeCheckout(email);
      }
    } else {
      if (confirm('Start Your Free Trial\n\nGet full access to all JLPT levels, Mock Tests, and AI Tutor for 7 days free.\n\nNo charge until trial ends. Cancel anytime.\n\nStart free trial now?')) {
        const email = currentUser?.email || '';
        redirectToStripeCheckout(email);
      }
    }
  }
}

function goToStripeFromModal() {
  const email = currentUser?.email || '';
  redirectToStripeCheckout(email);
}

// Plan selection state
let selectedBilling = 'annual';

function setBilling(billing) {
  selectedBilling = billing;
  
  // Update toggle buttons
  document.getElementById('billingAnnual').classList.toggle('active', billing === 'annual');
  document.getElementById('billingMonthly').classList.toggle('active', billing === 'monthly');
  
  // Show/hide prices
  document.querySelectorAll('.plan-price-annual').forEach(el => {
    el.classList.toggle('hidden', billing !== 'annual');
  });
  document.querySelectorAll('.plan-price-monthly').forEach(el => {
    el.classList.toggle('hidden', billing !== 'monthly');
  });
}

function selectPlanAndGo(plan) {
  const email = currentUser?.email || '';
  const linkKey = plan + '_' + selectedBilling;
  const stripeLink = STRIPE_LINKS[linkKey];
  
  if (stripeLink) {
    // Track plan selection
    FujisanAnalytics.trackPurchaseStart(plan, 0, 'USD');
    
    // Build URL with client_reference_id for Webhook
    const params = new URLSearchParams();
    params.set('prefilled_email', email);
    if (currentUser?.uid) {
      params.set('client_reference_id', currentUser.uid);
    }
    
    window.location.href = stripeLink + '?' + params.toString();
  } else {
    console.error('Stripe link not found:', linkKey);
  }
}

function closeSubscriptionRequiredModal() {
  const modal = document.getElementById('subscriptionRequiredModal');
  if (modal) modal.classList.add('hidden');
  // If no subscription, log out and show auth
  if (!hasValidSubscription() && !isInTrialPeriod()) {
    logout();
  }
}

// ========== PASS REPORT ==========
function openPassReportModal() {
  document.getElementById('passReportModal').classList.remove('hidden');
}

function closePassReportModal() {
  document.getElementById('passReportModal').classList.add('hidden');
}

// Feedback Modal Functions
function openFeedbackModal() {
  document.getElementById('feedbackModal').classList.remove('hidden');
  initFeedbackStars();
}

function closeFeedbackModal() {
  document.getElementById('feedbackModal').classList.add('hidden');
}

function initFeedbackStars() {
  const stars = document.querySelectorAll('#feedbackStars .feedback-star');
  stars.forEach(star => {
    star.classList.remove('active');
    star.onclick = function() {
      const rating = parseInt(this.dataset.rating);
      document.getElementById('feedbackRating').value = rating;
      stars.forEach((s, i) => {
        s.classList.toggle('active', i < rating);
      });
    };
  });
}

async function submitFeedbackModal(event) {
  event.preventDefault();
  
  const rating = parseInt(document.getElementById('feedbackRating').value);
  const comment = document.getElementById('feedbackComment').value.trim();
  const nickname = document.getElementById('feedbackNickname').value.trim();
  const permission = document.getElementById('feedbackPermission').checked;
  
  if (rating === 0) {
    alert(getText('feedback_select_rating') || 'Please select a rating');
    return;
  }
  
  const btn = document.getElementById('feedbackSubmitBtn');
  btn.disabled = true;
  btn.textContent = getText('feedback_sending') || 'Sending...';
  
  const feedbackData = {
    rating,
    comment,
    nickname: nickname || 'Anonymous',
    permission,
    level: state.level,
    lang: state.lang,
    timestamp: new Date().toISOString(),
    userAgent: navigator.userAgent,
    uid: currentUser?.uid || null
  };
  
  try {
    // Save to Firestore
    if (typeof firebase !== 'undefined' && firebase.firestore) {
      await firebase.firestore().collection('feedback').add(feedbackData);
    }
  } catch (err) {
    console.error('Firestore feedback save error:', err);
  }
  
  // Save locally as backup
  const localFeedback = JSON.parse(localStorage.getItem('fujisan_feedback_modal') || '[]');
  localFeedback.push(feedbackData);
  localStorage.setItem('fujisan_feedback_modal', JSON.stringify(localFeedback));
  
  // Mark as submitted
  localStorage.setItem('fujisan_feedback_submitted', 'true');
  
  closeFeedbackModal();
  
  // Hide the feedback link
  const feedbackRow = document.getElementById('feedback-link-row');
  if (feedbackRow) {
    feedbackRow.innerHTML = '<span style="color:#34c759;font-size:13px;">✓ ' + (getText('feedback_thanks') || 'Thank you for your feedback!') + '</span>';
  }
  
  // Show thank you message
  const thankYou = document.createElement('div');
  thankYou.innerHTML = `
    <div style="position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);background:#fff;padding:32px;border-radius:16px;text-align:center;z-index:10001;box-shadow:0 10px 40px rgba(0,0,0,0.3);">
      <div style="font-size:48px;margin-bottom:12px;">🙏</div>
      <h3 style="margin:0 0 8px;">${getText('feedback_thank_title') || 'Thank you!'}</h3>
      <p style="margin:0;color:#666;">${getText('feedback_thank_desc') || 'Your feedback helps us improve.'}</p>
    </div>
    <div style="position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(0,0,0,0.4);z-index:10000;" onclick="this.parentElement.remove()"></div>
  `;
  document.body.appendChild(thankYou);
  setTimeout(() => thankYou.remove(), 2500);
  
  btn.disabled = false;
  btn.textContent = getText('feedback_submit') || 'Send Feedback';
}

// Check if feedback already submitted
function checkFeedbackSubmitted() {
  if (localStorage.getItem('fujisan_feedback_submitted') === 'true') {
    const feedbackRow = document.getElementById('feedback-link-row');
    if (feedbackRow) {
      feedbackRow.innerHTML = '<span style="color:#34c759;font-size:13px;">✓ ' + (getText('feedback_thanks') || 'Thank you for your feedback!') + '</span>';
      feedbackRow.style.cursor = 'default';
      feedbackRow.onclick = null;
    }
  }
}

function previewCertificate(input) {
  if (input.files && input.files[0]) {
    const reader = new FileReader();
    reader.onload = function(e) {
      const preview = document.getElementById('passPreview');
      preview.src = e.target.result;
      preview.style.display = 'block';
      document.getElementById('passUploadArea').classList.add('has-image');
      document.querySelector('#passUploadArea .pass-upload-text').textContent = getText('pass_change_photo') || 'Click to change photo';
    };
    reader.readAsDataURL(input.files[0]);
  }
}

function compressImage(file, maxWidth, maxHeight, quality) {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.onload = function(e) {
      const img = new Image();
      img.onload = function() {
        const canvas = document.createElement('canvas');
        let width = img.width;
        let height = img.height;
        
        if (width > maxWidth) {
          height = height * (maxWidth / width);
          width = maxWidth;
        }
        if (height > maxHeight) {
          width = width * (maxHeight / height);
          height = maxHeight;
        }
        
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0, width, height);
        resolve(canvas.toDataURL('image/jpeg', quality));
      };
      img.src = e.target.result;
    };
    reader.readAsDataURL(file);
  });
}

async function submitPassReport(e) {
  e.preventDefault();
  
  const btn = document.getElementById('passSubmitBtn');
  btn.disabled = true;
  btn.textContent = getText('pass_submitting') || 'Submitting...';
  
  const level = document.getElementById('passLevel').value;
  const score = document.getElementById('passScore').value;
  const name = document.getElementById('passName').value;
  const country = document.getElementById('passCountry').value;
  const comment = document.getElementById('passComment').value;
  
  let certImage = null;
  const certFile = document.getElementById('passCertFile').files[0];
  if (certFile) {
    certImage = await compressImage(certFile, 800, 600, 0.7);
  }
  
  const report = {
    id: Date.now().toString(36) + Math.random().toString(36).substr(2),
    level,
    score,
    name,
    country,
    comment,
    certImage,
    submittedAt: new Date().toISOString(),
    status: 'pending' // pending, approved, rejected
  };
  
  // Send to Firebase
  const cloudSuccess = await submitPassReportToCloud(report);
  
  // Also store locally as backup
  const reports = JSON.parse(localStorage.getItem('fujisan_pass_reports') || '[]');
  reports.push(report);
  localStorage.setItem('fujisan_pass_reports', JSON.stringify(reports));
  
  // Grant 3 month bonus
  state.passReportSubmitted = true;
  const bonusExpiry = new Date();
  bonusExpiry.setMonth(bonusExpiry.getMonth() + 3);
  state.passBonusExpiry = bonusExpiry.toISOString();
  
  // If user has planExpiry, extend it
  if (state.planExpiry) {
    const currentExpiry = new Date(state.planExpiry);
    currentExpiry.setMonth(currentExpiry.getMonth() + 3);
    state.planExpiry = currentExpiry.toISOString();
  }
  
  saveState();
  saveToCloud(); // Sync to Firebase
  
  // Track pass report submission
  FujisanAnalytics.trackPassReportSubmit(level);
  
  btn.textContent = getText('pass_submitted') || 'Submitted!';
  setTimeout(() => {
    closePassReportModal();
    alert('Thank you for sharing your success! Your 3-month bonus has been applied.');
    btn.disabled = false;
    btn.textContent = getText('pass_submit') || 'Submit Report';
    document.getElementById('passReportForm').reset();
    document.getElementById('passPreview').style.display = 'none';
    document.getElementById('passUploadArea').classList.remove('has-image');
    document.querySelector('#passUploadArea .pass-upload-text').textContent = getText('pass_upload') || 'Click to upload your certificate';
  }, 1000);
}

// ========== AI TUTOR ==========
function sendAIMessage() {
  const input = document.getElementById('aiInput');
  const message = input.value.trim();
  if (!message) return;
  
  input.value = '';
  askAI(message);
}

async function askAI(question) {
  if (!canUseAITutor()) {
    showUpgradeModal('ai', 'Premium');
    return;
  }
  
  // Track AI tutor question
  FujisanAnalytics.trackAIQuestion('general');
  
  const chatHistory = document.getElementById('aiChatHistory');
  
  // Add user message
  chatHistory.innerHTML += `<div class="ai-message user">${escapeHtml(question)}</div>`;
  
  // Add typing indicator
  chatHistory.innerHTML += `<div class="ai-message assistant ai-typing-msg"><div class="ai-typing"><span></span><span></span><span></span></div></div>`;
  chatHistory.scrollTop = chatHistory.scrollHeight;
  
  try {
    const response = await generateAIResponse(question);
    document.querySelector('.ai-typing-msg')?.remove();
    chatHistory.innerHTML += `<div class="ai-message assistant">${response}</div>`;
    chatHistory.scrollTop = chatHistory.scrollHeight;
  } catch (error) {
    console.error('AI Tutor error:', error);
    FujisanAnalytics.trackError('ai_tutor', error.message);
    document.querySelector('.ai-typing-msg')?.remove();
    chatHistory.innerHTML += `<div class="ai-message assistant">Sorry, I couldn't process your question. Please try again.</div>`;
    chatHistory.scrollTop = chatHistory.scrollHeight;
  }
}

async function generateAIResponse(question) {
  const learned = Object.keys(state.learned).length;
  const accuracy = state.totalAnswered > 0 ? Math.round(state.totalCorrect / state.totalAnswered * 100) : 0;
  const mistakes = state.mistakes || {};
  
  // Check for exam date setup request
  const examSetupMatch = question.match(/(?:N[1-5]|n[1-5]).*?(?:on|is|exam|test|taking)?\s*(?:on\s+)?(\d{1,2}[\/\-\.]\d{1,2}[\/\-\.]\d{2,4}|\w+\s+\d{1,2},?\s+\d{4}|\d{4}[\/\-\.]\d{1,2}[\/\-\.]\d{1,2})/i) 
    || question.match(/(\d{1,2}[\/\-\.]\d{1,2}[\/\-\.]\d{2,4}|\w+\s+\d{1,2},?\s+\d{4}|\d{4}[\/\-\.]\d{1,2}[\/\-\.]\d{1,2}).*?(?:N[1-5]|n[1-5])/i);
  
  const levelMatch = question.match(/N[1-5]/i);
  
  if (examSetupMatch && levelMatch) {
    const level = levelMatch[0].toUpperCase();
    const dateStr = examSetupMatch[1];
    const parsed = new Date(dateStr);
    
    if (!isNaN(parsed.getTime()) && parsed > new Date()) {
      // Set exam date
      setExamDate(level, parsed.toISOString());
      
      const d = DATA[level];
      const totalItems = d.vocab.length + d.kanji.length + d.grammar.length;
      const daysUntilExam = Math.ceil((parsed - new Date()) / (1000 * 60 * 60 * 24));
      const dailyTarget = Math.ceil(totalItems / daysUntilExam);
      
      return `<b>🎯 Your Study Plan is Set!</b><br><br>
        <b>Exam:</b> ${level} on ${parsed.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}<br>
        <b>Days until exam:</b> ${daysUntilExam} days<br>
        <b>Total items to master:</b> ${totalItems}<br><br>
        📊 <b>Your Daily Target:</b> <span style="color:var(--primary);font-size:1.2em;font-weight:700">${dailyTarget} items/day</span><br><br>
        <b>Science-based strategy:</b><br>
        • Morning: Learn ${Math.ceil(dailyTarget * 0.4)} new items (fresh brain = better encoding)<br>
        • Evening: Review mistakes + practice quiz (sleep consolidates memory)<br>
        • Weekly: Take 1 mock test to build test stamina<br><br>
        I'll track your progress and alert you if you fall behind. Let's do this! 🚀`;
    }
  }
  
  // Analyze weak points
  let weakAreas = [];
  Object.keys(mistakes).forEach(key => {
    if (mistakes[key] && mistakes[key].length > 3) {
      weakAreas.push(key.replace('_', ' '));
    }
  });
  
  // Calculate pass probability for context
  const passProbability = calculatePassProbability();
  
  // Build context for AI
  const userContext = `
User's JLPT Level: ${state.level}
Words learned: ${learned}
Overall accuracy: ${accuracy}%
Streak: ${state.streak} days
Weak areas: ${weakAreas.length > 0 ? weakAreas.join(', ') : 'None identified yet'}
${state.examDate ? `Exam Date: ${new Date(state.examDate).toLocaleDateString()} (${state.examLevel})` : 'No exam date set'}
${state.dailyTarget ? `Daily Target: ${state.dailyTarget} items` : ''}
Current Pass Probability: ${passProbability}%
`;

  // Try Netlify Function (Gemini 1.5 Flash)
  try {
    const response = await fetch('/.netlify/functions/ai-question', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        question: question,
        context: userContext,
        level: state.level,
        lang: state.lang
      })
    });
    
    if (response.ok) {
      const data = await response.json();
      return data.answer.replace(/\n/g, '<br>');
    }
  } catch (error) {
    console.log('Netlify function not available, trying fallback:', error.message);
  }

  // Try Vertex AI (Gemini) - Firebase fallback
  try {
    if (typeof firebase !== 'undefined' && firebase.app) {
      const { getVertexAI, getGenerativeModel } = await import('https://www.gstatic.com/firebasejs/10.7.1/firebase-vertexai-preview.js');
      const vertexAI = getVertexAI(firebase.app());
      const model = getGenerativeModel(vertexAI, { model: 'gemini-2.0-flash' });
      
      const systemPrompt = `You are an expert JLPT study coach and Japanese language tutor, grounded in Instructional Design (ID) and Second Language Acquisition (SLA) theory. You guide students like a supportive life coach — warm, empathetic, and always focused on their growth journey.

You can help with TWO types of questions:

## TYPE 1: LEARNING CONTENT (Japanese language questions)
- Vocabulary meaning, usage, nuance, collocations
- Kanji readings (音読み/訓読み), stroke order, radicals, mnemonics
- Grammar patterns, conjugations, particle usage
- Sentence construction, example sentences
- Differences between similar words/expressions
- Cultural context and usage levels (formal/casual)

When answering content questions:
- Give clear, accurate explanations
- Provide memorable mnemonics or memory hooks
- Show example sentences with translations
- Connect to related vocabulary/grammar they might know
- Use SLA principle: connect new knowledge to existing schema

## TYPE 2: LEARNING METHODS (Study strategy questions)
- How to memorize kanji/vocabulary effectively
- Study schedule optimization
- Motivation and consistency tips
- Test-taking strategies
- Review and retention techniques
- Time management for JLPT prep

When answering method questions:
- Base advice on cognitive science (spaced repetition, interleaving, retrieval practice)
- Reference their personal data (accuracy, streak, weak areas)
- Give specific, actionable steps
- Frame challenges as growth opportunities

## YOUR COACHING PRINCIPLES (Based on ID & SLA)

1. **Krashen's Affective Filter**: Keep anxiety low. Mistakes are natural steps in acquisition.
2. **i+1 Comprehensible Input**: Material should be just beyond their current level.
3. **Vygotsky's ZPD**: Scaffold learning — provide support they can gradually release.
4. **Elaborative Encoding**: Connect new info to existing knowledge for stronger memories.
5. **Retrieval Practice**: Testing strengthens memory more than re-reading.
6. **Spaced Repetition**: Optimal review intervals based on forgetting curve.
7. **Andragogy**: Adults need to understand WHY. Explain the reasoning.
8. **Growth Mindset**: Frame challenges as opportunities, not obstacles.

## YOUR STUDENT'S STATUS
${userContext}

## RESPONSE GUIDELINES
- Be warm but substantive — no empty encouragement
- For content questions: accuracy first, then memory tips
- For method questions: connect to their specific data and goals
- Keep responses concise but complete (max 250 words)
- Use <b> tags for emphasis and <br> for line breaks
- Include Japanese examples with translations in parentheses
- End with a clear next step or encouragement

Respond in the same language the user writes in (English or Japanese).`;

      const result = await model.generateContent([
        { role: 'user', parts: [{ text: systemPrompt }] },
        { role: 'model', parts: [{ text: 'Understood. I am ready to help with both Japanese language content (vocabulary, kanji, grammar) and study methods (memorization techniques, scheduling, strategies). I will provide warm, evidence-based guidance grounded in SLA and ID theory.' }] },
        { role: 'user', parts: [{ text: question }] }
      ]);
      
      return result.response.text().replace(/\n/g, '<br>');
    }
  } catch (error) {
    console.log('Vertex AI not available, using fallback:', error.message);
  }
  
  // Fallback to local responses
  return generateLocalAIResponse(question, learned, accuracy, weakAreas);
}

function generateLocalAIResponse(question, learned, accuracy, weakAreas) {
  const q = question.toLowerCase();
  const passProbability = state.currentPassProbability || calculatePassProbability();
  
  // === STUDY METHOD QUESTIONS ===
  
  if (q.includes('weak') || q.includes('弱点')) {
    if (weakAreas.length > 0) {
      return `📊 <b>Your Growth Areas</b><br><br>Based on your practice patterns, these areas are ripe for breakthrough:<br>• ${weakAreas.join('<br>• ')}<br><br><b>SLA Insight:</b> These "weak points" are actually where your brain is actively building new neural pathways. Focus here for 10-15 minutes daily — that's your optimal acquisition window. The struggle means learning is happening!`;
    } else {
      return `📊 <b>Building Your Foundation</b><br><br>You're still in the early stages — which is exactly where you should be! In language acquisition, we call this building "comprehensible input."<br><br>Your stats:<br>• Words encountered: ${learned}<br>• Accuracy: ${accuracy}%<br>• Streak: ${state.streak} days<br><br>Keep engaging with the material. Patterns will emerge naturally.`;
    }
  }
  
  if (q.includes('study') || q.includes('tip') || q.includes('勉強') || q.includes('how to learn') || q.includes('method')) {
    return `📚 <b>Evidence-Based Study Strategy for ${state.level}</b><br><br>1. <b>Spaced Review:</b> Review your mistakes regularly — our system tracks what you get wrong so you can focus on weak areas.<br><br>2. <b>i+1 Principle:</b> Material should be just slightly beyond your current level. If it's too easy, you're not growing. If it's too hard, anxiety blocks acquisition.<br><br>3. <b>Active Recall:</b> Testing yourself beats passive review by 3x. That's why we use quizzes, not flashcard flipping.<br><br>4. <b>Your Focus:</b> ${weakAreas.length > 0 ? 'Your data shows ' + weakAreas[0] + ' is your growth edge right now.' : 'Keep balanced practice — variety strengthens neural networks.'}<br><br>📈 Current pass probability: <b>${passProbability}%</b>`;
  }
  
  if (q.includes('memorize') || q.includes('remember') || q.includes('覚え') || q.includes('暗記')) {
    return `🧠 <b>Memory Science for Language Learning</b><br><br>Your brain encodes memories best when you:<br><br>1. <b>Elaborative Encoding:</b> Connect new words to personal experiences or vivid images. "食べる (to eat)" — imagine YOUR favorite food!<br><br>2. <b>Retrieval Practice:</b> Testing yourself (even when you fail) strengthens memory 3x more than re-reading.<br><br>3. <b>Sleep:</b> Memory consolidation happens during sleep. Review before bed, let your brain work overnight.<br><br>4. <b>Interleaving:</b> Mix vocabulary, kanji, and grammar in one session. Harder now, but stronger long-term.<br><br><b>Quick Win:</b> For any new word, immediately make a sentence using it. Active production beats passive recognition.`;
  }
  
  if (q.includes('mistake') || q.includes('間違') || q.includes('error')) {
    return `❌ <b>Understanding Common Patterns</b><br><br>In SLA theory, mistakes reveal your "interlanguage" — the natural stage between beginner and fluent. These patterns are universal:<br><br>1. <b>Particles (は vs が):</b> Even advanced learners refine this. It's about topic vs subject — deep conceptual work.<br><br>2. <b>Verb Conjugation:</b> Your brain is learning rules. Errors show you're applying patterns, which is good!<br><br>3. <b>Kanji Readings:</b> 音読み vs 訓読み requires massive exposure. Be patient with yourself.<br><br>Each "mistake" is data for your brain. Keep going!`;
  }
  
  if (q.includes('motivation') || q.includes('やる気') || q.includes('tired') || q.includes('give up')) {
    return `💪 <b>Staying Motivated: The Science</b><br><br>Motivation naturally fluctuates — that's normal! Here's what research says:<br><br>1. <b>Streak Power:</b> You have a ${state.streak}-day streak. Each day adds psychological commitment. Don't break the chain!<br><br>2. <b>Small Wins:</b> On low-energy days, just do 5 questions. Starting is harder than continuing.<br><br>3. <b>Progress Visibility:</b> You've learned ${learned} items at ${accuracy}% accuracy. That's real progress!<br><br>4. <b>Exam Anchor:</b> ${state.examDate ? 'Your exam is coming — ' + Math.ceil((new Date(state.examDate) - new Date()) / (1000*60*60*24)) + ' days left. Future you will thank present you!' : 'Set an exam date — deadlines create focus.'}<br><br>Remember: the feeling of "I don't want to" passes in about 20 minutes if you just start.`;
  }
  
  // === LEARNING CONTENT QUESTIONS ===
  
  if (q.includes('grammar') || q.includes('文法')) {
    return `📖 <b>Grammar Acquisition for ${state.level}</b><br><br>In SLA, grammar is acquired through meaningful exposure, not just memorization. For your level, focus on:<br><br>• Understanding the "why" behind sentence patterns<br>• Noticing how particles change meaning<br>• Recognizing patterns across multiple examples<br><br>Try reading the grammar point, then immediately practicing it. The "testing effect" strengthens memory 3x more than re-reading!<br><br>Ask me about any specific grammar pattern (e.g., "explain ても", "what's the difference between から and ので?")`;
  }
  
  if (q.includes('kanji') || q.includes('漢字')) {
    return `漢 <b>Kanji Acquisition Strategy</b><br><br>Kanji learning follows predictable stages:<br><br>1. <b>Radicals First:</b> Learn the ~214 radicals. They're the building blocks — 木 (tree) + 林 (grove) + 森 (forest).<br><br>2. <b>Semantic + Phonetic:</b> Most kanji combine meaning (semantic) and sound (phonetic) components.<br><br>3. <b>Context Over Isolation:</b> Learn kanji within vocabulary, not standalone. Your brain needs meaning to anchor memory.<br><br>4. <b>Handwriting:</b> Motor memory creates additional neural pathways. Even tracing helps!<br><br>${state.level === 'N5' ? 'N5 goal: ~100 kanji. You\'re building the foundation.' : state.level === 'N4' ? 'N4 goal: ~300 kanji. Patterns are emerging!' : 'Focus on high-frequency kanji first — efficiency matters.'}<br><br>Ask me about specific kanji (e.g., "how do I remember 食?", "what's the radical in 語?")`;
  }
  
  if (q.includes('particle') || q.includes('助詞') || q.match(/は\s*(vs|と|or)\s*が/) || q.includes('wa vs ga')) {
    return `🔤 <b>Particles: The Heart of Japanese</b><br><br>Particles are what make Japanese Japanese. Key insights:<br><br><b>は (wa) vs が (ga):</b><br>• は marks the TOPIC (what we're talking about)<br>• が marks the SUBJECT (who does the action) or NEW information<br>• 私<b>は</b>学生です = "As for me, (I'm) a student" (expected info)<br>• 私<b>が</b>学生です = "<b>I</b> am the student" (not someone else)<br><br><b>に vs で:</b><br>• に = destination, time point, existence location<br>• で = action location, means, cause<br><br>Don't try to memorize rules — absorb through examples. Which particle is confusing you?`;
  }
  
  if (q.includes('vocab') || q.includes('word') || q.includes('単語') || q.includes('meaning')) {
    return `📝 <b>Vocabulary Acquisition</b><br><br>Effective vocabulary learning combines:<br><br>1. <b>Depth over Breadth:</b> Know fewer words deeply (collocations, nuance, usage) rather than many words shallowly.<br><br>2. <b>Word Families:</b> Learn related words together:<br>• 食べる → 食事 → 食堂 → 食品<br>• All share 食 (eat/food)<br><br>3. <b>Collocations:</b> Learn words in natural combinations:<br>• 電話を<b>かける</b> (make a call)<br>• 約束を<b>守る</b> (keep a promise)<br><br>4. <b>Active Production:</b> Make sentences with new words immediately.<br><br>Ask me about specific words (e.g., "difference between 見る and 観る", "how to use ちょっと")`;
  }
  
  if (q.includes('listen') || q.includes('聴') || q.includes('聞') || q.includes('hearing')) {
    return `👂 <b>Listening Comprehension</b><br><br>JLPT listening is ~25% of your score. Science-based approach:<br><br>1. <b>Bottom-up + Top-down:</b> You need both sound recognition AND context prediction.<br><br>2. <b>Speed Adjustment:</b> Start at 0.75x speed, gradually increase. Your brain needs time to form phoneme mappings.<br><br>3. <b>Shadowing:</b> Repeat what you hear immediately. This builds pronunciation AND comprehension.<br><br>4. <b>Focused vs Extensive:</b><br>• Focused: Transcribe short clips, check every word<br>• Extensive: Listen to podcasts/shows for flow, don't pause<br><br>Mix both for optimal results!`;
  }
  
  if (q.includes('pass') || q.includes('合格') || q.includes('probability') || q.includes('chance')) {
    return `📊 <b>Your Pass Probability: ${passProbability}%</b><br><br>This is calculated from:<br>• Coverage: How much of ${state.level} you've learned<br>• Accuracy: Your quiz/mock performance<br>• Retention: How well you retain what you learn<br>• Consistency: Your ${state.streak}-day streak<br>• Mock tests: ${state.mockResults?.length > 0 ? 'Recent scores factored in' : 'Not yet taken'}<br><br>To increase this:<br>• Learn ${state.dailyTarget || 50} items/day to hit coverage<br>• Review your mistakes daily<br>• Take mock tests weekly<br><br>${passProbability < 50 ? '⚠️ You\'re behind schedule — increase daily volume or push back your exam date.' : passProbability < 70 ? '📈 Good progress! Stay consistent and you\'ll make it.' : '🎯 You\'re on track! Keep up the momentum.'}`;
  }
  
  // Default response
  return `<b>AI Study Coach</b><br><br>I can help you with:<br><br>📚 <b>Learning Content:</b><br>• "Explain the difference between は and が"<br>• "How do I remember the kanji 食?"<br>• "What does ても mean?"<br><br>🧠 <b>Study Methods:</b><br>• "How should I memorize vocabulary?"<br>• "Give me study tips for ${state.level}"<br>• "I'm losing motivation, help!"<br><br>📊 <b>Your Stats:</b><br>• Level: ${state.level}<br>• Learned: ${learned} items<br>• Accuracy: ${accuracy}%<br>• Pass probability: ${passProbability}%<br><br>What would you like to explore?`;
}

// ========== AI EXPLANATION WITH CACHE ==========
// Cache explanations in Firestore to avoid repeated API calls

// Helper: Get mistake count for a question
function getMistakeCount(questionId) {
  if (!state.mistakeHistory) state.mistakeHistory = {};
  return state.mistakeHistory[questionId] || 0;
}

// Helper: Increment mistake count
function incrementMistakeCount(questionId) {
  if (!state.mistakeHistory) state.mistakeHistory = {};
  state.mistakeHistory[questionId] = (state.mistakeHistory[questionId] || 0) + 1;
  saveState();
}

// Helper: Get nickname for greeting (use sometimes, not always)
function getNicknameGreeting() {
  if (!state.nickname || Math.random() > 0.4) return ''; // 40% chance to use nickname
  const greetings = {
    'en': [`${state.nickname}, `, `Hey ${state.nickname}! `, `${state.nickname} - `],
    'zh-TW': [`${state.nickname}，`, `嗨 ${state.nickname}！`],
    'zh-CN': [`${state.nickname}，`, `嗨 ${state.nickname}！`],
    'ko': [`${state.nickname}님, `, `${state.nickname}! `],
    'vi': [`${state.nickname} ơi, `, `${state.nickname}! `],
    'id': [`${state.nickname}, `, `Hai ${state.nickname}! `]
  };
  const langGreetings = greetings[state.lang] || greetings['en'];
  return langGreetings[Math.floor(Math.random() * langGreetings.length)];
}

// Helper: Get encouragement variations
function getEncouragement(lang, isRepeatMistake = false) {
  const encouragements = {
    'en': isRepeatMistake ? [
      "This one's tricky, but you're getting closer!",
      "Don't worry - tough ones take a few tries!",
      "You'll nail it next time, I believe in you!",
      "Keep at it - mastery takes practice!",
      "Almost there! One more try and you've got it!"
    ] : [
      "You've got this!",
      "Keep going, you're doing great!",
      "Next time you'll nail it!",
      "Every mistake is a step forward!",
      "You're making progress!",
      "Trust the process!"
    ],
    'zh-TW': isRepeatMistake ? [
      "這題有點難，但你越來越接近了！",
      "別擔心，難題需要多練習！",
      "下次一定行，我相信你！"
    ] : [
      "你可以的！",
      "繼續加油！",
      "下次一定能答對！",
      "每個錯誤都是進步！"
    ],
    'zh-CN': isRepeatMistake ? [
      "这题有点难，但你越来越接近了！",
      "别担心，难题需要多练习！",
      "下次一定行，我相信你！"
    ] : [
      "你可以的！",
      "继续加油！",
      "下次一定能答对！",
      "每个错误都是进步！"
    ],
    'ko': isRepeatMistake ? [
      "어려운 문제지만 점점 가까워지고 있어요!",
      "걱정 마세요, 어려운 건 연습이 필요해요!",
      "다음엔 꼭 맞출 거예요!"
    ] : [
      "할 수 있어요!",
      "계속 화이팅!",
      "다음엔 꼭!",
      "실수도 발전이에요!"
    ],
    'vi': isRepeatMistake ? [
      "Câu này khó, nhưng bạn đang tiến bộ!",
      "Đừng lo, câu khó cần luyện tập!",
      "Lần sau chắc chắn được!"
    ] : [
      "Bạn làm được!",
      "Tiếp tục cố lên!",
      "Lần sau sẽ đúng!",
      "Sai lầm là bước tiến!"
    ],
    'id': isRepeatMistake ? [
      "Yang ini susah, tapi kamu makin dekat!",
      "Jangan khawatir, yang susah butuh latihan!",
      "Pasti bisa lain kali!"
    ] : [
      "Kamu pasti bisa!",
      "Terus semangat!",
      "Lain kali pasti benar!",
      "Kesalahan adalah kemajuan!"
    ]
  };
  const langEnc = encouragements[lang] || encouragements['en'];
  return langEnc[Math.floor(Math.random() * langEnc.length)];
}

// Helper: Get note for repeat mistakes
function getRepeatMistakeNote(lang, count) {
  const notes = {
    'en': [
      `I noticed this one tripped you up before (${count}x). Here's the key point: `,
      `This is a tough one - you've seen it ${count} times. The secret is: `,
      `Let's crack this together! You've practiced this ${count} times, so here's what to focus on: `
    ],
    'zh-TW': [
      `這題之前也錯過（${count}次）。重點是：`,
      `這是個難題，你已經練習${count}次了。關鍵是：`,
      `一起來攻克它吧！重點在於：`
    ],
    'zh-CN': [
      `这题之前也错过（${count}次）。重点是：`,
      `这是个难题，你已经练习${count}次了。关键是：`,
      `一起来攻克它吧！重点在于：`
    ],
    'ko': [
      `이 문제는 전에도 틀렸어요 (${count}번). 핵심은: `,
      `어려운 문제예요 - ${count}번 연습했네요. 비결은: `,
      `같이 풀어봐요! 포인트는: `
    ],
    'vi': [
      `Câu này trước đây cũng sai (${count} lần). Điểm chính là: `,
      `Đây là câu khó - bạn đã làm ${count} lần. Bí quyết là: `,
      `Cùng giải quyết nhé! Điểm cần nhớ: `
    ],
    'id': [
      `Yang ini pernah salah sebelumnya (${count}x). Poin pentingnya: `,
      `Ini yang susah - sudah latihan ${count} kali. Kuncinya: `,
      `Yuk pecahkan bareng! Fokusnya: `
    ]
  };
  const langNotes = notes[lang] || notes['en'];
  return langNotes[Math.floor(Math.random() * langNotes.length)];
}

async function fetchMockAIExplanation(question, userAnswer, correctAnswer, cacheKey, elementIndex, context = {}) {
  const expDiv = document.getElementById(`ai-exp-${elementIndex}`);
  if (!expDiv) return;
  
  const { wasPreviouslyWrong = false, mistakeCount = 0 } = context;
  
  // Increment mistake count for this question
  incrementMistakeCount(question.id);
  
  // Language names for UI
  const langNames = {
    'en': 'English',
    'zh-TW': '繁體中文',
    'zh-CN': '简体中文',
    'ko': '한국어',
    'vi': 'Tiếng Việt',
    'id': 'Bahasa Indonesia'
  };
  
  const lang = state.lang || 'en';
  const fullCacheKey = `${cacheKey}_${lang}`;
  
  try {
    // Step 1: Check Firestore cache first (but add personalization later)
    let cached = null;
    if (firebaseDb) {
      const cacheDoc = await firebaseDb.collection('aiExplanations').doc(fullCacheKey).get();
      if (cacheDoc.exists) {
        cached = cacheDoc.data();
      }
    }
    
    if (cached && cached.explanation) {
      // Add personalized prefix to cached explanation
      let personalizedPrefix = getNicknameGreeting();
      if (wasPreviouslyWrong && mistakeCount > 1) {
        personalizedPrefix += getRepeatMistakeNote(lang, mistakeCount);
      }
      
      expDiv.innerHTML = `
        <div class="ai-explanation-header">${getAmoebaIcon()} AI Coach</div>
        <div class="ai-explanation-text">${personalizedPrefix}${cached.explanation}</div>
        <div class="ai-explanation-cached">⚡ Instant</div>
      `;
      return;
    }
    
    // Step 2: Generate new explanation via Vertex AI
    const word = question.k || question.p || question.w || '';
    const reading = question.r || '';
    const category = question.k ? 'kanji' : question.p ? 'grammar' : 'vocabulary';
    
    // Build prompt based on language
    const langInstructions = {
      'en': 'Respond in English.',
      'zh-TW': 'Respond in Traditional Chinese (繁體中文).',
      'zh-CN': 'Respond in Simplified Chinese (简体中文).',
      'ko': 'Respond in Korean (한국어).',
      'vi': 'Respond in Vietnamese (Tiếng Việt).',
      'id': 'Respond in Indonesian (Bahasa Indonesia).'
    };
    
    // Build personalized context
    let personalContext = '';
    if (state.nickname && Math.random() > 0.5) {
      personalContext += `Student's name: ${state.nickname} (address them by name sometimes)\n`;
    }
    if (wasPreviouslyWrong && mistakeCount > 1) {
      personalContext += `IMPORTANT: This student has gotten this question wrong ${mistakeCount} times before. Be extra supportive and focus on the KEY point that will help them finally remember it. Acknowledge their persistence!\n`;
    }
    
    const prompt = `You are a supportive JLPT study coach grounded in Second Language Acquisition (SLA) theory and Instructional Design principles. Think of yourself as a warm mentor who understands the science of how adults learn languages.

## YOUR COACHING PHILOSOPHY (SLA & ID foundations)

- **Error Correction**: In SLA, errors show interlanguage development. They're signs of active learning, not failure.
- **Elaborative Encoding**: Connect new info to existing knowledge for stronger memory traces.
- **Affective Filter (Krashen)**: Keep emotional barriers low. Shame blocks acquisition.
- **Noticing Hypothesis (Schmidt)**: Help them consciously notice the pattern so they can acquire it.
- **Scaffolding (Vygotsky)**: Provide just enough support to help them succeed next time.

${personalContext}
## THE SITUATION
Question: ${word}${reading ? ' (' + reading + ')' : ''}
Category: ${category}
User chose: ${userAnswer}
Correct answer: ${correctAnswer}
JLPT Level: ${state.level}

${langInstructions[lang] || langInstructions['en']}

## YOUR TASK
Write a brief, warm explanation (max 80 words) that:
1. Validates their attempt (their choice shows they're thinking!)
2. Explains the correct answer with a memorable hook (mnemonic, pattern, or context)
3. Connects it to something they likely already know (scaffolding)
4. Ends with forward-looking encouragement focused on their growth journey

## TONE EXAMPLES
✗ "Your answer was incorrect. The correct meaning is..."
✗ "You got this wrong because..."
✓ "食べる means 'to eat' — notice how 食 (food) appears in many eating-related words like 食事 (meal). Your brain is making connections. Trust the process!"
✓ "Good thinking! 大きい does look similar to other い-adjectives. It means 'big' — imagine the 大 kanji as a person stretching their arms wide. Each mistake builds stronger neural pathways!"

Write as plain text, no markdown, no emojis. Sound like a mentor who genuinely believes in their potential.`;

    let explanation = '';
    
    // Try Vertex AI
    if (typeof firebase !== 'undefined' && firebase.app) {
      try {
        const { getVertexAI, getGenerativeModel } = await import('https://www.gstatic.com/firebasejs/10.7.1/firebase-vertexai-preview.js');
        const vertexAI = getVertexAI(firebase.app());
        const model = getGenerativeModel(vertexAI, { model: 'gemini-2.0-flash' });
        
        const result = await model.generateContent(prompt);
        explanation = result.response.text();
      } catch (aiError) {
        console.log('Vertex AI error, using fallback:', aiError.message);
        explanation = generateLocalExplanation(question, userAnswer, correctAnswer, lang);
      }
    } else {
      explanation = generateLocalExplanation(question, userAnswer, correctAnswer, lang);
    }
    
    // Step 3: Save to Firestore cache
    if (firebaseDb && explanation) {
      try {
        await firebaseDb.collection('aiExplanations').doc(fullCacheKey).set({
          explanation: explanation,
          question: word,
          userAnswer: userAnswer,
          correctAnswer: correctAnswer,
          level: state.level,
          lang: lang,
          createdAt: firebase.firestore.FieldValue.serverTimestamp()
        });
      } catch (saveError) {
        console.log('Cache save failed:', saveError.message);
      }
    }
    
    // Add personalized prefix
    let personalizedPrefix = getNicknameGreeting();
    if (wasPreviouslyWrong && mistakeCount > 1) {
      personalizedPrefix += getRepeatMistakeNote(lang, mistakeCount);
    }
    
    // Display explanation
    expDiv.innerHTML = `
      <div class="ai-explanation-header">${getAmoebaIcon()} AI Coach</div>
      <div class="ai-explanation-text">${personalizedPrefix}${explanation.replace(/\n/g, '<br>')}</div>
    `;
    
  } catch (error) {
    console.error('AI Coach error:', error);
    const fallback = generateLocalExplanation(question, userAnswer, correctAnswer, state.lang, wasPreviouslyWrong, mistakeCount);
    expDiv.innerHTML = `
      <div class="ai-explanation-header">${getAmoebaIcon()} AI Coach</div>
      <div class="ai-explanation-text">${fallback}</div>
    `;
  }
}

function generateLocalExplanation(question, userAnswer, correctAnswer, lang, wasPreviouslyWrong = false, mistakeCount = 0) {
  const word = question.k || question.p || question.w || '';
  const reading = question.r || '';
  const category = question.k ? 'kanji' : question.p ? 'grammar' : 'vocabulary';
  
  // Get personalized prefix
  let prefix = getNicknameGreeting();
  if (wasPreviouslyWrong && mistakeCount > 1) {
    prefix += getRepeatMistakeNote(lang, mistakeCount);
  }
  
  // Get random encouragement
  const encouragement = getEncouragement(lang, wasPreviouslyWrong && mistakeCount > 1);
  
  const explanations = {
    'en': {
      vocab: `"${word}"${reading ? ' (' + reading + ')' : ''} means "${correctAnswer}". Your brain is actively building this connection right now — that's how acquisition works! Try linking it to a vivid mental image or personal memory. ${encouragement}`,
      kanji: `The kanji "${word}" (${reading}) means "${correctAnswer}". Here's the science: writing activates motor memory, creating additional neural pathways. Trace it a few times while saying the meaning — you're literally wiring your brain. ${encouragement}`,
      grammar: `"${word}" means "${correctAnswer}". This pattern will become automatic with exposure — that's how grammar acquisition works. Your brain is noticing the pattern right now, which is exactly what needs to happen. ${encouragement}`
    },
    'zh-TW': {
      vocab: `「${word}」${reading ? '（' + reading + '）' : ''}的意思是「${correctAnswer}」。你的大腦正在建立這個連結——這就是語言習得的過程！試著將它與生動的心理圖像或個人記憶連結。${encouragement}`,
      kanji: `漢字「${word}」（${reading}）的意思是「${correctAnswer}」。科學原理：書寫能啟動運動記憶，創造額外的神經通路。邊說意思邊描幾次——你正在為大腦布線。${encouragement}`,
      grammar: `「${word}」的意思是「${correctAnswer}」。這個句型會隨著接觸變得自動化——這就是語法習得的原理。你的大腦正在注意這個模式，這正是需要發生的事。${encouragement}`
    },
    'zh-CN': {
      vocab: `「${word}」${reading ? '（' + reading + '）' : ''}的意思是「${correctAnswer}」。你的大脑正在建立这个连接——这就是语言习得的过程！试着将它与生动的心理图像或个人记忆连接。${encouragement}`,
      kanji: `汉字「${word}」（${reading}）的意思是「${correctAnswer}」。科学原理：书写能启动运动记忆，创造额外的神经通路。边说意思边描几次——你正在为大脑布线。${encouragement}`,
      grammar: `「${word}」的意思是「${correctAnswer}」。这个句型会随着接触变得自动化——这就是语法习得的原理。你的大脑正在注意这个模式，这正是需要发生的事。${encouragement}`
    },
    'ko': {
      vocab: `"${word}"${reading ? '(' + reading + ')' : ''}는 "${correctAnswer}"라는 뜻이에요. 지금 당신의 뇌가 이 연결을 만들고 있어요 — 이게 바로 언어 습득의 원리예요! 생생한 이미지나 개인적인 기억과 연결해 보세요. ${encouragement}`,
      kanji: `한자 "${word}"(${reading})의 의미는 "${correctAnswer}"예요. 과학적 원리: 쓰기는 운동 기억을 활성화해서 추가적인 신경 경로를 만들어요. 의미를 말하면서 몇 번 따라 써보세요 — 뇌를 배선하고 있는 거예요. ${encouragement}`,
      grammar: `"${word}"는 "${correctAnswer}"라는 뜻이에요. 이 패턴은 노출과 함께 자동화될 거예요 — 문법 습득의 원리예요. 지금 당신의 뇌가 패턴을 인식하고 있어요. ${encouragement}`
    },
    'vi': {
      vocab: `"${word}"${reading ? ' (' + reading + ')' : ''} có nghĩa là "${correctAnswer}". Não bạn đang xây dựng kết nối này ngay bây giờ — đó là cách thụ đắc ngôn ngữ hoạt động! Hãy liên kết với hình ảnh sống động hoặc ký ức cá nhân. ${encouragement}`,
      kanji: `Chữ Hán "${word}" (${reading}) có nghĩa là "${correctAnswer}". Khoa học: viết kích hoạt trí nhớ vận động, tạo thêm đường dẫn thần kinh. Vẽ vài lần trong khi nói nghĩa — bạn đang lập trình não của mình. ${encouragement}`,
      grammar: `"${word}" có nghĩa là "${correctAnswer}". Mẫu này sẽ trở nên tự động với tiếp xúc — đó là cách thụ đắc ngữ pháp. Não bạn đang nhận ra mẫu ngay bây giờ. ${encouragement}`
    },
    'id': {
      vocab: `"${word}"${reading ? ' (' + reading + ')' : ''} artinya "${correctAnswer}". Otakmu sedang membangun koneksi ini sekarang — begitulah cara akuisisi bahasa bekerja! Coba hubungkan dengan gambar mental atau memori pribadi. ${encouragement}`,
      kanji: `Kanji "${word}" (${reading}) artinya "${correctAnswer}". Sains: menulis mengaktifkan memori motorik, menciptakan jalur saraf tambahan. Tulis beberapa kali sambil mengucapkan artinya — kamu sedang memasang kabel otakmu. ${encouragement}`,
      grammar: `"${word}" artinya "${correctAnswer}". Pola ini akan menjadi otomatis dengan paparan — begitulah cara akuisisi tata bahasa. Otakmu sedang menyadari pola ini sekarang. ${encouragement}`
    }
  };
  
  const langExp = explanations[lang] || explanations['en'];
  return prefix + (langExp[category] || langExp['vocab']);
}

function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

// ========== PASS PREDICTION ==========
function calculatePassProbability() {
  if (!canUsePassPrediction()) return null;
  
  const level = state.level;
  const d = DATA[level];
  const totalQuestions = d.vocab.length + d.kanji.length + d.grammar.length;
  
  // Count learned items for current level
  let levelLearned = 0;
  Object.keys(state.learned).forEach(id => {
    if (id.startsWith(level + '_')) levelLearned++;
  });
  
  // Calculate coverage
  const coverage = totalQuestions > 0 ? levelLearned / totalQuestions : 0;
  
  // Calculate accuracy
  const accuracy = state.totalAnswered > 0 ? state.totalCorrect / state.totalAnswered : 0;
  
  // Calculate consistency (streak factor)
  const streakFactor = Math.min(state.streak / 30, 1); // Max at 30 days
  
  // Weighted calculation
  const probability = Math.round((coverage * 0.4 + accuracy * 0.4 + streakFactor * 0.2) * 100);
  
  return Math.min(Math.max(probability, 5), 95); // Clamp between 5-95%
}

// ========== PWA ==========
function registerServiceWorker() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js')
      .then(reg => console.log('Service Worker registered:', reg.scope))
      .catch(err => console.log('Service Worker registration failed:', err));
  }
}

window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredPrompt = e;
  const pwaBanner = document.getElementById('pwaBanner');
  if (!state.pwaDismissed && pwaBanner) {
    pwaBanner.classList.remove('hidden');
  }
});

function installPWA() {
  if (deferredPrompt) {
    deferredPrompt.prompt();
    deferredPrompt.userChoice.then(choice => {
      if (choice.outcome === 'accepted') {
        console.log('PWA installed');
      }
      deferredPrompt = null;
      const pwaBanner = document.getElementById('pwaBanner');
      if (pwaBanner) pwaBanner.classList.add('hidden');
    });
  }
}

function closePWABanner() {
  const pwaBanner = document.getElementById('pwaBanner');
  if (pwaBanner) pwaBanner.classList.add('hidden');
  state.pwaDismissed = true;
  saveState();
}

// ========== FIREBASE ==========
const firebaseConfig = {
  apiKey: "AIzaSyCPner1ntti7sQd_eENch1oT7w_ciPIox4",
  authDomain: "fujisan-ai-2025.firebaseapp.com",
  projectId: "fujisan-ai-2025",
  storageBucket: "fujisan-ai-2025.firebasestorage.app",
  messagingSenderId: "916443420444",
  appId: "1:916443420444:web:7e9cee5da9b24949b54cd9",
  measurementId: "G-P2K56JCYM7"
};

let firebaseAuth = null;
let firebaseDb = null;
let firebaseAnalytics = null;
let currentUser = null;

// ========== ANALYTICS TRACKING ==========
const FujisanAnalytics = {
  // Log event to Firebase Analytics
  logEvent: function(eventName, params = {}) {
    try {
      if (firebaseAnalytics) {
        firebase.analytics().logEvent(eventName, {
          ...params,
          app_version: APP_VERSION,
          user_level: state?.level || 'unknown',
          user_plan: state?.plan || 'free',
          timestamp: Date.now()
        });
        console.log('[Analytics]', eventName, params);
      }
    } catch (e) {
      console.log('[Analytics] Error:', e.message);
    }
  },

  // Set user properties
  setUserProperties: function(props) {
    try {
      if (firebaseAnalytics) {
        Object.entries(props).forEach(([key, value]) => {
          firebase.analytics().setUserProperties({ [key]: value });
        });
        console.log('[Analytics] User properties set:', props);
      }
    } catch (e) {
      console.log('[Analytics] setUserProperties error:', e.message);
    }
  },

  // Set user ID
  setUserId: function(userId) {
    try {
      if (firebaseAnalytics && userId) {
        firebase.analytics().setUserId(userId);
        console.log('[Analytics] User ID set:', userId);
      }
    } catch (e) {
      console.log('[Analytics] setUserId error:', e.message);
    }
  },

  // ===== USER LIFECYCLE EVENTS =====
  
  // App opened
  trackAppOpen: function() {
    this.logEvent('app_open', {
      source: document.referrer || 'direct'
    });
  },

  // User login
  trackLogin: function(method) {
    this.logEvent('login', {
      method: method || 'email'
    });
  },

  // User signup
  trackSignUp: function(method) {
    this.logEvent('sign_up', {
      method: method || 'email'
    });
  },

  // Onboarding complete
  trackOnboardingComplete: function(selectedLevel) {
    this.logEvent('tutorial_complete', {
      selected_level: selectedLevel
    });
  },

  // ===== LEARNING EVENTS =====
  
  // Drill session start
  trackDrillStart: function(category, level, unit) {
    this.logEvent('drill_start', {
      category: category,
      level: level,
      unit: unit
    });
  },

  // Answer submitted (individual)
  trackAnswer: function(category, skill, isCorrect, itemId) {
    this.logEvent('answer_submitted', {
      category: category,
      skill: skill,
      is_correct: isCorrect,
      item_id: itemId
    });
  },

  // Drill session complete
  trackDrillComplete: function(category, level, unit, correct, total, accuracy) {
    this.logEvent('drill_complete', {
      category: category,
      level: level,
      unit: unit,
      correct: correct,
      total: total,
      accuracy: accuracy
    });
  },

  // ===== MOCK TEST EVENTS =====
  
  // Mock test start
  trackMockStart: function(level, setNumber, mode) {
    this.logEvent('mock_test_start', {
      level: level,
      set_number: setNumber,
      mode: mode
    });
  },

  // Mock test complete
  trackMockComplete: function(level, setNumber, score, correct, total, passed) {
    this.logEvent('mock_test_complete', {
      level: level,
      set_number: setNumber,
      score: score,
      correct: correct,
      total: total,
      passed: passed
    });
  },

  // ===== AI FEATURES =====
  
  // AI tutor question
  trackAIQuestion: function(questionType) {
    this.logEvent('ai_tutor_question', {
      question_type: questionType || 'general'
    });
  },

  // AI explanation requested (Why button)
  trackAIExplanation: function(category, itemId) {
    this.logEvent('ai_explanation_request', {
      category: category,
      item_id: itemId
    });
  },

  // AI Coach viewed
  trackAICoach: function() {
    this.logEvent('ai_coach_view');
  },

  // ===== NAVIGATION & ENGAGEMENT =====
  
  // Screen view
  trackScreenView: function(screenName) {
    this.logEvent('screen_view', {
      screen_name: screenName
    });
  },

  // Level changed
  trackLevelChange: function(oldLevel, newLevel) {
    this.logEvent('level_change', {
      old_level: oldLevel,
      new_level: newLevel
    });
  },

  // Language changed
  trackLanguageChange: function(language) {
    this.logEvent('language_change', {
      language: language
    });
  },

  // ===== MONETIZATION =====
  
  // Upgrade modal shown
  trackUpgradeModalShown: function(feature, requiredPlan) {
    this.logEvent('upgrade_modal_shown', {
      feature: feature,
      required_plan: requiredPlan
    });
  },

  // Purchase initiated
  trackPurchaseStart: function(plan, price, currency) {
    this.logEvent('begin_checkout', {
      plan: plan,
      value: price,
      currency: currency || 'USD'
    });
  },

  // Purchase complete
  trackPurchase: function(plan, price, currency, transactionId) {
    // Firebase Analytics
    this.logEvent('purchase', {
      plan: plan,
      value: price,
      currency: currency || 'USD',
      transaction_id: transactionId
    });
    
    // Google Ads コンバージョン
    if (typeof gtag === 'function') {
      gtag('event', 'conversion', {
        'send_to': 'AW-16752515498/purchase', // TODO: 実際のコンバージョンラベルに置き換え
        'value': price,
        'currency': currency || 'USD',
        'transaction_id': transactionId
      });
      console.log('[Google Ads] Purchase conversion sent:', plan, price);
    }
  },

  // Trial started
  trackTrialStart: function(level) {
    this.logEvent('trial_start', {
      level: level
    });
  },

  // ===== RETENTION & STREAK =====
  
  // Daily study
  trackDailyStudy: function(streak, answersToday) {
    this.logEvent('daily_study', {
      streak: streak,
      answers_today: answersToday
    });
  },

  // Streak achieved
  trackStreakMilestone: function(streak) {
    if ([3, 7, 14, 30, 60, 100].includes(streak)) {
      this.logEvent('streak_milestone', {
        streak_days: streak
      });
    }
  },

  // ===== CONTENT ENGAGEMENT =====
  
  // Audio played
  trackAudioPlay: function(type, itemId) {
    this.logEvent('audio_play', {
      type: type,
      item_id: itemId
    });
  },

  // Review mode started
  trackReviewStart: function(category, mistakeCount) {
    this.logEvent('review_start', {
      category: category,
      mistake_count: mistakeCount
    });
  },

  // Pass report submitted
  trackPassReportSubmit: function(level) {
    this.logEvent('pass_report_submit', {
      level: level
    });
  },

  // ===== ERROR TRACKING =====
  
  trackError: function(errorType, errorMessage) {
    this.logEvent('app_error', {
      error_type: errorType,
      error_message: errorMessage?.substring(0, 100)
    });
  }
};

// Make globally available
window.FujisanAnalytics = FujisanAnalytics;

// ========== AUTH MODAL FUNCTIONS ==========
function showAuthModal(view = 'login') {
  document.getElementById('authModal').classList.remove('hidden');
  showAuthView(view);
}

function closeAuthModal() {
  document.getElementById('authModal').classList.add('hidden');
}

// Bot detection: track when signup form was opened
let signupFormOpenedAt = 0;

function showAuthView(view) {
  // Hide all views
  document.getElementById('authLoginView').classList.add('hidden');
  document.getElementById('authSignupView').classList.add('hidden');
  document.getElementById('authResetView').classList.add('hidden');
  
  // Clear errors
  document.querySelectorAll('.auth-error, .auth-success').forEach(el => el.classList.add('hidden'));
  
  // Show selected view
  if (view === 'login') {
    document.getElementById('authLoginView').classList.remove('hidden');
  } else if (view === 'signup') {
    document.getElementById('authSignupView').classList.remove('hidden');
    signupFormOpenedAt = Date.now(); // Track when form was opened
  } else if (view === 'reset') {
    document.getElementById('authResetView').classList.remove('hidden');
  }
}

function showAuthError(elementId, message) {
  const el = document.getElementById(elementId);
  el.textContent = message;
  el.classList.remove('hidden');
}

function authLogin() {
  const email = document.getElementById('authLoginEmail').value.trim();
  const password = document.getElementById('authLoginPassword').value;
  
  if (!email || !password) {
    showAuthError('authLoginError', 'Please enter email and password');
    return;
  }
  
  firebaseAuth.signInWithEmailAndPassword(email, password)
    .then(() => {
      closeAuthModal();
      FujisanAnalytics.trackLogin('email');
    })
    .catch(err => {
      let msg = 'Login failed. Please try again.';
      if (err.code === 'auth/user-not-found') msg = 'No account found with this email';
      else if (err.code === 'auth/wrong-password') msg = 'Incorrect password';
      else if (err.code === 'auth/invalid-email') msg = 'Invalid email format';
      showAuthError('authLoginError', msg);
    });
}

function authLoginGoogle() {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebaseAuth.signInWithPopup(provider)
    .then(() => {
      closeAuthModal();
      FujisanAnalytics.trackLogin('google');
    })
    .catch(err => showAuthError('authLoginError', err.message));
}

// Auth billing state
let authSelectedBilling = 'annual';

function setAuthBilling(billing) {
  // プラン選択UIは削除されたため、この関数は何もしない
  authSelectedBilling = billing;
}

function getSelectedAuthPlan() {
  // LPでプラン選択済みのため、デフォルトでstandard_annualを使用
  return 'standard_annual';
}

function authSignup() {
  const email = document.getElementById('authSignupEmail').value.trim();
  const password = document.getElementById('authSignupPassword').value;
  const honeypot = document.getElementById('authSignupWebsite').value;
  const ageCheck = document.getElementById('authAgeCheck').checked;
  const termsCheck = document.getElementById('authTermsCheck').checked;
  const renewalCheck = document.getElementById('authRenewalCheck').checked;
  const selectedPlanKey = getSelectedAuthPlan();
  
  // Honeypot check - if filled, silently reject (bot detected)
  if (honeypot) {
    console.log('[Bot Detection] Honeypot triggered');
    // Show fake success to confuse bots
    showAuthError('authSignupError', 'Account created! Please check your email.');
    return;
  }
  
  // Timing check - humans take at least 3 seconds to fill the form
  const timeTaken = Date.now() - signupFormOpenedAt;
  if (signupFormOpenedAt > 0 && timeTaken < 3000) {
    console.log('[Bot Detection] Form submitted too fast:', timeTaken, 'ms');
    showAuthError('authSignupError', 'Account created! Please check your email.');
    return;
  }
  
  if (!email) {
    showAuthError('authSignupError', 'Please enter your email');
    return;
  }
  if (password.length < 8) {
    showAuthError('authSignupError', 'Password must be at least 8 characters');
    return;
  }
  if (!ageCheck) {
    showAuthError('authSignupError', 'You must be 13 years or older');
    return;
  }
  if (!termsCheck) {
    showAuthError('authSignupError', 'You must agree to Terms & Privacy Policy');
    return;
  }
  if (!renewalCheck) {
    showAuthError('authSignupError', 'You must acknowledge the auto-renewal policy');
    return;
  }
  
  firebaseAuth.createUserWithEmailAndPassword(email, password)
    .then(async (userCredential) => {
      // Firestoreにユーザードキュメントを作成
      try {
        await firebaseDb.collection('users').doc(userCredential.user.uid).set({
          email: email,
          createdAt: new Date().toISOString(),
          // FREE CAMPAIGN: Grant premium access until campaign ends
          ...(IS_FREE_CAMPAIGN && {
            freeCampaign: true,
            freeCampaignEnd: FREE_CAMPAIGN_END.toISOString(),
            plan: 'premium',
            planStatus: 'free_campaign'
          })
        }, { merge: true });
        console.log('User document created in Firestore');
      } catch (err) {
        console.log('Could not create user document:', err.message);
      }
      
      closeAuthModal();
      FujisanAnalytics.trackSignUp('email');
      
      // FREE CAMPAIGN: Skip Stripe, go directly to app
      if (IS_FREE_CAMPAIGN) {
        console.log('[FREE CAMPAIGN] Skipping Stripe, going to app');
        window.location.href = '/app.html';
        return;
      }
      
      // After signup, redirect to Stripe with selected plan
      redirectToStripeCheckoutWithPlanKey(email, selectedPlanKey, userCredential.user.uid);
    })
    .catch(err => {
      let msg = 'Signup failed. Please try again.';
      if (err.code === 'auth/email-already-in-use') msg = 'An account with this email already exists';
      else if (err.code === 'auth/invalid-email') msg = 'Invalid email format';
      else if (err.code === 'auth/weak-password') msg = 'Password is too weak';
      showAuthError('authSignupError', msg);
    });
}

function authSignupGoogle() {
  const ageCheck = document.getElementById('authAgeCheck').checked;
  const termsCheck = document.getElementById('authTermsCheck').checked;
  const renewalCheck = document.getElementById('authRenewalCheck').checked;
  const selectedPlanKey = getSelectedAuthPlan();
  
  if (!ageCheck) {
    showAuthError('authSignupError', 'You must be 13 years or older');
    return;
  }
  if (!termsCheck) {
    showAuthError('authSignupError', 'You must agree to Terms & Privacy Policy');
    return;
  }
  if (!renewalCheck) {
    showAuthError('authSignupError', 'You must acknowledge the auto-renewal policy');
    return;
  }
  
  const provider = new firebase.auth.GoogleAuthProvider();
  firebaseAuth.signInWithPopup(provider)
    .then(async (result) => {
      // Firestoreにユーザードキュメントを作成
      try {
        await firebaseDb.collection('users').doc(result.user.uid).set({
          email: result.user.email,
          createdAt: new Date().toISOString(),
          // FREE CAMPAIGN: Grant premium access until campaign ends
          ...(IS_FREE_CAMPAIGN && {
            freeCampaign: true,
            freeCampaignEnd: FREE_CAMPAIGN_END.toISOString(),
            plan: 'premium',
            planStatus: 'free_campaign'
          })
        }, { merge: true });
        console.log('User document created in Firestore');
      } catch (err) {
        console.log('Could not create user document:', err.message);
      }
      
      closeAuthModal();
      FujisanAnalytics.trackSignUp('google');
      
      // FREE CAMPAIGN: Skip Stripe, go directly to app
      if (IS_FREE_CAMPAIGN) {
        console.log('[FREE CAMPAIGN] Skipping Stripe, going to app');
        window.location.href = '/app.html';
        return;
      }
      
      // After signup, redirect to Stripe with selected plan
      redirectToStripeCheckoutWithPlanKey(result.user.email, selectedPlanKey, result.user.uid);
    })
    .catch(err => showAuthError('authSignupError', err.message));
}

function authResetPassword() {
  const email = document.getElementById('authResetEmail').value.trim();
  
  if (!email) {
    showAuthError('authResetError', 'Please enter your email');
    return;
  }
  
  firebaseAuth.sendPasswordResetEmail(email)
    .then(() => {
      document.getElementById('authResetError').classList.add('hidden');
      const successEl = document.getElementById('authResetSuccess');
      successEl.textContent = 'Password reset email sent! Check your inbox.';
      successEl.classList.remove('hidden');
      FujisanAnalytics.logEvent('password_reset_sent', { email_domain: email.split('@')[1] });
    })
    .catch(err => {
      let msg = 'Failed to send reset email.';
      if (err.code === 'auth/user-not-found') msg = 'No account found with this email';
      else if (err.code === 'auth/invalid-email') msg = 'Invalid email format';
      showAuthError('authResetError', msg);
    });
}

/**
 * Redirect to Stripe Checkout
 * 
 * Payment Linkに渡すパラメータ:
 * - prefilled_email: ユーザーのメールアドレス
 * - client_reference_id: Firebase UID (Webhookでユーザー特定に使用)
 * 
 * 注意: Stripe DashboardでPayment Linkの設定が必要:
 * 1. success_url: https://fujisan.ai/app.html?from_checkout=success
 * 2. cancel_url: https://fujisan.ai/cancel.html
 * 3. client_reference_id を許可
 */
function redirectToStripeCheckout(email, plan = 'standard', billing = 'annual') {
  const linkKey = plan + '_' + billing;
  const stripeLink = STRIPE_LINKS[linkKey] || STRIPE_LINKS['standard_annual'];
  
  if (stripeLink) {
    const params = new URLSearchParams();
    params.set('prefilled_email', email);
    
    // Firebase UID を client_reference_id として渡す（Webhookでユーザー特定）
    if (currentUser?.uid) {
      params.set('client_reference_id', currentUser.uid);
    }
    
    window.location.href = stripeLink + '?' + params.toString();
  }
}

// Redirect to Stripe with pre-selected plan key (e.g., 'standard_annual')
function redirectToStripeCheckoutWithPlanKey(email, planKey, uid) {
  const stripeLink = STRIPE_LINKS[planKey] || STRIPE_LINKS['standard_annual'];
  
  if (stripeLink) {
    const params = new URLSearchParams();
    params.set('prefilled_email', email);
    
    // Firebase UID を client_reference_id として渡す（Webhookでユーザー特定）
    if (uid) {
      params.set('client_reference_id', uid);
    }
    
    console.log('[Stripe] Redirecting to:', planKey);
    window.location.href = stripeLink + '?' + params.toString();
  }
}

// Check if user has valid subscription (logged in + has plan with valid expiry)
function hasValidSubscription() {
  if (!currentUser) return false;
  
  // FREE CAMPAIGN: Always valid during campaign
  if (isInFreeCampaign()) return true;
  
  // Check for cancelled but still within period
  if (state.isCancelled && state.planExpiry) {
    return new Date(state.planExpiry) > new Date();
  }
  
  // Check for active subscription
  if (!state.plan || !state.planExpiry) return false;
  return new Date(state.planExpiry) > new Date();
}

function initFirebase() {
  // Timeout fallback - if Firebase doesn't respond in 5 seconds, show app anyway
  const firebaseTimeout = setTimeout(() => {
    console.log('[Firebase] Timeout - showing app anyway');
    hideAppLoadingOverlay();
    showAuthModal('signup');
  }, 5000);
  
  try {
    firebase.initializeApp(firebaseConfig);
    firebaseAuth = firebase.auth();
    firebaseDb = firebase.firestore();
    
    // Initialize Analytics
    if (typeof firebase.analytics === 'function') {
      firebaseAnalytics = firebase.analytics();
      console.log('[Firebase] Analytics initialized');
      
      // Track app open
      FujisanAnalytics.trackAppOpen();
    }
    
    firebaseAuth.onAuthStateChanged(async user => {
      clearTimeout(firebaseTimeout); // Clear timeout once we get a response
      if (user) {
        currentUser = user;
        console.log('Logged in as:', user.email);
        
        // Set Analytics user ID and properties
        FujisanAnalytics.setUserId(user.uid);
        FujisanAnalytics.setUserProperties({
          user_level: state.level || 'N5',
          user_plan: state.plan || 'free',
          user_language: state.lang || 'en'
        });
        
        // Sync user data from Firestore
        await syncUserData();
        
        // Check if returned from Stripe checkout
        const params = new URLSearchParams(window.location.search);
        const fromCheckout = params.get('from_checkout') === 'success' || params.get('status') === 'success';
        
        // Check if user has valid subscription
        if (hasValidSubscription() || isInTrialPeriod() || fromCheckout) {
          // User has active subscription, trial, or just completed checkout
          showScreen('drill');
          // Show onboarding for first-time users
          if (!state.onboardingComplete) {
            setTimeout(() => showOnboarding(), 300);
          }
          // Check if should show feedback popup
          checkFeedbackTrigger();
        } else if (state.freeCampaign && !IS_FREE_CAMPAIGN) {
          // FREE CAMPAIGN user after campaign ended - show subscription modal
          console.log('Free campaign ended - showing subscription modal');
          hideAppLoadingOverlay();
          showSubscriptionRequiredModal();
          return;
        } else if (!state.trialStart) {
          // First time user - grant trial
          console.log('First time user - granting trial');
          const now = new Date();
          const trialEnd = new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000);
          state.trialStart = now.toISOString();
          state.trialEnd = trialEnd.toISOString();
          state.plan = 'standard';
          state.planExpiry = trialEnd.toISOString();
          saveState();
          
          // Also save to Firestore
          if (firebaseDb && currentUser) {
            try {
              await firebaseDb.collection('users').doc(currentUser.uid).set({
                trialStart: state.trialStart,
                trialEnd: state.trialEnd,
                plan: 'standard',
                planExpiry: state.planExpiry,
                email: currentUser.email,
                updatedAt: now.toISOString()
              }, { merge: true });
              console.log('Trial saved to Firestore');
            } catch (e) {
              console.log('Failed to save trial to Firestore:', e);
            }
          }
          
          showScreen('drill');
          // Show onboarding for first-time users
          if (!state.onboardingComplete) {
            setTimeout(() => showOnboarding(), 300);
          }
        } else {
          // Trial already used and expired, no subscription - show modal
          console.log('Trial expired, no subscription - showing modal');
          state.isExpiredUser = true;
          hideAppLoadingOverlay();
          showSubscriptionRequiredModal();
          return;
        }
      } else {
        // Not logged in - redirect to LP
        console.log('User not logged in - redirecting to LP');
        window.location.href = 'https://fujisan.ai/';
        return;
      }
      // Hide loading overlay with smooth fade
      hideAppLoadingOverlay();
    });
  } catch (e) {
    console.log('Firebase init error:', e);
    FujisanAnalytics.trackError('firebase_init', e.message);
    // Show auth modal on error
    hideAppLoadingOverlay();
    showAuthModal('signup');
  }
}

async function syncUserData() {
  if (!currentUser || !firebaseDb) return;
  
  // Set userId for referral tracking
  state.userId = currentUser.uid;
  
  // Update email display
  const emailEl = document.getElementById('settingsEmail');
  if (emailEl) emailEl.textContent = currentUser.email || 'Logged in';
  
  try {
    const userDoc = await firebaseDb.collection('users').doc(currentUser.uid).get();
    if (userDoc.exists) {
      const userData = userDoc.data();
      
      // ========== SUBSCRIPTION SYNC (from Stripe Webhook) ==========
      const sub = userData.subscription;
      if (sub) {
        console.log('[Sync] Subscription from Firestore:', sub.status, sub.plan);
        
        // Check subscription status
        const validStatuses = ['active', 'trialing'];
        if (validStatuses.includes(sub.status)) {
          // Active subscription
          state.plan = sub.plan || 'standard';
          state.billing = sub.billing || 'annual';
          state.isTrialing = sub.status === 'trialing';
          
          // Set expiry dates
          if (sub.trialEnd) {
            state.trialEndDate = sub.trialEnd;
          }
          if (sub.currentPeriodEnd) {
            state.planExpiry = sub.currentPeriodEnd;
          }
          
          state.stripeCustomerId = sub.stripeCustomerId;
          state.stripeSubscriptionId = sub.stripeSubscriptionId;
          
        } else if (sub.status === 'cancelled' || sub.status === 'canceled') {
          // Cancelled subscription - check if still within period
          const periodEnd = sub.currentPeriodEnd ? new Date(sub.currentPeriodEnd) : null;
          if (periodEnd && periodEnd > new Date()) {
            // Still within paid period, keep access
            state.plan = sub.plan || 'standard';
            state.planExpiry = sub.currentPeriodEnd;
            state.isTrialing = false;
            state.isCancelled = true; // Show "expires on" message
            state.isExpiredUser = false;
          } else {
            // Period ended, revoke access completely
            state.plan = null;
            state.planExpiry = null;
            state.isTrialing = false;
            state.isCancelled = true;
            state.isExpiredUser = true; // Flag for "no trial on re-subscribe"
            state.previousPlan = sub.plan; // Remember their previous plan
            
            // Mark user as "was subscribed" in Firestore for webhook to check
            try {
              await firebaseDb.collection('users').doc(currentUser.uid).update({
                wasSubscribed: true,
                lastCancelledAt: sub.cancelledAt || new Date().toISOString()
              });
            } catch (e) {
              console.log('Could not update wasSubscribed flag:', e);
            }
          }
          
        } else if (sub.status === 'past_due' || sub.status === 'unpaid') {
          // Payment failed - show warning but keep limited access
          state.plan = sub.plan;
          state.planExpiry = sub.currentPeriodEnd;
          state.paymentFailed = true;
          state.lastPaymentError = sub.lastPaymentError;
          
        } else {
          // Unknown or expired status
          state.plan = null;
          state.planExpiry = null;
          state.isTrialing = false;
        }
      }
      // ========== END SUBSCRIPTION SYNC ==========
      
      // ========== TRIAL SYNC (prevent multi-device infinite trial) ==========
      if (userData.trialStart && !state.trialStart) {
        // User had trial on another device - sync it
        console.log('[Sync] Trial data from Firestore:', userData.trialStart);
        state.trialStart = userData.trialStart;
        state.trialEnd = userData.trialEnd;
      }
      // ========== END TRIAL SYNC ==========
      
      // ========== FREE CAMPAIGN SYNC ==========
      if (userData.freeCampaign) {
        console.log('[Sync] Free campaign user detected');
        state.freeCampaign = true;
        state.planStatus = userData.planStatus || 'free_campaign';
        state.freeCampaignEnd = userData.freeCampaignEnd;
        state.createdAt = userData.createdAt; // For feedback timing
        // Ensure premium access during campaign
        if (IS_FREE_CAMPAIGN) {
          state.plan = 'premium';
        }
      }
      // ========== END FREE CAMPAIGN SYNC ==========
      
      // Merge other cloud data with local state
      if (userData.xp) state.xp = Math.max(state.xp, userData.xp);
      if (userData.streak) state.streak = Math.max(state.streak, userData.streak);
      if (userData.level) state.level = userData.level;
      if (userData.referredBy) state.referredBy = userData.referredBy;
      
      saveState();
      updateDashboard();
      updateSubscriptionUI();
    }
    
    // Record referral to Firestore if pending (user was referred before login)
    if (state.referredBy && !state.referralRecordedToFirestore) {
      await recordReferralToFirestore();
    }
    
    // Generate and save referral code for this user
    getMyReferralCode();
    
  } catch (e) {
    console.log('Sync error:', e);
  }
}

// Update UI based on subscription state
function updateSubscriptionUI() {
  const planDescEl = document.getElementById('settingsPlanDesc');
  const planActionBtn = document.getElementById('planActionBtn');
  const subStatusItem = document.getElementById('subscriptionStatusItem');
  const subStatusTitle = document.getElementById('subscriptionStatusTitle');
  const subStatusDesc = document.getElementById('subscriptionStatusDesc');
  const manageSubBtn = document.getElementById('manageSubBtn');
  const cancelSubLink = document.getElementById('cancelSubscriptionLink');
  
  if (!planDescEl) return;
  
  const formatDate = (dateStr) => {
    if (!dateStr) return '-';
    return new Date(dateStr).toLocaleDateString(state.lang === 'ja' ? 'ja-JP' : 'en-US', {
      year: 'numeric', month: 'short', day: 'numeric'
    });
  };
  
  // Reset visibility
  if (subStatusItem) subStatusItem.classList.add('hidden');
  
  // Hide Cancel Subscription link for FREE CAMPAIGN users (no subscription to cancel)
  if (cancelSubLink) {
    cancelSubLink.style.display = isInFreeCampaign() ? 'none' : '';
  }
  
  // FREE CAMPAIGN user
  if (isInFreeCampaign()) {
    planDescEl.innerHTML = `Premium <span style="color:#00C853;">(Free Campaign)</span>`;
    if (planActionBtn) {
      planActionBtn.style.display = 'none'; // No upgrade needed
    }
    if (subStatusItem) {
      subStatusItem.classList.remove('hidden');
      subStatusItem.style.background = 'rgba(0,200,83,0.1)';
      subStatusTitle.innerHTML = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#00C853" stroke-width="2" style="vertical-align:-2px;margin-right:4px;"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg> Free Campaign';
      subStatusTitle.style.color = '#00C853';
      subStatusDesc.textContent = 'All features free until March 31, 2026';
      if (manageSubBtn) manageSubBtn.style.display = 'none';
    }
    return;
  }
  
  // Show Cancel Subscription link for paid users
  if (cancelSubLink) {
    cancelSubLink.style.display = (state.plan && !state.isCancelled) ? '' : 'none';
  }
  
  if (state.paymentFailed) {
    // Payment failed state
    planDescEl.innerHTML = `<span style="color:#ef4444;">⚠️ Payment Failed</span>`;
    if (planActionBtn) {
      planActionBtn.textContent = 'Update Payment';
      planActionBtn.onclick = openCustomerPortal;
      planActionBtn.style.background = '#ef4444';
      planActionBtn.style.color = '#fff';
    }
    if (subStatusItem) {
      subStatusItem.classList.remove('hidden');
      subStatusTitle.textContent = '⚠️ Payment Issue';
      subStatusTitle.style.color = '#ef4444';
      subStatusDesc.textContent = state.lastPaymentError || 'Please update your payment method';
    }
    
  } else if (state.isCancelled) {
    // Cancelled but may still have access
    const planName = state.plan ? state.plan.charAt(0).toUpperCase() + state.plan.slice(1) : 'Free';
    
    if (state.planExpiry && new Date(state.planExpiry) > new Date()) {
      // Still has access until expiry
      planDescEl.innerHTML = `${planName} <span style="color:#f59e0b;">(Cancelled)</span>`;
      if (planActionBtn) {
        planActionBtn.textContent = 'Resubscribe';
        planActionBtn.onclick = openSubscriptionModal;
        planActionBtn.style.background = '';
        planActionBtn.style.color = '';
      }
      if (subStatusItem) {
        subStatusItem.classList.remove('hidden');
        subStatusItem.style.background = 'rgba(245,158,11,0.1)';
        subStatusTitle.textContent = 'Subscription Cancelled';
        subStatusTitle.style.color = '#f59e0b';
        subStatusDesc.textContent = `Access until ${formatDate(state.planExpiry)}`;
        manageSubBtn.textContent = 'Resubscribe';
        manageSubBtn.onclick = openSubscriptionModal;
      }
    } else {
      // Access expired
      planDescEl.textContent = 'Free';
      if (planActionBtn) {
        planActionBtn.textContent = 'Upgrade';
        planActionBtn.onclick = openSubscriptionModal;
        planActionBtn.style.background = '';
        planActionBtn.style.color = '';
      }
    }
    
  } else if (state.isTrialing && state.trialEndDate) {
    // Trial period
    const planName = state.plan ? state.plan.charAt(0).toUpperCase() + state.plan.slice(1) : 'Standard';
    planDescEl.innerHTML = `${planName} <span style="color:#667eea;">(Trial)</span>`;
    if (planActionBtn) {
      planActionBtn.textContent = 'Manage';
      planActionBtn.onclick = openCustomerPortal;
      planActionBtn.style.background = '#f3f4f6';
      planActionBtn.style.color = '#374151';
    }
    if (subStatusItem) {
      subStatusItem.classList.remove('hidden');
      subStatusItem.style.background = 'rgba(102,126,234,0.05)';
      subStatusTitle.textContent = '🎉 Free Trial Active';
      subStatusTitle.style.color = '#667eea';
      subStatusDesc.textContent = `Trial ends ${formatDate(state.trialEndDate)}`;
      manageSubBtn.textContent = 'Manage';
      manageSubBtn.onclick = openCustomerPortal;
    }
    
  } else if (state.plan) {
    // Active subscription
    const planName = state.plan.charAt(0).toUpperCase() + state.plan.slice(1);
    planDescEl.textContent = planName;
    if (planActionBtn) {
      planActionBtn.textContent = 'Manage';
      planActionBtn.onclick = openCustomerPortal;
      planActionBtn.style.background = '#f3f4f6';
      planActionBtn.style.color = '#374151';
    }
    if (subStatusItem && state.planExpiry) {
      subStatusItem.classList.remove('hidden');
      subStatusItem.style.background = 'rgba(16,185,129,0.05)';
      subStatusTitle.textContent = '✓ Active';
      subStatusTitle.style.color = '#10b981';
      subStatusDesc.textContent = `Renews ${formatDate(state.planExpiry)}`;
      manageSubBtn.textContent = 'Manage';
      manageSubBtn.onclick = openCustomerPortal;
    }
    
  } else {
    // Free user
    planDescEl.textContent = 'Free';
    if (planActionBtn) {
      planActionBtn.textContent = 'Upgrade';
      planActionBtn.onclick = openSubscriptionModal;
      planActionBtn.style.background = '';
      planActionBtn.style.color = '';
    }
  }
}

// Open cancel subscription modal
function openCancelModal() {
  const modal = document.getElementById('cancelSubscriptionModal');
  const accessUntil = document.getElementById('cancelAccessUntil');
  
  if (accessUntil && state.planExpiry) {
    accessUntil.textContent = new Date(state.planExpiry).toLocaleDateString();
  }
  
  if (modal) modal.classList.remove('hidden');
}

// Close cancel subscription modal
function closeCancelModal() {
  const modal = document.getElementById('cancelSubscriptionModal');
  if (modal) modal.classList.add('hidden');
}

// Confirm cancel - redirect to Stripe Customer Portal
function confirmCancelSubscription() {
  closeCancelModal();
  openCustomerPortal();
}

// Record referral relationship to Firestore
async function recordReferralToFirestore() {
  if (!currentUser || !firebaseDb || !state.referredBy) return;
  
  try {
    // Check if already recorded
    const existing = await firebaseDb.collection('referrals')
      .where('referredUserId', '==', currentUser.uid)
      .get();
    
    if (existing.empty) {
      await firebaseDb.collection('referrals').add({
        referrerCode: state.referredBy,
        referredUserId: currentUser.uid,
        referredEmail: currentUser.email,
        referredAt: firebase.firestore.FieldValue.serverTimestamp(),
        bonusGranted: '30-day-trial',
        status: 'pending' // Will be 'completed' when they subscribe
      });
      
      state.referralRecordedToFirestore = true;
      saveState();
      console.log('Referral recorded to Firestore');
    }
  } catch (e) {
    console.log('Could not record referral:', e);
  }
}

async function saveToCloud() {
  if (!currentUser || !firebaseDb) return;
  
  try {
    await firebaseDb.collection('users').doc(currentUser.uid).set({
      email: currentUser.email,
      plan: state.plan,
      planExpiry: state.planExpiry,
      xp: state.xp,
      streak: state.streak,
      level: state.level,
      learned: Object.keys(state.learned).length,
      lastStudy: state.lastStudy,
      updatedAt: firebase.firestore.FieldValue.serverTimestamp()
    }, { merge: true });
  } catch (e) {
    console.log('Cloud save error:', e);
  }
}

async function submitPassReportToCloud(report) {
  if (!firebaseDb) return false;
  
  try {
    await firebaseDb.collection('passReports').add({
      ...report,
      userId: currentUser?.uid || null,
      userEmail: currentUser?.email || null,
      createdAt: firebase.firestore.FieldValue.serverTimestamp()
    });
    return true;
  } catch (e) {
    console.log('Pass report submit error:', e);
    return false;
  }
}

function logout() {
  if (firebaseAuth) {
    firebaseAuth.signOut().then(() => {
      // Redirect to landing page after logout
      window.location.href = 'index.html';
    });
  } else {
    window.location.href = 'index.html';
  }
}

// ========== ONBOARDING ==========
let onboardingStep = 1;
const totalOnboardingSteps = 5;

function showOnboarding() {
  if (state.onboardingComplete) return;
  const overlay = document.getElementById('onboarding-overlay');
  if (overlay) {
    overlay.style.display = 'flex';
    updateOnboardingUI();
  }
}

function updateOnboardingUI() {
  // Update steps
  document.querySelectorAll('.onboarding-step').forEach(step => {
    step.classList.toggle('active', parseInt(step.dataset.step) === onboardingStep);
  });
  
  // Update dots
  document.querySelectorAll('.onboarding-dot').forEach(dot => {
    dot.classList.toggle('active', parseInt(dot.dataset.step) === onboardingStep);
  });
  
  // Update button text
  const nextText = document.getElementById('onboarding-next-text');
  if (nextText) {
    const texts = UI_TEXTS[state.lang || 'en'] || UI_TEXTS['en'];
    if (onboardingStep === totalOnboardingSteps) {
      nextText.textContent = texts.onboarding_start || "Let's Go!";
    } else {
      nextText.textContent = texts.onboarding_next || 'Next';
    }
  }
}

function nextOnboardingStep() {
  if (onboardingStep < totalOnboardingSteps) {
    onboardingStep++;
    updateOnboardingUI();
  } else {
    completeOnboarding();
  }
}

function selectOnboardingLevel(level) {
  state.level = level;
  saveState();
  
  // Update UI
  document.querySelectorAll('.onboarding-level-btn').forEach(btn => {
    btn.classList.toggle('selected', btn.dataset.level === level);
  });
  
  // Auto-advance after selection
  setTimeout(() => {
    nextOnboardingStep();
  }, 300);
}

// Show level detail modal (from onboarding or dashboard)
function showLevelDetailModal(level, fromOnboarding = false) {
  const lang = state.lang || 'en';
  const texts = UI_TEXTS[lang] || UI_TEXTS['en'];
  const info = JLPT_LEVEL_INFO[level];
  
  if (!info) return;
  
  // Create modal if it doesn't exist
  let modal = document.getElementById('level-detail-modal');
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'level-detail-modal';
    modal.className = 'level-detail-modal';
    document.body.appendChild(modal);
  }
  
  const totalItems = info.vocab + info.kanji + info.grammar;
  
  modal.innerHTML = `
    <div class="level-detail-content" style="--level-color: ${info.color}">
      <button class="level-detail-close" onclick="closeLevelDetailModal()">&times;</button>
      
      <div class="level-detail-header">
        <span class="level-tag-large ${level.toLowerCase()}">${level}</span>
        <div class="level-detail-title-area">
          <h2>${texts['level_' + level.toLowerCase() + '_difficulty'] || info.difficulty}</h2>
          <p class="level-official-summary">${texts['level_' + level.toLowerCase() + '_official'] || ''}</p>
        </div>
      </div>
      
      <div class="level-detail-stats">
        <div class="level-stat">
          <span class="level-stat-value">${info.studyHours}</span>
          <span class="level-stat-label">${texts.level_detail_study_hours || 'Study Hours'}</span>
        </div>
        <div class="level-stat">
          <span class="level-stat-value">${info.passRate.split(' ')[0]}</span>
          <span class="level-stat-label">${texts.level_detail_pass_mark || 'Pass Mark'}</span>
        </div>
        <div class="level-stat">
          <span class="level-stat-value">${info.testTime}</span>
          <span class="level-stat-label">${texts.level_detail_test_time || 'Test Duration'}</span>
        </div>
      </div>
      
      <div class="level-detail-section">
        <h3>📖 ${texts.level_detail_reading || 'Reading'}</h3>
        <p>${texts['level_' + level.toLowerCase() + '_reading'] || ''}</p>
      </div>
      
      <div class="level-detail-section">
        <h3>🎧 ${texts.level_detail_listening || 'Listening'}</h3>
        <p>${texts['level_' + level.toLowerCase() + '_listening'] || ''}</p>
      </div>
      
      <div class="level-detail-section">
        <h3>✅ ${texts.level_detail_cando || 'What You Can Do'}</h3>
        <ul class="cando-list">
          <li>${texts['level_' + level.toLowerCase() + '_cando_1'] || ''}</li>
          <li>${texts['level_' + level.toLowerCase() + '_cando_2'] || ''}</li>
          <li>${texts['level_' + level.toLowerCase() + '_cando_3'] || ''}</li>
          <li>${texts['level_' + level.toLowerCase() + '_cando_4'] || ''}</li>
        </ul>
      </div>
      
      <div class="level-detail-section">
        <h3>📚 ${texts.level_detail_content || 'Fujisan.AI Content'}</h3>
        <div class="level-content-grid">
          <div class="level-content-item">
            <span class="content-count">${info.vocab.toLocaleString()}</span>
            <span class="content-label">${texts.level_vocabulary || 'Vocabulary'}</span>
          </div>
          <div class="level-content-item">
            <span class="content-count">${info.kanji.toLocaleString()}</span>
            <span class="content-label">${texts.level_new_kanji || 'Kanji'}</span>
          </div>
          <div class="level-content-item">
            <span class="content-count">${info.grammar.toLocaleString()}</span>
            <span class="content-label">${texts.level_grammar || 'Grammar'}</span>
          </div>
          <div class="level-content-item">
            <span class="content-count">${info.units}</span>
            <span class="content-label">Units</span>
          </div>
        </div>
      </div>
      
      <button class="level-detail-start-btn" onclick="confirmLevelSelection('${level}', ${fromOnboarding})">
        ${texts.level_detail_start || 'Start Learning'} ${level}
      </button>
    </div>
  `;
  
  modal.style.display = 'flex';
  setTimeout(() => modal.classList.add('active'), 10);
}

function closeLevelDetailModal() {
  const modal = document.getElementById('level-detail-modal');
  if (modal) {
    modal.classList.remove('active');
    setTimeout(() => modal.style.display = 'none', 300);
  }
}

function confirmLevelSelection(level, fromOnboarding) {
  state.level = level;
  saveState();
  
  closeLevelDetailModal();
  
  if (fromOnboarding) {
    // Update onboarding UI
    document.querySelectorAll('.onboarding-level-btn').forEach(btn => {
      btn.classList.toggle('selected', btn.dataset.level === level);
    });
    
    // Auto-advance after selection
    setTimeout(() => {
      nextOnboardingStep();
    }, 300);
  } else {
    // From dashboard - update UI
    selectLevelFromDashboard(level);
  }
}

// Show unit preview modal when clicking a unit
function showUnitPreview(unitIndex) {
  const lang = state.lang || 'en';
  const texts = UI_TEXTS[lang] || UI_TEXTS['en'];
  const level = state.level;
  const d = DATA[level];
  
  if (!d) return;
  
  const allItems = [...(d.vocab || []), ...(d.kanji || []), ...(d.grammar || [])];
  const unitStart = unitIndex * ITEMS_PER_UNIT;
  const unitEnd = Math.min(unitStart + ITEMS_PER_UNIT, allItems.length);
  const unitItems = allItems.slice(unitStart, unitEnd);
  
  // Categorize items
  const vocabItems = unitItems.filter(item => item.w);
  const kanjiItems = unitItems.filter(item => item.k && !item.w);
  const grammarItems = unitItems.filter(item => item.p);
  
  // Get sample items for preview
  const sampleVocab = vocabItems.slice(0, 3);
  const sampleKanji = kanjiItems.slice(0, 3);
  const sampleGrammar = grammarItems.slice(0, 2);
  
  // Calculate progress
  let unitMastered = 0;
  unitItems.forEach(item => {
    const baseKey = `${level}_${item.id}`;
    const allComplete = SKILL_TYPES.every(skill => state.skills && state.skills[`${baseKey}_${skill}`]);
    if (allComplete) unitMastered++;
  });
  const progress = Math.round((unitMastered / unitItems.length) * 100);
  
  const levelColor = JLPT_LEVEL_INFO[level]?.color || '#007aff';
  
  // Create modal if it doesn't exist
  let modal = document.getElementById('unit-preview-modal');
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'unit-preview-modal';
    modal.className = 'unit-preview-modal';
    document.body.appendChild(modal);
  }
  
  modal.innerHTML = `
    <div class="unit-preview-content" style="--level-color: ${levelColor}">
      <button class="unit-preview-close" onclick="closeUnitPreview()">&times;</button>
      
      <div class="unit-preview-header">
        <span class="unit-number" style="background: ${levelColor}">${unitIndex + 1}</span>
        <div>
          <h2>${texts.unit_preview_title || 'Unit Preview'} ${unitIndex + 1}</h2>
          <p class="unit-progress-text">${progress}% ${texts.ai_recommend_complete || 'complete'}</p>
        </div>
      </div>
      
      <div class="unit-preview-stats">
        <div class="unit-stat">
          <span class="unit-stat-value">${vocabItems.length}</span>
          <span class="unit-stat-label">${texts.unit_preview_vocab || 'Vocabulary'}</span>
        </div>
        <div class="unit-stat">
          <span class="unit-stat-value">${kanjiItems.length}</span>
          <span class="unit-stat-label">${texts.unit_preview_kanji || 'Kanji'}</span>
        </div>
        <div class="unit-stat">
          <span class="unit-stat-value">${grammarItems.length}</span>
          <span class="unit-stat-label">${texts.unit_preview_grammar || 'Grammar'}</span>
        </div>
      </div>
      
      <div class="unit-preview-samples">
        <h3>${texts.unit_preview_sample || 'Sample items'}</h3>
        ${sampleVocab.length > 0 ? `
          <div class="sample-category">
            <span class="sample-label">${texts.unit_preview_vocab || 'Vocabulary'}</span>
            <div class="sample-items">
              ${sampleVocab.map(v => `<span class="sample-item">${v.w}</span>`).join('')}
            </div>
          </div>
        ` : ''}
        ${sampleKanji.length > 0 ? `
          <div class="sample-category">
            <span class="sample-label">${texts.unit_preview_kanji || 'Kanji'}</span>
            <div class="sample-items">
              ${sampleKanji.map(k => `<span class="sample-item kanji">${k.k}</span>`).join('')}
            </div>
          </div>
        ` : ''}
        ${sampleGrammar.length > 0 ? `
          <div class="sample-category">
            <span class="sample-label">${texts.unit_preview_grammar || 'Grammar'}</span>
            <div class="sample-items">
              ${sampleGrammar.map(g => `<span class="sample-item grammar">${g.p}</span>`).join('')}
            </div>
          </div>
        ` : ''}
      </div>
      
      <button class="unit-preview-start-btn" onclick="closeUnitPreview(); startUnitDrill(${unitIndex})">
        ${texts.unit_preview_start || 'Start Unit'} ${unitIndex + 1}
      </button>
    </div>
  `;
  
  modal.style.display = 'flex';
  setTimeout(() => modal.classList.add('active'), 10);
}

function closeUnitPreview() {
  const modal = document.getElementById('unit-preview-modal');
  if (modal) {
    modal.classList.remove('active');
    setTimeout(() => modal.style.display = 'none', 300);
  }
}

function skipOnboarding() {
  completeOnboarding();
}

function completeOnboarding() {
  state.onboardingComplete = true;
  saveState();
  
  // Track onboarding complete
  FujisanAnalytics.trackOnboardingComplete(state.level);
  
  const overlay = document.getElementById('onboarding-overlay');
  if (overlay) {
    overlay.style.opacity = '0';
    overlay.style.transition = 'opacity 0.3s ease';
    setTimeout(() => {
      overlay.style.display = 'none';
    }, 300);
  }
  
  // Update UI with selected level
  updateDrillScreen();
  
  // Sync level buttons
  document.querySelectorAll('.level-select-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.level === state.level);
  });
}

// ========== INIT ==========
initFirebase();
loadState();
checkPlanFromURL();
registerServiceWorker();
updateUITexts(); // Apply translations on init

// Check if coming from LP login (skip onboarding)
const urlParams = new URLSearchParams(window.location.search);
const fromLogin = urlParams.get('logged_in');
const levelParam = urlParams.get('level');

// Handle level parameter from LP
if (levelParam && ['N5', 'N4', 'N3', 'N2', 'N1'].includes(levelParam)) {
  state.level = levelParam;
  saveState();
}

if (fromLogin || levelParam) {
  // Clean URL
  window.history.replaceState({}, '', window.location.pathname);
}

if (!fromLogin && !levelParam) {
  // Direct access to app.html (not from LP) - hide loading immediately
  // Only show loading for LP → app transitions
  hideAppLoadingOverlay();
}

// Show onboarding for new users
setTimeout(() => {
  showOnboarding();
}, 100);

// S3: Swipe to switch tabs
(function initSwipeNavigation() {
  const screens = ['drill', 'mock', 'ai'];
  let touchStartX = 0;
  let touchStartY = 0;
  let touchEndX = 0;
  let touchEndY = 0;
  const minSwipeDistance = 80;
  const maxVerticalDistance = 100;
  
  function getCurrentScreenIndex() {
    const activeNav = document.querySelector('.nav-btn.active');
    if (!activeNav) return 0;
    return screens.indexOf(activeNav.dataset.screen);
  }
  
  function handleSwipe() {
    const deltaX = touchEndX - touchStartX;
    const deltaY = Math.abs(touchEndY - touchStartY);
    
    // Ignore if vertical scroll or too short
    if (deltaY > maxVerticalDistance || Math.abs(deltaX) < minSwipeDistance) return;
    
    const currentIndex = getCurrentScreenIndex();
    
    if (deltaX < 0 && currentIndex < screens.length - 1) {
      // Swipe left -> next tab
      const nextScreen = screens[currentIndex + 1];
      if (nextScreen === 'ai' && !canUseAITutor()) {
        showUpgradeModal('ai', 'Premium');
        return;
      }
      showScreen(nextScreen);
      updateNavButtons(nextScreen);
    } else if (deltaX > 0 && currentIndex > 0) {
      // Swipe right -> previous tab
      showScreen(screens[currentIndex - 1]);
      updateNavButtons(screens[currentIndex - 1]);
    }
  }
  
  function updateNavButtons(screenId) {
    document.querySelectorAll('.nav-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.screen === screenId);
    });
  }
  
  // Add touch listeners to main container
  document.body.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
    touchStartY = e.changedTouches[0].screenY;
  }, { passive: true });
  
  document.body.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    touchEndY = e.changedTouches[0].screenY;
    
    // Only handle swipe on main screens (not quiz, settings, etc.)
    const activeScreen = document.querySelector('.screen.active');
    if (activeScreen && ['screen-drill', 'screen-mock', 'screen-ai'].includes(activeScreen.id)) {
      handleSwipe();
    }
  }, { passive: true });
})();

// Initialize Drill screen (main screen)
updateDrillScreen();

// Preload default level data
loadDrillData(state.level).then(() => {
  console.log('Initial data loaded for ' + state.level);
  updateDrillScreen();
});

// Sync level buttons with saved state
document.querySelectorAll('.level-select-btn').forEach(btn => {
  btn.classList.toggle('active', btn.dataset.level === state.level);
});

// Set initial level theme
document.body.setAttribute('data-theme', state.level || 'N5');

// ===== AI Coach (Adaptive Learning) =====
const AI_COACH_CACHE_KEY = 'fujisan_ai_coach_';
const AI_COACH_CACHE_DURATION = 24 * 60 * 60 * 1000; // 24 hours
const MOCK_RESULTS_KEY = 'fujisan_mock_results_';

// Save mock test result for AI Coach analysis
function saveMockResultForCoach(sectionScores, overallScore) {
  const key = MOCK_RESULTS_KEY + state.level;
  const results = JSON.parse(localStorage.getItem(key) || '[]');
  
  // Map section names to standardized keys
  const sections = {};
  Object.entries(sectionScores).forEach(([section, data]) => {
    const pct = data.total > 0 ? Math.round((data.correct / data.total) * 100) : null;
    
    if (section === 'moji_goi' || section.includes('語彙') || section.includes('漢字')) {
      sections.vocabKanji = pct;
    } else if (section === 'bunpou_dokkai' || section.includes('文法')) {
      // Split grammar and reading if possible
      sections.grammar = pct;
      sections.reading = pct;
    } else if (section === 'choukai' || section.includes('聴解')) {
      sections.listening = pct;
    }
  });
  
  results.push({
    date: new Date().toISOString(),
    overallScore,
    sections,
    level: state.level
  });
  
  // Keep last 10 results
  if (results.length > 10) {
    results.splice(0, results.length - 10);
  }
  
  localStorage.setItem(key, JSON.stringify(results));
}

// ===== Pass Probability Calculator =====
function calculatePassProbability() {
  const progressKey = PROGRESS_KEY_PREFIX + state.level;
  const progress = JSON.parse(localStorage.getItem(progressKey) || '{}');
  const mockResultsKey = MOCK_RESULTS_KEY + state.level;
  const mockResults = JSON.parse(localStorage.getItem(mockResultsKey) || '[]');
  
  // Not enough data
  if ((progress.totalAnswers || 0) < 20 && mockResults.length === 0) {
    return null;
  }
  
  // JLPT passing criteria: ~60% overall, with sectional minimums (~33%)
  const passingThreshold = 60;
  const sectionalMinimum = 33;
  
  // Calculate section scores from drill data
  const categoryStats = progress.byCategory || {};
  const skillStats = progress.bySkill || {};
  
  // Map to JLPT sections
  // 語彙・漢字 (Vocabulary) = vocab + kanji categories
  // 文法 (Grammar) = grammar category  
  // 読解 (Reading) = reading + meaning skills
  // 聴解 (Listening) = listening skill
  
  const vocabData = categoryStats.vocab || { total: 0, correct: 0 };
  const kanjiData = categoryStats.kanji || { total: 0, correct: 0 };
  const grammarData = categoryStats.grammar || { total: 0, correct: 0 };
  
  const listeningData = skillStats.listening || { total: 0, correct: 0 };
  const readingData = skillStats.reading || { total: 0, correct: 0 };
  const meaningData = skillStats.meaning || { total: 0, correct: 0 };
  
  // Calculate section accuracies
  const vocabKanjiTotal = vocabData.total + kanjiData.total;
  const vocabKanjiCorrect = vocabData.correct + kanjiData.correct;
  const vocabKanjiPct = vocabKanjiTotal > 10 ? Math.round(vocabKanjiCorrect / vocabKanjiTotal * 100) : null;
  
  const grammarTotal = grammarData.total;
  const grammarPct = grammarTotal > 10 ? Math.round(grammarData.correct / grammarTotal * 100) : null;
  
  const readingTotal = readingData.total + meaningData.total;
  const readingCorrect = readingData.correct + meaningData.correct;
  const readingPct = readingTotal > 10 ? Math.round(readingCorrect / readingTotal * 100) : null;
  
  const listeningTotal = listeningData.total;
  const listeningPct = listeningTotal > 10 ? Math.round(listeningData.correct / listeningTotal * 100) : null;
  
  // Use mock test results if available (more reliable)
  let sections = {
    vocabKanji: { pct: vocabKanjiPct, source: 'drill' },
    grammar: { pct: grammarPct, source: 'drill' },
    reading: { pct: readingPct, source: 'drill' },
    listening: { pct: listeningPct, source: 'drill' }
  };
  
  // Override with latest mock test results if available
  if (mockResults.length > 0) {
    const latestMock = mockResults[mockResults.length - 1];
    if (latestMock.sections) {
      if (latestMock.sections.vocabKanji != null) {
        sections.vocabKanji = { pct: latestMock.sections.vocabKanji, source: 'mock' };
      }
      if (latestMock.sections.grammar != null) {
        sections.grammar = { pct: latestMock.sections.grammar, source: 'mock' };
      }
      if (latestMock.sections.reading != null) {
        sections.reading = { pct: latestMock.sections.reading, source: 'mock' };
      }
      if (latestMock.sections.listening != null) {
        sections.listening = { pct: latestMock.sections.listening, source: 'mock' };
      }
    }
  }
  
  // Calculate overall probability
  const validSections = Object.values(sections).filter(s => s.pct !== null);
  if (validSections.length === 0) return null;
  
  const avgScore = validSections.reduce((sum, s) => sum + s.pct, 0) / validSections.length;
  
  // Check sectional minimums
  const failingSections = validSections.filter(s => s.pct < sectionalMinimum);
  
  // Calculate pass probability
  // Above 70% = high confidence (80-95%)
  // 60-70% = moderate (50-80%)
  // 50-60% = low (20-50%)
  // Below 50% = very low (5-20%)
  let probability;
  if (avgScore >= 80) probability = 95;
  else if (avgScore >= 70) probability = 80 + (avgScore - 70);
  else if (avgScore >= 60) probability = 50 + (avgScore - 60) * 3;
  else if (avgScore >= 50) probability = 20 + (avgScore - 50) * 3;
  else probability = Math.max(5, avgScore / 2);
  
  // Penalty for failing sections
  if (failingSections.length > 0) {
    probability = Math.max(5, probability - failingSections.length * 15);
  }
  
  probability = Math.round(probability);
  
  // Find weakest section
  let weakest = null;
  let weakestPct = 100;
  Object.entries(sections).forEach(([name, data]) => {
    if (data.pct !== null && data.pct < weakestPct) {
      weakestPct = data.pct;
      weakest = name;
    }
  });
  
  return {
    probability,
    avgScore: Math.round(avgScore),
    sections,
    weakest,
    weakestPct,
    passingThreshold,
    recommendation: getPassRecommendation(probability, weakest, weakestPct)
  };
}

function getPassRecommendation(probability, weakest, weakestPct) {
  const prefs = JSON.parse(localStorage.getItem('fujisan_coach_prefs') || '{}');
  const userName = prefs.userName || '';
  
  const sectionNames = {
    vocabKanji: getText('pass_section_vocab') || 'Vocabulary',
    grammar: getText('pass_section_grammar') || 'Grammar',
    reading: getText('pass_section_reading') || 'Reading',
    listening: getText('pass_section_listening') || 'Listening'
  };
  
  if (probability >= 80) {
    return userName ? `${userName}, you're on track! Keep it up.` : "You're on track! Keep it up.";
  } else if (probability >= 60) {
    if (weakest) {
      return `Focus on ${sectionNames[weakest]} (${weakestPct}%) to boost your score.`;
    }
    return "You're close! A bit more practice will help.";
  } else if (probability >= 40) {
    if (weakest) {
      return `${sectionNames[weakest]} needs work (${weakestPct}%). Let's strengthen it!`;
    }
    return "More practice needed. Focus on weak areas.";
  } else {
    return "Keep practicing daily. Every question counts!";
  }
}

// ===== Study Habit Tracker =====
function updateHabitTracker() {
  const tracker = document.getElementById('habit-tracker');
  const prefs = JSON.parse(localStorage.getItem('fujisan_coach_prefs') || '{}');
  
  // Only show if user has completed onboarding
  if (!prefs.userName) {
    if (tracker) tracker.style.display = 'none';
    return;
  }
  
  if (tracker) tracker.style.display = 'block';
  
  // Get study history
  const progressKey = PROGRESS_KEY_PREFIX + state.level;
  const progress = JSON.parse(localStorage.getItem(progressKey) || '{}');
  const studyHistory = progress.studyHistory || [];
  
  // Build week data (last 7 days)
  const weekData = [];
  const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const today = new Date();
  
  for (let i = 6; i >= 0; i--) {
    const date = new Date(today);
    date.setDate(date.getDate() - i);
    const dateStr = date.toISOString().split('T')[0];
    const dayData = studyHistory.find(h => h.date === dateStr);
    
    weekData.push({
      day: dayNames[date.getDay()],
      date: dateStr,
      minutes: dayData ? Math.round(dayData.answers * 0.5) : 0, // Estimate ~30 sec per answer
      isToday: i === 0
    });
  }
  
  // Calculate max for scaling
  const maxMinutes = Math.max(30, ...weekData.map(d => d.minutes));
  
  // Update greeting with name
  const greetingEl = document.getElementById('habit-greeting');
  if (greetingEl) {
    const hour = new Date().getHours();
    let greeting = getText('habit_greeting_morning') || 'Good morning';
    if (hour >= 12 && hour < 17) greeting = getText('habit_greeting_afternoon') || 'Good afternoon';
    else if (hour >= 17) greeting = getText('habit_greeting_evening') || 'Good evening';
    greetingEl.textContent = `${greeting}, ${prefs.userName}!`;
  }
  
  // Render week bars
  const weekEl = document.getElementById('habit-week');
  if (weekEl) {
    weekEl.innerHTML = weekData.map(d => `
      <div class="habit-day ${d.isToday ? 'today' : ''}">
        <div class="habit-day-label">${d.day}</div>
        <div class="habit-day-bar">
          <div class="habit-day-fill" style="height: ${Math.min(100, (d.minutes / maxMinutes) * 100)}%"></div>
        </div>
        <div class="habit-day-mins">${d.minutes > 0 ? d.minutes + 'm' : ''}</div>
      </div>
    `).join('');
  }
  
  // Update stats
  const streak = progress.streak || 0;
  const todayMinutes = weekData[6].minutes;
  
  const streakEl = document.getElementById('habit-streak');
  if (streakEl) {
    streakEl.innerHTML = `
      <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
      <span><strong>${streak}</strong> ${getText('habit_day_streak') || 'day streak'}</span>
    `;
  }
  
  const todayEl = document.getElementById('habit-today');
  if (todayEl) {
    todayEl.innerHTML = `
      <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
      <span><strong>${todayMinutes}</strong> ${getText('habit_min_today') || 'min today'}</span>
    `;
  }
  
  // Show alert if needed
  const alertEl = document.getElementById('habit-alert');
  const alertTextEl = document.getElementById('habit-alert-text');
  if (alertEl && alertTextEl) {
    if (todayMinutes === 0 && streak > 0) {
      alertEl.style.display = 'flex';
      alertTextEl.textContent = `${prefs.userName}, ${getText('habit_dont_break') || "don't break your"} ${streak}${getText('habit_streak_suffix') || '-day streak!'}`;
    } else if (todayMinutes === 0) {
      alertEl.style.display = 'flex';
      alertTextEl.textContent = `${prefs.userName}, ${getText('habit_start_study') || 'start your study session!'}`;
    } else if (todayMinutes < (parseInt(prefs.studyTime) || 30)) {
      alertEl.style.display = 'flex';
      const remaining = (parseInt(prefs.studyTime) || 30) - todayMinutes;
      alertTextEl.textContent = `${remaining} ${getText('habit_more_minutes') || 'more minutes to reach your daily goal!'}`;
    } else {
      alertEl.style.display = 'none';
    }
  }
}

// Display daily coach for returning users (completed onboarding)
function displayDailyCoach(prefs) {
  const card = document.getElementById('ai-coach-card');
  if (!card) return;
  
  card.style.display = 'block';
  
  // Show habit tracker
  updateHabitTracker();
  
  // Show expand button
  const expandEl = document.getElementById('ai-coach-expand');
  if (expandEl) expandEl.style.display = 'block';
  
  // Personalized greeting
  const focusEl = document.getElementById('ai-coach-focus');
  const reasonEl = document.getElementById('ai-coach-reason');
  
  // Check if elements exist
  if (!focusEl || !reasonEl) return;
  
  // Check progress
  const progressKey = PROGRESS_KEY_PREFIX + state.level;
  const progress = JSON.parse(localStorage.getItem(progressKey) || '{}');
  const totalAnswers = progress.totalAnswers || 0;
  
  if (totalAnswers < 10) {
    // Still need more data
    focusEl.textContent = `${prefs.userName}, ${getText('habit_build_foundation') || "let's build your foundation!"}`;
    reasonEl.textContent = `${10 - totalAnswers} ${getText('habit_more_questions') || 'more questions to unlock personalized analysis.'}`;
  } else {
    // Enough data - load AI analysis
    loadAICoach(false);
  }
  
  // Update pass probability and SRS displays
  updatePassProbabilityDisplay();
  updateSRSDisplay();
}

// Update pass probability display
function updatePassProbabilityDisplay() {
  const container = document.getElementById('pass-probability');
  if (!container) return;
  
  const result = calculatePassProbability();
  
  if (!result) {
    container.style.display = 'none';
    return;
  }
  
  container.style.display = 'block';
  
  // Update percentage
  const pctEl = document.getElementById('pass-pct');
  if (pctEl) pctEl.textContent = result.probability + '%';
  
  // Update bar
  const barFill = document.getElementById('pass-bar-fill');
  if (barFill) {
    barFill.style.width = result.probability + '%';
    barFill.className = 'pass-bar-fill ' + (result.probability >= 70 ? 'high' : result.probability >= 50 ? 'medium' : 'low');
  }
  
  // Update sections
  const sectionsEl = document.getElementById('pass-sections');
  if (sectionsEl) {
    const sectionNames = {
      vocabKanji: getText('pass_section_vocab') || 'Vocabulary',
      grammar: getText('pass_section_grammar') || 'Grammar',
      reading: getText('pass_section_reading') || 'Reading',
      listening: getText('pass_section_listening') || 'Listening'
    };
    
    sectionsEl.innerHTML = Object.entries(result.sections)
      .filter(([_, data]) => data.pct !== null)
      .map(([name, data]) => {
        const levelClass = data.pct >= 70 ? 'high' : data.pct >= 50 ? 'medium' : 'low';
        return `
          <div class="pass-section">
            <span class="pass-section-name">${sectionNames[name]}</span>
            <span class="pass-section-pct ${levelClass}">${data.pct}%</span>
          </div>
        `;
      }).join('');
  }
  
  // Update recommendation
  const recEl = document.getElementById('pass-recommendation');
  if (recEl) recEl.textContent = result.recommendation;
}

// ===== SRS (Spaced Repetition System) =====
const SRS_KEY_PREFIX = 'fujisan_srs_';
const SRS_INTERVALS = [1, 3, 7, 14, 30, 90]; // Days

function getSRSData() {
  const key = SRS_KEY_PREFIX + state.level;
  return JSON.parse(localStorage.getItem(key) || '{}');
}

function saveSRSData(data) {
  const key = SRS_KEY_PREFIX + state.level;
  localStorage.setItem(key, JSON.stringify(data));
}

function updateSRSItem(itemId, category, isCorrect) {
  const srsData = getSRSData();
  const now = Date.now();
  const itemKey = `${category}_${itemId}`;
  
  if (!srsData[itemKey]) {
    // New item - only add if wrong
    if (!isCorrect) {
      srsData[itemKey] = {
        itemId,
        category,
        level: 0,
        nextReview: now + SRS_INTERVALS[0] * 24 * 60 * 60 * 1000,
        lastReview: now,
        wrongCount: 1
      };
    }
  } else {
    // Existing item
    if (isCorrect) {
      // Move to next level
      srsData[itemKey].level = Math.min(srsData[itemKey].level + 1, SRS_INTERVALS.length - 1);
      const days = SRS_INTERVALS[srsData[itemKey].level];
      srsData[itemKey].nextReview = now + days * 24 * 60 * 60 * 1000;
    } else {
      // Reset to level 0
      srsData[itemKey].level = 0;
      srsData[itemKey].nextReview = now + SRS_INTERVALS[0] * 24 * 60 * 60 * 1000;
      srsData[itemKey].wrongCount = (srsData[itemKey].wrongCount || 0) + 1;
    }
    srsData[itemKey].lastReview = now;
  }
  
  saveSRSData(srsData);
}

function getDueReviewItems() {
  // Get from localStorage (new system)
  const srsData = getSRSData();
  
  // Also check state.srs (existing system)
  const stateSrs = state.srs || {};
  
  const now = Date.now();
  const today = new Date().toISOString().split('T')[0];
  
  const urgent = []; // Due now
  const soon = [];   // Due within 24 hours
  const later = [];  // Due within 3 days
  
  // Process localStorage SRS data
  Object.entries(srsData).forEach(([key, item]) => {
    if (!item.nextReview) return;
    
    const hoursUntilDue = (item.nextReview - now) / (1000 * 60 * 60);
    
    if (hoursUntilDue <= 0) {
      urgent.push({ ...item, key });
    } else if (hoursUntilDue <= 24) {
      soon.push({ ...item, key });
    } else if (hoursUntilDue <= 72) {
      later.push({ ...item, key });
    }
  });
  
  // Process state.srs data (existing system)
  Object.entries(stateSrs).forEach(([key, item]) => {
    if (!item.nextReview) return;
    
    // nextReview is stored as YYYY-MM-DD string in existing system
    const reviewDate = new Date(item.nextReview);
    const hoursUntilDue = (reviewDate.getTime() - now) / (1000 * 60 * 60);
    
    // Avoid duplicates
    const alreadyAdded = urgent.some(u => u.key === key) || 
                         soon.some(s => s.key === key) || 
                         later.some(l => l.key === key);
    if (alreadyAdded) return;
    
    if (hoursUntilDue <= 0) {
      urgent.push({ ...item, key, source: 'state' });
    } else if (hoursUntilDue <= 24) {
      soon.push({ ...item, key, source: 'state' });
    } else if (hoursUntilDue <= 72) {
      later.push({ ...item, key, source: 'state' });
    }
  });
  
  return { urgent, soon, later, total: urgent.length + soon.length };
}

function updateSRSDisplay() {
  const container = document.getElementById('srs-review-prompt');
  if (!container) return;
  
  const dueItems = getDueReviewItems();
  
  if (dueItems.total === 0) {
    container.style.display = 'none';
    return;
  }
  
  container.style.display = 'block';
  
  // Update count
  const countEl = document.getElementById('srs-count');
  if (countEl) countEl.textContent = dueItems.total;
  
  // Update breakdown
  const breakdownEl = document.getElementById('srs-breakdown');
  if (breakdownEl) {
    breakdownEl.innerHTML = `
      ${dueItems.urgent.length > 0 ? `<div class="srs-level"><span class="srs-dot urgent"></span>${dueItems.urgent.length} ${getText('srs_urgent') || 'urgent'}</div>` : ''}
      ${dueItems.soon.length > 0 ? `<div class="srs-level"><span class="srs-dot soon"></span>${dueItems.soon.length} ${getText('srs_soon') || 'today'}</div>` : ''}
      ${dueItems.later.length > 0 ? `<div class="srs-level"><span class="srs-dot later"></span>${dueItems.later.length} ${getText('srs_later') || 'this week'}</div>` : ''}
    `;
  }
}

function startSRSReview() {
  const dueItems = getDueReviewItems();
  const reviewItems = [...dueItems.urgent, ...dueItems.soon];
  
  if (reviewItems.length === 0) {
    alert(getText('srs_no_items') || 'No items due for review!');
    return;
  }
  
  // Store review session
  window.srsReviewSession = reviewItems.slice(0, 20); // Max 20 items per session
  window.srsReviewIndex = 0;
  
  // TODO: Implement SRS review mode
  // For now, start a regular review with these items
  alert(`Starting review of ${window.srsReviewSession.length} items`);
}

// Record detailed progress for AI Coach analysis
function recordProgressForCoach(data) {
  const key = PROGRESS_KEY_PREFIX + data.level;
  const progress = JSON.parse(localStorage.getItem(key) || JSON.stringify({
    totalAnswers: 0,
    correctAnswers: 0,
    byCategory: {},
    bySkill: {},
    byUnit: {},
    wrongItems: [],
    lastStudyDate: null,
    studyDays: 0,
    studyHistory: []
  }));
  
  // Update totals
  progress.totalAnswers++;
  if (data.correct) progress.correctAnswers++;
  
  // Update by category
  if (!progress.byCategory[data.category]) {
    progress.byCategory[data.category] = { total: 0, correct: 0 };
  }
  progress.byCategory[data.category].total++;
  if (data.correct) progress.byCategory[data.category].correct++;
  
  // Update by skill
  if (!progress.bySkill[data.skill]) {
    progress.bySkill[data.skill] = { total: 0, correct: 0 };
  }
  progress.bySkill[data.skill].total++;
  if (data.correct) progress.bySkill[data.skill].correct++;
  
  // Update by unit
  const unitKey = String(data.unit);
  if (!progress.byUnit[unitKey]) {
    progress.byUnit[unitKey] = { total: 0, correct: 0, completed: false };
  }
  progress.byUnit[unitKey].total++;
  if (data.correct) progress.byUnit[unitKey].correct++;
  // Mark completed if enough questions answered
  if (progress.byUnit[unitKey].total >= 20) {
    progress.byUnit[unitKey].completed = true;
  }
  
  // Track wrong items (keep last 50)
  if (!data.correct && data.itemWord) {
    const wrongEntry = {
      id: data.itemId,
      word: data.itemWord,
      category: data.category,
      skill: data.skill,
      unit: data.unit,
      timestamp: Date.now()
    };
    progress.wrongItems = progress.wrongItems.filter(w => w.id !== data.itemId);
    progress.wrongItems.push(wrongEntry);
    if (progress.wrongItems.length > 50) {
      progress.wrongItems = progress.wrongItems.slice(-50);
    }
  }
  
  // Track study days
  const today = new Date().toISOString().split('T')[0];
  if (progress.lastStudyDate !== today) {
    progress.studyDays++;
    progress.lastStudyDate = today;
  }
  
  // Study history (last 30 days)
  const historyEntry = progress.studyHistory.find(h => h.date === today);
  if (historyEntry) {
    historyEntry.answers++;
    if (data.correct) historyEntry.correct++;
  } else {
    progress.studyHistory.push({ date: today, answers: 1, correct: data.correct ? 1 : 0 });
  }
  if (progress.studyHistory.length > 30) {
    progress.studyHistory = progress.studyHistory.slice(-30);
  }
  
  localStorage.setItem(key, JSON.stringify(progress));
}

async function loadAICoach(forceRefresh = false) {
  const card = document.getElementById('ai-coach-card');
  if (!card) return;
  
  const cacheKey = AI_COACH_CACHE_KEY + state.level;
  const cached = localStorage.getItem(cacheKey);
  
  // Check if onboarding is completed
  const coachPrefs = JSON.parse(localStorage.getItem('fujisan_coach_prefs') || '{}');
  const onboardingComplete = coachPrefs.userName && coachPrefs.targetLevel;
  
  // Collect learner data first
  const learnerData = collectLearnerData();
  
  // If onboarding not complete, show onboarding regardless of existing data
  if (!onboardingComplete) {
    card.style.display = 'block';
    displayWelcomeCoach(0); // Force onboarding flow
    return;
  }
  
  // Onboarding complete but not enough progress data yet
  if (learnerData.totalAnswers < 10) {
    card.style.display = 'block';
    displayDailyCoach(coachPrefs);
    return;
  }
  
  // Check cache
  if (!forceRefresh && cached) {
    try {
      const { data, timestamp } = JSON.parse(cached);
      if (Date.now() - timestamp < AI_COACH_CACHE_DURATION) {
        displayAICoach(data);
        return;
      }
    } catch (e) {}
  }
  
  card.style.display = 'block';
  document.getElementById('ai-coach-focus').textContent = getText('ai_coach_loading') || 'Analyzing your progress...';
  document.getElementById('ai-coach-reason').textContent = '';
  
  try {
    const response = await fetch('/.netlify/functions/ai-learning-coach', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        learnerData,
        level: state.level,
        lang: state.lang
      })
    });
    
    if (!response.ok) throw new Error('API error');
    
    const { analysis } = await response.json();
    
    // Cache the result
    localStorage.setItem(cacheKey, JSON.stringify({
      data: analysis,
      timestamp: Date.now()
    }));
    
    displayAICoach(analysis);
    
  } catch (error) {
    console.error('AI Coach error:', error);
    // Show fallback
    displayAICoach({
      weeklyFocus: getText('ai_coach_fallback_focus') || 'Keep up your daily practice!',
      focusReason: getText('ai_coach_fallback_reason') || 'Consistency is the key to mastering Japanese.',
      skillBalance: { receptive: 50, productive: 50, insight: '' },
      recommendedUnits: [],
      reviewUnits: [],
      encouragement: getText('ai_coach_fallback_encourage') || "You're making great progress!"
    });
  }
}

function displayWelcomeCoach(answeredCount) {
  const card = document.getElementById('ai-coach-card');
  if (!card) return;
  
  card.style.display = 'block';
  
  // Hide expand button for welcome state
  const expandEl = document.getElementById('ai-coach-expand');
  if (expandEl) expandEl.style.display = 'none';
  
  // Hide pass probability and SRS during onboarding
  const passProbEl = document.getElementById('pass-probability');
  const srsEl = document.getElementById('srs-review-prompt');
  if (passProbEl) passProbEl.style.display = 'none';
  if (srsEl) srsEl.style.display = 'none';
  
  // Hide habit tracker during onboarding
  const habitTracker = document.getElementById('habit-tracker');
  if (habitTracker) habitTracker.style.display = 'none';
  
  const detailsEl = document.getElementById('ai-coach-details');
  const focusEl = document.getElementById('ai-coach-focus');
  const reasonEl = document.getElementById('ai-coach-reason');
  
  // Show interactive onboarding questionnaire
  if (focusEl) focusEl.textContent = getText('ai_coach_intro_title') || "I'm your AI Study Coach";
  if (reasonEl) reasonEl.textContent = getText('ai_coach_intro_desc') || "I'll create a personalized roadmap to JLPT success. Let's get started!";
  
  if (detailsEl) {
    detailsEl.style.display = 'block';
    detailsEl.innerHTML = `
      <div class="ai-coach-onboarding">
        <div class="onboarding-question" id="oq-name">
          <label>${getText('ai_coach_q_name') || "What's your name?"}</label>
          <input type="text" id="coach-user-name" class="coach-input" placeholder="${getText('ai_coach_name_placeholder') || 'Enter your name'}" onchange="updateCoachPlan()" maxlength="20">
        </div>
        <div class="onboarding-question" id="oq-target-level">
          <label>${getText('ai_coach_q_target') || 'What JLPT level do you want to pass?'}</label>
          <div class="target-level-btns">
            <button class="target-level-btn" data-level="N5" onclick="selectTargetLevel('N5')">N5</button>
            <button class="target-level-btn" data-level="N4" onclick="selectTargetLevel('N4')">N4</button>
            <button class="target-level-btn" data-level="N3" onclick="selectTargetLevel('N3')">N3</button>
            <button class="target-level-btn" data-level="N2" onclick="selectTargetLevel('N2')">N2</button>
            <button class="target-level-btn" data-level="N1" onclick="selectTargetLevel('N1')">N1</button>
          </div>
        </div>
        <div class="onboarding-question" id="oq-exam-date">
          <label>${getText('ai_coach_q_exam') || 'When do you plan to take the JLPT?'}</label>
          <select id="coach-exam-date" onchange="updateCoachPlan()">
            <option value="">${getText('ai_coach_select') || 'Select...'}</option>
            <option value="2025-07">${getText('ai_coach_july') || 'July 2025'}</option>
            <option value="2025-12">${getText('ai_coach_december') || 'December 2025'}</option>
            <option value="2026-07">${getText('ai_coach_july_next') || 'July 2026'}</option>
            <option value="undecided">${getText('ai_coach_undecided') || 'Not decided yet'}</option>
          </select>
        </div>
        <div class="onboarding-question" id="oq-current-level">
          <label>${getText('ai_coach_q_level') || "What's your current Japanese level?"}</label>
          <select id="coach-current-level" onchange="updateCoachPlan()">
            <option value="">${getText('ai_coach_select') || 'Select...'}</option>
            <option value="beginner">${getText('ai_coach_level_beginner') || 'Complete beginner'}</option>
            <option value="hiragana">${getText('ai_coach_level_hiragana') || 'Know hiragana/katakana'}</option>
            <option value="n5">${getText('ai_coach_level_n5') || 'N5 level (basic)'}</option>
            <option value="n4">${getText('ai_coach_level_n4') || 'N4 level (elementary)'}</option>
            <option value="n3">${getText('ai_coach_level_n3') || 'N3 level (intermediate)'}</option>
            <option value="n2plus">${getText('ai_coach_level_n2') || 'N2+ level (advanced)'}</option>
          </select>
        </div>
        <div class="onboarding-question" id="oq-study-time">
          <label>${getText('ai_coach_q_time') || 'How much time can you study daily?'}</label>
          <select id="coach-study-time" onchange="updateCoachPlan()">
            <option value="">${getText('ai_coach_select') || 'Select...'}</option>
            <option value="15">${getText('ai_coach_time_15') || '15 minutes'}</option>
            <option value="30">${getText('ai_coach_time_30') || '30 minutes'}</option>
            <option value="60">${getText('ai_coach_time_60') || '1 hour'}</option>
            <option value="90">${getText('ai_coach_time_90') || '1+ hours'}</option>
          </select>
        </div>
        <div id="coach-roadmap" class="coach-roadmap" style="display:none;"></div>
      </div>
    `;
  }
}

function selectTargetLevel(level) {
  // Update button states
  document.querySelectorAll('.target-level-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.level === level);
  });
  // Store selection temporarily
  window.coachTargetLevel = level;
  updateCoachPlan();
}

function updateCoachPlan() {
  const userName = document.getElementById('coach-user-name')?.value?.trim();
  const targetLevel = window.coachTargetLevel;
  const examDate = document.getElementById('coach-exam-date')?.value;
  const currentLevel = document.getElementById('coach-current-level')?.value;
  const studyTime = document.getElementById('coach-study-time')?.value;
  const roadmapEl = document.getElementById('coach-roadmap');
  
  if (!roadmapEl) return;
  
  // Only show roadmap when all questions answered
  if (!userName || !targetLevel || !examDate || !currentLevel || !studyTime) {
    roadmapEl.style.display = 'none';
    return;
  }
  
  // Save preferences
  localStorage.setItem('fujisan_coach_prefs', JSON.stringify({
    userName, targetLevel, examDate, currentLevel, studyTime, savedAt: Date.now()
  }));
  
  // Also update the app's current level to match target
  state.level = targetLevel;
  saveState();
  
  // Update level buttons in UI
  document.querySelectorAll('.level-select-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.level === targetLevel);
  });
  document.body.setAttribute('data-theme', targetLevel);
  
  // Calculate roadmap
  const roadmap = generateRoadmap(examDate, currentLevel, studyTime, targetLevel);
  
  roadmapEl.style.display = 'block';
  roadmapEl.innerHTML = `
    <div class="roadmap-header">
      <svg class="roadmap-icon" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
      <span>${userName}${getText('ai_coach_roadmap_suffix') || "'s Roadmap"}</span>
    </div>
    <div class="roadmap-target">
      <span class="target-badge">${targetLevel}</span>
      <span>${getText('ai_coach_goal') || 'Your Goal'}</span>
    </div>
    <div class="roadmap-summary">${roadmap.summary}</div>
    <div class="roadmap-weekly">
      <div class="weekly-label">${getText('ai_coach_this_week') || "This week's focus:"}</div>
      <div class="weekly-focus">${roadmap.thisWeek}</div>
    </div>
    <div class="roadmap-milestone">
      <svg class="milestone-svg" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>
      <span>${roadmap.milestone}</span>
    </div>
    <button class="btn-start-journey" onclick="startJourneyFromCoach()">
      ${getText('ai_coach_start_btn') || "Let's Begin!"} →
    </button>
  `;
}

function generateRoadmap(examDate, currentLevel, studyTime, targetLevel) {
  // Calculate weeks until exam
  let weeksUntilExam = 26; // Default 6 months
  if (examDate && examDate !== 'undecided') {
    const [year, month] = examDate.split('-');
    const examDateObj = new Date(parseInt(year), parseInt(month) - 1, 1);
    const now = new Date();
    weeksUntilExam = Math.max(4, Math.floor((examDateObj - now) / (7 * 24 * 60 * 60 * 1000)));
  }
  
  // Use target level from parameter
  const level = targetLevel || state.level || 'N5';
  
  // Units per week based on study time
  const unitsPerWeek = {
    '15': 3,
    '30': 5,
    '60': 7,
    '90': 10
  }[studyTime] || 5;
  
  // Level-specific content
  const levelContent = {
    'N5': { vocab: 800, kanji: 100, grammar: 80, units: 40 },
    'N4': { vocab: 1500, kanji: 300, grammar: 200, units: 40 },
    'N3': { vocab: 3750, kanji: 650, grammar: 350, units: 40 },
    'N2': { vocab: 6000, kanji: 1000, grammar: 500, units: 40 },
    'N1': { vocab: 10000, kanji: 2000, grammar: 800, units: 40 }
  }[level] || { vocab: 800, kanji: 100, grammar: 80, units: 40 };
  
  // Calculate if pace is realistic
  const totalUnits = levelContent.units;
  const weeksNeeded = Math.ceil(totalUnits / unitsPerWeek);
  const onTrack = weeksUntilExam >= weeksNeeded;
  
  // Generate summary based on inputs
  let summary, thisWeek, milestone;
  
  if (examDate === 'undecided') {
    summary = getText('ai_coach_roadmap_flex') || `With ${studyTime} minutes daily, you can master ${level} at your own pace. Focus on consistency!`;
    thisWeek = getText('ai_coach_week_basics') || `Start with Units 1-${Math.min(3, unitsPerWeek)}: Build your foundation with basic vocabulary and kanji.`;
    milestone = getText('ai_coach_milestone_first') || `First milestone: Complete 10 units to unlock detailed AI analysis.`;
  } else {
    const monthsLeft = Math.round(weeksUntilExam / 4.3);
    
    if (onTrack) {
      summary = `${weeksUntilExam} weeks until ${level} exam. At ${unitsPerWeek} units/week, you'll cover ${levelContent.vocab}+ words, ${levelContent.kanji} kanji. You're on track!`;
    } else {
      summary = `${weeksUntilExam} weeks until ${level} exam. Consider increasing study time or targeting the next exam date for better preparation.`;
    }
    
    thisWeek = getText('ai_coach_week_start') || `Start with Units 1-${Math.min(3, unitsPerWeek)}: Focus on high-frequency vocabulary first.`;
    milestone = `By week 4: Complete Units 1-${Math.min(unitsPerWeek * 4, totalUnits)} and take your first Mock Test.`;
  }
  
  return { summary, thisWeek, milestone, weeksUntilExam, unitsPerWeek, targetLevel: level };
}

function startJourneyFromCoach() {
  // Hide the details
  const detailsEl = document.getElementById('ai-coach-details');
  if (detailsEl) detailsEl.style.display = 'none';
  
  // Update the main message
  const prefs = JSON.parse(localStorage.getItem('fujisan_coach_prefs') || '{}');
  const userName = prefs.userName || '';
  document.getElementById('ai-coach-focus').textContent = userName ? 
    `${userName}, ${getText('habit_journey_begun') || 'your journey has begun!'}` : 
    (getText('ai_coach_journey_started') || "Your journey has begun!");
  document.getElementById('ai-coach-reason').textContent = getText('ai_coach_journey_desc') || "Complete 10 questions to unlock your detailed weekly analysis.";
  
  // Show habit tracker now that onboarding is complete
  updateHabitTracker();
  
  // Start with Unit 1 Vocab
  selectCategoryAndStart('vocab');
}

// Reset study goals and show onboarding again
function resetStudyGoals() {
  const prefs = JSON.parse(localStorage.getItem('fujisan_coach_prefs') || '{}');
  const currentGoal = prefs.targetLevel ? `${prefs.targetLevel} by ${formatExamDate(prefs.examDate)}` : 'Not set';
  
  if (confirm(getText('settings_reset_goals_confirm') || `Current goal: ${currentGoal}\n\nDo you want to change your study goals? This will show the setup questions again.`)) {
    // Clear coach preferences
    localStorage.removeItem('fujisan_coach_prefs');
    
    // Clear AI coach cache for all levels
    ['N5', 'N4', 'N3', 'N2', 'N1'].forEach(level => {
      localStorage.removeItem(AI_COACH_CACHE_KEY + level);
    });
    
    // Navigate to drill screen and reload coach
    showScreen('drill');
    setTimeout(() => {
      loadAICoach(true);
    }, 100);
  }
}

// Format exam date for display
function formatExamDate(examDate) {
  if (!examDate || examDate === 'undecided') return 'Flexible';
  const [year, month] = examDate.split('-');
  const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  return `${monthNames[parseInt(month) - 1]} ${year}`;
}

// Update current goal display in settings
function updateGoalDisplay() {
  const prefs = JSON.parse(localStorage.getItem('fujisan_coach_prefs') || '{}');
  const displayEl = document.getElementById('currentGoalDisplay');
  if (displayEl && prefs.targetLevel) {
    const examText = formatExamDate(prefs.examDate);
    displayEl.textContent = `${prefs.targetLevel} → ${examText} • ${prefs.studyTime || '?'}min/day`;
  }
}

function collectLearnerData() {
  // Get progress data from new structure
  const progressKey = PROGRESS_KEY_PREFIX + state.level;
  const progress = JSON.parse(localStorage.getItem(progressKey) || '{}');
  
  // Calculate skill breakdown for receptive vs productive
  const skillStats = progress.bySkill || {};
  
  // Receptive = listening + reading, Productive = meaning + writing
  const listeningStats = skillStats.listening || { total: 0, correct: 0 };
  const readingStats = skillStats.reading || { total: 0, correct: 0 };
  const meaningStats = skillStats.meaning || { total: 0, correct: 0 };
  const writingStats = skillStats.writing || { total: 0, correct: 0 };
  
  const receptiveTotal = listeningStats.total + readingStats.total;
  const receptiveCorrect = listeningStats.correct + readingStats.correct;
  const productiveTotal = meaningStats.total + writingStats.total;
  const productiveCorrect = meaningStats.correct + writingStats.correct;
  
  const receptiveAccuracy = receptiveTotal > 0 ? Math.round(receptiveCorrect / receptiveTotal * 100) : 0;
  const productiveAccuracy = productiveTotal > 0 ? Math.round(productiveCorrect / productiveTotal * 100) : 0;
  
  // Calculate category weakness
  const categoryStats = progress.byCategory || {};
  const categoryWeakness = Object.entries(categoryStats)
    .map(([cat, data]) => ({
      category: cat,
      accuracy: data.total > 0 ? Math.round(data.correct / data.total * 100) : 0,
      total: data.total
    }))
    .filter(c => c.total >= 5)
    .sort((a, b) => a.accuracy - b.accuracy);
  
  // Get unit completion status
  const unitProgress = progress.byUnit || {};
  const completedUnits = Object.entries(unitProgress)
    .filter(([u, data]) => data.completed)
    .map(([u]) => parseInt(u));
  const inProgressUnits = Object.entries(unitProgress)
    .filter(([u, data]) => !data.completed && data.total > 0)
    .map(([u, data]) => ({ unit: parseInt(u), progress: data.total, accuracy: data.total > 0 ? Math.round(data.correct / data.total * 100) : 0 }));
  
  // Units needing review (completed but low accuracy)
  const unitsNeedingReview = Object.entries(unitProgress)
    .filter(([u, data]) => data.completed && data.total > 0 && (data.correct / data.total) < 0.7)
    .map(([u]) => parseInt(u));
  
  // Recent wrong items
  const wrongItems = (progress.wrongItems || []).slice(-20);
  
  // Study pattern (last 7 days)
  const studyHistory = progress.studyHistory || [];
  const last7Days = studyHistory.slice(-7);
  const avgDailyAnswers = last7Days.length > 0 
    ? Math.round(last7Days.reduce((sum, d) => sum + d.answers, 0) / last7Days.length)
    : 0;
  
  // Calculate streak
  let streak = 0;
  const today = new Date().toISOString().split('T')[0];
  for (let i = studyHistory.length - 1; i >= 0; i--) {
    const expectedDate = new Date();
    expectedDate.setDate(expectedDate.getDate() - (studyHistory.length - 1 - i));
    const expected = expectedDate.toISOString().split('T')[0];
    if (studyHistory[i].date === expected || studyHistory[i].date === today) {
      streak++;
    } else {
      break;
    }
  }
  
  // Get coach preferences (from onboarding)
  const coachPrefs = JSON.parse(localStorage.getItem('fujisan_coach_prefs') || '{}');
  
  return {
    level: state.level,
    totalAnswers: progress.totalAnswers || 0,
    correctAnswers: progress.correctAnswers || 0,
    accuracy: progress.totalAnswers > 0 ? Math.round((progress.correctAnswers || 0) / progress.totalAnswers * 100) : 0,
    
    // Skill balance
    skillStats: {
      listening: listeningStats,
      reading: readingStats,
      meaning: meaningStats,
      writing: writingStats
    },
    receptiveAccuracy,
    productiveAccuracy,
    
    // Category performance
    categoryStats,
    categoryWeakness,
    
    // Unit progress
    completedUnits,
    inProgressUnits,
    unitsNeedingReview,
    totalUnitsCompleted: completedUnits.length,
    
    // Mistakes for review
    recentWrongItems: wrongItems,
    wrongItemCount: wrongItems.length,
    
    // Study habits
    studyDays: progress.studyDays || 0,
    streak,
    avgDailyAnswers,
    lastStudyDate: progress.lastStudyDate,
    
    // User's goals (from onboarding)
    examDate: coachPrefs.examDate || null,
    dailyStudyTime: coachPrefs.studyTime || null,
    selfReportedLevel: coachPrefs.currentLevel || null
  };
}

function displayAICoach(analysis) {
  const card = document.getElementById('ai-coach-card');
  if (!card) return;
  
  card.style.display = 'block';
  
  // Update habit tracker
  updateHabitTracker();
  
  // Get user name
  const prefs = JSON.parse(localStorage.getItem('fujisan_coach_prefs') || '{}');
  const userName = prefs.userName || '';
  
  // Main focus - personalize with name
  let focus = analysis.weeklyFocus || '';
  let reason = analysis.focusReason || '';
  
  // Add name to focus if not already present
  if (userName && !focus.includes(userName)) {
    focus = `${userName}, ${focus.charAt(0).toLowerCase()}${focus.slice(1)}`;
  }
  
  document.getElementById('ai-coach-focus').textContent = focus;
  document.getElementById('ai-coach-reason').textContent = reason;
  
  // Insight
  const insightEl = document.getElementById('ai-coach-insight');
  if (analysis.skillBalance?.insight) {
    insightEl.textContent = analysis.skillBalance.insight;
    insightEl.style.display = 'block';
  } else {
    insightEl.style.display = 'none';
  }
  
  // Celebrate Win
  const celebrateEl = document.getElementById('ai-coach-celebrate');
  if (celebrateEl && analysis.celebrateWin) {
    celebrateEl.innerHTML = `<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg> ${analysis.celebrateWin}`;
    celebrateEl.style.display = 'flex';
  } else if (celebrateEl) {
    celebrateEl.style.display = 'none';
  }
  
  // Recommended and review units
  const unitsEl = document.getElementById('ai-coach-units');
  unitsEl.innerHTML = '';
  
  const recLabel = getText('ai_coach_recommended') || 'Recommended';
  const revLabel = getText('ai_coach_review') || 'Review';
  
  (analysis.recommendedUnits || []).forEach(unit => {
    const tag = document.createElement('span');
    tag.className = 'ai-coach-unit-tag recommended';
    tag.textContent = `${recLabel}: Unit ${unit}`;
    tag.onclick = () => startUnit(unit);
    tag.style.cursor = 'pointer';
    unitsEl.appendChild(tag);
    
    // Mark on grid
    const unitBtn = document.querySelector(`.unit-btn[data-unit="${unit}"]`);
    if (unitBtn) unitBtn.classList.add('ai-recommended');
  });
  
  (analysis.reviewUnits || []).forEach(unit => {
    const tag = document.createElement('span');
    tag.className = 'ai-coach-unit-tag review';
    tag.textContent = `${revLabel}: Unit ${unit}`;
    tag.onclick = () => startUnit(unit);
    tag.style.cursor = 'pointer';
    unitsEl.appendChild(tag);
    
    // Mark on grid
    const unitBtn = document.querySelector(`.unit-btn[data-unit="${unit}"]`);
    if (unitBtn) unitBtn.classList.add('ai-review');
  });
  
  // Encouragement
  const encourageEl = document.getElementById('ai-coach-encouragement');
  if (analysis.encouragement) {
    encourageEl.textContent = analysis.encouragement;
    encourageEl.style.display = 'block';
  } else {
    encourageEl.style.display = 'none';
  }
  
  // Update pass probability and SRS displays
  updatePassProbabilityDisplay();
  updateSRSDisplay();
}

function toggleAICoachDetails() {
  const details = document.getElementById('ai-coach-details');
  const expand = document.getElementById('ai-coach-expand');
  
  if (details.style.display === 'none') {
    details.style.display = 'block';
    expand.innerHTML = '<span data-i18n="ai_coach_hide">Hide Details</span> ▲';
    expand.classList.add('expanded');
  } else {
    details.style.display = 'none';
    expand.innerHTML = '<span data-i18n="ai_coach_details">View Details</span> ▼';
    expand.classList.remove('expanded');
  }
}

function refreshAICoach() {
  const btn = document.querySelector('.ai-coach-refresh');
  if (btn) {
    btn.classList.add('spinning');
    setTimeout(() => btn.classList.remove('spinning'), 1000);
  }
  
  // Clear cache for current level
  localStorage.removeItem(AI_COACH_CACHE_KEY + state.level);
  
  // Clear unit markers
  document.querySelectorAll('.unit-btn').forEach(btn => {
    btn.classList.remove('ai-recommended', 'ai-review');
  });
  
  loadAICoach(true);
}

// Load AI Coach on dashboard load (after a short delay)
setTimeout(() => {
  if (document.getElementById('screen-drill')?.classList.contains('active')) {
    loadAICoach();
  }
}, 300);

// Reload AI Coach when level changes
const originalSelectLevel = window.selectLevel;
window.selectLevel = function(level) {
  if (originalSelectLevel) originalSelectLevel(level);
  // Clear unit markers
  document.querySelectorAll('.unit-btn').forEach(btn => {
    btn.classList.remove('ai-recommended', 'ai-review');
  });
  setTimeout(() => loadAICoach(), 500);
};

console.log('Fujisan.AI v' + APP_VERSION + ' loaded (lazy loading enabled)');

// ========== DEBUG: Subscription Control ==========
// Usage in console: forceTrial(), endTrial(), checkSubscriptionStatus()
function forceTrial(days = 7) {
  const trialEnd = new Date();
  trialEnd.setDate(trialEnd.getDate() + days);
  state.plan = state.plan || 'standard';
  state.trialEndDate = trialEnd.toISOString();
  state.isTrialing = true;
  state.isCancelled = false;
  state.paymentFailed = false;
  saveState();
  console.log('Trial forced for', days, 'days until:', state.trialEndDate);
  location.reload();
}

function endTrial() {
  state.plan = null;
  state.planExpiry = null;
  state.trialEndDate = null;
  state.isTrialing = false;
  state.isCancelled = false;
  saveState();
  console.log('Trial/Subscription ended.');
  location.reload();
}

function checkSubscriptionStatus() {
  console.log('=== Subscription Status ===');
  console.log('plan:', state.plan);
  console.log('billing:', state.billing);
  console.log('isTrialing:', state.isTrialing);
  console.log('trialEndDate:', state.trialEndDate);
  console.log('planExpiry:', state.planExpiry);
  console.log('isCancelled:', state.isCancelled);
  console.log('paymentFailed:', state.paymentFailed);
  console.log('stripeCustomerId:', state.stripeCustomerId);
  console.log('---');
  console.log('isInTrialPeriod():', isInTrialPeriod());
  console.log('hasValidPlan():', hasValidPlan());
  console.log('hasValidSubscription():', hasValidSubscription());
  console.log('canAccessLevel(N1):', canAccessLevel('N1'));
}

// ==========================================
// FEEDBACK COLLECTION SYSTEM
// ==========================================
const FEEDBACK_STORAGE_KEY = 'fujisan_feedback_last_shown';
const FEEDBACK_INTERVAL_DAYS = 7;
const FEEDBACK_MIN_DAYS_AFTER_SIGNUP = 7;

function shouldShowFeedbackPopup() {
  // Check if user is logged in
  if (!state.userId) return false;
  
  // Don't show during onboarding
  if (!state.onboardingComplete) return false;
  
  // Don't show on Talk screen
  const talkScreen = document.getElementById('screen-talk');
  if (talkScreen && talkScreen.classList.contains('active')) return false;
  
  // Check if at least 7 days since signup
  const signupDate = state.trialStart || state.createdAt;
  if (signupDate) {
    const daysSinceSignup = (Date.now() - new Date(signupDate).getTime()) / (1000 * 60 * 60 * 24);
    if (daysSinceSignup < FEEDBACK_MIN_DAYS_AFTER_SIGNUP) return false;
  } else {
    // No signup date - check freeCampaign signup
    if (state.freeCampaignEnd) {
      // Assume signup was when they joined, check if 7 days passed
      const campaignEnd = new Date(state.freeCampaignEnd);
      const assumedSignup = new Date(campaignEnd.getTime() - 75 * 24 * 60 * 60 * 1000); // ~75 days before end
      const daysSinceSignup = (Date.now() - assumedSignup.getTime()) / (1000 * 60 * 60 * 24);
      if (daysSinceSignup < FEEDBACK_MIN_DAYS_AFTER_SIGNUP) return false;
    }
  }
  
  // Check last shown date (don't show more than once per 7 days)
  const lastShown = localStorage.getItem(FEEDBACK_STORAGE_KEY);
  if (lastShown) {
    const daysSince = (Date.now() - parseInt(lastShown)) / (1000 * 60 * 60 * 24);
    if (daysSince < FEEDBACK_INTERVAL_DAYS) return false;
  }
  
  return true;
}

function showFeedbackPopup() {
  if (!shouldShowFeedbackPopup()) return;
  
  // Create popup HTML
  const popup = document.createElement('div');
  popup.id = 'feedback-popup';
  popup.innerHTML = `
    <div class="feedback-overlay" onclick="closeFeedbackPopup()"></div>
    <div class="feedback-modal">
      <button class="feedback-close" onclick="closeFeedbackPopup()">×</button>
      <div class="feedback-header">
        <div class="feedback-emoji">📝</div>
        <h3>How's your experience?</h3>
        <p>Your feedback helps us improve Fujisan.AI</p>
      </div>
      
      <div class="feedback-stars" id="feedback-stars">
        <span class="star" data-rating="1">★</span>
        <span class="star" data-rating="2">★</span>
        <span class="star" data-rating="3">★</span>
        <span class="star" data-rating="4">★</span>
        <span class="star" data-rating="5">★</span>
      </div>
      <div class="feedback-rating-text" id="feedback-rating-text">Tap to rate</div>
      
      <input type="text" id="feedback-nickname" placeholder="Nickname (optional)" maxlength="30">
      <input type="text" id="feedback-country" placeholder="Country (optional)" maxlength="50">
      <textarea id="feedback-comment" placeholder="Share your thoughts (optional)" maxlength="500" rows="3"></textarea>
      
      <div class="feedback-consent">
        <label>
          <input type="checkbox" id="feedback-consent-check" checked>
          <span>I agree to my feedback being displayed on Fujisan.AI website and promotional materials</span>
        </label>
      </div>
      
      <button class="feedback-submit" onclick="submitFeedback()" id="feedback-submit-btn" disabled>Submit Feedback</button>
      <button class="feedback-skip" onclick="closeFeedbackPopup()">Maybe Later</button>
    </div>
  `;
  
  // Add styles
  const style = document.createElement('style');
  style.textContent = `
    #feedback-popup { position: fixed; top: 0; left: 0; right: 0; bottom: 0; z-index: 10000; display: flex; align-items: center; justify-content: center; }
    .feedback-overlay { position: absolute; top: 0; left: 0; right: 0; bottom: 0; background: rgba(0,0,0,0.6); }
    .feedback-modal { position: relative; background: #fff; border-radius: 20px; padding: 32px; max-width: 400px; width: 90%; text-align: center; animation: feedbackSlideIn 0.3s ease; }
    @keyframes feedbackSlideIn { from { transform: translateY(20px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
    .feedback-close { position: absolute; top: 12px; right: 12px; background: none; border: none; font-size: 24px; cursor: pointer; color: #999; }
    .feedback-header h3 { margin: 0 0 8px; font-size: 20px; }
    .feedback-header p { margin: 0; color: #666; font-size: 14px; }
    .feedback-emoji { font-size: 48px; margin-bottom: 12px; }
    .feedback-stars { font-size: 36px; margin: 20px 0 8px; }
    .feedback-stars .star { color: #ddd; cursor: pointer; transition: color 0.2s, transform 0.2s; }
    .feedback-stars .star:hover { transform: scale(1.2); }
    .feedback-stars .star.active { color: #FFD700; }
    .feedback-rating-text { font-size: 14px; color: #666; margin-bottom: 16px; min-height: 20px; }
    #feedback-nickname, #feedback-country, #feedback-comment { width: 100%; padding: 12px; border: 1px solid #ddd; border-radius: 8px; font-size: 14px; margin-bottom: 12px; box-sizing: border-box; }
    #feedback-comment { resize: none; }
    .feedback-consent { text-align: left; font-size: 12px; color: #666; margin-bottom: 16px; }
    .feedback-consent label { display: flex; align-items: flex-start; gap: 8px; cursor: pointer; }
    .feedback-consent input { margin-top: 2px; }
    .feedback-submit { width: 100%; padding: 14px; background: linear-gradient(135deg, #00C853, #00E676); color: #fff; border: none; border-radius: 10px; font-size: 16px; font-weight: 600; cursor: pointer; margin-bottom: 8px; }
    .feedback-submit:disabled { background: #ccc; cursor: not-allowed; }
    .feedback-skip { background: none; border: none; color: #999; font-size: 14px; cursor: pointer; }
  `;
  document.head.appendChild(style);
  document.body.appendChild(popup);
  
  // Star rating interaction
  let selectedRating = 0;
  const stars = popup.querySelectorAll('.star');
  const ratingText = popup.querySelector('#feedback-rating-text');
  const submitBtn = popup.querySelector('#feedback-submit-btn');
  
  const ratingTexts = {
    1: 'Poor 😞',
    2: 'Fair 😐',
    3: 'Good 🙂',
    4: 'Great 😊',
    5: 'Excellent 🎉'
  };
  
  stars.forEach(star => {
    star.addEventListener('click', () => {
      selectedRating = parseInt(star.dataset.rating);
      stars.forEach((s, i) => {
        s.classList.toggle('active', i < selectedRating);
      });
      ratingText.textContent = ratingTexts[selectedRating];
      submitBtn.disabled = false;
    });
    
    star.addEventListener('mouseenter', () => {
      const hoverRating = parseInt(star.dataset.rating);
      stars.forEach((s, i) => {
        s.style.color = i < hoverRating ? '#FFD700' : '#ddd';
      });
    });
    
    star.addEventListener('mouseleave', () => {
      stars.forEach((s, i) => {
        s.style.color = i < selectedRating ? '#FFD700' : '#ddd';
      });
    });
  });
  
  // Store selected rating for submission
  popup.dataset.rating = selectedRating;
  
  // Mark as shown
  localStorage.setItem(FEEDBACK_STORAGE_KEY, Date.now().toString());
}

function closeFeedbackPopup() {
  const popup = document.getElementById('feedback-popup');
  if (popup) popup.remove();
}

async function submitFeedback() {
  const popup = document.getElementById('feedback-popup');
  const rating = parseInt(popup.querySelector('.star.active:last-of-type')?.dataset.rating || '0');
  const nickname = popup.querySelector('#feedback-nickname').value.trim();
  const country = popup.querySelector('#feedback-country').value.trim();
  const comment = popup.querySelector('#feedback-comment').value.trim();
  const consentToPublish = popup.querySelector('#feedback-consent-check').checked;
  
  if (rating === 0) {
    alert('Please select a rating');
    return;
  }
  
  const feedbackData = {
    userId: state.userId || 'anonymous',
    rating,
    nickname: nickname || null,
    country: country || null,
    comment: comment || null,
    consentToPublish,
    createdAt: new Date().toISOString(),
    userLevel: state.level || null,
    userPlan: state.plan || 'free_campaign'
  };
  
  // Save to Firestore
  try {
    if (firebaseDb) {
      await firebaseDb.collection('feedback').add(feedbackData);
      console.log('Feedback saved to Firestore');
    }
  } catch (err) {
    console.log('Could not save feedback to Firestore:', err.message);
  }
  
  // Also save locally as backup
  const localFeedback = JSON.parse(localStorage.getItem('fujisan_feedback_history') || '[]');
  localFeedback.push(feedbackData);
  localStorage.setItem('fujisan_feedback_history', JSON.stringify(localFeedback));
  
  closeFeedbackPopup();
  
  // Show thank you message
  const thankYou = document.createElement('div');
  thankYou.innerHTML = `
    <div style="position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);background:#fff;padding:32px;border-radius:16px;text-align:center;z-index:10001;box-shadow:0 10px 40px rgba(0,0,0,0.3);">
      <div style="font-size:48px;margin-bottom:12px;">🙏</div>
      <h3 style="margin:0 0 8px;">Thank you!</h3>
      <p style="margin:0;color:#666;">Your feedback helps us improve.</p>
    </div>
    <div style="position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(0,0,0,0.4);z-index:10000;" onclick="this.parentElement.remove()"></div>
  `;
  document.body.appendChild(thankYou);
  setTimeout(() => thankYou.remove(), 2500);
}

// Check and show feedback popup after mock test completion or on app load
function checkFeedbackTrigger() {
  // Delay to not interrupt user flow
  setTimeout(() => {
    if (shouldShowFeedbackPopup()) {
      showFeedbackPopup();
    }
  }, 3000);
}

// ========== TALK (AI CONVERSATION PRACTICE) ==========
const TALK_SCENARIOS = {
  greeting: {
    name: 'Self-intro',
    nameKey: 'talk_greeting',
    prompt: `You are a friendly Japanese conversation partner helping a student practice self-introduction.
Start by introducing yourself briefly in simple Japanese (appropriate for the student's level), then ask the student to introduce themselves.
Guide them through: name, where they're from, hobbies, occupation/studies.
Keep your responses short (1-2 sentences). Use natural, conversational Japanese.`,
    firstMessage: {
      ja: 'こんにちは！私は田中さくらです。東京に住んでいます。あなたの名前は何ですか？',
      en: "Hello! I'm Sakura Tanaka. I live in Tokyo. What's your name?"
    },
    suggestions: [
      { ja: '私は〇〇です', en: "I'm ___" },
      { ja: '〇〇から来ました', en: "I'm from ___" },
      { ja: 'よろしくお願いします', en: 'Nice to meet you' }
    ]
  },
  restaurant: {
    name: 'Restaurant',
    nameKey: 'talk_restaurant',
    prompt: `You are a friendly Japanese waiter/waitress at a casual restaurant.
The student is a customer ordering food. Guide them through a natural restaurant interaction.
Include: greeting, taking order, recommending dishes, confirming order, saying goodbye.
Keep responses short and natural. Use polite です/ます form.`,
    firstMessage: {
      ja: 'いらっしゃいませ！何名様ですか？',
      en: 'Welcome! How many people?'
    },
    suggestions: [
      { ja: '一人です', en: 'Just one' },
      { ja: 'メニューをください', en: 'Menu please' },
      { ja: 'おすすめは何ですか', en: "What's recommended?" }
    ]
  },
  shopping: {
    name: 'Shopping',
    nameKey: 'talk_shopping',
    prompt: `You are a helpful Japanese shop assistant at a clothing/general store.
Help the student practice shopping conversations: asking about items, prices, sizes, colors, trying things on, paying.
Keep responses short and helpful. Use polite です/ます form.`,
    firstMessage: {
      ja: 'いらっしゃいませ！何かお探しですか？',
      en: 'Welcome! Are you looking for something?'
    },
    suggestions: [
      { ja: 'これはいくらですか', en: 'How much is this?' },
      { ja: '他の色はありますか', en: 'Do you have other colors?' },
      { ja: '試着してもいいですか', en: 'Can I try it on?' }
    ]
  },
  directions: {
    name: 'Directions',
    nameKey: 'talk_directions',
    prompt: `You are a helpful local Japanese person on the street.
The student is asking for directions. Help them practice asking for and understanding directions.
Use simple direction words: まっすぐ (straight), 右 (right), 左 (left), 角 (corner), 信号 (traffic light).
Keep explanations simple and clear.`,
    firstMessage: {
      ja: 'はい、どうしましたか？',
      en: 'Yes, how can I help?'
    },
    suggestions: [
      { ja: '駅はどこですか', en: "Where's the station?" },
      { ja: 'コンビニはありますか', en: 'Is there a convenience store?' },
      { ja: 'ここから遠いですか', en: 'Is it far from here?' }
    ]
  },
  travel: {
    name: 'Travel',
    nameKey: 'talk_travel',
    prompt: `You are a helpful Japanese person at an airport, hotel, or train station.
Help the student practice travel-related conversations: checking in, asking about trains/buses, hotel requests.
Use polite です/ます form. Include useful travel phrases.`,
    firstMessage: {
      ja: 'いらっしゃいませ。ご予約はございますか？',
      en: 'Welcome. Do you have a reservation?'
    },
    suggestions: [
      { ja: 'チェックインお願いします', en: 'Check-in please' },
      { ja: '〇〇行きの電車は何番線ですか', en: 'Which platform for train to ___?' },
      { ja: 'Wi-Fiはありますか', en: 'Is there Wi-Fi?' }
    ]
  },
  free: {
    name: 'Free Talk',
    nameKey: 'talk_free',
    prompt: `You are a friendly Japanese conversation partner for free conversation practice.
Talk about any topic the student wants: daily life, hobbies, travel, food, culture, etc.
Match your language complexity to their level. Ask follow-up questions to keep the conversation going.
Be encouraging and natural.`,
    firstMessage: {
      ja: '今日は何について話しましょうか？',
      en: 'What shall we talk about today?'
    },
    suggestions: [
      { ja: '週末は何をしましたか', en: 'What did you do this weekend?' },
      { ja: '日本に行ったことがありますか', en: 'Have you been to Japan?' },
      { ja: '趣味は何ですか', en: 'What are your hobbies?' }
    ]
  }
};

const TALK_LEVEL_INSTRUCTIONS = {
  N5: `Use only N5 level Japanese. CRITICAL KANJI RULE: Only use these basic kanji: 一二三四五六七八九十百千万円年月日時分週間今何人男女子学生先名前大小中高新古長短多少早私友父母兄弟姉妹. ALL other kanji must be written in hiragana. Use simple present/past tense, basic particles (は、が、を、に、で).`,
  N4: `Use N4 level Japanese. CRITICAL KANJI RULE: Only use N5+N4 level kanji. Any kanji beyond N4 level must be written in hiragana. Use て-form, たい-form, potential form.`,
  N3: `Use N3 level Japanese. CRITICAL KANJI RULE: Only use N5+N4+N3 level kanji. Any kanji beyond N3 level must be written in hiragana. Use conditional forms, passive/causative.`,
  N2: `Use N2 level Japanese. Use advanced grammar patterns, formal expressions. Most kanji are acceptable but rare ones should have furigana.`,
  N1: `Use native-level Japanese: natural expressions, idioms, nuanced grammar, full kanji usage, colloquialisms when appropriate.`
};

// Talk state
let talkState = {
  currentScenario: null,
  messages: [],
  conversationHistory: [],
  isUnitMode: false,
  unitRestrictions: null,
  cachedContext: null,
  lastContextFetch: null
};

// Talk user profile (persisted in localStorage)
const TALK_PROFILE_KEY = 'fujisan_talk_profile';
let talkProfile = {
  name: null,
  interests: {}, // { "anime": 5, "sports": 2, ... }
  lastTopics: [], // Last 5 conversation topics
  conversationCount: 0,
  lastConversation: null,
  pendingFollowUp: null // "前回の転職の話、どうなりました？"
};

// Load talk profile from localStorage
function loadTalkProfile() {
  try {
    const saved = localStorage.getItem(TALK_PROFILE_KEY);
    if (saved) {
      talkProfile = { ...talkProfile, ...JSON.parse(saved) };
    }
  } catch (e) {
    console.error('Failed to load talk profile:', e);
  }
}

// Save talk profile to localStorage
function saveTalkProfile() {
  try {
    localStorage.setItem(TALK_PROFILE_KEY, JSON.stringify(talkProfile));
  } catch (e) {
    console.error('Failed to save talk profile:', e);
  }
}

// Fetch cached context from server
async function fetchCachedContext() {
  // Cache for 30 minutes client-side
  const now = Date.now();
  if (talkState.cachedContext && talkState.lastContextFetch && (now - talkState.lastContextFetch < 30 * 60 * 1000)) {
    return talkState.cachedContext;
  }
  
  try {
    const lang = state.lang || 'en';
    // Use scheduled-context endpoint which has its own caching
    const response = await fetch('/.netlify/functions/scheduled-context');
    const data = await response.json();
    
    if (data.contexts && data.contexts[lang]) {
      talkState.cachedContext = data.contexts[lang];
      talkState.lastContextFetch = now;
      return data.contexts[lang];
    } else if (data.contexts && data.contexts['ja']) {
      // Fallback to Japanese context
      talkState.cachedContext = data.contexts['ja'];
      talkState.lastContextFetch = now;
      return data.contexts['ja'];
    }
  } catch (e) {
    console.error('Failed to fetch context:', e);
  }
  return null;
}

// Get time-based greeting
function getTimeBasedGreeting() {
  const hour = new Date().getHours();
  const name = talkProfile.name ? `${talkProfile.name}さん、` : '';
  
  if (hour >= 5 && hour < 10) {
    return { ja: `${name}おはようございます！`, en: `Good morning${talkProfile.name ? ' ' + talkProfile.name : ''}!` };
  } else if (hour >= 10 && hour < 12) {
    return { ja: `${name}こんにちは！`, en: `Hello${talkProfile.name ? ' ' + talkProfile.name : ''}!` };
  } else if (hour >= 12 && hour < 14) {
    return { ja: `${name}こんにちは！お昼ごはんは食べましたか？`, en: `Hello! Have you had lunch yet?` };
  } else if (hour >= 14 && hour < 17) {
    return { ja: `${name}こんにちは！`, en: `Good afternoon${talkProfile.name ? ' ' + talkProfile.name : ''}!` };
  } else if (hour >= 17 && hour < 21) {
    return { ja: `${name}こんばんは！お疲れさまです。`, en: `Good evening! Thanks for your hard work today.` };
  } else {
    return { ja: `${name}こんばんは！遅くまでお疲れさまです。`, en: `Good evening! Working late?` };
  }
}

// Generate opening message based on context and user interests
async function generateOpeningMessage() {
  const hour = new Date().getHours();
  
  // If we don't know the user's name, always ask first
  if (!talkProfile.name) {
    let greeting = '';
    if (hour >= 5 && hour < 12) {
      greeting = 'おはようございます';
    } else if (hour >= 12 && hour < 18) {
      greeting = 'こんにちは';
    } else {
      greeting = 'こんばんは';
    }
    
    if (talkProfile.conversationCount <= 1) {
      return {
        ja: `${greeting}！初めまして。私はさくらです。日本語の練習を手伝いますね！お名前を教えてもらえますか？`,
        en: `Hello! Nice to meet you! I'm Sakura. I'll help you practice Japanese! May I know your name?`
      };
    } else {
      return {
        ja: `${greeting}！さくらです。あ、そういえば、お名前をまだ聞いていませんでしたね。お名前は何ですか？`,
        en: `Hello! It's Sakura. Oh, I realized I haven't asked your name yet. What's your name?`
      };
    }
  }
  
  // Get user name for greeting
  const userName = talkProfile.name;
  
  // Build time-based greeting (at this point, userName is guaranteed to exist)
  let jaGreeting = '';
  let enGreeting = '';
  
  if (hour >= 5 && hour < 12) {
    jaGreeting = `${userName}さん、おはようございます！`;
    enGreeting = `Good morning, ${userName}!`;
  } else if (hour >= 12 && hour < 18) {
    jaGreeting = `${userName}さん、こんにちは！`;
    enGreeting = `Hello, ${userName}!`;
  } else {
    jaGreeting = `${userName}さん、こんばんは！`;
    enGreeting = `Good evening, ${userName}!`;
  }
  
  // If returning user with pending follow-up
  if (talkProfile.pendingFollowUp && talkProfile.conversationCount > 1) {
    return {
      ja: `${jaGreeting} ${talkProfile.pendingFollowUp}`,
      en: enGreeting
    };
  }
  
  // Build topic question
  let topicJa = '';
  let topicEn = '';
  
  // Check user interests for personalized topic
  const topInterest = getTopInterest();
  
  if (topInterest === 'anime') {
    topicJa = '最近、何かアニメを見ていますか？';
    topicEn = 'Have you been watching any anime lately?';
  } else if (topInterest === 'sports') {
    topicJa = '最近、スポーツは見ましたか？';
    topicEn = 'Have you watched any sports lately?';
  } else if (topInterest === 'music') {
    topicJa = '最近、どんな音楽を聴いていますか？';
    topicEn = 'What kind of music have you been listening to?';
  } else if (topInterest === 'food') {
    topicJa = '今日は何を食べましたか？';
    topicEn = 'What did you eat today?';
  } else {
    // Default topics based on time
    if (hour >= 5 && hour < 12) {
      topicJa = '今日は何をする予定ですか？';
      topicEn = 'What are your plans for today?';
    } else if (hour >= 12 && hour < 18) {
      topicJa = '今日はどうですか？';
      topicEn = 'How is your day going?';
    } else {
      topicJa = '今日はどんな一日でしたか？';
      topicEn = 'How was your day?';
    }
  }
  
  return {
    ja: `${jaGreeting} ${topicJa}`,
    en: `${enGreeting} ${topicEn}`
  };
}

// Get user's top interest
function getTopInterest() {
  const interests = talkProfile.interests;
  if (!interests || Object.keys(interests).length === 0) return null;
  
  return Object.entries(interests).sort((a, b) => b[1] - a[1])[0][0];
}

// Update interest score based on conversation
function updateInterestScore(message) {
  const keywords = {
    anime: ['アニメ', 'anime', '漫画', 'manga', 'マンガ', '鬼滅', '進撃', 'ワンピース', 'ナルト'],
    sports: ['サッカー', 'soccer', '野球', 'baseball', 'バスケ', 'スポーツ', 'sport', '試合'],
    music: ['音楽', 'music', '歌', 'song', 'アーティスト', 'バンド', 'コンサート'],
    movies: ['映画', 'movie', 'film', 'ドラマ', 'drama', 'Netflix'],
    food: ['料理', '食べ', 'ご飯', 'レストラン', '美味しい', 'food', 'eat', 'delicious'],
    travel: ['旅行', 'travel', '旅', '観光', '国', 'country'],
    work: ['仕事', 'work', '会社', 'company', '転職', 'キャリア', 'career'],
    study: ['勉強', 'study', '日本語', 'JLPT', '試験', 'exam', '学校'],
    news: ['ニュース', 'news', '政治', 'politics', '経済', 'economy']
  };
  
  const lowerMsg = message.toLowerCase();
  
  for (const [category, words] of Object.entries(keywords)) {
    for (const word of words) {
      if (lowerMsg.includes(word.toLowerCase())) {
        talkProfile.interests[category] = (talkProfile.interests[category] || 0) + 1;
      }
    }
  }
  
  saveTalkProfile();
}

// Detect user emotion from message
function detectEmotion(message) {
  const emotions = {
    tired: ['疲れ', '眠い', 'つかれ', '大変', 'tired', 'sleepy', 'exhausted'],
    happy: ['嬉しい', '楽しい', 'うれしい', 'たのしい', '最高', 'happy', 'great', 'awesome', '！！'],
    sad: ['悲しい', '辛い', 'つらい', 'かなしい', 'sad', 'difficult', '困'],
    excited: ['すごい', 'やばい', 'すげー', 'マジ', 'excited', 'amazing', 'wow'],
    worried: ['心配', '不安', 'しんぱい', 'ふあん', 'worried', 'anxious', 'nervous']
  };
  
  const lowerMsg = message.toLowerCase();
  
  for (const [emotion, words] of Object.entries(emotions)) {
    for (const word of words) {
      if (lowerMsg.includes(word.toLowerCase())) {
        return emotion;
      }
    }
  }
  return null;
}

// Extract potential follow-up topic
function extractFollowUpTopic(message) {
  const followUpPatterns = [
    { pattern: /転職|仕事.*変/, followUp: '転職の話、その後どうなりましたか？' },
    { pattern: /試験|テスト|JLPT/, followUp: '試験の準備は順調ですか？' },
    { pattern: /旅行.*計画|行きたい.*国/, followUp: '旅行の計画、進んでいますか？' },
    { pattern: /引っ越|引越/, followUp: '引っ越しはどうなりましたか？' },
    { pattern: /彼女|彼氏|デート/, followUp: '最近、恋愛の方はどうですか？' }
  ];
  
  for (const { pattern, followUp } of followUpPatterns) {
    if (pattern.test(message)) {
      return followUp;
    }
  }
  return null;
}

// Initialize Talk screen
function initTalkScreen() {
  loadTalkProfile();
  updateTalkUnitCard();
  initTalkInputListeners();
  
  // Update level badge display
  const levelBadge = document.getElementById('talk-level-badge');
  if (levelBadge) {
    levelBadge.textContent = state.level || 'N5';
  }
  
  // Apply placeholder translation
  const talkInput = document.getElementById('talk-input');
  const texts = UI_TEXTS[state.lang || 'en'] || UI_TEXTS['en'];
  if (talkInput && texts.talk_input_placeholder) {
    talkInput.placeholder = texts.talk_input_placeholder;
  }
}

// Update unit-linked card with current progress
function updateTalkUnitCard() {
  const level = state.level;
  const d = DATA[level];
  if (!d) return;
  
  const allItems = [...(d.vocab || []), ...(d.kanji || []), ...(d.grammar || [])];
  const totalUnits = Math.ceil(allItems.length / ITEMS_PER_UNIT);
  
  // Find highest completed unit
  let completedUnits = 0;
  for (let u = 0; u < totalUnits; u++) {
    const unitStart = u * ITEMS_PER_UNIT;
    const unitEnd = Math.min(unitStart + ITEMS_PER_UNIT, allItems.length);
    const unitItems = allItems.slice(unitStart, unitEnd);
    let unitMastered = 0;
    unitItems.forEach(item => {
      const baseKey = `${level}_${item.id}`;
      const allComplete = SKILL_TYPES.every(skill => state.skills && state.skills[`${baseKey}_${skill}`]);
      if (allComplete) unitMastered++;
    });
    if (unitMastered === unitItems.length) completedUnits++;
  }
  
  const unitDescEl = document.getElementById('talk-unit-desc');
  if (unitDescEl) {
    const upToUnit = Math.max(1, completedUnits + 1);
    const template = getText('talk_unit_practice') || 'Practice with Unit 1-{n} vocabulary';
    unitDescEl.textContent = template.replace('{n}', upToUnit);
  }
}

// Start unit-linked conversation
async function startTalkUnit() {
  const level = state.level;
  const d = DATA[level];
  if (!d) return;
  
  // Load data if needed
  if (!d.vocab || d.vocab.length === 0) {
    await loadDrillData(level);
  }
  
  // Calculate restrictions based on completed units
  const allItems = [...(d.vocab || []), ...(d.kanji || []), ...(d.grammar || [])];
  const totalUnits = Math.ceil(allItems.length / ITEMS_PER_UNIT);
  let completedUnits = 0;
  for (let u = 0; u < totalUnits; u++) {
    const unitStart = u * ITEMS_PER_UNIT;
    const unitEnd = Math.min(unitStart + ITEMS_PER_UNIT, allItems.length);
    const unitItems = allItems.slice(unitStart, unitEnd);
    let unitMastered = 0;
    unitItems.forEach(item => {
      const baseKey = `${level}_${item.id}`;
      const allComplete = SKILL_TYPES.every(skill => state.skills && state.skills[`${baseKey}_${skill}`]);
      if (allComplete) unitMastered++;
    });
    if (unitMastered === unitItems.length) completedUnits++;
  }
  
  const upToUnit = Math.max(1, completedUnits + 1);
  const restrictedItems = allItems.slice(0, upToUnit * ITEMS_PER_UNIT);
  
  talkState.isUnitMode = true;
  talkState.unitRestrictions = {
    vocab: restrictedItems.filter(item => item.w).map(v => v.w),
    grammar: restrictedItems.filter(item => item.p).map(g => g.p)
  };
  
  // Start conversation
  talkState.currentScenario = 'unit';
  talkState.messages = [];
  talkState.conversationHistory = [];
  
  showTalkChat(`${level} Unit 1-${upToUnit}`);
  
  // Generate dynamic opening message
  generateOpeningMessage().then(firstMessage => {
    addTalkMessage('ai', firstMessage.ja, firstMessage.en);
    // Increment conversation count
    talkProfile.conversationCount++;
    talkProfile.lastConversation = new Date().toISOString();
    saveTalkProfile();
  });
  
  // Hide suggestions for cleaner UI
  showTalkSuggestions([]);
}

// Start scenario conversation
function startTalkScenario(scenarioId) {
  const scenario = TALK_SCENARIOS[scenarioId];
  if (!scenario) return;
  
  talkState.currentScenario = scenarioId;
  talkState.isUnitMode = false;
  talkState.unitRestrictions = null;
  talkState.messages = [];
  talkState.conversationHistory = [];
  
  showTalkChat(getText(scenario.nameKey) || scenario.name);
  
  // Use scenario's first message (AI speaks first)
  addTalkMessage('ai', scenario.firstMessage.ja, scenario.firstMessage.en);
  talkProfile.conversationCount++;
  talkProfile.lastConversation = new Date().toISOString();
  saveTalkProfile();
  
  // Hide suggestions for cleaner UI
  showTalkSuggestions([]);
}

// Show chat interface
function showTalkChat(title) {
  document.getElementById('talk-welcome').style.display = 'none';
  document.getElementById('talk-chat').style.display = 'flex';
  document.getElementById('talk-chat-title').textContent = title;
  document.getElementById('talk-chat-level').textContent = state.level;
  document.getElementById('talk-messages').innerHTML = '';
  document.getElementById('talk-suggestions').innerHTML = '';
  document.getElementById('talk-input').value = '';
  document.getElementById('talk-send-btn').disabled = true;
}

// Exit chat
function exitTalkChat() {
  document.getElementById('talk-chat').style.display = 'none';
  document.getElementById('talk-welcome').style.display = 'flex';
  talkState.currentScenario = null;
  talkState.messages = [];
  talkState.conversationHistory = [];
}

// Add message to chat
function addTalkMessage(role, ja, en, feedback = null) {
  const message = { role, ja, en };
  talkState.messages.push(message);
  
  const messagesEl = document.getElementById('talk-messages');
  const msgDiv = document.createElement('div');
  msgDiv.className = `talk-message ${role}`;
  
  const userLabel = getText('talk_you') || 'You';
  const sakuraSvg = `<div class="sakura-avatar">
    <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="petalGrad" cx="30%" cy="30%">
          <stop offset="0%" stop-color="#ffd1dc"/>
          <stop offset="100%" stop-color="#ffb7c5"/>
        </radialGradient>
      </defs>
      <!-- Center -->
      <circle class="sakura-center" cx="20" cy="20" r="6" fill="#ffd1dc"/>
      <!-- Petals -->
      <ellipse class="sakura-petal sakura-petal-1" cx="20" cy="8" rx="5" ry="8" fill="url(#petalGrad)"/>
      <ellipse class="sakura-petal sakura-petal-2" cx="31" cy="14" rx="5" ry="8" fill="url(#petalGrad)" transform="rotate(72 31 14)"/>
      <ellipse class="sakura-petal sakura-petal-3" cx="28" cy="28" rx="5" ry="8" fill="url(#petalGrad)" transform="rotate(144 28 28)"/>
      <ellipse class="sakura-petal sakura-petal-4" cx="12" cy="28" rx="5" ry="8" fill="url(#petalGrad)" transform="rotate(216 12 28)"/>
      <ellipse class="sakura-petal sakura-petal-5" cx="9" cy="14" rx="5" ry="8" fill="url(#petalGrad)" transform="rotate(288 9 14)"/>
      <!-- Inner glow -->
      <circle cx="20" cy="20" r="4" fill="#fff5f7" opacity="0.6"/>
    </svg>
  </div>`;
  const avatarContent = role === 'ai' ? sakuraSvg : userLabel;
  
  let bubbleContent = `<div class="talk-bubble-ja">${ja}</div>`;
  if (en) {
    bubbleContent += `<div class="talk-bubble-en">${en}</div>`;
  }
  
  const speakBtn = role === 'ai' ? `
    <button class="talk-speak-btn" onclick="speakTalkMessage('${ja.replace(/'/g, "\\'")}')">
      <svg viewBox="0 0 24 24"><path fill="currentColor" d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/></svg>
    </button>
  ` : '';
  
  msgDiv.innerHTML = `
    <div class="talk-avatar">${avatarContent}</div>
    <div class="talk-bubble">${bubbleContent}</div>
    ${speakBtn}
  `;
  
  messagesEl.appendChild(msgDiv);
  
  // Add feedback if present
  if (feedback && feedback.trim()) {
    const feedbackDiv = document.createElement('div');
    feedbackDiv.className = 'talk-feedback';
    const feedbackLabel = getText('talk_feedback') || 'Feedback';
    feedbackDiv.innerHTML = `
      <div class="talk-feedback-header">
        <svg viewBox="0 0 24 24" width="16" height="16"><path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>
        <span>${feedbackLabel}</span>
      </div>
      <div class="talk-feedback-content">${feedback}</div>
    `;
    messagesEl.appendChild(feedbackDiv);
  }
  
  messagesEl.scrollTop = messagesEl.scrollHeight;
  
  // Auto-play AI messages
  if (role === 'ai' && ja) {
    // Small delay to let the UI update first
    setTimeout(() => {
      speakTalkMessage(ja);
    }, 300);
  }
}

// Show typing indicator
function showTalkTyping() {
  const messagesEl = document.getElementById('talk-messages');
  const typingDiv = document.createElement('div');
  typingDiv.className = 'talk-message ai';
  typingDiv.id = 'talk-typing';
  typingDiv.innerHTML = `
    <div class="talk-avatar">
      <div class="sakura-avatar">
        <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="petalGradTyping" cx="30%" cy="30%">
              <stop offset="0%" stop-color="#ffd1dc"/>
              <stop offset="100%" stop-color="#ffb7c5"/>
            </radialGradient>
          </defs>
          <circle class="sakura-center" cx="20" cy="20" r="6" fill="#ffd1dc"/>
          <ellipse class="sakura-petal sakura-petal-1" cx="20" cy="8" rx="5" ry="8" fill="url(#petalGradTyping)"/>
          <ellipse class="sakura-petal sakura-petal-2" cx="31" cy="14" rx="5" ry="8" fill="url(#petalGradTyping)" transform="rotate(72 31 14)"/>
          <ellipse class="sakura-petal sakura-petal-3" cx="28" cy="28" rx="5" ry="8" fill="url(#petalGradTyping)" transform="rotate(144 28 28)"/>
          <ellipse class="sakura-petal sakura-petal-4" cx="12" cy="28" rx="5" ry="8" fill="url(#petalGradTyping)" transform="rotate(216 12 28)"/>
          <ellipse class="sakura-petal sakura-petal-5" cx="9" cy="14" rx="5" ry="8" fill="url(#petalGradTyping)" transform="rotate(288 9 14)"/>
          <circle cx="20" cy="20" r="4" fill="#fff5f7" opacity="0.6"/>
        </svg>
      </div>
    </div>
    <div class="talk-bubble">
      <div class="talk-typing">
        <div class="talk-typing-dot"></div>
        <div class="talk-typing-dot"></div>
        <div class="talk-typing-dot"></div>
      </div>
    </div>
  `;
  messagesEl.appendChild(typingDiv);
  messagesEl.scrollTop = messagesEl.scrollHeight;
}

// Hide typing indicator
function hideTalkTyping() {
  const typing = document.getElementById('talk-typing');
  if (typing) typing.remove();
}

// Show suggestions
function showTalkSuggestions(suggestions) {
  const container = document.getElementById('talk-suggestions');
  container.innerHTML = suggestions.map(s => `
    <div class="talk-suggestion" onclick="useTalkSuggestion('${s.ja.replace(/'/g, "\\'")}')">
      <span class="jp">${s.ja}</span>
      <span class="en">${s.en}</span>
    </div>
  `).join('');
}

// Use suggestion
function useTalkSuggestion(text) {
  document.getElementById('talk-input').value = text;
  document.getElementById('talk-send-btn').disabled = false;
}

// Send message
async function sendTalkMessage() {
  const input = document.getElementById('talk-input');
  const text = input.value.trim();
  if (!text) return;
  
  // Check if user is providing their name (first conversation)
  if (!talkProfile.name && talkProfile.conversationCount <= 1) {
    const nameMatch = text.match(/(?:私は|僕は|名前は|I'm |I am |My name is |call me )?([\u3040-\u309F\u30A0-\u30FF\u4E00-\u9FFF\w]+)/i);
    if (nameMatch && nameMatch[1] && nameMatch[1].length <= 20) {
      const potentialName = nameMatch[1];
      // Simple validation - not common words
      const commonWords = ['はい', 'いいえ', 'です', 'ます', 'yes', 'no', 'hello'];
      if (!commonWords.includes(potentialName.toLowerCase())) {
        talkProfile.name = potentialName;
        saveTalkProfile();
      }
    }
  }
  
  // Update interest scores
  updateInterestScore(text);
  
  // Extract potential follow-up topic
  const followUp = extractFollowUpTopic(text);
  if (followUp) {
    talkProfile.pendingFollowUp = followUp;
    saveTalkProfile();
  }
  
  // Detect emotion for context
  const emotion = detectEmotion(text);
  
  // Add user message
  addTalkMessage('user', text, '');
  input.value = '';
  document.getElementById('talk-send-btn').disabled = true;
  
  // Show typing
  showTalkTyping();
  
  // Call Gemini with emotion context
  const response = await callTalkGemini(text, emotion);
  
  // Hide typing
  hideTalkTyping();
  
  // Sanitize response - remove markdown formatting
  const sanitizeText = (t) => t ? t.replace(/\*\*/g, '').replace(/\*/g, '').trim() : '';
  const cleanJa = sanitizeText(response.ja);
  const cleanEn = sanitizeText(response.en);
  const cleanFeedback = sanitizeText(response.feedback);
  
  // Add AI response
  addTalkMessage('ai', cleanJa, cleanEn, cleanFeedback);
  
  // Clear pending follow-up if we used it
  if (talkProfile.pendingFollowUp) {
    talkProfile.pendingFollowUp = null;
    saveTalkProfile();
  }
  
  // Update suggestions
  updateTalkSuggestions();
}

// Call Gemini API via Netlify Function
async function callTalkGemini(userMessage, emotion = null) {
  let systemPrompt = '';
  
  // Get user context (time, timezone)
  const now = new Date();
  const userTime = now.toLocaleTimeString('ja-JP', { hour: '2-digit', minute: '2-digit' });
  const userDate = now.toLocaleDateString('ja-JP', { year: 'numeric', month: 'long', day: 'numeric', weekday: 'long' });
  const hour = now.getHours();
  let timeOfDay = 'morning';
  if (hour >= 12 && hour < 17) timeOfDay = 'afternoon';
  else if (hour >= 17 && hour < 21) timeOfDay = 'evening';
  else if (hour >= 21 || hour < 5) timeOfDay = 'night';
  
  // Build user profile context
  let profileContext = '';
  let nameInstruction = '';
  if (talkProfile.name) {
    profileContext += `- User's name: ${talkProfile.name} (address them by name occasionally)\n`;
  } else {
    nameInstruction = `\nIMPORTANT: You don't know the user's name yet. In your first message, naturally ask for their name (e.g., "お名前は何ですか？" or "お名前を教えてください"). Never say "〜さん" without knowing their actual name.\n`;
  }
  const topInterest = getTopInterest();
  if (topInterest) {
    profileContext += `- User's main interest: ${topInterest}\n`;
  }
  
  // Build emotion context
  let emotionContext = '';
  if (emotion) {
    const emotionResponses = {
      tired: 'User seems tired. Show empathy, ask if they are okay.',
      happy: 'User seems happy! Share their excitement, ask what happened.',
      sad: 'User seems sad. Be supportive and gentle, offer to listen.',
      excited: 'User is excited! Match their energy, show enthusiasm.',
      worried: 'User seems worried. Be reassuring and supportive.'
    };
    emotionContext = `\nUSER EMOTION: ${emotionResponses[emotion] || ''}`;
  }
  
  const userContext = `
CURRENT CONTEXT:
- Current time: ${userTime} (${timeOfDay})
- Current date: ${userDate}
${profileContext}${emotionContext}${nameInstruction}`;

  const commonRules = `
CONVERSATION STYLE - BE NATURAL AND FRIENDLY:
1. NEVER use markdown: no **, no *, no quotes
2. Use natural, colloquial Japanese - speak like a real Japanese person
3. Keep responses short (1-2 sentences)
4. Show genuine interest in what the user says
5. React to their emotions appropriately
6. Ask follow-up questions naturally
7. Use the user's name occasionally if known
8. Use appropriate 相槌 (aizuchi) like へー、なるほど、そうなんですね

KEEPING CONVERSATION GOING:
- If the conversation seems to be ending or the topic is exhausted, introduce a new topic
- Suggest current/trending topics: popular anime, movies, music, food, travel, seasonal events
- Example transitions: "そういえば、最近〇〇が話題ですね" or "ところで、〇〇は好きですか？"

CRITICAL - NATURAL JAPANESE:
- Use natural contractions: 書けません (not 書くことができません)
- Avoid overly formal or textbook Japanese
- Sound like a native speaker in casual conversation
- Use common expressions: すごい！いいですね！そうなんだ！

FORBIDDEN:
- **word** or *word* formatting
- Robotic or textbook-style Japanese
- Asking multiple questions at once
- Unnatural grammar like ～ことができません (use ～られません/～れません instead)`;


  if (talkState.isUnitMode && talkState.unitRestrictions) {
    // Unit-linked mode with vocabulary restrictions
    systemPrompt = `You are Sakura (さくら), a warm, friendly Japanese conversation partner. Help JLPT ${state.level} learners practice natural conversation.

VOCABULARY RESTRICTIONS:
Prefer using these words: ${talkState.unitRestrictions.vocab.slice(0, 30).join(', ')}

${TALK_LEVEL_INSTRUCTIONS[state.level]}
${userContext}
${commonRules}

Always respond in JSON format: {"ja": "Japanese response", "en": "English translation"}
ONLY add "feedback" field if there is an actual grammar mistake to correct.`;
  } else {
    const scenario = TALK_SCENARIOS[talkState.currentScenario];
    systemPrompt = `You are Sakura (さくら), a warm, friendly Japanese conversation partner. ${scenario ? scenario.prompt : 'Have a natural conversation to help the user practice Japanese.'}

${TALK_LEVEL_INSTRUCTIONS[state.level]}
${userContext}
${commonRules}

Always respond in JSON format: {"ja": "Japanese response", "en": "English translation"}
ONLY add "feedback" field if there is an actual grammar mistake to correct.`;
  }
  
  // Add user message to state
  const messagesForApi = [...talkState.messages, { role: 'user', ja: userMessage }];
  
  try {
    const response = await fetch('/.netlify/functions/talk-gemini', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        messages: messagesForApi,
        systemPrompt: systemPrompt,
        level: state.level
      })
    });
    
    const data = await response.json();
    
    if (data.error) {
      throw new Error(data.error);
    }
    
    return data;
    
  } catch (error) {
    console.error('Talk API error:', error);
    return {
      ja: 'エラーが発生しました。',
      en: 'An error occurred: ' + error.message,
      error: true
    };
  }
}

// Update suggestions based on context - disabled for cleaner UI
function updateTalkSuggestions() {
  // Hide suggestions for cleaner 1-page UI
  showTalkSuggestions([]);
}

// Speak message (remove furigana in parentheses)
// Japanese TTS with natural voice selection
let cachedJapaneseVoice = null;

function getBestJapaneseVoice() {
  if (cachedJapaneseVoice) return cachedJapaneseVoice;
  
  const voices = speechSynthesis.getVoices();
  if (voices.length === 0) return null;
  
  // Priority order for natural Japanese voices
  const priorityNames = [
    // iOS/macOS - very natural
    'Kyoko', 'Otoya', 'O-Ren', 'Hattori',
    // Google - good quality
    'Google 日本語',
    // Microsoft - decent
    'Microsoft Nanami', 'Microsoft Keita',
    'Haruka', 'Ichiro', 'Sayaka',
    // Android
    'ja-JP-language', 'Japanese'
  ];
  
  // First try priority voices
  for (const name of priorityNames) {
    const voice = voices.find(v => 
      v.name.includes(name) && v.lang.startsWith('ja')
    );
    if (voice) {
      cachedJapaneseVoice = voice;
      console.log('Selected Japanese voice:', voice.name);
      return voice;
    }
  }
  
  // Fallback: any Japanese voice, prefer local over network
  const jaVoices = voices.filter(v => v.lang.startsWith('ja'));
  const localVoice = jaVoices.find(v => v.localService);
  if (localVoice) {
    cachedJapaneseVoice = localVoice;
    return localVoice;
  }
  
  cachedJapaneseVoice = jaVoices[0] || null;
  return cachedJapaneseVoice;
}

function speakTalkMessage(text) {
  if (!('speechSynthesis' in window)) return;
  
  // Cancel any ongoing speech
  speechSynthesis.cancel();
  
  // Remove furigana in parentheses like (てんき) or （てんき）
  let cleanText = text.replace(/[（(][ぁ-んァ-ン]+[）)]/g, '');
  
  // Fix common TTS mispronunciations (replace kanji with hiragana)
  const ttsFixMap = {
    'AIの': 'エーアイの',
    'AIと': 'エーアイと',
    'AIが': 'エーアイが',
    'AIは': 'エーアイは',
    'AIを': 'エーアイを',
    'AIに': 'エーアイに',
    'AI': 'エーアイ',
    '行って': 'いって',
    '行った': 'いった',
    '行く': 'いく',
    '行き': 'いき',
    '行こう': 'いこう',
    '行ける': 'いける',
    '行けない': 'いけない',
    '行きたい': 'いきたい',
    '行きます': 'いきます',
    '行きました': 'いきました',
    '行ってみ': 'いってみ',
    '今日': 'きょう',
    '明日': 'あした',
    '昨日': 'きのう',
    '一人': 'ひとり',
    '二人': 'ふたり',
    '大人': 'おとな',
    '下手': 'へた',
    '上手': 'じょうず',
    '何': 'なに',
    '何か': 'なにか',
    '何も': 'なにも',
    '豚骨': 'とんこつ',
    '醤油': 'しょうゆ',
    '味噌': 'みそ',
    '塩': 'しお',
    '今朝': 'けさ',
    '今年': 'ことし',
    '去年': 'きょねん',
    '来年': 'らいねん',
    '一日': 'いちにち',
    '二日': 'ふつか',
    '七日': 'なのか',
    '八日': 'ようか',
    '九日': 'ここのか',
    '十日': 'とおか',
    '二十日': 'はつか',
    '日本': 'にほん',
    '日本語': 'にほんご',
    '日曜日': 'にちようび'
  };
  
  for (const [kanji, hiragana] of Object.entries(ttsFixMap)) {
    cleanText = cleanText.replace(new RegExp(kanji, 'g'), hiragana);
  }
  
  // Add natural pauses at punctuation
  cleanText = cleanText
    .replace(/。/g, '。 ')  // Pause after period
    .replace(/、/g, '、')   // Short pause after comma
    .replace(/！/g, '！ ')  // Pause after exclamation
    .replace(/？/g, '？ '); // Pause after question
  
  const speak = () => {
    const voice = getBestJapaneseVoice();
    const utterance = new SpeechSynthesisUtterance(cleanText);
    
    utterance.lang = 'ja-JP';
    utterance.rate = 0.85;  // Slightly slower for clarity
    utterance.pitch = 1.0;
    
    if (voice) {
      utterance.voice = voice;
    }
    
    // Handle iOS audio context requirement
    utterance.onstart = () => {
      console.log('TTS started');
    };
    
    utterance.onerror = (e) => {
      console.error('TTS error:', e);
    };
    
    speechSynthesis.speak(utterance);
  };
  
  // Ensure voices are loaded
  if (speechSynthesis.getVoices().length === 0) {
    speechSynthesis.onvoiceschanged = () => {
      cachedJapaneseVoice = null; // Reset cache
      speak();
    };
  } else {
    speak();
  }
}

// Voice input
let talkRecognition = null;
let talkIsRecording = false;

function toggleTalkVoice() {
  const btn = document.getElementById('talk-voice-btn');
  
  if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
    alert('Your browser does not support speech recognition.');
    return;
  }
  
  if (talkIsRecording) {
    talkRecognition.stop();
    btn.classList.remove('recording');
    talkIsRecording = false;
  } else {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    talkRecognition = new SpeechRecognition();
    talkRecognition.lang = 'ja-JP';
    talkRecognition.interimResults = false;
    
    talkRecognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      document.getElementById('talk-input').value = transcript;
      document.getElementById('talk-send-btn').disabled = false;
    };
    
    talkRecognition.onend = () => {
      btn.classList.remove('recording');
      talkIsRecording = false;
    };
    
    talkRecognition.onerror = (event) => {
      console.error('Speech recognition error:', event.error);
      btn.classList.remove('recording');
      talkIsRecording = false;
    };
    
    talkRecognition.start();
    btn.classList.add('recording');
    talkIsRecording = true;
  }
}

// Input handling for Talk
function initTalkInputListeners() {
  const talkInput = document.getElementById('talk-input');
  if (talkInput && !talkInput.dataset.listenerAdded) {
    talkInput.dataset.listenerAdded = 'true';
    talkInput.addEventListener('input', function() {
      document.getElementById('talk-send-btn').disabled = !this.value.trim();
      this.style.height = 'auto';
      this.style.height = Math.min(this.scrollHeight, 120) + 'px';
    });
    
    talkInput.addEventListener('keydown', function(e) {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        sendTalkMessage();
      }
    });
  }
}

// Initialize on DOMContentLoaded or immediately if already loaded
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initTalkInputListeners);
} else {
  initTalkInputListeners();
}
