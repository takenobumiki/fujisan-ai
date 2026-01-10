// Fujisan.AI Data
// Count: 3750

const N3_VOCAB = [
  {
    "id": "V0001",
    "w": "挨拶",
    "r": "あいさつ",
    "m": {
      "en": "greeting",
      "zh-TW": "問候",
      "zh-CN": "问候",
      "ko": "인사",
      "vi": "chào hỏi",
      "id": "salam"
    },
    "pos": "verb-godan",
    "ex": "朝の挨拶をする",
    "syn": [
      "お辞儀",
      "会釈",
      "あいさつ"
    ]
  },
  {
    "id": "V0002",
    "w": "相変わらず",
    "r": "あいかわらず",
    "m": {
      "en": "as usual",
      "zh-TW": "照舊",
      "zh-CN": "照旧",
      "ko": "여전히",
      "vi": "vẫn như cũ",
      "id": "seperti biasa"
    },
    "pos": "noun",
    "ex": "彼は相変わらず元気だ",
    "syn": [
      "いつも通り",
      "変わらず",
      "依然として"
    ]
  },
  {
    "id": "V0003",
    "w": "合図",
    "r": "あいず",
    "m": {
      "en": "signal",
      "zh-TW": "信號",
      "zh-CN": "信号",
      "ko": "신호",
      "vi": "tín hiệu",
      "id": "sinyal"
    },
    "pos": "noun",
    "ex": "手で合図を送る"
  },
  {
    "id": "V0004",
    "w": "相手",
    "r": "あいて",
    "m": {
      "en": "partner",
      "zh-TW": "對方",
      "zh-CN": "对方",
      "ko": "상대",
      "vi": "đối phương",
      "id": "lawan"
    },
    "pos": "noun",
    "ex": "相手の気持ちを考える"
  },
  {
    "id": "V0005",
    "w": "曖昧",
    "r": "あいまい",
    "m": {
      "en": "vague",
      "zh-TW": "模糊",
      "zh-CN": "模糊",
      "ko": "애매",
      "vi": "mơ hồ",
      "id": "samar"
    },
    "pos": "i-adj",
    "ex": "曖昧な返事をする",
    "syn": [
      "あいまい",
      "不明確",
      "はっきりしない"
    ]
  },
  {
    "id": "V0006",
    "w": "遭う",
    "r": "あう",
    "m": {
      "en": "to encounter",
      "zh-TW": "遭遇",
      "zh-CN": "遭遇",
      "ko": "당하다",
      "vi": "gặp phải",
      "id": "mengalami"
    },
    "pos": "verb-godan",
    "ex": "遭うことにする"
  },
  {
    "id": "V0007",
    "w": "扇ぐ",
    "r": "あおぐ",
    "m": {
      "en": "to fan",
      "zh-TW": "搧",
      "zh-CN": "扇",
      "ko": "부채질하다",
      "vi": "quạt",
      "id": "mengipas"
    },
    "pos": "verb-godan",
    "ex": "扇ぐことにする"
  },
  {
    "id": "V0008",
    "w": "赤字",
    "r": "あかじ",
    "m": {
      "en": "deficit",
      "zh-TW": "赤字",
      "zh-CN": "赤字",
      "ko": "적자",
      "vi": "thâm hụt",
      "id": "defisit"
    },
    "pos": "noun",
    "ex": "赤字について考える"
  },
  {
    "id": "V0009",
    "w": "明らか",
    "r": "あきらか",
    "m": {
      "en": "obvious",
      "zh-TW": "明顯",
      "zh-CN": "明显",
      "ko": "분명한",
      "vi": "rõ ràng",
      "id": "jelas"
    },
    "pos": "noun",
    "ex": "明らかについて考える"
  },
  {
    "id": "V0010",
    "w": "呆れる",
    "r": "あきれる",
    "m": {
      "en": "to be amazed",
      "zh-TW": "驚訝",
      "zh-CN": "惊讶",
      "ko": "어이없다",
      "vi": "kinh ngạc",
      "id": "tercengang"
    },
    "pos": "verb-ichidan",
    "ex": "呆れることにする"
  },
  {
    "id": "V0011",
    "w": "悪化",
    "r": "あっか",
    "m": {
      "en": "deterioration",
      "zh-TW": "惡化",
      "zh-CN": "恶化",
      "ko": "악화",
      "vi": "xấu đi",
      "id": "memburuk"
    },
    "pos": "noun",
    "ex": "悪化について考える"
  },
  {
    "id": "V0012",
    "w": "扱う",
    "r": "あつかう",
    "m": {
      "en": "to handle",
      "zh-TW": "處理",
      "zh-CN": "处理",
      "ko": "다루다",
      "vi": "xử lý",
      "id": "menangani"
    },
    "pos": "verb-godan",
    "ex": "扱うことにする"
  },
  {
    "id": "V0013",
    "w": "圧力",
    "r": "あつりょく",
    "m": {
      "en": "pressure",
      "zh-TW": "壓力",
      "zh-CN": "压力",
      "ko": "압력",
      "vi": "áp lực",
      "id": "tekanan"
    },
    "pos": "verb-godan",
    "ex": "圧力ことにする"
  },
  {
    "id": "V0014",
    "w": "宛先",
    "r": "あてさき",
    "m": {
      "en": "address",
      "zh-TW": "收件人",
      "zh-CN": "收件人",
      "ko": "수신처",
      "vi": "địa chỉ",
      "id": "alamat"
    },
    "pos": "noun",
    "ex": "宛先について考える"
  },
  {
    "id": "V0015",
    "w": "穴",
    "r": "あな",
    "m": {
      "en": "hole",
      "zh-TW": "洞",
      "zh-CN": "洞",
      "ko": "구멍",
      "vi": "lỗ",
      "id": "lubang"
    },
    "pos": "noun",
    "ex": "道に穴があいている"
  },
  {
    "id": "V0016",
    "w": "あちこち",
    "r": "あちこち",
    "m": {
      "en": "here and there",
      "zh-TW": "到處",
      "zh-CN": "到处",
      "ko": "여기저기",
      "vi": "đây đó",
      "id": "di sana-sini"
    },
    "pos": "noun",
    "ex": "あちこちについて考える"
  },
  {
    "id": "V0017",
    "w": "暴れる",
    "r": "あばれる",
    "m": {
      "en": "to rage",
      "zh-TW": "暴躁",
      "zh-CN": "暴躁",
      "ko": "난동부리다",
      "vi": "nổi loạn",
      "id": "mengamuk"
    },
    "pos": "verb-ichidan",
    "ex": "暴れることにする"
  },
  {
    "id": "V0018",
    "w": "浴びる",
    "r": "あびる",
    "m": {
      "en": "to bathe",
      "zh-TW": "淋",
      "zh-CN": "淋",
      "ko": "뒤집어쓰다",
      "vi": "tắm",
      "id": "mandi"
    },
    "pos": "verb-godan",
    "ex": "浴びることにする"
  },
  {
    "id": "V0019",
    "w": "油",
    "r": "あぶら",
    "m": {
      "en": "oil",
      "zh-TW": "油",
      "zh-CN": "油",
      "ko": "기름",
      "vi": "dầu",
      "id": "minyak"
    },
    "pos": "noun",
    "ex": "フライパンに油を引く"
  },
  {
    "id": "V0020",
    "w": "余る",
    "r": "あまる",
    "m": {
      "en": "to remain",
      "zh-TW": "剩餘",
      "zh-CN": "剩余",
      "ko": "남다",
      "vi": "thừa",
      "id": "tersisa"
    },
    "pos": "verb-godan",
    "ex": "余ることにする"
  },
  {
    "id": "V0021",
    "w": "編む",
    "r": "あむ",
    "m": {
      "en": "to knit",
      "zh-TW": "編織",
      "zh-CN": "编织",
      "ko": "짜다",
      "vi": "đan",
      "id": "merajut"
    },
    "pos": "verb-godan",
    "ex": "編むことにする"
  },
  {
    "id": "V0022",
    "w": "怪しい",
    "r": "あやしい",
    "m": {
      "en": "suspicious",
      "zh-TW": "可疑",
      "zh-CN": "可疑",
      "ko": "수상한",
      "vi": "đáng ngờ",
      "id": "mencurigakan"
    },
    "pos": "i-adj",
    "ex": "とても怪しいと思う"
  },
  {
    "id": "V0023",
    "w": "謝る",
    "r": "あやまる",
    "m": {
      "en": "to apologize",
      "zh-TW": "道歉",
      "zh-CN": "道歉",
      "ko": "사과하다",
      "vi": "xin lỗi",
      "id": "meminta maaf"
    },
    "pos": "verb-godan",
    "ex": "失礼を謝る",
    "syn": [
      "詫びる",
      "謝罪する",
      "お詫びする"
    ]
  },
  {
    "id": "V0024",
    "w": "誤る",
    "r": "あやまる",
    "m": {
      "en": "to make mistake",
      "zh-TW": "弄錯",
      "zh-CN": "弄错",
      "ko": "틀리다",
      "vi": "sai",
      "id": "salah"
    },
    "pos": "verb-godan",
    "ex": "誤ることにする"
  },
  {
    "id": "V0025",
    "w": "争う",
    "r": "あらそう",
    "m": {
      "en": "to compete",
      "zh-TW": "競爭",
      "zh-CN": "竞争",
      "ko": "다투다",
      "vi": "tranh",
      "id": "bersaing"
    },
    "pos": "verb-godan",
    "ex": "争うことにする"
  },
  {
    "id": "V0026",
    "w": "改めて",
    "r": "あらためて",
    "m": {
      "en": "again",
      "zh-TW": "重新",
      "zh-CN": "重新",
      "ko": "다시",
      "vi": "lại",
      "id": "lagi"
    },
    "pos": "noun",
    "ex": "改めてについて考える"
  },
  {
    "id": "V0027",
    "w": "表す",
    "r": "あらわす",
    "m": {
      "en": "to express",
      "zh-TW": "表達",
      "zh-CN": "表达",
      "ko": "나타내다",
      "vi": "biểu hiện",
      "id": "mengekspresikan"
    },
    "pos": "verb-godan",
    "ex": "感謝の気持ちを表す"
  },
  {
    "id": "V0028",
    "w": "現れる",
    "r": "あらわれる",
    "m": {
      "en": "to appear",
      "zh-TW": "出現",
      "zh-CN": "出现",
      "ko": "나타나다",
      "vi": "xuất hiện",
      "id": "muncul"
    },
    "pos": "verb-ichidan",
    "ex": "症状が現れる"
  },
  {
    "id": "V0029",
    "w": "有難い",
    "r": "ありがたい",
    "m": {
      "en": "grateful",
      "zh-TW": "感激",
      "zh-CN": "感激",
      "ko": "고맙다",
      "vi": "biết ơn",
      "id": "bersyukur"
    },
    "pos": "i-adj",
    "ex": "とても有難いと思う"
  },
  {
    "id": "V0030",
    "w": "或いは",
    "r": "あるいは",
    "m": {
      "en": "or",
      "zh-TW": "或者",
      "zh-CN": "或者",
      "ko": "혹은",
      "vi": "hoặc là",
      "id": "atau"
    },
    "pos": "noun",
    "ex": "或いはについて考える"
  },
  {
    "id": "V0031",
    "w": "泡",
    "r": "あわ",
    "m": {
      "en": "bubble",
      "zh-TW": "泡沫",
      "zh-CN": "泡沫",
      "ko": "거품",
      "vi": "bọt",
      "id": "gelembung"
    },
    "pos": "noun",
    "ex": "泡について考える"
  },
  {
    "id": "V0032",
    "w": "慌てる",
    "r": "あわてる",
    "m": {
      "en": "to panic",
      "zh-TW": "慌張",
      "zh-CN": "慌张",
      "ko": "당황하다",
      "vi": "hoảng hốt",
      "id": "panik"
    },
    "pos": "verb-ichidan",
    "ex": "慌てることにする"
  },
  {
    "id": "V0033",
    "w": "案",
    "r": "あん",
    "m": {
      "en": "plan",
      "zh-TW": "方案",
      "zh-CN": "方案",
      "ko": "안",
      "vi": "kế hoạch",
      "id": "rencana"
    },
    "pos": "noun",
    "ex": "新しい案を提出する"
  },
  {
    "id": "V0034",
    "w": "案内",
    "r": "あんない",
    "m": {
      "en": "guidance",
      "zh-TW": "指南",
      "zh-CN": "指南",
      "ko": "안내",
      "vi": "hướng dẫn",
      "id": "panduan"
    },
    "pos": "i-adj",
    "ex": "観光客を案内する"
  },
  {
    "id": "V0035",
    "w": "言い訳",
    "r": "いいわけ",
    "m": {
      "en": "excuse",
      "zh-TW": "藉口",
      "zh-CN": "借口",
      "ko": "변명",
      "vi": "lý do",
      "id": "alasan"
    },
    "pos": "noun",
    "ex": "言い訳について考える"
  },
  {
    "id": "V0036",
    "w": "生かす",
    "r": "いかす",
    "m": {
      "en": "to make use of",
      "zh-TW": "活用",
      "zh-CN": "活用",
      "ko": "살리다",
      "vi": "tận dụng",
      "id": "memanfaatkan"
    },
    "pos": "verb-godan",
    "ex": "生かすことにする"
  },
  {
    "id": "V0037",
    "w": "息",
    "r": "いき",
    "m": {
      "en": "breath",
      "zh-TW": "呼吸",
      "zh-CN": "呼吸",
      "ko": "숨",
      "vi": "hơi thở",
      "id": "napas"
    },
    "pos": "noun",
    "ex": "息について考える"
  },
  {
    "id": "V0038",
    "w": "生き生き",
    "r": "いきいき",
    "m": {
      "en": "lively",
      "zh-TW": "生氣勃勃",
      "zh-CN": "生气勃勃",
      "ko": "생생한",
      "vi": "sống động",
      "id": "hidup"
    },
    "pos": "noun",
    "ex": "生き生きについて考える"
  },
  {
    "id": "V0039",
    "w": "勢い",
    "r": "いきおい",
    "m": {
      "en": "force",
      "zh-TW": "氣勢",
      "zh-CN": "气势",
      "ko": "기세",
      "vi": "khí thế",
      "id": "kekuatan"
    },
    "pos": "i-adj",
    "ex": "とても勢いと思う"
  },
  {
    "id": "V0040",
    "w": "意見",
    "r": "いけん",
    "m": {
      "en": "opinion",
      "zh-TW": "意見",
      "zh-CN": "意见",
      "ko": "의견",
      "vi": "ý kiến",
      "id": "pendapat"
    },
    "pos": "noun",
    "ex": "自分の意見を述べる",
    "syn": [
      "考え",
      "見解",
      "主張"
    ]
  },
  {
    "id": "V0041",
    "w": "維持",
    "r": "いじ",
    "m": {
      "en": "maintenance",
      "zh-TW": "維持",
      "zh-CN": "维持",
      "ko": "유지",
      "vi": "duy trì",
      "id": "pemeliharaan"
    },
    "pos": "noun",
    "ex": "維持について考える"
  },
  {
    "id": "V0042",
    "w": "苛める",
    "r": "いじめる",
    "m": {
      "en": "to bully",
      "zh-TW": "欺負",
      "zh-CN": "欺负",
      "ko": "괴롭히다",
      "vi": "bắt nạt",
      "id": "mengganggu"
    },
    "pos": "verb-ichidan",
    "ex": "苛めることにする"
  },
  {
    "id": "V0043",
    "w": "移住",
    "r": "いじゅう",
    "m": {
      "en": "migration",
      "zh-TW": "移居",
      "zh-CN": "移居",
      "ko": "이주",
      "vi": "di cư",
      "id": "migrasi"
    },
    "pos": "verb-godan",
    "ex": "移住ことにする"
  },
  {
    "id": "V0044",
    "w": "泉",
    "r": "いずみ",
    "m": {
      "en": "spring",
      "zh-TW": "泉水",
      "zh-CN": "泉水",
      "ko": "샘",
      "vi": "suối",
      "id": "mata air"
    },
    "pos": "noun",
    "ex": "泉について考える"
  },
  {
    "id": "V0045",
    "w": "依然",
    "r": "いぜん",
    "m": {
      "en": "still",
      "zh-TW": "依然",
      "zh-CN": "依然",
      "ko": "여전히",
      "vi": "vẫn",
      "id": "masih"
    },
    "pos": "noun",
    "ex": "依然について考える"
  },
  {
    "id": "V0046",
    "w": "板",
    "r": "いた",
    "m": {
      "en": "board",
      "zh-TW": "板",
      "zh-CN": "板",
      "ko": "판",
      "vi": "bảng",
      "id": "papan"
    },
    "pos": "noun",
    "ex": "木の板を切る"
  },
  {
    "id": "V0047",
    "w": "抱く",
    "r": "いだく",
    "m": {
      "en": "to embrace",
      "zh-TW": "懷抱",
      "zh-CN": "怀抱",
      "ko": "품다",
      "vi": "ôm",
      "id": "memeluk"
    },
    "pos": "verb-godan",
    "ex": "抱くことにする"
  },
  {
    "id": "V0048",
    "w": "至る",
    "r": "いたる",
    "m": {
      "en": "to reach",
      "zh-TW": "到達",
      "zh-CN": "到达",
      "ko": "이르다",
      "vi": "đến",
      "id": "mencapai"
    },
    "pos": "verb-godan",
    "ex": "至ることにする"
  },
  {
    "id": "V0049",
    "w": "一応",
    "r": "いちおう",
    "m": {
      "en": "tentatively",
      "zh-TW": "姑且",
      "zh-CN": "姑且",
      "ko": "일단",
      "vi": "tạm thời",
      "id": "untuk sementara"
    },
    "pos": "verb-godan",
    "ex": "一応ことにする"
  },
  {
    "id": "V0050",
    "w": "一種",
    "r": "いっしゅ",
    "m": {
      "en": "a kind of",
      "zh-TW": "一種",
      "zh-CN": "一种",
      "ko": "일종",
      "vi": "một loại",
      "id": "sejenis"
    },
    "pos": "noun",
    "ex": "一種について考える"
  },
  {
    "id": "V0051",
    "w": "一瞬",
    "r": "いっしゅん",
    "m": {
      "en": "instant",
      "zh-TW": "瞬間",
      "zh-CN": "瞬间",
      "ko": "순간",
      "vi": "khoảnh khắc",
      "id": "sekejap"
    },
    "pos": "noun",
    "ex": "一瞬について考える"
  },
  {
    "id": "V0052",
    "w": "一斉",
    "r": "いっせい",
    "m": {
      "en": "simultaneous",
      "zh-TW": "一齊",
      "zh-CN": "一齐",
      "ko": "일제히",
      "vi": "đồng loạt",
      "id": "serentak"
    },
    "pos": "i-adj",
    "ex": "とても一斉と思う"
  },
  {
    "id": "V0053",
    "w": "一層",
    "r": "いっそう",
    "m": {
      "en": "more",
      "zh-TW": "更加",
      "zh-CN": "更加",
      "ko": "더욱",
      "vi": "hơn nữa",
      "id": "lebih"
    },
    "pos": "verb-godan",
    "ex": "一層ことにする"
  },
  {
    "id": "V0054",
    "w": "一体",
    "r": "いったい",
    "m": {
      "en": "what on earth",
      "zh-TW": "到底",
      "zh-CN": "到底",
      "ko": "도대체",
      "vi": "rốt cuộc",
      "id": "sebenarnya"
    },
    "pos": "i-adj",
    "ex": "とても一体と思う"
  },
  {
    "id": "V0055",
    "w": "一致",
    "r": "いっち",
    "m": {
      "en": "agreement",
      "zh-TW": "一致",
      "zh-CN": "一致",
      "ko": "일치",
      "vi": "nhất trí",
      "id": "kesepakatan"
    },
    "pos": "noun",
    "ex": "一致について考える"
  },
  {
    "id": "V0056",
    "w": "一般",
    "r": "いっぱん",
    "m": {
      "en": "general",
      "zh-TW": "一般",
      "zh-CN": "一般",
      "ko": "일반",
      "vi": "chung",
      "id": "umum"
    },
    "pos": "noun",
    "ex": "一般について考える"
  },
  {
    "id": "V0057",
    "w": "移転",
    "r": "いてん",
    "m": {
      "en": "transfer",
      "zh-TW": "轉移",
      "zh-CN": "转移",
      "ko": "이전",
      "vi": "chuyển",
      "id": "pindah"
    },
    "pos": "noun",
    "ex": "移転について考える"
  },
  {
    "id": "V0058",
    "w": "糸",
    "r": "いと",
    "m": {
      "en": "thread",
      "zh-TW": "線",
      "zh-CN": "线",
      "ko": "실",
      "vi": "sợi",
      "id": "benang"
    },
    "pos": "adverb",
    "ex": "糸考える"
  },
  {
    "id": "V0059",
    "w": "従兄弟",
    "r": "いとこ",
    "m": {
      "en": "cousin",
      "zh-TW": "堂兄弟",
      "zh-CN": "堂兄弟",
      "ko": "사촌",
      "vi": "anh em họ",
      "id": "sepupu"
    },
    "pos": "noun",
    "ex": "従兄弟について考える"
  },
  {
    "id": "V0060",
    "w": "稲",
    "r": "いね",
    "m": {
      "en": "rice plant",
      "zh-TW": "稻",
      "zh-CN": "稻",
      "ko": "벼",
      "vi": "lúa",
      "id": "padi"
    },
    "pos": "noun",
    "ex": "稲について考える"
  },
  {
    "id": "V0061",
    "w": "祈る",
    "r": "いのる",
    "m": {
      "en": "to pray",
      "zh-TW": "祈禱",
      "zh-CN": "祈祷",
      "ko": "빌다",
      "vi": "cầu nguyện",
      "id": "berdoa"
    },
    "pos": "verb-godan",
    "ex": "祈ることにする"
  },
  {
    "id": "V0062",
    "w": "今更",
    "r": "いまさら",
    "m": {
      "en": "now",
      "zh-TW": "事到如今",
      "zh-CN": "事到如今",
      "ko": "이제와서",
      "vi": "bây giờ",
      "id": "sekarang"
    },
    "pos": "noun",
    "ex": "今更について考える"
  },
  {
    "id": "V0063",
    "w": "今に",
    "r": "いまに",
    "m": {
      "en": "soon",
      "zh-TW": "不久",
      "zh-CN": "不久",
      "ko": "곧",
      "vi": "sắp",
      "id": "segera"
    },
    "pos": "adverb",
    "ex": "今に考える"
  },
  {
    "id": "V0064",
    "w": "今にも",
    "r": "いまにも",
    "m": {
      "en": "at any moment",
      "zh-TW": "馬上",
      "zh-CN": "马上",
      "ko": "당장이라도",
      "vi": "ngay lập tức",
      "id": "kapan saja"
    },
    "pos": "noun",
    "ex": "今にもについて考える"
  },
  {
    "id": "V0065",
    "w": "嫌",
    "r": "いや",
    "m": {
      "en": "unpleasant",
      "zh-TW": "討厭",
      "zh-CN": "讨厌",
      "ko": "싫은",
      "vi": "ghét",
      "id": "tidak suka"
    },
    "pos": "noun",
    "ex": "嫌な予感がする"
  },
  {
    "id": "V0066",
    "w": "嫌がる",
    "r": "いやがる",
    "m": {
      "en": "to dislike",
      "zh-TW": "厭惡",
      "zh-CN": "厌恶",
      "ko": "싫어하다",
      "vi": "không thích",
      "id": "tidak mau"
    },
    "pos": "verb-godan",
    "ex": "嫌がることにする"
  },
  {
    "id": "V0067",
    "w": "以来",
    "r": "いらい",
    "m": {
      "en": "since",
      "zh-TW": "以來",
      "zh-CN": "以来",
      "ko": "이래",
      "vi": "từ đó",
      "id": "sejak"
    },
    "pos": "i-adj",
    "ex": "とても以来と思う"
  },
  {
    "id": "V0068",
    "w": "依頼",
    "r": "いらい",
    "m": {
      "en": "request",
      "zh-TW": "請求",
      "zh-CN": "请求",
      "ko": "의뢰",
      "vi": "yêu cầu",
      "id": "permintaan"
    },
    "pos": "i-adj",
    "ex": "とても依頼と思う"
  },
  {
    "id": "V0069",
    "w": "苛々",
    "r": "いらいら",
    "m": {
      "en": "irritated",
      "zh-TW": "焦躁",
      "zh-CN": "焦躁",
      "ko": "짜증",
      "vi": "bực bội",
      "id": "kesal"
    },
    "pos": "noun",
    "ex": "苛々について考える"
  },
  {
    "id": "V0070",
    "w": "入り口",
    "r": "いりぐち",
    "m": {
      "en": "entrance",
      "zh-TW": "入口",
      "zh-CN": "入口",
      "ko": "입구",
      "vi": "lối vào",
      "id": "pintu masuk"
    },
    "pos": "noun",
    "ex": "入り口について考える"
  },
  {
    "id": "V0071",
    "w": "衣類",
    "r": "いるい",
    "m": {
      "en": "clothing",
      "zh-TW": "衣物",
      "zh-CN": "衣物",
      "ko": "의류",
      "vi": "quần áo",
      "id": "pakaian"
    },
    "pos": "i-adj",
    "ex": "とても衣類と思う"
  },
  {
    "id": "V0072",
    "w": "祝い",
    "r": "いわい",
    "m": {
      "en": "celebration",
      "zh-TW": "慶祝",
      "zh-CN": "庆祝",
      "ko": "축하",
      "vi": "chúc mừng",
      "id": "perayaan"
    },
    "pos": "i-adj",
    "ex": "とても祝いと思う"
  },
  {
    "id": "V0073",
    "w": "印象",
    "r": "いんしょう",
    "m": {
      "en": "impression",
      "zh-TW": "印象",
      "zh-CN": "印象",
      "ko": "인상",
      "vi": "ấn tượng",
      "id": "kesan"
    },
    "pos": "verb-godan",
    "ex": "良い印象を与える",
    "syn": [
      "イメージ",
      "感じ",
      "感想"
    ]
  },
  {
    "id": "V0074",
    "w": "引退",
    "r": "いんたい",
    "m": {
      "en": "retirement",
      "zh-TW": "退休",
      "zh-CN": "退休",
      "ko": "은퇴",
      "vi": "nghỉ hưu",
      "id": "pensiun"
    },
    "pos": "i-adj",
    "ex": "とても引退と思う"
  },
  {
    "id": "V0075",
    "w": "植える",
    "r": "うえる",
    "m": {
      "en": "to plant",
      "zh-TW": "種植",
      "zh-CN": "种植",
      "ko": "심다",
      "vi": "trồng",
      "id": "menanam"
    },
    "pos": "verb-ichidan",
    "ex": "植えることにする"
  },
  {
    "id": "V0076",
    "w": "飢える",
    "r": "うえる",
    "m": {
      "en": "to starve",
      "zh-TW": "飢餓",
      "zh-CN": "饥饿",
      "ko": "굶주리다",
      "vi": "đói",
      "id": "kelaparan"
    },
    "pos": "verb-ichidan",
    "ex": "飢えることにする"
  },
  {
    "id": "V0077",
    "w": "浮かぶ",
    "r": "うかぶ",
    "m": {
      "en": "to float",
      "zh-TW": "浮現",
      "zh-CN": "浮现",
      "ko": "떠오르다",
      "vi": "nổi",
      "id": "mengapung"
    },
    "pos": "verb-godan",
    "ex": "浮かぶことにする"
  },
  {
    "id": "V0078",
    "w": "浮かべる",
    "r": "うかべる",
    "m": {
      "en": "to float",
      "zh-TW": "使浮起",
      "zh-CN": "使浮起",
      "ko": "띄우다",
      "vi": "làm nổi",
      "id": "mengapungkan"
    },
    "pos": "verb-godan",
    "ex": "浮かべることにする"
  },
  {
    "id": "V0079",
    "w": "受け入れる",
    "r": "うけいれる",
    "m": {
      "en": "to accept",
      "zh-TW": "接受",
      "zh-CN": "接受",
      "ko": "받아들이다",
      "vi": "chấp nhận",
      "id": "menerima"
    },
    "pos": "verb-ichidan",
    "ex": "提案を受け入れる",
    "syn": [
      "承諾する",
      "承認する",
      "認める"
    ]
  },
  {
    "id": "V0080",
    "w": "受け取る",
    "r": "うけとる",
    "m": {
      "en": "to receive",
      "zh-TW": "收到",
      "zh-CN": "收到",
      "ko": "받다",
      "vi": "nhận",
      "id": "menerima"
    },
    "pos": "verb-godan",
    "ex": "受け取ることにする"
  },
  {
    "id": "V0081",
    "w": "動き",
    "r": "うごき",
    "m": {
      "en": "movement",
      "zh-TW": "動作",
      "zh-CN": "动作",
      "ko": "움직임",
      "vi": "chuyển động",
      "id": "gerakan"
    },
    "pos": "noun",
    "ex": "動きについて考える"
  },
  {
    "id": "V0082",
    "w": "失う",
    "r": "うしなう",
    "m": {
      "en": "to lose",
      "zh-TW": "失去",
      "zh-CN": "失去",
      "ko": "잃다",
      "vi": "mất",
      "id": "kalah"
    },
    "pos": "verb-godan",
    "ex": "失うことにする"
  },
  {
    "id": "V0083",
    "w": "薄い",
    "r": "うすい",
    "m": {
      "en": "thin",
      "zh-TW": "薄",
      "zh-CN": "薄",
      "ko": "얇은",
      "vi": "mỏng",
      "id": "tipis"
    },
    "pos": "i-adj",
    "ex": "とても薄いと思う"
  },
  {
    "id": "V0084",
    "w": "疑う",
    "r": "うたがう",
    "m": {
      "en": "to doubt",
      "zh-TW": "懷疑",
      "zh-CN": "怀疑",
      "ko": "의심하다",
      "vi": "nghi ngờ",
      "id": "meragukan"
    },
    "pos": "verb-godan",
    "ex": "彼の話を疑う",
    "syn": [
      "怪しむ",
      "不審に思う",
      "疑念を持つ"
    ]
  },
  {
    "id": "V0085",
    "w": "打ち合わせ",
    "r": "うちあわせ",
    "m": {
      "en": "meeting",
      "zh-TW": "會議",
      "zh-CN": "会议",
      "ko": "협의",
      "vi": "cuộc họp",
      "id": "rapat"
    },
    "pos": "noun",
    "ex": "打ち合わせについて考える"
  },
  {
    "id": "V0086",
    "w": "打ち消す",
    "r": "うちけす",
    "m": {
      "en": "to deny",
      "zh-TW": "否定",
      "zh-CN": "否定",
      "ko": "부정하다",
      "vi": "phủ nhận",
      "id": "menyangkal"
    },
    "pos": "verb-godan",
    "ex": "打ち消すことにする"
  },
  {
    "id": "V0087",
    "w": "写す",
    "r": "うつす",
    "m": {
      "en": "to copy",
      "zh-TW": "複製",
      "zh-CN": "复制",
      "ko": "베끼다",
      "vi": "sao chép",
      "id": "menyalin"
    },
    "pos": "verb-godan",
    "ex": "黒板の内容をノートに写す"
  },
  {
    "id": "V0088",
    "w": "移す",
    "r": "うつす",
    "m": {
      "en": "to move",
      "zh-TW": "移動",
      "zh-CN": "移动",
      "ko": "옮기다",
      "vi": "di chuyển",
      "id": "memindahkan"
    },
    "pos": "verb-godan",
    "ex": "荷物を別の部屋に移す"
  },
  {
    "id": "V0089",
    "w": "訴える",
    "r": "うったえる",
    "m": {
      "en": "to sue",
      "zh-TW": "起訴",
      "zh-CN": "起诉",
      "ko": "호소하다",
      "vi": "kiện",
      "id": "menggugat"
    },
    "pos": "verb-ichidan",
    "ex": "訴えることにする"
  },
  {
    "id": "V0090",
    "w": "奪う",
    "r": "うばう",
    "m": {
      "en": "to rob",
      "zh-TW": "奪取",
      "zh-CN": "夺取",
      "ko": "빼앗다",
      "vi": "cướp",
      "id": "merampas"
    },
    "pos": "verb-godan",
    "ex": "奪うことにする"
  },
  {
    "id": "V0091",
    "w": "生まれ",
    "r": "うまれ",
    "m": {
      "en": "birth",
      "zh-TW": "出生",
      "zh-CN": "出生",
      "ko": "태어남",
      "vi": "sinh ra",
      "id": "kelahiran"
    },
    "pos": "noun",
    "ex": "生まれについて考える"
  },
  {
    "id": "V0092",
    "w": "埋める",
    "r": "うめる",
    "m": {
      "en": "to bury",
      "zh-TW": "埋",
      "zh-CN": "埋",
      "ko": "묻다",
      "vi": "chôn",
      "id": "mengubur"
    },
    "pos": "verb-ichidan",
    "ex": "埋めることにする"
  },
  {
    "id": "V0093",
    "w": "裏",
    "r": "うら",
    "m": {
      "en": "back",
      "zh-TW": "背面",
      "zh-CN": "背面",
      "ko": "뒤",
      "vi": "sau",
      "id": "belakang"
    },
    "pos": "noun",
    "ex": "裏について考える"
  },
  {
    "id": "V0094",
    "w": "占う",
    "r": "うらなう",
    "m": {
      "en": "to tell fortune",
      "zh-TW": "占卜",
      "zh-CN": "占卜",
      "ko": "점치다",
      "vi": "bói",
      "id": "meramal"
    },
    "pos": "verb-godan",
    "ex": "占うことにする"
  },
  {
    "id": "V0095",
    "w": "恨む",
    "r": "うらむ",
    "m": {
      "en": "to resent",
      "zh-TW": "怨恨",
      "zh-CN": "怨恨",
      "ko": "원망하다",
      "vi": "oán hận",
      "id": "mendendam"
    },
    "pos": "verb-godan",
    "ex": "恨むことにする"
  },
  {
    "id": "V0096",
    "w": "売り切れ",
    "r": "うりきれ",
    "m": {
      "en": "sold out",
      "zh-TW": "售完",
      "zh-CN": "售完",
      "ko": "매진",
      "vi": "hết hàng",
      "id": "habis terjual"
    },
    "pos": "noun",
    "ex": "売り切れについて考える"
  },
  {
    "id": "V0097",
    "w": "潤う",
    "r": "うるおう",
    "m": {
      "en": "to moisten",
      "zh-TW": "滋潤",
      "zh-CN": "滋润",
      "ko": "촉촉해지다",
      "vi": "ẩm",
      "id": "melembapkan"
    },
    "pos": "verb-godan",
    "ex": "潤うことにする"
  },
  {
    "id": "V0098",
    "w": "煩い",
    "r": "うるさい",
    "m": {
      "en": "noisy",
      "zh-TW": "吵鬧",
      "zh-CN": "吵闹",
      "ko": "시끄러운",
      "vi": "ồn ào",
      "id": "berisik"
    },
    "pos": "i-adj",
    "ex": "とても煩いと思う"
  },
  {
    "id": "V0099",
    "w": "噂",
    "r": "うわさ",
    "m": {
      "en": "rumor",
      "zh-TW": "謠言",
      "zh-CN": "谣言",
      "ko": "소문",
      "vi": "tin đồn",
      "id": "gosip"
    },
    "pos": "noun",
    "ex": "噂について考える"
  },
  {
    "id": "V0100",
    "w": "運転",
    "r": "うんてん",
    "m": {
      "en": "driving",
      "zh-TW": "駕駛",
      "zh-CN": "驾驶",
      "ko": "운전",
      "vi": "lái xe",
      "id": "mengemudi"
    },
    "pos": "noun",
    "ex": "運転について考える"
  },
  {
    "id": "V0101",
    "w": "運動",
    "r": "うんどう",
    "m": {
      "en": "exercise",
      "zh-TW": "運動",
      "zh-CN": "运动",
      "ko": "운동",
      "vi": "vận động",
      "id": "olahraga"
    },
    "pos": "verb-godan",
    "ex": "運動ことにする"
  },
  {
    "id": "V0102",
    "w": "運命",
    "r": "うんめい",
    "m": {
      "en": "fate",
      "zh-TW": "命運",
      "zh-CN": "命运",
      "ko": "운명",
      "vi": "số phận",
      "id": "takdir"
    },
    "pos": "i-adj",
    "ex": "とても運命と思う"
  },
  {
    "id": "V0103",
    "w": "映画",
    "r": "えいが",
    "m": {
      "en": "movie",
      "zh-TW": "電影",
      "zh-CN": "电影",
      "ko": "영화",
      "vi": "phim",
      "id": "film"
    },
    "pos": "noun",
    "ex": "週末に映画を見に行く"
  },
  {
    "id": "V0104",
    "w": "永久",
    "r": "えいきゅう",
    "m": {
      "en": "permanent",
      "zh-TW": "永久",
      "zh-CN": "永久",
      "ko": "영구",
      "vi": "vĩnh viễn",
      "id": "permanen"
    },
    "pos": "verb-godan",
    "ex": "永久ことにする"
  },
  {
    "id": "V0105",
    "w": "影響",
    "r": "えいきょう",
    "m": {
      "en": "influence",
      "zh-TW": "影響",
      "zh-CN": "影响",
      "ko": "영향",
      "vi": "ảnh hưởng",
      "id": "pengaruh"
    },
    "pos": "verb-godan",
    "ex": "環境に影響を与える",
    "syn": [
      "作用",
      "効果",
      "インパクト"
    ]
  },
  {
    "id": "V0106",
    "w": "営業",
    "r": "えいぎょう",
    "m": {
      "en": "business",
      "zh-TW": "營業",
      "zh-CN": "营业",
      "ko": "영업",
      "vi": "kinh doanh",
      "id": "bisnis"
    },
    "pos": "verb-godan",
    "ex": "営業ことにする"
  },
  {
    "id": "V0107",
    "w": "衛生",
    "r": "えいせい",
    "m": {
      "en": "hygiene",
      "zh-TW": "衛生",
      "zh-CN": "卫生",
      "ko": "위생",
      "vi": "vệ sinh",
      "id": "kebersihan"
    },
    "pos": "i-adj",
    "ex": "とても衛生と思う"
  },
  {
    "id": "V0108",
    "w": "英雄",
    "r": "えいゆう",
    "m": {
      "en": "hero",
      "zh-TW": "英雄",
      "zh-CN": "英雄",
      "ko": "영웅",
      "vi": "anh hùng",
      "id": "pahlawan"
    },
    "pos": "verb-godan",
    "ex": "英雄ことにする"
  },
  {
    "id": "V0109",
    "w": "栄養",
    "r": "えいよう",
    "m": {
      "en": "nutrition",
      "zh-TW": "營養",
      "zh-CN": "营养",
      "ko": "영양",
      "vi": "dinh dưỡng",
      "id": "nutrisi"
    },
    "pos": "verb-godan",
    "ex": "栄養ことにする"
  },
  {
    "id": "V0110",
    "w": "笑顔",
    "r": "えがお",
    "m": {
      "en": "smile",
      "zh-TW": "笑容",
      "zh-CN": "笑容",
      "ko": "웃는 얼굴",
      "vi": "nụ cười",
      "id": "senyum"
    },
    "pos": "noun",
    "ex": "笑顔について考える"
  },
  {
    "id": "V0111",
    "w": "描く",
    "r": "えがく",
    "m": {
      "en": "to draw",
      "zh-TW": "描繪",
      "zh-CN": "描绘",
      "ko": "그리다",
      "vi": "vẽ",
      "id": "menggambar"
    },
    "pos": "verb-godan",
    "ex": "描くことにする"
  },
  {
    "id": "V0112",
    "w": "液体",
    "r": "えきたい",
    "m": {
      "en": "liquid",
      "zh-TW": "液體",
      "zh-CN": "液体",
      "ko": "액체",
      "vi": "chất lỏng",
      "id": "cairan"
    },
    "pos": "i-adj",
    "ex": "とても液体と思う"
  },
  {
    "id": "V0113",
    "w": "枝",
    "r": "えだ",
    "m": {
      "en": "branch",
      "zh-TW": "樹枝",
      "zh-CN": "树枝",
      "ko": "가지",
      "vi": "cành",
      "id": "cabang"
    },
    "pos": "noun",
    "ex": "枝について考える"
  },
  {
    "id": "V0114",
    "w": "得る",
    "r": "える",
    "m": {
      "en": "to obtain",
      "zh-TW": "獲得",
      "zh-CN": "获得",
      "ko": "얻다",
      "vi": "đạt được",
      "id": "mendapatkan"
    },
    "pos": "verb-ichidan",
    "ex": "得ることにする"
  },
  {
    "id": "V0115",
    "w": "円",
    "r": "えん",
    "m": {
      "en": "yen",
      "zh-TW": "日圓",
      "zh-CN": "日元",
      "ko": "엔",
      "vi": "yên",
      "id": "yen"
    },
    "pos": "noun",
    "ex": "500円の商品を買う"
  },
  {
    "id": "V0116",
    "w": "演技",
    "r": "えんぎ",
    "m": {
      "en": "acting",
      "zh-TW": "演技",
      "zh-CN": "演技",
      "ko": "연기",
      "vi": "diễn xuất",
      "id": "akting"
    },
    "pos": "noun",
    "ex": "演技について考える"
  },
  {
    "id": "V0117",
    "w": "延期",
    "r": "えんき",
    "m": {
      "en": "postponement",
      "zh-TW": "延期",
      "zh-CN": "延期",
      "ko": "연기",
      "vi": "hoãn",
      "id": "penundaan"
    },
    "pos": "noun",
    "ex": "延期について考える"
  },
  {
    "id": "V0118",
    "w": "演劇",
    "r": "えんげき",
    "m": {
      "en": "drama",
      "zh-TW": "戲劇",
      "zh-CN": "戏剧",
      "ko": "연극",
      "vi": "kịch",
      "id": "drama"
    },
    "pos": "noun",
    "ex": "演劇について考える"
  },
  {
    "id": "V0119",
    "w": "援助",
    "r": "えんじょ",
    "m": {
      "en": "assistance",
      "zh-TW": "援助",
      "zh-CN": "援助",
      "ko": "원조",
      "vi": "viện trợ",
      "id": "bantuan"
    },
    "pos": "noun",
    "ex": "援助について考える"
  },
  {
    "id": "V0120",
    "w": "演説",
    "r": "えんぜつ",
    "m": {
      "en": "speech",
      "zh-TW": "演講",
      "zh-CN": "演讲",
      "ko": "연설",
      "vi": "diễn thuyết",
      "id": "pidato"
    },
    "pos": "verb-godan",
    "ex": "演説ことにする"
  },
  {
    "id": "V0121",
    "w": "演奏",
    "r": "えんそう",
    "m": {
      "en": "performance",
      "zh-TW": "演奏",
      "zh-CN": "演奏",
      "ko": "연주",
      "vi": "biểu diễn",
      "id": "pertunjukan"
    },
    "pos": "verb-godan",
    "ex": "演奏ことにする"
  },
  {
    "id": "V0122",
    "w": "遠足",
    "r": "えんそく",
    "m": {
      "en": "excursion",
      "zh-TW": "遠足",
      "zh-CN": "远足",
      "ko": "소풍",
      "vi": "dã ngoại",
      "id": "piknik"
    },
    "pos": "verb-godan",
    "ex": "遠足ことにする"
  },
  {
    "id": "V0123",
    "w": "延長",
    "r": "えんちょう",
    "m": {
      "en": "extension",
      "zh-TW": "延長",
      "zh-CN": "延长",
      "ko": "연장",
      "vi": "kéo dài",
      "id": "perpanjangan"
    },
    "pos": "verb-godan",
    "ex": "延長ことにする"
  },
  {
    "id": "V0124",
    "w": "遠慮",
    "r": "えんりょ",
    "m": {
      "en": "reserve",
      "zh-TW": "客氣",
      "zh-CN": "客气",
      "ko": "사양",
      "vi": "e ngại",
      "id": "sungkan"
    },
    "pos": "noun",
    "ex": "遠慮について考える"
  },
  {
    "id": "V0125",
    "w": "追い越す",
    "r": "おいこす",
    "m": {
      "en": "to overtake",
      "zh-TW": "超越",
      "zh-CN": "超越",
      "ko": "앞지르다",
      "vi": "vượt qua",
      "id": "menyalip"
    },
    "pos": "verb-godan",
    "ex": "追い越すことにする"
  },
  {
    "id": "V0126",
    "w": "追いつく",
    "r": "おいつく",
    "m": {
      "en": "to catch up",
      "zh-TW": "趕上",
      "zh-CN": "赶上",
      "ko": "따라잡다",
      "vi": "đuổi kịp",
      "id": "menyusul"
    },
    "pos": "verb-godan",
    "ex": "追いつくことにする"
  },
  {
    "id": "V0127",
    "w": "応援",
    "r": "おうえん",
    "m": {
      "en": "support",
      "zh-TW": "支持",
      "zh-CN": "支持",
      "ko": "응원",
      "vi": "cổ vũ",
      "id": "dukungan"
    },
    "pos": "noun",
    "ex": "応援について考える"
  },
  {
    "id": "V0128",
    "w": "応じる",
    "r": "おうじる",
    "m": {
      "en": "to respond",
      "zh-TW": "應對",
      "zh-CN": "应对",
      "ko": "응하다",
      "vi": "đáp ứng",
      "id": "merespon"
    },
    "pos": "verb-godan",
    "ex": "応じることにする"
  },
  {
    "id": "V0129",
    "w": "往復",
    "r": "おうふく",
    "m": {
      "en": "round trip",
      "zh-TW": "往返",
      "zh-CN": "往返",
      "ko": "왕복",
      "vi": "khứ hồi",
      "id": "pulang pergi"
    },
    "pos": "verb-godan",
    "ex": "往復ことにする"
  },
  {
    "id": "V0130",
    "w": "応用",
    "r": "おうよう",
    "m": {
      "en": "application",
      "zh-TW": "應用",
      "zh-CN": "应用",
      "ko": "응용",
      "vi": "ứng dụng",
      "id": "aplikasi"
    },
    "pos": "verb-godan",
    "ex": "応用ことにする"
  },
  {
    "id": "V0131",
    "w": "終える",
    "r": "おえる",
    "m": {
      "en": "to finish",
      "zh-TW": "結束",
      "zh-CN": "结束",
      "ko": "끝내다",
      "vi": "kết thúc",
      "id": "menyelesaikan"
    },
    "pos": "verb-ichidan",
    "ex": "終えることにする"
  },
  {
    "id": "V0132",
    "w": "大方",
    "r": "おおかた",
    "m": {
      "en": "mostly",
      "zh-TW": "大部分",
      "zh-CN": "大部分",
      "ko": "대부분",
      "vi": "phần lớn",
      "id": "kebanyakan"
    },
    "pos": "noun",
    "ex": "大方について考える"
  },
  {
    "id": "V0133",
    "w": "大げさ",
    "r": "おおげさ",
    "m": {
      "en": "exaggerated",
      "zh-TW": "誇張",
      "zh-CN": "夸张",
      "ko": "과장된",
      "vi": "phóng đại",
      "id": "berlebihan"
    },
    "pos": "noun",
    "ex": "大げさについて考える"
  },
  {
    "id": "V0134",
    "w": "大雑把",
    "r": "おおざっぱ",
    "m": {
      "en": "rough",
      "zh-TW": "粗略",
      "zh-CN": "粗略",
      "ko": "대충",
      "vi": "sơ sài",
      "id": "kasar"
    },
    "pos": "noun",
    "ex": "大雑把について考える"
  },
  {
    "id": "V0135",
    "w": "大通り",
    "r": "おおどおり",
    "m": {
      "en": "main street",
      "zh-TW": "大街",
      "zh-CN": "大街",
      "ko": "큰길",
      "vi": "đại lộ",
      "id": "jalan utama"
    },
    "pos": "noun",
    "ex": "大通りについて考える"
  },
  {
    "id": "V0136",
    "w": "大幅",
    "r": "おおはば",
    "m": {
      "en": "large",
      "zh-TW": "大幅",
      "zh-CN": "大幅",
      "ko": "대폭",
      "vi": "lớn",
      "id": "besar"
    },
    "pos": "noun",
    "ex": "大幅について考える"
  },
  {
    "id": "V0137",
    "w": "大まか",
    "r": "おおまか",
    "m": {
      "en": "rough",
      "zh-TW": "大致",
      "zh-CN": "大致",
      "ko": "대략",
      "vi": "đại khái",
      "id": "kasar"
    },
    "pos": "noun",
    "ex": "大まかについて考える"
  },
  {
    "id": "V0138",
    "w": "犯す",
    "r": "おかす",
    "m": {
      "en": "to commit",
      "zh-TW": "犯",
      "zh-CN": "犯",
      "ko": "저지르다",
      "vi": "phạm",
      "id": "melakukan"
    },
    "pos": "verb-godan",
    "ex": "犯すことにする"
  },
  {
    "id": "V0139",
    "w": "拝む",
    "r": "おがむ",
    "m": {
      "en": "to worship",
      "zh-TW": "拜",
      "zh-CN": "拜",
      "ko": "절하다",
      "vi": "bái",
      "id": "menyembah"
    },
    "pos": "verb-godan",
    "ex": "拝むことにする"
  },
  {
    "id": "V0140",
    "w": "補う",
    "r": "おぎなう",
    "m": {
      "en": "to supplement",
      "zh-TW": "補充",
      "zh-CN": "补充",
      "ko": "보충하다",
      "vi": "bổ sung",
      "id": "melengkapi"
    },
    "pos": "verb-godan",
    "ex": "補うことにする"
  },
  {
    "id": "V0141",
    "w": "奥",
    "r": "おく",
    "m": {
      "en": "interior",
      "zh-TW": "裡面",
      "zh-CN": "里面",
      "ko": "안쪽",
      "vi": "bên trong",
      "id": "bagian dalam"
    },
    "pos": "verb-godan",
    "ex": "奥ことにする"
  },
  {
    "id": "V0142",
    "w": "屋外",
    "r": "おくがい",
    "m": {
      "en": "outdoor",
      "zh-TW": "戶外",
      "zh-CN": "户外",
      "ko": "옥외",
      "vi": "ngoài trời",
      "id": "luar ruangan"
    },
    "pos": "i-adj",
    "ex": "とても屋外と思う"
  },
  {
    "id": "V0143",
    "w": "送り届ける",
    "r": "おくりとどける",
    "m": {
      "en": "to deliver",
      "zh-TW": "送達",
      "zh-CN": "送达",
      "ko": "배달하다",
      "vi": "giao",
      "id": "mengantar"
    },
    "pos": "verb-ichidan",
    "ex": "送り届けることにする"
  },
  {
    "id": "V0144",
    "w": "遅れ",
    "r": "おくれ",
    "m": {
      "en": "delay",
      "zh-TW": "延遲",
      "zh-CN": "延迟",
      "ko": "지연",
      "vi": "trễ",
      "id": "keterlambatan"
    },
    "pos": "noun",
    "ex": "遅れについて考える"
  },
  {
    "id": "V0145",
    "w": "怠る",
    "r": "おこたる",
    "m": {
      "en": "to neglect",
      "zh-TW": "怠慢",
      "zh-CN": "怠慢",
      "ko": "게을리하다",
      "vi": "lơ là",
      "id": "mengabaikan"
    },
    "pos": "verb-godan",
    "ex": "怠ることにする"
  },
  {
    "id": "V0146",
    "w": "行い",
    "r": "おこない",
    "m": {
      "en": "conduct",
      "zh-TW": "行為",
      "zh-CN": "行为",
      "ko": "행위",
      "vi": "hành vi",
      "id": "perilaku"
    },
    "pos": "i-adj",
    "ex": "とても行いと思う"
  },
  {
    "id": "V0147",
    "w": "起こす",
    "r": "おこす",
    "m": {
      "en": "to cause",
      "zh-TW": "引起",
      "zh-CN": "引起",
      "ko": "일으키다",
      "vi": "gây ra",
      "id": "menyebabkan"
    },
    "pos": "verb-godan",
    "ex": "起こすことにする"
  },
  {
    "id": "V0148",
    "w": "幼い",
    "r": "おさない",
    "m": {
      "en": "young",
      "zh-TW": "幼小",
      "zh-CN": "幼小",
      "ko": "어린",
      "vi": "nhỏ",
      "id": "muda"
    },
    "pos": "i-adj",
    "ex": "とても幼いと思う"
  },
  {
    "id": "V0149",
    "w": "収める",
    "r": "おさめる",
    "m": {
      "en": "to store",
      "zh-TW": "收藏",
      "zh-CN": "收藏",
      "ko": "거두다",
      "vi": "cất",
      "id": "menyimpan"
    },
    "pos": "verb-ichidan",
    "ex": "収めることにする"
  },
  {
    "id": "V0150",
    "w": "治める",
    "r": "おさめる",
    "m": {
      "en": "to govern",
      "zh-TW": "治理",
      "zh-CN": "治理",
      "ko": "다스리다",
      "vi": "cai trị",
      "id": "memerintah"
    },
    "pos": "verb-ichidan",
    "ex": "治めることにする"
  },
  {
    "id": "V0151",
    "w": "惜しい",
    "r": "おしい",
    "m": {
      "en": "regrettable",
      "zh-TW": "可惜",
      "zh-CN": "可惜",
      "ko": "아까운",
      "vi": "tiếc",
      "id": "sayang"
    },
    "pos": "i-adj",
    "ex": "とても惜しいと思う"
  },
  {
    "id": "V0152",
    "w": "押し入れ",
    "r": "おしいれ",
    "m": {
      "en": "closet",
      "zh-TW": "壁櫥",
      "zh-CN": "壁橱",
      "ko": "벽장",
      "vi": "tủ",
      "id": "lemari"
    },
    "pos": "noun",
    "ex": "押し入れについて考える"
  },
  {
    "id": "V0153",
    "w": "お知らせ",
    "r": "おしらせ",
    "m": {
      "en": "notice",
      "zh-TW": "通知",
      "zh-CN": "通知",
      "ko": "알림",
      "vi": "thông báo",
      "id": "pemberitahuan"
    },
    "pos": "noun",
    "ex": "お知らせについて考える"
  },
  {
    "id": "V0154",
    "w": "汚染",
    "r": "おせん",
    "m": {
      "en": "pollution",
      "zh-TW": "污染",
      "zh-CN": "污染",
      "ko": "오염",
      "vi": "ô nhiễm",
      "id": "polusi"
    },
    "pos": "noun",
    "ex": "汚染について考える"
  },
  {
    "id": "V0155",
    "w": "恐らく",
    "r": "おそらく",
    "m": {
      "en": "probably",
      "zh-TW": "大概",
      "zh-CN": "大概",
      "ko": "아마",
      "vi": "có lẽ",
      "id": "mungkin"
    },
    "pos": "verb-godan",
    "ex": "恐らくことにする"
  },
  {
    "id": "V0156",
    "w": "恐れ",
    "r": "おそれ",
    "m": {
      "en": "fear",
      "zh-TW": "恐懼",
      "zh-CN": "恐惧",
      "ko": "두려움",
      "vi": "sợ hãi",
      "id": "ketakutan"
    },
    "pos": "noun",
    "ex": "恐れについて考える"
  },
  {
    "id": "V0157",
    "w": "恐ろしい",
    "r": "おそろしい",
    "m": {
      "en": "terrible",
      "zh-TW": "可怕",
      "zh-CN": "可怕",
      "ko": "무서운",
      "vi": "đáng sợ",
      "id": "mengerikan"
    },
    "pos": "i-adj",
    "ex": "とても恐ろしいと思う"
  },
  {
    "id": "V0158",
    "w": "落ち着く",
    "r": "おちつく",
    "m": {
      "en": "to calm down",
      "zh-TW": "冷靜",
      "zh-CN": "冷静",
      "ko": "침착하다",
      "vi": "bình tĩnh",
      "id": "tenang"
    },
    "pos": "verb-godan",
    "ex": "落ち着くことにする"
  },
  {
    "id": "V0159",
    "w": "落ち葉",
    "r": "おちば",
    "m": {
      "en": "fallen leaves",
      "zh-TW": "落葉",
      "zh-CN": "落叶",
      "ko": "낙엽",
      "vi": "lá rụng",
      "id": "daun gugur"
    },
    "pos": "noun",
    "ex": "落ち葉について考える"
  },
  {
    "id": "V0160",
    "w": "おっしゃる",
    "r": "おっしゃる",
    "m": {
      "en": "to say",
      "zh-TW": "說",
      "zh-CN": "说",
      "ko": "말씀하시다",
      "vi": "nói",
      "id": "berkata"
    },
    "pos": "verb-godan",
    "ex": "おっしゃることにする"
  },
  {
    "id": "V0161",
    "w": "夫",
    "r": "おっと",
    "m": {
      "en": "husband",
      "zh-TW": "丈夫",
      "zh-CN": "丈夫",
      "ko": "남편",
      "vi": "chồng",
      "id": "suami"
    },
    "pos": "adverb",
    "ex": "夫考える"
  },
  {
    "id": "V0162",
    "w": "音",
    "r": "おと",
    "m": {
      "en": "sound",
      "zh-TW": "聲音",
      "zh-CN": "声音",
      "ko": "소리",
      "vi": "âm thanh",
      "id": "suara"
    },
    "pos": "adverb",
    "ex": "音考える"
  },
  {
    "id": "V0163",
    "w": "落とす",
    "r": "おとす",
    "m": {
      "en": "to drop",
      "zh-TW": "掉落",
      "zh-CN": "掉落",
      "ko": "떨어뜨리다",
      "vi": "làm rơi",
      "id": "menjatuhkan"
    },
    "pos": "verb-godan",
    "ex": "落とすことにする"
  },
  {
    "id": "V0164",
    "w": "大人しい",
    "r": "おとなしい",
    "m": {
      "en": "gentle",
      "zh-TW": "溫順",
      "zh-CN": "温顺",
      "ko": "얌전한",
      "vi": "hiền lành",
      "id": "pendiam"
    },
    "pos": "i-adj",
    "ex": "とても大人しいと思う"
  },
  {
    "id": "V0165",
    "w": "衰える",
    "r": "おとろえる",
    "m": {
      "en": "to decline",
      "zh-TW": "衰退",
      "zh-CN": "衰退",
      "ko": "쇠퇴하다",
      "vi": "suy yếu",
      "id": "melemah"
    },
    "pos": "verb-ichidan",
    "ex": "衰えることにする"
  },
  {
    "id": "V0166",
    "w": "驚かす",
    "r": "おどろかす",
    "m": {
      "en": "to surprise",
      "zh-TW": "驚嚇",
      "zh-CN": "惊吓",
      "ko": "놀라게하다",
      "vi": "làm ngạc nhiên",
      "id": "mengejutkan"
    },
    "pos": "verb-godan",
    "ex": "驚かすことにする"
  },
  {
    "id": "V0167",
    "w": "同い年",
    "r": "おないどし",
    "m": {
      "en": "same age",
      "zh-TW": "同年",
      "zh-CN": "同年",
      "ko": "동갑",
      "vi": "cùng tuổi",
      "id": "seumuran"
    },
    "pos": "noun",
    "ex": "同い年について考える"
  },
  {
    "id": "V0168",
    "w": "鬼",
    "r": "おに",
    "m": {
      "en": "demon",
      "zh-TW": "鬼",
      "zh-CN": "鬼",
      "ko": "도깨비",
      "vi": "quỷ",
      "id": "iblis"
    },
    "pos": "adverb",
    "ex": "鬼考える"
  },
  {
    "id": "V0169",
    "w": "各々",
    "r": "おのおの",
    "m": {
      "en": "each",
      "zh-TW": "各自",
      "zh-CN": "各自",
      "ko": "각자",
      "vi": "mỗi người",
      "id": "masing-masing"
    },
    "pos": "noun",
    "ex": "各々について考える"
  },
  {
    "id": "V0170",
    "w": "帯",
    "r": "おび",
    "m": {
      "en": "belt",
      "zh-TW": "帶",
      "zh-CN": "带",
      "ko": "띠",
      "vi": "đai",
      "id": "sabuk"
    },
    "pos": "noun",
    "ex": "帯について考える"
  },
  {
    "id": "V0171",
    "w": "お参り",
    "r": "おまいり",
    "m": {
      "en": "worship",
      "zh-TW": "參拜",
      "zh-CN": "参拜",
      "ko": "참배",
      "vi": "thăm viếng",
      "id": "berziarah"
    },
    "pos": "noun",
    "ex": "お参りについて考える"
  },
  {
    "id": "V0172",
    "w": "お祭り",
    "r": "おまつり",
    "m": {
      "en": "festival",
      "zh-TW": "祭典",
      "zh-CN": "祭典",
      "ko": "축제",
      "vi": "lễ hội",
      "id": "festival"
    },
    "pos": "noun",
    "ex": "お祭りについて考える"
  },
  {
    "id": "V0173",
    "w": "お見舞い",
    "r": "おみまい",
    "m": {
      "en": "visit",
      "zh-TW": "探病",
      "zh-CN": "探病",
      "ko": "병문안",
      "vi": "thăm bệnh",
      "id": "menjenguk"
    },
    "pos": "i-adj",
    "ex": "とてもお見舞いと思う"
  },
  {
    "id": "V0174",
    "w": "思い切り",
    "r": "おもいきり",
    "m": {
      "en": "with all one's might",
      "zh-TW": "盡情",
      "zh-CN": "尽情",
      "ko": "마음껏",
      "vi": "hết mình",
      "id": "sepenuh hati"
    },
    "pos": "noun",
    "ex": "思い切りについて考える"
  },
  {
    "id": "V0175",
    "w": "思い出す",
    "r": "おもいだす",
    "m": {
      "en": "to recall",
      "zh-TW": "想起",
      "zh-CN": "想起",
      "ko": "떠올리다",
      "vi": "nhớ lại",
      "id": "mengingat"
    },
    "pos": "verb-godan",
    "ex": "思い出すことにする"
  },
  {
    "id": "V0176",
    "w": "思いつく",
    "r": "おもいつく",
    "m": {
      "en": "to think of",
      "zh-TW": "想到",
      "zh-CN": "想到",
      "ko": "생각해내다",
      "vi": "nghĩ ra",
      "id": "terpikirkan"
    },
    "pos": "verb-godan",
    "ex": "思いつくことにする"
  },
  {
    "id": "V0177",
    "w": "思い付き",
    "r": "おもいつき",
    "m": {
      "en": "idea",
      "zh-TW": "靈感",
      "zh-CN": "灵感",
      "ko": "생각",
      "vi": "ý tưởng",
      "id": "ide"
    },
    "pos": "noun",
    "ex": "思い付きについて考える"
  },
  {
    "id": "V0178",
    "w": "重たい",
    "r": "おもたい",
    "m": {
      "en": "heavy",
      "zh-TW": "沉重",
      "zh-CN": "沉重",
      "ko": "무거운",
      "vi": "nặng",
      "id": "berat"
    },
    "pos": "i-adj",
    "ex": "とても重たいと思う"
  },
  {
    "id": "V0179",
    "w": "主に",
    "r": "おもに",
    "m": {
      "en": "mainly",
      "zh-TW": "主要",
      "zh-CN": "主要",
      "ko": "주로",
      "vi": "chủ yếu",
      "id": "terutama"
    },
    "pos": "adverb",
    "ex": "主に考える"
  },
  {
    "id": "V0180",
    "w": "表",
    "r": "おもて",
    "m": {
      "en": "surface",
      "zh-TW": "表面",
      "zh-CN": "表面",
      "ko": "겉",
      "vi": "mặt",
      "id": "permukaan"
    },
    "pos": "noun",
    "ex": "表について考える"
  },
  {
    "id": "V0181",
    "w": "親子",
    "r": "おやこ",
    "m": {
      "en": "parent and child",
      "zh-TW": "親子",
      "zh-CN": "亲子",
      "ko": "부모자식",
      "vi": "cha mẹ con",
      "id": "orang tua dan anak"
    },
    "pos": "noun",
    "ex": "親子について考える"
  },
  {
    "id": "V0182",
    "w": "泳ぎ",
    "r": "およぎ",
    "m": {
      "en": "swimming",
      "zh-TW": "游泳",
      "zh-CN": "游泳",
      "ko": "수영",
      "vi": "bơi lội",
      "id": "berenang"
    },
    "pos": "noun",
    "ex": "泳ぎについて考える"
  },
  {
    "id": "V0183",
    "w": "凡そ",
    "r": "およそ",
    "m": {
      "en": "approximately",
      "zh-TW": "大約",
      "zh-CN": "大约",
      "ko": "대략",
      "vi": "khoảng",
      "id": "kira-kira"
    },
    "pos": "noun",
    "ex": "凡そについて考える"
  },
  {
    "id": "V0184",
    "w": "及ぼす",
    "r": "およぼす",
    "m": {
      "en": "to exert",
      "zh-TW": "造成",
      "zh-CN": "造成",
      "ko": "끼치다",
      "vi": "gây ra",
      "id": "memberikan"
    },
    "pos": "verb-godan",
    "ex": "及ぼすことにする"
  },
  {
    "id": "V0185",
    "w": "折り返す",
    "r": "おりかえす",
    "m": {
      "en": "to turn back",
      "zh-TW": "折返",
      "zh-CN": "折返",
      "ko": "되돌아가다",
      "vi": "quay lại",
      "id": "kembali"
    },
    "pos": "verb-godan",
    "ex": "折り返すことにする"
  },
  {
    "id": "V0186",
    "w": "折る",
    "r": "おる",
    "m": {
      "en": "to fold",
      "zh-TW": "折",
      "zh-CN": "折",
      "ko": "접다",
      "vi": "gấp",
      "id": "melipat"
    },
    "pos": "verb-godan",
    "ex": "折ることにする"
  },
  {
    "id": "V0187",
    "w": "降ろす",
    "r": "おろす",
    "m": {
      "en": "to lower",
      "zh-TW": "放下",
      "zh-CN": "放下",
      "ko": "내리다",
      "vi": "hạ xuống",
      "id": "menurunkan"
    },
    "pos": "verb-godan",
    "ex": "降ろすことにする"
  },
  {
    "id": "V0188",
    "w": "卸す",
    "r": "おろす",
    "m": {
      "en": "to wholesale",
      "zh-TW": "批發",
      "zh-CN": "批发",
      "ko": "도매하다",
      "vi": "bán buôn",
      "id": "grosir"
    },
    "pos": "verb-godan",
    "ex": "卸すことにする"
  },
  {
    "id": "V0189",
    "w": "温暖",
    "r": "おんだん",
    "m": {
      "en": "warm",
      "zh-TW": "溫暖",
      "zh-CN": "温暖",
      "ko": "온난",
      "vi": "ấm áp",
      "id": "hangat"
    },
    "pos": "noun",
    "ex": "温暖について考える"
  },
  {
    "id": "V0190",
    "w": "カーテン",
    "r": "かーてん",
    "m": {
      "en": "curtain",
      "zh-TW": "窗簾",
      "zh-CN": "窗帘",
      "ko": "커튼",
      "vi": "rèm",
      "id": "gorden"
    },
    "pos": "noun",
    "ex": "カーテンについて考える"
  },
  {
    "id": "V0191",
    "w": "外観",
    "r": "がいかん",
    "m": {
      "en": "appearance",
      "zh-TW": "外觀",
      "zh-CN": "外观",
      "ko": "외관",
      "vi": "bề ngoài",
      "id": "penampilan"
    },
    "pos": "noun",
    "ex": "外観について考える"
  },
  {
    "id": "V0192",
    "w": "概況",
    "r": "がいきょう",
    "m": {
      "en": "overview",
      "zh-TW": "概況",
      "zh-CN": "概况",
      "ko": "개황",
      "vi": "tổng quan",
      "id": "gambaran umum"
    },
    "pos": "verb-godan",
    "ex": "概況ことにする"
  },
  {
    "id": "V0193",
    "w": "外交",
    "r": "がいこう",
    "m": {
      "en": "diplomacy",
      "zh-TW": "外交",
      "zh-CN": "外交",
      "ko": "외교",
      "vi": "ngoại giao",
      "id": "diplomasi"
    },
    "pos": "verb-godan",
    "ex": "外交ことにする"
  },
  {
    "id": "V0194",
    "w": "外出",
    "r": "がいしゅつ",
    "m": {
      "en": "going out",
      "zh-TW": "外出",
      "zh-CN": "外出",
      "ko": "외출",
      "vi": "ra ngoài",
      "id": "keluar"
    },
    "pos": "verb-godan",
    "ex": "外出ことにする"
  },
  {
    "id": "V0195",
    "w": "解除",
    "r": "かいじょ",
    "m": {
      "en": "cancellation",
      "zh-TW": "解除",
      "zh-CN": "解除",
      "ko": "해제",
      "vi": "hủy bỏ",
      "id": "pembatalan"
    },
    "pos": "noun",
    "ex": "解除について考える"
  },
  {
    "id": "V0196",
    "w": "解消",
    "r": "かいしょう",
    "m": {
      "en": "resolution",
      "zh-TW": "消除",
      "zh-CN": "消除",
      "ko": "해소",
      "vi": "giải quyết",
      "id": "penyelesaian"
    },
    "pos": "verb-godan",
    "ex": "解消ことにする"
  },
  {
    "id": "V0197",
    "w": "改善",
    "r": "かいぜん",
    "m": {
      "en": "improvement",
      "zh-TW": "改善",
      "zh-CN": "改善",
      "ko": "개선",
      "vi": "cải thiện",
      "id": "perbaikan"
    },
    "pos": "noun",
    "ex": "改善について考える"
  },
  {
    "id": "V0198",
    "w": "解説",
    "r": "かいせつ",
    "m": {
      "en": "commentary",
      "zh-TW": "解說",
      "zh-CN": "解说",
      "ko": "해설",
      "vi": "giải thích",
      "id": "penjelasan"
    },
    "pos": "verb-godan",
    "ex": "解説ことにする"
  },
  {
    "id": "V0199",
    "w": "改造",
    "r": "かいぞう",
    "m": {
      "en": "remodeling",
      "zh-TW": "改造",
      "zh-CN": "改造",
      "ko": "개조",
      "vi": "cải tạo",
      "id": "renovasi"
    },
    "pos": "verb-godan",
    "ex": "改造ことにする"
  },
  {
    "id": "V0200",
    "w": "回答",
    "r": "かいとう",
    "m": {
      "en": "answer",
      "zh-TW": "回答",
      "zh-CN": "回答",
      "ko": "회답",
      "vi": "câu trả lời",
      "id": "jawaban"
    },
    "pos": "verb-godan",
    "ex": "回答ことにする"
  },
  {
    "id": "V0201",
    "w": "解答",
    "r": "かいとう",
    "m": {
      "en": "solution",
      "zh-TW": "解答",
      "zh-CN": "解答",
      "ko": "해답",
      "vi": "đáp án",
      "id": "solusi"
    },
    "pos": "verb-godan",
    "ex": "解答ことにする"
  },
  {
    "id": "V0202",
    "w": "回復",
    "r": "かいふく",
    "m": {
      "en": "recovery",
      "zh-TW": "恢復",
      "zh-CN": "恢复",
      "ko": "회복",
      "vi": "phục hồi",
      "id": "pemulihan"
    },
    "pos": "verb-godan",
    "ex": "回復ことにする"
  },
  {
    "id": "V0203",
    "w": "買い物",
    "r": "かいもの",
    "m": {
      "en": "shopping",
      "zh-TW": "購物",
      "zh-CN": "购物",
      "ko": "쇼핑",
      "vi": "mua sắm",
      "id": "belanja"
    },
    "pos": "noun",
    "ex": "買い物について考える"
  },
  {
    "id": "V0204",
    "w": "帰り",
    "r": "かえり",
    "m": {
      "en": "return",
      "zh-TW": "回程",
      "zh-CN": "回程",
      "ko": "돌아옴",
      "vi": "về",
      "id": "pulang"
    },
    "pos": "noun",
    "ex": "帰りについて考える"
  },
  {
    "id": "V0205",
    "w": "顔色",
    "r": "かおいろ",
    "m": {
      "en": "complexion",
      "zh-TW": "臉色",
      "zh-CN": "脸色",
      "ko": "안색",
      "vi": "sắc mặt",
      "id": "warna muka"
    },
    "pos": "noun",
    "ex": "顔色について考える"
  },
  {
    "id": "V0206",
    "w": "輝く",
    "r": "かがやく",
    "m": {
      "en": "to shine",
      "zh-TW": "閃耀",
      "zh-CN": "闪耀",
      "ko": "빛나다",
      "vi": "tỏa sáng",
      "id": "bersinar"
    },
    "pos": "verb-godan",
    "ex": "輝くことにする"
  },
  {
    "id": "V0207",
    "w": "書き取り",
    "r": "かきとり",
    "m": {
      "en": "dictation",
      "zh-TW": "聽寫",
      "zh-CN": "听写",
      "ko": "받아쓰기",
      "vi": "chép chính tả",
      "id": "dikte"
    },
    "pos": "noun",
    "ex": "書き取りについて考える"
  },
  {
    "id": "V0208",
    "w": "書き留める",
    "r": "かきとめる",
    "m": {
      "en": "to write down",
      "zh-TW": "記下",
      "zh-CN": "记下",
      "ko": "적어두다",
      "vi": "ghi lại",
      "id": "mencatat"
    },
    "pos": "verb-ichidan",
    "ex": "書き留めることにする"
  },
  {
    "id": "V0209",
    "w": "限り",
    "r": "かぎり",
    "m": {
      "en": "limit",
      "zh-TW": "限度",
      "zh-CN": "限度",
      "ko": "한도",
      "vi": "giới hạn",
      "id": "batas"
    },
    "pos": "noun",
    "ex": "限りについて考える"
  },
  {
    "id": "V0210",
    "w": "限る",
    "r": "かぎる",
    "m": {
      "en": "to limit",
      "zh-TW": "限制",
      "zh-CN": "限制",
      "ko": "제한하다",
      "vi": "hạn chế",
      "id": "membatasi"
    },
    "pos": "verb-godan",
    "ex": "限ることにする"
  },
  {
    "id": "V0211",
    "w": "掻く",
    "r": "かく",
    "m": {
      "en": "to scratch",
      "zh-TW": "抓",
      "zh-CN": "抓",
      "ko": "긁다",
      "vi": "gãi",
      "id": "menggaruk"
    },
    "pos": "verb-godan",
    "ex": "掻くことにする"
  },
  {
    "id": "V0212",
    "w": "学",
    "r": "がく",
    "m": {
      "en": "study",
      "zh-TW": "學",
      "zh-CN": "学",
      "ko": "학",
      "vi": "học",
      "id": "belajar"
    },
    "pos": "verb-godan",
    "ex": "学ことにする"
  },
  {
    "id": "V0213",
    "w": "格差",
    "r": "かくさ",
    "m": {
      "en": "gap",
      "zh-TW": "差距",
      "zh-CN": "差距",
      "ko": "격차",
      "vi": "khoảng cách",
      "id": "kesenjangan"
    },
    "pos": "noun",
    "ex": "格差について考える"
  },
  {
    "id": "V0214",
    "w": "拡散",
    "r": "かくさん",
    "m": {
      "en": "spread",
      "zh-TW": "擴散",
      "zh-CN": "扩散",
      "ko": "확산",
      "vi": "lan truyền",
      "id": "penyebaran"
    },
    "pos": "noun",
    "ex": "拡散について考える"
  },
  {
    "id": "V0215",
    "w": "確実",
    "r": "かくじつ",
    "m": {
      "en": "certain",
      "zh-TW": "確實",
      "zh-CN": "确实",
      "ko": "확실",
      "vi": "chắc chắn",
      "id": "pasti"
    },
    "pos": "verb-godan",
    "ex": "確実ことにする"
  },
  {
    "id": "V0216",
    "w": "学者",
    "r": "がくしゃ",
    "m": {
      "en": "scholar",
      "zh-TW": "學者",
      "zh-CN": "学者",
      "ko": "학자",
      "vi": "học giả",
      "id": "sarjana"
    },
    "pos": "noun",
    "ex": "学者について考える"
  },
  {
    "id": "V0217",
    "w": "確信",
    "r": "かくしん",
    "m": {
      "en": "conviction",
      "zh-TW": "確信",
      "zh-CN": "确信",
      "ko": "확신",
      "vi": "tin chắc",
      "id": "keyakinan"
    },
    "pos": "noun",
    "ex": "確信について考える"
  },
  {
    "id": "V0218",
    "w": "拡大",
    "r": "かくだい",
    "m": {
      "en": "expansion",
      "zh-TW": "擴大",
      "zh-CN": "扩大",
      "ko": "확대",
      "vi": "mở rộng",
      "id": "perluasan"
    },
    "pos": "i-adj",
    "ex": "とても拡大と思う"
  },
  {
    "id": "V0219",
    "w": "確定",
    "r": "かくてい",
    "m": {
      "en": "decision",
      "zh-TW": "確定",
      "zh-CN": "确定",
      "ko": "확정",
      "vi": "xác định",
      "id": "keputusan"
    },
    "pos": "i-adj",
    "ex": "とても確定と思う"
  },
  {
    "id": "V0220",
    "w": "角度",
    "r": "かくど",
    "m": {
      "en": "angle",
      "zh-TW": "角度",
      "zh-CN": "角度",
      "ko": "각도",
      "vi": "góc độ",
      "id": "sudut"
    },
    "pos": "noun",
    "ex": "角度について考える"
  },
  {
    "id": "V0221",
    "w": "獲得",
    "r": "かくとく",
    "m": {
      "en": "acquisition",
      "zh-TW": "獲得",
      "zh-CN": "获得",
      "ko": "획득",
      "vi": "đạt được",
      "id": "perolehan"
    },
    "pos": "verb-godan",
    "ex": "獲得ことにする"
  },
  {
    "id": "V0222",
    "w": "確保",
    "r": "かくほ",
    "m": {
      "en": "secure",
      "zh-TW": "確保",
      "zh-CN": "确保",
      "ko": "확보",
      "vi": "đảm bảo",
      "id": "memastikan"
    },
    "pos": "noun",
    "ex": "確保について考える"
  },
  {
    "id": "V0223",
    "w": "各地",
    "r": "かくち",
    "m": {
      "en": "various places",
      "zh-TW": "各地",
      "zh-CN": "各地",
      "ko": "각지",
      "vi": "các nơi",
      "id": "berbagai tempat"
    },
    "pos": "noun",
    "ex": "各地について考える"
  },
  {
    "id": "V0224",
    "w": "革命",
    "r": "かくめい",
    "m": {
      "en": "revolution",
      "zh-TW": "革命",
      "zh-CN": "革命",
      "ko": "혁명",
      "vi": "cách mạng",
      "id": "revolusi"
    },
    "pos": "i-adj",
    "ex": "とても革命と思う"
  },
  {
    "id": "V0225",
    "w": "確率",
    "r": "かくりつ",
    "m": {
      "en": "probability",
      "zh-TW": "概率",
      "zh-CN": "概率",
      "ko": "확률",
      "vi": "xác suất",
      "id": "probabilitas"
    },
    "pos": "verb-godan",
    "ex": "確率ことにする"
  },
  {
    "id": "V0226",
    "w": "確立",
    "r": "かくりつ",
    "m": {
      "en": "establishment",
      "zh-TW": "確立",
      "zh-CN": "确立",
      "ko": "확립",
      "vi": "thiết lập",
      "id": "pendirian"
    },
    "pos": "verb-godan",
    "ex": "確立ことにする"
  },
  {
    "id": "V0227",
    "w": "賭ける",
    "r": "かける",
    "m": {
      "en": "to bet",
      "zh-TW": "賭",
      "zh-CN": "赌",
      "ko": "걸다",
      "vi": "đặt cược",
      "id": "bertaruh"
    },
    "pos": "verb-ichidan",
    "ex": "賭けることにする"
  },
  {
    "id": "V0228",
    "w": "欠ける",
    "r": "かける",
    "m": {
      "en": "to lack",
      "zh-TW": "缺乏",
      "zh-CN": "缺乏",
      "ko": "빠지다",
      "vi": "thiếu",
      "id": "kekurangan"
    },
    "pos": "verb-ichidan",
    "ex": "欠けることにする"
  },
  {
    "id": "V0229",
    "w": "駆ける",
    "r": "かける",
    "m": {
      "en": "to run",
      "zh-TW": "奔跑",
      "zh-CN": "奔跑",
      "ko": "달리다",
      "vi": "chạy",
      "id": "berlari"
    },
    "pos": "verb-ichidan",
    "ex": "駆けることにする"
  },
  {
    "id": "V0230",
    "w": "掛け算",
    "r": "かけざん",
    "m": {
      "en": "multiplication",
      "zh-TW": "乘法",
      "zh-CN": "乘法",
      "ko": "곱셈",
      "vi": "phép nhân",
      "id": "perkalian"
    },
    "pos": "noun",
    "ex": "掛け算について考える"
  },
  {
    "id": "V0231",
    "w": "過去",
    "r": "かこ",
    "m": {
      "en": "past",
      "zh-TW": "過去",
      "zh-CN": "过去",
      "ko": "과거",
      "vi": "quá khứ",
      "id": "masa lalu"
    },
    "pos": "noun",
    "ex": "過去の経験を生かす"
  },
  {
    "id": "V0232",
    "w": "囲む",
    "r": "かこむ",
    "m": {
      "en": "to surround",
      "zh-TW": "圍繞",
      "zh-CN": "围绕",
      "ko": "둘러싸다",
      "vi": "bao quanh",
      "id": "mengelilingi"
    },
    "pos": "verb-godan",
    "ex": "囲むことにする"
  },
  {
    "id": "V0233",
    "w": "重なる",
    "r": "かさなる",
    "m": {
      "en": "to overlap",
      "zh-TW": "重疊",
      "zh-CN": "重叠",
      "ko": "겹치다",
      "vi": "chồng chéo",
      "id": "bertumpuk"
    },
    "pos": "verb-godan",
    "ex": "重なることにする"
  },
  {
    "id": "V0234",
    "w": "重ねる",
    "r": "かさねる",
    "m": {
      "en": "to pile up",
      "zh-TW": "堆疊",
      "zh-CN": "堆叠",
      "ko": "쌓다",
      "vi": "xếp chồng",
      "id": "menumpuk"
    },
    "pos": "verb-ichidan",
    "ex": "重ねることにする"
  },
  {
    "id": "V0235",
    "w": "飾り",
    "r": "かざり",
    "m": {
      "en": "decoration",
      "zh-TW": "裝飾",
      "zh-CN": "装饰",
      "ko": "장식",
      "vi": "trang trí",
      "id": "hiasan"
    },
    "pos": "noun",
    "ex": "飾りについて考える"
  },
  {
    "id": "V0236",
    "w": "飾る",
    "r": "かざる",
    "m": {
      "en": "to decorate",
      "zh-TW": "裝飾",
      "zh-CN": "装饰",
      "ko": "장식하다",
      "vi": "trang trí",
      "id": "menghias"
    },
    "pos": "verb-godan",
    "ex": "飾ることにする"
  },
  {
    "id": "V0237",
    "w": "火事",
    "r": "かじ",
    "m": {
      "en": "fire",
      "zh-TW": "火災",
      "zh-CN": "火灾",
      "ko": "화재",
      "vi": "hỏa hoạn",
      "id": "api"
    },
    "pos": "noun",
    "ex": "火事について考える"
  },
  {
    "id": "V0238",
    "w": "貸し出し",
    "r": "かしだし",
    "m": {
      "en": "lending",
      "zh-TW": "借出",
      "zh-CN": "借出",
      "ko": "대출",
      "vi": "cho mượn",
      "id": "peminjaman"
    },
    "pos": "noun",
    "ex": "貸し出しについて考える"
  },
  {
    "id": "V0239",
    "w": "菓子",
    "r": "かし",
    "m": {
      "en": "sweets",
      "zh-TW": "點心",
      "zh-CN": "点心",
      "ko": "과자",
      "vi": "bánh kẹo",
      "id": "kue"
    },
    "pos": "noun",
    "ex": "菓子について考える"
  },
  {
    "id": "V0240",
    "w": "数える",
    "r": "かぞえる",
    "m": {
      "en": "to count",
      "zh-TW": "數",
      "zh-CN": "数",
      "ko": "세다",
      "vi": "đếm",
      "id": "menghitung"
    },
    "pos": "verb-ichidan",
    "ex": "数えることにする"
  },
  {
    "id": "V0241",
    "w": "固い",
    "r": "かたい",
    "m": {
      "en": "hard",
      "zh-TW": "硬",
      "zh-CN": "硬",
      "ko": "딱딱한",
      "vi": "cứng",
      "id": "keras"
    },
    "pos": "i-adj",
    "ex": "とても固いと思う"
  },
  {
    "id": "V0242",
    "w": "片側",
    "r": "かたがわ",
    "m": {
      "en": "one side",
      "zh-TW": "單邊",
      "zh-CN": "单边",
      "ko": "한쪽",
      "vi": "một bên",
      "id": "satu sisi"
    },
    "pos": "noun",
    "ex": "片側について考える"
  },
  {
    "id": "V0243",
    "w": "固まる",
    "r": "かたまる",
    "m": {
      "en": "to harden",
      "zh-TW": "凝固",
      "zh-CN": "凝固",
      "ko": "굳다",
      "vi": "đông lại",
      "id": "mengeras"
    },
    "pos": "verb-godan",
    "ex": "固まることにする"
  },
  {
    "id": "V0244",
    "w": "傾く",
    "r": "かたむく",
    "m": {
      "en": "to lean",
      "zh-TW": "傾斜",
      "zh-CN": "倾斜",
      "ko": "기울다",
      "vi": "nghiêng",
      "id": "miring"
    },
    "pos": "verb-godan",
    "ex": "傾くことにする"
  },
  {
    "id": "V0245",
    "w": "固める",
    "r": "かためる",
    "m": {
      "en": "to harden",
      "zh-TW": "使堅固",
      "zh-CN": "使坚固",
      "ko": "굳히다",
      "vi": "làm cứng",
      "id": "mengeraskan"
    },
    "pos": "verb-ichidan",
    "ex": "固めることにする"
  },
  {
    "id": "V0246",
    "w": "語る",
    "r": "かたる",
    "m": {
      "en": "to talk",
      "zh-TW": "講述",
      "zh-CN": "讲述",
      "ko": "이야기하다",
      "vi": "kể",
      "id": "menceritakan"
    },
    "pos": "verb-godan",
    "ex": "語ることにする"
  },
  {
    "id": "V0247",
    "w": "価値",
    "r": "かち",
    "m": {
      "en": "value",
      "zh-TW": "價值",
      "zh-CN": "价值",
      "ko": "가치",
      "vi": "giá trị",
      "id": "nilai"
    },
    "pos": "noun",
    "ex": "価値について考える"
  },
  {
    "id": "V0248",
    "w": "勝ち",
    "r": "かち",
    "m": {
      "en": "win",
      "zh-TW": "勝利",
      "zh-CN": "胜利",
      "ko": "승리",
      "vi": "thắng",
      "id": "kemenangan"
    },
    "pos": "noun",
    "ex": "勝ちについて考える"
  },
  {
    "id": "V0249",
    "w": "課長",
    "r": "かちょう",
    "m": {
      "en": "section chief",
      "zh-TW": "課長",
      "zh-CN": "课长",
      "ko": "과장",
      "vi": "trưởng phòng",
      "id": "kepala bagian"
    },
    "pos": "verb-godan",
    "ex": "課長ことにする"
  },
  {
    "id": "V0250",
    "w": "がっかり",
    "r": "がっかり",
    "m": {
      "en": "disappointed",
      "zh-TW": "失望",
      "zh-CN": "失望",
      "ko": "실망",
      "vi": "thất vọng",
      "id": "kecewa"
    },
    "pos": "noun",
    "ex": "がっかりについて考える"
  },
  {
    "id": "V0251",
    "w": "活気",
    "r": "かっき",
    "m": {
      "en": "vigor",
      "zh-TW": "活力",
      "zh-CN": "活力",
      "ko": "활기",
      "vi": "sức sống",
      "id": "semangat"
    },
    "pos": "noun",
    "ex": "活気について考える"
  },
  {
    "id": "V0252",
    "w": "活躍",
    "r": "かつやく",
    "m": {
      "en": "activity",
      "zh-TW": "活躍",
      "zh-CN": "活跃",
      "ko": "활약",
      "vi": "hoạt động",
      "id": "aktivitas"
    },
    "pos": "verb-godan",
    "ex": "活躍ことにする"
  },
  {
    "id": "V0253",
    "w": "活用",
    "r": "かつよう",
    "m": {
      "en": "utilization",
      "zh-TW": "活用",
      "zh-CN": "活用",
      "ko": "활용",
      "vi": "sử dụng",
      "id": "pemanfaatan"
    },
    "pos": "verb-godan",
    "ex": "活用ことにする"
  },
  {
    "id": "V0254",
    "w": "活力",
    "r": "かつりょく",
    "m": {
      "en": "vitality",
      "zh-TW": "活力",
      "zh-CN": "活力",
      "ko": "활력",
      "vi": "sức sống",
      "id": "vitalitas"
    },
    "pos": "verb-godan",
    "ex": "活力ことにする"
  },
  {
    "id": "V0255",
    "w": "仮定",
    "r": "かてい",
    "m": {
      "en": "assumption",
      "zh-TW": "假定",
      "zh-CN": "假定",
      "ko": "가정",
      "vi": "giả định",
      "id": "asumsi"
    },
    "pos": "i-adj",
    "ex": "とても仮定と思う"
  },
  {
    "id": "V0256",
    "w": "家庭",
    "r": "かてい",
    "m": {
      "en": "home",
      "zh-TW": "家庭",
      "zh-CN": "家庭",
      "ko": "가정",
      "vi": "gia đình",
      "id": "rumah tangga"
    },
    "pos": "i-adj",
    "ex": "とても家庭と思う"
  },
  {
    "id": "V0257",
    "w": "過程",
    "r": "かてい",
    "m": {
      "en": "process",
      "zh-TW": "過程",
      "zh-CN": "过程",
      "ko": "과정",
      "vi": "quá trình",
      "id": "proses"
    },
    "pos": "i-adj",
    "ex": "とても過程と思う"
  },
  {
    "id": "V0258",
    "w": "課題",
    "r": "かだい",
    "m": {
      "en": "task",
      "zh-TW": "課題",
      "zh-CN": "课题",
      "ko": "과제",
      "vi": "bài tập",
      "id": "tugas"
    },
    "pos": "i-adj",
    "ex": "とても課題と思う"
  },
  {
    "id": "V0259",
    "w": "悲しみ",
    "r": "かなしみ",
    "m": {
      "en": "sadness",
      "zh-TW": "悲傷",
      "zh-CN": "悲伤",
      "ko": "슬픔",
      "vi": "nỗi buồn",
      "id": "kesedihan"
    },
    "pos": "noun",
    "ex": "悲しみについて考える"
  },
  {
    "id": "V0260",
    "w": "必ずしも",
    "r": "かならずしも",
    "m": {
      "en": "not necessarily",
      "zh-TW": "未必",
      "zh-CN": "未必",
      "ko": "반드시",
      "vi": "không nhất thiết",
      "id": "belum tentu"
    },
    "pos": "noun",
    "ex": "必ずしもについて考える"
  },
  {
    "id": "V0261",
    "w": "金持ち",
    "r": "かねもち",
    "m": {
      "en": "rich person",
      "zh-TW": "有錢人",
      "zh-CN": "有钱人",
      "ko": "부자",
      "vi": "người giàu",
      "id": "orang kaya"
    },
    "pos": "noun",
    "ex": "金持ちについて考える"
  },
  {
    "id": "V0262",
    "w": "株",
    "r": "かぶ",
    "m": {
      "en": "stock",
      "zh-TW": "股票",
      "zh-CN": "股票",
      "ko": "주식",
      "vi": "cổ phiếu",
      "id": "saham"
    },
    "pos": "verb-godan",
    "ex": "株ことにする"
  },
  {
    "id": "V0263",
    "w": "被る",
    "r": "かぶる",
    "m": {
      "en": "to put on",
      "zh-TW": "戴",
      "zh-CN": "戴",
      "ko": "쓰다",
      "vi": "đội",
      "id": "memakai"
    },
    "pos": "verb-godan",
    "ex": "被ることにする"
  },
  {
    "id": "V0264",
    "w": "構う",
    "r": "かまう",
    "m": {
      "en": "to mind",
      "zh-TW": "介意",
      "zh-CN": "介意",
      "ko": "상관하다",
      "vi": "quan tâm",
      "id": "pikiran"
    },
    "pos": "verb-godan",
    "ex": "構うことにする"
  },
  {
    "id": "V0265",
    "w": "我慢",
    "r": "がまん",
    "m": {
      "en": "patience",
      "zh-TW": "忍耐",
      "zh-CN": "忍耐",
      "ko": "참음",
      "vi": "nhẫn nại",
      "id": "kesabaran"
    },
    "pos": "noun",
    "ex": "痛みを我慢する"
  },
  {
    "id": "V0266",
    "w": "噛む",
    "r": "かむ",
    "m": {
      "en": "to bite",
      "zh-TW": "咬",
      "zh-CN": "咬",
      "ko": "씹다",
      "vi": "cắn",
      "id": "menggigit"
    },
    "pos": "verb-godan",
    "ex": "噛むことにする"
  },
  {
    "id": "V0267",
    "w": "画面",
    "r": "がめん",
    "m": {
      "en": "screen",
      "zh-TW": "螢幕",
      "zh-CN": "屏幕",
      "ko": "화면",
      "vi": "màn hình",
      "id": "layar"
    },
    "pos": "noun",
    "ex": "画面について考える"
  },
  {
    "id": "V0268",
    "w": "通う",
    "r": "かよう",
    "m": {
      "en": "to commute",
      "zh-TW": "往返",
      "zh-CN": "往返",
      "ko": "다니다",
      "vi": "đi lại",
      "id": "bolak-balik"
    },
    "pos": "verb-godan",
    "ex": "通うことにする"
  },
  {
    "id": "V0269",
    "w": "空っぽ",
    "r": "からっぽ",
    "m": {
      "en": "empty",
      "zh-TW": "空的",
      "zh-CN": "空的",
      "ko": "텅 빈",
      "vi": "trống rỗng",
      "id": "kosong"
    },
    "pos": "noun",
    "ex": "空っぽについて考える"
  },
  {
    "id": "V0270",
    "w": "刈る",
    "r": "かる",
    "m": {
      "en": "to cut",
      "zh-TW": "割",
      "zh-CN": "割",
      "ko": "깎다",
      "vi": "cắt",
      "id": "memotong"
    },
    "pos": "verb-godan",
    "ex": "刈ることにする"
  },
  {
    "id": "V0271",
    "w": "軽い",
    "r": "かるい",
    "m": {
      "en": "light",
      "zh-TW": "輕",
      "zh-CN": "轻",
      "ko": "가벼운",
      "vi": "nhẹ",
      "id": "ringan"
    },
    "pos": "i-adj",
    "ex": "軽い荷物で旅行する"
  },
  {
    "id": "V0272",
    "w": "枯れる",
    "r": "かれる",
    "m": {
      "en": "to wither",
      "zh-TW": "枯萎",
      "zh-CN": "枯萎",
      "ko": "시들다",
      "vi": "héo",
      "id": "layu"
    },
    "pos": "verb-ichidan",
    "ex": "枯れることにする"
  },
  {
    "id": "V0273",
    "w": "川",
    "r": "かわ",
    "m": {
      "en": "river",
      "zh-TW": "河",
      "zh-CN": "河",
      "ko": "강",
      "vi": "sông",
      "id": "sungai"
    },
    "pos": "noun",
    "ex": "川で魚を捕まえる"
  },
  {
    "id": "V0274",
    "w": "皮",
    "r": "かわ",
    "m": {
      "en": "skin",
      "zh-TW": "皮",
      "zh-CN": "皮",
      "ko": "가죽",
      "vi": "da",
      "id": "kulit"
    },
    "pos": "noun",
    "ex": "皮について考える"
  },
  {
    "id": "V0275",
    "w": "乾かす",
    "r": "かわかす",
    "m": {
      "en": "to dry",
      "zh-TW": "弄乾",
      "zh-CN": "弄干",
      "ko": "말리다",
      "vi": "làm khô",
      "id": "mengeringkan"
    },
    "pos": "verb-godan",
    "ex": "乾かすことにする"
  },
  {
    "id": "V0276",
    "w": "代わり",
    "r": "かわり",
    "m": {
      "en": "substitute",
      "zh-TW": "代替",
      "zh-CN": "代替",
      "ko": "대신",
      "vi": "thay thế",
      "id": "pengganti"
    },
    "pos": "noun",
    "ex": "代わりについて考える"
  },
  {
    "id": "V0277",
    "w": "変わり",
    "r": "かわり",
    "m": {
      "en": "change",
      "zh-TW": "變化",
      "zh-CN": "变化",
      "ko": "변화",
      "vi": "thay đổi",
      "id": "perubahan"
    },
    "pos": "noun",
    "ex": "変わりについて考える"
  },
  {
    "id": "V0278",
    "w": "缶",
    "r": "かん",
    "m": {
      "en": "can",
      "zh-TW": "罐",
      "zh-CN": "罐",
      "ko": "캔",
      "vi": "lon",
      "id": "kaleng"
    },
    "pos": "noun",
    "ex": "缶について考える"
  },
  {
    "id": "V0279",
    "w": "勘",
    "r": "かん",
    "m": {
      "en": "intuition",
      "zh-TW": "直覺",
      "zh-CN": "直觉",
      "ko": "감",
      "vi": "trực giác",
      "id": "intuisi"
    },
    "pos": "noun",
    "ex": "勘について考える"
  },
  {
    "id": "V0280",
    "w": "看板",
    "r": "かんばん",
    "m": {
      "en": "signboard",
      "zh-TW": "招牌",
      "zh-CN": "招牌",
      "ko": "간판",
      "vi": "biển hiệu",
      "id": "papan nama"
    },
    "pos": "noun",
    "ex": "看板について考える"
  },
  {
    "id": "V0281",
    "w": "完璧",
    "r": "かんぺき",
    "m": {
      "en": "perfect",
      "zh-TW": "完美",
      "zh-CN": "完美",
      "ko": "완벽",
      "vi": "hoàn hảo",
      "id": "sempurna"
    },
    "pos": "noun",
    "ex": "完璧について考える"
  },
  {
    "id": "V0282",
    "w": "管理",
    "r": "かんり",
    "m": {
      "en": "management",
      "zh-TW": "管理",
      "zh-CN": "管理",
      "ko": "관리",
      "vi": "quản lý",
      "id": "manajemen"
    },
    "pos": "noun",
    "ex": "管理について考える"
  },
  {
    "id": "V0283",
    "w": "関連",
    "r": "かんれん",
    "m": {
      "en": "relation",
      "zh-TW": "關聯",
      "zh-CN": "关联",
      "ko": "관련",
      "vi": "liên quan",
      "id": "hubungan"
    },
    "pos": "noun",
    "ex": "関連について考える"
  },
  {
    "id": "V0284",
    "w": "記憶",
    "r": "きおく",
    "m": {
      "en": "memory",
      "zh-TW": "記憶",
      "zh-CN": "记忆",
      "ko": "기억",
      "vi": "ký ức",
      "id": "ingatan"
    },
    "pos": "verb-godan",
    "ex": "記憶ことにする"
  },
  {
    "id": "V0285",
    "w": "気温",
    "r": "きおん",
    "m": {
      "en": "temperature",
      "zh-TW": "氣溫",
      "zh-CN": "气温",
      "ko": "기온",
      "vi": "nhiệt độ",
      "id": "suhu"
    },
    "pos": "noun",
    "ex": "気温について考える"
  },
  {
    "id": "V0286",
    "w": "効く",
    "r": "きく",
    "m": {
      "en": "to be effective",
      "zh-TW": "有效",
      "zh-CN": "有效",
      "ko": "효과있다",
      "vi": "có hiệu quả",
      "id": "efektif"
    },
    "pos": "verb-godan",
    "ex": "効くことにする"
  },
  {
    "id": "V0287",
    "w": "期限",
    "r": "きげん",
    "m": {
      "en": "deadline",
      "zh-TW": "期限",
      "zh-CN": "期限",
      "ko": "기한",
      "vi": "hạn chót",
      "id": "batas waktu"
    },
    "pos": "noun",
    "ex": "期限について考える"
  },
  {
    "id": "V0288",
    "w": "機嫌",
    "r": "きげん",
    "m": {
      "en": "mood",
      "zh-TW": "心情",
      "zh-CN": "心情",
      "ko": "기분",
      "vi": "tâm trạng",
      "id": "suasana hati"
    },
    "pos": "noun",
    "ex": "機嫌について考える"
  },
  {
    "id": "V0289",
    "w": "期限切れ",
    "r": "きげんぎれ",
    "m": {
      "en": "expired",
      "zh-TW": "過期",
      "zh-CN": "过期",
      "ko": "기한만료",
      "vi": "hết hạn",
      "id": "kadaluarsa"
    },
    "pos": "noun",
    "ex": "期限切れについて考える"
  },
  {
    "id": "V0290",
    "w": "刻む",
    "r": "きざむ",
    "m": {
      "en": "to carve",
      "zh-TW": "刻",
      "zh-CN": "刻",
      "ko": "새기다",
      "vi": "khắc",
      "id": "mengukir"
    },
    "pos": "verb-godan",
    "ex": "刻むことにする"
  },
  {
    "id": "V0291",
    "w": "傷",
    "r": "きず",
    "m": {
      "en": "wound",
      "zh-TW": "傷口",
      "zh-CN": "伤口",
      "ko": "상처",
      "vi": "vết thương",
      "id": "luka"
    },
    "pos": "noun",
    "ex": "傷について考える"
  },
  {
    "id": "V0292",
    "w": "築く",
    "r": "きずく",
    "m": {
      "en": "to build",
      "zh-TW": "建立",
      "zh-CN": "建立",
      "ko": "쌓다",
      "vi": "xây dựng",
      "id": "membangun"
    },
    "pos": "verb-godan",
    "ex": "築くことにする"
  },
  {
    "id": "V0293",
    "w": "貴重",
    "r": "きちょう",
    "m": {
      "en": "precious",
      "zh-TW": "珍貴",
      "zh-CN": "珍贵",
      "ko": "귀중",
      "vi": "quý giá",
      "id": "berharga"
    },
    "pos": "verb-godan",
    "ex": "貴重ことにする"
  },
  {
    "id": "V0294",
    "w": "きちんと",
    "r": "きちんと",
    "m": {
      "en": "properly",
      "zh-TW": "整齊",
      "zh-CN": "整齐",
      "ko": "제대로",
      "vi": "đàng hoàng",
      "id": "dengan benar"
    },
    "pos": "adverb",
    "ex": "きちんと考える"
  },
  {
    "id": "V0295",
    "w": "きっかけ",
    "r": "きっかけ",
    "m": {
      "en": "opportunity",
      "zh-TW": "契機",
      "zh-CN": "契机",
      "ko": "계기",
      "vi": "cơ hội",
      "id": "kesempatan"
    },
    "pos": "noun",
    "ex": "きっかけについて考える"
  },
  {
    "id": "V0296",
    "w": "気付く",
    "r": "きづく",
    "m": {
      "en": "to notice",
      "zh-TW": "注意到",
      "zh-CN": "注意到",
      "ko": "알아차리다",
      "vi": "nhận ra",
      "id": "pemberitahuan"
    },
    "pos": "verb-godan",
    "ex": "気付くことにする"
  },
  {
    "id": "V0297",
    "w": "記入",
    "r": "きにゅう",
    "m": {
      "en": "entry",
      "zh-TW": "填寫",
      "zh-CN": "填写",
      "ko": "기입",
      "vi": "điền vào",
      "id": "mengisi"
    },
    "pos": "verb-godan",
    "ex": "記入ことにする"
  },
  {
    "id": "V0298",
    "w": "記念",
    "r": "きねん",
    "m": {
      "en": "commemoration",
      "zh-TW": "紀念",
      "zh-CN": "纪念",
      "ko": "기념",
      "vi": "kỷ niệm",
      "id": "peringatan"
    },
    "pos": "noun",
    "ex": "記念について考える"
  },
  {
    "id": "V0299",
    "w": "機能",
    "r": "きのう",
    "m": {
      "en": "function",
      "zh-TW": "功能",
      "zh-CN": "功能",
      "ko": "기능",
      "vi": "chức năng",
      "id": "fungsi"
    },
    "pos": "verb-godan",
    "ex": "機能ことにする"
  },
  {
    "id": "V0300",
    "w": "基本",
    "r": "きほん",
    "m": {
      "en": "basic",
      "zh-TW": "基本",
      "zh-CN": "基本",
      "ko": "기본",
      "vi": "cơ bản",
      "id": "dasar"
    },
    "pos": "noun",
    "ex": "基本について考える"
  },
  {
    "id": "V0301",
    "w": "気味",
    "r": "きみ",
    "m": {
      "en": "feeling",
      "zh-TW": "感覺",
      "zh-CN": "感觉",
      "ko": "기미",
      "vi": "cảm giác",
      "id": "perasaan"
    },
    "pos": "noun",
    "ex": "気味について考える"
  },
  {
    "id": "V0302",
    "w": "君",
    "r": "きみ",
    "m": {
      "en": "you",
      "zh-TW": "你",
      "zh-CN": "你",
      "ko": "너",
      "vi": "bạn",
      "id": "kamu"
    },
    "pos": "noun",
    "ex": "君について考える"
  },
  {
    "id": "V0303",
    "w": "決まり",
    "r": "きまり",
    "m": {
      "en": "rule",
      "zh-TW": "規定",
      "zh-CN": "规定",
      "ko": "규칙",
      "vi": "quy định",
      "id": "aturan"
    },
    "pos": "noun",
    "ex": "決まりについて考える"
  },
  {
    "id": "V0304",
    "w": "気持ち",
    "r": "きもち",
    "m": {
      "en": "feeling",
      "zh-TW": "心情",
      "zh-CN": "心情",
      "ko": "기분",
      "vi": "tâm trạng",
      "id": "perasaan"
    },
    "pos": "noun",
    "ex": "気持ちを伝える"
  },
  {
    "id": "V0305",
    "w": "疑問",
    "r": "ぎもん",
    "m": {
      "en": "question",
      "zh-TW": "疑問",
      "zh-CN": "疑问",
      "ko": "의문",
      "vi": "nghi vấn",
      "id": "pertanyaan"
    },
    "pos": "noun",
    "ex": "疑問について考える"
  },
  {
    "id": "V0306",
    "w": "逆",
    "r": "ぎゃく",
    "m": {
      "en": "reverse",
      "zh-TW": "相反",
      "zh-CN": "相反",
      "ko": "역",
      "vi": "ngược lại",
      "id": "kebalikan"
    },
    "pos": "verb-godan",
    "ex": "逆ことにする"
  },
  {
    "id": "V0307",
    "w": "客",
    "r": "きゃく",
    "m": {
      "en": "guest",
      "zh-TW": "客人",
      "zh-CN": "客人",
      "ko": "손님",
      "vi": "khách",
      "id": "tamu"
    },
    "pos": "verb-godan",
    "ex": "お客様をお迎えする"
  },
  {
    "id": "V0308",
    "w": "脚本",
    "r": "きゃくほん",
    "m": {
      "en": "script",
      "zh-TW": "劇本",
      "zh-CN": "剧本",
      "ko": "각본",
      "vi": "kịch bản",
      "id": "naskah"
    },
    "pos": "noun",
    "ex": "脚本について考える"
  },
  {
    "id": "V0309",
    "w": "休暇",
    "r": "きゅうか",
    "m": {
      "en": "vacation",
      "zh-TW": "休假",
      "zh-CN": "休假",
      "ko": "휴가",
      "vi": "nghỉ phép",
      "id": "liburan"
    },
    "pos": "noun",
    "ex": "休暇について考える"
  },
  {
    "id": "V0310",
    "w": "休憩",
    "r": "きゅうけい",
    "m": {
      "en": "break",
      "zh-TW": "休息",
      "zh-CN": "休息",
      "ko": "휴식",
      "vi": "nghỉ ngơi",
      "id": "istirahat"
    },
    "pos": "i-adj",
    "ex": "とても休憩と思う"
  },
  {
    "id": "V0311",
    "w": "急激",
    "r": "きゅうげき",
    "m": {
      "en": "sudden",
      "zh-TW": "急劇",
      "zh-CN": "急剧",
      "ko": "급격",
      "vi": "đột ngột",
      "id": "tiba-tiba"
    },
    "pos": "noun",
    "ex": "急激について考える"
  },
  {
    "id": "V0312",
    "w": "救助",
    "r": "きゅうじょ",
    "m": {
      "en": "rescue",
      "zh-TW": "救助",
      "zh-CN": "救助",
      "ko": "구조",
      "vi": "cứu hộ",
      "id": "penyelamatan"
    },
    "pos": "noun",
    "ex": "救助について考える"
  },
  {
    "id": "V0313",
    "w": "急速",
    "r": "きゅうそく",
    "m": {
      "en": "rapid",
      "zh-TW": "急速",
      "zh-CN": "急速",
      "ko": "급속",
      "vi": "nhanh chóng",
      "id": "cepat"
    },
    "pos": "verb-godan",
    "ex": "急速ことにする"
  },
  {
    "id": "V0314",
    "w": "休養",
    "r": "きゅうよう",
    "m": {
      "en": "rest",
      "zh-TW": "休養",
      "zh-CN": "休养",
      "ko": "휴양",
      "vi": "nghỉ ngơi",
      "id": "istirahat"
    },
    "pos": "verb-godan",
    "ex": "休養ことにする"
  },
  {
    "id": "V0315",
    "w": "給与",
    "r": "きゅうよ",
    "m": {
      "en": "salary",
      "zh-TW": "薪水",
      "zh-CN": "薪水",
      "ko": "급여",
      "vi": "lương",
      "id": "gaji"
    },
    "pos": "noun",
    "ex": "給与について考える"
  },
  {
    "id": "V0316",
    "w": "許可",
    "r": "きょか",
    "m": {
      "en": "permission",
      "zh-TW": "許可",
      "zh-CN": "许可",
      "ko": "허가",
      "vi": "cho phép",
      "id": "izin"
    },
    "pos": "noun",
    "ex": "許可について考える"
  },
  {
    "id": "V0317",
    "w": "漁業",
    "r": "ぎょぎょう",
    "m": {
      "en": "fishery",
      "zh-TW": "漁業",
      "zh-CN": "渔业",
      "ko": "어업",
      "vi": "ngư nghiệp",
      "id": "perikanan"
    },
    "pos": "verb-godan",
    "ex": "漁業ことにする"
  },
  {
    "id": "V0318",
    "w": "距離",
    "r": "きょり",
    "m": {
      "en": "distance",
      "zh-TW": "距離",
      "zh-CN": "距离",
      "ko": "거리",
      "vi": "khoảng cách",
      "id": "jarak"
    },
    "pos": "noun",
    "ex": "距離について考える"
  },
  {
    "id": "V0319",
    "w": "記録",
    "r": "きろく",
    "m": {
      "en": "record",
      "zh-TW": "記錄",
      "zh-CN": "记录",
      "ko": "기록",
      "vi": "ghi chép",
      "id": "catatan"
    },
    "pos": "verb-godan",
    "ex": "記録ことにする"
  },
  {
    "id": "V0320",
    "w": "議論",
    "r": "ぎろん",
    "m": {
      "en": "discussion",
      "zh-TW": "討論",
      "zh-CN": "讨论",
      "ko": "논의",
      "vi": "thảo luận",
      "id": "diskusi"
    },
    "pos": "noun",
    "ex": "議論について考える"
  },
  {
    "id": "V0321",
    "w": "銀",
    "r": "ぎん",
    "m": {
      "en": "silver",
      "zh-TW": "銀",
      "zh-CN": "银",
      "ko": "은",
      "vi": "bạc",
      "id": "perak"
    },
    "pos": "noun",
    "ex": "銀について考える"
  },
  {
    "id": "V0322",
    "w": "金額",
    "r": "きんがく",
    "m": {
      "en": "amount",
      "zh-TW": "金額",
      "zh-CN": "金额",
      "ko": "금액",
      "vi": "số tiền",
      "id": "jumlah"
    },
    "pos": "verb-godan",
    "ex": "金額ことにする"
  },
  {
    "id": "V0323",
    "w": "緊急",
    "r": "きんきゅう",
    "m": {
      "en": "urgent",
      "zh-TW": "緊急",
      "zh-CN": "紧急",
      "ko": "긴급",
      "vi": "khẩn cấp",
      "id": "darurat"
    },
    "pos": "verb-godan",
    "ex": "緊急ことにする"
  },
  {
    "id": "V0324",
    "w": "近所",
    "r": "きんじょ",
    "m": {
      "en": "neighborhood",
      "zh-TW": "鄰居",
      "zh-CN": "邻居",
      "ko": "이웃",
      "vi": "hàng xóm",
      "id": "tetangga"
    },
    "pos": "noun",
    "ex": "近所について考える"
  },
  {
    "id": "V0325",
    "w": "禁煙",
    "r": "きんえん",
    "m": {
      "en": "no smoking",
      "zh-TW": "禁煙",
      "zh-CN": "禁烟",
      "ko": "금연",
      "vi": "cấm hút thuốc",
      "id": "dilarang merokok"
    },
    "pos": "noun",
    "ex": "禁煙について考える"
  },
  {
    "id": "V0326",
    "w": "近代",
    "r": "きんだい",
    "m": {
      "en": "modern",
      "zh-TW": "近代",
      "zh-CN": "近代",
      "ko": "근대",
      "vi": "cận đại",
      "id": "modern"
    },
    "pos": "i-adj",
    "ex": "とても近代と思う"
  },
  {
    "id": "V0327",
    "w": "金銭",
    "r": "きんせん",
    "m": {
      "en": "money",
      "zh-TW": "金錢",
      "zh-CN": "金钱",
      "ko": "금전",
      "vi": "tiền bạc",
      "id": "uang"
    },
    "pos": "noun",
    "ex": "金銭について考える"
  },
  {
    "id": "V0328",
    "w": "金属",
    "r": "きんぞく",
    "m": {
      "en": "metal",
      "zh-TW": "金屬",
      "zh-CN": "金属",
      "ko": "금속",
      "vi": "kim loại",
      "id": "logam"
    },
    "pos": "verb-godan",
    "ex": "金属ことにする"
  },
  {
    "id": "V0329",
    "w": "緊張",
    "r": "きんちょう",
    "m": {
      "en": "tension",
      "zh-TW": "緊張",
      "zh-CN": "紧张",
      "ko": "긴장",
      "vi": "căng thẳng",
      "id": "tegang"
    },
    "pos": "verb-godan",
    "ex": "緊張ことにする"
  },
  {
    "id": "V0330",
    "w": "筋肉",
    "r": "きんにく",
    "m": {
      "en": "muscle",
      "zh-TW": "肌肉",
      "zh-CN": "肌肉",
      "ko": "근육",
      "vi": "cơ bắp",
      "id": "otot"
    },
    "pos": "verb-godan",
    "ex": "筋肉ことにする"
  },
  {
    "id": "V0331",
    "w": "勤務",
    "r": "きんむ",
    "m": {
      "en": "work",
      "zh-TW": "工作",
      "zh-CN": "工作",
      "ko": "근무",
      "vi": "làm việc",
      "id": "pekerjaan"
    },
    "pos": "verb-godan",
    "ex": "勤務ことにする"
  },
  {
    "id": "V0332",
    "w": "空間",
    "r": "くうかん",
    "m": {
      "en": "space",
      "zh-TW": "空間",
      "zh-CN": "空间",
      "ko": "공간",
      "vi": "không gian",
      "id": "ruang"
    },
    "pos": "noun",
    "ex": "空間について考える"
  },
  {
    "id": "V0333",
    "w": "空気",
    "r": "くうき",
    "m": {
      "en": "air",
      "zh-TW": "空氣",
      "zh-CN": "空气",
      "ko": "공기",
      "vi": "không khí",
      "id": "udara"
    },
    "pos": "noun",
    "ex": "新鮮な空気を吸う"
  },
  {
    "id": "V0334",
    "w": "空港",
    "r": "くうこう",
    "m": {
      "en": "airport",
      "zh-TW": "機場",
      "zh-CN": "机场",
      "ko": "공항",
      "vi": "sân bay",
      "id": "bandara"
    },
    "pos": "verb-godan",
    "ex": "空港ことにする"
  },
  {
    "id": "V0335",
    "w": "偶然",
    "r": "ぐうぜん",
    "m": {
      "en": "accident",
      "zh-TW": "偶然",
      "zh-CN": "偶然",
      "ko": "우연",
      "vi": "tình cờ",
      "id": "kebetulan"
    },
    "pos": "noun",
    "ex": "偶然について考える"
  },
  {
    "id": "V0336",
    "w": "草",
    "r": "くさ",
    "m": {
      "en": "grass",
      "zh-TW": "草",
      "zh-CN": "草",
      "ko": "풀",
      "vi": "cỏ",
      "id": "rumput"
    },
    "pos": "noun",
    "ex": "庭の草を抜く"
  },
  {
    "id": "V0337",
    "w": "臭い",
    "r": "くさい",
    "m": {
      "en": "smelly",
      "zh-TW": "臭",
      "zh-CN": "臭",
      "ko": "냄새나는",
      "vi": "hôi",
      "id": "bau"
    },
    "pos": "i-adj",
    "ex": "とても臭いと思う"
  },
  {
    "id": "V0338",
    "w": "腐る",
    "r": "くさる",
    "m": {
      "en": "to rot",
      "zh-TW": "腐爛",
      "zh-CN": "腐烂",
      "ko": "썩다",
      "vi": "thối",
      "id": "membusuk"
    },
    "pos": "verb-godan",
    "ex": "腐ることにする"
  },
  {
    "id": "V0339",
    "w": "崩す",
    "r": "くずす",
    "m": {
      "en": "to break",
      "zh-TW": "弄壞",
      "zh-CN": "弄坏",
      "ko": "무너뜨리다",
      "vi": "phá hủy",
      "id": "memecahkan"
    },
    "pos": "verb-godan",
    "ex": "崩すことにする"
  },
  {
    "id": "V0340",
    "w": "崩れる",
    "r": "くずれる",
    "m": {
      "en": "to collapse",
      "zh-TW": "崩潰",
      "zh-CN": "崩溃",
      "ko": "무너지다",
      "vi": "sụp đổ",
      "id": "runtuh"
    },
    "pos": "verb-ichidan",
    "ex": "崩れることにする"
  },
  {
    "id": "V0341",
    "w": "薬",
    "r": "くすり",
    "m": {
      "en": "medicine",
      "zh-TW": "藥",
      "zh-CN": "药",
      "ko": "약",
      "vi": "thuốc",
      "id": "obat"
    },
    "pos": "noun",
    "ex": "薬を飲む"
  },
  {
    "id": "V0342",
    "w": "癖",
    "r": "くせ",
    "m": {
      "en": "habit",
      "zh-TW": "習慣",
      "zh-CN": "习惯",
      "ko": "버릇",
      "vi": "thói quen",
      "id": "kebiasaan"
    },
    "pos": "noun",
    "ex": "癖について考える"
  },
  {
    "id": "V0343",
    "w": "口",
    "r": "くち",
    "m": {
      "en": "mouth",
      "zh-TW": "嘴",
      "zh-CN": "嘴",
      "ko": "입",
      "vi": "miệng",
      "id": "mulut"
    },
    "pos": "noun",
    "ex": "口を開ける"
  },
  {
    "id": "V0344",
    "w": "口紅",
    "r": "くちべに",
    "m": {
      "en": "lipstick",
      "zh-TW": "口紅",
      "zh-CN": "口红",
      "ko": "립스틱",
      "vi": "son môi",
      "id": "lipstik"
    },
    "pos": "adverb",
    "ex": "口紅考える"
  },
  {
    "id": "V0345",
    "w": "靴",
    "r": "くつ",
    "m": {
      "en": "shoes",
      "zh-TW": "鞋",
      "zh-CN": "鞋",
      "ko": "신발",
      "vi": "giày",
      "id": "sepatu"
    },
    "pos": "verb-godan",
    "ex": "新しい靴を買う"
  },
  {
    "id": "V0346",
    "w": "苦痛",
    "r": "くつう",
    "m": {
      "en": "pain",
      "zh-TW": "痛苦",
      "zh-CN": "痛苦",
      "ko": "고통",
      "vi": "đau khổ",
      "id": "rasa sakit"
    },
    "pos": "verb-godan",
    "ex": "苦痛ことにする"
  },
  {
    "id": "V0347",
    "w": "国",
    "r": "くに",
    "m": {
      "en": "country",
      "zh-TW": "國家",
      "zh-CN": "国家",
      "ko": "나라",
      "vi": "đất nước",
      "id": "negara"
    },
    "pos": "adverb",
    "ex": "国考える"
  },
  {
    "id": "V0348",
    "w": "首",
    "r": "くび",
    "m": {
      "en": "neck",
      "zh-TW": "脖子",
      "zh-CN": "脖子",
      "ko": "목",
      "vi": "cổ",
      "id": "leher"
    },
    "pos": "noun",
    "ex": "首について考える"
  },
  {
    "id": "V0349",
    "w": "区分",
    "r": "くぶん",
    "m": {
      "en": "division",
      "zh-TW": "區分",
      "zh-CN": "区分",
      "ko": "구분",
      "vi": "phân chia",
      "id": "pembagian"
    },
    "pos": "noun",
    "ex": "区分について考える"
  },
  {
    "id": "V0350",
    "w": "組",
    "r": "くみ",
    "m": {
      "en": "group",
      "zh-TW": "組",
      "zh-CN": "组",
      "ko": "조",
      "vi": "nhóm",
      "id": "kelompok"
    },
    "pos": "noun",
    "ex": "組について考える"
  },
  {
    "id": "V0351",
    "w": "組み合わせ",
    "r": "くみあわせ",
    "m": {
      "en": "combination",
      "zh-TW": "組合",
      "zh-CN": "组合",
      "ko": "조합",
      "vi": "kết hợp",
      "id": "kombinasi"
    },
    "pos": "noun",
    "ex": "組み合わせについて考える"
  },
  {
    "id": "V0352",
    "w": "組み立てる",
    "r": "くみたてる",
    "m": {
      "en": "to assemble",
      "zh-TW": "組裝",
      "zh-CN": "组装",
      "ko": "조립하다",
      "vi": "lắp ráp",
      "id": "merakit"
    },
    "pos": "verb-ichidan",
    "ex": "組み立てることにする"
  },
  {
    "id": "V0353",
    "w": "雲",
    "r": "くも",
    "m": {
      "en": "cloud",
      "zh-TW": "雲",
      "zh-CN": "云",
      "ko": "구름",
      "vi": "mây",
      "id": "awan"
    },
    "pos": "noun",
    "ex": "空に雲が浮かんでいる"
  },
  {
    "id": "V0354",
    "w": "曇り",
    "r": "くもり",
    "m": {
      "en": "cloudy",
      "zh-TW": "多雲",
      "zh-CN": "多云",
      "ko": "흐림",
      "vi": "nhiều mây",
      "id": "berawan"
    },
    "pos": "noun",
    "ex": "曇りについて考える"
  },
  {
    "id": "V0355",
    "w": "悔しい",
    "r": "くやしい",
    "m": {
      "en": "regrettable",
      "zh-TW": "懊悔",
      "zh-CN": "懊悔",
      "ko": "분한",
      "vi": "tiếc",
      "id": "menyesal"
    },
    "pos": "i-adj",
    "ex": "とても悔しいと思う"
  },
  {
    "id": "V0356",
    "w": "悔やむ",
    "r": "くやむ",
    "m": {
      "en": "to regret",
      "zh-TW": "後悔",
      "zh-CN": "后悔",
      "ko": "후회하다",
      "vi": "hối hận",
      "id": "menyesali"
    },
    "pos": "verb-godan",
    "ex": "悔やむことにする"
  },
  {
    "id": "V0357",
    "w": "暮らし",
    "r": "くらし",
    "m": {
      "en": "living",
      "zh-TW": "生活",
      "zh-CN": "生活",
      "ko": "생활",
      "vi": "cuộc sống",
      "id": "kehidupan"
    },
    "pos": "noun",
    "ex": "暮らしについて考える"
  },
  {
    "id": "V0358",
    "w": "暮らす",
    "r": "くらす",
    "m": {
      "en": "to live",
      "zh-TW": "生活",
      "zh-CN": "生活",
      "ko": "살다",
      "vi": "sống",
      "id": "tinggal"
    },
    "pos": "verb-godan",
    "ex": "暮らすことにする"
  },
  {
    "id": "V0359",
    "w": "比べる",
    "r": "くらべる",
    "m": {
      "en": "to compare",
      "zh-TW": "比較",
      "zh-CN": "比较",
      "ko": "비교하다",
      "vi": "so sánh",
      "id": "membandingkan"
    },
    "pos": "verb-godan",
    "ex": "比べることにする"
  },
  {
    "id": "V0360",
    "w": "繰り返す",
    "r": "くりかえす",
    "m": {
      "en": "to repeat",
      "zh-TW": "重複",
      "zh-CN": "重复",
      "ko": "반복하다",
      "vi": "lặp lại",
      "id": "mengulangi"
    },
    "pos": "verb-godan",
    "ex": "繰り返すことにする"
  },
  {
    "id": "V0361",
    "w": "苦しい",
    "r": "くるしい",
    "m": {
      "en": "painful",
      "zh-TW": "痛苦",
      "zh-CN": "痛苦",
      "ko": "괴로운",
      "vi": "đau khổ",
      "id": "menyakitkan"
    },
    "pos": "i-adj",
    "ex": "とても苦しいと思う"
  },
  {
    "id": "V0362",
    "w": "苦しむ",
    "r": "くるしむ",
    "m": {
      "en": "to suffer",
      "zh-TW": "受苦",
      "zh-CN": "受苦",
      "ko": "괴로워하다",
      "vi": "chịu đựng",
      "id": "menderita"
    },
    "pos": "verb-godan",
    "ex": "苦しむことにする"
  },
  {
    "id": "V0363",
    "w": "車",
    "r": "くるま",
    "m": {
      "en": "car",
      "zh-TW": "車",
      "zh-CN": "车",
      "ko": "차",
      "vi": "xe hơi",
      "id": "mobil"
    },
    "pos": "noun",
    "ex": "車で出かける"
  },
  {
    "id": "V0364",
    "w": "加える",
    "r": "くわえる",
    "m": {
      "en": "to add",
      "zh-TW": "添加",
      "zh-CN": "添加",
      "ko": "더하다",
      "vi": "thêm",
      "id": "menambah"
    },
    "pos": "verb-ichidan",
    "ex": "加えることにする"
  },
  {
    "id": "V0365",
    "w": "詳しい",
    "r": "くわしい",
    "m": {
      "en": "detailed",
      "zh-TW": "詳細",
      "zh-CN": "详细",
      "ko": "자세한",
      "vi": "chi tiết",
      "id": "rinci"
    },
    "pos": "i-adj",
    "ex": "とても詳しいと思う"
  },
  {
    "id": "V0366",
    "w": "軍",
    "r": "ぐん",
    "m": {
      "en": "army",
      "zh-TW": "軍隊",
      "zh-CN": "军队",
      "ko": "군",
      "vi": "quân đội",
      "id": "tentara"
    },
    "pos": "noun",
    "ex": "軍について考える"
  },
  {
    "id": "V0367",
    "w": "訓練",
    "r": "くんれん",
    "m": {
      "en": "training",
      "zh-TW": "訓練",
      "zh-CN": "训练",
      "ko": "훈련",
      "vi": "huấn luyện",
      "id": "pelatihan"
    },
    "pos": "noun",
    "ex": "訓練について考える",
    "syn": [
      "練習する",
      "トレーニングする",
      "鍛える"
    ]
  },
  {
    "id": "V0368",
    "w": "経営",
    "r": "けいえい",
    "m": {
      "en": "management",
      "zh-TW": "經營",
      "zh-CN": "经营",
      "ko": "경영",
      "vi": "kinh doanh",
      "id": "manajemen"
    },
    "pos": "i-adj",
    "ex": "とても経営と思う"
  },
  {
    "id": "V0369",
    "w": "傾向",
    "r": "けいこう",
    "m": {
      "en": "tendency",
      "zh-TW": "傾向",
      "zh-CN": "倾向",
      "ko": "경향",
      "vi": "xu hướng",
      "id": "kecenderungan"
    },
    "pos": "verb-godan",
    "ex": "傾向ことにする"
  },
  {
    "id": "V0370",
    "w": "警告",
    "r": "けいこく",
    "m": {
      "en": "warning",
      "zh-TW": "警告",
      "zh-CN": "警告",
      "ko": "경고",
      "vi": "cảnh báo",
      "id": "peringatan"
    },
    "pos": "verb-godan",
    "ex": "警告ことにする"
  },
  {
    "id": "V0371",
    "w": "計算",
    "r": "けいさん",
    "m": {
      "en": "calculation",
      "zh-TW": "計算",
      "zh-CN": "计算",
      "ko": "계산",
      "vi": "tính toán",
      "id": "perhitungan"
    },
    "pos": "noun",
    "ex": "計算について考える",
    "syn": [
      "算出する",
      "計る",
      "割り出す"
    ]
  },
  {
    "id": "V0372",
    "w": "芸術",
    "r": "げいじゅつ",
    "m": {
      "en": "art",
      "zh-TW": "藝術",
      "zh-CN": "艺术",
      "ko": "예술",
      "vi": "nghệ thuật",
      "id": "seni"
    },
    "pos": "verb-godan",
    "ex": "芸術ことにする"
  },
  {
    "id": "V0373",
    "w": "形成",
    "r": "けいせい",
    "m": {
      "en": "formation",
      "zh-TW": "形成",
      "zh-CN": "形成",
      "ko": "형성",
      "vi": "hình thành",
      "id": "pembentukan"
    },
    "pos": "i-adj",
    "ex": "とても形成と思う"
  },
  {
    "id": "V0374",
    "w": "形態",
    "r": "けいたい",
    "m": {
      "en": "form",
      "zh-TW": "形態",
      "zh-CN": "形态",
      "ko": "형태",
      "vi": "hình thái",
      "id": "bentuk"
    },
    "pos": "i-adj",
    "ex": "とても形態と思う"
  },
  {
    "id": "V0375",
    "w": "携帯",
    "r": "けいたい",
    "m": {
      "en": "portable",
      "zh-TW": "攜帶",
      "zh-CN": "携带",
      "ko": "휴대",
      "vi": "di động",
      "id": "portabel"
    },
    "pos": "i-adj",
    "ex": "とても携帯と思う"
  },
  {
    "id": "V0376",
    "w": "契約",
    "r": "けいやく",
    "m": {
      "en": "contract",
      "zh-TW": "契約",
      "zh-CN": "契约",
      "ko": "계약",
      "vi": "hợp đồng",
      "id": "kontrak"
    },
    "pos": "verb-godan",
    "ex": "契約ことにする"
  },
  {
    "id": "V0377",
    "w": "経由",
    "r": "けいゆ",
    "m": {
      "en": "via",
      "zh-TW": "經由",
      "zh-CN": "经由",
      "ko": "경유",
      "vi": "qua",
      "id": "melalui"
    },
    "pos": "noun",
    "ex": "経由について考える"
  },
  {
    "id": "V0378",
    "w": "経歴",
    "r": "けいれき",
    "m": {
      "en": "career",
      "zh-TW": "經歷",
      "zh-CN": "经历",
      "ko": "경력",
      "vi": "kinh nghiệm",
      "id": "karir"
    },
    "pos": "noun",
    "ex": "経歴について考える"
  },
  {
    "id": "V0379",
    "w": "ケース",
    "r": "けーす",
    "m": {
      "en": "case",
      "zh-TW": "案例",
      "zh-CN": "案例",
      "ko": "케이스",
      "vi": "trường hợp",
      "id": "kasus"
    },
    "pos": "verb-godan",
    "ex": "ケースことにする"
  },
  {
    "id": "V0380",
    "w": "劇",
    "r": "げき",
    "m": {
      "en": "drama",
      "zh-TW": "劇",
      "zh-CN": "剧",
      "ko": "극",
      "vi": "kịch",
      "id": "drama"
    },
    "pos": "noun",
    "ex": "劇について考える"
  },
  {
    "id": "V0381",
    "w": "激増",
    "r": "げきぞう",
    "m": {
      "en": "sharp increase",
      "zh-TW": "激增",
      "zh-CN": "激增",
      "ko": "급증",
      "vi": "tăng mạnh",
      "id": "peningkatan tajam"
    },
    "pos": "verb-godan",
    "ex": "激増ことにする"
  },
  {
    "id": "V0382",
    "w": "下車",
    "r": "げしゃ",
    "m": {
      "en": "get off",
      "zh-TW": "下車",
      "zh-CN": "下车",
      "ko": "하차",
      "vi": "xuống xe",
      "id": "turun"
    },
    "pos": "noun",
    "ex": "下車について考える"
  },
  {
    "id": "V0383",
    "w": "化粧",
    "r": "けしょう",
    "m": {
      "en": "makeup",
      "zh-TW": "化妝",
      "zh-CN": "化妆",
      "ko": "화장",
      "vi": "trang điểm",
      "id": "rias"
    },
    "pos": "verb-godan",
    "ex": "化粧ことにする"
  },
  {
    "id": "V0384",
    "w": "下旬",
    "r": "げじゅん",
    "m": {
      "en": "last third",
      "zh-TW": "下旬",
      "zh-CN": "下旬",
      "ko": "하순",
      "vi": "cuối tháng",
      "id": "akhir bulan"
    },
    "pos": "noun",
    "ex": "下旬について考える"
  },
  {
    "id": "V0385",
    "w": "削る",
    "r": "けずる",
    "m": {
      "en": "to shave",
      "zh-TW": "削",
      "zh-CN": "削",
      "ko": "깎다",
      "vi": "gọt",
      "id": "mengikis"
    },
    "pos": "verb-godan",
    "ex": "削ることにする"
  },
  {
    "id": "V0386",
    "w": "桁",
    "r": "けた",
    "m": {
      "en": "digit",
      "zh-TW": "位數",
      "zh-CN": "位数",
      "ko": "자릿수",
      "vi": "chữ số",
      "id": "digit"
    },
    "pos": "noun",
    "ex": "桁について考える"
  },
  {
    "id": "V0387",
    "w": "結局",
    "r": "けっきょく",
    "m": {
      "en": "after all",
      "zh-TW": "結果",
      "zh-CN": "结果",
      "ko": "결국",
      "vi": "cuối cùng",
      "id": "bagaimanapun"
    },
    "pos": "verb-godan",
    "ex": "結局ことにする"
  },
  {
    "id": "V0388",
    "w": "欠席",
    "r": "けっせき",
    "m": {
      "en": "absence",
      "zh-TW": "缺席",
      "zh-CN": "缺席",
      "ko": "결석",
      "vi": "vắng mặt",
      "id": "absen"
    },
    "pos": "noun",
    "ex": "欠席について考える"
  },
  {
    "id": "V0389",
    "w": "決定",
    "r": "けってい",
    "m": {
      "en": "decision",
      "zh-TW": "決定",
      "zh-CN": "决定",
      "ko": "결정",
      "vi": "quyết định",
      "id": "keputusan"
    },
    "pos": "i-adj",
    "ex": "とても決定と思う",
    "syn": [
      "決める",
      "確定する",
      "定める"
    ]
  },
  {
    "id": "V0390",
    "w": "欠点",
    "r": "けってん",
    "m": {
      "en": "defect",
      "zh-TW": "缺點",
      "zh-CN": "缺点",
      "ko": "결점",
      "vi": "khuyết điểm",
      "id": "kekurangan"
    },
    "pos": "noun",
    "ex": "欠点について考える"
  },
  {
    "id": "V0391",
    "w": "結論",
    "r": "けつろん",
    "m": {
      "en": "conclusion",
      "zh-TW": "結論",
      "zh-CN": "结论",
      "ko": "결론",
      "vi": "kết luận",
      "id": "kesimpulan"
    },
    "pos": "noun",
    "ex": "結論について考える"
  },
  {
    "id": "V0392",
    "w": "煙",
    "r": "けむり",
    "m": {
      "en": "smoke",
      "zh-TW": "煙",
      "zh-CN": "烟",
      "ko": "연기",
      "vi": "khói",
      "id": "asap"
    },
    "pos": "noun",
    "ex": "煙について考える"
  },
  {
    "id": "V0393",
    "w": "権威",
    "r": "けんい",
    "m": {
      "en": "authority",
      "zh-TW": "權威",
      "zh-CN": "权威",
      "ko": "권위",
      "vi": "thẩm quyền",
      "id": "otoritas"
    },
    "pos": "i-adj",
    "ex": "とても権威と思う"
  },
  {
    "id": "V0394",
    "w": "見解",
    "r": "けんかい",
    "m": {
      "en": "opinion",
      "zh-TW": "見解",
      "zh-CN": "见解",
      "ko": "견해",
      "vi": "quan điểm",
      "id": "pendapat"
    },
    "pos": "i-adj",
    "ex": "とても見解と思う"
  },
  {
    "id": "V0395",
    "w": "限界",
    "r": "げんかい",
    "m": {
      "en": "limit",
      "zh-TW": "極限",
      "zh-CN": "极限",
      "ko": "한계",
      "vi": "giới hạn",
      "id": "batas"
    },
    "pos": "i-adj",
    "ex": "とても限界と思う"
  },
  {
    "id": "V0396",
    "w": "現金",
    "r": "げんきん",
    "m": {
      "en": "cash",
      "zh-TW": "現金",
      "zh-CN": "现金",
      "ko": "현금",
      "vi": "tiền mặt",
      "id": "tunai"
    },
    "pos": "noun",
    "ex": "現金について考える"
  },
  {
    "id": "V0397",
    "w": "健康",
    "r": "けんこう",
    "m": {
      "en": "health",
      "zh-TW": "健康",
      "zh-CN": "健康",
      "ko": "건강",
      "vi": "sức khỏe",
      "id": "kesehatan"
    },
    "pos": "verb-godan",
    "ex": "健康ことにする"
  },
  {
    "id": "V0398",
    "w": "検査",
    "r": "けんさ",
    "m": {
      "en": "inspection",
      "zh-TW": "檢查",
      "zh-CN": "检查",
      "ko": "검사",
      "vi": "kiểm tra",
      "id": "pemeriksaan"
    },
    "pos": "noun",
    "ex": "検査について考える"
  },
  {
    "id": "V0399",
    "w": "現在",
    "r": "げんざい",
    "m": {
      "en": "present",
      "zh-TW": "現在",
      "zh-CN": "现在",
      "ko": "현재",
      "vi": "hiện tại",
      "id": "sekarang"
    },
    "pos": "i-adj",
    "ex": "現在の状況を説明する"
  },
  {
    "id": "V0400",
    "w": "現実",
    "r": "げんじつ",
    "m": {
      "en": "reality",
      "zh-TW": "現實",
      "zh-CN": "现实",
      "ko": "현실",
      "vi": "thực tế",
      "id": "kenyataan"
    },
    "pos": "verb-godan",
    "ex": "現実ことにする"
  },
  {
    "id": "V0401",
    "w": "現象",
    "r": "げんしょう",
    "m": {
      "en": "phenomenon",
      "zh-TW": "現象",
      "zh-CN": "现象",
      "ko": "현상",
      "vi": "hiện tượng",
      "id": "fenomena"
    },
    "pos": "verb-godan",
    "ex": "現象ことにする"
  },
  {
    "id": "V0402",
    "w": "原則",
    "r": "げんそく",
    "m": {
      "en": "principle",
      "zh-TW": "原則",
      "zh-CN": "原则",
      "ko": "원칙",
      "vi": "nguyên tắc",
      "id": "prinsip"
    },
    "pos": "verb-godan",
    "ex": "原則ことにする"
  },
  {
    "id": "V0403",
    "w": "現代",
    "r": "げんだい",
    "m": {
      "en": "modern",
      "zh-TW": "現代",
      "zh-CN": "现代",
      "ko": "현대",
      "vi": "hiện đại",
      "id": "modern"
    },
    "pos": "i-adj",
    "ex": "とても現代と思う"
  },
  {
    "id": "V0404",
    "w": "限定",
    "r": "げんてい",
    "m": {
      "en": "limitation",
      "zh-TW": "限定",
      "zh-CN": "限定",
      "ko": "한정",
      "vi": "giới hạn",
      "id": "pembatasan"
    },
    "pos": "i-adj",
    "ex": "とても限定と思う"
  },
  {
    "id": "V0405",
    "w": "原点",
    "r": "げんてん",
    "m": {
      "en": "origin",
      "zh-TW": "原點",
      "zh-CN": "原点",
      "ko": "원점",
      "vi": "điểm gốc",
      "id": "titik awal"
    },
    "pos": "noun",
    "ex": "原点について考える"
  },
  {
    "id": "V0406",
    "w": "原因",
    "r": "げんいん",
    "m": {
      "en": "cause",
      "zh-TW": "原因",
      "zh-CN": "原因",
      "ko": "원인",
      "vi": "nguyên nhân",
      "id": "penyebab"
    },
    "pos": "noun",
    "ex": "問題の原因を探る",
    "syn": [
      "理由",
      "要因",
      "根本"
    ]
  },
  {
    "id": "V0407",
    "w": "現場",
    "r": "げんば",
    "m": {
      "en": "site",
      "zh-TW": "現場",
      "zh-CN": "现场",
      "ko": "현장",
      "vi": "hiện trường",
      "id": "lokasi"
    },
    "pos": "noun",
    "ex": "現場について考える"
  },
  {
    "id": "V0408",
    "w": "原理",
    "r": "げんり",
    "m": {
      "en": "principle",
      "zh-TW": "原理",
      "zh-CN": "原理",
      "ko": "원리",
      "vi": "nguyên lý",
      "id": "prinsip"
    },
    "pos": "noun",
    "ex": "原理について考える"
  },
  {
    "id": "V0409",
    "w": "権利",
    "r": "けんり",
    "m": {
      "en": "right",
      "zh-TW": "權利",
      "zh-CN": "权利",
      "ko": "권리",
      "vi": "quyền lợi",
      "id": "hak"
    },
    "pos": "noun",
    "ex": "権利について考える"
  },
  {
    "id": "V0410",
    "w": "原料",
    "r": "げんりょう",
    "m": {
      "en": "raw material",
      "zh-TW": "原料",
      "zh-CN": "原料",
      "ko": "원료",
      "vi": "nguyên liệu",
      "id": "bahan baku"
    },
    "pos": "verb-godan",
    "ex": "原料ことにする"
  },
  {
    "id": "V0411",
    "w": "恋",
    "r": "こい",
    "m": {
      "en": "love",
      "zh-TW": "戀愛",
      "zh-CN": "恋爱",
      "ko": "사랑",
      "vi": "tình yêu",
      "id": "cinta"
    },
    "pos": "i-adj",
    "ex": "とても恋と思う"
  },
  {
    "id": "V0412",
    "w": "濃い",
    "r": "こい",
    "m": {
      "en": "thick",
      "zh-TW": "濃",
      "zh-CN": "浓",
      "ko": "진한",
      "vi": "đậm",
      "id": "tebal"
    },
    "pos": "i-adj",
    "ex": "とても濃いと思う"
  },
  {
    "id": "V0413",
    "w": "恋人",
    "r": "こいびと",
    "m": {
      "en": "lover",
      "zh-TW": "戀人",
      "zh-CN": "恋人",
      "ko": "연인",
      "vi": "người yêu",
      "id": "kekasih"
    },
    "pos": "adverb",
    "ex": "恋人考える"
  },
  {
    "id": "V0414",
    "w": "行為",
    "r": "こうい",
    "m": {
      "en": "act",
      "zh-TW": "行為",
      "zh-CN": "行为",
      "ko": "행위",
      "vi": "hành vi",
      "id": "tindakan"
    },
    "pos": "i-adj",
    "ex": "とても行為と思う"
  },
  {
    "id": "V0415",
    "w": "合意",
    "r": "ごうい",
    "m": {
      "en": "agreement",
      "zh-TW": "同意",
      "zh-CN": "同意",
      "ko": "합의",
      "vi": "đồng ý",
      "id": "kesepakatan"
    },
    "pos": "i-adj",
    "ex": "とても合意と思う"
  },
  {
    "id": "V0416",
    "w": "後悔",
    "r": "こうかい",
    "m": {
      "en": "regret",
      "zh-TW": "後悔",
      "zh-CN": "后悔",
      "ko": "후회",
      "vi": "hối hận",
      "id": "penyesalan"
    },
    "pos": "i-adj",
    "ex": "とても後悔と思う"
  },
  {
    "id": "V0417",
    "w": "公開",
    "r": "こうかい",
    "m": {
      "en": "public",
      "zh-TW": "公開",
      "zh-CN": "公开",
      "ko": "공개",
      "vi": "công khai",
      "id": "publik"
    },
    "pos": "i-adj",
    "ex": "とても公開と思う"
  },
  {
    "id": "V0418",
    "w": "効果",
    "r": "こうか",
    "m": {
      "en": "effect",
      "zh-TW": "效果",
      "zh-CN": "效果",
      "ko": "효과",
      "vi": "hiệu quả",
      "id": "efek"
    },
    "pos": "noun",
    "ex": "薬の効果がある",
    "syn": [
      "効き目",
      "作用",
      "成果"
    ]
  },
  {
    "id": "V0419",
    "w": "合格",
    "r": "ごうかく",
    "m": {
      "en": "pass",
      "zh-TW": "合格",
      "zh-CN": "合格",
      "ko": "합격",
      "vi": "đậu",
      "id": "lulus"
    },
    "pos": "verb-godan",
    "ex": "合格ことにする"
  },
  {
    "id": "V0420",
    "w": "交換",
    "r": "こうかん",
    "m": {
      "en": "exchange",
      "zh-TW": "交換",
      "zh-CN": "交换",
      "ko": "교환",
      "vi": "trao đổi",
      "id": "pertukaran"
    },
    "pos": "noun",
    "ex": "交換について考える"
  },
  {
    "id": "V0421",
    "w": "高級",
    "r": "こうきゅう",
    "m": {
      "en": "high class",
      "zh-TW": "高級",
      "zh-CN": "高级",
      "ko": "고급",
      "vi": "cao cấp",
      "id": "kelas atas"
    },
    "pos": "verb-godan",
    "ex": "高級ことにする"
  },
  {
    "id": "V0422",
    "w": "好奇心",
    "r": "こうきしん",
    "m": {
      "en": "curiosity",
      "zh-TW": "好奇心",
      "zh-CN": "好奇心",
      "ko": "호기심",
      "vi": "tò mò",
      "id": "rasa ingin tahu"
    },
    "pos": "noun",
    "ex": "好奇心について考える"
  },
  {
    "id": "V0423",
    "w": "貢献",
    "r": "こうけん",
    "m": {
      "en": "contribution",
      "zh-TW": "貢獻",
      "zh-CN": "贡献",
      "ko": "공헌",
      "vi": "đóng góp",
      "id": "kontribusi"
    },
    "pos": "noun",
    "ex": "貢献について考える"
  },
  {
    "id": "V0424",
    "w": "工事",
    "r": "こうじ",
    "m": {
      "en": "construction",
      "zh-TW": "工程",
      "zh-CN": "工程",
      "ko": "공사",
      "vi": "công trình",
      "id": "konstruksi"
    },
    "pos": "noun",
    "ex": "工事について考える"
  },
  {
    "id": "V0425",
    "w": "講師",
    "r": "こうし",
    "m": {
      "en": "lecturer",
      "zh-TW": "講師",
      "zh-CN": "讲师",
      "ko": "강사",
      "vi": "giảng viên",
      "id": "dosen"
    },
    "pos": "noun",
    "ex": "講師について考える"
  },
  {
    "id": "V0426",
    "w": "行事",
    "r": "ぎょうじ",
    "m": {
      "en": "event",
      "zh-TW": "活動",
      "zh-CN": "活动",
      "ko": "행사",
      "vi": "sự kiện",
      "id": "acara"
    },
    "pos": "noun",
    "ex": "行事について考える"
  },
  {
    "id": "V0427",
    "w": "公式",
    "r": "こうしき",
    "m": {
      "en": "official",
      "zh-TW": "公式",
      "zh-CN": "公式",
      "ko": "공식",
      "vi": "chính thức",
      "id": "resmi"
    },
    "pos": "noun",
    "ex": "公式について考える"
  },
  {
    "id": "V0428",
    "w": "向上",
    "r": "こうじょう",
    "m": {
      "en": "improvement",
      "zh-TW": "提高",
      "zh-CN": "提高",
      "ko": "향상",
      "vi": "cải thiện",
      "id": "peningkatan"
    },
    "pos": "verb-godan",
    "ex": "向上ことにする"
  },
  {
    "id": "V0429",
    "w": "工場",
    "r": "こうじょう",
    "m": {
      "en": "factory",
      "zh-TW": "工廠",
      "zh-CN": "工厂",
      "ko": "공장",
      "vi": "nhà máy",
      "id": "pabrik"
    },
    "pos": "verb-godan",
    "ex": "工場ことにする"
  },
  {
    "id": "V0430",
    "w": "構成",
    "r": "こうせい",
    "m": {
      "en": "composition",
      "zh-TW": "構成",
      "zh-CN": "构成",
      "ko": "구성",
      "vi": "cấu thành",
      "id": "komposisi"
    },
    "pos": "i-adj",
    "ex": "とても構成と思う"
  },
  {
    "id": "V0431",
    "w": "攻撃",
    "r": "こうげき",
    "m": {
      "en": "attack",
      "zh-TW": "攻擊",
      "zh-CN": "攻击",
      "ko": "공격",
      "vi": "tấn công",
      "id": "serangan"
    },
    "pos": "noun",
    "ex": "攻撃について考える"
  },
  {
    "id": "V0432",
    "w": "高速",
    "r": "こうそく",
    "m": {
      "en": "high speed",
      "zh-TW": "高速",
      "zh-CN": "高速",
      "ko": "고속",
      "vi": "tốc độ cao",
      "id": "kecepatan tinggi"
    },
    "pos": "verb-godan",
    "ex": "高速ことにする"
  },
  {
    "id": "V0433",
    "w": "構造",
    "r": "こうぞう",
    "m": {
      "en": "structure",
      "zh-TW": "結構",
      "zh-CN": "结构",
      "ko": "구조",
      "vi": "cấu trúc",
      "id": "struktur"
    },
    "pos": "verb-godan",
    "ex": "構造ことにする"
  },
  {
    "id": "V0434",
    "w": "交替",
    "r": "こうたい",
    "m": {
      "en": "alternation",
      "zh-TW": "交替",
      "zh-CN": "交替",
      "ko": "교대",
      "vi": "thay phiên",
      "id": "pergantian"
    },
    "pos": "i-adj",
    "ex": "とても交替と思う"
  },
  {
    "id": "V0435",
    "w": "行動",
    "r": "こうどう",
    "m": {
      "en": "action",
      "zh-TW": "行動",
      "zh-CN": "行动",
      "ko": "행동",
      "vi": "hành động",
      "id": "tindakan"
    },
    "pos": "verb-godan",
    "ex": "行動ことにする"
  },
  {
    "id": "V0436",
    "w": "高度",
    "r": "こうど",
    "m": {
      "en": "altitude",
      "zh-TW": "高度",
      "zh-CN": "高度",
      "ko": "고도",
      "vi": "độ cao",
      "id": "ketinggian"
    },
    "pos": "noun",
    "ex": "高度について考える"
  },
  {
    "id": "V0437",
    "w": "購入",
    "r": "こうにゅう",
    "m": {
      "en": "purchase",
      "zh-TW": "購買",
      "zh-CN": "购买",
      "ko": "구입",
      "vi": "mua",
      "id": "pembelian"
    },
    "pos": "verb-godan",
    "ex": "購入ことにする"
  },
  {
    "id": "V0438",
    "w": "後半",
    "r": "こうはん",
    "m": {
      "en": "latter half",
      "zh-TW": "後半",
      "zh-CN": "后半",
      "ko": "후반",
      "vi": "nửa sau",
      "id": "paruh kedua"
    },
    "pos": "noun",
    "ex": "後半について考える"
  },
  {
    "id": "V0439",
    "w": "公平",
    "r": "こうへい",
    "m": {
      "en": "fair",
      "zh-TW": "公平",
      "zh-CN": "公平",
      "ko": "공평",
      "vi": "công bằng",
      "id": "adil"
    },
    "pos": "i-adj",
    "ex": "とても公平と思う"
  },
  {
    "id": "V0440",
    "w": "幸福",
    "r": "こうふく",
    "m": {
      "en": "happiness",
      "zh-TW": "幸福",
      "zh-CN": "幸福",
      "ko": "행복",
      "vi": "hạnh phúc",
      "id": "kebahagiaan"
    },
    "pos": "verb-godan",
    "ex": "幸福ことにする"
  },
  {
    "id": "V0441",
    "w": "興奮",
    "r": "こうふん",
    "m": {
      "en": "excitement",
      "zh-TW": "興奮",
      "zh-CN": "兴奋",
      "ko": "흥분",
      "vi": "hưng phấn",
      "id": "kegembiraan"
    },
    "pos": "noun",
    "ex": "興奮について考える"
  },
  {
    "id": "V0442",
    "w": "公務員",
    "r": "こうむいん",
    "m": {
      "en": "civil servant",
      "zh-TW": "公務員",
      "zh-CN": "公务员",
      "ko": "공무원",
      "vi": "công chức",
      "id": "PNS"
    },
    "pos": "noun",
    "ex": "公務員について考える"
  },
  {
    "id": "V0443",
    "w": "項目",
    "r": "こうもく",
    "m": {
      "en": "item",
      "zh-TW": "項目",
      "zh-CN": "项目",
      "ko": "항목",
      "vi": "mục",
      "id": "item"
    },
    "pos": "verb-godan",
    "ex": "項目ことにする"
  },
  {
    "id": "V0444",
    "w": "合理",
    "r": "ごうり",
    "m": {
      "en": "rational",
      "zh-TW": "合理",
      "zh-CN": "合理",
      "ko": "합리",
      "vi": "hợp lý",
      "id": "rasional"
    },
    "pos": "noun",
    "ex": "合理について考える"
  },
  {
    "id": "V0445",
    "w": "効率",
    "r": "こうりつ",
    "m": {
      "en": "efficiency",
      "zh-TW": "效率",
      "zh-CN": "效率",
      "ko": "효율",
      "vi": "hiệu suất",
      "id": "efisiensi"
    },
    "pos": "verb-godan",
    "ex": "効率ことにする"
  },
  {
    "id": "V0446",
    "w": "高齢",
    "r": "こうれい",
    "m": {
      "en": "elderly",
      "zh-TW": "高齡",
      "zh-CN": "高龄",
      "ko": "고령",
      "vi": "cao tuổi",
      "id": "lanjut usia"
    },
    "pos": "i-adj",
    "ex": "とても高齢と思う"
  },
  {
    "id": "V0447",
    "w": "声",
    "r": "こえ",
    "m": {
      "en": "voice",
      "zh-TW": "聲音",
      "zh-CN": "声音",
      "ko": "목소리",
      "vi": "giọng nói",
      "id": "suara"
    },
    "pos": "noun",
    "ex": "大きな声で話す"
  },
  {
    "id": "V0448",
    "w": "越える",
    "r": "こえる",
    "m": {
      "en": "to cross",
      "zh-TW": "越過",
      "zh-CN": "越过",
      "ko": "넘다",
      "vi": "vượt qua",
      "id": "melewati"
    },
    "pos": "verb-ichidan",
    "ex": "越えることにする"
  },
  {
    "id": "V0449",
    "w": "小型",
    "r": "こがた",
    "m": {
      "en": "small size",
      "zh-TW": "小型",
      "zh-CN": "小型",
      "ko": "소형",
      "vi": "cỡ nhỏ",
      "id": "ukuran kecil"
    },
    "pos": "noun",
    "ex": "小型について考える"
  },
  {
    "id": "V0450",
    "w": "呼吸",
    "r": "こきゅう",
    "m": {
      "en": "breathing",
      "zh-TW": "呼吸",
      "zh-CN": "呼吸",
      "ko": "호흡",
      "vi": "hô hấp",
      "id": "pernapasan"
    },
    "pos": "verb-godan",
    "ex": "呼吸ことにする"
  },
  {
    "id": "V0451",
    "w": "国籍",
    "r": "こくせき",
    "m": {
      "en": "nationality",
      "zh-TW": "國籍",
      "zh-CN": "国籍",
      "ko": "국적",
      "vi": "quốc tịch",
      "id": "kewarganegaraan"
    },
    "pos": "noun",
    "ex": "国籍について考える"
  },
  {
    "id": "V0452",
    "w": "克服",
    "r": "こくふく",
    "m": {
      "en": "overcome",
      "zh-TW": "克服",
      "zh-CN": "克服",
      "ko": "극복",
      "vi": "khắc phục",
      "id": "mengatasi"
    },
    "pos": "verb-godan",
    "ex": "克服ことにする"
  },
  {
    "id": "V0453",
    "w": "国民",
    "r": "こくみん",
    "m": {
      "en": "citizen",
      "zh-TW": "國民",
      "zh-CN": "国民",
      "ko": "국민",
      "vi": "công dân",
      "id": "warga negara"
    },
    "pos": "noun",
    "ex": "国民について考える"
  },
  {
    "id": "V0454",
    "w": "心",
    "r": "こころ",
    "m": {
      "en": "heart",
      "zh-TW": "心",
      "zh-CN": "心",
      "ko": "마음",
      "vi": "tâm",
      "id": "hati"
    },
    "pos": "noun",
    "ex": "心から感謝する"
  },
  {
    "id": "V0455",
    "w": "試み",
    "r": "こころみ",
    "m": {
      "en": "attempt",
      "zh-TW": "嘗試",
      "zh-CN": "尝试",
      "ko": "시도",
      "vi": "thử",
      "id": "percobaan"
    },
    "pos": "noun",
    "ex": "試みについて考える"
  },
  {
    "id": "V0456",
    "w": "腰",
    "r": "こし",
    "m": {
      "en": "waist",
      "zh-TW": "腰",
      "zh-CN": "腰",
      "ko": "허리",
      "vi": "eo",
      "id": "pinggang"
    },
    "pos": "noun",
    "ex": "腰について考える"
  },
  {
    "id": "V0457",
    "w": "故障",
    "r": "こしょう",
    "m": {
      "en": "breakdown",
      "zh-TW": "故障",
      "zh-CN": "故障",
      "ko": "고장",
      "vi": "hỏng",
      "id": "kerusakan"
    },
    "pos": "verb-godan",
    "ex": "故障ことにする"
  },
  {
    "id": "V0458",
    "w": "個人",
    "r": "こじん",
    "m": {
      "en": "individual",
      "zh-TW": "個人",
      "zh-CN": "个人",
      "ko": "개인",
      "vi": "cá nhân",
      "id": "individu"
    },
    "pos": "noun",
    "ex": "個人について考える"
  },
  {
    "id": "V0459",
    "w": "越す",
    "r": "こす",
    "m": {
      "en": "to cross",
      "zh-TW": "越過",
      "zh-CN": "越过",
      "ko": "넘다",
      "vi": "vượt",
      "id": "menyeberang"
    },
    "pos": "verb-godan",
    "ex": "越すことにする"
  },
  {
    "id": "V0460",
    "w": "答え",
    "r": "こたえ",
    "m": {
      "en": "answer",
      "zh-TW": "答案",
      "zh-CN": "答案",
      "ko": "대답",
      "vi": "câu trả lời",
      "id": "jawaban"
    },
    "pos": "noun",
    "ex": "正しい答えを選ぶ"
  },
  {
    "id": "V0461",
    "w": "こだわる",
    "r": "こだわる",
    "m": {
      "en": "to be particular",
      "zh-TW": "講究",
      "zh-CN": "讲究",
      "ko": "집착하다",
      "vi": "cầu kỳ",
      "id": "teliti"
    },
    "pos": "verb-godan",
    "ex": "こだわることにする"
  },
  {
    "id": "V0462",
    "w": "国家",
    "r": "こっか",
    "m": {
      "en": "nation",
      "zh-TW": "國家",
      "zh-CN": "国家",
      "ko": "국가",
      "vi": "quốc gia",
      "id": "negara"
    },
    "pos": "noun",
    "ex": "国家について考える"
  },
  {
    "id": "V0463",
    "w": "骨",
    "r": "ほね",
    "m": {
      "en": "bone",
      "zh-TW": "骨頭",
      "zh-CN": "骨头",
      "ko": "뼈",
      "vi": "xương",
      "id": "tulang"
    },
    "pos": "noun",
    "ex": "骨について考える"
  },
  {
    "id": "V0464",
    "w": "事",
    "r": "こと",
    "m": {
      "en": "thing",
      "zh-TW": "事情",
      "zh-CN": "事情",
      "ko": "일",
      "vi": "việc",
      "id": "benda"
    },
    "pos": "adverb",
    "ex": "事考える"
  },
  {
    "id": "V0465",
    "w": "異なる",
    "r": "ことなる",
    "m": {
      "en": "to differ",
      "zh-TW": "不同",
      "zh-CN": "不同",
      "ko": "다르다",
      "vi": "khác",
      "id": "berbeda"
    },
    "pos": "verb-godan",
    "ex": "異なることにする"
  },
  {
    "id": "V0466",
    "w": "孤独",
    "r": "こどく",
    "m": {
      "en": "loneliness",
      "zh-TW": "孤獨",
      "zh-CN": "孤独",
      "ko": "고독",
      "vi": "cô đơn",
      "id": "kesepian"
    },
    "pos": "verb-godan",
    "ex": "孤独ことにする"
  },
  {
    "id": "V0467",
    "w": "粉",
    "r": "こな",
    "m": {
      "en": "powder",
      "zh-TW": "粉",
      "zh-CN": "粉",
      "ko": "가루",
      "vi": "bột",
      "id": "bubuk"
    },
    "pos": "noun",
    "ex": "粉について考える"
  },
  {
    "id": "V0468",
    "w": "この頃",
    "r": "このごろ",
    "m": {
      "en": "these days",
      "zh-TW": "最近",
      "zh-CN": "最近",
      "ko": "요즘",
      "vi": "dạo này",
      "id": "akhir-akhir ini"
    },
    "pos": "noun",
    "ex": "この頃について考える"
  },
  {
    "id": "V0469",
    "w": "好み",
    "r": "このみ",
    "m": {
      "en": "preference",
      "zh-TW": "喜好",
      "zh-CN": "喜好",
      "ko": "취향",
      "vi": "sở thích",
      "id": "preferensi"
    },
    "pos": "noun",
    "ex": "好みについて考える"
  },
  {
    "id": "V0470",
    "w": "好む",
    "r": "このむ",
    "m": {
      "en": "to like",
      "zh-TW": "喜歡",
      "zh-CN": "喜欢",
      "ko": "좋아하다",
      "vi": "thích",
      "id": "suka"
    },
    "pos": "verb-godan",
    "ex": "好むことにする"
  },
  {
    "id": "V0471",
    "w": "コピー",
    "r": "こぴー",
    "m": {
      "en": "copy",
      "zh-TW": "影印",
      "zh-CN": "影印",
      "ko": "복사",
      "vi": "sao chép",
      "id": "fotokopi"
    },
    "pos": "noun",
    "ex": "コピーについて考える"
  },
  {
    "id": "V0472",
    "w": "細かい",
    "r": "こまかい",
    "m": {
      "en": "fine",
      "zh-TW": "細小",
      "zh-CN": "细小",
      "ko": "작은",
      "vi": "nhỏ",
      "id": "halus"
    },
    "pos": "i-adj",
    "ex": "細かい作業をする"
  },
  {
    "id": "V0473",
    "w": "困る",
    "r": "こまる",
    "m": {
      "en": "to be troubled",
      "zh-TW": "困擾",
      "zh-CN": "困扰",
      "ko": "곤란하다",
      "vi": "khó xử",
      "id": "kesulitan"
    },
    "pos": "verb-godan",
    "ex": "道に迷って困る"
  },
  {
    "id": "V0474",
    "w": "込む",
    "r": "こむ",
    "m": {
      "en": "to be crowded",
      "zh-TW": "擁擠",
      "zh-CN": "拥挤",
      "ko": "붐비다",
      "vi": "đông",
      "id": "ramai"
    },
    "pos": "verb-godan",
    "ex": "込むことにする"
  },
  {
    "id": "V0475",
    "w": "ごみ",
    "r": "ごみ",
    "m": {
      "en": "garbage",
      "zh-TW": "垃圾",
      "zh-CN": "垃圾",
      "ko": "쓰레기",
      "vi": "rác",
      "id": "sampah"
    },
    "pos": "noun",
    "ex": "ごみについて考える"
  },
  {
    "id": "V0476",
    "w": "雇用",
    "r": "こよう",
    "m": {
      "en": "employment",
      "zh-TW": "雇用",
      "zh-CN": "雇用",
      "ko": "고용",
      "vi": "tuyển dụng",
      "id": "pekerjaan"
    },
    "pos": "verb-godan",
    "ex": "雇用ことにする"
  },
  {
    "id": "V0477",
    "w": "これから",
    "r": "これから",
    "m": {
      "en": "from now on",
      "zh-TW": "從現在起",
      "zh-CN": "从现在起",
      "ko": "앞으로",
      "vi": "từ bây giờ",
      "id": "mulai sekarang"
    },
    "pos": "noun",
    "ex": "これからについて考える"
  },
  {
    "id": "V0478",
    "w": "転がる",
    "r": "ころがる",
    "m": {
      "en": "to roll",
      "zh-TW": "滾動",
      "zh-CN": "滚动",
      "ko": "구르다",
      "vi": "lăn",
      "id": "berguling"
    },
    "pos": "verb-godan",
    "ex": "転がることにする"
  },
  {
    "id": "V0479",
    "w": "殺す",
    "r": "ころす",
    "m": {
      "en": "to kill",
      "zh-TW": "殺",
      "zh-CN": "杀",
      "ko": "죽이다",
      "vi": "giết",
      "id": "membunuh"
    },
    "pos": "verb-godan",
    "ex": "殺すことにする"
  },
  {
    "id": "V0480",
    "w": "転ぶ",
    "r": "ころぶ",
    "m": {
      "en": "to fall down",
      "zh-TW": "跌倒",
      "zh-CN": "跌倒",
      "ko": "넘어지다",
      "vi": "ngã",
      "id": "jatuh"
    },
    "pos": "verb-godan",
    "ex": "転ぶことにする"
  },
  {
    "id": "V0481",
    "w": "怖い",
    "r": "こわい",
    "m": {
      "en": "scary",
      "zh-TW": "可怕",
      "zh-CN": "可怕",
      "ko": "무서운",
      "vi": "đáng sợ",
      "id": "menakutkan"
    },
    "pos": "i-adj",
    "ex": "暗い場所が怖い"
  },
  {
    "id": "V0482",
    "w": "壊す",
    "r": "こわす",
    "m": {
      "en": "to break",
      "zh-TW": "弄壞",
      "zh-CN": "弄坏",
      "ko": "부수다",
      "vi": "phá",
      "id": "memecahkan"
    },
    "pos": "verb-godan",
    "ex": "壊すことにする"
  },
  {
    "id": "V0483",
    "w": "壊れる",
    "r": "こわれる",
    "m": {
      "en": "to break",
      "zh-TW": "壞掉",
      "zh-CN": "坏掉",
      "ko": "부서지다",
      "vi": "hỏng",
      "id": "memecahkan"
    },
    "pos": "verb-ichidan",
    "ex": "壊れることにする"
  },
  {
    "id": "V0484",
    "w": "混雑",
    "r": "こんざつ",
    "m": {
      "en": "congestion",
      "zh-TW": "擁擠",
      "zh-CN": "拥挤",
      "ko": "혼잡",
      "vi": "đông đúc",
      "id": "keramaian"
    },
    "pos": "verb-godan",
    "ex": "混雑ことにする"
  },
  {
    "id": "V0485",
    "w": "今後",
    "r": "こんご",
    "m": {
      "en": "from now on",
      "zh-TW": "今後",
      "zh-CN": "今后",
      "ko": "금후",
      "vi": "sau này",
      "id": "selanjutnya"
    },
    "pos": "noun",
    "ex": "今後について考える"
  },
  {
    "id": "V0486",
    "w": "混乱",
    "r": "こんらん",
    "m": {
      "en": "confusion",
      "zh-TW": "混亂",
      "zh-CN": "混乱",
      "ko": "혼란",
      "vi": "hỗn loạn",
      "id": "kekacauan"
    },
    "pos": "noun",
    "ex": "混乱について考える"
  },
  {
    "id": "V0487",
    "w": "サービス",
    "r": "さーびす",
    "m": {
      "en": "service",
      "zh-TW": "服務",
      "zh-CN": "服务",
      "ko": "서비스",
      "vi": "dịch vụ",
      "id": "layanan"
    },
    "pos": "verb-godan",
    "ex": "サービスことにする"
  },
  {
    "id": "V0488",
    "w": "災害",
    "r": "さいがい",
    "m": {
      "en": "disaster",
      "zh-TW": "災害",
      "zh-CN": "灾害",
      "ko": "재해",
      "vi": "thiên tai",
      "id": "bencana"
    },
    "pos": "i-adj",
    "ex": "とても災害と思う"
  },
  {
    "id": "V0489",
    "w": "最高",
    "r": "さいこう",
    "m": {
      "en": "highest",
      "zh-TW": "最高",
      "zh-CN": "最高",
      "ko": "최고",
      "vi": "cao nhất",
      "id": "tertinggi"
    },
    "pos": "verb-godan",
    "ex": "最高ことにする"
  },
  {
    "id": "V0490",
    "w": "最終",
    "r": "さいしゅう",
    "m": {
      "en": "final",
      "zh-TW": "最終",
      "zh-CN": "最终",
      "ko": "최종",
      "vi": "cuối cùng",
      "id": "terakhir"
    },
    "pos": "verb-godan",
    "ex": "最終ことにする"
  },
  {
    "id": "V0491",
    "w": "最小",
    "r": "さいしょう",
    "m": {
      "en": "minimum",
      "zh-TW": "最小",
      "zh-CN": "最小",
      "ko": "최소",
      "vi": "nhỏ nhất",
      "id": "minimum"
    },
    "pos": "verb-godan",
    "ex": "最小ことにする"
  },
  {
    "id": "V0492",
    "w": "最新",
    "r": "さいしん",
    "m": {
      "en": "latest",
      "zh-TW": "最新",
      "zh-CN": "最新",
      "ko": "최신",
      "vi": "mới nhất",
      "id": "terbaru"
    },
    "pos": "noun",
    "ex": "最新について考える"
  },
  {
    "id": "V0493",
    "w": "最大",
    "r": "さいだい",
    "m": {
      "en": "maximum",
      "zh-TW": "最大",
      "zh-CN": "最大",
      "ko": "최대",
      "vi": "lớn nhất",
      "id": "maksimum"
    },
    "pos": "i-adj",
    "ex": "とても最大と思う"
  },
  {
    "id": "V0494",
    "w": "最低",
    "r": "さいてい",
    "m": {
      "en": "lowest",
      "zh-TW": "最低",
      "zh-CN": "最低",
      "ko": "최저",
      "vi": "thấp nhất",
      "id": "terendah"
    },
    "pos": "i-adj",
    "ex": "とても最低と思う"
  },
  {
    "id": "V0495",
    "w": "再度",
    "r": "さいど",
    "m": {
      "en": "again",
      "zh-TW": "再次",
      "zh-CN": "再次",
      "ko": "재차",
      "vi": "lần nữa",
      "id": "lagi"
    },
    "pos": "noun",
    "ex": "再度について考える"
  },
  {
    "id": "V0496",
    "w": "採用",
    "r": "さいよう",
    "m": {
      "en": "adoption",
      "zh-TW": "採用",
      "zh-CN": "采用",
      "ko": "채용",
      "vi": "tuyển dụng",
      "id": "adopsi"
    },
    "pos": "verb-godan",
    "ex": "採用ことにする"
  },
  {
    "id": "V0497",
    "w": "材料",
    "r": "ざいりょう",
    "m": {
      "en": "material",
      "zh-TW": "材料",
      "zh-CN": "材料",
      "ko": "재료",
      "vi": "nguyên liệu",
      "id": "bahan"
    },
    "pos": "verb-godan",
    "ex": "材料ことにする"
  },
  {
    "id": "V0498",
    "w": "境",
    "r": "さかい",
    "m": {
      "en": "border",
      "zh-TW": "邊界",
      "zh-CN": "边界",
      "ko": "경계",
      "vi": "biên giới",
      "id": "perbatasan"
    },
    "pos": "i-adj",
    "ex": "とても境と思う"
  },
  {
    "id": "V0499",
    "w": "盛ん",
    "r": "さかん",
    "m": {
      "en": "prosperous",
      "zh-TW": "繁榮",
      "zh-CN": "繁荣",
      "ko": "성한",
      "vi": "thịnh vượng",
      "id": "makmur"
    },
    "pos": "noun",
    "ex": "盛んについて考える"
  },
  {
    "id": "V0500",
    "w": "先",
    "r": "さき",
    "m": {
      "en": "ahead",
      "zh-TW": "前方",
      "zh-CN": "前方",
      "ko": "앞",
      "vi": "phía trước",
      "id": "depan"
    },
    "pos": "noun",
    "ex": "先について考える"
  },
  {
    "id": "V0501",
    "w": "咲く",
    "r": "さく",
    "m": {
      "en": "to bloom",
      "zh-TW": "開花",
      "zh-CN": "开花",
      "ko": "피다",
      "vi": "nở",
      "id": "mekar"
    },
    "pos": "verb-godan",
    "ex": "咲くことにする"
  },
  {
    "id": "V0502",
    "w": "探す",
    "r": "さがす",
    "m": {
      "en": "to search",
      "zh-TW": "尋找",
      "zh-CN": "寻找",
      "ko": "찾다",
      "vi": "tìm",
      "id": "mencari"
    },
    "pos": "verb-godan",
    "ex": "鍵を探す"
  },
  {
    "id": "V0503",
    "w": "下がる",
    "r": "さがる",
    "m": {
      "en": "to fall",
      "zh-TW": "下降",
      "zh-CN": "下降",
      "ko": "내려가다",
      "vi": "giảm",
      "id": "turun"
    },
    "pos": "verb-godan",
    "ex": "下がることにする"
  },
  {
    "id": "V0504",
    "w": "逆らう",
    "r": "さからう",
    "m": {
      "en": "to oppose",
      "zh-TW": "反對",
      "zh-CN": "反对",
      "ko": "거역하다",
      "vi": "chống lại",
      "id": "menentang"
    },
    "pos": "verb-godan",
    "ex": "逆らうことにする"
  },
  {
    "id": "V0505",
    "w": "叫ぶ",
    "r": "さけぶ",
    "m": {
      "en": "to shout",
      "zh-TW": "喊叫",
      "zh-CN": "喊叫",
      "ko": "외치다",
      "vi": "hét",
      "id": "berteriak"
    },
    "pos": "verb-godan",
    "ex": "叫ぶことにする"
  },
  {
    "id": "V0506",
    "w": "避ける",
    "r": "さける",
    "m": {
      "en": "to avoid",
      "zh-TW": "避免",
      "zh-CN": "避免",
      "ko": "피하다",
      "vi": "tránh",
      "id": "menghindari"
    },
    "pos": "verb-ichidan",
    "ex": "避けることにする"
  },
  {
    "id": "V0507",
    "w": "裂ける",
    "r": "さける",
    "m": {
      "en": "to tear",
      "zh-TW": "撕裂",
      "zh-CN": "撕裂",
      "ko": "찢어지다",
      "vi": "rách",
      "id": "sobek"
    },
    "pos": "verb-ichidan",
    "ex": "裂けることにする"
  },
  {
    "id": "V0508",
    "w": "支える",
    "r": "ささえる",
    "m": {
      "en": "to support",
      "zh-TW": "支持",
      "zh-CN": "支持",
      "ko": "지탱하다",
      "vi": "hỗ trợ",
      "id": "mendukung"
    },
    "pos": "verb-ichidan",
    "ex": "支えることにする"
  },
  {
    "id": "V0509",
    "w": "刺さる",
    "r": "ささる",
    "m": {
      "en": "to stick",
      "zh-TW": "刺入",
      "zh-CN": "刺入",
      "ko": "찔리다",
      "vi": "đâm vào",
      "id": "tongkat"
    },
    "pos": "verb-godan",
    "ex": "刺さることにする"
  },
  {
    "id": "V0510",
    "w": "指す",
    "r": "さす",
    "m": {
      "en": "to point",
      "zh-TW": "指",
      "zh-CN": "指",
      "ko": "가리키다",
      "vi": "chỉ",
      "id": "menunjuk"
    },
    "pos": "verb-godan",
    "ex": "指すことにする"
  },
  {
    "id": "V0511",
    "w": "差す",
    "r": "さす",
    "m": {
      "en": "to hold up",
      "zh-TW": "撐",
      "zh-CN": "撑",
      "ko": "꽂다",
      "vi": "che",
      "id": "menopang"
    },
    "pos": "verb-godan",
    "ex": "差すことにする"
  },
  {
    "id": "V0512",
    "w": "刺す",
    "r": "さす",
    "m": {
      "en": "to stab",
      "zh-TW": "刺",
      "zh-CN": "刺",
      "ko": "찌르다",
      "vi": "đâm",
      "id": "menusuk"
    },
    "pos": "verb-godan",
    "ex": "刺すことにする"
  },
  {
    "id": "V0513",
    "w": "誘う",
    "r": "さそう",
    "m": {
      "en": "to invite",
      "zh-TW": "邀請",
      "zh-CN": "邀请",
      "ko": "유혹하다",
      "vi": "mời",
      "id": "mengajak"
    },
    "pos": "verb-godan",
    "ex": "誘うことにする"
  },
  {
    "id": "V0514",
    "w": "定める",
    "r": "さだめる",
    "m": {
      "en": "to decide",
      "zh-TW": "決定",
      "zh-CN": "决定",
      "ko": "정하다",
      "vi": "quy định",
      "id": "memutuskan"
    },
    "pos": "verb-ichidan",
    "ex": "定めることにする"
  },
  {
    "id": "V0515",
    "w": "錆びる",
    "r": "さびる",
    "m": {
      "en": "to rust",
      "zh-TW": "生鏽",
      "zh-CN": "生锈",
      "ko": "녹슬다",
      "vi": "rỉ sét",
      "id": "berkarat"
    },
    "pos": "verb-godan",
    "ex": "錆びることにする"
  },
  {
    "id": "V0516",
    "w": "寂しい",
    "r": "さびしい",
    "m": {
      "en": "lonely",
      "zh-TW": "寂寞",
      "zh-CN": "寂寞",
      "ko": "외로운",
      "vi": "cô đơn",
      "id": "sepi"
    },
    "pos": "i-adj",
    "ex": "一人で寂しい"
  },
  {
    "id": "V0517",
    "w": "冷ます",
    "r": "さます",
    "m": {
      "en": "to cool",
      "zh-TW": "冷卻",
      "zh-CN": "冷却",
      "ko": "식히다",
      "vi": "làm nguội",
      "id": "sejuk"
    },
    "pos": "verb-godan",
    "ex": "冷ますことにする"
  },
  {
    "id": "V0518",
    "w": "覚ます",
    "r": "さます",
    "m": {
      "en": "to wake",
      "zh-TW": "叫醒",
      "zh-CN": "叫醒",
      "ko": "깨우다",
      "vi": "đánh thức",
      "id": "membangunkan"
    },
    "pos": "verb-godan",
    "ex": "覚ますことにする"
  },
  {
    "id": "V0519",
    "w": "冷める",
    "r": "さめる",
    "m": {
      "en": "to cool down",
      "zh-TW": "變涼",
      "zh-CN": "变凉",
      "ko": "식다",
      "vi": "nguội",
      "id": "mendingin"
    },
    "pos": "verb-ichidan",
    "ex": "冷めることにする"
  },
  {
    "id": "V0520",
    "w": "覚める",
    "r": "さめる",
    "m": {
      "en": "to wake up",
      "zh-TW": "醒來",
      "zh-CN": "醒来",
      "ko": "깨다",
      "vi": "tỉnh",
      "id": "bangun"
    },
    "pos": "verb-ichidan",
    "ex": "覚めることにする"
  },
  {
    "id": "V0521",
    "w": "触る",
    "r": "さわる",
    "m": {
      "en": "to touch",
      "zh-TW": "觸摸",
      "zh-CN": "触摸",
      "ko": "만지다",
      "vi": "chạm",
      "id": "menyentuh"
    },
    "pos": "verb-godan",
    "ex": "触ることにする"
  },
  {
    "id": "V0522",
    "w": "騒ぐ",
    "r": "さわぐ",
    "m": {
      "en": "to make noise",
      "zh-TW": "吵鬧",
      "zh-CN": "吵闹",
      "ko": "떠들다",
      "vi": "ồn ào",
      "id": "berisik"
    },
    "pos": "verb-godan",
    "ex": "騒ぐことにする"
  },
  {
    "id": "V0523",
    "w": "参加",
    "r": "さんか",
    "m": {
      "en": "participation",
      "zh-TW": "參加",
      "zh-CN": "参加",
      "ko": "참가",
      "vi": "tham gia",
      "id": "partisipasi"
    },
    "pos": "noun",
    "ex": "参加について考える"
  },
  {
    "id": "V0524",
    "w": "残業",
    "r": "ざんぎょう",
    "m": {
      "en": "overtime",
      "zh-TW": "加班",
      "zh-CN": "加班",
      "ko": "잔업",
      "vi": "làm thêm",
      "id": "lembur"
    },
    "pos": "verb-godan",
    "ex": "残業ことにする"
  },
  {
    "id": "V0525",
    "w": "算数",
    "r": "さんすう",
    "m": {
      "en": "arithmetic",
      "zh-TW": "算數",
      "zh-CN": "算数",
      "ko": "산수",
      "vi": "số học",
      "id": "aritmatika"
    },
    "pos": "verb-godan",
    "ex": "算数ことにする"
  },
  {
    "id": "V0526",
    "w": "賛成",
    "r": "さんせい",
    "m": {
      "en": "approval",
      "zh-TW": "贊成",
      "zh-CN": "赞成",
      "ko": "찬성",
      "vi": "tán thành",
      "id": "setuju"
    },
    "pos": "i-adj",
    "ex": "とても賛成と思う"
  },
  {
    "id": "V0527",
    "w": "残念",
    "r": "ざんねん",
    "m": {
      "en": "regrettable",
      "zh-TW": "遺憾",
      "zh-CN": "遗憾",
      "ko": "아쉬운",
      "vi": "tiếc",
      "id": "menyesal"
    },
    "pos": "noun",
    "ex": "参加できなくて残念だ"
  },
  {
    "id": "V0528",
    "w": "仕上がる",
    "r": "しあがる",
    "m": {
      "en": "to be finished",
      "zh-TW": "完成",
      "zh-CN": "完成",
      "ko": "완성되다",
      "vi": "hoàn thành",
      "id": "selesai"
    },
    "pos": "verb-godan",
    "ex": "仕上がることにする"
  },
  {
    "id": "V0529",
    "w": "仕上げる",
    "r": "しあげる",
    "m": {
      "en": "to finish",
      "zh-TW": "完成",
      "zh-CN": "完成",
      "ko": "완성하다",
      "vi": "hoàn thành",
      "id": "menyelesaikan"
    },
    "pos": "verb-godan",
    "ex": "仕上げることにする"
  },
  {
    "id": "V0530",
    "w": "幸せ",
    "r": "しあわせ",
    "m": {
      "en": "happiness",
      "zh-TW": "幸福",
      "zh-CN": "幸福",
      "ko": "행복",
      "vi": "hạnh phúc",
      "id": "kebahagiaan"
    },
    "pos": "noun",
    "ex": "幸せについて考える"
  },
  {
    "id": "V0531",
    "w": "強いる",
    "r": "しいる",
    "m": {
      "en": "to force",
      "zh-TW": "強迫",
      "zh-CN": "强迫",
      "ko": "강요하다",
      "vi": "ép buộc",
      "id": "memaksa"
    },
    "pos": "verb-ichidan",
    "ex": "強いることにする"
  },
  {
    "id": "V0532",
    "w": "塩",
    "r": "しお",
    "m": {
      "en": "salt",
      "zh-TW": "鹽",
      "zh-CN": "盐",
      "ko": "소금",
      "vi": "muối",
      "id": "garam"
    },
    "pos": "noun",
    "ex": "塩について考える"
  },
  {
    "id": "V0533",
    "w": "司会",
    "r": "しかい",
    "m": {
      "en": "emcee",
      "zh-TW": "主持",
      "zh-CN": "主持",
      "ko": "사회",
      "vi": "dẫn chương trình",
      "id": "pembawa acara"
    },
    "pos": "i-adj",
    "ex": "とても司会と思う"
  },
  {
    "id": "V0534",
    "w": "仕方",
    "r": "しかた",
    "m": {
      "en": "way",
      "zh-TW": "方法",
      "zh-CN": "方法",
      "ko": "방법",
      "vi": "cách",
      "id": "cara"
    },
    "pos": "noun",
    "ex": "仕方について考える"
  },
  {
    "id": "V0535",
    "w": "時期",
    "r": "じき",
    "m": {
      "en": "time",
      "zh-TW": "時期",
      "zh-CN": "时期",
      "ko": "시기",
      "vi": "thời kỳ",
      "id": "waktu"
    },
    "pos": "noun",
    "ex": "時期について考える"
  },
  {
    "id": "V0536",
    "w": "敷く",
    "r": "しく",
    "m": {
      "en": "to spread",
      "zh-TW": "鋪",
      "zh-CN": "铺",
      "ko": "깔다",
      "vi": "trải",
      "id": "menggelar"
    },
    "pos": "verb-godan",
    "ex": "敷くことにする"
  },
  {
    "id": "V0537",
    "w": "資源",
    "r": "しげん",
    "m": {
      "en": "resources",
      "zh-TW": "資源",
      "zh-CN": "资源",
      "ko": "자원",
      "vi": "tài nguyên",
      "id": "sumber daya"
    },
    "pos": "noun",
    "ex": "資源について考える"
  },
  {
    "id": "V0538",
    "w": "茂る",
    "r": "しげる",
    "m": {
      "en": "to grow thick",
      "zh-TW": "茂盛",
      "zh-CN": "茂盛",
      "ko": "무성하다",
      "vi": "rậm rạp",
      "id": "lebat"
    },
    "pos": "verb-godan",
    "ex": "茂ることにする"
  },
  {
    "id": "V0539",
    "w": "刺激",
    "r": "しげき",
    "m": {
      "en": "stimulus",
      "zh-TW": "刺激",
      "zh-CN": "刺激",
      "ko": "자극",
      "vi": "kích thích",
      "id": "rangsangan"
    },
    "pos": "noun",
    "ex": "刺激について考える"
  },
  {
    "id": "V0540",
    "w": "資産",
    "r": "しさん",
    "m": {
      "en": "assets",
      "zh-TW": "資產",
      "zh-CN": "资产",
      "ko": "자산",
      "vi": "tài sản",
      "id": "aset"
    },
    "pos": "noun",
    "ex": "資産について考える"
  },
  {
    "id": "V0541",
    "w": "支持",
    "r": "しじ",
    "m": {
      "en": "support",
      "zh-TW": "支持",
      "zh-CN": "支持",
      "ko": "지지",
      "vi": "ủng hộ",
      "id": "dukungan"
    },
    "pos": "noun",
    "ex": "支持について考える"
  },
  {
    "id": "V0542",
    "w": "指示",
    "r": "しじ",
    "m": {
      "en": "instruction",
      "zh-TW": "指示",
      "zh-CN": "指示",
      "ko": "지시",
      "vi": "chỉ thị",
      "id": "instruksi"
    },
    "pos": "noun",
    "ex": "指示について考える"
  },
  {
    "id": "V0543",
    "w": "市場",
    "r": "しじょう",
    "m": {
      "en": "market",
      "zh-TW": "市場",
      "zh-CN": "市场",
      "ko": "시장",
      "vi": "thị trường",
      "id": "pasar"
    },
    "pos": "verb-godan",
    "ex": "市場ことにする"
  },
  {
    "id": "V0544",
    "w": "沈む",
    "r": "しずむ",
    "m": {
      "en": "to sink",
      "zh-TW": "沉沒",
      "zh-CN": "沉没",
      "ko": "가라앉다",
      "vi": "chìm",
      "id": "tenggelam"
    },
    "pos": "verb-godan",
    "ex": "沈むことにする"
  },
  {
    "id": "V0545",
    "w": "静まる",
    "r": "しずまる",
    "m": {
      "en": "to calm down",
      "zh-TW": "平靜",
      "zh-CN": "平静",
      "ko": "잠잠해지다",
      "vi": "im lặng",
      "id": "tenang"
    },
    "pos": "verb-godan",
    "ex": "静まることにする"
  },
  {
    "id": "V0546",
    "w": "沈める",
    "r": "しずめる",
    "m": {
      "en": "to sink",
      "zh-TW": "使沉沒",
      "zh-CN": "使沉没",
      "ko": "가라앉히다",
      "vi": "đánh chìm",
      "id": "menenggelamkan"
    },
    "pos": "verb-ichidan",
    "ex": "沈めることにする"
  },
  {
    "id": "V0547",
    "w": "静める",
    "r": "しずめる",
    "m": {
      "en": "to quiet",
      "zh-TW": "使平靜",
      "zh-CN": "使平静",
      "ko": "진정시키다",
      "vi": "làm yên",
      "id": "tenang"
    },
    "pos": "verb-ichidan",
    "ex": "静めることにする"
  },
  {
    "id": "V0548",
    "w": "施設",
    "r": "しせつ",
    "m": {
      "en": "facility",
      "zh-TW": "設施",
      "zh-CN": "设施",
      "ko": "시설",
      "vi": "cơ sở",
      "id": "fasilitas"
    },
    "pos": "verb-godan",
    "ex": "施設ことにする"
  },
  {
    "id": "V0549",
    "w": "姿勢",
    "r": "しせい",
    "m": {
      "en": "posture",
      "zh-TW": "姿勢",
      "zh-CN": "姿势",
      "ko": "자세",
      "vi": "tư thế",
      "id": "postur"
    },
    "pos": "i-adj",
    "ex": "とても姿勢と思う"
  },
  {
    "id": "V0550",
    "w": "思想",
    "r": "しそう",
    "m": {
      "en": "thought",
      "zh-TW": "思想",
      "zh-CN": "思想",
      "ko": "사상",
      "vi": "tư tưởng",
      "id": "pikiran"
    },
    "pos": "verb-godan",
    "ex": "思想ことにする"
  },
  {
    "id": "V0551",
    "w": "舌",
    "r": "した",
    "m": {
      "en": "tongue",
      "zh-TW": "舌頭",
      "zh-CN": "舌头",
      "ko": "혀",
      "vi": "lưỡi",
      "id": "lidah"
    },
    "pos": "noun",
    "ex": "舌について考える"
  },
  {
    "id": "V0552",
    "w": "下着",
    "r": "したぎ",
    "m": {
      "en": "underwear",
      "zh-TW": "內衣",
      "zh-CN": "内衣",
      "ko": "속옷",
      "vi": "đồ lót",
      "id": "pakaian dalam"
    },
    "pos": "noun",
    "ex": "下着について考える"
  },
  {
    "id": "V0553",
    "w": "支度",
    "r": "したく",
    "m": {
      "en": "preparation",
      "zh-TW": "準備",
      "zh-CN": "准备",
      "ko": "준비",
      "vi": "chuẩn bị",
      "id": "persiapan"
    },
    "pos": "verb-godan",
    "ex": "支度ことにする"
  },
  {
    "id": "V0554",
    "w": "親しい",
    "r": "したしい",
    "m": {
      "en": "close",
      "zh-TW": "親近",
      "zh-CN": "亲近",
      "ko": "친한",
      "vi": "thân",
      "id": "akrab"
    },
    "pos": "i-adj",
    "ex": "とても親しいと思う"
  },
  {
    "id": "V0555",
    "w": "親しむ",
    "r": "したしむ",
    "m": {
      "en": "to befriend",
      "zh-TW": "親近",
      "zh-CN": "亲近",
      "ko": "친해지다",
      "vi": "làm quen",
      "id": "berteman"
    },
    "pos": "verb-godan",
    "ex": "親しむことにする"
  },
  {
    "id": "V0556",
    "w": "したがって",
    "r": "したがって",
    "m": {
      "en": "therefore",
      "zh-TW": "因此",
      "zh-CN": "因此",
      "ko": "따라서",
      "vi": "do đó",
      "id": "oleh karena itu"
    },
    "pos": "noun",
    "ex": "したがってについて考える"
  },
  {
    "id": "V0557",
    "w": "従う",
    "r": "したがう",
    "m": {
      "en": "to follow",
      "zh-TW": "遵從",
      "zh-CN": "遵从",
      "ko": "따르다",
      "vi": "tuân theo",
      "id": "mengikuti"
    },
    "pos": "verb-godan",
    "ex": "従うことにする"
  },
  {
    "id": "V0558",
    "w": "失業",
    "r": "しつぎょう",
    "m": {
      "en": "unemployment",
      "zh-TW": "失業",
      "zh-CN": "失业",
      "ko": "실업",
      "vi": "thất nghiệp",
      "id": "pengangguran"
    },
    "pos": "verb-godan",
    "ex": "失業ことにする"
  },
  {
    "id": "V0559",
    "w": "実験",
    "r": "じっけん",
    "m": {
      "en": "experiment",
      "zh-TW": "實驗",
      "zh-CN": "实验",
      "ko": "실험",
      "vi": "thí nghiệm",
      "id": "eksperimen"
    },
    "pos": "noun",
    "ex": "実験について考える",
    "syn": [
      "試す",
      "テストする",
      "検証する"
    ]
  },
  {
    "id": "V0560",
    "w": "実現",
    "r": "じつげん",
    "m": {
      "en": "realization",
      "zh-TW": "實現",
      "zh-CN": "实现",
      "ko": "실현",
      "vi": "thực hiện",
      "id": "realisasi"
    },
    "pos": "noun",
    "ex": "実現について考える"
  },
  {
    "id": "V0561",
    "w": "実行",
    "r": "じっこう",
    "m": {
      "en": "execution",
      "zh-TW": "執行",
      "zh-CN": "执行",
      "ko": "실행",
      "vi": "thực hiện",
      "id": "pelaksanaan"
    },
    "pos": "verb-godan",
    "ex": "実行ことにする"
  },
  {
    "id": "V0562",
    "w": "実施",
    "r": "じっし",
    "m": {
      "en": "implementation",
      "zh-TW": "實施",
      "zh-CN": "实施",
      "ko": "실시",
      "vi": "thực thi",
      "id": "implementasi"
    },
    "pos": "noun",
    "ex": "実施について考える"
  },
  {
    "id": "V0563",
    "w": "実績",
    "r": "じっせき",
    "m": {
      "en": "achievement",
      "zh-TW": "業績",
      "zh-CN": "业绩",
      "ko": "실적",
      "vi": "thành tích",
      "id": "prestasi"
    },
    "pos": "noun",
    "ex": "実績について考える"
  },
  {
    "id": "V0564",
    "w": "実態",
    "r": "じったい",
    "m": {
      "en": "actual state",
      "zh-TW": "實態",
      "zh-CN": "实态",
      "ko": "실태",
      "vi": "thực trạng",
      "id": "keadaan sebenarnya"
    },
    "pos": "i-adj",
    "ex": "とても実態と思う"
  },
  {
    "id": "V0565",
    "w": "失望",
    "r": "しつぼう",
    "m": {
      "en": "disappointment",
      "zh-TW": "失望",
      "zh-CN": "失望",
      "ko": "실망",
      "vi": "thất vọng",
      "id": "kekecewaan"
    },
    "pos": "verb-godan",
    "ex": "失望ことにする"
  },
  {
    "id": "V0566",
    "w": "湿る",
    "r": "しめる",
    "m": {
      "en": "to get damp",
      "zh-TW": "潮濕",
      "zh-CN": "潮湿",
      "ko": "축축해지다",
      "vi": "ẩm",
      "id": "lembap"
    },
    "pos": "verb-ichidan",
    "ex": "湿ることにする"
  },
  {
    "id": "V0567",
    "w": "占める",
    "r": "しめる",
    "m": {
      "en": "to occupy",
      "zh-TW": "佔據",
      "zh-CN": "占据",
      "ko": "차지하다",
      "vi": "chiếm",
      "id": "menempati"
    },
    "pos": "verb-ichidan",
    "ex": "占めることにする"
  },
  {
    "id": "V0568",
    "w": "締める",
    "r": "しめる",
    "m": {
      "en": "to tighten",
      "zh-TW": "繫緊",
      "zh-CN": "系紧",
      "ko": "조이다",
      "vi": "thắt",
      "id": "mengencangkan"
    },
    "pos": "verb-ichidan",
    "ex": "締めることにする"
  },
  {
    "id": "V0569",
    "w": "閉める",
    "r": "しめる",
    "m": {
      "en": "to close",
      "zh-TW": "關閉",
      "zh-CN": "关闭",
      "ko": "닫다",
      "vi": "đóng",
      "id": "menutup"
    },
    "pos": "verb-ichidan",
    "ex": "閉めることにする"
  },
  {
    "id": "V0570",
    "w": "示す",
    "r": "しめす",
    "m": {
      "en": "to show",
      "zh-TW": "表示",
      "zh-CN": "表示",
      "ko": "보여주다",
      "vi": "chỉ ra",
      "id": "menunjukkan"
    },
    "pos": "verb-godan",
    "ex": "示すことにする"
  },
  {
    "id": "V0571",
    "w": "霜",
    "r": "しも",
    "m": {
      "en": "frost",
      "zh-TW": "霜",
      "zh-CN": "霜",
      "ko": "서리",
      "vi": "sương giá",
      "id": "embun beku"
    },
    "pos": "noun",
    "ex": "霜について考える"
  },
  {
    "id": "V0572",
    "w": "社会",
    "r": "しゃかい",
    "m": {
      "en": "society",
      "zh-TW": "社會",
      "zh-CN": "社会",
      "ko": "사회",
      "vi": "xã hội",
      "id": "masyarakat"
    },
    "pos": "i-adj",
    "ex": "社会に貢献する"
  },
  {
    "id": "V0573",
    "w": "車庫",
    "r": "しゃこ",
    "m": {
      "en": "garage",
      "zh-TW": "車庫",
      "zh-CN": "车库",
      "ko": "차고",
      "vi": "nhà để xe",
      "id": "garasi"
    },
    "pos": "noun",
    "ex": "車庫について考える"
  },
  {
    "id": "V0574",
    "w": "借金",
    "r": "しゃっきん",
    "m": {
      "en": "debt",
      "zh-TW": "債務",
      "zh-CN": "债务",
      "ko": "빚",
      "vi": "nợ",
      "id": "utang"
    },
    "pos": "noun",
    "ex": "借金について考える"
  },
  {
    "id": "V0575",
    "w": "斜面",
    "r": "しゃめん",
    "m": {
      "en": "slope",
      "zh-TW": "斜面",
      "zh-CN": "斜面",
      "ko": "사면",
      "vi": "sườn dốc",
      "id": "lereng"
    },
    "pos": "noun",
    "ex": "斜面について考える"
  },
  {
    "id": "V0576",
    "w": "車両",
    "r": "しゃりょう",
    "m": {
      "en": "vehicle",
      "zh-TW": "車輛",
      "zh-CN": "车辆",
      "ko": "차량",
      "vi": "xe cộ",
      "id": "kendaraan"
    },
    "pos": "verb-godan",
    "ex": "車両ことにする"
  },
  {
    "id": "V0577",
    "w": "自由",
    "r": "じゆう",
    "m": {
      "en": "freedom",
      "zh-TW": "自由",
      "zh-CN": "自由",
      "ko": "자유",
      "vi": "tự do",
      "id": "kebebasan"
    },
    "pos": "verb-godan",
    "ex": "自由に意見を言う"
  },
  {
    "id": "V0578",
    "w": "収穫",
    "r": "しゅうかく",
    "m": {
      "en": "harvest",
      "zh-TW": "收穫",
      "zh-CN": "收获",
      "ko": "수확",
      "vi": "thu hoạch",
      "id": "panen"
    },
    "pos": "verb-godan",
    "ex": "収穫ことにする"
  },
  {
    "id": "V0579",
    "w": "習慣",
    "r": "しゅうかん",
    "m": {
      "en": "habit",
      "zh-TW": "習慣",
      "zh-CN": "习惯",
      "ko": "습관",
      "vi": "thói quen",
      "id": "kebiasaan"
    },
    "pos": "noun",
    "ex": "良い習慣を身につける"
  },
  {
    "id": "V0580",
    "w": "週刊",
    "r": "しゅうかん",
    "m": {
      "en": "weekly",
      "zh-TW": "週刊",
      "zh-CN": "周刊",
      "ko": "주간",
      "vi": "tuần san",
      "id": "mingguan"
    },
    "pos": "noun",
    "ex": "週刊について考える"
  },
  {
    "id": "V0581",
    "w": "就業",
    "r": "しゅうぎょう",
    "m": {
      "en": "employment",
      "zh-TW": "就業",
      "zh-CN": "就业",
      "ko": "취업",
      "vi": "việc làm",
      "id": "pekerjaan"
    },
    "pos": "verb-godan",
    "ex": "就業ことにする"
  },
  {
    "id": "V0582",
    "w": "宗教",
    "r": "しゅうきょう",
    "m": {
      "en": "religion",
      "zh-TW": "宗教",
      "zh-CN": "宗教",
      "ko": "종교",
      "vi": "tôn giáo",
      "id": "agama"
    },
    "pos": "verb-godan",
    "ex": "宗教ことにする"
  },
  {
    "id": "V0583",
    "w": "集合",
    "r": "しゅうごう",
    "m": {
      "en": "gathering",
      "zh-TW": "集合",
      "zh-CN": "集合",
      "ko": "집합",
      "vi": "tập hợp",
      "id": "berkumpul"
    },
    "pos": "verb-godan",
    "ex": "集合ことにする"
  },
  {
    "id": "V0584",
    "w": "収支",
    "r": "しゅうし",
    "m": {
      "en": "income and expenditure",
      "zh-TW": "收支",
      "zh-CN": "收支",
      "ko": "수지",
      "vi": "thu chi",
      "id": "pemasukan dan pengeluaran"
    },
    "pos": "noun",
    "ex": "収支について考える"
  },
  {
    "id": "V0585",
    "w": "終始",
    "r": "しゅうし",
    "m": {
      "en": "from start to end",
      "zh-TW": "始終",
      "zh-CN": "始终",
      "ko": "종시",
      "vi": "từ đầu đến cuối",
      "id": "dari awal sampai akhir"
    },
    "pos": "noun",
    "ex": "終始について考える"
  },
  {
    "id": "V0586",
    "w": "修正",
    "r": "しゅうせい",
    "m": {
      "en": "correction",
      "zh-TW": "修正",
      "zh-CN": "修正",
      "ko": "수정",
      "vi": "sửa chữa",
      "id": "koreksi"
    },
    "pos": "i-adj",
    "ex": "とても修正と思う"
  },
  {
    "id": "V0587",
    "w": "就職",
    "r": "しゅうしょく",
    "m": {
      "en": "employment",
      "zh-TW": "就職",
      "zh-CN": "就职",
      "ko": "취직",
      "vi": "xin việc",
      "id": "mendapat kerja"
    },
    "pos": "verb-godan",
    "ex": "就職ことにする"
  },
  {
    "id": "V0588",
    "w": "収入",
    "r": "しゅうにゅう",
    "m": {
      "en": "income",
      "zh-TW": "收入",
      "zh-CN": "收入",
      "ko": "수입",
      "vi": "thu nhập",
      "id": "pendapatan"
    },
    "pos": "verb-godan",
    "ex": "収入ことにする"
  },
  {
    "id": "V0589",
    "w": "周辺",
    "r": "しゅうへん",
    "m": {
      "en": "surroundings",
      "zh-TW": "周邊",
      "zh-CN": "周边",
      "ko": "주변",
      "vi": "xung quanh",
      "id": "sekitar"
    },
    "pos": "noun",
    "ex": "周辺について考える"
  },
  {
    "id": "V0590",
    "w": "修理",
    "r": "しゅうり",
    "m": {
      "en": "repair",
      "zh-TW": "修理",
      "zh-CN": "修理",
      "ko": "수리",
      "vi": "sửa chữa",
      "id": "perbaikan"
    },
    "pos": "noun",
    "ex": "修理について考える"
  },
  {
    "id": "V0591",
    "w": "終了",
    "r": "しゅうりょう",
    "m": {
      "en": "end",
      "zh-TW": "結束",
      "zh-CN": "结束",
      "ko": "종료",
      "vi": "kết thúc",
      "id": "selesai"
    },
    "pos": "verb-godan",
    "ex": "終了ことにする"
  },
  {
    "id": "V0592",
    "w": "主義",
    "r": "しゅぎ",
    "m": {
      "en": "principle",
      "zh-TW": "主義",
      "zh-CN": "主义",
      "ko": "주의",
      "vi": "chủ nghĩa",
      "id": "prinsip"
    },
    "pos": "noun",
    "ex": "主義について考える"
  },
  {
    "id": "V0593",
    "w": "祝日",
    "r": "しゅくじつ",
    "m": {
      "en": "holiday",
      "zh-TW": "節日",
      "zh-CN": "节日",
      "ko": "축일",
      "vi": "ngày lễ",
      "id": "hari libur"
    },
    "pos": "verb-godan",
    "ex": "祝日ことにする"
  },
  {
    "id": "V0594",
    "w": "縮小",
    "r": "しゅくしょう",
    "m": {
      "en": "reduction",
      "zh-TW": "縮小",
      "zh-CN": "缩小",
      "ko": "축소",
      "vi": "thu nhỏ",
      "id": "pengurangan"
    },
    "pos": "verb-godan",
    "ex": "縮小ことにする"
  },
  {
    "id": "V0595",
    "w": "主張",
    "r": "しゅちょう",
    "m": {
      "en": "claim",
      "zh-TW": "主張",
      "zh-CN": "主张",
      "ko": "주장",
      "vi": "chủ trương",
      "id": "klaim"
    },
    "pos": "verb-godan",
    "ex": "主張ことにする"
  },
  {
    "id": "V0596",
    "w": "出勤",
    "r": "しゅっきん",
    "m": {
      "en": "going to work",
      "zh-TW": "上班",
      "zh-CN": "上班",
      "ko": "출근",
      "vi": "đi làm",
      "id": "masuk kerja"
    },
    "pos": "noun",
    "ex": "出勤について考える"
  },
  {
    "id": "V0597",
    "w": "出現",
    "r": "しゅつげん",
    "m": {
      "en": "appearance",
      "zh-TW": "出現",
      "zh-CN": "出现",
      "ko": "출현",
      "vi": "xuất hiện",
      "id": "kemunculan"
    },
    "pos": "noun",
    "ex": "出現について考える"
  },
  {
    "id": "V0598",
    "w": "出張",
    "r": "しゅっちょう",
    "m": {
      "en": "business trip",
      "zh-TW": "出差",
      "zh-CN": "出差",
      "ko": "출장",
      "vi": "công tác",
      "id": "perjalanan bisnis"
    },
    "pos": "verb-godan",
    "ex": "出張ことにする"
  },
  {
    "id": "V0599",
    "w": "出版",
    "r": "しゅっぱん",
    "m": {
      "en": "publishing",
      "zh-TW": "出版",
      "zh-CN": "出版",
      "ko": "출판",
      "vi": "xuất bản",
      "id": "penerbitan"
    },
    "pos": "noun",
    "ex": "出版について考える"
  },
  {
    "id": "V0600",
    "w": "主婦",
    "r": "しゅふ",
    "m": {
      "en": "housewife",
      "zh-TW": "主婦",
      "zh-CN": "主妇",
      "ko": "주부",
      "vi": "nội trợ",
      "id": "ibu rumah tangga"
    },
    "pos": "noun",
    "ex": "主婦について考える"
  },
  {
    "id": "V0601",
    "w": "主要",
    "r": "しゅよう",
    "m": {
      "en": "main",
      "zh-TW": "主要",
      "zh-CN": "主要",
      "ko": "주요",
      "vi": "chính",
      "id": "utama"
    },
    "pos": "verb-godan",
    "ex": "主要ことにする"
  },
  {
    "id": "V0602",
    "w": "需要",
    "r": "じゅよう",
    "m": {
      "en": "demand",
      "zh-TW": "需求",
      "zh-CN": "需求",
      "ko": "수요",
      "vi": "nhu cầu",
      "id": "permintaan"
    },
    "pos": "verb-godan",
    "ex": "需要ことにする"
  },
  {
    "id": "V0603",
    "w": "種類",
    "r": "しゅるい",
    "m": {
      "en": "type",
      "zh-TW": "種類",
      "zh-CN": "种类",
      "ko": "종류",
      "vi": "loại",
      "id": "jenis"
    },
    "pos": "i-adj",
    "ex": "とても種類と思う"
  },
  {
    "id": "V0604",
    "w": "瞬間",
    "r": "しゅんかん",
    "m": {
      "en": "moment",
      "zh-TW": "瞬間",
      "zh-CN": "瞬间",
      "ko": "순간",
      "vi": "khoảnh khắc",
      "id": "saat"
    },
    "pos": "noun",
    "ex": "瞬間について考える"
  },
  {
    "id": "V0605",
    "w": "順調",
    "r": "じゅんちょう",
    "m": {
      "en": "smooth",
      "zh-TW": "順利",
      "zh-CN": "顺利",
      "ko": "순조로운",
      "vi": "thuận lợi",
      "id": "halus"
    },
    "pos": "verb-godan",
    "ex": "順調ことにする"
  },
  {
    "id": "V0606",
    "w": "順番",
    "r": "じゅんばん",
    "m": {
      "en": "turn",
      "zh-TW": "順序",
      "zh-CN": "顺序",
      "ko": "순번",
      "vi": "lượt",
      "id": "giliran"
    },
    "pos": "noun",
    "ex": "順番について考える"
  },
  {
    "id": "V0607",
    "w": "賞",
    "r": "しょう",
    "m": {
      "en": "prize",
      "zh-TW": "獎",
      "zh-CN": "奖",
      "ko": "상",
      "vi": "giải thưởng",
      "id": "hadiah"
    },
    "pos": "verb-godan",
    "ex": "賞ことにする"
  },
  {
    "id": "V0608",
    "w": "障害",
    "r": "しょうがい",
    "m": {
      "en": "obstacle",
      "zh-TW": "障礙",
      "zh-CN": "障碍",
      "ko": "장애",
      "vi": "trở ngại",
      "id": "hambatan"
    },
    "pos": "i-adj",
    "ex": "とても障害と思う"
  },
  {
    "id": "V0609",
    "w": "生涯",
    "r": "しょうがい",
    "m": {
      "en": "lifetime",
      "zh-TW": "一生",
      "zh-CN": "一生",
      "ko": "생애",
      "vi": "cuộc đời",
      "id": "seumur hidup"
    },
    "pos": "i-adj",
    "ex": "とても生涯と思う"
  },
  {
    "id": "V0610",
    "w": "奨学金",
    "r": "しょうがくきん",
    "m": {
      "en": "scholarship",
      "zh-TW": "獎學金",
      "zh-CN": "奖学金",
      "ko": "장학금",
      "vi": "học bổng",
      "id": "beasiswa"
    },
    "pos": "noun",
    "ex": "奨学金について考える"
  },
  {
    "id": "V0611",
    "w": "紹介",
    "r": "しょうかい",
    "m": {
      "en": "introduction",
      "zh-TW": "介紹",
      "zh-CN": "介绍",
      "ko": "소개",
      "vi": "giới thiệu",
      "id": "perkenalan"
    },
    "pos": "i-adj",
    "ex": "友達を紹介する"
  },
  {
    "id": "V0612",
    "w": "消化",
    "r": "しょうか",
    "m": {
      "en": "digestion",
      "zh-TW": "消化",
      "zh-CN": "消化",
      "ko": "소화",
      "vi": "tiêu hóa",
      "id": "pencernaan"
    },
    "pos": "noun",
    "ex": "消化について考える"
  },
  {
    "id": "V0613",
    "w": "上級",
    "r": "じょうきゅう",
    "m": {
      "en": "advanced",
      "zh-TW": "高級",
      "zh-CN": "高级",
      "ko": "상급",
      "vi": "cao cấp",
      "id": "tingkat atas"
    },
    "pos": "verb-godan",
    "ex": "上級ことにする"
  },
  {
    "id": "V0614",
    "w": "条件",
    "r": "じょうけん",
    "m": {
      "en": "condition",
      "zh-TW": "條件",
      "zh-CN": "条件",
      "ko": "조건",
      "vi": "điều kiện",
      "id": "syarat"
    },
    "pos": "noun",
    "ex": "条件を満たす",
    "syn": [
      "要件",
      "資格",
      "前提"
    ]
  },
  {
    "id": "V0615",
    "w": "状況",
    "r": "じょうきょう",
    "m": {
      "en": "situation",
      "zh-TW": "狀況",
      "zh-CN": "状况",
      "ko": "상황",
      "vi": "tình hình",
      "id": "situasi"
    },
    "pos": "verb-godan",
    "ex": "現在の状況を説明する",
    "syn": [
      "状態",
      "事情",
      "情勢"
    ]
  },
  {
    "id": "V0616",
    "w": "上司",
    "r": "じょうし",
    "m": {
      "en": "boss",
      "zh-TW": "上司",
      "zh-CN": "上司",
      "ko": "상사",
      "vi": "cấp trên",
      "id": "atasan"
    },
    "pos": "noun",
    "ex": "上司について考える"
  },
  {
    "id": "V0617",
    "w": "乗車",
    "r": "じょうしゃ",
    "m": {
      "en": "boarding",
      "zh-TW": "乘車",
      "zh-CN": "乘车",
      "ko": "승차",
      "vi": "lên xe",
      "id": "naik kendaraan"
    },
    "pos": "noun",
    "ex": "乗車について考える"
  },
  {
    "id": "V0618",
    "w": "状態",
    "r": "じょうたい",
    "m": {
      "en": "state",
      "zh-TW": "狀態",
      "zh-CN": "状态",
      "ko": "상태",
      "vi": "trạng thái",
      "id": "keadaan"
    },
    "pos": "i-adj",
    "ex": "とても状態と思う"
  },
  {
    "id": "V0619",
    "w": "冗談",
    "r": "じょうだん",
    "m": {
      "en": "joke",
      "zh-TW": "玩笑",
      "zh-CN": "玩笑",
      "ko": "농담",
      "vi": "đùa",
      "id": "lelucon"
    },
    "pos": "noun",
    "ex": "冗談について考える"
  },
  {
    "id": "V0620",
    "w": "上達",
    "r": "じょうたつ",
    "m": {
      "en": "improvement",
      "zh-TW": "進步",
      "zh-CN": "进步",
      "ko": "상달",
      "vi": "tiến bộ",
      "id": "kemajuan"
    },
    "pos": "verb-godan",
    "ex": "上達ことにする"
  },
  {
    "id": "V0621",
    "w": "承知",
    "r": "しょうち",
    "m": {
      "en": "consent",
      "zh-TW": "知道",
      "zh-CN": "知道",
      "ko": "승지",
      "vi": "biết",
      "id": "mengetahui"
    },
    "pos": "noun",
    "ex": "承知について考える"
  },
  {
    "id": "V0622",
    "w": "焦点",
    "r": "しょうてん",
    "m": {
      "en": "focus",
      "zh-TW": "焦點",
      "zh-CN": "焦点",
      "ko": "초점",
      "vi": "tiêu điểm",
      "id": "fokus"
    },
    "pos": "noun",
    "ex": "焦点について考える"
  },
  {
    "id": "V0623",
    "w": "商売",
    "r": "しょうばい",
    "m": {
      "en": "business",
      "zh-TW": "買賣",
      "zh-CN": "买卖",
      "ko": "장사",
      "vi": "buôn bán",
      "id": "bisnis"
    },
    "pos": "i-adj",
    "ex": "とても商売と思う"
  },
  {
    "id": "V0624",
    "w": "消費",
    "r": "しょうひ",
    "m": {
      "en": "consumption",
      "zh-TW": "消費",
      "zh-CN": "消费",
      "ko": "소비",
      "vi": "tiêu dùng",
      "id": "konsumsi"
    },
    "pos": "noun",
    "ex": "消費について考える"
  },
  {
    "id": "V0625",
    "w": "商品",
    "r": "しょうひん",
    "m": {
      "en": "product",
      "zh-TW": "商品",
      "zh-CN": "商品",
      "ko": "상품",
      "vi": "sản phẩm",
      "id": "produk"
    },
    "pos": "noun",
    "ex": "商品について考える"
  },
  {
    "id": "V0626",
    "w": "勝負",
    "r": "しょうぶ",
    "m": {
      "en": "match",
      "zh-TW": "勝負",
      "zh-CN": "胜负",
      "ko": "승부",
      "vi": "thắng thua",
      "id": "pertandingan"
    },
    "pos": "verb-godan",
    "ex": "勝負ことにする"
  },
  {
    "id": "V0627",
    "w": "正面",
    "r": "しょうめん",
    "m": {
      "en": "front",
      "zh-TW": "正面",
      "zh-CN": "正面",
      "ko": "정면",
      "vi": "mặt trước",
      "id": "depan"
    },
    "pos": "noun",
    "ex": "正面について考える"
  },
  {
    "id": "V0628",
    "w": "証明",
    "r": "しょうめい",
    "m": {
      "en": "proof",
      "zh-TW": "證明",
      "zh-CN": "证明",
      "ko": "증명",
      "vi": "chứng minh",
      "id": "bukti"
    },
    "pos": "i-adj",
    "ex": "とても証明と思う",
    "syn": [
      "立証する",
      "実証する",
      "明らかにする"
    ]
  },
  {
    "id": "V0629",
    "w": "照明",
    "r": "しょうめい",
    "m": {
      "en": "lighting",
      "zh-TW": "照明",
      "zh-CN": "照明",
      "ko": "조명",
      "vi": "chiếu sáng",
      "id": "penerangan"
    },
    "pos": "i-adj",
    "ex": "とても照明と思う"
  },
  {
    "id": "V0630",
    "w": "将来",
    "r": "しょうらい",
    "m": {
      "en": "future",
      "zh-TW": "將來",
      "zh-CN": "将来",
      "ko": "장래",
      "vi": "tương lai",
      "id": "masa depan"
    },
    "pos": "i-adj",
    "ex": "将来の夢を語る"
  },
  {
    "id": "V0631",
    "w": "省略",
    "r": "しょうりゃく",
    "m": {
      "en": "omission",
      "zh-TW": "省略",
      "zh-CN": "省略",
      "ko": "생략",
      "vi": "lược bỏ",
      "id": "penghilangan"
    },
    "pos": "verb-godan",
    "ex": "省略ことにする"
  },
  {
    "id": "V0632",
    "w": "勝利",
    "r": "しょうり",
    "m": {
      "en": "victory",
      "zh-TW": "勝利",
      "zh-CN": "胜利",
      "ko": "승리",
      "vi": "chiến thắng",
      "id": "kemenangan"
    },
    "pos": "noun",
    "ex": "勝利について考える"
  },
  {
    "id": "V0633",
    "w": "職業",
    "r": "しょくぎょう",
    "m": {
      "en": "occupation",
      "zh-TW": "職業",
      "zh-CN": "职业",
      "ko": "직업",
      "vi": "nghề nghiệp",
      "id": "pekerjaan"
    },
    "pos": "verb-godan",
    "ex": "職業ことにする"
  },
  {
    "id": "V0634",
    "w": "食品",
    "r": "しょくひん",
    "m": {
      "en": "food",
      "zh-TW": "食品",
      "zh-CN": "食品",
      "ko": "식품",
      "vi": "thực phẩm",
      "id": "makanan"
    },
    "pos": "noun",
    "ex": "食品について考える"
  },
  {
    "id": "V0635",
    "w": "食欲",
    "r": "しょくよく",
    "m": {
      "en": "appetite",
      "zh-TW": "食慾",
      "zh-CN": "食欲",
      "ko": "식욕",
      "vi": "khẩu vị",
      "id": "nafsu makan"
    },
    "pos": "verb-godan",
    "ex": "食欲ことにする"
  },
  {
    "id": "V0636",
    "w": "食料",
    "r": "しょくりょう",
    "m": {
      "en": "food",
      "zh-TW": "食物",
      "zh-CN": "食物",
      "ko": "식료",
      "vi": "lương thực",
      "id": "makanan"
    },
    "pos": "verb-godan",
    "ex": "食料ことにする"
  },
  {
    "id": "V0637",
    "w": "処理",
    "r": "しょり",
    "m": {
      "en": "processing",
      "zh-TW": "處理",
      "zh-CN": "处理",
      "ko": "처리",
      "vi": "xử lý",
      "id": "pemrosesan"
    },
    "pos": "noun",
    "ex": "処理について考える"
  },
  {
    "id": "V0638",
    "w": "知らせ",
    "r": "しらせ",
    "m": {
      "en": "notice",
      "zh-TW": "通知",
      "zh-CN": "通知",
      "ko": "알림",
      "vi": "thông báo",
      "id": "pemberitahuan"
    },
    "pos": "noun",
    "ex": "知らせについて考える"
  },
  {
    "id": "V0639",
    "w": "進化",
    "r": "しんか",
    "m": {
      "en": "evolution",
      "zh-TW": "進化",
      "zh-CN": "进化",
      "ko": "진화",
      "vi": "tiến hóa",
      "id": "evolusi"
    },
    "pos": "noun",
    "ex": "進化について考える"
  },
  {
    "id": "V0640",
    "w": "人格",
    "r": "じんかく",
    "m": {
      "en": "personality",
      "zh-TW": "人格",
      "zh-CN": "人格",
      "ko": "인격",
      "vi": "nhân cách",
      "id": "kepribadian"
    },
    "pos": "verb-godan",
    "ex": "人格ことにする"
  },
  {
    "id": "V0641",
    "w": "信仰",
    "r": "しんこう",
    "m": {
      "en": "faith",
      "zh-TW": "信仰",
      "zh-CN": "信仰",
      "ko": "신앙",
      "vi": "tín ngưỡng",
      "id": "iman"
    },
    "pos": "verb-godan",
    "ex": "信仰ことにする"
  },
  {
    "id": "V0642",
    "w": "進行",
    "r": "しんこう",
    "m": {
      "en": "progress",
      "zh-TW": "進行",
      "zh-CN": "进行",
      "ko": "진행",
      "vi": "tiến hành",
      "id": "kemajuan"
    },
    "pos": "verb-godan",
    "ex": "進行ことにする"
  },
  {
    "id": "V0643",
    "w": "人材",
    "r": "じんざい",
    "m": {
      "en": "human resources",
      "zh-TW": "人才",
      "zh-CN": "人才",
      "ko": "인재",
      "vi": "nhân tài",
      "id": "SDM"
    },
    "pos": "i-adj",
    "ex": "とても人材と思う"
  },
  {
    "id": "V0644",
    "w": "心臓",
    "r": "しんぞう",
    "m": {
      "en": "heart",
      "zh-TW": "心臟",
      "zh-CN": "心脏",
      "ko": "심장",
      "vi": "trái tim",
      "id": "hati"
    },
    "pos": "verb-godan",
    "ex": "心臓ことにする"
  },
  {
    "id": "V0645",
    "w": "申請",
    "r": "しんせい",
    "m": {
      "en": "application",
      "zh-TW": "申請",
      "zh-CN": "申请",
      "ko": "신청",
      "vi": "đơn xin",
      "id": "permohonan"
    },
    "pos": "i-adj",
    "ex": "とても申請と思う"
  },
  {
    "id": "V0646",
    "w": "新鮮",
    "r": "しんせん",
    "m": {
      "en": "fresh",
      "zh-TW": "新鮮",
      "zh-CN": "新鲜",
      "ko": "신선한",
      "vi": "tươi",
      "id": "segar"
    },
    "pos": "noun",
    "ex": "新鮮について考える"
  },
  {
    "id": "V0647",
    "w": "身体",
    "r": "しんたい",
    "m": {
      "en": "body",
      "zh-TW": "身體",
      "zh-CN": "身体",
      "ko": "신체",
      "vi": "cơ thể",
      "id": "tubuh"
    },
    "pos": "i-adj",
    "ex": "とても身体と思う"
  },
  {
    "id": "V0648",
    "w": "診断",
    "r": "しんだん",
    "m": {
      "en": "diagnosis",
      "zh-TW": "診斷",
      "zh-CN": "诊断",
      "ko": "진단",
      "vi": "chẩn đoán",
      "id": "diagnosa"
    },
    "pos": "noun",
    "ex": "診断について考える"
  },
  {
    "id": "V0649",
    "w": "慎重",
    "r": "しんちょう",
    "m": {
      "en": "careful",
      "zh-TW": "謹慎",
      "zh-CN": "谨慎",
      "ko": "신중",
      "vi": "thận trọng",
      "id": "hati-hati"
    },
    "pos": "verb-godan",
    "ex": "慎重ことにする"
  },
  {
    "id": "V0650",
    "w": "信頼",
    "r": "しんらい",
    "m": {
      "en": "trust",
      "zh-TW": "信賴",
      "zh-CN": "信赖",
      "ko": "신뢰",
      "vi": "tin cậy",
      "id": "kepercayaan"
    },
    "pos": "i-adj",
    "ex": "とても信頼と思う"
  },
  {
    "id": "V0651",
    "w": "心理",
    "r": "しんり",
    "m": {
      "en": "psychology",
      "zh-TW": "心理",
      "zh-CN": "心理",
      "ko": "심리",
      "vi": "tâm lý",
      "id": "psikologi"
    },
    "pos": "noun",
    "ex": "心理について考える"
  },
  {
    "id": "V0652",
    "w": "森林",
    "r": "しんりん",
    "m": {
      "en": "forest",
      "zh-TW": "森林",
      "zh-CN": "森林",
      "ko": "삼림",
      "vi": "rừng",
      "id": "hutan"
    },
    "pos": "noun",
    "ex": "森林について考える"
  },
  {
    "id": "V0653",
    "w": "図",
    "r": "ず",
    "m": {
      "en": "diagram",
      "zh-TW": "圖",
      "zh-CN": "图",
      "ko": "도",
      "vi": "hình",
      "id": "diagram"
    },
    "pos": "noun",
    "ex": "図について考える"
  },
  {
    "id": "V0654",
    "w": "水準",
    "r": "すいじゅん",
    "m": {
      "en": "level",
      "zh-TW": "水準",
      "zh-CN": "水准",
      "ko": "수준",
      "vi": "tiêu chuẩn",
      "id": "standar"
    },
    "pos": "noun",
    "ex": "水準について考える"
  },
  {
    "id": "V0655",
    "w": "推測",
    "r": "すいそく",
    "m": {
      "en": "guess",
      "zh-TW": "推測",
      "zh-CN": "推测",
      "ko": "추측",
      "vi": "suy đoán",
      "id": "dugaan"
    },
    "pos": "verb-godan",
    "ex": "推測ことにする"
  },
  {
    "id": "V0656",
    "w": "推定",
    "r": "すいてい",
    "m": {
      "en": "estimation",
      "zh-TW": "推定",
      "zh-CN": "推定",
      "ko": "추정",
      "vi": "ước tính",
      "id": "perkiraan"
    },
    "pos": "i-adj",
    "ex": "とても推定と思う"
  },
  {
    "id": "V0657",
    "w": "水道",
    "r": "すいどう",
    "m": {
      "en": "water supply",
      "zh-TW": "自來水",
      "zh-CN": "自来水",
      "ko": "수도",
      "vi": "đường nước",
      "id": "saluran air"
    },
    "pos": "verb-godan",
    "ex": "水道ことにする"
  },
  {
    "id": "V0658",
    "w": "睡眠",
    "r": "すいみん",
    "m": {
      "en": "sleep",
      "zh-TW": "睡眠",
      "zh-CN": "睡眠",
      "ko": "수면",
      "vi": "giấc ngủ",
      "id": "tidur"
    },
    "pos": "noun",
    "ex": "睡眠について考える"
  },
  {
    "id": "V0659",
    "w": "数字",
    "r": "すうじ",
    "m": {
      "en": "number",
      "zh-TW": "數字",
      "zh-CN": "数字",
      "ko": "숫자",
      "vi": "con số",
      "id": "nomor"
    },
    "pos": "noun",
    "ex": "数字について考える"
  },
  {
    "id": "V0660",
    "w": "数量",
    "r": "すうりょう",
    "m": {
      "en": "quantity",
      "zh-TW": "數量",
      "zh-CN": "数量",
      "ko": "수량",
      "vi": "số lượng",
      "id": "jumlah"
    },
    "pos": "verb-godan",
    "ex": "数量ことにする"
  },
  {
    "id": "V0661",
    "w": "姿",
    "r": "すがた",
    "m": {
      "en": "figure",
      "zh-TW": "姿態",
      "zh-CN": "姿态",
      "ko": "모습",
      "vi": "dáng",
      "id": "sosok"
    },
    "pos": "noun",
    "ex": "姿について考える"
  },
  {
    "id": "V0662",
    "w": "過ぎる",
    "r": "すぎる",
    "m": {
      "en": "to pass",
      "zh-TW": "過",
      "zh-CN": "过",
      "ko": "지나다",
      "vi": "qua",
      "id": "lewat"
    },
    "pos": "verb-godan",
    "ex": "過ぎることにする"
  },
  {
    "id": "V0663",
    "w": "救う",
    "r": "すくう",
    "m": {
      "en": "to save",
      "zh-TW": "拯救",
      "zh-CN": "拯救",
      "ko": "구하다",
      "vi": "cứu",
      "id": "menyelamatkan"
    },
    "pos": "verb-godan",
    "ex": "救うことにする"
  },
  {
    "id": "V0664",
    "w": "優れる",
    "r": "すぐれる",
    "m": {
      "en": "to excel",
      "zh-TW": "優秀",
      "zh-CN": "优秀",
      "ko": "뛰어나다",
      "vi": "xuất sắc",
      "id": "unggul"
    },
    "pos": "verb-ichidan",
    "ex": "優れることにする"
  },
  {
    "id": "V0665",
    "w": "涼しい",
    "r": "すずしい",
    "m": {
      "en": "cool",
      "zh-TW": "涼爽",
      "zh-CN": "凉爽",
      "ko": "시원한",
      "vi": "mát",
      "id": "sejuk"
    },
    "pos": "i-adj",
    "ex": "涼しい風が吹く"
  },
  {
    "id": "V0666",
    "w": "進める",
    "r": "すすめる",
    "m": {
      "en": "to advance",
      "zh-TW": "推進",
      "zh-CN": "推进",
      "ko": "진행하다",
      "vi": "tiến hành",
      "id": "memajukan"
    },
    "pos": "verb-ichidan",
    "ex": "進めることにする"
  },
  {
    "id": "V0667",
    "w": "勧める",
    "r": "すすめる",
    "m": {
      "en": "to recommend",
      "zh-TW": "推薦",
      "zh-CN": "推荐",
      "ko": "권하다",
      "vi": "khuyên",
      "id": "merekomendasikan"
    },
    "pos": "verb-ichidan",
    "ex": "勧めることにする"
  },
  {
    "id": "V0668",
    "w": "頭痛",
    "r": "ずつう",
    "m": {
      "en": "headache",
      "zh-TW": "頭痛",
      "zh-CN": "头痛",
      "ko": "두통",
      "vi": "đau đầu",
      "id": "sakit kepala"
    },
    "pos": "verb-godan",
    "ex": "頭痛ことにする"
  },
  {
    "id": "V0669",
    "w": "既に",
    "r": "すでに",
    "m": {
      "en": "already",
      "zh-TW": "已經",
      "zh-CN": "已经",
      "ko": "이미",
      "vi": "đã",
      "id": "sudah"
    },
    "pos": "adverb",
    "ex": "既に考える"
  },
  {
    "id": "V0670",
    "w": "捨てる",
    "r": "すてる",
    "m": {
      "en": "to throw away",
      "zh-TW": "丟棄",
      "zh-CN": "丢弃",
      "ko": "버리다",
      "vi": "vứt",
      "id": "membuang"
    },
    "pos": "verb-ichidan",
    "ex": "捨てることにする"
  },
  {
    "id": "V0671",
    "w": "素直",
    "r": "すなお",
    "m": {
      "en": "honest",
      "zh-TW": "坦率",
      "zh-CN": "坦率",
      "ko": "솔직한",
      "vi": "thật thà",
      "id": "jujur"
    },
    "pos": "noun",
    "ex": "素直について考える"
  },
  {
    "id": "V0672",
    "w": "砂",
    "r": "すな",
    "m": {
      "en": "sand",
      "zh-TW": "沙",
      "zh-CN": "沙",
      "ko": "모래",
      "vi": "cát",
      "id": "pasir"
    },
    "pos": "noun",
    "ex": "砂について考える"
  },
  {
    "id": "V0673",
    "w": "滑る",
    "r": "すべる",
    "m": {
      "en": "to slide",
      "zh-TW": "滑",
      "zh-CN": "滑",
      "ko": "미끄러지다",
      "vi": "trượt",
      "id": "meluncur"
    },
    "pos": "verb-godan",
    "ex": "滑ることにする"
  },
  {
    "id": "V0674",
    "w": "済ませる",
    "r": "すませる",
    "m": {
      "en": "to finish",
      "zh-TW": "完成",
      "zh-CN": "完成",
      "ko": "끝내다",
      "vi": "hoàn thành",
      "id": "menyelesaikan"
    },
    "pos": "verb-ichidan",
    "ex": "済ませることにする"
  },
  {
    "id": "V0675",
    "w": "澄む",
    "r": "すむ",
    "m": {
      "en": "to clear",
      "zh-TW": "清澈",
      "zh-CN": "清澈",
      "ko": "맑다",
      "vi": "trong",
      "id": "jernih"
    },
    "pos": "verb-godan",
    "ex": "澄むことにする"
  },
  {
    "id": "V0676",
    "w": "済む",
    "r": "すむ",
    "m": {
      "en": "to be finished",
      "zh-TW": "完成",
      "zh-CN": "完成",
      "ko": "끝나다",
      "vi": "xong",
      "id": "selesai"
    },
    "pos": "verb-godan",
    "ex": "済むことにする"
  },
  {
    "id": "V0677",
    "w": "刷る",
    "r": "する",
    "m": {
      "en": "to print",
      "zh-TW": "印刷",
      "zh-CN": "印刷",
      "ko": "인쇄하다",
      "vi": "in",
      "id": "mencetak"
    },
    "pos": "verb-godan",
    "ex": "刷ることにする"
  },
  {
    "id": "V0678",
    "w": "擦る",
    "r": "する",
    "m": {
      "en": "to rub",
      "zh-TW": "擦",
      "zh-CN": "擦",
      "ko": "비비다",
      "vi": "chà",
      "id": "menggosok"
    },
    "pos": "verb-godan",
    "ex": "擦ることにする"
  },
  {
    "id": "V0679",
    "w": "鋭い",
    "r": "するどい",
    "m": {
      "en": "sharp",
      "zh-TW": "銳利",
      "zh-CN": "锐利",
      "ko": "날카로운",
      "vi": "sắc",
      "id": "tajam"
    },
    "pos": "i-adj",
    "ex": "とても鋭いと思う"
  },
  {
    "id": "V0680",
    "w": "寸法",
    "r": "すんぽう",
    "m": {
      "en": "dimension",
      "zh-TW": "尺寸",
      "zh-CN": "尺寸",
      "ko": "치수",
      "vi": "kích thước",
      "id": "ukuran"
    },
    "pos": "verb-godan",
    "ex": "寸法ことにする"
  },
  {
    "id": "V0681",
    "w": "正確",
    "r": "せいかく",
    "m": {
      "en": "accurate",
      "zh-TW": "正確",
      "zh-CN": "正确",
      "ko": "정확",
      "vi": "chính xác",
      "id": "akurat"
    },
    "pos": "verb-godan",
    "ex": "正確な情報を伝える",
    "syn": [
      "正しい",
      "的確",
      "精密"
    ]
  },
  {
    "id": "V0682",
    "w": "性格",
    "r": "せいかく",
    "m": {
      "en": "character",
      "zh-TW": "性格",
      "zh-CN": "性格",
      "ko": "성격",
      "vi": "tính cách",
      "id": "karakter"
    },
    "pos": "verb-godan",
    "ex": "性格ことにする"
  },
  {
    "id": "V0683",
    "w": "生活",
    "r": "せいかつ",
    "m": {
      "en": "life",
      "zh-TW": "生活",
      "zh-CN": "生活",
      "ko": "생활",
      "vi": "cuộc sống",
      "id": "kehidupan"
    },
    "pos": "verb-godan",
    "ex": "生活費を節約する"
  },
  {
    "id": "V0684",
    "w": "請求",
    "r": "せいきゅう",
    "m": {
      "en": "request",
      "zh-TW": "請求",
      "zh-CN": "请求",
      "ko": "청구",
      "vi": "yêu cầu",
      "id": "permintaan"
    },
    "pos": "verb-godan",
    "ex": "請求ことにする"
  },
  {
    "id": "V0685",
    "w": "成功",
    "r": "せいこう",
    "m": {
      "en": "success",
      "zh-TW": "成功",
      "zh-CN": "成功",
      "ko": "성공",
      "vi": "thành công",
      "id": "kesuksesan"
    },
    "pos": "verb-godan",
    "ex": "努力の結果成功した",
    "syn": [
      "うまくいく",
      "達成する",
      "成就する"
    ]
  },
  {
    "id": "V0686",
    "w": "制作",
    "r": "せいさく",
    "m": {
      "en": "production",
      "zh-TW": "製作",
      "zh-CN": "制作",
      "ko": "제작",
      "vi": "sản xuất",
      "id": "produksi"
    },
    "pos": "verb-godan",
    "ex": "制作ことにする"
  },
  {
    "id": "V0687",
    "w": "政策",
    "r": "せいさく",
    "m": {
      "en": "policy",
      "zh-TW": "政策",
      "zh-CN": "政策",
      "ko": "정책",
      "vi": "chính sách",
      "id": "kebijakan"
    },
    "pos": "verb-godan",
    "ex": "政策ことにする"
  },
  {
    "id": "V0688",
    "w": "制度",
    "r": "せいど",
    "m": {
      "en": "system",
      "zh-TW": "制度",
      "zh-CN": "制度",
      "ko": "제도",
      "vi": "chế độ",
      "id": "sistem"
    },
    "pos": "noun",
    "ex": "制度について考える"
  },
  {
    "id": "V0689",
    "w": "成長",
    "r": "せいちょう",
    "m": {
      "en": "growth",
      "zh-TW": "成長",
      "zh-CN": "成长",
      "ko": "성장",
      "vi": "phát triển",
      "id": "pertumbuhan"
    },
    "pos": "verb-godan",
    "ex": "成長ことにする"
  },
  {
    "id": "V0690",
    "w": "製品",
    "r": "せいひん",
    "m": {
      "en": "product",
      "zh-TW": "產品",
      "zh-CN": "产品",
      "ko": "제품",
      "vi": "sản phẩm",
      "id": "produk"
    },
    "pos": "noun",
    "ex": "製品について考える"
  },
  {
    "id": "V0691",
    "w": "政府",
    "r": "せいふ",
    "m": {
      "en": "government",
      "zh-TW": "政府",
      "zh-CN": "政府",
      "ko": "정부",
      "vi": "chính phủ",
      "id": "pemerintah"
    },
    "pos": "noun",
    "ex": "政府について考える"
  },
  {
    "id": "V0692",
    "w": "整備",
    "r": "せいび",
    "m": {
      "en": "maintenance",
      "zh-TW": "整備",
      "zh-CN": "整备",
      "ko": "정비",
      "vi": "bảo trì",
      "id": "pemeliharaan"
    },
    "pos": "noun",
    "ex": "整備について考える"
  },
  {
    "id": "V0693",
    "w": "成分",
    "r": "せいぶん",
    "m": {
      "en": "ingredient",
      "zh-TW": "成分",
      "zh-CN": "成分",
      "ko": "성분",
      "vi": "thành phần",
      "id": "bahan"
    },
    "pos": "noun",
    "ex": "成分について考える"
  },
  {
    "id": "V0694",
    "w": "生命",
    "r": "せいめい",
    "m": {
      "en": "life",
      "zh-TW": "生命",
      "zh-CN": "生命",
      "ko": "생명",
      "vi": "sinh mệnh",
      "id": "kehidupan"
    },
    "pos": "i-adj",
    "ex": "とても生命と思う"
  },
  {
    "id": "V0695",
    "w": "整理",
    "r": "せいり",
    "m": {
      "en": "arrangement",
      "zh-TW": "整理",
      "zh-CN": "整理",
      "ko": "정리",
      "vi": "sắp xếp",
      "id": "merapikan"
    },
    "pos": "noun",
    "ex": "整理について考える"
  },
  {
    "id": "V0696",
    "w": "成立",
    "r": "せいりつ",
    "m": {
      "en": "establishment",
      "zh-TW": "成立",
      "zh-CN": "成立",
      "ko": "성립",
      "vi": "thành lập",
      "id": "pendirian"
    },
    "pos": "verb-godan",
    "ex": "成立ことにする"
  },
  {
    "id": "V0697",
    "w": "世紀",
    "r": "せいき",
    "m": {
      "en": "century",
      "zh-TW": "世紀",
      "zh-CN": "世纪",
      "ko": "세기",
      "vi": "thế kỷ",
      "id": "abad"
    },
    "pos": "noun",
    "ex": "世紀について考える"
  },
  {
    "id": "V0698",
    "w": "席",
    "r": "せき",
    "m": {
      "en": "seat",
      "zh-TW": "座位",
      "zh-CN": "座位",
      "ko": "자리",
      "vi": "chỗ ngồi",
      "id": "kursi"
    },
    "pos": "noun",
    "ex": "席について考える"
  },
  {
    "id": "V0699",
    "w": "責任",
    "r": "せきにん",
    "m": {
      "en": "responsibility",
      "zh-TW": "責任",
      "zh-CN": "责任",
      "ko": "책임",
      "vi": "trách nhiệm",
      "id": "tanggung jawab"
    },
    "pos": "noun",
    "ex": "責任を取る",
    "syn": [
      "義務",
      "役目",
      "使命"
    ]
  },
  {
    "id": "V0700",
    "w": "世間",
    "r": "せけん",
    "m": {
      "en": "world",
      "zh-TW": "社會",
      "zh-CN": "社会",
      "ko": "세상",
      "vi": "xã hội",
      "id": "dunia"
    },
    "pos": "noun",
    "ex": "世間について考える"
  },
  {
    "id": "V0701",
    "w": "世代",
    "r": "せだい",
    "m": {
      "en": "generation",
      "zh-TW": "世代",
      "zh-CN": "世代",
      "ko": "세대",
      "vi": "thế hệ",
      "id": "generasi"
    },
    "pos": "i-adj",
    "ex": "とても世代と思う"
  },
  {
    "id": "V0702",
    "w": "接触",
    "r": "せっしょく",
    "m": {
      "en": "contact",
      "zh-TW": "接觸",
      "zh-CN": "接触",
      "ko": "접촉",
      "vi": "tiếp xúc",
      "id": "kontak"
    },
    "pos": "verb-godan",
    "ex": "接触ことにする"
  },
  {
    "id": "V0703",
    "w": "設置",
    "r": "せっち",
    "m": {
      "en": "installation",
      "zh-TW": "設置",
      "zh-CN": "设置",
      "ko": "설치",
      "vi": "lắp đặt",
      "id": "instalasi"
    },
    "pos": "noun",
    "ex": "設置について考える"
  },
  {
    "id": "V0704",
    "w": "設定",
    "r": "せってい",
    "m": {
      "en": "setting",
      "zh-TW": "設定",
      "zh-CN": "设定",
      "ko": "설정",
      "vi": "thiết lập",
      "id": "pengaturan"
    },
    "pos": "i-adj",
    "ex": "とても設定と思う"
  },
  {
    "id": "V0705",
    "w": "説得",
    "r": "せっとく",
    "m": {
      "en": "persuasion",
      "zh-TW": "說服",
      "zh-CN": "说服",
      "ko": "설득",
      "vi": "thuyết phục",
      "id": "persuasi"
    },
    "pos": "verb-godan",
    "ex": "説得ことにする"
  },
  {
    "id": "V0706",
    "w": "絶望",
    "r": "ぜつぼう",
    "m": {
      "en": "despair",
      "zh-TW": "絕望",
      "zh-CN": "绝望",
      "ko": "절망",
      "vi": "tuyệt vọng",
      "id": "keputusasaan"
    },
    "pos": "verb-godan",
    "ex": "絶望ことにする"
  },
  {
    "id": "V0707",
    "w": "背中",
    "r": "せなか",
    "m": {
      "en": "back",
      "zh-TW": "背",
      "zh-CN": "背",
      "ko": "등",
      "vi": "lưng",
      "id": "punggung"
    },
    "pos": "noun",
    "ex": "背中について考える"
  },
  {
    "id": "V0708",
    "w": "是非",
    "r": "ぜひ",
    "m": {
      "en": "by all means",
      "zh-TW": "務必",
      "zh-CN": "务必",
      "ko": "꼭",
      "vi": "nhất định",
      "id": "dengan segala cara"
    },
    "pos": "noun",
    "ex": "是非について考える"
  },
  {
    "id": "V0709",
    "w": "狭い",
    "r": "せまい",
    "m": {
      "en": "narrow",
      "zh-TW": "狹窄",
      "zh-CN": "狭窄",
      "ko": "좁은",
      "vi": "hẹp",
      "id": "sempit"
    },
    "pos": "i-adj",
    "ex": "とても狭いと思う"
  },
  {
    "id": "V0710",
    "w": "迫る",
    "r": "せまる",
    "m": {
      "en": "to approach",
      "zh-TW": "逼近",
      "zh-CN": "逼近",
      "ko": "다가오다",
      "vi": "tiến đến",
      "id": "mendekati"
    },
    "pos": "verb-godan",
    "ex": "迫ることにする"
  },
  {
    "id": "V0711",
    "w": "攻める",
    "r": "せめる",
    "m": {
      "en": "to attack",
      "zh-TW": "攻擊",
      "zh-CN": "攻击",
      "ko": "공격하다",
      "vi": "tấn công",
      "id": "menyerang"
    },
    "pos": "verb-ichidan",
    "ex": "攻めることにする"
  },
  {
    "id": "V0712",
    "w": "責める",
    "r": "せめる",
    "m": {
      "en": "to blame",
      "zh-TW": "責備",
      "zh-CN": "责备",
      "ko": "꾸짖다",
      "vi": "trách",
      "id": "menyalahkan"
    },
    "pos": "verb-ichidan",
    "ex": "責めることにする"
  },
  {
    "id": "V0713",
    "w": "世話",
    "r": "せわ",
    "m": {
      "en": "care",
      "zh-TW": "照顧",
      "zh-CN": "照顾",
      "ko": "돌봄",
      "vi": "chăm sóc",
      "id": "perawatan"
    },
    "pos": "noun",
    "ex": "植物の世話をする"
  },
  {
    "id": "V0714",
    "w": "宣言",
    "r": "せんげん",
    "m": {
      "en": "declaration",
      "zh-TW": "宣言",
      "zh-CN": "宣言",
      "ko": "선언",
      "vi": "tuyên bố",
      "id": "deklarasi"
    },
    "pos": "noun",
    "ex": "宣言について考える"
  },
  {
    "id": "V0715",
    "w": "選手",
    "r": "せんしゅ",
    "m": {
      "en": "player",
      "zh-TW": "選手",
      "zh-CN": "选手",
      "ko": "선수",
      "vi": "vận động viên",
      "id": "pemain"
    },
    "pos": "noun",
    "ex": "選手について考える"
  },
  {
    "id": "V0716",
    "w": "先進",
    "r": "せんしん",
    "m": {
      "en": "advanced",
      "zh-TW": "先進",
      "zh-CN": "先进",
      "ko": "선진",
      "vi": "tiên tiến",
      "id": "maju"
    },
    "pos": "noun",
    "ex": "先進について考える"
  },
  {
    "id": "V0717",
    "w": "戦争",
    "r": "せんそう",
    "m": {
      "en": "war",
      "zh-TW": "戰爭",
      "zh-CN": "战争",
      "ko": "전쟁",
      "vi": "chiến tranh",
      "id": "perang"
    },
    "pos": "verb-godan",
    "ex": "戦争ことにする"
  },
  {
    "id": "V0718",
    "w": "選択",
    "r": "せんたく",
    "m": {
      "en": "choice",
      "zh-TW": "選擇",
      "zh-CN": "选择",
      "ko": "선택",
      "vi": "lựa chọn",
      "id": "pilihan"
    },
    "pos": "verb-godan",
    "ex": "選択ことにする",
    "syn": [
      "選ぶ",
      "選定する",
      "決める"
    ]
  },
  {
    "id": "V0719",
    "w": "洗濯",
    "r": "せんたく",
    "m": {
      "en": "laundry",
      "zh-TW": "洗衣",
      "zh-CN": "洗衣",
      "ko": "빨래",
      "vi": "giặt",
      "id": "cucian"
    },
    "pos": "verb-godan",
    "ex": "洗濯ことにする"
  },
  {
    "id": "V0720",
    "w": "先端",
    "r": "せんたん",
    "m": {
      "en": "tip",
      "zh-TW": "尖端",
      "zh-CN": "尖端",
      "ko": "선단",
      "vi": "đầu mút",
      "id": "ujung"
    },
    "pos": "noun",
    "ex": "先端について考える"
  },
  {
    "id": "V0721",
    "w": "宣伝",
    "r": "せんでん",
    "m": {
      "en": "publicity",
      "zh-TW": "宣傳",
      "zh-CN": "宣传",
      "ko": "선전",
      "vi": "quảng cáo",
      "id": "promosi"
    },
    "pos": "noun",
    "ex": "宣伝について考える"
  },
  {
    "id": "V0722",
    "w": "全般",
    "r": "ぜんぱん",
    "m": {
      "en": "general",
      "zh-TW": "全般",
      "zh-CN": "全般",
      "ko": "전반",
      "vi": "toàn bộ",
      "id": "umum"
    },
    "pos": "noun",
    "ex": "全般について考える"
  },
  {
    "id": "V0723",
    "w": "専門",
    "r": "せんもん",
    "m": {
      "en": "specialty",
      "zh-TW": "專門",
      "zh-CN": "专门",
      "ko": "전문",
      "vi": "chuyên môn",
      "id": "keahlian"
    },
    "pos": "noun",
    "ex": "専門について考える"
  },
  {
    "id": "V0724",
    "w": "全力",
    "r": "ぜんりょく",
    "m": {
      "en": "full power",
      "zh-TW": "全力",
      "zh-CN": "全力",
      "ko": "전력",
      "vi": "hết sức",
      "id": "seluruh tenaga"
    },
    "pos": "verb-godan",
    "ex": "全力ことにする"
  },
  {
    "id": "V0725",
    "w": "相違",
    "r": "そうい",
    "m": {
      "en": "difference",
      "zh-TW": "差異",
      "zh-CN": "差异",
      "ko": "상위",
      "vi": "khác biệt",
      "id": "perbedaan"
    },
    "pos": "i-adj",
    "ex": "とても相違と思う"
  },
  {
    "id": "V0726",
    "w": "増加",
    "r": "ぞうか",
    "m": {
      "en": "increase",
      "zh-TW": "增加",
      "zh-CN": "增加",
      "ko": "증가",
      "vi": "tăng",
      "id": "peningkatan"
    },
    "pos": "noun",
    "ex": "増加について考える"
  },
  {
    "id": "V0727",
    "w": "倉庫",
    "r": "そうこ",
    "m": {
      "en": "warehouse",
      "zh-TW": "倉庫",
      "zh-CN": "仓库",
      "ko": "창고",
      "vi": "kho",
      "id": "gudang"
    },
    "pos": "noun",
    "ex": "倉庫について考える"
  },
  {
    "id": "V0728",
    "w": "捜査",
    "r": "そうさ",
    "m": {
      "en": "investigation",
      "zh-TW": "調查",
      "zh-CN": "调查",
      "ko": "수사",
      "vi": "điều tra",
      "id": "penyelidikan"
    },
    "pos": "noun",
    "ex": "捜査について考える"
  },
  {
    "id": "V0729",
    "w": "操作",
    "r": "そうさ",
    "m": {
      "en": "operation",
      "zh-TW": "操作",
      "zh-CN": "操作",
      "ko": "조작",
      "vi": "thao tác",
      "id": "operasi"
    },
    "pos": "noun",
    "ex": "操作について考える"
  },
  {
    "id": "V0730",
    "w": "創造",
    "r": "そうぞう",
    "m": {
      "en": "creation",
      "zh-TW": "創造",
      "zh-CN": "创造",
      "ko": "창조",
      "vi": "sáng tạo",
      "id": "penciptaan"
    },
    "pos": "verb-godan",
    "ex": "創造ことにする"
  },
  {
    "id": "V0731",
    "w": "想像",
    "r": "そうぞう",
    "m": {
      "en": "imagination",
      "zh-TW": "想像",
      "zh-CN": "想象",
      "ko": "상상",
      "vi": "tưởng tượng",
      "id": "imajinasi"
    },
    "pos": "verb-godan",
    "ex": "想像ことにする",
    "syn": [
      "イメージする",
      "思い描く",
      "空想する"
    ]
  },
  {
    "id": "V0732",
    "w": "相談",
    "r": "そうだん",
    "m": {
      "en": "consultation",
      "zh-TW": "商量",
      "zh-CN": "商量",
      "ko": "상담",
      "vi": "tham khảo",
      "id": "konsultasi"
    },
    "pos": "noun",
    "ex": "相談について考える"
  },
  {
    "id": "V0733",
    "w": "相当",
    "r": "そうとう",
    "m": {
      "en": "considerable",
      "zh-TW": "相當",
      "zh-CN": "相当",
      "ko": "상당",
      "vi": "tương đương",
      "id": "cukup"
    },
    "pos": "verb-godan",
    "ex": "相当ことにする"
  },
  {
    "id": "V0734",
    "w": "総理",
    "r": "そうり",
    "m": {
      "en": "prime minister",
      "zh-TW": "總理",
      "zh-CN": "总理",
      "ko": "총리",
      "vi": "thủ tướng",
      "id": "perdana menteri"
    },
    "pos": "noun",
    "ex": "総理について考える"
  },
  {
    "id": "V0735",
    "w": "送料",
    "r": "そうりょう",
    "m": {
      "en": "shipping fee",
      "zh-TW": "運費",
      "zh-CN": "运费",
      "ko": "배송료",
      "vi": "phí vận chuyển",
      "id": "ongkos kirim"
    },
    "pos": "verb-godan",
    "ex": "送料ことにする"
  },
  {
    "id": "V0736",
    "w": "測定",
    "r": "そくてい",
    "m": {
      "en": "measurement",
      "zh-TW": "測定",
      "zh-CN": "测定",
      "ko": "측정",
      "vi": "đo lường",
      "id": "pengukuran"
    },
    "pos": "i-adj",
    "ex": "とても測定と思う",
    "syn": [
      "計る",
      "測る",
      "計測する"
    ]
  },
  {
    "id": "V0737",
    "w": "速度",
    "r": "そくど",
    "m": {
      "en": "speed",
      "zh-TW": "速度",
      "zh-CN": "速度",
      "ko": "속도",
      "vi": "tốc độ",
      "id": "kecepatan"
    },
    "pos": "noun",
    "ex": "速度について考える"
  },
  {
    "id": "V0738",
    "w": "底",
    "r": "そこ",
    "m": {
      "en": "bottom",
      "zh-TW": "底部",
      "zh-CN": "底部",
      "ko": "바닥",
      "vi": "đáy",
      "id": "dasar"
    },
    "pos": "noun",
    "ex": "底について考える"
  },
  {
    "id": "V0739",
    "w": "素材",
    "r": "そざい",
    "m": {
      "en": "material",
      "zh-TW": "素材",
      "zh-CN": "素材",
      "ko": "소재",
      "vi": "chất liệu",
      "id": "bahan"
    },
    "pos": "i-adj",
    "ex": "とても素材と思う"
  },
  {
    "id": "V0740",
    "w": "組織",
    "r": "そしき",
    "m": {
      "en": "organization",
      "zh-TW": "組織",
      "zh-CN": "组织",
      "ko": "조직",
      "vi": "tổ chức",
      "id": "organisasi"
    },
    "pos": "noun",
    "ex": "組織について考える"
  },
  {
    "id": "V0741",
    "w": "育つ",
    "r": "そだつ",
    "m": {
      "en": "to grow",
      "zh-TW": "成長",
      "zh-CN": "成长",
      "ko": "자라다",
      "vi": "lớn lên",
      "id": "tumbuh"
    },
    "pos": "verb-godan",
    "ex": "育つことにする"
  },
  {
    "id": "V0742",
    "w": "育てる",
    "r": "そだてる",
    "m": {
      "en": "to raise",
      "zh-TW": "培養",
      "zh-CN": "培养",
      "ko": "기르다",
      "vi": "nuôi",
      "id": "menaikkan"
    },
    "pos": "verb-ichidan",
    "ex": "花を育てる"
  },
  {
    "id": "V0743",
    "w": "卒業",
    "r": "そつぎょう",
    "m": {
      "en": "graduation",
      "zh-TW": "畢業",
      "zh-CN": "毕业",
      "ko": "졸업",
      "vi": "tốt nghiệp",
      "id": "kelulusan"
    },
    "pos": "verb-godan",
    "ex": "卒業ことにする"
  },
  {
    "id": "V0744",
    "w": "外",
    "r": "そと",
    "m": {
      "en": "outside",
      "zh-TW": "外面",
      "zh-CN": "外面",
      "ko": "밖",
      "vi": "bên ngoài",
      "id": "di luar"
    },
    "pos": "adverb",
    "ex": "外考える"
  },
  {
    "id": "V0745",
    "w": "備える",
    "r": "そなえる",
    "m": {
      "en": "to prepare",
      "zh-TW": "準備",
      "zh-CN": "准备",
      "ko": "갖추다",
      "vi": "trang bị",
      "id": "mempersiapkan"
    },
    "pos": "verb-ichidan",
    "ex": "備えることにする"
  },
  {
    "id": "V0746",
    "w": "その他",
    "r": "そのた",
    "m": {
      "en": "other",
      "zh-TW": "其他",
      "zh-CN": "其他",
      "ko": "그 외",
      "vi": "khác",
      "id": "lainnya"
    },
    "pos": "noun",
    "ex": "その他について考える"
  },
  {
    "id": "V0747",
    "w": "その後",
    "r": "そのご",
    "m": {
      "en": "after that",
      "zh-TW": "之後",
      "zh-CN": "之后",
      "ko": "그 후",
      "vi": "sau đó",
      "id": "setelah itu"
    },
    "pos": "noun",
    "ex": "その後について考える"
  },
  {
    "id": "V0748",
    "w": "その頃",
    "r": "そのころ",
    "m": {
      "en": "around that time",
      "zh-TW": "那時候",
      "zh-CN": "那时候",
      "ko": "그 무렵",
      "vi": "lúc đó",
      "id": "waktu itu"
    },
    "pos": "noun",
    "ex": "その頃について考える"
  },
  {
    "id": "V0749",
    "w": "祖父",
    "r": "そふ",
    "m": {
      "en": "grandfather",
      "zh-TW": "祖父",
      "zh-CN": "祖父",
      "ko": "할아버지",
      "vi": "ông",
      "id": "kakek"
    },
    "pos": "noun",
    "ex": "祖父について考える"
  },
  {
    "id": "V0750",
    "w": "祖母",
    "r": "そぼ",
    "m": {
      "en": "grandmother",
      "zh-TW": "祖母",
      "zh-CN": "祖母",
      "ko": "할머니",
      "vi": "bà",
      "id": "nenek"
    },
    "pos": "noun",
    "ex": "祖母について考える"
  },
  {
    "id": "V0751",
    "w": "染める",
    "r": "そめる",
    "m": {
      "en": "to dye",
      "zh-TW": "染色",
      "zh-CN": "染色",
      "ko": "물들이다",
      "vi": "nhuộm",
      "id": "mewarnai"
    },
    "pos": "verb-ichidan",
    "ex": "染めることにする"
  },
  {
    "id": "V0752",
    "w": "反らす",
    "r": "そらす",
    "m": {
      "en": "to bend back",
      "zh-TW": "弯曲",
      "zh-CN": "弯曲",
      "ko": "젖히다",
      "vi": "uốn cong",
      "id": "melengkung"
    },
    "pos": "verb-godan",
    "ex": "反らすことにする"
  },
  {
    "id": "V0753",
    "w": "揃える",
    "r": "そろえる",
    "m": {
      "en": "to arrange",
      "zh-TW": "排列",
      "zh-CN": "排列",
      "ko": "갖추다",
      "vi": "xếp đều",
      "id": "menyusun"
    },
    "pos": "verb-ichidan",
    "ex": "揃えることにする"
  },
  {
    "id": "V0754",
    "w": "揃う",
    "r": "そろう",
    "m": {
      "en": "to be complete",
      "zh-TW": "齊全",
      "zh-CN": "齐全",
      "ko": "갖춰지다",
      "vi": "đủ",
      "id": "lengkap"
    },
    "pos": "verb-godan",
    "ex": "揃うことにする"
  },
  {
    "id": "V0755",
    "w": "損害",
    "r": "そんがい",
    "m": {
      "en": "damage",
      "zh-TW": "損害",
      "zh-CN": "损害",
      "ko": "손해",
      "vi": "thiệt hại",
      "id": "kerusakan"
    },
    "pos": "i-adj",
    "ex": "とても損害と思う"
  },
  {
    "id": "V0756",
    "w": "存在",
    "r": "そんざい",
    "m": {
      "en": "existence",
      "zh-TW": "存在",
      "zh-CN": "存在",
      "ko": "존재",
      "vi": "tồn tại",
      "id": "keberadaan"
    },
    "pos": "i-adj",
    "ex": "とても存在と思う"
  },
  {
    "id": "V0757",
    "w": "尊重",
    "r": "そんちょう",
    "m": {
      "en": "respect",
      "zh-TW": "尊重",
      "zh-CN": "尊重",
      "ko": "존중",
      "vi": "tôn trọng",
      "id": "menghormati"
    },
    "pos": "verb-godan",
    "ex": "尊重ことにする"
  },
  {
    "id": "V0758",
    "w": "大",
    "r": "だい",
    "m": {
      "en": "big",
      "zh-TW": "大",
      "zh-CN": "大",
      "ko": "대",
      "vi": "lớn",
      "id": "besar"
    },
    "pos": "i-adj",
    "ex": "とても大と思う"
  },
  {
    "id": "V0759",
    "w": "第一",
    "r": "だいいち",
    "m": {
      "en": "first",
      "zh-TW": "第一",
      "zh-CN": "第一",
      "ko": "제일",
      "vi": "thứ nhất",
      "id": "pertama"
    },
    "pos": "noun",
    "ex": "第一について考える"
  },
  {
    "id": "V0760",
    "w": "体温",
    "r": "たいおん",
    "m": {
      "en": "body temperature",
      "zh-TW": "體溫",
      "zh-CN": "体温",
      "ko": "체온",
      "vi": "nhiệt độ cơ thể",
      "id": "suhu tubuh"
    },
    "pos": "noun",
    "ex": "体温について考える"
  },
  {
    "id": "V0761",
    "w": "大会",
    "r": "たいかい",
    "m": {
      "en": "tournament",
      "zh-TW": "大會",
      "zh-CN": "大会",
      "ko": "대회",
      "vi": "đại hội",
      "id": "turnamen"
    },
    "pos": "i-adj",
    "ex": "とても大会と思う"
  },
  {
    "id": "V0762",
    "w": "退化",
    "r": "たいか",
    "m": {
      "en": "degeneration",
      "zh-TW": "退化",
      "zh-CN": "退化",
      "ko": "퇴화",
      "vi": "thoái hóa",
      "id": "degenerasi"
    },
    "pos": "noun",
    "ex": "退化について考える"
  },
  {
    "id": "V0763",
    "w": "対策",
    "r": "たいさく",
    "m": {
      "en": "countermeasure",
      "zh-TW": "對策",
      "zh-CN": "对策",
      "ko": "대책",
      "vi": "đối sách",
      "id": "langkah"
    },
    "pos": "verb-godan",
    "ex": "問題の対策を考える",
    "syn": [
      "方策",
      "手段",
      "解決策"
    ]
  },
  {
    "id": "V0764",
    "w": "大使",
    "r": "たいし",
    "m": {
      "en": "ambassador",
      "zh-TW": "大使",
      "zh-CN": "大使",
      "ko": "대사",
      "vi": "đại sứ",
      "id": "duta besar"
    },
    "pos": "noun",
    "ex": "大使について考える"
  },
  {
    "id": "V0765",
    "w": "体質",
    "r": "たいしつ",
    "m": {
      "en": "constitution",
      "zh-TW": "體質",
      "zh-CN": "体质",
      "ko": "체질",
      "vi": "thể chất",
      "id": "konstitusi"
    },
    "pos": "verb-godan",
    "ex": "体質ことにする"
  },
  {
    "id": "V0766",
    "w": "大衆",
    "r": "たいしゅう",
    "m": {
      "en": "masses",
      "zh-TW": "大眾",
      "zh-CN": "大众",
      "ko": "대중",
      "vi": "đại chúng",
      "id": "massa"
    },
    "pos": "verb-godan",
    "ex": "大衆ことにする"
  },
  {
    "id": "V0767",
    "w": "対照",
    "r": "たいしょう",
    "m": {
      "en": "contrast",
      "zh-TW": "對照",
      "zh-CN": "对照",
      "ko": "대조",
      "vi": "đối chiếu",
      "id": "kontras"
    },
    "pos": "verb-godan",
    "ex": "対照ことにする"
  },
  {
    "id": "V0768",
    "w": "対象",
    "r": "たいしょう",
    "m": {
      "en": "target",
      "zh-TW": "對象",
      "zh-CN": "对象",
      "ko": "대상",
      "vi": "đối tượng",
      "id": "sasaran"
    },
    "pos": "verb-godan",
    "ex": "対象ことにする"
  },
  {
    "id": "V0769",
    "w": "大臣",
    "r": "だいじん",
    "m": {
      "en": "minister",
      "zh-TW": "大臣",
      "zh-CN": "大臣",
      "ko": "대신",
      "vi": "bộ trưởng",
      "id": "menteri"
    },
    "pos": "noun",
    "ex": "大臣について考える"
  },
  {
    "id": "V0770",
    "w": "態勢",
    "r": "たいせい",
    "m": {
      "en": "posture",
      "zh-TW": "態勢",
      "zh-CN": "态势",
      "ko": "태세",
      "vi": "tư thế",
      "id": "postur"
    },
    "pos": "i-adj",
    "ex": "とても態勢と思う"
  },
  {
    "id": "V0771",
    "w": "体制",
    "r": "たいせい",
    "m": {
      "en": "system",
      "zh-TW": "體制",
      "zh-CN": "体制",
      "ko": "체제",
      "vi": "chế độ",
      "id": "sistem"
    },
    "pos": "i-adj",
    "ex": "とても体制と思う"
  },
  {
    "id": "V0772",
    "w": "体積",
    "r": "たいせき",
    "m": {
      "en": "volume",
      "zh-TW": "體積",
      "zh-CN": "体积",
      "ko": "체적",
      "vi": "thể tích",
      "id": "volume"
    },
    "pos": "noun",
    "ex": "体積について考える"
  },
  {
    "id": "V0773",
    "w": "大抵",
    "r": "たいてい",
    "m": {
      "en": "usually",
      "zh-TW": "大抵",
      "zh-CN": "大抵",
      "ko": "대개",
      "vi": "thường",
      "id": "biasanya"
    },
    "pos": "i-adj",
    "ex": "とても大抵と思う"
  },
  {
    "id": "V0774",
    "w": "態度",
    "r": "たいど",
    "m": {
      "en": "attitude",
      "zh-TW": "態度",
      "zh-CN": "态度",
      "ko": "태도",
      "vi": "thái độ",
      "id": "sikap"
    },
    "pos": "noun",
    "ex": "誠実な態度で接する",
    "syn": [
      "姿勢",
      "振る舞い",
      "様子"
    ]
  },
  {
    "id": "V0775",
    "w": "大統領",
    "r": "だいとうりょう",
    "m": {
      "en": "president",
      "zh-TW": "總統",
      "zh-CN": "总统",
      "ko": "대통령",
      "vi": "tổng thống",
      "id": "presiden"
    },
    "pos": "verb-godan",
    "ex": "大統領ことにする"
  },
  {
    "id": "V0776",
    "w": "代表",
    "r": "だいひょう",
    "m": {
      "en": "representative",
      "zh-TW": "代表",
      "zh-CN": "代表",
      "ko": "대표",
      "vi": "đại diện",
      "id": "perwakilan"
    },
    "pos": "verb-godan",
    "ex": "代表ことにする"
  },
  {
    "id": "V0777",
    "w": "台風",
    "r": "たいふう",
    "m": {
      "en": "typhoon",
      "zh-TW": "颱風",
      "zh-CN": "台风",
      "ko": "태풍",
      "vi": "bão",
      "id": "topan"
    },
    "pos": "verb-godan",
    "ex": "台風ことにする"
  },
  {
    "id": "V0778",
    "w": "大部分",
    "r": "だいぶぶん",
    "m": {
      "en": "most",
      "zh-TW": "大部分",
      "zh-CN": "大部分",
      "ko": "대부분",
      "vi": "phần lớn",
      "id": "paling"
    },
    "pos": "noun",
    "ex": "大部分について考える"
  },
  {
    "id": "V0779",
    "w": "大変",
    "r": "たいへん",
    "m": {
      "en": "serious",
      "zh-TW": "非常",
      "zh-CN": "非常",
      "ko": "대단히",
      "vi": "rất",
      "id": "sangat"
    },
    "pos": "noun",
    "ex": "大変について考える"
  },
  {
    "id": "V0780",
    "w": "代理",
    "r": "だいり",
    "m": {
      "en": "agent",
      "zh-TW": "代理",
      "zh-CN": "代理",
      "ko": "대리",
      "vi": "đại lý",
      "id": "agen"
    },
    "pos": "noun",
    "ex": "代理について考える"
  },
  {
    "id": "V0781",
    "w": "体力",
    "r": "たいりょく",
    "m": {
      "en": "physical strength",
      "zh-TW": "體力",
      "zh-CN": "体力",
      "ko": "체력",
      "vi": "thể lực",
      "id": "kekuatan fisik"
    },
    "pos": "verb-godan",
    "ex": "体力ことにする"
  },
  {
    "id": "V0782",
    "w": "対立",
    "r": "たいりつ",
    "m": {
      "en": "opposition",
      "zh-TW": "對立",
      "zh-CN": "对立",
      "ko": "대립",
      "vi": "đối lập",
      "id": "oposisi"
    },
    "pos": "verb-godan",
    "ex": "対立ことにする"
  },
  {
    "id": "V0783",
    "w": "平ら",
    "r": "たいら",
    "m": {
      "en": "flat",
      "zh-TW": "平坦",
      "zh-CN": "平坦",
      "ko": "평평한",
      "vi": "phẳng",
      "id": "datar"
    },
    "pos": "noun",
    "ex": "平らについて考える"
  },
  {
    "id": "V0784",
    "w": "倒す",
    "r": "たおす",
    "m": {
      "en": "to defeat",
      "zh-TW": "打倒",
      "zh-CN": "打倒",
      "ko": "쓰러뜨리다",
      "vi": "đánh bại",
      "id": "mengalahkan"
    },
    "pos": "verb-godan",
    "ex": "倒すことにする"
  },
  {
    "id": "V0785",
    "w": "倒れる",
    "r": "たおれる",
    "m": {
      "en": "to fall down",
      "zh-TW": "倒下",
      "zh-CN": "倒下",
      "ko": "쓰러지다",
      "vi": "ngã",
      "id": "jatuh"
    },
    "pos": "verb-ichidan",
    "ex": "倒れることにする"
  },
  {
    "id": "V0786",
    "w": "高める",
    "r": "たかめる",
    "m": {
      "en": "to raise",
      "zh-TW": "提高",
      "zh-CN": "提高",
      "ko": "높이다",
      "vi": "nâng cao",
      "id": "menaikkan"
    },
    "pos": "verb-ichidan",
    "ex": "高めることにする"
  },
  {
    "id": "V0787",
    "w": "耕す",
    "r": "たがやす",
    "m": {
      "en": "to plow",
      "zh-TW": "耕種",
      "zh-CN": "耕种",
      "ko": "경작하다",
      "vi": "cày",
      "id": "membajak"
    },
    "pos": "verb-godan",
    "ex": "耕すことにする"
  },
  {
    "id": "V0788",
    "w": "炊く",
    "r": "たく",
    "m": {
      "en": "to cook rice",
      "zh-TW": "煮飯",
      "zh-CN": "煮饭",
      "ko": "밥짓다",
      "vi": "nấu cơm",
      "id": "memasak nasi"
    },
    "pos": "verb-godan",
    "ex": "炊くことにする"
  },
  {
    "id": "V0789",
    "w": "宅",
    "r": "たく",
    "m": {
      "en": "home",
      "zh-TW": "宅",
      "zh-CN": "宅",
      "ko": "댁",
      "vi": "nhà",
      "id": "rumah"
    },
    "pos": "verb-godan",
    "ex": "宅ことにする"
  },
  {
    "id": "V0790",
    "w": "蓄える",
    "r": "たくわえる",
    "m": {
      "en": "to store",
      "zh-TW": "儲存",
      "zh-CN": "储存",
      "ko": "저축하다",
      "vi": "tích trữ",
      "id": "menyimpan"
    },
    "pos": "verb-ichidan",
    "ex": "蓄えることにする"
  },
  {
    "id": "V0791",
    "w": "確か",
    "r": "たしか",
    "m": {
      "en": "certain",
      "zh-TW": "確實",
      "zh-CN": "确实",
      "ko": "확실한",
      "vi": "chắc chắn",
      "id": "pasti"
    },
    "pos": "noun",
    "ex": "確かについて考える"
  },
  {
    "id": "V0792",
    "w": "確かめる",
    "r": "たしかめる",
    "m": {
      "en": "to confirm",
      "zh-TW": "確認",
      "zh-CN": "确认",
      "ko": "확인하다",
      "vi": "xác nhận",
      "id": "memastikan"
    },
    "pos": "verb-ichidan",
    "ex": "確かめることにする"
  },
  {
    "id": "V0793",
    "w": "足す",
    "r": "たす",
    "m": {
      "en": "to add",
      "zh-TW": "加",
      "zh-CN": "加",
      "ko": "더하다",
      "vi": "cộng",
      "id": "menambah"
    },
    "pos": "verb-godan",
    "ex": "足すことにする"
  },
  {
    "id": "V0794",
    "w": "助かる",
    "r": "たすかる",
    "m": {
      "en": "to be saved",
      "zh-TW": "得救",
      "zh-CN": "得救",
      "ko": "살다",
      "vi": "được cứu",
      "id": "tertolong"
    },
    "pos": "verb-godan",
    "ex": "助かることにする"
  },
  {
    "id": "V0795",
    "w": "助ける",
    "r": "たすける",
    "m": {
      "en": "to help",
      "zh-TW": "幫助",
      "zh-CN": "帮助",
      "ko": "돕다",
      "vi": "giúp đỡ",
      "id": "membantu"
    },
    "pos": "verb-ichidan",
    "ex": "助けることにする"
  },
  {
    "id": "V0796",
    "w": "訪ねる",
    "r": "たずねる",
    "m": {
      "en": "to visit",
      "zh-TW": "拜訪",
      "zh-CN": "拜访",
      "ko": "방문하다",
      "vi": "thăm",
      "id": "mengunjungi"
    },
    "pos": "verb-ichidan",
    "ex": "訪ねることにする"
  },
  {
    "id": "V0797",
    "w": "尋ねる",
    "r": "たずねる",
    "m": {
      "en": "to ask",
      "zh-TW": "詢問",
      "zh-CN": "询问",
      "ko": "묻다",
      "vi": "hỏi",
      "id": "bertanya"
    },
    "pos": "verb-ichidan",
    "ex": "尋ねることにする"
  },
  {
    "id": "V0798",
    "w": "戦う",
    "r": "たたかう",
    "m": {
      "en": "to fight",
      "zh-TW": "戰鬥",
      "zh-CN": "战斗",
      "ko": "싸우다",
      "vi": "chiến đấu",
      "id": "bertarung"
    },
    "pos": "verb-godan",
    "ex": "戦うことにする"
  },
  {
    "id": "V0799",
    "w": "畳む",
    "r": "たたむ",
    "m": {
      "en": "to fold",
      "zh-TW": "摺疊",
      "zh-CN": "折叠",
      "ko": "접다",
      "vi": "gấp",
      "id": "melipat"
    },
    "pos": "verb-godan",
    "ex": "畳むことにする"
  },
  {
    "id": "V0800",
    "w": "叩く",
    "r": "たたく",
    "m": {
      "en": "to hit",
      "zh-TW": "敲",
      "zh-CN": "敲",
      "ko": "두드리다",
      "vi": "gõ",
      "id": "memukul"
    },
    "pos": "verb-godan",
    "ex": "叩くことにする"
  },
  {
    "id": "V0801",
    "w": "漂う",
    "r": "ただよう",
    "m": {
      "en": "to float",
      "zh-TW": "漂浮",
      "zh-CN": "漂浮",
      "ko": "떠돌다",
      "vi": "trôi",
      "id": "mengapung"
    },
    "pos": "verb-godan",
    "ex": "漂うことにする"
  },
  {
    "id": "V0802",
    "w": "立ち上がる",
    "r": "たちあがる",
    "m": {
      "en": "to stand up",
      "zh-TW": "站起來",
      "zh-CN": "站起来",
      "ko": "일어서다",
      "vi": "đứng dậy",
      "id": "berdiri"
    },
    "pos": "verb-godan",
    "ex": "立ち上がることにする"
  },
  {
    "id": "V0803",
    "w": "立ち止まる",
    "r": "たちどまる",
    "m": {
      "en": "to stop",
      "zh-TW": "停下",
      "zh-CN": "停下",
      "ko": "멈추다",
      "vi": "dừng lại",
      "id": "berhenti"
    },
    "pos": "verb-godan",
    "ex": "立ち止まることにする"
  },
  {
    "id": "V0804",
    "w": "達成",
    "r": "たっせい",
    "m": {
      "en": "achievement",
      "zh-TW": "達成",
      "zh-CN": "达成",
      "ko": "달성",
      "vi": "đạt được",
      "id": "pencapaian"
    },
    "pos": "i-adj",
    "ex": "とても達成と思う"
  },
  {
    "id": "V0805",
    "w": "立てる",
    "r": "たてる",
    "m": {
      "en": "to set up",
      "zh-TW": "立起",
      "zh-CN": "立起",
      "ko": "세우다",
      "vi": "dựng",
      "id": "mendirikan"
    },
    "pos": "verb-ichidan",
    "ex": "立てることにする"
  },
  {
    "id": "V0806",
    "w": "建物",
    "r": "たてもの",
    "m": {
      "en": "building",
      "zh-TW": "建築物",
      "zh-CN": "建筑物",
      "ko": "건물",
      "vi": "tòa nhà",
      "id": "bangunan"
    },
    "pos": "noun",
    "ex": "高い建物が見える"
  },
  {
    "id": "V0807",
    "w": "例え",
    "r": "たとえ",
    "m": {
      "en": "example",
      "zh-TW": "例子",
      "zh-CN": "例子",
      "ko": "예",
      "vi": "ví dụ",
      "id": "contoh"
    },
    "pos": "noun",
    "ex": "例えについて考える"
  },
  {
    "id": "V0808",
    "w": "例える",
    "r": "たとえる",
    "m": {
      "en": "to compare",
      "zh-TW": "比喻",
      "zh-CN": "比喻",
      "ko": "비유하다",
      "vi": "ví",
      "id": "membandingkan"
    },
    "pos": "verb-ichidan",
    "ex": "例えることにする"
  },
  {
    "id": "V0809",
    "w": "楽しみ",
    "r": "たのしみ",
    "m": {
      "en": "enjoyment",
      "zh-TW": "樂趣",
      "zh-CN": "乐趣",
      "ko": "즐거움",
      "vi": "niềm vui",
      "id": "kesenangan"
    },
    "pos": "noun",
    "ex": "楽しみについて考える"
  },
  {
    "id": "V0810",
    "w": "頼む",
    "r": "たのむ",
    "m": {
      "en": "to request",
      "zh-TW": "請求",
      "zh-CN": "请求",
      "ko": "부탁하다",
      "vi": "nhờ",
      "id": "meminta"
    },
    "pos": "verb-godan",
    "ex": "仕事を頼む"
  },
  {
    "id": "V0811",
    "w": "頼る",
    "r": "たよる",
    "m": {
      "en": "to rely on",
      "zh-TW": "依賴",
      "zh-CN": "依赖",
      "ko": "의지하다",
      "vi": "dựa vào",
      "id": "bergantung"
    },
    "pos": "verb-godan",
    "ex": "頼ることにする"
  },
  {
    "id": "V0812",
    "w": "足りる",
    "r": "たりる",
    "m": {
      "en": "to be enough",
      "zh-TW": "足夠",
      "zh-CN": "足够",
      "ko": "충분하다",
      "vi": "đủ",
      "id": "cukup"
    },
    "pos": "verb-ichidan",
    "ex": "お金が足りる"
  },
  {
    "id": "V0813",
    "w": "垂れる",
    "r": "たれる",
    "m": {
      "en": "to hang down",
      "zh-TW": "垂下",
      "zh-CN": "垂下",
      "ko": "늘어지다",
      "vi": "buông",
      "id": "menggantung"
    },
    "pos": "verb-ichidan",
    "ex": "垂れることにする"
  },
  {
    "id": "V0814",
    "w": "団体",
    "r": "だんたい",
    "m": {
      "en": "group",
      "zh-TW": "團體",
      "zh-CN": "团体",
      "ko": "단체",
      "vi": "đoàn thể",
      "id": "kelompok"
    },
    "pos": "i-adj",
    "ex": "とても団体と思う"
  },
  {
    "id": "V0815",
    "w": "短期",
    "r": "たんき",
    "m": {
      "en": "short term",
      "zh-TW": "短期",
      "zh-CN": "短期",
      "ko": "단기",
      "vi": "ngắn hạn",
      "id": "jangka pendek"
    },
    "pos": "noun",
    "ex": "短期について考える"
  },
  {
    "id": "V0816",
    "w": "担当",
    "r": "たんとう",
    "m": {
      "en": "in charge",
      "zh-TW": "負責",
      "zh-CN": "负责",
      "ko": "담당",
      "vi": "phụ trách",
      "id": "bertanggung jawab"
    },
    "pos": "verb-godan",
    "ex": "担当ことにする"
  },
  {
    "id": "V0817",
    "w": "単なる",
    "r": "たんなる",
    "m": {
      "en": "mere",
      "zh-TW": "單純的",
      "zh-CN": "单纯的",
      "ko": "단순한",
      "vi": "chỉ",
      "id": "hanya"
    },
    "pos": "verb-godan",
    "ex": "単なることにする"
  },
  {
    "id": "V0818",
    "w": "単位",
    "r": "たんい",
    "m": {
      "en": "unit",
      "zh-TW": "單位",
      "zh-CN": "单位",
      "ko": "단위",
      "vi": "đơn vị",
      "id": "satuan"
    },
    "pos": "i-adj",
    "ex": "とても単位と思う"
  },
  {
    "id": "V0819",
    "w": "地位",
    "r": "ちい",
    "m": {
      "en": "status",
      "zh-TW": "地位",
      "zh-CN": "地位",
      "ko": "지위",
      "vi": "địa vị",
      "id": "status"
    },
    "pos": "i-adj",
    "ex": "とても地位と思う"
  },
  {
    "id": "V0820",
    "w": "地域",
    "r": "ちいき",
    "m": {
      "en": "area",
      "zh-TW": "地區",
      "zh-CN": "地区",
      "ko": "지역",
      "vi": "khu vực",
      "id": "daerah"
    },
    "pos": "noun",
    "ex": "地域について考える"
  },
  {
    "id": "V0821",
    "w": "知恵",
    "r": "ちえ",
    "m": {
      "en": "wisdom",
      "zh-TW": "智慧",
      "zh-CN": "智慧",
      "ko": "지혜",
      "vi": "trí tuệ",
      "id": "kebijaksanaan"
    },
    "pos": "noun",
    "ex": "知恵について考える"
  },
  {
    "id": "V0822",
    "w": "地下",
    "r": "ちか",
    "m": {
      "en": "underground",
      "zh-TW": "地下",
      "zh-CN": "地下",
      "ko": "지하",
      "vi": "dưới đất",
      "id": "bawah tanah"
    },
    "pos": "noun",
    "ex": "地下について考える"
  },
  {
    "id": "V0823",
    "w": "近づく",
    "r": "ちかづく",
    "m": {
      "en": "to approach",
      "zh-TW": "接近",
      "zh-CN": "接近",
      "ko": "다가가다",
      "vi": "tiến lại",
      "id": "mendekati"
    },
    "pos": "verb-godan",
    "ex": "近づくことにする"
  },
  {
    "id": "V0824",
    "w": "近づける",
    "r": "ちかづける",
    "m": {
      "en": "to bring close",
      "zh-TW": "靠近",
      "zh-CN": "靠近",
      "ko": "가까이하다",
      "vi": "đưa lại gần",
      "id": "mendekatkan"
    },
    "pos": "verb-ichidan",
    "ex": "近づけることにする"
  },
  {
    "id": "V0825",
    "w": "力",
    "r": "ちから",
    "m": {
      "en": "power",
      "zh-TW": "力量",
      "zh-CN": "力量",
      "ko": "힘",
      "vi": "sức mạnh",
      "id": "kekuatan"
    },
    "pos": "noun",
    "ex": "力を合わせる"
  },
  {
    "id": "V0826",
    "w": "地球",
    "r": "ちきゅう",
    "m": {
      "en": "earth",
      "zh-TW": "地球",
      "zh-CN": "地球",
      "ko": "지구",
      "vi": "trái đất",
      "id": "bumi"
    },
    "pos": "verb-godan",
    "ex": "地球ことにする"
  },
  {
    "id": "V0827",
    "w": "遅刻",
    "r": "ちこく",
    "m": {
      "en": "lateness",
      "zh-TW": "遲到",
      "zh-CN": "迟到",
      "ko": "지각",
      "vi": "đến muộn",
      "id": "terlambat"
    },
    "pos": "verb-godan",
    "ex": "遅刻ことにする"
  },
  {
    "id": "V0828",
    "w": "知識",
    "r": "ちしき",
    "m": {
      "en": "knowledge",
      "zh-TW": "知識",
      "zh-CN": "知识",
      "ko": "지식",
      "vi": "kiến thức",
      "id": "pengetahuan"
    },
    "pos": "noun",
    "ex": "専門知識を持つ",
    "syn": [
      "教養",
      "学識",
      "情報"
    ]
  },
  {
    "id": "V0829",
    "w": "地点",
    "r": "ちてん",
    "m": {
      "en": "spot",
      "zh-TW": "地點",
      "zh-CN": "地点",
      "ko": "지점",
      "vi": "địa điểm",
      "id": "titik"
    },
    "pos": "noun",
    "ex": "地点について考える"
  },
  {
    "id": "V0830",
    "w": "縮む",
    "r": "ちぢむ",
    "m": {
      "en": "to shrink",
      "zh-TW": "縮小",
      "zh-CN": "缩小",
      "ko": "줄다",
      "vi": "co lại",
      "id": "menyusut"
    },
    "pos": "verb-godan",
    "ex": "縮むことにする"
  },
  {
    "id": "V0831",
    "w": "縮める",
    "r": "ちぢめる",
    "m": {
      "en": "to shorten",
      "zh-TW": "縮短",
      "zh-CN": "缩短",
      "ko": "줄이다",
      "vi": "rút ngắn",
      "id": "memperpendek"
    },
    "pos": "verb-ichidan",
    "ex": "縮めることにする"
  },
  {
    "id": "V0832",
    "w": "秩序",
    "r": "ちつじょ",
    "m": {
      "en": "order",
      "zh-TW": "秩序",
      "zh-CN": "秩序",
      "ko": "질서",
      "vi": "trật tự",
      "id": "ketertiban"
    },
    "pos": "noun",
    "ex": "秩序について考える"
  },
  {
    "id": "V0833",
    "w": "茶",
    "r": "ちゃ",
    "m": {
      "en": "tea",
      "zh-TW": "茶",
      "zh-CN": "茶",
      "ko": "차",
      "vi": "trà",
      "id": "teh"
    },
    "pos": "noun",
    "ex": "茶について考える"
  },
  {
    "id": "V0834",
    "w": "着実",
    "r": "ちゃくじつ",
    "m": {
      "en": "steady",
      "zh-TW": "穩健",
      "zh-CN": "稳健",
      "ko": "착실",
      "vi": "vững chắc",
      "id": "mantap"
    },
    "pos": "verb-godan",
    "ex": "着実ことにする"
  },
  {
    "id": "V0835",
    "w": "注",
    "r": "ちゅう",
    "m": {
      "en": "note",
      "zh-TW": "注",
      "zh-CN": "注",
      "ko": "주",
      "vi": "chú",
      "id": "catatan"
    },
    "pos": "verb-godan",
    "ex": "注ことにする"
  },
  {
    "id": "V0836",
    "w": "中央",
    "r": "ちゅうおう",
    "m": {
      "en": "center",
      "zh-TW": "中央",
      "zh-CN": "中央",
      "ko": "중앙",
      "vi": "trung tâm",
      "id": "pusat"
    },
    "pos": "verb-godan",
    "ex": "中央ことにする"
  },
  {
    "id": "V0837",
    "w": "中間",
    "r": "ちゅうかん",
    "m": {
      "en": "middle",
      "zh-TW": "中間",
      "zh-CN": "中间",
      "ko": "중간",
      "vi": "giữa",
      "id": "tengah"
    },
    "pos": "noun",
    "ex": "中間について考える"
  },
  {
    "id": "V0838",
    "w": "注射",
    "r": "ちゅうしゃ",
    "m": {
      "en": "injection",
      "zh-TW": "注射",
      "zh-CN": "注射",
      "ko": "주사",
      "vi": "tiêm",
      "id": "suntikan"
    },
    "pos": "noun",
    "ex": "注射について考える"
  },
  {
    "id": "V0839",
    "w": "駐車",
    "r": "ちゅうしゃ",
    "m": {
      "en": "parking",
      "zh-TW": "停車",
      "zh-CN": "停车",
      "ko": "주차",
      "vi": "đỗ xe",
      "id": "parkir"
    },
    "pos": "noun",
    "ex": "駐車について考える"
  },
  {
    "id": "V0840",
    "w": "中止",
    "r": "ちゅうし",
    "m": {
      "en": "suspension",
      "zh-TW": "中止",
      "zh-CN": "中止",
      "ko": "중지",
      "vi": "đình chỉ",
      "id": "penghentian"
    },
    "pos": "noun",
    "ex": "中止について考える"
  },
  {
    "id": "V0841",
    "w": "注目",
    "r": "ちゅうもく",
    "m": {
      "en": "attention",
      "zh-TW": "注目",
      "zh-CN": "注目",
      "ko": "주목",
      "vi": "chú ý",
      "id": "perhatian"
    },
    "pos": "verb-godan",
    "ex": "注目ことにする",
    "syn": [
      "注視する",
      "着目する",
      "目を向ける"
    ]
  },
  {
    "id": "V0842",
    "w": "注文",
    "r": "ちゅうもん",
    "m": {
      "en": "order",
      "zh-TW": "訂購",
      "zh-CN": "订购",
      "ko": "주문",
      "vi": "đặt hàng",
      "id": "pesanan"
    },
    "pos": "noun",
    "ex": "注文について考える"
  },
  {
    "id": "V0843",
    "w": "調査",
    "r": "ちょうさ",
    "m": {
      "en": "survey",
      "zh-TW": "調查",
      "zh-CN": "调查",
      "ko": "조사",
      "vi": "khảo sát",
      "id": "survei"
    },
    "pos": "noun",
    "ex": "調査について考える",
    "syn": [
      "調べる",
      "検査する",
      "探る"
    ]
  },
  {
    "id": "V0844",
    "w": "調子",
    "r": "ちょうし",
    "m": {
      "en": "condition",
      "zh-TW": "狀態",
      "zh-CN": "状态",
      "ko": "상태",
      "vi": "tình trạng",
      "id": "kondisi"
    },
    "pos": "noun",
    "ex": "調子について考える"
  },
  {
    "id": "V0845",
    "w": "長所",
    "r": "ちょうしょ",
    "m": {
      "en": "strong point",
      "zh-TW": "優點",
      "zh-CN": "优点",
      "ko": "장점",
      "vi": "ưu điểm",
      "id": "kelebihan"
    },
    "pos": "noun",
    "ex": "長所について考える"
  },
  {
    "id": "V0846",
    "w": "調整",
    "r": "ちょうせい",
    "m": {
      "en": "adjustment",
      "zh-TW": "調整",
      "zh-CN": "调整",
      "ko": "조정",
      "vi": "điều chỉnh",
      "id": "penyesuaian"
    },
    "pos": "i-adj",
    "ex": "とても調整と思う"
  },
  {
    "id": "V0847",
    "w": "挑戦",
    "r": "ちょうせん",
    "m": {
      "en": "challenge",
      "zh-TW": "挑戰",
      "zh-CN": "挑战",
      "ko": "도전",
      "vi": "thử thách",
      "id": "tantangan"
    },
    "pos": "noun",
    "ex": "挑戦について考える",
    "syn": [
      "チャレンジする",
      "試みる",
      "取り組む"
    ]
  },
  {
    "id": "V0848",
    "w": "長男",
    "r": "ちょうなん",
    "m": {
      "en": "eldest son",
      "zh-TW": "長子",
      "zh-CN": "长子",
      "ko": "장남",
      "vi": "con trai cả",
      "id": "anak sulung"
    },
    "pos": "noun",
    "ex": "長男について考える"
  },
  {
    "id": "V0849",
    "w": "頂点",
    "r": "ちょうてん",
    "m": {
      "en": "peak",
      "zh-TW": "頂點",
      "zh-CN": "顶点",
      "ko": "정점",
      "vi": "đỉnh",
      "id": "puncak"
    },
    "pos": "noun",
    "ex": "頂点について考える"
  },
  {
    "id": "V0850",
    "w": "丁度",
    "r": "ちょうど",
    "m": {
      "en": "exactly",
      "zh-TW": "剛好",
      "zh-CN": "刚好",
      "ko": "딱",
      "vi": "vừa đúng",
      "id": "persis"
    },
    "pos": "noun",
    "ex": "丁度について考える"
  },
  {
    "id": "V0851",
    "w": "直接",
    "r": "ちょくせつ",
    "m": {
      "en": "direct",
      "zh-TW": "直接",
      "zh-CN": "直接",
      "ko": "직접",
      "vi": "trực tiếp",
      "id": "langsung"
    },
    "pos": "verb-godan",
    "ex": "直接ことにする"
  },
  {
    "id": "V0852",
    "w": "著者",
    "r": "ちょしゃ",
    "m": {
      "en": "author",
      "zh-TW": "作者",
      "zh-CN": "作者",
      "ko": "저자",
      "vi": "tác giả",
      "id": "penulis"
    },
    "pos": "noun",
    "ex": "著者について考える"
  },
  {
    "id": "V0853",
    "w": "貯蓄",
    "r": "ちょちく",
    "m": {
      "en": "savings",
      "zh-TW": "儲蓄",
      "zh-CN": "储蓄",
      "ko": "저축",
      "vi": "tiết kiệm",
      "id": "tabungan"
    },
    "pos": "verb-godan",
    "ex": "貯蓄ことにする"
  },
  {
    "id": "V0854",
    "w": "散らかす",
    "r": "ちらかす",
    "m": {
      "en": "to scatter",
      "zh-TW": "弄亂",
      "zh-CN": "弄乱",
      "ko": "어지르다",
      "vi": "làm bừa",
      "id": "mengacak"
    },
    "pos": "verb-godan",
    "ex": "散らかすことにする"
  },
  {
    "id": "V0855",
    "w": "散らかる",
    "r": "ちらかる",
    "m": {
      "en": "to be messy",
      "zh-TW": "凌亂",
      "zh-CN": "凌乱",
      "ko": "어지럽다",
      "vi": "bừa bộn",
      "id": "berantakan"
    },
    "pos": "verb-godan",
    "ex": "散らかることにする"
  },
  {
    "id": "V0856",
    "w": "塵",
    "r": "ちり",
    "m": {
      "en": "dust",
      "zh-TW": "灰塵",
      "zh-CN": "灰尘",
      "ko": "먼지",
      "vi": "bụi",
      "id": "debu"
    },
    "pos": "noun",
    "ex": "塵について考える"
  },
  {
    "id": "V0857",
    "w": "治療",
    "r": "ちりょう",
    "m": {
      "en": "treatment",
      "zh-TW": "治療",
      "zh-CN": "治疗",
      "ko": "치료",
      "vi": "điều trị",
      "id": "perawatan"
    },
    "pos": "verb-godan",
    "ex": "治療ことにする"
  },
  {
    "id": "V0858",
    "w": "沈黙",
    "r": "ちんもく",
    "m": {
      "en": "silence",
      "zh-TW": "沉默",
      "zh-CN": "沉默",
      "ko": "침묵",
      "vi": "im lặng",
      "id": "diam"
    },
    "pos": "verb-godan",
    "ex": "沈黙ことにする"
  },
  {
    "id": "V0859",
    "w": "追加",
    "r": "ついか",
    "m": {
      "en": "addition",
      "zh-TW": "追加",
      "zh-CN": "追加",
      "ko": "추가",
      "vi": "thêm",
      "id": "tambahan"
    },
    "pos": "noun",
    "ex": "追加について考える"
  },
  {
    "id": "V0860",
    "w": "追求",
    "r": "ついきゅう",
    "m": {
      "en": "pursuit",
      "zh-TW": "追求",
      "zh-CN": "追求",
      "ko": "추구",
      "vi": "theo đuổi",
      "id": "pengejaran"
    },
    "pos": "verb-godan",
    "ex": "追求ことにする"
  },
  {
    "id": "V0861",
    "w": "通過",
    "r": "つうか",
    "m": {
      "en": "passage",
      "zh-TW": "通過",
      "zh-CN": "通过",
      "ko": "통과",
      "vi": "qua",
      "id": "melewati"
    },
    "pos": "noun",
    "ex": "通過について考える"
  },
  {
    "id": "V0862",
    "w": "通勤",
    "r": "つうきん",
    "m": {
      "en": "commuting",
      "zh-TW": "通勤",
      "zh-CN": "通勤",
      "ko": "통근",
      "vi": "đi làm",
      "id": "berangkat kerja"
    },
    "pos": "noun",
    "ex": "通勤について考える"
  },
  {
    "id": "V0863",
    "w": "通常",
    "r": "つうじょう",
    "m": {
      "en": "usual",
      "zh-TW": "通常",
      "zh-CN": "通常",
      "ko": "통상",
      "vi": "thông thường",
      "id": "biasa"
    },
    "pos": "verb-godan",
    "ex": "通常ことにする"
  },
  {
    "id": "V0864",
    "w": "通信",
    "r": "つうしん",
    "m": {
      "en": "communication",
      "zh-TW": "通信",
      "zh-CN": "通信",
      "ko": "통신",
      "vi": "liên lạc",
      "id": "komunikasi"
    },
    "pos": "noun",
    "ex": "通信について考える"
  },
  {
    "id": "V0865",
    "w": "通用",
    "r": "つうよう",
    "m": {
      "en": "common use",
      "zh-TW": "通用",
      "zh-CN": "通用",
      "ko": "통용",
      "vi": "thông dụng",
      "id": "umum"
    },
    "pos": "verb-godan",
    "ex": "通用ことにする"
  },
  {
    "id": "V0866",
    "w": "使い方",
    "r": "つかいかた",
    "m": {
      "en": "how to use",
      "zh-TW": "使用方法",
      "zh-CN": "使用方法",
      "ko": "사용법",
      "vi": "cách dùng",
      "id": "cara pakai"
    },
    "pos": "noun",
    "ex": "使い方について考える"
  },
  {
    "id": "V0867",
    "w": "つかむ",
    "r": "つかむ",
    "m": {
      "en": "to grasp",
      "zh-TW": "抓住",
      "zh-CN": "抓住",
      "ko": "잡다",
      "vi": "nắm",
      "id": "menggenggam"
    },
    "pos": "verb-godan",
    "ex": "つかむことにする"
  },
  {
    "id": "V0868",
    "w": "疲れ",
    "r": "つかれ",
    "m": {
      "en": "tiredness",
      "zh-TW": "疲勞",
      "zh-CN": "疲劳",
      "ko": "피로",
      "vi": "mệt mỏi",
      "id": "kelelahan"
    },
    "pos": "noun",
    "ex": "疲れについて考える"
  },
  {
    "id": "V0869",
    "w": "付き合い",
    "r": "つきあい",
    "m": {
      "en": "association",
      "zh-TW": "交往",
      "zh-CN": "交往",
      "ko": "교제",
      "vi": "giao tiếp",
      "id": "pergaulan"
    },
    "pos": "i-adj",
    "ex": "とても付き合いと思う"
  },
  {
    "id": "V0870",
    "w": "付き合う",
    "r": "つきあう",
    "m": {
      "en": "to associate",
      "zh-TW": "交往",
      "zh-CN": "交往",
      "ko": "사귀다",
      "vi": "giao du",
      "id": "bergaul"
    },
    "pos": "verb-godan",
    "ex": "付き合うことにする"
  },
  {
    "id": "V0871",
    "w": "次々",
    "r": "つぎつぎ",
    "m": {
      "en": "one after another",
      "zh-TW": "接連",
      "zh-CN": "接连",
      "ko": "차례차례",
      "vi": "liên tiếp",
      "id": "satu per satu"
    },
    "pos": "noun",
    "ex": "次々について考える"
  },
  {
    "id": "V0872",
    "w": "継ぐ",
    "r": "つぐ",
    "m": {
      "en": "to succeed",
      "zh-TW": "繼承",
      "zh-CN": "继承",
      "ko": "잇다",
      "vi": "kế thừa",
      "id": "mewarisi"
    },
    "pos": "verb-godan",
    "ex": "継ぐことにする"
  },
  {
    "id": "V0873",
    "w": "尽くす",
    "r": "つくす",
    "m": {
      "en": "to exhaust",
      "zh-TW": "盡力",
      "zh-CN": "尽力",
      "ko": "다하다",
      "vi": "hết mình",
      "id": "mencurahkan"
    },
    "pos": "verb-godan",
    "ex": "尽くすことにする"
  },
  {
    "id": "V0874",
    "w": "作り",
    "r": "つくり",
    "m": {
      "en": "make",
      "zh-TW": "製作",
      "zh-CN": "制作",
      "ko": "만들기",
      "vi": "cách làm",
      "id": "pembuatan"
    },
    "pos": "noun",
    "ex": "作りについて考える"
  },
  {
    "id": "V0875",
    "w": "告げる",
    "r": "つげる",
    "m": {
      "en": "to tell",
      "zh-TW": "告訴",
      "zh-CN": "告诉",
      "ko": "알리다",
      "vi": "báo",
      "id": "memberitahu"
    },
    "pos": "verb-godan",
    "ex": "告げることにする"
  },
  {
    "id": "V0876",
    "w": "都合",
    "r": "つごう",
    "m": {
      "en": "convenience",
      "zh-TW": "方便",
      "zh-CN": "方便",
      "ko": "사정",
      "vi": "tiện",
      "id": "kecocokan"
    },
    "pos": "verb-godan",
    "ex": "都合ことにする"
  },
  {
    "id": "V0877",
    "w": "伝わる",
    "r": "つたわる",
    "m": {
      "en": "to be transmitted",
      "zh-TW": "傳達",
      "zh-CN": "传达",
      "ko": "전해지다",
      "vi": "truyền",
      "id": "disampaikan"
    },
    "pos": "verb-godan",
    "ex": "伝わることにする"
  },
  {
    "id": "V0878",
    "w": "伝える",
    "r": "つたえる",
    "m": {
      "en": "to convey",
      "zh-TW": "傳達",
      "zh-CN": "传达",
      "ko": "전하다",
      "vi": "truyền đạt",
      "id": "menyampaikan"
    },
    "pos": "verb-ichidan",
    "ex": "気持ちを伝える"
  },
  {
    "id": "V0879",
    "w": "続き",
    "r": "つづき",
    "m": {
      "en": "continuation",
      "zh-TW": "續",
      "zh-CN": "续",
      "ko": "계속",
      "vi": "tiếp tục",
      "id": "kelanjutan"
    },
    "pos": "noun",
    "ex": "続きについて考える"
  },
  {
    "id": "V0880",
    "w": "続く",
    "r": "つづく",
    "m": {
      "en": "to continue",
      "zh-TW": "繼續",
      "zh-CN": "继续",
      "ko": "이어지다",
      "vi": "tiếp tục",
      "id": "melanjutkan"
    },
    "pos": "verb-godan",
    "ex": "雨が続く"
  },
  {
    "id": "V0881",
    "w": "続ける",
    "r": "つづける",
    "m": {
      "en": "to continue",
      "zh-TW": "繼續",
      "zh-CN": "继续",
      "ko": "계속하다",
      "vi": "tiếp tục",
      "id": "melanjutkan"
    },
    "pos": "verb-ichidan",
    "ex": "努力を続ける"
  },
  {
    "id": "V0882",
    "w": "包む",
    "r": "つつむ",
    "m": {
      "en": "to wrap",
      "zh-TW": "包",
      "zh-CN": "包",
      "ko": "싸다",
      "vi": "gói",
      "id": "membungkus"
    },
    "pos": "verb-godan",
    "ex": "包むことにする"
  },
  {
    "id": "V0883",
    "w": "勤め",
    "r": "つとめ",
    "m": {
      "en": "duty",
      "zh-TW": "職務",
      "zh-CN": "职务",
      "ko": "근무",
      "vi": "công việc",
      "id": "kewajiban"
    },
    "pos": "noun",
    "ex": "勤めについて考える"
  },
  {
    "id": "V0884",
    "w": "勤める",
    "r": "つとめる",
    "m": {
      "en": "to work",
      "zh-TW": "工作",
      "zh-CN": "工作",
      "ko": "근무하다",
      "vi": "làm việc",
      "id": "bekerja"
    },
    "pos": "verb-ichidan",
    "ex": "勤めることにする"
  },
  {
    "id": "V0885",
    "w": "努める",
    "r": "つとめる",
    "m": {
      "en": "to try",
      "zh-TW": "努力",
      "zh-CN": "努力",
      "ko": "노력하다",
      "vi": "cố gắng",
      "id": "mencoba"
    },
    "pos": "verb-ichidan",
    "ex": "努めることにする"
  },
  {
    "id": "V0886",
    "w": "繋がる",
    "r": "つながる",
    "m": {
      "en": "to connect",
      "zh-TW": "連接",
      "zh-CN": "连接",
      "ko": "연결되다",
      "vi": "kết nối",
      "id": "menghubungkan"
    },
    "pos": "verb-godan",
    "ex": "繋がることにする"
  },
  {
    "id": "V0887",
    "w": "繋げる",
    "r": "つなげる",
    "m": {
      "en": "to link",
      "zh-TW": "連結",
      "zh-CN": "连结",
      "ko": "연결하다",
      "vi": "liên kết",
      "id": "menghubungkan"
    },
    "pos": "verb-godan",
    "ex": "繋げることにする"
  },
  {
    "id": "V0888",
    "w": "常に",
    "r": "つねに",
    "m": {
      "en": "always",
      "zh-TW": "經常",
      "zh-CN": "经常",
      "ko": "항상",
      "vi": "luôn luôn",
      "id": "selalu"
    },
    "pos": "adverb",
    "ex": "常に考える"
  },
  {
    "id": "V0889",
    "w": "翼",
    "r": "つばさ",
    "m": {
      "en": "wing",
      "zh-TW": "翅膀",
      "zh-CN": "翅膀",
      "ko": "날개",
      "vi": "cánh",
      "id": "sayap"
    },
    "pos": "noun",
    "ex": "翼について考える"
  },
  {
    "id": "V0890",
    "w": "粒",
    "r": "つぶ",
    "m": {
      "en": "grain",
      "zh-TW": "粒",
      "zh-CN": "粒",
      "ko": "알갱이",
      "vi": "hạt",
      "id": "butir"
    },
    "pos": "verb-godan",
    "ex": "粒ことにする"
  },
  {
    "id": "V0891",
    "w": "潰す",
    "r": "つぶす",
    "m": {
      "en": "to crush",
      "zh-TW": "壓碎",
      "zh-CN": "压碎",
      "ko": "부수다",
      "vi": "nghiền",
      "id": "menghancurkan"
    },
    "pos": "verb-godan",
    "ex": "潰すことにする"
  },
  {
    "id": "V0892",
    "w": "潰れる",
    "r": "つぶれる",
    "m": {
      "en": "to be crushed",
      "zh-TW": "被壓碎",
      "zh-CN": "被压碎",
      "ko": "부서지다",
      "vi": "bị nghiền",
      "id": "hancur"
    },
    "pos": "verb-ichidan",
    "ex": "潰れることにする"
  },
  {
    "id": "V0893",
    "w": "詰まる",
    "r": "つまる",
    "m": {
      "en": "to be blocked",
      "zh-TW": "堵塞",
      "zh-CN": "堵塞",
      "ko": "막히다",
      "vi": "tắc",
      "id": "tersumbat"
    },
    "pos": "verb-godan",
    "ex": "詰まることにする"
  },
  {
    "id": "V0894",
    "w": "詰める",
    "r": "つめる",
    "m": {
      "en": "to pack",
      "zh-TW": "塞滿",
      "zh-CN": "塞满",
      "ko": "채우다",
      "vi": "nhồi",
      "id": "mengemas"
    },
    "pos": "verb-ichidan",
    "ex": "詰めることにする"
  },
  {
    "id": "V0895",
    "w": "積もる",
    "r": "つもる",
    "m": {
      "en": "to pile up",
      "zh-TW": "堆積",
      "zh-CN": "堆积",
      "ko": "쌓이다",
      "vi": "chất đống",
      "id": "menumpuk"
    },
    "pos": "verb-godan",
    "ex": "積もることにする"
  },
  {
    "id": "V0896",
    "w": "艶",
    "r": "つや",
    "m": {
      "en": "gloss",
      "zh-TW": "光澤",
      "zh-CN": "光泽",
      "ko": "광택",
      "vi": "bóng",
      "id": "kilau"
    },
    "pos": "noun",
    "ex": "艶について考える"
  },
  {
    "id": "V0897",
    "w": "強まる",
    "r": "つよまる",
    "m": {
      "en": "to strengthen",
      "zh-TW": "增強",
      "zh-CN": "增强",
      "ko": "강해지다",
      "vi": "mạnh lên",
      "id": "menguat"
    },
    "pos": "verb-godan",
    "ex": "強まることにする"
  },
  {
    "id": "V0898",
    "w": "強める",
    "r": "つよめる",
    "m": {
      "en": "to strengthen",
      "zh-TW": "加強",
      "zh-CN": "加强",
      "ko": "강화하다",
      "vi": "tăng cường",
      "id": "memperkuat"
    },
    "pos": "verb-ichidan",
    "ex": "強めることにする"
  },
  {
    "id": "V0899",
    "w": "連れ",
    "r": "つれ",
    "m": {
      "en": "companion",
      "zh-TW": "同伴",
      "zh-CN": "同伴",
      "ko": "동반자",
      "vi": "bạn đồng hành",
      "id": "teman"
    },
    "pos": "noun",
    "ex": "連れについて考える"
  },
  {
    "id": "V0900",
    "w": "釣り合う",
    "r": "つりあう",
    "m": {
      "en": "to balance",
      "zh-TW": "平衡",
      "zh-CN": "平衡",
      "ko": "균형잡다",
      "vi": "cân bằng",
      "id": "seimbang"
    },
    "pos": "verb-godan",
    "ex": "釣り合うことにする"
  },
  {
    "id": "V0901",
    "w": "出会い",
    "r": "であい",
    "m": {
      "en": "encounter",
      "zh-TW": "相遇",
      "zh-CN": "相遇",
      "ko": "만남",
      "vi": "gặp gỡ",
      "id": "pertemuan"
    },
    "pos": "i-adj",
    "ex": "とても出会いと思う"
  },
  {
    "id": "V0902",
    "w": "出会う",
    "r": "であう",
    "m": {
      "en": "to meet",
      "zh-TW": "遇見",
      "zh-CN": "遇见",
      "ko": "만나다",
      "vi": "gặp",
      "id": "bertemu"
    },
    "pos": "verb-godan",
    "ex": "出会うことにする"
  },
  {
    "id": "V0903",
    "w": "提案",
    "r": "ていあん",
    "m": {
      "en": "proposal",
      "zh-TW": "提案",
      "zh-CN": "提案",
      "ko": "제안",
      "vi": "đề xuất",
      "id": "usulan"
    },
    "pos": "noun",
    "ex": "提案について考える"
  },
  {
    "id": "V0904",
    "w": "定員",
    "r": "ていいん",
    "m": {
      "en": "capacity",
      "zh-TW": "定員",
      "zh-CN": "定员",
      "ko": "정원",
      "vi": "số lượng",
      "id": "kapasitas"
    },
    "pos": "noun",
    "ex": "定員について考える"
  },
  {
    "id": "V0905",
    "w": "定価",
    "r": "ていか",
    "m": {
      "en": "fixed price",
      "zh-TW": "定價",
      "zh-CN": "定价",
      "ko": "정가",
      "vi": "giá cố định",
      "id": "harga tetap"
    },
    "pos": "noun",
    "ex": "定価について考える"
  },
  {
    "id": "V0906",
    "w": "提供",
    "r": "ていきょう",
    "m": {
      "en": "offer",
      "zh-TW": "提供",
      "zh-CN": "提供",
      "ko": "제공",
      "vi": "cung cấp",
      "id": "penawaran"
    },
    "pos": "verb-godan",
    "ex": "提供ことにする"
  },
  {
    "id": "V0907",
    "w": "抵抗",
    "r": "ていこう",
    "m": {
      "en": "resistance",
      "zh-TW": "抵抗",
      "zh-CN": "抵抗",
      "ko": "저항",
      "vi": "kháng cự",
      "id": "perlawanan"
    },
    "pos": "verb-godan",
    "ex": "抵抗ことにする"
  },
  {
    "id": "V0908",
    "w": "訂正",
    "r": "ていせい",
    "m": {
      "en": "correction",
      "zh-TW": "訂正",
      "zh-CN": "订正",
      "ko": "정정",
      "vi": "sửa chữa",
      "id": "koreksi"
    },
    "pos": "i-adj",
    "ex": "とても訂正と思う"
  },
  {
    "id": "V0909",
    "w": "程度",
    "r": "ていど",
    "m": {
      "en": "degree",
      "zh-TW": "程度",
      "zh-CN": "程度",
      "ko": "정도",
      "vi": "mức độ",
      "id": "tingkat"
    },
    "pos": "noun",
    "ex": "程度について考える"
  },
  {
    "id": "V0910",
    "w": "停電",
    "r": "ていでん",
    "m": {
      "en": "blackout",
      "zh-TW": "停電",
      "zh-CN": "停电",
      "ko": "정전",
      "vi": "mất điện",
      "id": "pemadaman"
    },
    "pos": "noun",
    "ex": "停電について考える"
  },
  {
    "id": "V0911",
    "w": "手入れ",
    "r": "ていれ",
    "m": {
      "en": "care",
      "zh-TW": "保養",
      "zh-CN": "保养",
      "ko": "손질",
      "vi": "bảo dưỡng",
      "id": "perawatan"
    },
    "pos": "noun",
    "ex": "手入れについて考える"
  },
  {
    "id": "V0912",
    "w": "データ",
    "r": "でーた",
    "m": {
      "en": "data",
      "zh-TW": "數據",
      "zh-CN": "数据",
      "ko": "데이터",
      "vi": "dữ liệu",
      "id": "data"
    },
    "pos": "noun",
    "ex": "データについて考える"
  },
  {
    "id": "V0913",
    "w": "出掛ける",
    "r": "でかける",
    "m": {
      "en": "to go out",
      "zh-TW": "外出",
      "zh-CN": "外出",
      "ko": "나가다",
      "vi": "đi ra ngoài",
      "id": "pergi"
    },
    "pos": "verb-ichidan",
    "ex": "出掛けることにする"
  },
  {
    "id": "V0914",
    "w": "出来事",
    "r": "できごと",
    "m": {
      "en": "event",
      "zh-TW": "事件",
      "zh-CN": "事件",
      "ko": "사건",
      "vi": "sự kiện",
      "id": "kejadian"
    },
    "pos": "adverb",
    "ex": "出来事考える"
  },
  {
    "id": "V0915",
    "w": "適切",
    "r": "てきせつ",
    "m": {
      "en": "appropriate",
      "zh-TW": "適當",
      "zh-CN": "适当",
      "ko": "적절",
      "vi": "thích hợp",
      "id": "tepat"
    },
    "pos": "verb-godan",
    "ex": "適切ことにする"
  },
  {
    "id": "V0916",
    "w": "適当",
    "r": "てきとう",
    "m": {
      "en": "suitable",
      "zh-TW": "適當",
      "zh-CN": "适当",
      "ko": "적당",
      "vi": "phù hợp",
      "id": "cocok"
    },
    "pos": "verb-godan",
    "ex": "適当な場所を探す",
    "syn": [
      "適切",
      "ふさわしい",
      "妥当"
    ]
  },
  {
    "id": "V0917",
    "w": "適用",
    "r": "てきよう",
    "m": {
      "en": "application",
      "zh-TW": "適用",
      "zh-CN": "适用",
      "ko": "적용",
      "vi": "áp dụng",
      "id": "penerapan"
    },
    "pos": "verb-godan",
    "ex": "適用ことにする"
  },
  {
    "id": "V0918",
    "w": "手順",
    "r": "てじゅん",
    "m": {
      "en": "procedure",
      "zh-TW": "步驟",
      "zh-CN": "步骤",
      "ko": "순서",
      "vi": "thủ tục",
      "id": "prosedur"
    },
    "pos": "noun",
    "ex": "手順について考える"
  },
  {
    "id": "V0919",
    "w": "手続き",
    "r": "てつづき",
    "m": {
      "en": "procedure",
      "zh-TW": "手續",
      "zh-CN": "手续",
      "ko": "절차",
      "vi": "thủ tục",
      "id": "prosedur"
    },
    "pos": "noun",
    "ex": "手続きについて考える"
  },
  {
    "id": "V0920",
    "w": "鉄道",
    "r": "てつどう",
    "m": {
      "en": "railway",
      "zh-TW": "鐵路",
      "zh-CN": "铁路",
      "ko": "철도",
      "vi": "đường sắt",
      "id": "kereta api"
    },
    "pos": "verb-godan",
    "ex": "鉄道ことにする"
  },
  {
    "id": "V0921",
    "w": "手配",
    "r": "てはい",
    "m": {
      "en": "arrangement",
      "zh-TW": "安排",
      "zh-CN": "安排",
      "ko": "수배",
      "vi": "sắp xếp",
      "id": "pengaturan"
    },
    "pos": "i-adj",
    "ex": "とても手配と思う"
  },
  {
    "id": "V0922",
    "w": "手本",
    "r": "てほん",
    "m": {
      "en": "model",
      "zh-TW": "範本",
      "zh-CN": "范本",
      "ko": "본보기",
      "vi": "mẫu",
      "id": "contoh"
    },
    "pos": "noun",
    "ex": "手本について考える"
  },
  {
    "id": "V0923",
    "w": "照らす",
    "r": "てらす",
    "m": {
      "en": "to illuminate",
      "zh-TW": "照亮",
      "zh-CN": "照亮",
      "ko": "비추다",
      "vi": "chiếu sáng",
      "id": "menerangi"
    },
    "pos": "verb-godan",
    "ex": "照らすことにする"
  },
  {
    "id": "V0924",
    "w": "照る",
    "r": "てる",
    "m": {
      "en": "to shine",
      "zh-TW": "照耀",
      "zh-CN": "照耀",
      "ko": "비치다",
      "vi": "chiếu",
      "id": "bersinar"
    },
    "pos": "verb-ichidan",
    "ex": "照ることにする"
  },
  {
    "id": "V0925",
    "w": "天候",
    "r": "てんこう",
    "m": {
      "en": "weather",
      "zh-TW": "天氣",
      "zh-CN": "天气",
      "ko": "날씨",
      "vi": "thời tiết",
      "id": "cuaca"
    },
    "pos": "verb-godan",
    "ex": "天候ことにする"
  },
  {
    "id": "V0926",
    "w": "転職",
    "r": "てんしょく",
    "m": {
      "en": "job change",
      "zh-TW": "換工作",
      "zh-CN": "换工作",
      "ko": "이직",
      "vi": "đổi việc",
      "id": "pindah kerja"
    },
    "pos": "verb-godan",
    "ex": "転職ことにする"
  },
  {
    "id": "V0927",
    "w": "電池",
    "r": "でんち",
    "m": {
      "en": "battery",
      "zh-TW": "電池",
      "zh-CN": "电池",
      "ko": "전지",
      "vi": "pin",
      "id": "baterai"
    },
    "pos": "noun",
    "ex": "電池について考える"
  },
  {
    "id": "V0928",
    "w": "伝統",
    "r": "でんとう",
    "m": {
      "en": "tradition",
      "zh-TW": "傳統",
      "zh-CN": "传统",
      "ko": "전통",
      "vi": "truyền thống",
      "id": "tradisi"
    },
    "pos": "verb-godan",
    "ex": "伝統ことにする"
  },
  {
    "id": "V0929",
    "w": "天然",
    "r": "てんねん",
    "m": {
      "en": "natural",
      "zh-TW": "天然",
      "zh-CN": "天然",
      "ko": "천연",
      "vi": "tự nhiên",
      "id": "alami"
    },
    "pos": "noun",
    "ex": "天然について考える"
  },
  {
    "id": "V0930",
    "w": "展望",
    "r": "てんぼう",
    "m": {
      "en": "prospect",
      "zh-TW": "展望",
      "zh-CN": "展望",
      "ko": "전망",
      "vi": "triển vọng",
      "id": "prospek"
    },
    "pos": "verb-godan",
    "ex": "展望ことにする"
  },
  {
    "id": "V0931",
    "w": "問い合わせ",
    "r": "といあわせ",
    "m": {
      "en": "inquiry",
      "zh-TW": "詢問",
      "zh-CN": "询问",
      "ko": "문의",
      "vi": "hỏi thăm",
      "id": "pertanyaan"
    },
    "pos": "noun",
    "ex": "問い合わせについて考える"
  },
  {
    "id": "V0932",
    "w": "問い合わせる",
    "r": "といあわせる",
    "m": {
      "en": "to inquire",
      "zh-TW": "詢問",
      "zh-CN": "询问",
      "ko": "문의하다",
      "vi": "hỏi",
      "id": "bertanya"
    },
    "pos": "verb-ichidan",
    "ex": "問い合わせることにする"
  },
  {
    "id": "V0933",
    "w": "統一",
    "r": "とういつ",
    "m": {
      "en": "unification",
      "zh-TW": "統一",
      "zh-CN": "统一",
      "ko": "통일",
      "vi": "thống nhất",
      "id": "penyatuan"
    },
    "pos": "verb-godan",
    "ex": "統一ことにする"
  },
  {
    "id": "V0934",
    "w": "同意",
    "r": "どうい",
    "m": {
      "en": "agreement",
      "zh-TW": "同意",
      "zh-CN": "同意",
      "ko": "동의",
      "vi": "đồng ý",
      "id": "persetujuan"
    },
    "pos": "i-adj",
    "ex": "とても同意と思う"
  },
  {
    "id": "V0935",
    "w": "動機",
    "r": "どうき",
    "m": {
      "en": "motive",
      "zh-TW": "動機",
      "zh-CN": "动机",
      "ko": "동기",
      "vi": "động cơ",
      "id": "motif"
    },
    "pos": "noun",
    "ex": "動機について考える"
  },
  {
    "id": "V0936",
    "w": "統計",
    "r": "とうけい",
    "m": {
      "en": "statistics",
      "zh-TW": "統計",
      "zh-CN": "统计",
      "ko": "통계",
      "vi": "thống kê",
      "id": "statistik"
    },
    "pos": "i-adj",
    "ex": "とても統計と思う"
  },
  {
    "id": "V0937",
    "w": "投資",
    "r": "とうし",
    "m": {
      "en": "investment",
      "zh-TW": "投資",
      "zh-CN": "投资",
      "ko": "투자",
      "vi": "đầu tư",
      "id": "investasi"
    },
    "pos": "noun",
    "ex": "投資について考える"
  },
  {
    "id": "V0938",
    "w": "当時",
    "r": "とうじ",
    "m": {
      "en": "at that time",
      "zh-TW": "當時",
      "zh-CN": "当时",
      "ko": "당시",
      "vi": "lúc đó",
      "id": "waktu itu"
    },
    "pos": "noun",
    "ex": "当時について考える"
  },
  {
    "id": "V0939",
    "w": "同時",
    "r": "どうじ",
    "m": {
      "en": "simultaneous",
      "zh-TW": "同時",
      "zh-CN": "同时",
      "ko": "동시",
      "vi": "đồng thời",
      "id": "bersamaan"
    },
    "pos": "noun",
    "ex": "同時について考える"
  },
  {
    "id": "V0940",
    "w": "どうしても",
    "r": "どうしても",
    "m": {
      "en": "by all means",
      "zh-TW": "無論如何",
      "zh-CN": "无论如何",
      "ko": "어떻게든",
      "vi": "bằng mọi cách",
      "id": "dengan segala cara"
    },
    "pos": "noun",
    "ex": "どうしてもについて考える"
  },
  {
    "id": "V0941",
    "w": "投票",
    "r": "とうひょう",
    "m": {
      "en": "vote",
      "zh-TW": "投票",
      "zh-CN": "投票",
      "ko": "투표",
      "vi": "bỏ phiếu",
      "id": "pemungutan suara"
    },
    "pos": "verb-godan",
    "ex": "投票ことにする"
  },
  {
    "id": "V0942",
    "w": "動物",
    "r": "どうぶつ",
    "m": {
      "en": "animal",
      "zh-TW": "動物",
      "zh-CN": "动物",
      "ko": "동물",
      "vi": "động vật",
      "id": "hewan"
    },
    "pos": "verb-godan",
    "ex": "動物ことにする"
  },
  {
    "id": "V0943",
    "w": "当面",
    "r": "とうめん",
    "m": {
      "en": "for the time being",
      "zh-TW": "當前",
      "zh-CN": "当前",
      "ko": "당면",
      "vi": "trước mắt",
      "id": "saat ini"
    },
    "pos": "noun",
    "ex": "当面について考える"
  },
  {
    "id": "V0944",
    "w": "同様",
    "r": "どうよう",
    "m": {
      "en": "same",
      "zh-TW": "同樣",
      "zh-CN": "同样",
      "ko": "마찬가지",
      "vi": "tương tự",
      "id": "sama"
    },
    "pos": "verb-godan",
    "ex": "同様ことにする"
  },
  {
    "id": "V0945",
    "w": "登録",
    "r": "とうろく",
    "m": {
      "en": "registration",
      "zh-TW": "登記",
      "zh-CN": "登记",
      "ko": "등록",
      "vi": "đăng ký",
      "id": "pendaftaran"
    },
    "pos": "verb-godan",
    "ex": "登録ことにする"
  },
  {
    "id": "V0946",
    "w": "通り",
    "r": "とおり",
    "m": {
      "en": "street",
      "zh-TW": "街道",
      "zh-CN": "街道",
      "ko": "거리",
      "vi": "đường",
      "id": "jalan"
    },
    "pos": "noun",
    "ex": "通りについて考える"
  },
  {
    "id": "V0947",
    "w": "通りかかる",
    "r": "とおりかかる",
    "m": {
      "en": "to pass by",
      "zh-TW": "路過",
      "zh-CN": "路过",
      "ko": "지나가다",
      "vi": "đi qua",
      "id": "melewati"
    },
    "pos": "verb-godan",
    "ex": "通りかかることにする"
  },
  {
    "id": "V0948",
    "w": "溶かす",
    "r": "とかす",
    "m": {
      "en": "to melt",
      "zh-TW": "溶化",
      "zh-CN": "溶化",
      "ko": "녹이다",
      "vi": "làm tan",
      "id": "melelehkan"
    },
    "pos": "verb-godan",
    "ex": "溶かすことにする"
  },
  {
    "id": "V0949",
    "w": "溶ける",
    "r": "とける",
    "m": {
      "en": "to melt",
      "zh-TW": "溶化",
      "zh-CN": "溶化",
      "ko": "녹다",
      "vi": "tan",
      "id": "meleleh"
    },
    "pos": "verb-ichidan",
    "ex": "溶けることにする"
  },
  {
    "id": "V0950",
    "w": "解ける",
    "r": "とける",
    "m": {
      "en": "to be solved",
      "zh-TW": "解開",
      "zh-CN": "解开",
      "ko": "풀리다",
      "vi": "được giải",
      "id": "terpecahkan"
    },
    "pos": "verb-ichidan",
    "ex": "解けることにする"
  },
  {
    "id": "V0951",
    "w": "届ける",
    "r": "とどける",
    "m": {
      "en": "to deliver",
      "zh-TW": "送達",
      "zh-CN": "送达",
      "ko": "전하다",
      "vi": "giao",
      "id": "mengantar"
    },
    "pos": "verb-ichidan",
    "ex": "荷物を届ける"
  },
  {
    "id": "V0952",
    "w": "届く",
    "r": "とどく",
    "m": {
      "en": "to reach",
      "zh-TW": "到達",
      "zh-CN": "到达",
      "ko": "닿다",
      "vi": "đến",
      "id": "sampai"
    },
    "pos": "verb-godan",
    "ex": "手紙が届く"
  },
  {
    "id": "V0953",
    "w": "整う",
    "r": "ととのう",
    "m": {
      "en": "to be prepared",
      "zh-TW": "準備好",
      "zh-CN": "准备好",
      "ko": "갖춰지다",
      "vi": "sẵn sàng",
      "id": "siap"
    },
    "pos": "verb-godan",
    "ex": "整うことにする"
  },
  {
    "id": "V0954",
    "w": "整える",
    "r": "ととのえる",
    "m": {
      "en": "to arrange",
      "zh-TW": "整理",
      "zh-CN": "整理",
      "ko": "갖추다",
      "vi": "sắp xếp",
      "id": "merapikan"
    },
    "pos": "verb-ichidan",
    "ex": "整えることにする"
  },
  {
    "id": "V0955",
    "w": "留まる",
    "r": "とどまる",
    "m": {
      "en": "to stay",
      "zh-TW": "停留",
      "zh-CN": "停留",
      "ko": "머무르다",
      "vi": "ở lại",
      "id": "tinggal"
    },
    "pos": "verb-godan",
    "ex": "留まることにする"
  },
  {
    "id": "V0956",
    "w": "飛び込む",
    "r": "とびこむ",
    "m": {
      "en": "to jump in",
      "zh-TW": "跳入",
      "zh-CN": "跳入",
      "ko": "뛰어들다",
      "vi": "nhảy vào",
      "id": "melompat masuk"
    },
    "pos": "verb-godan",
    "ex": "飛び込むことにする"
  },
  {
    "id": "V0957",
    "w": "飛び出す",
    "r": "とびだす",
    "m": {
      "en": "to jump out",
      "zh-TW": "跳出",
      "zh-CN": "跳出",
      "ko": "뛰쳐나가다",
      "vi": "nhảy ra",
      "id": "melompat keluar"
    },
    "pos": "verb-godan",
    "ex": "飛び出すことにする"
  },
  {
    "id": "V0958",
    "w": "泊まる",
    "r": "とまる",
    "m": {
      "en": "to stay",
      "zh-TW": "住宿",
      "zh-CN": "住宿",
      "ko": "묵다",
      "vi": "ở",
      "id": "menginap"
    },
    "pos": "verb-godan",
    "ex": "泊まることにする"
  },
  {
    "id": "V0959",
    "w": "止まる",
    "r": "とまる",
    "m": {
      "en": "to stop",
      "zh-TW": "停止",
      "zh-CN": "停止",
      "ko": "멈추다",
      "vi": "dừng",
      "id": "berhenti"
    },
    "pos": "verb-godan",
    "ex": "電車が止まる"
  },
  {
    "id": "V0960",
    "w": "止める",
    "r": "とめる",
    "m": {
      "en": "to stop",
      "zh-TW": "停止",
      "zh-CN": "停止",
      "ko": "멈추다",
      "vi": "dừng lại",
      "id": "berhenti"
    },
    "pos": "verb-ichidan",
    "ex": "車を止める"
  },
  {
    "id": "V0961",
    "w": "泊める",
    "r": "とめる",
    "m": {
      "en": "to lodge",
      "zh-TW": "讓住宿",
      "zh-CN": "让住宿",
      "ko": "재우다",
      "vi": "cho ở",
      "id": "menampung"
    },
    "pos": "verb-ichidan",
    "ex": "泊めることにする"
  },
  {
    "id": "V0962",
    "w": "友達",
    "r": "ともだち",
    "m": {
      "en": "friend",
      "zh-TW": "朋友",
      "zh-CN": "朋友",
      "ko": "친구",
      "vi": "bạn",
      "id": "teman"
    },
    "pos": "noun",
    "ex": "友達について考える"
  },
  {
    "id": "V0963",
    "w": "共に",
    "r": "ともに",
    "m": {
      "en": "together",
      "zh-TW": "一起",
      "zh-CN": "一起",
      "ko": "함께",
      "vi": "cùng",
      "id": "bersama"
    },
    "pos": "adverb",
    "ex": "共に考える"
  },
  {
    "id": "V0964",
    "w": "捕らえる",
    "r": "とらえる",
    "m": {
      "en": "to catch",
      "zh-TW": "捉住",
      "zh-CN": "捉住",
      "ko": "잡다",
      "vi": "bắt",
      "id": "menangkap"
    },
    "pos": "verb-ichidan",
    "ex": "捕らえることにする"
  },
  {
    "id": "V0965",
    "w": "取り上げる",
    "r": "とりあげる",
    "m": {
      "en": "to take up",
      "zh-TW": "拿起",
      "zh-CN": "拿起",
      "ko": "들다",
      "vi": "đưa ra",
      "id": "mengangkat"
    },
    "pos": "verb-godan",
    "ex": "取り上げることにする"
  },
  {
    "id": "V0966",
    "w": "取り入れる",
    "r": "とりいれる",
    "m": {
      "en": "to adopt",
      "zh-TW": "採納",
      "zh-CN": "采纳",
      "ko": "받아들이다",
      "vi": "tiếp nhận",
      "id": "mengadopsi"
    },
    "pos": "verb-ichidan",
    "ex": "取り入れることにする"
  },
  {
    "id": "V0967",
    "w": "取り消す",
    "r": "とりけす",
    "m": {
      "en": "to cancel",
      "zh-TW": "取消",
      "zh-CN": "取消",
      "ko": "취소하다",
      "vi": "hủy bỏ",
      "id": "membatalkan"
    },
    "pos": "verb-godan",
    "ex": "取り消すことにする"
  },
  {
    "id": "V0968",
    "w": "取り組む",
    "r": "とりくむ",
    "m": {
      "en": "to tackle",
      "zh-TW": "致力於",
      "zh-CN": "致力于",
      "ko": "달려들다",
      "vi": "bắt tay",
      "id": "menangani"
    },
    "pos": "verb-godan",
    "ex": "取り組むことにする"
  },
  {
    "id": "V0969",
    "w": "取り出す",
    "r": "とりだす",
    "m": {
      "en": "to take out",
      "zh-TW": "拿出",
      "zh-CN": "拿出",
      "ko": "꺼내다",
      "vi": "lấy ra",
      "id": "mengeluarkan"
    },
    "pos": "verb-godan",
    "ex": "取り出すことにする"
  },
  {
    "id": "V0970",
    "w": "努力",
    "r": "どりょく",
    "m": {
      "en": "effort",
      "zh-TW": "努力",
      "zh-CN": "努力",
      "ko": "노력",
      "vi": "nỗ lực",
      "id": "usaha"
    },
    "pos": "verb-godan",
    "ex": "努力ことにする",
    "syn": [
      "頑張る",
      "尽力する",
      "励む"
    ]
  },
  {
    "id": "V0971",
    "w": "撮る",
    "r": "とる",
    "m": {
      "en": "to take photo",
      "zh-TW": "拍攝",
      "zh-CN": "拍摄",
      "ko": "찍다",
      "vi": "chụp",
      "id": "memotret"
    },
    "pos": "verb-godan",
    "ex": "撮ることにする"
  },
  {
    "id": "V0972",
    "w": "採る",
    "r": "とる",
    "m": {
      "en": "to adopt",
      "zh-TW": "採取",
      "zh-CN": "采取",
      "ko": "채택하다",
      "vi": "áp dụng",
      "id": "mengambil"
    },
    "pos": "verb-godan",
    "ex": "採ることにする"
  },
  {
    "id": "V0973",
    "w": "問う",
    "r": "とう",
    "m": {
      "en": "to ask",
      "zh-TW": "問",
      "zh-CN": "问",
      "ko": "묻다",
      "vi": "hỏi",
      "id": "bertanya"
    },
    "pos": "verb-godan",
    "ex": "問うことにする"
  },
  {
    "id": "V0974",
    "w": "内容",
    "r": "ないよう",
    "m": {
      "en": "content",
      "zh-TW": "內容",
      "zh-CN": "内容",
      "ko": "내용",
      "vi": "nội dung",
      "id": "isi"
    },
    "pos": "verb-godan",
    "ex": "会議の内容を確認する",
    "syn": [
      "中身",
      "要旨",
      "詳細"
    ]
  },
  {
    "id": "V0975",
    "w": "直す",
    "r": "なおす",
    "m": {
      "en": "to fix",
      "zh-TW": "修理",
      "zh-CN": "修理",
      "ko": "고치다",
      "vi": "sửa",
      "id": "memperbaiki"
    },
    "pos": "verb-godan",
    "ex": "機械を直す"
  },
  {
    "id": "V0976",
    "w": "治す",
    "r": "なおす",
    "m": {
      "en": "to cure",
      "zh-TW": "治療",
      "zh-CN": "治疗",
      "ko": "낫게하다",
      "vi": "chữa",
      "id": "menyembuhkan"
    },
    "pos": "verb-godan",
    "ex": "病気を治す"
  },
  {
    "id": "V0977",
    "w": "直る",
    "r": "なおる",
    "m": {
      "en": "to be fixed",
      "zh-TW": "修好",
      "zh-CN": "修好",
      "ko": "고쳐지다",
      "vi": "được sửa",
      "id": "diperbaiki"
    },
    "pos": "verb-godan",
    "ex": "直ることにする"
  },
  {
    "id": "V0978",
    "w": "治る",
    "r": "なおる",
    "m": {
      "en": "to heal",
      "zh-TW": "痊癒",
      "zh-CN": "痊愈",
      "ko": "낫다",
      "vi": "khỏi",
      "id": "sembuh"
    },
    "pos": "verb-godan",
    "ex": "治ることにする"
  },
  {
    "id": "V0979",
    "w": "長い",
    "r": "ながい",
    "m": {
      "en": "long",
      "zh-TW": "長",
      "zh-CN": "长",
      "ko": "긴",
      "vi": "dài",
      "id": "panjang"
    },
    "pos": "i-adj",
    "ex": "長い時間待った"
  },
  {
    "id": "V0980",
    "w": "流す",
    "r": "ながす",
    "m": {
      "en": "to pour",
      "zh-TW": "流",
      "zh-CN": "流",
      "ko": "흘리다",
      "vi": "đổ",
      "id": "mengalirkan"
    },
    "pos": "verb-godan",
    "ex": "流すことにする"
  },
  {
    "id": "V0981",
    "w": "流れ",
    "r": "ながれ",
    "m": {
      "en": "flow",
      "zh-TW": "流動",
      "zh-CN": "流动",
      "ko": "흐름",
      "vi": "dòng chảy",
      "id": "aliran"
    },
    "pos": "noun",
    "ex": "流れについて考える"
  },
  {
    "id": "V0982",
    "w": "流れる",
    "r": "ながれる",
    "m": {
      "en": "to flow",
      "zh-TW": "流動",
      "zh-CN": "流动",
      "ko": "흐르다",
      "vi": "chảy",
      "id": "mengalir"
    },
    "pos": "verb-ichidan",
    "ex": "流れることにする"
  },
  {
    "id": "V0983",
    "w": "仲間",
    "r": "なかま",
    "m": {
      "en": "companion",
      "zh-TW": "夥伴",
      "zh-CN": "伙伴",
      "ko": "동료",
      "vi": "bạn bè",
      "id": "rekan"
    },
    "pos": "noun",
    "ex": "仲間について考える"
  },
  {
    "id": "V0984",
    "w": "眺め",
    "r": "ながめ",
    "m": {
      "en": "view",
      "zh-TW": "景色",
      "zh-CN": "景色",
      "ko": "경치",
      "vi": "cảnh",
      "id": "pemandangan"
    },
    "pos": "noun",
    "ex": "眺めについて考える"
  },
  {
    "id": "V0985",
    "w": "眺める",
    "r": "ながめる",
    "m": {
      "en": "to gaze",
      "zh-TW": "眺望",
      "zh-CN": "眺望",
      "ko": "바라보다",
      "vi": "ngắm",
      "id": "memandang"
    },
    "pos": "verb-ichidan",
    "ex": "眺めることにする"
  },
  {
    "id": "V0986",
    "w": "泣く",
    "r": "なく",
    "m": {
      "en": "to cry",
      "zh-TW": "哭",
      "zh-CN": "哭",
      "ko": "울다",
      "vi": "khóc",
      "id": "menangis"
    },
    "pos": "verb-godan",
    "ex": "悲しくて泣く"
  },
  {
    "id": "V0987",
    "w": "亡くなる",
    "r": "なくなる",
    "m": {
      "en": "to pass away",
      "zh-TW": "去世",
      "zh-CN": "去世",
      "ko": "돌아가시다",
      "vi": "qua đời",
      "id": "meninggal"
    },
    "pos": "verb-godan",
    "ex": "亡くなることにする"
  },
  {
    "id": "V0988",
    "w": "無くなる",
    "r": "なくなる",
    "m": {
      "en": "to disappear",
      "zh-TW": "消失",
      "zh-CN": "消失",
      "ko": "없어지다",
      "vi": "mất",
      "id": "menghilang"
    },
    "pos": "verb-godan",
    "ex": "無くなることにする"
  },
  {
    "id": "V0989",
    "w": "無くす",
    "r": "なくす",
    "m": {
      "en": "to lose",
      "zh-TW": "弄丟",
      "zh-CN": "弄丢",
      "ko": "잃다",
      "vi": "làm mất",
      "id": "kalah"
    },
    "pos": "verb-godan",
    "ex": "財布を無くす"
  },
  {
    "id": "V0990",
    "w": "投げる",
    "r": "なげる",
    "m": {
      "en": "to throw",
      "zh-TW": "投",
      "zh-CN": "投",
      "ko": "던지다",
      "vi": "ném",
      "id": "melempar"
    },
    "pos": "verb-godan",
    "ex": "投げることにする"
  },
  {
    "id": "V0991",
    "w": "情け",
    "r": "なさけ",
    "m": {
      "en": "sympathy",
      "zh-TW": "同情",
      "zh-CN": "同情",
      "ko": "동정",
      "vi": "thương",
      "id": "simpati"
    },
    "pos": "noun",
    "ex": "情けについて考える"
  },
  {
    "id": "V0992",
    "w": "謎",
    "r": "なぞ",
    "m": {
      "en": "mystery",
      "zh-TW": "謎",
      "zh-CN": "谜",
      "ko": "수수께끼",
      "vi": "bí ẩn",
      "id": "misteri"
    },
    "pos": "noun",
    "ex": "謎について考える"
  },
  {
    "id": "V0993",
    "w": "納得",
    "r": "なっとく",
    "m": {
      "en": "consent",
      "zh-TW": "理解",
      "zh-CN": "理解",
      "ko": "납득",
      "vi": "đồng ý",
      "id": "menerima"
    },
    "pos": "verb-godan",
    "ex": "納得ことにする"
  },
  {
    "id": "V0994",
    "w": "何故",
    "r": "なぜ",
    "m": {
      "en": "why",
      "zh-TW": "為什麼",
      "zh-CN": "为什么",
      "ko": "왜",
      "vi": "tại sao",
      "id": "mengapa"
    },
    "pos": "noun",
    "ex": "何故について考える"
  },
  {
    "id": "V0995",
    "w": "撫でる",
    "r": "なでる",
    "m": {
      "en": "to stroke",
      "zh-TW": "撫摸",
      "zh-CN": "抚摸",
      "ko": "쓰다듬다",
      "vi": "vuốt",
      "id": "mengelus"
    },
    "pos": "verb-godan",
    "ex": "撫でることにする"
  },
  {
    "id": "V0996",
    "w": "何となく",
    "r": "なんとなく",
    "m": {
      "en": "somehow",
      "zh-TW": "不知為何",
      "zh-CN": "不知为何",
      "ko": "왠지",
      "vi": "sao đó",
      "id": "entah bagaimana"
    },
    "pos": "verb-godan",
    "ex": "何となくことにする"
  },
  {
    "id": "V0997",
    "w": "何とか",
    "r": "なんとか",
    "m": {
      "en": "somehow",
      "zh-TW": "設法",
      "zh-CN": "设法",
      "ko": "어떻게든",
      "vi": "bằng cách nào đó",
      "id": "entah bagaimana"
    },
    "pos": "noun",
    "ex": "何とかについて考える"
  },
  {
    "id": "V0998",
    "w": "苦手",
    "r": "にがて",
    "m": {
      "en": "weak point",
      "zh-TW": "不擅長",
      "zh-CN": "不擅长",
      "ko": "서투른",
      "vi": "yếu",
      "id": "kelemahan"
    },
    "pos": "noun",
    "ex": "苦手について考える"
  },
  {
    "id": "V0999",
    "w": "逃げる",
    "r": "にげる",
    "m": {
      "en": "to escape",
      "zh-TW": "逃跑",
      "zh-CN": "逃跑",
      "ko": "도망치다",
      "vi": "trốn",
      "id": "melarikan diri"
    },
    "pos": "verb-godan",
    "ex": "危険から逃げる"
  },
  {
    "id": "V1000",
    "w": "握る",
    "r": "にぎる",
    "m": {
      "en": "to grip",
      "zh-TW": "握",
      "zh-CN": "握",
      "ko": "쥐다",
      "vi": "nắm",
      "id": "menggenggam"
    },
    "pos": "verb-godan",
    "ex": "握ることにする"
  },
  {
    "id": "V1001",
    "w": "濁る",
    "r": "にごる",
    "m": {
      "en": "to get muddy",
      "zh-TW": "變濁",
      "zh-CN": "变浊",
      "ko": "흐려지다",
      "vi": "đục",
      "id": "keruh"
    },
    "pos": "verb-godan",
    "ex": "濁ることにする"
  },
  {
    "id": "V1002",
    "w": "日常",
    "r": "にちじょう",
    "m": {
      "en": "everyday",
      "zh-TW": "日常",
      "zh-CN": "日常",
      "ko": "일상",
      "vi": "hàng ngày",
      "id": "sehari-hari"
    },
    "pos": "verb-godan",
    "ex": "日常ことにする"
  },
  {
    "id": "V1003",
    "w": "日程",
    "r": "にってい",
    "m": {
      "en": "schedule",
      "zh-TW": "日程",
      "zh-CN": "日程",
      "ko": "일정",
      "vi": "lịch trình",
      "id": "jadwal"
    },
    "pos": "i-adj",
    "ex": "とても日程と思う"
  },
  {
    "id": "V1004",
    "w": "日本",
    "r": "にほん",
    "m": {
      "en": "Japan",
      "zh-TW": "日本",
      "zh-CN": "日本",
      "ko": "일본",
      "vi": "Nhật Bản",
      "id": "Jepang"
    },
    "pos": "noun",
    "ex": "日本について考える"
  },
  {
    "id": "V1005",
    "w": "入院",
    "r": "にゅういん",
    "m": {
      "en": "hospitalization",
      "zh-TW": "住院",
      "zh-CN": "住院",
      "ko": "입원",
      "vi": "nhập viện",
      "id": "rawat inap"
    },
    "pos": "noun",
    "ex": "入院について考える"
  },
  {
    "id": "V1006",
    "w": "入学",
    "r": "にゅうがく",
    "m": {
      "en": "enrollment",
      "zh-TW": "入學",
      "zh-CN": "入学",
      "ko": "입학",
      "vi": "nhập học",
      "id": "masuk sekolah"
    },
    "pos": "verb-godan",
    "ex": "入学ことにする"
  },
  {
    "id": "V1007",
    "w": "入場",
    "r": "にゅうじょう",
    "m": {
      "en": "entrance",
      "zh-TW": "入場",
      "zh-CN": "入场",
      "ko": "입장",
      "vi": "vào",
      "id": "masuk"
    },
    "pos": "verb-godan",
    "ex": "入場ことにする"
  },
  {
    "id": "V1008",
    "w": "入力",
    "r": "にゅうりょく",
    "m": {
      "en": "input",
      "zh-TW": "輸入",
      "zh-CN": "输入",
      "ko": "입력",
      "vi": "nhập",
      "id": "masukan"
    },
    "pos": "verb-godan",
    "ex": "入力ことにする"
  },
  {
    "id": "V1009",
    "w": "似る",
    "r": "にる",
    "m": {
      "en": "to resemble",
      "zh-TW": "相似",
      "zh-CN": "相似",
      "ko": "닮다",
      "vi": "giống",
      "id": "mirip"
    },
    "pos": "verb-ichidan",
    "ex": "父に似ている"
  },
  {
    "id": "V1010",
    "w": "煮る",
    "r": "にる",
    "m": {
      "en": "to boil",
      "zh-TW": "煮",
      "zh-CN": "煮",
      "ko": "끓이다",
      "vi": "nấu",
      "id": "merebus"
    },
    "pos": "verb-ichidan",
    "ex": "煮ることにする"
  },
  {
    "id": "V1011",
    "w": "任意",
    "r": "にんい",
    "m": {
      "en": "optional",
      "zh-TW": "任意",
      "zh-CN": "任意",
      "ko": "임의",
      "vi": "tùy ý",
      "id": "opsional"
    },
    "pos": "i-adj",
    "ex": "とても任意と思う"
  },
  {
    "id": "V1012",
    "w": "人気",
    "r": "にんき",
    "m": {
      "en": "popularity",
      "zh-TW": "人氣",
      "zh-CN": "人气",
      "ko": "인기",
      "vi": "phổ biến",
      "id": "populer"
    },
    "pos": "noun",
    "ex": "人気について考える"
  },
  {
    "id": "V1013",
    "w": "認識",
    "r": "にんしき",
    "m": {
      "en": "recognition",
      "zh-TW": "認識",
      "zh-CN": "认识",
      "ko": "인식",
      "vi": "nhận thức",
      "id": "pengenalan"
    },
    "pos": "noun",
    "ex": "認識について考える",
    "syn": [
      "把握する",
      "理解する",
      "自覚する"
    ]
  },
  {
    "id": "V1014",
    "w": "認定",
    "r": "にんてい",
    "m": {
      "en": "certification",
      "zh-TW": "認定",
      "zh-CN": "认定",
      "ko": "인정",
      "vi": "chứng nhận",
      "id": "sertifikasi"
    },
    "pos": "i-adj",
    "ex": "とても認定と思う"
  },
  {
    "id": "V1015",
    "w": "人間",
    "r": "にんげん",
    "m": {
      "en": "human",
      "zh-TW": "人類",
      "zh-CN": "人类",
      "ko": "인간",
      "vi": "con người",
      "id": "manusia"
    },
    "pos": "noun",
    "ex": "人間について考える"
  },
  {
    "id": "V1016",
    "w": "抜く",
    "r": "ぬく",
    "m": {
      "en": "to pull out",
      "zh-TW": "拔",
      "zh-CN": "拔",
      "ko": "빼다",
      "vi": "rút",
      "id": "mencabut"
    },
    "pos": "verb-godan",
    "ex": "歯を抜く"
  },
  {
    "id": "V1017",
    "w": "抜ける",
    "r": "ぬける",
    "m": {
      "en": "to come out",
      "zh-TW": "掉落",
      "zh-CN": "掉落",
      "ko": "빠지다",
      "vi": "rụng",
      "id": "terlepas"
    },
    "pos": "verb-ichidan",
    "ex": "抜けることにする"
  },
  {
    "id": "V1018",
    "w": "盗む",
    "r": "ぬすむ",
    "m": {
      "en": "to steal",
      "zh-TW": "偷",
      "zh-CN": "偷",
      "ko": "훔치다",
      "vi": "ăn cắp",
      "id": "mencuri"
    },
    "pos": "verb-godan",
    "ex": "盗むことにする"
  },
  {
    "id": "V1019",
    "w": "濡れる",
    "r": "ぬれる",
    "m": {
      "en": "to get wet",
      "zh-TW": "濕",
      "zh-CN": "湿",
      "ko": "젖다",
      "vi": "ướt",
      "id": "basah"
    },
    "pos": "verb-ichidan",
    "ex": "雨に濡れる"
  },
  {
    "id": "V1020",
    "w": "塗る",
    "r": "ぬる",
    "m": {
      "en": "to paint",
      "zh-TW": "塗",
      "zh-CN": "涂",
      "ko": "칠하다",
      "vi": "sơn",
      "id": "melukis"
    },
    "pos": "verb-godan",
    "ex": "塗ることにする"
  },
  {
    "id": "V1021",
    "w": "値",
    "r": "ね",
    "m": {
      "en": "value",
      "zh-TW": "價值",
      "zh-CN": "价值",
      "ko": "값",
      "vi": "giá trị",
      "id": "nilai"
    },
    "pos": "noun",
    "ex": "値について考える"
  },
  {
    "id": "V1022",
    "w": "願い",
    "r": "ねがい",
    "m": {
      "en": "wish",
      "zh-TW": "願望",
      "zh-CN": "愿望",
      "ko": "소원",
      "vi": "nguyện vọng",
      "id": "harapan"
    },
    "pos": "i-adj",
    "ex": "とても願いと思う"
  },
  {
    "id": "V1023",
    "w": "願う",
    "r": "ねがう",
    "m": {
      "en": "to wish",
      "zh-TW": "願望",
      "zh-CN": "愿望",
      "ko": "바라다",
      "vi": "mong muốn",
      "id": "berharap"
    },
    "pos": "verb-godan",
    "ex": "幸せを願う"
  },
  {
    "id": "V1024",
    "w": "熱",
    "r": "ねつ",
    "m": {
      "en": "heat",
      "zh-TW": "熱",
      "zh-CN": "热",
      "ko": "열",
      "vi": "nhiệt",
      "id": "panas"
    },
    "pos": "verb-godan",
    "ex": "熱ことにする"
  },
  {
    "id": "V1025",
    "w": "熱心",
    "r": "ねっしん",
    "m": {
      "en": "enthusiastic",
      "zh-TW": "熱心",
      "zh-CN": "热心",
      "ko": "열심",
      "vi": "nhiệt tình",
      "id": "antusias"
    },
    "pos": "noun",
    "ex": "熱心について考える"
  },
  {
    "id": "V1026",
    "w": "値段",
    "r": "ねだん",
    "m": {
      "en": "price",
      "zh-TW": "價格",
      "zh-CN": "价格",
      "ko": "가격",
      "vi": "giá",
      "id": "harga"
    },
    "pos": "noun",
    "ex": "値段について考える"
  },
  {
    "id": "V1027",
    "w": "眠い",
    "r": "ねむい",
    "m": {
      "en": "sleepy",
      "zh-TW": "困",
      "zh-CN": "困",
      "ko": "졸린",
      "vi": "buồn ngủ",
      "id": "mengantuk"
    },
    "pos": "i-adj",
    "ex": "とても眠いと思う"
  },
  {
    "id": "V1028",
    "w": "眠る",
    "r": "ねむる",
    "m": {
      "en": "to sleep",
      "zh-TW": "睡覺",
      "zh-CN": "睡觉",
      "ko": "잠들다",
      "vi": "ngủ",
      "id": "tidur"
    },
    "pos": "verb-godan",
    "ex": "眠ることにする"
  },
  {
    "id": "V1029",
    "w": "狙い",
    "r": "ねらい",
    "m": {
      "en": "aim",
      "zh-TW": "目標",
      "zh-CN": "目标",
      "ko": "노림",
      "vi": "mục tiêu",
      "id": "tujuan"
    },
    "pos": "i-adj",
    "ex": "とても狙いと思う"
  },
  {
    "id": "V1030",
    "w": "狙う",
    "r": "ねらう",
    "m": {
      "en": "to aim",
      "zh-TW": "瞄準",
      "zh-CN": "瞄准",
      "ko": "노리다",
      "vi": "nhắm",
      "id": "membidik"
    },
    "pos": "verb-godan",
    "ex": "狙うことにする"
  },
  {
    "id": "V1031",
    "w": "年間",
    "r": "ねんかん",
    "m": {
      "en": "year",
      "zh-TW": "年間",
      "zh-CN": "年间",
      "ko": "연간",
      "vi": "trong năm",
      "id": "tahun"
    },
    "pos": "noun",
    "ex": "年間について考える"
  },
  {
    "id": "V1032",
    "w": "年代",
    "r": "ねんだい",
    "m": {
      "en": "era",
      "zh-TW": "年代",
      "zh-CN": "年代",
      "ko": "연대",
      "vi": "thập niên",
      "id": "era"
    },
    "pos": "i-adj",
    "ex": "とても年代と思う"
  },
  {
    "id": "V1033",
    "w": "念",
    "r": "ねん",
    "m": {
      "en": "thought",
      "zh-TW": "念",
      "zh-CN": "念",
      "ko": "염",
      "vi": "niệm",
      "id": "pikiran"
    },
    "pos": "noun",
    "ex": "念について考える"
  },
  {
    "id": "V1034",
    "w": "年齢",
    "r": "ねんれい",
    "m": {
      "en": "age",
      "zh-TW": "年齡",
      "zh-CN": "年龄",
      "ko": "연령",
      "vi": "tuổi",
      "id": "usia"
    },
    "pos": "i-adj",
    "ex": "とても年齢と思う"
  },
  {
    "id": "V1035",
    "w": "能力",
    "r": "のうりょく",
    "m": {
      "en": "ability",
      "zh-TW": "能力",
      "zh-CN": "能力",
      "ko": "능력",
      "vi": "năng lực",
      "id": "kemampuan"
    },
    "pos": "verb-godan",
    "ex": "高い能力を持つ",
    "syn": [
      "才能",
      "実力",
      "スキル"
    ]
  },
  {
    "id": "V1036",
    "w": "農業",
    "r": "のうぎょう",
    "m": {
      "en": "agriculture",
      "zh-TW": "農業",
      "zh-CN": "农业",
      "ko": "농업",
      "vi": "nông nghiệp",
      "id": "pertanian"
    },
    "pos": "verb-godan",
    "ex": "農業ことにする"
  },
  {
    "id": "V1037",
    "w": "農村",
    "r": "のうそん",
    "m": {
      "en": "farm village",
      "zh-TW": "農村",
      "zh-CN": "农村",
      "ko": "농촌",
      "vi": "nông thôn",
      "id": "desa"
    },
    "pos": "noun",
    "ex": "農村について考える"
  },
  {
    "id": "V1038",
    "w": "残す",
    "r": "のこす",
    "m": {
      "en": "to leave",
      "zh-TW": "留下",
      "zh-CN": "留下",
      "ko": "남기다",
      "vi": "để lại",
      "id": "pergi"
    },
    "pos": "verb-godan",
    "ex": "残すことにする"
  },
  {
    "id": "V1039",
    "w": "残る",
    "r": "のこる",
    "m": {
      "en": "to remain",
      "zh-TW": "剩餘",
      "zh-CN": "剩余",
      "ko": "남다",
      "vi": "còn lại",
      "id": "tersisa"
    },
    "pos": "verb-godan",
    "ex": "印象に残る"
  },
  {
    "id": "V1040",
    "w": "載せる",
    "r": "のせる",
    "m": {
      "en": "to load",
      "zh-TW": "放上",
      "zh-CN": "放上",
      "ko": "싣다",
      "vi": "đặt lên",
      "id": "menaruh"
    },
    "pos": "verb-ichidan",
    "ex": "載せることにする"
  },
  {
    "id": "V1041",
    "w": "望み",
    "r": "のぞみ",
    "m": {
      "en": "hope",
      "zh-TW": "希望",
      "zh-CN": "希望",
      "ko": "바람",
      "vi": "hy vọng",
      "id": "harapan"
    },
    "pos": "noun",
    "ex": "望みについて考える"
  },
  {
    "id": "V1042",
    "w": "望む",
    "r": "のぞむ",
    "m": {
      "en": "to hope",
      "zh-TW": "希望",
      "zh-CN": "希望",
      "ko": "바라다",
      "vi": "hy vọng",
      "id": "berharap"
    },
    "pos": "verb-godan",
    "ex": "望むことにする"
  },
  {
    "id": "V1043",
    "w": "覗く",
    "r": "のぞく",
    "m": {
      "en": "to peek",
      "zh-TW": "窺視",
      "zh-CN": "窥视",
      "ko": "엿보다",
      "vi": "nhìn trộm",
      "id": "mengintip"
    },
    "pos": "verb-godan",
    "ex": "覗くことにする"
  },
  {
    "id": "V1044",
    "w": "伸ばす",
    "r": "のばす",
    "m": {
      "en": "to extend",
      "zh-TW": "伸展",
      "zh-CN": "伸展",
      "ko": "늘리다",
      "vi": "kéo dài",
      "id": "memperpanjang"
    },
    "pos": "verb-godan",
    "ex": "伸ばすことにする"
  },
  {
    "id": "V1045",
    "w": "伸びる",
    "r": "のびる",
    "m": {
      "en": "to extend",
      "zh-TW": "伸展",
      "zh-CN": "伸展",
      "ko": "늘어나다",
      "vi": "duỗi ra",
      "id": "memanjang"
    },
    "pos": "verb-godan",
    "ex": "伸びることにする"
  },
  {
    "id": "V1046",
    "w": "述べる",
    "r": "のべる",
    "m": {
      "en": "to state",
      "zh-TW": "敘述",
      "zh-CN": "叙述",
      "ko": "말하다",
      "vi": "trình bày",
      "id": "menyatakan"
    },
    "pos": "verb-godan",
    "ex": "述べることにする"
  },
  {
    "id": "V1047",
    "w": "飲み込む",
    "r": "のみこむ",
    "m": {
      "en": "to swallow",
      "zh-TW": "吞下",
      "zh-CN": "吞下",
      "ko": "삼키다",
      "vi": "nuốt",
      "id": "menelan"
    },
    "pos": "verb-godan",
    "ex": "飲み込むことにする"
  },
  {
    "id": "V1048",
    "w": "乗り換え",
    "r": "のりかえ",
    "m": {
      "en": "transfer",
      "zh-TW": "換乘",
      "zh-CN": "换乘",
      "ko": "환승",
      "vi": "chuyển",
      "id": "transit"
    },
    "pos": "noun",
    "ex": "乗り換えについて考える"
  },
  {
    "id": "V1049",
    "w": "乗り換える",
    "r": "のりかえる",
    "m": {
      "en": "to transfer",
      "zh-TW": "換乘",
      "zh-CN": "换乘",
      "ko": "갈아타다",
      "vi": "đổi",
      "id": "berganti"
    },
    "pos": "verb-ichidan",
    "ex": "乗り換えることにする"
  },
  {
    "id": "V1050",
    "w": "乗り物",
    "r": "のりもの",
    "m": {
      "en": "vehicle",
      "zh-TW": "交通工具",
      "zh-CN": "交通工具",
      "ko": "탈것",
      "vi": "phương tiện",
      "id": "kendaraan"
    },
    "pos": "noun",
    "ex": "乗り物について考える"
  },
  {
    "id": "V1051",
    "w": "場合",
    "r": "ばあい",
    "m": {
      "en": "case",
      "zh-TW": "情況",
      "zh-CN": "情况",
      "ko": "경우",
      "vi": "trường hợp",
      "id": "kasus"
    },
    "pos": "i-adj",
    "ex": "とても場合と思う"
  },
  {
    "id": "V1052",
    "w": "配達",
    "r": "はいたつ",
    "m": {
      "en": "delivery",
      "zh-TW": "配送",
      "zh-CN": "配送",
      "ko": "배달",
      "vi": "giao hàng",
      "id": "pengiriman"
    },
    "pos": "verb-godan",
    "ex": "配達ことにする"
  },
  {
    "id": "V1053",
    "w": "背景",
    "r": "はいけい",
    "m": {
      "en": "background",
      "zh-TW": "背景",
      "zh-CN": "背景",
      "ko": "배경",
      "vi": "nền",
      "id": "latar belakang"
    },
    "pos": "i-adj",
    "ex": "とても背景と思う"
  },
  {
    "id": "V1054",
    "w": "廃止",
    "r": "はいし",
    "m": {
      "en": "abolition",
      "zh-TW": "廢止",
      "zh-CN": "废止",
      "ko": "폐지",
      "vi": "bãi bỏ",
      "id": "penghapusan"
    },
    "pos": "noun",
    "ex": "廃止について考える"
  },
  {
    "id": "V1055",
    "w": "配置",
    "r": "はいち",
    "m": {
      "en": "arrangement",
      "zh-TW": "配置",
      "zh-CN": "配置",
      "ko": "배치",
      "vi": "bố trí",
      "id": "penempatan"
    },
    "pos": "noun",
    "ex": "配置について考える"
  },
  {
    "id": "V1056",
    "w": "排除",
    "r": "はいじょ",
    "m": {
      "en": "exclusion",
      "zh-TW": "排除",
      "zh-CN": "排除",
      "ko": "배제",
      "vi": "loại trừ",
      "id": "pengecualian"
    },
    "pos": "noun",
    "ex": "排除について考える"
  },
  {
    "id": "V1057",
    "w": "配布",
    "r": "はいふ",
    "m": {
      "en": "distribution",
      "zh-TW": "分發",
      "zh-CN": "分发",
      "ko": "배포",
      "vi": "phân phát",
      "id": "distribusi"
    },
    "pos": "noun",
    "ex": "配布について考える"
  },
  {
    "id": "V1058",
    "w": "配慮",
    "r": "はいりょ",
    "m": {
      "en": "consideration",
      "zh-TW": "考慮",
      "zh-CN": "考虑",
      "ko": "배려",
      "vi": "quan tâm",
      "id": "pertimbangan"
    },
    "pos": "noun",
    "ex": "配慮について考える"
  },
  {
    "id": "V1059",
    "w": "入る",
    "r": "はいる",
    "m": {
      "en": "to enter",
      "zh-TW": "進入",
      "zh-CN": "进入",
      "ko": "들어가다",
      "vi": "vào",
      "id": "masuk"
    },
    "pos": "verb-ichidan",
    "ex": "部屋に入る"
  },
  {
    "id": "V1060",
    "w": "生える",
    "r": "はえる",
    "m": {
      "en": "to grow",
      "zh-TW": "生長",
      "zh-CN": "生长",
      "ko": "나다",
      "vi": "mọc",
      "id": "tumbuh"
    },
    "pos": "verb-ichidan",
    "ex": "生えることにする"
  },
  {
    "id": "V1061",
    "w": "測る",
    "r": "はかる",
    "m": {
      "en": "to measure",
      "zh-TW": "測量",
      "zh-CN": "测量",
      "ko": "재다",
      "vi": "đo",
      "id": "mengukur"
    },
    "pos": "verb-godan",
    "ex": "測ることにする"
  },
  {
    "id": "V1062",
    "w": "図る",
    "r": "はかる",
    "m": {
      "en": "to plan",
      "zh-TW": "謀劃",
      "zh-CN": "谋划",
      "ko": "꾀하다",
      "vi": "mưu",
      "id": "rencana"
    },
    "pos": "verb-godan",
    "ex": "図ることにする"
  },
  {
    "id": "V1063",
    "w": "計る",
    "r": "はかる",
    "m": {
      "en": "to weigh",
      "zh-TW": "稱量",
      "zh-CN": "称量",
      "ko": "달다",
      "vi": "cân",
      "id": "menimbang"
    },
    "pos": "verb-godan",
    "ex": "計ることにする"
  },
  {
    "id": "V1064",
    "w": "博士",
    "r": "はかせ",
    "m": {
      "en": "doctor",
      "zh-TW": "博士",
      "zh-CN": "博士",
      "ko": "박사",
      "vi": "tiến sĩ",
      "id": "dokter"
    },
    "pos": "noun",
    "ex": "博士について考える"
  },
  {
    "id": "V1065",
    "w": "破壊",
    "r": "はかい",
    "m": {
      "en": "destruction",
      "zh-TW": "破壞",
      "zh-CN": "破坏",
      "ko": "파괴",
      "vi": "phá hủy",
      "id": "penghancuran"
    },
    "pos": "i-adj",
    "ex": "とても破壊と思う"
  },
  {
    "id": "V1066",
    "w": "吐く",
    "r": "はく",
    "m": {
      "en": "to vomit",
      "zh-TW": "吐",
      "zh-CN": "吐",
      "ko": "토하다",
      "vi": "nôn",
      "id": "muntah"
    },
    "pos": "verb-godan",
    "ex": "吐くことにする"
  },
  {
    "id": "V1067",
    "w": "掃く",
    "r": "はく",
    "m": {
      "en": "to sweep",
      "zh-TW": "掃",
      "zh-CN": "扫",
      "ko": "쓸다",
      "vi": "quét",
      "id": "menyapu"
    },
    "pos": "verb-godan",
    "ex": "掃くことにする"
  },
  {
    "id": "V1068",
    "w": "白",
    "r": "はく",
    "m": {
      "en": "white",
      "zh-TW": "白",
      "zh-CN": "白",
      "ko": "흰",
      "vi": "trắng",
      "id": "putih"
    },
    "pos": "verb-godan",
    "ex": "白ことにする"
  },
  {
    "id": "V1069",
    "w": "爆発",
    "r": "ばくはつ",
    "m": {
      "en": "explosion",
      "zh-TW": "爆炸",
      "zh-CN": "爆炸",
      "ko": "폭발",
      "vi": "nổ",
      "id": "ledakan"
    },
    "pos": "verb-godan",
    "ex": "爆発ことにする"
  },
  {
    "id": "V1070",
    "w": "励ます",
    "r": "はげます",
    "m": {
      "en": "to encourage",
      "zh-TW": "鼓勵",
      "zh-CN": "鼓励",
      "ko": "격려하다",
      "vi": "khích lệ",
      "id": "menyemangati"
    },
    "pos": "verb-godan",
    "ex": "励ますことにする"
  },
  {
    "id": "V1071",
    "w": "禿げる",
    "r": "はげる",
    "m": {
      "en": "to go bald",
      "zh-TW": "禿",
      "zh-CN": "秃",
      "ko": "벗겨지다",
      "vi": "hói",
      "id": "botak"
    },
    "pos": "verb-godan",
    "ex": "禿げることにする"
  },
  {
    "id": "V1072",
    "w": "激しい",
    "r": "はげしい",
    "m": {
      "en": "intense",
      "zh-TW": "激烈",
      "zh-CN": "激烈",
      "ko": "격렬한",
      "vi": "dữ dội",
      "id": "hebat"
    },
    "pos": "i-adj",
    "ex": "とても激しいと思う"
  },
  {
    "id": "V1073",
    "w": "箱",
    "r": "はこ",
    "m": {
      "en": "box",
      "zh-TW": "箱子",
      "zh-CN": "箱子",
      "ko": "상자",
      "vi": "hộp",
      "id": "kotak"
    },
    "pos": "noun",
    "ex": "箱について考える"
  },
  {
    "id": "V1074",
    "w": "運ぶ",
    "r": "はこぶ",
    "m": {
      "en": "to carry",
      "zh-TW": "搬運",
      "zh-CN": "搬运",
      "ko": "옮기다",
      "vi": "mang",
      "id": "membawa"
    },
    "pos": "verb-godan",
    "ex": "運ぶことにする"
  },
  {
    "id": "V1075",
    "w": "始まり",
    "r": "はじまり",
    "m": {
      "en": "beginning",
      "zh-TW": "開始",
      "zh-CN": "开始",
      "ko": "시작",
      "vi": "bắt đầu",
      "id": "permulaan"
    },
    "pos": "noun",
    "ex": "始まりについて考える"
  },
  {
    "id": "V1076",
    "w": "始まる",
    "r": "はじまる",
    "m": {
      "en": "to begin",
      "zh-TW": "開始",
      "zh-CN": "开始",
      "ko": "시작되다",
      "vi": "bắt đầu",
      "id": "mulai"
    },
    "pos": "verb-godan",
    "ex": "授業が始まる"
  },
  {
    "id": "V1077",
    "w": "始める",
    "r": "はじめる",
    "m": {
      "en": "to start",
      "zh-TW": "開始",
      "zh-CN": "开始",
      "ko": "시작하다",
      "vi": "bắt đầu",
      "id": "memulai"
    },
    "pos": "verb-ichidan",
    "ex": "始めることにする"
  },
  {
    "id": "V1078",
    "w": "場所",
    "r": "ばしょ",
    "m": {
      "en": "place",
      "zh-TW": "地方",
      "zh-CN": "地方",
      "ko": "장소",
      "vi": "nơi",
      "id": "tempat"
    },
    "pos": "noun",
    "ex": "場所について考える"
  },
  {
    "id": "V1079",
    "w": "柱",
    "r": "はしら",
    "m": {
      "en": "pillar",
      "zh-TW": "柱子",
      "zh-CN": "柱子",
      "ko": "기둥",
      "vi": "cột",
      "id": "pilar"
    },
    "pos": "noun",
    "ex": "柱について考える"
  },
  {
    "id": "V1080",
    "w": "走る",
    "r": "はしる",
    "m": {
      "en": "to run",
      "zh-TW": "跑",
      "zh-CN": "跑",
      "ko": "달리다",
      "vi": "chạy",
      "id": "berlari"
    },
    "pos": "verb-ichidan",
    "ex": "公園を走る"
  },
  {
    "id": "V1081",
    "w": "恥ずかしい",
    "r": "はずかしい",
    "m": {
      "en": "embarrassing",
      "zh-TW": "害羞",
      "zh-CN": "害羞",
      "ko": "부끄러운",
      "vi": "xấu hổ",
      "id": "malu"
    },
    "pos": "i-adj",
    "ex": "失敗して恥ずかしい",
    "syn": [
      "照れる",
      "気まずい",
      "面目ない"
    ]
  },
  {
    "id": "V1082",
    "w": "外す",
    "r": "はずす",
    "m": {
      "en": "to remove",
      "zh-TW": "取下",
      "zh-CN": "取下",
      "ko": "빼다",
      "vi": "tháo",
      "id": "menghapus"
    },
    "pos": "verb-godan",
    "ex": "外すことにする"
  },
  {
    "id": "V1083",
    "w": "外れる",
    "r": "はずれる",
    "m": {
      "en": "to be off",
      "zh-TW": "脫落",
      "zh-CN": "脱落",
      "ko": "빗나가다",
      "vi": "tuột",
      "id": "meleset"
    },
    "pos": "verb-ichidan",
    "ex": "外れることにする"
  },
  {
    "id": "V1084",
    "w": "派遣",
    "r": "はけん",
    "m": {
      "en": "dispatch",
      "zh-TW": "派遣",
      "zh-CN": "派遣",
      "ko": "파견",
      "vi": "cử",
      "id": "pengiriman"
    },
    "pos": "noun",
    "ex": "派遣について考える"
  },
  {
    "id": "V1085",
    "w": "パターン",
    "r": "ぱたーん",
    "m": {
      "en": "pattern",
      "zh-TW": "模式",
      "zh-CN": "模式",
      "ko": "패턴",
      "vi": "mẫu",
      "id": "pola"
    },
    "pos": "noun",
    "ex": "パターンについて考える"
  },
  {
    "id": "V1086",
    "w": "発揮",
    "r": "はっき",
    "m": {
      "en": "display",
      "zh-TW": "發揮",
      "zh-CN": "发挥",
      "ko": "발휘",
      "vi": "phát huy",
      "id": "menunjukkan"
    },
    "pos": "noun",
    "ex": "発揮について考える"
  },
  {
    "id": "V1087",
    "w": "発見",
    "r": "はっけん",
    "m": {
      "en": "discovery",
      "zh-TW": "發現",
      "zh-CN": "发现",
      "ko": "발견",
      "vi": "phát hiện",
      "id": "penemuan"
    },
    "pos": "noun",
    "ex": "発見について考える",
    "syn": [
      "見つける",
      "見出す",
      "発掘する"
    ]
  },
  {
    "id": "V1088",
    "w": "発言",
    "r": "はつげん",
    "m": {
      "en": "statement",
      "zh-TW": "發言",
      "zh-CN": "发言",
      "ko": "발언",
      "vi": "phát biểu",
      "id": "pernyataan"
    },
    "pos": "noun",
    "ex": "発言について考える"
  },
  {
    "id": "V1089",
    "w": "発行",
    "r": "はっこう",
    "m": {
      "en": "issue",
      "zh-TW": "發行",
      "zh-CN": "发行",
      "ko": "발행",
      "vi": "phát hành",
      "id": "penerbitan"
    },
    "pos": "verb-godan",
    "ex": "発行ことにする"
  },
  {
    "id": "V1090",
    "w": "発生",
    "r": "はっせい",
    "m": {
      "en": "occurrence",
      "zh-TW": "發生",
      "zh-CN": "发生",
      "ko": "발생",
      "vi": "xảy ra",
      "id": "kejadian"
    },
    "pos": "i-adj",
    "ex": "とても発生と思う"
  },
  {
    "id": "V1091",
    "w": "発想",
    "r": "はっそう",
    "m": {
      "en": "idea",
      "zh-TW": "構思",
      "zh-CN": "构思",
      "ko": "발상",
      "vi": "ý tưởng",
      "id": "ide"
    },
    "pos": "verb-godan",
    "ex": "発想ことにする"
  },
  {
    "id": "V1092",
    "w": "発達",
    "r": "はったつ",
    "m": {
      "en": "development",
      "zh-TW": "發達",
      "zh-CN": "发达",
      "ko": "발달",
      "vi": "phát triển",
      "id": "perkembangan"
    },
    "pos": "verb-godan",
    "ex": "発達ことにする"
  },
  {
    "id": "V1093",
    "w": "発展",
    "r": "はってん",
    "m": {
      "en": "development",
      "zh-TW": "發展",
      "zh-CN": "发展",
      "ko": "발전",
      "vi": "phát triển",
      "id": "kemajuan"
    },
    "pos": "noun",
    "ex": "発展について考える"
  },
  {
    "id": "V1094",
    "w": "発売",
    "r": "はつばい",
    "m": {
      "en": "sale",
      "zh-TW": "發售",
      "zh-CN": "发售",
      "ko": "발매",
      "vi": "bán",
      "id": "penjualan"
    },
    "pos": "i-adj",
    "ex": "とても発売と思う"
  },
  {
    "id": "V1095",
    "w": "発表",
    "r": "はっぴょう",
    "m": {
      "en": "announcement",
      "zh-TW": "發表",
      "zh-CN": "发表",
      "ko": "발표",
      "vi": "công bố",
      "id": "pengumuman"
    },
    "pos": "verb-godan",
    "ex": "発表ことにする",
    "syn": [
      "公表する",
      "発言する",
      "報告する"
    ]
  },
  {
    "id": "V1096",
    "w": "発明",
    "r": "はつめい",
    "m": {
      "en": "invention",
      "zh-TW": "發明",
      "zh-CN": "发明",
      "ko": "발명",
      "vi": "phát minh",
      "id": "penemuan"
    },
    "pos": "i-adj",
    "ex": "とても発明と思う",
    "syn": [
      "考案する",
      "創造する",
      "発見する"
    ]
  },
  {
    "id": "V1097",
    "w": "話し合い",
    "r": "はなしあい",
    "m": {
      "en": "discussion",
      "zh-TW": "討論",
      "zh-CN": "讨论",
      "ko": "대화",
      "vi": "thảo luận",
      "id": "diskusi"
    },
    "pos": "i-adj",
    "ex": "とても話し合いと思う"
  },
  {
    "id": "V1098",
    "w": "話し合う",
    "r": "はなしあう",
    "m": {
      "en": "to discuss",
      "zh-TW": "討論",
      "zh-CN": "讨论",
      "ko": "이야기하다",
      "vi": "bàn bạc",
      "id": "berdiskusi"
    },
    "pos": "verb-godan",
    "ex": "話し合うことにする"
  },
  {
    "id": "V1099",
    "w": "話しかける",
    "r": "はなしかける",
    "m": {
      "en": "to speak to",
      "zh-TW": "搭話",
      "zh-CN": "搭话",
      "ko": "말을걸다",
      "vi": "bắt chuyện",
      "id": "menyapa"
    },
    "pos": "verb-ichidan",
    "ex": "話しかけることにする"
  },
  {
    "id": "V1100",
    "w": "離す",
    "r": "はなす",
    "m": {
      "en": "to separate",
      "zh-TW": "分開",
      "zh-CN": "分开",
      "ko": "떼다",
      "vi": "tách",
      "id": "memisahkan"
    },
    "pos": "verb-godan",
    "ex": "離すことにする"
  },
  {
    "id": "V1101",
    "w": "離れる",
    "r": "はなれる",
    "m": {
      "en": "to leave",
      "zh-TW": "離開",
      "zh-CN": "离开",
      "ko": "떨어지다",
      "vi": "rời",
      "id": "pergi"
    },
    "pos": "verb-ichidan",
    "ex": "離れることにする"
  },
  {
    "id": "V1102",
    "w": "跳ねる",
    "r": "はねる",
    "m": {
      "en": "to jump",
      "zh-TW": "跳",
      "zh-CN": "跳",
      "ko": "튀다",
      "vi": "nhảy",
      "id": "melompat"
    },
    "pos": "verb-ichidan",
    "ex": "跳ねることにする"
  },
  {
    "id": "V1103",
    "w": "幅",
    "r": "はば",
    "m": {
      "en": "width",
      "zh-TW": "寬度",
      "zh-CN": "宽度",
      "ko": "폭",
      "vi": "chiều rộng",
      "id": "lebar"
    },
    "pos": "noun",
    "ex": "幅について考える"
  },
  {
    "id": "V1104",
    "w": "省く",
    "r": "はぶく",
    "m": {
      "en": "to omit",
      "zh-TW": "省略",
      "zh-CN": "省略",
      "ko": "생략하다",
      "vi": "bỏ qua",
      "id": "menghilangkan"
    },
    "pos": "verb-godan",
    "ex": "省くことにする"
  },
  {
    "id": "V1105",
    "w": "浜",
    "r": "はま",
    "m": {
      "en": "beach",
      "zh-TW": "海灘",
      "zh-CN": "海滩",
      "ko": "해변",
      "vi": "bãi biển",
      "id": "pantai"
    },
    "pos": "noun",
    "ex": "浜について考える"
  },
  {
    "id": "V1106",
    "w": "嵌める",
    "r": "はめる",
    "m": {
      "en": "to fit",
      "zh-TW": "嵌入",
      "zh-CN": "嵌入",
      "ko": "끼우다",
      "vi": "lắp",
      "id": "memasang"
    },
    "pos": "verb-ichidan",
    "ex": "嵌めることにする"
  },
  {
    "id": "V1107",
    "w": "早い",
    "r": "はやい",
    "m": {
      "en": "early",
      "zh-TW": "早",
      "zh-CN": "早",
      "ko": "이른",
      "vi": "sớm",
      "id": "awal"
    },
    "pos": "i-adj",
    "ex": "朝早く起きる"
  },
  {
    "id": "V1108",
    "w": "速い",
    "r": "はやい",
    "m": {
      "en": "fast",
      "zh-TW": "快",
      "zh-CN": "快",
      "ko": "빠른",
      "vi": "nhanh",
      "id": "cepat"
    },
    "pos": "i-adj",
    "ex": "走るのが速い"
  },
  {
    "id": "V1109",
    "w": "流行",
    "r": "りゅうこう",
    "m": {
      "en": "fashion",
      "zh-TW": "流行",
      "zh-CN": "流行",
      "ko": "유행",
      "vi": "thịnh hành",
      "id": "tren"
    },
    "pos": "verb-godan",
    "ex": "流行ことにする"
  },
  {
    "id": "V1110",
    "w": "払う",
    "r": "はらう",
    "m": {
      "en": "to pay",
      "zh-TW": "支付",
      "zh-CN": "支付",
      "ko": "지불하다",
      "vi": "trả",
      "id": "membayar"
    },
    "pos": "verb-godan",
    "ex": "お金を払う"
  },
  {
    "id": "V1111",
    "w": "張る",
    "r": "はる",
    "m": {
      "en": "to stretch",
      "zh-TW": "張",
      "zh-CN": "张",
      "ko": "펴다",
      "vi": "căng",
      "id": "meregang"
    },
    "pos": "verb-godan",
    "ex": "張ることにする"
  },
  {
    "id": "V1112",
    "w": "貼る",
    "r": "はる",
    "m": {
      "en": "to paste",
      "zh-TW": "貼",
      "zh-CN": "贴",
      "ko": "붙이다",
      "vi": "dán",
      "id": "menempel"
    },
    "pos": "verb-godan",
    "ex": "貼ることにする"
  },
  {
    "id": "V1113",
    "w": "晴れ",
    "r": "はれ",
    "m": {
      "en": "sunny",
      "zh-TW": "晴天",
      "zh-CN": "晴天",
      "ko": "맑음",
      "vi": "nắng",
      "id": "cerah"
    },
    "pos": "noun",
    "ex": "晴れについて考える"
  },
  {
    "id": "V1114",
    "w": "晴れる",
    "r": "はれる",
    "m": {
      "en": "to clear up",
      "zh-TW": "放晴",
      "zh-CN": "放晴",
      "ko": "개다",
      "vi": "tạnh",
      "id": "cerah"
    },
    "pos": "verb-ichidan",
    "ex": "明日は晴れるだろう"
  },
  {
    "id": "V1115",
    "w": "範囲",
    "r": "はんい",
    "m": {
      "en": "range",
      "zh-TW": "範圍",
      "zh-CN": "范围",
      "ko": "범위",
      "vi": "phạm vi",
      "id": "jangkauan"
    },
    "pos": "i-adj",
    "ex": "とても範囲と思う"
  },
  {
    "id": "V1116",
    "w": "反映",
    "r": "はんえい",
    "m": {
      "en": "reflection",
      "zh-TW": "反映",
      "zh-CN": "反映",
      "ko": "반영",
      "vi": "phản ánh",
      "id": "refleksi"
    },
    "pos": "i-adj",
    "ex": "とても反映と思う"
  },
  {
    "id": "V1117",
    "w": "判断",
    "r": "はんだん",
    "m": {
      "en": "judgment",
      "zh-TW": "判斷",
      "zh-CN": "判断",
      "ko": "판단",
      "vi": "phán đoán",
      "id": "penilaian"
    },
    "pos": "noun",
    "ex": "正しい判断をする",
    "syn": [
      "決定",
      "結論",
      "評価"
    ]
  },
  {
    "id": "V1118",
    "w": "反対",
    "r": "はんたい",
    "m": {
      "en": "opposition",
      "zh-TW": "反對",
      "zh-CN": "反对",
      "ko": "반대",
      "vi": "phản đối",
      "id": "oposisi"
    },
    "pos": "i-adj",
    "ex": "とても反対と思う"
  },
  {
    "id": "V1119",
    "w": "判定",
    "r": "はんてい",
    "m": {
      "en": "judgment",
      "zh-TW": "判定",
      "zh-CN": "判定",
      "ko": "판정",
      "vi": "phán quyết",
      "id": "keputusan"
    },
    "pos": "i-adj",
    "ex": "とても判定と思う"
  },
  {
    "id": "V1120",
    "w": "販売",
    "r": "はんばい",
    "m": {
      "en": "sales",
      "zh-TW": "銷售",
      "zh-CN": "销售",
      "ko": "판매",
      "vi": "bán hàng",
      "id": "penjualan"
    },
    "pos": "i-adj",
    "ex": "とても販売と思う"
  },
  {
    "id": "V1121",
    "w": "犯罪",
    "r": "はんざい",
    "m": {
      "en": "crime",
      "zh-TW": "犯罪",
      "zh-CN": "犯罪",
      "ko": "범죄",
      "vi": "tội phạm",
      "id": "kejahatan"
    },
    "pos": "i-adj",
    "ex": "とても犯罪と思う"
  },
  {
    "id": "V1122",
    "w": "半分",
    "r": "はんぶん",
    "m": {
      "en": "half",
      "zh-TW": "一半",
      "zh-CN": "一半",
      "ko": "반",
      "vi": "một nửa",
      "id": "setengah"
    },
    "pos": "noun",
    "ex": "半分について考える"
  },
  {
    "id": "V1123",
    "w": "反応",
    "r": "はんのう",
    "m": {
      "en": "reaction",
      "zh-TW": "反應",
      "zh-CN": "反应",
      "ko": "반응",
      "vi": "phản ứng",
      "id": "reaksi"
    },
    "pos": "verb-godan",
    "ex": "反応ことにする"
  },
  {
    "id": "V1124",
    "w": "日",
    "r": "ひ",
    "m": {
      "en": "day",
      "zh-TW": "日",
      "zh-CN": "日",
      "ko": "날",
      "vi": "ngày",
      "id": "hari"
    },
    "pos": "noun",
    "ex": "日について考える"
  },
  {
    "id": "V1125",
    "w": "火",
    "r": "ひ",
    "m": {
      "en": "fire",
      "zh-TW": "火",
      "zh-CN": "火",
      "ko": "불",
      "vi": "lửa",
      "id": "api"
    },
    "pos": "noun",
    "ex": "火について考える"
  },
  {
    "id": "V1126",
    "w": "比較",
    "r": "ひかく",
    "m": {
      "en": "comparison",
      "zh-TW": "比較",
      "zh-CN": "比较",
      "ko": "비교",
      "vi": "so sánh",
      "id": "perbandingan"
    },
    "pos": "verb-godan",
    "ex": "比較ことにする"
  },
  {
    "id": "V1127",
    "w": "光",
    "r": "ひかり",
    "m": {
      "en": "light",
      "zh-TW": "光",
      "zh-CN": "光",
      "ko": "빛",
      "vi": "ánh sáng",
      "id": "ringan"
    },
    "pos": "noun",
    "ex": "光が差し込む"
  },
  {
    "id": "V1128",
    "w": "光る",
    "r": "ひかる",
    "m": {
      "en": "to shine",
      "zh-TW": "發光",
      "zh-CN": "发光",
      "ko": "빛나다",
      "vi": "sáng",
      "id": "bersinar"
    },
    "pos": "verb-godan",
    "ex": "光ることにする"
  },
  {
    "id": "V1129",
    "w": "引き受ける",
    "r": "ひきうける",
    "m": {
      "en": "to undertake",
      "zh-TW": "承擔",
      "zh-CN": "承担",
      "ko": "맡다",
      "vi": "đảm nhận",
      "id": "menerima"
    },
    "pos": "verb-ichidan",
    "ex": "引き受けることにする"
  },
  {
    "id": "V1130",
    "w": "引き起こす",
    "r": "ひきおこす",
    "m": {
      "en": "to cause",
      "zh-TW": "引起",
      "zh-CN": "引起",
      "ko": "일으키다",
      "vi": "gây ra",
      "id": "menyebabkan"
    },
    "pos": "verb-godan",
    "ex": "引き起こすことにする"
  },
  {
    "id": "V1131",
    "w": "引き出す",
    "r": "ひきだす",
    "m": {
      "en": "to draw out",
      "zh-TW": "取出",
      "zh-CN": "取出",
      "ko": "꺼내다",
      "vi": "rút ra",
      "id": "menarik"
    },
    "pos": "verb-godan",
    "ex": "引き出すことにする"
  },
  {
    "id": "V1132",
    "w": "引き取る",
    "r": "ひきとる",
    "m": {
      "en": "to take over",
      "zh-TW": "接管",
      "zh-CN": "接管",
      "ko": "인수하다",
      "vi": "nhận",
      "id": "mengambil alih"
    },
    "pos": "verb-godan",
    "ex": "引き取ることにする"
  },
  {
    "id": "V1133",
    "w": "引く",
    "r": "ひく",
    "m": {
      "en": "to pull",
      "zh-TW": "拉",
      "zh-CN": "拉",
      "ko": "끌다",
      "vi": "kéo",
      "id": "menarik"
    },
    "pos": "verb-godan",
    "ex": "ドアを引く"
  },
  {
    "id": "V1134",
    "w": "弾く",
    "r": "ひく",
    "m": {
      "en": "to play",
      "zh-TW": "彈奏",
      "zh-CN": "弹奏",
      "ko": "연주하다",
      "vi": "đàn",
      "id": "bermain"
    },
    "pos": "verb-godan",
    "ex": "ピアノを弾く"
  },
  {
    "id": "V1135",
    "w": "低い",
    "r": "ひくい",
    "m": {
      "en": "low",
      "zh-TW": "低",
      "zh-CN": "低",
      "ko": "낮은",
      "vi": "thấp",
      "id": "rendah"
    },
    "pos": "i-adj",
    "ex": "声が低い"
  },
  {
    "id": "V1136",
    "w": "悲劇",
    "r": "ひげき",
    "m": {
      "en": "tragedy",
      "zh-TW": "悲劇",
      "zh-CN": "悲剧",
      "ko": "비극",
      "vi": "bi kịch",
      "id": "tragedi"
    },
    "pos": "noun",
    "ex": "悲劇について考える"
  },
  {
    "id": "V1137",
    "w": "飛行",
    "r": "ひこう",
    "m": {
      "en": "flight",
      "zh-TW": "飛行",
      "zh-CN": "飞行",
      "ko": "비행",
      "vi": "bay",
      "id": "penerbangan"
    },
    "pos": "verb-godan",
    "ex": "飛行ことにする"
  },
  {
    "id": "V1138",
    "w": "久しぶり",
    "r": "ひさしぶり",
    "m": {
      "en": "long time no see",
      "zh-TW": "好久不見",
      "zh-CN": "好久不见",
      "ko": "오랜만",
      "vi": "lâu rồi",
      "id": "lama tidak bertemu"
    },
    "pos": "noun",
    "ex": "久しぶりについて考える"
  },
  {
    "id": "V1139",
    "w": "美術",
    "r": "びじゅつ",
    "m": {
      "en": "art",
      "zh-TW": "美術",
      "zh-CN": "美术",
      "ko": "미술",
      "vi": "mỹ thuật",
      "id": "seni rupa"
    },
    "pos": "verb-godan",
    "ex": "美術ことにする"
  },
  {
    "id": "V1140",
    "w": "非常",
    "r": "ひじょう",
    "m": {
      "en": "very",
      "zh-TW": "非常",
      "zh-CN": "非常",
      "ko": "비상",
      "vi": "rất",
      "id": "sangat"
    },
    "pos": "verb-godan",
    "ex": "非常ことにする"
  },
  {
    "id": "V1141",
    "w": "日付",
    "r": "ひづけ",
    "m": {
      "en": "date",
      "zh-TW": "日期",
      "zh-CN": "日期",
      "ko": "날짜",
      "vi": "ngày tháng",
      "id": "tanggal"
    },
    "pos": "noun",
    "ex": "日付について考える"
  },
  {
    "id": "V1142",
    "w": "引っ掛かる",
    "r": "ひっかかる",
    "m": {
      "en": "to get caught",
      "zh-TW": "被絆住",
      "zh-CN": "被绊住",
      "ko": "걸리다",
      "vi": "mắc",
      "id": "tersangkut"
    },
    "pos": "verb-godan",
    "ex": "引っ掛かることにする"
  },
  {
    "id": "V1143",
    "w": "引っ掛ける",
    "r": "ひっかける",
    "m": {
      "en": "to hook",
      "zh-TW": "掛上",
      "zh-CN": "挂上",
      "ko": "걸다",
      "vi": "móc",
      "id": "mengait"
    },
    "pos": "verb-ichidan",
    "ex": "引っ掛けることにする"
  },
  {
    "id": "V1144",
    "w": "引っ越す",
    "r": "ひっこす",
    "m": {
      "en": "to move",
      "zh-TW": "搬家",
      "zh-CN": "搬家",
      "ko": "이사하다",
      "vi": "chuyển nhà",
      "id": "pindah"
    },
    "pos": "verb-godan",
    "ex": "引っ越すことにする"
  },
  {
    "id": "V1145",
    "w": "必死",
    "r": "ひっし",
    "m": {
      "en": "desperate",
      "zh-TW": "拼命",
      "zh-CN": "拼命",
      "ko": "필사",
      "vi": "liều mạng",
      "id": "mati-matian"
    },
    "pos": "noun",
    "ex": "必死について考える"
  },
  {
    "id": "V1146",
    "w": "必需",
    "r": "ひつじゅ",
    "m": {
      "en": "necessity",
      "zh-TW": "必需",
      "zh-CN": "必需",
      "ko": "필수",
      "vi": "cần thiết",
      "id": "kebutuhan"
    },
    "pos": "noun",
    "ex": "必需について考える"
  },
  {
    "id": "V1147",
    "w": "筆記",
    "r": "ひっき",
    "m": {
      "en": "note-taking",
      "zh-TW": "筆記",
      "zh-CN": "笔记",
      "ko": "필기",
      "vi": "ghi chép",
      "id": "catatan"
    },
    "pos": "noun",
    "ex": "筆記について考える"
  },
  {
    "id": "V1148",
    "w": "否定",
    "r": "ひてい",
    "m": {
      "en": "denial",
      "zh-TW": "否定",
      "zh-CN": "否定",
      "ko": "부정",
      "vi": "phủ định",
      "id": "penyangkalan"
    },
    "pos": "i-adj",
    "ex": "とても否定と思う"
  },
  {
    "id": "V1149",
    "w": "人",
    "r": "ひと",
    "m": {
      "en": "person",
      "zh-TW": "人",
      "zh-CN": "人",
      "ko": "사람",
      "vi": "người",
      "id": "orang"
    },
    "pos": "adverb",
    "ex": "人考える"
  },
  {
    "id": "V1150",
    "w": "等しい",
    "r": "ひとしい",
    "m": {
      "en": "equal",
      "zh-TW": "相等",
      "zh-CN": "相等",
      "ko": "같은",
      "vi": "bằng",
      "id": "sama"
    },
    "pos": "i-adj",
    "ex": "とても等しいと思う"
  },
  {
    "id": "V1151",
    "w": "瞳",
    "r": "ひとみ",
    "m": {
      "en": "pupil",
      "zh-TW": "瞳孔",
      "zh-CN": "瞳孔",
      "ko": "눈동자",
      "vi": "con ngươi",
      "id": "pupil"
    },
    "pos": "noun",
    "ex": "瞳について考える"
  },
  {
    "id": "V1152",
    "w": "独り",
    "r": "ひとり",
    "m": {
      "en": "alone",
      "zh-TW": "獨自",
      "zh-CN": "独自",
      "ko": "혼자",
      "vi": "một mình",
      "id": "sendirian"
    },
    "pos": "noun",
    "ex": "独りについて考える"
  },
  {
    "id": "V1153",
    "w": "一人一人",
    "r": "ひとりひとり",
    "m": {
      "en": "each person",
      "zh-TW": "每個人",
      "zh-CN": "每个人",
      "ko": "각자",
      "vi": "mỗi người",
      "id": "masing-masing"
    },
    "pos": "noun",
    "ex": "一人一人について考える"
  },
  {
    "id": "V1154",
    "w": "響く",
    "r": "ひびく",
    "m": {
      "en": "to echo",
      "zh-TW": "迴響",
      "zh-CN": "回响",
      "ko": "울리다",
      "vi": "vang",
      "id": "bergema"
    },
    "pos": "verb-godan",
    "ex": "響くことにする"
  },
  {
    "id": "V1155",
    "w": "批判",
    "r": "ひはん",
    "m": {
      "en": "criticism",
      "zh-TW": "批判",
      "zh-CN": "批判",
      "ko": "비판",
      "vi": "phê phán",
      "id": "kritik"
    },
    "pos": "noun",
    "ex": "批判について考える"
  },
  {
    "id": "V1156",
    "w": "批評",
    "r": "ひひょう",
    "m": {
      "en": "criticism",
      "zh-TW": "評論",
      "zh-CN": "评论",
      "ko": "비평",
      "vi": "phê bình",
      "id": "kritik"
    },
    "pos": "verb-godan",
    "ex": "批評ことにする"
  },
  {
    "id": "V1157",
    "w": "皮膚",
    "r": "ひふ",
    "m": {
      "en": "skin",
      "zh-TW": "皮膚",
      "zh-CN": "皮肤",
      "ko": "피부",
      "vi": "da",
      "id": "kulit"
    },
    "pos": "noun",
    "ex": "皮膚について考える"
  },
  {
    "id": "V1158",
    "w": "秘密",
    "r": "ひみつ",
    "m": {
      "en": "secret",
      "zh-TW": "秘密",
      "zh-CN": "秘密",
      "ko": "비밀",
      "vi": "bí mật",
      "id": "rahasia"
    },
    "pos": "verb-godan",
    "ex": "秘密ことにする"
  },
  {
    "id": "V1159",
    "w": "冷やす",
    "r": "ひやす",
    "m": {
      "en": "to cool",
      "zh-TW": "冷卻",
      "zh-CN": "冷却",
      "ko": "식히다",
      "vi": "làm lạnh",
      "id": "sejuk"
    },
    "pos": "verb-godan",
    "ex": "冷やすことにする"
  },
  {
    "id": "V1160",
    "w": "費用",
    "r": "ひよう",
    "m": {
      "en": "expense",
      "zh-TW": "費用",
      "zh-CN": "费用",
      "ko": "비용",
      "vi": "chi phí",
      "id": "biaya"
    },
    "pos": "verb-godan",
    "ex": "費用ことにする"
  },
  {
    "id": "V1161",
    "w": "表現",
    "r": "ひょうげん",
    "m": {
      "en": "expression",
      "zh-TW": "表達",
      "zh-CN": "表达",
      "ko": "표현",
      "vi": "biểu hiện",
      "id": "ekspresi"
    },
    "pos": "noun",
    "ex": "表現について考える",
    "syn": [
      "表す",
      "伝える",
      "示す"
    ]
  },
  {
    "id": "V1162",
    "w": "評価",
    "r": "ひょうか",
    "m": {
      "en": "evaluation",
      "zh-TW": "評價",
      "zh-CN": "评价",
      "ko": "평가",
      "vi": "đánh giá",
      "id": "evaluasi"
    },
    "pos": "noun",
    "ex": "高い評価を受ける",
    "syn": [
      "査定",
      "評判",
      "判定"
    ]
  },
  {
    "id": "V1163",
    "w": "表紙",
    "r": "ひょうし",
    "m": {
      "en": "cover",
      "zh-TW": "封面",
      "zh-CN": "封面",
      "ko": "표지",
      "vi": "bìa",
      "id": "sampul"
    },
    "pos": "noun",
    "ex": "表紙について考える"
  },
  {
    "id": "V1164",
    "w": "標準",
    "r": "ひょうじゅん",
    "m": {
      "en": "standard",
      "zh-TW": "標準",
      "zh-CN": "标准",
      "ko": "표준",
      "vi": "tiêu chuẩn",
      "id": "standar"
    },
    "pos": "noun",
    "ex": "標準について考える"
  },
  {
    "id": "V1165",
    "w": "平等",
    "r": "びょうどう",
    "m": {
      "en": "equality",
      "zh-TW": "平等",
      "zh-CN": "平等",
      "ko": "평등",
      "vi": "bình đẳng",
      "id": "kesetaraan"
    },
    "pos": "verb-godan",
    "ex": "平等ことにする"
  },
  {
    "id": "V1166",
    "w": "表面",
    "r": "ひょうめん",
    "m": {
      "en": "surface",
      "zh-TW": "表面",
      "zh-CN": "表面",
      "ko": "표면",
      "vi": "bề mặt",
      "id": "permukaan"
    },
    "pos": "noun",
    "ex": "表面について考える"
  },
  {
    "id": "V1167",
    "w": "評論",
    "r": "ひょうろん",
    "m": {
      "en": "review",
      "zh-TW": "評論",
      "zh-CN": "评论",
      "ko": "평론",
      "vi": "bình luận",
      "id": "ulasan"
    },
    "pos": "noun",
    "ex": "評論について考える"
  },
  {
    "id": "V1168",
    "w": "開く",
    "r": "ひらく",
    "m": {
      "en": "to open",
      "zh-TW": "打開",
      "zh-CN": "打开",
      "ko": "열다",
      "vi": "mở",
      "id": "membuka"
    },
    "pos": "verb-godan",
    "ex": "窓を開けて換気する"
  },
  {
    "id": "V1169",
    "w": "昼",
    "r": "ひる",
    "m": {
      "en": "noon",
      "zh-TW": "中午",
      "zh-CN": "中午",
      "ko": "낮",
      "vi": "trưa",
      "id": "siang"
    },
    "pos": "verb-ichidan",
    "ex": "昼ご飯を食べる"
  },
  {
    "id": "V1170",
    "w": "広がる",
    "r": "ひろがる",
    "m": {
      "en": "to spread",
      "zh-TW": "擴大",
      "zh-CN": "扩大",
      "ko": "펼쳐지다",
      "vi": "lan rộng",
      "id": "menyebar"
    },
    "pos": "verb-godan",
    "ex": "広がることにする"
  },
  {
    "id": "V1171",
    "w": "広げる",
    "r": "ひろげる",
    "m": {
      "en": "to spread",
      "zh-TW": "展開",
      "zh-CN": "展开",
      "ko": "펼치다",
      "vi": "mở rộng",
      "id": "memperluas"
    },
    "pos": "verb-godan",
    "ex": "広げることにする"
  },
  {
    "id": "V1172",
    "w": "広さ",
    "r": "ひろさ",
    "m": {
      "en": "width",
      "zh-TW": "寬度",
      "zh-CN": "宽度",
      "ko": "넓이",
      "vi": "độ rộng",
      "id": "luas"
    },
    "pos": "noun",
    "ex": "広さについて考える"
  },
  {
    "id": "V1173",
    "w": "広場",
    "r": "ひろば",
    "m": {
      "en": "plaza",
      "zh-TW": "廣場",
      "zh-CN": "广场",
      "ko": "광장",
      "vi": "quảng trường",
      "id": "lapangan"
    },
    "pos": "noun",
    "ex": "広場について考える"
  },
  {
    "id": "V1174",
    "w": "品質",
    "r": "ひんしつ",
    "m": {
      "en": "quality",
      "zh-TW": "品質",
      "zh-CN": "品质",
      "ko": "품질",
      "vi": "chất lượng",
      "id": "kualitas"
    },
    "pos": "verb-godan",
    "ex": "品質ことにする"
  },
  {
    "id": "V1175",
    "w": "瓶",
    "r": "びん",
    "m": {
      "en": "bottle",
      "zh-TW": "瓶子",
      "zh-CN": "瓶子",
      "ko": "병",
      "vi": "chai",
      "id": "botol"
    },
    "pos": "noun",
    "ex": "瓶について考える"
  },
  {
    "id": "V1176",
    "w": "敏感",
    "r": "びんかん",
    "m": {
      "en": "sensitive",
      "zh-TW": "敏感",
      "zh-CN": "敏感",
      "ko": "민감",
      "vi": "nhạy cảm",
      "id": "sensitif"
    },
    "pos": "noun",
    "ex": "敏感について考える"
  },
  {
    "id": "V1177",
    "w": "貧困",
    "r": "ひんこん",
    "m": {
      "en": "poverty",
      "zh-TW": "貧困",
      "zh-CN": "贫困",
      "ko": "빈곤",
      "vi": "nghèo khó",
      "id": "kemiskinan"
    },
    "pos": "noun",
    "ex": "貧困について考える"
  },
  {
    "id": "V1178",
    "w": "不安",
    "r": "ふあん",
    "m": {
      "en": "anxiety",
      "zh-TW": "不安",
      "zh-CN": "不安",
      "ko": "불안",
      "vi": "lo lắng",
      "id": "kecemasan"
    },
    "pos": "noun",
    "ex": "不安について考える"
  },
  {
    "id": "V1179",
    "w": "風景",
    "r": "ふうけい",
    "m": {
      "en": "scenery",
      "zh-TW": "風景",
      "zh-CN": "风景",
      "ko": "풍경",
      "vi": "phong cảnh",
      "id": "pemandangan"
    },
    "pos": "i-adj",
    "ex": "とても風景と思う"
  },
  {
    "id": "V1180",
    "w": "夫婦",
    "r": "ふうふ",
    "m": {
      "en": "couple",
      "zh-TW": "夫婦",
      "zh-CN": "夫妇",
      "ko": "부부",
      "vi": "vợ chồng",
      "id": "pasangan"
    },
    "pos": "noun",
    "ex": "夫婦について考える"
  },
  {
    "id": "V1181",
    "w": "増える",
    "r": "ふえる",
    "m": {
      "en": "to increase",
      "zh-TW": "增加",
      "zh-CN": "增加",
      "ko": "늘다",
      "vi": "tăng",
      "id": "meningkat"
    },
    "pos": "verb-ichidan",
    "ex": "人口が増える"
  },
  {
    "id": "V1182",
    "w": "深い",
    "r": "ふかい",
    "m": {
      "en": "deep",
      "zh-TW": "深",
      "zh-CN": "深",
      "ko": "깊은",
      "vi": "sâu",
      "id": "dalam"
    },
    "pos": "i-adj",
    "ex": "川が深い"
  },
  {
    "id": "V1183",
    "w": "不可能",
    "r": "ふかのう",
    "m": {
      "en": "impossible",
      "zh-TW": "不可能",
      "zh-CN": "不可能",
      "ko": "불가능",
      "vi": "không thể",
      "id": "mustahil"
    },
    "pos": "verb-godan",
    "ex": "不可能ことにする"
  },
  {
    "id": "V1184",
    "w": "吹く",
    "r": "ふく",
    "m": {
      "en": "to blow",
      "zh-TW": "吹",
      "zh-CN": "吹",
      "ko": "불다",
      "vi": "thổi",
      "id": "bertiup"
    },
    "pos": "verb-godan",
    "ex": "吹くことにする"
  },
  {
    "id": "V1185",
    "w": "拭く",
    "r": "ふく",
    "m": {
      "en": "to wipe",
      "zh-TW": "擦",
      "zh-CN": "擦",
      "ko": "닦다",
      "vi": "lau",
      "id": "mengelap"
    },
    "pos": "verb-godan",
    "ex": "拭くことにする"
  },
  {
    "id": "V1186",
    "w": "含む",
    "r": "ふくむ",
    "m": {
      "en": "to include",
      "zh-TW": "包含",
      "zh-CN": "包含",
      "ko": "포함하다",
      "vi": "bao gồm",
      "id": "termasuk"
    },
    "pos": "verb-godan",
    "ex": "含むことにする"
  },
  {
    "id": "V1187",
    "w": "膨らむ",
    "r": "ふくらむ",
    "m": {
      "en": "to swell",
      "zh-TW": "膨脹",
      "zh-CN": "膨胀",
      "ko": "부풀다",
      "vi": "phồng",
      "id": "mengembang"
    },
    "pos": "verb-godan",
    "ex": "膨らむことにする"
  },
  {
    "id": "V1188",
    "w": "福祉",
    "r": "ふくし",
    "m": {
      "en": "welfare",
      "zh-TW": "福祉",
      "zh-CN": "福祉",
      "ko": "복지",
      "vi": "phúc lợi",
      "id": "kesejahteraan"
    },
    "pos": "noun",
    "ex": "福祉について考える"
  },
  {
    "id": "V1189",
    "w": "複雑",
    "r": "ふくざつ",
    "m": {
      "en": "complex",
      "zh-TW": "複雜",
      "zh-CN": "复杂",
      "ko": "복잡",
      "vi": "phức tạp",
      "id": "kompleks"
    },
    "pos": "verb-godan",
    "ex": "複雑な問題を解く",
    "syn": [
      "難しい",
      "込み入った",
      "厄介"
    ]
  },
  {
    "id": "V1190",
    "w": "副作用",
    "r": "ふくさよう",
    "m": {
      "en": "side effect",
      "zh-TW": "副作用",
      "zh-CN": "副作用",
      "ko": "부작용",
      "vi": "tác dụng phụ",
      "id": "efek samping"
    },
    "pos": "verb-godan",
    "ex": "副作用ことにする"
  },
  {
    "id": "V1191",
    "w": "不況",
    "r": "ふきょう",
    "m": {
      "en": "recession",
      "zh-TW": "不景氣",
      "zh-CN": "不景气",
      "ko": "불경기",
      "vi": "suy thoái",
      "id": "resesi"
    },
    "pos": "verb-godan",
    "ex": "不況ことにする"
  },
  {
    "id": "V1192",
    "w": "ふざける",
    "r": "ふざける",
    "m": {
      "en": "to joke",
      "zh-TW": "開玩笑",
      "zh-CN": "开玩笑",
      "ko": "장난치다",
      "vi": "đùa",
      "id": "bercanda"
    },
    "pos": "verb-ichidan",
    "ex": "ふざけることにする"
  },
  {
    "id": "V1193",
    "w": "無事",
    "r": "ぶじ",
    "m": {
      "en": "safe",
      "zh-TW": "平安",
      "zh-CN": "平安",
      "ko": "무사",
      "vi": "an toàn",
      "id": "aman"
    },
    "pos": "noun",
    "ex": "無事について考える"
  },
  {
    "id": "V1194",
    "w": "不自由",
    "r": "ふじゆう",
    "m": {
      "en": "inconvenience",
      "zh-TW": "不自由",
      "zh-CN": "不自由",
      "ko": "부자유",
      "vi": "bất tiện",
      "id": "ketidaknyamanan"
    },
    "pos": "verb-godan",
    "ex": "不自由ことにする"
  },
  {
    "id": "V1195",
    "w": "付属",
    "r": "ふぞく",
    "m": {
      "en": "attached",
      "zh-TW": "附屬",
      "zh-CN": "附属",
      "ko": "부속",
      "vi": "phụ thuộc",
      "id": "terlampir"
    },
    "pos": "verb-godan",
    "ex": "付属ことにする"
  },
  {
    "id": "V1196",
    "w": "不足",
    "r": "ふそく",
    "m": {
      "en": "shortage",
      "zh-TW": "不足",
      "zh-CN": "不足",
      "ko": "부족",
      "vi": "thiếu",
      "id": "kekurangan"
    },
    "pos": "verb-godan",
    "ex": "不足ことにする"
  },
  {
    "id": "V1197",
    "w": "舞台",
    "r": "ぶたい",
    "m": {
      "en": "stage",
      "zh-TW": "舞臺",
      "zh-CN": "舞台",
      "ko": "무대",
      "vi": "sân khấu",
      "id": "panggung"
    },
    "pos": "i-adj",
    "ex": "とても舞台と思う"
  },
  {
    "id": "V1198",
    "w": "普段",
    "r": "ふだん",
    "m": {
      "en": "usually",
      "zh-TW": "平時",
      "zh-CN": "平时",
      "ko": "평소",
      "vi": "thường ngày",
      "id": "biasanya"
    },
    "pos": "noun",
    "ex": "普段について考える"
  },
  {
    "id": "V1199",
    "w": "普通",
    "r": "ふつう",
    "m": {
      "en": "normal",
      "zh-TW": "普通",
      "zh-CN": "普通",
      "ko": "보통",
      "vi": "bình thường",
      "id": "biasa"
    },
    "pos": "verb-godan",
    "ex": "普通ことにする"
  },
  {
    "id": "V1200",
    "w": "物価",
    "r": "ぶっか",
    "m": {
      "en": "price",
      "zh-TW": "物價",
      "zh-CN": "物价",
      "ko": "물가",
      "vi": "giá cả",
      "id": "harga"
    },
    "pos": "noun",
    "ex": "物価について考える"
  },
  {
    "id": "V1201",
    "w": "物質",
    "r": "ぶっしつ",
    "m": {
      "en": "substance",
      "zh-TW": "物質",
      "zh-CN": "物质",
      "ko": "물질",
      "vi": "vật chất",
      "id": "zat"
    },
    "pos": "verb-godan",
    "ex": "物質ことにする"
  },
  {
    "id": "V1202",
    "w": "物理",
    "r": "ぶつり",
    "m": {
      "en": "physics",
      "zh-TW": "物理",
      "zh-CN": "物理",
      "ko": "물리",
      "vi": "vật lý",
      "id": "fisika"
    },
    "pos": "noun",
    "ex": "物理について考える"
  },
  {
    "id": "V1203",
    "w": "太い",
    "r": "ふとい",
    "m": {
      "en": "thick",
      "zh-TW": "粗",
      "zh-CN": "粗",
      "ko": "굵은",
      "vi": "dày",
      "id": "tebal"
    },
    "pos": "i-adj",
    "ex": "太い木がある"
  },
  {
    "id": "V1204",
    "w": "太る",
    "r": "ふとる",
    "m": {
      "en": "to gain weight",
      "zh-TW": "變胖",
      "zh-CN": "变胖",
      "ko": "살찌다",
      "vi": "béo",
      "id": "gemuk"
    },
    "pos": "verb-godan",
    "ex": "食べ過ぎて太る"
  },
  {
    "id": "V1205",
    "w": "負担",
    "r": "ふたん",
    "m": {
      "en": "burden",
      "zh-TW": "負擔",
      "zh-CN": "负担",
      "ko": "부담",
      "vi": "gánh nặng",
      "id": "beban"
    },
    "pos": "noun",
    "ex": "負担について考える"
  },
  {
    "id": "V1206",
    "w": "不動産",
    "r": "ふどうさん",
    "m": {
      "en": "real estate",
      "zh-TW": "不動產",
      "zh-CN": "不动产",
      "ko": "부동산",
      "vi": "bất động sản",
      "id": "real estate"
    },
    "pos": "noun",
    "ex": "不動産について考える"
  },
  {
    "id": "V1207",
    "w": "船",
    "r": "ふね",
    "m": {
      "en": "ship",
      "zh-TW": "船",
      "zh-CN": "船",
      "ko": "배",
      "vi": "tàu",
      "id": "kapal"
    },
    "pos": "noun",
    "ex": "船について考える"
  },
  {
    "id": "V1208",
    "w": "部品",
    "r": "ぶひん",
    "m": {
      "en": "part",
      "zh-TW": "零件",
      "zh-CN": "零件",
      "ko": "부품",
      "vi": "linh kiện",
      "id": "komponen"
    },
    "pos": "noun",
    "ex": "部品について考える"
  },
  {
    "id": "V1209",
    "w": "部分",
    "r": "ぶぶん",
    "m": {
      "en": "part",
      "zh-TW": "部分",
      "zh-CN": "部分",
      "ko": "부분",
      "vi": "phần",
      "id": "bagian"
    },
    "pos": "noun",
    "ex": "部分について考える"
  },
  {
    "id": "V1210",
    "w": "踏まえる",
    "r": "ふまえる",
    "m": {
      "en": "to base on",
      "zh-TW": "根據",
      "zh-CN": "根据",
      "ko": "근거하다",
      "vi": "dựa trên",
      "id": "berdasarkan"
    },
    "pos": "verb-ichidan",
    "ex": "踏まえることにする"
  },
  {
    "id": "V1211",
    "w": "踏む",
    "r": "ふむ",
    "m": {
      "en": "to step on",
      "zh-TW": "踩",
      "zh-CN": "踩",
      "ko": "밟다",
      "vi": "giẫm",
      "id": "menginjak"
    },
    "pos": "verb-godan",
    "ex": "踏むことにする"
  },
  {
    "id": "V1212",
    "w": "増やす",
    "r": "ふやす",
    "m": {
      "en": "to increase",
      "zh-TW": "增加",
      "zh-CN": "增加",
      "ko": "늘리다",
      "vi": "tăng",
      "id": "meningkat"
    },
    "pos": "verb-godan",
    "ex": "増やすことにする"
  },
  {
    "id": "V1213",
    "w": "冬",
    "r": "ふゆ",
    "m": {
      "en": "winter",
      "zh-TW": "冬天",
      "zh-CN": "冬天",
      "ko": "겨울",
      "vi": "mùa đông",
      "id": "musim dingin"
    },
    "pos": "noun",
    "ex": "冬は寒い"
  },
  {
    "id": "V1214",
    "w": "振り返る",
    "r": "ふりかえる",
    "m": {
      "en": "to look back",
      "zh-TW": "回顧",
      "zh-CN": "回顾",
      "ko": "돌아보다",
      "vi": "nhìn lại",
      "id": "menoleh"
    },
    "pos": "verb-ichidan",
    "ex": "振り返ることにする"
  },
  {
    "id": "V1215",
    "w": "振る",
    "r": "ふる",
    "m": {
      "en": "to wave",
      "zh-TW": "揮",
      "zh-CN": "挥",
      "ko": "흔들다",
      "vi": "vẫy",
      "id": "melambaikan"
    },
    "pos": "verb-godan",
    "ex": "振ることにする"
  },
  {
    "id": "V1216",
    "w": "降る",
    "r": "ふる",
    "m": {
      "en": "to fall",
      "zh-TW": "下",
      "zh-CN": "下",
      "ko": "내리다",
      "vi": "rơi",
      "id": "turun"
    },
    "pos": "verb-godan",
    "ex": "雨が降る"
  },
  {
    "id": "V1217",
    "w": "古い",
    "r": "ふるい",
    "m": {
      "en": "old",
      "zh-TW": "舊",
      "zh-CN": "旧",
      "ko": "오래된",
      "vi": "cũ",
      "id": "lama"
    },
    "pos": "i-adj",
    "ex": "古い建物を見学する"
  },
  {
    "id": "V1218",
    "w": "震える",
    "r": "ふるえる",
    "m": {
      "en": "to tremble",
      "zh-TW": "發抖",
      "zh-CN": "发抖",
      "ko": "떨다",
      "vi": "run",
      "id": "gemetar"
    },
    "pos": "verb-ichidan",
    "ex": "震えることにする"
  },
  {
    "id": "V1219",
    "w": "振る舞う",
    "r": "ふるまう",
    "m": {
      "en": "to behave",
      "zh-TW": "行為",
      "zh-CN": "行为",
      "ko": "행동하다",
      "vi": "cư xử",
      "id": "berperilaku"
    },
    "pos": "verb-godan",
    "ex": "振る舞うことにする"
  },
  {
    "id": "V1220",
    "w": "触れる",
    "r": "ふれる",
    "m": {
      "en": "to touch",
      "zh-TW": "觸碰",
      "zh-CN": "触碰",
      "ko": "만지다",
      "vi": "chạm",
      "id": "menyentuh"
    },
    "pos": "verb-ichidan",
    "ex": "触れることにする"
  },
  {
    "id": "V1221",
    "w": "雰囲気",
    "r": "ふんいき",
    "m": {
      "en": "atmosphere",
      "zh-TW": "氣氛",
      "zh-CN": "气氛",
      "ko": "분위기",
      "vi": "không khí",
      "id": "suasana"
    },
    "pos": "noun",
    "ex": "雰囲気について考える"
  },
  {
    "id": "V1222",
    "w": "文化",
    "r": "ぶんか",
    "m": {
      "en": "culture",
      "zh-TW": "文化",
      "zh-CN": "文化",
      "ko": "문화",
      "vi": "văn hóa",
      "id": "budaya"
    },
    "pos": "noun",
    "ex": "文化について考える"
  },
  {
    "id": "V1223",
    "w": "分割",
    "r": "ぶんかつ",
    "m": {
      "en": "division",
      "zh-TW": "分割",
      "zh-CN": "分割",
      "ko": "분할",
      "vi": "chia",
      "id": "pembagian"
    },
    "pos": "verb-godan",
    "ex": "分割ことにする"
  },
  {
    "id": "V1224",
    "w": "文学",
    "r": "ぶんがく",
    "m": {
      "en": "literature",
      "zh-TW": "文學",
      "zh-CN": "文学",
      "ko": "문학",
      "vi": "văn học",
      "id": "sastra"
    },
    "pos": "verb-godan",
    "ex": "文学ことにする"
  },
  {
    "id": "V1225",
    "w": "分析",
    "r": "ぶんせき",
    "m": {
      "en": "analysis",
      "zh-TW": "分析",
      "zh-CN": "分析",
      "ko": "분석",
      "vi": "phân tích",
      "id": "analisis"
    },
    "pos": "noun",
    "ex": "分析について考える"
  },
  {
    "id": "V1226",
    "w": "紛争",
    "r": "ふんそう",
    "m": {
      "en": "dispute",
      "zh-TW": "紛爭",
      "zh-CN": "纷争",
      "ko": "분쟁",
      "vi": "tranh chấp",
      "id": "perselisihan"
    },
    "pos": "verb-godan",
    "ex": "紛争ことにする"
  },
  {
    "id": "V1227",
    "w": "分野",
    "r": "ぶんや",
    "m": {
      "en": "field",
      "zh-TW": "領域",
      "zh-CN": "领域",
      "ko": "분야",
      "vi": "lĩnh vực",
      "id": "bidang"
    },
    "pos": "noun",
    "ex": "分野について考える"
  },
  {
    "id": "V1228",
    "w": "平均",
    "r": "へいきん",
    "m": {
      "en": "average",
      "zh-TW": "平均",
      "zh-CN": "平均",
      "ko": "평균",
      "vi": "trung bình",
      "id": "rata-rata"
    },
    "pos": "noun",
    "ex": "平均について考える"
  },
  {
    "id": "V1229",
    "w": "平行",
    "r": "へいこう",
    "m": {
      "en": "parallel",
      "zh-TW": "平行",
      "zh-CN": "平行",
      "ko": "평행",
      "vi": "song song",
      "id": "paralel"
    },
    "pos": "verb-godan",
    "ex": "平行ことにする"
  },
  {
    "id": "V1230",
    "w": "閉鎖",
    "r": "へいさ",
    "m": {
      "en": "closure",
      "zh-TW": "關閉",
      "zh-CN": "关闭",
      "ko": "폐쇄",
      "vi": "đóng cửa",
      "id": "penutupan"
    },
    "pos": "noun",
    "ex": "閉鎖について考える"
  },
  {
    "id": "V1231",
    "w": "平日",
    "r": "へいじつ",
    "m": {
      "en": "weekday",
      "zh-TW": "平日",
      "zh-CN": "平日",
      "ko": "평일",
      "vi": "ngày thường",
      "id": "hari kerja"
    },
    "pos": "verb-godan",
    "ex": "平日ことにする"
  },
  {
    "id": "V1232",
    "w": "並行",
    "r": "へいこう",
    "m": {
      "en": "parallel",
      "zh-TW": "並行",
      "zh-CN": "并行",
      "ko": "병행",
      "vi": "song song",
      "id": "bersamaan"
    },
    "pos": "verb-godan",
    "ex": "並行ことにする"
  },
  {
    "id": "V1233",
    "w": "平和",
    "r": "へいわ",
    "m": {
      "en": "peace",
      "zh-TW": "和平",
      "zh-CN": "和平",
      "ko": "평화",
      "vi": "hòa bình",
      "id": "perdamaian"
    },
    "pos": "noun",
    "ex": "平和について考える"
  },
  {
    "id": "V1234",
    "w": "減らす",
    "r": "へらす",
    "m": {
      "en": "to reduce",
      "zh-TW": "減少",
      "zh-CN": "减少",
      "ko": "줄이다",
      "vi": "giảm",
      "id": "mengurangi"
    },
    "pos": "verb-godan",
    "ex": "減らすことにする"
  },
  {
    "id": "V1235",
    "w": "減る",
    "r": "へる",
    "m": {
      "en": "to decrease",
      "zh-TW": "減少",
      "zh-CN": "减少",
      "ko": "줄다",
      "vi": "giảm",
      "id": "menurun"
    },
    "pos": "verb-ichidan",
    "ex": "減ることにする"
  },
  {
    "id": "V1236",
    "w": "経る",
    "r": "へる",
    "m": {
      "en": "to pass",
      "zh-TW": "經過",
      "zh-CN": "经过",
      "ko": "거치다",
      "vi": "qua",
      "id": "melewati"
    },
    "pos": "verb-ichidan",
    "ex": "経ることにする"
  },
  {
    "id": "V1237",
    "w": "変化",
    "r": "へんか",
    "m": {
      "en": "change",
      "zh-TW": "變化",
      "zh-CN": "变化",
      "ko": "변화",
      "vi": "thay đổi",
      "id": "perubahan"
    },
    "pos": "noun",
    "ex": "変化について考える"
  },
  {
    "id": "V1238",
    "w": "返還",
    "r": "へんかん",
    "m": {
      "en": "return",
      "zh-TW": "歸還",
      "zh-CN": "归还",
      "ko": "반환",
      "vi": "trả lại",
      "id": "pengembalian"
    },
    "pos": "noun",
    "ex": "返還について考える"
  },
  {
    "id": "V1239",
    "w": "変更",
    "r": "へんこう",
    "m": {
      "en": "change",
      "zh-TW": "變更",
      "zh-CN": "变更",
      "ko": "변경",
      "vi": "thay đổi",
      "id": "perubahan"
    },
    "pos": "verb-godan",
    "ex": "変更ことにする"
  },
  {
    "id": "V1240",
    "w": "返事",
    "r": "へんじ",
    "m": {
      "en": "reply",
      "zh-TW": "回答",
      "zh-CN": "回答",
      "ko": "대답",
      "vi": "trả lời",
      "id": "balasan"
    },
    "pos": "noun",
    "ex": "返事について考える"
  },
  {
    "id": "V1241",
    "w": "変動",
    "r": "へんどう",
    "m": {
      "en": "fluctuation",
      "zh-TW": "變動",
      "zh-CN": "变动",
      "ko": "변동",
      "vi": "biến động",
      "id": "fluktuasi"
    },
    "pos": "verb-godan",
    "ex": "変動ことにする"
  },
  {
    "id": "V1242",
    "w": "便利",
    "r": "べんり",
    "m": {
      "en": "convenient",
      "zh-TW": "方便",
      "zh-CN": "方便",
      "ko": "편리",
      "vi": "tiện lợi",
      "id": "praktis"
    },
    "pos": "noun",
    "ex": "便利な道具を使う",
    "syn": [
      "役立つ",
      "使いやすい",
      "手軽"
    ]
  },
  {
    "id": "V1243",
    "w": "方",
    "r": "ほう",
    "m": {
      "en": "direction",
      "zh-TW": "方向",
      "zh-CN": "方向",
      "ko": "쪽",
      "vi": "hướng",
      "id": "arah"
    },
    "pos": "verb-godan",
    "ex": "方ことにする"
  },
  {
    "id": "V1244",
    "w": "法",
    "r": "ほう",
    "m": {
      "en": "law",
      "zh-TW": "法律",
      "zh-CN": "法律",
      "ko": "법",
      "vi": "pháp luật",
      "id": "hukum"
    },
    "pos": "verb-godan",
    "ex": "法ことにする"
  },
  {
    "id": "V1245",
    "w": "妨害",
    "r": "ぼうがい",
    "m": {
      "en": "obstruction",
      "zh-TW": "妨礙",
      "zh-CN": "妨碍",
      "ko": "방해",
      "vi": "cản trở",
      "id": "gangguan"
    },
    "pos": "i-adj",
    "ex": "とても妨害と思う"
  },
  {
    "id": "V1246",
    "w": "方角",
    "r": "ほうがく",
    "m": {
      "en": "direction",
      "zh-TW": "方向",
      "zh-CN": "方向",
      "ko": "방각",
      "vi": "phương hướng",
      "id": "arah"
    },
    "pos": "verb-godan",
    "ex": "方角ことにする"
  },
  {
    "id": "V1247",
    "w": "報告",
    "r": "ほうこく",
    "m": {
      "en": "report",
      "zh-TW": "報告",
      "zh-CN": "报告",
      "ko": "보고",
      "vi": "báo cáo",
      "id": "laporan"
    },
    "pos": "verb-godan",
    "ex": "報告ことにする"
  },
  {
    "id": "V1248",
    "w": "方向",
    "r": "ほうこう",
    "m": {
      "en": "direction",
      "zh-TW": "方向",
      "zh-CN": "方向",
      "ko": "방향",
      "vi": "hướng",
      "id": "arah"
    },
    "pos": "verb-godan",
    "ex": "方向ことにする"
  },
  {
    "id": "V1249",
    "w": "放送",
    "r": "ほうそう",
    "m": {
      "en": "broadcast",
      "zh-TW": "播送",
      "zh-CN": "播送",
      "ko": "방송",
      "vi": "phát sóng",
      "id": "siaran"
    },
    "pos": "verb-godan",
    "ex": "放送ことにする"
  },
  {
    "id": "V1250",
    "w": "法則",
    "r": "ほうそく",
    "m": {
      "en": "law",
      "zh-TW": "法則",
      "zh-CN": "法则",
      "ko": "법칙",
      "vi": "quy luật",
      "id": "hukum"
    },
    "pos": "verb-godan",
    "ex": "法則ことにする"
  },
  {
    "id": "V1251",
    "w": "方針",
    "r": "ほうしん",
    "m": {
      "en": "policy",
      "zh-TW": "方針",
      "zh-CN": "方针",
      "ko": "방침",
      "vi": "phương châm",
      "id": "kebijakan"
    },
    "pos": "noun",
    "ex": "方針について考える"
  },
  {
    "id": "V1252",
    "w": "宝石",
    "r": "ほうせき",
    "m": {
      "en": "jewel",
      "zh-TW": "寶石",
      "zh-CN": "宝石",
      "ko": "보석",
      "vi": "đá quý",
      "id": "permata"
    },
    "pos": "noun",
    "ex": "宝石について考える"
  },
  {
    "id": "V1253",
    "w": "法律",
    "r": "ほうりつ",
    "m": {
      "en": "law",
      "zh-TW": "法律",
      "zh-CN": "法律",
      "ko": "법률",
      "vi": "pháp luật",
      "id": "hukum"
    },
    "pos": "verb-godan",
    "ex": "法律ことにする"
  },
  {
    "id": "V1254",
    "w": "訪問",
    "r": "ほうもん",
    "m": {
      "en": "visit",
      "zh-TW": "訪問",
      "zh-CN": "访问",
      "ko": "방문",
      "vi": "thăm",
      "id": "kunjungan"
    },
    "pos": "noun",
    "ex": "訪問について考える"
  },
  {
    "id": "V1255",
    "w": "豊富",
    "r": "ほうふ",
    "m": {
      "en": "abundant",
      "zh-TW": "豐富",
      "zh-CN": "丰富",
      "ko": "풍부",
      "vi": "phong phú",
      "id": "melimpah"
    },
    "pos": "noun",
    "ex": "豊富について考える"
  },
  {
    "id": "V1256",
    "w": "暴力",
    "r": "ぼうりょく",
    "m": {
      "en": "violence",
      "zh-TW": "暴力",
      "zh-CN": "暴力",
      "ko": "폭력",
      "vi": "bạo lực",
      "id": "kekerasan"
    },
    "pos": "verb-godan",
    "ex": "暴力ことにする"
  },
  {
    "id": "V1257",
    "w": "他",
    "r": "ほか",
    "m": {
      "en": "other",
      "zh-TW": "其他",
      "zh-CN": "其他",
      "ko": "다른",
      "vi": "khác",
      "id": "lainnya"
    },
    "pos": "noun",
    "ex": "他について考える"
  },
  {
    "id": "V1258",
    "w": "保険",
    "r": "ほけん",
    "m": {
      "en": "insurance",
      "zh-TW": "保險",
      "zh-CN": "保险",
      "ko": "보험",
      "vi": "bảo hiểm",
      "id": "asuransi"
    },
    "pos": "noun",
    "ex": "保険について考える"
  },
  {
    "id": "V1259",
    "w": "保護",
    "r": "ほご",
    "m": {
      "en": "protection",
      "zh-TW": "保護",
      "zh-CN": "保护",
      "ko": "보호",
      "vi": "bảo vệ",
      "id": "perlindungan"
    },
    "pos": "noun",
    "ex": "保護について考える"
  },
  {
    "id": "V1260",
    "w": "保証",
    "r": "ほしょう",
    "m": {
      "en": "guarantee",
      "zh-TW": "保證",
      "zh-CN": "保证",
      "ko": "보증",
      "vi": "bảo đảm",
      "id": "jaminan"
    },
    "pos": "verb-godan",
    "ex": "保証ことにする"
  },
  {
    "id": "V1261",
    "w": "干す",
    "r": "ほす",
    "m": {
      "en": "to dry",
      "zh-TW": "曬乾",
      "zh-CN": "晒干",
      "ko": "말리다",
      "vi": "phơi",
      "id": "mengeringkan"
    },
    "pos": "verb-godan",
    "ex": "干すことにする"
  },
  {
    "id": "V1262",
    "w": "欲しい",
    "r": "ほしい",
    "m": {
      "en": "want",
      "zh-TW": "想要",
      "zh-CN": "想要",
      "ko": "원하는",
      "vi": "muốn",
      "id": "ingin"
    },
    "pos": "i-adj",
    "ex": "新しい車が欲しい"
  },
  {
    "id": "V1263",
    "w": "保存",
    "r": "ほぞん",
    "m": {
      "en": "preservation",
      "zh-TW": "保存",
      "zh-CN": "保存",
      "ko": "보존",
      "vi": "bảo tồn",
      "id": "pelestarian"
    },
    "pos": "noun",
    "ex": "保存について考える"
  },
  {
    "id": "V1264",
    "w": "細い",
    "r": "ほそい",
    "m": {
      "en": "thin",
      "zh-TW": "細",
      "zh-CN": "细",
      "ko": "가는",
      "vi": "mảnh",
      "id": "tipis"
    },
    "pos": "i-adj",
    "ex": "細い道を通る"
  },
  {
    "id": "V1265",
    "w": "ほとんど",
    "r": "ほとんど",
    "m": {
      "en": "almost",
      "zh-TW": "幾乎",
      "zh-CN": "几乎",
      "ko": "거의",
      "vi": "hầu hết",
      "id": "hampir"
    },
    "pos": "noun",
    "ex": "ほとんどについて考える"
  },
  {
    "id": "V1266",
    "w": "ほぼ",
    "r": "ほぼ",
    "m": {
      "en": "almost",
      "zh-TW": "幾乎",
      "zh-CN": "几乎",
      "ko": "대략",
      "vi": "gần như",
      "id": "hampir"
    },
    "pos": "noun",
    "ex": "ほぼについて考える"
  },
  {
    "id": "V1267",
    "w": "褒める",
    "r": "ほめる",
    "m": {
      "en": "to praise",
      "zh-TW": "稱讚",
      "zh-CN": "称赞",
      "ko": "칭찬하다",
      "vi": "khen",
      "id": "memuji"
    },
    "pos": "verb-ichidan",
    "ex": "子供を褒める"
  },
  {
    "id": "V1268",
    "w": "掘る",
    "r": "ほる",
    "m": {
      "en": "to dig",
      "zh-TW": "挖",
      "zh-CN": "挖",
      "ko": "파다",
      "vi": "đào",
      "id": "menggali"
    },
    "pos": "verb-godan",
    "ex": "掘ることにする"
  },
  {
    "id": "V1269",
    "w": "本格",
    "r": "ほんかく",
    "m": {
      "en": "genuine",
      "zh-TW": "正式",
      "zh-CN": "正式",
      "ko": "본격",
      "vi": "chính thức",
      "id": "resmi"
    },
    "pos": "verb-godan",
    "ex": "本格ことにする"
  },
  {
    "id": "V1270",
    "w": "本気",
    "r": "ほんき",
    "m": {
      "en": "serious",
      "zh-TW": "認真",
      "zh-CN": "认真",
      "ko": "진심",
      "vi": "thật sự",
      "id": "serius"
    },
    "pos": "noun",
    "ex": "本気について考える"
  },
  {
    "id": "V1271",
    "w": "本質",
    "r": "ほんしつ",
    "m": {
      "en": "essence",
      "zh-TW": "本質",
      "zh-CN": "本质",
      "ko": "본질",
      "vi": "bản chất",
      "id": "esensi"
    },
    "pos": "verb-godan",
    "ex": "本質ことにする"
  },
  {
    "id": "V1272",
    "w": "本人",
    "r": "ほんにん",
    "m": {
      "en": "oneself",
      "zh-TW": "本人",
      "zh-CN": "本人",
      "ko": "본인",
      "vi": "bản thân",
      "id": "diri sendiri"
    },
    "pos": "noun",
    "ex": "本人について考える"
  },
  {
    "id": "V1273",
    "w": "本来",
    "r": "ほんらい",
    "m": {
      "en": "originally",
      "zh-TW": "本來",
      "zh-CN": "本来",
      "ko": "본래",
      "vi": "vốn",
      "id": "awalnya"
    },
    "pos": "i-adj",
    "ex": "とても本来と思う"
  },
  {
    "id": "V1274",
    "w": "曲がる",
    "r": "まがる",
    "m": {
      "en": "to turn",
      "zh-TW": "轉彎",
      "zh-CN": "转弯",
      "ko": "돌다",
      "vi": "rẽ",
      "id": "berbelok"
    },
    "pos": "verb-godan",
    "ex": "角を曲がる"
  },
  {
    "id": "V1275",
    "w": "曲げる",
    "r": "まげる",
    "m": {
      "en": "to bend",
      "zh-TW": "彎曲",
      "zh-CN": "弯曲",
      "ko": "구부리다",
      "vi": "uốn cong",
      "id": "membengkokkan"
    },
    "pos": "verb-godan",
    "ex": "曲げることにする"
  },
  {
    "id": "V1276",
    "w": "負ける",
    "r": "まける",
    "m": {
      "en": "to lose",
      "zh-TW": "輸",
      "zh-CN": "输",
      "ko": "지다",
      "vi": "thua",
      "id": "kalah"
    },
    "pos": "verb-ichidan",
    "ex": "試合に負ける"
  },
  {
    "id": "V1277",
    "w": "真面目",
    "r": "まじめ",
    "m": {
      "en": "serious",
      "zh-TW": "認真",
      "zh-CN": "认真",
      "ko": "진지한",
      "vi": "nghiêm túc",
      "id": "serius"
    },
    "pos": "noun",
    "ex": "真面目について考える"
  },
  {
    "id": "V1278",
    "w": "混ざる",
    "r": "まざる",
    "m": {
      "en": "to mix",
      "zh-TW": "混合",
      "zh-CN": "混合",
      "ko": "섞이다",
      "vi": "trộn",
      "id": "bercampur"
    },
    "pos": "verb-godan",
    "ex": "混ざることにする"
  },
  {
    "id": "V1279",
    "w": "増す",
    "r": "ます",
    "m": {
      "en": "to increase",
      "zh-TW": "增加",
      "zh-CN": "增加",
      "ko": "늘다",
      "vi": "tăng",
      "id": "meningkat"
    },
    "pos": "verb-godan",
    "ex": "増すことにする"
  },
  {
    "id": "V1280",
    "w": "まず",
    "r": "まず",
    "m": {
      "en": "first",
      "zh-TW": "首先",
      "zh-CN": "首先",
      "ko": "우선",
      "vi": "trước hết",
      "id": "pertama"
    },
    "pos": "noun",
    "ex": "まずについて考える"
  },
  {
    "id": "V1281",
    "w": "貧しい",
    "r": "まずしい",
    "m": {
      "en": "poor",
      "zh-TW": "貧窮",
      "zh-CN": "贫穷",
      "ko": "가난한",
      "vi": "nghèo",
      "id": "miskin"
    },
    "pos": "i-adj",
    "ex": "とても貧しいと思う",
    "syn": [
      "貧乏",
      "乏しい",
      "不足"
    ]
  },
  {
    "id": "V1282",
    "w": "混ぜる",
    "r": "まぜる",
    "m": {
      "en": "to mix",
      "zh-TW": "混合",
      "zh-CN": "混合",
      "ko": "섞다",
      "vi": "trộn",
      "id": "mencampur"
    },
    "pos": "verb-godan",
    "ex": "混ぜることにする"
  },
  {
    "id": "V1283",
    "w": "また",
    "r": "また",
    "m": {
      "en": "again",
      "zh-TW": "又",
      "zh-CN": "又",
      "ko": "또",
      "vi": "lại",
      "id": "lagi"
    },
    "pos": "noun",
    "ex": "またについて考える"
  },
  {
    "id": "V1284",
    "w": "間違い",
    "r": "まちがい",
    "m": {
      "en": "mistake",
      "zh-TW": "錯誤",
      "zh-CN": "错误",
      "ko": "실수",
      "vi": "sai lầm",
      "id": "kesalahan"
    },
    "pos": "i-adj",
    "ex": "とても間違いと思う"
  },
  {
    "id": "V1285",
    "w": "間違う",
    "r": "まちがう",
    "m": {
      "en": "to mistake",
      "zh-TW": "弄錯",
      "zh-CN": "弄错",
      "ko": "틀리다",
      "vi": "nhầm",
      "id": "kesalahan"
    },
    "pos": "verb-godan",
    "ex": "間違うことにする"
  },
  {
    "id": "V1286",
    "w": "待つ",
    "r": "まつ",
    "m": {
      "en": "to wait",
      "zh-TW": "等待",
      "zh-CN": "等待",
      "ko": "기다리다",
      "vi": "đợi",
      "id": "menunggu"
    },
    "pos": "verb-godan",
    "ex": "友達を待つ"
  },
  {
    "id": "V1287",
    "w": "全く",
    "r": "まったく",
    "m": {
      "en": "completely",
      "zh-TW": "完全",
      "zh-CN": "完全",
      "ko": "완전히",
      "vi": "hoàn toàn",
      "id": "sepenuhnya"
    },
    "pos": "verb-godan",
    "ex": "全くことにする"
  },
  {
    "id": "V1288",
    "w": "祭り",
    "r": "まつり",
    "m": {
      "en": "festival",
      "zh-TW": "節日",
      "zh-CN": "节日",
      "ko": "축제",
      "vi": "lễ hội",
      "id": "festival"
    },
    "pos": "noun",
    "ex": "祭りについて考える"
  },
  {
    "id": "V1289",
    "w": "まとまる",
    "r": "まとまる",
    "m": {
      "en": "to settle",
      "zh-TW": "整理好",
      "zh-CN": "整理好",
      "ko": "정리되다",
      "vi": "gọn gàng",
      "id": "terselesaikan"
    },
    "pos": "verb-godan",
    "ex": "まとまることにする"
  },
  {
    "id": "V1290",
    "w": "まとめる",
    "r": "まとめる",
    "m": {
      "en": "to summarize",
      "zh-TW": "整理",
      "zh-CN": "整理",
      "ko": "정리하다",
      "vi": "tổng hợp",
      "id": "merangkum"
    },
    "pos": "verb-ichidan",
    "ex": "まとめることにする"
  },
  {
    "id": "V1291",
    "w": "学ぶ",
    "r": "まなぶ",
    "m": {
      "en": "to learn",
      "zh-TW": "學習",
      "zh-CN": "学习",
      "ko": "배우다",
      "vi": "học",
      "id": "belajar"
    },
    "pos": "verb-godan",
    "ex": "学ぶことにする"
  },
  {
    "id": "V1292",
    "w": "招く",
    "r": "まねく",
    "m": {
      "en": "to invite",
      "zh-TW": "邀請",
      "zh-CN": "邀请",
      "ko": "초대하다",
      "vi": "mời",
      "id": "mengundang"
    },
    "pos": "verb-godan",
    "ex": "招くことにする"
  },
  {
    "id": "V1293",
    "w": "真似",
    "r": "まね",
    "m": {
      "en": "imitation",
      "zh-TW": "模仿",
      "zh-CN": "模仿",
      "ko": "흉내",
      "vi": "bắt chước",
      "id": "meniru"
    },
    "pos": "noun",
    "ex": "真似について考える"
  },
  {
    "id": "V1294",
    "w": "守る",
    "r": "まもる",
    "m": {
      "en": "to protect",
      "zh-TW": "保護",
      "zh-CN": "保护",
      "ko": "지키다",
      "vi": "bảo vệ",
      "id": "melindungi"
    },
    "pos": "verb-godan",
    "ex": "守ることにする"
  },
  {
    "id": "V1295",
    "w": "迷う",
    "r": "まよう",
    "m": {
      "en": "to get lost",
      "zh-TW": "迷路",
      "zh-CN": "迷路",
      "ko": "헤매다",
      "vi": "lạc",
      "id": "tersesat"
    },
    "pos": "verb-godan",
    "ex": "迷うことにする"
  },
  {
    "id": "V1296",
    "w": "丸い",
    "r": "まるい",
    "m": {
      "en": "round",
      "zh-TW": "圓",
      "zh-CN": "圆",
      "ko": "둥근",
      "vi": "tròn",
      "id": "bulat"
    },
    "pos": "i-adj",
    "ex": "丸いボール"
  },
  {
    "id": "V1297",
    "w": "回す",
    "r": "まわす",
    "m": {
      "en": "to turn",
      "zh-TW": "轉動",
      "zh-CN": "转动",
      "ko": "돌리다",
      "vi": "xoay",
      "id": "memutar"
    },
    "pos": "verb-godan",
    "ex": "回すことにする"
  },
  {
    "id": "V1298",
    "w": "回り",
    "r": "まわり",
    "m": {
      "en": "surroundings",
      "zh-TW": "周圍",
      "zh-CN": "周围",
      "ko": "주위",
      "vi": "xung quanh",
      "id": "sekitar"
    },
    "pos": "noun",
    "ex": "回りについて考える"
  },
  {
    "id": "V1299",
    "w": "回る",
    "r": "まわる",
    "m": {
      "en": "to go around",
      "zh-TW": "轉",
      "zh-CN": "转",
      "ko": "돌다",
      "vi": "quay",
      "id": "berputar"
    },
    "pos": "verb-godan",
    "ex": "回ることにする"
  },
  {
    "id": "V1300",
    "w": "満足",
    "r": "まんぞく",
    "m": {
      "en": "satisfaction",
      "zh-TW": "滿足",
      "zh-CN": "满足",
      "ko": "만족",
      "vi": "hài lòng",
      "id": "kepuasan"
    },
    "pos": "verb-godan",
    "ex": "満足ことにする",
    "syn": [
      "満ち足りる",
      "納得する",
      "充足する"
    ]
  },
  {
    "id": "V1301",
    "w": "見送る",
    "r": "みおくる",
    "m": {
      "en": "to see off",
      "zh-TW": "送行",
      "zh-CN": "送行",
      "ko": "배웅하다",
      "vi": "tiễn",
      "id": "mengantar"
    },
    "pos": "verb-godan",
    "ex": "見送ることにする"
  },
  {
    "id": "V1302",
    "w": "味方",
    "r": "みかた",
    "m": {
      "en": "ally",
      "zh-TW": "同伴",
      "zh-CN": "同伴",
      "ko": "아군",
      "vi": "đồng minh",
      "id": "sekutu"
    },
    "pos": "noun",
    "ex": "味方について考える"
  },
  {
    "id": "V1303",
    "w": "磨く",
    "r": "みがく",
    "m": {
      "en": "to polish",
      "zh-TW": "磨",
      "zh-CN": "磨",
      "ko": "닦다",
      "vi": "đánh bóng",
      "id": "menggosok"
    },
    "pos": "verb-godan",
    "ex": "磨くことにする"
  },
  {
    "id": "V1304",
    "w": "右",
    "r": "みぎ",
    "m": {
      "en": "right",
      "zh-TW": "右",
      "zh-CN": "右",
      "ko": "오른쪽",
      "vi": "phải",
      "id": "hak"
    },
    "pos": "noun",
    "ex": "右について考える"
  },
  {
    "id": "V1305",
    "w": "短い",
    "r": "みじかい",
    "m": {
      "en": "short",
      "zh-TW": "短",
      "zh-CN": "短",
      "ko": "짧은",
      "vi": "ngắn",
      "id": "pendek"
    },
    "pos": "i-adj",
    "ex": "短い時間で終わる"
  },
  {
    "id": "V1306",
    "w": "惨め",
    "r": "みじめ",
    "m": {
      "en": "miserable",
      "zh-TW": "悲慘",
      "zh-CN": "悲惨",
      "ko": "비참한",
      "vi": "khốn khổ",
      "id": "menyedihkan"
    },
    "pos": "noun",
    "ex": "惨めについて考える"
  },
  {
    "id": "V1307",
    "w": "水",
    "r": "みず",
    "m": {
      "en": "water",
      "zh-TW": "水",
      "zh-CN": "水",
      "ko": "물",
      "vi": "nước",
      "id": "air"
    },
    "pos": "noun",
    "ex": "水について考える"
  },
  {
    "id": "V1308",
    "w": "店",
    "r": "みせ",
    "m": {
      "en": "shop",
      "zh-TW": "店",
      "zh-CN": "店",
      "ko": "가게",
      "vi": "cửa hàng",
      "id": "toko"
    },
    "pos": "noun",
    "ex": "店について考える"
  },
  {
    "id": "V1309",
    "w": "見せる",
    "r": "みせる",
    "m": {
      "en": "to show",
      "zh-TW": "展示",
      "zh-CN": "展示",
      "ko": "보여주다",
      "vi": "cho xem",
      "id": "menunjukkan"
    },
    "pos": "verb-ichidan",
    "ex": "見せることにする"
  },
  {
    "id": "V1310",
    "w": "満たす",
    "r": "みたす",
    "m": {
      "en": "to satisfy",
      "zh-TW": "滿足",
      "zh-CN": "满足",
      "ko": "채우다",
      "vi": "làm đầy",
      "id": "memenuhi"
    },
    "pos": "verb-godan",
    "ex": "満たすことにする"
  },
  {
    "id": "V1311",
    "w": "道",
    "r": "みち",
    "m": {
      "en": "road",
      "zh-TW": "路",
      "zh-CN": "路",
      "ko": "길",
      "vi": "đường",
      "id": "jalan"
    },
    "pos": "noun",
    "ex": "道について考える"
  },
  {
    "id": "V1312",
    "w": "導く",
    "r": "みちびく",
    "m": {
      "en": "to lead",
      "zh-TW": "引導",
      "zh-CN": "引导",
      "ko": "이끌다",
      "vi": "dẫn dắt",
      "id": "memimpin"
    },
    "pos": "verb-godan",
    "ex": "導くことにする"
  },
  {
    "id": "V1313",
    "w": "密",
    "r": "みつ",
    "m": {
      "en": "dense",
      "zh-TW": "密",
      "zh-CN": "密",
      "ko": "밀",
      "vi": "dày đặc",
      "id": "padat"
    },
    "pos": "verb-godan",
    "ex": "密ことにする"
  },
  {
    "id": "V1314",
    "w": "見つかる",
    "r": "みつかる",
    "m": {
      "en": "to be found",
      "zh-TW": "被發現",
      "zh-CN": "被发现",
      "ko": "발견되다",
      "vi": "được tìm thấy",
      "id": "ditemukan"
    },
    "pos": "verb-godan",
    "ex": "見つかることにする"
  },
  {
    "id": "V1315",
    "w": "見つける",
    "r": "みつける",
    "m": {
      "en": "to find",
      "zh-TW": "找到",
      "zh-CN": "找到",
      "ko": "찾다",
      "vi": "tìm thấy",
      "id": "menemukan"
    },
    "pos": "verb-ichidan",
    "ex": "鍵を見つける"
  },
  {
    "id": "V1316",
    "w": "認める",
    "r": "みとめる",
    "m": {
      "en": "to admit",
      "zh-TW": "承認",
      "zh-CN": "承认",
      "ko": "인정하다",
      "vi": "thừa nhận",
      "id": "mengakui"
    },
    "pos": "verb-ichidan",
    "ex": "認めることにする"
  },
  {
    "id": "V1317",
    "w": "見直す",
    "r": "みなおす",
    "m": {
      "en": "to review",
      "zh-TW": "重新審視",
      "zh-CN": "重新审视",
      "ko": "재검토하다",
      "vi": "xem lại",
      "id": "ulasan"
    },
    "pos": "verb-godan",
    "ex": "見直すことにする"
  },
  {
    "id": "V1318",
    "w": "港",
    "r": "みなと",
    "m": {
      "en": "harbor",
      "zh-TW": "港口",
      "zh-CN": "港口",
      "ko": "항구",
      "vi": "cảng",
      "id": "pelabuhan"
    },
    "pos": "adverb",
    "ex": "港考える"
  },
  {
    "id": "V1319",
    "w": "身",
    "r": "み",
    "m": {
      "en": "body",
      "zh-TW": "身體",
      "zh-CN": "身体",
      "ko": "몸",
      "vi": "thân",
      "id": "tubuh"
    },
    "pos": "noun",
    "ex": "身について考える"
  },
  {
    "id": "V1320",
    "w": "見舞い",
    "r": "みまい",
    "m": {
      "en": "visit",
      "zh-TW": "探望",
      "zh-CN": "探望",
      "ko": "문병",
      "vi": "thăm",
      "id": "menjenguk"
    },
    "pos": "i-adj",
    "ex": "とても見舞いと思う"
  },
  {
    "id": "V1321",
    "w": "耳",
    "r": "みみ",
    "m": {
      "en": "ear",
      "zh-TW": "耳朵",
      "zh-CN": "耳朵",
      "ko": "귀",
      "vi": "tai",
      "id": "telinga"
    },
    "pos": "noun",
    "ex": "耳について考える"
  },
  {
    "id": "V1322",
    "w": "見る",
    "r": "みる",
    "m": {
      "en": "to see",
      "zh-TW": "看",
      "zh-CN": "看",
      "ko": "보다",
      "vi": "xem",
      "id": "melihat"
    },
    "pos": "verb-ichidan",
    "ex": "テレビを見る"
  },
  {
    "id": "V1323",
    "w": "未来",
    "r": "みらい",
    "m": {
      "en": "future",
      "zh-TW": "未來",
      "zh-CN": "未来",
      "ko": "미래",
      "vi": "tương lai",
      "id": "masa depan"
    },
    "pos": "i-adj",
    "ex": "とても未来と思う"
  },
  {
    "id": "V1324",
    "w": "魅力",
    "r": "みりょく",
    "m": {
      "en": "charm",
      "zh-TW": "魅力",
      "zh-CN": "魅力",
      "ko": "매력",
      "vi": "sức hấp dẫn",
      "id": "daya tarik"
    },
    "pos": "verb-godan",
    "ex": "魅力ことにする"
  },
  {
    "id": "V1325",
    "w": "民間",
    "r": "みんかん",
    "m": {
      "en": "private",
      "zh-TW": "民間",
      "zh-CN": "民间",
      "ko": "민간",
      "vi": "tư nhân",
      "id": "swasta"
    },
    "pos": "noun",
    "ex": "民間について考える"
  },
  {
    "id": "V1326",
    "w": "民主",
    "r": "みんしゅ",
    "m": {
      "en": "democracy",
      "zh-TW": "民主",
      "zh-CN": "民主",
      "ko": "민주",
      "vi": "dân chủ",
      "id": "demokrasi"
    },
    "pos": "noun",
    "ex": "民主について考える"
  },
  {
    "id": "V1327",
    "w": "民族",
    "r": "みんぞく",
    "m": {
      "en": "ethnic",
      "zh-TW": "民族",
      "zh-CN": "民族",
      "ko": "민족",
      "vi": "dân tộc",
      "id": "etnis"
    },
    "pos": "verb-godan",
    "ex": "民族ことにする"
  },
  {
    "id": "V1328",
    "w": "向かう",
    "r": "むかう",
    "m": {
      "en": "to face",
      "zh-TW": "前往",
      "zh-CN": "前往",
      "ko": "향하다",
      "vi": "hướng tới",
      "id": "wajah"
    },
    "pos": "verb-godan",
    "ex": "向かうことにする"
  },
  {
    "id": "V1329",
    "w": "迎える",
    "r": "むかえる",
    "m": {
      "en": "to welcome",
      "zh-TW": "迎接",
      "zh-CN": "迎接",
      "ko": "맞이하다",
      "vi": "đón",
      "id": "menyambut"
    },
    "pos": "verb-ichidan",
    "ex": "客を迎える"
  },
  {
    "id": "V1330",
    "w": "昔",
    "r": "むかし",
    "m": {
      "en": "past",
      "zh-TW": "過去",
      "zh-CN": "过去",
      "ko": "옛날",
      "vi": "ngày xưa",
      "id": "dulu"
    },
    "pos": "noun",
    "ex": "昔の話をする"
  },
  {
    "id": "V1331",
    "w": "向く",
    "r": "むく",
    "m": {
      "en": "to face",
      "zh-TW": "朝向",
      "zh-CN": "朝向",
      "ko": "향하다",
      "vi": "quay mặt",
      "id": "wajah"
    },
    "pos": "verb-godan",
    "ex": "北を向く"
  },
  {
    "id": "V1332",
    "w": "向ける",
    "r": "むける",
    "m": {
      "en": "to turn toward",
      "zh-TW": "朝向",
      "zh-CN": "朝向",
      "ko": "돌리다",
      "vi": "hướng về",
      "id": "mengarahkan"
    },
    "pos": "verb-ichidan",
    "ex": "向けることにする"
  },
  {
    "id": "V1333",
    "w": "無視",
    "r": "むし",
    "m": {
      "en": "ignore",
      "zh-TW": "忽視",
      "zh-CN": "忽视",
      "ko": "무시",
      "vi": "phớt lờ",
      "id": "mengabaikan"
    },
    "pos": "noun",
    "ex": "無視について考える"
  },
  {
    "id": "V1334",
    "w": "矛盾",
    "r": "むじゅん",
    "m": {
      "en": "contradiction",
      "zh-TW": "矛盾",
      "zh-CN": "矛盾",
      "ko": "모순",
      "vi": "mâu thuẫn",
      "id": "kontradiksi"
    },
    "pos": "noun",
    "ex": "矛盾について考える"
  },
  {
    "id": "V1335",
    "w": "難しい",
    "r": "むずかしい",
    "m": {
      "en": "difficult",
      "zh-TW": "困難",
      "zh-CN": "困难",
      "ko": "어려운",
      "vi": "khó",
      "id": "sulit"
    },
    "pos": "i-adj",
    "ex": "この問題は難しい"
  },
  {
    "id": "V1336",
    "w": "結ぶ",
    "r": "むすぶ",
    "m": {
      "en": "to tie",
      "zh-TW": "連結",
      "zh-CN": "连结",
      "ko": "맺다",
      "vi": "buộc",
      "id": "mengikat"
    },
    "pos": "verb-godan",
    "ex": "結ぶことにする"
  },
  {
    "id": "V1337",
    "w": "胸",
    "r": "むね",
    "m": {
      "en": "chest",
      "zh-TW": "胸",
      "zh-CN": "胸",
      "ko": "가슴",
      "vi": "ngực",
      "id": "dada"
    },
    "pos": "noun",
    "ex": "胸が痛い"
  },
  {
    "id": "V1338",
    "w": "無理",
    "r": "むり",
    "m": {
      "en": "impossible",
      "zh-TW": "不可能",
      "zh-CN": "不可能",
      "ko": "무리",
      "vi": "không thể",
      "id": "mustahil"
    },
    "pos": "noun",
    "ex": "無理について考える"
  },
  {
    "id": "V1339",
    "w": "村",
    "r": "むら",
    "m": {
      "en": "village",
      "zh-TW": "村莊",
      "zh-CN": "村庄",
      "ko": "마을",
      "vi": "làng",
      "id": "desa"
    },
    "pos": "noun",
    "ex": "小さな村に住む"
  },
  {
    "id": "V1340",
    "w": "群れ",
    "r": "むれ",
    "m": {
      "en": "group",
      "zh-TW": "群",
      "zh-CN": "群",
      "ko": "무리",
      "vi": "bầy",
      "id": "kelompok"
    },
    "pos": "noun",
    "ex": "群れについて考える"
  },
  {
    "id": "V1341",
    "w": "明確",
    "r": "めいかく",
    "m": {
      "en": "clear",
      "zh-TW": "明確",
      "zh-CN": "明确",
      "ko": "명확",
      "vi": "rõ ràng",
      "id": "jelas"
    },
    "pos": "verb-godan",
    "ex": "明確ことにする"
  },
  {
    "id": "V1342",
    "w": "名刺",
    "r": "めいし",
    "m": {
      "en": "business card",
      "zh-TW": "名片",
      "zh-CN": "名片",
      "ko": "명함",
      "vi": "danh thiếp",
      "id": "kartu nama"
    },
    "pos": "noun",
    "ex": "名刺について考える"
  },
  {
    "id": "V1343",
    "w": "命令",
    "r": "めいれい",
    "m": {
      "en": "order",
      "zh-TW": "命令",
      "zh-CN": "命令",
      "ko": "명령",
      "vi": "lệnh",
      "id": "perintah"
    },
    "pos": "i-adj",
    "ex": "とても命令と思う"
  },
  {
    "id": "V1344",
    "w": "メーカー",
    "r": "めーかー",
    "m": {
      "en": "maker",
      "zh-TW": "製造商",
      "zh-CN": "制造商",
      "ko": "제조사",
      "vi": "nhà sản xuất",
      "id": "produsen"
    },
    "pos": "noun",
    "ex": "メーカーについて考える"
  },
  {
    "id": "V1345",
    "w": "目",
    "r": "め",
    "m": {
      "en": "eye",
      "zh-TW": "眼睛",
      "zh-CN": "眼睛",
      "ko": "눈",
      "vi": "mắt",
      "id": "mata"
    },
    "pos": "noun",
    "ex": "目が疲れた"
  },
  {
    "id": "V1346",
    "w": "恵み",
    "r": "めぐみ",
    "m": {
      "en": "blessing",
      "zh-TW": "恩惠",
      "zh-CN": "恩惠",
      "ko": "은혜",
      "vi": "ân huệ",
      "id": "berkah"
    },
    "pos": "noun",
    "ex": "恵みについて考える"
  },
  {
    "id": "V1347",
    "w": "恵む",
    "r": "めぐむ",
    "m": {
      "en": "to bless",
      "zh-TW": "施予",
      "zh-CN": "施予",
      "ko": "베풀다",
      "vi": "ban",
      "id": "memberi"
    },
    "pos": "verb-godan",
    "ex": "恵むことにする"
  },
  {
    "id": "V1348",
    "w": "目指す",
    "r": "めざす",
    "m": {
      "en": "to aim",
      "zh-TW": "目標",
      "zh-CN": "目标",
      "ko": "목표로하다",
      "vi": "nhắm",
      "id": "menargetkan"
    },
    "pos": "verb-godan",
    "ex": "目指すことにする"
  },
  {
    "id": "V1349",
    "w": "珍しい",
    "r": "めずらしい",
    "m": {
      "en": "rare",
      "zh-TW": "稀有",
      "zh-CN": "稀有",
      "ko": "드문",
      "vi": "hiếm",
      "id": "langka"
    },
    "pos": "i-adj",
    "ex": "とても珍しいと思う"
  },
  {
    "id": "V1350",
    "w": "目立つ",
    "r": "めだつ",
    "m": {
      "en": "to stand out",
      "zh-TW": "顯眼",
      "zh-CN": "显眼",
      "ko": "눈에띄다",
      "vi": "nổi bật",
      "id": "menonjol"
    },
    "pos": "verb-godan",
    "ex": "目立つことにする"
  },
  {
    "id": "V1351",
    "w": "面",
    "r": "めん",
    "m": {
      "en": "surface",
      "zh-TW": "面",
      "zh-CN": "面",
      "ko": "면",
      "vi": "mặt",
      "id": "permukaan"
    },
    "pos": "noun",
    "ex": "面について考える"
  },
  {
    "id": "V1352",
    "w": "面積",
    "r": "めんせき",
    "m": {
      "en": "area",
      "zh-TW": "面積",
      "zh-CN": "面积",
      "ko": "면적",
      "vi": "diện tích",
      "id": "daerah"
    },
    "pos": "noun",
    "ex": "面積について考える"
  },
  {
    "id": "V1353",
    "w": "面倒",
    "r": "めんどう",
    "m": {
      "en": "trouble",
      "zh-TW": "麻煩",
      "zh-CN": "麻烦",
      "ko": "귀찮은",
      "vi": "phiền",
      "id": "merepotkan"
    },
    "pos": "verb-godan",
    "ex": "面倒ことにする"
  },
  {
    "id": "V1354",
    "w": "申し込み",
    "r": "もうしこみ",
    "m": {
      "en": "application",
      "zh-TW": "申請",
      "zh-CN": "申请",
      "ko": "신청",
      "vi": "đăng ký",
      "id": "permohonan"
    },
    "pos": "noun",
    "ex": "申し込みについて考える"
  },
  {
    "id": "V1355",
    "w": "申し込む",
    "r": "もうしこむ",
    "m": {
      "en": "to apply",
      "zh-TW": "申請",
      "zh-CN": "申请",
      "ko": "신청하다",
      "vi": "đăng ký",
      "id": "mendaftar"
    },
    "pos": "verb-godan",
    "ex": "申し込むことにする"
  },
  {
    "id": "V1356",
    "w": "設ける",
    "r": "もうける",
    "m": {
      "en": "to set up",
      "zh-TW": "設置",
      "zh-CN": "设置",
      "ko": "설치하다",
      "vi": "thiết lập",
      "id": "mendirikan"
    },
    "pos": "verb-ichidan",
    "ex": "設けることにする"
  },
  {
    "id": "V1357",
    "w": "儲ける",
    "r": "もうける",
    "m": {
      "en": "to earn",
      "zh-TW": "賺錢",
      "zh-CN": "赚钱",
      "ko": "벌다",
      "vi": "kiếm",
      "id": "menghasilkan"
    },
    "pos": "verb-ichidan",
    "ex": "儲けることにする"
  },
  {
    "id": "V1358",
    "w": "目的",
    "r": "もくてき",
    "m": {
      "en": "purpose",
      "zh-TW": "目的",
      "zh-CN": "目的",
      "ko": "목적",
      "vi": "mục đích",
      "id": "tujuan"
    },
    "pos": "na-adj",
    "ex": "旅行の目的を話す",
    "syn": [
      "目標",
      "狙い",
      "ゴール"
    ]
  },
  {
    "id": "V1359",
    "w": "目標",
    "r": "もくひょう",
    "m": {
      "en": "goal",
      "zh-TW": "目標",
      "zh-CN": "目标",
      "ko": "목표",
      "vi": "mục tiêu",
      "id": "tujuan"
    },
    "pos": "verb-godan",
    "ex": "目標ことにする",
    "syn": [
      "ゴール",
      "目的",
      "ターゲット"
    ]
  },
  {
    "id": "V1360",
    "w": "潜る",
    "r": "もぐる",
    "m": {
      "en": "to dive",
      "zh-TW": "潛水",
      "zh-CN": "潜水",
      "ko": "잠수하다",
      "vi": "lặn",
      "id": "menyelam"
    },
    "pos": "verb-godan",
    "ex": "潜ることにする"
  },
  {
    "id": "V1361",
    "w": "文字",
    "r": "もじ",
    "m": {
      "en": "letter",
      "zh-TW": "文字",
      "zh-CN": "文字",
      "ko": "문자",
      "vi": "chữ",
      "id": "huruf"
    },
    "pos": "noun",
    "ex": "文字について考える"
  },
  {
    "id": "V1362",
    "w": "もしも",
    "r": "もしも",
    "m": {
      "en": "if",
      "zh-TW": "如果",
      "zh-CN": "如果",
      "ko": "만약",
      "vi": "nếu",
      "id": "jika"
    },
    "pos": "noun",
    "ex": "もしもについて考える"
  },
  {
    "id": "V1363",
    "w": "戻す",
    "r": "もどす",
    "m": {
      "en": "to return",
      "zh-TW": "歸還",
      "zh-CN": "归还",
      "ko": "돌려주다",
      "vi": "trả lại",
      "id": "kembali"
    },
    "pos": "verb-godan",
    "ex": "戻すことにする"
  },
  {
    "id": "V1364",
    "w": "戻る",
    "r": "もどる",
    "m": {
      "en": "to return",
      "zh-TW": "返回",
      "zh-CN": "返回",
      "ko": "돌아가다",
      "vi": "quay lại",
      "id": "kembali"
    },
    "pos": "verb-godan",
    "ex": "家に戻る"
  },
  {
    "id": "V1365",
    "w": "求める",
    "r": "もとめる",
    "m": {
      "en": "to seek",
      "zh-TW": "尋求",
      "zh-CN": "寻求",
      "ko": "구하다",
      "vi": "tìm kiếm",
      "id": "mencari"
    },
    "pos": "verb-ichidan",
    "ex": "求めることにする"
  },
  {
    "id": "V1366",
    "w": "元",
    "r": "もと",
    "m": {
      "en": "origin",
      "zh-TW": "原",
      "zh-CN": "原",
      "ko": "원래",
      "vi": "gốc",
      "id": "asal"
    },
    "pos": "adverb",
    "ex": "元考える"
  },
  {
    "id": "V1367",
    "w": "物",
    "r": "もの",
    "m": {
      "en": "thing",
      "zh-TW": "東西",
      "zh-CN": "东西",
      "ko": "물건",
      "vi": "vật",
      "id": "benda"
    },
    "pos": "noun",
    "ex": "物について考える"
  },
  {
    "id": "V1368",
    "w": "燃える",
    "r": "もえる",
    "m": {
      "en": "to burn",
      "zh-TW": "燃燒",
      "zh-CN": "燃烧",
      "ko": "타다",
      "vi": "cháy",
      "id": "terbakar"
    },
    "pos": "verb-ichidan",
    "ex": "燃えることにする"
  },
  {
    "id": "V1369",
    "w": "燃やす",
    "r": "もやす",
    "m": {
      "en": "to burn",
      "zh-TW": "燒",
      "zh-CN": "烧",
      "ko": "태우다",
      "vi": "đốt",
      "id": "membakar"
    },
    "pos": "verb-godan",
    "ex": "燃やすことにする"
  },
  {
    "id": "V1370",
    "w": "森",
    "r": "もり",
    "m": {
      "en": "forest",
      "zh-TW": "森林",
      "zh-CN": "森林",
      "ko": "숲",
      "vi": "rừng",
      "id": "hutan"
    },
    "pos": "noun",
    "ex": "森を散歩する"
  },
  {
    "id": "V1371",
    "w": "漏れる",
    "r": "もれる",
    "m": {
      "en": "to leak",
      "zh-TW": "洩漏",
      "zh-CN": "泄漏",
      "ko": "새다",
      "vi": "rò rỉ",
      "id": "bocor"
    },
    "pos": "verb-ichidan",
    "ex": "漏れることにする"
  },
  {
    "id": "V1372",
    "w": "問題",
    "r": "もんだい",
    "m": {
      "en": "problem",
      "zh-TW": "問題",
      "zh-CN": "问题",
      "ko": "문제",
      "vi": "vấn đề",
      "id": "masalah"
    },
    "pos": "i-adj",
    "ex": "深刻な問題に直面する",
    "syn": [
      "課題",
      "トラブル",
      "難題"
    ]
  },
  {
    "id": "V1373",
    "w": "役",
    "r": "やく",
    "m": {
      "en": "role",
      "zh-TW": "角色",
      "zh-CN": "角色",
      "ko": "역할",
      "vi": "vai",
      "id": "peran"
    },
    "pos": "verb-godan",
    "ex": "役ことにする"
  },
  {
    "id": "V1374",
    "w": "約",
    "r": "やく",
    "m": {
      "en": "about",
      "zh-TW": "大約",
      "zh-CN": "大约",
      "ko": "약",
      "vi": "khoảng",
      "id": "sekitar"
    },
    "pos": "verb-godan",
    "ex": "約ことにする"
  },
  {
    "id": "V1375",
    "w": "約束",
    "r": "やくそく",
    "m": {
      "en": "promise",
      "zh-TW": "約定",
      "zh-CN": "约定",
      "ko": "약속",
      "vi": "hứa",
      "id": "janji"
    },
    "pos": "verb-godan",
    "ex": "約束を守る"
  },
  {
    "id": "V1376",
    "w": "役立つ",
    "r": "やくだつ",
    "m": {
      "en": "to be useful",
      "zh-TW": "有用",
      "zh-CN": "有用",
      "ko": "도움이되다",
      "vi": "hữu ích",
      "id": "berguna"
    },
    "pos": "verb-godan",
    "ex": "役立つことにする"
  },
  {
    "id": "V1377",
    "w": "役割",
    "r": "やくわり",
    "m": {
      "en": "role",
      "zh-TW": "角色",
      "zh-CN": "角色",
      "ko": "역할",
      "vi": "vai trò",
      "id": "peran"
    },
    "pos": "noun",
    "ex": "役割について考える"
  },
  {
    "id": "V1378",
    "w": "優しい",
    "r": "やさしい",
    "m": {
      "en": "gentle",
      "zh-TW": "溫柔",
      "zh-CN": "温柔",
      "ko": "상냥한",
      "vi": "hiền",
      "id": "lembut"
    },
    "pos": "i-adj",
    "ex": "優しい人だ"
  },
  {
    "id": "V1379",
    "w": "易しい",
    "r": "やさしい",
    "m": {
      "en": "easy",
      "zh-TW": "簡單",
      "zh-CN": "简单",
      "ko": "쉬운",
      "vi": "dễ",
      "id": "mudah"
    },
    "pos": "i-adj",
    "ex": "とても易しいと思う"
  },
  {
    "id": "V1380",
    "w": "野菜",
    "r": "やさい",
    "m": {
      "en": "vegetable",
      "zh-TW": "蔬菜",
      "zh-CN": "蔬菜",
      "ko": "야채",
      "vi": "rau",
      "id": "sayuran"
    },
    "pos": "i-adj",
    "ex": "とても野菜と思う"
  },
  {
    "id": "V1381",
    "w": "痩せる",
    "r": "やせる",
    "m": {
      "en": "to lose weight",
      "zh-TW": "變瘦",
      "zh-CN": "变瘦",
      "ko": "살빠지다",
      "vi": "gầy",
      "id": "kurus"
    },
    "pos": "verb-ichidan",
    "ex": "痩せることにする"
  },
  {
    "id": "V1382",
    "w": "休み",
    "r": "やすみ",
    "m": {
      "en": "rest",
      "zh-TW": "休息",
      "zh-CN": "休息",
      "ko": "휴식",
      "vi": "nghỉ",
      "id": "istirahat"
    },
    "pos": "noun",
    "ex": "休みについて考える"
  },
  {
    "id": "V1383",
    "w": "休む",
    "r": "やすむ",
    "m": {
      "en": "to rest",
      "zh-TW": "休息",
      "zh-CN": "休息",
      "ko": "쉬다",
      "vi": "nghỉ ngơi",
      "id": "istirahat"
    },
    "pos": "verb-godan",
    "ex": "仕事を休む"
  },
  {
    "id": "V1384",
    "w": "雇う",
    "r": "やとう",
    "m": {
      "en": "to employ",
      "zh-TW": "雇用",
      "zh-CN": "雇用",
      "ko": "고용하다",
      "vi": "thuê",
      "id": "mempekerjakan"
    },
    "pos": "verb-godan",
    "ex": "雇うことにする"
  },
  {
    "id": "V1385",
    "w": "やはり",
    "r": "やはり",
    "m": {
      "en": "as expected",
      "zh-TW": "果然",
      "zh-CN": "果然",
      "ko": "역시",
      "vi": "quả nhiên",
      "id": "seperti yang diharapkan"
    },
    "pos": "noun",
    "ex": "やはりについて考える"
  },
  {
    "id": "V1386",
    "w": "破る",
    "r": "やぶる",
    "m": {
      "en": "to break",
      "zh-TW": "打破",
      "zh-CN": "打破",
      "ko": "깨다",
      "vi": "phá",
      "id": "memecahkan"
    },
    "pos": "verb-godan",
    "ex": "破ることにする"
  },
  {
    "id": "V1387",
    "w": "破れる",
    "r": "やぶれる",
    "m": {
      "en": "to be torn",
      "zh-TW": "破",
      "zh-CN": "破",
      "ko": "찢어지다",
      "vi": "rách",
      "id": "sobek"
    },
    "pos": "verb-ichidan",
    "ex": "破れることにする"
  },
  {
    "id": "V1388",
    "w": "山",
    "r": "やま",
    "m": {
      "en": "mountain",
      "zh-TW": "山",
      "zh-CN": "山",
      "ko": "산",
      "vi": "núi",
      "id": "gunung"
    },
    "pos": "noun",
    "ex": "山について考える"
  },
  {
    "id": "V1389",
    "w": "辞める",
    "r": "やめる",
    "m": {
      "en": "to quit",
      "zh-TW": "辭職",
      "zh-CN": "辞职",
      "ko": "그만두다",
      "vi": "nghỉ",
      "id": "berhenti"
    },
    "pos": "verb-ichidan",
    "ex": "辞めることにする"
  },
  {
    "id": "V1390",
    "w": "やや",
    "r": "やや",
    "m": {
      "en": "slightly",
      "zh-TW": "稍微",
      "zh-CN": "稍微",
      "ko": "약간",
      "vi": "hơi",
      "id": "agak"
    },
    "pos": "noun",
    "ex": "ややについて考える"
  },
  {
    "id": "V1391",
    "w": "勇気",
    "r": "ゆうき",
    "m": {
      "en": "courage",
      "zh-TW": "勇氣",
      "zh-CN": "勇气",
      "ko": "용기",
      "vi": "dũng khí",
      "id": "keberanian"
    },
    "pos": "noun",
    "ex": "勇気について考える"
  },
  {
    "id": "V1392",
    "w": "有効",
    "r": "ゆうこう",
    "m": {
      "en": "effective",
      "zh-TW": "有效",
      "zh-CN": "有效",
      "ko": "유효",
      "vi": "có hiệu lực",
      "id": "efektif"
    },
    "pos": "verb-godan",
    "ex": "有効ことにする"
  },
  {
    "id": "V1393",
    "w": "優秀",
    "r": "ゆうしゅう",
    "m": {
      "en": "excellent",
      "zh-TW": "優秀",
      "zh-CN": "优秀",
      "ko": "우수",
      "vi": "xuất sắc",
      "id": "unggul"
    },
    "pos": "verb-godan",
    "ex": "優秀ことにする"
  },
  {
    "id": "V1394",
    "w": "友人",
    "r": "ゆうじん",
    "m": {
      "en": "friend",
      "zh-TW": "朋友",
      "zh-CN": "朋友",
      "ko": "친구",
      "vi": "bạn",
      "id": "teman"
    },
    "pos": "noun",
    "ex": "友人について考える"
  },
  {
    "id": "V1395",
    "w": "夕方",
    "r": "ゆうがた",
    "m": {
      "en": "evening",
      "zh-TW": "傍晚",
      "zh-CN": "傍晚",
      "ko": "저녁",
      "vi": "chiều tối",
      "id": "malam"
    },
    "pos": "noun",
    "ex": "夕方について考える"
  },
  {
    "id": "V1396",
    "w": "有利",
    "r": "ゆうり",
    "m": {
      "en": "advantageous",
      "zh-TW": "有利",
      "zh-CN": "有利",
      "ko": "유리",
      "vi": "có lợi",
      "id": "menguntungkan"
    },
    "pos": "noun",
    "ex": "有利について考える"
  },
  {
    "id": "V1397",
    "w": "豊か",
    "r": "ゆたか",
    "m": {
      "en": "rich",
      "zh-TW": "豐富",
      "zh-CN": "丰富",
      "ko": "풍부한",
      "vi": "phong phú",
      "id": "kaya"
    },
    "pos": "noun",
    "ex": "豊かについて考える",
    "syn": [
      "豊富",
      "恵まれた",
      "潤沢"
    ]
  },
  {
    "id": "V1398",
    "w": "輸出",
    "r": "ゆしゅつ",
    "m": {
      "en": "export",
      "zh-TW": "出口",
      "zh-CN": "出口",
      "ko": "수출",
      "vi": "xuất khẩu",
      "id": "ekspor"
    },
    "pos": "verb-godan",
    "ex": "輸出ことにする"
  },
  {
    "id": "V1399",
    "w": "輸入",
    "r": "ゆにゅう",
    "m": {
      "en": "import",
      "zh-TW": "進口",
      "zh-CN": "进口",
      "ko": "수입",
      "vi": "nhập khẩu",
      "id": "impor"
    },
    "pos": "verb-godan",
    "ex": "輸入ことにする"
  },
  {
    "id": "V1400",
    "w": "揺れる",
    "r": "ゆれる",
    "m": {
      "en": "to shake",
      "zh-TW": "搖晃",
      "zh-CN": "摇晃",
      "ko": "흔들리다",
      "vi": "rung",
      "id": "bergoyang"
    },
    "pos": "verb-ichidan",
    "ex": "揺れることにする"
  },
  {
    "id": "V1401",
    "w": "許す",
    "r": "ゆるす",
    "m": {
      "en": "to forgive",
      "zh-TW": "原諒",
      "zh-CN": "原谅",
      "ko": "용서하다",
      "vi": "tha thứ",
      "id": "memaafkan"
    },
    "pos": "verb-godan",
    "ex": "失敗を許す"
  },
  {
    "id": "V1402",
    "w": "緩む",
    "r": "ゆるむ",
    "m": {
      "en": "to loosen",
      "zh-TW": "鬆弛",
      "zh-CN": "松弛",
      "ko": "느슨해지다",
      "vi": "lỏng",
      "id": "mengendur"
    },
    "pos": "verb-godan",
    "ex": "緩むことにする"
  },
  {
    "id": "V1403",
    "w": "夢",
    "r": "ゆめ",
    "m": {
      "en": "dream",
      "zh-TW": "夢",
      "zh-CN": "梦",
      "ko": "꿈",
      "vi": "mơ",
      "id": "mimpi"
    },
    "pos": "noun",
    "ex": "夢を見る"
  },
  {
    "id": "V1404",
    "w": "用意",
    "r": "ようい",
    "m": {
      "en": "preparation",
      "zh-TW": "準備",
      "zh-CN": "准备",
      "ko": "준비",
      "vi": "chuẩn bị",
      "id": "persiapan"
    },
    "pos": "i-adj",
    "ex": "とても用意と思う"
  },
  {
    "id": "V1405",
    "w": "要求",
    "r": "ようきゅう",
    "m": {
      "en": "demand",
      "zh-TW": "要求",
      "zh-CN": "要求",
      "ko": "요구",
      "vi": "yêu cầu",
      "id": "tuntutan"
    },
    "pos": "verb-godan",
    "ex": "要求ことにする"
  },
  {
    "id": "V1406",
    "w": "容器",
    "r": "ようき",
    "m": {
      "en": "container",
      "zh-TW": "容器",
      "zh-CN": "容器",
      "ko": "용기",
      "vi": "đồ đựng",
      "id": "wadah"
    },
    "pos": "noun",
    "ex": "容器について考える"
  },
  {
    "id": "V1407",
    "w": "要素",
    "r": "ようそ",
    "m": {
      "en": "element",
      "zh-TW": "要素",
      "zh-CN": "要素",
      "ko": "요소",
      "vi": "yếu tố",
      "id": "unsur"
    },
    "pos": "noun",
    "ex": "要素について考える"
  },
  {
    "id": "V1408",
    "w": "要点",
    "r": "ようてん",
    "m": {
      "en": "main point",
      "zh-TW": "要點",
      "zh-CN": "要点",
      "ko": "요점",
      "vi": "điểm chính",
      "id": "poin utama"
    },
    "pos": "noun",
    "ex": "要点について考える"
  },
  {
    "id": "V1409",
    "w": "容量",
    "r": "ようりょう",
    "m": {
      "en": "capacity",
      "zh-TW": "容量",
      "zh-CN": "容量",
      "ko": "용량",
      "vi": "dung lượng",
      "id": "kapasitas"
    },
    "pos": "verb-godan",
    "ex": "容量ことにする"
  },
  {
    "id": "V1410",
    "w": "要領",
    "r": "ようりょう",
    "m": {
      "en": "point",
      "zh-TW": "要領",
      "zh-CN": "要领",
      "ko": "요령",
      "vi": "bí quyết",
      "id": "inti"
    },
    "pos": "verb-godan",
    "ex": "要領ことにする"
  },
  {
    "id": "V1411",
    "w": "汚れる",
    "r": "よごれる",
    "m": {
      "en": "to get dirty",
      "zh-TW": "弄髒",
      "zh-CN": "弄脏",
      "ko": "더러워지다",
      "vi": "bẩn",
      "id": "kotor"
    },
    "pos": "verb-ichidan",
    "ex": "汚れることにする"
  },
  {
    "id": "V1412",
    "w": "横",
    "r": "よこ",
    "m": {
      "en": "side",
      "zh-TW": "旁邊",
      "zh-CN": "旁边",
      "ko": "옆",
      "vi": "bên cạnh",
      "id": "samping"
    },
    "pos": "noun",
    "ex": "横について考える"
  },
  {
    "id": "V1413",
    "w": "予算",
    "r": "よさん",
    "m": {
      "en": "budget",
      "zh-TW": "預算",
      "zh-CN": "预算",
      "ko": "예산",
      "vi": "ngân sách",
      "id": "anggaran"
    },
    "pos": "noun",
    "ex": "予算について考える"
  },
  {
    "id": "V1414",
    "w": "予想",
    "r": "よそう",
    "m": {
      "en": "expectation",
      "zh-TW": "預想",
      "zh-CN": "预想",
      "ko": "예상",
      "vi": "dự đoán",
      "id": "perkiraan"
    },
    "pos": "verb-godan",
    "ex": "予想ことにする",
    "syn": [
      "予測する",
      "見込む",
      "想定する"
    ]
  },
  {
    "id": "V1415",
    "w": "予測",
    "r": "よそく",
    "m": {
      "en": "prediction",
      "zh-TW": "預測",
      "zh-CN": "预测",
      "ko": "예측",
      "vi": "dự báo",
      "id": "prediksi"
    },
    "pos": "verb-godan",
    "ex": "予測ことにする"
  },
  {
    "id": "V1416",
    "w": "余分",
    "r": "よぶん",
    "m": {
      "en": "extra",
      "zh-TW": "多餘",
      "zh-CN": "多余",
      "ko": "여분",
      "vi": "dư",
      "id": "ekstra"
    },
    "pos": "noun",
    "ex": "余分について考える"
  },
  {
    "id": "V1417",
    "w": "予防",
    "r": "よぼう",
    "m": {
      "en": "prevention",
      "zh-TW": "預防",
      "zh-CN": "预防",
      "ko": "예방",
      "vi": "phòng ngừa",
      "id": "pencegahan"
    },
    "pos": "verb-godan",
    "ex": "予防ことにする"
  },
  {
    "id": "V1418",
    "w": "読み取る",
    "r": "よみとる",
    "m": {
      "en": "to read",
      "zh-TW": "讀取",
      "zh-CN": "读取",
      "ko": "읽어내다",
      "vi": "đọc",
      "id": "membaca"
    },
    "pos": "verb-godan",
    "ex": "読み取ることにする"
  },
  {
    "id": "V1419",
    "w": "読む",
    "r": "よむ",
    "m": {
      "en": "to read",
      "zh-TW": "讀",
      "zh-CN": "读",
      "ko": "읽다",
      "vi": "đọc",
      "id": "membaca"
    },
    "pos": "verb-godan",
    "ex": "新聞を読む"
  },
  {
    "id": "V1420",
    "w": "寄る",
    "r": "よる",
    "m": {
      "en": "to stop by",
      "zh-TW": "靠近",
      "zh-CN": "靠近",
      "ko": "들르다",
      "vi": "ghé",
      "id": "mampir"
    },
    "pos": "verb-godan",
    "ex": "寄ることにする"
  },
  {
    "id": "V1421",
    "w": "夜",
    "r": "よる",
    "m": {
      "en": "night",
      "zh-TW": "晚上",
      "zh-CN": "晚上",
      "ko": "밤",
      "vi": "đêm",
      "id": "malam"
    },
    "pos": "verb-godan",
    "ex": "夜遅くまで働く"
  },
  {
    "id": "V1422",
    "w": "喜び",
    "r": "よろこび",
    "m": {
      "en": "joy",
      "zh-TW": "喜悅",
      "zh-CN": "喜悦",
      "ko": "기쁨",
      "vi": "niềm vui",
      "id": "kegembiraan"
    },
    "pos": "noun",
    "ex": "喜びについて考える"
  },
  {
    "id": "V1423",
    "w": "喜ぶ",
    "r": "よろこぶ",
    "m": {
      "en": "to be happy",
      "zh-TW": "高興",
      "zh-CN": "高兴",
      "ko": "기뻐하다",
      "vi": "vui",
      "id": "senang"
    },
    "pos": "verb-godan",
    "ex": "合格を喜ぶ",
    "syn": [
      "嬉しがる",
      "歓喜する",
      "喜悦する"
    ]
  },
  {
    "id": "V1424",
    "w": "弱い",
    "r": "よわい",
    "m": {
      "en": "weak",
      "zh-TW": "弱",
      "zh-CN": "弱",
      "ko": "약한",
      "vi": "yếu",
      "id": "lemah"
    },
    "pos": "i-adj",
    "ex": "体が弱い"
  },
  {
    "id": "V1425",
    "w": "弱まる",
    "r": "よわまる",
    "m": {
      "en": "to weaken",
      "zh-TW": "減弱",
      "zh-CN": "减弱",
      "ko": "약해지다",
      "vi": "yếu đi",
      "id": "melemah"
    },
    "pos": "verb-godan",
    "ex": "弱まることにする"
  },
  {
    "id": "V1426",
    "w": "弱める",
    "r": "よわめる",
    "m": {
      "en": "to weaken",
      "zh-TW": "削弱",
      "zh-CN": "削弱",
      "ko": "약화시키다",
      "vi": "làm yếu",
      "id": "melemahkan"
    },
    "pos": "verb-ichidan",
    "ex": "弱めることにする"
  },
  {
    "id": "V1427",
    "w": "来月",
    "r": "らいげつ",
    "m": {
      "en": "next month",
      "zh-TW": "下個月",
      "zh-CN": "下个月",
      "ko": "다음달",
      "vi": "tháng sau",
      "id": "bulan depan"
    },
    "pos": "verb-godan",
    "ex": "来月ことにする"
  },
  {
    "id": "V1428",
    "w": "来週",
    "r": "らいしゅう",
    "m": {
      "en": "next week",
      "zh-TW": "下週",
      "zh-CN": "下周",
      "ko": "다음주",
      "vi": "tuần sau",
      "id": "minggu depan"
    },
    "pos": "verb-godan",
    "ex": "来週ことにする"
  },
  {
    "id": "V1429",
    "w": "来年",
    "r": "らいねん",
    "m": {
      "en": "next year",
      "zh-TW": "明年",
      "zh-CN": "明年",
      "ko": "내년",
      "vi": "năm sau",
      "id": "tahun depan"
    },
    "pos": "noun",
    "ex": "来年について考える"
  },
  {
    "id": "V1430",
    "w": "落下",
    "r": "らっか",
    "m": {
      "en": "fall",
      "zh-TW": "墜落",
      "zh-CN": "坠落",
      "ko": "낙하",
      "vi": "rơi",
      "id": "jatuh"
    },
    "pos": "noun",
    "ex": "落下について考える"
  },
  {
    "id": "V1431",
    "w": "ラッシュ",
    "r": "らっしゅ",
    "m": {
      "en": "rush",
      "zh-TW": "高峰",
      "zh-CN": "高峰",
      "ko": "러시",
      "vi": "giờ cao điểm",
      "id": "jam sibuk"
    },
    "pos": "noun",
    "ex": "ラッシュについて考える"
  },
  {
    "id": "V1432",
    "w": "利益",
    "r": "りえき",
    "m": {
      "en": "profit",
      "zh-TW": "利益",
      "zh-CN": "利益",
      "ko": "이익",
      "vi": "lợi nhuận",
      "id": "keuntungan"
    },
    "pos": "noun",
    "ex": "利益について考える"
  },
  {
    "id": "V1433",
    "w": "理解",
    "r": "りかい",
    "m": {
      "en": "understanding",
      "zh-TW": "理解",
      "zh-CN": "理解",
      "ko": "이해",
      "vi": "hiểu",
      "id": "pemahaman"
    },
    "pos": "i-adj",
    "ex": "とても理解と思う",
    "syn": [
      "分かる",
      "把握する",
      "了解する"
    ]
  },
  {
    "id": "V1434",
    "w": "陸",
    "r": "りく",
    "m": {
      "en": "land",
      "zh-TW": "陸地",
      "zh-CN": "陆地",
      "ko": "육지",
      "vi": "đất liền",
      "id": "daratan"
    },
    "pos": "verb-godan",
    "ex": "陸ことにする"
  },
  {
    "id": "V1435",
    "w": "利口",
    "r": "りこう",
    "m": {
      "en": "clever",
      "zh-TW": "聰明",
      "zh-CN": "聪明",
      "ko": "영리한",
      "vi": "thông minh",
      "id": "pintar"
    },
    "pos": "verb-godan",
    "ex": "利口ことにする"
  },
  {
    "id": "V1436",
    "w": "理想",
    "r": "りそう",
    "m": {
      "en": "ideal",
      "zh-TW": "理想",
      "zh-CN": "理想",
      "ko": "이상",
      "vi": "lý tưởng",
      "id": "ideal"
    },
    "pos": "verb-godan",
    "ex": "理想ことにする"
  },
  {
    "id": "V1437",
    "w": "立場",
    "r": "たちば",
    "m": {
      "en": "position",
      "zh-TW": "立場",
      "zh-CN": "立场",
      "ko": "입장",
      "vi": "lập trường",
      "id": "posisi"
    },
    "pos": "noun",
    "ex": "立場について考える"
  },
  {
    "id": "V1438",
    "w": "流通",
    "r": "りゅうつう",
    "m": {
      "en": "distribution",
      "zh-TW": "流通",
      "zh-CN": "流通",
      "ko": "유통",
      "vi": "lưu thông",
      "id": "distribusi"
    },
    "pos": "verb-godan",
    "ex": "流通ことにする"
  },
  {
    "id": "V1439",
    "w": "利用",
    "r": "りよう",
    "m": {
      "en": "use",
      "zh-TW": "利用",
      "zh-CN": "利用",
      "ko": "이용",
      "vi": "sử dụng",
      "id": "penggunaan"
    },
    "pos": "verb-godan",
    "ex": "公共交通機関を利用する"
  },
  {
    "id": "V1440",
    "w": "両方",
    "r": "りょうほう",
    "m": {
      "en": "both",
      "zh-TW": "兩方",
      "zh-CN": "两方",
      "ko": "양쪽",
      "vi": "cả hai",
      "id": "kedua"
    },
    "pos": "verb-godan",
    "ex": "両方ことにする"
  },
  {
    "id": "V1441",
    "w": "旅行",
    "r": "りょこう",
    "m": {
      "en": "trip",
      "zh-TW": "旅行",
      "zh-CN": "旅行",
      "ko": "여행",
      "vi": "du lịch",
      "id": "perjalanan"
    },
    "pos": "verb-godan",
    "ex": "海外旅行に行く"
  },
  {
    "id": "V1442",
    "w": "履歴",
    "r": "りれき",
    "m": {
      "en": "history",
      "zh-TW": "履歷",
      "zh-CN": "履历",
      "ko": "이력",
      "vi": "lý lịch",
      "id": "riwayat"
    },
    "pos": "noun",
    "ex": "履歴について考える"
  },
  {
    "id": "V1443",
    "w": "理論",
    "r": "りろん",
    "m": {
      "en": "theory",
      "zh-TW": "理論",
      "zh-CN": "理论",
      "ko": "이론",
      "vi": "lý thuyết",
      "id": "teori"
    },
    "pos": "noun",
    "ex": "理論について考える"
  },
  {
    "id": "V1444",
    "w": "類",
    "r": "るい",
    "m": {
      "en": "type",
      "zh-TW": "類",
      "zh-CN": "类",
      "ko": "류",
      "vi": "loại",
      "id": "jenis"
    },
    "pos": "i-adj",
    "ex": "とても類と思う"
  },
  {
    "id": "V1445",
    "w": "留守",
    "r": "るす",
    "m": {
      "en": "absence",
      "zh-TW": "不在家",
      "zh-CN": "不在家",
      "ko": "부재",
      "vi": "vắng nhà",
      "id": "tidak ada"
    },
    "pos": "verb-godan",
    "ex": "留守ことにする"
  },
  {
    "id": "V1446",
    "w": "例",
    "r": "れい",
    "m": {
      "en": "example",
      "zh-TW": "例子",
      "zh-CN": "例子",
      "ko": "예",
      "vi": "ví dụ",
      "id": "contoh"
    },
    "pos": "i-adj",
    "ex": "とても例と思う"
  },
  {
    "id": "V1447",
    "w": "礼",
    "r": "れい",
    "m": {
      "en": "bow",
      "zh-TW": "禮",
      "zh-CN": "礼",
      "ko": "인사",
      "vi": "lễ",
      "id": "hormat"
    },
    "pos": "i-adj",
    "ex": "とても礼と思う"
  },
  {
    "id": "V1448",
    "w": "冷静",
    "r": "れいせい",
    "m": {
      "en": "calm",
      "zh-TW": "冷靜",
      "zh-CN": "冷静",
      "ko": "냉정",
      "vi": "bình tĩnh",
      "id": "tenang"
    },
    "pos": "i-adj",
    "ex": "とても冷静と思う"
  },
  {
    "id": "V1449",
    "w": "例外",
    "r": "れいがい",
    "m": {
      "en": "exception",
      "zh-TW": "例外",
      "zh-CN": "例外",
      "ko": "예외",
      "vi": "ngoại lệ",
      "id": "pengecualian"
    },
    "pos": "i-adj",
    "ex": "とても例外と思う"
  },
  {
    "id": "V1450",
    "w": "歴史",
    "r": "れきし",
    "m": {
      "en": "history",
      "zh-TW": "歷史",
      "zh-CN": "历史",
      "ko": "역사",
      "vi": "lịch sử",
      "id": "sejarah"
    },
    "pos": "noun",
    "ex": "歴史について考える"
  },
  {
    "id": "V1451",
    "w": "列",
    "r": "れつ",
    "m": {
      "en": "line",
      "zh-TW": "列",
      "zh-CN": "列",
      "ko": "열",
      "vi": "hàng",
      "id": "baris"
    },
    "pos": "verb-godan",
    "ex": "列ことにする"
  },
  {
    "id": "V1452",
    "w": "連続",
    "r": "れんぞく",
    "m": {
      "en": "continuous",
      "zh-TW": "連續",
      "zh-CN": "连续",
      "ko": "연속",
      "vi": "liên tục",
      "id": "berturut-turut"
    },
    "pos": "verb-godan",
    "ex": "連続ことにする"
  },
  {
    "id": "V1453",
    "w": "連絡",
    "r": "れんらく",
    "m": {
      "en": "contact",
      "zh-TW": "聯絡",
      "zh-CN": "联络",
      "ko": "연락",
      "vi": "liên lạc",
      "id": "kontak"
    },
    "pos": "verb-godan",
    "ex": "友達に連絡する",
    "syn": [
      "通知",
      "報告",
      "コンタクト"
    ]
  },
  {
    "id": "V1454",
    "w": "労働",
    "r": "ろうどう",
    "m": {
      "en": "labor",
      "zh-TW": "勞動",
      "zh-CN": "劳动",
      "ko": "노동",
      "vi": "lao động",
      "id": "tenaga kerja"
    },
    "pos": "verb-godan",
    "ex": "労働ことにする"
  },
  {
    "id": "V1455",
    "w": "老人",
    "r": "ろうじん",
    "m": {
      "en": "elderly",
      "zh-TW": "老人",
      "zh-CN": "老人",
      "ko": "노인",
      "vi": "người già",
      "id": "orang tua"
    },
    "pos": "noun",
    "ex": "老人について考える"
  },
  {
    "id": "V1456",
    "w": "録音",
    "r": "ろくおん",
    "m": {
      "en": "recording",
      "zh-TW": "錄音",
      "zh-CN": "录音",
      "ko": "녹음",
      "vi": "ghi âm",
      "id": "rekaman"
    },
    "pos": "noun",
    "ex": "録音について考える"
  },
  {
    "id": "V1457",
    "w": "論文",
    "r": "ろんぶん",
    "m": {
      "en": "thesis",
      "zh-TW": "論文",
      "zh-CN": "论文",
      "ko": "논문",
      "vi": "luận văn",
      "id": "makalah"
    },
    "pos": "noun",
    "ex": "論文について考える"
  },
  {
    "id": "V1458",
    "w": "話題",
    "r": "わだい",
    "m": {
      "en": "topic",
      "zh-TW": "話題",
      "zh-CN": "话题",
      "ko": "화제",
      "vi": "đề tài",
      "id": "topik"
    },
    "pos": "i-adj",
    "ex": "とても話題と思う"
  },
  {
    "id": "V1459",
    "w": "分かる",
    "r": "わかる",
    "m": {
      "en": "to understand",
      "zh-TW": "明白",
      "zh-CN": "明白",
      "ko": "알다",
      "vi": "hiểu",
      "id": "mengerti"
    },
    "pos": "verb-godan",
    "ex": "意味が分かる"
  },
  {
    "id": "V1460",
    "w": "別れる",
    "r": "わかれる",
    "m": {
      "en": "to separate",
      "zh-TW": "分離",
      "zh-CN": "分离",
      "ko": "헤어지다",
      "vi": "tách",
      "id": "memisahkan"
    },
    "pos": "verb-ichidan",
    "ex": "別れることにする"
  },
  {
    "id": "V1461",
    "w": "分ける",
    "r": "わける",
    "m": {
      "en": "to divide",
      "zh-TW": "分開",
      "zh-CN": "分开",
      "ko": "나누다",
      "vi": "chia",
      "id": "membagi"
    },
    "pos": "verb-ichidan",
    "ex": "分けることにする"
  },
  {
    "id": "V1462",
    "w": "忘れる",
    "r": "わすれる",
    "m": {
      "en": "to forget",
      "zh-TW": "忘記",
      "zh-CN": "忘记",
      "ko": "잊다",
      "vi": "quên",
      "id": "lupa"
    },
    "pos": "verb-ichidan",
    "ex": "忘れることにする"
  },
  {
    "id": "V1463",
    "w": "渡す",
    "r": "わたす",
    "m": {
      "en": "to hand over",
      "zh-TW": "交給",
      "zh-CN": "交给",
      "ko": "건네다",
      "vi": "đưa",
      "id": "menyerahkan"
    },
    "pos": "verb-godan",
    "ex": "渡すことにする"
  },
  {
    "id": "V1464",
    "w": "渡る",
    "r": "わたる",
    "m": {
      "en": "to cross",
      "zh-TW": "渡過",
      "zh-CN": "渡过",
      "ko": "건너다",
      "vi": "qua",
      "id": "menyeberang"
    },
    "pos": "verb-godan",
    "ex": "渡ることにする"
  },
  {
    "id": "V1465",
    "w": "笑い",
    "r": "わらい",
    "m": {
      "en": "laugh",
      "zh-TW": "笑",
      "zh-CN": "笑",
      "ko": "웃음",
      "vi": "cười",
      "id": "tawa"
    },
    "pos": "i-adj",
    "ex": "とても笑いと思う"
  },
  {
    "id": "V1466",
    "w": "笑う",
    "r": "わらう",
    "m": {
      "en": "to laugh",
      "zh-TW": "笑",
      "zh-CN": "笑",
      "ko": "웃다",
      "vi": "cười",
      "id": "tertawa"
    },
    "pos": "verb-godan",
    "ex": "面白くて笑う"
  },
  {
    "id": "V1467",
    "w": "割合",
    "r": "わりあい",
    "m": {
      "en": "ratio",
      "zh-TW": "比例",
      "zh-CN": "比例",
      "ko": "비율",
      "vi": "tỉ lệ",
      "id": "rasio"
    },
    "pos": "i-adj",
    "ex": "とても割合と思う"
  },
  {
    "id": "V1468",
    "w": "割り当て",
    "r": "わりあて",
    "m": {
      "en": "allocation",
      "zh-TW": "分配",
      "zh-CN": "分配",
      "ko": "할당",
      "vi": "phân bổ",
      "id": "alokasi"
    },
    "pos": "noun",
    "ex": "割り当てについて考える"
  },
  {
    "id": "V1469",
    "w": "割る",
    "r": "わる",
    "m": {
      "en": "to divide",
      "zh-TW": "除",
      "zh-CN": "除",
      "ko": "나누다",
      "vi": "chia",
      "id": "membagi"
    },
    "pos": "verb-godan",
    "ex": "割ることにする"
  },
  {
    "id": "V1470",
    "w": "悪い",
    "r": "わるい",
    "m": {
      "en": "bad",
      "zh-TW": "壞",
      "zh-CN": "坏",
      "ko": "나쁜",
      "vi": "xấu",
      "id": "buruk"
    },
    "pos": "i-adj",
    "ex": "天気が悪い"
  },
  {
    "id": "V1471",
    "w": "我々",
    "r": "われわれ",
    "m": {
      "en": "we",
      "zh-TW": "我們",
      "zh-CN": "我们",
      "ko": "우리",
      "vi": "chúng ta",
      "id": "kami"
    },
    "pos": "noun",
    "ex": "我々について考える"
  },
  {
    "id": "V1472",
    "w": "腕",
    "r": "うで",
    "m": {
      "en": "arm",
      "zh-TW": "手臂",
      "zh-CN": "手臂",
      "ko": "팔",
      "vi": "cánh tay",
      "id": "lengan"
    },
    "pos": "noun",
    "ex": "腕について考える"
  },
  {
    "id": "V1473",
    "w": "海",
    "r": "うみ",
    "m": {
      "en": "sea",
      "zh-TW": "海",
      "zh-CN": "海",
      "ko": "바다",
      "vi": "biển",
      "id": "laut"
    },
    "pos": "noun",
    "ex": "夏に海で泳ぐ"
  },
  {
    "id": "V1474",
    "w": "売る",
    "r": "うる",
    "m": {
      "en": "to sell",
      "zh-TW": "賣",
      "zh-CN": "卖",
      "ko": "팔다",
      "vi": "bán",
      "id": "menjual"
    },
    "pos": "verb-godan",
    "ex": "古い本を売る"
  },
  {
    "id": "V1475",
    "w": "嬉しい",
    "r": "うれしい",
    "m": {
      "en": "happy",
      "zh-TW": "高興",
      "zh-CN": "高兴",
      "ko": "기쁜",
      "vi": "vui",
      "id": "bahagia"
    },
    "pos": "i-adj",
    "ex": "プレゼントをもらって嬉しい"
  },
  {
    "id": "V1476",
    "w": "上",
    "r": "うえ",
    "m": {
      "en": "above",
      "zh-TW": "上面",
      "zh-CN": "上面",
      "ko": "위",
      "vi": "trên",
      "id": "atas"
    },
    "pos": "noun",
    "ex": "棚の上に置く"
  },
  {
    "id": "V1477",
    "w": "動く",
    "r": "うごく",
    "m": {
      "en": "to move",
      "zh-TW": "移動",
      "zh-CN": "移动",
      "ko": "움직이다",
      "vi": "chuyển động",
      "id": "bergerak"
    },
    "pos": "verb-godan",
    "ex": "電車が動き始めた"
  },
  {
    "id": "V1478",
    "w": "後ろ",
    "r": "うしろ",
    "m": {
      "en": "behind",
      "zh-TW": "後面",
      "zh-CN": "后面",
      "ko": "뒤",
      "vi": "sau",
      "id": "belakang"
    },
    "pos": "noun",
    "ex": "後ろについて考える"
  },
  {
    "id": "V1479",
    "w": "受ける",
    "r": "うける",
    "m": {
      "en": "to receive",
      "zh-TW": "接受",
      "zh-CN": "接受",
      "ko": "받다",
      "vi": "nhận",
      "id": "menerima"
    },
    "pos": "verb-ichidan",
    "ex": "試験を受ける"
  },
  {
    "id": "V1480",
    "w": "馬",
    "r": "うま",
    "m": {
      "en": "horse",
      "zh-TW": "馬",
      "zh-CN": "马",
      "ko": "말",
      "vi": "ngựa",
      "id": "kuda"
    },
    "pos": "noun",
    "ex": "馬に乗る体験をした"
  },
  {
    "id": "V1481",
    "w": "生む",
    "r": "うむ",
    "m": {
      "en": "to give birth",
      "zh-TW": "生",
      "zh-CN": "生",
      "ko": "낳다",
      "vi": "sinh",
      "id": "melahirkan"
    },
    "pos": "verb-godan",
    "ex": "生むことにする"
  },
  {
    "id": "V1482",
    "w": "売れる",
    "r": "うれる",
    "m": {
      "en": "to sell",
      "zh-TW": "賣出",
      "zh-CN": "卖出",
      "ko": "팔리다",
      "vi": "bán được",
      "id": "menjual"
    },
    "pos": "verb-ichidan",
    "ex": "売れることにする"
  },
  {
    "id": "V1483",
    "w": "得意",
    "r": "とくい",
    "m": {
      "en": "specialty",
      "zh-TW": "擅長",
      "zh-CN": "擅长",
      "ko": "특기",
      "vi": "giỏi",
      "id": "keahlian"
    },
    "pos": "i-adj",
    "ex": "とても得意と思う"
  },
  {
    "id": "V1484",
    "w": "特徴",
    "r": "とくちょう",
    "m": {
      "en": "feature",
      "zh-TW": "特徵",
      "zh-CN": "特征",
      "ko": "특징",
      "vi": "đặc điểm",
      "id": "ciri"
    },
    "pos": "verb-godan",
    "ex": "製品の特徴を説明する",
    "syn": [
      "特色",
      "特性",
      "個性"
    ]
  },
  {
    "id": "V1485",
    "w": "特定",
    "r": "とくてい",
    "m": {
      "en": "specific",
      "zh-TW": "特定",
      "zh-CN": "特定",
      "ko": "특정",
      "vi": "cụ thể",
      "id": "tertentu"
    },
    "pos": "i-adj",
    "ex": "とても特定と思う"
  },
  {
    "id": "V1486",
    "w": "独特",
    "r": "どくとく",
    "m": {
      "en": "unique",
      "zh-TW": "獨特",
      "zh-CN": "独特",
      "ko": "독특",
      "vi": "độc đáo",
      "id": "unik"
    },
    "pos": "verb-godan",
    "ex": "独特ことにする"
  },
  {
    "id": "V1487",
    "w": "特別",
    "r": "とくべつ",
    "m": {
      "en": "special",
      "zh-TW": "特別",
      "zh-CN": "特别",
      "ko": "특별",
      "vi": "đặc biệt",
      "id": "khusus"
    },
    "pos": "verb-godan",
    "ex": "特別ことにする"
  },
  {
    "id": "V1488",
    "w": "読者",
    "r": "どくしゃ",
    "m": {
      "en": "reader",
      "zh-TW": "讀者",
      "zh-CN": "读者",
      "ko": "독자",
      "vi": "độc giả",
      "id": "pembaca"
    },
    "pos": "noun",
    "ex": "読者について考える"
  },
  {
    "id": "V1489",
    "w": "独自",
    "r": "どくじ",
    "m": {
      "en": "original",
      "zh-TW": "獨自",
      "zh-CN": "独自",
      "ko": "독자",
      "vi": "riêng",
      "id": "mandiri"
    },
    "pos": "noun",
    "ex": "独自について考える"
  },
  {
    "id": "V1490",
    "w": "独立",
    "r": "どくりつ",
    "m": {
      "en": "independence",
      "zh-TW": "獨立",
      "zh-CN": "独立",
      "ko": "독립",
      "vi": "độc lập",
      "id": "kemerdekaan"
    },
    "pos": "verb-godan",
    "ex": "独立ことにする"
  },
  {
    "id": "V1491",
    "w": "何処",
    "r": "どこ",
    "m": {
      "en": "where",
      "zh-TW": "哪裡",
      "zh-CN": "哪里",
      "ko": "어디",
      "vi": "đâu",
      "id": "di mana"
    },
    "pos": "noun",
    "ex": "何処について考える"
  },
  {
    "id": "V1492",
    "w": "都市",
    "r": "とし",
    "m": {
      "en": "city",
      "zh-TW": "都市",
      "zh-CN": "都市",
      "ko": "도시",
      "vi": "thành phố",
      "id": "kota"
    },
    "pos": "noun",
    "ex": "都市について考える"
  },
  {
    "id": "V1493",
    "w": "年",
    "r": "とし",
    "m": {
      "en": "year",
      "zh-TW": "年",
      "zh-CN": "年",
      "ko": "해",
      "vi": "năm",
      "id": "tahun"
    },
    "pos": "noun",
    "ex": "年について考える"
  },
  {
    "id": "V1494",
    "w": "閉じる",
    "r": "とじる",
    "m": {
      "en": "to close",
      "zh-TW": "關閉",
      "zh-CN": "关闭",
      "ko": "닫다",
      "vi": "đóng",
      "id": "menutup"
    },
    "pos": "verb-godan",
    "ex": "閉じることにする"
  },
  {
    "id": "V1495",
    "w": "反省",
    "r": "はんせい",
    "m": {
      "en": "reflection",
      "zh-TW": "反省",
      "zh-CN": "反省",
      "ko": "반성",
      "vi": "suy nghĩ lại",
      "id": "refleksi"
    },
    "pos": "i-adj",
    "ex": "とても反省と思う"
  },
  {
    "id": "V1496",
    "w": "判明",
    "r": "はんめい",
    "m": {
      "en": "clarification",
      "zh-TW": "查明",
      "zh-CN": "查明",
      "ko": "판명",
      "vi": "làm rõ",
      "id": "klarifikasi"
    },
    "pos": "i-adj",
    "ex": "とても判明と思う"
  },
  {
    "id": "V1497",
    "w": "番号",
    "r": "ばんごう",
    "m": {
      "en": "number",
      "zh-TW": "號碼",
      "zh-CN": "号码",
      "ko": "번호",
      "vi": "số",
      "id": "nomor"
    },
    "pos": "verb-godan",
    "ex": "番号ことにする"
  },
  {
    "id": "V1498",
    "w": "万一",
    "r": "まんいち",
    "m": {
      "en": "by any chance",
      "zh-TW": "萬一",
      "zh-CN": "万一",
      "ko": "만일",
      "vi": "nếu chẳng may",
      "id": "jika kebetulan"
    },
    "pos": "noun",
    "ex": "万一について考える"
  },
  {
    "id": "V1499",
    "w": "万が一",
    "r": "まんがいち",
    "m": {
      "en": "if by any chance",
      "zh-TW": "萬一",
      "zh-CN": "万一",
      "ko": "만에 하나",
      "vi": "nếu chẳng may",
      "id": "jika kebetulan"
    },
    "pos": "noun",
    "ex": "万が一について考える"
  },
  {
    "id": "V1500",
    "w": "被害",
    "r": "ひがい",
    "m": {
      "en": "damage",
      "zh-TW": "損害",
      "zh-CN": "损害",
      "ko": "피해",
      "vi": "thiệt hại",
      "id": "kerusakan"
    },
    "pos": "i-adj",
    "ex": "とても被害と思う"
  },
  {
    "id": "V1501",
    "w": "東",
    "r": "ひがし",
    "m": {
      "en": "east",
      "zh-TW": "東",
      "zh-CN": "东",
      "ko": "동쪽",
      "vi": "phía đông",
      "id": "timur"
    },
    "pos": "noun",
    "ex": "東について考える"
  },
  {
    "id": "V1502",
    "w": "引き続き",
    "r": "ひきつづき",
    "m": {
      "en": "continuously",
      "zh-TW": "持續",
      "zh-CN": "持续",
      "ko": "계속해서",
      "vi": "liên tục",
      "id": "terus-menerus"
    },
    "pos": "noun",
    "ex": "引き続きについて考える"
  },
  {
    "id": "V1503",
    "w": "必ず",
    "r": "かならず",
    "m": {
      "en": "surely",
      "zh-TW": "一定",
      "zh-CN": "一定",
      "ko": "반드시",
      "vi": "chắc chắn",
      "id": "pasti"
    },
    "pos": "noun",
    "ex": "必ずについて考える"
  },
  {
    "id": "V1504",
    "w": "必要",
    "r": "ひつよう",
    "m": {
      "en": "necessary",
      "zh-TW": "必要",
      "zh-CN": "必要",
      "ko": "필요한",
      "vi": "Cần thiết",
      "id": "perlu"
    },
    "pos": "verb-godan",
    "ex": "必要な書類を準備する",
    "syn": [
      "不可欠",
      "必須",
      "欠かせない"
    ]
  },
  {
    "id": "V1505",
    "w": "人々",
    "r": "ひとびと",
    "m": {
      "en": "people",
      "zh-TW": "人們",
      "zh-CN": "人们",
      "ko": "사람들",
      "vi": "Mọi người",
      "id": "Orang-orang"
    },
    "pos": "adverb",
    "ex": "人々考える"
  },
  {
    "id": "V1506",
    "w": "日々",
    "r": "ひび",
    "m": {
      "en": "daily",
      "zh-TW": "每天",
      "zh-CN": "每天",
      "ko": "매일",
      "vi": "hàng ngày",
      "id": "sehari-hari"
    },
    "pos": "noun",
    "ex": "日々について考える"
  },
  {
    "id": "V1507",
    "w": "暇",
    "r": "ひま",
    "m": {
      "en": "free time",
      "zh-TW": "空閒",
      "zh-CN": "空闲",
      "ko": "여가",
      "vi": "thời gian rảnh",
      "id": "waktu luang"
    },
    "pos": "noun",
    "ex": "暇について考える"
  },
  {
    "id": "V1508",
    "w": "秘書",
    "r": "ひしょ",
    "m": {
      "en": "secretary",
      "zh-TW": "秘書",
      "zh-CN": "秘书",
      "ko": "비서",
      "vi": "thư ký",
      "id": "sekretaris"
    },
    "pos": "noun",
    "ex": "秘書について考える"
  },
  {
    "id": "V1509",
    "w": "美人",
    "r": "びじん",
    "m": {
      "en": "beauty",
      "zh-TW": "美女",
      "zh-CN": "美女",
      "ko": "미인",
      "vi": "người đẹp",
      "id": "kecantikan"
    },
    "pos": "noun",
    "ex": "美人について考える"
  },
  {
    "id": "V1510",
    "w": "微妙",
    "r": "びみょう",
    "m": {
      "en": "subtle",
      "zh-TW": "微妙",
      "zh-CN": "微妙",
      "ko": "미묘한",
      "vi": "tinh tế",
      "id": "halus"
    },
    "pos": "verb-godan",
    "ex": "微妙ことにする"
  },
  {
    "id": "V1511",
    "w": "病院",
    "r": "びょういん",
    "m": {
      "en": "hospital",
      "zh-TW": "醫院",
      "zh-CN": "医院",
      "ko": "병원",
      "vi": "bệnh viện",
      "id": "rumah sakit"
    },
    "pos": "noun",
    "ex": "病院について考える"
  },
  {
    "id": "V1512",
    "w": "病気",
    "r": "びょうき",
    "m": {
      "en": "illness",
      "zh-TW": "疾病",
      "zh-CN": "疾病",
      "ko": "병",
      "vi": "bệnh tật",
      "id": "penyakit"
    },
    "pos": "noun",
    "ex": "病気について考える"
  },
  {
    "id": "V1513",
    "w": "拾う",
    "r": "ひろう",
    "m": {
      "en": "to pick up",
      "zh-TW": "撿起",
      "zh-CN": "捡起",
      "ko": "줍다",
      "vi": "nhặt",
      "id": "mengambil"
    },
    "pos": "verb-godan",
    "ex": "拾うことにする"
  },
  {
    "id": "V1514",
    "w": "封筒",
    "r": "ふうとう",
    "m": {
      "en": "envelope",
      "zh-TW": "信封",
      "zh-CN": "信封",
      "ko": "봉투",
      "vi": "phong bì",
      "id": "amplop"
    },
    "pos": "verb-godan",
    "ex": "封筒ことにする"
  },
  {
    "id": "V1515",
    "w": "父",
    "r": "ちち",
    "m": {
      "en": "father",
      "zh-TW": "父親",
      "zh-CN": "父亲",
      "ko": "아버지",
      "vi": "cha",
      "id": "ayah"
    },
    "pos": "noun",
    "ex": "父は教師だ"
  },
  {
    "id": "V1516",
    "w": "部屋",
    "r": "へや",
    "m": {
      "en": "room",
      "zh-TW": "房間",
      "zh-CN": "房间",
      "ko": "방",
      "vi": "Phòng",
      "id": "kamar"
    },
    "pos": "noun",
    "ex": "部屋について考える"
  },
  {
    "id": "V1517",
    "w": "振り",
    "r": "ふり",
    "m": {
      "en": "pretense",
      "zh-TW": "假裝",
      "zh-CN": "假装",
      "ko": "척",
      "vi": "giả vờ",
      "id": "berpura-pura"
    },
    "pos": "noun",
    "ex": "振りについて考える"
  },
  {
    "id": "V1518",
    "w": "不満",
    "r": "ふまん",
    "m": {
      "en": "dissatisfaction",
      "zh-TW": "不滿",
      "zh-CN": "不满",
      "ko": "불만",
      "vi": "bất mãn",
      "id": "ketidakpuasan"
    },
    "pos": "noun",
    "ex": "不満について考える",
    "syn": [
      "不足",
      "物足りない",
      "不服"
    ]
  },
  {
    "id": "V1519",
    "w": "文",
    "r": "ぶん",
    "m": {
      "en": "sentence",
      "zh-TW": "句子",
      "zh-CN": "句子",
      "ko": "문장",
      "vi": "câu",
      "id": "kalimat"
    },
    "pos": "noun",
    "ex": "文について考える"
  },
  {
    "id": "V1520",
    "w": "分",
    "r": "ふん",
    "m": {
      "en": "minute",
      "zh-TW": "分鐘",
      "zh-CN": "分钟",
      "ko": "분",
      "vi": "phút",
      "id": "menit"
    },
    "pos": "noun",
    "ex": "分について考える"
  },
  {
    "id": "V1521",
    "w": "文章",
    "r": "ぶんしょう",
    "m": {
      "en": "text",
      "zh-TW": "文章",
      "zh-CN": "文章",
      "ko": "문장",
      "vi": "văn bản",
      "id": "teks"
    },
    "pos": "verb-godan",
    "ex": "文章ことにする"
  },
  {
    "id": "V1522",
    "w": "別",
    "r": "べつ",
    "m": {
      "en": "different",
      "zh-TW": "不同",
      "zh-CN": "不同",
      "ko": "다른",
      "vi": "Khác",
      "id": "berbeda"
    },
    "pos": "verb-godan",
    "ex": "別ことにする"
  },
  {
    "id": "V1523",
    "w": "別々",
    "r": "べつべつ",
    "m": {
      "en": "separately",
      "zh-TW": "分別",
      "zh-CN": "分别",
      "ko": "따로따로",
      "vi": "riêng biệt",
      "id": "terpisah"
    },
    "pos": "verb-godan",
    "ex": "別々ことにする"
  },
  {
    "id": "V1524",
    "w": "減",
    "r": "へん",
    "m": {
      "en": "strange",
      "zh-TW": "奇怪",
      "zh-CN": "奇怪",
      "ko": "이상한",
      "vi": "Lạ",
      "id": "Aneh"
    },
    "pos": "noun",
    "ex": "減について考える"
  },
  {
    "id": "V1525",
    "w": "辺",
    "r": "へん",
    "m": {
      "en": "area",
      "zh-TW": "一帶",
      "zh-CN": "一带",
      "ko": "근처",
      "vi": "vùng",
      "id": "daerah"
    },
    "pos": "noun",
    "ex": "辺について考える"
  },
  {
    "id": "V1526",
    "w": "辺り",
    "r": "あたり",
    "m": {
      "en": "vicinity",
      "zh-TW": "附近",
      "zh-CN": "附近",
      "ko": "부근",
      "vi": "lân cận",
      "id": "sekitar"
    },
    "pos": "noun",
    "ex": "辺りについて考える"
  },
  {
    "id": "V1527",
    "w": "棒",
    "r": "ぼう",
    "m": {
      "en": "stick",
      "zh-TW": "棒子",
      "zh-CN": "棒子",
      "ko": "막대기",
      "vi": "que",
      "id": "tongkat"
    },
    "pos": "verb-godan",
    "ex": "棒ことにする"
  },
  {
    "id": "V1528",
    "w": "冒険",
    "r": "ぼうけん",
    "m": {
      "en": "adventure",
      "zh-TW": "冒險",
      "zh-CN": "冒险",
      "ko": "모험",
      "vi": "phiêu lưu",
      "id": "petualangan"
    },
    "pos": "noun",
    "ex": "冒険について考える"
  },
  {
    "id": "V1529",
    "w": "帽子",
    "r": "ぼうし",
    "m": {
      "en": "hat",
      "zh-TW": "帽子",
      "zh-CN": "帽子",
      "ko": "hat",
      "vi": "hat",
      "id": "hat"
    },
    "pos": "noun",
    "ex": "帽子について考える"
  },
  {
    "id": "V1530",
    "w": "報道",
    "r": "ほうどう",
    "m": {
      "en": "news",
      "zh-TW": "新聞",
      "zh-CN": "新闻",
      "ko": "뉴스",
      "vi": "tin tức",
      "id": "berita"
    },
    "pos": "verb-godan",
    "ex": "報道ことにする"
  },
  {
    "id": "V1531",
    "w": "ボーナス",
    "r": "ぼーなす",
    "m": {
      "en": "bonus",
      "zh-TW": "獎金",
      "zh-CN": "奖金",
      "ko": "보너스",
      "vi": "tiền thưởng",
      "id": "bonus"
    },
    "pos": "verb-godan",
    "ex": "ボーナスことにする"
  },
  {
    "id": "V1532",
    "w": "僕",
    "r": "ぼく",
    "m": {
      "en": "I",
      "zh-TW": "僕",
      "zh-CN": "仆",
      "ko": "I",
      "vi": "I",
      "id": "I"
    },
    "pos": "verb-godan",
    "ex": "僕ことにする"
  },
  {
    "id": "V1533",
    "w": "星",
    "r": "ほし",
    "m": {
      "en": "star",
      "zh-TW": "星星",
      "zh-CN": "星星",
      "ko": "별",
      "vi": "ngôi sao",
      "id": "bintang"
    },
    "pos": "noun",
    "ex": "星について考える"
  },
  {
    "id": "V1534",
    "w": "ポスト",
    "r": "ぽすと",
    "m": {
      "en": "post",
      "zh-TW": "郵筒",
      "zh-CN": "邮筒",
      "ko": "우체통",
      "vi": "hộp thư",
      "id": "pos"
    },
    "pos": "adverb",
    "ex": "ポスト考える"
  },
  {
    "id": "V1535",
    "w": "ボタン",
    "r": "ぼたん",
    "m": {
      "en": "button",
      "zh-TW": "按鈕",
      "zh-CN": "按钮",
      "ko": "버튼",
      "vi": "nút",
      "id": "tombol"
    },
    "pos": "noun",
    "ex": "ボタンについて考える"
  },
  {
    "id": "V1536",
    "w": "歩道",
    "r": "ほどう",
    "m": {
      "en": "sidewalk",
      "zh-TW": "步道",
      "zh-CN": "步道",
      "ko": "sidewalk",
      "vi": "sidewalk",
      "id": "sidewalk"
    },
    "pos": "verb-godan",
    "ex": "歩道ことにする"
  },
  {
    "id": "V1537",
    "w": "程",
    "r": "ほど",
    "m": {
      "en": "extent",
      "zh-TW": "程",
      "zh-CN": "程",
      "ko": "정도",
      "vi": "mức độ",
      "id": "tingkat"
    },
    "pos": "noun",
    "ex": "程について考える"
  },
  {
    "id": "V1538",
    "w": "毎",
    "r": "まい",
    "m": {
      "en": "every",
      "zh-TW": "每",
      "zh-CN": "每",
      "ko": "every",
      "vi": "every",
      "id": "every"
    },
    "pos": "i-adj",
    "ex": "とても毎と思う"
  },
  {
    "id": "V1539",
    "w": "毎朝",
    "r": "まいあさ",
    "m": {
      "en": "every morning",
      "zh-TW": "每朝",
      "zh-CN": "每朝",
      "ko": "every morning",
      "vi": "every morning",
      "id": "every morning"
    },
    "pos": "noun",
    "ex": "毎朝について考える"
  },
  {
    "id": "V1540",
    "w": "毎週",
    "r": "まいしゅう",
    "m": {
      "en": "every week",
      "zh-TW": "每週",
      "zh-CN": "每周",
      "ko": "every week",
      "vi": "every week",
      "id": "every week"
    },
    "pos": "verb-godan",
    "ex": "毎週ことにする"
  },
  {
    "id": "V1541",
    "w": "毎月",
    "r": "まいつき",
    "m": {
      "en": "every month",
      "zh-TW": "每月",
      "zh-CN": "每月",
      "ko": "every month",
      "vi": "every month",
      "id": "every month"
    },
    "pos": "noun",
    "ex": "毎月について考える"
  },
  {
    "id": "V1542",
    "w": "毎年",
    "r": "まいとし",
    "m": {
      "en": "every year",
      "zh-TW": "每年",
      "zh-CN": "每年",
      "ko": "every year",
      "vi": "every year",
      "id": "every year"
    },
    "pos": "noun",
    "ex": "毎年について考える"
  },
  {
    "id": "V1543",
    "w": "毎晩",
    "r": "まいばん",
    "m": {
      "en": "every night",
      "zh-TW": "每晩",
      "zh-CN": "每晩",
      "ko": "every night",
      "vi": "every night",
      "id": "every night"
    },
    "pos": "noun",
    "ex": "毎晩について考える"
  },
  {
    "id": "V1544",
    "w": "巻く",
    "r": "まく",
    "m": {
      "en": "to roll",
      "zh-TW": "卷",
      "zh-CN": "卷",
      "ko": "to roll",
      "vi": "to roll",
      "id": "to roll"
    },
    "pos": "verb-godan",
    "ex": "巻くことにする"
  },
  {
    "id": "V1545",
    "w": "枕",
    "r": "まくら",
    "m": {
      "en": "pillow",
      "zh-TW": "枕",
      "zh-CN": "枕",
      "ko": "pillow",
      "vi": "pillow",
      "id": "pillow"
    },
    "pos": "noun",
    "ex": "枕について考える"
  },
  {
    "id": "V1546",
    "w": "孫",
    "r": "まご",
    "m": {
      "en": "grandchild",
      "zh-TW": "孫",
      "zh-CN": "孙",
      "ko": "grandchild",
      "vi": "grandchild",
      "id": "grandchild"
    },
    "pos": "noun",
    "ex": "孫について考える"
  },
  {
    "id": "V1547",
    "w": "真剣",
    "r": "しんけん",
    "m": {
      "en": "serious",
      "zh-TW": "真劍",
      "zh-CN": "真剑",
      "ko": "serious",
      "vi": "serious",
      "id": "serious"
    },
    "pos": "noun",
    "ex": "真剣について考える"
  },
  {
    "id": "V1548",
    "w": "町",
    "r": "まち",
    "m": {
      "en": "town",
      "zh-TW": "町",
      "zh-CN": "町",
      "ko": "town",
      "vi": "town",
      "id": "town"
    },
    "pos": "noun",
    "ex": "町について考える"
  },
  {
    "id": "V1549",
    "w": "末",
    "r": "すえ",
    "m": {
      "en": "end",
      "zh-TW": "末",
      "zh-CN": "末",
      "ko": "end",
      "vi": "end",
      "id": "end"
    },
    "pos": "noun",
    "ex": "末について考える"
  },
  {
    "id": "V1550",
    "w": "松",
    "r": "まつ",
    "m": {
      "en": "pine",
      "zh-TW": "松",
      "zh-CN": "松",
      "ko": "pine",
      "vi": "pine",
      "id": "pine"
    },
    "pos": "verb-godan",
    "ex": "松ことにする"
  },
  {
    "id": "V1551",
    "w": "窓",
    "r": "まど",
    "m": {
      "en": "window",
      "zh-TW": "窗戶",
      "zh-CN": "窗户",
      "ko": "창문",
      "vi": "cửa sổ",
      "id": "jendela"
    },
    "pos": "noun",
    "ex": "窓について考える"
  },
  {
    "id": "V1552",
    "w": "豆",
    "r": "まめ",
    "m": {
      "en": "bean",
      "zh-TW": "豆",
      "zh-CN": "豆",
      "ko": "bean",
      "vi": "bean",
      "id": "bean"
    },
    "pos": "noun",
    "ex": "豆について考える"
  },
  {
    "id": "V1553",
    "w": "丸",
    "r": "まる",
    "m": {
      "en": "circle",
      "zh-TW": "丸",
      "zh-CN": "丸",
      "ko": "circle",
      "vi": "circle",
      "id": "circle"
    },
    "pos": "verb-godan",
    "ex": "丸ことにする"
  },
  {
    "id": "V1554",
    "w": "万",
    "r": "まん",
    "m": {
      "en": "ten thousand",
      "zh-TW": "萬",
      "zh-CN": "万",
      "ko": "ten thousand",
      "vi": "ten thousand",
      "id": "ten thousand"
    },
    "pos": "noun",
    "ex": "万について考える"
  },
  {
    "id": "V1555",
    "w": "実",
    "r": "み",
    "m": {
      "en": "fruit",
      "zh-TW": "水果",
      "zh-CN": "水果",
      "ko": "과일",
      "vi": "trái cây",
      "id": "buah"
    },
    "pos": "noun",
    "ex": "実について考える"
  },
  {
    "id": "V1556",
    "w": "見上げる",
    "r": "みあげる",
    "m": {
      "en": "to look up",
      "zh-TW": "見上",
      "zh-CN": "見上",
      "ko": "to look up",
      "vi": "to look up",
      "id": "to look up"
    },
    "pos": "verb-godan",
    "ex": "見上げることにする"
  },
  {
    "id": "V1557",
    "w": "見かける",
    "r": "みかける",
    "m": {
      "en": "to see",
      "zh-TW": "看",
      "zh-CN": "看",
      "ko": "보다",
      "vi": "Nhìn",
      "id": "melihat"
    },
    "pos": "verb-ichidan",
    "ex": "見かけることにする"
  },
  {
    "id": "V1558",
    "w": "幹",
    "r": "みき",
    "m": {
      "en": "trunk",
      "zh-TW": "幹",
      "zh-CN": "幹",
      "ko": "trunk",
      "vi": "trunk",
      "id": "trunk"
    },
    "pos": "noun",
    "ex": "幹について考える"
  },
  {
    "id": "V1559",
    "w": "岬",
    "r": "みさき",
    "m": {
      "en": "cape",
      "zh-TW": "岬",
      "zh-CN": "岬",
      "ko": "cape",
      "vi": "cape",
      "id": "cape"
    },
    "pos": "noun",
    "ex": "岬について考える"
  },
  {
    "id": "V1560",
    "w": "湖",
    "r": "みずうみ",
    "m": {
      "en": "lake",
      "zh-TW": "湖",
      "zh-CN": "湖",
      "ko": "lake",
      "vi": "lake",
      "id": "lake"
    },
    "pos": "noun",
    "ex": "湖について考える"
  },
  {
    "id": "V1561",
    "w": "味噌",
    "r": "みそ",
    "m": {
      "en": "miso",
      "zh-TW": "味噌",
      "zh-CN": "味噌",
      "ko": "miso",
      "vi": "miso",
      "id": "miso"
    },
    "pos": "noun",
    "ex": "味噌について考える"
  },
  {
    "id": "V1562",
    "w": "三つ",
    "r": "みっつ",
    "m": {
      "en": "three",
      "zh-TW": "三",
      "zh-CN": "三",
      "ko": "three",
      "vi": "three",
      "id": "three"
    },
    "pos": "verb-godan",
    "ex": "三つことにする"
  },
  {
    "id": "V1563",
    "w": "緑",
    "r": "みどり",
    "m": {
      "en": "green",
      "zh-TW": "綠",
      "zh-CN": "绿",
      "ko": "green",
      "vi": "green",
      "id": "green"
    },
    "pos": "noun",
    "ex": "緑について考える"
  },
  {
    "id": "V1564",
    "w": "皆",
    "r": "みな",
    "m": {
      "en": "everyone",
      "zh-TW": "皆",
      "zh-CN": "皆",
      "ko": "everyone",
      "vi": "everyone",
      "id": "everyone"
    },
    "pos": "noun",
    "ex": "皆について考える"
  },
  {
    "id": "V1565",
    "w": "南",
    "r": "みなみ",
    "m": {
      "en": "south",
      "zh-TW": "南",
      "zh-CN": "南",
      "ko": "south",
      "vi": "south",
      "id": "south"
    },
    "pos": "noun",
    "ex": "南について考える"
  },
  {
    "id": "V1566",
    "w": "峰",
    "r": "みね",
    "m": {
      "en": "peak",
      "zh-TW": "峰",
      "zh-CN": "峰",
      "ko": "peak",
      "vi": "peak",
      "id": "peak"
    },
    "pos": "noun",
    "ex": "峰について考える"
  },
  {
    "id": "V1567",
    "w": "実る",
    "r": "みのる",
    "m": {
      "en": "to bear fruit",
      "zh-TW": "實",
      "zh-CN": "实",
      "ko": "to bear fruit",
      "vi": "to bear fruit",
      "id": "to bear fruit"
    },
    "pos": "verb-godan",
    "ex": "実ることにする"
  },
  {
    "id": "V1568",
    "w": "見守る",
    "r": "みまもる",
    "m": {
      "en": "to watch over",
      "zh-TW": "見守",
      "zh-CN": "見守",
      "ko": "to watch over",
      "vi": "to watch over",
      "id": "to watch over"
    },
    "pos": "verb-godan",
    "ex": "見守ることにする"
  },
  {
    "id": "V1569",
    "w": "都",
    "r": "みやこ",
    "m": {
      "en": "capital",
      "zh-TW": "都",
      "zh-CN": "都",
      "ko": "capital",
      "vi": "capital",
      "id": "capital"
    },
    "pos": "noun",
    "ex": "都について考える"
  },
  {
    "id": "V1570",
    "w": "脈",
    "r": "みゃく",
    "m": {
      "en": "pulse",
      "zh-TW": "脈",
      "zh-CN": "脉",
      "ko": "pulse",
      "vi": "pulse",
      "id": "pulse"
    },
    "pos": "verb-godan",
    "ex": "脈ことにする"
  },
  {
    "id": "V1571",
    "w": "麦",
    "r": "むぎ",
    "m": {
      "en": "wheat",
      "zh-TW": "麦",
      "zh-CN": "麦",
      "ko": "wheat",
      "vi": "wheat",
      "id": "wheat"
    },
    "pos": "noun",
    "ex": "麦について考える"
  },
  {
    "id": "V1572",
    "w": "無限",
    "r": "むげん",
    "m": {
      "en": "infinite",
      "zh-TW": "無限",
      "zh-CN": "无限",
      "ko": "infinite",
      "vi": "infinite",
      "id": "infinite"
    },
    "pos": "noun",
    "ex": "無限について考える"
  },
  {
    "id": "V1573",
    "w": "虫",
    "r": "むし",
    "m": {
      "en": "insect",
      "zh-TW": "蟲",
      "zh-CN": "虫",
      "ko": "insect",
      "vi": "insect",
      "id": "insect"
    },
    "pos": "noun",
    "ex": "虫について考える"
  },
  {
    "id": "V1574",
    "w": "無数",
    "r": "むすう",
    "m": {
      "en": "countless",
      "zh-TW": "無數",
      "zh-CN": "无数",
      "ko": "countless",
      "vi": "countless",
      "id": "countless"
    },
    "pos": "verb-godan",
    "ex": "無数ことにする"
  },
  {
    "id": "V1575",
    "w": "娘",
    "r": "むすめ",
    "m": {
      "en": "daughter",
      "zh-TW": "娘",
      "zh-CN": "娘",
      "ko": "daughter",
      "vi": "daughter",
      "id": "daughter"
    },
    "pos": "noun",
    "ex": "娘は高校生だ"
  },
  {
    "id": "V1576",
    "w": "息子",
    "r": "むすこ",
    "m": {
      "en": "son",
      "zh-TW": "息子",
      "zh-CN": "息子",
      "ko": "son",
      "vi": "son",
      "id": "son"
    },
    "pos": "noun",
    "ex": "息子が生まれた"
  },
  {
    "id": "V1577",
    "w": "無駄",
    "r": "むだ",
    "m": {
      "en": "waste",
      "zh-TW": "無駄",
      "zh-CN": "无駄",
      "ko": "waste",
      "vi": "waste",
      "id": "waste"
    },
    "pos": "noun",
    "ex": "無駄について考える"
  },
  {
    "id": "V1578",
    "w": "六つ",
    "r": "むっつ",
    "m": {
      "en": "six",
      "zh-TW": "六",
      "zh-CN": "六",
      "ko": "six",
      "vi": "six",
      "id": "six"
    },
    "pos": "verb-godan",
    "ex": "六つことにする"
  },
  {
    "id": "V1579",
    "w": "芽",
    "r": "め",
    "m": {
      "en": "bud",
      "zh-TW": "芽",
      "zh-CN": "芽",
      "ko": "bud",
      "vi": "bud",
      "id": "bud"
    },
    "pos": "noun",
    "ex": "芽について考える"
  },
  {
    "id": "V1580",
    "w": "明治",
    "r": "めいじ",
    "m": {
      "en": "Meiji",
      "zh-TW": "明治",
      "zh-CN": "明治",
      "ko": "Meiji",
      "vi": "Meiji",
      "id": "Meiji"
    },
    "pos": "noun",
    "ex": "明治について考える"
  },
  {
    "id": "V1581",
    "w": "明白",
    "r": "めいはく",
    "m": {
      "en": "obvious",
      "zh-TW": "明顯",
      "zh-CN": "明显",
      "ko": "분명한",
      "vi": "Rõ ràng",
      "id": "Jelas"
    },
    "pos": "verb-godan",
    "ex": "明白ことにする"
  },
  {
    "id": "V1582",
    "w": "迷惑",
    "r": "めいわく",
    "m": {
      "en": "trouble",
      "zh-TW": "迷惑",
      "zh-CN": "迷惑",
      "ko": "trouble",
      "vi": "trouble",
      "id": "trouble"
    },
    "pos": "verb-godan",
    "ex": "迷惑ことにする"
  },
  {
    "id": "V1583",
    "w": "目覚める",
    "r": "めざめる",
    "m": {
      "en": "to wake up",
      "zh-TW": "起床",
      "zh-CN": "起床",
      "ko": "일어나다",
      "vi": "thức dậy",
      "id": "bangun"
    },
    "pos": "verb-ichidan",
    "ex": "目覚めることにする"
  },
  {
    "id": "V1584",
    "w": "飯",
    "r": "めし",
    "m": {
      "en": "meal",
      "zh-TW": "飯",
      "zh-CN": "饭",
      "ko": "meal",
      "vi": "meal",
      "id": "meal"
    },
    "pos": "noun",
    "ex": "飯について考える"
  },
  {
    "id": "V1585",
    "w": "雌",
    "r": "めす",
    "m": {
      "en": "female",
      "zh-TW": "雌",
      "zh-CN": "雌",
      "ko": "female",
      "vi": "female",
      "id": "female"
    },
    "pos": "verb-godan",
    "ex": "雌ことにする"
  },
  {
    "id": "V1586",
    "w": "滅多",
    "r": "めった",
    "m": {
      "en": "rare",
      "zh-TW": "稀有",
      "zh-CN": "稀有",
      "ko": "드문",
      "vi": "Hiếm",
      "id": "langka"
    },
    "pos": "noun",
    "ex": "滅多について考える"
  },
  {
    "id": "V1587",
    "w": "綿",
    "r": "めん",
    "m": {
      "en": "cotton",
      "zh-TW": "綿",
      "zh-CN": "棉",
      "ko": "cotton",
      "vi": "cotton",
      "id": "cotton"
    },
    "pos": "noun",
    "ex": "綿について考える"
  },
  {
    "id": "V1588",
    "w": "免許",
    "r": "めんきょ",
    "m": {
      "en": "license",
      "zh-TW": "免許",
      "zh-CN": "免许",
      "ko": "license",
      "vi": "license",
      "id": "license"
    },
    "pos": "noun",
    "ex": "免許について考える"
  },
  {
    "id": "V1589",
    "w": "面接",
    "r": "めんせつ",
    "m": {
      "en": "interview",
      "zh-TW": "面接",
      "zh-CN": "面接",
      "ko": "interview",
      "vi": "interview",
      "id": "interview"
    },
    "pos": "verb-godan",
    "ex": "面接ことにする"
  },
  {
    "id": "V1590",
    "w": "模様",
    "r": "もよう",
    "m": {
      "en": "pattern",
      "zh-TW": "模樣",
      "zh-CN": "模样",
      "ko": "pattern",
      "vi": "pattern",
      "id": "pattern"
    },
    "pos": "verb-godan",
    "ex": "模様ことにする"
  },
  {
    "id": "V1591",
    "w": "最も",
    "r": "もっとも",
    "m": {
      "en": "most",
      "zh-TW": "最",
      "zh-CN": "最",
      "ko": "가장",
      "vi": "nhất",
      "id": "paling"
    },
    "pos": "noun",
    "ex": "最もについて考える"
  },
  {
    "id": "V1592",
    "w": "元々",
    "r": "もともと",
    "m": {
      "en": "originally",
      "zh-TW": "元",
      "zh-CN": "元",
      "ko": "원래",
      "vi": "ban đầu",
      "id": "awalnya"
    },
    "pos": "adverb",
    "ex": "元々考える"
  },
  {
    "id": "V1593",
    "w": "模範",
    "r": "もはん",
    "m": {
      "en": "model",
      "zh-TW": "模範",
      "zh-CN": "模范",
      "ko": "model",
      "vi": "model",
      "id": "model"
    },
    "pos": "noun",
    "ex": "模範について考える"
  },
  {
    "id": "V1594",
    "w": "もはや",
    "r": "もはや",
    "m": {
      "en": "already",
      "zh-TW": "已經",
      "zh-CN": "已经",
      "ko": "이미",
      "vi": "đã",
      "id": "sudah"
    },
    "pos": "noun",
    "ex": "もはやについて考える"
  },
  {
    "id": "V1595",
    "w": "盛る",
    "r": "もる",
    "m": {
      "en": "to heap",
      "zh-TW": "盛",
      "zh-CN": "盛",
      "ko": "to heap",
      "vi": "to heap",
      "id": "to heap"
    },
    "pos": "verb-godan",
    "ex": "盛ることにする"
  },
  {
    "id": "V1596",
    "w": "門",
    "r": "もん",
    "m": {
      "en": "gate",
      "zh-TW": "門",
      "zh-CN": "门",
      "ko": "gate",
      "vi": "gate",
      "id": "gate"
    },
    "pos": "noun",
    "ex": "門について考える"
  },
  {
    "id": "V1597",
    "w": "文句",
    "r": "もんく",
    "m": {
      "en": "complaint",
      "zh-TW": "文句",
      "zh-CN": "文句",
      "ko": "complaint",
      "vi": "complaint",
      "id": "complaint"
    },
    "pos": "verb-godan",
    "ex": "文句ことにする"
  },
  {
    "id": "V1598",
    "w": "矢",
    "r": "や",
    "m": {
      "en": "arrow",
      "zh-TW": "矢",
      "zh-CN": "矢",
      "ko": "arrow",
      "vi": "arrow",
      "id": "arrow"
    },
    "pos": "noun",
    "ex": "矢について考える"
  },
  {
    "id": "V1599",
    "w": "夜間",
    "r": "やかん",
    "m": {
      "en": "nighttime",
      "zh-TW": "夜間",
      "zh-CN": "夜間",
      "ko": "nighttime",
      "vi": "nighttime",
      "id": "nighttime"
    },
    "pos": "noun",
    "ex": "夜間について考える"
  },
  {
    "id": "V1600",
    "w": "夜景",
    "r": "やけい",
    "m": {
      "en": "night view",
      "zh-TW": "夜景",
      "zh-CN": "夜景",
      "ko": "night view",
      "vi": "night view",
      "id": "night view"
    },
    "pos": "i-adj",
    "ex": "とても夜景と思う"
  },
  {
    "id": "V1601",
    "w": "野球",
    "r": "やきゅう",
    "m": {
      "en": "baseball",
      "zh-TW": "野球",
      "zh-CN": "野球",
      "ko": "baseball",
      "vi": "baseball",
      "id": "baseball"
    },
    "pos": "verb-godan",
    "ex": "野球ことにする"
  },
  {
    "id": "V1602",
    "w": "焼く",
    "r": "やく",
    "m": {
      "en": "to bake",
      "zh-TW": "燒",
      "zh-CN": "烧",
      "ko": "to bake",
      "vi": "to bake",
      "id": "to bake"
    },
    "pos": "verb-godan",
    "ex": "肉を焼く"
  },
  {
    "id": "V1603",
    "w": "訳",
    "r": "わけ",
    "m": {
      "en": "reason",
      "zh-TW": "理由",
      "zh-CN": "理由",
      "ko": "이유",
      "vi": "Lý do",
      "id": "alasan"
    },
    "pos": "noun",
    "ex": "訳について考える"
  },
  {
    "id": "V1604",
    "w": "役所",
    "r": "やくしょ",
    "m": {
      "en": "government office",
      "zh-TW": "役所",
      "zh-CN": "役所",
      "ko": "government office",
      "vi": "government office",
      "id": "government office"
    },
    "pos": "noun",
    "ex": "役所について考える"
  },
  {
    "id": "V1605",
    "w": "役員",
    "r": "やくいん",
    "m": {
      "en": "officer",
      "zh-TW": "役員",
      "zh-CN": "役員",
      "ko": "officer",
      "vi": "officer",
      "id": "officer"
    },
    "pos": "noun",
    "ex": "役員について考える"
  },
  {
    "id": "V1606",
    "w": "家賃",
    "r": "やちん",
    "m": {
      "en": "rent",
      "zh-TW": "家賃",
      "zh-CN": "家赁",
      "ko": "rent",
      "vi": "rent",
      "id": "rent"
    },
    "pos": "noun",
    "ex": "家賃について考える"
  },
  {
    "id": "V1607",
    "w": "屋根",
    "r": "やね",
    "m": {
      "en": "roof",
      "zh-TW": "屋根",
      "zh-CN": "屋根",
      "ko": "roof",
      "vi": "roof",
      "id": "roof"
    },
    "pos": "noun",
    "ex": "屋根について考える"
  },
  {
    "id": "V1608",
    "w": "闇",
    "r": "やみ",
    "m": {
      "en": "darkness",
      "zh-TW": "闇",
      "zh-CN": "闇",
      "ko": "darkness",
      "vi": "darkness",
      "id": "darkness"
    },
    "pos": "noun",
    "ex": "闇について考える"
  },
  {
    "id": "V1609",
    "w": "柔らかい",
    "r": "やわらかい",
    "m": {
      "en": "soft",
      "zh-TW": "軟",
      "zh-CN": "软",
      "ko": "부드러운",
      "vi": "Mềm",
      "id": "lembut"
    },
    "pos": "i-adj",
    "ex": "とても柔らかいと思う"
  },
  {
    "id": "V1610",
    "w": "湯",
    "r": "ゆ",
    "m": {
      "en": "hot water",
      "zh-TW": "湯",
      "zh-CN": "汤",
      "ko": "hot water",
      "vi": "hot water",
      "id": "hot water"
    },
    "pos": "noun",
    "ex": "湯について考える"
  },
  {
    "id": "V1611",
    "w": "唯一",
    "r": "ゆいいつ",
    "m": {
      "en": "only",
      "zh-TW": "唯一",
      "zh-CN": "唯一",
      "ko": "단지",
      "vi": "chỉ",
      "id": "hanya"
    },
    "pos": "verb-godan",
    "ex": "唯一ことにする"
  },
  {
    "id": "V1612",
    "w": "有名",
    "r": "ゆうめい",
    "m": {
      "en": "famous",
      "zh-TW": "有名",
      "zh-CN": "有名",
      "ko": "유명한",
      "vi": "Nổi tiếng",
      "id": "Terkenal"
    },
    "pos": "i-adj",
    "ex": "とても有名と思う"
  },
  {
    "id": "V1613",
    "w": "郵便",
    "r": "ゆうびん",
    "m": {
      "en": "mail",
      "zh-TW": "郵便",
      "zh-CN": "邮便",
      "ko": "mail",
      "vi": "mail",
      "id": "mail"
    },
    "pos": "noun",
    "ex": "郵便について考える"
  },
  {
    "id": "V1614",
    "w": "床",
    "r": "ゆか",
    "m": {
      "en": "floor",
      "zh-TW": "床",
      "zh-CN": "床",
      "ko": "floor",
      "vi": "floor",
      "id": "floor"
    },
    "pos": "noun",
    "ex": "床について考える"
  },
  {
    "id": "V1615",
    "w": "雪",
    "r": "ゆき",
    "m": {
      "en": "snow",
      "zh-TW": "雪",
      "zh-CN": "雪",
      "ko": "snow",
      "vi": "snow",
      "id": "snow"
    },
    "pos": "noun",
    "ex": "雪について考える"
  },
  {
    "id": "V1616",
    "w": "行く",
    "r": "いく",
    "m": {
      "en": "to go",
      "zh-TW": "去",
      "zh-CN": "去",
      "ko": "가다",
      "vi": "Đi",
      "id": "pergi"
    },
    "pos": "verb-godan",
    "ex": "来週東京に行く予定だ"
  },
  {
    "id": "V1617",
    "w": "指",
    "r": "ゆび",
    "m": {
      "en": "finger",
      "zh-TW": "指",
      "zh-CN": "指",
      "ko": "finger",
      "vi": "finger",
      "id": "finger"
    },
    "pos": "noun",
    "ex": "指について考える"
  },
  {
    "id": "V1618",
    "w": "弓",
    "r": "ゆみ",
    "m": {
      "en": "bow",
      "zh-TW": "弓",
      "zh-CN": "弓",
      "ko": "bow",
      "vi": "bow",
      "id": "bow"
    },
    "pos": "noun",
    "ex": "弓について考える"
  },
  {
    "id": "V1619",
    "w": "余裕",
    "r": "よゆう",
    "m": {
      "en": "margin",
      "zh-TW": "餘裕",
      "zh-CN": "余裕",
      "ko": "margin",
      "vi": "margin",
      "id": "margin"
    },
    "pos": "verb-godan",
    "ex": "余裕ことにする"
  },
  {
    "id": "V1620",
    "w": "夜中",
    "r": "よなか",
    "m": {
      "en": "midnight",
      "zh-TW": "夜中",
      "zh-CN": "夜中",
      "ko": "midnight",
      "vi": "midnight",
      "id": "midnight"
    },
    "pos": "noun",
    "ex": "夜中について考える"
  },
  {
    "id": "V1621",
    "w": "世",
    "r": "よ",
    "m": {
      "en": "world",
      "zh-TW": "世界",
      "zh-CN": "世界",
      "ko": "세계",
      "vi": "Thế giới",
      "id": "dunia"
    },
    "pos": "noun",
    "ex": "世について考える"
  },
  {
    "id": "V1622",
    "w": "四",
    "r": "よん",
    "m": {
      "en": "four",
      "zh-TW": "四",
      "zh-CN": "四",
      "ko": "four",
      "vi": "four",
      "id": "four"
    },
    "pos": "noun",
    "ex": "四について考える"
  },
  {
    "id": "V1623",
    "w": "四つ",
    "r": "よっつ",
    "m": {
      "en": "four",
      "zh-TW": "四",
      "zh-CN": "四",
      "ko": "four",
      "vi": "four",
      "id": "four"
    },
    "pos": "verb-godan",
    "ex": "四つことにする"
  },
  {
    "id": "V1624",
    "w": "呼ぶ",
    "r": "よぶ",
    "m": {
      "en": "to call",
      "zh-TW": "打電話",
      "zh-CN": "打电话",
      "ko": "전화하다",
      "vi": "Gọi",
      "id": "menelepon"
    },
    "pos": "verb-godan",
    "ex": "名前を呼ぶ"
  },
  {
    "id": "V1625",
    "w": "読み",
    "r": "よみ",
    "m": {
      "en": "reading",
      "zh-TW": "讀",
      "zh-CN": "读",
      "ko": "reading",
      "vi": "reading",
      "id": "reading"
    },
    "pos": "noun",
    "ex": "読みについて考える"
  },
  {
    "id": "V1626",
    "w": "嫁",
    "r": "よめ",
    "m": {
      "en": "bride",
      "zh-TW": "嫁",
      "zh-CN": "嫁",
      "ko": "bride",
      "vi": "bride",
      "id": "bride"
    },
    "pos": "noun",
    "ex": "嫁について考える"
  },
  {
    "id": "V1627",
    "w": "寄せる",
    "r": "よせる",
    "m": {
      "en": "to gather",
      "zh-TW": "寄",
      "zh-CN": "寄",
      "ko": "to gather",
      "vi": "to gather",
      "id": "to gather"
    },
    "pos": "verb-ichidan",
    "ex": "寄せることにする"
  },
  {
    "id": "V1628",
    "w": "雷",
    "r": "かみなり",
    "m": {
      "en": "thunder",
      "zh-TW": "雷",
      "zh-CN": "雷",
      "ko": "thunder",
      "vi": "thunder",
      "id": "thunder"
    },
    "pos": "noun",
    "ex": "雷について考える"
  },
  {
    "id": "V1629",
    "w": "楽",
    "r": "らく",
    "m": {
      "en": "easy",
      "zh-TW": "簡單",
      "zh-CN": "简单",
      "ko": "쉬운",
      "vi": "Dễ",
      "id": "mudah"
    },
    "pos": "verb-godan",
    "ex": "楽ことにする"
  },
  {
    "id": "V1630",
    "w": "落語",
    "r": "らくご",
    "m": {
      "en": "rakugo",
      "zh-TW": "落語",
      "zh-CN": "落语",
      "ko": "rakugo",
      "vi": "rakugo",
      "id": "rakugo"
    },
    "pos": "noun",
    "ex": "落語について考える"
  },
  {
    "id": "V1631",
    "w": "裸",
    "r": "はだか",
    "m": {
      "en": "naked",
      "zh-TW": "裸",
      "zh-CN": "裸",
      "ko": "naked",
      "vi": "naked",
      "id": "naked"
    },
    "pos": "noun",
    "ex": "裸について考える"
  },
  {
    "id": "V1632",
    "w": "欄",
    "r": "らん",
    "m": {
      "en": "column",
      "zh-TW": "欄",
      "zh-CN": "欄",
      "ko": "column",
      "vi": "column",
      "id": "column"
    },
    "pos": "noun",
    "ex": "欄について考える"
  },
  {
    "id": "V1633",
    "w": "乱",
    "r": "らん",
    "m": {
      "en": "disorder",
      "zh-TW": "亂",
      "zh-CN": "乱",
      "ko": "disorder",
      "vi": "disorder",
      "id": "disorder"
    },
    "pos": "noun",
    "ex": "乱について考える"
  },
  {
    "id": "V1634",
    "w": "率",
    "r": "りつ",
    "m": {
      "en": "rate",
      "zh-TW": "率",
      "zh-CN": "率",
      "ko": "rate",
      "vi": "rate",
      "id": "rate"
    },
    "pos": "verb-godan",
    "ex": "率ことにする"
  },
  {
    "id": "V1635",
    "w": "略",
    "r": "りゃく",
    "m": {
      "en": "abbreviation",
      "zh-TW": "略",
      "zh-CN": "略",
      "ko": "abbreviation",
      "vi": "abbreviation",
      "id": "abbreviation"
    },
    "pos": "verb-godan",
    "ex": "略ことにする"
  },
  {
    "id": "V1636",
    "w": "留学",
    "r": "りゅうがく",
    "m": {
      "en": "study abroad",
      "zh-TW": "留學",
      "zh-CN": "留学",
      "ko": "study abroad",
      "vi": "study abroad",
      "id": "study abroad"
    },
    "pos": "verb-godan",
    "ex": "留学ことにする"
  },
  {
    "id": "V1637",
    "w": "両親",
    "r": "りょうしん",
    "m": {
      "en": "parents",
      "zh-TW": "兩親",
      "zh-CN": "两亲",
      "ko": "parents",
      "vi": "parents",
      "id": "parents"
    },
    "pos": "noun",
    "ex": "両親に会いに行く"
  },
  {
    "id": "V1638",
    "w": "料金",
    "r": "りょうきん",
    "m": {
      "en": "fee",
      "zh-TW": "料金",
      "zh-CN": "料金",
      "ko": "fee",
      "vi": "fee",
      "id": "fee"
    },
    "pos": "noun",
    "ex": "料金について考える"
  },
  {
    "id": "V1639",
    "w": "料理",
    "r": "りょうり",
    "m": {
      "en": "cooking",
      "zh-TW": "料理",
      "zh-CN": "料理",
      "ko": "cooking",
      "vi": "cooking",
      "id": "cooking"
    },
    "pos": "noun",
    "ex": "料理を作る"
  },
  {
    "id": "V1640",
    "w": "旅",
    "r": "たび",
    "m": {
      "en": "travel",
      "zh-TW": "旅",
      "zh-CN": "旅",
      "ko": "travel",
      "vi": "travel",
      "id": "travel"
    },
    "pos": "noun",
    "ex": "旅について考える"
  },
  {
    "id": "V1641",
    "w": "旅館",
    "r": "りょかん",
    "m": {
      "en": "inn",
      "zh-TW": "旅館",
      "zh-CN": "旅馆",
      "ko": "inn",
      "vi": "inn",
      "id": "inn"
    },
    "pos": "noun",
    "ex": "旅館について考える"
  },
  {
    "id": "V1642",
    "w": "林",
    "r": "はやし",
    "m": {
      "en": "forest",
      "zh-TW": "林",
      "zh-CN": "林",
      "ko": "forest",
      "vi": "forest",
      "id": "forest"
    },
    "pos": "noun",
    "ex": "林について考える"
  },
  {
    "id": "V1643",
    "w": "類似",
    "r": "るいじ",
    "m": {
      "en": "similarity",
      "zh-TW": "類似",
      "zh-CN": "类似",
      "ko": "similarity",
      "vi": "similarity",
      "id": "similarity"
    },
    "pos": "noun",
    "ex": "類似について考える"
  },
  {
    "id": "V1644",
    "w": "留守番",
    "r": "るすばん",
    "m": {
      "en": "house-sitting",
      "zh-TW": "留守番",
      "zh-CN": "留守番",
      "ko": "house-sitting",
      "vi": "house-sitting",
      "id": "house-sitting"
    },
    "pos": "noun",
    "ex": "留守番について考える"
  },
  {
    "id": "V1645",
    "w": "例年",
    "r": "れいねん",
    "m": {
      "en": "normal year",
      "zh-TW": "例年",
      "zh-CN": "例年",
      "ko": "normal year",
      "vi": "normal year",
      "id": "normal year"
    },
    "pos": "noun",
    "ex": "例年について考える"
  },
  {
    "id": "V1646",
    "w": "暦",
    "r": "こよみ",
    "m": {
      "en": "calendar",
      "zh-TW": "曆",
      "zh-CN": "历",
      "ko": "calendar",
      "vi": "calendar",
      "id": "calendar"
    },
    "pos": "noun",
    "ex": "暦について考える"
  },
  {
    "id": "V1647",
    "w": "列車",
    "r": "れっしゃ",
    "m": {
      "en": "train",
      "zh-TW": "火車",
      "zh-CN": "火车",
      "ko": "기차",
      "vi": "tàu hỏa",
      "id": "kereta"
    },
    "pos": "noun",
    "ex": "列車について考える"
  },
  {
    "id": "V1648",
    "w": "連休",
    "r": "れんきゅう",
    "m": {
      "en": "consecutive holidays",
      "zh-TW": "連休",
      "zh-CN": "连休",
      "ko": "consecutive holidays",
      "vi": "consecutive holidays",
      "id": "consecutive holidays"
    },
    "pos": "verb-godan",
    "ex": "連休ことにする"
  },
  {
    "id": "V1649",
    "w": "連想",
    "r": "れんそう",
    "m": {
      "en": "association",
      "zh-TW": "連想",
      "zh-CN": "连想",
      "ko": "association",
      "vi": "association",
      "id": "association"
    },
    "pos": "verb-godan",
    "ex": "連想ことにする"
  },
  {
    "id": "V1650",
    "w": "廊下",
    "r": "ろうか",
    "m": {
      "en": "corridor",
      "zh-TW": "廊下",
      "zh-CN": "廊下",
      "ko": "corridor",
      "vi": "corridor",
      "id": "corridor"
    },
    "pos": "noun",
    "ex": "廊下について考える"
  },
  {
    "id": "V1651",
    "w": "老後",
    "r": "ろうご",
    "m": {
      "en": "old age",
      "zh-TW": "老後",
      "zh-CN": "老后",
      "ko": "old age",
      "vi": "old age",
      "id": "old age"
    },
    "pos": "noun",
    "ex": "老後について考える"
  },
  {
    "id": "V1652",
    "w": "論",
    "r": "ろん",
    "m": {
      "en": "theory",
      "zh-TW": "論",
      "zh-CN": "论",
      "ko": "theory",
      "vi": "theory",
      "id": "theory"
    },
    "pos": "noun",
    "ex": "論について考える"
  },
  {
    "id": "V1653",
    "w": "論争",
    "r": "ろんそう",
    "m": {
      "en": "controversy",
      "zh-TW": "論爭",
      "zh-CN": "论争",
      "ko": "controversy",
      "vi": "controversy",
      "id": "controversy"
    },
    "pos": "verb-godan",
    "ex": "論争ことにする"
  },
  {
    "id": "V1654",
    "w": "ロビー",
    "r": "ろびー",
    "m": {
      "en": "lobby",
      "zh-TW": "大廳",
      "zh-CN": "大厅",
      "ko": "로비",
      "vi": "sảnh",
      "id": "lobi"
    },
    "pos": "noun",
    "ex": "ロビーについて考える"
  },
  {
    "id": "V1655",
    "w": "若者",
    "r": "わかもの",
    "m": {
      "en": "young person",
      "zh-TW": "若者",
      "zh-CN": "若者",
      "ko": "young person",
      "vi": "young person",
      "id": "young person"
    },
    "pos": "noun",
    "ex": "若者について考える"
  },
  {
    "id": "V1656",
    "w": "湧く",
    "r": "わく",
    "m": {
      "en": "to boil",
      "zh-TW": "湧",
      "zh-CN": "湧",
      "ko": "to boil",
      "vi": "to boil",
      "id": "to boil"
    },
    "pos": "verb-godan",
    "ex": "湧くことにする"
  },
  {
    "id": "V1657",
    "w": "枠",
    "r": "わく",
    "m": {
      "en": "frame",
      "zh-TW": "框",
      "zh-CN": "枠",
      "ko": "frame",
      "vi": "frame",
      "id": "frame"
    },
    "pos": "verb-godan",
    "ex": "枠ことにする"
  },
  {
    "id": "V1658",
    "w": "惑星",
    "r": "わくせい",
    "m": {
      "en": "planet",
      "zh-TW": "惑星",
      "zh-CN": "惑星",
      "ko": "planet",
      "vi": "planet",
      "id": "planet"
    },
    "pos": "i-adj",
    "ex": "とても惑星と思う"
  },
  {
    "id": "V1659",
    "w": "分かれる",
    "r": "わかれる",
    "m": {
      "en": "to branch",
      "zh-TW": "分",
      "zh-CN": "分",
      "ko": "to branch",
      "vi": "to branch",
      "id": "to branch"
    },
    "pos": "verb-ichidan",
    "ex": "分かれることにする"
  },
  {
    "id": "V1660",
    "w": "技",
    "r": "わざ",
    "m": {
      "en": "skill",
      "zh-TW": "技能",
      "zh-CN": "技能",
      "ko": "기술",
      "vi": "Kỹ năng",
      "id": "keterampilan"
    },
    "pos": "noun",
    "ex": "技について考える"
  },
  {
    "id": "V1661",
    "w": "わざと",
    "r": "わざと",
    "m": {
      "en": "on purpose",
      "zh-TW": "故意",
      "zh-CN": "故意",
      "ko": "일부러",
      "vi": "cố ý",
      "id": "sengaja"
    },
    "pos": "adverb",
    "ex": "わざと考える"
  },
  {
    "id": "V1662",
    "w": "災い",
    "r": "わざわい",
    "m": {
      "en": "disaster",
      "zh-TW": "災",
      "zh-CN": "灾",
      "ko": "disaster",
      "vi": "disaster",
      "id": "disaster"
    },
    "pos": "i-adj",
    "ex": "とても災いと思う"
  },
  {
    "id": "V1663",
    "w": "鷲",
    "r": "わし",
    "m": {
      "en": "eagle",
      "zh-TW": "鷲",
      "zh-CN": "鷲",
      "ko": "eagle",
      "vi": "eagle",
      "id": "eagle"
    },
    "pos": "noun",
    "ex": "鷲について考える"
  },
  {
    "id": "V1664",
    "w": "私",
    "r": "わたし",
    "m": {
      "en": "I",
      "zh-TW": "私",
      "zh-CN": "私",
      "ko": "I",
      "vi": "I",
      "id": "I"
    },
    "pos": "noun",
    "ex": "私について考える"
  },
  {
    "id": "V1665",
    "w": "罠",
    "r": "わな",
    "m": {
      "en": "trap",
      "zh-TW": "罠",
      "zh-CN": "罠",
      "ko": "trap",
      "vi": "trap",
      "id": "trap"
    },
    "pos": "noun",
    "ex": "罠について考える"
  },
  {
    "id": "V1666",
    "w": "藁",
    "r": "わら",
    "m": {
      "en": "straw",
      "zh-TW": "藁",
      "zh-CN": "藁",
      "ko": "straw",
      "vi": "straw",
      "id": "straw"
    },
    "pos": "noun",
    "ex": "藁について考える"
  },
  {
    "id": "V1667",
    "w": "愛情",
    "r": "あいじょう",
    "m": {
      "en": "love",
      "zh-TW": "愛",
      "zh-CN": "爱",
      "ko": "사랑",
      "vi": "tình yêu",
      "id": "cinta"
    },
    "pos": "verb-godan",
    "ex": "子供に愛情を注ぐ"
  },
  {
    "id": "V1668",
    "w": "合間",
    "r": "あいま",
    "m": {
      "en": "interval",
      "zh-TW": "合間",
      "zh-CN": "合間",
      "ko": "interval",
      "vi": "interval",
      "id": "interval"
    },
    "pos": "noun",
    "ex": "合間について考える"
  },
  {
    "id": "V1669",
    "w": "青い",
    "r": "あおい",
    "m": {
      "en": "blue",
      "zh-TW": "青",
      "zh-CN": "青",
      "ko": "blue",
      "vi": "blue",
      "id": "blue"
    },
    "pos": "i-adj",
    "ex": "青い空を見上げる"
  },
  {
    "id": "V1670",
    "w": "赤い",
    "r": "あかい",
    "m": {
      "en": "red",
      "zh-TW": "赤",
      "zh-CN": "赤",
      "ko": "red",
      "vi": "red",
      "id": "red"
    },
    "pos": "i-adj",
    "ex": "赤い花が咲いている"
  },
  {
    "id": "V1671",
    "w": "秋",
    "r": "あき",
    "m": {
      "en": "autumn",
      "zh-TW": "秋",
      "zh-CN": "秋",
      "ko": "autumn",
      "vi": "autumn",
      "id": "autumn"
    },
    "pos": "noun",
    "ex": "秋になると紅葉が美しい"
  },
  {
    "id": "V1672",
    "w": "空く",
    "r": "あく",
    "m": {
      "en": "to be empty",
      "zh-TW": "空",
      "zh-CN": "空",
      "ko": "to be empty",
      "vi": "to be empty",
      "id": "to be empty"
    },
    "pos": "verb-godan",
    "ex": "席が空いている"
  },
  {
    "id": "V1673",
    "w": "悪魔",
    "r": "あくま",
    "m": {
      "en": "devil",
      "zh-TW": "悪魔",
      "zh-CN": "悪魔",
      "ko": "devil",
      "vi": "devil",
      "id": "devil"
    },
    "pos": "noun",
    "ex": "悪魔について考える"
  },
  {
    "id": "V1674",
    "w": "明ける",
    "r": "あける",
    "m": {
      "en": "to dawn",
      "zh-TW": "明",
      "zh-CN": "明",
      "ko": "to dawn",
      "vi": "to dawn",
      "id": "to dawn"
    },
    "pos": "verb-ichidan",
    "ex": "明けることにする"
  },
  {
    "id": "V1675",
    "w": "揚げる",
    "r": "あげる",
    "m": {
      "en": "to raise",
      "zh-TW": "提高",
      "zh-CN": "提高",
      "ko": "올리다",
      "vi": "nâng",
      "id": "menaikkan"
    },
    "pos": "verb-godan",
    "ex": "揚げることにする"
  },
  {
    "id": "V1676",
    "w": "浅い",
    "r": "あさい",
    "m": {
      "en": "shallow",
      "zh-TW": "淺",
      "zh-CN": "浅",
      "ko": "얕은",
      "vi": "nông",
      "id": "dangkal"
    },
    "pos": "i-adj",
    "ex": "川の水が浅い"
  },
  {
    "id": "V1677",
    "w": "朝",
    "r": "あさ",
    "m": {
      "en": "morning",
      "zh-TW": "早上",
      "zh-CN": "早上",
      "ko": "아침",
      "vi": "buổi sáng",
      "id": "pagi"
    },
    "pos": "noun",
    "ex": "朝早く起きて運動する"
  },
  {
    "id": "V1678",
    "w": "足",
    "r": "あし",
    "m": {
      "en": "foot",
      "zh-TW": "腳",
      "zh-CN": "脚",
      "ko": "발",
      "vi": "chân",
      "id": "kaki"
    },
    "pos": "noun",
    "ex": "足について考える"
  },
  {
    "id": "V1679",
    "w": "味",
    "r": "あじ",
    "m": {
      "en": "taste",
      "zh-TW": "味",
      "zh-CN": "味",
      "ko": "taste",
      "vi": "taste",
      "id": "taste"
    },
    "pos": "noun",
    "ex": "味について考える"
  },
  {
    "id": "V1680",
    "w": "預かる",
    "r": "あずかる",
    "m": {
      "en": "to keep",
      "zh-TW": "保持",
      "zh-CN": "保持",
      "ko": "유지하다",
      "vi": "Giữ",
      "id": "Menjaga"
    },
    "pos": "verb-godan",
    "ex": "預かることにする"
  },
  {
    "id": "V1681",
    "w": "預ける",
    "r": "あずける",
    "m": {
      "en": "to deposit",
      "zh-TW": "預",
      "zh-CN": "预",
      "ko": "to deposit",
      "vi": "to deposit",
      "id": "to deposit"
    },
    "pos": "verb-ichidan",
    "ex": "預けることにする"
  },
  {
    "id": "V1682",
    "w": "汗",
    "r": "あせ",
    "m": {
      "en": "sweat",
      "zh-TW": "汗",
      "zh-CN": "汗",
      "ko": "sweat",
      "vi": "sweat",
      "id": "sweat"
    },
    "pos": "noun",
    "ex": "汗について考える"
  },
  {
    "id": "V1683",
    "w": "遊び",
    "r": "あそび",
    "m": {
      "en": "play",
      "zh-TW": "遊",
      "zh-CN": "游",
      "ko": "play",
      "vi": "play",
      "id": "play"
    },
    "pos": "noun",
    "ex": "遊びについて考える"
  },
  {
    "id": "V1684",
    "w": "遊ぶ",
    "r": "あそぶ",
    "m": {
      "en": "to play",
      "zh-TW": "玩",
      "zh-CN": "玩",
      "ko": "놀다",
      "vi": "Chơi",
      "id": "bermain"
    },
    "pos": "verb-godan",
    "ex": "公園で子供と遊ぶ"
  },
  {
    "id": "V1685",
    "w": "与える",
    "r": "あたえる",
    "m": {
      "en": "to give",
      "zh-TW": "給",
      "zh-CN": "给",
      "ko": "주다",
      "vi": "cho",
      "id": "memberi"
    },
    "pos": "verb-ichidan",
    "ex": "与えることにする"
  },
  {
    "id": "V1686",
    "w": "暖かい",
    "r": "あたたかい",
    "m": {
      "en": "warm",
      "zh-TW": "溫暖",
      "zh-CN": "温暖",
      "ko": "따뜻한",
      "vi": "Ấm",
      "id": "hangat"
    },
    "pos": "i-adj",
    "ex": "今日は暖かい天気だ"
  },
  {
    "id": "V1687",
    "w": "新しい",
    "r": "あたらしい",
    "m": {
      "en": "new",
      "zh-TW": "新",
      "zh-CN": "新",
      "ko": "새로운",
      "vi": "Mới",
      "id": "baru"
    },
    "pos": "i-adj",
    "ex": "新しい仕事を始める"
  },
  {
    "id": "V1688",
    "w": "頭",
    "r": "あたま",
    "m": {
      "en": "head",
      "zh-TW": "頭",
      "zh-CN": "头",
      "ko": "머리",
      "vi": "đầu",
      "id": "kepala"
    },
    "pos": "noun",
    "ex": "頭が痛くなった"
  },
  {
    "id": "V1689",
    "w": "当たる",
    "r": "あたる",
    "m": {
      "en": "to hit",
      "zh-TW": "當",
      "zh-CN": "当",
      "ko": "to hit",
      "vi": "to hit",
      "id": "to hit"
    },
    "pos": "verb-godan",
    "ex": "当たることにする"
  },
  {
    "id": "V1690",
    "w": "厚い",
    "r": "あつい",
    "m": {
      "en": "thick",
      "zh-TW": "厚",
      "zh-CN": "厚",
      "ko": "두꺼운",
      "vi": "dày",
      "id": "tebal"
    },
    "pos": "i-adj",
    "ex": "厚い本を読み終えた"
  },
  {
    "id": "V1691",
    "w": "暑い",
    "r": "あつい",
    "m": {
      "en": "hot",
      "zh-TW": "熱",
      "zh-CN": "热",
      "ko": "뜨거운",
      "vi": "Nóng",
      "id": "panas"
    },
    "pos": "i-adj",
    "ex": "今年の夏は暑い"
  },
  {
    "id": "V1692",
    "w": "熱い",
    "r": "あつい",
    "m": {
      "en": "hot",
      "zh-TW": "熱",
      "zh-CN": "热",
      "ko": "뜨거운",
      "vi": "Nóng",
      "id": "panas"
    },
    "pos": "i-adj",
    "ex": "とても熱いと思う"
  },
  {
    "id": "V1693",
    "w": "集まる",
    "r": "あつまる",
    "m": {
      "en": "to gather",
      "zh-TW": "集",
      "zh-CN": "集",
      "ko": "to gather",
      "vi": "to gather",
      "id": "to gather"
    },
    "pos": "verb-godan",
    "ex": "友達が集まってパーティーをする"
  },
  {
    "id": "V1694",
    "w": "集める",
    "r": "あつめる",
    "m": {
      "en": "to collect",
      "zh-TW": "集",
      "zh-CN": "集",
      "ko": "to collect",
      "vi": "to collect",
      "id": "to collect"
    },
    "pos": "verb-ichidan",
    "ex": "切手を集める趣味がある"
  },
  {
    "id": "V1695",
    "w": "跡",
    "r": "あと",
    "m": {
      "en": "trace",
      "zh-TW": "跡",
      "zh-CN": "迹",
      "ko": "trace",
      "vi": "trace",
      "id": "trace"
    },
    "pos": "adverb",
    "ex": "跡考える"
  },
  {
    "id": "V1696",
    "w": "姉",
    "r": "あね",
    "m": {
      "en": "older sister",
      "zh-TW": "姊",
      "zh-CN": "姉",
      "ko": "older sister",
      "vi": "older sister",
      "id": "older sister"
    },
    "pos": "noun",
    "ex": "姉は来年結婚する予定だ"
  },
  {
    "id": "V1697",
    "w": "兄",
    "r": "あに",
    "m": {
      "en": "older brother",
      "zh-TW": "兄",
      "zh-CN": "兄",
      "ko": "older brother",
      "vi": "older brother",
      "id": "older brother"
    },
    "pos": "adverb",
    "ex": "兄考える"
  },
  {
    "id": "V1698",
    "w": "危ない",
    "r": "あぶない",
    "m": {
      "en": "dangerous",
      "zh-TW": "危險",
      "zh-CN": "危险",
      "ko": "위험한",
      "vi": "Nguy hiểm",
      "id": "berbahaya"
    },
    "pos": "i-adj",
    "ex": "この道は危ないから注意して"
  },
  {
    "id": "V1699",
    "w": "甘い",
    "r": "あまい",
    "m": {
      "en": "sweet",
      "zh-TW": "甜",
      "zh-CN": "甜",
      "ko": "달콤한",
      "vi": "ngọt",
      "id": "manis"
    },
    "pos": "i-adj",
    "ex": "このケーキは甘すぎる"
  },
  {
    "id": "V1700",
    "w": "雨",
    "r": "あめ",
    "m": {
      "en": "rain",
      "zh-TW": "雨",
      "zh-CN": "雨",
      "ko": "rain",
      "vi": "rain",
      "id": "rain"
    },
    "pos": "noun",
    "ex": "午後から雨が降るらしい"
  },
  {
    "id": "V1701",
    "w": "飴",
    "r": "あめ",
    "m": {
      "en": "candy",
      "zh-TW": "飴",
      "zh-CN": "飴",
      "ko": "candy",
      "vi": "candy",
      "id": "candy"
    },
    "pos": "noun",
    "ex": "喉が痛いので飴をなめる"
  },
  {
    "id": "V1702",
    "w": "誤り",
    "r": "あやまり",
    "m": {
      "en": "error",
      "zh-TW": "誤差",
      "zh-CN": "误差",
      "ko": "오차",
      "vi": "Lỗi",
      "id": "Kesalahan"
    },
    "pos": "noun",
    "ex": "誤りについて考える"
  },
  {
    "id": "V1703",
    "w": "歩く",
    "r": "あるく",
    "m": {
      "en": "to walk",
      "zh-TW": "走路",
      "zh-CN": "走路",
      "ko": "걷다",
      "vi": "Đi bộ",
      "id": "berjalan"
    },
    "pos": "verb-godan",
    "ex": "毎日30分歩く習慣がある"
  },
  {
    "id": "V1704",
    "w": "荒い",
    "r": "あらい",
    "m": {
      "en": "rough",
      "zh-TW": "粗糙",
      "zh-CN": "粗糙",
      "ko": "거친",
      "vi": "thô",
      "id": "kasar"
    },
    "pos": "i-adj",
    "ex": "とても荒いと思う"
  },
  {
    "id": "V1705",
    "w": "洗う",
    "r": "あらう",
    "m": {
      "en": "to wash",
      "zh-TW": "洗",
      "zh-CN": "洗",
      "ko": "씻다",
      "vi": "rửa",
      "id": "mencuci"
    },
    "pos": "verb-godan",
    "ex": "手を石鹸で洗う"
  },
  {
    "id": "V1706",
    "w": "現す",
    "r": "あらわす",
    "m": {
      "en": "to show",
      "zh-TW": "展示",
      "zh-CN": "展示",
      "ko": "보여주다",
      "vi": "cho xem",
      "id": "menunjukkan"
    },
    "pos": "verb-godan",
    "ex": "現すことにする"
  },
  {
    "id": "V1707",
    "w": "有る",
    "r": "ある",
    "m": {
      "en": "to exist",
      "zh-TW": "有",
      "zh-CN": "有",
      "ko": "to exist",
      "vi": "to exist",
      "id": "to exist"
    },
    "pos": "verb-godan",
    "ex": "ここにペンがある"
  },
  {
    "id": "V1708",
    "w": "歩む",
    "r": "あゆむ",
    "m": {
      "en": "to walk",
      "zh-TW": "走路",
      "zh-CN": "走路",
      "ko": "걷다",
      "vi": "Đi bộ",
      "id": "berjalan"
    },
    "pos": "verb-godan",
    "ex": "歩むことにする"
  },
  {
    "id": "V1709",
    "w": "良い",
    "r": "いい",
    "m": {
      "en": "good",
      "zh-TW": "好",
      "zh-CN": "好",
      "ko": "좋은",
      "vi": "Tốt",
      "id": "baik"
    },
    "pos": "i-adj",
    "ex": "今日は良い天気だ"
  },
  {
    "id": "V1710",
    "w": "言う",
    "r": "いう",
    "m": {
      "en": "to say",
      "zh-TW": "說",
      "zh-CN": "说",
      "ko": "말하다",
      "vi": "nói",
      "id": "berkata"
    },
    "pos": "verb-godan",
    "ex": "思ったことを言う"
  },
  {
    "id": "V1711",
    "w": "家",
    "r": "いえ",
    "m": {
      "en": "house",
      "zh-TW": "房子",
      "zh-CN": "房子",
      "ko": "집",
      "vi": "Nhà",
      "id": "rumah"
    },
    "pos": "noun",
    "ex": "新しい家を建てる"
  },
  {
    "id": "V1712",
    "w": "如何",
    "r": "いかが",
    "m": {
      "en": "how",
      "zh-TW": "如何",
      "zh-CN": "如何",
      "ko": "어떻게",
      "vi": "như thế nào",
      "id": "bagaimana"
    },
    "pos": "noun",
    "ex": "如何について考える"
  },
  {
    "id": "V1713",
    "w": "怒り",
    "r": "いかり",
    "m": {
      "en": "anger",
      "zh-TW": "憤怒",
      "zh-CN": "愤怒",
      "ko": "분노",
      "vi": "sự tức giận",
      "id": "kemarahan"
    },
    "pos": "noun",
    "ex": "怒りについて考える"
  },
  {
    "id": "V1714",
    "w": "生きる",
    "r": "いきる",
    "m": {
      "en": "to live",
      "zh-TW": "住",
      "zh-CN": "住",
      "ko": "살다",
      "vi": "Sống",
      "id": "tinggal"
    },
    "pos": "verb-ichidan",
    "ex": "生きることにする"
  },
  {
    "id": "V1715",
    "w": "池",
    "r": "いけ",
    "m": {
      "en": "pond",
      "zh-TW": "池",
      "zh-CN": "池",
      "ko": "pond",
      "vi": "pond",
      "id": "pond"
    },
    "pos": "noun",
    "ex": "池で魚を釣る"
  },
  {
    "id": "V1716",
    "w": "石",
    "r": "いし",
    "m": {
      "en": "stone",
      "zh-TW": "石",
      "zh-CN": "石",
      "ko": "stone",
      "vi": "stone",
      "id": "stone"
    },
    "pos": "noun",
    "ex": "大きな石につまずいた"
  },
  {
    "id": "V1717",
    "w": "医師",
    "r": "いし",
    "m": {
      "en": "doctor",
      "zh-TW": "醫生",
      "zh-CN": "医生",
      "ko": "의사",
      "vi": "bác sĩ",
      "id": "dokter"
    },
    "pos": "noun",
    "ex": "医師について考える"
  },
  {
    "id": "V1718",
    "w": "意思",
    "r": "いし",
    "m": {
      "en": "intention",
      "zh-TW": "意思",
      "zh-CN": "意思",
      "ko": "intention",
      "vi": "intention",
      "id": "intention"
    },
    "pos": "noun",
    "ex": "意思について考える"
  },
  {
    "id": "V1719",
    "w": "意識",
    "r": "いしき",
    "m": {
      "en": "consciousness",
      "zh-TW": "意識",
      "zh-CN": "意识",
      "ko": "consciousness",
      "vi": "consciousness",
      "id": "consciousness"
    },
    "pos": "noun",
    "ex": "意識について考える"
  },
  {
    "id": "V1720",
    "w": "椅子",
    "r": "いす",
    "m": {
      "en": "chair",
      "zh-TW": "椅子",
      "zh-CN": "椅子",
      "ko": "chair",
      "vi": "chair",
      "id": "chair"
    },
    "pos": "verb-godan",
    "ex": "椅子ことにする"
  },
  {
    "id": "V1721",
    "w": "忙しい",
    "r": "いそがしい",
    "m": {
      "en": "busy",
      "zh-TW": "忙",
      "zh-CN": "忙",
      "ko": "바쁜",
      "vi": "Bận",
      "id": "sibuk"
    },
    "pos": "i-adj",
    "ex": "最近とても忙しい日々だ"
  },
  {
    "id": "V1722",
    "w": "急ぐ",
    "r": "いそぐ",
    "m": {
      "en": "to hurry",
      "zh-TW": "急",
      "zh-CN": "急",
      "ko": "to hurry",
      "vi": "to hurry",
      "id": "to hurry"
    },
    "pos": "verb-godan",
    "ex": "電車に間に合うように急ぐ"
  },
  {
    "id": "V1723",
    "w": "痛い",
    "r": "いたい",
    "m": {
      "en": "painful",
      "zh-TW": "痛",
      "zh-CN": "痛",
      "ko": "painful",
      "vi": "painful",
      "id": "painful"
    },
    "pos": "i-adj",
    "ex": "足が痛くて歩けない"
  },
  {
    "id": "V1724",
    "w": "頂く",
    "r": "いただく",
    "m": {
      "en": "to receive",
      "zh-TW": "收到",
      "zh-CN": "收到",
      "ko": "받다",
      "vi": "Nhận",
      "id": "menerima"
    },
    "pos": "verb-godan",
    "ex": "頂くことにする"
  },
  {
    "id": "V1725",
    "w": "一度",
    "r": "いちど",
    "m": {
      "en": "once",
      "zh-TW": "一度",
      "zh-CN": "一度",
      "ko": "한때",
      "vi": "từng",
      "id": "pernah"
    },
    "pos": "noun",
    "ex": "一度について考える"
  },
  {
    "id": "V1726",
    "w": "一番",
    "r": "いちばん",
    "m": {
      "en": "first",
      "zh-TW": "一番",
      "zh-CN": "一番",
      "ko": "먼저",
      "vi": "đầu tiên",
      "id": "pertama"
    },
    "pos": "noun",
    "ex": "クラスで一番背が高い"
  },
  {
    "id": "V1727",
    "w": "一部",
    "r": "いちぶ",
    "m": {
      "en": "part",
      "zh-TW": "一部",
      "zh-CN": "一部",
      "ko": "part",
      "vi": "part",
      "id": "part"
    },
    "pos": "verb-godan",
    "ex": "一部ことにする"
  },
  {
    "id": "V1728",
    "w": "一方",
    "r": "いっぽう",
    "m": {
      "en": "one side",
      "zh-TW": "一方",
      "zh-CN": "一方",
      "ko": "one side",
      "vi": "one side",
      "id": "one side"
    },
    "pos": "verb-godan",
    "ex": "一方ことにする"
  },
  {
    "id": "V1729",
    "w": "五つ",
    "r": "いつつ",
    "m": {
      "en": "five",
      "zh-TW": "五",
      "zh-CN": "五",
      "ko": "five",
      "vi": "five",
      "id": "five"
    },
    "pos": "verb-godan",
    "ex": "りんごを五つ買った"
  },
  {
    "id": "V1730",
    "w": "一緒",
    "r": "いっしょ",
    "m": {
      "en": "together",
      "zh-TW": "一緒",
      "zh-CN": "一緒",
      "ko": "함께",
      "vi": "cùng nhau",
      "id": "bersama"
    },
    "pos": "noun",
    "ex": "友達と一緒に映画を見る"
  },
  {
    "id": "V1731",
    "w": "井戸",
    "r": "いど",
    "m": {
      "en": "well",
      "zh-TW": "井戶",
      "zh-CN": "井户",
      "ko": "잘",
      "vi": "tốt",
      "id": "dengan baik"
    },
    "pos": "noun",
    "ex": "井戸について考える"
  },
  {
    "id": "V1732",
    "w": "命",
    "r": "いのち",
    "m": {
      "en": "life",
      "zh-TW": "生活",
      "zh-CN": "生活",
      "ko": "삶",
      "vi": "Cuộc sống",
      "id": "kehidupan"
    },
    "pos": "noun",
    "ex": "命について考える"
  },
  {
    "id": "V1733",
    "w": "今",
    "r": "いま",
    "m": {
      "en": "now",
      "zh-TW": "今",
      "zh-CN": "今",
      "ko": "now",
      "vi": "now",
      "id": "now"
    },
    "pos": "noun",
    "ex": "今すぐ出発しましょう"
  },
  {
    "id": "V1734",
    "w": "意味",
    "r": "いみ",
    "m": {
      "en": "meaning",
      "zh-TW": "意味",
      "zh-CN": "意味",
      "ko": "meaning",
      "vi": "meaning",
      "id": "meaning"
    },
    "pos": "noun",
    "ex": "この言葉の意味を教えて"
  },
  {
    "id": "V1735",
    "w": "妹",
    "r": "いもうと",
    "m": {
      "en": "younger sister",
      "zh-TW": "妹",
      "zh-CN": "妹",
      "ko": "younger sister",
      "vi": "younger sister",
      "id": "younger sister"
    },
    "pos": "adverb",
    "ex": "妹考える"
  },
  {
    "id": "V1736",
    "w": "入れる",
    "r": "いれる",
    "m": {
      "en": "to put in",
      "zh-TW": "入",
      "zh-CN": "入",
      "ko": "to put in",
      "vi": "to put in",
      "id": "to put in"
    },
    "pos": "verb-ichidan",
    "ex": "かばんに本を入れる"
  },
  {
    "id": "V1737",
    "w": "色",
    "r": "いろ",
    "m": {
      "en": "color",
      "zh-TW": "色",
      "zh-CN": "色",
      "ko": "color",
      "vi": "color",
      "id": "color"
    },
    "pos": "noun",
    "ex": "好きな色は青です"
  },
  {
    "id": "V1738",
    "w": "岩",
    "r": "いわ",
    "m": {
      "en": "rock",
      "zh-TW": "岩",
      "zh-CN": "岩",
      "ko": "rock",
      "vi": "rock",
      "id": "rock"
    },
    "pos": "noun",
    "ex": "岩について考える"
  },
  {
    "id": "V1739",
    "w": "祝う",
    "r": "いわう",
    "m": {
      "en": "to celebrate",
      "zh-TW": "祝",
      "zh-CN": "祝",
      "ko": "to celebrate",
      "vi": "to celebrate",
      "id": "to celebrate"
    },
    "pos": "verb-godan",
    "ex": "誕生日を祝う"
  },
  {
    "id": "V1740",
    "w": "受かる",
    "r": "うかる",
    "m": {
      "en": "to pass",
      "zh-TW": "受",
      "zh-CN": "受",
      "ko": "to pass",
      "vi": "to pass",
      "id": "to pass"
    },
    "pos": "verb-godan",
    "ex": "受かることにする"
  },
  {
    "id": "V1741",
    "w": "受付",
    "r": "うけつけ",
    "m": {
      "en": "reception",
      "zh-TW": "受付",
      "zh-CN": "受付",
      "ko": "reception",
      "vi": "reception",
      "id": "reception"
    },
    "pos": "noun",
    "ex": "受付について考える"
  },
  {
    "id": "V1742",
    "w": "動かす",
    "r": "うごかす",
    "m": {
      "en": "to move",
      "zh-TW": "動",
      "zh-CN": "动",
      "ko": "to move",
      "vi": "to move",
      "id": "to move"
    },
    "pos": "verb-godan",
    "ex": "動かすことにする"
  },
  {
    "id": "V1743",
    "w": "嘘",
    "r": "うそ",
    "m": {
      "en": "lie",
      "zh-TW": "謊言",
      "zh-CN": "谎言",
      "ko": "거짓말",
      "vi": "lời nói dối",
      "id": "kebohongan"
    },
    "pos": "noun",
    "ex": "嘘について考える"
  },
  {
    "id": "V1744",
    "w": "歌",
    "r": "うた",
    "m": {
      "en": "song",
      "zh-TW": "歌",
      "zh-CN": "歌",
      "ko": "song",
      "vi": "song",
      "id": "song"
    },
    "pos": "noun",
    "ex": "好きな歌を歌う"
  },
  {
    "id": "V1745",
    "w": "歌う",
    "r": "うたう",
    "m": {
      "en": "to sing",
      "zh-TW": "唱歌",
      "zh-CN": "唱歌",
      "ko": "노래하다",
      "vi": "hát",
      "id": "bernyanyi"
    },
    "pos": "verb-godan",
    "ex": "カラオケで歌う"
  },
  {
    "id": "V1746",
    "w": "打つ",
    "r": "うつ",
    "m": {
      "en": "to hit",
      "zh-TW": "打",
      "zh-CN": "打",
      "ko": "to hit",
      "vi": "to hit",
      "id": "to hit"
    },
    "pos": "verb-godan",
    "ex": "テニスボールを打つ"
  },
  {
    "id": "V1747",
    "w": "美しい",
    "r": "うつくしい",
    "m": {
      "en": "beautiful",
      "zh-TW": "美麗",
      "zh-CN": "美丽",
      "ko": "아름다운",
      "vi": "Đẹp",
      "id": "cantik"
    },
    "pos": "i-adj",
    "ex": "美しい景色に感動した"
  },
  {
    "id": "V1748",
    "w": "移る",
    "r": "うつる",
    "m": {
      "en": "to move",
      "zh-TW": "移",
      "zh-CN": "移",
      "ko": "to move",
      "vi": "to move",
      "id": "to move"
    },
    "pos": "verb-godan",
    "ex": "移ることにする"
  },
  {
    "id": "V1749",
    "w": "写る",
    "r": "うつる",
    "m": {
      "en": "to be reflected",
      "zh-TW": "寫",
      "zh-CN": "写",
      "ko": "to be reflected",
      "vi": "to be reflected",
      "id": "to be reflected"
    },
    "pos": "verb-godan",
    "ex": "写ることにする"
  },
  {
    "id": "V1750",
    "w": "器",
    "r": "うつわ",
    "m": {
      "en": "container",
      "zh-TW": "器",
      "zh-CN": "器",
      "ko": "container",
      "vi": "container",
      "id": "container"
    },
    "pos": "noun",
    "ex": "器について考える"
  },
  {
    "id": "V1751",
    "w": "産む",
    "r": "うむ",
    "m": {
      "en": "to give birth",
      "zh-TW": "產",
      "zh-CN": "产",
      "ko": "to give birth",
      "vi": "to give birth",
      "id": "to give birth"
    },
    "pos": "verb-godan",
    "ex": "産むことにする"
  },
  {
    "id": "V1752",
    "w": "売上",
    "r": "うりあげ",
    "m": {
      "en": "sales",
      "zh-TW": "賣上",
      "zh-CN": "卖上",
      "ko": "sales",
      "vi": "sales",
      "id": "sales"
    },
    "pos": "noun",
    "ex": "売上について考える"
  },
  {
    "id": "V1753",
    "w": "運",
    "r": "うん",
    "m": {
      "en": "luck",
      "zh-TW": "運",
      "zh-CN": "运",
      "ko": "luck",
      "vi": "luck",
      "id": "luck"
    },
    "pos": "noun",
    "ex": "運について考える"
  },
  {
    "id": "V1754",
    "w": "絵",
    "r": "え",
    "m": {
      "en": "picture",
      "zh-TW": "繪",
      "zh-CN": "绘",
      "ko": "picture",
      "vi": "picture",
      "id": "picture"
    },
    "pos": "noun",
    "ex": "絵を描くのが趣味だ"
  },
  {
    "id": "V1755",
    "w": "選ぶ",
    "r": "えらぶ",
    "m": {
      "en": "to choose",
      "zh-TW": "選擇",
      "zh-CN": "选择",
      "ko": "선택하다",
      "vi": "Chọn",
      "id": "memilih"
    },
    "pos": "verb-godan",
    "ex": "好きな色を選ぶ"
  },
  {
    "id": "V1756",
    "w": "偉い",
    "r": "えらい",
    "m": {
      "en": "great",
      "zh-TW": "偉",
      "zh-CN": "偉",
      "ko": "훌륭한",
      "vi": "tuyệt vời",
      "id": "hebat"
    },
    "pos": "i-adj",
    "ex": "偉い人に会った"
  },
  {
    "id": "V1757",
    "w": "縁",
    "r": "えん",
    "m": {
      "en": "edge",
      "zh-TW": "縁",
      "zh-CN": "缘",
      "ko": "edge",
      "vi": "edge",
      "id": "edge"
    },
    "pos": "noun",
    "ex": "縁について考える"
  },
  {
    "id": "V1758",
    "w": "追う",
    "r": "おう",
    "m": {
      "en": "to chase",
      "zh-TW": "追",
      "zh-CN": "追",
      "ko": "to chase",
      "vi": "to chase",
      "id": "to chase"
    },
    "pos": "verb-godan",
    "ex": "追うことにする"
  },
  {
    "id": "V1759",
    "w": "王",
    "r": "おう",
    "m": {
      "en": "king",
      "zh-TW": "王",
      "zh-CN": "王",
      "ko": "king",
      "vi": "king",
      "id": "king"
    },
    "pos": "verb-godan",
    "ex": "王ことにする"
  },
  {
    "id": "V1760",
    "w": "黄金",
    "r": "おうごん",
    "m": {
      "en": "gold",
      "zh-TW": "黄金",
      "zh-CN": "黄金",
      "ko": "gold",
      "vi": "gold",
      "id": "gold"
    },
    "pos": "noun",
    "ex": "黄金について考える"
  },
  {
    "id": "V1761",
    "w": "大きい",
    "r": "おおきい",
    "m": {
      "en": "big",
      "zh-TW": "大",
      "zh-CN": "大",
      "ko": "큰",
      "vi": "lớn",
      "id": "besar"
    },
    "pos": "i-adj",
    "ex": "大きい荷物を運ぶ"
  },
  {
    "id": "V1762",
    "w": "大きな",
    "r": "おおきな",
    "m": {
      "en": "large",
      "zh-TW": "大",
      "zh-CN": "大",
      "ko": "large",
      "vi": "large",
      "id": "large"
    },
    "pos": "noun",
    "ex": "大きなについて考える"
  },
  {
    "id": "V1763",
    "w": "多い",
    "r": "おおい",
    "m": {
      "en": "many",
      "zh-TW": "多",
      "zh-CN": "多",
      "ko": "many",
      "vi": "many",
      "id": "many"
    },
    "pos": "i-adj",
    "ex": "今年は雨が多い"
  },
  {
    "id": "V1764",
    "w": "覆う",
    "r": "おおう",
    "m": {
      "en": "to cover",
      "zh-TW": "覆",
      "zh-CN": "覆",
      "ko": "to cover",
      "vi": "to cover",
      "id": "to cover"
    },
    "pos": "verb-godan",
    "ex": "覆うことにする"
  },
  {
    "id": "V1765",
    "w": "丘",
    "r": "おか",
    "m": {
      "en": "hill",
      "zh-TW": "丘",
      "zh-CN": "丘",
      "ko": "hill",
      "vi": "hill",
      "id": "hill"
    },
    "pos": "noun",
    "ex": "丘について考える"
  },
  {
    "id": "V1766",
    "w": "岡",
    "r": "おか",
    "m": {
      "en": "hill",
      "zh-TW": "岡",
      "zh-CN": "岡",
      "ko": "hill",
      "vi": "hill",
      "id": "hill"
    },
    "pos": "noun",
    "ex": "岡について考える"
  },
  {
    "id": "V1767",
    "w": "お金",
    "r": "おかね",
    "m": {
      "en": "money",
      "zh-TW": "錢",
      "zh-CN": "钱",
      "ko": "돈",
      "vi": "Tiền",
      "id": "uang"
    },
    "pos": "noun",
    "ex": "お金について考える"
  },
  {
    "id": "V1768",
    "w": "置く",
    "r": "おく",
    "m": {
      "en": "to put",
      "zh-TW": "放",
      "zh-CN": "放",
      "ko": "놓다",
      "vi": "Đặt",
      "id": "meletakkan"
    },
    "pos": "verb-godan",
    "ex": "テーブルの上に花を置く"
  },
  {
    "id": "V1769",
    "w": "送る",
    "r": "おくる",
    "m": {
      "en": "to send",
      "zh-TW": "送",
      "zh-CN": "送",
      "ko": "보내다",
      "vi": "Gửi",
      "id": "mengirim"
    },
    "pos": "verb-godan",
    "ex": "友達にメールを送る"
  },
  {
    "id": "V1770",
    "w": "贈る",
    "r": "おくる",
    "m": {
      "en": "to give",
      "zh-TW": "給",
      "zh-CN": "给",
      "ko": "주다",
      "vi": "cho",
      "id": "memberi"
    },
    "pos": "verb-godan",
    "ex": "贈ることにする"
  },
  {
    "id": "V1771",
    "w": "遅れる",
    "r": "おくれる",
    "m": {
      "en": "to be late",
      "zh-TW": "遲",
      "zh-CN": "迟",
      "ko": "to be late",
      "vi": "to be late",
      "id": "to be late"
    },
    "pos": "verb-ichidan",
    "ex": "約束の時間に遅れる"
  },
  {
    "id": "V1772",
    "w": "起こる",
    "r": "おこる",
    "m": {
      "en": "to occur",
      "zh-TW": "起",
      "zh-CN": "起",
      "ko": "to occur",
      "vi": "to occur",
      "id": "to occur"
    },
    "pos": "verb-godan",
    "ex": "起こることにする"
  },
  {
    "id": "V1773",
    "w": "怒る",
    "r": "おこる",
    "m": {
      "en": "to get angry",
      "zh-TW": "怒",
      "zh-CN": "怒",
      "ko": "to get angry",
      "vi": "to get angry",
      "id": "to get angry"
    },
    "pos": "verb-godan",
    "ex": "彼の態度に怒る",
    "syn": [
      "腹を立てる",
      "憤る",
      "激怒する"
    ]
  },
  {
    "id": "V1774",
    "w": "行う",
    "r": "おこなう",
    "m": {
      "en": "to conduct",
      "zh-TW": "行",
      "zh-CN": "行",
      "ko": "to conduct",
      "vi": "to conduct",
      "id": "to conduct"
    },
    "pos": "verb-godan",
    "ex": "行うことにする"
  },
  {
    "id": "V1775",
    "w": "押さえる",
    "r": "おさえる",
    "m": {
      "en": "to hold down",
      "zh-TW": "押",
      "zh-CN": "押",
      "ko": "to hold down",
      "vi": "to hold down",
      "id": "to hold down"
    },
    "pos": "verb-ichidan",
    "ex": "押さえることにする"
  },
  {
    "id": "V1776",
    "w": "教える",
    "r": "おしえる",
    "m": {
      "en": "to teach",
      "zh-TW": "教",
      "zh-CN": "教",
      "ko": "가르치다",
      "vi": "Dạy",
      "id": "mengajar"
    },
    "pos": "verb-ichidan",
    "ex": "子供に勉強を教える"
  },
  {
    "id": "V1777",
    "w": "押す",
    "r": "おす",
    "m": {
      "en": "to push",
      "zh-TW": "押",
      "zh-CN": "押",
      "ko": "to push",
      "vi": "to push",
      "id": "to push"
    },
    "pos": "verb-godan",
    "ex": "ボタンを押す"
  },
  {
    "id": "V1778",
    "w": "男",
    "r": "おとこ",
    "m": {
      "en": "man",
      "zh-TW": "男人",
      "zh-CN": "男人",
      "ko": "남자",
      "vi": "đàn ông",
      "id": "pria"
    },
    "pos": "noun",
    "ex": "男について考える"
  },
  {
    "id": "V1779",
    "w": "弟",
    "r": "おとうと",
    "m": {
      "en": "younger brother",
      "zh-TW": "弟",
      "zh-CN": "弟",
      "ko": "younger brother",
      "vi": "younger brother",
      "id": "younger brother"
    },
    "pos": "adverb",
    "ex": "弟考える"
  },
  {
    "id": "V1780",
    "w": "大人",
    "r": "おとな",
    "m": {
      "en": "adult",
      "zh-TW": "大人",
      "zh-CN": "大人",
      "ko": "adult",
      "vi": "adult",
      "id": "adult"
    },
    "pos": "noun",
    "ex": "大人について考える"
  },
  {
    "id": "V1781",
    "w": "踊り",
    "r": "おどり",
    "m": {
      "en": "dance",
      "zh-TW": "踊",
      "zh-CN": "踊",
      "ko": "dance",
      "vi": "dance",
      "id": "dance"
    },
    "pos": "noun",
    "ex": "踊りについて考える"
  },
  {
    "id": "V1782",
    "w": "踊る",
    "r": "おどる",
    "m": {
      "en": "to dance",
      "zh-TW": "跳舞",
      "zh-CN": "跳舞",
      "ko": "춤추다",
      "vi": "nhảy",
      "id": "menari"
    },
    "pos": "verb-godan",
    "ex": "音楽に合わせて踊る"
  },
  {
    "id": "V1783",
    "w": "驚く",
    "r": "おどろく",
    "m": {
      "en": "to be surprised",
      "zh-TW": "驚",
      "zh-CN": "惊",
      "ko": "to be surprised",
      "vi": "to be surprised",
      "id": "to be surprised"
    },
    "pos": "verb-godan",
    "ex": "結果に驚く",
    "syn": [
      "びっくりする",
      "仰天する",
      "衝撃を受ける"
    ]
  },
  {
    "id": "V1784",
    "w": "お腹",
    "r": "おなか",
    "m": {
      "en": "stomach",
      "zh-TW": "腹",
      "zh-CN": "腹",
      "ko": "stomach",
      "vi": "stomach",
      "id": "stomach"
    },
    "pos": "noun",
    "ex": "お腹について考える"
  },
  {
    "id": "V1785",
    "w": "同じ",
    "r": "おなじ",
    "m": {
      "en": "same",
      "zh-TW": "相同",
      "zh-CN": "相同",
      "ko": "같은",
      "vi": "Giống",
      "id": "sama"
    },
    "pos": "noun",
    "ex": "同じ意見を持っている"
  },
  {
    "id": "V1786",
    "w": "覚える",
    "r": "おぼえる",
    "m": {
      "en": "to remember",
      "zh-TW": "記得",
      "zh-CN": "记得",
      "ko": "기억하다",
      "vi": "nhớ",
      "id": "ingat"
    },
    "pos": "verb-ichidan",
    "ex": "覚えることにする"
  },
  {
    "id": "V1787",
    "w": "溺れる",
    "r": "おぼれる",
    "m": {
      "en": "to drown",
      "zh-TW": "溺",
      "zh-CN": "溺",
      "ko": "to drown",
      "vi": "to drown",
      "id": "to drown"
    },
    "pos": "verb-ichidan",
    "ex": "溺れることにする"
  },
  {
    "id": "V1788",
    "w": "思い",
    "r": "おもい",
    "m": {
      "en": "thought",
      "zh-TW": "想法",
      "zh-CN": "想法",
      "ko": "생각",
      "vi": "suy nghĩ",
      "id": "pikiran"
    },
    "pos": "i-adj",
    "ex": "とても思いと思う"
  },
  {
    "id": "V1789",
    "w": "思い出",
    "r": "おもいで",
    "m": {
      "en": "memory",
      "zh-TW": "思出",
      "zh-CN": "思出",
      "ko": "memory",
      "vi": "memory",
      "id": "memory"
    },
    "pos": "noun",
    "ex": "思い出について考える"
  },
  {
    "id": "V1790",
    "w": "思う",
    "r": "おもう",
    "m": {
      "en": "to think",
      "zh-TW": "想",
      "zh-CN": "想",
      "ko": "생각하다",
      "vi": "Nghĩ",
      "id": "berpikir"
    },
    "pos": "verb-godan",
    "ex": "思うことにする"
  },
  {
    "id": "V1791",
    "w": "重い",
    "r": "おもい",
    "m": {
      "en": "heavy",
      "zh-TW": "重",
      "zh-CN": "重",
      "ko": "무거운",
      "vi": "Nặng",
      "id": "berat"
    },
    "pos": "i-adj",
    "ex": "このかばんは重い"
  },
  {
    "id": "V1792",
    "w": "面白い",
    "r": "おもしろい",
    "m": {
      "en": "interesting",
      "zh-TW": "面白",
      "zh-CN": "面白",
      "ko": "interesting",
      "vi": "interesting",
      "id": "interesting"
    },
    "pos": "i-adj",
    "ex": "この本は面白い"
  },
  {
    "id": "V1793",
    "w": "玩具",
    "r": "おもちゃ",
    "m": {
      "en": "toy",
      "zh-TW": "玩具",
      "zh-CN": "玩具",
      "ko": "toy",
      "vi": "toy",
      "id": "toy"
    },
    "pos": "noun",
    "ex": "玩具について考える"
  },
  {
    "id": "V1794",
    "w": "親",
    "r": "おや",
    "m": {
      "en": "parent",
      "zh-TW": "親",
      "zh-CN": "亲",
      "ko": "parent",
      "vi": "parent",
      "id": "parent"
    },
    "pos": "noun",
    "ex": "親について考える"
  },
  {
    "id": "V1795",
    "w": "泳ぐ",
    "r": "およぐ",
    "m": {
      "en": "to swim",
      "zh-TW": "游泳",
      "zh-CN": "游泳",
      "ko": "수영하다",
      "vi": "bơi",
      "id": "berenang"
    },
    "pos": "verb-godan",
    "ex": "プールで泳ぐ"
  },
  {
    "id": "V1796",
    "w": "及ぶ",
    "r": "およぶ",
    "m": {
      "en": "to reach",
      "zh-TW": "及",
      "zh-CN": "及",
      "ko": "to reach",
      "vi": "to reach",
      "id": "to reach"
    },
    "pos": "verb-godan",
    "ex": "及ぶことにする"
  },
  {
    "id": "V1797",
    "w": "降りる",
    "r": "おりる",
    "m": {
      "en": "to get off",
      "zh-TW": "降",
      "zh-CN": "降",
      "ko": "to get off",
      "vi": "to get off",
      "id": "to get off"
    },
    "pos": "verb-ichidan",
    "ex": "電車から降りる"
  },
  {
    "id": "V1798",
    "w": "居る",
    "r": "おる",
    "m": {
      "en": "to be",
      "zh-TW": "居",
      "zh-CN": "居",
      "ko": "to be",
      "vi": "to be",
      "id": "to be"
    },
    "pos": "verb-godan",
    "ex": "居ることにする"
  },
  {
    "id": "V1799",
    "w": "下ろす",
    "r": "おろす",
    "m": {
      "en": "to lower",
      "zh-TW": "降低",
      "zh-CN": "降低",
      "ko": "낮추다",
      "vi": "hạ",
      "id": "menurunkan"
    },
    "pos": "verb-godan",
    "ex": "下ろすことにする"
  },
  {
    "id": "V1800",
    "w": "終わり",
    "r": "おわり",
    "m": {
      "en": "end",
      "zh-TW": "終",
      "zh-CN": "终",
      "ko": "end",
      "vi": "end",
      "id": "end"
    },
    "pos": "noun",
    "ex": "終わりについて考える"
  },
  {
    "id": "V1801",
    "w": "終わる",
    "r": "おわる",
    "m": {
      "en": "to end",
      "zh-TW": "結束",
      "zh-CN": "结束",
      "ko": "끝나다",
      "vi": "kết thúc",
      "id": "berakhir"
    },
    "pos": "verb-godan",
    "ex": "映画が終わった"
  },
  {
    "id": "V1802",
    "w": "音楽",
    "r": "おんがく",
    "m": {
      "en": "music",
      "zh-TW": "音樂",
      "zh-CN": "音乐",
      "ko": "music",
      "vi": "music",
      "id": "music"
    },
    "pos": "verb-godan",
    "ex": "音楽ことにする"
  },
  {
    "id": "V1803",
    "w": "女",
    "r": "おんな",
    "m": {
      "en": "woman",
      "zh-TW": "女人",
      "zh-CN": "女人",
      "ko": "여자",
      "vi": "phụ nữ",
      "id": "wanita"
    },
    "pos": "noun",
    "ex": "女の人が話しかけてきた"
  },
  {
    "id": "V1804",
    "w": "温度",
    "r": "おんど",
    "m": {
      "en": "temperature",
      "zh-TW": "溫度",
      "zh-CN": "温度",
      "ko": "temperature",
      "vi": "temperature",
      "id": "temperature"
    },
    "pos": "noun",
    "ex": "温度について考える"
  },
  {
    "id": "V1805",
    "w": "蚊",
    "r": "か",
    "m": {
      "en": "mosquito",
      "zh-TW": "蚊",
      "zh-CN": "蚊",
      "ko": "mosquito",
      "vi": "mosquito",
      "id": "mosquito"
    },
    "pos": "noun",
    "ex": "蚊について考える"
  },
  {
    "id": "V1806",
    "w": "課",
    "r": "か",
    "m": {
      "en": "section",
      "zh-TW": "課",
      "zh-CN": "课",
      "ko": "section",
      "vi": "section",
      "id": "section"
    },
    "pos": "noun",
    "ex": "課について考える"
  },
  {
    "id": "V1807",
    "w": "貝",
    "r": "かい",
    "m": {
      "en": "shellfish",
      "zh-TW": "貝",
      "zh-CN": "貝",
      "ko": "shellfish",
      "vi": "shellfish",
      "id": "shellfish"
    },
    "pos": "i-adj",
    "ex": "とても貝と思う"
  },
  {
    "id": "V1808",
    "w": "会議",
    "r": "かいぎ",
    "m": {
      "en": "meeting",
      "zh-TW": "會議",
      "zh-CN": "会议",
      "ko": "회의",
      "vi": "Cuộc họp",
      "id": "rapat"
    },
    "pos": "noun",
    "ex": "会議について考える"
  },
  {
    "id": "V1809",
    "w": "海外",
    "r": "かいがい",
    "m": {
      "en": "overseas",
      "zh-TW": "海外",
      "zh-CN": "海外",
      "ko": "overseas",
      "vi": "overseas",
      "id": "overseas"
    },
    "pos": "i-adj",
    "ex": "とても海外と思う"
  },
  {
    "id": "V1810",
    "w": "開始",
    "r": "かいし",
    "m": {
      "en": "start",
      "zh-TW": "開始",
      "zh-CN": "開始",
      "ko": "start",
      "vi": "start",
      "id": "start"
    },
    "pos": "noun",
    "ex": "開始について考える"
  },
  {
    "id": "V1811",
    "w": "会社",
    "r": "かいしゃ",
    "m": {
      "en": "company",
      "zh-TW": "公司",
      "zh-CN": "公司",
      "ko": "회사",
      "vi": "Công ty",
      "id": "perusahaan"
    },
    "pos": "noun",
    "ex": "会社に出勤する"
  },
  {
    "id": "V1812",
    "w": "解決",
    "r": "かいけつ",
    "m": {
      "en": "solution",
      "zh-TW": "解決方案",
      "zh-CN": "解决方案",
      "ko": "해결책",
      "vi": "Giải pháp",
      "id": "Solusi"
    },
    "pos": "verb-godan",
    "ex": "問題を解決する"
  },
  {
    "id": "V1813",
    "w": "会話",
    "r": "かいわ",
    "m": {
      "en": "conversation",
      "zh-TW": "會話",
      "zh-CN": "会话",
      "ko": "conversation",
      "vi": "conversation",
      "id": "conversation"
    },
    "pos": "noun",
    "ex": "友達と会話を楽しむ"
  },
  {
    "id": "V1814",
    "w": "返す",
    "r": "かえす",
    "m": {
      "en": "to return",
      "zh-TW": "返回",
      "zh-CN": "返回",
      "ko": "돌아오다",
      "vi": "Trở về",
      "id": "kembali"
    },
    "pos": "verb-godan",
    "ex": "返すことにする"
  },
  {
    "id": "V1815",
    "w": "帰る",
    "r": "かえる",
    "m": {
      "en": "to go home",
      "zh-TW": "歸",
      "zh-CN": "归",
      "ko": "to go home",
      "vi": "to go home",
      "id": "to go home"
    },
    "pos": "verb-ichidan",
    "ex": "帰ることにする"
  },
  {
    "id": "V1816",
    "w": "変える",
    "r": "かえる",
    "m": {
      "en": "to change",
      "zh-TW": "改變",
      "zh-CN": "改变",
      "ko": "바꾸다",
      "vi": "Thay đổi",
      "id": "berubah"
    },
    "pos": "verb-ichidan",
    "ex": "変えることにする"
  },
  {
    "id": "V1817",
    "w": "替える",
    "r": "かえる",
    "m": {
      "en": "to exchange",
      "zh-TW": "替",
      "zh-CN": "替",
      "ko": "to exchange",
      "vi": "to exchange",
      "id": "to exchange"
    },
    "pos": "verb-ichidan",
    "ex": "替えることにする"
  },
  {
    "id": "V1818",
    "w": "蛙",
    "r": "かえる",
    "m": {
      "en": "frog",
      "zh-TW": "蛙",
      "zh-CN": "蛙",
      "ko": "frog",
      "vi": "frog",
      "id": "frog"
    },
    "pos": "verb-ichidan",
    "ex": "蛙ことにする"
  },
  {
    "id": "V1819",
    "w": "顔",
    "r": "かお",
    "m": {
      "en": "face",
      "zh-TW": "臉",
      "zh-CN": "脸",
      "ko": "얼굴",
      "vi": "mặt",
      "id": "wajah"
    },
    "pos": "noun",
    "ex": "顔について考える"
  },
  {
    "id": "V1820",
    "w": "香り",
    "r": "かおり",
    "m": {
      "en": "fragrance",
      "zh-TW": "香",
      "zh-CN": "香",
      "ko": "fragrance",
      "vi": "fragrance",
      "id": "fragrance"
    },
    "pos": "noun",
    "ex": "香りについて考える"
  },
  {
    "id": "V1821",
    "w": "鍵",
    "r": "かぎ",
    "m": {
      "en": "key",
      "zh-TW": "鍵",
      "zh-CN": "鍵",
      "ko": "key",
      "vi": "key",
      "id": "key"
    },
    "pos": "noun",
    "ex": "鍵について考える"
  },
  {
    "id": "V1822",
    "w": "書く",
    "r": "かく",
    "m": {
      "en": "to write",
      "zh-TW": "寫",
      "zh-CN": "写",
      "ko": "쓰다",
      "vi": "Viết",
      "id": "menulis"
    },
    "pos": "verb-godan",
    "ex": "日記を書く習慣がある"
  },
  {
    "id": "V1823",
    "w": "欠く",
    "r": "かく",
    "m": {
      "en": "to lack",
      "zh-TW": "缺",
      "zh-CN": "缺",
      "ko": "to lack",
      "vi": "to lack",
      "id": "to lack"
    },
    "pos": "verb-godan",
    "ex": "欠くことにする"
  },
  {
    "id": "V1824",
    "w": "角",
    "r": "かく",
    "m": {
      "en": "corner",
      "zh-TW": "角",
      "zh-CN": "角",
      "ko": "corner",
      "vi": "corner",
      "id": "corner"
    },
    "pos": "verb-godan",
    "ex": "角ことにする"
  },
  {
    "id": "V1825",
    "w": "確認",
    "r": "かくにん",
    "m": {
      "en": "confirmation",
      "zh-TW": "確認",
      "zh-CN": "确认",
      "ko": "confirmation",
      "vi": "confirmation",
      "id": "confirmation"
    },
    "pos": "noun",
    "ex": "予約を確認する",
    "syn": [
      "チェックする",
      "確かめる",
      "照合する"
    ]
  },
  {
    "id": "V1826",
    "w": "影",
    "r": "かげ",
    "m": {
      "en": "shadow",
      "zh-TW": "影",
      "zh-CN": "影",
      "ko": "shadow",
      "vi": "shadow",
      "id": "shadow"
    },
    "pos": "noun",
    "ex": "影について考える"
  },
  {
    "id": "V1827",
    "w": "掛ける",
    "r": "かける",
    "m": {
      "en": "to hang",
      "zh-TW": "掛",
      "zh-CN": "掛",
      "ko": "to hang",
      "vi": "to hang",
      "id": "to hang"
    },
    "pos": "verb-ichidan",
    "ex": "掛けることにする"
  },
  {
    "id": "V1828",
    "w": "風",
    "r": "かぜ",
    "m": {
      "en": "wind",
      "zh-TW": "風",
      "zh-CN": "风",
      "ko": "wind",
      "vi": "wind",
      "id": "wind"
    },
    "pos": "noun",
    "ex": "強い風が吹いている"
  },
  {
    "id": "V1829",
    "w": "風邪",
    "r": "かぜ",
    "m": {
      "en": "cold",
      "zh-TW": "冷",
      "zh-CN": "冷",
      "ko": "차가운",
      "vi": "Lạnh",
      "id": "dingin"
    },
    "pos": "noun",
    "ex": "風邪について考える"
  },
  {
    "id": "V1830",
    "w": "家族",
    "r": "かぞく",
    "m": {
      "en": "family",
      "zh-TW": "家庭",
      "zh-CN": "家庭",
      "ko": "가족",
      "vi": "Gia đình",
      "id": "keluarga"
    },
    "pos": "verb-godan",
    "ex": "家族と食事をする"
  },
  {
    "id": "V1831",
    "w": "肩",
    "r": "かた",
    "m": {
      "en": "shoulder",
      "zh-TW": "肩",
      "zh-CN": "肩",
      "ko": "shoulder",
      "vi": "shoulder",
      "id": "shoulder"
    },
    "pos": "noun",
    "ex": "肩について考える"
  },
  {
    "id": "V1832",
    "w": "形",
    "r": "かたち",
    "m": {
      "en": "shape",
      "zh-TW": "形",
      "zh-CN": "形",
      "ko": "shape",
      "vi": "shape",
      "id": "shape"
    },
    "pos": "noun",
    "ex": "形について考える"
  },
  {
    "id": "V1833",
    "w": "片付ける",
    "r": "かたづける",
    "m": {
      "en": "to tidy",
      "zh-TW": "片付",
      "zh-CN": "片付",
      "ko": "to tidy",
      "vi": "to tidy",
      "id": "to tidy"
    },
    "pos": "verb-ichidan",
    "ex": "片付けることにする"
  },
  {
    "id": "V1834",
    "w": "勝つ",
    "r": "かつ",
    "m": {
      "en": "to win",
      "zh-TW": "贏",
      "zh-CN": "赢",
      "ko": "이기다",
      "vi": "thắng",
      "id": "menang"
    },
    "pos": "verb-godan",
    "ex": "勝つことにする"
  },
  {
    "id": "V1835",
    "w": "活動",
    "r": "かつどう",
    "m": {
      "en": "activity",
      "zh-TW": "活動",
      "zh-CN": "活动",
      "ko": "활동",
      "vi": "Hoạt động",
      "id": "Aktivitas"
    },
    "pos": "verb-godan",
    "ex": "活動ことにする"
  },
  {
    "id": "V1836",
    "w": "悲しい",
    "r": "かなしい",
    "m": {
      "en": "sad",
      "zh-TW": "悲傷",
      "zh-CN": "悲伤",
      "ko": "슬픈",
      "vi": "Buồn",
      "id": "sedih"
    },
    "pos": "i-adj",
    "ex": "別れが悲しい"
  },
  {
    "id": "V1837",
    "w": "悲しむ",
    "r": "かなしむ",
    "m": {
      "en": "to grieve",
      "zh-TW": "悲",
      "zh-CN": "悲",
      "ko": "to grieve",
      "vi": "to grieve",
      "id": "to grieve"
    },
    "pos": "verb-godan",
    "ex": "別れを悲しむ",
    "syn": [
      "嘆く",
      "哀しむ",
      "落胆する"
    ]
  },
  {
    "id": "V1838",
    "w": "金",
    "r": "かね",
    "m": {
      "en": "money",
      "zh-TW": "錢",
      "zh-CN": "钱",
      "ko": "돈",
      "vi": "Tiền",
      "id": "uang"
    },
    "pos": "noun",
    "ex": "お金を貯める"
  },
  {
    "id": "V1839",
    "w": "彼女",
    "r": "かのじょ",
    "m": {
      "en": "she",
      "zh-TW": "彼女",
      "zh-CN": "彼女",
      "ko": "she",
      "vi": "she",
      "id": "she"
    },
    "pos": "noun",
    "ex": "彼女について考える"
  },
  {
    "id": "V1840",
    "w": "壁",
    "r": "かべ",
    "m": {
      "en": "wall",
      "zh-TW": "壁",
      "zh-CN": "壁",
      "ko": "wall",
      "vi": "wall",
      "id": "wall"
    },
    "pos": "noun",
    "ex": "壁について考える"
  },
  {
    "id": "V1841",
    "w": "紙",
    "r": "かみ",
    "m": {
      "en": "paper",
      "zh-TW": "紙",
      "zh-CN": "紙",
      "ko": "paper",
      "vi": "paper",
      "id": "paper"
    },
    "pos": "noun",
    "ex": "紙について考える"
  },
  {
    "id": "V1842",
    "w": "髪",
    "r": "かみ",
    "m": {
      "en": "hair",
      "zh-TW": "髮",
      "zh-CN": "发",
      "ko": "hair",
      "vi": "hair",
      "id": "hair"
    },
    "pos": "noun",
    "ex": "髪について考える"
  },
  {
    "id": "V1843",
    "w": "神",
    "r": "かみ",
    "m": {
      "en": "god",
      "zh-TW": "神",
      "zh-CN": "神",
      "ko": "god",
      "vi": "god",
      "id": "god"
    },
    "pos": "noun",
    "ex": "神について考える"
  },
  {
    "id": "V1844",
    "w": "体",
    "r": "からだ",
    "m": {
      "en": "body",
      "zh-TW": "身體",
      "zh-CN": "身体",
      "ko": "몸",
      "vi": "cơ thể",
      "id": "tubuh"
    },
    "pos": "noun",
    "ex": "体を鍛える"
  },
  {
    "id": "V1845",
    "w": "空",
    "r": "から",
    "m": {
      "en": "empty",
      "zh-TW": "空",
      "zh-CN": "空",
      "ko": "빈",
      "vi": "trống",
      "id": "kosong"
    },
    "pos": "noun",
    "ex": "空について考える"
  },
  {
    "id": "V1846",
    "w": "辛い",
    "r": "からい",
    "m": {
      "en": "spicy",
      "zh-TW": "辣",
      "zh-CN": "辣",
      "ko": "매운",
      "vi": "cay",
      "id": "pedas"
    },
    "pos": "i-adj",
    "ex": "とても辛いと思う"
  },
  {
    "id": "V1847",
    "w": "借りる",
    "r": "かりる",
    "m": {
      "en": "to borrow",
      "zh-TW": "借",
      "zh-CN": "借",
      "ko": "to borrow",
      "vi": "to borrow",
      "id": "to borrow"
    },
    "pos": "verb-ichidan",
    "ex": "図書館で本を借りる"
  },
  {
    "id": "V1848",
    "w": "彼",
    "r": "かれ",
    "m": {
      "en": "he",
      "zh-TW": "彼",
      "zh-CN": "彼",
      "ko": "he",
      "vi": "he",
      "id": "he"
    },
    "pos": "noun",
    "ex": "彼について考える"
  },
  {
    "id": "V1849",
    "w": "彼ら",
    "r": "かれら",
    "m": {
      "en": "they",
      "zh-TW": "彼",
      "zh-CN": "彼",
      "ko": "they",
      "vi": "they",
      "id": "they"
    },
    "pos": "noun",
    "ex": "彼らについて考える"
  },
  {
    "id": "V1850",
    "w": "可愛い",
    "r": "かわいい",
    "m": {
      "en": "cute",
      "zh-TW": "可愛",
      "zh-CN": "可愛",
      "ko": "cute",
      "vi": "cute",
      "id": "cute"
    },
    "pos": "i-adj",
    "ex": "とても可愛いと思う"
  },
  {
    "id": "V1851",
    "w": "乾く",
    "r": "かわく",
    "m": {
      "en": "to dry",
      "zh-TW": "乾燥",
      "zh-CN": "干燥",
      "ko": "말리다",
      "vi": "làm khô",
      "id": "mengeringkan"
    },
    "pos": "verb-godan",
    "ex": "乾くことにする"
  },
  {
    "id": "V1852",
    "w": "代わる",
    "r": "かわる",
    "m": {
      "en": "to substitute",
      "zh-TW": "代",
      "zh-CN": "代",
      "ko": "to substitute",
      "vi": "to substitute",
      "id": "to substitute"
    },
    "pos": "verb-godan",
    "ex": "代わることにする"
  },
  {
    "id": "V1853",
    "w": "変わる",
    "r": "かわる",
    "m": {
      "en": "to change",
      "zh-TW": "改變",
      "zh-CN": "改变",
      "ko": "바꾸다",
      "vi": "Thay đổi",
      "id": "berubah"
    },
    "pos": "verb-godan",
    "ex": "季節が変わる"
  },
  {
    "id": "V1854",
    "w": "感覚",
    "r": "かんかく",
    "m": {
      "en": "sense",
      "zh-TW": "感覺",
      "zh-CN": "感觉",
      "ko": "sense",
      "vi": "sense",
      "id": "sense"
    },
    "pos": "verb-godan",
    "ex": "感覚ことにする"
  },
  {
    "id": "V1855",
    "w": "関係",
    "r": "かんけい",
    "m": {
      "en": "relationship",
      "zh-TW": "關係",
      "zh-CN": "关系",
      "ko": "관계",
      "vi": "Mối quan hệ",
      "id": "Hubungan"
    },
    "pos": "i-adj",
    "ex": "人間関係を大切にする",
    "syn": [
      "つながり",
      "絆",
      "関連"
    ]
  },
  {
    "id": "V1856",
    "w": "環境",
    "r": "かんきょう",
    "m": {
      "en": "environment",
      "zh-TW": "環境",
      "zh-CN": "环境",
      "ko": "환경",
      "vi": "Môi trường",
      "id": "Lingkungan"
    },
    "pos": "verb-godan",
    "ex": "環境ことにする"
  },
  {
    "id": "V1857",
    "w": "観光",
    "r": "かんこう",
    "m": {
      "en": "sightseeing",
      "zh-TW": "觀光",
      "zh-CN": "观光",
      "ko": "sightseeing",
      "vi": "sightseeing",
      "id": "sightseeing"
    },
    "pos": "verb-godan",
    "ex": "観光ことにする"
  },
  {
    "id": "V1858",
    "w": "簡単",
    "r": "かんたん",
    "m": {
      "en": "simple",
      "zh-TW": "簡單",
      "zh-CN": "简单",
      "ko": "간단",
      "vi": "Đơn giản",
      "id": "sederhana"
    },
    "pos": "noun",
    "ex": "この問題は簡単だ"
  },
  {
    "id": "V1859",
    "w": "感動",
    "r": "かんどう",
    "m": {
      "en": "emotion",
      "zh-TW": "感動",
      "zh-CN": "感动",
      "ko": "emotion",
      "vi": "emotion",
      "id": "emotion"
    },
    "pos": "verb-godan",
    "ex": "感動ことにする"
  },
  {
    "id": "V1860",
    "w": "関心",
    "r": "かんしん",
    "m": {
      "en": "interest",
      "zh-TW": "關心",
      "zh-CN": "关心",
      "ko": "interest",
      "vi": "interest",
      "id": "interest"
    },
    "pos": "noun",
    "ex": "関心について考える"
  },
  {
    "id": "V1861",
    "w": "完成",
    "r": "かんせい",
    "m": {
      "en": "completion",
      "zh-TW": "完成",
      "zh-CN": "完成",
      "ko": "completion",
      "vi": "completion",
      "id": "completion"
    },
    "pos": "i-adj",
    "ex": "とても完成と思う"
  },
  {
    "id": "V1862",
    "w": "感謝",
    "r": "かんしゃ",
    "m": {
      "en": "gratitude",
      "zh-TW": "感謝",
      "zh-CN": "感谢",
      "ko": "gratitude",
      "vi": "gratitude",
      "id": "gratitude"
    },
    "pos": "noun",
    "ex": "感謝について考える"
  },
  {
    "id": "V1863",
    "w": "完全",
    "r": "かんぜん",
    "m": {
      "en": "complete",
      "zh-TW": "完全",
      "zh-CN": "完全",
      "ko": "complete",
      "vi": "complete",
      "id": "complete"
    },
    "pos": "noun",
    "ex": "完全について考える"
  },
  {
    "id": "V1864",
    "w": "感想",
    "r": "かんそう",
    "m": {
      "en": "impression",
      "zh-TW": "感想",
      "zh-CN": "感想",
      "ko": "impression",
      "vi": "impression",
      "id": "impression"
    },
    "pos": "verb-godan",
    "ex": "感想ことにする"
  },
  {
    "id": "V1865",
    "w": "乾燥",
    "r": "かんそう",
    "m": {
      "en": "drying",
      "zh-TW": "乾燥",
      "zh-CN": "乾燥",
      "ko": "drying",
      "vi": "drying",
      "id": "drying"
    },
    "pos": "verb-godan",
    "ex": "乾燥ことにする"
  },
  {
    "id": "V1866",
    "w": "観点",
    "r": "かんてん",
    "m": {
      "en": "viewpoint",
      "zh-TW": "觀點",
      "zh-CN": "观点",
      "ko": "viewpoint",
      "vi": "viewpoint",
      "id": "viewpoint"
    },
    "pos": "noun",
    "ex": "観点について考える"
  },
  {
    "id": "V1867",
    "w": "気",
    "r": "き",
    "m": {
      "en": "spirit",
      "zh-TW": "氣",
      "zh-CN": "气",
      "ko": "spirit",
      "vi": "spirit",
      "id": "spirit"
    },
    "pos": "noun",
    "ex": "気について考える"
  },
  {
    "id": "V1868",
    "w": "聞く",
    "r": "きく",
    "m": {
      "en": "to listen",
      "zh-TW": "聽",
      "zh-CN": "听",
      "ko": "듣다",
      "vi": "nghe",
      "id": "mendengarkan"
    },
    "pos": "verb-godan",
    "ex": "音楽を聞く"
  },
  {
    "id": "V1869",
    "w": "菊",
    "r": "きく",
    "m": {
      "en": "chrysanthemum",
      "zh-TW": "菊",
      "zh-CN": "菊",
      "ko": "chrysanthemum",
      "vi": "chrysanthemum",
      "id": "chrysanthemum"
    },
    "pos": "verb-godan",
    "ex": "菊ことにする"
  },
  {
    "id": "V1870",
    "w": "危険",
    "r": "きけん",
    "m": {
      "en": "danger",
      "zh-TW": "危險",
      "zh-CN": "危险",
      "ko": "danger",
      "vi": "danger",
      "id": "danger"
    },
    "pos": "noun",
    "ex": "危険な場所に近づかない"
  },
  {
    "id": "V1871",
    "w": "記事",
    "r": "きじ",
    "m": {
      "en": "article",
      "zh-TW": "記事",
      "zh-CN": "记事",
      "ko": "article",
      "vi": "article",
      "id": "article"
    },
    "pos": "noun",
    "ex": "記事について考える"
  },
  {
    "id": "V1872",
    "w": "季節",
    "r": "きせつ",
    "m": {
      "en": "season",
      "zh-TW": "季節",
      "zh-CN": "季节",
      "ko": "season",
      "vi": "season",
      "id": "season"
    },
    "pos": "verb-godan",
    "ex": "季節ことにする"
  },
  {
    "id": "V1873",
    "w": "北",
    "r": "きた",
    "m": {
      "en": "north",
      "zh-TW": "北",
      "zh-CN": "北",
      "ko": "north",
      "vi": "north",
      "id": "north"
    },
    "pos": "noun",
    "ex": "北について考える"
  },
  {
    "id": "V1874",
    "w": "汚い",
    "r": "きたない",
    "m": {
      "en": "dirty",
      "zh-TW": "髒",
      "zh-CN": "脏",
      "ko": "더러운",
      "vi": "Bẩn",
      "id": "kotor"
    },
    "pos": "i-adj",
    "ex": "とても汚いと思う"
  },
  {
    "id": "V1875",
    "w": "期待",
    "r": "きたい",
    "m": {
      "en": "expectation",
      "zh-TW": "期待",
      "zh-CN": "期待",
      "ko": "expectation",
      "vi": "expectation",
      "id": "expectation"
    },
    "pos": "i-adj",
    "ex": "とても期待と思う",
    "syn": [
      "望む",
      "待ち望む",
      "願う"
    ]
  },
  {
    "id": "V1876",
    "w": "切手",
    "r": "きって",
    "m": {
      "en": "stamp",
      "zh-TW": "切手",
      "zh-CN": "切手",
      "ko": "stamp",
      "vi": "stamp",
      "id": "stamp"
    },
    "pos": "noun",
    "ex": "切手について考える"
  },
  {
    "id": "V1877",
    "w": "厳しい",
    "r": "きびしい",
    "m": {
      "en": "strict",
      "zh-TW": "嚴格",
      "zh-CN": "严格",
      "ko": "엄밀",
      "vi": "Nghiêm ngặt",
      "id": "Ketat"
    },
    "pos": "i-adj",
    "ex": "とても厳しいと思う"
  },
  {
    "id": "V1878",
    "w": "希望",
    "r": "きぼう",
    "m": {
      "en": "hope",
      "zh-TW": "希望",
      "zh-CN": "希望",
      "ko": "희망",
      "vi": "hy vọng",
      "id": "harapan"
    },
    "pos": "verb-godan",
    "ex": "希望ことにする",
    "syn": [
      "望む",
      "願う",
      "期待する"
    ]
  },
  {
    "id": "V1879",
    "w": "決まる",
    "r": "きまる",
    "m": {
      "en": "to be decided",
      "zh-TW": "決",
      "zh-CN": "决",
      "ko": "to be decided",
      "vi": "to be decided",
      "id": "to be decided"
    },
    "pos": "verb-godan",
    "ex": "決まることにする"
  },
  {
    "id": "V1880",
    "w": "決める",
    "r": "きめる",
    "m": {
      "en": "to decide",
      "zh-TW": "決定",
      "zh-CN": "决定",
      "ko": "결정하다",
      "vi": "Quyết định",
      "id": "memutuskan"
    },
    "pos": "verb-ichidan",
    "ex": "決めることにする"
  },
  {
    "id": "V1881",
    "w": "気持",
    "r": "きもち",
    "m": {
      "en": "feeling",
      "zh-TW": "感覺",
      "zh-CN": "感觉",
      "ko": "감정",
      "vi": "cảm giác",
      "id": "perasaan"
    },
    "pos": "noun",
    "ex": "気持について考える"
  },
  {
    "id": "V1882",
    "w": "休日",
    "r": "きゅうじつ",
    "m": {
      "en": "holiday",
      "zh-TW": "休日",
      "zh-CN": "休日",
      "ko": "holiday",
      "vi": "holiday",
      "id": "holiday"
    },
    "pos": "verb-godan",
    "ex": "休日ことにする"
  },
  {
    "id": "V1883",
    "w": "牛乳",
    "r": "ぎゅうにゅう",
    "m": {
      "en": "milk",
      "zh-TW": "牛乳",
      "zh-CN": "牛乳",
      "ko": "milk",
      "vi": "milk",
      "id": "milk"
    },
    "pos": "verb-godan",
    "ex": "牛乳ことにする"
  },
  {
    "id": "V1884",
    "w": "教育",
    "r": "きょういく",
    "m": {
      "en": "education",
      "zh-TW": "教育",
      "zh-CN": "教育",
      "ko": "교육",
      "vi": "Giáo dục",
      "id": "Pendidikan"
    },
    "pos": "verb-godan",
    "ex": "子供の教育に力を入れる"
  },
  {
    "id": "V1885",
    "w": "教室",
    "r": "きょうしつ",
    "m": {
      "en": "classroom",
      "zh-TW": "教室",
      "zh-CN": "教室",
      "ko": "classroom",
      "vi": "classroom",
      "id": "classroom"
    },
    "pos": "verb-godan",
    "ex": "教室ことにする"
  },
  {
    "id": "V1886",
    "w": "共通",
    "r": "きょうつう",
    "m": {
      "en": "common",
      "zh-TW": "常見",
      "zh-CN": "常见",
      "ko": "흔한",
      "vi": "Phổ biến",
      "id": "umum"
    },
    "pos": "verb-godan",
    "ex": "共通ことにする"
  },
  {
    "id": "V1887",
    "w": "協力",
    "r": "きょうりょく",
    "m": {
      "en": "cooperation",
      "zh-TW": "合作",
      "zh-CN": "合作",
      "ko": "협력",
      "vi": "Hợp tác",
      "id": "Kerjasama"
    },
    "pos": "verb-godan",
    "ex": "協力ことにする"
  },
  {
    "id": "V1888",
    "w": "興味",
    "r": "きょうみ",
    "m": {
      "en": "interest",
      "zh-TW": "興味",
      "zh-CN": "兴味",
      "ko": "interest",
      "vi": "interest",
      "id": "interest"
    },
    "pos": "noun",
    "ex": "歴史に興味がある"
  },
  {
    "id": "V1889",
    "w": "嫌い",
    "r": "きらい",
    "m": {
      "en": "dislike",
      "zh-TW": "嫌",
      "zh-CN": "嫌",
      "ko": "dislike",
      "vi": "dislike",
      "id": "dislike"
    },
    "pos": "i-adj",
    "ex": "野菜が嫌いだ"
  },
  {
    "id": "V1890",
    "w": "切る",
    "r": "きる",
    "m": {
      "en": "to cut",
      "zh-TW": "切",
      "zh-CN": "切",
      "ko": "자르다",
      "vi": "cắt",
      "id": "memotong"
    },
    "pos": "verb-ichidan",
    "ex": "切ることにする"
  },
  {
    "id": "V1891",
    "w": "着る",
    "r": "きる",
    "m": {
      "en": "to wear",
      "zh-TW": "穿",
      "zh-CN": "穿",
      "ko": "입다",
      "vi": "mặc",
      "id": "memakai"
    },
    "pos": "verb-ichidan",
    "ex": "着ることにする"
  },
  {
    "id": "V1892",
    "w": "綺麗",
    "r": "きれい",
    "m": {
      "en": "beautiful",
      "zh-TW": "美麗",
      "zh-CN": "美丽",
      "ko": "아름다운",
      "vi": "Đẹp",
      "id": "cantik"
    },
    "pos": "i-adj",
    "ex": "とても綺麗と思う"
  },
  {
    "id": "V1893",
    "w": "金曜日",
    "r": "きんようび",
    "m": {
      "en": "Friday",
      "zh-TW": "金曜日",
      "zh-CN": "金曜日",
      "ko": "Friday",
      "vi": "Friday",
      "id": "Friday"
    },
    "pos": "noun",
    "ex": "金曜日について考える"
  },
  {
    "id": "V1894",
    "w": "釘",
    "r": "くぎ",
    "m": {
      "en": "nail",
      "zh-TW": "釘",
      "zh-CN": "釘",
      "ko": "nail",
      "vi": "nail",
      "id": "nail"
    },
    "pos": "noun",
    "ex": "釘について考える"
  },
  {
    "id": "V1895",
    "w": "鎖",
    "r": "くさり",
    "m": {
      "en": "chain",
      "zh-TW": "鎖",
      "zh-CN": "鎖",
      "ko": "chain",
      "vi": "chain",
      "id": "chain"
    },
    "pos": "noun",
    "ex": "鎖について考える"
  },
  {
    "id": "V1896",
    "w": "櫛",
    "r": "くし",
    "m": {
      "en": "comb",
      "zh-TW": "櫛",
      "zh-CN": "櫛",
      "ko": "comb",
      "vi": "comb",
      "id": "comb"
    },
    "pos": "noun",
    "ex": "櫛について考える"
  },
  {
    "id": "V1897",
    "w": "唇",
    "r": "くちびる",
    "m": {
      "en": "lip",
      "zh-TW": "唇",
      "zh-CN": "唇",
      "ko": "lip",
      "vi": "lip",
      "id": "lip"
    },
    "pos": "verb-godan",
    "ex": "唇ことにする"
  },
  {
    "id": "V1898",
    "w": "蜘蛛",
    "r": "くも",
    "m": {
      "en": "spider",
      "zh-TW": "蜘蛛",
      "zh-CN": "蜘蛛",
      "ko": "spider",
      "vi": "spider",
      "id": "spider"
    },
    "pos": "noun",
    "ex": "蜘蛛について考える"
  },
  {
    "id": "V1899",
    "w": "曇る",
    "r": "くもる",
    "m": {
      "en": "to become cloudy",
      "zh-TW": "曇",
      "zh-CN": "曇",
      "ko": "to become cloudy",
      "vi": "to become cloudy",
      "id": "to become cloudy"
    },
    "pos": "verb-godan",
    "ex": "曇ることにする"
  },
  {
    "id": "V1900",
    "w": "クラス",
    "r": "くらす",
    "m": {
      "en": "class",
      "zh-TW": "班級",
      "zh-CN": "班级",
      "ko": "클래스",
      "vi": "lớp",
      "id": "kelas"
    },
    "pos": "verb-godan",
    "ex": "クラスことにする"
  },
  {
    "id": "V1901",
    "w": "暗い",
    "r": "くらい",
    "m": {
      "en": "dark",
      "zh-TW": "黑暗",
      "zh-CN": "黑暗",
      "ko": "어두운",
      "vi": "tối",
      "id": "gelap"
    },
    "pos": "i-adj",
    "ex": "部屋が暗いので電気をつける"
  },
  {
    "id": "V1902",
    "w": "来る",
    "r": "くる",
    "m": {
      "en": "to come",
      "zh-TW": "來",
      "zh-CN": "来",
      "ko": "오다",
      "vi": "Đến",
      "id": "datang"
    },
    "pos": "verb-godan",
    "ex": "友達が家に来る"
  },
  {
    "id": "V1903",
    "w": "狂う",
    "r": "くるう",
    "m": {
      "en": "to go mad",
      "zh-TW": "狂",
      "zh-CN": "狂",
      "ko": "to go mad",
      "vi": "to go mad",
      "id": "to go mad"
    },
    "pos": "verb-godan",
    "ex": "狂うことにする"
  },
  {
    "id": "V1904",
    "w": "暮れる",
    "r": "くれる",
    "m": {
      "en": "to get dark",
      "zh-TW": "暮",
      "zh-CN": "暮",
      "ko": "to get dark",
      "vi": "to get dark",
      "id": "to get dark"
    },
    "pos": "verb-ichidan",
    "ex": "暮れることにする"
  },
  {
    "id": "V1905",
    "w": "黒",
    "r": "くろ",
    "m": {
      "en": "black",
      "zh-TW": "黑",
      "zh-CN": "黑",
      "ko": "black",
      "vi": "black",
      "id": "black"
    },
    "pos": "noun",
    "ex": "黒について考える"
  },
  {
    "id": "V1906",
    "w": "黒い",
    "r": "くろい",
    "m": {
      "en": "black",
      "zh-TW": "黑",
      "zh-CN": "黑",
      "ko": "black",
      "vi": "black",
      "id": "black"
    },
    "pos": "i-adj",
    "ex": "黒い服を着る"
  },
  {
    "id": "V1907",
    "w": "加わる",
    "r": "くわわる",
    "m": {
      "en": "to join",
      "zh-TW": "加入",
      "zh-CN": "加入",
      "ko": "가입하다",
      "vi": "tham gia",
      "id": "bergabung"
    },
    "pos": "verb-godan",
    "ex": "加わることにする"
  },
  {
    "id": "V1908",
    "w": "毛",
    "r": "け",
    "m": {
      "en": "hair",
      "zh-TW": "毛",
      "zh-CN": "毛",
      "ko": "hair",
      "vi": "hair",
      "id": "hair"
    },
    "pos": "noun",
    "ex": "毛について考える"
  },
  {
    "id": "V1909",
    "w": "景気",
    "r": "けいき",
    "m": {
      "en": "economy",
      "zh-TW": "經濟",
      "zh-CN": "经济",
      "ko": "경제",
      "vi": "Kinh tế",
      "id": "Ekonomi"
    },
    "pos": "noun",
    "ex": "景気について考える"
  },
  {
    "id": "V1910",
    "w": "計画",
    "r": "けいかく",
    "m": {
      "en": "plan",
      "zh-TW": "計劃",
      "zh-CN": "计划",
      "ko": "계획",
      "vi": "Kế hoạch",
      "id": "rencana"
    },
    "pos": "verb-godan",
    "ex": "旅行の計画を立てる",
    "syn": [
      "プラン",
      "予定",
      "スケジュール"
    ]
  },
  {
    "id": "V1911",
    "w": "経験",
    "r": "けいけん",
    "m": {
      "en": "experience",
      "zh-TW": "經驗",
      "zh-CN": "经验",
      "ko": "경험",
      "vi": "Kinh nghiệm",
      "id": "pengalaman"
    },
    "pos": "noun",
    "ex": "貴重な経験を積む",
    "syn": [
      "体験",
      "実績",
      "キャリア"
    ]
  },
  {
    "id": "V1912",
    "w": "警察",
    "r": "けいさつ",
    "m": {
      "en": "police",
      "zh-TW": "警察",
      "zh-CN": "警察",
      "ko": "police",
      "vi": "police",
      "id": "police"
    },
    "pos": "verb-godan",
    "ex": "警察ことにする"
  },
  {
    "id": "V1913",
    "w": "経済",
    "r": "けいざい",
    "m": {
      "en": "economy",
      "zh-TW": "經濟",
      "zh-CN": "经济",
      "ko": "경제",
      "vi": "Kinh tế",
      "id": "Ekonomi"
    },
    "pos": "i-adj",
    "ex": "とても経済と思う"
  },
  {
    "id": "V1914",
    "w": "形式",
    "r": "けいしき",
    "m": {
      "en": "form",
      "zh-TW": "形式",
      "zh-CN": "形式",
      "ko": "형태",
      "vi": "Hình thức",
      "id": "Bentuk"
    },
    "pos": "noun",
    "ex": "形式について考える"
  },
  {
    "id": "V1915",
    "w": "継続",
    "r": "けいぞく",
    "m": {
      "en": "continuation",
      "zh-TW": "持續",
      "zh-CN": "持续",
      "ko": "지속",
      "vi": "Tiếp tục",
      "id": "Kelanjutan"
    },
    "pos": "verb-godan",
    "ex": "継続ことにする"
  },
  {
    "id": "V1916",
    "w": "怪我",
    "r": "けが",
    "m": {
      "en": "injury",
      "zh-TW": "怪我",
      "zh-CN": "怪我",
      "ko": "injury",
      "vi": "injury",
      "id": "injury"
    },
    "pos": "noun",
    "ex": "怪我について考える"
  },
  {
    "id": "V1917",
    "w": "劇場",
    "r": "げきじょう",
    "m": {
      "en": "theater",
      "zh-TW": "劇場",
      "zh-CN": "劇场",
      "ko": "theater",
      "vi": "theater",
      "id": "theater"
    },
    "pos": "verb-godan",
    "ex": "劇場ことにする"
  },
  {
    "id": "V1918",
    "w": "景色",
    "r": "けしき",
    "m": {
      "en": "scenery",
      "zh-TW": "景色",
      "zh-CN": "景色",
      "ko": "scenery",
      "vi": "scenery",
      "id": "scenery"
    },
    "pos": "noun",
    "ex": "景色について考える"
  },
  {
    "id": "V1919",
    "w": "消す",
    "r": "けす",
    "m": {
      "en": "to erase",
      "zh-TW": "消",
      "zh-CN": "消",
      "ko": "to erase",
      "vi": "to erase",
      "id": "to erase"
    },
    "pos": "verb-godan",
    "ex": "消すことにする"
  },
  {
    "id": "V1920",
    "w": "下宿",
    "r": "げしゅく",
    "m": {
      "en": "lodging",
      "zh-TW": "下宿",
      "zh-CN": "下宿",
      "ko": "lodging",
      "vi": "lodging",
      "id": "lodging"
    },
    "pos": "verb-godan",
    "ex": "下宿ことにする"
  },
  {
    "id": "V1921",
    "w": "結果",
    "r": "けっか",
    "m": {
      "en": "result",
      "zh-TW": "結果",
      "zh-CN": "结果",
      "ko": "결과",
      "vi": "Kết quả",
      "id": "hasil"
    },
    "pos": "noun",
    "ex": "努力の結果が出る",
    "syn": [
      "成果",
      "結末",
      "帰結"
    ]
  },
  {
    "id": "V1922",
    "w": "結構",
    "r": "けっこう",
    "m": {
      "en": "quite",
      "zh-TW": "結構",
      "zh-CN": "結構",
      "ko": "꽤",
      "vi": "khá",
      "id": "cukup"
    },
    "pos": "verb-godan",
    "ex": "結構ことにする"
  },
  {
    "id": "V1923",
    "w": "結婚",
    "r": "けっこん",
    "m": {
      "en": "marriage",
      "zh-TW": "結婚",
      "zh-CN": "結婚",
      "ko": "marriage",
      "vi": "marriage",
      "id": "marriage"
    },
    "pos": "noun",
    "ex": "来年結婚する予定だ"
  },
  {
    "id": "V1924",
    "w": "決して",
    "r": "けっして",
    "m": {
      "en": "never",
      "zh-TW": "決",
      "zh-CN": "决",
      "ko": "절대",
      "vi": "không bao giờ",
      "id": "tidak pernah"
    },
    "pos": "noun",
    "ex": "決してについて考える"
  },
  {
    "id": "V1925",
    "w": "蹴る",
    "r": "ける",
    "m": {
      "en": "to kick",
      "zh-TW": "蹴",
      "zh-CN": "蹴",
      "ko": "to kick",
      "vi": "to kick",
      "id": "to kick"
    },
    "pos": "verb-ichidan",
    "ex": "蹴ることにする"
  },
  {
    "id": "V1926",
    "w": "険しい",
    "r": "けわしい",
    "m": {
      "en": "steep",
      "zh-TW": "險",
      "zh-CN": "险",
      "ko": "steep",
      "vi": "steep",
      "id": "steep"
    },
    "pos": "i-adj",
    "ex": "とても険しいと思う"
  },
  {
    "id": "V1927",
    "w": "権",
    "r": "けん",
    "m": {
      "en": "right",
      "zh-TW": "權利",
      "zh-CN": "权利",
      "ko": "권리",
      "vi": "Quyền",
      "id": "hak"
    },
    "pos": "noun",
    "ex": "権について考える"
  },
  {
    "id": "V1928",
    "w": "県",
    "r": "けん",
    "m": {
      "en": "prefecture",
      "zh-TW": "縣",
      "zh-CN": "县",
      "ko": "prefecture",
      "vi": "prefecture",
      "id": "prefecture"
    },
    "pos": "noun",
    "ex": "県について考える"
  },
  {
    "id": "V1929",
    "w": "件",
    "r": "けん",
    "m": {
      "en": "matter",
      "zh-TW": "件",
      "zh-CN": "件",
      "ko": "matter",
      "vi": "matter",
      "id": "matter"
    },
    "pos": "noun",
    "ex": "件について考える"
  },
  {
    "id": "V1930",
    "w": "喧嘩",
    "r": "けんか",
    "m": {
      "en": "quarrel",
      "zh-TW": "喧嘩",
      "zh-CN": "喧嘩",
      "ko": "quarrel",
      "vi": "quarrel",
      "id": "quarrel"
    },
    "pos": "noun",
    "ex": "喧嘩について考える"
  },
  {
    "id": "V1931",
    "w": "研究",
    "r": "けんきゅう",
    "m": {
      "en": "research",
      "zh-TW": "研究",
      "zh-CN": "研究",
      "ko": "연구",
      "vi": "Nghiên cứu",
      "id": "Penelitian"
    },
    "pos": "verb-godan",
    "ex": "科学を研究する",
    "syn": [
      "研鑽する",
      "探究する",
      "学ぶ"
    ]
  },
  {
    "id": "V1932",
    "w": "元気",
    "r": "げんき",
    "m": {
      "en": "healthy",
      "zh-TW": "元氣",
      "zh-CN": "元气",
      "ko": "healthy",
      "vi": "healthy",
      "id": "healthy"
    },
    "pos": "noun",
    "ex": "元気に過ごしている"
  },
  {
    "id": "V1933",
    "w": "言語",
    "r": "げんご",
    "m": {
      "en": "language",
      "zh-TW": "言語",
      "zh-CN": "言语",
      "ko": "language",
      "vi": "language",
      "id": "language"
    },
    "pos": "noun",
    "ex": "言語について考える"
  },
  {
    "id": "V1934",
    "w": "建設",
    "r": "けんせつ",
    "m": {
      "en": "construction",
      "zh-TW": "建設",
      "zh-CN": "建设",
      "ko": "construction",
      "vi": "construction",
      "id": "construction"
    },
    "pos": "verb-godan",
    "ex": "建設ことにする"
  },
  {
    "id": "V1935",
    "w": "建築",
    "r": "けんちく",
    "m": {
      "en": "architecture",
      "zh-TW": "建築",
      "zh-CN": "建筑",
      "ko": "architecture",
      "vi": "architecture",
      "id": "architecture"
    },
    "pos": "verb-godan",
    "ex": "建築ことにする"
  },
  {
    "id": "V1936",
    "w": "検討",
    "r": "けんとう",
    "m": {
      "en": "examination",
      "zh-TW": "檢討",
      "zh-CN": "检討",
      "ko": "examination",
      "vi": "examination",
      "id": "examination"
    },
    "pos": "verb-godan",
    "ex": "検討ことにする"
  },
  {
    "id": "V1937",
    "w": "見当",
    "r": "けんとう",
    "m": {
      "en": "estimate",
      "zh-TW": "見當",
      "zh-CN": "見当",
      "ko": "estimate",
      "vi": "estimate",
      "id": "estimate"
    },
    "pos": "verb-godan",
    "ex": "見当ことにする"
  },
  {
    "id": "V1938",
    "w": "子",
    "r": "こ",
    "m": {
      "en": "child",
      "zh-TW": "孩子",
      "zh-CN": "孩子",
      "ko": "아이",
      "vi": "trẻ em",
      "id": "anak"
    },
    "pos": "noun",
    "ex": "子について考える"
  },
  {
    "id": "V1939",
    "w": "語",
    "r": "ご",
    "m": {
      "en": "word",
      "zh-TW": "語",
      "zh-CN": "语",
      "ko": "word",
      "vi": "word",
      "id": "word"
    },
    "pos": "noun",
    "ex": "語について考える"
  },
  {
    "id": "V1940",
    "w": "後",
    "r": "ご",
    "m": {
      "en": "after",
      "zh-TW": "後",
      "zh-CN": "后",
      "ko": "after",
      "vi": "after",
      "id": "after"
    },
    "pos": "noun",
    "ex": "仕事の後で飲みに行く"
  },
  {
    "id": "V1941",
    "w": "氷",
    "r": "こおり",
    "m": {
      "en": "ice",
      "zh-TW": "冰",
      "zh-CN": "冰",
      "ko": "ice",
      "vi": "ice",
      "id": "ice"
    },
    "pos": "noun",
    "ex": "氷について考える"
  },
  {
    "id": "V1942",
    "w": "凍る",
    "r": "こおる",
    "m": {
      "en": "to freeze",
      "zh-TW": "凍",
      "zh-CN": "冻",
      "ko": "to freeze",
      "vi": "to freeze",
      "id": "to freeze"
    },
    "pos": "verb-godan",
    "ex": "凍ることにする"
  },
  {
    "id": "V1943",
    "w": "超える",
    "r": "こえる",
    "m": {
      "en": "to exceed",
      "zh-TW": "超",
      "zh-CN": "超",
      "ko": "to exceed",
      "vi": "to exceed",
      "id": "to exceed"
    },
    "pos": "verb-ichidan",
    "ex": "超えることにする"
  },
  {
    "id": "V1944",
    "w": "故郷",
    "r": "こきょう",
    "m": {
      "en": "hometown",
      "zh-TW": "故鄉",
      "zh-CN": "故乡",
      "ko": "hometown",
      "vi": "hometown",
      "id": "hometown"
    },
    "pos": "verb-godan",
    "ex": "故郷ことにする"
  },
  {
    "id": "V1945",
    "w": "国語",
    "r": "こくご",
    "m": {
      "en": "national language",
      "zh-TW": "國語",
      "zh-CN": "国语",
      "ko": "national language",
      "vi": "national language",
      "id": "national language"
    },
    "pos": "noun",
    "ex": "国語について考える"
  },
  {
    "id": "V1946",
    "w": "国際",
    "r": "こくさい",
    "m": {
      "en": "international",
      "zh-TW": "國際",
      "zh-CN": "国际",
      "ko": "international",
      "vi": "international",
      "id": "international"
    },
    "pos": "i-adj",
    "ex": "とても国際と思う"
  },
  {
    "id": "V1947",
    "w": "黒板",
    "r": "こくばん",
    "m": {
      "en": "blackboard",
      "zh-TW": "黑板",
      "zh-CN": "黑板",
      "ko": "blackboard",
      "vi": "blackboard",
      "id": "blackboard"
    },
    "pos": "noun",
    "ex": "黒板について考える"
  },
  {
    "id": "V1948",
    "w": "志",
    "r": "こころざし",
    "m": {
      "en": "will",
      "zh-TW": "志",
      "zh-CN": "志",
      "ko": "will",
      "vi": "will",
      "id": "will"
    },
    "pos": "noun",
    "ex": "志について考える"
  },
  {
    "id": "V1949",
    "w": "午前",
    "r": "ごぜん",
    "m": {
      "en": "morning",
      "zh-TW": "早上",
      "zh-CN": "早上",
      "ko": "아침",
      "vi": "buổi sáng",
      "id": "pagi"
    },
    "pos": "noun",
    "ex": "午前について考える"
  },
  {
    "id": "V1950",
    "w": "午後",
    "r": "ごご",
    "m": {
      "en": "afternoon",
      "zh-TW": "下午",
      "zh-CN": "下午",
      "ko": "오후",
      "vi": "buổi chiều",
      "id": "sore"
    },
    "pos": "noun",
    "ex": "午後について考える"
  },
  {
    "id": "V1951",
    "w": "答える",
    "r": "こたえる",
    "m": {
      "en": "to answer",
      "zh-TW": "回答",
      "zh-CN": "回答",
      "ko": "대답하다",
      "vi": "Trả lời",
      "id": "menjawab"
    },
    "pos": "verb-ichidan",
    "ex": "答えることにする"
  },
  {
    "id": "V1952",
    "w": "言葉",
    "r": "ことば",
    "m": {
      "en": "word",
      "zh-TW": "言葉",
      "zh-CN": "言叶",
      "ko": "word",
      "vi": "word",
      "id": "word"
    },
    "pos": "noun",
    "ex": "言葉について考える"
  },
  {
    "id": "V1953",
    "w": "今年",
    "r": "ことし",
    "m": {
      "en": "this year",
      "zh-TW": "今年",
      "zh-CN": "今年",
      "ko": "this year",
      "vi": "this year",
      "id": "this year"
    },
    "pos": "noun",
    "ex": "今年の目標を立てる"
  },
  {
    "id": "V1954",
    "w": "子供",
    "r": "こども",
    "m": {
      "en": "child",
      "zh-TW": "孩子",
      "zh-CN": "孩子",
      "ko": "아이",
      "vi": "trẻ em",
      "id": "anak"
    },
    "pos": "noun",
    "ex": "子供と公園で遊ぶ"
  },
  {
    "id": "V1955",
    "w": "断る",
    "r": "ことわる",
    "m": {
      "en": "to refuse",
      "zh-TW": "拒絕",
      "zh-CN": "拒绝",
      "ko": "거절하다",
      "vi": "Từ chối",
      "id": "menolak"
    },
    "pos": "verb-godan",
    "ex": "招待を断る",
    "syn": [
      "拒否する",
      "辞退する",
      "拒む"
    ]
  },
  {
    "id": "V1956",
    "w": "この間",
    "r": "このあいだ",
    "m": {
      "en": "the other day",
      "zh-TW": "間",
      "zh-CN": "間",
      "ko": "the other day",
      "vi": "the other day",
      "id": "the other day"
    },
    "pos": "noun",
    "ex": "この間について考える"
  },
  {
    "id": "V1957",
    "w": "御飯",
    "r": "ごはん",
    "m": {
      "en": "rice",
      "zh-TW": "米飯",
      "zh-CN": "米饭",
      "ko": "밥",
      "vi": "cơm",
      "id": "nasi"
    },
    "pos": "noun",
    "ex": "御飯について考える"
  },
  {
    "id": "V1958",
    "w": "米",
    "r": "こめ",
    "m": {
      "en": "rice",
      "zh-TW": "米飯",
      "zh-CN": "米饭",
      "ko": "밥",
      "vi": "cơm",
      "id": "nasi"
    },
    "pos": "noun",
    "ex": "米を炊く"
  },
  {
    "id": "V1959",
    "w": "今回",
    "r": "こんかい",
    "m": {
      "en": "this time",
      "zh-TW": "今回",
      "zh-CN": "今回",
      "ko": "this time",
      "vi": "this time",
      "id": "this time"
    },
    "pos": "i-adj",
    "ex": "とても今回と思う"
  },
  {
    "id": "V1960",
    "w": "今度",
    "r": "こんど",
    "m": {
      "en": "next time",
      "zh-TW": "今度",
      "zh-CN": "今度",
      "ko": "next time",
      "vi": "next time",
      "id": "next time"
    },
    "pos": "noun",
    "ex": "今度について考える"
  },
  {
    "id": "V1961",
    "w": "今夜",
    "r": "こんや",
    "m": {
      "en": "tonight",
      "zh-TW": "今夜",
      "zh-CN": "今夜",
      "ko": "tonight",
      "vi": "tonight",
      "id": "tonight"
    },
    "pos": "noun",
    "ex": "今夜について考える"
  },
  {
    "id": "V1962",
    "w": "今週",
    "r": "こんしゅう",
    "m": {
      "en": "this week",
      "zh-TW": "今週",
      "zh-CN": "今周",
      "ko": "this week",
      "vi": "this week",
      "id": "this week"
    },
    "pos": "verb-godan",
    "ex": "今週ことにする"
  },
  {
    "id": "V1963",
    "w": "今日",
    "r": "きょう",
    "m": {
      "en": "today",
      "zh-TW": "今天",
      "zh-CN": "今天",
      "ko": "오늘",
      "vi": "hôm nay",
      "id": "hari ini"
    },
    "pos": "verb-godan",
    "ex": "今日ことにする"
  },
  {
    "id": "V1964",
    "w": "差",
    "r": "さ",
    "m": {
      "en": "difference",
      "zh-TW": "差額",
      "zh-CN": "差额",
      "ko": "차액",
      "vi": "Chênh lệch",
      "id": "Perbedaan"
    },
    "pos": "noun",
    "ex": "差について考える"
  },
  {
    "id": "V1965",
    "w": "最近",
    "r": "さいきん",
    "m": {
      "en": "recently",
      "zh-TW": "最近",
      "zh-CN": "最近",
      "ko": "recently",
      "vi": "recently",
      "id": "recently"
    },
    "pos": "noun",
    "ex": "最近忙しい日が続く"
  },
  {
    "id": "V1966",
    "w": "最後",
    "r": "さいご",
    "m": {
      "en": "last",
      "zh-TW": "最後",
      "zh-CN": "最后",
      "ko": "last",
      "vi": "last",
      "id": "last"
    },
    "pos": "noun",
    "ex": "最後まで頑張る"
  },
  {
    "id": "V1967",
    "w": "最初",
    "r": "さいしょ",
    "m": {
      "en": "first",
      "zh-TW": "最初",
      "zh-CN": "最初",
      "ko": "먼저",
      "vi": "đầu tiên",
      "id": "pertama"
    },
    "pos": "noun",
    "ex": "最初から説明する"
  },
  {
    "id": "V1968",
    "w": "財産",
    "r": "ざいさん",
    "m": {
      "en": "property",
      "zh-TW": "財產",
      "zh-CN": "财产",
      "ko": "property",
      "vi": "property",
      "id": "property"
    },
    "pos": "noun",
    "ex": "財産について考える"
  },
  {
    "id": "V1969",
    "w": "作品",
    "r": "さくひん",
    "m": {
      "en": "work",
      "zh-TW": "工作",
      "zh-CN": "工作",
      "ko": "일",
      "vi": "Công việc",
      "id": "pekerjaan"
    },
    "pos": "noun",
    "ex": "作品について考える"
  },
  {
    "id": "V1970",
    "w": "酒",
    "r": "さけ",
    "m": {
      "en": "alcohol",
      "zh-TW": "酒",
      "zh-CN": "酒",
      "ko": "alcohol",
      "vi": "alcohol",
      "id": "alcohol"
    },
    "pos": "noun",
    "ex": "酒について考える"
  },
  {
    "id": "V1971",
    "w": "下げる",
    "r": "さげる",
    "m": {
      "en": "to lower",
      "zh-TW": "降低",
      "zh-CN": "降低",
      "ko": "낮추다",
      "vi": "hạ",
      "id": "menurunkan"
    },
    "pos": "verb-godan",
    "ex": "下げることにする"
  },
  {
    "id": "V1972",
    "w": "座る",
    "r": "すわる",
    "m": {
      "en": "to sit",
      "zh-TW": "坐",
      "zh-CN": "坐",
      "ko": "앉다",
      "vi": "Ngồi",
      "id": "Duduk"
    },
    "pos": "verb-godan",
    "ex": "座ることにする"
  },
  {
    "id": "V1973",
    "w": "札",
    "r": "さつ",
    "m": {
      "en": "bill",
      "zh-TW": "札",
      "zh-CN": "札",
      "ko": "bill",
      "vi": "bill",
      "id": "bill"
    },
    "pos": "verb-godan",
    "ex": "札ことにする"
  },
  {
    "id": "V1974",
    "w": "雑誌",
    "r": "ざっし",
    "m": {
      "en": "magazine",
      "zh-TW": "雜誌",
      "zh-CN": "雑誌",
      "ko": "magazine",
      "vi": "magazine",
      "id": "magazine"
    },
    "pos": "noun",
    "ex": "雑誌について考える"
  },
  {
    "id": "V1975",
    "w": "砂糖",
    "r": "さとう",
    "m": {
      "en": "sugar",
      "zh-TW": "砂糖",
      "zh-CN": "砂糖",
      "ko": "sugar",
      "vi": "sugar",
      "id": "sugar"
    },
    "pos": "verb-godan",
    "ex": "砂糖ことにする"
  },
  {
    "id": "V1976",
    "w": "皿",
    "r": "さら",
    "m": {
      "en": "plate",
      "zh-TW": "皿",
      "zh-CN": "皿",
      "ko": "plate",
      "vi": "plate",
      "id": "plate"
    },
    "pos": "noun",
    "ex": "皿について考える"
  },
  {
    "id": "V1977",
    "w": "更に",
    "r": "さらに",
    "m": {
      "en": "furthermore",
      "zh-TW": "更",
      "zh-CN": "更",
      "ko": "게다가",
      "vi": "hơn nữa",
      "id": "selanjutnya"
    },
    "pos": "adverb",
    "ex": "更に考える"
  },
  {
    "id": "V1978",
    "w": "三",
    "r": "さん",
    "m": {
      "en": "three",
      "zh-TW": "三",
      "zh-CN": "三",
      "ko": "three",
      "vi": "three",
      "id": "three"
    },
    "pos": "noun",
    "ex": "三について考える"
  },
  {
    "id": "V1979",
    "w": "酸",
    "r": "さん",
    "m": {
      "en": "acid",
      "zh-TW": "酸",
      "zh-CN": "酸",
      "ko": "acid",
      "vi": "acid",
      "id": "acid"
    },
    "pos": "noun",
    "ex": "酸について考える"
  },
  {
    "id": "V1980",
    "w": "市",
    "r": "し",
    "m": {
      "en": "city",
      "zh-TW": "城市",
      "zh-CN": "城市",
      "ko": "도시",
      "vi": "Thành phố",
      "id": "kota"
    },
    "pos": "noun",
    "ex": "市について考える"
  },
  {
    "id": "V1981",
    "w": "死",
    "r": "し",
    "m": {
      "en": "death",
      "zh-TW": "死亡",
      "zh-CN": "死亡",
      "ko": "죽음",
      "vi": "cái chết",
      "id": "kematian"
    },
    "pos": "noun",
    "ex": "死について考える"
  },
  {
    "id": "V1982",
    "w": "歯",
    "r": "し",
    "m": {
      "en": "tooth",
      "zh-TW": "齒",
      "zh-CN": "歯",
      "ko": "tooth",
      "vi": "tooth",
      "id": "tooth"
    },
    "pos": "noun",
    "ex": "歯について考える"
  },
  {
    "id": "V1983",
    "w": "時間",
    "r": "じかん",
    "m": {
      "en": "time",
      "zh-TW": "時間",
      "zh-CN": "时间",
      "ko": "시간",
      "vi": "Thời gian",
      "id": "waktu"
    },
    "pos": "noun",
    "ex": "時間を有効に使う"
  },
  {
    "id": "V1984",
    "w": "四月",
    "r": "しがつ",
    "m": {
      "en": "April",
      "zh-TW": "四月",
      "zh-CN": "四月",
      "ko": "April",
      "vi": "April",
      "id": "April"
    },
    "pos": "verb-godan",
    "ex": "四月ことにする"
  },
  {
    "id": "V1985",
    "w": "事件",
    "r": "じけん",
    "m": {
      "en": "incident",
      "zh-TW": "事件",
      "zh-CN": "事件",
      "ko": "incident",
      "vi": "incident",
      "id": "incident"
    },
    "pos": "noun",
    "ex": "事件について考える"
  },
  {
    "id": "V1986",
    "w": "時刻",
    "r": "じこく",
    "m": {
      "en": "time",
      "zh-TW": "時間",
      "zh-CN": "时间",
      "ko": "시간",
      "vi": "Thời gian",
      "id": "waktu"
    },
    "pos": "verb-godan",
    "ex": "時刻ことにする"
  },
  {
    "id": "V1987",
    "w": "事故",
    "r": "じこ",
    "m": {
      "en": "accident",
      "zh-TW": "事故",
      "zh-CN": "事故",
      "ko": "accident",
      "vi": "accident",
      "id": "accident"
    },
    "pos": "noun",
    "ex": "事故について考える"
  },
  {
    "id": "V1988",
    "w": "仕事",
    "r": "しごと",
    "m": {
      "en": "work",
      "zh-TW": "工作",
      "zh-CN": "工作",
      "ko": "일",
      "vi": "Công việc",
      "id": "pekerjaan"
    },
    "pos": "adverb",
    "ex": "仕事考える"
  },
  {
    "id": "V1989",
    "w": "自殺",
    "r": "じさつ",
    "m": {
      "en": "suicide",
      "zh-TW": "自殺",
      "zh-CN": "自殺",
      "ko": "suicide",
      "vi": "suicide",
      "id": "suicide"
    },
    "pos": "verb-godan",
    "ex": "自殺ことにする"
  },
  {
    "id": "V1990",
    "w": "地震",
    "r": "じしん",
    "m": {
      "en": "earthquake",
      "zh-TW": "地震",
      "zh-CN": "地震",
      "ko": "earthquake",
      "vi": "earthquake",
      "id": "earthquake"
    },
    "pos": "noun",
    "ex": "地震について考える"
  },
  {
    "id": "V1991",
    "w": "自信",
    "r": "じしん",
    "m": {
      "en": "confidence",
      "zh-TW": "自信",
      "zh-CN": "自信",
      "ko": "confidence",
      "vi": "confidence",
      "id": "confidence"
    },
    "pos": "noun",
    "ex": "自信について考える"
  },
  {
    "id": "V1992",
    "w": "静か",
    "r": "しずか",
    "m": {
      "en": "quiet",
      "zh-TW": "安靜",
      "zh-CN": "安静",
      "ko": "조용한",
      "vi": "yên tĩnh",
      "id": "tenang"
    },
    "pos": "noun",
    "ex": "静かな場所で勉強する",
    "syn": [
      "穏やか",
      "落ち着いた",
      "静寂"
    ]
  },
  {
    "id": "V1993",
    "w": "自然",
    "r": "しぜん",
    "m": {
      "en": "nature",
      "zh-TW": "自然",
      "zh-CN": "自然",
      "ko": "자연",
      "vi": "Tự nhiên",
      "id": "alam"
    },
    "pos": "noun",
    "ex": "自然を大切にする"
  },
  {
    "id": "V1994",
    "w": "下",
    "r": "した",
    "m": {
      "en": "below",
      "zh-TW": "下",
      "zh-CN": "下",
      "ko": "below",
      "vi": "below",
      "id": "below"
    },
    "pos": "noun",
    "ex": "下について考える"
  },
  {
    "id": "V1995",
    "w": "質",
    "r": "しつ",
    "m": {
      "en": "quality",
      "zh-TW": "品質",
      "zh-CN": "品质",
      "ko": "품질",
      "vi": "Chất lượng",
      "id": "Kualitas"
    },
    "pos": "verb-godan",
    "ex": "質ことにする"
  },
  {
    "id": "V1996",
    "w": "実際",
    "r": "じっさい",
    "m": {
      "en": "actually",
      "zh-TW": "實際",
      "zh-CN": "实际",
      "ko": "actually",
      "vi": "actually",
      "id": "actually"
    },
    "pos": "i-adj",
    "ex": "とても実際と思う"
  },
  {
    "id": "V1997",
    "w": "失敗",
    "r": "しっぱい",
    "m": {
      "en": "failure",
      "zh-TW": "失敗",
      "zh-CN": "失败",
      "ko": "실패",
      "vi": "Thất bại",
      "id": "kegagalan"
    },
    "pos": "i-adj",
    "ex": "失敗から学ぶ",
    "syn": [
      "しくじる",
      "失敗する",
      "ミスする"
    ]
  },
  {
    "id": "V1998",
    "w": "品",
    "r": "しな",
    "m": {
      "en": "goods",
      "zh-TW": "品",
      "zh-CN": "品",
      "ko": "goods",
      "vi": "goods",
      "id": "goods"
    },
    "pos": "noun",
    "ex": "品について考える"
  },
  {
    "id": "V1999",
    "w": "死ぬ",
    "r": "しぬ",
    "m": {
      "en": "to die",
      "zh-TW": "死",
      "zh-CN": "死",
      "ko": "죽다",
      "vi": "Chết",
      "id": "mati"
    },
    "pos": "verb-godan",
    "ex": "死ぬことにする"
  },
  {
    "id": "V2000",
    "w": "芝生",
    "r": "しばふ",
    "m": {
      "en": "lawn",
      "zh-TW": "芝生",
      "zh-CN": "芝生",
      "ko": "lawn",
      "vi": "lawn",
      "id": "lawn"
    },
    "pos": "noun",
    "ex": "芝生について考える"
  },
  {
    "id": "V2001",
    "w": "縛る",
    "r": "しばる",
    "m": {
      "en": "to tie",
      "zh-TW": "縛",
      "zh-CN": "縛",
      "ko": "to tie",
      "vi": "to tie",
      "id": "to tie"
    },
    "pos": "verb-godan",
    "ex": "縛ることにする"
  },
  {
    "id": "V2002",
    "w": "島",
    "r": "しま",
    "m": {
      "en": "island",
      "zh-TW": "島",
      "zh-CN": "岛",
      "ko": "island",
      "vi": "island",
      "id": "island"
    },
    "pos": "noun",
    "ex": "島について考える"
  },
  {
    "id": "V2003",
    "w": "閉まる",
    "r": "しまる",
    "m": {
      "en": "to close",
      "zh-TW": "關閉",
      "zh-CN": "关闭",
      "ko": "닫다",
      "vi": "Đóng",
      "id": "menutup"
    },
    "pos": "verb-godan",
    "ex": "閉まることにする"
  },
  {
    "id": "V2004",
    "w": "社長",
    "r": "しゃちょう",
    "m": {
      "en": "president",
      "zh-TW": "社長",
      "zh-CN": "社长",
      "ko": "president",
      "vi": "president",
      "id": "president"
    },
    "pos": "verb-godan",
    "ex": "社長ことにする"
  },
  {
    "id": "V2005",
    "w": "写真",
    "r": "しゃしん",
    "m": {
      "en": "photograph",
      "zh-TW": "寫真",
      "zh-CN": "写真",
      "ko": "photograph",
      "vi": "photograph",
      "id": "photograph"
    },
    "pos": "noun",
    "ex": "写真を撮る"
  },
  {
    "id": "V2006",
    "w": "週",
    "r": "しゅう",
    "m": {
      "en": "week",
      "zh-TW": "週",
      "zh-CN": "周",
      "ko": "주",
      "vi": "tuần",
      "id": "minggu"
    },
    "pos": "verb-godan",
    "ex": "週ことにする"
  },
  {
    "id": "V2007",
    "w": "十",
    "r": "じゅう",
    "m": {
      "en": "ten",
      "zh-TW": "十",
      "zh-CN": "十",
      "ko": "ten",
      "vi": "ten",
      "id": "ten"
    },
    "pos": "verb-godan",
    "ex": "十ことにする"
  },
  {
    "id": "V2008",
    "w": "住所",
    "r": "じゅうしょ",
    "m": {
      "en": "address",
      "zh-TW": "住所",
      "zh-CN": "住所",
      "ko": "address",
      "vi": "address",
      "id": "address"
    },
    "pos": "noun",
    "ex": "住所について考える"
  },
  {
    "id": "V2009",
    "w": "集中",
    "r": "しゅうちゅう",
    "m": {
      "en": "concentration",
      "zh-TW": "集中",
      "zh-CN": "集中",
      "ko": "concentration",
      "vi": "concentration",
      "id": "concentration"
    },
    "pos": "verb-godan",
    "ex": "集中ことにする",
    "syn": [
      "集中する",
      "専念する",
      "没頭する"
    ]
  },
  {
    "id": "V2010",
    "w": "重要",
    "r": "じゅうよう",
    "m": {
      "en": "important",
      "zh-TW": "重要",
      "zh-CN": "重要",
      "ko": "중요한",
      "vi": "Quan trọng",
      "id": "penting"
    },
    "pos": "verb-godan",
    "ex": "重要な決定をする",
    "syn": [
      "大切",
      "大事",
      "肝心"
    ]
  },
  {
    "id": "V2011",
    "w": "主",
    "r": "しゅ",
    "m": {
      "en": "main",
      "zh-TW": "主",
      "zh-CN": "主",
      "ko": "main",
      "vi": "main",
      "id": "main"
    },
    "pos": "noun",
    "ex": "主について考える"
  },
  {
    "id": "V2012",
    "w": "手術",
    "r": "しゅじゅつ",
    "m": {
      "en": "surgery",
      "zh-TW": "手術",
      "zh-CN": "手术",
      "ko": "surgery",
      "vi": "surgery",
      "id": "surgery"
    },
    "pos": "verb-godan",
    "ex": "手術ことにする"
  },
  {
    "id": "V2013",
    "w": "主人",
    "r": "しゅじん",
    "m": {
      "en": "master",
      "zh-TW": "主人",
      "zh-CN": "主人",
      "ko": "master",
      "vi": "master",
      "id": "master"
    },
    "pos": "noun",
    "ex": "主人について考える"
  },
  {
    "id": "V2014",
    "w": "趣味",
    "r": "しゅみ",
    "m": {
      "en": "hobby",
      "zh-TW": "趣味",
      "zh-CN": "趣味",
      "ko": "hobby",
      "vi": "hobby",
      "id": "hobby"
    },
    "pos": "noun",
    "ex": "趣味について考える"
  },
  {
    "id": "V2015",
    "w": "準備",
    "r": "じゅんび",
    "m": {
      "en": "preparation",
      "zh-TW": "準備",
      "zh-CN": "准备",
      "ko": "preparation",
      "vi": "preparation",
      "id": "preparation"
    },
    "pos": "noun",
    "ex": "旅行の準備をする",
    "syn": [
      "用意する",
      "支度する",
      "整える"
    ]
  },
  {
    "id": "V2016",
    "w": "情報",
    "r": "じょうほう",
    "m": {
      "en": "information",
      "zh-TW": "資訊",
      "zh-CN": "信息",
      "ko": "정보",
      "vi": "Thông tin",
      "id": "informasi"
    },
    "pos": "verb-godan",
    "ex": "正確な情報を得る",
    "syn": [
      "データ",
      "ニュース",
      "知識"
    ]
  },
  {
    "id": "V2017",
    "w": "食事",
    "r": "しょくじ",
    "m": {
      "en": "meal",
      "zh-TW": "食事",
      "zh-CN": "食事",
      "ko": "meal",
      "vi": "meal",
      "id": "meal"
    },
    "pos": "noun",
    "ex": "家族と食事をする"
  },
  {
    "id": "V2018",
    "w": "知らせる",
    "r": "しらせる",
    "m": {
      "en": "to inform",
      "zh-TW": "知",
      "zh-CN": "知",
      "ko": "to inform",
      "vi": "to inform",
      "id": "to inform"
    },
    "pos": "verb-ichidan",
    "ex": "ニュースを知らせる"
  },
  {
    "id": "V2019",
    "w": "調べる",
    "r": "しらべる",
    "m": {
      "en": "to investigate",
      "zh-TW": "調",
      "zh-CN": "调",
      "ko": "to investigate",
      "vi": "to investigate",
      "id": "to investigate"
    },
    "pos": "verb-godan",
    "ex": "インターネットで調べる"
  },
  {
    "id": "V2020",
    "w": "知る",
    "r": "しる",
    "m": {
      "en": "to know",
      "zh-TW": "知道",
      "zh-CN": "知道",
      "ko": "알다",
      "vi": "Biết",
      "id": "tahu"
    },
    "pos": "verb-ichidan",
    "ex": "事実を知る"
  },
  {
    "id": "V2021",
    "w": "印",
    "r": "しるし",
    "m": {
      "en": "mark",
      "zh-TW": "印",
      "zh-CN": "印",
      "ko": "mark",
      "vi": "mark",
      "id": "mark"
    },
    "pos": "noun",
    "ex": "印について考える"
  },
  {
    "id": "V2022",
    "w": "新",
    "r": "しん",
    "m": {
      "en": "new",
      "zh-TW": "新",
      "zh-CN": "新",
      "ko": "새로운",
      "vi": "Mới",
      "id": "baru"
    },
    "pos": "noun",
    "ex": "新について考える"
  },
  {
    "id": "V2023",
    "w": "新聞",
    "r": "しんぶん",
    "m": {
      "en": "newspaper",
      "zh-TW": "新聞",
      "zh-CN": "新闻",
      "ko": "newspaper",
      "vi": "newspaper",
      "id": "newspaper"
    },
    "pos": "noun",
    "ex": "新聞について考える"
  },
  {
    "id": "V2024",
    "w": "親切",
    "r": "しんせつ",
    "m": {
      "en": "kind",
      "zh-TW": "親切",
      "zh-CN": "亲切",
      "ko": "kind",
      "vi": "kind",
      "id": "kind"
    },
    "pos": "verb-godan",
    "ex": "親切な人に助けられた"
  },
  {
    "id": "V2025",
    "w": "心配",
    "r": "しんぱい",
    "m": {
      "en": "worry",
      "zh-TW": "心配",
      "zh-CN": "心配",
      "ko": "worry",
      "vi": "worry",
      "id": "worry"
    },
    "pos": "i-adj",
    "ex": "健康が心配だ"
  },
  {
    "id": "V2026",
    "w": "信用",
    "r": "しんよう",
    "m": {
      "en": "trust",
      "zh-TW": "信用",
      "zh-CN": "信用",
      "ko": "trust",
      "vi": "trust",
      "id": "trust"
    },
    "pos": "verb-godan",
    "ex": "信用ことにする"
  },
  {
    "id": "V2027",
    "w": "神経",
    "r": "しんけい",
    "m": {
      "en": "nerve",
      "zh-TW": "神経",
      "zh-CN": "神经",
      "ko": "nerve",
      "vi": "nerve",
      "id": "nerve"
    },
    "pos": "i-adj",
    "ex": "とても神経と思う"
  },
  {
    "id": "V2028",
    "w": "深刻",
    "r": "しんこく",
    "m": {
      "en": "serious",
      "zh-TW": "深刻",
      "zh-CN": "深刻",
      "ko": "serious",
      "vi": "serious",
      "id": "serious"
    },
    "pos": "verb-godan",
    "ex": "深刻ことにする"
  },
  {
    "id": "V2029",
    "w": "申告",
    "r": "しんこく",
    "m": {
      "en": "declaration",
      "zh-TW": "申告",
      "zh-CN": "申告",
      "ko": "declaration",
      "vi": "declaration",
      "id": "declaration"
    },
    "pos": "verb-godan",
    "ex": "申告ことにする"
  },
  {
    "id": "V2030",
    "w": "人生",
    "r": "じんせい",
    "m": {
      "en": "life",
      "zh-TW": "生活",
      "zh-CN": "生活",
      "ko": "삶",
      "vi": "Cuộc sống",
      "id": "kehidupan"
    },
    "pos": "i-adj",
    "ex": "とても人生と思う"
  },
  {
    "id": "V2031",
    "w": "親戚",
    "r": "しんせき",
    "m": {
      "en": "relative",
      "zh-TW": "親戚",
      "zh-CN": "亲戚",
      "ko": "relative",
      "vi": "relative",
      "id": "relative"
    },
    "pos": "noun",
    "ex": "親戚について考える"
  },
  {
    "id": "V2032",
    "w": "身長",
    "r": "しんちょう",
    "m": {
      "en": "height",
      "zh-TW": "身長",
      "zh-CN": "身长",
      "ko": "height",
      "vi": "height",
      "id": "height"
    },
    "pos": "verb-godan",
    "ex": "身長ことにする"
  },
  {
    "id": "V2033",
    "w": "進歩",
    "r": "しんぽ",
    "m": {
      "en": "progress",
      "zh-TW": "進行",
      "zh-CN": "进行",
      "ko": "진행",
      "vi": "Tiến bộ",
      "id": "Kemajuan"
    },
    "pos": "noun",
    "ex": "進歩について考える"
  },
  {
    "id": "V2034",
    "w": "審判",
    "r": "しんぱん",
    "m": {
      "en": "judgment",
      "zh-TW": "審判",
      "zh-CN": "審判",
      "ko": "judgment",
      "vi": "judgment",
      "id": "judgment"
    },
    "pos": "noun",
    "ex": "審判について考える"
  },
  {
    "id": "V2035",
    "w": "水曜日",
    "r": "すいようび",
    "m": {
      "en": "Wednesday",
      "zh-TW": "水曜日",
      "zh-CN": "水曜日",
      "ko": "Wednesday",
      "vi": "Wednesday",
      "id": "Wednesday"
    },
    "pos": "noun",
    "ex": "水曜日について考える"
  },
  {
    "id": "V2036",
    "w": "吸う",
    "r": "すう",
    "m": {
      "en": "to inhale",
      "zh-TW": "吸",
      "zh-CN": "吸",
      "ko": "to inhale",
      "vi": "to inhale",
      "id": "to inhale"
    },
    "pos": "verb-godan",
    "ex": "吸うことにする"
  },
  {
    "id": "V2037",
    "w": "数",
    "r": "すう",
    "m": {
      "en": "number",
      "zh-TW": "號碼",
      "zh-CN": "号码",
      "ko": "번호",
      "vi": "số",
      "id": "nomor"
    },
    "pos": "verb-godan",
    "ex": "数ことにする"
  },
  {
    "id": "V2038",
    "w": "数学",
    "r": "すうがく",
    "m": {
      "en": "mathematics",
      "zh-TW": "數學",
      "zh-CN": "数学",
      "ko": "mathematics",
      "vi": "mathematics",
      "id": "mathematics"
    },
    "pos": "verb-godan",
    "ex": "数学ことにする"
  },
  {
    "id": "V2039",
    "w": "少ない",
    "r": "すくない",
    "m": {
      "en": "few",
      "zh-TW": "少",
      "zh-CN": "少",
      "ko": "few",
      "vi": "few",
      "id": "few"
    },
    "pos": "i-adj",
    "ex": "時間が少ない"
  },
  {
    "id": "V2040",
    "w": "少し",
    "r": "すこし",
    "m": {
      "en": "a little",
      "zh-TW": "少",
      "zh-CN": "少",
      "ko": "a little",
      "vi": "a little",
      "id": "a little"
    },
    "pos": "noun",
    "ex": "少し休憩する"
  },
  {
    "id": "V2041",
    "w": "進む",
    "r": "すすむ",
    "m": {
      "en": "to advance",
      "zh-TW": "進",
      "zh-CN": "进",
      "ko": "to advance",
      "vi": "to advance",
      "id": "to advance"
    },
    "pos": "verb-godan",
    "ex": "前に進む"
  },
  {
    "id": "V2042",
    "w": "素晴らしい",
    "r": "すばらしい",
    "m": {
      "en": "wonderful",
      "zh-TW": "素晴",
      "zh-CN": "素晴",
      "ko": "wonderful",
      "vi": "wonderful",
      "id": "wonderful"
    },
    "pos": "i-adj",
    "ex": "素晴らしい景色を見る",
    "syn": [
      "すごい",
      "見事",
      "立派"
    ]
  },
  {
    "id": "V2043",
    "w": "住む",
    "r": "すむ",
    "m": {
      "en": "to live",
      "zh-TW": "住",
      "zh-CN": "住",
      "ko": "살다",
      "vi": "Sống",
      "id": "tinggal"
    },
    "pos": "verb-godan",
    "ex": "東京に住んでいる"
  },
  {
    "id": "V2044",
    "w": "相撲",
    "r": "すもう",
    "m": {
      "en": "sumo",
      "zh-TW": "相撲",
      "zh-CN": "相扑",
      "ko": "sumo",
      "vi": "sumo",
      "id": "sumo"
    },
    "pos": "verb-godan",
    "ex": "相撲ことにする"
  },
  {
    "id": "V2045",
    "w": "する",
    "r": "する",
    "m": {
      "en": "to do",
      "zh-TW": "做",
      "zh-CN": "做",
      "ko": "하다",
      "vi": "Làm",
      "id": "Melakukan"
    },
    "pos": "verb-suru",
    "ex": "することが大切だ"
  },
  {
    "id": "V2046",
    "w": "性",
    "r": "せい",
    "m": {
      "en": "nature",
      "zh-TW": "自然",
      "zh-CN": "自然",
      "ko": "자연",
      "vi": "Tự nhiên",
      "id": "alam"
    },
    "pos": "i-adj",
    "ex": "とても性と思う"
  },
  {
    "id": "V2047",
    "w": "正",
    "r": "せい",
    "m": {
      "en": "correct",
      "zh-TW": "正確",
      "zh-CN": "正确",
      "ko": "올바른",
      "vi": "đúng",
      "id": "benar"
    },
    "pos": "i-adj",
    "ex": "とても正と思う"
  },
  {
    "id": "V2048",
    "w": "背",
    "r": "せ",
    "m": {
      "en": "back",
      "zh-TW": "背",
      "zh-CN": "背",
      "ko": "back",
      "vi": "back",
      "id": "back"
    },
    "pos": "noun",
    "ex": "背について考える"
  },
  {
    "id": "V2049",
    "w": "政治",
    "r": "せいじ",
    "m": {
      "en": "politics",
      "zh-TW": "政治",
      "zh-CN": "政治",
      "ko": "정치",
      "vi": "Chính trị",
      "id": "Politik"
    },
    "pos": "noun",
    "ex": "政治について考える"
  },
  {
    "id": "V2050",
    "w": "成績",
    "r": "せいせき",
    "m": {
      "en": "grades",
      "zh-TW": "成績",
      "zh-CN": "成绩",
      "ko": "grades",
      "vi": "grades",
      "id": "grades"
    },
    "pos": "noun",
    "ex": "成績について考える"
  },
  {
    "id": "V2051",
    "w": "生徒",
    "r": "せいと",
    "m": {
      "en": "student",
      "zh-TW": "學生",
      "zh-CN": "学生",
      "ko": "학생",
      "vi": "học sinh",
      "id": "siswa"
    },
    "pos": "adverb",
    "ex": "生徒考える"
  },
  {
    "id": "V2052",
    "w": "西洋",
    "r": "せいよう",
    "m": {
      "en": "western",
      "zh-TW": "西洋",
      "zh-CN": "西洋",
      "ko": "western",
      "vi": "western",
      "id": "western"
    },
    "pos": "verb-godan",
    "ex": "西洋ことにする"
  },
  {
    "id": "V2053",
    "w": "世界",
    "r": "せかい",
    "m": {
      "en": "world",
      "zh-TW": "世界",
      "zh-CN": "世界",
      "ko": "세계",
      "vi": "Thế giới",
      "id": "dunia"
    },
    "pos": "i-adj",
    "ex": "とても世界と思う"
  },
  {
    "id": "V2054",
    "w": "咳",
    "r": "せき",
    "m": {
      "en": "cough",
      "zh-TW": "咳",
      "zh-CN": "咳",
      "ko": "cough",
      "vi": "cough",
      "id": "cough"
    },
    "pos": "noun",
    "ex": "咳について考える"
  },
  {
    "id": "V2055",
    "w": "説",
    "r": "せつ",
    "m": {
      "en": "theory",
      "zh-TW": "說",
      "zh-CN": "说",
      "ko": "theory",
      "vi": "theory",
      "id": "theory"
    },
    "pos": "verb-godan",
    "ex": "説ことにする"
  },
  {
    "id": "V2056",
    "w": "節",
    "r": "せつ",
    "m": {
      "en": "section",
      "zh-TW": "節",
      "zh-CN": "节",
      "ko": "section",
      "vi": "section",
      "id": "section"
    },
    "pos": "verb-godan",
    "ex": "節ことにする"
  },
  {
    "id": "V2057",
    "w": "設備",
    "r": "せつび",
    "m": {
      "en": "equipment",
      "zh-TW": "設備",
      "zh-CN": "设备",
      "ko": "equipment",
      "vi": "equipment",
      "id": "equipment"
    },
    "pos": "noun",
    "ex": "設備について考える"
  },
  {
    "id": "V2058",
    "w": "説明",
    "r": "せつめい",
    "m": {
      "en": "explanation",
      "zh-TW": "說明",
      "zh-CN": "说明",
      "ko": "explanation",
      "vi": "explanation",
      "id": "explanation"
    },
    "pos": "i-adj",
    "ex": "詳しく説明する"
  },
  {
    "id": "V2059",
    "w": "千",
    "r": "せん",
    "m": {
      "en": "thousand",
      "zh-TW": "千",
      "zh-CN": "千",
      "ko": "thousand",
      "vi": "thousand",
      "id": "thousand"
    },
    "pos": "noun",
    "ex": "千について考える"
  },
  {
    "id": "V2060",
    "w": "線",
    "r": "せん",
    "m": {
      "en": "line",
      "zh-TW": "線",
      "zh-CN": "线",
      "ko": "line",
      "vi": "line",
      "id": "line"
    },
    "pos": "noun",
    "ex": "線について考える"
  },
  {
    "id": "V2061",
    "w": "戦",
    "r": "せん",
    "m": {
      "en": "war",
      "zh-TW": "戰爭",
      "zh-CN": "战争",
      "ko": "전쟁",
      "vi": "Chiến tranh",
      "id": "perang"
    },
    "pos": "noun",
    "ex": "戦について考える"
  },
  {
    "id": "V2062",
    "w": "前",
    "r": "ぜん",
    "m": {
      "en": "before",
      "zh-TW": "前",
      "zh-CN": "前",
      "ko": "before",
      "vi": "before",
      "id": "before"
    },
    "pos": "noun",
    "ex": "前について考える"
  },
  {
    "id": "V2063",
    "w": "全",
    "r": "ぜん",
    "m": {
      "en": "all",
      "zh-TW": "全",
      "zh-CN": "全",
      "ko": "모두",
      "vi": "tất cả",
      "id": "semua"
    },
    "pos": "noun",
    "ex": "全について考える"
  },
  {
    "id": "V2064",
    "w": "戦後",
    "r": "せんご",
    "m": {
      "en": "postwar",
      "zh-TW": "戰後",
      "zh-CN": "战后",
      "ko": "postwar",
      "vi": "postwar",
      "id": "postwar"
    },
    "pos": "noun",
    "ex": "戦後について考える"
  },
  {
    "id": "V2065",
    "w": "先日",
    "r": "せんじつ",
    "m": {
      "en": "the other day",
      "zh-TW": "先日",
      "zh-CN": "先日",
      "ko": "the other day",
      "vi": "the other day",
      "id": "the other day"
    },
    "pos": "verb-godan",
    "ex": "先日ことにする"
  },
  {
    "id": "V2066",
    "w": "先輩",
    "r": "せんぱい",
    "m": {
      "en": "senior",
      "zh-TW": "先輩",
      "zh-CN": "先輩",
      "ko": "senior",
      "vi": "senior",
      "id": "senior"
    },
    "pos": "i-adj",
    "ex": "とても先輩と思う"
  },
  {
    "id": "V2067",
    "w": "全体",
    "r": "ぜんたい",
    "m": {
      "en": "whole",
      "zh-TW": "全體",
      "zh-CN": "全体",
      "ko": "whole",
      "vi": "whole",
      "id": "whole"
    },
    "pos": "i-adj",
    "ex": "とても全体と思う"
  },
  {
    "id": "V2068",
    "w": "相",
    "r": "そう",
    "m": {
      "en": "mutual",
      "zh-TW": "相",
      "zh-CN": "相",
      "ko": "mutual",
      "vi": "mutual",
      "id": "mutual"
    },
    "pos": "verb-godan",
    "ex": "相ことにする"
  },
  {
    "id": "V2069",
    "w": "層",
    "r": "そう",
    "m": {
      "en": "layer",
      "zh-TW": "層",
      "zh-CN": "层",
      "ko": "layer",
      "vi": "layer",
      "id": "layer"
    },
    "pos": "verb-godan",
    "ex": "層ことにする"
  },
  {
    "id": "V2070",
    "w": "像",
    "r": "ぞう",
    "m": {
      "en": "statue",
      "zh-TW": "像",
      "zh-CN": "像",
      "ko": "statue",
      "vi": "statue",
      "id": "statue"
    },
    "pos": "verb-godan",
    "ex": "像ことにする"
  },
  {
    "id": "V2071",
    "w": "増",
    "r": "ぞう",
    "m": {
      "en": "increase",
      "zh-TW": "增",
      "zh-CN": "增",
      "ko": "increase",
      "vi": "increase",
      "id": "increase"
    },
    "pos": "verb-godan",
    "ex": "増ことにする"
  },
  {
    "id": "V2072",
    "w": "相互",
    "r": "そうご",
    "m": {
      "en": "mutual",
      "zh-TW": "相互",
      "zh-CN": "相互",
      "ko": "mutual",
      "vi": "mutual",
      "id": "mutual"
    },
    "pos": "noun",
    "ex": "相互について考える"
  },
  {
    "id": "V2073",
    "w": "送別",
    "r": "そうべつ",
    "m": {
      "en": "farewell",
      "zh-TW": "送別",
      "zh-CN": "送别",
      "ko": "farewell",
      "vi": "farewell",
      "id": "farewell"
    },
    "pos": "verb-godan",
    "ex": "送別ことにする"
  },
  {
    "id": "V2074",
    "w": "贈呈",
    "r": "ぞうてい",
    "m": {
      "en": "presentation",
      "zh-TW": "贈呈",
      "zh-CN": "赠呈",
      "ko": "presentation",
      "vi": "presentation",
      "id": "presentation"
    },
    "pos": "i-adj",
    "ex": "とても贈呈と思う"
  },
  {
    "id": "V2075",
    "w": "祖先",
    "r": "そせん",
    "m": {
      "en": "ancestor",
      "zh-TW": "祖先",
      "zh-CN": "祖先",
      "ko": "ancestor",
      "vi": "ancestor",
      "id": "ancestor"
    },
    "pos": "noun",
    "ex": "祖先について考える"
  },
  {
    "id": "V2076",
    "w": "側",
    "r": "そば",
    "m": {
      "en": "side",
      "zh-TW": "側",
      "zh-CN": "側",
      "ko": "side",
      "vi": "side",
      "id": "side"
    },
    "pos": "noun",
    "ex": "側について考える"
  },
  {
    "id": "V2077",
    "w": "損",
    "r": "そん",
    "m": {
      "en": "loss",
      "zh-TW": "損失",
      "zh-CN": "损失",
      "ko": "손실",
      "vi": "Thua lỗ",
      "id": "Kerugian"
    },
    "pos": "noun",
    "ex": "損について考える"
  },
  {
    "id": "V2078",
    "w": "尊敬",
    "r": "そんけい",
    "m": {
      "en": "respect",
      "zh-TW": "尊敬",
      "zh-CN": "尊敬",
      "ko": "respect",
      "vi": "respect",
      "id": "respect"
    },
    "pos": "i-adj",
    "ex": "とても尊敬と思う"
  },
  {
    "id": "V2079",
    "w": "田",
    "r": "た",
    "m": {
      "en": "rice field",
      "zh-TW": "田",
      "zh-CN": "田",
      "ko": "rice field",
      "vi": "rice field",
      "id": "rice field"
    },
    "pos": "noun",
    "ex": "田について考える"
  },
  {
    "id": "V2080",
    "w": "代",
    "r": "だい",
    "m": {
      "en": "generation",
      "zh-TW": "代",
      "zh-CN": "代",
      "ko": "generation",
      "vi": "generation",
      "id": "generation"
    },
    "pos": "i-adj",
    "ex": "とても代と思う"
  },
  {
    "id": "V2081",
    "w": "台",
    "r": "だい",
    "m": {
      "en": "stand",
      "zh-TW": "臺",
      "zh-CN": "台",
      "ko": "stand",
      "vi": "stand",
      "id": "stand"
    },
    "pos": "i-adj",
    "ex": "とても台と思う"
  },
  {
    "id": "V2082",
    "w": "題",
    "r": "だい",
    "m": {
      "en": "title",
      "zh-TW": "題",
      "zh-CN": "题",
      "ko": "title",
      "vi": "title",
      "id": "title"
    },
    "pos": "i-adj",
    "ex": "とても題と思う"
  },
  {
    "id": "V2083",
    "w": "体育",
    "r": "たいいく",
    "m": {
      "en": "physical education",
      "zh-TW": "體育",
      "zh-CN": "体育",
      "ko": "physical education",
      "vi": "physical education",
      "id": "physical education"
    },
    "pos": "verb-godan",
    "ex": "体育ことにする"
  },
  {
    "id": "V2084",
    "w": "大学",
    "r": "だいがく",
    "m": {
      "en": "university",
      "zh-TW": "大學",
      "zh-CN": "大学",
      "ko": "대학교",
      "vi": "đại học",
      "id": "universitas"
    },
    "pos": "verb-godan",
    "ex": "大学に入学する"
  },
  {
    "id": "V2085",
    "w": "大気",
    "r": "たいき",
    "m": {
      "en": "atmosphere",
      "zh-TW": "大氣",
      "zh-CN": "大气",
      "ko": "atmosphere",
      "vi": "atmosphere",
      "id": "atmosphere"
    },
    "pos": "noun",
    "ex": "大気について考える"
  },
  {
    "id": "V2086",
    "w": "体験",
    "r": "たいけん",
    "m": {
      "en": "experience",
      "zh-TW": "經驗",
      "zh-CN": "经验",
      "ko": "경험",
      "vi": "Kinh nghiệm",
      "id": "pengalaman"
    },
    "pos": "noun",
    "ex": "体験について考える",
    "syn": [
      "経験する",
      "味わう",
      "実感する"
    ]
  },
  {
    "id": "V2087",
    "w": "大事",
    "r": "だいじ",
    "m": {
      "en": "important",
      "zh-TW": "重要",
      "zh-CN": "重要",
      "ko": "중요한",
      "vi": "Quan trọng",
      "id": "penting"
    },
    "pos": "noun",
    "ex": "大事について考える"
  },
  {
    "id": "V2088",
    "w": "太陽",
    "r": "たいよう",
    "m": {
      "en": "sun",
      "zh-TW": "太陽",
      "zh-CN": "太阳",
      "ko": "태양",
      "vi": "mặt trời",
      "id": "matahari"
    },
    "pos": "verb-godan",
    "ex": "太陽ことにする"
  },
  {
    "id": "V2089",
    "w": "高い",
    "r": "たかい",
    "m": {
      "en": "high",
      "zh-TW": "高",
      "zh-CN": "高",
      "ko": "높은",
      "vi": "cao",
      "id": "tinggi"
    },
    "pos": "i-adj",
    "ex": "とても高いと思う"
  },
  {
    "id": "V2090",
    "w": "互い",
    "r": "たがい",
    "m": {
      "en": "mutual",
      "zh-TW": "互",
      "zh-CN": "互",
      "ko": "mutual",
      "vi": "mutual",
      "id": "mutual"
    },
    "pos": "i-adj",
    "ex": "とても互いと思う"
  },
  {
    "id": "V2091",
    "w": "宝",
    "r": "たから",
    "m": {
      "en": "treasure",
      "zh-TW": "寶",
      "zh-CN": "宝",
      "ko": "treasure",
      "vi": "treasure",
      "id": "treasure"
    },
    "pos": "noun",
    "ex": "宝について考える"
  },
  {
    "id": "V2092",
    "w": "滝",
    "r": "たき",
    "m": {
      "en": "waterfall",
      "zh-TW": "滝",
      "zh-CN": "滝",
      "ko": "waterfall",
      "vi": "waterfall",
      "id": "waterfall"
    },
    "pos": "noun",
    "ex": "滝について考える"
  },
  {
    "id": "V2093",
    "w": "竹",
    "r": "たけ",
    "m": {
      "en": "bamboo",
      "zh-TW": "竹",
      "zh-CN": "竹",
      "ko": "bamboo",
      "vi": "bamboo",
      "id": "bamboo"
    },
    "pos": "noun",
    "ex": "竹について考える"
  },
  {
    "id": "V2094",
    "w": "畳",
    "r": "たたみ",
    "m": {
      "en": "tatami",
      "zh-TW": "疊",
      "zh-CN": "畳",
      "ko": "tatami",
      "vi": "tatami",
      "id": "tatami"
    },
    "pos": "noun",
    "ex": "畳について考える"
  },
  {
    "id": "V2095",
    "w": "立つ",
    "r": "たつ",
    "m": {
      "en": "to stand",
      "zh-TW": "站",
      "zh-CN": "站",
      "ko": "서다",
      "vi": "Đứng",
      "id": "Berdiri"
    },
    "pos": "verb-godan",
    "ex": "電車で立つ"
  },
  {
    "id": "V2096",
    "w": "建つ",
    "r": "たつ",
    "m": {
      "en": "to be built",
      "zh-TW": "建",
      "zh-CN": "建",
      "ko": "to be built",
      "vi": "to be built",
      "id": "to be built"
    },
    "pos": "verb-godan",
    "ex": "建つことにする"
  },
  {
    "id": "V2097",
    "w": "経つ",
    "r": "たつ",
    "m": {
      "en": "to pass",
      "zh-TW": "経",
      "zh-CN": "经",
      "ko": "to pass",
      "vi": "to pass",
      "id": "to pass"
    },
    "pos": "verb-godan",
    "ex": "経つことにする"
  },
  {
    "id": "V2098",
    "w": "達する",
    "r": "たっする",
    "m": {
      "en": "to reach",
      "zh-TW": "達",
      "zh-CN": "达",
      "ko": "to reach",
      "vi": "to reach",
      "id": "to reach"
    },
    "pos": "verb-suru",
    "ex": "達することが大切だ"
  },
  {
    "id": "V2099",
    "w": "建てる",
    "r": "たてる",
    "m": {
      "en": "to build",
      "zh-TW": "建造",
      "zh-CN": "建造",
      "ko": "짓다",
      "vi": "Xây dựng",
      "id": "membangun"
    },
    "pos": "verb-ichidan",
    "ex": "建てることにする"
  },
  {
    "id": "V2100",
    "w": "縦",
    "r": "たて",
    "m": {
      "en": "vertical",
      "zh-TW": "縱",
      "zh-CN": "纵",
      "ko": "vertical",
      "vi": "vertical",
      "id": "vertical"
    },
    "pos": "noun",
    "ex": "縦について考える"
  },
  {
    "id": "V2101",
    "w": "楽しい",
    "r": "たのしい",
    "m": {
      "en": "fun",
      "zh-TW": "樂",
      "zh-CN": "乐",
      "ko": "fun",
      "vi": "fun",
      "id": "fun"
    },
    "pos": "i-adj",
    "ex": "旅行が楽しい"
  },
  {
    "id": "V2102",
    "w": "楽しむ",
    "r": "たのしむ",
    "m": {
      "en": "to enjoy",
      "zh-TW": "樂",
      "zh-CN": "乐",
      "ko": "to enjoy",
      "vi": "to enjoy",
      "id": "to enjoy"
    },
    "pos": "verb-godan",
    "ex": "楽しむことにする"
  },
  {
    "id": "V2103",
    "w": "誰",
    "r": "だれ",
    "m": {
      "en": "who",
      "zh-TW": "誰",
      "zh-CN": "谁",
      "ko": "who",
      "vi": "who",
      "id": "who"
    },
    "pos": "noun",
    "ex": "誰について考える"
  },
  {
    "id": "V2104",
    "w": "段",
    "r": "だん",
    "m": {
      "en": "step",
      "zh-TW": "段",
      "zh-CN": "段",
      "ko": "step",
      "vi": "step",
      "id": "step"
    },
    "pos": "noun",
    "ex": "段について考える"
  },
  {
    "id": "V2105",
    "w": "単",
    "r": "たん",
    "m": {
      "en": "single",
      "zh-TW": "單",
      "zh-CN": "单",
      "ko": "single",
      "vi": "single",
      "id": "single"
    },
    "pos": "noun",
    "ex": "単について考える"
  },
  {
    "id": "V2106",
    "w": "団",
    "r": "だん",
    "m": {
      "en": "group",
      "zh-TW": "團",
      "zh-CN": "团",
      "ko": "group",
      "vi": "group",
      "id": "group"
    },
    "pos": "noun",
    "ex": "団について考える"
  },
  {
    "id": "V2107",
    "w": "短",
    "r": "たん",
    "m": {
      "en": "short",
      "zh-TW": "短",
      "zh-CN": "短",
      "ko": "짧은",
      "vi": "Ngắn",
      "id": "pendek"
    },
    "pos": "noun",
    "ex": "短について考える"
  },
  {
    "id": "V2108",
    "w": "炭",
    "r": "たん",
    "m": {
      "en": "charcoal",
      "zh-TW": "炭",
      "zh-CN": "炭",
      "ko": "charcoal",
      "vi": "charcoal",
      "id": "charcoal"
    },
    "pos": "noun",
    "ex": "炭について考える"
  },
  {
    "id": "V2109",
    "w": "断",
    "r": "だん",
    "m": {
      "en": "decision",
      "zh-TW": "決定",
      "zh-CN": "决定",
      "ko": "결정",
      "vi": "Quyết định",
      "id": "Keputusan"
    },
    "pos": "noun",
    "ex": "断について考える"
  },
  {
    "id": "V2110",
    "w": "暖",
    "r": "だん",
    "m": {
      "en": "warm",
      "zh-TW": "溫暖",
      "zh-CN": "温暖",
      "ko": "따뜻한",
      "vi": "Ấm",
      "id": "hangat"
    },
    "pos": "noun",
    "ex": "暖について考える"
  },
  {
    "id": "V2111",
    "w": "男性",
    "r": "だんせい",
    "m": {
      "en": "male",
      "zh-TW": "男性",
      "zh-CN": "男性",
      "ko": "male",
      "vi": "male",
      "id": "male"
    },
    "pos": "i-adj",
    "ex": "とても男性と思う"
  },
  {
    "id": "V2112",
    "w": "誕生",
    "r": "たんじょう",
    "m": {
      "en": "birth",
      "zh-TW": "誕生",
      "zh-CN": "誕生",
      "ko": "birth",
      "vi": "birth",
      "id": "birth"
    },
    "pos": "verb-godan",
    "ex": "誕生ことにする"
  },
  {
    "id": "V2113",
    "w": "地",
    "r": "ち",
    "m": {
      "en": "ground",
      "zh-TW": "地",
      "zh-CN": "地",
      "ko": "ground",
      "vi": "ground",
      "id": "ground"
    },
    "pos": "noun",
    "ex": "地について考える"
  },
  {
    "id": "V2114",
    "w": "血",
    "r": "ち",
    "m": {
      "en": "blood",
      "zh-TW": "血",
      "zh-CN": "血",
      "ko": "blood",
      "vi": "blood",
      "id": "blood"
    },
    "pos": "noun",
    "ex": "血について考える"
  },
  {
    "id": "V2115",
    "w": "知",
    "r": "ち",
    "m": {
      "en": "knowledge",
      "zh-TW": "知識",
      "zh-CN": "知识",
      "ko": "지식",
      "vi": "Kiến thức",
      "id": "pengetahuan"
    },
    "pos": "noun",
    "ex": "知について考える"
  },
  {
    "id": "V2116",
    "w": "小さい",
    "r": "ちいさい",
    "m": {
      "en": "small",
      "zh-TW": "小",
      "zh-CN": "小",
      "ko": "작은",
      "vi": "Nhỏ",
      "id": "kecil"
    },
    "pos": "i-adj",
    "ex": "小さい子供"
  },
  {
    "id": "V2117",
    "w": "近い",
    "r": "ちかい",
    "m": {
      "en": "near",
      "zh-TW": "近",
      "zh-CN": "近",
      "ko": "가까운",
      "vi": "gần",
      "id": "dekat"
    },
    "pos": "i-adj",
    "ex": "駅が近い"
  },
  {
    "id": "V2118",
    "w": "違い",
    "r": "ちがい",
    "m": {
      "en": "difference",
      "zh-TW": "差額",
      "zh-CN": "差额",
      "ko": "차액",
      "vi": "Chênh lệch",
      "id": "Perbedaan"
    },
    "pos": "i-adj",
    "ex": "とても違いと思う"
  },
  {
    "id": "V2119",
    "w": "違う",
    "r": "ちがう",
    "m": {
      "en": "to differ",
      "zh-TW": "違",
      "zh-CN": "违",
      "ko": "to differ",
      "vi": "to differ",
      "id": "to differ"
    },
    "pos": "verb-godan",
    "ex": "意見が違う"
  },
  {
    "id": "V2120",
    "w": "地区",
    "r": "ちく",
    "m": {
      "en": "district",
      "zh-TW": "地區",
      "zh-CN": "地区",
      "ko": "district",
      "vi": "district",
      "id": "district"
    },
    "pos": "verb-godan",
    "ex": "地区ことにする"
  },
  {
    "id": "V2121",
    "w": "地図",
    "r": "ちず",
    "m": {
      "en": "map",
      "zh-TW": "地圖",
      "zh-CN": "地图",
      "ko": "map",
      "vi": "map",
      "id": "map"
    },
    "pos": "noun",
    "ex": "地図について考える"
  },
  {
    "id": "V2122",
    "w": "着",
    "r": "ちゃく",
    "m": {
      "en": "arrival",
      "zh-TW": "着",
      "zh-CN": "着",
      "ko": "arrival",
      "vi": "arrival",
      "id": "arrival"
    },
    "pos": "verb-godan",
    "ex": "着ことにする"
  },
  {
    "id": "V2123",
    "w": "中",
    "r": "ちゅう",
    "m": {
      "en": "middle",
      "zh-TW": "中",
      "zh-CN": "中",
      "ko": "middle",
      "vi": "middle",
      "id": "middle"
    },
    "pos": "verb-godan",
    "ex": "中ことにする"
  },
  {
    "id": "V2124",
    "w": "宙",
    "r": "ちゅう",
    "m": {
      "en": "space",
      "zh-TW": "宙",
      "zh-CN": "宙",
      "ko": "space",
      "vi": "space",
      "id": "space"
    },
    "pos": "verb-godan",
    "ex": "宙ことにする"
  },
  {
    "id": "V2125",
    "w": "駐",
    "r": "ちゅう",
    "m": {
      "en": "parking",
      "zh-TW": "駐",
      "zh-CN": "駐",
      "ko": "parking",
      "vi": "parking",
      "id": "parking"
    },
    "pos": "verb-godan",
    "ex": "駐ことにする"
  },
  {
    "id": "V2126",
    "w": "注意",
    "r": "ちゅうい",
    "m": {
      "en": "attention",
      "zh-TW": "注意",
      "zh-CN": "注意",
      "ko": "attention",
      "vi": "attention",
      "id": "attention"
    },
    "pos": "i-adj",
    "ex": "安全に注意する",
    "syn": [
      "警戒",
      "用心",
      "気をつけること"
    ]
  },
  {
    "id": "V2127",
    "w": "中学",
    "r": "ちゅうがく",
    "m": {
      "en": "middle school",
      "zh-TW": "中學",
      "zh-CN": "中学",
      "ko": "middle school",
      "vi": "middle school",
      "id": "middle school"
    },
    "pos": "verb-godan",
    "ex": "中学ことにする"
  },
  {
    "id": "V2128",
    "w": "中心",
    "r": "ちゅうしん",
    "m": {
      "en": "center",
      "zh-TW": "中心",
      "zh-CN": "中心",
      "ko": "center",
      "vi": "center",
      "id": "center"
    },
    "pos": "noun",
    "ex": "中心について考える"
  },
  {
    "id": "V2129",
    "w": "調",
    "r": "ちょう",
    "m": {
      "en": "tune",
      "zh-TW": "調",
      "zh-CN": "调",
      "ko": "tune",
      "vi": "tune",
      "id": "tune"
    },
    "pos": "verb-godan",
    "ex": "調ことにする"
  },
  {
    "id": "V2130",
    "w": "長",
    "r": "ちょう",
    "m": {
      "en": "long",
      "zh-TW": "長",
      "zh-CN": "长",
      "ko": "긴",
      "vi": "Dài",
      "id": "panjang"
    },
    "pos": "verb-godan",
    "ex": "長ことにする"
  },
  {
    "id": "V2131",
    "w": "超",
    "r": "ちょう",
    "m": {
      "en": "super",
      "zh-TW": "超",
      "zh-CN": "超",
      "ko": "super",
      "vi": "super",
      "id": "super"
    },
    "pos": "verb-godan",
    "ex": "超ことにする"
  },
  {
    "id": "V2132",
    "w": "貯金",
    "r": "ちょきん",
    "m": {
      "en": "savings",
      "zh-TW": "貯金",
      "zh-CN": "贮金",
      "ko": "savings",
      "vi": "savings",
      "id": "savings"
    },
    "pos": "noun",
    "ex": "貯金について考える"
  },
  {
    "id": "V2133",
    "w": "通",
    "r": "つう",
    "m": {
      "en": "passage",
      "zh-TW": "通",
      "zh-CN": "通",
      "ko": "passage",
      "vi": "passage",
      "id": "passage"
    },
    "pos": "verb-godan",
    "ex": "通ことにする"
  },
  {
    "id": "V2134",
    "w": "通知",
    "r": "つうち",
    "m": {
      "en": "notice",
      "zh-TW": "通知",
      "zh-CN": "通知",
      "ko": "통지",
      "vi": "thông báo",
      "id": "pemberitahuan"
    },
    "pos": "noun",
    "ex": "通知について考える"
  },
  {
    "id": "V2135",
    "w": "使う",
    "r": "つかう",
    "m": {
      "en": "to use",
      "zh-TW": "使用",
      "zh-CN": "使用",
      "ko": "사용하다",
      "vi": "Dùng",
      "id": "menggunakan"
    },
    "pos": "verb-godan",
    "ex": "道具を使う"
  },
  {
    "id": "V2136",
    "w": "疲れる",
    "r": "つかれる",
    "m": {
      "en": "to get tired",
      "zh-TW": "疲",
      "zh-CN": "疲",
      "ko": "to get tired",
      "vi": "to get tired",
      "id": "to get tired"
    },
    "pos": "verb-ichidan",
    "ex": "仕事で疲れる"
  },
  {
    "id": "V2137",
    "w": "月",
    "r": "つき",
    "m": {
      "en": "moon",
      "zh-TW": "月亮",
      "zh-CN": "月亮",
      "ko": "달",
      "vi": "mặt trăng",
      "id": "bulan"
    },
    "pos": "noun",
    "ex": "月について考える"
  },
  {
    "id": "V2138",
    "w": "突く",
    "r": "つく",
    "m": {
      "en": "to poke",
      "zh-TW": "突",
      "zh-CN": "突",
      "ko": "to poke",
      "vi": "to poke",
      "id": "to poke"
    },
    "pos": "verb-godan",
    "ex": "突くことにする"
  },
  {
    "id": "V2139",
    "w": "着く",
    "r": "つく",
    "m": {
      "en": "to arrive",
      "zh-TW": "到達",
      "zh-CN": "到达",
      "ko": "도착하다",
      "vi": "Đến nơi",
      "id": "tiba"
    },
    "pos": "verb-godan",
    "ex": "着くことにする"
  },
  {
    "id": "V2140",
    "w": "付く",
    "r": "つく",
    "m": {
      "en": "to be attached",
      "zh-TW": "付",
      "zh-CN": "付",
      "ko": "to be attached",
      "vi": "to be attached",
      "id": "to be attached"
    },
    "pos": "verb-godan",
    "ex": "付くことにする"
  },
  {
    "id": "V2141",
    "w": "就く",
    "r": "つく",
    "m": {
      "en": "to take up",
      "zh-TW": "就",
      "zh-CN": "就",
      "ko": "to take up",
      "vi": "to take up",
      "id": "to take up"
    },
    "pos": "verb-godan",
    "ex": "就くことにする"
  },
  {
    "id": "V2142",
    "w": "作る",
    "r": "つくる",
    "m": {
      "en": "to make",
      "zh-TW": "製作",
      "zh-CN": "制作",
      "ko": "만들다",
      "vi": "Làm",
      "id": "membuat"
    },
    "pos": "verb-godan",
    "ex": "作ることにする"
  },
  {
    "id": "V2143",
    "w": "漬ける",
    "r": "つける",
    "m": {
      "en": "to pickle",
      "zh-TW": "漬",
      "zh-CN": "漬",
      "ko": "to pickle",
      "vi": "to pickle",
      "id": "to pickle"
    },
    "pos": "verb-ichidan",
    "ex": "漬けることにする"
  },
  {
    "id": "V2144",
    "w": "付ける",
    "r": "つける",
    "m": {
      "en": "to attach",
      "zh-TW": "付",
      "zh-CN": "付",
      "ko": "to attach",
      "vi": "to attach",
      "id": "to attach"
    },
    "pos": "verb-ichidan",
    "ex": "付けることにする"
  },
  {
    "id": "V2145",
    "w": "積む",
    "r": "つむ",
    "m": {
      "en": "to pile up",
      "zh-TW": "積",
      "zh-CN": "积",
      "ko": "to pile up",
      "vi": "to pile up",
      "id": "to pile up"
    },
    "pos": "verb-godan",
    "ex": "積むことにする"
  },
  {
    "id": "V2146",
    "w": "強い",
    "r": "つよい",
    "m": {
      "en": "strong",
      "zh-TW": "強",
      "zh-CN": "强",
      "ko": "강한",
      "vi": "Mạnh",
      "id": "kuat"
    },
    "pos": "i-adj",
    "ex": "とても強いと思う"
  },
  {
    "id": "V2147",
    "w": "連れる",
    "r": "つれる",
    "m": {
      "en": "to take along",
      "zh-TW": "連",
      "zh-CN": "连",
      "ko": "to take along",
      "vi": "to take along",
      "id": "to take along"
    },
    "pos": "verb-ichidan",
    "ex": "連れることにする"
  },
  {
    "id": "V2148",
    "w": "釣る",
    "r": "つる",
    "m": {
      "en": "to fish",
      "zh-TW": "魚",
      "zh-CN": "鱼",
      "ko": "물고기",
      "vi": "cá",
      "id": "ikan"
    },
    "pos": "verb-godan",
    "ex": "釣ることにする"
  },
  {
    "id": "V2149",
    "w": "吊る",
    "r": "つる",
    "m": {
      "en": "to hang",
      "zh-TW": "吊",
      "zh-CN": "吊",
      "ko": "to hang",
      "vi": "to hang",
      "id": "to hang"
    },
    "pos": "verb-godan",
    "ex": "吊ることにする"
  },
  {
    "id": "V2150",
    "w": "手",
    "r": "て",
    "m": {
      "en": "hand",
      "zh-TW": "手",
      "zh-CN": "手",
      "ko": "손",
      "vi": "tay",
      "id": "tangan"
    },
    "pos": "noun",
    "ex": "手について考える"
  },
  {
    "id": "V2151",
    "w": "出",
    "r": "で",
    "m": {
      "en": "exit",
      "zh-TW": "出",
      "zh-CN": "出",
      "ko": "exit",
      "vi": "exit",
      "id": "exit"
    },
    "pos": "noun",
    "ex": "出について考える"
  },
  {
    "id": "V2152",
    "w": "定",
    "r": "てい",
    "m": {
      "en": "fixed",
      "zh-TW": "定",
      "zh-CN": "定",
      "ko": "fixed",
      "vi": "fixed",
      "id": "fixed"
    },
    "pos": "i-adj",
    "ex": "とても定と思う"
  },
  {
    "id": "V2153",
    "w": "定期",
    "r": "ていき",
    "m": {
      "en": "regular",
      "zh-TW": "定期",
      "zh-CN": "定期",
      "ko": "regular",
      "vi": "regular",
      "id": "regular"
    },
    "pos": "noun",
    "ex": "定期について考える"
  },
  {
    "id": "V2154",
    "w": "出来る",
    "r": "できる",
    "m": {
      "en": "can do",
      "zh-TW": "出來",
      "zh-CN": "出来",
      "ko": "can do",
      "vi": "can do",
      "id": "can do"
    },
    "pos": "verb-ichidan",
    "ex": "出来ることにする"
  },
  {
    "id": "V2155",
    "w": "鉄",
    "r": "てつ",
    "m": {
      "en": "iron",
      "zh-TW": "鐵",
      "zh-CN": "铁",
      "ko": "iron",
      "vi": "iron",
      "id": "iron"
    },
    "pos": "verb-godan",
    "ex": "鉄ことにする"
  },
  {
    "id": "V2156",
    "w": "寺",
    "r": "てら",
    "m": {
      "en": "temple",
      "zh-TW": "寺",
      "zh-CN": "寺",
      "ko": "temple",
      "vi": "temple",
      "id": "temple"
    },
    "pos": "noun",
    "ex": "寺について考える"
  },
  {
    "id": "V2157",
    "w": "出る",
    "r": "でる",
    "m": {
      "en": "to go out",
      "zh-TW": "出",
      "zh-CN": "出",
      "ko": "to go out",
      "vi": "to go out",
      "id": "to go out"
    },
    "pos": "verb-godan",
    "ex": "出ることにする"
  },
  {
    "id": "V2158",
    "w": "点",
    "r": "てん",
    "m": {
      "en": "point",
      "zh-TW": "點",
      "zh-CN": "点",
      "ko": "point",
      "vi": "point",
      "id": "point"
    },
    "pos": "noun",
    "ex": "点について考える"
  },
  {
    "id": "V2159",
    "w": "天",
    "r": "てん",
    "m": {
      "en": "heaven",
      "zh-TW": "天",
      "zh-CN": "天",
      "ko": "heaven",
      "vi": "heaven",
      "id": "heaven"
    },
    "pos": "noun",
    "ex": "天について考える"
  },
  {
    "id": "V2160",
    "w": "典",
    "r": "てん",
    "m": {
      "en": "ceremony",
      "zh-TW": "典",
      "zh-CN": "典",
      "ko": "ceremony",
      "vi": "ceremony",
      "id": "ceremony"
    },
    "pos": "noun",
    "ex": "典について考える"
  },
  {
    "id": "V2161",
    "w": "電気",
    "r": "でんき",
    "m": {
      "en": "electricity",
      "zh-TW": "電氣",
      "zh-CN": "电气",
      "ko": "electricity",
      "vi": "electricity",
      "id": "electricity"
    },
    "pos": "noun",
    "ex": "電気について考える"
  },
  {
    "id": "V2162",
    "w": "電車",
    "r": "でんしゃ",
    "m": {
      "en": "train",
      "zh-TW": "火車",
      "zh-CN": "火车",
      "ko": "기차",
      "vi": "tàu hỏa",
      "id": "kereta"
    },
    "pos": "noun",
    "ex": "電車について考える"
  },
  {
    "id": "V2163",
    "w": "電話",
    "r": "でんわ",
    "m": {
      "en": "telephone",
      "zh-TW": "電話",
      "zh-CN": "电话",
      "ko": "telephone",
      "vi": "telephone",
      "id": "telephone"
    },
    "pos": "noun",
    "ex": "電話について考える"
  },
  {
    "id": "V2164",
    "w": "天気",
    "r": "てんき",
    "m": {
      "en": "weather",
      "zh-TW": "天氣",
      "zh-CN": "天气",
      "ko": "weather",
      "vi": "weather",
      "id": "weather"
    },
    "pos": "noun",
    "ex": "天気について考える"
  },
  {
    "id": "V2165",
    "w": "届け出る",
    "r": "とどけでる",
    "m": {
      "en": "report",
      "zh-TW": "届け出る",
      "zh-CN": "届け出る",
      "ko": "report",
      "vi": "report",
      "id": "report"
    },
    "pos": "verb-godan",
    "ex": "届け出ることにする"
  },
  {
    "id": "V2166",
    "w": "届け出",
    "r": "とどけで",
    "m": {
      "en": "notification",
      "zh-TW": "届け出",
      "zh-CN": "届け出",
      "ko": "notification",
      "vi": "notification",
      "id": "notification"
    },
    "pos": "noun",
    "ex": "届け出について考える"
  },
  {
    "id": "V2167",
    "w": "届け先",
    "r": "とどけさき",
    "m": {
      "en": "destination",
      "zh-TW": "届け先",
      "zh-CN": "届け先",
      "ko": "destination",
      "vi": "destination",
      "id": "destination"
    },
    "pos": "noun",
    "ex": "届け先について考える"
  },
  {
    "id": "V2168",
    "w": "届け物",
    "r": "とどけもの",
    "m": {
      "en": "delivery",
      "zh-TW": "届け物",
      "zh-CN": "届け物",
      "ko": "delivery",
      "vi": "delivery",
      "id": "delivery"
    },
    "pos": "noun",
    "ex": "届け物について考える"
  },
  {
    "id": "V2169",
    "w": "届け",
    "r": "とどけ",
    "m": {
      "en": "notice",
      "zh-TW": "届け",
      "zh-CN": "届け",
      "ko": "notice",
      "vi": "notice",
      "id": "notice"
    },
    "pos": "noun",
    "ex": "届けについて考える"
  },
  {
    "id": "V2170",
    "w": "住まい",
    "r": "すまい",
    "m": {
      "en": "residence",
      "zh-TW": "住まい",
      "zh-CN": "住まい",
      "ko": "residence",
      "vi": "residence",
      "id": "residence"
    },
    "pos": "i-adj",
    "ex": "とても住まいと思う"
  },
  {
    "id": "V2171",
    "w": "住民",
    "r": "じゅうみん",
    "m": {
      "en": "resident",
      "zh-TW": "住民",
      "zh-CN": "住民",
      "ko": "resident",
      "vi": "resident",
      "id": "resident"
    },
    "pos": "noun",
    "ex": "住民について考える"
  },
  {
    "id": "V2172",
    "w": "住宅",
    "r": "じゅうたく",
    "m": {
      "en": "housing",
      "zh-TW": "住宅",
      "zh-CN": "住宅",
      "ko": "housing",
      "vi": "housing",
      "id": "housing"
    },
    "pos": "verb-godan",
    "ex": "住宅ことにする"
  },
  {
    "id": "V2173",
    "w": "建造",
    "r": "けんぞう",
    "m": {
      "en": "construction",
      "zh-TW": "建造",
      "zh-CN": "建造",
      "ko": "construction",
      "vi": "construction",
      "id": "construction"
    },
    "pos": "verb-godan",
    "ex": "建造ことにする"
  },
  {
    "id": "V2174",
    "w": "働く",
    "r": "はたらく",
    "m": {
      "en": "work",
      "zh-TW": "働く",
      "zh-CN": "働く",
      "ko": "work",
      "vi": "work",
      "id": "work"
    },
    "pos": "verb-godan",
    "ex": "会社で働く"
  },
  {
    "id": "V2175",
    "w": "働き",
    "r": "はたらき",
    "m": {
      "en": "work",
      "zh-TW": "働き",
      "zh-CN": "働き",
      "ko": "work",
      "vi": "work",
      "id": "work"
    },
    "pos": "noun",
    "ex": "働きについて考える"
  },
  {
    "id": "V2176",
    "w": "働き手",
    "r": "はたらきて",
    "m": {
      "en": "worker",
      "zh-TW": "働き手",
      "zh-CN": "働き手",
      "ko": "worker",
      "vi": "worker",
      "id": "worker"
    },
    "pos": "noun",
    "ex": "働き手について考える"
  },
  {
    "id": "V2177",
    "w": "仕事場",
    "r": "しごとば",
    "m": {
      "en": "workplace",
      "zh-TW": "仕事場",
      "zh-CN": "仕事場",
      "ko": "workplace",
      "vi": "workplace",
      "id": "workplace"
    },
    "pos": "noun",
    "ex": "仕事場について考える"
  },
  {
    "id": "V2178",
    "w": "仕事中",
    "r": "しごとちゅう",
    "m": {
      "en": "at work",
      "zh-TW": "仕事中",
      "zh-CN": "仕事中",
      "ko": "at work",
      "vi": "at work",
      "id": "at work"
    },
    "pos": "verb-godan",
    "ex": "仕事中ことにする"
  },
  {
    "id": "V2179",
    "w": "職場",
    "r": "しょくば",
    "m": {
      "en": "workplace",
      "zh-TW": "職場",
      "zh-CN": "職場",
      "ko": "workplace",
      "vi": "workplace",
      "id": "workplace"
    },
    "pos": "noun",
    "ex": "職場について考える"
  },
  {
    "id": "V2180",
    "w": "職員",
    "r": "しょくいん",
    "m": {
      "en": "staff",
      "zh-TW": "職員",
      "zh-CN": "職員",
      "ko": "staff",
      "vi": "staff",
      "id": "staff"
    },
    "pos": "noun",
    "ex": "職員について考える"
  },
  {
    "id": "V2181",
    "w": "期間",
    "r": "きかん",
    "m": {
      "en": "period",
      "zh-TW": "期間",
      "zh-CN": "期間",
      "ko": "period",
      "vi": "period",
      "id": "period"
    },
    "pos": "noun",
    "ex": "期間について考える"
  },
  {
    "id": "V2182",
    "w": "期日",
    "r": "きじつ",
    "m": {
      "en": "due date",
      "zh-TW": "期日",
      "zh-CN": "期日",
      "ko": "due date",
      "vi": "due date",
      "id": "due date"
    },
    "pos": "verb-godan",
    "ex": "期日ことにする"
  },
  {
    "id": "V2183",
    "w": "日時",
    "r": "にちじ",
    "m": {
      "en": "date and time",
      "zh-TW": "日時",
      "zh-CN": "日時",
      "ko": "date and time",
      "vi": "date and time",
      "id": "date and time"
    },
    "pos": "noun",
    "ex": "日時について考える"
  },
  {
    "id": "V2184",
    "w": "日課",
    "r": "にっか",
    "m": {
      "en": "daily routine",
      "zh-TW": "日課",
      "zh-CN": "日課",
      "ko": "daily routine",
      "vi": "daily routine",
      "id": "daily routine"
    },
    "pos": "noun",
    "ex": "日課について考える"
  },
  {
    "id": "V2185",
    "w": "場面",
    "r": "ばめん",
    "m": {
      "en": "scene",
      "zh-TW": "場面",
      "zh-CN": "場面",
      "ko": "scene",
      "vi": "scene",
      "id": "scene"
    },
    "pos": "noun",
    "ex": "場面について考える"
  },
  {
    "id": "V2186",
    "w": "社員",
    "r": "しゃいん",
    "m": {
      "en": "employee",
      "zh-TW": "社員",
      "zh-CN": "社員",
      "ko": "employee",
      "vi": "employee",
      "id": "employee"
    },
    "pos": "noun",
    "ex": "社員について考える"
  },
  {
    "id": "V2187",
    "w": "会場",
    "r": "かいじょう",
    "m": {
      "en": "venue",
      "zh-TW": "会場",
      "zh-CN": "会場",
      "ko": "venue",
      "vi": "venue",
      "id": "venue"
    },
    "pos": "verb-godan",
    "ex": "会場ことにする"
  },
  {
    "id": "V2188",
    "w": "会員",
    "r": "かいいん",
    "m": {
      "en": "member",
      "zh-TW": "会員",
      "zh-CN": "会員",
      "ko": "member",
      "vi": "member",
      "id": "member"
    },
    "pos": "noun",
    "ex": "会員について考える"
  },
  {
    "id": "V2189",
    "w": "会計",
    "r": "かいけい",
    "m": {
      "en": "accounting",
      "zh-TW": "会計",
      "zh-CN": "会計",
      "ko": "accounting",
      "vi": "accounting",
      "id": "accounting"
    },
    "pos": "i-adj",
    "ex": "とても会計と思う"
  },
  {
    "id": "V2190",
    "w": "教師",
    "r": "きょうし",
    "m": {
      "en": "teacher",
      "zh-TW": "教師",
      "zh-CN": "教師",
      "ko": "teacher",
      "vi": "teacher",
      "id": "teacher"
    },
    "pos": "noun",
    "ex": "教師について考える"
  },
  {
    "id": "V2191",
    "w": "教科",
    "r": "きょうか",
    "m": {
      "en": "subject",
      "zh-TW": "教科",
      "zh-CN": "教科",
      "ko": "subject",
      "vi": "subject",
      "id": "subject"
    },
    "pos": "noun",
    "ex": "教科について考える"
  },
  {
    "id": "V2192",
    "w": "教科書",
    "r": "きょうかしょ",
    "m": {
      "en": "textbook",
      "zh-TW": "教科書",
      "zh-CN": "教科書",
      "ko": "textbook",
      "vi": "textbook",
      "id": "textbook"
    },
    "pos": "noun",
    "ex": "教科書について考える"
  },
  {
    "id": "V2193",
    "w": "教材",
    "r": "きょうざい",
    "m": {
      "en": "teaching material",
      "zh-TW": "教材",
      "zh-CN": "教材",
      "ko": "teaching material",
      "vi": "teaching material",
      "id": "teaching material"
    },
    "pos": "i-adj",
    "ex": "とても教材と思う"
  },
  {
    "id": "V2194",
    "w": "学校",
    "r": "がっこう",
    "m": {
      "en": "school",
      "zh-TW": "学校",
      "zh-CN": "学校",
      "ko": "school",
      "vi": "school",
      "id": "school"
    },
    "pos": "verb-godan",
    "ex": "学校で授業を受ける"
  },
  {
    "id": "V2195",
    "w": "学生",
    "r": "がくせい",
    "m": {
      "en": "student",
      "zh-TW": "学生",
      "zh-CN": "学生",
      "ko": "student",
      "vi": "student",
      "id": "student"
    },
    "pos": "i-adj",
    "ex": "大学で学生をしている"
  },
  {
    "id": "V2196",
    "w": "学習",
    "r": "がくしゅう",
    "m": {
      "en": "learning",
      "zh-TW": "学習",
      "zh-CN": "学習",
      "ko": "learning",
      "vi": "learning",
      "id": "learning"
    },
    "pos": "verb-godan",
    "ex": "学習ことにする"
  },
  {
    "id": "V2197",
    "w": "学問",
    "r": "がくもん",
    "m": {
      "en": "study",
      "zh-TW": "学問",
      "zh-CN": "学問",
      "ko": "study",
      "vi": "study",
      "id": "study"
    },
    "pos": "noun",
    "ex": "学問について考える"
  },
  {
    "id": "V2198",
    "w": "学部",
    "r": "がくぶ",
    "m": {
      "en": "faculty",
      "zh-TW": "学部",
      "zh-CN": "学部",
      "ko": "faculty",
      "vi": "faculty",
      "id": "faculty"
    },
    "pos": "verb-godan",
    "ex": "学部ことにする"
  },
  {
    "id": "V2199",
    "w": "学期",
    "r": "がっき",
    "m": {
      "en": "semester",
      "zh-TW": "学期",
      "zh-CN": "学期",
      "ko": "semester",
      "vi": "semester",
      "id": "semester"
    },
    "pos": "noun",
    "ex": "学期について考える"
  },
  {
    "id": "V2200",
    "w": "政党",
    "r": "せいとう",
    "m": {
      "en": "political party",
      "zh-TW": "政党",
      "zh-CN": "政党",
      "ko": "political party",
      "vi": "political party",
      "id": "political party"
    },
    "pos": "verb-godan",
    "ex": "政党ことにする"
  },
  {
    "id": "V2201",
    "w": "法案",
    "r": "ほうあん",
    "m": {
      "en": "bill",
      "zh-TW": "法案",
      "zh-CN": "法案",
      "ko": "bill",
      "vi": "bill",
      "id": "bill"
    },
    "pos": "noun",
    "ex": "法案について考える"
  },
  {
    "id": "V2202",
    "w": "規則",
    "r": "きそく",
    "m": {
      "en": "rule",
      "zh-TW": "規則",
      "zh-CN": "規則",
      "ko": "rule",
      "vi": "rule",
      "id": "rule"
    },
    "pos": "verb-godan",
    "ex": "規則ことにする"
  },
  {
    "id": "V2203",
    "w": "規制",
    "r": "きせい",
    "m": {
      "en": "regulation",
      "zh-TW": "規制",
      "zh-CN": "規制",
      "ko": "regulation",
      "vi": "regulation",
      "id": "regulation"
    },
    "pos": "i-adj",
    "ex": "とても規制と思う"
  },
  {
    "id": "V2204",
    "w": "経過",
    "r": "けいか",
    "m": {
      "en": "progress",
      "zh-TW": "経過",
      "zh-CN": "経過",
      "ko": "progress",
      "vi": "progress",
      "id": "progress"
    },
    "pos": "noun",
    "ex": "経過について考える"
  },
  {
    "id": "V2205",
    "w": "経費",
    "r": "けいひ",
    "m": {
      "en": "expenses",
      "zh-TW": "経費",
      "zh-CN": "経費",
      "ko": "expenses",
      "vi": "expenses",
      "id": "expenses"
    },
    "pos": "noun",
    "ex": "経費について考える"
  },
  {
    "id": "V2206",
    "w": "経路",
    "r": "けいろ",
    "m": {
      "en": "route",
      "zh-TW": "経路",
      "zh-CN": "経路",
      "ko": "route",
      "vi": "route",
      "id": "route"
    },
    "pos": "noun",
    "ex": "経路について考える"
  },
  {
    "id": "V2207",
    "w": "商店",
    "r": "しょうてん",
    "m": {
      "en": "shop",
      "zh-TW": "商店",
      "zh-CN": "商店",
      "ko": "shop",
      "vi": "shop",
      "id": "shop"
    },
    "pos": "noun",
    "ex": "商店について考える"
  },
  {
    "id": "V2208",
    "w": "売買",
    "r": "ばいばい",
    "m": {
      "en": "buying and selling",
      "zh-TW": "売買",
      "zh-CN": "売買",
      "ko": "buying and selling",
      "vi": "buying and selling",
      "id": "buying and selling"
    },
    "pos": "i-adj",
    "ex": "とても売買と思う"
  },
  {
    "id": "V2209",
    "w": "技術",
    "r": "ぎじゅつ",
    "m": {
      "en": "technology",
      "zh-TW": "技術",
      "zh-CN": "技術",
      "ko": "technology",
      "vi": "technology",
      "id": "technology"
    },
    "pos": "verb-godan",
    "ex": "技術ことにする"
  },
  {
    "id": "V2210",
    "w": "技能",
    "r": "ぎのう",
    "m": {
      "en": "skill",
      "zh-TW": "技能",
      "zh-CN": "技能",
      "ko": "skill",
      "vi": "skill",
      "id": "skill"
    },
    "pos": "verb-godan",
    "ex": "技能ことにする"
  },
  {
    "id": "V2211",
    "w": "技師",
    "r": "ぎし",
    "m": {
      "en": "engineer",
      "zh-TW": "技師",
      "zh-CN": "技師",
      "ko": "engineer",
      "vi": "engineer",
      "id": "engineer"
    },
    "pos": "noun",
    "ex": "技師について考える"
  },
  {
    "id": "V2212",
    "w": "科学",
    "r": "かがく",
    "m": {
      "en": "science",
      "zh-TW": "科学",
      "zh-CN": "科学",
      "ko": "science",
      "vi": "science",
      "id": "science"
    },
    "pos": "verb-godan",
    "ex": "科学ことにする"
  },
  {
    "id": "V2213",
    "w": "化学",
    "r": "かがく",
    "m": {
      "en": "chemistry",
      "zh-TW": "化学",
      "zh-CN": "化学",
      "ko": "chemistry",
      "vi": "chemistry",
      "id": "chemistry"
    },
    "pos": "verb-godan",
    "ex": "化学ことにする"
  },
  {
    "id": "V2214",
    "w": "自分",
    "r": "じぶん",
    "m": {
      "en": "oneself",
      "zh-TW": "自分",
      "zh-CN": "自分",
      "ko": "oneself",
      "vi": "oneself",
      "id": "oneself"
    },
    "pos": "noun",
    "ex": "自分について考える"
  },
  {
    "id": "V2215",
    "w": "自身",
    "r": "じしん",
    "m": {
      "en": "oneself",
      "zh-TW": "自身",
      "zh-CN": "自身",
      "ko": "oneself",
      "vi": "oneself",
      "id": "oneself"
    },
    "pos": "noun",
    "ex": "自身について考える"
  },
  {
    "id": "V2216",
    "w": "自動",
    "r": "じどう",
    "m": {
      "en": "automatic",
      "zh-TW": "自動",
      "zh-CN": "自動",
      "ko": "automatic",
      "vi": "automatic",
      "id": "automatic"
    },
    "pos": "verb-godan",
    "ex": "自動ことにする"
  },
  {
    "id": "V2217",
    "w": "気候",
    "r": "きこう",
    "m": {
      "en": "climate",
      "zh-TW": "気候",
      "zh-CN": "気候",
      "ko": "climate",
      "vi": "climate",
      "id": "climate"
    },
    "pos": "verb-godan",
    "ex": "気候ことにする"
  },
  {
    "id": "V2218",
    "w": "医者",
    "r": "いしゃ",
    "m": {
      "en": "doctor",
      "zh-TW": "医者",
      "zh-CN": "医者",
      "ko": "doctor",
      "vi": "doctor",
      "id": "doctor"
    },
    "pos": "noun",
    "ex": "風邪をひいて医者に行く"
  },
  {
    "id": "V2219",
    "w": "医療",
    "r": "いりょう",
    "m": {
      "en": "medical care",
      "zh-TW": "医療",
      "zh-CN": "医療",
      "ko": "medical care",
      "vi": "medical care",
      "id": "medical care"
    },
    "pos": "verb-godan",
    "ex": "医療ことにする"
  },
  {
    "id": "V2220",
    "w": "薬局",
    "r": "やっきょく",
    "m": {
      "en": "pharmacy",
      "zh-TW": "薬局",
      "zh-CN": "薬局",
      "ko": "pharmacy",
      "vi": "pharmacy",
      "id": "pharmacy"
    },
    "pos": "verb-godan",
    "ex": "薬局ことにする"
  },
  {
    "id": "V2221",
    "w": "症状",
    "r": "しょうじょう",
    "m": {
      "en": "symptom",
      "zh-TW": "症状",
      "zh-CN": "症状",
      "ko": "symptom",
      "vi": "symptom",
      "id": "symptom"
    },
    "pos": "verb-godan",
    "ex": "症状ことにする"
  },
  {
    "id": "V2222",
    "w": "感情",
    "r": "かんじょう",
    "m": {
      "en": "emotion",
      "zh-TW": "感情",
      "zh-CN": "感情",
      "ko": "emotion",
      "vi": "emotion",
      "id": "emotion"
    },
    "pos": "verb-godan",
    "ex": "感情ことにする"
  },
  {
    "id": "V2223",
    "w": "感心",
    "r": "かんしん",
    "m": {
      "en": "admiration",
      "zh-TW": "感心",
      "zh-CN": "感心",
      "ko": "admiration",
      "vi": "admiration",
      "id": "admiration"
    },
    "pos": "noun",
    "ex": "感心について考える"
  },
  {
    "id": "V2224",
    "w": "思考",
    "r": "しこう",
    "m": {
      "en": "thought",
      "zh-TW": "思考",
      "zh-CN": "思考",
      "ko": "thought",
      "vi": "thought",
      "id": "thought"
    },
    "pos": "verb-godan",
    "ex": "思考ことにする"
  },
  {
    "id": "V2225",
    "w": "考え",
    "r": "かんがえ",
    "m": {
      "en": "idea",
      "zh-TW": "考え",
      "zh-CN": "考え",
      "ko": "idea",
      "vi": "idea",
      "id": "idea"
    },
    "pos": "noun",
    "ex": "考えについて考える"
  },
  {
    "id": "V2226",
    "w": "考え方",
    "r": "かんがえかた",
    "m": {
      "en": "way of thinking",
      "zh-TW": "考え方",
      "zh-CN": "考え方",
      "ko": "way of thinking",
      "vi": "way of thinking",
      "id": "way of thinking"
    },
    "pos": "noun",
    "ex": "考え方について考える"
  },
  {
    "id": "V2227",
    "w": "移動",
    "r": "いどう",
    "m": {
      "en": "movement",
      "zh-TW": "移動",
      "zh-CN": "移動",
      "ko": "movement",
      "vi": "movement",
      "id": "movement"
    },
    "pos": "verb-godan",
    "ex": "移動ことにする"
  },
  {
    "id": "V2228",
    "w": "動作",
    "r": "どうさ",
    "m": {
      "en": "motion",
      "zh-TW": "動作",
      "zh-CN": "動作",
      "ko": "motion",
      "vi": "motion",
      "id": "motion"
    },
    "pos": "noun",
    "ex": "動作について考える"
  },
  {
    "id": "V2229",
    "w": "動力",
    "r": "どうりょく",
    "m": {
      "en": "power",
      "zh-TW": "動力",
      "zh-CN": "動力",
      "ko": "power",
      "vi": "power",
      "id": "power"
    },
    "pos": "verb-godan",
    "ex": "動力ことにする"
  },
  {
    "id": "V2230",
    "w": "現状",
    "r": "げんじょう",
    "m": {
      "en": "current state",
      "zh-TW": "現状",
      "zh-CN": "現状",
      "ko": "current state",
      "vi": "current state",
      "id": "current state"
    },
    "pos": "verb-godan",
    "ex": "現状ことにする"
  },
  {
    "id": "V2231",
    "w": "様子",
    "r": "ようす",
    "m": {
      "en": "appearance",
      "zh-TW": "様子",
      "zh-CN": "様子",
      "ko": "appearance",
      "vi": "appearance",
      "id": "appearance"
    },
    "pos": "verb-godan",
    "ex": "様子ことにする"
  },
  {
    "id": "V2232",
    "w": "具合",
    "r": "ぐあい",
    "m": {
      "en": "condition",
      "zh-TW": "具合",
      "zh-CN": "具合",
      "ko": "condition",
      "vi": "condition",
      "id": "condition"
    },
    "pos": "i-adj",
    "ex": "とても具合と思う"
  },
  {
    "id": "V2233",
    "w": "体調",
    "r": "たいちょう",
    "m": {
      "en": "physical condition",
      "zh-TW": "体調",
      "zh-CN": "体調",
      "ko": "physical condition",
      "vi": "physical condition",
      "id": "physical condition"
    },
    "pos": "verb-godan",
    "ex": "体調ことにする"
  },
  {
    "id": "V2234",
    "w": "気分",
    "r": "きぶん",
    "m": {
      "en": "mood",
      "zh-TW": "気分",
      "zh-CN": "気分",
      "ko": "mood",
      "vi": "mood",
      "id": "mood"
    },
    "pos": "noun",
    "ex": "気分について考える"
  },
  {
    "id": "V2235",
    "w": "人物",
    "r": "じんぶつ",
    "m": {
      "en": "person",
      "zh-TW": "人物",
      "zh-CN": "人物",
      "ko": "person",
      "vi": "person",
      "id": "person"
    },
    "pos": "verb-godan",
    "ex": "人物ことにする"
  },
  {
    "id": "V2236",
    "w": "人口",
    "r": "じんこう",
    "m": {
      "en": "population",
      "zh-TW": "人口",
      "zh-CN": "人口",
      "ko": "population",
      "vi": "population",
      "id": "population"
    },
    "pos": "verb-godan",
    "ex": "人口ことにする"
  },
  {
    "id": "V2237",
    "w": "量",
    "r": "りょう",
    "m": {
      "en": "amount",
      "zh-TW": "量",
      "zh-CN": "量",
      "ko": "amount",
      "vi": "amount",
      "id": "amount"
    },
    "pos": "verb-godan",
    "ex": "量ことにする"
  },
  {
    "id": "V2238",
    "w": "比率",
    "r": "ひりつ",
    "m": {
      "en": "ratio",
      "zh-TW": "比率",
      "zh-CN": "比率",
      "ko": "ratio",
      "vi": "ratio",
      "id": "ratio"
    },
    "pos": "verb-godan",
    "ex": "比率ことにする"
  },
  {
    "id": "V2239",
    "w": "倍",
    "r": "ばい",
    "m": {
      "en": "times",
      "zh-TW": "倍",
      "zh-CN": "倍",
      "ko": "times",
      "vi": "times",
      "id": "times"
    },
    "pos": "i-adj",
    "ex": "とても倍と思う"
  },
  {
    "id": "V2240",
    "w": "方法",
    "r": "ほうほう",
    "m": {
      "en": "method",
      "zh-TW": "方法",
      "zh-CN": "方法",
      "ko": "method",
      "vi": "method",
      "id": "method"
    },
    "pos": "verb-godan",
    "ex": "効果的な方法を考える",
    "syn": [
      "やり方",
      "手段",
      "仕方"
    ]
  },
  {
    "id": "V2241",
    "w": "方面",
    "r": "ほうめん",
    "m": {
      "en": "direction",
      "zh-TW": "方面",
      "zh-CN": "方面",
      "ko": "direction",
      "vi": "direction",
      "id": "direction"
    },
    "pos": "noun",
    "ex": "方面について考える"
  },
  {
    "id": "V2242",
    "w": "左",
    "r": "ひだり",
    "m": {
      "en": "left",
      "zh-TW": "左",
      "zh-CN": "左",
      "ko": "left",
      "vi": "left",
      "id": "left"
    },
    "pos": "noun",
    "ex": "左について考える"
  },
  {
    "id": "V2243",
    "w": "以前",
    "r": "いぜん",
    "m": {
      "en": "before",
      "zh-TW": "以前",
      "zh-CN": "以前",
      "ko": "before",
      "vi": "before",
      "id": "before"
    },
    "pos": "noun",
    "ex": "以前について考える"
  },
  {
    "id": "V2244",
    "w": "以後",
    "r": "いご",
    "m": {
      "en": "after",
      "zh-TW": "以後",
      "zh-CN": "以後",
      "ko": "after",
      "vi": "after",
      "id": "after"
    },
    "pos": "noun",
    "ex": "以後について考える"
  },
  {
    "id": "V2245",
    "w": "事実",
    "r": "じじつ",
    "m": {
      "en": "fact",
      "zh-TW": "事実",
      "zh-CN": "事実",
      "ko": "fact",
      "vi": "fact",
      "id": "fact"
    },
    "pos": "verb-godan",
    "ex": "事実を確認する",
    "syn": [
      "真実",
      "現実",
      "実態"
    ]
  },
  {
    "id": "V2246",
    "w": "事情",
    "r": "じじょう",
    "m": {
      "en": "circumstances",
      "zh-TW": "事情",
      "zh-CN": "事情",
      "ko": "circumstances",
      "vi": "circumstances",
      "id": "circumstances"
    },
    "pos": "verb-godan",
    "ex": "事情ことにする"
  },
  {
    "id": "V2247",
    "w": "事業",
    "r": "じぎょう",
    "m": {
      "en": "business",
      "zh-TW": "事業",
      "zh-CN": "事業",
      "ko": "business",
      "vi": "business",
      "id": "business"
    },
    "pos": "verb-godan",
    "ex": "事業ことにする"
  },
  {
    "id": "V2248",
    "w": "事務",
    "r": "じむ",
    "m": {
      "en": "office work",
      "zh-TW": "事務",
      "zh-CN": "事務",
      "ko": "office work",
      "vi": "office work",
      "id": "office work"
    },
    "pos": "verb-godan",
    "ex": "事務ことにする"
  },
  {
    "id": "V2249",
    "w": "質問",
    "r": "しつもん",
    "m": {
      "en": "question",
      "zh-TW": "質問",
      "zh-CN": "質問",
      "ko": "question",
      "vi": "question",
      "id": "question"
    },
    "pos": "noun",
    "ex": "質問に答える"
  },
  {
    "id": "V2250",
    "w": "物事",
    "r": "ものごと",
    "m": {
      "en": "things",
      "zh-TW": "物事",
      "zh-CN": "物事",
      "ko": "things",
      "vi": "things",
      "id": "things"
    },
    "pos": "adverb",
    "ex": "物事考える"
  },
  {
    "id": "V2251",
    "w": "品物",
    "r": "しなもの",
    "m": {
      "en": "goods",
      "zh-TW": "品物",
      "zh-CN": "品物",
      "ko": "goods",
      "vi": "goods",
      "id": "goods"
    },
    "pos": "noun",
    "ex": "品物について考える"
  },
  {
    "id": "V2252",
    "w": "対話",
    "r": "たいわ",
    "m": {
      "en": "dialogue",
      "zh-TW": "対話",
      "zh-CN": "対話",
      "ko": "dialogue",
      "vi": "dialogue",
      "id": "dialogue"
    },
    "pos": "noun",
    "ex": "対話について考える"
  },
  {
    "id": "V2253",
    "w": "価格",
    "r": "かかく",
    "m": {
      "en": "price",
      "zh-TW": "価格",
      "zh-CN": "価格",
      "ko": "price",
      "vi": "price",
      "id": "price"
    },
    "pos": "verb-godan",
    "ex": "価格ことにする"
  },
  {
    "id": "V2254",
    "w": "代金",
    "r": "だいきん",
    "m": {
      "en": "price",
      "zh-TW": "代金",
      "zh-CN": "代金",
      "ko": "price",
      "vi": "price",
      "id": "price"
    },
    "pos": "noun",
    "ex": "代金について考える"
  },
  {
    "id": "V2255",
    "w": "給料",
    "r": "きゅうりょう",
    "m": {
      "en": "salary",
      "zh-TW": "給料",
      "zh-CN": "給料",
      "ko": "salary",
      "vi": "salary",
      "id": "salary"
    },
    "pos": "verb-godan",
    "ex": "給料ことにする"
  },
  {
    "id": "V2256",
    "w": "減少",
    "r": "げんしょう",
    "m": {
      "en": "decrease",
      "zh-TW": "減少",
      "zh-CN": "減少",
      "ko": "decrease",
      "vi": "decrease",
      "id": "decrease"
    },
    "pos": "verb-godan",
    "ex": "減少ことにする"
  },
  {
    "id": "V2257",
    "w": "評判",
    "r": "ひょうばん",
    "m": {
      "en": "reputation",
      "zh-TW": "評判",
      "zh-CN": "評判",
      "ko": "reputation",
      "vi": "reputation",
      "id": "reputation"
    },
    "pos": "noun",
    "ex": "評判について考える"
  },
  {
    "id": "V2258",
    "w": "成果",
    "r": "せいか",
    "m": {
      "en": "result",
      "zh-TW": "成果",
      "zh-CN": "成果",
      "ko": "result",
      "vi": "result",
      "id": "result"
    },
    "pos": "noun",
    "ex": "成果について考える"
  },
  {
    "id": "V2259",
    "w": "理由",
    "r": "りゆう",
    "m": {
      "en": "reason",
      "zh-TW": "理由",
      "zh-CN": "理由",
      "ko": "reason",
      "vi": "reason",
      "id": "reason"
    },
    "pos": "verb-godan",
    "ex": "遅刻の理由を説明する",
    "syn": [
      "原因",
      "わけ",
      "根拠"
    ]
  },
  {
    "id": "V2260",
    "w": "目安",
    "r": "めやす",
    "m": {
      "en": "standard",
      "zh-TW": "目安",
      "zh-CN": "目安",
      "ko": "standard",
      "vi": "standard",
      "id": "standard"
    },
    "pos": "verb-godan",
    "ex": "目安ことにする"
  },
  {
    "id": "V2261",
    "w": "安全",
    "r": "あんぜん",
    "m": {
      "en": "safety",
      "zh-TW": "安全",
      "zh-CN": "安全",
      "ko": "safety",
      "vi": "safety",
      "id": "safety"
    },
    "pos": "noun",
    "ex": "安全について考える"
  },
  {
    "id": "V2262",
    "w": "安心",
    "r": "あんしん",
    "m": {
      "en": "peace of mind",
      "zh-TW": "安心",
      "zh-CN": "安心",
      "ko": "peace of mind",
      "vi": "peace of mind",
      "id": "peace of mind"
    },
    "pos": "noun",
    "ex": "安心について考える"
  },
  {
    "id": "V2263",
    "w": "安定",
    "r": "あんてい",
    "m": {
      "en": "stability",
      "zh-TW": "安定",
      "zh-CN": "安定",
      "ko": "stability",
      "vi": "stability",
      "id": "stability"
    },
    "pos": "i-adj",
    "ex": "とても安定と思う"
  },
  {
    "id": "V2264",
    "w": "危機",
    "r": "きき",
    "m": {
      "en": "crisis",
      "zh-TW": "危機",
      "zh-CN": "危機",
      "ko": "crisis",
      "vi": "crisis",
      "id": "crisis"
    },
    "pos": "noun",
    "ex": "危機について考える"
  },
  {
    "id": "V2265",
    "w": "予定",
    "r": "よてい",
    "m": {
      "en": "schedule",
      "zh-TW": "予定",
      "zh-CN": "予定",
      "ko": "schedule",
      "vi": "schedule",
      "id": "schedule"
    },
    "pos": "i-adj",
    "ex": "とても予定と思う"
  },
  {
    "id": "V2266",
    "w": "予報",
    "r": "よほう",
    "m": {
      "en": "forecast",
      "zh-TW": "予報",
      "zh-CN": "予報",
      "ko": "forecast",
      "vi": "forecast",
      "id": "forecast"
    },
    "pos": "verb-godan",
    "ex": "予報ことにする"
  },
  {
    "id": "V2267",
    "w": "権力",
    "r": "けんりょく",
    "m": {
      "en": "power",
      "zh-TW": "権力",
      "zh-CN": "権力",
      "ko": "power",
      "vi": "power",
      "id": "power"
    },
    "pos": "verb-godan",
    "ex": "権力ことにする"
  },
  {
    "id": "V2268",
    "w": "権限",
    "r": "けんげん",
    "m": {
      "en": "authority",
      "zh-TW": "権限",
      "zh-CN": "権限",
      "ko": "authority",
      "vi": "authority",
      "id": "authority"
    },
    "pos": "noun",
    "ex": "権限について考える"
  },
  {
    "id": "V2269",
    "w": "義務",
    "r": "ぎむ",
    "m": {
      "en": "duty",
      "zh-TW": "義務",
      "zh-CN": "義務",
      "ko": "duty",
      "vi": "duty",
      "id": "duty"
    },
    "pos": "verb-godan",
    "ex": "義務ことにする"
  },
  {
    "id": "V2270",
    "w": "任務",
    "r": "にんむ",
    "m": {
      "en": "duty",
      "zh-TW": "任務",
      "zh-CN": "任務",
      "ko": "duty",
      "vi": "duty",
      "id": "duty"
    },
    "pos": "verb-godan",
    "ex": "任務ことにする"
  },
  {
    "id": "V2271",
    "w": "使命",
    "r": "しめい",
    "m": {
      "en": "mission",
      "zh-TW": "使命",
      "zh-CN": "使命",
      "ko": "mission",
      "vi": "mission",
      "id": "mission"
    },
    "pos": "i-adj",
    "ex": "とても使命と思う"
  },
  {
    "id": "V2272",
    "w": "交通",
    "r": "こうつう",
    "m": {
      "en": "traffic",
      "zh-TW": "交通",
      "zh-CN": "交通",
      "ko": "traffic",
      "vi": "traffic",
      "id": "traffic"
    },
    "pos": "verb-godan",
    "ex": "交通ことにする"
  },
  {
    "id": "V2273",
    "w": "交差",
    "r": "こうさ",
    "m": {
      "en": "intersection",
      "zh-TW": "交差",
      "zh-CN": "交差",
      "ko": "intersection",
      "vi": "intersection",
      "id": "intersection"
    },
    "pos": "noun",
    "ex": "交差について考える"
  },
  {
    "id": "V2274",
    "w": "運行",
    "r": "うんこう",
    "m": {
      "en": "operation",
      "zh-TW": "運行",
      "zh-CN": "運行",
      "ko": "operation",
      "vi": "operation",
      "id": "operation"
    },
    "pos": "verb-godan",
    "ex": "運行ことにする"
  },
  {
    "id": "V2275",
    "w": "運賃",
    "r": "うんちん",
    "m": {
      "en": "fare",
      "zh-TW": "運賃",
      "zh-CN": "運賃",
      "ko": "fare",
      "vi": "fare",
      "id": "fare"
    },
    "pos": "noun",
    "ex": "運賃について考える"
  },
  {
    "id": "V2276",
    "w": "路線",
    "r": "ろせん",
    "m": {
      "en": "route",
      "zh-TW": "路線",
      "zh-CN": "路線",
      "ko": "route",
      "vi": "route",
      "id": "route"
    },
    "pos": "noun",
    "ex": "路線について考える"
  },
  {
    "id": "V2277",
    "w": "道路",
    "r": "どうろ",
    "m": {
      "en": "road",
      "zh-TW": "道路",
      "zh-CN": "道路",
      "ko": "road",
      "vi": "road",
      "id": "road"
    },
    "pos": "noun",
    "ex": "道路について考える"
  },
  {
    "id": "V2278",
    "w": "電子",
    "r": "でんし",
    "m": {
      "en": "electronic",
      "zh-TW": "電子",
      "zh-CN": "電子",
      "ko": "electronic",
      "vi": "electronic",
      "id": "electronic"
    },
    "pos": "noun",
    "ex": "電子について考える"
  },
  {
    "id": "V2279",
    "w": "メール",
    "r": "めーる",
    "m": {
      "en": "email",
      "zh-TW": "メール",
      "zh-CN": "メール",
      "ko": "email",
      "vi": "email",
      "id": "email"
    },
    "pos": "verb-godan",
    "ex": "メールことにする"
  },
  {
    "id": "V2280",
    "w": "手紙",
    "r": "てがみ",
    "m": {
      "en": "letter",
      "zh-TW": "手紙",
      "zh-CN": "手紙",
      "ko": "letter",
      "vi": "letter",
      "id": "letter"
    },
    "pos": "noun",
    "ex": "手紙について考える"
  },
  {
    "id": "V2281",
    "w": "送信",
    "r": "そうしん",
    "m": {
      "en": "transmission",
      "zh-TW": "送信",
      "zh-CN": "送信",
      "ko": "transmission",
      "vi": "transmission",
      "id": "transmission"
    },
    "pos": "noun",
    "ex": "送信について考える"
  },
  {
    "id": "V2282",
    "w": "受信",
    "r": "じゅしん",
    "m": {
      "en": "reception",
      "zh-TW": "受信",
      "zh-CN": "受信",
      "ko": "reception",
      "vi": "reception",
      "id": "reception"
    },
    "pos": "noun",
    "ex": "受信について考える"
  },
  {
    "id": "V2283",
    "w": "返信",
    "r": "へんしん",
    "m": {
      "en": "reply",
      "zh-TW": "返信",
      "zh-CN": "返信",
      "ko": "reply",
      "vi": "reply",
      "id": "reply"
    },
    "pos": "noun",
    "ex": "返信について考える"
  },
  {
    "id": "V2284",
    "w": "事務所",
    "r": "じむしょ",
    "m": {
      "en": "office",
      "zh-TW": "事務所",
      "zh-CN": "事務所",
      "ko": "office",
      "vi": "office",
      "id": "office"
    },
    "pos": "noun",
    "ex": "事務所について考える"
  },
  {
    "id": "V2285",
    "w": "家事",
    "r": "かじ",
    "m": {
      "en": "housework",
      "zh-TW": "家事",
      "zh-CN": "家事",
      "ko": "housework",
      "vi": "housework",
      "id": "housework"
    },
    "pos": "noun",
    "ex": "家事について考える"
  },
  {
    "id": "V2286",
    "w": "兄弟",
    "r": "きょうだい",
    "m": {
      "en": "siblings",
      "zh-TW": "兄弟",
      "zh-CN": "兄弟",
      "ko": "siblings",
      "vi": "siblings",
      "id": "siblings"
    },
    "pos": "i-adj",
    "ex": "とても兄弟と思う"
  },
  {
    "id": "V2287",
    "w": "姉妹",
    "r": "しまい",
    "m": {
      "en": "sisters",
      "zh-TW": "姉妹",
      "zh-CN": "姉妹",
      "ko": "sisters",
      "vi": "sisters",
      "id": "sisters"
    },
    "pos": "i-adj",
    "ex": "とても姉妹と思う"
  },
  {
    "id": "V2288",
    "w": "生産",
    "r": "せいさん",
    "m": {
      "en": "production",
      "zh-TW": "生産",
      "zh-CN": "生産",
      "ko": "production",
      "vi": "production",
      "id": "production"
    },
    "pos": "noun",
    "ex": "生産について考える"
  },
  {
    "id": "V2289",
    "w": "毎日",
    "r": "まいにち",
    "m": {
      "en": "every day",
      "zh-TW": "毎日",
      "zh-CN": "毎日",
      "ko": "every day",
      "vi": "every day",
      "id": "every day"
    },
    "pos": "noun",
    "ex": "毎日運動する"
  },
  {
    "id": "V2290",
    "w": "週末",
    "r": "しゅうまつ",
    "m": {
      "en": "weekend",
      "zh-TW": "週末",
      "zh-CN": "週末",
      "ko": "weekend",
      "vi": "weekend",
      "id": "weekend"
    },
    "pos": "verb-godan",
    "ex": "週末ことにする"
  },
  {
    "id": "V2291",
    "w": "記念日",
    "r": "きねんび",
    "m": {
      "en": "anniversary",
      "zh-TW": "記念日",
      "zh-CN": "記念日",
      "ko": "anniversary",
      "vi": "anniversary",
      "id": "anniversary"
    },
    "pos": "noun",
    "ex": "記念日について考える"
  },
  {
    "id": "V2292",
    "w": "食材",
    "r": "しょくざい",
    "m": {
      "en": "ingredients",
      "zh-TW": "食材",
      "zh-CN": "食材",
      "ko": "ingredients",
      "vi": "ingredients",
      "id": "ingredients"
    },
    "pos": "i-adj",
    "ex": "とても食材と思う"
  },
  {
    "id": "V2293",
    "w": "調理",
    "r": "ちょうり",
    "m": {
      "en": "cooking",
      "zh-TW": "調理",
      "zh-CN": "調理",
      "ko": "cooking",
      "vi": "cooking",
      "id": "cooking"
    },
    "pos": "noun",
    "ex": "調理について考える"
  },
  {
    "id": "V2294",
    "w": "服",
    "r": "ふく",
    "m": {
      "en": "clothes",
      "zh-TW": "服",
      "zh-CN": "服",
      "ko": "clothes",
      "vi": "clothes",
      "id": "clothes"
    },
    "pos": "verb-godan",
    "ex": "新しい服を買う"
  },
  {
    "id": "V2295",
    "w": "衣服",
    "r": "いふく",
    "m": {
      "en": "clothing",
      "zh-TW": "衣服",
      "zh-CN": "衣服",
      "ko": "clothing",
      "vi": "clothing",
      "id": "clothing"
    },
    "pos": "verb-godan",
    "ex": "衣服ことにする"
  },
  {
    "id": "V2296",
    "w": "洋服",
    "r": "ようふく",
    "m": {
      "en": "Western clothes",
      "zh-TW": "洋服",
      "zh-CN": "洋服",
      "ko": "Western clothes",
      "vi": "Western clothes",
      "id": "Western clothes"
    },
    "pos": "verb-godan",
    "ex": "洋服ことにする"
  },
  {
    "id": "V2297",
    "w": "着物",
    "r": "きもの",
    "m": {
      "en": "kimono",
      "zh-TW": "着物",
      "zh-CN": "着物",
      "ko": "kimono",
      "vi": "kimono",
      "id": "kimono"
    },
    "pos": "noun",
    "ex": "着物について考える"
  },
  {
    "id": "V2298",
    "w": "鞄",
    "r": "かばん",
    "m": {
      "en": "bag",
      "zh-TW": "鞄",
      "zh-CN": "鞄",
      "ko": "bag",
      "vi": "bag",
      "id": "bag"
    },
    "pos": "noun",
    "ex": "鞄について考える"
  },
  {
    "id": "V2299",
    "w": "財布",
    "r": "さいふ",
    "m": {
      "en": "wallet",
      "zh-TW": "財布",
      "zh-CN": "財布",
      "ko": "wallet",
      "vi": "wallet",
      "id": "wallet"
    },
    "pos": "noun",
    "ex": "財布について考える"
  },
  {
    "id": "V2300",
    "w": "傘",
    "r": "かさ",
    "m": {
      "en": "umbrella",
      "zh-TW": "傘",
      "zh-CN": "傘",
      "ko": "umbrella",
      "vi": "umbrella",
      "id": "umbrella"
    },
    "pos": "noun",
    "ex": "傘について考える"
  },
  {
    "id": "V2301",
    "w": "住居",
    "r": "じゅうきょ",
    "m": {
      "en": "residence",
      "zh-TW": "住居",
      "zh-CN": "住居",
      "ko": "residence",
      "vi": "residence",
      "id": "residence"
    },
    "pos": "noun",
    "ex": "住居について考える"
  },
  {
    "id": "V2302",
    "w": "台所",
    "r": "だいどころ",
    "m": {
      "en": "kitchen",
      "zh-TW": "台所",
      "zh-CN": "台所",
      "ko": "kitchen",
      "vi": "kitchen",
      "id": "kitchen"
    },
    "pos": "noun",
    "ex": "台所について考える"
  },
  {
    "id": "V2303",
    "w": "風呂",
    "r": "ふろ",
    "m": {
      "en": "bath",
      "zh-TW": "風呂",
      "zh-CN": "風呂",
      "ko": "bath",
      "vi": "bath",
      "id": "bath"
    },
    "pos": "noun",
    "ex": "風呂について考える"
  },
  {
    "id": "V2304",
    "w": "玄関",
    "r": "げんかん",
    "m": {
      "en": "entrance",
      "zh-TW": "玄関",
      "zh-CN": "玄関",
      "ko": "entrance",
      "vi": "entrance",
      "id": "entrance"
    },
    "pos": "noun",
    "ex": "玄関について考える"
  },
  {
    "id": "V2305",
    "w": "庭",
    "r": "にわ",
    "m": {
      "en": "garden",
      "zh-TW": "庭",
      "zh-CN": "庭",
      "ko": "garden",
      "vi": "garden",
      "id": "garden"
    },
    "pos": "noun",
    "ex": "庭で花を育てる"
  },
  {
    "id": "V2306",
    "w": "駐車場",
    "r": "ちゅうしゃじょう",
    "m": {
      "en": "parking",
      "zh-TW": "駐車場",
      "zh-CN": "駐車場",
      "ko": "parking",
      "vi": "parking",
      "id": "parking"
    },
    "pos": "verb-godan",
    "ex": "駐車場ことにする"
  },
  {
    "id": "V2307",
    "w": "湿度",
    "r": "しつど",
    "m": {
      "en": "humidity",
      "zh-TW": "湿度",
      "zh-CN": "湿度",
      "ko": "humidity",
      "vi": "humidity",
      "id": "humidity"
    },
    "pos": "noun",
    "ex": "湿度について考える"
  },
  {
    "id": "V2308",
    "w": "地方",
    "r": "ちほう",
    "m": {
      "en": "region",
      "zh-TW": "地方",
      "zh-CN": "地方",
      "ko": "region",
      "vi": "region",
      "id": "region"
    },
    "pos": "verb-godan",
    "ex": "地方ことにする"
  },
  {
    "id": "V2309",
    "w": "地元",
    "r": "じもと",
    "m": {
      "en": "local",
      "zh-TW": "地元",
      "zh-CN": "地元",
      "ko": "local",
      "vi": "local",
      "id": "local"
    },
    "pos": "adverb",
    "ex": "地元考える"
  },
  {
    "id": "V2310",
    "w": "首都",
    "r": "しゅと",
    "m": {
      "en": "capital",
      "zh-TW": "首都",
      "zh-CN": "首都",
      "ko": "capital",
      "vi": "capital",
      "id": "capital"
    },
    "pos": "adverb",
    "ex": "首都考える"
  },
  {
    "id": "V2311",
    "w": "外国",
    "r": "がいこく",
    "m": {
      "en": "foreign country",
      "zh-TW": "外国",
      "zh-CN": "外国",
      "ko": "foreign country",
      "vi": "foreign country",
      "id": "foreign country"
    },
    "pos": "verb-godan",
    "ex": "外国で働きたい"
  },
  {
    "id": "V2312",
    "w": "犬",
    "r": "いぬ",
    "m": {
      "en": "dog",
      "zh-TW": "犬",
      "zh-CN": "犬",
      "ko": "dog",
      "vi": "dog",
      "id": "dog"
    },
    "pos": "verb-godan",
    "ex": "犬ことにする"
  },
  {
    "id": "V2313",
    "w": "猫",
    "r": "ねこ",
    "m": {
      "en": "cat",
      "zh-TW": "猫",
      "zh-CN": "猫",
      "ko": "cat",
      "vi": "cat",
      "id": "cat"
    },
    "pos": "noun",
    "ex": "猫について考える"
  },
  {
    "id": "V2314",
    "w": "鳥",
    "r": "とり",
    "m": {
      "en": "bird",
      "zh-TW": "鳥",
      "zh-CN": "鳥",
      "ko": "bird",
      "vi": "bird",
      "id": "bird"
    },
    "pos": "noun",
    "ex": "鳥について考える"
  },
  {
    "id": "V2315",
    "w": "魚",
    "r": "さかな",
    "m": {
      "en": "fish",
      "zh-TW": "魚",
      "zh-CN": "魚",
      "ko": "fish",
      "vi": "fish",
      "id": "fish"
    },
    "pos": "noun",
    "ex": "魚を焼いて食べる"
  },
  {
    "id": "V2316",
    "w": "牛",
    "r": "うし",
    "m": {
      "en": "cow",
      "zh-TW": "牛",
      "zh-CN": "牛",
      "ko": "cow",
      "vi": "cow",
      "id": "cow"
    },
    "pos": "noun",
    "ex": "牛について考える"
  },
  {
    "id": "V2317",
    "w": "豚",
    "r": "ぶた",
    "m": {
      "en": "pig",
      "zh-TW": "豚",
      "zh-CN": "豚",
      "ko": "pig",
      "vi": "pig",
      "id": "pig"
    },
    "pos": "noun",
    "ex": "豚について考える"
  },
  {
    "id": "V2318",
    "w": "植物",
    "r": "しょくぶつ",
    "m": {
      "en": "plant",
      "zh-TW": "植物",
      "zh-CN": "植物",
      "ko": "plant",
      "vi": "plant",
      "id": "plant"
    },
    "pos": "verb-godan",
    "ex": "植物ことにする"
  },
  {
    "id": "V2319",
    "w": "木",
    "r": "き",
    "m": {
      "en": "tree",
      "zh-TW": "木",
      "zh-CN": "木",
      "ko": "tree",
      "vi": "tree",
      "id": "tree"
    },
    "pos": "noun",
    "ex": "木について考える"
  },
  {
    "id": "V2320",
    "w": "花",
    "r": "はな",
    "m": {
      "en": "flower",
      "zh-TW": "花",
      "zh-CN": "花",
      "ko": "flower",
      "vi": "flower",
      "id": "flower"
    },
    "pos": "noun",
    "ex": "花について考える"
  },
  {
    "id": "V2321",
    "w": "葉",
    "r": "は",
    "m": {
      "en": "leaf",
      "zh-TW": "葉",
      "zh-CN": "葉",
      "ko": "leaf",
      "vi": "leaf",
      "id": "leaf"
    },
    "pos": "noun",
    "ex": "葉について考える"
  },
  {
    "id": "V2322",
    "w": "種",
    "r": "たね",
    "m": {
      "en": "seed",
      "zh-TW": "種",
      "zh-CN": "種",
      "ko": "seed",
      "vi": "seed",
      "id": "seed"
    },
    "pos": "noun",
    "ex": "種について考える"
  },
  {
    "id": "V2323",
    "w": "根",
    "r": "ね",
    "m": {
      "en": "root",
      "zh-TW": "根",
      "zh-CN": "根",
      "ko": "root",
      "vi": "root",
      "id": "root"
    },
    "pos": "noun",
    "ex": "根について考える"
  },
  {
    "id": "V2324",
    "w": "スポーツ",
    "r": "すぽーつ",
    "m": {
      "en": "sports",
      "zh-TW": "スポーツ",
      "zh-CN": "スポーツ",
      "ko": "sports",
      "vi": "sports",
      "id": "sports"
    },
    "pos": "verb-godan",
    "ex": "スポーツことにする"
  },
  {
    "id": "V2325",
    "w": "体操",
    "r": "たいそう",
    "m": {
      "en": "gymnastics",
      "zh-TW": "体操",
      "zh-CN": "体操",
      "ko": "gymnastics",
      "vi": "gymnastics",
      "id": "gymnastics"
    },
    "pos": "verb-godan",
    "ex": "体操ことにする"
  },
  {
    "id": "V2326",
    "w": "試合",
    "r": "しあい",
    "m": {
      "en": "match",
      "zh-TW": "試合",
      "zh-CN": "試合",
      "ko": "match",
      "vi": "match",
      "id": "match"
    },
    "pos": "i-adj",
    "ex": "とても試合と思う"
  },
  {
    "id": "V2327",
    "w": "競技",
    "r": "きょうぎ",
    "m": {
      "en": "competition",
      "zh-TW": "競技",
      "zh-CN": "競技",
      "ko": "competition",
      "vi": "competition",
      "id": "competition"
    },
    "pos": "noun",
    "ex": "競技について考える"
  },
  {
    "id": "V2328",
    "w": "練習",
    "r": "れんしゅう",
    "m": {
      "en": "practice",
      "zh-TW": "練習",
      "zh-CN": "練習",
      "ko": "practice",
      "vi": "practice",
      "id": "practice"
    },
    "pos": "verb-godan",
    "ex": "練習ことにする",
    "syn": [
      "訓練する",
      "トレーニングする",
      "稽古する"
    ]
  },
  {
    "id": "V2329",
    "w": "監督",
    "r": "かんとく",
    "m": {
      "en": "coach",
      "zh-TW": "監督",
      "zh-CN": "監督",
      "ko": "coach",
      "vi": "coach",
      "id": "coach"
    },
    "pos": "verb-godan",
    "ex": "監督ことにする"
  },
  {
    "id": "V2330",
    "w": "小説",
    "r": "しょうせつ",
    "m": {
      "en": "novel",
      "zh-TW": "小説",
      "zh-CN": "小説",
      "ko": "novel",
      "vi": "novel",
      "id": "novel"
    },
    "pos": "verb-godan",
    "ex": "小説ことにする"
  },
  {
    "id": "V2331",
    "w": "詩",
    "r": "し",
    "m": {
      "en": "poem",
      "zh-TW": "詩",
      "zh-CN": "詩",
      "ko": "poem",
      "vi": "poem",
      "id": "poem"
    },
    "pos": "noun",
    "ex": "詩について考える"
  },
  {
    "id": "V2332",
    "w": "娯楽",
    "r": "ごらく",
    "m": {
      "en": "entertainment",
      "zh-TW": "娯楽",
      "zh-CN": "娯楽",
      "ko": "entertainment",
      "vi": "entertainment",
      "id": "entertainment"
    },
    "pos": "verb-godan",
    "ex": "娯楽ことにする"
  },
  {
    "id": "V2333",
    "w": "散歩",
    "r": "さんぽ",
    "m": {
      "en": "walk",
      "zh-TW": "散歩",
      "zh-CN": "散歩",
      "ko": "walk",
      "vi": "walk",
      "id": "walk"
    },
    "pos": "noun",
    "ex": "散歩について考える"
  },
  {
    "id": "V2334",
    "w": "読書",
    "r": "どくしょ",
    "m": {
      "en": "reading",
      "zh-TW": "読書",
      "zh-CN": "読書",
      "ko": "reading",
      "vi": "reading",
      "id": "reading"
    },
    "pos": "noun",
    "ex": "読書について考える"
  },
  {
    "id": "V2335",
    "w": "登山",
    "r": "とざん",
    "m": {
      "en": "mountain climbing",
      "zh-TW": "登山",
      "zh-CN": "登山",
      "ko": "mountain climbing",
      "vi": "mountain climbing",
      "id": "mountain climbing"
    },
    "pos": "noun",
    "ex": "登山について考える"
  },
  {
    "id": "V2336",
    "w": "釣り",
    "r": "つり",
    "m": {
      "en": "fishing",
      "zh-TW": "釣り",
      "zh-CN": "釣り",
      "ko": "fishing",
      "vi": "fishing",
      "id": "fishing"
    },
    "pos": "noun",
    "ex": "釣りについて考える"
  },
  {
    "id": "V2337",
    "w": "園芸",
    "r": "えんげい",
    "m": {
      "en": "gardening",
      "zh-TW": "園芸",
      "zh-CN": "園芸",
      "ko": "gardening",
      "vi": "gardening",
      "id": "gardening"
    },
    "pos": "i-adj",
    "ex": "とても園芸と思う"
  },
  {
    "id": "V2338",
    "w": "性質",
    "r": "せいしつ",
    "m": {
      "en": "nature",
      "zh-TW": "性質",
      "zh-CN": "性質",
      "ko": "nature",
      "vi": "nature",
      "id": "nature"
    },
    "pos": "verb-godan",
    "ex": "性質ことにする"
  },
  {
    "id": "V2339",
    "w": "特性",
    "r": "とくせい",
    "m": {
      "en": "characteristic",
      "zh-TW": "特性",
      "zh-CN": "特性",
      "ko": "characteristic",
      "vi": "characteristic",
      "id": "characteristic"
    },
    "pos": "i-adj",
    "ex": "とても特性と思う"
  },
  {
    "id": "V2340",
    "w": "個性",
    "r": "こせい",
    "m": {
      "en": "individuality",
      "zh-TW": "個性",
      "zh-CN": "個性",
      "ko": "individuality",
      "vi": "individuality",
      "id": "individuality"
    },
    "pos": "i-adj",
    "ex": "とても個性と思う"
  },
  {
    "id": "V2341",
    "w": "形状",
    "r": "けいじょう",
    "m": {
      "en": "form",
      "zh-TW": "形状",
      "zh-CN": "形状",
      "ko": "form",
      "vi": "form",
      "id": "form"
    },
    "pos": "verb-godan",
    "ex": "形状ことにする"
  },
  {
    "id": "V2342",
    "w": "大きさ",
    "r": "おおきさ",
    "m": {
      "en": "size",
      "zh-TW": "大きさ",
      "zh-CN": "大きさ",
      "ko": "size",
      "vi": "size",
      "id": "size"
    },
    "pos": "noun",
    "ex": "大きさについて考える"
  },
  {
    "id": "V2343",
    "w": "長さ",
    "r": "ながさ",
    "m": {
      "en": "length",
      "zh-TW": "長さ",
      "zh-CN": "長さ",
      "ko": "length",
      "vi": "length",
      "id": "length"
    },
    "pos": "noun",
    "ex": "長さについて考える"
  },
  {
    "id": "V2344",
    "w": "高さ",
    "r": "たかさ",
    "m": {
      "en": "height",
      "zh-TW": "高さ",
      "zh-CN": "高さ",
      "ko": "height",
      "vi": "height",
      "id": "height"
    },
    "pos": "noun",
    "ex": "高さについて考える"
  },
  {
    "id": "V2345",
    "w": "重さ",
    "r": "おもさ",
    "m": {
      "en": "weight",
      "zh-TW": "重さ",
      "zh-CN": "重さ",
      "ko": "weight",
      "vi": "weight",
      "id": "weight"
    },
    "pos": "noun",
    "ex": "重さについて考える"
  },
  {
    "id": "V2346",
    "w": "厚さ",
    "r": "あつさ",
    "m": {
      "en": "thickness",
      "zh-TW": "厚さ",
      "zh-CN": "厚さ",
      "ko": "thickness",
      "vi": "thickness",
      "id": "thickness"
    },
    "pos": "noun",
    "ex": "厚さについて考える"
  },
  {
    "id": "V2347",
    "w": "赤",
    "r": "あか",
    "m": {
      "en": "red",
      "zh-TW": "赤",
      "zh-CN": "赤",
      "ko": "red",
      "vi": "red",
      "id": "red"
    },
    "pos": "noun",
    "ex": "赤について考える"
  },
  {
    "id": "V2348",
    "w": "青",
    "r": "あお",
    "m": {
      "en": "blue",
      "zh-TW": "青",
      "zh-CN": "青",
      "ko": "blue",
      "vi": "blue",
      "id": "blue"
    },
    "pos": "noun",
    "ex": "青について考える"
  },
  {
    "id": "V2349",
    "w": "黄色",
    "r": "きいろ",
    "m": {
      "en": "yellow",
      "zh-TW": "黄色",
      "zh-CN": "黄色",
      "ko": "yellow",
      "vi": "yellow",
      "id": "yellow"
    },
    "pos": "noun",
    "ex": "黄色について考える"
  },
  {
    "id": "V2350",
    "w": "茶色",
    "r": "ちゃいろ",
    "m": {
      "en": "brown",
      "zh-TW": "茶色",
      "zh-CN": "茶色",
      "ko": "brown",
      "vi": "brown",
      "id": "brown"
    },
    "pos": "noun",
    "ex": "茶色について考える"
  },
  {
    "id": "V2351",
    "w": "灰色",
    "r": "はいいろ",
    "m": {
      "en": "gray",
      "zh-TW": "灰色",
      "zh-CN": "灰色",
      "ko": "gray",
      "vi": "gray",
      "id": "gray"
    },
    "pos": "noun",
    "ex": "灰色について考える"
  },
  {
    "id": "V2352",
    "w": "騒音",
    "r": "そうおん",
    "m": {
      "en": "noise",
      "zh-TW": "騒音",
      "zh-CN": "騒音",
      "ko": "noise",
      "vi": "noise",
      "id": "noise"
    },
    "pos": "noun",
    "ex": "騒音について考える"
  },
  {
    "id": "V2353",
    "w": "うるさい",
    "r": "うるさい",
    "m": {
      "en": "noisy",
      "zh-TW": "うるさい",
      "zh-CN": "うるさい",
      "ko": "noisy",
      "vi": "noisy",
      "id": "noisy"
    },
    "pos": "i-adj",
    "ex": "とてもうるさいと思う"
  },
  {
    "id": "V2354",
    "w": "明るい",
    "r": "あかるい",
    "m": {
      "en": "bright",
      "zh-TW": "明るい",
      "zh-CN": "明るい",
      "ko": "bright",
      "vi": "bright",
      "id": "bright"
    },
    "pos": "i-adj",
    "ex": "明るい性格の人だ"
  },
  {
    "id": "V2355",
    "w": "日光",
    "r": "にっこう",
    "m": {
      "en": "sunlight",
      "zh-TW": "日光",
      "zh-CN": "日光",
      "ko": "sunlight",
      "vi": "sunlight",
      "id": "sunlight"
    },
    "pos": "verb-godan",
    "ex": "日光ことにする"
  },
  {
    "id": "V2356",
    "w": "位置",
    "r": "いち",
    "m": {
      "en": "position",
      "zh-TW": "位置",
      "zh-CN": "位置",
      "ko": "position",
      "vi": "position",
      "id": "position"
    },
    "pos": "noun",
    "ex": "位置について考える"
  },
  {
    "id": "V2357",
    "w": "いつも",
    "r": "いつも",
    "m": {
      "en": "always",
      "zh-TW": "いつも",
      "zh-CN": "いつも",
      "ko": "always",
      "vi": "always",
      "id": "always"
    },
    "pos": "noun",
    "ex": "いつもについて考える"
  },
  {
    "id": "V2358",
    "w": "時々",
    "r": "ときどき",
    "m": {
      "en": "sometimes",
      "zh-TW": "時々",
      "zh-CN": "時々",
      "ko": "sometimes",
      "vi": "sometimes",
      "id": "sometimes"
    },
    "pos": "noun",
    "ex": "時々について考える"
  },
  {
    "id": "V2359",
    "w": "たまに",
    "r": "たまに",
    "m": {
      "en": "occasionally",
      "zh-TW": "たまに",
      "zh-CN": "たまに",
      "ko": "occasionally",
      "vi": "occasionally",
      "id": "occasionally"
    },
    "pos": "adverb",
    "ex": "たまに考える"
  },
  {
    "id": "V2360",
    "w": "まだ",
    "r": "まだ",
    "m": {
      "en": "still",
      "zh-TW": "まだ",
      "zh-CN": "まだ",
      "ko": "still",
      "vi": "still",
      "id": "still"
    },
    "pos": "noun",
    "ex": "まだについて考える"
  },
  {
    "id": "V2361",
    "w": "もう",
    "r": "もう",
    "m": {
      "en": "already",
      "zh-TW": "もう",
      "zh-CN": "もう",
      "ko": "already",
      "vi": "already",
      "id": "already"
    },
    "pos": "verb-godan",
    "ex": "もうことにする"
  },
  {
    "id": "V2362",
    "w": "すぐ",
    "r": "すぐ",
    "m": {
      "en": "immediately",
      "zh-TW": "すぐ",
      "zh-CN": "すぐ",
      "ko": "immediately",
      "vi": "immediately",
      "id": "immediately"
    },
    "pos": "verb-godan",
    "ex": "すぐことにする"
  },
  {
    "id": "V2363",
    "w": "やっと",
    "r": "やっと",
    "m": {
      "en": "finally",
      "zh-TW": "やっと",
      "zh-CN": "やっと",
      "ko": "finally",
      "vi": "finally",
      "id": "finally"
    },
    "pos": "adverb",
    "ex": "やっと考える"
  },
  {
    "id": "V2364",
    "w": "ついに",
    "r": "ついに",
    "m": {
      "en": "finally",
      "zh-TW": "ついに",
      "zh-CN": "ついに",
      "ko": "finally",
      "vi": "finally",
      "id": "finally"
    },
    "pos": "adverb",
    "ex": "ついに考える"
  },
  {
    "id": "V2365",
    "w": "急に",
    "r": "きゅうに",
    "m": {
      "en": "suddenly",
      "zh-TW": "急に",
      "zh-CN": "急に",
      "ko": "suddenly",
      "vi": "suddenly",
      "id": "suddenly"
    },
    "pos": "adverb",
    "ex": "急に考える"
  },
  {
    "id": "V2366",
    "w": "とても",
    "r": "とても",
    "m": {
      "en": "very",
      "zh-TW": "とても",
      "zh-CN": "とても",
      "ko": "very",
      "vi": "very",
      "id": "very"
    },
    "pos": "noun",
    "ex": "とてもについて考える"
  },
  {
    "id": "V2367",
    "w": "かなり",
    "r": "かなり",
    "m": {
      "en": "fairly",
      "zh-TW": "かなり",
      "zh-CN": "かなり",
      "ko": "fairly",
      "vi": "fairly",
      "id": "fairly"
    },
    "pos": "noun",
    "ex": "かなりについて考える"
  },
  {
    "id": "V2368",
    "w": "非常に",
    "r": "ひじょうに",
    "m": {
      "en": "extremely",
      "zh-TW": "非常に",
      "zh-CN": "非常に",
      "ko": "extremely",
      "vi": "extremely",
      "id": "extremely"
    },
    "pos": "adverb",
    "ex": "非常に考える"
  },
  {
    "id": "V2369",
    "w": "ちょっと",
    "r": "ちょっと",
    "m": {
      "en": "a bit",
      "zh-TW": "ちょっと",
      "zh-CN": "ちょっと",
      "ko": "a bit",
      "vi": "a bit",
      "id": "a bit"
    },
    "pos": "adverb",
    "ex": "ちょっと考える"
  },
  {
    "id": "V2370",
    "w": "だいたい",
    "r": "だいたい",
    "m": {
      "en": "roughly",
      "zh-TW": "だいたい",
      "zh-CN": "だいたい",
      "ko": "roughly",
      "vi": "roughly",
      "id": "roughly"
    },
    "pos": "i-adj",
    "ex": "とてもだいたいと思う"
  },
  {
    "id": "V2371",
    "w": "しかし",
    "r": "しかし",
    "m": {
      "en": "however",
      "zh-TW": "しかし",
      "zh-CN": "しかし",
      "ko": "however",
      "vi": "however",
      "id": "however"
    },
    "pos": "noun",
    "ex": "しかしについて考える"
  },
  {
    "id": "V2372",
    "w": "でも",
    "r": "でも",
    "m": {
      "en": "but",
      "zh-TW": "でも",
      "zh-CN": "でも",
      "ko": "but",
      "vi": "but",
      "id": "but"
    },
    "pos": "noun",
    "ex": "でもについて考える"
  },
  {
    "id": "V2373",
    "w": "けれども",
    "r": "けれども",
    "m": {
      "en": "but",
      "zh-TW": "けれども",
      "zh-CN": "けれども",
      "ko": "but",
      "vi": "but",
      "id": "but"
    },
    "pos": "noun",
    "ex": "けれどもについて考える"
  },
  {
    "id": "V2374",
    "w": "それで",
    "r": "それで",
    "m": {
      "en": "so",
      "zh-TW": "それで",
      "zh-CN": "それで",
      "ko": "so",
      "vi": "so",
      "id": "so"
    },
    "pos": "noun",
    "ex": "それでについて考える"
  },
  {
    "id": "V2375",
    "w": "だから",
    "r": "だから",
    "m": {
      "en": "therefore",
      "zh-TW": "だから",
      "zh-CN": "だから",
      "ko": "therefore",
      "vi": "therefore",
      "id": "therefore"
    },
    "pos": "noun",
    "ex": "だからについて考える"
  },
  {
    "id": "V2376",
    "w": "さらに",
    "r": "さらに",
    "m": {
      "en": "furthermore",
      "zh-TW": "さらに",
      "zh-CN": "さらに",
      "ko": "furthermore",
      "vi": "furthermore",
      "id": "furthermore"
    },
    "pos": "adverb",
    "ex": "さらに考える"
  },
  {
    "id": "V2377",
    "w": "そして",
    "r": "そして",
    "m": {
      "en": "and then",
      "zh-TW": "そして",
      "zh-CN": "そして",
      "ko": "and then",
      "vi": "and then",
      "id": "and then"
    },
    "pos": "noun",
    "ex": "そしてについて考える"
  },
  {
    "id": "V2378",
    "w": "この",
    "r": "この",
    "m": {
      "en": "this",
      "zh-TW": "この",
      "zh-CN": "この",
      "ko": "this",
      "vi": "this",
      "id": "this"
    },
    "pos": "noun",
    "ex": "このについて考える"
  },
  {
    "id": "V2379",
    "w": "その",
    "r": "その",
    "m": {
      "en": "that",
      "zh-TW": "その",
      "zh-CN": "その",
      "ko": "that",
      "vi": "that",
      "id": "that"
    },
    "pos": "noun",
    "ex": "そのについて考える"
  },
  {
    "id": "V2380",
    "w": "あの",
    "r": "あの",
    "m": {
      "en": "that",
      "zh-TW": "あの",
      "zh-CN": "あの",
      "ko": "that",
      "vi": "that",
      "id": "that"
    },
    "pos": "noun",
    "ex": "あのについて考える"
  },
  {
    "id": "V2381",
    "w": "ここ",
    "r": "ここ",
    "m": {
      "en": "here",
      "zh-TW": "ここ",
      "zh-CN": "ここ",
      "ko": "here",
      "vi": "here",
      "id": "here"
    },
    "pos": "noun",
    "ex": "ここについて考える"
  },
  {
    "id": "V2382",
    "w": "そこ",
    "r": "そこ",
    "m": {
      "en": "there",
      "zh-TW": "そこ",
      "zh-CN": "そこ",
      "ko": "there",
      "vi": "there",
      "id": "there"
    },
    "pos": "noun",
    "ex": "そこについて考える"
  },
  {
    "id": "V2383",
    "w": "あそこ",
    "r": "あそこ",
    "m": {
      "en": "over there",
      "zh-TW": "あそこ",
      "zh-CN": "あそこ",
      "ko": "over there",
      "vi": "over there",
      "id": "over there"
    },
    "pos": "noun",
    "ex": "あそこについて考える"
  },
  {
    "id": "V2384",
    "w": "こちら",
    "r": "こちら",
    "m": {
      "en": "this way",
      "zh-TW": "こちら",
      "zh-CN": "こちら",
      "ko": "this way",
      "vi": "this way",
      "id": "this way"
    },
    "pos": "noun",
    "ex": "こちらについて考える"
  },
  {
    "id": "V2385",
    "w": "そちら",
    "r": "そちら",
    "m": {
      "en": "that way",
      "zh-TW": "そちら",
      "zh-CN": "そちら",
      "ko": "that way",
      "vi": "that way",
      "id": "that way"
    },
    "pos": "noun",
    "ex": "そちらについて考える"
  },
  {
    "id": "V2386",
    "w": "あちら",
    "r": "あちら",
    "m": {
      "en": "that way",
      "zh-TW": "あちら",
      "zh-CN": "あちら",
      "ko": "that way",
      "vi": "that way",
      "id": "that way"
    },
    "pos": "noun",
    "ex": "あちらについて考える"
  },
  {
    "id": "V2387",
    "w": "何",
    "r": "なに",
    "m": {
      "en": "what",
      "zh-TW": "何",
      "zh-CN": "何",
      "ko": "what",
      "vi": "what",
      "id": "what"
    },
    "pos": "adverb",
    "ex": "何考える"
  },
  {
    "id": "V2388",
    "w": "どれ",
    "r": "どれ",
    "m": {
      "en": "which",
      "zh-TW": "どれ",
      "zh-CN": "どれ",
      "ko": "which",
      "vi": "which",
      "id": "which"
    },
    "pos": "noun",
    "ex": "どれについて考える"
  },
  {
    "id": "V2389",
    "w": "どこ",
    "r": "どこ",
    "m": {
      "en": "where",
      "zh-TW": "どこ",
      "zh-CN": "どこ",
      "ko": "where",
      "vi": "where",
      "id": "where"
    },
    "pos": "noun",
    "ex": "どこについて考える"
  },
  {
    "id": "V2390",
    "w": "いつ",
    "r": "いつ",
    "m": {
      "en": "when",
      "zh-TW": "いつ",
      "zh-CN": "いつ",
      "ko": "when",
      "vi": "when",
      "id": "when"
    },
    "pos": "verb-godan",
    "ex": "いつことにする"
  },
  {
    "id": "V2391",
    "w": "なぜ",
    "r": "なぜ",
    "m": {
      "en": "why",
      "zh-TW": "なぜ",
      "zh-CN": "なぜ",
      "ko": "why",
      "vi": "why",
      "id": "why"
    },
    "pos": "noun",
    "ex": "なぜについて考える"
  },
  {
    "id": "V2392",
    "w": "どうして",
    "r": "どうして",
    "m": {
      "en": "why",
      "zh-TW": "どうして",
      "zh-CN": "どうして",
      "ko": "why",
      "vi": "why",
      "id": "why"
    },
    "pos": "noun",
    "ex": "どうしてについて考える"
  },
  {
    "id": "V2393",
    "w": "どのように",
    "r": "どのように",
    "m": {
      "en": "how",
      "zh-TW": "どのように",
      "zh-CN": "どのように",
      "ko": "how",
      "vi": "how",
      "id": "how"
    },
    "pos": "noun",
    "ex": "どのようにについて考える"
  },
  {
    "id": "V2394",
    "w": "どのくらい",
    "r": "どのくらい",
    "m": {
      "en": "how much",
      "zh-TW": "どのくらい",
      "zh-CN": "どのくらい",
      "ko": "how much",
      "vi": "how much",
      "id": "how much"
    },
    "pos": "i-adj",
    "ex": "とてもどのくらいと思う"
  },
  {
    "id": "V2395",
    "w": "いくら",
    "r": "いくら",
    "m": {
      "en": "how much",
      "zh-TW": "いくら",
      "zh-CN": "いくら",
      "ko": "how much",
      "vi": "how much",
      "id": "how much"
    },
    "pos": "noun",
    "ex": "いくらについて考える"
  },
  {
    "id": "V2396",
    "w": "一つ",
    "r": "ひとつ",
    "m": {
      "en": "one",
      "zh-TW": "一つ",
      "zh-CN": "一つ",
      "ko": "one",
      "vi": "one",
      "id": "one"
    },
    "pos": "verb-godan",
    "ex": "一つことにする"
  },
  {
    "id": "V2397",
    "w": "二つ",
    "r": "ふたつ",
    "m": {
      "en": "two",
      "zh-TW": "二つ",
      "zh-CN": "二つ",
      "ko": "two",
      "vi": "two",
      "id": "two"
    },
    "pos": "verb-godan",
    "ex": "二つことにする"
  },
  {
    "id": "V2398",
    "w": "七つ",
    "r": "ななつ",
    "m": {
      "en": "seven",
      "zh-TW": "七つ",
      "zh-CN": "七つ",
      "ko": "seven",
      "vi": "seven",
      "id": "seven"
    },
    "pos": "verb-godan",
    "ex": "七つことにする"
  },
  {
    "id": "V2399",
    "w": "八つ",
    "r": "やっつ",
    "m": {
      "en": "eight",
      "zh-TW": "八つ",
      "zh-CN": "八つ",
      "ko": "eight",
      "vi": "eight",
      "id": "eight"
    },
    "pos": "verb-godan",
    "ex": "八つことにする"
  },
  {
    "id": "V2400",
    "w": "九つ",
    "r": "ここのつ",
    "m": {
      "en": "nine",
      "zh-TW": "九つ",
      "zh-CN": "九つ",
      "ko": "nine",
      "vi": "nine",
      "id": "nine"
    },
    "pos": "verb-godan",
    "ex": "九つことにする"
  },
  {
    "id": "V2401",
    "w": "個",
    "r": "こ",
    "m": {
      "en": "counter for small items",
      "zh-TW": "個",
      "zh-CN": "個",
      "ko": "counter for small items",
      "vi": "counter for small items",
      "id": "counter for small items"
    },
    "pos": "noun",
    "ex": "個について考える"
  },
  {
    "id": "V2402",
    "w": "本",
    "r": "ほん",
    "m": {
      "en": "counter for long objects",
      "zh-TW": "本",
      "zh-CN": "本",
      "ko": "counter for long objects",
      "vi": "counter for long objects",
      "id": "counter for long objects"
    },
    "pos": "noun",
    "ex": "本を読む"
  },
  {
    "id": "V2403",
    "w": "枚",
    "r": "まい",
    "m": {
      "en": "counter for flat objects",
      "zh-TW": "枚",
      "zh-CN": "枚",
      "ko": "counter for flat objects",
      "vi": "counter for flat objects",
      "id": "counter for flat objects"
    },
    "pos": "i-adj",
    "ex": "とても枚と思う"
  },
  {
    "id": "V2404",
    "w": "冊",
    "r": "さつ",
    "m": {
      "en": "counter for books",
      "zh-TW": "冊",
      "zh-CN": "冊",
      "ko": "counter for books",
      "vi": "counter for books",
      "id": "counter for books"
    },
    "pos": "verb-godan",
    "ex": "冊ことにする"
  },
  {
    "id": "V2405",
    "w": "匹",
    "r": "ひき",
    "m": {
      "en": "counter for small animals",
      "zh-TW": "匹",
      "zh-CN": "匹",
      "ko": "counter for small animals",
      "vi": "counter for small animals",
      "id": "counter for small animals"
    },
    "pos": "noun",
    "ex": "匹について考える"
  },
  {
    "id": "V2406",
    "w": "回",
    "r": "かい",
    "m": {
      "en": "counter for times",
      "zh-TW": "回",
      "zh-CN": "回",
      "ko": "counter for times",
      "vi": "counter for times",
      "id": "counter for times"
    },
    "pos": "i-adj",
    "ex": "とても回と思う"
  },
  {
    "id": "V2407",
    "w": "いらっしゃる",
    "r": "いらっしゃる",
    "m": {
      "en": "to be (hon)",
      "zh-TW": "いらっしゃる",
      "zh-CN": "いらっしゃる",
      "ko": "to be (hon)",
      "vi": "to be (hon)",
      "id": "to be (hon)"
    },
    "pos": "verb-godan",
    "ex": "いらっしゃることにする"
  },
  {
    "id": "V2408",
    "w": "召し上がる",
    "r": "めしあがる",
    "m": {
      "en": "to eat (hon)",
      "zh-TW": "召し上がる",
      "zh-CN": "召し上がる",
      "ko": "to eat (hon)",
      "vi": "to eat (hon)",
      "id": "to eat (hon)"
    },
    "pos": "verb-godan",
    "ex": "召し上がることにする"
  },
  {
    "id": "V2409",
    "w": "ご覧になる",
    "r": "ごらんになる",
    "m": {
      "en": "to see (hon)",
      "zh-TW": "ご覧になる",
      "zh-CN": "ご覧になる",
      "ko": "to see (hon)",
      "vi": "to see (hon)",
      "id": "to see (hon)"
    },
    "pos": "verb-godan",
    "ex": "ご覧になることにする"
  },
  {
    "id": "V2410",
    "w": "お越しになる",
    "r": "おこしになる",
    "m": {
      "en": "to come (hon)",
      "zh-TW": "お越しになる",
      "zh-CN": "お越しになる",
      "ko": "to come (hon)",
      "vi": "to come (hon)",
      "id": "to come (hon)"
    },
    "pos": "verb-godan",
    "ex": "お越しになることにする"
  },
  {
    "id": "V2411",
    "w": "お帰りになる",
    "r": "おかえりになる",
    "m": {
      "en": "to return (hon)",
      "zh-TW": "お帰りになる",
      "zh-CN": "お帰りになる",
      "ko": "to return (hon)",
      "vi": "to return (hon)",
      "id": "to return (hon)"
    },
    "pos": "verb-godan",
    "ex": "お帰りになることにする"
  },
  {
    "id": "V2412",
    "w": "申す",
    "r": "もうす",
    "m": {
      "en": "to say (hum)",
      "zh-TW": "申す",
      "zh-CN": "申す",
      "ko": "to say (hum)",
      "vi": "to say (hum)",
      "id": "to say (hum)"
    },
    "pos": "verb-godan",
    "ex": "申すことにする"
  },
  {
    "id": "V2413",
    "w": "参る",
    "r": "まいる",
    "m": {
      "en": "to go (hum)",
      "zh-TW": "参る",
      "zh-CN": "参る",
      "ko": "to go (hum)",
      "vi": "to go (hum)",
      "id": "to go (hum)"
    },
    "pos": "verb-ichidan",
    "ex": "参ることにする"
  },
  {
    "id": "V2414",
    "w": "いただく",
    "r": "いただく",
    "m": {
      "en": "to receive (hum)",
      "zh-TW": "いただく",
      "zh-CN": "いただく",
      "ko": "to receive (hum)",
      "vi": "to receive (hum)",
      "id": "to receive (hum)"
    },
    "pos": "verb-godan",
    "ex": "いただくことにする"
  },
  {
    "id": "V2415",
    "w": "飛ぶ",
    "r": "とぶ",
    "m": {
      "en": "fly",
      "zh-TW": "飛ぶ",
      "zh-CN": "飛ぶ",
      "ko": "fly",
      "vi": "fly",
      "id": "fly"
    },
    "pos": "verb-godan",
    "ex": "飛ぶことにする"
  },
  {
    "id": "V2416",
    "w": "跳ぶ",
    "r": "とぶ",
    "m": {
      "en": "jump",
      "zh-TW": "跳ぶ",
      "zh-CN": "跳ぶ",
      "ko": "jump",
      "vi": "jump",
      "id": "jump"
    },
    "pos": "verb-godan",
    "ex": "跳ぶことにする"
  },
  {
    "id": "V2417",
    "w": "乗る",
    "r": "のる",
    "m": {
      "en": "ride",
      "zh-TW": "乗る",
      "zh-CN": "乗る",
      "ko": "ride",
      "vi": "ride",
      "id": "ride"
    },
    "pos": "verb-godan",
    "ex": "電車に乗る"
  },
  {
    "id": "V2418",
    "w": "上がる",
    "r": "あがる",
    "m": {
      "en": "go up",
      "zh-TW": "上がる",
      "zh-CN": "上がる",
      "ko": "go up",
      "vi": "go up",
      "id": "go up"
    },
    "pos": "verb-godan",
    "ex": "上がることにする"
  },
  {
    "id": "V2419",
    "w": "通る",
    "r": "とおる",
    "m": {
      "en": "pass",
      "zh-TW": "通る",
      "zh-CN": "通る",
      "ko": "pass",
      "vi": "pass",
      "id": "pass"
    },
    "pos": "verb-godan",
    "ex": "通ることにする"
  },
  {
    "id": "V2420",
    "w": "落ちる",
    "r": "おちる",
    "m": {
      "en": "fall",
      "zh-TW": "落ちる",
      "zh-CN": "落ちる",
      "ko": "fall",
      "vi": "fall",
      "id": "fall"
    },
    "pos": "verb-ichidan",
    "ex": "りんごが木から落ちる"
  },
  {
    "id": "V2421",
    "w": "登る",
    "r": "のぼる",
    "m": {
      "en": "climb",
      "zh-TW": "登る",
      "zh-CN": "登る",
      "ko": "climb",
      "vi": "climb",
      "id": "climb"
    },
    "pos": "verb-godan",
    "ex": "登ることにする"
  },
  {
    "id": "V2422",
    "w": "下りる",
    "r": "おりる",
    "m": {
      "en": "descend",
      "zh-TW": "下りる",
      "zh-CN": "下りる",
      "ko": "descend",
      "vi": "descend",
      "id": "descend"
    },
    "pos": "verb-ichidan",
    "ex": "下りることにする"
  },
  {
    "id": "V2423",
    "w": "見える",
    "r": "みえる",
    "m": {
      "en": "be visible",
      "zh-TW": "見える",
      "zh-CN": "見える",
      "ko": "be visible",
      "vi": "be visible",
      "id": "be visible"
    },
    "pos": "verb-ichidan",
    "ex": "富士山が見える"
  },
  {
    "id": "V2424",
    "w": "聞こえる",
    "r": "きこえる",
    "m": {
      "en": "be audible",
      "zh-TW": "聞こえる",
      "zh-CN": "聞こえる",
      "ko": "be audible",
      "vi": "be audible",
      "id": "be audible"
    },
    "pos": "verb-ichidan",
    "ex": "聞こえることにする"
  },
  {
    "id": "V2425",
    "w": "話す",
    "r": "はなす",
    "m": {
      "en": "speak",
      "zh-TW": "話す",
      "zh-CN": "話す",
      "ko": "speak",
      "vi": "speak",
      "id": "speak"
    },
    "pos": "verb-godan",
    "ex": "友達と話す"
  },
  {
    "id": "V2426",
    "w": "質問する",
    "r": "しつもんする",
    "m": {
      "en": "ask",
      "zh-TW": "質問する",
      "zh-CN": "質問する",
      "ko": "ask",
      "vi": "ask",
      "id": "ask"
    },
    "pos": "verb-suru",
    "ex": "質問することが大切だ"
  },
  {
    "id": "V2427",
    "w": "説明する",
    "r": "せつめいする",
    "m": {
      "en": "explain",
      "zh-TW": "説明する",
      "zh-CN": "説明する",
      "ko": "explain",
      "vi": "explain",
      "id": "explain"
    },
    "pos": "verb-suru",
    "ex": "理由を説明する",
    "syn": [
      "解説する",
      "述べる",
      "話す"
    ]
  },
  {
    "id": "V2428",
    "w": "習う",
    "r": "ならう",
    "m": {
      "en": "learn",
      "zh-TW": "習う",
      "zh-CN": "習う",
      "ko": "learn",
      "vi": "learn",
      "id": "learn"
    },
    "pos": "verb-godan",
    "ex": "ピアノを習う"
  },
  {
    "id": "V2429",
    "w": "食べる",
    "r": "たべる",
    "m": {
      "en": "eat",
      "zh-TW": "食べる",
      "zh-CN": "食べる",
      "ko": "eat",
      "vi": "eat",
      "id": "eat"
    },
    "pos": "verb-godan",
    "ex": "ご飯を食べる"
  },
  {
    "id": "V2430",
    "w": "飲む",
    "r": "のむ",
    "m": {
      "en": "drink",
      "zh-TW": "飲む",
      "zh-CN": "飲む",
      "ko": "drink",
      "vi": "drink",
      "id": "drink"
    },
    "pos": "verb-godan",
    "ex": "水を飲む"
  },
  {
    "id": "V2431",
    "w": "料理する",
    "r": "りょうりする",
    "m": {
      "en": "cook",
      "zh-TW": "料理する",
      "zh-CN": "料理する",
      "ko": "cook",
      "vi": "cook",
      "id": "cook"
    },
    "pos": "verb-suru",
    "ex": "料理することが大切だ"
  },
  {
    "id": "V2432",
    "w": "蒸す",
    "r": "むす",
    "m": {
      "en": "steam",
      "zh-TW": "蒸す",
      "zh-CN": "蒸す",
      "ko": "steam",
      "vi": "steam",
      "id": "steam"
    },
    "pos": "verb-godan",
    "ex": "蒸すことにする"
  },
  {
    "id": "V2433",
    "w": "出す",
    "r": "だす",
    "m": {
      "en": "take out",
      "zh-TW": "出す",
      "zh-CN": "出す",
      "ko": "take out",
      "vi": "take out",
      "id": "take out"
    },
    "pos": "verb-godan",
    "ex": "出すことにする"
  },
  {
    "id": "V2434",
    "w": "開ける",
    "r": "あける",
    "m": {
      "en": "open",
      "zh-TW": "開ける",
      "zh-CN": "開ける",
      "ko": "open",
      "vi": "open",
      "id": "open"
    },
    "pos": "verb-ichidan",
    "ex": "開けることにする"
  },
  {
    "id": "V2435",
    "w": "点ける",
    "r": "つける",
    "m": {
      "en": "turn on",
      "zh-TW": "点ける",
      "zh-CN": "点ける",
      "ko": "turn on",
      "vi": "turn on",
      "id": "turn on"
    },
    "pos": "verb-ichidan",
    "ex": "点けることにする"
  },
  {
    "id": "V2436",
    "w": "買う",
    "r": "かう",
    "m": {
      "en": "buy",
      "zh-TW": "買う",
      "zh-CN": "買う",
      "ko": "buy",
      "vi": "buy",
      "id": "buy"
    },
    "pos": "verb-godan",
    "ex": "買うことにする"
  },
  {
    "id": "V2437",
    "w": "貸す",
    "r": "かす",
    "m": {
      "en": "lend",
      "zh-TW": "貸す",
      "zh-CN": "貸す",
      "ko": "lend",
      "vi": "lend",
      "id": "lend"
    },
    "pos": "verb-godan",
    "ex": "貸すことにする"
  },
  {
    "id": "V2438",
    "w": "取る",
    "r": "とる",
    "m": {
      "en": "take",
      "zh-TW": "取る",
      "zh-CN": "取る",
      "ko": "take",
      "vi": "take",
      "id": "take"
    },
    "pos": "verb-godan",
    "ex": "写真を取る"
  },
  {
    "id": "V2439",
    "w": "持つ",
    "r": "もつ",
    "m": {
      "en": "hold",
      "zh-TW": "持つ",
      "zh-CN": "持つ",
      "ko": "hold",
      "vi": "hold",
      "id": "hold"
    },
    "pos": "verb-godan",
    "ex": "かばんを持つ"
  },
  {
    "id": "V2440",
    "w": "広い",
    "r": "ひろい",
    "m": {
      "en": "wide",
      "zh-TW": "広い",
      "zh-CN": "広い",
      "ko": "wide",
      "vi": "wide",
      "id": "wide"
    },
    "pos": "i-adj",
    "ex": "広い部屋に住む"
  },
  {
    "id": "V2441",
    "w": "硬い",
    "r": "かたい",
    "m": {
      "en": "hard",
      "zh-TW": "硬い",
      "zh-CN": "硬い",
      "ko": "hard",
      "vi": "hard",
      "id": "hard"
    },
    "pos": "i-adj",
    "ex": "とても硬いと思う"
  },
  {
    "id": "V2442",
    "w": "冷たい",
    "r": "つめたい",
    "m": {
      "en": "cold",
      "zh-TW": "冷たい",
      "zh-CN": "冷たい",
      "ko": "cold",
      "vi": "cold",
      "id": "cold"
    },
    "pos": "i-adj",
    "ex": "冷たい水を飲む"
  },
  {
    "id": "V2443",
    "w": "寒い",
    "r": "さむい",
    "m": {
      "en": "cold (weather)",
      "zh-TW": "寒い",
      "zh-CN": "寒い",
      "ko": "cold (weather)",
      "vi": "cold (weather)",
      "id": "cold (weather)"
    },
    "pos": "i-adj",
    "ex": "今日は寒い"
  },
  {
    "id": "V2444",
    "w": "若い",
    "r": "わかい",
    "m": {
      "en": "young",
      "zh-TW": "若い",
      "zh-CN": "若い",
      "ko": "young",
      "vi": "young",
      "id": "young"
    },
    "pos": "i-adj",
    "ex": "若い世代"
  },
  {
    "id": "V2445",
    "w": "遅い",
    "r": "おそい",
    "m": {
      "en": "slow",
      "zh-TW": "遅い",
      "zh-CN": "遅い",
      "ko": "slow",
      "vi": "slow",
      "id": "slow"
    },
    "pos": "i-adj",
    "ex": "電車が遅れている"
  },
  {
    "id": "V2446",
    "w": "遠い",
    "r": "とおい",
    "m": {
      "en": "far",
      "zh-TW": "遠い",
      "zh-CN": "遠い",
      "ko": "far",
      "vi": "far",
      "id": "far"
    },
    "pos": "i-adj",
    "ex": "学校まで遠い道のりだ"
  },
  {
    "id": "V2447",
    "w": "正しい",
    "r": "ただしい",
    "m": {
      "en": "correct",
      "zh-TW": "正しい",
      "zh-CN": "正しい",
      "ko": "correct",
      "vi": "correct",
      "id": "correct"
    },
    "pos": "i-adj",
    "ex": "とても正しいと思う"
  },
  {
    "id": "V2448",
    "w": "明日",
    "r": "あした",
    "m": {
      "en": "tomorrow",
      "zh-TW": "明日",
      "zh-CN": "明日",
      "ko": "tomorrow",
      "vi": "tomorrow",
      "id": "tomorrow"
    },
    "pos": "noun",
    "ex": "明日について考える"
  },
  {
    "id": "V2449",
    "w": "昨日",
    "r": "きのう",
    "m": {
      "en": "yesterday",
      "zh-TW": "昨日",
      "zh-CN": "昨日",
      "ko": "yesterday",
      "vi": "yesterday",
      "id": "yesterday"
    },
    "pos": "verb-godan",
    "ex": "昨日ことにする"
  },
  {
    "id": "V2450",
    "w": "先週",
    "r": "せんしゅう",
    "m": {
      "en": "last week",
      "zh-TW": "先週",
      "zh-CN": "先週",
      "ko": "last week",
      "vi": "last week",
      "id": "last week"
    },
    "pos": "verb-godan",
    "ex": "先週ことにする"
  },
  {
    "id": "V2451",
    "w": "今月",
    "r": "こんげつ",
    "m": {
      "en": "this month",
      "zh-TW": "今月",
      "zh-CN": "今月",
      "ko": "this month",
      "vi": "this month",
      "id": "this month"
    },
    "pos": "verb-godan",
    "ex": "今月ことにする"
  },
  {
    "id": "V2452",
    "w": "先月",
    "r": "せんげつ",
    "m": {
      "en": "last month",
      "zh-TW": "先月",
      "zh-CN": "先月",
      "ko": "last month",
      "vi": "last month",
      "id": "last month"
    },
    "pos": "verb-godan",
    "ex": "先月ことにする"
  },
  {
    "id": "V2453",
    "w": "去年",
    "r": "きょねん",
    "m": {
      "en": "last year",
      "zh-TW": "去年",
      "zh-CN": "去年",
      "ko": "last year",
      "vi": "last year",
      "id": "last year"
    },
    "pos": "noun",
    "ex": "去年について考える"
  },
  {
    "id": "V2454",
    "w": "駅",
    "r": "えき",
    "m": {
      "en": "station",
      "zh-TW": "駅",
      "zh-CN": "駅",
      "ko": "station",
      "vi": "station",
      "id": "station"
    },
    "pos": "noun",
    "ex": "駅で友達と待ち合わせる"
  },
  {
    "id": "V2455",
    "w": "銀行",
    "r": "ぎんこう",
    "m": {
      "en": "bank",
      "zh-TW": "銀行",
      "zh-CN": "銀行",
      "ko": "bank",
      "vi": "bank",
      "id": "bank"
    },
    "pos": "verb-godan",
    "ex": "銀行ことにする"
  },
  {
    "id": "V2456",
    "w": "郵便局",
    "r": "ゆうびんきょく",
    "m": {
      "en": "post office",
      "zh-TW": "郵便局",
      "zh-CN": "郵便局",
      "ko": "post office",
      "vi": "post office",
      "id": "post office"
    },
    "pos": "verb-godan",
    "ex": "郵便局ことにする"
  },
  {
    "id": "V2457",
    "w": "図書館",
    "r": "としょかん",
    "m": {
      "en": "library",
      "zh-TW": "図書館",
      "zh-CN": "図書館",
      "ko": "library",
      "vi": "library",
      "id": "library"
    },
    "pos": "noun",
    "ex": "図書館について考える"
  },
  {
    "id": "V2458",
    "w": "公園",
    "r": "こうえん",
    "m": {
      "en": "park",
      "zh-TW": "公園",
      "zh-CN": "公園",
      "ko": "park",
      "vi": "park",
      "id": "park"
    },
    "pos": "noun",
    "ex": "公園について考える"
  },
  {
    "id": "V2459",
    "w": "神社",
    "r": "じんじゃ",
    "m": {
      "en": "shrine",
      "zh-TW": "神社",
      "zh-CN": "神社",
      "ko": "shrine",
      "vi": "shrine",
      "id": "shrine"
    },
    "pos": "noun",
    "ex": "神社について考える"
  },
  {
    "id": "V2460",
    "w": "教会",
    "r": "きょうかい",
    "m": {
      "en": "church",
      "zh-TW": "教会",
      "zh-CN": "教会",
      "ko": "church",
      "vi": "church",
      "id": "church"
    },
    "pos": "i-adj",
    "ex": "とても教会と思う"
  },
  {
    "id": "V2461",
    "w": "美術館",
    "r": "びじゅつかん",
    "m": {
      "en": "art museum",
      "zh-TW": "美術館",
      "zh-CN": "美術館",
      "ko": "art museum",
      "vi": "art museum",
      "id": "art museum"
    },
    "pos": "noun",
    "ex": "美術館について考える"
  },
  {
    "id": "V2462",
    "w": "博物館",
    "r": "はくぶつかん",
    "m": {
      "en": "museum",
      "zh-TW": "博物館",
      "zh-CN": "博物館",
      "ko": "museum",
      "vi": "museum",
      "id": "museum"
    },
    "pos": "noun",
    "ex": "博物館について考える"
  },
  {
    "id": "V2463",
    "w": "先生",
    "r": "せんせい",
    "m": {
      "en": "teacher",
      "zh-TW": "先生",
      "zh-CN": "先生",
      "ko": "teacher",
      "vi": "teacher",
      "id": "teacher"
    },
    "pos": "i-adj",
    "ex": "とても先生と思う"
  },
  {
    "id": "V2464",
    "w": "店員",
    "r": "てんいん",
    "m": {
      "en": "clerk",
      "zh-TW": "店員",
      "zh-CN": "店員",
      "ko": "clerk",
      "vi": "clerk",
      "id": "clerk"
    },
    "pos": "noun",
    "ex": "店員について考える"
  },
  {
    "id": "V2465",
    "w": "運転手",
    "r": "うんてんしゅ",
    "m": {
      "en": "driver",
      "zh-TW": "運転手",
      "zh-CN": "運転手",
      "ko": "driver",
      "vi": "driver",
      "id": "driver"
    },
    "pos": "noun",
    "ex": "運転手について考える"
  },
  {
    "id": "V2466",
    "w": "看護師",
    "r": "かんごし",
    "m": {
      "en": "nurse",
      "zh-TW": "看護師",
      "zh-CN": "看護師",
      "ko": "nurse",
      "vi": "nurse",
      "id": "nurse"
    },
    "pos": "noun",
    "ex": "看護師について考える"
  },
  {
    "id": "V2467",
    "w": "警察官",
    "r": "けいさつかん",
    "m": {
      "en": "police officer",
      "zh-TW": "警察官",
      "zh-CN": "警察官",
      "ko": "police officer",
      "vi": "police officer",
      "id": "police officer"
    },
    "pos": "noun",
    "ex": "警察官について考える"
  },
  {
    "id": "V2468",
    "w": "消防士",
    "r": "しょうぼうし",
    "m": {
      "en": "firefighter",
      "zh-TW": "消防士",
      "zh-CN": "消防士",
      "ko": "firefighter",
      "vi": "firefighter",
      "id": "firefighter"
    },
    "pos": "noun",
    "ex": "消防士について考える"
  },
  {
    "id": "V2469",
    "w": "弁護士",
    "r": "べんごし",
    "m": {
      "en": "lawyer",
      "zh-TW": "弁護士",
      "zh-CN": "弁護士",
      "ko": "lawyer",
      "vi": "lawyer",
      "id": "lawyer"
    },
    "pos": "noun",
    "ex": "弁護士について考える"
  },
  {
    "id": "V2470",
    "w": "会計士",
    "r": "かいけいし",
    "m": {
      "en": "accountant",
      "zh-TW": "会計士",
      "zh-CN": "会計士",
      "ko": "accountant",
      "vi": "accountant",
      "id": "accountant"
    },
    "pos": "noun",
    "ex": "会計士について考える"
  },
  {
    "id": "V2471",
    "w": "葉書",
    "r": "はがき",
    "m": {
      "en": "postcard",
      "zh-TW": "葉書",
      "zh-CN": "葉書",
      "ko": "postcard",
      "vi": "postcard",
      "id": "postcard"
    },
    "pos": "noun",
    "ex": "葉書について考える"
  },
  {
    "id": "V2472",
    "w": "鉛筆",
    "r": "えんぴつ",
    "m": {
      "en": "pencil",
      "zh-TW": "鉛筆",
      "zh-CN": "鉛筆",
      "ko": "pencil",
      "vi": "pencil",
      "id": "pencil"
    },
    "pos": "verb-godan",
    "ex": "鉛筆ことにする"
  },
  {
    "id": "V2473",
    "w": "ペン",
    "r": "ぺん",
    "m": {
      "en": "pen",
      "zh-TW": "ペン",
      "zh-CN": "ペン",
      "ko": "pen",
      "vi": "pen",
      "id": "pen"
    },
    "pos": "noun",
    "ex": "ペンについて考える"
  },
  {
    "id": "V2474",
    "w": "消しゴム",
    "r": "けしごむ",
    "m": {
      "en": "eraser",
      "zh-TW": "消しゴム",
      "zh-CN": "消しゴム",
      "ko": "eraser",
      "vi": "eraser",
      "id": "eraser"
    },
    "pos": "verb-godan",
    "ex": "消しゴムことにする"
  },
  {
    "id": "V2475",
    "w": "定規",
    "r": "じょうぎ",
    "m": {
      "en": "ruler",
      "zh-TW": "定規",
      "zh-CN": "定規",
      "ko": "ruler",
      "vi": "ruler",
      "id": "ruler"
    },
    "pos": "noun",
    "ex": "定規について考える"
  },
  {
    "id": "V2476",
    "w": "ノート",
    "r": "のーと",
    "m": {
      "en": "notebook",
      "zh-TW": "ノート",
      "zh-CN": "ノート",
      "ko": "notebook",
      "vi": "notebook",
      "id": "notebook"
    },
    "pos": "adverb",
    "ex": "ノート考える"
  },
  {
    "id": "V2477",
    "w": "辞書",
    "r": "じしょ",
    "m": {
      "en": "dictionary",
      "zh-TW": "辞書",
      "zh-CN": "辞書",
      "ko": "dictionary",
      "vi": "dictionary",
      "id": "dictionary"
    },
    "pos": "noun",
    "ex": "辞書について考える"
  },
  {
    "id": "V2478",
    "w": "カレンダー",
    "r": "かれんだー",
    "m": {
      "en": "calendar",
      "zh-TW": "カレンダー",
      "zh-CN": "カレンダー",
      "ko": "calendar",
      "vi": "calendar",
      "id": "calendar"
    },
    "pos": "noun",
    "ex": "カレンダーについて考える"
  },
  {
    "id": "V2479",
    "w": "時計",
    "r": "とけい",
    "m": {
      "en": "clock",
      "zh-TW": "時計",
      "zh-CN": "時計",
      "ko": "clock",
      "vi": "clock",
      "id": "clock"
    },
    "pos": "i-adj",
    "ex": "とても時計と思う"
  },
  {
    "id": "V2480",
    "w": "テレビ",
    "r": "てれび",
    "m": {
      "en": "TV",
      "zh-TW": "テレビ",
      "zh-CN": "テレビ",
      "ko": "TV",
      "vi": "TV",
      "id": "TV"
    },
    "pos": "noun",
    "ex": "テレビについて考える"
  },
  {
    "id": "V2481",
    "w": "ラジオ",
    "r": "らじお",
    "m": {
      "en": "radio",
      "zh-TW": "ラジオ",
      "zh-CN": "ラジオ",
      "ko": "radio",
      "vi": "radio",
      "id": "radio"
    },
    "pos": "noun",
    "ex": "ラジオについて考える"
  },
  {
    "id": "V2482",
    "w": "パソコン",
    "r": "ぱそこん",
    "m": {
      "en": "computer",
      "zh-TW": "パソコン",
      "zh-CN": "パソコン",
      "ko": "computer",
      "vi": "computer",
      "id": "computer"
    },
    "pos": "noun",
    "ex": "パソコンについて考える"
  },
  {
    "id": "V2483",
    "w": "携帯電話",
    "r": "けいたいでんわ",
    "m": {
      "en": "mobile phone",
      "zh-TW": "携帯電話",
      "zh-CN": "携帯電話",
      "ko": "mobile phone",
      "vi": "mobile phone",
      "id": "mobile phone"
    },
    "pos": "noun",
    "ex": "携帯電話について考える"
  },
  {
    "id": "V2484",
    "w": "カメラ",
    "r": "かめら",
    "m": {
      "en": "camera",
      "zh-TW": "カメラ",
      "zh-CN": "カメラ",
      "ko": "camera",
      "vi": "camera",
      "id": "camera"
    },
    "pos": "noun",
    "ex": "カメラについて考える"
  },
  {
    "id": "V2485",
    "w": "冷蔵庫",
    "r": "れいぞうこ",
    "m": {
      "en": "refrigerator",
      "zh-TW": "冷蔵庫",
      "zh-CN": "冷蔵庫",
      "ko": "refrigerator",
      "vi": "refrigerator",
      "id": "refrigerator"
    },
    "pos": "noun",
    "ex": "冷蔵庫について考える"
  },
  {
    "id": "V2486",
    "w": "洗濯機",
    "r": "せんたくき",
    "m": {
      "en": "washing machine",
      "zh-TW": "洗濯機",
      "zh-CN": "洗濯機",
      "ko": "washing machine",
      "vi": "washing machine",
      "id": "washing machine"
    },
    "pos": "noun",
    "ex": "洗濯機について考える"
  },
  {
    "id": "V2487",
    "w": "掃除機",
    "r": "そうじき",
    "m": {
      "en": "vacuum cleaner",
      "zh-TW": "掃除機",
      "zh-CN": "掃除機",
      "ko": "vacuum cleaner",
      "vi": "vacuum cleaner",
      "id": "vacuum cleaner"
    },
    "pos": "noun",
    "ex": "掃除機について考える"
  },
  {
    "id": "V2488",
    "w": "エアコン",
    "r": "えあこん",
    "m": {
      "en": "air conditioner",
      "zh-TW": "エアコン",
      "zh-CN": "エアコン",
      "ko": "air conditioner",
      "vi": "air conditioner",
      "id": "air conditioner"
    },
    "pos": "noun",
    "ex": "エアコンについて考える"
  },
  {
    "id": "V2489",
    "w": "電子レンジ",
    "r": "でんしれんじ",
    "m": {
      "en": "microwave",
      "zh-TW": "電子レンジ",
      "zh-CN": "電子レンジ",
      "ko": "microwave",
      "vi": "microwave",
      "id": "microwave"
    },
    "pos": "noun",
    "ex": "電子レンジについて考える"
  },
  {
    "id": "V2490",
    "w": "炊飯器",
    "r": "すいはんき",
    "m": {
      "en": "rice cooker",
      "zh-TW": "炊飯器",
      "zh-CN": "炊飯器",
      "ko": "rice cooker",
      "vi": "rice cooker",
      "id": "rice cooker"
    },
    "pos": "noun",
    "ex": "炊飯器について考える"
  },
  {
    "id": "V2491",
    "w": "ドライヤー",
    "r": "どらいやー",
    "m": {
      "en": "hair dryer",
      "zh-TW": "ドライヤー",
      "zh-CN": "ドライヤー",
      "ko": "hair dryer",
      "vi": "hair dryer",
      "id": "hair dryer"
    },
    "pos": "noun",
    "ex": "ドライヤーについて考える"
  },
  {
    "id": "V2492",
    "w": "ご飯",
    "r": "ごはん",
    "m": {
      "en": "rice",
      "zh-TW": "ご飯",
      "zh-CN": "ご飯",
      "ko": "rice",
      "vi": "rice",
      "id": "rice"
    },
    "pos": "noun",
    "ex": "ご飯について考える"
  },
  {
    "id": "V2493",
    "w": "パン",
    "r": "ぱん",
    "m": {
      "en": "bread",
      "zh-TW": "パン",
      "zh-CN": "パン",
      "ko": "bread",
      "vi": "bread",
      "id": "bread"
    },
    "pos": "noun",
    "ex": "パンについて考える"
  },
  {
    "id": "V2494",
    "w": "麺",
    "r": "めん",
    "m": {
      "en": "noodles",
      "zh-TW": "麺",
      "zh-CN": "麺",
      "ko": "noodles",
      "vi": "noodles",
      "id": "noodles"
    },
    "pos": "noun",
    "ex": "麺について考える"
  },
  {
    "id": "V2495",
    "w": "肉",
    "r": "にく",
    "m": {
      "en": "meat",
      "zh-TW": "肉",
      "zh-CN": "肉",
      "ko": "meat",
      "vi": "meat",
      "id": "meat"
    },
    "pos": "verb-godan",
    "ex": "肉ことにする"
  },
  {
    "id": "V2496",
    "w": "果物",
    "r": "くだもの",
    "m": {
      "en": "fruit",
      "zh-TW": "果物",
      "zh-CN": "果物",
      "ko": "fruit",
      "vi": "fruit",
      "id": "fruit"
    },
    "pos": "noun",
    "ex": "果物について考える"
  },
  {
    "id": "V2497",
    "w": "卵",
    "r": "たまご",
    "m": {
      "en": "egg",
      "zh-TW": "卵",
      "zh-CN": "卵",
      "ko": "egg",
      "vi": "egg",
      "id": "egg"
    },
    "pos": "noun",
    "ex": "卵について考える"
  },
  {
    "id": "V2498",
    "w": "お茶",
    "r": "おちゃ",
    "m": {
      "en": "tea",
      "zh-TW": "お茶",
      "zh-CN": "お茶",
      "ko": "tea",
      "vi": "tea",
      "id": "tea"
    },
    "pos": "noun",
    "ex": "お茶について考える"
  },
  {
    "id": "V2499",
    "w": "コーヒー",
    "r": "こーひー",
    "m": {
      "en": "coffee",
      "zh-TW": "コーヒー",
      "zh-CN": "コーヒー",
      "ko": "coffee",
      "vi": "coffee",
      "id": "coffee"
    },
    "pos": "noun",
    "ex": "コーヒーについて考える"
  },
  {
    "id": "V2500",
    "w": "ジュース",
    "r": "じゅーす",
    "m": {
      "en": "juice",
      "zh-TW": "ジュース",
      "zh-CN": "ジュース",
      "ko": "juice",
      "vi": "juice",
      "id": "juice"
    },
    "pos": "verb-godan",
    "ex": "ジュースことにする"
  },
  {
    "id": "V2501",
    "w": "ビール",
    "r": "びーる",
    "m": {
      "en": "beer",
      "zh-TW": "ビール",
      "zh-CN": "ビール",
      "ko": "beer",
      "vi": "beer",
      "id": "beer"
    },
    "pos": "verb-godan",
    "ex": "ビールことにする"
  },
  {
    "id": "V2502",
    "w": "醤油",
    "r": "しょうゆ",
    "m": {
      "en": "soy sauce",
      "zh-TW": "醤油",
      "zh-CN": "醤油",
      "ko": "soy sauce",
      "vi": "soy sauce",
      "id": "soy sauce"
    },
    "pos": "noun",
    "ex": "醤油について考える"
  },
  {
    "id": "V2503",
    "w": "シャツ",
    "r": "しゃつ",
    "m": {
      "en": "shirt",
      "zh-TW": "シャツ",
      "zh-CN": "シャツ",
      "ko": "shirt",
      "vi": "shirt",
      "id": "shirt"
    },
    "pos": "verb-godan",
    "ex": "シャツことにする"
  },
  {
    "id": "V2504",
    "w": "ズボン",
    "r": "ずぼん",
    "m": {
      "en": "pants",
      "zh-TW": "ズボン",
      "zh-CN": "ズボン",
      "ko": "pants",
      "vi": "pants",
      "id": "pants"
    },
    "pos": "noun",
    "ex": "ズボンについて考える"
  },
  {
    "id": "V2505",
    "w": "スカート",
    "r": "すかーと",
    "m": {
      "en": "skirt",
      "zh-TW": "スカート",
      "zh-CN": "スカート",
      "ko": "skirt",
      "vi": "skirt",
      "id": "skirt"
    },
    "pos": "adverb",
    "ex": "スカート考える"
  },
  {
    "id": "V2506",
    "w": "ワンピース",
    "r": "わんぴーす",
    "m": {
      "en": "dress",
      "zh-TW": "ワンピース",
      "zh-CN": "ワンピース",
      "ko": "dress",
      "vi": "dress",
      "id": "dress"
    },
    "pos": "verb-godan",
    "ex": "ワンピースことにする"
  },
  {
    "id": "V2507",
    "w": "コート",
    "r": "こーと",
    "m": {
      "en": "coat",
      "zh-TW": "コート",
      "zh-CN": "コート",
      "ko": "coat",
      "vi": "coat",
      "id": "coat"
    },
    "pos": "adverb",
    "ex": "コート考える"
  },
  {
    "id": "V2508",
    "w": "ジャケット",
    "r": "じゃけっと",
    "m": {
      "en": "jacket",
      "zh-TW": "ジャケット",
      "zh-CN": "ジャケット",
      "ko": "jacket",
      "vi": "jacket",
      "id": "jacket"
    },
    "pos": "noun",
    "ex": "ジャケットについて考える"
  },
  {
    "id": "V2509",
    "w": "セーター",
    "r": "せーたー",
    "m": {
      "en": "sweater",
      "zh-TW": "セーター",
      "zh-CN": "セーター",
      "ko": "sweater",
      "vi": "sweater",
      "id": "sweater"
    },
    "pos": "noun",
    "ex": "セーターについて考える"
  },
  {
    "id": "V2510",
    "w": "靴下",
    "r": "くつした",
    "m": {
      "en": "socks",
      "zh-TW": "靴下",
      "zh-CN": "靴下",
      "ko": "socks",
      "vi": "socks",
      "id": "socks"
    },
    "pos": "noun",
    "ex": "靴下について考える"
  },
  {
    "id": "V2511",
    "w": "手袋",
    "r": "てぶくろ",
    "m": {
      "en": "gloves",
      "zh-TW": "手袋",
      "zh-CN": "手袋",
      "ko": "gloves",
      "vi": "gloves",
      "id": "gloves"
    },
    "pos": "noun",
    "ex": "手袋について考える"
  },
  {
    "id": "V2512",
    "w": "マフラー",
    "r": "まふらー",
    "m": {
      "en": "scarf",
      "zh-TW": "マフラー",
      "zh-CN": "マフラー",
      "ko": "scarf",
      "vi": "scarf",
      "id": "scarf"
    },
    "pos": "noun",
    "ex": "マフラーについて考える"
  },
  {
    "id": "V2513",
    "w": "ネクタイ",
    "r": "ねくたい",
    "m": {
      "en": "tie",
      "zh-TW": "ネクタイ",
      "zh-CN": "ネクタイ",
      "ko": "tie",
      "vi": "tie",
      "id": "tie"
    },
    "pos": "i-adj",
    "ex": "とてもネクタイと思う"
  },
  {
    "id": "V2514",
    "w": "ベルト",
    "r": "べると",
    "m": {
      "en": "belt",
      "zh-TW": "ベルト",
      "zh-CN": "ベルト",
      "ko": "belt",
      "vi": "belt",
      "id": "belt"
    },
    "pos": "adverb",
    "ex": "ベルト考える"
  },
  {
    "id": "V2515",
    "w": "眼鏡",
    "r": "めがね",
    "m": {
      "en": "glasses",
      "zh-TW": "眼鏡",
      "zh-CN": "眼鏡",
      "ko": "glasses",
      "vi": "glasses",
      "id": "glasses"
    },
    "pos": "noun",
    "ex": "眼鏡について考える"
  },
  {
    "id": "V2516",
    "w": "アクセサリー",
    "r": "あくせさりー",
    "m": {
      "en": "accessory",
      "zh-TW": "アクセサリー",
      "zh-CN": "アクセサリー",
      "ko": "accessory",
      "vi": "accessory",
      "id": "accessory"
    },
    "pos": "noun",
    "ex": "アクセサリーについて考える"
  },
  {
    "id": "V2517",
    "w": "鼻",
    "r": "はな",
    "m": {
      "en": "nose",
      "zh-TW": "鼻",
      "zh-CN": "鼻",
      "ko": "nose",
      "vi": "nose",
      "id": "nose"
    },
    "pos": "noun",
    "ex": "鼻について考える"
  },
  {
    "id": "V2518",
    "w": "腹",
    "r": "はら",
    "m": {
      "en": "stomach",
      "zh-TW": "腹",
      "zh-CN": "腹",
      "ko": "stomach",
      "vi": "stomach",
      "id": "stomach"
    },
    "pos": "noun",
    "ex": "腹について考える"
  },
  {
    "id": "V2519",
    "w": "驚き",
    "r": "おどろき",
    "m": {
      "en": "surprise",
      "zh-TW": "驚き",
      "zh-CN": "驚き",
      "ko": "surprise",
      "vi": "surprise",
      "id": "surprise"
    },
    "pos": "noun",
    "ex": "驚きについて考える"
  },
  {
    "id": "V2520",
    "w": "愛",
    "r": "あい",
    "m": {
      "en": "love",
      "zh-TW": "愛",
      "zh-CN": "愛",
      "ko": "love",
      "vi": "love",
      "id": "love"
    },
    "pos": "i-adj",
    "ex": "とても愛と思う"
  },
  {
    "id": "V2521",
    "w": "嫉妬",
    "r": "しっと",
    "m": {
      "en": "jealousy",
      "zh-TW": "嫉妬",
      "zh-CN": "嫉妬",
      "ko": "jealousy",
      "vi": "jealousy",
      "id": "jealousy"
    },
    "pos": "adverb",
    "ex": "嫉妬考える"
  },
  {
    "id": "V2522",
    "w": "恥",
    "r": "はじ",
    "m": {
      "en": "shame",
      "zh-TW": "恥",
      "zh-CN": "恥",
      "ko": "shame",
      "vi": "shame",
      "id": "shame"
    },
    "pos": "noun",
    "ex": "恥について考える"
  },
  {
    "id": "V2523",
    "w": "誇り",
    "r": "ほこり",
    "m": {
      "en": "pride",
      "zh-TW": "誇り",
      "zh-CN": "誇り",
      "ko": "pride",
      "vi": "pride",
      "id": "pride"
    },
    "pos": "noun",
    "ex": "誇りについて考える"
  },
  {
    "id": "V2524",
    "w": "特に",
    "r": "とくに",
    "m": {
      "en": "especially",
      "zh-TW": "特に",
      "zh-CN": "特に",
      "ko": "especially",
      "vi": "especially",
      "id": "especially"
    },
    "pos": "adverb",
    "ex": "特に考える"
  },
  {
    "id": "V2525",
    "w": "本当に",
    "r": "ほんとうに",
    "m": {
      "en": "really",
      "zh-TW": "本当に",
      "zh-CN": "本当に",
      "ko": "really",
      "vi": "really",
      "id": "really"
    },
    "pos": "adverb",
    "ex": "本当に考える"
  },
  {
    "id": "V2526",
    "w": "確かに",
    "r": "たしかに",
    "m": {
      "en": "certainly",
      "zh-TW": "確かに",
      "zh-CN": "確かに",
      "ko": "certainly",
      "vi": "certainly",
      "id": "certainly"
    },
    "pos": "adverb",
    "ex": "確かに考える"
  },
  {
    "id": "V2527",
    "w": "多分",
    "r": "たぶん",
    "m": {
      "en": "probably",
      "zh-TW": "多分",
      "zh-CN": "多分",
      "ko": "probably",
      "vi": "probably",
      "id": "probably"
    },
    "pos": "noun",
    "ex": "多分について考える"
  },
  {
    "id": "V2528",
    "w": "きっと",
    "r": "きっと",
    "m": {
      "en": "surely",
      "zh-TW": "きっと",
      "zh-CN": "きっと",
      "ko": "surely",
      "vi": "surely",
      "id": "surely"
    },
    "pos": "adverb",
    "ex": "きっと考える"
  },
  {
    "id": "V2529",
    "w": "絶対に",
    "r": "ぜったいに",
    "m": {
      "en": "absolutely",
      "zh-TW": "絶対に",
      "zh-CN": "絶対に",
      "ko": "absolutely",
      "vi": "absolutely",
      "id": "absolutely"
    },
    "pos": "adverb",
    "ex": "絶対に考える"
  },
  {
    "id": "V2530",
    "w": "もちろん",
    "r": "もちろん",
    "m": {
      "en": "of course",
      "zh-TW": "もちろん",
      "zh-CN": "もちろん",
      "ko": "of course",
      "vi": "of course",
      "id": "of course"
    },
    "pos": "noun",
    "ex": "もちろんについて考える"
  },
  {
    "id": "V2531",
    "w": "実は",
    "r": "じつは",
    "m": {
      "en": "actually",
      "zh-TW": "実は",
      "zh-CN": "実は",
      "ko": "actually",
      "vi": "actually",
      "id": "actually"
    },
    "pos": "noun",
    "ex": "実はについて考える"
  },
  {
    "id": "V2532",
    "w": "すぐに",
    "r": "すぐに",
    "m": {
      "en": "immediately",
      "zh-TW": "すぐに",
      "zh-CN": "すぐに",
      "ko": "immediately",
      "vi": "immediately",
      "id": "immediately"
    },
    "pos": "adverb",
    "ex": "すぐに考える"
  },
  {
    "id": "V2533",
    "w": "ところで",
    "r": "ところで",
    "m": {
      "en": "by the way",
      "zh-TW": "ところで",
      "zh-CN": "ところで",
      "ko": "by the way",
      "vi": "by the way",
      "id": "by the way"
    },
    "pos": "noun",
    "ex": "ところでについて考える"
  },
  {
    "id": "V2534",
    "w": "つまり",
    "r": "つまり",
    "m": {
      "en": "in other words",
      "zh-TW": "つまり",
      "zh-CN": "つまり",
      "ko": "in other words",
      "vi": "in other words",
      "id": "in other words"
    },
    "pos": "noun",
    "ex": "つまりについて考える"
  },
  {
    "id": "V2535",
    "w": "例えば",
    "r": "たとえば",
    "m": {
      "en": "for example",
      "zh-TW": "例えば",
      "zh-CN": "例えば",
      "ko": "for example",
      "vi": "for example",
      "id": "for example"
    },
    "pos": "noun",
    "ex": "例えばについて考える"
  },
  {
    "id": "V2536",
    "w": "ただし",
    "r": "ただし",
    "m": {
      "en": "however",
      "zh-TW": "ただし",
      "zh-CN": "ただし",
      "ko": "however",
      "vi": "however",
      "id": "however"
    },
    "pos": "noun",
    "ex": "ただしについて考える"
  },
  {
    "id": "V2537",
    "w": "なお",
    "r": "なお",
    "m": {
      "en": "furthermore",
      "zh-TW": "なお",
      "zh-CN": "なお",
      "ko": "furthermore",
      "vi": "furthermore",
      "id": "furthermore"
    },
    "pos": "noun",
    "ex": "なおについて考える"
  },
  {
    "id": "V2538",
    "w": "ちなみに",
    "r": "ちなみに",
    "m": {
      "en": "by the way",
      "zh-TW": "ちなみに",
      "zh-CN": "ちなみに",
      "ko": "by the way",
      "vi": "by the way",
      "id": "by the way"
    },
    "pos": "adverb",
    "ex": "ちなみに考える"
  },
  {
    "id": "V2539",
    "w": "反対に",
    "r": "はんたいに",
    "m": {
      "en": "on the contrary",
      "zh-TW": "反対に",
      "zh-CN": "反対に",
      "ko": "on the contrary",
      "vi": "on the contrary",
      "id": "on the contrary"
    },
    "pos": "adverb",
    "ex": "反対に考える"
  },
  {
    "id": "V2540",
    "w": "同様に",
    "r": "どうように",
    "m": {
      "en": "similarly",
      "zh-TW": "同様に",
      "zh-CN": "同様に",
      "ko": "similarly",
      "vi": "similarly",
      "id": "similarly"
    },
    "pos": "adverb",
    "ex": "同様に考える"
  },
  {
    "id": "V2541",
    "w": "起きる",
    "r": "おきる",
    "m": {
      "en": "wake up",
      "zh-TW": "起きる",
      "zh-CN": "起きる",
      "ko": "wake up",
      "vi": "wake up",
      "id": "wake up"
    },
    "pos": "verb-ichidan",
    "ex": "朝6時に起きる"
  },
  {
    "id": "V2542",
    "w": "寝る",
    "r": "ねる",
    "m": {
      "en": "sleep",
      "zh-TW": "寝る",
      "zh-CN": "寝る",
      "ko": "sleep",
      "vi": "sleep",
      "id": "sleep"
    },
    "pos": "verb-ichidan",
    "ex": "早く寝る"
  },
  {
    "id": "V2543",
    "w": "脱ぐ",
    "r": "ぬぐ",
    "m": {
      "en": "take off",
      "zh-TW": "脱ぐ",
      "zh-CN": "脱ぐ",
      "ko": "take off",
      "vi": "take off",
      "id": "take off"
    },
    "pos": "verb-godan",
    "ex": "脱ぐことにする"
  },
  {
    "id": "V2544",
    "w": "炒める",
    "r": "いためる",
    "m": {
      "en": "stir-fry",
      "zh-TW": "炒める",
      "zh-CN": "炒める",
      "ko": "stir-fry",
      "vi": "stir-fry",
      "id": "stir-fry"
    },
    "pos": "verb-ichidan",
    "ex": "炒めることにする"
  },
  {
    "id": "V2545",
    "w": "掃除する",
    "r": "そうじする",
    "m": {
      "en": "clean",
      "zh-TW": "掃除する",
      "zh-CN": "掃除する",
      "ko": "clean",
      "vi": "clean",
      "id": "clean"
    },
    "pos": "verb-suru",
    "ex": "掃除することが大切だ"
  },
  {
    "id": "V2546",
    "w": "洗濯する",
    "r": "せんたくする",
    "m": {
      "en": "do laundry",
      "zh-TW": "洗濯する",
      "zh-CN": "洗濯する",
      "ko": "do laundry",
      "vi": "do laundry",
      "id": "do laundry"
    },
    "pos": "verb-suru",
    "ex": "洗濯することが大切だ"
  },
  {
    "id": "V2547",
    "w": "準備する",
    "r": "じゅんびする",
    "m": {
      "en": "prepare",
      "zh-TW": "準備する",
      "zh-CN": "準備する",
      "ko": "prepare",
      "vi": "prepare",
      "id": "prepare"
    },
    "pos": "verb-suru",
    "ex": "準備することが大切だ"
  },
  {
    "id": "V2548",
    "w": "用意する",
    "r": "よういする",
    "m": {
      "en": "prepare",
      "zh-TW": "用意する",
      "zh-CN": "用意する",
      "ko": "prepare",
      "vi": "prepare",
      "id": "prepare"
    },
    "pos": "verb-suru",
    "ex": "用意することが大切だ"
  },
  {
    "id": "V2549",
    "w": "支度する",
    "r": "したくする",
    "m": {
      "en": "get ready",
      "zh-TW": "支度する",
      "zh-CN": "支度する",
      "ko": "get ready",
      "vi": "get ready",
      "id": "get ready"
    },
    "pos": "verb-suru",
    "ex": "支度することが大切だ"
  },
  {
    "id": "V2550",
    "w": "報告する",
    "r": "ほうこくする",
    "m": {
      "en": "report",
      "zh-TW": "報告する",
      "zh-CN": "報告する",
      "ko": "report",
      "vi": "report",
      "id": "report"
    },
    "pos": "verb-suru",
    "ex": "結果を報告する",
    "syn": [
      "知らせる",
      "連絡する",
      "伝える"
    ]
  },
  {
    "id": "V2551",
    "w": "相談する",
    "r": "そうだんする",
    "m": {
      "en": "consult",
      "zh-TW": "相談する",
      "zh-CN": "相談する",
      "ko": "consult",
      "vi": "consult",
      "id": "consult"
    },
    "pos": "verb-suru",
    "ex": "先生に相談する",
    "syn": [
      "話し合う",
      "協議する",
      "助言を求める"
    ]
  },
  {
    "id": "V2552",
    "w": "約束する",
    "r": "やくそくする",
    "m": {
      "en": "promise",
      "zh-TW": "約束する",
      "zh-CN": "約束する",
      "ko": "promise",
      "vi": "promise",
      "id": "promise"
    },
    "pos": "verb-suru",
    "ex": "約束することが大切だ"
  },
  {
    "id": "V2553",
    "w": "叱る",
    "r": "しかる",
    "m": {
      "en": "scold",
      "zh-TW": "叱る",
      "zh-CN": "叱る",
      "ko": "scold",
      "vi": "scold",
      "id": "scold"
    },
    "pos": "verb-godan",
    "ex": "叱ることにする"
  },
  {
    "id": "V2554",
    "w": "考える",
    "r": "かんがえる",
    "m": {
      "en": "think",
      "zh-TW": "考える",
      "zh-CN": "考える",
      "ko": "think",
      "vi": "think",
      "id": "think"
    },
    "pos": "verb-ichidan",
    "ex": "将来について考える"
  },
  {
    "id": "V2555",
    "w": "確認する",
    "r": "かくにんする",
    "m": {
      "en": "confirm",
      "zh-TW": "確認する",
      "zh-CN": "確認する",
      "ko": "confirm",
      "vi": "confirm",
      "id": "confirm"
    },
    "pos": "verb-suru",
    "ex": "確認することが大切だ",
    "syn": [
      "チェックする",
      "照合する",
      "確かめる"
    ]
  },
  {
    "id": "V2556",
    "w": "理解する",
    "r": "りかいする",
    "m": {
      "en": "understand",
      "zh-TW": "理解する",
      "zh-CN": "理解する",
      "ko": "understand",
      "vi": "understand",
      "id": "understand"
    },
    "pos": "verb-suru",
    "ex": "理解することが大切だ"
  },
  {
    "id": "V2557",
    "w": "気づく",
    "r": "きづく",
    "m": {
      "en": "notice",
      "zh-TW": "気づく",
      "zh-CN": "気づく",
      "ko": "notice",
      "vi": "notice",
      "id": "notice"
    },
    "pos": "verb-godan",
    "ex": "気づくことにする"
  },
  {
    "id": "V2558",
    "w": "信じる",
    "r": "しんじる",
    "m": {
      "en": "believe",
      "zh-TW": "信じる",
      "zh-CN": "信じる",
      "ko": "believe",
      "vi": "believe",
      "id": "believe"
    },
    "pos": "verb-godan",
    "ex": "彼の言葉を信じる",
    "syn": [
      "信用する",
      "信頼する",
      "確信する"
    ]
  },
  {
    "id": "V2559",
    "w": "悩む",
    "r": "なやむ",
    "m": {
      "en": "worry",
      "zh-TW": "悩む",
      "zh-CN": "悩む",
      "ko": "worry",
      "vi": "worry",
      "id": "worry"
    },
    "pos": "verb-godan",
    "ex": "将来について悩む",
    "syn": [
      "迷う",
      "苦しむ",
      "困る"
    ]
  },
  {
    "id": "V2560",
    "w": "恐れる",
    "r": "おそれる",
    "m": {
      "en": "fear",
      "zh-TW": "恐れる",
      "zh-CN": "恐れる",
      "ko": "fear",
      "vi": "fear",
      "id": "fear"
    },
    "pos": "verb-ichidan",
    "ex": "恐れることにする"
  },
  {
    "id": "V2561",
    "w": "安心する",
    "r": "あんしんする",
    "m": {
      "en": "be relieved",
      "zh-TW": "安心する",
      "zh-CN": "安心する",
      "ko": "be relieved",
      "vi": "be relieved",
      "id": "be relieved"
    },
    "pos": "verb-suru",
    "ex": "無事を聞いて安心する",
    "syn": [
      "ほっとする",
      "胸をなでおろす",
      "安堵する"
    ]
  },
  {
    "id": "V2562",
    "w": "心配する",
    "r": "しんぱいする",
    "m": {
      "en": "worry",
      "zh-TW": "心配する",
      "zh-CN": "心配する",
      "ko": "worry",
      "vi": "worry",
      "id": "worry"
    },
    "pos": "verb-suru",
    "ex": "健康を心配する",
    "syn": [
      "気にする",
      "案じる",
      "懸念する"
    ]
  },
  {
    "id": "V2563",
    "w": "緊張する",
    "r": "きんちょうする",
    "m": {
      "en": "be nervous",
      "zh-TW": "緊張する",
      "zh-CN": "緊張する",
      "ko": "be nervous",
      "vi": "be nervous",
      "id": "be nervous"
    },
    "pos": "verb-suru",
    "ex": "緊張することが大切だ"
  },
  {
    "id": "V2564",
    "w": "リラックスする",
    "r": "りらっくすする",
    "m": {
      "en": "relax",
      "zh-TW": "リラックスする",
      "zh-CN": "リラックスする",
      "ko": "relax",
      "vi": "relax",
      "id": "relax"
    },
    "pos": "verb-suru",
    "ex": "リラックスすることが大切だ"
  },
  {
    "id": "V2565",
    "w": "興奮する",
    "r": "こうふんする",
    "m": {
      "en": "get excited",
      "zh-TW": "興奮する",
      "zh-CN": "興奮する",
      "ko": "get excited",
      "vi": "get excited",
      "id": "get excited"
    },
    "pos": "verb-suru",
    "ex": "興奮することが大切だ"
  },
  {
    "id": "V2566",
    "w": "感動する",
    "r": "かんどうする",
    "m": {
      "en": "be moved",
      "zh-TW": "感動する",
      "zh-CN": "感動する",
      "ko": "be moved",
      "vi": "be moved",
      "id": "be moved"
    },
    "pos": "verb-suru",
    "ex": "感動することが大切だ"
  },
  {
    "id": "V2567",
    "w": "満足する",
    "r": "まんぞくする",
    "m": {
      "en": "be satisfied",
      "zh-TW": "満足する",
      "zh-CN": "満足する",
      "ko": "be satisfied",
      "vi": "be satisfied",
      "id": "be satisfied"
    },
    "pos": "verb-suru",
    "ex": "満足することが大切だ"
  },
  {
    "id": "V2568",
    "w": "失望する",
    "r": "しつぼうする",
    "m": {
      "en": "be disappointed",
      "zh-TW": "失望する",
      "zh-CN": "失望する",
      "ko": "be disappointed",
      "vi": "be disappointed",
      "id": "be disappointed"
    },
    "pos": "verb-suru",
    "ex": "結果に失望する",
    "syn": [
      "がっかりする",
      "落胆する",
      "幻滅する"
    ]
  },
  {
    "id": "V2569",
    "w": "後悔する",
    "r": "こうかいする",
    "m": {
      "en": "regret",
      "zh-TW": "後悔する",
      "zh-CN": "後悔する",
      "ko": "regret",
      "vi": "regret",
      "id": "regret"
    },
    "pos": "verb-suru",
    "ex": "後悔することが大切だ"
  },
  {
    "id": "V2570",
    "w": "温かい",
    "r": "あたたかい",
    "m": {
      "en": "warm",
      "zh-TW": "温かい",
      "zh-CN": "温かい",
      "ko": "warm",
      "vi": "warm",
      "id": "warm"
    },
    "pos": "i-adj",
    "ex": "とても温かいと思う"
  },
  {
    "id": "V2571",
    "w": "締め切り",
    "r": "しめきり",
    "m": {
      "en": "deadline",
      "zh-TW": "締め切り",
      "zh-CN": "締め切り",
      "ko": "deadline",
      "vi": "deadline",
      "id": "deadline"
    },
    "pos": "noun",
    "ex": "締め切りについて考える"
  },
  {
    "id": "V2572",
    "w": "最中",
    "r": "さいちゅう",
    "m": {
      "en": "in the middle",
      "zh-TW": "最中",
      "zh-CN": "最中",
      "ko": "in the middle",
      "vi": "in the middle",
      "id": "in the middle"
    },
    "pos": "verb-godan",
    "ex": "最中ことにする"
  },
  {
    "id": "V2573",
    "w": "田舎",
    "r": "いなか",
    "m": {
      "en": "countryside",
      "zh-TW": "田舎",
      "zh-CN": "田舎",
      "ko": "countryside",
      "vi": "countryside",
      "id": "countryside"
    },
    "pos": "noun",
    "ex": "田舎について考える"
  },
  {
    "id": "V2574",
    "w": "国内",
    "r": "こくない",
    "m": {
      "en": "domestic",
      "zh-TW": "国内",
      "zh-CN": "国内",
      "ko": "domestic",
      "vi": "domestic",
      "id": "domestic"
    },
    "pos": "i-adj",
    "ex": "とても国内と思う"
  },
  {
    "id": "V2575",
    "w": "入口",
    "r": "いりぐち",
    "m": {
      "en": "entrance",
      "zh-TW": "入口",
      "zh-CN": "入口",
      "ko": "entrance",
      "vi": "entrance",
      "id": "entrance"
    },
    "pos": "noun",
    "ex": "入口について考える"
  },
  {
    "id": "V2576",
    "w": "出口",
    "r": "でぐち",
    "m": {
      "en": "exit",
      "zh-TW": "出口",
      "zh-CN": "出口",
      "ko": "exit",
      "vi": "exit",
      "id": "exit"
    },
    "pos": "noun",
    "ex": "出口について考える"
  },
  {
    "id": "V2577",
    "w": "通路",
    "r": "つうろ",
    "m": {
      "en": "passage",
      "zh-TW": "通路",
      "zh-CN": "通路",
      "ko": "passage",
      "vi": "passage",
      "id": "passage"
    },
    "pos": "noun",
    "ex": "通路について考える"
  },
  {
    "id": "V2578",
    "w": "階段",
    "r": "かいだん",
    "m": {
      "en": "stairs",
      "zh-TW": "階段",
      "zh-CN": "階段",
      "ko": "stairs",
      "vi": "stairs",
      "id": "stairs"
    },
    "pos": "noun",
    "ex": "階段について考える"
  },
  {
    "id": "V2579",
    "w": "エレベーター",
    "r": "えれべーたー",
    "m": {
      "en": "elevator",
      "zh-TW": "エレベーター",
      "zh-CN": "エレベーター",
      "ko": "elevator",
      "vi": "elevator",
      "id": "elevator"
    },
    "pos": "noun",
    "ex": "エレベーターについて考える"
  },
  {
    "id": "V2580",
    "w": "エスカレーター",
    "r": "えすかれーたー",
    "m": {
      "en": "escalator",
      "zh-TW": "エスカレーター",
      "zh-CN": "エスカレーター",
      "ko": "escalator",
      "vi": "escalator",
      "id": "escalator"
    },
    "pos": "noun",
    "ex": "エスカレーターについて考える"
  },
  {
    "id": "V2581",
    "w": "女性",
    "r": "じょせい",
    "m": {
      "en": "female",
      "zh-TW": "女性",
      "zh-CN": "女性",
      "ko": "female",
      "vi": "female",
      "id": "female"
    },
    "pos": "i-adj",
    "ex": "とても女性と思う"
  },
  {
    "id": "V2582",
    "w": "知人",
    "r": "ちじん",
    "m": {
      "en": "acquaintance",
      "zh-TW": "知人",
      "zh-CN": "知人",
      "ko": "acquaintance",
      "vi": "acquaintance",
      "id": "acquaintance"
    },
    "pos": "noun",
    "ex": "知人について考える"
  },
  {
    "id": "V2583",
    "w": "他人",
    "r": "たにん",
    "m": {
      "en": "stranger",
      "zh-TW": "他人",
      "zh-CN": "他人",
      "ko": "stranger",
      "vi": "stranger",
      "id": "stranger"
    },
    "pos": "noun",
    "ex": "他人について考える"
  },
  {
    "id": "V2584",
    "w": "道具",
    "r": "どうぐ",
    "m": {
      "en": "tool",
      "zh-TW": "道具",
      "zh-CN": "道具",
      "ko": "tool",
      "vi": "tool",
      "id": "tool"
    },
    "pos": "verb-godan",
    "ex": "道具ことにする"
  },
  {
    "id": "V2585",
    "w": "機械",
    "r": "きかい",
    "m": {
      "en": "machine",
      "zh-TW": "機械",
      "zh-CN": "機械",
      "ko": "machine",
      "vi": "machine",
      "id": "machine"
    },
    "pos": "i-adj",
    "ex": "とても機械と思う"
  },
  {
    "id": "V2586",
    "w": "装置",
    "r": "そうち",
    "m": {
      "en": "device",
      "zh-TW": "装置",
      "zh-CN": "装置",
      "ko": "device",
      "vi": "device",
      "id": "device"
    },
    "pos": "noun",
    "ex": "装置について考える"
  },
  {
    "id": "V2587",
    "w": "家具",
    "r": "かぐ",
    "m": {
      "en": "furniture",
      "zh-TW": "家具",
      "zh-CN": "家具",
      "ko": "furniture",
      "vi": "furniture",
      "id": "furniture"
    },
    "pos": "verb-godan",
    "ex": "家具ことにする"
  },
  {
    "id": "V2588",
    "w": "食器",
    "r": "しょっき",
    "m": {
      "en": "tableware",
      "zh-TW": "食器",
      "zh-CN": "食器",
      "ko": "tableware",
      "vi": "tableware",
      "id": "tableware"
    },
    "pos": "noun",
    "ex": "食器について考える"
  },
  {
    "id": "V2589",
    "w": "荷物",
    "r": "にもつ",
    "m": {
      "en": "luggage",
      "zh-TW": "荷物",
      "zh-CN": "荷物",
      "ko": "luggage",
      "vi": "luggage",
      "id": "luggage"
    },
    "pos": "verb-godan",
    "ex": "荷物ことにする"
  },
  {
    "id": "V2590",
    "w": "貨物",
    "r": "かもつ",
    "m": {
      "en": "cargo",
      "zh-TW": "貨物",
      "zh-CN": "貨物",
      "ko": "cargo",
      "vi": "cargo",
      "id": "cargo"
    },
    "pos": "verb-godan",
    "ex": "貨物ことにする"
  },
  {
    "id": "V2591",
    "w": "郵便物",
    "r": "ゆうびんぶつ",
    "m": {
      "en": "mail",
      "zh-TW": "郵便物",
      "zh-CN": "郵便物",
      "ko": "mail",
      "vi": "mail",
      "id": "mail"
    },
    "pos": "verb-godan",
    "ex": "郵便物ことにする"
  },
  {
    "id": "V2592",
    "w": "起床",
    "r": "きしょう",
    "m": {
      "en": "getting up",
      "zh-TW": "起床",
      "zh-CN": "起床",
      "ko": "getting up",
      "vi": "getting up",
      "id": "getting up"
    },
    "pos": "verb-godan",
    "ex": "起床ことにする"
  },
  {
    "id": "V2593",
    "w": "就寝",
    "r": "しゅうしん",
    "m": {
      "en": "going to bed",
      "zh-TW": "就寝",
      "zh-CN": "就寝",
      "ko": "going to bed",
      "vi": "going to bed",
      "id": "going to bed"
    },
    "pos": "noun",
    "ex": "就寝について考える"
  },
  {
    "id": "V2594",
    "w": "着替える",
    "r": "きがえる",
    "m": {
      "en": "change clothes",
      "zh-TW": "着替える",
      "zh-CN": "着替える",
      "ko": "change clothes",
      "vi": "change clothes",
      "id": "change clothes"
    },
    "pos": "verb-ichidan",
    "ex": "着替えることにする"
  },
  {
    "id": "V2595",
    "w": "髪型",
    "r": "かみがた",
    "m": {
      "en": "hairstyle",
      "zh-TW": "髪型",
      "zh-CN": "髪型",
      "ko": "hairstyle",
      "vi": "hairstyle",
      "id": "hairstyle"
    },
    "pos": "noun",
    "ex": "髪型について考える"
  },
  {
    "id": "V2596",
    "w": "歯磨き",
    "r": "はみがき",
    "m": {
      "en": "brushing teeth",
      "zh-TW": "歯磨き",
      "zh-CN": "歯磨き",
      "ko": "brushing teeth",
      "vi": "brushing teeth",
      "id": "brushing teeth"
    },
    "pos": "noun",
    "ex": "歯磨きについて考える"
  },
  {
    "id": "V2597",
    "w": "入浴",
    "r": "にゅうよく",
    "m": {
      "en": "bathing",
      "zh-TW": "入浴",
      "zh-CN": "入浴",
      "ko": "bathing",
      "vi": "bathing",
      "id": "bathing"
    },
    "pos": "verb-godan",
    "ex": "入浴ことにする"
  },
  {
    "id": "V2598",
    "w": "シャワー",
    "r": "しゃわー",
    "m": {
      "en": "shower",
      "zh-TW": "シャワー",
      "zh-CN": "シャワー",
      "ko": "shower",
      "vi": "shower",
      "id": "shower"
    },
    "pos": "noun",
    "ex": "シャワーについて考える"
  },
  {
    "id": "V2599",
    "w": "洗顔",
    "r": "せんがん",
    "m": {
      "en": "face washing",
      "zh-TW": "洗顔",
      "zh-CN": "洗顔",
      "ko": "face washing",
      "vi": "face washing",
      "id": "face washing"
    },
    "pos": "noun",
    "ex": "洗顔について考える"
  },
  {
    "id": "V2600",
    "w": "洗髪",
    "r": "せんぱつ",
    "m": {
      "en": "hair washing",
      "zh-TW": "洗髪",
      "zh-CN": "洗髪",
      "ko": "hair washing",
      "vi": "hair washing",
      "id": "hair washing"
    },
    "pos": "verb-godan",
    "ex": "洗髪ことにする"
  },
  {
    "id": "V2601",
    "w": "掃除",
    "r": "そうじ",
    "m": {
      "en": "cleaning",
      "zh-TW": "掃除",
      "zh-CN": "掃除",
      "ko": "cleaning",
      "vi": "cleaning",
      "id": "cleaning"
    },
    "pos": "noun",
    "ex": "部屋を掃除する"
  },
  {
    "id": "V2602",
    "w": "朝食",
    "r": "ちょうしょく",
    "m": {
      "en": "breakfast",
      "zh-TW": "朝食",
      "zh-CN": "朝食",
      "ko": "breakfast",
      "vi": "breakfast",
      "id": "breakfast"
    },
    "pos": "verb-godan",
    "ex": "朝食ことにする"
  },
  {
    "id": "V2603",
    "w": "昼食",
    "r": "ちゅうしょく",
    "m": {
      "en": "lunch",
      "zh-TW": "昼食",
      "zh-CN": "昼食",
      "ko": "lunch",
      "vi": "lunch",
      "id": "lunch"
    },
    "pos": "verb-godan",
    "ex": "昼食ことにする"
  },
  {
    "id": "V2604",
    "w": "夕食",
    "r": "ゆうしょく",
    "m": {
      "en": "dinner",
      "zh-TW": "夕食",
      "zh-CN": "夕食",
      "ko": "dinner",
      "vi": "dinner",
      "id": "dinner"
    },
    "pos": "verb-godan",
    "ex": "夕食ことにする"
  },
  {
    "id": "V2605",
    "w": "間食",
    "r": "かんしょく",
    "m": {
      "en": "snack",
      "zh-TW": "間食",
      "zh-CN": "間食",
      "ko": "snack",
      "vi": "snack",
      "id": "snack"
    },
    "pos": "verb-godan",
    "ex": "間食ことにする"
  },
  {
    "id": "V2606",
    "w": "外食",
    "r": "がいしょく",
    "m": {
      "en": "eating out",
      "zh-TW": "外食",
      "zh-CN": "外食",
      "ko": "eating out",
      "vi": "eating out",
      "id": "eating out"
    },
    "pos": "verb-godan",
    "ex": "外食ことにする"
  },
  {
    "id": "V2607",
    "w": "自炊",
    "r": "じすい",
    "m": {
      "en": "cooking for oneself",
      "zh-TW": "自炊",
      "zh-CN": "自炊",
      "ko": "cooking for oneself",
      "vi": "cooking for oneself",
      "id": "cooking for oneself"
    },
    "pos": "i-adj",
    "ex": "とても自炊と思う"
  },
  {
    "id": "V2608",
    "w": "支払い",
    "r": "しはらい",
    "m": {
      "en": "payment",
      "zh-TW": "支払い",
      "zh-CN": "支払い",
      "ko": "payment",
      "vi": "payment",
      "id": "payment"
    },
    "pos": "i-adj",
    "ex": "とても支払いと思う"
  },
  {
    "id": "V2609",
    "w": "カード",
    "r": "かーど",
    "m": {
      "en": "card",
      "zh-TW": "カード",
      "zh-CN": "カード",
      "ko": "card",
      "vi": "card",
      "id": "card"
    },
    "pos": "noun",
    "ex": "カードについて考える"
  },
  {
    "id": "V2610",
    "w": "電子マネー",
    "r": "でんしまねー",
    "m": {
      "en": "e-money",
      "zh-TW": "電子マネー",
      "zh-CN": "電子マネー",
      "ko": "e-money",
      "vi": "e-money",
      "id": "e-money"
    },
    "pos": "noun",
    "ex": "電子マネーについて考える"
  },
  {
    "id": "V2611",
    "w": "レジ",
    "r": "れじ",
    "m": {
      "en": "register",
      "zh-TW": "レジ",
      "zh-CN": "レジ",
      "ko": "register",
      "vi": "register",
      "id": "register"
    },
    "pos": "noun",
    "ex": "レジについて考える"
  },
  {
    "id": "V2612",
    "w": "領収書",
    "r": "りょうしゅうしょ",
    "m": {
      "en": "receipt",
      "zh-TW": "領収書",
      "zh-CN": "領収書",
      "ko": "receipt",
      "vi": "receipt",
      "id": "receipt"
    },
    "pos": "noun",
    "ex": "領収書について考える"
  },
  {
    "id": "V2613",
    "w": "割引",
    "r": "わりびき",
    "m": {
      "en": "discount",
      "zh-TW": "割引",
      "zh-CN": "割引",
      "ko": "discount",
      "vi": "discount",
      "id": "discount"
    },
    "pos": "noun",
    "ex": "割引について考える"
  },
  {
    "id": "V2614",
    "w": "特売",
    "r": "とくばい",
    "m": {
      "en": "sale",
      "zh-TW": "特売",
      "zh-CN": "特売",
      "ko": "sale",
      "vi": "sale",
      "id": "sale"
    },
    "pos": "i-adj",
    "ex": "とても特売と思う"
  },
  {
    "id": "V2615",
    "w": "セール",
    "r": "せーる",
    "m": {
      "en": "sale",
      "zh-TW": "セール",
      "zh-CN": "セール",
      "ko": "sale",
      "vi": "sale",
      "id": "sale"
    },
    "pos": "verb-godan",
    "ex": "セールことにする"
  },
  {
    "id": "V2616",
    "w": "品切れ",
    "r": "しなぎれ",
    "m": {
      "en": "out of stock",
      "zh-TW": "品切れ",
      "zh-CN": "品切れ",
      "ko": "out of stock",
      "vi": "out of stock",
      "id": "out of stock"
    },
    "pos": "noun",
    "ex": "品切れについて考える"
  },
  {
    "id": "V2617",
    "w": "在庫",
    "r": "ざいこ",
    "m": {
      "en": "stock",
      "zh-TW": "在庫",
      "zh-CN": "在庫",
      "ko": "stock",
      "vi": "stock",
      "id": "stock"
    },
    "pos": "noun",
    "ex": "在庫について考える"
  },
  {
    "id": "V2618",
    "w": "取り寄せ",
    "r": "とりよせ",
    "m": {
      "en": "order",
      "zh-TW": "取り寄せ",
      "zh-CN": "取り寄せ",
      "ko": "order",
      "vi": "order",
      "id": "order"
    },
    "pos": "noun",
    "ex": "取り寄せについて考える"
  },
  {
    "id": "V2619",
    "w": "通学",
    "r": "つうがく",
    "m": {
      "en": "going to school",
      "zh-TW": "通学",
      "zh-CN": "通学",
      "ko": "going to school",
      "vi": "going to school",
      "id": "going to school"
    },
    "pos": "verb-godan",
    "ex": "通学ことにする"
  },
  {
    "id": "V2620",
    "w": "地下鉄",
    "r": "ちかてつ",
    "m": {
      "en": "subway",
      "zh-TW": "地下鉄",
      "zh-CN": "地下鉄",
      "ko": "subway",
      "vi": "subway",
      "id": "subway"
    },
    "pos": "verb-godan",
    "ex": "地下鉄ことにする"
  },
  {
    "id": "V2621",
    "w": "バス",
    "r": "ばす",
    "m": {
      "en": "bus",
      "zh-TW": "バス",
      "zh-CN": "バス",
      "ko": "bus",
      "vi": "bus",
      "id": "bus"
    },
    "pos": "verb-godan",
    "ex": "バスことにする"
  },
  {
    "id": "V2622",
    "w": "タクシー",
    "r": "たくしー",
    "m": {
      "en": "taxi",
      "zh-TW": "タクシー",
      "zh-CN": "タクシー",
      "ko": "taxi",
      "vi": "taxi",
      "id": "taxi"
    },
    "pos": "noun",
    "ex": "タクシーについて考える"
  },
  {
    "id": "V2623",
    "w": "飛行機",
    "r": "ひこうき",
    "m": {
      "en": "airplane",
      "zh-TW": "飛行機",
      "zh-CN": "飛行機",
      "ko": "airplane",
      "vi": "airplane",
      "id": "airplane"
    },
    "pos": "noun",
    "ex": "飛行機について考える"
  },
  {
    "id": "V2624",
    "w": "自転車",
    "r": "じてんしゃ",
    "m": {
      "en": "bicycle",
      "zh-TW": "自転車",
      "zh-CN": "自転車",
      "ko": "bicycle",
      "vi": "bicycle",
      "id": "bicycle"
    },
    "pos": "noun",
    "ex": "自転車について考える"
  },
  {
    "id": "V2625",
    "w": "自動車",
    "r": "じどうしゃ",
    "m": {
      "en": "car",
      "zh-TW": "自動車",
      "zh-CN": "自動車",
      "ko": "car",
      "vi": "car",
      "id": "car"
    },
    "pos": "noun",
    "ex": "自動車について考える"
  },
  {
    "id": "V2626",
    "w": "駐輪",
    "r": "ちゅうりん",
    "m": {
      "en": "bicycle parking",
      "zh-TW": "駐輪",
      "zh-CN": "駐輪",
      "ko": "bicycle parking",
      "vi": "bicycle parking",
      "id": "bicycle parking"
    },
    "pos": "noun",
    "ex": "駐輪について考える"
  },
  {
    "id": "V2627",
    "w": "渋滞",
    "r": "じゅうたい",
    "m": {
      "en": "traffic jam",
      "zh-TW": "渋滞",
      "zh-CN": "渋滞",
      "ko": "traffic jam",
      "vi": "traffic jam",
      "id": "traffic jam"
    },
    "pos": "i-adj",
    "ex": "とても渋滞と思う"
  },
  {
    "id": "V2628",
    "w": "気象",
    "r": "きしょう",
    "m": {
      "en": "weather",
      "zh-TW": "気象",
      "zh-CN": "気象",
      "ko": "weather",
      "vi": "weather",
      "id": "weather"
    },
    "pos": "verb-godan",
    "ex": "気象ことにする"
  },
  {
    "id": "V2629",
    "w": "豪雨",
    "r": "ごうう",
    "m": {
      "en": "heavy rain",
      "zh-TW": "豪雨",
      "zh-CN": "豪雨",
      "ko": "heavy rain",
      "vi": "heavy rain",
      "id": "heavy rain"
    },
    "pos": "verb-godan",
    "ex": "豪雨ことにする"
  },
  {
    "id": "V2630",
    "w": "大雪",
    "r": "おおゆき",
    "m": {
      "en": "heavy snow",
      "zh-TW": "大雪",
      "zh-CN": "大雪",
      "ko": "heavy snow",
      "vi": "heavy snow",
      "id": "heavy snow"
    },
    "pos": "noun",
    "ex": "大雪について考える"
  },
  {
    "id": "V2631",
    "w": "気圧",
    "r": "きあつ",
    "m": {
      "en": "atmospheric pressure",
      "zh-TW": "気圧",
      "zh-CN": "気圧",
      "ko": "atmospheric pressure",
      "vi": "atmospheric pressure",
      "id": "atmospheric pressure"
    },
    "pos": "verb-godan",
    "ex": "気圧ことにする"
  },
  {
    "id": "V2632",
    "w": "降水量",
    "r": "こうすいりょう",
    "m": {
      "en": "precipitation",
      "zh-TW": "降水量",
      "zh-CN": "降水量",
      "ko": "precipitation",
      "vi": "precipitation",
      "id": "precipitation"
    },
    "pos": "verb-godan",
    "ex": "降水量ことにする"
  },
  {
    "id": "V2633",
    "w": "天気予報",
    "r": "てんきよほう",
    "m": {
      "en": "weather forecast",
      "zh-TW": "天気予報",
      "zh-CN": "天気予報",
      "ko": "weather forecast",
      "vi": "weather forecast",
      "id": "weather forecast"
    },
    "pos": "verb-godan",
    "ex": "天気予報ことにする"
  },
  {
    "id": "V2634",
    "w": "週間予報",
    "r": "しゅうかんよほう",
    "m": {
      "en": "weekly forecast",
      "zh-TW": "週間予報",
      "zh-CN": "週間予報",
      "ko": "weekly forecast",
      "vi": "weekly forecast",
      "id": "weekly forecast"
    },
    "pos": "verb-godan",
    "ex": "週間予報ことにする"
  },
  {
    "id": "V2635",
    "w": "腹痛",
    "r": "ふくつう",
    "m": {
      "en": "stomachache",
      "zh-TW": "腹痛",
      "zh-CN": "腹痛",
      "ko": "stomachache",
      "vi": "stomachache",
      "id": "stomachache"
    },
    "pos": "verb-godan",
    "ex": "腹痛ことにする"
  },
  {
    "id": "V2636",
    "w": "吐き気",
    "r": "はきけ",
    "m": {
      "en": "nausea",
      "zh-TW": "吐き気",
      "zh-CN": "吐き気",
      "ko": "nausea",
      "vi": "nausea",
      "id": "nausea"
    },
    "pos": "noun",
    "ex": "吐き気について考える"
  },
  {
    "id": "V2637",
    "w": "めまい",
    "r": "めまい",
    "m": {
      "en": "dizziness",
      "zh-TW": "めまい",
      "zh-CN": "めまい",
      "ko": "dizziness",
      "vi": "dizziness",
      "id": "dizziness"
    },
    "pos": "i-adj",
    "ex": "とてもめまいと思う"
  },
  {
    "id": "V2638",
    "w": "倦怠感",
    "r": "けんたいかん",
    "m": {
      "en": "fatigue",
      "zh-TW": "倦怠感",
      "zh-CN": "倦怠感",
      "ko": "fatigue",
      "vi": "fatigue",
      "id": "fatigue"
    },
    "pos": "noun",
    "ex": "倦怠感について考える"
  },
  {
    "id": "V2639",
    "w": "診察",
    "r": "しんさつ",
    "m": {
      "en": "examination",
      "zh-TW": "診察",
      "zh-CN": "診察",
      "ko": "examination",
      "vi": "examination",
      "id": "examination"
    },
    "pos": "verb-godan",
    "ex": "診察ことにする"
  },
  {
    "id": "V2640",
    "w": "処方箋",
    "r": "しょほうせん",
    "m": {
      "en": "prescription",
      "zh-TW": "処方箋",
      "zh-CN": "処方箋",
      "ko": "prescription",
      "vi": "prescription",
      "id": "prescription"
    },
    "pos": "noun",
    "ex": "処方箋について考える"
  },
  {
    "id": "V2641",
    "w": "服用",
    "r": "ふくよう",
    "m": {
      "en": "taking medicine",
      "zh-TW": "服用",
      "zh-CN": "服用",
      "ko": "taking medicine",
      "vi": "taking medicine",
      "id": "taking medicine"
    },
    "pos": "verb-godan",
    "ex": "服用ことにする"
  },
  {
    "id": "V2642",
    "w": "業務",
    "r": "ぎょうむ",
    "m": {
      "en": "business",
      "zh-TW": "業務",
      "zh-CN": "業務",
      "ko": "business",
      "vi": "business",
      "id": "business"
    },
    "pos": "verb-godan",
    "ex": "業務ことにする"
  },
  {
    "id": "V2643",
    "w": "職務",
    "r": "しょくむ",
    "m": {
      "en": "duty",
      "zh-TW": "職務",
      "zh-CN": "職務",
      "ko": "duty",
      "vi": "duty",
      "id": "duty"
    },
    "pos": "verb-godan",
    "ex": "職務ことにする"
  },
  {
    "id": "V2644",
    "w": "退勤",
    "r": "たいきん",
    "m": {
      "en": "leaving work",
      "zh-TW": "退勤",
      "zh-CN": "退勤",
      "ko": "leaving work",
      "vi": "leaving work",
      "id": "leaving work"
    },
    "pos": "noun",
    "ex": "退勤について考える"
  },
  {
    "id": "V2645",
    "w": "昼休み",
    "r": "ひるやすみ",
    "m": {
      "en": "lunch break",
      "zh-TW": "昼休み",
      "zh-CN": "昼休み",
      "ko": "lunch break",
      "vi": "lunch break",
      "id": "lunch break"
    },
    "pos": "noun",
    "ex": "昼休みについて考える"
  },
  {
    "id": "V2646",
    "w": "有給",
    "r": "ゆうきゅう",
    "m": {
      "en": "paid leave",
      "zh-TW": "有給",
      "zh-CN": "有給",
      "ko": "paid leave",
      "vi": "paid leave",
      "id": "paid leave"
    },
    "pos": "verb-godan",
    "ex": "有給ことにする"
  },
  {
    "id": "V2647",
    "w": "欠勤",
    "r": "けっきん",
    "m": {
      "en": "absence",
      "zh-TW": "欠勤",
      "zh-CN": "欠勤",
      "ko": "absence",
      "vi": "absence",
      "id": "absence"
    },
    "pos": "noun",
    "ex": "欠勤について考える"
  },
  {
    "id": "V2648",
    "w": "早退",
    "r": "そうたい",
    "m": {
      "en": "leaving early",
      "zh-TW": "早退",
      "zh-CN": "早退",
      "ko": "leaving early",
      "vi": "leaving early",
      "id": "leaving early"
    },
    "pos": "i-adj",
    "ex": "とても早退と思う"
  },
  {
    "id": "V2649",
    "w": "転勤",
    "r": "てんきん",
    "m": {
      "en": "transfer",
      "zh-TW": "転勤",
      "zh-CN": "転勤",
      "ko": "transfer",
      "vi": "transfer",
      "id": "transfer"
    },
    "pos": "noun",
    "ex": "転勤について考える"
  },
  {
    "id": "V2650",
    "w": "異動",
    "r": "いどう",
    "m": {
      "en": "transfer",
      "zh-TW": "異動",
      "zh-CN": "異動",
      "ko": "transfer",
      "vi": "transfer",
      "id": "transfer"
    },
    "pos": "verb-godan",
    "ex": "異動ことにする"
  },
  {
    "id": "V2651",
    "w": "昇進",
    "r": "しょうしん",
    "m": {
      "en": "promotion",
      "zh-TW": "昇進",
      "zh-CN": "昇進",
      "ko": "promotion",
      "vi": "promotion",
      "id": "promotion"
    },
    "pos": "noun",
    "ex": "昇進について考える"
  },
  {
    "id": "V2652",
    "w": "小学校",
    "r": "しょうがっこう",
    "m": {
      "en": "elementary school",
      "zh-TW": "小学校",
      "zh-CN": "小学校",
      "ko": "elementary school",
      "vi": "elementary school",
      "id": "elementary school"
    },
    "pos": "verb-godan",
    "ex": "小学校ことにする"
  },
  {
    "id": "V2653",
    "w": "中学校",
    "r": "ちゅうがっこう",
    "m": {
      "en": "junior high",
      "zh-TW": "中学校",
      "zh-CN": "中学校",
      "ko": "junior high",
      "vi": "junior high",
      "id": "junior high"
    },
    "pos": "verb-godan",
    "ex": "中学校ことにする"
  },
  {
    "id": "V2654",
    "w": "高校",
    "r": "こうこう",
    "m": {
      "en": "high school",
      "zh-TW": "高校",
      "zh-CN": "高校",
      "ko": "high school",
      "vi": "high school",
      "id": "high school"
    },
    "pos": "verb-godan",
    "ex": "高校ことにする"
  },
  {
    "id": "V2655",
    "w": "専門学校",
    "r": "せんもんがっこう",
    "m": {
      "en": "vocational school",
      "zh-TW": "専門学校",
      "zh-CN": "専門学校",
      "ko": "vocational school",
      "vi": "vocational school",
      "id": "vocational school"
    },
    "pos": "verb-godan",
    "ex": "専門学校ことにする"
  },
  {
    "id": "V2656",
    "w": "進学",
    "r": "しんがく",
    "m": {
      "en": "advancing",
      "zh-TW": "進学",
      "zh-CN": "進学",
      "ko": "advancing",
      "vi": "advancing",
      "id": "advancing"
    },
    "pos": "verb-godan",
    "ex": "進学ことにする"
  },
  {
    "id": "V2657",
    "w": "休学",
    "r": "きゅうがく",
    "m": {
      "en": "leave of absence",
      "zh-TW": "休学",
      "zh-CN": "休学",
      "ko": "leave of absence",
      "vi": "leave of absence",
      "id": "leave of absence"
    },
    "pos": "verb-godan",
    "ex": "休学ことにする"
  },
  {
    "id": "V2658",
    "w": "退学",
    "r": "たいがく",
    "m": {
      "en": "dropping out",
      "zh-TW": "退学",
      "zh-CN": "退学",
      "ko": "dropping out",
      "vi": "dropping out",
      "id": "dropping out"
    },
    "pos": "verb-godan",
    "ex": "退学ことにする"
  },
  {
    "id": "V2659",
    "w": "授業",
    "r": "じゅぎょう",
    "m": {
      "en": "class",
      "zh-TW": "授業",
      "zh-CN": "授業",
      "ko": "class",
      "vi": "class",
      "id": "class"
    },
    "pos": "verb-godan",
    "ex": "授業に出席する"
  },
  {
    "id": "V2660",
    "w": "講義",
    "r": "こうぎ",
    "m": {
      "en": "lecture",
      "zh-TW": "講義",
      "zh-CN": "講義",
      "ko": "lecture",
      "vi": "lecture",
      "id": "lecture"
    },
    "pos": "noun",
    "ex": "講義について考える"
  },
  {
    "id": "V2661",
    "w": "実習",
    "r": "じっしゅう",
    "m": {
      "en": "practical training",
      "zh-TW": "実習",
      "zh-CN": "実習",
      "ko": "practical training",
      "vi": "practical training",
      "id": "practical training"
    },
    "pos": "verb-godan",
    "ex": "実習ことにする"
  },
  {
    "id": "V2662",
    "w": "試験",
    "r": "しけん",
    "m": {
      "en": "exam",
      "zh-TW": "試験",
      "zh-CN": "試験",
      "ko": "exam",
      "vi": "exam",
      "id": "exam"
    },
    "pos": "noun",
    "ex": "試験について考える",
    "syn": [
      "テストする",
      "検査する",
      "試す"
    ]
  },
  {
    "id": "V2663",
    "w": "レポート",
    "r": "れぽーと",
    "m": {
      "en": "report",
      "zh-TW": "レポート",
      "zh-CN": "レポート",
      "ko": "report",
      "vi": "report",
      "id": "report"
    },
    "pos": "adverb",
    "ex": "レポート考える"
  },
  {
    "id": "V2664",
    "w": "交流",
    "r": "こうりゅう",
    "m": {
      "en": "exchange",
      "zh-TW": "交流",
      "zh-CN": "交流",
      "ko": "exchange",
      "vi": "exchange",
      "id": "exchange"
    },
    "pos": "verb-godan",
    "ex": "交流ことにする"
  },
  {
    "id": "V2665",
    "w": "交際",
    "r": "こうさい",
    "m": {
      "en": "association",
      "zh-TW": "交際",
      "zh-CN": "交際",
      "ko": "association",
      "vi": "association",
      "id": "association"
    },
    "pos": "i-adj",
    "ex": "とても交際と思う"
  },
  {
    "id": "V2666",
    "w": "別れ",
    "r": "わかれ",
    "m": {
      "en": "parting",
      "zh-TW": "別れ",
      "zh-CN": "別れ",
      "ko": "parting",
      "vi": "parting",
      "id": "parting"
    },
    "pos": "noun",
    "ex": "別れについて考える"
  },
  {
    "id": "V2667",
    "w": "友情",
    "r": "ゆうじょう",
    "m": {
      "en": "friendship",
      "zh-TW": "友情",
      "zh-CN": "友情",
      "ko": "friendship",
      "vi": "friendship",
      "id": "friendship"
    },
    "pos": "verb-godan",
    "ex": "友情ことにする"
  },
  {
    "id": "V2668",
    "w": "謝罪",
    "r": "しゃざい",
    "m": {
      "en": "apology",
      "zh-TW": "謝罪",
      "zh-CN": "謝罪",
      "ko": "apology",
      "vi": "apology",
      "id": "apology"
    },
    "pos": "i-adj",
    "ex": "とても謝罪と思う"
  },
  {
    "id": "V2669",
    "w": "誤解",
    "r": "ごかい",
    "m": {
      "en": "misunderstanding",
      "zh-TW": "誤解",
      "zh-CN": "誤解",
      "ko": "misunderstanding",
      "vi": "misunderstanding",
      "id": "misunderstanding"
    },
    "pos": "i-adj",
    "ex": "とても誤解と思う"
  },
  {
    "id": "V2670",
    "w": "和解",
    "r": "わかい",
    "m": {
      "en": "reconciliation",
      "zh-TW": "和解",
      "zh-CN": "和解",
      "ko": "reconciliation",
      "vi": "reconciliation",
      "id": "reconciliation"
    },
    "pos": "i-adj",
    "ex": "とても和解と思う"
  },
  {
    "id": "V2671",
    "w": "競争",
    "r": "きょうそう",
    "m": {
      "en": "competition",
      "zh-TW": "競争",
      "zh-CN": "競争",
      "ko": "competition",
      "vi": "competition",
      "id": "competition"
    },
    "pos": "verb-godan",
    "ex": "競争ことにする"
  },
  {
    "id": "V2672",
    "w": "連携",
    "r": "れんけい",
    "m": {
      "en": "collaboration",
      "zh-TW": "連携",
      "zh-CN": "連携",
      "ko": "collaboration",
      "vi": "collaboration",
      "id": "collaboration"
    },
    "pos": "i-adj",
    "ex": "とても連携と思う"
  },
  {
    "id": "V2673",
    "w": "レジャー",
    "r": "れじゃー",
    "m": {
      "en": "leisure",
      "zh-TW": "レジャー",
      "zh-CN": "レジャー",
      "ko": "leisure",
      "vi": "leisure",
      "id": "leisure"
    },
    "pos": "noun",
    "ex": "レジャーについて考える"
  },
  {
    "id": "V2674",
    "w": "温泉",
    "r": "おんせん",
    "m": {
      "en": "hot spring",
      "zh-TW": "温泉",
      "zh-CN": "温泉",
      "ko": "hot spring",
      "vi": "hot spring",
      "id": "hot spring"
    },
    "pos": "noun",
    "ex": "温泉について考える"
  },
  {
    "id": "V2675",
    "w": "ゲーム",
    "r": "げーむ",
    "m": {
      "en": "game",
      "zh-TW": "ゲーム",
      "zh-CN": "ゲーム",
      "ko": "game",
      "vi": "game",
      "id": "game"
    },
    "pos": "verb-godan",
    "ex": "ゲームことにする"
  },
  {
    "id": "V2676",
    "w": "カラオケ",
    "r": "からおけ",
    "m": {
      "en": "karaoke",
      "zh-TW": "カラオケ",
      "zh-CN": "カラオケ",
      "ko": "karaoke",
      "vi": "karaoke",
      "id": "karaoke"
    },
    "pos": "noun",
    "ex": "カラオケについて考える"
  },
  {
    "id": "V2677",
    "w": "ショッピング",
    "r": "しょっぴんぐ",
    "m": {
      "en": "shopping",
      "zh-TW": "ショッピング",
      "zh-CN": "ショッピング",
      "ko": "shopping",
      "vi": "shopping",
      "id": "shopping"
    },
    "pos": "verb-godan",
    "ex": "ショッピングことにする"
  },
  {
    "id": "V2678",
    "w": "グルメ",
    "r": "ぐるめ",
    "m": {
      "en": "gourmet",
      "zh-TW": "グルメ",
      "zh-CN": "グルメ",
      "ko": "gourmet",
      "vi": "gourmet",
      "id": "gourmet"
    },
    "pos": "noun",
    "ex": "グルメについて考える"
  },
  {
    "id": "V2679",
    "w": "食べ物",
    "r": "たべもの",
    "m": {
      "en": "food",
      "zh-TW": "食べ物",
      "zh-CN": "食べ物",
      "ko": "food",
      "vi": "food",
      "id": "food"
    },
    "pos": "noun",
    "ex": "食べ物について考える"
  },
  {
    "id": "V2680",
    "w": "飲み物",
    "r": "のみもの",
    "m": {
      "en": "drink",
      "zh-TW": "飲み物",
      "zh-CN": "飲み物",
      "ko": "drink",
      "vi": "drink",
      "id": "drink"
    },
    "pos": "noun",
    "ex": "飲み物について考える"
  },
  {
    "id": "V2681",
    "w": "和食",
    "r": "わしょく",
    "m": {
      "en": "Japanese food",
      "zh-TW": "和食",
      "zh-CN": "和食",
      "ko": "Japanese food",
      "vi": "Japanese food",
      "id": "Japanese food"
    },
    "pos": "verb-godan",
    "ex": "和食ことにする"
  },
  {
    "id": "V2682",
    "w": "洋食",
    "r": "ようしょく",
    "m": {
      "en": "Western food",
      "zh-TW": "洋食",
      "zh-CN": "洋食",
      "ko": "Western food",
      "vi": "Western food",
      "id": "Western food"
    },
    "pos": "verb-godan",
    "ex": "洋食ことにする"
  },
  {
    "id": "V2683",
    "w": "中華",
    "r": "ちゅうか",
    "m": {
      "en": "Chinese food",
      "zh-TW": "中華",
      "zh-CN": "中華",
      "ko": "Chinese food",
      "vi": "Chinese food",
      "id": "Chinese food"
    },
    "pos": "noun",
    "ex": "中華について考える"
  },
  {
    "id": "V2684",
    "w": "デザート",
    "r": "でざーと",
    "m": {
      "en": "dessert",
      "zh-TW": "デザート",
      "zh-CN": "デザート",
      "ko": "dessert",
      "vi": "dessert",
      "id": "dessert"
    },
    "pos": "adverb",
    "ex": "デザート考える"
  },
  {
    "id": "V2685",
    "w": "スイーツ",
    "r": "すいーつ",
    "m": {
      "en": "sweets",
      "zh-TW": "スイーツ",
      "zh-CN": "スイーツ",
      "ko": "sweets",
      "vi": "sweets",
      "id": "sweets"
    },
    "pos": "verb-godan",
    "ex": "スイーツことにする"
  },
  {
    "id": "V2686",
    "w": "お菓子",
    "r": "おかし",
    "m": {
      "en": "snacks",
      "zh-TW": "お菓子",
      "zh-CN": "お菓子",
      "ko": "snacks",
      "vi": "snacks",
      "id": "snacks"
    },
    "pos": "noun",
    "ex": "お菓子について考える"
  },
  {
    "id": "V2687",
    "w": "調味料",
    "r": "ちょうみりょう",
    "m": {
      "en": "seasoning",
      "zh-TW": "調味料",
      "zh-CN": "調味料",
      "ko": "seasoning",
      "vi": "seasoning",
      "id": "seasoning"
    },
    "pos": "verb-godan",
    "ex": "調味料ことにする"
  },
  {
    "id": "V2688",
    "w": "香辛料",
    "r": "こうしんりょう",
    "m": {
      "en": "spice",
      "zh-TW": "香辛料",
      "zh-CN": "香辛料",
      "ko": "spice",
      "vi": "spice",
      "id": "spice"
    },
    "pos": "verb-godan",
    "ex": "香辛料ことにする"
  },
  {
    "id": "V2689",
    "w": "肉類",
    "r": "にくるい",
    "m": {
      "en": "meat",
      "zh-TW": "肉類",
      "zh-CN": "肉類",
      "ko": "meat",
      "vi": "meat",
      "id": "meat"
    },
    "pos": "i-adj",
    "ex": "とても肉類と思う"
  },
  {
    "id": "V2690",
    "w": "魚介類",
    "r": "ぎょかいるい",
    "m": {
      "en": "seafood",
      "zh-TW": "魚介類",
      "zh-CN": "魚介類",
      "ko": "seafood",
      "vi": "seafood",
      "id": "seafood"
    },
    "pos": "i-adj",
    "ex": "とても魚介類と思う"
  },
  {
    "id": "V2691",
    "w": "乳製品",
    "r": "にゅうせいひん",
    "m": {
      "en": "dairy",
      "zh-TW": "乳製品",
      "zh-CN": "乳製品",
      "ko": "dairy",
      "vi": "dairy",
      "id": "dairy"
    },
    "pos": "noun",
    "ex": "乳製品について考える"
  },
  {
    "id": "V2692",
    "w": "穀物",
    "r": "こくもつ",
    "m": {
      "en": "grain",
      "zh-TW": "穀物",
      "zh-CN": "穀物",
      "ko": "grain",
      "vi": "grain",
      "id": "grain"
    },
    "pos": "verb-godan",
    "ex": "穀物ことにする"
  },
  {
    "id": "V2693",
    "w": "家電",
    "r": "かでん",
    "m": {
      "en": "home appliance",
      "zh-TW": "家電",
      "zh-CN": "家電",
      "ko": "home appliance",
      "vi": "home appliance",
      "id": "home appliance"
    },
    "pos": "noun",
    "ex": "家電について考える"
  },
  {
    "id": "V2694",
    "w": "電化製品",
    "r": "でんかせいひん",
    "m": {
      "en": "electrical appliance",
      "zh-TW": "電化製品",
      "zh-CN": "電化製品",
      "ko": "electrical appliance",
      "vi": "electrical appliance",
      "id": "electrical appliance"
    },
    "pos": "noun",
    "ex": "電化製品について考える"
  },
  {
    "id": "V2695",
    "w": "スマートフォン",
    "r": "すまーとふぉん",
    "m": {
      "en": "smartphone",
      "zh-TW": "スマートフォン",
      "zh-CN": "スマートフォン",
      "ko": "smartphone",
      "vi": "smartphone",
      "id": "smartphone"
    },
    "pos": "noun",
    "ex": "スマートフォンについて考える"
  },
  {
    "id": "V2696",
    "w": "タブレット",
    "r": "たぶれっと",
    "m": {
      "en": "tablet",
      "zh-TW": "タブレット",
      "zh-CN": "タブレット",
      "ko": "tablet",
      "vi": "tablet",
      "id": "tablet"
    },
    "pos": "noun",
    "ex": "タブレットについて考える"
  },
  {
    "id": "V2697",
    "w": "扇風機",
    "r": "せんぷうき",
    "m": {
      "en": "fan",
      "zh-TW": "扇風機",
      "zh-CN": "扇風機",
      "ko": "fan",
      "vi": "fan",
      "id": "fan"
    },
    "pos": "noun",
    "ex": "扇風機について考える"
  },
  {
    "id": "V2698",
    "w": "アイロン",
    "r": "あいろん",
    "m": {
      "en": "iron",
      "zh-TW": "アイロン",
      "zh-CN": "アイロン",
      "ko": "iron",
      "vi": "iron",
      "id": "iron"
    },
    "pos": "noun",
    "ex": "アイロンについて考える"
  },
  {
    "id": "V2699",
    "w": "プリンター",
    "r": "ぷりんたー",
    "m": {
      "en": "printer",
      "zh-TW": "プリンター",
      "zh-CN": "プリンター",
      "ko": "printer",
      "vi": "printer",
      "id": "printer"
    },
    "pos": "noun",
    "ex": "プリンターについて考える"
  },
  {
    "id": "V2700",
    "w": "スピーカー",
    "r": "すぴーかー",
    "m": {
      "en": "speaker",
      "zh-TW": "スピーカー",
      "zh-CN": "スピーカー",
      "ko": "speaker",
      "vi": "speaker",
      "id": "speaker"
    },
    "pos": "noun",
    "ex": "スピーカーについて考える"
  },
  {
    "id": "V2701",
    "w": "マンション",
    "r": "まんしょん",
    "m": {
      "en": "apartment",
      "zh-TW": "マンション",
      "zh-CN": "マンション",
      "ko": "apartment",
      "vi": "apartment",
      "id": "apartment"
    },
    "pos": "noun",
    "ex": "マンションについて考える"
  },
  {
    "id": "V2702",
    "w": "アパート",
    "r": "あぱーと",
    "m": {
      "en": "apartment",
      "zh-TW": "アパート",
      "zh-CN": "アパート",
      "ko": "apartment",
      "vi": "apartment",
      "id": "apartment"
    },
    "pos": "adverb",
    "ex": "アパート考える"
  },
  {
    "id": "V2703",
    "w": "一戸建て",
    "r": "いっこだて",
    "m": {
      "en": "detached house",
      "zh-TW": "一戸建て",
      "zh-CN": "一戸建て",
      "ko": "detached house",
      "vi": "detached house",
      "id": "detached house"
    },
    "pos": "noun",
    "ex": "一戸建てについて考える"
  },
  {
    "id": "V2704",
    "w": "賃貸",
    "r": "ちんたい",
    "m": {
      "en": "rental",
      "zh-TW": "賃貸",
      "zh-CN": "賃貸",
      "ko": "rental",
      "vi": "rental",
      "id": "rental"
    },
    "pos": "i-adj",
    "ex": "とても賃貸と思う"
  },
  {
    "id": "V2705",
    "w": "分譲",
    "r": "ぶんじょう",
    "m": {
      "en": "for sale",
      "zh-TW": "分譲",
      "zh-CN": "分譲",
      "ko": "for sale",
      "vi": "for sale",
      "id": "for sale"
    },
    "pos": "verb-godan",
    "ex": "分譲ことにする"
  },
  {
    "id": "V2706",
    "w": "間取り",
    "r": "まどり",
    "m": {
      "en": "floor plan",
      "zh-TW": "間取り",
      "zh-CN": "間取り",
      "ko": "floor plan",
      "vi": "floor plan",
      "id": "floor plan"
    },
    "pos": "noun",
    "ex": "間取りについて考える"
  },
  {
    "id": "V2707",
    "w": "リビング",
    "r": "りびんぐ",
    "m": {
      "en": "living room",
      "zh-TW": "リビング",
      "zh-CN": "リビング",
      "ko": "living room",
      "vi": "living room",
      "id": "living room"
    },
    "pos": "verb-godan",
    "ex": "リビングことにする"
  },
  {
    "id": "V2708",
    "w": "寝室",
    "r": "しんしつ",
    "m": {
      "en": "bedroom",
      "zh-TW": "寝室",
      "zh-CN": "寝室",
      "ko": "bedroom",
      "vi": "bedroom",
      "id": "bedroom"
    },
    "pos": "verb-godan",
    "ex": "寝室ことにする"
  },
  {
    "id": "V2709",
    "w": "浴室",
    "r": "よくしつ",
    "m": {
      "en": "bathroom",
      "zh-TW": "浴室",
      "zh-CN": "浴室",
      "ko": "bathroom",
      "vi": "bathroom",
      "id": "bathroom"
    },
    "pos": "verb-godan",
    "ex": "浴室ことにする"
  },
  {
    "id": "V2710",
    "w": "トイレ",
    "r": "といれ",
    "m": {
      "en": "toilet",
      "zh-TW": "トイレ",
      "zh-CN": "トイレ",
      "ko": "toilet",
      "vi": "toilet",
      "id": "toilet"
    },
    "pos": "noun",
    "ex": "トイレについて考える"
  },
  {
    "id": "V2711",
    "w": "ベランダ",
    "r": "べらんだ",
    "m": {
      "en": "balcony",
      "zh-TW": "ベランダ",
      "zh-CN": "ベランダ",
      "ko": "balcony",
      "vi": "balcony",
      "id": "balcony"
    },
    "pos": "noun",
    "ex": "ベランダについて考える"
  },
  {
    "id": "V2712",
    "w": "服装",
    "r": "ふくそう",
    "m": {
      "en": "clothing",
      "zh-TW": "服装",
      "zh-CN": "服装",
      "ko": "clothing",
      "vi": "clothing",
      "id": "clothing"
    },
    "pos": "verb-godan",
    "ex": "服装ことにする"
  },
  {
    "id": "V2713",
    "w": "和服",
    "r": "わふく",
    "m": {
      "en": "Japanese clothes",
      "zh-TW": "和服",
      "zh-CN": "和服",
      "ko": "Japanese clothes",
      "vi": "Japanese clothes",
      "id": "Japanese clothes"
    },
    "pos": "verb-godan",
    "ex": "和服ことにする"
  },
  {
    "id": "V2714",
    "w": "普段着",
    "r": "ふだんぎ",
    "m": {
      "en": "casual wear",
      "zh-TW": "普段着",
      "zh-CN": "普段着",
      "ko": "casual wear",
      "vi": "casual wear",
      "id": "casual wear"
    },
    "pos": "noun",
    "ex": "普段着について考える"
  },
  {
    "id": "V2715",
    "w": "正装",
    "r": "せいそう",
    "m": {
      "en": "formal dress",
      "zh-TW": "正装",
      "zh-CN": "正装",
      "ko": "formal dress",
      "vi": "formal dress",
      "id": "formal dress"
    },
    "pos": "verb-godan",
    "ex": "正装ことにする"
  },
  {
    "id": "V2716",
    "w": "制服",
    "r": "せいふく",
    "m": {
      "en": "uniform",
      "zh-TW": "制服",
      "zh-CN": "制服",
      "ko": "uniform",
      "vi": "uniform",
      "id": "uniform"
    },
    "pos": "verb-godan",
    "ex": "制服ことにする"
  },
  {
    "id": "V2717",
    "w": "作業着",
    "r": "さぎょうぎ",
    "m": {
      "en": "work clothes",
      "zh-TW": "作業着",
      "zh-CN": "作業着",
      "ko": "work clothes",
      "vi": "work clothes",
      "id": "work clothes"
    },
    "pos": "noun",
    "ex": "作業着について考える"
  },
  {
    "id": "V2718",
    "w": "上着",
    "r": "うわぎ",
    "m": {
      "en": "jacket",
      "zh-TW": "上着",
      "zh-CN": "上着",
      "ko": "jacket",
      "vi": "jacket",
      "id": "jacket"
    },
    "pos": "noun",
    "ex": "上着について考える"
  },
  {
    "id": "V2719",
    "w": "心境",
    "r": "しんきょう",
    "m": {
      "en": "state of mind",
      "zh-TW": "心境",
      "zh-CN": "心境",
      "ko": "state of mind",
      "vi": "state of mind",
      "id": "state of mind"
    },
    "pos": "verb-godan",
    "ex": "心境ことにする"
  },
  {
    "id": "V2720",
    "w": "恐怖",
    "r": "きょうふ",
    "m": {
      "en": "fear",
      "zh-TW": "恐怖",
      "zh-CN": "恐怖",
      "ko": "fear",
      "vi": "fear",
      "id": "fear"
    },
    "pos": "noun",
    "ex": "恐怖について考える"
  },
  {
    "id": "V2721",
    "w": "落ち着き",
    "r": "おちつき",
    "m": {
      "en": "calmness",
      "zh-TW": "落ち着き",
      "zh-CN": "落ち着き",
      "ko": "calmness",
      "vi": "calmness",
      "id": "calmness"
    },
    "pos": "noun",
    "ex": "落ち着きについて考える"
  },
  {
    "id": "V2722",
    "w": "人柄",
    "r": "ひとがら",
    "m": {
      "en": "character",
      "zh-TW": "人柄",
      "zh-CN": "人柄",
      "ko": "character",
      "vi": "character",
      "id": "character"
    },
    "pos": "noun",
    "ex": "人柄について考える"
  },
  {
    "id": "V2723",
    "w": "積極的",
    "r": "せっきょくてき",
    "m": {
      "en": "positive",
      "zh-TW": "積極的",
      "zh-CN": "積極的",
      "ko": "positive",
      "vi": "positive",
      "id": "positive"
    },
    "pos": "na-adj",
    "ex": "とても積極的だと感じる"
  },
  {
    "id": "V2724",
    "w": "消極的",
    "r": "しょうきょくてき",
    "m": {
      "en": "passive",
      "zh-TW": "消極的",
      "zh-CN": "消極的",
      "ko": "passive",
      "vi": "passive",
      "id": "passive"
    },
    "pos": "na-adj",
    "ex": "とても消極的だと感じる"
  },
  {
    "id": "V2725",
    "w": "社交的",
    "r": "しゃこうてき",
    "m": {
      "en": "sociable",
      "zh-TW": "社交的",
      "zh-CN": "社交的",
      "ko": "sociable",
      "vi": "sociable",
      "id": "sociable"
    },
    "pos": "na-adj",
    "ex": "とても社交的だと感じる"
  },
  {
    "id": "V2726",
    "w": "内向的",
    "r": "ないこうてき",
    "m": {
      "en": "introverted",
      "zh-TW": "内向的",
      "zh-CN": "内向的",
      "ko": "introverted",
      "vi": "introverted",
      "id": "introverted"
    },
    "pos": "na-adj",
    "ex": "とても内向的だと感じる"
  },
  {
    "id": "V2727",
    "w": "几帳面",
    "r": "きちょうめん",
    "m": {
      "en": "methodical",
      "zh-TW": "几帳面",
      "zh-CN": "几帳面",
      "ko": "methodical",
      "vi": "methodical",
      "id": "methodical"
    },
    "pos": "noun",
    "ex": "几帳面について考える"
  },
  {
    "id": "V2728",
    "w": "軽率",
    "r": "けいそつ",
    "m": {
      "en": "careless",
      "zh-TW": "軽率",
      "zh-CN": "軽率",
      "ko": "careless",
      "vi": "careless",
      "id": "careless"
    },
    "pos": "verb-godan",
    "ex": "軽率ことにする"
  },
  {
    "id": "V2729",
    "w": "誠実",
    "r": "せいじつ",
    "m": {
      "en": "sincere",
      "zh-TW": "誠実",
      "zh-CN": "誠実",
      "ko": "sincere",
      "vi": "sincere",
      "id": "sincere"
    },
    "pos": "verb-godan",
    "ex": "誠実ことにする"
  },
  {
    "id": "V2730",
    "w": "不誠実",
    "r": "ふせいじつ",
    "m": {
      "en": "insincere",
      "zh-TW": "不誠実",
      "zh-CN": "不誠実",
      "ko": "insincere",
      "vi": "insincere",
      "id": "insincere"
    },
    "pos": "verb-godan",
    "ex": "不誠実ことにする"
  },
  {
    "id": "V2731",
    "w": "相場",
    "r": "そうば",
    "m": {
      "en": "market price",
      "zh-TW": "相場",
      "zh-CN": "相場",
      "ko": "market price",
      "vi": "market price",
      "id": "market price"
    },
    "pos": "noun",
    "ex": "相場について考える"
  },
  {
    "id": "V2732",
    "w": "増減",
    "r": "ぞうげん",
    "m": {
      "en": "increase and decrease",
      "zh-TW": "増減",
      "zh-CN": "増減",
      "ko": "increase and decrease",
      "vi": "increase and decrease",
      "id": "increase and decrease"
    },
    "pos": "noun",
    "ex": "増減について考える"
  },
  {
    "id": "V2733",
    "w": "促進",
    "r": "そくしん",
    "m": {
      "en": "promotion",
      "zh-TW": "促進",
      "zh-CN": "促進",
      "ko": "promotion",
      "vi": "promotion",
      "id": "promotion"
    },
    "pos": "noun",
    "ex": "促進について考える"
  },
  {
    "id": "V2734",
    "w": "続行",
    "r": "ぞっこう",
    "m": {
      "en": "continuation",
      "zh-TW": "続行",
      "zh-CN": "続行",
      "ko": "continuation",
      "vi": "continuation",
      "id": "continuation"
    },
    "pos": "verb-godan",
    "ex": "続行ことにする"
  },
  {
    "id": "V2735",
    "w": "妥協",
    "r": "だきょう",
    "m": {
      "en": "compromise",
      "zh-TW": "妥協",
      "zh-CN": "妥協",
      "ko": "compromise",
      "vi": "compromise",
      "id": "compromise"
    },
    "pos": "verb-godan",
    "ex": "妥協ことにする"
  },
  {
    "id": "V2736",
    "w": "脱落",
    "r": "だつらく",
    "m": {
      "en": "dropout",
      "zh-TW": "脱落",
      "zh-CN": "脱落",
      "ko": "dropout",
      "vi": "dropout",
      "id": "dropout"
    },
    "pos": "verb-godan",
    "ex": "脱落ことにする"
  },
  {
    "id": "V2737",
    "w": "単純",
    "r": "たんじゅん",
    "m": {
      "en": "simple",
      "zh-TW": "単純",
      "zh-CN": "単純",
      "ko": "simple",
      "vi": "simple",
      "id": "simple"
    },
    "pos": "noun",
    "ex": "単純な作業をする",
    "syn": [
      "簡単",
      "シンプル",
      "易しい"
    ]
  },
  {
    "id": "V2738",
    "w": "蓄積",
    "r": "ちくせき",
    "m": {
      "en": "accumulation",
      "zh-TW": "蓄積",
      "zh-CN": "蓄積",
      "ko": "accumulation",
      "vi": "accumulation",
      "id": "accumulation"
    },
    "pos": "noun",
    "ex": "蓄積について考える"
  },
  {
    "id": "V2739",
    "w": "長期",
    "r": "ちょうき",
    "m": {
      "en": "long-term",
      "zh-TW": "長期",
      "zh-CN": "長期",
      "ko": "long-term",
      "vi": "long-term",
      "id": "long-term"
    },
    "pos": "noun",
    "ex": "長期について考える"
  },
  {
    "id": "V2740",
    "w": "提出",
    "r": "ていしゅつ",
    "m": {
      "en": "submission",
      "zh-TW": "提出",
      "zh-CN": "提出",
      "ko": "submission",
      "vi": "submission",
      "id": "submission"
    },
    "pos": "verb-godan",
    "ex": "提出ことにする"
  },
  {
    "id": "V2741",
    "w": "展示",
    "r": "てんじ",
    "m": {
      "en": "exhibition",
      "zh-TW": "展示",
      "zh-CN": "展示",
      "ko": "exhibition",
      "vi": "exhibition",
      "id": "exhibition"
    },
    "pos": "noun",
    "ex": "展示について考える"
  },
  {
    "id": "V2742",
    "w": "伝達",
    "r": "でんたつ",
    "m": {
      "en": "transmission",
      "zh-TW": "伝達",
      "zh-CN": "伝達",
      "ko": "transmission",
      "vi": "transmission",
      "id": "transmission"
    },
    "pos": "verb-godan",
    "ex": "伝達ことにする"
  },
  {
    "id": "V2743",
    "w": "当初",
    "r": "とうしょ",
    "m": {
      "en": "initially",
      "zh-TW": "当初",
      "zh-CN": "当初",
      "ko": "initially",
      "vi": "initially",
      "id": "initially"
    },
    "pos": "noun",
    "ex": "当初について考える"
  },
  {
    "id": "V2744",
    "w": "到着",
    "r": "とうちゃく",
    "m": {
      "en": "arrival",
      "zh-TW": "到着",
      "zh-CN": "到着",
      "ko": "arrival",
      "vi": "arrival",
      "id": "arrival"
    },
    "pos": "verb-godan",
    "ex": "到着ことにする"
  },
  {
    "id": "V2745",
    "w": "取消",
    "r": "とりけし",
    "m": {
      "en": "cancellation",
      "zh-TW": "取消",
      "zh-CN": "取消",
      "ko": "cancellation",
      "vi": "cancellation",
      "id": "cancellation"
    },
    "pos": "noun",
    "ex": "取消について考える"
  },
  {
    "id": "V2746",
    "w": "把握",
    "r": "はあく",
    "m": {
      "en": "grasp",
      "zh-TW": "把握",
      "zh-CN": "把握",
      "ko": "grasp",
      "vi": "grasp",
      "id": "grasp"
    },
    "pos": "verb-godan",
    "ex": "把握ことにする"
  },
  {
    "id": "V2747",
    "w": "了解",
    "r": "りょうかい",
    "m": {
      "en": "understanding",
      "zh-TW": "了解",
      "zh-CN": "了解",
      "ko": "understanding",
      "vi": "understanding",
      "id": "understanding"
    },
    "pos": "i-adj",
    "ex": "とても了解と思う"
  },
  {
    "id": "V2748",
    "w": "論理",
    "r": "ろんり",
    "m": {
      "en": "logic",
      "zh-TW": "論理",
      "zh-CN": "論理",
      "ko": "logic",
      "vi": "logic",
      "id": "logic"
    },
    "pos": "noun",
    "ex": "論理について考える"
  },
  {
    "id": "V2749",
    "w": "加工",
    "r": "かこう",
    "m": {
      "en": "processing",
      "zh-TW": "加工",
      "zh-CN": "加工",
      "ko": "processing",
      "vi": "processing",
      "id": "processing"
    },
    "pos": "verb-godan",
    "ex": "加工ことにする"
  },
  {
    "id": "V2750",
    "w": "貸し出す",
    "r": "かしだす",
    "m": {
      "en": "lend",
      "zh-TW": "貸し出す",
      "zh-CN": "貸し出す",
      "ko": "lend",
      "vi": "lend",
      "id": "lend"
    },
    "pos": "verb-godan",
    "ex": "貸し出すことにする"
  },
  {
    "id": "V2751",
    "w": "感じる",
    "r": "かんじる",
    "m": {
      "en": "feel",
      "zh-TW": "感じる",
      "zh-CN": "感じる",
      "ko": "feel",
      "vi": "feel",
      "id": "feel"
    },
    "pos": "verb-godan",
    "ex": "感じることにする"
  },
  {
    "id": "V2752",
    "w": "間違える",
    "r": "まちがえる",
    "m": {
      "en": "make a mistake",
      "zh-TW": "間違える",
      "zh-CN": "間違える",
      "ko": "make a mistake",
      "vi": "make a mistake",
      "id": "make a mistake"
    },
    "pos": "verb-ichidan",
    "ex": "答えを間違える"
  },
  {
    "id": "V2753",
    "w": "機会",
    "r": "きかい",
    "m": {
      "en": "opportunity",
      "zh-TW": "機会",
      "zh-CN": "機会",
      "ko": "opportunity",
      "vi": "opportunity",
      "id": "opportunity"
    },
    "pos": "i-adj",
    "ex": "良い機会を得る",
    "syn": [
      "チャンス",
      "好機",
      "きっかけ"
    ]
  },
  {
    "id": "V2754",
    "w": "企画",
    "r": "きかく",
    "m": {
      "en": "planning",
      "zh-TW": "企画",
      "zh-CN": "企画",
      "ko": "planning",
      "vi": "planning",
      "id": "planning"
    },
    "pos": "verb-godan",
    "ex": "企画ことにする"
  },
  {
    "id": "V2755",
    "w": "気に入る",
    "r": "きにいる",
    "m": {
      "en": "like",
      "zh-TW": "気に入る",
      "zh-CN": "気に入る",
      "ko": "like",
      "vi": "like",
      "id": "like"
    },
    "pos": "verb-ichidan",
    "ex": "気に入ることにする"
  },
  {
    "id": "V2756",
    "w": "気にする",
    "r": "きにする",
    "m": {
      "en": "worry about",
      "zh-TW": "気にする",
      "zh-CN": "気にする",
      "ko": "worry about",
      "vi": "worry about",
      "id": "worry about"
    },
    "pos": "verb-suru",
    "ex": "気にすることが大切だ"
  },
  {
    "id": "V2757",
    "w": "急",
    "r": "きゅう",
    "m": {
      "en": "sudden",
      "zh-TW": "急",
      "zh-CN": "急",
      "ko": "sudden",
      "vi": "sudden",
      "id": "sudden"
    },
    "pos": "verb-godan",
    "ex": "急な予定変更があった"
  },
  {
    "id": "V2758",
    "w": "嫌う",
    "r": "きらう",
    "m": {
      "en": "hate",
      "zh-TW": "嫌う",
      "zh-CN": "嫌う",
      "ko": "hate",
      "vi": "hate",
      "id": "hate"
    },
    "pos": "verb-godan",
    "ex": "嫌うことにする"
  },
  {
    "id": "V2759",
    "w": "禁止",
    "r": "きんし",
    "m": {
      "en": "prohibition",
      "zh-TW": "禁止",
      "zh-CN": "禁止",
      "ko": "prohibition",
      "vi": "prohibition",
      "id": "prohibition"
    },
    "pos": "noun",
    "ex": "禁止について考える"
  },
  {
    "id": "V2760",
    "w": "砕く",
    "r": "くだく",
    "m": {
      "en": "crush",
      "zh-TW": "砕く",
      "zh-CN": "砕く",
      "ko": "crush",
      "vi": "crush",
      "id": "crush"
    },
    "pos": "verb-godan",
    "ex": "砕くことにする"
  },
  {
    "id": "V2761",
    "w": "組む",
    "r": "くむ",
    "m": {
      "en": "assemble",
      "zh-TW": "組む",
      "zh-CN": "組む",
      "ko": "assemble",
      "vi": "assemble",
      "id": "assemble"
    },
    "pos": "verb-godan",
    "ex": "組むことにする"
  },
  {
    "id": "V2762",
    "w": "うれしい",
    "r": "うれしい",
    "m": {
      "en": "happy",
      "zh-TW": "うれしい",
      "zh-CN": "うれしい",
      "ko": "happy",
      "vi": "happy",
      "id": "happy"
    },
    "pos": "i-adj",
    "ex": "とてもうれしいと思う"
  },
  {
    "id": "V2763",
    "w": "不便",
    "r": "ふべん",
    "m": {
      "en": "inconvenient",
      "zh-TW": "不便",
      "zh-CN": "不便",
      "ko": "inconvenient",
      "vi": "inconvenient",
      "id": "inconvenient"
    },
    "pos": "noun",
    "ex": "交通が不便だ",
    "syn": [
      "使いにくい",
      "面倒",
      "厄介"
    ]
  },
  {
    "id": "V2764",
    "w": "丁寧",
    "r": "ていねい",
    "m": {
      "en": "polite",
      "zh-TW": "丁寧",
      "zh-CN": "丁寧",
      "ko": "polite",
      "vi": "polite",
      "id": "polite"
    },
    "pos": "i-adj",
    "ex": "とても丁寧と思う"
  },
  {
    "id": "V2765",
    "w": "窓口",
    "r": "まどぐち",
    "m": {
      "en": "counter",
      "zh-TW": "窓口",
      "zh-CN": "窓口",
      "ko": "counter",
      "vi": "counter",
      "id": "counter"
    },
    "pos": "noun",
    "ex": "窓口について考える"
  },
  {
    "id": "V2766",
    "w": "待合室",
    "r": "まちあいしつ",
    "m": {
      "en": "waiting room",
      "zh-TW": "待合室",
      "zh-CN": "待合室",
      "ko": "waiting room",
      "vi": "waiting room",
      "id": "waiting room"
    },
    "pos": "verb-godan",
    "ex": "待合室ことにする"
  },
  {
    "id": "V2767",
    "w": "休憩室",
    "r": "きゅうけいしつ",
    "m": {
      "en": "break room",
      "zh-TW": "休憩室",
      "zh-CN": "休憩室",
      "ko": "break room",
      "vi": "break room",
      "id": "break room"
    },
    "pos": "verb-godan",
    "ex": "休憩室ことにする"
  },
  {
    "id": "V2768",
    "w": "駐輪場",
    "r": "ちゅうりんじょう",
    "m": {
      "en": "bicycle parking",
      "zh-TW": "駐輪場",
      "zh-CN": "駐輪場",
      "ko": "bicycle parking",
      "vi": "bicycle parking",
      "id": "bicycle parking"
    },
    "pos": "verb-godan",
    "ex": "駐輪場ことにする"
  },
  {
    "id": "V2769",
    "w": "一日中",
    "r": "いちにちじゅう",
    "m": {
      "en": "all day",
      "zh-TW": "一日中",
      "zh-CN": "一日中",
      "ko": "all day",
      "vi": "all day",
      "id": "all day"
    },
    "pos": "verb-godan",
    "ex": "一日中ことにする"
  },
  {
    "id": "V2770",
    "w": "一晩中",
    "r": "ひとばんじゅう",
    "m": {
      "en": "all night",
      "zh-TW": "一晩中",
      "zh-CN": "一晩中",
      "ko": "all night",
      "vi": "all night",
      "id": "all night"
    },
    "pos": "verb-godan",
    "ex": "一晩中ことにする"
  },
  {
    "id": "V2771",
    "w": "一年中",
    "r": "いちねんじゅう",
    "m": {
      "en": "all year",
      "zh-TW": "一年中",
      "zh-CN": "一年中",
      "ko": "all year",
      "vi": "all year",
      "id": "all year"
    },
    "pos": "verb-godan",
    "ex": "一年中ことにする"
  },
  {
    "id": "V2772",
    "w": "全部",
    "r": "ぜんぶ",
    "m": {
      "en": "all",
      "zh-TW": "全部",
      "zh-CN": "全部",
      "ko": "all",
      "vi": "all",
      "id": "all"
    },
    "pos": "verb-godan",
    "ex": "全部食べた"
  },
  {
    "id": "V2773",
    "w": "大半",
    "r": "たいはん",
    "m": {
      "en": "majority",
      "zh-TW": "大半",
      "zh-CN": "大半",
      "ko": "majority",
      "vi": "majority",
      "id": "majority"
    },
    "pos": "noun",
    "ex": "大半について考える"
  },
  {
    "id": "V2774",
    "w": "残り",
    "r": "のこり",
    "m": {
      "en": "remainder",
      "zh-TW": "残り",
      "zh-CN": "残り",
      "ko": "remainder",
      "vi": "remainder",
      "id": "remainder"
    },
    "pos": "noun",
    "ex": "残りについて考える"
  },
  {
    "id": "V2775",
    "w": "多数",
    "r": "たすう",
    "m": {
      "en": "majority",
      "zh-TW": "多数",
      "zh-CN": "多数",
      "ko": "majority",
      "vi": "majority",
      "id": "majority"
    },
    "pos": "verb-godan",
    "ex": "多数ことにする"
  },
  {
    "id": "V2776",
    "w": "少数",
    "r": "しょうすう",
    "m": {
      "en": "minority",
      "zh-TW": "少数",
      "zh-CN": "少数",
      "ko": "minority",
      "vi": "minority",
      "id": "minority"
    },
    "pos": "verb-godan",
    "ex": "少数ことにする"
  },
  {
    "id": "V2777",
    "w": "過半数",
    "r": "かはんすう",
    "m": {
      "en": "majority",
      "zh-TW": "過半数",
      "zh-CN": "過半数",
      "ko": "majority",
      "vi": "majority",
      "id": "majority"
    },
    "pos": "verb-godan",
    "ex": "過半数ことにする"
  },
  {
    "id": "V2778",
    "w": "実用",
    "r": "じつよう",
    "m": {
      "en": "practical",
      "zh-TW": "実用",
      "zh-CN": "実用",
      "ko": "practical",
      "vi": "practical",
      "id": "practical"
    },
    "pos": "verb-godan",
    "ex": "実用ことにする"
  },
  {
    "id": "V2779",
    "w": "箸",
    "r": "はし",
    "m": {
      "en": "chopsticks",
      "zh-TW": "箸",
      "zh-CN": "箸",
      "ko": "chopsticks",
      "vi": "chopsticks",
      "id": "chopsticks"
    },
    "pos": "noun",
    "ex": "箸について考える"
  },
  {
    "id": "V2780",
    "w": "茶碗",
    "r": "ちゃわん",
    "m": {
      "en": "rice bowl",
      "zh-TW": "茶碗",
      "zh-CN": "茶碗",
      "ko": "rice bowl",
      "vi": "rice bowl",
      "id": "rice bowl"
    },
    "pos": "noun",
    "ex": "茶碗について考える"
  },
  {
    "id": "V2781",
    "w": "コップ",
    "r": "こっぷ",
    "m": {
      "en": "cup",
      "zh-TW": "コップ",
      "zh-CN": "コップ",
      "ko": "cup",
      "vi": "cup",
      "id": "cup"
    },
    "pos": "noun",
    "ex": "コップについて考える"
  },
  {
    "id": "V2782",
    "w": "ナイフ",
    "r": "ないふ",
    "m": {
      "en": "knife",
      "zh-TW": "ナイフ",
      "zh-CN": "ナイフ",
      "ko": "knife",
      "vi": "knife",
      "id": "knife"
    },
    "pos": "noun",
    "ex": "ナイフについて考える"
  },
  {
    "id": "V2783",
    "w": "フォーク",
    "r": "ふぉーく",
    "m": {
      "en": "fork",
      "zh-TW": "フォーク",
      "zh-CN": "フォーク",
      "ko": "fork",
      "vi": "fork",
      "id": "fork"
    },
    "pos": "verb-godan",
    "ex": "フォークことにする"
  },
  {
    "id": "V2784",
    "w": "スプーン",
    "r": "すぷーん",
    "m": {
      "en": "spoon",
      "zh-TW": "スプーン",
      "zh-CN": "スプーン",
      "ko": "spoon",
      "vi": "spoon",
      "id": "spoon"
    },
    "pos": "noun",
    "ex": "スプーンについて考える"
  },
  {
    "id": "V2785",
    "w": "鍋",
    "r": "なべ",
    "m": {
      "en": "pot",
      "zh-TW": "鍋",
      "zh-CN": "鍋",
      "ko": "pot",
      "vi": "pot",
      "id": "pot"
    },
    "pos": "noun",
    "ex": "鍋について考える"
  },
  {
    "id": "V2786",
    "w": "フライパン",
    "r": "ふらいぱん",
    "m": {
      "en": "frying pan",
      "zh-TW": "フライパン",
      "zh-CN": "フライパン",
      "ko": "frying pan",
      "vi": "frying pan",
      "id": "frying pan"
    },
    "pos": "noun",
    "ex": "フライパンについて考える"
  },
  {
    "id": "V2787",
    "w": "包丁",
    "r": "ほうちょう",
    "m": {
      "en": "kitchen knife",
      "zh-TW": "包丁",
      "zh-CN": "包丁",
      "ko": "kitchen knife",
      "vi": "kitchen knife",
      "id": "kitchen knife"
    },
    "pos": "verb-godan",
    "ex": "包丁ことにする"
  },
  {
    "id": "V2788",
    "w": "まな板",
    "r": "まないた",
    "m": {
      "en": "cutting board",
      "zh-TW": "まな板",
      "zh-CN": "まな板",
      "ko": "cutting board",
      "vi": "cutting board",
      "id": "cutting board"
    },
    "pos": "noun",
    "ex": "まな板について考える"
  },
  {
    "id": "V2789",
    "w": "ボウル",
    "r": "ぼうる",
    "m": {
      "en": "bowl",
      "zh-TW": "ボウル",
      "zh-CN": "ボウル",
      "ko": "bowl",
      "vi": "bowl",
      "id": "bowl"
    },
    "pos": "verb-godan",
    "ex": "ボウルことにする"
  },
  {
    "id": "V2790",
    "w": "ざる",
    "r": "ざる",
    "m": {
      "en": "strainer",
      "zh-TW": "ざる",
      "zh-CN": "ざる",
      "ko": "strainer",
      "vi": "strainer",
      "id": "strainer"
    },
    "pos": "verb-godan",
    "ex": "ざることにする"
  },
  {
    "id": "V2791",
    "w": "おたま",
    "r": "おたま",
    "m": {
      "en": "ladle",
      "zh-TW": "おたま",
      "zh-CN": "おたま",
      "ko": "ladle",
      "vi": "ladle",
      "id": "ladle"
    },
    "pos": "noun",
    "ex": "おたまについて考える"
  },
  {
    "id": "V2792",
    "w": "へら",
    "r": "へら",
    "m": {
      "en": "spatula",
      "zh-TW": "へら",
      "zh-CN": "へら",
      "ko": "spatula",
      "vi": "spatula",
      "id": "spatula"
    },
    "pos": "noun",
    "ex": "へらについて考える"
  },
  {
    "id": "V2793",
    "w": "泡立て器",
    "r": "あわだてき",
    "m": {
      "en": "whisk",
      "zh-TW": "泡立て器",
      "zh-CN": "泡立て器",
      "ko": "whisk",
      "vi": "whisk",
      "id": "whisk"
    },
    "pos": "noun",
    "ex": "泡立て器について考える"
  },
  {
    "id": "V2794",
    "w": "ボールペン",
    "r": "ぼーるぺん",
    "m": {
      "en": "ballpoint pen",
      "zh-TW": "ボールペン",
      "zh-CN": "ボールペン",
      "ko": "ballpoint pen",
      "vi": "ballpoint pen",
      "id": "ballpoint pen"
    },
    "pos": "noun",
    "ex": "ボールペンについて考える"
  },
  {
    "id": "V2795",
    "w": "シャープペン",
    "r": "しゃーぷぺん",
    "m": {
      "en": "mechanical pencil",
      "zh-TW": "シャープペン",
      "zh-CN": "シャープペン",
      "ko": "mechanical pencil",
      "vi": "mechanical pencil",
      "id": "mechanical pencil"
    },
    "pos": "noun",
    "ex": "シャープペンについて考える"
  },
  {
    "id": "V2796",
    "w": "蛍光ペン",
    "r": "けいこうぺん",
    "m": {
      "en": "highlighter",
      "zh-TW": "蛍光ペン",
      "zh-CN": "蛍光ペン",
      "ko": "highlighter",
      "vi": "highlighter",
      "id": "highlighter"
    },
    "pos": "noun",
    "ex": "蛍光ペンについて考える"
  },
  {
    "id": "V2797",
    "w": "マーカー",
    "r": "まーかー",
    "m": {
      "en": "marker",
      "zh-TW": "マーカー",
      "zh-CN": "マーカー",
      "ko": "marker",
      "vi": "marker",
      "id": "marker"
    },
    "pos": "noun",
    "ex": "マーカーについて考える"
  },
  {
    "id": "V2798",
    "w": "修正液",
    "r": "しゅうせいえき",
    "m": {
      "en": "correction fluid",
      "zh-TW": "修正液",
      "zh-CN": "修正液",
      "ko": "correction fluid",
      "vi": "correction fluid",
      "id": "correction fluid"
    },
    "pos": "noun",
    "ex": "修正液について考える"
  },
  {
    "id": "V2799",
    "w": "分度器",
    "r": "ぶんどき",
    "m": {
      "en": "protractor",
      "zh-TW": "分度器",
      "zh-CN": "分度器",
      "ko": "protractor",
      "vi": "protractor",
      "id": "protractor"
    },
    "pos": "noun",
    "ex": "分度器について考える"
  },
  {
    "id": "V2800",
    "w": "コンパス",
    "r": "こんぱす",
    "m": {
      "en": "compass",
      "zh-TW": "コンパス",
      "zh-CN": "コンパス",
      "ko": "compass",
      "vi": "compass",
      "id": "compass"
    },
    "pos": "verb-godan",
    "ex": "コンパスことにする"
  },
  {
    "id": "V2801",
    "w": "はさみ",
    "r": "はさみ",
    "m": {
      "en": "scissors",
      "zh-TW": "はさみ",
      "zh-CN": "はさみ",
      "ko": "scissors",
      "vi": "scissors",
      "id": "scissors"
    },
    "pos": "noun",
    "ex": "はさみについて考える"
  },
  {
    "id": "V2802",
    "w": "のり",
    "r": "のり",
    "m": {
      "en": "glue",
      "zh-TW": "のり",
      "zh-CN": "のり",
      "ko": "glue",
      "vi": "glue",
      "id": "glue"
    },
    "pos": "noun",
    "ex": "のりについて考える"
  },
  {
    "id": "V2803",
    "w": "セロテープ",
    "r": "せろてーぷ",
    "m": {
      "en": "tape",
      "zh-TW": "セロテープ",
      "zh-CN": "セロテープ",
      "ko": "tape",
      "vi": "tape",
      "id": "tape"
    },
    "pos": "noun",
    "ex": "セロテープについて考える"
  },
  {
    "id": "V2804",
    "w": "ホチキス",
    "r": "ほちきす",
    "m": {
      "en": "stapler",
      "zh-TW": "ホチキス",
      "zh-CN": "ホチキス",
      "ko": "stapler",
      "vi": "stapler",
      "id": "stapler"
    },
    "pos": "verb-godan",
    "ex": "ホチキスことにする"
  },
  {
    "id": "V2805",
    "w": "クリップ",
    "r": "くりっぷ",
    "m": {
      "en": "clip",
      "zh-TW": "クリップ",
      "zh-CN": "クリップ",
      "ko": "clip",
      "vi": "clip",
      "id": "clip"
    },
    "pos": "noun",
    "ex": "クリップについて考える"
  },
  {
    "id": "V2806",
    "w": "ファイル",
    "r": "ふぁいる",
    "m": {
      "en": "file",
      "zh-TW": "ファイル",
      "zh-CN": "ファイル",
      "ko": "file",
      "vi": "file",
      "id": "file"
    },
    "pos": "verb-ichidan",
    "ex": "ファイルことにする"
  },
  {
    "id": "V2807",
    "w": "バインダー",
    "r": "ばいんだー",
    "m": {
      "en": "binder",
      "zh-TW": "バインダー",
      "zh-CN": "バインダー",
      "ko": "binder",
      "vi": "binder",
      "id": "binder"
    },
    "pos": "noun",
    "ex": "バインダーについて考える"
  },
  {
    "id": "V2808",
    "w": "サッカー",
    "r": "さっかー",
    "m": {
      "en": "soccer",
      "zh-TW": "サッカー",
      "zh-CN": "サッカー",
      "ko": "soccer",
      "vi": "soccer",
      "id": "soccer"
    },
    "pos": "noun",
    "ex": "サッカーについて考える"
  },
  {
    "id": "V2809",
    "w": "テニス",
    "r": "てにす",
    "m": {
      "en": "tennis",
      "zh-TW": "テニス",
      "zh-CN": "テニス",
      "ko": "tennis",
      "vi": "tennis",
      "id": "tennis"
    },
    "pos": "verb-godan",
    "ex": "テニスことにする"
  },
  {
    "id": "V2810",
    "w": "バレーボール",
    "r": "ばれーぼーる",
    "m": {
      "en": "volleyball",
      "zh-TW": "バレーボール",
      "zh-CN": "バレーボール",
      "ko": "volleyball",
      "vi": "volleyball",
      "id": "volleyball"
    },
    "pos": "verb-godan",
    "ex": "バレーボールことにする"
  },
  {
    "id": "V2811",
    "w": "バスケットボール",
    "r": "ばすけっとぼーる",
    "m": {
      "en": "basketball",
      "zh-TW": "バスケットボール",
      "zh-CN": "バスケットボール",
      "ko": "basketball",
      "vi": "basketball",
      "id": "basketball"
    },
    "pos": "verb-godan",
    "ex": "バスケットボールことにする"
  },
  {
    "id": "V2812",
    "w": "ゴルフ",
    "r": "ごるふ",
    "m": {
      "en": "golf",
      "zh-TW": "ゴルフ",
      "zh-CN": "ゴルフ",
      "ko": "golf",
      "vi": "golf",
      "id": "golf"
    },
    "pos": "noun",
    "ex": "ゴルフについて考える"
  },
  {
    "id": "V2813",
    "w": "水泳",
    "r": "すいえい",
    "m": {
      "en": "swimming",
      "zh-TW": "水泳",
      "zh-CN": "水泳",
      "ko": "swimming",
      "vi": "swimming",
      "id": "swimming"
    },
    "pos": "i-adj",
    "ex": "とても水泳と思う"
  },
  {
    "id": "V2814",
    "w": "陸上",
    "r": "りくじょう",
    "m": {
      "en": "track and field",
      "zh-TW": "陸上",
      "zh-CN": "陸上",
      "ko": "track and field",
      "vi": "track and field",
      "id": "track and field"
    },
    "pos": "verb-godan",
    "ex": "陸上ことにする"
  },
  {
    "id": "V2815",
    "w": "柔道",
    "r": "じゅうどう",
    "m": {
      "en": "judo",
      "zh-TW": "柔道",
      "zh-CN": "柔道",
      "ko": "judo",
      "vi": "judo",
      "id": "judo"
    },
    "pos": "verb-godan",
    "ex": "柔道ことにする"
  },
  {
    "id": "V2816",
    "w": "剣道",
    "r": "けんどう",
    "m": {
      "en": "kendo",
      "zh-TW": "剣道",
      "zh-CN": "剣道",
      "ko": "kendo",
      "vi": "kendo",
      "id": "kendo"
    },
    "pos": "verb-godan",
    "ex": "剣道ことにする"
  },
  {
    "id": "V2817",
    "w": "空手",
    "r": "からて",
    "m": {
      "en": "karate",
      "zh-TW": "空手",
      "zh-CN": "空手",
      "ko": "karate",
      "vi": "karate",
      "id": "karate"
    },
    "pos": "noun",
    "ex": "空手について考える"
  },
  {
    "id": "V2818",
    "w": "ボクシング",
    "r": "ぼくしんぐ",
    "m": {
      "en": "boxing",
      "zh-TW": "ボクシング",
      "zh-CN": "ボクシング",
      "ko": "boxing",
      "vi": "boxing",
      "id": "boxing"
    },
    "pos": "verb-godan",
    "ex": "ボクシングことにする"
  },
  {
    "id": "V2819",
    "w": "レスリング",
    "r": "れすりんぐ",
    "m": {
      "en": "wrestling",
      "zh-TW": "レスリング",
      "zh-CN": "レスリング",
      "ko": "wrestling",
      "vi": "wrestling",
      "id": "wrestling"
    },
    "pos": "verb-godan",
    "ex": "レスリングことにする"
  },
  {
    "id": "V2820",
    "w": "スキー",
    "r": "すきー",
    "m": {
      "en": "skiing",
      "zh-TW": "スキー",
      "zh-CN": "スキー",
      "ko": "skiing",
      "vi": "skiing",
      "id": "skiing"
    },
    "pos": "noun",
    "ex": "スキーについて考える"
  },
  {
    "id": "V2821",
    "w": "スケート",
    "r": "すけーと",
    "m": {
      "en": "skating",
      "zh-TW": "スケート",
      "zh-CN": "スケート",
      "ko": "skating",
      "vi": "skating",
      "id": "skating"
    },
    "pos": "adverb",
    "ex": "スケート考える"
  },
  {
    "id": "V2822",
    "w": "ピアノ",
    "r": "ぴあの",
    "m": {
      "en": "piano",
      "zh-TW": "ピアノ",
      "zh-CN": "ピアノ",
      "ko": "piano",
      "vi": "piano",
      "id": "piano"
    },
    "pos": "noun",
    "ex": "ピアノについて考える"
  },
  {
    "id": "V2823",
    "w": "ギター",
    "r": "ぎたー",
    "m": {
      "en": "guitar",
      "zh-TW": "ギター",
      "zh-CN": "ギター",
      "ko": "guitar",
      "vi": "guitar",
      "id": "guitar"
    },
    "pos": "noun",
    "ex": "ギターについて考える"
  },
  {
    "id": "V2824",
    "w": "バイオリン",
    "r": "ばいおりん",
    "m": {
      "en": "violin",
      "zh-TW": "バイオリン",
      "zh-CN": "バイオリン",
      "ko": "violin",
      "vi": "violin",
      "id": "violin"
    },
    "pos": "noun",
    "ex": "バイオリンについて考える"
  },
  {
    "id": "V2825",
    "w": "フルート",
    "r": "ふるーと",
    "m": {
      "en": "flute",
      "zh-TW": "フルート",
      "zh-CN": "フルート",
      "ko": "flute",
      "vi": "flute",
      "id": "flute"
    },
    "pos": "adverb",
    "ex": "フルート考える"
  },
  {
    "id": "V2826",
    "w": "トランペット",
    "r": "とらんぺっと",
    "m": {
      "en": "trumpet",
      "zh-TW": "トランペット",
      "zh-CN": "トランペット",
      "ko": "trumpet",
      "vi": "trumpet",
      "id": "trumpet"
    },
    "pos": "noun",
    "ex": "トランペットについて考える"
  },
  {
    "id": "V2827",
    "w": "ドラム",
    "r": "どらむ",
    "m": {
      "en": "drums",
      "zh-TW": "ドラム",
      "zh-CN": "ドラム",
      "ko": "drums",
      "vi": "drums",
      "id": "drums"
    },
    "pos": "verb-godan",
    "ex": "ドラムことにする"
  },
  {
    "id": "V2828",
    "w": "歌手",
    "r": "かしゅ",
    "m": {
      "en": "singer",
      "zh-TW": "歌手",
      "zh-CN": "歌手",
      "ko": "singer",
      "vi": "singer",
      "id": "singer"
    },
    "pos": "noun",
    "ex": "歌手について考える"
  },
  {
    "id": "V2829",
    "w": "曲",
    "r": "きょく",
    "m": {
      "en": "piece",
      "zh-TW": "曲",
      "zh-CN": "曲",
      "ko": "piece",
      "vi": "piece",
      "id": "piece"
    },
    "pos": "verb-godan",
    "ex": "曲ことにする"
  },
  {
    "id": "V2830",
    "w": "楽器",
    "r": "がっき",
    "m": {
      "en": "instrument",
      "zh-TW": "楽器",
      "zh-CN": "楽器",
      "ko": "instrument",
      "vi": "instrument",
      "id": "instrument"
    },
    "pos": "noun",
    "ex": "楽器について考える"
  },
  {
    "id": "V2831",
    "w": "コンサート",
    "r": "こんさーと",
    "m": {
      "en": "concert",
      "zh-TW": "コンサート",
      "zh-CN": "コンサート",
      "ko": "concert",
      "vi": "concert",
      "id": "concert"
    },
    "pos": "noun",
    "ex": "コンサートについて考える"
  },
  {
    "id": "V2832",
    "w": "ライブ",
    "r": "らいぶ",
    "m": {
      "en": "live",
      "zh-TW": "ライブ",
      "zh-CN": "ライブ",
      "ko": "live",
      "vi": "live",
      "id": "live"
    },
    "pos": "verb-godan",
    "ex": "ライブことにする"
  },
  {
    "id": "V2833",
    "w": "リハーサル",
    "r": "りはーさる",
    "m": {
      "en": "rehearsal",
      "zh-TW": "リハーサル",
      "zh-CN": "リハーサル",
      "ko": "rehearsal",
      "vi": "rehearsal",
      "id": "rehearsal"
    },
    "pos": "verb-godan",
    "ex": "リハーサルことにする"
  },
  {
    "id": "V2834",
    "w": "パーマ",
    "r": "ぱーま",
    "m": {
      "en": "perm",
      "zh-TW": "パーマ",
      "zh-CN": "パーマ",
      "ko": "perm",
      "vi": "perm",
      "id": "perm"
    },
    "pos": "noun",
    "ex": "パーマについて考える"
  },
  {
    "id": "V2835",
    "w": "カット",
    "r": "かっと",
    "m": {
      "en": "cut",
      "zh-TW": "カット",
      "zh-CN": "カット",
      "ko": "cut",
      "vi": "cut",
      "id": "cut"
    },
    "pos": "adverb",
    "ex": "カット考える"
  },
  {
    "id": "V2836",
    "w": "カラー",
    "r": "からー",
    "m": {
      "en": "color",
      "zh-TW": "カラー",
      "zh-CN": "カラー",
      "ko": "color",
      "vi": "color",
      "id": "color"
    },
    "pos": "noun",
    "ex": "カラーについて考える"
  },
  {
    "id": "V2837",
    "w": "トリートメント",
    "r": "とりーとめんと",
    "m": {
      "en": "treatment",
      "zh-TW": "トリートメント",
      "zh-CN": "トリートメント",
      "ko": "treatment",
      "vi": "treatment",
      "id": "treatment"
    },
    "pos": "noun",
    "ex": "トリートメントについて考える"
  },
  {
    "id": "V2838",
    "w": "シャンプー",
    "r": "しゃんぷー",
    "m": {
      "en": "shampoo",
      "zh-TW": "シャンプー",
      "zh-CN": "シャンプー",
      "ko": "shampoo",
      "vi": "shampoo",
      "id": "shampoo"
    },
    "pos": "noun",
    "ex": "シャンプーについて考える"
  },
  {
    "id": "V2839",
    "w": "リンス",
    "r": "りんす",
    "m": {
      "en": "rinse",
      "zh-TW": "リンス",
      "zh-CN": "リンス",
      "ko": "rinse",
      "vi": "rinse",
      "id": "rinse"
    },
    "pos": "verb-godan",
    "ex": "リンスことにする"
  },
  {
    "id": "V2840",
    "w": "ブラシ",
    "r": "ぶらし",
    "m": {
      "en": "brush",
      "zh-TW": "ブラシ",
      "zh-CN": "ブラシ",
      "ko": "brush",
      "vi": "brush",
      "id": "brush"
    },
    "pos": "noun",
    "ex": "ブラシについて考える"
  },
  {
    "id": "V2841",
    "w": "マスカラ",
    "r": "ますから",
    "m": {
      "en": "mascara",
      "zh-TW": "マスカラ",
      "zh-CN": "マスカラ",
      "ko": "mascara",
      "vi": "mascara",
      "id": "mascara"
    },
    "pos": "noun",
    "ex": "マスカラについて考える"
  },
  {
    "id": "V2842",
    "w": "ファンデーション",
    "r": "ふぁんでーしょん",
    "m": {
      "en": "foundation",
      "zh-TW": "ファンデーション",
      "zh-CN": "ファンデーション",
      "ko": "foundation",
      "vi": "foundation",
      "id": "foundation"
    },
    "pos": "noun",
    "ex": "ファンデーションについて考える"
  },
  {
    "id": "V2843",
    "w": "蝶",
    "r": "ちょう",
    "m": {
      "en": "butterfly",
      "zh-TW": "蝶",
      "zh-CN": "蝶",
      "ko": "butterfly",
      "vi": "butterfly",
      "id": "butterfly"
    },
    "pos": "verb-godan",
    "ex": "蝶ことにする"
  },
  {
    "id": "V2844",
    "w": "蜂",
    "r": "はち",
    "m": {
      "en": "bee",
      "zh-TW": "蜂",
      "zh-CN": "蜂",
      "ko": "bee",
      "vi": "bee",
      "id": "bee"
    },
    "pos": "noun",
    "ex": "蜂について考える"
  },
  {
    "id": "V2845",
    "w": "蟻",
    "r": "あり",
    "m": {
      "en": "ant",
      "zh-TW": "蟻",
      "zh-CN": "蟻",
      "ko": "ant",
      "vi": "ant",
      "id": "ant"
    },
    "pos": "noun",
    "ex": "蟻について考える"
  },
  {
    "id": "V2846",
    "w": "羊",
    "r": "ひつじ",
    "m": {
      "en": "sheep",
      "zh-TW": "羊",
      "zh-CN": "羊",
      "ko": "sheep",
      "vi": "sheep",
      "id": "sheep"
    },
    "pos": "noun",
    "ex": "羊について考える"
  },
  {
    "id": "V2847",
    "w": "鶏",
    "r": "にわとり",
    "m": {
      "en": "chicken",
      "zh-TW": "鶏",
      "zh-CN": "鶏",
      "ko": "chicken",
      "vi": "chicken",
      "id": "chicken"
    },
    "pos": "noun",
    "ex": "鶏について考える"
  },
  {
    "id": "V2848",
    "w": "ウサギ",
    "r": "うさぎ",
    "m": {
      "en": "rabbit",
      "zh-TW": "ウサギ",
      "zh-CN": "ウサギ",
      "ko": "rabbit",
      "vi": "rabbit",
      "id": "rabbit"
    },
    "pos": "noun",
    "ex": "ウサギについて考える"
  },
  {
    "id": "V2849",
    "w": "慣習",
    "r": "かんしゅう",
    "m": {
      "en": "custom",
      "zh-TW": "慣習",
      "zh-CN": "慣習",
      "ko": "custom",
      "vi": "custom",
      "id": "custom"
    },
    "pos": "verb-godan",
    "ex": "慣習ことにする"
  },
  {
    "id": "V2850",
    "w": "風習",
    "r": "ふうしゅう",
    "m": {
      "en": "custom",
      "zh-TW": "風習",
      "zh-CN": "風習",
      "ko": "custom",
      "vi": "custom",
      "id": "custom"
    },
    "pos": "verb-godan",
    "ex": "風習ことにする"
  },
  {
    "id": "V2851",
    "w": "地理",
    "r": "ちり",
    "m": {
      "en": "geography",
      "zh-TW": "地理",
      "zh-CN": "地理",
      "ko": "geography",
      "vi": "geography",
      "id": "geography"
    },
    "pos": "noun",
    "ex": "地理について考える"
  },
  {
    "id": "V2852",
    "w": "風土",
    "r": "ふうど",
    "m": {
      "en": "climate",
      "zh-TW": "風土",
      "zh-CN": "風土",
      "ko": "climate",
      "vi": "climate",
      "id": "climate"
    },
    "pos": "noun",
    "ex": "風土について考える"
  },
  {
    "id": "V2853",
    "w": "見晴らし",
    "r": "みはらし",
    "m": {
      "en": "view",
      "zh-TW": "見晴らし",
      "zh-CN": "見晴らし",
      "ko": "view",
      "vi": "view",
      "id": "view"
    },
    "pos": "noun",
    "ex": "見晴らしについて考える"
  },
  {
    "id": "V2854",
    "w": "人間関係",
    "r": "にんげんかんけい",
    "m": {
      "en": "human relations",
      "zh-TW": "人間関係",
      "zh-CN": "人間関係",
      "ko": "human relations",
      "vi": "human relations",
      "id": "human relations"
    },
    "pos": "i-adj",
    "ex": "とても人間関係と思う"
  },
  {
    "id": "V2855",
    "w": "対人",
    "r": "たいじん",
    "m": {
      "en": "interpersonal",
      "zh-TW": "対人",
      "zh-CN": "対人",
      "ko": "interpersonal",
      "vi": "interpersonal",
      "id": "interpersonal"
    },
    "pos": "noun",
    "ex": "対人について考える"
  },
  {
    "id": "V2856",
    "w": "社交",
    "r": "しゃこう",
    "m": {
      "en": "social",
      "zh-TW": "社交",
      "zh-CN": "社交",
      "ko": "social",
      "vi": "social",
      "id": "social"
    },
    "pos": "verb-godan",
    "ex": "社交ことにする"
  },
  {
    "id": "V2857",
    "w": "親交",
    "r": "しんこう",
    "m": {
      "en": "friendship",
      "zh-TW": "親交",
      "zh-CN": "親交",
      "ko": "friendship",
      "vi": "friendship",
      "id": "friendship"
    },
    "pos": "verb-godan",
    "ex": "親交ことにする"
  },
  {
    "id": "V2858",
    "w": "親睦",
    "r": "しんぼく",
    "m": {
      "en": "friendship",
      "zh-TW": "親睦",
      "zh-CN": "親睦",
      "ko": "friendship",
      "vi": "friendship",
      "id": "friendship"
    },
    "pos": "verb-godan",
    "ex": "親睦ことにする"
  },
  {
    "id": "V2859",
    "w": "交歓",
    "r": "こうかん",
    "m": {
      "en": "friendly exchange",
      "zh-TW": "交歓",
      "zh-CN": "交歓",
      "ko": "friendly exchange",
      "vi": "friendly exchange",
      "id": "friendly exchange"
    },
    "pos": "noun",
    "ex": "交歓について考える"
  },
  {
    "id": "V2860",
    "w": "歓迎",
    "r": "かんげい",
    "m": {
      "en": "welcome",
      "zh-TW": "歓迎",
      "zh-CN": "歓迎",
      "ko": "welcome",
      "vi": "welcome",
      "id": "welcome"
    },
    "pos": "i-adj",
    "ex": "とても歓迎と思う"
  },
  {
    "id": "V2861",
    "w": "別離",
    "r": "べつり",
    "m": {
      "en": "separation",
      "zh-TW": "別離",
      "zh-CN": "別離",
      "ko": "separation",
      "vi": "separation",
      "id": "separation"
    },
    "pos": "noun",
    "ex": "別離について考える"
  },
  {
    "id": "V2862",
    "w": "離別",
    "r": "りべつ",
    "m": {
      "en": "parting",
      "zh-TW": "離別",
      "zh-CN": "離別",
      "ko": "parting",
      "vi": "parting",
      "id": "parting"
    },
    "pos": "verb-godan",
    "ex": "離別ことにする"
  },
  {
    "id": "V2863",
    "w": "再会",
    "r": "さいかい",
    "m": {
      "en": "reunion",
      "zh-TW": "再会",
      "zh-CN": "再会",
      "ko": "reunion",
      "vi": "reunion",
      "id": "reunion"
    },
    "pos": "i-adj",
    "ex": "とても再会と思う"
  },
  {
    "id": "V2864",
    "w": "対面",
    "r": "たいめん",
    "m": {
      "en": "meeting",
      "zh-TW": "対面",
      "zh-CN": "対面",
      "ko": "meeting",
      "vi": "meeting",
      "id": "meeting"
    },
    "pos": "noun",
    "ex": "対面について考える"
  },
  {
    "id": "V2865",
    "w": "面会",
    "r": "めんかい",
    "m": {
      "en": "meeting",
      "zh-TW": "面会",
      "zh-CN": "面会",
      "ko": "meeting",
      "vi": "meeting",
      "id": "meeting"
    },
    "pos": "i-adj",
    "ex": "とても面会と思う"
  },
  {
    "id": "V2866",
    "w": "会見",
    "r": "かいけん",
    "m": {
      "en": "interview",
      "zh-TW": "会見",
      "zh-CN": "会見",
      "ko": "interview",
      "vi": "interview",
      "id": "interview"
    },
    "pos": "noun",
    "ex": "会見について考える"
  },
  {
    "id": "V2867",
    "w": "会談",
    "r": "かいだん",
    "m": {
      "en": "conference",
      "zh-TW": "会談",
      "zh-CN": "会談",
      "ko": "conference",
      "vi": "conference",
      "id": "conference"
    },
    "pos": "noun",
    "ex": "会談について考える"
  },
  {
    "id": "V2868",
    "w": "情緒",
    "r": "じょうちょ",
    "m": {
      "en": "emotion",
      "zh-TW": "情緒",
      "zh-CN": "情緒",
      "ko": "emotion",
      "vi": "emotion",
      "id": "emotion"
    },
    "pos": "noun",
    "ex": "情緒について考える"
  },
  {
    "id": "V2869",
    "w": "心情",
    "r": "しんじょう",
    "m": {
      "en": "sentiment",
      "zh-TW": "心情",
      "zh-CN": "心情",
      "ko": "sentiment",
      "vi": "sentiment",
      "id": "sentiment"
    },
    "pos": "verb-godan",
    "ex": "心情ことにする"
  },
  {
    "id": "V2870",
    "w": "精神",
    "r": "せいしん",
    "m": {
      "en": "spirit",
      "zh-TW": "精神",
      "zh-CN": "精神",
      "ko": "spirit",
      "vi": "spirit",
      "id": "spirit"
    },
    "pos": "noun",
    "ex": "精神について考える"
  },
  {
    "id": "V2871",
    "w": "感触",
    "r": "かんしょく",
    "m": {
      "en": "feel",
      "zh-TW": "感触",
      "zh-CN": "感触",
      "ko": "feel",
      "vi": "feel",
      "id": "feel"
    },
    "pos": "verb-godan",
    "ex": "感触ことにする"
  },
  {
    "id": "V2872",
    "w": "感性",
    "r": "かんせい",
    "m": {
      "en": "sensibility",
      "zh-TW": "感性",
      "zh-CN": "感性",
      "ko": "sensibility",
      "vi": "sensibility",
      "id": "sensibility"
    },
    "pos": "i-adj",
    "ex": "とても感性と思う"
  },
  {
    "id": "V2873",
    "w": "感受性",
    "r": "かんじゅせい",
    "m": {
      "en": "sensitivity",
      "zh-TW": "感受性",
      "zh-CN": "感受性",
      "ko": "sensitivity",
      "vi": "sensitivity",
      "id": "sensitivity"
    },
    "pos": "i-adj",
    "ex": "とても感受性と思う"
  },
  {
    "id": "V2874",
    "w": "鈍感",
    "r": "どんかん",
    "m": {
      "en": "insensitive",
      "zh-TW": "鈍感",
      "zh-CN": "鈍感",
      "ko": "insensitive",
      "vi": "insensitive",
      "id": "insensitive"
    },
    "pos": "noun",
    "ex": "鈍感について考える"
  },
  {
    "id": "V2875",
    "w": "過敏",
    "r": "かびん",
    "m": {
      "en": "oversensitive",
      "zh-TW": "過敏",
      "zh-CN": "過敏",
      "ko": "oversensitive",
      "vi": "oversensitive",
      "id": "oversensitive"
    },
    "pos": "noun",
    "ex": "過敏について考える"
  },
  {
    "id": "V2876",
    "w": "無感覚",
    "r": "むかんかく",
    "m": {
      "en": "numb",
      "zh-TW": "無感覚",
      "zh-CN": "無感覚",
      "ko": "numb",
      "vi": "numb",
      "id": "numb"
    },
    "pos": "verb-godan",
    "ex": "無感覚ことにする"
  },
  {
    "id": "V2877",
    "w": "麻痺",
    "r": "まひ",
    "m": {
      "en": "paralysis",
      "zh-TW": "麻痺",
      "zh-CN": "麻痺",
      "ko": "paralysis",
      "vi": "paralysis",
      "id": "paralysis"
    },
    "pos": "noun",
    "ex": "麻痺について考える"
  },
  {
    "id": "V2878",
    "w": "痺れ",
    "r": "しびれ",
    "m": {
      "en": "numbness",
      "zh-TW": "痺れ",
      "zh-CN": "痺れ",
      "ko": "numbness",
      "vi": "numbness",
      "id": "numbness"
    },
    "pos": "noun",
    "ex": "痺れについて考える"
  },
  {
    "id": "V2879",
    "w": "考慮",
    "r": "こうりょ",
    "m": {
      "en": "consideration",
      "zh-TW": "考慮",
      "zh-CN": "考慮",
      "ko": "consideration",
      "vi": "consideration",
      "id": "consideration"
    },
    "pos": "noun",
    "ex": "考慮について考える"
  },
  {
    "id": "V2880",
    "w": "熟慮",
    "r": "じゅくりょ",
    "m": {
      "en": "deliberation",
      "zh-TW": "熟慮",
      "zh-CN": "熟慮",
      "ko": "deliberation",
      "vi": "deliberation",
      "id": "deliberation"
    },
    "pos": "noun",
    "ex": "熟慮について考える"
  },
  {
    "id": "V2881",
    "w": "深慮",
    "r": "しんりょ",
    "m": {
      "en": "careful consideration",
      "zh-TW": "深慮",
      "zh-CN": "深慮",
      "ko": "careful consideration",
      "vi": "careful consideration",
      "id": "careful consideration"
    },
    "pos": "noun",
    "ex": "深慮について考える"
  },
  {
    "id": "V2882",
    "w": "懸念",
    "r": "けねん",
    "m": {
      "en": "concern",
      "zh-TW": "懸念",
      "zh-CN": "懸念",
      "ko": "concern",
      "vi": "concern",
      "id": "concern"
    },
    "pos": "noun",
    "ex": "懸念について考える"
  },
  {
    "id": "V2883",
    "w": "危惧",
    "r": "きぐ",
    "m": {
      "en": "fear",
      "zh-TW": "危惧",
      "zh-CN": "危惧",
      "ko": "fear",
      "vi": "fear",
      "id": "fear"
    },
    "pos": "verb-godan",
    "ex": "危惧ことにする"
  },
  {
    "id": "V2884",
    "w": "気がかり",
    "r": "きがかり",
    "m": {
      "en": "concern",
      "zh-TW": "気がかり",
      "zh-CN": "気がかり",
      "ko": "concern",
      "vi": "concern",
      "id": "concern"
    },
    "pos": "noun",
    "ex": "気がかりについて考える"
  },
  {
    "id": "V2885",
    "w": "憂慮",
    "r": "ゆうりょ",
    "m": {
      "en": "concern",
      "zh-TW": "憂慮",
      "zh-CN": "憂慮",
      "ko": "concern",
      "vi": "concern",
      "id": "concern"
    },
    "pos": "noun",
    "ex": "憂慮について考える"
  },
  {
    "id": "V2886",
    "w": "杞憂",
    "r": "きゆう",
    "m": {
      "en": "needless fear",
      "zh-TW": "杞憂",
      "zh-CN": "杞憂",
      "ko": "needless fear",
      "vi": "needless fear",
      "id": "needless fear"
    },
    "pos": "verb-godan",
    "ex": "杞憂ことにする"
  },
  {
    "id": "V2887",
    "w": "取り越し苦労",
    "r": "とりこしぐろう",
    "m": {
      "en": "needless worry",
      "zh-TW": "取り越し苦労",
      "zh-CN": "取り越し苦労",
      "ko": "needless worry",
      "vi": "needless worry",
      "id": "needless worry"
    },
    "pos": "verb-godan",
    "ex": "取り越し苦労ことにする"
  },
  {
    "id": "V2888",
    "w": "安堵",
    "r": "あんど",
    "m": {
      "en": "relief",
      "zh-TW": "安堵",
      "zh-CN": "安堵",
      "ko": "relief",
      "vi": "relief",
      "id": "relief"
    },
    "pos": "noun",
    "ex": "安堵について考える"
  },
  {
    "id": "V2889",
    "w": "一安心",
    "r": "ひとあんしん",
    "m": {
      "en": "relief",
      "zh-TW": "一安心",
      "zh-CN": "一安心",
      "ko": "relief",
      "vi": "relief",
      "id": "relief"
    },
    "pos": "noun",
    "ex": "一安心について考える"
  },
  {
    "id": "V2890",
    "w": "胸をなでおろす",
    "r": "むねをなでおろす",
    "m": {
      "en": "feel relieved",
      "zh-TW": "胸をなでおろす",
      "zh-CN": "胸をなでおろす",
      "ko": "feel relieved",
      "vi": "feel relieved",
      "id": "feel relieved"
    },
    "pos": "verb-godan",
    "ex": "胸をなでおろすことにする"
  },
  {
    "id": "V2891",
    "w": "自己紹介",
    "r": "じこしょうかい",
    "m": {
      "en": "self-introduction",
      "zh-TW": "自己紹介",
      "zh-CN": "自己紹介",
      "ko": "self-introduction",
      "vi": "self-introduction",
      "id": "self-introduction"
    },
    "pos": "i-adj",
    "ex": "とても自己紹介と思う"
  },
  {
    "id": "V2892",
    "w": "名刺交換",
    "r": "めいしこうかん",
    "m": {
      "en": "business card exchange",
      "zh-TW": "名刺交換",
      "zh-CN": "名刺交換",
      "ko": "business card exchange",
      "vi": "business card exchange",
      "id": "business card exchange"
    },
    "pos": "noun",
    "ex": "名刺交換について考える"
  },
  {
    "id": "V2893",
    "w": "お礼",
    "r": "おれい",
    "m": {
      "en": "thanks",
      "zh-TW": "お礼",
      "zh-CN": "お礼",
      "ko": "thanks",
      "vi": "thanks",
      "id": "thanks"
    },
    "pos": "i-adj",
    "ex": "とてもお礼と思う"
  },
  {
    "id": "V2894",
    "w": "お詫び",
    "r": "おわび",
    "m": {
      "en": "apology",
      "zh-TW": "お詫び",
      "zh-CN": "お詫び",
      "ko": "apology",
      "vi": "apology",
      "id": "apology"
    },
    "pos": "noun",
    "ex": "お詫びについて考える"
  },
  {
    "id": "V2895",
    "w": "お祝い",
    "r": "おいわい",
    "m": {
      "en": "celebration",
      "zh-TW": "お祝い",
      "zh-CN": "お祝い",
      "ko": "celebration",
      "vi": "celebration",
      "id": "celebration"
    },
    "pos": "i-adj",
    "ex": "とてもお祝いと思う"
  },
  {
    "id": "V2896",
    "w": "お悔やみ",
    "r": "おくやみ",
    "m": {
      "en": "condolence",
      "zh-TW": "お悔やみ",
      "zh-CN": "お悔やみ",
      "ko": "condolence",
      "vi": "condolence",
      "id": "condolence"
    },
    "pos": "noun",
    "ex": "お悔やみについて考える"
  },
  {
    "id": "V2897",
    "w": "お断り",
    "r": "おことわり",
    "m": {
      "en": "refusal",
      "zh-TW": "お断り",
      "zh-CN": "お断り",
      "ko": "refusal",
      "vi": "refusal",
      "id": "refusal"
    },
    "pos": "noun",
    "ex": "お断りについて考える"
  },
  {
    "id": "V2898",
    "w": "お願い",
    "r": "おねがい",
    "m": {
      "en": "request",
      "zh-TW": "お願い",
      "zh-CN": "お願い",
      "ko": "request",
      "vi": "request",
      "id": "request"
    },
    "pos": "i-adj",
    "ex": "とてもお願いと思う"
  },
  {
    "id": "V2899",
    "w": "お返事",
    "r": "おへんじ",
    "m": {
      "en": "reply",
      "zh-TW": "お返事",
      "zh-CN": "お返事",
      "ko": "reply",
      "vi": "reply",
      "id": "reply"
    },
    "pos": "noun",
    "ex": "お返事について考える"
  },
  {
    "id": "V2900",
    "w": "ご連絡",
    "r": "ごれんらく",
    "m": {
      "en": "contact",
      "zh-TW": "ご連絡",
      "zh-CN": "ご連絡",
      "ko": "contact",
      "vi": "contact",
      "id": "contact"
    },
    "pos": "verb-godan",
    "ex": "ご連絡ことにする"
  },
  {
    "id": "V2901",
    "w": "ご確認",
    "r": "ごかくにん",
    "m": {
      "en": "confirmation",
      "zh-TW": "ご確認",
      "zh-CN": "ご確認",
      "ko": "confirmation",
      "vi": "confirmation",
      "id": "confirmation"
    },
    "pos": "noun",
    "ex": "ご確認について考える"
  },
  {
    "id": "V2902",
    "w": "ご報告",
    "r": "ごほうこく",
    "m": {
      "en": "report",
      "zh-TW": "ご報告",
      "zh-CN": "ご報告",
      "ko": "report",
      "vi": "report",
      "id": "report"
    },
    "pos": "verb-godan",
    "ex": "ご報告ことにする"
  },
  {
    "id": "V2903",
    "w": "ご相談",
    "r": "ごそうだん",
    "m": {
      "en": "consultation",
      "zh-TW": "ご相談",
      "zh-CN": "ご相談",
      "ko": "consultation",
      "vi": "consultation",
      "id": "consultation"
    },
    "pos": "noun",
    "ex": "ご相談について考える"
  },
  {
    "id": "V2904",
    "w": "ご質問",
    "r": "ごしつもん",
    "m": {
      "en": "question",
      "zh-TW": "ご質問",
      "zh-CN": "ご質問",
      "ko": "question",
      "vi": "question",
      "id": "question"
    },
    "pos": "noun",
    "ex": "ご質問について考える"
  },
  {
    "id": "V2905",
    "w": "ご回答",
    "r": "ごかいとう",
    "m": {
      "en": "answer",
      "zh-TW": "ご回答",
      "zh-CN": "ご回答",
      "ko": "answer",
      "vi": "answer",
      "id": "answer"
    },
    "pos": "verb-godan",
    "ex": "ご回答ことにする"
  },
  {
    "id": "V2906",
    "w": "ご検討",
    "r": "ごけんとう",
    "m": {
      "en": "consideration",
      "zh-TW": "ご検討",
      "zh-CN": "ご検討",
      "ko": "consideration",
      "vi": "consideration",
      "id": "consideration"
    },
    "pos": "verb-godan",
    "ex": "ご検討ことにする"
  },
  {
    "id": "V2907",
    "w": "本日",
    "r": "ほんじつ",
    "m": {
      "en": "today",
      "zh-TW": "本日",
      "zh-CN": "本日",
      "ko": "today",
      "vi": "today",
      "id": "today"
    },
    "pos": "verb-godan",
    "ex": "本日ことにする"
  },
  {
    "id": "V2908",
    "w": "翌日",
    "r": "よくじつ",
    "m": {
      "en": "next day",
      "zh-TW": "翌日",
      "zh-CN": "翌日",
      "ko": "next day",
      "vi": "next day",
      "id": "next day"
    },
    "pos": "verb-godan",
    "ex": "翌日ことにする"
  },
  {
    "id": "V2909",
    "w": "前日",
    "r": "ぜんじつ",
    "m": {
      "en": "previous day",
      "zh-TW": "前日",
      "zh-CN": "前日",
      "ko": "previous day",
      "vi": "previous day",
      "id": "previous day"
    },
    "pos": "verb-godan",
    "ex": "前日ことにする"
  },
  {
    "id": "V2910",
    "w": "当日",
    "r": "とうじつ",
    "m": {
      "en": "that day",
      "zh-TW": "当日",
      "zh-CN": "当日",
      "ko": "that day",
      "vi": "that day",
      "id": "that day"
    },
    "pos": "verb-godan",
    "ex": "当日ことにする"
  },
  {
    "id": "V2911",
    "w": "数日",
    "r": "すうじつ",
    "m": {
      "en": "several days",
      "zh-TW": "数日",
      "zh-CN": "数日",
      "ko": "several days",
      "vi": "several days",
      "id": "several days"
    },
    "pos": "verb-godan",
    "ex": "数日ことにする"
  },
  {
    "id": "V2912",
    "w": "連日",
    "r": "れんじつ",
    "m": {
      "en": "consecutive days",
      "zh-TW": "連日",
      "zh-CN": "連日",
      "ko": "consecutive days",
      "vi": "consecutive days",
      "id": "consecutive days"
    },
    "pos": "verb-godan",
    "ex": "連日ことにする"
  },
  {
    "id": "V2913",
    "w": "月末",
    "r": "げつまつ",
    "m": {
      "en": "end of month",
      "zh-TW": "月末",
      "zh-CN": "月末",
      "ko": "end of month",
      "vi": "end of month",
      "id": "end of month"
    },
    "pos": "verb-godan",
    "ex": "月末ことにする"
  },
  {
    "id": "V2914",
    "w": "年末",
    "r": "ねんまつ",
    "m": {
      "en": "year end",
      "zh-TW": "年末",
      "zh-CN": "年末",
      "ko": "year end",
      "vi": "year end",
      "id": "year end"
    },
    "pos": "verb-godan",
    "ex": "年末ことにする"
  },
  {
    "id": "V2915",
    "w": "年始",
    "r": "ねんし",
    "m": {
      "en": "new year",
      "zh-TW": "年始",
      "zh-CN": "年始",
      "ko": "new year",
      "vi": "new year",
      "id": "new year"
    },
    "pos": "noun",
    "ex": "年始について考える"
  },
  {
    "id": "V2916",
    "w": "年度",
    "r": "ねんど",
    "m": {
      "en": "fiscal year",
      "zh-TW": "年度",
      "zh-CN": "年度",
      "ko": "fiscal year",
      "vi": "fiscal year",
      "id": "fiscal year"
    },
    "pos": "noun",
    "ex": "年度について考える"
  },
  {
    "id": "V2917",
    "w": "現地",
    "r": "げんち",
    "m": {
      "en": "local",
      "zh-TW": "現地",
      "zh-CN": "現地",
      "ko": "local",
      "vi": "local",
      "id": "local"
    },
    "pos": "noun",
    "ex": "現地について考える"
  },
  {
    "id": "V2918",
    "w": "開催地",
    "r": "かいさいち",
    "m": {
      "en": "venue",
      "zh-TW": "開催地",
      "zh-CN": "開催地",
      "ko": "venue",
      "vi": "venue",
      "id": "venue"
    },
    "pos": "noun",
    "ex": "開催地について考える"
  },
  {
    "id": "V2919",
    "w": "目的地",
    "r": "もくてきち",
    "m": {
      "en": "destination",
      "zh-TW": "目的地",
      "zh-CN": "目的地",
      "ko": "destination",
      "vi": "destination",
      "id": "destination"
    },
    "pos": "noun",
    "ex": "目的地について考える"
  },
  {
    "id": "V2920",
    "w": "出発地",
    "r": "しゅっぱつち",
    "m": {
      "en": "departure point",
      "zh-TW": "出発地",
      "zh-CN": "出発地",
      "ko": "departure point",
      "vi": "departure point",
      "id": "departure point"
    },
    "pos": "noun",
    "ex": "出発地について考える"
  },
  {
    "id": "V2921",
    "w": "到着地",
    "r": "とうちゃくち",
    "m": {
      "en": "arrival point",
      "zh-TW": "到着地",
      "zh-CN": "到着地",
      "ko": "arrival point",
      "vi": "arrival point",
      "id": "arrival point"
    },
    "pos": "noun",
    "ex": "到着地について考える"
  },
  {
    "id": "V2922",
    "w": "経由地",
    "r": "けいゆち",
    "m": {
      "en": "transit point",
      "zh-TW": "経由地",
      "zh-CN": "経由地",
      "ko": "transit point",
      "vi": "transit point",
      "id": "transit point"
    },
    "pos": "noun",
    "ex": "経由地について考える"
  },
  {
    "id": "V2923",
    "w": "中継地",
    "r": "ちゅうけいち",
    "m": {
      "en": "relay point",
      "zh-TW": "中継地",
      "zh-CN": "中継地",
      "ko": "relay point",
      "vi": "relay point",
      "id": "relay point"
    },
    "pos": "noun",
    "ex": "中継地について考える"
  },
  {
    "id": "V2924",
    "w": "集合場所",
    "r": "しゅうごうばしょ",
    "m": {
      "en": "meeting place",
      "zh-TW": "集合場所",
      "zh-CN": "集合場所",
      "ko": "meeting place",
      "vi": "meeting place",
      "id": "meeting place"
    },
    "pos": "noun",
    "ex": "集合場所について考える"
  },
  {
    "id": "V2925",
    "w": "待ち合わせ",
    "r": "まちあわせ",
    "m": {
      "en": "meeting",
      "zh-TW": "待ち合わせ",
      "zh-CN": "待ち合わせ",
      "ko": "meeting",
      "vi": "meeting",
      "id": "meeting"
    },
    "pos": "noun",
    "ex": "待ち合わせについて考える"
  },
  {
    "id": "V2926",
    "w": "非常口",
    "r": "ひじょうぐち",
    "m": {
      "en": "emergency exit",
      "zh-TW": "非常口",
      "zh-CN": "非常口",
      "ko": "emergency exit",
      "vi": "emergency exit",
      "id": "emergency exit"
    },
    "pos": "noun",
    "ex": "非常口について考える"
  },
  {
    "id": "V2927",
    "w": "案内所",
    "r": "あんないじょ",
    "m": {
      "en": "information desk",
      "zh-TW": "案内所",
      "zh-CN": "案内所",
      "ko": "information desk",
      "vi": "information desk",
      "id": "information desk"
    },
    "pos": "noun",
    "ex": "案内所について考える"
  },
  {
    "id": "V2928",
    "w": "人数",
    "r": "にんずう",
    "m": {
      "en": "number of people",
      "zh-TW": "人数",
      "zh-CN": "人数",
      "ko": "number of people",
      "vi": "number of people",
      "id": "number of people"
    },
    "pos": "verb-godan",
    "ex": "人数ことにする"
  },
  {
    "id": "V2929",
    "w": "個数",
    "r": "こすう",
    "m": {
      "en": "number of items",
      "zh-TW": "個数",
      "zh-CN": "個数",
      "ko": "number of items",
      "vi": "number of items",
      "id": "number of items"
    },
    "pos": "verb-godan",
    "ex": "個数ことにする"
  },
  {
    "id": "V2930",
    "w": "回数",
    "r": "かいすう",
    "m": {
      "en": "number of times",
      "zh-TW": "回数",
      "zh-CN": "回数",
      "ko": "number of times",
      "vi": "number of times",
      "id": "number of times"
    },
    "pos": "verb-godan",
    "ex": "回数ことにする"
  },
  {
    "id": "V2931",
    "w": "件数",
    "r": "けんすう",
    "m": {
      "en": "number of cases",
      "zh-TW": "件数",
      "zh-CN": "件数",
      "ko": "number of cases",
      "vi": "number of cases",
      "id": "number of cases"
    },
    "pos": "verb-godan",
    "ex": "件数ことにする"
  },
  {
    "id": "V2932",
    "w": "部数",
    "r": "ぶすう",
    "m": {
      "en": "number of copies",
      "zh-TW": "部数",
      "zh-CN": "部数",
      "ko": "number of copies",
      "vi": "number of copies",
      "id": "number of copies"
    },
    "pos": "verb-godan",
    "ex": "部数ことにする"
  },
  {
    "id": "V2933",
    "w": "本数",
    "r": "ほんすう",
    "m": {
      "en": "number of long objects",
      "zh-TW": "本数",
      "zh-CN": "本数",
      "ko": "number of long objects",
      "vi": "number of long objects",
      "id": "number of long objects"
    },
    "pos": "verb-godan",
    "ex": "本数ことにする"
  },
  {
    "id": "V2934",
    "w": "枚数",
    "r": "まいすう",
    "m": {
      "en": "number of flat objects",
      "zh-TW": "枚数",
      "zh-CN": "枚数",
      "ko": "number of flat objects",
      "vi": "number of flat objects",
      "id": "number of flat objects"
    },
    "pos": "verb-godan",
    "ex": "枚数ことにする"
  },
  {
    "id": "V2935",
    "w": "台数",
    "r": "だいすう",
    "m": {
      "en": "number of machines",
      "zh-TW": "台数",
      "zh-CN": "台数",
      "ko": "number of machines",
      "vi": "number of machines",
      "id": "number of machines"
    },
    "pos": "verb-godan",
    "ex": "台数ことにする"
  },
  {
    "id": "V2936",
    "w": "総数",
    "r": "そうすう",
    "m": {
      "en": "total number",
      "zh-TW": "総数",
      "zh-CN": "総数",
      "ko": "total number",
      "vi": "total number",
      "id": "total number"
    },
    "pos": "verb-godan",
    "ex": "総数ことにする"
  },
  {
    "id": "V2937",
    "w": "合計",
    "r": "ごうけい",
    "m": {
      "en": "total",
      "zh-TW": "合計",
      "zh-CN": "合計",
      "ko": "total",
      "vi": "total",
      "id": "total"
    },
    "pos": "i-adj",
    "ex": "とても合計と思う"
  },
  {
    "id": "V2938",
    "w": "小計",
    "r": "しょうけい",
    "m": {
      "en": "subtotal",
      "zh-TW": "小計",
      "zh-CN": "小計",
      "ko": "subtotal",
      "vi": "subtotal",
      "id": "subtotal"
    },
    "pos": "i-adj",
    "ex": "とても小計と思う"
  },
  {
    "id": "V2939",
    "w": "上限",
    "r": "じょうげん",
    "m": {
      "en": "upper limit",
      "zh-TW": "上限",
      "zh-CN": "上限",
      "ko": "upper limit",
      "vi": "upper limit",
      "id": "upper limit"
    },
    "pos": "noun",
    "ex": "上限について考える"
  },
  {
    "id": "V2940",
    "w": "下限",
    "r": "かげん",
    "m": {
      "en": "lower limit",
      "zh-TW": "下限",
      "zh-CN": "下限",
      "ko": "lower limit",
      "vi": "lower limit",
      "id": "lower limit"
    },
    "pos": "noun",
    "ex": "下限について考える"
  },
  {
    "id": "V2941",
    "w": "実情",
    "r": "じつじょう",
    "m": {
      "en": "actual situation",
      "zh-TW": "実情",
      "zh-CN": "実情",
      "ko": "actual situation",
      "vi": "actual situation",
      "id": "actual situation"
    },
    "pos": "verb-godan",
    "ex": "実情ことにする"
  },
  {
    "id": "V2942",
    "w": "基準",
    "r": "きじゅん",
    "m": {
      "en": "standard",
      "zh-TW": "基準",
      "zh-CN": "基準",
      "ko": "standard",
      "vi": "standard",
      "id": "standard"
    },
    "pos": "noun",
    "ex": "基準について考える"
  },
  {
    "id": "V2943",
    "w": "規格",
    "r": "きかく",
    "m": {
      "en": "standard",
      "zh-TW": "規格",
      "zh-CN": "規格",
      "ko": "standard",
      "vi": "standard",
      "id": "standard"
    },
    "pos": "verb-godan",
    "ex": "規格ことにする"
  },
  {
    "id": "V2944",
    "w": "仕様",
    "r": "しよう",
    "m": {
      "en": "specification",
      "zh-TW": "仕様",
      "zh-CN": "仕様",
      "ko": "specification",
      "vi": "specification",
      "id": "specification"
    },
    "pos": "verb-godan",
    "ex": "仕様ことにする"
  },
  {
    "id": "V2945",
    "w": "性能",
    "r": "せいのう",
    "m": {
      "en": "performance",
      "zh-TW": "性能",
      "zh-CN": "性能",
      "ko": "performance",
      "vi": "performance",
      "id": "performance"
    },
    "pos": "verb-godan",
    "ex": "性能ことにする"
  },
  {
    "id": "V2946",
    "w": "催し",
    "r": "もよおし",
    "m": {
      "en": "event",
      "zh-TW": "催し",
      "zh-CN": "催し",
      "ko": "event",
      "vi": "event",
      "id": "event"
    },
    "pos": "noun",
    "ex": "催しについて考える"
  },
  {
    "id": "V2947",
    "w": "イベント",
    "r": "いべんと",
    "m": {
      "en": "event",
      "zh-TW": "イベント",
      "zh-CN": "イベント",
      "ko": "event",
      "vi": "event",
      "id": "event"
    },
    "pos": "adverb",
    "ex": "イベント考える"
  },
  {
    "id": "V2948",
    "w": "式典",
    "r": "しきてん",
    "m": {
      "en": "ceremony",
      "zh-TW": "式典",
      "zh-CN": "式典",
      "ko": "ceremony",
      "vi": "ceremony",
      "id": "ceremony"
    },
    "pos": "noun",
    "ex": "式典について考える"
  },
  {
    "id": "V2949",
    "w": "儀式",
    "r": "ぎしき",
    "m": {
      "en": "ceremony",
      "zh-TW": "儀式",
      "zh-CN": "儀式",
      "ko": "ceremony",
      "vi": "ceremony",
      "id": "ceremony"
    },
    "pos": "noun",
    "ex": "儀式について考える"
  },
  {
    "id": "V2950",
    "w": "祝祭",
    "r": "しゅくさい",
    "m": {
      "en": "festival",
      "zh-TW": "祝祭",
      "zh-CN": "祝祭",
      "ko": "festival",
      "vi": "festival",
      "id": "festival"
    },
    "pos": "i-adj",
    "ex": "とても祝祭と思う"
  },
  {
    "id": "V2951",
    "w": "祝賀",
    "r": "しゅくが",
    "m": {
      "en": "celebration",
      "zh-TW": "祝賀",
      "zh-CN": "祝賀",
      "ko": "celebration",
      "vi": "celebration",
      "id": "celebration"
    },
    "pos": "noun",
    "ex": "祝賀について考える"
  },
  {
    "id": "V2952",
    "w": "開会",
    "r": "かいかい",
    "m": {
      "en": "opening",
      "zh-TW": "開会",
      "zh-CN": "開会",
      "ko": "opening",
      "vi": "opening",
      "id": "opening"
    },
    "pos": "i-adj",
    "ex": "とても開会と思う"
  },
  {
    "id": "V2953",
    "w": "閉会",
    "r": "へいかい",
    "m": {
      "en": "closing",
      "zh-TW": "閉会",
      "zh-CN": "閉会",
      "ko": "closing",
      "vi": "closing",
      "id": "closing"
    },
    "pos": "i-adj",
    "ex": "とても閉会と思う"
  },
  {
    "id": "V2954",
    "w": "開催",
    "r": "かいさい",
    "m": {
      "en": "holding",
      "zh-TW": "開催",
      "zh-CN": "開催",
      "ko": "holding",
      "vi": "holding",
      "id": "holding"
    },
    "pos": "i-adj",
    "ex": "とても開催と思う"
  },
  {
    "id": "V2955",
    "w": "主催",
    "r": "しゅさい",
    "m": {
      "en": "hosting",
      "zh-TW": "主催",
      "zh-CN": "主催",
      "ko": "hosting",
      "vi": "hosting",
      "id": "hosting"
    },
    "pos": "i-adj",
    "ex": "とても主催と思う"
  },
  {
    "id": "V2956",
    "w": "出席",
    "r": "しゅっせき",
    "m": {
      "en": "attendance",
      "zh-TW": "出席",
      "zh-CN": "出席",
      "ko": "attendance",
      "vi": "attendance",
      "id": "attendance"
    },
    "pos": "noun",
    "ex": "出席について考える"
  },
  {
    "id": "V2957",
    "w": "出演",
    "r": "しゅつえん",
    "m": {
      "en": "appearance",
      "zh-TW": "出演",
      "zh-CN": "出演",
      "ko": "appearance",
      "vi": "appearance",
      "id": "appearance"
    },
    "pos": "noun",
    "ex": "出演について考える"
  },
  {
    "id": "V2958",
    "w": "出場",
    "r": "しゅつじょう",
    "m": {
      "en": "participation",
      "zh-TW": "出場",
      "zh-CN": "出場",
      "ko": "participation",
      "vi": "participation",
      "id": "participation"
    },
    "pos": "verb-godan",
    "ex": "出場ことにする"
  },
  {
    "id": "V2959",
    "w": "懇親",
    "r": "こんしん",
    "m": {
      "en": "friendship",
      "zh-TW": "懇親",
      "zh-CN": "懇親",
      "ko": "friendship",
      "vi": "friendship",
      "id": "friendship"
    },
    "pos": "noun",
    "ex": "懇親について考える"
  },
  {
    "id": "V2960",
    "w": "仲介",
    "r": "ちゅうかい",
    "m": {
      "en": "mediation",
      "zh-TW": "仲介",
      "zh-CN": "仲介",
      "ko": "mediation",
      "vi": "mediation",
      "id": "mediation"
    },
    "pos": "i-adj",
    "ex": "とても仲介と思う"
  },
  {
    "id": "V2961",
    "w": "斡旋",
    "r": "あっせん",
    "m": {
      "en": "mediation",
      "zh-TW": "斡旋",
      "zh-CN": "斡旋",
      "ko": "mediation",
      "vi": "mediation",
      "id": "mediation"
    },
    "pos": "noun",
    "ex": "斡旋について考える"
  },
  {
    "id": "V2962",
    "w": "手助け",
    "r": "てだすけ",
    "m": {
      "en": "help",
      "zh-TW": "手助け",
      "zh-CN": "手助け",
      "ko": "help",
      "vi": "help",
      "id": "help"
    },
    "pos": "noun",
    "ex": "手助けについて考える"
  },
  {
    "id": "V2963",
    "w": "支援",
    "r": "しえん",
    "m": {
      "en": "support",
      "zh-TW": "支援",
      "zh-CN": "支援",
      "ko": "support",
      "vi": "support",
      "id": "support"
    },
    "pos": "noun",
    "ex": "支援について考える"
  },
  {
    "id": "V2964",
    "w": "作法",
    "r": "さほう",
    "m": {
      "en": "manners",
      "zh-TW": "作法",
      "zh-CN": "作法",
      "ko": "manners",
      "vi": "manners",
      "id": "manners"
    },
    "pos": "verb-godan",
    "ex": "作法ことにする"
  },
  {
    "id": "V2965",
    "w": "礼儀",
    "r": "れいぎ",
    "m": {
      "en": "etiquette",
      "zh-TW": "礼儀",
      "zh-CN": "礼儀",
      "ko": "etiquette",
      "vi": "etiquette",
      "id": "etiquette"
    },
    "pos": "noun",
    "ex": "礼儀について考える"
  },
  {
    "id": "V2966",
    "w": "礼節",
    "r": "れいせつ",
    "m": {
      "en": "courtesy",
      "zh-TW": "礼節",
      "zh-CN": "礼節",
      "ko": "courtesy",
      "vi": "courtesy",
      "id": "courtesy"
    },
    "pos": "verb-godan",
    "ex": "礼節ことにする"
  },
  {
    "id": "V2967",
    "w": "マナー",
    "r": "まなー",
    "m": {
      "en": "manners",
      "zh-TW": "マナー",
      "zh-CN": "マナー",
      "ko": "manners",
      "vi": "manners",
      "id": "manners"
    },
    "pos": "noun",
    "ex": "マナーについて考える"
  },
  {
    "id": "V2968",
    "w": "エチケット",
    "r": "えちけっと",
    "m": {
      "en": "etiquette",
      "zh-TW": "エチケット",
      "zh-CN": "エチケット",
      "ko": "etiquette",
      "vi": "etiquette",
      "id": "etiquette"
    },
    "pos": "noun",
    "ex": "エチケットについて考える"
  },
  {
    "id": "V2969",
    "w": "常識",
    "r": "じょうしき",
    "m": {
      "en": "common sense",
      "zh-TW": "常識",
      "zh-CN": "常識",
      "ko": "common sense",
      "vi": "common sense",
      "id": "common sense"
    },
    "pos": "noun",
    "ex": "常識について考える"
  },
  {
    "id": "V2970",
    "w": "良識",
    "r": "りょうしき",
    "m": {
      "en": "good sense",
      "zh-TW": "良識",
      "zh-CN": "良識",
      "ko": "good sense",
      "vi": "good sense",
      "id": "good sense"
    },
    "pos": "noun",
    "ex": "良識について考える"
  },
  {
    "id": "V2971",
    "w": "職種",
    "r": "しょくしゅ",
    "m": {
      "en": "job type",
      "zh-TW": "職種",
      "zh-CN": "職種",
      "ko": "job type",
      "vi": "job type",
      "id": "job type"
    },
    "pos": "noun",
    "ex": "職種について考える"
  },
  {
    "id": "V2972",
    "w": "業種",
    "r": "ぎょうしゅ",
    "m": {
      "en": "industry",
      "zh-TW": "業種",
      "zh-CN": "業種",
      "ko": "industry",
      "vi": "industry",
      "id": "industry"
    },
    "pos": "noun",
    "ex": "業種について考える"
  },
  {
    "id": "V2973",
    "w": "業界",
    "r": "ぎょうかい",
    "m": {
      "en": "industry",
      "zh-TW": "業界",
      "zh-CN": "業界",
      "ko": "industry",
      "vi": "industry",
      "id": "industry"
    },
    "pos": "i-adj",
    "ex": "とても業界と思う"
  },
  {
    "id": "V2974",
    "w": "技術者",
    "r": "ぎじゅつしゃ",
    "m": {
      "en": "engineer",
      "zh-TW": "技術者",
      "zh-CN": "技術者",
      "ko": "engineer",
      "vi": "engineer",
      "id": "engineer"
    },
    "pos": "noun",
    "ex": "技術者について考える"
  },
  {
    "id": "V2975",
    "w": "研究者",
    "r": "けんきゅうしゃ",
    "m": {
      "en": "researcher",
      "zh-TW": "研究者",
      "zh-CN": "研究者",
      "ko": "researcher",
      "vi": "researcher",
      "id": "researcher"
    },
    "pos": "noun",
    "ex": "研究者について考える"
  },
  {
    "id": "V2976",
    "w": "事務員",
    "r": "じむいん",
    "m": {
      "en": "clerk",
      "zh-TW": "事務員",
      "zh-CN": "事務員",
      "ko": "clerk",
      "vi": "clerk",
      "id": "clerk"
    },
    "pos": "noun",
    "ex": "事務員について考える"
  },
  {
    "id": "V2977",
    "w": "接客",
    "r": "せっきゃく",
    "m": {
      "en": "customer service",
      "zh-TW": "接客",
      "zh-CN": "接客",
      "ko": "customer service",
      "vi": "customer service",
      "id": "customer service"
    },
    "pos": "verb-godan",
    "ex": "接客ことにする"
  },
  {
    "id": "V2978",
    "w": "製造",
    "r": "せいぞう",
    "m": {
      "en": "manufacturing",
      "zh-TW": "製造",
      "zh-CN": "製造",
      "ko": "manufacturing",
      "vi": "manufacturing",
      "id": "manufacturing"
    },
    "pos": "verb-godan",
    "ex": "製造ことにする"
  },
  {
    "id": "V2979",
    "w": "開発",
    "r": "かいはつ",
    "m": {
      "en": "development",
      "zh-TW": "開発",
      "zh-CN": "開発",
      "ko": "development",
      "vi": "development",
      "id": "development"
    },
    "pos": "verb-godan",
    "ex": "開発ことにする",
    "syn": [
      "発展させる",
      "創出する",
      "作る"
    ]
  },
  {
    "id": "V2980",
    "w": "設計",
    "r": "せっけい",
    "m": {
      "en": "design",
      "zh-TW": "設計",
      "zh-CN": "設計",
      "ko": "design",
      "vi": "design",
      "id": "design"
    },
    "pos": "i-adj",
    "ex": "とても設計と思う"
  },
  {
    "id": "V2981",
    "w": "宅配",
    "r": "たくはい",
    "m": {
      "en": "delivery",
      "zh-TW": "宅配",
      "zh-CN": "宅配",
      "ko": "delivery",
      "vi": "delivery",
      "id": "delivery"
    },
    "pos": "i-adj",
    "ex": "とても宅配と思う"
  },
  {
    "id": "V2982",
    "w": "送付",
    "r": "そうふ",
    "m": {
      "en": "sending",
      "zh-TW": "送付",
      "zh-CN": "送付",
      "ko": "sending",
      "vi": "sending",
      "id": "sending"
    },
    "pos": "noun",
    "ex": "送付について考える"
  },
  {
    "id": "V2983",
    "w": "返送",
    "r": "へんそう",
    "m": {
      "en": "return",
      "zh-TW": "返送",
      "zh-CN": "返送",
      "ko": "return",
      "vi": "return",
      "id": "return"
    },
    "pos": "verb-godan",
    "ex": "返送ことにする"
  },
  {
    "id": "V2984",
    "w": "転送",
    "r": "てんそう",
    "m": {
      "en": "forwarding",
      "zh-TW": "転送",
      "zh-CN": "転送",
      "ko": "forwarding",
      "vi": "forwarding",
      "id": "forwarding"
    },
    "pos": "verb-godan",
    "ex": "転送ことにする"
  },
  {
    "id": "V2985",
    "w": "取引",
    "r": "とりひき",
    "m": {
      "en": "transaction",
      "zh-TW": "取引",
      "zh-CN": "取引",
      "ko": "transaction",
      "vi": "transaction",
      "id": "transaction"
    },
    "pos": "noun",
    "ex": "取引について考える"
  },
  {
    "id": "V2986",
    "w": "商談",
    "r": "しょうだん",
    "m": {
      "en": "business talk",
      "zh-TW": "商談",
      "zh-CN": "商談",
      "ko": "business talk",
      "vi": "business talk",
      "id": "business talk"
    },
    "pos": "noun",
    "ex": "商談について考える"
  },
  {
    "id": "V2987",
    "w": "交渉",
    "r": "こうしょう",
    "m": {
      "en": "negotiation",
      "zh-TW": "交渉",
      "zh-CN": "交渉",
      "ko": "negotiation",
      "vi": "negotiation",
      "id": "negotiation"
    },
    "pos": "verb-godan",
    "ex": "交渉ことにする"
  },
  {
    "id": "V2988",
    "w": "見積もり",
    "r": "みつもり",
    "m": {
      "en": "estimate",
      "zh-TW": "見積もり",
      "zh-CN": "見積もり",
      "ko": "estimate",
      "vi": "estimate",
      "id": "estimate"
    },
    "pos": "noun",
    "ex": "見積もりについて考える"
  },
  {
    "id": "V2989",
    "w": "発注",
    "r": "はっちゅう",
    "m": {
      "en": "ordering",
      "zh-TW": "発注",
      "zh-CN": "発注",
      "ko": "ordering",
      "vi": "ordering",
      "id": "ordering"
    },
    "pos": "verb-godan",
    "ex": "発注ことにする"
  },
  {
    "id": "V2990",
    "w": "受注",
    "r": "じゅちゅう",
    "m": {
      "en": "receiving order",
      "zh-TW": "受注",
      "zh-CN": "受注",
      "ko": "receiving order",
      "vi": "receiving order",
      "id": "receiving order"
    },
    "pos": "verb-godan",
    "ex": "受注ことにする"
  },
  {
    "id": "V2991",
    "w": "納品",
    "r": "のうひん",
    "m": {
      "en": "delivery",
      "zh-TW": "納品",
      "zh-CN": "納品",
      "ko": "delivery",
      "vi": "delivery",
      "id": "delivery"
    },
    "pos": "noun",
    "ex": "納品について考える"
  },
  {
    "id": "V2992",
    "w": "決済",
    "r": "けっさい",
    "m": {
      "en": "settlement",
      "zh-TW": "決済",
      "zh-CN": "決済",
      "ko": "settlement",
      "vi": "settlement",
      "id": "settlement"
    },
    "pos": "i-adj",
    "ex": "とても決済と思う"
  },
  {
    "id": "V2993",
    "w": "横になる",
    "r": "よこになる",
    "m": {
      "en": "to lie down",
      "zh-TW": "横になる",
      "zh-CN": "横になる",
      "ko": "to lie down",
      "vi": "to lie down",
      "id": "to lie down"
    },
    "pos": "verb-godan",
    "ex": "横になることにする"
  },
  {
    "id": "V2994",
    "w": "起き上がる",
    "r": "おきあがる",
    "m": {
      "en": "to get up",
      "zh-TW": "起き上がる",
      "zh-CN": "起き上がる",
      "ko": "to get up",
      "vi": "to get up",
      "id": "to get up"
    },
    "pos": "verb-godan",
    "ex": "起き上がることにする"
  },
  {
    "id": "V2995",
    "w": "整理する",
    "r": "せいりする",
    "m": {
      "en": "to organize",
      "zh-TW": "整理する",
      "zh-CN": "整理する",
      "ko": "to organize",
      "vi": "to organize",
      "id": "to organize"
    },
    "pos": "verb-suru",
    "ex": "整理することが大切だ",
    "syn": [
      "片付ける",
      "整頓する",
      "分類する"
    ]
  },
  {
    "id": "V2996",
    "w": "ゴミを出す",
    "r": "ごみをだす",
    "m": {
      "en": "to take out garbage",
      "zh-TW": "ゴミを出す",
      "zh-CN": "ゴミを出す",
      "ko": "to take out garbage",
      "vi": "to take out garbage",
      "id": "to take out garbage"
    },
    "pos": "verb-godan",
    "ex": "ゴミを出すことにする"
  },
  {
    "id": "V2997",
    "w": "布団を敷く",
    "r": "ふとんをしく",
    "m": {
      "en": "to lay out futon",
      "zh-TW": "布団を敷く",
      "zh-CN": "布団を敷く",
      "ko": "to lay out futon",
      "vi": "to lay out futon",
      "id": "to lay out futon"
    },
    "pos": "verb-godan",
    "ex": "布団を敷くことにする"
  },
  {
    "id": "V2998",
    "w": "布団を畳む",
    "r": "ふとんをたたむ",
    "m": {
      "en": "to fold futon",
      "zh-TW": "布団を畳む",
      "zh-CN": "布団を畳む",
      "ko": "to fold futon",
      "vi": "to fold futon",
      "id": "to fold futon"
    },
    "pos": "verb-godan",
    "ex": "布団を畳むことにする"
  },
  {
    "id": "V2999",
    "w": "アイロンをかける",
    "r": "あいろんをかける",
    "m": {
      "en": "to iron",
      "zh-TW": "アイロンをかける",
      "zh-CN": "アイロンをかける",
      "ko": "to iron",
      "vi": "to iron",
      "id": "to iron"
    },
    "pos": "verb-ichidan",
    "ex": "アイロンをかけることにする"
  },
  {
    "id": "V3000",
    "w": "買い物する",
    "r": "かいものする",
    "m": {
      "en": "to shop",
      "zh-TW": "買い物する",
      "zh-CN": "買い物する",
      "ko": "to shop",
      "vi": "to shop",
      "id": "to shop"
    },
    "pos": "verb-suru",
    "ex": "買い物することが大切だ"
  },
  {
    "id": "V3001",
    "w": "支払う",
    "r": "しはらう",
    "m": {
      "en": "to pay",
      "zh-TW": "支払う",
      "zh-CN": "支払う",
      "ko": "to pay",
      "vi": "to pay",
      "id": "to pay"
    },
    "pos": "verb-godan",
    "ex": "支払うことにする"
  },
  {
    "id": "V3002",
    "w": "お釣りをもらう",
    "r": "おつりをもらう",
    "m": {
      "en": "to get change",
      "zh-TW": "お釣りをもらう",
      "zh-CN": "お釣りをもらう",
      "ko": "to get change",
      "vi": "to get change",
      "id": "to get change"
    },
    "pos": "verb-godan",
    "ex": "お釣りをもらうことにする"
  },
  {
    "id": "V3003",
    "w": "レシートをもらう",
    "r": "れしーとをもらう",
    "m": {
      "en": "to get receipt",
      "zh-TW": "レシートをもらう",
      "zh-CN": "レシートをもらう",
      "ko": "to get receipt",
      "vi": "to get receipt",
      "id": "to get receipt"
    },
    "pos": "verb-godan",
    "ex": "レシートをもらうことにする"
  },
  {
    "id": "V3004",
    "w": "試着する",
    "r": "しちゃくする",
    "m": {
      "en": "to try on",
      "zh-TW": "試着する",
      "zh-CN": "試着する",
      "ko": "to try on",
      "vi": "to try on",
      "id": "to try on"
    },
    "pos": "verb-suru",
    "ex": "試着することが大切だ"
  },
  {
    "id": "V3005",
    "w": "注文する",
    "r": "ちゅうもんする",
    "m": {
      "en": "to order",
      "zh-TW": "注文する",
      "zh-CN": "注文する",
      "ko": "to order",
      "vi": "to order",
      "id": "to order"
    },
    "pos": "verb-suru",
    "ex": "注文することが大切だ"
  },
  {
    "id": "V3006",
    "w": "予約する",
    "r": "よやくする",
    "m": {
      "en": "to reserve",
      "zh-TW": "予約する",
      "zh-CN": "予約する",
      "ko": "to reserve",
      "vi": "to reserve",
      "id": "to reserve"
    },
    "pos": "verb-suru",
    "ex": "予約することが大切だ"
  },
  {
    "id": "V3007",
    "w": "出かける",
    "r": "でかける",
    "m": {
      "en": "to go out",
      "zh-TW": "出かける",
      "zh-CN": "出かける",
      "ko": "to go out",
      "vi": "to go out",
      "id": "to go out"
    },
    "pos": "verb-ichidan",
    "ex": "出かけることにする"
  },
  {
    "id": "V3008",
    "w": "到着する",
    "r": "とうちゃくする",
    "m": {
      "en": "to arrive",
      "zh-TW": "到着する",
      "zh-CN": "到着する",
      "ko": "to arrive",
      "vi": "to arrive",
      "id": "to arrive"
    },
    "pos": "verb-suru",
    "ex": "到着することが大切だ"
  },
  {
    "id": "V3009",
    "w": "出発する",
    "r": "しゅっぱつする",
    "m": {
      "en": "to depart",
      "zh-TW": "出発する",
      "zh-CN": "出発する",
      "ko": "to depart",
      "vi": "to depart",
      "id": "to depart"
    },
    "pos": "verb-suru",
    "ex": "出発することが大切だ"
  },
  {
    "id": "V3010",
    "w": "歩いて行く",
    "r": "あるいていく",
    "m": {
      "en": "to walk to",
      "zh-TW": "歩いて行く",
      "zh-CN": "歩いて行く",
      "ko": "to walk to",
      "vi": "to walk to",
      "id": "to walk to"
    },
    "pos": "verb-godan",
    "ex": "歩いて行くことにする"
  },
  {
    "id": "V3011",
    "w": "車で行く",
    "r": "くるまでいく",
    "m": {
      "en": "to go by car",
      "zh-TW": "車で行く",
      "zh-CN": "車で行く",
      "ko": "to go by car",
      "vi": "to go by car",
      "id": "to go by car"
    },
    "pos": "verb-godan",
    "ex": "車で行くことにする"
  },
  {
    "id": "V3012",
    "w": "連絡する",
    "r": "れんらくする",
    "m": {
      "en": "to contact",
      "zh-TW": "連絡する",
      "zh-CN": "連絡する",
      "ko": "to contact",
      "vi": "to contact",
      "id": "to contact"
    },
    "pos": "verb-suru",
    "ex": "連絡することが大切だ"
  },
  {
    "id": "V3013",
    "w": "決心する",
    "r": "けっしんする",
    "m": {
      "en": "to decide",
      "zh-TW": "決心する",
      "zh-CN": "決心する",
      "ko": "to decide",
      "vi": "to decide",
      "id": "to decide"
    },
    "pos": "verb-suru",
    "ex": "決心することが大切だ"
  },
  {
    "id": "V3014",
    "w": "勉強する",
    "r": "べんきょうする",
    "m": {
      "en": "to study",
      "zh-TW": "勉強する",
      "zh-CN": "勉強する",
      "ko": "to study",
      "vi": "to study",
      "id": "to study"
    },
    "pos": "verb-suru",
    "ex": "勉強することが大切だ"
  },
  {
    "id": "V3015",
    "w": "練習する",
    "r": "れんしゅうする",
    "m": {
      "en": "to practice",
      "zh-TW": "練習する",
      "zh-CN": "練習する",
      "ko": "to practice",
      "vi": "to practice",
      "id": "to practice"
    },
    "pos": "verb-suru",
    "ex": "練習することが大切だ"
  },
  {
    "id": "V3016",
    "w": "復習する",
    "r": "ふくしゅうする",
    "m": {
      "en": "to review",
      "zh-TW": "復習する",
      "zh-CN": "復習する",
      "ko": "to review",
      "vi": "to review",
      "id": "to review"
    },
    "pos": "verb-suru",
    "ex": "復習することが大切だ"
  },
  {
    "id": "V3017",
    "w": "予習する",
    "r": "よしゅうする",
    "m": {
      "en": "to prepare",
      "zh-TW": "予習する",
      "zh-CN": "予習する",
      "ko": "to prepare",
      "vi": "to prepare",
      "id": "to prepare"
    },
    "pos": "verb-suru",
    "ex": "予習することが大切だ"
  },
  {
    "id": "V3018",
    "w": "暗記する",
    "r": "あんきする",
    "m": {
      "en": "to memorize",
      "zh-TW": "暗記する",
      "zh-CN": "暗記する",
      "ko": "to memorize",
      "vi": "to memorize",
      "id": "to memorize"
    },
    "pos": "verb-suru",
    "ex": "暗記することが大切だ"
  },
  {
    "id": "V3019",
    "w": "計算する",
    "r": "けいさんする",
    "m": {
      "en": "to calculate",
      "zh-TW": "計算する",
      "zh-CN": "計算する",
      "ko": "to calculate",
      "vi": "to calculate",
      "id": "to calculate"
    },
    "pos": "verb-suru",
    "ex": "計算することが大切だ"
  },
  {
    "id": "V3020",
    "w": "運動する",
    "r": "うんどうする",
    "m": {
      "en": "to exercise",
      "zh-TW": "運動する",
      "zh-CN": "運動する",
      "ko": "to exercise",
      "vi": "to exercise",
      "id": "to exercise"
    },
    "pos": "verb-suru",
    "ex": "運動することが大切だ"
  },
  {
    "id": "V3021",
    "w": "休憩する",
    "r": "きゅうけいする",
    "m": {
      "en": "to take a break",
      "zh-TW": "休憩する",
      "zh-CN": "休憩する",
      "ko": "to take a break",
      "vi": "to take a break",
      "id": "to take a break"
    },
    "pos": "verb-suru",
    "ex": "休憩することが大切だ"
  },
  {
    "id": "V3022",
    "w": "寝坊する",
    "r": "ねぼうする",
    "m": {
      "en": "to oversleep",
      "zh-TW": "寝坊する",
      "zh-CN": "寝坊する",
      "ko": "to oversleep",
      "vi": "to oversleep",
      "id": "to oversleep"
    },
    "pos": "verb-suru",
    "ex": "寝坊することが大切だ"
  },
  {
    "id": "V3023",
    "w": "風邪をひく",
    "r": "かぜをひく",
    "m": {
      "en": "to catch a cold",
      "zh-TW": "風邪をひく",
      "zh-CN": "風邪をひく",
      "ko": "to catch a cold",
      "vi": "to catch a cold",
      "id": "to catch a cold"
    },
    "pos": "verb-godan",
    "ex": "風邪をひくことにする"
  },
  {
    "id": "V3024",
    "w": "熱が出る",
    "r": "ねつがでる",
    "m": {
      "en": "to have a fever",
      "zh-TW": "熱が出る",
      "zh-CN": "熱が出る",
      "ko": "to have a fever",
      "vi": "to have a fever",
      "id": "to have a fever"
    },
    "pos": "verb-godan",
    "ex": "熱が出ることにする"
  },
  {
    "id": "V3025",
    "w": "薬を飲む",
    "r": "くすりをのむ",
    "m": {
      "en": "to take medicine",
      "zh-TW": "薬を飲む",
      "zh-CN": "薬を飲む",
      "ko": "to take medicine",
      "vi": "to take medicine",
      "id": "to take medicine"
    },
    "pos": "verb-godan",
    "ex": "薬を飲むことにする"
  },
  {
    "id": "V3026",
    "w": "病院に行く",
    "r": "びょういんにいく",
    "m": {
      "en": "to go to hospital",
      "zh-TW": "病院に行く",
      "zh-CN": "病院に行く",
      "ko": "to go to hospital",
      "vi": "to go to hospital",
      "id": "to go to hospital"
    },
    "pos": "verb-godan",
    "ex": "病院に行くことにする"
  },
  {
    "id": "V3027",
    "w": "診察を受ける",
    "r": "しんさつをうける",
    "m": {
      "en": "to see a doctor",
      "zh-TW": "診察を受ける",
      "zh-CN": "診察を受ける",
      "ko": "to see a doctor",
      "vi": "to see a doctor",
      "id": "to see a doctor"
    },
    "pos": "verb-ichidan",
    "ex": "診察を受けることにする"
  },
  {
    "id": "V3028",
    "w": "入院する",
    "r": "にゅういんする",
    "m": {
      "en": "to be hospitalized",
      "zh-TW": "入院する",
      "zh-CN": "入院する",
      "ko": "to be hospitalized",
      "vi": "to be hospitalized",
      "id": "to be hospitalized"
    },
    "pos": "verb-suru",
    "ex": "入院することが大切だ"
  },
  {
    "id": "V3029",
    "w": "つまらない",
    "r": "つまらない",
    "m": {
      "en": "boring",
      "zh-TW": "つまらない",
      "zh-CN": "つまらない",
      "ko": "boring",
      "vi": "boring",
      "id": "boring"
    },
    "pos": "i-adj",
    "ex": "とてもつまらないと思う"
  },
  {
    "id": "V3030",
    "w": "懐かしい",
    "r": "なつかしい",
    "m": {
      "en": "nostalgic",
      "zh-TW": "懐かしい",
      "zh-CN": "懐かしい",
      "ko": "nostalgic",
      "vi": "nostalgic",
      "id": "nostalgic"
    },
    "pos": "i-adj",
    "ex": "とても懐かしいと思う"
  },
  {
    "id": "V3031",
    "w": "羨ましい",
    "r": "うらやましい",
    "m": {
      "en": "envious",
      "zh-TW": "羨ましい",
      "zh-CN": "羨ましい",
      "ko": "envious",
      "vi": "envious",
      "id": "envious"
    },
    "pos": "i-adj",
    "ex": "とても羨ましいと思う"
  },
  {
    "id": "V3032",
    "w": "美味しい",
    "r": "おいしい",
    "m": {
      "en": "delicious",
      "zh-TW": "美味しい",
      "zh-CN": "美味しい",
      "ko": "delicious",
      "vi": "delicious",
      "id": "delicious"
    },
    "pos": "i-adj",
    "ex": "とても美味しいと思う"
  },
  {
    "id": "V3033",
    "w": "不味い",
    "r": "まずい",
    "m": {
      "en": "bad tasting",
      "zh-TW": "不味い",
      "zh-CN": "不味い",
      "ko": "bad tasting",
      "vi": "bad tasting",
      "id": "bad tasting"
    },
    "pos": "i-adj",
    "ex": "とても不味いと思う"
  },
  {
    "id": "V3034",
    "w": "苦い",
    "r": "にがい",
    "m": {
      "en": "bitter",
      "zh-TW": "苦い",
      "zh-CN": "苦い",
      "ko": "bitter",
      "vi": "bitter",
      "id": "bitter"
    },
    "pos": "i-adj",
    "ex": "この薬は苦い"
  },
  {
    "id": "V3035",
    "w": "酸っぱい",
    "r": "すっぱい",
    "m": {
      "en": "sour",
      "zh-TW": "酸っぱい",
      "zh-CN": "酸っぱい",
      "ko": "sour",
      "vi": "sour",
      "id": "sour"
    },
    "pos": "i-adj",
    "ex": "とても酸っぱいと思う"
  },
  {
    "id": "V3036",
    "w": "塩辛い",
    "r": "しおからい",
    "m": {
      "en": "salty",
      "zh-TW": "塩辛い",
      "zh-CN": "塩辛い",
      "ko": "salty",
      "vi": "salty",
      "id": "salty"
    },
    "pos": "i-adj",
    "ex": "とても塩辛いと思う"
  },
  {
    "id": "V3037",
    "w": "賑やか",
    "r": "にぎやか",
    "m": {
      "en": "lively",
      "zh-TW": "賑やか",
      "zh-CN": "賑やか",
      "ko": "lively",
      "vi": "lively",
      "id": "lively"
    },
    "pos": "noun",
    "ex": "賑やかについて考える"
  },
  {
    "id": "V3038",
    "w": "穏やか",
    "r": "おだやか",
    "m": {
      "en": "calm",
      "zh-TW": "穏やか",
      "zh-CN": "穏やか",
      "ko": "calm",
      "vi": "calm",
      "id": "calm"
    },
    "pos": "noun",
    "ex": "穏やかについて考える"
  },
  {
    "id": "V3039",
    "w": "爽やか",
    "r": "さわやか",
    "m": {
      "en": "refreshing",
      "zh-TW": "爽やか",
      "zh-CN": "爽やか",
      "ko": "refreshing",
      "vi": "refreshing",
      "id": "refreshing"
    },
    "pos": "noun",
    "ex": "爽やかについて考える"
  },
  {
    "id": "V3040",
    "w": "華やか",
    "r": "はなやか",
    "m": {
      "en": "gorgeous",
      "zh-TW": "華やか",
      "zh-CN": "華やか",
      "ko": "gorgeous",
      "vi": "gorgeous",
      "id": "gorgeous"
    },
    "pos": "noun",
    "ex": "華やかについて考える"
  },
  {
    "id": "V3041",
    "w": "地味",
    "r": "じみ",
    "m": {
      "en": "plain",
      "zh-TW": "地味",
      "zh-CN": "地味",
      "ko": "plain",
      "vi": "plain",
      "id": "plain"
    },
    "pos": "noun",
    "ex": "地味について考える"
  },
  {
    "id": "V3042",
    "w": "派手",
    "r": "はで",
    "m": {
      "en": "flashy",
      "zh-TW": "派手",
      "zh-CN": "派手",
      "ko": "flashy",
      "vi": "flashy",
      "id": "flashy"
    },
    "pos": "noun",
    "ex": "派手について考える"
  },
  {
    "id": "V3043",
    "w": "清潔",
    "r": "せいけつ",
    "m": {
      "en": "clean",
      "zh-TW": "清潔",
      "zh-CN": "清潔",
      "ko": "clean",
      "vi": "clean",
      "id": "clean"
    },
    "pos": "verb-godan",
    "ex": "清潔ことにする"
  },
  {
    "id": "V3044",
    "w": "不潔",
    "r": "ふけつ",
    "m": {
      "en": "dirty",
      "zh-TW": "不潔",
      "zh-CN": "不潔",
      "ko": "dirty",
      "vi": "dirty",
      "id": "dirty"
    },
    "pos": "verb-godan",
    "ex": "不潔ことにする"
  },
  {
    "id": "V3045",
    "w": "乱暴",
    "r": "らんぼう",
    "m": {
      "en": "rough",
      "zh-TW": "乱暴",
      "zh-CN": "乱暴",
      "ko": "rough",
      "vi": "rough",
      "id": "rough"
    },
    "pos": "verb-godan",
    "ex": "乱暴ことにする"
  },
  {
    "id": "V3046",
    "w": "意地悪",
    "r": "いじわる",
    "m": {
      "en": "mean",
      "zh-TW": "意地悪",
      "zh-CN": "意地悪",
      "ko": "mean",
      "vi": "mean",
      "id": "mean"
    },
    "pos": "verb-godan",
    "ex": "意地悪ことにする"
  },
  {
    "id": "V3047",
    "w": "頑固",
    "r": "がんこ",
    "m": {
      "en": "stubborn",
      "zh-TW": "頑固",
      "zh-CN": "頑固",
      "ko": "stubborn",
      "vi": "stubborn",
      "id": "stubborn"
    },
    "pos": "noun",
    "ex": "頑固について考える"
  },
  {
    "id": "V3048",
    "w": "快適",
    "r": "かいてき",
    "m": {
      "en": "comfortable",
      "zh-TW": "快適",
      "zh-CN": "快適",
      "ko": "comfortable",
      "vi": "comfortable",
      "id": "comfortable"
    },
    "pos": "noun",
    "ex": "快適について考える"
  },
  {
    "id": "V3049",
    "w": "ゆっくり",
    "r": "ゆっくり",
    "m": {
      "en": "slowly",
      "zh-TW": "ゆっくり",
      "zh-CN": "ゆっくり",
      "ko": "slowly",
      "vi": "slowly",
      "id": "slowly"
    },
    "pos": "noun",
    "ex": "ゆっくりについて考える"
  },
  {
    "id": "V3050",
    "w": "急いで",
    "r": "いそいで",
    "m": {
      "en": "hurriedly",
      "zh-TW": "急いで",
      "zh-CN": "急いで",
      "ko": "hurriedly",
      "vi": "hurriedly",
      "id": "hurriedly"
    },
    "pos": "noun",
    "ex": "急いでについて考える"
  },
  {
    "id": "V3051",
    "w": "静かに",
    "r": "しずかに",
    "m": {
      "en": "quietly",
      "zh-TW": "静かに",
      "zh-CN": "静かに",
      "ko": "quietly",
      "vi": "quietly",
      "id": "quietly"
    },
    "pos": "adverb",
    "ex": "静かに考える"
  },
  {
    "id": "V3052",
    "w": "うるさく",
    "r": "うるさく",
    "m": {
      "en": "noisily",
      "zh-TW": "うるさく",
      "zh-CN": "うるさく",
      "ko": "noisily",
      "vi": "noisily",
      "id": "noisily"
    },
    "pos": "verb-godan",
    "ex": "うるさくことにする"
  },
  {
    "id": "V3053",
    "w": "丁寧に",
    "r": "ていねいに",
    "m": {
      "en": "politely",
      "zh-TW": "丁寧に",
      "zh-CN": "丁寧に",
      "ko": "politely",
      "vi": "politely",
      "id": "politely"
    },
    "pos": "adverb",
    "ex": "丁寧に考える"
  },
  {
    "id": "V3054",
    "w": "乱暴に",
    "r": "らんぼうに",
    "m": {
      "en": "roughly",
      "zh-TW": "乱暴に",
      "zh-CN": "乱暴に",
      "ko": "roughly",
      "vi": "roughly",
      "id": "roughly"
    },
    "pos": "adverb",
    "ex": "乱暴に考える"
  },
  {
    "id": "V3055",
    "w": "ちゃんと",
    "r": "ちゃんと",
    "m": {
      "en": "properly",
      "zh-TW": "ちゃんと",
      "zh-CN": "ちゃんと",
      "ko": "properly",
      "vi": "properly",
      "id": "properly"
    },
    "pos": "adverb",
    "ex": "ちゃんと考える"
  },
  {
    "id": "V3056",
    "w": "しっかり",
    "r": "しっかり",
    "m": {
      "en": "firmly",
      "zh-TW": "しっかり",
      "zh-CN": "しっかり",
      "ko": "firmly",
      "vi": "firmly",
      "id": "firmly"
    },
    "pos": "noun",
    "ex": "しっかりについて考える"
  },
  {
    "id": "V3057",
    "w": "はっきり",
    "r": "はっきり",
    "m": {
      "en": "clearly",
      "zh-TW": "はっきり",
      "zh-CN": "はっきり",
      "ko": "clearly",
      "vi": "clearly",
      "id": "clearly"
    },
    "pos": "noun",
    "ex": "はっきりについて考える"
  },
  {
    "id": "V3058",
    "w": "ぼんやり",
    "r": "ぼんやり",
    "m": {
      "en": "vaguely",
      "zh-TW": "ぼんやり",
      "zh-CN": "ぼんやり",
      "ko": "vaguely",
      "vi": "vaguely",
      "id": "vaguely"
    },
    "pos": "noun",
    "ex": "ぼんやりについて考える"
  },
  {
    "id": "V3059",
    "w": "そっと",
    "r": "そっと",
    "m": {
      "en": "softly",
      "zh-TW": "そっと",
      "zh-CN": "そっと",
      "ko": "softly",
      "vi": "softly",
      "id": "softly"
    },
    "pos": "adverb",
    "ex": "そっと考える"
  },
  {
    "id": "V3060",
    "w": "じっと",
    "r": "じっと",
    "m": {
      "en": "still",
      "zh-TW": "じっと",
      "zh-CN": "じっと",
      "ko": "still",
      "vi": "still",
      "id": "still"
    },
    "pos": "adverb",
    "ex": "じっと考える"
  },
  {
    "id": "V3061",
    "w": "ぐっすり",
    "r": "ぐっすり",
    "m": {
      "en": "soundly",
      "zh-TW": "ぐっすり",
      "zh-CN": "ぐっすり",
      "ko": "soundly",
      "vi": "soundly",
      "id": "soundly"
    },
    "pos": "noun",
    "ex": "ぐっすりについて考える"
  },
  {
    "id": "V3062",
    "w": "うっかり",
    "r": "うっかり",
    "m": {
      "en": "carelessly",
      "zh-TW": "うっかり",
      "zh-CN": "うっかり",
      "ko": "carelessly",
      "vi": "carelessly",
      "id": "carelessly"
    },
    "pos": "noun",
    "ex": "うっかりについて考える"
  },
  {
    "id": "V3063",
    "w": "突然",
    "r": "とつぜん",
    "m": {
      "en": "suddenly",
      "zh-TW": "突然",
      "zh-CN": "突然",
      "ko": "suddenly",
      "vi": "suddenly",
      "id": "suddenly"
    },
    "pos": "noun",
    "ex": "突然について考える"
  },
  {
    "id": "V3064",
    "w": "次第に",
    "r": "しだいに",
    "m": {
      "en": "gradually",
      "zh-TW": "次第に",
      "zh-CN": "次第に",
      "ko": "gradually",
      "vi": "gradually",
      "id": "gradually"
    },
    "pos": "adverb",
    "ex": "次第に考える"
  },
  {
    "id": "V3065",
    "w": "徐々に",
    "r": "じょじょに",
    "m": {
      "en": "gradually",
      "zh-TW": "徐々に",
      "zh-CN": "徐々に",
      "ko": "gradually",
      "vi": "gradually",
      "id": "gradually"
    },
    "pos": "adverb",
    "ex": "徐々に考える"
  },
  {
    "id": "V3066",
    "w": "急激に",
    "r": "きゅうげきに",
    "m": {
      "en": "rapidly",
      "zh-TW": "急激に",
      "zh-CN": "急激に",
      "ko": "rapidly",
      "vi": "rapidly",
      "id": "rapidly"
    },
    "pos": "adverb",
    "ex": "急激に考える"
  },
  {
    "id": "V3067",
    "w": "随分",
    "r": "ずいぶん",
    "m": {
      "en": "quite",
      "zh-TW": "随分",
      "zh-CN": "随分",
      "ko": "quite",
      "vi": "quite",
      "id": "quite"
    },
    "pos": "noun",
    "ex": "随分について考える"
  },
  {
    "id": "V3068",
    "w": "余程",
    "r": "よほど",
    "m": {
      "en": "considerably",
      "zh-TW": "余程",
      "zh-CN": "余程",
      "ko": "considerably",
      "vi": "considerably",
      "id": "considerably"
    },
    "pos": "noun",
    "ex": "余程について考える"
  },
  {
    "id": "V3069",
    "w": "草原",
    "r": "そうげん",
    "m": {
      "en": "grassland",
      "zh-TW": "草原",
      "zh-CN": "草原",
      "ko": "grassland",
      "vi": "grassland",
      "id": "grassland"
    },
    "pos": "noun",
    "ex": "草原について考える"
  },
  {
    "id": "V3070",
    "w": "砂漠",
    "r": "さばく",
    "m": {
      "en": "desert",
      "zh-TW": "砂漠",
      "zh-CN": "砂漠",
      "ko": "desert",
      "vi": "desert",
      "id": "desert"
    },
    "pos": "verb-godan",
    "ex": "砂漠ことにする"
  },
  {
    "id": "V3071",
    "w": "半島",
    "r": "はんとう",
    "m": {
      "en": "peninsula",
      "zh-TW": "半島",
      "zh-CN": "半島",
      "ko": "peninsula",
      "vi": "peninsula",
      "id": "peninsula"
    },
    "pos": "verb-godan",
    "ex": "半島ことにする"
  },
  {
    "id": "V3072",
    "w": "谷",
    "r": "たに",
    "m": {
      "en": "valley",
      "zh-TW": "谷",
      "zh-CN": "谷",
      "ko": "valley",
      "vi": "valley",
      "id": "valley"
    },
    "pos": "adverb",
    "ex": "谷考える"
  },
  {
    "id": "V3073",
    "w": "崖",
    "r": "がけ",
    "m": {
      "en": "cliff",
      "zh-TW": "崖",
      "zh-CN": "崖",
      "ko": "cliff",
      "vi": "cliff",
      "id": "cliff"
    },
    "pos": "noun",
    "ex": "崖について考える"
  },
  {
    "id": "V3074",
    "w": "洞窟",
    "r": "どうくつ",
    "m": {
      "en": "cave",
      "zh-TW": "洞窟",
      "zh-CN": "洞窟",
      "ko": "cave",
      "vi": "cave",
      "id": "cave"
    },
    "pos": "verb-godan",
    "ex": "洞窟ことにする"
  },
  {
    "id": "V3075",
    "w": "火山",
    "r": "かざん",
    "m": {
      "en": "volcano",
      "zh-TW": "火山",
      "zh-CN": "火山",
      "ko": "volcano",
      "vi": "volcano",
      "id": "volcano"
    },
    "pos": "noun",
    "ex": "火山について考える"
  },
  {
    "id": "V3076",
    "w": "ビル",
    "r": "びる",
    "m": {
      "en": "building",
      "zh-TW": "ビル",
      "zh-CN": "ビル",
      "ko": "building",
      "vi": "building",
      "id": "building"
    },
    "pos": "verb-godan",
    "ex": "ビルことにする"
  },
  {
    "id": "V3077",
    "w": "寮",
    "r": "りょう",
    "m": {
      "en": "dormitory",
      "zh-TW": "寮",
      "zh-CN": "寮",
      "ko": "dormitory",
      "vi": "dormitory",
      "id": "dormitory"
    },
    "pos": "verb-godan",
    "ex": "寮ことにする"
  },
  {
    "id": "V3078",
    "w": "ホテル",
    "r": "ほてる",
    "m": {
      "en": "hotel",
      "zh-TW": "ホテル",
      "zh-CN": "ホテル",
      "ko": "hotel",
      "vi": "hotel",
      "id": "hotel"
    },
    "pos": "verb-ichidan",
    "ex": "ホテルことにする"
  },
  {
    "id": "V3079",
    "w": "民宿",
    "r": "みんしゅく",
    "m": {
      "en": "guest house",
      "zh-TW": "民宿",
      "zh-CN": "民宿",
      "ko": "guest house",
      "vi": "guest house",
      "id": "guest house"
    },
    "pos": "verb-godan",
    "ex": "民宿ことにする"
  },
  {
    "id": "V3080",
    "w": "城",
    "r": "しろ",
    "m": {
      "en": "castle",
      "zh-TW": "城",
      "zh-CN": "城",
      "ko": "castle",
      "vi": "castle",
      "id": "castle"
    },
    "pos": "noun",
    "ex": "城について考える"
  },
  {
    "id": "V3081",
    "w": "宮殿",
    "r": "きゅうでん",
    "m": {
      "en": "palace",
      "zh-TW": "宮殿",
      "zh-CN": "宮殿",
      "ko": "palace",
      "vi": "palace",
      "id": "palace"
    },
    "pos": "noun",
    "ex": "宮殿について考える"
  },
  {
    "id": "V3082",
    "w": "塔",
    "r": "とう",
    "m": {
      "en": "tower",
      "zh-TW": "塔",
      "zh-CN": "塔",
      "ko": "tower",
      "vi": "tower",
      "id": "tower"
    },
    "pos": "verb-godan",
    "ex": "塔ことにする"
  },
  {
    "id": "V3083",
    "w": "橋",
    "r": "はし",
    "m": {
      "en": "bridge",
      "zh-TW": "橋",
      "zh-CN": "橋",
      "ko": "bridge",
      "vi": "bridge",
      "id": "bridge"
    },
    "pos": "noun",
    "ex": "橋について考える"
  },
  {
    "id": "V3084",
    "w": "ダム",
    "r": "だむ",
    "m": {
      "en": "dam",
      "zh-TW": "ダム",
      "zh-CN": "ダム",
      "ko": "dam",
      "vi": "dam",
      "id": "dam"
    },
    "pos": "verb-godan",
    "ex": "ダムことにする"
  },
  {
    "id": "V3085",
    "w": "トンネル",
    "r": "とんねる",
    "m": {
      "en": "tunnel",
      "zh-TW": "トンネル",
      "zh-CN": "トンネル",
      "ko": "tunnel",
      "vi": "tunnel",
      "id": "tunnel"
    },
    "pos": "verb-ichidan",
    "ex": "トンネルことにする"
  },
  {
    "id": "V3086",
    "w": "器具",
    "r": "きぐ",
    "m": {
      "en": "instrument",
      "zh-TW": "器具",
      "zh-CN": "器具",
      "ko": "instrument",
      "vi": "instrument",
      "id": "instrument"
    },
    "pos": "verb-godan",
    "ex": "器具ことにする"
  },
  {
    "id": "V3087",
    "w": "用具",
    "r": "ようぐ",
    "m": {
      "en": "supplies",
      "zh-TW": "用具",
      "zh-CN": "用具",
      "ko": "supplies",
      "vi": "supplies",
      "id": "supplies"
    },
    "pos": "verb-godan",
    "ex": "用具ことにする"
  },
  {
    "id": "V3088",
    "w": "ハサミ",
    "r": "はさみ",
    "m": {
      "en": "scissors",
      "zh-TW": "ハサミ",
      "zh-CN": "ハサミ",
      "ko": "scissors",
      "vi": "scissors",
      "id": "scissors"
    },
    "pos": "noun",
    "ex": "ハサミについて考える"
  },
  {
    "id": "V3089",
    "w": "グラス",
    "r": "ぐらす",
    "m": {
      "en": "glass",
      "zh-TW": "グラス",
      "zh-CN": "グラス",
      "ko": "glass",
      "vi": "glass",
      "id": "glass"
    },
    "pos": "verb-godan",
    "ex": "グラスことにする"
  },
  {
    "id": "V3090",
    "w": "新幹線",
    "r": "しんかんせん",
    "m": {
      "en": "bullet train",
      "zh-TW": "新幹線",
      "zh-CN": "新幹線",
      "ko": "bullet train",
      "vi": "bullet train",
      "id": "bullet train"
    },
    "pos": "noun",
    "ex": "新幹線について考える"
  },
  {
    "id": "V3091",
    "w": "フェリー",
    "r": "ふぇりー",
    "m": {
      "en": "ferry",
      "zh-TW": "フェリー",
      "zh-CN": "フェリー",
      "ko": "ferry",
      "vi": "ferry",
      "id": "ferry"
    },
    "pos": "noun",
    "ex": "フェリーについて考える"
  },
  {
    "id": "V3092",
    "w": "バイク",
    "r": "ばいく",
    "m": {
      "en": "motorcycle",
      "zh-TW": "バイク",
      "zh-CN": "バイク",
      "ko": "motorcycle",
      "vi": "motorcycle",
      "id": "motorcycle"
    },
    "pos": "verb-godan",
    "ex": "バイクことにする"
  },
  {
    "id": "V3093",
    "w": "トラック",
    "r": "とらっく",
    "m": {
      "en": "truck",
      "zh-TW": "トラック",
      "zh-CN": "トラック",
      "ko": "truck",
      "vi": "truck",
      "id": "truck"
    },
    "pos": "verb-godan",
    "ex": "トラックことにする"
  },
  {
    "id": "V3094",
    "w": "救急車",
    "r": "きゅうきゅうしゃ",
    "m": {
      "en": "ambulance",
      "zh-TW": "救急車",
      "zh-CN": "救急車",
      "ko": "ambulance",
      "vi": "ambulance",
      "id": "ambulance"
    },
    "pos": "noun",
    "ex": "救急車について考える"
  },
  {
    "id": "V3095",
    "w": "消防車",
    "r": "しょうぼうしゃ",
    "m": {
      "en": "fire engine",
      "zh-TW": "消防車",
      "zh-CN": "消防車",
      "ko": "fire engine",
      "vi": "fire engine",
      "id": "fire engine"
    },
    "pos": "noun",
    "ex": "消防車について考える"
  },
  {
    "id": "V3096",
    "w": "パトカー",
    "r": "ぱとかー",
    "m": {
      "en": "police car",
      "zh-TW": "パトカー",
      "zh-CN": "パトカー",
      "ko": "police car",
      "vi": "police car",
      "id": "police car"
    },
    "pos": "noun",
    "ex": "パトカーについて考える"
  },
  {
    "id": "V3097",
    "w": "ヘリコプター",
    "r": "へりこぷたー",
    "m": {
      "en": "helicopter",
      "zh-TW": "ヘリコプター",
      "zh-CN": "ヘリコプター",
      "ko": "helicopter",
      "vi": "helicopter",
      "id": "helicopter"
    },
    "pos": "noun",
    "ex": "ヘリコプターについて考える"
  },
  {
    "id": "V3098",
    "w": "ロケット",
    "r": "ろけっと",
    "m": {
      "en": "rocket",
      "zh-TW": "ロケット",
      "zh-CN": "ロケット",
      "ko": "rocket",
      "vi": "rocket",
      "id": "rocket"
    },
    "pos": "adverb",
    "ex": "ロケット考える"
  },
  {
    "id": "V3099",
    "w": "薬剤師",
    "r": "やくざいし",
    "m": {
      "en": "pharmacist",
      "zh-TW": "薬剤師",
      "zh-CN": "薬剤師",
      "ko": "pharmacist",
      "vi": "pharmacist",
      "id": "pharmacist"
    },
    "pos": "noun",
    "ex": "薬剤師について考える"
  },
  {
    "id": "V3100",
    "w": "建築士",
    "r": "けんちくし",
    "m": {
      "en": "architect",
      "zh-TW": "建築士",
      "zh-CN": "建築士",
      "ko": "architect",
      "vi": "architect",
      "id": "architect"
    },
    "pos": "noun",
    "ex": "建築士について考える"
  },
  {
    "id": "V3101",
    "w": "教授",
    "r": "きょうじゅ",
    "m": {
      "en": "professor",
      "zh-TW": "教授",
      "zh-CN": "教授",
      "ko": "professor",
      "vi": "professor",
      "id": "professor"
    },
    "pos": "noun",
    "ex": "教授について考える"
  },
  {
    "id": "V3102",
    "w": "記者",
    "r": "きしゃ",
    "m": {
      "en": "journalist",
      "zh-TW": "記者",
      "zh-CN": "記者",
      "ko": "journalist",
      "vi": "journalist",
      "id": "journalist"
    },
    "pos": "noun",
    "ex": "記者について考える"
  },
  {
    "id": "V3103",
    "w": "作家",
    "r": "さっか",
    "m": {
      "en": "writer",
      "zh-TW": "作家",
      "zh-CN": "作家",
      "ko": "writer",
      "vi": "writer",
      "id": "writer"
    },
    "pos": "noun",
    "ex": "作家について考える"
  },
  {
    "id": "V3104",
    "w": "画家",
    "r": "がか",
    "m": {
      "en": "painter",
      "zh-TW": "画家",
      "zh-CN": "画家",
      "ko": "painter",
      "vi": "painter",
      "id": "painter"
    },
    "pos": "noun",
    "ex": "画家について考える"
  },
  {
    "id": "V3105",
    "w": "俳優",
    "r": "はいゆう",
    "m": {
      "en": "actor",
      "zh-TW": "俳優",
      "zh-CN": "俳優",
      "ko": "actor",
      "vi": "actor",
      "id": "actor"
    },
    "pos": "verb-godan",
    "ex": "俳優ことにする"
  },
  {
    "id": "V3106",
    "w": "コーチ",
    "r": "こーち",
    "m": {
      "en": "coach",
      "zh-TW": "コーチ",
      "zh-CN": "コーチ",
      "ko": "coach",
      "vi": "coach",
      "id": "coach"
    },
    "pos": "noun",
    "ex": "コーチについて考える"
  },
  {
    "id": "V3107",
    "w": "卓球",
    "r": "たっきゅう",
    "m": {
      "en": "table tennis",
      "zh-TW": "卓球",
      "zh-CN": "卓球",
      "ko": "table tennis",
      "vi": "table tennis",
      "id": "table tennis"
    },
    "pos": "verb-godan",
    "ex": "卓球ことにする"
  },
  {
    "id": "V3108",
    "w": "サーフィン",
    "r": "さーふぃん",
    "m": {
      "en": "surfing",
      "zh-TW": "サーフィン",
      "zh-CN": "サーフィン",
      "ko": "surfing",
      "vi": "surfing",
      "id": "surfing"
    },
    "pos": "noun",
    "ex": "サーフィンについて考える"
  },
  {
    "id": "V3109",
    "w": "マラソン",
    "r": "まらそん",
    "m": {
      "en": "marathon",
      "zh-TW": "マラソン",
      "zh-CN": "マラソン",
      "ko": "marathon",
      "vi": "marathon",
      "id": "marathon"
    },
    "pos": "noun",
    "ex": "マラソンについて考える"
  },
  {
    "id": "V3110",
    "w": "ダンス",
    "r": "だんす",
    "m": {
      "en": "dance",
      "zh-TW": "ダンス",
      "zh-CN": "ダンス",
      "ko": "dance",
      "vi": "dance",
      "id": "dance"
    },
    "pos": "verb-godan",
    "ex": "ダンスことにする"
  },
  {
    "id": "V3111",
    "w": "漫画",
    "r": "まんが",
    "m": {
      "en": "manga",
      "zh-TW": "漫画",
      "zh-CN": "漫画",
      "ko": "manga",
      "vi": "manga",
      "id": "manga"
    },
    "pos": "noun",
    "ex": "漫画について考える"
  },
  {
    "id": "V3112",
    "w": "アニメ",
    "r": "あにめ",
    "m": {
      "en": "anime",
      "zh-TW": "アニメ",
      "zh-CN": "アニメ",
      "ko": "anime",
      "vi": "anime",
      "id": "anime"
    },
    "pos": "noun",
    "ex": "アニメについて考える"
  },
  {
    "id": "V3113",
    "w": "彫刻",
    "r": "ちょうこく",
    "m": {
      "en": "sculpture",
      "zh-TW": "彫刻",
      "zh-CN": "彫刻",
      "ko": "sculpture",
      "vi": "sculpture",
      "id": "sculpture"
    },
    "pos": "verb-godan",
    "ex": "彫刻ことにする"
  },
  {
    "id": "V3114",
    "w": "陶芸",
    "r": "とうげい",
    "m": {
      "en": "pottery",
      "zh-TW": "陶芸",
      "zh-CN": "陶芸",
      "ko": "pottery",
      "vi": "pottery",
      "id": "pottery"
    },
    "pos": "i-adj",
    "ex": "とても陶芸と思う"
  },
  {
    "id": "V3115",
    "w": "書道",
    "r": "しょどう",
    "m": {
      "en": "calligraphy",
      "zh-TW": "書道",
      "zh-CN": "書道",
      "ko": "calligraphy",
      "vi": "calligraphy",
      "id": "calligraphy"
    },
    "pos": "verb-godan",
    "ex": "書道ことにする"
  },
  {
    "id": "V3116",
    "w": "華道",
    "r": "かどう",
    "m": {
      "en": "flower arrangement",
      "zh-TW": "華道",
      "zh-CN": "華道",
      "ko": "flower arrangement",
      "vi": "flower arrangement",
      "id": "flower arrangement"
    },
    "pos": "verb-godan",
    "ex": "華道ことにする"
  },
  {
    "id": "V3117",
    "w": "茶道",
    "r": "さどう",
    "m": {
      "en": "tea ceremony",
      "zh-TW": "茶道",
      "zh-CN": "茶道",
      "ko": "tea ceremony",
      "vi": "tea ceremony",
      "id": "tea ceremony"
    },
    "pos": "verb-godan",
    "ex": "茶道ことにする"
  },
  {
    "id": "V3118",
    "w": "能",
    "r": "のう",
    "m": {
      "en": "noh",
      "zh-TW": "能",
      "zh-CN": "能",
      "ko": "noh",
      "vi": "noh",
      "id": "noh"
    },
    "pos": "verb-godan",
    "ex": "能ことにする"
  },
  {
    "id": "V3119",
    "w": "歌舞伎",
    "r": "かぶき",
    "m": {
      "en": "kabuki",
      "zh-TW": "歌舞伎",
      "zh-CN": "歌舞伎",
      "ko": "kabuki",
      "vi": "kabuki",
      "id": "kabuki"
    },
    "pos": "noun",
    "ex": "歌舞伎について考える"
  },
  {
    "id": "V3120",
    "w": "狭まる",
    "r": "せばまる",
    "m": {
      "en": "to narrow",
      "zh-TW": "狭まる",
      "zh-CN": "狭まる",
      "ko": "to narrow",
      "vi": "to narrow",
      "id": "to narrow"
    },
    "pos": "verb-godan",
    "ex": "狭まることにする"
  },
  {
    "id": "V3121",
    "w": "深まる",
    "r": "ふかまる",
    "m": {
      "en": "to deepen",
      "zh-TW": "深まる",
      "zh-CN": "深まる",
      "ko": "to deepen",
      "vi": "to deepen",
      "id": "to deepen"
    },
    "pos": "verb-godan",
    "ex": "深まることにする"
  },
  {
    "id": "V3122",
    "w": "浅くなる",
    "r": "あさくなる",
    "m": {
      "en": "to become shallow",
      "zh-TW": "浅くなる",
      "zh-CN": "浅くなる",
      "ko": "to become shallow",
      "vi": "to become shallow",
      "id": "to become shallow"
    },
    "pos": "verb-godan",
    "ex": "浅くなることにする"
  },
  {
    "id": "V3123",
    "w": "老ける",
    "r": "ふける",
    "m": {
      "en": "to age",
      "zh-TW": "老ける",
      "zh-CN": "老ける",
      "ko": "to age",
      "vi": "to age",
      "id": "to age"
    },
    "pos": "verb-ichidan",
    "ex": "老けることにする"
  },
  {
    "id": "V3124",
    "w": "若返る",
    "r": "わかがえる",
    "m": {
      "en": "to rejuvenate",
      "zh-TW": "若返る",
      "zh-CN": "若返る",
      "ko": "to rejuvenate",
      "vi": "to rejuvenate",
      "id": "to rejuvenate"
    },
    "pos": "verb-ichidan",
    "ex": "若返ることにする"
  },
  {
    "id": "V3125",
    "w": "成長する",
    "r": "せいちょうする",
    "m": {
      "en": "to grow",
      "zh-TW": "成長する",
      "zh-CN": "成長する",
      "ko": "to grow",
      "vi": "to grow",
      "id": "to grow"
    },
    "pos": "verb-suru",
    "ex": "成長することが大切だ"
  },
  {
    "id": "V3126",
    "w": "汚す",
    "r": "よごす",
    "m": {
      "en": "to dirty",
      "zh-TW": "汚す",
      "zh-CN": "汚す",
      "ko": "to dirty",
      "vi": "to dirty",
      "id": "to dirty"
    },
    "pos": "verb-godan",
    "ex": "汚すことにする"
  },
  {
    "id": "V3127",
    "w": "散る",
    "r": "ちる",
    "m": {
      "en": "to fall",
      "zh-TW": "散る",
      "zh-CN": "散る",
      "ko": "to fall",
      "vi": "to fall",
      "id": "to fall"
    },
    "pos": "verb-ichidan",
    "ex": "散ることにする"
  },
  {
    "id": "V3128",
    "w": "すっかり",
    "r": "すっかり",
    "m": {
      "en": "completely",
      "zh-TW": "すっかり",
      "zh-CN": "すっかり",
      "ko": "completely",
      "vi": "completely",
      "id": "completely"
    },
    "pos": "noun",
    "ex": "すっかりについて考える"
  },
  {
    "id": "V3129",
    "w": "すでに",
    "r": "すでに",
    "m": {
      "en": "already",
      "zh-TW": "すでに",
      "zh-CN": "すでに",
      "ko": "already",
      "vi": "already",
      "id": "already"
    },
    "pos": "adverb",
    "ex": "すでに考える"
  },
  {
    "id": "V3130",
    "w": "たった",
    "r": "たった",
    "m": {
      "en": "only",
      "zh-TW": "たった",
      "zh-CN": "たった",
      "ko": "only",
      "vi": "only",
      "id": "only"
    },
    "pos": "noun",
    "ex": "たったについて考える"
  },
  {
    "id": "V3131",
    "w": "どうにか",
    "r": "どうにか",
    "m": {
      "en": "somehow",
      "zh-TW": "どうにか",
      "zh-CN": "どうにか",
      "ko": "somehow",
      "vi": "somehow",
      "id": "somehow"
    },
    "pos": "noun",
    "ex": "どうにかについて考える"
  },
  {
    "id": "V3132",
    "w": "なかなか",
    "r": "なかなか",
    "m": {
      "en": "quite",
      "zh-TW": "なかなか",
      "zh-CN": "なかなか",
      "ko": "quite",
      "vi": "quite",
      "id": "quite"
    },
    "pos": "noun",
    "ex": "なかなかについて考える"
  },
  {
    "id": "V3133",
    "w": "なるべく",
    "r": "なるべく",
    "m": {
      "en": "as much as possible",
      "zh-TW": "なるべく",
      "zh-CN": "なるべく",
      "ko": "as much as possible",
      "vi": "as much as possible",
      "id": "as much as possible"
    },
    "pos": "verb-godan",
    "ex": "なるべくことにする"
  },
  {
    "id": "V3134",
    "w": "一斉に",
    "r": "いっせいに",
    "m": {
      "en": "all at once",
      "zh-TW": "一斉に",
      "zh-CN": "一斉に",
      "ko": "all at once",
      "vi": "all at once",
      "id": "all at once"
    },
    "pos": "adverb",
    "ex": "一斉に考える"
  },
  {
    "id": "V3135",
    "w": "一旦",
    "r": "いったん",
    "m": {
      "en": "once",
      "zh-TW": "一旦",
      "zh-CN": "一旦",
      "ko": "once",
      "vi": "once",
      "id": "once"
    },
    "pos": "noun",
    "ex": "一旦について考える"
  },
  {
    "id": "V3136",
    "w": "一度に",
    "r": "いちどに",
    "m": {
      "en": "at once",
      "zh-TW": "一度に",
      "zh-CN": "一度に",
      "ko": "at once",
      "vi": "at once",
      "id": "at once"
    },
    "pos": "adverb",
    "ex": "一度に考える"
  },
  {
    "id": "V3137",
    "w": "何より",
    "r": "なにより",
    "m": {
      "en": "above all",
      "zh-TW": "何より",
      "zh-CN": "何より",
      "ko": "above all",
      "vi": "above all",
      "id": "above all"
    },
    "pos": "noun",
    "ex": "何よりについて考える"
  },
  {
    "id": "V3138",
    "w": "互いに",
    "r": "たがいに",
    "m": {
      "en": "mutually",
      "zh-TW": "互いに",
      "zh-CN": "互いに",
      "ko": "mutually",
      "vi": "mutually",
      "id": "mutually"
    },
    "pos": "adverb",
    "ex": "互いに考える"
  },
  {
    "id": "V3139",
    "w": "再び",
    "r": "ふたたび",
    "m": {
      "en": "again",
      "zh-TW": "再び",
      "zh-CN": "再び",
      "ko": "again",
      "vi": "again",
      "id": "again"
    },
    "pos": "noun",
    "ex": "再びについて考える"
  },
  {
    "id": "V3140",
    "w": "単に",
    "r": "たんに",
    "m": {
      "en": "simply",
      "zh-TW": "単に",
      "zh-CN": "単に",
      "ko": "simply",
      "vi": "simply",
      "id": "simply"
    },
    "pos": "adverb",
    "ex": "単に考える"
  },
  {
    "id": "V3141",
    "w": "すると",
    "r": "すると",
    "m": {
      "en": "then",
      "zh-TW": "すると",
      "zh-CN": "すると",
      "ko": "then",
      "vi": "then",
      "id": "then"
    },
    "pos": "adverb",
    "ex": "すると考える"
  },
  {
    "id": "V3142",
    "w": "ところが",
    "r": "ところが",
    "m": {
      "en": "however",
      "zh-TW": "ところが",
      "zh-CN": "ところが",
      "ko": "however",
      "vi": "however",
      "id": "however"
    },
    "pos": "noun",
    "ex": "ところがについて考える"
  },
  {
    "id": "V3143",
    "w": "それとも",
    "r": "それとも",
    "m": {
      "en": "or",
      "zh-TW": "それとも",
      "zh-CN": "それとも",
      "ko": "or",
      "vi": "or",
      "id": "or"
    },
    "pos": "noun",
    "ex": "それともについて考える"
  },
  {
    "id": "V3144",
    "w": "あるいは",
    "r": "あるいは",
    "m": {
      "en": "or",
      "zh-TW": "あるいは",
      "zh-CN": "あるいは",
      "ko": "or",
      "vi": "or",
      "id": "or"
    },
    "pos": "noun",
    "ex": "あるいはについて考える"
  },
  {
    "id": "V3145",
    "w": "もしくは",
    "r": "もしくは",
    "m": {
      "en": "or",
      "zh-TW": "もしくは",
      "zh-CN": "もしくは",
      "ko": "or",
      "vi": "or",
      "id": "or"
    },
    "pos": "noun",
    "ex": "もしくはについて考える"
  },
  {
    "id": "V3146",
    "w": "および",
    "r": "および",
    "m": {
      "en": "and",
      "zh-TW": "および",
      "zh-CN": "および",
      "ko": "and",
      "vi": "and",
      "id": "and"
    },
    "pos": "noun",
    "ex": "およびについて考える"
  },
  {
    "id": "V3147",
    "w": "ならびに",
    "r": "ならびに",
    "m": {
      "en": "and",
      "zh-TW": "ならびに",
      "zh-CN": "ならびに",
      "ko": "and",
      "vi": "and",
      "id": "and"
    },
    "pos": "adverb",
    "ex": "ならびに考える"
  },
  {
    "id": "V3148",
    "w": "すなわち",
    "r": "すなわち",
    "m": {
      "en": "namely",
      "zh-TW": "すなわち",
      "zh-CN": "すなわち",
      "ko": "namely",
      "vi": "namely",
      "id": "namely"
    },
    "pos": "noun",
    "ex": "すなわちについて考える"
  },
  {
    "id": "V3149",
    "w": "要するに",
    "r": "ようするに",
    "m": {
      "en": "in short",
      "zh-TW": "要するに",
      "zh-CN": "要するに",
      "ko": "in short",
      "vi": "in short",
      "id": "in short"
    },
    "pos": "adverb",
    "ex": "要するに考える"
  },
  {
    "id": "V3150",
    "w": "言い換えれば",
    "r": "いいかえれば",
    "m": {
      "en": "in other words",
      "zh-TW": "言い換えれば",
      "zh-CN": "言い換えれば",
      "ko": "in other words",
      "vi": "in other words",
      "id": "in other words"
    },
    "pos": "noun",
    "ex": "言い換えればについて考える"
  },
  {
    "id": "V3151",
    "w": "具体的には",
    "r": "ぐたいてきには",
    "m": {
      "en": "specifically",
      "zh-TW": "具体的には",
      "zh-CN": "具体的には",
      "ko": "specifically",
      "vi": "specifically",
      "id": "specifically"
    },
    "pos": "noun",
    "ex": "具体的にはについて考える"
  },
  {
    "id": "V3152",
    "w": "頻繁に",
    "r": "ひんぱんに",
    "m": {
      "en": "frequently",
      "zh-TW": "頻繁に",
      "zh-CN": "頻繁に",
      "ko": "frequently",
      "vi": "frequently",
      "id": "frequently"
    },
    "pos": "adverb",
    "ex": "頻繁に考える"
  },
  {
    "id": "V3153",
    "w": "時折",
    "r": "ときおり",
    "m": {
      "en": "occasionally",
      "zh-TW": "時折",
      "zh-CN": "時折",
      "ko": "occasionally",
      "vi": "occasionally",
      "id": "occasionally"
    },
    "pos": "noun",
    "ex": "時折について考える"
  },
  {
    "id": "V3154",
    "w": "終日",
    "r": "しゅうじつ",
    "m": {
      "en": "all day",
      "zh-TW": "終日",
      "zh-CN": "終日",
      "ko": "all day",
      "vi": "all day",
      "id": "all day"
    },
    "pos": "verb-godan",
    "ex": "終日ことにする"
  },
  {
    "id": "V3155",
    "w": "毎度",
    "r": "まいど",
    "m": {
      "en": "every time",
      "zh-TW": "毎度",
      "zh-CN": "毎度",
      "ko": "every time",
      "vi": "every time",
      "id": "every time"
    },
    "pos": "noun",
    "ex": "毎度について考える"
  },
  {
    "id": "V3156",
    "w": "後日",
    "r": "ごじつ",
    "m": {
      "en": "another day",
      "zh-TW": "後日",
      "zh-CN": "後日",
      "ko": "another day",
      "vi": "another day",
      "id": "another day"
    },
    "pos": "verb-godan",
    "ex": "後日ことにする"
  },
  {
    "id": "V3157",
    "w": "当分",
    "r": "とうぶん",
    "m": {
      "en": "for a while",
      "zh-TW": "当分",
      "zh-CN": "当分",
      "ko": "for a while",
      "vi": "for a while",
      "id": "for a while"
    },
    "pos": "noun",
    "ex": "当分について考える"
  },
  {
    "id": "V3158",
    "w": "限度",
    "r": "げんど",
    "m": {
      "en": "limit",
      "zh-TW": "限度",
      "zh-CN": "限度",
      "ko": "limit",
      "vi": "limit",
      "id": "limit"
    },
    "pos": "noun",
    "ex": "限度について考える"
  },
  {
    "id": "V3159",
    "w": "当てはまる",
    "r": "あてはまる",
    "m": {
      "en": "to apply",
      "zh-TW": "当てはまる",
      "zh-CN": "当てはまる",
      "ko": "to apply",
      "vi": "to apply",
      "id": "to apply"
    },
    "pos": "verb-godan",
    "ex": "当てはまることにする"
  },
  {
    "id": "V3160",
    "w": "当てる",
    "r": "あてる",
    "m": {
      "en": "to guess",
      "zh-TW": "当てる",
      "zh-CN": "当てる",
      "ko": "to guess",
      "vi": "to guess",
      "id": "to guess"
    },
    "pos": "verb-ichidan",
    "ex": "当てることにする"
  },
  {
    "id": "V3161",
    "w": "突き当たる",
    "r": "つきあたる",
    "m": {
      "en": "to hit",
      "zh-TW": "突き当たる",
      "zh-CN": "突き当たる",
      "ko": "to hit",
      "vi": "to hit",
      "id": "to hit"
    },
    "pos": "verb-godan",
    "ex": "突き当たることにする"
  },
  {
    "id": "V3162",
    "w": "引き返す",
    "r": "ひきかえす",
    "m": {
      "en": "to turn back",
      "zh-TW": "引き返す",
      "zh-CN": "引き返す",
      "ko": "to turn back",
      "vi": "to turn back",
      "id": "to turn back"
    },
    "pos": "verb-godan",
    "ex": "引き返すことにする"
  },
  {
    "id": "V3163",
    "w": "押し付ける",
    "r": "おしつける",
    "m": {
      "en": "to force",
      "zh-TW": "押し付ける",
      "zh-CN": "押し付ける",
      "ko": "to force",
      "vi": "to force",
      "id": "to force"
    },
    "pos": "verb-ichidan",
    "ex": "押し付けることにする"
  },
  {
    "id": "V3164",
    "w": "押し寄せる",
    "r": "おしよせる",
    "m": {
      "en": "to rush",
      "zh-TW": "押し寄せる",
      "zh-CN": "押し寄せる",
      "ko": "to rush",
      "vi": "to rush",
      "id": "to rush"
    },
    "pos": "verb-ichidan",
    "ex": "押し寄せることにする"
  },
  {
    "id": "V3165",
    "w": "打ち合わせる",
    "r": "うちあわせる",
    "m": {
      "en": "to arrange",
      "zh-TW": "打ち合わせる",
      "zh-CN": "打ち合わせる",
      "ko": "to arrange",
      "vi": "to arrange",
      "id": "to arrange"
    },
    "pos": "verb-ichidan",
    "ex": "打ち合わせることにする"
  },
  {
    "id": "V3166",
    "w": "打ち切る",
    "r": "うちきる",
    "m": {
      "en": "to cut off",
      "zh-TW": "打ち切る",
      "zh-CN": "打ち切る",
      "ko": "to cut off",
      "vi": "to cut off",
      "id": "to cut off"
    },
    "pos": "verb-ichidan",
    "ex": "打ち切ることにする"
  },
  {
    "id": "V3167",
    "w": "打ち込む",
    "r": "うちこむ",
    "m": {
      "en": "to input",
      "zh-TW": "打ち込む",
      "zh-CN": "打ち込む",
      "ko": "to input",
      "vi": "to input",
      "id": "to input"
    },
    "pos": "verb-godan",
    "ex": "打ち込むことにする"
  },
  {
    "id": "V3168",
    "w": "取り戻す",
    "r": "とりもどす",
    "m": {
      "en": "to recover",
      "zh-TW": "取り戻す",
      "zh-CN": "取り戻す",
      "ko": "to recover",
      "vi": "to recover",
      "id": "to recover"
    },
    "pos": "verb-godan",
    "ex": "取り戻すことにする"
  },
  {
    "id": "V3169",
    "w": "見下ろす",
    "r": "みおろす",
    "m": {
      "en": "to look down",
      "zh-TW": "見下ろす",
      "zh-CN": "見下ろす",
      "ko": "to look down",
      "vi": "to look down",
      "id": "to look down"
    },
    "pos": "verb-godan",
    "ex": "見下ろすことにする"
  },
  {
    "id": "V3170",
    "w": "見つめる",
    "r": "みつめる",
    "m": {
      "en": "to stare",
      "zh-TW": "見つめる",
      "zh-CN": "見つめる",
      "ko": "to stare",
      "vi": "to stare",
      "id": "to stare"
    },
    "pos": "verb-ichidan",
    "ex": "見つめることにする"
  },
  {
    "id": "V3171",
    "w": "申し出る",
    "r": "もうしでる",
    "m": {
      "en": "to offer",
      "zh-TW": "申し出る",
      "zh-CN": "申し出る",
      "ko": "to offer",
      "vi": "to offer",
      "id": "to offer"
    },
    "pos": "verb-godan",
    "ex": "申し出ることにする"
  },
  {
    "id": "V3172",
    "w": "申し訳ない",
    "r": "もうしわけない",
    "m": {
      "en": "sorry",
      "zh-TW": "申し訳ない",
      "zh-CN": "申し訳ない",
      "ko": "sorry",
      "vi": "sorry",
      "id": "sorry"
    },
    "pos": "i-adj",
    "ex": "とても申し訳ないと思う"
  },
  {
    "id": "V3173",
    "w": "差し上げる",
    "r": "さしあげる",
    "m": {
      "en": "to give (hum)",
      "zh-TW": "差し上げる",
      "zh-CN": "差し上げる",
      "ko": "to give (hum)",
      "vi": "to give (hum)",
      "id": "to give (hum)"
    },
    "pos": "verb-godan",
    "ex": "差し上げることにする"
  },
  {
    "id": "V3174",
    "w": "差し引く",
    "r": "さしひく",
    "m": {
      "en": "to deduct",
      "zh-TW": "差し引く",
      "zh-CN": "差し引く",
      "ko": "to deduct",
      "vi": "to deduct",
      "id": "to deduct"
    },
    "pos": "verb-godan",
    "ex": "差し引くことにする"
  },
  {
    "id": "V3175",
    "w": "差し支える",
    "r": "さしつかえる",
    "m": {
      "en": "to hinder",
      "zh-TW": "差し支える",
      "zh-CN": "差し支える",
      "ko": "to hinder",
      "vi": "to hinder",
      "id": "to hinder"
    },
    "pos": "verb-ichidan",
    "ex": "差し支えることにする"
  },
  {
    "id": "V3176",
    "w": "立ち去る",
    "r": "たちさる",
    "m": {
      "en": "to leave",
      "zh-TW": "立ち去る",
      "zh-CN": "立ち去る",
      "ko": "to leave",
      "vi": "to leave",
      "id": "to leave"
    },
    "pos": "verb-godan",
    "ex": "立ち去ることにする"
  },
  {
    "id": "V3177",
    "w": "立ち寄る",
    "r": "たちよる",
    "m": {
      "en": "to drop by",
      "zh-TW": "立ち寄る",
      "zh-CN": "立ち寄る",
      "ko": "to drop by",
      "vi": "to drop by",
      "id": "to drop by"
    },
    "pos": "verb-godan",
    "ex": "立ち寄ることにする"
  },
  {
    "id": "V3178",
    "w": "立ち向かう",
    "r": "たちむかう",
    "m": {
      "en": "to face",
      "zh-TW": "立ち向かう",
      "zh-CN": "立ち向かう",
      "ko": "to face",
      "vi": "to face",
      "id": "to face"
    },
    "pos": "verb-godan",
    "ex": "立ち向かうことにする"
  },
  {
    "id": "V3179",
    "w": "立ち直る",
    "r": "たちなおる",
    "m": {
      "en": "to recover",
      "zh-TW": "立ち直る",
      "zh-CN": "立ち直る",
      "ko": "to recover",
      "vi": "to recover",
      "id": "to recover"
    },
    "pos": "verb-godan",
    "ex": "立ち直ることにする"
  },
  {
    "id": "V3180",
    "w": "鈍い",
    "r": "にぶい",
    "m": {
      "en": "dull",
      "zh-TW": "鈍い",
      "zh-CN": "鈍い",
      "ko": "dull",
      "vi": "dull",
      "id": "dull"
    },
    "pos": "i-adj",
    "ex": "とても鈍いと思う"
  },
  {
    "id": "V3181",
    "w": "騒がしい",
    "r": "さわがしい",
    "m": {
      "en": "noisy",
      "zh-TW": "騒がしい",
      "zh-CN": "騒がしい",
      "ko": "noisy",
      "vi": "noisy",
      "id": "noisy"
    },
    "pos": "i-adj",
    "ex": "とても騒がしいと思う",
    "syn": [
      "うるさい",
      "賑やか",
      "喧騒"
    ]
  },
  {
    "id": "V3182",
    "w": "煩わしい",
    "r": "わずらわしい",
    "m": {
      "en": "troublesome",
      "zh-TW": "煩わしい",
      "zh-CN": "煩わしい",
      "ko": "troublesome",
      "vi": "troublesome",
      "id": "troublesome"
    },
    "pos": "i-adj",
    "ex": "とても煩わしいと思う"
  },
  {
    "id": "V3183",
    "w": "煮込む",
    "r": "にこむ",
    "m": {
      "en": "to stew",
      "zh-TW": "煮込む",
      "zh-CN": "煮込む",
      "ko": "to stew",
      "vi": "to stew",
      "id": "to stew"
    },
    "pos": "verb-godan",
    "ex": "煮込むことにする"
  },
  {
    "id": "V3184",
    "w": "焼き上げる",
    "r": "やきあげる",
    "m": {
      "en": "to bake",
      "zh-TW": "焼き上げる",
      "zh-CN": "焼き上げる",
      "ko": "to bake",
      "vi": "to bake",
      "id": "to bake"
    },
    "pos": "verb-godan",
    "ex": "焼き上げることにする"
  },
  {
    "id": "V3185",
    "w": "蒸し上げる",
    "r": "むしあげる",
    "m": {
      "en": "to steam",
      "zh-TW": "蒸し上げる",
      "zh-CN": "蒸し上げる",
      "ko": "to steam",
      "vi": "to steam",
      "id": "to steam"
    },
    "pos": "verb-godan",
    "ex": "蒸し上げることにする"
  },
  {
    "id": "V3186",
    "w": "揚げ物",
    "r": "あげもの",
    "m": {
      "en": "fried food",
      "zh-TW": "揚げ物",
      "zh-CN": "揚げ物",
      "ko": "fried food",
      "vi": "fried food",
      "id": "fried food"
    },
    "pos": "noun",
    "ex": "揚げ物について考える"
  },
  {
    "id": "V3187",
    "w": "炒め物",
    "r": "いためもの",
    "m": {
      "en": "stir-fry",
      "zh-TW": "炒め物",
      "zh-CN": "炒め物",
      "ko": "stir-fry",
      "vi": "stir-fry",
      "id": "stir-fry"
    },
    "pos": "noun",
    "ex": "炒め物について考える"
  },
  {
    "id": "V3188",
    "w": "煮物",
    "r": "にもの",
    "m": {
      "en": "simmered dish",
      "zh-TW": "煮物",
      "zh-CN": "煮物",
      "ko": "simmered dish",
      "vi": "simmered dish",
      "id": "simmered dish"
    },
    "pos": "noun",
    "ex": "煮物について考える"
  },
  {
    "id": "V3189",
    "w": "刺身",
    "r": "さしみ",
    "m": {
      "en": "sashimi",
      "zh-TW": "刺身",
      "zh-CN": "刺身",
      "ko": "sashimi",
      "vi": "sashimi",
      "id": "sashimi"
    },
    "pos": "noun",
    "ex": "刺身について考える"
  },
  {
    "id": "V3190",
    "w": "天ぷら",
    "r": "てんぷら",
    "m": {
      "en": "tempura",
      "zh-TW": "天ぷら",
      "zh-CN": "天ぷら",
      "ko": "tempura",
      "vi": "tempura",
      "id": "tempura"
    },
    "pos": "noun",
    "ex": "天ぷらについて考える"
  },
  {
    "id": "V3191",
    "w": "寿司",
    "r": "すし",
    "m": {
      "en": "sushi",
      "zh-TW": "寿司",
      "zh-CN": "寿司",
      "ko": "sushi",
      "vi": "sushi",
      "id": "sushi"
    },
    "pos": "noun",
    "ex": "寿司について考える"
  },
  {
    "id": "V3192",
    "w": "うどん",
    "r": "うどん",
    "m": {
      "en": "udon",
      "zh-TW": "うどん",
      "zh-CN": "うどん",
      "ko": "udon",
      "vi": "udon",
      "id": "udon"
    },
    "pos": "noun",
    "ex": "うどんについて考える"
  },
  {
    "id": "V3193",
    "w": "そば",
    "r": "そば",
    "m": {
      "en": "soba",
      "zh-TW": "そば",
      "zh-CN": "そば",
      "ko": "soba",
      "vi": "soba",
      "id": "soba"
    },
    "pos": "noun",
    "ex": "そばについて考える"
  },
  {
    "id": "V3194",
    "w": "ラーメン",
    "r": "らーめん",
    "m": {
      "en": "ramen",
      "zh-TW": "ラーメン",
      "zh-CN": "ラーメン",
      "ko": "ramen",
      "vi": "ramen",
      "id": "ramen"
    },
    "pos": "noun",
    "ex": "ラーメンについて考える"
  },
  {
    "id": "V3195",
    "w": "丼",
    "r": "どんぶり",
    "m": {
      "en": "rice bowl",
      "zh-TW": "丼",
      "zh-CN": "丼",
      "ko": "rice bowl",
      "vi": "rice bowl",
      "id": "rice bowl"
    },
    "pos": "noun",
    "ex": "丼について考える"
  },
  {
    "id": "V3196",
    "w": "弁当",
    "r": "べんとう",
    "m": {
      "en": "lunch box",
      "zh-TW": "弁当",
      "zh-CN": "弁当",
      "ko": "lunch box",
      "vi": "lunch box",
      "id": "lunch box"
    },
    "pos": "verb-godan",
    "ex": "弁当ことにする"
  },
  {
    "id": "V3197",
    "w": "おにぎり",
    "r": "おにぎり",
    "m": {
      "en": "rice ball",
      "zh-TW": "おにぎり",
      "zh-CN": "おにぎり",
      "ko": "rice ball",
      "vi": "rice ball",
      "id": "rice ball"
    },
    "pos": "noun",
    "ex": "おにぎりについて考える"
  },
  {
    "id": "V3198",
    "w": "漬物",
    "r": "つけもの",
    "m": {
      "en": "pickles",
      "zh-TW": "漬物",
      "zh-CN": "漬物",
      "ko": "pickles",
      "vi": "pickles",
      "id": "pickles"
    },
    "pos": "noun",
    "ex": "漬物について考える"
  },
  {
    "id": "V3199",
    "w": "味噌汁",
    "r": "みそしる",
    "m": {
      "en": "miso soup",
      "zh-TW": "味噌汁",
      "zh-CN": "味噌汁",
      "ko": "miso soup",
      "vi": "miso soup",
      "id": "miso soup"
    },
    "pos": "verb-ichidan",
    "ex": "味噌汁ことにする"
  },
  {
    "id": "V3200",
    "w": "出汁",
    "r": "だし",
    "m": {
      "en": "broth",
      "zh-TW": "出汁",
      "zh-CN": "出汁",
      "ko": "broth",
      "vi": "broth",
      "id": "broth"
    },
    "pos": "noun",
    "ex": "出汁について考える"
  },
  {
    "id": "V3201",
    "w": "着替え",
    "r": "きがえ",
    "m": {
      "en": "change of clothes",
      "zh-TW": "着替え",
      "zh-CN": "着替え",
      "ko": "change of clothes",
      "vi": "change of clothes",
      "id": "change of clothes"
    },
    "pos": "noun",
    "ex": "着替えについて考える"
  },
  {
    "id": "V3202",
    "w": "指輪",
    "r": "ゆびわ",
    "m": {
      "en": "ring",
      "zh-TW": "指輪",
      "zh-CN": "指輪",
      "ko": "ring",
      "vi": "ring",
      "id": "ring"
    },
    "pos": "noun",
    "ex": "指輪について考える"
  },
  {
    "id": "V3203",
    "w": "ネックレス",
    "r": "ねっくれす",
    "m": {
      "en": "necklace",
      "zh-TW": "ネックレス",
      "zh-CN": "ネックレス",
      "ko": "necklace",
      "vi": "necklace",
      "id": "necklace"
    },
    "pos": "verb-godan",
    "ex": "ネックレスことにする"
  },
  {
    "id": "V3204",
    "w": "イヤリング",
    "r": "いやりんぐ",
    "m": {
      "en": "earring",
      "zh-TW": "イヤリング",
      "zh-CN": "イヤリング",
      "ko": "earring",
      "vi": "earring",
      "id": "earring"
    },
    "pos": "verb-godan",
    "ex": "イヤリングことにする"
  },
  {
    "id": "V3205",
    "w": "化粧品",
    "r": "けしょうひん",
    "m": {
      "en": "cosmetics",
      "zh-TW": "化粧品",
      "zh-CN": "化粧品",
      "ko": "cosmetics",
      "vi": "cosmetics",
      "id": "cosmetics"
    },
    "pos": "noun",
    "ex": "化粧品について考える"
  },
  {
    "id": "V3206",
    "w": "香水",
    "r": "こうすい",
    "m": {
      "en": "perfume",
      "zh-TW": "香水",
      "zh-CN": "香水",
      "ko": "perfume",
      "vi": "perfume",
      "id": "perfume"
    },
    "pos": "i-adj",
    "ex": "とても香水と思う"
  },
  {
    "id": "V3207",
    "w": "日焼け止め",
    "r": "ひやけどめ",
    "m": {
      "en": "sunscreen",
      "zh-TW": "日焼け止め",
      "zh-CN": "日焼け止め",
      "ko": "sunscreen",
      "vi": "sunscreen",
      "id": "sunscreen"
    },
    "pos": "noun",
    "ex": "日焼け止めについて考える"
  },
  {
    "id": "V3208",
    "w": "屋上",
    "r": "おくじょう",
    "m": {
      "en": "rooftop",
      "zh-TW": "屋上",
      "zh-CN": "屋上",
      "ko": "rooftop",
      "vi": "rooftop",
      "id": "rooftop"
    },
    "pos": "verb-godan",
    "ex": "屋上ことにする"
  },
  {
    "id": "V3209",
    "w": "地下室",
    "r": "ちかしつ",
    "m": {
      "en": "basement",
      "zh-TW": "地下室",
      "zh-CN": "地下室",
      "ko": "basement",
      "vi": "basement",
      "id": "basement"
    },
    "pos": "verb-godan",
    "ex": "地下室ことにする"
  },
  {
    "id": "V3210",
    "w": "物置",
    "r": "ものおき",
    "m": {
      "en": "storage",
      "zh-TW": "物置",
      "zh-CN": "物置",
      "ko": "storage",
      "vi": "storage",
      "id": "storage"
    },
    "pos": "noun",
    "ex": "物置について考える"
  },
  {
    "id": "V3211",
    "w": "垣根",
    "r": "かきね",
    "m": {
      "en": "hedge",
      "zh-TW": "垣根",
      "zh-CN": "垣根",
      "ko": "hedge",
      "vi": "hedge",
      "id": "hedge"
    },
    "pos": "noun",
    "ex": "垣根について考える"
  },
  {
    "id": "V3212",
    "w": "塀",
    "r": "へい",
    "m": {
      "en": "wall",
      "zh-TW": "塀",
      "zh-CN": "塀",
      "ko": "wall",
      "vi": "wall",
      "id": "wall"
    },
    "pos": "i-adj",
    "ex": "とても塀と思う"
  },
  {
    "id": "V3213",
    "w": "表札",
    "r": "ひょうさつ",
    "m": {
      "en": "nameplate",
      "zh-TW": "表札",
      "zh-CN": "表札",
      "ko": "nameplate",
      "vi": "nameplate",
      "id": "nameplate"
    },
    "pos": "verb-godan",
    "ex": "表札ことにする"
  },
  {
    "id": "V3214",
    "w": "ソファー",
    "r": "そふぁー",
    "m": {
      "en": "sofa",
      "zh-TW": "ソファー",
      "zh-CN": "ソファー",
      "ko": "sofa",
      "vi": "sofa",
      "id": "sofa"
    },
    "pos": "noun",
    "ex": "ソファーについて考える"
  },
  {
    "id": "V3215",
    "w": "テーブル",
    "r": "てーぶる",
    "m": {
      "en": "table",
      "zh-TW": "テーブル",
      "zh-CN": "テーブル",
      "ko": "table",
      "vi": "table",
      "id": "table"
    },
    "pos": "verb-godan",
    "ex": "テーブルことにする"
  },
  {
    "id": "V3216",
    "w": "机",
    "r": "つくえ",
    "m": {
      "en": "desk",
      "zh-TW": "机",
      "zh-CN": "机",
      "ko": "desk",
      "vi": "desk",
      "id": "desk"
    },
    "pos": "noun",
    "ex": "机について考える"
  },
  {
    "id": "V3217",
    "w": "本棚",
    "r": "ほんだな",
    "m": {
      "en": "bookshelf",
      "zh-TW": "本棚",
      "zh-CN": "本棚",
      "ko": "bookshelf",
      "vi": "bookshelf",
      "id": "bookshelf"
    },
    "pos": "noun",
    "ex": "本棚について考える"
  },
  {
    "id": "V3218",
    "w": "タンス",
    "r": "たんす",
    "m": {
      "en": "dresser",
      "zh-TW": "タンス",
      "zh-CN": "タンス",
      "ko": "dresser",
      "vi": "dresser",
      "id": "dresser"
    },
    "pos": "verb-godan",
    "ex": "タンスことにする"
  },
  {
    "id": "V3219",
    "w": "クローゼット",
    "r": "くろーぜっと",
    "m": {
      "en": "closet",
      "zh-TW": "クローゼット",
      "zh-CN": "クローゼット",
      "ko": "closet",
      "vi": "closet",
      "id": "closet"
    },
    "pos": "noun",
    "ex": "クローゼットについて考える"
  },
  {
    "id": "V3220",
    "w": "カーペット",
    "r": "かーぺっと",
    "m": {
      "en": "carpet",
      "zh-TW": "カーペット",
      "zh-CN": "カーペット",
      "ko": "carpet",
      "vi": "carpet",
      "id": "carpet"
    },
    "pos": "noun",
    "ex": "カーペットについて考える"
  },
  {
    "id": "V3221",
    "w": "暖房",
    "r": "だんぼう",
    "m": {
      "en": "heating",
      "zh-TW": "暖房",
      "zh-CN": "暖房",
      "ko": "heating",
      "vi": "heating",
      "id": "heating"
    },
    "pos": "verb-godan",
    "ex": "暖房ことにする"
  },
  {
    "id": "V3222",
    "w": "冷房",
    "r": "れいぼう",
    "m": {
      "en": "cooling",
      "zh-TW": "冷房",
      "zh-CN": "冷房",
      "ko": "cooling",
      "vi": "cooling",
      "id": "cooling"
    },
    "pos": "verb-godan",
    "ex": "冷房ことにする"
  },
  {
    "id": "V3223",
    "w": "加湿器",
    "r": "かしつき",
    "m": {
      "en": "humidifier",
      "zh-TW": "加湿器",
      "zh-CN": "加湿器",
      "ko": "humidifier",
      "vi": "humidifier",
      "id": "humidifier"
    },
    "pos": "noun",
    "ex": "加湿器について考える"
  },
  {
    "id": "V3224",
    "w": "蛇",
    "r": "へび",
    "m": {
      "en": "snake",
      "zh-TW": "蛇",
      "zh-CN": "蛇",
      "ko": "snake",
      "vi": "snake",
      "id": "snake"
    },
    "pos": "noun",
    "ex": "蛇について考える"
  },
  {
    "id": "V3225",
    "w": "亀",
    "r": "かめ",
    "m": {
      "en": "turtle",
      "zh-TW": "亀",
      "zh-CN": "亀",
      "ko": "turtle",
      "vi": "turtle",
      "id": "turtle"
    },
    "pos": "noun",
    "ex": "亀について考える"
  },
  {
    "id": "V3226",
    "w": "山羊",
    "r": "やぎ",
    "m": {
      "en": "goat",
      "zh-TW": "山羊",
      "zh-CN": "山羊",
      "ko": "goat",
      "vi": "goat",
      "id": "goat"
    },
    "pos": "noun",
    "ex": "山羊について考える"
  },
  {
    "id": "V3227",
    "w": "桜",
    "r": "さくら",
    "m": {
      "en": "cherry blossom",
      "zh-TW": "桜",
      "zh-CN": "桜",
      "ko": "cherry blossom",
      "vi": "cherry blossom",
      "id": "cherry blossom"
    },
    "pos": "noun",
    "ex": "桜について考える"
  },
  {
    "id": "V3228",
    "w": "梅",
    "r": "うめ",
    "m": {
      "en": "plum",
      "zh-TW": "梅",
      "zh-CN": "梅",
      "ko": "plum",
      "vi": "plum",
      "id": "plum"
    },
    "pos": "noun",
    "ex": "梅について考える"
  },
  {
    "id": "V3229",
    "w": "杉",
    "r": "すぎ",
    "m": {
      "en": "cedar",
      "zh-TW": "杉",
      "zh-CN": "杉",
      "ko": "cedar",
      "vi": "cedar",
      "id": "cedar"
    },
    "pos": "noun",
    "ex": "杉について考える"
  },
  {
    "id": "V3230",
    "w": "楓",
    "r": "かえで",
    "m": {
      "en": "maple",
      "zh-TW": "楓",
      "zh-CN": "楓",
      "ko": "maple",
      "vi": "maple",
      "id": "maple"
    },
    "pos": "noun",
    "ex": "楓について考える"
  },
  {
    "id": "V3231",
    "w": "海岸",
    "r": "かいがん",
    "m": {
      "en": "coast",
      "zh-TW": "海岸",
      "zh-CN": "海岸",
      "ko": "coast",
      "vi": "coast",
      "id": "coast"
    },
    "pos": "noun",
    "ex": "海岸について考える"
  },
  {
    "id": "V3232",
    "w": "砂浜",
    "r": "すなはま",
    "m": {
      "en": "beach",
      "zh-TW": "砂浜",
      "zh-CN": "砂浜",
      "ko": "beach",
      "vi": "beach",
      "id": "beach"
    },
    "pos": "noun",
    "ex": "砂浜について考える"
  },
  {
    "id": "V3233",
    "w": "波",
    "r": "なみ",
    "m": {
      "en": "wave",
      "zh-TW": "波",
      "zh-CN": "波",
      "ko": "wave",
      "vi": "wave",
      "id": "wave"
    },
    "pos": "noun",
    "ex": "波について考える"
  },
  {
    "id": "V3234",
    "w": "潮",
    "r": "しお",
    "m": {
      "en": "tide",
      "zh-TW": "潮",
      "zh-CN": "潮",
      "ko": "tide",
      "vi": "tide",
      "id": "tide"
    },
    "pos": "noun",
    "ex": "潮について考える"
  },
  {
    "id": "V3235",
    "w": "土",
    "r": "つち",
    "m": {
      "en": "soil",
      "zh-TW": "土",
      "zh-CN": "土",
      "ko": "soil",
      "vi": "soil",
      "id": "soil"
    },
    "pos": "noun",
    "ex": "土について考える"
  },
  {
    "id": "V3236",
    "w": "泥",
    "r": "どろ",
    "m": {
      "en": "mud",
      "zh-TW": "泥",
      "zh-CN": "泥",
      "ko": "mud",
      "vi": "mud",
      "id": "mud"
    },
    "pos": "noun",
    "ex": "泥について考える"
  },
  {
    "id": "V3237",
    "w": "沼",
    "r": "ぬま",
    "m": {
      "en": "swamp",
      "zh-TW": "沼",
      "zh-CN": "沼",
      "ko": "swamp",
      "vi": "swamp",
      "id": "swamp"
    },
    "pos": "noun",
    "ex": "沼について考える"
  },
  {
    "id": "V3238",
    "w": "霧",
    "r": "きり",
    "m": {
      "en": "fog",
      "zh-TW": "霧",
      "zh-CN": "霧",
      "ko": "fog",
      "vi": "fog",
      "id": "fog"
    },
    "pos": "noun",
    "ex": "霧について考える"
  },
  {
    "id": "V3239",
    "w": "露",
    "r": "つゆ",
    "m": {
      "en": "dew",
      "zh-TW": "露",
      "zh-CN": "露",
      "ko": "dew",
      "vi": "dew",
      "id": "dew"
    },
    "pos": "noun",
    "ex": "露について考える"
  },
  {
    "id": "V3240",
    "w": "虹",
    "r": "にじ",
    "m": {
      "en": "rainbow",
      "zh-TW": "虹",
      "zh-CN": "虹",
      "ko": "rainbow",
      "vi": "rainbow",
      "id": "rainbow"
    },
    "pos": "noun",
    "ex": "虹について考える"
  },
  {
    "id": "V3241",
    "w": "稲妻",
    "r": "いなずま",
    "m": {
      "en": "lightning",
      "zh-TW": "稲妻",
      "zh-CN": "稲妻",
      "ko": "lightning",
      "vi": "lightning",
      "id": "lightning"
    },
    "pos": "noun",
    "ex": "稲妻について考える"
  },
  {
    "id": "V3242",
    "w": "竜巻",
    "r": "たつまき",
    "m": {
      "en": "tornado",
      "zh-TW": "竜巻",
      "zh-CN": "竜巻",
      "ko": "tornado",
      "vi": "tornado",
      "id": "tornado"
    },
    "pos": "noun",
    "ex": "竜巻について考える"
  },
  {
    "id": "V3243",
    "w": "嵐",
    "r": "あらし",
    "m": {
      "en": "storm",
      "zh-TW": "嵐",
      "zh-CN": "嵐",
      "ko": "storm",
      "vi": "storm",
      "id": "storm"
    },
    "pos": "noun",
    "ex": "嵐の前の静けさだ"
  },
  {
    "id": "V3244",
    "w": "吹雪",
    "r": "ふぶき",
    "m": {
      "en": "blizzard",
      "zh-TW": "吹雪",
      "zh-CN": "吹雪",
      "ko": "blizzard",
      "vi": "blizzard",
      "id": "blizzard"
    },
    "pos": "noun",
    "ex": "吹雪について考える"
  },
  {
    "id": "V3245",
    "w": "猛暑",
    "r": "もうしょ",
    "m": {
      "en": "extreme heat",
      "zh-TW": "猛暑",
      "zh-CN": "猛暑",
      "ko": "extreme heat",
      "vi": "extreme heat",
      "id": "extreme heat"
    },
    "pos": "noun",
    "ex": "猛暑について考える"
  },
  {
    "id": "V3246",
    "w": "酷暑",
    "r": "こくしょ",
    "m": {
      "en": "scorching heat",
      "zh-TW": "酷暑",
      "zh-CN": "酷暑",
      "ko": "scorching heat",
      "vi": "scorching heat",
      "id": "scorching heat"
    },
    "pos": "noun",
    "ex": "酷暑について考える"
  },
  {
    "id": "V3247",
    "w": "厳寒",
    "r": "げんかん",
    "m": {
      "en": "severe cold",
      "zh-TW": "厳寒",
      "zh-CN": "厳寒",
      "ko": "severe cold",
      "vi": "severe cold",
      "id": "severe cold"
    },
    "pos": "noun",
    "ex": "厳寒について考える"
  },
  {
    "id": "V3248",
    "w": "額",
    "r": "ひたい",
    "m": {
      "en": "forehead",
      "zh-TW": "額",
      "zh-CN": "額",
      "ko": "forehead",
      "vi": "forehead",
      "id": "forehead"
    },
    "pos": "i-adj",
    "ex": "とても額と思う"
  },
  {
    "id": "V3249",
    "w": "眉毛",
    "r": "まゆげ",
    "m": {
      "en": "eyebrow",
      "zh-TW": "眉毛",
      "zh-CN": "眉毛",
      "ko": "eyebrow",
      "vi": "eyebrow",
      "id": "eyebrow"
    },
    "pos": "noun",
    "ex": "眉毛について考える"
  },
  {
    "id": "V3250",
    "w": "睫毛",
    "r": "まつげ",
    "m": {
      "en": "eyelash",
      "zh-TW": "睫毛",
      "zh-CN": "睫毛",
      "ko": "eyelash",
      "vi": "eyelash",
      "id": "eyelash"
    },
    "pos": "noun",
    "ex": "睫毛について考える"
  },
  {
    "id": "V3251",
    "w": "頬",
    "r": "ほお",
    "m": {
      "en": "cheek",
      "zh-TW": "頬",
      "zh-CN": "頬",
      "ko": "cheek",
      "vi": "cheek",
      "id": "cheek"
    },
    "pos": "noun",
    "ex": "頬について考える"
  },
  {
    "id": "V3252",
    "w": "歯茎",
    "r": "はぐき",
    "m": {
      "en": "gum",
      "zh-TW": "歯茎",
      "zh-CN": "歯茎",
      "ko": "gum",
      "vi": "gum",
      "id": "gum"
    },
    "pos": "noun",
    "ex": "歯茎について考える"
  },
  {
    "id": "V3253",
    "w": "喉",
    "r": "のど",
    "m": {
      "en": "throat",
      "zh-TW": "喉",
      "zh-CN": "喉",
      "ko": "throat",
      "vi": "throat",
      "id": "throat"
    },
    "pos": "noun",
    "ex": "喉について考える"
  },
  {
    "id": "V3254",
    "w": "肘",
    "r": "ひじ",
    "m": {
      "en": "elbow",
      "zh-TW": "肘",
      "zh-CN": "肘",
      "ko": "elbow",
      "vi": "elbow",
      "id": "elbow"
    },
    "pos": "noun",
    "ex": "肘について考える"
  },
  {
    "id": "V3255",
    "w": "手首",
    "r": "てくび",
    "m": {
      "en": "wrist",
      "zh-TW": "手首",
      "zh-CN": "手首",
      "ko": "wrist",
      "vi": "wrist",
      "id": "wrist"
    },
    "pos": "noun",
    "ex": "手首について考える"
  },
  {
    "id": "V3256",
    "w": "膝",
    "r": "ひざ",
    "m": {
      "en": "knee",
      "zh-TW": "膝",
      "zh-CN": "膝",
      "ko": "knee",
      "vi": "knee",
      "id": "knee"
    },
    "pos": "noun",
    "ex": "膝について考える"
  },
  {
    "id": "V3257",
    "w": "踵",
    "r": "かかと",
    "m": {
      "en": "heel",
      "zh-TW": "踵",
      "zh-CN": "踵",
      "ko": "heel",
      "vi": "heel",
      "id": "heel"
    },
    "pos": "adverb",
    "ex": "踵考える"
  },
  {
    "id": "V3258",
    "w": "爪",
    "r": "つめ",
    "m": {
      "en": "nail",
      "zh-TW": "爪",
      "zh-CN": "爪",
      "ko": "nail",
      "vi": "nail",
      "id": "nail"
    },
    "pos": "noun",
    "ex": "爪について考える"
  },
  {
    "id": "V3259",
    "w": "視覚",
    "r": "しかく",
    "m": {
      "en": "sight",
      "zh-TW": "視覚",
      "zh-CN": "視覚",
      "ko": "sight",
      "vi": "sight",
      "id": "sight"
    },
    "pos": "verb-godan",
    "ex": "視覚ことにする"
  },
  {
    "id": "V3260",
    "w": "聴覚",
    "r": "ちょうかく",
    "m": {
      "en": "hearing",
      "zh-TW": "聴覚",
      "zh-CN": "聴覚",
      "ko": "hearing",
      "vi": "hearing",
      "id": "hearing"
    },
    "pos": "verb-godan",
    "ex": "聴覚ことにする"
  },
  {
    "id": "V3261",
    "w": "嗅覚",
    "r": "きゅうかく",
    "m": {
      "en": "smell",
      "zh-TW": "嗅覚",
      "zh-CN": "嗅覚",
      "ko": "smell",
      "vi": "smell",
      "id": "smell"
    },
    "pos": "verb-godan",
    "ex": "嗅覚ことにする"
  },
  {
    "id": "V3262",
    "w": "味覚",
    "r": "みかく",
    "m": {
      "en": "taste",
      "zh-TW": "味覚",
      "zh-CN": "味覚",
      "ko": "taste",
      "vi": "taste",
      "id": "taste"
    },
    "pos": "verb-godan",
    "ex": "味覚ことにする"
  },
  {
    "id": "V3263",
    "w": "触覚",
    "r": "しょっかく",
    "m": {
      "en": "touch",
      "zh-TW": "触覚",
      "zh-CN": "触覚",
      "ko": "touch",
      "vi": "touch",
      "id": "touch"
    },
    "pos": "verb-godan",
    "ex": "触覚ことにする"
  },
  {
    "id": "V3264",
    "w": "痛覚",
    "r": "つうかく",
    "m": {
      "en": "pain sense",
      "zh-TW": "痛覚",
      "zh-CN": "痛覚",
      "ko": "pain sense",
      "vi": "pain sense",
      "id": "pain sense"
    },
    "pos": "verb-godan",
    "ex": "痛覚ことにする"
  },
  {
    "id": "V3265",
    "w": "温覚",
    "r": "おんかく",
    "m": {
      "en": "thermal sense",
      "zh-TW": "温覚",
      "zh-CN": "温覚",
      "ko": "thermal sense",
      "vi": "thermal sense",
      "id": "thermal sense"
    },
    "pos": "verb-godan",
    "ex": "温覚ことにする"
  },
  {
    "id": "V3266",
    "w": "平衡感覚",
    "r": "へいこうかんかく",
    "m": {
      "en": "balance",
      "zh-TW": "平衡感覚",
      "zh-CN": "平衡感覚",
      "ko": "balance",
      "vi": "balance",
      "id": "balance"
    },
    "pos": "verb-godan",
    "ex": "平衡感覚ことにする"
  },
  {
    "id": "V3267",
    "w": "直感",
    "r": "ちょっかん",
    "m": {
      "en": "intuition",
      "zh-TW": "直感",
      "zh-CN": "直感",
      "ko": "intuition",
      "vi": "intuition",
      "id": "intuition"
    },
    "pos": "noun",
    "ex": "直感について考える"
  },
  {
    "id": "V3268",
    "w": "おはよう",
    "r": "おはよう",
    "m": {
      "en": "good morning",
      "zh-TW": "おはよう",
      "zh-CN": "おはよう",
      "ko": "good morning",
      "vi": "good morning",
      "id": "good morning"
    },
    "pos": "verb-godan",
    "ex": "おはようことにする"
  },
  {
    "id": "V3269",
    "w": "こんにちは",
    "r": "こんにちは",
    "m": {
      "en": "hello",
      "zh-TW": "こんにちは",
      "zh-CN": "こんにちは",
      "ko": "hello",
      "vi": "hello",
      "id": "hello"
    },
    "pos": "noun",
    "ex": "こんにちはについて考える"
  },
  {
    "id": "V3270",
    "w": "こんばんは",
    "r": "こんばんは",
    "m": {
      "en": "good evening",
      "zh-TW": "こんばんは",
      "zh-CN": "こんばんは",
      "ko": "good evening",
      "vi": "good evening",
      "id": "good evening"
    },
    "pos": "noun",
    "ex": "こんばんはについて考える"
  },
  {
    "id": "V3271",
    "w": "さようなら",
    "r": "さようなら",
    "m": {
      "en": "goodbye",
      "zh-TW": "さようなら",
      "zh-CN": "さようなら",
      "ko": "goodbye",
      "vi": "goodbye",
      "id": "goodbye"
    },
    "pos": "noun",
    "ex": "さようならについて考える"
  },
  {
    "id": "V3272",
    "w": "またね",
    "r": "またね",
    "m": {
      "en": "see you",
      "zh-TW": "またね",
      "zh-CN": "またね",
      "ko": "see you",
      "vi": "see you",
      "id": "see you"
    },
    "pos": "noun",
    "ex": "またねについて考える"
  },
  {
    "id": "V3273",
    "w": "お疲れ様",
    "r": "おつかれさま",
    "m": {
      "en": "good work",
      "zh-TW": "お疲れ様",
      "zh-CN": "お疲れ様",
      "ko": "good work",
      "vi": "good work",
      "id": "good work"
    },
    "pos": "noun",
    "ex": "お疲れ様について考える"
  },
  {
    "id": "V3274",
    "w": "ご苦労様",
    "r": "ごくろうさま",
    "m": {
      "en": "thank you for your work",
      "zh-TW": "ご苦労様",
      "zh-CN": "ご苦労様",
      "ko": "thank you for your work",
      "vi": "thank you for your work",
      "id": "thank you for your work"
    },
    "pos": "noun",
    "ex": "ご苦労様について考える"
  },
  {
    "id": "V3275",
    "w": "いただきます",
    "r": "いただきます",
    "m": {
      "en": "bon appetit",
      "zh-TW": "いただきます",
      "zh-CN": "いただきます",
      "ko": "bon appetit",
      "vi": "bon appetit",
      "id": "bon appetit"
    },
    "pos": "verb-godan",
    "ex": "いただきますことにする"
  },
  {
    "id": "V3276",
    "w": "ごちそうさま",
    "r": "ごちそうさま",
    "m": {
      "en": "thank you for the meal",
      "zh-TW": "ごちそうさま",
      "zh-CN": "ごちそうさま",
      "ko": "thank you for the meal",
      "vi": "thank you for the meal",
      "id": "thank you for the meal"
    },
    "pos": "noun",
    "ex": "ごちそうさまについて考える"
  },
  {
    "id": "V3277",
    "w": "すみません",
    "r": "すみません",
    "m": {
      "en": "excuse me",
      "zh-TW": "すみません",
      "zh-CN": "すみません",
      "ko": "excuse me",
      "vi": "excuse me",
      "id": "excuse me"
    },
    "pos": "noun",
    "ex": "すみませんについて考える"
  },
  {
    "id": "V3278",
    "w": "ごめんなさい",
    "r": "ごめんなさい",
    "m": {
      "en": "I'm sorry",
      "zh-TW": "ごめんなさい",
      "zh-CN": "ごめんなさい",
      "ko": "I'm sorry",
      "vi": "I'm sorry",
      "id": "I'm sorry"
    },
    "pos": "i-adj",
    "ex": "とてもごめんなさいと思う"
  },
  {
    "id": "V3279",
    "w": "失礼します",
    "r": "しつれいします",
    "m": {
      "en": "excuse me",
      "zh-TW": "失礼します",
      "zh-CN": "失礼します",
      "ko": "excuse me",
      "vi": "excuse me",
      "id": "excuse me"
    },
    "pos": "verb-godan",
    "ex": "失礼しますことにする"
  },
  {
    "id": "V3280",
    "w": "お邪魔します",
    "r": "おじゃまします",
    "m": {
      "en": "sorry to bother you",
      "zh-TW": "お邪魔します",
      "zh-CN": "お邪魔します",
      "ko": "sorry to bother you",
      "vi": "sorry to bother you",
      "id": "sorry to bother you"
    },
    "pos": "verb-godan",
    "ex": "お邪魔しますことにする"
  },
  {
    "id": "V3281",
    "w": "よろしくお願いします",
    "r": "よろしくおねがいします",
    "m": {
      "en": "please take care of it",
      "zh-TW": "よろしくお願いします",
      "zh-CN": "よろしくお願いします",
      "ko": "please take care of it",
      "vi": "please take care of it",
      "id": "please take care of it"
    },
    "pos": "verb-godan",
    "ex": "よろしくお願いしますことにする"
  },
  {
    "id": "V3282",
    "w": "お世話になります",
    "r": "おせわになります",
    "m": {
      "en": "thank you for your help",
      "zh-TW": "お世話になります",
      "zh-CN": "お世話になります",
      "ko": "thank you for your help",
      "vi": "thank you for your help",
      "id": "thank you for your help"
    },
    "pos": "verb-godan",
    "ex": "お世話になりますことにする"
  },
  {
    "id": "V3283",
    "w": "今朝",
    "r": "けさ",
    "m": {
      "en": "this morning",
      "zh-TW": "今朝",
      "zh-CN": "今朝",
      "ko": "this morning",
      "vi": "this morning",
      "id": "this morning"
    },
    "pos": "noun",
    "ex": "今朝について考える"
  },
  {
    "id": "V3284",
    "w": "今晩",
    "r": "こんばん",
    "m": {
      "en": "tonight",
      "zh-TW": "今晩",
      "zh-CN": "今晩",
      "ko": "tonight",
      "vi": "tonight",
      "id": "tonight"
    },
    "pos": "noun",
    "ex": "今晩について考える"
  },
  {
    "id": "V3285",
    "w": "明朝",
    "r": "みょうちょう",
    "m": {
      "en": "tomorrow morning",
      "zh-TW": "明朝",
      "zh-CN": "明朝",
      "ko": "tomorrow morning",
      "vi": "tomorrow morning",
      "id": "tomorrow morning"
    },
    "pos": "verb-godan",
    "ex": "明朝ことにする"
  },
  {
    "id": "V3286",
    "w": "年度末",
    "r": "ねんどまつ",
    "m": {
      "en": "fiscal year end",
      "zh-TW": "年度末",
      "zh-CN": "年度末",
      "ko": "fiscal year end",
      "vi": "fiscal year end",
      "id": "fiscal year end"
    },
    "pos": "verb-godan",
    "ex": "年度末ことにする"
  },
  {
    "id": "V3287",
    "w": "都心",
    "r": "としん",
    "m": {
      "en": "city center",
      "zh-TW": "都心",
      "zh-CN": "都心",
      "ko": "city center",
      "vi": "city center",
      "id": "city center"
    },
    "pos": "noun",
    "ex": "都心について考える"
  },
  {
    "id": "V3288",
    "w": "郊外",
    "r": "こうがい",
    "m": {
      "en": "suburbs",
      "zh-TW": "郊外",
      "zh-CN": "郊外",
      "ko": "suburbs",
      "vi": "suburbs",
      "id": "suburbs"
    },
    "pos": "i-adj",
    "ex": "とても郊外と思う"
  },
  {
    "id": "V3289",
    "w": "住宅街",
    "r": "じゅうたくがい",
    "m": {
      "en": "residential area",
      "zh-TW": "住宅街",
      "zh-CN": "住宅街",
      "ko": "residential area",
      "vi": "residential area",
      "id": "residential area"
    },
    "pos": "i-adj",
    "ex": "とても住宅街と思う"
  },
  {
    "id": "V3290",
    "w": "商店街",
    "r": "しょうてんがい",
    "m": {
      "en": "shopping street",
      "zh-TW": "商店街",
      "zh-CN": "商店街",
      "ko": "shopping street",
      "vi": "shopping street",
      "id": "shopping street"
    },
    "pos": "i-adj",
    "ex": "とても商店街と思う"
  },
  {
    "id": "V3291",
    "w": "繁華街",
    "r": "はんかがい",
    "m": {
      "en": "downtown",
      "zh-TW": "繁華街",
      "zh-CN": "繁華街",
      "ko": "downtown",
      "vi": "downtown",
      "id": "downtown"
    },
    "pos": "i-adj",
    "ex": "とても繁華街と思う"
  },
  {
    "id": "V3292",
    "w": "オフィス街",
    "r": "おふぃすがい",
    "m": {
      "en": "business district",
      "zh-TW": "オフィス街",
      "zh-CN": "オフィス街",
      "ko": "business district",
      "vi": "business district",
      "id": "business district"
    },
    "pos": "i-adj",
    "ex": "とてもオフィス街と思う"
  },
  {
    "id": "V3293",
    "w": "駅前",
    "r": "えきまえ",
    "m": {
      "en": "in front of station",
      "zh-TW": "駅前",
      "zh-CN": "駅前",
      "ko": "in front of station",
      "vi": "in front of station",
      "id": "in front of station"
    },
    "pos": "noun",
    "ex": "駅前について考える"
  },
  {
    "id": "V3294",
    "w": "路地",
    "r": "ろじ",
    "m": {
      "en": "alley",
      "zh-TW": "路地",
      "zh-CN": "路地",
      "ko": "alley",
      "vi": "alley",
      "id": "alley"
    },
    "pos": "noun",
    "ex": "路地について考える"
  },
  {
    "id": "V3295",
    "w": "数十",
    "r": "すうじゅう",
    "m": {
      "en": "tens of",
      "zh-TW": "数十",
      "zh-CN": "数十",
      "ko": "tens of",
      "vi": "tens of",
      "id": "tens of"
    },
    "pos": "verb-godan",
    "ex": "数十ことにする"
  },
  {
    "id": "V3296",
    "w": "数百",
    "r": "すうひゃく",
    "m": {
      "en": "hundreds of",
      "zh-TW": "数百",
      "zh-CN": "数百",
      "ko": "hundreds of",
      "vi": "hundreds of",
      "id": "hundreds of"
    },
    "pos": "verb-godan",
    "ex": "数百ことにする"
  },
  {
    "id": "V3297",
    "w": "数千",
    "r": "すうせん",
    "m": {
      "en": "thousands of",
      "zh-TW": "数千",
      "zh-CN": "数千",
      "ko": "thousands of",
      "vi": "thousands of",
      "id": "thousands of"
    },
    "pos": "noun",
    "ex": "数千について考える"
  },
  {
    "id": "V3298",
    "w": "数万",
    "r": "すうまん",
    "m": {
      "en": "tens of thousands",
      "zh-TW": "数万",
      "zh-CN": "数万",
      "ko": "tens of thousands",
      "vi": "tens of thousands",
      "id": "tens of thousands"
    },
    "pos": "noun",
    "ex": "数万について考える"
  },
  {
    "id": "V3299",
    "w": "何十",
    "r": "なんじゅう",
    "m": {
      "en": "how many tens",
      "zh-TW": "何十",
      "zh-CN": "何十",
      "ko": "how many tens",
      "vi": "how many tens",
      "id": "how many tens"
    },
    "pos": "verb-godan",
    "ex": "何十ことにする"
  },
  {
    "id": "V3300",
    "w": "何百",
    "r": "なんびゃく",
    "m": {
      "en": "how many hundreds",
      "zh-TW": "何百",
      "zh-CN": "何百",
      "ko": "how many hundreds",
      "vi": "how many hundreds",
      "id": "how many hundreds"
    },
    "pos": "verb-godan",
    "ex": "何百ことにする"
  },
  {
    "id": "V3301",
    "w": "数倍",
    "r": "すうばい",
    "m": {
      "en": "several times",
      "zh-TW": "数倍",
      "zh-CN": "数倍",
      "ko": "several times",
      "vi": "several times",
      "id": "several times"
    },
    "pos": "i-adj",
    "ex": "とても数倍と思う"
  },
  {
    "id": "V3302",
    "w": "何倍",
    "r": "なんばい",
    "m": {
      "en": "how many times",
      "zh-TW": "何倍",
      "zh-CN": "何倍",
      "ko": "how many times",
      "vi": "how many times",
      "id": "how many times"
    },
    "pos": "i-adj",
    "ex": "とても何倍と思う"
  },
  {
    "id": "V3303",
    "w": "倍増",
    "r": "ばいぞう",
    "m": {
      "en": "doubling",
      "zh-TW": "倍増",
      "zh-CN": "倍増",
      "ko": "doubling",
      "vi": "doubling",
      "id": "doubling"
    },
    "pos": "verb-godan",
    "ex": "倍増ことにする"
  },
  {
    "id": "V3304",
    "w": "とても良い",
    "r": "とてもいい",
    "m": {
      "en": "very good",
      "zh-TW": "とても良い",
      "zh-CN": "とても良い",
      "ko": "very good",
      "vi": "very good",
      "id": "very good"
    },
    "pos": "i-adj",
    "ex": "とてもとても良いと思う"
  },
  {
    "id": "V3305",
    "w": "かなり悪い",
    "r": "かなりわるい",
    "m": {
      "en": "quite bad",
      "zh-TW": "かなり悪い",
      "zh-CN": "かなり悪い",
      "ko": "quite bad",
      "vi": "quite bad",
      "id": "quite bad"
    },
    "pos": "i-adj",
    "ex": "とてもかなり悪いと思う"
  },
  {
    "id": "V3306",
    "w": "非常に大きい",
    "r": "ひじょうにおおきい",
    "m": {
      "en": "extremely large",
      "zh-TW": "非常に大きい",
      "zh-CN": "非常に大きい",
      "ko": "extremely large",
      "vi": "extremely large",
      "id": "extremely large"
    },
    "pos": "i-adj",
    "ex": "とても非常に大きいと思う"
  },
  {
    "id": "V3307",
    "w": "極めて重要",
    "r": "きわめてじゅうよう",
    "m": {
      "en": "extremely important",
      "zh-TW": "極めて重要",
      "zh-CN": "極めて重要",
      "ko": "extremely important",
      "vi": "extremely important",
      "id": "extremely important"
    },
    "pos": "verb-godan",
    "ex": "極めて重要ことにする"
  },
  {
    "id": "V3308",
    "w": "比較的簡単",
    "r": "ひかくてきかんたん",
    "m": {
      "en": "relatively easy",
      "zh-TW": "比較的簡単",
      "zh-CN": "比較的簡単",
      "ko": "relatively easy",
      "vi": "relatively easy",
      "id": "relatively easy"
    },
    "pos": "noun",
    "ex": "比較的簡単について考える"
  },
  {
    "id": "V3309",
    "w": "意外と難しい",
    "r": "いがいとむずかしい",
    "m": {
      "en": "surprisingly difficult",
      "zh-TW": "意外と難しい",
      "zh-CN": "意外と難しい",
      "ko": "surprisingly difficult",
      "vi": "surprisingly difficult",
      "id": "surprisingly difficult"
    },
    "pos": "i-adj",
    "ex": "とても意外と難しいと思う"
  },
  {
    "id": "V3310",
    "w": "帰宅する",
    "r": "きたくする",
    "m": {
      "en": "to return home",
      "zh-TW": "帰宅する",
      "zh-CN": "帰宅する",
      "ko": "to return home",
      "vi": "to return home",
      "id": "to return home"
    },
    "pos": "verb-suru",
    "ex": "帰宅することが大切だ"
  },
  {
    "id": "V3311",
    "w": "通勤する",
    "r": "つうきんする",
    "m": {
      "en": "to commute",
      "zh-TW": "通勤する",
      "zh-CN": "通勤する",
      "ko": "to commute",
      "vi": "to commute",
      "id": "to commute"
    },
    "pos": "verb-suru",
    "ex": "通勤することが大切だ"
  },
  {
    "id": "V3312",
    "w": "転職する",
    "r": "てんしょくする",
    "m": {
      "en": "to change jobs",
      "zh-TW": "転職する",
      "zh-CN": "転職する",
      "ko": "to change jobs",
      "vi": "to change jobs",
      "id": "to change jobs"
    },
    "pos": "verb-suru",
    "ex": "転職することが大切だ"
  },
  {
    "id": "V3313",
    "w": "就職する",
    "r": "しゅうしょくする",
    "m": {
      "en": "to get a job",
      "zh-TW": "就職する",
      "zh-CN": "就職する",
      "ko": "to get a job",
      "vi": "to get a job",
      "id": "to get a job"
    },
    "pos": "verb-suru",
    "ex": "就職することが大切だ"
  },
  {
    "id": "V3314",
    "w": "退職する",
    "r": "たいしょくする",
    "m": {
      "en": "to retire",
      "zh-TW": "退職する",
      "zh-CN": "退職する",
      "ko": "to retire",
      "vi": "to retire",
      "id": "to retire"
    },
    "pos": "verb-suru",
    "ex": "退職することが大切だ"
  },
  {
    "id": "V3315",
    "w": "昇進する",
    "r": "しょうしんする",
    "m": {
      "en": "to be promoted",
      "zh-TW": "昇進する",
      "zh-CN": "昇進する",
      "ko": "to be promoted",
      "vi": "to be promoted",
      "id": "to be promoted"
    },
    "pos": "verb-suru",
    "ex": "昇進することが大切だ"
  },
  {
    "id": "V3316",
    "w": "異動する",
    "r": "いどうする",
    "m": {
      "en": "to transfer",
      "zh-TW": "異動する",
      "zh-CN": "異動する",
      "ko": "to transfer",
      "vi": "to transfer",
      "id": "to transfer"
    },
    "pos": "verb-suru",
    "ex": "異動することが大切だ"
  },
  {
    "id": "V3317",
    "w": "出張する",
    "r": "しゅっちょうする",
    "m": {
      "en": "to go on business trip",
      "zh-TW": "出張する",
      "zh-CN": "出張する",
      "ko": "to go on business trip",
      "vi": "to go on business trip",
      "id": "to go on business trip"
    },
    "pos": "verb-suru",
    "ex": "出張することが大切だ"
  },
  {
    "id": "V3318",
    "w": "残業する",
    "r": "ざんぎょうする",
    "m": {
      "en": "to work overtime",
      "zh-TW": "残業する",
      "zh-CN": "残業する",
      "ko": "to work overtime",
      "vi": "to work overtime",
      "id": "to work overtime"
    },
    "pos": "verb-suru",
    "ex": "残業することが大切だ"
  },
  {
    "id": "V3319",
    "w": "会議する",
    "r": "かいぎする",
    "m": {
      "en": "to have meeting",
      "zh-TW": "会議する",
      "zh-CN": "会議する",
      "ko": "to have meeting",
      "vi": "to have meeting",
      "id": "to have meeting"
    },
    "pos": "verb-suru",
    "ex": "会議することが大切だ"
  },
  {
    "id": "V3320",
    "w": "回答する",
    "r": "かいとうする",
    "m": {
      "en": "to answer",
      "zh-TW": "回答する",
      "zh-CN": "回答する",
      "ko": "to answer",
      "vi": "to answer",
      "id": "to answer"
    },
    "pos": "verb-suru",
    "ex": "回答することが大切だ"
  },
  {
    "id": "V3321",
    "w": "発表する",
    "r": "はっぴょうする",
    "m": {
      "en": "to present",
      "zh-TW": "発表する",
      "zh-CN": "発表する",
      "ko": "to present",
      "vi": "to present",
      "id": "to present"
    },
    "pos": "verb-suru",
    "ex": "発表することが大切だ"
  },
  {
    "id": "V3322",
    "w": "議論する",
    "r": "ぎろんする",
    "m": {
      "en": "to discuss",
      "zh-TW": "議論する",
      "zh-CN": "議論する",
      "ko": "to discuss",
      "vi": "to discuss",
      "id": "to discuss"
    },
    "pos": "verb-suru",
    "ex": "問題について議論する",
    "syn": [
      "討論する",
      "話し合う",
      "論じる"
    ]
  },
  {
    "id": "V3323",
    "w": "賛成する",
    "r": "さんせいする",
    "m": {
      "en": "to agree",
      "zh-TW": "賛成する",
      "zh-CN": "賛成する",
      "ko": "to agree",
      "vi": "to agree",
      "id": "to agree"
    },
    "pos": "verb-suru",
    "ex": "意見に賛成する",
    "syn": [
      "同意する",
      "支持する",
      "承認する"
    ]
  },
  {
    "id": "V3324",
    "w": "反対する",
    "r": "はんたいする",
    "m": {
      "en": "to oppose",
      "zh-TW": "反対する",
      "zh-CN": "反対する",
      "ko": "to oppose",
      "vi": "to oppose",
      "id": "to oppose"
    },
    "pos": "verb-suru",
    "ex": "計画に反対する",
    "syn": [
      "異議を唱える",
      "否定する",
      "拒否する"
    ]
  },
  {
    "id": "V3325",
    "w": "提案する",
    "r": "ていあんする",
    "m": {
      "en": "to propose",
      "zh-TW": "提案する",
      "zh-CN": "提案する",
      "ko": "to propose",
      "vi": "to propose",
      "id": "to propose"
    },
    "pos": "verb-suru",
    "ex": "新しい計画を提案する",
    "syn": [
      "提言する",
      "勧める",
      "申し出る"
    ]
  },
  {
    "id": "V3326",
    "w": "居間",
    "r": "いま",
    "m": {
      "en": "living room",
      "zh-TW": "居間",
      "zh-CN": "居間",
      "ko": "living room",
      "vi": "living room",
      "id": "living room"
    },
    "pos": "noun",
    "ex": "居間について考える"
  },
  {
    "id": "V3327",
    "w": "天井",
    "r": "てんじょう",
    "m": {
      "en": "ceiling",
      "zh-TW": "天井",
      "zh-CN": "天井",
      "ko": "ceiling",
      "vi": "ceiling",
      "id": "ceiling"
    },
    "pos": "verb-godan",
    "ex": "天井ことにする"
  },
  {
    "id": "V3328",
    "w": "高齢者",
    "r": "こうれいしゃ",
    "m": {
      "en": "elderly",
      "zh-TW": "高齢者",
      "zh-CN": "高齢者",
      "ko": "elderly",
      "vi": "elderly",
      "id": "elderly"
    },
    "pos": "noun",
    "ex": "高齢者について考える"
  },
  {
    "id": "V3329",
    "w": "外国人",
    "r": "がいこくじん",
    "m": {
      "en": "foreigner",
      "zh-TW": "外国人",
      "zh-CN": "外国人",
      "ko": "foreigner",
      "vi": "foreigner",
      "id": "foreigner"
    },
    "pos": "noun",
    "ex": "外国人について考える"
  },
  {
    "id": "V3330",
    "w": "日本人",
    "r": "にほんじん",
    "m": {
      "en": "Japanese",
      "zh-TW": "日本人",
      "zh-CN": "日本人",
      "ko": "Japanese",
      "vi": "Japanese",
      "id": "Japanese"
    },
    "pos": "noun",
    "ex": "日本人について考える"
  },
  {
    "id": "V3331",
    "w": "明日の朝",
    "r": "あしたのあさ",
    "m": {
      "en": "tomorrow morning",
      "zh-TW": "明日の朝",
      "zh-CN": "明日の朝",
      "ko": "tomorrow morning",
      "vi": "tomorrow morning",
      "id": "tomorrow morning"
    },
    "pos": "noun",
    "ex": "明日の朝について考える"
  },
  {
    "id": "V3332",
    "w": "再来週",
    "r": "さらいしゅう",
    "m": {
      "en": "week after next",
      "zh-TW": "再来週",
      "zh-CN": "再来週",
      "ko": "week after next",
      "vi": "week after next",
      "id": "week after next"
    },
    "pos": "verb-godan",
    "ex": "再来週ことにする"
  },
  {
    "id": "V3333",
    "w": "再来月",
    "r": "さらいげつ",
    "m": {
      "en": "month after next",
      "zh-TW": "再来月",
      "zh-CN": "再来月",
      "ko": "month after next",
      "vi": "month after next",
      "id": "month after next"
    },
    "pos": "verb-godan",
    "ex": "再来月ことにする"
  },
  {
    "id": "V3334",
    "w": "再来年",
    "r": "さらいねん",
    "m": {
      "en": "year after next",
      "zh-TW": "再来年",
      "zh-CN": "再来年",
      "ko": "year after next",
      "vi": "year after next",
      "id": "year after next"
    },
    "pos": "noun",
    "ex": "再来年について考える"
  },
  {
    "id": "V3335",
    "w": "駅裏",
    "r": "えきうら",
    "m": {
      "en": "behind station",
      "zh-TW": "駅裏",
      "zh-CN": "駅裏",
      "ko": "behind station",
      "vi": "behind station",
      "id": "behind station"
    },
    "pos": "noun",
    "ex": "駅裏について考える"
  },
  {
    "id": "V3336",
    "w": "駅構内",
    "r": "えきこうない",
    "m": {
      "en": "inside station",
      "zh-TW": "駅構内",
      "zh-CN": "駅構内",
      "ko": "inside station",
      "vi": "inside station",
      "id": "inside station"
    },
    "pos": "i-adj",
    "ex": "とても駅構内と思う"
  },
  {
    "id": "V3337",
    "w": "交差点",
    "r": "こうさてん",
    "m": {
      "en": "intersection",
      "zh-TW": "交差点",
      "zh-CN": "交差点",
      "ko": "intersection",
      "vi": "intersection",
      "id": "intersection"
    },
    "pos": "noun",
    "ex": "交差点について考える"
  },
  {
    "id": "V3338",
    "w": "信号",
    "r": "しんごう",
    "m": {
      "en": "traffic light",
      "zh-TW": "信号",
      "zh-CN": "信号",
      "ko": "traffic light",
      "vi": "traffic light",
      "id": "traffic light"
    },
    "pos": "verb-godan",
    "ex": "信号ことにする"
  },
  {
    "id": "V3339",
    "w": "車道",
    "r": "しゃどう",
    "m": {
      "en": "roadway",
      "zh-TW": "車道",
      "zh-CN": "車道",
      "ko": "roadway",
      "vi": "roadway",
      "id": "roadway"
    },
    "pos": "verb-godan",
    "ex": "車道ことにする"
  },
  {
    "id": "V3340",
    "w": "高速道路",
    "r": "こうそくどうろ",
    "m": {
      "en": "highway",
      "zh-TW": "高速道路",
      "zh-CN": "高速道路",
      "ko": "highway",
      "vi": "highway",
      "id": "highway"
    },
    "pos": "noun",
    "ex": "高速道路について考える"
  },
  {
    "id": "V3341",
    "w": "国道",
    "r": "こくどう",
    "m": {
      "en": "national road",
      "zh-TW": "国道",
      "zh-CN": "国道",
      "ko": "national road",
      "vi": "national road",
      "id": "national road"
    },
    "pos": "verb-godan",
    "ex": "国道ことにする"
  },
  {
    "id": "V3342",
    "w": "市役所",
    "r": "しやくしょ",
    "m": {
      "en": "city hall",
      "zh-TW": "市役所",
      "zh-CN": "市役所",
      "ko": "city hall",
      "vi": "city hall",
      "id": "city hall"
    },
    "pos": "noun",
    "ex": "市役所について考える"
  },
  {
    "id": "V3343",
    "w": "区役所",
    "r": "くやくしょ",
    "m": {
      "en": "ward office",
      "zh-TW": "区役所",
      "zh-CN": "区役所",
      "ko": "ward office",
      "vi": "ward office",
      "id": "ward office"
    },
    "pos": "noun",
    "ex": "区役所について考える"
  },
  {
    "id": "V3344",
    "w": "町役場",
    "r": "まちやくば",
    "m": {
      "en": "town hall",
      "zh-TW": "町役場",
      "zh-CN": "町役場",
      "ko": "town hall",
      "vi": "town hall",
      "id": "town hall"
    },
    "pos": "noun",
    "ex": "町役場について考える"
  },
  {
    "id": "V3345",
    "w": "警察署",
    "r": "けいさつしょ",
    "m": {
      "en": "police station",
      "zh-TW": "警察署",
      "zh-CN": "警察署",
      "ko": "police station",
      "vi": "police station",
      "id": "police station"
    },
    "pos": "noun",
    "ex": "警察署について考える"
  },
  {
    "id": "V3346",
    "w": "消防署",
    "r": "しょうぼうしょ",
    "m": {
      "en": "fire station",
      "zh-TW": "消防署",
      "zh-CN": "消防署",
      "ko": "fire station",
      "vi": "fire station",
      "id": "fire station"
    },
    "pos": "noun",
    "ex": "消防署について考える"
  },
  {
    "id": "V3347",
    "w": "体育館",
    "r": "たいいくかん",
    "m": {
      "en": "gymnasium",
      "zh-TW": "体育館",
      "zh-CN": "体育館",
      "ko": "gymnasium",
      "vi": "gymnasium",
      "id": "gymnasium"
    },
    "pos": "noun",
    "ex": "体育館について考える"
  },
  {
    "id": "V3348",
    "w": "公民館",
    "r": "こうみんかん",
    "m": {
      "en": "community center",
      "zh-TW": "公民館",
      "zh-CN": "公民館",
      "ko": "community center",
      "vi": "community center",
      "id": "community center"
    },
    "pos": "noun",
    "ex": "公民館について考える"
  },
  {
    "id": "V3349",
    "w": "文化センター",
    "r": "ぶんかせんたー",
    "m": {
      "en": "cultural center",
      "zh-TW": "文化センター",
      "zh-CN": "文化センター",
      "ko": "cultural center",
      "vi": "cultural center",
      "id": "cultural center"
    },
    "pos": "noun",
    "ex": "文化センターについて考える"
  },
  {
    "id": "V3350",
    "w": "部下",
    "r": "ぶか",
    "m": {
      "en": "subordinate",
      "zh-TW": "部下",
      "zh-CN": "部下",
      "ko": "subordinate",
      "vi": "subordinate",
      "id": "subordinate"
    },
    "pos": "noun",
    "ex": "部下について考える"
  },
  {
    "id": "V3351",
    "w": "同僚",
    "r": "どうりょう",
    "m": {
      "en": "colleague",
      "zh-TW": "同僚",
      "zh-CN": "同僚",
      "ko": "colleague",
      "vi": "colleague",
      "id": "colleague"
    },
    "pos": "verb-godan",
    "ex": "同僚ことにする"
  },
  {
    "id": "V3352",
    "w": "後輩",
    "r": "こうはい",
    "m": {
      "en": "junior",
      "zh-TW": "後輩",
      "zh-CN": "後輩",
      "ko": "junior",
      "vi": "junior",
      "id": "junior"
    },
    "pos": "i-adj",
    "ex": "とても後輩と思う"
  },
  {
    "id": "V3353",
    "w": "担当者",
    "r": "たんとうしゃ",
    "m": {
      "en": "person in charge",
      "zh-TW": "担当者",
      "zh-CN": "担当者",
      "ko": "person in charge",
      "vi": "person in charge",
      "id": "person in charge"
    },
    "pos": "noun",
    "ex": "担当者について考える"
  },
  {
    "id": "V3354",
    "w": "取引先",
    "r": "とりひきさき",
    "m": {
      "en": "business partner",
      "zh-TW": "取引先",
      "zh-CN": "取引先",
      "ko": "business partner",
      "vi": "business partner",
      "id": "business partner"
    },
    "pos": "noun",
    "ex": "取引先について考える"
  },
  {
    "id": "V3355",
    "w": "顧客",
    "r": "こきゃく",
    "m": {
      "en": "customer",
      "zh-TW": "顧客",
      "zh-CN": "顧客",
      "ko": "customer",
      "vi": "customer",
      "id": "customer"
    },
    "pos": "verb-godan",
    "ex": "顧客ことにする"
  },
  {
    "id": "V3356",
    "w": "お客様",
    "r": "おきゃくさま",
    "m": {
      "en": "customer",
      "zh-TW": "お客様",
      "zh-CN": "お客様",
      "ko": "customer",
      "vi": "customer",
      "id": "customer"
    },
    "pos": "noun",
    "ex": "お客様について考える"
  },
  {
    "id": "V3357",
    "w": "知り合い",
    "r": "しりあい",
    "m": {
      "en": "acquaintance",
      "zh-TW": "知り合い",
      "zh-CN": "知り合い",
      "ko": "acquaintance",
      "vi": "acquaintance",
      "id": "acquaintance"
    },
    "pos": "i-adj",
    "ex": "とても知り合いと思う"
  },
  {
    "id": "V3358",
    "w": "親友",
    "r": "しんゆう",
    "m": {
      "en": "close friend",
      "zh-TW": "親友",
      "zh-CN": "親友",
      "ko": "close friend",
      "vi": "close friend",
      "id": "close friend"
    },
    "pos": "verb-godan",
    "ex": "親友ことにする"
  },
  {
    "id": "V3359",
    "w": "祖父母",
    "r": "そふぼ",
    "m": {
      "en": "grandparents",
      "zh-TW": "祖父母",
      "zh-CN": "祖父母",
      "ko": "grandparents",
      "vi": "grandparents",
      "id": "grandparents"
    },
    "pos": "noun",
    "ex": "祖父母について考える"
  },
  {
    "id": "V3360",
    "w": "義理の父",
    "r": "ぎりのちち",
    "m": {
      "en": "father-in-law",
      "zh-TW": "義理の父",
      "zh-CN": "義理の父",
      "ko": "father-in-law",
      "vi": "father-in-law",
      "id": "father-in-law"
    },
    "pos": "noun",
    "ex": "義理の父について考える"
  },
  {
    "id": "V3361",
    "w": "義理の母",
    "r": "ぎりのはは",
    "m": {
      "en": "mother-in-law",
      "zh-TW": "義理の母",
      "zh-CN": "義理の母",
      "ko": "mother-in-law",
      "vi": "mother-in-law",
      "id": "mother-in-law"
    },
    "pos": "noun",
    "ex": "義理の母について考える"
  },
  {
    "id": "V3362",
    "w": "義理の兄",
    "r": "ぎりのあに",
    "m": {
      "en": "brother-in-law",
      "zh-TW": "義理の兄",
      "zh-CN": "義理の兄",
      "ko": "brother-in-law",
      "vi": "brother-in-law",
      "id": "brother-in-law"
    },
    "pos": "adverb",
    "ex": "義理の兄考える"
  },
  {
    "id": "V3363",
    "w": "義理の姉",
    "r": "ぎりのあね",
    "m": {
      "en": "sister-in-law",
      "zh-TW": "義理の姉",
      "zh-CN": "義理の姉",
      "ko": "sister-in-law",
      "vi": "sister-in-law",
      "id": "sister-in-law"
    },
    "pos": "noun",
    "ex": "義理の姉について考える"
  },
  {
    "id": "V3364",
    "w": "まぶた",
    "r": "まぶた",
    "m": {
      "en": "eyelid",
      "zh-TW": "まぶた",
      "zh-CN": "まぶた",
      "ko": "eyelid",
      "vi": "eyelid",
      "id": "eyelid"
    },
    "pos": "noun",
    "ex": "まぶたについて考える"
  },
  {
    "id": "V3365",
    "w": "まつ毛",
    "r": "まつげ",
    "m": {
      "en": "eyelash",
      "zh-TW": "まつ毛",
      "zh-CN": "まつ毛",
      "ko": "eyelash",
      "vi": "eyelash",
      "id": "eyelash"
    },
    "pos": "noun",
    "ex": "まつ毛について考える"
  },
  {
    "id": "V3366",
    "w": "顎",
    "r": "あご",
    "m": {
      "en": "chin",
      "zh-TW": "顎",
      "zh-CN": "顎",
      "ko": "chin",
      "vi": "chin",
      "id": "chin"
    },
    "pos": "noun",
    "ex": "顎について考える"
  },
  {
    "id": "V3367",
    "w": "足首",
    "r": "あしくび",
    "m": {
      "en": "ankle",
      "zh-TW": "足首",
      "zh-CN": "足首",
      "ko": "ankle",
      "vi": "ankle",
      "id": "ankle"
    },
    "pos": "noun",
    "ex": "足首について考える"
  },
  {
    "id": "V3368",
    "w": "かかと",
    "r": "かかと",
    "m": {
      "en": "heel",
      "zh-TW": "かかと",
      "zh-CN": "かかと",
      "ko": "heel",
      "vi": "heel",
      "id": "heel"
    },
    "pos": "adverb",
    "ex": "かかと考える"
  },
  {
    "id": "V3369",
    "w": "カーディガン",
    "r": "かーでぃがん",
    "m": {
      "en": "cardigan",
      "zh-TW": "カーディガン",
      "zh-CN": "カーディガン",
      "ko": "cardigan",
      "vi": "cardigan",
      "id": "cardigan"
    },
    "pos": "noun",
    "ex": "カーディガンについて考える"
  },
  {
    "id": "V3370",
    "w": "スーツ",
    "r": "すーつ",
    "m": {
      "en": "suit",
      "zh-TW": "スーツ",
      "zh-CN": "スーツ",
      "ko": "suit",
      "vi": "suit",
      "id": "suit"
    },
    "pos": "verb-godan",
    "ex": "スーツことにする"
  },
  {
    "id": "V3371",
    "w": "もらう",
    "r": "もらう",
    "m": {
      "en": "to receive",
      "zh-TW": "もらう",
      "zh-CN": "もらう",
      "ko": "to receive",
      "vi": "to receive",
      "id": "to receive"
    },
    "pos": "verb-godan",
    "ex": "もらうことにする"
  },
  {
    "id": "V3372",
    "w": "あげる",
    "r": "あげる",
    "m": {
      "en": "to give",
      "zh-TW": "あげる",
      "zh-CN": "あげる",
      "ko": "to give",
      "vi": "to give",
      "id": "to give"
    },
    "pos": "verb-godan",
    "ex": "あげることにする"
  },
  {
    "id": "V3373",
    "w": "消える",
    "r": "きえる",
    "m": {
      "en": "to disappear",
      "zh-TW": "消える",
      "zh-CN": "消える",
      "ko": "to disappear",
      "vi": "to disappear",
      "id": "to disappear"
    },
    "pos": "verb-ichidan",
    "ex": "消えることにする"
  },
  {
    "id": "V3374",
    "w": "上げる",
    "r": "あげる",
    "m": {
      "en": "to raise",
      "zh-TW": "上げる",
      "zh-CN": "上げる",
      "ko": "to raise",
      "vi": "to raise",
      "id": "to raise"
    },
    "pos": "verb-godan",
    "ex": "上げることにする"
  },
  {
    "id": "V3375",
    "w": "きれい",
    "r": "きれい",
    "m": {
      "en": "clean",
      "zh-TW": "きれい",
      "zh-CN": "きれい",
      "ko": "clean",
      "vi": "clean",
      "id": "clean"
    },
    "pos": "i-adj",
    "ex": "とてもきれいと思う"
  },
  {
    "id": "V3376",
    "w": "すごい",
    "r": "すごい",
    "m": {
      "en": "amazing",
      "zh-TW": "すごい",
      "zh-CN": "すごい",
      "ko": "amazing",
      "vi": "amazing",
      "id": "amazing"
    },
    "pos": "i-adj",
    "ex": "とてもすごいと思う"
  },
  {
    "id": "V3377",
    "w": "ひどい",
    "r": "ひどい",
    "m": {
      "en": "terrible",
      "zh-TW": "ひどい",
      "zh-CN": "ひどい",
      "ko": "terrible",
      "vi": "terrible",
      "id": "terrible"
    },
    "pos": "i-adj",
    "ex": "とてもひどいと思う"
  },
  {
    "id": "V3378",
    "w": "当たり前",
    "r": "あたりまえ",
    "m": {
      "en": "natural",
      "zh-TW": "当たり前",
      "zh-CN": "当たり前",
      "ko": "natural",
      "vi": "natural",
      "id": "natural"
    },
    "pos": "noun",
    "ex": "当たり前について考える"
  },
  {
    "id": "V3379",
    "w": "重大",
    "r": "じゅうだい",
    "m": {
      "en": "grave",
      "zh-TW": "重大",
      "zh-CN": "重大",
      "ko": "grave",
      "vi": "grave",
      "id": "grave"
    },
    "pos": "i-adj",
    "ex": "とても重大と思う"
  },
  {
    "id": "V3380",
    "w": "ニュース",
    "r": "にゅーす",
    "m": {
      "en": "news",
      "zh-TW": "ニュース",
      "zh-CN": "ニュース",
      "ko": "news",
      "vi": "news",
      "id": "news"
    },
    "pos": "verb-godan",
    "ex": "ニュースことにする"
  },
  {
    "id": "V3381",
    "w": "真実",
    "r": "しんじつ",
    "m": {
      "en": "truth",
      "zh-TW": "真実",
      "zh-CN": "真実",
      "ko": "truth",
      "vi": "truth",
      "id": "truth"
    },
    "pos": "verb-godan",
    "ex": "真実ことにする"
  },
  {
    "id": "V3382",
    "w": "小包",
    "r": "こづつみ",
    "m": {
      "en": "parcel",
      "zh-TW": "小包",
      "zh-CN": "小包",
      "ko": "parcel",
      "vi": "parcel",
      "id": "parcel"
    },
    "pos": "noun",
    "ex": "小包について考える"
  },
  {
    "id": "V3383",
    "w": "書類",
    "r": "しょるい",
    "m": {
      "en": "document",
      "zh-TW": "書類",
      "zh-CN": "書類",
      "ko": "document",
      "vi": "document",
      "id": "document"
    },
    "pos": "i-adj",
    "ex": "とても書類と思う"
  },
  {
    "id": "V3384",
    "w": "資料",
    "r": "しりょう",
    "m": {
      "en": "material",
      "zh-TW": "資料",
      "zh-CN": "資料",
      "ko": "material",
      "vi": "material",
      "id": "material"
    },
    "pos": "verb-godan",
    "ex": "資料ことにする"
  },
  {
    "id": "V3385",
    "w": "フォルダ",
    "r": "ふぉるだ",
    "m": {
      "en": "folder",
      "zh-TW": "フォルダ",
      "zh-CN": "フォルダ",
      "ko": "folder",
      "vi": "folder",
      "id": "folder"
    },
    "pos": "noun",
    "ex": "フォルダについて考える"
  },
  {
    "id": "V3386",
    "w": "絶対",
    "r": "ぜったい",
    "m": {
      "en": "absolutely",
      "zh-TW": "絶対",
      "zh-CN": "絶対",
      "ko": "absolutely",
      "vi": "absolutely",
      "id": "absolutely"
    },
    "pos": "i-adj",
    "ex": "とても絶対と思う"
  },
  {
    "id": "V3387",
    "w": "もしかしたら",
    "r": "もしかしたら",
    "m": {
      "en": "perhaps",
      "zh-TW": "もしかしたら",
      "zh-CN": "もしかしたら",
      "ko": "perhaps",
      "vi": "perhaps",
      "id": "perhaps"
    },
    "pos": "noun",
    "ex": "もしかしたらについて考える"
  },
  {
    "id": "V3388",
    "w": "よく",
    "r": "よく",
    "m": {
      "en": "often",
      "zh-TW": "よく",
      "zh-CN": "よく",
      "ko": "often",
      "vi": "often",
      "id": "often"
    },
    "pos": "verb-godan",
    "ex": "よくことにする"
  },
  {
    "id": "V3389",
    "w": "ずっと",
    "r": "ずっと",
    "m": {
      "en": "all the time",
      "zh-TW": "ずっと",
      "zh-CN": "ずっと",
      "ko": "all the time",
      "vi": "all the time",
      "id": "all the time"
    },
    "pos": "adverb",
    "ex": "ずっと考える"
  },
  {
    "id": "V3390",
    "w": "とうとう",
    "r": "とうとう",
    "m": {
      "en": "at last",
      "zh-TW": "とうとう",
      "zh-CN": "とうとう",
      "ko": "at last",
      "vi": "at last",
      "id": "at last"
    },
    "pos": "verb-godan",
    "ex": "とうとうことにする"
  },
  {
    "id": "V3391",
    "w": "段々",
    "r": "だんだん",
    "m": {
      "en": "gradually",
      "zh-TW": "段々",
      "zh-CN": "段々",
      "ko": "gradually",
      "vi": "gradually",
      "id": "gradually"
    },
    "pos": "noun",
    "ex": "段々について考える"
  },
  {
    "id": "V3392",
    "w": "それに",
    "r": "それに",
    "m": {
      "en": "moreover",
      "zh-TW": "それに",
      "zh-CN": "それに",
      "ko": "moreover",
      "vi": "moreover",
      "id": "moreover"
    },
    "pos": "adverb",
    "ex": "それに考える"
  },
  {
    "id": "V3393",
    "w": "パーセント",
    "r": "ぱーせんと",
    "m": {
      "en": "percent",
      "zh-TW": "パーセント",
      "zh-CN": "パーセント",
      "ko": "percent",
      "vi": "percent",
      "id": "percent"
    },
    "pos": "noun",
    "ex": "パーセントについて考える"
  },
  {
    "id": "V3394",
    "w": "パスタ",
    "r": "ぱすた",
    "m": {
      "en": "pasta",
      "zh-TW": "パスタ",
      "zh-CN": "パスタ",
      "ko": "pasta",
      "vi": "pasta",
      "id": "pasta"
    },
    "pos": "noun",
    "ex": "パスタについて考える"
  },
  {
    "id": "V3395",
    "w": "カレー",
    "r": "かれー",
    "m": {
      "en": "curry",
      "zh-TW": "カレー",
      "zh-CN": "カレー",
      "ko": "curry",
      "vi": "curry",
      "id": "curry"
    },
    "pos": "noun",
    "ex": "カレーについて考える"
  },
  {
    "id": "V3396",
    "w": "ステーキ",
    "r": "すてーき",
    "m": {
      "en": "steak",
      "zh-TW": "ステーキ",
      "zh-CN": "ステーキ",
      "ko": "steak",
      "vi": "steak",
      "id": "steak"
    },
    "pos": "noun",
    "ex": "ステーキについて考える"
  },
  {
    "id": "V3397",
    "w": "焼き魚",
    "r": "やきざかな",
    "m": {
      "en": "grilled fish",
      "zh-TW": "焼き魚",
      "zh-CN": "焼き魚",
      "ko": "grilled fish",
      "vi": "grilled fish",
      "id": "grilled fish"
    },
    "pos": "noun",
    "ex": "焼き魚について考える"
  },
  {
    "id": "V3398",
    "w": "唐揚げ",
    "r": "からあげ",
    "m": {
      "en": "fried chicken",
      "zh-TW": "唐揚げ",
      "zh-CN": "唐揚げ",
      "ko": "fried chicken",
      "vi": "fried chicken",
      "id": "fried chicken"
    },
    "pos": "noun",
    "ex": "唐揚げについて考える"
  },
  {
    "id": "V3399",
    "w": "ハンバーグ",
    "r": "はんばーぐ",
    "m": {
      "en": "hamburger steak",
      "zh-TW": "ハンバーグ",
      "zh-CN": "ハンバーグ",
      "ko": "hamburger steak",
      "vi": "hamburger steak",
      "id": "hamburger steak"
    },
    "pos": "verb-godan",
    "ex": "ハンバーグことにする"
  },
  {
    "id": "V3400",
    "w": "サラダ",
    "r": "さらだ",
    "m": {
      "en": "salad",
      "zh-TW": "サラダ",
      "zh-CN": "サラダ",
      "ko": "salad",
      "vi": "salad",
      "id": "salad"
    },
    "pos": "noun",
    "ex": "サラダについて考える"
  },
  {
    "id": "V3401",
    "w": "スープ",
    "r": "すーぷ",
    "m": {
      "en": "soup",
      "zh-TW": "スープ",
      "zh-CN": "スープ",
      "ko": "soup",
      "vi": "soup",
      "id": "soup"
    },
    "pos": "noun",
    "ex": "スープについて考える"
  },
  {
    "id": "V3402",
    "w": "定食",
    "r": "ていしょく",
    "m": {
      "en": "set meal",
      "zh-TW": "定食",
      "zh-CN": "定食",
      "ko": "set meal",
      "vi": "set meal",
      "id": "set meal"
    },
    "pos": "verb-godan",
    "ex": "定食ことにする"
  },
  {
    "id": "V3403",
    "w": "紅茶",
    "r": "こうちゃ",
    "m": {
      "en": "black tea",
      "zh-TW": "紅茶",
      "zh-CN": "紅茶",
      "ko": "black tea",
      "vi": "black tea",
      "id": "black tea"
    },
    "pos": "noun",
    "ex": "紅茶について考える"
  },
  {
    "id": "V3404",
    "w": "緑茶",
    "r": "りょくちゃ",
    "m": {
      "en": "green tea",
      "zh-TW": "緑茶",
      "zh-CN": "緑茶",
      "ko": "green tea",
      "vi": "green tea",
      "id": "green tea"
    },
    "pos": "noun",
    "ex": "緑茶について考える"
  },
  {
    "id": "V3405",
    "w": "ワイン",
    "r": "わいん",
    "m": {
      "en": "wine",
      "zh-TW": "ワイン",
      "zh-CN": "ワイン",
      "ko": "wine",
      "vi": "wine",
      "id": "wine"
    },
    "pos": "noun",
    "ex": "ワインについて考える"
  },
  {
    "id": "V3406",
    "w": "日本酒",
    "r": "にほんしゅ",
    "m": {
      "en": "sake",
      "zh-TW": "日本酒",
      "zh-CN": "日本酒",
      "ko": "sake",
      "vi": "sake",
      "id": "sake"
    },
    "pos": "noun",
    "ex": "日本酒について考える"
  },
  {
    "id": "V3407",
    "w": "焼酎",
    "r": "しょうちゅう",
    "m": {
      "en": "shochu",
      "zh-TW": "焼酎",
      "zh-CN": "焼酎",
      "ko": "shochu",
      "vi": "shochu",
      "id": "shochu"
    },
    "pos": "verb-godan",
    "ex": "焼酎ことにする"
  },
  {
    "id": "V3408",
    "w": "ウイスキー",
    "r": "ういすきー",
    "m": {
      "en": "whiskey",
      "zh-TW": "ウイスキー",
      "zh-CN": "ウイスキー",
      "ko": "whiskey",
      "vi": "whiskey",
      "id": "whiskey"
    },
    "pos": "noun",
    "ex": "ウイスキーについて考える"
  },
  {
    "id": "V3409",
    "w": "茹でる",
    "r": "ゆでる",
    "m": {
      "en": "to boil",
      "zh-TW": "茹でる",
      "zh-CN": "茹でる",
      "ko": "to boil",
      "vi": "to boil",
      "id": "to boil"
    },
    "pos": "verb-godan",
    "ex": "茹でることにする"
  },
  {
    "id": "V3410",
    "w": "和える",
    "r": "あえる",
    "m": {
      "en": "to dress",
      "zh-TW": "和える",
      "zh-CN": "和える",
      "ko": "to dress",
      "vi": "to dress",
      "id": "to dress"
    },
    "pos": "verb-ichidan",
    "ex": "和えることにする"
  },
  {
    "id": "V3411",
    "w": "味付け",
    "r": "あじつけ",
    "m": {
      "en": "seasoning",
      "zh-TW": "味付け",
      "zh-CN": "味付け",
      "ko": "seasoning",
      "vi": "seasoning",
      "id": "seasoning"
    },
    "pos": "noun",
    "ex": "味付けについて考える"
  },
  {
    "id": "V3412",
    "w": "まろやか",
    "r": "まろやか",
    "m": {
      "en": "mild",
      "zh-TW": "まろやか",
      "zh-CN": "まろやか",
      "ko": "mild",
      "vi": "mild",
      "id": "mild"
    },
    "pos": "noun",
    "ex": "まろやかについて考える"
  },
  {
    "id": "V3413",
    "w": "さっぱり",
    "r": "さっぱり",
    "m": {
      "en": "refreshing",
      "zh-TW": "さっぱり",
      "zh-CN": "さっぱり",
      "ko": "refreshing",
      "vi": "refreshing",
      "id": "refreshing"
    },
    "pos": "noun",
    "ex": "さっぱりについて考える"
  },
  {
    "id": "V3414",
    "w": "こってり",
    "r": "こってり",
    "m": {
      "en": "rich",
      "zh-TW": "こってり",
      "zh-CN": "こってり",
      "ko": "rich",
      "vi": "rich",
      "id": "rich"
    },
    "pos": "noun",
    "ex": "こってりについて考える"
  },
  {
    "id": "V3415",
    "w": "ピリッと",
    "r": "ぴりっと",
    "m": {
      "en": "spicy",
      "zh-TW": "ピリッと",
      "zh-CN": "ピリッと",
      "ko": "spicy",
      "vi": "spicy",
      "id": "spicy"
    },
    "pos": "adverb",
    "ex": "ピリッと考える"
  },
  {
    "id": "V3416",
    "w": "香ばしい",
    "r": "こうばしい",
    "m": {
      "en": "savory",
      "zh-TW": "香ばしい",
      "zh-CN": "香ばしい",
      "ko": "savory",
      "vi": "savory",
      "id": "savory"
    },
    "pos": "i-adj",
    "ex": "とても香ばしいと思う"
  },
  {
    "id": "V3417",
    "w": "ある",
    "r": "ある",
    "m": {
      "en": "to be",
      "zh-TW": "ある",
      "zh-CN": "ある",
      "ko": "to be",
      "vi": "to be",
      "id": "to be"
    },
    "pos": "verb-godan",
    "ex": "あることにする"
  },
  {
    "id": "V3418",
    "w": "いる",
    "r": "いる",
    "m": {
      "en": "to be",
      "zh-TW": "いる",
      "zh-CN": "いる",
      "ko": "to be",
      "vi": "to be",
      "id": "to be"
    },
    "pos": "verb-ichidan",
    "ex": "いることにする"
  },
  {
    "id": "V3419",
    "w": "なる",
    "r": "なる",
    "m": {
      "en": "to become",
      "zh-TW": "なる",
      "zh-CN": "なる",
      "ko": "to become",
      "vi": "to become",
      "id": "to become"
    },
    "pos": "verb-godan",
    "ex": "なることにする"
  },
  {
    "id": "V3420",
    "w": "できる",
    "r": "できる",
    "m": {
      "en": "to be able to",
      "zh-TW": "できる",
      "zh-CN": "できる",
      "ko": "to be able to",
      "vi": "to be able to",
      "id": "to be able to"
    },
    "pos": "verb-ichidan",
    "ex": "できることにする"
  },
  {
    "id": "V3421",
    "w": "要る",
    "r": "いる",
    "m": {
      "en": "to need",
      "zh-TW": "要る",
      "zh-CN": "要る",
      "ko": "to need",
      "vi": "to need",
      "id": "to need"
    },
    "pos": "verb-ichidan",
    "ex": "要ることにする"
  },
  {
    "id": "V3422",
    "w": "嗅ぐ",
    "r": "かぐ",
    "m": {
      "en": "to smell",
      "zh-TW": "嗅ぐ",
      "zh-CN": "嗅ぐ",
      "ko": "to smell",
      "vi": "to smell",
      "id": "to smell"
    },
    "pos": "verb-godan",
    "ex": "嗅ぐことにする"
  },
  {
    "id": "V3423",
    "w": "深夜",
    "r": "しんや",
    "m": {
      "en": "late night",
      "zh-TW": "深夜",
      "zh-CN": "深夜",
      "ko": "late night",
      "vi": "late night",
      "id": "late night"
    },
    "pos": "noun",
    "ex": "深夜について考える"
  },
  {
    "id": "V3424",
    "w": "明け方",
    "r": "あけがた",
    "m": {
      "en": "dawn",
      "zh-TW": "明け方",
      "zh-CN": "明け方",
      "ko": "dawn",
      "vi": "dawn",
      "id": "dawn"
    },
    "pos": "noun",
    "ex": "明け方について考える"
  },
  {
    "id": "V3425",
    "w": "日の出",
    "r": "ひので",
    "m": {
      "en": "sunrise",
      "zh-TW": "日の出",
      "zh-CN": "日の出",
      "ko": "sunrise",
      "vi": "sunrise",
      "id": "sunrise"
    },
    "pos": "noun",
    "ex": "日の出について考える"
  },
  {
    "id": "V3426",
    "w": "日の入り",
    "r": "ひのいり",
    "m": {
      "en": "sunset",
      "zh-TW": "日の入り",
      "zh-CN": "日の入り",
      "ko": "sunset",
      "vi": "sunset",
      "id": "sunset"
    },
    "pos": "noun",
    "ex": "日の入りについて考える"
  },
  {
    "id": "V3427",
    "w": "正午",
    "r": "しょうご",
    "m": {
      "en": "noon",
      "zh-TW": "正午",
      "zh-CN": "正午",
      "ko": "noon",
      "vi": "noon",
      "id": "noon"
    },
    "pos": "noun",
    "ex": "正午について考える"
  },
  {
    "id": "V3428",
    "w": "周り",
    "r": "まわり",
    "m": {
      "en": "surroundings",
      "zh-TW": "周り",
      "zh-CN": "周り",
      "ko": "surroundings",
      "vi": "surroundings",
      "id": "surroundings"
    },
    "pos": "noun",
    "ex": "周りについて考える"
  },
  {
    "id": "V3429",
    "w": "近く",
    "r": "ちかく",
    "m": {
      "en": "nearby",
      "zh-TW": "近く",
      "zh-CN": "近く",
      "ko": "nearby",
      "vi": "nearby",
      "id": "nearby"
    },
    "pos": "verb-godan",
    "ex": "近くことにする"
  },
  {
    "id": "V3430",
    "w": "遠く",
    "r": "とおく",
    "m": {
      "en": "far away",
      "zh-TW": "遠く",
      "zh-CN": "遠く",
      "ko": "far away",
      "vi": "far away",
      "id": "far away"
    },
    "pos": "verb-godan",
    "ex": "遠くことにする"
  },
  {
    "id": "V3431",
    "w": "端",
    "r": "はし",
    "m": {
      "en": "edge",
      "zh-TW": "端",
      "zh-CN": "端",
      "ko": "edge",
      "vi": "edge",
      "id": "edge"
    },
    "pos": "noun",
    "ex": "端について考える"
  },
  {
    "id": "V3432",
    "w": "目を覚ます",
    "r": "めをさます",
    "m": {
      "en": "to wake up",
      "zh-TW": "目を覚ます",
      "zh-CN": "目を覚ます",
      "ko": "to wake up",
      "vi": "to wake up",
      "id": "to wake up"
    },
    "pos": "verb-godan",
    "ex": "目を覚ますことにする"
  },
  {
    "id": "V3433",
    "w": "髪を整える",
    "r": "かみをととのえる",
    "m": {
      "en": "to fix hair",
      "zh-TW": "髪を整える",
      "zh-CN": "髪を整える",
      "ko": "to fix hair",
      "vi": "to fix hair",
      "id": "to fix hair"
    },
    "pos": "verb-ichidan",
    "ex": "髪を整えることにする"
  },
  {
    "id": "V3434",
    "w": "化粧する",
    "r": "けしょうする",
    "m": {
      "en": "to put on makeup",
      "zh-TW": "化粧する",
      "zh-CN": "化粧する",
      "ko": "to put on makeup",
      "vi": "to put on makeup",
      "id": "to put on makeup"
    },
    "pos": "verb-suru",
    "ex": "化粧することが大切だ"
  },
  {
    "id": "V3435",
    "w": "ひげを剃る",
    "r": "ひげをそる",
    "m": {
      "en": "to shave",
      "zh-TW": "ひげを剃る",
      "zh-CN": "ひげを剃る",
      "ko": "to shave",
      "vi": "to shave",
      "id": "to shave"
    },
    "pos": "verb-godan",
    "ex": "ひげを剃ることにする"
  },
  {
    "id": "V3436",
    "w": "身支度する",
    "r": "みじたくする",
    "m": {
      "en": "to get ready",
      "zh-TW": "身支度する",
      "zh-CN": "身支度する",
      "ko": "to get ready",
      "vi": "to get ready",
      "id": "to get ready"
    },
    "pos": "verb-suru",
    "ex": "身支度することが大切だ"
  },
  {
    "id": "V3437",
    "w": "出勤する",
    "r": "しゅっきんする",
    "m": {
      "en": "to go to work",
      "zh-TW": "出勤する",
      "zh-CN": "出勤する",
      "ko": "to go to work",
      "vi": "to go to work",
      "id": "to go to work"
    },
    "pos": "verb-suru",
    "ex": "出勤することが大切だ"
  },
  {
    "id": "V3438",
    "w": "くつろぐ",
    "r": "くつろぐ",
    "m": {
      "en": "to relax",
      "zh-TW": "くつろぐ",
      "zh-CN": "くつろぐ",
      "ko": "to relax",
      "vi": "to relax",
      "id": "to relax"
    },
    "pos": "verb-godan",
    "ex": "くつろぐことにする"
  },
  {
    "id": "V3439",
    "w": "のんびりする",
    "r": "のんびりする",
    "m": {
      "en": "to take it easy",
      "zh-TW": "のんびりする",
      "zh-CN": "のんびりする",
      "ko": "to take it easy",
      "vi": "to take it easy",
      "id": "to take it easy"
    },
    "pos": "verb-suru",
    "ex": "のんびりすることが大切だ"
  },
  {
    "id": "V3440",
    "w": "だらだらする",
    "r": "だらだらする",
    "m": {
      "en": "to lounge around",
      "zh-TW": "だらだらする",
      "zh-CN": "だらだらする",
      "ko": "to lounge around",
      "vi": "to lounge around",
      "id": "to lounge around"
    },
    "pos": "verb-suru",
    "ex": "だらだらすることが大切だ"
  },
  {
    "id": "V3441",
    "w": "箸を使う",
    "r": "はしをつかう",
    "m": {
      "en": "to use chopsticks",
      "zh-TW": "箸を使う",
      "zh-CN": "箸を使う",
      "ko": "to use chopsticks",
      "vi": "to use chopsticks",
      "id": "to use chopsticks"
    },
    "pos": "verb-godan",
    "ex": "箸を使うことにする"
  },
  {
    "id": "V3442",
    "w": "フォークを使う",
    "r": "ふぉーくをつかう",
    "m": {
      "en": "to use a fork",
      "zh-TW": "フォークを使う",
      "zh-CN": "フォークを使う",
      "ko": "to use a fork",
      "vi": "to use a fork",
      "id": "to use a fork"
    },
    "pos": "verb-godan",
    "ex": "フォークを使うことにする"
  },
  {
    "id": "V3443",
    "w": "ナイフを使う",
    "r": "ないふをつかう",
    "m": {
      "en": "to use a knife",
      "zh-TW": "ナイフを使う",
      "zh-CN": "ナイフを使う",
      "ko": "to use a knife",
      "vi": "to use a knife",
      "id": "to use a knife"
    },
    "pos": "verb-godan",
    "ex": "ナイフを使うことにする"
  },
  {
    "id": "V3444",
    "w": "取り分ける",
    "r": "とりわける",
    "m": {
      "en": "to serve",
      "zh-TW": "取り分ける",
      "zh-CN": "取り分ける",
      "ko": "to serve",
      "vi": "to serve",
      "id": "to serve"
    },
    "pos": "verb-ichidan",
    "ex": "取り分けることにする"
  },
  {
    "id": "V3445",
    "w": "おかわりする",
    "r": "おかわりする",
    "m": {
      "en": "to have seconds",
      "zh-TW": "おかわりする",
      "zh-CN": "おかわりする",
      "ko": "to have seconds",
      "vi": "to have seconds",
      "id": "to have seconds"
    },
    "pos": "verb-suru",
    "ex": "おかわりすることが大切だ"
  },
  {
    "id": "V3446",
    "w": "味わう",
    "r": "あじわう",
    "m": {
      "en": "to savor",
      "zh-TW": "味わう",
      "zh-CN": "味わう",
      "ko": "to savor",
      "vi": "to savor",
      "id": "to savor"
    },
    "pos": "verb-godan",
    "ex": "味わうことにする"
  },
  {
    "id": "V3447",
    "w": "すする",
    "r": "すする",
    "m": {
      "en": "to slurp",
      "zh-TW": "すする",
      "zh-CN": "すする",
      "ko": "to slurp",
      "vi": "to slurp",
      "id": "to slurp"
    },
    "pos": "verb-suru",
    "ex": "すすることが大切だ"
  },
  {
    "id": "V3448",
    "w": "こぼす",
    "r": "こぼす",
    "m": {
      "en": "to spill",
      "zh-TW": "こぼす",
      "zh-CN": "こぼす",
      "ko": "to spill",
      "vi": "to spill",
      "id": "to spill"
    },
    "pos": "verb-godan",
    "ex": "こぼすことにする"
  },
  {
    "id": "V3449",
    "w": "信号を渡る",
    "r": "しんごうをわたる",
    "m": {
      "en": "to cross at signal",
      "zh-TW": "信号を渡る",
      "zh-CN": "信号を渡る",
      "ko": "to cross at signal",
      "vi": "to cross at signal",
      "id": "to cross at signal"
    },
    "pos": "verb-godan",
    "ex": "信号を渡ることにする"
  },
  {
    "id": "V3450",
    "w": "横断歩道を渡る",
    "r": "おうだんほどうをわたる",
    "m": {
      "en": "to cross crosswalk",
      "zh-TW": "横断歩道を渡る",
      "zh-CN": "横断歩道を渡る",
      "ko": "to cross crosswalk",
      "vi": "to cross crosswalk",
      "id": "to cross crosswalk"
    },
    "pos": "verb-godan",
    "ex": "横断歩道を渡ることにする"
  },
  {
    "id": "V3451",
    "w": "角を曲がる",
    "r": "かどをまがる",
    "m": {
      "en": "to turn corner",
      "zh-TW": "角を曲がる",
      "zh-CN": "角を曲がる",
      "ko": "to turn corner",
      "vi": "to turn corner",
      "id": "to turn corner"
    },
    "pos": "verb-godan",
    "ex": "角を曲がることにする"
  },
  {
    "id": "V3452",
    "w": "道に迷う",
    "r": "みちにまよう",
    "m": {
      "en": "to get lost",
      "zh-TW": "道に迷う",
      "zh-CN": "道に迷う",
      "ko": "to get lost",
      "vi": "to get lost",
      "id": "to get lost"
    },
    "pos": "verb-godan",
    "ex": "道に迷うことにする"
  },
  {
    "id": "V3453",
    "w": "道を尋ねる",
    "r": "みちをたずねる",
    "m": {
      "en": "to ask for directions",
      "zh-TW": "道を尋ねる",
      "zh-CN": "道を尋ねる",
      "ko": "to ask for directions",
      "vi": "to ask for directions",
      "id": "to ask for directions"
    },
    "pos": "verb-ichidan",
    "ex": "道を尋ねることにする"
  },
  {
    "id": "V3454",
    "w": "近道する",
    "r": "ちかみちする",
    "m": {
      "en": "to take shortcut",
      "zh-TW": "近道する",
      "zh-CN": "近道する",
      "ko": "to take shortcut",
      "vi": "to take shortcut",
      "id": "to take shortcut"
    },
    "pos": "verb-suru",
    "ex": "近道することが大切だ"
  },
  {
    "id": "V3455",
    "w": "遠回りする",
    "r": "とおまわりする",
    "m": {
      "en": "to take detour",
      "zh-TW": "遠回りする",
      "zh-CN": "遠回りする",
      "ko": "to take detour",
      "vi": "to take detour",
      "id": "to take detour"
    },
    "pos": "verb-suru",
    "ex": "遠回りすることが大切だ"
  },
  {
    "id": "V3456",
    "w": "ゆっくり歩く",
    "r": "ゆっくりあるく",
    "m": {
      "en": "to walk slowly",
      "zh-TW": "ゆっくり歩く",
      "zh-CN": "ゆっくり歩く",
      "ko": "to walk slowly",
      "vi": "to walk slowly",
      "id": "to walk slowly"
    },
    "pos": "verb-godan",
    "ex": "ゆっくり歩くことにする"
  },
  {
    "id": "V3457",
    "w": "駆け足で行く",
    "r": "かけあしでいく",
    "m": {
      "en": "to run",
      "zh-TW": "駆け足で行く",
      "zh-CN": "駆け足で行く",
      "ko": "to run",
      "vi": "to run",
      "id": "to run"
    },
    "pos": "verb-godan",
    "ex": "駆け足で行くことにする"
  },
  {
    "id": "V3458",
    "w": "追いかける",
    "r": "おいかける",
    "m": {
      "en": "to chase",
      "zh-TW": "追いかける",
      "zh-CN": "追いかける",
      "ko": "to chase",
      "vi": "to chase",
      "id": "to chase"
    },
    "pos": "verb-ichidan",
    "ex": "追いかけることにする"
  },
  {
    "id": "V3459",
    "w": "商品を探す",
    "r": "しょうひんをさがす",
    "m": {
      "en": "to look for product",
      "zh-TW": "商品を探す",
      "zh-CN": "商品を探す",
      "ko": "to look for product",
      "vi": "to look for product",
      "id": "to look for product"
    },
    "pos": "verb-godan",
    "ex": "商品を探すことにする"
  },
  {
    "id": "V3460",
    "w": "商品を選ぶ",
    "r": "しょうひんをえらぶ",
    "m": {
      "en": "to choose product",
      "zh-TW": "商品を選ぶ",
      "zh-CN": "商品を選ぶ",
      "ko": "to choose product",
      "vi": "to choose product",
      "id": "to choose product"
    },
    "pos": "verb-godan",
    "ex": "商品を選ぶことにする"
  },
  {
    "id": "V3461",
    "w": "サイズを確認する",
    "r": "さいずをかくにんする",
    "m": {
      "en": "to check size",
      "zh-TW": "サイズを確認する",
      "zh-CN": "サイズを確認する",
      "ko": "to check size",
      "vi": "to check size",
      "id": "to check size"
    },
    "pos": "verb-suru",
    "ex": "サイズを確認することが大切だ"
  },
  {
    "id": "V3462",
    "w": "色違いを見る",
    "r": "いろちがいをみる",
    "m": {
      "en": "to see other colors",
      "zh-TW": "色違いを見る",
      "zh-CN": "色違いを見る",
      "ko": "to see other colors",
      "vi": "to see other colors",
      "id": "to see other colors"
    },
    "pos": "verb-ichidan",
    "ex": "色違いを見ることにする"
  },
  {
    "id": "V3463",
    "w": "在庫を聞く",
    "r": "ざいこをきく",
    "m": {
      "en": "to ask about stock",
      "zh-TW": "在庫を聞く",
      "zh-CN": "在庫を聞く",
      "ko": "to ask about stock",
      "vi": "to ask about stock",
      "id": "to ask about stock"
    },
    "pos": "verb-godan",
    "ex": "在庫を聞くことにする"
  },
  {
    "id": "V3464",
    "w": "取り寄せる",
    "r": "とりよせる",
    "m": {
      "en": "to order",
      "zh-TW": "取り寄せる",
      "zh-CN": "取り寄せる",
      "ko": "to order",
      "vi": "to order",
      "id": "to order"
    },
    "pos": "verb-ichidan",
    "ex": "取り寄せることにする"
  },
  {
    "id": "V3465",
    "w": "キャンセルする",
    "r": "きゃんせるする",
    "m": {
      "en": "to cancel",
      "zh-TW": "キャンセルする",
      "zh-CN": "キャンセルする",
      "ko": "to cancel",
      "vi": "to cancel",
      "id": "to cancel"
    },
    "pos": "verb-suru",
    "ex": "キャンセルすることが大切だ"
  },
  {
    "id": "V3466",
    "w": "返品する",
    "r": "へんぴんする",
    "m": {
      "en": "to return item",
      "zh-TW": "返品する",
      "zh-CN": "返品する",
      "ko": "to return item",
      "vi": "to return item",
      "id": "to return item"
    },
    "pos": "verb-suru",
    "ex": "返品することが大切だ"
  },
  {
    "id": "V3467",
    "w": "交換する",
    "r": "こうかんする",
    "m": {
      "en": "to exchange",
      "zh-TW": "交換する",
      "zh-CN": "交換する",
      "ko": "to exchange",
      "vi": "to exchange",
      "id": "to exchange"
    },
    "pos": "verb-suru",
    "ex": "交換することが大切だ"
  },
  {
    "id": "V3468",
    "w": "修理に出す",
    "r": "しゅうりにだす",
    "m": {
      "en": "to send for repair",
      "zh-TW": "修理に出す",
      "zh-CN": "修理に出す",
      "ko": "to send for repair",
      "vi": "to send for repair",
      "id": "to send for repair"
    },
    "pos": "verb-godan",
    "ex": "修理に出すことにする"
  },
  {
    "id": "V3469",
    "w": "出社する",
    "r": "しゅっしゃする",
    "m": {
      "en": "to come to office",
      "zh-TW": "出社する",
      "zh-CN": "出社する",
      "ko": "to come to office",
      "vi": "to come to office",
      "id": "to come to office"
    },
    "pos": "verb-suru",
    "ex": "出社することが大切だ"
  },
  {
    "id": "V3470",
    "w": "退社する",
    "r": "たいしゃする",
    "m": {
      "en": "to leave office",
      "zh-TW": "退社する",
      "zh-CN": "退社する",
      "ko": "to leave office",
      "vi": "to leave office",
      "id": "to leave office"
    },
    "pos": "verb-suru",
    "ex": "退社することが大切だ"
  },
  {
    "id": "V3471",
    "w": "外出する",
    "r": "がいしゅつする",
    "m": {
      "en": "to go out",
      "zh-TW": "外出する",
      "zh-CN": "外出する",
      "ko": "to go out",
      "vi": "to go out",
      "id": "to go out"
    },
    "pos": "verb-suru",
    "ex": "外出することが大切だ"
  },
  {
    "id": "V3472",
    "w": "直行する",
    "r": "ちょっこうする",
    "m": {
      "en": "to go directly",
      "zh-TW": "直行する",
      "zh-CN": "直行する",
      "ko": "to go directly",
      "vi": "to go directly",
      "id": "to go directly"
    },
    "pos": "verb-suru",
    "ex": "直行することが大切だ"
  },
  {
    "id": "V3473",
    "w": "直帰する",
    "r": "ちょっきする",
    "m": {
      "en": "to go home directly",
      "zh-TW": "直帰する",
      "zh-CN": "直帰する",
      "ko": "to go home directly",
      "vi": "to go home directly",
      "id": "to go home directly"
    },
    "pos": "verb-suru",
    "ex": "直帰することが大切だ"
  },
  {
    "id": "V3474",
    "w": "打ち合わせする",
    "r": "うちあわせする",
    "m": {
      "en": "to have meeting",
      "zh-TW": "打ち合わせする",
      "zh-CN": "打ち合わせする",
      "ko": "to have meeting",
      "vi": "to have meeting",
      "id": "to have meeting"
    },
    "pos": "verb-suru",
    "ex": "打ち合わせすることが大切だ"
  },
  {
    "id": "V3475",
    "w": "資料を作る",
    "r": "しりょうをつくる",
    "m": {
      "en": "to prepare materials",
      "zh-TW": "資料を作る",
      "zh-CN": "資料を作る",
      "ko": "to prepare materials",
      "vi": "to prepare materials",
      "id": "to prepare materials"
    },
    "pos": "verb-godan",
    "ex": "資料を作ることにする"
  },
  {
    "id": "V3476",
    "w": "メモを取る",
    "r": "めもをとる",
    "m": {
      "en": "to take notes",
      "zh-TW": "メモを取る",
      "zh-CN": "メモを取る",
      "ko": "to take notes",
      "vi": "to take notes",
      "id": "to take notes"
    },
    "pos": "verb-godan",
    "ex": "メモを取ることにする"
  },
  {
    "id": "V3477",
    "w": "コピーを取る",
    "r": "こぴーをとる",
    "m": {
      "en": "to make copies",
      "zh-TW": "コピーを取る",
      "zh-CN": "コピーを取る",
      "ko": "to make copies",
      "vi": "to make copies",
      "id": "to make copies"
    },
    "pos": "verb-godan",
    "ex": "コピーを取ることにする"
  },
  {
    "id": "V3478",
    "w": "ファイルする",
    "r": "ふぁいるする",
    "m": {
      "en": "to file",
      "zh-TW": "ファイルする",
      "zh-CN": "ファイルする",
      "ko": "to file",
      "vi": "to file",
      "id": "to file"
    },
    "pos": "verb-suru",
    "ex": "ファイルすることが大切だ"
  },
  {
    "id": "V3479",
    "w": "声をかける",
    "r": "こえをかける",
    "m": {
      "en": "to call out",
      "zh-TW": "声をかける",
      "zh-CN": "声をかける",
      "ko": "to call out",
      "vi": "to call out",
      "id": "to call out"
    },
    "pos": "verb-ichidan",
    "ex": "声をかけることにする"
  },
  {
    "id": "V3480",
    "w": "呼びかける",
    "r": "よびかける",
    "m": {
      "en": "to call",
      "zh-TW": "呼びかける",
      "zh-CN": "呼びかける",
      "ko": "to call",
      "vi": "to call",
      "id": "to call"
    },
    "pos": "verb-ichidan",
    "ex": "呼びかけることにする"
  },
  {
    "id": "V3481",
    "w": "アドバイスする",
    "r": "あどばいすする",
    "m": {
      "en": "to advise",
      "zh-TW": "アドバイスする",
      "zh-CN": "アドバイスする",
      "ko": "to advise",
      "vi": "to advise",
      "id": "to advise"
    },
    "pos": "verb-suru",
    "ex": "アドバイスすることが大切だ"
  },
  {
    "id": "V3482",
    "w": "お願いする",
    "r": "おねがいする",
    "m": {
      "en": "to request",
      "zh-TW": "お願いする",
      "zh-CN": "お願いする",
      "ko": "to request",
      "vi": "to request",
      "id": "to request"
    },
    "pos": "verb-suru",
    "ex": "お願いすることが大切だ"
  },
  {
    "id": "V3483",
    "w": "承諾する",
    "r": "しょうだくする",
    "m": {
      "en": "to consent",
      "zh-TW": "承諾する",
      "zh-CN": "承諾する",
      "ko": "to consent",
      "vi": "to consent",
      "id": "to consent"
    },
    "pos": "verb-suru",
    "ex": "承諾することが大切だ"
  },
  {
    "id": "V3484",
    "w": "許可する",
    "r": "きょかする",
    "m": {
      "en": "to permit",
      "zh-TW": "許可する",
      "zh-CN": "許可する",
      "ko": "to permit",
      "vi": "to permit",
      "id": "to permit"
    },
    "pos": "verb-suru",
    "ex": "許可することが大切だ"
  },
  {
    "id": "V3485",
    "w": "禁止する",
    "r": "きんしする",
    "m": {
      "en": "to prohibit",
      "zh-TW": "禁止する",
      "zh-CN": "禁止する",
      "ko": "to prohibit",
      "vi": "to prohibit",
      "id": "to prohibit"
    },
    "pos": "verb-suru",
    "ex": "禁止することが大切だ"
  },
  {
    "id": "V3486",
    "w": "落ち込む",
    "r": "おちこむ",
    "m": {
      "en": "to feel down",
      "zh-TW": "落ち込む",
      "zh-CN": "落ち込む",
      "ko": "to feel down",
      "vi": "to feel down",
      "id": "to feel down"
    },
    "pos": "verb-godan",
    "ex": "落ち込むことにする"
  },
  {
    "id": "V3487",
    "w": "元気が出る",
    "r": "げんきがでる",
    "m": {
      "en": "to cheer up",
      "zh-TW": "元気が出る",
      "zh-CN": "元気が出る",
      "ko": "to cheer up",
      "vi": "to cheer up",
      "id": "to cheer up"
    },
    "pos": "verb-godan",
    "ex": "元気が出ることにする"
  },
  {
    "id": "V3488",
    "w": "気分転換する",
    "r": "きぶんてんかんする",
    "m": {
      "en": "to change mood",
      "zh-TW": "気分転換する",
      "zh-CN": "気分転換する",
      "ko": "to change mood",
      "vi": "to change mood",
      "id": "to change mood"
    },
    "pos": "verb-suru",
    "ex": "気分転換することが大切だ"
  },
  {
    "id": "V3489",
    "w": "ストレスが溜まる",
    "r": "すとれすがたまる",
    "m": {
      "en": "to feel stressed",
      "zh-TW": "ストレスが溜まる",
      "zh-CN": "ストレスが溜まる",
      "ko": "to feel stressed",
      "vi": "to feel stressed",
      "id": "to feel stressed"
    },
    "pos": "verb-godan",
    "ex": "ストレスが溜まることにする"
  },
  {
    "id": "V3490",
    "w": "気が晴れる",
    "r": "きがはれる",
    "m": {
      "en": "to feel better",
      "zh-TW": "気が晴れる",
      "zh-CN": "気が晴れる",
      "ko": "to feel better",
      "vi": "to feel better",
      "id": "to feel better"
    },
    "pos": "verb-ichidan",
    "ex": "気が晴れることにする"
  },
  {
    "id": "V3491",
    "w": "冷静になる",
    "r": "れいせいになる",
    "m": {
      "en": "to calm down",
      "zh-TW": "冷静になる",
      "zh-CN": "冷静になる",
      "ko": "to calm down",
      "vi": "to calm down",
      "id": "to calm down"
    },
    "pos": "verb-godan",
    "ex": "冷静になることにする"
  },
  {
    "id": "V3492",
    "w": "我慢する",
    "r": "がまんする",
    "m": {
      "en": "to endure",
      "zh-TW": "我慢する",
      "zh-CN": "我慢する",
      "ko": "to endure",
      "vi": "to endure",
      "id": "to endure"
    },
    "pos": "verb-suru",
    "ex": "我慢することが大切だ"
  },
  {
    "id": "V3493",
    "w": "映画を見る",
    "r": "えいがをみる",
    "m": {
      "en": "to watch movie",
      "zh-TW": "映画を見る",
      "zh-CN": "映画を見る",
      "ko": "to watch movie",
      "vi": "to watch movie",
      "id": "to watch movie"
    },
    "pos": "verb-ichidan",
    "ex": "映画を見ることにする"
  },
  {
    "id": "V3494",
    "w": "ドラマを見る",
    "r": "どらまをみる",
    "m": {
      "en": "to watch drama",
      "zh-TW": "ドラマを見る",
      "zh-CN": "ドラマを見る",
      "ko": "to watch drama",
      "vi": "to watch drama",
      "id": "to watch drama"
    },
    "pos": "verb-ichidan",
    "ex": "ドラマを見ることにする"
  },
  {
    "id": "V3495",
    "w": "アニメを見る",
    "r": "あにめをみる",
    "m": {
      "en": "to watch anime",
      "zh-TW": "アニメを見る",
      "zh-CN": "アニメを見る",
      "ko": "to watch anime",
      "vi": "to watch anime",
      "id": "to watch anime"
    },
    "pos": "verb-ichidan",
    "ex": "アニメを見ることにする"
  },
  {
    "id": "V3496",
    "w": "音楽を聴く",
    "r": "おんがくをきく",
    "m": {
      "en": "to listen to music",
      "zh-TW": "音楽を聴く",
      "zh-CN": "音楽を聴く",
      "ko": "to listen to music",
      "vi": "to listen to music",
      "id": "to listen to music"
    },
    "pos": "verb-godan",
    "ex": "音楽を聴くことにする"
  },
  {
    "id": "V3497",
    "w": "歌を歌う",
    "r": "うたをうたう",
    "m": {
      "en": "to sing",
      "zh-TW": "歌を歌う",
      "zh-CN": "歌を歌う",
      "ko": "to sing",
      "vi": "to sing",
      "id": "to sing"
    },
    "pos": "verb-godan",
    "ex": "歌を歌うことにする"
  },
  {
    "id": "V3498",
    "w": "楽器を弾く",
    "r": "がっきをひく",
    "m": {
      "en": "to play instrument",
      "zh-TW": "楽器を弾く",
      "zh-CN": "楽器を弾く",
      "ko": "to play instrument",
      "vi": "to play instrument",
      "id": "to play instrument"
    },
    "pos": "verb-godan",
    "ex": "楽器を弾くことにする"
  },
  {
    "id": "V3499",
    "w": "本を読む",
    "r": "ほんをよむ",
    "m": {
      "en": "to read book",
      "zh-TW": "本を読む",
      "zh-CN": "本を読む",
      "ko": "to read book",
      "vi": "to read book",
      "id": "to read book"
    },
    "pos": "verb-godan",
    "ex": "本を読むことにする"
  },
  {
    "id": "V3500",
    "w": "漫画を読む",
    "r": "まんがをよむ",
    "m": {
      "en": "to read manga",
      "zh-TW": "漫画を読む",
      "zh-CN": "漫画を読む",
      "ko": "to read manga",
      "vi": "to read manga",
      "id": "to read manga"
    },
    "pos": "verb-godan",
    "ex": "漫画を読むことにする"
  },
  {
    "id": "V3501",
    "w": "雑誌を読む",
    "r": "ざっしをよむ",
    "m": {
      "en": "to read magazine",
      "zh-TW": "雑誌を読む",
      "zh-CN": "雑誌を読む",
      "ko": "to read magazine",
      "vi": "to read magazine",
      "id": "to read magazine"
    },
    "pos": "verb-godan",
    "ex": "雑誌を読むことにする"
  },
  {
    "id": "V3502",
    "w": "ゲームをする",
    "r": "げーむをする",
    "m": {
      "en": "to play game",
      "zh-TW": "ゲームをする",
      "zh-CN": "ゲームをする",
      "ko": "to play game",
      "vi": "to play game",
      "id": "to play game"
    },
    "pos": "verb-suru",
    "ex": "ゲームをすることが大切だ"
  },
  {
    "id": "V3503",
    "w": "散歩する",
    "r": "さんぽする",
    "m": {
      "en": "to take walk",
      "zh-TW": "散歩する",
      "zh-CN": "散歩する",
      "ko": "to take walk",
      "vi": "to take walk",
      "id": "to take walk"
    },
    "pos": "verb-suru",
    "ex": "散歩することが大切だ"
  },
  {
    "id": "V3504",
    "w": "体調を崩す",
    "r": "たいちょうをくずす",
    "m": {
      "en": "to get sick",
      "zh-TW": "体調を崩す",
      "zh-CN": "体調を崩す",
      "ko": "to get sick",
      "vi": "to get sick",
      "id": "to get sick"
    },
    "pos": "verb-godan",
    "ex": "体調を崩すことにする"
  },
  {
    "id": "V3505",
    "w": "風邪を引く",
    "r": "かぜをひく",
    "m": {
      "en": "to catch cold",
      "zh-TW": "風邪を引く",
      "zh-CN": "風邪を引く",
      "ko": "to catch cold",
      "vi": "to catch cold",
      "id": "to catch cold"
    },
    "pos": "verb-godan",
    "ex": "風邪を引くことにする"
  },
  {
    "id": "V3506",
    "w": "咳が出る",
    "r": "せきがでる",
    "m": {
      "en": "to cough",
      "zh-TW": "咳が出る",
      "zh-CN": "咳が出る",
      "ko": "to cough",
      "vi": "to cough",
      "id": "to cough"
    },
    "pos": "verb-godan",
    "ex": "咳が出ることにする"
  },
  {
    "id": "V3507",
    "w": "くしゃみが出る",
    "r": "くしゃみがでる",
    "m": {
      "en": "to sneeze",
      "zh-TW": "くしゃみが出る",
      "zh-CN": "くしゃみが出る",
      "ko": "to sneeze",
      "vi": "to sneeze",
      "id": "to sneeze"
    },
    "pos": "verb-godan",
    "ex": "くしゃみが出ることにする"
  },
  {
    "id": "V3508",
    "w": "鼻水が出る",
    "r": "はなみずがでる",
    "m": {
      "en": "to have runny nose",
      "zh-TW": "鼻水が出る",
      "zh-CN": "鼻水が出る",
      "ko": "to have runny nose",
      "vi": "to have runny nose",
      "id": "to have runny nose"
    },
    "pos": "verb-godan",
    "ex": "鼻水が出ることにする"
  },
  {
    "id": "V3509",
    "w": "頭が痛い",
    "r": "あたまがいたい",
    "m": {
      "en": "to have headache",
      "zh-TW": "頭が痛い",
      "zh-CN": "頭が痛い",
      "ko": "to have headache",
      "vi": "to have headache",
      "id": "to have headache"
    },
    "pos": "i-adj",
    "ex": "とても頭が痛いと思う"
  },
  {
    "id": "V3510",
    "w": "お腹が痛い",
    "r": "おなかがいたい",
    "m": {
      "en": "to have stomachache",
      "zh-TW": "お腹が痛い",
      "zh-CN": "お腹が痛い",
      "ko": "to have stomachache",
      "vi": "to have stomachache",
      "id": "to have stomachache"
    },
    "pos": "i-adj",
    "ex": "とてもお腹が痛いと思う"
  },
  {
    "id": "V3511",
    "w": "喉が痛い",
    "r": "のどがいたい",
    "m": {
      "en": "to have sore throat",
      "zh-TW": "喉が痛い",
      "zh-CN": "喉が痛い",
      "ko": "to have sore throat",
      "vi": "to have sore throat",
      "id": "to have sore throat"
    },
    "pos": "i-adj",
    "ex": "とても喉が痛いと思う"
  },
  {
    "id": "V3512",
    "w": "医者に診てもらう",
    "r": "いしゃにみてもらう",
    "m": {
      "en": "to see doctor",
      "zh-TW": "医者に診てもらう",
      "zh-CN": "医者に診てもらう",
      "ko": "to see doctor",
      "vi": "to see doctor",
      "id": "to see doctor"
    },
    "pos": "verb-godan",
    "ex": "医者に診てもらうことにする"
  },
  {
    "id": "V3513",
    "w": "雨が降る",
    "r": "あめがふる",
    "m": {
      "en": "to rain",
      "zh-TW": "雨が降る",
      "zh-CN": "雨が降る",
      "ko": "to rain",
      "vi": "to rain",
      "id": "to rain"
    },
    "pos": "verb-godan",
    "ex": "雨が降ることにする"
  },
  {
    "id": "V3514",
    "w": "雪が降る",
    "r": "ゆきがふる",
    "m": {
      "en": "to snow",
      "zh-TW": "雪が降る",
      "zh-CN": "雪が降る",
      "ko": "to snow",
      "vi": "to snow",
      "id": "to snow"
    },
    "pos": "verb-godan",
    "ex": "雪が降ることにする"
  },
  {
    "id": "V3515",
    "w": "風が吹く",
    "r": "かぜがふく",
    "m": {
      "en": "to be windy",
      "zh-TW": "風が吹く",
      "zh-CN": "風が吹く",
      "ko": "to be windy",
      "vi": "to be windy",
      "id": "to be windy"
    },
    "pos": "verb-godan",
    "ex": "風が吹くことにする"
  },
  {
    "id": "V3516",
    "w": "雷が鳴る",
    "r": "かみなりがなる",
    "m": {
      "en": "to thunder",
      "zh-TW": "雷が鳴る",
      "zh-CN": "雷が鳴る",
      "ko": "to thunder",
      "vi": "to thunder",
      "id": "to thunder"
    },
    "pos": "verb-godan",
    "ex": "雷が鳴ることにする"
  },
  {
    "id": "V3517",
    "w": "蒸し暑い",
    "r": "むしあつい",
    "m": {
      "en": "to be humid and hot",
      "zh-TW": "蒸し暑い",
      "zh-CN": "蒸し暑い",
      "ko": "to be humid and hot",
      "vi": "to be humid and hot",
      "id": "to be humid and hot"
    },
    "pos": "i-adj",
    "ex": "とても蒸し暑いと思う"
  },
  {
    "id": "V3518",
    "w": "肌寒い",
    "r": "はださむい",
    "m": {
      "en": "to be chilly",
      "zh-TW": "肌寒い",
      "zh-CN": "肌寒い",
      "ko": "to be chilly",
      "vi": "to be chilly",
      "id": "to be chilly"
    },
    "pos": "i-adj",
    "ex": "とても肌寒いと思う"
  },
  {
    "id": "V3519",
    "w": "冷え込む",
    "r": "ひえこむ",
    "m": {
      "en": "to get cold",
      "zh-TW": "冷え込む",
      "zh-CN": "冷え込む",
      "ko": "to get cold",
      "vi": "to get cold",
      "id": "to get cold"
    },
    "pos": "verb-godan",
    "ex": "冷え込むことにする"
  },
  {
    "id": "V3520",
    "w": "暖かくなる",
    "r": "あたたかくなる",
    "m": {
      "en": "to warm up",
      "zh-TW": "暖かくなる",
      "zh-CN": "暖かくなる",
      "ko": "to warm up",
      "vi": "to warm up",
      "id": "to warm up"
    },
    "pos": "verb-godan",
    "ex": "暖かくなることにする"
  },
  {
    "id": "V3521",
    "w": "涼しくなる",
    "r": "すずしくなる",
    "m": {
      "en": "to cool down",
      "zh-TW": "涼しくなる",
      "zh-CN": "涼しくなる",
      "ko": "to cool down",
      "vi": "to cool down",
      "id": "to cool down"
    },
    "pos": "verb-godan",
    "ex": "涼しくなることにする"
  },
  {
    "id": "V3522",
    "w": "過ごしやすい",
    "r": "すごしやすい",
    "m": {
      "en": "to be comfortable",
      "zh-TW": "過ごしやすい",
      "zh-CN": "過ごしやすい",
      "ko": "to be comfortable",
      "vi": "to be comfortable",
      "id": "to be comfortable"
    },
    "pos": "i-adj",
    "ex": "とても過ごしやすいと思う"
  },
  {
    "id": "V3523",
    "w": "全て",
    "r": "すべて",
    "m": {
      "en": "all",
      "zh-TW": "全て",
      "zh-CN": "全て",
      "ko": "all",
      "vi": "all",
      "id": "all"
    },
    "pos": "noun",
    "ex": "全てについて考える"
  },
  {
    "id": "V3524",
    "w": "以上",
    "r": "いじょう",
    "m": {
      "en": "more than",
      "zh-TW": "以上",
      "zh-CN": "以上",
      "ko": "more than",
      "vi": "more than",
      "id": "more than"
    },
    "pos": "verb-godan",
    "ex": "50人以上が参加した"
  },
  {
    "id": "V3525",
    "w": "以下",
    "r": "いか",
    "m": {
      "en": "less than",
      "zh-TW": "以下",
      "zh-CN": "以下",
      "ko": "less than",
      "vi": "less than",
      "id": "less than"
    },
    "pos": "noun",
    "ex": "100円以下の商品を探す"
  },
  {
    "id": "V3526",
    "w": "まったく",
    "r": "まったく",
    "m": {
      "en": "completely",
      "zh-TW": "まったく",
      "zh-CN": "まったく",
      "ko": "completely",
      "vi": "completely",
      "id": "completely"
    },
    "pos": "verb-godan",
    "ex": "まったくことにする"
  },
  {
    "id": "V3527",
    "w": "たいてい",
    "r": "たいてい",
    "m": {
      "en": "usually",
      "zh-TW": "たいてい",
      "zh-CN": "たいてい",
      "ko": "usually",
      "vi": "usually",
      "id": "usually"
    },
    "pos": "i-adj",
    "ex": "とてもたいていと思う"
  },
  {
    "id": "V3528",
    "w": "めったに",
    "r": "めったに",
    "m": {
      "en": "rarely",
      "zh-TW": "めったに",
      "zh-CN": "めったに",
      "ko": "rarely",
      "vi": "rarely",
      "id": "rarely"
    },
    "pos": "adverb",
    "ex": "めったに考える"
  },
  {
    "id": "V3529",
    "w": "全然",
    "r": "ぜんぜん",
    "m": {
      "en": "not at all",
      "zh-TW": "全然",
      "zh-CN": "全然",
      "ko": "not at all",
      "vi": "not at all",
      "id": "not at all"
    },
    "pos": "noun",
    "ex": "全然について考える"
  },
  {
    "id": "V3530",
    "w": "今すぐ",
    "r": "いますぐ",
    "m": {
      "en": "right now",
      "zh-TW": "今すぐ",
      "zh-CN": "今すぐ",
      "ko": "right now",
      "vi": "right now",
      "id": "right now"
    },
    "pos": "verb-godan",
    "ex": "今すぐことにする"
  },
  {
    "id": "V3531",
    "w": "やがて",
    "r": "やがて",
    "m": {
      "en": "soon",
      "zh-TW": "やがて",
      "zh-CN": "やがて",
      "ko": "soon",
      "vi": "soon",
      "id": "soon"
    },
    "pos": "noun",
    "ex": "やがてについて考える"
  },
  {
    "id": "V3532",
    "w": "しばらく",
    "r": "しばらく",
    "m": {
      "en": "for a while",
      "zh-TW": "しばらく",
      "zh-CN": "しばらく",
      "ko": "for a while",
      "vi": "for a while",
      "id": "for a while"
    },
    "pos": "verb-godan",
    "ex": "しばらくことにする"
  },
  {
    "id": "V3533",
    "w": "さて",
    "r": "さて",
    "m": {
      "en": "well",
      "zh-TW": "さて",
      "zh-CN": "さて",
      "ko": "well",
      "vi": "well",
      "id": "well"
    },
    "pos": "noun",
    "ex": "さてについて考える"
  },
  {
    "id": "V3534",
    "w": "その上",
    "r": "そのうえ",
    "m": {
      "en": "furthermore",
      "zh-TW": "その上",
      "zh-CN": "その上",
      "ko": "furthermore",
      "vi": "furthermore",
      "id": "furthermore"
    },
    "pos": "noun",
    "ex": "その上について考える"
  },
  {
    "id": "V3535",
    "w": "ぬるい",
    "r": "ぬるい",
    "m": {
      "en": "lukewarm",
      "zh-TW": "ぬるい",
      "zh-CN": "ぬるい",
      "ko": "lukewarm",
      "vi": "lukewarm",
      "id": "lukewarm"
    },
    "pos": "i-adj",
    "ex": "とてもぬるいと思う"
  },
  {
    "id": "V3536",
    "w": "つける",
    "r": "つける",
    "m": {
      "en": "to turn on",
      "zh-TW": "つける",
      "zh-CN": "つける",
      "ko": "to turn on",
      "vi": "to turn on",
      "id": "to turn on"
    },
    "pos": "verb-ichidan",
    "ex": "つけることにする"
  },
  {
    "id": "V3537",
    "w": "付近",
    "r": "ふきん",
    "m": {
      "en": "vicinity",
      "zh-TW": "付近",
      "zh-CN": "付近",
      "ko": "vicinity",
      "vi": "vicinity",
      "id": "vicinity"
    },
    "pos": "noun",
    "ex": "付近について考える"
  },
  {
    "id": "V3538",
    "w": "時代",
    "r": "じだい",
    "m": {
      "en": "era",
      "zh-TW": "時代",
      "zh-CN": "時代",
      "ko": "era",
      "vi": "era",
      "id": "era"
    },
    "pos": "i-adj",
    "ex": "とても時代と思う"
  },
  {
    "id": "V3539",
    "w": "会う",
    "r": "あう",
    "m": {
      "en": "to meet",
      "zh-TW": "会う",
      "zh-CN": "会う",
      "ko": "to meet",
      "vi": "to meet",
      "id": "to meet"
    },
    "pos": "verb-godan",
    "ex": "会うことにする"
  },
  {
    "id": "V3540",
    "w": "合う",
    "r": "あう",
    "m": {
      "en": "to fit",
      "zh-TW": "合う",
      "zh-CN": "合う",
      "ko": "to fit",
      "vi": "to fit",
      "id": "to fit"
    },
    "pos": "verb-godan",
    "ex": "合うことにする"
  },
  {
    "id": "V3541",
    "w": "痛む",
    "r": "いたむ",
    "m": {
      "en": "to hurt",
      "zh-TW": "痛む",
      "zh-CN": "痛む",
      "ko": "to hurt",
      "vi": "to hurt",
      "id": "to hurt"
    },
    "pos": "verb-godan",
    "ex": "痛むことにする"
  },
  {
    "id": "V3542",
    "w": "生まれる",
    "r": "うまれる",
    "m": {
      "en": "to be born",
      "zh-TW": "生まれる",
      "zh-CN": "生まれる",
      "ko": "to be born",
      "vi": "to be born",
      "id": "to be born"
    },
    "pos": "verb-ichidan",
    "ex": "生まれることにする"
  },
  {
    "id": "V3543",
    "w": "かかる",
    "r": "かかる",
    "m": {
      "en": "to take",
      "zh-TW": "かかる",
      "zh-CN": "かかる",
      "ko": "to take",
      "vi": "to take",
      "id": "to take"
    },
    "pos": "verb-godan",
    "ex": "かかることにする"
  },
  {
    "id": "V3544",
    "w": "隠す",
    "r": "かくす",
    "m": {
      "en": "to hide",
      "zh-TW": "隠す",
      "zh-CN": "隠す",
      "ko": "to hide",
      "vi": "to hide",
      "id": "to hide"
    },
    "pos": "verb-godan",
    "ex": "隠すことにする"
  },
  {
    "id": "V3545",
    "w": "黄色い",
    "r": "きいろい",
    "m": {
      "en": "yellow",
      "zh-TW": "黄色い",
      "zh-CN": "黄色い",
      "ko": "yellow",
      "vi": "yellow",
      "id": "yellow"
    },
    "pos": "i-adj",
    "ex": "とても黄色いと思う"
  },
  {
    "id": "V3546",
    "w": "あまり",
    "r": "あまり",
    "m": {
      "en": "not much",
      "zh-TW": "あまり",
      "zh-CN": "あまり",
      "ko": "not much",
      "vi": "not much",
      "id": "not much"
    },
    "pos": "noun",
    "ex": "あまりについて考える"
  },
  {
    "id": "V3547",
    "w": "いくつ",
    "r": "いくつ",
    "m": {
      "en": "how many",
      "zh-TW": "いくつ",
      "zh-CN": "いくつ",
      "ko": "how many",
      "vi": "how many",
      "id": "how many"
    },
    "pos": "verb-godan",
    "ex": "いくつことにする"
  },
  {
    "id": "V3548",
    "w": "一緒に",
    "r": "いっしょに",
    "m": {
      "en": "together",
      "zh-TW": "一緒に",
      "zh-CN": "一緒に",
      "ko": "together",
      "vi": "together",
      "id": "together"
    },
    "pos": "adverb",
    "ex": "一緒に考える"
  },
  {
    "id": "V3549",
    "w": "うまく",
    "r": "うまく",
    "m": {
      "en": "well",
      "zh-TW": "うまく",
      "zh-CN": "うまく",
      "ko": "well",
      "vi": "well",
      "id": "well"
    },
    "pos": "verb-godan",
    "ex": "うまくことにする"
  },
  {
    "id": "V3550",
    "w": "大勢",
    "r": "おおぜい",
    "m": {
      "en": "many people",
      "zh-TW": "大勢",
      "zh-CN": "大勢",
      "ko": "many people",
      "vi": "many people",
      "id": "many people"
    },
    "pos": "i-adj",
    "ex": "とても大勢と思う"
  },
  {
    "id": "V3551",
    "w": "およそ",
    "r": "およそ",
    "m": {
      "en": "about",
      "zh-TW": "およそ",
      "zh-CN": "およそ",
      "ko": "about",
      "vi": "about",
      "id": "about"
    },
    "pos": "noun",
    "ex": "およそについて考える"
  },
  {
    "id": "V3552",
    "w": "宿題",
    "r": "しゅくだい",
    "m": {
      "en": "homework",
      "zh-TW": "宿題",
      "zh-CN": "宿題",
      "ko": "homework",
      "vi": "homework",
      "id": "homework"
    },
    "pos": "i-adj",
    "ex": "とても宿題と思う"
  },
  {
    "id": "V3553",
    "w": "春",
    "r": "はる",
    "m": {
      "en": "spring",
      "zh-TW": "春",
      "zh-CN": "春",
      "ko": "spring",
      "vi": "spring",
      "id": "spring"
    },
    "pos": "verb-godan",
    "ex": "春になると花が咲く"
  },
  {
    "id": "V3554",
    "w": "夏",
    "r": "なつ",
    "m": {
      "en": "summer",
      "zh-TW": "夏",
      "zh-CN": "夏",
      "ko": "summer",
      "vi": "summer",
      "id": "summer"
    },
    "pos": "verb-godan",
    "ex": "夏は暑い"
  },
  {
    "id": "V3555",
    "w": "時",
    "r": "とき",
    "m": {
      "en": "time",
      "zh-TW": "時",
      "zh-CN": "時",
      "ko": "time",
      "vi": "time",
      "id": "time"
    },
    "pos": "noun",
    "ex": "時について考える"
  },
  {
    "id": "V3556",
    "w": "秒",
    "r": "びょう",
    "m": {
      "en": "second",
      "zh-TW": "秒",
      "zh-CN": "秒",
      "ko": "second",
      "vi": "second",
      "id": "second"
    },
    "pos": "verb-godan",
    "ex": "秒ことにする"
  },
  {
    "id": "V3557",
    "w": "四角",
    "r": "しかく",
    "m": {
      "en": "square",
      "zh-TW": "四角",
      "zh-CN": "四角",
      "ko": "square",
      "vi": "square",
      "id": "square"
    },
    "pos": "verb-godan",
    "ex": "四角ことにする"
  },
  {
    "id": "V3558",
    "w": "三角",
    "r": "さんかく",
    "m": {
      "en": "triangle",
      "zh-TW": "三角",
      "zh-CN": "三角",
      "ko": "triangle",
      "vi": "triangle",
      "id": "triangle"
    },
    "pos": "verb-godan",
    "ex": "三角ことにする"
  },
  {
    "id": "V3559",
    "w": "安い",
    "r": "やすい",
    "m": {
      "en": "cheap",
      "zh-TW": "安い",
      "zh-CN": "安い",
      "ko": "cheap",
      "vi": "cheap",
      "id": "cheap"
    },
    "pos": "i-adj",
    "ex": "とても安いと思う"
  },
  {
    "id": "V3560",
    "w": "たくさん",
    "r": "たくさん",
    "m": {
      "en": "a lot",
      "zh-TW": "たくさん",
      "zh-CN": "たくさん",
      "ko": "a lot",
      "vi": "a lot",
      "id": "a lot"
    },
    "pos": "noun",
    "ex": "たくさんについて考える"
  },
  {
    "id": "V3561",
    "w": "次に",
    "r": "つぎに",
    "m": {
      "en": "next",
      "zh-TW": "次に",
      "zh-CN": "次に",
      "ko": "next",
      "vi": "next",
      "id": "next"
    },
    "pos": "adverb",
    "ex": "次に考える"
  },
  {
    "id": "V3562",
    "w": "最後に",
    "r": "さいごに",
    "m": {
      "en": "finally",
      "zh-TW": "最後に",
      "zh-CN": "最後に",
      "ko": "finally",
      "vi": "finally",
      "id": "finally"
    },
    "pos": "adverb",
    "ex": "最後に考える"
  },
  {
    "id": "V3563",
    "w": "または",
    "r": "または",
    "m": {
      "en": "or",
      "zh-TW": "または",
      "zh-CN": "または",
      "ko": "or",
      "vi": "or",
      "id": "or"
    },
    "pos": "noun",
    "ex": "またはについて考える"
  },
  {
    "id": "V3564",
    "w": "それから",
    "r": "それから",
    "m": {
      "en": "and then",
      "zh-TW": "それから",
      "zh-CN": "それから",
      "ko": "and then",
      "vi": "and then",
      "id": "and then"
    },
    "pos": "noun",
    "ex": "それからについて考える"
  },
  {
    "id": "V3565",
    "w": "所",
    "r": "ところ",
    "m": {
      "en": "place",
      "zh-TW": "所",
      "zh-CN": "所",
      "ko": "place",
      "vi": "place",
      "id": "place"
    },
    "pos": "noun",
    "ex": "所について考える"
  },
  {
    "id": "V3566",
    "w": "西",
    "r": "にし",
    "m": {
      "en": "west",
      "zh-TW": "西",
      "zh-CN": "西",
      "ko": "west",
      "vi": "west",
      "id": "west"
    },
    "pos": "noun",
    "ex": "西について考える"
  },
  {
    "id": "V3567",
    "w": "学年",
    "r": "がくねん",
    "m": {
      "en": "school year",
      "zh-TW": "学年",
      "zh-CN": "学年",
      "ko": "school year",
      "vi": "school year",
      "id": "school year"
    },
    "pos": "noun",
    "ex": "学年について考える"
  },
  {
    "id": "V3568",
    "w": "科目",
    "r": "かもく",
    "m": {
      "en": "subject",
      "zh-TW": "科目",
      "zh-CN": "科目",
      "ko": "subject",
      "vi": "subject",
      "id": "subject"
    },
    "pos": "verb-godan",
    "ex": "科目ことにする"
  },
  {
    "id": "V3569",
    "w": "参考書",
    "r": "さんこうしょ",
    "m": {
      "en": "reference book",
      "zh-TW": "参考書",
      "zh-CN": "参考書",
      "ko": "reference book",
      "vi": "reference book",
      "id": "reference book"
    },
    "pos": "noun",
    "ex": "参考書について考える"
  },
  {
    "id": "V3570",
    "w": "グループ",
    "r": "ぐるーぷ",
    "m": {
      "en": "group",
      "zh-TW": "グループ",
      "zh-CN": "グループ",
      "ko": "group",
      "vi": "group",
      "id": "group"
    },
    "pos": "noun",
    "ex": "グループについて考える"
  },
  {
    "id": "V3571",
    "w": "チーム",
    "r": "ちーむ",
    "m": {
      "en": "team",
      "zh-TW": "チーム",
      "zh-CN": "チーム",
      "ko": "team",
      "vi": "team",
      "id": "team"
    },
    "pos": "verb-godan",
    "ex": "チームことにする"
  },
  {
    "id": "V3572",
    "w": "メンバー",
    "r": "めんばー",
    "m": {
      "en": "member",
      "zh-TW": "メンバー",
      "zh-CN": "メンバー",
      "ko": "member",
      "vi": "member",
      "id": "member"
    },
    "pos": "noun",
    "ex": "メンバーについて考える"
  },
  {
    "id": "V3573",
    "w": "リーダー",
    "r": "りーだー",
    "m": {
      "en": "leader",
      "zh-TW": "リーダー",
      "zh-CN": "リーダー",
      "ko": "leader",
      "vi": "leader",
      "id": "leader"
    },
    "pos": "noun",
    "ex": "リーダーについて考える"
  },
  {
    "id": "V3574",
    "w": "根拠",
    "r": "こんきょ",
    "m": {
      "en": "basis",
      "zh-TW": "根拠",
      "zh-CN": "根拠",
      "ko": "basis",
      "vi": "basis",
      "id": "basis"
    },
    "pos": "noun",
    "ex": "根拠について考える"
  },
  {
    "id": "V3575",
    "w": "進捗",
    "r": "しんちょく",
    "m": {
      "en": "progress",
      "zh-TW": "進捗",
      "zh-CN": "進捗",
      "ko": "progress",
      "vi": "progress",
      "id": "progress"
    },
    "pos": "verb-godan",
    "ex": "進捗ことにする"
  },
  {
    "id": "V3576",
    "w": "朝ご飯",
    "r": "あさごはん",
    "m": {
      "en": "breakfast",
      "zh-TW": "朝ご飯",
      "zh-CN": "朝ご飯",
      "ko": "breakfast",
      "vi": "breakfast",
      "id": "breakfast"
    },
    "pos": "noun",
    "ex": "朝ご飯について考える"
  },
  {
    "id": "V3577",
    "w": "昼ご飯",
    "r": "ひるごはん",
    "m": {
      "en": "lunch",
      "zh-TW": "昼ご飯",
      "zh-CN": "昼ご飯",
      "ko": "lunch",
      "vi": "lunch",
      "id": "lunch"
    },
    "pos": "noun",
    "ex": "昼ご飯について考える"
  },
  {
    "id": "V3578",
    "w": "晩ご飯",
    "r": "ばんごはん",
    "m": {
      "en": "dinner",
      "zh-TW": "晩ご飯",
      "zh-CN": "晩ご飯",
      "ko": "dinner",
      "vi": "dinner",
      "id": "dinner"
    },
    "pos": "noun",
    "ex": "晩ご飯について考える"
  },
  {
    "id": "V3579",
    "w": "おやつ",
    "r": "おやつ",
    "m": {
      "en": "snack",
      "zh-TW": "おやつ",
      "zh-CN": "おやつ",
      "ko": "snack",
      "vi": "snack",
      "id": "snack"
    },
    "pos": "verb-godan",
    "ex": "おやつことにする"
  },
  {
    "id": "V3580",
    "w": "母",
    "r": "はは",
    "m": {
      "en": "mother",
      "zh-TW": "母",
      "zh-CN": "母",
      "ko": "mother",
      "vi": "mother",
      "id": "mother"
    },
    "pos": "noun",
    "ex": "母について考える"
  },
  {
    "id": "V3581",
    "w": "隣人",
    "r": "りんじん",
    "m": {
      "en": "neighbor",
      "zh-TW": "隣人",
      "zh-CN": "隣人",
      "ko": "neighbor",
      "vi": "neighbor",
      "id": "neighbor"
    },
    "pos": "noun",
    "ex": "隣人について考える"
  },
  {
    "id": "V3582",
    "w": "退院",
    "r": "たいいん",
    "m": {
      "en": "discharge",
      "zh-TW": "退院",
      "zh-CN": "退院",
      "ko": "discharge",
      "vi": "discharge",
      "id": "discharge"
    },
    "pos": "noun",
    "ex": "退院について考える"
  },
  {
    "id": "V3583",
    "w": "アレルギー",
    "r": "あれるぎー",
    "m": {
      "en": "allergy",
      "zh-TW": "アレルギー",
      "zh-CN": "アレルギー",
      "ko": "allergy",
      "vi": "allergy",
      "id": "allergy"
    },
    "pos": "noun",
    "ex": "アレルギーについて考える"
  },
  {
    "id": "V3584",
    "w": "鼻水",
    "r": "はなみず",
    "m": {
      "en": "runny nose",
      "zh-TW": "鼻水",
      "zh-CN": "鼻水",
      "ko": "runny nose",
      "vi": "runny nose",
      "id": "runny nose"
    },
    "pos": "noun",
    "ex": "鼻水について考える"
  },
  {
    "id": "V3585",
    "w": "のど",
    "r": "のど",
    "m": {
      "en": "throat",
      "zh-TW": "のど",
      "zh-CN": "のど",
      "ko": "throat",
      "vi": "throat",
      "id": "throat"
    },
    "pos": "noun",
    "ex": "のどについて考える"
  },
  {
    "id": "V3586",
    "w": "カロリー",
    "r": "かろりー",
    "m": {
      "en": "calorie",
      "zh-TW": "カロリー",
      "zh-CN": "カロリー",
      "ko": "calorie",
      "vi": "calorie",
      "id": "calorie"
    },
    "pos": "noun",
    "ex": "カロリーについて考える"
  },
  {
    "id": "V3587",
    "w": "ビタミン",
    "r": "びたみん",
    "m": {
      "en": "vitamin",
      "zh-TW": "ビタミン",
      "zh-CN": "ビタミン",
      "ko": "vitamin",
      "vi": "vitamin",
      "id": "vitamin"
    },
    "pos": "noun",
    "ex": "ビタミンについて考える"
  },
  {
    "id": "V3588",
    "w": "タンパク質",
    "r": "たんぱくしつ",
    "m": {
      "en": "protein",
      "zh-TW": "タンパク質",
      "zh-CN": "タンパク質",
      "ko": "protein",
      "vi": "protein",
      "id": "protein"
    },
    "pos": "verb-godan",
    "ex": "タンパク質ことにする"
  },
  {
    "id": "V3589",
    "w": "炭水化物",
    "r": "たんすいかぶつ",
    "m": {
      "en": "carbohydrate",
      "zh-TW": "炭水化物",
      "zh-CN": "炭水化物",
      "ko": "carbohydrate",
      "vi": "carbohydrate",
      "id": "carbohydrate"
    },
    "pos": "verb-godan",
    "ex": "炭水化物ことにする"
  },
  {
    "id": "V3590",
    "w": "脂肪",
    "r": "しぼう",
    "m": {
      "en": "fat",
      "zh-TW": "脂肪",
      "zh-CN": "脂肪",
      "ko": "fat",
      "vi": "fat",
      "id": "fat"
    },
    "pos": "verb-godan",
    "ex": "脂肪ことにする"
  },
  {
    "id": "V3591",
    "w": "酢",
    "r": "す",
    "m": {
      "en": "vinegar",
      "zh-TW": "酢",
      "zh-CN": "酢",
      "ko": "vinegar",
      "vi": "vinegar",
      "id": "vinegar"
    },
    "pos": "verb-godan",
    "ex": "酢ことにする"
  },
  {
    "id": "V3592",
    "w": "お酒",
    "r": "おさけ",
    "m": {
      "en": "alcohol",
      "zh-TW": "お酒",
      "zh-CN": "お酒",
      "ko": "alcohol",
      "vi": "alcohol",
      "id": "alcohol"
    },
    "pos": "noun",
    "ex": "お酒について考える"
  },
  {
    "id": "V3593",
    "w": "レストラン",
    "r": "れすとらん",
    "m": {
      "en": "restaurant",
      "zh-TW": "レストラン",
      "zh-CN": "レストラン",
      "ko": "restaurant",
      "vi": "restaurant",
      "id": "restaurant"
    },
    "pos": "noun",
    "ex": "レストランについて考える"
  },
  {
    "id": "V3594",
    "w": "カフェ",
    "r": "かふぇ",
    "m": {
      "en": "cafe",
      "zh-TW": "カフェ",
      "zh-CN": "カフェ",
      "ko": "cafe",
      "vi": "cafe",
      "id": "cafe"
    },
    "pos": "noun",
    "ex": "カフェについて考える"
  },
  {
    "id": "V3595",
    "w": "居酒屋",
    "r": "いざかや",
    "m": {
      "en": "izakaya",
      "zh-TW": "居酒屋",
      "zh-CN": "居酒屋",
      "ko": "izakaya",
      "vi": "izakaya",
      "id": "izakaya"
    },
    "pos": "noun",
    "ex": "居酒屋について考える"
  },
  {
    "id": "V3596",
    "w": "メニュー",
    "r": "めにゅー",
    "m": {
      "en": "menu",
      "zh-TW": "メニュー",
      "zh-CN": "メニュー",
      "ko": "menu",
      "vi": "menu",
      "id": "menu"
    },
    "pos": "noun",
    "ex": "メニューについて考える"
  },
  {
    "id": "V3597",
    "w": "お会計",
    "r": "おかいけい",
    "m": {
      "en": "bill",
      "zh-TW": "お会計",
      "zh-CN": "お会計",
      "ko": "bill",
      "vi": "bill",
      "id": "bill"
    },
    "pos": "i-adj",
    "ex": "とてもお会計と思う"
  },
  {
    "id": "V3598",
    "w": "予約",
    "r": "よやく",
    "m": {
      "en": "reservation",
      "zh-TW": "予約",
      "zh-CN": "予約",
      "ko": "reservation",
      "vi": "reservation",
      "id": "reservation"
    },
    "pos": "verb-godan",
    "ex": "予約ことにする"
  },
  {
    "id": "V3599",
    "w": "ドア",
    "r": "どあ",
    "m": {
      "en": "door",
      "zh-TW": "ドア",
      "zh-CN": "ドア",
      "ko": "door",
      "vi": "door",
      "id": "door"
    },
    "pos": "noun",
    "ex": "ドアについて考える"
  },
  {
    "id": "V3600",
    "w": "カップ",
    "r": "かっぷ",
    "m": {
      "en": "cup",
      "zh-TW": "カップ",
      "zh-CN": "カップ",
      "ko": "cup",
      "vi": "cup",
      "id": "cup"
    },
    "pos": "noun",
    "ex": "カップについて考える"
  },
  {
    "id": "V3601",
    "w": "タオル",
    "r": "たおる",
    "m": {
      "en": "towel",
      "zh-TW": "タオル",
      "zh-CN": "タオル",
      "ko": "towel",
      "vi": "towel",
      "id": "towel"
    },
    "pos": "verb-godan",
    "ex": "タオルことにする"
  },
  {
    "id": "V3602",
    "w": "石鹸",
    "r": "せっけん",
    "m": {
      "en": "soap",
      "zh-TW": "石鹸",
      "zh-CN": "石鹸",
      "ko": "soap",
      "vi": "soap",
      "id": "soap"
    },
    "pos": "noun",
    "ex": "石鹸について考える"
  },
  {
    "id": "V3603",
    "w": "歯ブラシ",
    "r": "はぶらし",
    "m": {
      "en": "toothbrush",
      "zh-TW": "歯ブラシ",
      "zh-CN": "歯ブラシ",
      "ko": "toothbrush",
      "vi": "toothbrush",
      "id": "toothbrush"
    },
    "pos": "noun",
    "ex": "歯ブラシについて考える"
  },
  {
    "id": "V3604",
    "w": "歯磨き粉",
    "r": "はみがきこ",
    "m": {
      "en": "toothpaste",
      "zh-TW": "歯磨き粉",
      "zh-CN": "歯磨き粉",
      "ko": "toothpaste",
      "vi": "toothpaste",
      "id": "toothpaste"
    },
    "pos": "noun",
    "ex": "歯磨き粉について考える"
  },
  {
    "id": "V3605",
    "w": "布団",
    "r": "ふとん",
    "m": {
      "en": "futon",
      "zh-TW": "布団",
      "zh-CN": "布団",
      "ko": "futon",
      "vi": "futon",
      "id": "futon"
    },
    "pos": "noun",
    "ex": "布団について考える"
  },
  {
    "id": "V3606",
    "w": "毛布",
    "r": "もうふ",
    "m": {
      "en": "blanket",
      "zh-TW": "毛布",
      "zh-CN": "毛布",
      "ko": "blanket",
      "vi": "blanket",
      "id": "blanket"
    },
    "pos": "noun",
    "ex": "毛布について考える"
  },
  {
    "id": "V3607",
    "w": "シーツ",
    "r": "しーつ",
    "m": {
      "en": "sheet",
      "zh-TW": "シーツ",
      "zh-CN": "シーツ",
      "ko": "sheet",
      "vi": "sheet",
      "id": "sheet"
    },
    "pos": "verb-godan",
    "ex": "シーツことにする"
  },
  {
    "id": "V3608",
    "w": "ベッド",
    "r": "べっど",
    "m": {
      "en": "bed",
      "zh-TW": "ベッド",
      "zh-CN": "ベッド",
      "ko": "bed",
      "vi": "bed",
      "id": "bed"
    },
    "pos": "noun",
    "ex": "ベッドについて考える"
  },
  {
    "id": "V3609",
    "w": "引き出し",
    "r": "ひきだし",
    "m": {
      "en": "drawer",
      "zh-TW": "引き出し",
      "zh-CN": "引き出し",
      "ko": "drawer",
      "vi": "drawer",
      "id": "drawer"
    },
    "pos": "noun",
    "ex": "引き出しについて考える"
  },
  {
    "id": "V3610",
    "w": "鏡",
    "r": "かがみ",
    "m": {
      "en": "mirror",
      "zh-TW": "鏡",
      "zh-CN": "鏡",
      "ko": "mirror",
      "vi": "mirror",
      "id": "mirror"
    },
    "pos": "noun",
    "ex": "鏡について考える"
  },
  {
    "id": "V3611",
    "w": "ハンガー",
    "r": "はんがー",
    "m": {
      "en": "hanger",
      "zh-TW": "ハンガー",
      "zh-CN": "ハンガー",
      "ko": "hanger",
      "vi": "hanger",
      "id": "hanger"
    },
    "pos": "noun",
    "ex": "ハンガーについて考える"
  },
  {
    "id": "V3612",
    "w": "袋",
    "r": "ふくろ",
    "m": {
      "en": "bag",
      "zh-TW": "袋",
      "zh-CN": "袋",
      "ko": "bag",
      "vi": "bag",
      "id": "bag"
    },
    "pos": "noun",
    "ex": "袋について考える"
  },
  {
    "id": "V3613",
    "w": "はがき",
    "r": "はがき",
    "m": {
      "en": "postcard",
      "zh-TW": "はがき",
      "zh-CN": "はがき",
      "ko": "postcard",
      "vi": "postcard",
      "id": "postcard"
    },
    "pos": "noun",
    "ex": "はがきについて考える"
  },
  {
    "id": "V3614",
    "w": "チケット",
    "r": "ちけっと",
    "m": {
      "en": "ticket",
      "zh-TW": "チケット",
      "zh-CN": "チケット",
      "ko": "ticket",
      "vi": "ticket",
      "id": "ticket"
    },
    "pos": "adverb",
    "ex": "チケット考える"
  },
  {
    "id": "V3615",
    "w": "横断歩道",
    "r": "おうだんほどう",
    "m": {
      "en": "crosswalk",
      "zh-TW": "横断歩道",
      "zh-CN": "横断歩道",
      "ko": "crosswalk",
      "vi": "crosswalk",
      "id": "crosswalk"
    },
    "pos": "verb-godan",
    "ex": "横断歩道ことにする"
  },
  {
    "id": "V3616",
    "w": "改札",
    "r": "かいさつ",
    "m": {
      "en": "ticket gate",
      "zh-TW": "改札",
      "zh-CN": "改札",
      "ko": "ticket gate",
      "vi": "ticket gate",
      "id": "ticket gate"
    },
    "pos": "verb-godan",
    "ex": "改札ことにする"
  },
  {
    "id": "V3617",
    "w": "ホーム",
    "r": "ほーむ",
    "m": {
      "en": "platform",
      "zh-TW": "ホーム",
      "zh-CN": "ホーム",
      "ko": "platform",
      "vi": "platform",
      "id": "platform"
    },
    "pos": "verb-godan",
    "ex": "ホームことにする"
  },
  {
    "id": "V3618",
    "w": "切符",
    "r": "きっぷ",
    "m": {
      "en": "ticket",
      "zh-TW": "切符",
      "zh-CN": "切符",
      "ko": "ticket",
      "vi": "ticket",
      "id": "ticket"
    },
    "pos": "noun",
    "ex": "切符について考える"
  },
  {
    "id": "V3619",
    "w": "定期券",
    "r": "ていきけん",
    "m": {
      "en": "commuter pass",
      "zh-TW": "定期券",
      "zh-CN": "定期券",
      "ko": "commuter pass",
      "vi": "commuter pass",
      "id": "commuter pass"
    },
    "pos": "noun",
    "ex": "定期券について考える"
  },
  {
    "id": "V3620",
    "w": "時刻表",
    "r": "じこくひょう",
    "m": {
      "en": "timetable",
      "zh-TW": "時刻表",
      "zh-CN": "時刻表",
      "ko": "timetable",
      "vi": "timetable",
      "id": "timetable"
    },
    "pos": "verb-godan",
    "ex": "時刻表ことにする"
  },
  {
    "id": "V3621",
    "w": "路線図",
    "r": "ろせんず",
    "m": {
      "en": "route map",
      "zh-TW": "路線図",
      "zh-CN": "路線図",
      "ko": "route map",
      "vi": "route map",
      "id": "route map"
    },
    "pos": "noun",
    "ex": "路線図について考える"
  },
  {
    "id": "V3622",
    "w": "階",
    "r": "かい",
    "m": {
      "en": "floor",
      "zh-TW": "階",
      "zh-CN": "階",
      "ko": "floor",
      "vi": "floor",
      "id": "floor"
    },
    "pos": "i-adj",
    "ex": "とても階と思う"
  },
  {
    "id": "V3623",
    "w": "風呂場",
    "r": "ふろば",
    "m": {
      "en": "bathroom",
      "zh-TW": "風呂場",
      "zh-CN": "風呂場",
      "ko": "bathroom",
      "vi": "bathroom",
      "id": "bathroom"
    },
    "pos": "noun",
    "ex": "風呂場について考える"
  },
  {
    "id": "V3624",
    "w": "洗面所",
    "r": "せんめんじょ",
    "m": {
      "en": "washroom",
      "zh-TW": "洗面所",
      "zh-CN": "洗面所",
      "ko": "washroom",
      "vi": "washroom",
      "id": "washroom"
    },
    "pos": "noun",
    "ex": "洗面所について考える"
  },
  {
    "id": "V3625",
    "w": "郵便受け",
    "r": "ゆうびんうけ",
    "m": {
      "en": "mailbox",
      "zh-TW": "郵便受け",
      "zh-CN": "郵便受け",
      "ko": "mailbox",
      "vi": "mailbox",
      "id": "mailbox"
    },
    "pos": "noun",
    "ex": "郵便受けについて考える"
  },
  {
    "id": "V3626",
    "w": "鍵穴",
    "r": "かぎあな",
    "m": {
      "en": "keyhole",
      "zh-TW": "鍵穴",
      "zh-CN": "鍵穴",
      "ko": "keyhole",
      "vi": "keyhole",
      "id": "keyhole"
    },
    "pos": "noun",
    "ex": "鍵穴について考える"
  },
  {
    "id": "V3627",
    "w": "ドアベル",
    "r": "どあべる",
    "m": {
      "en": "doorbell",
      "zh-TW": "ドアベル",
      "zh-CN": "ドアベル",
      "ko": "doorbell",
      "vi": "doorbell",
      "id": "doorbell"
    },
    "pos": "verb-godan",
    "ex": "ドアベルことにする"
  },
  {
    "id": "V3628",
    "w": "インターホン",
    "r": "いんたーほん",
    "m": {
      "en": "intercom",
      "zh-TW": "インターホン",
      "zh-CN": "インターホン",
      "ko": "intercom",
      "vi": "intercom",
      "id": "intercom"
    },
    "pos": "noun",
    "ex": "インターホンについて考える"
  },
  {
    "id": "V3629",
    "w": "玄関マット",
    "r": "げんかんまっと",
    "m": {
      "en": "doormat",
      "zh-TW": "玄関マット",
      "zh-CN": "玄関マット",
      "ko": "doormat",
      "vi": "doormat",
      "id": "doormat"
    },
    "pos": "noun",
    "ex": "玄関マットについて考える"
  },
  {
    "id": "V3630",
    "w": "靴箱",
    "r": "くつばこ",
    "m": {
      "en": "shoe box",
      "zh-TW": "靴箱",
      "zh-CN": "靴箱",
      "ko": "shoe box",
      "vi": "shoe box",
      "id": "shoe box"
    },
    "pos": "noun",
    "ex": "靴箱について考える"
  },
  {
    "id": "V3631",
    "w": "コート掛け",
    "r": "こーとかけ",
    "m": {
      "en": "coat hanger",
      "zh-TW": "コート掛け",
      "zh-CN": "コート掛け",
      "ko": "coat hanger",
      "vi": "coat hanger",
      "id": "coat hanger"
    },
    "pos": "noun",
    "ex": "コート掛けについて考える"
  },
  {
    "id": "V3632",
    "w": "傘立て",
    "r": "かさたて",
    "m": {
      "en": "umbrella stand",
      "zh-TW": "傘立て",
      "zh-CN": "傘立て",
      "ko": "umbrella stand",
      "vi": "umbrella stand",
      "id": "umbrella stand"
    },
    "pos": "noun",
    "ex": "傘立てについて考える"
  },
  {
    "id": "V3633",
    "w": "スリッパ",
    "r": "すりっぱ",
    "m": {
      "en": "slippers",
      "zh-TW": "スリッパ",
      "zh-CN": "スリッパ",
      "ko": "slippers",
      "vi": "slippers",
      "id": "slippers"
    },
    "pos": "noun",
    "ex": "スリッパについて考える"
  },
  {
    "id": "V3634",
    "w": "手すり",
    "r": "てすり",
    "m": {
      "en": "handrail",
      "zh-TW": "手すり",
      "zh-CN": "手すり",
      "ko": "handrail",
      "vi": "handrail",
      "id": "handrail"
    },
    "pos": "noun",
    "ex": "手すりについて考える"
  },
  {
    "id": "V3635",
    "w": "踊り場",
    "r": "おどりば",
    "m": {
      "en": "landing",
      "zh-TW": "踊り場",
      "zh-CN": "踊り場",
      "ko": "landing",
      "vi": "landing",
      "id": "landing"
    },
    "pos": "noun",
    "ex": "踊り場について考える"
  },
  {
    "id": "V3636",
    "w": "物干し",
    "r": "ものほし",
    "m": {
      "en": "clothesline",
      "zh-TW": "物干し",
      "zh-CN": "物干し",
      "ko": "clothesline",
      "vi": "clothesline",
      "id": "clothesline"
    },
    "pos": "noun",
    "ex": "物干しについて考える"
  },
  {
    "id": "V3637",
    "w": "ゴミ置き場",
    "r": "ごみおきば",
    "m": {
      "en": "garbage area",
      "zh-TW": "ゴミ置き場",
      "zh-CN": "ゴミ置き場",
      "ko": "garbage area",
      "vi": "garbage area",
      "id": "garbage area"
    },
    "pos": "noun",
    "ex": "ゴミ置き場について考える"
  },
  {
    "id": "V3638",
    "w": "噴水",
    "r": "ふんすい",
    "m": {
      "en": "fountain",
      "zh-TW": "噴水",
      "zh-CN": "噴水",
      "ko": "fountain",
      "vi": "fountain",
      "id": "fountain"
    },
    "pos": "i-adj",
    "ex": "とても噴水と思う"
  },
  {
    "id": "V3639",
    "w": "ベンチ",
    "r": "べんち",
    "m": {
      "en": "bench",
      "zh-TW": "ベンチ",
      "zh-CN": "ベンチ",
      "ko": "bench",
      "vi": "bench",
      "id": "bench"
    },
    "pos": "noun",
    "ex": "ベンチについて考える"
  },
  {
    "id": "V3640",
    "w": "遊具",
    "r": "ゆうぐ",
    "m": {
      "en": "playground equipment",
      "zh-TW": "遊具",
      "zh-CN": "遊具",
      "ko": "playground equipment",
      "vi": "playground equipment",
      "id": "playground equipment"
    },
    "pos": "verb-godan",
    "ex": "遊具ことにする"
  },
  {
    "id": "V3641",
    "w": "砂場",
    "r": "すなば",
    "m": {
      "en": "sandbox",
      "zh-TW": "砂場",
      "zh-CN": "砂場",
      "ko": "sandbox",
      "vi": "sandbox",
      "id": "sandbox"
    },
    "pos": "noun",
    "ex": "砂場について考える"
  },
  {
    "id": "V3642",
    "w": "滑り台",
    "r": "すべりだい",
    "m": {
      "en": "slide",
      "zh-TW": "滑り台",
      "zh-CN": "滑り台",
      "ko": "slide",
      "vi": "slide",
      "id": "slide"
    },
    "pos": "i-adj",
    "ex": "とても滑り台と思う"
  },
  {
    "id": "V3643",
    "w": "ブランコ",
    "r": "ぶらんこ",
    "m": {
      "en": "swing",
      "zh-TW": "ブランコ",
      "zh-CN": "ブランコ",
      "ko": "swing",
      "vi": "swing",
      "id": "swing"
    },
    "pos": "noun",
    "ex": "ブランコについて考える"
  },
  {
    "id": "V3644",
    "w": "鉄棒",
    "r": "てつぼう",
    "m": {
      "en": "horizontal bar",
      "zh-TW": "鉄棒",
      "zh-CN": "鉄棒",
      "ko": "horizontal bar",
      "vi": "horizontal bar",
      "id": "horizontal bar"
    },
    "pos": "verb-godan",
    "ex": "鉄棒ことにする"
  },
  {
    "id": "V3645",
    "w": "ジャングルジム",
    "r": "じゃんぐるじむ",
    "m": {
      "en": "jungle gym",
      "zh-TW": "ジャングルジム",
      "zh-CN": "ジャングルジム",
      "ko": "jungle gym",
      "vi": "jungle gym",
      "id": "jungle gym"
    },
    "pos": "verb-godan",
    "ex": "ジャングルジムことにする"
  },
  {
    "id": "V3646",
    "w": "シーソー",
    "r": "しーそー",
    "m": {
      "en": "seesaw",
      "zh-TW": "シーソー",
      "zh-CN": "シーソー",
      "ko": "seesaw",
      "vi": "seesaw",
      "id": "seesaw"
    },
    "pos": "noun",
    "ex": "シーソーについて考える"
  },
  {
    "id": "V3647",
    "w": "プール",
    "r": "ぷーる",
    "m": {
      "en": "pool",
      "zh-TW": "プール",
      "zh-CN": "プール",
      "ko": "pool",
      "vi": "pool",
      "id": "pool"
    },
    "pos": "verb-godan",
    "ex": "プールことにする"
  },
  {
    "id": "V3648",
    "w": "動物園",
    "r": "どうぶつえん",
    "m": {
      "en": "zoo",
      "zh-TW": "動物園",
      "zh-CN": "動物園",
      "ko": "zoo",
      "vi": "zoo",
      "id": "zoo"
    },
    "pos": "noun",
    "ex": "動物園について考える"
  },
  {
    "id": "V3649",
    "w": "水族館",
    "r": "すいぞくかん",
    "m": {
      "en": "aquarium",
      "zh-TW": "水族館",
      "zh-CN": "水族館",
      "ko": "aquarium",
      "vi": "aquarium",
      "id": "aquarium"
    },
    "pos": "noun",
    "ex": "水族館について考える"
  },
  {
    "id": "V3650",
    "w": "植物園",
    "r": "しょくぶつえん",
    "m": {
      "en": "botanical garden",
      "zh-TW": "植物園",
      "zh-CN": "植物園",
      "ko": "botanical garden",
      "vi": "botanical garden",
      "id": "botanical garden"
    },
    "pos": "noun",
    "ex": "植物園について考える"
  },
  {
    "id": "V3651",
    "w": "遊園地",
    "r": "ゆうえんち",
    "m": {
      "en": "amusement park",
      "zh-TW": "遊園地",
      "zh-CN": "遊園地",
      "ko": "amusement park",
      "vi": "amusement park",
      "id": "amusement park"
    },
    "pos": "noun",
    "ex": "遊園地について考える"
  },
  {
    "id": "V3652",
    "w": "映画館",
    "r": "えいがかん",
    "m": {
      "en": "movie theater",
      "zh-TW": "映画館",
      "zh-CN": "映画館",
      "ko": "movie theater",
      "vi": "movie theater",
      "id": "movie theater"
    },
    "pos": "noun",
    "ex": "映画館について考える"
  },
  {
    "id": "V3653",
    "w": "コンサートホール",
    "r": "こんさーとほーる",
    "m": {
      "en": "concert hall",
      "zh-TW": "コンサートホール",
      "zh-CN": "コンサートホール",
      "ko": "concert hall",
      "vi": "concert hall",
      "id": "concert hall"
    },
    "pos": "verb-godan",
    "ex": "コンサートホールことにする"
  },
  {
    "id": "V3654",
    "w": "競技場",
    "r": "きょうぎじょう",
    "m": {
      "en": "stadium",
      "zh-TW": "競技場",
      "zh-CN": "競技場",
      "ko": "stadium",
      "vi": "stadium",
      "id": "stadium"
    },
    "pos": "verb-godan",
    "ex": "競技場ことにする"
  },
  {
    "id": "V3655",
    "w": "スポーツジム",
    "r": "すぽーつじむ",
    "m": {
      "en": "sports gym",
      "zh-TW": "スポーツジム",
      "zh-CN": "スポーツジム",
      "ko": "sports gym",
      "vi": "sports gym",
      "id": "sports gym"
    },
    "pos": "verb-godan",
    "ex": "スポーツジムことにする"
  },
  {
    "id": "V3656",
    "w": "テニスコート",
    "r": "てにすこーと",
    "m": {
      "en": "tennis court",
      "zh-TW": "テニスコート",
      "zh-CN": "テニスコート",
      "ko": "tennis court",
      "vi": "tennis court",
      "id": "tennis court"
    },
    "pos": "noun",
    "ex": "テニスコートについて考える"
  },
  {
    "id": "V3657",
    "w": "野球場",
    "r": "やきゅうじょう",
    "m": {
      "en": "baseball stadium",
      "zh-TW": "野球場",
      "zh-CN": "野球場",
      "ko": "baseball stadium",
      "vi": "baseball stadium",
      "id": "baseball stadium"
    },
    "pos": "verb-godan",
    "ex": "野球場ことにする"
  },
  {
    "id": "V3658",
    "w": "サッカー場",
    "r": "さっかーじょう",
    "m": {
      "en": "soccer field",
      "zh-TW": "サッカー場",
      "zh-CN": "サッカー場",
      "ko": "soccer field",
      "vi": "soccer field",
      "id": "soccer field"
    },
    "pos": "verb-godan",
    "ex": "サッカー場ことにする"
  },
  {
    "id": "V3659",
    "w": "ゴルフ場",
    "r": "ごるふじょう",
    "m": {
      "en": "golf course",
      "zh-TW": "ゴルフ場",
      "zh-CN": "ゴルフ場",
      "ko": "golf course",
      "vi": "golf course",
      "id": "golf course"
    },
    "pos": "verb-godan",
    "ex": "ゴルフ場ことにする"
  },
  {
    "id": "V3660",
    "w": "スキー場",
    "r": "すきーじょう",
    "m": {
      "en": "ski resort",
      "zh-TW": "スキー場",
      "zh-CN": "スキー場",
      "ko": "ski resort",
      "vi": "ski resort",
      "id": "ski resort"
    },
    "pos": "verb-godan",
    "ex": "スキー場ことにする"
  },
  {
    "id": "V3661",
    "w": "海水浴場",
    "r": "かいすいよくじょう",
    "m": {
      "en": "beach",
      "zh-TW": "海水浴場",
      "zh-CN": "海水浴場",
      "ko": "beach",
      "vi": "beach",
      "id": "beach"
    },
    "pos": "verb-godan",
    "ex": "海水浴場ことにする"
  },
  {
    "id": "V3662",
    "w": "ペンション",
    "r": "ぺんしょん",
    "m": {
      "en": "pension",
      "zh-TW": "ペンション",
      "zh-CN": "ペンション",
      "ko": "pension",
      "vi": "pension",
      "id": "pension"
    },
    "pos": "noun",
    "ex": "ペンションについて考える"
  },
  {
    "id": "V3663",
    "w": "キャンプ場",
    "r": "きゃんぷじょう",
    "m": {
      "en": "campsite",
      "zh-TW": "キャンプ場",
      "zh-CN": "キャンプ場",
      "ko": "campsite",
      "vi": "campsite",
      "id": "campsite"
    },
    "pos": "verb-godan",
    "ex": "キャンプ場ことにする"
  },
  {
    "id": "V3664",
    "w": "バーベキュー場",
    "r": "ばーべきゅーじょう",
    "m": {
      "en": "BBQ area",
      "zh-TW": "バーベキュー場",
      "zh-CN": "バーベキュー場",
      "ko": "BBQ area",
      "vi": "BBQ area",
      "id": "BBQ area"
    },
    "pos": "verb-godan",
    "ex": "バーベキュー場ことにする"
  },
  {
    "id": "V3665",
    "w": "観光地",
    "r": "かんこうち",
    "m": {
      "en": "tourist spot",
      "zh-TW": "観光地",
      "zh-CN": "観光地",
      "ko": "tourist spot",
      "vi": "tourist spot",
      "id": "tourist spot"
    },
    "pos": "noun",
    "ex": "観光地について考える"
  },
  {
    "id": "V3666",
    "w": "名所",
    "r": "めいしょ",
    "m": {
      "en": "famous place",
      "zh-TW": "名所",
      "zh-CN": "名所",
      "ko": "famous place",
      "vi": "famous place",
      "id": "famous place"
    },
    "pos": "noun",
    "ex": "名所について考える"
  },
  {
    "id": "V3667",
    "w": "旧跡",
    "r": "きゅうせき",
    "m": {
      "en": "historic site",
      "zh-TW": "旧跡",
      "zh-CN": "旧跡",
      "ko": "historic site",
      "vi": "historic site",
      "id": "historic site"
    },
    "pos": "noun",
    "ex": "旧跡について考える"
  },
  {
    "id": "V3668",
    "w": "世界遺産",
    "r": "せかいいさん",
    "m": {
      "en": "world heritage",
      "zh-TW": "世界遺産",
      "zh-CN": "世界遺産",
      "ko": "world heritage",
      "vi": "world heritage",
      "id": "world heritage"
    },
    "pos": "noun",
    "ex": "世界遺産について考える"
  },
  {
    "id": "V3669",
    "w": "国宝",
    "r": "こくほう",
    "m": {
      "en": "national treasure",
      "zh-TW": "国宝",
      "zh-CN": "国宝",
      "ko": "national treasure",
      "vi": "national treasure",
      "id": "national treasure"
    },
    "pos": "verb-godan",
    "ex": "国宝ことにする"
  },
  {
    "id": "V3670",
    "w": "重要文化財",
    "r": "じゅうようぶんかざい",
    "m": {
      "en": "important cultural property",
      "zh-TW": "重要文化財",
      "zh-CN": "重要文化財",
      "ko": "important cultural property",
      "vi": "important cultural property",
      "id": "important cultural property"
    },
    "pos": "i-adj",
    "ex": "とても重要文化財と思う"
  },
  {
    "id": "V3671",
    "w": "天然記念物",
    "r": "てんねんきねんぶつ",
    "m": {
      "en": "natural monument",
      "zh-TW": "天然記念物",
      "zh-CN": "天然記念物",
      "ko": "natural monument",
      "vi": "natural monument",
      "id": "natural monument"
    },
    "pos": "verb-godan",
    "ex": "天然記念物ことにする"
  },
  {
    "id": "V3672",
    "w": "モスク",
    "r": "もすく",
    "m": {
      "en": "mosque",
      "zh-TW": "モスク",
      "zh-CN": "モスク",
      "ko": "mosque",
      "vi": "mosque",
      "id": "mosque"
    },
    "pos": "verb-godan",
    "ex": "モスクことにする"
  },
  {
    "id": "V3673",
    "w": "墓地",
    "r": "ぼち",
    "m": {
      "en": "cemetery",
      "zh-TW": "墓地",
      "zh-CN": "墓地",
      "ko": "cemetery",
      "vi": "cemetery",
      "id": "cemetery"
    },
    "pos": "noun",
    "ex": "墓地について考える"
  },
  {
    "id": "V3674",
    "w": "霊園",
    "r": "れいえん",
    "m": {
      "en": "cemetery",
      "zh-TW": "霊園",
      "zh-CN": "霊園",
      "ko": "cemetery",
      "vi": "cemetery",
      "id": "cemetery"
    },
    "pos": "noun",
    "ex": "霊園について考える"
  },
  {
    "id": "V3675",
    "w": "結婚式場",
    "r": "けっこんしきじょう",
    "m": {
      "en": "wedding venue",
      "zh-TW": "結婚式場",
      "zh-CN": "結婚式場",
      "ko": "wedding venue",
      "vi": "wedding venue",
      "id": "wedding venue"
    },
    "pos": "verb-godan",
    "ex": "結婚式場ことにする"
  },
  {
    "id": "V3676",
    "w": "葬儀場",
    "r": "そうぎじょう",
    "m": {
      "en": "funeral hall",
      "zh-TW": "葬儀場",
      "zh-CN": "葬儀場",
      "ko": "funeral hall",
      "vi": "funeral hall",
      "id": "funeral hall"
    },
    "pos": "verb-godan",
    "ex": "葬儀場ことにする"
  },
  {
    "id": "V3677",
    "w": "村役場",
    "r": "むらやくば",
    "m": {
      "en": "village hall",
      "zh-TW": "村役場",
      "zh-CN": "村役場",
      "ko": "village hall",
      "vi": "village hall",
      "id": "village hall"
    },
    "pos": "noun",
    "ex": "村役場について考える"
  },
  {
    "id": "V3678",
    "w": "税務署",
    "r": "ぜいむしょ",
    "m": {
      "en": "tax office",
      "zh-TW": "税務署",
      "zh-CN": "税務署",
      "ko": "tax office",
      "vi": "tax office",
      "id": "tax office"
    },
    "pos": "noun",
    "ex": "税務署について考える"
  },
  {
    "id": "V3679",
    "w": "ATM",
    "r": "えーてぃーえむ",
    "m": {
      "en": "ATM",
      "zh-TW": "ATM",
      "zh-CN": "ATM",
      "ko": "ATM",
      "vi": "ATM",
      "id": "ATM"
    },
    "pos": "verb-godan",
    "ex": "ATMことにする"
  },
  {
    "id": "V3680",
    "w": "コンビニ",
    "r": "こんびに",
    "m": {
      "en": "convenience store",
      "zh-TW": "コンビニ",
      "zh-CN": "コンビニ",
      "ko": "convenience store",
      "vi": "convenience store",
      "id": "convenience store"
    },
    "pos": "adverb",
    "ex": "コンビニ考える"
  },
  {
    "id": "V3681",
    "w": "スーパー",
    "r": "すーぱー",
    "m": {
      "en": "supermarket",
      "zh-TW": "スーパー",
      "zh-CN": "スーパー",
      "ko": "supermarket",
      "vi": "supermarket",
      "id": "supermarket"
    },
    "pos": "noun",
    "ex": "スーパーについて考える"
  },
  {
    "id": "V3682",
    "w": "デパート",
    "r": "でぱーと",
    "m": {
      "en": "department store",
      "zh-TW": "デパート",
      "zh-CN": "デパート",
      "ko": "department store",
      "vi": "department store",
      "id": "department store"
    },
    "pos": "adverb",
    "ex": "デパート考える"
  },
  {
    "id": "V3683",
    "w": "ショッピングモール",
    "r": "しょっぴんぐもーる",
    "m": {
      "en": "shopping mall",
      "zh-TW": "ショッピングモール",
      "zh-CN": "ショッピングモール",
      "ko": "shopping mall",
      "vi": "shopping mall",
      "id": "shopping mall"
    },
    "pos": "verb-godan",
    "ex": "ショッピングモールことにする"
  },
  {
    "id": "V3684",
    "w": "八百屋",
    "r": "やおや",
    "m": {
      "en": "vegetable shop",
      "zh-TW": "八百屋",
      "zh-CN": "八百屋",
      "ko": "vegetable shop",
      "vi": "vegetable shop",
      "id": "vegetable shop"
    },
    "pos": "noun",
    "ex": "八百屋について考える"
  },
  {
    "id": "V3685",
    "w": "肉屋",
    "r": "にくや",
    "m": {
      "en": "butcher",
      "zh-TW": "肉屋",
      "zh-CN": "肉屋",
      "ko": "butcher",
      "vi": "butcher",
      "id": "butcher"
    },
    "pos": "noun",
    "ex": "肉屋について考える"
  },
  {
    "id": "V3686",
    "w": "魚屋",
    "r": "さかなや",
    "m": {
      "en": "fish shop",
      "zh-TW": "魚屋",
      "zh-CN": "魚屋",
      "ko": "fish shop",
      "vi": "fish shop",
      "id": "fish shop"
    },
    "pos": "noun",
    "ex": "魚屋について考える"
  },
  {
    "id": "V3687",
    "w": "パン屋",
    "r": "ぱんや",
    "m": {
      "en": "bakery",
      "zh-TW": "パン屋",
      "zh-CN": "パン屋",
      "ko": "bakery",
      "vi": "bakery",
      "id": "bakery"
    },
    "pos": "noun",
    "ex": "パン屋について考える"
  },
  {
    "id": "V3688",
    "w": "ケーキ屋",
    "r": "けーきや",
    "m": {
      "en": "cake shop",
      "zh-TW": "ケーキ屋",
      "zh-CN": "ケーキ屋",
      "ko": "cake shop",
      "vi": "cake shop",
      "id": "cake shop"
    },
    "pos": "noun",
    "ex": "ケーキ屋について考える"
  },
  {
    "id": "V3689",
    "w": "花屋",
    "r": "はなや",
    "m": {
      "en": "florist",
      "zh-TW": "花屋",
      "zh-CN": "花屋",
      "ko": "florist",
      "vi": "florist",
      "id": "florist"
    },
    "pos": "noun",
    "ex": "花屋について考える"
  },
  {
    "id": "V3690",
    "w": "本屋",
    "r": "ほんや",
    "m": {
      "en": "bookstore",
      "zh-TW": "本屋",
      "zh-CN": "本屋",
      "ko": "bookstore",
      "vi": "bookstore",
      "id": "bookstore"
    },
    "pos": "noun",
    "ex": "本屋について考える"
  },
  {
    "id": "V3691",
    "w": "文房具屋",
    "r": "ぶんぼうぐや",
    "m": {
      "en": "stationery shop",
      "zh-TW": "文房具屋",
      "zh-CN": "文房具屋",
      "ko": "stationery shop",
      "vi": "stationery shop",
      "id": "stationery shop"
    },
    "pos": "noun",
    "ex": "文房具屋について考える"
  },
  {
    "id": "V3692",
    "w": "電器屋",
    "r": "でんきや",
    "m": {
      "en": "electronics shop",
      "zh-TW": "電器屋",
      "zh-CN": "電器屋",
      "ko": "electronics shop",
      "vi": "electronics shop",
      "id": "electronics shop"
    },
    "pos": "noun",
    "ex": "電器屋について考える"
  },
  {
    "id": "V3693",
    "w": "家具屋",
    "r": "かぐや",
    "m": {
      "en": "furniture shop",
      "zh-TW": "家具屋",
      "zh-CN": "家具屋",
      "ko": "furniture shop",
      "vi": "furniture shop",
      "id": "furniture shop"
    },
    "pos": "noun",
    "ex": "家具屋について考える"
  },
  {
    "id": "V3694",
    "w": "洋服屋",
    "r": "ようふくや",
    "m": {
      "en": "clothing shop",
      "zh-TW": "洋服屋",
      "zh-CN": "洋服屋",
      "ko": "clothing shop",
      "vi": "clothing shop",
      "id": "clothing shop"
    },
    "pos": "noun",
    "ex": "洋服屋について考える"
  },
  {
    "id": "V3695",
    "w": "靴屋",
    "r": "くつや",
    "m": {
      "en": "shoe shop",
      "zh-TW": "靴屋",
      "zh-CN": "靴屋",
      "ko": "shoe shop",
      "vi": "shoe shop",
      "id": "shoe shop"
    },
    "pos": "noun",
    "ex": "靴屋について考える"
  },
  {
    "id": "V3696",
    "w": "眼鏡屋",
    "r": "めがねや",
    "m": {
      "en": "optician",
      "zh-TW": "眼鏡屋",
      "zh-CN": "眼鏡屋",
      "ko": "optician",
      "vi": "optician",
      "id": "optician"
    },
    "pos": "noun",
    "ex": "眼鏡屋について考える"
  },
  {
    "id": "V3697",
    "w": "時計屋",
    "r": "とけいや",
    "m": {
      "en": "watch shop",
      "zh-TW": "時計屋",
      "zh-CN": "時計屋",
      "ko": "watch shop",
      "vi": "watch shop",
      "id": "watch shop"
    },
    "pos": "noun",
    "ex": "時計屋について考える"
  },
  {
    "id": "V3698",
    "w": "宝石店",
    "r": "ほうせきてん",
    "m": {
      "en": "jewelry shop",
      "zh-TW": "宝石店",
      "zh-CN": "宝石店",
      "ko": "jewelry shop",
      "vi": "jewelry shop",
      "id": "jewelry shop"
    },
    "pos": "noun",
    "ex": "宝石店について考える"
  },
  {
    "id": "V3699",
    "w": "ペットショップ",
    "r": "ぺっとしょっぷ",
    "m": {
      "en": "pet shop",
      "zh-TW": "ペットショップ",
      "zh-CN": "ペットショップ",
      "ko": "pet shop",
      "vi": "pet shop",
      "id": "pet shop"
    },
    "pos": "noun",
    "ex": "ペットショップについて考える"
  },
  {
    "id": "V3700",
    "w": "レンタルショップ",
    "r": "れんたるしょっぷ",
    "m": {
      "en": "rental shop",
      "zh-TW": "レンタルショップ",
      "zh-CN": "レンタルショップ",
      "ko": "rental shop",
      "vi": "rental shop",
      "id": "rental shop"
    },
    "pos": "noun",
    "ex": "レンタルショップについて考える"
  },
  {
    "id": "V3701",
    "w": "クリーニング店",
    "r": "くりーにんぐてん",
    "m": {
      "en": "dry cleaner",
      "zh-TW": "クリーニング店",
      "zh-CN": "クリーニング店",
      "ko": "dry cleaner",
      "vi": "dry cleaner",
      "id": "dry cleaner"
    },
    "pos": "noun",
    "ex": "クリーニング店について考える"
  },
  {
    "id": "V3702",
    "w": "美容院",
    "r": "びよういん",
    "m": {
      "en": "beauty salon",
      "zh-TW": "美容院",
      "zh-CN": "美容院",
      "ko": "beauty salon",
      "vi": "beauty salon",
      "id": "beauty salon"
    },
    "pos": "noun",
    "ex": "美容院について考える"
  },
  {
    "id": "V3703",
    "w": "床屋",
    "r": "とこや",
    "m": {
      "en": "barber",
      "zh-TW": "床屋",
      "zh-CN": "床屋",
      "ko": "barber",
      "vi": "barber",
      "id": "barber"
    },
    "pos": "noun",
    "ex": "床屋について考える"
  },
  {
    "id": "V3704",
    "w": "エステサロン",
    "r": "えすてさろん",
    "m": {
      "en": "spa",
      "zh-TW": "エステサロン",
      "zh-CN": "エステサロン",
      "ko": "spa",
      "vi": "spa",
      "id": "spa"
    },
    "pos": "noun",
    "ex": "エステサロンについて考える"
  },
  {
    "id": "V3705",
    "w": "ネイルサロン",
    "r": "ねいるさろん",
    "m": {
      "en": "nail salon",
      "zh-TW": "ネイルサロン",
      "zh-CN": "ネイルサロン",
      "ko": "nail salon",
      "vi": "nail salon",
      "id": "nail salon"
    },
    "pos": "noun",
    "ex": "ネイルサロンについて考える"
  },
  {
    "id": "V3706",
    "w": "マッサージ店",
    "r": "まっさーじてん",
    "m": {
      "en": "massage parlor",
      "zh-TW": "マッサージ店",
      "zh-CN": "マッサージ店",
      "ko": "massage parlor",
      "vi": "massage parlor",
      "id": "massage parlor"
    },
    "pos": "noun",
    "ex": "マッサージ店について考える"
  },
  {
    "id": "V3707",
    "w": "整体",
    "r": "せいたい",
    "m": {
      "en": "chiropractic",
      "zh-TW": "整体",
      "zh-CN": "整体",
      "ko": "chiropractic",
      "vi": "chiropractic",
      "id": "chiropractic"
    },
    "pos": "i-adj",
    "ex": "とても整体と思う"
  },
  {
    "id": "V3708",
    "w": "鍼灸",
    "r": "しんきゅう",
    "m": {
      "en": "acupuncture",
      "zh-TW": "鍼灸",
      "zh-CN": "鍼灸",
      "ko": "acupuncture",
      "vi": "acupuncture",
      "id": "acupuncture"
    },
    "pos": "verb-godan",
    "ex": "鍼灸ことにする"
  },
  {
    "id": "V3709",
    "w": "漢方薬",
    "r": "かんぽうやく",
    "m": {
      "en": "herbal medicine",
      "zh-TW": "漢方薬",
      "zh-CN": "漢方薬",
      "ko": "herbal medicine",
      "vi": "herbal medicine",
      "id": "herbal medicine"
    },
    "pos": "verb-godan",
    "ex": "漢方薬ことにする"
  },
  {
    "id": "V3710",
    "w": "サプリメント",
    "r": "さぷりめんと",
    "m": {
      "en": "supplement",
      "zh-TW": "サプリメント",
      "zh-CN": "サプリメント",
      "ko": "supplement",
      "vi": "supplement",
      "id": "supplement"
    },
    "pos": "noun",
    "ex": "サプリメントについて考える"
  },
  {
    "id": "V3711",
    "w": "ダイエット",
    "r": "だいえっと",
    "m": {
      "en": "diet",
      "zh-TW": "ダイエット",
      "zh-CN": "ダイエット",
      "ko": "diet",
      "vi": "diet",
      "id": "diet"
    },
    "pos": "noun",
    "ex": "ダイエットについて考える"
  },
  {
    "id": "V3712",
    "w": "トレーニング",
    "r": "とれーにんぐ",
    "m": {
      "en": "training",
      "zh-TW": "トレーニング",
      "zh-CN": "トレーニング",
      "ko": "training",
      "vi": "training",
      "id": "training"
    },
    "pos": "verb-godan",
    "ex": "トレーニングことにする"
  },
  {
    "id": "V3713",
    "w": "ストレッチ",
    "r": "すとれっち",
    "m": {
      "en": "stretching",
      "zh-TW": "ストレッチ",
      "zh-CN": "ストレッチ",
      "ko": "stretching",
      "vi": "stretching",
      "id": "stretching"
    },
    "pos": "noun",
    "ex": "ストレッチについて考える"
  },
  {
    "id": "V3714",
    "w": "ヨガ",
    "r": "よが",
    "m": {
      "en": "yoga",
      "zh-TW": "ヨガ",
      "zh-CN": "ヨガ",
      "ko": "yoga",
      "vi": "yoga",
      "id": "yoga"
    },
    "pos": "noun",
    "ex": "ヨガについて考える"
  },
  {
    "id": "V3715",
    "w": "瞑想",
    "r": "めいそう",
    "m": {
      "en": "meditation",
      "zh-TW": "瞑想",
      "zh-CN": "瞑想",
      "ko": "meditation",
      "vi": "meditation",
      "id": "meditation"
    },
    "pos": "verb-godan",
    "ex": "瞑想ことにする"
  },
  {
    "id": "V3716",
    "w": "アウトドア",
    "r": "あうとどあ",
    "m": {
      "en": "outdoor",
      "zh-TW": "アウトドア",
      "zh-CN": "アウトドア",
      "ko": "outdoor",
      "vi": "outdoor",
      "id": "outdoor"
    },
    "pos": "noun",
    "ex": "アウトドアについて考える"
  },
  {
    "id": "V3717",
    "w": "インドア",
    "r": "いんどあ",
    "m": {
      "en": "indoor",
      "zh-TW": "インドア",
      "zh-CN": "インドア",
      "ko": "indoor",
      "vi": "indoor",
      "id": "indoor"
    },
    "pos": "noun",
    "ex": "インドアについて考える"
  },
  {
    "id": "V3718",
    "w": "キャンプ",
    "r": "きゃんぷ",
    "m": {
      "en": "camping",
      "zh-TW": "キャンプ",
      "zh-CN": "キャンプ",
      "ko": "camping",
      "vi": "camping",
      "id": "camping"
    },
    "pos": "noun",
    "ex": "キャンプについて考える"
  },
  {
    "id": "V3719",
    "w": "ハイキング",
    "r": "はいきんぐ",
    "m": {
      "en": "hiking",
      "zh-TW": "ハイキング",
      "zh-CN": "ハイキング",
      "ko": "hiking",
      "vi": "hiking",
      "id": "hiking"
    },
    "pos": "verb-godan",
    "ex": "ハイキングことにする"
  },
  {
    "id": "V3720",
    "w": "手芸",
    "r": "しゅげい",
    "m": {
      "en": "handicraft",
      "zh-TW": "手芸",
      "zh-CN": "手芸",
      "ko": "handicraft",
      "vi": "handicraft",
      "id": "handicraft"
    },
    "pos": "i-adj",
    "ex": "とても手芸と思う"
  },
  {
    "id": "V3721",
    "w": "写真撮影",
    "r": "しゃしんさつえい",
    "m": {
      "en": "photography",
      "zh-TW": "写真撮影",
      "zh-CN": "写真撮影",
      "ko": "photography",
      "vi": "photography",
      "id": "photography"
    },
    "pos": "i-adj",
    "ex": "とても写真撮影と思う"
  },
  {
    "id": "V3722",
    "w": "映像編集",
    "r": "えいぞうへんしゅう",
    "m": {
      "en": "video editing",
      "zh-TW": "映像編集",
      "zh-CN": "映像編集",
      "ko": "video editing",
      "vi": "video editing",
      "id": "video editing"
    },
    "pos": "verb-godan",
    "ex": "映像編集ことにする"
  },
  {
    "id": "V3723",
    "w": "音楽鑑賞",
    "r": "おんがくかんしょう",
    "m": {
      "en": "music appreciation",
      "zh-TW": "音楽鑑賞",
      "zh-CN": "音楽鑑賞",
      "ko": "music appreciation",
      "vi": "music appreciation",
      "id": "music appreciation"
    },
    "pos": "verb-godan",
    "ex": "音楽鑑賞ことにする"
  },
  {
    "id": "V3724",
    "w": "映画鑑賞",
    "r": "えいがかんしょう",
    "m": {
      "en": "movie watching",
      "zh-TW": "映画鑑賞",
      "zh-CN": "映画鑑賞",
      "ko": "movie watching",
      "vi": "movie watching",
      "id": "movie watching"
    },
    "pos": "verb-godan",
    "ex": "映画鑑賞ことにする"
  },
  {
    "id": "V3725",
    "w": "美術鑑賞",
    "r": "びじゅつかんしょう",
    "m": {
      "en": "art appreciation",
      "zh-TW": "美術鑑賞",
      "zh-CN": "美術鑑賞",
      "ko": "art appreciation",
      "vi": "art appreciation",
      "id": "art appreciation"
    },
    "pos": "verb-godan",
    "ex": "美術鑑賞ことにする"
  },
  {
    "id": "V3726",
    "w": "読書感想",
    "r": "どくしょかんそう",
    "m": {
      "en": "book review",
      "zh-TW": "読書感想",
      "zh-CN": "読書感想",
      "ko": "book review",
      "vi": "book review",
      "id": "book review"
    },
    "pos": "verb-godan",
    "ex": "読書感想ことにする"
  },
  {
    "id": "V3727",
    "w": "作文",
    "r": "さくぶん",
    "m": {
      "en": "composition",
      "zh-TW": "作文",
      "zh-CN": "作文",
      "ko": "composition",
      "vi": "composition",
      "id": "composition"
    },
    "pos": "noun",
    "ex": "作文について考える"
  },
  {
    "id": "V3728",
    "w": "俳句",
    "r": "はいく",
    "m": {
      "en": "haiku",
      "zh-TW": "俳句",
      "zh-CN": "俳句",
      "ko": "haiku",
      "vi": "haiku",
      "id": "haiku"
    },
    "pos": "verb-godan",
    "ex": "俳句ことにする"
  },
  {
    "id": "V3729",
    "w": "機関",
    "r": "きかん",
    "m": {
      "en": "institution",
      "zh-TW": "機関",
      "zh-CN": "機関",
      "ko": "institution",
      "vi": "institution",
      "id": "institution"
    },
    "pos": "noun",
    "ex": "機関について考える"
  },
  {
    "id": "V3730",
    "w": "企業",
    "r": "きぎょう",
    "m": {
      "en": "enterprise",
      "zh-TW": "企業",
      "zh-CN": "企業",
      "ko": "enterprise",
      "vi": "enterprise",
      "id": "enterprise"
    },
    "pos": "verb-godan",
    "ex": "企業ことにする"
  },
  {
    "id": "V3731",
    "w": "産業",
    "r": "さんぎょう",
    "m": {
      "en": "industry",
      "zh-TW": "産業",
      "zh-CN": "産業",
      "ko": "industry",
      "vi": "industry",
      "id": "industry"
    },
    "pos": "verb-godan",
    "ex": "産業ことにする"
  },
  {
    "id": "V3732",
    "w": "商業",
    "r": "しょうぎょう",
    "m": {
      "en": "commerce",
      "zh-TW": "商業",
      "zh-CN": "商業",
      "ko": "commerce",
      "vi": "commerce",
      "id": "commerce"
    },
    "pos": "verb-godan",
    "ex": "商業ことにする"
  },
  {
    "id": "V3733",
    "w": "工業",
    "r": "こうぎょう",
    "m": {
      "en": "manufacturing",
      "zh-TW": "工業",
      "zh-CN": "工業",
      "ko": "manufacturing",
      "vi": "manufacturing",
      "id": "manufacturing"
    },
    "pos": "verb-godan",
    "ex": "工業ことにする"
  },
  {
    "id": "V3734",
    "w": "鉱業",
    "r": "こうぎょう",
    "m": {
      "en": "mining",
      "zh-TW": "鉱業",
      "zh-CN": "鉱業",
      "ko": "mining",
      "vi": "mining",
      "id": "mining"
    },
    "pos": "verb-godan",
    "ex": "鉱業ことにする"
  },
  {
    "id": "V3735",
    "w": "林業",
    "r": "りんぎょう",
    "m": {
      "en": "forestry",
      "zh-TW": "林業",
      "zh-CN": "林業",
      "ko": "forestry",
      "vi": "forestry",
      "id": "forestry"
    },
    "pos": "verb-godan",
    "ex": "林業ことにする"
  },
  {
    "id": "V3736",
    "w": "建設業",
    "r": "けんせつぎょう",
    "m": {
      "en": "construction",
      "zh-TW": "建設業",
      "zh-CN": "建設業",
      "ko": "construction",
      "vi": "construction",
      "id": "construction"
    },
    "pos": "verb-godan",
    "ex": "建設業ことにする"
  },
  {
    "id": "V3737",
    "w": "運輸業",
    "r": "うんゆぎょう",
    "m": {
      "en": "transportation",
      "zh-TW": "運輸業",
      "zh-CN": "運輸業",
      "ko": "transportation",
      "vi": "transportation",
      "id": "transportation"
    },
    "pos": "verb-godan",
    "ex": "運輸業ことにする"
  },
  {
    "id": "V3738",
    "w": "通信業",
    "r": "つうしんぎょう",
    "m": {
      "en": "telecommunications",
      "zh-TW": "通信業",
      "zh-CN": "通信業",
      "ko": "telecommunications",
      "vi": "telecommunications",
      "id": "telecommunications"
    },
    "pos": "verb-godan",
    "ex": "通信業ことにする"
  },
  {
    "id": "V3739",
    "w": "金融業",
    "r": "きんゆうぎょう",
    "m": {
      "en": "finance",
      "zh-TW": "金融業",
      "zh-CN": "金融業",
      "ko": "finance",
      "vi": "finance",
      "id": "finance"
    },
    "pos": "verb-godan",
    "ex": "金融業ことにする"
  },
  {
    "id": "V3740",
    "w": "保険業",
    "r": "ほけんぎょう",
    "m": {
      "en": "insurance",
      "zh-TW": "保険業",
      "zh-CN": "保険業",
      "ko": "insurance",
      "vi": "insurance",
      "id": "insurance"
    },
    "pos": "verb-godan",
    "ex": "保険業ことにする"
  },
  {
    "id": "V3741",
    "w": "不動産業",
    "r": "ふどうさんぎょう",
    "m": {
      "en": "real estate",
      "zh-TW": "不動産業",
      "zh-CN": "不動産業",
      "ko": "real estate",
      "vi": "real estate",
      "id": "real estate"
    },
    "pos": "verb-godan",
    "ex": "不動産業ことにする"
  },
  {
    "id": "V3742",
    "w": "サービス業",
    "r": "サービスぎょう",
    "m": {
      "en": "service industry",
      "zh-TW": "サービス業",
      "zh-CN": "サービス業",
      "ko": "service industry",
      "vi": "service industry",
      "id": "service industry"
    },
    "pos": "verb-godan",
    "ex": "サービス業ことにする"
  },
  {
    "id": "V3743",
    "w": "小売業",
    "r": "こうりぎょう",
    "m": {
      "en": "retail",
      "zh-TW": "小売業",
      "zh-CN": "小売業",
      "ko": "retail",
      "vi": "retail",
      "id": "retail"
    },
    "pos": "verb-godan",
    "ex": "小売業ことにする"
  },
  {
    "id": "V3744",
    "w": "卸売業",
    "r": "おろしうりぎょう",
    "m": {
      "en": "wholesale",
      "zh-TW": "卸売業",
      "zh-CN": "卸売業",
      "ko": "wholesale",
      "vi": "wholesale",
      "id": "wholesale"
    },
    "pos": "verb-godan",
    "ex": "卸売業ことにする"
  },
  {
    "id": "V3745",
    "w": "飲食業",
    "r": "いんしょくぎょう",
    "m": {
      "en": "food service",
      "zh-TW": "飲食業",
      "zh-CN": "飲食業",
      "ko": "food service",
      "vi": "food service",
      "id": "food service"
    },
    "pos": "verb-godan",
    "ex": "飲食業ことにする"
  },
  {
    "id": "V3746",
    "w": "宿泊業",
    "r": "しゅくはくぎょう",
    "m": {
      "en": "hospitality",
      "zh-TW": "宿泊業",
      "zh-CN": "宿泊業",
      "ko": "hospitality",
      "vi": "hospitality",
      "id": "hospitality"
    },
    "pos": "verb-godan",
    "ex": "宿泊業ことにする"
  },
  {
    "id": "V3747",
    "w": "観光業",
    "r": "かんこうぎょう",
    "m": {
      "en": "tourism",
      "zh-TW": "観光業",
      "zh-CN": "観光業",
      "ko": "tourism",
      "vi": "tourism",
      "id": "tourism"
    },
    "pos": "verb-godan",
    "ex": "観光業ことにする"
  },
  {
    "id": "V3748",
    "w": "医療業",
    "r": "いりょうぎょう",
    "m": {
      "en": "healthcare",
      "zh-TW": "医療業",
      "zh-CN": "医療業",
      "ko": "healthcare",
      "vi": "healthcare",
      "id": "healthcare"
    },
    "pos": "verb-godan",
    "ex": "医療業ことにする"
  },
  {
    "id": "V3749",
    "w": "教育業",
    "r": "きょういくぎょう",
    "m": {
      "en": "education sector",
      "zh-TW": "教育業",
      "zh-CN": "教育業",
      "ko": "education sector",
      "vi": "education sector",
      "id": "education sector"
    },
    "pos": "verb-godan",
    "ex": "教育業ことにする"
  },
  {
    "id": "V3750",
    "w": "IT業界",
    "r": "アイティーぎょうかい",
    "m": {
      "en": "IT industry",
      "zh-TW": "IT業界",
      "zh-CN": "IT業界",
      "ko": "IT industry",
      "vi": "IT industry",
      "id": "IT industry"
    },
    "pos": "i-adj",
    "ex": "とてもIT業界と思う"
  }
];
