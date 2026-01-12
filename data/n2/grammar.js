// Fujisan.AI Data
// Count: 250

const N2_GRAMMAR = [
  {
    "id": "G0001",
    "p": "〜に関して",
    "r": "〜にかんして",
    "m": {
      "en": "regarding",
      "zh-TW": "關於",
      "zh-CN": "关于",
      "ko": "~에 관해서",
      "vi": "về",
      "id": "mengenai"
    }
  },
  {
    "id": "G0002",
    "p": "〜に関する",
    "m": {
      "en": "related to",
      "zh-TW": "關於",
      "zh-CN": "关于",
      "ko": "~에 관한",
      "vi": "liên quan đến",
      "id": "terkait"
    }
  },
  {
    "id": "G0003",
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
    "id": "G0004",
    "p": "〜における",
    "m": {
      "en": "in",
      "zh-TW": "在",
      "zh-CN": "在",
      "ko": "~에서의",
      "vi": "trong",
      "id": "dalam"
    }
  },
  {
    "id": "G0005",
    "p": "〜にとって",
    "m": {
      "en": "for",
      "zh-TW": "對於",
      "zh-CN": "对于",
      "ko": "~에게",
      "vi": "đối với",
      "id": "bagi"
    }
  },
  {
    "id": "G0006",
    "p": "〜に対して",
    "r": "〜にたいして",
    "m": {
      "en": "toward",
      "zh-TW": "對",
      "zh-CN": "对",
      "ko": "~에 대해서",
      "vi": "đối với",
      "id": "terhadap"
    }
  },
  {
    "id": "G0007",
    "p": "〜に対する",
    "m": {
      "en": "toward",
      "zh-TW": "對",
      "zh-CN": "对",
      "ko": "~에 대한",
      "vi": "đối với",
      "id": "terhadap"
    }
  },
  {
    "id": "G0008",
    "p": "〜について",
    "m": {
      "en": "about",
      "zh-TW": "關於",
      "zh-CN": "关于",
      "ko": "~에 대해서",
      "vi": "về",
      "id": "tentang"
    }
  },
  {
    "id": "G0009",
    "p": "〜にともなって",
    "r": "〜にともなって",
    "m": {
      "en": "along with",
      "zh-TW": "隨著",
      "zh-CN": "随着",
      "ko": "~에 따라",
      "vi": "theo",
      "id": "seiring"
    }
  },
  {
    "id": "G0010",
    "p": "〜に伴う",
    "m": {
      "en": "accompanying",
      "zh-TW": "伴隨",
      "zh-CN": "伴随",
      "ko": "~에 따르는",
      "vi": "đi kèm",
      "id": "menyertai"
    }
  },
  {
    "id": "G0011",
    "p": "〜につき",
    "m": {
      "en": "due to",
      "zh-TW": "因為",
      "zh-CN": "因为",
      "ko": "~때문에",
      "vi": "do",
      "id": "karena"
    }
  },
  {
    "id": "G0012",
    "p": "〜のせいで",
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
    "id": "G0013",
    "p": "〜のおかげで",
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
    "p": "〜を通じて",
    "m": {
      "en": "through",
      "zh-TW": "透過",
      "zh-CN": "通过",
      "ko": "~를 통해",
      "vi": "thông qua",
      "id": "melalui"
    }
  },
  {
    "id": "G0015",
    "p": "〜を通して",
    "m": {
      "en": "through",
      "zh-TW": "透過",
      "zh-CN": "通过",
      "ko": "~를 통해서",
      "vi": "qua",
      "id": "melalui"
    }
  },
  {
    "id": "G0016",
    "p": "〜を中心に",
    "r": "〜をちゅうしんに",
    "m": {
      "en": "centering on",
      "zh-TW": "以...為中心",
      "zh-CN": "以...为中心",
      "ko": "~를 중심으로",
      "vi": "lấy... làm trung tâm",
      "id": "berpusat pada"
    }
  },
  {
    "id": "G0017",
    "p": "〜をはじめ",
    "m": {
      "en": "starting with",
      "zh-TW": "以...為首",
      "zh-CN": "以...为首",
      "ko": "~를 비롯해",
      "vi": "bắt đầu từ",
      "id": "dimulai dari"
    }
  },
  {
    "id": "G0018",
    "p": "〜をもとに",
    "m": {
      "en": "based on",
      "zh-TW": "根據",
      "zh-CN": "根据",
      "ko": "~를 바탕으로",
      "vi": "dựa trên",
      "id": "berdasarkan"
    }
  },
  {
    "id": "G0019",
    "p": "〜をめぐって",
    "m": {
      "en": "concerning",
      "zh-TW": "圍繞",
      "zh-CN": "围绕",
      "ko": "~를 둘러싸고",
      "vi": "xung quanh",
      "id": "seputar"
    }
  },
  {
    "id": "G0020",
    "p": "〜にもとづいて",
    "m": {
      "en": "based on",
      "zh-TW": "基於",
      "zh-CN": "基于",
      "ko": "~에 근거해",
      "vi": "căn cứ vào",
      "id": "berdasarkan"
    }
  },
  {
    "id": "G0021",
    "p": "〜上は",
    "m": {
      "en": "since",
      "zh-TW": "既然",
      "zh-CN": "既然",
      "ko": "~이상",
      "vi": "đã... thì",
      "id": "karena"
    }
  },
  {
    "id": "G0022",
    "p": "〜上で",
    "m": {
      "en": "after",
      "zh-TW": "在...之後",
      "zh-CN": "在...之后",
      "ko": "~한 후에",
      "vi": "sau khi",
      "id": "setelah"
    }
  },
  {
    "id": "G0023",
    "p": "〜上に",
    "m": {
      "en": "on top of",
      "zh-TW": "而且",
      "zh-CN": "而且",
      "ko": "~위에",
      "vi": "hơn nữa",
      "id": "di atas"
    }
  },
  {
    "id": "G0024",
    "p": "〜しだい",
    "r": "〜しだい",
    "m": {
      "en": "as soon as",
      "zh-TW": "一...就",
      "zh-CN": "一...就",
      "ko": "~하는 대로",
      "vi": "ngay khi",
      "id": "segera"
    }
  },
  {
    "id": "G0025",
    "p": "〜しだいで",
    "r": "〜しだいで",
    "m": {
      "en": "depending on",
      "zh-TW": "取決於",
      "zh-CN": "取决于",
      "ko": "~에 따라",
      "vi": "tùy thuộc",
      "id": "tergantung"
    }
  },
  {
    "id": "G0026",
    "p": "〜てからでないと",
    "m": {
      "en": "unless",
      "zh-TW": "如果不...就",
      "zh-CN": "如果不...就",
      "ko": "~하고 나서야",
      "vi": "nếu không... thì",
      "id": "kecuali"
    }
  },
  {
    "id": "G0027",
    "p": "〜ないことには",
    "m": {
      "en": "unless",
      "zh-TW": "如果不",
      "zh-CN": "如果不",
      "ko": "~하지 않으면",
      "vi": "nếu không",
      "id": "kecuali"
    }
  },
  {
    "id": "G0028",
    "p": "〜ようでは",
    "m": {
      "en": "if",
      "zh-TW": "如果",
      "zh-CN": "如果",
      "ko": "~하는 것으로는",
      "vi": "nếu",
      "id": "jika"
    }
  },
  {
    "id": "G0029",
    "p": "〜ものなら",
    "m": {
      "en": "if",
      "zh-TW": "如果",
      "zh-CN": "如果",
      "ko": "~할 수 있다면",
      "vi": "nếu",
      "id": "jika"
    }
  },
  {
    "id": "G0030",
    "p": "〜からには",
    "m": {
      "en": "since",
      "zh-TW": "既然",
      "zh-CN": "既然",
      "ko": "~하는 이상",
      "vi": "đã... thì",
      "id": "karena"
    }
  },
  {
    "id": "G0031",
    "p": "〜ながらも",
    "m": {
      "en": "although",
      "zh-TW": "雖然",
      "zh-CN": "虽然",
      "ko": "~하면서도",
      "vi": "dù",
      "id": "meskipun"
    }
  },
  {
    "id": "G0032",
    "p": "〜つつも",
    "m": {
      "en": "while",
      "zh-TW": "雖然",
      "zh-CN": "虽然",
      "ko": "~하면서도",
      "vi": "tuy",
      "id": "meskipun"
    }
  },
  {
    "id": "G0033",
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
    "id": "G0034",
    "p": "〜にしては",
    "m": {
      "en": "for",
      "zh-TW": "作為...來說",
      "zh-CN": "作为...来说",
      "ko": "~치고는",
      "vi": "so với",
      "id": "untuk"
    }
  },
  {
    "id": "G0035",
    "p": "〜わりに",
    "m": {
      "en": "for",
      "zh-TW": "雖然...但是",
      "zh-CN": "虽然...但是",
      "ko": "~치고",
      "vi": "so với",
      "id": "dibanding"
    }
  },
  {
    "id": "G0036",
    "p": "〜はんめん",
    "r": "〜はんめん",
    "m": {
      "en": "on the other hand",
      "zh-TW": "另一方面",
      "zh-CN": "另一方面",
      "ko": "~반면",
      "vi": "mặt khác",
      "id": "sebaliknya"
    }
  },
  {
    "id": "G0037",
    "p": "〜一方",
    "r": "〜いっぽう",
    "m": {
      "en": "while",
      "zh-TW": "一方面",
      "zh-CN": "一方面",
      "ko": "~한편",
      "vi": "một mặt",
      "id": "sementara"
    }
  },
  {
    "id": "G0038",
    "p": "〜かわりに",
    "m": {
      "en": "instead of",
      "zh-TW": "代替",
      "zh-CN": "代替",
      "ko": "~대신에",
      "vi": "thay vì",
      "id": "sebagai ganti"
    }
  },
  {
    "id": "G0039",
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
    "id": "G0040",
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
    "id": "G0041",
    "p": "〜ほど",
    "m": {
      "en": "to the extent",
      "zh-TW": "越...越",
      "zh-CN": "越...越",
      "ko": "~할수록",
      "vi": "càng",
      "id": "semakin"
    }
  },
  {
    "id": "G0042",
    "p": "〜くらい",
    "m": {
      "en": "to the extent",
      "zh-TW": "到...程度",
      "zh-CN": "到...程度",
      "ko": "~정도",
      "vi": "đến mức",
      "id": "sampai"
    }
  },
  {
    "id": "G0043",
    "p": "〜までもない",
    "m": {
      "en": "no need to",
      "zh-TW": "不必",
      "zh-CN": "不必",
      "ko": "~할 것까지 없다",
      "vi": "không cần",
      "id": "tidak perlu"
    }
  },
  {
    "id": "G0044",
    "p": "〜に関係なく",
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
    "id": "G0045",
    "p": "〜はともかく",
    "m": {
      "en": "aside from",
      "zh-TW": "姑且不論",
      "zh-CN": "姑且不论",
      "ko": "~는 그렇다 치고",
      "vi": "bỏ qua",
      "id": "terlepas dari"
    }
  },
  {
    "id": "G0046",
    "p": "〜はもちろん",
    "m": {
      "en": "of course",
      "zh-TW": "當然",
      "zh-CN": "当然",
      "ko": "~는 물론",
      "vi": "tất nhiên",
      "id": "tentu saja"
    }
  },
  {
    "id": "G0047",
    "p": "〜に限らず",
    "m": {
      "en": "not only",
      "zh-TW": "不限於",
      "zh-CN": "不限于",
      "ko": "~에 한하지 않고",
      "vi": "không chỉ",
      "id": "tidak terbatas"
    }
  },
  {
    "id": "G0048",
    "p": "〜をはじめとして",
    "m": {
      "en": "starting with",
      "zh-TW": "以...為首",
      "zh-CN": "以...为首",
      "ko": "~를 비롯하여",
      "vi": "bắt đầu từ",
      "id": "dimulai dari"
    }
  },
  {
    "id": "G0049",
    "p": "〜から〜にかけて",
    "m": {
      "en": "from... to",
      "zh-TW": "從...到",
      "zh-CN": "从...到",
      "ko": "~에서 ~에 걸쳐",
      "vi": "từ... đến",
      "id": "dari... sampai"
    }
  },
  {
    "id": "G0050",
    "p": "〜にわたって",
    "m": {
      "en": "over",
      "zh-TW": "在...期間",
      "zh-CN": "在...期间",
      "ko": "~에 걸쳐",
      "vi": "kéo dài",
      "id": "selama"
    }
  },
  {
    "id": "G0051",
    "p": "〜っぱなし",
    "m": {
      "en": "left",
      "zh-TW": "一直",
      "zh-CN": "一直",
      "ko": "~한 채로",
      "vi": "cứ để",
      "id": "dibiarkan"
    }
  },
  {
    "id": "G0052",
    "p": "〜げ",
    "m": {
      "en": "seeming",
      "zh-TW": "好像",
      "zh-CN": "好像",
      "ko": "~한 것 같은",
      "vi": "có vẻ",
      "id": "tampak"
    }
  },
  {
    "id": "G0053",
    "p": "〜気味",
    "r": "〜ぎみ",
    "m": {
      "en": "slightly",
      "zh-TW": "有點",
      "zh-CN": "有点",
      "ko": "~기미",
      "vi": "hơi",
      "id": "agak"
    }
  },
  {
    "id": "G0054",
    "p": "〜がち",
    "m": {
      "en": "tend to",
      "zh-TW": "容易",
      "zh-CN": "容易",
      "ko": "~하기 쉬운",
      "vi": "hay",
      "id": "cenderung"
    }
  },
  {
    "id": "G0055",
    "p": "〜向き",
    "r": "〜むき",
    "m": {
      "en": "suitable for",
      "zh-TW": "適合",
      "zh-CN": "适合",
      "ko": "~향",
      "vi": "phù hợp",
      "id": "cocok untuk"
    }
  },
  {
    "id": "G0056",
    "p": "〜向け",
    "r": "〜むけ",
    "m": {
      "en": "for",
      "zh-TW": "針對",
      "zh-CN": "针对",
      "ko": "~용",
      "vi": "dành cho",
      "id": "untuk"
    }
  },
  {
    "id": "G0057",
    "p": "〜ぶり",
    "m": {
      "en": "manner",
      "zh-TW": "樣子",
      "zh-CN": "样子",
      "ko": "~모습",
      "vi": "dáng vẻ",
      "id": "cara"
    }
  },
  {
    "id": "G0058",
    "p": "〜だらけ",
    "m": {
      "en": "full of",
      "zh-TW": "滿是",
      "zh-CN": "满是",
      "ko": "~투성이",
      "vi": "đầy",
      "id": "penuh dengan"
    }
  },
  {
    "id": "G0059",
    "p": "〜まみれ",
    "m": {
      "en": "covered with",
      "zh-TW": "滿身",
      "zh-CN": "满身",
      "ko": "~범벅",
      "vi": "đầy",
      "id": "berlumuran"
    }
  },
  {
    "id": "G0060",
    "p": "〜ずくめ",
    "m": {
      "en": "all",
      "zh-TW": "全部",
      "zh-CN": "全部",
      "ko": "~일색",
      "vi": "toàn",
      "id": "serba"
    }
  },
  {
    "id": "G0061",
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
    "id": "G0062",
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
    "id": "G0063",
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
    "id": "G0064",
    "p": "〜のみ",
    "m": {
      "en": "only",
      "zh-TW": "只",
      "zh-CN": "只",
      "ko": "~만",
      "vi": "chỉ",
      "id": "hanya"
    }
  },
  {
    "id": "G0065",
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
    "id": "G0066",
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
    "id": "G0067",
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
    "id": "G0068",
    "p": "〜に他ならない",
    "m": {
      "en": "nothing but",
      "zh-TW": "正是",
      "zh-CN": "正是",
      "ko": "~에 다름없다",
      "vi": "chẳng qua",
      "id": "tidak lain"
    }
  },
  {
    "id": "G0069",
    "p": "〜にすぎない",
    "m": {
      "en": "merely",
      "zh-TW": "只不過",
      "zh-CN": "只不过",
      "ko": "~에 불과하다",
      "vi": "chỉ là",
      "id": "hanya"
    }
  },
  {
    "id": "G0070",
    "p": "〜に限る",
    "m": {
      "en": "best",
      "zh-TW": "最好",
      "zh-CN": "最好",
      "ko": "~에 한한다",
      "vi": "nhất",
      "id": "paling"
    }
  },
  {
    "id": "G0071",
    "p": "〜べき",
    "m": {
      "en": "should",
      "zh-TW": "應該",
      "zh-CN": "应该",
      "ko": "~해야 할",
      "vi": "nên",
      "id": "harus"
    }
  },
  {
    "id": "G0072",
    "p": "〜べきではない",
    "m": {
      "en": "should not",
      "zh-TW": "不應該",
      "zh-CN": "不应该",
      "ko": "~해서는 안 된다",
      "vi": "không nên",
      "id": "tidak boleh"
    }
  },
  {
    "id": "G0073",
    "p": "〜ものだ",
    "m": {
      "en": "should",
      "zh-TW": "本應",
      "zh-CN": "本应",
      "ko": "~하는 것이다",
      "vi": "nên",
      "id": "seharusnya"
    }
  },
  {
    "id": "G0074",
    "p": "〜わけがない",
    "m": {
      "en": "no way",
      "zh-TW": "不可能",
      "zh-CN": "不可能",
      "ko": "~할 리가 없다",
      "vi": "không thể nào",
      "id": "mustahil"
    }
  },
  {
    "id": "G0075",
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
    "id": "G0076",
    "p": "〜ざるを得ない",
    "m": {
      "en": "have to",
      "zh-TW": "不得不",
      "zh-CN": "不得不",
      "ko": "~하지 않을 수 없다",
      "vi": "buộc phải",
      "id": "terpaksa"
    }
  },
  {
    "id": "G0077",
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
    "id": "G0078",
    "p": "〜てならない",
    "m": {
      "en": "cannot help",
      "zh-TW": "非常",
      "zh-CN": "非常",
      "ko": "~해서 견딜 수 없다",
      "vi": "vô cùng",
      "id": "sangat"
    }
  },
  {
    "id": "G0079",
    "p": "〜てたまらない",
    "m": {
      "en": "unbearably",
      "zh-TW": "受不了",
      "zh-CN": "受不了",
      "ko": "~해서 못 견디겠다",
      "vi": "quá",
      "id": "sangat"
    }
  },
  {
    "id": "G0080",
    "p": "〜てしょうがない",
    "m": {
      "en": "cannot help",
      "zh-TW": "沒辦法",
      "zh-CN": "没办法",
      "ko": "~해서 어쩔 수 없다",
      "vi": "chịu không nổi",
      "id": "tidak tahan"
    }
  },
  {
    "id": "G0081",
    "p": "〜おそれがある",
    "m": {
      "en": "there is fear",
      "zh-TW": "恐怕",
      "zh-CN": "恐怕",
      "ko": "~우려가 있다",
      "vi": "lo ngại",
      "id": "dikhawatirkan"
    }
  },
  {
    "id": "G0082",
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
    "id": "G0083",
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
    "id": "G0084",
    "p": "〜ようがない",
    "m": {
      "en": "no way to",
      "zh-TW": "沒辦法",
      "zh-CN": "没办法",
      "ko": "~할 방법이 없다",
      "vi": "không có cách",
      "id": "tidak ada cara"
    }
  },
  {
    "id": "G0085",
    "p": "〜としか言いようがない",
    "m": {
      "en": "can only say",
      "zh-TW": "只能說",
      "zh-CN": "只能说",
      "ko": "~라고밖에 할 수 없다",
      "vi": "chỉ có thể nói",
      "id": "hanya bisa bilang"
    }
  },
  {
    "id": "G0086",
    "p": "〜ようものなら",
    "m": {
      "en": "if",
      "zh-TW": "如果",
      "zh-CN": "如果",
      "ko": "~하기라도 하면",
      "vi": "nếu mà",
      "id": "jika"
    }
  },
  {
    "id": "G0087",
    "p": "〜というものだ",
    "m": {
      "en": "that is",
      "zh-TW": "這才是",
      "zh-CN": "这才是",
      "ko": "~라는 것이다",
      "vi": "đó là",
      "id": "itulah"
    }
  },
  {
    "id": "G0088",
    "p": "〜というものではない",
    "m": {
      "en": "it is not that",
      "zh-TW": "並不是",
      "zh-CN": "并不是",
      "ko": "~라는 것은 아니다",
      "vi": "không phải là",
      "id": "bukan berarti"
    }
  },
  {
    "id": "G0089",
    "p": "〜ものの",
    "m": {
      "en": "although",
      "zh-TW": "雖然",
      "zh-CN": "虽然",
      "ko": "~하기는 하지만",
      "vi": "tuy",
      "id": "meskipun"
    }
  },
  {
    "id": "G0090",
    "p": "〜ものを",
    "m": {
      "en": "if only",
      "zh-TW": "要是...就好了",
      "zh-CN": "要是...就好了",
      "ko": "~할 것을",
      "vi": "giá mà",
      "id": "seandainya"
    }
  },
  {
    "id": "G0091",
    "p": "〜かける",
    "m": {
      "en": "about to",
      "zh-TW": "快要",
      "zh-CN": "快要",
      "ko": "~하다 말다",
      "vi": "sắp",
      "id": "hampir"
    }
  },
  {
    "id": "G0092",
    "p": "〜切る",
    "r": "〜きる",
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
    "id": "G0093",
    "p": "〜切れない",
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
    "id": "G0094",
    "p": "〜抜く",
    "r": "〜ぬく",
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
    "id": "G0095",
    "p": "〜こむ",
    "r": "〜こむ",
    "m": {
      "en": "into",
      "zh-TW": "進入",
      "zh-CN": "进入",
      "ko": "~하다",
      "vi": "vào",
      "id": "masuk"
    }
  },
  {
    "id": "G0096",
    "p": "〜出す",
    "r": "〜だす",
    "m": {
      "en": "begin to",
      "zh-TW": "開始",
      "zh-CN": "开始",
      "ko": "~하기 시작하다",
      "vi": "bắt đầu",
      "id": "mulai"
    }
  },
  {
    "id": "G0097",
    "p": "〜合う",
    "r": "〜あう",
    "m": {
      "en": "together",
      "zh-TW": "互相",
      "zh-CN": "互相",
      "ko": "~하다",
      "vi": "cùng nhau",
      "id": "bersama"
    }
  },
  {
    "id": "G0098",
    "p": "〜なおす",
    "r": "〜なおす",
    "m": {
      "en": "redo",
      "zh-TW": "重新",
      "zh-CN": "重新",
      "ko": "~다시 하다",
      "vi": "làm lại",
      "id": "ulangi"
    }
  },
  {
    "id": "G0099",
    "p": "〜かえす",
    "r": "〜かえす",
    "m": {
      "en": "back",
      "zh-TW": "回",
      "zh-CN": "回",
      "ko": "~되돌리다",
      "vi": "lại",
      "id": "kembali"
    }
  },
  {
    "id": "G0100",
    "p": "〜つづける",
    "r": "〜つづける",
    "m": {
      "en": "continue",
      "zh-TW": "繼續",
      "zh-CN": "继续",
      "ko": "~계속하다",
      "vi": "tiếp tục",
      "id": "terus"
    }
  },
  {
    "id": "G0101",
    "p": "〜たとたん",
    "m": {
      "en": "just as",
      "zh-TW": "剛...就",
      "zh-CN": "刚...就",
      "ko": "~하자마자",
      "vi": "vừa... thì",
      "id": "begitu"
    }
  },
  {
    "id": "G0102",
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
    "id": "G0103",
    "p": "〜最中に",
    "r": "〜さいちゅうに",
    "m": {
      "en": "in the middle of",
      "zh-TW": "正在...時",
      "zh-CN": "正在...时",
      "ko": "~하는 중에",
      "vi": "đang",
      "id": "sedang"
    }
  },
  {
    "id": "G0104",
    "p": "〜際に",
    "r": "〜さいに",
    "m": {
      "en": "on the occasion of",
      "zh-TW": "在...之際",
      "zh-CN": "在...之际",
      "ko": "~할 때",
      "vi": "khi",
      "id": "saat"
    }
  },
  {
    "id": "G0105",
    "p": "〜にあたって",
    "m": {
      "en": "on the occasion of",
      "zh-TW": "在...之際",
      "zh-CN": "在...之际",
      "ko": "~에 즈음하여",
      "vi": "nhân dịp",
      "id": "pada kesempatan"
    }
  },
  {
    "id": "G0106",
    "p": "〜に先立って",
    "m": {
      "en": "before",
      "zh-TW": "在...之前",
      "zh-CN": "在...之前",
      "ko": "~에 앞서",
      "vi": "trước khi",
      "id": "sebelum"
    }
  },
  {
    "id": "G0107",
    "p": "〜て以来",
    "m": {
      "en": "since",
      "zh-TW": "自從",
      "zh-CN": "自从",
      "ko": "~한 이래",
      "vi": "kể từ khi",
      "id": "sejak"
    }
  },
  {
    "id": "G0108",
    "p": "〜うちに",
    "m": {
      "en": "while",
      "zh-TW": "趁著",
      "zh-CN": "趁着",
      "ko": "~하는 동안에",
      "vi": "trong khi",
      "id": "selagi"
    }
  },
  {
    "id": "G0109",
    "p": "〜てからというもの",
    "m": {
      "en": "ever since",
      "zh-TW": "自從",
      "zh-CN": "自从",
      "ko": "~한 이후로",
      "vi": "kể từ khi",
      "id": "sejak"
    }
  },
  {
    "id": "G0110",
    "p": "〜を機に",
    "m": {
      "en": "taking the opportunity",
      "zh-TW": "以...為契機",
      "zh-CN": "以...为契机",
      "ko": "~를 계기로",
      "vi": "nhân cơ hội",
      "id": "dengan kesempatan"
    }
  },
  {
    "id": "G0111",
    "p": "〜やら〜やら",
    "m": {
      "en": "and",
      "zh-TW": "又...又",
      "zh-CN": "又...又",
      "ko": "~이니 ~이니",
      "vi": "nào... nào",
      "id": "dan"
    }
  },
  {
    "id": "G0112",
    "p": "〜といい〜といい",
    "m": {
      "en": "both... and",
      "zh-TW": "無論...還是",
      "zh-CN": "无论...还是",
      "ko": "~도 ~도",
      "vi": "cả... lẫn",
      "id": "baik... maupun"
    }
  },
  {
    "id": "G0113",
    "p": "〜にしろ〜にしろ",
    "m": {
      "en": "whether... or",
      "zh-TW": "無論...還是",
      "zh-CN": "无论...还是",
      "ko": "~이든 ~이든",
      "vi": "dù... hay",
      "id": "entah... atau"
    }
  },
  {
    "id": "G0114",
    "p": "〜にせよ〜にせよ",
    "m": {
      "en": "whether... or",
      "zh-TW": "無論...還是",
      "zh-CN": "无论...还是",
      "ko": "~이든 ~이든",
      "vi": "dù... hay",
      "id": "entah... atau"
    }
  },
  {
    "id": "G0115",
    "p": "〜であれ〜であれ",
    "m": {
      "en": "whether... or",
      "zh-TW": "無論...還是",
      "zh-CN": "无论...还是",
      "ko": "~이든 ~이든",
      "vi": "dù... hay",
      "id": "entah... atau"
    }
  },
  {
    "id": "G0116",
    "p": "〜なり〜なり",
    "m": {
      "en": "either... or",
      "zh-TW": "或...或",
      "zh-CN": "或...或",
      "ko": "~이든지 ~이든지",
      "vi": "hoặc... hoặc",
      "id": "atau... atau"
    }
  },
  {
    "id": "G0117",
    "p": "〜といわず〜といわず",
    "m": {
      "en": "both... and",
      "zh-TW": "不管...還是",
      "zh-CN": "不管...还是",
      "ko": "~이고 ~이고",
      "vi": "cả... lẫn",
      "id": "baik... maupun"
    }
  },
  {
    "id": "G0118",
    "p": "〜つ〜つ",
    "m": {
      "en": "alternately",
      "zh-TW": "一會兒...一會兒",
      "zh-CN": "一会儿...一会儿",
      "ko": "~하기도 ~하기도",
      "vi": "khi... khi",
      "id": "kadang... kadang"
    }
  },
  {
    "id": "G0119",
    "p": "〜ては〜ては",
    "m": {
      "en": "repeatedly",
      "zh-TW": "一再",
      "zh-CN": "一再",
      "ko": "~하고는 ~하고는",
      "vi": "cứ",
      "id": "terus menerus"
    }
  },
  {
    "id": "G0120",
    "p": "〜たり〜たり",
    "m": {
      "en": "sometimes... sometimes",
      "zh-TW": "有時...有時",
      "zh-CN": "有时...有时",
      "ko": "~하기도 ~하기도",
      "vi": "khi... khi",
      "id": "kadang"
    }
  },
  {
    "id": "G0121",
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
    "id": "G0122",
    "p": "〜に反して",
    "m": {
      "en": "contrary to",
      "zh-TW": "與...相反",
      "zh-CN": "与...相反",
      "ko": "~에 반해",
      "vi": "trái với",
      "id": "berlawanan"
    }
  },
  {
    "id": "G0123",
    "p": "〜とは反対に",
    "m": {
      "en": "contrary to",
      "zh-TW": "與...相反",
      "zh-CN": "与...相反",
      "ko": "~와는 반대로",
      "vi": "ngược lại",
      "id": "kebalikan"
    }
  },
  {
    "id": "G0124",
    "p": "〜とは違って",
    "m": {
      "en": "unlike",
      "zh-TW": "與...不同",
      "zh-CN": "与...不同",
      "ko": "~와는 달리",
      "vi": "khác với",
      "id": "tidak seperti"
    }
  },
  {
    "id": "G0125",
    "p": "〜に引き換え",
    "m": {
      "en": "in contrast",
      "zh-TW": "相對於",
      "zh-CN": "相对于",
      "ko": "~에 비해",
      "vi": "ngược lại",
      "id": "berbeda dengan"
    }
  },
  {
    "id": "G0126",
    "p": "〜どころではない",
    "m": {
      "en": "not the time for",
      "zh-TW": "不是...的時候",
      "zh-CN": "不是...的时候",
      "ko": "~할 때가 아니다",
      "vi": "không phải lúc",
      "id": "bukan waktunya"
    }
  },
  {
    "id": "G0127",
    "p": "〜ないまでも",
    "m": {
      "en": "even if not",
      "zh-TW": "即使不",
      "zh-CN": "即使不",
      "ko": "~는 아니더라도",
      "vi": "dù không",
      "id": "meskipun tidak"
    }
  },
  {
    "id": "G0128",
    "p": "〜かと思えば",
    "m": {
      "en": "just when I thought",
      "zh-TW": "以為...結果",
      "zh-CN": "以为...结果",
      "ko": "~인가 했더니",
      "vi": "tưởng",
      "id": "kira"
    }
  },
  {
    "id": "G0129",
    "p": "〜かと思うと",
    "m": {
      "en": "no sooner than",
      "zh-TW": "剛...就",
      "zh-CN": "刚...就",
      "ko": "~인가 싶으면",
      "vi": "vừa",
      "id": "begitu"
    }
  },
  {
    "id": "G0130",
    "p": "〜と思いきや",
    "m": {
      "en": "contrary to expectations",
      "zh-TW": "原以為",
      "zh-CN": "原以为",
      "ko": "~인가 했더니",
      "vi": "tưởng là",
      "id": "ternyata"
    }
  },
  {
    "id": "G0131",
    "p": "〜ために",
    "m": {
      "en": "in order to",
      "zh-TW": "為了",
      "zh-CN": "为了",
      "ko": "~하기 위해",
      "vi": "để",
      "id": "untuk"
    }
  },
  {
    "id": "G0132",
    "p": "〜ように",
    "m": {
      "en": "so that",
      "zh-TW": "以便",
      "zh-CN": "以便",
      "ko": "~하도록",
      "vi": "để",
      "id": "agar"
    }
  },
  {
    "id": "G0133",
    "p": "〜には",
    "m": {
      "en": "in order to",
      "zh-TW": "要...就",
      "zh-CN": "要...就",
      "ko": "~하려면",
      "vi": "muốn... thì",
      "id": "untuk"
    }
  },
  {
    "id": "G0134",
    "p": "〜べく",
    "m": {
      "en": "in order to",
      "zh-TW": "為了",
      "zh-CN": "为了",
      "ko": "~하기 위해",
      "vi": "để",
      "id": "untuk"
    }
  },
  {
    "id": "G0135",
    "p": "〜をきっかけに",
    "m": {
      "en": "triggered by",
      "zh-TW": "以...為契機",
      "zh-CN": "以...为契机",
      "ko": "~를 계기로",
      "vi": "nhân dịp",
      "id": "dengan pemicu"
    }
  },
  {
    "id": "G0136",
    "p": "〜を契機として",
    "m": {
      "en": "taking the opportunity",
      "zh-TW": "以...為契機",
      "zh-CN": "以...为契机",
      "ko": "~를 계기로 하여",
      "vi": "nhân cơ hội",
      "id": "dengan kesempatan"
    }
  },
  {
    "id": "G0137",
    "p": "〜んがため",
    "m": {
      "en": "in order to",
      "zh-TW": "為了",
      "zh-CN": "为了",
      "ko": "~하기 위해",
      "vi": "để",
      "id": "demi"
    }
  },
  {
    "id": "G0138",
    "p": "〜ことなく",
    "m": {
      "en": "without",
      "zh-TW": "沒有",
      "zh-CN": "没有",
      "ko": "~하지 않고",
      "vi": "mà không",
      "id": "tanpa"
    }
  },
  {
    "id": "G0139",
    "p": "〜ずに",
    "m": {
      "en": "without",
      "zh-TW": "沒有",
      "zh-CN": "没有",
      "ko": "~하지 않고",
      "vi": "mà không",
      "id": "tanpa"
    }
  },
  {
    "id": "G0140",
    "p": "〜ないで",
    "m": {
      "en": "without",
      "zh-TW": "沒有",
      "zh-CN": "没有",
      "ko": "~하지 않고",
      "vi": "không",
      "id": "tanpa"
    }
  },
  {
    "id": "G0141",
    "p": "〜あげく",
    "m": {
      "en": "in the end",
      "zh-TW": "結果",
      "zh-CN": "结果",
      "ko": "~한 끝에",
      "vi": "cuối cùng",
      "id": "akhirnya"
    }
  },
  {
    "id": "G0142",
    "p": "〜末に",
    "m": {
      "en": "after",
      "zh-TW": "經過...之後",
      "zh-CN": "经过...之后",
      "ko": "~한 끝에",
      "vi": "sau khi",
      "id": "setelah"
    }
  },
  {
    "id": "G0143",
    "p": "〜けっか",
    "r": "〜けっか",
    "m": {
      "en": "as a result",
      "zh-TW": "結果",
      "zh-CN": "结果",
      "ko": "~한 결과",
      "vi": "kết quả",
      "id": "hasilnya"
    }
  },
  {
    "id": "G0144",
    "p": "〜ことから",
    "m": {
      "en": "because",
      "zh-TW": "由於",
      "zh-CN": "由于",
      "ko": "~하기 때문에",
      "vi": "vì",
      "id": "karena"
    }
  },
  {
    "id": "G0145",
    "p": "〜ことだから",
    "m": {
      "en": "since",
      "zh-TW": "因為是",
      "zh-CN": "因为是",
      "ko": "~하니까",
      "vi": "vì",
      "id": "karena"
    }
  },
  {
    "id": "G0146",
    "p": "〜だけに",
    "m": {
      "en": "as expected",
      "zh-TW": "正因為",
      "zh-CN": "正因为",
      "ko": "~만큼",
      "vi": "vì",
      "id": "justru"
    }
  },
  {
    "id": "G0147",
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
    "id": "G0148",
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
    "id": "G0149",
    "p": "〜からといって",
    "m": {
      "en": "just because",
      "zh-TW": "雖然說",
      "zh-CN": "虽然说",
      "ko": "~라고 해서",
      "vi": "dù... nhưng",
      "id": "meskipun"
    }
  },
  {
    "id": "G0150",
    "p": "〜といっても",
    "m": {
      "en": "even though",
      "zh-TW": "雖說",
      "zh-CN": "虽说",
      "ko": "~라고 해도",
      "vi": "dù nói",
      "id": "meskipun bilang"
    }
  },
  {
    "id": "G0151",
    "p": "〜ことに",
    "m": {
      "en": "to my",
      "zh-TW": "令人...的是",
      "zh-CN": "令人...的是",
      "ko": "~하게도",
      "vi": "thật",
      "id": "yang... adalah"
    }
  },
  {
    "id": "G0152",
    "p": "〜ことか",
    "m": {
      "en": "how",
      "zh-TW": "多麼",
      "zh-CN": "多么",
      "ko": "~이란",
      "vi": "biết bao",
      "id": "betapa"
    }
  },
  {
    "id": "G0153",
    "p": "〜のなんのって",
    "m": {
      "en": "extremely",
      "zh-TW": "非常",
      "zh-CN": "非常",
      "ko": "~하다니",
      "vi": "cực kỳ",
      "id": "sangat"
    }
  },
  {
    "id": "G0154",
    "p": "〜といったらない",
    "m": {
      "en": "extremely",
      "zh-TW": "太...了",
      "zh-CN": "太...了",
      "ko": "~이라니",
      "vi": "quá... đi",
      "id": "sangat"
    }
  },
  {
    "id": "G0155",
    "p": "〜てやまない",
    "m": {
      "en": "sincerely",
      "zh-TW": "衷心",
      "zh-CN": "衷心",
      "ko": "~해 마지않다",
      "vi": "không ngừng",
      "id": "sangat"
    }
  },
  {
    "id": "G0156",
    "p": "〜に堪えない",
    "m": {
      "en": "unbearable",
      "zh-TW": "不堪",
      "zh-CN": "不堪",
      "ko": "~에 견딜 수 없다",
      "vi": "không chịu nổi",
      "id": "tidak tahan"
    }
  },
  {
    "id": "G0157",
    "p": "〜極まりない",
    "m": {
      "en": "extremely",
      "zh-TW": "極其",
      "zh-CN": "极其",
      "ko": "~하기 짝이 없다",
      "vi": "cực kỳ",
      "id": "sangat"
    }
  },
  {
    "id": "G0158",
    "p": "〜限りだ",
    "r": "〜かぎりだ",
    "m": {
      "en": "extremely",
      "zh-TW": "非常",
      "zh-CN": "非常",
      "ko": "~하기 그지없다",
      "vi": "vô cùng",
      "id": "sangat"
    }
  },
  {
    "id": "G0159",
    "p": "〜いたり",
    "r": "〜いたり",
    "m": {
      "en": "height of",
      "zh-TW": "極度",
      "zh-CN": "极度",
      "ko": "~하기 그지없다",
      "vi": "đỉnh cao",
      "id": "puncak"
    }
  },
  {
    "id": "G0160",
    "p": "〜のきわみ",
    "r": "〜のきわみ",
    "m": {
      "en": "height of",
      "zh-TW": "極度",
      "zh-CN": "极度",
      "ko": "~의 극치",
      "vi": "cực điểm",
      "id": "puncak"
    }
  },
  {
    "id": "G0161",
    "p": "〜ないものか",
    "m": {
      "en": "I wish",
      "zh-TW": "能不能",
      "zh-CN": "能不能",
      "ko": "~하면 안 될까",
      "vi": "không thể... sao",
      "id": "tidak bisakah"
    }
  },
  {
    "id": "G0162",
    "p": "〜ないではいられない",
    "m": {
      "en": "cannot help",
      "zh-TW": "不能不",
      "zh-CN": "不能不",
      "ko": "~하지 않을 수 없다",
      "vi": "không thể không",
      "id": "tidak bisa tidak"
    }
  },
  {
    "id": "G0163",
    "p": "〜ずにはいられない",
    "m": {
      "en": "cannot help",
      "zh-TW": "不能不",
      "zh-CN": "不能不",
      "ko": "~하지 않을 수 없다",
      "vi": "không thể không",
      "id": "tidak bisa tidak"
    }
  },
  {
    "id": "G0164",
    "p": "〜ないものでもない",
    "m": {
      "en": "not that... cannot",
      "zh-TW": "並非不能",
      "zh-CN": "并非不能",
      "ko": "~하지 못할 것도 없다",
      "vi": "không phải không",
      "id": "bukan tidak bisa"
    }
  },
  {
    "id": "G0165",
    "p": "〜ずにはすまない",
    "m": {
      "en": "must",
      "zh-TW": "不能不",
      "zh-CN": "不能不",
      "ko": "~하지 않고는 안 된다",
      "vi": "buộc phải",
      "id": "harus"
    }
  },
  {
    "id": "G0166",
    "p": "〜ないではすまない",
    "m": {
      "en": "must",
      "zh-TW": "不能不",
      "zh-CN": "不能不",
      "ko": "~하지 않고는 안 된다",
      "vi": "buộc phải",
      "id": "harus"
    }
  },
  {
    "id": "G0167",
    "p": "〜までもなく",
    "m": {
      "en": "needless to say",
      "zh-TW": "不用說",
      "zh-CN": "不用说",
      "ko": "~할 것도 없이",
      "vi": "không cần nói",
      "id": "tidak perlu"
    }
  },
  {
    "id": "G0168",
    "p": "〜に足りない",
    "m": {
      "en": "not worth",
      "zh-TW": "不值得",
      "zh-CN": "不值得",
      "ko": "~할 가치가 없다",
      "vi": "không đáng",
      "id": "tidak layak"
    }
  },
  {
    "id": "G0169",
    "p": "〜にたえない",
    "m": {
      "en": "cannot bear",
      "zh-TW": "不堪",
      "zh-CN": "不堪",
      "ko": "~할 수 없다",
      "vi": "không chịu nổi",
      "id": "tidak tahan"
    }
  },
  {
    "id": "G0170",
    "p": "〜まい",
    "m": {
      "en": "will not",
      "zh-TW": "不會",
      "zh-CN": "不会",
      "ko": "~하지 않겠다",
      "vi": "sẽ không",
      "id": "tidak akan"
    }
  },
  {
    "id": "G0171",
    "p": "〜させていただく",
    "m": {
      "en": "let me",
      "zh-TW": "請讓我",
      "zh-CN": "请让我",
      "ko": "~하겠습니다",
      "vi": "cho phép tôi",
      "id": "izinkan saya"
    }
  },
  {
    "id": "G0172",
    "p": "〜てくださる",
    "m": {
      "en": "do for me",
      "zh-TW": "為我...（尊敬）",
      "zh-CN": "为我...（尊敬）",
      "ko": "~해 주시다",
      "vi": "... cho tôi",
      "id": "... untuk saya"
    }
  },
  {
    "id": "G0173",
    "p": "〜ていただく",
    "m": {
      "en": "receive",
      "zh-TW": "請...（謙讓）",
      "zh-CN": "请...（谦让）",
      "ko": "~해 주시다",
      "vi": "được... cho",
      "id": "menerima"
    }
  },
  {
    "id": "G0174",
    "p": "〜てさしあげる",
    "m": {
      "en": "do for",
      "zh-TW": "為...（謙讓）",
      "zh-CN": "为...（谦让）",
      "ko": "~해 드리다",
      "vi": "làm cho",
      "id": "melakukan untuk"
    }
  },
  {
    "id": "G0175",
    "p": "お〜になる",
    "m": {
      "en": "do (honorific)",
      "zh-TW": "...（尊敬語）",
      "zh-CN": "...（尊敬语）",
      "ko": "~하시다",
      "vi": "...",
      "id": "melakukan"
    }
  },
  {
    "id": "G0176",
    "p": "お〜する",
    "m": {
      "en": "do (humble)",
      "zh-TW": "...（謙讓語）",
      "zh-CN": "...（谦让语）",
      "ko": "~하다",
      "vi": "...",
      "id": "melakukan"
    }
  },
  {
    "id": "G0177",
    "p": "〜てまいる",
    "m": {
      "en": "come (humble)",
      "zh-TW": "來（謙讓）",
      "zh-CN": "来（谦让）",
      "ko": "~해 오다",
      "vi": "đến",
      "id": "datang"
    }
  },
  {
    "id": "G0178",
    "p": "〜ておる",
    "m": {
      "en": "be (humble)",
      "zh-TW": "在（謙讓）",
      "zh-CN": "在（谦让）",
      "ko": "~하고 있다",
      "vi": "đang",
      "id": "sedang"
    }
  },
  {
    "id": "G0179",
    "p": "〜でございます",
    "m": {
      "en": "be (polite)",
      "zh-TW": "是（禮貌）",
      "zh-CN": "是（礼貌）",
      "ko": "~입니다",
      "vi": "là",
      "id": "adalah"
    }
  },
  {
    "id": "G0180",
    "p": "〜いたす",
    "m": {
      "en": "do (humble)",
      "zh-TW": "做（謙讓）",
      "zh-CN": "做（谦让）",
      "ko": "~하다",
      "vi": "làm",
      "id": "melakukan"
    }
  },
  {
    "id": "G0181",
    "p": "〜ところ",
    "m": {
      "en": "about to",
      "zh-TW": "正要",
      "zh-CN": "正要",
      "ko": "~하려던 참",
      "vi": "sắp",
      "id": "akan"
    }
  },
  {
    "id": "G0182",
    "p": "〜わけ",
    "m": {
      "en": "reason",
      "zh-TW": "原因",
      "zh-CN": "原因",
      "ko": "~이유",
      "vi": "lý do",
      "id": "alasan"
    }
  },
  {
    "id": "G0183",
    "p": "〜はず",
    "m": {
      "en": "should",
      "zh-TW": "應該",
      "zh-CN": "应该",
      "ko": "~할 것이다",
      "vi": "chắc hẳn",
      "id": "seharusnya"
    }
  },
  {
    "id": "G0184",
    "p": "〜もの",
    "m": {
      "en": "because",
      "zh-TW": "因為",
      "zh-CN": "因为",
      "ko": "~거든",
      "vi": "vì",
      "id": "karena"
    }
  },
  {
    "id": "G0185",
    "p": "〜こと",
    "m": {
      "en": "thing",
      "zh-TW": "事情",
      "zh-CN": "事情",
      "ko": "~것",
      "vi": "việc",
      "id": "hal"
    }
  },
  {
    "id": "G0186",
    "p": "〜の",
    "m": {
      "en": "one",
      "zh-TW": "...的",
      "zh-CN": "...的",
      "ko": "~것",
      "vi": "cái",
      "id": "yang"
    }
  },
  {
    "id": "G0187",
    "p": "〜ため",
    "m": {
      "en": "for",
      "zh-TW": "為了",
      "zh-CN": "为了",
      "ko": "~하기 위해",
      "vi": "để",
      "id": "untuk"
    }
  },
  {
    "id": "G0188",
    "p": "〜せい",
    "m": {
      "en": "because of",
      "zh-TW": "因為",
      "zh-CN": "因为",
      "ko": "~탓",
      "vi": "do",
      "id": "karena"
    }
  },
  {
    "id": "G0189",
    "p": "〜おかげ",
    "m": {
      "en": "thanks to",
      "zh-TW": "多虧",
      "zh-CN": "多亏",
      "ko": "~덕분",
      "vi": "nhờ",
      "id": "berkat"
    }
  },
  {
    "id": "G0190",
    "p": "〜通り",
    "r": "〜とおり",
    "m": {
      "en": "as",
      "zh-TW": "按照",
      "zh-CN": "按照",
      "ko": "~대로",
      "vi": "theo",
      "id": "sesuai"
    }
  },
  {
    "id": "G0191",
    "p": "〜ようと",
    "m": {
      "en": "no matter",
      "zh-TW": "即使",
      "zh-CN": "即使",
      "ko": "~하더라도",
      "vi": "dù",
      "id": "meskipun"
    }
  },
  {
    "id": "G0192",
    "p": "〜ようが",
    "m": {
      "en": "no matter",
      "zh-TW": "即使",
      "zh-CN": "即使",
      "ko": "~하더라도",
      "vi": "dù",
      "id": "meskipun"
    }
  },
  {
    "id": "G0193",
    "p": "〜ようとも",
    "m": {
      "en": "even if",
      "zh-TW": "即使",
      "zh-CN": "即使",
      "ko": "~하더라도",
      "vi": "cho dù",
      "id": "meskipun"
    }
  },
  {
    "id": "G0194",
    "p": "〜ようものなら",
    "m": {
      "en": "if by any chance",
      "zh-TW": "萬一",
      "zh-CN": "万一",
      "ko": "~하기라도 하면",
      "vi": "nếu chẳng may",
      "id": "jika kebetulan"
    }
  },
  {
    "id": "G0195",
    "p": "〜ようとする",
    "m": {
      "en": "try to",
      "zh-TW": "試圖",
      "zh-CN": "试图",
      "ko": "~하려고 하다",
      "vi": "cố",
      "id": "mencoba"
    }
  },
  {
    "id": "G0196",
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
    "id": "G0197",
    "p": "〜ようにする",
    "m": {
      "en": "make sure",
      "zh-TW": "設法",
      "zh-CN": "设法",
      "ko": "~하도록 하다",
      "vi": "cố",
      "id": "berusaha"
    }
  },
  {
    "id": "G0198",
    "p": "〜からして",
    "m": {
      "en": "starting from",
      "zh-TW": "從...來看",
      "zh-CN": "从...来看",
      "ko": "~부터",
      "vi": "từ",
      "id": "dari"
    }
  },
  {
    "id": "G0199",
    "p": "〜ゆえに",
    "m": {
      "en": "because",
      "zh-TW": "因為",
      "zh-CN": "因为",
      "ko": "~때문에",
      "vi": "vì",
      "id": "karena"
    }
  },
  {
    "id": "G0200",
    "p": "〜をもって",
    "m": {
      "en": "with",
      "zh-TW": "以",
      "zh-CN": "以",
      "ko": "~로써",
      "vi": "bằng",
      "id": "dengan"
    }
  },
  {
    "id": "G0201",
    "p": "に際して",
    "r": "にさいして",
    "m": {
      "en": "on the occasion of",
      "zh-TW": "[on the occasion of]",
      "zh-CN": "[on the occasion of]",
      "ko": "[on the occasion of]",
      "vi": "[on the occasion of]",
      "id": "[on the occasion of]"
    }
  },
  {
    "id": "G0202",
    "p": "にあたって",
    "m": {
      "en": "on the occasion of; when",
      "zh-TW": "[on the occasion of; when]",
      "zh-CN": "[on the occasion of; when]",
      "ko": "[on the occasion of; when]",
      "vi": "[on the occasion of; when]",
      "id": "[on the occasion of; when]"
    }
  },
  {
    "id": "G0203",
    "p": "に先立って",
    "m": {
      "en": "prior to; before",
      "zh-TW": "[prior to; before]",
      "zh-CN": "[prior to; before]",
      "ko": "[prior to; before]",
      "vi": "[prior to; before]",
      "id": "[prior to; before]"
    }
  },
  {
    "id": "G0204",
    "p": "をもって",
    "m": {
      "en": "with; by means of",
      "zh-TW": "[with; by means of]",
      "zh-CN": "[with; by means of]",
      "ko": "[with; by means of]",
      "vi": "[with; by means of]",
      "id": "[with; by means of]"
    }
  },
  {
    "id": "G0205",
    "p": "をもとに",
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
    "id": "G0206",
    "p": "を踏まえて",
    "m": {
      "en": "based on; considering",
      "zh-TW": "[based on; considering]",
      "zh-CN": "[based on; considering]",
      "ko": "[based on; considering]",
      "vi": "[based on; considering]",
      "id": "[based on; considering]"
    }
  },
  {
    "id": "G0207",
    "p": "を契機に",
    "m": {
      "en": "taking the opportunity of",
      "zh-TW": "[taking the opportunity of]",
      "zh-CN": "[taking the opportunity of]",
      "ko": "[taking the opportunity of]",
      "vi": "[taking the opportunity of]",
      "id": "[taking the opportunity of]"
    }
  },
  {
    "id": "G0208",
    "p": "をかわきりに",
    "r": "をかわきりに",
    "m": {
      "en": "starting with",
      "zh-TW": "[starting with]",
      "zh-CN": "[starting with]",
      "ko": "[starting with]",
      "vi": "[starting with]",
      "id": "[starting with]"
    }
  },
  {
    "id": "G0209",
    "p": "からして",
    "m": {
      "en": "judging from; even",
      "zh-TW": "[judging from; even]",
      "zh-CN": "[judging from; even]",
      "ko": "[judging from; even]",
      "vi": "[judging from; even]",
      "id": "[judging from; even]"
    }
  },
  {
    "id": "G0210",
    "p": "からいうと",
    "m": {
      "en": "from the standpoint of",
      "zh-TW": "[from the standpoint of]",
      "zh-CN": "[from the standpoint of]",
      "ko": "[from the standpoint of]",
      "vi": "[from the standpoint of]",
      "id": "[from the standpoint of]"
    }
  },
  {
    "id": "G0211",
    "p": "からすると",
    "m": {
      "en": "judging from",
      "zh-TW": "[judging from]",
      "zh-CN": "[judging from]",
      "ko": "[judging from]",
      "vi": "[judging from]",
      "id": "[judging from]"
    }
  },
  {
    "id": "G0212",
    "p": "からには",
    "m": {
      "en": "since; now that",
      "zh-TW": "[since; now that]",
      "zh-CN": "[since; now that]",
      "ko": "[since; now that]",
      "vi": "[since; now that]",
      "id": "[since; now that]"
    }
  },
  {
    "id": "G0213",
    "p": "以上",
    "r": "いじょう",
    "m": {
      "en": "since; as long as",
      "zh-TW": "[since; as long as]",
      "zh-CN": "[since; as long as]",
      "ko": "[since; as long as]",
      "vi": "[since; as long as]",
      "id": "[since; as long as]"
    }
  },
  {
    "id": "G0214",
    "p": "上は",
    "m": {
      "en": "since; now that",
      "zh-TW": "[since; now that]",
      "zh-CN": "[since; now that]",
      "ko": "[since; now that]",
      "vi": "[since; now that]",
      "id": "[since; now that]"
    }
  },
  {
    "id": "G0215",
    "p": "ものなら",
    "m": {
      "en": "if one could",
      "zh-TW": "[if one could]",
      "zh-CN": "[if one could]",
      "ko": "[if one could]",
      "vi": "[if one could]",
      "id": "[if one could]"
    }
  },
  {
    "id": "G0216",
    "p": "ものの",
    "m": {
      "en": "although; but",
      "zh-TW": "[although; but]",
      "zh-CN": "[although; but]",
      "ko": "[although; but]",
      "vi": "[although; but]",
      "id": "[although; but]"
    }
  },
  {
    "id": "G0217",
    "p": "ものだから",
    "m": {
      "en": "because",
      "zh-TW": "[because]",
      "zh-CN": "[because]",
      "ko": "[because]",
      "vi": "[because]",
      "id": "[because]"
    }
  },
  {
    "id": "G0218",
    "p": "ものがある",
    "m": {
      "en": "there is something",
      "zh-TW": "[there is something]",
      "zh-CN": "[there is something]",
      "ko": "[there is something]",
      "vi": "[there is something]",
      "id": "[there is something]"
    }
  },
  {
    "id": "G0219",
    "p": "ことだ",
    "m": {
      "en": "should; ought to",
      "zh-TW": "[should; ought to]",
      "zh-CN": "[should; ought to]",
      "ko": "[should; ought to]",
      "vi": "[should; ought to]",
      "id": "[should; ought to]"
    }
  },
  {
    "id": "G0220",
    "p": "ことか",
    "m": {
      "en": "how...!",
      "zh-TW": "[how...!]",
      "zh-CN": "[how...!]",
      "ko": "[how...!]",
      "vi": "[how...!]",
      "id": "[how...!]"
    }
  },
  {
    "id": "G0221",
    "p": "ことから",
    "m": {
      "en": "from the fact that",
      "zh-TW": "[from the fact that]",
      "zh-CN": "[from the fact that]",
      "ko": "[from the fact that]",
      "vi": "[from the fact that]",
      "id": "[from the fact that]"
    }
  },
  {
    "id": "G0222",
    "p": "ことなく",
    "m": {
      "en": "without",
      "zh-TW": "[without]",
      "zh-CN": "[without]",
      "ko": "[without]",
      "vi": "[without]",
      "id": "[without]"
    }
  },
  {
    "id": "G0223",
    "p": "ことはない",
    "m": {
      "en": "no need to",
      "zh-TW": "[no need to]",
      "zh-CN": "[no need to]",
      "ko": "[no need to]",
      "vi": "[no need to]",
      "id": "[no need to]"
    }
  },
  {
    "id": "G0224",
    "p": "どころか",
    "m": {
      "en": "far from; let alone",
      "zh-TW": "[far from; let alone]",
      "zh-CN": "[far from; let alone]",
      "ko": "[far from; let alone]",
      "vi": "[far from; let alone]",
      "id": "[far from; let alone]"
    }
  },
  {
    "id": "G0225",
    "p": "どころではない",
    "m": {
      "en": "not the time/place for",
      "zh-TW": "[not the time/place for]",
      "zh-CN": "[not the time/place for]",
      "ko": "[not the time/place for]",
      "vi": "[not the time/place for]",
      "id": "[not the time/place for]"
    }
  },
  {
    "id": "G0226",
    "p": "ばかりか",
    "m": {
      "en": "not only...but also",
      "zh-TW": "[not only...but also]",
      "zh-CN": "[not only...but also]",
      "ko": "[not only...but also]",
      "vi": "[not only...but also]",
      "id": "[not only...but also]"
    }
  },
  {
    "id": "G0227",
    "p": "ばかりに",
    "m": {
      "en": "just because",
      "zh-TW": "[just because]",
      "zh-CN": "[just because]",
      "ko": "[just because]",
      "vi": "[just because]",
      "id": "[just because]"
    }
  },
  {
    "id": "G0228",
    "p": "ならでは",
    "m": {
      "en": "unique to; only",
      "zh-TW": "[unique to; only]",
      "zh-CN": "[unique to; only]",
      "ko": "[unique to; only]",
      "vi": "[unique to; only]",
      "id": "[unique to; only]"
    }
  },
  {
    "id": "G0229",
    "p": "ないことには",
    "m": {
      "en": "unless",
      "zh-TW": "[unless]",
      "zh-CN": "[unless]",
      "ko": "[unless]",
      "vi": "[unless]",
      "id": "[unless]"
    }
  },
  {
    "id": "G0230",
    "p": "ないまでも",
    "m": {
      "en": "even if not",
      "zh-TW": "[even if not]",
      "zh-CN": "[even if not]",
      "ko": "[even if not]",
      "vi": "[even if not]",
      "id": "[even if not]"
    }
  },
  {
    "id": "G0231",
    "p": "ずにはいられない",
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
    "id": "G0232",
    "p": "てはいられない",
    "m": {
      "en": "cannot afford to",
      "zh-TW": "[cannot afford to]",
      "zh-CN": "[cannot afford to]",
      "ko": "[cannot afford to]",
      "vi": "[cannot afford to]",
      "id": "[cannot afford to]"
    }
  },
  {
    "id": "G0233",
    "p": "ずにはすまない",
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
    "id": "G0234",
    "p": "ないではすまない",
    "m": {
      "en": "cannot get away without",
      "zh-TW": "[cannot get away without]",
      "zh-CN": "[cannot get away without]",
      "ko": "[cannot get away without]",
      "vi": "[cannot get away without]",
      "id": "[cannot get away without]"
    }
  },
  {
    "id": "G0235",
    "p": "かねない",
    "m": {
      "en": "might; could",
      "zh-TW": "[might; could]",
      "zh-CN": "[might; could]",
      "ko": "[might; could]",
      "vi": "[might; could]",
      "id": "[might; could]"
    }
  },
  {
    "id": "G0236",
    "p": "かねる",
    "m": {
      "en": "cannot; hard to",
      "zh-TW": "[cannot; hard to]",
      "zh-CN": "[cannot; hard to]",
      "ko": "[cannot; hard to]",
      "vi": "[cannot; hard to]",
      "id": "[cannot; hard to]"
    }
  },
  {
    "id": "G0237",
    "p": "きる",
    "m": {
      "en": "completely; thoroughly",
      "zh-TW": "[completely; thoroughly]",
      "zh-CN": "[completely; thoroughly]",
      "ko": "[completely; thoroughly]",
      "vi": "[completely; thoroughly]",
      "id": "[completely; thoroughly]"
    }
  },
  {
    "id": "G0238",
    "p": "きれない",
    "m": {
      "en": "cannot finish; too much to",
      "zh-TW": "[cannot finish; too much to]",
      "zh-CN": "[cannot finish; too much to]",
      "ko": "[cannot finish; too much to]",
      "vi": "[cannot finish; too much to]",
      "id": "[cannot finish; too much to]"
    }
  },
  {
    "id": "G0239",
    "p": "っぱなし",
    "m": {
      "en": "leaving as is",
      "zh-TW": "[leaving as is]",
      "zh-CN": "[leaving as is]",
      "ko": "[leaving as is]",
      "vi": "[leaving as is]",
      "id": "[leaving as is]"
    }
  },
  {
    "id": "G0240",
    "p": "がち",
    "m": {
      "en": "tend to; prone to",
      "zh-TW": "[tend to; prone to]",
      "zh-CN": "[tend to; prone to]",
      "ko": "[tend to; prone to]",
      "vi": "[tend to; prone to]",
      "id": "[tend to; prone to]"
    }
  },
  {
    "id": "G0241",
    "p": "気味",
    "r": "ぎみ",
    "m": {
      "en": "somewhat; slightly",
      "zh-TW": "[somewhat; slightly]",
      "zh-CN": "[somewhat; slightly]",
      "ko": "[somewhat; slightly]",
      "vi": "[somewhat; slightly]",
      "id": "[somewhat; slightly]"
    }
  },
  {
    "id": "G0242",
    "p": "げ",
    "m": {
      "en": "seemingly; looking",
      "zh-TW": "[seemingly; looking]",
      "zh-CN": "[seemingly; looking]",
      "ko": "[seemingly; looking]",
      "vi": "[seemingly; looking]",
      "id": "[seemingly; looking]"
    }
  },
  {
    "id": "G0243",
    "p": "だらけ",
    "m": {
      "en": "full of; covered with",
      "zh-TW": "[full of; covered with]",
      "zh-CN": "[full of; covered with]",
      "ko": "[full of; covered with]",
      "vi": "[full of; covered with]",
      "id": "[full of; covered with]"
    }
  },
  {
    "id": "G0244",
    "p": "まみれ",
    "m": {
      "en": "covered with",
      "zh-TW": "[covered with]",
      "zh-CN": "[covered with]",
      "ko": "[covered with]",
      "vi": "[covered with]",
      "id": "[covered with]"
    }
  },
  {
    "id": "G0245",
    "p": "ずくめ",
    "m": {
      "en": "all; nothing but",
      "zh-TW": "[all; nothing but]",
      "zh-CN": "[all; nothing but]",
      "ko": "[all; nothing but]",
      "vi": "[all; nothing but]",
      "id": "[all; nothing but]"
    }
  },
  {
    "id": "G0246",
    "p": "めく",
    "m": {
      "en": "seem like; have the air of",
      "zh-TW": "[seem like; have the air of]",
      "zh-CN": "[seem like; have the air of]",
      "ko": "[seem like; have the air of]",
      "vi": "[seem like; have the air of]",
      "id": "[seem like; have the air of]"
    }
  },
  {
    "id": "G0247",
    "p": "にほかならない",
    "m": {
      "en": "nothing but; none other than",
      "zh-TW": "[nothing but; none other than]",
      "zh-CN": "[nothing but; none other than]",
      "ko": "[nothing but; none other than]",
      "vi": "[nothing but; none other than]",
      "id": "[nothing but; none other than]"
    }
  },
  {
    "id": "G0248",
    "p": "に過ぎない",
    "m": {
      "en": "merely; only",
      "zh-TW": "[merely; only]",
      "zh-CN": "[merely; only]",
      "ko": "[merely; only]",
      "vi": "[merely; only]",
      "id": "[merely; only]"
    }
  },
  {
    "id": "G0249",
    "p": "に限る",
    "m": {
      "en": "nothing better than",
      "zh-TW": "[nothing better than]",
      "zh-CN": "[nothing better than]",
      "ko": "[nothing better than]",
      "vi": "[nothing better than]",
      "id": "[nothing better than]"
    }
  },
  {
    "id": "G0250",
    "p": "に越したことはない",
    "m": {
      "en": "nothing better than",
      "zh-TW": "[nothing better than]",
      "zh-CN": "[nothing better than]",
      "ko": "[nothing better than]",
      "vi": "[nothing better than]",
      "id": "[nothing better than]"
    }
  }
];