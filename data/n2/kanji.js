// Fujisan.AI Data
// Count: 663

const N2_KANJI = [
  {
    "id": "K0001",
    "k": "亜",
    "r": "あ",
    "m": {
      "en": "sub-",
      "zh-TW": "亞",
      "zh-CN": "亚",
      "ko": "아",
      "vi": "á",
      "id": "sub-",
      "es": "sub-",
      "pt": "sub-"
    }
  },
  {
    "id": "K0002",
    "k": "哀",
    "r": "あわ（れ）、あい",
    "m": {
      "en": "sorrow",
      "zh-TW": "哀",
      "zh-CN": "哀",
      "ko": "애",
      "vi": "bi ai",
      "id": "sedih",
      "es": "sorrow",
      "pt": "sorrow"
    }
  },
  {
    "id": "K0003",
    "k": "挨",
    "r": "あい",
    "m": {
      "en": "greet",
      "zh-TW": "挨",
      "zh-CN": "挨",
      "ko": "애",
      "vi": "chào",
      "id": "salam",
      "es": "greet",
      "pt": "greet"
    }
  },
  {
    "id": "K0004",
    "k": "曖",
    "r": "あい",
    "m": {
      "en": "ambiguous",
      "zh-TW": "曖",
      "zh-CN": "暧",
      "ko": "애",
      "vi": "mờ",
      "id": "samar",
      "es": "ambiguous",
      "pt": "ambiguous"
    }
  },
  {
    "id": "K0005",
    "k": "宛",
    "r": "あ（てる）、えん",
    "m": {
      "en": "address",
      "zh-TW": "宛",
      "zh-CN": "宛",
      "ko": "완",
      "vi": "gửi",
      "id": "alamat",
      "es": "address",
      "pt": "address"
    }
  },
  {
    "id": "K0006",
    "k": "威",
    "r": "い",
    "m": {
      "en": "dignity",
      "zh-TW": "威",
      "zh-CN": "威",
      "ko": "위",
      "vi": "uy",
      "id": "wibawa",
      "es": "dignity",
      "pt": "dignity"
    }
  },
  {
    "id": "K0007",
    "k": "為",
    "r": "な（す）、い",
    "m": {
      "en": "do",
      "zh-TW": "為",
      "zh-CN": "为",
      "ko": "위",
      "vi": "làm",
      "id": "melakukan",
      "es": "do",
      "pt": "do"
    }
  },
  {
    "id": "K0008",
    "k": "畏",
    "r": "おそ（れる）、い",
    "m": {
      "en": "fear",
      "zh-TW": "畏",
      "zh-CN": "畏",
      "ko": "외",
      "vi": "sợ",
      "id": "takut",
      "es": "fear",
      "pt": "fear"
    }
  },
  {
    "id": "K0009",
    "k": "尉",
    "r": "い",
    "m": {
      "en": "military rank",
      "zh-TW": "尉",
      "zh-CN": "尉",
      "ko": "위",
      "vi": "úy",
      "id": "perwira",
      "es": "military rank",
      "pt": "military rank"
    }
  },
  {
    "id": "K0010",
    "k": "萎",
    "r": "な（す）、い",
    "m": {
      "en": "wilt",
      "zh-TW": "萎",
      "zh-CN": "萎",
      "ko": "위",
      "vi": "héo",
      "id": "layu",
      "es": "wilt",
      "pt": "wilt"
    }
  },
  {
    "id": "K0011",
    "k": "椅",
    "r": "い",
    "m": {
      "en": "chair",
      "zh-TW": "椅",
      "zh-CN": "椅",
      "ko": "의",
      "vi": "ghế",
      "id": "kursi",
      "es": "silla",
      "pt": "cadeira"
    }
  },
  {
    "id": "K0012",
    "k": "彙",
    "r": "い",
    "m": {
      "en": "collection",
      "zh-TW": "彙",
      "zh-CN": "汇",
      "ko": "휘",
      "vi": "tập",
      "id": "kumpulan",
      "es": "collection",
      "pt": "collection"
    }
  },
  {
    "id": "K0013",
    "k": "淫",
    "r": "いん",
    "m": {
      "en": "lewd",
      "zh-TW": "淫",
      "zh-CN": "淫",
      "ko": "음",
      "vi": "dâm",
      "id": "cabul",
      "es": "lewd",
      "pt": "lewd"
    }
  },
  {
    "id": "K0014",
    "k": "詠",
    "r": "よ（む）、えい",
    "m": {
      "en": "compose",
      "zh-TW": "詠",
      "zh-CN": "咏",
      "ko": "영",
      "vi": "ngâm",
      "id": "menggubah",
      "es": "compose",
      "pt": "compose"
    }
  },
  {
    "id": "K0015",
    "k": "越",
    "r": "こ（える）、えつ",
    "m": {
      "en": "cross",
      "zh-TW": "越",
      "zh-CN": "越",
      "ko": "월",
      "vi": "vượt",
      "id": "melewati",
      "es": "cross",
      "pt": "cross"
    }
  },
  {
    "id": "K0016",
    "k": "宴",
    "r": "うたげ、えん",
    "m": {
      "en": "banquet",
      "zh-TW": "宴",
      "zh-CN": "宴",
      "ko": "연",
      "vi": "tiệc",
      "id": "pesta",
      "es": "banquet",
      "pt": "banquet"
    }
  },
  {
    "id": "K0017",
    "k": "艶",
    "r": "つや、えん",
    "m": {
      "en": "gloss",
      "zh-TW": "艷",
      "zh-CN": "艳",
      "ko": "염",
      "vi": "sắc",
      "id": "kilau",
      "es": "gloss",
      "pt": "gloss"
    }
  },
  {
    "id": "K0018",
    "k": "諧",
    "r": "かい",
    "m": {
      "en": "harmony",
      "zh-TW": "諧",
      "zh-CN": "谐",
      "ko": "해",
      "vi": "hài",
      "id": "harmoni",
      "es": "harmony",
      "pt": "harmony"
    }
  },
  {
    "id": "K0019",
    "k": "閣",
    "r": "かく",
    "m": {
      "en": "tower",
      "zh-TW": "閣",
      "zh-CN": "阁",
      "ko": "각",
      "vi": "gác",
      "id": "menara",
      "es": "tower",
      "pt": "tower"
    }
  },
  {
    "id": "K0020",
    "k": "穫",
    "r": "かく",
    "m": {
      "en": "harvest",
      "zh-TW": "穫",
      "zh-CN": "获",
      "ko": "확",
      "vi": "gặt",
      "id": "panen",
      "es": "harvest",
      "pt": "harvest"
    }
  },
  {
    "id": "K0021",
    "k": "獲",
    "r": "え（る）、かく",
    "m": {
      "en": "obtain",
      "zh-TW": "獲",
      "zh-CN": "获",
      "ko": "획",
      "vi": "được",
      "id": "memperoleh",
      "es": "obtain",
      "pt": "obtain"
    }
  },
  {
    "id": "K0022",
    "k": "嚇",
    "r": "かく",
    "m": {
      "en": "threaten",
      "zh-TW": "嚇",
      "zh-CN": "吓",
      "ko": "혁",
      "vi": "dọa",
      "id": "mengancam",
      "es": "threaten",
      "pt": "threaten"
    }
  },
  {
    "id": "K0023",
    "k": "且",
    "r": "か（つ）、しょ",
    "m": {
      "en": "moreover",
      "zh-TW": "且",
      "zh-CN": "且",
      "ko": "차",
      "vi": "vả lại",
      "id": "lagi pula",
      "es": "moreover",
      "pt": "moreover"
    }
  },
  {
    "id": "K0024",
    "k": "釜",
    "r": "かま、ふ",
    "m": {
      "en": "kettle",
      "zh-TW": "釜",
      "zh-CN": "釜",
      "ko": "부",
      "vi": "nồi",
      "id": "ketel",
      "es": "kettle",
      "pt": "kettle"
    }
  },
  {
    "id": "K0025",
    "k": "鎌",
    "r": "かま、れん",
    "m": {
      "en": "sickle",
      "zh-TW": "鎌",
      "zh-CN": "镰",
      "ko": "겸",
      "vi": "liềm",
      "id": "sabit",
      "es": "sickle",
      "pt": "sickle"
    }
  },
  {
    "id": "K0026",
    "k": "瓦",
    "r": "かわら、が",
    "m": {
      "en": "tile",
      "zh-TW": "瓦",
      "zh-CN": "瓦",
      "ko": "와",
      "vi": "ngói",
      "id": "genteng",
      "es": "tile",
      "pt": "tile"
    }
  },
  {
    "id": "K0027",
    "k": "乾",
    "r": "かわ（く）、かん",
    "m": {
      "en": "dry",
      "zh-TW": "乾",
      "zh-CN": "干",
      "ko": "건",
      "vi": "khô",
      "id": "kering",
      "es": "seco",
      "pt": "seco"
    }
  },
  {
    "id": "K0028",
    "k": "甘",
    "r": "あま（い）、かん",
    "m": {
      "en": "sweet",
      "zh-TW": "甘",
      "zh-CN": "甘",
      "ko": "감",
      "vi": "ngọt",
      "id": "manis",
      "es": "sweet",
      "pt": "sweet"
    }
  },
  {
    "id": "K0029",
    "k": "岐",
    "r": "き",
    "m": {
      "en": "branch",
      "zh-TW": "岐",
      "zh-CN": "岐",
      "ko": "기",
      "vi": "ngã",
      "id": "cabang",
      "es": "branch",
      "pt": "branch"
    }
  },
  {
    "id": "K0030",
    "k": "忌",
    "r": "い（む）、き",
    "m": {
      "en": "mourning",
      "zh-TW": "忌",
      "zh-CN": "忌",
      "ko": "기",
      "vi": "kỵ",
      "id": "berkabung",
      "es": "mourning",
      "pt": "mourning"
    }
  },
  {
    "id": "K0031",
    "k": "既",
    "r": "すで（に）、き",
    "m": {
      "en": "already",
      "zh-TW": "既",
      "zh-CN": "既",
      "ko": "기",
      "vi": "đã",
      "id": "sudah",
      "es": "already",
      "pt": "already"
    }
  },
  {
    "id": "K0032",
    "k": "棋",
    "r": "き",
    "m": {
      "en": "chess",
      "zh-TW": "棋",
      "zh-CN": "棋",
      "ko": "기",
      "vi": "cờ",
      "id": "catur",
      "es": "chess",
      "pt": "chess"
    }
  },
  {
    "id": "K0033",
    "k": "畿",
    "r": "き",
    "m": {
      "en": "capital",
      "zh-TW": "畿",
      "zh-CN": "畿",
      "ko": "기",
      "vi": "kỳ",
      "id": "ibukota",
      "es": "capital",
      "pt": "capital"
    }
  },
  {
    "id": "K0034",
    "k": "軌",
    "r": "き",
    "m": {
      "en": "track",
      "zh-TW": "軌",
      "zh-CN": "轨",
      "ko": "궤",
      "vi": "đường ray",
      "id": "rel",
      "es": "track",
      "pt": "track"
    }
  },
  {
    "id": "K0035",
    "k": "欺",
    "r": "あざむ（く）、ぎ",
    "m": {
      "en": "deceive",
      "zh-TW": "欺",
      "zh-CN": "欺",
      "ko": "기",
      "vi": "lừa",
      "id": "menipu",
      "es": "deceive",
      "pt": "deceive"
    }
  },
  {
    "id": "K0036",
    "k": "巨",
    "r": "きょ",
    "m": {
      "en": "giant",
      "zh-TW": "巨",
      "zh-CN": "巨",
      "ko": "거",
      "vi": "khổng lồ",
      "id": "raksasa",
      "es": "giant",
      "pt": "giant"
    }
  },
  {
    "id": "K0037",
    "k": "距",
    "r": "きょ",
    "m": {
      "en": "distance",
      "zh-TW": "距",
      "zh-CN": "距",
      "ko": "거",
      "vi": "cách",
      "id": "jarak",
      "es": "distance",
      "pt": "distance"
    }
  },
  {
    "id": "K0038",
    "k": "克",
    "r": "こく",
    "m": {
      "en": "overcome",
      "zh-TW": "克",
      "zh-CN": "克",
      "ko": "극",
      "vi": "khắc",
      "id": "mengatasi",
      "es": "overcome",
      "pt": "overcome"
    }
  },
  {
    "id": "K0039",
    "k": "刻",
    "r": "きざ（む）、こく",
    "m": {
      "en": "carve",
      "zh-TW": "刻",
      "zh-CN": "刻",
      "ko": "각",
      "vi": "khắc",
      "id": "mengukir",
      "es": "carve",
      "pt": "carve"
    }
  },
  {
    "id": "K0040",
    "k": "酷",
    "r": "こく",
    "m": {
      "en": "cruel",
      "zh-TW": "酷",
      "zh-CN": "酷",
      "ko": "혹",
      "vi": "tàn khốc",
      "id": "kejam",
      "es": "cruel",
      "pt": "cruel"
    }
  },
  {
    "id": "K0041",
    "k": "獄",
    "r": "ごく",
    "m": {
      "en": "prison",
      "zh-TW": "獄",
      "zh-CN": "狱",
      "ko": "옥",
      "vi": "ngục",
      "id": "penjara",
      "es": "prison",
      "pt": "prison"
    }
  },
  {
    "id": "K0042",
    "k": "墾",
    "r": "こん",
    "m": {
      "en": "cultivate",
      "zh-TW": "墾",
      "zh-CN": "垦",
      "ko": "간",
      "vi": "khai hoang",
      "id": "membuka lahan",
      "es": "cultivate",
      "pt": "cultivate"
    }
  },
  {
    "id": "K0043",
    "k": "恨",
    "r": "うら、こん",
    "m": {
      "en": "grudge",
      "zh-TW": "恨",
      "zh-CN": "恨",
      "ko": "한",
      "vi": "hận",
      "id": "dendam",
      "es": "grudge",
      "pt": "grudge"
    }
  },
  {
    "id": "K0044",
    "k": "懇",
    "r": "ねんご（ろ）、こん",
    "m": {
      "en": "sincere",
      "zh-TW": "懇",
      "zh-CN": "恳",
      "ko": "간",
      "vi": "tha thiết",
      "id": "tulus",
      "es": "sincere",
      "pt": "sincere"
    }
  },
  {
    "id": "K0045",
    "k": "昆",
    "r": "こん",
    "m": {
      "en": "insect",
      "zh-TW": "昆",
      "zh-CN": "昆",
      "ko": "곤",
      "vi": "côn trùng",
      "id": "serangga",
      "es": "insect",
      "pt": "insect"
    }
  },
  {
    "id": "K0046",
    "k": "紺",
    "r": "こん",
    "m": {
      "en": "navy blue",
      "zh-TW": "紺",
      "zh-CN": "绀",
      "ko": "감",
      "vi": "xanh đậm",
      "id": "biru tua",
      "es": "navy blue",
      "pt": "navy blue"
    }
  },
  {
    "id": "K0047",
    "k": "魂",
    "r": "たましい、こん",
    "m": {
      "en": "soul",
      "zh-TW": "魂",
      "zh-CN": "魂",
      "ko": "혼",
      "vi": "hồn",
      "id": "jiwa",
      "es": "soul",
      "pt": "soul"
    }
  },
  {
    "id": "K0048",
    "k": "佐",
    "r": "さ",
    "m": {
      "en": "help",
      "zh-TW": "佐",
      "zh-CN": "佐",
      "ko": "좌",
      "vi": "tá",
      "id": "membantu",
      "es": "ayudar",
      "pt": "ajudar"
    }
  },
  {
    "id": "K0049",
    "k": "唆",
    "r": "そそのか（す）、さ",
    "m": {
      "en": "tempt",
      "zh-TW": "唆",
      "zh-CN": "唆",
      "ko": "사",
      "vi": "xúi",
      "id": "menggoda",
      "es": "tempt",
      "pt": "tempt"
    }
  },
  {
    "id": "K0050",
    "k": "詐",
    "r": "さ",
    "m": {
      "en": "deceive",
      "zh-TW": "詐",
      "zh-CN": "诈",
      "ko": "사",
      "vi": "lừa",
      "id": "menipu",
      "es": "deceive",
      "pt": "deceive"
    }
  },
  {
    "id": "K0051",
    "k": "鎖",
    "r": "くさり、さ",
    "m": {
      "en": "chain",
      "zh-TW": "鎖",
      "zh-CN": "锁",
      "ko": "쇄",
      "vi": "xích",
      "id": "rantai",
      "es": "chain",
      "pt": "chain"
    }
  },
  {
    "id": "K0052",
    "k": "債",
    "r": "さい",
    "m": {
      "en": "debt",
      "zh-TW": "債",
      "zh-CN": "债",
      "ko": "채",
      "vi": "nợ",
      "id": "utang",
      "es": "debt",
      "pt": "debt"
    }
  },
  {
    "id": "K0053",
    "k": "催",
    "r": "もよお（す）、さい",
    "m": {
      "en": "hold",
      "zh-TW": "催",
      "zh-CN": "催",
      "ko": "최",
      "vi": "tổ chức",
      "id": "mengadakan",
      "es": "sostener",
      "pt": "segurar"
    }
  },
  {
    "id": "K0054",
    "k": "塞",
    "r": "ふさ（ぐ）、さい",
    "m": {
      "en": "block",
      "zh-TW": "塞",
      "zh-CN": "塞",
      "ko": "새",
      "vi": "bịt",
      "id": "menyumbat",
      "es": "block",
      "pt": "block"
    }
  },
  {
    "id": "K0055",
    "k": "宰",
    "r": "さい",
    "m": {
      "en": "manage",
      "zh-TW": "宰",
      "zh-CN": "宰",
      "ko": "재",
      "vi": "tể",
      "id": "mengelola",
      "es": "manage",
      "pt": "manage"
    }
  },
  {
    "id": "K0056",
    "k": "彩",
    "r": "いろど（る）、さい",
    "m": {
      "en": "color",
      "zh-TW": "彩",
      "zh-CN": "彩",
      "ko": "채",
      "vi": "màu",
      "id": "warna",
      "es": "color",
      "pt": "cor"
    }
  },
  {
    "id": "K0057",
    "k": "栽",
    "r": "さい",
    "m": {
      "en": "plant",
      "zh-TW": "栽",
      "zh-CN": "栽",
      "ko": "재",
      "vi": "trồng",
      "id": "menanam",
      "es": "plant",
      "pt": "plant"
    }
  },
  {
    "id": "K0058",
    "k": "歳",
    "r": "さい",
    "m": {
      "en": "year",
      "zh-TW": "歲",
      "zh-CN": "岁",
      "ko": "세",
      "vi": "tuổi",
      "id": "tahun",
      "es": "año",
      "pt": "ano"
    }
  },
  {
    "id": "K0059",
    "k": "砕",
    "r": "くだ、さい",
    "m": {
      "en": "crush",
      "zh-TW": "碎",
      "zh-CN": "碎",
      "ko": "쇄",
      "vi": "nghiền",
      "id": "menghancurkan",
      "es": "crush",
      "pt": "crush"
    }
  },
  {
    "id": "K0060",
    "k": "斎",
    "r": "さい",
    "m": {
      "en": "purify",
      "zh-TW": "齋",
      "zh-CN": "斋",
      "ko": "재",
      "vi": "trai",
      "id": "memurnikan",
      "es": "purify",
      "pt": "purify"
    }
  },
  {
    "id": "K0061",
    "k": "載",
    "r": "の（せる）、さい",
    "m": {
      "en": "load",
      "zh-TW": "載",
      "zh-CN": "载",
      "ko": "재",
      "vi": "chở",
      "id": "memuat",
      "es": "load",
      "pt": "load"
    }
  },
  {
    "id": "K0062",
    "k": "剤",
    "r": "ざい",
    "m": {
      "en": "medicine",
      "zh-TW": "劑",
      "zh-CN": "剂",
      "ko": "제",
      "vi": "thuốc",
      "id": "obat",
      "es": "medicina",
      "pt": "remédio"
    }
  },
  {
    "id": "K0063",
    "k": "咲",
    "r": "さ（す）、しょう",
    "m": {
      "en": "bloom",
      "zh-TW": "咲",
      "zh-CN": "咲",
      "ko": "소",
      "vi": "nở",
      "id": "mekar",
      "es": "bloom",
      "pt": "bloom"
    }
  },
  {
    "id": "K0064",
    "k": "柵",
    "r": "さく",
    "m": {
      "en": "fence",
      "zh-TW": "柵",
      "zh-CN": "栅",
      "ko": "책",
      "vi": "hàng rào",
      "id": "pagar",
      "es": "fence",
      "pt": "fence"
    }
  },
  {
    "id": "K0065",
    "k": "索",
    "r": "さく",
    "m": {
      "en": "search",
      "zh-TW": "索",
      "zh-CN": "索",
      "ko": "색",
      "vi": "tìm",
      "id": "mencari",
      "es": "buscar",
      "pt": "procurar"
    }
  },
  {
    "id": "K0066",
    "k": "錯",
    "r": "さく",
    "m": {
      "en": "mix",
      "zh-TW": "錯",
      "zh-CN": "错",
      "ko": "착",
      "vi": "lẫn",
      "id": "bercampur",
      "es": "mezclar",
      "pt": "misturar"
    }
  },
  {
    "id": "K0067",
    "k": "削",
    "r": "けず（る）、さく",
    "m": {
      "en": "shave",
      "zh-TW": "削",
      "zh-CN": "削",
      "ko": "삭",
      "vi": "gọt",
      "id": "mengikis",
      "es": "shave",
      "pt": "shave"
    }
  },
  {
    "id": "K0068",
    "k": "搾",
    "r": "しぼ（る）、さく",
    "m": {
      "en": "squeeze",
      "zh-TW": "搾",
      "zh-CN": "榨",
      "ko": "착",
      "vi": "vắt",
      "id": "memeras",
      "es": "squeeze",
      "pt": "squeeze"
    }
  },
  {
    "id": "K0069",
    "k": "擦",
    "r": "す（る）、さつ",
    "m": {
      "en": "rub",
      "zh-TW": "擦",
      "zh-CN": "擦",
      "ko": "찰",
      "vi": "chà",
      "id": "menggosok",
      "es": "rub",
      "pt": "rub"
    }
  },
  {
    "id": "K0070",
    "k": "撮",
    "r": "と（る）、さつ",
    "m": {
      "en": "take",
      "zh-TW": "撮",
      "zh-CN": "摄",
      "ko": "촬",
      "vi": "chụp",
      "id": "mengambil",
      "es": "tomar",
      "pt": "tomar"
    }
  },
  {
    "id": "K0071",
    "k": "惨",
    "r": "みじ（め）、さん",
    "m": {
      "en": "cruel",
      "zh-TW": "慘",
      "zh-CN": "惨",
      "ko": "참",
      "vi": "thảm",
      "id": "mengerikan",
      "es": "cruel",
      "pt": "cruel"
    }
  },
  {
    "id": "K0072",
    "k": "桟",
    "r": "さん",
    "m": {
      "en": "scaffold",
      "zh-TW": "棧",
      "zh-CN": "栈",
      "ko": "잔",
      "vi": "giàn",
      "id": "perancah",
      "es": "scaffold",
      "pt": "scaffold"
    }
  },
  {
    "id": "K0073",
    "k": "傘",
    "r": "かさ、さん",
    "m": {
      "en": "umbrella",
      "zh-TW": "傘",
      "zh-CN": "伞",
      "ko": "산",
      "vi": "ô",
      "id": "payung",
      "es": "umbrella",
      "pt": "umbrella"
    }
  },
  {
    "id": "K0074",
    "k": "斬",
    "r": "き（く）、ざん",
    "m": {
      "en": "cut",
      "zh-TW": "斬",
      "zh-CN": "斩",
      "ko": "참",
      "vi": "chém",
      "id": "memotong",
      "es": "cortar",
      "pt": "cortar"
    }
  },
  {
    "id": "K0075",
    "k": "暫",
    "r": "しばら（く）、ざん",
    "m": {
      "en": "temporary",
      "zh-TW": "暫",
      "zh-CN": "暂",
      "ko": "잠",
      "vi": "tạm",
      "id": "sementara",
      "es": "temporary",
      "pt": "temporary"
    }
  },
  {
    "id": "K0076",
    "k": "旨",
    "r": "うま（い）、し",
    "m": {
      "en": "delicious",
      "zh-TW": "旨",
      "zh-CN": "旨",
      "ko": "지",
      "vi": "ngon",
      "id": "lezat",
      "es": "delicious",
      "pt": "delicious"
    }
  },
  {
    "id": "K0077",
    "k": "嗣",
    "r": "し",
    "m": {
      "en": "heir",
      "zh-TW": "嗣",
      "zh-CN": "嗣",
      "ko": "사",
      "vi": "kế",
      "id": "pewaris",
      "es": "heir",
      "pt": "heir"
    }
  },
  {
    "id": "K0078",
    "k": "施",
    "r": "ほどこ（す）、し",
    "m": {
      "en": "give",
      "zh-TW": "施",
      "zh-CN": "施",
      "ko": "시",
      "vi": "thi hành",
      "id": "melaksanakan",
      "es": "dar",
      "pt": "dar"
    }
  },
  {
    "id": "K0079",
    "k": "祉",
    "r": "し",
    "m": {
      "en": "welfare",
      "zh-TW": "祉",
      "zh-CN": "祉",
      "ko": "지",
      "vi": "phúc",
      "id": "kesejahteraan",
      "es": "welfare",
      "pt": "welfare"
    }
  },
  {
    "id": "K0080",
    "k": "紫",
    "r": "むらさき、し",
    "m": {
      "en": "purple",
      "zh-TW": "紫",
      "zh-CN": "紫",
      "ko": "자",
      "vi": "tím",
      "id": "ungu",
      "es": "purple",
      "pt": "purple"
    }
  },
  {
    "id": "K0081",
    "k": "肢",
    "r": "し",
    "m": {
      "en": "limb",
      "zh-TW": "肢",
      "zh-CN": "肢",
      "ko": "지",
      "vi": "chi",
      "id": "anggota badan",
      "es": "limb",
      "pt": "limb"
    }
  },
  {
    "id": "K0082",
    "k": "脂",
    "r": "あぶら、し",
    "m": {
      "en": "fat",
      "zh-TW": "脂",
      "zh-CN": "脂",
      "ko": "지",
      "vi": "mỡ",
      "id": "lemak",
      "es": "fat",
      "pt": "fat"
    }
  },
  {
    "id": "K0083",
    "k": "諮",
    "r": "はか、し",
    "m": {
      "en": "consult",
      "zh-TW": "諮",
      "zh-CN": "咨",
      "ko": "자",
      "vi": "tư vấn",
      "id": "berkonsultasi",
      "es": "consult",
      "pt": "consult"
    }
  },
  {
    "id": "K0084",
    "k": "賜",
    "r": "たまわ（る）、し",
    "m": {
      "en": "grant",
      "zh-TW": "賜",
      "zh-CN": "赐",
      "ko": "사",
      "vi": "ban",
      "id": "menganugerahkan",
      "es": "grant",
      "pt": "grant"
    }
  },
  {
    "id": "K0085",
    "k": "雌",
    "r": "め（す）、し",
    "m": {
      "en": "female",
      "zh-TW": "雌",
      "zh-CN": "雌",
      "ko": "자",
      "vi": "cái",
      "id": "betina",
      "es": "female",
      "pt": "female"
    }
  },
  {
    "id": "K0086",
    "k": "侍",
    "r": "さむらい、じ",
    "m": {
      "en": "samurai",
      "zh-TW": "侍",
      "zh-CN": "侍",
      "ko": "시",
      "vi": "samurai",
      "id": "samurai",
      "es": "samurai",
      "pt": "samurai"
    }
  },
  {
    "id": "K0087",
    "k": "慈",
    "r": "いつく（しむ）、じ",
    "m": {
      "en": "mercy",
      "zh-TW": "慈",
      "zh-CN": "慈",
      "ko": "자",
      "vi": "từ",
      "id": "belas kasih",
      "es": "mercy",
      "pt": "mercy"
    }
  },
  {
    "id": "K0088",
    "k": "滋",
    "r": "じ",
    "m": {
      "en": "nourish",
      "zh-TW": "滋",
      "zh-CN": "滋",
      "ko": "자",
      "vi": "tư",
      "id": "menyuburkan",
      "es": "nourish",
      "pt": "nourish"
    }
  },
  {
    "id": "K0089",
    "k": "璽",
    "r": "じ",
    "m": {
      "en": "seal",
      "zh-TW": "璽",
      "zh-CN": "玺",
      "ko": "새",
      "vi": "ấn",
      "id": "stempel",
      "es": "seal",
      "pt": "seal"
    }
  },
  {
    "id": "K0090",
    "k": "軸",
    "r": "じく",
    "m": {
      "en": "axis",
      "zh-TW": "軸",
      "zh-CN": "轴",
      "ko": "축",
      "vi": "trục",
      "id": "poros",
      "es": "axis",
      "pt": "axis"
    }
  },
  {
    "id": "K0091",
    "k": "叱",
    "r": "しか（る）、しつ",
    "m": {
      "en": "scold",
      "zh-TW": "叱",
      "zh-CN": "叱",
      "ko": "질",
      "vi": "mắng",
      "id": "memarahi",
      "es": "scold",
      "pt": "scold"
    }
  },
  {
    "id": "K0092",
    "k": "執",
    "r": "と（る）、しつ",
    "m": {
      "en": "hold",
      "zh-TW": "執",
      "zh-CN": "执",
      "ko": "집",
      "vi": "chấp",
      "id": "memegang",
      "es": "sostener",
      "pt": "segurar"
    }
  },
  {
    "id": "K0093",
    "k": "湿",
    "r": "しめ（る）、しつ",
    "m": {
      "en": "wet",
      "zh-TW": "濕",
      "zh-CN": "湿",
      "ko": "습",
      "vi": "ẩm",
      "id": "lembab",
      "es": "mojado",
      "pt": "molhado"
    }
  },
  {
    "id": "K0094",
    "k": "漆",
    "r": "うるし、しつ",
    "m": {
      "en": "lacquer",
      "zh-TW": "漆",
      "zh-CN": "漆",
      "ko": "칠",
      "vi": "sơn",
      "id": "pernis",
      "es": "lacquer",
      "pt": "lacquer"
    }
  },
  {
    "id": "K0095",
    "k": "嫉",
    "r": "しつ",
    "m": {
      "en": "jealous",
      "zh-TW": "嫉",
      "zh-CN": "嫉",
      "ko": "질",
      "vi": "ghen",
      "id": "cemburu",
      "es": "celoso",
      "pt": "ciumento"
    }
  },
  {
    "id": "K0096",
    "k": "芝",
    "r": "しば、し",
    "m": {
      "en": "lawn",
      "zh-TW": "芝",
      "zh-CN": "芝",
      "ko": "지",
      "vi": "cỏ",
      "id": "rumput",
      "es": "lawn",
      "pt": "lawn"
    }
  },
  {
    "id": "K0097",
    "k": "赦",
    "r": "しゃ",
    "m": {
      "en": "pardon",
      "zh-TW": "赦",
      "zh-CN": "赦",
      "ko": "사",
      "vi": "tha",
      "id": "mengampuni",
      "es": "pardon",
      "pt": "pardon"
    }
  },
  {
    "id": "K0098",
    "k": "斜",
    "r": "なな（め）、しゃ",
    "m": {
      "en": "slant",
      "zh-TW": "斜",
      "zh-CN": "斜",
      "ko": "사",
      "vi": "nghiêng",
      "id": "miring",
      "es": "slant",
      "pt": "slant"
    }
  },
  {
    "id": "K0099",
    "k": "煮",
    "r": "に（る）、しゃ",
    "m": {
      "en": "boil",
      "zh-TW": "煮",
      "zh-CN": "煮",
      "ko": "자",
      "vi": "nấu",
      "id": "merebus",
      "es": "boil",
      "pt": "boil"
    }
  },
  {
    "id": "K0100",
    "k": "遮",
    "r": "さえぎ（る）、しゃ",
    "m": {
      "en": "block",
      "zh-TW": "遮",
      "zh-CN": "遮",
      "ko": "차",
      "vi": "che",
      "id": "menghalangi",
      "es": "block",
      "pt": "block"
    }
  },
  {
    "id": "K0101",
    "k": "蛇",
    "r": "へび、じゃ",
    "m": {
      "en": "snake",
      "zh-TW": "蛇",
      "zh-CN": "蛇",
      "ko": "사",
      "vi": "rắn",
      "id": "ular",
      "es": "snake",
      "pt": "snake"
    }
  },
  {
    "id": "K0102",
    "k": "邪",
    "r": "じゃ",
    "m": {
      "en": "evil",
      "zh-TW": "邪",
      "zh-CN": "邪",
      "ko": "사",
      "vi": "tà",
      "id": "jahat",
      "es": "evil",
      "pt": "evil"
    }
  },
  {
    "id": "K0103",
    "k": "爵",
    "r": "しゃく",
    "m": {
      "en": "baron",
      "zh-TW": "爵",
      "zh-CN": "爵",
      "ko": "작",
      "vi": "tước",
      "id": "bangsawan",
      "es": "baron",
      "pt": "baron"
    }
  },
  {
    "id": "K0104",
    "k": "酌",
    "r": "く（る）、しゃく",
    "m": {
      "en": "serve",
      "zh-TW": "酌",
      "zh-CN": "酌",
      "ko": "작",
      "vi": "rót",
      "id": "menuang",
      "es": "serve",
      "pt": "serve"
    }
  },
  {
    "id": "K0105",
    "k": "釈",
    "r": "しゃく",
    "m": {
      "en": "explain",
      "zh-TW": "釋",
      "zh-CN": "释",
      "ko": "석",
      "vi": "thích",
      "id": "menjelaskan",
      "es": "explicar",
      "pt": "explicar"
    }
  },
  {
    "id": "K0106",
    "k": "寂",
    "r": "さび、じゃく",
    "m": {
      "en": "lonely",
      "zh-TW": "寂",
      "zh-CN": "寂",
      "ko": "적",
      "vi": "tịch",
      "id": "sepi",
      "es": "solo",
      "pt": "solitário"
    }
  },
  {
    "id": "K0107",
    "k": "朱",
    "r": "しゅ",
    "m": {
      "en": "vermillion",
      "zh-TW": "朱",
      "zh-CN": "朱",
      "ko": "주",
      "vi": "son",
      "id": "merah",
      "es": "vermillion",
      "pt": "vermillion"
    }
  },
  {
    "id": "K0108",
    "k": "殊",
    "r": "こと（なる）、しゅ",
    "m": {
      "en": "special",
      "zh-TW": "殊",
      "zh-CN": "殊",
      "ko": "수",
      "vi": "đặc biệt",
      "id": "khusus",
      "es": "especial",
      "pt": "especial"
    }
  },
  {
    "id": "K0109",
    "k": "狩",
    "r": "か（る）、しゅ",
    "m": {
      "en": "hunt",
      "zh-TW": "狩",
      "zh-CN": "狩",
      "ko": "수",
      "vi": "săn",
      "id": "berburu",
      "es": "hunt",
      "pt": "hunt"
    }
  },
  {
    "id": "K0110",
    "k": "珠",
    "r": "たま、しゅ",
    "m": {
      "en": "pearl",
      "zh-TW": "珠",
      "zh-CN": "珠",
      "ko": "주",
      "vi": "ngọc",
      "id": "mutiara",
      "es": "pearl",
      "pt": "pearl"
    }
  },
  {
    "id": "K0111",
    "k": "趣",
    "r": "おもむき、しゅ",
    "m": {
      "en": "taste",
      "zh-TW": "趣",
      "zh-CN": "趣",
      "ko": "취",
      "vi": "thú",
      "id": "selera",
      "es": "taste",
      "pt": "taste"
    }
  },
  {
    "id": "K0112",
    "k": "儒",
    "r": "じゅ",
    "m": {
      "en": "Confucian",
      "zh-TW": "儒",
      "zh-CN": "儒",
      "ko": "유",
      "vi": "nho",
      "id": "Konfusius",
      "es": "Confucian",
      "pt": "Confucian"
    }
  },
  {
    "id": "K0113",
    "k": "呪",
    "r": "のろ（う）、じゅ",
    "m": {
      "en": "curse",
      "zh-TW": "咒",
      "zh-CN": "咒",
      "ko": "주",
      "vi": "nguyền",
      "id": "kutukan",
      "es": "curse",
      "pt": "curse"
    }
  },
  {
    "id": "K0114",
    "k": "寿",
    "r": "ことぶき、じゅ",
    "m": {
      "en": "longevity",
      "zh-TW": "壽",
      "zh-CN": "寿",
      "ko": "수",
      "vi": "thọ",
      "id": "umur panjang",
      "es": "longevity",
      "pt": "longevity"
    }
  },
  {
    "id": "K0115",
    "k": "需",
    "r": "じゅ",
    "m": {
      "en": "demand",
      "zh-TW": "需",
      "zh-CN": "需",
      "ko": "수",
      "vi": "nhu cầu",
      "id": "permintaan",
      "es": "demand",
      "pt": "demand"
    }
  },
  {
    "id": "K0116",
    "k": "囚",
    "r": "しゅう",
    "m": {
      "en": "prisoner",
      "zh-TW": "囚",
      "zh-CN": "囚",
      "ko": "수",
      "vi": "tù",
      "id": "tahanan",
      "es": "prisoner",
      "pt": "prisoner"
    }
  },
  {
    "id": "K0117",
    "k": "愁",
    "r": "うれ（える）、しゅう",
    "m": {
      "en": "worry",
      "zh-TW": "愁",
      "zh-CN": "愁",
      "ko": "수",
      "vi": "sầu",
      "id": "sedih",
      "es": "worry",
      "pt": "worry"
    }
  },
  {
    "id": "K0118",
    "k": "秀",
    "r": "ひい（でる）、しゅう",
    "m": {
      "en": "excel",
      "zh-TW": "秀",
      "zh-CN": "秀",
      "ko": "수",
      "vi": "tú",
      "id": "unggul",
      "es": "excel",
      "pt": "excel"
    }
  },
  {
    "id": "K0119",
    "k": "臭",
    "r": "くさ（い）、しゅう",
    "m": {
      "en": "smell",
      "zh-TW": "臭",
      "zh-CN": "臭",
      "ko": "취",
      "vi": "hôi",
      "id": "bau",
      "es": "smell",
      "pt": "smell"
    }
  },
  {
    "id": "K0120",
    "k": "舟",
    "r": "ふね、しゅう",
    "m": {
      "en": "boat",
      "zh-TW": "舟",
      "zh-CN": "舟",
      "ko": "주",
      "vi": "thuyền",
      "id": "perahu",
      "es": "bote",
      "pt": "barco"
    }
  },
  {
    "id": "K0121",
    "k": "襲",
    "r": "おそ（い）、しゅう",
    "m": {
      "en": "attack",
      "zh-TW": "襲",
      "zh-CN": "袭",
      "ko": "습",
      "vi": "tấn công",
      "id": "menyerang",
      "es": "atacar",
      "pt": "atacar"
    }
  },
  {
    "id": "K0122",
    "k": "酬",
    "r": "しゅう",
    "m": {
      "en": "reward",
      "zh-TW": "酬",
      "zh-CN": "酬",
      "ko": "수",
      "vi": "đáp",
      "id": "hadiah",
      "es": "reward",
      "pt": "reward"
    }
  },
  {
    "id": "K0123",
    "k": "醜",
    "r": "みにく（い）、しゅう",
    "m": {
      "en": "ugly",
      "zh-TW": "醜",
      "zh-CN": "丑",
      "ko": "추",
      "vi": "xấu",
      "id": "jelek",
      "es": "feo",
      "pt": "feio"
    }
  },
  {
    "id": "K0124",
    "k": "充",
    "r": "あ（う）、じゅう",
    "m": {
      "en": "fill",
      "zh-TW": "充",
      "zh-CN": "充",
      "ko": "충",
      "vi": "đầy",
      "id": "mengisi",
      "es": "llenar",
      "pt": "encher"
    }
  },
  {
    "id": "K0125",
    "k": "渋",
    "r": "しぶ（い）、じゅう",
    "m": {
      "en": "astringent",
      "zh-TW": "澀",
      "zh-CN": "涩",
      "ko": "삽",
      "vi": "chát",
      "id": "sepat",
      "es": "astringent",
      "pt": "astringent"
    }
  },
  {
    "id": "K0126",
    "k": "銃",
    "r": "じゅう",
    "m": {
      "en": "gun",
      "zh-TW": "銃",
      "zh-CN": "铳",
      "ko": "총",
      "vi": "súng",
      "id": "senapan",
      "es": "gun",
      "pt": "gun"
    }
  },
  {
    "id": "K0127",
    "k": "叔",
    "r": "しゅく",
    "m": {
      "en": "uncle",
      "zh-TW": "叔",
      "zh-CN": "叔",
      "ko": "숙",
      "vi": "chú",
      "id": "paman",
      "es": "uncle",
      "pt": "uncle"
    }
  },
  {
    "id": "K0128",
    "k": "淑",
    "r": "しゅく",
    "m": {
      "en": "graceful",
      "zh-TW": "淑",
      "zh-CN": "淑",
      "ko": "숙",
      "vi": "thục",
      "id": "anggun",
      "es": "graceful",
      "pt": "graceful"
    }
  },
  {
    "id": "K0129",
    "k": "粛",
    "r": "しゅく",
    "m": {
      "en": "solemn",
      "zh-TW": "肅",
      "zh-CN": "肃",
      "ko": "숙",
      "vi": "nghiêm",
      "id": "khidmat",
      "es": "solemn",
      "pt": "solemn"
    }
  },
  {
    "id": "K0130",
    "k": "塾",
    "r": "じゅく",
    "m": {
      "en": "cram school",
      "zh-TW": "塾",
      "zh-CN": "塾",
      "ko": "숙",
      "vi": "lớp học",
      "id": "bimbel",
      "es": "cram school",
      "pt": "cram school"
    }
  },
  {
    "id": "K0131",
    "k": "俊",
    "r": "しゅん",
    "m": {
      "en": "genius",
      "zh-TW": "俊",
      "zh-CN": "俊",
      "ko": "준",
      "vi": "tuấn",
      "id": "jenius",
      "es": "genius",
      "pt": "genius"
    }
  },
  {
    "id": "K0132",
    "k": "瞬",
    "r": "またた（く）、しゅん",
    "m": {
      "en": "blink",
      "zh-TW": "瞬",
      "zh-CN": "瞬",
      "ko": "순",
      "vi": "nháy",
      "id": "berkedip",
      "es": "blink",
      "pt": "blink"
    }
  },
  {
    "id": "K0133",
    "k": "准",
    "r": "じゅん",
    "m": {
      "en": "semi",
      "zh-TW": "准",
      "zh-CN": "准",
      "ko": "준",
      "vi": "chuẩn",
      "id": "semi",
      "es": "semi",
      "pt": "semi"
    }
  },
  {
    "id": "K0134",
    "k": "循",
    "r": "じゅん",
    "m": {
      "en": "follow",
      "zh-TW": "循",
      "zh-CN": "循",
      "ko": "순",
      "vi": "tuân",
      "id": "mengikuti",
      "es": "seguir",
      "pt": "seguir"
    }
  },
  {
    "id": "K0135",
    "k": "旬",
    "r": "じゅん",
    "m": {
      "en": "season",
      "zh-TW": "旬",
      "zh-CN": "旬",
      "ko": "순",
      "vi": "mùa",
      "id": "musim",
      "es": "season",
      "pt": "season"
    }
  },
  {
    "id": "K0136",
    "k": "殉",
    "r": "じゅん",
    "m": {
      "en": "martyr",
      "zh-TW": "殉",
      "zh-CN": "殉",
      "ko": "순",
      "vi": "tuẫn",
      "id": "martir",
      "es": "martyr",
      "pt": "martyr"
    }
  },
  {
    "id": "K0137",
    "k": "井",
    "r": "い",
    "m": {
      "en": "well",
      "zh-TW": "井",
      "zh-CN": "井",
      "ko": "well",
      "vi": "well",
      "id": "well",
      "es": "well",
      "pt": "well"
    }
  },
  {
    "id": "K0138",
    "k": "臆",
    "r": "お（く）",
    "m": {
      "en": "coward",
      "zh-TW": "臆",
      "zh-CN": "臆",
      "ko": "coward",
      "vi": "coward",
      "id": "coward",
      "es": "coward",
      "pt": "coward"
    }
  },
  {
    "id": "K0139",
    "k": "嫁",
    "r": "よめ、か",
    "m": {
      "en": "bride",
      "zh-TW": "嫁",
      "zh-CN": "嫁",
      "ko": "bride",
      "vi": "bride",
      "id": "bride",
      "es": "bride",
      "pt": "bride"
    }
  },
  {
    "id": "K0140",
    "k": "禍",
    "r": "か",
    "m": {
      "en": "disaster",
      "zh-TW": "禍",
      "zh-CN": "祸",
      "ko": "disaster",
      "vi": "disaster",
      "id": "disaster",
      "es": "disaster",
      "pt": "disaster"
    }
  },
  {
    "id": "K0141",
    "k": "寡",
    "r": "か",
    "m": {
      "en": "widow",
      "zh-TW": "寡",
      "zh-CN": "寡",
      "ko": "widow",
      "vi": "widow",
      "id": "widow",
      "es": "widow",
      "pt": "widow"
    }
  },
  {
    "id": "K0142",
    "k": "箇",
    "r": "か",
    "m": {
      "en": "counter",
      "zh-TW": "箇",
      "zh-CN": "箇",
      "ko": "counter",
      "vi": "counter",
      "id": "counter",
      "es": "counter",
      "pt": "counter"
    }
  },
  {
    "id": "K0143",
    "k": "稼",
    "r": "かせ（ぐ）、か",
    "m": {
      "en": "earn",
      "zh-TW": "稼",
      "zh-CN": "稼",
      "ko": "earn",
      "vi": "earn",
      "id": "earn",
      "es": "earn",
      "pt": "earn"
    }
  },
  {
    "id": "K0144",
    "k": "牙",
    "r": "きば、が",
    "m": {
      "en": "fang",
      "zh-TW": "牙",
      "zh-CN": "牙",
      "ko": "fang",
      "vi": "fang",
      "id": "fang",
      "es": "fang",
      "pt": "fang"
    }
  },
  {
    "id": "K0145",
    "k": "怪",
    "r": "かい、あや",
    "m": {
      "en": "suspicious",
      "zh-TW": "怪",
      "zh-CN": "怪",
      "ko": "suspicious",
      "vi": "suspicious",
      "id": "suspicious",
      "es": "suspicious",
      "pt": "suspicious"
    }
  },
  {
    "id": "K0146",
    "k": "悔",
    "r": "かい、く",
    "m": {
      "en": "regret",
      "zh-TW": "悔",
      "zh-CN": "悔",
      "ko": "regret",
      "vi": "regret",
      "id": "regret",
      "es": "regret",
      "pt": "regret"
    }
  },
  {
    "id": "K0147",
    "k": "顎",
    "r": "がく、あご",
    "m": {
      "en": "jaw",
      "zh-TW": "顎",
      "zh-CN": "顎",
      "ko": "jaw",
      "vi": "jaw",
      "id": "jaw",
      "es": "jaw",
      "pt": "jaw"
    }
  },
  {
    "id": "K0148",
    "k": "株",
    "r": "かぶ",
    "m": {
      "en": "stock",
      "zh-TW": "株",
      "zh-CN": "株",
      "ko": "stock",
      "vi": "stock",
      "id": "stock",
      "es": "stock",
      "pt": "stock"
    }
  },
  {
    "id": "K0149",
    "k": "慰",
    "r": "なぐさ（める）、い",
    "m": {
      "en": "console",
      "zh-TW": "慰",
      "zh-CN": "慰",
      "ko": "console",
      "vi": "console",
      "id": "console",
      "es": "console",
      "pt": "console"
    }
  },
  {
    "id": "K0150",
    "k": "旺",
    "r": "おう",
    "m": {
      "en": "flourishing",
      "zh-TW": "旺",
      "zh-CN": "旺",
      "ko": "flourishing",
      "vi": "flourishing",
      "id": "flourishing",
      "es": "flourishing",
      "pt": "flourishing"
    }
  },
  {
    "id": "K0151",
    "k": "褐",
    "r": "か（つ）",
    "m": {
      "en": "brown",
      "zh-TW": "褐",
      "zh-CN": "褐",
      "ko": "brown",
      "vi": "brown",
      "id": "brown",
      "es": "brown",
      "pt": "brown"
    }
  },
  {
    "id": "K0152",
    "k": "閑",
    "r": "かん",
    "m": {
      "en": "leisure",
      "zh-TW": "閑",
      "zh-CN": "閑",
      "ko": "leisure",
      "vi": "leisure",
      "id": "leisure",
      "es": "leisure",
      "pt": "leisure"
    }
  },
  {
    "id": "K0153",
    "k": "韓",
    "r": "かん",
    "m": {
      "en": "Korea",
      "zh-TW": "韓",
      "zh-CN": "韓",
      "ko": "Korea",
      "vi": "Korea",
      "id": "Korea",
      "es": "Korea",
      "pt": "Korea"
    }
  },
  {
    "id": "K0154",
    "k": "伎",
    "r": "ぎ",
    "m": {
      "en": "deed",
      "zh-TW": "伎",
      "zh-CN": "伎",
      "ko": "deed",
      "vi": "deed",
      "id": "deed",
      "es": "deed",
      "pt": "deed"
    }
  },
  {
    "id": "K0155",
    "k": "嬉",
    "r": "うれ（しい）、き",
    "m": {
      "en": "glad",
      "zh-TW": "嬉",
      "zh-CN": "嬉",
      "ko": "glad",
      "vi": "glad",
      "id": "glad",
      "es": "glad",
      "pt": "glad"
    }
  },
  {
    "id": "K0156",
    "k": "幾",
    "r": "い（む）、き",
    "m": {
      "en": "how many",
      "zh-TW": "幾",
      "zh-CN": "幾",
      "ko": "how many",
      "vi": "how many",
      "id": "how many",
      "es": "how many",
      "pt": "how many"
    }
  },
  {
    "id": "K0157",
    "k": "況",
    "r": "きょう",
    "m": {
      "en": "condition",
      "zh-TW": "況",
      "zh-CN": "況",
      "ko": "condition",
      "vi": "condition",
      "id": "condition",
      "es": "condition",
      "pt": "condition"
    }
  },
  {
    "id": "K0158",
    "k": "径",
    "r": "けい",
    "m": {
      "en": "diameter",
      "zh-TW": "径",
      "zh-CN": "径",
      "ko": "diameter",
      "vi": "diameter",
      "id": "diameter",
      "es": "diameter",
      "pt": "diameter"
    }
  },
  {
    "id": "K0159",
    "k": "隙",
    "r": "すき、げき",
    "m": {
      "en": "crevice",
      "zh-TW": "隙",
      "zh-CN": "隙",
      "ko": "crevice",
      "vi": "crevice",
      "id": "crevice",
      "es": "crevice",
      "pt": "crevice"
    }
  },
  {
    "id": "K0160",
    "k": "痕",
    "r": "こん",
    "m": {
      "en": "mark",
      "zh-TW": "痕",
      "zh-CN": "痕",
      "ko": "mark",
      "vi": "mark",
      "id": "mark",
      "es": "mark",
      "pt": "mark"
    }
  },
  {
    "id": "K0161",
    "k": "酢",
    "r": "すわる、さく",
    "m": {
      "en": "vinegar",
      "zh-TW": "酢",
      "zh-CN": "酢",
      "ko": "vinegar",
      "vi": "vinegar",
      "id": "vinegar",
      "es": "vinegar",
      "pt": "vinegar"
    }
  },
  {
    "id": "K0162",
    "k": "伺",
    "r": "うかが（う）、し",
    "m": {
      "en": "ask",
      "zh-TW": "伺",
      "zh-CN": "伺",
      "ko": "ask",
      "vi": "ask",
      "id": "ask",
      "es": "preguntar",
      "pt": "perguntar"
    }
  },
  {
    "id": "K0163",
    "k": "刺",
    "r": "さ（す）、し",
    "m": {
      "en": "thorn",
      "zh-TW": "刺",
      "zh-CN": "刺",
      "ko": "thorn",
      "vi": "thorn",
      "id": "thorn",
      "es": "thorn",
      "pt": "thorn"
    }
  },
  {
    "id": "K0164",
    "k": "磁",
    "r": "じ",
    "m": {
      "en": "magnet",
      "zh-TW": "磁",
      "zh-CN": "磁",
      "ko": "magnet",
      "vi": "magnet",
      "id": "magnet",
      "es": "magnet",
      "pt": "magnet"
    }
  },
  {
    "id": "K0165",
    "k": "疾",
    "r": "しつ",
    "m": {
      "en": "rapidly",
      "zh-TW": "疾",
      "zh-CN": "疾",
      "ko": "rapidly",
      "vi": "rapidly",
      "id": "rapidly",
      "es": "rapidly",
      "pt": "rapidly"
    }
  },
  {
    "id": "K0166",
    "k": "蹴",
    "r": "け（る）、しゅう",
    "m": {
      "en": "kick",
      "zh-TW": "蹴",
      "zh-CN": "蹴",
      "ko": "kick",
      "vi": "kick",
      "id": "kick",
      "es": "kick",
      "pt": "kick"
    }
  },
  {
    "id": "K0167",
    "k": "潤",
    "r": "うるお（う）、じゅん",
    "m": {
      "en": "wet",
      "zh-TW": "潤",
      "zh-CN": "潤",
      "ko": "wet",
      "vi": "wet",
      "id": "wet",
      "es": "mojado",
      "pt": "molhado"
    }
  },
  {
    "id": "K0168",
    "k": "盾",
    "r": "たて、じゅん",
    "m": {
      "en": "shield",
      "zh-TW": "盾",
      "zh-CN": "盾",
      "ko": "shield",
      "vi": "shield",
      "id": "shield",
      "es": "shield",
      "pt": "shield"
    }
  },
  {
    "id": "K0169",
    "k": "巡",
    "r": "めぐ（る）、じゅん",
    "m": {
      "en": "patrol",
      "zh-TW": "巡",
      "zh-CN": "巡",
      "ko": "patrol",
      "vi": "patrol",
      "id": "patrol",
      "es": "patrol",
      "pt": "patrol"
    }
  },
  {
    "id": "K0170",
    "k": "遵",
    "r": "じゅん",
    "m": {
      "en": "abide by",
      "zh-TW": "遵",
      "zh-CN": "遵",
      "ko": "abide by",
      "vi": "abide by",
      "id": "abide by",
      "es": "abide by",
      "pt": "abide by"
    }
  },
  {
    "id": "K0171",
    "k": "庶",
    "r": "しょ",
    "m": {
      "en": "commoner",
      "zh-TW": "庶",
      "zh-CN": "庶",
      "ko": "commoner",
      "vi": "commoner",
      "id": "commoner",
      "es": "commoner",
      "pt": "commoner"
    }
  },
  {
    "id": "K0172",
    "k": "緒",
    "r": "お（りる）、しょ",
    "m": {
      "en": "beginning",
      "zh-TW": "緒",
      "zh-CN": "緒",
      "ko": "beginning",
      "vi": "beginning",
      "id": "beginning",
      "es": "beginning",
      "pt": "beginning"
    }
  },
  {
    "id": "K0173",
    "k": "叙",
    "r": "じょ",
    "m": {
      "en": "confer",
      "zh-TW": "叙",
      "zh-CN": "叙",
      "ko": "confer",
      "vi": "confer",
      "id": "confer",
      "es": "confer",
      "pt": "confer"
    }
  },
  {
    "id": "K0174",
    "k": "徐",
    "r": "じょ",
    "m": {
      "en": "gradually",
      "zh-TW": "徐",
      "zh-CN": "徐",
      "ko": "gradually",
      "vi": "gradually",
      "id": "gradually",
      "es": "gradually",
      "pt": "gradually"
    }
  },
  {
    "id": "K0175",
    "k": "償",
    "r": "つぐな（う）、しょう",
    "m": {
      "en": "reparation",
      "zh-TW": "償",
      "zh-CN": "償",
      "ko": "reparation",
      "vi": "reparation",
      "id": "reparation",
      "es": "reparation",
      "pt": "reparation"
    }
  },
  {
    "id": "K0176",
    "k": "匠",
    "r": "しょう",
    "m": {
      "en": "artisan",
      "zh-TW": "匠",
      "zh-CN": "匠",
      "ko": "artisan",
      "vi": "artisan",
      "id": "artisan",
      "es": "artisan",
      "pt": "artisan"
    }
  },
  {
    "id": "K0177",
    "k": "升",
    "r": "ます、しょう",
    "m": {
      "en": "measuring box",
      "zh-TW": "升",
      "zh-CN": "升",
      "ko": "measuring box",
      "vi": "measuring box",
      "id": "measuring box",
      "es": "measuring box",
      "pt": "measuring box"
    }
  },
  {
    "id": "K0178",
    "k": "召",
    "r": "め（す）、しょう",
    "m": {
      "en": "summon",
      "zh-TW": "召",
      "zh-CN": "召",
      "ko": "summon",
      "vi": "summon",
      "id": "summon",
      "es": "summon",
      "pt": "summon"
    }
  },
  {
    "id": "K0179",
    "k": "奨",
    "r": "しょう",
    "m": {
      "en": "encourage",
      "zh-TW": "奨",
      "zh-CN": "奨",
      "ko": "encourage",
      "vi": "encourage",
      "id": "encourage",
      "es": "encourage",
      "pt": "encourage"
    }
  },
  {
    "id": "K0180",
    "k": "宵",
    "r": "よい、しょう",
    "m": {
      "en": "evening",
      "zh-TW": "宵",
      "zh-CN": "宵",
      "ko": "evening",
      "vi": "evening",
      "id": "evening",
      "es": "tarde",
      "pt": "tarde"
    }
  },
  {
    "id": "K0181",
    "k": "尚",
    "r": "なお、しょう",
    "m": {
      "en": "still",
      "zh-TW": "尚",
      "zh-CN": "尚",
      "ko": "still",
      "vi": "still",
      "id": "still",
      "es": "still",
      "pt": "still"
    }
  },
  {
    "id": "K0182",
    "k": "床",
    "r": "とこ、しょう",
    "m": {
      "en": "bed",
      "zh-TW": "床",
      "zh-CN": "床",
      "ko": "bed",
      "vi": "bed",
      "id": "bed",
      "es": "cama",
      "pt": "cama"
    }
  },
  {
    "id": "K0183",
    "k": "彰",
    "r": "しょう",
    "m": {
      "en": "patent",
      "zh-TW": "彰",
      "zh-CN": "彰",
      "ko": "patent",
      "vi": "patent",
      "id": "patent",
      "es": "patent",
      "pt": "patent"
    }
  },
  {
    "id": "K0184",
    "k": "抄",
    "r": "しょう",
    "m": {
      "en": "extract",
      "zh-TW": "抄",
      "zh-CN": "抄",
      "ko": "extract",
      "vi": "extract",
      "id": "extract",
      "es": "extract",
      "pt": "extract"
    }
  },
  {
    "id": "K0185",
    "k": "掌",
    "r": "てのひら、しょう",
    "m": {
      "en": "palm",
      "zh-TW": "掌",
      "zh-CN": "掌",
      "ko": "palm",
      "vi": "palm",
      "id": "palm",
      "es": "palm",
      "pt": "palm"
    }
  },
  {
    "id": "K0186",
    "k": "昇",
    "r": "のぼ（る）、しょう",
    "m": {
      "en": "rise",
      "zh-TW": "昇",
      "zh-CN": "昇",
      "ko": "rise",
      "vi": "rise",
      "id": "rise",
      "es": "rise",
      "pt": "rise"
    }
  },
  {
    "id": "K0187",
    "k": "晶",
    "r": "しょう",
    "m": {
      "en": "sparkle",
      "zh-TW": "晶",
      "zh-CN": "晶",
      "ko": "sparkle",
      "vi": "sparkle",
      "id": "sparkle",
      "es": "sparkle",
      "pt": "sparkle"
    }
  },
  {
    "id": "K0188",
    "k": "沼",
    "r": "ぬま、しょう",
    "m": {
      "en": "marsh",
      "zh-TW": "沼",
      "zh-CN": "沼",
      "ko": "marsh",
      "vi": "marsh",
      "id": "marsh",
      "es": "marsh",
      "pt": "marsh"
    }
  },
  {
    "id": "K0189",
    "k": "渉",
    "r": "しょう",
    "m": {
      "en": "ford",
      "zh-TW": "渉",
      "zh-CN": "渉",
      "ko": "ford",
      "vi": "ford",
      "id": "ford",
      "es": "ford",
      "pt": "ford"
    }
  },
  {
    "id": "K0190",
    "k": "焦",
    "r": "こ（がす）、しょう",
    "m": {
      "en": "scorch",
      "zh-TW": "焦",
      "zh-CN": "焦",
      "ko": "scorch",
      "vi": "scorch",
      "id": "scorch",
      "es": "scorch",
      "pt": "scorch"
    }
  },
  {
    "id": "K0191",
    "k": "症",
    "r": "しょう",
    "m": {
      "en": "symptoms",
      "zh-TW": "症",
      "zh-CN": "症",
      "ko": "symptoms",
      "vi": "symptoms",
      "id": "symptoms",
      "es": "symptoms",
      "pt": "symptoms"
    }
  },
  {
    "id": "K0192",
    "k": "硝",
    "r": "しょう",
    "m": {
      "en": "saltpeter",
      "zh-TW": "硝",
      "zh-CN": "硝",
      "ko": "saltpeter",
      "vi": "saltpeter",
      "id": "saltpeter",
      "es": "saltpeter",
      "pt": "saltpeter"
    }
  },
  {
    "id": "K0193",
    "k": "礁",
    "r": "しょう",
    "m": {
      "en": "reef",
      "zh-TW": "礁",
      "zh-CN": "礁",
      "ko": "reef",
      "vi": "reef",
      "id": "reef",
      "es": "reef",
      "pt": "reef"
    }
  },
  {
    "id": "K0194",
    "k": "祥",
    "r": "しょう",
    "m": {
      "en": "auspicious",
      "zh-TW": "祥",
      "zh-CN": "祥",
      "ko": "auspicious",
      "vi": "auspicious",
      "id": "auspicious",
      "es": "auspicious",
      "pt": "auspicious"
    }
  },
  {
    "id": "K0195",
    "k": "称",
    "r": "しょう",
    "m": {
      "en": "appellation",
      "zh-TW": "称",
      "zh-CN": "称",
      "ko": "appellation",
      "vi": "appellation",
      "id": "appellation",
      "es": "appellation",
      "pt": "appellation"
    }
  },
  {
    "id": "K0196",
    "k": "粧",
    "r": "しょう",
    "m": {
      "en": "cosmetics",
      "zh-TW": "粧",
      "zh-CN": "粧",
      "ko": "cosmetics",
      "vi": "cosmetics",
      "id": "cosmetics",
      "es": "cosmetics",
      "pt": "cosmetics"
    }
  },
  {
    "id": "K0197",
    "k": "紹",
    "r": "しょう",
    "m": {
      "en": "introduce",
      "zh-TW": "紹",
      "zh-CN": "紹",
      "ko": "introduce",
      "vi": "introduce",
      "id": "introduce",
      "es": "introduce",
      "pt": "introduce"
    }
  },
  {
    "id": "K0198",
    "k": "肖",
    "r": "しょう",
    "m": {
      "en": "resemble",
      "zh-TW": "肖",
      "zh-CN": "肖",
      "ko": "resemble",
      "vi": "resemble",
      "id": "resemble",
      "es": "resemble",
      "pt": "resemble"
    }
  },
  {
    "id": "K0199",
    "k": "衝",
    "r": "しょう",
    "m": {
      "en": "collide",
      "zh-TW": "衝",
      "zh-CN": "衝",
      "ko": "collide",
      "vi": "collide",
      "id": "collide",
      "es": "collide",
      "pt": "collide"
    }
  },
  {
    "id": "K0200",
    "k": "訟",
    "r": "しょう",
    "m": {
      "en": "sue",
      "zh-TW": "訟",
      "zh-CN": "訟",
      "ko": "sue",
      "vi": "sue",
      "id": "sue",
      "es": "sue",
      "pt": "sue"
    }
  },
  {
    "id": "K0201",
    "k": "鐘",
    "r": "かね、しょう",
    "m": {
      "en": "bell",
      "zh-TW": "鐘",
      "zh-CN": "鐘",
      "ko": "bell",
      "vi": "bell",
      "id": "bell",
      "es": "bell",
      "pt": "bell"
    }
  },
  {
    "id": "K0202",
    "k": "障",
    "r": "さわ（る）、しょう",
    "m": {
      "en": "hinder",
      "zh-TW": "障",
      "zh-CN": "障",
      "ko": "hinder",
      "vi": "hinder",
      "id": "hinder",
      "es": "hinder",
      "pt": "hinder"
    }
  },
  {
    "id": "K0203",
    "k": "丈",
    "r": "たけ、じょう",
    "m": {
      "en": "length",
      "zh-TW": "丈",
      "zh-CN": "丈",
      "ko": "length",
      "vi": "length",
      "id": "length",
      "es": "length",
      "pt": "length"
    }
  },
  {
    "id": "K0204",
    "k": "冗",
    "r": "じょう",
    "m": {
      "en": "superfluous",
      "zh-TW": "冗",
      "zh-CN": "冗",
      "ko": "superfluous",
      "vi": "superfluous",
      "id": "superfluous",
      "es": "superfluous",
      "pt": "superfluous"
    }
  },
  {
    "id": "K0205",
    "k": "剰",
    "r": "じょう",
    "m": {
      "en": "surplus",
      "zh-TW": "剰",
      "zh-CN": "剰",
      "ko": "surplus",
      "vi": "surplus",
      "id": "surplus",
      "es": "surplus",
      "pt": "surplus"
    }
  },
  {
    "id": "K0206",
    "k": "壌",
    "r": "じょう",
    "m": {
      "en": "soil",
      "zh-TW": "壌",
      "zh-CN": "壌",
      "ko": "soil",
      "vi": "soil",
      "id": "soil",
      "es": "soil",
      "pt": "soil"
    }
  },
  {
    "id": "K0207",
    "k": "嬢",
    "r": "じょう",
    "m": {
      "en": "daughter",
      "zh-TW": "嬢",
      "zh-CN": "嬢",
      "ko": "daughter",
      "vi": "daughter",
      "id": "daughter",
      "es": "daughter",
      "pt": "daughter"
    }
  },
  {
    "id": "K0208",
    "k": "浄",
    "r": "きよ、じょう",
    "m": {
      "en": "clean",
      "zh-TW": "浄",
      "zh-CN": "浄",
      "ko": "clean",
      "vi": "clean",
      "id": "clean",
      "es": "limpio",
      "pt": "limpo"
    }
  },
  {
    "id": "K0209",
    "k": "畳",
    "r": "たた（む）、じょう",
    "m": {
      "en": "tatami",
      "zh-TW": "畳",
      "zh-CN": "畳",
      "ko": "tatami",
      "vi": "tatami",
      "id": "tatami",
      "es": "tatami",
      "pt": "tatami"
    }
  },
  {
    "id": "K0210",
    "k": "錠",
    "r": "じょう",
    "m": {
      "en": "lock",
      "zh-TW": "錠",
      "zh-CN": "錠",
      "ko": "lock",
      "vi": "lock",
      "id": "lock",
      "es": "lock",
      "pt": "lock"
    }
  },
  {
    "id": "K0211",
    "k": "譲",
    "r": "ゆず（る）、じょう",
    "m": {
      "en": "defer",
      "zh-TW": "譲",
      "zh-CN": "譲",
      "ko": "defer",
      "vi": "defer",
      "id": "defer",
      "es": "defer",
      "pt": "defer"
    }
  },
  {
    "id": "K0212",
    "k": "醸",
    "r": "かも、じょう",
    "m": {
      "en": "brew",
      "zh-TW": "醸",
      "zh-CN": "醸",
      "ko": "brew",
      "vi": "brew",
      "id": "brew",
      "es": "brew",
      "pt": "brew"
    }
  },
  {
    "id": "K0213",
    "k": "殖",
    "r": "しょく",
    "m": {
      "en": "multiply",
      "zh-TW": "殖",
      "zh-CN": "殖",
      "ko": "multiply",
      "vi": "multiply",
      "id": "multiply",
      "es": "multiply",
      "pt": "multiply"
    }
  },
  {
    "id": "K0214",
    "k": "嘱",
    "r": "しょく",
    "m": {
      "en": "entrust",
      "zh-TW": "嘱",
      "zh-CN": "嘱",
      "ko": "entrust",
      "vi": "entrust",
      "id": "entrust",
      "es": "entrust",
      "pt": "entrust"
    }
  },
  {
    "id": "K0215",
    "k": "侵",
    "r": "おか（す）、しん",
    "m": {
      "en": "invade",
      "zh-TW": "侵",
      "zh-CN": "侵",
      "ko": "invade",
      "vi": "invade",
      "id": "invade",
      "es": "invade",
      "pt": "invade"
    }
  },
  {
    "id": "K0216",
    "k": "唇",
    "r": "くちびる、しん",
    "m": {
      "en": "lips",
      "zh-TW": "唇",
      "zh-CN": "唇",
      "ko": "lips",
      "vi": "lips",
      "id": "lips",
      "es": "lips",
      "pt": "lips"
    }
  },
  {
    "id": "K0217",
    "k": "娠",
    "r": "しん",
    "m": {
      "en": "pregnant",
      "zh-TW": "娠",
      "zh-CN": "娠",
      "ko": "pregnant",
      "vi": "pregnant",
      "id": "pregnant",
      "es": "pregnant",
      "pt": "pregnant"
    }
  },
  {
    "id": "K0218",
    "k": "審",
    "r": "しん",
    "m": {
      "en": "hearing",
      "zh-TW": "審",
      "zh-CN": "審",
      "ko": "hearing",
      "vi": "hearing",
      "id": "hearing",
      "es": "hearing",
      "pt": "hearing"
    }
  },
  {
    "id": "K0219",
    "k": "慎",
    "r": "つつし（む）、しん",
    "m": {
      "en": "humility",
      "zh-TW": "慎",
      "zh-CN": "慎",
      "ko": "humility",
      "vi": "humility",
      "id": "humility",
      "es": "humility",
      "pt": "humility"
    }
  },
  {
    "id": "K0220",
    "k": "浸",
    "r": "ひた（す）、しん",
    "m": {
      "en": "immerse",
      "zh-TW": "浸",
      "zh-CN": "浸",
      "ko": "immerse",
      "vi": "immerse",
      "id": "immerse",
      "es": "immerse",
      "pt": "immerse"
    }
  },
  {
    "id": "K0221",
    "k": "紳",
    "r": "しん",
    "m": {
      "en": "gentleman",
      "zh-TW": "紳",
      "zh-CN": "紳",
      "ko": "gentleman",
      "vi": "gentleman",
      "id": "gentleman",
      "es": "gentleman",
      "pt": "gentleman"
    }
  },
  {
    "id": "K0222",
    "k": "薪",
    "r": "たきぎ、しん",
    "m": {
      "en": "firewood",
      "zh-TW": "薪",
      "zh-CN": "薪",
      "ko": "firewood",
      "vi": "firewood",
      "id": "firewood",
      "es": "firewood",
      "pt": "firewood"
    }
  },
  {
    "id": "K0223",
    "k": "診",
    "r": "み（る）、しん",
    "m": {
      "en": "checkup",
      "zh-TW": "診",
      "zh-CN": "診",
      "ko": "checkup",
      "vi": "checkup",
      "id": "checkup",
      "es": "checkup",
      "pt": "checkup"
    }
  },
  {
    "id": "K0224",
    "k": "辛",
    "r": "から（い）、しん",
    "m": {
      "en": "spicy",
      "zh-TW": "辛",
      "zh-CN": "辛",
      "ko": "spicy",
      "vi": "spicy",
      "id": "spicy",
      "es": "spicy",
      "pt": "spicy"
    }
  },
  {
    "id": "K0225",
    "k": "刃",
    "r": "は、じん",
    "m": {
      "en": "blade",
      "zh-TW": "刃",
      "zh-CN": "刃",
      "ko": "blade",
      "vi": "blade",
      "id": "blade",
      "es": "blade",
      "pt": "blade"
    }
  },
  {
    "id": "K0226",
    "k": "尋",
    "r": "たず（ねる）、じん",
    "m": {
      "en": "inquire",
      "zh-TW": "尋",
      "zh-CN": "尋",
      "ko": "inquire",
      "vi": "inquire",
      "id": "inquire",
      "es": "inquire",
      "pt": "inquire"
    }
  },
  {
    "id": "K0227",
    "k": "甚",
    "r": "はなは（だ）、じん",
    "m": {
      "en": "tremendously",
      "zh-TW": "甚",
      "zh-CN": "甚",
      "ko": "tremendously",
      "vi": "tremendously",
      "id": "tremendously",
      "es": "tremendously",
      "pt": "tremendously"
    }
  },
  {
    "id": "K0228",
    "k": "尽",
    "r": "つ（きる）、じん",
    "m": {
      "en": "exhaust",
      "zh-TW": "尽",
      "zh-CN": "尽",
      "ko": "exhaust",
      "vi": "exhaust",
      "id": "exhaust",
      "es": "exhaust",
      "pt": "exhaust"
    }
  },
  {
    "id": "K0229",
    "k": "迅",
    "r": "じん",
    "m": {
      "en": "swift",
      "zh-TW": "迅",
      "zh-CN": "迅",
      "ko": "swift",
      "vi": "swift",
      "id": "swift",
      "es": "swift",
      "pt": "swift"
    }
  },
  {
    "id": "K0230",
    "k": "陣",
    "r": "じん",
    "m": {
      "en": "camp",
      "zh-TW": "陣",
      "zh-CN": "陣",
      "ko": "camp",
      "vi": "camp",
      "id": "camp",
      "es": "camp",
      "pt": "camp"
    }
  },
  {
    "id": "K0231",
    "k": "吹",
    "r": "ふ（く）、すい",
    "m": {
      "en": "blow",
      "zh-TW": "吹",
      "zh-CN": "吹",
      "ko": "blow",
      "vi": "blow",
      "id": "blow",
      "es": "blow",
      "pt": "blow"
    }
  },
  {
    "id": "K0232",
    "k": "帥",
    "r": "すい",
    "m": {
      "en": "commander",
      "zh-TW": "帥",
      "zh-CN": "帥",
      "ko": "commander",
      "vi": "commander",
      "id": "commander",
      "es": "commander",
      "pt": "commander"
    }
  },
  {
    "id": "K0233",
    "k": "炊",
    "r": "た（く）、すい",
    "m": {
      "en": "cook",
      "zh-TW": "炊",
      "zh-CN": "炊",
      "ko": "cook",
      "vi": "cook",
      "id": "cook",
      "es": "cocinar",
      "pt": "cozinhar"
    }
  },
  {
    "id": "K0234",
    "k": "睡",
    "r": "すい",
    "m": {
      "en": "drowsy",
      "zh-TW": "睡",
      "zh-CN": "睡",
      "ko": "drowsy",
      "vi": "drowsy",
      "id": "drowsy",
      "es": "drowsy",
      "pt": "drowsy"
    }
  },
  {
    "id": "K0235",
    "k": "粋",
    "r": "いき、すい",
    "m": {
      "en": "chic",
      "zh-TW": "粋",
      "zh-CN": "粋",
      "ko": "chic",
      "vi": "chic",
      "id": "chic",
      "es": "chic",
      "pt": "chic"
    }
  },
  {
    "id": "K0236",
    "k": "衰",
    "r": "おとろ（える）、すい",
    "m": {
      "en": "decline",
      "zh-TW": "衰",
      "zh-CN": "衰",
      "ko": "decline",
      "vi": "decline",
      "id": "decline",
      "es": "decline",
      "pt": "decline"
    }
  },
  {
    "id": "K0237",
    "k": "遂",
    "r": "と（げる）、すい",
    "m": {
      "en": "accomplish",
      "zh-TW": "遂",
      "zh-CN": "遂",
      "ko": "accomplish",
      "vi": "accomplish",
      "id": "accomplish",
      "es": "accomplish",
      "pt": "accomplish"
    }
  },
  {
    "id": "K0238",
    "k": "酔",
    "r": "よ（う）、すい",
    "m": {
      "en": "drunk",
      "zh-TW": "酔",
      "zh-CN": "酔",
      "ko": "drunk",
      "vi": "drunk",
      "id": "drunk",
      "es": "drunk",
      "pt": "drunk"
    }
  },
  {
    "id": "K0239",
    "k": "随",
    "r": "ずい",
    "m": {
      "en": "follow",
      "zh-TW": "随",
      "zh-CN": "随",
      "ko": "follow",
      "vi": "follow",
      "id": "follow",
      "es": "seguir",
      "pt": "seguir"
    }
  },
  {
    "id": "K0240",
    "k": "髄",
    "r": "ずい",
    "m": {
      "en": "marrow",
      "zh-TW": "髄",
      "zh-CN": "髄",
      "ko": "marrow",
      "vi": "marrow",
      "id": "marrow",
      "es": "marrow",
      "pt": "marrow"
    }
  },
  {
    "id": "K0241",
    "k": "崇",
    "r": "あが（める）、すう",
    "m": {
      "en": "adore",
      "zh-TW": "崇",
      "zh-CN": "崇",
      "ko": "adore",
      "vi": "adore",
      "id": "adore",
      "es": "adore",
      "pt": "adore"
    }
  },
  {
    "id": "K0242",
    "k": "枢",
    "r": "すう",
    "m": {
      "en": "hinge",
      "zh-TW": "枢",
      "zh-CN": "枢",
      "ko": "hinge",
      "vi": "hinge",
      "id": "hinge",
      "es": "hinge",
      "pt": "hinge"
    }
  },
  {
    "id": "K0243",
    "k": "据",
    "r": "す（える）、きょ",
    "m": {
      "en": "set",
      "zh-TW": "据",
      "zh-CN": "据",
      "ko": "set",
      "vi": "set",
      "id": "set",
      "es": "set",
      "pt": "set"
    }
  },
  {
    "id": "K0244",
    "k": "杉",
    "r": "すぎ",
    "m": {
      "en": "cedar",
      "zh-TW": "杉",
      "zh-CN": "杉",
      "ko": "cedar",
      "vi": "cedar",
      "id": "cedar",
      "es": "cedar",
      "pt": "cedar"
    }
  },
  {
    "id": "K0245",
    "k": "澄",
    "r": "す（む）、ちょう",
    "m": {
      "en": "lucid",
      "zh-TW": "澄",
      "zh-CN": "澄",
      "ko": "lucid",
      "vi": "lucid",
      "id": "lucid",
      "es": "lucid",
      "pt": "lucid"
    }
  },
  {
    "id": "K0246",
    "k": "瀬",
    "r": "せ",
    "m": {
      "en": "rapids",
      "zh-TW": "瀬",
      "zh-CN": "瀬",
      "ko": "rapids",
      "vi": "rapids",
      "id": "rapids",
      "es": "rapids",
      "pt": "rapids"
    }
  },
  {
    "id": "K0247",
    "k": "是",
    "r": "ぜ",
    "m": {
      "en": "right",
      "zh-TW": "是",
      "zh-CN": "是",
      "ko": "right",
      "vi": "right",
      "id": "right",
      "es": "correcto",
      "pt": "correto"
    }
  },
  {
    "id": "K0248",
    "k": "征",
    "r": "せい",
    "m": {
      "en": "subjugate",
      "zh-TW": "征",
      "zh-CN": "征",
      "ko": "subjugate",
      "vi": "subjugate",
      "id": "subjugate",
      "es": "subjugate",
      "pt": "subjugate"
    }
  },
  {
    "id": "K0249",
    "k": "牲",
    "r": "せい",
    "m": {
      "en": "sacrifice",
      "zh-TW": "牲",
      "zh-CN": "牲",
      "ko": "sacrifice",
      "vi": "sacrifice",
      "id": "sacrifice",
      "es": "sacrifice",
      "pt": "sacrifice"
    }
  },
  {
    "id": "K0250",
    "k": "誓",
    "r": "ちかい、せい",
    "m": {
      "en": "vow",
      "zh-TW": "誓",
      "zh-CN": "誓",
      "ko": "vow",
      "vi": "vow",
      "id": "vow",
      "es": "vow",
      "pt": "vow"
    }
  },
  {
    "id": "K0251",
    "k": "請",
    "r": "う（まれる）、せい",
    "m": {
      "en": "solicit",
      "zh-TW": "請",
      "zh-CN": "請",
      "ko": "solicit",
      "vi": "solicit",
      "id": "solicit",
      "es": "solicit",
      "pt": "solicit"
    }
  },
  {
    "id": "K0252",
    "k": "逝",
    "r": "ゆ（く）、せい",
    "m": {
      "en": "departed",
      "zh-TW": "逝",
      "zh-CN": "逝",
      "ko": "departed",
      "vi": "departed",
      "id": "departed",
      "es": "departed",
      "pt": "departed"
    }
  },
  {
    "id": "K0253",
    "k": "隻",
    "r": "せき",
    "m": {
      "en": "vessels",
      "zh-TW": "隻",
      "zh-CN": "隻",
      "ko": "vessels",
      "vi": "vessels",
      "id": "vessels",
      "es": "vessels",
      "pt": "vessels"
    }
  },
  {
    "id": "K0254",
    "k": "惜",
    "r": "お（りる）、せき",
    "m": {
      "en": "pity",
      "zh-TW": "惜",
      "zh-CN": "惜",
      "ko": "pity",
      "vi": "pity",
      "id": "pity",
      "es": "pity",
      "pt": "pity"
    }
  },
  {
    "id": "K0255",
    "k": "斥",
    "r": "せき",
    "m": {
      "en": "reject",
      "zh-TW": "斥",
      "zh-CN": "斥",
      "ko": "reject",
      "vi": "reject",
      "id": "reject",
      "es": "reject",
      "pt": "reject"
    }
  },
  {
    "id": "K0256",
    "k": "析",
    "r": "せき",
    "m": {
      "en": "analyze",
      "zh-TW": "析",
      "zh-CN": "析",
      "ko": "analyze",
      "vi": "analyze",
      "id": "analyze",
      "es": "analyze",
      "pt": "analyze"
    }
  },
  {
    "id": "K0257",
    "k": "籍",
    "r": "せき",
    "m": {
      "en": "enroll",
      "zh-TW": "籍",
      "zh-CN": "籍",
      "ko": "enroll",
      "vi": "enroll",
      "id": "enroll",
      "es": "enroll",
      "pt": "enroll"
    }
  },
  {
    "id": "K0258",
    "k": "跡",
    "r": "あと、せき",
    "m": {
      "en": "tracks",
      "zh-TW": "跡",
      "zh-CN": "跡",
      "ko": "tracks",
      "vi": "tracks",
      "id": "tracks",
      "es": "tracks",
      "pt": "tracks"
    }
  },
  {
    "id": "K0259",
    "k": "拙",
    "r": "つたな（い）、せつ",
    "m": {
      "en": "bungling",
      "zh-TW": "拙",
      "zh-CN": "拙",
      "ko": "bungling",
      "vi": "bungling",
      "id": "bungling",
      "es": "bungling",
      "pt": "bungling"
    }
  },
  {
    "id": "K0260",
    "k": "摂",
    "r": "せつ",
    "m": {
      "en": "absorb",
      "zh-TW": "摂",
      "zh-CN": "摂",
      "ko": "absorb",
      "vi": "absorb",
      "id": "absorb",
      "es": "absorb",
      "pt": "absorb"
    }
  },
  {
    "id": "K0261",
    "k": "窃",
    "r": "せつ",
    "m": {
      "en": "stealth",
      "zh-TW": "窃",
      "zh-CN": "窃",
      "ko": "stealth",
      "vi": "stealth",
      "id": "stealth",
      "es": "stealth",
      "pt": "stealth"
    }
  },
  {
    "id": "K0262",
    "k": "仙",
    "r": "せん",
    "m": {
      "en": "hermit",
      "zh-TW": "仙",
      "zh-CN": "仙",
      "ko": "hermit",
      "vi": "hermit",
      "id": "hermit",
      "es": "hermit",
      "pt": "hermit"
    }
  },
  {
    "id": "K0263",
    "k": "占",
    "r": "し（める）、せん",
    "m": {
      "en": "fortune telling",
      "zh-TW": "占",
      "zh-CN": "占",
      "ko": "fortune telling",
      "vi": "fortune telling",
      "id": "fortune telling",
      "es": "fortune telling",
      "pt": "fortune telling"
    }
  },
  {
    "id": "K0264",
    "k": "扇",
    "r": "おうぎ、せん",
    "m": {
      "en": "fan",
      "zh-TW": "扇",
      "zh-CN": "扇",
      "ko": "fan",
      "vi": "fan",
      "id": "fan",
      "es": "fan",
      "pt": "fan"
    }
  },
  {
    "id": "K0265",
    "k": "栓",
    "r": "せん",
    "m": {
      "en": "plug",
      "zh-TW": "栓",
      "zh-CN": "栓",
      "ko": "plug",
      "vi": "plug",
      "id": "plug",
      "es": "plug",
      "pt": "plug"
    }
  },
  {
    "id": "K0266",
    "k": "潜",
    "r": "ひそ（む）、せん",
    "m": {
      "en": "submerge",
      "zh-TW": "潜",
      "zh-CN": "潜",
      "ko": "submerge",
      "vi": "submerge",
      "id": "submerge",
      "es": "submerge",
      "pt": "submerge"
    }
  },
  {
    "id": "K0267",
    "k": "旋",
    "r": "せん",
    "m": {
      "en": "rotation",
      "zh-TW": "旋",
      "zh-CN": "旋",
      "ko": "rotation",
      "vi": "rotation",
      "id": "rotation",
      "es": "rotation",
      "pt": "rotation"
    }
  },
  {
    "id": "K0268",
    "k": "繊",
    "r": "せん",
    "m": {
      "en": "slender",
      "zh-TW": "繊",
      "zh-CN": "繊",
      "ko": "slender",
      "vi": "slender",
      "id": "slender",
      "es": "slender",
      "pt": "slender"
    }
  },
  {
    "id": "K0269",
    "k": "薦",
    "r": "すす（める）、せん",
    "m": {
      "en": "recommend",
      "zh-TW": "薦",
      "zh-CN": "薦",
      "ko": "recommend",
      "vi": "recommend",
      "id": "recommend",
      "es": "recommend",
      "pt": "recommend"
    }
  },
  {
    "id": "K0270",
    "k": "践",
    "r": "せん",
    "m": {
      "en": "tread",
      "zh-TW": "践",
      "zh-CN": "践",
      "ko": "tread",
      "vi": "tread",
      "id": "tread",
      "es": "tread",
      "pt": "tread"
    }
  },
  {
    "id": "K0271",
    "k": "遷",
    "r": "せん",
    "m": {
      "en": "transition",
      "zh-TW": "遷",
      "zh-CN": "遷",
      "ko": "transition",
      "vi": "transition",
      "id": "transition",
      "es": "transition",
      "pt": "transition"
    }
  },
  {
    "id": "K0272",
    "k": "鮮",
    "r": "あざ（やか）、せん",
    "m": {
      "en": "fresh",
      "zh-TW": "鮮",
      "zh-CN": "鮮",
      "ko": "fresh",
      "vi": "fresh",
      "id": "fresh",
      "es": "fresh",
      "pt": "fresh"
    }
  },
  {
    "id": "K0273",
    "k": "漸",
    "r": "ぜん",
    "m": {
      "en": "steadily",
      "zh-TW": "漸",
      "zh-CN": "漸",
      "ko": "steadily",
      "vi": "steadily",
      "id": "steadily",
      "es": "steadily",
      "pt": "steadily"
    }
  },
  {
    "id": "K0274",
    "k": "繕",
    "r": "つくろ（う）、ぜん",
    "m": {
      "en": "mend",
      "zh-TW": "繕",
      "zh-CN": "繕",
      "ko": "mend",
      "vi": "mend",
      "id": "mend",
      "es": "mend",
      "pt": "mend"
    }
  },
  {
    "id": "K0275",
    "k": "膳",
    "r": "ぜん",
    "m": {
      "en": "tray",
      "zh-TW": "膳",
      "zh-CN": "膳",
      "ko": "tray",
      "vi": "tray",
      "id": "tray",
      "es": "tray",
      "pt": "tray"
    }
  },
  {
    "id": "K0276",
    "k": "礎",
    "r": "いしずえ、そ",
    "m": {
      "en": "cornerstone",
      "zh-TW": "礎",
      "zh-CN": "礎",
      "ko": "cornerstone",
      "vi": "cornerstone",
      "id": "cornerstone",
      "es": "cornerstone",
      "pt": "cornerstone"
    }
  },
  {
    "id": "K0277",
    "k": "租",
    "r": "そ",
    "m": {
      "en": "tariff",
      "zh-TW": "租",
      "zh-CN": "租",
      "ko": "tariff",
      "vi": "tariff",
      "id": "tariff",
      "es": "tariff",
      "pt": "tariff"
    }
  },
  {
    "id": "K0278",
    "k": "粗",
    "r": "あら（い）、そ",
    "m": {
      "en": "coarse",
      "zh-TW": "粗",
      "zh-CN": "粗",
      "ko": "coarse",
      "vi": "coarse",
      "id": "coarse",
      "es": "coarse",
      "pt": "coarse"
    }
  },
  {
    "id": "K0279",
    "k": "訴",
    "r": "うった（える）、そ",
    "m": {
      "en": "accusation",
      "zh-TW": "訴",
      "zh-CN": "訴",
      "ko": "accusation",
      "vi": "accusation",
      "id": "accusation",
      "es": "accusation",
      "pt": "accusation"
    }
  },
  {
    "id": "K0280",
    "k": "阻",
    "r": "はば（む）、そ",
    "m": {
      "en": "thwart",
      "zh-TW": "阻",
      "zh-CN": "阻",
      "ko": "thwart",
      "vi": "thwart",
      "id": "thwart",
      "es": "thwart",
      "pt": "thwart"
    }
  },
  {
    "id": "K0281",
    "k": "僧",
    "r": "そう",
    "m": {
      "en": "priest",
      "zh-TW": "僧",
      "zh-CN": "僧",
      "ko": "priest",
      "vi": "priest",
      "id": "priest",
      "es": "priest",
      "pt": "priest"
    }
  },
  {
    "id": "K0282",
    "k": "双",
    "r": "そう",
    "m": {
      "en": "pair",
      "zh-TW": "双",
      "zh-CN": "双",
      "ko": "pair",
      "vi": "pair",
      "id": "pair",
      "es": "pair",
      "pt": "pair"
    }
  },
  {
    "id": "K0283",
    "k": "喪",
    "r": "も、そう",
    "m": {
      "en": "mourning",
      "zh-TW": "喪",
      "zh-CN": "喪",
      "ko": "mourning",
      "vi": "mourning",
      "id": "mourning",
      "es": "mourning",
      "pt": "mourning"
    }
  },
  {
    "id": "K0284",
    "k": "壮",
    "r": "そう",
    "m": {
      "en": "robust",
      "zh-TW": "壮",
      "zh-CN": "壮",
      "ko": "robust",
      "vi": "robust",
      "id": "robust",
      "es": "robust",
      "pt": "robust"
    }
  },
  {
    "id": "K0285",
    "k": "捜",
    "r": "さが（す）、そう",
    "m": {
      "en": "search",
      "zh-TW": "捜",
      "zh-CN": "捜",
      "ko": "search",
      "vi": "search",
      "id": "search",
      "es": "buscar",
      "pt": "procurar"
    }
  },
  {
    "id": "K0286",
    "k": "挿",
    "r": "さが（す）、そう",
    "m": {
      "en": "insert",
      "zh-TW": "挿",
      "zh-CN": "挿",
      "ko": "insert",
      "vi": "insert",
      "id": "insert",
      "es": "insert",
      "pt": "insert"
    }
  },
  {
    "id": "K0287",
    "k": "曹",
    "r": "そう",
    "m": {
      "en": "office",
      "zh-TW": "曹",
      "zh-CN": "曹",
      "ko": "office",
      "vi": "office",
      "id": "office",
      "es": "oficina",
      "pt": "escritório"
    }
  },
  {
    "id": "K0288",
    "k": "槽",
    "r": "そう",
    "m": {
      "en": "vat",
      "zh-TW": "槽",
      "zh-CN": "槽",
      "ko": "vat",
      "vi": "vat",
      "id": "vat",
      "es": "vat",
      "pt": "vat"
    }
  },
  {
    "id": "K0289",
    "k": "燥",
    "r": "そう",
    "m": {
      "en": "parch",
      "zh-TW": "燥",
      "zh-CN": "燥",
      "ko": "parch",
      "vi": "parch",
      "id": "parch",
      "es": "parch",
      "pt": "parch"
    }
  },
  {
    "id": "K0290",
    "k": "荘",
    "r": "そう",
    "m": {
      "en": "villa",
      "zh-TW": "荘",
      "zh-CN": "荘",
      "ko": "villa",
      "vi": "villa",
      "id": "villa",
      "es": "villa",
      "pt": "villa"
    }
  },
  {
    "id": "K0291",
    "k": "葬",
    "r": "ほうむ（る）、そう",
    "m": {
      "en": "interment",
      "zh-TW": "葬",
      "zh-CN": "葬",
      "ko": "interment",
      "vi": "interment",
      "id": "interment",
      "es": "interment",
      "pt": "interment"
    }
  },
  {
    "id": "K0292",
    "k": "藻",
    "r": "も、そう",
    "m": {
      "en": "seaweed",
      "zh-TW": "藻",
      "zh-CN": "藻",
      "ko": "seaweed",
      "vi": "seaweed",
      "id": "seaweed",
      "es": "seaweed",
      "pt": "seaweed"
    }
  },
  {
    "id": "K0293",
    "k": "遭",
    "r": "あ（う）、そう",
    "m": {
      "en": "encounter",
      "zh-TW": "遭",
      "zh-CN": "遭",
      "ko": "encounter",
      "vi": "encounter",
      "id": "encounter",
      "es": "encounter",
      "pt": "encounter"
    }
  },
  {
    "id": "K0294",
    "k": "霜",
    "r": "しも、そう",
    "m": {
      "en": "frost",
      "zh-TW": "霜",
      "zh-CN": "霜",
      "ko": "frost",
      "vi": "frost",
      "id": "frost",
      "es": "frost",
      "pt": "frost"
    }
  },
  {
    "id": "K0295",
    "k": "憎",
    "r": "にく（む）、ぞう",
    "m": {
      "en": "hate",
      "zh-TW": "憎",
      "zh-CN": "憎",
      "ko": "hate",
      "vi": "hate",
      "id": "hate",
      "es": "odiar",
      "pt": "odiar"
    }
  },
  {
    "id": "K0296",
    "k": "贈",
    "r": "お（く）、ぞう",
    "m": {
      "en": "presents",
      "zh-TW": "贈",
      "zh-CN": "贈",
      "ko": "presents",
      "vi": "presents",
      "id": "presents",
      "es": "presents",
      "pt": "presents"
    }
  },
  {
    "id": "K0297",
    "k": "促",
    "r": "うなが（す）、そく",
    "m": {
      "en": "stimulate",
      "zh-TW": "促",
      "zh-CN": "促",
      "ko": "stimulate",
      "vi": "stimulate",
      "id": "stimulate",
      "es": "stimulate",
      "pt": "stimulate"
    }
  },
  {
    "id": "K0298",
    "k": "即",
    "r": "そく",
    "m": {
      "en": "instant",
      "zh-TW": "即",
      "zh-CN": "即",
      "ko": "instant",
      "vi": "instant",
      "id": "instant",
      "es": "instant",
      "pt": "instant"
    }
  },
  {
    "id": "K0299",
    "k": "俗",
    "r": "ぞく",
    "m": {
      "en": "vulgar",
      "zh-TW": "俗",
      "zh-CN": "俗",
      "ko": "vulgar",
      "vi": "vulgar",
      "id": "vulgar",
      "es": "vulgar",
      "pt": "vulgar"
    }
  },
  {
    "id": "K0300",
    "k": "賊",
    "r": "ぞく",
    "m": {
      "en": "burglar",
      "zh-TW": "賊",
      "zh-CN": "賊",
      "ko": "burglar",
      "vi": "burglar",
      "id": "burglar",
      "es": "burglar",
      "pt": "burglar"
    }
  },
  {
    "id": "K0301",
    "k": "堕",
    "r": "だ",
    "m": {
      "en": "degenerate",
      "zh-TW": "堕",
      "zh-CN": "堕",
      "ko": "degenerate",
      "vi": "degenerate",
      "id": "degenerate",
      "es": "degenerate",
      "pt": "degenerate"
    }
  },
  {
    "id": "K0302",
    "k": "妥",
    "r": "だ",
    "m": {
      "en": "gentle",
      "zh-TW": "妥",
      "zh-CN": "妥",
      "ko": "gentle",
      "vi": "gentle",
      "id": "gentle",
      "es": "gentle",
      "pt": "gentle"
    }
  },
  {
    "id": "K0303",
    "k": "惰",
    "r": "だ",
    "m": {
      "en": "lazy",
      "zh-TW": "惰",
      "zh-CN": "惰",
      "ko": "lazy",
      "vi": "lazy",
      "id": "lazy",
      "es": "lazy",
      "pt": "lazy"
    }
  },
  {
    "id": "K0304",
    "k": "駄",
    "r": "だ",
    "m": {
      "en": "burdensome",
      "zh-TW": "駄",
      "zh-CN": "駄",
      "ko": "burdensome",
      "vi": "burdensome",
      "id": "burdensome",
      "es": "burdensome",
      "pt": "burdensome"
    }
  },
  {
    "id": "K0305",
    "k": "耐",
    "r": "た（える）、たい",
    "m": {
      "en": "proof against",
      "zh-TW": "耐",
      "zh-CN": "耐",
      "ko": "proof against",
      "vi": "proof against",
      "id": "proof against",
      "es": "proof against",
      "pt": "proof against"
    }
  },
  {
    "id": "K0306",
    "k": "怠",
    "r": "おこた（る）、たい",
    "m": {
      "en": "neglect",
      "zh-TW": "怠",
      "zh-CN": "怠",
      "ko": "neglect",
      "vi": "neglect",
      "id": "neglect",
      "es": "neglect",
      "pt": "neglect"
    }
  },
  {
    "id": "K0307",
    "k": "替",
    "r": "か（える）、たい",
    "m": {
      "en": "exchange",
      "zh-TW": "替",
      "zh-CN": "替",
      "ko": "exchange",
      "vi": "exchange",
      "id": "exchange",
      "es": "exchange",
      "pt": "exchange"
    }
  },
  {
    "id": "K0308",
    "k": "泰",
    "r": "たい",
    "m": {
      "en": "peaceful",
      "zh-TW": "泰",
      "zh-CN": "泰",
      "ko": "peaceful",
      "vi": "peaceful",
      "id": "peaceful",
      "es": "pacífico",
      "pt": "pacífico"
    }
  },
  {
    "id": "K0309",
    "k": "滞",
    "r": "とどこお（る）、たい",
    "m": {
      "en": "stagnate",
      "zh-TW": "滞",
      "zh-CN": "滞",
      "ko": "stagnate",
      "vi": "stagnate",
      "id": "stagnate",
      "es": "stagnate",
      "pt": "stagnate"
    }
  },
  {
    "id": "K0310",
    "k": "胎",
    "r": "たい",
    "m": {
      "en": "womb",
      "zh-TW": "胎",
      "zh-CN": "胎",
      "ko": "womb",
      "vi": "womb",
      "id": "womb",
      "es": "womb",
      "pt": "womb"
    }
  },
  {
    "id": "K0311",
    "k": "袋",
    "r": "ふくろ、たい",
    "m": {
      "en": "bag",
      "zh-TW": "袋",
      "zh-CN": "袋",
      "ko": "bag",
      "vi": "bag",
      "id": "bag",
      "es": "bolsa",
      "pt": "bolsa"
    }
  },
  {
    "id": "K0312",
    "k": "逮",
    "r": "たい",
    "m": {
      "en": "apprehend",
      "zh-TW": "逮",
      "zh-CN": "逮",
      "ko": "apprehend",
      "vi": "apprehend",
      "id": "apprehend",
      "es": "apprehend",
      "pt": "apprehend"
    }
  },
  {
    "id": "K0313",
    "k": "滝",
    "r": "たき",
    "m": {
      "en": "waterfall",
      "zh-TW": "滝",
      "zh-CN": "滝",
      "ko": "waterfall",
      "vi": "waterfall",
      "id": "waterfall",
      "es": "waterfall",
      "pt": "waterfall"
    }
  },
  {
    "id": "K0314",
    "k": "卓",
    "r": "たく",
    "m": {
      "en": "eminent",
      "zh-TW": "卓",
      "zh-CN": "卓",
      "ko": "eminent",
      "vi": "eminent",
      "id": "eminent",
      "es": "eminent",
      "pt": "eminent"
    }
  },
  {
    "id": "K0315",
    "k": "択",
    "r": "たく",
    "m": {
      "en": "choose",
      "zh-TW": "択",
      "zh-CN": "択",
      "ko": "choose",
      "vi": "choose",
      "id": "choose",
      "es": "elegir",
      "pt": "escolher"
    }
  },
  {
    "id": "K0316",
    "k": "拓",
    "r": "たく",
    "m": {
      "en": "clear land",
      "zh-TW": "拓",
      "zh-CN": "拓",
      "ko": "clear land",
      "vi": "clear land",
      "id": "clear land",
      "es": "clear land",
      "pt": "clear land"
    }
  },
  {
    "id": "K0317",
    "k": "沢",
    "r": "さわ、たく",
    "m": {
      "en": "swamp",
      "zh-TW": "沢",
      "zh-CN": "沢",
      "ko": "swamp",
      "vi": "swamp",
      "id": "swamp",
      "es": "swamp",
      "pt": "swamp"
    }
  },
  {
    "id": "K0318",
    "k": "濯",
    "r": "たく",
    "m": {
      "en": "laundry",
      "zh-TW": "濯",
      "zh-CN": "濯",
      "ko": "laundry",
      "vi": "laundry",
      "id": "laundry",
      "es": "laundry",
      "pt": "laundry"
    }
  },
  {
    "id": "K0319",
    "k": "託",
    "r": "たく",
    "m": {
      "en": "consign",
      "zh-TW": "託",
      "zh-CN": "託",
      "ko": "consign",
      "vi": "consign",
      "id": "consign",
      "es": "consign",
      "pt": "consign"
    }
  },
  {
    "id": "K0320",
    "k": "諾",
    "r": "だく",
    "m": {
      "en": "consent",
      "zh-TW": "諾",
      "zh-CN": "諾",
      "ko": "consent",
      "vi": "consent",
      "id": "consent",
      "es": "consent",
      "pt": "consent"
    }
  },
  {
    "id": "K0321",
    "k": "濁",
    "r": "にご（る）、だく",
    "m": {
      "en": "voiced",
      "zh-TW": "濁",
      "zh-CN": "濁",
      "ko": "voiced",
      "vi": "voiced",
      "id": "voiced",
      "es": "voiced",
      "pt": "voiced"
    }
  },
  {
    "id": "K0322",
    "k": "但",
    "r": "ただ、たん",
    "m": {
      "en": "however",
      "zh-TW": "但",
      "zh-CN": "但",
      "ko": "however",
      "vi": "however",
      "id": "however",
      "es": "however",
      "pt": "however"
    }
  },
  {
    "id": "K0323",
    "k": "奪",
    "r": "うば、だつ",
    "m": {
      "en": "rob",
      "zh-TW": "奪",
      "zh-CN": "奪",
      "ko": "rob",
      "vi": "rob",
      "id": "rob",
      "es": "rob",
      "pt": "rob"
    }
  },
  {
    "id": "K0324",
    "k": "脱",
    "r": "ぬ（ぐ）、だつ",
    "m": {
      "en": "undress",
      "zh-TW": "脱",
      "zh-CN": "脱",
      "ko": "undress",
      "vi": "undress",
      "id": "undress",
      "es": "undress",
      "pt": "undress"
    }
  },
  {
    "id": "K0325",
    "k": "棚",
    "r": "たな",
    "m": {
      "en": "shelf",
      "zh-TW": "棚",
      "zh-CN": "棚",
      "ko": "shelf",
      "vi": "shelf",
      "id": "shelf",
      "es": "shelf",
      "pt": "shelf"
    }
  },
  {
    "id": "K0326",
    "k": "丹",
    "r": "たん",
    "m": {
      "en": "rust colored",
      "zh-TW": "丹",
      "zh-CN": "丹",
      "ko": "rust colored",
      "vi": "rust colored",
      "id": "rust colored",
      "es": "rust colored",
      "pt": "rust colored"
    }
  },
  {
    "id": "K0327",
    "k": "嘆",
    "r": "なげ（く）、たん",
    "m": {
      "en": "sigh",
      "zh-TW": "嘆",
      "zh-CN": "嘆",
      "ko": "sigh",
      "vi": "sigh",
      "id": "sigh",
      "es": "sigh",
      "pt": "sigh"
    }
  },
  {
    "id": "K0328",
    "k": "淡",
    "r": "あわ、たん",
    "m": {
      "en": "thin",
      "zh-TW": "淡",
      "zh-CN": "淡",
      "ko": "thin",
      "vi": "thin",
      "id": "thin",
      "es": "delgado",
      "pt": "fino"
    }
  },
  {
    "id": "K0329",
    "k": "端",
    "r": "はし、たん",
    "m": {
      "en": "edge",
      "zh-TW": "端",
      "zh-CN": "端",
      "ko": "edge",
      "vi": "edge",
      "id": "edge",
      "es": "edge",
      "pt": "edge"
    }
  },
  {
    "id": "K0330",
    "k": "胆",
    "r": "たん",
    "m": {
      "en": "gall bladder",
      "zh-TW": "胆",
      "zh-CN": "胆",
      "ko": "gall bladder",
      "vi": "gall bladder",
      "id": "gall bladder",
      "es": "gall bladder",
      "pt": "gall bladder"
    }
  },
  {
    "id": "K0331",
    "k": "鍛",
    "r": "きた（える）、たん",
    "m": {
      "en": "forge",
      "zh-TW": "鍛",
      "zh-CN": "鍛",
      "ko": "forge",
      "vi": "forge",
      "id": "forge",
      "es": "forge",
      "pt": "forge"
    }
  },
  {
    "id": "K0332",
    "k": "弾",
    "r": "たま、だん",
    "m": {
      "en": "bullet",
      "zh-TW": "弾",
      "zh-CN": "弾",
      "ko": "bullet",
      "vi": "bullet",
      "id": "bullet",
      "es": "bullet",
      "pt": "bullet"
    }
  },
  {
    "id": "K0333",
    "k": "壇",
    "r": "だん",
    "m": {
      "en": "podium",
      "zh-TW": "壇",
      "zh-CN": "壇",
      "ko": "podium",
      "vi": "podium",
      "id": "podium",
      "es": "podium",
      "pt": "podium"
    }
  },
  {
    "id": "K0334",
    "k": "痴",
    "r": "ち",
    "m": {
      "en": "stupid",
      "zh-TW": "痴",
      "zh-CN": "痴",
      "ko": "stupid",
      "vi": "stupid",
      "id": "stupid",
      "es": "stupid",
      "pt": "stupid"
    }
  },
  {
    "id": "K0335",
    "k": "稚",
    "r": "ち",
    "m": {
      "en": "immature",
      "zh-TW": "稚",
      "zh-CN": "稚",
      "ko": "immature",
      "vi": "immature",
      "id": "immature",
      "es": "immature",
      "pt": "immature"
    }
  },
  {
    "id": "K0336",
    "k": "致",
    "r": "いた（す）、ち",
    "m": {
      "en": "do",
      "zh-TW": "致",
      "zh-CN": "致",
      "ko": "do",
      "vi": "do",
      "id": "do",
      "es": "do",
      "pt": "do"
    }
  },
  {
    "id": "K0337",
    "k": "畜",
    "r": "ちく",
    "m": {
      "en": "livestock",
      "zh-TW": "畜",
      "zh-CN": "畜",
      "ko": "livestock",
      "vi": "livestock",
      "id": "livestock",
      "es": "livestock",
      "pt": "livestock"
    }
  },
  {
    "id": "K0338",
    "k": "蓄",
    "r": "たくわ（える）、ちく",
    "m": {
      "en": "amass",
      "zh-TW": "蓄",
      "zh-CN": "蓄",
      "ko": "amass",
      "vi": "amass",
      "id": "amass",
      "es": "amass",
      "pt": "amass"
    }
  },
  {
    "id": "K0339",
    "k": "逐",
    "r": "ちく",
    "m": {
      "en": "pursue",
      "zh-TW": "逐",
      "zh-CN": "逐",
      "ko": "pursue",
      "vi": "pursue",
      "id": "pursue",
      "es": "pursue",
      "pt": "pursue"
    }
  },
  {
    "id": "K0340",
    "k": "秩",
    "r": "ちつ",
    "m": {
      "en": "regularity",
      "zh-TW": "秩",
      "zh-CN": "秩",
      "ko": "regularity",
      "vi": "regularity",
      "id": "regularity",
      "es": "regularity",
      "pt": "regularity"
    }
  },
  {
    "id": "K0341",
    "k": "窒",
    "r": "ちつ",
    "m": {
      "en": "plug up",
      "zh-TW": "窒",
      "zh-CN": "窒",
      "ko": "plug up",
      "vi": "plug up",
      "id": "plug up",
      "es": "plug up",
      "pt": "plug up"
    }
  },
  {
    "id": "K0342",
    "k": "嫡",
    "r": "ちゃく",
    "m": {
      "en": "legitimate wife",
      "zh-TW": "嫡",
      "zh-CN": "嫡",
      "ko": "legitimate wife",
      "vi": "legitimate wife",
      "id": "legitimate wife",
      "es": "legitimate wife",
      "pt": "legitimate wife"
    }
  },
  {
    "id": "K0343",
    "k": "仲",
    "r": "なか、ちゅう",
    "m": {
      "en": "go-between",
      "zh-TW": "仲",
      "zh-CN": "仲",
      "ko": "go-between",
      "vi": "go-between",
      "id": "go-between",
      "es": "go-between",
      "pt": "go-between"
    }
  },
  {
    "id": "K0344",
    "k": "宙",
    "r": "ちゅう",
    "m": {
      "en": "midair",
      "zh-TW": "宙",
      "zh-CN": "宙",
      "ko": "midair",
      "vi": "midair",
      "id": "midair",
      "es": "midair",
      "pt": "midair"
    }
  },
  {
    "id": "K0345",
    "k": "忠",
    "r": "ちゅう",
    "m": {
      "en": "loyalty",
      "zh-TW": "忠",
      "zh-CN": "忠",
      "ko": "loyalty",
      "vi": "loyalty",
      "id": "loyalty",
      "es": "loyalty",
      "pt": "loyalty"
    }
  },
  {
    "id": "K0346",
    "k": "抽",
    "r": "ちゅう",
    "m": {
      "en": "pluck",
      "zh-TW": "抽",
      "zh-CN": "抽",
      "ko": "pluck",
      "vi": "pluck",
      "id": "pluck",
      "es": "pluck",
      "pt": "pluck"
    }
  },
  {
    "id": "K0347",
    "k": "鋳",
    "r": "い（く）、ちゅう",
    "m": {
      "en": "casting",
      "zh-TW": "鋳",
      "zh-CN": "鋳",
      "ko": "casting",
      "vi": "casting",
      "id": "casting",
      "es": "casting",
      "pt": "casting"
    }
  },
  {
    "id": "K0348",
    "k": "弔",
    "r": "とむら（う）、ちょう",
    "m": {
      "en": "condolences",
      "zh-TW": "弔",
      "zh-CN": "弔",
      "ko": "condolences",
      "vi": "condolences",
      "id": "condolences",
      "es": "condolences",
      "pt": "condolences"
    }
  },
  {
    "id": "K0349",
    "k": "彫",
    "r": "ほ（る）、ちょう",
    "m": {
      "en": "carve",
      "zh-TW": "彫",
      "zh-CN": "彫",
      "ko": "carve",
      "vi": "carve",
      "id": "carve",
      "es": "carve",
      "pt": "carve"
    }
  },
  {
    "id": "K0350",
    "k": "眺",
    "r": "なが（める）、ちょう",
    "m": {
      "en": "stare",
      "zh-TW": "眺",
      "zh-CN": "眺",
      "ko": "stare",
      "vi": "stare",
      "id": "stare",
      "es": "stare",
      "pt": "stare"
    }
  },
  {
    "id": "K0351",
    "k": "脹",
    "r": "は、ちょう",
    "m": {
      "en": "dilate",
      "zh-TW": "脹",
      "zh-CN": "脹",
      "ko": "dilate",
      "vi": "dilate",
      "id": "dilate",
      "es": "dilate",
      "pt": "dilate"
    }
  },
  {
    "id": "K0352",
    "k": "鎮",
    "r": "しず（める）、ちん",
    "m": {
      "en": "tranquilize",
      "zh-TW": "鎮",
      "zh-CN": "鎮",
      "ko": "tranquilize",
      "vi": "tranquilize",
      "id": "tranquilize",
      "es": "tranquilize",
      "pt": "tranquilize"
    }
  },
  {
    "id": "K0353",
    "k": "陳",
    "r": "ちん",
    "m": {
      "en": "exhibit",
      "zh-TW": "陳",
      "zh-CN": "陳",
      "ko": "exhibit",
      "vi": "exhibit",
      "id": "exhibit",
      "es": "exhibit",
      "pt": "exhibit"
    }
  },
  {
    "id": "K0354",
    "k": "墜",
    "r": "つい",
    "m": {
      "en": "crash",
      "zh-TW": "墜",
      "zh-CN": "墜",
      "ko": "crash",
      "vi": "crash",
      "id": "crash",
      "es": "crash",
      "pt": "crash"
    }
  },
  {
    "id": "K0355",
    "k": "塚",
    "r": "つか",
    "m": {
      "en": "mound",
      "zh-TW": "塚",
      "zh-CN": "塚",
      "ko": "mound",
      "vi": "mound",
      "id": "mound",
      "es": "mound",
      "pt": "mound"
    }
  },
  {
    "id": "K0356",
    "k": "漬",
    "r": "つ（ける）、し",
    "m": {
      "en": "pickling",
      "zh-TW": "漬",
      "zh-CN": "漬",
      "ko": "pickling",
      "vi": "pickling",
      "id": "pickling",
      "es": "pickling",
      "pt": "pickling"
    }
  },
  {
    "id": "K0357",
    "k": "坪",
    "r": "つぼ",
    "m": {
      "en": "two-mat area",
      "zh-TW": "坪",
      "zh-CN": "坪",
      "ko": "two-mat area",
      "vi": "two-mat area",
      "id": "two-mat area",
      "es": "two-mat area",
      "pt": "two-mat area"
    }
  },
  {
    "id": "K0358",
    "k": "釣",
    "r": "つ（る）、ちょう",
    "m": {
      "en": "angling",
      "zh-TW": "釣",
      "zh-CN": "釣",
      "ko": "angling",
      "vi": "angling",
      "id": "angling",
      "es": "angling",
      "pt": "angling"
    }
  },
  {
    "id": "K0359",
    "k": "亭",
    "r": "てい",
    "m": {
      "en": "pavilion",
      "zh-TW": "亭",
      "zh-CN": "亭",
      "ko": "pavilion",
      "vi": "pavilion",
      "id": "pavilion",
      "es": "pavilion",
      "pt": "pavilion"
    }
  },
  {
    "id": "K0360",
    "k": "偵",
    "r": "てい",
    "m": {
      "en": "spy",
      "zh-TW": "偵",
      "zh-CN": "偵",
      "ko": "spy",
      "vi": "spy",
      "id": "spy",
      "es": "spy",
      "pt": "spy"
    }
  },
  {
    "id": "K0361",
    "k": "貞",
    "r": "てい",
    "m": {
      "en": "upright",
      "zh-TW": "貞",
      "zh-CN": "貞",
      "ko": "upright",
      "vi": "upright",
      "id": "upright",
      "es": "upright",
      "pt": "upright"
    }
  },
  {
    "id": "K0362",
    "k": "呈",
    "r": "てい",
    "m": {
      "en": "display",
      "zh-TW": "呈",
      "zh-CN": "呈",
      "ko": "display",
      "vi": "display",
      "id": "display",
      "es": "display",
      "pt": "display"
    }
  },
  {
    "id": "K0363",
    "k": "堤",
    "r": "つつみ、てい",
    "m": {
      "en": "dike",
      "zh-TW": "堤",
      "zh-CN": "堤",
      "ko": "dike",
      "vi": "dike",
      "id": "dike",
      "es": "dike",
      "pt": "dike"
    }
  },
  {
    "id": "K0364",
    "k": "帝",
    "r": "てい",
    "m": {
      "en": "sovereign",
      "zh-TW": "帝",
      "zh-CN": "帝",
      "ko": "sovereign",
      "vi": "sovereign",
      "id": "sovereign",
      "es": "sovereign",
      "pt": "sovereign"
    }
  },
  {
    "id": "K0365",
    "k": "廷",
    "r": "てい",
    "m": {
      "en": "courts",
      "zh-TW": "廷",
      "zh-CN": "廷",
      "ko": "courts",
      "vi": "courts",
      "id": "courts",
      "es": "courts",
      "pt": "courts"
    }
  },
  {
    "id": "K0366",
    "k": "抵",
    "r": "てい",
    "m": {
      "en": "resist",
      "zh-TW": "抵",
      "zh-CN": "抵",
      "ko": "resist",
      "vi": "resist",
      "id": "resist",
      "es": "resist",
      "pt": "resist"
    }
  },
  {
    "id": "K0367",
    "k": "締",
    "r": "し（める）、てい",
    "m": {
      "en": "tighten",
      "zh-TW": "締",
      "zh-CN": "締",
      "ko": "tighten",
      "vi": "tighten",
      "id": "tighten",
      "es": "tighten",
      "pt": "tighten"
    }
  },
  {
    "id": "K0368",
    "k": "艇",
    "r": "てい",
    "m": {
      "en": "rowboat",
      "zh-TW": "艇",
      "zh-CN": "艇",
      "ko": "rowboat",
      "vi": "rowboat",
      "id": "rowboat",
      "es": "rowboat",
      "pt": "rowboat"
    }
  },
  {
    "id": "K0369",
    "k": "訂",
    "r": "てい",
    "m": {
      "en": "revise",
      "zh-TW": "訂",
      "zh-CN": "訂",
      "ko": "revise",
      "vi": "revise",
      "id": "revise",
      "es": "revise",
      "pt": "revise"
    }
  },
  {
    "id": "K0370",
    "k": "逓",
    "r": "てい",
    "m": {
      "en": "relay",
      "zh-TW": "逓",
      "zh-CN": "逓",
      "ko": "relay",
      "vi": "relay",
      "id": "relay",
      "es": "relay",
      "pt": "relay"
    }
  },
  {
    "id": "K0371",
    "k": "邸",
    "r": "てい",
    "m": {
      "en": "residence",
      "zh-TW": "邸",
      "zh-CN": "邸",
      "ko": "residence",
      "vi": "residence",
      "id": "residence",
      "es": "residence",
      "pt": "residence"
    }
  },
  {
    "id": "K0372",
    "k": "摘",
    "r": "つ（む）、てき",
    "m": {
      "en": "pinch",
      "zh-TW": "摘",
      "zh-CN": "摘",
      "ko": "pinch",
      "vi": "pinch",
      "id": "pinch",
      "es": "pinch",
      "pt": "pinch"
    }
  },
  {
    "id": "K0373",
    "k": "滴",
    "r": "しずく、てき",
    "m": {
      "en": "drip",
      "zh-TW": "滴",
      "zh-CN": "滴",
      "ko": "drip",
      "vi": "drip",
      "id": "drip",
      "es": "drip",
      "pt": "drip"
    }
  },
  {
    "id": "K0374",
    "k": "哲",
    "r": "てつ",
    "m": {
      "en": "philosophy",
      "zh-TW": "哲",
      "zh-CN": "哲",
      "ko": "philosophy",
      "vi": "philosophy",
      "id": "philosophy",
      "es": "philosophy",
      "pt": "philosophy"
    }
  },
  {
    "id": "K0375",
    "k": "徹",
    "r": "てつ",
    "m": {
      "en": "penetrate",
      "zh-TW": "徹",
      "zh-CN": "徹",
      "ko": "penetrate",
      "vi": "penetrate",
      "id": "penetrate",
      "es": "penetrate",
      "pt": "penetrate"
    }
  },
  {
    "id": "K0376",
    "k": "撤",
    "r": "てつ",
    "m": {
      "en": "remove",
      "zh-TW": "撤",
      "zh-CN": "撤",
      "ko": "remove",
      "vi": "remove",
      "id": "remove",
      "es": "quitar",
      "pt": "remover"
    }
  },
  {
    "id": "K0377",
    "k": "迭",
    "r": "てつ",
    "m": {
      "en": "transfer",
      "zh-TW": "迭",
      "zh-CN": "迭",
      "ko": "transfer",
      "vi": "transfer",
      "id": "transfer",
      "es": "transfer",
      "pt": "transfer"
    }
  },
  {
    "id": "K0378",
    "k": "塡",
    "r": "てん",
    "m": {
      "en": "fill in",
      "zh-TW": "塡",
      "zh-CN": "塡",
      "ko": "fill in",
      "vi": "fill in",
      "id": "fill in",
      "es": "fill in",
      "pt": "fill in"
    }
  },
  {
    "id": "K0379",
    "k": "殿",
    "r": "との、でん",
    "m": {
      "en": "lord",
      "zh-TW": "殿",
      "zh-CN": "殿",
      "ko": "lord",
      "vi": "lord",
      "id": "lord",
      "es": "lord",
      "pt": "lord"
    }
  },
  {
    "id": "K0380",
    "k": "吐",
    "r": "は（く）、と",
    "m": {
      "en": "spit",
      "zh-TW": "吐",
      "zh-CN": "吐",
      "ko": "spit",
      "vi": "spit",
      "id": "spit",
      "es": "spit",
      "pt": "spit"
    }
  },
  {
    "id": "K0381",
    "k": "塗",
    "r": "ぬ（る）、と",
    "m": {
      "en": "paint",
      "zh-TW": "塗",
      "zh-CN": "塗",
      "ko": "paint",
      "vi": "paint",
      "id": "paint",
      "es": "paint",
      "pt": "paint"
    }
  },
  {
    "id": "K0382",
    "k": "妬",
    "r": "ねた、と",
    "m": {
      "en": "jealous",
      "zh-TW": "妬",
      "zh-CN": "妬",
      "ko": "jealous",
      "vi": "jealous",
      "id": "jealous",
      "es": "celoso",
      "pt": "ciumento"
    }
  },
  {
    "id": "K0383",
    "k": "途",
    "r": "と",
    "m": {
      "en": "route",
      "zh-TW": "途",
      "zh-CN": "途",
      "ko": "route",
      "vi": "route",
      "id": "route",
      "es": "route",
      "pt": "route"
    }
  },
  {
    "id": "K0384",
    "k": "奴",
    "r": "やつ、ど",
    "m": {
      "en": "guy",
      "zh-TW": "奴",
      "zh-CN": "奴",
      "ko": "guy",
      "vi": "guy",
      "id": "guy",
      "es": "guy",
      "pt": "guy"
    }
  },
  {
    "id": "K0385",
    "k": "到",
    "r": "とう",
    "m": {
      "en": "arrival",
      "zh-TW": "到",
      "zh-CN": "到",
      "ko": "arrival",
      "vi": "arrival",
      "id": "arrival",
      "es": "arrival",
      "pt": "arrival"
    }
  },
  {
    "id": "K0386",
    "k": "倒",
    "r": "たお（れる）、とう",
    "m": {
      "en": "overthrow",
      "zh-TW": "倒",
      "zh-CN": "倒",
      "ko": "overthrow",
      "vi": "overthrow",
      "id": "overthrow",
      "es": "overthrow",
      "pt": "overthrow"
    }
  },
  {
    "id": "K0387",
    "k": "唐",
    "r": "とう",
    "m": {
      "en": "Tang",
      "zh-TW": "唐",
      "zh-CN": "唐",
      "ko": "Tang",
      "vi": "Tang",
      "id": "Tang",
      "es": "Tang",
      "pt": "Tang"
    }
  },
  {
    "id": "K0388",
    "k": "塔",
    "r": "とう",
    "m": {
      "en": "pagoda",
      "zh-TW": "塔",
      "zh-CN": "塔",
      "ko": "pagoda",
      "vi": "pagoda",
      "id": "pagoda",
      "es": "pagoda",
      "pt": "pagoda"
    }
  },
  {
    "id": "K0389",
    "k": "悼",
    "r": "いた（む）、とう",
    "m": {
      "en": "grieve",
      "zh-TW": "悼",
      "zh-CN": "悼",
      "ko": "grieve",
      "vi": "grieve",
      "id": "grieve",
      "es": "grieve",
      "pt": "grieve"
    }
  },
  {
    "id": "K0390",
    "k": "搭",
    "r": "とう",
    "m": {
      "en": "board",
      "zh-TW": "搭",
      "zh-CN": "搭",
      "ko": "board",
      "vi": "board",
      "id": "board",
      "es": "board",
      "pt": "board"
    }
  },
  {
    "id": "K0391",
    "k": "桃",
    "r": "もも、とう",
    "m": {
      "en": "peach",
      "zh-TW": "桃",
      "zh-CN": "桃",
      "ko": "peach",
      "vi": "peach",
      "id": "peach",
      "es": "peach",
      "pt": "peach"
    }
  },
  {
    "id": "K0392",
    "k": "棟",
    "r": "むね、とう",
    "m": {
      "en": "ridgepole",
      "zh-TW": "棟",
      "zh-CN": "棟",
      "ko": "ridgepole",
      "vi": "ridgepole",
      "id": "ridgepole",
      "es": "ridgepole",
      "pt": "ridgepole"
    }
  },
  {
    "id": "K0393",
    "k": "盗",
    "r": "ぬす（む）、とう",
    "m": {
      "en": "steal",
      "zh-TW": "盗",
      "zh-CN": "盗",
      "ko": "steal",
      "vi": "steal",
      "id": "steal",
      "es": "steal",
      "pt": "steal"
    }
  },
  {
    "id": "K0394",
    "k": "痘",
    "r": "とう",
    "m": {
      "en": "pox",
      "zh-TW": "痘",
      "zh-CN": "痘",
      "ko": "pox",
      "vi": "pox",
      "id": "pox",
      "es": "pox",
      "pt": "pox"
    }
  },
  {
    "id": "K0395",
    "k": "透",
    "r": "す（く）、とう",
    "m": {
      "en": "transparent",
      "zh-TW": "透",
      "zh-CN": "透",
      "ko": "transparent",
      "vi": "transparent",
      "id": "transparent",
      "es": "transparent",
      "pt": "transparent"
    }
  },
  {
    "id": "K0396",
    "k": "陶",
    "r": "とう",
    "m": {
      "en": "pottery",
      "zh-TW": "陶",
      "zh-CN": "陶",
      "ko": "pottery",
      "vi": "pottery",
      "id": "pottery",
      "es": "pottery",
      "pt": "pottery"
    }
  },
  {
    "id": "K0397",
    "k": "騰",
    "r": "とう",
    "m": {
      "en": "rising",
      "zh-TW": "騰",
      "zh-CN": "騰",
      "ko": "rising",
      "vi": "rising",
      "id": "rising",
      "es": "rising",
      "pt": "rising"
    }
  },
  {
    "id": "K0398",
    "k": "闘",
    "r": "たたか（う）、とう",
    "m": {
      "en": "fight",
      "zh-TW": "闘",
      "zh-CN": "闘",
      "ko": "fight",
      "vi": "fight",
      "id": "fight",
      "es": "luchar",
      "pt": "lutar"
    }
  },
  {
    "id": "K0399",
    "k": "洞",
    "r": "ほら、どう",
    "m": {
      "en": "cave",
      "zh-TW": "洞",
      "zh-CN": "洞",
      "ko": "cave",
      "vi": "cave",
      "id": "cave",
      "es": "cave",
      "pt": "cave"
    }
  },
  {
    "id": "K0400",
    "k": "胴",
    "r": "どう",
    "m": {
      "en": "trunk",
      "zh-TW": "胴",
      "zh-CN": "胴",
      "ko": "trunk",
      "vi": "trunk",
      "id": "trunk",
      "es": "trunk",
      "pt": "trunk"
    }
  },
  {
    "id": "K0401",
    "k": "峠",
    "r": "とうげ",
    "m": {
      "en": "mountain pass",
      "zh-TW": "峠",
      "zh-CN": "峠",
      "ko": "mountain pass",
      "vi": "mountain pass",
      "id": "mountain pass",
      "es": "mountain pass",
      "pt": "mountain pass"
    }
  },
  {
    "id": "K0402",
    "k": "匿",
    "r": "とく",
    "m": {
      "en": "hide",
      "zh-TW": "匿",
      "zh-CN": "匿",
      "ko": "hide",
      "vi": "hide",
      "id": "hide",
      "es": "esconder",
      "pt": "esconder"
    }
  },
  {
    "id": "K0403",
    "k": "督",
    "r": "とく",
    "m": {
      "en": "coach",
      "zh-TW": "督",
      "zh-CN": "督",
      "ko": "coach",
      "vi": "coach",
      "id": "coach",
      "es": "coach",
      "pt": "coach"
    }
  },
  {
    "id": "K0404",
    "k": "篤",
    "r": "あつ（い）、とく",
    "m": {
      "en": "fervent",
      "zh-TW": "篤",
      "zh-CN": "篤",
      "ko": "fervent",
      "vi": "fervent",
      "id": "fervent",
      "es": "fervent",
      "pt": "fervent"
    }
  },
  {
    "id": "K0405",
    "k": "凸",
    "r": "とつ",
    "m": {
      "en": "convex",
      "zh-TW": "凸",
      "zh-CN": "凸",
      "ko": "convex",
      "vi": "convex",
      "id": "convex",
      "es": "convex",
      "pt": "convex"
    }
  },
  {
    "id": "K0406",
    "k": "突",
    "r": "つ（く）、とつ",
    "m": {
      "en": "stab",
      "zh-TW": "突",
      "zh-CN": "突",
      "ko": "stab",
      "vi": "stab",
      "id": "stab",
      "es": "stab",
      "pt": "stab"
    }
  },
  {
    "id": "K0407",
    "k": "屯",
    "r": "とん",
    "m": {
      "en": "barracks",
      "zh-TW": "屯",
      "zh-CN": "屯",
      "ko": "barracks",
      "vi": "barracks",
      "id": "barracks",
      "es": "barracks",
      "pt": "barracks"
    }
  },
  {
    "id": "K0408",
    "k": "豚",
    "r": "ぶた、とん",
    "m": {
      "en": "pork",
      "zh-TW": "豚",
      "zh-CN": "豚",
      "ko": "pork",
      "vi": "pork",
      "id": "pork",
      "es": "pork",
      "pt": "pork"
    }
  },
  {
    "id": "K0409",
    "k": "曇",
    "r": "くも（る）、どん",
    "m": {
      "en": "cloudy",
      "zh-TW": "曇",
      "zh-CN": "曇",
      "ko": "cloudy",
      "vi": "cloudy",
      "id": "cloudy",
      "es": "cloudy",
      "pt": "cloudy"
    }
  },
  {
    "id": "K0410",
    "k": "縄",
    "r": "なわ、じょう",
    "m": {
      "en": "rope",
      "zh-TW": "縄",
      "zh-CN": "縄",
      "ko": "rope",
      "vi": "rope",
      "id": "rope",
      "es": "rope",
      "pt": "rope"
    }
  },
  {
    "id": "K0411",
    "k": "尼",
    "r": "あま、に",
    "m": {
      "en": "nun",
      "zh-TW": "尼",
      "zh-CN": "尼",
      "ko": "nun",
      "vi": "nun",
      "id": "nun",
      "es": "nun",
      "pt": "nun"
    }
  },
  {
    "id": "K0412",
    "k": "弐",
    "r": "に",
    "m": {
      "en": "two",
      "zh-TW": "弐",
      "zh-CN": "弐",
      "ko": "two",
      "vi": "two",
      "id": "two",
      "es": "dos",
      "pt": "dois"
    }
  },
  {
    "id": "K0413",
    "k": "匂",
    "r": "にお（う）",
    "m": {
      "en": "fragrant",
      "zh-TW": "匂",
      "zh-CN": "匂",
      "ko": "fragrant",
      "vi": "fragrant",
      "id": "fragrant",
      "es": "fragrant",
      "pt": "fragrant"
    }
  },
  {
    "id": "K0414",
    "k": "虹",
    "r": "にじ、こう",
    "m": {
      "en": "rainbow",
      "zh-TW": "虹",
      "zh-CN": "虹",
      "ko": "rainbow",
      "vi": "rainbow",
      "id": "rainbow",
      "es": "rainbow",
      "pt": "rainbow"
    }
  },
  {
    "id": "K0415",
    "k": "如",
    "r": "にょ",
    "m": {
      "en": "likeness",
      "zh-TW": "如",
      "zh-CN": "如",
      "ko": "likeness",
      "vi": "likeness",
      "id": "likeness",
      "es": "likeness",
      "pt": "likeness"
    }
  },
  {
    "id": "K0416",
    "k": "尿",
    "r": "にょう",
    "m": {
      "en": "urine",
      "zh-TW": "尿",
      "zh-CN": "尿",
      "ko": "urine",
      "vi": "urine",
      "id": "urine",
      "es": "urine",
      "pt": "urine"
    }
  },
  {
    "id": "K0417",
    "k": "妊",
    "r": "にん",
    "m": {
      "en": "pregnancy",
      "zh-TW": "妊",
      "zh-CN": "妊",
      "ko": "pregnancy",
      "vi": "pregnancy",
      "id": "pregnancy",
      "es": "pregnancy",
      "pt": "pregnancy"
    }
  },
  {
    "id": "K0418",
    "k": "忍",
    "r": "しの（ぶ）、にん",
    "m": {
      "en": "endure",
      "zh-TW": "忍",
      "zh-CN": "忍",
      "ko": "endure",
      "vi": "endure",
      "id": "endure",
      "es": "endure",
      "pt": "endure"
    }
  },
  {
    "id": "K0419",
    "k": "寧",
    "r": "ねい",
    "m": {
      "en": "rather",
      "zh-TW": "寧",
      "zh-CN": "寧",
      "ko": "rather",
      "vi": "rather",
      "id": "rather",
      "es": "rather",
      "pt": "rather"
    }
  },
  {
    "id": "K0420",
    "k": "粘",
    "r": "ねば（る）、ねん",
    "m": {
      "en": "sticky",
      "zh-TW": "粘",
      "zh-CN": "粘",
      "ko": "sticky",
      "vi": "sticky",
      "id": "sticky",
      "es": "sticky",
      "pt": "sticky"
    }
  },
  {
    "id": "K0421",
    "k": "把",
    "r": "は",
    "m": {
      "en": "grasp",
      "zh-TW": "把",
      "zh-CN": "把",
      "ko": "grasp",
      "vi": "grasp",
      "id": "grasp",
      "es": "grasp",
      "pt": "grasp"
    }
  },
  {
    "id": "K0422",
    "k": "覇",
    "r": "は",
    "m": {
      "en": "hegemony",
      "zh-TW": "覇",
      "zh-CN": "覇",
      "ko": "hegemony",
      "vi": "hegemony",
      "id": "hegemony",
      "es": "hegemony",
      "pt": "hegemony"
    }
  },
  {
    "id": "K0423",
    "k": "婆",
    "r": "ばば、ば",
    "m": {
      "en": "old woman",
      "zh-TW": "婆",
      "zh-CN": "婆",
      "ko": "old woman",
      "vi": "old woman",
      "id": "old woman",
      "es": "old woman",
      "pt": "old woman"
    }
  },
  {
    "id": "K0424",
    "k": "廃",
    "r": "はい",
    "m": {
      "en": "abolish",
      "zh-TW": "廃",
      "zh-CN": "廃",
      "ko": "abolish",
      "vi": "abolish",
      "id": "abolish",
      "es": "abolish",
      "pt": "abolish"
    }
  },
  {
    "id": "K0425",
    "k": "排",
    "r": "はい",
    "m": {
      "en": "repudiate",
      "zh-TW": "排",
      "zh-CN": "排",
      "ko": "repudiate",
      "vi": "repudiate",
      "id": "repudiate",
      "es": "repudiate",
      "pt": "repudiate"
    }
  },
  {
    "id": "K0426",
    "k": "杯",
    "r": "さかずき、はい",
    "m": {
      "en": "counter for cupfuls",
      "zh-TW": "杯",
      "zh-CN": "杯",
      "ko": "counter for cupfuls",
      "vi": "counter for cupfuls",
      "id": "counter for cupfuls",
      "es": "counter for cupfuls",
      "pt": "counter for cupfuls"
    }
  },
  {
    "id": "K0427",
    "k": "輩",
    "r": "はい",
    "m": {
      "en": "comrade",
      "zh-TW": "輩",
      "zh-CN": "輩",
      "ko": "comrade",
      "vi": "comrade",
      "id": "comrade",
      "es": "comrade",
      "pt": "comrade"
    }
  },
  {
    "id": "K0428",
    "k": "培",
    "r": "つちか（う）、ばい",
    "m": {
      "en": "cultivate",
      "zh-TW": "培",
      "zh-CN": "培",
      "ko": "cultivate",
      "vi": "cultivate",
      "id": "cultivate",
      "es": "cultivate",
      "pt": "cultivate"
    }
  },
  {
    "id": "K0429",
    "k": "媒",
    "r": "ばい",
    "m": {
      "en": "mediator",
      "zh-TW": "媒",
      "zh-CN": "媒",
      "ko": "mediator",
      "vi": "mediator",
      "id": "mediator",
      "es": "mediator",
      "pt": "mediator"
    }
  },
  {
    "id": "K0430",
    "k": "賠",
    "r": "ばい",
    "m": {
      "en": "compensation",
      "zh-TW": "賠",
      "zh-CN": "賠",
      "ko": "compensation",
      "vi": "compensation",
      "id": "compensation",
      "es": "compensation",
      "pt": "compensation"
    }
  },
  {
    "id": "K0431",
    "k": "陪",
    "r": "ばい",
    "m": {
      "en": "obeisance",
      "zh-TW": "陪",
      "zh-CN": "陪",
      "ko": "obeisance",
      "vi": "obeisance",
      "id": "obeisance",
      "es": "obeisance",
      "pt": "obeisance"
    }
  },
  {
    "id": "K0432",
    "k": "伯",
    "r": "はく",
    "m": {
      "en": "chief",
      "zh-TW": "伯",
      "zh-CN": "伯",
      "ko": "chief",
      "vi": "chief",
      "id": "chief",
      "es": "chief",
      "pt": "chief"
    }
  },
  {
    "id": "K0433",
    "k": "舶",
    "r": "はく",
    "m": {
      "en": "liner",
      "zh-TW": "舶",
      "zh-CN": "舶",
      "ko": "liner",
      "vi": "liner",
      "id": "liner",
      "es": "liner",
      "pt": "liner"
    }
  },
  {
    "id": "K0434",
    "k": "薄",
    "r": "うす（い）、はく",
    "m": {
      "en": "dilute",
      "zh-TW": "薄",
      "zh-CN": "薄",
      "ko": "dilute",
      "vi": "dilute",
      "id": "dilute",
      "es": "dilute",
      "pt": "dilute"
    }
  },
  {
    "id": "K0435",
    "k": "迫",
    "r": "せま（る）、はく",
    "m": {
      "en": "urge",
      "zh-TW": "迫",
      "zh-CN": "迫",
      "ko": "urge",
      "vi": "urge",
      "id": "urge",
      "es": "urge",
      "pt": "urge"
    }
  },
  {
    "id": "K0436",
    "k": "漠",
    "r": "ばく",
    "m": {
      "en": "vague",
      "zh-TW": "漠",
      "zh-CN": "漠",
      "ko": "vague",
      "vi": "vague",
      "id": "vague",
      "es": "vague",
      "pt": "vague"
    }
  },
  {
    "id": "K0437",
    "k": "爆",
    "r": "ばく",
    "m": {
      "en": "bomb",
      "zh-TW": "爆",
      "zh-CN": "爆",
      "ko": "bomb",
      "vi": "bomb",
      "id": "bomb",
      "es": "bomb",
      "pt": "bomb"
    }
  },
  {
    "id": "K0438",
    "k": "縛",
    "r": "しば（る）、ばく",
    "m": {
      "en": "truss",
      "zh-TW": "縛",
      "zh-CN": "縛",
      "ko": "truss",
      "vi": "truss",
      "id": "truss",
      "es": "truss",
      "pt": "truss"
    }
  },
  {
    "id": "K0439",
    "k": "肌",
    "r": "はだ",
    "m": {
      "en": "skin",
      "zh-TW": "肌",
      "zh-CN": "肌",
      "ko": "skin",
      "vi": "skin",
      "id": "skin",
      "es": "skin",
      "pt": "skin"
    }
  },
  {
    "id": "K0440",
    "k": "鉢",
    "r": "はち",
    "m": {
      "en": "bowl",
      "zh-TW": "鉢",
      "zh-CN": "鉢",
      "ko": "bowl",
      "vi": "bowl",
      "id": "bowl",
      "es": "bowl",
      "pt": "bowl"
    }
  },
  {
    "id": "K0441",
    "k": "髪",
    "r": "かみ、はつ",
    "m": {
      "en": "hair of head",
      "zh-TW": "髪",
      "zh-CN": "髪",
      "ko": "hair of head",
      "vi": "hair of head",
      "id": "hair of head",
      "es": "hair of head",
      "pt": "hair of head"
    }
  },
  {
    "id": "K0442",
    "k": "伐",
    "r": "ばつ",
    "m": {
      "en": "fell",
      "zh-TW": "伐",
      "zh-CN": "伐",
      "ko": "fell",
      "vi": "fell",
      "id": "fell",
      "es": "fell",
      "pt": "fell"
    }
  },
  {
    "id": "K0443",
    "k": "罰",
    "r": "ばつ",
    "m": {
      "en": "penalty",
      "zh-TW": "罰",
      "zh-CN": "罰",
      "ko": "penalty",
      "vi": "penalty",
      "id": "penalty",
      "es": "penalty",
      "pt": "penalty"
    }
  },
  {
    "id": "K0444",
    "k": "閥",
    "r": "ばつ",
    "m": {
      "en": "clique",
      "zh-TW": "閥",
      "zh-CN": "閥",
      "ko": "clique",
      "vi": "clique",
      "id": "clique",
      "es": "clique",
      "pt": "clique"
    }
  },
  {
    "id": "K0445",
    "k": "帆",
    "r": "ほ、はん",
    "m": {
      "en": "sail",
      "zh-TW": "帆",
      "zh-CN": "帆",
      "ko": "sail",
      "vi": "sail",
      "id": "sail",
      "es": "sail",
      "pt": "sail"
    }
  },
  {
    "id": "K0446",
    "k": "搬",
    "r": "はん",
    "m": {
      "en": "transport",
      "zh-TW": "搬",
      "zh-CN": "搬",
      "ko": "transport",
      "vi": "transport",
      "id": "transport",
      "es": "transport",
      "pt": "transport"
    }
  },
  {
    "id": "K0447",
    "k": "畔",
    "r": "はん",
    "m": {
      "en": "paddy ridge",
      "zh-TW": "畔",
      "zh-CN": "畔",
      "ko": "paddy ridge",
      "vi": "paddy ridge",
      "id": "paddy ridge",
      "es": "paddy ridge",
      "pt": "paddy ridge"
    }
  },
  {
    "id": "K0448",
    "k": "繁",
    "r": "はん",
    "m": {
      "en": "luxuriant",
      "zh-TW": "繁",
      "zh-CN": "繁",
      "ko": "luxuriant",
      "vi": "luxuriant",
      "id": "luxuriant",
      "es": "luxuriant",
      "pt": "luxuriant"
    }
  },
  {
    "id": "K0449",
    "k": "藩",
    "r": "はん",
    "m": {
      "en": "clan",
      "zh-TW": "藩",
      "zh-CN": "藩",
      "ko": "clan",
      "vi": "clan",
      "id": "clan",
      "es": "clan",
      "pt": "clan"
    }
  },
  {
    "id": "K0450",
    "k": "範",
    "r": "はん",
    "m": {
      "en": "pattern",
      "zh-TW": "範",
      "zh-CN": "範",
      "ko": "pattern",
      "vi": "pattern",
      "id": "pattern",
      "es": "pattern",
      "pt": "pattern"
    }
  },
  {
    "id": "K0451",
    "k": "煩",
    "r": "わずら（う）、はん",
    "m": {
      "en": "anxiety",
      "zh-TW": "煩",
      "zh-CN": "煩",
      "ko": "anxiety",
      "vi": "anxiety",
      "id": "anxiety",
      "es": "anxiety",
      "pt": "anxiety"
    }
  },
  {
    "id": "K0452",
    "k": "頒",
    "r": "はん",
    "m": {
      "en": "distribute",
      "zh-TW": "頒",
      "zh-CN": "頒",
      "ko": "distribute",
      "vi": "distribute",
      "id": "distribute",
      "es": "distribute",
      "pt": "distribute"
    }
  },
  {
    "id": "K0453",
    "k": "盤",
    "r": "ばん",
    "m": {
      "en": "tray",
      "zh-TW": "盤",
      "zh-CN": "盤",
      "ko": "tray",
      "vi": "tray",
      "id": "tray",
      "es": "tray",
      "pt": "tray"
    }
  },
  {
    "id": "K0454",
    "k": "蛮",
    "r": "ばん",
    "m": {
      "en": "barbarian",
      "zh-TW": "蛮",
      "zh-CN": "蛮",
      "ko": "barbarian",
      "vi": "barbarian",
      "id": "barbarian",
      "es": "barbarian",
      "pt": "barbarian"
    }
  },
  {
    "id": "K0455",
    "k": "卑",
    "r": "いや、ひ",
    "m": {
      "en": "lowly",
      "zh-TW": "卑",
      "zh-CN": "卑",
      "ko": "lowly",
      "vi": "lowly",
      "id": "lowly",
      "es": "lowly",
      "pt": "lowly"
    }
  },
  {
    "id": "K0456",
    "k": "妃",
    "r": "ひ",
    "m": {
      "en": "queen",
      "zh-TW": "妃",
      "zh-CN": "妃",
      "ko": "queen",
      "vi": "queen",
      "id": "queen",
      "es": "queen",
      "pt": "queen"
    }
  },
  {
    "id": "K0457",
    "k": "彼",
    "r": "かれ、ひ",
    "m": {
      "en": "he",
      "zh-TW": "彼",
      "zh-CN": "彼",
      "ko": "he",
      "vi": "he",
      "id": "he",
      "es": "he",
      "pt": "he"
    }
  },
  {
    "id": "K0458",
    "k": "扉",
    "r": "とびら、ひ",
    "m": {
      "en": "door",
      "zh-TW": "扉",
      "zh-CN": "扉",
      "ko": "door",
      "vi": "door",
      "id": "door",
      "es": "puerta",
      "pt": "porta"
    }
  },
  {
    "id": "K0459",
    "k": "披",
    "r": "ひ",
    "m": {
      "en": "expose",
      "zh-TW": "披",
      "zh-CN": "披",
      "ko": "expose",
      "vi": "expose",
      "id": "expose",
      "es": "expose",
      "pt": "expose"
    }
  },
  {
    "id": "K0460",
    "k": "泌",
    "r": "ひつ",
    "m": {
      "en": "ooze",
      "zh-TW": "泌",
      "zh-CN": "泌",
      "ko": "ooze",
      "vi": "ooze",
      "id": "ooze",
      "es": "ooze",
      "pt": "ooze"
    }
  },
  {
    "id": "K0461",
    "k": "碑",
    "r": "ひ",
    "m": {
      "en": "tombstone",
      "zh-TW": "碑",
      "zh-CN": "碑",
      "ko": "tombstone",
      "vi": "tombstone",
      "id": "tombstone",
      "es": "tombstone",
      "pt": "tombstone"
    }
  },
  {
    "id": "K0462",
    "k": "罷",
    "r": "ひ",
    "m": {
      "en": "quit",
      "zh-TW": "罷",
      "zh-CN": "罷",
      "ko": "quit",
      "vi": "quit",
      "id": "quit",
      "es": "quit",
      "pt": "quit"
    }
  },
  {
    "id": "K0463",
    "k": "被",
    "r": "こうむ（る）、ひ",
    "m": {
      "en": "incur",
      "zh-TW": "被",
      "zh-CN": "被",
      "ko": "incur",
      "vi": "incur",
      "id": "incur",
      "es": "incur",
      "pt": "incur"
    }
  },
  {
    "id": "K0464",
    "k": "避",
    "r": "さ（ける）、ひ",
    "m": {
      "en": "evade",
      "zh-TW": "避",
      "zh-CN": "避",
      "ko": "evade",
      "vi": "evade",
      "id": "evade",
      "es": "evade",
      "pt": "evade"
    }
  },
  {
    "id": "K0465",
    "k": "尾",
    "r": "お（りる）、び",
    "m": {
      "en": "tail",
      "zh-TW": "尾",
      "zh-CN": "尾",
      "ko": "tail",
      "vi": "tail",
      "id": "tail",
      "es": "tail",
      "pt": "tail"
    }
  },
  {
    "id": "K0466",
    "k": "微",
    "r": "び",
    "m": {
      "en": "delicate",
      "zh-TW": "微",
      "zh-CN": "微",
      "ko": "delicate",
      "vi": "delicate",
      "id": "delicate",
      "es": "delicate",
      "pt": "delicate"
    }
  },
  {
    "id": "K0467",
    "k": "眉",
    "r": "まゆ、び",
    "m": {
      "en": "eyebrow",
      "zh-TW": "眉",
      "zh-CN": "眉",
      "ko": "eyebrow",
      "vi": "eyebrow",
      "id": "eyebrow",
      "es": "eyebrow",
      "pt": "eyebrow"
    }
  },
  {
    "id": "K0468",
    "k": "膝",
    "r": "ひざ、しつ",
    "m": {
      "en": "knee",
      "zh-TW": "膝",
      "zh-CN": "膝",
      "ko": "knee",
      "vi": "knee",
      "id": "knee",
      "es": "knee",
      "pt": "knee"
    }
  },
  {
    "id": "K0469",
    "k": "肘",
    "r": "ひじ、ちゅう",
    "m": {
      "en": "elbow",
      "zh-TW": "肘",
      "zh-CN": "肘",
      "ko": "elbow",
      "vi": "elbow",
      "id": "elbow",
      "es": "elbow",
      "pt": "elbow"
    }
  },
  {
    "id": "K0470",
    "k": "姫",
    "r": "ひめ、き",
    "m": {
      "en": "princess",
      "zh-TW": "姫",
      "zh-CN": "姫",
      "ko": "princess",
      "vi": "princess",
      "id": "princess",
      "es": "princess",
      "pt": "princess"
    }
  },
  {
    "id": "K0471",
    "k": "漂",
    "r": "ただよ（う）、ひょう",
    "m": {
      "en": "drift",
      "zh-TW": "漂",
      "zh-CN": "漂",
      "ko": "drift",
      "vi": "drift",
      "id": "drift",
      "es": "drift",
      "pt": "drift"
    }
  },
  {
    "id": "K0472",
    "k": "苗",
    "r": "なえ、びょう",
    "m": {
      "en": "seedling",
      "zh-TW": "苗",
      "zh-CN": "苗",
      "ko": "seedling",
      "vi": "seedling",
      "id": "seedling",
      "es": "seedling",
      "pt": "seedling"
    }
  },
  {
    "id": "K0473",
    "k": "描",
    "r": "えが（く）、びょう",
    "m": {
      "en": "depict",
      "zh-TW": "描",
      "zh-CN": "描",
      "ko": "depict",
      "vi": "depict",
      "id": "depict",
      "es": "depict",
      "pt": "depict"
    }
  },
  {
    "id": "K0474",
    "k": "猫",
    "r": "ねこ、びょう",
    "m": {
      "en": "cat",
      "zh-TW": "猫",
      "zh-CN": "猫",
      "ko": "cat",
      "vi": "cat",
      "id": "cat",
      "es": "cat",
      "pt": "cat"
    }
  },
  {
    "id": "K0475",
    "k": "浜",
    "r": "はま、ひん",
    "m": {
      "en": "beach",
      "zh-TW": "浜",
      "zh-CN": "浜",
      "ko": "beach",
      "vi": "beach",
      "id": "beach",
      "es": "beach",
      "pt": "beach"
    }
  },
  {
    "id": "K0476",
    "k": "賓",
    "r": "ひん",
    "m": {
      "en": "guest",
      "zh-TW": "賓",
      "zh-CN": "賓",
      "ko": "guest",
      "vi": "guest",
      "id": "guest",
      "es": "guest",
      "pt": "guest"
    }
  },
  {
    "id": "K0477",
    "k": "頻",
    "r": "ひん",
    "m": {
      "en": "repeatedly",
      "zh-TW": "頻",
      "zh-CN": "頻",
      "ko": "repeatedly",
      "vi": "repeatedly",
      "id": "repeatedly",
      "es": "repeatedly",
      "pt": "repeatedly"
    }
  },
  {
    "id": "K0478",
    "k": "敏",
    "r": "びん",
    "m": {
      "en": "agile",
      "zh-TW": "敏",
      "zh-CN": "敏",
      "ko": "agile",
      "vi": "agile",
      "id": "agile",
      "es": "agile",
      "pt": "agile"
    }
  },
  {
    "id": "K0479",
    "k": "扶",
    "r": "ふ",
    "m": {
      "en": "aid",
      "zh-TW": "扶",
      "zh-CN": "扶",
      "ko": "aid",
      "vi": "aid",
      "id": "aid",
      "es": "aid",
      "pt": "aid"
    }
  },
  {
    "id": "K0480",
    "k": "敷",
    "r": "し（く）、ふ",
    "m": {
      "en": "spread",
      "zh-TW": "敷",
      "zh-CN": "敷",
      "ko": "spread",
      "vi": "spread",
      "id": "spread",
      "es": "spread",
      "pt": "spread"
    }
  },
  {
    "id": "K0481",
    "k": "普",
    "r": "ふ",
    "m": {
      "en": "universal",
      "zh-TW": "普",
      "zh-CN": "普",
      "ko": "universal",
      "vi": "universal",
      "id": "universal",
      "es": "universal",
      "pt": "universal"
    }
  },
  {
    "id": "K0482",
    "k": "符",
    "r": "ふ",
    "m": {
      "en": "token",
      "zh-TW": "符",
      "zh-CN": "符",
      "ko": "token",
      "vi": "token",
      "id": "token",
      "es": "token",
      "pt": "token"
    }
  },
  {
    "id": "K0483",
    "k": "腐",
    "r": "くさ（る）、ふ",
    "m": {
      "en": "rot",
      "zh-TW": "腐",
      "zh-CN": "腐",
      "ko": "rot",
      "vi": "rot",
      "id": "rot",
      "es": "rot",
      "pt": "rot"
    }
  },
  {
    "id": "K0484",
    "k": "膚",
    "r": "ふ",
    "m": {
      "en": "skin",
      "zh-TW": "膚",
      "zh-CN": "膚",
      "ko": "skin",
      "vi": "skin",
      "id": "skin",
      "es": "skin",
      "pt": "skin"
    }
  },
  {
    "id": "K0485",
    "k": "譜",
    "r": "ふ",
    "m": {
      "en": "musical score",
      "zh-TW": "譜",
      "zh-CN": "譜",
      "ko": "musical score",
      "vi": "musical score",
      "id": "musical score",
      "es": "musical score",
      "pt": "musical score"
    }
  },
  {
    "id": "K0486",
    "k": "賦",
    "r": "ふ",
    "m": {
      "en": "levy",
      "zh-TW": "賦",
      "zh-CN": "賦",
      "ko": "levy",
      "vi": "levy",
      "id": "levy",
      "es": "levy",
      "pt": "levy"
    }
  },
  {
    "id": "K0487",
    "k": "赴",
    "r": "おもむ（く）、ふ",
    "m": {
      "en": "proceed",
      "zh-TW": "赴",
      "zh-CN": "赴",
      "ko": "proceed",
      "vi": "proceed",
      "id": "proceed",
      "es": "proceed",
      "pt": "proceed"
    }
  },
  {
    "id": "K0488",
    "k": "附",
    "r": "ふ",
    "m": {
      "en": "affixed",
      "zh-TW": "附",
      "zh-CN": "附",
      "ko": "affixed",
      "vi": "affixed",
      "id": "affixed",
      "es": "affixed",
      "pt": "affixed"
    }
  },
  {
    "id": "K0489",
    "k": "侮",
    "r": "あなど（る）、ぶ",
    "m": {
      "en": "scorn",
      "zh-TW": "侮",
      "zh-CN": "侮",
      "ko": "scorn",
      "vi": "scorn",
      "id": "scorn",
      "es": "scorn",
      "pt": "scorn"
    }
  },
  {
    "id": "K0490",
    "k": "舞",
    "r": "まつ、ぶ",
    "m": {
      "en": "dance",
      "zh-TW": "舞",
      "zh-CN": "舞",
      "ko": "dance",
      "vi": "dance",
      "id": "dance",
      "es": "bailar",
      "pt": "dançar"
    }
  },
  {
    "id": "K0491",
    "k": "封",
    "r": "ふう",
    "m": {
      "en": "seal",
      "zh-TW": "封",
      "zh-CN": "封",
      "ko": "seal",
      "vi": "seal",
      "id": "seal",
      "es": "seal",
      "pt": "seal"
    }
  },
  {
    "id": "K0492",
    "k": "伏",
    "r": "ふ（せる）、ふく",
    "m": {
      "en": "prostrated",
      "zh-TW": "伏",
      "zh-CN": "伏",
      "ko": "prostrated",
      "vi": "prostrated",
      "id": "prostrated",
      "es": "prostrated",
      "pt": "prostrated"
    }
  },
  {
    "id": "K0493",
    "k": "幅",
    "r": "はば、ふく",
    "m": {
      "en": "hanging scroll",
      "zh-TW": "幅",
      "zh-CN": "幅",
      "ko": "hanging scroll",
      "vi": "hanging scroll",
      "id": "hanging scroll",
      "es": "hanging scroll",
      "pt": "hanging scroll"
    }
  },
  {
    "id": "K0494",
    "k": "覆",
    "r": "おお（きい）、ふく",
    "m": {
      "en": "capsize",
      "zh-TW": "覆",
      "zh-CN": "覆",
      "ko": "capsize",
      "vi": "capsize",
      "id": "capsize",
      "es": "capsize",
      "pt": "capsize"
    }
  },
  {
    "id": "K0495",
    "k": "払",
    "r": "はら（う）、ふつ",
    "m": {
      "en": "pay",
      "zh-TW": "払",
      "zh-CN": "払",
      "ko": "pay",
      "vi": "pay",
      "id": "pay",
      "es": "pagar",
      "pt": "pagar"
    }
  },
  {
    "id": "K0496",
    "k": "沸",
    "r": "わ（かす）、ふつ",
    "m": {
      "en": "seethe",
      "zh-TW": "沸",
      "zh-CN": "沸",
      "ko": "seethe",
      "vi": "seethe",
      "id": "seethe",
      "es": "seethe",
      "pt": "seethe"
    }
  },
  {
    "id": "K0497",
    "k": "噴",
    "r": "ふ、ふん",
    "m": {
      "en": "erupt",
      "zh-TW": "噴",
      "zh-CN": "噴",
      "ko": "erupt",
      "vi": "erupt",
      "id": "erupt",
      "es": "erupt",
      "pt": "erupt"
    }
  },
  {
    "id": "K0498",
    "k": "墳",
    "r": "ふん",
    "m": {
      "en": "tomb",
      "zh-TW": "墳",
      "zh-CN": "墳",
      "ko": "tomb",
      "vi": "tomb",
      "id": "tomb",
      "es": "tomb",
      "pt": "tomb"
    }
  },
  {
    "id": "K0499",
    "k": "憤",
    "r": "いきどお（る）、ふん",
    "m": {
      "en": "aroused",
      "zh-TW": "憤",
      "zh-CN": "憤",
      "ko": "aroused",
      "vi": "aroused",
      "id": "aroused",
      "es": "aroused",
      "pt": "aroused"
    }
  },
  {
    "id": "K0500",
    "k": "紛",
    "r": "まぎ（れる）、ふん",
    "m": {
      "en": "distract",
      "zh-TW": "紛",
      "zh-CN": "紛",
      "ko": "distract",
      "vi": "distract",
      "id": "distract",
      "es": "distract",
      "pt": "distract"
    }
  },
  {
    "id": "K0501",
    "k": "雰",
    "r": "ふん",
    "m": {
      "en": "atmosphere",
      "zh-TW": "雰",
      "zh-CN": "雰",
      "ko": "atmosphere",
      "vi": "atmosphere",
      "id": "atmosphere",
      "es": "atmosphere",
      "pt": "atmosphere"
    }
  },
  {
    "id": "K0502",
    "k": "丙",
    "r": "へい",
    "m": {
      "en": "third class",
      "zh-TW": "丙",
      "zh-CN": "丙",
      "ko": "third class",
      "vi": "third class",
      "id": "third class",
      "es": "third class",
      "pt": "third class"
    }
  },
  {
    "id": "K0503",
    "k": "併",
    "r": "あわ（せる）、へい",
    "m": {
      "en": "join",
      "zh-TW": "併",
      "zh-CN": "併",
      "ko": "join",
      "vi": "join",
      "id": "join",
      "es": "unir",
      "pt": "juntar"
    }
  },
  {
    "id": "K0504",
    "k": "塀",
    "r": "へい",
    "m": {
      "en": "fence",
      "zh-TW": "塀",
      "zh-CN": "塀",
      "ko": "fence",
      "vi": "fence",
      "id": "fence",
      "es": "fence",
      "pt": "fence"
    }
  },
  {
    "id": "K0505",
    "k": "幣",
    "r": "へい",
    "m": {
      "en": "cash",
      "zh-TW": "幣",
      "zh-CN": "幣",
      "ko": "cash",
      "vi": "cash",
      "id": "cash",
      "es": "cash",
      "pt": "cash"
    }
  },
  {
    "id": "K0506",
    "k": "弊",
    "r": "へい",
    "m": {
      "en": "abuse",
      "zh-TW": "弊",
      "zh-CN": "弊",
      "ko": "abuse",
      "vi": "abuse",
      "id": "abuse",
      "es": "abuse",
      "pt": "abuse"
    }
  },
  {
    "id": "K0507",
    "k": "柄",
    "r": "え、へい",
    "m": {
      "en": "design",
      "zh-TW": "柄",
      "zh-CN": "柄",
      "ko": "design",
      "vi": "design",
      "id": "design",
      "es": "design",
      "pt": "design"
    }
  },
  {
    "id": "K0508",
    "k": "癖",
    "r": "くせ、へき",
    "m": {
      "en": "mannerism",
      "zh-TW": "癖",
      "zh-CN": "癖",
      "ko": "mannerism",
      "vi": "mannerism",
      "id": "mannerism",
      "es": "mannerism",
      "pt": "mannerism"
    }
  },
  {
    "id": "K0509",
    "k": "偏",
    "r": "かたよ（る）、へん",
    "m": {
      "en": "partial",
      "zh-TW": "偏",
      "zh-CN": "偏",
      "ko": "partial",
      "vi": "partial",
      "id": "partial",
      "es": "partial",
      "pt": "partial"
    }
  },
  {
    "id": "K0510",
    "k": "遍",
    "r": "へん",
    "m": {
      "en": "everywhere",
      "zh-TW": "遍",
      "zh-CN": "遍",
      "ko": "everywhere",
      "vi": "everywhere",
      "id": "everywhere",
      "es": "everywhere",
      "pt": "everywhere"
    }
  },
  {
    "id": "K0511",
    "k": "舗",
    "r": "ほ",
    "m": {
      "en": "shop",
      "zh-TW": "舗",
      "zh-CN": "舗",
      "ko": "shop",
      "vi": "shop",
      "id": "shop",
      "es": "tienda",
      "pt": "loja"
    }
  },
  {
    "id": "K0512",
    "k": "補",
    "r": "おぎな（う）、ほ",
    "m": {
      "en": "supplement",
      "zh-TW": "補",
      "zh-CN": "補",
      "ko": "supplement",
      "vi": "supplement",
      "id": "supplement",
      "es": "supplement",
      "pt": "supplement"
    }
  },
  {
    "id": "K0513",
    "k": "穂",
    "r": "ほ、すい",
    "m": {
      "en": "ear of grain",
      "zh-TW": "穂",
      "zh-CN": "穂",
      "ko": "ear of grain",
      "vi": "ear of grain",
      "id": "ear of grain",
      "es": "ear of grain",
      "pt": "ear of grain"
    }
  },
  {
    "id": "K0514",
    "k": "募",
    "r": "つの（る）、ぼ",
    "m": {
      "en": "recruit",
      "zh-TW": "募",
      "zh-CN": "募",
      "ko": "recruit",
      "vi": "recruit",
      "id": "recruit",
      "es": "recruit",
      "pt": "recruit"
    }
  },
  {
    "id": "K0515",
    "k": "慕",
    "r": "した（う）、ぼ",
    "m": {
      "en": "yearn",
      "zh-TW": "慕",
      "zh-CN": "慕",
      "ko": "yearn",
      "vi": "yearn",
      "id": "yearn",
      "es": "yearn",
      "pt": "yearn"
    }
  },
  {
    "id": "K0516",
    "k": "簿",
    "r": "ぼ",
    "m": {
      "en": "register",
      "zh-TW": "簿",
      "zh-CN": "簿",
      "ko": "register",
      "vi": "register",
      "id": "register",
      "es": "register",
      "pt": "register"
    }
  },
  {
    "id": "K0517",
    "k": "俸",
    "r": "ほう",
    "m": {
      "en": "stipend",
      "zh-TW": "俸",
      "zh-CN": "俸",
      "ko": "stipend",
      "vi": "stipend",
      "id": "stipend",
      "es": "stipend",
      "pt": "stipend"
    }
  },
  {
    "id": "K0518",
    "k": "奉",
    "r": "たてまつ、ほう",
    "m": {
      "en": "observance",
      "zh-TW": "奉",
      "zh-CN": "奉",
      "ko": "observance",
      "vi": "observance",
      "id": "observance",
      "es": "observance",
      "pt": "observance"
    }
  },
  {
    "id": "K0519",
    "k": "峰",
    "r": "みね、ほう",
    "m": {
      "en": "summit",
      "zh-TW": "峰",
      "zh-CN": "峰",
      "ko": "summit",
      "vi": "summit",
      "id": "summit",
      "es": "summit",
      "pt": "summit"
    }
  },
  {
    "id": "K0520",
    "k": "崩",
    "r": "くず（れる）、ほう",
    "m": {
      "en": "crumble",
      "zh-TW": "崩",
      "zh-CN": "崩",
      "ko": "crumble",
      "vi": "crumble",
      "id": "crumble",
      "es": "crumble",
      "pt": "crumble"
    }
  },
  {
    "id": "K0521",
    "k": "泡",
    "r": "あわ、ほう",
    "m": {
      "en": "bubbles",
      "zh-TW": "泡",
      "zh-CN": "泡",
      "ko": "bubbles",
      "vi": "bubbles",
      "id": "bubbles",
      "es": "bubbles",
      "pt": "bubbles"
    }
  },
  {
    "id": "K0522",
    "k": "胞",
    "r": "ほう",
    "m": {
      "en": "placenta",
      "zh-TW": "胞",
      "zh-CN": "胞",
      "ko": "placenta",
      "vi": "placenta",
      "id": "placenta",
      "es": "placenta",
      "pt": "placenta"
    }
  },
  {
    "id": "K0523",
    "k": "芳",
    "r": "かんば（しい）、ほう",
    "m": {
      "en": "perfume",
      "zh-TW": "芳",
      "zh-CN": "芳",
      "ko": "perfume",
      "vi": "perfume",
      "id": "perfume",
      "es": "perfume",
      "pt": "perfume"
    }
  },
  {
    "id": "K0524",
    "k": "褒",
    "r": "ほ、ほう",
    "m": {
      "en": "praise",
      "zh-TW": "褒",
      "zh-CN": "褒",
      "ko": "praise",
      "vi": "praise",
      "id": "praise",
      "es": "praise",
      "pt": "praise"
    }
  },
  {
    "id": "K0525",
    "k": "飽",
    "r": "あ（う）、ほう",
    "m": {
      "en": "sated",
      "zh-TW": "飽",
      "zh-CN": "飽",
      "ko": "sated",
      "vi": "sated",
      "id": "sated",
      "es": "sated",
      "pt": "sated"
    }
  },
  {
    "id": "K0526",
    "k": "縫",
    "r": "ぬ（う）、ほう",
    "m": {
      "en": "sew",
      "zh-TW": "縫",
      "zh-CN": "縫",
      "ko": "sew",
      "vi": "sew",
      "id": "sew",
      "es": "sew",
      "pt": "sew"
    }
  },
  {
    "id": "K0527",
    "k": "乏",
    "r": "とぼ（しい）、ぼう",
    "m": {
      "en": "destitution",
      "zh-TW": "乏",
      "zh-CN": "乏",
      "ko": "destitution",
      "vi": "destitution",
      "id": "destitution",
      "es": "destitution",
      "pt": "destitution"
    }
  },
  {
    "id": "K0528",
    "k": "冒",
    "r": "おか（す）、ぼう",
    "m": {
      "en": "risk",
      "zh-TW": "冒",
      "zh-CN": "冒",
      "ko": "risk",
      "vi": "risk",
      "id": "risk",
      "es": "risk",
      "pt": "risk"
    }
  },
  {
    "id": "K0529",
    "k": "傍",
    "r": "かたわ（ら）、ぼう",
    "m": {
      "en": "bystander",
      "zh-TW": "傍",
      "zh-CN": "傍",
      "ko": "bystander",
      "vi": "bystander",
      "id": "bystander",
      "es": "bystander",
      "pt": "bystander"
    }
  },
  {
    "id": "K0530",
    "k": "妨",
    "r": "さまた（げる）、ぼう",
    "m": {
      "en": "disturb",
      "zh-TW": "妨",
      "zh-CN": "妨",
      "ko": "disturb",
      "vi": "disturb",
      "id": "disturb",
      "es": "disturb",
      "pt": "disturb"
    }
  },
  {
    "id": "K0531",
    "k": "帽",
    "r": "ぼう",
    "m": {
      "en": "cap",
      "zh-TW": "帽",
      "zh-CN": "帽",
      "ko": "cap",
      "vi": "cap",
      "id": "cap",
      "es": "cap",
      "pt": "cap"
    }
  },
  {
    "id": "K0532",
    "k": "房",
    "r": "ふさ、ぼう",
    "m": {
      "en": "tassel",
      "zh-TW": "房",
      "zh-CN": "房",
      "ko": "tassel",
      "vi": "tassel",
      "id": "tassel",
      "es": "tassel",
      "pt": "tassel"
    }
  },
  {
    "id": "K0533",
    "k": "某",
    "r": "ぼう",
    "m": {
      "en": "so-and-so",
      "zh-TW": "某",
      "zh-CN": "某",
      "ko": "so-and-so",
      "vi": "so-and-so",
      "id": "so-and-so",
      "es": "so-and-so",
      "pt": "so-and-so"
    }
  },
  {
    "id": "K0534",
    "k": "膨",
    "r": "ふく（らむ）、ぼう",
    "m": {
      "en": "swell",
      "zh-TW": "膨",
      "zh-CN": "膨",
      "ko": "swell",
      "vi": "swell",
      "id": "swell",
      "es": "swell",
      "pt": "swell"
    }
  },
  {
    "id": "K0535",
    "k": "謀",
    "r": "はか（る）、ぼう",
    "m": {
      "en": "conspire",
      "zh-TW": "謀",
      "zh-CN": "謀",
      "ko": "conspire",
      "vi": "conspire",
      "id": "conspire",
      "es": "conspire",
      "pt": "conspire"
    }
  },
  {
    "id": "K0536",
    "k": "貿",
    "r": "ぼう",
    "m": {
      "en": "trade",
      "zh-TW": "貿",
      "zh-CN": "貿",
      "ko": "trade",
      "vi": "trade",
      "id": "trade",
      "es": "trade",
      "pt": "trade"
    }
  },
  {
    "id": "K0537",
    "k": "邦",
    "r": "くに、ほう",
    "m": {
      "en": "home country",
      "zh-TW": "邦",
      "zh-CN": "邦",
      "ko": "home country",
      "vi": "home country",
      "id": "home country",
      "es": "home country",
      "pt": "home country"
    }
  },
  {
    "id": "K0538",
    "k": "僕",
    "r": "しもべ、ぼく",
    "m": {
      "en": "me",
      "zh-TW": "僕",
      "zh-CN": "僕",
      "ko": "me",
      "vi": "me",
      "id": "me",
      "es": "me",
      "pt": "me"
    }
  },
  {
    "id": "K0539",
    "k": "墨",
    "r": "すみ、ぼく",
    "m": {
      "en": "black ink",
      "zh-TW": "墨",
      "zh-CN": "墨",
      "ko": "black ink",
      "vi": "black ink",
      "id": "black ink",
      "es": "black ink",
      "pt": "black ink"
    }
  },
  {
    "id": "K0540",
    "k": "撲",
    "r": "ぼく",
    "m": {
      "en": "slap",
      "zh-TW": "撲",
      "zh-CN": "撲",
      "ko": "slap",
      "vi": "slap",
      "id": "slap",
      "es": "slap",
      "pt": "slap"
    }
  },
  {
    "id": "K0541",
    "k": "朴",
    "r": "ぼく",
    "m": {
      "en": "crude",
      "zh-TW": "朴",
      "zh-CN": "朴",
      "ko": "crude",
      "vi": "crude",
      "id": "crude",
      "es": "crude",
      "pt": "crude"
    }
  },
  {
    "id": "K0542",
    "k": "没",
    "r": "ぼつ",
    "m": {
      "en": "drown",
      "zh-TW": "没",
      "zh-CN": "没",
      "ko": "drown",
      "vi": "drown",
      "id": "drown",
      "es": "drown",
      "pt": "drown"
    }
  },
  {
    "id": "K0543",
    "k": "堀",
    "r": "ほり",
    "m": {
      "en": "ditch",
      "zh-TW": "堀",
      "zh-CN": "堀",
      "ko": "ditch",
      "vi": "ditch",
      "id": "ditch",
      "es": "ditch",
      "pt": "ditch"
    }
  },
  {
    "id": "K0544",
    "k": "奔",
    "r": "ほん",
    "m": {
      "en": "run",
      "zh-TW": "奔",
      "zh-CN": "奔",
      "ko": "run",
      "vi": "run",
      "id": "run",
      "es": "correr",
      "pt": "correr"
    }
  },
  {
    "id": "K0545",
    "k": "翻",
    "r": "ひるがえ（る）、ほん",
    "m": {
      "en": "flip",
      "zh-TW": "翻",
      "zh-CN": "翻",
      "ko": "flip",
      "vi": "flip",
      "id": "flip",
      "es": "flip",
      "pt": "flip"
    }
  },
  {
    "id": "K0546",
    "k": "凡",
    "r": "ぼん",
    "m": {
      "en": "mediocre",
      "zh-TW": "凡",
      "zh-CN": "凡",
      "ko": "mediocre",
      "vi": "mediocre",
      "id": "mediocre",
      "es": "mediocre",
      "pt": "mediocre"
    }
  },
  {
    "id": "K0547",
    "k": "盆",
    "r": "ぼん",
    "m": {
      "en": "basin",
      "zh-TW": "盆",
      "zh-CN": "盆",
      "ko": "basin",
      "vi": "basin",
      "id": "basin",
      "es": "basin",
      "pt": "basin"
    }
  },
  {
    "id": "K0548",
    "k": "摩",
    "r": "まつ、ま",
    "m": {
      "en": "chafe",
      "zh-TW": "摩",
      "zh-CN": "摩",
      "ko": "chafe",
      "vi": "chafe",
      "id": "chafe",
      "es": "chafe",
      "pt": "chafe"
    }
  },
  {
    "id": "K0549",
    "k": "磨",
    "r": "みが（く）、ま",
    "m": {
      "en": "grind",
      "zh-TW": "磨",
      "zh-CN": "磨",
      "ko": "grind",
      "vi": "grind",
      "id": "grind",
      "es": "grind",
      "pt": "grind"
    }
  },
  {
    "id": "K0550",
    "k": "魔",
    "r": "ま",
    "m": {
      "en": "witch",
      "zh-TW": "魔",
      "zh-CN": "魔",
      "ko": "witch",
      "vi": "witch",
      "id": "witch",
      "es": "witch",
      "pt": "witch"
    }
  },
  {
    "id": "K0551",
    "k": "麻",
    "r": "あさ（い）、ま",
    "m": {
      "en": "hemp",
      "zh-TW": "麻",
      "zh-CN": "麻",
      "ko": "hemp",
      "vi": "hemp",
      "id": "hemp",
      "es": "hemp",
      "pt": "hemp"
    }
  },
  {
    "id": "K0552",
    "k": "埋",
    "r": "う（まれる）、まい",
    "m": {
      "en": "bury",
      "zh-TW": "埋",
      "zh-CN": "埋",
      "ko": "bury",
      "vi": "bury",
      "id": "bury",
      "es": "bury",
      "pt": "bury"
    }
  },
  {
    "id": "K0553",
    "k": "枚",
    "r": "まい",
    "m": {
      "en": "sheet",
      "zh-TW": "枚",
      "zh-CN": "枚",
      "ko": "sheet",
      "vi": "sheet",
      "id": "sheet",
      "es": "sheet",
      "pt": "sheet"
    }
  },
  {
    "id": "K0554",
    "k": "膜",
    "r": "まく",
    "m": {
      "en": "membrane",
      "zh-TW": "膜",
      "zh-CN": "膜",
      "ko": "membrane",
      "vi": "membrane",
      "id": "membrane",
      "es": "membrane",
      "pt": "membrane"
    }
  },
  {
    "id": "K0555",
    "k": "幕",
    "r": "まく",
    "m": {
      "en": "curtain",
      "zh-TW": "幕",
      "zh-CN": "幕",
      "ko": "curtain",
      "vi": "curtain",
      "id": "curtain",
      "es": "curtain",
      "pt": "curtain"
    }
  },
  {
    "id": "K0556",
    "k": "抹",
    "r": "まつ",
    "m": {
      "en": "rub",
      "zh-TW": "抹",
      "zh-CN": "抹",
      "ko": "rub",
      "vi": "rub",
      "id": "rub",
      "es": "rub",
      "pt": "rub"
    }
  },
  {
    "id": "K0557",
    "k": "漫",
    "r": "まん",
    "m": {
      "en": "cartoon",
      "zh-TW": "漫",
      "zh-CN": "漫",
      "ko": "cartoon",
      "vi": "cartoon",
      "id": "cartoon",
      "es": "cartoon",
      "pt": "cartoon"
    }
  },
  {
    "id": "K0558",
    "k": "魅",
    "r": "み（る）、み",
    "m": {
      "en": "fascination",
      "zh-TW": "魅",
      "zh-CN": "魅",
      "ko": "fascination",
      "vi": "fascination",
      "id": "fascination",
      "es": "fascination",
      "pt": "fascination"
    }
  },
  {
    "id": "K0559",
    "k": "岬",
    "r": "みさき",
    "m": {
      "en": "headland",
      "zh-TW": "岬",
      "zh-CN": "岬",
      "ko": "headland",
      "vi": "headland",
      "id": "headland",
      "es": "headland",
      "pt": "headland"
    }
  },
  {
    "id": "K0560",
    "k": "矛",
    "r": "ほこ、む",
    "m": {
      "en": "halberd",
      "zh-TW": "矛",
      "zh-CN": "矛",
      "ko": "halberd",
      "vi": "halberd",
      "id": "halberd",
      "es": "halberd",
      "pt": "halberd"
    }
  },
  {
    "id": "K0561",
    "k": "婿",
    "r": "むこ、せい",
    "m": {
      "en": "bridegroom",
      "zh-TW": "婿",
      "zh-CN": "婿",
      "ko": "bridegroom",
      "vi": "bridegroom",
      "id": "bridegroom",
      "es": "bridegroom",
      "pt": "bridegroom"
    }
  },
  {
    "id": "K0562",
    "k": "銘",
    "r": "めい",
    "m": {
      "en": "inscription",
      "zh-TW": "銘",
      "zh-CN": "銘",
      "ko": "inscription",
      "vi": "inscription",
      "id": "inscription",
      "es": "inscription",
      "pt": "inscription"
    }
  },
  {
    "id": "K0563",
    "k": "滅",
    "r": "ほろ（びる）、めつ",
    "m": {
      "en": "destroy",
      "zh-TW": "滅",
      "zh-CN": "滅",
      "ko": "destroy",
      "vi": "destroy",
      "id": "destroy",
      "es": "destruir",
      "pt": "destruir"
    }
  },
  {
    "id": "K0564",
    "k": "免",
    "r": "まぬか（れる）、めん",
    "m": {
      "en": "excuse",
      "zh-TW": "免",
      "zh-CN": "免",
      "ko": "excuse",
      "vi": "excuse",
      "id": "excuse",
      "es": "excuse",
      "pt": "excuse"
    }
  },
  {
    "id": "K0565",
    "k": "茂",
    "r": "しげ（る）、も",
    "m": {
      "en": "overgrown",
      "zh-TW": "茂",
      "zh-CN": "茂",
      "ko": "overgrown",
      "vi": "overgrown",
      "id": "overgrown",
      "es": "overgrown",
      "pt": "overgrown"
    }
  },
  {
    "id": "K0566",
    "k": "妄",
    "r": "もう",
    "m": {
      "en": "delusion",
      "zh-TW": "妄",
      "zh-CN": "妄",
      "ko": "delusion",
      "vi": "delusion",
      "id": "delusion",
      "es": "delusion",
      "pt": "delusion"
    }
  },
  {
    "id": "K0567",
    "k": "猛",
    "r": "たけ（し）、もう",
    "m": {
      "en": "fierce",
      "zh-TW": "猛",
      "zh-CN": "猛",
      "ko": "fierce",
      "vi": "fierce",
      "id": "fierce",
      "es": "fierce",
      "pt": "fierce"
    }
  },
  {
    "id": "K0568",
    "k": "盲",
    "r": "めくら、もう",
    "m": {
      "en": "blind",
      "zh-TW": "盲",
      "zh-CN": "盲",
      "ko": "blind",
      "vi": "blind",
      "id": "blind",
      "es": "blind",
      "pt": "blind"
    }
  },
  {
    "id": "K0569",
    "k": "網",
    "r": "あみ、もう",
    "m": {
      "en": "netting",
      "zh-TW": "網",
      "zh-CN": "網",
      "ko": "netting",
      "vi": "netting",
      "id": "netting",
      "es": "netting",
      "pt": "netting"
    }
  },
  {
    "id": "K0570",
    "k": "黙",
    "r": "だま（る）、もく",
    "m": {
      "en": "silence",
      "zh-TW": "黙",
      "zh-CN": "黙",
      "ko": "silence",
      "vi": "silence",
      "id": "silence",
      "es": "silence",
      "pt": "silence"
    }
  },
  {
    "id": "K0571",
    "k": "紋",
    "r": "もん",
    "m": {
      "en": "family crest",
      "zh-TW": "紋",
      "zh-CN": "紋",
      "ko": "family crest",
      "vi": "family crest",
      "id": "family crest",
      "es": "family crest",
      "pt": "family crest"
    }
  },
  {
    "id": "K0572",
    "k": "冶",
    "r": "や",
    "m": {
      "en": "melting",
      "zh-TW": "冶",
      "zh-CN": "冶",
      "ko": "melting",
      "vi": "melting",
      "id": "melting",
      "es": "melting",
      "pt": "melting"
    }
  },
  {
    "id": "K0573",
    "k": "厄",
    "r": "やく",
    "m": {
      "en": "unlucky",
      "zh-TW": "厄",
      "zh-CN": "厄",
      "ko": "unlucky",
      "vi": "unlucky",
      "id": "unlucky",
      "es": "unlucky",
      "pt": "unlucky"
    }
  },
  {
    "id": "K0574",
    "k": "躍",
    "r": "おど（る）、やく",
    "m": {
      "en": "leap",
      "zh-TW": "躍",
      "zh-CN": "躍",
      "ko": "leap",
      "vi": "leap",
      "id": "leap",
      "es": "leap",
      "pt": "leap"
    }
  },
  {
    "id": "K0575",
    "k": "柳",
    "r": "やなぎ、りゅう",
    "m": {
      "en": "willow",
      "zh-TW": "柳",
      "zh-CN": "柳",
      "ko": "willow",
      "vi": "willow",
      "id": "willow",
      "es": "willow",
      "pt": "willow"
    }
  },
  {
    "id": "K0576",
    "k": "愉",
    "r": "ゆ",
    "m": {
      "en": "pleasure",
      "zh-TW": "愉",
      "zh-CN": "愉",
      "ko": "pleasure",
      "vi": "pleasure",
      "id": "pleasure",
      "es": "pleasure",
      "pt": "pleasure"
    }
  },
  {
    "id": "K0577",
    "k": "諭",
    "r": "さと（す）、ゆ",
    "m": {
      "en": "rebuke",
      "zh-TW": "諭",
      "zh-CN": "諭",
      "ko": "rebuke",
      "vi": "rebuke",
      "id": "rebuke",
      "es": "rebuke",
      "pt": "rebuke"
    }
  },
  {
    "id": "K0578",
    "k": "癒",
    "r": "い（く）、ゆ",
    "m": {
      "en": "healing",
      "zh-TW": "癒",
      "zh-CN": "癒",
      "ko": "healing",
      "vi": "healing",
      "id": "healing",
      "es": "healing",
      "pt": "healing"
    }
  },
  {
    "id": "K0579",
    "k": "唯",
    "r": "ゆい",
    "m": {
      "en": "solely",
      "zh-TW": "唯",
      "zh-CN": "唯",
      "ko": "solely",
      "vi": "solely",
      "id": "solely",
      "es": "solely",
      "pt": "solely"
    }
  },
  {
    "id": "K0580",
    "k": "幽",
    "r": "ゆう",
    "m": {
      "en": "seclude",
      "zh-TW": "幽",
      "zh-CN": "幽",
      "ko": "seclude",
      "vi": "seclude",
      "id": "seclude",
      "es": "seclude",
      "pt": "seclude"
    }
  },
  {
    "id": "K0581",
    "k": "悠",
    "r": "ゆう",
    "m": {
      "en": "permanence",
      "zh-TW": "悠",
      "zh-CN": "悠",
      "ko": "permanence",
      "vi": "permanence",
      "id": "permanence",
      "es": "permanence",
      "pt": "permanence"
    }
  },
  {
    "id": "K0582",
    "k": "憂",
    "r": "うれ（える）、ゆう",
    "m": {
      "en": "melancholy",
      "zh-TW": "憂",
      "zh-CN": "憂",
      "ko": "melancholy",
      "vi": "melancholy",
      "id": "melancholy",
      "es": "melancholy",
      "pt": "melancholy"
    }
  },
  {
    "id": "K0583",
    "k": "猶",
    "r": "なお、ゆう",
    "m": {
      "en": "furthermore",
      "zh-TW": "猶",
      "zh-CN": "猶",
      "ko": "furthermore",
      "vi": "furthermore",
      "id": "furthermore",
      "es": "furthermore",
      "pt": "furthermore"
    }
  },
  {
    "id": "K0584",
    "k": "裕",
    "r": "ゆう",
    "m": {
      "en": "abundant",
      "zh-TW": "裕",
      "zh-CN": "裕",
      "ko": "abundant",
      "vi": "abundant",
      "id": "abundant",
      "es": "abundant",
      "pt": "abundant"
    }
  },
  {
    "id": "K0585",
    "k": "誘",
    "r": "さそ（う）、ゆう",
    "m": {
      "en": "entice",
      "zh-TW": "誘",
      "zh-CN": "誘",
      "ko": "entice",
      "vi": "entice",
      "id": "entice",
      "es": "entice",
      "pt": "entice"
    }
  },
  {
    "id": "K0586",
    "k": "雄",
    "r": "お（りる）、ゆう",
    "m": {
      "en": "masculine",
      "zh-TW": "雄",
      "zh-CN": "雄",
      "ko": "masculine",
      "vi": "masculine",
      "id": "masculine",
      "es": "masculine",
      "pt": "masculine"
    }
  },
  {
    "id": "K0587",
    "k": "融",
    "r": "と（ける）、ゆう",
    "m": {
      "en": "dissolve",
      "zh-TW": "融",
      "zh-CN": "融",
      "ko": "dissolve",
      "vi": "dissolve",
      "id": "dissolve",
      "es": "dissolve",
      "pt": "dissolve"
    }
  },
  {
    "id": "K0588",
    "k": "庸",
    "r": "よう",
    "m": {
      "en": "commonplace",
      "zh-TW": "庸",
      "zh-CN": "庸",
      "ko": "commonplace",
      "vi": "commonplace",
      "id": "commonplace",
      "es": "commonplace",
      "pt": "commonplace"
    }
  },
  {
    "id": "K0589",
    "k": "揚",
    "r": "あ（う）、よう",
    "m": {
      "en": "raise",
      "zh-TW": "揚",
      "zh-CN": "揚",
      "ko": "raise",
      "vi": "raise",
      "id": "raise",
      "es": "criar",
      "pt": "criar"
    }
  },
  {
    "id": "K0590",
    "k": "揺",
    "r": "ゆ（れる）、よう",
    "m": {
      "en": "swing",
      "zh-TW": "揺",
      "zh-CN": "揺",
      "ko": "swing",
      "vi": "swing",
      "id": "swing",
      "es": "swing",
      "pt": "swing"
    }
  },
  {
    "id": "K0591",
    "k": "擁",
    "r": "よう",
    "m": {
      "en": "hug",
      "zh-TW": "擁",
      "zh-CN": "擁",
      "ko": "hug",
      "vi": "hug",
      "id": "hug",
      "es": "hug",
      "pt": "hug"
    }
  },
  {
    "id": "K0592",
    "k": "溶",
    "r": "とる、よう",
    "m": {
      "en": "melt",
      "zh-TW": "溶",
      "zh-CN": "溶",
      "ko": "melt",
      "vi": "melt",
      "id": "melt",
      "es": "melt",
      "pt": "melt"
    }
  },
  {
    "id": "K0593",
    "k": "窯",
    "r": "かま、よう",
    "m": {
      "en": "kiln",
      "zh-TW": "窯",
      "zh-CN": "窯",
      "ko": "kiln",
      "vi": "kiln",
      "id": "kiln",
      "es": "kiln",
      "pt": "kiln"
    }
  },
  {
    "id": "K0594",
    "k": "謡",
    "r": "うたい、よう",
    "m": {
      "en": "noh chanting",
      "zh-TW": "謡",
      "zh-CN": "謡",
      "ko": "noh chanting",
      "vi": "noh chanting",
      "id": "noh chanting",
      "es": "noh chanting",
      "pt": "noh chanting"
    }
  },
  {
    "id": "K0595",
    "k": "抑",
    "r": "おさ（える）、よく",
    "m": {
      "en": "repress",
      "zh-TW": "抑",
      "zh-CN": "抑",
      "ko": "repress",
      "vi": "repress",
      "id": "repress",
      "es": "repress",
      "pt": "repress"
    }
  },
  {
    "id": "K0596",
    "k": "翼",
    "r": "つばさ、よく",
    "m": {
      "en": "wing",
      "zh-TW": "翼",
      "zh-CN": "翼",
      "ko": "wing",
      "vi": "wing",
      "id": "wing",
      "es": "wing",
      "pt": "wing"
    }
  },
  {
    "id": "K0597",
    "k": "羅",
    "r": "ら",
    "m": {
      "en": "gauze",
      "zh-TW": "羅",
      "zh-CN": "羅",
      "ko": "gauze",
      "vi": "gauze",
      "id": "gauze",
      "es": "gauze",
      "pt": "gauze"
    }
  },
  {
    "id": "K0598",
    "k": "裸",
    "r": "はだか、ら",
    "m": {
      "en": "naked",
      "zh-TW": "裸",
      "zh-CN": "裸",
      "ko": "naked",
      "vi": "naked",
      "id": "naked",
      "es": "naked",
      "pt": "naked"
    }
  },
  {
    "id": "K0599",
    "k": "雷",
    "r": "かみなり、らい",
    "m": {
      "en": "thunder",
      "zh-TW": "雷",
      "zh-CN": "雷",
      "ko": "thunder",
      "vi": "thunder",
      "id": "thunder",
      "es": "thunder",
      "pt": "thunder"
    }
  },
  {
    "id": "K0600",
    "k": "絡",
    "r": "から（む）、らく",
    "m": {
      "en": "entwine",
      "zh-TW": "絡",
      "zh-CN": "絡",
      "ko": "entwine",
      "vi": "entwine",
      "id": "entwine",
      "es": "entwine",
      "pt": "entwine"
    }
  },
  {
    "id": "K0601",
    "k": "酪",
    "r": "らく",
    "m": {
      "en": "dairy products",
      "zh-TW": "酪",
      "zh-CN": "酪",
      "ko": "dairy products",
      "vi": "dairy products",
      "id": "dairy products",
      "es": "dairy products",
      "pt": "dairy products"
    }
  },
  {
    "id": "K0602",
    "k": "濫",
    "r": "らん",
    "m": {
      "en": "excessive",
      "zh-TW": "濫",
      "zh-CN": "濫",
      "ko": "excessive",
      "vi": "excessive",
      "id": "excessive",
      "es": "excessive",
      "pt": "excessive"
    }
  },
  {
    "id": "K0603",
    "k": "覧",
    "r": "らん",
    "m": {
      "en": "perusal",
      "zh-TW": "覧",
      "zh-CN": "覧",
      "ko": "perusal",
      "vi": "perusal",
      "id": "perusal",
      "es": "perusal",
      "pt": "perusal"
    }
  },
  {
    "id": "K0604",
    "k": "欄",
    "r": "らん",
    "m": {
      "en": "column",
      "zh-TW": "欄",
      "zh-CN": "欄",
      "ko": "column",
      "vi": "column",
      "id": "column",
      "es": "column",
      "pt": "column"
    }
  },
  {
    "id": "K0605",
    "k": "吏",
    "r": "り",
    "m": {
      "en": "officer",
      "zh-TW": "吏",
      "zh-CN": "吏",
      "ko": "officer",
      "vi": "officer",
      "id": "officer",
      "es": "officer",
      "pt": "officer"
    }
  },
  {
    "id": "K0606",
    "k": "履",
    "r": "は（く）、り",
    "m": {
      "en": "footwear",
      "zh-TW": "履",
      "zh-CN": "履",
      "ko": "footwear",
      "vi": "footwear",
      "id": "footwear",
      "es": "footwear",
      "pt": "footwear"
    }
  },
  {
    "id": "K0607",
    "k": "竜",
    "r": "たつ、りゅう",
    "m": {
      "en": "dragon",
      "zh-TW": "竜",
      "zh-CN": "竜",
      "ko": "dragon",
      "vi": "dragon",
      "id": "dragon",
      "es": "dragon",
      "pt": "dragon"
    }
  },
  {
    "id": "K0608",
    "k": "硫",
    "r": "りゅう",
    "m": {
      "en": "sulphur",
      "zh-TW": "硫",
      "zh-CN": "硫",
      "ko": "sulphur",
      "vi": "sulphur",
      "id": "sulphur",
      "es": "sulphur",
      "pt": "sulphur"
    }
  },
  {
    "id": "K0609",
    "k": "粒",
    "r": "つぶ、りゅう",
    "m": {
      "en": "grains",
      "zh-TW": "粒",
      "zh-CN": "粒",
      "ko": "grains",
      "vi": "grains",
      "id": "grains",
      "es": "grains",
      "pt": "grains"
    }
  },
  {
    "id": "K0610",
    "k": "隆",
    "r": "りゅう",
    "m": {
      "en": "hump",
      "zh-TW": "隆",
      "zh-CN": "隆",
      "ko": "hump",
      "vi": "hump",
      "id": "hump",
      "es": "hump",
      "pt": "hump"
    }
  },
  {
    "id": "K0611",
    "k": "虜",
    "r": "りょ",
    "m": {
      "en": "captive",
      "zh-TW": "虜",
      "zh-CN": "虜",
      "ko": "captive",
      "vi": "captive",
      "id": "captive",
      "es": "captive",
      "pt": "captive"
    }
  },
  {
    "id": "K0612",
    "k": "慮",
    "r": "おもんぱか（る）、りょ",
    "m": {
      "en": "prudence",
      "zh-TW": "慮",
      "zh-CN": "慮",
      "ko": "prudence",
      "vi": "prudence",
      "id": "prudence",
      "es": "prudence",
      "pt": "prudence"
    }
  },
  {
    "id": "K0613",
    "k": "了",
    "r": "りょう",
    "m": {
      "en": "complete",
      "zh-TW": "了",
      "zh-CN": "了",
      "ko": "complete",
      "vi": "complete",
      "id": "complete",
      "es": "complete",
      "pt": "complete"
    }
  },
  {
    "id": "K0614",
    "k": "猟",
    "r": "りょう",
    "m": {
      "en": "game hunting",
      "zh-TW": "猟",
      "zh-CN": "猟",
      "ko": "game hunting",
      "vi": "game hunting",
      "id": "game hunting",
      "es": "game hunting",
      "pt": "game hunting"
    }
  },
  {
    "id": "K0615",
    "k": "療",
    "r": "りょう",
    "m": {
      "en": "heal",
      "zh-TW": "療",
      "zh-CN": "療",
      "ko": "heal",
      "vi": "heal",
      "id": "heal",
      "es": "heal",
      "pt": "heal"
    }
  },
  {
    "id": "K0616",
    "k": "糧",
    "r": "かて、りょう",
    "m": {
      "en": "provisions",
      "zh-TW": "糧",
      "zh-CN": "糧",
      "ko": "provisions",
      "vi": "provisions",
      "id": "provisions",
      "es": "provisions",
      "pt": "provisions"
    }
  },
  {
    "id": "K0617",
    "k": "陵",
    "r": "りょう",
    "m": {
      "en": "mausoleum",
      "zh-TW": "陵",
      "zh-CN": "陵",
      "ko": "mausoleum",
      "vi": "mausoleum",
      "id": "mausoleum",
      "es": "mausoleum",
      "pt": "mausoleum"
    }
  },
  {
    "id": "K0618",
    "k": "倫",
    "r": "りん",
    "m": {
      "en": "ethics",
      "zh-TW": "倫",
      "zh-CN": "倫",
      "ko": "ethics",
      "vi": "ethics",
      "id": "ethics",
      "es": "ethics",
      "pt": "ethics"
    }
  },
  {
    "id": "K0619",
    "k": "隣",
    "r": "となり、りん",
    "m": {
      "en": "neighbor",
      "zh-TW": "隣",
      "zh-CN": "隣",
      "ko": "neighbor",
      "vi": "neighbor",
      "id": "neighbor",
      "es": "neighbor",
      "pt": "neighbor"
    }
  },
  {
    "id": "K0620",
    "k": "涙",
    "r": "なみだ、るい",
    "m": {
      "en": "tears",
      "zh-TW": "涙",
      "zh-CN": "涙",
      "ko": "tears",
      "vi": "tears",
      "id": "tears",
      "es": "tears",
      "pt": "tears"
    }
  },
  {
    "id": "K0621",
    "k": "累",
    "r": "るい",
    "m": {
      "en": "accumulate",
      "zh-TW": "累",
      "zh-CN": "累",
      "ko": "accumulate",
      "vi": "accumulate",
      "id": "accumulate",
      "es": "accumulate",
      "pt": "accumulate"
    }
  },
  {
    "id": "K0622",
    "k": "塁",
    "r": "るい",
    "m": {
      "en": "bases",
      "zh-TW": "塁",
      "zh-CN": "塁",
      "ko": "bases",
      "vi": "bases",
      "id": "bases",
      "es": "bases",
      "pt": "bases"
    }
  },
  {
    "id": "K0623",
    "k": "励",
    "r": "はげ（む）、れい",
    "m": {
      "en": "encourage",
      "zh-TW": "励",
      "zh-CN": "励",
      "ko": "encourage",
      "vi": "encourage",
      "id": "encourage",
      "es": "encourage",
      "pt": "encourage"
    }
  },
  {
    "id": "K0624",
    "k": "鈴",
    "r": "すず、れい",
    "m": {
      "en": "small bell",
      "zh-TW": "鈴",
      "zh-CN": "鈴",
      "ko": "small bell",
      "vi": "small bell",
      "id": "small bell",
      "es": "small bell",
      "pt": "small bell"
    }
  },
  {
    "id": "K0625",
    "k": "霊",
    "r": "たま、れい",
    "m": {
      "en": "spirits",
      "zh-TW": "霊",
      "zh-CN": "霊",
      "ko": "spirits",
      "vi": "spirits",
      "id": "spirits",
      "es": "spirits",
      "pt": "spirits"
    }
  },
  {
    "id": "K0626",
    "k": "麗",
    "r": "うるわ（しい）、れい",
    "m": {
      "en": "lovely",
      "zh-TW": "麗",
      "zh-CN": "麗",
      "ko": "lovely",
      "vi": "lovely",
      "id": "lovely",
      "es": "lovely",
      "pt": "lovely"
    }
  },
  {
    "id": "K0627",
    "k": "齢",
    "r": "れい",
    "m": {
      "en": "age",
      "zh-TW": "齢",
      "zh-CN": "齢",
      "ko": "age",
      "vi": "age",
      "id": "age",
      "es": "edad",
      "pt": "idade"
    }
  },
  {
    "id": "K0628",
    "k": "暦",
    "r": "こよみ、れき",
    "m": {
      "en": "calendar",
      "zh-TW": "暦",
      "zh-CN": "暦",
      "ko": "calendar",
      "vi": "calendar",
      "id": "calendar",
      "es": "calendar",
      "pt": "calendar"
    }
  },
  {
    "id": "K0629",
    "k": "劣",
    "r": "おと（る）、れつ",
    "m": {
      "en": "inferiority",
      "zh-TW": "劣",
      "zh-CN": "劣",
      "ko": "inferiority",
      "vi": "inferiority",
      "id": "inferiority",
      "es": "inferiority",
      "pt": "inferiority"
    }
  },
  {
    "id": "K0630",
    "k": "烈",
    "r": "れつ",
    "m": {
      "en": "ardent",
      "zh-TW": "烈",
      "zh-CN": "烈",
      "ko": "ardent",
      "vi": "ardent",
      "id": "ardent",
      "es": "ardent",
      "pt": "ardent"
    }
  },
  {
    "id": "K0631",
    "k": "裂",
    "r": "さ、れつ",
    "m": {
      "en": "split",
      "zh-TW": "裂",
      "zh-CN": "裂",
      "ko": "split",
      "vi": "split",
      "id": "split",
      "es": "split",
      "pt": "split"
    }
  },
  {
    "id": "K0632",
    "k": "恋",
    "r": "こい、れん",
    "m": {
      "en": "romance",
      "zh-TW": "恋",
      "zh-CN": "恋",
      "ko": "romance",
      "vi": "romance",
      "id": "romance",
      "es": "romance",
      "pt": "romance"
    }
  },
  {
    "id": "K0633",
    "k": "廉",
    "r": "れん",
    "m": {
      "en": "bargain",
      "zh-TW": "廉",
      "zh-CN": "廉",
      "ko": "bargain",
      "vi": "bargain",
      "id": "bargain",
      "es": "bargain",
      "pt": "bargain"
    }
  },
  {
    "id": "K0634",
    "k": "錬",
    "r": "れん",
    "m": {
      "en": "tempering",
      "zh-TW": "錬",
      "zh-CN": "錬",
      "ko": "tempering",
      "vi": "tempering",
      "id": "tempering",
      "es": "tempering",
      "pt": "tempering"
    }
  },
  {
    "id": "K0635",
    "k": "炉",
    "r": "ろ",
    "m": {
      "en": "hearth",
      "zh-TW": "炉",
      "zh-CN": "炉",
      "ko": "hearth",
      "vi": "hearth",
      "id": "hearth",
      "es": "hearth",
      "pt": "hearth"
    }
  },
  {
    "id": "K0636",
    "k": "廊",
    "r": "ろう",
    "m": {
      "en": "corridor",
      "zh-TW": "廊",
      "zh-CN": "廊",
      "ko": "corridor",
      "vi": "corridor",
      "id": "corridor",
      "es": "corridor",
      "pt": "corridor"
    }
  },
  {
    "id": "K0637",
    "k": "楼",
    "r": "ろう",
    "m": {
      "en": "watchtower",
      "zh-TW": "楼",
      "zh-CN": "楼",
      "ko": "watchtower",
      "vi": "watchtower",
      "id": "watchtower",
      "es": "watchtower",
      "pt": "watchtower"
    }
  },
  {
    "id": "K0638",
    "k": "浪",
    "r": "ろう",
    "m": {
      "en": "wandering",
      "zh-TW": "浪",
      "zh-CN": "浪",
      "ko": "wandering",
      "vi": "wandering",
      "id": "wandering",
      "es": "wandering",
      "pt": "wandering"
    }
  },
  {
    "id": "K0639",
    "k": "漏",
    "r": "も（る）、ろう",
    "m": {
      "en": "leak",
      "zh-TW": "漏",
      "zh-CN": "漏",
      "ko": "leak",
      "vi": "leak",
      "id": "leak",
      "es": "leak",
      "pt": "leak"
    }
  },
  {
    "id": "K0640",
    "k": "郎",
    "r": "ろう",
    "m": {
      "en": "son",
      "zh-TW": "郎",
      "zh-CN": "郎",
      "ko": "son",
      "vi": "son",
      "id": "son",
      "es": "son",
      "pt": "son"
    }
  },
  {
    "id": "K0641",
    "k": "惑",
    "r": "まど（う）、わく",
    "m": {
      "en": "beguile",
      "zh-TW": "惑",
      "zh-CN": "惑",
      "ko": "beguile",
      "vi": "beguile",
      "id": "beguile",
      "es": "beguile",
      "pt": "beguile"
    }
  },
  {
    "id": "K0642",
    "k": "枠",
    "r": "わく",
    "m": {
      "en": "frame",
      "zh-TW": "枠",
      "zh-CN": "枠",
      "ko": "frame",
      "vi": "frame",
      "id": "frame",
      "es": "frame",
      "pt": "frame"
    }
  },
  {
    "id": "K0643",
    "k": "湾",
    "r": "わん",
    "m": {
      "en": "gulf",
      "zh-TW": "湾",
      "zh-CN": "湾",
      "ko": "gulf",
      "vi": "gulf",
      "id": "gulf",
      "es": "gulf",
      "pt": "gulf"
    }
  },
  {
    "id": "K0644",
    "k": "腕",
    "r": "うで、わん",
    "m": {
      "en": "arm",
      "zh-TW": "腕",
      "zh-CN": "腕",
      "ko": "arm",
      "vi": "arm",
      "id": "arm",
      "es": "arm",
      "pt": "arm"
    }
  },
  {
    "id": "K0645",
    "k": "謄",
    "on": "トウ",
    "kun": "",
    "m": {
      "en": "copy",
      "zh-TW": "copy",
      "zh-CN": "copy",
      "ko": "copy",
      "vi": "copy",
      "id": "copy",
      "es": "copy",
      "pt": "copy"
    },
    "r": "とう"
  },
  {
    "id": "K0646",
    "k": "謬",
    "on": "ビュウ",
    "kun": "",
    "m": {
      "en": "error",
      "zh-TW": "error",
      "zh-CN": "error",
      "ko": "error",
      "vi": "error",
      "id": "error",
      "es": "error",
      "pt": "error"
    },
    "r": "びゅう"
  },
  {
    "id": "K0647",
    "k": "讐",
    "on": "シュウ",
    "kun": "",
    "m": {
      "en": "revenge",
      "zh-TW": "revenge",
      "zh-CN": "revenge",
      "ko": "revenge",
      "vi": "revenge",
      "id": "revenge",
      "es": "revenge",
      "pt": "revenge"
    },
    "r": "しゅう"
  },
  {
    "id": "K0648",
    "k": "讃",
    "on": "サン",
    "kun": "",
    "m": {
      "en": "praise",
      "zh-TW": "praise",
      "zh-CN": "praise",
      "ko": "praise",
      "vi": "praise",
      "id": "praise",
      "es": "praise",
      "pt": "praise"
    },
    "r": "さん"
  },
  {
    "id": "K0649",
    "k": "貴",
    "on": "キ",
    "kun": "たっと.い",
    "m": {
      "en": "precious",
      "zh-TW": "precious",
      "zh-CN": "precious",
      "ko": "precious",
      "vi": "precious",
      "id": "precious",
      "es": "precious",
      "pt": "precious"
    },
    "r": "たっと（い）、き"
  },
  {
    "id": "K0650",
    "k": "賄",
    "on": "ワイ",
    "kun": "まかな.う",
    "m": {
      "en": "bribe",
      "zh-TW": "bribe",
      "zh-CN": "bribe",
      "ko": "bribe",
      "vi": "bribe",
      "id": "bribe",
      "es": "bribe",
      "pt": "bribe"
    },
    "r": "まかな（う）、わい"
  },
  {
    "id": "K0651",
    "k": "賂",
    "on": "ロ",
    "kun": "",
    "m": {
      "en": "bribe",
      "zh-TW": "bribe",
      "zh-CN": "bribe",
      "ko": "bribe",
      "vi": "bribe",
      "id": "bribe",
      "es": "bribe",
      "pt": "bribe"
    },
    "r": "ろ"
  },
  {
    "id": "K0652",
    "k": "輪",
    "r": "りん",
    "m": {
      "en": "wheel",
      "zh-TW": "輪",
      "zh-CN": "輪",
      "ko": "[wheel]",
      "vi": "[wheel]",
      "id": "[wheel]",
      "es": "wheel",
      "pt": "wheel"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0653",
    "k": "連",
    "r": "れん",
    "m": {
      "en": "connect",
      "zh-TW": "連",
      "zh-CN": "連",
      "ko": "[connect]",
      "vi": "[connect]",
      "id": "[connect]",
      "es": "connect",
      "pt": "connect"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0654",
    "k": "練",
    "r": "れん",
    "m": {
      "en": "practice",
      "zh-TW": "練",
      "zh-CN": "練",
      "ko": "[practice]",
      "vi": "[practice]",
      "id": "[practice]",
      "es": "practicar",
      "pt": "praticar"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0655",
    "k": "労",
    "r": "ろう",
    "m": {
      "en": "labor",
      "zh-TW": "労",
      "zh-CN": "労",
      "ko": "[labor]",
      "vi": "[labor]",
      "id": "[labor]",
      "es": "labor",
      "pt": "labor"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0656",
    "k": "論",
    "r": "ろん",
    "m": {
      "en": "theory",
      "zh-TW": "論",
      "zh-CN": "論",
      "ko": "[theory]",
      "vi": "[theory]",
      "id": "[theory]",
      "es": "theory",
      "pt": "theory"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0657",
    "k": "和",
    "r": "わ",
    "m": {
      "en": "harmony",
      "zh-TW": "和",
      "zh-CN": "和",
      "ko": "[harmony]",
      "vi": "[harmony]",
      "id": "[harmony]",
      "es": "harmony",
      "pt": "harmony"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0658",
    "k": "暴",
    "r": "ぼう",
    "m": {
      "en": "violent",
      "zh-TW": "暴",
      "zh-CN": "暴",
      "ko": "[violent]",
      "vi": "[violent]",
      "id": "[violent]",
      "es": "violent",
      "pt": "violent"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0659",
    "k": "朋",
    "r": "ほう",
    "m": {
      "en": "companion",
      "zh-TW": "朋",
      "zh-CN": "朋",
      "ko": "[companion]",
      "vi": "[companion]",
      "id": "[companion]",
      "es": "companion",
      "pt": "companion"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0660",
    "k": "砲",
    "r": "ほう",
    "m": {
      "en": "cannon",
      "zh-TW": "砲",
      "zh-CN": "砲",
      "ko": "[cannon]",
      "vi": "[cannon]",
      "id": "[cannon]",
      "es": "cannon",
      "pt": "cannon"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0661",
    "k": "倣",
    "r": "ほう",
    "m": {
      "en": "imitate",
      "zh-TW": "倣",
      "zh-CN": "倣",
      "ko": "[imitate]",
      "vi": "[imitate]",
      "id": "[imitate]",
      "es": "imitate",
      "pt": "imitate"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0662",
    "k": "宝",
    "r": "ほう",
    "m": {
      "en": "treasure",
      "zh-TW": "宝",
      "zh-CN": "宝",
      "ko": "[treasure]",
      "vi": "[treasure]",
      "id": "[treasure]",
      "es": "treasure",
      "pt": "treasure"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0663",
    "k": "泊",
    "r": "はく",
    "m": {
      "en": "stay overnight",
      "zh-TW": "泊",
      "zh-CN": "泊",
      "ko": "[stay overnight]",
      "vi": "[stay overnight]",
      "id": "[stay overnight]",
      "es": "stay overnight",
      "pt": "stay overnight"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  }
];
