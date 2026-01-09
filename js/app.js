// ========== CONFIG ==========
const APP_VERSION = '17.17.0';
const STORAGE_KEY = 'fujisan_v1737';

// ========== UI TRANSLATIONS ==========
const UI_TEXTS = {
  en: {
    // Navigation
    nav_drill: 'Drill', nav_mock: 'Mock', nav_ai: 'AI',
    nav_vocab: 'Vocab', nav_kanji: 'Kanji', nav_new_kanji: 'New Kanji', nav_grammar: 'Grammar',
    // Onboarding
    onboarding_welcome: 'Welcome to Fujisan.AI',
    onboarding_welcome_desc: 'Your AI-powered JLPT tutor. Master Japanese with personalized learning.',
    onboarding_goal: "What's your goal?",
    onboarding_goal_desc: 'Select your target JLPT level',
    onboarding_beginner: 'Beginner', onboarding_elementary: 'Elementary',
    onboarding_intermediate: 'Intermediate', onboarding_advanced: 'Advanced', onboarding_expert: 'Expert',
    onboarding_features: '3 Ways to Learn',
    onboarding_drill: 'Drill', onboarding_drill_desc: 'Daily vocabulary, kanji & grammar practice',
    onboarding_mock: 'Mock Test', onboarding_mock_desc: 'Real JLPT format with 20 practice sets',
    onboarding_ai: 'AI Tutor', onboarding_ai_desc: 'Get personalized explanations for mistakes',
    onboarding_ready: "You're all set!",
    onboarding_ready_desc: 'Start with Unit 1 and let AI guide your journey to JLPT success.',
    onboarding_tip: '💡 Pro Tip:', onboarding_skip: 'Skip', onboarding_next: 'Next',
    // Quiz/Drill
    quiz_prompt: 'What does this mean?', quiz_correct: 'Correct', quiz_wrong: 'Wrong', quiz_time: 'Time',
    quiz_review_title: 'Review Your Mistakes', quiz_review_btn: 'Review Mistakes',
    quiz_try_again: 'Try Again', quiz_home: 'Home', quiz_continue: 'Continue', quiz_next_unit: 'Next Unit →',
    // Mock Test
    mock_title: 'Mock Test', mock_mode: 'Mode', mock_full: 'Full', mock_section: 'Section',
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
    trial_start: 'Start 7-Day Free Trial', trial_note: '7-day free trial • Cancel anytime', trial_later: 'Maybe Later',
    // Trial success message
    trial_welcome: '🎉 Welcome! Your 7-day free trial of {plan} ({billing}) plan has started. All features are unlocked!',
    billing_annual: 'Annual', billing_monthly: 'Monthly',
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
    // Common
    upgrade: 'Upgrade', upgrade_premium: 'Upgrade to Premium'
  },
  'zh-TW': {
    nav_drill: '練習', nav_mock: '模擬', nav_ai: 'AI',
    nav_vocab: '單字', nav_kanji: '漢字', nav_new_kanji: '新出漢字', nav_grammar: '文法',
    onboarding_welcome: '歡迎使用 Fujisan.AI',
    onboarding_welcome_desc: '您的AI日語學習夥伴。透過個人化學習掌握日語。',
    onboarding_goal: '您的目標是什麼？',
    onboarding_goal_desc: '選擇您的目標JLPT等級',
    onboarding_beginner: '初學者', onboarding_elementary: '基礎',
    onboarding_intermediate: '中級', onboarding_advanced: '高級', onboarding_expert: '專家',
    onboarding_features: '3種學習方式',
    onboarding_drill: '練習', onboarding_drill_desc: '每日單字、漢字和文法練習',
    onboarding_mock: '模擬測驗', onboarding_mock_desc: '真實JLPT格式，20套練習題',
    onboarding_ai: 'AI導師', onboarding_ai_desc: '針對錯誤獲得個人化解釋',
    onboarding_ready: '準備就緒！',
    onboarding_ready_desc: '從第1單元開始，讓AI引導您邁向JLPT成功。',
    onboarding_tip: '💡 小提示：', onboarding_skip: '跳過', onboarding_next: '下一步',
    quiz_prompt: '這是什麼意思？', quiz_correct: '正確', quiz_wrong: '錯誤', quiz_time: '時間',
    quiz_review_title: '複習錯誤', quiz_review_btn: '複習錯誤',
    quiz_try_again: '再試一次', quiz_home: '首頁', quiz_continue: '繼續', quiz_next_unit: '下一單元 →',
    mock_title: '模擬測驗', mock_mode: '模式', mock_full: '完整', mock_section: '分段',
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
    trial_start: '開始7天免費試用', trial_note: '7天免費試用 • 隨時取消', trial_later: '稍後再說',
    trial_welcome: '🎉 歡迎！您的 {plan}（{billing}）方案 7 天免費試用已開始。所有功能已解鎖！',
    billing_annual: '年付', billing_monthly: '月付',
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
    upgrade: '升級', upgrade_premium: '升級至高級'
  },
  'zh-CN': {
    nav_drill: '练习', nav_mock: '模拟', nav_ai: 'AI',
    nav_vocab: '单词', nav_kanji: '汉字', nav_new_kanji: '新出汉字', nav_grammar: '语法',
    onboarding_welcome: '欢迎使用 Fujisan.AI',
    onboarding_welcome_desc: '您的AI日语学习伙伴。通过个性化学习掌握日语。',
    onboarding_goal: '您的目标是什么？',
    onboarding_goal_desc: '选择您的目标JLPT等级',
    onboarding_beginner: '初学者', onboarding_elementary: '基础',
    onboarding_intermediate: '中级', onboarding_advanced: '高级', onboarding_expert: '专家',
    onboarding_features: '3种学习方式',
    onboarding_drill: '练习', onboarding_drill_desc: '每日单词、汉字和语法练习',
    onboarding_mock: '模拟测验', onboarding_mock_desc: '真实JLPT格式，20套练习题',
    onboarding_ai: 'AI导师', onboarding_ai_desc: '针对错误获得个性化解释',
    onboarding_ready: '准备就绪！',
    onboarding_ready_desc: '从第1单元开始，让AI引导您迈向JLPT成功。',
    onboarding_tip: '💡 小提示：', onboarding_skip: '跳过', onboarding_next: '下一步',
    quiz_prompt: '这是什么意思？', quiz_correct: '正确', quiz_wrong: '错误', quiz_time: '时间',
    quiz_review_title: '复习错误', quiz_review_btn: '复习错误',
    quiz_try_again: '再试一次', quiz_home: '首页', quiz_continue: '继续', quiz_next_unit: '下一单元 →',
    mock_title: '模拟测验', mock_mode: '模式', mock_full: '完整', mock_section: '分段',
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
    trial_start: '开始7天免费试用', trial_note: '7天免费试用 • 随时取消', trial_later: '稍后再说',
    trial_welcome: '🎉 欢迎！您的 {plan}（{billing}）方案 7 天免费试用已开始。所有功能已解锁！',
    billing_annual: '年付', billing_monthly: '月付',
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
    upgrade: '升级', upgrade_premium: '升级至高级'
  },
  ko: {
    nav_drill: '연습', nav_mock: '모의', nav_ai: 'AI',
    nav_vocab: '단어', nav_kanji: '한자', nav_new_kanji: '새 한자', nav_grammar: '문법',
    onboarding_welcome: 'Fujisan.AI에 오신 것을 환영합니다',
    onboarding_welcome_desc: 'AI 기반 JLPT 튜터. 맞춤형 학습으로 일본어를 마스터하세요.',
    onboarding_goal: '목표가 무엇인가요?',
    onboarding_goal_desc: '목표 JLPT 레벨을 선택하세요',
    onboarding_beginner: '초급', onboarding_elementary: '기초',
    onboarding_intermediate: '중급', onboarding_advanced: '고급', onboarding_expert: '전문가',
    onboarding_features: '3가지 학습 방법',
    onboarding_drill: '연습', onboarding_drill_desc: '매일 단어, 한자 및 문법 연습',
    onboarding_mock: '모의 테스트', onboarding_mock_desc: '실제 JLPT 형식, 20세트 연습문제',
    onboarding_ai: 'AI 튜터', onboarding_ai_desc: '실수에 대한 맞춤형 설명 받기',
    onboarding_ready: '준비 완료!',
    onboarding_ready_desc: '1단원부터 시작하고 AI가 JLPT 성공으로 안내해 드립니다.',
    onboarding_tip: '💡 팁:', onboarding_skip: '건너뛰기', onboarding_next: '다음',
    quiz_prompt: '이것은 무슨 뜻인가요?', quiz_correct: '정답', quiz_wrong: '오답', quiz_time: '시간',
    quiz_review_title: '오답 복습', quiz_review_btn: '오답 복습',
    quiz_try_again: '다시 시도', quiz_home: '홈', quiz_continue: '계속', quiz_next_unit: '다음 단원 →',
    mock_title: '모의 테스트', mock_mode: '모드', mock_full: '전체', mock_section: '섹션',
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
    trial_start: '7일 무료 체험 시작', trial_note: '7일 무료 체험 • 언제든 취소', trial_later: '나중에',
    trial_welcome: '🎉 환영합니다! {plan}({billing}) 플랜의 7일 무료 체험이 시작되었습니다. 모든 기능이 잠금 해제되었어요!',
    billing_annual: '연간', billing_monthly: '월간',
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
    upgrade: '업그레이드', upgrade_premium: '프리미엄으로 업그레이드'
  },
  vi: {
    nav_drill: 'Luyện tập', nav_mock: 'Thi thử', nav_ai: 'AI',
    nav_vocab: 'Từ vựng', nav_kanji: 'Kanji', nav_new_kanji: 'Kanji mới', nav_grammar: 'Ngữ pháp',
    onboarding_welcome: 'Chào mừng đến với Fujisan.AI',
    onboarding_welcome_desc: 'Gia sư JLPT AI của bạn. Làm chủ tiếng Nhật với học tập cá nhân hóa.',
    onboarding_goal: 'Mục tiêu của bạn là gì?',
    onboarding_goal_desc: 'Chọn cấp độ JLPT mục tiêu của bạn',
    onboarding_beginner: 'Sơ cấp', onboarding_elementary: 'Cơ bản',
    onboarding_intermediate: 'Trung cấp', onboarding_advanced: 'Cao cấp', onboarding_expert: 'Chuyên gia',
    onboarding_features: '3 Cách học',
    onboarding_drill: 'Luyện tập', onboarding_drill_desc: 'Luyện từ vựng, kanji & ngữ pháp hàng ngày',
    onboarding_mock: 'Thi thử', onboarding_mock_desc: 'Định dạng JLPT thực, 20 bộ đề',
    onboarding_ai: 'Gia sư AI', onboarding_ai_desc: 'Nhận giải thích cá nhân hóa cho các lỗi',
    onboarding_ready: 'Bạn đã sẵn sàng!',
    onboarding_ready_desc: 'Bắt đầu với Bài 1 và để AI hướng dẫn bạn đến thành công JLPT.',
    onboarding_tip: '💡 Mẹo:', onboarding_skip: 'Bỏ qua', onboarding_next: 'Tiếp',
    quiz_prompt: 'Điều này có nghĩa là gì?', quiz_correct: 'Đúng', quiz_wrong: 'Sai', quiz_time: 'Thời gian',
    quiz_review_title: 'Xem lại lỗi sai', quiz_review_btn: 'Xem lại lỗi',
    quiz_try_again: 'Thử lại', quiz_home: 'Trang chủ', quiz_continue: 'Tiếp tục', quiz_next_unit: 'Bài tiếp theo →',
    mock_title: 'Thi thử', mock_mode: 'Chế độ', mock_full: 'Đầy đủ', mock_section: 'Phần',
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
    upgrade: 'Nâng cấp', upgrade_premium: 'Nâng cấp lên Cao cấp'
  }
};

// Get UI text helper
function t(key) {
  const lang = state.lang || 'en';
  return UI_TEXTS[lang]?.[key] || UI_TEXTS['en'][key] || key;
}

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
const STRIPE_CUSTOMER_PORTAL = 'https://billing.stripe.com/p/login/6oE6s81f66Wkgko8ww';

// ========== REFERRAL SYSTEM ==========
const REFERRAL_CODES = ['REF001', 'REF002', 'REF003', 'REF004', 'REF005', 'REF006', 'REF007', 'REF008', 'REF009', 'REF010'];

// Get user's assigned referral code (for now, based on user index or manual assignment)
function getMyReferralCode() {
  // Check if already assigned
  let myCode = localStorage.getItem('fujisan_my_referral_code');
  if (myCode) return myCode;
  
  // For now, assign based on creation order (in production, use Firebase)
  // This is a placeholder - in production, assign from server
  const userIndex = parseInt(localStorage.getItem('fujisan_user_index') || '0');
  if (userIndex < REFERRAL_CODES.length) {
    myCode = REFERRAL_CODES[userIndex];
    localStorage.setItem('fujisan_my_referral_code', myCode);
    return myCode;
  }
  
  // If no more codes, generate a placeholder
  return 'Coming Soon';
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

// Update referral code display in settings
function updateReferralDisplay() {
  const codeEl = document.getElementById('myReferralCode');
  if (codeEl) {
    codeEl.textContent = getMyReferralCode();
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

// MOCK_DATA is defined by mock.js when loaded

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
  if (typeof MOCK_DATA !== 'undefined' && MOCK_DATA[level] && MOCK_DATA[level].sets && Object.keys(MOCK_DATA[level].sets).length > 0) {
    // Verify data integrity
    const firstSet = MOCK_DATA[level].sets['1'] || MOCK_DATA[level].sets[1];
    if (firstSet && firstSet.length > 0 && firstSet[0].options) {
      return true;
    }
    // Data seems corrupted, reload
    console.warn('Mock data appears corrupted, reloading...');
    delete MOCK_DATA[level];
  }
  if (loadingData[`mock_${level}`]) return loadingData[`mock_${level}`];
  
  const lvl = level.toLowerCase();
  loadingData[`mock_${level}`] = (async () => {
    try {
      // Add cache buster to force fresh load
      const cacheBuster = Date.now();
      await loadScript(`data/mock/${lvl}/mock.js?v=${cacheBuster}`);
      
      // Verify data was loaded
      if (typeof MOCK_DATA !== 'undefined' && MOCK_DATA[level] && MOCK_DATA[level].sets) {
        console.log(`Mock data loaded: ${level} (${MOCK_DATA[level].info?.totalSets || 0} sets)`);
        return true;
      }
      return false;
    } catch (e) {
      console.error(`Failed to load mock data for ${level}:`, e);
      return false;
    } finally {
      // Clear loading flag so retry is possible
      delete loadingData[`mock_${level}`];
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
  // Plan System (basic, standard, premium - all with 7-day trial)
  plan: null,
  planExpiry: null,
  isTrialing: false, // True during 7-day trial period
  xp: 0,
  // Pass Report
  passReportSubmitted: false,
  passBonusExpiry: null,
  // PWA
  pwaDismissed: false,
  onboardingComplete: false,
  // SRS (Spaced Repetition System)
  srs: {} // { "N5_vocab_V0001": { interval, ease, nextReview, reviewCount, lastReview }, ... }
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

function showScreen(id) {
  console.log('showScreen called with id:', id);
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  const targetScreen = document.getElementById('screen-' + id);
  console.log('Target screen element:', targetScreen);
  if (targetScreen) {
    targetScreen.classList.add('active');
  } else {
    console.error('Screen not found: screen-' + id);
  }
  document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.toggle('active', btn.dataset.screen === id));
  if (id === 'drill') updateDrillScreen();
  if (id === 'mock') updateMockScreen();
  if (id === 'ai') updateAIScreen();
  if (id === 'settings') updateSettingsUI();
}

function updateAIScreen() {
  // Check if user has premium plan
  const hasPremium = state.plan === 'premium';
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
  updateContinueButton(); // S2: Update continue button
  
  // Update level selector buttons
  document.querySelectorAll('.level-select-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.level === state.level);
  });
}

// S2: Continue from last session
function updateContinueButton() {
  const btn = document.getElementById('continue-btn');
  const textEl = document.getElementById('continue-btn-text');
  if (!btn || !textEl) return;
  
  if (state.lastSession && state.lastSession.level && state.lastSession.unit !== undefined) {
    const { level, unit, category } = state.lastSession;
    const catNames = { vocab: 'Vocab', kanji: 'Kanji', grammar: 'Grammar' };
    const catName = catNames[category] || 'Vocab';
    textEl.textContent = `Continue ${level} Unit ${unit + 1}`;
    btn.style.display = 'flex';
  } else {
    btn.style.display = 'none';
  }
}

function continueLastSession() {
  if (!state.lastSession) return;
  const { level, unit, category } = state.lastSession;
  state.level = level;
  state.category = category || 'vocab';
  saveState();
  updateDrillScreen();
  startUnitDrill(unit);
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
  // Update level badge
  const levelBadge = document.getElementById('mock-level-badge');
  if (levelBadge) levelBadge.textContent = state.level;
  
  // Update level buttons (both old and new selectors)
  document.querySelectorAll('#mock-levels .level-btn, #mock-levels .level-select-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.level === state.level);
  });
  
  // Update question count and time based on level
  const mockConfig = {
    N5: { q: 91, time: 105 },
    N4: { q: 94, time: 115 },
    N3: { q: 103, time: 140 },
    N2: { q: 116, time: 155 },
    N1: { q: 117, time: 170 }
  };
  const config = mockConfig[state.level] || mockConfig.N5;
  const qCountEl = document.getElementById('mock-q-count');
  const timeEl = document.getElementById('mock-time');
  if (qCountEl) qCountEl.textContent = config.q;
  if (timeEl) timeEl.textContent = config.time;
  
  // Update set dropdown with completion status
  updateMockSetDropdown();
  
  // Show recent score if exists
  updateMockRecentScore();
  updateCategoryNames();
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
      const requiredPlan = (level === 'N2' || level === 'N1') ? 'Ultimate' : 'Basic';
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

document.querySelectorAll('.level-btn').forEach(btn => {
  btn.onclick = function() {
    const level = this.dataset.level;
    if (!canAccessLevel(level)) {
      const requiredPlan = (level === 'N2' || level === 'N1') ? 'Ultimate' : 'Basic';
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
  startDrill();
}

function updateDrillColors() {
  // Level colors for UI elements
  const levelColors = { N5: '#34c759', N4: '#007aff', N3: '#af52de', N2: '#1e3a5f', N1: '#ff3b30' };
  const currentColor = levelColors[state.level] || levelColors.N5;
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
    
    const cell = document.createElement('div');
    cell.className = 'unit-cell';
    
    if (unitMastered === unitItems.length) {
      cell.classList.add('complete');
    } else if (unitMastered > 0) {
      cell.classList.add('in-progress');
      cell.textContent = u + 1;
    } else {
      cell.classList.add('available');
      cell.textContent = u + 1;
    }
    
    cell.onclick = () => { showScreen('drill'); startUnitDrill(u); };
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

function recordDrillActivity(correct) {
  const today = new Date().toISOString().split('T')[0];
  const statsKey = `fujisan_stats_${today}`;
  const stats = JSON.parse(localStorage.getItem(statsKey) || '{"quizzes":0,"correct":0,"total":0}');
  
  stats.total++;
  if (correct) stats.correct++;
  stats.quizzes = Math.ceil(stats.total / 10); // Approximate quiz count
  
  localStorage.setItem(statsKey, JSON.stringify(stats));
  updateProgressStats();
}

function selectLevelFromDashboard(level) {
  state.level = level;
  saveState();
  updateDashboard();
  updateDrillCounts();
  
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
    if (el.textContent === 'Study Settings' || el.textContent === '學習設定') el.textContent = texts.settings_study;
    if (el.textContent === 'Data' || el.textContent === '數據') el.textContent = texts.settings_data;
  });
  
  document.querySelectorAll('.setting-title').forEach(el => {
    if (el.textContent === 'Email' || el.textContent === '電子郵件') el.textContent = texts.settings_email;
    if (el.textContent === 'Current Plan' || el.textContent === '目前方案') el.textContent = texts.settings_plan;
    if (el.textContent === 'Questions per Unit') el.textContent = texts.settings_qcount;
    if (el.textContent === 'Sound Effects') el.textContent = texts.settings_sound;
    if (el.textContent === 'Reset Progress') el.textContent = texts.settings_reset;
  });
  
  document.querySelectorAll('.setting-desc').forEach(el => {
    if (el.textContent === 'Items in each session') el.textContent = texts.settings_qcount_desc;
    if (el.textContent === 'Quiz sounds') el.textContent = texts.settings_sound_desc;
    if (el.textContent === 'Clear all learning data') el.textContent = texts.settings_reset_desc;
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
    
    const cell = document.createElement('div');
    cell.className = 'unit-cell';
    
    if (unitMastered === unitItems.length) {
      cell.classList.add('complete');
    } else if (unitMastered > 0) {
      cell.classList.add('in-progress');
      cell.textContent = u + 1;
    } else {
      cell.classList.add('available');
      cell.textContent = u + 1;
    }
    
    // Click to start specific unit
    cell.onclick = () => startUnitDrill(u);
    grid.appendChild(cell);
  }
}

async function startUnitDrill(unitIndex) {
  // Require valid plan or trial
  if (!hasValidPlan() && !isInTrialPeriod()) {
    showSubscriptionRequiredModal();
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
    SKILL_TYPES.forEach((skill, skillIndex) => {
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
  
  document.getElementById('quiz-title').textContent = `Unit ${unitIndex + 1}`;
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

// Update SRS display on dashboard
function updateSrsDisplay() {
  const srsContainer = document.getElementById('srs-stats-container');
  if (!srsContainer) return;
  
  const stats = getSrsStats();
  const totalDue = getTotalSrsDueCount();
  
  if (stats.total === 0 && totalDue === 0) {
    srsContainer.style.display = 'none';
    return;
  }
  
  srsContainer.style.display = 'block';
  
  const lang = state.lang || 'en';
  const labels = {
    en: { due: 'Due Today', learning: 'Learning', mastered: 'Mastered' },
    'zh-TW': { due: '今日複習', learning: '學習中', mastered: '已掌握' },
    'zh-CN': { due: '今日复习', learning: '学习中', mastered: '已掌握' },
    ko: { due: '오늘 복습', learning: '학습 중', mastered: '마스터' },
    vi: { due: 'Hôm nay', learning: 'Đang học', mastered: 'Thành thạo' },
    id: { due: 'Hari ini', learning: 'Sedang belajar', mastered: 'Dikuasai' }
  };
  const l = labels[lang] || labels.en;
  
  srsContainer.innerHTML = `
    <div class="srs-stats">
      <div class="srs-stat ${totalDue > 0 ? 'srs-due' : ''}">
        <span class="srs-stat-value">${totalDue}</span>
        <span class="srs-stat-label">${l.due}</span>
      </div>
      <div class="srs-stat">
        <span class="srs-stat-value">${stats.total - stats.mastered}</span>
        <span class="srs-stat-label">${l.learning}</span>
      </div>
      <div class="srs-stat srs-mastered">
        <span class="srs-stat-value">${stats.mastered}</span>
        <span class="srs-stat-label">${l.mastered}</span>
      </div>
    </div>
  `;
}

// ========== END SRS ==========

async function startDrill() {
  // Require valid plan or trial
  if (!hasValidPlan() && !isInTrialPeriod()) {
    showSubscriptionRequiredModal();
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
  
  // Pick items for this session (22 items = 1 unit)
  const sessionItems = [...unlearnedItems].sort(() => Math.random() - 0.5).slice(0, ITEMS_PER_UNIT);
  
  // Create question queue: each item x 4 skills, then shuffle to avoid consecutive same items
  const questionQueue = [];
  sessionItems.forEach((item, itemIndex) => {
    SKILL_TYPES.forEach((skill, skillIndex) => {
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
  
  document.getElementById('quiz-title').textContent = '✍️ Drill';
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
  
  // Create question queue with shuffle
  const questionQueue = [];
  reviewItems.forEach((item, itemIndex) => {
    SKILL_TYPES.forEach((skill, skillIndex) => {
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

// Start drill from dashboard
function startDrill(type) {
  if (type === 'quiz' || type === 'learn') startDrill();
  else if (type === 'review') startReview();
}

// ========== SOUND EFFECTS ==========
const SFX = {
  newQuestion: null,
  correct: null,
  incorrect: null
};

// Create sound effects using Web Audio API
function initSoundEffects() {
  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;
    
    const ctx = new AudioContext();
    
    // New question sound (soft chime)
    SFX.newQuestion = () => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.frequency.setValueAtTime(880, ctx.currentTime);
      osc.frequency.setValueAtTime(1100, ctx.currentTime + 0.1);
      gain.gain.setValueAtTime(0.1, ctx.currentTime);
      gain.gain.exponentialDecayTo && gain.gain.exponentialDecayTo(0.01, ctx.currentTime + 0.2);
      gain.gain.setValueAtTime(0.1, ctx.currentTime);
      gain.gain.linearRampToValueAtTime(0.01, ctx.currentTime + 0.15);
      osc.start(ctx.currentTime);
      osc.stop(ctx.currentTime + 0.15);
    };
    
    // Correct sound (happy ding)
    SFX.correct = () => {
      const osc1 = ctx.createOscillator();
      const osc2 = ctx.createOscillator();
      const gain = ctx.createGain();
      osc1.connect(gain);
      osc2.connect(gain);
      gain.connect(ctx.destination);
      osc1.frequency.setValueAtTime(523.25, ctx.currentTime); // C5
      osc2.frequency.setValueAtTime(659.25, ctx.currentTime); // E5
      gain.gain.setValueAtTime(0.15, ctx.currentTime);
      gain.gain.linearRampToValueAtTime(0.01, ctx.currentTime + 0.3);
      osc1.start(ctx.currentTime);
      osc2.start(ctx.currentTime);
      osc1.stop(ctx.currentTime + 0.3);
      osc2.stop(ctx.currentTime + 0.3);
    };
    
    // Incorrect sound (soft buzz)
    SFX.incorrect = () => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.frequency.setValueAtTime(200, ctx.currentTime);
      osc.frequency.setValueAtTime(150, ctx.currentTime + 0.1);
      osc.type = 'triangle';
      gain.gain.setValueAtTime(0.1, ctx.currentTime);
      gain.gain.linearRampToValueAtTime(0.01, ctx.currentTime + 0.2);
      osc.start(ctx.currentTime);
      osc.stop(ctx.currentTime + 0.2);
    };
    
    // Typewriter click sound
    SFX.typewriter = () => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      const filter = ctx.createBiquadFilter();
      osc.connect(filter);
      filter.connect(gain);
      gain.connect(ctx.destination);
      filter.type = 'highpass';
      filter.frequency.setValueAtTime(2000, ctx.currentTime);
      osc.type = 'square';
      osc.frequency.setValueAtTime(800, ctx.currentTime);
      osc.frequency.setValueAtTime(400, ctx.currentTime + 0.01);
      gain.gain.setValueAtTime(0.15, ctx.currentTime);
      gain.gain.exponentialDecayTo && gain.gain.exponentialDecayTo(0.001, ctx.currentTime + 0.05);
      gain.gain.linearRampToValueAtTime(0.001, ctx.currentTime + 0.04);
      osc.start(ctx.currentTime);
      osc.stop(ctx.currentTime + 0.05);
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
    promptEl.textContent = 'Listen and select the correct word';
    wordEl.textContent = '🔊';
    readingEl.textContent = 'Tap play to listen';
    audioBtn.style.display = 'block';
    currentWord = item.w || item.k || item.p;
    setTimeout(() => playAudio(), 300);
    
    correct = item.k || item.w || item.p;
    options = [correct];
    pool.filter(i => i.id !== item.id && (i.k || i.w || i.p))
      .sort(() => Math.random() - 0.5)
      .slice(0, 3)
      .forEach(i => options.push(i.k || i.w || i.p));
      
  } else if (skill === 'reading') {
    promptEl.textContent = 'Select the correct reading';
    wordEl.textContent = item.k || item.w || item.p;
    readingEl.textContent = '';
    audioBtn.style.display = 'block';
    currentWord = item.r || item.w;
    
    correct = item.r || item.w;
    options = [correct];
    pool.filter(i => i.id !== item.id && (i.r || i.w))
      .sort(() => Math.random() - 0.5)
      .slice(0, 3)
      .forEach(i => options.push(i.r || i.w));
      
  } else if (skill === 'meaning') {
    promptEl.textContent = 'Select the correct meaning';
    if (item.k) {
      wordEl.textContent = item.k;
      readingEl.textContent = item.r || '';
      currentWord = item.r || item.k;
    } else if (item.p) {
      wordEl.textContent = item.p;
      readingEl.textContent = '';
      currentWord = item.p;
    } else {
      wordEl.textContent = item.w;
      readingEl.textContent = item.r || '';
      currentWord = item.r || item.w;
    }
    audioBtn.style.display = 'block';
    
    correct = item.m[state.lang] || item.m.en;
    options = [correct];
    // Filter to only use items with proper translations (not English fallback when lang != 'en')
    const hasProperTranslation = (i) => {
      if (state.lang === 'en') return true;
      const trans = i.m[state.lang];
      // Check if translation exists and is not just English (contains non-ASCII)
      return trans && /[^\x00-\x7F]/.test(trans);
    };
    pool.filter(i => i.id !== item.id && hasProperTranslation(i))
      .sort(() => Math.random() - 0.5)
      .slice(0, 3)
      .forEach(i => options.push(i.m[state.lang] || i.m.en));
      
  } else if (skill === 'writing') {
    promptEl.textContent = 'Select the correct kanji/word';
    wordEl.textContent = item.r || item.w;
    readingEl.textContent = item.m[state.lang] || item.m.en;
    audioBtn.style.display = 'block';
    currentWord = item.r || item.w;
    
    correct = item.k || item.w || item.p;
    options = [correct];
    pool.filter(i => i.id !== item.id && (i.k || i.w || i.p))
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
    const extra = pool[Math.floor(Math.random() * pool.length)];
    if (extra) {
      let opt;
      if (skill === 'listening' || skill === 'writing') opt = extra.k || extra.w || extra.p;
      else if (skill === 'reading') opt = extra.r || extra.w;
      else if (skill === 'meaning') {
        // Prefer proper translation, but fall back to English if needed
        if (hasProperTrans(extra)) {
          opt = extra.m[state.lang] || extra.m.en;
        } else if (attempts > 30) {
          // After many attempts, use English as fallback
          opt = extra.m.en;
        }
      }
      if (opt && !options.includes(opt)) options.push(opt);
    }
  }
  
  // Final fallback: fill with English if still not enough
  if (options.length < 4 && skill === 'meaning') {
    const englishOptions = pool
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
  
  if (isCorrect) {
    session.correct++;
    state.totalCorrect++;
    state.skills[skillKey] = true;
    
    // Check if all 4 skills complete for this item
    const allComplete = SKILL_TYPES.every(s => state.skills[`${baseKey}_${s}`]);
    if (allComplete) {
      // Remove from mistakes if present
      if (state.mistakes[categoryKey]) {
        state.mistakes[categoryKey] = state.mistakes[categoryKey].filter(id => id !== item.id);
      }
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
  
  // Reset
  feedbackResult.className = 'feedback-result ' + (isCorrect ? 'correct' : 'incorrect');
  feedbackText.textContent = isCorrect ? '正解！' : '不正解';
  followupResponse.style.display = 'none';
  followupResponse.innerHTML = '';
  if (followupInput) followupInput.value = '';
  
  // Show correct answer for wrong answers
  if (!isCorrect) {
    feedbackAnswer.textContent = `正解: ${correctAnswer}`;
    feedbackAnswer.style.display = 'block';
    
    // Show AI section and auto-load explanation
    if (canUseAITutor()) {
      feedbackAiSection.style.display = 'block';
      feedbackAiComment.innerHTML = '<div class="ai-comment-loading">🤖 解説を生成中...</div>';
      
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

async function askFollowup() {
  const input = document.getElementById('followup-input');
  const btn = document.getElementById('followup-btn');
  const responseDiv = document.getElementById('followup-response');
  
  const question = input.value.trim();
  if (!question || !session.pendingAI) return;
  
  btn.disabled = true;
  responseDiv.style.display = 'block';
  responseDiv.innerHTML = '<span style="color:#667eea">🤖 ...</span>';
  
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
  
  // If specific set (not random), open HTML file in new tab
  if (set !== 'random') {
    const level = state.level.toLowerCase();
    const setNum = String(set).padStart(2, '0');
    window.open(`data/mock/${level}/${setNum}.html`, '_blank');
  }
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
  
  if (!loaded || !MOCK_DATA[state.level]) {
    alert('Mock test data not available for ' + state.level + '. Please try again.');
    return;
  }
  
  const mockData = MOCK_DATA[state.level];
  
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
    questions = mockData.getBySection(setNum, sectionName).map(q => ({ ...q, setNum }));
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
  
  showScreen('mock-q');
  startTimer(timeMinutes * 60);
  showMockQuestion();
}

function showMockQuestion() {
  const q = mockState.questions[mockState.current];
  
  // Error check - if question is undefined or missing data
  if (!q || (!q.opts && !q.options)) {
    console.error('Invalid question data:', q, 'current:', mockState.current);
    // Try to reload the question
    if (mockState.questions.length > 0) {
      // Skip to next valid question
      for (let i = mockState.current; i < mockState.questions.length; i++) {
        if (mockState.questions[i] && (mockState.questions[i].opts || mockState.questions[i].options)) {
          mockState.current = i;
          showMockQuestion();
          return;
        }
      }
    }
    alert('問題データの読み込みに失敗しました。ページを再読み込みしてください。');
    return;
  }
  
  // Update progress
  document.getElementById('mock-progress').textContent = `${mockState.current + 1}/${mockState.questions.length}`;
  
  // Update section header
  document.getElementById('mockSectionCurrent').textContent = q.section || '';
  document.getElementById('mockSubsectionCurrent').textContent = (q.subsection || q.type || '').replace('_', ' ');
  
  // Get instruction based on subsection
  const instruction = getMockInstruction(q.subsection || q.type);
  document.getElementById('mock-instruction').innerHTML = instruction;
  
  // Show question text (聴解以外)
  const isListeningSection = (q.section || '').includes('聴解') && !(q.type || '').includes('読解');
  if (!isListeningSection) {
    const questionText = (q.q || q.text || '').replace(/<u>/g, '<u>').replace(/<\/u>/g, '</u>');
    document.getElementById('mock-question-text').innerHTML = questionText;
  }
  
  // Handle audio for listening section
  const audioBtn = document.getElementById('mockAudioBtn');
  const audioEl = document.getElementById('mockAudio');
  const questionTextEl = document.getElementById('mock-question-text');
  
  // N5聴解セクション判定
  const isListening = (q.section || '').includes('聴解') && !(q.type || '').includes('読解');
  
  if (isListening) {
    // 聴解問題：テキスト非表示、TTSボタン表示
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
    
    // 会話形式（おとこ：/おんな：を含む）の場合はイラストを表示
    const questionContent = q.q || q.text || '';
    const isConversation = questionContent.includes('おとこ：') || questionContent.includes('おんな：') || 
                           questionContent.includes('男：') || questionContent.includes('女：');
    
    if (isConversation) {
      questionTextEl.innerHTML = '<div style="text-align:center;padding:10px;">' +
        '<img src="images/mock/conversation.png" alt="会話" style="max-width:280px;width:100%;margin-bottom:10px;">' +
        '<div style="color:#666;">' + msg + '</div></div>';
    } else {
      questionTextEl.innerHTML = '<div style="text-align:center;padding:20px;color:#666;">' + msg + '</div>';
    }
    
    audioBtn.classList.remove('hidden');
    audioBtn.innerHTML = '🔊';
    audioBtn.onclick = () => playListeningTTS(q.q || q.text || '');
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
  (q.opts || q.options).forEach((opt, idx) => {
    if (!opt) return; // Skip empty options
    
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    
    // Check if already answered
    if (mockState.answers[q.id]) {
      btn.onclick = null;
      const answer = mockState.answers[q.id];
      const correctLabel = q.ans || labels[q.answer];
      if (labels[idx] === correctLabel) btn.classList.add('correct');
      if (labels[idx] === answer.selected && labels[idx] !== correctLabel) btn.classList.add('incorrect');
      if (labels[idx] === answer.selected) btn.classList.add('selected');
    } else {
      btn.onclick = () => selectMockAnswer(btn, labels[idx], q);
    }
    
    // アイコン表示（icons配列がある場合）
    let iconHtml = '';
    if (q.icons && q.icons[idx]) {
      const count = (q.counts && q.counts[idx]) || 1;
      iconHtml = `<span class="option-icons" style="font-size:1.5em;margin-right:8px;">${q.icons[idx].repeat(count)}</span>`;
    }
    btn.innerHTML = `<span class="option-label">${labels[idx]}</span> ${iconHtml}${opt}`;
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
  
  // 会話を分割
  const lines = cleanText.split(/(?=おとこ：|おんな：|男：|女：)/);
  
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
    
    if (line.startsWith('おとこ：') || line.startsWith('男：')) {
      isMale = true;
      line = line.replace(/^(おとこ：|男：)/, '').trim();
    } else if (line.startsWith('おんな：') || line.startsWith('女：')) {
      isFemale = true;
      line = line.replace(/^(おんな：|女：)/, '').trim();
    }
    
    if (!line) { index++; speakNext(); return; }
    
    const utterance = new SpeechSynthesisUtterance(line);
    utterance.lang = 'ja-JP';
    utterance.rate = 0.85;
    
    const voices = speechSynthesis.getVoices();
    const japaneseVoices = voices.filter(v => v.lang.startsWith('ja'));
    
    if (japaneseVoices.length > 0) {
      if (isMale) {
        utterance.voice = japaneseVoices[0];
        utterance.pitch = 1.0;
      } else if (isFemale) {
        utterance.voice = japaneseVoices[japaneseVoices.length > 1 ? 1 : 0];
        utterance.pitch = 1.15;
      } else {
        utterance.voice = japaneseVoices[0];
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
  // Play typewriter sound
  playSound('typewriter');
  
  // Save answer without showing correct/incorrect (real exam style)
  mockState.answers[question.id] = { selected, question };
  
  // Highlight selected answer only
  document.querySelectorAll('#mock-options .option-btn').forEach(b => {
    b.classList.remove('selected');
  });
  btn.classList.add('selected');
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
  
  // Show result screen
  showScreen('mock-result');
  
  // Display score
  document.getElementById('mock-result-icon').textContent = passed ? '🎉' : '📚';
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
  
  let sectionHtml = '<div class="section-breakdown-title">📊 Section Breakdown</div>';
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
    listEl.innerHTML = '<div style="text-align:center;padding:20px;color:var(--success);font-weight:600;">🎉 Perfect score! No mistakes to review.</div>';
    return;
  }
  
  let html = '';
  wrongAnswers.slice(0, 20).forEach((item, i) => {
    const q = item.question;
    const yourAnswer = item.selected || '(No answer)';
    const correctAnswer = item.correct;
    
    // Generate explanation based on question type
    let explanation = generateQuestionExplanation(q);
    
    html += `
      <div class="mock-explanation-item">
        <div class="mock-explanation-q">${i + 1}. ${q.q || q.text || 'Question'}</div>
        <div class="mock-explanation-your">❌ Your answer: ${yourAnswer}</div>
        <div class="mock-explanation-correct">✓ Correct: ${correctAnswer}</div>
        <div class="mock-explanation-detail">${explanation}</div>
      </div>
    `;
  });
  
  if (wrongAnswers.length > 20) {
    html += `<div style="text-align:center;padding:12px;color:var(--text-light);">...and ${wrongAnswers.length - 20} more mistakes</div>`;
  }
  
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

## 💡 Pro Tips
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
  
  showScreen('result');
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
  
  document.getElementById('quiz-title').textContent = '復習 Review';
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
function confirmExit() { if (confirm('Exit? Progress will be lost.')) { clearInterval(timerInterval); showScreen('drill'); updateDrillCounts(); } }

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
      // フォールバック：ブラウザTTS
      console.log('TTS file not found, using browser TTS:', e.message);
      playBrowserTTS(item.r || item.w || item.k || item.p || currentWord);
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
  state.lang = lang; 
  saveState();
  // LPとの言語設定を同期
  localStorage.setItem('fujisan_lang', lang);
  // 全ての言語セレクターを同期
  document.querySelectorAll('.lang-selector').forEach(sel => sel.value = lang);
  // カテゴリ名を更新
  updateCategoryNames();
  // UIテキストを更新
  updateUITexts();
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

function checkPlanFromURL() {
  const params = new URLSearchParams(window.location.search);
  const plan = params.get('plan');
  const status = params.get('status');
  const billing = params.get('billing');
  const sessionId = params.get('session_id');
  
  // Stripe成功時: ?plan=xxx&billing=xxx&status=success&session_id=xxx
  if (plan && ['basic', 'standard', 'premium'].includes(plan)) {
    // status=successがある場合のみ処理（Stripeからのリダイレクト）
    // または既存の単純な?plan=xxxも許可（後方互換性）
    if (status === 'success' || !status) {
      state.plan = plan;
      state.billing = billing || 'annual'; // デフォルトは年払い
      state.stripeSessionId = sessionId || null;
      
      // Set trial period: 7 days from now
      const trialExpiry = new Date();
      trialExpiry.setDate(trialExpiry.getDate() + 7);
      state.planExpiry = trialExpiry.toISOString();
      state.isTrialing = true; // Mark as in trial period
      saveState();
      
      // URLをクリーンに
      window.history.replaceState({}, '', window.location.pathname);
      
      // Show welcome message (multilingual)
      const planName = plan.charAt(0).toUpperCase() + plan.slice(1);
      const lang = state.lang || 'en';
      const texts = UI_TEXTS[lang] || UI_TEXTS['en'];
      const billingText = billing === 'monthly' ? texts.billing_monthly : texts.billing_annual;
      
      let message = texts.trial_welcome || '🎉 Welcome! Your 7-day free trial of {plan} ({billing}) plan has started. All features are unlocked!';
      message = message.replace('{plan}', planName).replace('{billing}', billingText);
      
      setTimeout(() => {
        alert(message);
      }, 500);
      
      console.log('Trial started:', { plan, billing, sessionId, lang });
    }
  }
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

function isInTrialPeriod() {
  // Check if user is in the trial period (first 7 days after signup)
  if (!state.plan || !state.planExpiry) return false;
  const now = new Date();
  const expiry = new Date(state.planExpiry);
  
  // If isTrialing flag is set, use it
  if (state.isTrialing === true && now < expiry) return true;
  
  // Also check if within 7 days of planExpiry being set
  // (planExpiry is set to 7 days from signup for trial, or 1 year for annual)
  // If planExpiry is less than 8 days away, user is likely in trial
  const daysUntilExpiry = (expiry - now) / (1000 * 60 * 60 * 24);
  
  // Trial detection: if expiry is 7 days or less AND plan exists
  // This catches trial users even if isTrialing wasn't set properly
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
  const messages = {
    'level': `${requiredPlan} plan required to access this level.`,
    'mock': 'Pro plan required for Mock Tests.',
    'ai': 'Ultimate plan required for AI Tutor.',
    'prediction': 'Pro plan required for Pass Prediction.'
  };
  alert(messages[feature] || 'Upgrade required for this feature.');
  openSubscriptionModal();
}

function showSubscriptionRequiredModal() {
  const modal = document.getElementById('subscriptionRequiredModal');
  if (modal) {
    modal.classList.remove('hidden');
  } else {
    // Fallback if modal doesn't exist
    if (confirm('🔒 Start Your Free Trial\n\nGet full access to all JLPT levels, Mock Tests, and AI Tutor for 7 days free.\n\nNo charge until trial ends. Cancel anytime.\n\nStart free trial now?')) {
      window.location.href = 'index.html#pricing';
    }
  }
}

function closeSubscriptionRequiredModal() {
  const modal = document.getElementById('subscriptionRequiredModal');
  if (modal) modal.classList.add('hidden');
}

// ========== PASS REPORT ==========
function openPassReportModal() {
  document.getElementById('passReportModal').classList.remove('hidden');
}

function closePassReportModal() {
  document.getElementById('passReportModal').classList.add('hidden');
}

function previewCertificate(input) {
  if (input.files && input.files[0]) {
    const reader = new FileReader();
    reader.onload = function(e) {
      const preview = document.getElementById('passPreview');
      preview.src = e.target.result;
      preview.style.display = 'block';
      document.getElementById('passUploadArea').classList.add('has-image');
      document.querySelector('#passUploadArea .pass-upload-text').textContent = 'Click to change photo';
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
  btn.textContent = 'Submitting...';
  
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
  
  btn.textContent = 'Submitted!';
  setTimeout(() => {
    closePassReportModal();
    alert('Thank you for sharing your success! Your 3-month bonus has been applied.');
    btn.disabled = false;
    btn.textContent = 'Submit Report';
    document.getElementById('passReportForm').reset();
    document.getElementById('passPreview').style.display = 'none';
    document.getElementById('passUploadArea').classList.remove('has-image');
    document.querySelector('#passUploadArea .pass-upload-text').textContent = 'Click to upload your certificate';
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
    showUpgradeModal('ai', 'Ultimate');
    return;
  }
  
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
        💡 <b>Science-based strategy:</b><br>
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
      return `📊 <b>Your Growth Areas</b><br><br>Based on your practice patterns, these areas are ripe for breakthrough:<br>• ${weakAreas.join('<br>• ')}<br><br>💡 <b>SLA Insight:</b> These "weak points" are actually where your brain is actively building new neural pathways. Focus here for 10-15 minutes daily — that's your optimal acquisition window. The struggle means learning is happening!`;
    } else {
      return `📊 <b>Building Your Foundation</b><br><br>You're still in the early stages — which is exactly where you should be! In language acquisition, we call this building "comprehensible input."<br><br>Your stats:<br>• Words encountered: ${learned}<br>• Accuracy: ${accuracy}%<br>• Streak: ${state.streak} days<br><br>Keep engaging with the material. Patterns will emerge naturally.`;
    }
  }
  
  if (q.includes('study') || q.includes('tip') || q.includes('勉強') || q.includes('how to learn') || q.includes('method')) {
    return `📚 <b>Evidence-Based Study Strategy for ${state.level}</b><br><br>1. <b>Spaced Review:</b> Review your mistakes regularly — our system tracks what you get wrong so you can focus on weak areas.<br><br>2. <b>i+1 Principle:</b> Material should be just slightly beyond your current level. If it's too easy, you're not growing. If it's too hard, anxiety blocks acquisition.<br><br>3. <b>Active Recall:</b> Testing yourself beats passive review by 3x. That's why we use quizzes, not flashcard flipping.<br><br>4. <b>Your Focus:</b> ${weakAreas.length > 0 ? 'Your data shows ' + weakAreas[0] + ' is your growth edge right now.' : 'Keep balanced practice — variety strengthens neural networks.'}<br><br>📈 Current pass probability: <b>${passProbability}%</b>`;
  }
  
  if (q.includes('memorize') || q.includes('remember') || q.includes('覚え') || q.includes('暗記')) {
    return `🧠 <b>Memory Science for Language Learning</b><br><br>Your brain encodes memories best when you:<br><br>1. <b>Elaborative Encoding:</b> Connect new words to personal experiences or vivid images. "食べる (to eat)" — imagine YOUR favorite food!<br><br>2. <b>Retrieval Practice:</b> Testing yourself (even when you fail) strengthens memory 3x more than re-reading.<br><br>3. <b>Sleep:</b> Memory consolidation happens during sleep. Review before bed, let your brain work overnight.<br><br>4. <b>Interleaving:</b> Mix vocabulary, kanji, and grammar in one session. Harder now, but stronger long-term.<br><br>💡 <b>Quick Win:</b> For any new word, immediately make a sentence using it. Active production beats passive recognition.`;
  }
  
  if (q.includes('mistake') || q.includes('間違') || q.includes('error')) {
    return `❌ <b>Understanding Common Patterns</b><br><br>In SLA theory, mistakes reveal your "interlanguage" — the natural stage between beginner and fluent. These patterns are universal:<br><br>1. <b>Particles (は vs が):</b> Even advanced learners refine this. It's about topic vs subject — deep conceptual work.<br><br>2. <b>Verb Conjugation:</b> Your brain is learning rules. Errors show you're applying patterns, which is good!<br><br>3. <b>Kanji Readings:</b> 音読み vs 訓読み requires massive exposure. Be patient with yourself.<br><br>Each "mistake" is data for your brain. Keep going!`;
  }
  
  if (q.includes('motivation') || q.includes('やる気') || q.includes('tired') || q.includes('give up')) {
    return `💪 <b>Staying Motivated: The Science</b><br><br>Motivation naturally fluctuates — that's normal! Here's what research says:<br><br>1. <b>Streak Power:</b> You have a ${state.streak}-day streak. Each day adds psychological commitment. Don't break the chain!<br><br>2. <b>Small Wins:</b> On low-energy days, just do 5 questions. Starting is harder than continuing.<br><br>3. <b>Progress Visibility:</b> You've learned ${learned} items at ${accuracy}% accuracy. That's real progress!<br><br>4. <b>Exam Anchor:</b> ${state.examDate ? 'Your exam is coming — ' + Math.ceil((new Date(state.examDate) - new Date()) / (1000*60*60*24)) + ' days left. Future you will thank present you!' : 'Set an exam date — deadlines create focus.'}<br><br>Remember: the feeling of "I don't want to" passes in about 20 minutes if you just start.`;
  }
  
  // === LEARNING CONTENT QUESTIONS ===
  
  if (q.includes('grammar') || q.includes('文法')) {
    return `📖 <b>Grammar Acquisition for ${state.level}</b><br><br>In SLA, grammar is acquired through meaningful exposure, not just memorization. For your level, focus on:<br><br>• Understanding the "why" behind sentence patterns<br>• Noticing how particles change meaning<br>• Recognizing patterns across multiple examples<br><br>💡 Try reading the grammar point, then immediately practicing it. The "testing effect" strengthens memory 3x more than re-reading!<br><br>Ask me about any specific grammar pattern (e.g., "explain ても", "what's the difference between から and ので?")`;
  }
  
  if (q.includes('kanji') || q.includes('漢字')) {
    return `漢 <b>Kanji Acquisition Strategy</b><br><br>Kanji learning follows predictable stages:<br><br>1. <b>Radicals First:</b> Learn the ~214 radicals. They're the building blocks — 木 (tree) + 林 (grove) + 森 (forest).<br><br>2. <b>Semantic + Phonetic:</b> Most kanji combine meaning (semantic) and sound (phonetic) components.<br><br>3. <b>Context Over Isolation:</b> Learn kanji within vocabulary, not standalone. Your brain needs meaning to anchor memory.<br><br>4. <b>Handwriting:</b> Motor memory creates additional neural pathways. Even tracing helps!<br><br>${state.level === 'N5' ? 'N5 goal: ~100 kanji. You\'re building the foundation.' : state.level === 'N4' ? 'N4 goal: ~300 kanji. Patterns are emerging!' : 'Focus on high-frequency kanji first — efficiency matters.'}<br><br>Ask me about specific kanji (e.g., "how do I remember 食?", "what's the radical in 語?")`;
  }
  
  if (q.includes('particle') || q.includes('助詞') || q.match(/は\s*(vs|と|or)\s*が/) || q.includes('wa vs ga')) {
    return `🔤 <b>Particles: The Heart of Japanese</b><br><br>Particles are what make Japanese Japanese. Key insights:<br><br><b>は (wa) vs が (ga):</b><br>• は marks the TOPIC (what we're talking about)<br>• が marks the SUBJECT (who does the action) or NEW information<br>• 私<b>は</b>学生です = "As for me, (I'm) a student" (expected info)<br>• 私<b>が</b>学生です = "<b>I</b> am the student" (not someone else)<br><br><b>に vs で:</b><br>• に = destination, time point, existence location<br>• で = action location, means, cause<br><br>💡 Don't try to memorize rules — absorb through examples. Which particle is confusing you?`;
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
let currentUser = null;

function initFirebase() {
  try {
    firebase.initializeApp(firebaseConfig);
    firebaseAuth = firebase.auth();
    firebaseDb = firebase.firestore();
    
    firebaseAuth.onAuthStateChanged(user => {
      if (user) {
        currentUser = user;
        console.log('Logged in as:', user.email);
        syncUserData();
        showScreen('drill');
      } else {
        // Demo mode - show drill without login
        console.log('Demo mode - no login required');
        showScreen('drill');
      }
    });
  } catch (e) {
    console.log('Firebase init error:', e);
    // Demo mode fallback
    showScreen('drill');
  }
}

async function syncUserData() {
  if (!currentUser || !firebaseDb) return;
  
  // Update email display
  const emailEl = document.getElementById('settingsEmail');
  if (emailEl) emailEl.textContent = currentUser.email || 'Logged in';
  
  try {
    const userDoc = await firebaseDb.collection('users').doc(currentUser.uid).get();
    if (userDoc.exists) {
      const userData = userDoc.data();
      // Merge cloud data with local state
      if (userData.plan) state.plan = userData.plan;
      if (userData.planExpiry) state.planExpiry = userData.planExpiry;
      if (userData.xp) state.xp = Math.max(state.xp, userData.xp);
      if (userData.streak) state.streak = Math.max(state.streak, userData.streak);
      saveState();
      updateDashboard();
    }
  } catch (e) {
    console.log('Sync error:', e);
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
      window.location.href = 'index.html';
    });
  } else {
    window.location.href = 'index.html';
  }
}

// ========== ONBOARDING ==========
let onboardingStep = 1;
const totalOnboardingSteps = 4;

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
    nextText.textContent = onboardingStep === totalOnboardingSteps ? "Let's Go!" : 'Next';
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

function skipOnboarding() {
  completeOnboarding();
}

function completeOnboarding() {
  state.onboardingComplete = true;
  saveState();
  
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

// Set initial level theme
document.body.setAttribute('data-theme', state.level || 'N5');

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
        showUpgradeModal('ai', 'Ultimate');
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

// Level hover preview - instantly change all UI colors on hover
document.querySelectorAll('.level-select-btn').forEach(btn => {
  btn.addEventListener('mouseenter', () => {
    document.body.setAttribute('data-theme', btn.dataset.level);
  });
  btn.addEventListener('mouseleave', () => {
    // Revert to active level when mouse leaves
    document.body.setAttribute('data-theme', state.level);
  });
  // Touch support for mobile
  btn.addEventListener('touchstart', () => {
    document.body.setAttribute('data-theme', btn.dataset.level);
  }, { passive: true });
});

console.log('Fujisan.AI v' + APP_VERSION + ' loaded (lazy loading enabled)');
