// Fujisan.AI Data
// Count: 450

const n3Grammar = [
  {
    "id": "G0001",
    "p": "〜っぽい",
    "m": {
      "en": "ish",
      "zh-TW": "像",
      "zh-CN": "像",
      "ko": "~스럽다",
      "vi": "có vẻ",
      "id": "seperti"
    }
  },
  {
    "id": "G0002",
    "p": "〜がち",
    "m": {
      "en": "tend to",
      "zh-TW": "傾向",
      "zh-CN": "倾向",
      "ko": "~하기 쉽다",
      "vi": "hay",
      "id": "cenderung"
    }
  },
  {
    "id": "G0003",
    "p": "〜気味",
    "m": {
      "en": "somewhat",
      "zh-TW": "有點",
      "zh-CN": "有点",
      "ko": "~기미",
      "vi": "hơi",
      "id": "agak"
    }
  },
  {
    "id": "G0004",
    "p": "〜向き",
    "m": {
      "en": "suitable for",
      "zh-TW": "適合",
      "zh-CN": "适合",
      "ko": "~용",
      "vi": "phù hợp",
      "id": "cocok untuk"
    }
  },
  {
    "id": "G0005",
    "p": "〜向け",
    "m": {
      "en": "intended for",
      "zh-TW": "針對",
      "zh-CN": "针对",
      "ko": "~대상",
      "vi": "dành cho",
      "id": "untuk"
    }
  },
  {
    "id": "G0006",
    "p": "〜次第",
    "m": {
      "en": "depending on",
      "zh-TW": "取決於",
      "zh-CN": "取决于",
      "ko": "~에 달려있다",
      "vi": "tùy thuộc",
      "id": "tergantung"
    }
  },
  {
    "id": "G0007",
    "p": "〜最中",
    "m": {
      "en": "in the middle of",
      "zh-TW": "正在",
      "zh-CN": "正在",
      "ko": "~하는 중",
      "vi": "đang",
      "id": "sedang"
    }
  },
  {
    "id": "G0008",
    "p": "〜途中",
    "m": {
      "en": "on the way",
      "zh-TW": "途中",
      "zh-CN": "途中",
      "ko": "~도중",
      "vi": "giữa chừng",
      "id": "di tengah"
    }
  },
  {
    "id": "G0009",
    "p": "〜際",
    "m": {
      "en": "when",
      "zh-TW": "時候",
      "zh-CN": "时候",
      "ko": "~때",
      "vi": "lúc",
      "id": "saat"
    }
  },
  {
    "id": "G0010",
    "p": "〜上",
    "m": {
      "en": "from the standpoint",
      "zh-TW": "上",
      "zh-CN": "上",
      "ko": "~상",
      "vi": "về mặt",
      "id": "dari segi"
    }
  },
  {
    "id": "G0011",
    "p": "〜うちに",
    "m": {
      "en": "while",
      "zh-TW": "趁著",
      "zh-CN": "趁着",
      "ko": "~동안에",
      "vi": "trong khi",
      "id": "selagi"
    }
  },
  {
    "id": "G0012",
    "p": "〜たびに",
    "m": {
      "en": "every time",
      "zh-TW": "每次",
      "zh-CN": "每次",
      "ko": "~할 때마다",
      "vi": "mỗi khi",
      "id": "setiap kali"
    }
  },
  {
    "id": "G0013",
    "p": "〜おかげで",
    "m": {
      "en": "thanks to",
      "zh-TW": "多虧",
      "zh-CN": "多亏",
      "ko": "~덕분에",
      "vi": "nhờ",
      "id": "berkat"
    }
  },
  {
    "id": "G0014",
    "p": "〜せいで",
    "m": {
      "en": "because of",
      "zh-TW": "因為",
      "zh-CN": "因为",
      "ko": "~탓에",
      "vi": "vì",
      "id": "karena"
    }
  },
  {
    "id": "G0015",
    "p": "〜くせに",
    "m": {
      "en": "although",
      "zh-TW": "明明",
      "zh-CN": "明明",
      "ko": "~주제에",
      "vi": "dù",
      "id": "meskipun"
    }
  },
  {
    "id": "G0016",
    "p": "〜にしては",
    "m": {
      "en": "considering",
      "zh-TW": "對於來說",
      "zh-CN": "对于来说",
      "ko": "~치고는",
      "vi": "so với",
      "id": "untuk"
    }
  },
  {
    "id": "G0017",
    "p": "〜割に",
    "m": {
      "en": "considering",
      "zh-TW": "相對",
      "zh-CN": "相对",
      "ko": "~치고",
      "vi": "so với",
      "id": "dibandingkan"
    }
  },
  {
    "id": "G0018",
    "p": "〜に関して",
    "m": {
      "en": "regarding",
      "zh-TW": "關於",
      "zh-CN": "关于",
      "ko": "~에 관해",
      "vi": "về",
      "id": "mengenai"
    }
  },
  {
    "id": "G0019",
    "p": "〜に対して",
    "m": {
      "en": "towards",
      "zh-TW": "對於",
      "zh-CN": "对于",
      "ko": "~에 대해",
      "vi": "đối với",
      "id": "terhadap"
    }
  },
  {
    "id": "G0020",
    "p": "〜について",
    "m": {
      "en": "about",
      "zh-TW": "關於",
      "zh-CN": "关于",
      "ko": "~에 대해",
      "vi": "về",
      "id": "tentang"
    }
  },
  {
    "id": "G0021",
    "p": "〜によると",
    "m": {
      "en": "according to",
      "zh-TW": "根據",
      "zh-CN": "根据",
      "ko": "~에 의하면",
      "vi": "theo",
      "id": "menurut"
    }
  },
  {
    "id": "G0022",
    "p": "〜によって",
    "m": {
      "en": "by",
      "zh-TW": "由",
      "zh-CN": "由",
      "ko": "~에 의해",
      "vi": "bởi",
      "id": "oleh"
    }
  },
  {
    "id": "G0023",
    "p": "〜として",
    "m": {
      "en": "as",
      "zh-TW": "作為",
      "zh-CN": "作为",
      "ko": "~로서",
      "vi": "với tư cách",
      "id": "sebagai"
    }
  },
  {
    "id": "G0024",
    "p": "〜にとって",
    "m": {
      "en": "for",
      "zh-TW": "對來說",
      "zh-CN": "对来说",
      "ko": "~에게",
      "vi": "đối với",
      "id": "bagi"
    }
  },
  {
    "id": "G0025",
    "p": "〜において",
    "m": {
      "en": "in",
      "zh-TW": "在",
      "zh-CN": "在",
      "ko": "~에서",
      "vi": "tại",
      "id": "di"
    }
  },
  {
    "id": "G0026",
    "p": "〜を通じて",
    "m": {
      "en": "through",
      "zh-TW": "通過",
      "zh-CN": "通过",
      "ko": "~를 통해",
      "vi": "qua",
      "id": "melalui"
    }
  },
  {
    "id": "G0027",
    "p": "〜をはじめ",
    "m": {
      "en": "starting with",
      "zh-TW": "以為首",
      "zh-CN": "以为首",
      "ko": "~를 비롯해",
      "vi": "bắt đầu từ",
      "id": "dimulai dari"
    }
  },
  {
    "id": "G0028",
    "p": "〜を中心に",
    "m": {
      "en": "centered on",
      "zh-TW": "以為中心",
      "zh-CN": "以为中心",
      "ko": "~를 중심으로",
      "vi": "lấy làm trung tâm",
      "id": "berpusat pada"
    }
  },
  {
    "id": "G0029",
    "p": "〜ついでに",
    "m": {
      "en": "while at it",
      "zh-TW": "順便",
      "zh-CN": "顺便",
      "ko": "~하는 김에",
      "vi": "tiện thể",
      "id": "sekalian"
    }
  },
  {
    "id": "G0030",
    "p": "〜てはじめて",
    "m": {
      "en": "only after",
      "zh-TW": "才",
      "zh-CN": "才",
      "ko": "~해서야 비로소",
      "vi": "mới",
      "id": "baru setelah"
    }
  },
  {
    "id": "G0031",
    "p": "〜てからでないと",
    "m": {
      "en": "unless",
      "zh-TW": "不先就不行",
      "zh-CN": "不先就不行",
      "ko": "~하고 나서가 아니면",
      "vi": "không thì không",
      "id": "kalau tidak dulu"
    }
  },
  {
    "id": "G0032",
    "p": "〜たとたん",
    "m": {
      "en": "just as",
      "zh-TW": "剛",
      "zh-CN": "刚",
      "ko": "~하자마자",
      "vi": "vừa mới",
      "id": "begitu"
    }
  },
  {
    "id": "G0033",
    "p": "〜ようがない",
    "m": {
      "en": "no way to",
      "zh-TW": "沒辦法",
      "zh-CN": "没办法",
      "ko": "~할 수 없다",
      "vi": "không thể",
      "id": "tidak bisa"
    }
  },
  {
    "id": "G0034",
    "p": "〜ざるを得ない",
    "m": {
      "en": "have no choice but",
      "zh-TW": "不得不",
      "zh-CN": "不得不",
      "ko": "~하지 않을 수 없다",
      "vi": "không thể không",
      "id": "terpaksa"
    }
  },
  {
    "id": "G0035",
    "p": "〜ないわけにはいかない",
    "m": {
      "en": "must",
      "zh-TW": "不能不",
      "zh-CN": "不能不",
      "ko": "~하지 않을 수 없다",
      "vi": "phải",
      "id": "harus"
    }
  },
  {
    "id": "G0036",
    "p": "〜わけがない",
    "m": {
      "en": "impossible",
      "zh-TW": "不可能",
      "zh-CN": "不可能",
      "ko": "~할 리가 없다",
      "vi": "không thể nào",
      "id": "tidak mungkin"
    }
  },
  {
    "id": "G0037",
    "p": "〜わけではない",
    "m": {
      "en": "not necessarily",
      "zh-TW": "並非",
      "zh-CN": "并非",
      "ko": "~인 것은 아니다",
      "vi": "không phải là",
      "id": "bukan berarti"
    }
  },
  {
    "id": "G0038",
    "p": "〜に違いない",
    "m": {
      "en": "must be",
      "zh-TW": "一定",
      "zh-CN": "一定",
      "ko": "~임에 틀림없다",
      "vi": "chắc chắn",
      "id": "pasti"
    }
  },
  {
    "id": "G0039",
    "p": "〜に決まっている",
    "m": {
      "en": "surely",
      "zh-TW": "肯定",
      "zh-CN": "肯定",
      "ko": "~로 정해져 있다",
      "vi": "chắc chắn",
      "id": "pasti"
    }
  },
  {
    "id": "G0040",
    "p": "〜っけ",
    "m": {
      "en": "was it",
      "zh-TW": "是嗎",
      "zh-CN": "是吗",
      "ko": "~던가",
      "vi": "là gì nhỉ",
      "id": "ya kan"
    }
  },
  {
    "id": "G0041",
    "p": "〜ものか",
    "m": {
      "en": "never",
      "zh-TW": "絕不",
      "zh-CN": "绝不",
      "ko": "~할 것인가",
      "vi": "đâu có",
      "id": "tidak akan"
    }
  },
  {
    "id": "G0042",
    "p": "〜ものだ",
    "m": {
      "en": "should",
      "zh-TW": "應該",
      "zh-CN": "应该",
      "ko": "~것이다",
      "vi": "nên",
      "id": "seharusnya"
    }
  },
  {
    "id": "G0043",
    "p": "〜ものの",
    "m": {
      "en": "although",
      "zh-TW": "雖然",
      "zh-CN": "虽然",
      "ko": "~기는 하지만",
      "vi": "tuy",
      "id": "meskipun"
    }
  },
  {
    "id": "G0044",
    "p": "〜ことだ",
    "m": {
      "en": "should",
      "zh-TW": "應該",
      "zh-CN": "应该",
      "ko": "~하는 것이다",
      "vi": "nên",
      "id": "sebaiknya"
    }
  },
  {
    "id": "G0045",
    "p": "〜ことか",
    "m": {
      "en": "how",
      "zh-TW": "多麼",
      "zh-CN": "多么",
      "ko": "~인지",
      "vi": "biết bao",
      "id": "betapa"
    }
  },
  {
    "id": "G0046",
    "p": "〜ことに",
    "m": {
      "en": "to my",
      "zh-TW": "令人",
      "zh-CN": "令人",
      "ko": "~게도",
      "vi": "thật",
      "id": "sungguh"
    }
  },
  {
    "id": "G0047",
    "p": "〜ことはない",
    "m": {
      "en": "no need",
      "zh-TW": "不必",
      "zh-CN": "不必",
      "ko": "~할 것 없다",
      "vi": "không cần",
      "id": "tidak perlu"
    }
  },
  {
    "id": "G0048",
    "p": "〜ことになっている",
    "m": {
      "en": "supposed to",
      "zh-TW": "規定",
      "zh-CN": "规定",
      "ko": "~하게 되어 있다",
      "vi": "được quy định",
      "id": "seharusnya"
    }
  },
  {
    "id": "G0049",
    "p": "〜ことにする",
    "m": {
      "en": "decide to",
      "zh-TW": "決定",
      "zh-CN": "决定",
      "ko": "~하기로 하다",
      "vi": "quyết định",
      "id": "memutuskan"
    }
  },
  {
    "id": "G0050",
    "p": "〜ことになる",
    "m": {
      "en": "turn out",
      "zh-TW": "結果",
      "zh-CN": "结果",
      "ko": "~하게 되다",
      "vi": "kết quả là",
      "id": "menjadi"
    }
  },
  {
    "id": "G0051",
    "p": "〜ことがある",
    "m": {
      "en": "sometimes",
      "zh-TW": "有時候",
      "zh-CN": "有时候",
      "ko": "~할 때가 있다",
      "vi": "đôi khi",
      "id": "kadang"
    }
  },
  {
    "id": "G0052",
    "p": "〜ところだ",
    "m": {
      "en": "about to",
      "zh-TW": "正要",
      "zh-CN": "正要",
      "ko": "~하려던 참이다",
      "vi": "sắp",
      "id": "akan"
    }
  },
  {
    "id": "G0053",
    "p": "〜ところに",
    "m": {
      "en": "just when",
      "zh-TW": "正當時",
      "zh-CN": "正当时",
      "ko": "~하는 때에",
      "vi": "đúng lúc",
      "id": "tepat saat"
    }
  },
  {
    "id": "G0054",
    "p": "〜ところで",
    "m": {
      "en": "even if",
      "zh-TW": "即使",
      "zh-CN": "即使",
      "ko": "~해도",
      "vi": "dù",
      "id": "meskipun"
    }
  },
  {
    "id": "G0055",
    "p": "〜ばかりだ",
    "m": {
      "en": "only",
      "zh-TW": "只是",
      "zh-CN": "只是",
      "ko": "~뿐이다",
      "vi": "chỉ",
      "id": "hanya"
    }
  },
  {
    "id": "G0056",
    "p": "〜ばかりに",
    "m": {
      "en": "just because",
      "zh-TW": "只因為",
      "zh-CN": "只因为",
      "ko": "~하기만 해서",
      "vi": "chỉ vì",
      "id": "hanya karena"
    }
  },
  {
    "id": "G0057",
    "p": "〜ばかりか",
    "m": {
      "en": "not only",
      "zh-TW": "不僅",
      "zh-CN": "不仅",
      "ko": "~뿐만 아니라",
      "vi": "không chỉ",
      "id": "bukan hanya"
    }
  },
  {
    "id": "G0058",
    "p": "〜ばかりでなく",
    "m": {
      "en": "not only",
      "zh-TW": "不僅",
      "zh-CN": "不仅",
      "ko": "~뿐만 아니라",
      "vi": "không chỉ",
      "id": "tidak hanya"
    }
  },
  {
    "id": "G0059",
    "p": "〜てばかりいる",
    "m": {
      "en": "always",
      "zh-TW": "總是",
      "zh-CN": "总是",
      "ko": "~하기만 하다",
      "vi": "cứ mãi",
      "id": "selalu"
    }
  },
  {
    "id": "G0060",
    "p": "〜きり",
    "m": {
      "en": "only",
      "zh-TW": "只",
      "zh-CN": "只",
      "ko": "~뿐",
      "vi": "chỉ",
      "id": "hanya"
    }
  },
  {
    "id": "G0061",
    "p": "〜っきり",
    "m": {
      "en": "since",
      "zh-TW": "自從",
      "zh-CN": "自从",
      "ko": "~한 채로",
      "vi": "từ khi",
      "id": "sejak"
    }
  },
  {
    "id": "G0062",
    "p": "〜きる",
    "m": {
      "en": "completely",
      "zh-TW": "完全",
      "zh-CN": "完全",
      "ko": "~하다",
      "vi": "hoàn toàn",
      "id": "sepenuhnya"
    }
  },
  {
    "id": "G0063",
    "p": "〜きれない",
    "m": {
      "en": "cannot completely",
      "zh-TW": "無法完全",
      "zh-CN": "无法完全",
      "ko": "~할 수 없다",
      "vi": "không thể hết",
      "id": "tidak bisa sepenuhnya"
    }
  },
  {
    "id": "G0064",
    "p": "〜かける",
    "m": {
      "en": "begin to",
      "zh-TW": "開始",
      "zh-CN": "开始",
      "ko": "~하다가 말다",
      "vi": "bắt đầu",
      "id": "mulai"
    }
  },
  {
    "id": "G0065",
    "p": "〜かけ",
    "m": {
      "en": "half done",
      "zh-TW": "做到一半",
      "zh-CN": "做到一半",
      "ko": "~하다 만",
      "vi": "dở dang",
      "id": "setengah jadi"
    }
  },
  {
    "id": "G0066",
    "p": "〜がたい",
    "m": {
      "en": "hard to",
      "zh-TW": "難以",
      "zh-CN": "难以",
      "ko": "~하기 어렵다",
      "vi": "khó",
      "id": "sulit"
    }
  },
  {
    "id": "G0067",
    "p": "〜かねる",
    "m": {
      "en": "cannot",
      "zh-TW": "難以",
      "zh-CN": "难以",
      "ko": "~하기 어렵다",
      "vi": "không thể",
      "id": "tidak bisa"
    }
  },
  {
    "id": "G0068",
    "p": "〜かねない",
    "m": {
      "en": "might",
      "zh-TW": "可能會",
      "zh-CN": "可能会",
      "ko": "~할지도 모른다",
      "vi": "có thể",
      "id": "mungkin"
    }
  },
  {
    "id": "G0069",
    "p": "〜得る",
    "m": {
      "en": "can",
      "zh-TW": "能夠",
      "zh-CN": "能够",
      "ko": "~할 수 있다",
      "vi": "có thể",
      "id": "bisa"
    }
  },
  {
    "id": "G0070",
    "p": "〜得ない",
    "m": {
      "en": "cannot",
      "zh-TW": "不能",
      "zh-CN": "不能",
      "ko": "~할 수 없다",
      "vi": "không thể",
      "id": "tidak bisa"
    }
  },
  {
    "id": "G0071",
    "p": "〜ぬく",
    "m": {
      "en": "through",
      "zh-TW": "到底",
      "zh-CN": "到底",
      "ko": "~해내다",
      "vi": "đến cùng",
      "id": "sampai akhir"
    }
  },
  {
    "id": "G0072",
    "p": "〜まくる",
    "m": {
      "en": "keep doing",
      "zh-TW": "一直",
      "zh-CN": "一直",
      "ko": "~하다",
      "vi": "liên tục",
      "id": "terus menerus"
    }
  },
  {
    "id": "G0073",
    "p": "〜っこない",
    "m": {
      "en": "no chance",
      "zh-TW": "不可能",
      "zh-CN": "不可能",
      "ko": "~할 리 없다",
      "vi": "không thể nào",
      "id": "mustahil"
    }
  },
  {
    "id": "G0074",
    "p": "〜さえ",
    "m": {
      "en": "even",
      "zh-TW": "連",
      "zh-CN": "连",
      "ko": "~조차",
      "vi": "ngay cả",
      "id": "bahkan"
    }
  },
  {
    "id": "G0075",
    "p": "〜さえすれば",
    "m": {
      "en": "if only",
      "zh-TW": "只要",
      "zh-CN": "只要",
      "ko": "~하기만 하면",
      "vi": "chỉ cần",
      "id": "asalkan"
    }
  },
  {
    "id": "G0076",
    "p": "〜すら",
    "m": {
      "en": "even",
      "zh-TW": "連",
      "zh-CN": "连",
      "ko": "~조차",
      "vi": "ngay cả",
      "id": "bahkan"
    }
  },
  {
    "id": "G0077",
    "p": "〜だに",
    "m": {
      "en": "even",
      "zh-TW": "連",
      "zh-CN": "连",
      "ko": "~조차",
      "vi": "ngay cả",
      "id": "bahkan"
    }
  },
  {
    "id": "G0078",
    "p": "〜こそ",
    "m": {
      "en": "indeed",
      "zh-TW": "正是",
      "zh-CN": "正是",
      "ko": "~야말로",
      "vi": "chính là",
      "id": "justru"
    }
  },
  {
    "id": "G0079",
    "p": "〜からこそ",
    "m": {
      "en": "precisely because",
      "zh-TW": "正因為",
      "zh-CN": "正因为",
      "ko": "~이기 때문에",
      "vi": "chính vì",
      "id": "justru karena"
    }
  },
  {
    "id": "G0080",
    "p": "〜てこそ",
    "m": {
      "en": "only by",
      "zh-TW": "只有才",
      "zh-CN": "只有才",
      "ko": "~해야 비로소",
      "vi": "chỉ khi",
      "id": "hanya dengan"
    }
  },
  {
    "id": "G0081",
    "p": "〜ならでは",
    "m": {
      "en": "unique to",
      "zh-TW": "只有才有",
      "zh-CN": "只有才有",
      "ko": "~만의",
      "vi": "chỉ có ở",
      "id": "khas"
    }
  },
  {
    "id": "G0082",
    "p": "〜ほど",
    "m": {
      "en": "the more",
      "zh-TW": "越",
      "zh-CN": "越",
      "ko": "~할수록",
      "vi": "càng",
      "id": "semakin"
    }
  },
  {
    "id": "G0083",
    "p": "〜ほどだ",
    "m": {
      "en": "so much that",
      "zh-TW": "到了程度",
      "zh-CN": "到了程度",
      "ko": "~할 정도다",
      "vi": "đến mức",
      "id": "sampai"
    }
  },
  {
    "id": "G0084",
    "p": "〜ほどの",
    "m": {
      "en": "worth",
      "zh-TW": "值得",
      "zh-CN": "值得",
      "ko": "~할 만한",
      "vi": "đáng",
      "id": "layak"
    }
  },
  {
    "id": "G0085",
    "p": "〜くらい",
    "m": {
      "en": "about",
      "zh-TW": "大約",
      "zh-CN": "大约",
      "ko": "~정도",
      "vi": "khoảng",
      "id": "sekitar"
    }
  },
  {
    "id": "G0086",
    "p": "〜ぐらい",
    "m": {
      "en": "to the extent",
      "zh-TW": "到程度",
      "zh-CN": "到程度",
      "ko": "~정도",
      "vi": "đến mức",
      "id": "sampai"
    }
  },
  {
    "id": "G0087",
    "p": "〜だけ",
    "m": {
      "en": "as much as",
      "zh-TW": "盡量",
      "zh-CN": "尽量",
      "ko": "~만큼",
      "vi": "hết mức",
      "id": "sebanyak"
    }
  },
  {
    "id": "G0088",
    "p": "〜だけに",
    "m": {
      "en": "because",
      "zh-TW": "正因為",
      "zh-CN": "正因为",
      "ko": "~만큼",
      "vi": "vì",
      "id": "karena"
    }
  },
  {
    "id": "G0089",
    "p": "〜だけあって",
    "m": {
      "en": "as expected",
      "zh-TW": "不愧是",
      "zh-CN": "不愧是",
      "ko": "~답게",
      "vi": "xứng đáng",
      "id": "pantas"
    }
  },
  {
    "id": "G0090",
    "p": "〜だけのことはある",
    "m": {
      "en": "worth",
      "zh-TW": "不愧",
      "zh-CN": "不愧",
      "ko": "~할 만하다",
      "vi": "xứng đáng",
      "id": "layak"
    }
  },
  {
    "id": "G0091",
    "p": "〜限り",
    "m": {
      "en": "as long as",
      "zh-TW": "只要",
      "zh-CN": "只要",
      "ko": "~하는 한",
      "vi": "miễn là",
      "id": "selama"
    }
  },
  {
    "id": "G0092",
    "p": "〜限りでは",
    "m": {
      "en": "as far as",
      "zh-TW": "就所知",
      "zh-CN": "就所知",
      "ko": "~하는 한에서는",
      "vi": "theo như",
      "id": "sejauh"
    }
  },
  {
    "id": "G0093",
    "p": "〜に限って",
    "m": {
      "en": "only",
      "zh-TW": "偏偏",
      "zh-CN": "偏偏",
      "ko": "~에 한해서",
      "vi": "chỉ",
      "id": "hanya"
    }
  },
  {
    "id": "G0094",
    "p": "〜に限らず",
    "m": {
      "en": "not only",
      "zh-TW": "不限於",
      "zh-CN": "不限于",
      "ko": "~에 한하지 않고",
      "vi": "không chỉ",
      "id": "tidak terbatas pada"
    }
  },
  {
    "id": "G0095",
    "p": "〜とは限らない",
    "m": {
      "en": "not necessarily",
      "zh-TW": "未必",
      "zh-CN": "未必",
      "ko": "~라고 할 수 없다",
      "vi": "chưa chắc",
      "id": "belum tentu"
    }
  },
  {
    "id": "G0096",
    "p": "〜どころか",
    "m": {
      "en": "far from",
      "zh-TW": "別說",
      "zh-CN": "别说",
      "ko": "~은커녕",
      "vi": "đừng nói",
      "id": "jangankan"
    }
  },
  {
    "id": "G0097",
    "p": "〜どころではない",
    "m": {
      "en": "no time for",
      "zh-TW": "不是時候",
      "zh-CN": "不是时候",
      "ko": "~할 때가 아니다",
      "vi": "không phải lúc",
      "id": "bukan waktunya"
    }
  },
  {
    "id": "G0098",
    "p": "〜一方だ",
    "m": {
      "en": "keep doing",
      "zh-TW": "一直",
      "zh-CN": "一直",
      "ko": "~하기만 하다",
      "vi": "ngày càng",
      "id": "terus"
    }
  },
  {
    "id": "G0099",
    "p": "〜一方で",
    "m": {
      "en": "while",
      "zh-TW": "一方面",
      "zh-CN": "一方面",
      "ko": "~하는 한편",
      "vi": "mặt khác",
      "id": "di sisi lain"
    }
  },
  {
    "id": "G0100",
    "p": "〜反面",
    "m": {
      "en": "on the other hand",
      "zh-TW": "另一方面",
      "zh-CN": "另一方面",
      "ko": "~하는 반면",
      "vi": "mặt khác",
      "id": "sebaliknya"
    }
  },
  {
    "id": "G0101",
    "p": "〜をもとに",
    "m": {
      "en": "based on",
      "zh-TW": "以...為基礎",
      "zh-CN": "以...为基础",
      "ko": "~을 바탕으로",
      "vi": "dựa trên",
      "id": "berdasarkan"
    }
  },
  {
    "id": "G0102",
    "p": "〜に比べて",
    "m": {
      "en": "compared to",
      "zh-TW": "與...相比",
      "zh-CN": "与...相比",
      "ko": "~에 비해",
      "vi": "so với",
      "id": "dibandingkan"
    }
  },
  {
    "id": "G0103",
    "p": "〜に加えて",
    "m": {
      "en": "in addition to",
      "zh-TW": "除了...之外",
      "zh-CN": "除了...之外",
      "ko": "~에 더하여",
      "vi": "ngoài ra",
      "id": "selain"
    }
  },
  {
    "id": "G0104",
    "p": "〜に応じて",
    "m": {
      "en": "according to",
      "zh-TW": "根據",
      "zh-CN": "根据",
      "ko": "~에 따라",
      "vi": "tùy theo",
      "id": "sesuai dengan"
    }
  },
  {
    "id": "G0105",
    "p": "〜に基づいて",
    "m": {
      "en": "based on",
      "zh-TW": "基於",
      "zh-CN": "基于",
      "ko": "~에 근거하여",
      "vi": "dựa vào",
      "id": "berdasarkan"
    }
  },
  {
    "id": "G0106",
    "p": "〜にかけて",
    "m": {
      "en": "from...to",
      "zh-TW": "從...到",
      "zh-CN": "从...到",
      "ko": "~에 걸쳐",
      "vi": "từ...đến",
      "id": "dari...sampai"
    }
  },
  {
    "id": "G0107",
    "p": "〜にわたって",
    "m": {
      "en": "throughout",
      "zh-TW": "遍及",
      "zh-CN": "遍及",
      "ko": "~에 걸쳐",
      "vi": "khắp",
      "id": "sepanjang"
    }
  },
  {
    "id": "G0108",
    "p": "〜に沿って",
    "m": {
      "en": "along",
      "zh-TW": "沿著",
      "zh-CN": "沿着",
      "ko": "~을 따라",
      "vi": "dọc theo",
      "id": "sepanjang"
    }
  },
  {
    "id": "G0109",
    "p": "〜にかかわらず",
    "m": {
      "en": "regardless of",
      "zh-TW": "不管",
      "zh-CN": "不管",
      "ko": "~에 관계없이",
      "vi": "bất kể",
      "id": "terlepas dari"
    }
  },
  {
    "id": "G0110",
    "p": "〜に先立って",
    "m": {
      "en": "prior to",
      "zh-TW": "在...之前",
      "zh-CN": "在...之前",
      "ko": "~에 앞서",
      "vi": "trước khi",
      "id": "sebelum"
    }
  },
  {
    "id": "G0111",
    "p": "〜に伴って",
    "m": {
      "en": "along with",
      "zh-TW": "伴隨著",
      "zh-CN": "伴随着",
      "ko": "~에 따라",
      "vi": "đi kèm với",
      "id": "bersama dengan"
    }
  },
  {
    "id": "G0112",
    "p": "〜につれて",
    "m": {
      "en": "as...then",
      "zh-TW": "隨著",
      "zh-CN": "随着",
      "ko": "~에 따라",
      "vi": "theo",
      "id": "seiring dengan"
    }
  },
  {
    "id": "G0113",
    "p": "〜に従って",
    "m": {
      "en": "following",
      "zh-TW": "按照",
      "zh-CN": "按照",
      "ko": "~에 따라",
      "vi": "theo",
      "id": "mengikuti"
    }
  },
  {
    "id": "G0114",
    "p": "〜につき",
    "m": {
      "en": "per/due to",
      "zh-TW": "每/由於",
      "zh-CN": "每/由于",
      "ko": "~당/~으로 인해",
      "vi": "mỗi/vì",
      "id": "per/karena"
    }
  },
  {
    "id": "G0115",
    "p": "〜をきっかけに",
    "m": {
      "en": "triggered by",
      "zh-TW": "以...為契機",
      "zh-CN": "以...为契机",
      "ko": "~을 계기로",
      "vi": "nhân dịp",
      "id": "sebagai pemicu"
    }
  },
  {
    "id": "G0116",
    "p": "〜を込めて",
    "m": {
      "en": "filled with",
      "zh-TW": "充滿",
      "zh-CN": "充满",
      "ko": "~을 담아",
      "vi": "với",
      "id": "penuh dengan"
    }
  },
  {
    "id": "G0117",
    "p": "〜を問わず",
    "m": {
      "en": "regardless of",
      "zh-TW": "不論",
      "zh-CN": "不论",
      "ko": "~을 불문하고",
      "vi": "bất kể",
      "id": "tanpa memandang"
    }
  },
  {
    "id": "G0118",
    "p": "〜はもちろん",
    "m": {
      "en": "not to mention",
      "zh-TW": "當然",
      "zh-CN": "当然",
      "ko": "~은 물론",
      "vi": "đương nhiên",
      "id": "tentu saja"
    }
  },
  {
    "id": "G0119",
    "p": "〜はともかく",
    "m": {
      "en": "leaving aside",
      "zh-TW": "暫且不說",
      "zh-CN": "暂且不说",
      "ko": "~은 어쨌든",
      "vi": "không kể",
      "id": "terlepas dari"
    }
  },
  {
    "id": "G0120",
    "p": "〜からして",
    "m": {
      "en": "judging from",
      "zh-TW": "從...來看",
      "zh-CN": "从...来看",
      "ko": "~부터가",
      "vi": "nhìn từ",
      "id": "dari"
    }
  },
  {
    "id": "G0121",
    "p": "〜からには",
    "m": {
      "en": "since/now that",
      "zh-TW": "既然",
      "zh-CN": "既然",
      "ko": "~하는 이상",
      "vi": "đã",
      "id": "karena"
    }
  },
  {
    "id": "G0122",
    "p": "〜からといって",
    "m": {
      "en": "just because",
      "zh-TW": "雖然說",
      "zh-CN": "虽然说",
      "ko": "~라고 해서",
      "vi": "chỉ vì",
      "id": "hanya karena"
    }
  },
  {
    "id": "G0123",
    "p": "〜上で",
    "m": {
      "en": "in terms of",
      "zh-TW": "在...方面",
      "zh-CN": "在...方面",
      "ko": "~하는 데 있어",
      "vi": "trên",
      "id": "dalam hal"
    }
  },
  {
    "id": "G0124",
    "p": "〜上は",
    "m": {
      "en": "now that",
      "zh-TW": "既然",
      "zh-CN": "既然",
      "ko": "~한 이상",
      "vi": "một khi đã",
      "id": "karena sudah"
    }
  },
  {
    "id": "G0125",
    "p": "〜際に",
    "m": {
      "en": "when/at the time",
      "zh-TW": "在...時",
      "zh-CN": "在...时",
      "ko": "~할 때",
      "vi": "khi",
      "id": "pada saat"
    }
  },
  {
    "id": "G0126",
    "p": "〜次第で",
    "m": {
      "en": "depending on",
      "zh-TW": "取決於",
      "zh-CN": "取决于",
      "ko": "~에 따라",
      "vi": "tùy thuộc vào",
      "id": "tergantung pada"
    }
  },
  {
    "id": "G0127",
    "p": "〜最中に",
    "m": {
      "en": "in the middle of",
      "zh-TW": "正在...的時候",
      "zh-CN": "正在...的时候",
      "ko": "~하는 중에",
      "vi": "đang giữa",
      "id": "di tengah"
    }
  },
  {
    "id": "G0128",
    "p": "〜途中で",
    "m": {
      "en": "on the way",
      "zh-TW": "在途中",
      "zh-CN": "在途中",
      "ko": "~하는 도중에",
      "vi": "trên đường",
      "id": "di tengah jalan"
    }
  },
  {
    "id": "G0129",
    "p": "〜末に",
    "m": {
      "en": "after/at the end",
      "zh-TW": "經過...之後",
      "zh-CN": "经过...之后",
      "ko": "~끝에",
      "vi": "cuối cùng",
      "id": "setelah"
    }
  },
  {
    "id": "G0130",
    "p": "〜あげく",
    "m": {
      "en": "in the end",
      "zh-TW": "結果",
      "zh-CN": "结果",
      "ko": "~한 끝에",
      "vi": "kết cục",
      "id": "akhirnya"
    }
  },
  {
    "id": "G0131",
    "p": "〜た結果",
    "m": {
      "en": "as a result",
      "zh-TW": "結果",
      "zh-CN": "结果",
      "ko": "~한 결과",
      "vi": "kết quả",
      "id": "sebagai hasil"
    }
  },
  {
    "id": "G0132",
    "p": "〜とたん",
    "m": {
      "en": "just as",
      "zh-TW": "剛...就",
      "zh-CN": "刚...就",
      "ko": "~하자마자",
      "vi": "vừa...thì",
      "id": "segera setelah"
    }
  },
  {
    "id": "G0133",
    "p": "〜かと思ったら",
    "m": {
      "en": "no sooner than",
      "zh-TW": "剛以為...就",
      "zh-CN": "刚以为...就",
      "ko": "~하나 했더니",
      "vi": "vừa nghĩ...thì",
      "id": "baru saja"
    }
  },
  {
    "id": "G0134",
    "p": "〜て以来",
    "m": {
      "en": "since",
      "zh-TW": "自從...以來",
      "zh-CN": "自从...以来",
      "ko": "~한 이래",
      "vi": "từ khi",
      "id": "sejak"
    }
  },
  {
    "id": "G0135",
    "p": "〜つつある",
    "m": {
      "en": "in the process of",
      "zh-TW": "正在",
      "zh-CN": "正在",
      "ko": "~하고 있다",
      "vi": "đang dần",
      "id": "sedang"
    }
  },
  {
    "id": "G0136",
    "p": "〜つつも",
    "m": {
      "en": "while/although",
      "zh-TW": "雖然",
      "zh-CN": "虽然",
      "ko": "~하면서도",
      "vi": "mặc dù",
      "id": "meskipun"
    }
  },
  {
    "id": "G0137",
    "p": "〜ながらも",
    "m": {
      "en": "although",
      "zh-TW": "雖然",
      "zh-CN": "虽然",
      "ko": "~하면서도",
      "vi": "mặc dù",
      "id": "meskipun"
    }
  },
  {
    "id": "G0138",
    "p": "〜にもかかわらず",
    "m": {
      "en": "despite",
      "zh-TW": "儘管",
      "zh-CN": "尽管",
      "ko": "~에도 불구하고",
      "vi": "mặc dù",
      "id": "meskipun"
    }
  },
  {
    "id": "G0139",
    "p": "〜わりに",
    "m": {
      "en": "for/considering",
      "zh-TW": "相對於",
      "zh-CN": "相对于",
      "ko": "~치고는",
      "vi": "so với",
      "id": "untuk"
    }
  },
  {
    "id": "G0140",
    "p": "〜としたら",
    "m": {
      "en": "if it were",
      "zh-TW": "如果",
      "zh-CN": "如果",
      "ko": "~라면",
      "vi": "nếu",
      "id": "jika"
    }
  },
  {
    "id": "G0141",
    "p": "〜とすれば",
    "m": {
      "en": "assuming",
      "zh-TW": "假設",
      "zh-CN": "假设",
      "ko": "~라면",
      "vi": "nếu",
      "id": "jika"
    }
  },
  {
    "id": "G0142",
    "p": "〜ないことには",
    "m": {
      "en": "unless",
      "zh-TW": "如果不...的話",
      "zh-CN": "如果不...的话",
      "ko": "~하지 않으면",
      "vi": "nếu không",
      "id": "kecuali"
    }
  },
  {
    "id": "G0143",
    "p": "〜としても",
    "m": {
      "en": "even if",
      "zh-TW": "即使",
      "zh-CN": "即使",
      "ko": "~라고 해도",
      "vi": "dù có",
      "id": "bahkan jika"
    }
  },
  {
    "id": "G0144",
    "p": "〜たとえ〜ても",
    "m": {
      "en": "even if",
      "zh-TW": "即使",
      "zh-CN": "即使",
      "ko": "설령~해도",
      "vi": "dù cho",
      "id": "seandainya"
    }
  },
  {
    "id": "G0145",
    "p": "〜ば〜ほど",
    "m": {
      "en": "the more...the more",
      "zh-TW": "越...越",
      "zh-CN": "越...越",
      "ko": "~하면 할수록",
      "vi": "càng...càng",
      "id": "semakin"
    }
  },
  {
    "id": "G0146",
    "p": "〜さえ〜ば",
    "m": {
      "en": "if only",
      "zh-TW": "只要",
      "zh-CN": "只要",
      "ko": "~만 하면",
      "vi": "chỉ cần",
      "id": "asalkan"
    }
  },
  {
    "id": "G0147",
    "p": "〜しかない",
    "m": {
      "en": "no choice but",
      "zh-TW": "只能",
      "zh-CN": "只能",
      "ko": "~할 수밖에 없다",
      "vi": "chỉ còn cách",
      "id": "tidak ada pilihan"
    }
  },
  {
    "id": "G0148",
    "p": "〜てたまらない",
    "m": {
      "en": "unbearably",
      "zh-TW": "非常",
      "zh-CN": "非常",
      "ko": "~해서 못 견디겠다",
      "vi": "vô cùng",
      "id": "sangat"
    }
  },
  {
    "id": "G0149",
    "p": "〜てならない",
    "m": {
      "en": "extremely",
      "zh-TW": "非常",
      "zh-CN": "非常",
      "ko": "~해서 어쩔 수 없다",
      "vi": "rất",
      "id": "sangat"
    }
  },
  {
    "id": "G0150",
    "p": "〜てしょうがない",
    "m": {
      "en": "can't help",
      "zh-TW": "非常",
      "zh-CN": "非常",
      "ko": "~해서 어쩔 수 없다",
      "vi": "không chịu được",
      "id": "sangat"
    }
  },
  {
    "id": "G0151",
    "p": "〜てかなわない",
    "m": {
      "en": "unbearably",
      "zh-TW": "受不了",
      "zh-CN": "受不了",
      "ko": "~해서 견딜 수 없다",
      "vi": "không chịu nổi",
      "id": "tidak tahan"
    }
  },
  {
    "id": "G0152",
    "p": "〜恐れがある",
    "m": {
      "en": "there is a risk",
      "zh-TW": "有...的可能",
      "zh-CN": "有...的可能",
      "ko": "~할 우려가 있다",
      "vi": "có nguy cơ",
      "id": "ada risiko"
    }
  },
  {
    "id": "G0153",
    "p": "〜っぱなし",
    "m": {
      "en": "left as is",
      "zh-TW": "一直",
      "zh-CN": "一直",
      "ko": "~한 채로",
      "vi": "để yên",
      "id": "dibiarkan"
    }
  },
  {
    "id": "G0154",
    "p": "〜抜く",
    "m": {
      "en": "through to the end",
      "zh-TW": "堅持到底",
      "zh-CN": "坚持到底",
      "ko": "끝까지 ~하다",
      "vi": "đến cùng",
      "id": "sampai akhir"
    }
  },
  {
    "id": "G0155",
    "p": "〜かい",
    "m": {
      "en": "worth doing",
      "zh-TW": "值得",
      "zh-CN": "值得",
      "ko": "~할 보람",
      "vi": "đáng",
      "id": "layak"
    }
  },
  {
    "id": "G0156",
    "p": "〜べき",
    "m": {
      "en": "should",
      "zh-TW": "應該",
      "zh-CN": "应该",
      "ko": "~해야 한다",
      "vi": "nên",
      "id": "harus"
    }
  },
  {
    "id": "G0157",
    "p": "〜べきではない",
    "m": {
      "en": "should not",
      "zh-TW": "不應該",
      "zh-CN": "不应该",
      "ko": "~해서는 안 된다",
      "vi": "không nên",
      "id": "tidak seharusnya"
    }
  },
  {
    "id": "G0158",
    "p": "〜ものではない",
    "m": {
      "en": "shouldn't",
      "zh-TW": "不應該",
      "zh-CN": "不应该",
      "ko": "~하는 게 아니다",
      "vi": "không nên",
      "id": "tidak seharusnya"
    }
  },
  {
    "id": "G0159",
    "p": "〜わけだ",
    "m": {
      "en": "that's why",
      "zh-TW": "難怪",
      "zh-CN": "难怪",
      "ko": "~인 셈이다",
      "vi": "thảo nào",
      "id": "pantas saja"
    }
  },
  {
    "id": "G0160",
    "p": "〜わけにはいかない",
    "m": {
      "en": "cannot",
      "zh-TW": "不能",
      "zh-CN": "不能",
      "ko": "~할 수 없다",
      "vi": "không thể",
      "id": "tidak bisa"
    }
  },
  {
    "id": "G0161",
    "p": "〜はずだ",
    "m": {
      "en": "should be",
      "zh-TW": "應該",
      "zh-CN": "应该",
      "ko": "~할 것이다",
      "vi": "chắc là",
      "id": "seharusnya"
    }
  },
  {
    "id": "G0162",
    "p": "〜はずがない",
    "m": {
      "en": "can't be",
      "zh-TW": "不可能",
      "zh-CN": "不可能",
      "ko": "~할 리가 없다",
      "vi": "không thể",
      "id": "tidak mungkin"
    }
  },
  {
    "id": "G0163",
    "p": "〜ということだ",
    "m": {
      "en": "it means that",
      "zh-TW": "據說",
      "zh-CN": "据说",
      "ko": "~라는 것이다",
      "vi": "nghĩa là",
      "id": "artinya"
    }
  },
  {
    "id": "G0164",
    "p": "〜といっても",
    "m": {
      "en": "even though I say",
      "zh-TW": "雖說",
      "zh-CN": "虽说",
      "ko": "~라고 해도",
      "vi": "dù nói là",
      "id": "meskipun katanya"
    }
  },
  {
    "id": "G0165",
    "p": "〜というと",
    "m": {
      "en": "speaking of",
      "zh-TW": "說到",
      "zh-CN": "说到",
      "ko": "~라고 하면",
      "vi": "nói đến",
      "id": "berbicara tentang"
    }
  },
  {
    "id": "G0166",
    "p": "〜というより",
    "m": {
      "en": "rather than",
      "zh-TW": "與其說",
      "zh-CN": "与其说",
      "ko": "~라기보다",
      "vi": "hơn là",
      "id": "daripada"
    }
  },
  {
    "id": "G0167",
    "p": "〜というのは",
    "m": {
      "en": "what is meant by",
      "zh-TW": "所謂",
      "zh-CN": "所谓",
      "ko": "~라는 것은",
      "vi": "cái gọi là",
      "id": "yang dimaksud"
    }
  },
  {
    "id": "G0168",
    "p": "〜というものだ",
    "m": {
      "en": "that's what...is",
      "zh-TW": "才是",
      "zh-CN": "才是",
      "ko": "~라는 것이다",
      "vi": "chính là",
      "id": "itulah"
    }
  },
  {
    "id": "G0169",
    "p": "〜ないことはない",
    "m": {
      "en": "it's not that...not",
      "zh-TW": "並非不",
      "zh-CN": "并非不",
      "ko": "~하지 않는 것은 아니다",
      "vi": "không phải không",
      "id": "bukan tidak"
    }
  },
  {
    "id": "G0170",
    "p": "〜ずにはいられない",
    "m": {
      "en": "can't help but",
      "zh-TW": "不禁",
      "zh-CN": "不禁",
      "ko": "~하지 않을 수 없다",
      "vi": "không thể không",
      "id": "tidak bisa tidak"
    }
  },
  {
    "id": "G0171",
    "p": "〜てはいられない",
    "m": {
      "en": "can't keep",
      "zh-TW": "不能繼續",
      "zh-CN": "不能继续",
      "ko": "~하고 있을 수 없다",
      "vi": "không thể tiếp tục",
      "id": "tidak bisa terus"
    }
  },
  {
    "id": "G0172",
    "p": "〜てはならない",
    "m": {
      "en": "must not",
      "zh-TW": "不可",
      "zh-CN": "不可",
      "ko": "~해서는 안 된다",
      "vi": "không được",
      "id": "tidak boleh"
    }
  },
  {
    "id": "G0173",
    "p": "〜のみならず",
    "m": {
      "en": "not only",
      "zh-TW": "不僅",
      "zh-CN": "不仅",
      "ko": "~뿐만 아니라",
      "vi": "không chỉ",
      "id": "tidak hanya"
    }
  },
  {
    "id": "G0174",
    "p": "〜に限る",
    "m": {
      "en": "nothing better than",
      "zh-TW": "最好",
      "zh-CN": "最好",
      "ko": "~가 최고다",
      "vi": "tốt nhất là",
      "id": "tidak ada yang lebih baik"
    }
  },
  {
    "id": "G0175",
    "p": "〜ばかり",
    "m": {
      "en": "only/just",
      "zh-TW": "只",
      "zh-CN": "只",
      "ko": "~뿐이다",
      "vi": "chỉ",
      "id": "hanya"
    }
  },
  {
    "id": "G0176",
    "p": "〜んばかり",
    "m": {
      "en": "as if about to",
      "zh-TW": "幾乎要",
      "zh-CN": "几乎要",
      "ko": "~할 듯이",
      "vi": "như thể",
      "id": "seolah-olah"
    }
  },
  {
    "id": "G0177",
    "p": "〜かのようだ",
    "m": {
      "en": "as if",
      "zh-TW": "好像",
      "zh-CN": "好像",
      "ko": "~인 것처럼",
      "vi": "như thể",
      "id": "seolah-olah"
    }
  },
  {
    "id": "G0178",
    "p": "〜ようにする",
    "m": {
      "en": "try to",
      "zh-TW": "盡量",
      "zh-CN": "尽量",
      "ko": "~하도록 하다",
      "vi": "cố gắng",
      "id": "berusaha"
    }
  },
  {
    "id": "G0179",
    "p": "〜ようになる",
    "m": {
      "en": "come to",
      "zh-TW": "變得",
      "zh-CN": "变得",
      "ko": "~하게 되다",
      "vi": "trở nên",
      "id": "menjadi"
    }
  },
  {
    "id": "G0180",
    "p": "〜ようとする",
    "m": {
      "en": "try to",
      "zh-TW": "試圖",
      "zh-CN": "试图",
      "ko": "~하려고 하다",
      "vi": "cố gắng",
      "id": "mencoba"
    }
  },
  {
    "id": "G0181",
    "p": "〜ようとしない",
    "m": {
      "en": "refuse to",
      "zh-TW": "不願意",
      "zh-CN": "不愿意",
      "ko": "~하려고 하지 않다",
      "vi": "không chịu",
      "id": "tidak mau"
    }
  },
  {
    "id": "G0182",
    "p": "〜ようと思う",
    "m": {
      "en": "thinking of",
      "zh-TW": "打算",
      "zh-CN": "打算",
      "ko": "~하려고 생각하다",
      "vi": "định",
      "id": "bermaksud"
    }
  },
  {
    "id": "G0183",
    "p": "〜ようがある",
    "m": {
      "en": "there is a way",
      "zh-TW": "有辦法",
      "zh-CN": "有办法",
      "ko": "~할 방법이 있다",
      "vi": "có cách",
      "id": "ada cara"
    }
  },
  {
    "id": "G0184",
    "p": "〜にすぎない",
    "m": {
      "en": "nothing but",
      "zh-TW": "只不過",
      "zh-CN": "只不过",
      "ko": "~에 불과하다",
      "vi": "chỉ là",
      "id": "hanyalah"
    }
  },
  {
    "id": "G0185",
    "p": "〜にほかならない",
    "m": {
      "en": "nothing but",
      "zh-TW": "正是",
      "zh-CN": "正是",
      "ko": "~에 다름 아니다",
      "vi": "chính là",
      "id": "tidak lain adalah"
    }
  },
  {
    "id": "G0186",
    "p": "〜に相違ない",
    "m": {
      "en": "undoubtedly",
      "zh-TW": "無疑",
      "zh-CN": "无疑",
      "ko": "~임에 틀림없다",
      "vi": "chắc chắn",
      "id": "tidak diragukan"
    }
  },
  {
    "id": "G0187",
    "p": "〜に当たる",
    "m": {
      "en": "equivalent to",
      "zh-TW": "相當於",
      "zh-CN": "相当于",
      "ko": "~에 해당하다",
      "vi": "tương đương",
      "id": "setara dengan"
    }
  },
  {
    "id": "G0188",
    "p": "〜に当たって",
    "m": {
      "en": "on the occasion of",
      "zh-TW": "值此",
      "zh-CN": "值此",
      "ko": "~에 즈음하여",
      "vi": "nhân dịp",
      "id": "pada kesempatan"
    }
  },
  {
    "id": "G0189",
    "p": "〜にかけては",
    "m": {
      "en": "when it comes to",
      "zh-TW": "在...方面",
      "zh-CN": "在...方面",
      "ko": "~에 관해서는",
      "vi": "về việc",
      "id": "dalam hal"
    }
  },
  {
    "id": "G0190",
    "p": "〜にかわって",
    "m": {
      "en": "instead of",
      "zh-TW": "代替",
      "zh-CN": "代替",
      "ko": "~을 대신하여",
      "vi": "thay cho",
      "id": "menggantikan"
    }
  },
  {
    "id": "G0191",
    "p": "〜に反して",
    "m": {
      "en": "contrary to",
      "zh-TW": "與...相反",
      "zh-CN": "与...相反",
      "ko": "~에 반하여",
      "vi": "trái với",
      "id": "bertentangan dengan"
    }
  },
  {
    "id": "G0192",
    "p": "〜てもかまわない",
    "m": {
      "en": "don't mind if",
      "zh-TW": "可以",
      "zh-CN": "可以",
      "ko": "~해도 상관없다",
      "vi": "không sao",
      "id": "tidak masalah"
    }
  },
  {
    "id": "G0193",
    "p": "〜ても差し支えない",
    "m": {
      "en": "it's okay to",
      "zh-TW": "可以",
      "zh-CN": "可以",
      "ko": "~해도 괜찮다",
      "vi": "không vấn đề",
      "id": "tidak apa-apa"
    }
  },
  {
    "id": "G0194",
    "p": "〜なくてはならない",
    "m": {
      "en": "must",
      "zh-TW": "必須",
      "zh-CN": "必须",
      "ko": "~하지 않으면 안 된다",
      "vi": "phải",
      "id": "harus"
    }
  },
  {
    "id": "G0195",
    "p": "〜ないではいられない",
    "m": {
      "en": "can't help but",
      "zh-TW": "不禁",
      "zh-CN": "不禁",
      "ko": "~하지 않을 수 없다",
      "vi": "không thể không",
      "id": "tidak bisa tidak"
    }
  },
  {
    "id": "G0196",
    "p": "〜てほしい",
    "m": {
      "en": "want someone to",
      "zh-TW": "希望",
      "zh-CN": "希望",
      "ko": "~해 주었으면 한다",
      "vi": "muốn",
      "id": "ingin"
    }
  },
  {
    "id": "G0197",
    "p": "〜てもらいたい",
    "m": {
      "en": "would like you to",
      "zh-TW": "希望",
      "zh-CN": "希望",
      "ko": "~해 주었으면 한다",
      "vi": "muốn",
      "id": "ingin"
    }
  },
  {
    "id": "G0198",
    "p": "〜させてもらう",
    "m": {
      "en": "let me/allow me to",
      "zh-TW": "請讓我",
      "zh-CN": "请让我",
      "ko": "~하게 해 주다",
      "vi": "cho phép tôi",
      "id": "biarkan saya"
    }
  },
  {
    "id": "G0199",
    "p": "〜させられる",
    "m": {
      "en": "be made to",
      "zh-TW": "被迫",
      "zh-CN": "被迫",
      "ko": "~시키다",
      "vi": "bị bắt",
      "id": "dipaksa"
    }
  },
  {
    "id": "G0200",
    "p": "〜たがる",
    "m": {
      "en": "want to (3rd person)",
      "zh-TW": "想要",
      "zh-CN": "想要",
      "ko": "~하고 싶어하다",
      "vi": "muốn",
      "id": "ingin"
    }
  },
  {
    "id": "G0201",
    "p": "〜ほうがいい",
    "m": {
      "en": "had better",
      "zh-TW": "最好",
      "zh-CN": "最好",
      "ko": "~하는 게 좋다",
      "vi": "nên",
      "id": "lebih baik"
    }
  },
  {
    "id": "G0202",
    "p": "〜に関する",
    "m": {
      "en": "regarding",
      "zh-TW": "關於",
      "zh-CN": "关于",
      "ko": "~에 관한",
      "vi": "liên quan đến",
      "id": "regarding"
    }
  },
  {
    "id": "G0203",
    "p": "〜に沿った",
    "m": {
      "en": "along with",
      "zh-TW": "沿著",
      "zh-CN": "沿着",
      "ko": "~에 따른",
      "vi": "theo",
      "id": "along with"
    }
  },
  {
    "id": "G0204",
    "p": "〜に応じた",
    "m": {
      "en": "according to",
      "zh-TW": "相應的",
      "zh-CN": "相应的",
      "ko": "~에 맞는",
      "vi": "theo",
      "id": "according to"
    }
  },
  {
    "id": "G0205",
    "p": "〜における",
    "m": {
      "en": "in/at",
      "zh-TW": "在...中的",
      "zh-CN": "在...中的",
      "ko": "~에서의",
      "vi": "tại",
      "id": "in/at"
    }
  },
  {
    "id": "G0206",
    "p": "〜に際して",
    "m": {
      "en": "on the occasion",
      "zh-TW": "在...之際",
      "zh-CN": "在...之际",
      "ko": "~에 즈음하여",
      "vi": "nhân dịp",
      "id": "on the occasion"
    }
  },
  {
    "id": "G0207",
    "p": "〜に先立ち",
    "m": {
      "en": "prior to",
      "zh-TW": "在...之前",
      "zh-CN": "在...之前",
      "ko": "~에 앞서",
      "vi": "trước khi",
      "id": "prior to"
    }
  },
  {
    "id": "G0208",
    "p": "〜を契機に",
    "m": {
      "en": "taking opportunity",
      "zh-TW": "以...為契機",
      "zh-CN": "以...为契机",
      "ko": "~을 계기로",
      "vi": "nhân cơ hội",
      "id": "taking opportunity"
    }
  },
  {
    "id": "G0209",
    "p": "〜を皮切りに",
    "m": {
      "en": "beginning with",
      "zh-TW": "從...開始",
      "zh-CN": "从...开始",
      "ko": "~을 시작으로",
      "vi": "bắt đầu từ",
      "id": "beginning with"
    }
  },
  {
    "id": "G0210",
    "p": "〜をめぐって",
    "m": {
      "en": "concerning",
      "zh-TW": "圍繞",
      "zh-CN": "围绕",
      "ko": "~을 둘러싸고",
      "vi": "xung quanh",
      "id": "concerning"
    }
  },
  {
    "id": "G0211",
    "p": "〜あまり",
    "m": {
      "en": "so much that",
      "zh-TW": "過於",
      "zh-CN": "过于",
      "ko": "너무 ~한 나머지",
      "vi": "quá",
      "id": "so much that"
    }
  },
  {
    "id": "G0212",
    "p": "〜かどうか",
    "m": {
      "en": "whether or not",
      "zh-TW": "是否",
      "zh-CN": "是否",
      "ko": "~인지 아닌지",
      "vi": "có...hay không",
      "id": "whether or not"
    }
  },
  {
    "id": "G0213",
    "p": "〜かというと",
    "m": {
      "en": "the reason is",
      "zh-TW": "要說為什麼",
      "zh-CN": "要说为什么",
      "ko": "~냐 하면",
      "vi": "nếu hỏi tại sao",
      "id": "the reason is"
    }
  },
  {
    "id": "G0214",
    "p": "〜ともなると",
    "m": {
      "en": "when it comes to",
      "zh-TW": "一到...就",
      "zh-CN": "一到...就",
      "ko": "~쯤 되면",
      "vi": "khi đến mức",
      "id": "when it comes to"
    }
  },
  {
    "id": "G0215",
    "p": "〜にしろ〜にしろ",
    "m": {
      "en": "whether...or",
      "zh-TW": "無論...還是",
      "zh-CN": "无论...还是",
      "ko": "~든 ~든",
      "vi": "dù...hay",
      "id": "whether...or"
    }
  },
  {
    "id": "G0216",
    "p": "〜にせよ〜にせよ",
    "m": {
      "en": "whether...or",
      "zh-TW": "不管...還是",
      "zh-CN": "不管...还是",
      "ko": "~이든 ~이든",
      "vi": "dù...hay",
      "id": "whether...or"
    }
  },
  {
    "id": "G0217",
    "p": "〜といい〜といい",
    "m": {
      "en": "both...and",
      "zh-TW": "無論...還是",
      "zh-CN": "无论...还是",
      "ko": "~도 ~도",
      "vi": "cả...lẫn",
      "id": "both...and"
    }
  },
  {
    "id": "G0218",
    "p": "〜やら〜やら",
    "m": {
      "en": "such things as",
      "zh-TW": "什麼...什麼",
      "zh-CN": "什么...什么",
      "ko": "~니 ~니",
      "vi": "nào là",
      "id": "such things as"
    }
  },
  {
    "id": "G0219",
    "p": "〜なり〜なり",
    "m": {
      "en": "either...or",
      "zh-TW": "或...或",
      "zh-CN": "或...或",
      "ko": "~든지 ~든지",
      "vi": "hoặc",
      "id": "either...or"
    }
  },
  {
    "id": "G0220",
    "p": "〜であれ〜であれ",
    "m": {
      "en": "whether...or",
      "zh-TW": "無論...還是",
      "zh-CN": "无论...还是",
      "ko": "~이든 ~이든",
      "vi": "dù...hay",
      "id": "whether...or"
    }
  },
  {
    "id": "G0221",
    "p": "〜につけ〜につけ",
    "m": {
      "en": "whether...or",
      "zh-TW": "每當...時",
      "zh-CN": "每当...时",
      "ko": "~할 때마다",
      "vi": "mỗi khi",
      "id": "whether...or"
    }
  },
  {
    "id": "G0222",
    "p": "〜といったら",
    "m": {
      "en": "speaking of",
      "zh-TW": "說到",
      "zh-CN": "说到",
      "ko": "~라고 하면",
      "vi": "nói đến",
      "id": "speaking of"
    }
  },
  {
    "id": "G0223",
    "p": "〜といえば",
    "m": {
      "en": "speaking of",
      "zh-TW": "說到",
      "zh-CN": "说到",
      "ko": "~라고 하면",
      "vi": "nói đến",
      "id": "speaking of"
    }
  },
  {
    "id": "G0224",
    "p": "〜からすると",
    "m": {
      "en": "judging from",
      "zh-TW": "從...來看",
      "zh-CN": "从...来看",
      "ko": "~로 보면",
      "vi": "xét từ",
      "id": "judging from"
    }
  },
  {
    "id": "G0225",
    "p": "〜からすれば",
    "m": {
      "en": "judging from",
      "zh-TW": "從...來看",
      "zh-CN": "从...来看",
      "ko": "~로 본다면",
      "vi": "xét từ",
      "id": "judging from"
    }
  },
  {
    "id": "G0226",
    "p": "〜からみると",
    "m": {
      "en": "looking from",
      "zh-TW": "從...來看",
      "zh-CN": "从...来看",
      "ko": "~로 보면",
      "vi": "nhìn từ",
      "id": "looking from"
    }
  },
  {
    "id": "G0227",
    "p": "〜から言って",
    "m": {
      "en": "speaking from",
      "zh-TW": "從...來說",
      "zh-CN": "从...来说",
      "ko": "~로 말하면",
      "vi": "nói từ",
      "id": "speaking from"
    }
  },
  {
    "id": "G0228",
    "p": "〜にしたら",
    "m": {
      "en": "from standpoint",
      "zh-TW": "對...來說",
      "zh-CN": "对...来说",
      "ko": "~로서는",
      "vi": "đối với",
      "id": "from standpoint"
    }
  },
  {
    "id": "G0229",
    "p": "〜にしてみれば",
    "m": {
      "en": "from standpoint",
      "zh-TW": "對...來說",
      "zh-CN": "对...来说",
      "ko": "~입장에서 보면",
      "vi": "đối với",
      "id": "from standpoint"
    }
  },
  {
    "id": "G0230",
    "p": "〜を経て",
    "m": {
      "en": "through/via",
      "zh-TW": "經過",
      "zh-CN": "经过",
      "ko": "~을 거쳐",
      "vi": "qua",
      "id": "through/via"
    }
  },
  {
    "id": "G0231",
    "p": "〜に至るまで",
    "m": {
      "en": "up until",
      "zh-TW": "直到",
      "zh-CN": "直到",
      "ko": "~에 이르기까지",
      "vi": "cho đến",
      "id": "up until"
    }
  },
  {
    "id": "G0232",
    "p": "〜に至っては",
    "m": {
      "en": "as for",
      "zh-TW": "至於",
      "zh-CN": "至于",
      "ko": "~에 이르러서는",
      "vi": "đến",
      "id": "as for"
    }
  },
  {
    "id": "G0233",
    "p": "〜をもって",
    "m": {
      "en": "with/by means",
      "zh-TW": "用",
      "zh-CN": "用",
      "ko": "~으로써",
      "vi": "bằng",
      "id": "with/by means"
    }
  },
  {
    "id": "G0234",
    "p": "〜をもとにして",
    "m": {
      "en": "based on",
      "zh-TW": "以...為基礎",
      "zh-CN": "以...为基础",
      "ko": "~을 바탕으로",
      "vi": "dựa trên",
      "id": "based on"
    }
  },
  {
    "id": "G0235",
    "p": "〜を踏まえて",
    "m": {
      "en": "based on",
      "zh-TW": "基於",
      "zh-CN": "基于",
      "ko": "~을 토대로",
      "vi": "dựa trên",
      "id": "based on"
    }
  },
  {
    "id": "G0236",
    "p": "〜を前提に",
    "m": {
      "en": "on premise of",
      "zh-TW": "以...為前提",
      "zh-CN": "以...为前提",
      "ko": "~을 전제로",
      "vi": "với tiền đề",
      "id": "on premise of"
    }
  },
  {
    "id": "G0237",
    "p": "〜を抜きにして",
    "m": {
      "en": "without",
      "zh-TW": "沒有",
      "zh-CN": "没有",
      "ko": "~을 빼고",
      "vi": "không có",
      "id": "without"
    }
  },
  {
    "id": "G0238",
    "p": "〜をよそに",
    "m": {
      "en": "despite",
      "zh-TW": "不顧",
      "zh-CN": "不顾",
      "ko": "~을 무시하고",
      "vi": "bất chấp",
      "id": "despite"
    }
  },
  {
    "id": "G0239",
    "p": "〜を余儀なくされる",
    "m": {
      "en": "be forced to",
      "zh-TW": "被迫",
      "zh-CN": "被迫",
      "ko": "~을 어쩔 수 없이",
      "vi": "bị buộc phải",
      "id": "be forced to"
    }
  },
  {
    "id": "G0240",
    "p": "〜たところで",
    "m": {
      "en": "even if",
      "zh-TW": "即使",
      "zh-CN": "即使",
      "ko": "~해 봤자",
      "vi": "dù có",
      "id": "even if"
    }
  },
  {
    "id": "G0241",
    "p": "〜とあって",
    "m": {
      "en": "because of",
      "zh-TW": "因為",
      "zh-CN": "因为",
      "ko": "~라서",
      "vi": "vì",
      "id": "because of"
    }
  },
  {
    "id": "G0242",
    "p": "〜ともあろう",
    "m": {
      "en": "of all people",
      "zh-TW": "身為",
      "zh-CN": "身为",
      "ko": "~라는 사람이",
      "vi": "là",
      "id": "of all people"
    }
  },
  {
    "id": "G0243",
    "p": "〜てまで",
    "m": {
      "en": "to the extent",
      "zh-TW": "到...地步",
      "zh-CN": "到...地步",
      "ko": "~하면서까지",
      "vi": "đến mức",
      "id": "to the extent"
    }
  },
  {
    "id": "G0244",
    "p": "〜てやまない",
    "m": {
      "en": "never stop",
      "zh-TW": "不停地",
      "zh-CN": "不停地",
      "ko": "~해 마지않다",
      "vi": "không ngừng",
      "id": "never stop"
    }
  },
  {
    "id": "G0245",
    "p": "〜に堪えない",
    "m": {
      "en": "unbearable",
      "zh-TW": "無法忍受",
      "zh-CN": "无法忍受",
      "ko": "~에 못 견디다",
      "vi": "không chịu nổi",
      "id": "unbearable"
    }
  },
  {
    "id": "G0246",
    "p": "〜に足る",
    "m": {
      "en": "worthy of",
      "zh-TW": "值得",
      "zh-CN": "值得",
      "ko": "~할 만하다",
      "vi": "đáng",
      "id": "worthy of"
    }
  },
  {
    "id": "G0247",
    "p": "〜の至り",
    "m": {
      "en": "the height of",
      "zh-TW": "極致",
      "zh-CN": "极致",
      "ko": "~의 극치",
      "vi": "đỉnh cao",
      "id": "the height of"
    }
  },
  {
    "id": "G0248",
    "p": "〜ようではないか",
    "m": {
      "en": "let's",
      "zh-TW": "讓我們",
      "zh-CN": "让我们",
      "ko": "~하자",
      "vi": "hãy",
      "id": "let's"
    }
  },
  {
    "id": "G0249",
    "p": "〜まい",
    "m": {
      "en": "won't/probably not",
      "zh-TW": "不會",
      "zh-CN": "不会",
      "ko": "~하지 않겠다",
      "vi": "sẽ không",
      "id": "won't/probably not"
    }
  },
  {
    "id": "G0250",
    "p": "〜まいか",
    "m": {
      "en": "won't you",
      "zh-TW": "不...嗎",
      "zh-CN": "不...吗",
      "ko": "~하지 않을까",
      "vi": "không...sao",
      "id": "won't you"
    }
  },
  {
    "id": "G0251",
    "p": "〜ないものか",
    "m": {
      "en": "isn't there",
      "zh-TW": "難道不能",
      "zh-CN": "难道不能",
      "ko": "~할 수 없을까",
      "vi": "không thể sao",
      "id": "isn't there"
    }
  },
  {
    "id": "G0252",
    "p": "〜ないものでもない",
    "m": {
      "en": "not impossible",
      "zh-TW": "並非不可能",
      "zh-CN": "并非不可能",
      "ko": "~하지 않는 것도 아니다",
      "vi": "không phải không",
      "id": "not impossible"
    }
  },
  {
    "id": "G0253",
    "p": "〜ものがある",
    "m": {
      "en": "there is",
      "zh-TW": "有...之處",
      "zh-CN": "有...之处",
      "ko": "~한 점이 있다",
      "vi": "có",
      "id": "there is"
    }
  },
  {
    "id": "G0254",
    "p": "〜ものを",
    "m": {
      "en": "even though",
      "zh-TW": "明明",
      "zh-CN": "明明",
      "ko": "~것을",
      "vi": "mà",
      "id": "even though"
    }
  },
  {
    "id": "G0255",
    "p": "〜こととて",
    "m": {
      "en": "because",
      "zh-TW": "因為",
      "zh-CN": "因为",
      "ko": "~한 일이라",
      "vi": "vì",
      "id": "because"
    }
  },
  {
    "id": "G0256",
    "p": "〜ことなく",
    "m": {
      "en": "without",
      "zh-TW": "沒有",
      "zh-CN": "没有",
      "ko": "~하는 일 없이",
      "vi": "không",
      "id": "without"
    }
  },
  {
    "id": "G0257",
    "p": "〜ことなしに",
    "m": {
      "en": "without",
      "zh-TW": "不...就",
      "zh-CN": "不...就",
      "ko": "~함이 없이",
      "vi": "không",
      "id": "without"
    }
  },
  {
    "id": "G0258",
    "p": "〜ことから",
    "m": {
      "en": "from the fact",
      "zh-TW": "從...來看",
      "zh-CN": "从...来看",
      "ko": "~한 것으로 보아",
      "vi": "từ việc",
      "id": "from the fact"
    }
  },
  {
    "id": "G0259",
    "p": "〜手前",
    "m": {
      "en": "in front of",
      "zh-TW": "在...面前",
      "zh-CN": "在...面前",
      "ko": "~한 관계로",
      "vi": "trước mặt",
      "id": "in front of"
    }
  },
  {
    "id": "G0260",
    "p": "〜たが最後",
    "m": {
      "en": "once...then",
      "zh-TW": "一旦...就",
      "zh-CN": "一旦...就",
      "ko": "~하면 그만",
      "vi": "một khi",
      "id": "once...then"
    }
  },
  {
    "id": "G0261",
    "p": "〜が早いか",
    "m": {
      "en": "as soon as",
      "zh-TW": "一...就",
      "zh-CN": "一...就",
      "ko": "~하자마자",
      "vi": "vừa...liền",
      "id": "as soon as"
    }
  },
  {
    "id": "G0262",
    "p": "〜や否や",
    "m": {
      "en": "as soon as",
      "zh-TW": "一...就",
      "zh-CN": "一...就",
      "ko": "~하자마자",
      "vi": "vừa...liền",
      "id": "as soon as"
    }
  },
  {
    "id": "G0263",
    "p": "〜そばから",
    "m": {
      "en": "as soon as",
      "zh-TW": "剛...就",
      "zh-CN": "刚...就",
      "ko": "~하기가 무섭게",
      "vi": "vừa...đã",
      "id": "as soon as"
    }
  },
  {
    "id": "G0264",
    "p": "〜なり",
    "m": {
      "en": "as soon as",
      "zh-TW": "一...就",
      "zh-CN": "一...就",
      "ko": "~하자마자",
      "vi": "vừa...liền",
      "id": "as soon as"
    }
  },
  {
    "id": "G0265",
    "p": "〜ずじまい",
    "m": {
      "en": "end up not",
      "zh-TW": "結果沒有",
      "zh-CN": "结果没有",
      "ko": "~하지 못한 채",
      "vi": "cuối cùng không",
      "id": "end up not"
    }
  },
  {
    "id": "G0266",
    "p": "〜ないまでも",
    "m": {
      "en": "even if not",
      "zh-TW": "即使不",
      "zh-CN": "即使不",
      "ko": "~까지는 아니더라도",
      "vi": "dù không đến mức",
      "id": "even if not"
    }
  },
  {
    "id": "G0267",
    "p": "〜ながらに",
    "m": {
      "en": "while being",
      "zh-TW": "保持著",
      "zh-CN": "保持着",
      "ko": "~한 채로",
      "vi": "trong khi",
      "id": "while being"
    }
  },
  {
    "id": "G0268",
    "p": "〜ともなく",
    "m": {
      "en": "without meaning",
      "zh-TW": "不知不覺",
      "zh-CN": "不知不觉",
      "ko": "~인지 모르게",
      "vi": "vô tình",
      "id": "without meaning"
    }
  },
  {
    "id": "G0269",
    "p": "〜とあれば",
    "m": {
      "en": "if it is",
      "zh-TW": "如果是",
      "zh-CN": "如果是",
      "ko": "~라면",
      "vi": "nếu là",
      "id": "if it is"
    }
  },
  {
    "id": "G0270",
    "p": "〜とばかりに",
    "m": {
      "en": "as if to say",
      "zh-TW": "好像在說",
      "zh-CN": "好像在说",
      "ko": "~라는 듯이",
      "vi": "như thể nói",
      "id": "as if to say"
    }
  },
  {
    "id": "G0271",
    "p": "〜と思いきや",
    "m": {
      "en": "contrary to",
      "zh-TW": "本以為",
      "zh-CN": "本以为",
      "ko": "~인가 했더니",
      "vi": "tưởng là",
      "id": "contrary to"
    }
  },
  {
    "id": "G0272",
    "p": "〜とはいえ",
    "m": {
      "en": "although",
      "zh-TW": "雖然說",
      "zh-CN": "虽然说",
      "ko": "~라고는 해도",
      "vi": "mặc dù nói là",
      "id": "although"
    }
  },
  {
    "id": "G0273",
    "p": "〜といったところだ",
    "m": {
      "en": "about",
      "zh-TW": "大約是",
      "zh-CN": "大约是",
      "ko": "~정도이다",
      "vi": "khoảng",
      "id": "about"
    }
  },
  {
    "id": "G0274",
    "p": "〜に限ったことではない",
    "m": {
      "en": "not only",
      "zh-TW": "不只是",
      "zh-CN": "不只是",
      "ko": "~에만 해당되는 것이 아니다",
      "vi": "không chỉ",
      "id": "not only"
    }
  },
  {
    "id": "G0275",
    "p": "〜始末だ",
    "m": {
      "en": "end up",
      "zh-TW": "結果",
      "zh-CN": "结果",
      "ko": "~하는 꼴이다",
      "vi": "kết cục",
      "id": "end up"
    }
  },
  {
    "id": "G0276",
    "p": "〜までだ",
    "m": {
      "en": "just",
      "zh-TW": "只是",
      "zh-CN": "只是",
      "ko": "~할 뿐이다",
      "vi": "chỉ",
      "id": "just"
    }
  },
  {
    "id": "G0277",
    "p": "〜までもない",
    "m": {
      "en": "no need",
      "zh-TW": "不必",
      "zh-CN": "不必",
      "ko": "~할 것도 없다",
      "vi": "không cần",
      "id": "no need"
    }
  },
  {
    "id": "G0278",
    "p": "〜たりとも",
    "m": {
      "en": "even",
      "zh-TW": "即使",
      "zh-CN": "即使",
      "ko": "~라도",
      "vi": "dù",
      "id": "even"
    }
  },
  {
    "id": "G0279",
    "p": "〜なりに",
    "m": {
      "en": "in one's way",
      "zh-TW": "以自己的方式",
      "zh-CN": "以自己的方式",
      "ko": "~나름대로",
      "vi": "theo cách",
      "id": "in one's way"
    }
  },
  {
    "id": "G0280",
    "p": "〜なりの",
    "m": {
      "en": "one's own",
      "zh-TW": "自己的",
      "zh-CN": "自己的",
      "ko": "~나름의",
      "vi": "của riêng",
      "id": "one's own"
    }
  },
  {
    "id": "G0281",
    "p": "〜ごとき",
    "m": {
      "en": "like",
      "zh-TW": "像...一樣",
      "zh-CN": "像...一样",
      "ko": "~따위",
      "vi": "như",
      "id": "like"
    }
  },
  {
    "id": "G0282",
    "p": "〜いかんで",
    "m": {
      "en": "depending on",
      "zh-TW": "取決於",
      "zh-CN": "取决于",
      "ko": "~여하에 따라",
      "vi": "tùy thuộc",
      "id": "depending on"
    }
  },
  {
    "id": "G0283",
    "p": "〜いかんによらず",
    "m": {
      "en": "regardless",
      "zh-TW": "不管",
      "zh-CN": "不管",
      "ko": "~여하에 관계없이",
      "vi": "bất kể",
      "id": "regardless"
    }
  },
  {
    "id": "G0284",
    "p": "〜いかんにかかわらず",
    "m": {
      "en": "regardless",
      "zh-TW": "不論",
      "zh-CN": "不论",
      "ko": "~여하와 상관없이",
      "vi": "bất kể",
      "id": "regardless"
    }
  },
  {
    "id": "G0285",
    "p": "〜限りだ",
    "m": {
      "en": "extremely",
      "zh-TW": "非常",
      "zh-CN": "非常",
      "ko": "~하기 짝이 없다",
      "vi": "vô cùng",
      "id": "extremely"
    }
  },
  {
    "id": "G0286",
    "p": "〜極まる",
    "m": {
      "en": "extremely",
      "zh-TW": "極其",
      "zh-CN": "极其",
      "ko": "~하기 짝이 없다",
      "vi": "cực kỳ",
      "id": "extremely"
    }
  },
  {
    "id": "G0287",
    "p": "〜極まりない",
    "m": {
      "en": "extremely",
      "zh-TW": "極其",
      "zh-CN": "极其",
      "ko": "~하기 이를 데 없다",
      "vi": "cực kỳ",
      "id": "extremely"
    }
  },
  {
    "id": "G0288",
    "p": "〜至極",
    "m": {
      "en": "very",
      "zh-TW": "非常",
      "zh-CN": "非常",
      "ko": "~지극히",
      "vi": "rất",
      "id": "very"
    }
  },
  {
    "id": "G0289",
    "p": "〜たるもの",
    "m": {
      "en": "as someone who",
      "zh-TW": "身為",
      "zh-CN": "身为",
      "ko": "~라는 자로서",
      "vi": "với tư cách",
      "id": "as someone who"
    }
  },
  {
    "id": "G0290",
    "p": "〜にあって",
    "m": {
      "en": "being in",
      "zh-TW": "身處",
      "zh-CN": "身处",
      "ko": "~에 있어",
      "vi": "trong",
      "id": "being in"
    }
  },
  {
    "id": "G0291",
    "p": "〜にして",
    "m": {
      "en": "at/being",
      "zh-TW": "才",
      "zh-CN": "才",
      "ko": "~에서야",
      "vi": "mới",
      "id": "at/being"
    }
  },
  {
    "id": "G0292",
    "p": "〜に即して",
    "m": {
      "en": "in accordance",
      "zh-TW": "根據",
      "zh-CN": "根据",
      "ko": "~에 입각하여",
      "vi": "theo",
      "id": "in accordance"
    }
  },
  {
    "id": "G0293",
    "p": "〜かたがた",
    "m": {
      "en": "while doing",
      "zh-TW": "順便",
      "zh-CN": "顺便",
      "ko": "~겸",
      "vi": "nhân tiện",
      "id": "while doing"
    }
  },
  {
    "id": "G0294",
    "p": "〜かたわら",
    "m": {
      "en": "while doing",
      "zh-TW": "一邊...一邊",
      "zh-CN": "一边...一边",
      "ko": "~하는 한편",
      "vi": "bên cạnh",
      "id": "while doing"
    }
  },
  {
    "id": "G0295",
    "p": "〜がてら",
    "m": {
      "en": "while doing",
      "zh-TW": "順便",
      "zh-CN": "顺便",
      "ko": "~겸",
      "vi": "nhân tiện",
      "id": "while doing"
    }
  },
  {
    "id": "G0296",
    "p": "〜をものともせず",
    "m": {
      "en": "despite",
      "zh-TW": "不顧",
      "zh-CN": "不顾",
      "ko": "~을 아랑곳하지 않고",
      "vi": "bất chấp",
      "id": "despite"
    }
  },
  {
    "id": "G0297",
    "p": "〜を禁じ得ない",
    "m": {
      "en": "can't help",
      "zh-TW": "不禁",
      "zh-CN": "不禁",
      "ko": "~을 금할 수 없다",
      "vi": "không thể không",
      "id": "can't help"
    }
  },
  {
    "id": "G0298",
    "p": "〜んがため",
    "m": {
      "en": "in order to",
      "zh-TW": "為了",
      "zh-CN": "为了",
      "ko": "~기 위하여",
      "vi": "để",
      "id": "in order to"
    }
  },
  {
    "id": "G0299",
    "p": "〜べく",
    "m": {
      "en": "in order to",
      "zh-TW": "為了",
      "zh-CN": "为了",
      "ko": "~하고자",
      "vi": "để",
      "id": "in order to"
    }
  },
  {
    "id": "G0300",
    "p": "〜べからず",
    "m": {
      "en": "must not",
      "zh-TW": "不可",
      "zh-CN": "不可",
      "ko": "~해서는 안 된다",
      "vi": "không được",
      "id": "must not"
    }
  },
  {
    "id": "G0301",
    "p": "〜べからざる",
    "m": {
      "en": "must not",
      "zh-TW": "不可",
      "zh-CN": "不可",
      "ko": "~해서는 안 되는",
      "vi": "không được",
      "id": "must not"
    }
  },
  {
    "id": "G0302",
    "p": "〜以上は",
    "m": {
      "en": "now that",
      "zh-TW": "既然",
      "zh-CN": "既然",
      "ko": "~이상",
      "vi": "đã...thì",
      "id": "now that"
    }
  },
  {
    "id": "G0303",
    "p": "〜限りは",
    "m": {
      "en": "as long as",
      "zh-TW": "只要",
      "zh-CN": "只要",
      "ko": "~하는 한",
      "vi": "miễn là",
      "id": "as long as"
    }
  },
  {
    "id": "G0304",
    "p": "〜げ",
    "m": {
      "en": "seeming",
      "zh-TW": "好像",
      "zh-CN": "好像",
      "ko": "~스러운",
      "vi": "có vẻ",
      "id": "seeming"
    }
  },
  {
    "id": "G0305",
    "p": "〜めく",
    "m": {
      "en": "seem like",
      "zh-TW": "看似",
      "zh-CN": "看似",
      "ko": "~스럽다",
      "vi": "giống như",
      "id": "seem like"
    }
  },
  {
    "id": "G0306",
    "p": "〜ぶる",
    "m": {
      "en": "pretend",
      "zh-TW": "裝作",
      "zh-CN": "装作",
      "ko": "~인 척하다",
      "vi": "giả vờ",
      "id": "pretend"
    }
  },
  {
    "id": "G0307",
    "p": "〜ながら（も）",
    "m": {
      "en": "although",
      "zh-TW": "雖然",
      "zh-CN": "虽然",
      "ko": "~하면서도",
      "vi": "dù",
      "id": "although"
    }
  },
  {
    "id": "G0308",
    "p": "〜つつ（も）",
    "m": {
      "en": "while/although",
      "zh-TW": "一邊...一邊",
      "zh-CN": "一边...一边",
      "ko": "~하면서도",
      "vi": "dù",
      "id": "while/although"
    }
  },
  {
    "id": "G0309",
    "p": "〜ばこそ",
    "m": {
      "en": "precisely because",
      "zh-TW": "正因為",
      "zh-CN": "正因为",
      "ko": "~이기에",
      "vi": "chính vì",
      "id": "precisely because"
    }
  },
  {
    "id": "G0310",
    "p": "〜とあっては",
    "m": {
      "en": "since/given",
      "zh-TW": "既然",
      "zh-CN": "既然",
      "ko": "~라면",
      "vi": "nếu đã",
      "id": "since/given"
    }
  },
  {
    "id": "G0311",
    "p": "〜に比べ",
    "m": {
      "en": "compared to",
      "zh-TW": "與...相比",
      "zh-CN": "与...相比",
      "ko": "~에 비해",
      "vi": "so với",
      "id": "compared to"
    }
  },
  {
    "id": "G0312",
    "p": "〜に比して",
    "m": {
      "en": "compared to",
      "zh-TW": "與...相比",
      "zh-CN": "与...相比",
      "ko": "~에 비해",
      "vi": "so với",
      "id": "compared to"
    }
  },
  {
    "id": "G0313",
    "p": "〜ところを見ると",
    "m": {
      "en": "judging from",
      "zh-TW": "從...來看",
      "zh-CN": "从...来看",
      "ko": "~하는 것을 보니",
      "vi": "nhìn từ",
      "id": "judging from"
    }
  },
  {
    "id": "G0314",
    "p": "〜ところから",
    "m": {
      "en": "from the fact",
      "zh-TW": "從...來看",
      "zh-CN": "从...来看",
      "ko": "~한 데서",
      "vi": "từ",
      "id": "from the fact"
    }
  },
  {
    "id": "G0315",
    "p": "〜こそあれ",
    "m": {
      "en": "although",
      "zh-TW": "雖然有",
      "zh-CN": "虽然有",
      "ko": "~은 있어도",
      "vi": "tuy có",
      "id": "although"
    }
  },
  {
    "id": "G0316",
    "p": "〜と相まって",
    "m": {
      "en": "combined with",
      "zh-TW": "加上",
      "zh-CN": "加上",
      "ko": "~와 어우러져",
      "vi": "kết hợp với",
      "id": "combined with"
    }
  },
  {
    "id": "G0317",
    "p": "〜とあいまって",
    "m": {
      "en": "combined with",
      "zh-TW": "加上",
      "zh-CN": "加上",
      "ko": "~와 더불어",
      "vi": "cùng với",
      "id": "combined with"
    }
  },
  {
    "id": "G0318",
    "p": "〜に堪える",
    "m": {
      "en": "can stand",
      "zh-TW": "受得了",
      "zh-CN": "受得了",
      "ko": "~에 견딜 수 있다",
      "vi": "chịu được",
      "id": "can stand"
    }
  },
  {
    "id": "G0319",
    "p": "〜に耐える",
    "m": {
      "en": "can endure",
      "zh-TW": "能忍受",
      "zh-CN": "能忍受",
      "ko": "~에 견딜 수 있다",
      "vi": "chịu đựng được",
      "id": "can endure"
    }
  },
  {
    "id": "G0320",
    "p": "〜に値する",
    "m": {
      "en": "worth",
      "zh-TW": "值得",
      "zh-CN": "值得",
      "ko": "~할 가치가 있다",
      "vi": "đáng",
      "id": "worth"
    }
  },
  {
    "id": "G0321",
    "p": "〜ゆえ（に）",
    "m": {
      "en": "because of",
      "zh-TW": "因為",
      "zh-CN": "因为",
      "ko": "~때문에",
      "vi": "vì",
      "id": "because of"
    }
  },
  {
    "id": "G0322",
    "p": "〜ゆえの",
    "m": {
      "en": "due to",
      "zh-TW": "因為",
      "zh-CN": "因为",
      "ko": "~때문의",
      "vi": "do",
      "id": "due to"
    }
  },
  {
    "id": "G0323",
    "p": "〜あっての",
    "m": {
      "en": "thanks to",
      "zh-TW": "有...才有",
      "zh-CN": "有...才有",
      "ko": "~이 있어서의",
      "vi": "nhờ có",
      "id": "thanks to"
    }
  },
  {
    "id": "G0324",
    "p": "〜ては",
    "m": {
      "en": "if/whenever",
      "zh-TW": "要是",
      "zh-CN": "要是",
      "ko": "~하면",
      "vi": "nếu",
      "id": "if/whenever"
    }
  },
  {
    "id": "G0325",
    "p": "〜てば",
    "m": {
      "en": "if",
      "zh-TW": "如果",
      "zh-CN": "如果",
      "ko": "~하면",
      "vi": "nếu",
      "id": "if"
    }
  },
  {
    "id": "G0326",
    "p": "〜ところを",
    "m": {
      "en": "despite",
      "zh-TW": "正當...時",
      "zh-CN": "正当...时",
      "ko": "~하는 것을",
      "vi": "lúc",
      "id": "despite"
    }
  },
  {
    "id": "G0327",
    "p": "〜たところ",
    "m": {
      "en": "when tried",
      "zh-TW": "結果",
      "zh-CN": "结果",
      "ko": "~해 보니",
      "vi": "khi thử",
      "id": "when tried"
    }
  },
  {
    "id": "G0328",
    "p": "〜たとこで",
    "m": {
      "en": "even if",
      "zh-TW": "即使",
      "zh-CN": "即使",
      "ko": "~해 봤자",
      "vi": "dù có",
      "id": "even if"
    }
  },
  {
    "id": "G0329",
    "p": "〜てみせる",
    "m": {
      "en": "will show",
      "zh-TW": "給你看",
      "zh-CN": "给你看",
      "ko": "~해 보이다",
      "vi": "sẽ làm cho xem",
      "id": "will show"
    }
  },
  {
    "id": "G0330",
    "p": "〜てやる",
    "m": {
      "en": "do for",
      "zh-TW": "為...做",
      "zh-CN": "为...做",
      "ko": "~해 주다",
      "vi": "làm cho",
      "id": "do for"
    }
  },
  {
    "id": "G0331",
    "p": "〜てくれる",
    "m": {
      "en": "do for me",
      "zh-TW": "為我做",
      "zh-CN": "为我做",
      "ko": "~해 주다",
      "vi": "làm cho tôi",
      "id": "do for me"
    }
  },
  {
    "id": "G0332",
    "p": "〜てもらう",
    "m": {
      "en": "have done",
      "zh-TW": "請",
      "zh-CN": "请",
      "ko": "~해 받다",
      "vi": "được",
      "id": "have done"
    }
  },
  {
    "id": "G0333",
    "p": "〜ていただく",
    "m": {
      "en": "have done (polite)",
      "zh-TW": "請",
      "zh-CN": "请",
      "ko": "~해 주시다",
      "vi": "được",
      "id": "have done (polite)"
    }
  },
  {
    "id": "G0334",
    "p": "〜てあげる",
    "m": {
      "en": "do for",
      "zh-TW": "給",
      "zh-CN": "给",
      "ko": "~해 주다",
      "vi": "làm cho",
      "id": "do for"
    }
  },
  {
    "id": "G0335",
    "p": "〜てさしあげる",
    "m": {
      "en": "do for (humble)",
      "zh-TW": "給",
      "zh-CN": "给",
      "ko": "~해 드리다",
      "vi": "làm cho",
      "id": "do for (humble)"
    }
  },
  {
    "id": "G0336",
    "p": "〜ておく",
    "m": {
      "en": "do in advance",
      "zh-TW": "先",
      "zh-CN": "先",
      "ko": "~해 두다",
      "vi": "làm trước",
      "id": "do in advance"
    }
  },
  {
    "id": "G0337",
    "p": "〜てしまう",
    "m": {
      "en": "end up doing",
      "zh-TW": "完成/不小心",
      "zh-CN": "完成/不小心",
      "ko": "~해 버리다",
      "vi": "xong/lỡ",
      "id": "end up doing"
    }
  },
  {
    "id": "G0338",
    "p": "〜ている",
    "m": {
      "en": "be -ing/state",
      "zh-TW": "正在/著",
      "zh-CN": "正在/着",
      "ko": "~하고 있다",
      "vi": "đang",
      "id": "be -ing/state"
    }
  },
  {
    "id": "G0339",
    "p": "〜てある",
    "m": {
      "en": "has been done",
      "zh-TW": "已經...好了",
      "zh-CN": "已经...好了",
      "ko": "~해 있다",
      "vi": "đã được",
      "id": "has been done"
    }
  },
  {
    "id": "G0340",
    "p": "〜ていく",
    "m": {
      "en": "go on -ing",
      "zh-TW": "繼續",
      "zh-CN": "继续",
      "ko": "~해 가다",
      "vi": "tiếp tục",
      "id": "go on -ing"
    }
  },
  {
    "id": "G0341",
    "p": "〜てくる",
    "m": {
      "en": "come to -ing",
      "zh-TW": "開始",
      "zh-CN": "开始",
      "ko": "~해 오다",
      "vi": "dần",
      "id": "come to -ing"
    }
  },
  {
    "id": "G0342",
    "p": "〜ないでいる",
    "m": {
      "en": "not doing",
      "zh-TW": "沒有在",
      "zh-CN": "没有在",
      "ko": "~하지 않고 있다",
      "vi": "không",
      "id": "not doing"
    }
  },
  {
    "id": "G0343",
    "p": "〜ずにいる",
    "m": {
      "en": "not doing",
      "zh-TW": "沒有在",
      "zh-CN": "没有在",
      "ko": "~하지 않고 있다",
      "vi": "không",
      "id": "not doing"
    }
  },
  {
    "id": "G0344",
    "p": "〜かけている",
    "m": {
      "en": "half-done",
      "zh-TW": "做到一半",
      "zh-CN": "做到一半",
      "ko": "~하다 말다",
      "vi": "dở dang",
      "id": "half-done"
    }
  },
  {
    "id": "G0345",
    "p": "〜たて",
    "m": {
      "en": "just done",
      "zh-TW": "剛剛",
      "zh-CN": "刚刚",
      "ko": "갓 ~한",
      "vi": "vừa mới",
      "id": "just done"
    }
  },
  {
    "id": "G0346",
    "p": "〜はじめる",
    "m": {
      "en": "begin to",
      "zh-TW": "開始",
      "zh-CN": "开始",
      "ko": "~하기 시작하다",
      "vi": "bắt đầu",
      "id": "begin to"
    }
  },
  {
    "id": "G0347",
    "p": "〜だす",
    "m": {
      "en": "start to",
      "zh-TW": "開始",
      "zh-CN": "开始",
      "ko": "~하기 시작하다",
      "vi": "bắt đầu",
      "id": "start to"
    }
  },
  {
    "id": "G0348",
    "p": "〜おわる",
    "m": {
      "en": "finish",
      "zh-TW": "結束",
      "zh-CN": "结束",
      "ko": "~하고 끝나다",
      "vi": "xong",
      "id": "finish"
    }
  },
  {
    "id": "G0349",
    "p": "〜つづける",
    "m": {
      "en": "continue",
      "zh-TW": "繼續",
      "zh-CN": "继续",
      "ko": "~하고 계속하다",
      "vi": "tiếp tục",
      "id": "continue"
    }
  },
  {
    "id": "G0350",
    "p": "〜通す",
    "m": {
      "en": "do throughout",
      "zh-TW": "貫徹",
      "zh-CN": "贯彻",
      "ko": "끝까지 ~하다",
      "vi": "xuyên suốt",
      "id": "do throughout"
    }
  },
  {
    "id": "G0351",
    "p": "〜なおす",
    "m": {
      "en": "redo",
      "zh-TW": "重新",
      "zh-CN": "重新",
      "ko": "다시 ~하다",
      "vi": "làm lại",
      "id": "redo"
    }
  },
  {
    "id": "G0352",
    "p": "〜かえす",
    "m": {
      "en": "do back",
      "zh-TW": "回",
      "zh-CN": "回",
      "ko": "~되돌리다",
      "vi": "trả lại",
      "id": "do back"
    }
  },
  {
    "id": "G0353",
    "p": "〜あう",
    "m": {
      "en": "do together",
      "zh-TW": "互相",
      "zh-CN": "互相",
      "ko": "서로 ~하다",
      "vi": "cùng nhau",
      "id": "do together"
    }
  },
  {
    "id": "G0354",
    "p": "〜あわせる",
    "m": {
      "en": "do together",
      "zh-TW": "一起",
      "zh-CN": "一起",
      "ko": "~맞추다",
      "vi": "ghép lại",
      "id": "do together"
    }
  },
  {
    "id": "G0355",
    "p": "〜すぎる",
    "m": {
      "en": "too much",
      "zh-TW": "過於",
      "zh-CN": "过于",
      "ko": "너무 ~하다",
      "vi": "quá",
      "id": "too much"
    }
  },
  {
    "id": "G0356",
    "p": "〜がる",
    "m": {
      "en": "show signs",
      "zh-TW": "想要",
      "zh-CN": "想要",
      "ko": "~하려 하다",
      "vi": "tỏ ra",
      "id": "show signs"
    }
  },
  {
    "id": "G0357",
    "p": "〜かた",
    "m": {
      "en": "way of",
      "zh-TW": "方法",
      "zh-CN": "方法",
      "ko": "~하는 법",
      "vi": "cách",
      "id": "way of"
    }
  },
  {
    "id": "G0358",
    "p": "〜よう",
    "m": {
      "en": "way",
      "zh-TW": "方法",
      "zh-CN": "方法",
      "ko": "~하는 방법",
      "vi": "cách",
      "id": "way"
    }
  },
  {
    "id": "G0359",
    "p": "〜づらい",
    "m": {
      "en": "hard to",
      "zh-TW": "難以",
      "zh-CN": "难以",
      "ko": "~하기 어렵다",
      "vi": "khó",
      "id": "hard to"
    }
  },
  {
    "id": "G0360",
    "p": "〜にくい",
    "m": {
      "en": "hard to",
      "zh-TW": "難以",
      "zh-CN": "难以",
      "ko": "~하기 어렵다",
      "vi": "khó",
      "id": "hard to"
    }
  },
  {
    "id": "G0361",
    "p": "〜やすい",
    "m": {
      "en": "easy to",
      "zh-TW": "容易",
      "zh-CN": "容易",
      "ko": "~하기 쉽다",
      "vi": "dễ",
      "id": "easy to"
    }
  },
  {
    "id": "G0362",
    "p": "〜らしい",
    "m": {
      "en": "seems like",
      "zh-TW": "好像",
      "zh-CN": "好像",
      "ko": "~인 것 같다",
      "vi": "có vẻ như",
      "id": "seems like"
    }
  },
  {
    "id": "G0363",
    "p": "〜そうだ（様態）",
    "m": {
      "en": "looks like",
      "zh-TW": "看起來",
      "zh-CN": "看起来",
      "ko": "~할 것 같다",
      "vi": "trông như",
      "id": "looks like"
    }
  },
  {
    "id": "G0364",
    "p": "〜そうだ（伝聞）",
    "m": {
      "en": "I heard",
      "zh-TW": "據說",
      "zh-CN": "据说",
      "ko": "~라고 한다",
      "vi": "nghe nói",
      "id": "I heard"
    }
  },
  {
    "id": "G0365",
    "p": "〜みたいだ",
    "m": {
      "en": "looks like",
      "zh-TW": "好像",
      "zh-CN": "好像",
      "ko": "~같다",
      "vi": "như",
      "id": "looks like"
    }
  },
  {
    "id": "G0366",
    "p": "〜ようだ",
    "m": {
      "en": "seems",
      "zh-TW": "好像",
      "zh-CN": "好像",
      "ko": "~것 같다",
      "vi": "như",
      "id": "seems"
    }
  },
  {
    "id": "G0367",
    "p": "〜ことができる",
    "m": {
      "en": "can do",
      "zh-TW": "能夠",
      "zh-CN": "能够",
      "ko": "~할 수 있다",
      "vi": "có thể",
      "id": "can do"
    }
  },
  {
    "id": "G0368",
    "p": "〜ことにしている",
    "m": {
      "en": "make a habit",
      "zh-TW": "習慣",
      "zh-CN": "习惯",
      "ko": "~하기로 하고 있다",
      "vi": "thường",
      "id": "make a habit"
    }
  },
  {
    "id": "G0369",
    "p": "〜なければならない",
    "m": {
      "en": "must",
      "zh-TW": "必須",
      "zh-CN": "必须",
      "ko": "~해야 한다",
      "vi": "phải",
      "id": "must"
    }
  },
  {
    "id": "G0370",
    "p": "〜なくてもいい",
    "m": {
      "en": "don't have to",
      "zh-TW": "不必",
      "zh-CN": "不必",
      "ko": "~하지 않아도 된다",
      "vi": "không cần",
      "id": "don't have to"
    }
  },
  {
    "id": "G0371",
    "p": "〜なくてはいけない",
    "m": {
      "en": "must",
      "zh-TW": "必須",
      "zh-CN": "必须",
      "ko": "~해야 한다",
      "vi": "phải",
      "id": "must"
    }
  },
  {
    "id": "G0372",
    "p": "〜てはいけない",
    "m": {
      "en": "must not",
      "zh-TW": "不可以",
      "zh-CN": "不可以",
      "ko": "~해서는 안 된다",
      "vi": "không được",
      "id": "must not"
    }
  },
  {
    "id": "G0373",
    "p": "〜てもいい",
    "m": {
      "en": "may",
      "zh-TW": "可以",
      "zh-CN": "可以",
      "ko": "~해도 된다",
      "vi": "được phép",
      "id": "may"
    }
  },
  {
    "id": "G0374",
    "p": "〜ないといけない",
    "m": {
      "en": "must",
      "zh-TW": "必須",
      "zh-CN": "必须",
      "ko": "~하지 않으면 안 된다",
      "vi": "phải",
      "id": "must"
    }
  },
  {
    "id": "G0375",
    "p": "〜なきゃ",
    "m": {
      "en": "must (casual)",
      "zh-TW": "必須",
      "zh-CN": "必须",
      "ko": "~해야 해",
      "vi": "phải",
      "id": "must (casual)"
    }
  },
  {
    "id": "G0376",
    "p": "〜なくちゃ",
    "m": {
      "en": "must (casual)",
      "zh-TW": "必須",
      "zh-CN": "必须",
      "ko": "~해야 해",
      "vi": "phải",
      "id": "must (casual)"
    }
  },
  {
    "id": "G0377",
    "p": "〜ちゃいけない",
    "m": {
      "en": "must not (casual)",
      "zh-TW": "不可以",
      "zh-CN": "不可以",
      "ko": "~하면 안 돼",
      "vi": "không được",
      "id": "must not (casual)"
    }
  },
  {
    "id": "G0378",
    "p": "〜っちゃ",
    "m": {
      "en": "if (casual)",
      "zh-TW": "如果",
      "zh-CN": "如果",
      "ko": "~하면",
      "vi": "nếu",
      "id": "if (casual)"
    }
  },
  {
    "id": "G0379",
    "p": "〜だっけ",
    "m": {
      "en": "was it?",
      "zh-TW": "是...嗎？",
      "zh-CN": "是...吗？",
      "ko": "~였던가",
      "vi": "là...nhỉ?",
      "id": "was it?"
    }
  },
  {
    "id": "G0380",
    "p": "〜かしら",
    "m": {
      "en": "I wonder",
      "zh-TW": "不知道",
      "zh-CN": "不知道",
      "ko": "~일까",
      "vi": "không biết",
      "id": "I wonder"
    }
  },
  {
    "id": "G0381",
    "p": "〜のかな",
    "m": {
      "en": "I wonder",
      "zh-TW": "不知道",
      "zh-CN": "不知道",
      "ko": "~일까",
      "vi": "không biết",
      "id": "I wonder"
    }
  },
  {
    "id": "G0382",
    "p": "〜もの",
    "m": {
      "en": "because",
      "zh-TW": "因為",
      "zh-CN": "因为",
      "ko": "~거든",
      "vi": "vì",
      "id": "because"
    }
  },
  {
    "id": "G0383",
    "p": "〜んだもの",
    "m": {
      "en": "because",
      "zh-TW": "因為",
      "zh-CN": "因为",
      "ko": "~거든요",
      "vi": "vì mà",
      "id": "because"
    }
  },
  {
    "id": "G0384",
    "p": "〜じゃない",
    "m": {
      "en": "isn't it?",
      "zh-TW": "不是嗎",
      "zh-CN": "不是吗",
      "ko": "~잖아",
      "vi": "không phải sao",
      "id": "isn't it?"
    }
  },
  {
    "id": "G0385",
    "p": "〜ではないか",
    "m": {
      "en": "isn't it?",
      "zh-TW": "不是嗎",
      "zh-CN": "不是吗",
      "ko": "~지 않은가",
      "vi": "không phải sao",
      "id": "isn't it?"
    }
  },
  {
    "id": "G0386",
    "p": "〜のではないか",
    "m": {
      "en": "isn't it?",
      "zh-TW": "不是嗎",
      "zh-CN": "不是吗",
      "ko": "~이 아닌가",
      "vi": "không phải sao",
      "id": "isn't it?"
    }
  },
  {
    "id": "G0387",
    "p": "〜ないか",
    "m": {
      "en": "won't you?",
      "zh-TW": "要不要",
      "zh-CN": "要不要",
      "ko": "~하지 않을래",
      "vi": "có muốn không",
      "id": "won't you?"
    }
  },
  {
    "id": "G0388",
    "p": "〜ましょうか",
    "m": {
      "en": "shall I?",
      "zh-TW": "要不要",
      "zh-CN": "要不要",
      "ko": "~할까요",
      "vi": "để tôi",
      "id": "shall I?"
    }
  },
  {
    "id": "G0389",
    "p": "〜ましょう",
    "m": {
      "en": "let's",
      "zh-TW": "吧",
      "zh-CN": "吧",
      "ko": "~합시다",
      "vi": "hãy",
      "id": "let's"
    }
  },
  {
    "id": "G0390",
    "p": "〜ようか",
    "m": {
      "en": "shall I?",
      "zh-TW": "要不要",
      "zh-CN": "要不要",
      "ko": "~할까",
      "vi": "để tôi",
      "id": "shall I?"
    }
  },
  {
    "id": "G0391",
    "p": "〜なさい",
    "m": {
      "en": "do (command)",
      "zh-TW": "請",
      "zh-CN": "请",
      "ko": "~하세요",
      "vi": "hãy",
      "id": "do (command)"
    }
  },
  {
    "id": "G0392",
    "p": "〜て",
    "m": {
      "en": "please do",
      "zh-TW": "請",
      "zh-CN": "请",
      "ko": "~해",
      "vi": "làm đi",
      "id": "please do"
    }
  },
  {
    "id": "G0393",
    "p": "〜な（禁止）",
    "m": {
      "en": "don't",
      "zh-TW": "不要",
      "zh-CN": "不要",
      "ko": "~하지 마",
      "vi": "đừng",
      "id": "don't"
    }
  },
  {
    "id": "G0394",
    "p": "〜ないで",
    "m": {
      "en": "don't",
      "zh-TW": "不要",
      "zh-CN": "不要",
      "ko": "~하지 마",
      "vi": "đừng",
      "id": "don't"
    }
  },
  {
    "id": "G0395",
    "p": "〜のに",
    "m": {
      "en": "although",
      "zh-TW": "雖然",
      "zh-CN": "虽然",
      "ko": "~인데",
      "vi": "mặc dù",
      "id": "although"
    }
  },
  {
    "id": "G0396",
    "p": "〜のだ",
    "m": {
      "en": "it is that",
      "zh-TW": "是",
      "zh-CN": "是",
      "ko": "~것이다",
      "vi": "là",
      "id": "it is that"
    }
  },
  {
    "id": "G0397",
    "p": "〜んだ",
    "m": {
      "en": "it is that",
      "zh-TW": "是",
      "zh-CN": "是",
      "ko": "~거야",
      "vi": "là",
      "id": "it is that"
    }
  },
  {
    "id": "G0398",
    "p": "〜つもりだ",
    "m": {
      "en": "intend to",
      "zh-TW": "打算",
      "zh-CN": "打算",
      "ko": "~할 생각이다",
      "vi": "định",
      "id": "intend to"
    }
  },
  {
    "id": "G0399",
    "p": "〜予定だ",
    "m": {
      "en": "plan to",
      "zh-TW": "預定",
      "zh-CN": "预定",
      "ko": "~할 예정이다",
      "vi": "dự định",
      "id": "plan to"
    }
  },
  {
    "id": "G0400",
    "p": "〜べきだ",
    "m": {
      "en": "should",
      "zh-TW": "應該",
      "zh-CN": "应该",
      "ko": "~해야 한다",
      "vi": "nên",
      "id": "should"
    }
  },
  {
    "id": "G0401",
    "p": "〜ないほうがいい",
    "m": {
      "en": "better not",
      "zh-TW": "最好不要",
      "zh-CN": "最好不要",
      "ko": "~하지 않는 게 좋다",
      "vi": "không nên",
      "id": "better not"
    }
  },
  {
    "id": "G0402",
    "p": "〜といい",
    "m": {
      "en": "hope/wish",
      "zh-TW": "希望",
      "zh-CN": "希望",
      "ko": "~면 좋겠다",
      "vi": "hy vọng",
      "id": "hope/wish"
    }
  },
  {
    "id": "G0403",
    "p": "〜ばいい",
    "m": {
      "en": "should just",
      "zh-TW": "只要...就好",
      "zh-CN": "只要...就好",
      "ko": "~하면 된다",
      "vi": "chỉ cần",
      "id": "should just"
    }
  },
  {
    "id": "G0404",
    "p": "〜たらいい",
    "m": {
      "en": "should just",
      "zh-TW": "只要...就好",
      "zh-CN": "只要...就好",
      "ko": "~하면 된다",
      "vi": "chỉ cần",
      "id": "should just"
    }
  },
  {
    "id": "G0405",
    "p": "〜ていただきたい",
    "m": {
      "en": "want someone to (polite)",
      "zh-TW": "希望",
      "zh-CN": "希望",
      "ko": "~해 주시기 바랍니다",
      "vi": "mong",
      "id": "want someone to (polite)"
    }
  },
  {
    "id": "G0406",
    "p": "〜させてほしい",
    "m": {
      "en": "want to be allowed",
      "zh-TW": "請讓我",
      "zh-CN": "请让我",
      "ko": "~하게 해 달라",
      "vi": "cho tôi",
      "id": "want to be allowed"
    }
  },
  {
    "id": "G0407",
    "p": "〜させてください",
    "m": {
      "en": "please let me",
      "zh-TW": "請讓我",
      "zh-CN": "请让我",
      "ko": "~하게 해 주세요",
      "vi": "xin cho tôi",
      "id": "please let me"
    }
  },
  {
    "id": "G0408",
    "p": "〜させていただく",
    "m": {
      "en": "let me (humble)",
      "zh-TW": "讓我",
      "zh-CN": "让我",
      "ko": "~하겠습니다",
      "vi": "xin phép được",
      "id": "let me (humble)"
    }
  },
  {
    "id": "G0409",
    "p": "〜させる",
    "m": {
      "en": "make/let do",
      "zh-TW": "讓",
      "zh-CN": "让",
      "ko": "~시키다",
      "vi": "bắt/cho",
      "id": "make/let do"
    }
  },
  {
    "id": "G0410",
    "p": "〜される",
    "m": {
      "en": "is done (passive)",
      "zh-TW": "被",
      "zh-CN": "被",
      "ko": "~되다",
      "vi": "bị/được",
      "id": "is done (passive)"
    }
  },
  {
    "id": "G0411",
    "p": "〜られる",
    "m": {
      "en": "is done (passive)",
      "zh-TW": "被",
      "zh-CN": "被",
      "ko": "~되다",
      "vi": "bị/được",
      "id": "is done (passive)"
    }
  },
  {
    "id": "G0412",
    "p": "〜かけの",
    "m": {
      "en": "half-done",
      "zh-TW": "做到一半的",
      "zh-CN": "做到一半的",
      "ko": "~하다 만",
      "vi": "dở dang",
      "id": "half-done"
    }
  },
  {
    "id": "G0413",
    "p": "〜どおりに",
    "m": {
      "en": "according to",
      "zh-TW": "照...的樣子",
      "zh-CN": "照...的样子",
      "ko": "~대로",
      "vi": "theo",
      "id": "according to"
    }
  },
  {
    "id": "G0414",
    "p": "〜とおりに",
    "m": {
      "en": "according to",
      "zh-TW": "按照",
      "zh-CN": "按照",
      "ko": "~대로",
      "vi": "theo",
      "id": "according to"
    }
  },
  {
    "id": "G0415",
    "p": "〜ままで",
    "m": {
      "en": "as is",
      "zh-TW": "保持原樣",
      "zh-CN": "保持原样",
      "ko": "~채로",
      "vi": "như cũ",
      "id": "as is"
    }
  },
  {
    "id": "G0416",
    "p": "〜ままに",
    "m": {
      "en": "as...wants",
      "zh-TW": "隨著",
      "zh-CN": "随着",
      "ko": "~는 대로",
      "vi": "theo",
      "id": "as...wants"
    }
  },
  {
    "id": "G0417",
    "p": "〜だけで",
    "m": {
      "en": "just by",
      "zh-TW": "只要",
      "zh-CN": "只要",
      "ko": "~만으로",
      "vi": "chỉ bằng",
      "id": "just by"
    }
  },
  {
    "id": "G0418",
    "p": "〜だけの",
    "m": {
      "en": "enough to",
      "zh-TW": "足夠的",
      "zh-CN": "足够的",
      "ko": "~만큼의",
      "vi": "đủ",
      "id": "enough to"
    }
  },
  {
    "id": "G0419",
    "p": "〜しか〜ない",
    "m": {
      "en": "only",
      "zh-TW": "只有",
      "zh-CN": "只有",
      "ko": "~밖에 없다",
      "vi": "chỉ",
      "id": "only"
    }
  },
  {
    "id": "G0420",
    "p": "〜のみ",
    "m": {
      "en": "only",
      "zh-TW": "只有",
      "zh-CN": "只有",
      "ko": "~만",
      "vi": "chỉ",
      "id": "only"
    }
  },
  {
    "id": "G0421",
    "p": "〜はおろか",
    "m": {
      "en": "let alone",
      "zh-TW": "更不用說",
      "zh-CN": "更不用说",
      "ko": "~은커녕",
      "vi": "chứ đừng nói",
      "id": "let alone"
    }
  },
  {
    "id": "G0422",
    "p": "〜もさることながら",
    "m": {
      "en": "not to mention",
      "zh-TW": "不用說",
      "zh-CN": "不用说",
      "ko": "~도 그렇거니와",
      "vi": "không kể",
      "id": "not to mention"
    }
  },
  {
    "id": "G0423",
    "p": "〜をはじめとして",
    "m": {
      "en": "including",
      "zh-TW": "包括",
      "zh-CN": "包括",
      "ko": "~을 비롯하여",
      "vi": "bao gồm",
      "id": "including"
    }
  },
  {
    "id": "G0424",
    "p": "ために",
    "m": {
      "en": "in order to; for the purpose of",
      "zh-TW": "[in order to; for the purpose of]",
      "zh-CN": "[in order to; for the purpose of]",
      "ko": "[in order to; for the purpose of]",
      "vi": "[in order to; for the purpose of]",
      "id": "[in order to; for the purpose of]"
    }
  },
  {
    "id": "G0425",
    "p": "ように",
    "m": {
      "en": "so that; in order to",
      "zh-TW": "[so that; in order to]",
      "zh-CN": "[so that; in order to]",
      "ko": "[so that; in order to]",
      "vi": "[so that; in order to]",
      "id": "[so that; in order to]"
    }
  },
  {
    "id": "G0426",
    "p": "として",
    "m": {
      "en": "as; in the role of",
      "zh-TW": "[as; in the role of]",
      "zh-CN": "[as; in the role of]",
      "ko": "[as; in the role of]",
      "vi": "[as; in the role of]",
      "id": "[as; in the role of]"
    }
  },
  {
    "id": "G0427",
    "p": "について",
    "m": {
      "en": "about; concerning",
      "zh-TW": "[about; concerning]",
      "zh-CN": "[about; concerning]",
      "ko": "[about; concerning]",
      "vi": "[about; concerning]",
      "id": "[about; concerning]"
    }
  },
  {
    "id": "G0428",
    "p": "によって",
    "m": {
      "en": "by means of; depending on",
      "zh-TW": "[by means of; depending on]",
      "zh-CN": "[by means of; depending on]",
      "ko": "[by means of; depending on]",
      "vi": "[by means of; depending on]",
      "id": "[by means of; depending on]"
    }
  },
  {
    "id": "G0429",
    "p": "に対して",
    "m": {
      "en": "toward; in contrast to",
      "zh-TW": "[toward; in contrast to]",
      "zh-CN": "[toward; in contrast to]",
      "ko": "[toward; in contrast to]",
      "vi": "[toward; in contrast to]",
      "id": "[toward; in contrast to]"
    }
  },
  {
    "id": "G0430",
    "p": "において",
    "m": {
      "en": "in; at; on",
      "zh-TW": "[in; at; on]",
      "zh-CN": "[in; at; on]",
      "ko": "[in; at; on]",
      "vi": "[in; at; on]",
      "id": "[in; at; on]"
    }
  },
  {
    "id": "G0431",
    "p": "にとって",
    "m": {
      "en": "for; to",
      "zh-TW": "[for; to]",
      "zh-CN": "[for; to]",
      "ko": "[for; to]",
      "vi": "[for; to]",
      "id": "[for; to]"
    }
  },
  {
    "id": "G0432",
    "p": "に比べて",
    "m": {
      "en": "compared to",
      "zh-TW": "[compared to]",
      "zh-CN": "[compared to]",
      "ko": "[compared to]",
      "vi": "[compared to]",
      "id": "[compared to]"
    }
  },
  {
    "id": "G0433",
    "p": "に関して",
    "m": {
      "en": "regarding; concerning",
      "zh-TW": "[regarding; concerning]",
      "zh-CN": "[regarding; concerning]",
      "ko": "[regarding; concerning]",
      "vi": "[regarding; concerning]",
      "id": "[regarding; concerning]"
    }
  },
  {
    "id": "G0434",
    "p": "に基づいて",
    "m": {
      "en": "based on",
      "zh-TW": "[based on]",
      "zh-CN": "[based on]",
      "ko": "[based on]",
      "vi": "[based on]",
      "id": "[based on]"
    }
  },
  {
    "id": "G0435",
    "p": "を通じて",
    "m": {
      "en": "through; via",
      "zh-TW": "[through; via]",
      "zh-CN": "[through; via]",
      "ko": "[through; via]",
      "vi": "[through; via]",
      "id": "[through; via]"
    }
  },
  {
    "id": "G0436",
    "p": "わけだ",
    "m": {
      "en": "that's why; no wonder",
      "zh-TW": "[that's why; no wonder]",
      "zh-CN": "[that's why; no wonder]",
      "ko": "[that's why; no wonder]",
      "vi": "[that's why; no wonder]",
      "id": "[that's why; no wonder]"
    }
  },
  {
    "id": "G0437",
    "p": "わけではない",
    "m": {
      "en": "it doesn't mean that",
      "zh-TW": "[it doesn't mean that]",
      "zh-CN": "[it doesn't mean that]",
      "ko": "[it doesn't mean that]",
      "vi": "[it doesn't mean that]",
      "id": "[it doesn't mean that]"
    }
  },
  {
    "id": "G0438",
    "p": "わけがない",
    "m": {
      "en": "there's no way that",
      "zh-TW": "[there's no way that]",
      "zh-CN": "[there's no way that]",
      "ko": "[there's no way that]",
      "vi": "[there's no way that]",
      "id": "[there's no way that]"
    }
  },
  {
    "id": "G0439",
    "p": "わけにはいかない",
    "m": {
      "en": "cannot; must not",
      "zh-TW": "[cannot; must not]",
      "zh-CN": "[cannot; must not]",
      "ko": "[cannot; must not]",
      "vi": "[cannot; must not]",
      "id": "[cannot; must not]"
    }
  },
  {
    "id": "G0440",
    "p": "ざるを得ない",
    "m": {
      "en": "have no choice but to",
      "zh-TW": "[have no choice but to]",
      "zh-CN": "[have no choice but to]",
      "ko": "[have no choice but to]",
      "vi": "[have no choice but to]",
      "id": "[have no choice but to]"
    }
  },
  {
    "id": "G0441",
    "p": "ないわけにはいかない",
    "m": {
      "en": "cannot help but",
      "zh-TW": "[cannot help but]",
      "zh-CN": "[cannot help but]",
      "ko": "[cannot help but]",
      "vi": "[cannot help but]",
      "id": "[cannot help but]"
    }
  },
  {
    "id": "G0442",
    "p": "てたまらない",
    "m": {
      "en": "unbearably; extremely",
      "zh-TW": "[unbearably; extremely]",
      "zh-CN": "[unbearably; extremely]",
      "ko": "[unbearably; extremely]",
      "vi": "[unbearably; extremely]",
      "id": "[unbearably; extremely]"
    }
  },
  {
    "id": "G0443",
    "p": "てならない",
    "m": {
      "en": "can't help but",
      "zh-TW": "[can't help but]",
      "zh-CN": "[can't help but]",
      "ko": "[can't help but]",
      "vi": "[can't help but]",
      "id": "[can't help but]"
    }
  },
  {
    "id": "G0444",
    "p": "てしょうがない",
    "m": {
      "en": "can't help; extremely",
      "zh-TW": "[can't help; extremely]",
      "zh-CN": "[can't help; extremely]",
      "ko": "[can't help; extremely]",
      "vi": "[can't help; extremely]",
      "id": "[can't help; extremely]"
    }
  },
  {
    "id": "G0445",
    "p": "おかげで",
    "m": {
      "en": "thanks to",
      "zh-TW": "[thanks to]",
      "zh-CN": "[thanks to]",
      "ko": "[thanks to]",
      "vi": "[thanks to]",
      "id": "[thanks to]"
    }
  },
  {
    "id": "G0446",
    "p": "せいで",
    "m": {
      "en": "because of; due to",
      "zh-TW": "[because of; due to]",
      "zh-CN": "[because of; due to]",
      "ko": "[because of; due to]",
      "vi": "[because of; due to]",
      "id": "[because of; due to]"
    }
  },
  {
    "id": "G0447",
    "p": "上で",
    "m": {
      "en": "after; upon",
      "zh-TW": "[after; upon]",
      "zh-CN": "[after; upon]",
      "ko": "[after; upon]",
      "vi": "[after; upon]",
      "id": "[after; upon]"
    }
  },
  {
    "id": "G0448",
    "p": "上に",
    "m": {
      "en": "in addition to",
      "zh-TW": "[in addition to]",
      "zh-CN": "[in addition to]",
      "ko": "[in addition to]",
      "vi": "[in addition to]",
      "id": "[in addition to]"
    }
  },
  {
    "id": "G0449",
    "p": "一方で",
    "m": {
      "en": "on the other hand; while",
      "zh-TW": "[on the other hand; while]",
      "zh-CN": "[on the other hand; while]",
      "ko": "[on the other hand; while]",
      "vi": "[on the other hand; while]",
      "id": "[on the other hand; while]"
    }
  },
  {
    "id": "G0450",
    "p": "反面",
    "m": {
      "en": "on the other hand; while",
      "zh-TW": "[on the other hand; while]",
      "zh-CN": "[on the other hand; while]",
      "ko": "[on the other hand; while]",
      "vi": "[on the other hand; while]",
      "id": "[on the other hand; while]"
    }
  }
];

if (typeof module !== 'undefined') module.exports = { n3Grammar };
