// Fujisan.AI Data
// Count: 247

const N4_KANJI = [
  {
    "id": "K0001",
    "k": "届",
    "r": "とど（ける）、けい",
    "m": {
      "en": "deliver",
      "zh-TW": "送達",
      "zh-CN": "送达",
      "ko": "届",
      "vi": "giao",
      "id": "kirim"
    }
  },
  {
    "id": "K0002",
    "k": "悪",
    "r": "わる（い）、あ（く）",
    "m": {
      "en": "bad",
      "zh-TW": "壞",
      "zh-CN": "坏",
      "ko": "악",
      "vi": "xấu",
      "id": "buruk"
    }
  },
  {
    "id": "K0003",
    "k": "安",
    "r": "やす（い）、あん",
    "m": {
      "en": "cheap",
      "zh-TW": "便宜",
      "zh-CN": "便宜",
      "ko": "안",
      "vi": "rẻ",
      "id": "murah"
    }
  },
  {
    "id": "K0004",
    "k": "暗",
    "r": "くら（い）、あん",
    "m": {
      "en": "dark",
      "zh-TW": "暗",
      "zh-CN": "暗",
      "ko": "암",
      "vi": "tối",
      "id": "gelap"
    }
  },
  {
    "id": "K0005",
    "k": "以",
    "r": "い",
    "m": {
      "en": "by means of",
      "zh-TW": "以",
      "zh-CN": "以",
      "ko": "이",
      "vi": "lấy",
      "id": "dengan"
    }
  },
  {
    "id": "K0006",
    "k": "意",
    "r": "い",
    "m": {
      "en": "meaning",
      "zh-TW": "意",
      "zh-CN": "意",
      "ko": "의",
      "vi": "ý",
      "id": "makna"
    }
  },
  {
    "id": "K0007",
    "k": "医",
    "r": "い",
    "m": {
      "en": "medicine",
      "zh-TW": "醫",
      "zh-CN": "医",
      "ko": "의",
      "vi": "y",
      "id": "medis"
    }
  },
  {
    "id": "K0008",
    "k": "育",
    "r": "そだ（てる）、い（く）",
    "m": {
      "en": "raise",
      "zh-TW": "育",
      "zh-CN": "育",
      "ko": "육",
      "vi": "nuôi",
      "id": "membesarkan"
    }
  },
  {
    "id": "K0009",
    "k": "員",
    "r": "いん",
    "m": {
      "en": "member",
      "zh-TW": "員",
      "zh-CN": "员",
      "ko": "원",
      "vi": "viên",
      "id": "anggota"
    }
  },
  {
    "id": "K0010",
    "k": "院",
    "r": "いん",
    "m": {
      "en": "institution",
      "zh-TW": "院",
      "zh-CN": "院",
      "ko": "원",
      "vi": "viện",
      "id": "institut"
    }
  },
  {
    "id": "K0011",
    "k": "運",
    "r": "はこ（ぶ）、うん",
    "m": {
      "en": "carry",
      "zh-TW": "運",
      "zh-CN": "运",
      "ko": "운",
      "vi": "vận",
      "id": "mengangkut"
    }
  },
  {
    "id": "K0012",
    "k": "英",
    "r": "えい",
    "m": {
      "en": "England",
      "zh-TW": "英",
      "zh-CN": "英",
      "ko": "영",
      "vi": "anh",
      "id": "Inggris"
    }
  },
  {
    "id": "K0013",
    "k": "映",
    "r": "うつ（す）、えい",
    "m": {
      "en": "reflect",
      "zh-TW": "映",
      "zh-CN": "映",
      "ko": "영",
      "vi": "chiếu",
      "id": "mencerminkan"
    }
  },
  {
    "id": "K0014",
    "k": "園",
    "r": "その、えん",
    "m": {
      "en": "garden",
      "zh-TW": "園",
      "zh-CN": "园",
      "ko": "원",
      "vi": "vườn",
      "id": "taman"
    }
  },
  {
    "id": "K0015",
    "k": "遠",
    "r": "とお（い）、えん",
    "m": {
      "en": "far",
      "zh-TW": "遠",
      "zh-CN": "远",
      "ko": "원",
      "vi": "xa",
      "id": "jauh"
    }
  },
  {
    "id": "K0016",
    "k": "屋",
    "r": "や、お（く）",
    "m": {
      "en": "shop",
      "zh-TW": "店",
      "zh-CN": "店",
      "ko": "옥",
      "vi": "cửa hàng",
      "id": "toko"
    }
  },
  {
    "id": "K0017",
    "k": "歌",
    "r": "うた、か",
    "m": {
      "en": "song",
      "zh-TW": "歌",
      "zh-CN": "歌",
      "ko": "가",
      "vi": "bài hát",
      "id": "lagu"
    }
  },
  {
    "id": "K0018",
    "k": "画",
    "r": "え、が",
    "m": {
      "en": "picture",
      "zh-TW": "畫",
      "zh-CN": "画",
      "ko": "화",
      "vi": "tranh",
      "id": "gambar"
    }
  },
  {
    "id": "K0019",
    "k": "海",
    "r": "うみ、かい",
    "m": {
      "en": "sea",
      "zh-TW": "海",
      "zh-CN": "海",
      "ko": "해",
      "vi": "biển",
      "id": "laut"
    }
  },
  {
    "id": "K0020",
    "k": "開",
    "r": "あ（う）、かい",
    "m": {
      "en": "open",
      "zh-TW": "開",
      "zh-CN": "开",
      "ko": "개",
      "vi": "mở",
      "id": "buka"
    }
  },
  {
    "id": "K0021",
    "k": "界",
    "r": "かい",
    "m": {
      "en": "world",
      "zh-TW": "界",
      "zh-CN": "界",
      "ko": "계",
      "vi": "giới",
      "id": "dunia"
    }
  },
  {
    "id": "K0022",
    "k": "階",
    "r": "かい",
    "m": {
      "en": "floor",
      "zh-TW": "階",
      "zh-CN": "阶",
      "ko": "계",
      "vi": "tầng",
      "id": "lantai"
    }
  },
  {
    "id": "K0023",
    "k": "覚",
    "r": "おぼ（える）、か（く）",
    "m": {
      "en": "remember",
      "zh-TW": "覺",
      "zh-CN": "觉",
      "ko": "각",
      "vi": "nhớ",
      "id": "ingat"
    }
  },
  {
    "id": "K0024",
    "k": "角",
    "r": "かど、か（く）",
    "m": {
      "en": "corner",
      "zh-TW": "角",
      "zh-CN": "角",
      "ko": "각",
      "vi": "góc",
      "id": "sudut"
    }
  },
  {
    "id": "K0025",
    "k": "活",
    "r": "か（つ）",
    "m": {
      "en": "active",
      "zh-TW": "活",
      "zh-CN": "活",
      "ko": "활",
      "vi": "hoạt",
      "id": "aktif"
    }
  },
  {
    "id": "K0026",
    "k": "館",
    "r": "かん",
    "m": {
      "en": "building",
      "zh-TW": "館",
      "zh-CN": "馆",
      "ko": "관",
      "vi": "quán",
      "id": "gedung"
    }
  },
  {
    "id": "K0027",
    "k": "寒",
    "r": "さむ（い）、かん",
    "m": {
      "en": "cold",
      "zh-TW": "寒",
      "zh-CN": "寒",
      "ko": "한",
      "vi": "lạnh",
      "id": "dingin"
    }
  },
  {
    "id": "K0028",
    "k": "漢",
    "r": "かん",
    "m": {
      "en": "China",
      "zh-TW": "漢",
      "zh-CN": "汉",
      "ko": "한",
      "vi": "hán",
      "id": "Cina"
    }
  },
  {
    "id": "K0029",
    "k": "関",
    "r": "かん",
    "m": {
      "en": "relation",
      "zh-TW": "關",
      "zh-CN": "关",
      "ko": "관",
      "vi": "quan",
      "id": "hubungan"
    }
  },
  {
    "id": "K0030",
    "k": "顔",
    "r": "かお、がん",
    "m": {
      "en": "face",
      "zh-TW": "臉",
      "zh-CN": "脸",
      "ko": "안",
      "vi": "mặt",
      "id": "wajah"
    }
  },
  {
    "id": "K0031",
    "k": "帰",
    "r": "かえ（る）、き",
    "m": {
      "en": "return",
      "zh-TW": "歸",
      "zh-CN": "归",
      "ko": "귀",
      "vi": "về",
      "id": "kembali"
    }
  },
  {
    "id": "K0032",
    "k": "起",
    "r": "お（りる）、き",
    "m": {
      "en": "wake up",
      "zh-TW": "起",
      "zh-CN": "起",
      "ko": "기",
      "vi": "thức",
      "id": "bangun"
    }
  },
  {
    "id": "K0033",
    "k": "究",
    "r": "きゅう",
    "m": {
      "en": "research",
      "zh-TW": "究",
      "zh-CN": "究",
      "ko": "구",
      "vi": "cứu",
      "id": "riset"
    }
  },
  {
    "id": "K0034",
    "k": "急",
    "r": "いそ（ぐ）、きゅう",
    "m": {
      "en": "hurry",
      "zh-TW": "急",
      "zh-CN": "急",
      "ko": "급",
      "vi": "gấp",
      "id": "terburu-buru"
    }
  },
  {
    "id": "K0035",
    "k": "去",
    "r": "さ（る）、きょ",
    "m": {
      "en": "leave",
      "zh-TW": "去",
      "zh-CN": "去",
      "ko": "거",
      "vi": "đi",
      "id": "pergi"
    }
  },
  {
    "id": "K0036",
    "k": "強",
    "r": "つよ（い）、きょう",
    "m": {
      "en": "strong",
      "zh-TW": "強",
      "zh-CN": "强",
      "ko": "강",
      "vi": "mạnh",
      "id": "kuat"
    }
  },
  {
    "id": "K0037",
    "k": "業",
    "r": "ぎょう",
    "m": {
      "en": "business",
      "zh-TW": "業",
      "zh-CN": "业",
      "ko": "업",
      "vi": "nghiệp",
      "id": "bisnis"
    }
  },
  {
    "id": "K0038",
    "k": "近",
    "r": "ちか（い）、きん",
    "m": {
      "en": "near",
      "zh-TW": "近",
      "zh-CN": "近",
      "ko": "근",
      "vi": "gần",
      "id": "dekat"
    }
  },
  {
    "id": "K0039",
    "k": "銀",
    "r": "ぎん",
    "m": {
      "en": "silver",
      "zh-TW": "銀",
      "zh-CN": "银",
      "ko": "은",
      "vi": "bạc",
      "id": "perak"
    }
  },
  {
    "id": "K0040",
    "k": "区",
    "r": "く",
    "m": {
      "en": "ward",
      "zh-TW": "區",
      "zh-CN": "区",
      "ko": "구",
      "vi": "khu",
      "id": "distrik"
    }
  },
  {
    "id": "K0041",
    "k": "具",
    "r": "ぐ",
    "m": {
      "en": "tool",
      "zh-TW": "具",
      "zh-CN": "具",
      "ko": "구",
      "vi": "cụ",
      "id": "alat"
    }
  },
  {
    "id": "K0042",
    "k": "経",
    "r": "けい",
    "m": {
      "en": "pass through",
      "zh-TW": "經",
      "zh-CN": "经",
      "ko": "경",
      "vi": "kinh",
      "id": "melalui"
    }
  },
  {
    "id": "K0043",
    "k": "兄",
    "r": "あに、けい",
    "m": {
      "en": "older brother",
      "zh-TW": "兄",
      "zh-CN": "兄",
      "ko": "형",
      "vi": "anh",
      "id": "kakak laki"
    }
  },
  {
    "id": "K0044",
    "k": "軽",
    "r": "かる（い）、けい",
    "m": {
      "en": "light",
      "zh-TW": "輕",
      "zh-CN": "轻",
      "ko": "경",
      "vi": "nhẹ",
      "id": "ringan"
    }
  },
  {
    "id": "K0045",
    "k": "決",
    "r": "き（く）、けつ",
    "m": {
      "en": "decide",
      "zh-TW": "決",
      "zh-CN": "决",
      "ko": "결",
      "vi": "quyết",
      "id": "memutuskan"
    }
  },
  {
    "id": "K0046",
    "k": "研",
    "r": "けん",
    "m": {
      "en": "research",
      "zh-TW": "研",
      "zh-CN": "研",
      "ko": "연",
      "vi": "nghiên",
      "id": "riset"
    }
  },
  {
    "id": "K0047",
    "k": "県",
    "r": "けん",
    "m": {
      "en": "prefecture",
      "zh-TW": "縣",
      "zh-CN": "县",
      "ko": "현",
      "vi": "tỉnh",
      "id": "prefektur"
    }
  },
  {
    "id": "K0048",
    "k": "験",
    "r": "けん",
    "m": {
      "en": "test",
      "zh-TW": "驗",
      "zh-CN": "验",
      "ko": "험",
      "vi": "nghiệm",
      "id": "ujian"
    }
  },
  {
    "id": "K0049",
    "k": "言",
    "r": "い（く）、げん",
    "m": {
      "en": "say",
      "zh-TW": "言",
      "zh-CN": "言",
      "ko": "언",
      "vi": "nói",
      "id": "berkata"
    }
  },
  {
    "id": "K0050",
    "k": "古",
    "r": "ふる（い）、こ",
    "m": {
      "en": "old",
      "zh-TW": "古",
      "zh-CN": "古",
      "ko": "고",
      "vi": "cổ",
      "id": "tua"
    }
  },
  {
    "id": "K0051",
    "k": "庫",
    "r": "こ",
    "m": {
      "en": "warehouse",
      "zh-TW": "庫",
      "zh-CN": "库",
      "ko": "고",
      "vi": "kho",
      "id": "gudang"
    }
  },
  {
    "id": "K0052",
    "k": "語",
    "r": "かた（い）、ご",
    "m": {
      "en": "language",
      "zh-TW": "語",
      "zh-CN": "语",
      "ko": "어",
      "vi": "ngữ",
      "id": "bahasa"
    }
  },
  {
    "id": "K0053",
    "k": "広",
    "r": "ひろ（い）、こう",
    "m": {
      "en": "wide",
      "zh-TW": "廣",
      "zh-CN": "广",
      "ko": "광",
      "vi": "rộng",
      "id": "luas"
    }
  },
  {
    "id": "K0054",
    "k": "考",
    "r": "かんが、こう",
    "m": {
      "en": "think",
      "zh-TW": "考",
      "zh-CN": "考",
      "ko": "고",
      "vi": "suy",
      "id": "berpikir"
    }
  },
  {
    "id": "K0055",
    "k": "合",
    "r": "あ（う）、ごう",
    "m": {
      "en": "fit",
      "zh-TW": "合",
      "zh-CN": "合",
      "ko": "합",
      "vi": "hợp",
      "id": "cocok"
    }
  },
  {
    "id": "K0056",
    "k": "才",
    "r": "さい",
    "m": {
      "en": "talent",
      "zh-TW": "才",
      "zh-CN": "才",
      "ko": "재",
      "vi": "tài",
      "id": "bakat"
    }
  },
  {
    "id": "K0057",
    "k": "菜",
    "r": "なす、さい",
    "m": {
      "en": "vegetable",
      "zh-TW": "菜",
      "zh-CN": "菜",
      "ko": "채",
      "vi": "rau",
      "id": "sayur"
    }
  },
  {
    "id": "K0058",
    "k": "産",
    "r": "う（まれる）、さん",
    "m": {
      "en": "produce",
      "zh-TW": "產",
      "zh-CN": "产",
      "ko": "산",
      "vi": "sản",
      "id": "produksi"
    }
  },
  {
    "id": "K0059",
    "k": "死",
    "r": "しめる、し",
    "m": {
      "en": "death",
      "zh-TW": "死",
      "zh-CN": "死",
      "ko": "사",
      "vi": "chết",
      "id": "mati"
    }
  },
  {
    "id": "K0060",
    "k": "使",
    "r": "つか、し",
    "m": {
      "en": "use",
      "zh-TW": "使",
      "zh-CN": "使",
      "ko": "사",
      "vi": "sử",
      "id": "menggunakan"
    }
  },
  {
    "id": "K0061",
    "k": "始",
    "r": "はじまる、し",
    "m": {
      "en": "begin",
      "zh-TW": "始",
      "zh-CN": "始",
      "ko": "시",
      "vi": "bắt đầu",
      "id": "mulai"
    }
  },
  {
    "id": "K0062",
    "k": "姉",
    "r": "あね、し",
    "m": {
      "en": "older sister",
      "zh-TW": "姐",
      "zh-CN": "姐",
      "ko": "자",
      "vi": "chị",
      "id": "kakak perempuan"
    }
  },
  {
    "id": "K0063",
    "k": "思",
    "r": "おも（い）、し",
    "m": {
      "en": "think",
      "zh-TW": "思",
      "zh-CN": "思",
      "ko": "사",
      "vi": "nghĩ",
      "id": "berpikir"
    }
  },
  {
    "id": "K0064",
    "k": "私",
    "r": "わたし、し",
    "m": {
      "en": "I",
      "zh-TW": "私",
      "zh-CN": "私",
      "ko": "사",
      "vi": "tư",
      "id": "saya"
    }
  },
  {
    "id": "K0065",
    "k": "紙",
    "r": "かみ、し",
    "m": {
      "en": "paper",
      "zh-TW": "紙",
      "zh-CN": "纸",
      "ko": "지",
      "vi": "giấy",
      "id": "kertas"
    }
  },
  {
    "id": "K0066",
    "k": "止",
    "r": "とる、し",
    "m": {
      "en": "stop",
      "zh-TW": "止",
      "zh-CN": "止",
      "ko": "지",
      "vi": "dừng",
      "id": "berhenti"
    }
  },
  {
    "id": "K0067",
    "k": "市",
    "r": "いち、し",
    "m": {
      "en": "city",
      "zh-TW": "市",
      "zh-CN": "市",
      "ko": "시",
      "vi": "thành phố",
      "id": "kota"
    }
  },
  {
    "id": "K0068",
    "k": "仕",
    "r": "つか、し",
    "m": {
      "en": "serve",
      "zh-TW": "仕",
      "zh-CN": "仕",
      "ko": "사",
      "vi": "phục vụ",
      "id": "melayani"
    }
  },
  {
    "id": "K0069",
    "k": "事",
    "r": "こと、じ",
    "m": {
      "en": "thing",
      "zh-TW": "事",
      "zh-CN": "事",
      "ko": "사",
      "vi": "việc",
      "id": "hal"
    }
  },
  {
    "id": "K0070",
    "k": "持",
    "r": "もつ、じ",
    "m": {
      "en": "hold",
      "zh-TW": "持",
      "zh-CN": "持",
      "ko": "지",
      "vi": "giữ",
      "id": "memegang"
    }
  },
  {
    "id": "K0071",
    "k": "質",
    "r": "しつ",
    "m": {
      "en": "quality",
      "zh-TW": "質",
      "zh-CN": "质",
      "ko": "질",
      "vi": "chất",
      "id": "kualitas"
    }
  },
  {
    "id": "K0072",
    "k": "写",
    "r": "うつ（す）、しゃ",
    "m": {
      "en": "copy",
      "zh-TW": "寫",
      "zh-CN": "写",
      "ko": "사",
      "vi": "chép",
      "id": "menyalin"
    }
  },
  {
    "id": "K0073",
    "k": "者",
    "r": "もの、しゃ",
    "m": {
      "en": "person",
      "zh-TW": "者",
      "zh-CN": "者",
      "ko": "자",
      "vi": "giả",
      "id": "orang"
    }
  },
  {
    "id": "K0074",
    "k": "借",
    "r": "か（く）、しゃく",
    "m": {
      "en": "borrow",
      "zh-TW": "借",
      "zh-CN": "借",
      "ko": "차",
      "vi": "mượn",
      "id": "meminjam"
    }
  },
  {
    "id": "K0075",
    "k": "弱",
    "r": "よわ、じゃく",
    "m": {
      "en": "weak",
      "zh-TW": "弱",
      "zh-CN": "弱",
      "ko": "약",
      "vi": "yếu",
      "id": "lemah"
    }
  },
  {
    "id": "K0076",
    "k": "主",
    "r": "ぬし、しゅ",
    "m": {
      "en": "master",
      "zh-TW": "主",
      "zh-CN": "主",
      "ko": "주",
      "vi": "chủ",
      "id": "tuan"
    }
  },
  {
    "id": "K0077",
    "k": "首",
    "r": "くび、しゅ",
    "m": {
      "en": "neck",
      "zh-TW": "首",
      "zh-CN": "首",
      "ko": "수",
      "vi": "cổ",
      "id": "leher"
    }
  },
  {
    "id": "K0078",
    "k": "集",
    "r": "あつ（い）、しゅう",
    "m": {
      "en": "gather",
      "zh-TW": "集",
      "zh-CN": "集",
      "ko": "집",
      "vi": "tập",
      "id": "mengumpulkan"
    }
  },
  {
    "id": "K0079",
    "k": "住",
    "r": "すわる、じゅう",
    "m": {
      "en": "live",
      "zh-TW": "住",
      "zh-CN": "住",
      "ko": "주",
      "vi": "ở",
      "id": "tinggal"
    }
  },
  {
    "id": "K0080",
    "k": "重",
    "r": "おも（い）、じゅう",
    "m": {
      "en": "heavy",
      "zh-TW": "重",
      "zh-CN": "重",
      "ko": "중",
      "vi": "nặng",
      "id": "berat"
    }
  },
  {
    "id": "K0081",
    "k": "春",
    "r": "はる、しゅん",
    "m": {
      "en": "spring",
      "zh-TW": "春",
      "zh-CN": "春",
      "ko": "춘",
      "vi": "xuân",
      "id": "musim semi"
    }
  },
  {
    "id": "K0082",
    "k": "所",
    "r": "ところ、しょ",
    "m": {
      "en": "place",
      "zh-TW": "所",
      "zh-CN": "所",
      "ko": "소",
      "vi": "sở",
      "id": "tempat"
    }
  },
  {
    "id": "K0083",
    "k": "少",
    "r": "すこ、しょう",
    "m": {
      "en": "few",
      "zh-TW": "少",
      "zh-CN": "少",
      "ko": "소",
      "vi": "ít",
      "id": "sedikit"
    }
  },
  {
    "id": "K0084",
    "k": "場",
    "r": "ば、じょう",
    "m": {
      "en": "place",
      "zh-TW": "場",
      "zh-CN": "场",
      "ko": "장",
      "vi": "trường",
      "id": "tempat"
    }
  },
  {
    "id": "K0085",
    "k": "乗",
    "r": "のむ、じょう",
    "m": {
      "en": "ride",
      "zh-TW": "乘",
      "zh-CN": "乘",
      "ko": "승",
      "vi": "lên",
      "id": "naik"
    }
  },
  {
    "id": "K0086",
    "k": "心",
    "r": "こころ、しん",
    "m": {
      "en": "heart",
      "zh-TW": "心",
      "zh-CN": "心",
      "ko": "심",
      "vi": "tâm",
      "id": "hati"
    }
  },
  {
    "id": "K0087",
    "k": "新",
    "r": "あたら（しい）、しん",
    "m": {
      "en": "new",
      "zh-TW": "新",
      "zh-CN": "新",
      "ko": "신",
      "vi": "mới",
      "id": "baru"
    }
  },
  {
    "id": "K0088",
    "k": "親",
    "r": "おや、しん",
    "m": {
      "en": "parent",
      "zh-TW": "親",
      "zh-CN": "亲",
      "ko": "친",
      "vi": "cha mẹ",
      "id": "orang tua"
    }
  },
  {
    "id": "K0089",
    "k": "進",
    "r": "すす、しん",
    "m": {
      "en": "advance",
      "zh-TW": "進",
      "zh-CN": "进",
      "ko": "진",
      "vi": "tiến",
      "id": "maju"
    }
  },
  {
    "id": "K0090",
    "k": "図",
    "r": "ず",
    "m": {
      "en": "diagram",
      "zh-TW": "圖",
      "zh-CN": "图",
      "ko": "도",
      "vi": "đồ",
      "id": "diagram"
    }
  },
  {
    "id": "K0091",
    "k": "声",
    "r": "こえ、せい",
    "m": {
      "en": "voice",
      "zh-TW": "聲",
      "zh-CN": "声",
      "ko": "성",
      "vi": "tiếng",
      "id": "suara"
    }
  },
  {
    "id": "K0092",
    "k": "青",
    "r": "あお（い）、せい",
    "m": {
      "en": "blue",
      "zh-TW": "青",
      "zh-CN": "青",
      "ko": "청",
      "vi": "xanh",
      "id": "biru"
    }
  },
  {
    "id": "K0093",
    "k": "世",
    "r": "よむ、せい",
    "m": {
      "en": "world",
      "zh-TW": "世",
      "zh-CN": "世",
      "ko": "세",
      "vi": "thế",
      "id": "dunia"
    }
  },
  {
    "id": "K0094",
    "k": "赤",
    "r": "あか（い）、せき",
    "m": {
      "en": "red",
      "zh-TW": "赤",
      "zh-CN": "赤",
      "ko": "적",
      "vi": "đỏ",
      "id": "merah"
    }
  },
  {
    "id": "K0095",
    "k": "切",
    "r": "き（く）、せつ",
    "m": {
      "en": "cut",
      "zh-TW": "切",
      "zh-CN": "切",
      "ko": "절",
      "vi": "cắt",
      "id": "potong"
    }
  },
  {
    "id": "K0096",
    "k": "説",
    "r": "とる、せつ",
    "m": {
      "en": "explain",
      "zh-TW": "說",
      "zh-CN": "说",
      "ko": "설",
      "vi": "thuyết",
      "id": "menjelaskan"
    }
  },
  {
    "id": "K0097",
    "k": "洗",
    "r": "あら、せん",
    "m": {
      "en": "wash",
      "zh-TW": "洗",
      "zh-CN": "洗",
      "ko": "세",
      "vi": "rửa",
      "id": "mencuci"
    }
  },
  {
    "id": "K0098",
    "k": "送",
    "r": "お（く）、そう",
    "m": {
      "en": "send",
      "zh-TW": "送",
      "zh-CN": "送",
      "ko": "송",
      "vi": "gửi",
      "id": "mengirim"
    }
  },
  {
    "id": "K0099",
    "k": "相",
    "r": "あい、そう",
    "m": {
      "en": "mutual",
      "zh-TW": "相",
      "zh-CN": "相",
      "ko": "상",
      "vi": "tương",
      "id": "saling"
    }
  },
  {
    "id": "K0100",
    "k": "走",
    "r": "はしる、そう",
    "m": {
      "en": "run",
      "zh-TW": "走",
      "zh-CN": "走",
      "ko": "주",
      "vi": "chạy",
      "id": "berlari"
    }
  },
  {
    "id": "K0101",
    "k": "速",
    "r": "はやい、そく",
    "m": {
      "en": "fast",
      "zh-TW": "速",
      "zh-CN": "速",
      "ko": "속",
      "vi": "nhanh",
      "id": "cepat"
    }
  },
  {
    "id": "K0102",
    "k": "族",
    "r": "ぞく",
    "m": {
      "en": "tribe",
      "zh-TW": "族",
      "zh-CN": "族",
      "ko": "족",
      "vi": "tộc",
      "id": "suku"
    }
  },
  {
    "id": "K0103",
    "k": "村",
    "r": "むら、そん",
    "m": {
      "en": "village",
      "zh-TW": "村",
      "zh-CN": "村",
      "ko": "촌",
      "vi": "thôn",
      "id": "desa"
    }
  },
  {
    "id": "K0104",
    "k": "多",
    "r": "おお（きい）、た",
    "m": {
      "en": "many",
      "zh-TW": "多",
      "zh-CN": "多",
      "ko": "다",
      "vi": "nhiều",
      "id": "banyak"
    }
  },
  {
    "id": "K0105",
    "k": "太",
    "r": "ふと、たい",
    "m": {
      "en": "fat",
      "zh-TW": "太",
      "zh-CN": "太",
      "ko": "태",
      "vi": "to",
      "id": "gemuk"
    }
  },
  {
    "id": "K0106",
    "k": "体",
    "r": "からだ、たい",
    "m": {
      "en": "body",
      "zh-TW": "體",
      "zh-CN": "体",
      "ko": "체",
      "vi": "thể",
      "id": "tubuh"
    }
  },
  {
    "id": "K0107",
    "k": "対",
    "r": "たい",
    "m": {
      "en": "opposite",
      "zh-TW": "對",
      "zh-CN": "对",
      "ko": "대",
      "vi": "đối",
      "id": "lawan"
    }
  },
  {
    "id": "K0108",
    "k": "待",
    "r": "まつ、たい",
    "m": {
      "en": "wait",
      "zh-TW": "待",
      "zh-CN": "待",
      "ko": "대",
      "vi": "đợi",
      "id": "menunggu"
    }
  },
  {
    "id": "K0109",
    "k": "貸",
    "r": "か（く）、たい",
    "m": {
      "en": "lend",
      "zh-TW": "貸",
      "zh-CN": "贷",
      "ko": "대",
      "vi": "cho vay",
      "id": "meminjamkan"
    }
  },
  {
    "id": "K0110",
    "k": "代",
    "r": "か（く）、だい",
    "m": {
      "en": "substitute",
      "zh-TW": "代",
      "zh-CN": "代",
      "ko": "대",
      "vi": "đại",
      "id": "ganti"
    }
  },
  {
    "id": "K0111",
    "k": "題",
    "r": "だい",
    "m": {
      "en": "topic",
      "zh-TW": "題",
      "zh-CN": "题",
      "ko": "제",
      "vi": "đề",
      "id": "topik"
    }
  },
  {
    "id": "K0112",
    "k": "台",
    "r": "だい",
    "m": {
      "en": "stand",
      "zh-TW": "臺",
      "zh-CN": "台",
      "ko": "대",
      "vi": "đài",
      "id": "meja"
    }
  },
  {
    "id": "K0113",
    "k": "短",
    "r": "みじかい、たん",
    "m": {
      "en": "short",
      "zh-TW": "短",
      "zh-CN": "短",
      "ko": "단",
      "vi": "ngắn",
      "id": "pendek"
    }
  },
  {
    "id": "K0114",
    "k": "地",
    "r": "ち",
    "m": {
      "en": "ground",
      "zh-TW": "地",
      "zh-CN": "地",
      "ko": "지",
      "vi": "đất",
      "id": "tanah"
    }
  },
  {
    "id": "K0115",
    "k": "池",
    "r": "いけ、ち",
    "m": {
      "en": "pond",
      "zh-TW": "池",
      "zh-CN": "池",
      "ko": "지",
      "vi": "ao",
      "id": "kolam"
    }
  },
  {
    "id": "K0116",
    "k": "着",
    "r": "き（く）、ちゃく",
    "m": {
      "en": "wear",
      "zh-TW": "著",
      "zh-CN": "着",
      "ko": "착",
      "vi": "mặc",
      "id": "memakai"
    }
  },
  {
    "id": "K0117",
    "k": "注",
    "r": "そそ、ちゅう",
    "m": {
      "en": "pour",
      "zh-TW": "注",
      "zh-CN": "注",
      "ko": "주",
      "vi": "chú",
      "id": "menuang"
    }
  },
  {
    "id": "K0118",
    "k": "朝",
    "r": "あさ（い）、ちょう",
    "m": {
      "en": "morning",
      "zh-TW": "朝",
      "zh-CN": "朝",
      "ko": "조",
      "vi": "sáng",
      "id": "pagi"
    }
  },
  {
    "id": "K0119",
    "k": "町",
    "r": "まち、ちょう",
    "m": {
      "en": "town",
      "zh-TW": "町",
      "zh-CN": "町",
      "ko": "정",
      "vi": "thị trấn",
      "id": "kota kecil"
    }
  },
  {
    "id": "K0120",
    "k": "通",
    "r": "とおい、つう",
    "m": {
      "en": "pass",
      "zh-TW": "通",
      "zh-CN": "通",
      "ko": "통",
      "vi": "thông",
      "id": "lewat"
    }
  },
  {
    "id": "K0121",
    "k": "動",
    "r": "うご、どう",
    "m": {
      "en": "move",
      "zh-TW": "動",
      "zh-CN": "动",
      "ko": "동",
      "vi": "động",
      "id": "gerak"
    }
  },
  {
    "id": "K0122",
    "k": "堂",
    "r": "どう",
    "m": {
      "en": "hall",
      "zh-TW": "堂",
      "zh-CN": "堂",
      "ko": "당",
      "vi": "đường",
      "id": "aula"
    }
  },
  {
    "id": "K0123",
    "k": "内",
    "r": "うち、ない",
    "m": {
      "en": "inside",
      "zh-TW": "內",
      "zh-CN": "内",
      "ko": "내",
      "vi": "nội",
      "id": "dalam"
    }
  },
  {
    "id": "K0124",
    "k": "売",
    "r": "う（まれる）、ばい",
    "m": {
      "en": "sell",
      "zh-TW": "賣",
      "zh-CN": "卖",
      "ko": "매",
      "vi": "bán",
      "id": "jual"
    }
  },
  {
    "id": "K0125",
    "k": "発",
    "r": "はつ",
    "m": {
      "en": "emit",
      "zh-TW": "發",
      "zh-CN": "发",
      "ko": "발",
      "vi": "phát",
      "id": "kirim"
    }
  },
  {
    "id": "K0126",
    "k": "飯",
    "r": "めし、はん",
    "m": {
      "en": "rice",
      "zh-TW": "飯",
      "zh-CN": "饭",
      "ko": "반",
      "vi": "cơm",
      "id": "nasi"
    }
  },
  {
    "id": "K0127",
    "k": "番",
    "r": "ばん",
    "m": {
      "en": "number",
      "zh-TW": "番",
      "zh-CN": "番",
      "ko": "번",
      "vi": "số",
      "id": "nomor"
    }
  },
  {
    "id": "K0128",
    "k": "病",
    "r": "やまい、びょう",
    "m": {
      "en": "sick",
      "zh-TW": "病",
      "zh-CN": "病",
      "ko": "병",
      "vi": "bệnh",
      "id": "sakit"
    }
  },
  {
    "id": "K0129",
    "k": "品",
    "r": "しな、ひん",
    "m": {
      "en": "goods",
      "zh-TW": "品",
      "zh-CN": "品",
      "ko": "품",
      "vi": "phẩm",
      "id": "barang"
    }
  },
  {
    "id": "K0130",
    "k": "部",
    "r": "ぶ",
    "m": {
      "en": "part",
      "zh-TW": "部",
      "zh-CN": "部",
      "ko": "부",
      "vi": "bộ",
      "id": "bagian"
    }
  },
  {
    "id": "K0131",
    "k": "服",
    "r": "ふく",
    "m": {
      "en": "clothes",
      "zh-TW": "服",
      "zh-CN": "服",
      "ko": "복",
      "vi": "phục",
      "id": "pakaian"
    }
  },
  {
    "id": "K0132",
    "k": "物",
    "r": "もの、ぶつ",
    "m": {
      "en": "thing",
      "zh-TW": "物",
      "zh-CN": "物",
      "ko": "물",
      "vi": "vật",
      "id": "benda"
    }
  },
  {
    "id": "K0133",
    "k": "別",
    "r": "わかる、べつ",
    "m": {
      "en": "separate",
      "zh-TW": "別",
      "zh-CN": "别",
      "ko": "별",
      "vi": "biệt",
      "id": "pisah"
    }
  },
  {
    "id": "K0134",
    "k": "勉",
    "r": "べん",
    "m": {
      "en": "effort",
      "zh-TW": "勉",
      "zh-CN": "勉",
      "ko": "면",
      "vi": "miễn",
      "id": "usaha"
    }
  },
  {
    "id": "K0135",
    "k": "歩",
    "r": "ある（く）、ほ",
    "m": {
      "en": "walk",
      "zh-TW": "步",
      "zh-CN": "步",
      "ko": "보",
      "vi": "bộ",
      "id": "jalan"
    }
  },
  {
    "id": "K0136",
    "k": "方",
    "r": "かた（い）、ほう",
    "m": {
      "en": "direction",
      "zh-TW": "方",
      "zh-CN": "方",
      "ko": "방",
      "vi": "phương",
      "id": "arah"
    }
  },
  {
    "id": "K0137",
    "k": "妹",
    "r": "いもうと、まい",
    "m": {
      "en": "younger sister",
      "zh-TW": "妹",
      "zh-CN": "妹",
      "ko": "매",
      "vi": "em gái",
      "id": "adik perempuan"
    }
  },
  {
    "id": "K0138",
    "k": "味",
    "r": "あじ、み",
    "m": {
      "en": "taste",
      "zh-TW": "味",
      "zh-CN": "味",
      "ko": "미",
      "vi": "vị",
      "id": "rasa"
    }
  },
  {
    "id": "K0139",
    "k": "民",
    "r": "たみ、みん",
    "m": {
      "en": "people",
      "zh-TW": "民",
      "zh-CN": "民",
      "ko": "민",
      "vi": "dân",
      "id": "rakyat"
    }
  },
  {
    "id": "K0140",
    "k": "問",
    "r": "とる、もん",
    "m": {
      "en": "question",
      "zh-TW": "問",
      "zh-CN": "问",
      "ko": "문",
      "vi": "vấn",
      "id": "tanya"
    }
  },
  {
    "id": "K0141",
    "k": "夜",
    "r": "よる、や",
    "m": {
      "en": "night",
      "zh-TW": "夜",
      "zh-CN": "夜",
      "ko": "야",
      "vi": "dạ",
      "id": "malam"
    }
  },
  {
    "id": "K0142",
    "k": "野",
    "r": "のむ、や",
    "m": {
      "en": "field",
      "zh-TW": "野",
      "zh-CN": "野",
      "ko": "야",
      "vi": "dã",
      "id": "ladang"
    }
  },
  {
    "id": "K0143",
    "k": "薬",
    "r": "くすり、やく",
    "m": {
      "en": "medicine",
      "zh-TW": "藥",
      "zh-CN": "药",
      "ko": "약",
      "vi": "dược",
      "id": "obat"
    }
  },
  {
    "id": "K0144",
    "k": "予",
    "r": "よ",
    "m": {
      "en": "beforehand",
      "zh-TW": "予",
      "zh-CN": "予",
      "ko": "[beforehand]",
      "vi": "[beforehand]",
      "id": "[beforehand]"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0145",
    "k": "伝",
    "r": "でん",
    "m": {
      "en": "transmit",
      "zh-TW": "伝",
      "zh-CN": "伝",
      "ko": "[transmit]",
      "vi": "[transmit]",
      "id": "[transmit]"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0146",
    "k": "仮",
    "r": "か",
    "m": {
      "en": "temporary",
      "zh-TW": "仮",
      "zh-CN": "仮",
      "ko": "[temporary]",
      "vi": "[temporary]",
      "id": "[temporary]"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0147",
    "k": "件",
    "r": "けん",
    "m": {
      "en": "matter",
      "zh-TW": "件",
      "zh-CN": "件",
      "ko": "[matter]",
      "vi": "[matter]",
      "id": "[matter]"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0148",
    "k": "伸",
    "r": "しん",
    "m": {
      "en": "extend",
      "zh-TW": "伸",
      "zh-CN": "伸",
      "ko": "[extend]",
      "vi": "[extend]",
      "id": "[extend]"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0149",
    "k": "低",
    "r": "てい",
    "m": {
      "en": "low",
      "zh-TW": "低",
      "zh-CN": "低",
      "ko": "[low]",
      "vi": "[low]",
      "id": "[low]"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0150",
    "k": "例",
    "r": "れい",
    "m": {
      "en": "example",
      "zh-TW": "例",
      "zh-CN": "例",
      "ko": "[example]",
      "vi": "[example]",
      "id": "[example]"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0151",
    "k": "係",
    "r": "かか（り）",
    "m": {
      "en": "charge",
      "zh-TW": "係",
      "zh-CN": "係",
      "ko": "[charge]",
      "vi": "[charge]",
      "id": "[charge]"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0152",
    "k": "信",
    "r": "しん",
    "m": {
      "en": "believe",
      "zh-TW": "信",
      "zh-CN": "信",
      "ko": "[believe]",
      "vi": "[believe]",
      "id": "[believe]"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0153",
    "k": "修",
    "r": "しゅう",
    "m": {
      "en": "study",
      "zh-TW": "修",
      "zh-CN": "修",
      "ko": "[study]",
      "vi": "[study]",
      "id": "[study]"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0154",
    "k": "倍",
    "r": "ばい",
    "m": {
      "en": "double",
      "zh-TW": "倍",
      "zh-CN": "倍",
      "ko": "[double]",
      "vi": "[double]",
      "id": "[double]"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0155",
    "k": "候",
    "r": "こう",
    "m": {
      "en": "climate",
      "zh-TW": "候",
      "zh-CN": "候",
      "ko": "[climate]",
      "vi": "[climate]",
      "id": "[climate]"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0156",
    "k": "値",
    "r": "ち",
    "m": {
      "en": "value",
      "zh-TW": "値",
      "zh-CN": "値",
      "ko": "[value]",
      "vi": "[value]",
      "id": "[value]"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0157",
    "k": "優",
    "r": "ゆう",
    "m": {
      "en": "gentle",
      "zh-TW": "優",
      "zh-CN": "優",
      "ko": "[gentle]",
      "vi": "[gentle]",
      "id": "[gentle]"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0158",
    "k": "像",
    "r": "ぞう",
    "m": {
      "en": "image",
      "zh-TW": "像",
      "zh-CN": "像",
      "ko": "[image]",
      "vi": "[image]",
      "id": "[image]"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0159",
    "k": "億",
    "r": "お（く）",
    "m": {
      "en": "hundred million",
      "zh-TW": "億",
      "zh-CN": "億",
      "ko": "[hundred million]",
      "vi": "[hundred million]",
      "id": "[hundred million]"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0160",
    "k": "児",
    "r": "じ",
    "m": {
      "en": "child",
      "zh-TW": "児",
      "zh-CN": "児",
      "ko": "[child]",
      "vi": "[child]",
      "id": "[child]"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0161",
    "k": "共",
    "r": "きょう",
    "m": {
      "en": "together",
      "zh-TW": "共",
      "zh-CN": "共",
      "ko": "[together]",
      "vi": "[together]",
      "id": "[together]"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0162",
    "k": "典",
    "r": "てん",
    "m": {
      "en": "ceremony",
      "zh-TW": "典",
      "zh-CN": "典",
      "ko": "[ceremony]",
      "vi": "[ceremony]",
      "id": "[ceremony]"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0163",
    "k": "再",
    "r": "さい",
    "m": {
      "en": "again",
      "zh-TW": "再",
      "zh-CN": "再",
      "ko": "[again]",
      "vi": "[again]",
      "id": "[again]"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0164",
    "k": "冷",
    "r": "れい",
    "m": {
      "en": "cold",
      "zh-TW": "冷",
      "zh-CN": "冷",
      "ko": "[cold]",
      "vi": "[cold]",
      "id": "[cold]"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0165",
    "k": "列",
    "r": "れつ",
    "m": {
      "en": "row",
      "zh-TW": "列",
      "zh-CN": "列",
      "ko": "[row]",
      "vi": "[row]",
      "id": "[row]"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0166",
    "k": "判",
    "r": "はん",
    "m": {
      "en": "judge",
      "zh-TW": "判",
      "zh-CN": "判",
      "ko": "[judge]",
      "vi": "[judge]",
      "id": "[judge]"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0167",
    "k": "則",
    "r": "そく",
    "m": {
      "en": "rule",
      "zh-TW": "則",
      "zh-CN": "則",
      "ko": "[rule]",
      "vi": "[rule]",
      "id": "[rule]"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0168",
    "k": "副",
    "r": "ふく",
    "m": {
      "en": "vice",
      "zh-TW": "副",
      "zh-CN": "副",
      "ko": "[vice]",
      "vi": "[vice]",
      "id": "[vice]"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0169",
    "k": "割",
    "r": "わり",
    "m": {
      "en": "divide",
      "zh-TW": "割",
      "zh-CN": "割",
      "ko": "[divide]",
      "vi": "[divide]",
      "id": "[divide]"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0170",
    "k": "功",
    "r": "こう",
    "m": {
      "en": "achievement",
      "zh-TW": "功",
      "zh-CN": "功",
      "ko": "[achievement]",
      "vi": "[achievement]",
      "id": "[achievement]"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0171",
    "k": "効",
    "r": "こう",
    "m": {
      "en": "effect",
      "zh-TW": "効",
      "zh-CN": "効",
      "ko": "[effect]",
      "vi": "[effect]",
      "id": "[effect]"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0172",
    "k": "勝",
    "r": "しょう",
    "m": {
      "en": "win",
      "zh-TW": "勝",
      "zh-CN": "勝",
      "ko": "[win]",
      "vi": "[win]",
      "id": "[win]"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0173",
    "k": "務",
    "r": "む",
    "m": {
      "en": "duty",
      "zh-TW": "務",
      "zh-CN": "務",
      "ko": "[duty]",
      "vi": "[duty]",
      "id": "[duty]"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0174",
    "k": "勢",
    "r": "せい",
    "m": {
      "en": "force",
      "zh-TW": "勢",
      "zh-CN": "勢",
      "ko": "[force]",
      "vi": "[force]",
      "id": "[force]"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0175",
    "k": "包",
    "r": "ほう",
    "m": {
      "en": "wrap",
      "zh-TW": "包",
      "zh-CN": "包",
      "ko": "[wrap]",
      "vi": "[wrap]",
      "id": "[wrap]"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0176",
    "k": "史",
    "r": "し",
    "m": {
      "en": "history",
      "zh-TW": "史",
      "zh-CN": "史",
      "ko": "[history]",
      "vi": "[history]",
      "id": "[history]"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0177",
    "k": "司",
    "r": "し",
    "m": {
      "en": "manage",
      "zh-TW": "司",
      "zh-CN": "司",
      "ko": "[manage]",
      "vi": "[manage]",
      "id": "[manage]"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0178",
    "k": "否",
    "r": "ひ",
    "m": {
      "en": "deny",
      "zh-TW": "否",
      "zh-CN": "否",
      "ko": "[deny]",
      "vi": "[deny]",
      "id": "[deny]"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0179",
    "k": "含",
    "r": "がん",
    "m": {
      "en": "contain",
      "zh-TW": "含",
      "zh-CN": "含",
      "ko": "[contain]",
      "vi": "[contain]",
      "id": "[contain]"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0180",
    "k": "告",
    "r": "こく",
    "m": {
      "en": "announce",
      "zh-TW": "告",
      "zh-CN": "告",
      "ko": "[announce]",
      "vi": "[announce]",
      "id": "[announce]"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0181",
    "k": "呼",
    "r": "こ",
    "m": {
      "en": "call",
      "zh-TW": "呼",
      "zh-CN": "呼",
      "ko": "[call]",
      "vi": "[call]",
      "id": "[call]"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0182",
    "k": "因",
    "r": "いん",
    "m": {
      "en": "cause",
      "zh-TW": "因",
      "zh-CN": "因",
      "ko": "[cause]",
      "vi": "[cause]",
      "id": "[cause]"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0183",
    "k": "囲",
    "r": "い",
    "m": {
      "en": "surround",
      "zh-TW": "囲",
      "zh-CN": "囲",
      "ko": "[surround]",
      "vi": "[surround]",
      "id": "[surround]"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0184",
    "k": "固",
    "r": "こ",
    "m": {
      "en": "hard",
      "zh-TW": "固",
      "zh-CN": "固",
      "ko": "[hard]",
      "vi": "[hard]",
      "id": "[hard]"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0185",
    "k": "基",
    "r": "き",
    "m": {
      "en": "base",
      "zh-TW": "基",
      "zh-CN": "基",
      "ko": "[base]",
      "vi": "[base]",
      "id": "[base]"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0186",
    "k": "報",
    "r": "ほう",
    "m": {
      "en": "report",
      "zh-TW": "報",
      "zh-CN": "報",
      "ko": "[report]",
      "vi": "[report]",
      "id": "[report]"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0187",
    "k": "境",
    "r": "きょう",
    "m": {
      "en": "boundary",
      "zh-TW": "境",
      "zh-CN": "境",
      "ko": "[boundary]",
      "vi": "[boundary]",
      "id": "[boundary]"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0188",
    "k": "増",
    "r": "ぞう",
    "m": {
      "en": "increase",
      "zh-TW": "増",
      "zh-CN": "増",
      "ko": "[increase]",
      "vi": "[increase]",
      "id": "[increase]"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0189",
    "k": "壁",
    "r": "へき",
    "m": {
      "en": "wall",
      "zh-TW": "壁",
      "zh-CN": "壁",
      "ko": "[wall]",
      "vi": "[wall]",
      "id": "[wall]"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0190",
    "k": "夢",
    "r": "ゆめ",
    "m": {
      "en": "dream",
      "zh-TW": "夢",
      "zh-CN": "夢",
      "ko": "[dream]",
      "vi": "[dream]",
      "id": "[dream]"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0191",
    "k": "央",
    "r": "おう",
    "m": {
      "en": "center",
      "zh-TW": "央",
      "zh-CN": "央",
      "ko": "[center]",
      "vi": "[center]",
      "id": "[center]"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0192",
    "k": "奥",
    "r": "お（く）",
    "m": {
      "en": "interior",
      "zh-TW": "奥",
      "zh-CN": "奥",
      "ko": "[interior]",
      "vi": "[interior]",
      "id": "[interior]"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0193",
    "k": "婚",
    "r": "こん",
    "m": {
      "en": "marriage",
      "zh-TW": "婚",
      "zh-CN": "婚",
      "ko": "[marriage]",
      "vi": "[marriage]",
      "id": "[marriage]"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0194",
    "k": "終",
    "r": "しゅう",
    "m": {
      "en": "end",
      "zh-TW": "終",
      "zh-CN": "終",
      "ko": "[end]",
      "vi": "[end]",
      "id": "[end]"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0195",
    "k": "働",
    "r": "どう",
    "m": {
      "en": "work",
      "zh-TW": "働",
      "zh-CN": "働",
      "ko": "[work]",
      "vi": "[work]",
      "id": "[work]"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0196",
    "k": "泳",
    "r": "えい",
    "m": {
      "en": "swim",
      "zh-TW": "泳",
      "zh-CN": "泳",
      "ko": "[swim]",
      "vi": "[swim]",
      "id": "[swim]"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0197",
    "k": "習",
    "r": "しゅう",
    "m": {
      "en": "learn",
      "zh-TW": "習",
      "zh-CN": "習",
      "ko": "[learn]",
      "vi": "[learn]",
      "id": "[learn]"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0198",
    "k": "引",
    "r": "いん",
    "m": {
      "en": "pull",
      "zh-TW": "引",
      "zh-CN": "引",
      "ko": "[pull]",
      "vi": "[pull]",
      "id": "[pull]"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0199",
    "k": "押",
    "r": "おう",
    "m": {
      "en": "push",
      "zh-TW": "押",
      "zh-CN": "押",
      "ko": "[push]",
      "vi": "[push]",
      "id": "[push]"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0200",
    "k": "閉",
    "r": "へい",
    "m": {
      "en": "close",
      "zh-TW": "閉",
      "zh-CN": "閉",
      "ko": "[close]",
      "vi": "[close]",
      "id": "[close]"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0201",
    "k": "願",
    "r": "がん",
    "m": {
      "en": "wish",
      "zh-TW": "願",
      "zh-CN": "願",
      "ko": "[wish]",
      "vi": "[wish]",
      "id": "[wish]"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0202",
    "k": "答",
    "r": "とう",
    "m": {
      "en": "answer",
      "zh-TW": "答",
      "zh-CN": "答",
      "ko": "[answer]",
      "vi": "[answer]",
      "id": "[answer]"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0203",
    "k": "試",
    "r": "し",
    "m": {
      "en": "try",
      "zh-TW": "試",
      "zh-CN": "試",
      "ko": "[try]",
      "vi": "[try]",
      "id": "[try]"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0204",
    "k": "寝",
    "r": "しん",
    "m": {
      "en": "sleep",
      "zh-TW": "寝",
      "zh-CN": "寝",
      "ko": "[sleep]",
      "vi": "[sleep]",
      "id": "[sleep]"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0205",
    "k": "変",
    "r": "へん",
    "m": {
      "en": "change",
      "zh-TW": "変",
      "zh-CN": "変",
      "ko": "[change]",
      "vi": "[change]",
      "id": "[change]"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0206",
    "k": "降",
    "r": "こう",
    "m": {
      "en": "descend",
      "zh-TW": "降",
      "zh-CN": "降",
      "ko": "[descend]",
      "vi": "[descend]",
      "id": "[descend]"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0207",
    "k": "渡",
    "r": "と",
    "m": {
      "en": "cross",
      "zh-TW": "渡",
      "zh-CN": "渡",
      "ko": "[cross]",
      "vi": "[cross]",
      "id": "[cross]"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0208",
    "k": "移",
    "r": "い",
    "m": {
      "en": "move",
      "zh-TW": "移",
      "zh-CN": "移",
      "ko": "[move]",
      "vi": "[move]",
      "id": "[move]"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0209",
    "k": "留",
    "r": "りゅう",
    "m": {
      "en": "stay",
      "zh-TW": "留",
      "zh-CN": "留",
      "ko": "[stay]",
      "vi": "[stay]",
      "id": "[stay]"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0210",
    "k": "店",
    "r": "てん",
    "m": {
      "en": "store",
      "zh-TW": "店",
      "zh-CN": "店",
      "ko": "[store]",
      "vi": "[store]",
      "id": "[store]"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0211",
    "k": "街",
    "r": "がい",
    "m": {
      "en": "street",
      "zh-TW": "街",
      "zh-CN": "街",
      "ko": "[street]",
      "vi": "[street]",
      "id": "[street]"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0212",
    "k": "都",
    "r": "と",
    "m": {
      "en": "metropolis",
      "zh-TW": "都",
      "zh-CN": "都",
      "ko": "[metropolis]",
      "vi": "[metropolis]",
      "id": "[metropolis]"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0213",
    "k": "府",
    "r": "ふ",
    "m": {
      "en": "government",
      "zh-TW": "府",
      "zh-CN": "府",
      "ko": "[government]",
      "vi": "[government]",
      "id": "[government]"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0214",
    "k": "港",
    "r": "こう",
    "m": {
      "en": "harbor",
      "zh-TW": "港",
      "zh-CN": "港",
      "ko": "[harbor]",
      "vi": "[harbor]",
      "id": "[harbor]"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0215",
    "k": "島",
    "r": "とう",
    "m": {
      "en": "island",
      "zh-TW": "島",
      "zh-CN": "島",
      "ko": "[island]",
      "vi": "[island]",
      "id": "[island]"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0216",
    "k": "風",
    "r": "ふう",
    "m": {
      "en": "wind",
      "zh-TW": "風",
      "zh-CN": "風",
      "ko": "[wind]",
      "vi": "[wind]",
      "id": "[wind]"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0217",
    "k": "光",
    "r": "こう",
    "m": {
      "en": "light",
      "zh-TW": "光",
      "zh-CN": "光",
      "ko": "[light]",
      "vi": "[light]",
      "id": "[light]"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0218",
    "k": "庭",
    "r": "てい",
    "m": {
      "en": "garden",
      "zh-TW": "庭",
      "zh-CN": "庭",
      "ko": "[garden]",
      "vi": "[garden]",
      "id": "[garden]"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0219",
    "k": "局",
    "r": "きょく",
    "m": {
      "en": "bureau",
      "zh-TW": "局",
      "zh-CN": "局",
      "ko": "[bureau]",
      "vi": "[bureau]",
      "id": "[bureau]"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0220",
    "k": "宿",
    "r": "しゅく",
    "m": {
      "en": "inn",
      "zh-TW": "宿",
      "zh-CN": "宿",
      "ko": "[inn]",
      "vi": "[inn]",
      "id": "[inn]"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0221",
    "k": "鉄",
    "r": "てつ",
    "m": {
      "en": "iron",
      "zh-TW": "鉄",
      "zh-CN": "鉄",
      "ko": "[iron]",
      "vi": "[iron]",
      "id": "[iron]"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0222",
    "k": "橋",
    "r": "きょう",
    "m": {
      "en": "bridge",
      "zh-TW": "橋",
      "zh-CN": "橋",
      "ko": "[bridge]",
      "vi": "[bridge]",
      "id": "[bridge]"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0223",
    "k": "頭",
    "r": "とう",
    "m": {
      "en": "head",
      "zh-TW": "頭",
      "zh-CN": "頭",
      "ko": "[head]",
      "vi": "[head]",
      "id": "[head]"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0224",
    "k": "指",
    "r": "し",
    "m": {
      "en": "finger",
      "zh-TW": "指",
      "zh-CN": "指",
      "ko": "[finger]",
      "vi": "[finger]",
      "id": "[finger]"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0225",
    "k": "歯",
    "r": "し",
    "m": {
      "en": "tooth",
      "zh-TW": "歯",
      "zh-CN": "歯",
      "ko": "[tooth]",
      "vi": "[tooth]",
      "id": "[tooth]"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0226",
    "k": "洋",
    "r": "よう",
    "m": {
      "en": "ocean",
      "zh-TW": "洋",
      "zh-CN": "洋",
      "ko": "[ocean]",
      "vi": "[ocean]",
      "id": "[ocean]"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0227",
    "k": "弟",
    "r": "てい",
    "m": {
      "en": "younger brother",
      "zh-TW": "弟",
      "zh-CN": "弟",
      "ko": "[younger brother]",
      "vi": "[younger brother]",
      "id": "[younger brother]"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0228",
    "k": "客",
    "r": "きゃく",
    "m": {
      "en": "guest",
      "zh-TW": "客",
      "zh-CN": "客",
      "ko": "[guest]",
      "vi": "[guest]",
      "id": "[guest]"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0229",
    "k": "早",
    "r": "そう",
    "m": {
      "en": "early",
      "zh-TW": "早",
      "zh-CN": "早",
      "ko": "[early]",
      "vi": "[early]",
      "id": "[early]"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0230",
    "k": "遅",
    "r": "ち",
    "m": {
      "en": "late",
      "zh-TW": "遅",
      "zh-CN": "遅",
      "ko": "[late]",
      "vi": "[late]",
      "id": "[late]"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0231",
    "k": "狭",
    "r": "きょう",
    "m": {
      "en": "narrow",
      "zh-TW": "狭",
      "zh-CN": "狭",
      "ko": "[narrow]",
      "vi": "[narrow]",
      "id": "[narrow]"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0232",
    "k": "細",
    "r": "さい",
    "m": {
      "en": "thin",
      "zh-TW": "細",
      "zh-CN": "細",
      "ko": "[thin]",
      "vi": "[thin]",
      "id": "[thin]"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0233",
    "k": "硬",
    "r": "こう",
    "m": {
      "en": "hard",
      "zh-TW": "硬",
      "zh-CN": "硬",
      "ko": "[hard]",
      "vi": "[hard]",
      "id": "[hard]"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0234",
    "k": "柔",
    "r": "じゅう",
    "m": {
      "en": "soft",
      "zh-TW": "柔",
      "zh-CN": "柔",
      "ko": "[soft]",
      "vi": "[soft]",
      "id": "[soft]"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0235",
    "k": "便",
    "r": "べん",
    "m": {
      "en": "convenience",
      "zh-TW": "便",
      "zh-CN": "便",
      "ko": "[convenience]",
      "vi": "[convenience]",
      "id": "[convenience]"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0236",
    "k": "利",
    "r": "り",
    "m": {
      "en": "profit",
      "zh-TW": "利",
      "zh-CN": "利",
      "ko": "[profit]",
      "vi": "[profit]",
      "id": "[profit]"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0237",
    "k": "不",
    "r": "ふ",
    "m": {
      "en": "negative",
      "zh-TW": "不",
      "zh-CN": "不",
      "ko": "[negative]",
      "vi": "[negative]",
      "id": "[negative]"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0238",
    "k": "有",
    "r": "ゆう",
    "m": {
      "en": "have",
      "zh-TW": "有",
      "zh-CN": "有",
      "ko": "[have]",
      "vi": "[have]",
      "id": "[have]"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0239",
    "k": "無",
    "r": "む",
    "m": {
      "en": "nothing",
      "zh-TW": "無",
      "zh-CN": "無",
      "ko": "[nothing]",
      "vi": "[nothing]",
      "id": "[nothing]"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0240",
    "k": "特",
    "r": "とく",
    "m": {
      "en": "special",
      "zh-TW": "特",
      "zh-CN": "特",
      "ko": "[special]",
      "vi": "[special]",
      "id": "[special]"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0241",
    "k": "夏",
    "r": "か",
    "m": {
      "en": "summer",
      "zh-TW": "夏",
      "zh-CN": "夏",
      "ko": "[summer]",
      "vi": "[summer]",
      "id": "[summer]"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0242",
    "k": "秋",
    "r": "しゅう",
    "m": {
      "en": "autumn",
      "zh-TW": "秋",
      "zh-CN": "秋",
      "ko": "[autumn]",
      "vi": "[autumn]",
      "id": "[autumn]"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0243",
    "k": "冬",
    "r": "とう",
    "m": {
      "en": "winter",
      "zh-TW": "冬",
      "zh-CN": "冬",
      "ko": "[winter]",
      "vi": "[winter]",
      "id": "[winter]"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0244",
    "k": "夕",
    "r": "ゆう",
    "m": {
      "en": "evening",
      "zh-TW": "夕",
      "zh-CN": "夕",
      "ko": "[evening]",
      "vi": "[evening]",
      "id": "[evening]"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0245",
    "k": "晩",
    "r": "ばん",
    "m": {
      "en": "night",
      "zh-TW": "晩",
      "zh-CN": "晩",
      "ko": "[night]",
      "vi": "[night]",
      "id": "[night]"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0246",
    "k": "度",
    "r": "ど",
    "m": {
      "en": "degree",
      "zh-TW": "度",
      "zh-CN": "度",
      "ko": "[degree]",
      "vi": "[degree]",
      "id": "[degree]"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  },
  {
    "id": "K0247",
    "k": "数",
    "r": "すう",
    "m": {
      "en": "number",
      "zh-TW": "数",
      "zh-CN": "数",
      "ko": "[number]",
      "vi": "[number]",
      "id": "[number]"
    },
    "ex": "",
    "exm": {
      "en": "",
      "zh-TW": "",
      "zh-CN": ""
    }
  }
];