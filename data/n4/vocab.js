// Fujisan.AI Data
// Count: 1500

const N4_VOCAB = [
  {
    "id": "V0001",
    "w": "届ける",
    "r": "とどける",
    "m": {
      "en": "to deliver",
      "zh-TW": "送達",
      "zh-CN": "送达",
      "ko": "배달하다",
      "vi": "giao",
      "id": "mengirim",
      "es": "to deliver",
      "pt": "to deliver"
    },
    "pos": "verb-ichidan",
    "ex": "友達に荷物を届ける",
    "syn": [
      "配達する",
      "送る",
      "届け出る"
    ]
  },
  {
    "id": "V0002",
    "w": "届く",
    "r": "とどく",
    "m": {
      "en": "to arrive",
      "zh-TW": "到達",
      "zh-CN": "到达",
      "ko": "도착하다",
      "vi": "đến",
      "id": "sampai",
      "es": "to arrive",
      "pt": "to arrive"
    },
    "pos": "verb-godan",
    "ex": "手紙が届く",
    "syn": [
      "到着する",
      "届けられる",
      "達する"
    ]
  },
  {
    "id": "V0003",
    "w": "届",
    "r": "とどけ",
    "m": {
      "en": "notification",
      "zh-TW": "通知",
      "zh-CN": "通知",
      "ko": "신고",
      "vi": "thông báo",
      "id": "pemberitahuan",
      "es": "notification",
      "pt": "notification"
    },
    "pos": "noun",
    "ex": "届を出す"
  },
  {
    "id": "V0004",
    "w": "届け出",
    "r": "とどけで",
    "m": {
      "en": "report",
      "zh-TW": "申報",
      "zh-CN": "申报",
      "ko": "신고",
      "vi": "khai báo",
      "id": "laporan",
      "es": "report",
      "pt": "report"
    },
    "pos": "noun",
    "ex": "届け出を提出する",
    "syn": [
      "申請",
      "届",
      "報告"
    ]
  },
  {
    "id": "V0005",
    "w": "届け先",
    "r": "とどけさき",
    "m": {
      "en": "destination",
      "zh-TW": "收件地",
      "zh-CN": "收件地",
      "ko": "배송지",
      "vi": "địa chỉ giao",
      "id": "alamat tujuan",
      "es": "destination",
      "pt": "destination"
    },
    "pos": "noun",
    "ex": "届け先を確認する",
    "syn": [
      "送付先",
      "宛先",
      "配送先"
    ]
  },
  {
    "id": "V0006",
    "w": "集める",
    "r": "あつめる",
    "m": {
      "en": "to collect",
      "zh-TW": "收集",
      "zh-CN": "收集",
      "ko": "모으다",
      "vi": "thu thập",
      "id": "mengumpulkan",
      "es": "to collect",
      "pt": "to collect"
    },
    "pos": "verb-ichidan",
    "ex": "切手を集めるのが趣味だ",
    "syn": [
      "収集する",
      "集合させる",
      "寄せ集める"
    ]
  },
  {
    "id": "V0007",
    "w": "集まる",
    "r": "あつまる",
    "m": {
      "en": "to gather",
      "zh-TW": "聚集",
      "zh-CN": "聚集",
      "ko": "모이다",
      "vi": "tụ họp",
      "id": "berkumpul",
      "es": "to gather",
      "pt": "to gather"
    },
    "pos": "verb-godan",
    "ex": "駅前に人が集まる",
    "syn": [
      "集合する",
      "寄り集まる",
      "参集する"
    ]
  },
  {
    "id": "V0008",
    "w": "進む",
    "r": "すすむ",
    "m": {
      "en": "to advance",
      "zh-TW": "前進",
      "zh-CN": "前进",
      "ko": "나아가다",
      "vi": "tiến lên",
      "id": "maju",
      "es": "to advance",
      "pt": "to advance"
    },
    "pos": "verb-godan",
    "ex": "工事が順調に進む",
    "syn": [
      "前進する",
      "進行する",
      "発展する"
    ]
  },
  {
    "id": "V0009",
    "w": "進める",
    "r": "すすめる",
    "m": {
      "en": "to promote",
      "zh-TW": "推進",
      "zh-CN": "推进",
      "ko": "진행하다",
      "vi": "thúc đẩy",
      "id": "memajukan",
      "es": "to promote",
      "pt": "to promote"
    },
    "pos": "verb-ichidan",
    "ex": "計画を進める",
    "syn": [
      "推進する",
      "促進する",
      "前進させる"
    ]
  },
  {
    "id": "V0010",
    "w": "決める",
    "r": "きめる",
    "m": {
      "en": "to decide",
      "zh-TW": "決定",
      "zh-CN": "决定",
      "ko": "정하다",
      "vi": "quyết định",
      "id": "memutuskan",
      "es": "to decide",
      "pt": "to decide"
    },
    "pos": "verb-ichidan",
    "ex": "旅行の日程を決める",
    "syn": [
      "決定する",
      "確定する",
      "定める"
    ]
  },
  {
    "id": "V0011",
    "w": "決まる",
    "r": "きまる",
    "m": {
      "en": "to be decided",
      "zh-TW": "決定了",
      "zh-CN": "决定了",
      "ko": "정해지다",
      "vi": "được quyết định",
      "id": "diputuskan",
      "es": "to be decided",
      "pt": "to be decided"
    },
    "pos": "verb-godan",
    "ex": "会議の場所が決まる",
    "syn": [
      "決定される",
      "確定する",
      "定まる"
    ]
  },
  {
    "id": "V0012",
    "w": "変える",
    "r": "かえる",
    "m": {
      "en": "to change",
      "zh-TW": "改變",
      "zh-CN": "改变",
      "ko": "바꾸다",
      "vi": "thay đổi",
      "id": "mengubah",
      "es": "to change",
      "pt": "to change"
    },
    "pos": "verb-ichidan",
    "ex": "髪型を変える",
    "syn": [
      "変更する",
      "改める",
      "転換する"
    ]
  },
  {
    "id": "V0013",
    "w": "変わる",
    "r": "かわる",
    "m": {
      "en": "to change",
      "zh-TW": "變化",
      "zh-CN": "变化",
      "ko": "변하다",
      "vi": "thay đổi",
      "id": "berubah",
      "es": "to change",
      "pt": "to change"
    },
    "pos": "verb-godan",
    "ex": "季節が変わる",
    "syn": [
      "変化する",
      "変更される",
      "移り変わる"
    ]
  },
  {
    "id": "V0014",
    "w": "伝える",
    "r": "つたえる",
    "m": {
      "en": "to convey",
      "zh-TW": "傳達",
      "zh-CN": "传达",
      "ko": "전하다",
      "vi": "truyền đạt",
      "id": "menyampaikan",
      "es": "to convey",
      "pt": "to convey"
    },
    "pos": "verb-ichidan",
    "ex": "感謝の気持ちを伝える",
    "syn": [
      "伝達する",
      "報告する",
      "知らせる"
    ]
  },
  {
    "id": "V0015",
    "w": "伝わる",
    "r": "つたわる",
    "m": {
      "en": "to be conveyed",
      "zh-TW": "傳開",
      "zh-CN": "传开",
      "ko": "전해지다",
      "vi": "được truyền",
      "id": "tersampaikan",
      "es": "to be conveyed",
      "pt": "to be conveyed"
    },
    "pos": "verb-godan",
    "ex": "噂が伝わる",
    "syn": [
      "伝達される",
      "広まる",
      "知れ渡る"
    ]
  },
  {
    "id": "V0016",
    "w": "育てる",
    "r": "そだてる",
    "m": {
      "en": "to raise",
      "zh-TW": "培養",
      "zh-CN": "培养",
      "ko": "기르다",
      "vi": "nuôi dưỡng",
      "id": "membesarkan",
      "es": "to raise",
      "pt": "to raise"
    },
    "pos": "verb-ichidan",
    "ex": "花を育てる",
    "syn": [
      "養う",
      "育成する",
      "成長させる"
    ]
  },
  {
    "id": "V0017",
    "w": "育つ",
    "r": "そだつ",
    "m": {
      "en": "to grow up",
      "zh-TW": "成長",
      "zh-CN": "成长",
      "ko": "자라다",
      "vi": "lớn lên",
      "id": "tumbuh",
      "es": "to grow up",
      "pt": "to grow up"
    },
    "pos": "verb-godan",
    "ex": "子供が元気に育つ",
    "syn": [
      "成長する",
      "発育する",
      "大きくなる"
    ]
  },
  {
    "id": "V0018",
    "w": "増える",
    "r": "ふえる",
    "m": {
      "en": "to increase",
      "zh-TW": "增加",
      "zh-CN": "增加",
      "ko": "늘다",
      "vi": "tăng",
      "id": "bertambah",
      "es": "to increase",
      "pt": "to increase"
    },
    "pos": "verb-ichidan",
    "ex": "観光客が増える",
    "syn": [
      "増加する",
      "多くなる",
      "増大する"
    ]
  },
  {
    "id": "V0019",
    "w": "増やす",
    "r": "ふやす",
    "m": {
      "en": "to increase",
      "zh-TW": "增加",
      "zh-CN": "增加",
      "ko": "늘리다",
      "vi": "tăng thêm",
      "id": "menambah",
      "es": "to increase",
      "pt": "to increase"
    },
    "pos": "verb-godan",
    "ex": "貯金を増やす",
    "syn": [
      "増加させる",
      "拡大する",
      "多くする"
    ]
  },
  {
    "id": "V0020",
    "w": "へる",
    "r": "へる",
    "m": {
      "en": "to decrease",
      "zh-TW": "減少",
      "zh-CN": "减少",
      "ko": "줄다",
      "vi": "giảm",
      "id": "berkurang",
      "es": "to decrease",
      "pt": "to decrease"
    },
    "pos": "verb-ichidan",
    "ex": "人口が減る",
    "syn": [
      "減少する",
      "少なくなる",
      "縮小する"
    ]
  },
  {
    "id": "V0021",
    "w": "へらす",
    "r": "へらす",
    "m": {
      "en": "to reduce",
      "zh-TW": "減少",
      "zh-CN": "减少",
      "ko": "줄이다",
      "vi": "giảm bớt",
      "id": "mengurangi",
      "es": "to reduce",
      "pt": "to reduce"
    },
    "pos": "verb-godan",
    "ex": "出費を減らす",
    "syn": [
      "削減する",
      "縮小する",
      "少なくする"
    ]
  },
  {
    "id": "V0022",
    "w": "つづける",
    "r": "つづける",
    "m": {
      "en": "to continue",
      "zh-TW": "繼續",
      "zh-CN": "继续",
      "ko": "계속하다",
      "vi": "tiếp tục",
      "id": "melanjutkan",
      "es": "to continue",
      "pt": "to continue"
    },
    "pos": "verb-ichidan",
    "ex": "毎日運動を続ける",
    "syn": [
      "継続する",
      "持続する",
      "維持する"
    ]
  },
  {
    "id": "V0023",
    "w": "つづく",
    "r": "つづく",
    "m": {
      "en": "to continue",
      "zh-TW": "持續",
      "zh-CN": "持续",
      "ko": "이어지다",
      "vi": "tiếp diễn",
      "id": "berlanjut",
      "es": "to continue",
      "pt": "to continue"
    },
    "pos": "verb-godan",
    "ex": "雨が三日間続く",
    "syn": [
      "継続する",
      "持続する",
      "連続する"
    ]
  },
  {
    "id": "V0024",
    "w": "のこる",
    "r": "のこる",
    "m": {
      "en": "to remain",
      "zh-TW": "留下",
      "zh-CN": "留下",
      "ko": "남다",
      "vi": "còn lại",
      "id": "tersisa",
      "es": "to remain",
      "pt": "to remain"
    },
    "pos": "verb-godan",
    "ex": "印象に残る",
    "syn": [
      "残存する",
      "とどまる",
      "留まる"
    ]
  },
  {
    "id": "V0025",
    "w": "のこす",
    "r": "のこす",
    "m": {
      "en": "to leave",
      "zh-TW": "留下",
      "zh-CN": "留下",
      "ko": "남기다",
      "vi": "để lại",
      "id": "meninggalkan",
      "es": "to leave",
      "pt": "to leave"
    },
    "pos": "verb-godan",
    "ex": "仕事を残す",
    "syn": [
      "残存させる",
      "保存する",
      "取り置く"
    ]
  },
  {
    "id": "V0026",
    "w": "かたづける",
    "r": "かたづける",
    "m": {
      "en": "to tidy up",
      "zh-TW": "整理",
      "zh-CN": "整理",
      "ko": "정리하다",
      "vi": "dọn dẹp",
      "id": "merapikan",
      "es": "to tidy up",
      "pt": "to tidy up"
    },
    "pos": "verb-ichidan",
    "ex": "部屋を片付ける",
    "syn": [
      "整理する",
      "整頓する",
      "清掃する"
    ]
  },
  {
    "id": "V0027",
    "w": "かたづく",
    "r": "かたづく",
    "m": {
      "en": "to be tidied",
      "zh-TW": "整理好",
      "zh-CN": "整理好",
      "ko": "정리되다",
      "vi": "được dọn",
      "id": "rapi",
      "es": "to be tidied",
      "pt": "to be tidied"
    },
    "pos": "verb-godan",
    "ex": "仕事が片付く",
    "syn": [
      "整理される",
      "解決する",
      "終わる"
    ]
  },
  {
    "id": "V0028",
    "w": "見つける",
    "r": "みつける",
    "m": {
      "en": "to find",
      "zh-TW": "找到",
      "zh-CN": "找到",
      "ko": "찾다",
      "vi": "tìm thấy",
      "id": "menemukan",
      "es": "to find",
      "pt": "to find"
    },
    "pos": "verb-ichidan",
    "ex": "落とし物を見つける",
    "syn": [
      "発見する",
      "見出す",
      "探し出す"
    ]
  },
  {
    "id": "V0029",
    "w": "見つかる",
    "r": "みつかる",
    "m": {
      "en": "to be found",
      "zh-TW": "被找到",
      "zh-CN": "被找到",
      "ko": "발견되다",
      "vi": "được tìm thấy",
      "id": "ditemukan",
      "es": "to be found",
      "pt": "to be found"
    },
    "pos": "verb-godan",
    "ex": "犯人が見つかる",
    "syn": [
      "発見される",
      "見出される",
      "判明する"
    ]
  },
  {
    "id": "V0030",
    "w": "間に合う",
    "r": "まにあう",
    "m": {
      "en": "to be in time",
      "zh-TW": "來得及",
      "zh-CN": "来得及",
      "ko": "맞추다",
      "vi": "kịp",
      "id": "tepat waktu",
      "es": "to be in time",
      "pt": "to be in time"
    },
    "pos": "verb-godan",
    "ex": "電車に間に合う",
    "syn": [
      "到着する",
      "追いつく",
      "達する"
    ]
  },
  {
    "id": "V0031",
    "w": "やくだつ",
    "r": "やくだつ",
    "m": {
      "en": "to be useful",
      "zh-TW": "有用",
      "zh-CN": "有用",
      "ko": "도움이 되다",
      "vi": "hữu ích",
      "id": "berguna",
      "es": "to be useful",
      "pt": "to be useful"
    },
    "pos": "verb-godan",
    "ex": "経験が役立つ",
    "syn": [
      "役に立つ",
      "有用である",
      "活用できる"
    ]
  },
  {
    "id": "V0032",
    "w": "きづく",
    "r": "きづく",
    "m": {
      "en": "to notice",
      "zh-TW": "注意到",
      "zh-CN": "注意到",
      "ko": "알아차리다",
      "vi": "nhận ra",
      "id": "menyadari",
      "es": "to notice",
      "pt": "to notice"
    },
    "pos": "verb-godan",
    "ex": "間違いに気付く",
    "syn": [
      "気がつく",
      "認識する",
      "察知する"
    ]
  },
  {
    "id": "V0033",
    "w": "思い出す",
    "r": "おもいだす",
    "m": {
      "en": "to remember",
      "zh-TW": "想起",
      "zh-CN": "想起",
      "ko": "떠올리다",
      "vi": "nhớ lại",
      "id": "mengingat",
      "es": "to remember",
      "pt": "to remember"
    },
    "pos": "verb-godan",
    "ex": "子供の頃を思い出す",
    "syn": [
      "回想する",
      "想起する",
      "記憶を呼び起こす"
    ]
  },
  {
    "id": "V0034",
    "w": "もうしこむ",
    "r": "もうしこむ",
    "m": {
      "en": "to apply",
      "zh-TW": "申請",
      "zh-CN": "申请",
      "ko": "신청하다",
      "vi": "đăng ký",
      "id": "mendaftar",
      "es": "to apply",
      "pt": "to apply"
    },
    "pos": "verb-godan",
    "ex": "セミナーに申し込む",
    "syn": [
      "応募する",
      "登録する",
      "申請する"
    ]
  },
  {
    "id": "V0035",
    "w": "とりけす",
    "r": "とりけす",
    "m": {
      "en": "to cancel",
      "zh-TW": "取消",
      "zh-CN": "取消",
      "ko": "취소하다",
      "vi": "hủy bỏ",
      "id": "membatalkan",
      "es": "to cancel",
      "pt": "to cancel"
    },
    "pos": "verb-godan",
    "ex": "予約を取り消す",
    "syn": [
      "キャンセルする",
      "解約する",
      "撤回する"
    ]
  },
  {
    "id": "V0036",
    "w": "ひきうける",
    "r": "ひきうける",
    "m": {
      "en": "to undertake",
      "zh-TW": "承擔",
      "zh-CN": "承担",
      "ko": "맡다",
      "vi": "đảm nhận",
      "id": "menerima",
      "es": "to undertake",
      "pt": "to undertake"
    },
    "pos": "verb-ichidan",
    "ex": "仕事を引き受ける",
    "syn": [
      "担当する",
      "請け負う",
      "受諾する"
    ]
  },
  {
    "id": "V0037",
    "w": "うちあわせる",
    "r": "うちあわせる",
    "m": {
      "en": "to arrange",
      "zh-TW": "商議",
      "zh-CN": "商议",
      "ko": "협의하다",
      "vi": "bàn bạc",
      "id": "berunding",
      "es": "to arrange",
      "pt": "to arrange"
    },
    "pos": "verb-ichidan",
    "ex": "打ち合わせることができる"
  },
  {
    "id": "V0038",
    "w": "うけとる",
    "r": "うけとる",
    "m": {
      "en": "to receive",
      "zh-TW": "收到",
      "zh-CN": "收到",
      "ko": "받다",
      "vi": "nhận",
      "id": "menerima",
      "es": "to receive",
      "pt": "to receive"
    },
    "pos": "verb-godan",
    "ex": "荷物を受け取る",
    "syn": [
      "受領する",
      "受理する",
      "もらう"
    ]
  },
  {
    "id": "V0039",
    "w": "うけつける",
    "r": "うけつける",
    "m": {
      "en": "to accept",
      "zh-TW": "受理",
      "zh-CN": "受理",
      "ko": "접수하다",
      "vi": "tiếp nhận",
      "id": "menerima",
      "es": "to accept",
      "pt": "to accept"
    },
    "pos": "verb-ichidan",
    "ex": "申し込みを受け付ける",
    "syn": [
      "受理する",
      "受諾する",
      "承認する"
    ]
  },
  {
    "id": "V0040",
    "w": "とりあげる",
    "r": "とりあげる",
    "m": {
      "en": "to take up",
      "zh-TW": "取出",
      "zh-CN": "取出",
      "ko": "다루다",
      "vi": "đề cập",
      "id": "mengangkat",
      "es": "to take up",
      "pt": "to take up"
    },
    "pos": "verb-godan",
    "ex": "テーマとして取り上げる",
    "syn": [
      "扱う",
      "採用する",
      "選ぶ"
    ]
  },
  {
    "id": "V0041",
    "w": "よろこぶ",
    "r": "よろこぶ",
    "m": {
      "en": "to be pleased",
      "zh-TW": "高興",
      "zh-CN": "高兴",
      "ko": "기뻐하다",
      "vi": "vui mừng",
      "id": "senang",
      "es": "to be pleased",
      "pt": "to be pleased"
    },
    "pos": "verb-godan",
    "ex": "プレゼントを喜ぶ",
    "syn": [
      "嬉しがる",
      "歓喜する",
      "楽しむ"
    ]
  },
  {
    "id": "V0042",
    "w": "かなしむ",
    "r": "かなしむ",
    "m": {
      "en": "to be sad",
      "zh-TW": "悲傷",
      "zh-CN": "悲伤",
      "ko": "슬퍼하다",
      "vi": "buồn",
      "id": "bersedih",
      "es": "to be sad",
      "pt": "to be sad"
    },
    "pos": "verb-godan",
    "ex": "別れを悲しむ",
    "syn": [
      "嘆く",
      "悔やむ",
      "哀しむ"
    ]
  },
  {
    "id": "V0043",
    "w": "おどろく",
    "r": "おどろく",
    "m": {
      "en": "to be surprised",
      "zh-TW": "驚訝",
      "zh-CN": "惊讶",
      "ko": "놀라다",
      "vi": "ngạc nhiên",
      "id": "terkejut",
      "es": "to be surprised",
      "pt": "to be surprised"
    },
    "pos": "verb-godan",
    "ex": "ニュースに驚く",
    "syn": [
      "びっくりする",
      "仰天する",
      "衝撃を受ける"
    ]
  },
  {
    "id": "V0044",
    "w": "おこる",
    "r": "おこる",
    "m": {
      "en": "to get angry",
      "zh-TW": "生氣",
      "zh-CN": "生气",
      "ko": "화내다",
      "vi": "tức giận",
      "id": "marah",
      "es": "to get angry",
      "pt": "to get angry"
    },
    "pos": "verb-godan",
    "ex": "失礼な態度に怒る",
    "syn": [
      "腹を立てる",
      "激怒する",
      "憤慨する"
    ]
  },
  {
    "id": "V0045",
    "w": "こまる",
    "r": "こまる",
    "m": {
      "en": "to be troubled",
      "zh-TW": "困擾",
      "zh-CN": "困扰",
      "ko": "곤란하다",
      "vi": "khó xử",
      "id": "kesulitan",
      "es": "to be troubled",
      "pt": "to be troubled"
    },
    "pos": "verb-godan",
    "ex": "道に迷って困る",
    "syn": [
      "困惑する",
      "当惑する",
      "難儀する"
    ]
  },
  {
    "id": "V0046",
    "w": "まよう",
    "r": "まよう",
    "m": {
      "en": "to hesitate",
      "zh-TW": "猶豫",
      "zh-CN": "犹豫",
      "ko": "망설이다",
      "vi": "do dự",
      "id": "ragu",
      "es": "to hesitate",
      "pt": "to hesitate"
    },
    "pos": "verb-godan",
    "ex": "進路に迷う",
    "syn": [
      "悩む",
      "ためらう",
      "躊躇する"
    ]
  },
  {
    "id": "V0047",
    "w": "なれる",
    "r": "なれる",
    "m": {
      "en": "to get used to",
      "zh-TW": "習慣",
      "zh-CN": "习惯",
      "ko": "익숙해지다",
      "vi": "quen",
      "id": "terbiasa",
      "es": "to get used to",
      "pt": "to get used to"
    },
    "pos": "verb-ichidan",
    "ex": "新しい環境に慣れる",
    "syn": [
      "習熟する",
      "馴染む",
      "順応する"
    ]
  },
  {
    "id": "V0048",
    "w": "つかれる",
    "r": "つかれる",
    "m": {
      "en": "to get tired",
      "zh-TW": "累",
      "zh-CN": "累",
      "ko": "피곤하다",
      "vi": "mệt",
      "id": "lelah",
      "es": "to get tired",
      "pt": "to get tired"
    },
    "pos": "verb-ichidan",
    "ex": "仕事で疲れる",
    "syn": [
      "疲労する",
      "くたびれる",
      "消耗する"
    ]
  },
  {
    "id": "V0049",
    "w": "太る",
    "r": "ふとる",
    "m": {
      "en": "to gain weight",
      "zh-TW": "變胖",
      "zh-CN": "变胖",
      "ko": "살찌다",
      "vi": "béo",
      "id": "gemuk",
      "es": "to gain weight",
      "pt": "to gain weight"
    },
    "pos": "verb-godan",
    "ex": "食べ過ぎて太る",
    "syn": [
      "肥える",
      "体重が増える",
      "ふくよかになる"
    ]
  },
  {
    "id": "V0050",
    "w": "やせる",
    "r": "やせる",
    "m": {
      "en": "to lose weight",
      "zh-TW": "變瘦",
      "zh-CN": "变瘦",
      "ko": "살빠지다",
      "vi": "gầy",
      "id": "kurus",
      "es": "to lose weight",
      "pt": "to lose weight"
    },
    "pos": "verb-ichidan",
    "ex": "ダイエットで痩せる",
    "syn": [
      "体重が減る",
      "スリムになる",
      "細くなる"
    ]
  },
  {
    "id": "V0051",
    "w": "まもる",
    "r": "まもる",
    "m": {
      "en": "to protect",
      "zh-TW": "保護",
      "zh-CN": "保护",
      "ko": "지키다",
      "vi": "bảo vệ",
      "id": "melindungi",
      "es": "to protect",
      "pt": "to protect"
    },
    "pos": "verb-godan",
    "ex": "守ることができる"
  },
  {
    "id": "V0052",
    "w": "たすける",
    "r": "たすける",
    "m": {
      "en": "to help",
      "zh-TW": "幫助",
      "zh-CN": "帮助",
      "ko": "돕다",
      "vi": "giúp",
      "id": "membantu",
      "es": "to help",
      "pt": "to help"
    },
    "pos": "verb-ichidan",
    "ex": "助けることができる"
  },
  {
    "id": "V0053",
    "w": "すくう",
    "r": "すくう",
    "m": {
      "en": "to save",
      "zh-TW": "拯救",
      "zh-CN": "拯救",
      "ko": "구하다",
      "vi": "cứu",
      "id": "menyelamatkan",
      "es": "to save",
      "pt": "to save"
    },
    "pos": "verb-godan",
    "ex": "救うことができる"
  },
  {
    "id": "V0054",
    "w": "ゆるす",
    "r": "ゆるす",
    "m": {
      "en": "to forgive",
      "zh-TW": "原諒",
      "zh-CN": "原谅",
      "ko": "용서하다",
      "vi": "tha thứ",
      "id": "memaafkan",
      "es": "to forgive",
      "pt": "to forgive"
    },
    "pos": "verb-godan",
    "ex": "許すことができる"
  },
  {
    "id": "V0055",
    "w": "しかる",
    "r": "しかる",
    "m": {
      "en": "to scold",
      "zh-TW": "責罵",
      "zh-CN": "责骂",
      "ko": "꾸짖다",
      "vi": "mắng",
      "id": "memarahi",
      "es": "to scold",
      "pt": "to scold"
    },
    "pos": "verb-godan",
    "ex": "叱ることができる"
  },
  {
    "id": "V0056",
    "w": "ほめる",
    "r": "ほめる",
    "m": {
      "en": "to praise",
      "zh-TW": "稱讚",
      "zh-CN": "称赞",
      "ko": "칭찬하다",
      "vi": "khen",
      "id": "memuji",
      "es": "to praise",
      "pt": "to praise"
    },
    "pos": "verb-ichidan",
    "ex": "褒めることができる"
  },
  {
    "id": "V0057",
    "w": "あやまる",
    "r": "あやまる",
    "m": {
      "en": "to apologize",
      "zh-TW": "道歉",
      "zh-CN": "道歉",
      "ko": "사과하다",
      "vi": "xin lỗi",
      "id": "minta maaf",
      "es": "to apologize",
      "pt": "to apologize"
    },
    "pos": "verb-godan",
    "ex": "謝ることができる"
  },
  {
    "id": "V0058",
    "w": "ことわる",
    "r": "ことわる",
    "m": {
      "en": "to refuse",
      "zh-TW": "拒絕",
      "zh-CN": "拒绝",
      "ko": "거절하다",
      "vi": "từ chối",
      "id": "menolak",
      "es": "to refuse",
      "pt": "to refuse"
    },
    "pos": "verb-godan",
    "ex": "断ることができる"
  },
  {
    "id": "V0059",
    "w": "たのむ",
    "r": "たのむ",
    "m": {
      "en": "to request",
      "zh-TW": "請求",
      "zh-CN": "请求",
      "ko": "부탁하다",
      "vi": "nhờ",
      "id": "meminta",
      "es": "to request",
      "pt": "to request"
    },
    "pos": "verb-godan",
    "ex": "頼むことができる"
  },
  {
    "id": "V0060",
    "w": "さそう",
    "r": "さそう",
    "m": {
      "en": "to invite",
      "zh-TW": "邀請",
      "zh-CN": "邀请",
      "ko": "초대하다",
      "vi": "mời",
      "id": "mengundang",
      "es": "to invite",
      "pt": "to invite"
    },
    "pos": "verb-godan",
    "ex": "誘うことができる"
  },
  {
    "id": "V0061",
    "w": "しょうかいする",
    "r": "しょうかいする",
    "m": {
      "en": "to introduce",
      "zh-TW": "介紹",
      "zh-CN": "介绍",
      "ko": "소개하다",
      "vi": "giới thiệu",
      "id": "memperkenalkan",
      "es": "to introduce",
      "pt": "to introduce"
    },
    "pos": "verb-suru",
    "ex": "紹介することができる"
  },
  {
    "id": "V0062",
    "w": "あんないする",
    "r": "あんないする",
    "m": {
      "en": "to guide",
      "zh-TW": "帶領",
      "zh-CN": "带领",
      "ko": "안내하다",
      "vi": "hướng dẫn",
      "id": "memandu",
      "es": "to guide",
      "pt": "to guide"
    },
    "pos": "verb-suru",
    "ex": "案内することができる"
  },
  {
    "id": "V0063",
    "w": "説明する",
    "r": "せつめいする",
    "m": {
      "en": "to explain",
      "zh-TW": "說明",
      "zh-CN": "说明",
      "ko": "설명하다",
      "vi": "giải thích",
      "id": "menjelaskan",
      "es": "to explain",
      "pt": "to explain"
    },
    "pos": "verb-suru",
    "ex": "説明することができる"
  },
  {
    "id": "V0064",
    "w": "報告する",
    "r": "ほうこくする",
    "m": {
      "en": "to report",
      "zh-TW": "報告",
      "zh-CN": "报告",
      "ko": "보고하다",
      "vi": "báo cáo",
      "id": "melaporkan",
      "es": "to report",
      "pt": "to report"
    },
    "pos": "verb-suru",
    "ex": "報告することができる"
  },
  {
    "id": "V0065",
    "w": "そうだんする",
    "r": "そうだんする",
    "m": {
      "en": "to consult",
      "zh-TW": "商量",
      "zh-CN": "商量",
      "ko": "상담하다",
      "vi": "tham khảo",
      "id": "berkonsultasi",
      "es": "to consult",
      "pt": "to consult"
    },
    "pos": "verb-suru",
    "ex": "相談することができる"
  },
  {
    "id": "V0066",
    "w": "れんらくする",
    "r": "れんらくする",
    "m": {
      "en": "to contact",
      "zh-TW": "聯絡",
      "zh-CN": "联络",
      "ko": "연락하다",
      "vi": "liên lạc",
      "id": "menghubungi",
      "es": "to contact",
      "pt": "to contact"
    },
    "pos": "verb-suru",
    "ex": "連絡することができる"
  },
  {
    "id": "V0067",
    "w": "かくにんする",
    "r": "かくにんする",
    "m": {
      "en": "to confirm",
      "zh-TW": "確認",
      "zh-CN": "确认",
      "ko": "확인하다",
      "vi": "xác nhận",
      "id": "mengkonfirmasi",
      "es": "to confirm",
      "pt": "to confirm"
    },
    "pos": "verb-suru",
    "ex": "確認することができる"
  },
  {
    "id": "V0068",
    "w": "じゅんびする",
    "r": "じゅんびする",
    "m": {
      "en": "to prepare",
      "zh-TW": "準備",
      "zh-CN": "准备",
      "ko": "준비하다",
      "vi": "chuẩn bị",
      "id": "mempersiapkan",
      "es": "to prepare",
      "pt": "to prepare"
    },
    "pos": "verb-suru",
    "ex": "準備することができる"
  },
  {
    "id": "V0069",
    "w": "計画する",
    "r": "けいかくする",
    "m": {
      "en": "to plan",
      "zh-TW": "計劃",
      "zh-CN": "计划",
      "ko": "계획하다",
      "vi": "lên kế hoạch",
      "id": "merencanakan",
      "es": "to plan",
      "pt": "to plan"
    },
    "pos": "verb-suru",
    "ex": "計画することができる"
  },
  {
    "id": "V0070",
    "w": "よやくする",
    "r": "よやくする",
    "m": {
      "en": "to reserve",
      "zh-TW": "預約",
      "zh-CN": "预约",
      "ko": "예약하다",
      "vi": "đặt trước",
      "id": "memesan",
      "es": "to reserve",
      "pt": "to reserve"
    },
    "pos": "verb-suru",
    "ex": "予約することができる"
  },
  {
    "id": "V0071",
    "w": "注文する",
    "r": "ちゅうもんする",
    "m": {
      "en": "to order",
      "zh-TW": "點餐",
      "zh-CN": "点餐",
      "ko": "주문하다",
      "vi": "gọi món",
      "id": "memesan",
      "es": "to order",
      "pt": "to order"
    },
    "pos": "verb-suru",
    "ex": "注文することができる"
  },
  {
    "id": "V0072",
    "w": "さんかする",
    "r": "さんかする",
    "m": {
      "en": "to participate",
      "zh-TW": "參加",
      "zh-CN": "参加",
      "ko": "참가하다",
      "vi": "tham gia",
      "id": "berpartisipasi",
      "es": "to participate",
      "pt": "to participate"
    },
    "pos": "verb-suru",
    "ex": "参加することができる"
  },
  {
    "id": "V0073",
    "w": "しゅっせきする",
    "r": "しゅっせきする",
    "m": {
      "en": "to attend",
      "zh-TW": "出席",
      "zh-CN": "出席",
      "ko": "출석하다",
      "vi": "tham dự",
      "id": "menghadiri",
      "es": "to attend",
      "pt": "to attend"
    },
    "pos": "verb-suru",
    "ex": "出席することができる"
  },
  {
    "id": "V0074",
    "w": "けっせきする",
    "r": "けっせきする",
    "m": {
      "en": "to be absent",
      "zh-TW": "缺席",
      "zh-CN": "缺席",
      "ko": "결석하다",
      "vi": "vắng mặt",
      "id": "absen",
      "es": "to be absent",
      "pt": "to be absent"
    },
    "pos": "verb-suru",
    "ex": "欠席することができる"
  },
  {
    "id": "V0075",
    "w": "ちこくする",
    "r": "ちこくする",
    "m": {
      "en": "to be late",
      "zh-TW": "遲到",
      "zh-CN": "迟到",
      "ko": "지각하다",
      "vi": "đến muộn",
      "id": "terlambat",
      "es": "to be late",
      "pt": "to be late"
    },
    "pos": "verb-suru",
    "ex": "遅刻することができる"
  },
  {
    "id": "V0076",
    "w": "そつぎょうする",
    "r": "そつぎょうする",
    "m": {
      "en": "to graduate",
      "zh-TW": "畢業",
      "zh-CN": "毕业",
      "ko": "졸업하다",
      "vi": "tốt nghiệp",
      "id": "lulus",
      "es": "to graduate",
      "pt": "to graduate"
    },
    "pos": "verb-suru",
    "ex": "卒業することができる"
  },
  {
    "id": "V0077",
    "w": "入学する",
    "r": "にゅうがくする",
    "m": {
      "en": "to enroll",
      "zh-TW": "入學",
      "zh-CN": "入学",
      "ko": "입학하다",
      "vi": "nhập học",
      "id": "masuk sekolah",
      "es": "to enroll",
      "pt": "to enroll"
    },
    "pos": "verb-suru",
    "ex": "入学することができる"
  },
  {
    "id": "V0078",
    "w": "しゅうしょくする",
    "r": "しゅうしょくする",
    "m": {
      "en": "to get job",
      "zh-TW": "就職",
      "zh-CN": "就职",
      "ko": "취직하다",
      "vi": "xin việc",
      "id": "bekerja",
      "es": "to get job",
      "pt": "to get job"
    },
    "pos": "verb-suru",
    "ex": "就職することができる"
  },
  {
    "id": "V0079",
    "w": "たいしょくする",
    "r": "たいしょくする",
    "m": {
      "en": "to retire",
      "zh-TW": "退休",
      "zh-CN": "退休",
      "ko": "퇴직하다",
      "vi": "nghỉ việc",
      "id": "pensiun",
      "es": "to retire",
      "pt": "to retire"
    },
    "pos": "verb-suru",
    "ex": "退職することができる"
  },
  {
    "id": "V0080",
    "w": "てんしょくする",
    "r": "てんしょくする",
    "m": {
      "en": "to change job",
      "zh-TW": "轉職",
      "zh-CN": "转职",
      "ko": "이직하다",
      "vi": "đổi việc",
      "id": "pindah kerja",
      "es": "to change job",
      "pt": "to change job"
    },
    "pos": "verb-suru",
    "ex": "転職することができる"
  },
  {
    "id": "V0081",
    "w": "しゅっちょうする",
    "r": "しゅっちょうする",
    "m": {
      "en": "business trip",
      "zh-TW": "出差",
      "zh-CN": "出差",
      "ko": "출장하다",
      "vi": "công tác",
      "id": "dinas",
      "es": "business trip",
      "pt": "business trip"
    },
    "pos": "verb-suru",
    "ex": "出張することができる"
  },
  {
    "id": "V0082",
    "w": "ざんぎょうする",
    "r": "ざんぎょうする",
    "m": {
      "en": "to work overtime",
      "zh-TW": "加班",
      "zh-CN": "加班",
      "ko": "야근하다",
      "vi": "làm thêm",
      "id": "lembur",
      "es": "to work overtime",
      "pt": "to work overtime"
    },
    "pos": "verb-suru",
    "ex": "残業することができる"
  },
  {
    "id": "V0083",
    "w": "きゅうけいする",
    "r": "きゅうけいする",
    "m": {
      "en": "to take break",
      "zh-TW": "休息",
      "zh-CN": "休息",
      "ko": "휴식하다",
      "vi": "nghỉ ngơi",
      "id": "istirahat",
      "es": "to take break",
      "pt": "to take break"
    },
    "pos": "verb-suru",
    "ex": "休憩することができる"
  },
  {
    "id": "V0084",
    "w": "さんぽする",
    "r": "さんぽする",
    "m": {
      "en": "to take walk",
      "zh-TW": "散步",
      "zh-CN": "散步",
      "ko": "산책하다",
      "vi": "đi dạo",
      "id": "jalan-jalan",
      "es": "to take walk",
      "pt": "to take walk"
    },
    "pos": "verb-suru",
    "ex": "散歩することができる"
  },
  {
    "id": "V0085",
    "w": "運動する",
    "r": "うんどうする",
    "m": {
      "en": "to exercise",
      "zh-TW": "運動",
      "zh-CN": "运动",
      "ko": "운동하다",
      "vi": "tập thể dục",
      "id": "berolahraga",
      "es": "to exercise",
      "pt": "to exercise"
    },
    "pos": "verb-suru",
    "ex": "運動することができる"
  },
  {
    "id": "V0086",
    "w": "れんしゅうする",
    "r": "れんしゅうする",
    "m": {
      "en": "to practice",
      "zh-TW": "練習",
      "zh-CN": "练习",
      "ko": "연습하다",
      "vi": "luyện tập",
      "id": "berlatih",
      "es": "to practice",
      "pt": "to practice"
    },
    "pos": "verb-suru",
    "ex": "練習することができる"
  },
  {
    "id": "V0087",
    "w": "経験する",
    "r": "けいけんする",
    "m": {
      "en": "to experience",
      "zh-TW": "經歷",
      "zh-CN": "经历",
      "ko": "경험하다",
      "vi": "trải nghiệm",
      "id": "mengalami",
      "es": "to experience",
      "pt": "to experience"
    },
    "pos": "verb-suru",
    "ex": "経験することができる"
  },
  {
    "id": "V0088",
    "w": "せいこうする",
    "r": "せいこうする",
    "m": {
      "en": "to succeed",
      "zh-TW": "成功",
      "zh-CN": "成功",
      "ko": "성공하다",
      "vi": "thành công",
      "id": "berhasil",
      "es": "to succeed",
      "pt": "to succeed"
    },
    "pos": "verb-suru",
    "ex": "成功することができる"
  },
  {
    "id": "V0089",
    "w": "しっぱいする",
    "r": "しっぱいする",
    "m": {
      "en": "to fail",
      "zh-TW": "失敗",
      "zh-CN": "失败",
      "ko": "실패하다",
      "vi": "thất bại",
      "id": "gagal",
      "es": "to fail",
      "pt": "to fail"
    },
    "pos": "verb-suru",
    "ex": "失敗することができる"
  },
  {
    "id": "V0090",
    "w": "どりょくする",
    "r": "どりょくする",
    "m": {
      "en": "to make effort",
      "zh-TW": "努力",
      "zh-CN": "努力",
      "ko": "노력하다",
      "vi": "nỗ lực",
      "id": "berusaha",
      "es": "to make effort",
      "pt": "to make effort"
    },
    "pos": "verb-suru",
    "ex": "努力することができる"
  },
  {
    "id": "V0091",
    "w": "注意する",
    "r": "ちゅういする",
    "m": {
      "en": "to be careful",
      "zh-TW": "注意",
      "zh-CN": "注意",
      "ko": "주의하다",
      "vi": "chú ý",
      "id": "berhati-hati",
      "es": "to be careful",
      "pt": "to be careful"
    },
    "pos": "verb-suru",
    "ex": "注意することができる"
  },
  {
    "id": "V0092",
    "w": "しんぱいする",
    "r": "しんぱいする",
    "m": {
      "en": "to worry",
      "zh-TW": "擔心",
      "zh-CN": "担心",
      "ko": "걱정하다",
      "vi": "lo lắng",
      "id": "khawatir",
      "es": "to worry",
      "pt": "to worry"
    },
    "pos": "verb-suru",
    "ex": "心配することができる"
  },
  {
    "id": "V0093",
    "w": "安心する",
    "r": "あんしんする",
    "m": {
      "en": "to be relieved",
      "zh-TW": "放心",
      "zh-CN": "放心",
      "ko": "안심하다",
      "vi": "yên tâm",
      "id": "lega",
      "es": "to be relieved",
      "pt": "to be relieved"
    },
    "pos": "verb-suru",
    "ex": "安心することができる"
  },
  {
    "id": "V0094",
    "w": "かんどうする",
    "r": "かんどうする",
    "m": {
      "en": "to be moved",
      "zh-TW": "感動",
      "zh-CN": "感动",
      "ko": "감동하다",
      "vi": "cảm động",
      "id": "terharu",
      "es": "to be moved",
      "pt": "to be moved"
    },
    "pos": "verb-suru",
    "ex": "感動することができる"
  },
  {
    "id": "V0095",
    "w": "かんしゃする",
    "r": "かんしゃする",
    "m": {
      "en": "to appreciate",
      "zh-TW": "感謝",
      "zh-CN": "感谢",
      "ko": "감사하다",
      "vi": "cảm ơn",
      "id": "berterima kasih",
      "es": "to appreciate",
      "pt": "to appreciate"
    },
    "pos": "verb-suru",
    "ex": "感謝することができる"
  },
  {
    "id": "V0096",
    "w": "はんたいする",
    "r": "はんたいする",
    "m": {
      "en": "to oppose",
      "zh-TW": "反對",
      "zh-CN": "反对",
      "ko": "반대하다",
      "vi": "phản đối",
      "id": "menentang",
      "es": "to oppose",
      "pt": "to oppose"
    },
    "pos": "verb-suru",
    "ex": "反対することができる"
  },
  {
    "id": "V0097",
    "w": "さんせいする",
    "r": "さんせいする",
    "m": {
      "en": "to agree",
      "zh-TW": "贊成",
      "zh-CN": "赞成",
      "ko": "찬성하다",
      "vi": "đồng ý",
      "id": "setuju",
      "es": "to agree",
      "pt": "to agree"
    },
    "pos": "verb-suru",
    "ex": "賛成することができる"
  },
  {
    "id": "V0098",
    "w": "ひかくする",
    "r": "ひかくする",
    "m": {
      "en": "to compare",
      "zh-TW": "比較",
      "zh-CN": "比较",
      "ko": "비교하다",
      "vi": "so sánh",
      "id": "membandingkan",
      "es": "to compare",
      "pt": "to compare"
    },
    "pos": "verb-suru",
    "ex": "比較することができる"
  },
  {
    "id": "V0099",
    "w": "区別する",
    "r": "くべつする",
    "m": {
      "en": "to distinguish",
      "zh-TW": "區分",
      "zh-CN": "区分",
      "ko": "구별하다",
      "vi": "phân biệt",
      "id": "membedakan",
      "es": "to distinguish",
      "pt": "to distinguish"
    },
    "pos": "verb-suru",
    "ex": "区別することができる"
  },
  {
    "id": "V0100",
    "w": "はんだんする",
    "r": "はんだんする",
    "m": {
      "en": "to judge",
      "zh-TW": "判斷",
      "zh-CN": "判断",
      "ko": "판단하다",
      "vi": "phán đoán",
      "id": "menilai",
      "es": "to judge",
      "pt": "to judge"
    },
    "pos": "verb-suru",
    "ex": "判断することができる"
  },
  {
    "id": "V0101",
    "w": "せんたくする",
    "r": "せんたくする",
    "m": {
      "en": "to select",
      "zh-TW": "選擇",
      "zh-CN": "选择",
      "ko": "선택하다",
      "vi": "lựa chọn",
      "id": "memilih",
      "es": "to select",
      "pt": "to select"
    },
    "pos": "verb-suru",
    "ex": "選択することができる"
  },
  {
    "id": "V0102",
    "w": "発見する",
    "r": "はっけんする",
    "m": {
      "en": "to discover",
      "zh-TW": "發現",
      "zh-CN": "发现",
      "ko": "발견하다",
      "vi": "phát hiện",
      "id": "menemukan",
      "es": "to discover",
      "pt": "to discover"
    },
    "pos": "verb-suru",
    "ex": "発見することができる"
  },
  {
    "id": "V0103",
    "w": "発明する",
    "r": "はつめいする",
    "m": {
      "en": "to invent",
      "zh-TW": "發明",
      "zh-CN": "发明",
      "ko": "발명하다",
      "vi": "phát minh",
      "id": "menemukan",
      "es": "to invent",
      "pt": "to invent"
    },
    "pos": "verb-suru",
    "ex": "発明することができる"
  },
  {
    "id": "V0104",
    "w": "はっぴょうする",
    "r": "はっぴょうする",
    "m": {
      "en": "to announce",
      "zh-TW": "發表",
      "zh-CN": "发表",
      "ko": "발표하다",
      "vi": "công bố",
      "id": "mengumumkan",
      "es": "to announce",
      "pt": "to announce"
    },
    "pos": "verb-suru",
    "ex": "発表することができる"
  },
  {
    "id": "V0105",
    "w": "ひょうげんする",
    "r": "ひょうげんする",
    "m": {
      "en": "to express",
      "zh-TW": "表達",
      "zh-CN": "表达",
      "ko": "표현하다",
      "vi": "biểu đạt",
      "id": "mengekspresikan",
      "es": "to express",
      "pt": "to express"
    },
    "pos": "verb-suru",
    "ex": "表現することができる"
  },
  {
    "id": "V0106",
    "w": "じつげんする",
    "r": "じつげんする",
    "m": {
      "en": "to realize",
      "zh-TW": "實現",
      "zh-CN": "实现",
      "ko": "실현하다",
      "vi": "thực hiện",
      "id": "mewujudkan",
      "es": "to realize",
      "pt": "to realize"
    },
    "pos": "verb-suru",
    "ex": "実現することができる"
  },
  {
    "id": "V0107",
    "w": "かんせいする",
    "r": "かんせいする",
    "m": {
      "en": "to complete",
      "zh-TW": "完成",
      "zh-CN": "完成",
      "ko": "완성하다",
      "vi": "hoàn thành",
      "id": "menyelesaikan",
      "es": "to complete",
      "pt": "to complete"
    },
    "pos": "verb-suru",
    "ex": "完成することができる"
  },
  {
    "id": "V0108",
    "w": "かいけつする",
    "r": "かいけつする",
    "m": {
      "en": "to solve",
      "zh-TW": "解決",
      "zh-CN": "解决",
      "ko": "해결하다",
      "vi": "giải quyết",
      "id": "menyelesaikan",
      "es": "to solve",
      "pt": "to solve"
    },
    "pos": "verb-suru",
    "ex": "解決することができる"
  },
  {
    "id": "V0109",
    "w": "りかいする",
    "r": "りかいする",
    "m": {
      "en": "to understand",
      "zh-TW": "理解",
      "zh-CN": "理解",
      "ko": "이해하다",
      "vi": "hiểu",
      "id": "memahami",
      "es": "to understand",
      "pt": "to understand"
    },
    "pos": "verb-suru",
    "ex": "理解することができる"
  },
  {
    "id": "V0110",
    "w": "なっとくする",
    "r": "なっとくする",
    "m": {
      "en": "to accept",
      "zh-TW": "接受",
      "zh-CN": "接受",
      "ko": "납득하다",
      "vi": "chấp nhận",
      "id": "menerima",
      "es": "to accept",
      "pt": "to accept"
    },
    "pos": "verb-suru",
    "ex": "納得することができる"
  },
  {
    "id": "V0111",
    "w": "りようする",
    "r": "りようする",
    "m": {
      "en": "to use",
      "zh-TW": "利用",
      "zh-CN": "利用",
      "ko": "이용하다",
      "vi": "sử dụng",
      "id": "menggunakan",
      "es": "to use",
      "pt": "to use"
    },
    "pos": "verb-suru",
    "ex": "利用することができる"
  },
  {
    "id": "V0112",
    "w": "かつようする",
    "r": "かつようする",
    "m": {
      "en": "to utilize",
      "zh-TW": "活用",
      "zh-CN": "活用",
      "ko": "활용하다",
      "vi": "vận dụng",
      "id": "memanfaatkan",
      "es": "to utilize",
      "pt": "to utilize"
    },
    "pos": "verb-suru",
    "ex": "活用することができる"
  },
  {
    "id": "V0113",
    "w": "おうようする",
    "r": "おうようする",
    "m": {
      "en": "to apply",
      "zh-TW": "應用",
      "zh-CN": "应用",
      "ko": "응용하다",
      "vi": "áp dụng",
      "id": "menerapkan",
      "es": "to apply",
      "pt": "to apply"
    },
    "pos": "verb-suru",
    "ex": "応用することができる"
  },
  {
    "id": "V0114",
    "w": "えいきょうする",
    "r": "えいきょうする",
    "m": {
      "en": "to influence",
      "zh-TW": "影響",
      "zh-CN": "影响",
      "ko": "영향하다",
      "vi": "ảnh hưởng",
      "id": "mempengaruhi",
      "es": "to influence",
      "pt": "to influence"
    },
    "pos": "verb-suru",
    "ex": "影響することができる"
  },
  {
    "id": "V0115",
    "w": "関係する",
    "r": "かんけいする",
    "m": {
      "en": "to relate",
      "zh-TW": "相關",
      "zh-CN": "相关",
      "ko": "관계하다",
      "vi": "liên quan",
      "id": "berhubungan",
      "es": "to relate",
      "pt": "to relate"
    },
    "pos": "verb-suru",
    "ex": "関係することができる"
  },
  {
    "id": "V0116",
    "w": "そんざいする",
    "r": "そんざいする",
    "m": {
      "en": "to exist",
      "zh-TW": "存在",
      "zh-CN": "存在",
      "ko": "존재하다",
      "vi": "tồn tại",
      "id": "ada",
      "es": "to exist",
      "pt": "to exist"
    },
    "pos": "verb-suru",
    "ex": "存在することができる"
  },
  {
    "id": "V0117",
    "w": "発生する",
    "r": "はっせいする",
    "m": {
      "en": "to occur",
      "zh-TW": "發生",
      "zh-CN": "发生",
      "ko": "발생하다",
      "vi": "xảy ra",
      "id": "terjadi",
      "es": "to occur",
      "pt": "to occur"
    },
    "pos": "verb-suru",
    "ex": "発生することができる"
  },
  {
    "id": "V0118",
    "w": "へんかする",
    "r": "へんかする",
    "m": {
      "en": "to change",
      "zh-TW": "變化",
      "zh-CN": "变化",
      "ko": "변화하다",
      "vi": "biến đổi",
      "id": "berubah",
      "es": "to change",
      "pt": "to change"
    },
    "pos": "verb-suru",
    "ex": "変化することができる"
  },
  {
    "id": "V0119",
    "w": "進歩する",
    "r": "しんぽする",
    "m": {
      "en": "to progress",
      "zh-TW": "進步",
      "zh-CN": "进步",
      "ko": "진보하다",
      "vi": "tiến bộ",
      "id": "maju",
      "es": "to progress",
      "pt": "to progress"
    },
    "pos": "verb-suru",
    "ex": "進歩することができる"
  },
  {
    "id": "V0120",
    "w": "はってんする",
    "r": "はってんする",
    "m": {
      "en": "to develop",
      "zh-TW": "發展",
      "zh-CN": "发展",
      "ko": "발전하다",
      "vi": "phát triển",
      "id": "berkembang",
      "es": "to develop",
      "pt": "to develop"
    },
    "pos": "verb-suru",
    "ex": "発展することができる"
  },
  {
    "id": "V0121",
    "w": "ていねい",
    "r": "ていねい",
    "m": {
      "en": "polite",
      "zh-TW": "禮貌",
      "zh-CN": "礼貌",
      "ko": "정중",
      "vi": "lịch sự",
      "id": "sopan",
      "es": "polite",
      "pt": "polite"
    },
    "pos": "i-adj",
    "ex": "とても丁寧"
  },
  {
    "id": "V0122",
    "w": "親切",
    "r": "しんせつ",
    "m": {
      "en": "kind",
      "zh-TW": "親切",
      "zh-CN": "亲切",
      "ko": "친절",
      "vi": "tử tế",
      "id": "baik hati",
      "es": "kind",
      "pt": "kind"
    },
    "pos": "verb-godan",
    "ex": "親切ことができる"
  },
  {
    "id": "V0123",
    "w": "ねっしん",
    "r": "ねっしん",
    "m": {
      "en": "enthusiastic",
      "zh-TW": "熱心",
      "zh-CN": "热心",
      "ko": "열심",
      "vi": "nhiệt tình",
      "id": "antusias",
      "es": "enthusiastic",
      "pt": "enthusiastic"
    },
    "pos": "noun",
    "ex": "熱心について話す"
  },
  {
    "id": "V0124",
    "w": "まじめ",
    "r": "まじめ",
    "m": {
      "en": "serious",
      "zh-TW": "認真",
      "zh-CN": "认真",
      "ko": "성실",
      "vi": "nghiêm túc",
      "id": "serius",
      "es": "serious",
      "pt": "serious"
    },
    "pos": "noun",
    "ex": "真面目について話す"
  },
  {
    "id": "V0125",
    "w": "しょうじき",
    "r": "しょうじき",
    "m": {
      "en": "honest",
      "zh-TW": "誠實",
      "zh-CN": "诚实",
      "ko": "정직",
      "vi": "thật thà",
      "id": "jujur",
      "es": "honest",
      "pt": "honest"
    },
    "pos": "noun",
    "ex": "正直について話す"
  },
  {
    "id": "V0126",
    "w": "すなお",
    "r": "すなお",
    "m": {
      "en": "obedient",
      "zh-TW": "坦率",
      "zh-CN": "坦率",
      "ko": "솔직",
      "vi": "ngoan",
      "id": "patuh",
      "es": "obedient",
      "pt": "obedient"
    },
    "pos": "noun",
    "ex": "素直について話す"
  },
  {
    "id": "V0127",
    "w": "てきとう",
    "r": "てきとう",
    "m": {
      "en": "appropriate",
      "zh-TW": "適當",
      "zh-CN": "适当",
      "ko": "적당",
      "vi": "thích hợp",
      "id": "tepat",
      "es": "appropriate",
      "pt": "appropriate"
    },
    "pos": "verb-godan",
    "ex": "適当ことができる"
  },
  {
    "id": "V0128",
    "w": "ひつよう",
    "r": "ひつよう",
    "m": {
      "en": "necessary",
      "zh-TW": "必要",
      "zh-CN": "必要",
      "ko": "필요",
      "vi": "cần thiết",
      "id": "perlu",
      "es": "necessary",
      "pt": "necessary"
    },
    "pos": "verb-godan",
    "ex": "必要ことができる"
  },
  {
    "id": "V0129",
    "w": "じゅうよう",
    "r": "じゅうよう",
    "m": {
      "en": "important",
      "zh-TW": "重要",
      "zh-CN": "重要",
      "ko": "중요",
      "vi": "quan trọng",
      "id": "penting",
      "es": "important",
      "pt": "important"
    },
    "pos": "verb-godan",
    "ex": "重要ことができる"
  },
  {
    "id": "V0130",
    "w": "きけん",
    "r": "きけん",
    "m": {
      "en": "dangerous",
      "zh-TW": "危險",
      "zh-CN": "危险",
      "ko": "위험",
      "vi": "nguy hiểm",
      "id": "berbahaya",
      "es": "dangerous",
      "pt": "dangerous"
    },
    "pos": "noun",
    "ex": "危険について話す"
  },
  {
    "id": "V0131",
    "w": "あんぜん",
    "r": "あんぜん",
    "m": {
      "en": "safe",
      "zh-TW": "安全",
      "zh-CN": "安全",
      "ko": "안전",
      "vi": "an toàn",
      "id": "aman",
      "es": "safe",
      "pt": "safe"
    },
    "pos": "noun",
    "ex": "安全について話す"
  },
  {
    "id": "V0132",
    "w": "かんぜん",
    "r": "かんぜん",
    "m": {
      "en": "complete",
      "zh-TW": "完全",
      "zh-CN": "完全",
      "ko": "완전",
      "vi": "hoàn toàn",
      "id": "sempurna",
      "es": "complete",
      "pt": "complete"
    },
    "pos": "noun",
    "ex": "完全について話す"
  },
  {
    "id": "V0133",
    "w": "不安",
    "r": "ふあん",
    "m": {
      "en": "anxious",
      "zh-TW": "不安",
      "zh-CN": "不安",
      "ko": "불안",
      "vi": "lo âu",
      "id": "cemas",
      "es": "anxious",
      "pt": "anxious"
    },
    "pos": "noun",
    "ex": "不安について話す"
  },
  {
    "id": "V0134",
    "w": "しあわせ",
    "r": "しあわせ",
    "m": {
      "en": "happy",
      "zh-TW": "幸福",
      "zh-CN": "幸福",
      "ko": "행복",
      "vi": "hạnh phúc",
      "id": "bahagia",
      "es": "happy",
      "pt": "happy"
    },
    "pos": "noun",
    "ex": "幸せについて話す"
  },
  {
    "id": "V0135",
    "w": "かのう",
    "r": "かのう",
    "m": {
      "en": "possible",
      "zh-TW": "可能",
      "zh-CN": "可能",
      "ko": "가능",
      "vi": "có thể",
      "id": "mungkin",
      "es": "possible",
      "pt": "possible"
    },
    "pos": "verb-godan",
    "ex": "可能ことができる"
  },
  {
    "id": "V0136",
    "w": "ふかのう",
    "r": "ふかのう",
    "m": {
      "en": "impossible",
      "zh-TW": "不可能",
      "zh-CN": "不可能",
      "ko": "불가능",
      "vi": "không thể",
      "id": "mustahil",
      "es": "impossible",
      "pt": "impossible"
    },
    "pos": "verb-godan",
    "ex": "不可能ことができる"
  },
  {
    "id": "V0137",
    "w": "特別",
    "r": "とくべつ",
    "m": {
      "en": "special",
      "zh-TW": "特別",
      "zh-CN": "特别",
      "ko": "특별",
      "vi": "đặc biệt",
      "id": "khusus",
      "es": "special",
      "pt": "special"
    },
    "pos": "verb-godan",
    "ex": "特別ことができる"
  },
  {
    "id": "V0138",
    "w": "ふつう",
    "r": "ふつう",
    "m": {
      "en": "normal",
      "zh-TW": "普通",
      "zh-CN": "普通",
      "ko": "보통",
      "vi": "bình thường",
      "id": "biasa",
      "es": "normal",
      "pt": "normal"
    },
    "pos": "verb-godan",
    "ex": "普通ことができる"
  },
  {
    "id": "V0139",
    "w": "ふくざつ",
    "r": "ふくざつ",
    "m": {
      "en": "complex",
      "zh-TW": "複雜",
      "zh-CN": "复杂",
      "ko": "복잡",
      "vi": "phức tạp",
      "id": "rumit",
      "es": "complex",
      "pt": "complex"
    },
    "pos": "verb-godan",
    "ex": "複雑ことができる"
  },
  {
    "id": "V0140",
    "w": "かんたん",
    "r": "かんたん",
    "m": {
      "en": "simple",
      "zh-TW": "簡單",
      "zh-CN": "简单",
      "ko": "간단",
      "vi": "đơn giản",
      "id": "sederhana",
      "es": "simple",
      "pt": "simple"
    },
    "pos": "noun",
    "ex": "簡単について話す"
  },
  {
    "id": "V0141",
    "w": "とくい",
    "r": "とくい",
    "m": {
      "en": "good at",
      "zh-TW": "擅長",
      "zh-CN": "擅长",
      "ko": "잘하다",
      "vi": "giỏi",
      "id": "mahir",
      "es": "good at",
      "pt": "good at"
    },
    "pos": "i-adj",
    "ex": "とても得意"
  },
  {
    "id": "V0142",
    "w": "にがて",
    "r": "にがて",
    "m": {
      "en": "bad at",
      "zh-TW": "不擅長",
      "zh-CN": "不擅长",
      "ko": "못하다",
      "vi": "không giỏi",
      "id": "lemah",
      "es": "bad at",
      "pt": "bad at"
    },
    "pos": "noun",
    "ex": "苦手について話す"
  },
  {
    "id": "V0143",
    "w": "上手",
    "r": "じょうず",
    "m": {
      "en": "skilled",
      "zh-TW": "擅長",
      "zh-CN": "擅长",
      "ko": "잘하다",
      "vi": "giỏi",
      "id": "pandai",
      "es": "skilled",
      "pt": "skilled"
    },
    "pos": "noun",
    "ex": "上手について話す"
  },
  {
    "id": "V0144",
    "w": "下手",
    "r": "へた",
    "m": {
      "en": "unskilled",
      "zh-TW": "不擅長",
      "zh-CN": "不擅长",
      "ko": "서툴다",
      "vi": "vụng",
      "id": "tidak pandai",
      "es": "unskilled",
      "pt": "unskilled"
    },
    "pos": "noun",
    "ex": "下手について話す"
  },
  {
    "id": "V0145",
    "w": "せいかく",
    "r": "せいかく",
    "m": {
      "en": "accurate",
      "zh-TW": "正確",
      "zh-CN": "正确",
      "ko": "정확",
      "vi": "chính xác",
      "id": "akurat",
      "es": "accurate",
      "pt": "accurate"
    },
    "pos": "verb-godan",
    "ex": "正確ことができる"
  },
  {
    "id": "V0146",
    "w": "あいまい",
    "r": "あいまい",
    "m": {
      "en": "vague",
      "zh-TW": "模糊",
      "zh-CN": "模糊",
      "ko": "애매",
      "vi": "mơ hồ",
      "id": "ambigu",
      "es": "vague",
      "pt": "vague"
    },
    "pos": "i-adj",
    "ex": "とても曖昧"
  },
  {
    "id": "V0147",
    "w": "めいかく",
    "r": "めいかく",
    "m": {
      "en": "clear",
      "zh-TW": "明確",
      "zh-CN": "明确",
      "ko": "명확",
      "vi": "rõ ràng",
      "id": "jelas",
      "es": "clear",
      "pt": "clear"
    },
    "pos": "verb-godan",
    "ex": "明確ことができる"
  },
  {
    "id": "V0148",
    "w": "ぐたいてき",
    "r": "ぐたいてき",
    "m": {
      "en": "concrete",
      "zh-TW": "具體",
      "zh-CN": "具体",
      "ko": "구체적",
      "vi": "cụ thể",
      "id": "konkret",
      "es": "concrete",
      "pt": "concrete"
    },
    "pos": "na-adj",
    "ex": "とても具体的だ"
  },
  {
    "id": "V0149",
    "w": "ちゅうしょうてき",
    "r": "ちゅうしょうてき",
    "m": {
      "en": "abstract",
      "zh-TW": "抽象",
      "zh-CN": "抽象",
      "ko": "추상적",
      "vi": "trừu tượng",
      "id": "abstrak",
      "es": "abstract",
      "pt": "abstract"
    },
    "pos": "na-adj",
    "ex": "とても抽象的だ"
  },
  {
    "id": "V0150",
    "w": "せっきょくてき",
    "r": "せっきょくてき",
    "m": {
      "en": "positive",
      "zh-TW": "積極",
      "zh-CN": "积极",
      "ko": "적극적",
      "vi": "tích cực",
      "id": "positif",
      "es": "positive",
      "pt": "positive"
    },
    "pos": "na-adj",
    "ex": "とても積極的だ"
  },
  {
    "id": "V0151",
    "w": "あずける",
    "r": "あずける",
    "m": {
      "en": "to deposit",
      "zh-TW": "寄存",
      "zh-CN": "寄存",
      "ko": "맡기다",
      "vi": "gửi",
      "id": "menitipkan",
      "es": "to deposit",
      "pt": "to deposit"
    },
    "pos": "verb-ichidan",
    "ex": "預けることができる",
    "syn": [
      "預託する",
      "委ねる",
      "託す"
    ]
  },
  {
    "id": "V0152",
    "w": "あずかる",
    "r": "あずかる",
    "m": {
      "en": "to keep",
      "zh-TW": "保管",
      "zh-CN": "保管",
      "ko": "맡다",
      "vi": "giữ",
      "id": "menyimpan",
      "es": "to keep",
      "pt": "to keep"
    },
    "pos": "verb-godan",
    "ex": "預かることができる",
    "syn": [
      "保管する",
      "管理する",
      "受け取る"
    ]
  },
  {
    "id": "V0153",
    "w": "味わう",
    "r": "あじわう",
    "m": {
      "en": "to taste",
      "zh-TW": "品嚐",
      "zh-CN": "品尝",
      "ko": "맛보다",
      "vi": "nếm",
      "id": "merasakan",
      "es": "to taste",
      "pt": "to taste"
    },
    "pos": "verb-godan",
    "ex": "味わうことができる"
  },
  {
    "id": "V0154",
    "w": "あたたまる",
    "r": "あたたまる",
    "m": {
      "en": "to warm up",
      "zh-TW": "變暖",
      "zh-CN": "变暖",
      "ko": "따뜻해지다",
      "vi": "ấm lên",
      "id": "menghangat",
      "es": "to warm up",
      "pt": "to warm up"
    },
    "pos": "verb-godan",
    "ex": "暖まることができる"
  },
  {
    "id": "V0155",
    "w": "あたる",
    "r": "あたる",
    "m": {
      "en": "to hit",
      "zh-TW": "中",
      "zh-CN": "中",
      "ko": "맞다",
      "vi": "trúng",
      "id": "kena",
      "es": "to hit",
      "pt": "to hit"
    },
    "pos": "verb-godan",
    "ex": "当たることができる"
  },
  {
    "id": "V0156",
    "w": "あつかう",
    "r": "あつかう",
    "m": {
      "en": "to handle",
      "zh-TW": "處理",
      "zh-CN": "处理",
      "ko": "다루다",
      "vi": "xử lý",
      "id": "menangani",
      "es": "to handle",
      "pt": "to handle"
    },
    "pos": "verb-godan",
    "ex": "扱うことができる"
  },
  {
    "id": "V0157",
    "w": "あてる",
    "r": "あてる",
    "m": {
      "en": "to guess",
      "zh-TW": "猜中",
      "zh-CN": "猜中",
      "ko": "맞추다",
      "vi": "đoán",
      "id": "menebak",
      "es": "to guess",
      "pt": "to guess"
    },
    "pos": "verb-ichidan",
    "ex": "当てることができる"
  },
  {
    "id": "V0158",
    "w": "あばれる",
    "r": "あばれる",
    "m": {
      "en": "to rage",
      "zh-TW": "暴動",
      "zh-CN": "暴动",
      "ko": "날뛰다",
      "vi": "hung hăng",
      "id": "mengamuk",
      "es": "to rage",
      "pt": "to rage"
    },
    "pos": "verb-ichidan",
    "ex": "暴れることができる"
  },
  {
    "id": "V0159",
    "w": "あふれる",
    "r": "あふれる",
    "m": {
      "en": "to overflow",
      "zh-TW": "溢出",
      "zh-CN": "溢出",
      "ko": "넘치다",
      "vi": "tràn",
      "id": "meluap",
      "es": "to overflow",
      "pt": "to overflow"
    },
    "pos": "verb-ichidan",
    "ex": "溢れることができる"
  },
  {
    "id": "V0160",
    "w": "あらそう",
    "r": "あらそう",
    "m": {
      "en": "to compete",
      "zh-TW": "競爭",
      "zh-CN": "竞争",
      "ko": "다투다",
      "vi": "tranh",
      "id": "bersaing",
      "es": "to compete",
      "pt": "to compete"
    },
    "pos": "verb-godan",
    "ex": "争うことができる"
  },
  {
    "id": "V0161",
    "w": "あらためる",
    "r": "あらためる",
    "m": {
      "en": "to revise",
      "zh-TW": "改正",
      "zh-CN": "改正",
      "ko": "고치다",
      "vi": "sửa đổi",
      "id": "memperbaiki",
      "es": "to revise",
      "pt": "to revise"
    },
    "pos": "verb-ichidan",
    "ex": "改めることができる"
  },
  {
    "id": "V0162",
    "w": "あらわす",
    "r": "あらわす",
    "m": {
      "en": "to express",
      "zh-TW": "表達",
      "zh-CN": "表达",
      "ko": "나타내다",
      "vi": "biểu thị",
      "id": "menyatakan",
      "es": "to express",
      "pt": "to express"
    },
    "pos": "verb-godan",
    "ex": "表すことができる"
  },
  {
    "id": "V0163",
    "w": "あらわれる",
    "r": "あらわれる",
    "m": {
      "en": "to appear",
      "zh-TW": "出現",
      "zh-CN": "出现",
      "ko": "나타나다",
      "vi": "xuất hiện",
      "id": "muncul",
      "es": "to appear",
      "pt": "to appear"
    },
    "pos": "verb-ichidan",
    "ex": "現れることができる"
  },
  {
    "id": "V0164",
    "w": "生きる",
    "r": "いきる",
    "m": {
      "en": "to live",
      "zh-TW": "生活",
      "zh-CN": "生活",
      "ko": "살다",
      "vi": "sống",
      "id": "hidup",
      "es": "to live",
      "pt": "to live"
    },
    "pos": "verb-ichidan",
    "ex": "生きることができる"
  },
  {
    "id": "V0165",
    "w": "いだく",
    "r": "いだく",
    "m": {
      "en": "to embrace",
      "zh-TW": "抱",
      "zh-CN": "抱",
      "ko": "품다",
      "vi": "ôm",
      "id": "memeluk",
      "es": "to embrace",
      "pt": "to embrace"
    },
    "pos": "verb-godan",
    "ex": "抱くことができる"
  },
  {
    "id": "V0166",
    "w": "いのる",
    "r": "いのる",
    "m": {
      "en": "to pray",
      "zh-TW": "祈禱",
      "zh-CN": "祈祷",
      "ko": "기도하다",
      "vi": "cầu nguyện",
      "id": "berdoa",
      "es": "to pray",
      "pt": "to pray"
    },
    "pos": "verb-godan",
    "ex": "祈ることができる"
  },
  {
    "id": "V0167",
    "w": "いわう",
    "r": "いわう",
    "m": {
      "en": "to celebrate",
      "zh-TW": "慶祝",
      "zh-CN": "庆祝",
      "ko": "축하하다",
      "vi": "chúc mừng",
      "id": "merayakan",
      "es": "to celebrate",
      "pt": "to celebrate"
    },
    "pos": "verb-godan",
    "ex": "祝うことができる"
  },
  {
    "id": "V0168",
    "w": "うえる",
    "r": "うえる",
    "m": {
      "en": "to plant",
      "zh-TW": "種植",
      "zh-CN": "种植",
      "ko": "심다",
      "vi": "trồng",
      "id": "menanam",
      "es": "to plant",
      "pt": "to plant"
    },
    "pos": "verb-ichidan",
    "ex": "植えることができる"
  },
  {
    "id": "V0169",
    "w": "うかべる",
    "r": "うかべる",
    "m": {
      "en": "to float",
      "zh-TW": "浮起",
      "zh-CN": "浮起",
      "ko": "띄우다",
      "vi": "nổi",
      "id": "mengapungkan",
      "es": "to float",
      "pt": "to float"
    },
    "pos": "verb-godan",
    "ex": "浮かべることができる"
  },
  {
    "id": "V0170",
    "w": "うける",
    "r": "うける",
    "m": {
      "en": "to receive",
      "zh-TW": "接受",
      "zh-CN": "接受",
      "ko": "받다",
      "vi": "nhận",
      "id": "menerima",
      "es": "to receive",
      "pt": "to receive"
    },
    "pos": "verb-ichidan",
    "ex": "受けることができる"
  },
  {
    "id": "V0171",
    "w": "うしなう",
    "r": "うしなう",
    "m": {
      "en": "to lose",
      "zh-TW": "失去",
      "zh-CN": "失去",
      "ko": "잃다",
      "vi": "mất",
      "id": "kehilangan",
      "es": "to lose",
      "pt": "to lose"
    },
    "pos": "verb-godan",
    "ex": "失うことができる"
  },
  {
    "id": "V0172",
    "w": "うたがう",
    "r": "うたがう",
    "m": {
      "en": "to doubt",
      "zh-TW": "懷疑",
      "zh-CN": "怀疑",
      "ko": "의심하다",
      "vi": "nghi ngờ",
      "id": "meragukan",
      "es": "to doubt",
      "pt": "to doubt"
    },
    "pos": "verb-godan",
    "ex": "疑うことができる"
  },
  {
    "id": "V0173",
    "w": "うったえる",
    "r": "うったえる",
    "m": {
      "en": "to sue",
      "zh-TW": "起訴",
      "zh-CN": "起诉",
      "ko": "호소하다",
      "vi": "kiện",
      "id": "menuntut",
      "es": "to sue",
      "pt": "to sue"
    },
    "pos": "verb-ichidan",
    "ex": "訴えることができる"
  },
  {
    "id": "V0174",
    "w": "うばう",
    "r": "うばう",
    "m": {
      "en": "to rob",
      "zh-TW": "奪取",
      "zh-CN": "夺取",
      "ko": "빼앗다",
      "vi": "cướp",
      "id": "merampas",
      "es": "to rob",
      "pt": "to rob"
    },
    "pos": "verb-godan",
    "ex": "奪うことができる"
  },
  {
    "id": "V0175",
    "w": "うめる",
    "r": "うめる",
    "m": {
      "en": "to bury",
      "zh-TW": "埋",
      "zh-CN": "埋",
      "ko": "묻다",
      "vi": "chôn",
      "id": "mengubur",
      "es": "to bury",
      "pt": "to bury"
    },
    "pos": "verb-ichidan",
    "ex": "埋めることができる"
  },
  {
    "id": "V0176",
    "w": "うやまう",
    "r": "うやまう",
    "m": {
      "en": "to respect",
      "zh-TW": "尊敬",
      "zh-CN": "尊敬",
      "ko": "공경하다",
      "vi": "kính trọng",
      "id": "menghormati",
      "es": "to respect",
      "pt": "to respect"
    },
    "pos": "verb-godan",
    "ex": "敬うことができる"
  },
  {
    "id": "V0177",
    "w": "うらなう",
    "r": "うらなう",
    "m": {
      "en": "to fortune-tell",
      "zh-TW": "算命",
      "zh-CN": "算命",
      "ko": "점치다",
      "vi": "xem bói",
      "id": "meramal",
      "es": "to fortune-tell",
      "pt": "to fortune-tell"
    },
    "pos": "verb-godan",
    "ex": "占うことができる"
  },
  {
    "id": "V0178",
    "w": "うらむ",
    "r": "うらむ",
    "m": {
      "en": "to resent",
      "zh-TW": "怨恨",
      "zh-CN": "怨恨",
      "ko": "원망하다",
      "vi": "oán hận",
      "id": "membenci",
      "es": "to resent",
      "pt": "to resent"
    },
    "pos": "verb-godan",
    "ex": "恨むことができる"
  },
  {
    "id": "V0179",
    "w": "売れる",
    "r": "うれる",
    "m": {
      "en": "to sell well",
      "zh-TW": "暢銷",
      "zh-CN": "畅销",
      "ko": "팔리다",
      "vi": "bán chạy",
      "id": "laku",
      "es": "to sell well",
      "pt": "to sell well"
    },
    "pos": "verb-ichidan",
    "ex": "売れることができる"
  },
  {
    "id": "V0180",
    "w": "おう",
    "r": "おう",
    "m": {
      "en": "to chase",
      "zh-TW": "追",
      "zh-CN": "追",
      "ko": "쫓다",
      "vi": "đuổi",
      "id": "mengejar",
      "es": "to chase",
      "pt": "to chase"
    },
    "pos": "verb-godan",
    "ex": "追うことができる"
  },
  {
    "id": "V0181",
    "w": "おう",
    "r": "おう",
    "m": {
      "en": "to bear",
      "zh-TW": "承擔",
      "zh-CN": "承担",
      "ko": "지다",
      "vi": "gánh",
      "id": "menanggung",
      "es": "to bear",
      "pt": "to bear"
    },
    "pos": "verb-godan",
    "ex": "負うことができる"
  },
  {
    "id": "V0182",
    "w": "おおう",
    "r": "おおう",
    "m": {
      "en": "to cover",
      "zh-TW": "覆蓋",
      "zh-CN": "覆盖",
      "ko": "덮다",
      "vi": "che",
      "id": "menutupi",
      "es": "to cover",
      "pt": "to cover"
    },
    "pos": "verb-godan",
    "ex": "覆うことができる"
  },
  {
    "id": "V0183",
    "w": "おぎなう",
    "r": "おぎなう",
    "m": {
      "en": "to supplement",
      "zh-TW": "補充",
      "zh-CN": "补充",
      "ko": "보충하다",
      "vi": "bổ sung",
      "id": "melengkapi",
      "es": "to supplement",
      "pt": "to supplement"
    },
    "pos": "verb-godan",
    "ex": "補うことができる"
  },
  {
    "id": "V0184",
    "w": "送る",
    "r": "おくる",
    "m": {
      "en": "to send",
      "zh-TW": "送",
      "zh-CN": "送",
      "ko": "보내다",
      "vi": "gửi",
      "id": "mengirim",
      "es": "to send",
      "pt": "to send"
    },
    "pos": "verb-godan",
    "ex": "送ることができる"
  },
  {
    "id": "V0185",
    "w": "おくる",
    "r": "おくる",
    "m": {
      "en": "to present",
      "zh-TW": "贈送",
      "zh-CN": "赠送",
      "ko": "선물하다",
      "vi": "tặng",
      "id": "menghadiahi",
      "es": "to present",
      "pt": "to present"
    },
    "pos": "verb-godan",
    "ex": "贈ることができる"
  },
  {
    "id": "V0186",
    "w": "起こす",
    "r": "おこす",
    "m": {
      "en": "to wake up",
      "zh-TW": "叫醒",
      "zh-CN": "叫醒",
      "ko": "깨우다",
      "vi": "đánh thức",
      "id": "membangunkan",
      "es": "to wake up",
      "pt": "to wake up"
    },
    "pos": "verb-godan",
    "ex": "起こすことができる"
  },
  {
    "id": "V0187",
    "w": "行う",
    "r": "おこなう",
    "m": {
      "en": "to perform",
      "zh-TW": "舉行",
      "zh-CN": "举行",
      "ko": "행하다",
      "vi": "tiến hành",
      "id": "melakukan",
      "es": "to perform",
      "pt": "to perform"
    },
    "pos": "verb-godan",
    "ex": "行うことができる"
  },
  {
    "id": "V0188",
    "w": "おさめる",
    "r": "おさめる",
    "m": {
      "en": "to obtain",
      "zh-TW": "收穫",
      "zh-CN": "收获",
      "ko": "거두다",
      "vi": "thu được",
      "id": "memperoleh",
      "es": "to obtain",
      "pt": "to obtain"
    },
    "pos": "verb-ichidan",
    "ex": "収めることができる"
  },
  {
    "id": "V0189",
    "w": "おさめる",
    "r": "おさめる",
    "m": {
      "en": "to govern",
      "zh-TW": "統治",
      "zh-CN": "统治",
      "ko": "다스리다",
      "vi": "cai trị",
      "id": "memerintah",
      "es": "to govern",
      "pt": "to govern"
    },
    "pos": "verb-ichidan",
    "ex": "治めることができる"
  },
  {
    "id": "V0190",
    "w": "おしむ",
    "r": "おしむ",
    "m": {
      "en": "to regret",
      "zh-TW": "惋惜",
      "zh-CN": "惋惜",
      "ko": "아끼다",
      "vi": "tiếc",
      "id": "menyayangkan",
      "es": "to regret",
      "pt": "to regret"
    },
    "pos": "verb-godan",
    "ex": "惜しむことができる"
  },
  {
    "id": "V0191",
    "w": "おそれる",
    "r": "おそれる",
    "m": {
      "en": "to fear",
      "zh-TW": "害怕",
      "zh-CN": "害怕",
      "ko": "두려워하다",
      "vi": "sợ",
      "id": "takut",
      "es": "to fear",
      "pt": "to fear"
    },
    "pos": "verb-ichidan",
    "ex": "恐れることができる"
  },
  {
    "id": "V0192",
    "w": "おそう",
    "r": "おそう",
    "m": {
      "en": "to attack",
      "zh-TW": "襲擊",
      "zh-CN": "袭击",
      "ko": "습격하다",
      "vi": "tấn công",
      "id": "menyerang",
      "es": "to attack",
      "pt": "to attack"
    },
    "pos": "verb-godan",
    "ex": "襲うことができる"
  },
  {
    "id": "V0193",
    "w": "教わる",
    "r": "おそわる",
    "m": {
      "en": "to be taught",
      "zh-TW": "被教",
      "zh-CN": "被教",
      "ko": "배우다",
      "vi": "được dạy",
      "id": "diajarkan",
      "es": "to be taught",
      "pt": "to be taught"
    },
    "pos": "verb-godan",
    "ex": "教わることができる"
  },
  {
    "id": "V0194",
    "w": "おちつく",
    "r": "おちつく",
    "m": {
      "en": "to calm down",
      "zh-TW": "冷靜",
      "zh-CN": "冷静",
      "ko": "침착하다",
      "vi": "bình tĩnh",
      "id": "tenang",
      "es": "to calm down",
      "pt": "to calm down"
    },
    "pos": "verb-godan",
    "ex": "落ち着くことができる"
  },
  {
    "id": "V0195",
    "w": "おどかす",
    "r": "おどかす",
    "m": {
      "en": "to threaten",
      "zh-TW": "威脅",
      "zh-CN": "威胁",
      "ko": "위협하다",
      "vi": "đe dọa",
      "id": "mengancam",
      "es": "to threaten",
      "pt": "to threaten"
    },
    "pos": "verb-godan",
    "ex": "脅かすことができる"
  },
  {
    "id": "V0196",
    "w": "おどる",
    "r": "おどる",
    "m": {
      "en": "to dance",
      "zh-TW": "跳舞",
      "zh-CN": "跳舞",
      "ko": "춤추다",
      "vi": "nhảy",
      "id": "menari",
      "es": "to dance",
      "pt": "to dance"
    },
    "pos": "verb-godan",
    "ex": "踊ることができる"
  },
  {
    "id": "V0197",
    "w": "おぼれる",
    "r": "おぼれる",
    "m": {
      "en": "to drown",
      "zh-TW": "溺水",
      "zh-CN": "溺水",
      "ko": "빠지다",
      "vi": "chìm",
      "id": "tenggelam",
      "es": "to drown",
      "pt": "to drown"
    },
    "pos": "verb-ichidan",
    "ex": "溺れることができる"
  },
  {
    "id": "V0198",
    "w": "おもいつく",
    "r": "おもいつく",
    "m": {
      "en": "to think of",
      "zh-TW": "想到",
      "zh-CN": "想到",
      "ko": "떠오르다",
      "vi": "nghĩ ra",
      "id": "terpikir",
      "es": "to think of",
      "pt": "to think of"
    },
    "pos": "verb-godan",
    "ex": "思い付くことができる"
  },
  {
    "id": "V0199",
    "w": "泳ぐ",
    "r": "およぐ",
    "m": {
      "en": "to swim",
      "zh-TW": "游泳",
      "zh-CN": "游泳",
      "ko": "수영하다",
      "vi": "bơi",
      "id": "berenang",
      "es": "to swim",
      "pt": "to swim"
    },
    "pos": "verb-godan",
    "ex": "泳ぐことができる"
  },
  {
    "id": "V0200",
    "w": "およぶ",
    "r": "およぶ",
    "m": {
      "en": "to reach",
      "zh-TW": "達到",
      "zh-CN": "达到",
      "ko": "미치다",
      "vi": "đạt",
      "id": "mencapai",
      "es": "to reach",
      "pt": "to reach"
    },
    "pos": "verb-godan",
    "ex": "及ぶことができる"
  },
  {
    "id": "V0201",
    "w": "降りる",
    "r": "おりる",
    "m": {
      "en": "to get off",
      "zh-TW": "下車",
      "zh-CN": "下车",
      "ko": "내리다",
      "vi": "xuống",
      "id": "turun",
      "es": "to get off",
      "pt": "to get off"
    },
    "pos": "verb-ichidan",
    "ex": "降りることができる"
  },
  {
    "id": "V0202",
    "w": "おる",
    "r": "おる",
    "m": {
      "en": "to break",
      "zh-TW": "折",
      "zh-CN": "折",
      "ko": "꺾다",
      "vi": "bẻ",
      "id": "mematahkan",
      "es": "to break",
      "pt": "to break"
    },
    "pos": "verb-godan",
    "ex": "折ることができる"
  },
  {
    "id": "V0203",
    "w": "終わる",
    "r": "おわる",
    "m": {
      "en": "to end",
      "zh-TW": "結束",
      "zh-CN": "结束",
      "ko": "끝나다",
      "vi": "kết thúc",
      "id": "selesai",
      "es": "to end",
      "pt": "to end"
    },
    "pos": "verb-godan",
    "ex": "終わることができる",
    "syn": [
      "終了する",
      "完了する",
      "ゴールする"
    ]
  },
  {
    "id": "V0204",
    "w": "かぎる",
    "r": "かぎる",
    "m": {
      "en": "to limit",
      "zh-TW": "限制",
      "zh-CN": "限制",
      "ko": "제한하다",
      "vi": "giới hạn",
      "id": "membatasi",
      "es": "to limit",
      "pt": "to limit"
    },
    "pos": "verb-godan",
    "ex": "限ることができる"
  },
  {
    "id": "V0205",
    "w": "かくす",
    "r": "かくす",
    "m": {
      "en": "to hide",
      "zh-TW": "隱藏",
      "zh-CN": "隐藏",
      "ko": "숨기다",
      "vi": "giấu",
      "id": "menyembunyikan",
      "es": "to hide",
      "pt": "to hide"
    },
    "pos": "verb-godan",
    "ex": "隠すことができる"
  },
  {
    "id": "V0206",
    "w": "かくれる",
    "r": "かくれる",
    "m": {
      "en": "to be hidden",
      "zh-TW": "躲藏",
      "zh-CN": "躲藏",
      "ko": "숨다",
      "vi": "ẩn",
      "id": "bersembunyi",
      "es": "to be hidden",
      "pt": "to be hidden"
    },
    "pos": "verb-ichidan",
    "ex": "隠れることができる"
  },
  {
    "id": "V0207",
    "w": "かける",
    "r": "かける",
    "m": {
      "en": "to lack",
      "zh-TW": "缺少",
      "zh-CN": "缺少",
      "ko": "빠지다",
      "vi": "thiếu",
      "id": "kurang",
      "es": "to lack",
      "pt": "to lack"
    },
    "pos": "verb-ichidan",
    "ex": "欠けることができる"
  },
  {
    "id": "V0208",
    "w": "囲む",
    "r": "かこむ",
    "m": {
      "en": "to surround",
      "zh-TW": "包圍",
      "zh-CN": "包围",
      "ko": "둘러싸다",
      "vi": "bao vây",
      "id": "mengelilingi",
      "es": "to surround",
      "pt": "to surround"
    },
    "pos": "verb-godan",
    "ex": "囲むことができる"
  },
  {
    "id": "V0209",
    "w": "重ねる",
    "r": "かさねる",
    "m": {
      "en": "to pile up",
      "zh-TW": "重疊",
      "zh-CN": "重叠",
      "ko": "겹치다",
      "vi": "chồng",
      "id": "menumpuk",
      "es": "to pile up",
      "pt": "to pile up"
    },
    "pos": "verb-ichidan",
    "ex": "重ねることができる"
  },
  {
    "id": "V0210",
    "w": "かざる",
    "r": "かざる",
    "m": {
      "en": "to decorate",
      "zh-TW": "裝飾",
      "zh-CN": "装饰",
      "ko": "장식하다",
      "vi": "trang trí",
      "id": "menghias",
      "es": "to decorate",
      "pt": "to decorate"
    },
    "pos": "verb-godan",
    "ex": "飾ることができる"
  },
  {
    "id": "V0211",
    "w": "かせぐ",
    "r": "かせぐ",
    "m": {
      "en": "to earn",
      "zh-TW": "賺",
      "zh-CN": "赚",
      "ko": "벌다",
      "vi": "kiếm",
      "id": "menghasilkan",
      "es": "to earn",
      "pt": "to earn"
    },
    "pos": "verb-godan",
    "ex": "稼ぐことができる"
  },
  {
    "id": "V0212",
    "w": "固める",
    "r": "かためる",
    "m": {
      "en": "to harden",
      "zh-TW": "使堅固",
      "zh-CN": "使坚固",
      "ko": "굳히다",
      "vi": "làm cứng",
      "id": "mengeraskan",
      "es": "to harden",
      "pt": "to harden"
    },
    "pos": "verb-ichidan",
    "ex": "固めることができる"
  },
  {
    "id": "V0213",
    "w": "かたむく",
    "r": "かたむく",
    "m": {
      "en": "to lean",
      "zh-TW": "傾斜",
      "zh-CN": "倾斜",
      "ko": "기울다",
      "vi": "nghiêng",
      "id": "miring",
      "es": "to lean",
      "pt": "to lean"
    },
    "pos": "verb-godan",
    "ex": "傾くことができる"
  },
  {
    "id": "V0214",
    "w": "語る",
    "r": "かたる",
    "m": {
      "en": "to narrate",
      "zh-TW": "講述",
      "zh-CN": "讲述",
      "ko": "이야기하다",
      "vi": "kể",
      "id": "menceritakan",
      "es": "to narrate",
      "pt": "to narrate"
    },
    "pos": "verb-godan",
    "ex": "語ることができる"
  },
  {
    "id": "V0215",
    "w": "勝つ",
    "r": "かつ",
    "m": {
      "en": "to win",
      "zh-TW": "贏",
      "zh-CN": "赢",
      "ko": "이기다",
      "vi": "thắng",
      "id": "menang",
      "es": "to win",
      "pt": "to win"
    },
    "pos": "verb-godan",
    "ex": "勝つことができる"
  },
  {
    "id": "V0216",
    "w": "かなう",
    "r": "かなう",
    "m": {
      "en": "to come true",
      "zh-TW": "實現",
      "zh-CN": "实现",
      "ko": "이루어지다",
      "vi": "thành hiện thực",
      "id": "terwujud",
      "es": "to come true",
      "pt": "to come true"
    },
    "pos": "verb-godan",
    "ex": "叶うことができる"
  },
  {
    "id": "V0217",
    "w": "かまう",
    "r": "かまう",
    "m": {
      "en": "to mind",
      "zh-TW": "介意",
      "zh-CN": "介意",
      "ko": "신경쓰다",
      "vi": "quan tâm",
      "id": "peduli",
      "es": "to mind",
      "pt": "to mind"
    },
    "pos": "verb-godan",
    "ex": "構うことができる"
  },
  {
    "id": "V0218",
    "w": "通う",
    "r": "かよう",
    "m": {
      "en": "to commute",
      "zh-TW": "通勤",
      "zh-CN": "通勤",
      "ko": "다니다",
      "vi": "đi lại",
      "id": "bolak-balik",
      "es": "to commute",
      "pt": "to commute"
    },
    "pos": "verb-godan",
    "ex": "通うことができる"
  },
  {
    "id": "V0219",
    "w": "かれる",
    "r": "かれる",
    "m": {
      "en": "to wither",
      "zh-TW": "枯萎",
      "zh-CN": "枯萎",
      "ko": "시들다",
      "vi": "héo",
      "id": "layu",
      "es": "to wither",
      "pt": "to wither"
    },
    "pos": "verb-ichidan",
    "ex": "枯れることができる"
  },
  {
    "id": "V0220",
    "w": "かわく",
    "r": "かわく",
    "m": {
      "en": "to dry",
      "zh-TW": "乾燥",
      "zh-CN": "干燥",
      "ko": "마르다",
      "vi": "khô",
      "id": "kering",
      "es": "to dry",
      "pt": "to dry"
    },
    "pos": "verb-godan",
    "ex": "乾くことができる"
  },
  {
    "id": "V0221",
    "w": "考える",
    "r": "かんがえる",
    "m": {
      "en": "to think",
      "zh-TW": "思考",
      "zh-CN": "思考",
      "ko": "생각하다",
      "vi": "suy nghĩ",
      "id": "berpikir",
      "es": "to think",
      "pt": "to think"
    },
    "pos": "verb-ichidan",
    "ex": "考えることができる"
  },
  {
    "id": "V0222",
    "w": "かんじる",
    "r": "かんじる",
    "m": {
      "en": "to feel",
      "zh-TW": "感覺",
      "zh-CN": "感觉",
      "ko": "느끼다",
      "vi": "cảm thấy",
      "id": "merasakan",
      "es": "to feel",
      "pt": "to feel"
    },
    "pos": "verb-godan",
    "ex": "感じることができる"
  },
  {
    "id": "V0223",
    "w": "聞こえる",
    "r": "きこえる",
    "m": {
      "en": "to be heard",
      "zh-TW": "聽得見",
      "zh-CN": "听得见",
      "ko": "들리다",
      "vi": "nghe thấy",
      "id": "terdengar",
      "es": "to be heard",
      "pt": "to be heard"
    },
    "pos": "verb-ichidan",
    "ex": "聞こえることができる"
  },
  {
    "id": "V0224",
    "w": "きざむ",
    "r": "きざむ",
    "m": {
      "en": "to carve",
      "zh-TW": "刻",
      "zh-CN": "刻",
      "ko": "새기다",
      "vi": "khắc",
      "id": "mengukir",
      "es": "to carve",
      "pt": "to carve"
    },
    "pos": "verb-godan",
    "ex": "刻むことができる"
  },
  {
    "id": "V0225",
    "w": "きずつく",
    "r": "きずつく",
    "m": {
      "en": "to get hurt",
      "zh-TW": "受傷",
      "zh-CN": "受伤",
      "ko": "상처받다",
      "vi": "bị thương",
      "id": "terluka",
      "es": "to get hurt",
      "pt": "to get hurt"
    },
    "pos": "verb-godan",
    "ex": "傷つくことができる"
  },
  {
    "id": "V0226",
    "w": "きずつける",
    "r": "きずつける",
    "m": {
      "en": "to hurt",
      "zh-TW": "傷害",
      "zh-CN": "伤害",
      "ko": "상처주다",
      "vi": "làm tổn thương",
      "id": "melukai",
      "es": "to hurt",
      "pt": "to hurt"
    },
    "pos": "verb-ichidan",
    "ex": "傷つけることができる"
  },
  {
    "id": "V0227",
    "w": "きずく",
    "r": "きずく",
    "m": {
      "en": "to build",
      "zh-TW": "建立",
      "zh-CN": "建立",
      "ko": "쌓다",
      "vi": "xây dựng",
      "id": "membangun",
      "es": "to build",
      "pt": "to build"
    },
    "pos": "verb-godan",
    "ex": "築くことができる"
  },
  {
    "id": "V0228",
    "w": "きそう",
    "r": "きそう",
    "m": {
      "en": "to compete",
      "zh-TW": "競爭",
      "zh-CN": "竞争",
      "ko": "경쟁하다",
      "vi": "cạnh tranh",
      "id": "bersaing",
      "es": "to compete",
      "pt": "to compete"
    },
    "pos": "verb-godan",
    "ex": "競うことができる"
  },
  {
    "id": "V0229",
    "w": "きたえる",
    "r": "きたえる",
    "m": {
      "en": "to train",
      "zh-TW": "鍛鍊",
      "zh-CN": "锻炼",
      "ko": "단련하다",
      "vi": "rèn luyện",
      "id": "melatih",
      "es": "to train",
      "pt": "to train"
    },
    "pos": "verb-ichidan",
    "ex": "鍛えることができる"
  },
  {
    "id": "V0230",
    "w": "きわめる",
    "r": "きわめる",
    "m": {
      "en": "to master",
      "zh-TW": "精通",
      "zh-CN": "精通",
      "ko": "극하다",
      "vi": "thành thạo",
      "id": "menguasai",
      "es": "to master",
      "pt": "to master"
    },
    "pos": "verb-ichidan",
    "ex": "極めることができる"
  },
  {
    "id": "V0231",
    "w": "くずれる",
    "r": "くずれる",
    "m": {
      "en": "to collapse",
      "zh-TW": "崩塌",
      "zh-CN": "崩塌",
      "ko": "무너지다",
      "vi": "sụp đổ",
      "id": "runtuh",
      "es": "to collapse",
      "pt": "to collapse"
    },
    "pos": "verb-ichidan",
    "ex": "崩れることができる"
  },
  {
    "id": "V0232",
    "w": "くだく",
    "r": "くだく",
    "m": {
      "en": "to crush",
      "zh-TW": "粉碎",
      "zh-CN": "粉碎",
      "ko": "부수다",
      "vi": "nghiền",
      "id": "menghancurkan",
      "es": "to crush",
      "pt": "to crush"
    },
    "pos": "verb-godan",
    "ex": "砕くことができる"
  },
  {
    "id": "V0233",
    "w": "くさる",
    "r": "くさる",
    "m": {
      "en": "to rot",
      "zh-TW": "腐爛",
      "zh-CN": "腐烂",
      "ko": "썩다",
      "vi": "thối",
      "id": "membusuk",
      "es": "to rot",
      "pt": "to rot"
    },
    "pos": "verb-godan",
    "ex": "腐ることができる"
  },
  {
    "id": "V0234",
    "w": "くばる",
    "r": "くばる",
    "m": {
      "en": "to distribute",
      "zh-TW": "分發",
      "zh-CN": "分发",
      "ko": "나누다",
      "vi": "phân phát",
      "id": "membagikan",
      "es": "to distribute",
      "pt": "to distribute"
    },
    "pos": "verb-godan",
    "ex": "配ることができる"
  },
  {
    "id": "V0235",
    "w": "組む",
    "r": "くむ",
    "m": {
      "en": "to assemble",
      "zh-TW": "組合",
      "zh-CN": "组合",
      "ko": "짜다",
      "vi": "lắp",
      "id": "merakit",
      "es": "to assemble",
      "pt": "to assemble"
    },
    "pos": "verb-godan",
    "ex": "組むことができる"
  },
  {
    "id": "V0236",
    "w": "くやむ",
    "r": "くやむ",
    "m": {
      "en": "to regret",
      "zh-TW": "後悔",
      "zh-CN": "后悔",
      "ko": "후회하다",
      "vi": "hối hận",
      "id": "menyesal",
      "es": "to regret",
      "pt": "to regret"
    },
    "pos": "verb-godan",
    "ex": "悔やむことができる"
  },
  {
    "id": "V0237",
    "w": "くらす",
    "r": "くらす",
    "m": {
      "en": "to live",
      "zh-TW": "生活",
      "zh-CN": "生活",
      "ko": "살다",
      "vi": "sống",
      "id": "tinggal",
      "es": "to live",
      "pt": "to live"
    },
    "pos": "verb-godan",
    "ex": "暮らすことができる"
  },
  {
    "id": "V0238",
    "w": "くらべる",
    "r": "くらべる",
    "m": {
      "en": "to compare",
      "zh-TW": "比較",
      "zh-CN": "比较",
      "ko": "비교하다",
      "vi": "so sánh",
      "id": "membandingkan",
      "es": "to compare",
      "pt": "to compare"
    },
    "pos": "verb-godan",
    "ex": "比べることができる"
  },
  {
    "id": "V0239",
    "w": "くるしむ",
    "r": "くるしむ",
    "m": {
      "en": "to suffer",
      "zh-TW": "痛苦",
      "zh-CN": "痛苦",
      "ko": "괴로워하다",
      "vi": "đau khổ",
      "id": "menderita",
      "es": "to suffer",
      "pt": "to suffer"
    },
    "pos": "verb-godan",
    "ex": "苦しむことができる"
  },
  {
    "id": "V0240",
    "w": "くわえる",
    "r": "くわえる",
    "m": {
      "en": "to add",
      "zh-TW": "加",
      "zh-CN": "加",
      "ko": "더하다",
      "vi": "thêm",
      "id": "menambah",
      "es": "to add",
      "pt": "to add"
    },
    "pos": "verb-ichidan",
    "ex": "加えることができる"
  },
  {
    "id": "V0241",
    "w": "きえる",
    "r": "きえる",
    "m": {
      "en": "to disappear",
      "zh-TW": "消失",
      "zh-CN": "消失",
      "ko": "사라지다",
      "vi": "biến mất",
      "id": "menghilang",
      "es": "to disappear",
      "pt": "to disappear"
    },
    "pos": "verb-ichidan",
    "ex": "消えることができる"
  },
  {
    "id": "V0242",
    "w": "けす",
    "r": "けす",
    "m": {
      "en": "to erase",
      "zh-TW": "擦掉",
      "zh-CN": "擦掉",
      "ko": "지우다",
      "vi": "xóa",
      "id": "menghapus",
      "es": "to erase",
      "pt": "to erase"
    },
    "pos": "verb-godan",
    "ex": "消すことができる"
  },
  {
    "id": "V0243",
    "w": "ける",
    "r": "ける",
    "m": {
      "en": "to kick",
      "zh-TW": "踢",
      "zh-CN": "踢",
      "ko": "차다",
      "vi": "đá",
      "id": "menendang",
      "es": "to kick",
      "pt": "to kick"
    },
    "pos": "verb-ichidan",
    "ex": "蹴ることができる"
  },
  {
    "id": "V0244",
    "w": "こえる",
    "r": "こえる",
    "m": {
      "en": "to cross",
      "zh-TW": "越過",
      "zh-CN": "越过",
      "ko": "넘다",
      "vi": "vượt qua",
      "id": "melewati",
      "es": "to cross",
      "pt": "to cross"
    },
    "pos": "verb-ichidan",
    "ex": "越えることができる"
  },
  {
    "id": "V0245",
    "w": "こおる",
    "r": "こおる",
    "m": {
      "en": "to freeze",
      "zh-TW": "結冰",
      "zh-CN": "结冰",
      "ko": "얼다",
      "vi": "đóng băng",
      "id": "membeku",
      "es": "to freeze",
      "pt": "to freeze"
    },
    "pos": "verb-godan",
    "ex": "凍ることができる"
  },
  {
    "id": "V0246",
    "w": "こげる",
    "r": "こげる",
    "m": {
      "en": "to burn",
      "zh-TW": "燒焦",
      "zh-CN": "烧焦",
      "ko": "타다",
      "vi": "cháy",
      "id": "gosong",
      "es": "to burn",
      "pt": "to burn"
    },
    "pos": "verb-godan",
    "ex": "焦げることができる"
  },
  {
    "id": "V0247",
    "w": "試みる",
    "r": "こころみる",
    "m": {
      "en": "to attempt",
      "zh-TW": "嘗試",
      "zh-CN": "尝试",
      "ko": "시도하다",
      "vi": "thử",
      "id": "mencoba",
      "es": "to attempt",
      "pt": "to attempt"
    },
    "pos": "verb-ichidan",
    "ex": "試みることができる"
  },
  {
    "id": "V0248",
    "w": "このむ",
    "r": "このむ",
    "m": {
      "en": "to prefer",
      "zh-TW": "喜好",
      "zh-CN": "喜好",
      "ko": "좋아하다",
      "vi": "thích",
      "id": "menyukai",
      "es": "to prefer",
      "pt": "to prefer"
    },
    "pos": "verb-godan",
    "ex": "好むことができる"
  },
  {
    "id": "V0249",
    "w": "ころがる",
    "r": "ころがる",
    "m": {
      "en": "to roll",
      "zh-TW": "滾動",
      "zh-CN": "滚动",
      "ko": "구르다",
      "vi": "lăn",
      "id": "menggelinding",
      "es": "to roll",
      "pt": "to roll"
    },
    "pos": "verb-godan",
    "ex": "転がることができる"
  },
  {
    "id": "V0250",
    "w": "ころす",
    "r": "ころす",
    "m": {
      "en": "to kill",
      "zh-TW": "殺",
      "zh-CN": "杀",
      "ko": "죽이다",
      "vi": "giết",
      "id": "membunuh",
      "es": "to kill",
      "pt": "to kill"
    },
    "pos": "verb-godan",
    "ex": "殺すことができる"
  },
  {
    "id": "V0251",
    "w": "こわす",
    "r": "こわす",
    "m": {
      "en": "to break",
      "zh-TW": "破壞",
      "zh-CN": "破坏",
      "ko": "부수다",
      "vi": "phá",
      "id": "merusak",
      "es": "to break",
      "pt": "to break"
    },
    "pos": "verb-godan",
    "ex": "壊すことができる"
  },
  {
    "id": "V0252",
    "w": "こわれる",
    "r": "こわれる",
    "m": {
      "en": "to be broken",
      "zh-TW": "壞掉",
      "zh-CN": "坏掉",
      "ko": "고장나다",
      "vi": "hỏng",
      "id": "rusak",
      "es": "to be broken",
      "pt": "to be broken"
    },
    "pos": "verb-ichidan",
    "ex": "壊れることができる"
  },
  {
    "id": "V0253",
    "w": "こむ",
    "r": "こむ",
    "m": {
      "en": "to be crowded",
      "zh-TW": "擁擠",
      "zh-CN": "拥挤",
      "ko": "붐비다",
      "vi": "đông",
      "id": "ramai",
      "es": "to be crowded",
      "pt": "to be crowded"
    },
    "pos": "verb-godan",
    "ex": "混むことができる"
  },
  {
    "id": "V0254",
    "w": "こめる",
    "r": "こめる",
    "m": {
      "en": "to include",
      "zh-TW": "包含",
      "zh-CN": "包含",
      "ko": "담다",
      "vi": "chứa",
      "id": "memasukkan",
      "es": "to include",
      "pt": "to include"
    },
    "pos": "verb-ichidan",
    "ex": "込めることができる"
  },
  {
    "id": "V0255",
    "w": "さがす",
    "r": "さがす",
    "m": {
      "en": "to search",
      "zh-TW": "尋找",
      "zh-CN": "寻找",
      "ko": "찾다",
      "vi": "tìm",
      "id": "mencari",
      "es": "to search",
      "pt": "to search"
    },
    "pos": "verb-godan",
    "ex": "探すことができる"
  },
  {
    "id": "V0256",
    "w": "下がる",
    "r": "さがる",
    "m": {
      "en": "to fall",
      "zh-TW": "下降",
      "zh-CN": "下降",
      "ko": "내리다",
      "vi": "giảm",
      "id": "turun",
      "es": "to fall",
      "pt": "to fall"
    },
    "pos": "verb-godan",
    "ex": "下がることができる",
    "syn": [
      "低下する",
      "下落する",
      "減少する"
    ]
  },
  {
    "id": "V0257",
    "w": "さけぶ",
    "r": "さけぶ",
    "m": {
      "en": "to shout",
      "zh-TW": "叫喊",
      "zh-CN": "叫喊",
      "ko": "외치다",
      "vi": "hét",
      "id": "berteriak",
      "es": "to shout",
      "pt": "to shout"
    },
    "pos": "verb-godan",
    "ex": "叫ぶことができる"
  },
  {
    "id": "V0258",
    "w": "さける",
    "r": "さける",
    "m": {
      "en": "to avoid",
      "zh-TW": "避開",
      "zh-CN": "避开",
      "ko": "피하다",
      "vi": "tránh",
      "id": "menghindari",
      "es": "to avoid",
      "pt": "to avoid"
    },
    "pos": "verb-ichidan",
    "ex": "避けることができる"
  },
  {
    "id": "V0259",
    "w": "下げる",
    "r": "さげる",
    "m": {
      "en": "to lower",
      "zh-TW": "降低",
      "zh-CN": "降低",
      "ko": "내리다",
      "vi": "hạ",
      "id": "menurunkan",
      "es": "to lower",
      "pt": "to lower"
    },
    "pos": "verb-godan",
    "ex": "下げることができる",
    "syn": [
      "低下させる",
      "引き下げる",
      "落とす"
    ]
  },
  {
    "id": "V0260",
    "w": "ささえる",
    "r": "ささえる",
    "m": {
      "en": "to support",
      "zh-TW": "支撐",
      "zh-CN": "支撑",
      "ko": "지탱하다",
      "vi": "hỗ trợ",
      "id": "mendukung",
      "es": "to support",
      "pt": "to support"
    },
    "pos": "verb-ichidan",
    "ex": "支えることができる"
  },
  {
    "id": "V0261",
    "w": "さす",
    "r": "さす",
    "m": {
      "en": "to stab",
      "zh-TW": "刺",
      "zh-CN": "刺",
      "ko": "찌르다",
      "vi": "đâm",
      "id": "menusuk",
      "es": "to stab",
      "pt": "to stab"
    },
    "pos": "verb-godan",
    "ex": "刺すことができる"
  },
  {
    "id": "V0262",
    "w": "さだめる",
    "r": "さだめる",
    "m": {
      "en": "to establish",
      "zh-TW": "制定",
      "zh-CN": "制定",
      "ko": "정하다",
      "vi": "quy định",
      "id": "menetapkan",
      "es": "to establish",
      "pt": "to establish"
    },
    "pos": "verb-ichidan",
    "ex": "定めることができる"
  },
  {
    "id": "V0263",
    "w": "覚める",
    "r": "さめる",
    "m": {
      "en": "to wake up",
      "zh-TW": "醒來",
      "zh-CN": "醒来",
      "ko": "깨다",
      "vi": "tỉnh",
      "id": "bangun",
      "es": "to wake up",
      "pt": "to wake up"
    },
    "pos": "verb-ichidan",
    "ex": "覚めることができる"
  },
  {
    "id": "V0264",
    "w": "さわぐ",
    "r": "さわぐ",
    "m": {
      "en": "to make noise",
      "zh-TW": "吵鬧",
      "zh-CN": "吵闹",
      "ko": "떠들다",
      "vi": "ồn ào",
      "id": "ribut",
      "es": "to make noise",
      "pt": "to make noise"
    },
    "pos": "verb-godan",
    "ex": "騒ぐことができる"
  },
  {
    "id": "V0265",
    "w": "さわれる",
    "r": "さわれる",
    "m": {
      "en": "to touch",
      "zh-TW": "觸碰",
      "zh-CN": "触碰",
      "ko": "닿다",
      "vi": "chạm",
      "id": "menyentuh",
      "es": "to touch",
      "pt": "to touch"
    },
    "pos": "verb-ichidan",
    "ex": "触れることができる"
  },
  {
    "id": "V0266",
    "w": "仕上げる",
    "r": "しあげる",
    "m": {
      "en": "to finish",
      "zh-TW": "完成",
      "zh-CN": "完成",
      "ko": "완성하다",
      "vi": "hoàn thành",
      "id": "menyelesaikan",
      "es": "to finish",
      "pt": "to finish"
    },
    "pos": "verb-godan",
    "ex": "仕上げることができる"
  },
  {
    "id": "V0267",
    "w": "仕切る",
    "r": "しきる",
    "m": {
      "en": "to partition",
      "zh-TW": "分隔",
      "zh-CN": "分隔",
      "ko": "나누다",
      "vi": "phân chia",
      "id": "memisahkan",
      "es": "to partition",
      "pt": "to partition"
    },
    "pos": "verb-ichidan",
    "ex": "仕切ることができる"
  },
  {
    "id": "V0268",
    "w": "しずむ",
    "r": "しずむ",
    "m": {
      "en": "to sink",
      "zh-TW": "沉沒",
      "zh-CN": "沉没",
      "ko": "가라앉다",
      "vi": "chìm",
      "id": "tenggelam",
      "es": "to sink",
      "pt": "to sink"
    },
    "pos": "verb-godan",
    "ex": "沈むことができる"
  },
  {
    "id": "V0269",
    "w": "したがう",
    "r": "したがう",
    "m": {
      "en": "to follow",
      "zh-TW": "遵從",
      "zh-CN": "遵从",
      "ko": "따르다",
      "vi": "tuân theo",
      "id": "mengikuti",
      "es": "to follow",
      "pt": "to follow"
    },
    "pos": "verb-godan",
    "ex": "従うことができる"
  },
  {
    "id": "V0270",
    "w": "しばる",
    "r": "しばる",
    "m": {
      "en": "to tie",
      "zh-TW": "綁",
      "zh-CN": "绑",
      "ko": "묶다",
      "vi": "buộc",
      "id": "mengikat",
      "es": "to tie",
      "pt": "to tie"
    },
    "pos": "verb-godan",
    "ex": "縛ることができる"
  },
  {
    "id": "V0271",
    "w": "しぼる",
    "r": "しぼる",
    "m": {
      "en": "to squeeze",
      "zh-TW": "擠",
      "zh-CN": "挤",
      "ko": "짜다",
      "vi": "vắt",
      "id": "memeras",
      "es": "to squeeze",
      "pt": "to squeeze"
    },
    "pos": "verb-godan",
    "ex": "絞ることができる"
  },
  {
    "id": "V0272",
    "w": "閉まる",
    "r": "しまる",
    "m": {
      "en": "to close",
      "zh-TW": "關閉",
      "zh-CN": "关闭",
      "ko": "닫히다",
      "vi": "đóng",
      "id": "tertutup",
      "es": "to close",
      "pt": "to close"
    },
    "pos": "verb-godan",
    "ex": "閉まることができる"
  },
  {
    "id": "V0273",
    "w": "しめす",
    "r": "しめす",
    "m": {
      "en": "to show",
      "zh-TW": "顯示",
      "zh-CN": "显示",
      "ko": "보이다",
      "vi": "chỉ ra",
      "id": "menunjukkan",
      "es": "to show",
      "pt": "to show"
    },
    "pos": "verb-godan",
    "ex": "示すことができる"
  },
  {
    "id": "V0274",
    "w": "しめる",
    "r": "しめる",
    "m": {
      "en": "to occupy",
      "zh-TW": "佔據",
      "zh-CN": "占据",
      "ko": "차지하다",
      "vi": "chiếm",
      "id": "menempati",
      "es": "to occupy",
      "pt": "to occupy"
    },
    "pos": "verb-ichidan",
    "ex": "占めることができる"
  },
  {
    "id": "V0275",
    "w": "しめる",
    "r": "しめる",
    "m": {
      "en": "to get damp",
      "zh-TW": "潮濕",
      "zh-CN": "潮湿",
      "ko": "축축해지다",
      "vi": "ẩm",
      "id": "lembab",
      "es": "to get damp",
      "pt": "to get damp"
    },
    "pos": "verb-ichidan",
    "ex": "湿ることができる"
  },
  {
    "id": "V0276",
    "w": "しらべる",
    "r": "しらべる",
    "m": {
      "en": "to investigate",
      "zh-TW": "調查",
      "zh-CN": "调查",
      "ko": "조사하다",
      "vi": "điều tra",
      "id": "menyelidiki",
      "es": "to investigate",
      "pt": "to investigate"
    },
    "pos": "verb-godan",
    "ex": "調べることができる"
  },
  {
    "id": "V0277",
    "w": "知らせる",
    "r": "しらせる",
    "m": {
      "en": "to inform",
      "zh-TW": "通知",
      "zh-CN": "通知",
      "ko": "알리다",
      "vi": "thông báo",
      "id": "memberitahu",
      "es": "to inform",
      "pt": "to inform"
    },
    "pos": "verb-ichidan",
    "ex": "知らせることができる"
  },
  {
    "id": "V0278",
    "w": "信じる",
    "r": "しんじる",
    "m": {
      "en": "to believe",
      "zh-TW": "相信",
      "zh-CN": "相信",
      "ko": "믿다",
      "vi": "tin",
      "id": "percaya",
      "es": "to believe",
      "pt": "to believe"
    },
    "pos": "verb-godan",
    "ex": "信じることができる"
  },
  {
    "id": "V0279",
    "w": "すぎる",
    "r": "すぎる",
    "m": {
      "en": "to pass",
      "zh-TW": "經過",
      "zh-CN": "经过",
      "ko": "지나다",
      "vi": "qua",
      "id": "lewat",
      "es": "to pass",
      "pt": "to pass"
    },
    "pos": "verb-godan",
    "ex": "過ぎることができる"
  },
  {
    "id": "V0280",
    "w": "優れる",
    "r": "すぐれる",
    "m": {
      "en": "to excel",
      "zh-TW": "優秀",
      "zh-CN": "优秀",
      "ko": "뛰어나다",
      "vi": "xuất sắc",
      "id": "unggul",
      "es": "to excel",
      "pt": "to excel"
    },
    "pos": "verb-ichidan",
    "ex": "優れることができる"
  },
  {
    "id": "V0281",
    "w": "すすめる",
    "r": "すすめる",
    "m": {
      "en": "to recommend",
      "zh-TW": "推薦",
      "zh-CN": "推荐",
      "ko": "권하다",
      "vi": "khuyên",
      "id": "merekomendasikan",
      "es": "to recommend",
      "pt": "to recommend"
    },
    "pos": "verb-ichidan",
    "ex": "勧めることができる"
  },
  {
    "id": "V0282",
    "w": "すてる",
    "r": "すてる",
    "m": {
      "en": "to throw away",
      "zh-TW": "丟棄",
      "zh-CN": "丢弃",
      "ko": "버리다",
      "vi": "vứt",
      "id": "membuang",
      "es": "to throw away",
      "pt": "to throw away"
    },
    "pos": "verb-ichidan",
    "ex": "捨てることができる"
  },
  {
    "id": "V0283",
    "w": "すべる",
    "r": "すべる",
    "m": {
      "en": "to slip",
      "zh-TW": "滑",
      "zh-CN": "滑",
      "ko": "미끄러지다",
      "vi": "trượt",
      "id": "tergelincir",
      "es": "to slip",
      "pt": "to slip"
    },
    "pos": "verb-godan",
    "ex": "滑ることができる"
  },
  {
    "id": "V0284",
    "w": "すむ",
    "r": "すむ",
    "m": {
      "en": "to finish",
      "zh-TW": "完成",
      "zh-CN": "完成",
      "ko": "끝나다",
      "vi": "xong",
      "id": "selesai",
      "es": "to finish",
      "pt": "to finish"
    },
    "pos": "verb-godan",
    "ex": "済むことができる"
  },
  {
    "id": "V0285",
    "w": "すむ",
    "r": "すむ",
    "m": {
      "en": "to clear",
      "zh-TW": "清澈",
      "zh-CN": "清澈",
      "ko": "맑아지다",
      "vi": "trong",
      "id": "jernih",
      "es": "to clear",
      "pt": "to clear"
    },
    "pos": "verb-godan",
    "ex": "澄むことができる"
  },
  {
    "id": "V0286",
    "w": "する",
    "r": "する",
    "m": {
      "en": "to print",
      "zh-TW": "印刷",
      "zh-CN": "印刷",
      "ko": "인쇄하다",
      "vi": "in",
      "id": "mencetak",
      "es": "to print",
      "pt": "to print"
    },
    "pos": "verb-godan",
    "ex": "刷ることができる"
  },
  {
    "id": "V0287",
    "w": "すわる",
    "r": "すわる",
    "m": {
      "en": "to sit",
      "zh-TW": "坐",
      "zh-CN": "坐",
      "ko": "앉다",
      "vi": "ngồi",
      "id": "duduk",
      "es": "to sit",
      "pt": "to sit"
    },
    "pos": "verb-godan",
    "ex": "椅子に座る",
    "syn": [
      "腰掛ける",
      "着席する",
      "座席につく"
    ]
  },
  {
    "id": "V0288",
    "w": "せめる",
    "r": "せめる",
    "m": {
      "en": "to blame",
      "zh-TW": "責備",
      "zh-CN": "责备",
      "ko": "책망하다",
      "vi": "trách",
      "id": "menyalahkan",
      "es": "to blame",
      "pt": "to blame"
    },
    "pos": "verb-ichidan",
    "ex": "責めることができる"
  },
  {
    "id": "V0289",
    "w": "せめる",
    "r": "せめる",
    "m": {
      "en": "to attack",
      "zh-TW": "進攻",
      "zh-CN": "进攻",
      "ko": "공격하다",
      "vi": "tấn công",
      "id": "menyerang",
      "es": "to attack",
      "pt": "to attack"
    },
    "pos": "verb-ichidan",
    "ex": "攻めることができる"
  },
  {
    "id": "V0290",
    "w": "そえる",
    "r": "そえる",
    "m": {
      "en": "to add",
      "zh-TW": "附加",
      "zh-CN": "附加",
      "ko": "곁들이다",
      "vi": "thêm vào",
      "id": "menambahkan",
      "es": "to add",
      "pt": "to add"
    },
    "pos": "verb-ichidan",
    "ex": "添えることができる"
  },
  {
    "id": "V0291",
    "w": "そなえる",
    "r": "そなえる",
    "m": {
      "en": "to prepare",
      "zh-TW": "準備",
      "zh-CN": "准备",
      "ko": "갖추다",
      "vi": "chuẩn bị",
      "id": "mempersiapkan",
      "es": "to prepare",
      "pt": "to prepare"
    },
    "pos": "verb-ichidan",
    "ex": "備えることができる"
  },
  {
    "id": "V0292",
    "w": "そめる",
    "r": "そめる",
    "m": {
      "en": "to dye",
      "zh-TW": "染色",
      "zh-CN": "染色",
      "ko": "물들이다",
      "vi": "nhuộm",
      "id": "mewarnai",
      "es": "to dye",
      "pt": "to dye"
    },
    "pos": "verb-ichidan",
    "ex": "染めることができる"
  },
  {
    "id": "V0293",
    "w": "そろえる",
    "r": "そろえる",
    "m": {
      "en": "to arrange",
      "zh-TW": "整理",
      "zh-CN": "整理",
      "ko": "갖추다",
      "vi": "sắp xếp",
      "id": "menyusun",
      "es": "to arrange",
      "pt": "to arrange"
    },
    "pos": "verb-ichidan",
    "ex": "揃えることができる"
  },
  {
    "id": "V0294",
    "w": "たえる",
    "r": "たえる",
    "m": {
      "en": "to endure",
      "zh-TW": "忍耐",
      "zh-CN": "忍耐",
      "ko": "견디다",
      "vi": "chịu đựng",
      "id": "bertahan",
      "es": "to endure",
      "pt": "to endure"
    },
    "pos": "verb-ichidan",
    "ex": "耐えることができる"
  },
  {
    "id": "V0295",
    "w": "たおす",
    "r": "たおす",
    "m": {
      "en": "to knock down",
      "zh-TW": "打倒",
      "zh-CN": "打倒",
      "ko": "쓰러뜨리다",
      "vi": "đánh đổ",
      "id": "menjatuhkan",
      "es": "to knock down",
      "pt": "to knock down"
    },
    "pos": "verb-godan",
    "ex": "倒すことができる"
  },
  {
    "id": "V0296",
    "w": "たおれる",
    "r": "たおれる",
    "m": {
      "en": "to fall",
      "zh-TW": "倒下",
      "zh-CN": "倒下",
      "ko": "쓰러지다",
      "vi": "ngã",
      "id": "jatuh",
      "es": "to fall",
      "pt": "to fall"
    },
    "pos": "verb-ichidan",
    "ex": "倒れることができる"
  },
  {
    "id": "V0297",
    "w": "高める",
    "r": "たかめる",
    "m": {
      "en": "to raise",
      "zh-TW": "提高",
      "zh-CN": "提高",
      "ko": "높이다",
      "vi": "nâng cao",
      "id": "meningkatkan",
      "es": "to raise",
      "pt": "to raise"
    },
    "pos": "verb-ichidan",
    "ex": "高めることができる"
  },
  {
    "id": "V0298",
    "w": "たく",
    "r": "たく",
    "m": {
      "en": "to cook rice",
      "zh-TW": "煮飯",
      "zh-CN": "煮饭",
      "ko": "밥짓다",
      "vi": "nấu cơm",
      "id": "menanak",
      "es": "to cook rice",
      "pt": "to cook rice"
    },
    "pos": "verb-godan",
    "ex": "炊くことができる"
  },
  {
    "id": "V0299",
    "w": "たしかめる",
    "r": "たしかめる",
    "m": {
      "en": "to confirm",
      "zh-TW": "確認",
      "zh-CN": "确认",
      "ko": "확인하다",
      "vi": "xác nhận",
      "id": "memastikan",
      "es": "to confirm",
      "pt": "to confirm"
    },
    "pos": "verb-ichidan",
    "ex": "確かめることができる"
  },
  {
    "id": "V0300",
    "w": "たすかる",
    "r": "たすかる",
    "m": {
      "en": "to be saved",
      "zh-TW": "得救",
      "zh-CN": "得救",
      "ko": "살아나다",
      "vi": "được cứu",
      "id": "tertolong",
      "es": "to be saved",
      "pt": "to be saved"
    },
    "pos": "verb-godan",
    "ex": "助かることができる"
  },
  {
    "id": "V0301",
    "w": "たたむ",
    "r": "たたむ",
    "m": {
      "en": "to fold",
      "zh-TW": "折疊",
      "zh-CN": "折叠",
      "ko": "접다",
      "vi": "gấp",
      "id": "melipat",
      "es": "to fold",
      "pt": "to fold"
    },
    "pos": "verb-godan",
    "ex": "畳むことができる"
  },
  {
    "id": "V0302",
    "w": "たたかう",
    "r": "たたかう",
    "m": {
      "en": "to fight",
      "zh-TW": "戰鬥",
      "zh-CN": "战斗",
      "ko": "싸우다",
      "vi": "chiến đấu",
      "id": "berperang",
      "es": "to fight",
      "pt": "to fight"
    },
    "pos": "verb-godan",
    "ex": "戦うことができる"
  },
  {
    "id": "V0303",
    "w": "たたく",
    "r": "たたく",
    "m": {
      "en": "to knock",
      "zh-TW": "敲",
      "zh-CN": "敲",
      "ko": "두드리다",
      "vi": "gõ",
      "id": "mengetuk",
      "es": "to knock",
      "pt": "to knock"
    },
    "pos": "verb-godan",
    "ex": "叩くことができる"
  },
  {
    "id": "V0304",
    "w": "たてる",
    "r": "たてる",
    "m": {
      "en": "to set up",
      "zh-TW": "豎立",
      "zh-CN": "竖立",
      "ko": "세우다",
      "vi": "dựng",
      "id": "mendirikan",
      "es": "to set up",
      "pt": "to set up"
    },
    "pos": "verb-ichidan",
    "ex": "立てることができる"
  },
  {
    "id": "V0305",
    "w": "たてる",
    "r": "たてる",
    "m": {
      "en": "to build",
      "zh-TW": "建造",
      "zh-CN": "建造",
      "ko": "짓다",
      "vi": "xây",
      "id": "membangun",
      "es": "to build",
      "pt": "to build"
    },
    "pos": "verb-ichidan",
    "ex": "建てることができる"
  },
  {
    "id": "V0306",
    "w": "楽しむ",
    "r": "たのしむ",
    "m": {
      "en": "to enjoy",
      "zh-TW": "享受",
      "zh-CN": "享受",
      "ko": "즐기다",
      "vi": "vui vẻ",
      "id": "menikmati",
      "es": "to enjoy",
      "pt": "to enjoy"
    },
    "pos": "verb-godan",
    "ex": "楽しむことができる"
  },
  {
    "id": "V0307",
    "w": "たばねる",
    "r": "たばねる",
    "m": {
      "en": "to bundle",
      "zh-TW": "捆綁",
      "zh-CN": "捆绑",
      "ko": "묶다",
      "vi": "bó",
      "id": "mengikat",
      "es": "to bundle",
      "pt": "to bundle"
    },
    "pos": "verb-ichidan",
    "ex": "束ねることができる"
  },
  {
    "id": "V0308",
    "w": "食べる",
    "r": "たべる",
    "m": {
      "en": "to eat",
      "zh-TW": "吃",
      "zh-CN": "吃",
      "ko": "먹다",
      "vi": "ăn",
      "id": "makan",
      "es": "comer",
      "pt": "comer"
    },
    "pos": "verb-godan",
    "ex": "食べることができる"
  },
  {
    "id": "V0309",
    "w": "試す",
    "r": "ためす",
    "m": {
      "en": "to try",
      "zh-TW": "試",
      "zh-CN": "试",
      "ko": "시험하다",
      "vi": "thử",
      "id": "mencoba",
      "es": "to try",
      "pt": "to try"
    },
    "pos": "verb-godan",
    "ex": "試すことができる"
  },
  {
    "id": "V0310",
    "w": "ためる",
    "r": "ためる",
    "m": {
      "en": "to save",
      "zh-TW": "儲存",
      "zh-CN": "储存",
      "ko": "모으다",
      "vi": "tích",
      "id": "mengumpulkan",
      "es": "to save",
      "pt": "to save"
    },
    "pos": "verb-ichidan",
    "ex": "溜めることができる"
  },
  {
    "id": "V0311",
    "w": "たもつ",
    "r": "たもつ",
    "m": {
      "en": "to maintain",
      "zh-TW": "保持",
      "zh-CN": "保持",
      "ko": "유지하다",
      "vi": "giữ",
      "id": "mempertahankan",
      "es": "to maintain",
      "pt": "to maintain"
    },
    "pos": "verb-godan",
    "ex": "保つことができる"
  },
  {
    "id": "V0312",
    "w": "足りる",
    "r": "たりる",
    "m": {
      "en": "to be enough",
      "zh-TW": "足夠",
      "zh-CN": "足够",
      "ko": "충분하다",
      "vi": "đủ",
      "id": "cukup",
      "es": "to be enough",
      "pt": "to be enough"
    },
    "pos": "verb-ichidan",
    "ex": "足りることができる"
  },
  {
    "id": "V0313",
    "w": "たれる",
    "r": "たれる",
    "m": {
      "en": "to hang",
      "zh-TW": "垂下",
      "zh-CN": "垂下",
      "ko": "늘어지다",
      "vi": "rủ",
      "id": "menggantung",
      "es": "to hang",
      "pt": "to hang"
    },
    "pos": "verb-ichidan",
    "ex": "垂れることができる"
  },
  {
    "id": "V0314",
    "w": "ちがう",
    "r": "ちがう",
    "m": {
      "en": "to differ",
      "zh-TW": "不同",
      "zh-CN": "不同",
      "ko": "다르다",
      "vi": "khác",
      "id": "berbeda",
      "es": "to differ",
      "pt": "to differ"
    },
    "pos": "verb-godan",
    "ex": "違うことができる"
  },
  {
    "id": "V0315",
    "w": "近づく",
    "r": "ちかづく",
    "m": {
      "en": "to approach",
      "zh-TW": "接近",
      "zh-CN": "接近",
      "ko": "다가가다",
      "vi": "đến gần",
      "id": "mendekati",
      "es": "to approach",
      "pt": "to approach"
    },
    "pos": "verb-godan",
    "ex": "近づくことができる"
  },
  {
    "id": "V0316",
    "w": "ちかう",
    "r": "ちかう",
    "m": {
      "en": "to swear",
      "zh-TW": "發誓",
      "zh-CN": "发誓",
      "ko": "맹세하다",
      "vi": "thề",
      "id": "bersumpah",
      "es": "to swear",
      "pt": "to swear"
    },
    "pos": "verb-godan",
    "ex": "誓うことができる"
  },
  {
    "id": "V0317",
    "w": "ちぢむ",
    "r": "ちぢむ",
    "m": {
      "en": "to shrink",
      "zh-TW": "縮小",
      "zh-CN": "缩小",
      "ko": "줄어들다",
      "vi": "co",
      "id": "menyusut",
      "es": "to shrink",
      "pt": "to shrink"
    },
    "pos": "verb-godan",
    "ex": "縮むことができる"
  },
  {
    "id": "V0318",
    "w": "ちらす",
    "r": "ちらす",
    "m": {
      "en": "to scatter",
      "zh-TW": "撒",
      "zh-CN": "撒",
      "ko": "흩뿌리다",
      "vi": "rải",
      "id": "menyebarkan",
      "es": "to scatter",
      "pt": "to scatter"
    },
    "pos": "verb-godan",
    "ex": "散らすことができる"
  },
  {
    "id": "V0319",
    "w": "ちる",
    "r": "ちる",
    "m": {
      "en": "to scatter",
      "zh-TW": "散落",
      "zh-CN": "散落",
      "ko": "흩어지다",
      "vi": "rơi rụng",
      "id": "berguguran",
      "es": "to scatter",
      "pt": "to scatter"
    },
    "pos": "verb-ichidan",
    "ex": "散ることができる"
  },
  {
    "id": "V0320",
    "w": "使う",
    "r": "つかう",
    "m": {
      "en": "to use",
      "zh-TW": "使用",
      "zh-CN": "使用",
      "ko": "쓰다",
      "vi": "dùng",
      "id": "menggunakan",
      "es": "to use",
      "pt": "to use"
    },
    "pos": "verb-godan",
    "ex": "使うことができる"
  },
  {
    "id": "V0321",
    "w": "つかまえる",
    "r": "つかまえる",
    "m": {
      "en": "to catch",
      "zh-TW": "抓住",
      "zh-CN": "抓住",
      "ko": "잡다",
      "vi": "bắt",
      "id": "menangkap",
      "es": "to catch",
      "pt": "to catch"
    },
    "pos": "verb-ichidan",
    "ex": "捕まえることができる"
  },
  {
    "id": "V0322",
    "w": "つかまる",
    "r": "つかまる",
    "m": {
      "en": "to be caught",
      "zh-TW": "被抓",
      "zh-CN": "被抓",
      "ko": "잡히다",
      "vi": "bị bắt",
      "id": "tertangkap",
      "es": "to be caught",
      "pt": "to be caught"
    },
    "pos": "verb-godan",
    "ex": "捕まることができる"
  },
  {
    "id": "V0323",
    "w": "つく",
    "r": "つく",
    "m": {
      "en": "to attach",
      "zh-TW": "附著",
      "zh-CN": "附着",
      "ko": "붙다",
      "vi": "dính",
      "id": "menempel",
      "es": "to attach",
      "pt": "to attach"
    },
    "pos": "verb-godan",
    "ex": "付くことができる"
  },
  {
    "id": "V0324",
    "w": "着く",
    "r": "つく",
    "m": {
      "en": "to arrive",
      "zh-TW": "到達",
      "zh-CN": "到达",
      "ko": "도착하다",
      "vi": "đến",
      "id": "tiba",
      "es": "to arrive",
      "pt": "to arrive"
    },
    "pos": "verb-godan",
    "ex": "着くことができる"
  },
  {
    "id": "V0325",
    "w": "つくす",
    "r": "つくす",
    "m": {
      "en": "to exhaust",
      "zh-TW": "竭盡",
      "zh-CN": "竭尽",
      "ko": "다하다",
      "vi": "tận tâm",
      "id": "menghabiskan",
      "es": "to exhaust",
      "pt": "to exhaust"
    },
    "pos": "verb-godan",
    "ex": "尽くすことができる"
  },
  {
    "id": "V0326",
    "w": "作る",
    "r": "つくる",
    "m": {
      "en": "to make",
      "zh-TW": "製作",
      "zh-CN": "制作",
      "ko": "만들다",
      "vi": "làm",
      "id": "membuat",
      "es": "to make",
      "pt": "to make"
    },
    "pos": "verb-godan",
    "ex": "作ることができる"
  },
  {
    "id": "V0327",
    "w": "告げる",
    "r": "つげる",
    "m": {
      "en": "to tell",
      "zh-TW": "告訴",
      "zh-CN": "告诉",
      "ko": "알리다",
      "vi": "nói",
      "id": "memberitahu",
      "es": "to tell",
      "pt": "to tell"
    },
    "pos": "verb-godan",
    "ex": "告げることができる"
  },
  {
    "id": "V0328",
    "w": "包む",
    "r": "つつむ",
    "m": {
      "en": "to wrap",
      "zh-TW": "包",
      "zh-CN": "包",
      "ko": "싸다",
      "vi": "gói",
      "id": "membungkus",
      "es": "to wrap",
      "pt": "to wrap"
    },
    "pos": "verb-godan",
    "ex": "包むことができる"
  },
  {
    "id": "V0329",
    "w": "つとめる",
    "r": "つとめる",
    "m": {
      "en": "to work",
      "zh-TW": "工作",
      "zh-CN": "工作",
      "ko": "근무하다",
      "vi": "làm việc",
      "id": "bekerja",
      "es": "to work",
      "pt": "to work"
    },
    "pos": "verb-ichidan",
    "ex": "勤めることができる"
  },
  {
    "id": "V0330",
    "w": "つとめる",
    "r": "つとめる",
    "m": {
      "en": "to strive",
      "zh-TW": "努力",
      "zh-CN": "努力",
      "ko": "노력하다",
      "vi": "cố gắng",
      "id": "berusaha",
      "es": "to strive",
      "pt": "to strive"
    },
    "pos": "verb-ichidan",
    "ex": "努めることができる"
  },
  {
    "id": "V0331",
    "w": "つなぐ",
    "r": "つなぐ",
    "m": {
      "en": "to connect",
      "zh-TW": "連接",
      "zh-CN": "连接",
      "ko": "연결하다",
      "vi": "kết nối",
      "id": "menghubungkan",
      "es": "to connect",
      "pt": "to connect"
    },
    "pos": "verb-godan",
    "ex": "繋ぐことができる"
  },
  {
    "id": "V0332",
    "w": "つむ",
    "r": "つむ",
    "m": {
      "en": "to pile up",
      "zh-TW": "堆積",
      "zh-CN": "堆积",
      "ko": "쌓다",
      "vi": "chất",
      "id": "menumpuk",
      "es": "to pile up",
      "pt": "to pile up"
    },
    "pos": "verb-godan",
    "ex": "積むことができる"
  },
  {
    "id": "V0333",
    "w": "つる",
    "r": "つる",
    "m": {
      "en": "to fish",
      "zh-TW": "釣魚",
      "zh-CN": "钓鱼",
      "ko": "낚다",
      "vi": "câu",
      "id": "memancing",
      "es": "to fish",
      "pt": "to fish"
    },
    "pos": "verb-godan",
    "ex": "釣ることができる"
  },
  {
    "id": "V0334",
    "w": "つれる",
    "r": "つれる",
    "m": {
      "en": "to take along",
      "zh-TW": "帶",
      "zh-CN": "带",
      "ko": "데려가다",
      "vi": "dẫn",
      "id": "membawa",
      "es": "to take along",
      "pt": "to take along"
    },
    "pos": "verb-ichidan",
    "ex": "連れることができる"
  },
  {
    "id": "V0335",
    "w": "出会う",
    "r": "であう",
    "m": {
      "en": "to meet",
      "zh-TW": "相遇",
      "zh-CN": "相遇",
      "ko": "만나다",
      "vi": "gặp",
      "id": "bertemu",
      "es": "to meet",
      "pt": "to meet"
    },
    "pos": "verb-godan",
    "ex": "出会うことができる"
  },
  {
    "id": "V0336",
    "w": "出かける",
    "r": "でかける",
    "m": {
      "en": "to go out",
      "zh-TW": "出門",
      "zh-CN": "出门",
      "ko": "외출하다",
      "vi": "ra ngoài",
      "id": "pergi keluar",
      "es": "to go out",
      "pt": "to go out"
    },
    "pos": "verb-ichidan",
    "ex": "出かけることができる"
  },
  {
    "id": "V0337",
    "w": "できる",
    "r": "できる",
    "m": {
      "en": "to be able",
      "zh-TW": "能夠",
      "zh-CN": "能够",
      "ko": "할 수 있다",
      "vi": "có thể",
      "id": "bisa",
      "es": "to be able",
      "pt": "to be able"
    },
    "pos": "verb-ichidan",
    "ex": "できることができる"
  },
  {
    "id": "V0338",
    "w": "てらす",
    "r": "てらす",
    "m": {
      "en": "to illuminate",
      "zh-TW": "照亮",
      "zh-CN": "照亮",
      "ko": "비추다",
      "vi": "chiếu sáng",
      "id": "menerangi",
      "es": "to illuminate",
      "pt": "to illuminate"
    },
    "pos": "verb-godan",
    "ex": "照らすことができる"
  },
  {
    "id": "V0339",
    "w": "通す",
    "r": "とおす",
    "m": {
      "en": "to let through",
      "zh-TW": "通過",
      "zh-CN": "通过",
      "ko": "통하다",
      "vi": "cho qua",
      "id": "melewatkan",
      "es": "to let through",
      "pt": "to let through"
    },
    "pos": "verb-godan",
    "ex": "通すことができる"
  },
  {
    "id": "V0340",
    "w": "通る",
    "r": "とおる",
    "m": {
      "en": "to pass",
      "zh-TW": "經過",
      "zh-CN": "经过",
      "ko": "지나가다",
      "vi": "đi qua",
      "id": "lewat",
      "es": "to pass",
      "pt": "to pass"
    },
    "pos": "verb-godan",
    "ex": "通ることができる"
  },
  {
    "id": "V0341",
    "w": "とかす",
    "r": "とかす",
    "m": {
      "en": "to melt",
      "zh-TW": "融化",
      "zh-CN": "融化",
      "ko": "녹이다",
      "vi": "tan",
      "id": "melelehkan",
      "es": "to melt",
      "pt": "to melt"
    },
    "pos": "verb-godan",
    "ex": "溶かすことができる"
  },
  {
    "id": "V0342",
    "w": "とける",
    "r": "とける",
    "m": {
      "en": "to melt",
      "zh-TW": "融化",
      "zh-CN": "融化",
      "ko": "녹다",
      "vi": "tan chảy",
      "id": "meleleh",
      "es": "to melt",
      "pt": "to melt"
    },
    "pos": "verb-ichidan",
    "ex": "溶けることができる"
  },
  {
    "id": "V0343",
    "w": "ととのえる",
    "r": "ととのえる",
    "m": {
      "en": "to arrange",
      "zh-TW": "整理",
      "zh-CN": "整理",
      "ko": "정돈하다",
      "vi": "sắp xếp",
      "id": "merapikan",
      "es": "to arrange",
      "pt": "to arrange"
    },
    "pos": "verb-ichidan",
    "ex": "整えることができる"
  },
  {
    "id": "V0344",
    "w": "とぶ",
    "r": "とぶ",
    "m": {
      "en": "to fly",
      "zh-TW": "飛",
      "zh-CN": "飞",
      "ko": "날다",
      "vi": "bay",
      "id": "terbang",
      "es": "to fly",
      "pt": "to fly"
    },
    "pos": "verb-godan",
    "ex": "飛ぶことができる"
  },
  {
    "id": "V0345",
    "w": "止まる",
    "r": "とまる",
    "m": {
      "en": "to stop",
      "zh-TW": "停止",
      "zh-CN": "停止",
      "ko": "멈추다",
      "vi": "dừng",
      "id": "berhenti",
      "es": "to stop",
      "pt": "to stop"
    },
    "pos": "verb-godan",
    "ex": "止まることができる",
    "syn": [
      "停止する",
      "ストップする",
      "止む"
    ]
  },
  {
    "id": "V0346",
    "w": "止める",
    "r": "とめる",
    "m": {
      "en": "to stop",
      "zh-TW": "停止",
      "zh-CN": "停止",
      "ko": "멈추다",
      "vi": "dừng lại",
      "id": "menghentikan",
      "es": "to stop",
      "pt": "to stop"
    },
    "pos": "verb-ichidan",
    "ex": "止めることができる",
    "syn": [
      "停止させる",
      "ストップさせる",
      "中止する"
    ]
  },
  {
    "id": "V0347",
    "w": "とる",
    "r": "とる",
    "m": {
      "en": "to take",
      "zh-TW": "拿",
      "zh-CN": "拿",
      "ko": "잡다",
      "vi": "lấy",
      "id": "mengambil",
      "es": "to take",
      "pt": "to take"
    },
    "pos": "verb-godan",
    "ex": "取ることができる"
  },
  {
    "id": "V0348",
    "w": "とる",
    "r": "とる",
    "m": {
      "en": "to photograph",
      "zh-TW": "拍照",
      "zh-CN": "拍照",
      "ko": "찍다",
      "vi": "chụp",
      "id": "memotret",
      "es": "to photograph",
      "pt": "to photograph"
    },
    "pos": "verb-godan",
    "ex": "撮ることができる"
  },
  {
    "id": "V0349",
    "w": "なおす",
    "r": "なおす",
    "m": {
      "en": "to fix",
      "zh-TW": "修理",
      "zh-CN": "修理",
      "ko": "고치다",
      "vi": "sửa",
      "id": "memperbaiki",
      "es": "to fix",
      "pt": "to fix"
    },
    "pos": "verb-godan",
    "ex": "直すことができる"
  },
  {
    "id": "V0350",
    "w": "なおる",
    "r": "なおる",
    "m": {
      "en": "to be fixed",
      "zh-TW": "修好",
      "zh-CN": "修好",
      "ko": "낫다",
      "vi": "được sửa",
      "id": "diperbaiki",
      "es": "to be fixed",
      "pt": "to be fixed"
    },
    "pos": "verb-godan",
    "ex": "直ることができる"
  },
  {
    "id": "V0351",
    "w": "ながす",
    "r": "ながす",
    "m": {
      "en": "to drain",
      "zh-TW": "流",
      "zh-CN": "流",
      "ko": "흘리다",
      "vi": "làm chảy",
      "id": "mengalirkan",
      "es": "to drain",
      "pt": "to drain"
    },
    "pos": "verb-godan",
    "ex": "流すことができる"
  },
  {
    "id": "V0352",
    "w": "ながれる",
    "r": "ながれる",
    "m": {
      "en": "to flow",
      "zh-TW": "流動",
      "zh-CN": "流动",
      "ko": "흐르다",
      "vi": "chảy",
      "id": "mengalir",
      "es": "to flow",
      "pt": "to flow"
    },
    "pos": "verb-ichidan",
    "ex": "流れることができる"
  },
  {
    "id": "V0353",
    "w": "なく",
    "r": "なく",
    "m": {
      "en": "to cry",
      "zh-TW": "哭",
      "zh-CN": "哭",
      "ko": "울다",
      "vi": "khóc",
      "id": "menangis",
      "es": "to cry",
      "pt": "to cry"
    },
    "pos": "verb-godan",
    "ex": "泣くことができる"
  },
  {
    "id": "V0354",
    "w": "なくなる",
    "r": "なくなる",
    "m": {
      "en": "to pass away",
      "zh-TW": "去世",
      "zh-CN": "去世",
      "ko": "돌아가시다",
      "vi": "qua đời",
      "id": "meninggal",
      "es": "to pass away",
      "pt": "to pass away"
    },
    "pos": "verb-godan",
    "ex": "亡くなることができる"
  },
  {
    "id": "V0355",
    "w": "無くなる",
    "r": "なくなる",
    "m": {
      "en": "to disappear",
      "zh-TW": "消失",
      "zh-CN": "消失",
      "ko": "없어지다",
      "vi": "mất",
      "id": "habis",
      "es": "to disappear",
      "pt": "to disappear"
    },
    "pos": "verb-godan",
    "ex": "無くなることができる"
  },
  {
    "id": "V0356",
    "w": "無くす",
    "r": "なくす",
    "m": {
      "en": "to lose",
      "zh-TW": "丟失",
      "zh-CN": "丢失",
      "ko": "잃어버리다",
      "vi": "mất",
      "id": "kehilangan",
      "es": "to lose",
      "pt": "to lose"
    },
    "pos": "verb-godan",
    "ex": "無くすことができる"
  },
  {
    "id": "V0357",
    "w": "なげる",
    "r": "なげる",
    "m": {
      "en": "to throw",
      "zh-TW": "投",
      "zh-CN": "投",
      "ko": "던지다",
      "vi": "ném",
      "id": "melempar",
      "es": "to throw",
      "pt": "to throw"
    },
    "pos": "verb-godan",
    "ex": "投げることができる"
  },
  {
    "id": "V0358",
    "w": "なげく",
    "r": "なげく",
    "m": {
      "en": "to lament",
      "zh-TW": "嘆息",
      "zh-CN": "叹息",
      "ko": "한탄하다",
      "vi": "than thở",
      "id": "meratap",
      "es": "to lament",
      "pt": "to lament"
    },
    "pos": "verb-godan",
    "ex": "嘆くことができる"
  },
  {
    "id": "V0359",
    "w": "なぐる",
    "r": "なぐる",
    "m": {
      "en": "to punch",
      "zh-TW": "打",
      "zh-CN": "打",
      "ko": "때리다",
      "vi": "đấm",
      "id": "memukul",
      "es": "to punch",
      "pt": "to punch"
    },
    "pos": "verb-godan",
    "ex": "殴ることができる"
  },
  {
    "id": "V0360",
    "w": "なぐさめる",
    "r": "なぐさめる",
    "m": {
      "en": "to console",
      "zh-TW": "安慰",
      "zh-CN": "安慰",
      "ko": "위로하다",
      "vi": "an ủi",
      "id": "menghibur",
      "es": "to console",
      "pt": "to console"
    },
    "pos": "verb-ichidan",
    "ex": "慰めることができる"
  },
  {
    "id": "V0361",
    "w": "なやむ",
    "r": "なやむ",
    "m": {
      "en": "to worry",
      "zh-TW": "煩惱",
      "zh-CN": "烦恼",
      "ko": "고민하다",
      "vi": "lo lắng",
      "id": "bingung",
      "es": "to worry",
      "pt": "to worry"
    },
    "pos": "verb-godan",
    "ex": "悩むことができる"
  },
  {
    "id": "V0362",
    "w": "ならぶ",
    "r": "ならぶ",
    "m": {
      "en": "to line up",
      "zh-TW": "排隊",
      "zh-CN": "排队",
      "ko": "줄서다",
      "vi": "xếp hàng",
      "id": "berbaris",
      "es": "to line up",
      "pt": "to line up"
    },
    "pos": "verb-godan",
    "ex": "並ぶことができる"
  },
  {
    "id": "V0363",
    "w": "ならべる",
    "r": "ならべる",
    "m": {
      "en": "to arrange",
      "zh-TW": "排列",
      "zh-CN": "排列",
      "ko": "늘어놓다",
      "vi": "sắp xếp",
      "id": "menyusun",
      "es": "to arrange",
      "pt": "to arrange"
    },
    "pos": "verb-godan",
    "ex": "並べることができる"
  },
  {
    "id": "V0364",
    "w": "なる",
    "r": "なる",
    "m": {
      "en": "to become",
      "zh-TW": "成為",
      "zh-CN": "成为",
      "ko": "되다",
      "vi": "trở thành",
      "id": "menjadi",
      "es": "to become",
      "pt": "to become"
    },
    "pos": "verb-godan",
    "ex": "成ることができる"
  },
  {
    "id": "V0365",
    "w": "なる",
    "r": "なる",
    "m": {
      "en": "to ring",
      "zh-TW": "響",
      "zh-CN": "响",
      "ko": "울리다",
      "vi": "kêu",
      "id": "berbunyi",
      "es": "to ring",
      "pt": "to ring"
    },
    "pos": "verb-godan",
    "ex": "鳴ることができる"
  },
  {
    "id": "V0366",
    "w": "におう",
    "r": "におう",
    "m": {
      "en": "to smell",
      "zh-TW": "發出氣味",
      "zh-CN": "发出气味",
      "ko": "냄새나다",
      "vi": "có mùi",
      "id": "berbau",
      "es": "to smell",
      "pt": "to smell"
    },
    "pos": "verb-godan",
    "ex": "匂うことができる"
  },
  {
    "id": "V0367",
    "w": "にげる",
    "r": "にげる",
    "m": {
      "en": "to escape",
      "zh-TW": "逃跑",
      "zh-CN": "逃跑",
      "ko": "도망치다",
      "vi": "chạy trốn",
      "id": "melarikan diri",
      "es": "to escape",
      "pt": "to escape"
    },
    "pos": "verb-godan",
    "ex": "逃げることができる"
  },
  {
    "id": "V0368",
    "w": "にぎる",
    "r": "にぎる",
    "m": {
      "en": "to grip",
      "zh-TW": "握",
      "zh-CN": "握",
      "ko": "쥐다",
      "vi": "nắm",
      "id": "menggenggam",
      "es": "to grip",
      "pt": "to grip"
    },
    "pos": "verb-godan",
    "ex": "握ることができる"
  },
  {
    "id": "V0369",
    "w": "にくむ",
    "r": "にくむ",
    "m": {
      "en": "to hate",
      "zh-TW": "憎恨",
      "zh-CN": "憎恨",
      "ko": "미워하다",
      "vi": "ghét",
      "id": "membenci",
      "es": "to hate",
      "pt": "to hate"
    },
    "pos": "verb-godan",
    "ex": "憎むことができる"
  },
  {
    "id": "V0370",
    "w": "にる",
    "r": "にる",
    "m": {
      "en": "to boil",
      "zh-TW": "煮",
      "zh-CN": "煮",
      "ko": "삶다",
      "vi": "nấu",
      "id": "merebus",
      "es": "to boil",
      "pt": "to boil"
    },
    "pos": "verb-ichidan",
    "ex": "煮ることができる"
  },
  {
    "id": "V0371",
    "w": "にる",
    "r": "にる",
    "m": {
      "en": "to resemble",
      "zh-TW": "像",
      "zh-CN": "像",
      "ko": "닮다",
      "vi": "giống",
      "id": "mirip",
      "es": "to resemble",
      "pt": "to resemble"
    },
    "pos": "verb-ichidan",
    "ex": "似ることができる"
  },
  {
    "id": "V0372",
    "w": "ぬれる",
    "r": "ぬれる",
    "m": {
      "en": "to get wet",
      "zh-TW": "濕",
      "zh-CN": "湿",
      "ko": "젖다",
      "vi": "ướt",
      "id": "basah",
      "es": "to get wet",
      "pt": "to get wet"
    },
    "pos": "verb-ichidan",
    "ex": "濡れることができる"
  },
  {
    "id": "V0373",
    "w": "ぬる",
    "r": "ぬる",
    "m": {
      "en": "to paint",
      "zh-TW": "塗",
      "zh-CN": "涂",
      "ko": "바르다",
      "vi": "sơn",
      "id": "mengecat",
      "es": "to paint",
      "pt": "to paint"
    },
    "pos": "verb-godan",
    "ex": "塗ることができる"
  },
  {
    "id": "V0374",
    "w": "ぬく",
    "r": "ぬく",
    "m": {
      "en": "to pull out",
      "zh-TW": "拔",
      "zh-CN": "拔",
      "ko": "빼다",
      "vi": "rút",
      "id": "mencabut",
      "es": "to pull out",
      "pt": "to pull out"
    },
    "pos": "verb-godan",
    "ex": "抜くことができる"
  },
  {
    "id": "V0375",
    "w": "ぬける",
    "r": "ぬける",
    "m": {
      "en": "to come out",
      "zh-TW": "脫落",
      "zh-CN": "脱落",
      "ko": "빠지다",
      "vi": "rơi ra",
      "id": "terlepas",
      "es": "to come out",
      "pt": "to come out"
    },
    "pos": "verb-ichidan",
    "ex": "抜けることができる"
  },
  {
    "id": "V0376",
    "w": "ぬすむ",
    "r": "ぬすむ",
    "m": {
      "en": "to steal",
      "zh-TW": "偷",
      "zh-CN": "偷",
      "ko": "훔치다",
      "vi": "trộm",
      "id": "mencuri",
      "es": "to steal",
      "pt": "to steal"
    },
    "pos": "verb-godan",
    "ex": "盗むことができる"
  },
  {
    "id": "V0377",
    "w": "ぬぐ",
    "r": "ぬぐ",
    "m": {
      "en": "to take off",
      "zh-TW": "脫",
      "zh-CN": "脱",
      "ko": "벗다",
      "vi": "cởi",
      "id": "melepas",
      "es": "to take off",
      "pt": "to take off"
    },
    "pos": "verb-godan",
    "ex": "脱ぐことができる"
  },
  {
    "id": "V0378",
    "w": "願う",
    "r": "ねがう",
    "m": {
      "en": "to wish",
      "zh-TW": "願望",
      "zh-CN": "愿望",
      "ko": "바라다",
      "vi": "mong",
      "id": "berharap",
      "es": "to wish",
      "pt": "to wish"
    },
    "pos": "verb-godan",
    "ex": "願うことができる"
  },
  {
    "id": "V0379",
    "w": "ねむる",
    "r": "ねむる",
    "m": {
      "en": "to sleep",
      "zh-TW": "睡覺",
      "zh-CN": "睡觉",
      "ko": "잠들다",
      "vi": "ngủ",
      "id": "tidur",
      "es": "to sleep",
      "pt": "to sleep"
    },
    "pos": "verb-godan",
    "ex": "眠ることができる"
  },
  {
    "id": "V0380",
    "w": "ねらう",
    "r": "ねらう",
    "m": {
      "en": "to aim",
      "zh-TW": "瞄準",
      "zh-CN": "瞄准",
      "ko": "노리다",
      "vi": "nhắm",
      "id": "mengincar",
      "es": "to aim",
      "pt": "to aim"
    },
    "pos": "verb-godan",
    "ex": "狙うことができる"
  },
  {
    "id": "V0381",
    "w": "のぞむ",
    "r": "のぞむ",
    "m": {
      "en": "to hope",
      "zh-TW": "希望",
      "zh-CN": "希望",
      "ko": "바라다",
      "vi": "mong muốn",
      "id": "mengharapkan",
      "es": "to hope",
      "pt": "to hope"
    },
    "pos": "verb-godan",
    "ex": "望むことができる"
  },
  {
    "id": "V0382",
    "w": "のぞく",
    "r": "のぞく",
    "m": {
      "en": "to peek",
      "zh-TW": "窺視",
      "zh-CN": "窥视",
      "ko": "들여다보다",
      "vi": "nhìn trộm",
      "id": "mengintip",
      "es": "to peek",
      "pt": "to peek"
    },
    "pos": "verb-godan",
    "ex": "覗くことができる"
  },
  {
    "id": "V0383",
    "w": "のばす",
    "r": "のばす",
    "m": {
      "en": "to extend",
      "zh-TW": "延長",
      "zh-CN": "延长",
      "ko": "늘리다",
      "vi": "kéo dài",
      "id": "memperpanjang",
      "es": "to extend",
      "pt": "to extend"
    },
    "pos": "verb-godan",
    "ex": "延ばすことができる"
  },
  {
    "id": "V0384",
    "w": "のびる",
    "r": "のびる",
    "m": {
      "en": "to extend",
      "zh-TW": "延長",
      "zh-CN": "延长",
      "ko": "늘어나다",
      "vi": "kéo dài",
      "id": "diperpanjang",
      "es": "to extend",
      "pt": "to extend"
    },
    "pos": "verb-godan",
    "ex": "延びることができる"
  },
  {
    "id": "V0385",
    "w": "伸ばす",
    "r": "のばす",
    "m": {
      "en": "to stretch",
      "zh-TW": "伸展",
      "zh-CN": "伸展",
      "ko": "뻗다",
      "vi": "duỗi",
      "id": "meregangkan",
      "es": "to stretch",
      "pt": "to stretch"
    },
    "pos": "verb-godan",
    "ex": "伸ばすことができる"
  },
  {
    "id": "V0386",
    "w": "伸びる",
    "r": "のびる",
    "m": {
      "en": "to grow",
      "zh-TW": "生長",
      "zh-CN": "生长",
      "ko": "자라다",
      "vi": "mọc",
      "id": "tumbuh",
      "es": "to grow",
      "pt": "to grow"
    },
    "pos": "verb-godan",
    "ex": "伸びることができる"
  },
  {
    "id": "V0387",
    "w": "飲む",
    "r": "のむ",
    "m": {
      "en": "to drink",
      "zh-TW": "喝",
      "zh-CN": "喝",
      "ko": "마시다",
      "vi": "uống",
      "id": "minum",
      "es": "beber",
      "pt": "beber"
    },
    "pos": "verb-godan",
    "ex": "飲むことができる"
  },
  {
    "id": "V0388",
    "w": "乗る",
    "r": "のる",
    "m": {
      "en": "to ride",
      "zh-TW": "乘坐",
      "zh-CN": "乘坐",
      "ko": "타다",
      "vi": "đi",
      "id": "naik",
      "es": "to ride",
      "pt": "to ride"
    },
    "pos": "verb-godan",
    "ex": "乗ることができる"
  },
  {
    "id": "V0389",
    "w": "のる",
    "r": "のる",
    "m": {
      "en": "to be published",
      "zh-TW": "刊登",
      "zh-CN": "刊登",
      "ko": "실리다",
      "vi": "được đăng",
      "id": "dimuat",
      "es": "to be published",
      "pt": "to be published"
    },
    "pos": "verb-godan",
    "ex": "載ることができる"
  },
  {
    "id": "V0390",
    "w": "入る",
    "r": "はいる",
    "m": {
      "en": "to enter",
      "zh-TW": "進入",
      "zh-CN": "进入",
      "ko": "들어가다",
      "vi": "vào",
      "id": "masuk",
      "es": "to enter",
      "pt": "to enter"
    },
    "pos": "verb-ichidan",
    "ex": "入ることができる"
  },
  {
    "id": "V0391",
    "w": "生える",
    "r": "はえる",
    "m": {
      "en": "to grow",
      "zh-TW": "長出",
      "zh-CN": "长出",
      "ko": "나다",
      "vi": "mọc",
      "id": "tumbuh",
      "es": "to grow",
      "pt": "to grow"
    },
    "pos": "verb-ichidan",
    "ex": "生えることができる"
  },
  {
    "id": "V0392",
    "w": "はかる",
    "r": "はかる",
    "m": {
      "en": "to measure",
      "zh-TW": "測量",
      "zh-CN": "测量",
      "ko": "재다",
      "vi": "đo",
      "id": "mengukur",
      "es": "to measure",
      "pt": "to measure"
    },
    "pos": "verb-godan",
    "ex": "測ることができる"
  },
  {
    "id": "V0393",
    "w": "計る",
    "r": "はかる",
    "m": {
      "en": "to measure",
      "zh-TW": "計算",
      "zh-CN": "计算",
      "ko": "재다",
      "vi": "tính",
      "id": "menghitung",
      "es": "to measure",
      "pt": "to measure"
    },
    "pos": "verb-godan",
    "ex": "計ることができる"
  },
  {
    "id": "V0394",
    "w": "はく",
    "r": "はく",
    "m": {
      "en": "to vomit",
      "zh-TW": "吐",
      "zh-CN": "吐",
      "ko": "토하다",
      "vi": "nôn",
      "id": "muntah",
      "es": "to vomit",
      "pt": "to vomit"
    },
    "pos": "verb-godan",
    "ex": "吐くことができる"
  },
  {
    "id": "V0395",
    "w": "はく",
    "r": "はく",
    "m": {
      "en": "to wear",
      "zh-TW": "穿",
      "zh-CN": "穿",
      "ko": "신다",
      "vi": "mặc",
      "id": "memakai",
      "es": "to wear",
      "pt": "to wear"
    },
    "pos": "verb-godan",
    "ex": "履くことができる"
  },
  {
    "id": "V0396",
    "w": "運ぶ",
    "r": "はこぶ",
    "m": {
      "en": "to carry",
      "zh-TW": "搬運",
      "zh-CN": "搬运",
      "ko": "운반하다",
      "vi": "vận chuyển",
      "id": "mengangkut",
      "es": "to carry",
      "pt": "to carry"
    },
    "pos": "verb-godan",
    "ex": "運ぶことができる"
  },
  {
    "id": "V0397",
    "w": "はさむ",
    "r": "はさむ",
    "m": {
      "en": "to insert",
      "zh-TW": "夾",
      "zh-CN": "夹",
      "ko": "끼우다",
      "vi": "kẹp",
      "id": "menjepit",
      "es": "to insert",
      "pt": "to insert"
    },
    "pos": "verb-godan",
    "ex": "挟むことができる"
  },
  {
    "id": "V0398",
    "w": "始まる",
    "r": "はじまる",
    "m": {
      "en": "to begin",
      "zh-TW": "開始",
      "zh-CN": "开始",
      "ko": "시작되다",
      "vi": "bắt đầu",
      "id": "dimulai",
      "es": "to begin",
      "pt": "to begin"
    },
    "pos": "verb-godan",
    "ex": "始まることができる",
    "syn": [
      "開始する",
      "スタートする",
      "幕を開ける"
    ]
  },
  {
    "id": "V0399",
    "w": "始める",
    "r": "はじめる",
    "m": {
      "en": "to start",
      "zh-TW": "開始",
      "zh-CN": "开始",
      "ko": "시작하다",
      "vi": "bắt đầu",
      "id": "memulai",
      "es": "to start",
      "pt": "to start"
    },
    "pos": "verb-ichidan",
    "ex": "始めることができる"
  },
  {
    "id": "V0400",
    "w": "走る",
    "r": "はしる",
    "m": {
      "en": "to run",
      "zh-TW": "跑",
      "zh-CN": "跑",
      "ko": "달리다",
      "vi": "chạy",
      "id": "berlari",
      "es": "to run",
      "pt": "to run"
    },
    "pos": "verb-ichidan",
    "ex": "走ることができる"
  },
  {
    "id": "V0401",
    "w": "外す",
    "r": "はずす",
    "m": {
      "en": "to remove",
      "zh-TW": "取下",
      "zh-CN": "取下",
      "ko": "빼다",
      "vi": "tháo",
      "id": "melepas",
      "es": "to remove",
      "pt": "to remove"
    },
    "pos": "verb-godan",
    "ex": "外すことができる"
  },
  {
    "id": "V0402",
    "w": "働く",
    "r": "はたらく",
    "m": {
      "en": "to work",
      "zh-TW": "工作",
      "zh-CN": "工作",
      "ko": "일하다",
      "vi": "làm việc",
      "id": "bekerja",
      "es": "to work",
      "pt": "to work"
    },
    "pos": "verb-godan",
    "ex": "働くことができる"
  },
  {
    "id": "V0403",
    "w": "話す",
    "r": "はなす",
    "m": {
      "en": "to speak",
      "zh-TW": "說",
      "zh-CN": "说",
      "ko": "말하다",
      "vi": "nói",
      "id": "berbicara",
      "es": "to speak",
      "pt": "to speak"
    },
    "pos": "verb-godan",
    "ex": "話すことができる"
  },
  {
    "id": "V0404",
    "w": "はなす",
    "r": "はなす",
    "m": {
      "en": "to separate",
      "zh-TW": "分開",
      "zh-CN": "分开",
      "ko": "떼다",
      "vi": "tách",
      "id": "memisahkan",
      "es": "to separate",
      "pt": "to separate"
    },
    "pos": "verb-godan",
    "ex": "離すことができる"
  },
  {
    "id": "V0405",
    "w": "はなす",
    "r": "はなす",
    "m": {
      "en": "to release",
      "zh-TW": "放開",
      "zh-CN": "放开",
      "ko": "놓다",
      "vi": "thả",
      "id": "melepaskan",
      "es": "to release",
      "pt": "to release"
    },
    "pos": "verb-godan",
    "ex": "放すことができる"
  },
  {
    "id": "V0406",
    "w": "はなれる",
    "r": "はなれる",
    "m": {
      "en": "to leave",
      "zh-TW": "離開",
      "zh-CN": "离开",
      "ko": "떨어지다",
      "vi": "rời",
      "id": "meninggalkan",
      "es": "to leave",
      "pt": "to leave"
    },
    "pos": "verb-ichidan",
    "ex": "離れることができる"
  },
  {
    "id": "V0407",
    "w": "はねる",
    "r": "はねる",
    "m": {
      "en": "to jump",
      "zh-TW": "跳",
      "zh-CN": "跳",
      "ko": "뛰다",
      "vi": "nhảy",
      "id": "melompat",
      "es": "to jump",
      "pt": "to jump"
    },
    "pos": "verb-ichidan",
    "ex": "跳ねることができる"
  },
  {
    "id": "V0408",
    "w": "はらう",
    "r": "はらう",
    "m": {
      "en": "to pay",
      "zh-TW": "付款",
      "zh-CN": "付款",
      "ko": "지불하다",
      "vi": "trả",
      "id": "membayar",
      "es": "to pay",
      "pt": "to pay"
    },
    "pos": "verb-godan",
    "ex": "払うことができる"
  },
  {
    "id": "V0409",
    "w": "はる",
    "r": "はる",
    "m": {
      "en": "to stretch",
      "zh-TW": "張開",
      "zh-CN": "张开",
      "ko": "펴다",
      "vi": "căng",
      "id": "merentangkan",
      "es": "to stretch",
      "pt": "to stretch"
    },
    "pos": "verb-godan",
    "ex": "張ることができる"
  },
  {
    "id": "V0410",
    "w": "はる",
    "r": "はる",
    "m": {
      "en": "to paste",
      "zh-TW": "貼",
      "zh-CN": "贴",
      "ko": "붙이다",
      "vi": "dán",
      "id": "menempel",
      "es": "to paste",
      "pt": "to paste"
    },
    "pos": "verb-godan",
    "ex": "貼ることができる"
  },
  {
    "id": "V0411",
    "w": "はれる",
    "r": "はれる",
    "m": {
      "en": "to clear up",
      "zh-TW": "放晴",
      "zh-CN": "放晴",
      "ko": "맑아지다",
      "vi": "nắng",
      "id": "cerah",
      "es": "to clear up",
      "pt": "to clear up"
    },
    "pos": "verb-ichidan",
    "ex": "晴れることができる"
  },
  {
    "id": "V0412",
    "w": "はれる",
    "r": "はれる",
    "m": {
      "en": "to swell",
      "zh-TW": "腫脹",
      "zh-CN": "肿胀",
      "ko": "붓다",
      "vi": "sưng",
      "id": "bengkak",
      "es": "to swell",
      "pt": "to swell"
    },
    "pos": "verb-ichidan",
    "ex": "腫れることができる"
  },
  {
    "id": "V0413",
    "w": "冷える",
    "r": "ひえる",
    "m": {
      "en": "to get cold",
      "zh-TW": "變冷",
      "zh-CN": "变冷",
      "ko": "차가워지다",
      "vi": "lạnh",
      "id": "dingin",
      "es": "to get cold",
      "pt": "to get cold"
    },
    "pos": "verb-ichidan",
    "ex": "冷えることができる"
  },
  {
    "id": "V0414",
    "w": "光る",
    "r": "ひかる",
    "m": {
      "en": "to shine",
      "zh-TW": "發光",
      "zh-CN": "发光",
      "ko": "빛나다",
      "vi": "sáng",
      "id": "bersinar",
      "es": "to shine",
      "pt": "to shine"
    },
    "pos": "verb-godan",
    "ex": "光ることができる"
  },
  {
    "id": "V0415",
    "w": "引く",
    "r": "ひく",
    "m": {
      "en": "to pull",
      "zh-TW": "拉",
      "zh-CN": "拉",
      "ko": "당기다",
      "vi": "kéo",
      "id": "menarik",
      "es": "to pull",
      "pt": "to pull"
    },
    "pos": "verb-godan",
    "ex": "引くことができる"
  },
  {
    "id": "V0416",
    "w": "ひく",
    "r": "ひく",
    "m": {
      "en": "to play",
      "zh-TW": "彈奏",
      "zh-CN": "弹奏",
      "ko": "치다",
      "vi": "chơi",
      "id": "memainkan",
      "es": "to play",
      "pt": "to play"
    },
    "pos": "verb-godan",
    "ex": "弾くことができる"
  },
  {
    "id": "V0417",
    "w": "ひびく",
    "r": "ひびく",
    "m": {
      "en": "to echo",
      "zh-TW": "回響",
      "zh-CN": "回响",
      "ko": "울리다",
      "vi": "vang",
      "id": "bergema",
      "es": "to echo",
      "pt": "to echo"
    },
    "pos": "verb-godan",
    "ex": "響くことができる"
  },
  {
    "id": "V0418",
    "w": "開く",
    "r": "ひらく",
    "m": {
      "en": "to open",
      "zh-TW": "打開",
      "zh-CN": "打开",
      "ko": "열다",
      "vi": "mở",
      "id": "membuka",
      "es": "to open",
      "pt": "to open"
    },
    "pos": "verb-godan",
    "ex": "開くことができる",
    "syn": [
      "開催する",
      "オープンする",
      "開ける"
    ]
  },
  {
    "id": "V0419",
    "w": "ひろう",
    "r": "ひろう",
    "m": {
      "en": "to pick up",
      "zh-TW": "撿",
      "zh-CN": "捡",
      "ko": "줍다",
      "vi": "nhặt",
      "id": "memungut",
      "es": "to pick up",
      "pt": "to pick up"
    },
    "pos": "verb-godan",
    "ex": "拾うことができる"
  },
  {
    "id": "V0420",
    "w": "広がる",
    "r": "ひろがる",
    "m": {
      "en": "to spread",
      "zh-TW": "擴散",
      "zh-CN": "扩散",
      "ko": "펼쳐지다",
      "vi": "lan rộng",
      "id": "menyebar",
      "es": "to spread",
      "pt": "to spread"
    },
    "pos": "verb-godan",
    "ex": "広がることができる"
  },
  {
    "id": "V0421",
    "w": "広げる",
    "r": "ひろげる",
    "m": {
      "en": "to spread",
      "zh-TW": "展開",
      "zh-CN": "展开",
      "ko": "펼치다",
      "vi": "mở rộng",
      "id": "memperluas",
      "es": "to spread",
      "pt": "to spread"
    },
    "pos": "verb-godan",
    "ex": "広げることができる"
  },
  {
    "id": "V0422",
    "w": "ふかめる",
    "r": "ふかめる",
    "m": {
      "en": "to deepen",
      "zh-TW": "加深",
      "zh-CN": "加深",
      "ko": "깊게하다",
      "vi": "đào sâu",
      "id": "memperdalam",
      "es": "to deepen",
      "pt": "to deepen"
    },
    "pos": "verb-ichidan",
    "ex": "深めることができる"
  },
  {
    "id": "V0423",
    "w": "ふく",
    "r": "ふく",
    "m": {
      "en": "to blow",
      "zh-TW": "吹",
      "zh-CN": "吹",
      "ko": "불다",
      "vi": "thổi",
      "id": "meniup",
      "es": "to blow",
      "pt": "to blow"
    },
    "pos": "verb-godan",
    "ex": "吹くことができる"
  },
  {
    "id": "V0424",
    "w": "ふく",
    "r": "ふく",
    "m": {
      "en": "to wipe",
      "zh-TW": "擦",
      "zh-CN": "擦",
      "ko": "닦다",
      "vi": "lau",
      "id": "mengelap",
      "es": "to wipe",
      "pt": "to wipe"
    },
    "pos": "verb-godan",
    "ex": "拭くことができる"
  },
  {
    "id": "V0425",
    "w": "含む",
    "r": "ふくむ",
    "m": {
      "en": "to include",
      "zh-TW": "包含",
      "zh-CN": "包含",
      "ko": "포함하다",
      "vi": "bao gồm",
      "id": "mengandung",
      "es": "to include",
      "pt": "to include"
    },
    "pos": "verb-godan",
    "ex": "含むことができる"
  },
  {
    "id": "V0426",
    "w": "ふくらむ",
    "r": "ふくらむ",
    "m": {
      "en": "to swell",
      "zh-TW": "膨脹",
      "zh-CN": "膨胀",
      "ko": "부풀다",
      "vi": "phồng",
      "id": "mengembang",
      "es": "to swell",
      "pt": "to swell"
    },
    "pos": "verb-godan",
    "ex": "膨らむことができる"
  },
  {
    "id": "V0427",
    "w": "ふせぐ",
    "r": "ふせぐ",
    "m": {
      "en": "to prevent",
      "zh-TW": "防止",
      "zh-CN": "防止",
      "ko": "막다",
      "vi": "ngăn chặn",
      "id": "mencegah",
      "es": "to prevent",
      "pt": "to prevent"
    },
    "pos": "verb-godan",
    "ex": "防ぐことができる"
  },
  {
    "id": "V0428",
    "w": "ふむ",
    "r": "ふむ",
    "m": {
      "en": "to step on",
      "zh-TW": "踩",
      "zh-CN": "踩",
      "ko": "밟다",
      "vi": "giẫm",
      "id": "menginjak",
      "es": "to step on",
      "pt": "to step on"
    },
    "pos": "verb-godan",
    "ex": "踏むことができる"
  },
  {
    "id": "V0429",
    "w": "ふる",
    "r": "ふる",
    "m": {
      "en": "to wave",
      "zh-TW": "揮",
      "zh-CN": "挥",
      "ko": "흔들다",
      "vi": "vẫy",
      "id": "mengayunkan",
      "es": "to wave",
      "pt": "to wave"
    },
    "pos": "verb-godan",
    "ex": "振ることができる"
  },
  {
    "id": "V0430",
    "w": "降る",
    "r": "ふる",
    "m": {
      "en": "to fall",
      "zh-TW": "下",
      "zh-CN": "下",
      "ko": "내리다",
      "vi": "rơi",
      "id": "turun",
      "es": "to fall",
      "pt": "to fall"
    },
    "pos": "verb-godan",
    "ex": "降ることができる"
  },
  {
    "id": "V0431",
    "w": "ほす",
    "r": "ほす",
    "m": {
      "en": "to dry",
      "zh-TW": "晾乾",
      "zh-CN": "晾干",
      "ko": "말리다",
      "vi": "phơi",
      "id": "menjemur",
      "es": "to dry",
      "pt": "to dry"
    },
    "pos": "verb-godan",
    "ex": "干すことができる"
  },
  {
    "id": "V0432",
    "w": "ほる",
    "r": "ほる",
    "m": {
      "en": "to dig",
      "zh-TW": "挖",
      "zh-CN": "挖",
      "ko": "파다",
      "vi": "đào",
      "id": "menggali",
      "es": "to dig",
      "pt": "to dig"
    },
    "pos": "verb-godan",
    "ex": "掘ることができる"
  },
  {
    "id": "V0433",
    "w": "まける",
    "r": "まける",
    "m": {
      "en": "to lose",
      "zh-TW": "輸",
      "zh-CN": "输",
      "ko": "지다",
      "vi": "thua",
      "id": "kalah",
      "es": "to lose",
      "pt": "to lose"
    },
    "pos": "verb-ichidan",
    "ex": "負けることができる"
  },
  {
    "id": "V0434",
    "w": "まがる",
    "r": "まがる",
    "m": {
      "en": "to turn",
      "zh-TW": "轉彎",
      "zh-CN": "转弯",
      "ko": "꺾이다",
      "vi": "rẽ",
      "id": "berbelok",
      "es": "to turn",
      "pt": "to turn"
    },
    "pos": "verb-godan",
    "ex": "曲がることができる"
  },
  {
    "id": "V0435",
    "w": "まげる",
    "r": "まげる",
    "m": {
      "en": "to bend",
      "zh-TW": "彎曲",
      "zh-CN": "弯曲",
      "ko": "구부리다",
      "vi": "uốn",
      "id": "membengkokkan",
      "es": "to bend",
      "pt": "to bend"
    },
    "pos": "verb-godan",
    "ex": "曲げることができる"
  },
  {
    "id": "V0436",
    "w": "まぜる",
    "r": "まぜる",
    "m": {
      "en": "to mix",
      "zh-TW": "攪拌",
      "zh-CN": "搅拌",
      "ko": "섞다",
      "vi": "trộn",
      "id": "mencampur",
      "es": "to mix",
      "pt": "to mix"
    },
    "pos": "verb-godan",
    "ex": "混ぜることができる"
  },
  {
    "id": "V0437",
    "w": "待つ",
    "r": "まつ",
    "m": {
      "en": "to wait",
      "zh-TW": "等待",
      "zh-CN": "等待",
      "ko": "기다리다",
      "vi": "chờ",
      "id": "menunggu",
      "es": "to wait",
      "pt": "to wait"
    },
    "pos": "verb-godan",
    "ex": "待つことができる"
  },
  {
    "id": "V0438",
    "w": "まとめる",
    "r": "まとめる",
    "m": {
      "en": "to summarize",
      "zh-TW": "整理",
      "zh-CN": "整理",
      "ko": "정리하다",
      "vi": "tổng hợp",
      "id": "meringkas",
      "es": "to summarize",
      "pt": "to summarize"
    },
    "pos": "verb-ichidan",
    "ex": "纏めることができる"
  },
  {
    "id": "V0439",
    "w": "学ぶ",
    "r": "まなぶ",
    "m": {
      "en": "to learn",
      "zh-TW": "學習",
      "zh-CN": "学习",
      "ko": "배우다",
      "vi": "học",
      "id": "belajar",
      "es": "to learn",
      "pt": "to learn"
    },
    "pos": "verb-godan",
    "ex": "学ぶことができる"
  },
  {
    "id": "V0440",
    "w": "まわす",
    "r": "まわす",
    "m": {
      "en": "to turn",
      "zh-TW": "轉動",
      "zh-CN": "转动",
      "ko": "돌리다",
      "vi": "xoay",
      "id": "memutar",
      "es": "to turn",
      "pt": "to turn"
    },
    "pos": "verb-godan",
    "ex": "回すことができる"
  },
  {
    "id": "V0441",
    "w": "まわる",
    "r": "まわる",
    "m": {
      "en": "to go around",
      "zh-TW": "繞",
      "zh-CN": "绕",
      "ko": "돌다",
      "vi": "vòng",
      "id": "berkeliling",
      "es": "to go around",
      "pt": "to go around"
    },
    "pos": "verb-godan",
    "ex": "回ることができる"
  },
  {
    "id": "V0442",
    "w": "見える",
    "r": "みえる",
    "m": {
      "en": "to be visible",
      "zh-TW": "看得見",
      "zh-CN": "看得见",
      "ko": "보이다",
      "vi": "thấy",
      "id": "terlihat",
      "es": "to be visible",
      "pt": "to be visible"
    },
    "pos": "verb-ichidan",
    "ex": "見えることができる"
  },
  {
    "id": "V0443",
    "w": "みがく",
    "r": "みがく",
    "m": {
      "en": "to polish",
      "zh-TW": "磨",
      "zh-CN": "磨",
      "ko": "닦다",
      "vi": "đánh",
      "id": "menggosok",
      "es": "to polish",
      "pt": "to polish"
    },
    "pos": "verb-godan",
    "ex": "磨くことができる"
  },
  {
    "id": "V0444",
    "w": "見せる",
    "r": "みせる",
    "m": {
      "en": "to show",
      "zh-TW": "給看",
      "zh-CN": "给看",
      "ko": "보여주다",
      "vi": "cho xem",
      "id": "memperlihatkan",
      "es": "to show",
      "pt": "to show"
    },
    "pos": "verb-ichidan",
    "ex": "見せることができる"
  },
  {
    "id": "V0445",
    "w": "みとめる",
    "r": "みとめる",
    "m": {
      "en": "to recognize",
      "zh-TW": "認可",
      "zh-CN": "认可",
      "ko": "인정하다",
      "vi": "công nhận",
      "id": "mengakui",
      "es": "to recognize",
      "pt": "to recognize"
    },
    "pos": "verb-ichidan",
    "ex": "認めることができる"
  },
  {
    "id": "V0446",
    "w": "むかう",
    "r": "むかう",
    "m": {
      "en": "to head for",
      "zh-TW": "前往",
      "zh-CN": "前往",
      "ko": "향하다",
      "vi": "hướng tới",
      "id": "menuju",
      "es": "to head for",
      "pt": "to head for"
    },
    "pos": "verb-godan",
    "ex": "向かうことができる"
  },
  {
    "id": "V0447",
    "w": "むかえる",
    "r": "むかえる",
    "m": {
      "en": "to welcome",
      "zh-TW": "迎接",
      "zh-CN": "迎接",
      "ko": "맞이하다",
      "vi": "đón",
      "id": "menyambut",
      "es": "to welcome",
      "pt": "to welcome"
    },
    "pos": "verb-ichidan",
    "ex": "迎えることができる"
  },
  {
    "id": "V0448",
    "w": "むく",
    "r": "むく",
    "m": {
      "en": "to face",
      "zh-TW": "朝向",
      "zh-CN": "朝向",
      "ko": "향하다",
      "vi": "hướng",
      "id": "menghadap",
      "es": "to face",
      "pt": "to face"
    },
    "pos": "verb-godan",
    "ex": "向くことができる"
  },
  {
    "id": "V0449",
    "w": "むける",
    "r": "むける",
    "m": {
      "en": "to direct",
      "zh-TW": "對準",
      "zh-CN": "对准",
      "ko": "향하게하다",
      "vi": "hướng về",
      "id": "mengarahkan",
      "es": "to direct",
      "pt": "to direct"
    },
    "pos": "verb-ichidan",
    "ex": "向けることができる"
  },
  {
    "id": "V0450",
    "w": "むすぶ",
    "r": "むすぶ",
    "m": {
      "en": "to tie",
      "zh-TW": "綁",
      "zh-CN": "绑",
      "ko": "묶다",
      "vi": "buộc",
      "id": "mengikat",
      "es": "to tie",
      "pt": "to tie"
    },
    "pos": "verb-godan",
    "ex": "結ぶことができる"
  },
  {
    "id": "V0451",
    "w": "もえる",
    "r": "もえる",
    "m": {
      "en": "to burn",
      "zh-TW": "燃燒",
      "zh-CN": "燃烧",
      "ko": "타다",
      "vi": "cháy",
      "id": "terbakar",
      "es": "to burn",
      "pt": "to burn"
    },
    "pos": "verb-ichidan",
    "ex": "燃えることができる"
  },
  {
    "id": "V0452",
    "w": "もやす",
    "r": "もやす",
    "m": {
      "en": "to burn",
      "zh-TW": "燒",
      "zh-CN": "烧",
      "ko": "태우다",
      "vi": "đốt",
      "id": "membakar",
      "es": "to burn",
      "pt": "to burn"
    },
    "pos": "verb-godan",
    "ex": "燃やすことができる"
  },
  {
    "id": "V0453",
    "w": "持つ",
    "r": "もつ",
    "m": {
      "en": "to hold",
      "zh-TW": "拿",
      "zh-CN": "拿",
      "ko": "들다",
      "vi": "cầm",
      "id": "memegang",
      "es": "to hold",
      "pt": "to hold"
    },
    "pos": "verb-godan",
    "ex": "持つことができる"
  },
  {
    "id": "V0454",
    "w": "もどす",
    "r": "もどす",
    "m": {
      "en": "to return",
      "zh-TW": "歸還",
      "zh-CN": "归还",
      "ko": "되돌리다",
      "vi": "trả lại",
      "id": "mengembalikan",
      "es": "volver",
      "pt": "voltar"
    },
    "pos": "verb-godan",
    "ex": "戻すことができる"
  },
  {
    "id": "V0455",
    "w": "もどる",
    "r": "もどる",
    "m": {
      "en": "to return",
      "zh-TW": "回來",
      "zh-CN": "回来",
      "ko": "돌아오다",
      "vi": "quay lại",
      "id": "kembali",
      "es": "volver",
      "pt": "voltar"
    },
    "pos": "verb-godan",
    "ex": "戻ることができる"
  },
  {
    "id": "V0456",
    "w": "もとめる",
    "r": "もとめる",
    "m": {
      "en": "to seek",
      "zh-TW": "尋求",
      "zh-CN": "寻求",
      "ko": "구하다",
      "vi": "tìm kiếm",
      "id": "mencari",
      "es": "to seek",
      "pt": "to seek"
    },
    "pos": "verb-ichidan",
    "ex": "求めることができる"
  },
  {
    "id": "V0457",
    "w": "もらう",
    "r": "もらう",
    "m": {
      "en": "to receive",
      "zh-TW": "收到",
      "zh-CN": "收到",
      "ko": "받다",
      "vi": "nhận",
      "id": "menerima",
      "es": "to receive",
      "pt": "to receive"
    },
    "pos": "verb-godan",
    "ex": "貰うことができる"
  },
  {
    "id": "V0458",
    "w": "もれる",
    "r": "もれる",
    "m": {
      "en": "to leak",
      "zh-TW": "洩漏",
      "zh-CN": "泄漏",
      "ko": "새다",
      "vi": "rò rỉ",
      "id": "bocor",
      "es": "to leak",
      "pt": "to leak"
    },
    "pos": "verb-ichidan",
    "ex": "漏れることができる"
  },
  {
    "id": "V0459",
    "w": "やく",
    "r": "やく",
    "m": {
      "en": "to bake",
      "zh-TW": "烤",
      "zh-CN": "烤",
      "ko": "굽다",
      "vi": "nướng",
      "id": "memanggang",
      "es": "to bake",
      "pt": "to bake"
    },
    "pos": "verb-godan",
    "ex": "焼くことができる"
  },
  {
    "id": "V0460",
    "w": "やける",
    "r": "やける",
    "m": {
      "en": "to be burnt",
      "zh-TW": "燒焦",
      "zh-CN": "烧焦",
      "ko": "타다",
      "vi": "cháy",
      "id": "terbakar",
      "es": "to be burnt",
      "pt": "to be burnt"
    },
    "pos": "verb-ichidan",
    "ex": "焼けることができる"
  },
  {
    "id": "V0461",
    "w": "やぶる",
    "r": "やぶる",
    "m": {
      "en": "to tear",
      "zh-TW": "撕破",
      "zh-CN": "撕破",
      "ko": "찢다",
      "vi": "xé",
      "id": "merobek",
      "es": "to tear",
      "pt": "to tear"
    },
    "pos": "verb-godan",
    "ex": "破ることができる"
  },
  {
    "id": "V0462",
    "w": "やぶれる",
    "r": "やぶれる",
    "m": {
      "en": "to be torn",
      "zh-TW": "破",
      "zh-CN": "破",
      "ko": "찢어지다",
      "vi": "rách",
      "id": "robek",
      "es": "to be torn",
      "pt": "to be torn"
    },
    "pos": "verb-ichidan",
    "ex": "破れることができる"
  },
  {
    "id": "V0463",
    "w": "やめる",
    "r": "やめる",
    "m": {
      "en": "to quit",
      "zh-TW": "辭職",
      "zh-CN": "辞职",
      "ko": "그만두다",
      "vi": "nghỉ",
      "id": "berhenti",
      "es": "to quit",
      "pt": "to quit"
    },
    "pos": "verb-ichidan",
    "ex": "辞めることができる"
  },
  {
    "id": "V0464",
    "w": "やる",
    "r": "やる",
    "m": {
      "en": "to do",
      "zh-TW": "做",
      "zh-CN": "做",
      "ko": "하다",
      "vi": "làm",
      "id": "melakukan",
      "es": "to do",
      "pt": "to do"
    },
    "pos": "verb-godan",
    "ex": "やることができる"
  },
  {
    "id": "V0465",
    "w": "ゆれる",
    "r": "ゆれる",
    "m": {
      "en": "to shake",
      "zh-TW": "搖晃",
      "zh-CN": "摇晃",
      "ko": "흔들리다",
      "vi": "rung",
      "id": "bergoyang",
      "es": "to shake",
      "pt": "to shake"
    },
    "pos": "verb-ichidan",
    "ex": "揺れることができる"
  },
  {
    "id": "V0466",
    "w": "よごす",
    "r": "よごす",
    "m": {
      "en": "to dirty",
      "zh-TW": "弄髒",
      "zh-CN": "弄脏",
      "ko": "더럽히다",
      "vi": "làm bẩn",
      "id": "mengotori",
      "es": "to dirty",
      "pt": "to dirty"
    },
    "pos": "verb-godan",
    "ex": "汚すことができる"
  },
  {
    "id": "V0467",
    "w": "よごれる",
    "r": "よごれる",
    "m": {
      "en": "to get dirty",
      "zh-TW": "變髒",
      "zh-CN": "变脏",
      "ko": "더러워지다",
      "vi": "bẩn",
      "id": "kotor",
      "es": "to get dirty",
      "pt": "to get dirty"
    },
    "pos": "verb-ichidan",
    "ex": "汚れることができる"
  },
  {
    "id": "V0468",
    "w": "よせる",
    "r": "よせる",
    "m": {
      "en": "to draw near",
      "zh-TW": "靠近",
      "zh-CN": "靠近",
      "ko": "다가가다",
      "vi": "đến gần",
      "id": "mendekati",
      "es": "to draw near",
      "pt": "to draw near"
    },
    "pos": "verb-ichidan",
    "ex": "寄せることができる"
  },
  {
    "id": "V0469",
    "w": "呼ぶ",
    "r": "よぶ",
    "m": {
      "en": "to call",
      "zh-TW": "叫",
      "zh-CN": "叫",
      "ko": "부르다",
      "vi": "gọi",
      "id": "memanggil",
      "es": "to call",
      "pt": "to call"
    },
    "pos": "verb-godan",
    "ex": "呼ぶことができる"
  },
  {
    "id": "V0470",
    "w": "読む",
    "r": "よむ",
    "m": {
      "en": "to read",
      "zh-TW": "讀",
      "zh-CN": "读",
      "ko": "읽다",
      "vi": "đọc",
      "id": "membaca",
      "es": "leer",
      "pt": "ler"
    },
    "pos": "verb-godan",
    "ex": "読むことができる"
  },
  {
    "id": "V0471",
    "w": "分かる",
    "r": "わかる",
    "m": {
      "en": "to understand",
      "zh-TW": "明白",
      "zh-CN": "明白",
      "ko": "알다",
      "vi": "hiểu",
      "id": "mengerti",
      "es": "to understand",
      "pt": "to understand"
    },
    "pos": "verb-godan",
    "ex": "分かることができる"
  },
  {
    "id": "V0472",
    "w": "分かれる",
    "r": "わかれる",
    "m": {
      "en": "to separate",
      "zh-TW": "分開",
      "zh-CN": "分开",
      "ko": "나뉘다",
      "vi": "chia",
      "id": "berpisah",
      "es": "to separate",
      "pt": "to separate"
    },
    "pos": "verb-ichidan",
    "ex": "分かれることができる"
  },
  {
    "id": "V0473",
    "w": "分ける",
    "r": "わける",
    "m": {
      "en": "to divide",
      "zh-TW": "分開",
      "zh-CN": "分开",
      "ko": "나누다",
      "vi": "chia",
      "id": "membagi",
      "es": "to divide",
      "pt": "to divide"
    },
    "pos": "verb-ichidan",
    "ex": "分けることができる"
  },
  {
    "id": "V0474",
    "w": "渡す",
    "r": "わたす",
    "m": {
      "en": "to hand over",
      "zh-TW": "遞給",
      "zh-CN": "递给",
      "ko": "건네다",
      "vi": "đưa",
      "id": "menyerahkan",
      "es": "to hand over",
      "pt": "to hand over"
    },
    "pos": "verb-godan",
    "ex": "渡すことができる"
  },
  {
    "id": "V0475",
    "w": "渡る",
    "r": "わたる",
    "m": {
      "en": "to cross",
      "zh-TW": "過",
      "zh-CN": "过",
      "ko": "건너다",
      "vi": "qua",
      "id": "menyeberang",
      "es": "to cross",
      "pt": "to cross"
    },
    "pos": "verb-godan",
    "ex": "渡ることができる"
  },
  {
    "id": "V0476",
    "w": "わらう",
    "r": "わらう",
    "m": {
      "en": "to laugh",
      "zh-TW": "笑",
      "zh-CN": "笑",
      "ko": "웃다",
      "vi": "cười",
      "id": "tertawa",
      "es": "to laugh",
      "pt": "to laugh"
    },
    "pos": "verb-godan",
    "ex": "笑うことができる"
  },
  {
    "id": "V0477",
    "w": "割る",
    "r": "わる",
    "m": {
      "en": "to break",
      "zh-TW": "打破",
      "zh-CN": "打破",
      "ko": "깨다",
      "vi": "vỡ",
      "id": "memecah",
      "es": "to break",
      "pt": "to break"
    },
    "pos": "verb-godan",
    "ex": "割ることができる"
  },
  {
    "id": "V0478",
    "w": "割れる",
    "r": "われる",
    "m": {
      "en": "to crack",
      "zh-TW": "破裂",
      "zh-CN": "破裂",
      "ko": "깨지다",
      "vi": "vỡ",
      "id": "pecah",
      "es": "to crack",
      "pt": "to crack"
    },
    "pos": "verb-ichidan",
    "ex": "割れることができる"
  },
  {
    "id": "V0479",
    "w": "かいぎ",
    "r": "かいぎ",
    "m": {
      "en": "meeting",
      "zh-TW": "會議",
      "zh-CN": "会议",
      "ko": "회의",
      "vi": "cuộc họp",
      "id": "rapat",
      "es": "meeting",
      "pt": "meeting"
    },
    "pos": "noun",
    "ex": "会議について話す",
    "syn": [
      "ミーティング",
      "打ち合わせ",
      "話し合い"
    ]
  },
  {
    "id": "V0480",
    "w": "会場",
    "r": "かいじょう",
    "m": {
      "en": "venue",
      "zh-TW": "會場",
      "zh-CN": "会场",
      "ko": "회장",
      "vi": "hội trường",
      "id": "tempat",
      "es": "venue",
      "pt": "venue"
    },
    "pos": "verb-godan",
    "ex": "会場ことができる"
  },
  {
    "id": "V0481",
    "w": "かいだん",
    "r": "かいだん",
    "m": {
      "en": "stairs",
      "zh-TW": "樓梯",
      "zh-CN": "楼梯",
      "ko": "계단",
      "vi": "cầu thang",
      "id": "tangga",
      "es": "stairs",
      "pt": "stairs"
    },
    "pos": "noun",
    "ex": "階段について話す"
  },
  {
    "id": "V0482",
    "w": "会話",
    "r": "かいわ",
    "m": {
      "en": "conversation",
      "zh-TW": "對話",
      "zh-CN": "对话",
      "ko": "회화",
      "vi": "hội thoại",
      "id": "percakapan",
      "es": "conversation",
      "pt": "conversation"
    },
    "pos": "noun",
    "ex": "会話について話す"
  },
  {
    "id": "V0483",
    "w": "科学",
    "r": "かがく",
    "m": {
      "en": "science",
      "zh-TW": "科學",
      "zh-CN": "科学",
      "ko": "과학",
      "vi": "khoa học",
      "id": "sains",
      "es": "science",
      "pt": "science"
    },
    "pos": "verb-godan",
    "ex": "科学ことができる"
  },
  {
    "id": "V0484",
    "w": "かがみ",
    "r": "かがみ",
    "m": {
      "en": "mirror",
      "zh-TW": "鏡子",
      "zh-CN": "镜子",
      "ko": "거울",
      "vi": "gương",
      "id": "cermin",
      "es": "mirror",
      "pt": "mirror"
    },
    "pos": "noun",
    "ex": "鏡について話す"
  },
  {
    "id": "V0485",
    "w": "かぐ",
    "r": "かぐ",
    "m": {
      "en": "furniture",
      "zh-TW": "傢俱",
      "zh-CN": "家具",
      "ko": "가구",
      "vi": "đồ nội thất",
      "id": "furnitur",
      "es": "furniture",
      "pt": "furniture"
    },
    "pos": "verb-godan",
    "ex": "家具ことができる"
  },
  {
    "id": "V0486",
    "w": "がっき",
    "r": "がっき",
    "m": {
      "en": "semester",
      "zh-TW": "學期",
      "zh-CN": "学期",
      "ko": "학기",
      "vi": "học kỳ",
      "id": "semester",
      "es": "semester",
      "pt": "semester"
    },
    "pos": "noun",
    "ex": "学期について話す"
  },
  {
    "id": "V0487",
    "w": "がっき",
    "r": "がっき",
    "m": {
      "en": "instrument",
      "zh-TW": "樂器",
      "zh-CN": "乐器",
      "ko": "악기",
      "vi": "nhạc cụ",
      "id": "alat musik",
      "es": "instrument",
      "pt": "instrument"
    },
    "pos": "noun",
    "ex": "楽器について話す"
  },
  {
    "id": "V0488",
    "w": "角",
    "r": "かど",
    "m": {
      "en": "corner",
      "zh-TW": "角落",
      "zh-CN": "角落",
      "ko": "모퉁이",
      "vi": "góc",
      "id": "sudut",
      "es": "corner",
      "pt": "corner"
    },
    "pos": "noun",
    "ex": "角について話す"
  },
  {
    "id": "V0489",
    "w": "壁",
    "r": "かべ",
    "m": {
      "en": "wall",
      "zh-TW": "牆",
      "zh-CN": "墙",
      "ko": "벽",
      "vi": "tường",
      "id": "dinding",
      "es": "wall",
      "pt": "wall"
    },
    "pos": "noun",
    "ex": "壁について話す"
  },
  {
    "id": "V0490",
    "w": "かみ",
    "r": "かみ",
    "m": {
      "en": "hair",
      "zh-TW": "頭髮",
      "zh-CN": "头发",
      "ko": "머리카락",
      "vi": "tóc",
      "id": "rambut",
      "es": "hair",
      "pt": "hair"
    },
    "pos": "noun",
    "ex": "髪について話す"
  },
  {
    "id": "V0491",
    "w": "紙",
    "r": "かみ",
    "m": {
      "en": "paper",
      "zh-TW": "紙",
      "zh-CN": "纸",
      "ko": "종이",
      "vi": "giấy",
      "id": "kertas",
      "es": "paper",
      "pt": "paper"
    },
    "pos": "noun",
    "ex": "紙について話す"
  },
  {
    "id": "V0492",
    "w": "かのじょ",
    "r": "かのじょ",
    "m": {
      "en": "girlfriend",
      "zh-TW": "女朋友",
      "zh-CN": "女朋友",
      "ko": "여자친구",
      "vi": "bạn gái",
      "id": "pacar perempuan",
      "es": "girlfriend",
      "pt": "girlfriend"
    },
    "pos": "noun",
    "ex": "彼女について話す"
  },
  {
    "id": "V0493",
    "w": "かれし",
    "r": "かれし",
    "m": {
      "en": "boyfriend",
      "zh-TW": "男朋友",
      "zh-CN": "男朋友",
      "ko": "남자친구",
      "vi": "bạn trai",
      "id": "pacar laki-laki",
      "es": "boyfriend",
      "pt": "boyfriend"
    },
    "pos": "noun",
    "ex": "彼氏について話す"
  },
  {
    "id": "V0494",
    "w": "かんきょう",
    "r": "かんきょう",
    "m": {
      "en": "environment",
      "zh-TW": "環境",
      "zh-CN": "环境",
      "ko": "환경",
      "vi": "môi trường",
      "id": "lingkungan",
      "es": "environment",
      "pt": "environment"
    },
    "pos": "verb-godan",
    "ex": "環境ことができる"
  },
  {
    "id": "V0495",
    "w": "関係",
    "r": "かんけい",
    "m": {
      "en": "relationship",
      "zh-TW": "關係",
      "zh-CN": "关系",
      "ko": "관계",
      "vi": "quan hệ",
      "id": "hubungan",
      "es": "relationship",
      "pt": "relationship"
    },
    "pos": "i-adj",
    "ex": "人間関係を大切にする",
    "syn": [
      "つながり",
      "関連",
      "絆"
    ]
  },
  {
    "id": "V0496",
    "w": "かんこう",
    "r": "かんこう",
    "m": {
      "en": "sightseeing",
      "zh-TW": "觀光",
      "zh-CN": "观光",
      "ko": "관광",
      "vi": "du lịch",
      "id": "wisata",
      "es": "sightseeing",
      "pt": "sightseeing"
    },
    "pos": "verb-godan",
    "ex": "観光ことができる"
  },
  {
    "id": "V0497",
    "w": "かんじょう",
    "r": "かんじょう",
    "m": {
      "en": "emotion",
      "zh-TW": "情感",
      "zh-CN": "情感",
      "ko": "감정",
      "vi": "cảm xúc",
      "id": "emosi",
      "es": "emotion",
      "pt": "emotion"
    },
    "pos": "verb-godan",
    "ex": "感情ことができる"
  },
  {
    "id": "V0498",
    "w": "かんせい",
    "r": "かんせい",
    "m": {
      "en": "completion",
      "zh-TW": "完成",
      "zh-CN": "完成",
      "ko": "완성",
      "vi": "hoàn thành",
      "id": "penyelesaian",
      "es": "completion",
      "pt": "completion"
    },
    "pos": "i-adj",
    "ex": "とても完成"
  },
  {
    "id": "V0499",
    "w": "かんそう",
    "r": "かんそう",
    "m": {
      "en": "dryness",
      "zh-TW": "乾燥",
      "zh-CN": "干燥",
      "ko": "건조",
      "vi": "khô",
      "id": "kering",
      "es": "dryness",
      "pt": "dryness"
    },
    "pos": "verb-godan",
    "ex": "乾燥ことができる"
  },
  {
    "id": "V0500",
    "w": "きかい",
    "r": "きかい",
    "m": {
      "en": "opportunity",
      "zh-TW": "機會",
      "zh-CN": "机会",
      "ko": "기회",
      "vi": "cơ hội",
      "id": "kesempatan",
      "es": "opportunity",
      "pt": "opportunity"
    },
    "pos": "i-adj",
    "ex": "とても機会"
  },
  {
    "id": "V0501",
    "w": "きかい",
    "r": "きかい",
    "m": {
      "en": "machine",
      "zh-TW": "機械",
      "zh-CN": "机械",
      "ko": "기계",
      "vi": "máy móc",
      "id": "mesin",
      "es": "machine",
      "pt": "machine"
    },
    "pos": "i-adj",
    "ex": "とても機械"
  },
  {
    "id": "V0502",
    "w": "きじ",
    "r": "きじ",
    "m": {
      "en": "article",
      "zh-TW": "文章",
      "zh-CN": "文章",
      "ko": "기사",
      "vi": "bài báo",
      "id": "artikel",
      "es": "article",
      "pt": "article"
    },
    "pos": "noun",
    "ex": "記事について話す"
  },
  {
    "id": "V0503",
    "w": "ぎじゅつ",
    "r": "ぎじゅつ",
    "m": {
      "en": "technology",
      "zh-TW": "技術",
      "zh-CN": "技术",
      "ko": "기술",
      "vi": "công nghệ",
      "id": "teknologi",
      "es": "technology",
      "pt": "technology"
    },
    "pos": "verb-godan",
    "ex": "技術ことができる"
  },
  {
    "id": "V0504",
    "w": "きせつ",
    "r": "きせつ",
    "m": {
      "en": "season",
      "zh-TW": "季節",
      "zh-CN": "季节",
      "ko": "계절",
      "vi": "mùa",
      "id": "musim",
      "es": "season",
      "pt": "season"
    },
    "pos": "verb-godan",
    "ex": "季節ことができる"
  },
  {
    "id": "V0505",
    "w": "きそく",
    "r": "きそく",
    "m": {
      "en": "rule",
      "zh-TW": "規則",
      "zh-CN": "规则",
      "ko": "규칙",
      "vi": "quy tắc",
      "id": "aturan",
      "es": "rule",
      "pt": "rule"
    },
    "pos": "verb-godan",
    "ex": "規則ことができる"
  },
  {
    "id": "V0506",
    "w": "きたい",
    "r": "きたい",
    "m": {
      "en": "expectation",
      "zh-TW": "期待",
      "zh-CN": "期待",
      "ko": "기대",
      "vi": "kỳ vọng",
      "id": "harapan",
      "es": "expectation",
      "pt": "expectation"
    },
    "pos": "i-adj",
    "ex": "とても期待"
  },
  {
    "id": "V0507",
    "w": "気分",
    "r": "きぶん",
    "m": {
      "en": "mood",
      "zh-TW": "心情",
      "zh-CN": "心情",
      "ko": "기분",
      "vi": "tâm trạng",
      "id": "suasana hati",
      "es": "mood",
      "pt": "mood"
    },
    "pos": "noun",
    "ex": "気分について話す"
  },
  {
    "id": "V0508",
    "w": "きぼう",
    "r": "きぼう",
    "m": {
      "en": "hope",
      "zh-TW": "希望",
      "zh-CN": "希望",
      "ko": "희망",
      "vi": "hy vọng",
      "id": "harapan",
      "es": "hope",
      "pt": "hope"
    },
    "pos": "verb-godan",
    "ex": "希望ことができる"
  },
  {
    "id": "V0509",
    "w": "気持ち",
    "r": "きもち",
    "m": {
      "en": "feeling",
      "zh-TW": "心情",
      "zh-CN": "心情",
      "ko": "기분",
      "vi": "cảm giác",
      "id": "perasaan",
      "es": "feeling",
      "pt": "feeling"
    },
    "pos": "noun",
    "ex": "気持ちについて話す"
  },
  {
    "id": "V0510",
    "w": "客",
    "r": "きゃく",
    "m": {
      "en": "guest",
      "zh-TW": "客人",
      "zh-CN": "客人",
      "ko": "손님",
      "vi": "khách",
      "id": "tamu",
      "es": "guest",
      "pt": "guest"
    },
    "pos": "verb-godan",
    "ex": "客ことができる"
  },
  {
    "id": "V0511",
    "w": "きゅうりょう",
    "r": "きゅうりょう",
    "m": {
      "en": "salary",
      "zh-TW": "薪水",
      "zh-CN": "薪水",
      "ko": "월급",
      "vi": "lương",
      "id": "gaji",
      "es": "salary",
      "pt": "salary"
    },
    "pos": "verb-godan",
    "ex": "給料ことができる",
    "syn": [
      "給与",
      "報酬",
      "サラリー"
    ]
  },
  {
    "id": "V0512",
    "w": "教育",
    "r": "きょういく",
    "m": {
      "en": "education",
      "zh-TW": "教育",
      "zh-CN": "教育",
      "ko": "교육",
      "vi": "giáo dục",
      "id": "pendidikan",
      "es": "education",
      "pt": "education"
    },
    "pos": "verb-godan",
    "ex": "教育ことができる"
  },
  {
    "id": "V0513",
    "w": "教室",
    "r": "きょうしつ",
    "m": {
      "en": "classroom",
      "zh-TW": "教室",
      "zh-CN": "教室",
      "ko": "교실",
      "vi": "lớp học",
      "id": "ruang kelas",
      "es": "classroom",
      "pt": "classroom"
    },
    "pos": "verb-godan",
    "ex": "教室ことができる"
  },
  {
    "id": "V0514",
    "w": "きょうみ",
    "r": "きょうみ",
    "m": {
      "en": "interest",
      "zh-TW": "興趣",
      "zh-CN": "兴趣",
      "ko": "흥미",
      "vi": "hứng thú",
      "id": "minat",
      "es": "interest",
      "pt": "interest"
    },
    "pos": "noun",
    "ex": "日本文化に興味がある",
    "syn": [
      "関心",
      "好奇心",
      "面白み"
    ]
  },
  {
    "id": "V0515",
    "w": "きょり",
    "r": "きょり",
    "m": {
      "en": "distance",
      "zh-TW": "距離",
      "zh-CN": "距离",
      "ko": "거리",
      "vi": "khoảng cách",
      "id": "jarak",
      "es": "distance",
      "pt": "distance"
    },
    "pos": "noun",
    "ex": "距離について話す"
  },
  {
    "id": "V0516",
    "w": "きんし",
    "r": "きんし",
    "m": {
      "en": "prohibition",
      "zh-TW": "禁止",
      "zh-CN": "禁止",
      "ko": "금지",
      "vi": "cấm",
      "id": "larangan",
      "es": "prohibition",
      "pt": "prohibition"
    },
    "pos": "noun",
    "ex": "禁止について話す"
  },
  {
    "id": "V0517",
    "w": "空港",
    "r": "くうこう",
    "m": {
      "en": "airport",
      "zh-TW": "機場",
      "zh-CN": "机场",
      "ko": "공항",
      "vi": "sân bay",
      "id": "bandara",
      "es": "airport",
      "pt": "airport"
    },
    "pos": "verb-godan",
    "ex": "空港ことができる"
  },
  {
    "id": "V0518",
    "w": "経験",
    "r": "けいけん",
    "m": {
      "en": "experience",
      "zh-TW": "經驗",
      "zh-CN": "经验",
      "ko": "경험",
      "vi": "kinh nghiệm",
      "id": "pengalaman",
      "es": "experience",
      "pt": "experience"
    },
    "pos": "noun",
    "ex": "貴重な経験を積む",
    "syn": [
      "体験",
      "実績",
      "実体験"
    ]
  },
  {
    "id": "V0519",
    "w": "けっか",
    "r": "けっか",
    "m": {
      "en": "result",
      "zh-TW": "結果",
      "zh-CN": "结果",
      "ko": "결과",
      "vi": "kết quả",
      "id": "hasil",
      "es": "result",
      "pt": "result"
    },
    "pos": "noun",
    "ex": "試験の結果が出る",
    "syn": [
      "成果",
      "成績",
      "結末"
    ]
  },
  {
    "id": "V0520",
    "w": "けっこん",
    "r": "けっこん",
    "m": {
      "en": "marriage",
      "zh-TW": "結婚",
      "zh-CN": "结婚",
      "ko": "결혼",
      "vi": "kết hôn",
      "id": "pernikahan",
      "es": "marriage",
      "pt": "marriage"
    },
    "pos": "noun",
    "ex": "結婚について話す"
  },
  {
    "id": "V0521",
    "w": "げんいん",
    "r": "げんいん",
    "m": {
      "en": "cause",
      "zh-TW": "原因",
      "zh-CN": "原因",
      "ko": "원인",
      "vi": "nguyên nhân",
      "id": "penyebab",
      "es": "cause",
      "pt": "cause"
    },
    "pos": "noun",
    "ex": "事故の原因を調べる",
    "syn": [
      "理由",
      "要因",
      "根本"
    ]
  },
  {
    "id": "V0522",
    "w": "げんざい",
    "r": "げんざい",
    "m": {
      "en": "present",
      "zh-TW": "現在",
      "zh-CN": "现在",
      "ko": "현재",
      "vi": "hiện tại",
      "id": "sekarang",
      "es": "present",
      "pt": "present"
    },
    "pos": "i-adj",
    "ex": "とても現在"
  },
  {
    "id": "V0523",
    "w": "けんちく",
    "r": "けんちく",
    "m": {
      "en": "architecture",
      "zh-TW": "建築",
      "zh-CN": "建筑",
      "ko": "건축",
      "vi": "kiến trúc",
      "id": "arsitektur",
      "es": "architecture",
      "pt": "architecture"
    },
    "pos": "verb-godan",
    "ex": "建築ことができる"
  },
  {
    "id": "V0524",
    "w": "公園",
    "r": "こうえん",
    "m": {
      "en": "park",
      "zh-TW": "公園",
      "zh-CN": "公园",
      "ko": "공원",
      "vi": "công viên",
      "id": "taman",
      "es": "park",
      "pt": "park"
    },
    "pos": "noun",
    "ex": "公園について話す"
  },
  {
    "id": "V0525",
    "w": "こうぎ",
    "r": "こうぎ",
    "m": {
      "en": "lecture",
      "zh-TW": "講義",
      "zh-CN": "讲义",
      "ko": "강의",
      "vi": "bài giảng",
      "id": "kuliah",
      "es": "lecture",
      "pt": "lecture"
    },
    "pos": "noun",
    "ex": "講義について話す"
  },
  {
    "id": "V0526",
    "w": "工場",
    "r": "こうじょう",
    "m": {
      "en": "factory",
      "zh-TW": "工廠",
      "zh-CN": "工厂",
      "ko": "공장",
      "vi": "nhà máy",
      "id": "pabrik",
      "es": "factory",
      "pt": "factory"
    },
    "pos": "verb-godan",
    "ex": "工場ことができる"
  },
  {
    "id": "V0527",
    "w": "交通",
    "r": "こうつう",
    "m": {
      "en": "traffic",
      "zh-TW": "交通",
      "zh-CN": "交通",
      "ko": "교통",
      "vi": "giao thông",
      "id": "lalu lintas",
      "es": "traffic",
      "pt": "traffic"
    },
    "pos": "verb-godan",
    "ex": "交通ことができる",
    "syn": [
      "輸送",
      "移動",
      "トランスポート"
    ]
  },
  {
    "id": "V0528",
    "w": "こくさい",
    "r": "こくさい",
    "m": {
      "en": "international",
      "zh-TW": "國際",
      "zh-CN": "国际",
      "ko": "국제",
      "vi": "quốc tế",
      "id": "internasional",
      "es": "international",
      "pt": "international"
    },
    "pos": "i-adj",
    "ex": "とても国際"
  },
  {
    "id": "V0529",
    "w": "こしょう",
    "r": "こしょう",
    "m": {
      "en": "breakdown",
      "zh-TW": "故障",
      "zh-CN": "故障",
      "ko": "고장",
      "vi": "hỏng",
      "id": "kerusakan",
      "es": "breakdown",
      "pt": "breakdown"
    },
    "pos": "verb-godan",
    "ex": "故障ことができる"
  },
  {
    "id": "V0530",
    "w": "こじん",
    "r": "こじん",
    "m": {
      "en": "individual",
      "zh-TW": "個人",
      "zh-CN": "个人",
      "ko": "개인",
      "vi": "cá nhân",
      "id": "individu",
      "es": "individual",
      "pt": "individual"
    },
    "pos": "noun",
    "ex": "個人について話す"
  },
  {
    "id": "V0531",
    "w": "答え",
    "r": "こたえ",
    "m": {
      "en": "answer",
      "zh-TW": "答案",
      "zh-CN": "答案",
      "ko": "대답",
      "vi": "câu trả lời",
      "id": "jawaban",
      "es": "answer",
      "pt": "answer"
    },
    "pos": "noun",
    "ex": "答えについて話す"
  },
  {
    "id": "V0532",
    "w": "ことば",
    "r": "ことば",
    "m": {
      "en": "word",
      "zh-TW": "語言",
      "zh-CN": "语言",
      "ko": "말",
      "vi": "từ ngữ",
      "id": "kata",
      "es": "word",
      "pt": "word"
    },
    "pos": "noun",
    "ex": "言葉について話す"
  },
  {
    "id": "V0533",
    "w": "今度",
    "r": "こんど",
    "m": {
      "en": "this time",
      "zh-TW": "這次",
      "zh-CN": "这次",
      "ko": "이번",
      "vi": "lần này",
      "id": "kali ini",
      "es": "this time",
      "pt": "this time"
    },
    "pos": "noun",
    "ex": "今度について話す"
  },
  {
    "id": "V0534",
    "w": "さいきん",
    "r": "さいきん",
    "m": {
      "en": "recently",
      "zh-TW": "最近",
      "zh-CN": "最近",
      "ko": "최근",
      "vi": "gần đây",
      "id": "baru-baru ini",
      "es": "recently",
      "pt": "recently"
    },
    "pos": "noun",
    "ex": "最近について話す"
  },
  {
    "id": "V0535",
    "w": "さいご",
    "r": "さいご",
    "m": {
      "en": "last",
      "zh-TW": "最後",
      "zh-CN": "最后",
      "ko": "마지막",
      "vi": "cuối cùng",
      "id": "terakhir",
      "es": "last",
      "pt": "last"
    },
    "pos": "noun",
    "ex": "最後について話す"
  },
  {
    "id": "V0536",
    "w": "さいしょ",
    "r": "さいしょ",
    "m": {
      "en": "first",
      "zh-TW": "最初",
      "zh-CN": "最初",
      "ko": "처음",
      "vi": "đầu tiên",
      "id": "pertama",
      "es": "first",
      "pt": "first"
    },
    "pos": "noun",
    "ex": "最初について話す"
  },
  {
    "id": "V0537",
    "w": "ざいりょう",
    "r": "ざいりょう",
    "m": {
      "en": "material",
      "zh-TW": "材料",
      "zh-CN": "材料",
      "ko": "재료",
      "vi": "nguyên liệu",
      "id": "bahan",
      "es": "material",
      "pt": "material"
    },
    "pos": "verb-godan",
    "ex": "材料ことができる"
  },
  {
    "id": "V0538",
    "w": "作品",
    "r": "さくひん",
    "m": {
      "en": "work",
      "zh-TW": "作品",
      "zh-CN": "作品",
      "ko": "작품",
      "vi": "tác phẩm",
      "id": "karya",
      "es": "work",
      "pt": "work"
    },
    "pos": "noun",
    "ex": "作品について話す"
  },
  {
    "id": "V0539",
    "w": "さんか",
    "r": "さんか",
    "m": {
      "en": "participation",
      "zh-TW": "參加",
      "zh-CN": "参加",
      "ko": "참가",
      "vi": "tham gia",
      "id": "partisipasi",
      "es": "participation",
      "pt": "participation"
    },
    "pos": "noun",
    "ex": "参加について話す"
  },
  {
    "id": "V0540",
    "w": "ざんねん",
    "r": "ざんねん",
    "m": {
      "en": "regrettable",
      "zh-TW": "遺憾",
      "zh-CN": "遗憾",
      "ko": "유감",
      "vi": "đáng tiếc",
      "id": "sayang",
      "es": "regrettable",
      "pt": "regrettable"
    },
    "pos": "noun",
    "ex": "残念について話す"
  },
  {
    "id": "V0541",
    "w": "試合",
    "r": "しあい",
    "m": {
      "en": "match",
      "zh-TW": "比賽",
      "zh-CN": "比赛",
      "ko": "시합",
      "vi": "trận đấu",
      "id": "pertandingan",
      "es": "match",
      "pt": "match"
    },
    "pos": "i-adj",
    "ex": "とても試合"
  },
  {
    "id": "V0542",
    "w": "じこ",
    "r": "じこ",
    "m": {
      "en": "accident",
      "zh-TW": "事故",
      "zh-CN": "事故",
      "ko": "사고",
      "vi": "tai nạn",
      "id": "kecelakaan",
      "es": "accident",
      "pt": "accident"
    },
    "pos": "noun",
    "ex": "事故について話す"
  },
  {
    "id": "V0543",
    "w": "じしん",
    "r": "じしん",
    "m": {
      "en": "earthquake",
      "zh-TW": "地震",
      "zh-CN": "地震",
      "ko": "지진",
      "vi": "động đất",
      "id": "gempa",
      "es": "earthquake",
      "pt": "earthquake"
    },
    "pos": "noun",
    "ex": "地震について話す"
  },
  {
    "id": "V0544",
    "w": "しぜん",
    "r": "しぜん",
    "m": {
      "en": "nature",
      "zh-TW": "自然",
      "zh-CN": "自然",
      "ko": "자연",
      "vi": "tự nhiên",
      "id": "alam",
      "es": "nature",
      "pt": "nature"
    },
    "pos": "noun",
    "ex": "自然について話す"
  },
  {
    "id": "V0545",
    "w": "じっさい",
    "r": "じっさい",
    "m": {
      "en": "actually",
      "zh-TW": "實際",
      "zh-CN": "实际",
      "ko": "실제",
      "vi": "thực tế",
      "id": "sebenarnya",
      "es": "actually",
      "pt": "actually"
    },
    "pos": "i-adj",
    "ex": "とても実際"
  },
  {
    "id": "V0546",
    "w": "しっぱい",
    "r": "しっぱい",
    "m": {
      "en": "failure",
      "zh-TW": "失敗",
      "zh-CN": "失败",
      "ko": "실패",
      "vi": "thất bại",
      "id": "kegagalan",
      "es": "failure",
      "pt": "failure"
    },
    "pos": "i-adj",
    "ex": "とても失敗",
    "syn": [
      "失策",
      "ミス",
      "不成功"
    ]
  },
  {
    "id": "V0547",
    "w": "質問",
    "r": "しつもん",
    "m": {
      "en": "question",
      "zh-TW": "問題",
      "zh-CN": "问题",
      "ko": "질문",
      "vi": "câu hỏi",
      "id": "pertanyaan",
      "es": "question",
      "pt": "question"
    },
    "pos": "noun",
    "ex": "質問について話す",
    "syn": [
      "聞く",
      "尋ねる",
      "問いかける"
    ]
  },
  {
    "id": "V0548",
    "w": "しはらい",
    "r": "しはらい",
    "m": {
      "en": "payment",
      "zh-TW": "支付",
      "zh-CN": "支付",
      "ko": "지불",
      "vi": "thanh toán",
      "id": "pembayaran",
      "es": "payment",
      "pt": "payment"
    },
    "pos": "i-adj",
    "ex": "とても支払"
  },
  {
    "id": "V0549",
    "w": "島",
    "r": "しま",
    "m": {
      "en": "island",
      "zh-TW": "島",
      "zh-CN": "岛",
      "ko": "섬",
      "vi": "đảo",
      "id": "pulau",
      "es": "island",
      "pt": "island"
    },
    "pos": "noun",
    "ex": "島について話す"
  },
  {
    "id": "V0550",
    "w": "事務所",
    "r": "じむしょ",
    "m": {
      "en": "office",
      "zh-TW": "辦公室",
      "zh-CN": "办公室",
      "ko": "사무소",
      "vi": "văn phòng",
      "id": "kantor",
      "es": "office",
      "pt": "office"
    },
    "pos": "noun",
    "ex": "事務所について話す"
  },
  {
    "id": "V0551",
    "w": "社会",
    "r": "しゃかい",
    "m": {
      "en": "society",
      "zh-TW": "社會",
      "zh-CN": "社会",
      "ko": "사회",
      "vi": "xã hội",
      "id": "masyarakat",
      "es": "society",
      "pt": "society"
    },
    "pos": "i-adj",
    "ex": "とても社会"
  },
  {
    "id": "V0552",
    "w": "社長",
    "r": "しゃちょう",
    "m": {
      "en": "president",
      "zh-TW": "社長",
      "zh-CN": "社长",
      "ko": "사장",
      "vi": "giám đốc",
      "id": "direktur",
      "es": "president",
      "pt": "president"
    },
    "pos": "verb-godan",
    "ex": "社長ことができる"
  },
  {
    "id": "V0553",
    "w": "じゆう",
    "r": "じゆう",
    "m": {
      "en": "freedom",
      "zh-TW": "自由",
      "zh-CN": "自由",
      "ko": "자유",
      "vi": "tự do",
      "id": "kebebasan",
      "es": "freedom",
      "pt": "freedom"
    },
    "pos": "verb-godan",
    "ex": "自由ことができる"
  },
  {
    "id": "V0554",
    "w": "しゅうかん",
    "r": "しゅうかん",
    "m": {
      "en": "habit",
      "zh-TW": "習慣",
      "zh-CN": "习惯",
      "ko": "습관",
      "vi": "thói quen",
      "id": "kebiasaan",
      "es": "habit",
      "pt": "habit"
    },
    "pos": "noun",
    "ex": "習慣について話す"
  },
  {
    "id": "V0555",
    "w": "住所",
    "r": "じゅうしょ",
    "m": {
      "en": "address",
      "zh-TW": "地址",
      "zh-CN": "地址",
      "ko": "주소",
      "vi": "địa chỉ",
      "id": "alamat",
      "es": "address",
      "pt": "address"
    },
    "pos": "noun",
    "ex": "住所について話す"
  },
  {
    "id": "V0556",
    "w": "じゅぎょう",
    "r": "じゅぎょう",
    "m": {
      "en": "class",
      "zh-TW": "課程",
      "zh-CN": "课程",
      "ko": "수업",
      "vi": "bài học",
      "id": "pelajaran",
      "es": "class",
      "pt": "class"
    },
    "pos": "verb-godan",
    "ex": "授業ことができる",
    "syn": [
      "レッスン",
      "講義",
      "クラス"
    ]
  },
  {
    "id": "V0557",
    "w": "出発",
    "r": "しゅっぱつ",
    "m": {
      "en": "departure",
      "zh-TW": "出發",
      "zh-CN": "出发",
      "ko": "출발",
      "vi": "khởi hành",
      "id": "keberangkatan",
      "es": "departure",
      "pt": "departure"
    },
    "pos": "verb-godan",
    "ex": "出発ことができる"
  },
  {
    "id": "V0558",
    "w": "しゅみ",
    "r": "しゅみ",
    "m": {
      "en": "hobby",
      "zh-TW": "興趣",
      "zh-CN": "兴趣",
      "ko": "취미",
      "vi": "sở thích",
      "id": "hobi",
      "es": "hobby",
      "pt": "hobby"
    },
    "pos": "noun",
    "ex": "趣味について話す"
  },
  {
    "id": "V0559",
    "w": "じゅんび",
    "r": "じゅんび",
    "m": {
      "en": "preparation",
      "zh-TW": "準備",
      "zh-CN": "准备",
      "ko": "준비",
      "vi": "chuẩn bị",
      "id": "persiapan",
      "es": "preparation",
      "pt": "preparation"
    },
    "pos": "noun",
    "ex": "旅行の準備をする",
    "syn": [
      "用意",
      "支度",
      "仕度"
    ]
  },
  {
    "id": "V0560",
    "w": "しょうかい",
    "r": "しょうかい",
    "m": {
      "en": "introduction",
      "zh-TW": "介紹",
      "zh-CN": "介绍",
      "ko": "소개",
      "vi": "giới thiệu",
      "id": "perkenalan",
      "es": "introduction",
      "pt": "introduction"
    },
    "pos": "i-adj",
    "ex": "とても紹介",
    "syn": [
      "案内する",
      "引き合わせる",
      "披露する"
    ]
  },
  {
    "id": "V0561",
    "w": "しょうらい",
    "r": "しょうらい",
    "m": {
      "en": "future",
      "zh-TW": "將來",
      "zh-CN": "将来",
      "ko": "장래",
      "vi": "tương lai",
      "id": "masa depan",
      "es": "future",
      "pt": "future"
    },
    "pos": "i-adj",
    "ex": "とても将来"
  },
  {
    "id": "V0562",
    "w": "食事",
    "r": "しょくじ",
    "m": {
      "en": "meal",
      "zh-TW": "用餐",
      "zh-CN": "用餐",
      "ko": "식사",
      "vi": "bữa ăn",
      "id": "makan",
      "es": "meal",
      "pt": "meal"
    },
    "pos": "noun",
    "ex": "食事について話す"
  },
  {
    "id": "V0563",
    "w": "じょせい",
    "r": "じょせい",
    "m": {
      "en": "woman",
      "zh-TW": "女性",
      "zh-CN": "女性",
      "ko": "여성",
      "vi": "phụ nữ",
      "id": "wanita",
      "es": "woman",
      "pt": "woman"
    },
    "pos": "i-adj",
    "ex": "とても女性"
  },
  {
    "id": "V0564",
    "w": "しょるい",
    "r": "しょるい",
    "m": {
      "en": "document",
      "zh-TW": "文件",
      "zh-CN": "文件",
      "ko": "서류",
      "vi": "tài liệu",
      "id": "dokumen",
      "es": "document",
      "pt": "document"
    },
    "pos": "i-adj",
    "ex": "とても書類"
  },
  {
    "id": "V0565",
    "w": "人口",
    "r": "じんこう",
    "m": {
      "en": "population",
      "zh-TW": "人口",
      "zh-CN": "人口",
      "ko": "인구",
      "vi": "dân số",
      "id": "populasi",
      "es": "population",
      "pt": "population"
    },
    "pos": "verb-godan",
    "ex": "人口ことができる"
  },
  {
    "id": "V0566",
    "w": "新聞",
    "r": "しんぶん",
    "m": {
      "en": "newspaper",
      "zh-TW": "報紙",
      "zh-CN": "报纸",
      "ko": "신문",
      "vi": "báo",
      "id": "koran",
      "es": "newspaper",
      "pt": "newspaper"
    },
    "pos": "noun",
    "ex": "新聞について話す"
  },
  {
    "id": "V0567",
    "w": "水道",
    "r": "すいどう",
    "m": {
      "en": "water supply",
      "zh-TW": "自來水",
      "zh-CN": "自来水",
      "ko": "수도",
      "vi": "nước máy",
      "id": "air ledeng",
      "es": "water supply",
      "pt": "water supply"
    },
    "pos": "verb-godan",
    "ex": "水道ことができる"
  },
  {
    "id": "V0568",
    "w": "数学",
    "r": "すうがく",
    "m": {
      "en": "mathematics",
      "zh-TW": "數學",
      "zh-CN": "数学",
      "ko": "수학",
      "vi": "toán học",
      "id": "matematika",
      "es": "mathematics",
      "pt": "mathematics"
    },
    "pos": "verb-godan",
    "ex": "数学ことができる"
  },
  {
    "id": "V0569",
    "w": "すばらしい",
    "r": "すばらしい",
    "m": {
      "en": "wonderful",
      "zh-TW": "精彩",
      "zh-CN": "精彩",
      "ko": "훌륭한",
      "vi": "tuyệt vời",
      "id": "luar biasa",
      "es": "wonderful",
      "pt": "wonderful"
    },
    "pos": "i-adj",
    "ex": "とても素晴らしい",
    "syn": [
      "すごい",
      "見事",
      "立派"
    ]
  },
  {
    "id": "V0570",
    "w": "生活",
    "r": "せいかつ",
    "m": {
      "en": "life",
      "zh-TW": "生活",
      "zh-CN": "生活",
      "ko": "생활",
      "vi": "cuộc sống",
      "id": "kehidupan",
      "es": "life",
      "pt": "life"
    },
    "pos": "verb-godan",
    "ex": "生活ことができる"
  },
  {
    "id": "V0571",
    "w": "せいじ",
    "r": "せいじ",
    "m": {
      "en": "politics",
      "zh-TW": "政治",
      "zh-CN": "政治",
      "ko": "정치",
      "vi": "chính trị",
      "id": "politik",
      "es": "politics",
      "pt": "politics"
    },
    "pos": "noun",
    "ex": "政治について話す"
  },
  {
    "id": "V0572",
    "w": "せいひん",
    "r": "せいひん",
    "m": {
      "en": "product",
      "zh-TW": "產品",
      "zh-CN": "产品",
      "ko": "제품",
      "vi": "sản phẩm",
      "id": "produk",
      "es": "product",
      "pt": "product"
    },
    "pos": "noun",
    "ex": "製品について話す"
  },
  {
    "id": "V0573",
    "w": "世界",
    "r": "せかい",
    "m": {
      "en": "world",
      "zh-TW": "世界",
      "zh-CN": "世界",
      "ko": "세계",
      "vi": "thế giới",
      "id": "dunia",
      "es": "world",
      "pt": "world"
    },
    "pos": "i-adj",
    "ex": "とても世界"
  },
  {
    "id": "V0574",
    "w": "せき",
    "r": "せき",
    "m": {
      "en": "seat",
      "zh-TW": "座位",
      "zh-CN": "座位",
      "ko": "자리",
      "vi": "chỗ ngồi",
      "id": "tempat duduk",
      "es": "seat",
      "pt": "seat"
    },
    "pos": "noun",
    "ex": "席について話す"
  },
  {
    "id": "V0575",
    "w": "説明",
    "r": "せつめい",
    "m": {
      "en": "explanation",
      "zh-TW": "說明",
      "zh-CN": "说明",
      "ko": "설명",
      "vi": "giải thích",
      "id": "penjelasan",
      "es": "explanation",
      "pt": "explanation"
    },
    "pos": "i-adj",
    "ex": "詳しい説明を聞く",
    "syn": [
      "解説",
      "案内",
      "紹介"
    ]
  },
  {
    "id": "V0576",
    "w": "世話",
    "r": "せわ",
    "m": {
      "en": "care",
      "zh-TW": "照顧",
      "zh-CN": "照顾",
      "ko": "돌봄",
      "vi": "chăm sóc",
      "id": "perawatan",
      "es": "care",
      "pt": "care"
    },
    "pos": "noun",
    "ex": "世話について話す"
  },
  {
    "id": "V0577",
    "w": "せんしゅ",
    "r": "せんしゅ",
    "m": {
      "en": "player",
      "zh-TW": "選手",
      "zh-CN": "选手",
      "ko": "선수",
      "vi": "vận động viên",
      "id": "atlet",
      "es": "player",
      "pt": "player"
    },
    "pos": "noun",
    "ex": "選手について話す"
  },
  {
    "id": "V0578",
    "w": "せんもん",
    "r": "せんもん",
    "m": {
      "en": "specialty",
      "zh-TW": "專業",
      "zh-CN": "专业",
      "ko": "전문",
      "vi": "chuyên môn",
      "id": "spesialisasi",
      "es": "specialty",
      "pt": "specialty"
    },
    "pos": "noun",
    "ex": "専門について話す"
  },
  {
    "id": "V0579",
    "w": "そうだん",
    "r": "そうだん",
    "m": {
      "en": "consultation",
      "zh-TW": "商量",
      "zh-CN": "商量",
      "ko": "상담",
      "vi": "tư vấn",
      "id": "konsultasi",
      "es": "consultation",
      "pt": "consultation"
    },
    "pos": "noun",
    "ex": "先生に相談する",
    "syn": [
      "協議",
      "話し合い",
      "アドバイス"
    ]
  },
  {
    "id": "V0580",
    "w": "そつぎょう",
    "r": "そつぎょう",
    "m": {
      "en": "graduation",
      "zh-TW": "畢業",
      "zh-CN": "毕业",
      "ko": "졸업",
      "vi": "tốt nghiệp",
      "id": "lulus",
      "es": "graduation",
      "pt": "graduation"
    },
    "pos": "verb-godan",
    "ex": "卒業ことができる"
  },
  {
    "id": "V0581",
    "w": "そふ",
    "r": "そふ",
    "m": {
      "en": "grandfather",
      "zh-TW": "祖父",
      "zh-CN": "祖父",
      "ko": "할아버지",
      "vi": "ông",
      "id": "kakek",
      "es": "grandfather",
      "pt": "grandfather"
    },
    "pos": "noun",
    "ex": "祖父について話す"
  },
  {
    "id": "V0582",
    "w": "そぼ",
    "r": "そぼ",
    "m": {
      "en": "grandmother",
      "zh-TW": "祖母",
      "zh-CN": "祖母",
      "ko": "할머니",
      "vi": "bà",
      "id": "nenek",
      "es": "grandmother",
      "pt": "grandmother"
    },
    "pos": "noun",
    "ex": "祖母について話す"
  },
  {
    "id": "V0583",
    "w": "大学",
    "r": "だいがく",
    "m": {
      "en": "university",
      "zh-TW": "大學",
      "zh-CN": "大学",
      "ko": "대학",
      "vi": "đại học",
      "id": "universitas",
      "es": "university",
      "pt": "university"
    },
    "pos": "verb-godan",
    "ex": "大学ことができる"
  },
  {
    "id": "V0584",
    "w": "大事",
    "r": "だいじ",
    "m": {
      "en": "important",
      "zh-TW": "重要",
      "zh-CN": "重要",
      "ko": "중요한",
      "vi": "quan trọng",
      "id": "penting",
      "es": "important",
      "pt": "important"
    },
    "pos": "noun",
    "ex": "大事について話す"
  },
  {
    "id": "V0585",
    "w": "だいじょうぶ",
    "r": "だいじょうぶ",
    "m": {
      "en": "alright",
      "zh-TW": "沒關係",
      "zh-CN": "没关系",
      "ko": "괜찮다",
      "vi": "không sao",
      "id": "tidak apa-apa",
      "es": "alright",
      "pt": "alright"
    },
    "pos": "verb-godan",
    "ex": "大丈夫ことができる"
  },
  {
    "id": "V0586",
    "w": "台風",
    "r": "たいふう",
    "m": {
      "en": "typhoon",
      "zh-TW": "颱風",
      "zh-CN": "台风",
      "ko": "태풍",
      "vi": "bão",
      "id": "topan",
      "es": "typhoon",
      "pt": "typhoon"
    },
    "pos": "verb-godan",
    "ex": "台風ことができる"
  },
  {
    "id": "V0587",
    "w": "たからもの",
    "r": "たからもの",
    "m": {
      "en": "treasure",
      "zh-TW": "寶物",
      "zh-CN": "宝物",
      "ko": "보물",
      "vi": "kho báu",
      "id": "harta",
      "es": "treasure",
      "pt": "treasure"
    },
    "pos": "noun",
    "ex": "宝物について話す"
  },
  {
    "id": "V0588",
    "w": "たな",
    "r": "たな",
    "m": {
      "en": "shelf",
      "zh-TW": "架子",
      "zh-CN": "架子",
      "ko": "선반",
      "vi": "kệ",
      "id": "rak",
      "es": "shelf",
      "pt": "shelf"
    },
    "pos": "noun",
    "ex": "棚について話す"
  },
  {
    "id": "V0589",
    "w": "たんじょうび",
    "r": "たんじょうび",
    "m": {
      "en": "birthday",
      "zh-TW": "生日",
      "zh-CN": "生日",
      "ko": "생일",
      "vi": "sinh nhật",
      "id": "ulang tahun",
      "es": "birthday",
      "pt": "birthday"
    },
    "pos": "noun",
    "ex": "誕生日について話す"
  },
  {
    "id": "V0590",
    "w": "だんせい",
    "r": "だんせい",
    "m": {
      "en": "man",
      "zh-TW": "男性",
      "zh-CN": "男性",
      "ko": "남성",
      "vi": "nam giới",
      "id": "pria",
      "es": "man",
      "pt": "man"
    },
    "pos": "i-adj",
    "ex": "とても男性"
  },
  {
    "id": "V0591",
    "w": "地図",
    "r": "ちず",
    "m": {
      "en": "map",
      "zh-TW": "地圖",
      "zh-CN": "地图",
      "ko": "지도",
      "vi": "bản đồ",
      "id": "peta",
      "es": "map",
      "pt": "map"
    },
    "pos": "noun",
    "ex": "地図について話す"
  },
  {
    "id": "V0592",
    "w": "注意",
    "r": "ちゅうい",
    "m": {
      "en": "attention",
      "zh-TW": "注意",
      "zh-CN": "注意",
      "ko": "주의",
      "vi": "chú ý",
      "id": "perhatian",
      "es": "attention",
      "pt": "attention"
    },
    "pos": "i-adj",
    "ex": "注意を払う",
    "syn": [
      "警戒",
      "用心",
      "気をつけること"
    ]
  },
  {
    "id": "V0593",
    "w": "中心",
    "r": "ちゅうしん",
    "m": {
      "en": "center",
      "zh-TW": "中心",
      "zh-CN": "中心",
      "ko": "중심",
      "vi": "trung tâm",
      "id": "pusat",
      "es": "center",
      "pt": "center"
    },
    "pos": "noun",
    "ex": "中心について話す"
  },
  {
    "id": "V0594",
    "w": "ちゅうしゃじょう",
    "r": "ちゅうしゃじょう",
    "m": {
      "en": "parking lot",
      "zh-TW": "停車場",
      "zh-CN": "停车场",
      "ko": "주차장",
      "vi": "bãi đỗ xe",
      "id": "tempat parkir",
      "es": "parking lot",
      "pt": "parking lot"
    },
    "pos": "verb-godan",
    "ex": "駐車場ことができる"
  },
  {
    "id": "V0595",
    "w": "ちょうし",
    "r": "ちょうし",
    "m": {
      "en": "condition",
      "zh-TW": "狀況",
      "zh-CN": "状况",
      "ko": "상태",
      "vi": "tình trạng",
      "id": "kondisi",
      "es": "condition",
      "pt": "condition"
    },
    "pos": "noun",
    "ex": "調子について話す"
  },
  {
    "id": "V0596",
    "w": "つうきん",
    "r": "つうきん",
    "m": {
      "en": "commuting",
      "zh-TW": "通勤",
      "zh-CN": "通勤",
      "ko": "통근",
      "vi": "đi làm",
      "id": "perjalanan kerja",
      "es": "commuting",
      "pt": "commuting"
    },
    "pos": "noun",
    "ex": "通勤について話す"
  },
  {
    "id": "V0597",
    "w": "でんとう",
    "r": "でんとう",
    "m": {
      "en": "tradition",
      "zh-TW": "傳統",
      "zh-CN": "传统",
      "ko": "전통",
      "vi": "truyền thống",
      "id": "tradisi",
      "es": "tradition",
      "pt": "tradition"
    },
    "pos": "verb-godan",
    "ex": "伝統ことができる"
  },
  {
    "id": "V0598",
    "w": "電話",
    "r": "でんわ",
    "m": {
      "en": "telephone",
      "zh-TW": "電話",
      "zh-CN": "电话",
      "ko": "전화",
      "vi": "điện thoại",
      "id": "telepon",
      "es": "telephone",
      "pt": "telephone"
    },
    "pos": "noun",
    "ex": "電話について話す"
  },
  {
    "id": "V0599",
    "w": "都会",
    "r": "とかい",
    "m": {
      "en": "city",
      "zh-TW": "都市",
      "zh-CN": "都市",
      "ko": "도시",
      "vi": "thành phố",
      "id": "kota",
      "es": "city",
      "pt": "city"
    },
    "pos": "i-adj",
    "ex": "とても都会"
  },
  {
    "id": "V0600",
    "w": "届け",
    "r": "とどけ",
    "m": {
      "en": "notice",
      "zh-TW": "通知",
      "zh-CN": "通知",
      "ko": "신고",
      "vi": "thông báo",
      "id": "pemberitahuan",
      "es": "notice",
      "pt": "notice"
    },
    "pos": "noun",
    "ex": "届けについて話す"
  },
  {
    "id": "V0601",
    "w": "となり",
    "r": "となり",
    "m": {
      "en": "next to",
      "zh-TW": "旁邊",
      "zh-CN": "旁边",
      "ko": "옆",
      "vi": "bên cạnh",
      "id": "sebelah",
      "es": "next to",
      "pt": "next to"
    },
    "pos": "noun",
    "ex": "隣について話す"
  },
  {
    "id": "V0602",
    "w": "なかま",
    "r": "なかま",
    "m": {
      "en": "companion",
      "zh-TW": "夥伴",
      "zh-CN": "伙伴",
      "ko": "동료",
      "vi": "bạn bè",
      "id": "teman",
      "es": "companion",
      "pt": "companion"
    },
    "pos": "noun",
    "ex": "仲間について話す"
  },
  {
    "id": "V0603",
    "w": "ないよう",
    "r": "ないよう",
    "m": {
      "en": "content",
      "zh-TW": "內容",
      "zh-CN": "内容",
      "ko": "내용",
      "vi": "nội dung",
      "id": "isi",
      "es": "content",
      "pt": "content"
    },
    "pos": "verb-godan",
    "ex": "内容ことができる"
  },
  {
    "id": "V0604",
    "w": "にもつ",
    "r": "にもつ",
    "m": {
      "en": "luggage",
      "zh-TW": "行李",
      "zh-CN": "行李",
      "ko": "짐",
      "vi": "hành lý",
      "id": "barang",
      "es": "luggage",
      "pt": "luggage"
    },
    "pos": "verb-godan",
    "ex": "荷物ことができる"
  },
  {
    "id": "V0605",
    "w": "入院",
    "r": "にゅういん",
    "m": {
      "en": "hospitalization",
      "zh-TW": "住院",
      "zh-CN": "住院",
      "ko": "입원",
      "vi": "nhập viện",
      "id": "rawat inap",
      "es": "hospitalization",
      "pt": "hospitalization"
    },
    "pos": "noun",
    "ex": "入院について話す"
  },
  {
    "id": "V0606",
    "w": "入学",
    "r": "にゅうがく",
    "m": {
      "en": "enrollment",
      "zh-TW": "入學",
      "zh-CN": "入学",
      "ko": "입학",
      "vi": "nhập học",
      "id": "masuk sekolah",
      "es": "enrollment",
      "pt": "enrollment"
    },
    "pos": "verb-godan",
    "ex": "入学ことができる"
  },
  {
    "id": "V0607",
    "w": "人気",
    "r": "にんき",
    "m": {
      "en": "popularity",
      "zh-TW": "人氣",
      "zh-CN": "人气",
      "ko": "인기",
      "vi": "phổ biến",
      "id": "populer",
      "es": "popularity",
      "pt": "popularity"
    },
    "pos": "noun",
    "ex": "人気について話す"
  },
  {
    "id": "V0608",
    "w": "ねだん",
    "r": "ねだん",
    "m": {
      "en": "price",
      "zh-TW": "價格",
      "zh-CN": "价格",
      "ko": "가격",
      "vi": "giá",
      "id": "harga",
      "es": "price",
      "pt": "price"
    },
    "pos": "noun",
    "ex": "値段について話す"
  },
  {
    "id": "V0609",
    "w": "ねんれい",
    "r": "ねんれい",
    "m": {
      "en": "age",
      "zh-TW": "年齡",
      "zh-CN": "年龄",
      "ko": "나이",
      "vi": "tuổi",
      "id": "usia",
      "es": "age",
      "pt": "age"
    },
    "pos": "i-adj",
    "ex": "とても年齢"
  },
  {
    "id": "V0610",
    "w": "のうぎょう",
    "r": "のうぎょう",
    "m": {
      "en": "agriculture",
      "zh-TW": "農業",
      "zh-CN": "农业",
      "ko": "농업",
      "vi": "nông nghiệp",
      "id": "pertanian",
      "es": "agriculture",
      "pt": "agriculture"
    },
    "pos": "verb-godan",
    "ex": "農業ことができる"
  },
  {
    "id": "V0611",
    "w": "場合",
    "r": "ばあい",
    "m": {
      "en": "case",
      "zh-TW": "情況",
      "zh-CN": "情况",
      "ko": "경우",
      "vi": "trường hợp",
      "id": "kasus",
      "es": "case",
      "pt": "case"
    },
    "pos": "i-adj",
    "ex": "とても場合"
  },
  {
    "id": "V0612",
    "w": "売り場",
    "r": "うりば",
    "m": {
      "en": "sales floor",
      "zh-TW": "賣場",
      "zh-CN": "卖场",
      "ko": "매장",
      "vi": "quầy bán",
      "id": "tempat jual",
      "es": "sales floor",
      "pt": "sales floor"
    },
    "pos": "noun",
    "ex": "売り場について話す"
  },
  {
    "id": "V0613",
    "w": "はっぴょう",
    "r": "はっぴょう",
    "m": {
      "en": "announcement",
      "zh-TW": "發表",
      "zh-CN": "发表",
      "ko": "발표",
      "vi": "công bố",
      "id": "pengumuman",
      "es": "announcement",
      "pt": "announcement"
    },
    "pos": "verb-godan",
    "ex": "発表ことができる"
  },
  {
    "id": "V0614",
    "w": "番組",
    "r": "ばんぐみ",
    "m": {
      "en": "program",
      "zh-TW": "節目",
      "zh-CN": "节目",
      "ko": "프로그램",
      "vi": "chương trình",
      "id": "acara",
      "es": "program",
      "pt": "program"
    },
    "pos": "noun",
    "ex": "番組について話す"
  },
  {
    "id": "V0615",
    "w": "はんたい",
    "r": "はんたい",
    "m": {
      "en": "opposite",
      "zh-TW": "反對",
      "zh-CN": "反对",
      "ko": "반대",
      "vi": "phản đối",
      "id": "kebalikan",
      "es": "opposite",
      "pt": "opposite"
    },
    "pos": "i-adj",
    "ex": "とても反対",
    "syn": [
      "異議を唱える",
      "否定する",
      "拒否する"
    ]
  },
  {
    "id": "V0616",
    "w": "にっき",
    "r": "にっき",
    "m": {
      "en": "diary",
      "zh-TW": "日記",
      "zh-CN": "日记",
      "ko": "일기",
      "vi": "nhật ký",
      "id": "buku harian",
      "es": "diary",
      "pt": "diary"
    },
    "pos": "noun",
    "ex": "日記について話す"
  },
  {
    "id": "V0617",
    "w": "びじゅつ",
    "r": "びじゅつ",
    "m": {
      "en": "art",
      "zh-TW": "美術",
      "zh-CN": "美术",
      "ko": "미술",
      "vi": "mỹ thuật",
      "id": "seni",
      "es": "art",
      "pt": "art"
    },
    "pos": "verb-godan",
    "ex": "美術ことができる"
  },
  {
    "id": "V0618",
    "w": "ひみつ",
    "r": "ひみつ",
    "m": {
      "en": "secret",
      "zh-TW": "秘密",
      "zh-CN": "秘密",
      "ko": "비밀",
      "vi": "bí mật",
      "id": "rahasia",
      "es": "secret",
      "pt": "secret"
    },
    "pos": "verb-godan",
    "ex": "秘密ことができる"
  },
  {
    "id": "V0619",
    "w": "ひょうげん",
    "r": "ひょうげん",
    "m": {
      "en": "expression",
      "zh-TW": "表現",
      "zh-CN": "表现",
      "ko": "표현",
      "vi": "biểu hiện",
      "id": "ekspresi",
      "es": "expression",
      "pt": "expression"
    },
    "pos": "noun",
    "ex": "表現について話す"
  },
  {
    "id": "V0620",
    "w": "病院",
    "r": "びょういん",
    "m": {
      "en": "hospital",
      "zh-TW": "醫院",
      "zh-CN": "医院",
      "ko": "병원",
      "vi": "bệnh viện",
      "id": "rumah sakit",
      "es": "hospital",
      "pt": "hospital"
    },
    "pos": "noun",
    "ex": "病院について話す"
  },
  {
    "id": "V0621",
    "w": "部長",
    "r": "ぶちょう",
    "m": {
      "en": "department head",
      "zh-TW": "部長",
      "zh-CN": "部长",
      "ko": "부장",
      "vi": "trưởng phòng",
      "id": "kepala bagian",
      "es": "department head",
      "pt": "department head"
    },
    "pos": "verb-godan",
    "ex": "部長ことができる"
  },
  {
    "id": "V0622",
    "w": "部分",
    "r": "ぶぶん",
    "m": {
      "en": "part",
      "zh-TW": "部分",
      "zh-CN": "部分",
      "ko": "부분",
      "vi": "phần",
      "id": "bagian",
      "es": "part",
      "pt": "part"
    },
    "pos": "noun",
    "ex": "部分について話す"
  },
  {
    "id": "V0623",
    "w": "ぶんか",
    "r": "ぶんか",
    "m": {
      "en": "culture",
      "zh-TW": "文化",
      "zh-CN": "文化",
      "ko": "문화",
      "vi": "văn hóa",
      "id": "budaya",
      "es": "culture",
      "pt": "culture"
    },
    "pos": "noun",
    "ex": "文化について話す"
  },
  {
    "id": "V0624",
    "w": "文学",
    "r": "ぶんがく",
    "m": {
      "en": "literature",
      "zh-TW": "文學",
      "zh-CN": "文学",
      "ko": "문학",
      "vi": "văn học",
      "id": "sastra",
      "es": "literature",
      "pt": "literature"
    },
    "pos": "verb-godan",
    "ex": "文学ことができる"
  },
  {
    "id": "V0625",
    "w": "へいわ",
    "r": "へいわ",
    "m": {
      "en": "peace",
      "zh-TW": "和平",
      "zh-CN": "和平",
      "ko": "평화",
      "vi": "hòa bình",
      "id": "damai",
      "es": "peace",
      "pt": "peace"
    },
    "pos": "noun",
    "ex": "平和について話す"
  },
  {
    "id": "V0626",
    "w": "別",
    "r": "べつ",
    "m": {
      "en": "separate",
      "zh-TW": "別的",
      "zh-CN": "别的",
      "ko": "별",
      "vi": "khác",
      "id": "lain",
      "es": "separate",
      "pt": "separate"
    },
    "pos": "verb-godan",
    "ex": "別ことができる"
  },
  {
    "id": "V0627",
    "w": "へんか",
    "r": "へんか",
    "m": {
      "en": "change",
      "zh-TW": "變化",
      "zh-CN": "变化",
      "ko": "변화",
      "vi": "thay đổi",
      "id": "perubahan",
      "es": "change",
      "pt": "change"
    },
    "pos": "noun",
    "ex": "変化について話す"
  },
  {
    "id": "V0628",
    "w": "へんじ",
    "r": "へんじ",
    "m": {
      "en": "reply",
      "zh-TW": "回答",
      "zh-CN": "回答",
      "ko": "대답",
      "vi": "trả lời",
      "id": "balasan",
      "es": "reply",
      "pt": "reply"
    },
    "pos": "noun",
    "ex": "返事について話す"
  },
  {
    "id": "V0629",
    "w": "ほうほう",
    "r": "ほうほう",
    "m": {
      "en": "method",
      "zh-TW": "方法",
      "zh-CN": "方法",
      "ko": "방법",
      "vi": "phương pháp",
      "id": "metode",
      "es": "method",
      "pt": "method"
    },
    "pos": "verb-godan",
    "ex": "新しい方法を試す",
    "syn": [
      "やり方",
      "手段",
      "仕方"
    ]
  },
  {
    "id": "V0630",
    "w": "ほうそう",
    "r": "ほうそう",
    "m": {
      "en": "broadcast",
      "zh-TW": "廣播",
      "zh-CN": "广播",
      "ko": "방송",
      "vi": "phát sóng",
      "id": "siaran",
      "es": "broadcast",
      "pt": "broadcast"
    },
    "pos": "verb-godan",
    "ex": "放送ことができる"
  },
  {
    "id": "V0631",
    "w": "ぼうえき",
    "r": "ぼうえき",
    "m": {
      "en": "trade",
      "zh-TW": "貿易",
      "zh-CN": "贸易",
      "ko": "무역",
      "vi": "thương mại",
      "id": "perdagangan",
      "es": "trade",
      "pt": "trade"
    },
    "pos": "noun",
    "ex": "貿易について話す"
  },
  {
    "id": "V0632",
    "w": "ほんとう",
    "r": "ほんとう",
    "m": {
      "en": "truth",
      "zh-TW": "真的",
      "zh-CN": "真的",
      "ko": "정말",
      "vi": "thật sự",
      "id": "benar",
      "es": "truth",
      "pt": "truth"
    },
    "pos": "verb-godan",
    "ex": "本当ことができる"
  },
  {
    "id": "V0633",
    "w": "毎日",
    "r": "まいにち",
    "m": {
      "en": "every day",
      "zh-TW": "每天",
      "zh-CN": "每天",
      "ko": "매일",
      "vi": "hàng ngày",
      "id": "setiap hari",
      "es": "every day",
      "pt": "every day"
    },
    "pos": "noun",
    "ex": "毎日について話す"
  },
  {
    "id": "V0634",
    "w": "まんぞく",
    "r": "まんぞく",
    "m": {
      "en": "satisfaction",
      "zh-TW": "滿足",
      "zh-CN": "满足",
      "ko": "만족",
      "vi": "hài lòng",
      "id": "kepuasan",
      "es": "satisfaction",
      "pt": "satisfaction"
    },
    "pos": "verb-godan",
    "ex": "満足ことができる"
  },
  {
    "id": "V0635",
    "w": "見方",
    "r": "みかた",
    "m": {
      "en": "viewpoint",
      "zh-TW": "看法",
      "zh-CN": "看法",
      "ko": "견해",
      "vi": "quan điểm",
      "id": "pandangan",
      "es": "viewpoint",
      "pt": "viewpoint"
    },
    "pos": "noun",
    "ex": "見方について話す"
  },
  {
    "id": "V0636",
    "w": "道",
    "r": "みち",
    "m": {
      "en": "road",
      "zh-TW": "路",
      "zh-CN": "路",
      "ko": "길",
      "vi": "đường",
      "id": "jalan",
      "es": "road",
      "pt": "road"
    },
    "pos": "noun",
    "ex": "道について話す"
  },
  {
    "id": "V0637",
    "w": "みな",
    "r": "みな",
    "m": {
      "en": "everyone",
      "zh-TW": "大家",
      "zh-CN": "大家",
      "ko": "모두",
      "vi": "mọi người",
      "id": "semua orang",
      "es": "everyone",
      "pt": "everyone"
    },
    "pos": "noun",
    "ex": "皆について話す"
  },
  {
    "id": "V0638",
    "w": "みらい",
    "r": "みらい",
    "m": {
      "en": "future",
      "zh-TW": "未來",
      "zh-CN": "未来",
      "ko": "미래",
      "vi": "tương lai",
      "id": "masa depan",
      "es": "future",
      "pt": "future"
    },
    "pos": "i-adj",
    "ex": "とても未来"
  },
  {
    "id": "V0639",
    "w": "無理",
    "r": "むり",
    "m": {
      "en": "impossible",
      "zh-TW": "不可能",
      "zh-CN": "不可能",
      "ko": "무리",
      "vi": "không thể",
      "id": "mustahil",
      "es": "impossible",
      "pt": "impossible"
    },
    "pos": "noun",
    "ex": "無理について話す"
  },
  {
    "id": "V0640",
    "w": "めいわく",
    "r": "めいわく",
    "m": {
      "en": "trouble",
      "zh-TW": "麻煩",
      "zh-CN": "麻烦",
      "ko": "폐",
      "vi": "phiền",
      "id": "gangguan",
      "es": "trouble",
      "pt": "trouble"
    },
    "pos": "verb-godan",
    "ex": "迷惑ことができる"
  },
  {
    "id": "V0641",
    "w": "もくてき",
    "r": "もくてき",
    "m": {
      "en": "purpose",
      "zh-TW": "目的",
      "zh-CN": "目的",
      "ko": "목적",
      "vi": "mục đích",
      "id": "tujuan",
      "es": "purpose",
      "pt": "purpose"
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
    "id": "V0642",
    "w": "問題",
    "r": "もんだい",
    "m": {
      "en": "problem",
      "zh-TW": "問題",
      "zh-CN": "问题",
      "ko": "문제",
      "vi": "vấn đề",
      "id": "masalah",
      "es": "problem",
      "pt": "problem"
    },
    "pos": "i-adj",
    "ex": "問題を解決する",
    "syn": [
      "課題",
      "難題",
      "トラブル"
    ]
  },
  {
    "id": "V0643",
    "w": "やくそく",
    "r": "やくそく",
    "m": {
      "en": "promise",
      "zh-TW": "約定",
      "zh-CN": "约定",
      "ko": "약속",
      "vi": "hẹn",
      "id": "janji",
      "es": "promise",
      "pt": "promise"
    },
    "pos": "verb-godan",
    "ex": "約束ことができる"
  },
  {
    "id": "V0644",
    "w": "優勝",
    "r": "ゆうしょう",
    "m": {
      "en": "victory",
      "zh-TW": "優勝",
      "zh-CN": "优胜",
      "ko": "우승",
      "vi": "vô địch",
      "id": "juara",
      "es": "victory",
      "pt": "victory"
    },
    "pos": "verb-godan",
    "ex": "優勝ことができる"
  },
  {
    "id": "V0645",
    "w": "ゆうびん",
    "r": "ゆうびん",
    "m": {
      "en": "mail",
      "zh-TW": "郵件",
      "zh-CN": "邮件",
      "ko": "우편",
      "vi": "bưu điện",
      "id": "pos",
      "es": "mail",
      "pt": "mail"
    },
    "pos": "noun",
    "ex": "郵便について話す"
  },
  {
    "id": "V0646",
    "w": "ゆしゅつ",
    "r": "ゆしゅつ",
    "m": {
      "en": "export",
      "zh-TW": "出口",
      "zh-CN": "出口",
      "ko": "수출",
      "vi": "xuất khẩu",
      "id": "ekspor",
      "es": "export",
      "pt": "export"
    },
    "pos": "verb-godan",
    "ex": "輸出ことができる"
  },
  {
    "id": "V0647",
    "w": "ゆにゅう",
    "r": "ゆにゅう",
    "m": {
      "en": "import",
      "zh-TW": "進口",
      "zh-CN": "进口",
      "ko": "수입",
      "vi": "nhập khẩu",
      "id": "impor",
      "es": "import",
      "pt": "import"
    },
    "pos": "verb-godan",
    "ex": "輸入ことができる"
  },
  {
    "id": "V0648",
    "w": "夢",
    "r": "ゆめ",
    "m": {
      "en": "dream",
      "zh-TW": "夢",
      "zh-CN": "梦",
      "ko": "꿈",
      "vi": "giấc mơ",
      "id": "mimpi",
      "es": "dream",
      "pt": "dream"
    },
    "pos": "noun",
    "ex": "夢について話す"
  },
  {
    "id": "V0649",
    "w": "ようい",
    "r": "ようい",
    "m": {
      "en": "preparation",
      "zh-TW": "準備",
      "zh-CN": "准备",
      "ko": "준비",
      "vi": "chuẩn bị",
      "id": "persiapan",
      "es": "preparation",
      "pt": "preparation"
    },
    "pos": "i-adj",
    "ex": "とても用意"
  },
  {
    "id": "V0650",
    "w": "ようじ",
    "r": "ようじ",
    "m": {
      "en": "errand",
      "zh-TW": "事情",
      "zh-CN": "事情",
      "ko": "용건",
      "vi": "việc",
      "id": "urusan",
      "es": "errand",
      "pt": "errand"
    },
    "pos": "noun",
    "ex": "用事について話す"
  },
  {
    "id": "V0651",
    "w": "よやく",
    "r": "よやく",
    "m": {
      "en": "reservation",
      "zh-TW": "預約",
      "zh-CN": "预约",
      "ko": "예약",
      "vi": "đặt chỗ",
      "id": "reservasi",
      "es": "reservation",
      "pt": "reservation"
    },
    "pos": "verb-godan",
    "ex": "予約ことができる",
    "syn": [
      "予定する",
      "確保する",
      "取る"
    ]
  },
  {
    "id": "V0652",
    "w": "りゆう",
    "r": "りゆう",
    "m": {
      "en": "reason",
      "zh-TW": "理由",
      "zh-CN": "理由",
      "ko": "이유",
      "vi": "lý do",
      "id": "alasan",
      "es": "reason",
      "pt": "reason"
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
    "id": "V0653",
    "w": "留学",
    "r": "りゅうがく",
    "m": {
      "en": "study abroad",
      "zh-TW": "留學",
      "zh-CN": "留学",
      "ko": "유학",
      "vi": "du học",
      "id": "belajar di luar negeri",
      "es": "study abroad",
      "pt": "study abroad"
    },
    "pos": "verb-godan",
    "ex": "留学ことができる"
  },
  {
    "id": "V0654",
    "w": "りょこう",
    "r": "りょこう",
    "m": {
      "en": "travel",
      "zh-TW": "旅行",
      "zh-CN": "旅行",
      "ko": "여행",
      "vi": "du lịch",
      "id": "perjalanan",
      "es": "travel",
      "pt": "travel"
    },
    "pos": "verb-godan",
    "ex": "旅行ことができる"
  },
  {
    "id": "V0655",
    "w": "れきし",
    "r": "れきし",
    "m": {
      "en": "history",
      "zh-TW": "歷史",
      "zh-CN": "历史",
      "ko": "역사",
      "vi": "lịch sử",
      "id": "sejarah",
      "es": "history",
      "pt": "history"
    },
    "pos": "noun",
    "ex": "歴史について話す"
  },
  {
    "id": "V0656",
    "w": "れんらく",
    "r": "れんらく",
    "m": {
      "en": "contact",
      "zh-TW": "聯絡",
      "zh-CN": "联络",
      "ko": "연락",
      "vi": "liên lạc",
      "id": "kontak",
      "es": "contact",
      "pt": "contact"
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
    "id": "V0657",
    "w": "れんしゅう",
    "r": "れんしゅう",
    "m": {
      "en": "practice",
      "zh-TW": "練習",
      "zh-CN": "练习",
      "ko": "연습",
      "vi": "luyện tập",
      "id": "latihan",
      "es": "practice",
      "pt": "practice"
    },
    "pos": "verb-godan",
    "ex": "練習ことができる",
    "syn": [
      "トレーニング",
      "訓練",
      "稽古"
    ]
  },
  {
    "id": "V0658",
    "w": "わかい",
    "r": "わかい",
    "m": {
      "en": "young",
      "zh-TW": "年輕",
      "zh-CN": "年轻",
      "ko": "젊은",
      "vi": "trẻ",
      "id": "muda",
      "es": "young",
      "pt": "young"
    },
    "pos": "i-adj",
    "ex": "とても若い"
  },
  {
    "id": "V0659",
    "w": "わしょく",
    "r": "わしょく",
    "m": {
      "en": "Japanese food",
      "zh-TW": "日本料理",
      "zh-CN": "日本料理",
      "ko": "일식",
      "vi": "ẩm thực Nhật",
      "id": "makanan Jepang",
      "es": "Japanese food",
      "pt": "Japanese food"
    },
    "pos": "verb-godan",
    "ex": "和食ことができる"
  },
  {
    "id": "V0660",
    "w": "割合",
    "r": "わりあい",
    "m": {
      "en": "ratio",
      "zh-TW": "比例",
      "zh-CN": "比例",
      "ko": "비율",
      "vi": "tỷ lệ",
      "id": "rasio",
      "es": "ratio",
      "pt": "ratio"
    },
    "pos": "i-adj",
    "ex": "とても割合"
  },
  {
    "id": "V0661",
    "w": "うで",
    "r": "うで",
    "m": {
      "en": "arm",
      "zh-TW": "手臂",
      "zh-CN": "手臂",
      "ko": "팔",
      "vi": "cánh tay",
      "id": "lengan",
      "es": "arm",
      "pt": "arm"
    },
    "pos": "noun",
    "ex": "腕について話す"
  },
  {
    "id": "V0662",
    "w": "ねむい",
    "r": "ねむい",
    "m": {
      "en": "sleepy",
      "zh-TW": "困",
      "zh-CN": "困",
      "ko": "졸리다",
      "vi": "buồn ngủ",
      "id": "mengantuk",
      "es": "sleepy",
      "pt": "sleepy"
    },
    "pos": "i-adj",
    "ex": "とても眠い"
  },
  {
    "id": "V0663",
    "w": "年代",
    "r": "ねんだい",
    "m": {
      "en": "era",
      "zh-TW": "年代",
      "zh-CN": "年代",
      "ko": "연대",
      "vi": "thời đại",
      "id": "era",
      "es": "era",
      "pt": "era"
    },
    "pos": "i-adj",
    "ex": "とても年代"
  },
  {
    "id": "V0664",
    "w": "年度",
    "r": "ねんど",
    "m": {
      "en": "fiscal year",
      "zh-TW": "年度",
      "zh-CN": "年度",
      "ko": "연도",
      "vi": "năm tài chính",
      "id": "tahun fiskal",
      "es": "fiscal year",
      "pt": "fiscal year"
    },
    "pos": "noun",
    "ex": "年度について話す"
  },
  {
    "id": "V0665",
    "w": "のうりょく",
    "r": "のうりょく",
    "m": {
      "en": "ability",
      "zh-TW": "能力",
      "zh-CN": "能力",
      "ko": "능력",
      "vi": "năng lực",
      "id": "kemampuan",
      "es": "ability",
      "pt": "ability"
    },
    "pos": "verb-godan",
    "ex": "能力ことができる"
  },
  {
    "id": "V0666",
    "w": "乗り物",
    "r": "のりもの",
    "m": {
      "en": "vehicle",
      "zh-TW": "交通工具",
      "zh-CN": "交通工具",
      "ko": "탈것",
      "vi": "phương tiện",
      "id": "kendaraan",
      "es": "vehicle",
      "pt": "vehicle"
    },
    "pos": "noun",
    "ex": "乗り物について話す"
  },
  {
    "id": "V0667",
    "w": "のりかえる",
    "r": "のりかえる",
    "m": {
      "en": "to transfer",
      "zh-TW": "換乘",
      "zh-CN": "换乘",
      "ko": "갈아타다",
      "vi": "chuyển xe",
      "id": "transfer",
      "es": "to transfer",
      "pt": "to transfer"
    },
    "pos": "verb-ichidan",
    "ex": "乗り換えることができる"
  },
  {
    "id": "V0668",
    "w": "倍",
    "r": "ばい",
    "m": {
      "en": "double",
      "zh-TW": "倍",
      "zh-CN": "倍",
      "ko": "배",
      "vi": "gấp đôi",
      "id": "kali lipat",
      "es": "double",
      "pt": "double"
    },
    "pos": "i-adj",
    "ex": "とても倍"
  },
  {
    "id": "V0669",
    "w": "はいたつ",
    "r": "はいたつ",
    "m": {
      "en": "delivery",
      "zh-TW": "配送",
      "zh-CN": "配送",
      "ko": "배달",
      "vi": "giao hàng",
      "id": "pengiriman",
      "es": "delivery",
      "pt": "delivery"
    },
    "pos": "verb-godan",
    "ex": "配達ことができる",
    "syn": [
      "届ける",
      "送る",
      "配送する"
    ]
  },
  {
    "id": "V0670",
    "w": "はくしゅ",
    "r": "はくしゅ",
    "m": {
      "en": "applause",
      "zh-TW": "拍手",
      "zh-CN": "拍手",
      "ko": "박수",
      "vi": "vỗ tay",
      "id": "tepuk tangan",
      "es": "applause",
      "pt": "applause"
    },
    "pos": "noun",
    "ex": "拍手について話す"
  },
  {
    "id": "V0671",
    "w": "はくぶつかん",
    "r": "はくぶつかん",
    "m": {
      "en": "museum",
      "zh-TW": "博物館",
      "zh-CN": "博物馆",
      "ko": "박물관",
      "vi": "bảo tàng",
      "id": "museum",
      "es": "museum",
      "pt": "museum"
    },
    "pos": "noun",
    "ex": "博物館について話す"
  },
  {
    "id": "V0672",
    "w": "はずかしい",
    "r": "はずかしい",
    "m": {
      "en": "embarrassed",
      "zh-TW": "害羞",
      "zh-CN": "害羞",
      "ko": "부끄럽다",
      "vi": "xấu hổ",
      "id": "malu",
      "es": "embarrassed",
      "pt": "embarrassed"
    },
    "pos": "i-adj",
    "ex": "とても恥ずかしい",
    "syn": [
      "照れる",
      "気まずい",
      "面目ない"
    ]
  },
  {
    "id": "V0673",
    "w": "発見",
    "r": "はっけん",
    "m": {
      "en": "discovery",
      "zh-TW": "發現",
      "zh-CN": "发现",
      "ko": "발견",
      "vi": "phát hiện",
      "id": "penemuan",
      "es": "discovery",
      "pt": "discovery"
    },
    "pos": "noun",
    "ex": "発見について話す"
  },
  {
    "id": "V0674",
    "w": "はってん",
    "r": "はってん",
    "m": {
      "en": "development",
      "zh-TW": "發展",
      "zh-CN": "发展",
      "ko": "발전",
      "vi": "phát triển",
      "id": "perkembangan",
      "es": "development",
      "pt": "development"
    },
    "pos": "noun",
    "ex": "発展について話す"
  },
  {
    "id": "V0675",
    "w": "発明",
    "r": "はつめい",
    "m": {
      "en": "invention",
      "zh-TW": "發明",
      "zh-CN": "发明",
      "ko": "발명",
      "vi": "phát minh",
      "id": "penemuan",
      "es": "invention",
      "pt": "invention"
    },
    "pos": "i-adj",
    "ex": "とても発明"
  },
  {
    "id": "V0676",
    "w": "花火",
    "r": "はなび",
    "m": {
      "en": "fireworks",
      "zh-TW": "煙火",
      "zh-CN": "烟火",
      "ko": "불꽃놀이",
      "vi": "pháo hoa",
      "id": "kembang api",
      "es": "fireworks",
      "pt": "fireworks"
    },
    "pos": "noun",
    "ex": "花火について話す"
  },
  {
    "id": "V0677",
    "w": "はば",
    "r": "はば",
    "m": {
      "en": "width",
      "zh-TW": "寬度",
      "zh-CN": "宽度",
      "ko": "폭",
      "vi": "chiều rộng",
      "id": "lebar",
      "es": "width",
      "pt": "width"
    },
    "pos": "noun",
    "ex": "幅について話す"
  },
  {
    "id": "V0678",
    "w": "はぶく",
    "r": "はぶく",
    "m": {
      "en": "to omit",
      "zh-TW": "省略",
      "zh-CN": "省略",
      "ko": "생략하다",
      "vi": "bỏ qua",
      "id": "menghilangkan",
      "es": "to omit",
      "pt": "to omit"
    },
    "pos": "verb-godan",
    "ex": "省くことができる"
  },
  {
    "id": "V0679",
    "w": "はま",
    "r": "はま",
    "m": {
      "en": "beach",
      "zh-TW": "海灘",
      "zh-CN": "海滩",
      "ko": "해변",
      "vi": "bãi biển",
      "id": "pantai",
      "es": "beach",
      "pt": "beach"
    },
    "pos": "noun",
    "ex": "浜について話す"
  },
  {
    "id": "V0680",
    "w": "はんい",
    "r": "はんい",
    "m": {
      "en": "range",
      "zh-TW": "範圍",
      "zh-CN": "范围",
      "ko": "범위",
      "vi": "phạm vi",
      "id": "jangkauan",
      "es": "range",
      "pt": "range"
    },
    "pos": "i-adj",
    "ex": "とても範囲"
  },
  {
    "id": "V0681",
    "w": "はんえい",
    "r": "はんえい",
    "m": {
      "en": "reflection",
      "zh-TW": "反映",
      "zh-CN": "反映",
      "ko": "반영",
      "vi": "phản ánh",
      "id": "refleksi",
      "es": "reflection",
      "pt": "reflection"
    },
    "pos": "i-adj",
    "ex": "とても反映"
  },
  {
    "id": "V0682",
    "w": "はんざい",
    "r": "はんざい",
    "m": {
      "en": "crime",
      "zh-TW": "犯罪",
      "zh-CN": "犯罪",
      "ko": "범죄",
      "vi": "tội phạm",
      "id": "kejahatan",
      "es": "crime",
      "pt": "crime"
    },
    "pos": "i-adj",
    "ex": "とても犯罪"
  },
  {
    "id": "V0683",
    "w": "はんだん",
    "r": "はんだん",
    "m": {
      "en": "judgment",
      "zh-TW": "判斷",
      "zh-CN": "判断",
      "ko": "판단",
      "vi": "phán đoán",
      "id": "penilaian",
      "es": "judgment",
      "pt": "judgment"
    },
    "pos": "noun",
    "ex": "判断について話す"
  },
  {
    "id": "V0684",
    "w": "はんばい",
    "r": "はんばい",
    "m": {
      "en": "sales",
      "zh-TW": "銷售",
      "zh-CN": "销售",
      "ko": "판매",
      "vi": "bán hàng",
      "id": "penjualan",
      "es": "sales",
      "pt": "sales"
    },
    "pos": "i-adj",
    "ex": "とても販売",
    "syn": [
      "売る",
      "売却する",
      "販売する"
    ]
  },
  {
    "id": "V0685",
    "w": "日帰り",
    "r": "ひがえり",
    "m": {
      "en": "day trip",
      "zh-TW": "當天來回",
      "zh-CN": "当天来回",
      "ko": "당일치기",
      "vi": "đi về trong ngày",
      "id": "pulang pergi",
      "es": "day trip",
      "pt": "day trip"
    },
    "pos": "noun",
    "ex": "日帰りについて話す"
  },
  {
    "id": "V0686",
    "w": "ひかく",
    "r": "ひかく",
    "m": {
      "en": "comparison",
      "zh-TW": "比較",
      "zh-CN": "比较",
      "ko": "비교",
      "vi": "so sánh",
      "id": "perbandingan",
      "es": "comparison",
      "pt": "comparison"
    },
    "pos": "verb-godan",
    "ex": "比較ことができる"
  },
  {
    "id": "V0687",
    "w": "光",
    "r": "ひかり",
    "m": {
      "en": "light",
      "zh-TW": "光",
      "zh-CN": "光",
      "ko": "빛",
      "vi": "ánh sáng",
      "id": "cahaya",
      "es": "light",
      "pt": "light"
    },
    "pos": "noun",
    "ex": "光について話す"
  },
  {
    "id": "V0688",
    "w": "引き出す",
    "r": "ひきだす",
    "m": {
      "en": "to withdraw",
      "zh-TW": "取出",
      "zh-CN": "取出",
      "ko": "인출하다",
      "vi": "rút ra",
      "id": "menarik",
      "es": "to withdraw",
      "pt": "to withdraw"
    },
    "pos": "verb-godan",
    "ex": "引き出すことができる"
  },
  {
    "id": "V0689",
    "w": "ひじょう",
    "r": "ひじょう",
    "m": {
      "en": "emergency",
      "zh-TW": "非常",
      "zh-CN": "非常",
      "ko": "비상",
      "vi": "khẩn cấp",
      "id": "darurat",
      "es": "emergency",
      "pt": "emergency"
    },
    "pos": "verb-godan",
    "ex": "非常ことができる"
  },
  {
    "id": "V0690",
    "w": "ひっし",
    "r": "ひっし",
    "m": {
      "en": "desperate",
      "zh-TW": "拼命",
      "zh-CN": "拼命",
      "ko": "필사",
      "vi": "liều mạng",
      "id": "mati-matian",
      "es": "desperate",
      "pt": "desperate"
    },
    "pos": "noun",
    "ex": "必死について話す"
  },
  {
    "id": "V0691",
    "w": "ひっこす",
    "r": "ひっこす",
    "m": {
      "en": "to move",
      "zh-TW": "搬家",
      "zh-CN": "搬家",
      "ko": "이사하다",
      "vi": "chuyển nhà",
      "id": "pindah",
      "es": "to move",
      "pt": "to move"
    },
    "pos": "verb-godan",
    "ex": "引っ越すことができる"
  },
  {
    "id": "V0692",
    "w": "ひてい",
    "r": "ひてい",
    "m": {
      "en": "denial",
      "zh-TW": "否定",
      "zh-CN": "否定",
      "ko": "부정",
      "vi": "phủ định",
      "id": "penolakan",
      "es": "denial",
      "pt": "denial"
    },
    "pos": "i-adj",
    "ex": "とても否定"
  },
  {
    "id": "V0693",
    "w": "人々",
    "r": "ひとびと",
    "m": {
      "en": "people",
      "zh-TW": "人們",
      "zh-CN": "人们",
      "ko": "사람들",
      "vi": "mọi người",
      "id": "orang-orang",
      "es": "people",
      "pt": "people"
    },
    "pos": "adverb",
    "ex": "人々について話す"
  },
  {
    "id": "V0694",
    "w": "ひはん",
    "r": "ひはん",
    "m": {
      "en": "criticism",
      "zh-TW": "批判",
      "zh-CN": "批判",
      "ko": "비판",
      "vi": "phê phán",
      "id": "kritik",
      "es": "criticism",
      "pt": "criticism"
    },
    "pos": "noun",
    "ex": "批判について話す"
  },
  {
    "id": "V0695",
    "w": "ひふ",
    "r": "ひふ",
    "m": {
      "en": "skin",
      "zh-TW": "皮膚",
      "zh-CN": "皮肤",
      "ko": "피부",
      "vi": "da",
      "id": "kulit",
      "es": "skin",
      "pt": "skin"
    },
    "pos": "noun",
    "ex": "皮膚について話す"
  },
  {
    "id": "V0696",
    "w": "ひょう",
    "r": "ひょう",
    "m": {
      "en": "table/chart",
      "zh-TW": "表格",
      "zh-CN": "表格",
      "ko": "표",
      "vi": "bảng",
      "id": "tabel",
      "es": "table/chart",
      "pt": "table/chart"
    },
    "pos": "verb-godan",
    "ex": "表ことができる"
  },
  {
    "id": "V0697",
    "w": "ひょうか",
    "r": "ひょうか",
    "m": {
      "en": "evaluation",
      "zh-TW": "評價",
      "zh-CN": "评价",
      "ko": "평가",
      "vi": "đánh giá",
      "id": "penilaian",
      "es": "evaluation",
      "pt": "evaluation"
    },
    "pos": "noun",
    "ex": "評価について話す"
  },
  {
    "id": "V0698",
    "w": "ひょうじょう",
    "r": "ひょうじょう",
    "m": {
      "en": "facial expression",
      "zh-TW": "表情",
      "zh-CN": "表情",
      "ko": "표정",
      "vi": "biểu cảm",
      "id": "ekspresi wajah",
      "es": "facial expression",
      "pt": "facial expression"
    },
    "pos": "verb-godan",
    "ex": "表情ことができる"
  },
  {
    "id": "V0699",
    "w": "びよう",
    "r": "びよう",
    "m": {
      "en": "beauty",
      "zh-TW": "美容",
      "zh-CN": "美容",
      "ko": "미용",
      "vi": "làm đẹp",
      "id": "kecantikan",
      "es": "beauty",
      "pt": "beauty"
    },
    "pos": "verb-godan",
    "ex": "美容ことができる"
  },
  {
    "id": "V0700",
    "w": "品質",
    "r": "ひんしつ",
    "m": {
      "en": "quality",
      "zh-TW": "品質",
      "zh-CN": "品质",
      "ko": "품질",
      "vi": "chất lượng",
      "id": "kualitas",
      "es": "quality",
      "pt": "quality"
    },
    "pos": "verb-godan",
    "ex": "品質ことができる"
  },
  {
    "id": "V0701",
    "w": "びんぼう",
    "r": "びんぼう",
    "m": {
      "en": "poor",
      "zh-TW": "貧窮",
      "zh-CN": "贫穷",
      "ko": "가난",
      "vi": "nghèo",
      "id": "miskin",
      "es": "poor",
      "pt": "poor"
    },
    "pos": "verb-godan",
    "ex": "貧乏ことができる"
  },
  {
    "id": "V0702",
    "w": "ふうふ",
    "r": "ふうふ",
    "m": {
      "en": "married couple",
      "zh-TW": "夫婦",
      "zh-CN": "夫妇",
      "ko": "부부",
      "vi": "vợ chồng",
      "id": "pasangan suami istri",
      "es": "married couple",
      "pt": "married couple"
    },
    "pos": "noun",
    "ex": "夫婦について話す"
  },
  {
    "id": "V0703",
    "w": "ふかい",
    "r": "ふかい",
    "m": {
      "en": "deep",
      "zh-TW": "深",
      "zh-CN": "深",
      "ko": "깊다",
      "vi": "sâu",
      "id": "dalam",
      "es": "deep",
      "pt": "deep"
    },
    "pos": "i-adj",
    "ex": "とても深い"
  },
  {
    "id": "V0704",
    "w": "ふくし",
    "r": "ふくし",
    "m": {
      "en": "welfare",
      "zh-TW": "福利",
      "zh-CN": "福利",
      "ko": "복지",
      "vi": "phúc lợi",
      "id": "kesejahteraan",
      "es": "welfare",
      "pt": "welfare"
    },
    "pos": "noun",
    "ex": "福祉について話す"
  },
  {
    "id": "V0705",
    "w": "ふだん",
    "r": "ふだん",
    "m": {
      "en": "usually",
      "zh-TW": "平常",
      "zh-CN": "平常",
      "ko": "평소",
      "vi": "thường ngày",
      "id": "biasanya",
      "es": "usually",
      "pt": "usually"
    },
    "pos": "noun",
    "ex": "普段について話す"
  },
  {
    "id": "V0706",
    "w": "部品",
    "r": "ぶひん",
    "m": {
      "en": "parts",
      "zh-TW": "零件",
      "zh-CN": "零件",
      "ko": "부품",
      "vi": "linh kiện",
      "id": "suku cadang",
      "es": "parts",
      "pt": "parts"
    },
    "pos": "noun",
    "ex": "部品について話す"
  },
  {
    "id": "V0707",
    "w": "ふまん",
    "r": "ふまん",
    "m": {
      "en": "dissatisfaction",
      "zh-TW": "不滿",
      "zh-CN": "不满",
      "ko": "불만",
      "vi": "bất mãn",
      "id": "ketidakpuasan",
      "es": "dissatisfaction",
      "pt": "dissatisfaction"
    },
    "pos": "noun",
    "ex": "不満について話す"
  },
  {
    "id": "V0708",
    "w": "ふんいき",
    "r": "ふんいき",
    "m": {
      "en": "atmosphere",
      "zh-TW": "氣氛",
      "zh-CN": "气氛",
      "ko": "분위기",
      "vi": "bầu không khí",
      "id": "suasana",
      "es": "atmosphere",
      "pt": "atmosphere"
    },
    "pos": "noun",
    "ex": "雰囲気について話す"
  },
  {
    "id": "V0709",
    "w": "分野",
    "r": "ぶんや",
    "m": {
      "en": "field",
      "zh-TW": "領域",
      "zh-CN": "领域",
      "ko": "분야",
      "vi": "lĩnh vực",
      "id": "bidang",
      "es": "field",
      "pt": "field"
    },
    "pos": "noun",
    "ex": "分野について話す"
  },
  {
    "id": "V0710",
    "w": "ぶんせき",
    "r": "ぶんせき",
    "m": {
      "en": "analysis",
      "zh-TW": "分析",
      "zh-CN": "分析",
      "ko": "분석",
      "vi": "phân tích",
      "id": "analisis",
      "es": "analysis",
      "pt": "analysis"
    },
    "pos": "noun",
    "ex": "分析について話す"
  },
  {
    "id": "V0711",
    "w": "へいきん",
    "r": "へいきん",
    "m": {
      "en": "average",
      "zh-TW": "平均",
      "zh-CN": "平均",
      "ko": "평균",
      "vi": "trung bình",
      "id": "rata-rata",
      "es": "average",
      "pt": "average"
    },
    "pos": "noun",
    "ex": "平均について話す"
  },
  {
    "id": "V0712",
    "w": "ほうりつ",
    "r": "ほうりつ",
    "m": {
      "en": "law",
      "zh-TW": "法律",
      "zh-CN": "法律",
      "ko": "법률",
      "vi": "pháp luật",
      "id": "hukum",
      "es": "law",
      "pt": "law"
    },
    "pos": "verb-godan",
    "ex": "法律ことができる"
  },
  {
    "id": "V0713",
    "w": "ほうもん",
    "r": "ほうもん",
    "m": {
      "en": "visit",
      "zh-TW": "訪問",
      "zh-CN": "访问",
      "ko": "방문",
      "vi": "thăm",
      "id": "kunjungan",
      "es": "visit",
      "pt": "visit"
    },
    "pos": "noun",
    "ex": "訪問について話す"
  },
  {
    "id": "V0714",
    "w": "ほうこう",
    "r": "ほうこう",
    "m": {
      "en": "direction",
      "zh-TW": "方向",
      "zh-CN": "方向",
      "ko": "방향",
      "vi": "hướng",
      "id": "arah",
      "es": "direction",
      "pt": "direction"
    },
    "pos": "verb-godan",
    "ex": "方向ことができる"
  },
  {
    "id": "V0715",
    "w": "ほうせき",
    "r": "ほうせき",
    "m": {
      "en": "jewel",
      "zh-TW": "寶石",
      "zh-CN": "宝石",
      "ko": "보석",
      "vi": "đá quý",
      "id": "permata",
      "es": "jewel",
      "pt": "jewel"
    },
    "pos": "noun",
    "ex": "宝石について話す"
  },
  {
    "id": "V0716",
    "w": "ぼうし",
    "r": "ぼうし",
    "m": {
      "en": "prevention",
      "zh-TW": "防止",
      "zh-CN": "防止",
      "ko": "방지",
      "vi": "phòng ngừa",
      "id": "pencegahan",
      "es": "prevention",
      "pt": "prevention"
    },
    "pos": "noun",
    "ex": "防止について話す"
  },
  {
    "id": "V0717",
    "w": "報告",
    "r": "ほうこく",
    "m": {
      "en": "report",
      "zh-TW": "報告",
      "zh-CN": "报告",
      "ko": "보고",
      "vi": "báo cáo",
      "id": "laporan",
      "es": "report",
      "pt": "report"
    },
    "pos": "verb-godan",
    "ex": "報告ことができる",
    "syn": [
      "知らせる",
      "連絡する",
      "伝える"
    ]
  },
  {
    "id": "V0718",
    "w": "ぼしゅう",
    "r": "ぼしゅう",
    "m": {
      "en": "recruitment",
      "zh-TW": "招募",
      "zh-CN": "招募",
      "ko": "모집",
      "vi": "tuyển dụng",
      "id": "rekrutmen",
      "es": "recruitment",
      "pt": "recruitment"
    },
    "pos": "verb-godan",
    "ex": "募集ことができる"
  },
  {
    "id": "V0719",
    "w": "ほぞん",
    "r": "ほぞん",
    "m": {
      "en": "preservation",
      "zh-TW": "保存",
      "zh-CN": "保存",
      "ko": "보존",
      "vi": "bảo quản",
      "id": "pelestarian",
      "es": "preservation",
      "pt": "preservation"
    },
    "pos": "noun",
    "ex": "保存について話す"
  },
  {
    "id": "V0720",
    "w": "ほご",
    "r": "ほご",
    "m": {
      "en": "protection",
      "zh-TW": "保護",
      "zh-CN": "保护",
      "ko": "보호",
      "vi": "bảo vệ",
      "id": "perlindungan",
      "es": "protection",
      "pt": "protection"
    },
    "pos": "noun",
    "ex": "保護について話す"
  },
  {
    "id": "V0721",
    "w": "ほけん",
    "r": "ほけん",
    "m": {
      "en": "insurance",
      "zh-TW": "保險",
      "zh-CN": "保险",
      "ko": "보험",
      "vi": "bảo hiểm",
      "id": "asuransi",
      "es": "insurance",
      "pt": "insurance"
    },
    "pos": "noun",
    "ex": "保険について話す"
  },
  {
    "id": "V0722",
    "w": "ほしょう",
    "r": "ほしょう",
    "m": {
      "en": "guarantee",
      "zh-TW": "保證",
      "zh-CN": "保证",
      "ko": "보증",
      "vi": "bảo đảm",
      "id": "jaminan",
      "es": "guarantee",
      "pt": "guarantee"
    },
    "pos": "verb-godan",
    "ex": "保証ことができる"
  },
  {
    "id": "V0723",
    "w": "ほじょ",
    "r": "ほじょ",
    "m": {
      "en": "assistance",
      "zh-TW": "輔助",
      "zh-CN": "辅助",
      "ko": "보조",
      "vi": "hỗ trợ",
      "id": "bantuan",
      "es": "assistance",
      "pt": "assistance"
    },
    "pos": "noun",
    "ex": "補助について話す"
  },
  {
    "id": "V0724",
    "w": "細い",
    "r": "ほそい",
    "m": {
      "en": "thin",
      "zh-TW": "細",
      "zh-CN": "细",
      "ko": "가늘다",
      "vi": "mảnh",
      "id": "tipis",
      "es": "thin",
      "pt": "thin"
    },
    "pos": "i-adj",
    "ex": "とても細い"
  },
  {
    "id": "V0725",
    "w": "ほね",
    "r": "ほね",
    "m": {
      "en": "bone",
      "zh-TW": "骨頭",
      "zh-CN": "骨头",
      "ko": "뼈",
      "vi": "xương",
      "id": "tulang",
      "es": "bone",
      "pt": "bone"
    },
    "pos": "noun",
    "ex": "骨について話す"
  },
  {
    "id": "V0726",
    "w": "ほんやく",
    "r": "ほんやく",
    "m": {
      "en": "translation",
      "zh-TW": "翻譯",
      "zh-CN": "翻译",
      "ko": "번역",
      "vi": "dịch thuật",
      "id": "terjemahan",
      "es": "translation",
      "pt": "translation"
    },
    "pos": "verb-godan",
    "ex": "翻訳ことができる"
  },
  {
    "id": "V0727",
    "w": "届出",
    "r": "とどけで",
    "m": {
      "en": "notification",
      "zh-TW": "届出",
      "zh-CN": "届出",
      "ko": "notification",
      "vi": "notification",
      "id": "notification",
      "es": "notification",
      "pt": "notification"
    },
    "pos": "noun",
    "ex": "届出について話す"
  },
  {
    "id": "V0728",
    "w": "よきん",
    "r": "よきん",
    "m": {
      "en": "deposit",
      "zh-TW": "預金",
      "zh-CN": "預金",
      "ko": "deposit",
      "vi": "deposit",
      "id": "deposit",
      "es": "deposit",
      "pt": "deposit"
    },
    "pos": "noun",
    "ex": "預金について話す"
  },
  {
    "id": "V0729",
    "w": "ちょきん",
    "r": "ちょきん",
    "m": {
      "en": "savings",
      "zh-TW": "貯金",
      "zh-CN": "貯金",
      "ko": "savings",
      "vi": "savings",
      "id": "savings",
      "es": "savings",
      "pt": "savings"
    },
    "pos": "noun",
    "ex": "貯金について話す"
  },
  {
    "id": "V0730",
    "w": "ためる",
    "r": "ためる",
    "m": {
      "en": "to save",
      "zh-TW": "貯める",
      "zh-CN": "貯める",
      "ko": "to save",
      "vi": "to save",
      "id": "to save",
      "es": "to save",
      "pt": "to save"
    },
    "pos": "verb-ichidan",
    "ex": "貯めることができる"
  },
  {
    "id": "V0731",
    "w": "通り",
    "r": "とおり",
    "m": {
      "en": "street",
      "zh-TW": "通り",
      "zh-CN": "通り",
      "ko": "street",
      "vi": "street",
      "id": "street",
      "es": "street",
      "pt": "street"
    },
    "pos": "noun",
    "ex": "通りについて話す"
  },
  {
    "id": "V0732",
    "w": "どうろ",
    "r": "どうろ",
    "m": {
      "en": "road",
      "zh-TW": "道路",
      "zh-CN": "道路",
      "ko": "road",
      "vi": "road",
      "id": "road",
      "es": "road",
      "pt": "road"
    },
    "pos": "noun",
    "ex": "道路について話す"
  },
  {
    "id": "V0733",
    "w": "おうだん",
    "r": "おうだん",
    "m": {
      "en": "crossing",
      "zh-TW": "横断",
      "zh-CN": "横断",
      "ko": "crossing",
      "vi": "crossing",
      "id": "crossing",
      "es": "crossing",
      "pt": "crossing"
    },
    "pos": "noun",
    "ex": "横断について話す"
  },
  {
    "id": "V0734",
    "w": "しんごう",
    "r": "しんごう",
    "m": {
      "en": "signal",
      "zh-TW": "信号",
      "zh-CN": "信号",
      "ko": "signal",
      "vi": "signal",
      "id": "signal",
      "es": "signal",
      "pt": "signal"
    },
    "pos": "verb-godan",
    "ex": "信号ことができる"
  },
  {
    "id": "V0735",
    "w": "こうさてん",
    "r": "こうさてん",
    "m": {
      "en": "intersection",
      "zh-TW": "交差点",
      "zh-CN": "交差点",
      "ko": "intersection",
      "vi": "intersection",
      "id": "intersection",
      "es": "intersection",
      "pt": "intersection"
    },
    "pos": "noun",
    "ex": "交差点について話す"
  },
  {
    "id": "V0736",
    "w": "まっすぐ",
    "r": "まっすぐ",
    "m": {
      "en": "straight",
      "zh-TW": "真っ直ぐ",
      "zh-CN": "真っ直ぐ",
      "ko": "straight",
      "vi": "straight",
      "id": "straight",
      "es": "straight",
      "pt": "straight"
    },
    "pos": "verb-godan",
    "ex": "真っ直ぐことができる"
  },
  {
    "id": "V0737",
    "w": "みぎがわ",
    "r": "みぎがわ",
    "m": {
      "en": "right side",
      "zh-TW": "右側",
      "zh-CN": "右側",
      "ko": "right side",
      "vi": "right side",
      "id": "right side",
      "es": "right side",
      "pt": "right side"
    },
    "pos": "noun",
    "ex": "右側について話す"
  },
  {
    "id": "V0738",
    "w": "ひだりがわ",
    "r": "ひだりがわ",
    "m": {
      "en": "left side",
      "zh-TW": "左側",
      "zh-CN": "左側",
      "ko": "left side",
      "vi": "left side",
      "id": "left side",
      "es": "left side",
      "pt": "left side"
    },
    "pos": "noun",
    "ex": "左側について話す"
  },
  {
    "id": "V0739",
    "w": "むこう",
    "r": "むこう",
    "m": {
      "en": "over there",
      "zh-TW": "向こう",
      "zh-CN": "向こう",
      "ko": "over there",
      "vi": "over there",
      "id": "over there",
      "es": "over there",
      "pt": "over there"
    },
    "pos": "verb-godan",
    "ex": "向こうことができる"
  },
  {
    "id": "V0740",
    "w": "しょうめん",
    "r": "しょうめん",
    "m": {
      "en": "front",
      "zh-TW": "正面",
      "zh-CN": "正面",
      "ko": "front",
      "vi": "front",
      "id": "front",
      "es": "front",
      "pt": "front"
    },
    "pos": "noun",
    "ex": "正面について話す"
  },
  {
    "id": "V0741",
    "w": "たてもの",
    "r": "たてもの",
    "m": {
      "en": "building",
      "zh-TW": "建物",
      "zh-CN": "建物",
      "ko": "building",
      "vi": "building",
      "id": "building",
      "es": "building",
      "pt": "building"
    },
    "pos": "noun",
    "ex": "建物について話す"
  },
  {
    "id": "V0742",
    "w": "けんせつ",
    "r": "けんせつ",
    "m": {
      "en": "construction",
      "zh-TW": "建設",
      "zh-CN": "建設",
      "ko": "construction",
      "vi": "construction",
      "id": "construction",
      "es": "construction",
      "pt": "construction"
    },
    "pos": "verb-godan",
    "ex": "建設ことができる"
  },
  {
    "id": "V0743",
    "w": "工事",
    "r": "こうじ",
    "m": {
      "en": "construction work",
      "zh-TW": "工事",
      "zh-CN": "工事",
      "ko": "construction work",
      "vi": "construction work",
      "id": "construction work",
      "es": "construction work",
      "pt": "construction work"
    },
    "pos": "noun",
    "ex": "工事について話す"
  },
  {
    "id": "V0744",
    "w": "計画",
    "r": "けいかく",
    "m": {
      "en": "plan",
      "zh-TW": "計画",
      "zh-CN": "計画",
      "ko": "plan",
      "vi": "plan",
      "id": "plan",
      "es": "plan",
      "pt": "plan"
    },
    "pos": "verb-godan",
    "ex": "計画ことができる",
    "syn": [
      "プランを立てる",
      "予定する",
      "企画する"
    ]
  },
  {
    "id": "V0745",
    "w": "よてい",
    "r": "よてい",
    "m": {
      "en": "schedule",
      "zh-TW": "予定",
      "zh-CN": "予定",
      "ko": "schedule",
      "vi": "schedule",
      "id": "schedule",
      "es": "schedule",
      "pt": "schedule"
    },
    "pos": "i-adj",
    "ex": "今週の予定を確認する",
    "syn": [
      "スケジュール",
      "計画",
      "日程"
    ]
  },
  {
    "id": "V0746",
    "w": "けいやく",
    "r": "けいやく",
    "m": {
      "en": "contract",
      "zh-TW": "契約",
      "zh-CN": "契約",
      "ko": "contract",
      "vi": "contract",
      "id": "contract",
      "es": "contract",
      "pt": "contract"
    },
    "pos": "verb-godan",
    "ex": "契約ことができる",
    "syn": [
      "約束",
      "取り決め",
      "合意"
    ]
  },
  {
    "id": "V0747",
    "w": "せいふ",
    "r": "せいふ",
    "m": {
      "en": "government",
      "zh-TW": "政府",
      "zh-CN": "政府",
      "ko": "government",
      "vi": "government",
      "id": "government",
      "es": "government",
      "pt": "government"
    },
    "pos": "noun",
    "ex": "政府について話す"
  },
  {
    "id": "V0748",
    "w": "ちきゅう",
    "r": "ちきゅう",
    "m": {
      "en": "earth",
      "zh-TW": "地球",
      "zh-CN": "地球",
      "ko": "earth",
      "vi": "earth",
      "id": "earth",
      "es": "earth",
      "pt": "earth"
    },
    "pos": "verb-godan",
    "ex": "地球ことができる"
  },
  {
    "id": "V0749",
    "w": "うちゅう",
    "r": "うちゅう",
    "m": {
      "en": "universe",
      "zh-TW": "宇宙",
      "zh-CN": "宇宙",
      "ko": "universe",
      "vi": "universe",
      "id": "universe",
      "es": "universe",
      "pt": "universe"
    },
    "pos": "verb-godan",
    "ex": "宇宙ことができる"
  },
  {
    "id": "V0750",
    "w": "おんだん",
    "r": "おんだん",
    "m": {
      "en": "warm",
      "zh-TW": "温暖",
      "zh-CN": "温暖",
      "ko": "warm",
      "vi": "warm",
      "id": "warm",
      "es": "warm",
      "pt": "warm"
    },
    "pos": "noun",
    "ex": "温暖について話す"
  },
  {
    "id": "V0751",
    "w": "寒冷",
    "r": "かんれい",
    "m": {
      "en": "cold",
      "zh-TW": "寒冷",
      "zh-CN": "寒冷",
      "ko": "cold",
      "vi": "cold",
      "id": "cold",
      "es": "cold",
      "pt": "cold"
    },
    "pos": "i-adj",
    "ex": "とても寒冷"
  },
  {
    "id": "V0752",
    "w": "しつど",
    "r": "しつど",
    "m": {
      "en": "humidity",
      "zh-TW": "湿度",
      "zh-CN": "湿度",
      "ko": "humidity",
      "vi": "humidity",
      "id": "humidity",
      "es": "humidity",
      "pt": "humidity"
    },
    "pos": "noun",
    "ex": "湿度について話す"
  },
  {
    "id": "V0753",
    "w": "天候",
    "r": "てんこう",
    "m": {
      "en": "weather",
      "zh-TW": "天候",
      "zh-CN": "天候",
      "ko": "weather",
      "vi": "weather",
      "id": "weather",
      "es": "weather",
      "pt": "weather"
    },
    "pos": "verb-godan",
    "ex": "天候ことができる"
  },
  {
    "id": "V0754",
    "w": "きしょう",
    "r": "きしょう",
    "m": {
      "en": "weather",
      "zh-TW": "気象",
      "zh-CN": "気象",
      "ko": "weather",
      "vi": "weather",
      "id": "weather",
      "es": "weather",
      "pt": "weather"
    },
    "pos": "verb-godan",
    "ex": "気象ことができる"
  },
  {
    "id": "V0755",
    "w": "予報",
    "r": "よほう",
    "m": {
      "en": "forecast",
      "zh-TW": "予報",
      "zh-CN": "予報",
      "ko": "forecast",
      "vi": "forecast",
      "id": "forecast",
      "es": "forecast",
      "pt": "forecast"
    },
    "pos": "verb-godan",
    "ex": "予報ことができる"
  },
  {
    "id": "V0756",
    "w": "かくにん",
    "r": "かくにん",
    "m": {
      "en": "confirmation",
      "zh-TW": "確認",
      "zh-CN": "確認",
      "ko": "confirmation",
      "vi": "confirmation",
      "id": "confirmation",
      "es": "confirmation",
      "pt": "confirmation"
    },
    "pos": "noun",
    "ex": "確認について話す",
    "syn": [
      "チェックする",
      "確かめる",
      "照合する"
    ]
  },
  {
    "id": "V0757",
    "w": "かくじつ",
    "r": "かくじつ",
    "m": {
      "en": "certain",
      "zh-TW": "確実",
      "zh-CN": "確実",
      "ko": "certain",
      "vi": "certain",
      "id": "certain",
      "es": "certain",
      "pt": "certain"
    },
    "pos": "verb-godan",
    "ex": "確実ことができる"
  },
  {
    "id": "V0758",
    "w": "まちがい",
    "r": "まちがい",
    "m": {
      "en": "mistake",
      "zh-TW": "間違い",
      "zh-CN": "間違い",
      "ko": "mistake",
      "vi": "mistake",
      "id": "mistake",
      "es": "mistake",
      "pt": "mistake"
    },
    "pos": "i-adj",
    "ex": "とても間違い"
  },
  {
    "id": "V0759",
    "w": "せいこう",
    "r": "せいこう",
    "m": {
      "en": "success",
      "zh-TW": "成功",
      "zh-CN": "成功",
      "ko": "success",
      "vi": "success",
      "id": "success",
      "es": "success",
      "pt": "success"
    },
    "pos": "verb-godan",
    "ex": "成功ことができる",
    "syn": [
      "達成",
      "成就",
      "勝利"
    ]
  },
  {
    "id": "V0760",
    "w": "しゅだん",
    "r": "しゅだん",
    "m": {
      "en": "means",
      "zh-TW": "手段",
      "zh-CN": "手段",
      "ko": "means",
      "vi": "means",
      "id": "means",
      "es": "means",
      "pt": "means"
    },
    "pos": "noun",
    "ex": "手段について話す"
  },
  {
    "id": "V0761",
    "w": "いち",
    "r": "いち",
    "m": {
      "en": "position",
      "zh-TW": "位置",
      "zh-CN": "位置",
      "ko": "position",
      "vi": "position",
      "id": "position",
      "es": "position",
      "pt": "position"
    },
    "pos": "noun",
    "ex": "位置について話す"
  },
  {
    "id": "V0762",
    "w": "場所",
    "r": "ばしょ",
    "m": {
      "en": "place",
      "zh-TW": "場所",
      "zh-CN": "場所",
      "ko": "place",
      "vi": "place",
      "id": "place",
      "es": "place",
      "pt": "place"
    },
    "pos": "noun",
    "ex": "場所について話す"
  },
  {
    "id": "V0763",
    "w": "ちてん",
    "r": "ちてん",
    "m": {
      "en": "point",
      "zh-TW": "地点",
      "zh-CN": "地点",
      "ko": "point",
      "vi": "point",
      "id": "point",
      "es": "point",
      "pt": "point"
    },
    "pos": "noun",
    "ex": "地点について話す"
  },
  {
    "id": "V0764",
    "w": "ていど",
    "r": "ていど",
    "m": {
      "en": "degree",
      "zh-TW": "程度",
      "zh-CN": "程度",
      "ko": "degree",
      "vi": "degree",
      "id": "degree",
      "es": "degree",
      "pt": "degree"
    },
    "pos": "noun",
    "ex": "程度について話す"
  },
  {
    "id": "V0765",
    "w": "同じ",
    "r": "おなじ",
    "m": {
      "en": "same",
      "zh-TW": "同じ",
      "zh-CN": "同じ",
      "ko": "same",
      "vi": "same",
      "id": "same",
      "es": "same",
      "pt": "same"
    },
    "pos": "noun",
    "ex": "同じについて話す"
  },
  {
    "id": "V0766",
    "w": "ちがい",
    "r": "ちがい",
    "m": {
      "en": "difference",
      "zh-TW": "違い",
      "zh-CN": "違い",
      "ko": "difference",
      "vi": "difference",
      "id": "difference",
      "es": "difference",
      "pt": "difference"
    },
    "pos": "i-adj",
    "ex": "とても違い"
  },
  {
    "id": "V0767",
    "w": "さ",
    "r": "さ",
    "m": {
      "en": "difference",
      "zh-TW": "差",
      "zh-CN": "差",
      "ko": "difference",
      "vi": "difference",
      "id": "difference",
      "es": "difference",
      "pt": "difference"
    },
    "pos": "noun",
    "ex": "差について話す"
  },
  {
    "id": "V0768",
    "w": "しゅるい",
    "r": "しゅるい",
    "m": {
      "en": "type",
      "zh-TW": "種類",
      "zh-CN": "種類",
      "ko": "type",
      "vi": "type",
      "id": "type",
      "es": "type",
      "pt": "type"
    },
    "pos": "i-adj",
    "ex": "とても種類"
  },
  {
    "id": "V0769",
    "w": "ぶんるい",
    "r": "ぶんるい",
    "m": {
      "en": "classification",
      "zh-TW": "分類",
      "zh-CN": "分類",
      "ko": "classification",
      "vi": "classification",
      "id": "classification",
      "es": "classification",
      "pt": "classification"
    },
    "pos": "i-adj",
    "ex": "とても分類"
  },
  {
    "id": "V0770",
    "w": "区別",
    "r": "くべつ",
    "m": {
      "en": "distinction",
      "zh-TW": "区別",
      "zh-CN": "区別",
      "ko": "distinction",
      "vi": "distinction",
      "id": "distinction",
      "es": "distinction",
      "pt": "distinction"
    },
    "pos": "verb-godan",
    "ex": "区別ことができる"
  },
  {
    "id": "V0771",
    "w": "えらぶ",
    "r": "えらぶ",
    "m": {
      "en": "to choose",
      "zh-TW": "選ぶ",
      "zh-CN": "選ぶ",
      "ko": "to choose",
      "vi": "to choose",
      "id": "to choose",
      "es": "to choose",
      "pt": "to choose"
    },
    "pos": "verb-godan",
    "ex": "選ぶことができる"
  },
  {
    "id": "V0772",
    "w": "せんたく",
    "r": "せんたく",
    "m": {
      "en": "choice",
      "zh-TW": "選択",
      "zh-CN": "選択",
      "ko": "choice",
      "vi": "choice",
      "id": "choice",
      "es": "choice",
      "pt": "choice"
    },
    "pos": "verb-godan",
    "ex": "選択ことができる"
  },
  {
    "id": "V0773",
    "w": "けってい",
    "r": "けってい",
    "m": {
      "en": "decision",
      "zh-TW": "決定",
      "zh-CN": "決定",
      "ko": "decision",
      "vi": "decision",
      "id": "decision",
      "es": "decision",
      "pt": "decision"
    },
    "pos": "i-adj",
    "ex": "とても決定"
  },
  {
    "id": "V0774",
    "w": "思考",
    "r": "しこう",
    "m": {
      "en": "thought",
      "zh-TW": "思考",
      "zh-CN": "思考",
      "ko": "thought",
      "vi": "thought",
      "id": "thought",
      "es": "thought",
      "pt": "thought"
    },
    "pos": "verb-godan",
    "ex": "思考ことができる"
  },
  {
    "id": "V0775",
    "w": "意見",
    "r": "いけん",
    "m": {
      "en": "opinion",
      "zh-TW": "意見",
      "zh-CN": "意見",
      "ko": "opinion",
      "vi": "opinion",
      "id": "opinion",
      "es": "opinion",
      "pt": "opinion"
    },
    "pos": "noun",
    "ex": "意見を述べる",
    "syn": [
      "考え",
      "見解",
      "主張"
    ]
  },
  {
    "id": "V0776",
    "w": "しゅちょう",
    "r": "しゅちょう",
    "m": {
      "en": "claim",
      "zh-TW": "主張",
      "zh-CN": "主張",
      "ko": "claim",
      "vi": "claim",
      "id": "claim",
      "es": "claim",
      "pt": "claim"
    },
    "pos": "verb-godan",
    "ex": "主張ことができる"
  },
  {
    "id": "V0777",
    "w": "さんせい",
    "r": "さんせい",
    "m": {
      "en": "approval",
      "zh-TW": "賛成",
      "zh-CN": "賛成",
      "ko": "approval",
      "vi": "approval",
      "id": "approval",
      "es": "approval",
      "pt": "approval"
    },
    "pos": "i-adj",
    "ex": "とても賛成",
    "syn": [
      "同意する",
      "支持する",
      "承認する"
    ]
  },
  {
    "id": "V0778",
    "w": "きょか",
    "r": "きょか",
    "m": {
      "en": "permission",
      "zh-TW": "許可",
      "zh-CN": "許可",
      "ko": "permission",
      "vi": "permission",
      "id": "permission",
      "es": "permission",
      "pt": "permission"
    },
    "pos": "noun",
    "ex": "許可について話す"
  },
  {
    "id": "V0779",
    "w": "せいげん",
    "r": "せいげん",
    "m": {
      "en": "restriction",
      "zh-TW": "制限",
      "zh-CN": "制限",
      "ko": "restriction",
      "vi": "restriction",
      "id": "restriction",
      "es": "restriction",
      "pt": "restriction"
    },
    "pos": "noun",
    "ex": "制限について話す"
  },
  {
    "id": "V0780",
    "w": "けんり",
    "r": "けんり",
    "m": {
      "en": "right",
      "zh-TW": "権利",
      "zh-CN": "権利",
      "ko": "right",
      "vi": "right",
      "id": "right",
      "es": "right",
      "pt": "right"
    },
    "pos": "noun",
    "ex": "権利について話す"
  },
  {
    "id": "V0781",
    "w": "ぎむ",
    "r": "ぎむ",
    "m": {
      "en": "duty",
      "zh-TW": "義務",
      "zh-CN": "義務",
      "ko": "duty",
      "vi": "duty",
      "id": "duty",
      "es": "duty",
      "pt": "duty"
    },
    "pos": "verb-godan",
    "ex": "義務ことができる"
  },
  {
    "id": "V0782",
    "w": "せきにん",
    "r": "せきにん",
    "m": {
      "en": "responsibility",
      "zh-TW": "責任",
      "zh-CN": "責任",
      "ko": "responsibility",
      "vi": "responsibility",
      "id": "responsibility",
      "es": "responsibility",
      "pt": "responsibility"
    },
    "pos": "noun",
    "ex": "責任について話す"
  },
  {
    "id": "V0783",
    "w": "たんとう",
    "r": "たんとう",
    "m": {
      "en": "charge",
      "zh-TW": "担当",
      "zh-CN": "担当",
      "ko": "charge",
      "vi": "charge",
      "id": "charge",
      "es": "charge",
      "pt": "charge"
    },
    "pos": "verb-godan",
    "ex": "担当ことができる"
  },
  {
    "id": "V0784",
    "w": "係",
    "r": "かかり",
    "m": {
      "en": "person in charge",
      "zh-TW": "係",
      "zh-CN": "係",
      "ko": "person in charge",
      "vi": "person in charge",
      "id": "person in charge",
      "es": "person in charge",
      "pt": "person in charge"
    },
    "pos": "noun",
    "ex": "係について話す"
  },
  {
    "id": "V0785",
    "w": "やくわり",
    "r": "やくわり",
    "m": {
      "en": "role",
      "zh-TW": "役割",
      "zh-CN": "役割",
      "ko": "role",
      "vi": "role",
      "id": "role",
      "es": "role",
      "pt": "role"
    },
    "pos": "noun",
    "ex": "役割について話す"
  },
  {
    "id": "V0786",
    "w": "仕事",
    "r": "しごと",
    "m": {
      "en": "work",
      "zh-TW": "仕事",
      "zh-CN": "仕事",
      "ko": "work",
      "vi": "work",
      "id": "work",
      "es": "work",
      "pt": "work"
    },
    "pos": "adverb",
    "ex": "仕事について話す"
  },
  {
    "id": "V0787",
    "w": "作業",
    "r": "さぎょう",
    "m": {
      "en": "task",
      "zh-TW": "作業",
      "zh-CN": "作業",
      "ko": "task",
      "vi": "task",
      "id": "task",
      "es": "task",
      "pt": "task"
    },
    "pos": "verb-godan",
    "ex": "作業ことができる"
  },
  {
    "id": "V0788",
    "w": "業務",
    "r": "ぎょうむ",
    "m": {
      "en": "business",
      "zh-TW": "業務",
      "zh-CN": "業務",
      "ko": "business",
      "vi": "business",
      "id": "business",
      "es": "business",
      "pt": "business"
    },
    "pos": "verb-godan",
    "ex": "業務ことができる"
  },
  {
    "id": "V0789",
    "w": "しょくぎょう",
    "r": "しょくぎょう",
    "m": {
      "en": "occupation",
      "zh-TW": "職業",
      "zh-CN": "職業",
      "ko": "occupation",
      "vi": "occupation",
      "id": "occupation",
      "es": "occupation",
      "pt": "occupation"
    },
    "pos": "verb-godan",
    "ex": "職業ことができる"
  },
  {
    "id": "V0790",
    "w": "きんむ",
    "r": "きんむ",
    "m": {
      "en": "work",
      "zh-TW": "勤務",
      "zh-CN": "勤務",
      "ko": "work",
      "vi": "work",
      "id": "work",
      "es": "work",
      "pt": "work"
    },
    "pos": "verb-godan",
    "ex": "勤務ことができる"
  },
  {
    "id": "V0791",
    "w": "しゅっきん",
    "r": "しゅっきん",
    "m": {
      "en": "going to work",
      "zh-TW": "出勤",
      "zh-CN": "出勤",
      "ko": "going to work",
      "vi": "going to work",
      "id": "going to work",
      "es": "going to work",
      "pt": "going to work"
    },
    "pos": "noun",
    "ex": "出勤について話す"
  },
  {
    "id": "V0792",
    "w": "たいきん",
    "r": "たいきん",
    "m": {
      "en": "leaving work",
      "zh-TW": "退勤",
      "zh-CN": "退勤",
      "ko": "leaving work",
      "vi": "leaving work",
      "id": "leaving work",
      "es": "leaving work",
      "pt": "leaving work"
    },
    "pos": "noun",
    "ex": "退勤について話す"
  },
  {
    "id": "V0793",
    "w": "ざんぎょう",
    "r": "ざんぎょう",
    "m": {
      "en": "overtime",
      "zh-TW": "残業",
      "zh-CN": "残業",
      "ko": "overtime",
      "vi": "overtime",
      "id": "overtime",
      "es": "overtime",
      "pt": "overtime"
    },
    "pos": "verb-godan",
    "ex": "残業ことができる"
  },
  {
    "id": "V0794",
    "w": "きゅうけい",
    "r": "きゅうけい",
    "m": {
      "en": "break",
      "zh-TW": "休憩",
      "zh-CN": "休憩",
      "ko": "break",
      "vi": "break",
      "id": "break",
      "es": "break",
      "pt": "break"
    },
    "pos": "i-adj",
    "ex": "とても休憩"
  },
  {
    "id": "V0795",
    "w": "休日",
    "r": "きゅうじつ",
    "m": {
      "en": "holiday",
      "zh-TW": "休日",
      "zh-CN": "休日",
      "ko": "holiday",
      "vi": "holiday",
      "id": "holiday",
      "es": "holiday",
      "pt": "holiday"
    },
    "pos": "verb-godan",
    "ex": "休日ことができる"
  },
  {
    "id": "V0796",
    "w": "しゅくじつ",
    "r": "しゅくじつ",
    "m": {
      "en": "national holiday",
      "zh-TW": "祝日",
      "zh-CN": "祝日",
      "ko": "national holiday",
      "vi": "national holiday",
      "id": "national holiday",
      "es": "national holiday",
      "pt": "national holiday"
    },
    "pos": "verb-godan",
    "ex": "祝日ことができる"
  },
  {
    "id": "V0797",
    "w": "れんきゅう",
    "r": "れんきゅう",
    "m": {
      "en": "consecutive holidays",
      "zh-TW": "連休",
      "zh-CN": "連休",
      "ko": "consecutive holidays",
      "vi": "consecutive holidays",
      "id": "consecutive holidays",
      "es": "consecutive holidays",
      "pt": "consecutive holidays"
    },
    "pos": "verb-godan",
    "ex": "連休ことができる"
  },
  {
    "id": "V0798",
    "w": "ゆうきゅう",
    "r": "ゆうきゅう",
    "m": {
      "en": "paid leave",
      "zh-TW": "有給",
      "zh-CN": "有給",
      "ko": "paid leave",
      "vi": "paid leave",
      "id": "paid leave",
      "es": "paid leave",
      "pt": "paid leave"
    },
    "pos": "verb-godan",
    "ex": "有給ことができる"
  },
  {
    "id": "V0799",
    "w": "けっせき",
    "r": "けっせき",
    "m": {
      "en": "absence",
      "zh-TW": "欠席",
      "zh-CN": "欠席",
      "ko": "absence",
      "vi": "absence",
      "id": "absence",
      "es": "absence",
      "pt": "absence"
    },
    "pos": "noun",
    "ex": "欠席について話す"
  },
  {
    "id": "V0800",
    "w": "しゅっせき",
    "r": "しゅっせき",
    "m": {
      "en": "attendance",
      "zh-TW": "出席",
      "zh-CN": "出席",
      "ko": "attendance",
      "vi": "attendance",
      "id": "attendance",
      "es": "attendance",
      "pt": "attendance"
    },
    "pos": "noun",
    "ex": "出席について話す"
  },
  {
    "id": "V0801",
    "w": "もうしこみ",
    "r": "もうしこみ",
    "m": {
      "en": "application",
      "zh-TW": "申込",
      "zh-CN": "申込",
      "ko": "application",
      "vi": "application",
      "id": "application",
      "es": "application",
      "pt": "application"
    },
    "pos": "noun",
    "ex": "申込について話す"
  },
  {
    "id": "V0802",
    "w": "うけつけ",
    "r": "うけつけ",
    "m": {
      "en": "reception",
      "zh-TW": "受付",
      "zh-CN": "受付",
      "ko": "reception",
      "vi": "reception",
      "id": "reception",
      "es": "reception",
      "pt": "reception"
    },
    "pos": "noun",
    "ex": "受付について話す"
  },
  {
    "id": "V0803",
    "w": "てつづき",
    "r": "てつづき",
    "m": {
      "en": "procedure",
      "zh-TW": "手続き",
      "zh-CN": "手続き",
      "ko": "procedure",
      "vi": "procedure",
      "id": "procedure",
      "es": "procedure",
      "pt": "procedure"
    },
    "pos": "noun",
    "ex": "手続きについて話す"
  },
  {
    "id": "V0804",
    "w": "しりょう",
    "r": "しりょう",
    "m": {
      "en": "material",
      "zh-TW": "資料",
      "zh-CN": "資料",
      "ko": "material",
      "vi": "material",
      "id": "material",
      "es": "material",
      "pt": "material"
    },
    "pos": "verb-godan",
    "ex": "資料ことができる",
    "syn": [
      "データ",
      "書類",
      "文書"
    ]
  },
  {
    "id": "V0805",
    "w": "けいたい",
    "r": "けいたい",
    "m": {
      "en": "mobile",
      "zh-TW": "携帯",
      "zh-CN": "携帯",
      "ko": "mobile",
      "vi": "mobile",
      "id": "mobile",
      "es": "mobile",
      "pt": "mobile"
    },
    "pos": "i-adj",
    "ex": "とても携帯"
  },
  {
    "id": "V0806",
    "w": "ばんごう",
    "r": "ばんごう",
    "m": {
      "en": "number",
      "zh-TW": "番号",
      "zh-CN": "番号",
      "ko": "number",
      "vi": "number",
      "id": "number",
      "es": "number",
      "pt": "number"
    },
    "pos": "verb-godan",
    "ex": "番号ことができる"
  },
  {
    "id": "V0807",
    "w": "しめい",
    "r": "しめい",
    "m": {
      "en": "name",
      "zh-TW": "氏名",
      "zh-CN": "氏名",
      "ko": "name",
      "vi": "name",
      "id": "name",
      "es": "name",
      "pt": "name"
    },
    "pos": "i-adj",
    "ex": "とても氏名"
  },
  {
    "id": "V0808",
    "w": "せいべつ",
    "r": "せいべつ",
    "m": {
      "en": "gender",
      "zh-TW": "性別",
      "zh-CN": "性別",
      "ko": "gender",
      "vi": "gender",
      "id": "gender",
      "es": "gender",
      "pt": "gender"
    },
    "pos": "verb-godan",
    "ex": "性別ことができる"
  },
  {
    "id": "V0809",
    "w": "生年月日",
    "r": "せいねんがっぴ",
    "m": {
      "en": "date of birth",
      "zh-TW": "生年月日",
      "zh-CN": "生年月日",
      "ko": "date of birth",
      "vi": "date of birth",
      "id": "date of birth",
      "es": "date of birth",
      "pt": "date of birth"
    },
    "pos": "noun",
    "ex": "生年月日について話す"
  },
  {
    "id": "V0810",
    "w": "どくしん",
    "r": "どくしん",
    "m": {
      "en": "single",
      "zh-TW": "独身",
      "zh-CN": "独身",
      "ko": "single",
      "vi": "single",
      "id": "single",
      "es": "single",
      "pt": "single"
    },
    "pos": "noun",
    "ex": "独身について話す"
  },
  {
    "id": "V0811",
    "w": "きこん",
    "r": "きこん",
    "m": {
      "en": "married",
      "zh-TW": "既婚",
      "zh-CN": "既婚",
      "ko": "married",
      "vi": "married",
      "id": "married",
      "es": "married",
      "pt": "married"
    },
    "pos": "noun",
    "ex": "既婚について話す"
  },
  {
    "id": "V0812",
    "w": "りこん",
    "r": "りこん",
    "m": {
      "en": "divorce",
      "zh-TW": "離婚",
      "zh-CN": "離婚",
      "ko": "divorce",
      "vi": "divorce",
      "id": "divorce",
      "es": "divorce",
      "pt": "divorce"
    },
    "pos": "noun",
    "ex": "離婚について話す"
  },
  {
    "id": "V0813",
    "w": "こんやく",
    "r": "こんやく",
    "m": {
      "en": "engagement",
      "zh-TW": "婚約",
      "zh-CN": "婚約",
      "ko": "engagement",
      "vi": "engagement",
      "id": "engagement",
      "es": "engagement",
      "pt": "engagement"
    },
    "pos": "verb-godan",
    "ex": "婚約ことができる"
  },
  {
    "id": "V0814",
    "w": "こうさい",
    "r": "こうさい",
    "m": {
      "en": "relationship",
      "zh-TW": "交際",
      "zh-CN": "交際",
      "ko": "relationship",
      "vi": "relationship",
      "id": "relationship",
      "es": "relationship",
      "pt": "relationship"
    },
    "pos": "i-adj",
    "ex": "とても交際"
  },
  {
    "id": "V0815",
    "w": "れんあい",
    "r": "れんあい",
    "m": {
      "en": "romance",
      "zh-TW": "恋愛",
      "zh-CN": "恋愛",
      "ko": "romance",
      "vi": "romance",
      "id": "romance",
      "es": "romance",
      "pt": "romance"
    },
    "pos": "i-adj",
    "ex": "とても恋愛"
  },
  {
    "id": "V0816",
    "w": "ゆうじょう",
    "r": "ゆうじょう",
    "m": {
      "en": "friendship",
      "zh-TW": "友情",
      "zh-CN": "友情",
      "ko": "friendship",
      "vi": "friendship",
      "id": "friendship",
      "es": "friendship",
      "pt": "friendship"
    },
    "pos": "verb-godan",
    "ex": "友情ことができる"
  },
  {
    "id": "V0817",
    "w": "しんらい",
    "r": "しんらい",
    "m": {
      "en": "trust",
      "zh-TW": "信頼",
      "zh-CN": "信頼",
      "ko": "trust",
      "vi": "trust",
      "id": "trust",
      "es": "trust",
      "pt": "trust"
    },
    "pos": "i-adj",
    "ex": "とても信頼"
  },
  {
    "id": "V0818",
    "w": "そんけい",
    "r": "そんけい",
    "m": {
      "en": "respect",
      "zh-TW": "尊敬",
      "zh-CN": "尊敬",
      "ko": "respect",
      "vi": "respect",
      "id": "respect",
      "es": "respect",
      "pt": "respect"
    },
    "pos": "i-adj",
    "ex": "とても尊敬"
  },
  {
    "id": "V0819",
    "w": "かんしゃ",
    "r": "かんしゃ",
    "m": {
      "en": "gratitude",
      "zh-TW": "感謝",
      "zh-CN": "感謝",
      "ko": "gratitude",
      "vi": "gratitude",
      "id": "gratitude",
      "es": "gratitude",
      "pt": "gratitude"
    },
    "pos": "noun",
    "ex": "感謝について話す"
  },
  {
    "id": "V0820",
    "w": "はげます",
    "r": "はげます",
    "m": {
      "en": "to encourage",
      "zh-TW": "励ます",
      "zh-CN": "励ます",
      "ko": "to encourage",
      "vi": "to encourage",
      "id": "to encourage",
      "es": "to encourage",
      "pt": "to encourage"
    },
    "pos": "verb-godan",
    "ex": "励ますことができる"
  },
  {
    "id": "V0821",
    "w": "決心",
    "r": "けっしん",
    "m": {
      "en": "determination",
      "zh-TW": "決心",
      "zh-CN": "決心",
      "ko": "determination",
      "vi": "determination",
      "id": "determination",
      "es": "determination",
      "pt": "determination"
    },
    "pos": "noun",
    "ex": "決心について話す"
  },
  {
    "id": "V0822",
    "w": "かくご",
    "r": "かくご",
    "m": {
      "en": "resolution",
      "zh-TW": "覚悟",
      "zh-CN": "覚悟",
      "ko": "resolution",
      "vi": "resolution",
      "id": "resolution",
      "es": "resolution",
      "pt": "resolution"
    },
    "pos": "noun",
    "ex": "覚悟について話す"
  },
  {
    "id": "V0823",
    "w": "どりょく",
    "r": "どりょく",
    "m": {
      "en": "effort",
      "zh-TW": "努力",
      "zh-CN": "努力",
      "ko": "effort",
      "vi": "effort",
      "id": "effort",
      "es": "effort",
      "pt": "effort"
    },
    "pos": "verb-godan",
    "ex": "努力ことができる",
    "syn": [
      "頑張り",
      "尽力",
      "精進"
    ]
  },
  {
    "id": "V0824",
    "w": "がんばる",
    "r": "がんばる",
    "m": {
      "en": "to do one's best",
      "zh-TW": "頑張る",
      "zh-CN": "頑張る",
      "ko": "to do one's best",
      "vi": "to do one's best",
      "id": "to do one's best",
      "es": "to do one's best",
      "pt": "to do one's best"
    },
    "pos": "verb-godan",
    "ex": "頑張ることができる"
  },
  {
    "id": "V0825",
    "w": "あきらめる",
    "r": "あきらめる",
    "m": {
      "en": "to give up",
      "zh-TW": "諦める",
      "zh-CN": "諦める",
      "ko": "to give up",
      "vi": "to give up",
      "id": "to give up",
      "es": "to give up",
      "pt": "to give up"
    },
    "pos": "verb-ichidan",
    "ex": "諦めることができる"
  },
  {
    "id": "V0826",
    "w": "くりかえす",
    "r": "くりかえす",
    "m": {
      "en": "to repeat",
      "zh-TW": "繰り返す",
      "zh-CN": "繰り返す",
      "ko": "to repeat",
      "vi": "to repeat",
      "id": "to repeat",
      "es": "to repeat",
      "pt": "to repeat"
    },
    "pos": "verb-godan",
    "ex": "繰り返すことができる"
  },
  {
    "id": "V0827",
    "w": "くんれん",
    "r": "くんれん",
    "m": {
      "en": "training",
      "zh-TW": "訓練",
      "zh-CN": "訓練",
      "ko": "training",
      "vi": "training",
      "id": "training",
      "es": "training",
      "pt": "training"
    },
    "pos": "noun",
    "ex": "訓練について話す"
  },
  {
    "id": "V0828",
    "w": "ちしき",
    "r": "ちしき",
    "m": {
      "en": "knowledge",
      "zh-TW": "知識",
      "zh-CN": "知識",
      "ko": "knowledge",
      "vi": "knowledge",
      "id": "knowledge",
      "es": "knowledge",
      "pt": "knowledge"
    },
    "pos": "noun",
    "ex": "知識について話す"
  },
  {
    "id": "V0829",
    "w": "さいのう",
    "r": "さいのう",
    "m": {
      "en": "talent",
      "zh-TW": "才能",
      "zh-CN": "才能",
      "ko": "talent",
      "vi": "talent",
      "id": "talent",
      "es": "talent",
      "pt": "talent"
    },
    "pos": "verb-godan",
    "ex": "才能ことができる"
  },
  {
    "id": "V0830",
    "w": "長所",
    "r": "ちょうしょ",
    "m": {
      "en": "strength",
      "zh-TW": "長所",
      "zh-CN": "長所",
      "ko": "strength",
      "vi": "strength",
      "id": "strength",
      "es": "strength",
      "pt": "strength"
    },
    "pos": "noun",
    "ex": "長所について話す"
  },
  {
    "id": "V0831",
    "w": "短所",
    "r": "たんしょ",
    "m": {
      "en": "weakness",
      "zh-TW": "短所",
      "zh-CN": "短所",
      "ko": "weakness",
      "vi": "weakness",
      "id": "weakness",
      "es": "weakness",
      "pt": "weakness"
    },
    "pos": "noun",
    "ex": "短所について話す"
  },
  {
    "id": "V0832",
    "w": "せいかく",
    "r": "せいかく",
    "m": {
      "en": "personality",
      "zh-TW": "性格",
      "zh-CN": "性格",
      "ko": "personality",
      "vi": "personality",
      "id": "personality",
      "es": "personality",
      "pt": "personality"
    },
    "pos": "verb-godan",
    "ex": "性格ことができる"
  },
  {
    "id": "V0833",
    "w": "たいど",
    "r": "たいど",
    "m": {
      "en": "attitude",
      "zh-TW": "態度",
      "zh-CN": "態度",
      "ko": "attitude",
      "vi": "attitude",
      "id": "attitude",
      "es": "attitude",
      "pt": "attitude"
    },
    "pos": "noun",
    "ex": "態度について話す"
  },
  {
    "id": "V0834",
    "w": "行動",
    "r": "こうどう",
    "m": {
      "en": "behavior",
      "zh-TW": "行動",
      "zh-CN": "行動",
      "ko": "behavior",
      "vi": "behavior",
      "id": "behavior",
      "es": "behavior",
      "pt": "behavior"
    },
    "pos": "verb-godan",
    "ex": "行動ことができる"
  },
  {
    "id": "V0835",
    "w": "関心",
    "r": "かんしん",
    "m": {
      "en": "concern",
      "zh-TW": "関心",
      "zh-CN": "関心",
      "ko": "concern",
      "vi": "concern",
      "id": "concern",
      "es": "concern",
      "pt": "concern"
    },
    "pos": "noun",
    "ex": "関心について話す"
  },
  {
    "id": "V0836",
    "w": "注目",
    "r": "ちゅうもく",
    "m": {
      "en": "attention",
      "zh-TW": "注目",
      "zh-CN": "注目",
      "ko": "attention",
      "vi": "attention",
      "id": "attention",
      "es": "attention",
      "pt": "attention"
    },
    "pos": "verb-godan",
    "ex": "注目ことができる"
  },
  {
    "id": "V0837",
    "w": "集中",
    "r": "しゅうちゅう",
    "m": {
      "en": "concentration",
      "zh-TW": "集中",
      "zh-CN": "集中",
      "ko": "concentration",
      "vi": "concentration",
      "id": "concentration",
      "es": "concentration",
      "pt": "concentration"
    },
    "pos": "verb-godan",
    "ex": "集中ことができる"
  },
  {
    "id": "V0838",
    "w": "しんけん",
    "r": "しんけん",
    "m": {
      "en": "serious",
      "zh-TW": "真剣",
      "zh-CN": "真剣",
      "ko": "serious",
      "vi": "serious",
      "id": "serious",
      "es": "serious",
      "pt": "serious"
    },
    "pos": "noun",
    "ex": "真剣について話す"
  },
  {
    "id": "V0839",
    "w": "本気",
    "r": "ほんき",
    "m": {
      "en": "seriousness",
      "zh-TW": "本気",
      "zh-CN": "本気",
      "ko": "seriousness",
      "vi": "seriousness",
      "id": "seriousness",
      "es": "seriousness",
      "pt": "seriousness"
    },
    "pos": "noun",
    "ex": "本気について話す"
  },
  {
    "id": "V0840",
    "w": "じょうだん",
    "r": "じょうだん",
    "m": {
      "en": "joke",
      "zh-TW": "冗談",
      "zh-CN": "冗談",
      "ko": "joke",
      "vi": "joke",
      "id": "joke",
      "es": "joke",
      "pt": "joke"
    },
    "pos": "noun",
    "ex": "冗談について話す"
  },
  {
    "id": "V0841",
    "w": "わらい",
    "r": "わらい",
    "m": {
      "en": "laughter",
      "zh-TW": "笑い",
      "zh-CN": "笑い",
      "ko": "laughter",
      "vi": "laughter",
      "id": "laughter",
      "es": "laughter",
      "pt": "laughter"
    },
    "pos": "i-adj",
    "ex": "とても笑い"
  },
  {
    "id": "V0842",
    "w": "かんどう",
    "r": "かんどう",
    "m": {
      "en": "emotion",
      "zh-TW": "感動",
      "zh-CN": "感動",
      "ko": "emotion",
      "vi": "emotion",
      "id": "emotion",
      "es": "emotion",
      "pt": "emotion"
    },
    "pos": "verb-godan",
    "ex": "感動ことができる"
  },
  {
    "id": "V0843",
    "w": "かんそう",
    "r": "かんそう",
    "m": {
      "en": "impression",
      "zh-TW": "感想",
      "zh-CN": "感想",
      "ko": "impression",
      "vi": "impression",
      "id": "impression",
      "es": "impression",
      "pt": "impression"
    },
    "pos": "verb-godan",
    "ex": "感想ことができる"
  },
  {
    "id": "V0844",
    "w": "いんしょう",
    "r": "いんしょう",
    "m": {
      "en": "impression",
      "zh-TW": "印象",
      "zh-CN": "印象",
      "ko": "impression",
      "vi": "impression",
      "id": "impression",
      "es": "impression",
      "pt": "impression"
    },
    "pos": "verb-godan",
    "ex": "印象ことができる"
  },
  {
    "id": "V0845",
    "w": "きおく",
    "r": "きおく",
    "m": {
      "en": "memory",
      "zh-TW": "記憶",
      "zh-CN": "記憶",
      "ko": "memory",
      "vi": "memory",
      "id": "memory",
      "es": "memory",
      "pt": "memory"
    },
    "pos": "verb-godan",
    "ex": "記憶ことができる"
  },
  {
    "id": "V0846",
    "w": "思い出",
    "r": "おもいで",
    "m": {
      "en": "memory",
      "zh-TW": "思い出",
      "zh-CN": "思い出",
      "ko": "memory",
      "vi": "memory",
      "id": "memory",
      "es": "memory",
      "pt": "memory"
    },
    "pos": "noun",
    "ex": "思い出について話す"
  },
  {
    "id": "V0847",
    "w": "わすれる",
    "r": "わすれる",
    "m": {
      "en": "to forget",
      "zh-TW": "忘れる",
      "zh-CN": "忘れる",
      "ko": "to forget",
      "vi": "to forget",
      "id": "to forget",
      "es": "to forget",
      "pt": "to forget"
    },
    "pos": "verb-ichidan",
    "ex": "忘れることができる"
  },
  {
    "id": "V0848",
    "w": "覚える",
    "r": "おぼえる",
    "m": {
      "en": "to remember",
      "zh-TW": "覚える",
      "zh-CN": "覚える",
      "ko": "to remember",
      "vi": "to remember",
      "id": "to remember",
      "es": "to remember",
      "pt": "to remember"
    },
    "pos": "verb-ichidan",
    "ex": "覚えることができる"
  },
  {
    "id": "V0849",
    "w": "りかい",
    "r": "りかい",
    "m": {
      "en": "understanding",
      "zh-TW": "理解",
      "zh-CN": "理解",
      "ko": "understanding",
      "vi": "understanding",
      "id": "understanding",
      "es": "understanding",
      "pt": "understanding"
    },
    "pos": "i-adj",
    "ex": "とても理解"
  },
  {
    "id": "V0850",
    "w": "なっとく",
    "r": "なっとく",
    "m": {
      "en": "consent",
      "zh-TW": "納得",
      "zh-CN": "納得",
      "ko": "consent",
      "vi": "consent",
      "id": "consent",
      "es": "consent",
      "pt": "consent"
    },
    "pos": "verb-godan",
    "ex": "納得ことができる"
  },
  {
    "id": "V0851",
    "w": "発言",
    "r": "はつげん",
    "m": {
      "en": "statement",
      "zh-TW": "発言",
      "zh-CN": "発言",
      "ko": "statement",
      "vi": "statement",
      "id": "statement",
      "es": "statement",
      "pt": "statement"
    },
    "pos": "noun",
    "ex": "発言について話す",
    "syn": [
      "話す",
      "述べる",
      "言う"
    ]
  },
  {
    "id": "V0852",
    "w": "かいとう",
    "r": "かいとう",
    "m": {
      "en": "answer",
      "zh-TW": "回答",
      "zh-CN": "回答",
      "ko": "answer",
      "vi": "answer",
      "id": "answer",
      "es": "answer",
      "pt": "answer"
    },
    "pos": "verb-godan",
    "ex": "回答ことができる",
    "syn": [
      "答える",
      "返答する",
      "応答する"
    ]
  },
  {
    "id": "V0853",
    "w": "かいとう",
    "r": "かいとう",
    "m": {
      "en": "solution",
      "zh-TW": "解答",
      "zh-CN": "解答",
      "ko": "solution",
      "vi": "solution",
      "id": "solution",
      "es": "solution",
      "pt": "solution"
    },
    "pos": "verb-godan",
    "ex": "解答ことができる"
  },
  {
    "id": "V0854",
    "w": "せいかい",
    "r": "せいかい",
    "m": {
      "en": "correct answer",
      "zh-TW": "正解",
      "zh-CN": "正解",
      "ko": "correct answer",
      "vi": "correct answer",
      "id": "correct answer",
      "es": "correct answer",
      "pt": "correct answer"
    },
    "pos": "i-adj",
    "ex": "とても正解"
  },
  {
    "id": "V0855",
    "w": "ふせいかい",
    "r": "ふせいかい",
    "m": {
      "en": "wrong answer",
      "zh-TW": "不正解",
      "zh-CN": "不正解",
      "ko": "wrong answer",
      "vi": "wrong answer",
      "id": "wrong answer",
      "es": "wrong answer",
      "pt": "wrong answer"
    },
    "pos": "i-adj",
    "ex": "とても不正解"
  },
  {
    "id": "V0856",
    "w": "さいてん",
    "r": "さいてん",
    "m": {
      "en": "grading",
      "zh-TW": "採点",
      "zh-CN": "採点",
      "ko": "grading",
      "vi": "grading",
      "id": "grading",
      "es": "grading",
      "pt": "grading"
    },
    "pos": "noun",
    "ex": "採点について話す"
  },
  {
    "id": "V0857",
    "w": "せいせき",
    "r": "せいせき",
    "m": {
      "en": "grade",
      "zh-TW": "成績",
      "zh-CN": "成績",
      "ko": "grade",
      "vi": "grade",
      "id": "grade",
      "es": "grade",
      "pt": "grade"
    },
    "pos": "noun",
    "ex": "成績について話す"
  },
  {
    "id": "V0858",
    "w": "ごうかく",
    "r": "ごうかく",
    "m": {
      "en": "passing",
      "zh-TW": "合格",
      "zh-CN": "合格",
      "ko": "passing",
      "vi": "passing",
      "id": "passing",
      "es": "passing",
      "pt": "passing"
    },
    "pos": "verb-godan",
    "ex": "合格ことができる"
  },
  {
    "id": "V0859",
    "w": "ふごうかく",
    "r": "ふごうかく",
    "m": {
      "en": "failure",
      "zh-TW": "不合格",
      "zh-CN": "不合格",
      "ko": "failure",
      "vi": "failure",
      "id": "failure",
      "es": "failure",
      "pt": "failure"
    },
    "pos": "verb-godan",
    "ex": "不合格ことができる"
  },
  {
    "id": "V0860",
    "w": "進学",
    "r": "しんがく",
    "m": {
      "en": "advancing",
      "zh-TW": "進学",
      "zh-CN": "進学",
      "ko": "advancing",
      "vi": "advancing",
      "id": "advancing",
      "es": "advancing",
      "pt": "advancing"
    },
    "pos": "verb-godan",
    "ex": "進学ことができる"
  },
  {
    "id": "V0861",
    "w": "しゅうしょく",
    "r": "しゅうしょく",
    "m": {
      "en": "employment",
      "zh-TW": "就職",
      "zh-CN": "就職",
      "ko": "employment",
      "vi": "employment",
      "id": "employment",
      "es": "employment",
      "pt": "employment"
    },
    "pos": "verb-godan",
    "ex": "就職ことができる"
  },
  {
    "id": "V0862",
    "w": "てんしょく",
    "r": "てんしょく",
    "m": {
      "en": "job change",
      "zh-TW": "転職",
      "zh-CN": "転職",
      "ko": "job change",
      "vi": "job change",
      "id": "job change",
      "es": "job change",
      "pt": "job change"
    },
    "pos": "verb-godan",
    "ex": "転職ことができる"
  },
  {
    "id": "V0863",
    "w": "たいしょく",
    "r": "たいしょく",
    "m": {
      "en": "retirement",
      "zh-TW": "退職",
      "zh-CN": "退職",
      "ko": "retirement",
      "vi": "retirement",
      "id": "retirement",
      "es": "retirement",
      "pt": "retirement"
    },
    "pos": "verb-godan",
    "ex": "退職ことができる"
  },
  {
    "id": "V0864",
    "w": "しゅうにゅう",
    "r": "しゅうにゅう",
    "m": {
      "en": "income",
      "zh-TW": "収入",
      "zh-CN": "収入",
      "ko": "income",
      "vi": "income",
      "id": "income",
      "es": "income",
      "pt": "income"
    },
    "pos": "verb-godan",
    "ex": "収入ことができる"
  },
  {
    "id": "V0865",
    "w": "ししゅつ",
    "r": "ししゅつ",
    "m": {
      "en": "expense",
      "zh-TW": "支出",
      "zh-CN": "支出",
      "ko": "expense",
      "vi": "expense",
      "id": "expense",
      "es": "expense",
      "pt": "expense"
    },
    "pos": "verb-godan",
    "ex": "支出ことができる"
  },
  {
    "id": "V0866",
    "w": "ちょちく",
    "r": "ちょちく",
    "m": {
      "en": "savings",
      "zh-TW": "貯蓄",
      "zh-CN": "貯蓄",
      "ko": "savings",
      "vi": "savings",
      "id": "savings",
      "es": "savings",
      "pt": "savings"
    },
    "pos": "verb-godan",
    "ex": "貯蓄ことができる"
  },
  {
    "id": "V0867",
    "w": "とうし",
    "r": "とうし",
    "m": {
      "en": "investment",
      "zh-TW": "投資",
      "zh-CN": "投資",
      "ko": "investment",
      "vi": "investment",
      "id": "investment",
      "es": "investment",
      "pt": "investment"
    },
    "pos": "noun",
    "ex": "投資について話す"
  },
  {
    "id": "V0868",
    "w": "りえき",
    "r": "りえき",
    "m": {
      "en": "profit",
      "zh-TW": "利益",
      "zh-CN": "利益",
      "ko": "profit",
      "vi": "profit",
      "id": "profit",
      "es": "profit",
      "pt": "profit"
    },
    "pos": "noun",
    "ex": "利益について話す"
  },
  {
    "id": "V0869",
    "w": "そんしつ",
    "r": "そんしつ",
    "m": {
      "en": "loss",
      "zh-TW": "損失",
      "zh-CN": "損失",
      "ko": "loss",
      "vi": "loss",
      "id": "loss",
      "es": "loss",
      "pt": "loss"
    },
    "pos": "verb-godan",
    "ex": "損失ことができる"
  },
  {
    "id": "V0870",
    "w": "借金",
    "r": "しゃっきん",
    "m": {
      "en": "debt",
      "zh-TW": "借金",
      "zh-CN": "借金",
      "ko": "debt",
      "vi": "debt",
      "id": "debt",
      "es": "debt",
      "pt": "debt"
    },
    "pos": "noun",
    "ex": "借金について話す"
  },
  {
    "id": "V0871",
    "w": "へんさい",
    "r": "へんさい",
    "m": {
      "en": "repayment",
      "zh-TW": "返済",
      "zh-CN": "返済",
      "ko": "repayment",
      "vi": "repayment",
      "id": "repayment",
      "es": "repayment",
      "pt": "repayment"
    },
    "pos": "i-adj",
    "ex": "とても返済"
  },
  {
    "id": "V0872",
    "w": "せいきゅう",
    "r": "せいきゅう",
    "m": {
      "en": "bill",
      "zh-TW": "請求",
      "zh-CN": "請求",
      "ko": "bill",
      "vi": "bill",
      "id": "bill",
      "es": "bill",
      "pt": "bill"
    },
    "pos": "verb-godan",
    "ex": "請求ことができる"
  },
  {
    "id": "V0873",
    "w": "しはらい",
    "r": "しはらい",
    "m": {
      "en": "payment",
      "zh-TW": "支払い",
      "zh-CN": "支払い",
      "ko": "payment",
      "vi": "payment",
      "id": "payment",
      "es": "payment",
      "pt": "payment"
    },
    "pos": "i-adj",
    "ex": "とても支払い"
  },
  {
    "id": "V0874",
    "w": "げんきん",
    "r": "げんきん",
    "m": {
      "en": "cash",
      "zh-TW": "現金",
      "zh-CN": "現金",
      "ko": "cash",
      "vi": "cash",
      "id": "cash",
      "es": "cash",
      "pt": "cash"
    },
    "pos": "noun",
    "ex": "現金について話す"
  },
  {
    "id": "V0875",
    "w": "こぜに",
    "r": "こぜに",
    "m": {
      "en": "coins",
      "zh-TW": "小銭",
      "zh-CN": "小銭",
      "ko": "coins",
      "vi": "coins",
      "id": "coins",
      "es": "coins",
      "pt": "coins"
    },
    "pos": "adverb",
    "ex": "小銭について話す"
  },
  {
    "id": "V0876",
    "w": "しへい",
    "r": "しへい",
    "m": {
      "en": "bill",
      "zh-TW": "紙幣",
      "zh-CN": "紙幣",
      "ko": "bill",
      "vi": "bill",
      "id": "bill",
      "es": "bill",
      "pt": "bill"
    },
    "pos": "i-adj",
    "ex": "とても紙幣"
  },
  {
    "id": "V0877",
    "w": "りょうがえ",
    "r": "りょうがえ",
    "m": {
      "en": "exchange",
      "zh-TW": "両替",
      "zh-CN": "両替",
      "ko": "exchange",
      "vi": "exchange",
      "id": "exchange",
      "es": "exchange",
      "pt": "exchange"
    },
    "pos": "noun",
    "ex": "両替について話す"
  },
  {
    "id": "V0878",
    "w": "ふりこみ",
    "r": "ふりこみ",
    "m": {
      "en": "transfer",
      "zh-TW": "振込",
      "zh-CN": "振込",
      "ko": "transfer",
      "vi": "transfer",
      "id": "transfer",
      "es": "transfer",
      "pt": "transfer"
    },
    "pos": "noun",
    "ex": "振込について話す"
  },
  {
    "id": "V0879",
    "w": "あずけいれ",
    "r": "あずけいれ",
    "m": {
      "en": "deposit",
      "zh-TW": "預け入れ",
      "zh-CN": "預け入れ",
      "ko": "deposit",
      "vi": "deposit",
      "id": "deposit",
      "es": "deposit",
      "pt": "deposit"
    },
    "pos": "noun",
    "ex": "預け入れについて話す"
  },
  {
    "id": "V0880",
    "w": "こうざ",
    "r": "こうざ",
    "m": {
      "en": "account",
      "zh-TW": "口座",
      "zh-CN": "口座",
      "ko": "account",
      "vi": "account",
      "id": "account",
      "es": "account",
      "pt": "account"
    },
    "pos": "noun",
    "ex": "口座について話す"
  },
  {
    "id": "V0881",
    "w": "あんしょうばんごう",
    "r": "あんしょうばんごう",
    "m": {
      "en": "PIN",
      "zh-TW": "暗証番号",
      "zh-CN": "暗証番号",
      "ko": "PIN",
      "vi": "PIN",
      "id": "PIN",
      "es": "PIN",
      "pt": "PIN"
    },
    "pos": "verb-godan",
    "ex": "暗証番号ことができる"
  },
  {
    "id": "V0882",
    "w": "てすうりょう",
    "r": "てすうりょう",
    "m": {
      "en": "fee",
      "zh-TW": "手数料",
      "zh-CN": "手数料",
      "ko": "fee",
      "vi": "fee",
      "id": "fee",
      "es": "fee",
      "pt": "fee"
    },
    "pos": "verb-godan",
    "ex": "手数料ことができる"
  },
  {
    "id": "V0883",
    "w": "むりょう",
    "r": "むりょう",
    "m": {
      "en": "free",
      "zh-TW": "無料",
      "zh-CN": "無料",
      "ko": "free",
      "vi": "free",
      "id": "free",
      "es": "free",
      "pt": "free"
    },
    "pos": "verb-godan",
    "ex": "無料ことができる"
  },
  {
    "id": "V0884",
    "w": "ゆうりょう",
    "r": "ゆうりょう",
    "m": {
      "en": "paid",
      "zh-TW": "有料",
      "zh-CN": "有料",
      "ko": "paid",
      "vi": "paid",
      "id": "paid",
      "es": "paid",
      "pt": "paid"
    },
    "pos": "verb-godan",
    "ex": "有料ことができる"
  },
  {
    "id": "V0885",
    "w": "かかく",
    "r": "かかく",
    "m": {
      "en": "price",
      "zh-TW": "価格",
      "zh-CN": "価格",
      "ko": "price",
      "vi": "price",
      "id": "price",
      "es": "price",
      "pt": "price"
    },
    "pos": "verb-godan",
    "ex": "価格ことができる"
  },
  {
    "id": "V0886",
    "w": "ていか",
    "r": "ていか",
    "m": {
      "en": "fixed price",
      "zh-TW": "定価",
      "zh-CN": "定価",
      "ko": "fixed price",
      "vi": "fixed price",
      "id": "fixed price",
      "es": "fixed price",
      "pt": "fixed price"
    },
    "pos": "noun",
    "ex": "定価について話す"
  },
  {
    "id": "V0887",
    "w": "割引",
    "r": "わりびき",
    "m": {
      "en": "discount",
      "zh-TW": "割引",
      "zh-CN": "割引",
      "ko": "discount",
      "vi": "discount",
      "id": "discount",
      "es": "discount",
      "pt": "discount"
    },
    "pos": "noun",
    "ex": "割引について話す"
  },
  {
    "id": "V0888",
    "w": "はんがく",
    "r": "はんがく",
    "m": {
      "en": "half price",
      "zh-TW": "半額",
      "zh-CN": "半額",
      "ko": "half price",
      "vi": "half price",
      "id": "half price",
      "es": "half price",
      "pt": "half price"
    },
    "pos": "verb-godan",
    "ex": "半額ことができる"
  },
  {
    "id": "V0889",
    "w": "ぜいこみ",
    "r": "ぜいこみ",
    "m": {
      "en": "tax included",
      "zh-TW": "税込",
      "zh-CN": "税込",
      "ko": "tax included",
      "vi": "tax included",
      "id": "tax included",
      "es": "tax included",
      "pt": "tax included"
    },
    "pos": "noun",
    "ex": "税込について話す"
  },
  {
    "id": "V0890",
    "w": "ぜいぬき",
    "r": "ぜいぬき",
    "m": {
      "en": "excluding tax",
      "zh-TW": "税抜",
      "zh-CN": "税抜",
      "ko": "excluding tax",
      "vi": "excluding tax",
      "id": "excluding tax",
      "es": "excluding tax",
      "pt": "excluding tax"
    },
    "pos": "noun",
    "ex": "税抜について話す"
  },
  {
    "id": "V0891",
    "w": "しょうひぜい",
    "r": "しょうひぜい",
    "m": {
      "en": "consumption tax",
      "zh-TW": "消費税",
      "zh-CN": "消費税",
      "ko": "consumption tax",
      "vi": "consumption tax",
      "id": "consumption tax",
      "es": "consumption tax",
      "pt": "consumption tax"
    },
    "pos": "i-adj",
    "ex": "とても消費税"
  },
  {
    "id": "V0892",
    "w": "りょうしゅうしょ",
    "r": "りょうしゅうしょ",
    "m": {
      "en": "receipt",
      "zh-TW": "領収書",
      "zh-CN": "領収書",
      "ko": "receipt",
      "vi": "receipt",
      "id": "receipt",
      "es": "receipt",
      "pt": "receipt"
    },
    "pos": "noun",
    "ex": "領収書について話す"
  },
  {
    "id": "V0893",
    "w": "レシート",
    "r": "れしーと",
    "m": {
      "en": "receipt",
      "zh-TW": "レシート",
      "zh-CN": "レシート",
      "ko": "receipt",
      "vi": "receipt",
      "id": "receipt",
      "es": "receipt",
      "pt": "receipt"
    },
    "pos": "adverb",
    "ex": "レシートについて話す"
  },
  {
    "id": "V0894",
    "w": "買い物",
    "r": "かいもの",
    "m": {
      "en": "shopping",
      "zh-TW": "買い物",
      "zh-CN": "買い物",
      "ko": "shopping",
      "vi": "shopping",
      "id": "shopping",
      "es": "shopping",
      "pt": "shopping"
    },
    "pos": "noun",
    "ex": "買い物について話す"
  },
  {
    "id": "V0895",
    "w": "こうにゅう",
    "r": "こうにゅう",
    "m": {
      "en": "purchase",
      "zh-TW": "購入",
      "zh-CN": "購入",
      "ko": "purchase",
      "vi": "purchase",
      "id": "purchase",
      "es": "purchase",
      "pt": "purchase"
    },
    "pos": "verb-godan",
    "ex": "購入ことができる",
    "syn": [
      "買う",
      "入手する",
      "手に入れる"
    ]
  },
  {
    "id": "V0896",
    "w": "注文",
    "r": "ちゅうもん",
    "m": {
      "en": "order",
      "zh-TW": "注文",
      "zh-CN": "注文",
      "ko": "order",
      "vi": "order",
      "id": "order",
      "es": "order",
      "pt": "order"
    },
    "pos": "noun",
    "ex": "注文について話す",
    "syn": [
      "オーダーする",
      "頼む",
      "発注する"
    ]
  },
  {
    "id": "V0897",
    "w": "たくはい",
    "r": "たくはい",
    "m": {
      "en": "home delivery",
      "zh-TW": "宅配",
      "zh-CN": "宅配",
      "ko": "home delivery",
      "vi": "home delivery",
      "id": "home delivery",
      "es": "home delivery",
      "pt": "home delivery"
    },
    "pos": "i-adj",
    "ex": "とても宅配"
  },
  {
    "id": "V0898",
    "w": "そうりょう",
    "r": "そうりょう",
    "m": {
      "en": "shipping",
      "zh-TW": "送料",
      "zh-CN": "送料",
      "ko": "shipping",
      "vi": "shipping",
      "id": "shipping",
      "es": "shipping",
      "pt": "shipping"
    },
    "pos": "verb-godan",
    "ex": "送料ことができる"
  },
  {
    "id": "V0899",
    "w": "へんぴん",
    "r": "へんぴん",
    "m": {
      "en": "return",
      "zh-TW": "返品",
      "zh-CN": "返品",
      "ko": "return",
      "vi": "return",
      "id": "return",
      "es": "return",
      "pt": "return"
    },
    "pos": "noun",
    "ex": "返品について話す"
  },
  {
    "id": "V0900",
    "w": "こうかん",
    "r": "こうかん",
    "m": {
      "en": "exchange",
      "zh-TW": "交換",
      "zh-CN": "交換",
      "ko": "exchange",
      "vi": "exchange",
      "id": "exchange",
      "es": "exchange",
      "pt": "exchange"
    },
    "pos": "noun",
    "ex": "交換について話す"
  },
  {
    "id": "V0901",
    "w": "修理",
    "r": "しゅうり",
    "m": {
      "en": "repair",
      "zh-TW": "修理",
      "zh-CN": "修理",
      "ko": "repair",
      "vi": "repair",
      "id": "repair",
      "es": "repair",
      "pt": "repair"
    },
    "pos": "noun",
    "ex": "修理について話す",
    "syn": [
      "直す",
      "修繕する",
      "補修する"
    ]
  },
  {
    "id": "V0902",
    "w": "新品",
    "r": "しんぴん",
    "m": {
      "en": "new item",
      "zh-TW": "新品",
      "zh-CN": "新品",
      "ko": "new item",
      "vi": "new item",
      "id": "new item",
      "es": "new item",
      "pt": "new item"
    },
    "pos": "noun",
    "ex": "新品について話す"
  },
  {
    "id": "V0903",
    "w": "中古",
    "r": "ちゅうこ",
    "m": {
      "en": "used",
      "zh-TW": "中古",
      "zh-CN": "中古",
      "ko": "used",
      "vi": "used",
      "id": "used",
      "es": "used",
      "pt": "used"
    },
    "pos": "noun",
    "ex": "中古について話す"
  },
  {
    "id": "V0904",
    "w": "きげん",
    "r": "きげん",
    "m": {
      "en": "deadline",
      "zh-TW": "期限",
      "zh-CN": "期限",
      "ko": "deadline",
      "vi": "deadline",
      "id": "deadline",
      "es": "deadline",
      "pt": "deadline"
    },
    "pos": "noun",
    "ex": "期限について話す"
  },
  {
    "id": "V0905",
    "w": "有効",
    "r": "ゆうこう",
    "m": {
      "en": "valid",
      "zh-TW": "有効",
      "zh-CN": "有効",
      "ko": "valid",
      "vi": "valid",
      "id": "valid",
      "es": "valid",
      "pt": "valid"
    },
    "pos": "verb-godan",
    "ex": "有効ことができる"
  },
  {
    "id": "V0906",
    "w": "無効",
    "r": "むこう",
    "m": {
      "en": "invalid",
      "zh-TW": "無効",
      "zh-CN": "無効",
      "ko": "invalid",
      "vi": "invalid",
      "id": "invalid",
      "es": "invalid",
      "pt": "invalid"
    },
    "pos": "verb-godan",
    "ex": "無効ことができる"
  },
  {
    "id": "V0907",
    "w": "きかん",
    "r": "きかん",
    "m": {
      "en": "period",
      "zh-TW": "期間",
      "zh-CN": "期間",
      "ko": "period",
      "vi": "period",
      "id": "period",
      "es": "period",
      "pt": "period"
    },
    "pos": "noun",
    "ex": "期間について話す"
  },
  {
    "id": "V0908",
    "w": "にってい",
    "r": "にってい",
    "m": {
      "en": "schedule",
      "zh-TW": "日程",
      "zh-CN": "日程",
      "ko": "schedule",
      "vi": "schedule",
      "id": "schedule",
      "es": "schedule",
      "pt": "schedule"
    },
    "pos": "i-adj",
    "ex": "とても日程"
  },
  {
    "id": "V0909",
    "w": "時間割",
    "r": "じかんわり",
    "m": {
      "en": "timetable",
      "zh-TW": "時間割",
      "zh-CN": "時間割",
      "ko": "timetable",
      "vi": "timetable",
      "id": "timetable",
      "es": "timetable",
      "pt": "timetable"
    },
    "pos": "noun",
    "ex": "時間割について話す"
  },
  {
    "id": "V0910",
    "w": "しめきり",
    "r": "しめきり",
    "m": {
      "en": "deadline",
      "zh-TW": "締め切り",
      "zh-CN": "締め切り",
      "ko": "deadline",
      "vi": "deadline",
      "id": "deadline",
      "es": "deadline",
      "pt": "deadline"
    },
    "pos": "noun",
    "ex": "締め切りについて話す"
  },
  {
    "id": "V0911",
    "w": "えんちょう",
    "r": "えんちょう",
    "m": {
      "en": "extension",
      "zh-TW": "延長",
      "zh-CN": "延長",
      "ko": "extension",
      "vi": "extension",
      "id": "extension",
      "es": "extension",
      "pt": "extension"
    },
    "pos": "verb-godan",
    "ex": "延長ことができる"
  },
  {
    "id": "V0912",
    "w": "たんしゅく",
    "r": "たんしゅく",
    "m": {
      "en": "shortening",
      "zh-TW": "短縮",
      "zh-CN": "短縮",
      "ko": "shortening",
      "vi": "shortening",
      "id": "shortening",
      "es": "shortening",
      "pt": "shortening"
    },
    "pos": "verb-godan",
    "ex": "短縮ことができる"
  },
  {
    "id": "V0913",
    "w": "へんこう",
    "r": "へんこう",
    "m": {
      "en": "change",
      "zh-TW": "変更",
      "zh-CN": "変更",
      "ko": "change",
      "vi": "change",
      "id": "change",
      "es": "change",
      "pt": "change"
    },
    "pos": "verb-godan",
    "ex": "変更ことができる"
  },
  {
    "id": "V0914",
    "w": "ていせい",
    "r": "ていせい",
    "m": {
      "en": "correction",
      "zh-TW": "訂正",
      "zh-CN": "訂正",
      "ko": "correction",
      "vi": "correction",
      "id": "correction",
      "es": "correction",
      "pt": "correction"
    },
    "pos": "i-adj",
    "ex": "とても訂正"
  },
  {
    "id": "V0915",
    "w": "修正",
    "r": "しゅうせい",
    "m": {
      "en": "revision",
      "zh-TW": "修正",
      "zh-CN": "修正",
      "ko": "revision",
      "vi": "revision",
      "id": "revision",
      "es": "revision",
      "pt": "revision"
    },
    "pos": "i-adj",
    "ex": "とても修正"
  },
  {
    "id": "V0916",
    "w": "ついか",
    "r": "ついか",
    "m": {
      "en": "addition",
      "zh-TW": "追加",
      "zh-CN": "追加",
      "ko": "addition",
      "vi": "addition",
      "id": "addition",
      "es": "addition",
      "pt": "addition"
    },
    "pos": "noun",
    "ex": "追加について話す"
  },
  {
    "id": "V0917",
    "w": "さくじょ",
    "r": "さくじょ",
    "m": {
      "en": "deletion",
      "zh-TW": "削除",
      "zh-CN": "削除",
      "ko": "deletion",
      "vi": "deletion",
      "id": "deletion",
      "es": "deletion",
      "pt": "deletion"
    },
    "pos": "noun",
    "ex": "削除について話す"
  },
  {
    "id": "V0918",
    "w": "入力",
    "r": "にゅうりょく",
    "m": {
      "en": "input",
      "zh-TW": "入力",
      "zh-CN": "入力",
      "ko": "input",
      "vi": "input",
      "id": "input",
      "es": "input",
      "pt": "input"
    },
    "pos": "verb-godan",
    "ex": "入力ことができる"
  },
  {
    "id": "V0919",
    "w": "出力",
    "r": "しゅつりょく",
    "m": {
      "en": "output",
      "zh-TW": "出力",
      "zh-CN": "出力",
      "ko": "output",
      "vi": "output",
      "id": "output",
      "es": "output",
      "pt": "output"
    },
    "pos": "verb-godan",
    "ex": "出力ことができる"
  },
  {
    "id": "V0920",
    "w": "けんさく",
    "r": "けんさく",
    "m": {
      "en": "search",
      "zh-TW": "検索",
      "zh-CN": "検索",
      "ko": "search",
      "vi": "search",
      "id": "search",
      "es": "search",
      "pt": "search"
    },
    "pos": "verb-godan",
    "ex": "検索ことができる"
  },
  {
    "id": "V0921",
    "w": "とうろく",
    "r": "とうろく",
    "m": {
      "en": "registration",
      "zh-TW": "登録",
      "zh-CN": "登録",
      "ko": "registration",
      "vi": "registration",
      "id": "registration",
      "es": "registration",
      "pt": "registration"
    },
    "pos": "verb-godan",
    "ex": "登録ことができる"
  },
  {
    "id": "V0922",
    "w": "せってい",
    "r": "せってい",
    "m": {
      "en": "setting",
      "zh-TW": "設定",
      "zh-CN": "設定",
      "ko": "setting",
      "vi": "setting",
      "id": "setting",
      "es": "setting",
      "pt": "setting"
    },
    "pos": "i-adj",
    "ex": "とても設定"
  },
  {
    "id": "V0923",
    "w": "そうさ",
    "r": "そうさ",
    "m": {
      "en": "operation",
      "zh-TW": "操作",
      "zh-CN": "操作",
      "ko": "operation",
      "vi": "operation",
      "id": "operation",
      "es": "operation",
      "pt": "operation"
    },
    "pos": "noun",
    "ex": "操作について話す"
  },
  {
    "id": "V0924",
    "w": "起動",
    "r": "きどう",
    "m": {
      "en": "startup",
      "zh-TW": "起動",
      "zh-CN": "起動",
      "ko": "startup",
      "vi": "startup",
      "id": "startup",
      "es": "startup",
      "pt": "startup"
    },
    "pos": "verb-godan",
    "ex": "起動ことができる"
  },
  {
    "id": "V0925",
    "w": "しゅうりょう",
    "r": "しゅうりょう",
    "m": {
      "en": "end",
      "zh-TW": "終了",
      "zh-CN": "終了",
      "ko": "end",
      "vi": "end",
      "id": "end",
      "es": "end",
      "pt": "end"
    },
    "pos": "verb-godan",
    "ex": "終了ことができる"
  },
  {
    "id": "V0926",
    "w": "再起動",
    "r": "さいきどう",
    "m": {
      "en": "restart",
      "zh-TW": "再起動",
      "zh-CN": "再起動",
      "ko": "restart",
      "vi": "restart",
      "id": "restart",
      "es": "restart",
      "pt": "restart"
    },
    "pos": "verb-godan",
    "ex": "再起動ことができる"
  },
  {
    "id": "V0927",
    "w": "こうしん",
    "r": "こうしん",
    "m": {
      "en": "update",
      "zh-TW": "更新",
      "zh-CN": "更新",
      "ko": "update",
      "vi": "update",
      "id": "update",
      "es": "update",
      "pt": "update"
    },
    "pos": "noun",
    "ex": "更新について話す"
  },
  {
    "id": "V0928",
    "w": "せつぞく",
    "r": "せつぞく",
    "m": {
      "en": "connection",
      "zh-TW": "接続",
      "zh-CN": "接続",
      "ko": "connection",
      "vi": "connection",
      "id": "connection",
      "es": "connection",
      "pt": "connection"
    },
    "pos": "verb-godan",
    "ex": "接続ことができる"
  },
  {
    "id": "V0929",
    "w": "せつだん",
    "r": "せつだん",
    "m": {
      "en": "disconnection",
      "zh-TW": "切断",
      "zh-CN": "切断",
      "ko": "disconnection",
      "vi": "disconnection",
      "id": "disconnection",
      "es": "disconnection",
      "pt": "disconnection"
    },
    "pos": "noun",
    "ex": "切断について話す"
  },
  {
    "id": "V0930",
    "w": "じゅうでん",
    "r": "じゅうでん",
    "m": {
      "en": "charging",
      "zh-TW": "充電",
      "zh-CN": "充電",
      "ko": "charging",
      "vi": "charging",
      "id": "charging",
      "es": "charging",
      "pt": "charging"
    },
    "pos": "noun",
    "ex": "充電について話す"
  },
  {
    "id": "V0931",
    "w": "電池",
    "r": "でんち",
    "m": {
      "en": "battery",
      "zh-TW": "電池",
      "zh-CN": "電池",
      "ko": "battery",
      "vi": "battery",
      "id": "battery",
      "es": "battery",
      "pt": "battery"
    },
    "pos": "noun",
    "ex": "電池について話す"
  },
  {
    "id": "V0932",
    "w": "でんげん",
    "r": "でんげん",
    "m": {
      "en": "power",
      "zh-TW": "電源",
      "zh-CN": "電源",
      "ko": "power",
      "vi": "power",
      "id": "power",
      "es": "power",
      "pt": "power"
    },
    "pos": "noun",
    "ex": "電源について話す"
  },
  {
    "id": "V0933",
    "w": "がめん",
    "r": "がめん",
    "m": {
      "en": "screen",
      "zh-TW": "画面",
      "zh-CN": "画面",
      "ko": "screen",
      "vi": "screen",
      "id": "screen",
      "es": "screen",
      "pt": "screen"
    },
    "pos": "noun",
    "ex": "画面について話す"
  },
  {
    "id": "V0934",
    "w": "ひょうじ",
    "r": "ひょうじ",
    "m": {
      "en": "display",
      "zh-TW": "表示",
      "zh-CN": "表示",
      "ko": "display",
      "vi": "display",
      "id": "display",
      "es": "display",
      "pt": "display"
    },
    "pos": "noun",
    "ex": "表示について話す"
  },
  {
    "id": "V0935",
    "w": "おんりょう",
    "r": "おんりょう",
    "m": {
      "en": "volume",
      "zh-TW": "音量",
      "zh-CN": "音量",
      "ko": "volume",
      "vi": "volume",
      "id": "volume",
      "es": "volume",
      "pt": "volume"
    },
    "pos": "verb-godan",
    "ex": "音量ことができる"
  },
  {
    "id": "V0936",
    "w": "明るさ",
    "r": "あかるさ",
    "m": {
      "en": "brightness",
      "zh-TW": "明るさ",
      "zh-CN": "明るさ",
      "ko": "brightness",
      "vi": "brightness",
      "id": "brightness",
      "es": "brightness",
      "pt": "brightness"
    },
    "pos": "noun",
    "ex": "明るさについて話す"
  },
  {
    "id": "V0937",
    "w": "かくだい",
    "r": "かくだい",
    "m": {
      "en": "enlargement",
      "zh-TW": "拡大",
      "zh-CN": "拡大",
      "ko": "enlargement",
      "vi": "enlargement",
      "id": "enlargement",
      "es": "enlargement",
      "pt": "enlargement"
    },
    "pos": "i-adj",
    "ex": "とても拡大"
  },
  {
    "id": "V0938",
    "w": "しゅくしょう",
    "r": "しゅくしょう",
    "m": {
      "en": "reduction",
      "zh-TW": "縮小",
      "zh-CN": "縮小",
      "ko": "reduction",
      "vi": "reduction",
      "id": "reduction",
      "es": "reduction",
      "pt": "reduction"
    },
    "pos": "verb-godan",
    "ex": "縮小ことができる"
  },
  {
    "id": "V0939",
    "w": "いんさつ",
    "r": "いんさつ",
    "m": {
      "en": "printing",
      "zh-TW": "印刷",
      "zh-CN": "印刷",
      "ko": "printing",
      "vi": "printing",
      "id": "printing",
      "es": "printing",
      "pt": "printing"
    },
    "pos": "verb-godan",
    "ex": "印刷ことができる"
  },
  {
    "id": "V0940",
    "w": "ふくしゃ",
    "r": "ふくしゃ",
    "m": {
      "en": "copying",
      "zh-TW": "複写",
      "zh-CN": "複写",
      "ko": "copying",
      "vi": "copying",
      "id": "copying",
      "es": "copying",
      "pt": "copying"
    },
    "pos": "noun",
    "ex": "複写について話す"
  },
  {
    "id": "V0941",
    "w": "さつえい",
    "r": "さつえい",
    "m": {
      "en": "photography",
      "zh-TW": "撮影",
      "zh-CN": "撮影",
      "ko": "photography",
      "vi": "photography",
      "id": "photography",
      "es": "photography",
      "pt": "photography"
    },
    "pos": "i-adj",
    "ex": "とても撮影"
  },
  {
    "id": "V0942",
    "w": "ろくおん",
    "r": "ろくおん",
    "m": {
      "en": "recording",
      "zh-TW": "録音",
      "zh-CN": "録音",
      "ko": "recording",
      "vi": "recording",
      "id": "recording",
      "es": "recording",
      "pt": "recording"
    },
    "pos": "noun",
    "ex": "録音について話す"
  },
  {
    "id": "V0943",
    "w": "再生",
    "r": "さいせい",
    "m": {
      "en": "playback",
      "zh-TW": "再生",
      "zh-CN": "再生",
      "ko": "playback",
      "vi": "playback",
      "id": "playback",
      "es": "playback",
      "pt": "playback"
    },
    "pos": "i-adj",
    "ex": "とても再生"
  },
  {
    "id": "V0944",
    "w": "いちじていし",
    "r": "いちじていし",
    "m": {
      "en": "pause",
      "zh-TW": "一時停止",
      "zh-CN": "一時停止",
      "ko": "pause",
      "vi": "pause",
      "id": "pause",
      "es": "pause",
      "pt": "pause"
    },
    "pos": "noun",
    "ex": "一時停止について話す"
  },
  {
    "id": "V0945",
    "w": "ていし",
    "r": "ていし",
    "m": {
      "en": "stop",
      "zh-TW": "停止",
      "zh-CN": "停止",
      "ko": "stop",
      "vi": "stop",
      "id": "stop",
      "es": "stop",
      "pt": "stop"
    },
    "pos": "noun",
    "ex": "停止について話す"
  },
  {
    "id": "V0946",
    "w": "開始",
    "r": "かいし",
    "m": {
      "en": "start",
      "zh-TW": "開始",
      "zh-CN": "開始",
      "ko": "start",
      "vi": "start",
      "id": "start",
      "es": "start",
      "pt": "start"
    },
    "pos": "noun",
    "ex": "開始について話す"
  },
  {
    "id": "V0947",
    "w": "かんりょう",
    "r": "かんりょう",
    "m": {
      "en": "completion",
      "zh-TW": "完了",
      "zh-CN": "完了",
      "ko": "completion",
      "vi": "completion",
      "id": "completion",
      "es": "completion",
      "pt": "completion"
    },
    "pos": "verb-godan",
    "ex": "完了ことができる"
  },
  {
    "id": "V0948",
    "w": "進行",
    "r": "しんこう",
    "m": {
      "en": "progress",
      "zh-TW": "進行",
      "zh-CN": "進行",
      "ko": "progress",
      "vi": "progress",
      "id": "progress",
      "es": "progress",
      "pt": "progress"
    },
    "pos": "verb-godan",
    "ex": "進行ことができる"
  },
  {
    "id": "V0949",
    "w": "中止",
    "r": "ちゅうし",
    "m": {
      "en": "cancellation",
      "zh-TW": "中止",
      "zh-CN": "中止",
      "ko": "cancellation",
      "vi": "cancellation",
      "id": "cancellation",
      "es": "cancellation",
      "pt": "cancellation"
    },
    "pos": "noun",
    "ex": "中止について話す"
  },
  {
    "id": "V0950",
    "w": "えんき",
    "r": "えんき",
    "m": {
      "en": "postponement",
      "zh-TW": "延期",
      "zh-CN": "延期",
      "ko": "postponement",
      "vi": "postponement",
      "id": "postponement",
      "es": "postponement",
      "pt": "postponement"
    },
    "pos": "noun",
    "ex": "延期について話す"
  },
  {
    "id": "V0951",
    "w": "じっし",
    "r": "じっし",
    "m": {
      "en": "implementation",
      "zh-TW": "実施",
      "zh-CN": "実施",
      "ko": "implementation",
      "vi": "implementation",
      "id": "implementation",
      "es": "implementation",
      "pt": "implementation"
    },
    "pos": "noun",
    "ex": "実施について話す"
  },
  {
    "id": "V0952",
    "w": "かいさい",
    "r": "かいさい",
    "m": {
      "en": "holding",
      "zh-TW": "開催",
      "zh-CN": "開催",
      "ko": "holding",
      "vi": "holding",
      "id": "holding",
      "es": "holding",
      "pt": "holding"
    },
    "pos": "i-adj",
    "ex": "とても開催"
  },
  {
    "id": "V0953",
    "w": "しゅさい",
    "r": "しゅさい",
    "m": {
      "en": "sponsorship",
      "zh-TW": "主催",
      "zh-CN": "主催",
      "ko": "sponsorship",
      "vi": "sponsorship",
      "id": "sponsorship",
      "es": "sponsorship",
      "pt": "sponsorship"
    },
    "pos": "i-adj",
    "ex": "とても主催"
  },
  {
    "id": "V0954",
    "w": "しゅつえん",
    "r": "しゅつえん",
    "m": {
      "en": "appearance",
      "zh-TW": "出演",
      "zh-CN": "出演",
      "ko": "appearance",
      "vi": "appearance",
      "id": "appearance",
      "es": "appearance",
      "pt": "appearance"
    },
    "pos": "noun",
    "ex": "出演について話す"
  },
  {
    "id": "V0955",
    "w": "かんらん",
    "r": "かんらん",
    "m": {
      "en": "viewing",
      "zh-TW": "観覧",
      "zh-CN": "観覧",
      "ko": "viewing",
      "vi": "viewing",
      "id": "viewing",
      "es": "viewing",
      "pt": "viewing"
    },
    "pos": "noun",
    "ex": "観覧について話す"
  },
  {
    "id": "V0956",
    "w": "見学",
    "r": "けんがく",
    "m": {
      "en": "tour",
      "zh-TW": "見学",
      "zh-CN": "見学",
      "ko": "tour",
      "vi": "tour",
      "id": "tour",
      "es": "tour",
      "pt": "tour"
    },
    "pos": "verb-godan",
    "ex": "見学ことができる"
  },
  {
    "id": "V0957",
    "w": "体験",
    "r": "たいけん",
    "m": {
      "en": "experience",
      "zh-TW": "体験",
      "zh-CN": "体験",
      "ko": "experience",
      "vi": "experience",
      "id": "experience",
      "es": "experience",
      "pt": "experience"
    },
    "pos": "noun",
    "ex": "体験について話す"
  },
  {
    "id": "V0958",
    "w": "試着",
    "r": "しちゃく",
    "m": {
      "en": "fitting",
      "zh-TW": "試着",
      "zh-CN": "試着",
      "ko": "fitting",
      "vi": "fitting",
      "id": "fitting",
      "es": "fitting",
      "pt": "fitting"
    },
    "pos": "verb-godan",
    "ex": "試着ことができる"
  },
  {
    "id": "V0959",
    "w": "試食",
    "r": "ししょく",
    "m": {
      "en": "tasting",
      "zh-TW": "試食",
      "zh-CN": "試食",
      "ko": "tasting",
      "vi": "tasting",
      "id": "tasting",
      "es": "tasting",
      "pt": "tasting"
    },
    "pos": "verb-godan",
    "ex": "試食ことができる"
  },
  {
    "id": "V0960",
    "w": "入場",
    "r": "にゅうじょう",
    "m": {
      "en": "admission",
      "zh-TW": "入場",
      "zh-CN": "入場",
      "ko": "admission",
      "vi": "admission",
      "id": "admission",
      "es": "admission",
      "pt": "admission"
    },
    "pos": "verb-godan",
    "ex": "入場ことができる"
  },
  {
    "id": "V0961",
    "w": "たいじょう",
    "r": "たいじょう",
    "m": {
      "en": "exit",
      "zh-TW": "退場",
      "zh-CN": "退場",
      "ko": "exit",
      "vi": "exit",
      "id": "exit",
      "es": "exit",
      "pt": "exit"
    },
    "pos": "verb-godan",
    "ex": "退場ことができる"
  },
  {
    "id": "V0962",
    "w": "開場",
    "r": "かいじょう",
    "m": {
      "en": "opening",
      "zh-TW": "開場",
      "zh-CN": "開場",
      "ko": "opening",
      "vi": "opening",
      "id": "opening",
      "es": "opening",
      "pt": "opening"
    },
    "pos": "verb-godan",
    "ex": "開場ことができる"
  },
  {
    "id": "V0963",
    "w": "閉場",
    "r": "へいじょう",
    "m": {
      "en": "closing",
      "zh-TW": "閉場",
      "zh-CN": "閉場",
      "ko": "closing",
      "vi": "closing",
      "id": "closing",
      "es": "closing",
      "pt": "closing"
    },
    "pos": "verb-godan",
    "ex": "閉場ことができる"
  },
  {
    "id": "V0964",
    "w": "まんせき",
    "r": "まんせき",
    "m": {
      "en": "full",
      "zh-TW": "満席",
      "zh-CN": "満席",
      "ko": "full",
      "vi": "full",
      "id": "full",
      "es": "full",
      "pt": "full"
    },
    "pos": "noun",
    "ex": "満席について話す"
  },
  {
    "id": "V0965",
    "w": "くうせき",
    "r": "くうせき",
    "m": {
      "en": "empty seat",
      "zh-TW": "空席",
      "zh-CN": "空席",
      "ko": "empty seat",
      "vi": "empty seat",
      "id": "empty seat",
      "es": "empty seat",
      "pt": "empty seat"
    },
    "pos": "noun",
    "ex": "空席について話す"
  },
  {
    "id": "V0966",
    "w": "キャンセル",
    "r": "きゃんせる",
    "m": {
      "en": "cancel",
      "zh-TW": "キャンセル",
      "zh-CN": "キャンセル",
      "ko": "cancel",
      "vi": "cancel",
      "id": "cancel",
      "es": "cancel",
      "pt": "cancel"
    },
    "pos": "verb-ichidan",
    "ex": "キャンセルことができる"
  },
  {
    "id": "V0967",
    "w": "あんない",
    "r": "あんない",
    "m": {
      "en": "guidance",
      "zh-TW": "案内",
      "zh-CN": "案内",
      "ko": "guidance",
      "vi": "guidance",
      "id": "guidance",
      "es": "guidance",
      "pt": "guidance"
    },
    "pos": "i-adj",
    "ex": "とても案内"
  },
  {
    "id": "V0968",
    "w": "まどぐち",
    "r": "まどぐち",
    "m": {
      "en": "counter",
      "zh-TW": "窓口",
      "zh-CN": "窓口",
      "ko": "counter",
      "vi": "counter",
      "id": "counter",
      "es": "counter",
      "pt": "counter"
    },
    "pos": "noun",
    "ex": "窓口について話す"
  },
  {
    "id": "V0969",
    "w": "待合室",
    "r": "まちあいしつ",
    "m": {
      "en": "waiting room",
      "zh-TW": "待合室",
      "zh-CN": "待合室",
      "ko": "waiting room",
      "vi": "waiting room",
      "id": "waiting room",
      "es": "waiting room",
      "pt": "waiting room"
    },
    "pos": "verb-godan",
    "ex": "待合室ことができる"
  },
  {
    "id": "V0970",
    "w": "かいぎしつ",
    "r": "かいぎしつ",
    "m": {
      "en": "meeting room",
      "zh-TW": "会議室",
      "zh-CN": "会議室",
      "ko": "meeting room",
      "vi": "meeting room",
      "id": "meeting room",
      "es": "meeting room",
      "pt": "meeting room"
    },
    "pos": "verb-godan",
    "ex": "会議室ことができる"
  },
  {
    "id": "V0971",
    "w": "きゅうけいしつ",
    "r": "きゅうけいしつ",
    "m": {
      "en": "break room",
      "zh-TW": "休憩室",
      "zh-CN": "休憩室",
      "ko": "break room",
      "vi": "break room",
      "id": "break room",
      "es": "break room",
      "pt": "break room"
    },
    "pos": "verb-godan",
    "ex": "休憩室ことができる"
  },
  {
    "id": "V0972",
    "w": "食堂",
    "r": "しょくどう",
    "m": {
      "en": "cafeteria",
      "zh-TW": "食堂",
      "zh-CN": "食堂",
      "ko": "cafeteria",
      "vi": "cafeteria",
      "id": "cafeteria",
      "es": "cafeteria",
      "pt": "cafeteria"
    },
    "pos": "verb-godan",
    "ex": "食堂ことができる"
  },
  {
    "id": "V0973",
    "w": "売店",
    "r": "ばいてん",
    "m": {
      "en": "shop",
      "zh-TW": "売店",
      "zh-CN": "売店",
      "ko": "shop",
      "vi": "shop",
      "id": "shop",
      "es": "shop",
      "pt": "shop"
    },
    "pos": "noun",
    "ex": "売店について話す"
  },
  {
    "id": "V0974",
    "w": "じどうはんばいき",
    "r": "じどうはんばいき",
    "m": {
      "en": "vending machine",
      "zh-TW": "自動販売機",
      "zh-CN": "自動販売機",
      "ko": "vending machine",
      "vi": "vending machine",
      "id": "vending machine",
      "es": "vending machine",
      "pt": "vending machine"
    },
    "pos": "noun",
    "ex": "自動販売機について話す"
  },
  {
    "id": "V0975",
    "w": "トイレ",
    "r": "といれ",
    "m": {
      "en": "toilet",
      "zh-TW": "トイレ",
      "zh-CN": "トイレ",
      "ko": "toilet",
      "vi": "toilet",
      "id": "toilet",
      "es": "toilet",
      "pt": "toilet"
    },
    "pos": "noun",
    "ex": "トイレについて話す"
  },
  {
    "id": "V0976",
    "w": "せんめんじょ",
    "r": "せんめんじょ",
    "m": {
      "en": "washroom",
      "zh-TW": "洗面所",
      "zh-CN": "洗面所",
      "ko": "washroom",
      "vi": "washroom",
      "id": "washroom",
      "es": "washroom",
      "pt": "washroom"
    },
    "pos": "noun",
    "ex": "洗面所について話す"
  },
  {
    "id": "V0977",
    "w": "こういしつ",
    "r": "こういしつ",
    "m": {
      "en": "changing room",
      "zh-TW": "更衣室",
      "zh-CN": "更衣室",
      "ko": "changing room",
      "vi": "changing room",
      "id": "changing room",
      "es": "changing room",
      "pt": "changing room"
    },
    "pos": "verb-godan",
    "ex": "更衣室ことができる"
  },
  {
    "id": "V0978",
    "w": "ちゅうりんじょう",
    "r": "ちゅうりんじょう",
    "m": {
      "en": "bicycle parking",
      "zh-TW": "駐輪場",
      "zh-CN": "駐輪場",
      "ko": "bicycle parking",
      "vi": "bicycle parking",
      "id": "bicycle parking",
      "es": "bicycle parking",
      "pt": "bicycle parking"
    },
    "pos": "verb-godan",
    "ex": "駐輪場ことができる"
  },
  {
    "id": "V0979",
    "w": "出入口",
    "r": "でいりぐち",
    "m": {
      "en": "entrance/exit",
      "zh-TW": "出入口",
      "zh-CN": "出入口",
      "ko": "entrance/exit",
      "vi": "entrance/exit",
      "id": "entrance/exit",
      "es": "entrance/exit",
      "pt": "entrance/exit"
    },
    "pos": "noun",
    "ex": "出入口について話す"
  },
  {
    "id": "V0980",
    "w": "ひじょうぐち",
    "r": "ひじょうぐち",
    "m": {
      "en": "emergency exit",
      "zh-TW": "非常口",
      "zh-CN": "非常口",
      "ko": "emergency exit",
      "vi": "emergency exit",
      "id": "emergency exit",
      "es": "emergency exit",
      "pt": "emergency exit"
    },
    "pos": "noun",
    "ex": "非常口について話す"
  },
  {
    "id": "V0981",
    "w": "エレベーター",
    "r": "えれべーたー",
    "m": {
      "en": "elevator",
      "zh-TW": "エレベーター",
      "zh-CN": "エレベーター",
      "ko": "elevator",
      "vi": "elevator",
      "id": "elevator",
      "es": "elevator",
      "pt": "elevator"
    },
    "pos": "noun",
    "ex": "エレベーターについて話す"
  },
  {
    "id": "V0982",
    "w": "エスカレーター",
    "r": "えすかれーたー",
    "m": {
      "en": "escalator",
      "zh-TW": "エスカレーター",
      "zh-CN": "エスカレーター",
      "ko": "escalator",
      "vi": "escalator",
      "id": "escalator",
      "es": "escalator",
      "pt": "escalator"
    },
    "pos": "noun",
    "ex": "エスカレーターについて話す"
  },
  {
    "id": "V0983",
    "w": "ろうか",
    "r": "ろうか",
    "m": {
      "en": "corridor",
      "zh-TW": "廊下",
      "zh-CN": "廊下",
      "ko": "corridor",
      "vi": "corridor",
      "id": "corridor",
      "es": "corridor",
      "pt": "corridor"
    },
    "pos": "noun",
    "ex": "廊下について話す"
  },
  {
    "id": "V0984",
    "w": "つうろ",
    "r": "つうろ",
    "m": {
      "en": "passage",
      "zh-TW": "通路",
      "zh-CN": "通路",
      "ko": "passage",
      "vi": "passage",
      "id": "passage",
      "es": "passage",
      "pt": "passage"
    },
    "pos": "noun",
    "ex": "通路について話す"
  },
  {
    "id": "V0985",
    "w": "広場",
    "r": "ひろば",
    "m": {
      "en": "plaza",
      "zh-TW": "広場",
      "zh-CN": "広場",
      "ko": "plaza",
      "vi": "plaza",
      "id": "plaza",
      "es": "plaza",
      "pt": "plaza"
    },
    "pos": "noun",
    "ex": "広場について話す"
  },
  {
    "id": "V0986",
    "w": "運動場",
    "r": "うんどうじょう",
    "m": {
      "en": "playground",
      "zh-TW": "運動場",
      "zh-CN": "運動場",
      "ko": "playground",
      "vi": "playground",
      "id": "playground",
      "es": "playground",
      "pt": "playground"
    },
    "pos": "verb-godan",
    "ex": "運動場ことができる"
  },
  {
    "id": "V0987",
    "w": "体育館",
    "r": "たいいくかん",
    "m": {
      "en": "gymnasium",
      "zh-TW": "体育館",
      "zh-CN": "体育館",
      "ko": "gymnasium",
      "vi": "gymnasium",
      "id": "gymnasium",
      "es": "gymnasium",
      "pt": "gymnasium"
    },
    "pos": "noun",
    "ex": "体育館について話す"
  },
  {
    "id": "V0988",
    "w": "図書館",
    "r": "としょかん",
    "m": {
      "en": "library",
      "zh-TW": "図書館",
      "zh-CN": "図書館",
      "ko": "library",
      "vi": "library",
      "id": "library",
      "es": "library",
      "pt": "library"
    },
    "pos": "noun",
    "ex": "図書館について話す"
  },
  {
    "id": "V0989",
    "w": "びじゅつかん",
    "r": "びじゅつかん",
    "m": {
      "en": "art museum",
      "zh-TW": "美術館",
      "zh-CN": "美術館",
      "ko": "art museum",
      "vi": "art museum",
      "id": "art museum",
      "es": "art museum",
      "pt": "art museum"
    },
    "pos": "noun",
    "ex": "美術館について話す"
  },
  {
    "id": "V0990",
    "w": "水族館",
    "r": "すいぞくかん",
    "m": {
      "en": "aquarium",
      "zh-TW": "水族館",
      "zh-CN": "水族館",
      "ko": "aquarium",
      "vi": "aquarium",
      "id": "aquarium",
      "es": "aquarium",
      "pt": "aquarium"
    },
    "pos": "noun",
    "ex": "水族館について話す"
  },
  {
    "id": "V0991",
    "w": "動物園",
    "r": "どうぶつえん",
    "m": {
      "en": "zoo",
      "zh-TW": "動物園",
      "zh-CN": "動物園",
      "ko": "zoo",
      "vi": "zoo",
      "id": "zoo",
      "es": "zoo",
      "pt": "zoo"
    },
    "pos": "noun",
    "ex": "動物園について話す"
  },
  {
    "id": "V0992",
    "w": "ゆうえんち",
    "r": "ゆうえんち",
    "m": {
      "en": "amusement park",
      "zh-TW": "遊園地",
      "zh-CN": "遊園地",
      "ko": "amusement park",
      "vi": "amusement park",
      "id": "amusement park",
      "es": "amusement park",
      "pt": "amusement park"
    },
    "pos": "noun",
    "ex": "遊園地について話す"
  },
  {
    "id": "V0993",
    "w": "映画館",
    "r": "えいがかん",
    "m": {
      "en": "cinema",
      "zh-TW": "映画館",
      "zh-CN": "映画館",
      "ko": "cinema",
      "vi": "cinema",
      "id": "cinema",
      "es": "cinema",
      "pt": "cinema"
    },
    "pos": "noun",
    "ex": "映画館について話す"
  },
  {
    "id": "V0994",
    "w": "げきじょう",
    "r": "げきじょう",
    "m": {
      "en": "theater",
      "zh-TW": "劇場",
      "zh-CN": "劇場",
      "ko": "theater",
      "vi": "theater",
      "id": "theater",
      "es": "theater",
      "pt": "theater"
    },
    "pos": "verb-godan",
    "ex": "劇場ことができる"
  },
  {
    "id": "V0995",
    "w": "きょうぎじょう",
    "r": "きょうぎじょう",
    "m": {
      "en": "stadium",
      "zh-TW": "競技場",
      "zh-CN": "競技場",
      "ko": "stadium",
      "vi": "stadium",
      "id": "stadium",
      "es": "stadium",
      "pt": "stadium"
    },
    "pos": "verb-godan",
    "ex": "競技場ことができる"
  },
  {
    "id": "V0996",
    "w": "きゅうじょう",
    "r": "きゅうじょう",
    "m": {
      "en": "ballpark",
      "zh-TW": "球場",
      "zh-CN": "球場",
      "ko": "ballpark",
      "vi": "ballpark",
      "id": "ballpark",
      "es": "ballpark",
      "pt": "ballpark"
    },
    "pos": "verb-godan",
    "ex": "球場ことができる"
  },
  {
    "id": "V0997",
    "w": "プール",
    "r": "ぷーる",
    "m": {
      "en": "pool",
      "zh-TW": "プール",
      "zh-CN": "プール",
      "ko": "pool",
      "vi": "pool",
      "id": "pool",
      "es": "pool",
      "pt": "pool"
    },
    "pos": "verb-godan",
    "ex": "プールことができる"
  },
  {
    "id": "V0998",
    "w": "ジム",
    "r": "じむ",
    "m": {
      "en": "gym",
      "zh-TW": "ジム",
      "zh-CN": "ジム",
      "ko": "gym",
      "vi": "gym",
      "id": "gym",
      "es": "gym",
      "pt": "gym"
    },
    "pos": "verb-godan",
    "ex": "ジムことができる"
  },
  {
    "id": "V0999",
    "w": "スポーツクラブ",
    "r": "すぽーつくらぶ",
    "m": {
      "en": "sports club",
      "zh-TW": "スポーツクラブ",
      "zh-CN": "スポーツクラブ",
      "ko": "sports club",
      "vi": "sports club",
      "id": "sports club",
      "es": "sports club",
      "pt": "sports club"
    },
    "pos": "verb-godan",
    "ex": "スポーツクラブことができる"
  },
  {
    "id": "V1000",
    "w": "習い事",
    "r": "ならいごと",
    "m": {
      "en": "lessons",
      "zh-TW": "習い事",
      "zh-CN": "習い事",
      "ko": "lessons",
      "vi": "lessons",
      "id": "lessons",
      "es": "lessons",
      "pt": "lessons"
    },
    "pos": "adverb",
    "ex": "習い事について話す"
  },
  {
    "id": "V1001",
    "w": "じゅく",
    "r": "じゅく",
    "m": {
      "en": "cram school",
      "zh-TW": "塾",
      "zh-CN": "塾",
      "ko": "cram school",
      "vi": "cram school",
      "id": "cram school",
      "es": "cram school",
      "pt": "cram school"
    },
    "pos": "verb-godan",
    "ex": "塾ことができる"
  },
  {
    "id": "V1002",
    "w": "よびこう",
    "r": "よびこう",
    "m": {
      "en": "prep school",
      "zh-TW": "予備校",
      "zh-CN": "予備校",
      "ko": "prep school",
      "vi": "prep school",
      "id": "prep school",
      "es": "prep school",
      "pt": "prep school"
    },
    "pos": "verb-godan",
    "ex": "予備校ことができる"
  },
  {
    "id": "V1003",
    "w": "せんもんがっこう",
    "r": "せんもんがっこう",
    "m": {
      "en": "vocational school",
      "zh-TW": "専門学校",
      "zh-CN": "専門学校",
      "ko": "vocational school",
      "vi": "vocational school",
      "id": "vocational school",
      "es": "vocational school",
      "pt": "vocational school"
    },
    "pos": "verb-godan",
    "ex": "専門学校ことができる"
  },
  {
    "id": "V1004",
    "w": "大学院",
    "r": "だいがくいん",
    "m": {
      "en": "graduate school",
      "zh-TW": "大学院",
      "zh-CN": "大学院",
      "ko": "graduate school",
      "vi": "graduate school",
      "id": "graduate school",
      "es": "graduate school",
      "pt": "graduate school"
    },
    "pos": "noun",
    "ex": "大学院について話す"
  },
  {
    "id": "V1005",
    "w": "研究所",
    "r": "けんきゅうじょ",
    "m": {
      "en": "research institute",
      "zh-TW": "研究所",
      "zh-CN": "研究所",
      "ko": "research institute",
      "vi": "research institute",
      "id": "research institute",
      "es": "research institute",
      "pt": "research institute"
    },
    "pos": "noun",
    "ex": "研究所について話す"
  },
  {
    "id": "V1006",
    "w": "会社",
    "r": "かいしゃ",
    "m": {
      "en": "company",
      "zh-TW": "会社",
      "zh-CN": "会社",
      "ko": "company",
      "vi": "company",
      "id": "company",
      "es": "company",
      "pt": "company"
    },
    "pos": "noun",
    "ex": "会社について話す"
  },
  {
    "id": "V1007",
    "w": "そうこ",
    "r": "そうこ",
    "m": {
      "en": "warehouse",
      "zh-TW": "倉庫",
      "zh-CN": "倉庫",
      "ko": "warehouse",
      "vi": "warehouse",
      "id": "warehouse",
      "es": "warehouse",
      "pt": "warehouse"
    },
    "pos": "noun",
    "ex": "倉庫について話す"
  },
  {
    "id": "V1008",
    "w": "てんぽ",
    "r": "てんぽ",
    "m": {
      "en": "store",
      "zh-TW": "店舗",
      "zh-CN": "店舗",
      "ko": "store",
      "vi": "store",
      "id": "store",
      "es": "store",
      "pt": "store"
    },
    "pos": "noun",
    "ex": "店舗について話す"
  },
  {
    "id": "V1009",
    "w": "本店",
    "r": "ほんてん",
    "m": {
      "en": "head office",
      "zh-TW": "本店",
      "zh-CN": "本店",
      "ko": "head office",
      "vi": "head office",
      "id": "head office",
      "es": "head office",
      "pt": "head office"
    },
    "pos": "noun",
    "ex": "本店について話す"
  },
  {
    "id": "V1010",
    "w": "してん",
    "r": "してん",
    "m": {
      "en": "branch",
      "zh-TW": "支店",
      "zh-CN": "支店",
      "ko": "branch",
      "vi": "branch",
      "id": "branch",
      "es": "branch",
      "pt": "branch"
    },
    "pos": "noun",
    "ex": "支店について話す"
  },
  {
    "id": "V1011",
    "w": "えいぎょうしょ",
    "r": "えいぎょうしょ",
    "m": {
      "en": "sales office",
      "zh-TW": "営業所",
      "zh-CN": "営業所",
      "ko": "sales office",
      "vi": "sales office",
      "id": "sales office",
      "es": "sales office",
      "pt": "sales office"
    },
    "pos": "noun",
    "ex": "営業所について話す"
  },
  {
    "id": "V1012",
    "w": "部門",
    "r": "ぶもん",
    "m": {
      "en": "department",
      "zh-TW": "部門",
      "zh-CN": "部門",
      "ko": "department",
      "vi": "department",
      "id": "department",
      "es": "department",
      "pt": "department"
    },
    "pos": "noun",
    "ex": "部門について話す"
  },
  {
    "id": "V1013",
    "w": "か",
    "r": "か",
    "m": {
      "en": "section",
      "zh-TW": "課",
      "zh-CN": "課",
      "ko": "section",
      "vi": "section",
      "id": "section",
      "es": "section",
      "pt": "section"
    },
    "pos": "noun",
    "ex": "課について話す"
  },
  {
    "id": "V1014",
    "w": "かちょう",
    "r": "かちょう",
    "m": {
      "en": "section chief",
      "zh-TW": "課長",
      "zh-CN": "課長",
      "ko": "section chief",
      "vi": "section chief",
      "id": "section chief",
      "es": "section chief",
      "pt": "section chief"
    },
    "pos": "verb-godan",
    "ex": "課長ことができる"
  },
  {
    "id": "V1015",
    "w": "係長",
    "r": "かかりちょう",
    "m": {
      "en": "chief clerk",
      "zh-TW": "係長",
      "zh-CN": "係長",
      "ko": "chief clerk",
      "vi": "chief clerk",
      "id": "chief clerk",
      "es": "chief clerk",
      "pt": "chief clerk"
    },
    "pos": "verb-godan",
    "ex": "係長ことができる"
  },
  {
    "id": "V1016",
    "w": "しゅにん",
    "r": "しゅにん",
    "m": {
      "en": "supervisor",
      "zh-TW": "主任",
      "zh-CN": "主任",
      "ko": "supervisor",
      "vi": "supervisor",
      "id": "supervisor",
      "es": "supervisor",
      "pt": "supervisor"
    },
    "pos": "noun",
    "ex": "主任について話す"
  },
  {
    "id": "V1017",
    "w": "社員",
    "r": "しゃいん",
    "m": {
      "en": "employee",
      "zh-TW": "社員",
      "zh-CN": "社員",
      "ko": "employee",
      "vi": "employee",
      "id": "employee",
      "es": "employee",
      "pt": "employee"
    },
    "pos": "noun",
    "ex": "社員について話す"
  },
  {
    "id": "V1018",
    "w": "正社員",
    "r": "せいしゃいん",
    "m": {
      "en": "regular employee",
      "zh-TW": "正社員",
      "zh-CN": "正社員",
      "ko": "regular employee",
      "vi": "regular employee",
      "id": "regular employee",
      "es": "regular employee",
      "pt": "regular employee"
    },
    "pos": "noun",
    "ex": "正社員について話す"
  },
  {
    "id": "V1019",
    "w": "はけん",
    "r": "はけん",
    "m": {
      "en": "dispatch",
      "zh-TW": "派遣",
      "zh-CN": "派遣",
      "ko": "dispatch",
      "vi": "dispatch",
      "id": "dispatch",
      "es": "dispatch",
      "pt": "dispatch"
    },
    "pos": "noun",
    "ex": "派遣について話す"
  },
  {
    "id": "V1020",
    "w": "アルバイト",
    "r": "あるばいと",
    "m": {
      "en": "part-time job",
      "zh-TW": "アルバイト",
      "zh-CN": "アルバイト",
      "ko": "part-time job",
      "vi": "part-time job",
      "id": "part-time job",
      "es": "part-time job",
      "pt": "part-time job"
    },
    "pos": "adverb",
    "ex": "アルバイトについて話す"
  },
  {
    "id": "V1021",
    "w": "パート",
    "r": "ぱーと",
    "m": {
      "en": "part-time",
      "zh-TW": "パート",
      "zh-CN": "パート",
      "ko": "part-time",
      "vi": "part-time",
      "id": "part-time",
      "es": "part-time",
      "pt": "part-time"
    },
    "pos": "adverb",
    "ex": "パートについて話す"
  },
  {
    "id": "V1022",
    "w": "めんせつ",
    "r": "めんせつ",
    "m": {
      "en": "interview",
      "zh-TW": "面接",
      "zh-CN": "面接",
      "ko": "interview",
      "vi": "interview",
      "id": "interview",
      "es": "interview",
      "pt": "interview"
    },
    "pos": "verb-godan",
    "ex": "面接ことができる"
  },
  {
    "id": "V1023",
    "w": "さいよう",
    "r": "さいよう",
    "m": {
      "en": "hiring",
      "zh-TW": "採用",
      "zh-CN": "採用",
      "ko": "hiring",
      "vi": "hiring",
      "id": "hiring",
      "es": "hiring",
      "pt": "hiring"
    },
    "pos": "verb-godan",
    "ex": "採用ことができる"
  },
  {
    "id": "V1024",
    "w": "ふさいよう",
    "r": "ふさいよう",
    "m": {
      "en": "rejection",
      "zh-TW": "不採用",
      "zh-CN": "不採用",
      "ko": "rejection",
      "vi": "rejection",
      "id": "rejection",
      "es": "rejection",
      "pt": "rejection"
    },
    "pos": "verb-godan",
    "ex": "不採用ことができる"
  },
  {
    "id": "V1025",
    "w": "ないてい",
    "r": "ないてい",
    "m": {
      "en": "informal offer",
      "zh-TW": "内定",
      "zh-CN": "内定",
      "ko": "informal offer",
      "vi": "informal offer",
      "id": "informal offer",
      "es": "informal offer",
      "pt": "informal offer"
    },
    "pos": "i-adj",
    "ex": "とても内定"
  },
  {
    "id": "V1026",
    "w": "入社",
    "r": "にゅうしゃ",
    "m": {
      "en": "joining company",
      "zh-TW": "入社",
      "zh-CN": "入社",
      "ko": "joining company",
      "vi": "joining company",
      "id": "joining company",
      "es": "joining company",
      "pt": "joining company"
    },
    "pos": "noun",
    "ex": "入社について話す"
  },
  {
    "id": "V1027",
    "w": "研修",
    "r": "けんしゅう",
    "m": {
      "en": "training",
      "zh-TW": "研修",
      "zh-CN": "研修",
      "ko": "training",
      "vi": "training",
      "id": "training",
      "es": "training",
      "pt": "training"
    },
    "pos": "verb-godan",
    "ex": "研修ことができる"
  },
  {
    "id": "V1028",
    "w": "はいぞく",
    "r": "はいぞく",
    "m": {
      "en": "assignment",
      "zh-TW": "配属",
      "zh-CN": "配属",
      "ko": "assignment",
      "vi": "assignment",
      "id": "assignment",
      "es": "assignment",
      "pt": "assignment"
    },
    "pos": "verb-godan",
    "ex": "配属ことができる"
  },
  {
    "id": "V1029",
    "w": "いどう",
    "r": "いどう",
    "m": {
      "en": "transfer",
      "zh-TW": "異動",
      "zh-CN": "異動",
      "ko": "transfer",
      "vi": "transfer",
      "id": "transfer",
      "es": "transfer",
      "pt": "transfer"
    },
    "pos": "verb-godan",
    "ex": "異動ことができる"
  },
  {
    "id": "V1030",
    "w": "しょうしん",
    "r": "しょうしん",
    "m": {
      "en": "promotion",
      "zh-TW": "昇進",
      "zh-CN": "昇進",
      "ko": "promotion",
      "vi": "promotion",
      "id": "promotion",
      "es": "promotion",
      "pt": "promotion"
    },
    "pos": "noun",
    "ex": "昇進について話す"
  },
  {
    "id": "V1031",
    "w": "こうかく",
    "r": "こうかく",
    "m": {
      "en": "demotion",
      "zh-TW": "降格",
      "zh-CN": "降格",
      "ko": "demotion",
      "vi": "demotion",
      "id": "demotion",
      "es": "demotion",
      "pt": "demotion"
    },
    "pos": "verb-godan",
    "ex": "降格ことができる"
  },
  {
    "id": "V1032",
    "w": "かいこ",
    "r": "かいこ",
    "m": {
      "en": "dismissal",
      "zh-TW": "解雇",
      "zh-CN": "解雇",
      "ko": "dismissal",
      "vi": "dismissal",
      "id": "dismissal",
      "es": "dismissal",
      "pt": "dismissal"
    },
    "pos": "noun",
    "ex": "解雇について話す"
  },
  {
    "id": "V1033",
    "w": "じしょく",
    "r": "じしょく",
    "m": {
      "en": "resignation",
      "zh-TW": "辞職",
      "zh-CN": "辞職",
      "ko": "resignation",
      "vi": "resignation",
      "id": "resignation",
      "es": "resignation",
      "pt": "resignation"
    },
    "pos": "verb-godan",
    "ex": "辞職ことができる"
  },
  {
    "id": "V1034",
    "w": "ていねん",
    "r": "ていねん",
    "m": {
      "en": "retirement age",
      "zh-TW": "定年",
      "zh-CN": "定年",
      "ko": "retirement age",
      "vi": "retirement age",
      "id": "retirement age",
      "es": "retirement age",
      "pt": "retirement age"
    },
    "pos": "noun",
    "ex": "定年について話す"
  },
  {
    "id": "V1035",
    "w": "年金",
    "r": "ねんきん",
    "m": {
      "en": "pension",
      "zh-TW": "年金",
      "zh-CN": "年金",
      "ko": "pension",
      "vi": "pension",
      "id": "pension",
      "es": "pension",
      "pt": "pension"
    },
    "pos": "noun",
    "ex": "年金について話す"
  },
  {
    "id": "V1036",
    "w": "てあて",
    "r": "てあて",
    "m": {
      "en": "allowance",
      "zh-TW": "手当",
      "zh-CN": "手当",
      "ko": "allowance",
      "vi": "allowance",
      "id": "allowance",
      "es": "allowance",
      "pt": "allowance"
    },
    "pos": "noun",
    "ex": "手当について話す"
  },
  {
    "id": "V1037",
    "w": "しょうよ",
    "r": "しょうよ",
    "m": {
      "en": "bonus",
      "zh-TW": "賞与",
      "zh-CN": "賞与",
      "ko": "bonus",
      "vi": "bonus",
      "id": "bonus",
      "es": "bonus",
      "pt": "bonus"
    },
    "pos": "noun",
    "ex": "賞与について話す"
  },
  {
    "id": "V1038",
    "w": "ふくりこうせい",
    "r": "ふくりこうせい",
    "m": {
      "en": "benefits",
      "zh-TW": "福利厚生",
      "zh-CN": "福利厚生",
      "ko": "benefits",
      "vi": "benefits",
      "id": "benefits",
      "es": "benefits",
      "pt": "benefits"
    },
    "pos": "i-adj",
    "ex": "とても福利厚生"
  },
  {
    "id": "V1039",
    "w": "ゆうきゅうきゅうか",
    "r": "ゆうきゅうきゅうか",
    "m": {
      "en": "paid vacation",
      "zh-TW": "有給休暇",
      "zh-CN": "有給休暇",
      "ko": "paid vacation",
      "vi": "paid vacation",
      "id": "paid vacation",
      "es": "paid vacation",
      "pt": "paid vacation"
    },
    "pos": "noun",
    "ex": "有給休暇について話す"
  },
  {
    "id": "V1040",
    "w": "産休",
    "r": "さんきゅう",
    "m": {
      "en": "maternity leave",
      "zh-TW": "産休",
      "zh-CN": "産休",
      "ko": "maternity leave",
      "vi": "maternity leave",
      "id": "maternity leave",
      "es": "maternity leave",
      "pt": "maternity leave"
    },
    "pos": "verb-godan",
    "ex": "産休ことができる"
  },
  {
    "id": "V1041",
    "w": "育休",
    "r": "いくきゅう",
    "m": {
      "en": "childcare leave",
      "zh-TW": "育休",
      "zh-CN": "育休",
      "ko": "childcare leave",
      "vi": "childcare leave",
      "id": "childcare leave",
      "es": "childcare leave",
      "pt": "childcare leave"
    },
    "pos": "verb-godan",
    "ex": "育休ことができる"
  },
  {
    "id": "V1042",
    "w": "かいご",
    "r": "かいご",
    "m": {
      "en": "nursing care",
      "zh-TW": "介護",
      "zh-CN": "介護",
      "ko": "nursing care",
      "vi": "nursing care",
      "id": "nursing care",
      "es": "nursing care",
      "pt": "nursing care"
    },
    "pos": "noun",
    "ex": "介護について話す"
  },
  {
    "id": "V1043",
    "w": "病気",
    "r": "びょうき",
    "m": {
      "en": "illness",
      "zh-TW": "病気",
      "zh-CN": "病気",
      "ko": "illness",
      "vi": "illness",
      "id": "illness",
      "es": "illness",
      "pt": "illness"
    },
    "pos": "noun",
    "ex": "病気について話す"
  },
  {
    "id": "V1044",
    "w": "けが",
    "r": "けが",
    "m": {
      "en": "injury",
      "zh-TW": "怪我",
      "zh-CN": "怪我",
      "ko": "injury",
      "vi": "injury",
      "id": "injury",
      "es": "injury",
      "pt": "injury"
    },
    "pos": "noun",
    "ex": "怪我について話す"
  },
  {
    "id": "V1045",
    "w": "けんこう",
    "r": "けんこう",
    "m": {
      "en": "health",
      "zh-TW": "健康",
      "zh-CN": "健康",
      "ko": "health",
      "vi": "health",
      "id": "health",
      "es": "health",
      "pt": "health"
    },
    "pos": "verb-godan",
    "ex": "健康ことができる"
  },
  {
    "id": "V1046",
    "w": "たいちょう",
    "r": "たいちょう",
    "m": {
      "en": "physical condition",
      "zh-TW": "体調",
      "zh-CN": "体調",
      "ko": "physical condition",
      "vi": "physical condition",
      "id": "physical condition",
      "es": "physical condition",
      "pt": "physical condition"
    },
    "pos": "verb-godan",
    "ex": "体調ことができる"
  },
  {
    "id": "V1047",
    "w": "しょうじょう",
    "r": "しょうじょう",
    "m": {
      "en": "symptom",
      "zh-TW": "症状",
      "zh-CN": "症状",
      "ko": "symptom",
      "vi": "symptom",
      "id": "symptom",
      "es": "symptom",
      "pt": "symptom"
    },
    "pos": "verb-godan",
    "ex": "症状ことができる"
  },
  {
    "id": "V1048",
    "w": "しんさつ",
    "r": "しんさつ",
    "m": {
      "en": "examination",
      "zh-TW": "診察",
      "zh-CN": "診察",
      "ko": "examination",
      "vi": "examination",
      "id": "examination",
      "es": "examination",
      "pt": "examination"
    },
    "pos": "verb-godan",
    "ex": "診察ことができる"
  },
  {
    "id": "V1049",
    "w": "ちりょう",
    "r": "ちりょう",
    "m": {
      "en": "treatment",
      "zh-TW": "治療",
      "zh-CN": "治療",
      "ko": "treatment",
      "vi": "treatment",
      "id": "treatment",
      "es": "treatment",
      "pt": "treatment"
    },
    "pos": "verb-godan",
    "ex": "治療ことができる"
  },
  {
    "id": "V1050",
    "w": "しゅじゅつ",
    "r": "しゅじゅつ",
    "m": {
      "en": "surgery",
      "zh-TW": "手術",
      "zh-CN": "手術",
      "ko": "surgery",
      "vi": "surgery",
      "id": "surgery",
      "es": "surgery",
      "pt": "surgery"
    },
    "pos": "verb-godan",
    "ex": "手術ことができる"
  },
  {
    "id": "V1051",
    "w": "たいいん",
    "r": "たいいん",
    "m": {
      "en": "discharge",
      "zh-TW": "退院",
      "zh-CN": "退院",
      "ko": "discharge",
      "vi": "discharge",
      "id": "discharge",
      "es": "discharge",
      "pt": "discharge"
    },
    "pos": "noun",
    "ex": "退院について話す"
  },
  {
    "id": "V1052",
    "w": "通院",
    "r": "つういん",
    "m": {
      "en": "outpatient",
      "zh-TW": "通院",
      "zh-CN": "通院",
      "ko": "outpatient",
      "vi": "outpatient",
      "id": "outpatient",
      "es": "outpatient",
      "pt": "outpatient"
    },
    "pos": "noun",
    "ex": "通院について話す"
  },
  {
    "id": "V1053",
    "w": "しょほう",
    "r": "しょほう",
    "m": {
      "en": "prescription",
      "zh-TW": "処方",
      "zh-CN": "処方",
      "ko": "prescription",
      "vi": "prescription",
      "id": "prescription",
      "es": "prescription",
      "pt": "prescription"
    },
    "pos": "verb-godan",
    "ex": "処方ことができる"
  },
  {
    "id": "V1054",
    "w": "薬",
    "r": "くすり",
    "m": {
      "en": "medicine",
      "zh-TW": "薬",
      "zh-CN": "薬",
      "ko": "medicine",
      "vi": "medicine",
      "id": "medicine",
      "es": "medicine",
      "pt": "medicine"
    },
    "pos": "noun",
    "ex": "薬について話す"
  },
  {
    "id": "V1055",
    "w": "ふくさよう",
    "r": "ふくさよう",
    "m": {
      "en": "side effect",
      "zh-TW": "副作用",
      "zh-CN": "副作用",
      "ko": "side effect",
      "vi": "side effect",
      "id": "side effect",
      "es": "side effect",
      "pt": "side effect"
    },
    "pos": "verb-godan",
    "ex": "副作用ことができる"
  },
  {
    "id": "V1056",
    "w": "アレルギー",
    "r": "あれるぎー",
    "m": {
      "en": "allergy",
      "zh-TW": "アレルギー",
      "zh-CN": "アレルギー",
      "ko": "allergy",
      "vi": "allergy",
      "id": "allergy",
      "es": "allergy",
      "pt": "allergy"
    },
    "pos": "noun",
    "ex": "アレルギーについて話す"
  },
  {
    "id": "V1057",
    "w": "よぼう",
    "r": "よぼう",
    "m": {
      "en": "prevention",
      "zh-TW": "予防",
      "zh-CN": "予防",
      "ko": "prevention",
      "vi": "prevention",
      "id": "prevention",
      "es": "prevention",
      "pt": "prevention"
    },
    "pos": "verb-godan",
    "ex": "予防ことができる"
  },
  {
    "id": "V1058",
    "w": "けんしん",
    "r": "けんしん",
    "m": {
      "en": "checkup",
      "zh-TW": "検診",
      "zh-CN": "検診",
      "ko": "checkup",
      "vi": "checkup",
      "id": "checkup",
      "es": "checkup",
      "pt": "checkup"
    },
    "pos": "noun",
    "ex": "検診について話す"
  },
  {
    "id": "V1059",
    "w": "けんこうしんだん",
    "r": "けんこうしんだん",
    "m": {
      "en": "health examination",
      "zh-TW": "健康診断",
      "zh-CN": "健康診断",
      "ko": "health examination",
      "vi": "health examination",
      "id": "health examination",
      "es": "health examination",
      "pt": "health examination"
    },
    "pos": "noun",
    "ex": "健康診断について話す"
  },
  {
    "id": "V1060",
    "w": "けつあつ",
    "r": "けつあつ",
    "m": {
      "en": "blood pressure",
      "zh-TW": "血圧",
      "zh-CN": "血圧",
      "ko": "blood pressure",
      "vi": "blood pressure",
      "id": "blood pressure",
      "es": "blood pressure",
      "pt": "blood pressure"
    },
    "pos": "verb-godan",
    "ex": "血圧ことができる"
  },
  {
    "id": "V1061",
    "w": "たいおん",
    "r": "たいおん",
    "m": {
      "en": "body temperature",
      "zh-TW": "体温",
      "zh-CN": "体温",
      "ko": "body temperature",
      "vi": "body temperature",
      "id": "body temperature",
      "es": "body temperature",
      "pt": "body temperature"
    },
    "pos": "noun",
    "ex": "体温について話す"
  },
  {
    "id": "V1062",
    "w": "みゃくはく",
    "r": "みゃくはく",
    "m": {
      "en": "pulse",
      "zh-TW": "脈拍",
      "zh-CN": "脈拍",
      "ko": "pulse",
      "vi": "pulse",
      "id": "pulse",
      "es": "pulse",
      "pt": "pulse"
    },
    "pos": "verb-godan",
    "ex": "脈拍ことができる"
  },
  {
    "id": "V1063",
    "w": "しんちょう",
    "r": "しんちょう",
    "m": {
      "en": "height",
      "zh-TW": "身長",
      "zh-CN": "身長",
      "ko": "height",
      "vi": "height",
      "id": "height",
      "es": "height",
      "pt": "height"
    },
    "pos": "verb-godan",
    "ex": "身長ことができる"
  },
  {
    "id": "V1064",
    "w": "体重",
    "r": "たいじゅう",
    "m": {
      "en": "weight",
      "zh-TW": "体重",
      "zh-CN": "体重",
      "ko": "weight",
      "vi": "weight",
      "id": "weight",
      "es": "weight",
      "pt": "weight"
    },
    "pos": "verb-godan",
    "ex": "体重ことができる"
  },
  {
    "id": "V1065",
    "w": "しりょく",
    "r": "しりょく",
    "m": {
      "en": "eyesight",
      "zh-TW": "視力",
      "zh-CN": "視力",
      "ko": "eyesight",
      "vi": "eyesight",
      "id": "eyesight",
      "es": "eyesight",
      "pt": "eyesight"
    },
    "pos": "verb-godan",
    "ex": "視力ことができる"
  },
  {
    "id": "V1066",
    "w": "ちょうりょく",
    "r": "ちょうりょく",
    "m": {
      "en": "hearing",
      "zh-TW": "聴力",
      "zh-CN": "聴力",
      "ko": "hearing",
      "vi": "hearing",
      "id": "hearing",
      "es": "hearing",
      "pt": "hearing"
    },
    "pos": "verb-godan",
    "ex": "聴力ことができる"
  },
  {
    "id": "V1067",
    "w": "歯科",
    "r": "しか",
    "m": {
      "en": "dentistry",
      "zh-TW": "歯科",
      "zh-CN": "歯科",
      "ko": "dentistry",
      "vi": "dentistry",
      "id": "dentistry",
      "es": "dentistry",
      "pt": "dentistry"
    },
    "pos": "noun",
    "ex": "歯科について話す"
  },
  {
    "id": "V1068",
    "w": "がんか",
    "r": "がんか",
    "m": {
      "en": "ophthalmology",
      "zh-TW": "眼科",
      "zh-CN": "眼科",
      "ko": "ophthalmology",
      "vi": "ophthalmology",
      "id": "ophthalmology",
      "es": "ophthalmology",
      "pt": "ophthalmology"
    },
    "pos": "noun",
    "ex": "眼科について話す"
  },
  {
    "id": "V1069",
    "w": "内科",
    "r": "ないか",
    "m": {
      "en": "internal medicine",
      "zh-TW": "内科",
      "zh-CN": "内科",
      "ko": "internal medicine",
      "vi": "internal medicine",
      "id": "internal medicine",
      "es": "internal medicine",
      "pt": "internal medicine"
    },
    "pos": "noun",
    "ex": "内科について話す"
  },
  {
    "id": "V1070",
    "w": "外科",
    "r": "げか",
    "m": {
      "en": "surgery",
      "zh-TW": "外科",
      "zh-CN": "外科",
      "ko": "surgery",
      "vi": "surgery",
      "id": "surgery",
      "es": "surgery",
      "pt": "surgery"
    },
    "pos": "noun",
    "ex": "外科について話す"
  },
  {
    "id": "V1071",
    "w": "小児科",
    "r": "しょうにか",
    "m": {
      "en": "pediatrics",
      "zh-TW": "小児科",
      "zh-CN": "小児科",
      "ko": "pediatrics",
      "vi": "pediatrics",
      "id": "pediatrics",
      "es": "pediatrics",
      "pt": "pediatrics"
    },
    "pos": "noun",
    "ex": "小児科について話す"
  },
  {
    "id": "V1072",
    "w": "さんふじんか",
    "r": "さんふじんか",
    "m": {
      "en": "obstetrics",
      "zh-TW": "産婦人科",
      "zh-CN": "産婦人科",
      "ko": "obstetrics",
      "vi": "obstetrics",
      "id": "obstetrics",
      "es": "obstetrics",
      "pt": "obstetrics"
    },
    "pos": "noun",
    "ex": "産婦人科について話す"
  },
  {
    "id": "V1073",
    "w": "せいしんか",
    "r": "せいしんか",
    "m": {
      "en": "psychiatry",
      "zh-TW": "精神科",
      "zh-CN": "精神科",
      "ko": "psychiatry",
      "vi": "psychiatry",
      "id": "psychiatry",
      "es": "psychiatry",
      "pt": "psychiatry"
    },
    "pos": "noun",
    "ex": "精神科について話す"
  },
  {
    "id": "V1074",
    "w": "ひふか",
    "r": "ひふか",
    "m": {
      "en": "dermatology",
      "zh-TW": "皮膚科",
      "zh-CN": "皮膚科",
      "ko": "dermatology",
      "vi": "dermatology",
      "id": "dermatology",
      "es": "dermatology",
      "pt": "dermatology"
    },
    "pos": "noun",
    "ex": "皮膚科について話す"
  },
  {
    "id": "V1075",
    "w": "じびか",
    "r": "じびか",
    "m": {
      "en": "ENT",
      "zh-TW": "耳鼻科",
      "zh-CN": "耳鼻科",
      "ko": "ENT",
      "vi": "ENT",
      "id": "ENT",
      "es": "ENT",
      "pt": "ENT"
    },
    "pos": "noun",
    "ex": "耳鼻科について話す"
  },
  {
    "id": "V1076",
    "w": "せいけいげか",
    "r": "せいけいげか",
    "m": {
      "en": "orthopedics",
      "zh-TW": "整形外科",
      "zh-CN": "整形外科",
      "ko": "orthopedics",
      "vi": "orthopedics",
      "id": "orthopedics",
      "es": "orthopedics",
      "pt": "orthopedics"
    },
    "pos": "noun",
    "ex": "整形外科について話す"
  },
  {
    "id": "V1077",
    "w": "きゅうきゅう",
    "r": "きゅうきゅう",
    "m": {
      "en": "emergency",
      "zh-TW": "救急",
      "zh-CN": "救急",
      "ko": "emergency",
      "vi": "emergency",
      "id": "emergency",
      "es": "emergency",
      "pt": "emergency"
    },
    "pos": "verb-godan",
    "ex": "救急ことができる"
  },
  {
    "id": "V1078",
    "w": "きゅうきゅうしゃ",
    "r": "きゅうきゅうしゃ",
    "m": {
      "en": "ambulance",
      "zh-TW": "救急車",
      "zh-CN": "救急車",
      "ko": "ambulance",
      "vi": "ambulance",
      "id": "ambulance",
      "es": "ambulance",
      "pt": "ambulance"
    },
    "pos": "noun",
    "ex": "救急車について話す"
  },
  {
    "id": "V1079",
    "w": "しょうぼう",
    "r": "しょうぼう",
    "m": {
      "en": "fire fighting",
      "zh-TW": "消防",
      "zh-CN": "消防",
      "ko": "fire fighting",
      "vi": "fire fighting",
      "id": "fire fighting",
      "es": "fire fighting",
      "pt": "fire fighting"
    },
    "pos": "verb-godan",
    "ex": "消防ことができる"
  },
  {
    "id": "V1080",
    "w": "しょうぼうしゃ",
    "r": "しょうぼうしゃ",
    "m": {
      "en": "fire engine",
      "zh-TW": "消防車",
      "zh-CN": "消防車",
      "ko": "fire engine",
      "vi": "fire engine",
      "id": "fire engine",
      "es": "fire engine",
      "pt": "fire engine"
    },
    "pos": "noun",
    "ex": "消防車について話す"
  },
  {
    "id": "V1081",
    "w": "けいさつ",
    "r": "けいさつ",
    "m": {
      "en": "police",
      "zh-TW": "警察",
      "zh-CN": "警察",
      "ko": "police",
      "vi": "police",
      "id": "police",
      "es": "police",
      "pt": "police"
    },
    "pos": "verb-godan",
    "ex": "警察ことができる"
  },
  {
    "id": "V1082",
    "w": "けいさつかん",
    "r": "けいさつかん",
    "m": {
      "en": "police officer",
      "zh-TW": "警察官",
      "zh-CN": "警察官",
      "ko": "police officer",
      "vi": "police officer",
      "id": "police officer",
      "es": "police officer",
      "pt": "police officer"
    },
    "pos": "noun",
    "ex": "警察官について話す"
  },
  {
    "id": "V1083",
    "w": "交番",
    "r": "こうばん",
    "m": {
      "en": "police box",
      "zh-TW": "交番",
      "zh-CN": "交番",
      "ko": "police box",
      "vi": "police box",
      "id": "police box",
      "es": "police box",
      "pt": "police box"
    },
    "pos": "noun",
    "ex": "交番について話す"
  },
  {
    "id": "V1084",
    "w": "事件",
    "r": "じけん",
    "m": {
      "en": "incident",
      "zh-TW": "事件",
      "zh-CN": "事件",
      "ko": "incident",
      "vi": "incident",
      "id": "incident",
      "es": "incident",
      "pt": "incident"
    },
    "pos": "noun",
    "ex": "事件について話す"
  },
  {
    "id": "V1085",
    "w": "ひがい",
    "r": "ひがい",
    "m": {
      "en": "damage",
      "zh-TW": "被害",
      "zh-CN": "被害",
      "ko": "damage",
      "vi": "damage",
      "id": "damage",
      "es": "damage",
      "pt": "damage"
    },
    "pos": "i-adj",
    "ex": "とても被害"
  },
  {
    "id": "V1086",
    "w": "かがい",
    "r": "かがい",
    "m": {
      "en": "harm",
      "zh-TW": "加害",
      "zh-CN": "加害",
      "ko": "harm",
      "vi": "harm",
      "id": "harm",
      "es": "harm",
      "pt": "harm"
    },
    "pos": "i-adj",
    "ex": "とても加害"
  },
  {
    "id": "V1087",
    "w": "たいほ",
    "r": "たいほ",
    "m": {
      "en": "arrest",
      "zh-TW": "逮捕",
      "zh-CN": "逮捕",
      "ko": "arrest",
      "vi": "arrest",
      "id": "arrest",
      "es": "arrest",
      "pt": "arrest"
    },
    "pos": "noun",
    "ex": "逮捕について話す"
  },
  {
    "id": "V1088",
    "w": "さいばん",
    "r": "さいばん",
    "m": {
      "en": "trial",
      "zh-TW": "裁判",
      "zh-CN": "裁判",
      "ko": "trial",
      "vi": "trial",
      "id": "trial",
      "es": "trial",
      "pt": "trial"
    },
    "pos": "noun",
    "ex": "裁判について話す"
  },
  {
    "id": "V1089",
    "w": "べんごし",
    "r": "べんごし",
    "m": {
      "en": "lawyer",
      "zh-TW": "弁護士",
      "zh-CN": "弁護士",
      "ko": "lawyer",
      "vi": "lawyer",
      "id": "lawyer",
      "es": "lawyer",
      "pt": "lawyer"
    },
    "pos": "noun",
    "ex": "弁護士について話す"
  },
  {
    "id": "V1090",
    "w": "けんさつ",
    "r": "けんさつ",
    "m": {
      "en": "prosecution",
      "zh-TW": "検察",
      "zh-CN": "検察",
      "ko": "prosecution",
      "vi": "prosecution",
      "id": "prosecution",
      "es": "prosecution",
      "pt": "prosecution"
    },
    "pos": "verb-godan",
    "ex": "検察ことができる"
  },
  {
    "id": "V1091",
    "w": "けいむしょ",
    "r": "けいむしょ",
    "m": {
      "en": "prison",
      "zh-TW": "刑務所",
      "zh-CN": "刑務所",
      "ko": "prison",
      "vi": "prison",
      "id": "prison",
      "es": "prison",
      "pt": "prison"
    },
    "pos": "noun",
    "ex": "刑務所について話す"
  },
  {
    "id": "V1092",
    "w": "しゃくほう",
    "r": "しゃくほう",
    "m": {
      "en": "release",
      "zh-TW": "釈放",
      "zh-CN": "釈放",
      "ko": "release",
      "vi": "release",
      "id": "release",
      "es": "release",
      "pt": "release"
    },
    "pos": "verb-godan",
    "ex": "釈放ことができる"
  },
  {
    "id": "V1093",
    "w": "むざい",
    "r": "むざい",
    "m": {
      "en": "innocent",
      "zh-TW": "無罪",
      "zh-CN": "無罪",
      "ko": "innocent",
      "vi": "innocent",
      "id": "innocent",
      "es": "innocent",
      "pt": "innocent"
    },
    "pos": "i-adj",
    "ex": "とても無罪"
  },
  {
    "id": "V1094",
    "w": "ゆうざい",
    "r": "ゆうざい",
    "m": {
      "en": "guilty",
      "zh-TW": "有罪",
      "zh-CN": "有罪",
      "ko": "guilty",
      "vi": "guilty",
      "id": "guilty",
      "es": "guilty",
      "pt": "guilty"
    },
    "pos": "i-adj",
    "ex": "とても有罪"
  },
  {
    "id": "V1095",
    "w": "ばっきん",
    "r": "ばっきん",
    "m": {
      "en": "fine",
      "zh-TW": "罰金",
      "zh-CN": "罰金",
      "ko": "fine",
      "vi": "fine",
      "id": "fine",
      "es": "fine",
      "pt": "fine"
    },
    "pos": "noun",
    "ex": "罰金について話す"
  },
  {
    "id": "V1096",
    "w": "ちょうえき",
    "r": "ちょうえき",
    "m": {
      "en": "imprisonment",
      "zh-TW": "懲役",
      "zh-CN": "懲役",
      "ko": "imprisonment",
      "vi": "imprisonment",
      "id": "imprisonment",
      "es": "imprisonment",
      "pt": "imprisonment"
    },
    "pos": "noun",
    "ex": "懲役について話す"
  },
  {
    "id": "V1097",
    "w": "しけい",
    "r": "しけい",
    "m": {
      "en": "death penalty",
      "zh-TW": "死刑",
      "zh-CN": "死刑",
      "ko": "death penalty",
      "vi": "death penalty",
      "id": "death penalty",
      "es": "death penalty",
      "pt": "death penalty"
    },
    "pos": "i-adj",
    "ex": "とても死刑"
  },
  {
    "id": "V1098",
    "w": "市民",
    "r": "しみん",
    "m": {
      "en": "citizen",
      "zh-TW": "市民",
      "zh-CN": "市民",
      "ko": "citizen",
      "vi": "citizen",
      "id": "citizen",
      "es": "citizen",
      "pt": "citizen"
    },
    "pos": "noun",
    "ex": "市民について話す"
  },
  {
    "id": "V1099",
    "w": "住民",
    "r": "じゅうみん",
    "m": {
      "en": "resident",
      "zh-TW": "住民",
      "zh-CN": "住民",
      "ko": "resident",
      "vi": "resident",
      "id": "resident",
      "es": "resident",
      "pt": "resident"
    },
    "pos": "noun",
    "ex": "住民について話す"
  },
  {
    "id": "V1100",
    "w": "国民",
    "r": "こくみん",
    "m": {
      "en": "nation",
      "zh-TW": "国民",
      "zh-CN": "国民",
      "ko": "nation",
      "vi": "nation",
      "id": "nation",
      "es": "nation",
      "pt": "nation"
    },
    "pos": "noun",
    "ex": "国民について話す"
  },
  {
    "id": "V1101",
    "w": "市長",
    "r": "しちょう",
    "m": {
      "en": "mayor",
      "zh-TW": "市長",
      "zh-CN": "市長",
      "ko": "mayor",
      "vi": "mayor",
      "id": "mayor",
      "es": "mayor",
      "pt": "mayor"
    },
    "pos": "verb-godan",
    "ex": "市長ことができる"
  },
  {
    "id": "V1102",
    "w": "知事",
    "r": "ちじ",
    "m": {
      "en": "governor",
      "zh-TW": "知事",
      "zh-CN": "知事",
      "ko": "governor",
      "vi": "governor",
      "id": "governor",
      "es": "governor",
      "pt": "governor"
    },
    "pos": "noun",
    "ex": "知事について話す"
  },
  {
    "id": "V1103",
    "w": "首相",
    "r": "しゅしょう",
    "m": {
      "en": "prime minister",
      "zh-TW": "首相",
      "zh-CN": "首相",
      "ko": "prime minister",
      "vi": "prime minister",
      "id": "prime minister",
      "es": "prime minister",
      "pt": "prime minister"
    },
    "pos": "verb-godan",
    "ex": "首相ことができる"
  },
  {
    "id": "V1104",
    "w": "だいじん",
    "r": "だいじん",
    "m": {
      "en": "minister",
      "zh-TW": "大臣",
      "zh-CN": "大臣",
      "ko": "minister",
      "vi": "minister",
      "id": "minister",
      "es": "minister",
      "pt": "minister"
    },
    "pos": "noun",
    "ex": "大臣について話す"
  },
  {
    "id": "V1105",
    "w": "せんきょ",
    "r": "せんきょ",
    "m": {
      "en": "election",
      "zh-TW": "選挙",
      "zh-CN": "選挙",
      "ko": "election",
      "vi": "election",
      "id": "election",
      "es": "election",
      "pt": "election"
    },
    "pos": "noun",
    "ex": "選挙について話す"
  },
  {
    "id": "V1106",
    "w": "とうひょう",
    "r": "とうひょう",
    "m": {
      "en": "voting",
      "zh-TW": "投票",
      "zh-CN": "投票",
      "ko": "voting",
      "vi": "voting",
      "id": "voting",
      "es": "voting",
      "pt": "voting"
    },
    "pos": "verb-godan",
    "ex": "投票ことができる"
  },
  {
    "id": "V1107",
    "w": "こうほ",
    "r": "こうほ",
    "m": {
      "en": "candidate",
      "zh-TW": "候補",
      "zh-CN": "候補",
      "ko": "candidate",
      "vi": "candidate",
      "id": "candidate",
      "es": "candidate",
      "pt": "candidate"
    },
    "pos": "noun",
    "ex": "候補について話す"
  },
  {
    "id": "V1108",
    "w": "とうせん",
    "r": "とうせん",
    "m": {
      "en": "elected",
      "zh-TW": "当選",
      "zh-CN": "当選",
      "ko": "elected",
      "vi": "elected",
      "id": "elected",
      "es": "elected",
      "pt": "elected"
    },
    "pos": "noun",
    "ex": "当選について話す"
  },
  {
    "id": "V1109",
    "w": "らくせん",
    "r": "らくせん",
    "m": {
      "en": "defeated",
      "zh-TW": "落選",
      "zh-CN": "落選",
      "ko": "defeated",
      "vi": "defeated",
      "id": "defeated",
      "es": "defeated",
      "pt": "defeated"
    },
    "pos": "noun",
    "ex": "落選について話す"
  },
  {
    "id": "V1110",
    "w": "ぎいん",
    "r": "ぎいん",
    "m": {
      "en": "member of parliament",
      "zh-TW": "議員",
      "zh-CN": "議員",
      "ko": "member of parliament",
      "vi": "member of parliament",
      "id": "member of parliament",
      "es": "member of parliament",
      "pt": "member of parliament"
    },
    "pos": "noun",
    "ex": "議員について話す"
  },
  {
    "id": "V1111",
    "w": "ぎかい",
    "r": "ぎかい",
    "m": {
      "en": "parliament",
      "zh-TW": "議会",
      "zh-CN": "議会",
      "ko": "parliament",
      "vi": "parliament",
      "id": "parliament",
      "es": "parliament",
      "pt": "parliament"
    },
    "pos": "i-adj",
    "ex": "とても議会"
  },
  {
    "id": "V1112",
    "w": "ほうあん",
    "r": "ほうあん",
    "m": {
      "en": "bill",
      "zh-TW": "法案",
      "zh-CN": "法案",
      "ko": "bill",
      "vi": "bill",
      "id": "bill",
      "es": "bill",
      "pt": "bill"
    },
    "pos": "noun",
    "ex": "法案について話す"
  },
  {
    "id": "V1113",
    "w": "かけつ",
    "r": "かけつ",
    "m": {
      "en": "passage",
      "zh-TW": "可決",
      "zh-CN": "可決",
      "ko": "passage",
      "vi": "passage",
      "id": "passage",
      "es": "passage",
      "pt": "passage"
    },
    "pos": "verb-godan",
    "ex": "可決ことができる"
  },
  {
    "id": "V1114",
    "w": "否決",
    "r": "ひけつ",
    "m": {
      "en": "rejection",
      "zh-TW": "否決",
      "zh-CN": "否決",
      "ko": "rejection",
      "vi": "rejection",
      "id": "rejection",
      "es": "rejection",
      "pt": "rejection"
    },
    "pos": "verb-godan",
    "ex": "否決ことができる"
  },
  {
    "id": "V1115",
    "w": "外交",
    "r": "がいこう",
    "m": {
      "en": "diplomacy",
      "zh-TW": "外交",
      "zh-CN": "外交",
      "ko": "diplomacy",
      "vi": "diplomacy",
      "id": "diplomacy",
      "es": "diplomacy",
      "pt": "diplomacy"
    },
    "pos": "verb-godan",
    "ex": "外交ことができる"
  },
  {
    "id": "V1116",
    "w": "大使館",
    "r": "たいしかん",
    "m": {
      "en": "embassy",
      "zh-TW": "大使館",
      "zh-CN": "大使館",
      "ko": "embassy",
      "vi": "embassy",
      "id": "embassy",
      "es": "embassy",
      "pt": "embassy"
    },
    "pos": "noun",
    "ex": "大使館について話す"
  },
  {
    "id": "V1117",
    "w": "りょうじかん",
    "r": "りょうじかん",
    "m": {
      "en": "consulate",
      "zh-TW": "領事館",
      "zh-CN": "領事館",
      "ko": "consulate",
      "vi": "consulate",
      "id": "consulate",
      "es": "consulate",
      "pt": "consulate"
    },
    "pos": "noun",
    "ex": "領事館について話す"
  },
  {
    "id": "V1118",
    "w": "ビザ",
    "r": "びざ",
    "m": {
      "en": "visa",
      "zh-TW": "ビザ",
      "zh-CN": "ビザ",
      "ko": "visa",
      "vi": "visa",
      "id": "visa",
      "es": "visa",
      "pt": "visa"
    },
    "pos": "noun",
    "ex": "ビザについて話す"
  },
  {
    "id": "V1119",
    "w": "パスポート",
    "r": "ぱすぽーと",
    "m": {
      "en": "passport",
      "zh-TW": "パスポート",
      "zh-CN": "パスポート",
      "ko": "passport",
      "vi": "passport",
      "id": "passport",
      "es": "passport",
      "pt": "passport"
    },
    "pos": "adverb",
    "ex": "パスポートについて話す"
  },
  {
    "id": "V1120",
    "w": "入国",
    "r": "にゅうこく",
    "m": {
      "en": "entry",
      "zh-TW": "入国",
      "zh-CN": "入国",
      "ko": "entry",
      "vi": "entry",
      "id": "entry",
      "es": "entry",
      "pt": "entry"
    },
    "pos": "verb-godan",
    "ex": "入国ことができる"
  },
  {
    "id": "V1121",
    "w": "出国",
    "r": "しゅっこく",
    "m": {
      "en": "departure",
      "zh-TW": "出国",
      "zh-CN": "出国",
      "ko": "departure",
      "vi": "departure",
      "id": "departure",
      "es": "departure",
      "pt": "departure"
    },
    "pos": "verb-godan",
    "ex": "出国ことができる"
  },
  {
    "id": "V1122",
    "w": "ぜいかん",
    "r": "ぜいかん",
    "m": {
      "en": "customs",
      "zh-TW": "税関",
      "zh-CN": "税関",
      "ko": "customs",
      "vi": "customs",
      "id": "customs",
      "es": "customs",
      "pt": "customs"
    },
    "pos": "noun",
    "ex": "税関について話す"
  },
  {
    "id": "V1123",
    "w": "しょうひん",
    "r": "しょうひん",
    "m": {
      "en": "product",
      "zh-TW": "商品",
      "zh-CN": "商品",
      "ko": "product",
      "vi": "product",
      "id": "product",
      "es": "product",
      "pt": "product"
    },
    "pos": "noun",
    "ex": "商品について話す"
  },
  {
    "id": "V1124",
    "w": "げんりょう",
    "r": "げんりょう",
    "m": {
      "en": "raw material",
      "zh-TW": "原料",
      "zh-CN": "原料",
      "ko": "raw material",
      "vi": "raw material",
      "id": "raw material",
      "es": "raw material",
      "pt": "raw material"
    },
    "pos": "verb-godan",
    "ex": "原料ことができる"
  },
  {
    "id": "V1125",
    "w": "かんせいひん",
    "r": "かんせいひん",
    "m": {
      "en": "finished product",
      "zh-TW": "完成品",
      "zh-CN": "完成品",
      "ko": "finished product",
      "vi": "finished product",
      "id": "finished product",
      "es": "finished product",
      "pt": "finished product"
    },
    "pos": "noun",
    "ex": "完成品について話す"
  },
  {
    "id": "V1126",
    "w": "ざいこ",
    "r": "ざいこ",
    "m": {
      "en": "inventory",
      "zh-TW": "在庫",
      "zh-CN": "在庫",
      "ko": "inventory",
      "vi": "inventory",
      "id": "inventory",
      "es": "inventory",
      "pt": "inventory"
    },
    "pos": "noun",
    "ex": "在庫について話す"
  },
  {
    "id": "V1127",
    "w": "発注",
    "r": "はっちゅう",
    "m": {
      "en": "order",
      "zh-TW": "発注",
      "zh-CN": "発注",
      "ko": "order",
      "vi": "order",
      "id": "order",
      "es": "order",
      "pt": "order"
    },
    "pos": "verb-godan",
    "ex": "発注ことができる"
  },
  {
    "id": "V1128",
    "w": "のうひん",
    "r": "のうひん",
    "m": {
      "en": "delivery",
      "zh-TW": "納品",
      "zh-CN": "納品",
      "ko": "delivery",
      "vi": "delivery",
      "id": "delivery",
      "es": "delivery",
      "pt": "delivery"
    },
    "pos": "noun",
    "ex": "納品について話す"
  },
  {
    "id": "V1129",
    "w": "ふりょうひん",
    "r": "ふりょうひん",
    "m": {
      "en": "defective",
      "zh-TW": "不良品",
      "zh-CN": "不良品",
      "ko": "defective",
      "vi": "defective",
      "id": "defective",
      "es": "defective",
      "pt": "defective"
    },
    "pos": "noun",
    "ex": "不良品について話す"
  },
  {
    "id": "V1130",
    "w": "けんぴん",
    "r": "けんぴん",
    "m": {
      "en": "inspection",
      "zh-TW": "検品",
      "zh-CN": "検品",
      "ko": "inspection",
      "vi": "inspection",
      "id": "inspection",
      "es": "inspection",
      "pt": "inspection"
    },
    "pos": "noun",
    "ex": "検品について話す"
  },
  {
    "id": "V1131",
    "w": "こんぽう",
    "r": "こんぽう",
    "m": {
      "en": "packing",
      "zh-TW": "梱包",
      "zh-CN": "梱包",
      "ko": "packing",
      "vi": "packing",
      "id": "packing",
      "es": "packing",
      "pt": "packing"
    },
    "pos": "verb-godan",
    "ex": "梱包ことができる"
  },
  {
    "id": "V1132",
    "w": "しゅっか",
    "r": "しゅっか",
    "m": {
      "en": "shipping",
      "zh-TW": "出荷",
      "zh-CN": "出荷",
      "ko": "shipping",
      "vi": "shipping",
      "id": "shipping",
      "es": "shipping",
      "pt": "shipping"
    },
    "pos": "noun",
    "ex": "出荷について話す"
  },
  {
    "id": "V1133",
    "w": "にゅうか",
    "r": "にゅうか",
    "m": {
      "en": "arrival",
      "zh-TW": "入荷",
      "zh-CN": "入荷",
      "ko": "arrival",
      "vi": "arrival",
      "id": "arrival",
      "es": "arrival",
      "pt": "arrival"
    },
    "pos": "noun",
    "ex": "入荷について話す"
  },
  {
    "id": "V1134",
    "w": "品切れ",
    "r": "しなぎれ",
    "m": {
      "en": "out of stock",
      "zh-TW": "品切れ",
      "zh-CN": "品切れ",
      "ko": "out of stock",
      "vi": "out of stock",
      "id": "out of stock",
      "es": "out of stock",
      "pt": "out of stock"
    },
    "pos": "noun",
    "ex": "品切れについて話す"
  },
  {
    "id": "V1135",
    "w": "とりよせ",
    "r": "とりよせ",
    "m": {
      "en": "order",
      "zh-TW": "取り寄せ",
      "zh-CN": "取り寄せ",
      "ko": "order",
      "vi": "order",
      "id": "order",
      "es": "order",
      "pt": "order"
    },
    "pos": "noun",
    "ex": "取り寄せについて話す"
  },
  {
    "id": "V1136",
    "w": "広告",
    "r": "こうこく",
    "m": {
      "en": "advertisement",
      "zh-TW": "広告",
      "zh-CN": "広告",
      "ko": "advertisement",
      "vi": "advertisement",
      "id": "advertisement",
      "es": "advertisement",
      "pt": "advertisement"
    },
    "pos": "verb-godan",
    "ex": "広告ことができる"
  },
  {
    "id": "V1137",
    "w": "せんでん",
    "r": "せんでん",
    "m": {
      "en": "publicity",
      "zh-TW": "宣伝",
      "zh-CN": "宣伝",
      "ko": "publicity",
      "vi": "publicity",
      "id": "publicity",
      "es": "publicity",
      "pt": "publicity"
    },
    "pos": "noun",
    "ex": "宣伝について話す"
  },
  {
    "id": "V1138",
    "w": "キャンペーン",
    "r": "きゃんぺーん",
    "m": {
      "en": "campaign",
      "zh-TW": "キャンペーン",
      "zh-CN": "キャンペーン",
      "ko": "campaign",
      "vi": "campaign",
      "id": "campaign",
      "es": "campaign",
      "pt": "campaign"
    },
    "pos": "noun",
    "ex": "キャンペーンについて話す"
  },
  {
    "id": "V1139",
    "w": "はんそく",
    "r": "はんそく",
    "m": {
      "en": "promotion",
      "zh-TW": "販促",
      "zh-CN": "販促",
      "ko": "promotion",
      "vi": "promotion",
      "id": "promotion",
      "es": "promotion",
      "pt": "promotion"
    },
    "pos": "verb-godan",
    "ex": "販促ことができる"
  },
  {
    "id": "V1140",
    "w": "売上",
    "r": "うりあげ",
    "m": {
      "en": "sales",
      "zh-TW": "売上",
      "zh-CN": "売上",
      "ko": "sales",
      "vi": "sales",
      "id": "sales",
      "es": "sales",
      "pt": "sales"
    },
    "pos": "noun",
    "ex": "売上について話す"
  },
  {
    "id": "V1141",
    "w": "赤字",
    "r": "あかじ",
    "m": {
      "en": "deficit",
      "zh-TW": "赤字",
      "zh-CN": "赤字",
      "ko": "deficit",
      "vi": "deficit",
      "id": "deficit",
      "es": "deficit",
      "pt": "deficit"
    },
    "pos": "noun",
    "ex": "赤字について話す"
  },
  {
    "id": "V1142",
    "w": "黒字",
    "r": "くろじ",
    "m": {
      "en": "surplus",
      "zh-TW": "黒字",
      "zh-CN": "黒字",
      "ko": "surplus",
      "vi": "surplus",
      "id": "surplus",
      "es": "surplus",
      "pt": "surplus"
    },
    "pos": "noun",
    "ex": "黒字について話す"
  },
  {
    "id": "V1143",
    "w": "けいひ",
    "r": "けいひ",
    "m": {
      "en": "expense",
      "zh-TW": "経費",
      "zh-CN": "経費",
      "ko": "expense",
      "vi": "expense",
      "id": "expense",
      "es": "expense",
      "pt": "expense"
    },
    "pos": "noun",
    "ex": "経費について話す"
  },
  {
    "id": "V1144",
    "w": "コスト",
    "r": "こすと",
    "m": {
      "en": "cost",
      "zh-TW": "コスト",
      "zh-CN": "コスト",
      "ko": "cost",
      "vi": "cost",
      "id": "cost",
      "es": "cost",
      "pt": "cost"
    },
    "pos": "adverb",
    "ex": "コストについて話す"
  },
  {
    "id": "V1145",
    "w": "予算",
    "r": "よさん",
    "m": {
      "en": "budget",
      "zh-TW": "予算",
      "zh-CN": "予算",
      "ko": "budget",
      "vi": "budget",
      "id": "budget",
      "es": "budget",
      "pt": "budget"
    },
    "pos": "noun",
    "ex": "予算について話す"
  },
  {
    "id": "V1146",
    "w": "決算",
    "r": "けっさん",
    "m": {
      "en": "settlement",
      "zh-TW": "決算",
      "zh-CN": "決算",
      "ko": "settlement",
      "vi": "settlement",
      "id": "settlement",
      "es": "settlement",
      "pt": "settlement"
    },
    "pos": "noun",
    "ex": "決算について話す"
  },
  {
    "id": "V1147",
    "w": "会計",
    "r": "かいけい",
    "m": {
      "en": "accounting",
      "zh-TW": "会計",
      "zh-CN": "会計",
      "ko": "accounting",
      "vi": "accounting",
      "id": "accounting",
      "es": "accounting",
      "pt": "accounting"
    },
    "pos": "i-adj",
    "ex": "とても会計"
  },
  {
    "id": "V1148",
    "w": "かんさ",
    "r": "かんさ",
    "m": {
      "en": "audit",
      "zh-TW": "監査",
      "zh-CN": "監査",
      "ko": "audit",
      "vi": "audit",
      "id": "audit",
      "es": "audit",
      "pt": "audit"
    },
    "pos": "noun",
    "ex": "監査について話す"
  },
  {
    "id": "V1149",
    "w": "ぜいきん",
    "r": "ぜいきん",
    "m": {
      "en": "tax",
      "zh-TW": "税金",
      "zh-CN": "税金",
      "ko": "tax",
      "vi": "tax",
      "id": "tax",
      "es": "tax",
      "pt": "tax"
    },
    "pos": "noun",
    "ex": "税金について話す"
  },
  {
    "id": "V1150",
    "w": "かくていしんこく",
    "r": "かくていしんこく",
    "m": {
      "en": "tax return",
      "zh-TW": "確定申告",
      "zh-CN": "確定申告",
      "ko": "tax return",
      "vi": "tax return",
      "id": "tax return",
      "es": "tax return",
      "pt": "tax return"
    },
    "pos": "verb-godan",
    "ex": "確定申告ことができる"
  },
  {
    "id": "V1151",
    "w": "せつぜい",
    "r": "せつぜい",
    "m": {
      "en": "tax saving",
      "zh-TW": "節税",
      "zh-CN": "節税",
      "ko": "tax saving",
      "vi": "tax saving",
      "id": "tax saving",
      "es": "tax saving",
      "pt": "tax saving"
    },
    "pos": "i-adj",
    "ex": "とても節税"
  },
  {
    "id": "V1152",
    "w": "だつぜい",
    "r": "だつぜい",
    "m": {
      "en": "tax evasion",
      "zh-TW": "脱税",
      "zh-CN": "脱税",
      "ko": "tax evasion",
      "vi": "tax evasion",
      "id": "tax evasion",
      "es": "tax evasion",
      "pt": "tax evasion"
    },
    "pos": "i-adj",
    "ex": "とても脱税"
  },
  {
    "id": "V1153",
    "w": "そうぞく",
    "r": "そうぞく",
    "m": {
      "en": "inheritance",
      "zh-TW": "相続",
      "zh-CN": "相続",
      "ko": "inheritance",
      "vi": "inheritance",
      "id": "inheritance",
      "es": "inheritance",
      "pt": "inheritance"
    },
    "pos": "verb-godan",
    "ex": "相続ことができる"
  },
  {
    "id": "V1154",
    "w": "いさん",
    "r": "いさん",
    "m": {
      "en": "legacy",
      "zh-TW": "遺産",
      "zh-CN": "遺産",
      "ko": "legacy",
      "vi": "legacy",
      "id": "legacy",
      "es": "legacy",
      "pt": "legacy"
    },
    "pos": "noun",
    "ex": "遺産について話す"
  },
  {
    "id": "V1155",
    "w": "ざいさん",
    "r": "ざいさん",
    "m": {
      "en": "property",
      "zh-TW": "財産",
      "zh-CN": "財産",
      "ko": "property",
      "vi": "property",
      "id": "property",
      "es": "property",
      "pt": "property"
    },
    "pos": "noun",
    "ex": "財産について話す"
  },
  {
    "id": "V1156",
    "w": "しさん",
    "r": "しさん",
    "m": {
      "en": "assets",
      "zh-TW": "資産",
      "zh-CN": "資産",
      "ko": "assets",
      "vi": "assets",
      "id": "assets",
      "es": "assets",
      "pt": "assets"
    },
    "pos": "noun",
    "ex": "資産について話す"
  },
  {
    "id": "V1157",
    "w": "ふさい",
    "r": "ふさい",
    "m": {
      "en": "liability",
      "zh-TW": "負債",
      "zh-CN": "負債",
      "ko": "liability",
      "vi": "liability",
      "id": "liability",
      "es": "liability",
      "pt": "liability"
    },
    "pos": "i-adj",
    "ex": "とても負債"
  },
  {
    "id": "V1158",
    "w": "ローン",
    "r": "ろーん",
    "m": {
      "en": "loan",
      "zh-TW": "ローン",
      "zh-CN": "ローン",
      "ko": "loan",
      "vi": "loan",
      "id": "loan",
      "es": "loan",
      "pt": "loan"
    },
    "pos": "noun",
    "ex": "ローンについて話す"
  },
  {
    "id": "V1159",
    "w": "じゅうたくろーん",
    "r": "じゅうたくろーん",
    "m": {
      "en": "mortgage",
      "zh-TW": "住宅ローン",
      "zh-CN": "住宅ローン",
      "ko": "mortgage",
      "vi": "mortgage",
      "id": "mortgage",
      "es": "mortgage",
      "pt": "mortgage"
    },
    "pos": "noun",
    "ex": "住宅ローンについて話す"
  },
  {
    "id": "V1160",
    "w": "頭金",
    "r": "あたまきん",
    "m": {
      "en": "down payment",
      "zh-TW": "頭金",
      "zh-CN": "頭金",
      "ko": "down payment",
      "vi": "down payment",
      "id": "down payment",
      "es": "down payment",
      "pt": "down payment"
    },
    "pos": "noun",
    "ex": "頭金について話す"
  },
  {
    "id": "V1161",
    "w": "ぶんかつばらい",
    "r": "ぶんかつばらい",
    "m": {
      "en": "installment",
      "zh-TW": "分割払い",
      "zh-CN": "分割払い",
      "ko": "installment",
      "vi": "installment",
      "id": "installment",
      "es": "installment",
      "pt": "installment"
    },
    "pos": "i-adj",
    "ex": "とても分割払い"
  },
  {
    "id": "V1162",
    "w": "いっかつばらい",
    "r": "いっかつばらい",
    "m": {
      "en": "lump sum",
      "zh-TW": "一括払い",
      "zh-CN": "一括払い",
      "ko": "lump sum",
      "vi": "lump sum",
      "id": "lump sum",
      "es": "lump sum",
      "pt": "lump sum"
    },
    "pos": "i-adj",
    "ex": "とても一括払い"
  },
  {
    "id": "V1163",
    "w": "金利",
    "r": "きんり",
    "m": {
      "en": "interest rate",
      "zh-TW": "金利",
      "zh-CN": "金利",
      "ko": "interest rate",
      "vi": "interest rate",
      "id": "interest rate",
      "es": "interest rate",
      "pt": "interest rate"
    },
    "pos": "noun",
    "ex": "金利について話す"
  },
  {
    "id": "V1164",
    "w": "元金",
    "r": "がんきん",
    "m": {
      "en": "principal",
      "zh-TW": "元金",
      "zh-CN": "元金",
      "ko": "principal",
      "vi": "principal",
      "id": "principal",
      "es": "principal",
      "pt": "principal"
    },
    "pos": "noun",
    "ex": "元金について話す"
  },
  {
    "id": "V1165",
    "w": "利子",
    "r": "りし",
    "m": {
      "en": "interest",
      "zh-TW": "利子",
      "zh-CN": "利子",
      "ko": "interest",
      "vi": "interest",
      "id": "interest",
      "es": "interest",
      "pt": "interest"
    },
    "pos": "noun",
    "ex": "利子について話す"
  },
  {
    "id": "V1166",
    "w": "ふくり",
    "r": "ふくり",
    "m": {
      "en": "compound interest",
      "zh-TW": "複利",
      "zh-CN": "複利",
      "ko": "compound interest",
      "vi": "compound interest",
      "id": "compound interest",
      "es": "compound interest",
      "pt": "compound interest"
    },
    "pos": "noun",
    "ex": "複利について話す"
  },
  {
    "id": "V1167",
    "w": "うんよう",
    "r": "うんよう",
    "m": {
      "en": "management",
      "zh-TW": "運用",
      "zh-CN": "運用",
      "ko": "management",
      "vi": "management",
      "id": "management",
      "es": "management",
      "pt": "management"
    },
    "pos": "verb-godan",
    "ex": "運用ことができる"
  },
  {
    "id": "V1168",
    "w": "はいとう",
    "r": "はいとう",
    "m": {
      "en": "dividend",
      "zh-TW": "配当",
      "zh-CN": "配当",
      "ko": "dividend",
      "vi": "dividend",
      "id": "dividend",
      "es": "dividend",
      "pt": "dividend"
    },
    "pos": "verb-godan",
    "ex": "配当ことができる"
  },
  {
    "id": "V1169",
    "w": "かぶか",
    "r": "かぶか",
    "m": {
      "en": "stock price",
      "zh-TW": "株価",
      "zh-CN": "株価",
      "ko": "stock price",
      "vi": "stock price",
      "id": "stock price",
      "es": "stock price",
      "pt": "stock price"
    },
    "pos": "noun",
    "ex": "株価について話す"
  },
  {
    "id": "V1170",
    "w": "上場",
    "r": "じょうじょう",
    "m": {
      "en": "listing",
      "zh-TW": "上場",
      "zh-CN": "上場",
      "ko": "listing",
      "vi": "listing",
      "id": "listing",
      "es": "listing",
      "pt": "listing"
    },
    "pos": "verb-godan",
    "ex": "上場ことができる"
  },
  {
    "id": "V1171",
    "w": "げらく",
    "r": "げらく",
    "m": {
      "en": "decline",
      "zh-TW": "下落",
      "zh-CN": "下落",
      "ko": "decline",
      "vi": "decline",
      "id": "decline",
      "es": "decline",
      "pt": "decline"
    },
    "pos": "verb-godan",
    "ex": "下落ことができる"
  },
  {
    "id": "V1172",
    "w": "こうとう",
    "r": "こうとう",
    "m": {
      "en": "surge",
      "zh-TW": "高騰",
      "zh-CN": "高騰",
      "ko": "surge",
      "vi": "surge",
      "id": "surge",
      "es": "surge",
      "pt": "surge"
    },
    "pos": "verb-godan",
    "ex": "高騰ことができる"
  },
  {
    "id": "V1173",
    "w": "ぼうらく",
    "r": "ぼうらく",
    "m": {
      "en": "crash",
      "zh-TW": "暴落",
      "zh-CN": "暴落",
      "ko": "crash",
      "vi": "crash",
      "id": "crash",
      "es": "crash",
      "pt": "crash"
    },
    "pos": "verb-godan",
    "ex": "暴落ことができる"
  },
  {
    "id": "V1174",
    "w": "あんてい",
    "r": "あんてい",
    "m": {
      "en": "stability",
      "zh-TW": "安定",
      "zh-CN": "安定",
      "ko": "stability",
      "vi": "stability",
      "id": "stability",
      "es": "stability",
      "pt": "stability"
    },
    "pos": "i-adj",
    "ex": "とても安定"
  },
  {
    "id": "V1175",
    "w": "ふあんてい",
    "r": "ふあんてい",
    "m": {
      "en": "instability",
      "zh-TW": "不安定",
      "zh-CN": "不安定",
      "ko": "instability",
      "vi": "instability",
      "id": "instability",
      "es": "instability",
      "pt": "instability"
    },
    "pos": "i-adj",
    "ex": "とても不安定"
  },
  {
    "id": "V1176",
    "w": "けいき",
    "r": "けいき",
    "m": {
      "en": "economy",
      "zh-TW": "景気",
      "zh-CN": "景気",
      "ko": "economy",
      "vi": "economy",
      "id": "economy",
      "es": "economy",
      "pt": "economy"
    },
    "pos": "noun",
    "ex": "景気について話す"
  },
  {
    "id": "V1177",
    "w": "こうけいき",
    "r": "こうけいき",
    "m": {
      "en": "boom",
      "zh-TW": "好景気",
      "zh-CN": "好景気",
      "ko": "boom",
      "vi": "boom",
      "id": "boom",
      "es": "boom",
      "pt": "boom"
    },
    "pos": "noun",
    "ex": "好景気について話す"
  },
  {
    "id": "V1178",
    "w": "ふけいき",
    "r": "ふけいき",
    "m": {
      "en": "recession",
      "zh-TW": "不景気",
      "zh-CN": "不景気",
      "ko": "recession",
      "vi": "recession",
      "id": "recession",
      "es": "recession",
      "pt": "recession"
    },
    "pos": "noun",
    "ex": "不景気について話す"
  },
  {
    "id": "V1179",
    "w": "インフレ",
    "r": "いんふれ",
    "m": {
      "en": "inflation",
      "zh-TW": "インフレ",
      "zh-CN": "インフレ",
      "ko": "inflation",
      "vi": "inflation",
      "id": "inflation",
      "es": "inflation",
      "pt": "inflation"
    },
    "pos": "noun",
    "ex": "インフレについて話す"
  },
  {
    "id": "V1180",
    "w": "デフレ",
    "r": "でふれ",
    "m": {
      "en": "deflation",
      "zh-TW": "デフレ",
      "zh-CN": "デフレ",
      "ko": "deflation",
      "vi": "deflation",
      "id": "deflation",
      "es": "deflation",
      "pt": "deflation"
    },
    "pos": "noun",
    "ex": "デフレについて話す"
  },
  {
    "id": "V1181",
    "w": "円高",
    "r": "えんだか",
    "m": {
      "en": "strong yen",
      "zh-TW": "円高",
      "zh-CN": "円高",
      "ko": "strong yen",
      "vi": "strong yen",
      "id": "strong yen",
      "es": "strong yen",
      "pt": "strong yen"
    },
    "pos": "noun",
    "ex": "円高について話す"
  },
  {
    "id": "V1182",
    "w": "円安",
    "r": "えんやす",
    "m": {
      "en": "weak yen",
      "zh-TW": "円安",
      "zh-CN": "円安",
      "ko": "weak yen",
      "vi": "weak yen",
      "id": "weak yen",
      "es": "weak yen",
      "pt": "weak yen"
    },
    "pos": "verb-godan",
    "ex": "円安ことができる"
  },
  {
    "id": "V1183",
    "w": "かわせ",
    "r": "かわせ",
    "m": {
      "en": "exchange",
      "zh-TW": "為替",
      "zh-CN": "為替",
      "ko": "exchange",
      "vi": "exchange",
      "id": "exchange",
      "es": "exchange",
      "pt": "exchange"
    },
    "pos": "noun",
    "ex": "為替について話す"
  },
  {
    "id": "V1184",
    "w": "相場",
    "r": "そうば",
    "m": {
      "en": "market price",
      "zh-TW": "相場",
      "zh-CN": "相場",
      "ko": "market price",
      "vi": "market price",
      "id": "market price",
      "es": "market price",
      "pt": "market price"
    },
    "pos": "noun",
    "ex": "相場について話す"
  },
  {
    "id": "V1185",
    "w": "ぶっか",
    "r": "ぶっか",
    "m": {
      "en": "prices",
      "zh-TW": "物価",
      "zh-CN": "物価",
      "ko": "prices",
      "vi": "prices",
      "id": "prices",
      "es": "prices",
      "pt": "prices"
    },
    "pos": "noun",
    "ex": "物価について話す"
  },
  {
    "id": "V1186",
    "w": "値上げ",
    "r": "ねあげ",
    "m": {
      "en": "price increase",
      "zh-TW": "値上げ",
      "zh-CN": "値上げ",
      "ko": "price increase",
      "vi": "price increase",
      "id": "price increase",
      "es": "price increase",
      "pt": "price increase"
    },
    "pos": "noun",
    "ex": "値上げについて話す"
  },
  {
    "id": "V1187",
    "w": "値下げ",
    "r": "ねさげ",
    "m": {
      "en": "price cut",
      "zh-TW": "値下げ",
      "zh-CN": "値下げ",
      "ko": "price cut",
      "vi": "price cut",
      "id": "price cut",
      "es": "price cut",
      "pt": "price cut"
    },
    "pos": "noun",
    "ex": "値下げについて話す"
  },
  {
    "id": "V1188",
    "w": "とっか",
    "r": "とっか",
    "m": {
      "en": "special price",
      "zh-TW": "特価",
      "zh-CN": "特価",
      "ko": "special price",
      "vi": "special price",
      "id": "special price",
      "es": "special price",
      "pt": "special price"
    },
    "pos": "noun",
    "ex": "特価について話す"
  },
  {
    "id": "V1189",
    "w": "そこね",
    "r": "そこね",
    "m": {
      "en": "bottom price",
      "zh-TW": "底値",
      "zh-CN": "底値",
      "ko": "bottom price",
      "vi": "bottom price",
      "id": "bottom price",
      "es": "bottom price",
      "pt": "bottom price"
    },
    "pos": "noun",
    "ex": "底値について話す"
  },
  {
    "id": "V1190",
    "w": "高値",
    "r": "たかね",
    "m": {
      "en": "high price",
      "zh-TW": "高値",
      "zh-CN": "高値",
      "ko": "high price",
      "vi": "high price",
      "id": "high price",
      "es": "high price",
      "pt": "high price"
    },
    "pos": "noun",
    "ex": "高値について話す"
  },
  {
    "id": "V1191",
    "w": "安値",
    "r": "やすね",
    "m": {
      "en": "low price",
      "zh-TW": "安値",
      "zh-CN": "安値",
      "ko": "low price",
      "vi": "low price",
      "id": "low price",
      "es": "low price",
      "pt": "low price"
    },
    "pos": "noun",
    "ex": "安値について話す"
  },
  {
    "id": "V1192",
    "w": "てきせいかかく",
    "r": "てきせいかかく",
    "m": {
      "en": "fair price",
      "zh-TW": "適正価格",
      "zh-CN": "適正価格",
      "ko": "fair price",
      "vi": "fair price",
      "id": "fair price",
      "es": "fair price",
      "pt": "fair price"
    },
    "pos": "verb-godan",
    "ex": "適正価格ことができる"
  },
  {
    "id": "V1193",
    "w": "市場",
    "r": "しじょう",
    "m": {
      "en": "market",
      "zh-TW": "市場",
      "zh-CN": "市場",
      "ko": "market",
      "vi": "market",
      "id": "market",
      "es": "market",
      "pt": "market"
    },
    "pos": "verb-godan",
    "ex": "市場ことができる"
  },
  {
    "id": "V1194",
    "w": "どくせん",
    "r": "どくせん",
    "m": {
      "en": "monopoly",
      "zh-TW": "独占",
      "zh-CN": "独占",
      "ko": "monopoly",
      "vi": "monopoly",
      "id": "monopoly",
      "es": "monopoly",
      "pt": "monopoly"
    },
    "pos": "noun",
    "ex": "独占について話す"
  },
  {
    "id": "V1195",
    "w": "きょうそう",
    "r": "きょうそう",
    "m": {
      "en": "competition",
      "zh-TW": "競争",
      "zh-CN": "競争",
      "ko": "competition",
      "vi": "competition",
      "id": "competition",
      "es": "competition",
      "pt": "competition"
    },
    "pos": "verb-godan",
    "ex": "競争ことができる"
  },
  {
    "id": "V1196",
    "w": "共同",
    "r": "きょうどう",
    "m": {
      "en": "joint",
      "zh-TW": "共同",
      "zh-CN": "共同",
      "ko": "joint",
      "vi": "joint",
      "id": "joint",
      "es": "joint",
      "pt": "joint"
    },
    "pos": "verb-godan",
    "ex": "共同ことができる"
  },
  {
    "id": "V1197",
    "w": "ていけい",
    "r": "ていけい",
    "m": {
      "en": "partnership",
      "zh-TW": "提携",
      "zh-CN": "提携",
      "ko": "partnership",
      "vi": "partnership",
      "id": "partnership",
      "es": "partnership",
      "pt": "partnership"
    },
    "pos": "i-adj",
    "ex": "とても提携"
  },
  {
    "id": "V1198",
    "w": "がっぺい",
    "r": "がっぺい",
    "m": {
      "en": "merger",
      "zh-TW": "合併",
      "zh-CN": "合併",
      "ko": "merger",
      "vi": "merger",
      "id": "merger",
      "es": "merger",
      "pt": "merger"
    },
    "pos": "i-adj",
    "ex": "とても合併"
  },
  {
    "id": "V1199",
    "w": "ばいしゅう",
    "r": "ばいしゅう",
    "m": {
      "en": "acquisition",
      "zh-TW": "買収",
      "zh-CN": "買収",
      "ko": "acquisition",
      "vi": "acquisition",
      "id": "acquisition",
      "es": "acquisition",
      "pt": "acquisition"
    },
    "pos": "verb-godan",
    "ex": "買収ことができる"
  },
  {
    "id": "V1200",
    "w": "はさん",
    "r": "はさん",
    "m": {
      "en": "bankruptcy",
      "zh-TW": "破産",
      "zh-CN": "破産",
      "ko": "bankruptcy",
      "vi": "bankruptcy",
      "id": "bankruptcy",
      "es": "bankruptcy",
      "pt": "bankruptcy"
    },
    "pos": "noun",
    "ex": "破産について話す"
  },
  {
    "id": "V1201",
    "w": "とうさん",
    "r": "とうさん",
    "m": {
      "en": "failure",
      "zh-TW": "倒産",
      "zh-CN": "倒産",
      "ko": "failure",
      "vi": "failure",
      "id": "failure",
      "es": "failure",
      "pt": "failure"
    },
    "pos": "noun",
    "ex": "倒産について話す"
  },
  {
    "id": "V1202",
    "w": "さいけん",
    "r": "さいけん",
    "m": {
      "en": "reconstruction",
      "zh-TW": "再建",
      "zh-CN": "再建",
      "ko": "reconstruction",
      "vi": "reconstruction",
      "id": "reconstruction",
      "es": "reconstruction",
      "pt": "reconstruction"
    },
    "pos": "noun",
    "ex": "再建について話す"
  },
  {
    "id": "V1203",
    "w": "リストラ",
    "r": "りすとら",
    "m": {
      "en": "restructuring",
      "zh-TW": "リストラ",
      "zh-CN": "リストラ",
      "ko": "restructuring",
      "vi": "restructuring",
      "id": "restructuring",
      "es": "restructuring",
      "pt": "restructuring"
    },
    "pos": "noun",
    "ex": "リストラについて話す"
  },
  {
    "id": "V1204",
    "w": "けいえい",
    "r": "けいえい",
    "m": {
      "en": "management",
      "zh-TW": "経営",
      "zh-CN": "経営",
      "ko": "management",
      "vi": "management",
      "id": "management",
      "es": "management",
      "pt": "management"
    },
    "pos": "i-adj",
    "ex": "とても経営"
  },
  {
    "id": "V1205",
    "w": "きぎょう",
    "r": "きぎょう",
    "m": {
      "en": "enterprise",
      "zh-TW": "企業",
      "zh-CN": "企業",
      "ko": "enterprise",
      "vi": "enterprise",
      "id": "enterprise",
      "es": "enterprise",
      "pt": "enterprise"
    },
    "pos": "verb-godan",
    "ex": "企業ことができる"
  },
  {
    "id": "V1206",
    "w": "ちゅうしょうきぎょう",
    "r": "ちゅうしょうきぎょう",
    "m": {
      "en": "SME",
      "zh-TW": "中小企業",
      "zh-CN": "中小企業",
      "ko": "SME",
      "vi": "SME",
      "id": "SME",
      "es": "SME",
      "pt": "SME"
    },
    "pos": "verb-godan",
    "ex": "中小企業ことができる"
  },
  {
    "id": "V1207",
    "w": "だいきぎょう",
    "r": "だいきぎょう",
    "m": {
      "en": "large company",
      "zh-TW": "大企業",
      "zh-CN": "大企業",
      "ko": "large company",
      "vi": "large company",
      "id": "large company",
      "es": "large company",
      "pt": "large company"
    },
    "pos": "verb-godan",
    "ex": "大企業ことができる"
  },
  {
    "id": "V1208",
    "w": "ベンチャー",
    "r": "べんちゃー",
    "m": {
      "en": "venture",
      "zh-TW": "ベンチャー",
      "zh-CN": "ベンチャー",
      "ko": "venture",
      "vi": "venture",
      "id": "venture",
      "es": "venture",
      "pt": "venture"
    },
    "pos": "noun",
    "ex": "ベンチャーについて話す"
  },
  {
    "id": "V1209",
    "w": "起業",
    "r": "きぎょう",
    "m": {
      "en": "startup",
      "zh-TW": "起業",
      "zh-CN": "起業",
      "ko": "startup",
      "vi": "startup",
      "id": "startup",
      "es": "startup",
      "pt": "startup"
    },
    "pos": "verb-godan",
    "ex": "起業ことができる"
  },
  {
    "id": "V1210",
    "w": "そうぎょう",
    "r": "そうぎょう",
    "m": {
      "en": "founding",
      "zh-TW": "創業",
      "zh-CN": "創業",
      "ko": "founding",
      "vi": "founding",
      "id": "founding",
      "es": "founding",
      "pt": "founding"
    },
    "pos": "verb-godan",
    "ex": "創業ことができる"
  },
  {
    "id": "V1211",
    "w": "しにせ",
    "r": "しにせ",
    "m": {
      "en": "long-established",
      "zh-TW": "老舗",
      "zh-CN": "老舗",
      "ko": "long-established",
      "vi": "long-established",
      "id": "long-established",
      "es": "long-established",
      "pt": "long-established"
    },
    "pos": "noun",
    "ex": "老舗について話す"
  },
  {
    "id": "V1212",
    "w": "本社",
    "r": "ほんしゃ",
    "m": {
      "en": "headquarters",
      "zh-TW": "本社",
      "zh-CN": "本社",
      "ko": "headquarters",
      "vi": "headquarters",
      "id": "headquarters",
      "es": "headquarters",
      "pt": "headquarters"
    },
    "pos": "noun",
    "ex": "本社について話す"
  },
  {
    "id": "V1213",
    "w": "子会社",
    "r": "こがいしゃ",
    "m": {
      "en": "subsidiary",
      "zh-TW": "子会社",
      "zh-CN": "子会社",
      "ko": "subsidiary",
      "vi": "subsidiary",
      "id": "subsidiary",
      "es": "subsidiary",
      "pt": "subsidiary"
    },
    "pos": "noun",
    "ex": "子会社について話す"
  },
  {
    "id": "V1214",
    "w": "親会社",
    "r": "おやがいしゃ",
    "m": {
      "en": "parent company",
      "zh-TW": "親会社",
      "zh-CN": "親会社",
      "ko": "parent company",
      "vi": "parent company",
      "id": "parent company",
      "es": "parent company",
      "pt": "parent company"
    },
    "pos": "noun",
    "ex": "親会社について話す"
  },
  {
    "id": "V1215",
    "w": "かんれんがいしゃ",
    "r": "かんれんがいしゃ",
    "m": {
      "en": "affiliate",
      "zh-TW": "関連会社",
      "zh-CN": "関連会社",
      "ko": "affiliate",
      "vi": "affiliate",
      "id": "affiliate",
      "es": "affiliate",
      "pt": "affiliate"
    },
    "pos": "noun",
    "ex": "関連会社について話す"
  },
  {
    "id": "V1216",
    "w": "とりひきさき",
    "r": "とりひきさき",
    "m": {
      "en": "client",
      "zh-TW": "取引先",
      "zh-CN": "取引先",
      "ko": "client",
      "vi": "client",
      "id": "client",
      "es": "client",
      "pt": "client"
    },
    "pos": "noun",
    "ex": "取引先について話す"
  },
  {
    "id": "V1217",
    "w": "こきゃく",
    "r": "こきゃく",
    "m": {
      "en": "customer",
      "zh-TW": "顧客",
      "zh-CN": "顧客",
      "ko": "customer",
      "vi": "customer",
      "id": "customer",
      "es": "customer",
      "pt": "customer"
    },
    "pos": "verb-godan",
    "ex": "顧客ことができる"
  },
  {
    "id": "V1218",
    "w": "とくいさき",
    "r": "とくいさき",
    "m": {
      "en": "regular customer",
      "zh-TW": "得意先",
      "zh-CN": "得意先",
      "ko": "regular customer",
      "vi": "regular customer",
      "id": "regular customer",
      "es": "regular customer",
      "pt": "regular customer"
    },
    "pos": "noun",
    "ex": "得意先について話す"
  },
  {
    "id": "V1219",
    "w": "仕入れ先",
    "r": "しいれさき",
    "m": {
      "en": "supplier",
      "zh-TW": "仕入れ先",
      "zh-CN": "仕入れ先",
      "ko": "supplier",
      "vi": "supplier",
      "id": "supplier",
      "es": "supplier",
      "pt": "supplier"
    },
    "pos": "noun",
    "ex": "仕入れ先について話す"
  },
  {
    "id": "V1220",
    "w": "発注先",
    "r": "はっちゅうさき",
    "m": {
      "en": "ordering party",
      "zh-TW": "発注先",
      "zh-CN": "発注先",
      "ko": "ordering party",
      "vi": "ordering party",
      "id": "ordering party",
      "es": "ordering party",
      "pt": "ordering party"
    },
    "pos": "noun",
    "ex": "発注先について話す"
  },
  {
    "id": "V1221",
    "w": "のうひんさき",
    "r": "のうひんさき",
    "m": {
      "en": "delivery destination",
      "zh-TW": "納品先",
      "zh-CN": "納品先",
      "ko": "delivery destination",
      "vi": "delivery destination",
      "id": "delivery destination",
      "es": "delivery destination",
      "pt": "delivery destination"
    },
    "pos": "noun",
    "ex": "納品先について話す"
  },
  {
    "id": "V1222",
    "w": "せいきゅうさき",
    "r": "せいきゅうさき",
    "m": {
      "en": "billing address",
      "zh-TW": "請求先",
      "zh-CN": "請求先",
      "ko": "billing address",
      "vi": "billing address",
      "id": "billing address",
      "es": "billing address",
      "pt": "billing address"
    },
    "pos": "noun",
    "ex": "請求先について話す"
  },
  {
    "id": "V1223",
    "w": "けいやくしょ",
    "r": "けいやくしょ",
    "m": {
      "en": "contract",
      "zh-TW": "契約書",
      "zh-CN": "契約書",
      "ko": "contract",
      "vi": "contract",
      "id": "contract",
      "es": "contract",
      "pt": "contract"
    },
    "pos": "noun",
    "ex": "契約書について話す"
  },
  {
    "id": "V1224",
    "w": "みつもりしょ",
    "r": "みつもりしょ",
    "m": {
      "en": "estimate",
      "zh-TW": "見積書",
      "zh-CN": "見積書",
      "ko": "estimate",
      "vi": "estimate",
      "id": "estimate",
      "es": "estimate",
      "pt": "estimate"
    },
    "pos": "noun",
    "ex": "見積書について話す"
  },
  {
    "id": "V1225",
    "w": "せいきゅうしょ",
    "r": "せいきゅうしょ",
    "m": {
      "en": "invoice",
      "zh-TW": "請求書",
      "zh-CN": "請求書",
      "ko": "invoice",
      "vi": "invoice",
      "id": "invoice",
      "es": "invoice",
      "pt": "invoice"
    },
    "pos": "noun",
    "ex": "請求書について話す"
  },
  {
    "id": "V1226",
    "w": "のうひんしょ",
    "r": "のうひんしょ",
    "m": {
      "en": "delivery note",
      "zh-TW": "納品書",
      "zh-CN": "納品書",
      "ko": "delivery note",
      "vi": "delivery note",
      "id": "delivery note",
      "es": "delivery note",
      "pt": "delivery note"
    },
    "pos": "noun",
    "ex": "納品書について話す"
  },
  {
    "id": "V1227",
    "w": "報告書",
    "r": "ほうこくしょ",
    "m": {
      "en": "report",
      "zh-TW": "報告書",
      "zh-CN": "報告書",
      "ko": "report",
      "vi": "report",
      "id": "report",
      "es": "report",
      "pt": "report"
    },
    "pos": "noun",
    "ex": "報告書について話す"
  },
  {
    "id": "V1228",
    "w": "きかくしょ",
    "r": "きかくしょ",
    "m": {
      "en": "proposal",
      "zh-TW": "企画書",
      "zh-CN": "企画書",
      "ko": "proposal",
      "vi": "proposal",
      "id": "proposal",
      "es": "proposal",
      "pt": "proposal"
    },
    "pos": "noun",
    "ex": "企画書について話す"
  },
  {
    "id": "V1229",
    "w": "しようしょ",
    "r": "しようしょ",
    "m": {
      "en": "specification",
      "zh-TW": "仕様書",
      "zh-CN": "仕様書",
      "ko": "specification",
      "vi": "specification",
      "id": "specification",
      "es": "specification",
      "pt": "specification"
    },
    "pos": "noun",
    "ex": "仕様書について話す"
  },
  {
    "id": "V1230",
    "w": "マニュアル",
    "r": "まにゅある",
    "m": {
      "en": "manual",
      "zh-TW": "マニュアル",
      "zh-CN": "マニュアル",
      "ko": "manual",
      "vi": "manual",
      "id": "manual",
      "es": "manual",
      "pt": "manual"
    },
    "pos": "verb-godan",
    "ex": "マニュアルことができる"
  },
  {
    "id": "V1231",
    "w": "ぎじろく",
    "r": "ぎじろく",
    "m": {
      "en": "minutes",
      "zh-TW": "議事録",
      "zh-CN": "議事録",
      "ko": "minutes",
      "vi": "minutes",
      "id": "minutes",
      "es": "minutes",
      "pt": "minutes"
    },
    "pos": "verb-godan",
    "ex": "議事録ことができる"
  },
  {
    "id": "V1232",
    "w": "めいし",
    "r": "めいし",
    "m": {
      "en": "business card",
      "zh-TW": "名刺",
      "zh-CN": "名刺",
      "ko": "business card",
      "vi": "business card",
      "id": "business card",
      "es": "business card",
      "pt": "business card"
    },
    "pos": "noun",
    "ex": "名刺について話す"
  },
  {
    "id": "V1233",
    "w": "ふうとう",
    "r": "ふうとう",
    "m": {
      "en": "envelope",
      "zh-TW": "封筒",
      "zh-CN": "封筒",
      "ko": "envelope",
      "vi": "envelope",
      "id": "envelope",
      "es": "envelope",
      "pt": "envelope"
    },
    "pos": "verb-godan",
    "ex": "封筒ことができる"
  },
  {
    "id": "V1234",
    "w": "切手",
    "r": "きって",
    "m": {
      "en": "stamp",
      "zh-TW": "切手",
      "zh-CN": "切手",
      "ko": "stamp",
      "vi": "stamp",
      "id": "stamp",
      "es": "stamp",
      "pt": "stamp"
    },
    "pos": "noun",
    "ex": "切手について話す"
  },
  {
    "id": "V1235",
    "w": "そくたつ",
    "r": "そくたつ",
    "m": {
      "en": "express mail",
      "zh-TW": "速達",
      "zh-CN": "速達",
      "ko": "express mail",
      "vi": "express mail",
      "id": "express mail",
      "es": "express mail",
      "pt": "express mail"
    },
    "pos": "verb-godan",
    "ex": "速達ことができる"
  },
  {
    "id": "V1236",
    "w": "書留",
    "r": "かきとめ",
    "m": {
      "en": "registered mail",
      "zh-TW": "書留",
      "zh-CN": "書留",
      "ko": "registered mail",
      "vi": "registered mail",
      "id": "registered mail",
      "es": "registered mail",
      "pt": "registered mail"
    },
    "pos": "noun",
    "ex": "書留について話す"
  },
  {
    "id": "V1237",
    "w": "たくはいびん",
    "r": "たくはいびん",
    "m": {
      "en": "courier",
      "zh-TW": "宅配便",
      "zh-CN": "宅配便",
      "ko": "courier",
      "vi": "courier",
      "id": "courier",
      "es": "courier",
      "pt": "courier"
    },
    "pos": "noun",
    "ex": "宅配便について話す"
  },
  {
    "id": "V1238",
    "w": "ちゃくばらい",
    "r": "ちゃくばらい",
    "m": {
      "en": "cash on delivery",
      "zh-TW": "着払い",
      "zh-CN": "着払い",
      "ko": "cash on delivery",
      "vi": "cash on delivery",
      "id": "cash on delivery",
      "es": "cash on delivery",
      "pt": "cash on delivery"
    },
    "pos": "i-adj",
    "ex": "とても着払い"
  },
  {
    "id": "V1239",
    "w": "もとばらい",
    "r": "もとばらい",
    "m": {
      "en": "prepaid",
      "zh-TW": "元払い",
      "zh-CN": "元払い",
      "ko": "prepaid",
      "vi": "prepaid",
      "id": "prepaid",
      "es": "prepaid",
      "pt": "prepaid"
    },
    "pos": "i-adj",
    "ex": "とても元払い"
  },
  {
    "id": "V1240",
    "w": "どうふう",
    "r": "どうふう",
    "m": {
      "en": "enclosure",
      "zh-TW": "同封",
      "zh-CN": "同封",
      "ko": "enclosure",
      "vi": "enclosure",
      "id": "enclosure",
      "es": "enclosure",
      "pt": "enclosure"
    },
    "pos": "verb-godan",
    "ex": "同封ことができる"
  },
  {
    "id": "V1241",
    "w": "てんぷ",
    "r": "てんぷ",
    "m": {
      "en": "attachment",
      "zh-TW": "添付",
      "zh-CN": "添付",
      "ko": "attachment",
      "vi": "attachment",
      "id": "attachment",
      "es": "attachment",
      "pt": "attachment"
    },
    "pos": "noun",
    "ex": "添付について話す"
  },
  {
    "id": "V1242",
    "w": "てんそう",
    "r": "てんそう",
    "m": {
      "en": "forwarding",
      "zh-TW": "転送",
      "zh-CN": "転送",
      "ko": "forwarding",
      "vi": "forwarding",
      "id": "forwarding",
      "es": "forwarding",
      "pt": "forwarding"
    },
    "pos": "verb-godan",
    "ex": "転送ことができる"
  },
  {
    "id": "V1243",
    "w": "へんそう",
    "r": "へんそう",
    "m": {
      "en": "return",
      "zh-TW": "返送",
      "zh-CN": "返送",
      "ko": "return",
      "vi": "return",
      "id": "return",
      "es": "return",
      "pt": "return"
    },
    "pos": "verb-godan",
    "ex": "返送ことができる"
  },
  {
    "id": "V1244",
    "w": "うけとり",
    "r": "うけとり",
    "m": {
      "en": "receipt",
      "zh-TW": "受取",
      "zh-CN": "受取",
      "ko": "receipt",
      "vi": "receipt",
      "id": "receipt",
      "es": "receipt",
      "pt": "receipt"
    },
    "pos": "noun",
    "ex": "受取について話す"
  },
  {
    "id": "V1245",
    "w": "はいそう",
    "r": "はいそう",
    "m": {
      "en": "delivery",
      "zh-TW": "配送",
      "zh-CN": "配送",
      "ko": "delivery",
      "vi": "delivery",
      "id": "delivery",
      "es": "delivery",
      "pt": "delivery"
    },
    "pos": "verb-godan",
    "ex": "配送ことができる"
  },
  {
    "id": "V1246",
    "w": "運送",
    "r": "うんそう",
    "m": {
      "en": "transportation",
      "zh-TW": "運送",
      "zh-CN": "運送",
      "ko": "transportation",
      "vi": "transportation",
      "id": "transportation",
      "es": "transportation",
      "pt": "transportation"
    },
    "pos": "verb-godan",
    "ex": "運送ことができる"
  },
  {
    "id": "V1247",
    "w": "ゆそう",
    "r": "ゆそう",
    "m": {
      "en": "transport",
      "zh-TW": "輸送",
      "zh-CN": "輸送",
      "ko": "transport",
      "vi": "transport",
      "id": "transport",
      "es": "transport",
      "pt": "transport"
    },
    "pos": "verb-godan",
    "ex": "輸送ことができる"
  },
  {
    "id": "V1248",
    "w": "こうくうびん",
    "r": "こうくうびん",
    "m": {
      "en": "airmail",
      "zh-TW": "航空便",
      "zh-CN": "航空便",
      "ko": "airmail",
      "vi": "airmail",
      "id": "airmail",
      "es": "airmail",
      "pt": "airmail"
    },
    "pos": "noun",
    "ex": "航空便について話す"
  },
  {
    "id": "V1249",
    "w": "ふなびん",
    "r": "ふなびん",
    "m": {
      "en": "sea mail",
      "zh-TW": "船便",
      "zh-CN": "船便",
      "ko": "sea mail",
      "vi": "sea mail",
      "id": "sea mail",
      "es": "sea mail",
      "pt": "sea mail"
    },
    "pos": "noun",
    "ex": "船便について話す"
  },
  {
    "id": "V1250",
    "w": "りくそう",
    "r": "りくそう",
    "m": {
      "en": "land transport",
      "zh-TW": "陸送",
      "zh-CN": "陸送",
      "ko": "land transport",
      "vi": "land transport",
      "id": "land transport",
      "es": "land transport",
      "pt": "land transport"
    },
    "pos": "verb-godan",
    "ex": "陸送ことができる"
  },
  {
    "id": "V1251",
    "w": "コンテナ",
    "r": "こんてな",
    "m": {
      "en": "container",
      "zh-TW": "コンテナ",
      "zh-CN": "コンテナ",
      "ko": "container",
      "vi": "container",
      "id": "container",
      "es": "container",
      "pt": "container"
    },
    "pos": "noun",
    "ex": "コンテナについて話す"
  },
  {
    "id": "V1252",
    "w": "せきさい",
    "r": "せきさい",
    "m": {
      "en": "loading",
      "zh-TW": "積載",
      "zh-CN": "積載",
      "ko": "loading",
      "vi": "loading",
      "id": "loading",
      "es": "loading",
      "pt": "loading"
    },
    "pos": "i-adj",
    "ex": "とても積載"
  },
  {
    "id": "V1253",
    "w": "におろし",
    "r": "におろし",
    "m": {
      "en": "unloading",
      "zh-TW": "荷降ろし",
      "zh-CN": "荷降ろし",
      "ko": "unloading",
      "vi": "unloading",
      "id": "unloading",
      "es": "unloading",
      "pt": "unloading"
    },
    "pos": "noun",
    "ex": "荷降ろしについて話す"
  },
  {
    "id": "V1254",
    "w": "ほかん",
    "r": "ほかん",
    "m": {
      "en": "storage",
      "zh-TW": "保管",
      "zh-CN": "保管",
      "ko": "storage",
      "vi": "storage",
      "id": "storage",
      "es": "storage",
      "pt": "storage"
    },
    "pos": "noun",
    "ex": "保管について話す"
  },
  {
    "id": "V1255",
    "w": "ぶつりゅう",
    "r": "ぶつりゅう",
    "m": {
      "en": "logistics",
      "zh-TW": "物流",
      "zh-CN": "物流",
      "ko": "logistics",
      "vi": "logistics",
      "id": "logistics",
      "es": "logistics",
      "pt": "logistics"
    },
    "pos": "verb-godan",
    "ex": "物流ことができる"
  },
  {
    "id": "V1256",
    "w": "ざいこかんり",
    "r": "ざいこかんり",
    "m": {
      "en": "inventory management",
      "zh-TW": "在庫管理",
      "zh-CN": "在庫管理",
      "ko": "inventory management",
      "vi": "inventory management",
      "id": "inventory management",
      "es": "inventory management",
      "pt": "inventory management"
    },
    "pos": "noun",
    "ex": "在庫管理について話す"
  },
  {
    "id": "V1257",
    "w": "ひんしつかんり",
    "r": "ひんしつかんり",
    "m": {
      "en": "quality control",
      "zh-TW": "品質管理",
      "zh-CN": "品質管理",
      "ko": "quality control",
      "vi": "quality control",
      "id": "quality control",
      "es": "quality control",
      "pt": "quality control"
    },
    "pos": "noun",
    "ex": "品質管理について話す"
  },
  {
    "id": "V1258",
    "w": "せいさんかんり",
    "r": "せいさんかんり",
    "m": {
      "en": "production management",
      "zh-TW": "生産管理",
      "zh-CN": "生産管理",
      "ko": "production management",
      "vi": "production management",
      "id": "production management",
      "es": "production management",
      "pt": "production management"
    },
    "pos": "noun",
    "ex": "生産管理について話す"
  },
  {
    "id": "V1259",
    "w": "こうてい",
    "r": "こうてい",
    "m": {
      "en": "process",
      "zh-TW": "工程",
      "zh-CN": "工程",
      "ko": "process",
      "vi": "process",
      "id": "process",
      "es": "process",
      "pt": "process"
    },
    "pos": "i-adj",
    "ex": "とても工程"
  },
  {
    "id": "V1260",
    "w": "くみたて",
    "r": "くみたて",
    "m": {
      "en": "assembly",
      "zh-TW": "組立",
      "zh-CN": "組立",
      "ko": "assembly",
      "vi": "assembly",
      "id": "assembly",
      "es": "assembly",
      "pt": "assembly"
    },
    "pos": "noun",
    "ex": "組立について話す"
  },
  {
    "id": "V1261",
    "w": "かこう",
    "r": "かこう",
    "m": {
      "en": "processing",
      "zh-TW": "加工",
      "zh-CN": "加工",
      "ko": "processing",
      "vi": "processing",
      "id": "processing",
      "es": "processing",
      "pt": "processing"
    },
    "pos": "verb-godan",
    "ex": "加工ことができる"
  },
  {
    "id": "V1262",
    "w": "とそう",
    "r": "とそう",
    "m": {
      "en": "painting",
      "zh-TW": "塗装",
      "zh-CN": "塗装",
      "ko": "painting",
      "vi": "painting",
      "id": "painting",
      "es": "painting",
      "pt": "painting"
    },
    "pos": "verb-godan",
    "ex": "塗装ことができる"
  },
  {
    "id": "V1263",
    "w": "ようせつ",
    "r": "ようせつ",
    "m": {
      "en": "welding",
      "zh-TW": "溶接",
      "zh-CN": "溶接",
      "ko": "welding",
      "vi": "welding",
      "id": "welding",
      "es": "welding",
      "pt": "welding"
    },
    "pos": "verb-godan",
    "ex": "溶接ことができる"
  },
  {
    "id": "V1264",
    "w": "プレス",
    "r": "ぷれす",
    "m": {
      "en": "pressing",
      "zh-TW": "プレス",
      "zh-CN": "プレス",
      "ko": "pressing",
      "vi": "pressing",
      "id": "pressing",
      "es": "pressing",
      "pt": "pressing"
    },
    "pos": "verb-godan",
    "ex": "プレスことができる"
  },
  {
    "id": "V1265",
    "w": "せいけい",
    "r": "せいけい",
    "m": {
      "en": "molding",
      "zh-TW": "成形",
      "zh-CN": "成形",
      "ko": "molding",
      "vi": "molding",
      "id": "molding",
      "es": "molding",
      "pt": "molding"
    },
    "pos": "i-adj",
    "ex": "とても成形"
  },
  {
    "id": "V1266",
    "w": "せっさく",
    "r": "せっさく",
    "m": {
      "en": "cutting",
      "zh-TW": "切削",
      "zh-CN": "切削",
      "ko": "cutting",
      "vi": "cutting",
      "id": "cutting",
      "es": "cutting",
      "pt": "cutting"
    },
    "pos": "verb-godan",
    "ex": "切削ことができる"
  },
  {
    "id": "V1267",
    "w": "けんま",
    "r": "けんま",
    "m": {
      "en": "polishing",
      "zh-TW": "研磨",
      "zh-CN": "研磨",
      "ko": "polishing",
      "vi": "polishing",
      "id": "polishing",
      "es": "polishing",
      "pt": "polishing"
    },
    "pos": "noun",
    "ex": "研磨について話す"
  },
  {
    "id": "V1268",
    "w": "けんさ",
    "r": "けんさ",
    "m": {
      "en": "inspection",
      "zh-TW": "検査",
      "zh-CN": "検査",
      "ko": "inspection",
      "vi": "inspection",
      "id": "inspection",
      "es": "inspection",
      "pt": "inspection"
    },
    "pos": "noun",
    "ex": "検査について話す"
  },
  {
    "id": "V1269",
    "w": "そくてい",
    "r": "そくてい",
    "m": {
      "en": "measurement",
      "zh-TW": "測定",
      "zh-CN": "測定",
      "ko": "measurement",
      "vi": "measurement",
      "id": "measurement",
      "es": "measurement",
      "pt": "measurement"
    },
    "pos": "i-adj",
    "ex": "とても測定"
  },
  {
    "id": "V1270",
    "w": "試験",
    "r": "しけん",
    "m": {
      "en": "test",
      "zh-TW": "試験",
      "zh-CN": "試験",
      "ko": "test",
      "vi": "test",
      "id": "test",
      "es": "test",
      "pt": "test"
    },
    "pos": "noun",
    "ex": "試験について話す",
    "syn": [
      "テスト",
      "検査",
      "審査"
    ]
  },
  {
    "id": "V1271",
    "w": "せっけい",
    "r": "せっけい",
    "m": {
      "en": "design",
      "zh-TW": "設計",
      "zh-CN": "設計",
      "ko": "design",
      "vi": "design",
      "id": "design",
      "es": "design",
      "pt": "design"
    },
    "pos": "i-adj",
    "ex": "とても設計"
  },
  {
    "id": "V1272",
    "w": "開発",
    "r": "かいはつ",
    "m": {
      "en": "development",
      "zh-TW": "開発",
      "zh-CN": "開発",
      "ko": "development",
      "vi": "development",
      "id": "development",
      "es": "development",
      "pt": "development"
    },
    "pos": "verb-godan",
    "ex": "開発ことができる"
  },
  {
    "id": "V1273",
    "w": "研究",
    "r": "けんきゅう",
    "m": {
      "en": "research",
      "zh-TW": "研究",
      "zh-CN": "研究",
      "ko": "research",
      "vi": "research",
      "id": "research",
      "es": "research",
      "pt": "research"
    },
    "pos": "verb-godan",
    "ex": "研究ことができる",
    "syn": [
      "研鑽する",
      "探究する",
      "追究する"
    ]
  },
  {
    "id": "V1274",
    "w": "とっきょ",
    "r": "とっきょ",
    "m": {
      "en": "patent",
      "zh-TW": "特許",
      "zh-CN": "特許",
      "ko": "patent",
      "vi": "patent",
      "id": "patent",
      "es": "patent",
      "pt": "patent"
    },
    "pos": "noun",
    "ex": "特許について話す"
  },
  {
    "id": "V1275",
    "w": "しょうひょう",
    "r": "しょうひょう",
    "m": {
      "en": "trademark",
      "zh-TW": "商標",
      "zh-CN": "商標",
      "ko": "trademark",
      "vi": "trademark",
      "id": "trademark",
      "es": "trademark",
      "pt": "trademark"
    },
    "pos": "verb-godan",
    "ex": "商標ことができる"
  },
  {
    "id": "V1276",
    "w": "ちょさくけん",
    "r": "ちょさくけん",
    "m": {
      "en": "copyright",
      "zh-TW": "著作権",
      "zh-CN": "著作権",
      "ko": "copyright",
      "vi": "copyright",
      "id": "copyright",
      "es": "copyright",
      "pt": "copyright"
    },
    "pos": "noun",
    "ex": "著作権について話す"
  },
  {
    "id": "V1277",
    "w": "ちてきざいさん",
    "r": "ちてきざいさん",
    "m": {
      "en": "intellectual property",
      "zh-TW": "知的財産",
      "zh-CN": "知的財産",
      "ko": "intellectual property",
      "vi": "intellectual property",
      "id": "intellectual property",
      "es": "intellectual property",
      "pt": "intellectual property"
    },
    "pos": "noun",
    "ex": "知的財産について話す"
  },
  {
    "id": "V1278",
    "w": "ライセンス",
    "r": "らいせんす",
    "m": {
      "en": "license",
      "zh-TW": "ライセンス",
      "zh-CN": "ライセンス",
      "ko": "license",
      "vi": "license",
      "id": "license",
      "es": "license",
      "pt": "license"
    },
    "pos": "verb-godan",
    "ex": "ライセンスことができる"
  },
  {
    "id": "V1279",
    "w": "ロイヤリティ",
    "r": "ろいやりてぃ",
    "m": {
      "en": "royalty",
      "zh-TW": "ロイヤリティ",
      "zh-CN": "ロイヤリティ",
      "ko": "royalty",
      "vi": "royalty",
      "id": "royalty",
      "es": "royalty",
      "pt": "royalty"
    },
    "pos": "noun",
    "ex": "ロイヤリティについて話す"
  },
  {
    "id": "V1280",
    "w": "かくしん",
    "r": "かくしん",
    "m": {
      "en": "innovation",
      "zh-TW": "革新",
      "zh-CN": "革新",
      "ko": "innovation",
      "vi": "innovation",
      "id": "innovation",
      "es": "innovation",
      "pt": "innovation"
    },
    "pos": "noun",
    "ex": "革新について話す"
  },
  {
    "id": "V1281",
    "w": "かいりょう",
    "r": "かいりょう",
    "m": {
      "en": "improvement",
      "zh-TW": "改良",
      "zh-CN": "改良",
      "ko": "improvement",
      "vi": "improvement",
      "id": "improvement",
      "es": "improvement",
      "pt": "improvement"
    },
    "pos": "verb-godan",
    "ex": "改良ことができる"
  },
  {
    "id": "V1282",
    "w": "こうりつか",
    "r": "こうりつか",
    "m": {
      "en": "efficiency",
      "zh-TW": "効率化",
      "zh-CN": "効率化",
      "ko": "efficiency",
      "vi": "efficiency",
      "id": "efficiency",
      "es": "efficiency",
      "pt": "efficiency"
    },
    "pos": "noun",
    "ex": "効率化について話す"
  },
  {
    "id": "V1283",
    "w": "じどうか",
    "r": "じどうか",
    "m": {
      "en": "automation",
      "zh-TW": "自動化",
      "zh-CN": "自動化",
      "ko": "automation",
      "vi": "automation",
      "id": "automation",
      "es": "automation",
      "pt": "automation"
    },
    "pos": "noun",
    "ex": "自動化について話す"
  },
  {
    "id": "V1284",
    "w": "しょうりょくか",
    "r": "しょうりょくか",
    "m": {
      "en": "labor saving",
      "zh-TW": "省力化",
      "zh-CN": "省力化",
      "ko": "labor saving",
      "vi": "labor saving",
      "id": "labor saving",
      "es": "labor saving",
      "pt": "labor saving"
    },
    "pos": "noun",
    "ex": "省力化について話す"
  },
  {
    "id": "V1285",
    "w": "ごうりか",
    "r": "ごうりか",
    "m": {
      "en": "rationalization",
      "zh-TW": "合理化",
      "zh-CN": "合理化",
      "ko": "rationalization",
      "vi": "rationalization",
      "id": "rationalization",
      "es": "rationalization",
      "pt": "rationalization"
    },
    "pos": "noun",
    "ex": "合理化について話す"
  },
  {
    "id": "V1286",
    "w": "ひょうじゅんか",
    "r": "ひょうじゅんか",
    "m": {
      "en": "standardization",
      "zh-TW": "標準化",
      "zh-CN": "標準化",
      "ko": "standardization",
      "vi": "standardization",
      "id": "standardization",
      "es": "standardization",
      "pt": "standardization"
    },
    "pos": "noun",
    "ex": "標準化について話す"
  },
  {
    "id": "V1287",
    "w": "きんいつか",
    "r": "きんいつか",
    "m": {
      "en": "uniformity",
      "zh-TW": "均一化",
      "zh-CN": "均一化",
      "ko": "uniformity",
      "vi": "uniformity",
      "id": "uniformity",
      "es": "uniformity",
      "pt": "uniformity"
    },
    "pos": "noun",
    "ex": "均一化について話す"
  },
  {
    "id": "V1288",
    "w": "さべつか",
    "r": "さべつか",
    "m": {
      "en": "differentiation",
      "zh-TW": "差別化",
      "zh-CN": "差別化",
      "ko": "differentiation",
      "vi": "differentiation",
      "id": "differentiation",
      "es": "differentiation",
      "pt": "differentiation"
    },
    "pos": "noun",
    "ex": "差別化について話す"
  },
  {
    "id": "V1289",
    "w": "たようか",
    "r": "たようか",
    "m": {
      "en": "diversification",
      "zh-TW": "多様化",
      "zh-CN": "多様化",
      "ko": "diversification",
      "vi": "diversification",
      "id": "diversification",
      "es": "diversification",
      "pt": "diversification"
    },
    "pos": "noun",
    "ex": "多様化について話す"
  },
  {
    "id": "V1290",
    "w": "ふくざつか",
    "r": "ふくざつか",
    "m": {
      "en": "complication",
      "zh-TW": "複雑化",
      "zh-CN": "複雑化",
      "ko": "complication",
      "vi": "complication",
      "id": "complication",
      "es": "complication",
      "pt": "complication"
    },
    "pos": "noun",
    "ex": "複雑化について話す"
  },
  {
    "id": "V1291",
    "w": "かんそか",
    "r": "かんそか",
    "m": {
      "en": "simplification",
      "zh-TW": "簡素化",
      "zh-CN": "簡素化",
      "ko": "simplification",
      "vi": "simplification",
      "id": "simplification",
      "es": "simplification",
      "pt": "simplification"
    },
    "pos": "noun",
    "ex": "簡素化について話す"
  },
  {
    "id": "V1292",
    "w": "じんそくか",
    "r": "じんそくか",
    "m": {
      "en": "acceleration",
      "zh-TW": "迅速化",
      "zh-CN": "迅速化",
      "ko": "acceleration",
      "vi": "acceleration",
      "id": "acceleration",
      "es": "acceleration",
      "pt": "acceleration"
    },
    "pos": "noun",
    "ex": "迅速化について話す"
  },
  {
    "id": "V1293",
    "w": "けいこく",
    "r": "けいこく",
    "m": {
      "en": "warning",
      "zh-TW": "警告",
      "zh-CN": "警告",
      "ko": "warning",
      "vi": "warning",
      "id": "warning",
      "es": "warning",
      "pt": "warning"
    },
    "pos": "verb-godan",
    "ex": "警告ことができる"
  },
  {
    "id": "V1294",
    "w": "しょうにん",
    "r": "しょうにん",
    "m": {
      "en": "approval",
      "zh-TW": "承認",
      "zh-CN": "承認",
      "ko": "approval",
      "vi": "approval",
      "id": "approval",
      "es": "approval",
      "pt": "approval"
    },
    "pos": "noun",
    "ex": "承認について話す"
  },
  {
    "id": "V1295",
    "w": "にんか",
    "r": "にんか",
    "m": {
      "en": "authorization",
      "zh-TW": "認可",
      "zh-CN": "認可",
      "ko": "authorization",
      "vi": "authorization",
      "id": "authorization",
      "es": "authorization",
      "pt": "authorization"
    },
    "pos": "noun",
    "ex": "認可について話す"
  },
  {
    "id": "V1296",
    "w": "めんきょ",
    "r": "めんきょ",
    "m": {
      "en": "license",
      "zh-TW": "免許",
      "zh-CN": "免許",
      "ko": "license",
      "vi": "license",
      "id": "license",
      "es": "license",
      "pt": "license"
    },
    "pos": "noun",
    "ex": "免許について話す"
  },
  {
    "id": "V1297",
    "w": "しかく",
    "r": "しかく",
    "m": {
      "en": "qualification",
      "zh-TW": "資格",
      "zh-CN": "資格",
      "ko": "qualification",
      "vi": "qualification",
      "id": "qualification",
      "es": "qualification",
      "pt": "qualification"
    },
    "pos": "verb-godan",
    "ex": "資格ことができる"
  },
  {
    "id": "V1298",
    "w": "にんてい",
    "r": "にんてい",
    "m": {
      "en": "certification",
      "zh-TW": "認定",
      "zh-CN": "認定",
      "ko": "certification",
      "vi": "certification",
      "id": "certification",
      "es": "certification",
      "pt": "certification"
    },
    "pos": "i-adj",
    "ex": "とても認定"
  },
  {
    "id": "V1299",
    "w": "しんせい",
    "r": "しんせい",
    "m": {
      "en": "application",
      "zh-TW": "申請",
      "zh-CN": "申請",
      "ko": "application",
      "vi": "application",
      "id": "application",
      "es": "application",
      "pt": "application"
    },
    "pos": "i-adj",
    "ex": "とても申請"
  },
  {
    "id": "V1300",
    "w": "しんさ",
    "r": "しんさ",
    "m": {
      "en": "examination",
      "zh-TW": "審査",
      "zh-CN": "審査",
      "ko": "examination",
      "vi": "examination",
      "id": "examination",
      "es": "examination",
      "pt": "examination"
    },
    "pos": "noun",
    "ex": "審査について話す"
  },
  {
    "id": "V1301",
    "w": "合否",
    "r": "ごうひ",
    "m": {
      "en": "pass or fail",
      "zh-TW": "合否",
      "zh-CN": "合否",
      "ko": "pass or fail",
      "vi": "pass or fail",
      "id": "pass or fail",
      "es": "pass or fail",
      "pt": "pass or fail"
    },
    "pos": "noun",
    "ex": "合否について話す"
  },
  {
    "id": "V1302",
    "w": "とりけし",
    "r": "とりけし",
    "m": {
      "en": "cancellation",
      "zh-TW": "取消",
      "zh-CN": "取消",
      "ko": "cancellation",
      "vi": "cancellation",
      "id": "cancellation",
      "es": "cancellation",
      "pt": "cancellation"
    },
    "pos": "noun",
    "ex": "取消について話す"
  },
  {
    "id": "V1303",
    "w": "かいせい",
    "r": "かいせい",
    "m": {
      "en": "revision",
      "zh-TW": "改正",
      "zh-CN": "改正",
      "ko": "revision",
      "vi": "revision",
      "id": "revision",
      "es": "revision",
      "pt": "revision"
    },
    "pos": "i-adj",
    "ex": "とても改正"
  },
  {
    "id": "V1304",
    "w": "かいぜん",
    "r": "かいぜん",
    "m": {
      "en": "improvement",
      "zh-TW": "改善",
      "zh-CN": "改善",
      "ko": "improvement",
      "vi": "improvement",
      "id": "improvement",
      "es": "improvement",
      "pt": "improvement"
    },
    "pos": "noun",
    "ex": "改善について話す"
  },
  {
    "id": "V1305",
    "w": "かいかく",
    "r": "かいかく",
    "m": {
      "en": "reform",
      "zh-TW": "改革",
      "zh-CN": "改革",
      "ko": "reform",
      "vi": "reform",
      "id": "reform",
      "es": "reform",
      "pt": "reform"
    },
    "pos": "verb-godan",
    "ex": "改革ことができる"
  },
  {
    "id": "V1306",
    "w": "へんかく",
    "r": "へんかく",
    "m": {
      "en": "reform",
      "zh-TW": "変革",
      "zh-CN": "変革",
      "ko": "reform",
      "vi": "reform",
      "id": "reform",
      "es": "reform",
      "pt": "reform"
    },
    "pos": "verb-godan",
    "ex": "変革ことができる"
  },
  {
    "id": "V1307",
    "w": "てんかん",
    "r": "てんかん",
    "m": {
      "en": "conversion",
      "zh-TW": "転換",
      "zh-CN": "転換",
      "ko": "conversion",
      "vi": "conversion",
      "id": "conversion",
      "es": "conversion",
      "pt": "conversion"
    },
    "pos": "noun",
    "ex": "転換について話す"
  },
  {
    "id": "V1308",
    "w": "移行",
    "r": "いこう",
    "m": {
      "en": "transition",
      "zh-TW": "移行",
      "zh-CN": "移行",
      "ko": "transition",
      "vi": "transition",
      "id": "transition",
      "es": "transition",
      "pt": "transition"
    },
    "pos": "verb-godan",
    "ex": "移行ことができる"
  },
  {
    "id": "V1309",
    "w": "どうにゅう",
    "r": "どうにゅう",
    "m": {
      "en": "introduction",
      "zh-TW": "導入",
      "zh-CN": "導入",
      "ko": "introduction",
      "vi": "introduction",
      "id": "introduction",
      "es": "introduction",
      "pt": "introduction"
    },
    "pos": "verb-godan",
    "ex": "導入ことができる"
  },
  {
    "id": "V1310",
    "w": "てったい",
    "r": "てったい",
    "m": {
      "en": "withdrawal",
      "zh-TW": "撤退",
      "zh-CN": "撤退",
      "ko": "withdrawal",
      "vi": "withdrawal",
      "id": "withdrawal",
      "es": "withdrawal",
      "pt": "withdrawal"
    },
    "pos": "i-adj",
    "ex": "とても撤退"
  },
  {
    "id": "V1311",
    "w": "てっぱい",
    "r": "てっぱい",
    "m": {
      "en": "abolition",
      "zh-TW": "撤廃",
      "zh-CN": "撤廃",
      "ko": "abolition",
      "vi": "abolition",
      "id": "abolition",
      "es": "abolition",
      "pt": "abolition"
    },
    "pos": "i-adj",
    "ex": "とても撤廃"
  },
  {
    "id": "V1312",
    "w": "はいし",
    "r": "はいし",
    "m": {
      "en": "abolition",
      "zh-TW": "廃止",
      "zh-CN": "廃止",
      "ko": "abolition",
      "vi": "abolition",
      "id": "abolition",
      "es": "abolition",
      "pt": "abolition"
    },
    "pos": "noun",
    "ex": "廃止について話す"
  },
  {
    "id": "V1313",
    "w": "再開",
    "r": "さいかい",
    "m": {
      "en": "resumption",
      "zh-TW": "再開",
      "zh-CN": "再開",
      "ko": "resumption",
      "vi": "resumption",
      "id": "resumption",
      "es": "resumption",
      "pt": "resumption"
    },
    "pos": "i-adj",
    "ex": "とても再開"
  },
  {
    "id": "V1314",
    "w": "たっせい",
    "r": "たっせい",
    "m": {
      "en": "achievement",
      "zh-TW": "達成",
      "zh-CN": "達成",
      "ko": "achievement",
      "vi": "achievement",
      "id": "achievement",
      "es": "achievement",
      "pt": "achievement"
    },
    "pos": "i-adj",
    "ex": "とても達成"
  },
  {
    "id": "V1315",
    "w": "じつげん",
    "r": "じつげん",
    "m": {
      "en": "realization",
      "zh-TW": "実現",
      "zh-CN": "実現",
      "ko": "realization",
      "vi": "realization",
      "id": "realization",
      "es": "realization",
      "pt": "realization"
    },
    "pos": "noun",
    "ex": "実現について話す"
  },
  {
    "id": "V1316",
    "w": "せいりつ",
    "r": "せいりつ",
    "m": {
      "en": "establishment",
      "zh-TW": "成立",
      "zh-CN": "成立",
      "ko": "establishment",
      "vi": "establishment",
      "id": "establishment",
      "es": "establishment",
      "pt": "establishment"
    },
    "pos": "verb-godan",
    "ex": "成立ことができる"
  },
  {
    "id": "V1317",
    "w": "発足",
    "r": "ほっそく",
    "m": {
      "en": "inauguration",
      "zh-TW": "発足",
      "zh-CN": "発足",
      "ko": "inauguration",
      "vi": "inauguration",
      "id": "inauguration",
      "es": "inauguration",
      "pt": "inauguration"
    },
    "pos": "verb-godan",
    "ex": "発足ことができる"
  },
  {
    "id": "V1318",
    "w": "かいさん",
    "r": "かいさん",
    "m": {
      "en": "dissolution",
      "zh-TW": "解散",
      "zh-CN": "解散",
      "ko": "dissolution",
      "vi": "dissolution",
      "id": "dissolution",
      "es": "dissolution",
      "pt": "dissolution"
    },
    "pos": "noun",
    "ex": "解散について話す"
  },
  {
    "id": "V1319",
    "w": "とうごう",
    "r": "とうごう",
    "m": {
      "en": "integration",
      "zh-TW": "統合",
      "zh-CN": "統合",
      "ko": "integration",
      "vi": "integration",
      "id": "integration",
      "es": "integration",
      "pt": "integration"
    },
    "pos": "verb-godan",
    "ex": "統合ことができる"
  },
  {
    "id": "V1320",
    "w": "ぶんり",
    "r": "ぶんり",
    "m": {
      "en": "separation",
      "zh-TW": "分離",
      "zh-CN": "分離",
      "ko": "separation",
      "vi": "separation",
      "id": "separation",
      "es": "separation",
      "pt": "separation"
    },
    "pos": "noun",
    "ex": "分離について話す"
  },
  {
    "id": "V1321",
    "w": "どくりつ",
    "r": "どくりつ",
    "m": {
      "en": "independence",
      "zh-TW": "独立",
      "zh-CN": "独立",
      "ko": "independence",
      "vi": "independence",
      "id": "independence",
      "es": "independence",
      "pt": "independence"
    },
    "pos": "verb-godan",
    "ex": "独立ことができる"
  },
  {
    "id": "V1322",
    "w": "いそん",
    "r": "いそん",
    "m": {
      "en": "dependence",
      "zh-TW": "依存",
      "zh-CN": "依存",
      "ko": "dependence",
      "vi": "dependence",
      "id": "dependence",
      "es": "dependence",
      "pt": "dependence"
    },
    "pos": "noun",
    "ex": "依存について話す"
  },
  {
    "id": "V1323",
    "w": "れんけい",
    "r": "れんけい",
    "m": {
      "en": "cooperation",
      "zh-TW": "連携",
      "zh-CN": "連携",
      "ko": "cooperation",
      "vi": "cooperation",
      "id": "cooperation",
      "es": "cooperation",
      "pt": "cooperation"
    },
    "pos": "i-adj",
    "ex": "とても連携"
  },
  {
    "id": "V1324",
    "w": "きょうりょく",
    "r": "きょうりょく",
    "m": {
      "en": "cooperation",
      "zh-TW": "協力",
      "zh-CN": "協力",
      "ko": "cooperation",
      "vi": "cooperation",
      "id": "cooperation",
      "es": "cooperation",
      "pt": "cooperation"
    },
    "pos": "verb-godan",
    "ex": "協力ことができる"
  },
  {
    "id": "V1325",
    "w": "たいりつ",
    "r": "たいりつ",
    "m": {
      "en": "opposition",
      "zh-TW": "対立",
      "zh-CN": "対立",
      "ko": "opposition",
      "vi": "opposition",
      "id": "opposition",
      "es": "opposition",
      "pt": "opposition"
    },
    "pos": "verb-godan",
    "ex": "対立ことができる"
  },
  {
    "id": "V1326",
    "w": "だきょう",
    "r": "だきょう",
    "m": {
      "en": "compromise",
      "zh-TW": "妥協",
      "zh-CN": "妥協",
      "ko": "compromise",
      "vi": "compromise",
      "id": "compromise",
      "es": "compromise",
      "pt": "compromise"
    },
    "pos": "verb-godan",
    "ex": "妥協ことができる"
  },
  {
    "id": "V1327",
    "w": "ちょうせい",
    "r": "ちょうせい",
    "m": {
      "en": "adjustment",
      "zh-TW": "調整",
      "zh-CN": "調整",
      "ko": "adjustment",
      "vi": "adjustment",
      "id": "adjustment",
      "es": "adjustment",
      "pt": "adjustment"
    },
    "pos": "i-adj",
    "ex": "とても調整"
  },
  {
    "id": "V1328",
    "w": "ちゅうかい",
    "r": "ちゅうかい",
    "m": {
      "en": "mediation",
      "zh-TW": "仲介",
      "zh-CN": "仲介",
      "ko": "mediation",
      "vi": "mediation",
      "id": "mediation",
      "es": "mediation",
      "pt": "mediation"
    },
    "pos": "i-adj",
    "ex": "とても仲介"
  },
  {
    "id": "V1329",
    "w": "こうしょう",
    "r": "こうしょう",
    "m": {
      "en": "negotiation",
      "zh-TW": "交渉",
      "zh-CN": "交渉",
      "ko": "negotiation",
      "vi": "negotiation",
      "id": "negotiation",
      "es": "negotiation",
      "pt": "negotiation"
    },
    "pos": "verb-godan",
    "ex": "交渉ことができる"
  },
  {
    "id": "V1330",
    "w": "ていけつ",
    "r": "ていけつ",
    "m": {
      "en": "conclusion",
      "zh-TW": "締結",
      "zh-CN": "締結",
      "ko": "conclusion",
      "vi": "conclusion",
      "id": "conclusion",
      "es": "conclusion",
      "pt": "conclusion"
    },
    "pos": "verb-godan",
    "ex": "締結ことができる"
  },
  {
    "id": "V1331",
    "w": "りこう",
    "r": "りこう",
    "m": {
      "en": "performance",
      "zh-TW": "履行",
      "zh-CN": "履行",
      "ko": "performance",
      "vi": "performance",
      "id": "performance",
      "es": "performance",
      "pt": "performance"
    },
    "pos": "verb-godan",
    "ex": "履行ことができる"
  },
  {
    "id": "V1332",
    "w": "いはん",
    "r": "いはん",
    "m": {
      "en": "violation",
      "zh-TW": "違反",
      "zh-CN": "違反",
      "ko": "violation",
      "vi": "violation",
      "id": "violation",
      "es": "violation",
      "pt": "violation"
    },
    "pos": "noun",
    "ex": "違反について話す"
  },
  {
    "id": "V1333",
    "w": "かいじょ",
    "r": "かいじょ",
    "m": {
      "en": "cancellation",
      "zh-TW": "解除",
      "zh-CN": "解除",
      "ko": "cancellation",
      "vi": "cancellation",
      "id": "cancellation",
      "es": "cancellation",
      "pt": "cancellation"
    },
    "pos": "noun",
    "ex": "解除について話す"
  },
  {
    "id": "V1334",
    "w": "かいやく",
    "r": "かいやく",
    "m": {
      "en": "termination",
      "zh-TW": "解約",
      "zh-CN": "解約",
      "ko": "termination",
      "vi": "termination",
      "id": "termination",
      "es": "termination",
      "pt": "termination"
    },
    "pos": "verb-godan",
    "ex": "解約ことができる"
  },
  {
    "id": "V1335",
    "w": "ぞうか",
    "r": "ぞうか",
    "m": {
      "en": "increase",
      "zh-TW": "増加",
      "zh-CN": "増加",
      "ko": "increase",
      "vi": "increase",
      "id": "increase",
      "es": "increase",
      "pt": "increase"
    },
    "pos": "noun",
    "ex": "増加について話す"
  },
  {
    "id": "V1336",
    "w": "げんしょう",
    "r": "げんしょう",
    "m": {
      "en": "decrease",
      "zh-TW": "減少",
      "zh-CN": "減少",
      "ko": "decrease",
      "vi": "decrease",
      "id": "decrease",
      "es": "decrease",
      "pt": "decrease"
    },
    "pos": "verb-godan",
    "ex": "減少ことができる"
  },
  {
    "id": "V1337",
    "w": "じょうしょう",
    "r": "じょうしょう",
    "m": {
      "en": "rise",
      "zh-TW": "上昇",
      "zh-CN": "上昇",
      "ko": "rise",
      "vi": "rise",
      "id": "rise",
      "es": "rise",
      "pt": "rise"
    },
    "pos": "verb-godan",
    "ex": "上昇ことができる"
  },
  {
    "id": "V1338",
    "w": "下降",
    "r": "かこう",
    "m": {
      "en": "descent",
      "zh-TW": "下降",
      "zh-CN": "下降",
      "ko": "descent",
      "vi": "descent",
      "id": "descent",
      "es": "descent",
      "pt": "descent"
    },
    "pos": "verb-godan",
    "ex": "下降ことができる"
  },
  {
    "id": "V1339",
    "w": "こうじょう",
    "r": "こうじょう",
    "m": {
      "en": "improvement",
      "zh-TW": "向上",
      "zh-CN": "向上",
      "ko": "improvement",
      "vi": "improvement",
      "id": "improvement",
      "es": "improvement",
      "pt": "improvement"
    },
    "pos": "verb-godan",
    "ex": "向上ことができる"
  },
  {
    "id": "V1340",
    "w": "低下",
    "r": "ていか",
    "m": {
      "en": "decline",
      "zh-TW": "低下",
      "zh-CN": "低下",
      "ko": "decline",
      "vi": "decline",
      "id": "decline",
      "es": "decline",
      "pt": "decline"
    },
    "pos": "noun",
    "ex": "低下について話す"
  },
  {
    "id": "V1341",
    "w": "あっか",
    "r": "あっか",
    "m": {
      "en": "deterioration",
      "zh-TW": "悪化",
      "zh-CN": "悪化",
      "ko": "deterioration",
      "vi": "deterioration",
      "id": "deterioration",
      "es": "deterioration",
      "pt": "deterioration"
    },
    "pos": "noun",
    "ex": "悪化について話す"
  },
  {
    "id": "V1342",
    "w": "かいふく",
    "r": "かいふく",
    "m": {
      "en": "recovery",
      "zh-TW": "回復",
      "zh-CN": "回復",
      "ko": "recovery",
      "vi": "recovery",
      "id": "recovery",
      "es": "recovery",
      "pt": "recovery"
    },
    "pos": "verb-godan",
    "ex": "回復ことができる"
  },
  {
    "id": "V1343",
    "w": "いじ",
    "r": "いじ",
    "m": {
      "en": "maintenance",
      "zh-TW": "維持",
      "zh-CN": "維持",
      "ko": "maintenance",
      "vi": "maintenance",
      "id": "maintenance",
      "es": "maintenance",
      "pt": "maintenance"
    },
    "pos": "noun",
    "ex": "維持について話す"
  },
  {
    "id": "V1344",
    "w": "けいぞく",
    "r": "けいぞく",
    "m": {
      "en": "continuation",
      "zh-TW": "継続",
      "zh-CN": "継続",
      "ko": "continuation",
      "vi": "continuation",
      "id": "continuation",
      "es": "continuation",
      "pt": "continuation"
    },
    "pos": "verb-godan",
    "ex": "継続ことができる"
  },
  {
    "id": "V1345",
    "w": "ちゅうだん",
    "r": "ちゅうだん",
    "m": {
      "en": "interruption",
      "zh-TW": "中断",
      "zh-CN": "中断",
      "ko": "interruption",
      "vi": "interruption",
      "id": "interruption",
      "es": "interruption",
      "pt": "interruption"
    },
    "pos": "noun",
    "ex": "中断について話す"
  },
  {
    "id": "V1346",
    "w": "休止",
    "r": "きゅうし",
    "m": {
      "en": "pause",
      "zh-TW": "休止",
      "zh-CN": "休止",
      "ko": "pause",
      "vi": "pause",
      "id": "pause",
      "es": "pause",
      "pt": "pause"
    },
    "pos": "noun",
    "ex": "休止について話す"
  },
  {
    "id": "V1347",
    "w": "活動",
    "r": "かつどう",
    "m": {
      "en": "activity",
      "zh-TW": "活動",
      "zh-CN": "活動",
      "ko": "activity",
      "vi": "activity",
      "id": "activity",
      "es": "activity",
      "pt": "activity"
    },
    "pos": "verb-godan",
    "ex": "活動ことができる"
  },
  {
    "id": "V1348",
    "w": "じっこう",
    "r": "じっこう",
    "m": {
      "en": "execution",
      "zh-TW": "実行",
      "zh-CN": "実行",
      "ko": "execution",
      "vi": "execution",
      "id": "execution",
      "es": "execution",
      "pt": "execution"
    },
    "pos": "verb-godan",
    "ex": "実行ことができる",
    "syn": [
      "行う",
      "実施する",
      "遂行する"
    ]
  },
  {
    "id": "V1349",
    "w": "すいこう",
    "r": "すいこう",
    "m": {
      "en": "accomplishment",
      "zh-TW": "遂行",
      "zh-CN": "遂行",
      "ko": "accomplishment",
      "vi": "accomplishment",
      "id": "accomplishment",
      "es": "accomplishment",
      "pt": "accomplishment"
    },
    "pos": "verb-godan",
    "ex": "遂行ことができる"
  },
  {
    "id": "V1350",
    "w": "すいしん",
    "r": "すいしん",
    "m": {
      "en": "promotion",
      "zh-TW": "推進",
      "zh-CN": "推進",
      "ko": "promotion",
      "vi": "promotion",
      "id": "promotion",
      "es": "promotion",
      "pt": "promotion"
    },
    "pos": "noun",
    "ex": "推進について話す"
  },
  {
    "id": "V1351",
    "w": "そくしん",
    "r": "そくしん",
    "m": {
      "en": "acceleration",
      "zh-TW": "促進",
      "zh-CN": "促進",
      "ko": "acceleration",
      "vi": "acceleration",
      "id": "acceleration",
      "es": "acceleration",
      "pt": "acceleration"
    },
    "pos": "noun",
    "ex": "促進について話す"
  },
  {
    "id": "V1352",
    "w": "よくせい",
    "r": "よくせい",
    "m": {
      "en": "restraint",
      "zh-TW": "抑制",
      "zh-CN": "抑制",
      "ko": "restraint",
      "vi": "restraint",
      "id": "restraint",
      "es": "restraint",
      "pt": "restraint"
    },
    "pos": "i-adj",
    "ex": "とても抑制"
  },
  {
    "id": "V1353",
    "w": "きせい",
    "r": "きせい",
    "m": {
      "en": "regulation",
      "zh-TW": "規制",
      "zh-CN": "規制",
      "ko": "regulation",
      "vi": "regulation",
      "id": "regulation",
      "es": "regulation",
      "pt": "regulation"
    },
    "pos": "i-adj",
    "ex": "とても規制"
  },
  {
    "id": "V1354",
    "w": "かんわ",
    "r": "かんわ",
    "m": {
      "en": "relaxation",
      "zh-TW": "緩和",
      "zh-CN": "緩和",
      "ko": "relaxation",
      "vi": "relaxation",
      "id": "relaxation",
      "es": "relaxation",
      "pt": "relaxation"
    },
    "pos": "noun",
    "ex": "緩和について話す"
  },
  {
    "id": "V1355",
    "w": "きょうか",
    "r": "きょうか",
    "m": {
      "en": "strengthening",
      "zh-TW": "強化",
      "zh-CN": "強化",
      "ko": "strengthening",
      "vi": "strengthening",
      "id": "strengthening",
      "es": "strengthening",
      "pt": "strengthening"
    },
    "pos": "noun",
    "ex": "強化について話す"
  },
  {
    "id": "V1356",
    "w": "弱体",
    "r": "じゃくたい",
    "m": {
      "en": "weakening",
      "zh-TW": "弱体",
      "zh-CN": "弱体",
      "ko": "weakening",
      "vi": "weakening",
      "id": "weakening",
      "es": "weakening",
      "pt": "weakening"
    },
    "pos": "i-adj",
    "ex": "とても弱体"
  },
  {
    "id": "V1357",
    "w": "じゅうじつ",
    "r": "じゅうじつ",
    "m": {
      "en": "enhancement",
      "zh-TW": "充実",
      "zh-CN": "充実",
      "ko": "enhancement",
      "vi": "enhancement",
      "id": "enhancement",
      "es": "enhancement",
      "pt": "enhancement"
    },
    "pos": "verb-godan",
    "ex": "充実ことができる"
  },
  {
    "id": "V1358",
    "w": "せいび",
    "r": "せいび",
    "m": {
      "en": "maintenance",
      "zh-TW": "整備",
      "zh-CN": "整備",
      "ko": "maintenance",
      "vi": "maintenance",
      "id": "maintenance",
      "es": "maintenance",
      "pt": "maintenance"
    },
    "pos": "noun",
    "ex": "整備について話す"
  },
  {
    "id": "V1359",
    "w": "たいおう",
    "r": "たいおう",
    "m": {
      "en": "response",
      "zh-TW": "対応",
      "zh-CN": "対応",
      "ko": "response",
      "vi": "response",
      "id": "response",
      "es": "response",
      "pt": "response"
    },
    "pos": "verb-godan",
    "ex": "対応ことができる"
  },
  {
    "id": "V1360",
    "w": "たいしょ",
    "r": "たいしょ",
    "m": {
      "en": "coping",
      "zh-TW": "対処",
      "zh-CN": "対処",
      "ko": "coping",
      "vi": "coping",
      "id": "coping",
      "es": "coping",
      "pt": "coping"
    },
    "pos": "noun",
    "ex": "対処について話す"
  },
  {
    "id": "V1361",
    "w": "しょり",
    "r": "しょり",
    "m": {
      "en": "processing",
      "zh-TW": "処理",
      "zh-CN": "処理",
      "ko": "processing",
      "vi": "processing",
      "id": "processing",
      "es": "processing",
      "pt": "processing"
    },
    "pos": "noun",
    "ex": "処理について話す"
  },
  {
    "id": "V1362",
    "w": "かんり",
    "r": "かんり",
    "m": {
      "en": "management",
      "zh-TW": "管理",
      "zh-CN": "管理",
      "ko": "management",
      "vi": "management",
      "id": "management",
      "es": "management",
      "pt": "management"
    },
    "pos": "noun",
    "ex": "管理について話す"
  },
  {
    "id": "V1363",
    "w": "かんし",
    "r": "かんし",
    "m": {
      "en": "monitoring",
      "zh-TW": "監視",
      "zh-CN": "監視",
      "ko": "monitoring",
      "vi": "monitoring",
      "id": "monitoring",
      "es": "monitoring",
      "pt": "monitoring"
    },
    "pos": "noun",
    "ex": "監視について話す"
  },
  {
    "id": "V1364",
    "w": "てんけん",
    "r": "てんけん",
    "m": {
      "en": "inspection",
      "zh-TW": "点検",
      "zh-CN": "点検",
      "ko": "inspection",
      "vi": "inspection",
      "id": "inspection",
      "es": "inspection",
      "pt": "inspection"
    },
    "pos": "noun",
    "ex": "点検について話す"
  },
  {
    "id": "V1365",
    "w": "けんしょう",
    "r": "けんしょう",
    "m": {
      "en": "verification",
      "zh-TW": "検証",
      "zh-CN": "検証",
      "ko": "verification",
      "vi": "verification",
      "id": "verification",
      "es": "verification",
      "pt": "verification"
    },
    "pos": "verb-godan",
    "ex": "検証ことができる"
  },
  {
    "id": "V1366",
    "w": "はんてい",
    "r": "はんてい",
    "m": {
      "en": "judgment",
      "zh-TW": "判定",
      "zh-CN": "判定",
      "ko": "judgment",
      "vi": "judgment",
      "id": "judgment",
      "es": "judgment",
      "pt": "judgment"
    },
    "pos": "i-adj",
    "ex": "とても判定"
  },
  {
    "id": "V1367",
    "w": "せんてい",
    "r": "せんてい",
    "m": {
      "en": "selection",
      "zh-TW": "選定",
      "zh-CN": "選定",
      "ko": "selection",
      "vi": "selection",
      "id": "selection",
      "es": "selection",
      "pt": "selection"
    },
    "pos": "i-adj",
    "ex": "とても選定"
  },
  {
    "id": "V1368",
    "w": "きゃっか",
    "r": "きゃっか",
    "m": {
      "en": "rejection",
      "zh-TW": "却下",
      "zh-CN": "却下",
      "ko": "rejection",
      "vi": "rejection",
      "id": "rejection",
      "es": "rejection",
      "pt": "rejection"
    },
    "pos": "noun",
    "ex": "却下について話す"
  },
  {
    "id": "V1369",
    "w": "ひにん",
    "r": "ひにん",
    "m": {
      "en": "denial",
      "zh-TW": "否認",
      "zh-CN": "否認",
      "ko": "denial",
      "vi": "denial",
      "id": "denial",
      "es": "denial",
      "pt": "denial"
    },
    "pos": "noun",
    "ex": "否認について話す"
  },
  {
    "id": "V1370",
    "w": "してい",
    "r": "してい",
    "m": {
      "en": "designation",
      "zh-TW": "指定",
      "zh-CN": "指定",
      "ko": "designation",
      "vi": "designation",
      "id": "designation",
      "es": "designation",
      "pt": "designation"
    },
    "pos": "i-adj",
    "ex": "とても指定"
  },
  {
    "id": "V1371",
    "w": "はつれい",
    "r": "はつれい",
    "m": {
      "en": "issuance",
      "zh-TW": "発令",
      "zh-CN": "発令",
      "ko": "issuance",
      "vi": "issuance",
      "id": "issuance",
      "es": "issuance",
      "pt": "issuance"
    },
    "pos": "i-adj",
    "ex": "とても発令"
  },
  {
    "id": "V1372",
    "w": "しこう",
    "r": "しこう",
    "m": {
      "en": "enforcement",
      "zh-TW": "施行",
      "zh-CN": "施行",
      "ko": "enforcement",
      "vi": "enforcement",
      "id": "enforcement",
      "es": "enforcement",
      "pt": "enforcement"
    },
    "pos": "verb-godan",
    "ex": "施行ことができる"
  },
  {
    "id": "V1373",
    "w": "てきよう",
    "r": "てきよう",
    "m": {
      "en": "application",
      "zh-TW": "適用",
      "zh-CN": "適用",
      "ko": "application",
      "vi": "application",
      "id": "application",
      "es": "application",
      "pt": "application"
    },
    "pos": "verb-godan",
    "ex": "適用ことができる"
  },
  {
    "id": "V1374",
    "w": "じょがい",
    "r": "じょがい",
    "m": {
      "en": "exclusion",
      "zh-TW": "除外",
      "zh-CN": "除外",
      "ko": "exclusion",
      "vi": "exclusion",
      "id": "exclusion",
      "es": "exclusion",
      "pt": "exclusion"
    },
    "pos": "i-adj",
    "ex": "とても除外"
  },
  {
    "id": "V1375",
    "w": "たいしょう",
    "r": "たいしょう",
    "m": {
      "en": "target",
      "zh-TW": "対象",
      "zh-CN": "対象",
      "ko": "target",
      "vi": "target",
      "id": "target",
      "es": "target",
      "pt": "target"
    },
    "pos": "verb-godan",
    "ex": "対象ことができる"
  },
  {
    "id": "V1376",
    "w": "きじゅん",
    "r": "きじゅん",
    "m": {
      "en": "standard",
      "zh-TW": "基準",
      "zh-CN": "基準",
      "ko": "standard",
      "vi": "standard",
      "id": "standard",
      "es": "standard",
      "pt": "standard"
    },
    "pos": "noun",
    "ex": "基準について話す"
  },
  {
    "id": "V1377",
    "w": "じょうけん",
    "r": "じょうけん",
    "m": {
      "en": "condition",
      "zh-TW": "条件",
      "zh-CN": "条件",
      "ko": "condition",
      "vi": "condition",
      "id": "condition",
      "es": "condition",
      "pt": "condition"
    },
    "pos": "noun",
    "ex": "条件について話す"
  },
  {
    "id": "V1378",
    "w": "ようけん",
    "r": "ようけん",
    "m": {
      "en": "requirement",
      "zh-TW": "要件",
      "zh-CN": "要件",
      "ko": "requirement",
      "vi": "requirement",
      "id": "requirement",
      "es": "requirement",
      "pt": "requirement"
    },
    "pos": "noun",
    "ex": "要件について話す"
  },
  {
    "id": "V1379",
    "w": "けんげん",
    "r": "けんげん",
    "m": {
      "en": "authority",
      "zh-TW": "権限",
      "zh-CN": "権限",
      "ko": "authority",
      "vi": "authority",
      "id": "authority",
      "es": "authority",
      "pt": "authority"
    },
    "pos": "noun",
    "ex": "権限について話す"
  },
  {
    "id": "V1380",
    "w": "きのう",
    "r": "きのう",
    "m": {
      "en": "function",
      "zh-TW": "機能",
      "zh-CN": "機能",
      "ko": "function",
      "vi": "function",
      "id": "function",
      "es": "function",
      "pt": "function"
    },
    "pos": "verb-godan",
    "ex": "機能ことができる"
  },
  {
    "id": "V1381",
    "w": "せいのう",
    "r": "せいのう",
    "m": {
      "en": "performance",
      "zh-TW": "性能",
      "zh-CN": "性能",
      "ko": "performance",
      "vi": "performance",
      "id": "performance",
      "es": "performance",
      "pt": "performance"
    },
    "pos": "verb-godan",
    "ex": "性能ことができる"
  },
  {
    "id": "V1382",
    "w": "こうか",
    "r": "こうか",
    "m": {
      "en": "effect",
      "zh-TW": "効果",
      "zh-CN": "効果",
      "ko": "effect",
      "vi": "effect",
      "id": "effect",
      "es": "effect",
      "pt": "effect"
    },
    "pos": "noun",
    "ex": "効果について話す"
  },
  {
    "id": "V1383",
    "w": "えいきょう",
    "r": "えいきょう",
    "m": {
      "en": "influence",
      "zh-TW": "影響",
      "zh-CN": "影響",
      "ko": "influence",
      "vi": "influence",
      "id": "influence",
      "es": "influence",
      "pt": "influence"
    },
    "pos": "verb-godan",
    "ex": "健康に影響がある",
    "syn": [
      "作用",
      "効果",
      "インパクト"
    ]
  },
  {
    "id": "V1384",
    "w": "せいか",
    "r": "せいか",
    "m": {
      "en": "achievement",
      "zh-TW": "成果",
      "zh-CN": "成果",
      "ko": "achievement",
      "vi": "achievement",
      "id": "achievement",
      "es": "achievement",
      "pt": "achievement"
    },
    "pos": "noun",
    "ex": "成果について話す"
  },
  {
    "id": "V1385",
    "w": "じっせき",
    "r": "じっせき",
    "m": {
      "en": "track record",
      "zh-TW": "実績",
      "zh-CN": "実績",
      "ko": "track record",
      "vi": "track record",
      "id": "track record",
      "es": "track record",
      "pt": "track record"
    },
    "pos": "noun",
    "ex": "実績について話す"
  },
  {
    "id": "V1386",
    "w": "ぎょうせき",
    "r": "ぎょうせき",
    "m": {
      "en": "performance",
      "zh-TW": "業績",
      "zh-CN": "業績",
      "ko": "performance",
      "vi": "performance",
      "id": "performance",
      "es": "performance",
      "pt": "performance"
    },
    "pos": "noun",
    "ex": "業績について話す"
  },
  {
    "id": "V1387",
    "w": "ひょうばん",
    "r": "ひょうばん",
    "m": {
      "en": "reputation",
      "zh-TW": "評判",
      "zh-CN": "評判",
      "ko": "reputation",
      "vi": "reputation",
      "id": "reputation",
      "es": "reputation",
      "pt": "reputation"
    },
    "pos": "noun",
    "ex": "評判について話す"
  },
  {
    "id": "V1388",
    "w": "しんよう",
    "r": "しんよう",
    "m": {
      "en": "credit",
      "zh-TW": "信用",
      "zh-CN": "信用",
      "ko": "credit",
      "vi": "credit",
      "id": "credit",
      "es": "credit",
      "pt": "credit"
    },
    "pos": "verb-godan",
    "ex": "信用ことができる"
  },
  {
    "id": "V1389",
    "w": "じつりょく",
    "r": "じつりょく",
    "m": {
      "en": "ability",
      "zh-TW": "実力",
      "zh-CN": "実力",
      "ko": "ability",
      "vi": "ability",
      "id": "ability",
      "es": "ability",
      "pt": "ability"
    },
    "pos": "verb-godan",
    "ex": "実力ことができる"
  },
  {
    "id": "V1390",
    "w": "がくれき",
    "r": "がくれき",
    "m": {
      "en": "education",
      "zh-TW": "学歴",
      "zh-CN": "学歴",
      "ko": "education",
      "vi": "education",
      "id": "education",
      "es": "education",
      "pt": "education"
    },
    "pos": "noun",
    "ex": "学歴について話す"
  },
  {
    "id": "V1391",
    "w": "しょくれき",
    "r": "しょくれき",
    "m": {
      "en": "career",
      "zh-TW": "職歴",
      "zh-CN": "職歴",
      "ko": "career",
      "vi": "career",
      "id": "career",
      "es": "career",
      "pt": "career"
    },
    "pos": "noun",
    "ex": "職歴について話す"
  },
  {
    "id": "V1392",
    "w": "りれき",
    "r": "りれき",
    "m": {
      "en": "history",
      "zh-TW": "履歴",
      "zh-CN": "履歴",
      "ko": "history",
      "vi": "history",
      "id": "history",
      "es": "history",
      "pt": "history"
    },
    "pos": "noun",
    "ex": "履歴について話す"
  },
  {
    "id": "V1393",
    "w": "けいれき",
    "r": "けいれき",
    "m": {
      "en": "background",
      "zh-TW": "経歴",
      "zh-CN": "経歴",
      "ko": "background",
      "vi": "background",
      "id": "background",
      "es": "background",
      "pt": "background"
    },
    "pos": "noun",
    "ex": "経歴について話す"
  },
  {
    "id": "V1394",
    "w": "りゃくれき",
    "r": "りゃくれき",
    "m": {
      "en": "brief history",
      "zh-TW": "略歴",
      "zh-CN": "略歴",
      "ko": "brief history",
      "vi": "brief history",
      "id": "brief history",
      "es": "brief history",
      "pt": "brief history"
    },
    "pos": "noun",
    "ex": "略歴について話す"
  },
  {
    "id": "V1395",
    "w": "しょうさい",
    "r": "しょうさい",
    "m": {
      "en": "details",
      "zh-TW": "詳細",
      "zh-CN": "詳細",
      "ko": "details",
      "vi": "details",
      "id": "details",
      "es": "details",
      "pt": "details"
    },
    "pos": "i-adj",
    "ex": "とても詳細"
  },
  {
    "id": "V1396",
    "w": "がいよう",
    "r": "がいよう",
    "m": {
      "en": "outline",
      "zh-TW": "概要",
      "zh-CN": "概要",
      "ko": "outline",
      "vi": "outline",
      "id": "outline",
      "es": "outline",
      "pt": "outline"
    },
    "pos": "verb-godan",
    "ex": "概要ことができる"
  },
  {
    "id": "V1397",
    "w": "ようやく",
    "r": "ようやく",
    "m": {
      "en": "summary",
      "zh-TW": "要約",
      "zh-CN": "要約",
      "ko": "summary",
      "vi": "summary",
      "id": "summary",
      "es": "summary",
      "pt": "summary"
    },
    "pos": "verb-godan",
    "ex": "要約ことができる"
  },
  {
    "id": "V1398",
    "w": "ようてん",
    "r": "ようてん",
    "m": {
      "en": "main point",
      "zh-TW": "要点",
      "zh-CN": "要点",
      "ko": "main point",
      "vi": "main point",
      "id": "main point",
      "es": "main point",
      "pt": "main point"
    },
    "pos": "noun",
    "ex": "要点について話す"
  },
  {
    "id": "V1399",
    "w": "ろんてん",
    "r": "ろんてん",
    "m": {
      "en": "issue",
      "zh-TW": "論点",
      "zh-CN": "論点",
      "ko": "issue",
      "vi": "issue",
      "id": "issue",
      "es": "issue",
      "pt": "issue"
    },
    "pos": "noun",
    "ex": "論点について話す"
  },
  {
    "id": "V1400",
    "w": "そうてん",
    "r": "そうてん",
    "m": {
      "en": "point of contention",
      "zh-TW": "争点",
      "zh-CN": "争点",
      "ko": "point of contention",
      "vi": "point of contention",
      "id": "point of contention",
      "es": "point of contention",
      "pt": "point of contention"
    },
    "pos": "noun",
    "ex": "争点について話す"
  },
  {
    "id": "V1401",
    "w": "しょうてん",
    "r": "しょうてん",
    "m": {
      "en": "focus",
      "zh-TW": "焦点",
      "zh-CN": "焦点",
      "ko": "focus",
      "vi": "focus",
      "id": "focus",
      "es": "focus",
      "pt": "focus"
    },
    "pos": "noun",
    "ex": "焦点について話す"
  },
  {
    "id": "V1402",
    "w": "してん",
    "r": "してん",
    "m": {
      "en": "viewpoint",
      "zh-TW": "視点",
      "zh-CN": "視点",
      "ko": "viewpoint",
      "vi": "viewpoint",
      "id": "viewpoint",
      "es": "viewpoint",
      "pt": "viewpoint"
    },
    "pos": "noun",
    "ex": "視点について話す"
  },
  {
    "id": "V1403",
    "w": "かんてん",
    "r": "かんてん",
    "m": {
      "en": "perspective",
      "zh-TW": "観点",
      "zh-CN": "観点",
      "ko": "perspective",
      "vi": "perspective",
      "id": "perspective",
      "es": "perspective",
      "pt": "perspective"
    },
    "pos": "noun",
    "ex": "観点について話す"
  },
  {
    "id": "V1404",
    "w": "たちば",
    "r": "たちば",
    "m": {
      "en": "standpoint",
      "zh-TW": "立場",
      "zh-CN": "立場",
      "ko": "standpoint",
      "vi": "standpoint",
      "id": "standpoint",
      "es": "standpoint",
      "pt": "standpoint"
    },
    "pos": "noun",
    "ex": "立場について話す"
  },
  {
    "id": "V1405",
    "w": "けんかい",
    "r": "けんかい",
    "m": {
      "en": "view",
      "zh-TW": "見解",
      "zh-CN": "見解",
      "ko": "view",
      "vi": "view",
      "id": "view",
      "es": "view",
      "pt": "view"
    },
    "pos": "i-adj",
    "ex": "とても見解"
  },
  {
    "id": "V1406",
    "w": "考え方",
    "r": "かんがえかた",
    "m": {
      "en": "way of thinking",
      "zh-TW": "考え方",
      "zh-CN": "考え方",
      "ko": "way of thinking",
      "vi": "way of thinking",
      "id": "way of thinking",
      "es": "way of thinking",
      "pt": "way of thinking"
    },
    "pos": "noun",
    "ex": "考え方について話す"
  },
  {
    "id": "V1407",
    "w": "ほうしん",
    "r": "ほうしん",
    "m": {
      "en": "policy",
      "zh-TW": "方針",
      "zh-CN": "方針",
      "ko": "policy",
      "vi": "policy",
      "id": "policy",
      "es": "policy",
      "pt": "policy"
    },
    "pos": "noun",
    "ex": "方針について話す"
  },
  {
    "id": "V1408",
    "w": "もくひょう",
    "r": "もくひょう",
    "m": {
      "en": "goal",
      "zh-TW": "目標",
      "zh-CN": "目標",
      "ko": "goal",
      "vi": "goal",
      "id": "goal",
      "es": "goal",
      "pt": "goal"
    },
    "pos": "verb-godan",
    "ex": "目標ことができる"
  },
  {
    "id": "V1409",
    "w": "ねらい",
    "r": "ねらい",
    "m": {
      "en": "aim",
      "zh-TW": "狙い",
      "zh-CN": "狙い",
      "ko": "aim",
      "vi": "aim",
      "id": "aim",
      "es": "aim",
      "pt": "aim"
    },
    "pos": "i-adj",
    "ex": "とても狙い"
  },
  {
    "id": "V1410",
    "w": "しゅし",
    "r": "しゅし",
    "m": {
      "en": "purpose",
      "zh-TW": "趣旨",
      "zh-CN": "趣旨",
      "ko": "purpose",
      "vi": "purpose",
      "id": "purpose",
      "es": "purpose",
      "pt": "purpose"
    },
    "pos": "noun",
    "ex": "趣旨について話す"
  },
  {
    "id": "V1411",
    "w": "りねん",
    "r": "りねん",
    "m": {
      "en": "principle",
      "zh-TW": "理念",
      "zh-CN": "理念",
      "ko": "principle",
      "vi": "principle",
      "id": "principle",
      "es": "principle",
      "pt": "principle"
    },
    "pos": "noun",
    "ex": "理念について話す"
  },
  {
    "id": "V1412",
    "w": "しんねん",
    "r": "しんねん",
    "m": {
      "en": "conviction",
      "zh-TW": "信念",
      "zh-CN": "信念",
      "ko": "conviction",
      "vi": "conviction",
      "id": "conviction",
      "es": "conviction",
      "pt": "conviction"
    },
    "pos": "noun",
    "ex": "信念について話す"
  },
  {
    "id": "V1413",
    "w": "かちかん",
    "r": "かちかん",
    "m": {
      "en": "values",
      "zh-TW": "価値観",
      "zh-CN": "価値観",
      "ko": "values",
      "vi": "values",
      "id": "values",
      "es": "values",
      "pt": "values"
    },
    "pos": "noun",
    "ex": "価値観について話す"
  },
  {
    "id": "V1414",
    "w": "せかいかん",
    "r": "せかいかん",
    "m": {
      "en": "worldview",
      "zh-TW": "世界観",
      "zh-CN": "世界観",
      "ko": "worldview",
      "vi": "worldview",
      "id": "worldview",
      "es": "worldview",
      "pt": "worldview"
    },
    "pos": "noun",
    "ex": "世界観について話す"
  },
  {
    "id": "V1415",
    "w": "じんせいかん",
    "r": "じんせいかん",
    "m": {
      "en": "view of life",
      "zh-TW": "人生観",
      "zh-CN": "人生観",
      "ko": "view of life",
      "vi": "view of life",
      "id": "view of life",
      "es": "view of life",
      "pt": "view of life"
    },
    "pos": "noun",
    "ex": "人生観について話す"
  },
  {
    "id": "V1416",
    "w": "しせいかん",
    "r": "しせいかん",
    "m": {
      "en": "view of life and death",
      "zh-TW": "死生観",
      "zh-CN": "死生観",
      "ko": "view of life and death",
      "vi": "view of life and death",
      "id": "view of life and death",
      "es": "view of life and death",
      "pt": "view of life and death"
    },
    "pos": "noun",
    "ex": "死生観について話す"
  },
  {
    "id": "V1417",
    "w": "じょうしき",
    "r": "じょうしき",
    "m": {
      "en": "common sense",
      "zh-TW": "常識",
      "zh-CN": "常識",
      "ko": "common sense",
      "vi": "common sense",
      "id": "common sense",
      "es": "common sense",
      "pt": "common sense"
    },
    "pos": "noun",
    "ex": "常識について話す"
  },
  {
    "id": "V1418",
    "w": "りょうしき",
    "r": "りょうしき",
    "m": {
      "en": "good sense",
      "zh-TW": "良識",
      "zh-CN": "良識",
      "ko": "good sense",
      "vi": "good sense",
      "id": "good sense",
      "es": "good sense",
      "pt": "good sense"
    },
    "pos": "noun",
    "ex": "良識について話す"
  },
  {
    "id": "V1419",
    "w": "どうとく",
    "r": "どうとく",
    "m": {
      "en": "morality",
      "zh-TW": "道徳",
      "zh-CN": "道徳",
      "ko": "morality",
      "vi": "morality",
      "id": "morality",
      "es": "morality",
      "pt": "morality"
    },
    "pos": "verb-godan",
    "ex": "道徳ことができる"
  },
  {
    "id": "V1420",
    "w": "りんり",
    "r": "りんり",
    "m": {
      "en": "ethics",
      "zh-TW": "倫理",
      "zh-CN": "倫理",
      "ko": "ethics",
      "vi": "ethics",
      "id": "ethics",
      "es": "ethics",
      "pt": "ethics"
    },
    "pos": "noun",
    "ex": "倫理について話す"
  },
  {
    "id": "V1421",
    "w": "れいぎ",
    "r": "れいぎ",
    "m": {
      "en": "etiquette",
      "zh-TW": "礼儀",
      "zh-CN": "礼儀",
      "ko": "etiquette",
      "vi": "etiquette",
      "id": "etiquette",
      "es": "etiquette",
      "pt": "etiquette"
    },
    "pos": "noun",
    "ex": "礼儀について話す"
  },
  {
    "id": "V1422",
    "w": "さほう",
    "r": "さほう",
    "m": {
      "en": "manners",
      "zh-TW": "作法",
      "zh-CN": "作法",
      "ko": "manners",
      "vi": "manners",
      "id": "manners",
      "es": "manners",
      "pt": "manners"
    },
    "pos": "verb-godan",
    "ex": "作法ことができる"
  },
  {
    "id": "V1423",
    "w": "ふるまい",
    "r": "ふるまい",
    "m": {
      "en": "behavior",
      "zh-TW": "振る舞い",
      "zh-CN": "振る舞い",
      "ko": "behavior",
      "vi": "behavior",
      "id": "behavior",
      "es": "behavior",
      "pt": "behavior"
    },
    "pos": "i-adj",
    "ex": "とても振る舞い"
  },
  {
    "id": "V1424",
    "w": "お土産",
    "r": "おみやげ",
    "m": {
      "en": "souvenir",
      "zh-TW": "お土産",
      "zh-CN": "お土産",
      "ko": "souvenir",
      "vi": "souvenir",
      "id": "souvenir",
      "es": "souvenir",
      "pt": "souvenir"
    },
    "pos": "noun",
    "ex": "お土産について話す"
  },
  {
    "id": "V1425",
    "w": "おうだんほどう",
    "r": "おうだんほどう",
    "m": {
      "en": "pedestrian crossing",
      "zh-TW": "横断歩道",
      "zh-CN": "横断歩道",
      "ko": "pedestrian crossing",
      "vi": "pedestrian crossing",
      "id": "pedestrian crossing",
      "es": "pedestrian crossing",
      "pt": "pedestrian crossing"
    },
    "pos": "verb-godan",
    "ex": "横断歩道ことができる"
  },
  {
    "id": "V1426",
    "w": "歩道橋",
    "r": "ほどうきょう",
    "m": {
      "en": "pedestrian bridge",
      "zh-TW": "歩道橋",
      "zh-CN": "歩道橋",
      "ko": "pedestrian bridge",
      "vi": "pedestrian bridge",
      "id": "pedestrian bridge",
      "es": "pedestrian bridge",
      "pt": "pedestrian bridge"
    },
    "pos": "verb-godan",
    "ex": "歩道橋ことができる"
  },
  {
    "id": "V1427",
    "w": "しんぱい",
    "r": "しんぱい",
    "m": {
      "en": "worry",
      "zh-TW": "心配",
      "zh-CN": "心配",
      "ko": "worry",
      "vi": "worry",
      "id": "worry",
      "es": "worry",
      "pt": "worry"
    },
    "pos": "i-adj",
    "ex": "とても心配"
  },
  {
    "id": "V1428",
    "w": "安心",
    "r": "あんしん",
    "m": {
      "en": "relief",
      "zh-TW": "安心",
      "zh-CN": "安心",
      "ko": "relief",
      "vi": "relief",
      "id": "relief",
      "es": "relief",
      "pt": "relief"
    },
    "pos": "noun",
    "ex": "安心について話す"
  },
  {
    "id": "V1429",
    "w": "かなしい",
    "r": "かなしい",
    "m": {
      "en": "sad",
      "zh-TW": "悲しい",
      "zh-CN": "悲しい",
      "ko": "sad",
      "vi": "sad",
      "id": "sad",
      "es": "sad",
      "pt": "sad"
    },
    "pos": "i-adj",
    "ex": "別れが悲しい",
    "syn": [
      "寂しい",
      "切ない",
      "哀しい"
    ]
  },
  {
    "id": "V1430",
    "w": "さびしい",
    "r": "さびしい",
    "m": {
      "en": "lonely",
      "zh-TW": "寂しい",
      "zh-CN": "寂しい",
      "ko": "lonely",
      "vi": "lonely",
      "id": "lonely",
      "es": "lonely",
      "pt": "lonely"
    },
    "pos": "i-adj",
    "ex": "とても寂しい"
  },
  {
    "id": "V1431",
    "w": "うらやましい",
    "r": "うらやましい",
    "m": {
      "en": "envious",
      "zh-TW": "羨ましい",
      "zh-CN": "羨ましい",
      "ko": "envious",
      "vi": "envious",
      "id": "envious",
      "es": "envious",
      "pt": "envious"
    },
    "pos": "i-adj",
    "ex": "とても羨ましい",
    "syn": [
      "羨望",
      "うらやむ",
      "妬ましい"
    ]
  },
  {
    "id": "V1432",
    "w": "なつかしい",
    "r": "なつかしい",
    "m": {
      "en": "nostalgic",
      "zh-TW": "懐かしい",
      "zh-CN": "懐かしい",
      "ko": "nostalgic",
      "vi": "nostalgic",
      "id": "nostalgic",
      "es": "nostalgic",
      "pt": "nostalgic"
    },
    "pos": "i-adj",
    "ex": "とても懐かしい",
    "syn": [
      "思い出深い",
      "昔懐かしい",
      "郷愁"
    ]
  },
  {
    "id": "V1433",
    "w": "めずらしい",
    "r": "めずらしい",
    "m": {
      "en": "rare",
      "zh-TW": "珍しい",
      "zh-CN": "珍しい",
      "ko": "rare",
      "vi": "rare",
      "id": "rare",
      "es": "rare",
      "pt": "rare"
    },
    "pos": "i-adj",
    "ex": "珍しい花を見る",
    "syn": [
      "希少",
      "まれ",
      "稀有"
    ]
  },
  {
    "id": "V1434",
    "w": "おそろしい",
    "r": "おそろしい",
    "m": {
      "en": "frightening",
      "zh-TW": "恐ろしい",
      "zh-CN": "恐ろしい",
      "ko": "frightening",
      "vi": "frightening",
      "id": "frightening",
      "es": "frightening",
      "pt": "frightening"
    },
    "pos": "i-adj",
    "ex": "とても恐ろしい"
  },
  {
    "id": "V1435",
    "w": "正しい",
    "r": "ただしい",
    "m": {
      "en": "correct",
      "zh-TW": "正しい",
      "zh-CN": "正しい",
      "ko": "correct",
      "vi": "correct",
      "id": "correct",
      "es": "correct",
      "pt": "correct"
    },
    "pos": "i-adj",
    "ex": "正しい答えを選ぶ",
    "syn": [
      "正確",
      "適切",
      "妥当"
    ]
  },
  {
    "id": "V1436",
    "w": "優しい",
    "r": "やさしい",
    "m": {
      "en": "kind",
      "zh-TW": "優しい",
      "zh-CN": "優しい",
      "ko": "kind",
      "vi": "kind",
      "id": "kind",
      "es": "kind",
      "pt": "kind"
    },
    "pos": "i-adj",
    "ex": "彼女は優しい",
    "syn": [
      "親切",
      "温かい",
      "思いやりがある"
    ]
  },
  {
    "id": "V1437",
    "w": "きびしい",
    "r": "きびしい",
    "m": {
      "en": "strict",
      "zh-TW": "厳しい",
      "zh-CN": "厳しい",
      "ko": "strict",
      "vi": "strict",
      "id": "strict",
      "es": "strict",
      "pt": "strict"
    },
    "pos": "i-adj",
    "ex": "先生は厳しい",
    "syn": [
      "厳格",
      "手厳しい",
      "きつい"
    ]
  },
  {
    "id": "V1438",
    "w": "はげしい",
    "r": "はげしい",
    "m": {
      "en": "intense",
      "zh-TW": "激しい",
      "zh-CN": "激しい",
      "ko": "intense",
      "vi": "intense",
      "id": "intense",
      "es": "intense",
      "pt": "intense"
    },
    "pos": "i-adj",
    "ex": "とても激しい"
  },
  {
    "id": "V1439",
    "w": "くわしい",
    "r": "くわしい",
    "m": {
      "en": "detailed",
      "zh-TW": "詳しい",
      "zh-CN": "詳しい",
      "ko": "detailed",
      "vi": "detailed",
      "id": "detailed",
      "es": "detailed",
      "pt": "detailed"
    },
    "pos": "i-adj",
    "ex": "とても詳しい"
  },
  {
    "id": "V1440",
    "w": "親しい",
    "r": "したしい",
    "m": {
      "en": "close/friendly",
      "zh-TW": "親しい",
      "zh-CN": "親しい",
      "ko": "close/friendly",
      "vi": "close/friendly",
      "id": "close/friendly",
      "es": "close/friendly",
      "pt": "close/friendly"
    },
    "pos": "i-adj",
    "ex": "とても親しい"
  },
  {
    "id": "V1441",
    "w": "ひとしい",
    "r": "ひとしい",
    "m": {
      "en": "equal",
      "zh-TW": "等しい",
      "zh-CN": "等しい",
      "ko": "equal",
      "vi": "equal",
      "id": "equal",
      "es": "equal",
      "pt": "equal"
    },
    "pos": "i-adj",
    "ex": "とても等しい"
  },
  {
    "id": "V1442",
    "w": "いそがしい",
    "r": "いそがしい",
    "m": {
      "en": "busy",
      "zh-TW": "忙しい",
      "zh-CN": "忙しい",
      "ko": "busy",
      "vi": "busy",
      "id": "busy",
      "es": "busy",
      "pt": "busy"
    },
    "pos": "i-adj",
    "ex": "とても忙しい"
  },
  {
    "id": "V1443",
    "w": "くるしい",
    "r": "くるしい",
    "m": {
      "en": "painful",
      "zh-TW": "苦しい",
      "zh-CN": "苦しい",
      "ko": "painful",
      "vi": "painful",
      "id": "painful",
      "es": "painful",
      "pt": "painful"
    },
    "pos": "i-adj",
    "ex": "とても苦しい"
  },
  {
    "id": "V1444",
    "w": "楽しい",
    "r": "たのしい",
    "m": {
      "en": "fun",
      "zh-TW": "楽しい",
      "zh-CN": "楽しい",
      "ko": "fun",
      "vi": "fun",
      "id": "fun",
      "es": "fun",
      "pt": "fun"
    },
    "pos": "i-adj",
    "ex": "旅行は楽しい",
    "syn": [
      "愉快",
      "面白い",
      "わくわくする"
    ]
  },
  {
    "id": "V1445",
    "w": "うつくしい",
    "r": "うつくしい",
    "m": {
      "en": "beautiful",
      "zh-TW": "美しい",
      "zh-CN": "美しい",
      "ko": "beautiful",
      "vi": "beautiful",
      "id": "beautiful",
      "es": "beautiful",
      "pt": "beautiful"
    },
    "pos": "i-adj",
    "ex": "とても美しい"
  },
  {
    "id": "V1446",
    "w": "新しい",
    "r": "あたらしい",
    "m": {
      "en": "new",
      "zh-TW": "新しい",
      "zh-CN": "新しい",
      "ko": "new",
      "vi": "new",
      "id": "new",
      "es": "nuevo",
      "pt": "novo"
    },
    "pos": "i-adj",
    "ex": "とても新しい"
  },
  {
    "id": "V1447",
    "w": "古い",
    "r": "ふるい",
    "m": {
      "en": "old",
      "zh-TW": "古い",
      "zh-CN": "古い",
      "ko": "old",
      "vi": "old",
      "id": "old",
      "es": "viejo",
      "pt": "velho"
    },
    "pos": "i-adj",
    "ex": "とても古い"
  },
  {
    "id": "V1448",
    "w": "明るい",
    "r": "あかるい",
    "m": {
      "en": "bright",
      "zh-TW": "明るい",
      "zh-CN": "明るい",
      "ko": "bright",
      "vi": "bright",
      "id": "bright",
      "es": "bright",
      "pt": "bright"
    },
    "pos": "i-adj",
    "ex": "とても明るい"
  },
  {
    "id": "V1449",
    "w": "暗い",
    "r": "くらい",
    "m": {
      "en": "dark",
      "zh-TW": "暗い",
      "zh-CN": "暗い",
      "ko": "dark",
      "vi": "dark",
      "id": "dark",
      "es": "dark",
      "pt": "dark"
    },
    "pos": "i-adj",
    "ex": "とても暗い"
  },
  {
    "id": "V1450",
    "w": "広い",
    "r": "ひろい",
    "m": {
      "en": "wide",
      "zh-TW": "広い",
      "zh-CN": "広い",
      "ko": "wide",
      "vi": "wide",
      "id": "wide",
      "es": "wide",
      "pt": "wide"
    },
    "pos": "i-adj",
    "ex": "とても広い"
  },
  {
    "id": "V1451",
    "w": "狭い",
    "r": "せまい",
    "m": {
      "en": "narrow",
      "zh-TW": "狭い",
      "zh-CN": "狭い",
      "ko": "narrow",
      "vi": "narrow",
      "id": "narrow",
      "es": "narrow",
      "pt": "narrow"
    },
    "pos": "i-adj",
    "ex": "とても狭い"
  },
  {
    "id": "V1452",
    "w": "あさい",
    "r": "あさい",
    "m": {
      "en": "shallow",
      "zh-TW": "浅い",
      "zh-CN": "浅い",
      "ko": "shallow",
      "vi": "shallow",
      "id": "shallow",
      "es": "shallow",
      "pt": "shallow"
    },
    "pos": "i-adj",
    "ex": "とても浅い"
  },
  {
    "id": "V1453",
    "w": "太い",
    "r": "ふとい",
    "m": {
      "en": "thick",
      "zh-TW": "太い",
      "zh-CN": "太い",
      "ko": "thick",
      "vi": "thick",
      "id": "thick",
      "es": "thick",
      "pt": "thick"
    },
    "pos": "i-adj",
    "ex": "とても太い"
  },
  {
    "id": "V1454",
    "w": "固い",
    "r": "かたい",
    "m": {
      "en": "hard",
      "zh-TW": "固い",
      "zh-CN": "固い",
      "ko": "hard",
      "vi": "hard",
      "id": "hard",
      "es": "hard",
      "pt": "hard"
    },
    "pos": "i-adj",
    "ex": "とても固い"
  },
  {
    "id": "V1455",
    "w": "柔らかい",
    "r": "やわらかい",
    "m": {
      "en": "soft",
      "zh-TW": "柔らかい",
      "zh-CN": "柔らかい",
      "ko": "soft",
      "vi": "soft",
      "id": "soft",
      "es": "soft",
      "pt": "soft"
    },
    "pos": "i-adj",
    "ex": "とても柔らかい"
  },
  {
    "id": "V1456",
    "w": "重い",
    "r": "おもい",
    "m": {
      "en": "heavy",
      "zh-TW": "重い",
      "zh-CN": "重い",
      "ko": "heavy",
      "vi": "heavy",
      "id": "heavy",
      "es": "heavy",
      "pt": "heavy"
    },
    "pos": "i-adj",
    "ex": "とても重い"
  },
  {
    "id": "V1457",
    "w": "軽い",
    "r": "かるい",
    "m": {
      "en": "light",
      "zh-TW": "軽い",
      "zh-CN": "軽い",
      "ko": "light",
      "vi": "light",
      "id": "light",
      "es": "light",
      "pt": "light"
    },
    "pos": "i-adj",
    "ex": "とても軽い"
  },
  {
    "id": "V1458",
    "w": "速い",
    "r": "はやい",
    "m": {
      "en": "fast",
      "zh-TW": "速い",
      "zh-CN": "速い",
      "ko": "fast",
      "vi": "fast",
      "id": "fast",
      "es": "fast",
      "pt": "fast"
    },
    "pos": "i-adj",
    "ex": "とても速い"
  },
  {
    "id": "V1459",
    "w": "遅い",
    "r": "おそい",
    "m": {
      "en": "slow",
      "zh-TW": "遅い",
      "zh-CN": "遅い",
      "ko": "slow",
      "vi": "slow",
      "id": "slow",
      "es": "slow",
      "pt": "slow"
    },
    "pos": "i-adj",
    "ex": "とても遅い"
  },
  {
    "id": "V1460",
    "w": "近い",
    "r": "ちかい",
    "m": {
      "en": "near",
      "zh-TW": "近い",
      "zh-CN": "近い",
      "ko": "near",
      "vi": "near",
      "id": "near",
      "es": "near",
      "pt": "near"
    },
    "pos": "i-adj",
    "ex": "とても近い"
  },
  {
    "id": "V1461",
    "w": "遠い",
    "r": "とおい",
    "m": {
      "en": "far",
      "zh-TW": "遠い",
      "zh-CN": "遠い",
      "ko": "far",
      "vi": "far",
      "id": "far",
      "es": "far",
      "pt": "far"
    },
    "pos": "i-adj",
    "ex": "とても遠い"
  },
  {
    "id": "V1462",
    "w": "長い",
    "r": "ながい",
    "m": {
      "en": "long",
      "zh-TW": "長い",
      "zh-CN": "長い",
      "ko": "long",
      "vi": "long",
      "id": "long",
      "es": "long",
      "pt": "long"
    },
    "pos": "i-adj",
    "ex": "とても長い"
  },
  {
    "id": "V1463",
    "w": "短い",
    "r": "みじかい",
    "m": {
      "en": "short",
      "zh-TW": "短い",
      "zh-CN": "短い",
      "ko": "short",
      "vi": "short",
      "id": "short",
      "es": "short",
      "pt": "short"
    },
    "pos": "i-adj",
    "ex": "とても短い"
  },
  {
    "id": "V1464",
    "w": "高い",
    "r": "たかい",
    "m": {
      "en": "high/expensive",
      "zh-TW": "高い",
      "zh-CN": "高い",
      "ko": "high/expensive",
      "vi": "high/expensive",
      "id": "high/expensive",
      "es": "high/expensive",
      "pt": "high/expensive"
    },
    "pos": "i-adj",
    "ex": "とても高い"
  },
  {
    "id": "V1465",
    "w": "低い",
    "r": "ひくい",
    "m": {
      "en": "low",
      "zh-TW": "低い",
      "zh-CN": "低い",
      "ko": "low",
      "vi": "low",
      "id": "low",
      "es": "low",
      "pt": "low"
    },
    "pos": "i-adj",
    "ex": "とても低い"
  },
  {
    "id": "V1466",
    "w": "安い",
    "r": "やすい",
    "m": {
      "en": "cheap",
      "zh-TW": "安い",
      "zh-CN": "安い",
      "ko": "cheap",
      "vi": "cheap",
      "id": "cheap",
      "es": "cheap",
      "pt": "cheap"
    },
    "pos": "i-adj",
    "ex": "とても安い"
  },
  {
    "id": "V1467",
    "w": "道具",
    "r": "どうぐ",
    "m": {
      "en": "tool",
      "zh-TW": "道具",
      "zh-CN": "道具",
      "ko": "tool",
      "vi": "tool",
      "id": "tool",
      "es": "tool",
      "pt": "tool"
    },
    "pos": "verb-godan",
    "ex": "道具ことができる"
  },
  {
    "id": "V1468",
    "w": "品物",
    "r": "しなもの",
    "m": {
      "en": "goods",
      "zh-TW": "品物",
      "zh-CN": "品物",
      "ko": "goods",
      "vi": "goods",
      "id": "goods",
      "es": "goods",
      "pt": "goods"
    },
    "pos": "noun",
    "ex": "品物について話す"
  },
  {
    "id": "V1469",
    "w": "もうしこむ",
    "r": "もうしこむ",
    "m": {
      "en": "to apply",
      "zh-TW": "申込む",
      "zh-CN": "申込む",
      "ko": "to apply",
      "vi": "to apply",
      "id": "to apply",
      "es": "to apply",
      "pt": "to apply"
    },
    "pos": "verb-godan",
    "ex": "申込むことができる"
  },
  {
    "id": "V1470",
    "w": "しょうめい",
    "r": "しょうめい",
    "m": {
      "en": "proof",
      "zh-TW": "証明",
      "zh-CN": "証明",
      "ko": "proof",
      "vi": "proof",
      "id": "proof",
      "es": "proof",
      "pt": "proof"
    },
    "pos": "i-adj",
    "ex": "とても証明"
  },
  {
    "id": "V1471",
    "w": "りょうかい",
    "r": "りょうかい",
    "m": {
      "en": "understanding",
      "zh-TW": "了解",
      "zh-CN": "了解",
      "ko": "understanding",
      "vi": "understanding",
      "id": "understanding",
      "es": "understanding",
      "pt": "understanding"
    },
    "pos": "i-adj",
    "ex": "とても了解"
  },
  {
    "id": "V1472",
    "w": "しょうち",
    "r": "しょうち",
    "m": {
      "en": "consent",
      "zh-TW": "承知",
      "zh-CN": "承知",
      "ko": "consent",
      "vi": "consent",
      "id": "consent",
      "es": "consent",
      "pt": "consent"
    },
    "pos": "noun",
    "ex": "承知について話す"
  },
  {
    "id": "V1473",
    "w": "同意",
    "r": "どうい",
    "m": {
      "en": "agreement",
      "zh-TW": "同意",
      "zh-CN": "同意",
      "ko": "agreement",
      "vi": "agreement",
      "id": "agreement",
      "es": "agreement",
      "pt": "agreement"
    },
    "pos": "i-adj",
    "ex": "とても同意"
  },
  {
    "id": "V1474",
    "w": "とりひき",
    "r": "とりひき",
    "m": {
      "en": "transaction",
      "zh-TW": "取引",
      "zh-CN": "取引",
      "ko": "transaction",
      "vi": "transaction",
      "id": "transaction",
      "es": "transaction",
      "pt": "transaction"
    },
    "pos": "noun",
    "ex": "取引について話す"
  },
  {
    "id": "V1475",
    "w": "うちあわせ",
    "r": "うちあわせ",
    "m": {
      "en": "meeting",
      "zh-TW": "打ち合わせ",
      "zh-CN": "打ち合わせ",
      "ko": "meeting",
      "vi": "meeting",
      "id": "meeting",
      "es": "meeting",
      "pt": "meeting"
    },
    "pos": "noun",
    "ex": "打ち合わせについて話す"
  },
  {
    "id": "V1476",
    "w": "ぎろん",
    "r": "ぎろん",
    "m": {
      "en": "discussion",
      "zh-TW": "議論",
      "zh-CN": "議論",
      "ko": "discussion",
      "vi": "discussion",
      "id": "discussion",
      "es": "discussion",
      "pt": "discussion"
    },
    "pos": "noun",
    "ex": "議論について話す",
    "syn": [
      "討論する",
      "話し合う",
      "論じる"
    ]
  },
  {
    "id": "V1477",
    "w": "通知",
    "r": "つうち",
    "m": {
      "en": "notice",
      "zh-TW": "通知",
      "zh-CN": "通知",
      "ko": "notice",
      "vi": "notice",
      "id": "notice",
      "es": "notice",
      "pt": "notice"
    },
    "pos": "noun",
    "ex": "通知について話す"
  },
  {
    "id": "V1478",
    "w": "しょうたい",
    "r": "しょうたい",
    "m": {
      "en": "invitation",
      "zh-TW": "招待",
      "zh-CN": "招待",
      "ko": "invitation",
      "vi": "invitation",
      "id": "invitation",
      "es": "invitation",
      "pt": "invitation"
    },
    "pos": "i-adj",
    "ex": "とても招待"
  },
  {
    "id": "V1479",
    "w": "かんげい",
    "r": "かんげい",
    "m": {
      "en": "welcome",
      "zh-TW": "歓迎",
      "zh-CN": "歓迎",
      "ko": "welcome",
      "vi": "welcome",
      "id": "welcome",
      "es": "welcome",
      "pt": "welcome"
    },
    "pos": "i-adj",
    "ex": "とても歓迎"
  },
  {
    "id": "V1480",
    "w": "見送り",
    "r": "みおくり",
    "m": {
      "en": "seeing off",
      "zh-TW": "見送り",
      "zh-CN": "見送り",
      "ko": "seeing off",
      "vi": "seeing off",
      "id": "seeing off",
      "es": "seeing off",
      "pt": "seeing off"
    },
    "pos": "noun",
    "ex": "見送りについて話す"
  },
  {
    "id": "V1481",
    "w": "でむかえ",
    "r": "でむかえ",
    "m": {
      "en": "meeting someone",
      "zh-TW": "出迎え",
      "zh-CN": "出迎え",
      "ko": "meeting someone",
      "vi": "meeting someone",
      "id": "meeting someone",
      "es": "meeting someone",
      "pt": "meeting someone"
    },
    "pos": "noun",
    "ex": "出迎えについて話す"
  },
  {
    "id": "V1482",
    "w": "別れ",
    "r": "わかれ",
    "m": {
      "en": "parting",
      "zh-TW": "別れ",
      "zh-CN": "別れ",
      "ko": "parting",
      "vi": "parting",
      "id": "parting",
      "es": "parting",
      "pt": "parting"
    },
    "pos": "noun",
    "ex": "別れについて話す"
  },
  {
    "id": "V1483",
    "w": "再会",
    "r": "さいかい",
    "m": {
      "en": "reunion",
      "zh-TW": "再会",
      "zh-CN": "再会",
      "ko": "reunion",
      "vi": "reunion",
      "id": "reunion",
      "es": "reunion",
      "pt": "reunion"
    },
    "pos": "i-adj",
    "ex": "とても再会"
  },
  {
    "id": "V1484",
    "w": "あいさつ",
    "r": "あいさつ",
    "m": {
      "en": "greeting",
      "zh-TW": "挨拶",
      "zh-CN": "挨拶",
      "ko": "greeting",
      "vi": "greeting",
      "id": "greeting",
      "es": "greeting",
      "pt": "greeting"
    },
    "pos": "verb-godan",
    "ex": "挨拶ことができる"
  },
  {
    "id": "V1485",
    "w": "おれい",
    "r": "おれい",
    "m": {
      "en": "thanks",
      "zh-TW": "お礼",
      "zh-CN": "お礼",
      "ko": "thanks",
      "vi": "thanks",
      "id": "thanks",
      "es": "thanks",
      "pt": "thanks"
    },
    "pos": "i-adj",
    "ex": "とてもお礼"
  },
  {
    "id": "V1486",
    "w": "おわび",
    "r": "おわび",
    "m": {
      "en": "apology",
      "zh-TW": "お詫び",
      "zh-CN": "お詫び",
      "ko": "apology",
      "vi": "apology",
      "id": "apology",
      "es": "apology",
      "pt": "apology"
    },
    "pos": "noun",
    "ex": "お詫びについて話す"
  },
  {
    "id": "V1487",
    "w": "おいわい",
    "r": "おいわい",
    "m": {
      "en": "celebration",
      "zh-TW": "お祝い",
      "zh-CN": "お祝い",
      "ko": "celebration",
      "vi": "celebration",
      "id": "celebration",
      "es": "celebration",
      "pt": "celebration"
    },
    "pos": "i-adj",
    "ex": "とてもお祝い"
  },
  {
    "id": "V1488",
    "w": "おみまい",
    "r": "おみまい",
    "m": {
      "en": "visit to sick person",
      "zh-TW": "お見舞い",
      "zh-CN": "お見舞い",
      "ko": "visit to sick person",
      "vi": "visit to sick person",
      "id": "visit to sick person",
      "es": "visit to sick person",
      "pt": "visit to sick person"
    },
    "pos": "i-adj",
    "ex": "とてもお見舞い"
  },
  {
    "id": "V1489",
    "w": "おくりもの",
    "r": "おくりもの",
    "m": {
      "en": "gift",
      "zh-TW": "贈り物",
      "zh-CN": "贈り物",
      "ko": "gift",
      "vi": "gift",
      "id": "gift",
      "es": "gift",
      "pt": "gift"
    },
    "pos": "noun",
    "ex": "贈り物について話す"
  },
  {
    "id": "V1490",
    "w": "プレゼント",
    "r": "プレゼント",
    "m": {
      "en": "present",
      "zh-TW": "プレゼント",
      "zh-CN": "プレゼント",
      "ko": "present",
      "vi": "present",
      "id": "present",
      "es": "present",
      "pt": "present"
    },
    "pos": "noun",
    "ex": "プレゼントについて話す"
  },
  {
    "id": "V1491",
    "w": "きねん",
    "r": "きねん",
    "m": {
      "en": "commemoration",
      "zh-TW": "記念",
      "zh-CN": "記念",
      "ko": "commemoration",
      "vi": "commemoration",
      "id": "commemoration",
      "es": "commemoration",
      "pt": "commemoration"
    },
    "pos": "noun",
    "ex": "記念について話す"
  },
  {
    "id": "V1492",
    "w": "きっかけ",
    "r": "きっかけ",
    "m": {
      "en": "trigger",
      "zh-TW": "きっかけ",
      "zh-CN": "きっかけ",
      "ko": "trigger",
      "vi": "trigger",
      "id": "trigger",
      "es": "trigger",
      "pt": "trigger"
    },
    "pos": "noun",
    "ex": "きっかけについて話す"
  },
  {
    "id": "V1493",
    "w": "どうき",
    "r": "どうき",
    "m": {
      "en": "motive",
      "zh-TW": "動機",
      "zh-CN": "動機",
      "ko": "motive",
      "vi": "motive",
      "id": "motive",
      "es": "motive",
      "pt": "motive"
    },
    "pos": "noun",
    "ex": "動機について話す"
  },
  {
    "id": "V1494",
    "w": "願い",
    "r": "ねがい",
    "m": {
      "en": "wish",
      "zh-TW": "願い",
      "zh-CN": "願い",
      "ko": "wish",
      "vi": "wish",
      "id": "wish",
      "es": "wish",
      "pt": "wish"
    },
    "pos": "i-adj",
    "ex": "とても願い"
  },
  {
    "id": "V1495",
    "w": "りそう",
    "r": "りそう",
    "m": {
      "en": "ideal",
      "zh-TW": "理想",
      "zh-CN": "理想",
      "ko": "ideal",
      "vi": "ideal",
      "id": "ideal",
      "es": "ideal",
      "pt": "ideal"
    },
    "pos": "verb-godan",
    "ex": "理想ことができる"
  },
  {
    "id": "V1496",
    "w": "げんじつ",
    "r": "げんじつ",
    "m": {
      "en": "reality",
      "zh-TW": "現実",
      "zh-CN": "現実",
      "ko": "reality",
      "vi": "reality",
      "id": "reality",
      "es": "reality",
      "pt": "reality"
    },
    "pos": "verb-godan",
    "ex": "現実ことができる"
  },
  {
    "id": "V1497",
    "w": "ふよう",
    "r": "ふよう",
    "m": {
      "en": "unnecessary",
      "zh-TW": "不要",
      "zh-CN": "不要",
      "ko": "unnecessary",
      "vi": "unnecessary",
      "id": "unnecessary",
      "es": "unnecessary",
      "pt": "unnecessary"
    },
    "pos": "verb-godan",
    "ex": "不要ことができる"
  },
  {
    "id": "V1498",
    "w": "ひつぜん",
    "r": "ひつぜん",
    "m": {
      "en": "inevitable",
      "zh-TW": "必然",
      "zh-CN": "必然",
      "ko": "inevitable",
      "vi": "inevitable",
      "id": "inevitable",
      "es": "inevitable",
      "pt": "inevitable"
    },
    "pos": "noun",
    "ex": "必然について話す"
  },
  {
    "id": "V1499",
    "w": "ぐうぜん",
    "r": "ぐうぜん",
    "m": {
      "en": "coincidence",
      "zh-TW": "偶然",
      "zh-CN": "偶然",
      "ko": "coincidence",
      "vi": "coincidence",
      "id": "coincidence",
      "es": "coincidence",
      "pt": "coincidence"
    },
    "pos": "noun",
    "ex": "偶然について話す"
  },
  {
    "id": "V1500",
    "w": "とうぜん",
    "r": "とうぜん",
    "m": {
      "en": "naturally",
      "zh-TW": "当然",
      "zh-CN": "当然",
      "ko": "naturally",
      "vi": "naturally",
      "id": "naturally",
      "es": "naturally",
      "pt": "naturally"
    },
    "pos": "noun",
    "ex": "当然について話す"
  }
];