// Fujisan.AI Data
// Count: 200

const N4_GRAMMAR = [
  {
    "id": "G0001",
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
    "id": "G0002",
    "p": "〜ようになる",
    "m": {
      "en": "come to",
      "zh-TW": "變得能",
      "zh-CN": "变得能",
      "ko": "~하게 되다",
      "vi": "trở nên",
      "id": "menjadi bisa"
    }
  },
  {
    "id": "G0003",
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
    "id": "G0004",
    "p": "〜ことになる",
    "m": {
      "en": "it's decided",
      "zh-TW": "變成",
      "zh-CN": "变成",
      "ko": "~하게 되다",
      "vi": "được quyết định",
      "id": "diputuskan"
    }
  },
  {
    "id": "G0005",
    "p": "〜てしまう",
    "m": {
      "en": "end up",
      "zh-TW": "不小心",
      "zh-CN": "不小心",
      "ko": "~해 버리다",
      "vi": "lỡ",
      "id": "terlanjur"
    }
  },
  {
    "id": "G0006",
    "p": "〜ておく",
    "m": {
      "en": "do in advance",
      "zh-TW": "事先",
      "zh-CN": "事先",
      "ko": "~해 두다",
      "vi": "làm sẵn",
      "id": "siap-siap"
    }
  },
  {
    "id": "G0007",
    "p": "〜てある",
    "m": {
      "en": "has been done",
      "zh-TW": "已經",
      "zh-CN": "已经",
      "ko": "~해 있다",
      "vi": "đã được",
      "id": "sudah"
    }
  },
  {
    "id": "G0008",
    "p": "〜ところだ",
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
    "id": "G0009",
    "p": "〜ばかりだ",
    "m": {
      "en": "just did",
      "zh-TW": "剛剛",
      "zh-CN": "刚刚",
      "ko": "~한 지 얼마 안 됐다",
      "vi": "vừa mới",
      "id": "baru saja"
    }
  },
  {
    "id": "G0010",
    "p": "〜はずだ",
    "m": {
      "en": "should be",
      "zh-TW": "應該",
      "zh-CN": "应该",
      "ko": "~할 것이다",
      "vi": "chắc hẳn",
      "id": "seharusnya"
    }
  },
  {
    "id": "G0011",
    "p": "〜ながら",
    "m": {
      "en": "while doing",
      "zh-TW": "一邊...一邊",
      "zh-CN": "一边...一边",
      "ko": "~하면서",
      "vi": "vừa...vừa",
      "id": "sambil"
    }
  },
  {
    "id": "G0012",
    "p": "〜たり〜たりする",
    "m": {
      "en": "do things like",
      "zh-TW": "又...又...",
      "zh-CN": "又...又...",
      "ko": "~하거나",
      "vi": "vừa...vừa",
      "id": "kadang"
    }
  },
  {
    "id": "G0013",
    "p": "〜てから",
    "m": {
      "en": "after doing",
      "zh-TW": "...之後",
      "zh-CN": "...之后",
      "ko": "~한 후에",
      "vi": "sau khi",
      "id": "setelah"
    }
  },
  {
    "id": "G0014",
    "p": "〜前に",
    "r": "〜まえに",
    "m": {
      "en": "before doing",
      "zh-TW": "...之前",
      "zh-CN": "...之前",
      "ko": "~하기 전에",
      "vi": "trước khi",
      "id": "sebelum"
    }
  },
  {
    "id": "G0015",
    "p": "〜後で",
    "r": "〜あとで",
    "m": {
      "en": "after doing",
      "zh-TW": "...之後",
      "zh-CN": "...之后",
      "ko": "~한 뒤에",
      "vi": "sau khi",
      "id": "sesudah"
    }
  },
  {
    "id": "G0016",
    "p": "〜時",
    "r": "〜とき",
    "m": {
      "en": "when",
      "zh-TW": "...的時候",
      "zh-CN": "...的时候",
      "ko": "~할 때",
      "vi": "khi",
      "id": "ketika"
    }
  },
  {
    "id": "G0017",
    "p": "〜間",
    "r": "〜あいだ",
    "m": {
      "en": "during",
      "zh-TW": "...期間",
      "zh-CN": "...期间",
      "ko": "~동안",
      "vi": "trong",
      "id": "selama"
    }
  },
  {
    "id": "G0018",
    "p": "〜までに",
    "m": {
      "en": "by",
      "zh-TW": "在...之前",
      "zh-CN": "在...之前",
      "ko": "~까지",
      "vi": "truoc",
      "id": "sebelum"
    }
  },
  {
    "id": "G0019",
    "p": "〜ために",
    "m": {
      "en": "in order to",
      "zh-TW": "為了",
      "zh-CN": "为了",
      "ko": "~위해",
      "vi": "de",
      "id": "untuk"
    }
  },
  {
    "id": "G0020",
    "p": "〜のに",
    "m": {
      "en": "although",
      "zh-TW": "雖然",
      "zh-CN": "虽然",
      "ko": "~는데도",
      "vi": "mac du",
      "id": "meskipun"
    }
  },
  {
    "id": "G0021",
    "p": "〜そうだ様態",
    "m": {
      "en": "looks like",
      "zh-TW": "看起來",
      "zh-CN": "看起来",
      "ko": "~것 같다",
      "vi": "co ve",
      "id": "kelihatannya"
    }
  },
  {
    "id": "G0022",
    "p": "〜そうだ伝聞",
    "m": {
      "en": "I heard",
      "zh-TW": "聽說",
      "zh-CN": "听说",
      "ko": "~라고 한다",
      "vi": "nghe noi",
      "id": "katanya"
    }
  },
  {
    "id": "G0023",
    "p": "〜ようだ",
    "m": {
      "en": "seems like",
      "zh-TW": "好像",
      "zh-CN": "好像",
      "ko": "~인 것 같다",
      "vi": "hinh nhu",
      "id": "sepertinya"
    }
  },
  {
    "id": "G0024",
    "p": "〜らしい",
    "m": {
      "en": "seems",
      "zh-TW": "好像",
      "zh-CN": "好像",
      "ko": "~것 같다",
      "vi": "hinh nhu",
      "id": "rupanya"
    }
  },
  {
    "id": "G0025",
    "p": "〜かもしれない",
    "m": {
      "en": "might",
      "zh-TW": "也許",
      "zh-CN": "也许",
      "ko": "~일지도",
      "vi": "co le",
      "id": "mungkin"
    }
  },
  {
    "id": "G0026",
    "p": "〜でしょう",
    "m": {
      "en": "probably",
      "zh-TW": "大概",
      "zh-CN": "大概",
      "ko": "~겠지요",
      "vi": "co le",
      "id": "mungkin"
    }
  },
  {
    "id": "G0027",
    "p": "〜なければならない",
    "m": {
      "en": "must",
      "zh-TW": "必須",
      "zh-CN": "必须",
      "ko": "~해야 한다",
      "vi": "phai",
      "id": "harus"
    }
  },
  {
    "id": "G0028",
    "p": "〜なくてもいい",
    "m": {
      "en": "dont have to",
      "zh-TW": "不必",
      "zh-CN": "不必",
      "ko": "~않아도",
      "vi": "khong can",
      "id": "tidak perlu"
    }
  },
  {
    "id": "G0029",
    "p": "〜てもいい",
    "m": {
      "en": "may",
      "zh-TW": "可以",
      "zh-CN": "可以",
      "ko": "~해도 된다",
      "vi": "duoc phep",
      "id": "boleh"
    }
  },
  {
    "id": "G0030",
    "p": "〜てはいけない",
    "m": {
      "en": "must not",
      "zh-TW": "不可以",
      "zh-CN": "不可以",
      "ko": "~하면 안 된다",
      "vi": "khong duoc",
      "id": "tidak boleh"
    }
  },
  {
    "id": "G0031",
    "p": "〜ことができる",
    "m": {
      "en": "can do",
      "zh-TW": "能夠",
      "zh-CN": "能够",
      "ko": "~할 수 있다",
      "vi": "co the",
      "id": "bisa"
    }
  },
  {
    "id": "G0032",
    "p": "〜ことがある",
    "m": {
      "en": "sometimes",
      "zh-TW": "有時",
      "zh-CN": "有时",
      "ko": "~때가 있다",
      "vi": "doi khi",
      "id": "kadang"
    }
  },
  {
    "id": "G0033",
    "p": "〜たことがある",
    "m": {
      "en": "have done",
      "zh-TW": "曾經",
      "zh-CN": "曾经",
      "ko": "~적이 있다",
      "vi": "da tung",
      "id": "pernah"
    }
  },
  {
    "id": "G0034",
    "p": "〜つもりだ",
    "m": {
      "en": "intend to",
      "zh-TW": "打算",
      "zh-CN": "打算",
      "ko": "~할 생각",
      "vi": "dinh",
      "id": "berniat"
    }
  },
  {
    "id": "G0035",
    "p": "〜予定だ",
    "m": {
      "en": "plan to",
      "zh-TW": "預定",
      "zh-CN": "预定",
      "ko": "~예정이다",
      "vi": "du dinh",
      "id": "berencana"
    }
  },
  {
    "id": "G0036",
    "p": "〜ほうがいい",
    "m": {
      "en": "should",
      "zh-TW": "最好",
      "zh-CN": "最好",
      "ko": "~게 낫다",
      "vi": "nen",
      "id": "sebaiknya"
    }
  },
  {
    "id": "G0037",
    "p": "〜と思う",
    "m": {
      "en": "I think",
      "zh-TW": "我認為",
      "zh-CN": "我认为",
      "ko": "~라고 생각",
      "vi": "toi nghi",
      "id": "saya pikir"
    }
  },
  {
    "id": "G0038",
    "p": "〜と言う",
    "m": {
      "en": "say that",
      "zh-TW": "說",
      "zh-CN": "说",
      "ko": "~라고 하다",
      "vi": "noi rang",
      "id": "katakan"
    }
  },
  {
    "id": "G0039",
    "p": "〜かどうか",
    "m": {
      "en": "whether",
      "zh-TW": "是否",
      "zh-CN": "是否",
      "ko": "~인지 아닌지",
      "vi": "co khong",
      "id": "apakah"
    }
  },
  {
    "id": "G0040",
    "p": "〜てみる",
    "m": {
      "en": "try to",
      "zh-TW": "試試看",
      "zh-CN": "试试看",
      "ko": "~해 보다",
      "vi": "thu",
      "id": "coba"
    }
  },
  {
    "id": "G0041",
    "p": "〜てくる",
    "m": {
      "en": "come to",
      "zh-TW": "過來",
      "zh-CN": "过来",
      "ko": "~해 오다",
      "vi": "den",
      "id": "datang"
    }
  },
  {
    "id": "G0042",
    "p": "〜ていく",
    "m": {
      "en": "go on",
      "zh-TW": "下去",
      "zh-CN": "下去",
      "ko": "~해 가다",
      "vi": "tiep tuc",
      "id": "terus"
    }
  },
  {
    "id": "G0043",
    "p": "〜てくれる",
    "m": {
      "en": "do for me",
      "zh-TW": "為我",
      "zh-CN": "为我",
      "ko": "~해 주다",
      "vi": "lam cho",
      "id": "membantu"
    }
  },
  {
    "id": "G0044",
    "p": "〜てあげる",
    "m": {
      "en": "do for you",
      "zh-TW": "為你",
      "zh-CN": "为你",
      "ko": "~해 주다",
      "vi": "lam cho",
      "id": "melakukan"
    }
  },
  {
    "id": "G0045",
    "p": "〜てもらう",
    "m": {
      "en": "have done",
      "zh-TW": "請",
      "zh-CN": "请",
      "ko": "~해 받다",
      "vi": "duoc",
      "id": "minta tolong"
    }
  },
  {
    "id": "G0046",
    "p": "〜させる",
    "m": {
      "en": "make do",
      "zh-TW": "讓做",
      "zh-CN": "让做",
      "ko": "~시키다",
      "vi": "bat",
      "id": "menyuruh"
    }
  },
  {
    "id": "G0047",
    "p": "〜させられる",
    "m": {
      "en": "be made to",
      "zh-TW": "被迫",
      "zh-CN": "被迫",
      "ko": "~당하다",
      "vi": "bi bat",
      "id": "dipaksa"
    }
  },
  {
    "id": "G0048",
    "p": "〜れる受身",
    "m": {
      "en": "passive",
      "zh-TW": "被",
      "zh-CN": "被",
      "ko": "~되다",
      "vi": "bi",
      "id": "di-"
    }
  },
  {
    "id": "G0049",
    "p": "〜られる可能",
    "m": {
      "en": "can",
      "zh-TW": "能夠",
      "zh-CN": "能够",
      "ko": "~할 수 있다",
      "vi": "co the",
      "id": "dapat"
    }
  },
  {
    "id": "G0050",
    "p": "〜ようと思う",
    "m": {
      "en": "think of doing",
      "zh-TW": "想要",
      "zh-CN": "想要",
      "ko": "~하려고",
      "vi": "dinh",
      "id": "berpikir"
    }
  },
  {
    "id": "G0051",
    "p": "〜ようとする",
    "m": {
      "en": "try to",
      "zh-TW": "試圖",
      "zh-CN": "试图",
      "ko": "~하려고 하다",
      "vi": "co",
      "id": "mencoba"
    }
  },
  {
    "id": "G0052",
    "p": "〜ば",
    "m": {
      "en": "if",
      "zh-TW": "如果",
      "zh-CN": "如果",
      "ko": "~하면",
      "vi": "neu",
      "id": "jika"
    }
  },
  {
    "id": "G0053",
    "p": "〜たら",
    "m": {
      "en": "if/when",
      "zh-TW": "如果",
      "zh-CN": "如果",
      "ko": "~하면",
      "vi": "neu",
      "id": "kalau"
    }
  },
  {
    "id": "G0054",
    "p": "〜なら",
    "m": {
      "en": "if",
      "zh-TW": "如果",
      "zh-CN": "如果",
      "ko": "~라면",
      "vi": "neu",
      "id": "jika"
    }
  },
  {
    "id": "G0055",
    "p": "〜と",
    "m": {
      "en": "when",
      "zh-TW": "一...就",
      "zh-CN": "一...就",
      "ko": "~하면",
      "vi": "thi",
      "id": "kalau"
    }
  },
  {
    "id": "G0056",
    "p": "〜ても",
    "m": {
      "en": "even if",
      "zh-TW": "即使",
      "zh-CN": "即使",
      "ko": "~해도",
      "vi": "du",
      "id": "meskipun"
    }
  },
  {
    "id": "G0057",
    "p": "〜のは〜だ",
    "m": {
      "en": "it is that",
      "zh-TW": "是",
      "zh-CN": "是",
      "ko": "~는 것은",
      "vi": "la",
      "id": "adalah"
    }
  },
  {
    "id": "G0058",
    "p": "〜のが〜だ",
    "m": {
      "en": "doing is",
      "zh-TW": "做是",
      "zh-CN": "做是",
      "ko": "~는 것이",
      "vi": "viec",
      "id": "adalah"
    }
  },
  {
    "id": "G0059",
    "p": "〜のを〜",
    "m": {
      "en": "doing",
      "zh-TW": "做",
      "zh-CN": "做",
      "ko": "~는 것을",
      "vi": "viec",
      "id": "melakukan"
    }
  },
  {
    "id": "G0060",
    "p": "〜ことは〜が",
    "m": {
      "en": "it is but",
      "zh-TW": "是但",
      "zh-CN": "是但",
      "ko": "~는 하지만",
      "vi": "nhung",
      "id": "tapi"
    }
  },
  {
    "id": "G0061",
    "p": "〜し",
    "m": {
      "en": "and also",
      "zh-TW": "而且",
      "zh-CN": "而且",
      "ko": "~하고",
      "vi": "va",
      "id": "dan"
    }
  },
  {
    "id": "G0062",
    "p": "〜けど",
    "m": {
      "en": "but",
      "zh-TW": "但是",
      "zh-CN": "但是",
      "ko": "~하지만",
      "vi": "nhung",
      "id": "tapi"
    }
  },
  {
    "id": "G0063",
    "p": "〜から",
    "m": {
      "en": "because",
      "zh-TW": "因為",
      "zh-CN": "因为",
      "ko": "~니까",
      "vi": "vi",
      "id": "karena"
    }
  },
  {
    "id": "G0064",
    "p": "〜ので",
    "m": {
      "en": "because",
      "zh-TW": "因為",
      "zh-CN": "因为",
      "ko": "~어서",
      "vi": "vi",
      "id": "karena"
    }
  },
  {
    "id": "G0065",
    "p": "〜て",
    "m": {
      "en": "and then",
      "zh-TW": "然後",
      "zh-CN": "然后",
      "ko": "~하고",
      "vi": "roi",
      "id": "lalu"
    }
  },
  {
    "id": "G0066",
    "p": "〜たい",
    "m": {
      "en": "want to",
      "zh-TW": "想",
      "zh-CN": "想",
      "ko": "~고 싶다",
      "vi": "muon",
      "id": "ingin"
    }
  },
  {
    "id": "G0067",
    "p": "〜たがる",
    "m": {
      "en": "want to",
      "zh-TW": "想要",
      "zh-CN": "想要",
      "ko": "~하고 싶어하다",
      "vi": "muon",
      "id": "ingin"
    }
  },
  {
    "id": "G0068",
    "p": "〜がる",
    "m": {
      "en": "show signs of",
      "zh-TW": "表現",
      "zh-CN": "表现",
      "ko": "~해 하다",
      "vi": "to ra",
      "id": "menunjukkan"
    }
  },
  {
    "id": "G0069",
    "p": "〜すぎる",
    "m": {
      "en": "too much",
      "zh-TW": "太",
      "zh-CN": "太",
      "ko": "~너무",
      "vi": "qua",
      "id": "terlalu"
    }
  },
  {
    "id": "G0070",
    "p": "〜やすい",
    "m": {
      "en": "easy to",
      "zh-TW": "容易",
      "zh-CN": "容易",
      "ko": "~하기 쉽다",
      "vi": "de",
      "id": "mudah"
    }
  },
  {
    "id": "G0071",
    "p": "〜にくい",
    "m": {
      "en": "hard to",
      "zh-TW": "難",
      "zh-CN": "难",
      "ko": "~하기 어렵다",
      "vi": "kho",
      "id": "sulit"
    }
  },
  {
    "id": "G0072",
    "p": "〜始める",
    "r": "〜はじめる",
    "m": {
      "en": "start to",
      "zh-TW": "開始",
      "zh-CN": "开始",
      "ko": "~하기 시작",
      "vi": "bat dau",
      "id": "mulai"
    }
  },
  {
    "id": "G0073",
    "p": "〜終わる",
    "r": "〜おわる",
    "m": {
      "en": "finish",
      "zh-TW": "結束",
      "zh-CN": "结束",
      "ko": "~끝나다",
      "vi": "ket thuc",
      "id": "selesai"
    }
  },
  {
    "id": "G0074",
    "p": "〜続ける",
    "r": "〜つづける",
    "m": {
      "en": "continue",
      "zh-TW": "繼續",
      "zh-CN": "继续",
      "ko": "~계속하다",
      "vi": "tiep tuc",
      "id": "terus"
    }
  },
  {
    "id": "G0075",
    "p": "〜出す",
    "r": "〜だす",
    "m": {
      "en": "start to",
      "zh-TW": "開始",
      "zh-CN": "开始",
      "ko": "~하기 시작",
      "vi": "bat dau",
      "id": "mulai"
    }
  },
  {
    "id": "G0076",
    "p": "〜合う",
    "r": "〜あう",
    "m": {
      "en": "each other",
      "zh-TW": "互相",
      "zh-CN": "互相",
      "ko": "~서로",
      "vi": "nhau",
      "id": "saling"
    }
  },
  {
    "id": "G0077",
    "p": "〜直す",
    "r": "〜なおす",
    "m": {
      "en": "redo",
      "zh-TW": "重新",
      "zh-CN": "重新",
      "ko": "~다시 하다",
      "vi": "lam lai",
      "id": "ulang"
    }
  },
  {
    "id": "G0078",
    "p": "〜込む",
    "r": "〜こむ",
    "m": {
      "en": "into",
      "zh-TW": "進入",
      "zh-CN": "进入",
      "ko": "~들어가다",
      "vi": "vao",
      "id": "masuk"
    }
  },
  {
    "id": "G0079",
    "p": "〜方",
    "r": "〜かた",
    "m": {
      "en": "way of",
      "zh-TW": "方法",
      "zh-CN": "方法",
      "ko": "~방법",
      "vi": "cach",
      "id": "cara"
    }
  },
  {
    "id": "G0080",
    "p": "〜ように",
    "m": {
      "en": "so that",
      "zh-TW": "為了",
      "zh-CN": "为了",
      "ko": "~하도록",
      "vi": "de",
      "id": "supaya"
    }
  },
  {
    "id": "G0081",
    "p": "〜ようにする",
    "m": {
      "en": "try to",
      "zh-TW": "盡量",
      "zh-CN": "尽量",
      "ko": "~하도록 하다",
      "vi": "co gang",
      "id": "berusaha"
    }
  },
  {
    "id": "G0082",
    "p": "〜ようになる",
    "m": {
      "en": "come to",
      "zh-TW": "變得",
      "zh-CN": "变得",
      "ko": "~하게 되다",
      "vi": "tro nen",
      "id": "menjadi"
    }
  },
  {
    "id": "G0083",
    "p": "〜ことにする",
    "m": {
      "en": "decide to",
      "zh-TW": "決定",
      "zh-CN": "决定",
      "ko": "~하기로 하다",
      "vi": "quyet dinh",
      "id": "memutuskan"
    }
  },
  {
    "id": "G0084",
    "p": "〜ことになる",
    "m": {
      "en": "be decided",
      "zh-TW": "變成",
      "zh-CN": "变成",
      "ko": "~하게 되다",
      "vi": "duoc quyet dinh",
      "id": "diputuskan"
    }
  },
  {
    "id": "G0085",
    "p": "〜てしまう",
    "m": {
      "en": "end up",
      "zh-TW": "不小心",
      "zh-CN": "不小心",
      "ko": "~해 버리다",
      "vi": "lo",
      "id": "terlanjur"
    }
  },
  {
    "id": "G0086",
    "p": "〜ておく",
    "m": {
      "en": "in advance",
      "zh-TW": "事先",
      "zh-CN": "事先",
      "ko": "~해 두다",
      "vi": "lam san",
      "id": "siap"
    }
  },
  {
    "id": "G0087",
    "p": "〜てある",
    "m": {
      "en": "has been done",
      "zh-TW": "已經",
      "zh-CN": "已经",
      "ko": "~해 있다",
      "vi": "da duoc",
      "id": "sudah"
    }
  },
  {
    "id": "G0088",
    "p": "〜ところだ",
    "m": {
      "en": "about to",
      "zh-TW": "正要",
      "zh-CN": "正要",
      "ko": "~하려던 참",
      "vi": "sap",
      "id": "akan"
    }
  },
  {
    "id": "G0089",
    "p": "〜ばかりだ",
    "m": {
      "en": "just did",
      "zh-TW": "剛剛",
      "zh-CN": "刚刚",
      "ko": "~한 지 얼마",
      "vi": "vua moi",
      "id": "baru saja"
    }
  },
  {
    "id": "G0090",
    "p": "〜はずだ",
    "m": {
      "en": "should be",
      "zh-TW": "應該",
      "zh-CN": "应该",
      "ko": "~할 것이다",
      "vi": "chac han",
      "id": "seharusnya"
    }
  },
  {
    "id": "G0091",
    "p": "〜はずがない",
    "m": {
      "en": "cant be",
      "zh-TW": "不可能",
      "zh-CN": "不可能",
      "ko": "~할 리가 없다",
      "vi": "khong the",
      "id": "tidak mungkin"
    }
  },
  {
    "id": "G0092",
    "p": "〜わけだ",
    "m": {
      "en": "no wonder",
      "zh-TW": "難怪",
      "zh-CN": "难怪",
      "ko": "~인 것이다",
      "vi": "that la",
      "id": "pantas"
    }
  },
  {
    "id": "G0093",
    "p": "〜わけがない",
    "m": {
      "en": "no way",
      "zh-TW": "不可能",
      "zh-CN": "不可能",
      "ko": "~할 리가 없다",
      "vi": "khong the",
      "id": "tidak mungkin"
    }
  },
  {
    "id": "G0094",
    "p": "〜わけではない",
    "m": {
      "en": "not that",
      "zh-TW": "並非",
      "zh-CN": "并非",
      "ko": "~는 것은 아니다",
      "vi": "khong phai",
      "id": "bukan berarti"
    }
  },
  {
    "id": "G0095",
    "p": "〜わけにはいかない",
    "m": {
      "en": "cannot",
      "zh-TW": "不能",
      "zh-CN": "不能",
      "ko": "~할 수 없다",
      "vi": "khong the",
      "id": "tidak bisa"
    }
  },
  {
    "id": "G0096",
    "p": "〜ないで",
    "m": {
      "en": "without doing",
      "zh-TW": "不做而",
      "zh-CN": "不做而",
      "ko": "~하지 않고",
      "vi": "khong",
      "id": "tanpa"
    }
  },
  {
    "id": "G0097",
    "p": "〜ずに",
    "m": {
      "en": "without doing",
      "zh-TW": "不做而",
      "zh-CN": "不做而",
      "ko": "~하지 않고",
      "vi": "khong",
      "id": "tanpa"
    }
  },
  {
    "id": "G0098",
    "p": "〜ないと",
    "m": {
      "en": "if not",
      "zh-TW": "如果不",
      "zh-CN": "如果不",
      "ko": "~하지 않으면",
      "vi": "neu khong",
      "id": "kalau tidak"
    }
  },
  {
    "id": "G0099",
    "p": "〜なくて",
    "m": {
      "en": "not and",
      "zh-TW": "不而",
      "zh-CN": "不而",
      "ko": "~하지 않고",
      "vi": "khong",
      "id": "tidak"
    }
  },
  {
    "id": "G0100",
    "p": "〜しか〜ない",
    "m": {
      "en": "only",
      "zh-TW": "只有",
      "zh-CN": "只有",
      "ko": "~밖에 없다",
      "vi": "chi co",
      "id": "hanya"
    }
  },
  {
    "id": "G0101",
    "p": "〜だけ",
    "m": {
      "en": "only",
      "zh-TW": "只",
      "zh-CN": "只",
      "ko": "~만",
      "vi": "chi",
      "id": "hanya"
    }
  },
  {
    "id": "G0102",
    "p": "〜ばかり",
    "m": {
      "en": "only",
      "zh-TW": "只",
      "zh-CN": "只",
      "ko": "~만",
      "vi": "chi",
      "id": "hanya"
    }
  },
  {
    "id": "G0103",
    "p": "〜さえ",
    "m": {
      "en": "even",
      "zh-TW": "甚至",
      "zh-CN": "甚至",
      "ko": "~조차",
      "vi": "tham chi",
      "id": "bahkan"
    }
  },
  {
    "id": "G0104",
    "p": "〜まで",
    "m": {
      "en": "even",
      "zh-TW": "甚至",
      "zh-CN": "甚至",
      "ko": "~까지",
      "vi": "den",
      "id": "sampai"
    }
  },
  {
    "id": "G0105",
    "p": "〜ほど",
    "m": {
      "en": "to the extent",
      "zh-TW": "到",
      "zh-CN": "到",
      "ko": "~정도",
      "vi": "den muc",
      "id": "sampai"
    }
  },
  {
    "id": "G0106",
    "p": "〜より",
    "m": {
      "en": "than",
      "zh-TW": "比",
      "zh-CN": "比",
      "ko": "~보다",
      "vi": "hon",
      "id": "dari"
    }
  },
  {
    "id": "G0107",
    "p": "〜ほど〜ない",
    "m": {
      "en": "not as",
      "zh-TW": "不如",
      "zh-CN": "不如",
      "ko": "~만큼 아니다",
      "vi": "khong bang",
      "id": "tidak seperti"
    }
  },
  {
    "id": "G0108",
    "p": "〜と同じ",
    "m": {
      "en": "same as",
      "zh-TW": "和一樣",
      "zh-CN": "和一样",
      "ko": "~와 같다",
      "vi": "giong nhu",
      "id": "sama seperti"
    }
  },
  {
    "id": "G0109",
    "p": "〜のような",
    "m": {
      "en": "like",
      "zh-TW": "像",
      "zh-CN": "像",
      "ko": "~같은",
      "vi": "nhu",
      "id": "seperti"
    }
  },
  {
    "id": "G0110",
    "p": "〜について",
    "m": {
      "en": "about",
      "zh-TW": "關於",
      "zh-CN": "关于",
      "ko": "~에 대해",
      "vi": "ve",
      "id": "tentang"
    }
  },
  {
    "id": "G0111",
    "p": "〜に対して",
    "r": "〜にたいして",
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
    "id": "G0112",
    "p": "〜によって",
    "m": {
      "en": "by means of",
      "zh-TW": "根據",
      "zh-CN": "根据",
      "ko": "~에 의해",
      "vi": "bởi",
      "id": "oleh"
    }
  },
  {
    "id": "G0113",
    "p": "〜において",
    "m": {
      "en": "in/at",
      "zh-TW": "在",
      "zh-CN": "在",
      "ko": "~에서",
      "vi": "tại",
      "id": "di"
    }
  },
  {
    "id": "G0114",
    "p": "〜に関して",
    "r": "〜にかんして",
    "m": {
      "en": "regarding",
      "zh-TW": "關於",
      "zh-CN": "关于",
      "ko": "~에 관해",
      "vi": "liên quan",
      "id": "mengenai"
    }
  },
  {
    "id": "G0115",
    "p": "〜に比べて",
    "m": {
      "en": "compared to",
      "zh-TW": "與比較",
      "zh-CN": "与比较",
      "ko": "~에 비해",
      "vi": "so với",
      "id": "dibandingkan"
    }
  },
  {
    "id": "G0116",
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
    "id": "G0117",
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
    "id": "G0118",
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
    "id": "G0119",
    "p": "〜を通じて",
    "m": {
      "en": "through",
      "zh-TW": "通過",
      "zh-CN": "通过",
      "ko": "~를 통해",
      "vi": "thông qua",
      "id": "melalui"
    }
  },
  {
    "id": "G0120",
    "p": "〜を中心に",
    "r": "〜をちゅうしんに",
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
    "id": "G0121",
    "p": "〜ないことがある",
    "m": {
      "en": "there are times when not ~",
      "zh-TW": "there are times when not ~",
      "zh-CN": "there are times when not ~",
      "ko": "there are times when not ~",
      "vi": "there are times when not ~",
      "id": "there are times when not ~"
    },
    "ex": "Sometimes I don't eat."
  },
  {
    "id": "G0122",
    "p": "〜ようとしない",
    "m": {
      "en": "to refuse to ~",
      "zh-TW": "to refuse to ~",
      "zh-CN": "to refuse to ~",
      "ko": "to refuse to ~",
      "vi": "to refuse to ~",
      "id": "to refuse to ~"
    },
    "ex": "He refuses to listen."
  },
  {
    "id": "G0123",
    "p": "〜ようにしている",
    "m": {
      "en": "to make sure to ~",
      "zh-TW": "to make sure to ~",
      "zh-CN": "to make sure to ~",
      "ko": "to make sure to ~",
      "vi": "to make sure to ~",
      "id": "to make sure to ~"
    },
    "ex": "I make sure to exercise."
  },
  {
    "id": "G0124",
    "p": "〜ようになっている",
    "m": {
      "en": "to have become so that ~",
      "zh-TW": "to have become so that ~",
      "zh-CN": "to have become so that ~",
      "ko": "to have become so that ~",
      "vi": "to have become so that ~",
      "id": "to have become so that ~"
    },
    "ex": "It has become easy."
  },
  {
    "id": "G0125",
    "p": "〜ことにしている",
    "m": {
      "en": "to make it a rule to ~",
      "zh-TW": "to make it a rule to ~",
      "zh-CN": "to make it a rule to ~",
      "ko": "to make it a rule to ~",
      "vi": "to make it a rule to ~",
      "id": "to make it a rule to ~"
    },
    "ex": "I make it a rule to read."
  },
  {
    "id": "G0126",
    "p": "〜ことになっている",
    "m": {
      "en": "to be scheduled to ~",
      "zh-TW": "to be scheduled to ~",
      "zh-CN": "to be scheduled to ~",
      "ko": "to be scheduled to ~",
      "vi": "to be scheduled to ~",
      "id": "to be scheduled to ~"
    },
    "ex": "I am scheduled to go."
  },
  {
    "id": "G0127",
    "p": "〜ことはない",
    "m": {
      "en": "there is no need to ~",
      "zh-TW": "there is no need to ~",
      "zh-CN": "there is no need to ~",
      "ko": "there is no need to ~",
      "vi": "there is no need to ~",
      "id": "there is no need to ~"
    },
    "ex": "You don't need to worry."
  },
  {
    "id": "G0128",
    "p": "〜ことだ",
    "m": {
      "en": "should ~",
      "zh-TW": "should ~",
      "zh-CN": "should ~",
      "ko": "should ~",
      "vi": "should ~",
      "id": "should ~"
    },
    "ex": "You should study more."
  },
  {
    "id": "G0129",
    "p": "〜ことか",
    "m": {
      "en": "how ~!",
      "zh-TW": "how ~!",
      "zh-CN": "how ~!",
      "ko": "how ~!",
      "vi": "how ~!",
      "id": "how ~!"
    },
    "ex": "How happy I was!"
  },
  {
    "id": "G0130",
    "p": "〜ことなく",
    "m": {
      "en": "without ~ing",
      "zh-TW": "without ~ing",
      "zh-CN": "without ~ing",
      "ko": "without ~ing",
      "vi": "without ~ing",
      "id": "without ~ing"
    },
    "ex": "Without giving up."
  },
  {
    "id": "G0131",
    "p": "〜ことから",
    "m": {
      "en": "from the fact that ~",
      "zh-TW": "from the fact that ~",
      "zh-CN": "from the fact that ~",
      "ko": "from the fact that ~",
      "vi": "from the fact that ~",
      "id": "from the fact that ~"
    },
    "ex": "From the fact that he is busy."
  },
  {
    "id": "G0132",
    "p": "〜ことに",
    "m": {
      "en": "to my ~",
      "zh-TW": "to my ~",
      "zh-CN": "to my ~",
      "ko": "to my ~",
      "vi": "to my ~",
      "id": "to my ~"
    },
    "ex": "To my surprise."
  },
  {
    "id": "G0133",
    "p": "〜ことには",
    "m": {
      "en": "unless ~",
      "zh-TW": "unless ~",
      "zh-CN": "unless ~",
      "ko": "unless ~",
      "vi": "unless ~",
      "id": "unless ~"
    },
    "ex": "Unless you study."
  },
  {
    "id": "G0134",
    "p": "〜ことだから",
    "m": {
      "en": "because ~ is the type to",
      "zh-TW": "because ~ is the type to",
      "zh-CN": "because ~ is the type to",
      "ko": "because ~ is the type to",
      "vi": "because ~ is the type to",
      "id": "because ~ is the type to"
    },
    "ex": "Because he is kind."
  },
  {
    "id": "G0135",
    "p": "〜なくてはならない",
    "m": {
      "en": "must ~",
      "zh-TW": "must ~",
      "zh-CN": "must ~",
      "ko": "must ~",
      "vi": "must ~",
      "id": "must ~"
    },
    "ex": "I must go."
  },
  {
    "id": "G0136",
    "p": "〜なくてはいけない",
    "m": {
      "en": "must ~",
      "zh-TW": "must ~",
      "zh-CN": "must ~",
      "ko": "must ~",
      "vi": "must ~",
      "id": "must ~"
    },
    "ex": "I must eat."
  },
  {
    "id": "G0137",
    "p": "〜なければいけない",
    "m": {
      "en": "must ~",
      "zh-TW": "must ~",
      "zh-CN": "must ~",
      "ko": "must ~",
      "vi": "must ~",
      "id": "must ~"
    },
    "ex": "I must sleep."
  },
  {
    "id": "G0138",
    "p": "〜ないといけない",
    "m": {
      "en": "must ~",
      "zh-TW": "must ~",
      "zh-CN": "must ~",
      "ko": "must ~",
      "vi": "must ~",
      "id": "must ~"
    },
    "ex": "I must work."
  },
  {
    "id": "G0139",
    "p": "〜ないではいられない",
    "m": {
      "en": "cannot help but ~",
      "zh-TW": "cannot help but ~",
      "zh-CN": "cannot help but ~",
      "ko": "cannot help but ~",
      "vi": "cannot help but ~",
      "id": "cannot help but ~"
    },
    "ex": "I cannot help but laugh."
  },
  {
    "id": "G0140",
    "p": "〜ずにはいられない",
    "m": {
      "en": "cannot help but ~",
      "zh-TW": "cannot help but ~",
      "zh-CN": "cannot help but ~",
      "ko": "cannot help but ~",
      "vi": "cannot help but ~",
      "id": "cannot help but ~"
    },
    "ex": "I cannot help but cry."
  },
  {
    "id": "G0141",
    "p": "〜ないわけにはいかない",
    "m": {
      "en": "cannot not ~",
      "zh-TW": "cannot not ~",
      "zh-CN": "cannot not ~",
      "ko": "cannot not ~",
      "vi": "cannot not ~",
      "id": "cannot not ~"
    },
    "ex": "I cannot not go."
  },
  {
    "id": "G0142",
    "p": "〜ざるを得ない",
    "m": {
      "en": "have no choice but to ~",
      "zh-TW": "have no choice but to ~",
      "zh-CN": "have no choice but to ~",
      "ko": "have no choice but to ~",
      "vi": "have no choice but to ~",
      "id": "have no choice but to ~"
    },
    "ex": "I have no choice but to accept."
  },
  {
    "id": "G0143",
    "p": "〜しかない",
    "m": {
      "en": "have no choice but to ~",
      "zh-TW": "have no choice but to ~",
      "zh-CN": "have no choice but to ~",
      "ko": "have no choice but to ~",
      "vi": "have no choice but to ~",
      "id": "have no choice but to ~"
    },
    "ex": "I have no choice but to wait."
  },
  {
    "id": "G0144",
    "p": "〜ほかない",
    "m": {
      "en": "have no choice but to ~",
      "zh-TW": "have no choice but to ~",
      "zh-CN": "have no choice but to ~",
      "ko": "have no choice but to ~",
      "vi": "have no choice but to ~",
      "id": "have no choice but to ~"
    },
    "ex": "I have no choice but to try."
  },
  {
    "id": "G0145",
    "p": "〜よりほかない",
    "m": {
      "en": "have no choice but to ~",
      "zh-TW": "have no choice but to ~",
      "zh-CN": "have no choice but to ~",
      "ko": "have no choice but to ~",
      "vi": "have no choice but to ~",
      "id": "have no choice but to ~"
    },
    "ex": "I have no choice but to believe."
  },
  {
    "id": "G0146",
    "p": "〜ないわけがない",
    "m": {
      "en": "it is impossible that not ~",
      "zh-TW": "it is impossible that not ~",
      "zh-CN": "it is impossible that not ~",
      "ko": "it is impossible that not ~",
      "vi": "it is impossible that not ~",
      "id": "it is impossible that not ~"
    },
    "ex": "It is impossible that he doesn't know."
  },
  {
    "id": "G0147",
    "p": "〜ないはずがない",
    "m": {
      "en": "it is impossible that not ~",
      "zh-TW": "it is impossible that not ~",
      "zh-CN": "it is impossible that not ~",
      "ko": "it is impossible that not ~",
      "vi": "it is impossible that not ~",
      "id": "it is impossible that not ~"
    },
    "ex": "It is impossible that she doesn't come."
  },
  {
    "id": "G0148",
    "p": "〜ないことはない",
    "m": {
      "en": "it is not that not ~",
      "zh-TW": "it is not that not ~",
      "zh-CN": "it is not that not ~",
      "ko": "it is not that not ~",
      "vi": "it is not that not ~",
      "id": "it is not that not ~"
    },
    "ex": "It is not that I don't understand."
  },
  {
    "id": "G0149",
    "p": "〜ないものか",
    "m": {
      "en": "I wish ~",
      "zh-TW": "I wish ~",
      "zh-CN": "I wish ~",
      "ko": "I wish ~",
      "vi": "I wish ~",
      "id": "I wish ~"
    },
    "ex": "I wish I could go."
  },
  {
    "id": "G0150",
    "p": "〜ないものでもない",
    "m": {
      "en": "it is not that not ~",
      "zh-TW": "it is not that not ~",
      "zh-CN": "it is not that not ~",
      "ko": "it is not that not ~",
      "vi": "it is not that not ~",
      "id": "it is not that not ~"
    },
    "ex": "It is not impossible."
  },
  {
    "id": "G0151",
    "p": "〜てもかまわない",
    "m": {
      "en": "it doesn't matter if ~",
      "zh-TW": "it doesn't matter if ~",
      "zh-CN": "it doesn't matter if ~",
      "ko": "it doesn't matter if ~",
      "vi": "it doesn't matter if ~",
      "id": "it doesn't matter if ~"
    },
    "ex": "It doesn't matter if you come late."
  },
  {
    "id": "G0152",
    "p": "〜てもさしつかえない",
    "m": {
      "en": "it is okay to ~",
      "zh-TW": "it is okay to ~",
      "zh-CN": "it is okay to ~",
      "ko": "it is okay to ~",
      "vi": "it is okay to ~",
      "id": "it is okay to ~"
    },
    "ex": "It is okay to use this."
  },
  {
    "id": "G0153",
    "p": "〜ても差し支えない",
    "m": {
      "en": "it is okay to ~",
      "zh-TW": "it is okay to ~",
      "zh-CN": "it is okay to ~",
      "ko": "it is okay to ~",
      "vi": "it is okay to ~",
      "id": "it is okay to ~"
    },
    "ex": "It is okay to leave early."
  },
  {
    "id": "G0154",
    "p": "〜てはならない",
    "m": {
      "en": "must not ~",
      "zh-TW": "must not ~",
      "zh-CN": "must not ~",
      "ko": "must not ~",
      "vi": "must not ~",
      "id": "must not ~"
    },
    "ex": "You must not lie."
  },
  {
    "id": "G0155",
    "p": "〜てはだめだ",
    "m": {
      "en": "must not ~",
      "zh-TW": "must not ~",
      "zh-CN": "must not ~",
      "ko": "must not ~",
      "vi": "must not ~",
      "id": "must not ~"
    },
    "ex": "You must not be late."
  },
  {
    "id": "G0156",
    "p": "〜ちゃいけない",
    "m": {
      "en": "must not ~",
      "zh-TW": "must not ~",
      "zh-CN": "must not ~",
      "ko": "must not ~",
      "vi": "must not ~",
      "id": "must not ~"
    },
    "ex": "You must not forget."
  },
  {
    "id": "G0157",
    "p": "〜ちゃだめだ",
    "m": {
      "en": "must not ~",
      "zh-TW": "must not ~",
      "zh-CN": "must not ~",
      "ko": "must not ~",
      "vi": "must not ~",
      "id": "must not ~"
    },
    "ex": "You must not give up."
  },
  {
    "id": "G0158",
    "p": "〜ていただく",
    "m": {
      "en": "to have someone do ~ (polite)",
      "zh-TW": "to have someone do ~ (polite)",
      "zh-CN": "to have someone do ~ (polite)",
      "ko": "to have someone do ~ (polite)",
      "vi": "to have someone do ~ (polite)",
      "id": "to have someone do ~ (polite)"
    },
    "ex": "I had you help me."
  },
  {
    "id": "G0159",
    "p": "〜てくださる",
    "m": {
      "en": "someone does ~ for me (polite)",
      "zh-TW": "someone does ~ for me (polite)",
      "zh-CN": "someone does ~ for me (polite)",
      "ko": "someone does ~ for me (polite)",
      "vi": "someone does ~ for me (polite)",
      "id": "someone does ~ for me (polite)"
    },
    "ex": "You helped me."
  },
  {
    "id": "G0160",
    "p": "〜てさしあげる",
    "m": {
      "en": "to do ~ for someone (polite)",
      "zh-TW": "to do ~ for someone (polite)",
      "zh-CN": "to do ~ for someone (polite)",
      "ko": "to do ~ for someone (polite)",
      "vi": "to do ~ for someone (polite)",
      "id": "to do ~ for someone (polite)"
    },
    "ex": "I helped you."
  },
  {
    "id": "G0161",
    "p": "〜てやる",
    "m": {
      "en": "to do ~ for someone (casual)",
      "zh-TW": "to do ~ for someone (casual)",
      "zh-CN": "to do ~ for someone (casual)",
      "ko": "to do ~ for someone (casual)",
      "vi": "to do ~ for someone (casual)",
      "id": "to do ~ for someone (casual)"
    },
    "ex": "I helped him."
  },
  {
    "id": "G0162",
    "p": "〜ておいた",
    "m": {
      "en": "did ~ in advance",
      "zh-TW": "did ~ in advance",
      "zh-CN": "did ~ in advance",
      "ko": "did ~ in advance",
      "vi": "did ~ in advance",
      "id": "did ~ in advance"
    },
    "ex": "I prepared beforehand."
  },
  {
    "id": "G0163",
    "p": "〜ておいて",
    "m": {
      "en": "do ~ in advance",
      "zh-TW": "do ~ in advance",
      "zh-CN": "do ~ in advance",
      "ko": "do ~ in advance",
      "vi": "do ~ in advance",
      "id": "do ~ in advance"
    },
    "ex": "Please prepare beforehand."
  },
  {
    "id": "G0164",
    "p": "〜ておきたい",
    "m": {
      "en": "want to do ~ in advance",
      "zh-TW": "want to do ~ in advance",
      "zh-CN": "want to do ~ in advance",
      "ko": "want to do ~ in advance",
      "vi": "want to do ~ in advance",
      "id": "want to do ~ in advance"
    },
    "ex": "I want to prepare."
  },
  {
    "id": "G0165",
    "p": "〜てしまった",
    "m": {
      "en": "finished ~ing",
      "zh-TW": "finished ~ing",
      "zh-CN": "finished ~ing",
      "ko": "finished ~ing",
      "vi": "finished ~ing",
      "id": "finished ~ing"
    },
    "ex": "I accidentally ate everything."
  },
  {
    "id": "G0166",
    "p": "〜ちゃう",
    "m": {
      "en": "to finish ~ing (casual)",
      "zh-TW": "to finish ~ing (casual)",
      "zh-CN": "to finish ~ing (casual)",
      "ko": "to finish ~ing (casual)",
      "vi": "to finish ~ing (casual)",
      "id": "to finish ~ing (casual)"
    },
    "ex": "I ate everything."
  },
  {
    "id": "G0167",
    "p": "〜ちゃった",
    "m": {
      "en": "finished ~ing (casual)",
      "zh-TW": "finished ~ing (casual)",
      "zh-CN": "finished ~ing (casual)",
      "ko": "finished ~ing (casual)",
      "vi": "finished ~ing (casual)",
      "id": "finished ~ing (casual)"
    },
    "ex": "I accidentally forgot."
  },
  {
    "id": "G0168",
    "p": "〜てみたい",
    "m": {
      "en": "want to try ~ing",
      "zh-TW": "want to try ~ing",
      "zh-CN": "want to try ~ing",
      "ko": "want to try ~ing",
      "vi": "want to try ~ing",
      "id": "want to try ~ing"
    },
    "ex": "I want to try going."
  },
  {
    "id": "G0169",
    "p": "〜てみよう",
    "m": {
      "en": "let's try ~ing",
      "zh-TW": "let's try ~ing",
      "zh-CN": "let's try ~ing",
      "ko": "let's try ~ing",
      "vi": "let's try ~ing",
      "id": "let's try ~ing"
    },
    "ex": "Let's try eating."
  },
  {
    "id": "G0170",
    "p": "〜てきた",
    "m": {
      "en": "have been ~ing",
      "zh-TW": "have been ~ing",
      "zh-CN": "have been ~ing",
      "ko": "have been ~ing",
      "vi": "have been ~ing",
      "id": "have been ~ing"
    },
    "ex": "I have been waiting."
  },
  {
    "id": "G0171",
    "p": "〜ていった",
    "m": {
      "en": "went on ~ing",
      "zh-TW": "went on ~ing",
      "zh-CN": "went on ~ing",
      "ko": "went on ~ing",
      "vi": "went on ~ing",
      "id": "went on ~ing"
    },
    "ex": "It went on getting worse."
  },
  {
    "id": "G0172",
    "p": "〜ている",
    "m": {
      "en": "is ~ing",
      "zh-TW": "is ~ing",
      "zh-CN": "is ~ing",
      "ko": "is ~ing",
      "vi": "is ~ing",
      "id": "is ~ing"
    },
    "ex": "I am studying."
  },
  {
    "id": "G0173",
    "p": "〜ていた",
    "m": {
      "en": "was ~ing",
      "zh-TW": "was ~ing",
      "zh-CN": "was ~ing",
      "ko": "was ~ing",
      "vi": "was ~ing",
      "id": "was ~ing"
    },
    "ex": "I was studying."
  },
  {
    "id": "G0174",
    "p": "〜てあった",
    "m": {
      "en": "was in the state of ~",
      "zh-TW": "was in the state of ~",
      "zh-CN": "was in the state of ~",
      "ko": "was in the state of ~",
      "vi": "was in the state of ~",
      "id": "was in the state of ~"
    },
    "ex": "The door was open."
  },
  {
    "id": "G0175",
    "p": "〜ていられない",
    "m": {
      "en": "cannot keep ~ing",
      "zh-TW": "cannot keep ~ing",
      "zh-CN": "cannot keep ~ing",
      "ko": "cannot keep ~ing",
      "vi": "cannot keep ~ing",
      "id": "cannot keep ~ing"
    },
    "ex": "I cannot keep waiting."
  },
  {
    "id": "G0176",
    "p": "〜てばかりいる",
    "m": {
      "en": "to do nothing but ~",
      "zh-TW": "to do nothing but ~",
      "zh-CN": "to do nothing but ~",
      "ko": "to do nothing but ~",
      "vi": "to do nothing but ~",
      "id": "to do nothing but ~"
    },
    "ex": "He does nothing but play."
  },
  {
    "id": "G0177",
    "p": "〜てばかりいられない",
    "m": {
      "en": "cannot keep ~ing",
      "zh-TW": "cannot keep ~ing",
      "zh-CN": "cannot keep ~ing",
      "ko": "cannot keep ~ing",
      "vi": "cannot keep ~ing",
      "id": "cannot keep ~ing"
    },
    "ex": "I cannot keep crying."
  },
  {
    "id": "G0178",
    "p": "〜ているところだ",
    "m": {
      "en": "is in the middle of ~ing",
      "zh-TW": "is in the middle of ~ing",
      "zh-CN": "is in the middle of ~ing",
      "ko": "is in the middle of ~ing",
      "vi": "is in the middle of ~ing",
      "id": "is in the middle of ~ing"
    },
    "ex": "I am in the middle of eating."
  },
  {
    "id": "G0179",
    "p": "〜ていたところだ",
    "m": {
      "en": "was in the middle of ~ing",
      "zh-TW": "was in the middle of ~ing",
      "zh-CN": "was in the middle of ~ing",
      "ko": "was in the middle of ~ing",
      "vi": "was in the middle of ~ing",
      "id": "was in the middle of ~ing"
    },
    "ex": "I was about to leave."
  },
  {
    "id": "G0180",
    "p": "〜たところだ",
    "m": {
      "en": "just finished ~ing",
      "zh-TW": "just finished ~ing",
      "zh-CN": "just finished ~ing",
      "ko": "just finished ~ing",
      "vi": "just finished ~ing",
      "id": "just finished ~ing"
    },
    "ex": "I just finished eating."
  },
  {
    "id": "G0181",
    "p": "ようにする",
    "m": {
      "en": "try to; make sure to",
      "zh-TW": "[try to; make sure to]",
      "zh-CN": "[try to; make sure to]",
      "ko": "[try to; make sure to]",
      "vi": "[try to; make sure to]",
      "id": "[try to; make sure to]"
    }
  },
  {
    "id": "G0182",
    "p": "ようになる",
    "m": {
      "en": "come to; become able to",
      "zh-TW": "[come to; become able to]",
      "zh-CN": "[come to; become able to]",
      "ko": "[come to; become able to]",
      "vi": "[come to; become able to]",
      "id": "[come to; become able to]"
    }
  },
  {
    "id": "G0183",
    "p": "ことにする",
    "m": {
      "en": "decide to",
      "zh-TW": "[decide to]",
      "zh-CN": "[decide to]",
      "ko": "[decide to]",
      "vi": "[decide to]",
      "id": "[decide to]"
    }
  },
  {
    "id": "G0184",
    "p": "ことになる",
    "m": {
      "en": "it has been decided that",
      "zh-TW": "[it has been decided that]",
      "zh-CN": "[it has been decided that]",
      "ko": "[it has been decided that]",
      "vi": "[it has been decided that]",
      "id": "[it has been decided that]"
    }
  },
  {
    "id": "G0185",
    "p": "はずだ",
    "m": {
      "en": "should be; expected to",
      "zh-TW": "[should be; expected to]",
      "zh-CN": "[should be; expected to]",
      "ko": "[should be; expected to]",
      "vi": "[should be; expected to]",
      "id": "[should be; expected to]"
    }
  },
  {
    "id": "G0186",
    "p": "はずがない",
    "m": {
      "en": "cannot be; impossible",
      "zh-TW": "[cannot be; impossible]",
      "zh-CN": "[cannot be; impossible]",
      "ko": "[cannot be; impossible]",
      "vi": "[cannot be; impossible]",
      "id": "[cannot be; impossible]"
    }
  },
  {
    "id": "G0187",
    "p": "ところだ",
    "m": {
      "en": "about to; just did",
      "zh-TW": "[about to; just did]",
      "zh-CN": "[about to; just did]",
      "ko": "[about to; just did]",
      "vi": "[about to; just did]",
      "id": "[about to; just did]"
    }
  },
  {
    "id": "G0188",
    "p": "ばかり",
    "m": {
      "en": "just did; nothing but",
      "zh-TW": "[just did; nothing but]",
      "zh-CN": "[just did; nothing but]",
      "ko": "[just did; nothing but]",
      "vi": "[just did; nothing but]",
      "id": "[just did; nothing but]"
    }
  },
  {
    "id": "G0189",
    "p": "らしい",
    "m": {
      "en": "seems like; apparently",
      "zh-TW": "[seems like; apparently]",
      "zh-CN": "[seems like; apparently]",
      "ko": "[seems like; apparently]",
      "vi": "[seems like; apparently]",
      "id": "[seems like; apparently]"
    }
  },
  {
    "id": "G0190",
    "p": "そうだ（様態）",
    "m": {
      "en": "looks like; appears",
      "zh-TW": "[looks like; appears]",
      "zh-CN": "[looks like; appears]",
      "ko": "[looks like; appears]",
      "vi": "[looks like; appears]",
      "id": "[looks like; appears]"
    }
  },
  {
    "id": "G0191",
    "p": "そうだ（伝聞）",
    "m": {
      "en": "I heard that",
      "zh-TW": "[I heard that]",
      "zh-CN": "[I heard that]",
      "ko": "[I heard that]",
      "vi": "[I heard that]",
      "id": "[I heard that]"
    }
  },
  {
    "id": "G0192",
    "p": "みたいだ",
    "m": {
      "en": "like; similar to",
      "zh-TW": "[like; similar to]",
      "zh-CN": "[like; similar to]",
      "ko": "[like; similar to]",
      "vi": "[like; similar to]",
      "id": "[like; similar to]"
    }
  },
  {
    "id": "G0193",
    "p": "かもしれない",
    "m": {
      "en": "might; maybe",
      "zh-TW": "[might; maybe]",
      "zh-CN": "[might; maybe]",
      "ko": "[might; maybe]",
      "vi": "[might; maybe]",
      "id": "[might; maybe]"
    }
  },
  {
    "id": "G0194",
    "p": "でしょう",
    "m": {
      "en": "probably; I think",
      "zh-TW": "[probably; I think]",
      "zh-CN": "[probably; I think]",
      "ko": "[probably; I think]",
      "vi": "[probably; I think]",
      "id": "[probably; I think]"
    }
  },
  {
    "id": "G0195",
    "p": "だろう",
    "m": {
      "en": "probably; I think",
      "zh-TW": "[probably; I think]",
      "zh-CN": "[probably; I think]",
      "ko": "[probably; I think]",
      "vi": "[probably; I think]",
      "id": "[probably; I think]"
    }
  },
  {
    "id": "G0196",
    "p": "つもりだ",
    "m": {
      "en": "intend to; plan to",
      "zh-TW": "[intend to; plan to]",
      "zh-CN": "[intend to; plan to]",
      "ko": "[intend to; plan to]",
      "vi": "[intend to; plan to]",
      "id": "[intend to; plan to]"
    }
  },
  {
    "id": "G0197",
    "p": "ことがある",
    "m": {
      "en": "sometimes; there are times when",
      "zh-TW": "[sometimes; there are times when]",
      "zh-CN": "[sometimes; there are times when]",
      "ko": "[sometimes; there are times when]",
      "vi": "[sometimes; there are times when]",
      "id": "[sometimes; there are times when]"
    }
  },
  {
    "id": "G0198",
    "p": "ことができる",
    "m": {
      "en": "can; be able to",
      "zh-TW": "[can; be able to]",
      "zh-CN": "[can; be able to]",
      "ko": "[can; be able to]",
      "vi": "[can; be able to]",
      "id": "[can; be able to]"
    }
  },
  {
    "id": "G0199",
    "p": "たことがある",
    "m": {
      "en": "have done before",
      "zh-TW": "[have done before]",
      "zh-CN": "[have done before]",
      "ko": "[have done before]",
      "vi": "[have done before]",
      "id": "[have done before]"
    }
  },
  {
    "id": "G0200",
    "p": "たほうがいい",
    "m": {
      "en": "should; had better",
      "zh-TW": "[should; had better]",
      "zh-CN": "[should; had better]",
      "ko": "[should; had better]",
      "vi": "[should; had better]",
      "id": "[should; had better]"
    }
  }
];

if (typeof module !== 'undefined') module.exports = { N4_GRAMMAR };
