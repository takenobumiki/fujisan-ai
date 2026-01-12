const N1_GRAMMAR = [
  {
    "id": "G0001",
    "p": "〜たりとも",
    "m": {
      "en": "not even",
      "zh-TW": "即使一點也",
      "zh-CN": "即使一点也",
      "ko": "~라도",
      "vi": "dù chỉ",
      "id": "sekalipun",
      "es": "not even",
      "pt": "not even"
    }
  },
  {
    "id": "G0002",
    "p": "〜といえども",
    "m": {
      "en": "even though",
      "zh-TW": "即使",
      "zh-CN": "即使",
      "ko": "~라 해도",
      "vi": "cho dù",
      "id": "meskipun",
      "es": "even though",
      "pt": "even though"
    }
  },
  {
    "id": "G0003",
    "p": "〜とあれば",
    "m": {
      "en": "if it is",
      "zh-TW": "如果是",
      "zh-CN": "如果是",
      "ko": "~라면",
      "vi": "nếu là",
      "id": "jika",
      "es": "if it is",
      "pt": "if it is"
    }
  },
  {
    "id": "G0004",
    "p": "〜とあって",
    "m": {
      "en": "because",
      "zh-TW": "因為是",
      "zh-CN": "因为是",
      "ko": "~라서",
      "vi": "vì là",
      "id": "karena",
      "es": "because",
      "pt": "because"
    }
  },
  {
    "id": "G0005",
    "p": "〜ならでは",
    "m": {
      "en": "unique to",
      "zh-TW": "只有才有",
      "zh-CN": "只有才有",
      "ko": "~만의",
      "vi": "chỉ có ở",
      "id": "khas",
      "es": "unique to",
      "pt": "unique to"
    }
  },
  {
    "id": "G0006",
    "p": "〜をおいて",
    "m": {
      "en": "except for",
      "zh-TW": "除了",
      "zh-CN": "除了",
      "ko": "~를 제외하고",
      "vi": "ngoài",
      "id": "selain",
      "es": "except for",
      "pt": "except for"
    }
  },
  {
    "id": "G0007",
    "p": "〜をもって",
    "m": {
      "en": "with",
      "zh-TW": "以",
      "zh-CN": "以",
      "ko": "~로써",
      "vi": "bằng",
      "id": "dengan",
      "es": "with",
      "pt": "with"
    }
  },
  {
    "id": "G0008",
    "p": "〜を限りに",
    "r": "〜をかぎりに",
    "m": {
      "en": "as of",
      "zh-TW": "到...為止",
      "zh-CN": "到...为止",
      "ko": "~를 마지막으로",
      "vi": "kể từ",
      "id": "mulai dari",
      "es": "as of",
      "pt": "as of"
    }
  },
  {
    "id": "G0009",
    "p": "〜を皮切りに",
    "r": "〜をかわきりに",
    "m": {
      "en": "starting with",
      "zh-TW": "以...為開端",
      "zh-CN": "以...为开端",
      "ko": "~를 시작으로",
      "vi": "bắt đầu từ",
      "id": "dimulai dari",
      "es": "starting with",
      "pt": "starting with"
    }
  },
  {
    "id": "G0010",
    "p": "〜を踏まえて",
    "m": {
      "en": "based on",
      "zh-TW": "根據",
      "zh-CN": "根据",
      "ko": "~를 바탕으로",
      "vi": "dựa trên",
      "id": "berdasarkan",
      "es": "based on",
      "pt": "based on"
    }
  },
  {
    "id": "G0011",
    "p": "〜とはいえ",
    "m": {
      "en": "although",
      "zh-TW": "雖說",
      "zh-CN": "虽说",
      "ko": "~라고는 해도",
      "vi": "tuy nói",
      "id": "meskipun",
      "es": "although",
      "pt": "although"
    }
  },
  {
    "id": "G0012",
    "p": "〜ながらも",
    "m": {
      "en": "while",
      "zh-TW": "雖然",
      "zh-CN": "虽然",
      "ko": "~하면서도",
      "vi": "dù",
      "id": "meskipun",
      "es": "while",
      "pt": "while"
    }
  },
  {
    "id": "G0013",
    "p": "〜つつも",
    "m": {
      "en": "although",
      "zh-TW": "雖然",
      "zh-CN": "虽然",
      "ko": "~하면서도",
      "vi": "dù",
      "id": "meskipun",
      "es": "although",
      "pt": "although"
    }
  },
  {
    "id": "G0014",
    "p": "〜にもかかわらず",
    "m": {
      "en": "despite",
      "zh-TW": "儘管",
      "zh-CN": "尽管",
      "ko": "~에도 불구하고",
      "vi": "mặc dù",
      "id": "meskipun",
      "es": "despite",
      "pt": "despite"
    }
  },
  {
    "id": "G0015",
    "p": "〜ものを",
    "m": {
      "en": "although",
      "zh-TW": "明明",
      "zh-CN": "明明",
      "ko": "~할 것을",
      "vi": "lẽ ra",
      "id": "padahal",
      "es": "although",
      "pt": "although"
    }
  },
  {
    "id": "G0016",
    "p": "〜であれ〜であれ",
    "m": {
      "en": "whether... or",
      "zh-TW": "無論...還是",
      "zh-CN": "无论...还是",
      "ko": "~이든 ~이든",
      "vi": "dù... hay",
      "id": "entah",
      "es": "whether... or",
      "pt": "whether... or"
    }
  },
  {
    "id": "G0017",
    "p": "〜にせよ〜にせよ",
    "m": {
      "en": "whether... or",
      "zh-TW": "無論...還是",
      "zh-CN": "无论...还是",
      "ko": "~이든 ~이든",
      "vi": "dù... hay",
      "id": "entah",
      "es": "whether... or",
      "pt": "whether... or"
    }
  },
  {
    "id": "G0018",
    "p": "〜ようと〜まいと",
    "m": {
      "en": "whether or not",
      "zh-TW": "不管...還是不",
      "zh-CN": "不管...还是不",
      "ko": "~하든 안 하든",
      "vi": "dù... hay không",
      "id": "entah",
      "es": "whether or not",
      "pt": "whether or not"
    }
  },
  {
    "id": "G0019",
    "p": "〜といい〜といい",
    "m": {
      "en": "both",
      "zh-TW": "無論...還是",
      "zh-CN": "无论...还是",
      "ko": "~도 ~도",
      "vi": "cả... lẫn",
      "id": "baik",
      "es": "both",
      "pt": "both"
    }
  },
  {
    "id": "G0020",
    "p": "〜なり〜なり",
    "m": {
      "en": "either... or",
      "zh-TW": "或...或",
      "zh-CN": "或...或",
      "ko": "~든지 ~든지",
      "vi": "hoặc",
      "id": "atau",
      "es": "either... or",
      "pt": "either... or"
    }
  },
  {
    "id": "G0021",
    "p": "〜ゆえに",
    "m": {
      "en": "because",
      "zh-TW": "因為",
      "zh-CN": "因为",
      "ko": "~때문에",
      "vi": "vì",
      "id": "karena",
      "es": "because",
      "pt": "because"
    }
  },
  {
    "id": "G0022",
    "p": "〜とあっては",
    "m": {
      "en": "since",
      "zh-TW": "既然",
      "zh-CN": "既然",
      "ko": "~라면",
      "vi": "nếu",
      "id": "karena",
      "es": "since",
      "pt": "since"
    }
  },
  {
    "id": "G0023",
    "p": "〜手前",
    "m": {
      "en": "since",
      "zh-TW": "因為",
      "zh-CN": "因为",
      "ko": "~한 이상",
      "vi": "vì đã",
      "id": "karena sudah",
      "es": "since",
      "pt": "since"
    }
  },
  {
    "id": "G0024",
    "p": "〜ばこそ",
    "m": {
      "en": "precisely because",
      "zh-TW": "正因為",
      "zh-CN": "正因为",
      "ko": "~이기 때문에",
      "vi": "chính vì",
      "id": "justru karena",
      "es": "precisely because",
      "pt": "precisely because"
    }
  },
  {
    "id": "G0025",
    "p": "〜からこそ",
    "m": {
      "en": "precisely because",
      "zh-TW": "正因為",
      "zh-CN": "正因为",
      "ko": "~이기 때문에",
      "vi": "chính vì",
      "id": "justru karena",
      "es": "precisely because",
      "pt": "precisely because"
    }
  },
  {
    "id": "G0026",
    "p": "〜だけに",
    "m": {
      "en": "as expected",
      "zh-TW": "正因為",
      "zh-CN": "正因为",
      "ko": "~만큼",
      "vi": "vì",
      "id": "justru",
      "es": "as expected",
      "pt": "as expected"
    }
  },
  {
    "id": "G0027",
    "p": "〜ものだから",
    "m": {
      "en": "because",
      "zh-TW": "因為",
      "zh-CN": "因为",
      "ko": "~이니까",
      "vi": "vì",
      "id": "karena",
      "es": "because",
      "pt": "because"
    }
  },
  {
    "id": "G0028",
    "p": "〜とばかりに",
    "m": {
      "en": "as if to say",
      "zh-TW": "好像在說",
      "zh-CN": "好像在说",
      "ko": "~라는 듯이",
      "vi": "như thể",
      "id": "seolah",
      "es": "as if to say",
      "pt": "as if to say"
    }
  },
  {
    "id": "G0029",
    "p": "〜ときたら",
    "m": {
      "en": "when it comes to",
      "zh-TW": "說到",
      "zh-CN": "说到",
      "ko": "~라고 하면",
      "vi": "nói đến",
      "id": "kalau",
      "es": "when it comes to",
      "pt": "when it comes to"
    }
  },
  {
    "id": "G0030",
    "p": "〜ことだし",
    "m": {
      "en": "since",
      "zh-TW": "既然",
      "zh-CN": "既然",
      "ko": "~하니까",
      "vi": "vì",
      "id": "karena",
      "es": "since",
      "pt": "since"
    }
  },
  {
    "id": "G0031",
    "p": "〜べく",
    "m": {
      "en": "in order to",
      "zh-TW": "為了",
      "zh-CN": "为了",
      "ko": "~하기 위해",
      "vi": "để",
      "id": "untuk",
      "es": "in order to",
      "pt": "in order to"
    }
  },
  {
    "id": "G0032",
    "p": "〜んがため",
    "m": {
      "en": "in order to",
      "zh-TW": "為了",
      "zh-CN": "为了",
      "ko": "~하기 위해",
      "vi": "để",
      "id": "demi",
      "es": "in order to",
      "pt": "in order to"
    }
  },
  {
    "id": "G0033",
    "p": "〜んばかりに",
    "m": {
      "en": "as if",
      "zh-TW": "幾乎要",
      "zh-CN": "几乎要",
      "ko": "~할 듯이",
      "vi": "như sắp",
      "id": "seakan",
      "es": "as if",
      "pt": "as if"
    }
  },
  {
    "id": "G0034",
    "p": "〜始末だ",
    "m": {
      "en": "end up",
      "zh-TW": "結果",
      "zh-CN": "结果",
      "ko": "~하는 꼴이다",
      "vi": "kết cục",
      "id": "akhirnya",
      "es": "end up",
      "pt": "end up"
    }
  },
  {
    "id": "G0035",
    "p": "〜に至る",
    "m": {
      "en": "lead to",
      "zh-TW": "導致",
      "zh-CN": "导致",
      "ko": "~에 이르다",
      "vi": "dẫn đến",
      "id": "sampai",
      "es": "lead to",
      "pt": "lead to"
    }
  },
  {
    "id": "G0036",
    "p": "〜に至っては",
    "m": {
      "en": "when it comes to",
      "zh-TW": "至於",
      "zh-CN": "至于",
      "ko": "~에 이르러서는",
      "vi": "đến",
      "id": "sampai",
      "es": "when it comes to",
      "pt": "when it comes to"
    }
  },
  {
    "id": "G0037",
    "p": "〜に至るまで",
    "m": {
      "en": "up to",
      "zh-TW": "直到",
      "zh-CN": "直到",
      "ko": "~에 이르기까지",
      "vi": "cho đến",
      "id": "hingga",
      "es": "up to",
      "pt": "up to"
    }
  },
  {
    "id": "G0038",
    "p": "〜とあいまって",
    "m": {
      "en": "combined with",
      "zh-TW": "加上",
      "zh-CN": "加上",
      "ko": "~와 어우러져",
      "vi": "kết hợp",
      "id": "bersama",
      "es": "combined with",
      "pt": "combined with"
    }
  },
  {
    "id": "G0039",
    "p": "〜のいたりだ",
    "r": "〜のいたりだ",
    "m": {
      "en": "height of",
      "zh-TW": "極度",
      "zh-CN": "极度",
      "ko": "~의 극치다",
      "vi": "cực điểm",
      "id": "puncak",
      "es": "height of",
      "pt": "height of"
    }
  },
  {
    "id": "G0040",
    "p": "〜の極みだ",
    "r": "〜のきわみだ",
    "m": {
      "en": "height of",
      "zh-TW": "極度",
      "zh-CN": "极度",
      "ko": "~의 극치다",
      "vi": "cực điểm",
      "id": "puncak",
      "es": "height of",
      "pt": "height of"
    }
  },
  {
    "id": "G0041",
    "p": "〜きらいがある",
    "m": {
      "en": "tend to",
      "zh-TW": "有...傾向",
      "zh-CN": "有...倾向",
      "ko": "~하는 경향이 있다",
      "vi": "có xu hướng",
      "id": "cenderung",
      "es": "tend to",
      "pt": "tend to"
    }
  },
  {
    "id": "G0042",
    "p": "〜めく",
    "m": {
      "en": "seem like",
      "zh-TW": "像...一樣",
      "zh-CN": "像...一样",
      "ko": "~스럽다",
      "vi": "có vẻ",
      "id": "tampak",
      "es": "seem like",
      "pt": "seem like"
    }
  },
  {
    "id": "G0043",
    "p": "〜たる",
    "m": {
      "en": "being",
      "zh-TW": "作為",
      "zh-CN": "作为",
      "ko": "~인",
      "vi": "là",
      "id": "sebagai",
      "es": "being",
      "pt": "being"
    }
  },
  {
    "id": "G0044",
    "p": "〜なる",
    "m": {
      "en": "being",
      "zh-TW": "...的",
      "zh-CN": "...的",
      "ko": "~한",
      "vi": "là",
      "id": "yang",
      "es": "being",
      "pt": "being"
    }
  },
  {
    "id": "G0045",
    "p": "〜極まる",
    "m": {
      "en": "extremely",
      "zh-TW": "極其",
      "zh-CN": "极其",
      "ko": "~하기 짝이 없다",
      "vi": "cực kỳ",
      "id": "sangat",
      "es": "extremely",
      "pt": "extremely"
    }
  },
  {
    "id": "G0046",
    "p": "〜極まりない",
    "m": {
      "en": "extremely",
      "zh-TW": "極其",
      "zh-CN": "极其",
      "ko": "~하기 짝이 없다",
      "vi": "cực kỳ",
      "id": "sangat",
      "es": "extremely",
      "pt": "extremely"
    }
  },
  {
    "id": "G0047",
    "p": "〜ずくめ",
    "m": {
      "en": "all",
      "zh-TW": "全部",
      "zh-CN": "全部",
      "ko": "~일색",
      "vi": "toàn",
      "id": "serba",
      "es": "all",
      "pt": "all"
    }
  },
  {
    "id": "G0048",
    "p": "〜まみれ",
    "m": {
      "en": "covered with",
      "zh-TW": "滿身",
      "zh-CN": "满身",
      "ko": "~범벅",
      "vi": "đầy",
      "id": "berlumuran",
      "es": "covered with",
      "pt": "covered with"
    }
  },
  {
    "id": "G0049",
    "p": "〜ずにはおかない",
    "m": {
      "en": "cannot help",
      "zh-TW": "一定會",
      "zh-CN": "一定会",
      "ko": "~하지 않고는 못 배긴다",
      "vi": "không thể không",
      "id": "pasti",
      "es": "cannot help",
      "pt": "cannot help"
    }
  },
  {
    "id": "G0050",
    "p": "〜ないではおかない",
    "m": {
      "en": "cannot help",
      "zh-TW": "一定會",
      "zh-CN": "一定会",
      "ko": "~하지 않고는 못 배긴다",
      "vi": "không thể không",
      "id": "pasti",
      "es": "cannot help",
      "pt": "cannot help"
    }
  },
  {
    "id": "G0051",
    "p": "〜まじき",
    "m": {
      "en": "should not",
      "zh-TW": "不應該",
      "zh-CN": "不应该",
      "ko": "~해서는 안 될",
      "vi": "không nên",
      "id": "tidak boleh",
      "es": "should not",
      "pt": "should not"
    }
  },
  {
    "id": "G0052",
    "p": "〜べからず",
    "m": {
      "en": "must not",
      "zh-TW": "禁止",
      "zh-CN": "禁止",
      "ko": "~해서는 안 된다",
      "vi": "cấm",
      "id": "dilarang",
      "es": "must not",
      "pt": "must not"
    }
  },
  {
    "id": "G0053",
    "p": "〜べからざる",
    "m": {
      "en": "must not",
      "zh-TW": "不可",
      "zh-CN": "不可",
      "ko": "~해서는 안 되는",
      "vi": "không được",
      "id": "tidak boleh",
      "es": "must not",
      "pt": "must not"
    }
  },
  {
    "id": "G0054",
    "p": "〜かたがた",
    "m": {
      "en": "while",
      "zh-TW": "順便",
      "zh-CN": "顺便",
      "ko": "~겸",
      "vi": "nhân tiện",
      "id": "sambil",
      "es": "while",
      "pt": "while"
    }
  },
  {
    "id": "G0055",
    "p": "〜がてら",
    "m": {
      "en": "while",
      "zh-TW": "順便",
      "zh-CN": "顺便",
      "ko": "~하는 김에",
      "vi": "nhân tiện",
      "id": "sambil",
      "es": "while",
      "pt": "while"
    }
  },
  {
    "id": "G0056",
    "p": "〜かたわら",
    "m": {
      "en": "while",
      "zh-TW": "一邊",
      "zh-CN": "一边",
      "ko": "~하는 한편",
      "vi": "bên cạnh",
      "id": "di samping",
      "es": "while",
      "pt": "while"
    }
  },
  {
    "id": "G0057",
    "p": "〜そばから",
    "m": {
      "en": "as soon as",
      "zh-TW": "剛...就",
      "zh-CN": "刚...就",
      "ko": "~하는 족족",
      "vi": "vừa... đã",
      "id": "begitu",
      "es": "as soon as",
      "pt": "as soon as"
    }
  },
  {
    "id": "G0058",
    "p": "〜や否や",
    "m": {
      "en": "as soon as",
      "zh-TW": "一...就",
      "zh-CN": "一...就",
      "ko": "~하자마자",
      "vi": "vừa... đã",
      "id": "begitu",
      "es": "as soon as",
      "pt": "as soon as"
    }
  },
  {
    "id": "G0059",
    "p": "〜なり",
    "m": {
      "en": "as soon as",
      "zh-TW": "一...就",
      "zh-CN": "一...就",
      "ko": "~하자마자",
      "vi": "vừa... liền",
      "id": "begitu",
      "es": "as soon as",
      "pt": "as soon as"
    }
  },
  {
    "id": "G0060",
    "p": "〜が早いか",
    "m": {
      "en": "no sooner than",
      "zh-TW": "剛...就",
      "zh-CN": "刚...就",
      "ko": "~하기가 무섭게",
      "vi": "vừa... đã",
      "id": "begitu",
      "es": "no sooner than",
      "pt": "no sooner than"
    }
  },
  {
    "id": "G0061",
    "p": "〜ないまでも",
    "m": {
      "en": "even if not",
      "zh-TW": "即使不",
      "zh-CN": "即使不",
      "ko": "~는 아니더라도",
      "vi": "dù không",
      "id": "meskipun tidak",
      "es": "even if not",
      "pt": "even if not"
    }
  },
  {
    "id": "G0062",
    "p": "〜までもない",
    "m": {
      "en": "no need to",
      "zh-TW": "不必",
      "zh-CN": "不必",
      "ko": "~할 것까지 없다",
      "vi": "không cần",
      "id": "tidak perlu",
      "es": "no need to",
      "pt": "no need to"
    }
  },
  {
    "id": "G0063",
    "p": "〜ずにはすまない",
    "m": {
      "en": "must",
      "zh-TW": "不能不",
      "zh-CN": "不能不",
      "ko": "~하지 않으면 안 된다",
      "vi": "buộc phải",
      "id": "harus",
      "es": "must",
      "pt": "must"
    }
  },
  {
    "id": "G0064",
    "p": "〜ないではすまない",
    "m": {
      "en": "must",
      "zh-TW": "不能不",
      "zh-CN": "不能不",
      "ko": "~하지 않으면 안 된다",
      "vi": "buộc phải",
      "id": "harus",
      "es": "must",
      "pt": "must"
    }
  },
  {
    "id": "G0065",
    "p": "〜を禁じ得ない",
    "m": {
      "en": "cannot help",
      "zh-TW": "禁不住",
      "zh-CN": "禁不住",
      "ko": "~을 금할 수 없다",
      "vi": "không thể không",
      "id": "tidak bisa tidak",
      "es": "cannot help",
      "pt": "cannot help"
    }
  },
  {
    "id": "G0066",
    "p": "〜を余儀なくされる",
    "m": {
      "en": "be forced to",
      "zh-TW": "被迫",
      "zh-CN": "被迫",
      "ko": "~을 할 수밖에 없다",
      "vi": "buộc phải",
      "id": "terpaksa",
      "es": "be forced to",
      "pt": "be forced to"
    }
  },
  {
    "id": "G0067",
    "p": "〜ずじまいだ",
    "m": {
      "en": "end up not",
      "zh-TW": "結果沒有",
      "zh-CN": "结果没有",
      "ko": "~하지 않은 채 끝나다",
      "vi": "kết cục không",
      "id": "akhirnya tidak",
      "es": "end up not",
      "pt": "end up not"
    }
  },
  {
    "id": "G0068",
    "p": "〜ようにも〜ない",
    "m": {
      "en": "cannot even if want",
      "zh-TW": "想...也不能",
      "zh-CN": "想...也不能",
      "ko": "~하려고 해도 ~할 수 없다",
      "vi": "muốn cũng không",
      "id": "mau juga tidak bisa",
      "es": "cannot even if want",
      "pt": "cannot even if want"
    }
  },
  {
    "id": "G0069",
    "p": "〜に〜ない",
    "m": {
      "en": "cannot",
      "zh-TW": "不能",
      "zh-CN": "不能",
      "ko": "~하려고 해도 ~할 수 없다",
      "vi": "không thể",
      "id": "tidak bisa",
      "es": "cannot",
      "pt": "cannot"
    }
  },
  {
    "id": "G0070",
    "p": "〜ともなく",
    "m": {
      "en": "without intending",
      "zh-TW": "不經意地",
      "zh-CN": "不经意地",
      "ko": "~ㄴ지도 모르게",
      "vi": "vô tình",
      "id": "tanpa sengaja",
      "es": "without intending",
      "pt": "without intending"
    }
  },
  {
    "id": "G0071",
    "p": "〜はおろか",
    "m": {
      "en": "let alone",
      "zh-TW": "別說",
      "zh-CN": "别说",
      "ko": "~은커녕",
      "vi": "chưa nói đến",
      "id": "apalagi",
      "es": "let alone",
      "pt": "let alone"
    }
  },
  {
    "id": "G0072",
    "p": "〜もさることながら",
    "m": {
      "en": "not only",
      "zh-TW": "不僅",
      "zh-CN": "不仅",
      "ko": "~도 그렇지만",
      "vi": "không chỉ",
      "id": "bukan hanya",
      "es": "not only",
      "pt": "not only"
    }
  },
  {
    "id": "G0073",
    "p": "〜ならいざ知らず",
    "m": {
      "en": "if it were",
      "zh-TW": "如果是...還好",
      "zh-CN": "如果是...还好",
      "ko": "~라면 몰라도",
      "vi": "nếu là... thì khác",
      "id": "kalau... sih",
      "es": "if it were",
      "pt": "if it were"
    }
  },
  {
    "id": "G0074",
    "p": "〜はさておき",
    "m": {
      "en": "setting aside",
      "zh-TW": "暫且不論",
      "zh-CN": "暂且不论",
      "ko": "~는 제쳐두고",
      "vi": "gác lại",
      "id": "terlepas dari",
      "es": "setting aside",
      "pt": "setting aside"
    }
  },
  {
    "id": "G0075",
    "p": "〜はともかく",
    "m": {
      "en": "aside from",
      "zh-TW": "姑且不論",
      "zh-CN": "姑且不论",
      "ko": "~는 그렇다 치고",
      "vi": "bỏ qua",
      "id": "terlepas dari",
      "es": "aside from",
      "pt": "aside from"
    }
  },
  {
    "id": "G0076",
    "p": "〜ともあろう",
    "m": {
      "en": "someone of",
      "zh-TW": "像...這樣的",
      "zh-CN": "像...这样的",
      "ko": "~인",
      "vi": "là",
      "id": "sebagai",
      "es": "someone of",
      "pt": "someone of"
    }
  },
  {
    "id": "G0077",
    "p": "〜たるもの",
    "m": {
      "en": "as befits",
      "zh-TW": "身為",
      "zh-CN": "身为",
      "ko": "~인 사람",
      "vi": "là",
      "id": "sebagai",
      "es": "as befits",
      "pt": "as befits"
    }
  },
  {
    "id": "G0078",
    "p": "〜にあって",
    "m": {
      "en": "in",
      "zh-TW": "在...中",
      "zh-CN": "在...中",
      "ko": "~에서",
      "vi": "trong",
      "id": "di",
      "es": "in",
      "pt": "in"
    }
  },
  {
    "id": "G0079",
    "p": "〜にあっても",
    "m": {
      "en": "even in",
      "zh-TW": "即使在",
      "zh-CN": "即使在",
      "ko": "~에서도",
      "vi": "ngay cả trong",
      "id": "bahkan di",
      "es": "even in",
      "pt": "even in"
    }
  },
  {
    "id": "G0080",
    "p": "〜にひきかえ",
    "m": {
      "en": "in contrast",
      "zh-TW": "與...相反",
      "zh-CN": "与...相反",
      "ko": "~에 비해",
      "vi": "trái với",
      "id": "berbeda dengan",
      "es": "in contrast",
      "pt": "in contrast"
    }
  },
  {
    "id": "G0081",
    "p": "〜に足る",
    "m": {
      "en": "worth",
      "zh-TW": "值得",
      "zh-CN": "值得",
      "ko": "~할 만하다",
      "vi": "đáng",
      "id": "layak",
      "es": "worth",
      "pt": "worth"
    }
  },
  {
    "id": "G0082",
    "p": "〜に堪える",
    "m": {
      "en": "can bear",
      "zh-TW": "值得",
      "zh-CN": "值得",
      "ko": "~할 만하다",
      "vi": "đáng",
      "id": "layak",
      "es": "can bear",
      "pt": "can bear"
    }
  },
  {
    "id": "G0083",
    "p": "〜に堪えない",
    "m": {
      "en": "cannot bear",
      "zh-TW": "不堪",
      "zh-CN": "不堪",
      "ko": "~할 수 없다",
      "vi": "không thể",
      "id": "tidak tahan",
      "es": "cannot bear",
      "pt": "cannot bear"
    }
  },
  {
    "id": "G0084",
    "p": "〜にかたくない",
    "m": {
      "en": "not hard to",
      "zh-TW": "不難",
      "zh-CN": "不难",
      "ko": "~하기 어렵지 않다",
      "vi": "không khó",
      "id": "tidak sulit",
      "es": "not hard to",
      "pt": "not hard to"
    }
  },
  {
    "id": "G0085",
    "p": "〜てやまない",
    "m": {
      "en": "sincerely",
      "zh-TW": "衷心",
      "zh-CN": "衷心",
      "ko": "~해 마지않다",
      "vi": "không ngừng",
      "id": "sangat",
      "es": "sincerely",
      "pt": "sincerely"
    }
  },
  {
    "id": "G0086",
    "p": "〜限りだ",
    "r": "〜かぎりだ",
    "m": {
      "en": "extremely",
      "zh-TW": "非常",
      "zh-CN": "非常",
      "ko": "~하기 그지없다",
      "vi": "vô cùng",
      "id": "sangat",
      "es": "extremely",
      "pt": "extremely"
    }
  },
  {
    "id": "G0087",
    "p": "〜のいたり",
    "r": "〜のいたり",
    "m": {
      "en": "height of",
      "zh-TW": "極度",
      "zh-CN": "极度",
      "ko": "~의 극치",
      "vi": "đỉnh cao",
      "id": "puncak",
      "es": "height of",
      "pt": "height of"
    }
  },
  {
    "id": "G0088",
    "p": "〜たら〜たで",
    "m": {
      "en": "even if",
      "zh-TW": "即使",
      "zh-CN": "即使",
      "ko": "~하면 ~한 대로",
      "vi": "nếu... thì",
      "id": "kalau",
      "es": "even if",
      "pt": "even if"
    }
  },
  {
    "id": "G0089",
    "p": "〜ば〜たで",
    "m": {
      "en": "even if",
      "zh-TW": "即使",
      "zh-CN": "即使",
      "ko": "~하면 ~한 대로",
      "vi": "nếu... thì",
      "id": "kalau",
      "es": "even if",
      "pt": "even if"
    }
  },
  {
    "id": "G0090",
    "p": "〜なら〜で",
    "m": {
      "en": "if... then",
      "zh-TW": "如果...那麼",
      "zh-CN": "如果...那么",
      "ko": "~라면 ~대로",
      "vi": "nếu... thì",
      "id": "kalau",
      "es": "if... then",
      "pt": "if... then"
    }
  },
  {
    "id": "G0091",
    "p": "〜てからというもの",
    "m": {
      "en": "ever since",
      "zh-TW": "自從",
      "zh-CN": "自从",
      "ko": "~한 이후로",
      "vi": "kể từ",
      "id": "sejak",
      "es": "ever since",
      "pt": "ever since"
    }
  },
  {
    "id": "G0092",
    "p": "〜ようものなら",
    "m": {
      "en": "if... were to",
      "zh-TW": "萬一",
      "zh-CN": "万一",
      "ko": "~하기라도 하면",
      "vi": "nếu mà",
      "id": "jika",
      "es": "if... were to",
      "pt": "if... were to"
    }
  },
  {
    "id": "G0093",
    "p": "〜ようにも",
    "m": {
      "en": "even if want to",
      "zh-TW": "即使想",
      "zh-CN": "即使想",
      "ko": "~하려고 해도",
      "vi": "dù muốn",
      "id": "meskipun mau",
      "es": "even if want to",
      "pt": "even if want to"
    }
  },
  {
    "id": "G0094",
    "p": "〜にして",
    "m": {
      "en": "being",
      "zh-TW": "到了",
      "zh-CN": "到了",
      "ko": "~에서야",
      "vi": "ở",
      "id": "pada",
      "es": "being",
      "pt": "being"
    }
  },
  {
    "id": "G0095",
    "p": "〜にしてからが",
    "m": {
      "en": "even",
      "zh-TW": "連",
      "zh-CN": "连",
      "ko": "~조차",
      "vi": "ngay cả",
      "id": "bahkan",
      "es": "even",
      "pt": "even"
    }
  },
  {
    "id": "G0096",
    "p": "〜まで",
    "m": {
      "en": "even",
      "zh-TW": "連",
      "zh-CN": "连",
      "ko": "~까지",
      "vi": "ngay cả",
      "id": "bahkan",
      "es": "even",
      "pt": "even"
    }
  },
  {
    "id": "G0097",
    "p": "〜までして",
    "m": {
      "en": "going so far as",
      "zh-TW": "甚至",
      "zh-CN": "甚至",
      "ko": "~까지 해서",
      "vi": "đến mức",
      "id": "sampai",
      "es": "going so far as",
      "pt": "going so far as"
    }
  },
  {
    "id": "G0098",
    "p": "〜だに",
    "m": {
      "en": "even",
      "zh-TW": "連...都",
      "zh-CN": "连...都",
      "ko": "~조차",
      "vi": "ngay cả",
      "id": "bahkan",
      "es": "even",
      "pt": "even"
    }
  },
  {
    "id": "G0099",
    "p": "〜すら",
    "m": {
      "en": "even",
      "zh-TW": "連",
      "zh-CN": "连",
      "ko": "~조차",
      "vi": "ngay cả",
      "id": "bahkan",
      "es": "even",
      "pt": "even"
    }
  },
  {
    "id": "G0100",
    "p": "〜でなくてなんだろう",
    "m": {
      "en": "if not... what is",
      "zh-TW": "不是...是什麼",
      "zh-CN": "不是...是什么",
      "ko": "~이 아니고 뭐란 말인가",
      "vi": "nếu không phải... thì là gì",
      "id": "kalau bukan",
      "es": "if not... what is",
      "pt": "if not... what is"
    }
  },
  {
    "id": "G0101",
    "p": "〜たまえ",
    "m": {
      "en": "do (command)",
      "zh-TW": "請（命令）",
      "zh-CN": "请（命令）",
      "ko": "~하게",
      "vi": "hãy",
      "id": "silakan",
      "es": "do (command)",
      "pt": "do (command)"
    }
  },
  {
    "id": "G0102",
    "p": "〜給え",
    "m": {
      "en": "do (command)",
      "zh-TW": "請（命令）",
      "zh-CN": "请（命令）",
      "ko": "~하게",
      "vi": "hãy",
      "id": "silakan",
      "es": "do (command)",
      "pt": "do (command)"
    }
  },
  {
    "id": "G0103",
    "p": "〜かし",
    "m": {
      "en": "I wish",
      "zh-TW": "希望",
      "zh-CN": "希望",
      "ko": "~했으면",
      "vi": "ước gì",
      "id": "seandainya",
      "es": "I wish",
      "pt": "I wish"
    }
  },
  {
    "id": "G0104",
    "p": "〜ものか",
    "m": {
      "en": "never",
      "zh-TW": "絕不",
      "zh-CN": "绝不",
      "ko": "~할 리가 있나",
      "vi": "làm gì",
      "id": "tidak mungkin",
      "es": "never",
      "pt": "never"
    }
  },
  {
    "id": "G0106",
    "p": "〜にあるまじき",
    "m": {
      "en": "unbecoming of",
      "zh-TW": "不應有",
      "zh-CN": "不应有",
      "ko": "~답지 않은",
      "vi": "không xứng đáng",
      "id": "tidak pantas",
      "es": "unbecoming of",
      "pt": "unbecoming of"
    }
  },
  {
    "id": "G0107",
    "p": "〜あっての",
    "m": {
      "en": "thanks to",
      "zh-TW": "因為有",
      "zh-CN": "因为有",
      "ko": "~가 있어야",
      "vi": "nhờ có",
      "id": "berkat ada",
      "es": "thanks to",
      "pt": "thanks to"
    }
  },
  {
    "id": "G0108",
    "p": "〜をものともせず",
    "m": {
      "en": "despite",
      "zh-TW": "不顧",
      "zh-CN": "不顾",
      "ko": "~을 개의치 않고",
      "vi": "bất chấp",
      "id": "meskipun",
      "es": "despite",
      "pt": "despite"
    }
  },
  {
    "id": "G0109",
    "p": "〜を押して",
    "m": {
      "en": "despite",
      "zh-TW": "不顧",
      "zh-CN": "不顾",
      "ko": "~을 무릅쓰고",
      "vi": "bất chấp",
      "id": "meskipun",
      "es": "despite",
      "pt": "despite"
    }
  },
  {
    "id": "G0110",
    "p": "〜なくして",
    "m": {
      "en": "without",
      "zh-TW": "沒有...就不",
      "zh-CN": "没有...就不",
      "ko": "~없이는",
      "vi": "không có... thì",
      "id": "tanpa",
      "es": "without",
      "pt": "without"
    }
  },
  {
    "id": "G0111",
    "p": "〜いかんによらず",
    "m": {
      "en": "regardless of",
      "zh-TW": "不論",
      "zh-CN": "不论",
      "ko": "~에 상관없이",
      "vi": "bất kể",
      "id": "terlepas dari",
      "es": "regardless of",
      "pt": "regardless of"
    }
  },
  {
    "id": "G0112",
    "p": "〜いかんによっては",
    "m": {
      "en": "depending on",
      "zh-TW": "根據",
      "zh-CN": "根据",
      "ko": "~에 따라서는",
      "vi": "tùy theo",
      "id": "tergantung",
      "es": "depending on",
      "pt": "depending on"
    }
  },
  {
    "id": "G0113",
    "p": "〜いかんにかかわらず",
    "m": {
      "en": "regardless of",
      "zh-TW": "不論",
      "zh-CN": "不论",
      "ko": "~에 관계없이",
      "vi": "bất kể",
      "id": "terlepas dari",
      "es": "regardless of",
      "pt": "regardless of"
    }
  },
  {
    "id": "G0114",
    "p": "〜いかんだ",
    "m": {
      "en": "depends on",
      "zh-TW": "取決於",
      "zh-CN": "取决于",
      "ko": "~에 달려 있다",
      "vi": "phụ thuộc vào",
      "id": "tergantung",
      "es": "depends on",
      "pt": "depends on"
    }
  },
  {
    "id": "G0115",
    "p": "〜と思いきや",
    "m": {
      "en": "contrary to",
      "zh-TW": "原以為",
      "zh-CN": "原以为",
      "ko": "~인가 했더니",
      "vi": "tưởng là",
      "id": "ternyata",
      "es": "contrary to",
      "pt": "contrary to"
    }
  },
  {
    "id": "G0116",
    "p": "〜かと思うと",
    "m": {
      "en": "no sooner than",
      "zh-TW": "剛...就",
      "zh-CN": "刚...就",
      "ko": "~인가 싶으면",
      "vi": "vừa",
      "id": "begitu",
      "es": "no sooner than",
      "pt": "no sooner than"
    }
  },
  {
    "id": "G0117",
    "p": "〜かと思えば",
    "m": {
      "en": "just when",
      "zh-TW": "正當以為",
      "zh-CN": "正当以为",
      "ko": "~인가 했더니",
      "vi": "tưởng",
      "id": "kira",
      "es": "just when",
      "pt": "just when"
    }
  },
  {
    "id": "G0118",
    "p": "〜たところで",
    "m": {
      "en": "even if",
      "zh-TW": "即使",
      "zh-CN": "即使",
      "ko": "~한들",
      "vi": "cho dù",
      "id": "meskipun",
      "es": "even if",
      "pt": "even if"
    }
  },
  {
    "id": "G0119",
    "p": "〜ところを",
    "m": {
      "en": "when",
      "zh-TW": "正當",
      "zh-CN": "正当",
      "ko": "~는 것을",
      "vi": "đang lúc",
      "id": "saat",
      "es": "when",
      "pt": "when"
    }
  },
  {
    "id": "G0120",
    "p": "〜とは",
    "m": {
      "en": "that",
      "zh-TW": "竟然",
      "zh-CN": "竟然",
      "ko": "~라니",
      "vi": "rằng",
      "id": "bahwa",
      "es": "that",
      "pt": "that"
    }
  },
  {
    "id": "G0121",
    "p": "〜ずにはいられない",
    "m": {
      "en": "cannot help",
      "zh-TW": "不能不",
      "zh-CN": "不能不",
      "ko": "~하지 않을 수 없다",
      "vi": "không thể không",
      "id": "tidak bisa tidak",
      "es": "cannot help",
      "pt": "cannot help"
    }
  },
  {
    "id": "G0122",
    "p": "〜ないではいられない",
    "m": {
      "en": "cannot help",
      "zh-TW": "不能不",
      "zh-CN": "不能不",
      "ko": "~하지 않을 수 없다",
      "vi": "không thể không",
      "id": "tidak bisa tidak",
      "es": "cannot help",
      "pt": "cannot help"
    }
  },
  {
    "id": "G0123",
    "p": "〜てはいられない",
    "m": {
      "en": "cannot remain",
      "zh-TW": "不能一直",
      "zh-CN": "不能一直",
      "ko": "~하고 있을 수 없다",
      "vi": "không thể cứ",
      "id": "tidak bisa terus",
      "es": "cannot remain",
      "pt": "cannot remain"
    }
  },
  {
    "id": "G0124",
    "p": "〜てはかなわない",
    "m": {
      "en": "unbearable",
      "zh-TW": "受不了",
      "zh-CN": "受不了",
      "ko": "~해서는 못 견디겠다",
      "vi": "chịu không nổi",
      "id": "tidak tahan",
      "es": "unbearable",
      "pt": "unbearable"
    }
  },
  {
    "id": "G0125",
    "p": "〜てはならない",
    "m": {
      "en": "must not",
      "zh-TW": "不能",
      "zh-CN": "不能",
      "ko": "~해서는 안 된다",
      "vi": "không được",
      "id": "tidak boleh",
      "es": "must not",
      "pt": "must not"
    }
  },
  {
    "id": "G0126",
    "p": "〜てしかるべきだ",
    "m": {
      "en": "should",
      "zh-TW": "應該",
      "zh-CN": "应该",
      "ko": "~해야 마땅하다",
      "vi": "nên",
      "id": "seharusnya",
      "es": "should",
      "pt": "should"
    }
  },
  {
    "id": "G0127",
    "p": "〜ないものか",
    "m": {
      "en": "I wish",
      "zh-TW": "希望能",
      "zh-CN": "希望能",
      "ko": "~하면 안 될까",
      "vi": "không thể... sao",
      "id": "tidak bisakah",
      "es": "I wish",
      "pt": "I wish"
    }
  },
  {
    "id": "G0128",
    "p": "〜ないものでもない",
    "m": {
      "en": "not impossible",
      "zh-TW": "並非不可能",
      "zh-CN": "并非不可能",
      "ko": "~하지 못할 것도 없다",
      "vi": "không phải không",
      "id": "bukan tidak mungkin",
      "es": "not impossible",
      "pt": "not impossible"
    }
  },
  {
    "id": "G0129",
    "p": "〜なくはない",
    "m": {
      "en": "not that... not",
      "zh-TW": "並非沒有",
      "zh-CN": "并非没有",
      "ko": "~하지 않는 것은 아니다",
      "vi": "không phải không",
      "id": "bukan tidak",
      "es": "not that... not",
      "pt": "not that... not"
    }
  },
  {
    "id": "G0130",
    "p": "〜なくもない",
    "m": {
      "en": "not entirely without",
      "zh-TW": "並非完全沒有",
      "zh-CN": "并非完全没有",
      "ko": "~하지 않는 것도 아니다",
      "vi": "không hẳn không",
      "id": "tidak sepenuhnya tidak",
      "es": "not entirely without",
      "pt": "not entirely without"
    }
  },
  {
    "id": "G0131",
    "p": "〜に至って",
    "m": {
      "en": "now that",
      "zh-TW": "到了",
      "zh-CN": "到了",
      "ko": "~에 이르러",
      "vi": "đến lúc",
      "id": "sampai",
      "es": "now that",
      "pt": "now that"
    }
  },
  {
    "id": "G0132",
    "p": "〜につけ",
    "m": {
      "en": "whenever",
      "zh-TW": "每當",
      "zh-CN": "每当",
      "ko": "~할 때마다",
      "vi": "mỗi khi",
      "id": "setiap kali",
      "es": "whenever",
      "pt": "whenever"
    }
  },
  {
    "id": "G0133",
    "p": "〜につけ〜につけ",
    "m": {
      "en": "whether... or",
      "zh-TW": "不論...還是",
      "zh-CN": "不论...还是",
      "ko": "~할 때나 ~할 때나",
      "vi": "dù... hay",
      "id": "entah",
      "es": "whether... or",
      "pt": "whether... or"
    }
  },
  {
    "id": "G0135",
    "p": "〜にもまして",
    "m": {
      "en": "more than",
      "zh-TW": "更加",
      "zh-CN": "更加",
      "ko": "~보다 더",
      "vi": "hơn cả",
      "id": "lebih dari",
      "es": "more than",
      "pt": "more than"
    }
  },
  {
    "id": "G0136",
    "p": "〜に越したことはない",
    "m": {
      "en": "best to",
      "zh-TW": "最好",
      "zh-CN": "最好",
      "ko": "~하는 게 제일이다",
      "vi": "tốt nhất",
      "id": "paling baik",
      "es": "best to",
      "pt": "best to"
    }
  },
  {
    "id": "G0137",
    "p": "〜までだ",
    "m": {
      "en": "just",
      "zh-TW": "只是",
      "zh-CN": "只是",
      "ko": "~뿐이다",
      "vi": "chỉ",
      "id": "hanya",
      "es": "just",
      "pt": "just"
    }
  },
  {
    "id": "G0138",
    "p": "〜までのことだ",
    "m": {
      "en": "just",
      "zh-TW": "只好",
      "zh-CN": "只好",
      "ko": "~할 뿐이다",
      "vi": "chỉ",
      "id": "hanya",
      "es": "just",
      "pt": "just"
    }
  },
  {
    "id": "G0139",
    "p": "〜までもなく",
    "m": {
      "en": "needless to say",
      "zh-TW": "不用說",
      "zh-CN": "不用说",
      "ko": "~할 것도 없이",
      "vi": "không cần",
      "id": "tidak perlu",
      "es": "needless to say",
      "pt": "needless to say"
    }
  },
  {
    "id": "G0140",
    "p": "〜ならともかく",
    "m": {
      "en": "if... then fine",
      "zh-TW": "如果是...還好",
      "zh-CN": "如果是...还好",
      "ko": "~라면 몰라도",
      "vi": "nếu là... thì",
      "id": "kalau... sih",
      "es": "if... then fine",
      "pt": "if... then fine"
    }
  },
  {
    "id": "G0141",
    "p": "〜いかん",
    "m": {
      "en": "depending on",
      "zh-TW": "看...如何",
      "zh-CN": "看...如何",
      "ko": "~여하에",
      "vi": "tùy theo",
      "id": "tergantung",
      "es": "depending on",
      "pt": "depending on"
    }
  },
  {
    "id": "G0142",
    "p": "〜かぎりだ",
    "m": {
      "en": "extremely",
      "zh-TW": "非常",
      "zh-CN": "非常",
      "ko": "~하기 그지없다",
      "vi": "vô cùng",
      "id": "sangat",
      "es": "extremely",
      "pt": "extremely"
    }
  },
  {
    "id": "G0143",
    "p": "〜がゆえに",
    "m": {
      "en": "because",
      "zh-TW": "因為",
      "zh-CN": "因为",
      "ko": "~때문에",
      "vi": "vì",
      "id": "karena",
      "es": "because",
      "pt": "because"
    }
  },
  {
    "id": "G0144",
    "p": "〜ごとき",
    "m": {
      "en": "like",
      "zh-TW": "像",
      "zh-CN": "像",
      "ko": "~같은",
      "vi": "như",
      "id": "seperti",
      "es": "like",
      "pt": "like"
    }
  },
  {
    "id": "G0145",
    "p": "〜ごとく",
    "m": {
      "en": "like",
      "zh-TW": "像...一樣",
      "zh-CN": "像...一样",
      "ko": "~처럼",
      "vi": "như",
      "id": "seperti",
      "es": "like",
      "pt": "like"
    }
  },
  {
    "id": "G0146",
    "p": "〜こととて",
    "m": {
      "en": "since",
      "zh-TW": "因為",
      "zh-CN": "因为",
      "ko": "~이기 때문에",
      "vi": "vì",
      "id": "karena",
      "es": "since",
      "pt": "since"
    }
  },
  {
    "id": "G0147",
    "p": "〜しまつだ",
    "m": {
      "en": "end up",
      "zh-TW": "結果",
      "zh-CN": "结果",
      "ko": "~하는 꼴이다",
      "vi": "kết cục",
      "id": "akhirnya",
      "es": "end up",
      "pt": "end up"
    }
  },
  {
    "id": "G0148",
    "p": "〜ずして",
    "m": {
      "en": "without",
      "zh-TW": "沒有",
      "zh-CN": "没有",
      "ko": "~하지 않고",
      "vi": "mà không",
      "id": "tanpa",
      "es": "without",
      "pt": "without"
    }
  },
  {
    "id": "G0149",
    "p": "〜たが最後",
    "m": {
      "en": "once... then",
      "zh-TW": "一旦",
      "zh-CN": "一旦",
      "ko": "~하면 그것으로 끝",
      "vi": "một khi đã",
      "id": "begitu",
      "es": "once... then",
      "pt": "once... then"
    }
  },
  {
    "id": "G0150",
    "p": "〜たら最後",
    "m": {
      "en": "once... then",
      "zh-TW": "一旦",
      "zh-CN": "一旦",
      "ko": "~하면 끝",
      "vi": "một khi đã",
      "id": "begitu",
      "es": "once... then",
      "pt": "once... then"
    }
  },
  {
    "id": "G0151",
    "p": "〜であれ",
    "m": {
      "en": "even if",
      "zh-TW": "即使",
      "zh-CN": "即使",
      "ko": "~이든",
      "vi": "dù",
      "id": "meskipun",
      "es": "even if",
      "pt": "even if"
    }
  },
  {
    "id": "G0152",
    "p": "〜とて",
    "m": {
      "en": "even if",
      "zh-TW": "即使",
      "zh-CN": "即使",
      "ko": "~라고 해도",
      "vi": "cho dù",
      "id": "meskipun",
      "es": "even if",
      "pt": "even if"
    }
  },
  {
    "id": "G0154",
    "p": "〜べし",
    "m": {
      "en": "should",
      "zh-TW": "應該",
      "zh-CN": "应该",
      "ko": "~해야 한다",
      "vi": "nên",
      "id": "harus",
      "es": "should",
      "pt": "should"
    }
  },
  {
    "id": "G0155",
    "p": "〜まい",
    "m": {
      "en": "will not",
      "zh-TW": "不會",
      "zh-CN": "不会",
      "ko": "~하지 않겠다",
      "vi": "sẽ không",
      "id": "tidak akan",
      "es": "will not",
      "pt": "will not"
    }
  },
  {
    "id": "G0156",
    "p": "〜まじ",
    "m": {
      "en": "must not",
      "zh-TW": "不可",
      "zh-CN": "不可",
      "ko": "~해서는 안 된다",
      "vi": "không được",
      "id": "tidak boleh",
      "es": "must not",
      "pt": "must not"
    }
  },
  {
    "id": "G0157",
    "p": "〜めり",
    "m": {
      "en": "seems",
      "zh-TW": "似乎",
      "zh-CN": "似乎",
      "ko": "~인 듯하다",
      "vi": "dường như",
      "id": "tampaknya",
      "es": "seems",
      "pt": "seems"
    }
  },
  {
    "id": "G0158",
    "p": "〜らむ",
    "m": {
      "en": "probably",
      "zh-TW": "大概",
      "zh-CN": "大概",
      "ko": "~일 것이다",
      "vi": "có lẽ",
      "id": "mungkin",
      "es": "probably",
      "pt": "probably"
    }
  },
  {
    "id": "G0159",
    "p": "〜んとす",
    "m": {
      "en": "about to",
      "zh-TW": "正要",
      "zh-CN": "正要",
      "ko": "~하려 한다",
      "vi": "sắp",
      "id": "akan",
      "es": "about to",
      "pt": "about to"
    }
  },
  {
    "id": "G0160",
    "p": "〜じ",
    "m": {
      "en": "probably not",
      "zh-TW": "大概不會",
      "zh-CN": "大概不会",
      "ko": "~하지 않을 것이다",
      "vi": "có lẽ không",
      "id": "mungkin tidak",
      "es": "probably not",
      "pt": "probably not"
    }
  },
  {
    "id": "G0161",
    "p": "〜ないとも限らない",
    "m": {
      "en": "may",
      "zh-TW": "也許會",
      "zh-CN": "也许会",
      "ko": "~하지 않는다고 할 수 없다",
      "vi": "biết đâu",
      "id": "mungkin saja",
      "es": "may",
      "pt": "may"
    }
  },
  {
    "id": "G0162",
    "p": "〜ないでもない",
    "m": {
      "en": "not entirely",
      "zh-TW": "並非沒有",
      "zh-CN": "并非没有",
      "ko": "~하지 않는 것은 아니다",
      "vi": "không phải không",
      "id": "bukan tidak",
      "es": "not entirely",
      "pt": "not entirely"
    }
  },
  {
    "id": "G0163",
    "p": "〜といったところだ",
    "m": {
      "en": "about",
      "zh-TW": "大約",
      "zh-CN": "大约",
      "ko": "~정도다",
      "vi": "khoảng",
      "id": "sekitar",
      "es": "about",
      "pt": "about"
    }
  },
  {
    "id": "G0164",
    "p": "〜とでもいうべき",
    "m": {
      "en": "what might be called",
      "zh-TW": "可說是",
      "zh-CN": "可说是",
      "ko": "~라고 해야 할",
      "vi": "có thể gọi là",
      "id": "yang bisa disebut",
      "es": "what might be called",
      "pt": "what might be called"
    }
  },
  {
    "id": "G0165",
    "p": "〜というところだ",
    "m": {
      "en": "about",
      "zh-TW": "就是",
      "zh-CN": "就是",
      "ko": "~라는 정도다",
      "vi": "nghĩa là",
      "id": "artinya",
      "es": "about",
      "pt": "about"
    }
  },
  {
    "id": "G0166",
    "p": "〜とばかりは言えない",
    "m": {
      "en": "not necessarily",
      "zh-TW": "未必",
      "zh-CN": "未必",
      "ko": "~라고만은 할 수 없다",
      "vi": "không hẳn",
      "id": "belum tentu",
      "es": "not necessarily",
      "pt": "not necessarily"
    }
  },
  {
    "id": "G0167",
    "p": "〜とも〜ともつかない",
    "m": {
      "en": "neither... nor",
      "zh-TW": "不知是...還是",
      "zh-CN": "不知是...还是",
      "ko": "~인지 ~인지 모를",
      "vi": "chẳng biết... hay",
      "id": "entah",
      "es": "neither... nor",
      "pt": "neither... nor"
    }
  },
  {
    "id": "G0168",
    "p": "〜ともなると",
    "m": {
      "en": "when it comes to",
      "zh-TW": "說到",
      "zh-CN": "说到",
      "ko": "~쯤 되면",
      "vi": "đến khi",
      "id": "kalau sudah",
      "es": "when it comes to",
      "pt": "when it comes to"
    }
  },
  {
    "id": "G0169",
    "p": "〜ともなれば",
    "m": {
      "en": "if... then",
      "zh-TW": "如果",
      "zh-CN": "如果",
      "ko": "~쯤 되면",
      "vi": "nếu",
      "id": "jika",
      "es": "if... then",
      "pt": "if... then"
    }
  },
  {
    "id": "G0170",
    "p": "〜とも言い切れない",
    "m": {
      "en": "cannot say",
      "zh-TW": "不能斷言",
      "zh-CN": "不能断言",
      "ko": "~라고 단언할 수 없다",
      "vi": "không thể nói",
      "id": "tidak bisa bilang",
      "es": "cannot say",
      "pt": "cannot say"
    }
  },
  {
    "id": "G0171",
    "p": "〜に即して",
    "m": {
      "en": "in accordance with",
      "zh-TW": "根據",
      "zh-CN": "根据",
      "ko": "~에 따라",
      "vi": "theo",
      "id": "sesuai",
      "es": "in accordance with",
      "pt": "in accordance with"
    }
  },
  {
    "id": "G0172",
    "p": "〜に照らして",
    "m": {
      "en": "in light of",
      "zh-TW": "根據",
      "zh-CN": "根据",
      "ko": "~에 비추어",
      "vi": "chiếu theo",
      "id": "berdasarkan",
      "es": "in light of",
      "pt": "in light of"
    }
  },
  {
    "id": "G0173",
    "p": "〜に則って",
    "m": {
      "en": "in accordance with",
      "zh-TW": "遵照",
      "zh-CN": "遵照",
      "ko": "~에 따라",
      "vi": "tuân theo",
      "id": "sesuai",
      "es": "in accordance with",
      "pt": "in accordance with"
    }
  },
  {
    "id": "G0174",
    "p": "〜をもってすれば",
    "m": {
      "en": "with",
      "zh-TW": "用",
      "zh-CN": "用",
      "ko": "~로 하면",
      "vi": "nếu dùng",
      "id": "jika dengan",
      "es": "with",
      "pt": "with"
    }
  },
  {
    "id": "G0175",
    "p": "〜をよそに",
    "m": {
      "en": "ignoring",
      "zh-TW": "不顧",
      "zh-CN": "不顾",
      "ko": "~을 무시하고",
      "vi": "bất chấp",
      "id": "mengabaikan",
      "es": "ignoring",
      "pt": "ignoring"
    }
  },
  {
    "id": "G0176",
    "p": "〜んばかりだ",
    "m": {
      "en": "as if",
      "zh-TW": "幾乎要",
      "zh-CN": "几乎要",
      "ko": "~할 듯하다",
      "vi": "như sắp",
      "id": "seakan",
      "es": "as if",
      "pt": "as if"
    }
  },
  {
    "id": "G0177",
    "p": "〜しかない",
    "m": {
      "en": "have no choice",
      "zh-TW": "只能",
      "zh-CN": "只能",
      "ko": "~할 수밖에 없다",
      "vi": "chỉ còn cách",
      "id": "hanya bisa",
      "es": "have no choice",
      "pt": "have no choice"
    }
  },
  {
    "id": "G0178",
    "p": "〜よりほかない",
    "m": {
      "en": "have no choice",
      "zh-TW": "只能",
      "zh-CN": "只能",
      "ko": "~하는 수밖에 없다",
      "vi": "chỉ còn cách",
      "id": "hanya bisa",
      "es": "have no choice",
      "pt": "have no choice"
    }
  },
  {
    "id": "G0179",
    "p": "〜ざるをえない",
    "m": {
      "en": "have to",
      "zh-TW": "不得不",
      "zh-CN": "不得不",
      "ko": "~하지 않을 수 없다",
      "vi": "buộc phải",
      "id": "terpaksa",
      "es": "have to",
      "pt": "have to"
    }
  },
  {
    "id": "G0180",
    "p": "〜といえなくもない",
    "m": {
      "en": "can say",
      "zh-TW": "也可以說",
      "zh-CN": "也可以说",
      "ko": "~라고 할 수 없는 것도 아니다",
      "vi": "cũng có thể nói",
      "id": "bisa juga bilang",
      "es": "can say",
      "pt": "can say"
    }
  },
  {
    "id": "G0181",
    "p": "〜かれ〜かれ",
    "m": {
      "en": "some... some",
      "zh-TW": "有些...有些",
      "zh-CN": "有些...有些",
      "ko": "~하거나 ~하거나",
      "vi": "có... có",
      "id": "ada... ada",
      "es": "some... some",
      "pt": "some... some"
    }
  },
  {
    "id": "G0182",
    "p": "〜くらいなら",
    "m": {
      "en": "rather than",
      "zh-TW": "與其",
      "zh-CN": "与其",
      "ko": "~할 바에는",
      "vi": "thà",
      "id": "daripada",
      "es": "rather than",
      "pt": "rather than"
    }
  },
  {
    "id": "G0183",
    "p": "〜ながら",
    "m": {
      "en": "while",
      "zh-TW": "同時",
      "zh-CN": "同时",
      "ko": "~하면서",
      "vi": "trong khi",
      "id": "sambil",
      "es": "while",
      "pt": "while"
    }
  },
  {
    "id": "G0184",
    "p": "〜なしに",
    "m": {
      "en": "without",
      "zh-TW": "沒有",
      "zh-CN": "没有",
      "ko": "~없이",
      "vi": "không có",
      "id": "tanpa",
      "es": "without",
      "pt": "without"
    }
  },
  {
    "id": "G0185",
    "p": "〜ふりをする",
    "m": {
      "en": "pretend",
      "zh-TW": "假裝",
      "zh-CN": "假装",
      "ko": "~하는 척하다",
      "vi": "giả vờ",
      "id": "berpura-pura",
      "es": "pretend",
      "pt": "pretend"
    }
  },
  {
    "id": "G0186",
    "p": "〜べくもない",
    "m": {
      "en": "cannot possibly",
      "zh-TW": "根本不可能",
      "zh-CN": "根本不可能",
      "ko": "~할 리가 없다",
      "vi": "không thể nào",
      "id": "mustahil",
      "es": "cannot possibly",
      "pt": "cannot possibly"
    }
  },
  {
    "id": "G0187",
    "p": "〜ほかならない",
    "m": {
      "en": "nothing but",
      "zh-TW": "正是",
      "zh-CN": "正是",
      "ko": "~에 다름없다",
      "vi": "chẳng qua",
      "id": "tidak lain",
      "es": "nothing but",
      "pt": "nothing but"
    }
  },
  {
    "id": "G0188",
    "p": "〜まくる",
    "m": {
      "en": "do a lot",
      "zh-TW": "不停地",
      "zh-CN": "不停地",
      "ko": "~해 대다",
      "vi": "liên tục",
      "id": "terus menerus",
      "es": "do a lot",
      "pt": "do a lot"
    }
  },
  {
    "id": "G0190",
    "p": "〜向きがある",
    "r": "〜むきがある",
    "m": {
      "en": "there is tendency",
      "zh-TW": "有...傾向",
      "zh-CN": "有...倾向",
      "ko": "~하는 경향이 있다",
      "vi": "có xu hướng",
      "id": "ada kecenderungan",
      "es": "there is tendency",
      "pt": "there is tendency"
    }
  },
  {
    "id": "G0191",
    "p": "〜やいなや",
    "m": {
      "en": "as soon as",
      "zh-TW": "一...就",
      "zh-CN": "一...就",
      "ko": "~하자마자",
      "vi": "vừa... đã",
      "id": "begitu",
      "es": "as soon as",
      "pt": "as soon as"
    }
  },
  {
    "id": "G0192",
    "p": "〜ようと思えば",
    "m": {
      "en": "if one wants",
      "zh-TW": "如果想",
      "zh-CN": "如果想",
      "ko": "~하려고 하면",
      "vi": "nếu muốn",
      "id": "jika mau",
      "es": "if one wants",
      "pt": "if one wants"
    }
  },
  {
    "id": "G0194",
    "p": "〜よりしかたがない",
    "m": {
      "en": "no choice but",
      "zh-TW": "只能",
      "zh-CN": "只能",
      "ko": "~할 수밖에 없다",
      "vi": "chỉ còn cách",
      "id": "hanya bisa",
      "es": "no choice but",
      "pt": "no choice but"
    }
  },
  {
    "id": "G0195",
    "p": "〜をいいことに",
    "m": {
      "en": "taking advantage",
      "zh-TW": "趁著",
      "zh-CN": "趁着",
      "ko": "~을 좋은 기회로",
      "vi": "lợi dụng",
      "id": "memanfaatkan",
      "es": "taking advantage",
      "pt": "taking advantage"
    }
  },
  {
    "id": "G0196",
    "p": "〜をおいてほかにない",
    "m": {
      "en": "none other than",
      "zh-TW": "除了...沒有",
      "zh-CN": "除了...没有",
      "ko": "~말고는 없다",
      "vi": "không gì ngoài",
      "id": "tidak ada selain",
      "es": "none other than",
      "pt": "none other than"
    }
  },
  {
    "id": "G0197",
    "p": "〜を経て",
    "m": {
      "en": "through",
      "zh-TW": "經過",
      "zh-CN": "经过",
      "ko": "~을 거쳐",
      "vi": "qua",
      "id": "melalui",
      "es": "through",
      "pt": "through"
    }
  },
  {
    "id": "G0198",
    "p": "〜を境に",
    "m": {
      "en": "as boundary",
      "zh-TW": "以...為界",
      "zh-CN": "以...为界",
      "ko": "~을 경계로",
      "vi": "lấy... làm ranh giới",
      "id": "dengan batas",
      "es": "as boundary",
      "pt": "as boundary"
    }
  },
  {
    "id": "G0199",
    "p": "〜を前提として",
    "m": {
      "en": "on the premise",
      "zh-TW": "以...為前提",
      "zh-CN": "以...为前提",
      "ko": "~을 전제로",
      "vi": "với tiền đề",
      "id": "dengan asumsi",
      "es": "on the premise",
      "pt": "on the premise"
    }
  },
  {
    "id": "G0200",
    "p": "〜を余儀なくさせる",
    "m": {
      "en": "force to",
      "zh-TW": "迫使",
      "zh-CN": "迫使",
      "ko": "~하게 만들다",
      "vi": "buộc phải",
      "id": "memaksa",
      "es": "force to",
      "pt": "force to"
    }
  }
];