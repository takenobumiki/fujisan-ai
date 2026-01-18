// Fujisan.AI Data
// Count: 577

const N3_KANJI = [
  {
    "id": "K0001",
    "k": "握",
    "r": "にぎ（る）、あく",
    "m": {
      "en": "grip",
      "zh-TW": "握",
      "zh-CN": "握",
      "ko": "악",
      "vi": "nắm",
      "id": "genggam",
      "es": "grip",
      "pt": "grip"
    }
  },
  {
    "id": "K0002",
    "k": "扱",
    "r": "あつか（う）、あつ",
    "m": {
      "en": "handle",
      "zh-TW": "處理",
      "zh-CN": "处理",
      "ko": "취",
      "vi": "xử lý",
      "id": "tangani",
      "es": "handle",
      "pt": "handle"
    }
  },
  {
    "id": "K0003",
    "k": "依",
    "r": "よ（る）、い",
    "m": {
      "en": "rely",
      "zh-TW": "依賴",
      "zh-CN": "依赖",
      "ko": "의",
      "vi": "dựa",
      "id": "bergantung",
      "es": "rely",
      "pt": "rely"
    }
  },
  {
    "id": "K0004",
    "k": "偉",
    "r": "えら（い）、い",
    "m": {
      "en": "great",
      "zh-TW": "偉大",
      "zh-CN": "伟大",
      "ko": "위",
      "vi": "vĩ đại",
      "id": "hebat",
      "es": "great",
      "pt": "great"
    }
  },
  {
    "id": "K0005",
    "k": "違",
    "r": "ちが（う）、い",
    "m": {
      "en": "differ",
      "zh-TW": "不同",
      "zh-CN": "不同",
      "ko": "위",
      "vi": "khác",
      "id": "berbeda",
      "es": "differ",
      "pt": "differ"
    }
  },
  {
    "id": "K0006",
    "k": "維",
    "r": "い",
    "m": {
      "en": "maintain",
      "zh-TW": "維持",
      "zh-CN": "维持",
      "ko": "유",
      "vi": "duy trì",
      "id": "pertahankan",
      "es": "maintain",
      "pt": "maintain"
    }
  },
  {
    "id": "K0007",
    "k": "緯",
    "r": "い",
    "m": {
      "en": "latitude",
      "zh-TW": "緯度",
      "zh-CN": "纬度",
      "ko": "위",
      "vi": "vĩ độ",
      "id": "lintang",
      "es": "latitude",
      "pt": "latitude"
    }
  },
  {
    "id": "K0008",
    "k": "壱",
    "r": "いち",
    "m": {
      "en": "one",
      "zh-TW": "壹",
      "zh-CN": "壹",
      "ko": "일",
      "vi": "nhất",
      "id": "satu",
      "es": "uno",
      "pt": "um"
    }
  },
  {
    "id": "K0009",
    "k": "逸",
    "r": "いつ",
    "m": {
      "en": "escape",
      "zh-TW": "逸",
      "zh-CN": "逸",
      "ko": "일",
      "vi": "thoát",
      "id": "lepas",
      "es": "escape",
      "pt": "escape"
    }
  },
  {
    "id": "K0010",
    "k": "稲",
    "r": "いね、とう",
    "m": {
      "en": "rice",
      "zh-TW": "稻",
      "zh-CN": "稻",
      "ko": "도",
      "vi": "lúa",
      "id": "padi",
      "es": "arroz",
      "pt": "arroz"
    }
  },
  {
    "id": "K0011",
    "k": "芋",
    "r": "いも",
    "m": {
      "en": "potato",
      "zh-TW": "芋",
      "zh-CN": "芋",
      "ko": "우",
      "vi": "khoai",
      "id": "ubi",
      "es": "potato",
      "pt": "potato"
    }
  },
  {
    "id": "K0012",
    "k": "姻",
    "r": "いん",
    "m": {
      "en": "marriage",
      "zh-TW": "婚姻",
      "zh-CN": "婚姻",
      "ko": "인",
      "vi": "hôn nhân",
      "id": "pernikahan",
      "es": "marriage",
      "pt": "marriage"
    }
  },
  {
    "id": "K0013",
    "k": "陰",
    "r": "かげ、いん",
    "m": {
      "en": "shadow",
      "zh-TW": "陰",
      "zh-CN": "阴",
      "ko": "음",
      "vi": "âm",
      "id": "bayangan",
      "es": "shadow",
      "pt": "shadow"
    }
  },
  {
    "id": "K0014",
    "k": "隠",
    "r": "かく（す）、いん",
    "m": {
      "en": "hide",
      "zh-TW": "隱藏",
      "zh-CN": "隐藏",
      "ko": "은",
      "vi": "ẩn",
      "id": "sembunyi",
      "es": "esconder",
      "pt": "esconder"
    }
  },
  {
    "id": "K0015",
    "k": "韻",
    "r": "いん",
    "m": {
      "en": "rhyme",
      "zh-TW": "韻",
      "zh-CN": "韵",
      "ko": "운",
      "vi": "vần",
      "id": "rima",
      "es": "rhyme",
      "pt": "rhyme"
    }
  },
  {
    "id": "K0016",
    "k": "渦",
    "r": "うず、か",
    "m": {
      "en": "whirlpool",
      "zh-TW": "漩渦",
      "zh-CN": "漩涡",
      "ko": "와",
      "vi": "xoáy",
      "id": "pusaran",
      "es": "whirlpool",
      "pt": "whirlpool"
    }
  },
  {
    "id": "K0017",
    "k": "浦",
    "r": "うら、ほ",
    "m": {
      "en": "bay",
      "zh-TW": "浦",
      "zh-CN": "浦",
      "ko": "포",
      "vi": "vịnh",
      "id": "teluk",
      "es": "bay",
      "pt": "bay"
    }
  },
  {
    "id": "K0018",
    "k": "影",
    "r": "かげ、えい",
    "m": {
      "en": "shadow",
      "zh-TW": "影子",
      "zh-CN": "影子",
      "ko": "영",
      "vi": "bóng",
      "id": "bayangan",
      "es": "shadow",
      "pt": "shadow"
    }
  },
  {
    "id": "K0019",
    "k": "鋭",
    "r": "するど（い）、えい",
    "m": {
      "en": "sharp",
      "zh-TW": "尖銳",
      "zh-CN": "尖锐",
      "ko": "예",
      "vi": "sắc",
      "id": "tajam",
      "es": "sharp",
      "pt": "sharp"
    }
  },
  {
    "id": "K0020",
    "k": "疫",
    "r": "えき",
    "m": {
      "en": "epidemic",
      "zh-TW": "疫",
      "zh-CN": "疫",
      "ko": "역",
      "vi": "dịch",
      "id": "wabah",
      "es": "epidemic",
      "pt": "epidemic"
    }
  },
  {
    "id": "K0021",
    "k": "悦",
    "r": "えつ",
    "m": {
      "en": "joy",
      "zh-TW": "悅",
      "zh-CN": "悦",
      "ko": "열",
      "vi": "vui",
      "id": "senang",
      "es": "joy",
      "pt": "joy"
    }
  },
  {
    "id": "K0022",
    "k": "謁",
    "r": "えつ",
    "m": {
      "en": "audience",
      "zh-TW": "謁見",
      "zh-CN": "谒见",
      "ko": "알",
      "vi": "yết kiến",
      "id": "audiensi",
      "es": "audience",
      "pt": "audience"
    }
  },
  {
    "id": "K0023",
    "k": "閲",
    "r": "えつ",
    "m": {
      "en": "review",
      "zh-TW": "閱覽",
      "zh-CN": "阅览",
      "ko": "열",
      "vi": "đọc",
      "id": "tinjau",
      "es": "review",
      "pt": "review"
    }
  },
  {
    "id": "K0024",
    "k": "援",
    "r": "えん",
    "m": {
      "en": "aid",
      "zh-TW": "援助",
      "zh-CN": "援助",
      "ko": "원",
      "vi": "viện",
      "id": "bantuan",
      "es": "aid",
      "pt": "aid"
    }
  },
  {
    "id": "K0025",
    "k": "炎",
    "r": "ほのお、えん",
    "m": {
      "en": "flame",
      "zh-TW": "火焰",
      "zh-CN": "火焰",
      "ko": "염",
      "vi": "lửa",
      "id": "api",
      "es": "flame",
      "pt": "flame"
    }
  },
  {
    "id": "K0026",
    "k": "煙",
    "r": "けむり、えん",
    "m": {
      "en": "smoke",
      "zh-TW": "煙",
      "zh-CN": "烟",
      "ko": "연",
      "vi": "khói",
      "id": "asap",
      "es": "smoke",
      "pt": "smoke"
    }
  },
  {
    "id": "K0027",
    "k": "猿",
    "r": "さる、えん",
    "m": {
      "en": "monkey",
      "zh-TW": "猴子",
      "zh-CN": "猴子",
      "ko": "원",
      "vi": "khỉ",
      "id": "monyet",
      "es": "monkey",
      "pt": "monkey"
    }
  },
  {
    "id": "K0028",
    "k": "縁",
    "r": "ふち、えん",
    "m": {
      "en": "edge",
      "zh-TW": "緣",
      "zh-CN": "缘",
      "ko": "연",
      "vi": "duyên",
      "id": "tepi",
      "es": "edge",
      "pt": "edge"
    }
  },
  {
    "id": "K0029",
    "k": "鉛",
    "r": "なまり、えん",
    "m": {
      "en": "lead",
      "zh-TW": "鉛",
      "zh-CN": "铅",
      "ko": "연",
      "vi": "chì",
      "id": "timah",
      "es": "liderar",
      "pt": "liderar"
    }
  },
  {
    "id": "K0030",
    "k": "汚",
    "r": "よご（す）、お",
    "m": {
      "en": "dirty",
      "zh-TW": "髒",
      "zh-CN": "脏",
      "ko": "오",
      "vi": "bẩn",
      "id": "kotor",
      "es": "sucio",
      "pt": "sujo"
    }
  },
  {
    "id": "K0031",
    "k": "凹",
    "r": "おう",
    "m": {
      "en": "concave",
      "zh-TW": "凹",
      "zh-CN": "凹",
      "ko": "요",
      "vi": "lõm",
      "id": "cekung",
      "es": "concave",
      "pt": "concave"
    }
  },
  {
    "id": "K0032",
    "k": "欧",
    "r": "おう",
    "m": {
      "en": "Europe",
      "zh-TW": "歐洲",
      "zh-CN": "欧洲",
      "ko": "구",
      "vi": "Âu",
      "id": "Eropa",
      "es": "Europe",
      "pt": "Europe"
    }
  },
  {
    "id": "K0033",
    "k": "殴",
    "r": "なぐ（る）、おう",
    "m": {
      "en": "beat",
      "zh-TW": "打",
      "zh-CN": "打",
      "ko": "구",
      "vi": "đánh",
      "id": "pukul",
      "es": "beat",
      "pt": "beat"
    }
  },
  {
    "id": "K0034",
    "k": "翁",
    "r": "おきな、おう",
    "m": {
      "en": "old man",
      "zh-TW": "老翁",
      "zh-CN": "老翁",
      "ko": "옹",
      "vi": "ông",
      "id": "kakek",
      "es": "old man",
      "pt": "old man"
    }
  },
  {
    "id": "K0035",
    "k": "沖",
    "r": "おき、ちゅう",
    "m": {
      "en": "offshore",
      "zh-TW": "海上",
      "zh-CN": "海上",
      "ko": "충",
      "vi": "ngoài khơi",
      "id": "lepas pantai",
      "es": "offshore",
      "pt": "offshore"
    }
  },
  {
    "id": "K0036",
    "k": "憶",
    "r": "お（く）",
    "m": {
      "en": "remember",
      "zh-TW": "記憶",
      "zh-CN": "记忆",
      "ko": "억",
      "vi": "nhớ",
      "id": "ingat",
      "es": "recordar",
      "pt": "lembrar"
    }
  },
  {
    "id": "K0037",
    "k": "乙",
    "r": "おつ",
    "m": {
      "en": "second",
      "zh-TW": "乙",
      "zh-CN": "乙",
      "ko": "을",
      "vi": "ất",
      "id": "kedua",
      "es": "second",
      "pt": "second"
    }
  },
  {
    "id": "K0038",
    "k": "卸",
    "r": "おろ（す）、しゃ",
    "m": {
      "en": "wholesale",
      "zh-TW": "批發",
      "zh-CN": "批发",
      "ko": "사",
      "vi": "bán buôn",
      "id": "grosir",
      "es": "wholesale",
      "pt": "wholesale"
    }
  },
  {
    "id": "K0039",
    "k": "穏",
    "r": "おだ（やか）、おん",
    "m": {
      "en": "calm",
      "zh-TW": "平穩",
      "zh-CN": "平稳",
      "ko": "온",
      "vi": "yên",
      "id": "tenang",
      "es": "tranquilo",
      "pt": "calmo"
    }
  },
  {
    "id": "K0040",
    "k": "佳",
    "r": "か",
    "m": {
      "en": "good",
      "zh-TW": "佳",
      "zh-CN": "佳",
      "ko": "가",
      "vi": "tốt",
      "id": "baik",
      "es": "bueno",
      "pt": "bom"
    }
  },
  {
    "id": "K0041",
    "k": "架",
    "r": "か（く）、か",
    "m": {
      "en": "rack",
      "zh-TW": "架",
      "zh-CN": "架",
      "ko": "가",
      "vi": "giá",
      "id": "rak",
      "es": "rack",
      "pt": "rack"
    }
  },
  {
    "id": "K0042",
    "k": "華",
    "r": "はな、か",
    "m": {
      "en": "flower",
      "zh-TW": "花",
      "zh-CN": "花",
      "ko": "화",
      "vi": "hoa",
      "id": "bunga",
      "es": "flor",
      "pt": "flor"
    }
  },
  {
    "id": "K0043",
    "k": "菓",
    "r": "か",
    "m": {
      "en": "confection",
      "zh-TW": "糖果",
      "zh-CN": "糖果",
      "ko": "과",
      "vi": "bánh",
      "id": "kue",
      "es": "confection",
      "pt": "confection"
    }
  },
  {
    "id": "K0044",
    "k": "蚊",
    "r": "か",
    "m": {
      "en": "mosquito",
      "zh-TW": "蚊子",
      "zh-CN": "蚊子",
      "ko": "문",
      "vi": "muỗi",
      "id": "nyamuk",
      "es": "mosquito",
      "pt": "mosquito"
    }
  },
  {
    "id": "K0045",
    "k": "雅",
    "r": "みやび、が",
    "m": {
      "en": "elegant",
      "zh-TW": "雅",
      "zh-CN": "雅",
      "ko": "아",
      "vi": "nhã",
      "id": "elegan",
      "es": "elegant",
      "pt": "elegant"
    }
  },
  {
    "id": "K0046",
    "k": "餓",
    "r": "が",
    "m": {
      "en": "hungry",
      "zh-TW": "餓",
      "zh-CN": "饿",
      "ko": "아",
      "vi": "đói",
      "id": "lapar",
      "es": "hungry",
      "pt": "hungry"
    }
  },
  {
    "id": "K0047",
    "k": "介",
    "r": "かい",
    "m": {
      "en": "mediate",
      "zh-TW": "介紹",
      "zh-CN": "介绍",
      "ko": "개",
      "vi": "giới",
      "id": "perantara",
      "es": "mediate",
      "pt": "mediate"
    }
  },
  {
    "id": "K0048",
    "k": "戒",
    "r": "いまし（める）、かい",
    "m": {
      "en": "warn",
      "zh-TW": "戒",
      "zh-CN": "戒",
      "ko": "계",
      "vi": "răn",
      "id": "peringatan",
      "es": "warn",
      "pt": "warn"
    }
  },
  {
    "id": "K0049",
    "k": "皆",
    "r": "みな、かい",
    "m": {
      "en": "all",
      "zh-TW": "全部",
      "zh-CN": "全部",
      "ko": "개",
      "vi": "mọi",
      "id": "semua",
      "es": "todo",
      "pt": "tudo"
    }
  },
  {
    "id": "K0050",
    "k": "塊",
    "r": "かたまり、かい",
    "m": {
      "en": "lump",
      "zh-TW": "塊",
      "zh-CN": "块",
      "ko": "괴",
      "vi": "khối",
      "id": "gumpalan",
      "es": "lump",
      "pt": "lump"
    }
  },
  {
    "id": "K0051",
    "k": "壊",
    "r": "こわ（す）、かい",
    "m": {
      "en": "break",
      "zh-TW": "壞",
      "zh-CN": "坏",
      "ko": "괴",
      "vi": "hỏng",
      "id": "rusak",
      "es": "romper",
      "pt": "quebrar"
    }
  },
  {
    "id": "K0052",
    "k": "懐",
    "r": "ふところ、かい",
    "m": {
      "en": "bosom",
      "zh-TW": "懷",
      "zh-CN": "怀",
      "ko": "회",
      "vi": "lòng",
      "id": "dada",
      "es": "bosom",
      "pt": "bosom"
    }
  },
  {
    "id": "K0053",
    "k": "拐",
    "r": "かい",
    "m": {
      "en": "kidnap",
      "zh-TW": "拐",
      "zh-CN": "拐",
      "ko": "괴",
      "vi": "bắt cóc",
      "id": "culik",
      "es": "kidnap",
      "pt": "kidnap"
    }
  },
  {
    "id": "K0054",
    "k": "劾",
    "r": "がい",
    "m": {
      "en": "impeach",
      "zh-TW": "彈劾",
      "zh-CN": "弹劾",
      "ko": "핵",
      "vi": "hặc",
      "id": "dakwa",
      "es": "impeach",
      "pt": "impeach"
    }
  },
  {
    "id": "K0055",
    "k": "涯",
    "r": "がい",
    "m": {
      "en": "horizon",
      "zh-TW": "涯",
      "zh-CN": "涯",
      "ko": "애",
      "vi": "bờ",
      "id": "cakrawala",
      "es": "horizon",
      "pt": "horizon"
    }
  },
  {
    "id": "K0056",
    "k": "慨",
    "r": "がい",
    "m": {
      "en": "lament",
      "zh-TW": "慨",
      "zh-CN": "慨",
      "ko": "개",
      "vi": "thở dài",
      "id": "keluh",
      "es": "lament",
      "pt": "lament"
    }
  },
  {
    "id": "K0057",
    "k": "概",
    "r": "おおむ（ね）、がい",
    "m": {
      "en": "outline",
      "zh-TW": "概",
      "zh-CN": "概",
      "ko": "개",
      "vi": "khái",
      "id": "garis besar",
      "es": "outline",
      "pt": "outline"
    }
  },
  {
    "id": "K0058",
    "k": "蓋",
    "r": "ふた、がい",
    "m": {
      "en": "lid",
      "zh-TW": "蓋子",
      "zh-CN": "盖子",
      "ko": "개",
      "vi": "nắp",
      "id": "tutup",
      "es": "lid",
      "pt": "lid"
    }
  },
  {
    "id": "K0059",
    "k": "該",
    "r": "がい",
    "m": {
      "en": "said",
      "zh-TW": "該",
      "zh-CN": "该",
      "ko": "해",
      "vi": "đó",
      "id": "tersebut",
      "es": "said",
      "pt": "said"
    }
  },
  {
    "id": "K0060",
    "k": "骸",
    "r": "むくろ、がい",
    "m": {
      "en": "corpse",
      "zh-TW": "骸",
      "zh-CN": "骸",
      "ko": "해",
      "vi": "xác",
      "id": "mayat",
      "es": "corpse",
      "pt": "corpse"
    }
  },
  {
    "id": "K0061",
    "k": "垣",
    "r": "かき、えん",
    "m": {
      "en": "fence",
      "zh-TW": "籬笆",
      "zh-CN": "篱笆",
      "ko": "원",
      "vi": "hàng rào",
      "id": "pagar",
      "es": "fence",
      "pt": "fence"
    }
  },
  {
    "id": "K0062",
    "k": "柿",
    "r": "かき",
    "m": {
      "en": "persimmon",
      "zh-TW": "柿子",
      "zh-CN": "柿子",
      "ko": "시",
      "vi": "hồng",
      "id": "kesemek",
      "es": "persimmon",
      "pt": "persimmon"
    }
  },
  {
    "id": "K0063",
    "k": "核",
    "r": "かく",
    "m": {
      "en": "nucleus",
      "zh-TW": "核",
      "zh-CN": "核",
      "ko": "핵",
      "vi": "hạt nhân",
      "id": "inti",
      "es": "nucleus",
      "pt": "nucleus"
    }
  },
  {
    "id": "K0064",
    "k": "殻",
    "r": "から、かく",
    "m": {
      "en": "shell",
      "zh-TW": "殼",
      "zh-CN": "壳",
      "ko": "각",
      "vi": "vỏ",
      "id": "cangkang",
      "es": "shell",
      "pt": "shell"
    }
  },
  {
    "id": "K0065",
    "k": "郭",
    "r": "かく",
    "m": {
      "en": "enclosure",
      "zh-TW": "郭",
      "zh-CN": "郭",
      "ko": "곽",
      "vi": "quách",
      "id": "tembok",
      "es": "enclosure",
      "pt": "enclosure"
    }
  },
  {
    "id": "K0066",
    "k": "較",
    "r": "かく",
    "m": {
      "en": "compare",
      "zh-TW": "比較",
      "zh-CN": "比较",
      "ko": "교",
      "vi": "so sánh",
      "id": "bandingkan",
      "es": "comparar",
      "pt": "comparar"
    }
  },
  {
    "id": "K0067",
    "k": "隔",
    "r": "へだ（てる）、かく",
    "m": {
      "en": "separate",
      "zh-TW": "隔",
      "zh-CN": "隔",
      "ko": "격",
      "vi": "cách",
      "id": "pisah",
      "es": "separar",
      "pt": "separar"
    }
  },
  {
    "id": "K0068",
    "k": "岳",
    "r": "たけ、がく",
    "m": {
      "en": "mountain",
      "zh-TW": "山嶽",
      "zh-CN": "山岳",
      "ko": "악",
      "vi": "núi",
      "id": "gunung",
      "es": "montaña",
      "pt": "montanha"
    }
  },
  {
    "id": "K0069",
    "k": "掛",
    "r": "か（く）、か（かる）",
    "m": {
      "en": "hang",
      "zh-TW": "掛",
      "zh-CN": "挂",
      "ko": "괘",
      "vi": "treo",
      "id": "gantung",
      "es": "colgar",
      "pt": "pendurar"
    }
  },
  {
    "id": "K0070",
    "k": "潟",
    "r": "かた",
    "m": {
      "en": "lagoon",
      "zh-TW": "潟",
      "zh-CN": "潟",
      "ko": "석",
      "vi": "đầm",
      "id": "laguna",
      "es": "lagoon",
      "pt": "lagoon"
    }
  },
  {
    "id": "K0071",
    "k": "括",
    "r": "くく（る）、かつ",
    "m": {
      "en": "fasten",
      "zh-TW": "括",
      "zh-CN": "括",
      "ko": "괄",
      "vi": "buộc",
      "id": "ikat",
      "es": "fasten",
      "pt": "fasten"
    }
  },
  {
    "id": "K0072",
    "k": "喝",
    "r": "かつ",
    "m": {
      "en": "scold",
      "zh-TW": "喝",
      "zh-CN": "喝",
      "ko": "갈",
      "vi": "mắng",
      "id": "bentak",
      "es": "scold",
      "pt": "scold"
    }
  },
  {
    "id": "K0073",
    "k": "渇",
    "r": "かわ（く）、かつ",
    "m": {
      "en": "thirst",
      "zh-TW": "渴",
      "zh-CN": "渴",
      "ko": "갈",
      "vi": "khát",
      "id": "haus",
      "es": "thirst",
      "pt": "thirst"
    }
  },
  {
    "id": "K0074",
    "k": "滑",
    "r": "すべ（る）、かつ",
    "m": {
      "en": "slip",
      "zh-TW": "滑",
      "zh-CN": "滑",
      "ko": "활",
      "vi": "trượt",
      "id": "licin",
      "es": "slip",
      "pt": "slip"
    }
  },
  {
    "id": "K0075",
    "k": "轄",
    "r": "かつ",
    "m": {
      "en": "control",
      "zh-TW": "管轄",
      "zh-CN": "管辖",
      "ko": "할",
      "vi": "quản",
      "id": "kendali",
      "es": "control",
      "pt": "control"
    }
  },
  {
    "id": "K0076",
    "k": "刈",
    "r": "か（る）、がい",
    "m": {
      "en": "cut",
      "zh-TW": "割",
      "zh-CN": "割",
      "ko": "예",
      "vi": "cắt",
      "id": "potong",
      "es": "cortar",
      "pt": "cortar"
    }
  },
  {
    "id": "K0077",
    "k": "冠",
    "r": "かんむり、かん",
    "m": {
      "en": "crown",
      "zh-TW": "冠",
      "zh-CN": "冠",
      "ko": "관",
      "vi": "vương miện",
      "id": "mahkota",
      "es": "crown",
      "pt": "crown"
    }
  },
  {
    "id": "K0078",
    "k": "勘",
    "r": "かん",
    "m": {
      "en": "intuition",
      "zh-TW": "直覺",
      "zh-CN": "直觉",
      "ko": "감",
      "vi": "linh cảm",
      "id": "intuisi",
      "es": "intuition",
      "pt": "intuition"
    }
  },
  {
    "id": "K0079",
    "k": "勧",
    "r": "すす（める）、かん",
    "m": {
      "en": "recommend",
      "zh-TW": "勸",
      "zh-CN": "劝",
      "ko": "권",
      "vi": "khuyên",
      "id": "anjurkan",
      "es": "recommend",
      "pt": "recommend"
    }
  },
  {
    "id": "K0080",
    "k": "喚",
    "r": "よ（ぶ）、かん",
    "m": {
      "en": "call",
      "zh-TW": "喚",
      "zh-CN": "唤",
      "ko": "환",
      "vi": "gọi",
      "id": "panggil",
      "es": "llamar",
      "pt": "chamar"
    }
  },
  {
    "id": "K0081",
    "k": "堪",
    "r": "た（える）、かん",
    "m": {
      "en": "endure",
      "zh-TW": "堪",
      "zh-CN": "堪",
      "ko": "감",
      "vi": "chịu",
      "id": "tahan",
      "es": "endure",
      "pt": "endure"
    }
  },
  {
    "id": "K0082",
    "k": "寛",
    "r": "ひろ（い）、かん",
    "m": {
      "en": "tolerant",
      "zh-TW": "寬",
      "zh-CN": "宽",
      "ko": "관",
      "vi": "rộng",
      "id": "toleran",
      "es": "tolerant",
      "pt": "tolerant"
    }
  },
  {
    "id": "K0083",
    "k": "幹",
    "r": "みき、かん",
    "m": {
      "en": "trunk",
      "zh-TW": "幹",
      "zh-CN": "干",
      "ko": "간",
      "vi": "thân",
      "id": "batang",
      "es": "trunk",
      "pt": "trunk"
    }
  },
  {
    "id": "K0084",
    "k": "患",
    "r": "わずら（う）、かん",
    "m": {
      "en": "afflict",
      "zh-TW": "患",
      "zh-CN": "患",
      "ko": "환",
      "vi": "bệnh",
      "id": "sakit",
      "es": "afflict",
      "pt": "afflict"
    }
  },
  {
    "id": "K0085",
    "k": "憾",
    "r": "うら、かん",
    "m": {
      "en": "regret",
      "zh-TW": "憾",
      "zh-CN": "憾",
      "ko": "감",
      "vi": "hận",
      "id": "sesalan",
      "es": "regret",
      "pt": "regret"
    }
  },
  {
    "id": "K0086",
    "k": "換",
    "r": "か（く）、かん",
    "m": {
      "en": "exchange",
      "zh-TW": "換",
      "zh-CN": "换",
      "ko": "환",
      "vi": "đổi",
      "id": "tukar",
      "es": "exchange",
      "pt": "exchange"
    }
  },
  {
    "id": "K0087",
    "k": "敢",
    "r": "あ（う）、かん",
    "m": {
      "en": "dare",
      "zh-TW": "敢",
      "zh-CN": "敢",
      "ko": "감",
      "vi": "dám",
      "id": "berani",
      "es": "dare",
      "pt": "dare"
    }
  },
  {
    "id": "K0088",
    "k": "棺",
    "r": "かん",
    "m": {
      "en": "coffin",
      "zh-TW": "棺",
      "zh-CN": "棺",
      "ko": "관",
      "vi": "quan tài",
      "id": "peti mati",
      "es": "coffin",
      "pt": "coffin"
    }
  },
  {
    "id": "K0089",
    "k": "款",
    "r": "かん",
    "m": {
      "en": "article",
      "zh-TW": "款",
      "zh-CN": "款",
      "ko": "관",
      "vi": "khoản",
      "id": "pasal",
      "es": "article",
      "pt": "article"
    }
  },
  {
    "id": "K0090",
    "k": "歓",
    "r": "よろこ（ぶ）、かん",
    "m": {
      "en": "rejoice",
      "zh-TW": "歡",
      "zh-CN": "欢",
      "ko": "환",
      "vi": "vui",
      "id": "senang",
      "es": "rejoice",
      "pt": "rejoice"
    }
  },
  {
    "id": "K0091",
    "k": "汗",
    "r": "あせ、かん",
    "m": {
      "en": "sweat",
      "zh-TW": "汗",
      "zh-CN": "汗",
      "ko": "한",
      "vi": "mồ hôi",
      "id": "keringat",
      "es": "sweat",
      "pt": "sweat"
    }
  },
  {
    "id": "K0092",
    "k": "環",
    "r": "かん",
    "m": {
      "en": "ring",
      "zh-TW": "環",
      "zh-CN": "环",
      "ko": "환",
      "vi": "vòng",
      "id": "cincin",
      "es": "ring",
      "pt": "ring"
    }
  },
  {
    "id": "K0093",
    "k": "監",
    "r": "かん",
    "m": {
      "en": "supervise",
      "zh-TW": "監",
      "zh-CN": "监",
      "ko": "감",
      "vi": "giám",
      "id": "awasi",
      "es": "supervise",
      "pt": "supervise"
    }
  },
  {
    "id": "K0094",
    "k": "緩",
    "r": "ゆる（める）、かん",
    "m": {
      "en": "loose",
      "zh-TW": "緩",
      "zh-CN": "缓",
      "ko": "완",
      "vi": "chậm",
      "id": "longgar",
      "es": "loose",
      "pt": "loose"
    }
  },
  {
    "id": "K0095",
    "k": "缶",
    "r": "かん",
    "m": {
      "en": "can",
      "zh-TW": "罐",
      "zh-CN": "罐",
      "ko": "관",
      "vi": "lon",
      "id": "kaleng",
      "es": "can",
      "pt": "can"
    }
  },
  {
    "id": "K0096",
    "k": "肝",
    "r": "きも、かん",
    "m": {
      "en": "liver",
      "zh-TW": "肝",
      "zh-CN": "肝",
      "ko": "간",
      "vi": "gan",
      "id": "hati",
      "es": "liver",
      "pt": "liver"
    }
  },
  {
    "id": "K0097",
    "k": "艦",
    "r": "かん",
    "m": {
      "en": "warship",
      "zh-TW": "艦",
      "zh-CN": "舰",
      "ko": "함",
      "vi": "hạm",
      "id": "kapal perang",
      "es": "warship",
      "pt": "warship"
    }
  },
  {
    "id": "K0098",
    "k": "貫",
    "r": "つらぬ（く）、かん",
    "m": {
      "en": "pierce",
      "zh-TW": "貫",
      "zh-CN": "贯",
      "ko": "관",
      "vi": "xuyên",
      "id": "tembus",
      "es": "pierce",
      "pt": "pierce"
    }
  },
  {
    "id": "K0099",
    "k": "還",
    "r": "かん",
    "m": {
      "en": "return",
      "zh-TW": "還",
      "zh-CN": "还",
      "ko": "환",
      "vi": "hoàn",
      "id": "kembali",
      "es": "volver",
      "pt": "voltar"
    }
  },
  {
    "id": "K0100",
    "k": "鑑",
    "r": "かがみ、かん",
    "m": {
      "en": "mirror",
      "zh-TW": "鏡",
      "zh-CN": "镜",
      "ko": "감",
      "vi": "gương",
      "id": "cermin",
      "es": "mirror",
      "pt": "mirror"
    }
  },
  {
    "id": "K0101",
    "k": "陥",
    "r": "おちい（る）、かん",
    "m": {
      "en": "fall into",
      "zh-TW": "陷入",
      "zh-CN": "陷入",
      "ko": "함",
      "vi": "sa",
      "id": "jatuh",
      "es": "fall into",
      "pt": "fall into"
    }
  },
  {
    "id": "K0102",
    "k": "丸",
    "r": "まる（い）、がん",
    "m": {
      "en": "round",
      "zh-TW": "圓",
      "zh-CN": "圆",
      "ko": "환",
      "vi": "tròn",
      "id": "bulat",
      "es": "round",
      "pt": "round"
    }
  },
  {
    "id": "K0103",
    "k": "岩",
    "r": "いわ、がん",
    "m": {
      "en": "rock",
      "zh-TW": "岩",
      "zh-CN": "岩",
      "ko": "암",
      "vi": "đá",
      "id": "batu",
      "es": "rock",
      "pt": "rock"
    }
  },
  {
    "id": "K0104",
    "k": "眼",
    "r": "まなこ、がん",
    "m": {
      "en": "eye",
      "zh-TW": "眼",
      "zh-CN": "眼",
      "ko": "안",
      "vi": "mắt",
      "id": "mata",
      "es": "ojo",
      "pt": "olho"
    }
  },
  {
    "id": "K0105",
    "k": "頑",
    "r": "がん",
    "m": {
      "en": "stubborn",
      "zh-TW": "頑固",
      "zh-CN": "顽固",
      "ko": "완",
      "vi": "ngoan cố",
      "id": "keras kepala",
      "es": "stubborn",
      "pt": "stubborn"
    }
  },
  {
    "id": "K0106",
    "k": "企",
    "r": "くわだ（てる）、き",
    "m": {
      "en": "plan",
      "zh-TW": "企劃",
      "zh-CN": "企划",
      "ko": "기",
      "vi": "kế hoạch",
      "id": "rencana",
      "es": "plan",
      "pt": "plano"
    }
  },
  {
    "id": "K0107",
    "k": "危",
    "r": "あぶ（ない）、き",
    "m": {
      "en": "danger",
      "zh-TW": "危險",
      "zh-CN": "危险",
      "ko": "위",
      "vi": "nguy",
      "id": "bahaya",
      "es": "danger",
      "pt": "danger"
    }
  },
  {
    "id": "K0108",
    "k": "机",
    "r": "つくえ、き",
    "m": {
      "en": "desk",
      "zh-TW": "桌子",
      "zh-CN": "桌子",
      "ko": "궤",
      "vi": "bàn",
      "id": "meja",
      "es": "desk",
      "pt": "desk"
    }
  },
  {
    "id": "K0109",
    "k": "揮",
    "r": "き",
    "m": {
      "en": "wave",
      "zh-TW": "揮",
      "zh-CN": "挥",
      "ko": "휘",
      "vi": "vẫy",
      "id": "melambaikan",
      "es": "wave",
      "pt": "wave"
    }
  },
  {
    "id": "K0110",
    "k": "棄",
    "r": "す（てる）、き",
    "m": {
      "en": "abandon",
      "zh-TW": "放棄",
      "zh-CN": "放弃",
      "ko": "기",
      "vi": "bỏ",
      "id": "buang",
      "es": "abandon",
      "pt": "abandon"
    }
  },
  {
    "id": "K0111",
    "k": "祈",
    "r": "いの（る）、き",
    "m": {
      "en": "pray",
      "zh-TW": "祈禱",
      "zh-CN": "祈祷",
      "ko": "기",
      "vi": "cầu nguyện",
      "id": "berdoa",
      "es": "pray",
      "pt": "pray"
    }
  },
  {
    "id": "K0112",
    "k": "輝",
    "r": "かがや（く）、き",
    "m": {
      "en": "shine",
      "zh-TW": "輝",
      "zh-CN": "辉",
      "ko": "휘",
      "vi": "tỏa sáng",
      "id": "bersinar",
      "es": "shine",
      "pt": "shine"
    }
  },
  {
    "id": "K0113",
    "k": "飢",
    "r": "う（まれる）、き",
    "m": {
      "en": "hunger",
      "zh-TW": "飢餓",
      "zh-CN": "饥饿",
      "ko": "기",
      "vi": "đói",
      "id": "lapar",
      "es": "hunger",
      "pt": "hunger"
    }
  },
  {
    "id": "K0114",
    "k": "騎",
    "r": "き",
    "m": {
      "en": "ride",
      "zh-TW": "騎",
      "zh-CN": "骑",
      "ko": "기",
      "vi": "cưỡi",
      "id": "menunggang",
      "es": "montar",
      "pt": "andar"
    }
  },
  {
    "id": "K0115",
    "k": "鬼",
    "r": "おに、き",
    "m": {
      "en": "demon",
      "zh-TW": "鬼",
      "zh-CN": "鬼",
      "ko": "귀",
      "vi": "quỷ",
      "id": "setan",
      "es": "demon",
      "pt": "demon"
    }
  },
  {
    "id": "K0116",
    "k": "偽",
    "r": "いつわ（る）、ぎ",
    "m": {
      "en": "fake",
      "zh-TW": "偽",
      "zh-CN": "伪",
      "ko": "위",
      "vi": "giả",
      "id": "palsu",
      "es": "falso",
      "pt": "falso"
    }
  },
  {
    "id": "K0117",
    "k": "儀",
    "r": "ぎ",
    "m": {
      "en": "ceremony",
      "zh-TW": "儀式",
      "zh-CN": "仪式",
      "ko": "의",
      "vi": "nghi lễ",
      "id": "upacara",
      "es": "ceremonia",
      "pt": "cerimônia"
    }
  },
  {
    "id": "K0118",
    "k": "宜",
    "r": "よろ（しい）、ぎ",
    "m": {
      "en": "suitable",
      "zh-TW": "適宜",
      "zh-CN": "适宜",
      "ko": "의",
      "vi": "thích hợp",
      "id": "cocok",
      "es": "suitable",
      "pt": "suitable"
    }
  },
  {
    "id": "K0119",
    "k": "戯",
    "r": "たわむ（れる）、ぎ",
    "m": {
      "en": "play",
      "zh-TW": "遊戲",
      "zh-CN": "游戏",
      "ko": "희",
      "vi": "đùa",
      "id": "bermain",
      "es": "jugar",
      "pt": "jogar"
    }
  },
  {
    "id": "K0120",
    "k": "擬",
    "r": "ぎ",
    "m": {
      "en": "imitate",
      "zh-TW": "模擬",
      "zh-CN": "模拟",
      "ko": "의",
      "vi": "giả",
      "id": "meniru",
      "es": "imitate",
      "pt": "imitate"
    }
  },
  {
    "id": "K0121",
    "k": "犠",
    "r": "ぎ",
    "m": {
      "en": "sacrifice",
      "zh-TW": "犧牲",
      "zh-CN": "牺牲",
      "ko": "희",
      "vi": "hy sinh",
      "id": "korban",
      "es": "sacrifice",
      "pt": "sacrifice"
    }
  },
  {
    "id": "K0122",
    "k": "菊",
    "r": "き（く）",
    "m": {
      "en": "chrysanthemum",
      "zh-TW": "菊",
      "zh-CN": "菊",
      "ko": "국",
      "vi": "cúc",
      "id": "krisan",
      "es": "chrysanthemum",
      "pt": "chrysanthemum"
    }
  },
  {
    "id": "K0123",
    "k": "吉",
    "r": "きち",
    "m": {
      "en": "good luck",
      "zh-TW": "吉",
      "zh-CN": "吉",
      "ko": "길",
      "vi": "cát",
      "id": "keberuntungan",
      "es": "good luck",
      "pt": "good luck"
    }
  },
  {
    "id": "K0124",
    "k": "喫",
    "r": "きつ",
    "m": {
      "en": "consume",
      "zh-TW": "吃",
      "zh-CN": "吃",
      "ko": "끽",
      "vi": "uống",
      "id": "minum",
      "es": "consume",
      "pt": "consume"
    }
  },
  {
    "id": "K0125",
    "k": "詰",
    "r": "つ（める）、きつ",
    "m": {
      "en": "stuff",
      "zh-TW": "塞",
      "zh-CN": "塞",
      "ko": "힐",
      "vi": "nhồi",
      "id": "mengisi",
      "es": "stuff",
      "pt": "stuff"
    }
  },
  {
    "id": "K0126",
    "k": "却",
    "r": "きゃく",
    "m": {
      "en": "reject",
      "zh-TW": "卻",
      "zh-CN": "却",
      "ko": "각",
      "vi": "lại",
      "id": "menolak",
      "es": "reject",
      "pt": "reject"
    }
  },
  {
    "id": "K0127",
    "k": "脚",
    "r": "あし、きゃく",
    "m": {
      "en": "leg",
      "zh-TW": "腳",
      "zh-CN": "脚",
      "ko": "각",
      "vi": "chân",
      "id": "kaki",
      "es": "leg",
      "pt": "leg"
    }
  },
  {
    "id": "K0128",
    "k": "虐",
    "r": "しいた（げる）、ぎゃく",
    "m": {
      "en": "oppress",
      "zh-TW": "虐待",
      "zh-CN": "虐待",
      "ko": "학",
      "vi": "ngược đãi",
      "id": "menganiaya",
      "es": "oppress",
      "pt": "oppress"
    }
  },
  {
    "id": "K0129",
    "k": "及",
    "r": "およ（ぐ）、きゅう",
    "m": {
      "en": "reach",
      "zh-TW": "及",
      "zh-CN": "及",
      "ko": "급",
      "vi": "đạt",
      "id": "mencapai",
      "es": "reach",
      "pt": "reach"
    }
  },
  {
    "id": "K0130",
    "k": "丘",
    "r": "おか、きゅう",
    "m": {
      "en": "hill",
      "zh-TW": "丘",
      "zh-CN": "丘",
      "ko": "구",
      "vi": "đồi",
      "id": "bukit",
      "es": "hill",
      "pt": "hill"
    }
  },
  {
    "id": "K0131",
    "k": "朽",
    "r": "く（る）、きゅう",
    "m": {
      "en": "rot",
      "zh-TW": "朽",
      "zh-CN": "朽",
      "ko": "후",
      "vi": "mục",
      "id": "lapuk",
      "es": "rot",
      "pt": "rot"
    }
  },
  {
    "id": "K0132",
    "k": "糾",
    "r": "きゅう",
    "m": {
      "en": "twist",
      "zh-TW": "糾",
      "zh-CN": "纠",
      "ko": "규",
      "vi": "đan",
      "id": "memutar",
      "es": "twist",
      "pt": "twist"
    }
  },
  {
    "id": "K0133",
    "k": "救",
    "r": "すく（う）、きゅう",
    "m": {
      "en": "save",
      "zh-TW": "救",
      "zh-CN": "救",
      "ko": "구",
      "vi": "cứu",
      "id": "menyelamatkan",
      "es": "salvar",
      "pt": "salvar"
    }
  },
  {
    "id": "K0134",
    "k": "球",
    "r": "たま、きゅう",
    "m": {
      "en": "ball",
      "zh-TW": "球",
      "zh-CN": "球",
      "ko": "구",
      "vi": "bóng",
      "id": "bola",
      "es": "ball",
      "pt": "ball"
    }
  },
  {
    "id": "K0135",
    "k": "窮",
    "r": "きわ（める）、きゅう",
    "m": {
      "en": "extreme",
      "zh-TW": "窮",
      "zh-CN": "穷",
      "ko": "궁",
      "vi": "cùng",
      "id": "ekstrem",
      "es": "extreme",
      "pt": "extreme"
    }
  },
  {
    "id": "K0136",
    "k": "嗅",
    "r": "か（く）、きゅう",
    "m": {
      "en": "smell",
      "zh-TW": "嗅",
      "zh-CN": "嗅",
      "ko": "후",
      "vi": "ngửi",
      "id": "mencium",
      "es": "smell",
      "pt": "smell"
    }
  },
  {
    "id": "K0137",
    "k": "拒",
    "r": "こば（む）、きょ",
    "m": {
      "en": "refuse",
      "zh-TW": "拒絕",
      "zh-CN": "拒绝",
      "ko": "거",
      "vi": "từ chối",
      "id": "menolak",
      "es": "rechazar",
      "pt": "recusar"
    }
  },
  {
    "id": "K0138",
    "k": "拠",
    "r": "よ（る）、きょ",
    "m": {
      "en": "base",
      "zh-TW": "據",
      "zh-CN": "据",
      "ko": "거",
      "vi": "căn cứ",
      "id": "dasar",
      "es": "base",
      "pt": "base"
    }
  },
  {
    "id": "K0139",
    "k": "虚",
    "r": "きょ",
    "m": {
      "en": "empty",
      "zh-TW": "虛",
      "zh-CN": "虚",
      "ko": "허",
      "vi": "hư",
      "id": "kosong",
      "es": "vacío",
      "pt": "vazio"
    }
  },
  {
    "id": "K0140",
    "k": "享",
    "r": "きょう",
    "m": {
      "en": "receive",
      "zh-TW": "享",
      "zh-CN": "享",
      "ko": "향",
      "vi": "hưởng",
      "id": "menikmati",
      "es": "recibir",
      "pt": "receber"
    }
  },
  {
    "id": "K0141",
    "k": "供",
    "r": "そな（える）、きょう",
    "m": {
      "en": "offer",
      "zh-TW": "供",
      "zh-CN": "供",
      "ko": "공",
      "vi": "cung cấp",
      "id": "menyediakan",
      "es": "offer",
      "pt": "offer"
    }
  },
  {
    "id": "K0142",
    "k": "凶",
    "r": "きょう",
    "m": {
      "en": "evil",
      "zh-TW": "凶",
      "zh-CN": "凶",
      "ko": "흉",
      "vi": "hung",
      "id": "jahat",
      "es": "evil",
      "pt": "evil"
    }
  },
  {
    "id": "K0143",
    "k": "叫",
    "r": "さけ（ぶ）、きょう",
    "m": {
      "en": "shout",
      "zh-TW": "叫",
      "zh-CN": "叫",
      "ko": "규",
      "vi": "kêu",
      "id": "berteriak",
      "es": "shout",
      "pt": "shout"
    }
  },
  {
    "id": "K0144",
    "k": "峡",
    "r": "きょう",
    "m": {
      "en": "gorge",
      "zh-TW": "峽",
      "zh-CN": "峡",
      "ko": "협",
      "vi": "hẻm",
      "id": "ngarai",
      "es": "gorge",
      "pt": "gorge"
    }
  },
  {
    "id": "K0145",
    "k": "恐",
    "r": "おそ（い）、きょう",
    "m": {
      "en": "fear",
      "zh-TW": "恐",
      "zh-CN": "恐",
      "ko": "공",
      "vi": "sợ",
      "id": "takut",
      "es": "fear",
      "pt": "fear"
    }
  },
  {
    "id": "K0146",
    "k": "恭",
    "r": "うやうや（しい）、きょう",
    "m": {
      "en": "respect",
      "zh-TW": "恭",
      "zh-CN": "恭",
      "ko": "공",
      "vi": "kính",
      "id": "hormat",
      "es": "respeto",
      "pt": "respeito"
    }
  },
  {
    "id": "K0147",
    "k": "挟",
    "r": "はさ（む）、きょう",
    "m": {
      "en": "pinch",
      "zh-TW": "夾",
      "zh-CN": "夹",
      "ko": "협",
      "vi": "kẹp",
      "id": "menjepit",
      "es": "pinch",
      "pt": "pinch"
    }
  },
  {
    "id": "K0148",
    "k": "狂",
    "r": "くる（しい）、きょう",
    "m": {
      "en": "crazy",
      "zh-TW": "瘋",
      "zh-CN": "疯",
      "ko": "광",
      "vi": "điên",
      "id": "gila",
      "es": "crazy",
      "pt": "crazy"
    }
  },
  {
    "id": "K0149",
    "k": "矯",
    "r": "た（める）、きょう",
    "m": {
      "en": "correct",
      "zh-TW": "矯正",
      "zh-CN": "矫正",
      "ko": "교",
      "vi": "chỉnh",
      "id": "memperbaiki",
      "es": "correct",
      "pt": "correct"
    }
  },
  {
    "id": "K0150",
    "k": "脅",
    "r": "おびや（かす）、きょう",
    "m": {
      "en": "threaten",
      "zh-TW": "威脅",
      "zh-CN": "威胁",
      "ko": "협",
      "vi": "đe dọa",
      "id": "mengancam",
      "es": "threaten",
      "pt": "threaten"
    }
  },
  {
    "id": "K0151",
    "k": "響",
    "r": "ひび（く）、きょう",
    "m": {
      "en": "echo",
      "zh-TW": "響",
      "zh-CN": "响",
      "ko": "향",
      "vi": "vang",
      "id": "bergema",
      "es": "echo",
      "pt": "echo"
    }
  },
  {
    "id": "K0152",
    "k": "驚",
    "r": "おどろ（く）、きょう",
    "m": {
      "en": "surprise",
      "zh-TW": "驚",
      "zh-CN": "惊",
      "ko": "경",
      "vi": "kinh ngạc",
      "id": "terkejut",
      "es": "surprise",
      "pt": "surprise"
    }
  },
  {
    "id": "K0153",
    "k": "仰",
    "r": "あお（い）、ぎょう",
    "m": {
      "en": "look up",
      "zh-TW": "仰",
      "zh-CN": "仰",
      "ko": "앙",
      "vi": "ngước",
      "id": "mendongak",
      "es": "look up",
      "pt": "look up"
    }
  },
  {
    "id": "K0154",
    "k": "凝",
    "r": "こ（る）、ぎょう",
    "m": {
      "en": "freeze",
      "zh-TW": "凝",
      "zh-CN": "凝",
      "ko": "응",
      "vi": "đông",
      "id": "membeku",
      "es": "freeze",
      "pt": "freeze"
    }
  },
  {
    "id": "K0155",
    "k": "暁",
    "r": "あかつき、ぎょう",
    "m": {
      "en": "dawn",
      "zh-TW": "曉",
      "zh-CN": "晓",
      "ko": "효",
      "vi": "rạng đông",
      "id": "fajar",
      "es": "dawn",
      "pt": "dawn"
    }
  },
  {
    "id": "K0156",
    "k": "斤",
    "r": "きん",
    "m": {
      "en": "axe",
      "zh-TW": "斤",
      "zh-CN": "斤",
      "ko": "근",
      "vi": "cân",
      "id": "kapak",
      "es": "axe",
      "pt": "axe"
    }
  },
  {
    "id": "K0157",
    "k": "琴",
    "r": "こと、きん",
    "m": {
      "en": "koto",
      "zh-TW": "琴",
      "zh-CN": "琴",
      "ko": "금",
      "vi": "đàn",
      "id": "koto",
      "es": "koto",
      "pt": "koto"
    }
  },
  {
    "id": "K0158",
    "k": "筋",
    "r": "すじ、きん",
    "m": {
      "en": "muscle",
      "zh-TW": "筋",
      "zh-CN": "筋",
      "ko": "근",
      "vi": "gân",
      "id": "otot",
      "es": "muscle",
      "pt": "muscle"
    }
  },
  {
    "id": "K0159",
    "k": "菌",
    "r": "きん",
    "m": {
      "en": "bacteria",
      "zh-TW": "菌",
      "zh-CN": "菌",
      "ko": "균",
      "vi": "vi khuẩn",
      "id": "bakteri",
      "es": "bacteria",
      "pt": "bacteria"
    }
  },
  {
    "id": "K0160",
    "k": "襟",
    "r": "えり、きん",
    "m": {
      "en": "collar",
      "zh-TW": "領",
      "zh-CN": "领",
      "ko": "금",
      "vi": "cổ áo",
      "id": "kerah",
      "es": "collar",
      "pt": "collar"
    }
  },
  {
    "id": "K0161",
    "k": "謹",
    "r": "つつし（む）、きん",
    "m": {
      "en": "humble",
      "zh-TW": "謹",
      "zh-CN": "谨",
      "ko": "근",
      "vi": "kính cẩn",
      "id": "hormat",
      "es": "humble",
      "pt": "humble"
    }
  },
  {
    "id": "K0162",
    "k": "吟",
    "r": "ぎん",
    "m": {
      "en": "recite",
      "zh-TW": "吟",
      "zh-CN": "吟",
      "ko": "음",
      "vi": "ngâm",
      "id": "melantunkan",
      "es": "recite",
      "pt": "recite"
    }
  },
  {
    "id": "K0163",
    "k": "駆",
    "r": "か（く）、く",
    "m": {
      "en": "drive",
      "zh-TW": "驅",
      "zh-CN": "驱",
      "ko": "구",
      "vi": "lái",
      "id": "mengemudi",
      "es": "conducir",
      "pt": "dirigir"
    }
  },
  {
    "id": "K0164",
    "k": "愚",
    "r": "おろ（す）、ぐ",
    "m": {
      "en": "foolish",
      "zh-TW": "愚",
      "zh-CN": "愚",
      "ko": "우",
      "vi": "ngu",
      "id": "bodoh",
      "es": "foolish",
      "pt": "foolish"
    }
  },
  {
    "id": "K0165",
    "k": "虞",
    "r": "おそ（れる）、ぐ",
    "m": {
      "en": "fear",
      "zh-TW": "虞",
      "zh-CN": "虞",
      "ko": "우",
      "vi": "lo",
      "id": "khawatir",
      "es": "fear",
      "pt": "fear"
    }
  },
  {
    "id": "K0166",
    "k": "偶",
    "r": "ぐう",
    "m": {
      "en": "chance",
      "zh-TW": "偶",
      "zh-CN": "偶",
      "ko": "우",
      "vi": "ngẫu",
      "id": "kebetulan",
      "es": "oportunidad",
      "pt": "chance"
    }
  },
  {
    "id": "K0167",
    "k": "遇",
    "r": "あ（う）、ぐう",
    "m": {
      "en": "meet",
      "zh-TW": "遇",
      "zh-CN": "遇",
      "ko": "우",
      "vi": "gặp",
      "id": "bertemu",
      "es": "encontrar",
      "pt": "encontrar"
    }
  },
  {
    "id": "K0168",
    "k": "隅",
    "r": "すみ、ぐう",
    "m": {
      "en": "corner",
      "zh-TW": "角落",
      "zh-CN": "角落",
      "ko": "우",
      "vi": "góc",
      "id": "sudut",
      "es": "corner",
      "pt": "corner"
    }
  },
  {
    "id": "K0169",
    "k": "串",
    "r": "くし",
    "m": {
      "en": "skewer",
      "zh-TW": "串",
      "zh-CN": "串",
      "ko": "관",
      "vi": "xiên",
      "id": "tusuk",
      "es": "skewer",
      "pt": "skewer"
    }
  },
  {
    "id": "K0170",
    "k": "屈",
    "r": "かが、くつ",
    "m": {
      "en": "bend",
      "zh-TW": "屈",
      "zh-CN": "屈",
      "ko": "굴",
      "vi": "cúi",
      "id": "membungkuk",
      "es": "bend",
      "pt": "bend"
    }
  },
  {
    "id": "K0171",
    "k": "掘",
    "r": "ほ（る）、くつ",
    "m": {
      "en": "dig",
      "zh-TW": "挖",
      "zh-CN": "挖",
      "ko": "굴",
      "vi": "đào",
      "id": "menggali",
      "es": "dig",
      "pt": "dig"
    }
  },
  {
    "id": "K0172",
    "k": "窟",
    "r": "くつ",
    "m": {
      "en": "cave",
      "zh-TW": "窟",
      "zh-CN": "窟",
      "ko": "굴",
      "vi": "hang",
      "id": "gua",
      "es": "cave",
      "pt": "cave"
    }
  },
  {
    "id": "K0173",
    "k": "靴",
    "r": "くつ、か",
    "m": {
      "en": "shoes",
      "zh-TW": "鞋",
      "zh-CN": "鞋",
      "ko": "화",
      "vi": "giày",
      "id": "sepatu",
      "es": "shoes",
      "pt": "shoes"
    }
  },
  {
    "id": "K0174",
    "k": "繰",
    "r": "く（る）、そう",
    "m": {
      "en": "reel",
      "zh-TW": "繰",
      "zh-CN": "缲",
      "ko": "조",
      "vi": "kéo",
      "id": "menarik",
      "es": "reel",
      "pt": "reel"
    }
  },
  {
    "id": "K0175",
    "k": "桑",
    "r": "くわ、そう",
    "m": {
      "en": "mulberry",
      "zh-TW": "桑",
      "zh-CN": "桑",
      "ko": "상",
      "vi": "dâu",
      "id": "murbei",
      "es": "mulberry",
      "pt": "mulberry"
    }
  },
  {
    "id": "K0176",
    "k": "勲",
    "r": "くん",
    "m": {
      "en": "merit",
      "zh-TW": "勳",
      "zh-CN": "勋",
      "ko": "훈",
      "vi": "huân",
      "id": "jasa",
      "es": "merit",
      "pt": "merit"
    }
  },
  {
    "id": "K0177",
    "k": "薫",
    "r": "かお、くん",
    "m": {
      "en": "fragrance",
      "zh-TW": "薰",
      "zh-CN": "薰",
      "ko": "훈",
      "vi": "thơm",
      "id": "wangi",
      "es": "fragrance",
      "pt": "fragrance"
    }
  },
  {
    "id": "K0178",
    "k": "傾",
    "r": "かたむ（く）、けい",
    "m": {
      "en": "lean",
      "zh-TW": "傾",
      "zh-CN": "倾",
      "ko": "경",
      "vi": "nghiêng",
      "id": "miring",
      "es": "lean",
      "pt": "lean"
    }
  },
  {
    "id": "K0179",
    "k": "刑",
    "r": "けい",
    "m": {
      "en": "punishment",
      "zh-TW": "刑",
      "zh-CN": "刑",
      "ko": "형",
      "vi": "hình phạt",
      "id": "hukuman",
      "es": "punishment",
      "pt": "punishment"
    }
  },
  {
    "id": "K0180",
    "k": "啓",
    "r": "けい",
    "m": {
      "en": "enlighten",
      "zh-TW": "啓",
      "zh-CN": "启",
      "ko": "계",
      "vi": "khai sáng",
      "id": "mencerahkan",
      "es": "enlighten",
      "pt": "enlighten"
    }
  },
  {
    "id": "K0181",
    "k": "契",
    "r": "ちぎ、けい",
    "m": {
      "en": "pledge",
      "zh-TW": "契",
      "zh-CN": "契",
      "ko": "계",
      "vi": "khế",
      "id": "kontrak",
      "es": "pledge",
      "pt": "pledge"
    }
  },
  {
    "id": "K0182",
    "k": "恵",
    "r": "めぐ（む）、けい",
    "m": {
      "en": "blessing",
      "zh-TW": "惠",
      "zh-CN": "惠",
      "ko": "혜",
      "vi": "ân",
      "id": "berkah",
      "es": "blessing",
      "pt": "blessing"
    }
  },
  {
    "id": "K0183",
    "k": "慶",
    "r": "けい",
    "m": {
      "en": "celebrate",
      "zh-TW": "慶",
      "zh-CN": "庆",
      "ko": "경",
      "vi": "mừng",
      "id": "merayakan",
      "es": "celebrate",
      "pt": "celebrate"
    }
  },
  {
    "id": "K0184",
    "k": "憩",
    "r": "いこ（う）、けい",
    "m": {
      "en": "rest",
      "zh-TW": "憩",
      "zh-CN": "憩",
      "ko": "게",
      "vi": "nghỉ",
      "id": "istirahat",
      "es": "rest",
      "pt": "rest"
    }
  },
  {
    "id": "K0185",
    "k": "掲",
    "r": "かか（る）、けい",
    "m": {
      "en": "display",
      "zh-TW": "揭",
      "zh-CN": "揭",
      "ko": "게",
      "vi": "treo",
      "id": "memajang",
      "es": "display",
      "pt": "display"
    }
  },
  {
    "id": "K0186",
    "k": "携",
    "r": "たずさ、けい",
    "m": {
      "en": "carry",
      "zh-TW": "攜",
      "zh-CN": "携",
      "ko": "휴",
      "vi": "mang",
      "id": "membawa",
      "es": "carry",
      "pt": "carry"
    }
  },
  {
    "id": "K0187",
    "k": "渓",
    "r": "けい",
    "m": {
      "en": "valley",
      "zh-TW": "溪",
      "zh-CN": "溪",
      "ko": "계",
      "vi": "khe",
      "id": "lembah",
      "es": "valley",
      "pt": "valley"
    }
  },
  {
    "id": "K0188",
    "k": "継",
    "r": "つける、けい",
    "m": {
      "en": "inherit",
      "zh-TW": "繼",
      "zh-CN": "继",
      "ko": "계",
      "vi": "kế",
      "id": "mewarisi",
      "es": "inherit",
      "pt": "inherit"
    }
  },
  {
    "id": "K0189",
    "k": "茎",
    "r": "くき、けい",
    "m": {
      "en": "stem",
      "zh-TW": "莖",
      "zh-CN": "茎",
      "ko": "경",
      "vi": "thân",
      "id": "batang",
      "es": "stem",
      "pt": "stem"
    }
  },
  {
    "id": "K0190",
    "k": "蛍",
    "r": "ほたる、けい",
    "m": {
      "en": "firefly",
      "zh-TW": "螢",
      "zh-CN": "萤",
      "ko": "형",
      "vi": "đom đóm",
      "id": "kunang",
      "es": "firefly",
      "pt": "firefly"
    }
  },
  {
    "id": "K0191",
    "k": "鶏",
    "r": "にわとり、けい",
    "m": {
      "en": "chicken",
      "zh-TW": "雞",
      "zh-CN": "鸡",
      "ko": "계",
      "vi": "gà",
      "id": "ayam",
      "es": "chicken",
      "pt": "chicken"
    }
  },
  {
    "id": "K0192",
    "k": "迎",
    "r": "むか（える）、げい",
    "m": {
      "en": "welcome",
      "zh-TW": "迎",
      "zh-CN": "迎",
      "ko": "영",
      "vi": "đón",
      "id": "menyambut",
      "es": "welcome",
      "pt": "welcome"
    }
  },
  {
    "id": "K0193",
    "k": "鯨",
    "r": "くじら、げい",
    "m": {
      "en": "whale",
      "zh-TW": "鯨",
      "zh-CN": "鲸",
      "ko": "경",
      "vi": "cá voi",
      "id": "paus",
      "es": "whale",
      "pt": "whale"
    }
  },
  {
    "id": "K0194",
    "k": "撃",
    "r": "う（まれる）、げき",
    "m": {
      "en": "attack",
      "zh-TW": "擊",
      "zh-CN": "击",
      "ko": "격",
      "vi": "đánh",
      "id": "menyerang",
      "es": "atacar",
      "pt": "atacar"
    }
  },
  {
    "id": "K0195",
    "k": "傑",
    "r": "けつ",
    "m": {
      "en": "excel",
      "zh-TW": "傑",
      "zh-CN": "杰",
      "ko": "걸",
      "vi": "kiệt",
      "id": "luar biasa",
      "es": "excel",
      "pt": "excel"
    }
  },
  {
    "id": "K0196",
    "k": "欠",
    "r": "か（く）、けつ",
    "m": {
      "en": "lack",
      "zh-TW": "缺",
      "zh-CN": "缺",
      "ko": "결",
      "vi": "thiếu",
      "id": "kurang",
      "es": "lack",
      "pt": "lack"
    }
  },
  {
    "id": "K0197",
    "k": "穴",
    "r": "あな、けつ",
    "m": {
      "en": "hole",
      "zh-TW": "洞",
      "zh-CN": "洞",
      "ko": "혈",
      "vi": "lỗ",
      "id": "lubang",
      "es": "hole",
      "pt": "hole"
    }
  },
  {
    "id": "K0198",
    "k": "血",
    "r": "ち（る）、けつ",
    "m": {
      "en": "blood",
      "zh-TW": "血",
      "zh-CN": "血",
      "ko": "혈",
      "vi": "máu",
      "id": "darah",
      "es": "blood",
      "pt": "blood"
    }
  },
  {
    "id": "K0199",
    "k": "潔",
    "r": "いさぎよ、けつ",
    "m": {
      "en": "pure",
      "zh-TW": "潔",
      "zh-CN": "洁",
      "ko": "결",
      "vi": "trong sạch",
      "id": "murni",
      "es": "pure",
      "pt": "pure"
    }
  },
  {
    "id": "K0200",
    "k": "結",
    "r": "むす（ぶ）、けつ",
    "m": {
      "en": "tie",
      "zh-TW": "結",
      "zh-CN": "结",
      "ko": "결",
      "vi": "kết",
      "id": "mengikat",
      "es": "atar",
      "pt": "amarrar"
    }
  },
  {
    "id": "K0201",
    "k": "倹",
    "r": "けん",
    "m": {
      "en": "frugal",
      "zh-TW": "儉",
      "zh-CN": "俭",
      "ko": "검",
      "vi": "tiết kiệm",
      "id": "hemat",
      "es": "frugal",
      "pt": "frugal"
    }
  },
  {
    "id": "K0202",
    "k": "兼",
    "r": "か（く）、けん",
    "m": {
      "en": "combine",
      "zh-TW": "兼",
      "zh-CN": "兼",
      "ko": "겸",
      "vi": "kiêm",
      "id": "merangkap",
      "es": "combinar",
      "pt": "combinar"
    }
  },
  {
    "id": "K0203",
    "k": "剣",
    "r": "つるぎ、けん",
    "m": {
      "en": "sword",
      "zh-TW": "劍",
      "zh-CN": "剑",
      "ko": "검",
      "vi": "kiếm",
      "id": "pedang",
      "es": "sword",
      "pt": "sword"
    }
  },
  {
    "id": "K0204",
    "k": "圏",
    "r": "けん",
    "m": {
      "en": "sphere",
      "zh-TW": "圈",
      "zh-CN": "圈",
      "ko": "권",
      "vi": "vòng",
      "id": "lingkaran",
      "es": "sphere",
      "pt": "sphere"
    }
  },
  {
    "id": "K0205",
    "k": "堅",
    "r": "かた（い）、けん",
    "m": {
      "en": "hard",
      "zh-TW": "堅",
      "zh-CN": "坚",
      "ko": "견",
      "vi": "cứng",
      "id": "keras",
      "es": "duro",
      "pt": "duro"
    }
  },
  {
    "id": "K0206",
    "k": "嫌",
    "r": "きら（い）、けん",
    "m": {
      "en": "dislike",
      "zh-TW": "嫌",
      "zh-CN": "嫌",
      "ko": "혐",
      "vi": "ghét",
      "id": "benci",
      "es": "dislike",
      "pt": "dislike"
    }
  },
  {
    "id": "K0207",
    "k": "建",
    "r": "たべる、けん",
    "m": {
      "en": "build",
      "zh-TW": "建",
      "zh-CN": "建",
      "ko": "건",
      "vi": "xây",
      "id": "membangun",
      "es": "construir",
      "pt": "construir"
    }
  },
  {
    "id": "K0208",
    "k": "憲",
    "r": "けん",
    "m": {
      "en": "constitution",
      "zh-TW": "憲",
      "zh-CN": "宪",
      "ko": "헌",
      "vi": "hiến pháp",
      "id": "konstitusi",
      "es": "constitution",
      "pt": "constitution"
    }
  },
  {
    "id": "K0209",
    "k": "懸",
    "r": "か（く）、けん",
    "m": {
      "en": "hang",
      "zh-TW": "懸",
      "zh-CN": "悬",
      "ko": "현",
      "vi": "treo",
      "id": "menggantung",
      "es": "colgar",
      "pt": "pendurar"
    }
  },
  {
    "id": "K0210",
    "k": "拳",
    "r": "こぶし、けん",
    "m": {
      "en": "fist",
      "zh-TW": "拳",
      "zh-CN": "拳",
      "ko": "권",
      "vi": "nắm đấm",
      "id": "tinju",
      "es": "fist",
      "pt": "fist"
    }
  },
  {
    "id": "K0211",
    "k": "検",
    "r": "けん",
    "m": {
      "en": "examine",
      "zh-TW": "檢",
      "zh-CN": "检",
      "ko": "검",
      "vi": "kiểm",
      "id": "memeriksa",
      "es": "examine",
      "pt": "examine"
    }
  },
  {
    "id": "K0212",
    "k": "献",
    "r": "けん",
    "m": {
      "en": "offer",
      "zh-TW": "獻",
      "zh-CN": "献",
      "ko": "헌",
      "vi": "dâng",
      "id": "mempersembahkan",
      "es": "offer",
      "pt": "offer"
    }
  },
  {
    "id": "K0213",
    "k": "犬",
    "r": "いぬ、けん",
    "m": {
      "en": "dog",
      "zh-TW": "狗",
      "zh-CN": "狗",
      "ko": "견",
      "vi": "chó",
      "id": "anjing",
      "es": "dog",
      "pt": "dog"
    }
  },
  {
    "id": "K0214",
    "k": "硯",
    "r": "すずり、けん",
    "m": {
      "en": "inkstone",
      "zh-TW": "硯",
      "zh-CN": "砚",
      "ko": "연",
      "vi": "nghiên",
      "id": "batu tinta",
      "es": "inkstone",
      "pt": "inkstone"
    }
  },
  {
    "id": "K0215",
    "k": "絹",
    "r": "きぬ、けん",
    "m": {
      "en": "silk",
      "zh-TW": "絹",
      "zh-CN": "绢",
      "ko": "견",
      "vi": "lụa",
      "id": "sutra",
      "es": "silk",
      "pt": "silk"
    }
  },
  {
    "id": "K0216",
    "k": "繭",
    "r": "まゆ、けん",
    "m": {
      "en": "cocoon",
      "zh-TW": "繭",
      "zh-CN": "茧",
      "ko": "견",
      "vi": "kén",
      "id": "kepompong",
      "es": "cocoon",
      "pt": "cocoon"
    }
  },
  {
    "id": "K0217",
    "k": "肩",
    "r": "かた（い）、けん",
    "m": {
      "en": "shoulder",
      "zh-TW": "肩",
      "zh-CN": "肩",
      "ko": "견",
      "vi": "vai",
      "id": "bahu",
      "es": "shoulder",
      "pt": "shoulder"
    }
  },
  {
    "id": "K0218",
    "k": "謙",
    "r": "けん",
    "m": {
      "en": "humble",
      "zh-TW": "謙",
      "zh-CN": "谦",
      "ko": "겸",
      "vi": "khiêm",
      "id": "rendah hati",
      "es": "humble",
      "pt": "humble"
    }
  },
  {
    "id": "K0219",
    "k": "賢",
    "r": "かしこ、けん",
    "m": {
      "en": "wise",
      "zh-TW": "賢",
      "zh-CN": "贤",
      "ko": "현",
      "vi": "khôn",
      "id": "bijak",
      "es": "wise",
      "pt": "wise"
    }
  },
  {
    "id": "K0220",
    "k": "軒",
    "r": "のき、けん",
    "m": {
      "en": "eaves",
      "zh-TW": "軒",
      "zh-CN": "轩",
      "ko": "헌",
      "vi": "hiên",
      "id": "atap",
      "es": "eaves",
      "pt": "eaves"
    }
  },
  {
    "id": "K0221",
    "k": "遣",
    "r": "つか（う）、けん",
    "m": {
      "en": "send",
      "zh-TW": "遣",
      "zh-CN": "遣",
      "ko": "견",
      "vi": "phái",
      "id": "mengirim",
      "es": "enviar",
      "pt": "enviar"
    }
  },
  {
    "id": "K0222",
    "k": "鍵",
    "r": "かぎ（る）、けん",
    "m": {
      "en": "key",
      "zh-TW": "鍵",
      "zh-CN": "键",
      "ko": "건",
      "vi": "chìa khóa",
      "id": "kunci",
      "es": "llave",
      "pt": "chave"
    }
  },
  {
    "id": "K0223",
    "k": "険",
    "r": "けわ、けん",
    "m": {
      "en": "steep",
      "zh-TW": "險",
      "zh-CN": "险",
      "ko": "험",
      "vi": "hiểm",
      "id": "curam",
      "es": "steep",
      "pt": "steep"
    }
  },
  {
    "id": "K0224",
    "k": "顕",
    "r": "けん",
    "m": {
      "en": "manifest",
      "zh-TW": "顯",
      "zh-CN": "显",
      "ko": "현",
      "vi": "hiện",
      "id": "nyata",
      "es": "manifest",
      "pt": "manifest"
    }
  },
  {
    "id": "K0225",
    "k": "原",
    "r": "はら（う）、げん",
    "m": {
      "en": "field",
      "zh-TW": "原",
      "zh-CN": "原",
      "ko": "원",
      "vi": "nguyên",
      "id": "lapangan",
      "es": "field",
      "pt": "field"
    }
  },
  {
    "id": "K0226",
    "k": "厳",
    "r": "きび、げん",
    "m": {
      "en": "strict",
      "zh-TW": "嚴",
      "zh-CN": "严",
      "ko": "엄",
      "vi": "nghiêm",
      "id": "ketat",
      "es": "strict",
      "pt": "strict"
    }
  },
  {
    "id": "K0227",
    "k": "幻",
    "r": "まぼろし、げん",
    "m": {
      "en": "illusion",
      "zh-TW": "幻",
      "zh-CN": "幻",
      "ko": "환",
      "vi": "ảo",
      "id": "ilusi",
      "es": "illusion",
      "pt": "illusion"
    }
  },
  {
    "id": "K0228",
    "k": "弦",
    "r": "つる、げん",
    "m": {
      "en": "string",
      "zh-TW": "弦",
      "zh-CN": "弦",
      "ko": "현",
      "vi": "dây",
      "id": "senar",
      "es": "string",
      "pt": "string"
    }
  },
  {
    "id": "K0229",
    "k": "減",
    "r": "へ（る）、げん",
    "m": {
      "en": "decrease",
      "zh-TW": "減",
      "zh-CN": "减",
      "ko": "감",
      "vi": "giảm",
      "id": "berkurang",
      "es": "disminuir",
      "pt": "diminuir"
    }
  },
  {
    "id": "K0230",
    "k": "源",
    "r": "みなもと、げん",
    "m": {
      "en": "source",
      "zh-TW": "源",
      "zh-CN": "源",
      "ko": "원",
      "vi": "nguồn",
      "id": "sumber",
      "es": "source",
      "pt": "source"
    }
  },
  {
    "id": "K0231",
    "k": "玄",
    "r": "げん",
    "m": {
      "en": "dark",
      "zh-TW": "玄",
      "zh-CN": "玄",
      "ko": "현",
      "vi": "huyền",
      "id": "gelap",
      "es": "oscuro",
      "pt": "escuro"
    }
  },
  {
    "id": "K0232",
    "k": "現",
    "r": "あらわ（れる）、げん",
    "m": {
      "en": "appear",
      "zh-TW": "現",
      "zh-CN": "现",
      "ko": "현",
      "vi": "hiện",
      "id": "muncul",
      "es": "appear",
      "pt": "appear"
    }
  },
  {
    "id": "K0233",
    "k": "限",
    "r": "かぎ（る）、げん",
    "m": {
      "en": "limit",
      "zh-TW": "限",
      "zh-CN": "限",
      "ko": "한",
      "vi": "hạn",
      "id": "batas",
      "es": "limit",
      "pt": "limit"
    }
  },
  {
    "id": "K0234",
    "k": "個",
    "r": "こ",
    "m": {
      "en": "individual",
      "zh-TW": "個",
      "zh-CN": "个",
      "ko": "개",
      "vi": "cái",
      "id": "buah",
      "es": "individual",
      "pt": "individual"
    }
  },
  {
    "id": "K0235",
    "k": "孤",
    "r": "こ",
    "m": {
      "en": "alone",
      "zh-TW": "孤",
      "zh-CN": "孤",
      "ko": "고",
      "vi": "cô",
      "id": "sendirian",
      "es": "alone",
      "pt": "alone"
    }
  },
  {
    "id": "K0236",
    "k": "己",
    "r": "おのれ、こ",
    "m": {
      "en": "self",
      "zh-TW": "己",
      "zh-CN": "己",
      "ko": "기",
      "vi": "kỷ",
      "id": "diri",
      "es": "uno mismo",
      "pt": "si mesmo"
    }
  },
  {
    "id": "K0237",
    "k": "弧",
    "r": "こ",
    "m": {
      "en": "arc",
      "zh-TW": "弧",
      "zh-CN": "弧",
      "ko": "호",
      "vi": "cung",
      "id": "busur",
      "es": "arc",
      "pt": "arc"
    }
  },
  {
    "id": "K0238",
    "k": "故",
    "r": "ゆえ、こ",
    "m": {
      "en": "reason",
      "zh-TW": "故",
      "zh-CN": "故",
      "ko": "고",
      "vi": "cố",
      "id": "alasan",
      "es": "razón",
      "pt": "razão"
    }
  },
  {
    "id": "K0239",
    "k": "枯",
    "r": "か（く）、こ",
    "m": {
      "en": "wither",
      "zh-TW": "枯",
      "zh-CN": "枯",
      "ko": "고",
      "vi": "khô",
      "id": "layu",
      "es": "wither",
      "pt": "wither"
    }
  },
  {
    "id": "K0240",
    "k": "湖",
    "r": "みずうみ、こ",
    "m": {
      "en": "lake",
      "zh-TW": "湖",
      "zh-CN": "湖",
      "ko": "호",
      "vi": "hồ",
      "id": "danau",
      "es": "lake",
      "pt": "lake"
    }
  },
  {
    "id": "K0241",
    "k": "股",
    "r": "また、こ",
    "m": {
      "en": "thigh",
      "zh-TW": "股",
      "zh-CN": "股",
      "ko": "고",
      "vi": "đùi",
      "id": "paha",
      "es": "thigh",
      "pt": "thigh"
    }
  },
  {
    "id": "K0242",
    "k": "虎",
    "r": "とら、こ",
    "m": {
      "en": "tiger",
      "zh-TW": "虎",
      "zh-CN": "虎",
      "ko": "호",
      "vi": "hổ",
      "id": "harimau",
      "es": "tiger",
      "pt": "tiger"
    }
  },
  {
    "id": "K0243",
    "k": "誇",
    "r": "ほこ（る）、こ",
    "m": {
      "en": "boast",
      "zh-TW": "誇",
      "zh-CN": "夸",
      "ko": "과",
      "vi": "tự hào",
      "id": "bangga",
      "es": "boast",
      "pt": "boast"
    }
  },
  {
    "id": "K0244",
    "k": "雇",
    "r": "やと、こ",
    "m": {
      "en": "employ",
      "zh-TW": "雇",
      "zh-CN": "雇",
      "ko": "고",
      "vi": "thuê",
      "id": "mempekerjakan",
      "es": "employ",
      "pt": "employ"
    }
  },
  {
    "id": "K0245",
    "k": "顧",
    "r": "かえり（みる）、こ",
    "m": {
      "en": "look back",
      "zh-TW": "顧",
      "zh-CN": "顾",
      "ko": "고",
      "vi": "ngoái",
      "id": "menoleh",
      "es": "look back",
      "pt": "look back"
    }
  },
  {
    "id": "K0246",
    "k": "鼓",
    "r": "つづみ、こ",
    "m": {
      "en": "drum",
      "zh-TW": "鼓",
      "zh-CN": "鼓",
      "ko": "고",
      "vi": "trống",
      "id": "gendang",
      "es": "drum",
      "pt": "drum"
    }
  },
  {
    "id": "K0247",
    "k": "互",
    "r": "たが（う）、ご",
    "m": {
      "en": "mutual",
      "zh-TW": "互",
      "zh-CN": "互",
      "ko": "호",
      "vi": "hỗ",
      "id": "saling",
      "es": "mutual",
      "pt": "mutual"
    }
  },
  {
    "id": "K0248",
    "k": "呉",
    "r": "ご",
    "m": {
      "en": "give",
      "zh-TW": "吳",
      "zh-CN": "吴",
      "ko": "오",
      "vi": "Ngô",
      "id": "memberi",
      "es": "dar",
      "pt": "dar"
    }
  },
  {
    "id": "K0249",
    "k": "娯",
    "r": "ご",
    "m": {
      "en": "recreation",
      "zh-TW": "娛",
      "zh-CN": "娱",
      "ko": "오",
      "vi": "vui",
      "id": "hiburan",
      "es": "recreation",
      "pt": "recreation"
    }
  },
  {
    "id": "K0250",
    "k": "御",
    "r": "おん、ご",
    "m": {
      "en": "honorable",
      "zh-TW": "御",
      "zh-CN": "御",
      "ko": "어",
      "vi": "ngự",
      "id": "terhormat",
      "es": "honorable",
      "pt": "honorable"
    }
  },
  {
    "id": "K0251",
    "k": "悟",
    "r": "さと（る）、ご",
    "m": {
      "en": "enlighten",
      "zh-TW": "悟",
      "zh-CN": "悟",
      "ko": "오",
      "vi": "ngộ",
      "id": "menyadari",
      "es": "enlighten",
      "pt": "enlighten"
    }
  },
  {
    "id": "K0252",
    "k": "碁",
    "r": "ご",
    "m": {
      "en": "go",
      "zh-TW": "碁",
      "zh-CN": "棋",
      "ko": "기",
      "vi": "cờ",
      "id": "go",
      "es": "ir",
      "pt": "ir"
    }
  },
  {
    "id": "K0253",
    "k": "誤",
    "r": "あやま、ご",
    "m": {
      "en": "mistake",
      "zh-TW": "誤",
      "zh-CN": "误",
      "ko": "오",
      "vi": "lầm",
      "id": "salah",
      "es": "error",
      "pt": "erro"
    }
  },
  {
    "id": "K0254",
    "k": "護",
    "r": "まも（る）、ご",
    "m": {
      "en": "protect",
      "zh-TW": "護",
      "zh-CN": "护",
      "ko": "호",
      "vi": "hộ",
      "id": "melindungi",
      "es": "proteger",
      "pt": "proteger"
    }
  },
  {
    "id": "K0255",
    "k": "侯",
    "r": "こう",
    "m": {
      "en": "marquis",
      "zh-TW": "侯",
      "zh-CN": "侯",
      "ko": "후",
      "vi": "hầu",
      "id": "marquis",
      "es": "marquis",
      "pt": "marquis"
    }
  },
  {
    "id": "K0256",
    "k": "厚",
    "r": "あつ（い）、こう",
    "m": {
      "en": "thick",
      "zh-TW": "厚",
      "zh-CN": "厚",
      "ko": "후",
      "vi": "dày",
      "id": "tebal",
      "es": "grueso",
      "pt": "grosso"
    }
  },
  {
    "id": "K0257",
    "k": "向",
    "r": "む（かう）、こう",
    "m": {
      "en": "face",
      "zh-TW": "向",
      "zh-CN": "向",
      "ko": "향",
      "vi": "hướng",
      "id": "menghadap",
      "es": "cara",
      "pt": "rosto"
    }
  },
  {
    "id": "K0258",
    "k": "后",
    "r": "きさき、こう",
    "m": {
      "en": "empress",
      "zh-TW": "后",
      "zh-CN": "后",
      "ko": "후",
      "vi": "hoàng hậu",
      "id": "permaisuri",
      "es": "empress",
      "pt": "empress"
    }
  },
  {
    "id": "K0259",
    "k": "坑",
    "r": "こう",
    "m": {
      "en": "pit",
      "zh-TW": "坑",
      "zh-CN": "坑",
      "ko": "갱",
      "vi": "hố",
      "id": "lubang",
      "es": "pit",
      "pt": "pit"
    }
  },
  {
    "id": "K0260",
    "k": "好",
    "r": "この（む）、こう",
    "m": {
      "en": "like",
      "zh-TW": "好",
      "zh-CN": "好",
      "ko": "호",
      "vi": "thích",
      "id": "suka",
      "es": "gustar",
      "pt": "gostar"
    }
  },
  {
    "id": "K0261",
    "k": "孔",
    "r": "あな、こう",
    "m": {
      "en": "hole",
      "zh-TW": "孔",
      "zh-CN": "孔",
      "ko": "공",
      "vi": "lỗ",
      "id": "lubang",
      "es": "hole",
      "pt": "hole"
    }
  },
  {
    "id": "K0262",
    "k": "孝",
    "r": "こう",
    "m": {
      "en": "filial",
      "zh-TW": "孝",
      "zh-CN": "孝",
      "ko": "효",
      "vi": "hiếu",
      "id": "berbakti",
      "es": "filial",
      "pt": "filial"
    }
  },
  {
    "id": "K0263",
    "k": "巧",
    "r": "たく（み）、こう",
    "m": {
      "en": "skill",
      "zh-TW": "巧",
      "zh-CN": "巧",
      "ko": "교",
      "vi": "khéo",
      "id": "terampil",
      "es": "skill",
      "pt": "skill"
    }
  },
  {
    "id": "K0264",
    "k": "幸",
    "r": "さいわ、こう",
    "m": {
      "en": "happiness",
      "zh-TW": "幸",
      "zh-CN": "幸",
      "ko": "행",
      "vi": "hạnh phúc",
      "id": "kebahagiaan",
      "es": "happiness",
      "pt": "happiness"
    }
  },
  {
    "id": "K0265",
    "k": "康",
    "r": "こう",
    "m": {
      "en": "health",
      "zh-TW": "康",
      "zh-CN": "康",
      "ko": "강",
      "vi": "khỏe",
      "id": "sehat",
      "es": "salud",
      "pt": "saúde"
    }
  },
  {
    "id": "K0266",
    "k": "恒",
    "r": "こう",
    "m": {
      "en": "constant",
      "zh-TW": "恆",
      "zh-CN": "恒",
      "ko": "항",
      "vi": "hằng",
      "id": "tetap",
      "es": "constant",
      "pt": "constant"
    }
  },
  {
    "id": "K0267",
    "k": "慌",
    "r": "あわ（てる）、こう",
    "m": {
      "en": "panic",
      "zh-TW": "慌",
      "zh-CN": "慌",
      "ko": "황",
      "vi": "hoảng",
      "id": "panik",
      "es": "panic",
      "pt": "panic"
    }
  },
  {
    "id": "K0268",
    "k": "抗",
    "r": "こう",
    "m": {
      "en": "resist",
      "zh-TW": "抗",
      "zh-CN": "抗",
      "ko": "항",
      "vi": "kháng",
      "id": "melawan",
      "es": "resist",
      "pt": "resist"
    }
  },
  {
    "id": "K0269",
    "k": "拘",
    "r": "こう",
    "m": {
      "en": "arrest",
      "zh-TW": "拘",
      "zh-CN": "拘",
      "ko": "구",
      "vi": "bắt",
      "id": "menangkap",
      "es": "arrest",
      "pt": "arrest"
    }
  },
  {
    "id": "K0270",
    "k": "控",
    "r": "ひか（える）、こう",
    "m": {
      "en": "refrain",
      "zh-TW": "控",
      "zh-CN": "控",
      "ko": "공",
      "vi": "kiềm",
      "id": "menahan",
      "es": "refrain",
      "pt": "refrain"
    }
  },
  {
    "id": "K0271",
    "k": "攻",
    "r": "せま（い）、こう",
    "m": {
      "en": "attack",
      "zh-TW": "攻",
      "zh-CN": "攻",
      "ko": "공",
      "vi": "công",
      "id": "menyerang",
      "es": "atacar",
      "pt": "atacar"
    }
  },
  {
    "id": "K0272",
    "k": "更",
    "r": "さら、こう",
    "m": {
      "en": "renew",
      "zh-TW": "更",
      "zh-CN": "更",
      "ko": "경",
      "vi": "đổi",
      "id": "memperbarui",
      "es": "renew",
      "pt": "renew"
    }
  },
  {
    "id": "K0273",
    "k": "構",
    "r": "かま、こう",
    "m": {
      "en": "construct",
      "zh-TW": "構",
      "zh-CN": "构",
      "ko": "구",
      "vi": "cấu",
      "id": "membangun",
      "es": "construct",
      "pt": "construct"
    }
  },
  {
    "id": "K0274",
    "k": "江",
    "r": "えら（い）、こう",
    "m": {
      "en": "inlet",
      "zh-TW": "江",
      "zh-CN": "江",
      "ko": "강",
      "vi": "sông",
      "id": "muara",
      "es": "inlet",
      "pt": "inlet"
    }
  },
  {
    "id": "K0275",
    "k": "洪",
    "r": "こう",
    "m": {
      "en": "flood",
      "zh-TW": "洪",
      "zh-CN": "洪",
      "ko": "홍",
      "vi": "hồng",
      "id": "banjir",
      "es": "flood",
      "pt": "flood"
    }
  },
  {
    "id": "K0276",
    "k": "溝",
    "r": "みぞ、こう",
    "m": {
      "en": "ditch",
      "zh-TW": "溝",
      "zh-CN": "沟",
      "ko": "구",
      "vi": "rãnh",
      "id": "parit",
      "es": "ditch",
      "pt": "ditch"
    }
  },
  {
    "id": "K0277",
    "k": "甲",
    "r": "こう",
    "m": {
      "en": "shell",
      "zh-TW": "甲",
      "zh-CN": "甲",
      "ko": "갑",
      "vi": "giáp",
      "id": "cangkang",
      "es": "shell",
      "pt": "shell"
    }
  },
  {
    "id": "K0278",
    "k": "皇",
    "r": "こう",
    "m": {
      "en": "emperor",
      "zh-TW": "皇",
      "zh-CN": "皇",
      "ko": "황",
      "vi": "hoàng",
      "id": "kaisar",
      "es": "emperor",
      "pt": "emperor"
    }
  },
  {
    "id": "K0279",
    "k": "稿",
    "r": "こう",
    "m": {
      "en": "draft",
      "zh-TW": "稿",
      "zh-CN": "稿",
      "ko": "고",
      "vi": "bản thảo",
      "id": "naskah",
      "es": "draft",
      "pt": "draft"
    }
  },
  {
    "id": "K0280",
    "k": "紅",
    "r": "べに、こう",
    "m": {
      "en": "red",
      "zh-TW": "紅",
      "zh-CN": "红",
      "ko": "홍",
      "vi": "đỏ",
      "id": "merah",
      "es": "rojo",
      "pt": "vermelho"
    }
  },
  {
    "id": "K0281",
    "k": "絞",
    "r": "しぼ（る）、こう",
    "m": {
      "en": "squeeze",
      "zh-TW": "絞",
      "zh-CN": "绞",
      "ko": "교",
      "vi": "vắt",
      "id": "memeras",
      "es": "squeeze",
      "pt": "squeeze"
    }
  },
  {
    "id": "K0282",
    "k": "綱",
    "r": "つな（ぐ）、こう",
    "m": {
      "en": "rope",
      "zh-TW": "綱",
      "zh-CN": "纲",
      "ko": "강",
      "vi": "dây",
      "id": "tali",
      "es": "rope",
      "pt": "rope"
    }
  },
  {
    "id": "K0283",
    "k": "耕",
    "r": "たがや（す）、こう",
    "m": {
      "en": "plow",
      "zh-TW": "耕",
      "zh-CN": "耕",
      "ko": "경",
      "vi": "cày",
      "id": "membajak",
      "es": "plow",
      "pt": "plow"
    }
  },
  {
    "id": "K0284",
    "k": "肯",
    "r": "こう",
    "m": {
      "en": "agree",
      "zh-TW": "肯",
      "zh-CN": "肯",
      "ko": "긍",
      "vi": "chịu",
      "id": "setuju",
      "es": "estar de acuerdo",
      "pt": "concordar"
    }
  },
  {
    "id": "K0285",
    "k": "航",
    "r": "こう",
    "m": {
      "en": "navigate",
      "zh-TW": "航",
      "zh-CN": "航",
      "ko": "항",
      "vi": "hàng",
      "id": "berlayar",
      "es": "navigate",
      "pt": "navigate"
    }
  },
  {
    "id": "K0286",
    "k": "荒",
    "r": "あら（い）、こう",
    "m": {
      "en": "rough",
      "zh-TW": "荒",
      "zh-CN": "荒",
      "ko": "황",
      "vi": "hoang",
      "id": "kasar",
      "es": "rough",
      "pt": "rough"
    }
  },
  {
    "id": "K0287",
    "k": "衡",
    "r": "こう",
    "m": {
      "en": "balance",
      "zh-TW": "衡",
      "zh-CN": "衡",
      "ko": "형",
      "vi": "cân bằng",
      "id": "keseimbangan",
      "es": "balance",
      "pt": "balance"
    }
  },
  {
    "id": "K0288",
    "k": "講",
    "r": "こう",
    "m": {
      "en": "lecture",
      "zh-TW": "講",
      "zh-CN": "讲",
      "ko": "강",
      "vi": "giảng",
      "id": "kuliah",
      "es": "lecture",
      "pt": "lecture"
    }
  },
  {
    "id": "K0289",
    "k": "貢",
    "r": "みつ、こう",
    "m": {
      "en": "tribute",
      "zh-TW": "貢",
      "zh-CN": "贡",
      "ko": "공",
      "vi": "cống",
      "id": "upeti",
      "es": "tribute",
      "pt": "tribute"
    }
  },
  {
    "id": "K0290",
    "k": "購",
    "r": "こう",
    "m": {
      "en": "buy",
      "zh-TW": "購",
      "zh-CN": "购",
      "ko": "구",
      "vi": "mua",
      "id": "membeli",
      "es": "comprar",
      "pt": "comprar"
    }
  },
  {
    "id": "K0291",
    "k": "郊",
    "r": "こう",
    "m": {
      "en": "suburb",
      "zh-TW": "郊",
      "zh-CN": "郊",
      "ko": "교",
      "vi": "ngoại ô",
      "id": "pinggiran",
      "es": "suburb",
      "pt": "suburb"
    }
  },
  {
    "id": "K0292",
    "k": "酵",
    "r": "こう",
    "m": {
      "en": "ferment",
      "zh-TW": "酵",
      "zh-CN": "酵",
      "ko": "효",
      "vi": "lên men",
      "id": "ragi",
      "es": "ferment",
      "pt": "ferment"
    }
  },
  {
    "id": "K0293",
    "k": "鉱",
    "r": "こう",
    "m": {
      "en": "ore",
      "zh-TW": "礦",
      "zh-CN": "矿",
      "ko": "광",
      "vi": "quặng",
      "id": "bijih",
      "es": "ore",
      "pt": "ore"
    }
  },
  {
    "id": "K0294",
    "k": "鋼",
    "r": "はがね、こう",
    "m": {
      "en": "steel",
      "zh-TW": "鋼",
      "zh-CN": "钢",
      "ko": "강",
      "vi": "thép",
      "id": "baja",
      "es": "steel",
      "pt": "steel"
    }
  },
  {
    "id": "K0295",
    "k": "項",
    "r": "こう",
    "m": {
      "en": "item",
      "zh-TW": "項",
      "zh-CN": "项",
      "ko": "항",
      "vi": "mục",
      "id": "item",
      "es": "artículo",
      "pt": "item"
    }
  },
  {
    "id": "K0296",
    "k": "香",
    "r": "かお、こう",
    "m": {
      "en": "fragrance",
      "zh-TW": "香",
      "zh-CN": "香",
      "ko": "향",
      "vi": "thơm",
      "id": "wangi",
      "es": "fragrance",
      "pt": "fragrance"
    }
  },
  {
    "id": "K0297",
    "k": "剛",
    "r": "ごう",
    "m": {
      "en": "strong",
      "zh-TW": "剛",
      "zh-CN": "刚",
      "ko": "강",
      "vi": "cứng",
      "id": "kuat",
      "es": "fuerte",
      "pt": "forte"
    }
  },
  {
    "id": "K0298",
    "k": "号",
    "r": "ごう",
    "m": {
      "en": "number",
      "zh-TW": "號",
      "zh-CN": "号",
      "ko": "호",
      "vi": "số",
      "id": "nomor",
      "es": "número",
      "pt": "número"
    }
  },
  {
    "id": "K0299",
    "k": "拷",
    "r": "ごう",
    "m": {
      "en": "torture",
      "zh-TW": "拷",
      "zh-CN": "拷",
      "ko": "고",
      "vi": "tra tấn",
      "id": "menyiksa",
      "es": "torture",
      "pt": "torture"
    }
  },
  {
    "id": "K0300",
    "k": "豪",
    "r": "ごう",
    "m": {
      "en": "powerful",
      "zh-TW": "豪",
      "zh-CN": "豪",
      "ko": "호",
      "vi": "hào",
      "id": "gagah",
      "es": "powerful",
      "pt": "powerful"
    }
  },
  {
    "id": "K0301",
    "k": "頂",
    "r": "いただ、ちょう",
    "m": {
      "en": "summit",
      "zh-TW": "頂",
      "zh-CN": "顶",
      "ko": "정",
      "vi": "đỉnh",
      "id": "puncak",
      "es": "summit",
      "pt": "summit"
    }
  },
  {
    "id": "K0302",
    "k": "腸",
    "r": "ちょう",
    "m": {
      "en": "intestine",
      "zh-TW": "腸",
      "zh-CN": "肠",
      "ko": "장",
      "vi": "ruột",
      "id": "usus",
      "es": "intestine",
      "pt": "intestine"
    }
  },
  {
    "id": "K0303",
    "k": "挑",
    "r": "いど、ちょう",
    "m": {
      "en": "challenge",
      "zh-TW": "挑戰",
      "zh-CN": "挑战",
      "ko": "도",
      "vi": "thách",
      "id": "menantang",
      "es": "challenge",
      "pt": "challenge"
    }
  },
  {
    "id": "K0304",
    "k": "跳",
    "r": "とる、ちょう",
    "m": {
      "en": "jump",
      "zh-TW": "跳",
      "zh-CN": "跳",
      "ko": "도",
      "vi": "nhảy",
      "id": "melompat",
      "es": "jump",
      "pt": "jump"
    }
  },
  {
    "id": "K0305",
    "k": "徴",
    "r": "ちょう",
    "m": {
      "en": "sign",
      "zh-TW": "徵",
      "zh-CN": "征",
      "ko": "징",
      "vi": "dấu hiệu",
      "id": "tanda",
      "es": "sign",
      "pt": "sign"
    }
  },
  {
    "id": "K0306",
    "k": "懲",
    "r": "こ（える）、ちょう",
    "m": {
      "en": "punish",
      "zh-TW": "懲",
      "zh-CN": "惩",
      "ko": "징",
      "vi": "trừng phạt",
      "id": "menghukum",
      "es": "punish",
      "pt": "punish"
    }
  },
  {
    "id": "K0307",
    "k": "聴",
    "r": "き（く）、ちょう",
    "m": {
      "en": "listen",
      "zh-TW": "聽",
      "zh-CN": "听",
      "ko": "청",
      "vi": "nghe",
      "id": "mendengarkan",
      "es": "escuchar",
      "pt": "escutar"
    }
  },
  {
    "id": "K0308",
    "k": "超",
    "r": "こ（える）、ちょう",
    "m": {
      "en": "super",
      "zh-TW": "超",
      "zh-CN": "超",
      "ko": "초",
      "vi": "siêu",
      "id": "super",
      "es": "super",
      "pt": "super"
    }
  },
  {
    "id": "K0309",
    "k": "沈",
    "r": "しず（む）、ちん",
    "m": {
      "en": "sink",
      "zh-TW": "沉",
      "zh-CN": "沉",
      "ko": "침",
      "vi": "chìm",
      "id": "tenggelam",
      "es": "sink",
      "pt": "sink"
    }
  },
  {
    "id": "K0310",
    "k": "珍",
    "r": "めずら（しい）、ちん",
    "m": {
      "en": "rare",
      "zh-TW": "珍",
      "zh-CN": "珍",
      "ko": "진",
      "vi": "quý",
      "id": "langka",
      "es": "raro",
      "pt": "raro"
    }
  },
  {
    "id": "K0311",
    "k": "亡",
    "r": "ぼう",
    "m": {
      "en": "deceased",
      "zh-TW": "亡",
      "zh-CN": "亡",
      "ko": "[deceased]",
      "vi": "[deceased]",
      "id": "[deceased]",
      "es": "deceased",
      "pt": "deceased"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0312",
    "k": "圧",
    "r": "あつ",
    "m": {
      "en": "pressure",
      "zh-TW": "圧",
      "zh-CN": "圧",
      "ko": "[pressure]",
      "vi": "[pressure]",
      "id": "[pressure]",
      "es": "pressure",
      "pt": "pressure"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0313",
    "k": "永",
    "r": "えい",
    "m": {
      "en": "eternity",
      "zh-TW": "永",
      "zh-CN": "永",
      "ko": "[eternity]",
      "vi": "[eternity]",
      "id": "[eternity]",
      "es": "eternity",
      "pt": "eternity"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0314",
    "k": "営",
    "r": "えい",
    "m": {
      "en": "manage",
      "zh-TW": "営",
      "zh-CN": "営",
      "ko": "[manage]",
      "vi": "[manage]",
      "id": "[manage]",
      "es": "manage",
      "pt": "manage"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0315",
    "k": "衛",
    "r": "えい",
    "m": {
      "en": "defense",
      "zh-TW": "衛",
      "zh-CN": "衛",
      "ko": "[defense]",
      "vi": "[defense]",
      "id": "[defense]",
      "es": "defense",
      "pt": "defense"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0316",
    "k": "易",
    "r": "えき",
    "m": {
      "en": "easy",
      "zh-TW": "易",
      "zh-CN": "易",
      "ko": "[easy]",
      "vi": "[easy]",
      "id": "[easy]",
      "es": "fácil",
      "pt": "fácil"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0317",
    "k": "益",
    "r": "えき",
    "m": {
      "en": "benefit",
      "zh-TW": "益",
      "zh-CN": "益",
      "ko": "[benefit]",
      "vi": "[benefit]",
      "id": "[benefit]",
      "es": "benefit",
      "pt": "benefit"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0318",
    "k": "液",
    "r": "えき",
    "m": {
      "en": "liquid",
      "zh-TW": "液",
      "zh-CN": "液",
      "ko": "[liquid]",
      "vi": "[liquid]",
      "id": "[liquid]",
      "es": "liquid",
      "pt": "liquid"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0319",
    "k": "演",
    "r": "えん",
    "m": {
      "en": "perform",
      "zh-TW": "演",
      "zh-CN": "演",
      "ko": "[perform]",
      "vi": "[perform]",
      "id": "[perform]",
      "es": "perform",
      "pt": "perform"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0320",
    "k": "応",
    "r": "おう",
    "m": {
      "en": "respond",
      "zh-TW": "応",
      "zh-CN": "応",
      "ko": "[respond]",
      "vi": "[respond]",
      "id": "[respond]",
      "es": "respond",
      "pt": "respond"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0321",
    "k": "往",
    "r": "おう",
    "m": {
      "en": "go",
      "zh-TW": "往",
      "zh-CN": "往",
      "ko": "[go]",
      "vi": "[go]",
      "id": "[go]",
      "es": "ir",
      "pt": "ir"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0322",
    "k": "桜",
    "r": "おう",
    "m": {
      "en": "cherry",
      "zh-TW": "桜",
      "zh-CN": "桜",
      "ko": "[cherry]",
      "vi": "[cherry]",
      "id": "[cherry]",
      "es": "cherry",
      "pt": "cherry"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0323",
    "k": "恩",
    "r": "おん",
    "m": {
      "en": "kindness",
      "zh-TW": "恩",
      "zh-CN": "恩",
      "ko": "[kindness]",
      "vi": "[kindness]",
      "id": "[kindness]",
      "es": "kindness",
      "pt": "kindness"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0324",
    "k": "可",
    "r": "か",
    "m": {
      "en": "possible",
      "zh-TW": "可",
      "zh-CN": "可",
      "ko": "[possible]",
      "vi": "[possible]",
      "id": "[possible]",
      "es": "posible",
      "pt": "possível"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0325",
    "k": "価",
    "r": "か",
    "m": {
      "en": "value",
      "zh-TW": "価",
      "zh-CN": "価",
      "ko": "[value]",
      "vi": "[value]",
      "id": "[value]",
      "es": "valor",
      "pt": "valor"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0326",
    "k": "河",
    "r": "か",
    "m": {
      "en": "river",
      "zh-TW": "河",
      "zh-CN": "河",
      "ko": "[river]",
      "vi": "[river]",
      "id": "[river]",
      "es": "río",
      "pt": "rio"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0327",
    "k": "過",
    "r": "か",
    "m": {
      "en": "exceed",
      "zh-TW": "過",
      "zh-CN": "過",
      "ko": "[exceed]",
      "vi": "[exceed]",
      "id": "[exceed]",
      "es": "exceed",
      "pt": "exceed"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0328",
    "k": "賀",
    "r": "が",
    "m": {
      "en": "congratulate",
      "zh-TW": "賀",
      "zh-CN": "賀",
      "ko": "[congratulate]",
      "vi": "[congratulate]",
      "id": "[congratulate]",
      "es": "congratulate",
      "pt": "congratulate"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0329",
    "k": "快",
    "r": "かい",
    "m": {
      "en": "pleasant",
      "zh-TW": "快",
      "zh-CN": "快",
      "ko": "[pleasant]",
      "vi": "[pleasant]",
      "id": "[pleasant]",
      "es": "pleasant",
      "pt": "pleasant"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0330",
    "k": "解",
    "r": "かい",
    "m": {
      "en": "solve",
      "zh-TW": "解",
      "zh-CN": "解",
      "ko": "[solve]",
      "vi": "[solve]",
      "id": "[solve]",
      "es": "solve",
      "pt": "solve"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0331",
    "k": "格",
    "r": "かく",
    "m": {
      "en": "status",
      "zh-TW": "格",
      "zh-CN": "格",
      "ko": "[status]",
      "vi": "[status]",
      "id": "[status]",
      "es": "status",
      "pt": "status"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0332",
    "k": "確",
    "r": "かく",
    "m": {
      "en": "certain",
      "zh-TW": "確",
      "zh-CN": "確",
      "ko": "[certain]",
      "vi": "[certain]",
      "id": "[certain]",
      "es": "certain",
      "pt": "certain"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0333",
    "k": "額",
    "r": "がく",
    "m": {
      "en": "amount",
      "zh-TW": "額",
      "zh-CN": "額",
      "ko": "[amount]",
      "vi": "[amount]",
      "id": "[amount]",
      "es": "amount",
      "pt": "amount"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0334",
    "k": "刊",
    "r": "かん",
    "m": {
      "en": "publish",
      "zh-TW": "刊",
      "zh-CN": "刊",
      "ko": "[publish]",
      "vi": "[publish]",
      "id": "[publish]",
      "es": "publish",
      "pt": "publish"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0335",
    "k": "慣",
    "r": "かん",
    "m": {
      "en": "accustomed",
      "zh-TW": "慣",
      "zh-CN": "慣",
      "ko": "[accustomed]",
      "vi": "[accustomed]",
      "id": "[accustomed]",
      "es": "accustomed",
      "pt": "accustomed"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0336",
    "k": "寄",
    "r": "き",
    "m": {
      "en": "approach",
      "zh-TW": "寄",
      "zh-CN": "寄",
      "ko": "[approach]",
      "vi": "[approach]",
      "id": "[approach]",
      "es": "approach",
      "pt": "approach"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0337",
    "k": "規",
    "r": "き",
    "m": {
      "en": "rule",
      "zh-TW": "規",
      "zh-CN": "規",
      "ko": "[rule]",
      "vi": "[rule]",
      "id": "[rule]",
      "es": "regla",
      "pt": "regra"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0338",
    "k": "技",
    "r": "ぎ",
    "m": {
      "en": "skill",
      "zh-TW": "技",
      "zh-CN": "技",
      "ko": "[skill]",
      "vi": "[skill]",
      "id": "[skill]",
      "es": "skill",
      "pt": "skill"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0339",
    "k": "義",
    "r": "ぎ",
    "m": {
      "en": "righteousness",
      "zh-TW": "義",
      "zh-CN": "義",
      "ko": "[righteousness]",
      "vi": "[righteousness]",
      "id": "[righteousness]",
      "es": "righteousness",
      "pt": "righteousness"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0340",
    "k": "逆",
    "r": "ぎゃく",
    "m": {
      "en": "reverse",
      "zh-TW": "逆",
      "zh-CN": "逆",
      "ko": "[reverse]",
      "vi": "[reverse]",
      "id": "[reverse]",
      "es": "reverse",
      "pt": "reverse"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0341",
    "k": "久",
    "r": "きゅう",
    "m": {
      "en": "long time",
      "zh-TW": "久",
      "zh-CN": "久",
      "ko": "[long time]",
      "vi": "[long time]",
      "id": "[long time]",
      "es": "long time",
      "pt": "long time"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0342",
    "k": "旧",
    "r": "きゅう",
    "m": {
      "en": "old",
      "zh-TW": "旧",
      "zh-CN": "旧",
      "ko": "[old]",
      "vi": "[old]",
      "id": "[old]",
      "es": "viejo",
      "pt": "velho"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0343",
    "k": "居",
    "r": "きょ",
    "m": {
      "en": "reside",
      "zh-TW": "居",
      "zh-CN": "居",
      "ko": "[reside]",
      "vi": "[reside]",
      "id": "[reside]",
      "es": "reside",
      "pt": "reside"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0344",
    "k": "許",
    "r": "きょ",
    "m": {
      "en": "permit",
      "zh-TW": "許",
      "zh-CN": "許",
      "ko": "[permit]",
      "vi": "[permit]",
      "id": "[permit]",
      "es": "permit",
      "pt": "permit"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0345",
    "k": "均",
    "r": "きん",
    "m": {
      "en": "equal",
      "zh-TW": "均",
      "zh-CN": "均",
      "ko": "[equal]",
      "vi": "[equal]",
      "id": "[equal]",
      "es": "igual",
      "pt": "igual"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0346",
    "k": "禁",
    "r": "きん",
    "m": {
      "en": "prohibit",
      "zh-TW": "禁",
      "zh-CN": "禁",
      "ko": "[prohibit]",
      "vi": "[prohibit]",
      "id": "[prohibit]",
      "es": "prohibit",
      "pt": "prohibit"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0347",
    "k": "句",
    "r": "く",
    "m": {
      "en": "phrase",
      "zh-TW": "句",
      "zh-CN": "句",
      "ko": "[phrase]",
      "vi": "[phrase]",
      "id": "[phrase]",
      "es": "phrase",
      "pt": "phrase"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0348",
    "k": "群",
    "r": "ぐん",
    "m": {
      "en": "group",
      "zh-TW": "群",
      "zh-CN": "群",
      "ko": "[group]",
      "vi": "[group]",
      "id": "[group]",
      "es": "group",
      "pt": "group"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0349",
    "k": "券",
    "r": "けん",
    "m": {
      "en": "ticket",
      "zh-TW": "券",
      "zh-CN": "券",
      "ko": "[ticket]",
      "vi": "[ticket]",
      "id": "[ticket]",
      "es": "boleto",
      "pt": "bilhete"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0350",
    "k": "興",
    "r": "こう",
    "m": {
      "en": "interest",
      "zh-TW": "興",
      "zh-CN": "興",
      "ko": "[interest]",
      "vi": "[interest]",
      "id": "[interest]",
      "es": "interés",
      "pt": "interesse"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0351",
    "k": "混",
    "r": "こん",
    "m": {
      "en": "mix",
      "zh-TW": "混",
      "zh-CN": "混",
      "ko": "[mix]",
      "vi": "[mix]",
      "id": "[mix]",
      "es": "mezclar",
      "pt": "misturar"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0352",
    "k": "査",
    "r": "さ",
    "m": {
      "en": "investigate",
      "zh-TW": "査",
      "zh-CN": "査",
      "ko": "[investigate]",
      "vi": "[investigate]",
      "id": "[investigate]",
      "es": "investigate",
      "pt": "investigate"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0353",
    "k": "災",
    "r": "さい",
    "m": {
      "en": "disaster",
      "zh-TW": "災",
      "zh-CN": "災",
      "ko": "[disaster]",
      "vi": "[disaster]",
      "id": "[disaster]",
      "es": "disaster",
      "pt": "disaster"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0354",
    "k": "妻",
    "r": "さい",
    "m": {
      "en": "wife",
      "zh-TW": "妻",
      "zh-CN": "妻",
      "ko": "[wife]",
      "vi": "[wife]",
      "id": "[wife]",
      "es": "wife",
      "pt": "wife"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0355",
    "k": "採",
    "r": "さい",
    "m": {
      "en": "pick",
      "zh-TW": "採",
      "zh-CN": "採",
      "ko": "[pick]",
      "vi": "[pick]",
      "id": "[pick]",
      "es": "pick",
      "pt": "pick"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0356",
    "k": "際",
    "r": "さい",
    "m": {
      "en": "occasion",
      "zh-TW": "際",
      "zh-CN": "際",
      "ko": "[occasion]",
      "vi": "[occasion]",
      "id": "[occasion]",
      "es": "occasion",
      "pt": "occasion"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0357",
    "k": "在",
    "r": "ざい",
    "m": {
      "en": "exist",
      "zh-TW": "在",
      "zh-CN": "在",
      "ko": "[exist]",
      "vi": "[exist]",
      "id": "[exist]",
      "es": "exist",
      "pt": "exist"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0358",
    "k": "財",
    "r": "ざい",
    "m": {
      "en": "wealth",
      "zh-TW": "財",
      "zh-CN": "財",
      "ko": "[wealth]",
      "vi": "[wealth]",
      "id": "[wealth]",
      "es": "wealth",
      "pt": "wealth"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0359",
    "k": "罪",
    "r": "ざい",
    "m": {
      "en": "crime",
      "zh-TW": "罪",
      "zh-CN": "罪",
      "ko": "[crime]",
      "vi": "[crime]",
      "id": "[crime]",
      "es": "crime",
      "pt": "crime"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0360",
    "k": "雑",
    "r": "ざつ",
    "m": {
      "en": "miscellaneous",
      "zh-TW": "雑",
      "zh-CN": "雑",
      "ko": "[miscellaneous]",
      "vi": "[miscellaneous]",
      "id": "[miscellaneous]",
      "es": "miscellaneous",
      "pt": "miscellaneous"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0361",
    "k": "酸",
    "r": "さん",
    "m": {
      "en": "acid",
      "zh-TW": "酸",
      "zh-CN": "酸",
      "ko": "[acid]",
      "vi": "[acid]",
      "id": "[acid]",
      "es": "acid",
      "pt": "acid"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0362",
    "k": "賛",
    "r": "さん",
    "m": {
      "en": "approve",
      "zh-TW": "賛",
      "zh-CN": "賛",
      "ko": "[approve]",
      "vi": "[approve]",
      "id": "[approve]",
      "es": "approve",
      "pt": "approve"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0363",
    "k": "支",
    "r": "し",
    "m": {
      "en": "support",
      "zh-TW": "支",
      "zh-CN": "支",
      "ko": "[support]",
      "vi": "[support]",
      "id": "[support]",
      "es": "support",
      "pt": "support"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0364",
    "k": "志",
    "r": "し",
    "m": {
      "en": "will",
      "zh-TW": "志",
      "zh-CN": "志",
      "ko": "[will]",
      "vi": "[will]",
      "id": "[will]",
      "es": "will",
      "pt": "will"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0365",
    "k": "枝",
    "r": "し",
    "m": {
      "en": "branch",
      "zh-TW": "枝",
      "zh-CN": "枝",
      "ko": "[branch]",
      "vi": "[branch]",
      "id": "[branch]",
      "es": "branch",
      "pt": "branch"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0366",
    "k": "師",
    "r": "し",
    "m": {
      "en": "teacher",
      "zh-TW": "師",
      "zh-CN": "師",
      "ko": "[teacher]",
      "vi": "[teacher]",
      "id": "[teacher]",
      "es": "profesor",
      "pt": "professor"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0367",
    "k": "資",
    "r": "し",
    "m": {
      "en": "resources",
      "zh-TW": "資",
      "zh-CN": "資",
      "ko": "[resources]",
      "vi": "[resources]",
      "id": "[resources]",
      "es": "resources",
      "pt": "resources"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0368",
    "k": "飼",
    "r": "し",
    "m": {
      "en": "raise",
      "zh-TW": "飼",
      "zh-CN": "飼",
      "ko": "[raise]",
      "vi": "[raise]",
      "id": "[raise]",
      "es": "criar",
      "pt": "criar"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0369",
    "k": "示",
    "r": "し",
    "m": {
      "en": "show",
      "zh-TW": "示",
      "zh-CN": "示",
      "ko": "[show]",
      "vi": "[show]",
      "id": "[show]",
      "es": "mostrar",
      "pt": "mostrar"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0370",
    "k": "似",
    "r": "じ",
    "m": {
      "en": "resemble",
      "zh-TW": "似",
      "zh-CN": "似",
      "ko": "[resemble]",
      "vi": "[resemble]",
      "id": "[resemble]",
      "es": "resemble",
      "pt": "resemble"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0371",
    "k": "識",
    "r": "しき",
    "m": {
      "en": "know",
      "zh-TW": "識",
      "zh-CN": "識",
      "ko": "[know]",
      "vi": "[know]",
      "id": "[know]",
      "es": "saber",
      "pt": "saber"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0372",
    "k": "舎",
    "r": "しゃ",
    "m": {
      "en": "building",
      "zh-TW": "舎",
      "zh-CN": "舎",
      "ko": "[building]",
      "vi": "[building]",
      "id": "[building]",
      "es": "building",
      "pt": "building"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0373",
    "k": "謝",
    "r": "しゃ",
    "m": {
      "en": "thank",
      "zh-TW": "謝",
      "zh-CN": "謝",
      "ko": "[thank]",
      "vi": "[thank]",
      "id": "[thank]",
      "es": "thank",
      "pt": "thank"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0374",
    "k": "授",
    "r": "じゅ",
    "m": {
      "en": "teach",
      "zh-TW": "授",
      "zh-CN": "授",
      "ko": "[teach]",
      "vi": "[teach]",
      "id": "[teach]",
      "es": "enseñar",
      "pt": "ensinar"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0375",
    "k": "述",
    "r": "じゅつ",
    "m": {
      "en": "state",
      "zh-TW": "述",
      "zh-CN": "述",
      "ko": "[state]",
      "vi": "[state]",
      "id": "[state]",
      "es": "state",
      "pt": "state"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0376",
    "k": "術",
    "r": "じゅつ",
    "m": {
      "en": "art",
      "zh-TW": "術",
      "zh-CN": "術",
      "ko": "[art]",
      "vi": "[art]",
      "id": "[art]",
      "es": "arte",
      "pt": "arte"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0377",
    "k": "準",
    "r": "じゅん",
    "m": {
      "en": "standard",
      "zh-TW": "準",
      "zh-CN": "準",
      "ko": "[standard]",
      "vi": "[standard]",
      "id": "[standard]",
      "es": "standard",
      "pt": "standard"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0378",
    "k": "序",
    "r": "じょ",
    "m": {
      "en": "order",
      "zh-TW": "序",
      "zh-CN": "序",
      "ko": "[order]",
      "vi": "[order]",
      "id": "[order]",
      "es": "ordenar",
      "pt": "ordenar"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0379",
    "k": "招",
    "r": "しょう",
    "m": {
      "en": "invite",
      "zh-TW": "招",
      "zh-CN": "招",
      "ko": "[invite]",
      "vi": "[invite]",
      "id": "[invite]",
      "es": "invite",
      "pt": "invite"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0380",
    "k": "承",
    "r": "しょう",
    "m": {
      "en": "inherit",
      "zh-TW": "承",
      "zh-CN": "承",
      "ko": "[inherit]",
      "vi": "[inherit]",
      "id": "[inherit]",
      "es": "inherit",
      "pt": "inherit"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0381",
    "k": "証",
    "r": "しょう",
    "m": {
      "en": "proof",
      "zh-TW": "証",
      "zh-CN": "証",
      "ko": "[proof]",
      "vi": "[proof]",
      "id": "[proof]",
      "es": "proof",
      "pt": "proof"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0382",
    "k": "条",
    "r": "じょう",
    "m": {
      "en": "article",
      "zh-TW": "条",
      "zh-CN": "条",
      "ko": "[article]",
      "vi": "[article]",
      "id": "[article]",
      "es": "article",
      "pt": "article"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0383",
    "k": "状",
    "r": "じょう",
    "m": {
      "en": "condition",
      "zh-TW": "状",
      "zh-CN": "状",
      "ko": "[condition]",
      "vi": "[condition]",
      "id": "[condition]",
      "es": "condition",
      "pt": "condition"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0384",
    "k": "常",
    "r": "じょう",
    "m": {
      "en": "normal",
      "zh-TW": "常",
      "zh-CN": "常",
      "ko": "[normal]",
      "vi": "[normal]",
      "id": "[normal]",
      "es": "normal",
      "pt": "normal"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0385",
    "k": "情",
    "r": "じょう",
    "m": {
      "en": "emotion",
      "zh-TW": "情",
      "zh-CN": "情",
      "ko": "[emotion]",
      "vi": "[emotion]",
      "id": "[emotion]",
      "es": "emotion",
      "pt": "emotion"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0386",
    "k": "織",
    "r": "しょく",
    "m": {
      "en": "weave",
      "zh-TW": "織",
      "zh-CN": "織",
      "ko": "[weave]",
      "vi": "[weave]",
      "id": "[weave]",
      "es": "weave",
      "pt": "weave"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0387",
    "k": "職",
    "r": "しょく",
    "m": {
      "en": "job",
      "zh-TW": "職",
      "zh-CN": "職",
      "ko": "[job]",
      "vi": "[job]",
      "id": "[job]",
      "es": "empleo",
      "pt": "emprego"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0388",
    "k": "制",
    "r": "せい",
    "m": {
      "en": "system",
      "zh-TW": "制",
      "zh-CN": "制",
      "ko": "[system]",
      "vi": "[system]",
      "id": "[system]",
      "es": "system",
      "pt": "system"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0389",
    "k": "性",
    "r": "せい",
    "m": {
      "en": "nature",
      "zh-TW": "性",
      "zh-CN": "性",
      "ko": "[nature]",
      "vi": "[nature]",
      "id": "[nature]",
      "es": "naturaleza",
      "pt": "natureza"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0390",
    "k": "政",
    "r": "せい",
    "m": {
      "en": "politics",
      "zh-TW": "政",
      "zh-CN": "政",
      "ko": "[politics]",
      "vi": "[politics]",
      "id": "[politics]",
      "es": "política",
      "pt": "política"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0391",
    "k": "精",
    "r": "せい",
    "m": {
      "en": "refined",
      "zh-TW": "精",
      "zh-CN": "精",
      "ko": "[refined]",
      "vi": "[refined]",
      "id": "[refined]",
      "es": "refined",
      "pt": "refined"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0392",
    "k": "製",
    "r": "せい",
    "m": {
      "en": "manufacture",
      "zh-TW": "製",
      "zh-CN": "製",
      "ko": "[manufacture]",
      "vi": "[manufacture]",
      "id": "[manufacture]",
      "es": "manufacture",
      "pt": "manufacture"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0393",
    "k": "税",
    "r": "ぜい",
    "m": {
      "en": "tax",
      "zh-TW": "税",
      "zh-CN": "税",
      "ko": "[tax]",
      "vi": "[tax]",
      "id": "[tax]",
      "es": "tax",
      "pt": "tax"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0394",
    "k": "責",
    "r": "せき",
    "m": {
      "en": "blame",
      "zh-TW": "責",
      "zh-CN": "責",
      "ko": "[blame]",
      "vi": "[blame]",
      "id": "[blame]",
      "es": "blame",
      "pt": "blame"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0395",
    "k": "績",
    "r": "せき",
    "m": {
      "en": "achievement",
      "zh-TW": "績",
      "zh-CN": "績",
      "ko": "[achievement]",
      "vi": "[achievement]",
      "id": "[achievement]",
      "es": "achievement",
      "pt": "achievement"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0396",
    "k": "接",
    "r": "せつ",
    "m": {
      "en": "contact",
      "zh-TW": "接",
      "zh-CN": "接",
      "ko": "[contact]",
      "vi": "[contact]",
      "id": "[contact]",
      "es": "contact",
      "pt": "contact"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0397",
    "k": "設",
    "r": "せつ",
    "m": {
      "en": "establish",
      "zh-TW": "設",
      "zh-CN": "設",
      "ko": "[establish]",
      "vi": "[establish]",
      "id": "[establish]",
      "es": "establish",
      "pt": "establish"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0398",
    "k": "絶",
    "r": "ぜつ",
    "m": {
      "en": "sever",
      "zh-TW": "絶",
      "zh-CN": "絶",
      "ko": "[sever]",
      "vi": "[sever]",
      "id": "[sever]",
      "es": "sever",
      "pt": "sever"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0399",
    "k": "銭",
    "r": "せん",
    "m": {
      "en": "coin",
      "zh-TW": "銭",
      "zh-CN": "銭",
      "ko": "[coin]",
      "vi": "[coin]",
      "id": "[coin]",
      "es": "coin",
      "pt": "coin"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0400",
    "k": "祖",
    "r": "そ",
    "m": {
      "en": "ancestor",
      "zh-TW": "祖",
      "zh-CN": "祖",
      "ko": "[ancestor]",
      "vi": "[ancestor]",
      "id": "[ancestor]",
      "es": "ancestor",
      "pt": "ancestor"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0401",
    "k": "素",
    "r": "そ",
    "m": {
      "en": "element",
      "zh-TW": "素",
      "zh-CN": "素",
      "ko": "[element]",
      "vi": "[element]",
      "id": "[element]",
      "es": "element",
      "pt": "element"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0402",
    "k": "総",
    "r": "そう",
    "m": {
      "en": "total",
      "zh-TW": "総",
      "zh-CN": "総",
      "ko": "[total]",
      "vi": "[total]",
      "id": "[total]",
      "es": "total",
      "pt": "total"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0403",
    "k": "造",
    "r": "ぞう",
    "m": {
      "en": "create",
      "zh-TW": "造",
      "zh-CN": "造",
      "ko": "[create]",
      "vi": "[create]",
      "id": "[create]",
      "es": "crear",
      "pt": "criar"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0404",
    "k": "測",
    "r": "そく",
    "m": {
      "en": "measure",
      "zh-TW": "測",
      "zh-CN": "測",
      "ko": "[measure]",
      "vi": "[measure]",
      "id": "[measure]",
      "es": "measure",
      "pt": "measure"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0405",
    "k": "属",
    "r": "ぞく",
    "m": {
      "en": "belong",
      "zh-TW": "属",
      "zh-CN": "属",
      "ko": "[belong]",
      "vi": "[belong]",
      "id": "[belong]",
      "es": "belong",
      "pt": "belong"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0406",
    "k": "率",
    "r": "りつ",
    "m": {
      "en": "rate",
      "zh-TW": "率",
      "zh-CN": "率",
      "ko": "[rate]",
      "vi": "[rate]",
      "id": "[rate]",
      "es": "rate",
      "pt": "rate"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0407",
    "k": "損",
    "r": "そん",
    "m": {
      "en": "damage",
      "zh-TW": "損",
      "zh-CN": "損",
      "ko": "[damage]",
      "vi": "[damage]",
      "id": "[damage]",
      "es": "damage",
      "pt": "damage"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0408",
    "k": "退",
    "r": "たい",
    "m": {
      "en": "retreat",
      "zh-TW": "退",
      "zh-CN": "退",
      "ko": "[retreat]",
      "vi": "[retreat]",
      "id": "[retreat]",
      "es": "retreat",
      "pt": "retreat"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0409",
    "k": "態",
    "r": "たい",
    "m": {
      "en": "attitude",
      "zh-TW": "態",
      "zh-CN": "態",
      "ko": "[attitude]",
      "vi": "[attitude]",
      "id": "[attitude]",
      "es": "attitude",
      "pt": "attitude"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0410",
    "k": "団",
    "r": "だん",
    "m": {
      "en": "group",
      "zh-TW": "団",
      "zh-CN": "団",
      "ko": "[group]",
      "vi": "[group]",
      "id": "[group]",
      "es": "group",
      "pt": "group"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0411",
    "k": "断",
    "r": "だん",
    "m": {
      "en": "cut off",
      "zh-TW": "断",
      "zh-CN": "断",
      "ko": "[cut off]",
      "vi": "[cut off]",
      "id": "[cut off]",
      "es": "cut off",
      "pt": "cut off"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0412",
    "k": "築",
    "r": "ちく",
    "m": {
      "en": "build",
      "zh-TW": "築",
      "zh-CN": "築",
      "ko": "[build]",
      "vi": "[build]",
      "id": "[build]",
      "es": "construir",
      "pt": "construir"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0413",
    "k": "張",
    "r": "ちょう",
    "m": {
      "en": "stretch",
      "zh-TW": "張",
      "zh-CN": "張",
      "ko": "[stretch]",
      "vi": "[stretch]",
      "id": "[stretch]",
      "es": "stretch",
      "pt": "stretch"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0414",
    "k": "賃",
    "r": "ちん",
    "m": {
      "en": "rent",
      "zh-TW": "賃",
      "zh-CN": "賃",
      "ko": "[rent]",
      "vi": "[rent]",
      "id": "[rent]",
      "es": "rent",
      "pt": "rent"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0415",
    "k": "痛",
    "r": "つう",
    "m": {
      "en": "pain",
      "zh-TW": "痛",
      "zh-CN": "痛",
      "ko": "[pain]",
      "vi": "[pain]",
      "id": "[pain]",
      "es": "pain",
      "pt": "pain"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0416",
    "k": "展",
    "r": "てん",
    "m": {
      "en": "expand",
      "zh-TW": "展",
      "zh-CN": "展",
      "ko": "[expand]",
      "vi": "[expand]",
      "id": "[expand]",
      "es": "expand",
      "pt": "expand"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0417",
    "k": "投",
    "r": "とう",
    "m": {
      "en": "throw",
      "zh-TW": "投",
      "zh-CN": "投",
      "ko": "[throw]",
      "vi": "[throw]",
      "id": "[throw]",
      "es": "lanzar",
      "pt": "jogar"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0418",
    "k": "打",
    "r": "だ",
    "m": {
      "en": "hit",
      "zh-TW": "打",
      "zh-CN": "打",
      "ko": "[hit]",
      "vi": "[hit]",
      "id": "[hit]",
      "es": "hit",
      "pt": "hit"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0419",
    "k": "折",
    "r": "せつ",
    "m": {
      "en": "fold",
      "zh-TW": "折",
      "zh-CN": "折",
      "ko": "[fold]",
      "vi": "[fold]",
      "id": "[fold]",
      "es": "fold",
      "pt": "fold"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0420",
    "k": "抜",
    "r": "ばつ",
    "m": {
      "en": "extract",
      "zh-TW": "抜",
      "zh-CN": "抜",
      "ko": "[extract]",
      "vi": "[extract]",
      "id": "[extract]",
      "es": "extract",
      "pt": "extract"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0421",
    "k": "抱",
    "r": "ほう",
    "m": {
      "en": "embrace",
      "zh-TW": "抱",
      "zh-CN": "抱",
      "ko": "[embrace]",
      "vi": "[embrace]",
      "id": "[embrace]",
      "es": "embrace",
      "pt": "embrace"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0422",
    "k": "散",
    "r": "さん",
    "m": {
      "en": "scatter",
      "zh-TW": "散",
      "zh-CN": "散",
      "ko": "[scatter]",
      "vi": "[scatter]",
      "id": "[scatter]",
      "es": "scatter",
      "pt": "scatter"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0423",
    "k": "疲",
    "r": "ひ",
    "m": {
      "en": "tired",
      "zh-TW": "疲",
      "zh-CN": "疲",
      "ko": "[tired]",
      "vi": "[tired]",
      "id": "[tired]",
      "es": "cansado",
      "pt": "cansado"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0424",
    "k": "登",
    "r": "とう",
    "m": {
      "en": "climb",
      "zh-TW": "登",
      "zh-CN": "登",
      "ko": "[climb]",
      "vi": "[climb]",
      "id": "[climb]",
      "es": "climb",
      "pt": "climb"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0425",
    "k": "頼",
    "r": "らい",
    "m": {
      "en": "request",
      "zh-TW": "頼",
      "zh-CN": "頼",
      "ko": "[request]",
      "vi": "[request]",
      "id": "[request]",
      "es": "request",
      "pt": "request"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0426",
    "k": "悩",
    "r": "のう",
    "m": {
      "en": "worry",
      "zh-TW": "悩",
      "zh-CN": "悩",
      "ko": "[worry]",
      "vi": "[worry]",
      "id": "[worry]",
      "es": "worry",
      "pt": "worry"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0427",
    "k": "迷",
    "r": "めい",
    "m": {
      "en": "lost",
      "zh-TW": "迷",
      "zh-CN": "迷",
      "ko": "[lost]",
      "vi": "[lost]",
      "id": "[lost]",
      "es": "lost",
      "pt": "lost"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0428",
    "k": "困",
    "r": "こん",
    "m": {
      "en": "troubled",
      "zh-TW": "困",
      "zh-CN": "困",
      "ko": "[troubled]",
      "vi": "[troubled]",
      "id": "[troubled]",
      "es": "troubled",
      "pt": "troubled"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0429",
    "k": "眠",
    "r": "みん",
    "m": {
      "en": "sleep",
      "zh-TW": "眠",
      "zh-CN": "眠",
      "ko": "[sleep]",
      "vi": "[sleep]",
      "id": "[sleep]",
      "es": "dormir",
      "pt": "dormir"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0430",
    "k": "忘",
    "r": "ぼう",
    "m": {
      "en": "forget",
      "zh-TW": "忘",
      "zh-CN": "忘",
      "ko": "[forget]",
      "vi": "[forget]",
      "id": "[forget]",
      "es": "olvidar",
      "pt": "esquecer"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0431",
    "k": "定",
    "r": "てい",
    "m": {
      "en": "fix",
      "zh-TW": "定",
      "zh-CN": "定",
      "ko": "[fix]",
      "vi": "[fix]",
      "id": "[fix]",
      "es": "arreglar",
      "pt": "consertar"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0432",
    "k": "比",
    "r": "ひ",
    "m": {
      "en": "compare",
      "zh-TW": "比",
      "zh-CN": "比",
      "ko": "[compare]",
      "vi": "[compare]",
      "id": "[compare]",
      "es": "comparar",
      "pt": "comparar"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0433",
    "k": "受",
    "r": "じゅ",
    "m": {
      "en": "receive",
      "zh-TW": "受",
      "zh-CN": "受",
      "ko": "[receive]",
      "vi": "[receive]",
      "id": "[receive]",
      "es": "recibir",
      "pt": "receber"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0434",
    "k": "笑",
    "r": "しょう",
    "m": {
      "en": "laugh",
      "zh-TW": "笑",
      "zh-CN": "笑",
      "ko": "[laugh]",
      "vi": "[laugh]",
      "id": "[laugh]",
      "es": "laugh",
      "pt": "laugh"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0435",
    "k": "泣",
    "r": "きゅう",
    "m": {
      "en": "cry",
      "zh-TW": "泣",
      "zh-CN": "泣",
      "ko": "[cry]",
      "vi": "[cry]",
      "id": "[cry]",
      "es": "cry",
      "pt": "cry"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0436",
    "k": "怒",
    "r": "ど",
    "m": {
      "en": "angry",
      "zh-TW": "怒",
      "zh-CN": "怒",
      "ko": "[angry]",
      "vi": "[angry]",
      "id": "[angry]",
      "es": "enojado",
      "pt": "zangado"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0437",
    "k": "悲",
    "r": "ひ",
    "m": {
      "en": "sad",
      "zh-TW": "悲",
      "zh-CN": "悲",
      "ko": "[sad]",
      "vi": "[sad]",
      "id": "[sad]",
      "es": "triste",
      "pt": "triste"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0438",
    "k": "喜",
    "r": "き",
    "m": {
      "en": "joy",
      "zh-TW": "喜",
      "zh-CN": "喜",
      "ko": "[joy]",
      "vi": "[joy]",
      "id": "[joy]",
      "es": "joy",
      "pt": "joy"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0439",
    "k": "残",
    "r": "ざん",
    "m": {
      "en": "remain",
      "zh-TW": "残",
      "zh-CN": "残",
      "ko": "[remain]",
      "vi": "[remain]",
      "id": "[remain]",
      "es": "remain",
      "pt": "remain"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0440",
    "k": "念",
    "r": "ねん",
    "m": {
      "en": "thought",
      "zh-TW": "念",
      "zh-CN": "念",
      "ko": "[thought]",
      "vi": "[thought]",
      "id": "[thought]",
      "es": "thought",
      "pt": "thought"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0441",
    "k": "欲",
    "r": "よく",
    "m": {
      "en": "desire",
      "zh-TW": "欲",
      "zh-CN": "欲",
      "ko": "[desire]",
      "vi": "[desire]",
      "id": "[desire]",
      "es": "desire",
      "pt": "desire"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0442",
    "k": "苦",
    "r": "く",
    "m": {
      "en": "suffer",
      "zh-TW": "苦",
      "zh-CN": "苦",
      "ko": "[suffer]",
      "vi": "[suffer]",
      "id": "[suffer]",
      "es": "suffer",
      "pt": "suffer"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0443",
    "k": "恥",
    "r": "ち",
    "m": {
      "en": "shame",
      "zh-TW": "恥",
      "zh-CN": "恥",
      "ko": "[shame]",
      "vi": "[shame]",
      "id": "[shame]",
      "es": "shame",
      "pt": "shame"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0444",
    "k": "守",
    "r": "しゅ",
    "m": {
      "en": "protect",
      "zh-TW": "守",
      "zh-CN": "守",
      "ko": "[protect]",
      "vi": "[protect]",
      "id": "[protect]",
      "es": "proteger",
      "pt": "proteger"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0445",
    "k": "捕",
    "r": "ほ",
    "m": {
      "en": "catch",
      "zh-TW": "捕",
      "zh-CN": "捕",
      "ko": "[catch]",
      "vi": "[catch]",
      "id": "[catch]",
      "es": "atrapar",
      "pt": "pegar"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0446",
    "k": "探",
    "r": "たん",
    "m": {
      "en": "search",
      "zh-TW": "探",
      "zh-CN": "探",
      "ko": "[search]",
      "vi": "[search]",
      "id": "[search]",
      "es": "buscar",
      "pt": "procurar"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0447",
    "k": "逃",
    "r": "とう",
    "m": {
      "en": "escape",
      "zh-TW": "逃",
      "zh-CN": "逃",
      "ko": "[escape]",
      "vi": "[escape]",
      "id": "[escape]",
      "es": "escape",
      "pt": "escape"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0448",
    "k": "離",
    "r": "り",
    "m": {
      "en": "separate",
      "zh-TW": "離",
      "zh-CN": "離",
      "ko": "[separate]",
      "vi": "[separate]",
      "id": "[separate]",
      "es": "separar",
      "pt": "separar"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0449",
    "k": "拾",
    "r": "しゅう",
    "m": {
      "en": "pick up",
      "zh-TW": "拾",
      "zh-CN": "拾",
      "ko": "[pick up]",
      "vi": "[pick up]",
      "id": "[pick up]",
      "es": "pick up",
      "pt": "pick up"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0450",
    "k": "捨",
    "r": "しゃ",
    "m": {
      "en": "discard",
      "zh-TW": "捨",
      "zh-CN": "捨",
      "ko": "[discard]",
      "vi": "[discard]",
      "id": "[discard]",
      "es": "discard",
      "pt": "discard"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0451",
    "k": "振",
    "r": "しん",
    "m": {
      "en": "swing",
      "zh-TW": "振",
      "zh-CN": "振",
      "ko": "[swing]",
      "vi": "[swing]",
      "id": "[swing]",
      "es": "swing",
      "pt": "swing"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0452",
    "k": "掃",
    "r": "そう",
    "m": {
      "en": "sweep",
      "zh-TW": "掃",
      "zh-CN": "掃",
      "ko": "[sweep]",
      "vi": "[sweep]",
      "id": "[sweep]",
      "es": "sweep",
      "pt": "sweep"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0453",
    "k": "踏",
    "r": "とう",
    "m": {
      "en": "step",
      "zh-TW": "踏",
      "zh-CN": "踏",
      "ko": "[step]",
      "vi": "[step]",
      "id": "[step]",
      "es": "step",
      "pt": "step"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0454",
    "k": "踊",
    "r": "よう",
    "m": {
      "en": "dance",
      "zh-TW": "踊",
      "zh-CN": "踊",
      "ko": "[dance]",
      "vi": "[dance]",
      "id": "[dance]",
      "es": "bailar",
      "pt": "dançar"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0455",
    "k": "騒",
    "r": "そう",
    "m": {
      "en": "noisy",
      "zh-TW": "騒",
      "zh-CN": "騒",
      "ko": "[noisy]",
      "vi": "[noisy]",
      "id": "[noisy]",
      "es": "noisy",
      "pt": "noisy"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0456",
    "k": "疑",
    "r": "ぎ",
    "m": {
      "en": "doubt",
      "zh-TW": "疑",
      "zh-CN": "疑",
      "ko": "[doubt]",
      "vi": "[doubt]",
      "id": "[doubt]",
      "es": "doubt",
      "pt": "doubt"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0457",
    "k": "追",
    "r": "つい",
    "m": {
      "en": "chase",
      "zh-TW": "追",
      "zh-CN": "追",
      "ko": "[chase]",
      "vi": "[chase]",
      "id": "[chase]",
      "es": "chase",
      "pt": "chase"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0458",
    "k": "助",
    "r": "じょ",
    "m": {
      "en": "help",
      "zh-TW": "助",
      "zh-CN": "助",
      "ko": "[help]",
      "vi": "[help]",
      "id": "[help]",
      "es": "ayudar",
      "pt": "ajudar"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0459",
    "k": "存",
    "r": "そん",
    "m": {
      "en": "exist",
      "zh-TW": "存",
      "zh-CN": "存",
      "ko": "[exist]",
      "vi": "[exist]",
      "id": "[exist]",
      "es": "exist",
      "pt": "exist"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0460",
    "k": "忙",
    "r": "ぼう",
    "m": {
      "en": "busy",
      "zh-TW": "忙",
      "zh-CN": "忙",
      "ko": "[busy]",
      "vi": "[busy]",
      "id": "[busy]",
      "es": "ocupado",
      "pt": "ocupado"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0461",
    "k": "預",
    "r": "よ",
    "m": {
      "en": "deposit",
      "zh-TW": "預",
      "zh-CN": "預",
      "ko": "[deposit]",
      "vi": "[deposit]",
      "id": "[deposit]",
      "es": "deposit",
      "pt": "deposit"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0462",
    "k": "触",
    "r": "しょく",
    "m": {
      "en": "touch",
      "zh-TW": "触",
      "zh-CN": "触",
      "ko": "[touch]",
      "vi": "[touch]",
      "id": "[touch]",
      "es": "touch",
      "pt": "touch"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0463",
    "k": "凍",
    "r": "とう",
    "m": {
      "en": "freeze",
      "zh-TW": "凍",
      "zh-CN": "凍",
      "ko": "[freeze]",
      "vi": "[freeze]",
      "id": "[freeze]",
      "es": "freeze",
      "pt": "freeze"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0464",
    "k": "飾",
    "r": "しょく",
    "m": {
      "en": "decorate",
      "zh-TW": "飾",
      "zh-CN": "飾",
      "ko": "[decorate]",
      "vi": "[decorate]",
      "id": "[decorate]",
      "es": "decorate",
      "pt": "decorate"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0465",
    "k": "治",
    "r": "じ",
    "m": {
      "en": "govern",
      "zh-TW": "治",
      "zh-CN": "治",
      "ko": "[govern]",
      "vi": "[govern]",
      "id": "[govern]",
      "es": "govern",
      "pt": "govern"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0466",
    "k": "済",
    "r": "さい",
    "m": {
      "en": "settle",
      "zh-TW": "済",
      "zh-CN": "済",
      "ko": "[settle]",
      "vi": "[settle]",
      "id": "[settle]",
      "es": "settle",
      "pt": "settle"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0467",
    "k": "商",
    "r": "しょう",
    "m": {
      "en": "commerce",
      "zh-TW": "商",
      "zh-CN": "商",
      "ko": "[commerce]",
      "vi": "[commerce]",
      "id": "[commerce]",
      "es": "commerce",
      "pt": "commerce"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0468",
    "k": "法",
    "r": "ほう",
    "m": {
      "en": "law",
      "zh-TW": "法",
      "zh-CN": "法",
      "ko": "[law]",
      "vi": "[law]",
      "id": "[law]",
      "es": "ley",
      "pt": "lei"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0469",
    "k": "律",
    "r": "りつ",
    "m": {
      "en": "law",
      "zh-TW": "律",
      "zh-CN": "律",
      "ko": "[law]",
      "vi": "[law]",
      "id": "[law]",
      "es": "ley",
      "pt": "lei"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0470",
    "k": "官",
    "r": "かん",
    "m": {
      "en": "government",
      "zh-TW": "官",
      "zh-CN": "官",
      "ko": "[government]",
      "vi": "[government]",
      "id": "[government]",
      "es": "government",
      "pt": "government"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0471",
    "k": "省",
    "r": "しょう",
    "m": {
      "en": "ministry",
      "zh-TW": "省",
      "zh-CN": "省",
      "ko": "[ministry]",
      "vi": "[ministry]",
      "id": "[ministry]",
      "es": "ministry",
      "pt": "ministry"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0472",
    "k": "庁",
    "r": "ちょう",
    "m": {
      "en": "agency",
      "zh-TW": "庁",
      "zh-CN": "庁",
      "ko": "[agency]",
      "vi": "[agency]",
      "id": "[agency]",
      "es": "agency",
      "pt": "agency"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0473",
    "k": "各",
    "r": "かく",
    "m": {
      "en": "each",
      "zh-TW": "各",
      "zh-CN": "各",
      "ko": "[each]",
      "vi": "[each]",
      "id": "[each]",
      "es": "cada",
      "pt": "cada"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0474",
    "k": "協",
    "r": "きょう",
    "m": {
      "en": "cooperate",
      "zh-TW": "協",
      "zh-CN": "協",
      "ko": "[cooperate]",
      "vi": "[cooperate]",
      "id": "[cooperate]",
      "es": "cooperate",
      "pt": "cooperate"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0475",
    "k": "議",
    "r": "ぎ",
    "m": {
      "en": "deliberate",
      "zh-TW": "議",
      "zh-CN": "議",
      "ko": "[deliberate]",
      "vi": "[deliberate]",
      "id": "[deliberate]",
      "es": "deliberate",
      "pt": "deliberate"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0476",
    "k": "権",
    "r": "けん",
    "m": {
      "en": "right",
      "zh-TW": "権",
      "zh-CN": "権",
      "ko": "[right]",
      "vi": "[right]",
      "id": "[right]",
      "es": "correcto",
      "pt": "correto"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0477",
    "k": "党",
    "r": "とう",
    "m": {
      "en": "party",
      "zh-TW": "党",
      "zh-CN": "党",
      "ko": "[party]",
      "vi": "[party]",
      "id": "[party]",
      "es": "fiesta",
      "pt": "festa"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0478",
    "k": "案",
    "r": "あん",
    "m": {
      "en": "plan",
      "zh-TW": "案",
      "zh-CN": "案",
      "ko": "[plan]",
      "vi": "[plan]",
      "id": "[plan]",
      "es": "plan",
      "pt": "plano"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0479",
    "k": "評",
    "r": "ひょう",
    "m": {
      "en": "evaluate",
      "zh-TW": "評",
      "zh-CN": "評",
      "ko": "[evaluate]",
      "vi": "[evaluate]",
      "id": "[evaluate]",
      "es": "evaluate",
      "pt": "evaluate"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0480",
    "k": "収",
    "r": "しゅう",
    "m": {
      "en": "collect",
      "zh-TW": "収",
      "zh-CN": "収",
      "ko": "[collect]",
      "vi": "[collect]",
      "id": "[collect]",
      "es": "collect",
      "pt": "collect"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0481",
    "k": "費",
    "r": "ひ",
    "m": {
      "en": "expense",
      "zh-TW": "費",
      "zh-CN": "費",
      "ko": "[expense]",
      "vi": "[expense]",
      "id": "[expense]",
      "es": "expense",
      "pt": "expense"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0482",
    "k": "訪",
    "r": "ほう",
    "m": {
      "en": "visit",
      "zh-TW": "訪",
      "zh-CN": "訪",
      "ko": "[visit]",
      "vi": "[visit]",
      "id": "[visit]",
      "es": "visit",
      "pt": "visit"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0483",
    "k": "統",
    "r": "とう",
    "m": {
      "en": "govern",
      "zh-TW": "統",
      "zh-CN": "統",
      "ko": "[govern]",
      "vi": "[govern]",
      "id": "[govern]",
      "es": "govern",
      "pt": "govern"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0484",
    "k": "領",
    "r": "りょう",
    "m": {
      "en": "territory",
      "zh-TW": "領",
      "zh-CN": "領",
      "ko": "[territory]",
      "vi": "[territory]",
      "id": "[territory]",
      "es": "territory",
      "pt": "territory"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0485",
    "k": "域",
    "r": "いき",
    "m": {
      "en": "area",
      "zh-TW": "域",
      "zh-CN": "域",
      "ko": "[area]",
      "vi": "[area]",
      "id": "[area]",
      "es": "area",
      "pt": "area"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0486",
    "k": "諸",
    "r": "しょ",
    "m": {
      "en": "various",
      "zh-TW": "諸",
      "zh-CN": "諸",
      "ko": "[various]",
      "vi": "[various]",
      "id": "[various]",
      "es": "various",
      "pt": "various"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0487",
    "k": "輸",
    "r": "ゆ",
    "m": {
      "en": "transport",
      "zh-TW": "輸",
      "zh-CN": "輸",
      "ko": "[transport]",
      "vi": "[transport]",
      "id": "[transport]",
      "es": "transport",
      "pt": "transport"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0488",
    "k": "備",
    "r": "び",
    "m": {
      "en": "prepare",
      "zh-TW": "備",
      "zh-CN": "備",
      "ko": "[prepare]",
      "vi": "[prepare]",
      "id": "[prepare]",
      "es": "preparar",
      "pt": "preparar"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0489",
    "k": "段",
    "r": "だん",
    "m": {
      "en": "step",
      "zh-TW": "段",
      "zh-CN": "段",
      "ko": "[step]",
      "vi": "[step]",
      "id": "[step]",
      "es": "step",
      "pt": "step"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0490",
    "k": "柱",
    "r": "ちゅう",
    "m": {
      "en": "pillar",
      "zh-TW": "柱",
      "zh-CN": "柱",
      "ko": "[pillar]",
      "vi": "[pillar]",
      "id": "[pillar]",
      "es": "pillar",
      "pt": "pillar"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0491",
    "k": "路",
    "r": "ろ",
    "m": {
      "en": "road",
      "zh-TW": "路",
      "zh-CN": "路",
      "ko": "[road]",
      "vi": "[road]",
      "id": "[road]",
      "es": "camino",
      "pt": "estrada"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0492",
    "k": "複",
    "r": "ふく",
    "m": {
      "en": "duplicate",
      "zh-TW": "複",
      "zh-CN": "複",
      "ko": "[duplicate]",
      "vi": "[duplicate]",
      "id": "[duplicate]",
      "es": "duplicate",
      "pt": "duplicate"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0493",
    "k": "停",
    "r": "てい",
    "m": {
      "en": "stop",
      "zh-TW": "停",
      "zh-CN": "停",
      "ko": "[stop]",
      "vi": "[stop]",
      "id": "[stop]",
      "es": "parar",
      "pt": "parar"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0494",
    "k": "転",
    "r": "てん",
    "m": {
      "en": "revolve",
      "zh-TW": "転",
      "zh-CN": "転",
      "ko": "[revolve]",
      "vi": "[revolve]",
      "id": "[revolve]",
      "es": "revolve",
      "pt": "revolve"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0495",
    "k": "駐",
    "r": "ちゅう",
    "m": {
      "en": "stop",
      "zh-TW": "駐",
      "zh-CN": "駐",
      "ko": "[stop]",
      "vi": "[stop]",
      "id": "[stop]",
      "es": "parar",
      "pt": "parar"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0496",
    "k": "景",
    "r": "けい",
    "m": {
      "en": "scenery",
      "zh-TW": "景",
      "zh-CN": "景",
      "ko": "[scenery]",
      "vi": "[scenery]",
      "id": "[scenery]",
      "es": "scenery",
      "pt": "scenery"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0497",
    "k": "観",
    "r": "かん",
    "m": {
      "en": "view",
      "zh-TW": "観",
      "zh-CN": "観",
      "ko": "[view]",
      "vi": "[view]",
      "id": "[view]",
      "es": "view",
      "pt": "view"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0498",
    "k": "波",
    "r": "は",
    "m": {
      "en": "wave",
      "zh-TW": "波",
      "zh-CN": "波",
      "ko": "[wave]",
      "vi": "[wave]",
      "id": "[wave]",
      "es": "wave",
      "pt": "wave"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0499",
    "k": "星",
    "r": "せい",
    "m": {
      "en": "star",
      "zh-TW": "星",
      "zh-CN": "星",
      "ko": "[star]",
      "vi": "[star]",
      "id": "[star]",
      "es": "estrella",
      "pt": "estrela"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0500",
    "k": "陽",
    "r": "よう",
    "m": {
      "en": "sun",
      "zh-TW": "陽",
      "zh-CN": "陽",
      "ko": "[sun]",
      "vi": "[sun]",
      "id": "[sun]",
      "es": "sol",
      "pt": "sol"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0501",
    "k": "氷",
    "r": "ひょう",
    "m": {
      "en": "ice",
      "zh-TW": "氷",
      "zh-CN": "氷",
      "ko": "[ice]",
      "vi": "[ice]",
      "id": "[ice]",
      "es": "hielo",
      "pt": "gelo"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0502",
    "k": "深",
    "r": "しん",
    "m": {
      "en": "deep",
      "zh-TW": "深",
      "zh-CN": "深",
      "ko": "[deep]",
      "vi": "[deep]",
      "id": "[deep]",
      "es": "profundo",
      "pt": "profundo"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0503",
    "k": "浅",
    "r": "せん",
    "m": {
      "en": "shallow",
      "zh-TW": "浅",
      "zh-CN": "浅",
      "ko": "[shallow]",
      "vi": "[shallow]",
      "id": "[shallow]",
      "es": "poco profundo",
      "pt": "raso"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0504",
    "k": "害",
    "r": "がい",
    "m": {
      "en": "harm",
      "zh-TW": "害",
      "zh-CN": "害",
      "ko": "[harm]",
      "vi": "[harm]",
      "id": "[harm]",
      "es": "harm",
      "pt": "harm"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0505",
    "k": "炭",
    "r": "たん",
    "m": {
      "en": "charcoal",
      "zh-TW": "炭",
      "zh-CN": "炭",
      "ko": "[charcoal]",
      "vi": "[charcoal]",
      "id": "[charcoal]",
      "es": "charcoal",
      "pt": "charcoal"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0506",
    "k": "陸",
    "r": "りく",
    "m": {
      "en": "land",
      "zh-TW": "陸",
      "zh-CN": "陸",
      "ko": "[land]",
      "vi": "[land]",
      "id": "[land]",
      "es": "land",
      "pt": "land"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0507",
    "k": "岸",
    "r": "がん",
    "m": {
      "en": "shore",
      "zh-TW": "岸",
      "zh-CN": "岸",
      "ko": "[shore]",
      "vi": "[shore]",
      "id": "[shore]",
      "es": "shore",
      "pt": "shore"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0508",
    "k": "坂",
    "r": "さか",
    "m": {
      "en": "slope",
      "zh-TW": "坂",
      "zh-CN": "坂",
      "ko": "[slope]",
      "vi": "[slope]",
      "id": "[slope]",
      "es": "slope",
      "pt": "slope"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0509",
    "k": "砂",
    "r": "さ",
    "m": {
      "en": "sand",
      "zh-TW": "砂",
      "zh-CN": "砂",
      "ko": "[sand]",
      "vi": "[sand]",
      "id": "[sand]",
      "es": "sand",
      "pt": "sand"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0510",
    "k": "泥",
    "r": "でい",
    "m": {
      "en": "mud",
      "zh-TW": "泥",
      "zh-CN": "泥",
      "ko": "[mud]",
      "vi": "[mud]",
      "id": "[mud]",
      "es": "mud",
      "pt": "mud"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0511",
    "k": "谷",
    "r": "たに",
    "m": {
      "en": "valley",
      "zh-TW": "谷",
      "zh-CN": "谷",
      "ko": "[valley]",
      "vi": "[valley]",
      "id": "[valley]",
      "es": "valley",
      "pt": "valley"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0512",
    "k": "季",
    "r": "き",
    "m": {
      "en": "season",
      "zh-TW": "季",
      "zh-CN": "季",
      "ko": "[season]",
      "vi": "[season]",
      "id": "[season]",
      "es": "season",
      "pt": "season"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0513",
    "k": "節",
    "r": "せつ",
    "m": {
      "en": "node",
      "zh-TW": "節",
      "zh-CN": "節",
      "ko": "[node]",
      "vi": "[node]",
      "id": "[node]",
      "es": "node",
      "pt": "node"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0514",
    "k": "嵐",
    "r": "らん",
    "m": {
      "en": "storm",
      "zh-TW": "嵐",
      "zh-CN": "嵐",
      "ko": "[storm]",
      "vi": "[storm]",
      "id": "[storm]",
      "es": "storm",
      "pt": "storm"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0515",
    "k": "震",
    "r": "しん",
    "m": {
      "en": "quake",
      "zh-TW": "震",
      "zh-CN": "震",
      "ko": "[quake]",
      "vi": "[quake]",
      "id": "[quake]",
      "es": "quake",
      "pt": "quake"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0516",
    "k": "零",
    "r": "れい",
    "m": {
      "en": "zero",
      "zh-TW": "零",
      "zh-CN": "零",
      "ko": "[zero]",
      "vi": "[zero]",
      "id": "[zero]",
      "es": "zero",
      "pt": "zero"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0517",
    "k": "雲",
    "r": "うん",
    "m": {
      "en": "cloud",
      "zh-TW": "雲",
      "zh-CN": "雲",
      "ko": "[cloud]",
      "vi": "[cloud]",
      "id": "[cloud]",
      "es": "nube",
      "pt": "nuvem"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0518",
    "k": "霧",
    "r": "む",
    "m": {
      "en": "fog",
      "zh-TW": "霧",
      "zh-CN": "霧",
      "ko": "[fog]",
      "vi": "[fog]",
      "id": "[fog]",
      "es": "fog",
      "pt": "fog"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0519",
    "k": "露",
    "r": "ろ",
    "m": {
      "en": "dew",
      "zh-TW": "露",
      "zh-CN": "露",
      "ko": "[dew]",
      "vi": "[dew]",
      "id": "[dew]",
      "es": "dew",
      "pt": "dew"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0520",
    "k": "濃",
    "r": "のう",
    "m": {
      "en": "thick",
      "zh-TW": "濃",
      "zh-CN": "濃",
      "ko": "[thick]",
      "vi": "[thick]",
      "id": "[thick]",
      "es": "grueso",
      "pt": "grosso"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0521",
    "k": "浮",
    "r": "ふ",
    "m": {
      "en": "float",
      "zh-TW": "浮",
      "zh-CN": "浮",
      "ko": "[float]",
      "vi": "[float]",
      "id": "[float]",
      "es": "float",
      "pt": "float"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0522",
    "k": "最",
    "r": "さい",
    "m": {
      "en": "most",
      "zh-TW": "最",
      "zh-CN": "最",
      "ko": "[most]",
      "vi": "[most]",
      "id": "[most]",
      "es": "más",
      "pt": "mais"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0523",
    "k": "初",
    "r": "しょ",
    "m": {
      "en": "first",
      "zh-TW": "初",
      "zh-CN": "初",
      "ko": "[first]",
      "vi": "[first]",
      "id": "[first]",
      "es": "primero",
      "pt": "primeiro"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0524",
    "k": "的",
    "r": "てき",
    "m": {
      "en": "-like",
      "zh-TW": "的",
      "zh-CN": "的",
      "ko": "[-like]",
      "vi": "[-like]",
      "id": "[-like]",
      "es": "-like",
      "pt": "-like"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0525",
    "k": "化",
    "r": "か",
    "m": {
      "en": "change",
      "zh-TW": "化",
      "zh-CN": "化",
      "ko": "[change]",
      "vi": "[change]",
      "id": "[change]",
      "es": "cambiar",
      "pt": "mudar"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0526",
    "k": "難",
    "r": "なん",
    "m": {
      "en": "difficult",
      "zh-TW": "難",
      "zh-CN": "難",
      "ko": "[difficult]",
      "vi": "[difficult]",
      "id": "[difficult]",
      "es": "difícil",
      "pt": "difícil"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0527",
    "k": "適",
    "r": "てき",
    "m": {
      "en": "suitable",
      "zh-TW": "適",
      "zh-CN": "適",
      "ko": "[suitable]",
      "vi": "[suitable]",
      "id": "[suitable]",
      "es": "suitable",
      "pt": "suitable"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0528",
    "k": "全",
    "r": "ぜん",
    "m": {
      "en": "all",
      "zh-TW": "全",
      "zh-CN": "全",
      "ko": "[all]",
      "vi": "[all]",
      "id": "[all]",
      "es": "todo",
      "pt": "tudo"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0529",
    "k": "完",
    "r": "かん",
    "m": {
      "en": "complete",
      "zh-TW": "完",
      "zh-CN": "完",
      "ko": "[complete]",
      "vi": "[complete]",
      "id": "[complete]",
      "es": "complete",
      "pt": "complete"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0530",
    "k": "成",
    "r": "せい",
    "m": {
      "en": "become",
      "zh-TW": "成",
      "zh-CN": "成",
      "ko": "[become]",
      "vi": "[become]",
      "id": "[become]",
      "es": "become",
      "pt": "become"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0531",
    "k": "認",
    "r": "にん",
    "m": {
      "en": "recognize",
      "zh-TW": "認",
      "zh-CN": "認",
      "ko": "[recognize]",
      "vi": "[recognize]",
      "id": "[recognize]",
      "es": "recognize",
      "pt": "recognize"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0532",
    "k": "神",
    "r": "しん",
    "m": {
      "en": "god",
      "zh-TW": "神",
      "zh-CN": "神",
      "ko": "[god]",
      "vi": "[god]",
      "id": "[god]",
      "es": "dios",
      "pt": "deus"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0533",
    "k": "詳",
    "r": "しょう",
    "m": {
      "en": "detailed",
      "zh-TW": "詳",
      "zh-CN": "詳",
      "ko": "[detailed]",
      "vi": "[detailed]",
      "id": "[detailed]",
      "es": "detailed",
      "pt": "detailed"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0534",
    "k": "能",
    "r": "のう",
    "m": {
      "en": "ability",
      "zh-TW": "能",
      "zh-CN": "能",
      "ko": "[ability]",
      "vi": "[ability]",
      "id": "[ability]",
      "es": "ability",
      "pt": "ability"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0535",
    "k": "満",
    "r": "まん",
    "m": {
      "en": "full",
      "zh-TW": "満",
      "zh-CN": "満",
      "ko": "[full]",
      "vi": "[full]",
      "id": "[full]",
      "es": "lleno",
      "pt": "cheio"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0536",
    "k": "豊",
    "r": "ほう",
    "m": {
      "en": "abundant",
      "zh-TW": "豊",
      "zh-CN": "豊",
      "ko": "[abundant]",
      "vi": "[abundant]",
      "id": "[abundant]",
      "es": "abundant",
      "pt": "abundant"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0537",
    "k": "富",
    "r": "ふ",
    "m": {
      "en": "wealth",
      "zh-TW": "富",
      "zh-CN": "富",
      "ko": "[wealth]",
      "vi": "[wealth]",
      "id": "[wealth]",
      "es": "wealth",
      "pt": "wealth"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0538",
    "k": "密",
    "r": "みつ",
    "m": {
      "en": "dense",
      "zh-TW": "密",
      "zh-CN": "密",
      "ko": "[dense]",
      "vi": "[dense]",
      "id": "[dense]",
      "es": "dense",
      "pt": "dense"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0539",
    "k": "異",
    "r": "い",
    "m": {
      "en": "different",
      "zh-TW": "異",
      "zh-CN": "異",
      "ko": "[different]",
      "vi": "[different]",
      "id": "[different]",
      "es": "diferente",
      "pt": "diferente"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0540",
    "k": "差",
    "r": "さ（す）",
    "m": {
      "en": "difference",
      "zh-TW": "差",
      "zh-CN": "差",
      "ko": "[difference]",
      "vi": "[difference]",
      "id": "[difference]",
      "es": "difference",
      "pt": "difference"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0541",
    "k": "等",
    "r": "とう",
    "m": {
      "en": "equal",
      "zh-TW": "等",
      "zh-CN": "等",
      "ko": "[equal]",
      "vi": "[equal]",
      "id": "[equal]",
      "es": "igual",
      "pt": "igual"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0542",
    "k": "激",
    "r": "げき",
    "m": {
      "en": "intense",
      "zh-TW": "激",
      "zh-CN": "激",
      "ko": "[intense]",
      "vi": "[intense]",
      "id": "[intense]",
      "es": "intense",
      "pt": "intense"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0543",
    "k": "鈍",
    "r": "どん",
    "m": {
      "en": "dull",
      "zh-TW": "鈍",
      "zh-CN": "鈍",
      "ko": "[dull]",
      "vi": "[dull]",
      "id": "[dull]",
      "es": "dull",
      "pt": "dull"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0544",
    "k": "涼",
    "r": "りょう",
    "m": {
      "en": "cool",
      "zh-TW": "涼",
      "zh-CN": "涼",
      "ko": "[cool]",
      "vi": "[cool]",
      "id": "[cool]",
      "es": "fresco",
      "pt": "fresco"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0545",
    "k": "暖",
    "r": "だん",
    "m": {
      "en": "warm",
      "zh-TW": "暖",
      "zh-CN": "暖",
      "ko": "[warm]",
      "vi": "[warm]",
      "id": "[warm]",
      "es": "tibio",
      "pt": "morno"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0546",
    "k": "簡",
    "r": "かん",
    "m": {
      "en": "simple",
      "zh-TW": "簡",
      "zh-CN": "簡",
      "ko": "[simple]",
      "vi": "[simple]",
      "id": "[simple]",
      "es": "simple",
      "pt": "simples"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0547",
    "k": "単",
    "r": "たん",
    "m": {
      "en": "simple",
      "zh-TW": "単",
      "zh-CN": "単",
      "ko": "[simple]",
      "vi": "[simple]",
      "id": "[simple]",
      "es": "simple",
      "pt": "simples"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0548",
    "k": "暇",
    "r": "か",
    "m": {
      "en": "leisure",
      "zh-TW": "暇",
      "zh-CN": "暇",
      "ko": "[leisure]",
      "vi": "[leisure]",
      "id": "[leisure]",
      "es": "leisure",
      "pt": "leisure"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0549",
    "k": "盛",
    "r": "せい",
    "m": {
      "en": "prosper",
      "zh-TW": "盛",
      "zh-CN": "盛",
      "ko": "[prosper]",
      "vi": "[prosper]",
      "id": "[prosper]",
      "es": "prosper",
      "pt": "prosper"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0550",
    "k": "著",
    "r": "ちょ",
    "m": {
      "en": "author",
      "zh-TW": "著",
      "zh-CN": "著",
      "ko": "[author]",
      "vi": "[author]",
      "id": "[author]",
      "es": "author",
      "pt": "author"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0551",
    "k": "軟",
    "r": "なん",
    "m": {
      "en": "soft",
      "zh-TW": "軟",
      "zh-CN": "軟",
      "ko": "[soft]",
      "vi": "[soft]",
      "id": "[soft]",
      "es": "suave",
      "pt": "macio"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0552",
    "k": "毒",
    "r": "どく",
    "m": {
      "en": "poison",
      "zh-TW": "毒",
      "zh-CN": "毒",
      "ko": "[poison]",
      "vi": "[poison]",
      "id": "[poison]",
      "es": "poison",
      "pt": "poison"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0553",
    "k": "妙",
    "r": "みょう",
    "m": {
      "en": "strange",
      "zh-TW": "妙",
      "zh-CN": "妙",
      "ko": "[strange]",
      "vi": "[strange]",
      "id": "[strange]",
      "es": "extraño",
      "pt": "estranho"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0554",
    "k": "奇",
    "r": "き",
    "m": {
      "en": "strange",
      "zh-TW": "奇",
      "zh-CN": "奇",
      "ko": "[strange]",
      "vi": "[strange]",
      "id": "[strange]",
      "es": "extraño",
      "pt": "estranho"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0555",
    "k": "器",
    "r": "き",
    "m": {
      "en": "vessel",
      "zh-TW": "器",
      "zh-CN": "器",
      "ko": "[vessel]",
      "vi": "[vessel]",
      "id": "[vessel]",
      "es": "vessel",
      "pt": "vessel"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0556",
    "k": "機",
    "r": "き",
    "m": {
      "en": "machine",
      "zh-TW": "機",
      "zh-CN": "機",
      "ko": "[machine]",
      "vi": "[machine]",
      "id": "[machine]",
      "es": "máquina",
      "pt": "máquina"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0557",
    "k": "種",
    "r": "しゅ",
    "m": {
      "en": "seed",
      "zh-TW": "種",
      "zh-CN": "種",
      "ko": "[seed]",
      "vi": "[seed]",
      "id": "[seed]",
      "es": "seed",
      "pt": "seed"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0558",
    "k": "類",
    "r": "るい",
    "m": {
      "en": "kind",
      "zh-TW": "類",
      "zh-CN": "類",
      "ko": "[kind]",
      "vi": "[kind]",
      "id": "[kind]",
      "es": "kind",
      "pt": "kind"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0559",
    "k": "量",
    "r": "りょう",
    "m": {
      "en": "quantity",
      "zh-TW": "量",
      "zh-CN": "量",
      "ko": "[quantity]",
      "vi": "[quantity]",
      "id": "[quantity]",
      "es": "quantity",
      "pt": "quantity"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0560",
    "k": "熱",
    "r": "ねつ",
    "m": {
      "en": "heat",
      "zh-TW": "熱",
      "zh-CN": "熱",
      "ko": "[heat]",
      "vi": "[heat]",
      "id": "[heat]",
      "es": "calentar",
      "pt": "aquecer"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0561",
    "k": "温",
    "r": "おん",
    "m": {
      "en": "warm",
      "zh-TW": "温",
      "zh-CN": "温",
      "ko": "[warm]",
      "vi": "[warm]",
      "id": "[warm]",
      "es": "tibio",
      "pt": "morno"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0562",
    "k": "筒",
    "r": "とう",
    "m": {
      "en": "cylinder",
      "zh-TW": "筒",
      "zh-CN": "筒",
      "ko": "[cylinder]",
      "vi": "[cylinder]",
      "id": "[cylinder]",
      "es": "cylinder",
      "pt": "cylinder"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0563",
    "k": "瓶",
    "r": "びん",
    "m": {
      "en": "bottle",
      "zh-TW": "瓶",
      "zh-CN": "瓶",
      "ko": "[bottle]",
      "vi": "[bottle]",
      "id": "[bottle]",
      "es": "bottle",
      "pt": "bottle"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0564",
    "k": "箱",
    "r": "はこ",
    "m": {
      "en": "box",
      "zh-TW": "箱",
      "zh-CN": "箱",
      "ko": "[box]",
      "vi": "[box]",
      "id": "[box]",
      "es": "caja",
      "pt": "caixa"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0565",
    "k": "棒",
    "r": "ぼう",
    "m": {
      "en": "stick",
      "zh-TW": "棒",
      "zh-CN": "棒",
      "ko": "[stick]",
      "vi": "[stick]",
      "id": "[stick]",
      "es": "stick",
      "pt": "stick"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0566",
    "k": "札",
    "r": "さつ",
    "m": {
      "en": "bill",
      "zh-TW": "札",
      "zh-CN": "札",
      "ko": "[bill]",
      "vi": "[bill]",
      "id": "[bill]",
      "es": "bill",
      "pt": "bill"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0567",
    "k": "劇",
    "r": "げき",
    "m": {
      "en": "drama",
      "zh-TW": "劇",
      "zh-CN": "劇",
      "ko": "[drama]",
      "vi": "[drama]",
      "id": "[drama]",
      "es": "drama",
      "pt": "drama"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0568",
    "k": "詞",
    "r": "し",
    "m": {
      "en": "words",
      "zh-TW": "詞",
      "zh-CN": "詞",
      "ko": "[words]",
      "vi": "[words]",
      "id": "[words]",
      "es": "words",
      "pt": "words"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0569",
    "k": "録",
    "r": "ろく",
    "m": {
      "en": "record",
      "zh-TW": "録",
      "zh-CN": "録",
      "ko": "[record]",
      "vi": "[record]",
      "id": "[record]",
      "es": "record",
      "pt": "record"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0570",
    "k": "編",
    "r": "へん",
    "m": {
      "en": "compile",
      "zh-TW": "編",
      "zh-CN": "編",
      "ko": "[compile]",
      "vi": "[compile]",
      "id": "[compile]",
      "es": "compile",
      "pt": "compile"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0571",
    "k": "戻",
    "r": "もど（す）",
    "m": {
      "en": "return",
      "zh-TW": "戻",
      "zh-CN": "戻",
      "ko": "[return]",
      "vi": "[return]",
      "id": "[return]",
      "es": "volver",
      "pt": "voltar"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0572",
    "k": "辞",
    "r": "じ",
    "m": {
      "en": "resign",
      "zh-TW": "辞",
      "zh-CN": "辞",
      "ko": "[resign]",
      "vi": "[resign]",
      "id": "[resign]",
      "es": "resign",
      "pt": "resign"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0573",
    "k": "策",
    "r": "さく",
    "m": {
      "en": "plan",
      "zh-TW": "策",
      "zh-CN": "策",
      "ko": "[plan]",
      "vi": "[plan]",
      "id": "[plan]",
      "es": "plan",
      "pt": "plano"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0574",
    "k": "略",
    "r": "りゃく",
    "m": {
      "en": "abbreviation",
      "zh-TW": "略",
      "zh-CN": "略",
      "ko": "[abbreviation]",
      "vi": "[abbreviation]",
      "id": "[abbreviation]",
      "es": "abbreviation",
      "pt": "abbreviation"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0575",
    "k": "標",
    "r": "ひょう",
    "m": {
      "en": "mark",
      "zh-TW": "標",
      "zh-CN": "標",
      "ko": "[mark]",
      "vi": "[mark]",
      "id": "[mark]",
      "es": "mark",
      "pt": "mark"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0576",
    "k": "皿",
    "r": "さら",
    "m": {
      "en": "plate",
      "zh-TW": "皿",
      "zh-CN": "皿",
      "ko": "[plate]",
      "vi": "[plate]",
      "id": "[plate]",
      "es": "plate",
      "pt": "plate"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0577",
    "k": "両",
    "r": "りょう",
    "m": {
      "en": "both",
      "zh-TW": "両",
      "zh-CN": "両",
      "ko": "[both]",
      "vi": "[both]",
      "id": "[both]",
      "es": "ambos",
      "pt": "ambos"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  }
];