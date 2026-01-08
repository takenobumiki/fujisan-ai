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
      "id": "mengirim"
    }
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
      "id": "sampai"
    }
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
      "id": "pemberitahuan"
    }
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
      "id": "laporan"
    }
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
      "id": "alamat tujuan"
    }
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
      "id": "mengumpulkan"
    }
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
      "id": "berkumpul"
    }
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
      "id": "maju"
    }
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
      "id": "memajukan"
    }
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
      "id": "memutuskan"
    }
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
      "id": "diputuskan"
    }
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
      "id": "mengubah"
    }
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
      "id": "berubah"
    }
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
      "id": "menyampaikan"
    }
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
      "id": "tersampaikan"
    }
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
      "id": "membesarkan"
    }
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
      "id": "tumbuh"
    }
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
      "id": "bertambah"
    }
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
      "id": "menambah"
    }
  },
  {
    "id": "V0020",
    "w": "減る",
    "r": "へる",
    "m": {
      "en": "to decrease",
      "zh-TW": "減少",
      "zh-CN": "减少",
      "ko": "줄다",
      "vi": "giảm",
      "id": "berkurang"
    }
  },
  {
    "id": "V0021",
    "w": "減らす",
    "r": "へらす",
    "m": {
      "en": "to reduce",
      "zh-TW": "減少",
      "zh-CN": "减少",
      "ko": "줄이다",
      "vi": "giảm bớt",
      "id": "mengurangi"
    }
  },
  {
    "id": "V0022",
    "w": "続ける",
    "r": "つづける",
    "m": {
      "en": "to continue",
      "zh-TW": "繼續",
      "zh-CN": "继续",
      "ko": "계속하다",
      "vi": "tiếp tục",
      "id": "melanjutkan"
    }
  },
  {
    "id": "V0023",
    "w": "続く",
    "r": "つづく",
    "m": {
      "en": "to continue",
      "zh-TW": "持續",
      "zh-CN": "持续",
      "ko": "이어지다",
      "vi": "tiếp diễn",
      "id": "berlanjut"
    }
  },
  {
    "id": "V0024",
    "w": "残る",
    "r": "のこる",
    "m": {
      "en": "to remain",
      "zh-TW": "留下",
      "zh-CN": "留下",
      "ko": "남다",
      "vi": "còn lại",
      "id": "tersisa"
    }
  },
  {
    "id": "V0025",
    "w": "残す",
    "r": "のこす",
    "m": {
      "en": "to leave",
      "zh-TW": "留下",
      "zh-CN": "留下",
      "ko": "남기다",
      "vi": "để lại",
      "id": "meninggalkan"
    }
  },
  {
    "id": "V0026",
    "w": "片付ける",
    "r": "かたづける",
    "m": {
      "en": "to tidy up",
      "zh-TW": "整理",
      "zh-CN": "整理",
      "ko": "정리하다",
      "vi": "dọn dẹp",
      "id": "merapikan"
    }
  },
  {
    "id": "V0027",
    "w": "片付く",
    "r": "かたづく",
    "m": {
      "en": "to be tidied",
      "zh-TW": "整理好",
      "zh-CN": "整理好",
      "ko": "정리되다",
      "vi": "được dọn",
      "id": "rapi"
    }
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
      "id": "menemukan"
    }
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
      "id": "ditemukan"
    }
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
      "id": "tepat waktu"
    }
  },
  {
    "id": "V0031",
    "w": "役立つ",
    "r": "やくだつ",
    "m": {
      "en": "to be useful",
      "zh-TW": "有用",
      "zh-CN": "有用",
      "ko": "도움이 되다",
      "vi": "hữu ích",
      "id": "berguna"
    }
  },
  {
    "id": "V0032",
    "w": "気付く",
    "r": "きづく",
    "m": {
      "en": "to notice",
      "zh-TW": "注意到",
      "zh-CN": "注意到",
      "ko": "알아차리다",
      "vi": "nhận ra",
      "id": "menyadari"
    }
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
      "id": "mengingat"
    }
  },
  {
    "id": "V0034",
    "w": "申し込む",
    "r": "もうしこむ",
    "m": {
      "en": "to apply",
      "zh-TW": "申請",
      "zh-CN": "申请",
      "ko": "신청하다",
      "vi": "đăng ký",
      "id": "mendaftar"
    }
  },
  {
    "id": "V0035",
    "w": "取り消す",
    "r": "とりけす",
    "m": {
      "en": "to cancel",
      "zh-TW": "取消",
      "zh-CN": "取消",
      "ko": "취소하다",
      "vi": "hủy bỏ",
      "id": "membatalkan"
    }
  },
  {
    "id": "V0036",
    "w": "引き受ける",
    "r": "ひきうける",
    "m": {
      "en": "to undertake",
      "zh-TW": "承擔",
      "zh-CN": "承担",
      "ko": "맡다",
      "vi": "đảm nhận",
      "id": "menerima"
    }
  },
  {
    "id": "V0037",
    "w": "打ち合わせる",
    "r": "うちあわせる",
    "m": {
      "en": "to arrange",
      "zh-TW": "商議",
      "zh-CN": "商议",
      "ko": "협의하다",
      "vi": "bàn bạc",
      "id": "berunding"
    }
  },
  {
    "id": "V0038",
    "w": "受け取る",
    "r": "うけとる",
    "m": {
      "en": "to receive",
      "zh-TW": "收到",
      "zh-CN": "收到",
      "ko": "받다",
      "vi": "nhận",
      "id": "menerima"
    }
  },
  {
    "id": "V0039",
    "w": "受け付ける",
    "r": "うけつける",
    "m": {
      "en": "to accept",
      "zh-TW": "受理",
      "zh-CN": "受理",
      "ko": "접수하다",
      "vi": "tiếp nhận",
      "id": "menerima"
    }
  },
  {
    "id": "V0040",
    "w": "取り上げる",
    "r": "とりあげる",
    "m": {
      "en": "to take up",
      "zh-TW": "取出",
      "zh-CN": "取出",
      "ko": "다루다",
      "vi": "đề cập",
      "id": "mengangkat"
    }
  },
  {
    "id": "V0041",
    "w": "喜ぶ",
    "r": "よろこぶ",
    "m": {
      "en": "to be pleased",
      "zh-TW": "高興",
      "zh-CN": "高兴",
      "ko": "기뻐하다",
      "vi": "vui mừng",
      "id": "senang"
    }
  },
  {
    "id": "V0042",
    "w": "悲しむ",
    "r": "かなしむ",
    "m": {
      "en": "to be sad",
      "zh-TW": "悲傷",
      "zh-CN": "悲伤",
      "ko": "슬퍼하다",
      "vi": "buồn",
      "id": "bersedih"
    }
  },
  {
    "id": "V0043",
    "w": "驚く",
    "r": "おどろく",
    "m": {
      "en": "to be surprised",
      "zh-TW": "驚訝",
      "zh-CN": "惊讶",
      "ko": "놀라다",
      "vi": "ngạc nhiên",
      "id": "terkejut"
    }
  },
  {
    "id": "V0044",
    "w": "怒る",
    "r": "おこる",
    "m": {
      "en": "to get angry",
      "zh-TW": "生氣",
      "zh-CN": "生气",
      "ko": "화내다",
      "vi": "tức giận",
      "id": "marah"
    }
  },
  {
    "id": "V0045",
    "w": "困る",
    "r": "こまる",
    "m": {
      "en": "to be troubled",
      "zh-TW": "困擾",
      "zh-CN": "困扰",
      "ko": "곤란하다",
      "vi": "khó xử",
      "id": "kesulitan"
    }
  },
  {
    "id": "V0046",
    "w": "迷う",
    "r": "まよう",
    "m": {
      "en": "to hesitate",
      "zh-TW": "猶豫",
      "zh-CN": "犹豫",
      "ko": "망설이다",
      "vi": "do dự",
      "id": "ragu"
    }
  },
  {
    "id": "V0047",
    "w": "慣れる",
    "r": "なれる",
    "m": {
      "en": "to get used to",
      "zh-TW": "習慣",
      "zh-CN": "习惯",
      "ko": "익숙해지다",
      "vi": "quen",
      "id": "terbiasa"
    }
  },
  {
    "id": "V0048",
    "w": "疲れる",
    "r": "つかれる",
    "m": {
      "en": "to get tired",
      "zh-TW": "累",
      "zh-CN": "累",
      "ko": "피곤하다",
      "vi": "mệt",
      "id": "lelah"
    }
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
      "id": "gemuk"
    }
  },
  {
    "id": "V0050",
    "w": "痩せる",
    "r": "やせる",
    "m": {
      "en": "to lose weight",
      "zh-TW": "變瘦",
      "zh-CN": "变瘦",
      "ko": "살빠지다",
      "vi": "gầy",
      "id": "kurus"
    }
  },
  {
    "id": "V0051",
    "w": "守る",
    "r": "まもる",
    "m": {
      "en": "to protect",
      "zh-TW": "保護",
      "zh-CN": "保护",
      "ko": "지키다",
      "vi": "bảo vệ",
      "id": "melindungi"
    }
  },
  {
    "id": "V0052",
    "w": "助ける",
    "r": "たすける",
    "m": {
      "en": "to help",
      "zh-TW": "幫助",
      "zh-CN": "帮助",
      "ko": "돕다",
      "vi": "giúp",
      "id": "membantu"
    }
  },
  {
    "id": "V0053",
    "w": "救う",
    "r": "すくう",
    "m": {
      "en": "to save",
      "zh-TW": "拯救",
      "zh-CN": "拯救",
      "ko": "구하다",
      "vi": "cứu",
      "id": "menyelamatkan"
    }
  },
  {
    "id": "V0054",
    "w": "許す",
    "r": "ゆるす",
    "m": {
      "en": "to forgive",
      "zh-TW": "原諒",
      "zh-CN": "原谅",
      "ko": "용서하다",
      "vi": "tha thứ",
      "id": "memaafkan"
    }
  },
  {
    "id": "V0055",
    "w": "叱る",
    "r": "しかる",
    "m": {
      "en": "to scold",
      "zh-TW": "責罵",
      "zh-CN": "责骂",
      "ko": "꾸짖다",
      "vi": "mắng",
      "id": "memarahi"
    }
  },
  {
    "id": "V0056",
    "w": "褒める",
    "r": "ほめる",
    "m": {
      "en": "to praise",
      "zh-TW": "稱讚",
      "zh-CN": "称赞",
      "ko": "칭찬하다",
      "vi": "khen",
      "id": "memuji"
    }
  },
  {
    "id": "V0057",
    "w": "謝る",
    "r": "あやまる",
    "m": {
      "en": "to apologize",
      "zh-TW": "道歉",
      "zh-CN": "道歉",
      "ko": "사과하다",
      "vi": "xin lỗi",
      "id": "minta maaf"
    }
  },
  {
    "id": "V0058",
    "w": "断る",
    "r": "ことわる",
    "m": {
      "en": "to refuse",
      "zh-TW": "拒絕",
      "zh-CN": "拒绝",
      "ko": "거절하다",
      "vi": "từ chối",
      "id": "menolak"
    }
  },
  {
    "id": "V0059",
    "w": "頼む",
    "r": "たのむ",
    "m": {
      "en": "to request",
      "zh-TW": "請求",
      "zh-CN": "请求",
      "ko": "부탁하다",
      "vi": "nhờ",
      "id": "meminta"
    }
  },
  {
    "id": "V0060",
    "w": "誘う",
    "r": "さそう",
    "m": {
      "en": "to invite",
      "zh-TW": "邀請",
      "zh-CN": "邀请",
      "ko": "초대하다",
      "vi": "mời",
      "id": "mengundang"
    }
  },
  {
    "id": "V0061",
    "w": "紹介する",
    "r": "しょうかいする",
    "m": {
      "en": "to introduce",
      "zh-TW": "介紹",
      "zh-CN": "介绍",
      "ko": "소개하다",
      "vi": "giới thiệu",
      "id": "memperkenalkan"
    }
  },
  {
    "id": "V0062",
    "w": "案内する",
    "r": "あんないする",
    "m": {
      "en": "to guide",
      "zh-TW": "帶領",
      "zh-CN": "带领",
      "ko": "안내하다",
      "vi": "hướng dẫn",
      "id": "memandu"
    }
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
      "id": "menjelaskan"
    }
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
      "id": "melaporkan"
    }
  },
  {
    "id": "V0065",
    "w": "相談する",
    "r": "そうだんする",
    "m": {
      "en": "to consult",
      "zh-TW": "商量",
      "zh-CN": "商量",
      "ko": "상담하다",
      "vi": "tham khảo",
      "id": "berkonsultasi"
    }
  },
  {
    "id": "V0066",
    "w": "連絡する",
    "r": "れんらくする",
    "m": {
      "en": "to contact",
      "zh-TW": "聯絡",
      "zh-CN": "联络",
      "ko": "연락하다",
      "vi": "liên lạc",
      "id": "menghubungi"
    }
  },
  {
    "id": "V0067",
    "w": "確認する",
    "r": "かくにんする",
    "m": {
      "en": "to confirm",
      "zh-TW": "確認",
      "zh-CN": "确认",
      "ko": "확인하다",
      "vi": "xác nhận",
      "id": "mengkonfirmasi"
    }
  },
  {
    "id": "V0068",
    "w": "準備する",
    "r": "じゅんびする",
    "m": {
      "en": "to prepare",
      "zh-TW": "準備",
      "zh-CN": "准备",
      "ko": "준비하다",
      "vi": "chuẩn bị",
      "id": "mempersiapkan"
    }
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
      "id": "merencanakan"
    }
  },
  {
    "id": "V0070",
    "w": "予約する",
    "r": "よやくする",
    "m": {
      "en": "to reserve",
      "zh-TW": "預約",
      "zh-CN": "预约",
      "ko": "예약하다",
      "vi": "đặt trước",
      "id": "memesan"
    }
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
      "id": "memesan"
    }
  },
  {
    "id": "V0072",
    "w": "参加する",
    "r": "さんかする",
    "m": {
      "en": "to participate",
      "zh-TW": "參加",
      "zh-CN": "参加",
      "ko": "참가하다",
      "vi": "tham gia",
      "id": "berpartisipasi"
    }
  },
  {
    "id": "V0073",
    "w": "出席する",
    "r": "しゅっせきする",
    "m": {
      "en": "to attend",
      "zh-TW": "出席",
      "zh-CN": "出席",
      "ko": "출석하다",
      "vi": "tham dự",
      "id": "menghadiri"
    }
  },
  {
    "id": "V0074",
    "w": "欠席する",
    "r": "けっせきする",
    "m": {
      "en": "to be absent",
      "zh-TW": "缺席",
      "zh-CN": "缺席",
      "ko": "결석하다",
      "vi": "vắng mặt",
      "id": "absen"
    }
  },
  {
    "id": "V0075",
    "w": "遅刻する",
    "r": "ちこくする",
    "m": {
      "en": "to be late",
      "zh-TW": "遲到",
      "zh-CN": "迟到",
      "ko": "지각하다",
      "vi": "đến muộn",
      "id": "terlambat"
    }
  },
  {
    "id": "V0076",
    "w": "卒業する",
    "r": "そつぎょうする",
    "m": {
      "en": "to graduate",
      "zh-TW": "畢業",
      "zh-CN": "毕业",
      "ko": "졸업하다",
      "vi": "tốt nghiệp",
      "id": "lulus"
    }
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
      "id": "masuk sekolah"
    }
  },
  {
    "id": "V0078",
    "w": "就職する",
    "r": "しゅうしょくする",
    "m": {
      "en": "to get job",
      "zh-TW": "就職",
      "zh-CN": "就职",
      "ko": "취직하다",
      "vi": "xin việc",
      "id": "bekerja"
    }
  },
  {
    "id": "V0079",
    "w": "退職する",
    "r": "たいしょくする",
    "m": {
      "en": "to retire",
      "zh-TW": "退休",
      "zh-CN": "退休",
      "ko": "퇴직하다",
      "vi": "nghỉ việc",
      "id": "pensiun"
    }
  },
  {
    "id": "V0080",
    "w": "転職する",
    "r": "てんしょくする",
    "m": {
      "en": "to change job",
      "zh-TW": "轉職",
      "zh-CN": "转职",
      "ko": "이직하다",
      "vi": "đổi việc",
      "id": "pindah kerja"
    }
  },
  {
    "id": "V0081",
    "w": "出張する",
    "r": "しゅっちょうする",
    "m": {
      "en": "business trip",
      "zh-TW": "出差",
      "zh-CN": "出差",
      "ko": "출장하다",
      "vi": "công tác",
      "id": "dinas"
    }
  },
  {
    "id": "V0082",
    "w": "残業する",
    "r": "ざんぎょうする",
    "m": {
      "en": "to work overtime",
      "zh-TW": "加班",
      "zh-CN": "加班",
      "ko": "야근하다",
      "vi": "làm thêm",
      "id": "lembur"
    }
  },
  {
    "id": "V0083",
    "w": "休憩する",
    "r": "きゅうけいする",
    "m": {
      "en": "to take break",
      "zh-TW": "休息",
      "zh-CN": "休息",
      "ko": "휴식하다",
      "vi": "nghỉ ngơi",
      "id": "istirahat"
    }
  },
  {
    "id": "V0084",
    "w": "散歩する",
    "r": "さんぽする",
    "m": {
      "en": "to take walk",
      "zh-TW": "散步",
      "zh-CN": "散步",
      "ko": "산책하다",
      "vi": "đi dạo",
      "id": "jalan-jalan"
    }
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
      "id": "berolahraga"
    }
  },
  {
    "id": "V0086",
    "w": "練習する",
    "r": "れんしゅうする",
    "m": {
      "en": "to practice",
      "zh-TW": "練習",
      "zh-CN": "练习",
      "ko": "연습하다",
      "vi": "luyện tập",
      "id": "berlatih"
    }
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
      "id": "mengalami"
    }
  },
  {
    "id": "V0088",
    "w": "成功する",
    "r": "せいこうする",
    "m": {
      "en": "to succeed",
      "zh-TW": "成功",
      "zh-CN": "成功",
      "ko": "성공하다",
      "vi": "thành công",
      "id": "berhasil"
    }
  },
  {
    "id": "V0089",
    "w": "失敗する",
    "r": "しっぱいする",
    "m": {
      "en": "to fail",
      "zh-TW": "失敗",
      "zh-CN": "失败",
      "ko": "실패하다",
      "vi": "thất bại",
      "id": "gagal"
    }
  },
  {
    "id": "V0090",
    "w": "努力する",
    "r": "どりょくする",
    "m": {
      "en": "to make effort",
      "zh-TW": "努力",
      "zh-CN": "努力",
      "ko": "노력하다",
      "vi": "nỗ lực",
      "id": "berusaha"
    }
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
      "id": "berhati-hati"
    }
  },
  {
    "id": "V0092",
    "w": "心配する",
    "r": "しんぱいする",
    "m": {
      "en": "to worry",
      "zh-TW": "擔心",
      "zh-CN": "担心",
      "ko": "걱정하다",
      "vi": "lo lắng",
      "id": "khawatir"
    }
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
      "id": "lega"
    }
  },
  {
    "id": "V0094",
    "w": "感動する",
    "r": "かんどうする",
    "m": {
      "en": "to be moved",
      "zh-TW": "感動",
      "zh-CN": "感动",
      "ko": "감동하다",
      "vi": "cảm động",
      "id": "terharu"
    }
  },
  {
    "id": "V0095",
    "w": "感謝する",
    "r": "かんしゃする",
    "m": {
      "en": "to appreciate",
      "zh-TW": "感謝",
      "zh-CN": "感谢",
      "ko": "감사하다",
      "vi": "cảm ơn",
      "id": "berterima kasih"
    }
  },
  {
    "id": "V0096",
    "w": "反対する",
    "r": "はんたいする",
    "m": {
      "en": "to oppose",
      "zh-TW": "反對",
      "zh-CN": "反对",
      "ko": "반대하다",
      "vi": "phản đối",
      "id": "menentang"
    }
  },
  {
    "id": "V0097",
    "w": "賛成する",
    "r": "さんせいする",
    "m": {
      "en": "to agree",
      "zh-TW": "贊成",
      "zh-CN": "赞成",
      "ko": "찬성하다",
      "vi": "đồng ý",
      "id": "setuju"
    }
  },
  {
    "id": "V0098",
    "w": "比較する",
    "r": "ひかくする",
    "m": {
      "en": "to compare",
      "zh-TW": "比較",
      "zh-CN": "比较",
      "ko": "비교하다",
      "vi": "so sánh",
      "id": "membandingkan"
    }
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
      "id": "membedakan"
    }
  },
  {
    "id": "V0100",
    "w": "判断する",
    "r": "はんだんする",
    "m": {
      "en": "to judge",
      "zh-TW": "判斷",
      "zh-CN": "判断",
      "ko": "판단하다",
      "vi": "phán đoán",
      "id": "menilai"
    }
  },
  {
    "id": "V0101",
    "w": "選択する",
    "r": "せんたくする",
    "m": {
      "en": "to select",
      "zh-TW": "選擇",
      "zh-CN": "选择",
      "ko": "선택하다",
      "vi": "lựa chọn",
      "id": "memilih"
    }
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
      "id": "menemukan"
    }
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
      "id": "menemukan"
    }
  },
  {
    "id": "V0104",
    "w": "発表する",
    "r": "はっぴょうする",
    "m": {
      "en": "to announce",
      "zh-TW": "發表",
      "zh-CN": "发表",
      "ko": "발표하다",
      "vi": "công bố",
      "id": "mengumumkan"
    }
  },
  {
    "id": "V0105",
    "w": "表現する",
    "r": "ひょうげんする",
    "m": {
      "en": "to express",
      "zh-TW": "表達",
      "zh-CN": "表达",
      "ko": "표현하다",
      "vi": "biểu đạt",
      "id": "mengekspresikan"
    }
  },
  {
    "id": "V0106",
    "w": "実現する",
    "r": "じつげんする",
    "m": {
      "en": "to realize",
      "zh-TW": "實現",
      "zh-CN": "实现",
      "ko": "실현하다",
      "vi": "thực hiện",
      "id": "mewujudkan"
    }
  },
  {
    "id": "V0107",
    "w": "完成する",
    "r": "かんせいする",
    "m": {
      "en": "to complete",
      "zh-TW": "完成",
      "zh-CN": "完成",
      "ko": "완성하다",
      "vi": "hoàn thành",
      "id": "menyelesaikan"
    }
  },
  {
    "id": "V0108",
    "w": "解決する",
    "r": "かいけつする",
    "m": {
      "en": "to solve",
      "zh-TW": "解決",
      "zh-CN": "解决",
      "ko": "해결하다",
      "vi": "giải quyết",
      "id": "menyelesaikan"
    }
  },
  {
    "id": "V0109",
    "w": "理解する",
    "r": "りかいする",
    "m": {
      "en": "to understand",
      "zh-TW": "理解",
      "zh-CN": "理解",
      "ko": "이해하다",
      "vi": "hiểu",
      "id": "memahami"
    }
  },
  {
    "id": "V0110",
    "w": "納得する",
    "r": "なっとくする",
    "m": {
      "en": "to accept",
      "zh-TW": "接受",
      "zh-CN": "接受",
      "ko": "납득하다",
      "vi": "chấp nhận",
      "id": "menerima"
    }
  },
  {
    "id": "V0111",
    "w": "利用する",
    "r": "りようする",
    "m": {
      "en": "to use",
      "zh-TW": "利用",
      "zh-CN": "利用",
      "ko": "이용하다",
      "vi": "sử dụng",
      "id": "menggunakan"
    }
  },
  {
    "id": "V0112",
    "w": "活用する",
    "r": "かつようする",
    "m": {
      "en": "to utilize",
      "zh-TW": "活用",
      "zh-CN": "活用",
      "ko": "활용하다",
      "vi": "vận dụng",
      "id": "memanfaatkan"
    }
  },
  {
    "id": "V0113",
    "w": "応用する",
    "r": "おうようする",
    "m": {
      "en": "to apply",
      "zh-TW": "應用",
      "zh-CN": "应用",
      "ko": "응용하다",
      "vi": "áp dụng",
      "id": "menerapkan"
    }
  },
  {
    "id": "V0114",
    "w": "影響する",
    "r": "えいきょうする",
    "m": {
      "en": "to influence",
      "zh-TW": "影響",
      "zh-CN": "影响",
      "ko": "영향하다",
      "vi": "ảnh hưởng",
      "id": "mempengaruhi"
    }
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
      "id": "berhubungan"
    }
  },
  {
    "id": "V0116",
    "w": "存在する",
    "r": "そんざいする",
    "m": {
      "en": "to exist",
      "zh-TW": "存在",
      "zh-CN": "存在",
      "ko": "존재하다",
      "vi": "tồn tại",
      "id": "ada"
    }
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
      "id": "terjadi"
    }
  },
  {
    "id": "V0118",
    "w": "変化する",
    "r": "へんかする",
    "m": {
      "en": "to change",
      "zh-TW": "變化",
      "zh-CN": "变化",
      "ko": "변화하다",
      "vi": "biến đổi",
      "id": "berubah"
    }
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
      "id": "maju"
    }
  },
  {
    "id": "V0120",
    "w": "発展する",
    "r": "はってんする",
    "m": {
      "en": "to develop",
      "zh-TW": "發展",
      "zh-CN": "发展",
      "ko": "발전하다",
      "vi": "phát triển",
      "id": "berkembang"
    }
  },
  {
    "id": "V0121",
    "w": "丁寧",
    "r": "ていねい",
    "m": {
      "en": "polite",
      "zh-TW": "禮貌",
      "zh-CN": "礼貌",
      "ko": "정중",
      "vi": "lịch sự",
      "id": "sopan"
    }
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
      "id": "baik hati"
    }
  },
  {
    "id": "V0123",
    "w": "熱心",
    "r": "ねっしん",
    "m": {
      "en": "enthusiastic",
      "zh-TW": "熱心",
      "zh-CN": "热心",
      "ko": "열심",
      "vi": "nhiệt tình",
      "id": "antusias"
    }
  },
  {
    "id": "V0124",
    "w": "真面目",
    "r": "まじめ",
    "m": {
      "en": "serious",
      "zh-TW": "認真",
      "zh-CN": "认真",
      "ko": "성실",
      "vi": "nghiêm túc",
      "id": "serius"
    }
  },
  {
    "id": "V0125",
    "w": "正直",
    "r": "しょうじき",
    "m": {
      "en": "honest",
      "zh-TW": "誠實",
      "zh-CN": "诚实",
      "ko": "정직",
      "vi": "thật thà",
      "id": "jujur"
    }
  },
  {
    "id": "V0126",
    "w": "素直",
    "r": "すなお",
    "m": {
      "en": "obedient",
      "zh-TW": "坦率",
      "zh-CN": "坦率",
      "ko": "솔직",
      "vi": "ngoan",
      "id": "patuh"
    }
  },
  {
    "id": "V0127",
    "w": "適当",
    "r": "てきとう",
    "m": {
      "en": "appropriate",
      "zh-TW": "適當",
      "zh-CN": "适当",
      "ko": "적당",
      "vi": "thích hợp",
      "id": "tepat"
    }
  },
  {
    "id": "V0128",
    "w": "必要",
    "r": "ひつよう",
    "m": {
      "en": "necessary",
      "zh-TW": "必要",
      "zh-CN": "必要",
      "ko": "필요",
      "vi": "cần thiết",
      "id": "perlu"
    }
  },
  {
    "id": "V0129",
    "w": "重要",
    "r": "じゅうよう",
    "m": {
      "en": "important",
      "zh-TW": "重要",
      "zh-CN": "重要",
      "ko": "중요",
      "vi": "quan trọng",
      "id": "penting"
    }
  },
  {
    "id": "V0130",
    "w": "危険",
    "r": "きけん",
    "m": {
      "en": "dangerous",
      "zh-TW": "危險",
      "zh-CN": "危险",
      "ko": "위험",
      "vi": "nguy hiểm",
      "id": "berbahaya"
    }
  },
  {
    "id": "V0131",
    "w": "安全",
    "r": "あんぜん",
    "m": {
      "en": "safe",
      "zh-TW": "安全",
      "zh-CN": "安全",
      "ko": "안전",
      "vi": "an toàn",
      "id": "aman"
    }
  },
  {
    "id": "V0132",
    "w": "完全",
    "r": "かんぜん",
    "m": {
      "en": "complete",
      "zh-TW": "完全",
      "zh-CN": "完全",
      "ko": "완전",
      "vi": "hoàn toàn",
      "id": "sempurna"
    }
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
      "id": "cemas"
    }
  },
  {
    "id": "V0134",
    "w": "幸せ",
    "r": "しあわせ",
    "m": {
      "en": "happy",
      "zh-TW": "幸福",
      "zh-CN": "幸福",
      "ko": "행복",
      "vi": "hạnh phúc",
      "id": "bahagia"
    }
  },
  {
    "id": "V0135",
    "w": "可能",
    "r": "かのう",
    "m": {
      "en": "possible",
      "zh-TW": "可能",
      "zh-CN": "可能",
      "ko": "가능",
      "vi": "có thể",
      "id": "mungkin"
    }
  },
  {
    "id": "V0136",
    "w": "不可能",
    "r": "ふかのう",
    "m": {
      "en": "impossible",
      "zh-TW": "不可能",
      "zh-CN": "不可能",
      "ko": "불가능",
      "vi": "không thể",
      "id": "mustahil"
    }
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
      "id": "khusus"
    }
  },
  {
    "id": "V0138",
    "w": "普通",
    "r": "ふつう",
    "m": {
      "en": "normal",
      "zh-TW": "普通",
      "zh-CN": "普通",
      "ko": "보통",
      "vi": "bình thường",
      "id": "biasa"
    }
  },
  {
    "id": "V0139",
    "w": "複雑",
    "r": "ふくざつ",
    "m": {
      "en": "complex",
      "zh-TW": "複雜",
      "zh-CN": "复杂",
      "ko": "복잡",
      "vi": "phức tạp",
      "id": "rumit"
    }
  },
  {
    "id": "V0140",
    "w": "簡単",
    "r": "かんたん",
    "m": {
      "en": "simple",
      "zh-TW": "簡單",
      "zh-CN": "简单",
      "ko": "간단",
      "vi": "đơn giản",
      "id": "sederhana"
    }
  },
  {
    "id": "V0141",
    "w": "得意",
    "r": "とくい",
    "m": {
      "en": "good at",
      "zh-TW": "擅長",
      "zh-CN": "擅长",
      "ko": "잘하다",
      "vi": "giỏi",
      "id": "mahir"
    }
  },
  {
    "id": "V0142",
    "w": "苦手",
    "r": "にがて",
    "m": {
      "en": "bad at",
      "zh-TW": "不擅長",
      "zh-CN": "不擅长",
      "ko": "못하다",
      "vi": "không giỏi",
      "id": "lemah"
    }
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
      "id": "pandai"
    }
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
      "id": "tidak pandai"
    }
  },
  {
    "id": "V0145",
    "w": "正確",
    "r": "せいかく",
    "m": {
      "en": "accurate",
      "zh-TW": "正確",
      "zh-CN": "正确",
      "ko": "정확",
      "vi": "chính xác",
      "id": "akurat"
    }
  },
  {
    "id": "V0146",
    "w": "曖昧",
    "r": "あいまい",
    "m": {
      "en": "vague",
      "zh-TW": "模糊",
      "zh-CN": "模糊",
      "ko": "애매",
      "vi": "mơ hồ",
      "id": "ambigu"
    }
  },
  {
    "id": "V0147",
    "w": "明確",
    "r": "めいかく",
    "m": {
      "en": "clear",
      "zh-TW": "明確",
      "zh-CN": "明确",
      "ko": "명확",
      "vi": "rõ ràng",
      "id": "jelas"
    }
  },
  {
    "id": "V0148",
    "w": "具体的",
    "r": "ぐたいてき",
    "m": {
      "en": "concrete",
      "zh-TW": "具體",
      "zh-CN": "具体",
      "ko": "구체적",
      "vi": "cụ thể",
      "id": "konkret"
    }
  },
  {
    "id": "V0149",
    "w": "抽象的",
    "r": "ちゅうしょうてき",
    "m": {
      "en": "abstract",
      "zh-TW": "抽象",
      "zh-CN": "抽象",
      "ko": "추상적",
      "vi": "trừu tượng",
      "id": "abstrak"
    }
  },
  {
    "id": "V0150",
    "w": "積極的",
    "r": "せっきょくてき",
    "m": {
      "en": "positive",
      "zh-TW": "積極",
      "zh-CN": "积极",
      "ko": "적극적",
      "vi": "tích cực",
      "id": "positif"
    }
  },
  {
    "id": "V0151",
    "w": "預ける",
    "r": "あずける",
    "m": {
      "en": "to deposit",
      "zh-TW": "寄存",
      "zh-CN": "寄存",
      "ko": "맡기다",
      "vi": "gửi",
      "id": "menitipkan"
    }
  },
  {
    "id": "V0152",
    "w": "預かる",
    "r": "あずかる",
    "m": {
      "en": "to keep",
      "zh-TW": "保管",
      "zh-CN": "保管",
      "ko": "맡다",
      "vi": "giữ",
      "id": "menyimpan"
    }
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
      "id": "merasakan"
    }
  },
  {
    "id": "V0154",
    "w": "暖まる",
    "r": "あたたまる",
    "m": {
      "en": "to warm up",
      "zh-TW": "變暖",
      "zh-CN": "变暖",
      "ko": "따뜻해지다",
      "vi": "ấm lên",
      "id": "menghangat"
    }
  },
  {
    "id": "V0155",
    "w": "当たる",
    "r": "あたる",
    "m": {
      "en": "to hit",
      "zh-TW": "中",
      "zh-CN": "中",
      "ko": "맞다",
      "vi": "trúng",
      "id": "kena"
    }
  },
  {
    "id": "V0156",
    "w": "扱う",
    "r": "あつかう",
    "m": {
      "en": "to handle",
      "zh-TW": "處理",
      "zh-CN": "处理",
      "ko": "다루다",
      "vi": "xử lý",
      "id": "menangani"
    }
  },
  {
    "id": "V0157",
    "w": "当てる",
    "r": "あてる",
    "m": {
      "en": "to guess",
      "zh-TW": "猜中",
      "zh-CN": "猜中",
      "ko": "맞추다",
      "vi": "đoán",
      "id": "menebak"
    }
  },
  {
    "id": "V0158",
    "w": "暴れる",
    "r": "あばれる",
    "m": {
      "en": "to rage",
      "zh-TW": "暴動",
      "zh-CN": "暴动",
      "ko": "날뛰다",
      "vi": "hung hăng",
      "id": "mengamuk"
    }
  },
  {
    "id": "V0159",
    "w": "溢れる",
    "r": "あふれる",
    "m": {
      "en": "to overflow",
      "zh-TW": "溢出",
      "zh-CN": "溢出",
      "ko": "넘치다",
      "vi": "tràn",
      "id": "meluap"
    }
  },
  {
    "id": "V0160",
    "w": "争う",
    "r": "あらそう",
    "m": {
      "en": "to compete",
      "zh-TW": "競爭",
      "zh-CN": "竞争",
      "ko": "다투다",
      "vi": "tranh",
      "id": "bersaing"
    }
  },
  {
    "id": "V0161",
    "w": "改める",
    "r": "あらためる",
    "m": {
      "en": "to revise",
      "zh-TW": "改正",
      "zh-CN": "改正",
      "ko": "고치다",
      "vi": "sửa đổi",
      "id": "memperbaiki"
    }
  },
  {
    "id": "V0162",
    "w": "表す",
    "r": "あらわす",
    "m": {
      "en": "to express",
      "zh-TW": "表達",
      "zh-CN": "表达",
      "ko": "나타내다",
      "vi": "biểu thị",
      "id": "menyatakan"
    }
  },
  {
    "id": "V0163",
    "w": "現れる",
    "r": "あらわれる",
    "m": {
      "en": "to appear",
      "zh-TW": "出現",
      "zh-CN": "出现",
      "ko": "나타나다",
      "vi": "xuất hiện",
      "id": "muncul"
    }
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
      "id": "hidup"
    }
  },
  {
    "id": "V0165",
    "w": "抱く",
    "r": "いだく",
    "m": {
      "en": "to embrace",
      "zh-TW": "抱",
      "zh-CN": "抱",
      "ko": "품다",
      "vi": "ôm",
      "id": "memeluk"
    }
  },
  {
    "id": "V0166",
    "w": "祈る",
    "r": "いのる",
    "m": {
      "en": "to pray",
      "zh-TW": "祈禱",
      "zh-CN": "祈祷",
      "ko": "기도하다",
      "vi": "cầu nguyện",
      "id": "berdoa"
    }
  },
  {
    "id": "V0167",
    "w": "祝う",
    "r": "いわう",
    "m": {
      "en": "to celebrate",
      "zh-TW": "慶祝",
      "zh-CN": "庆祝",
      "ko": "축하하다",
      "vi": "chúc mừng",
      "id": "merayakan"
    }
  },
  {
    "id": "V0168",
    "w": "植える",
    "r": "うえる",
    "m": {
      "en": "to plant",
      "zh-TW": "種植",
      "zh-CN": "种植",
      "ko": "심다",
      "vi": "trồng",
      "id": "menanam"
    }
  },
  {
    "id": "V0169",
    "w": "浮かべる",
    "r": "うかべる",
    "m": {
      "en": "to float",
      "zh-TW": "浮起",
      "zh-CN": "浮起",
      "ko": "띄우다",
      "vi": "nổi",
      "id": "mengapungkan"
    }
  },
  {
    "id": "V0170",
    "w": "受ける",
    "r": "うける",
    "m": {
      "en": "to receive",
      "zh-TW": "接受",
      "zh-CN": "接受",
      "ko": "받다",
      "vi": "nhận",
      "id": "menerima"
    }
  },
  {
    "id": "V0171",
    "w": "失う",
    "r": "うしなう",
    "m": {
      "en": "to lose",
      "zh-TW": "失去",
      "zh-CN": "失去",
      "ko": "잃다",
      "vi": "mất",
      "id": "kehilangan"
    }
  },
  {
    "id": "V0172",
    "w": "疑う",
    "r": "うたがう",
    "m": {
      "en": "to doubt",
      "zh-TW": "懷疑",
      "zh-CN": "怀疑",
      "ko": "의심하다",
      "vi": "nghi ngờ",
      "id": "meragukan"
    }
  },
  {
    "id": "V0173",
    "w": "訴える",
    "r": "うったえる",
    "m": {
      "en": "to sue",
      "zh-TW": "起訴",
      "zh-CN": "起诉",
      "ko": "호소하다",
      "vi": "kiện",
      "id": "menuntut"
    }
  },
  {
    "id": "V0174",
    "w": "奪う",
    "r": "うばう",
    "m": {
      "en": "to rob",
      "zh-TW": "奪取",
      "zh-CN": "夺取",
      "ko": "빼앗다",
      "vi": "cướp",
      "id": "merampas"
    }
  },
  {
    "id": "V0175",
    "w": "埋める",
    "r": "うめる",
    "m": {
      "en": "to bury",
      "zh-TW": "埋",
      "zh-CN": "埋",
      "ko": "묻다",
      "vi": "chôn",
      "id": "mengubur"
    }
  },
  {
    "id": "V0176",
    "w": "敬う",
    "r": "うやまう",
    "m": {
      "en": "to respect",
      "zh-TW": "尊敬",
      "zh-CN": "尊敬",
      "ko": "공경하다",
      "vi": "kính trọng",
      "id": "menghormati"
    }
  },
  {
    "id": "V0177",
    "w": "占う",
    "r": "うらなう",
    "m": {
      "en": "to fortune-tell",
      "zh-TW": "算命",
      "zh-CN": "算命",
      "ko": "점치다",
      "vi": "xem bói",
      "id": "meramal"
    }
  },
  {
    "id": "V0178",
    "w": "恨む",
    "r": "うらむ",
    "m": {
      "en": "to resent",
      "zh-TW": "怨恨",
      "zh-CN": "怨恨",
      "ko": "원망하다",
      "vi": "oán hận",
      "id": "membenci"
    }
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
      "id": "laku"
    }
  },
  {
    "id": "V0180",
    "w": "追う",
    "r": "おう",
    "m": {
      "en": "to chase",
      "zh-TW": "追",
      "zh-CN": "追",
      "ko": "쫓다",
      "vi": "đuổi",
      "id": "mengejar"
    }
  },
  {
    "id": "V0181",
    "w": "負う",
    "r": "おう",
    "m": {
      "en": "to bear",
      "zh-TW": "承擔",
      "zh-CN": "承担",
      "ko": "지다",
      "vi": "gánh",
      "id": "menanggung"
    }
  },
  {
    "id": "V0182",
    "w": "覆う",
    "r": "おおう",
    "m": {
      "en": "to cover",
      "zh-TW": "覆蓋",
      "zh-CN": "覆盖",
      "ko": "덮다",
      "vi": "che",
      "id": "menutupi"
    }
  },
  {
    "id": "V0183",
    "w": "補う",
    "r": "おぎなう",
    "m": {
      "en": "to supplement",
      "zh-TW": "補充",
      "zh-CN": "补充",
      "ko": "보충하다",
      "vi": "bổ sung",
      "id": "melengkapi"
    }
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
      "id": "mengirim"
    }
  },
  {
    "id": "V0185",
    "w": "贈る",
    "r": "おくる",
    "m": {
      "en": "to present",
      "zh-TW": "贈送",
      "zh-CN": "赠送",
      "ko": "선물하다",
      "vi": "tặng",
      "id": "menghadiahi"
    }
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
      "id": "membangunkan"
    }
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
      "id": "melakukan"
    }
  },
  {
    "id": "V0188",
    "w": "収める",
    "r": "おさめる",
    "m": {
      "en": "to obtain",
      "zh-TW": "收穫",
      "zh-CN": "收获",
      "ko": "거두다",
      "vi": "thu được",
      "id": "memperoleh"
    }
  },
  {
    "id": "V0189",
    "w": "治める",
    "r": "おさめる",
    "m": {
      "en": "to govern",
      "zh-TW": "統治",
      "zh-CN": "统治",
      "ko": "다스리다",
      "vi": "cai trị",
      "id": "memerintah"
    }
  },
  {
    "id": "V0190",
    "w": "惜しむ",
    "r": "おしむ",
    "m": {
      "en": "to regret",
      "zh-TW": "惋惜",
      "zh-CN": "惋惜",
      "ko": "아끼다",
      "vi": "tiếc",
      "id": "menyayangkan"
    }
  },
  {
    "id": "V0191",
    "w": "恐れる",
    "r": "おそれる",
    "m": {
      "en": "to fear",
      "zh-TW": "害怕",
      "zh-CN": "害怕",
      "ko": "두려워하다",
      "vi": "sợ",
      "id": "takut"
    }
  },
  {
    "id": "V0192",
    "w": "襲う",
    "r": "おそう",
    "m": {
      "en": "to attack",
      "zh-TW": "襲擊",
      "zh-CN": "袭击",
      "ko": "습격하다",
      "vi": "tấn công",
      "id": "menyerang"
    }
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
      "id": "diajarkan"
    }
  },
  {
    "id": "V0194",
    "w": "落ち着く",
    "r": "おちつく",
    "m": {
      "en": "to calm down",
      "zh-TW": "冷靜",
      "zh-CN": "冷静",
      "ko": "침착하다",
      "vi": "bình tĩnh",
      "id": "tenang"
    }
  },
  {
    "id": "V0195",
    "w": "脅かす",
    "r": "おどかす",
    "m": {
      "en": "to threaten",
      "zh-TW": "威脅",
      "zh-CN": "威胁",
      "ko": "위협하다",
      "vi": "đe dọa",
      "id": "mengancam"
    }
  },
  {
    "id": "V0196",
    "w": "踊る",
    "r": "おどる",
    "m": {
      "en": "to dance",
      "zh-TW": "跳舞",
      "zh-CN": "跳舞",
      "ko": "춤추다",
      "vi": "nhảy",
      "id": "menari"
    }
  },
  {
    "id": "V0197",
    "w": "溺れる",
    "r": "おぼれる",
    "m": {
      "en": "to drown",
      "zh-TW": "溺水",
      "zh-CN": "溺水",
      "ko": "빠지다",
      "vi": "chìm",
      "id": "tenggelam"
    }
  },
  {
    "id": "V0198",
    "w": "思い付く",
    "r": "おもいつく",
    "m": {
      "en": "to think of",
      "zh-TW": "想到",
      "zh-CN": "想到",
      "ko": "떠오르다",
      "vi": "nghĩ ra",
      "id": "terpikir"
    }
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
      "id": "berenang"
    }
  },
  {
    "id": "V0200",
    "w": "及ぶ",
    "r": "およぶ",
    "m": {
      "en": "to reach",
      "zh-TW": "達到",
      "zh-CN": "达到",
      "ko": "미치다",
      "vi": "đạt",
      "id": "mencapai"
    }
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
      "id": "turun"
    }
  },
  {
    "id": "V0202",
    "w": "折る",
    "r": "おる",
    "m": {
      "en": "to break",
      "zh-TW": "折",
      "zh-CN": "折",
      "ko": "꺾다",
      "vi": "bẻ",
      "id": "mematahkan"
    }
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
      "id": "selesai"
    }
  },
  {
    "id": "V0204",
    "w": "限る",
    "r": "かぎる",
    "m": {
      "en": "to limit",
      "zh-TW": "限制",
      "zh-CN": "限制",
      "ko": "제한하다",
      "vi": "giới hạn",
      "id": "membatasi"
    }
  },
  {
    "id": "V0205",
    "w": "隠す",
    "r": "かくす",
    "m": {
      "en": "to hide",
      "zh-TW": "隱藏",
      "zh-CN": "隐藏",
      "ko": "숨기다",
      "vi": "giấu",
      "id": "menyembunyikan"
    }
  },
  {
    "id": "V0206",
    "w": "隠れる",
    "r": "かくれる",
    "m": {
      "en": "to be hidden",
      "zh-TW": "躲藏",
      "zh-CN": "躲藏",
      "ko": "숨다",
      "vi": "ẩn",
      "id": "bersembunyi"
    }
  },
  {
    "id": "V0207",
    "w": "欠ける",
    "r": "かける",
    "m": {
      "en": "to lack",
      "zh-TW": "缺少",
      "zh-CN": "缺少",
      "ko": "빠지다",
      "vi": "thiếu",
      "id": "kurang"
    }
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
      "id": "mengelilingi"
    }
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
      "id": "menumpuk"
    }
  },
  {
    "id": "V0210",
    "w": "飾る",
    "r": "かざる",
    "m": {
      "en": "to decorate",
      "zh-TW": "裝飾",
      "zh-CN": "装饰",
      "ko": "장식하다",
      "vi": "trang trí",
      "id": "menghias"
    }
  },
  {
    "id": "V0211",
    "w": "稼ぐ",
    "r": "かせぐ",
    "m": {
      "en": "to earn",
      "zh-TW": "賺",
      "zh-CN": "赚",
      "ko": "벌다",
      "vi": "kiếm",
      "id": "menghasilkan"
    }
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
      "id": "mengeraskan"
    }
  },
  {
    "id": "V0213",
    "w": "傾く",
    "r": "かたむく",
    "m": {
      "en": "to lean",
      "zh-TW": "傾斜",
      "zh-CN": "倾斜",
      "ko": "기울다",
      "vi": "nghiêng",
      "id": "miring"
    }
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
      "id": "menceritakan"
    }
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
      "id": "menang"
    }
  },
  {
    "id": "V0216",
    "w": "叶う",
    "r": "かなう",
    "m": {
      "en": "to come true",
      "zh-TW": "實現",
      "zh-CN": "实现",
      "ko": "이루어지다",
      "vi": "thành hiện thực",
      "id": "terwujud"
    }
  },
  {
    "id": "V0217",
    "w": "構う",
    "r": "かまう",
    "m": {
      "en": "to mind",
      "zh-TW": "介意",
      "zh-CN": "介意",
      "ko": "신경쓰다",
      "vi": "quan tâm",
      "id": "peduli"
    }
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
      "id": "bolak-balik"
    }
  },
  {
    "id": "V0219",
    "w": "枯れる",
    "r": "かれる",
    "m": {
      "en": "to wither",
      "zh-TW": "枯萎",
      "zh-CN": "枯萎",
      "ko": "시들다",
      "vi": "héo",
      "id": "layu"
    }
  },
  {
    "id": "V0220",
    "w": "乾く",
    "r": "かわく",
    "m": {
      "en": "to dry",
      "zh-TW": "乾燥",
      "zh-CN": "干燥",
      "ko": "마르다",
      "vi": "khô",
      "id": "kering"
    }
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
      "id": "berpikir"
    }
  },
  {
    "id": "V0222",
    "w": "感じる",
    "r": "かんじる",
    "m": {
      "en": "to feel",
      "zh-TW": "感覺",
      "zh-CN": "感觉",
      "ko": "느끼다",
      "vi": "cảm thấy",
      "id": "merasakan"
    }
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
      "id": "terdengar"
    }
  },
  {
    "id": "V0224",
    "w": "刻む",
    "r": "きざむ",
    "m": {
      "en": "to carve",
      "zh-TW": "刻",
      "zh-CN": "刻",
      "ko": "새기다",
      "vi": "khắc",
      "id": "mengukir"
    }
  },
  {
    "id": "V0225",
    "w": "傷つく",
    "r": "きずつく",
    "m": {
      "en": "to get hurt",
      "zh-TW": "受傷",
      "zh-CN": "受伤",
      "ko": "상처받다",
      "vi": "bị thương",
      "id": "terluka"
    }
  },
  {
    "id": "V0226",
    "w": "傷つける",
    "r": "きずつける",
    "m": {
      "en": "to hurt",
      "zh-TW": "傷害",
      "zh-CN": "伤害",
      "ko": "상처주다",
      "vi": "làm tổn thương",
      "id": "melukai"
    }
  },
  {
    "id": "V0227",
    "w": "築く",
    "r": "きずく",
    "m": {
      "en": "to build",
      "zh-TW": "建立",
      "zh-CN": "建立",
      "ko": "쌓다",
      "vi": "xây dựng",
      "id": "membangun"
    }
  },
  {
    "id": "V0228",
    "w": "競う",
    "r": "きそう",
    "m": {
      "en": "to compete",
      "zh-TW": "競爭",
      "zh-CN": "竞争",
      "ko": "경쟁하다",
      "vi": "cạnh tranh",
      "id": "bersaing"
    }
  },
  {
    "id": "V0229",
    "w": "鍛える",
    "r": "きたえる",
    "m": {
      "en": "to train",
      "zh-TW": "鍛鍊",
      "zh-CN": "锻炼",
      "ko": "단련하다",
      "vi": "rèn luyện",
      "id": "melatih"
    }
  },
  {
    "id": "V0230",
    "w": "極める",
    "r": "きわめる",
    "m": {
      "en": "to master",
      "zh-TW": "精通",
      "zh-CN": "精通",
      "ko": "극하다",
      "vi": "thành thạo",
      "id": "menguasai"
    }
  },
  {
    "id": "V0231",
    "w": "崩れる",
    "r": "くずれる",
    "m": {
      "en": "to collapse",
      "zh-TW": "崩塌",
      "zh-CN": "崩塌",
      "ko": "무너지다",
      "vi": "sụp đổ",
      "id": "runtuh"
    }
  },
  {
    "id": "V0232",
    "w": "砕く",
    "r": "くだく",
    "m": {
      "en": "to crush",
      "zh-TW": "粉碎",
      "zh-CN": "粉碎",
      "ko": "부수다",
      "vi": "nghiền",
      "id": "menghancurkan"
    }
  },
  {
    "id": "V0233",
    "w": "腐る",
    "r": "くさる",
    "m": {
      "en": "to rot",
      "zh-TW": "腐爛",
      "zh-CN": "腐烂",
      "ko": "썩다",
      "vi": "thối",
      "id": "membusuk"
    }
  },
  {
    "id": "V0234",
    "w": "配る",
    "r": "くばる",
    "m": {
      "en": "to distribute",
      "zh-TW": "分發",
      "zh-CN": "分发",
      "ko": "나누다",
      "vi": "phân phát",
      "id": "membagikan"
    }
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
      "id": "merakit"
    }
  },
  {
    "id": "V0236",
    "w": "悔やむ",
    "r": "くやむ",
    "m": {
      "en": "to regret",
      "zh-TW": "後悔",
      "zh-CN": "后悔",
      "ko": "후회하다",
      "vi": "hối hận",
      "id": "menyesal"
    }
  },
  {
    "id": "V0237",
    "w": "暮らす",
    "r": "くらす",
    "m": {
      "en": "to live",
      "zh-TW": "生活",
      "zh-CN": "生活",
      "ko": "살다",
      "vi": "sống",
      "id": "tinggal"
    }
  },
  {
    "id": "V0238",
    "w": "比べる",
    "r": "くらべる",
    "m": {
      "en": "to compare",
      "zh-TW": "比較",
      "zh-CN": "比较",
      "ko": "비교하다",
      "vi": "so sánh",
      "id": "membandingkan"
    }
  },
  {
    "id": "V0239",
    "w": "苦しむ",
    "r": "くるしむ",
    "m": {
      "en": "to suffer",
      "zh-TW": "痛苦",
      "zh-CN": "痛苦",
      "ko": "괴로워하다",
      "vi": "đau khổ",
      "id": "menderita"
    }
  },
  {
    "id": "V0240",
    "w": "加える",
    "r": "くわえる",
    "m": {
      "en": "to add",
      "zh-TW": "加",
      "zh-CN": "加",
      "ko": "더하다",
      "vi": "thêm",
      "id": "menambah"
    }
  },
  {
    "id": "V0241",
    "w": "消える",
    "r": "きえる",
    "m": {
      "en": "to disappear",
      "zh-TW": "消失",
      "zh-CN": "消失",
      "ko": "사라지다",
      "vi": "biến mất",
      "id": "menghilang"
    }
  },
  {
    "id": "V0242",
    "w": "消す",
    "r": "けす",
    "m": {
      "en": "to erase",
      "zh-TW": "擦掉",
      "zh-CN": "擦掉",
      "ko": "지우다",
      "vi": "xóa",
      "id": "menghapus"
    }
  },
  {
    "id": "V0243",
    "w": "蹴る",
    "r": "ける",
    "m": {
      "en": "to kick",
      "zh-TW": "踢",
      "zh-CN": "踢",
      "ko": "차다",
      "vi": "đá",
      "id": "menendang"
    }
  },
  {
    "id": "V0244",
    "w": "越える",
    "r": "こえる",
    "m": {
      "en": "to cross",
      "zh-TW": "越過",
      "zh-CN": "越过",
      "ko": "넘다",
      "vi": "vượt qua",
      "id": "melewati"
    }
  },
  {
    "id": "V0245",
    "w": "凍る",
    "r": "こおる",
    "m": {
      "en": "to freeze",
      "zh-TW": "結冰",
      "zh-CN": "结冰",
      "ko": "얼다",
      "vi": "đóng băng",
      "id": "membeku"
    }
  },
  {
    "id": "V0246",
    "w": "焦げる",
    "r": "こげる",
    "m": {
      "en": "to burn",
      "zh-TW": "燒焦",
      "zh-CN": "烧焦",
      "ko": "타다",
      "vi": "cháy",
      "id": "gosong"
    }
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
      "id": "mencoba"
    }
  },
  {
    "id": "V0248",
    "w": "好む",
    "r": "このむ",
    "m": {
      "en": "to prefer",
      "zh-TW": "喜好",
      "zh-CN": "喜好",
      "ko": "좋아하다",
      "vi": "thích",
      "id": "menyukai"
    }
  },
  {
    "id": "V0249",
    "w": "転がる",
    "r": "ころがる",
    "m": {
      "en": "to roll",
      "zh-TW": "滾動",
      "zh-CN": "滚动",
      "ko": "구르다",
      "vi": "lăn",
      "id": "menggelinding"
    }
  },
  {
    "id": "V0250",
    "w": "殺す",
    "r": "ころす",
    "m": {
      "en": "to kill",
      "zh-TW": "殺",
      "zh-CN": "杀",
      "ko": "죽이다",
      "vi": "giết",
      "id": "membunuh"
    }
  },
  {
    "id": "V0251",
    "w": "壊す",
    "r": "こわす",
    "m": {
      "en": "to break",
      "zh-TW": "破壞",
      "zh-CN": "破坏",
      "ko": "부수다",
      "vi": "phá",
      "id": "merusak"
    }
  },
  {
    "id": "V0252",
    "w": "壊れる",
    "r": "こわれる",
    "m": {
      "en": "to be broken",
      "zh-TW": "壞掉",
      "zh-CN": "坏掉",
      "ko": "고장나다",
      "vi": "hỏng",
      "id": "rusak"
    }
  },
  {
    "id": "V0253",
    "w": "混む",
    "r": "こむ",
    "m": {
      "en": "to be crowded",
      "zh-TW": "擁擠",
      "zh-CN": "拥挤",
      "ko": "붐비다",
      "vi": "đông",
      "id": "ramai"
    }
  },
  {
    "id": "V0254",
    "w": "込める",
    "r": "こめる",
    "m": {
      "en": "to include",
      "zh-TW": "包含",
      "zh-CN": "包含",
      "ko": "담다",
      "vi": "chứa",
      "id": "memasukkan"
    }
  },
  {
    "id": "V0255",
    "w": "探す",
    "r": "さがす",
    "m": {
      "en": "to search",
      "zh-TW": "尋找",
      "zh-CN": "寻找",
      "ko": "찾다",
      "vi": "tìm",
      "id": "mencari"
    }
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
      "id": "turun"
    }
  },
  {
    "id": "V0257",
    "w": "叫ぶ",
    "r": "さけぶ",
    "m": {
      "en": "to shout",
      "zh-TW": "叫喊",
      "zh-CN": "叫喊",
      "ko": "외치다",
      "vi": "hét",
      "id": "berteriak"
    }
  },
  {
    "id": "V0258",
    "w": "避ける",
    "r": "さける",
    "m": {
      "en": "to avoid",
      "zh-TW": "避開",
      "zh-CN": "避开",
      "ko": "피하다",
      "vi": "tránh",
      "id": "menghindari"
    }
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
      "id": "menurunkan"
    }
  },
  {
    "id": "V0260",
    "w": "支える",
    "r": "ささえる",
    "m": {
      "en": "to support",
      "zh-TW": "支撐",
      "zh-CN": "支撑",
      "ko": "지탱하다",
      "vi": "hỗ trợ",
      "id": "mendukung"
    }
  },
  {
    "id": "V0261",
    "w": "刺す",
    "r": "さす",
    "m": {
      "en": "to stab",
      "zh-TW": "刺",
      "zh-CN": "刺",
      "ko": "찌르다",
      "vi": "đâm",
      "id": "menusuk"
    }
  },
  {
    "id": "V0262",
    "w": "定める",
    "r": "さだめる",
    "m": {
      "en": "to establish",
      "zh-TW": "制定",
      "zh-CN": "制定",
      "ko": "정하다",
      "vi": "quy định",
      "id": "menetapkan"
    }
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
      "id": "bangun"
    }
  },
  {
    "id": "V0264",
    "w": "騒ぐ",
    "r": "さわぐ",
    "m": {
      "en": "to make noise",
      "zh-TW": "吵鬧",
      "zh-CN": "吵闹",
      "ko": "떠들다",
      "vi": "ồn ào",
      "id": "ribut"
    }
  },
  {
    "id": "V0265",
    "w": "触れる",
    "r": "さわれる",
    "m": {
      "en": "to touch",
      "zh-TW": "觸碰",
      "zh-CN": "触碰",
      "ko": "닿다",
      "vi": "chạm",
      "id": "menyentuh"
    }
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
      "id": "menyelesaikan"
    }
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
      "id": "memisahkan"
    }
  },
  {
    "id": "V0268",
    "w": "沈む",
    "r": "しずむ",
    "m": {
      "en": "to sink",
      "zh-TW": "沉沒",
      "zh-CN": "沉没",
      "ko": "가라앉다",
      "vi": "chìm",
      "id": "tenggelam"
    }
  },
  {
    "id": "V0269",
    "w": "従う",
    "r": "したがう",
    "m": {
      "en": "to follow",
      "zh-TW": "遵從",
      "zh-CN": "遵从",
      "ko": "따르다",
      "vi": "tuân theo",
      "id": "mengikuti"
    }
  },
  {
    "id": "V0270",
    "w": "縛る",
    "r": "しばる",
    "m": {
      "en": "to tie",
      "zh-TW": "綁",
      "zh-CN": "绑",
      "ko": "묶다",
      "vi": "buộc",
      "id": "mengikat"
    }
  },
  {
    "id": "V0271",
    "w": "絞る",
    "r": "しぼる",
    "m": {
      "en": "to squeeze",
      "zh-TW": "擠",
      "zh-CN": "挤",
      "ko": "짜다",
      "vi": "vắt",
      "id": "memeras"
    }
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
      "id": "tertutup"
    }
  },
  {
    "id": "V0273",
    "w": "示す",
    "r": "しめす",
    "m": {
      "en": "to show",
      "zh-TW": "顯示",
      "zh-CN": "显示",
      "ko": "보이다",
      "vi": "chỉ ra",
      "id": "menunjukkan"
    }
  },
  {
    "id": "V0274",
    "w": "占める",
    "r": "しめる",
    "m": {
      "en": "to occupy",
      "zh-TW": "佔據",
      "zh-CN": "占据",
      "ko": "차지하다",
      "vi": "chiếm",
      "id": "menempati"
    }
  },
  {
    "id": "V0275",
    "w": "湿る",
    "r": "しめる",
    "m": {
      "en": "to get damp",
      "zh-TW": "潮濕",
      "zh-CN": "潮湿",
      "ko": "축축해지다",
      "vi": "ẩm",
      "id": "lembab"
    }
  },
  {
    "id": "V0276",
    "w": "調べる",
    "r": "しらべる",
    "m": {
      "en": "to investigate",
      "zh-TW": "調查",
      "zh-CN": "调查",
      "ko": "조사하다",
      "vi": "điều tra",
      "id": "menyelidiki"
    }
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
      "id": "memberitahu"
    }
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
      "id": "percaya"
    }
  },
  {
    "id": "V0279",
    "w": "過ぎる",
    "r": "すぎる",
    "m": {
      "en": "to pass",
      "zh-TW": "經過",
      "zh-CN": "经过",
      "ko": "지나다",
      "vi": "qua",
      "id": "lewat"
    }
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
      "id": "unggul"
    }
  },
  {
    "id": "V0281",
    "w": "勧める",
    "r": "すすめる",
    "m": {
      "en": "to recommend",
      "zh-TW": "推薦",
      "zh-CN": "推荐",
      "ko": "권하다",
      "vi": "khuyên",
      "id": "merekomendasikan"
    }
  },
  {
    "id": "V0282",
    "w": "捨てる",
    "r": "すてる",
    "m": {
      "en": "to throw away",
      "zh-TW": "丟棄",
      "zh-CN": "丢弃",
      "ko": "버리다",
      "vi": "vứt",
      "id": "membuang"
    }
  },
  {
    "id": "V0283",
    "w": "滑る",
    "r": "すべる",
    "m": {
      "en": "to slip",
      "zh-TW": "滑",
      "zh-CN": "滑",
      "ko": "미끄러지다",
      "vi": "trượt",
      "id": "tergelincir"
    }
  },
  {
    "id": "V0284",
    "w": "済む",
    "r": "すむ",
    "m": {
      "en": "to finish",
      "zh-TW": "完成",
      "zh-CN": "完成",
      "ko": "끝나다",
      "vi": "xong",
      "id": "selesai"
    }
  },
  {
    "id": "V0285",
    "w": "澄む",
    "r": "すむ",
    "m": {
      "en": "to clear",
      "zh-TW": "清澈",
      "zh-CN": "清澈",
      "ko": "맑아지다",
      "vi": "trong",
      "id": "jernih"
    }
  },
  {
    "id": "V0286",
    "w": "刷る",
    "r": "する",
    "m": {
      "en": "to print",
      "zh-TW": "印刷",
      "zh-CN": "印刷",
      "ko": "인쇄하다",
      "vi": "in",
      "id": "mencetak"
    }
  },
  {
    "id": "V0287",
    "w": "座る",
    "r": "すわる",
    "m": {
      "en": "to sit",
      "zh-TW": "坐",
      "zh-CN": "坐",
      "ko": "앉다",
      "vi": "ngồi",
      "id": "duduk"
    }
  },
  {
    "id": "V0288",
    "w": "責める",
    "r": "せめる",
    "m": {
      "en": "to blame",
      "zh-TW": "責備",
      "zh-CN": "责备",
      "ko": "책망하다",
      "vi": "trách",
      "id": "menyalahkan"
    }
  },
  {
    "id": "V0289",
    "w": "攻める",
    "r": "せめる",
    "m": {
      "en": "to attack",
      "zh-TW": "進攻",
      "zh-CN": "进攻",
      "ko": "공격하다",
      "vi": "tấn công",
      "id": "menyerang"
    }
  },
  {
    "id": "V0290",
    "w": "添える",
    "r": "そえる",
    "m": {
      "en": "to add",
      "zh-TW": "附加",
      "zh-CN": "附加",
      "ko": "곁들이다",
      "vi": "thêm vào",
      "id": "menambahkan"
    }
  },
  {
    "id": "V0291",
    "w": "備える",
    "r": "そなえる",
    "m": {
      "en": "to prepare",
      "zh-TW": "準備",
      "zh-CN": "准备",
      "ko": "갖추다",
      "vi": "chuẩn bị",
      "id": "mempersiapkan"
    }
  },
  {
    "id": "V0292",
    "w": "染める",
    "r": "そめる",
    "m": {
      "en": "to dye",
      "zh-TW": "染色",
      "zh-CN": "染色",
      "ko": "물들이다",
      "vi": "nhuộm",
      "id": "mewarnai"
    }
  },
  {
    "id": "V0293",
    "w": "揃える",
    "r": "そろえる",
    "m": {
      "en": "to arrange",
      "zh-TW": "整理",
      "zh-CN": "整理",
      "ko": "갖추다",
      "vi": "sắp xếp",
      "id": "menyusun"
    }
  },
  {
    "id": "V0294",
    "w": "耐える",
    "r": "たえる",
    "m": {
      "en": "to endure",
      "zh-TW": "忍耐",
      "zh-CN": "忍耐",
      "ko": "견디다",
      "vi": "chịu đựng",
      "id": "bertahan"
    }
  },
  {
    "id": "V0295",
    "w": "倒す",
    "r": "たおす",
    "m": {
      "en": "to knock down",
      "zh-TW": "打倒",
      "zh-CN": "打倒",
      "ko": "쓰러뜨리다",
      "vi": "đánh đổ",
      "id": "menjatuhkan"
    }
  },
  {
    "id": "V0296",
    "w": "倒れる",
    "r": "たおれる",
    "m": {
      "en": "to fall",
      "zh-TW": "倒下",
      "zh-CN": "倒下",
      "ko": "쓰러지다",
      "vi": "ngã",
      "id": "jatuh"
    }
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
      "id": "meningkatkan"
    }
  },
  {
    "id": "V0298",
    "w": "炊く",
    "r": "たく",
    "m": {
      "en": "to cook rice",
      "zh-TW": "煮飯",
      "zh-CN": "煮饭",
      "ko": "밥짓다",
      "vi": "nấu cơm",
      "id": "menanak"
    }
  },
  {
    "id": "V0299",
    "w": "確かめる",
    "r": "たしかめる",
    "m": {
      "en": "to confirm",
      "zh-TW": "確認",
      "zh-CN": "确认",
      "ko": "확인하다",
      "vi": "xác nhận",
      "id": "memastikan"
    }
  },
  {
    "id": "V0300",
    "w": "助かる",
    "r": "たすかる",
    "m": {
      "en": "to be saved",
      "zh-TW": "得救",
      "zh-CN": "得救",
      "ko": "살아나다",
      "vi": "được cứu",
      "id": "tertolong"
    }
  },
  {
    "id": "V0301",
    "w": "畳む",
    "r": "たたむ",
    "m": {
      "en": "to fold",
      "zh-TW": "折疊",
      "zh-CN": "折叠",
      "ko": "접다",
      "vi": "gấp",
      "id": "melipat"
    }
  },
  {
    "id": "V0302",
    "w": "戦う",
    "r": "たたかう",
    "m": {
      "en": "to fight",
      "zh-TW": "戰鬥",
      "zh-CN": "战斗",
      "ko": "싸우다",
      "vi": "chiến đấu",
      "id": "berperang"
    }
  },
  {
    "id": "V0303",
    "w": "叩く",
    "r": "たたく",
    "m": {
      "en": "to knock",
      "zh-TW": "敲",
      "zh-CN": "敲",
      "ko": "두드리다",
      "vi": "gõ",
      "id": "mengetuk"
    }
  },
  {
    "id": "V0304",
    "w": "立てる",
    "r": "たてる",
    "m": {
      "en": "to set up",
      "zh-TW": "豎立",
      "zh-CN": "竖立",
      "ko": "세우다",
      "vi": "dựng",
      "id": "mendirikan"
    }
  },
  {
    "id": "V0305",
    "w": "建てる",
    "r": "たてる",
    "m": {
      "en": "to build",
      "zh-TW": "建造",
      "zh-CN": "建造",
      "ko": "짓다",
      "vi": "xây",
      "id": "membangun"
    }
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
      "id": "menikmati"
    }
  },
  {
    "id": "V0307",
    "w": "束ねる",
    "r": "たばねる",
    "m": {
      "en": "to bundle",
      "zh-TW": "捆綁",
      "zh-CN": "捆绑",
      "ko": "묶다",
      "vi": "bó",
      "id": "mengikat"
    }
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
      "id": "makan"
    }
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
      "id": "mencoba"
    }
  },
  {
    "id": "V0310",
    "w": "溜める",
    "r": "ためる",
    "m": {
      "en": "to save",
      "zh-TW": "儲存",
      "zh-CN": "储存",
      "ko": "모으다",
      "vi": "tích",
      "id": "mengumpulkan"
    }
  },
  {
    "id": "V0311",
    "w": "保つ",
    "r": "たもつ",
    "m": {
      "en": "to maintain",
      "zh-TW": "保持",
      "zh-CN": "保持",
      "ko": "유지하다",
      "vi": "giữ",
      "id": "mempertahankan"
    }
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
      "id": "cukup"
    }
  },
  {
    "id": "V0313",
    "w": "垂れる",
    "r": "たれる",
    "m": {
      "en": "to hang",
      "zh-TW": "垂下",
      "zh-CN": "垂下",
      "ko": "늘어지다",
      "vi": "rủ",
      "id": "menggantung"
    }
  },
  {
    "id": "V0314",
    "w": "違う",
    "r": "ちがう",
    "m": {
      "en": "to differ",
      "zh-TW": "不同",
      "zh-CN": "不同",
      "ko": "다르다",
      "vi": "khác",
      "id": "berbeda"
    }
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
      "id": "mendekati"
    }
  },
  {
    "id": "V0316",
    "w": "誓う",
    "r": "ちかう",
    "m": {
      "en": "to swear",
      "zh-TW": "發誓",
      "zh-CN": "发誓",
      "ko": "맹세하다",
      "vi": "thề",
      "id": "bersumpah"
    }
  },
  {
    "id": "V0317",
    "w": "縮む",
    "r": "ちぢむ",
    "m": {
      "en": "to shrink",
      "zh-TW": "縮小",
      "zh-CN": "缩小",
      "ko": "줄어들다",
      "vi": "co",
      "id": "menyusut"
    }
  },
  {
    "id": "V0318",
    "w": "散らす",
    "r": "ちらす",
    "m": {
      "en": "to scatter",
      "zh-TW": "撒",
      "zh-CN": "撒",
      "ko": "흩뿌리다",
      "vi": "rải",
      "id": "menyebarkan"
    }
  },
  {
    "id": "V0319",
    "w": "散る",
    "r": "ちる",
    "m": {
      "en": "to scatter",
      "zh-TW": "散落",
      "zh-CN": "散落",
      "ko": "흩어지다",
      "vi": "rơi rụng",
      "id": "berguguran"
    }
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
      "id": "menggunakan"
    }
  },
  {
    "id": "V0321",
    "w": "捕まえる",
    "r": "つかまえる",
    "m": {
      "en": "to catch",
      "zh-TW": "抓住",
      "zh-CN": "抓住",
      "ko": "잡다",
      "vi": "bắt",
      "id": "menangkap"
    }
  },
  {
    "id": "V0322",
    "w": "捕まる",
    "r": "つかまる",
    "m": {
      "en": "to be caught",
      "zh-TW": "被抓",
      "zh-CN": "被抓",
      "ko": "잡히다",
      "vi": "bị bắt",
      "id": "tertangkap"
    }
  },
  {
    "id": "V0323",
    "w": "付く",
    "r": "つく",
    "m": {
      "en": "to attach",
      "zh-TW": "附著",
      "zh-CN": "附着",
      "ko": "붙다",
      "vi": "dính",
      "id": "menempel"
    }
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
      "id": "tiba"
    }
  },
  {
    "id": "V0325",
    "w": "尽くす",
    "r": "つくす",
    "m": {
      "en": "to exhaust",
      "zh-TW": "竭盡",
      "zh-CN": "竭尽",
      "ko": "다하다",
      "vi": "tận tâm",
      "id": "menghabiskan"
    }
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
      "id": "membuat"
    }
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
      "id": "memberitahu"
    }
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
      "id": "membungkus"
    }
  },
  {
    "id": "V0329",
    "w": "勤める",
    "r": "つとめる",
    "m": {
      "en": "to work",
      "zh-TW": "工作",
      "zh-CN": "工作",
      "ko": "근무하다",
      "vi": "làm việc",
      "id": "bekerja"
    }
  },
  {
    "id": "V0330",
    "w": "努める",
    "r": "つとめる",
    "m": {
      "en": "to strive",
      "zh-TW": "努力",
      "zh-CN": "努力",
      "ko": "노력하다",
      "vi": "cố gắng",
      "id": "berusaha"
    }
  },
  {
    "id": "V0331",
    "w": "繋ぐ",
    "r": "つなぐ",
    "m": {
      "en": "to connect",
      "zh-TW": "連接",
      "zh-CN": "连接",
      "ko": "연결하다",
      "vi": "kết nối",
      "id": "menghubungkan"
    }
  },
  {
    "id": "V0332",
    "w": "積む",
    "r": "つむ",
    "m": {
      "en": "to pile up",
      "zh-TW": "堆積",
      "zh-CN": "堆积",
      "ko": "쌓다",
      "vi": "chất",
      "id": "menumpuk"
    }
  },
  {
    "id": "V0333",
    "w": "釣る",
    "r": "つる",
    "m": {
      "en": "to fish",
      "zh-TW": "釣魚",
      "zh-CN": "钓鱼",
      "ko": "낚다",
      "vi": "câu",
      "id": "memancing"
    }
  },
  {
    "id": "V0334",
    "w": "連れる",
    "r": "つれる",
    "m": {
      "en": "to take along",
      "zh-TW": "帶",
      "zh-CN": "带",
      "ko": "데려가다",
      "vi": "dẫn",
      "id": "membawa"
    }
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
      "id": "bertemu"
    }
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
      "id": "pergi keluar"
    }
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
      "id": "bisa"
    }
  },
  {
    "id": "V0338",
    "w": "照らす",
    "r": "てらす",
    "m": {
      "en": "to illuminate",
      "zh-TW": "照亮",
      "zh-CN": "照亮",
      "ko": "비추다",
      "vi": "chiếu sáng",
      "id": "menerangi"
    }
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
      "id": "melewatkan"
    }
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
      "id": "lewat"
    }
  },
  {
    "id": "V0341",
    "w": "溶かす",
    "r": "とかす",
    "m": {
      "en": "to melt",
      "zh-TW": "融化",
      "zh-CN": "融化",
      "ko": "녹이다",
      "vi": "tan",
      "id": "melelehkan"
    }
  },
  {
    "id": "V0342",
    "w": "溶ける",
    "r": "とける",
    "m": {
      "en": "to melt",
      "zh-TW": "融化",
      "zh-CN": "融化",
      "ko": "녹다",
      "vi": "tan chảy",
      "id": "meleleh"
    }
  },
  {
    "id": "V0343",
    "w": "整える",
    "r": "ととのえる",
    "m": {
      "en": "to arrange",
      "zh-TW": "整理",
      "zh-CN": "整理",
      "ko": "정돈하다",
      "vi": "sắp xếp",
      "id": "merapikan"
    }
  },
  {
    "id": "V0344",
    "w": "飛ぶ",
    "r": "とぶ",
    "m": {
      "en": "to fly",
      "zh-TW": "飛",
      "zh-CN": "飞",
      "ko": "날다",
      "vi": "bay",
      "id": "terbang"
    }
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
      "id": "berhenti"
    }
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
      "id": "menghentikan"
    }
  },
  {
    "id": "V0347",
    "w": "取る",
    "r": "とる",
    "m": {
      "en": "to take",
      "zh-TW": "拿",
      "zh-CN": "拿",
      "ko": "잡다",
      "vi": "lấy",
      "id": "mengambil"
    }
  },
  {
    "id": "V0348",
    "w": "撮る",
    "r": "とる",
    "m": {
      "en": "to photograph",
      "zh-TW": "拍照",
      "zh-CN": "拍照",
      "ko": "찍다",
      "vi": "chụp",
      "id": "memotret"
    }
  },
  {
    "id": "V0349",
    "w": "直す",
    "r": "なおす",
    "m": {
      "en": "to fix",
      "zh-TW": "修理",
      "zh-CN": "修理",
      "ko": "고치다",
      "vi": "sửa",
      "id": "memperbaiki"
    }
  },
  {
    "id": "V0350",
    "w": "直る",
    "r": "なおる",
    "m": {
      "en": "to be fixed",
      "zh-TW": "修好",
      "zh-CN": "修好",
      "ko": "낫다",
      "vi": "được sửa",
      "id": "diperbaiki"
    }
  },
  {
    "id": "V0351",
    "w": "流す",
    "r": "ながす",
    "m": {
      "en": "to drain",
      "zh-TW": "流",
      "zh-CN": "流",
      "ko": "흘리다",
      "vi": "làm chảy",
      "id": "mengalirkan"
    }
  },
  {
    "id": "V0352",
    "w": "流れる",
    "r": "ながれる",
    "m": {
      "en": "to flow",
      "zh-TW": "流動",
      "zh-CN": "流动",
      "ko": "흐르다",
      "vi": "chảy",
      "id": "mengalir"
    }
  },
  {
    "id": "V0353",
    "w": "泣く",
    "r": "なく",
    "m": {
      "en": "to cry",
      "zh-TW": "哭",
      "zh-CN": "哭",
      "ko": "울다",
      "vi": "khóc",
      "id": "menangis"
    }
  },
  {
    "id": "V0354",
    "w": "亡くなる",
    "r": "なくなる",
    "m": {
      "en": "to pass away",
      "zh-TW": "去世",
      "zh-CN": "去世",
      "ko": "돌아가시다",
      "vi": "qua đời",
      "id": "meninggal"
    }
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
      "id": "habis"
    }
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
      "id": "kehilangan"
    }
  },
  {
    "id": "V0357",
    "w": "投げる",
    "r": "なげる",
    "m": {
      "en": "to throw",
      "zh-TW": "投",
      "zh-CN": "投",
      "ko": "던지다",
      "vi": "ném",
      "id": "melempar"
    }
  },
  {
    "id": "V0358",
    "w": "嘆く",
    "r": "なげく",
    "m": {
      "en": "to lament",
      "zh-TW": "嘆息",
      "zh-CN": "叹息",
      "ko": "한탄하다",
      "vi": "than thở",
      "id": "meratap"
    }
  },
  {
    "id": "V0359",
    "w": "殴る",
    "r": "なぐる",
    "m": {
      "en": "to punch",
      "zh-TW": "打",
      "zh-CN": "打",
      "ko": "때리다",
      "vi": "đấm",
      "id": "memukul"
    }
  },
  {
    "id": "V0360",
    "w": "慰める",
    "r": "なぐさめる",
    "m": {
      "en": "to console",
      "zh-TW": "安慰",
      "zh-CN": "安慰",
      "ko": "위로하다",
      "vi": "an ủi",
      "id": "menghibur"
    }
  },
  {
    "id": "V0361",
    "w": "悩む",
    "r": "なやむ",
    "m": {
      "en": "to worry",
      "zh-TW": "煩惱",
      "zh-CN": "烦恼",
      "ko": "고민하다",
      "vi": "lo lắng",
      "id": "bingung"
    }
  },
  {
    "id": "V0362",
    "w": "並ぶ",
    "r": "ならぶ",
    "m": {
      "en": "to line up",
      "zh-TW": "排隊",
      "zh-CN": "排队",
      "ko": "줄서다",
      "vi": "xếp hàng",
      "id": "berbaris"
    }
  },
  {
    "id": "V0363",
    "w": "並べる",
    "r": "ならべる",
    "m": {
      "en": "to arrange",
      "zh-TW": "排列",
      "zh-CN": "排列",
      "ko": "늘어놓다",
      "vi": "sắp xếp",
      "id": "menyusun"
    }
  },
  {
    "id": "V0364",
    "w": "成る",
    "r": "なる",
    "m": {
      "en": "to become",
      "zh-TW": "成為",
      "zh-CN": "成为",
      "ko": "되다",
      "vi": "trở thành",
      "id": "menjadi"
    }
  },
  {
    "id": "V0365",
    "w": "鳴る",
    "r": "なる",
    "m": {
      "en": "to ring",
      "zh-TW": "響",
      "zh-CN": "响",
      "ko": "울리다",
      "vi": "kêu",
      "id": "berbunyi"
    }
  },
  {
    "id": "V0366",
    "w": "匂う",
    "r": "におう",
    "m": {
      "en": "to smell",
      "zh-TW": "發出氣味",
      "zh-CN": "发出气味",
      "ko": "냄새나다",
      "vi": "có mùi",
      "id": "berbau"
    }
  },
  {
    "id": "V0367",
    "w": "逃げる",
    "r": "にげる",
    "m": {
      "en": "to escape",
      "zh-TW": "逃跑",
      "zh-CN": "逃跑",
      "ko": "도망치다",
      "vi": "chạy trốn",
      "id": "melarikan diri"
    }
  },
  {
    "id": "V0368",
    "w": "握る",
    "r": "にぎる",
    "m": {
      "en": "to grip",
      "zh-TW": "握",
      "zh-CN": "握",
      "ko": "쥐다",
      "vi": "nắm",
      "id": "menggenggam"
    }
  },
  {
    "id": "V0369",
    "w": "憎む",
    "r": "にくむ",
    "m": {
      "en": "to hate",
      "zh-TW": "憎恨",
      "zh-CN": "憎恨",
      "ko": "미워하다",
      "vi": "ghét",
      "id": "membenci"
    }
  },
  {
    "id": "V0370",
    "w": "煮る",
    "r": "にる",
    "m": {
      "en": "to boil",
      "zh-TW": "煮",
      "zh-CN": "煮",
      "ko": "삶다",
      "vi": "nấu",
      "id": "merebus"
    }
  },
  {
    "id": "V0371",
    "w": "似る",
    "r": "にる",
    "m": {
      "en": "to resemble",
      "zh-TW": "像",
      "zh-CN": "像",
      "ko": "닮다",
      "vi": "giống",
      "id": "mirip"
    }
  },
  {
    "id": "V0372",
    "w": "濡れる",
    "r": "ぬれる",
    "m": {
      "en": "to get wet",
      "zh-TW": "濕",
      "zh-CN": "湿",
      "ko": "젖다",
      "vi": "ướt",
      "id": "basah"
    }
  },
  {
    "id": "V0373",
    "w": "塗る",
    "r": "ぬる",
    "m": {
      "en": "to paint",
      "zh-TW": "塗",
      "zh-CN": "涂",
      "ko": "바르다",
      "vi": "sơn",
      "id": "mengecat"
    }
  },
  {
    "id": "V0374",
    "w": "抜く",
    "r": "ぬく",
    "m": {
      "en": "to pull out",
      "zh-TW": "拔",
      "zh-CN": "拔",
      "ko": "빼다",
      "vi": "rút",
      "id": "mencabut"
    }
  },
  {
    "id": "V0375",
    "w": "抜ける",
    "r": "ぬける",
    "m": {
      "en": "to come out",
      "zh-TW": "脫落",
      "zh-CN": "脱落",
      "ko": "빠지다",
      "vi": "rơi ra",
      "id": "terlepas"
    }
  },
  {
    "id": "V0376",
    "w": "盗む",
    "r": "ぬすむ",
    "m": {
      "en": "to steal",
      "zh-TW": "偷",
      "zh-CN": "偷",
      "ko": "훔치다",
      "vi": "trộm",
      "id": "mencuri"
    }
  },
  {
    "id": "V0377",
    "w": "脱ぐ",
    "r": "ぬぐ",
    "m": {
      "en": "to take off",
      "zh-TW": "脫",
      "zh-CN": "脱",
      "ko": "벗다",
      "vi": "cởi",
      "id": "melepas"
    }
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
      "id": "berharap"
    }
  },
  {
    "id": "V0379",
    "w": "眠る",
    "r": "ねむる",
    "m": {
      "en": "to sleep",
      "zh-TW": "睡覺",
      "zh-CN": "睡觉",
      "ko": "잠들다",
      "vi": "ngủ",
      "id": "tidur"
    }
  },
  {
    "id": "V0380",
    "w": "狙う",
    "r": "ねらう",
    "m": {
      "en": "to aim",
      "zh-TW": "瞄準",
      "zh-CN": "瞄准",
      "ko": "노리다",
      "vi": "nhắm",
      "id": "mengincar"
    }
  },
  {
    "id": "V0381",
    "w": "望む",
    "r": "のぞむ",
    "m": {
      "en": "to hope",
      "zh-TW": "希望",
      "zh-CN": "希望",
      "ko": "바라다",
      "vi": "mong muốn",
      "id": "mengharapkan"
    }
  },
  {
    "id": "V0382",
    "w": "覗く",
    "r": "のぞく",
    "m": {
      "en": "to peek",
      "zh-TW": "窺視",
      "zh-CN": "窥视",
      "ko": "들여다보다",
      "vi": "nhìn trộm",
      "id": "mengintip"
    }
  },
  {
    "id": "V0383",
    "w": "延ばす",
    "r": "のばす",
    "m": {
      "en": "to extend",
      "zh-TW": "延長",
      "zh-CN": "延长",
      "ko": "늘리다",
      "vi": "kéo dài",
      "id": "memperpanjang"
    }
  },
  {
    "id": "V0384",
    "w": "延びる",
    "r": "のびる",
    "m": {
      "en": "to extend",
      "zh-TW": "延長",
      "zh-CN": "延长",
      "ko": "늘어나다",
      "vi": "kéo dài",
      "id": "diperpanjang"
    }
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
      "id": "meregangkan"
    }
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
      "id": "tumbuh"
    }
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
      "id": "minum"
    }
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
      "id": "naik"
    }
  },
  {
    "id": "V0389",
    "w": "載る",
    "r": "のる",
    "m": {
      "en": "to be published",
      "zh-TW": "刊登",
      "zh-CN": "刊登",
      "ko": "실리다",
      "vi": "được đăng",
      "id": "dimuat"
    }
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
      "id": "masuk"
    }
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
      "id": "tumbuh"
    }
  },
  {
    "id": "V0392",
    "w": "測る",
    "r": "はかる",
    "m": {
      "en": "to measure",
      "zh-TW": "測量",
      "zh-CN": "测量",
      "ko": "재다",
      "vi": "đo",
      "id": "mengukur"
    }
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
      "id": "menghitung"
    }
  },
  {
    "id": "V0394",
    "w": "吐く",
    "r": "はく",
    "m": {
      "en": "to vomit",
      "zh-TW": "吐",
      "zh-CN": "吐",
      "ko": "토하다",
      "vi": "nôn",
      "id": "muntah"
    }
  },
  {
    "id": "V0395",
    "w": "履く",
    "r": "はく",
    "m": {
      "en": "to wear",
      "zh-TW": "穿",
      "zh-CN": "穿",
      "ko": "신다",
      "vi": "mặc",
      "id": "memakai"
    }
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
      "id": "mengangkut"
    }
  },
  {
    "id": "V0397",
    "w": "挟む",
    "r": "はさむ",
    "m": {
      "en": "to insert",
      "zh-TW": "夾",
      "zh-CN": "夹",
      "ko": "끼우다",
      "vi": "kẹp",
      "id": "menjepit"
    }
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
      "id": "dimulai"
    }
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
      "id": "memulai"
    }
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
      "id": "berlari"
    }
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
      "id": "melepas"
    }
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
      "id": "bekerja"
    }
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
      "id": "berbicara"
    }
  },
  {
    "id": "V0404",
    "w": "離す",
    "r": "はなす",
    "m": {
      "en": "to separate",
      "zh-TW": "分開",
      "zh-CN": "分开",
      "ko": "떼다",
      "vi": "tách",
      "id": "memisahkan"
    }
  },
  {
    "id": "V0405",
    "w": "放す",
    "r": "はなす",
    "m": {
      "en": "to release",
      "zh-TW": "放開",
      "zh-CN": "放开",
      "ko": "놓다",
      "vi": "thả",
      "id": "melepaskan"
    }
  },
  {
    "id": "V0406",
    "w": "離れる",
    "r": "はなれる",
    "m": {
      "en": "to leave",
      "zh-TW": "離開",
      "zh-CN": "离开",
      "ko": "떨어지다",
      "vi": "rời",
      "id": "meninggalkan"
    }
  },
  {
    "id": "V0407",
    "w": "跳ねる",
    "r": "はねる",
    "m": {
      "en": "to jump",
      "zh-TW": "跳",
      "zh-CN": "跳",
      "ko": "뛰다",
      "vi": "nhảy",
      "id": "melompat"
    }
  },
  {
    "id": "V0408",
    "w": "払う",
    "r": "はらう",
    "m": {
      "en": "to pay",
      "zh-TW": "付款",
      "zh-CN": "付款",
      "ko": "지불하다",
      "vi": "trả",
      "id": "membayar"
    }
  },
  {
    "id": "V0409",
    "w": "張る",
    "r": "はる",
    "m": {
      "en": "to stretch",
      "zh-TW": "張開",
      "zh-CN": "张开",
      "ko": "펴다",
      "vi": "căng",
      "id": "merentangkan"
    }
  },
  {
    "id": "V0410",
    "w": "貼る",
    "r": "はる",
    "m": {
      "en": "to paste",
      "zh-TW": "貼",
      "zh-CN": "贴",
      "ko": "붙이다",
      "vi": "dán",
      "id": "menempel"
    }
  },
  {
    "id": "V0411",
    "w": "晴れる",
    "r": "はれる",
    "m": {
      "en": "to clear up",
      "zh-TW": "放晴",
      "zh-CN": "放晴",
      "ko": "맑아지다",
      "vi": "nắng",
      "id": "cerah"
    }
  },
  {
    "id": "V0412",
    "w": "腫れる",
    "r": "はれる",
    "m": {
      "en": "to swell",
      "zh-TW": "腫脹",
      "zh-CN": "肿胀",
      "ko": "붓다",
      "vi": "sưng",
      "id": "bengkak"
    }
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
      "id": "dingin"
    }
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
      "id": "bersinar"
    }
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
      "id": "menarik"
    }
  },
  {
    "id": "V0416",
    "w": "弾く",
    "r": "ひく",
    "m": {
      "en": "to play",
      "zh-TW": "彈奏",
      "zh-CN": "弹奏",
      "ko": "치다",
      "vi": "chơi",
      "id": "memainkan"
    }
  },
  {
    "id": "V0417",
    "w": "響く",
    "r": "ひびく",
    "m": {
      "en": "to echo",
      "zh-TW": "回響",
      "zh-CN": "回响",
      "ko": "울리다",
      "vi": "vang",
      "id": "bergema"
    }
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
      "id": "membuka"
    }
  },
  {
    "id": "V0419",
    "w": "拾う",
    "r": "ひろう",
    "m": {
      "en": "to pick up",
      "zh-TW": "撿",
      "zh-CN": "捡",
      "ko": "줍다",
      "vi": "nhặt",
      "id": "memungut"
    }
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
      "id": "menyebar"
    }
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
      "id": "memperluas"
    }
  },
  {
    "id": "V0422",
    "w": "深める",
    "r": "ふかめる",
    "m": {
      "en": "to deepen",
      "zh-TW": "加深",
      "zh-CN": "加深",
      "ko": "깊게하다",
      "vi": "đào sâu",
      "id": "memperdalam"
    }
  },
  {
    "id": "V0423",
    "w": "吹く",
    "r": "ふく",
    "m": {
      "en": "to blow",
      "zh-TW": "吹",
      "zh-CN": "吹",
      "ko": "불다",
      "vi": "thổi",
      "id": "meniup"
    }
  },
  {
    "id": "V0424",
    "w": "拭く",
    "r": "ふく",
    "m": {
      "en": "to wipe",
      "zh-TW": "擦",
      "zh-CN": "擦",
      "ko": "닦다",
      "vi": "lau",
      "id": "mengelap"
    }
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
      "id": "mengandung"
    }
  },
  {
    "id": "V0426",
    "w": "膨らむ",
    "r": "ふくらむ",
    "m": {
      "en": "to swell",
      "zh-TW": "膨脹",
      "zh-CN": "膨胀",
      "ko": "부풀다",
      "vi": "phồng",
      "id": "mengembang"
    }
  },
  {
    "id": "V0427",
    "w": "防ぐ",
    "r": "ふせぐ",
    "m": {
      "en": "to prevent",
      "zh-TW": "防止",
      "zh-CN": "防止",
      "ko": "막다",
      "vi": "ngăn chặn",
      "id": "mencegah"
    }
  },
  {
    "id": "V0428",
    "w": "踏む",
    "r": "ふむ",
    "m": {
      "en": "to step on",
      "zh-TW": "踩",
      "zh-CN": "踩",
      "ko": "밟다",
      "vi": "giẫm",
      "id": "menginjak"
    }
  },
  {
    "id": "V0429",
    "w": "振る",
    "r": "ふる",
    "m": {
      "en": "to wave",
      "zh-TW": "揮",
      "zh-CN": "挥",
      "ko": "흔들다",
      "vi": "vẫy",
      "id": "mengayunkan"
    }
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
      "id": "turun"
    }
  },
  {
    "id": "V0431",
    "w": "干す",
    "r": "ほす",
    "m": {
      "en": "to dry",
      "zh-TW": "晾乾",
      "zh-CN": "晾干",
      "ko": "말리다",
      "vi": "phơi",
      "id": "menjemur"
    }
  },
  {
    "id": "V0432",
    "w": "掘る",
    "r": "ほる",
    "m": {
      "en": "to dig",
      "zh-TW": "挖",
      "zh-CN": "挖",
      "ko": "파다",
      "vi": "đào",
      "id": "menggali"
    }
  },
  {
    "id": "V0433",
    "w": "負ける",
    "r": "まける",
    "m": {
      "en": "to lose",
      "zh-TW": "輸",
      "zh-CN": "输",
      "ko": "지다",
      "vi": "thua",
      "id": "kalah"
    }
  },
  {
    "id": "V0434",
    "w": "曲がる",
    "r": "まがる",
    "m": {
      "en": "to turn",
      "zh-TW": "轉彎",
      "zh-CN": "转弯",
      "ko": "꺾이다",
      "vi": "rẽ",
      "id": "berbelok"
    }
  },
  {
    "id": "V0435",
    "w": "曲げる",
    "r": "まげる",
    "m": {
      "en": "to bend",
      "zh-TW": "彎曲",
      "zh-CN": "弯曲",
      "ko": "구부리다",
      "vi": "uốn",
      "id": "membengkokkan"
    }
  },
  {
    "id": "V0436",
    "w": "混ぜる",
    "r": "まぜる",
    "m": {
      "en": "to mix",
      "zh-TW": "攪拌",
      "zh-CN": "搅拌",
      "ko": "섞다",
      "vi": "trộn",
      "id": "mencampur"
    }
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
      "id": "menunggu"
    }
  },
  {
    "id": "V0438",
    "w": "纏める",
    "r": "まとめる",
    "m": {
      "en": "to summarize",
      "zh-TW": "整理",
      "zh-CN": "整理",
      "ko": "정리하다",
      "vi": "tổng hợp",
      "id": "meringkas"
    }
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
      "id": "belajar"
    }
  },
  {
    "id": "V0440",
    "w": "回す",
    "r": "まわす",
    "m": {
      "en": "to turn",
      "zh-TW": "轉動",
      "zh-CN": "转动",
      "ko": "돌리다",
      "vi": "xoay",
      "id": "memutar"
    }
  },
  {
    "id": "V0441",
    "w": "回る",
    "r": "まわる",
    "m": {
      "en": "to go around",
      "zh-TW": "繞",
      "zh-CN": "绕",
      "ko": "돌다",
      "vi": "vòng",
      "id": "berkeliling"
    }
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
      "id": "terlihat"
    }
  },
  {
    "id": "V0443",
    "w": "磨く",
    "r": "みがく",
    "m": {
      "en": "to polish",
      "zh-TW": "磨",
      "zh-CN": "磨",
      "ko": "닦다",
      "vi": "đánh",
      "id": "menggosok"
    }
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
      "id": "memperlihatkan"
    }
  },
  {
    "id": "V0445",
    "w": "認める",
    "r": "みとめる",
    "m": {
      "en": "to recognize",
      "zh-TW": "認可",
      "zh-CN": "认可",
      "ko": "인정하다",
      "vi": "công nhận",
      "id": "mengakui"
    }
  },
  {
    "id": "V0446",
    "w": "向かう",
    "r": "むかう",
    "m": {
      "en": "to head for",
      "zh-TW": "前往",
      "zh-CN": "前往",
      "ko": "향하다",
      "vi": "hướng tới",
      "id": "menuju"
    }
  },
  {
    "id": "V0447",
    "w": "迎える",
    "r": "むかえる",
    "m": {
      "en": "to welcome",
      "zh-TW": "迎接",
      "zh-CN": "迎接",
      "ko": "맞이하다",
      "vi": "đón",
      "id": "menyambut"
    }
  },
  {
    "id": "V0448",
    "w": "向く",
    "r": "むく",
    "m": {
      "en": "to face",
      "zh-TW": "朝向",
      "zh-CN": "朝向",
      "ko": "향하다",
      "vi": "hướng",
      "id": "menghadap"
    }
  },
  {
    "id": "V0449",
    "w": "向ける",
    "r": "むける",
    "m": {
      "en": "to direct",
      "zh-TW": "對準",
      "zh-CN": "对准",
      "ko": "향하게하다",
      "vi": "hướng về",
      "id": "mengarahkan"
    }
  },
  {
    "id": "V0450",
    "w": "結ぶ",
    "r": "むすぶ",
    "m": {
      "en": "to tie",
      "zh-TW": "綁",
      "zh-CN": "绑",
      "ko": "묶다",
      "vi": "buộc",
      "id": "mengikat"
    }
  },
  {
    "id": "V0451",
    "w": "燃える",
    "r": "もえる",
    "m": {
      "en": "to burn",
      "zh-TW": "燃燒",
      "zh-CN": "燃烧",
      "ko": "타다",
      "vi": "cháy",
      "id": "terbakar"
    }
  },
  {
    "id": "V0452",
    "w": "燃やす",
    "r": "もやす",
    "m": {
      "en": "to burn",
      "zh-TW": "燒",
      "zh-CN": "烧",
      "ko": "태우다",
      "vi": "đốt",
      "id": "membakar"
    }
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
      "id": "memegang"
    }
  },
  {
    "id": "V0454",
    "w": "戻す",
    "r": "もどす",
    "m": {
      "en": "to return",
      "zh-TW": "歸還",
      "zh-CN": "归还",
      "ko": "되돌리다",
      "vi": "trả lại",
      "id": "mengembalikan"
    }
  },
  {
    "id": "V0455",
    "w": "戻る",
    "r": "もどる",
    "m": {
      "en": "to return",
      "zh-TW": "回來",
      "zh-CN": "回来",
      "ko": "돌아오다",
      "vi": "quay lại",
      "id": "kembali"
    }
  },
  {
    "id": "V0456",
    "w": "求める",
    "r": "もとめる",
    "m": {
      "en": "to seek",
      "zh-TW": "尋求",
      "zh-CN": "寻求",
      "ko": "구하다",
      "vi": "tìm kiếm",
      "id": "mencari"
    }
  },
  {
    "id": "V0457",
    "w": "貰う",
    "r": "もらう",
    "m": {
      "en": "to receive",
      "zh-TW": "收到",
      "zh-CN": "收到",
      "ko": "받다",
      "vi": "nhận",
      "id": "menerima"
    }
  },
  {
    "id": "V0458",
    "w": "漏れる",
    "r": "もれる",
    "m": {
      "en": "to leak",
      "zh-TW": "洩漏",
      "zh-CN": "泄漏",
      "ko": "새다",
      "vi": "rò rỉ",
      "id": "bocor"
    }
  },
  {
    "id": "V0459",
    "w": "焼く",
    "r": "やく",
    "m": {
      "en": "to bake",
      "zh-TW": "烤",
      "zh-CN": "烤",
      "ko": "굽다",
      "vi": "nướng",
      "id": "memanggang"
    }
  },
  {
    "id": "V0460",
    "w": "焼ける",
    "r": "やける",
    "m": {
      "en": "to be burnt",
      "zh-TW": "燒焦",
      "zh-CN": "烧焦",
      "ko": "타다",
      "vi": "cháy",
      "id": "terbakar"
    }
  },
  {
    "id": "V0461",
    "w": "破る",
    "r": "やぶる",
    "m": {
      "en": "to tear",
      "zh-TW": "撕破",
      "zh-CN": "撕破",
      "ko": "찢다",
      "vi": "xé",
      "id": "merobek"
    }
  },
  {
    "id": "V0462",
    "w": "破れる",
    "r": "やぶれる",
    "m": {
      "en": "to be torn",
      "zh-TW": "破",
      "zh-CN": "破",
      "ko": "찢어지다",
      "vi": "rách",
      "id": "robek"
    }
  },
  {
    "id": "V0463",
    "w": "辞める",
    "r": "やめる",
    "m": {
      "en": "to quit",
      "zh-TW": "辭職",
      "zh-CN": "辞职",
      "ko": "그만두다",
      "vi": "nghỉ",
      "id": "berhenti"
    }
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
      "id": "melakukan"
    }
  },
  {
    "id": "V0465",
    "w": "揺れる",
    "r": "ゆれる",
    "m": {
      "en": "to shake",
      "zh-TW": "搖晃",
      "zh-CN": "摇晃",
      "ko": "흔들리다",
      "vi": "rung",
      "id": "bergoyang"
    }
  },
  {
    "id": "V0466",
    "w": "汚す",
    "r": "よごす",
    "m": {
      "en": "to dirty",
      "zh-TW": "弄髒",
      "zh-CN": "弄脏",
      "ko": "더럽히다",
      "vi": "làm bẩn",
      "id": "mengotori"
    }
  },
  {
    "id": "V0467",
    "w": "汚れる",
    "r": "よごれる",
    "m": {
      "en": "to get dirty",
      "zh-TW": "變髒",
      "zh-CN": "变脏",
      "ko": "더러워지다",
      "vi": "bẩn",
      "id": "kotor"
    }
  },
  {
    "id": "V0468",
    "w": "寄せる",
    "r": "よせる",
    "m": {
      "en": "to draw near",
      "zh-TW": "靠近",
      "zh-CN": "靠近",
      "ko": "다가가다",
      "vi": "đến gần",
      "id": "mendekati"
    }
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
      "id": "memanggil"
    }
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
      "id": "membaca"
    }
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
      "id": "mengerti"
    }
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
      "id": "berpisah"
    }
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
      "id": "membagi"
    }
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
      "id": "menyerahkan"
    }
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
      "id": "menyeberang"
    }
  },
  {
    "id": "V0476",
    "w": "笑う",
    "r": "わらう",
    "m": {
      "en": "to laugh",
      "zh-TW": "笑",
      "zh-CN": "笑",
      "ko": "웃다",
      "vi": "cười",
      "id": "tertawa"
    }
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
      "id": "memecah"
    }
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
      "id": "pecah"
    }
  },
  {
    "id": "V0479",
    "w": "会議",
    "r": "かいぎ",
    "m": {
      "en": "meeting",
      "zh-TW": "會議",
      "zh-CN": "会议",
      "ko": "회의",
      "vi": "cuộc họp",
      "id": "rapat"
    }
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
      "id": "tempat"
    }
  },
  {
    "id": "V0481",
    "w": "階段",
    "r": "かいだん",
    "m": {
      "en": "stairs",
      "zh-TW": "樓梯",
      "zh-CN": "楼梯",
      "ko": "계단",
      "vi": "cầu thang",
      "id": "tangga"
    }
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
      "id": "percakapan"
    }
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
      "id": "sains"
    }
  },
  {
    "id": "V0484",
    "w": "鏡",
    "r": "かがみ",
    "m": {
      "en": "mirror",
      "zh-TW": "鏡子",
      "zh-CN": "镜子",
      "ko": "거울",
      "vi": "gương",
      "id": "cermin"
    }
  },
  {
    "id": "V0485",
    "w": "家具",
    "r": "かぐ",
    "m": {
      "en": "furniture",
      "zh-TW": "傢俱",
      "zh-CN": "家具",
      "ko": "가구",
      "vi": "đồ nội thất",
      "id": "furnitur"
    }
  },
  {
    "id": "V0486",
    "w": "学期",
    "r": "がっき",
    "m": {
      "en": "semester",
      "zh-TW": "學期",
      "zh-CN": "学期",
      "ko": "학기",
      "vi": "học kỳ",
      "id": "semester"
    }
  },
  {
    "id": "V0487",
    "w": "楽器",
    "r": "がっき",
    "m": {
      "en": "instrument",
      "zh-TW": "樂器",
      "zh-CN": "乐器",
      "ko": "악기",
      "vi": "nhạc cụ",
      "id": "alat musik"
    }
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
      "id": "sudut"
    }
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
      "id": "dinding"
    }
  },
  {
    "id": "V0490",
    "w": "髪",
    "r": "かみ",
    "m": {
      "en": "hair",
      "zh-TW": "頭髮",
      "zh-CN": "头发",
      "ko": "머리카락",
      "vi": "tóc",
      "id": "rambut"
    }
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
      "id": "kertas"
    }
  },
  {
    "id": "V0492",
    "w": "彼女",
    "r": "かのじょ",
    "m": {
      "en": "girlfriend",
      "zh-TW": "女朋友",
      "zh-CN": "女朋友",
      "ko": "여자친구",
      "vi": "bạn gái",
      "id": "pacar perempuan"
    }
  },
  {
    "id": "V0493",
    "w": "彼氏",
    "r": "かれし",
    "m": {
      "en": "boyfriend",
      "zh-TW": "男朋友",
      "zh-CN": "男朋友",
      "ko": "남자친구",
      "vi": "bạn trai",
      "id": "pacar laki-laki"
    }
  },
  {
    "id": "V0494",
    "w": "環境",
    "r": "かんきょう",
    "m": {
      "en": "environment",
      "zh-TW": "環境",
      "zh-CN": "环境",
      "ko": "환경",
      "vi": "môi trường",
      "id": "lingkungan"
    }
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
      "id": "hubungan"
    }
  },
  {
    "id": "V0496",
    "w": "観光",
    "r": "かんこう",
    "m": {
      "en": "sightseeing",
      "zh-TW": "觀光",
      "zh-CN": "观光",
      "ko": "관광",
      "vi": "du lịch",
      "id": "wisata"
    }
  },
  {
    "id": "V0497",
    "w": "感情",
    "r": "かんじょう",
    "m": {
      "en": "emotion",
      "zh-TW": "情感",
      "zh-CN": "情感",
      "ko": "감정",
      "vi": "cảm xúc",
      "id": "emosi"
    }
  },
  {
    "id": "V0498",
    "w": "完成",
    "r": "かんせい",
    "m": {
      "en": "completion",
      "zh-TW": "完成",
      "zh-CN": "完成",
      "ko": "완성",
      "vi": "hoàn thành",
      "id": "penyelesaian"
    }
  },
  {
    "id": "V0499",
    "w": "乾燥",
    "r": "かんそう",
    "m": {
      "en": "dryness",
      "zh-TW": "乾燥",
      "zh-CN": "干燥",
      "ko": "건조",
      "vi": "khô",
      "id": "kering"
    }
  },
  {
    "id": "V0500",
    "w": "機会",
    "r": "きかい",
    "m": {
      "en": "opportunity",
      "zh-TW": "機會",
      "zh-CN": "机会",
      "ko": "기회",
      "vi": "cơ hội",
      "id": "kesempatan"
    }
  },
  {
    "id": "V0501",
    "w": "機械",
    "r": "きかい",
    "m": {
      "en": "machine",
      "zh-TW": "機械",
      "zh-CN": "机械",
      "ko": "기계",
      "vi": "máy móc",
      "id": "mesin"
    }
  },
  {
    "id": "V0502",
    "w": "記事",
    "r": "きじ",
    "m": {
      "en": "article",
      "zh-TW": "文章",
      "zh-CN": "文章",
      "ko": "기사",
      "vi": "bài báo",
      "id": "artikel"
    }
  },
  {
    "id": "V0503",
    "w": "技術",
    "r": "ぎじゅつ",
    "m": {
      "en": "technology",
      "zh-TW": "技術",
      "zh-CN": "技术",
      "ko": "기술",
      "vi": "công nghệ",
      "id": "teknologi"
    }
  },
  {
    "id": "V0504",
    "w": "季節",
    "r": "きせつ",
    "m": {
      "en": "season",
      "zh-TW": "季節",
      "zh-CN": "季节",
      "ko": "계절",
      "vi": "mùa",
      "id": "musim"
    }
  },
  {
    "id": "V0505",
    "w": "規則",
    "r": "きそく",
    "m": {
      "en": "rule",
      "zh-TW": "規則",
      "zh-CN": "规则",
      "ko": "규칙",
      "vi": "quy tắc",
      "id": "aturan"
    }
  },
  {
    "id": "V0506",
    "w": "期待",
    "r": "きたい",
    "m": {
      "en": "expectation",
      "zh-TW": "期待",
      "zh-CN": "期待",
      "ko": "기대",
      "vi": "kỳ vọng",
      "id": "harapan"
    }
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
      "id": "suasana hati"
    }
  },
  {
    "id": "V0508",
    "w": "希望",
    "r": "きぼう",
    "m": {
      "en": "hope",
      "zh-TW": "希望",
      "zh-CN": "希望",
      "ko": "희망",
      "vi": "hy vọng",
      "id": "harapan"
    }
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
      "id": "perasaan"
    }
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
      "id": "tamu"
    }
  },
  {
    "id": "V0511",
    "w": "給料",
    "r": "きゅうりょう",
    "m": {
      "en": "salary",
      "zh-TW": "薪水",
      "zh-CN": "薪水",
      "ko": "월급",
      "vi": "lương",
      "id": "gaji"
    }
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
      "id": "pendidikan"
    }
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
      "id": "ruang kelas"
    }
  },
  {
    "id": "V0514",
    "w": "興味",
    "r": "きょうみ",
    "m": {
      "en": "interest",
      "zh-TW": "興趣",
      "zh-CN": "兴趣",
      "ko": "흥미",
      "vi": "hứng thú",
      "id": "minat"
    }
  },
  {
    "id": "V0515",
    "w": "距離",
    "r": "きょり",
    "m": {
      "en": "distance",
      "zh-TW": "距離",
      "zh-CN": "距离",
      "ko": "거리",
      "vi": "khoảng cách",
      "id": "jarak"
    }
  },
  {
    "id": "V0516",
    "w": "禁止",
    "r": "きんし",
    "m": {
      "en": "prohibition",
      "zh-TW": "禁止",
      "zh-CN": "禁止",
      "ko": "금지",
      "vi": "cấm",
      "id": "larangan"
    }
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
      "id": "bandara"
    }
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
      "id": "pengalaman"
    }
  },
  {
    "id": "V0519",
    "w": "結果",
    "r": "けっか",
    "m": {
      "en": "result",
      "zh-TW": "結果",
      "zh-CN": "结果",
      "ko": "결과",
      "vi": "kết quả",
      "id": "hasil"
    }
  },
  {
    "id": "V0520",
    "w": "結婚",
    "r": "けっこん",
    "m": {
      "en": "marriage",
      "zh-TW": "結婚",
      "zh-CN": "结婚",
      "ko": "결혼",
      "vi": "kết hôn",
      "id": "pernikahan"
    }
  },
  {
    "id": "V0521",
    "w": "原因",
    "r": "げんいん",
    "m": {
      "en": "cause",
      "zh-TW": "原因",
      "zh-CN": "原因",
      "ko": "원인",
      "vi": "nguyên nhân",
      "id": "penyebab"
    }
  },
  {
    "id": "V0522",
    "w": "現在",
    "r": "げんざい",
    "m": {
      "en": "present",
      "zh-TW": "現在",
      "zh-CN": "现在",
      "ko": "현재",
      "vi": "hiện tại",
      "id": "sekarang"
    }
  },
  {
    "id": "V0523",
    "w": "建築",
    "r": "けんちく",
    "m": {
      "en": "architecture",
      "zh-TW": "建築",
      "zh-CN": "建筑",
      "ko": "건축",
      "vi": "kiến trúc",
      "id": "arsitektur"
    }
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
      "id": "taman"
    }
  },
  {
    "id": "V0525",
    "w": "講義",
    "r": "こうぎ",
    "m": {
      "en": "lecture",
      "zh-TW": "講義",
      "zh-CN": "讲义",
      "ko": "강의",
      "vi": "bài giảng",
      "id": "kuliah"
    }
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
      "id": "pabrik"
    }
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
      "id": "lalu lintas"
    }
  },
  {
    "id": "V0528",
    "w": "国際",
    "r": "こくさい",
    "m": {
      "en": "international",
      "zh-TW": "國際",
      "zh-CN": "国际",
      "ko": "국제",
      "vi": "quốc tế",
      "id": "internasional"
    }
  },
  {
    "id": "V0529",
    "w": "故障",
    "r": "こしょう",
    "m": {
      "en": "breakdown",
      "zh-TW": "故障",
      "zh-CN": "故障",
      "ko": "고장",
      "vi": "hỏng",
      "id": "kerusakan"
    }
  },
  {
    "id": "V0530",
    "w": "個人",
    "r": "こじん",
    "m": {
      "en": "individual",
      "zh-TW": "個人",
      "zh-CN": "个人",
      "ko": "개인",
      "vi": "cá nhân",
      "id": "individu"
    }
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
      "id": "jawaban"
    }
  },
  {
    "id": "V0532",
    "w": "言葉",
    "r": "ことば",
    "m": {
      "en": "word",
      "zh-TW": "語言",
      "zh-CN": "语言",
      "ko": "말",
      "vi": "từ ngữ",
      "id": "kata"
    }
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
      "id": "kali ini"
    }
  },
  {
    "id": "V0534",
    "w": "最近",
    "r": "さいきん",
    "m": {
      "en": "recently",
      "zh-TW": "最近",
      "zh-CN": "最近",
      "ko": "최근",
      "vi": "gần đây",
      "id": "baru-baru ini"
    }
  },
  {
    "id": "V0535",
    "w": "最後",
    "r": "さいご",
    "m": {
      "en": "last",
      "zh-TW": "最後",
      "zh-CN": "最后",
      "ko": "마지막",
      "vi": "cuối cùng",
      "id": "terakhir"
    }
  },
  {
    "id": "V0536",
    "w": "最初",
    "r": "さいしょ",
    "m": {
      "en": "first",
      "zh-TW": "最初",
      "zh-CN": "最初",
      "ko": "처음",
      "vi": "đầu tiên",
      "id": "pertama"
    }
  },
  {
    "id": "V0537",
    "w": "材料",
    "r": "ざいりょう",
    "m": {
      "en": "material",
      "zh-TW": "材料",
      "zh-CN": "材料",
      "ko": "재료",
      "vi": "nguyên liệu",
      "id": "bahan"
    }
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
      "id": "karya"
    }
  },
  {
    "id": "V0539",
    "w": "参加",
    "r": "さんか",
    "m": {
      "en": "participation",
      "zh-TW": "參加",
      "zh-CN": "参加",
      "ko": "참가",
      "vi": "tham gia",
      "id": "partisipasi"
    }
  },
  {
    "id": "V0540",
    "w": "残念",
    "r": "ざんねん",
    "m": {
      "en": "regrettable",
      "zh-TW": "遺憾",
      "zh-CN": "遗憾",
      "ko": "유감",
      "vi": "đáng tiếc",
      "id": "sayang"
    }
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
      "id": "pertandingan"
    }
  },
  {
    "id": "V0542",
    "w": "事故",
    "r": "じこ",
    "m": {
      "en": "accident",
      "zh-TW": "事故",
      "zh-CN": "事故",
      "ko": "사고",
      "vi": "tai nạn",
      "id": "kecelakaan"
    }
  },
  {
    "id": "V0543",
    "w": "地震",
    "r": "じしん",
    "m": {
      "en": "earthquake",
      "zh-TW": "地震",
      "zh-CN": "地震",
      "ko": "지진",
      "vi": "động đất",
      "id": "gempa"
    }
  },
  {
    "id": "V0544",
    "w": "自然",
    "r": "しぜん",
    "m": {
      "en": "nature",
      "zh-TW": "自然",
      "zh-CN": "自然",
      "ko": "자연",
      "vi": "tự nhiên",
      "id": "alam"
    }
  },
  {
    "id": "V0545",
    "w": "実際",
    "r": "じっさい",
    "m": {
      "en": "actually",
      "zh-TW": "實際",
      "zh-CN": "实际",
      "ko": "실제",
      "vi": "thực tế",
      "id": "sebenarnya"
    }
  },
  {
    "id": "V0546",
    "w": "失敗",
    "r": "しっぱい",
    "m": {
      "en": "failure",
      "zh-TW": "失敗",
      "zh-CN": "失败",
      "ko": "실패",
      "vi": "thất bại",
      "id": "kegagalan"
    }
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
      "id": "pertanyaan"
    }
  },
  {
    "id": "V0548",
    "w": "支払",
    "r": "しはらい",
    "m": {
      "en": "payment",
      "zh-TW": "支付",
      "zh-CN": "支付",
      "ko": "지불",
      "vi": "thanh toán",
      "id": "pembayaran"
    }
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
      "id": "pulau"
    }
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
      "id": "kantor"
    }
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
      "id": "masyarakat"
    }
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
      "id": "direktur"
    }
  },
  {
    "id": "V0553",
    "w": "自由",
    "r": "じゆう",
    "m": {
      "en": "freedom",
      "zh-TW": "自由",
      "zh-CN": "自由",
      "ko": "자유",
      "vi": "tự do",
      "id": "kebebasan"
    }
  },
  {
    "id": "V0554",
    "w": "習慣",
    "r": "しゅうかん",
    "m": {
      "en": "habit",
      "zh-TW": "習慣",
      "zh-CN": "习惯",
      "ko": "습관",
      "vi": "thói quen",
      "id": "kebiasaan"
    }
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
      "id": "alamat"
    }
  },
  {
    "id": "V0556",
    "w": "授業",
    "r": "じゅぎょう",
    "m": {
      "en": "class",
      "zh-TW": "課程",
      "zh-CN": "课程",
      "ko": "수업",
      "vi": "bài học",
      "id": "pelajaran"
    }
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
      "id": "keberangkatan"
    }
  },
  {
    "id": "V0558",
    "w": "趣味",
    "r": "しゅみ",
    "m": {
      "en": "hobby",
      "zh-TW": "興趣",
      "zh-CN": "兴趣",
      "ko": "취미",
      "vi": "sở thích",
      "id": "hobi"
    }
  },
  {
    "id": "V0559",
    "w": "準備",
    "r": "じゅんび",
    "m": {
      "en": "preparation",
      "zh-TW": "準備",
      "zh-CN": "准备",
      "ko": "준비",
      "vi": "chuẩn bị",
      "id": "persiapan"
    }
  },
  {
    "id": "V0560",
    "w": "紹介",
    "r": "しょうかい",
    "m": {
      "en": "introduction",
      "zh-TW": "介紹",
      "zh-CN": "介绍",
      "ko": "소개",
      "vi": "giới thiệu",
      "id": "perkenalan"
    }
  },
  {
    "id": "V0561",
    "w": "将来",
    "r": "しょうらい",
    "m": {
      "en": "future",
      "zh-TW": "將來",
      "zh-CN": "将来",
      "ko": "장래",
      "vi": "tương lai",
      "id": "masa depan"
    }
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
      "id": "makan"
    }
  },
  {
    "id": "V0563",
    "w": "女性",
    "r": "じょせい",
    "m": {
      "en": "woman",
      "zh-TW": "女性",
      "zh-CN": "女性",
      "ko": "여성",
      "vi": "phụ nữ",
      "id": "wanita"
    }
  },
  {
    "id": "V0564",
    "w": "書類",
    "r": "しょるい",
    "m": {
      "en": "document",
      "zh-TW": "文件",
      "zh-CN": "文件",
      "ko": "서류",
      "vi": "tài liệu",
      "id": "dokumen"
    }
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
      "id": "populasi"
    }
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
      "id": "koran"
    }
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
      "id": "air ledeng"
    }
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
      "id": "matematika"
    }
  },
  {
    "id": "V0569",
    "w": "素晴らしい",
    "r": "すばらしい",
    "m": {
      "en": "wonderful",
      "zh-TW": "精彩",
      "zh-CN": "精彩",
      "ko": "훌륭한",
      "vi": "tuyệt vời",
      "id": "luar biasa"
    }
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
      "id": "kehidupan"
    }
  },
  {
    "id": "V0571",
    "w": "政治",
    "r": "せいじ",
    "m": {
      "en": "politics",
      "zh-TW": "政治",
      "zh-CN": "政治",
      "ko": "정치",
      "vi": "chính trị",
      "id": "politik"
    }
  },
  {
    "id": "V0572",
    "w": "製品",
    "r": "せいひん",
    "m": {
      "en": "product",
      "zh-TW": "產品",
      "zh-CN": "产品",
      "ko": "제품",
      "vi": "sản phẩm",
      "id": "produk"
    }
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
      "id": "dunia"
    }
  },
  {
    "id": "V0574",
    "w": "席",
    "r": "せき",
    "m": {
      "en": "seat",
      "zh-TW": "座位",
      "zh-CN": "座位",
      "ko": "자리",
      "vi": "chỗ ngồi",
      "id": "tempat duduk"
    }
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
      "id": "penjelasan"
    }
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
      "id": "perawatan"
    }
  },
  {
    "id": "V0577",
    "w": "選手",
    "r": "せんしゅ",
    "m": {
      "en": "player",
      "zh-TW": "選手",
      "zh-CN": "选手",
      "ko": "선수",
      "vi": "vận động viên",
      "id": "atlet"
    }
  },
  {
    "id": "V0578",
    "w": "専門",
    "r": "せんもん",
    "m": {
      "en": "specialty",
      "zh-TW": "專業",
      "zh-CN": "专业",
      "ko": "전문",
      "vi": "chuyên môn",
      "id": "spesialisasi"
    }
  },
  {
    "id": "V0579",
    "w": "相談",
    "r": "そうだん",
    "m": {
      "en": "consultation",
      "zh-TW": "商量",
      "zh-CN": "商量",
      "ko": "상담",
      "vi": "tư vấn",
      "id": "konsultasi"
    }
  },
  {
    "id": "V0580",
    "w": "卒業",
    "r": "そつぎょう",
    "m": {
      "en": "graduation",
      "zh-TW": "畢業",
      "zh-CN": "毕业",
      "ko": "졸업",
      "vi": "tốt nghiệp",
      "id": "lulus"
    }
  },
  {
    "id": "V0581",
    "w": "祖父",
    "r": "そふ",
    "m": {
      "en": "grandfather",
      "zh-TW": "祖父",
      "zh-CN": "祖父",
      "ko": "할아버지",
      "vi": "ông",
      "id": "kakek"
    }
  },
  {
    "id": "V0582",
    "w": "祖母",
    "r": "そぼ",
    "m": {
      "en": "grandmother",
      "zh-TW": "祖母",
      "zh-CN": "祖母",
      "ko": "할머니",
      "vi": "bà",
      "id": "nenek"
    }
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
      "id": "universitas"
    }
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
      "id": "penting"
    }
  },
  {
    "id": "V0585",
    "w": "大丈夫",
    "r": "だいじょうぶ",
    "m": {
      "en": "alright",
      "zh-TW": "沒關係",
      "zh-CN": "没关系",
      "ko": "괜찮다",
      "vi": "không sao",
      "id": "tidak apa-apa"
    }
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
      "id": "topan"
    }
  },
  {
    "id": "V0587",
    "w": "宝物",
    "r": "たからもの",
    "m": {
      "en": "treasure",
      "zh-TW": "寶物",
      "zh-CN": "宝物",
      "ko": "보물",
      "vi": "kho báu",
      "id": "harta"
    }
  },
  {
    "id": "V0588",
    "w": "棚",
    "r": "たな",
    "m": {
      "en": "shelf",
      "zh-TW": "架子",
      "zh-CN": "架子",
      "ko": "선반",
      "vi": "kệ",
      "id": "rak"
    }
  },
  {
    "id": "V0589",
    "w": "誕生日",
    "r": "たんじょうび",
    "m": {
      "en": "birthday",
      "zh-TW": "生日",
      "zh-CN": "生日",
      "ko": "생일",
      "vi": "sinh nhật",
      "id": "ulang tahun"
    }
  },
  {
    "id": "V0590",
    "w": "男性",
    "r": "だんせい",
    "m": {
      "en": "man",
      "zh-TW": "男性",
      "zh-CN": "男性",
      "ko": "남성",
      "vi": "nam giới",
      "id": "pria"
    }
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
      "id": "peta"
    }
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
      "id": "perhatian"
    }
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
      "id": "pusat"
    }
  },
  {
    "id": "V0594",
    "w": "駐車場",
    "r": "ちゅうしゃじょう",
    "m": {
      "en": "parking lot",
      "zh-TW": "停車場",
      "zh-CN": "停车场",
      "ko": "주차장",
      "vi": "bãi đỗ xe",
      "id": "tempat parkir"
    }
  },
  {
    "id": "V0595",
    "w": "調子",
    "r": "ちょうし",
    "m": {
      "en": "condition",
      "zh-TW": "狀況",
      "zh-CN": "状况",
      "ko": "상태",
      "vi": "tình trạng",
      "id": "kondisi"
    }
  },
  {
    "id": "V0596",
    "w": "通勤",
    "r": "つうきん",
    "m": {
      "en": "commuting",
      "zh-TW": "通勤",
      "zh-CN": "通勤",
      "ko": "통근",
      "vi": "đi làm",
      "id": "perjalanan kerja"
    }
  },
  {
    "id": "V0597",
    "w": "伝統",
    "r": "でんとう",
    "m": {
      "en": "tradition",
      "zh-TW": "傳統",
      "zh-CN": "传统",
      "ko": "전통",
      "vi": "truyền thống",
      "id": "tradisi"
    }
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
      "id": "telepon"
    }
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
      "id": "kota"
    }
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
      "id": "pemberitahuan"
    }
  },
  {
    "id": "V0601",
    "w": "隣",
    "r": "となり",
    "m": {
      "en": "next to",
      "zh-TW": "旁邊",
      "zh-CN": "旁边",
      "ko": "옆",
      "vi": "bên cạnh",
      "id": "sebelah"
    }
  },
  {
    "id": "V0602",
    "w": "仲間",
    "r": "なかま",
    "m": {
      "en": "companion",
      "zh-TW": "夥伴",
      "zh-CN": "伙伴",
      "ko": "동료",
      "vi": "bạn bè",
      "id": "teman"
    }
  },
  {
    "id": "V0603",
    "w": "内容",
    "r": "ないよう",
    "m": {
      "en": "content",
      "zh-TW": "內容",
      "zh-CN": "内容",
      "ko": "내용",
      "vi": "nội dung",
      "id": "isi"
    }
  },
  {
    "id": "V0604",
    "w": "荷物",
    "r": "にもつ",
    "m": {
      "en": "luggage",
      "zh-TW": "行李",
      "zh-CN": "行李",
      "ko": "짐",
      "vi": "hành lý",
      "id": "barang"
    }
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
      "id": "rawat inap"
    }
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
      "id": "masuk sekolah"
    }
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
      "id": "populer"
    }
  },
  {
    "id": "V0608",
    "w": "値段",
    "r": "ねだん",
    "m": {
      "en": "price",
      "zh-TW": "價格",
      "zh-CN": "价格",
      "ko": "가격",
      "vi": "giá",
      "id": "harga"
    }
  },
  {
    "id": "V0609",
    "w": "年齢",
    "r": "ねんれい",
    "m": {
      "en": "age",
      "zh-TW": "年齡",
      "zh-CN": "年龄",
      "ko": "나이",
      "vi": "tuổi",
      "id": "usia"
    }
  },
  {
    "id": "V0610",
    "w": "農業",
    "r": "のうぎょう",
    "m": {
      "en": "agriculture",
      "zh-TW": "農業",
      "zh-CN": "农业",
      "ko": "농업",
      "vi": "nông nghiệp",
      "id": "pertanian"
    }
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
      "id": "kasus"
    }
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
      "id": "tempat jual"
    }
  },
  {
    "id": "V0613",
    "w": "発表",
    "r": "はっぴょう",
    "m": {
      "en": "announcement",
      "zh-TW": "發表",
      "zh-CN": "发表",
      "ko": "발표",
      "vi": "công bố",
      "id": "pengumuman"
    }
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
      "id": "acara"
    }
  },
  {
    "id": "V0615",
    "w": "反対",
    "r": "はんたい",
    "m": {
      "en": "opposite",
      "zh-TW": "反對",
      "zh-CN": "反对",
      "ko": "반대",
      "vi": "phản đối",
      "id": "kebalikan"
    }
  },
  {
    "id": "V0616",
    "w": "日記",
    "r": "にっき",
    "m": {
      "en": "diary",
      "zh-TW": "日記",
      "zh-CN": "日记",
      "ko": "일기",
      "vi": "nhật ký",
      "id": "buku harian"
    }
  },
  {
    "id": "V0617",
    "w": "美術",
    "r": "びじゅつ",
    "m": {
      "en": "art",
      "zh-TW": "美術",
      "zh-CN": "美术",
      "ko": "미술",
      "vi": "mỹ thuật",
      "id": "seni"
    }
  },
  {
    "id": "V0618",
    "w": "秘密",
    "r": "ひみつ",
    "m": {
      "en": "secret",
      "zh-TW": "秘密",
      "zh-CN": "秘密",
      "ko": "비밀",
      "vi": "bí mật",
      "id": "rahasia"
    }
  },
  {
    "id": "V0619",
    "w": "表現",
    "r": "ひょうげん",
    "m": {
      "en": "expression",
      "zh-TW": "表現",
      "zh-CN": "表现",
      "ko": "표현",
      "vi": "biểu hiện",
      "id": "ekspresi"
    }
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
      "id": "rumah sakit"
    }
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
      "id": "kepala bagian"
    }
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
      "id": "bagian"
    }
  },
  {
    "id": "V0623",
    "w": "文化",
    "r": "ぶんか",
    "m": {
      "en": "culture",
      "zh-TW": "文化",
      "zh-CN": "文化",
      "ko": "문화",
      "vi": "văn hóa",
      "id": "budaya"
    }
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
      "id": "sastra"
    }
  },
  {
    "id": "V0625",
    "w": "平和",
    "r": "へいわ",
    "m": {
      "en": "peace",
      "zh-TW": "和平",
      "zh-CN": "和平",
      "ko": "평화",
      "vi": "hòa bình",
      "id": "damai"
    }
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
      "id": "lain"
    }
  },
  {
    "id": "V0627",
    "w": "変化",
    "r": "へんか",
    "m": {
      "en": "change",
      "zh-TW": "變化",
      "zh-CN": "变化",
      "ko": "변화",
      "vi": "thay đổi",
      "id": "perubahan"
    }
  },
  {
    "id": "V0628",
    "w": "返事",
    "r": "へんじ",
    "m": {
      "en": "reply",
      "zh-TW": "回答",
      "zh-CN": "回答",
      "ko": "대답",
      "vi": "trả lời",
      "id": "balasan"
    }
  },
  {
    "id": "V0629",
    "w": "方法",
    "r": "ほうほう",
    "m": {
      "en": "method",
      "zh-TW": "方法",
      "zh-CN": "方法",
      "ko": "방법",
      "vi": "phương pháp",
      "id": "metode"
    }
  },
  {
    "id": "V0630",
    "w": "放送",
    "r": "ほうそう",
    "m": {
      "en": "broadcast",
      "zh-TW": "廣播",
      "zh-CN": "广播",
      "ko": "방송",
      "vi": "phát sóng",
      "id": "siaran"
    }
  },
  {
    "id": "V0631",
    "w": "貿易",
    "r": "ぼうえき",
    "m": {
      "en": "trade",
      "zh-TW": "貿易",
      "zh-CN": "贸易",
      "ko": "무역",
      "vi": "thương mại",
      "id": "perdagangan"
    }
  },
  {
    "id": "V0632",
    "w": "本当",
    "r": "ほんとう",
    "m": {
      "en": "truth",
      "zh-TW": "真的",
      "zh-CN": "真的",
      "ko": "정말",
      "vi": "thật sự",
      "id": "benar"
    }
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
      "id": "setiap hari"
    }
  },
  {
    "id": "V0634",
    "w": "満足",
    "r": "まんぞく",
    "m": {
      "en": "satisfaction",
      "zh-TW": "滿足",
      "zh-CN": "满足",
      "ko": "만족",
      "vi": "hài lòng",
      "id": "kepuasan"
    }
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
      "id": "pandangan"
    }
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
      "id": "jalan"
    }
  },
  {
    "id": "V0637",
    "w": "皆",
    "r": "みな",
    "m": {
      "en": "everyone",
      "zh-TW": "大家",
      "zh-CN": "大家",
      "ko": "모두",
      "vi": "mọi người",
      "id": "semua orang"
    }
  },
  {
    "id": "V0638",
    "w": "未来",
    "r": "みらい",
    "m": {
      "en": "future",
      "zh-TW": "未來",
      "zh-CN": "未来",
      "ko": "미래",
      "vi": "tương lai",
      "id": "masa depan"
    }
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
      "id": "mustahil"
    }
  },
  {
    "id": "V0640",
    "w": "迷惑",
    "r": "めいわく",
    "m": {
      "en": "trouble",
      "zh-TW": "麻煩",
      "zh-CN": "麻烦",
      "ko": "폐",
      "vi": "phiền",
      "id": "gangguan"
    }
  },
  {
    "id": "V0641",
    "w": "目的",
    "r": "もくてき",
    "m": {
      "en": "purpose",
      "zh-TW": "目的",
      "zh-CN": "目的",
      "ko": "목적",
      "vi": "mục đích",
      "id": "tujuan"
    }
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
      "id": "masalah"
    }
  },
  {
    "id": "V0643",
    "w": "約束",
    "r": "やくそく",
    "m": {
      "en": "promise",
      "zh-TW": "約定",
      "zh-CN": "约定",
      "ko": "약속",
      "vi": "hẹn",
      "id": "janji"
    }
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
      "id": "juara"
    }
  },
  {
    "id": "V0645",
    "w": "郵便",
    "r": "ゆうびん",
    "m": {
      "en": "mail",
      "zh-TW": "郵件",
      "zh-CN": "邮件",
      "ko": "우편",
      "vi": "bưu điện",
      "id": "pos"
    }
  },
  {
    "id": "V0646",
    "w": "輸出",
    "r": "ゆしゅつ",
    "m": {
      "en": "export",
      "zh-TW": "出口",
      "zh-CN": "出口",
      "ko": "수출",
      "vi": "xuất khẩu",
      "id": "ekspor"
    }
  },
  {
    "id": "V0647",
    "w": "輸入",
    "r": "ゆにゅう",
    "m": {
      "en": "import",
      "zh-TW": "進口",
      "zh-CN": "进口",
      "ko": "수입",
      "vi": "nhập khẩu",
      "id": "impor"
    }
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
      "id": "mimpi"
    }
  },
  {
    "id": "V0649",
    "w": "用意",
    "r": "ようい",
    "m": {
      "en": "preparation",
      "zh-TW": "準備",
      "zh-CN": "准备",
      "ko": "준비",
      "vi": "chuẩn bị",
      "id": "persiapan"
    }
  },
  {
    "id": "V0650",
    "w": "用事",
    "r": "ようじ",
    "m": {
      "en": "errand",
      "zh-TW": "事情",
      "zh-CN": "事情",
      "ko": "용건",
      "vi": "việc",
      "id": "urusan"
    }
  },
  {
    "id": "V0651",
    "w": "予約",
    "r": "よやく",
    "m": {
      "en": "reservation",
      "zh-TW": "預約",
      "zh-CN": "预约",
      "ko": "예약",
      "vi": "đặt chỗ",
      "id": "reservasi"
    }
  },
  {
    "id": "V0652",
    "w": "理由",
    "r": "りゆう",
    "m": {
      "en": "reason",
      "zh-TW": "理由",
      "zh-CN": "理由",
      "ko": "이유",
      "vi": "lý do",
      "id": "alasan"
    }
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
      "id": "belajar di luar negeri"
    }
  },
  {
    "id": "V0654",
    "w": "旅行",
    "r": "りょこう",
    "m": {
      "en": "travel",
      "zh-TW": "旅行",
      "zh-CN": "旅行",
      "ko": "여행",
      "vi": "du lịch",
      "id": "perjalanan"
    }
  },
  {
    "id": "V0655",
    "w": "歴史",
    "r": "れきし",
    "m": {
      "en": "history",
      "zh-TW": "歷史",
      "zh-CN": "历史",
      "ko": "역사",
      "vi": "lịch sử",
      "id": "sejarah"
    }
  },
  {
    "id": "V0656",
    "w": "連絡",
    "r": "れんらく",
    "m": {
      "en": "contact",
      "zh-TW": "聯絡",
      "zh-CN": "联络",
      "ko": "연락",
      "vi": "liên lạc",
      "id": "kontak"
    }
  },
  {
    "id": "V0657",
    "w": "練習",
    "r": "れんしゅう",
    "m": {
      "en": "practice",
      "zh-TW": "練習",
      "zh-CN": "练习",
      "ko": "연습",
      "vi": "luyện tập",
      "id": "latihan"
    }
  },
  {
    "id": "V0658",
    "w": "若い",
    "r": "わかい",
    "m": {
      "en": "young",
      "zh-TW": "年輕",
      "zh-CN": "年轻",
      "ko": "젊은",
      "vi": "trẻ",
      "id": "muda"
    }
  },
  {
    "id": "V0659",
    "w": "和食",
    "r": "わしょく",
    "m": {
      "en": "Japanese food",
      "zh-TW": "日本料理",
      "zh-CN": "日本料理",
      "ko": "일식",
      "vi": "ẩm thực Nhật",
      "id": "makanan Jepang"
    }
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
      "id": "rasio"
    }
  },
  {
    "id": "V0661",
    "w": "腕",
    "r": "うで",
    "m": {
      "en": "arm",
      "zh-TW": "手臂",
      "zh-CN": "手臂",
      "ko": "팔",
      "vi": "cánh tay",
      "id": "lengan"
    }
  },
  {
    "id": "V0662",
    "w": "眠い",
    "r": "ねむい",
    "m": {
      "en": "sleepy",
      "zh-TW": "困",
      "zh-CN": "困",
      "ko": "졸리다",
      "vi": "buồn ngủ",
      "id": "mengantuk"
    }
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
      "id": "era"
    }
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
      "id": "tahun fiskal"
    }
  },
  {
    "id": "V0665",
    "w": "能力",
    "r": "のうりょく",
    "m": {
      "en": "ability",
      "zh-TW": "能力",
      "zh-CN": "能力",
      "ko": "능력",
      "vi": "năng lực",
      "id": "kemampuan"
    }
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
      "id": "kendaraan"
    }
  },
  {
    "id": "V0667",
    "w": "乗り換える",
    "r": "のりかえる",
    "m": {
      "en": "to transfer",
      "zh-TW": "換乘",
      "zh-CN": "换乘",
      "ko": "갈아타다",
      "vi": "chuyển xe",
      "id": "transfer"
    }
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
      "id": "kali lipat"
    }
  },
  {
    "id": "V0669",
    "w": "配達",
    "r": "はいたつ",
    "m": {
      "en": "delivery",
      "zh-TW": "配送",
      "zh-CN": "配送",
      "ko": "배달",
      "vi": "giao hàng",
      "id": "pengiriman"
    }
  },
  {
    "id": "V0670",
    "w": "拍手",
    "r": "はくしゅ",
    "m": {
      "en": "applause",
      "zh-TW": "拍手",
      "zh-CN": "拍手",
      "ko": "박수",
      "vi": "vỗ tay",
      "id": "tepuk tangan"
    }
  },
  {
    "id": "V0671",
    "w": "博物館",
    "r": "はくぶつかん",
    "m": {
      "en": "museum",
      "zh-TW": "博物館",
      "zh-CN": "博物馆",
      "ko": "박물관",
      "vi": "bảo tàng",
      "id": "museum"
    }
  },
  {
    "id": "V0672",
    "w": "恥ずかしい",
    "r": "はずかしい",
    "m": {
      "en": "embarrassed",
      "zh-TW": "害羞",
      "zh-CN": "害羞",
      "ko": "부끄럽다",
      "vi": "xấu hổ",
      "id": "malu"
    }
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
      "id": "penemuan"
    }
  },
  {
    "id": "V0674",
    "w": "発展",
    "r": "はってん",
    "m": {
      "en": "development",
      "zh-TW": "發展",
      "zh-CN": "发展",
      "ko": "발전",
      "vi": "phát triển",
      "id": "perkembangan"
    }
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
      "id": "penemuan"
    }
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
      "id": "kembang api"
    }
  },
  {
    "id": "V0677",
    "w": "幅",
    "r": "はば",
    "m": {
      "en": "width",
      "zh-TW": "寬度",
      "zh-CN": "宽度",
      "ko": "폭",
      "vi": "chiều rộng",
      "id": "lebar"
    }
  },
  {
    "id": "V0678",
    "w": "省く",
    "r": "はぶく",
    "m": {
      "en": "to omit",
      "zh-TW": "省略",
      "zh-CN": "省略",
      "ko": "생략하다",
      "vi": "bỏ qua",
      "id": "menghilangkan"
    }
  },
  {
    "id": "V0679",
    "w": "浜",
    "r": "はま",
    "m": {
      "en": "beach",
      "zh-TW": "海灘",
      "zh-CN": "海滩",
      "ko": "해변",
      "vi": "bãi biển",
      "id": "pantai"
    }
  },
  {
    "id": "V0680",
    "w": "範囲",
    "r": "はんい",
    "m": {
      "en": "range",
      "zh-TW": "範圍",
      "zh-CN": "范围",
      "ko": "범위",
      "vi": "phạm vi",
      "id": "jangkauan"
    }
  },
  {
    "id": "V0681",
    "w": "反映",
    "r": "はんえい",
    "m": {
      "en": "reflection",
      "zh-TW": "反映",
      "zh-CN": "反映",
      "ko": "반영",
      "vi": "phản ánh",
      "id": "refleksi"
    }
  },
  {
    "id": "V0682",
    "w": "犯罪",
    "r": "はんざい",
    "m": {
      "en": "crime",
      "zh-TW": "犯罪",
      "zh-CN": "犯罪",
      "ko": "범죄",
      "vi": "tội phạm",
      "id": "kejahatan"
    }
  },
  {
    "id": "V0683",
    "w": "判断",
    "r": "はんだん",
    "m": {
      "en": "judgment",
      "zh-TW": "判斷",
      "zh-CN": "判断",
      "ko": "판단",
      "vi": "phán đoán",
      "id": "penilaian"
    }
  },
  {
    "id": "V0684",
    "w": "販売",
    "r": "はんばい",
    "m": {
      "en": "sales",
      "zh-TW": "銷售",
      "zh-CN": "销售",
      "ko": "판매",
      "vi": "bán hàng",
      "id": "penjualan"
    }
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
      "id": "pulang pergi"
    }
  },
  {
    "id": "V0686",
    "w": "比較",
    "r": "ひかく",
    "m": {
      "en": "comparison",
      "zh-TW": "比較",
      "zh-CN": "比较",
      "ko": "비교",
      "vi": "so sánh",
      "id": "perbandingan"
    }
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
      "id": "cahaya"
    }
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
      "id": "menarik"
    }
  },
  {
    "id": "V0689",
    "w": "非常",
    "r": "ひじょう",
    "m": {
      "en": "emergency",
      "zh-TW": "非常",
      "zh-CN": "非常",
      "ko": "비상",
      "vi": "khẩn cấp",
      "id": "darurat"
    }
  },
  {
    "id": "V0690",
    "w": "必死",
    "r": "ひっし",
    "m": {
      "en": "desperate",
      "zh-TW": "拼命",
      "zh-CN": "拼命",
      "ko": "필사",
      "vi": "liều mạng",
      "id": "mati-matian"
    }
  },
  {
    "id": "V0691",
    "w": "引っ越す",
    "r": "ひっこす",
    "m": {
      "en": "to move",
      "zh-TW": "搬家",
      "zh-CN": "搬家",
      "ko": "이사하다",
      "vi": "chuyển nhà",
      "id": "pindah"
    }
  },
  {
    "id": "V0692",
    "w": "否定",
    "r": "ひてい",
    "m": {
      "en": "denial",
      "zh-TW": "否定",
      "zh-CN": "否定",
      "ko": "부정",
      "vi": "phủ định",
      "id": "penolakan"
    }
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
      "id": "orang-orang"
    }
  },
  {
    "id": "V0694",
    "w": "批判",
    "r": "ひはん",
    "m": {
      "en": "criticism",
      "zh-TW": "批判",
      "zh-CN": "批判",
      "ko": "비판",
      "vi": "phê phán",
      "id": "kritik"
    }
  },
  {
    "id": "V0695",
    "w": "皮膚",
    "r": "ひふ",
    "m": {
      "en": "skin",
      "zh-TW": "皮膚",
      "zh-CN": "皮肤",
      "ko": "피부",
      "vi": "da",
      "id": "kulit"
    }
  },
  {
    "id": "V0696",
    "w": "表",
    "r": "ひょう",
    "m": {
      "en": "table/chart",
      "zh-TW": "表格",
      "zh-CN": "表格",
      "ko": "표",
      "vi": "bảng",
      "id": "tabel"
    }
  },
  {
    "id": "V0697",
    "w": "評価",
    "r": "ひょうか",
    "m": {
      "en": "evaluation",
      "zh-TW": "評價",
      "zh-CN": "评价",
      "ko": "평가",
      "vi": "đánh giá",
      "id": "penilaian"
    }
  },
  {
    "id": "V0698",
    "w": "表情",
    "r": "ひょうじょう",
    "m": {
      "en": "facial expression",
      "zh-TW": "表情",
      "zh-CN": "表情",
      "ko": "표정",
      "vi": "biểu cảm",
      "id": "ekspresi wajah"
    }
  },
  {
    "id": "V0699",
    "w": "美容",
    "r": "びよう",
    "m": {
      "en": "beauty",
      "zh-TW": "美容",
      "zh-CN": "美容",
      "ko": "미용",
      "vi": "làm đẹp",
      "id": "kecantikan"
    }
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
      "id": "kualitas"
    }
  },
  {
    "id": "V0701",
    "w": "貧乏",
    "r": "びんぼう",
    "m": {
      "en": "poor",
      "zh-TW": "貧窮",
      "zh-CN": "贫穷",
      "ko": "가난",
      "vi": "nghèo",
      "id": "miskin"
    }
  },
  {
    "id": "V0702",
    "w": "夫婦",
    "r": "ふうふ",
    "m": {
      "en": "married couple",
      "zh-TW": "夫婦",
      "zh-CN": "夫妇",
      "ko": "부부",
      "vi": "vợ chồng",
      "id": "pasangan suami istri"
    }
  },
  {
    "id": "V0703",
    "w": "深い",
    "r": "ふかい",
    "m": {
      "en": "deep",
      "zh-TW": "深",
      "zh-CN": "深",
      "ko": "깊다",
      "vi": "sâu",
      "id": "dalam"
    }
  },
  {
    "id": "V0704",
    "w": "福祉",
    "r": "ふくし",
    "m": {
      "en": "welfare",
      "zh-TW": "福利",
      "zh-CN": "福利",
      "ko": "복지",
      "vi": "phúc lợi",
      "id": "kesejahteraan"
    }
  },
  {
    "id": "V0705",
    "w": "普段",
    "r": "ふだん",
    "m": {
      "en": "usually",
      "zh-TW": "平常",
      "zh-CN": "平常",
      "ko": "평소",
      "vi": "thường ngày",
      "id": "biasanya"
    }
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
      "id": "suku cadang"
    }
  },
  {
    "id": "V0707",
    "w": "不満",
    "r": "ふまん",
    "m": {
      "en": "dissatisfaction",
      "zh-TW": "不滿",
      "zh-CN": "不满",
      "ko": "불만",
      "vi": "bất mãn",
      "id": "ketidakpuasan"
    }
  },
  {
    "id": "V0708",
    "w": "雰囲気",
    "r": "ふんいき",
    "m": {
      "en": "atmosphere",
      "zh-TW": "氣氛",
      "zh-CN": "气氛",
      "ko": "분위기",
      "vi": "bầu không khí",
      "id": "suasana"
    }
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
      "id": "bidang"
    }
  },
  {
    "id": "V0710",
    "w": "分析",
    "r": "ぶんせき",
    "m": {
      "en": "analysis",
      "zh-TW": "分析",
      "zh-CN": "分析",
      "ko": "분석",
      "vi": "phân tích",
      "id": "analisis"
    }
  },
  {
    "id": "V0711",
    "w": "平均",
    "r": "へいきん",
    "m": {
      "en": "average",
      "zh-TW": "平均",
      "zh-CN": "平均",
      "ko": "평균",
      "vi": "trung bình",
      "id": "rata-rata"
    }
  },
  {
    "id": "V0712",
    "w": "法律",
    "r": "ほうりつ",
    "m": {
      "en": "law",
      "zh-TW": "法律",
      "zh-CN": "法律",
      "ko": "법률",
      "vi": "pháp luật",
      "id": "hukum"
    }
  },
  {
    "id": "V0713",
    "w": "訪問",
    "r": "ほうもん",
    "m": {
      "en": "visit",
      "zh-TW": "訪問",
      "zh-CN": "访问",
      "ko": "방문",
      "vi": "thăm",
      "id": "kunjungan"
    }
  },
  {
    "id": "V0714",
    "w": "方向",
    "r": "ほうこう",
    "m": {
      "en": "direction",
      "zh-TW": "方向",
      "zh-CN": "方向",
      "ko": "방향",
      "vi": "hướng",
      "id": "arah"
    }
  },
  {
    "id": "V0715",
    "w": "宝石",
    "r": "ほうせき",
    "m": {
      "en": "jewel",
      "zh-TW": "寶石",
      "zh-CN": "宝石",
      "ko": "보석",
      "vi": "đá quý",
      "id": "permata"
    }
  },
  {
    "id": "V0716",
    "w": "防止",
    "r": "ぼうし",
    "m": {
      "en": "prevention",
      "zh-TW": "防止",
      "zh-CN": "防止",
      "ko": "방지",
      "vi": "phòng ngừa",
      "id": "pencegahan"
    }
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
      "id": "laporan"
    }
  },
  {
    "id": "V0718",
    "w": "募集",
    "r": "ぼしゅう",
    "m": {
      "en": "recruitment",
      "zh-TW": "招募",
      "zh-CN": "招募",
      "ko": "모집",
      "vi": "tuyển dụng",
      "id": "rekrutmen"
    }
  },
  {
    "id": "V0719",
    "w": "保存",
    "r": "ほぞん",
    "m": {
      "en": "preservation",
      "zh-TW": "保存",
      "zh-CN": "保存",
      "ko": "보존",
      "vi": "bảo quản",
      "id": "pelestarian"
    }
  },
  {
    "id": "V0720",
    "w": "保護",
    "r": "ほご",
    "m": {
      "en": "protection",
      "zh-TW": "保護",
      "zh-CN": "保护",
      "ko": "보호",
      "vi": "bảo vệ",
      "id": "perlindungan"
    }
  },
  {
    "id": "V0721",
    "w": "保険",
    "r": "ほけん",
    "m": {
      "en": "insurance",
      "zh-TW": "保險",
      "zh-CN": "保险",
      "ko": "보험",
      "vi": "bảo hiểm",
      "id": "asuransi"
    }
  },
  {
    "id": "V0722",
    "w": "保証",
    "r": "ほしょう",
    "m": {
      "en": "guarantee",
      "zh-TW": "保證",
      "zh-CN": "保证",
      "ko": "보증",
      "vi": "bảo đảm",
      "id": "jaminan"
    }
  },
  {
    "id": "V0723",
    "w": "補助",
    "r": "ほじょ",
    "m": {
      "en": "assistance",
      "zh-TW": "輔助",
      "zh-CN": "辅助",
      "ko": "보조",
      "vi": "hỗ trợ",
      "id": "bantuan"
    }
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
      "id": "tipis"
    }
  },
  {
    "id": "V0725",
    "w": "骨",
    "r": "ほね",
    "m": {
      "en": "bone",
      "zh-TW": "骨頭",
      "zh-CN": "骨头",
      "ko": "뼈",
      "vi": "xương",
      "id": "tulang"
    }
  },
  {
    "id": "V0726",
    "w": "翻訳",
    "r": "ほんやく",
    "m": {
      "en": "translation",
      "zh-TW": "翻譯",
      "zh-CN": "翻译",
      "ko": "번역",
      "vi": "dịch thuật",
      "id": "terjemahan"
    }
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
      "id": "notification"
    }
  },
  {
    "id": "V0728",
    "w": "預金",
    "r": "よきん",
    "m": {
      "en": "deposit",
      "zh-TW": "預金",
      "zh-CN": "預金",
      "ko": "deposit",
      "vi": "deposit",
      "id": "deposit"
    }
  },
  {
    "id": "V0729",
    "w": "貯金",
    "r": "ちょきん",
    "m": {
      "en": "savings",
      "zh-TW": "貯金",
      "zh-CN": "貯金",
      "ko": "savings",
      "vi": "savings",
      "id": "savings"
    }
  },
  {
    "id": "V0730",
    "w": "貯める",
    "r": "ためる",
    "m": {
      "en": "to save",
      "zh-TW": "貯める",
      "zh-CN": "貯める",
      "ko": "to save",
      "vi": "to save",
      "id": "to save"
    }
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
      "id": "street"
    }
  },
  {
    "id": "V0732",
    "w": "道路",
    "r": "どうろ",
    "m": {
      "en": "road",
      "zh-TW": "道路",
      "zh-CN": "道路",
      "ko": "road",
      "vi": "road",
      "id": "road"
    }
  },
  {
    "id": "V0733",
    "w": "横断",
    "r": "おうだん",
    "m": {
      "en": "crossing",
      "zh-TW": "横断",
      "zh-CN": "横断",
      "ko": "crossing",
      "vi": "crossing",
      "id": "crossing"
    }
  },
  {
    "id": "V0734",
    "w": "信号",
    "r": "しんごう",
    "m": {
      "en": "signal",
      "zh-TW": "信号",
      "zh-CN": "信号",
      "ko": "signal",
      "vi": "signal",
      "id": "signal"
    }
  },
  {
    "id": "V0735",
    "w": "交差点",
    "r": "こうさてん",
    "m": {
      "en": "intersection",
      "zh-TW": "交差点",
      "zh-CN": "交差点",
      "ko": "intersection",
      "vi": "intersection",
      "id": "intersection"
    }
  },
  {
    "id": "V0736",
    "w": "真っ直ぐ",
    "r": "まっすぐ",
    "m": {
      "en": "straight",
      "zh-TW": "真っ直ぐ",
      "zh-CN": "真っ直ぐ",
      "ko": "straight",
      "vi": "straight",
      "id": "straight"
    }
  },
  {
    "id": "V0737",
    "w": "右側",
    "r": "みぎがわ",
    "m": {
      "en": "right side",
      "zh-TW": "右側",
      "zh-CN": "右側",
      "ko": "right side",
      "vi": "right side",
      "id": "right side"
    }
  },
  {
    "id": "V0738",
    "w": "左側",
    "r": "ひだりがわ",
    "m": {
      "en": "left side",
      "zh-TW": "左側",
      "zh-CN": "左側",
      "ko": "left side",
      "vi": "left side",
      "id": "left side"
    }
  },
  {
    "id": "V0739",
    "w": "向こう",
    "r": "むこう",
    "m": {
      "en": "over there",
      "zh-TW": "向こう",
      "zh-CN": "向こう",
      "ko": "over there",
      "vi": "over there",
      "id": "over there"
    }
  },
  {
    "id": "V0740",
    "w": "正面",
    "r": "しょうめん",
    "m": {
      "en": "front",
      "zh-TW": "正面",
      "zh-CN": "正面",
      "ko": "front",
      "vi": "front",
      "id": "front"
    }
  },
  {
    "id": "V0741",
    "w": "建物",
    "r": "たてもの",
    "m": {
      "en": "building",
      "zh-TW": "建物",
      "zh-CN": "建物",
      "ko": "building",
      "vi": "building",
      "id": "building"
    }
  },
  {
    "id": "V0742",
    "w": "建設",
    "r": "けんせつ",
    "m": {
      "en": "construction",
      "zh-TW": "建設",
      "zh-CN": "建設",
      "ko": "construction",
      "vi": "construction",
      "id": "construction"
    }
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
      "id": "construction work"
    }
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
      "id": "plan"
    }
  },
  {
    "id": "V0745",
    "w": "予定",
    "r": "よてい",
    "m": {
      "en": "schedule",
      "zh-TW": "予定",
      "zh-CN": "予定",
      "ko": "schedule",
      "vi": "schedule",
      "id": "schedule"
    }
  },
  {
    "id": "V0746",
    "w": "契約",
    "r": "けいやく",
    "m": {
      "en": "contract",
      "zh-TW": "契約",
      "zh-CN": "契約",
      "ko": "contract",
      "vi": "contract",
      "id": "contract"
    }
  },
  {
    "id": "V0747",
    "w": "政府",
    "r": "せいふ",
    "m": {
      "en": "government",
      "zh-TW": "政府",
      "zh-CN": "政府",
      "ko": "government",
      "vi": "government",
      "id": "government"
    }
  },
  {
    "id": "V0748",
    "w": "地球",
    "r": "ちきゅう",
    "m": {
      "en": "earth",
      "zh-TW": "地球",
      "zh-CN": "地球",
      "ko": "earth",
      "vi": "earth",
      "id": "earth"
    }
  },
  {
    "id": "V0749",
    "w": "宇宙",
    "r": "うちゅう",
    "m": {
      "en": "universe",
      "zh-TW": "宇宙",
      "zh-CN": "宇宙",
      "ko": "universe",
      "vi": "universe",
      "id": "universe"
    }
  },
  {
    "id": "V0750",
    "w": "温暖",
    "r": "おんだん",
    "m": {
      "en": "warm",
      "zh-TW": "温暖",
      "zh-CN": "温暖",
      "ko": "warm",
      "vi": "warm",
      "id": "warm"
    }
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
      "id": "cold"
    }
  },
  {
    "id": "V0752",
    "w": "湿度",
    "r": "しつど",
    "m": {
      "en": "humidity",
      "zh-TW": "湿度",
      "zh-CN": "湿度",
      "ko": "humidity",
      "vi": "humidity",
      "id": "humidity"
    }
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
      "id": "weather"
    }
  },
  {
    "id": "V0754",
    "w": "気象",
    "r": "きしょう",
    "m": {
      "en": "weather",
      "zh-TW": "気象",
      "zh-CN": "気象",
      "ko": "weather",
      "vi": "weather",
      "id": "weather"
    }
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
      "id": "forecast"
    }
  },
  {
    "id": "V0756",
    "w": "確認",
    "r": "かくにん",
    "m": {
      "en": "confirmation",
      "zh-TW": "確認",
      "zh-CN": "確認",
      "ko": "confirmation",
      "vi": "confirmation",
      "id": "confirmation"
    }
  },
  {
    "id": "V0757",
    "w": "確実",
    "r": "かくじつ",
    "m": {
      "en": "certain",
      "zh-TW": "確実",
      "zh-CN": "確実",
      "ko": "certain",
      "vi": "certain",
      "id": "certain"
    }
  },
  {
    "id": "V0758",
    "w": "間違い",
    "r": "まちがい",
    "m": {
      "en": "mistake",
      "zh-TW": "間違い",
      "zh-CN": "間違い",
      "ko": "mistake",
      "vi": "mistake",
      "id": "mistake"
    }
  },
  {
    "id": "V0759",
    "w": "成功",
    "r": "せいこう",
    "m": {
      "en": "success",
      "zh-TW": "成功",
      "zh-CN": "成功",
      "ko": "success",
      "vi": "success",
      "id": "success"
    }
  },
  {
    "id": "V0760",
    "w": "手段",
    "r": "しゅだん",
    "m": {
      "en": "means",
      "zh-TW": "手段",
      "zh-CN": "手段",
      "ko": "means",
      "vi": "means",
      "id": "means"
    }
  },
  {
    "id": "V0761",
    "w": "位置",
    "r": "いち",
    "m": {
      "en": "position",
      "zh-TW": "位置",
      "zh-CN": "位置",
      "ko": "position",
      "vi": "position",
      "id": "position"
    }
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
      "id": "place"
    }
  },
  {
    "id": "V0763",
    "w": "地点",
    "r": "ちてん",
    "m": {
      "en": "point",
      "zh-TW": "地点",
      "zh-CN": "地点",
      "ko": "point",
      "vi": "point",
      "id": "point"
    }
  },
  {
    "id": "V0764",
    "w": "程度",
    "r": "ていど",
    "m": {
      "en": "degree",
      "zh-TW": "程度",
      "zh-CN": "程度",
      "ko": "degree",
      "vi": "degree",
      "id": "degree"
    }
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
      "id": "same"
    }
  },
  {
    "id": "V0766",
    "w": "違い",
    "r": "ちがい",
    "m": {
      "en": "difference",
      "zh-TW": "違い",
      "zh-CN": "違い",
      "ko": "difference",
      "vi": "difference",
      "id": "difference"
    }
  },
  {
    "id": "V0767",
    "w": "差",
    "r": "さ",
    "m": {
      "en": "difference",
      "zh-TW": "差",
      "zh-CN": "差",
      "ko": "difference",
      "vi": "difference",
      "id": "difference"
    }
  },
  {
    "id": "V0768",
    "w": "種類",
    "r": "しゅるい",
    "m": {
      "en": "type",
      "zh-TW": "種類",
      "zh-CN": "種類",
      "ko": "type",
      "vi": "type",
      "id": "type"
    }
  },
  {
    "id": "V0769",
    "w": "分類",
    "r": "ぶんるい",
    "m": {
      "en": "classification",
      "zh-TW": "分類",
      "zh-CN": "分類",
      "ko": "classification",
      "vi": "classification",
      "id": "classification"
    }
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
      "id": "distinction"
    }
  },
  {
    "id": "V0771",
    "w": "選ぶ",
    "r": "えらぶ",
    "m": {
      "en": "to choose",
      "zh-TW": "選ぶ",
      "zh-CN": "選ぶ",
      "ko": "to choose",
      "vi": "to choose",
      "id": "to choose"
    }
  },
  {
    "id": "V0772",
    "w": "選択",
    "r": "せんたく",
    "m": {
      "en": "choice",
      "zh-TW": "選択",
      "zh-CN": "選択",
      "ko": "choice",
      "vi": "choice",
      "id": "choice"
    }
  },
  {
    "id": "V0773",
    "w": "決定",
    "r": "けってい",
    "m": {
      "en": "decision",
      "zh-TW": "決定",
      "zh-CN": "決定",
      "ko": "decision",
      "vi": "decision",
      "id": "decision"
    }
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
      "id": "thought"
    }
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
      "id": "opinion"
    }
  },
  {
    "id": "V0776",
    "w": "主張",
    "r": "しゅちょう",
    "m": {
      "en": "claim",
      "zh-TW": "主張",
      "zh-CN": "主張",
      "ko": "claim",
      "vi": "claim",
      "id": "claim"
    }
  },
  {
    "id": "V0777",
    "w": "賛成",
    "r": "さんせい",
    "m": {
      "en": "approval",
      "zh-TW": "賛成",
      "zh-CN": "賛成",
      "ko": "approval",
      "vi": "approval",
      "id": "approval"
    }
  },
  {
    "id": "V0778",
    "w": "許可",
    "r": "きょか",
    "m": {
      "en": "permission",
      "zh-TW": "許可",
      "zh-CN": "許可",
      "ko": "permission",
      "vi": "permission",
      "id": "permission"
    }
  },
  {
    "id": "V0779",
    "w": "制限",
    "r": "せいげん",
    "m": {
      "en": "restriction",
      "zh-TW": "制限",
      "zh-CN": "制限",
      "ko": "restriction",
      "vi": "restriction",
      "id": "restriction"
    }
  },
  {
    "id": "V0780",
    "w": "権利",
    "r": "けんり",
    "m": {
      "en": "right",
      "zh-TW": "権利",
      "zh-CN": "権利",
      "ko": "right",
      "vi": "right",
      "id": "right"
    }
  },
  {
    "id": "V0781",
    "w": "義務",
    "r": "ぎむ",
    "m": {
      "en": "duty",
      "zh-TW": "義務",
      "zh-CN": "義務",
      "ko": "duty",
      "vi": "duty",
      "id": "duty"
    }
  },
  {
    "id": "V0782",
    "w": "責任",
    "r": "せきにん",
    "m": {
      "en": "responsibility",
      "zh-TW": "責任",
      "zh-CN": "責任",
      "ko": "responsibility",
      "vi": "responsibility",
      "id": "responsibility"
    }
  },
  {
    "id": "V0783",
    "w": "担当",
    "r": "たんとう",
    "m": {
      "en": "charge",
      "zh-TW": "担当",
      "zh-CN": "担当",
      "ko": "charge",
      "vi": "charge",
      "id": "charge"
    }
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
      "id": "person in charge"
    }
  },
  {
    "id": "V0785",
    "w": "役割",
    "r": "やくわり",
    "m": {
      "en": "role",
      "zh-TW": "役割",
      "zh-CN": "役割",
      "ko": "role",
      "vi": "role",
      "id": "role"
    }
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
      "id": "work"
    }
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
      "id": "task"
    }
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
      "id": "business"
    }
  },
  {
    "id": "V0789",
    "w": "職業",
    "r": "しょくぎょう",
    "m": {
      "en": "occupation",
      "zh-TW": "職業",
      "zh-CN": "職業",
      "ko": "occupation",
      "vi": "occupation",
      "id": "occupation"
    }
  },
  {
    "id": "V0790",
    "w": "勤務",
    "r": "きんむ",
    "m": {
      "en": "work",
      "zh-TW": "勤務",
      "zh-CN": "勤務",
      "ko": "work",
      "vi": "work",
      "id": "work"
    }
  },
  {
    "id": "V0791",
    "w": "出勤",
    "r": "しゅっきん",
    "m": {
      "en": "going to work",
      "zh-TW": "出勤",
      "zh-CN": "出勤",
      "ko": "going to work",
      "vi": "going to work",
      "id": "going to work"
    }
  },
  {
    "id": "V0792",
    "w": "退勤",
    "r": "たいきん",
    "m": {
      "en": "leaving work",
      "zh-TW": "退勤",
      "zh-CN": "退勤",
      "ko": "leaving work",
      "vi": "leaving work",
      "id": "leaving work"
    }
  },
  {
    "id": "V0793",
    "w": "残業",
    "r": "ざんぎょう",
    "m": {
      "en": "overtime",
      "zh-TW": "残業",
      "zh-CN": "残業",
      "ko": "overtime",
      "vi": "overtime",
      "id": "overtime"
    }
  },
  {
    "id": "V0794",
    "w": "休憩",
    "r": "きゅうけい",
    "m": {
      "en": "break",
      "zh-TW": "休憩",
      "zh-CN": "休憩",
      "ko": "break",
      "vi": "break",
      "id": "break"
    }
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
      "id": "holiday"
    }
  },
  {
    "id": "V0796",
    "w": "祝日",
    "r": "しゅくじつ",
    "m": {
      "en": "national holiday",
      "zh-TW": "祝日",
      "zh-CN": "祝日",
      "ko": "national holiday",
      "vi": "national holiday",
      "id": "national holiday"
    }
  },
  {
    "id": "V0797",
    "w": "連休",
    "r": "れんきゅう",
    "m": {
      "en": "consecutive holidays",
      "zh-TW": "連休",
      "zh-CN": "連休",
      "ko": "consecutive holidays",
      "vi": "consecutive holidays",
      "id": "consecutive holidays"
    }
  },
  {
    "id": "V0798",
    "w": "有給",
    "r": "ゆうきゅう",
    "m": {
      "en": "paid leave",
      "zh-TW": "有給",
      "zh-CN": "有給",
      "ko": "paid leave",
      "vi": "paid leave",
      "id": "paid leave"
    }
  },
  {
    "id": "V0799",
    "w": "欠席",
    "r": "けっせき",
    "m": {
      "en": "absence",
      "zh-TW": "欠席",
      "zh-CN": "欠席",
      "ko": "absence",
      "vi": "absence",
      "id": "absence"
    }
  },
  {
    "id": "V0800",
    "w": "出席",
    "r": "しゅっせき",
    "m": {
      "en": "attendance",
      "zh-TW": "出席",
      "zh-CN": "出席",
      "ko": "attendance",
      "vi": "attendance",
      "id": "attendance"
    }
  },
  {
    "id": "V0801",
    "w": "申込",
    "r": "もうしこみ",
    "m": {
      "en": "application",
      "zh-TW": "申込",
      "zh-CN": "申込",
      "ko": "application",
      "vi": "application",
      "id": "application"
    }
  },
  {
    "id": "V0802",
    "w": "受付",
    "r": "うけつけ",
    "m": {
      "en": "reception",
      "zh-TW": "受付",
      "zh-CN": "受付",
      "ko": "reception",
      "vi": "reception",
      "id": "reception"
    }
  },
  {
    "id": "V0803",
    "w": "手続き",
    "r": "てつづき",
    "m": {
      "en": "procedure",
      "zh-TW": "手続き",
      "zh-CN": "手続き",
      "ko": "procedure",
      "vi": "procedure",
      "id": "procedure"
    }
  },
  {
    "id": "V0804",
    "w": "資料",
    "r": "しりょう",
    "m": {
      "en": "material",
      "zh-TW": "資料",
      "zh-CN": "資料",
      "ko": "material",
      "vi": "material",
      "id": "material"
    }
  },
  {
    "id": "V0805",
    "w": "携帯",
    "r": "けいたい",
    "m": {
      "en": "mobile",
      "zh-TW": "携帯",
      "zh-CN": "携帯",
      "ko": "mobile",
      "vi": "mobile",
      "id": "mobile"
    }
  },
  {
    "id": "V0806",
    "w": "番号",
    "r": "ばんごう",
    "m": {
      "en": "number",
      "zh-TW": "番号",
      "zh-CN": "番号",
      "ko": "number",
      "vi": "number",
      "id": "number"
    }
  },
  {
    "id": "V0807",
    "w": "氏名",
    "r": "しめい",
    "m": {
      "en": "name",
      "zh-TW": "氏名",
      "zh-CN": "氏名",
      "ko": "name",
      "vi": "name",
      "id": "name"
    }
  },
  {
    "id": "V0808",
    "w": "性別",
    "r": "せいべつ",
    "m": {
      "en": "gender",
      "zh-TW": "性別",
      "zh-CN": "性別",
      "ko": "gender",
      "vi": "gender",
      "id": "gender"
    }
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
      "id": "date of birth"
    }
  },
  {
    "id": "V0810",
    "w": "独身",
    "r": "どくしん",
    "m": {
      "en": "single",
      "zh-TW": "独身",
      "zh-CN": "独身",
      "ko": "single",
      "vi": "single",
      "id": "single"
    }
  },
  {
    "id": "V0811",
    "w": "既婚",
    "r": "きこん",
    "m": {
      "en": "married",
      "zh-TW": "既婚",
      "zh-CN": "既婚",
      "ko": "married",
      "vi": "married",
      "id": "married"
    }
  },
  {
    "id": "V0812",
    "w": "離婚",
    "r": "りこん",
    "m": {
      "en": "divorce",
      "zh-TW": "離婚",
      "zh-CN": "離婚",
      "ko": "divorce",
      "vi": "divorce",
      "id": "divorce"
    }
  },
  {
    "id": "V0813",
    "w": "婚約",
    "r": "こんやく",
    "m": {
      "en": "engagement",
      "zh-TW": "婚約",
      "zh-CN": "婚約",
      "ko": "engagement",
      "vi": "engagement",
      "id": "engagement"
    }
  },
  {
    "id": "V0814",
    "w": "交際",
    "r": "こうさい",
    "m": {
      "en": "relationship",
      "zh-TW": "交際",
      "zh-CN": "交際",
      "ko": "relationship",
      "vi": "relationship",
      "id": "relationship"
    }
  },
  {
    "id": "V0815",
    "w": "恋愛",
    "r": "れんあい",
    "m": {
      "en": "romance",
      "zh-TW": "恋愛",
      "zh-CN": "恋愛",
      "ko": "romance",
      "vi": "romance",
      "id": "romance"
    }
  },
  {
    "id": "V0816",
    "w": "友情",
    "r": "ゆうじょう",
    "m": {
      "en": "friendship",
      "zh-TW": "友情",
      "zh-CN": "友情",
      "ko": "friendship",
      "vi": "friendship",
      "id": "friendship"
    }
  },
  {
    "id": "V0817",
    "w": "信頼",
    "r": "しんらい",
    "m": {
      "en": "trust",
      "zh-TW": "信頼",
      "zh-CN": "信頼",
      "ko": "trust",
      "vi": "trust",
      "id": "trust"
    }
  },
  {
    "id": "V0818",
    "w": "尊敬",
    "r": "そんけい",
    "m": {
      "en": "respect",
      "zh-TW": "尊敬",
      "zh-CN": "尊敬",
      "ko": "respect",
      "vi": "respect",
      "id": "respect"
    }
  },
  {
    "id": "V0819",
    "w": "感謝",
    "r": "かんしゃ",
    "m": {
      "en": "gratitude",
      "zh-TW": "感謝",
      "zh-CN": "感謝",
      "ko": "gratitude",
      "vi": "gratitude",
      "id": "gratitude"
    }
  },
  {
    "id": "V0820",
    "w": "励ます",
    "r": "はげます",
    "m": {
      "en": "to encourage",
      "zh-TW": "励ます",
      "zh-CN": "励ます",
      "ko": "to encourage",
      "vi": "to encourage",
      "id": "to encourage"
    }
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
      "id": "determination"
    }
  },
  {
    "id": "V0822",
    "w": "覚悟",
    "r": "かくご",
    "m": {
      "en": "resolution",
      "zh-TW": "覚悟",
      "zh-CN": "覚悟",
      "ko": "resolution",
      "vi": "resolution",
      "id": "resolution"
    }
  },
  {
    "id": "V0823",
    "w": "努力",
    "r": "どりょく",
    "m": {
      "en": "effort",
      "zh-TW": "努力",
      "zh-CN": "努力",
      "ko": "effort",
      "vi": "effort",
      "id": "effort"
    }
  },
  {
    "id": "V0824",
    "w": "頑張る",
    "r": "がんばる",
    "m": {
      "en": "to do one's best",
      "zh-TW": "頑張る",
      "zh-CN": "頑張る",
      "ko": "to do one's best",
      "vi": "to do one's best",
      "id": "to do one's best"
    }
  },
  {
    "id": "V0825",
    "w": "諦める",
    "r": "あきらめる",
    "m": {
      "en": "to give up",
      "zh-TW": "諦める",
      "zh-CN": "諦める",
      "ko": "to give up",
      "vi": "to give up",
      "id": "to give up"
    }
  },
  {
    "id": "V0826",
    "w": "繰り返す",
    "r": "くりかえす",
    "m": {
      "en": "to repeat",
      "zh-TW": "繰り返す",
      "zh-CN": "繰り返す",
      "ko": "to repeat",
      "vi": "to repeat",
      "id": "to repeat"
    }
  },
  {
    "id": "V0827",
    "w": "訓練",
    "r": "くんれん",
    "m": {
      "en": "training",
      "zh-TW": "訓練",
      "zh-CN": "訓練",
      "ko": "training",
      "vi": "training",
      "id": "training"
    }
  },
  {
    "id": "V0828",
    "w": "知識",
    "r": "ちしき",
    "m": {
      "en": "knowledge",
      "zh-TW": "知識",
      "zh-CN": "知識",
      "ko": "knowledge",
      "vi": "knowledge",
      "id": "knowledge"
    }
  },
  {
    "id": "V0829",
    "w": "才能",
    "r": "さいのう",
    "m": {
      "en": "talent",
      "zh-TW": "才能",
      "zh-CN": "才能",
      "ko": "talent",
      "vi": "talent",
      "id": "talent"
    }
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
      "id": "strength"
    }
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
      "id": "weakness"
    }
  },
  {
    "id": "V0832",
    "w": "性格",
    "r": "せいかく",
    "m": {
      "en": "personality",
      "zh-TW": "性格",
      "zh-CN": "性格",
      "ko": "personality",
      "vi": "personality",
      "id": "personality"
    }
  },
  {
    "id": "V0833",
    "w": "態度",
    "r": "たいど",
    "m": {
      "en": "attitude",
      "zh-TW": "態度",
      "zh-CN": "態度",
      "ko": "attitude",
      "vi": "attitude",
      "id": "attitude"
    }
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
      "id": "behavior"
    }
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
      "id": "concern"
    }
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
      "id": "attention"
    }
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
      "id": "concentration"
    }
  },
  {
    "id": "V0838",
    "w": "真剣",
    "r": "しんけん",
    "m": {
      "en": "serious",
      "zh-TW": "真剣",
      "zh-CN": "真剣",
      "ko": "serious",
      "vi": "serious",
      "id": "serious"
    }
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
      "id": "seriousness"
    }
  },
  {
    "id": "V0840",
    "w": "冗談",
    "r": "じょうだん",
    "m": {
      "en": "joke",
      "zh-TW": "冗談",
      "zh-CN": "冗談",
      "ko": "joke",
      "vi": "joke",
      "id": "joke"
    }
  },
  {
    "id": "V0841",
    "w": "笑い",
    "r": "わらい",
    "m": {
      "en": "laughter",
      "zh-TW": "笑い",
      "zh-CN": "笑い",
      "ko": "laughter",
      "vi": "laughter",
      "id": "laughter"
    }
  },
  {
    "id": "V0842",
    "w": "感動",
    "r": "かんどう",
    "m": {
      "en": "emotion",
      "zh-TW": "感動",
      "zh-CN": "感動",
      "ko": "emotion",
      "vi": "emotion",
      "id": "emotion"
    }
  },
  {
    "id": "V0843",
    "w": "感想",
    "r": "かんそう",
    "m": {
      "en": "impression",
      "zh-TW": "感想",
      "zh-CN": "感想",
      "ko": "impression",
      "vi": "impression",
      "id": "impression"
    }
  },
  {
    "id": "V0844",
    "w": "印象",
    "r": "いんしょう",
    "m": {
      "en": "impression",
      "zh-TW": "印象",
      "zh-CN": "印象",
      "ko": "impression",
      "vi": "impression",
      "id": "impression"
    }
  },
  {
    "id": "V0845",
    "w": "記憶",
    "r": "きおく",
    "m": {
      "en": "memory",
      "zh-TW": "記憶",
      "zh-CN": "記憶",
      "ko": "memory",
      "vi": "memory",
      "id": "memory"
    }
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
      "id": "memory"
    }
  },
  {
    "id": "V0847",
    "w": "忘れる",
    "r": "わすれる",
    "m": {
      "en": "to forget",
      "zh-TW": "忘れる",
      "zh-CN": "忘れる",
      "ko": "to forget",
      "vi": "to forget",
      "id": "to forget"
    }
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
      "id": "to remember"
    }
  },
  {
    "id": "V0849",
    "w": "理解",
    "r": "りかい",
    "m": {
      "en": "understanding",
      "zh-TW": "理解",
      "zh-CN": "理解",
      "ko": "understanding",
      "vi": "understanding",
      "id": "understanding"
    }
  },
  {
    "id": "V0850",
    "w": "納得",
    "r": "なっとく",
    "m": {
      "en": "consent",
      "zh-TW": "納得",
      "zh-CN": "納得",
      "ko": "consent",
      "vi": "consent",
      "id": "consent"
    }
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
      "id": "statement"
    }
  },
  {
    "id": "V0852",
    "w": "回答",
    "r": "かいとう",
    "m": {
      "en": "answer",
      "zh-TW": "回答",
      "zh-CN": "回答",
      "ko": "answer",
      "vi": "answer",
      "id": "answer"
    }
  },
  {
    "id": "V0853",
    "w": "解答",
    "r": "かいとう",
    "m": {
      "en": "solution",
      "zh-TW": "解答",
      "zh-CN": "解答",
      "ko": "solution",
      "vi": "solution",
      "id": "solution"
    }
  },
  {
    "id": "V0854",
    "w": "正解",
    "r": "せいかい",
    "m": {
      "en": "correct answer",
      "zh-TW": "正解",
      "zh-CN": "正解",
      "ko": "correct answer",
      "vi": "correct answer",
      "id": "correct answer"
    }
  },
  {
    "id": "V0855",
    "w": "不正解",
    "r": "ふせいかい",
    "m": {
      "en": "wrong answer",
      "zh-TW": "不正解",
      "zh-CN": "不正解",
      "ko": "wrong answer",
      "vi": "wrong answer",
      "id": "wrong answer"
    }
  },
  {
    "id": "V0856",
    "w": "採点",
    "r": "さいてん",
    "m": {
      "en": "grading",
      "zh-TW": "採点",
      "zh-CN": "採点",
      "ko": "grading",
      "vi": "grading",
      "id": "grading"
    }
  },
  {
    "id": "V0857",
    "w": "成績",
    "r": "せいせき",
    "m": {
      "en": "grade",
      "zh-TW": "成績",
      "zh-CN": "成績",
      "ko": "grade",
      "vi": "grade",
      "id": "grade"
    }
  },
  {
    "id": "V0858",
    "w": "合格",
    "r": "ごうかく",
    "m": {
      "en": "passing",
      "zh-TW": "合格",
      "zh-CN": "合格",
      "ko": "passing",
      "vi": "passing",
      "id": "passing"
    }
  },
  {
    "id": "V0859",
    "w": "不合格",
    "r": "ふごうかく",
    "m": {
      "en": "failure",
      "zh-TW": "不合格",
      "zh-CN": "不合格",
      "ko": "failure",
      "vi": "failure",
      "id": "failure"
    }
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
      "id": "advancing"
    }
  },
  {
    "id": "V0861",
    "w": "就職",
    "r": "しゅうしょく",
    "m": {
      "en": "employment",
      "zh-TW": "就職",
      "zh-CN": "就職",
      "ko": "employment",
      "vi": "employment",
      "id": "employment"
    }
  },
  {
    "id": "V0862",
    "w": "転職",
    "r": "てんしょく",
    "m": {
      "en": "job change",
      "zh-TW": "転職",
      "zh-CN": "転職",
      "ko": "job change",
      "vi": "job change",
      "id": "job change"
    }
  },
  {
    "id": "V0863",
    "w": "退職",
    "r": "たいしょく",
    "m": {
      "en": "retirement",
      "zh-TW": "退職",
      "zh-CN": "退職",
      "ko": "retirement",
      "vi": "retirement",
      "id": "retirement"
    }
  },
  {
    "id": "V0864",
    "w": "収入",
    "r": "しゅうにゅう",
    "m": {
      "en": "income",
      "zh-TW": "収入",
      "zh-CN": "収入",
      "ko": "income",
      "vi": "income",
      "id": "income"
    }
  },
  {
    "id": "V0865",
    "w": "支出",
    "r": "ししゅつ",
    "m": {
      "en": "expense",
      "zh-TW": "支出",
      "zh-CN": "支出",
      "ko": "expense",
      "vi": "expense",
      "id": "expense"
    }
  },
  {
    "id": "V0866",
    "w": "貯蓄",
    "r": "ちょちく",
    "m": {
      "en": "savings",
      "zh-TW": "貯蓄",
      "zh-CN": "貯蓄",
      "ko": "savings",
      "vi": "savings",
      "id": "savings"
    }
  },
  {
    "id": "V0867",
    "w": "投資",
    "r": "とうし",
    "m": {
      "en": "investment",
      "zh-TW": "投資",
      "zh-CN": "投資",
      "ko": "investment",
      "vi": "investment",
      "id": "investment"
    }
  },
  {
    "id": "V0868",
    "w": "利益",
    "r": "りえき",
    "m": {
      "en": "profit",
      "zh-TW": "利益",
      "zh-CN": "利益",
      "ko": "profit",
      "vi": "profit",
      "id": "profit"
    }
  },
  {
    "id": "V0869",
    "w": "損失",
    "r": "そんしつ",
    "m": {
      "en": "loss",
      "zh-TW": "損失",
      "zh-CN": "損失",
      "ko": "loss",
      "vi": "loss",
      "id": "loss"
    }
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
      "id": "debt"
    }
  },
  {
    "id": "V0871",
    "w": "返済",
    "r": "へんさい",
    "m": {
      "en": "repayment",
      "zh-TW": "返済",
      "zh-CN": "返済",
      "ko": "repayment",
      "vi": "repayment",
      "id": "repayment"
    }
  },
  {
    "id": "V0872",
    "w": "請求",
    "r": "せいきゅう",
    "m": {
      "en": "bill",
      "zh-TW": "請求",
      "zh-CN": "請求",
      "ko": "bill",
      "vi": "bill",
      "id": "bill"
    }
  },
  {
    "id": "V0873",
    "w": "支払い",
    "r": "しはらい",
    "m": {
      "en": "payment",
      "zh-TW": "支払い",
      "zh-CN": "支払い",
      "ko": "payment",
      "vi": "payment",
      "id": "payment"
    }
  },
  {
    "id": "V0874",
    "w": "現金",
    "r": "げんきん",
    "m": {
      "en": "cash",
      "zh-TW": "現金",
      "zh-CN": "現金",
      "ko": "cash",
      "vi": "cash",
      "id": "cash"
    }
  },
  {
    "id": "V0875",
    "w": "小銭",
    "r": "こぜに",
    "m": {
      "en": "coins",
      "zh-TW": "小銭",
      "zh-CN": "小銭",
      "ko": "coins",
      "vi": "coins",
      "id": "coins"
    }
  },
  {
    "id": "V0876",
    "w": "紙幣",
    "r": "しへい",
    "m": {
      "en": "bill",
      "zh-TW": "紙幣",
      "zh-CN": "紙幣",
      "ko": "bill",
      "vi": "bill",
      "id": "bill"
    }
  },
  {
    "id": "V0877",
    "w": "両替",
    "r": "りょうがえ",
    "m": {
      "en": "exchange",
      "zh-TW": "両替",
      "zh-CN": "両替",
      "ko": "exchange",
      "vi": "exchange",
      "id": "exchange"
    }
  },
  {
    "id": "V0878",
    "w": "振込",
    "r": "ふりこみ",
    "m": {
      "en": "transfer",
      "zh-TW": "振込",
      "zh-CN": "振込",
      "ko": "transfer",
      "vi": "transfer",
      "id": "transfer"
    }
  },
  {
    "id": "V0879",
    "w": "預け入れ",
    "r": "あずけいれ",
    "m": {
      "en": "deposit",
      "zh-TW": "預け入れ",
      "zh-CN": "預け入れ",
      "ko": "deposit",
      "vi": "deposit",
      "id": "deposit"
    }
  },
  {
    "id": "V0880",
    "w": "口座",
    "r": "こうざ",
    "m": {
      "en": "account",
      "zh-TW": "口座",
      "zh-CN": "口座",
      "ko": "account",
      "vi": "account",
      "id": "account"
    }
  },
  {
    "id": "V0881",
    "w": "暗証番号",
    "r": "あんしょうばんごう",
    "m": {
      "en": "PIN",
      "zh-TW": "暗証番号",
      "zh-CN": "暗証番号",
      "ko": "PIN",
      "vi": "PIN",
      "id": "PIN"
    }
  },
  {
    "id": "V0882",
    "w": "手数料",
    "r": "てすうりょう",
    "m": {
      "en": "fee",
      "zh-TW": "手数料",
      "zh-CN": "手数料",
      "ko": "fee",
      "vi": "fee",
      "id": "fee"
    }
  },
  {
    "id": "V0883",
    "w": "無料",
    "r": "むりょう",
    "m": {
      "en": "free",
      "zh-TW": "無料",
      "zh-CN": "無料",
      "ko": "free",
      "vi": "free",
      "id": "free"
    }
  },
  {
    "id": "V0884",
    "w": "有料",
    "r": "ゆうりょう",
    "m": {
      "en": "paid",
      "zh-TW": "有料",
      "zh-CN": "有料",
      "ko": "paid",
      "vi": "paid",
      "id": "paid"
    }
  },
  {
    "id": "V0885",
    "w": "価格",
    "r": "かかく",
    "m": {
      "en": "price",
      "zh-TW": "価格",
      "zh-CN": "価格",
      "ko": "price",
      "vi": "price",
      "id": "price"
    }
  },
  {
    "id": "V0886",
    "w": "定価",
    "r": "ていか",
    "m": {
      "en": "fixed price",
      "zh-TW": "定価",
      "zh-CN": "定価",
      "ko": "fixed price",
      "vi": "fixed price",
      "id": "fixed price"
    }
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
      "id": "discount"
    }
  },
  {
    "id": "V0888",
    "w": "半額",
    "r": "はんがく",
    "m": {
      "en": "half price",
      "zh-TW": "半額",
      "zh-CN": "半額",
      "ko": "half price",
      "vi": "half price",
      "id": "half price"
    }
  },
  {
    "id": "V0889",
    "w": "税込",
    "r": "ぜいこみ",
    "m": {
      "en": "tax included",
      "zh-TW": "税込",
      "zh-CN": "税込",
      "ko": "tax included",
      "vi": "tax included",
      "id": "tax included"
    }
  },
  {
    "id": "V0890",
    "w": "税抜",
    "r": "ぜいぬき",
    "m": {
      "en": "excluding tax",
      "zh-TW": "税抜",
      "zh-CN": "税抜",
      "ko": "excluding tax",
      "vi": "excluding tax",
      "id": "excluding tax"
    }
  },
  {
    "id": "V0891",
    "w": "消費税",
    "r": "しょうひぜい",
    "m": {
      "en": "consumption tax",
      "zh-TW": "消費税",
      "zh-CN": "消費税",
      "ko": "consumption tax",
      "vi": "consumption tax",
      "id": "consumption tax"
    }
  },
  {
    "id": "V0892",
    "w": "領収書",
    "r": "りょうしゅうしょ",
    "m": {
      "en": "receipt",
      "zh-TW": "領収書",
      "zh-CN": "領収書",
      "ko": "receipt",
      "vi": "receipt",
      "id": "receipt"
    }
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
      "id": "receipt"
    }
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
      "id": "shopping"
    }
  },
  {
    "id": "V0895",
    "w": "購入",
    "r": "こうにゅう",
    "m": {
      "en": "purchase",
      "zh-TW": "購入",
      "zh-CN": "購入",
      "ko": "purchase",
      "vi": "purchase",
      "id": "purchase"
    }
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
      "id": "order"
    }
  },
  {
    "id": "V0897",
    "w": "宅配",
    "r": "たくはい",
    "m": {
      "en": "home delivery",
      "zh-TW": "宅配",
      "zh-CN": "宅配",
      "ko": "home delivery",
      "vi": "home delivery",
      "id": "home delivery"
    }
  },
  {
    "id": "V0898",
    "w": "送料",
    "r": "そうりょう",
    "m": {
      "en": "shipping",
      "zh-TW": "送料",
      "zh-CN": "送料",
      "ko": "shipping",
      "vi": "shipping",
      "id": "shipping"
    }
  },
  {
    "id": "V0899",
    "w": "返品",
    "r": "へんぴん",
    "m": {
      "en": "return",
      "zh-TW": "返品",
      "zh-CN": "返品",
      "ko": "return",
      "vi": "return",
      "id": "return"
    }
  },
  {
    "id": "V0900",
    "w": "交換",
    "r": "こうかん",
    "m": {
      "en": "exchange",
      "zh-TW": "交換",
      "zh-CN": "交換",
      "ko": "exchange",
      "vi": "exchange",
      "id": "exchange"
    }
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
      "id": "repair"
    }
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
      "id": "new item"
    }
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
      "id": "used"
    }
  },
  {
    "id": "V0904",
    "w": "期限",
    "r": "きげん",
    "m": {
      "en": "deadline",
      "zh-TW": "期限",
      "zh-CN": "期限",
      "ko": "deadline",
      "vi": "deadline",
      "id": "deadline"
    }
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
      "id": "valid"
    }
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
      "id": "invalid"
    }
  },
  {
    "id": "V0907",
    "w": "期間",
    "r": "きかん",
    "m": {
      "en": "period",
      "zh-TW": "期間",
      "zh-CN": "期間",
      "ko": "period",
      "vi": "period",
      "id": "period"
    }
  },
  {
    "id": "V0908",
    "w": "日程",
    "r": "にってい",
    "m": {
      "en": "schedule",
      "zh-TW": "日程",
      "zh-CN": "日程",
      "ko": "schedule",
      "vi": "schedule",
      "id": "schedule"
    }
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
      "id": "timetable"
    }
  },
  {
    "id": "V0910",
    "w": "締め切り",
    "r": "しめきり",
    "m": {
      "en": "deadline",
      "zh-TW": "締め切り",
      "zh-CN": "締め切り",
      "ko": "deadline",
      "vi": "deadline",
      "id": "deadline"
    }
  },
  {
    "id": "V0911",
    "w": "延長",
    "r": "えんちょう",
    "m": {
      "en": "extension",
      "zh-TW": "延長",
      "zh-CN": "延長",
      "ko": "extension",
      "vi": "extension",
      "id": "extension"
    }
  },
  {
    "id": "V0912",
    "w": "短縮",
    "r": "たんしゅく",
    "m": {
      "en": "shortening",
      "zh-TW": "短縮",
      "zh-CN": "短縮",
      "ko": "shortening",
      "vi": "shortening",
      "id": "shortening"
    }
  },
  {
    "id": "V0913",
    "w": "変更",
    "r": "へんこう",
    "m": {
      "en": "change",
      "zh-TW": "変更",
      "zh-CN": "変更",
      "ko": "change",
      "vi": "change",
      "id": "change"
    }
  },
  {
    "id": "V0914",
    "w": "訂正",
    "r": "ていせい",
    "m": {
      "en": "correction",
      "zh-TW": "訂正",
      "zh-CN": "訂正",
      "ko": "correction",
      "vi": "correction",
      "id": "correction"
    }
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
      "id": "revision"
    }
  },
  {
    "id": "V0916",
    "w": "追加",
    "r": "ついか",
    "m": {
      "en": "addition",
      "zh-TW": "追加",
      "zh-CN": "追加",
      "ko": "addition",
      "vi": "addition",
      "id": "addition"
    }
  },
  {
    "id": "V0917",
    "w": "削除",
    "r": "さくじょ",
    "m": {
      "en": "deletion",
      "zh-TW": "削除",
      "zh-CN": "削除",
      "ko": "deletion",
      "vi": "deletion",
      "id": "deletion"
    }
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
      "id": "input"
    }
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
      "id": "output"
    }
  },
  {
    "id": "V0920",
    "w": "検索",
    "r": "けんさく",
    "m": {
      "en": "search",
      "zh-TW": "検索",
      "zh-CN": "検索",
      "ko": "search",
      "vi": "search",
      "id": "search"
    }
  },
  {
    "id": "V0921",
    "w": "登録",
    "r": "とうろく",
    "m": {
      "en": "registration",
      "zh-TW": "登録",
      "zh-CN": "登録",
      "ko": "registration",
      "vi": "registration",
      "id": "registration"
    }
  },
  {
    "id": "V0922",
    "w": "設定",
    "r": "せってい",
    "m": {
      "en": "setting",
      "zh-TW": "設定",
      "zh-CN": "設定",
      "ko": "setting",
      "vi": "setting",
      "id": "setting"
    }
  },
  {
    "id": "V0923",
    "w": "操作",
    "r": "そうさ",
    "m": {
      "en": "operation",
      "zh-TW": "操作",
      "zh-CN": "操作",
      "ko": "operation",
      "vi": "operation",
      "id": "operation"
    }
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
      "id": "startup"
    }
  },
  {
    "id": "V0925",
    "w": "終了",
    "r": "しゅうりょう",
    "m": {
      "en": "end",
      "zh-TW": "終了",
      "zh-CN": "終了",
      "ko": "end",
      "vi": "end",
      "id": "end"
    }
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
      "id": "restart"
    }
  },
  {
    "id": "V0927",
    "w": "更新",
    "r": "こうしん",
    "m": {
      "en": "update",
      "zh-TW": "更新",
      "zh-CN": "更新",
      "ko": "update",
      "vi": "update",
      "id": "update"
    }
  },
  {
    "id": "V0928",
    "w": "接続",
    "r": "せつぞく",
    "m": {
      "en": "connection",
      "zh-TW": "接続",
      "zh-CN": "接続",
      "ko": "connection",
      "vi": "connection",
      "id": "connection"
    }
  },
  {
    "id": "V0929",
    "w": "切断",
    "r": "せつだん",
    "m": {
      "en": "disconnection",
      "zh-TW": "切断",
      "zh-CN": "切断",
      "ko": "disconnection",
      "vi": "disconnection",
      "id": "disconnection"
    }
  },
  {
    "id": "V0930",
    "w": "充電",
    "r": "じゅうでん",
    "m": {
      "en": "charging",
      "zh-TW": "充電",
      "zh-CN": "充電",
      "ko": "charging",
      "vi": "charging",
      "id": "charging"
    }
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
      "id": "battery"
    }
  },
  {
    "id": "V0932",
    "w": "電源",
    "r": "でんげん",
    "m": {
      "en": "power",
      "zh-TW": "電源",
      "zh-CN": "電源",
      "ko": "power",
      "vi": "power",
      "id": "power"
    }
  },
  {
    "id": "V0933",
    "w": "画面",
    "r": "がめん",
    "m": {
      "en": "screen",
      "zh-TW": "画面",
      "zh-CN": "画面",
      "ko": "screen",
      "vi": "screen",
      "id": "screen"
    }
  },
  {
    "id": "V0934",
    "w": "表示",
    "r": "ひょうじ",
    "m": {
      "en": "display",
      "zh-TW": "表示",
      "zh-CN": "表示",
      "ko": "display",
      "vi": "display",
      "id": "display"
    }
  },
  {
    "id": "V0935",
    "w": "音量",
    "r": "おんりょう",
    "m": {
      "en": "volume",
      "zh-TW": "音量",
      "zh-CN": "音量",
      "ko": "volume",
      "vi": "volume",
      "id": "volume"
    }
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
      "id": "brightness"
    }
  },
  {
    "id": "V0937",
    "w": "拡大",
    "r": "かくだい",
    "m": {
      "en": "enlargement",
      "zh-TW": "拡大",
      "zh-CN": "拡大",
      "ko": "enlargement",
      "vi": "enlargement",
      "id": "enlargement"
    }
  },
  {
    "id": "V0938",
    "w": "縮小",
    "r": "しゅくしょう",
    "m": {
      "en": "reduction",
      "zh-TW": "縮小",
      "zh-CN": "縮小",
      "ko": "reduction",
      "vi": "reduction",
      "id": "reduction"
    }
  },
  {
    "id": "V0939",
    "w": "印刷",
    "r": "いんさつ",
    "m": {
      "en": "printing",
      "zh-TW": "印刷",
      "zh-CN": "印刷",
      "ko": "printing",
      "vi": "printing",
      "id": "printing"
    }
  },
  {
    "id": "V0940",
    "w": "複写",
    "r": "ふくしゃ",
    "m": {
      "en": "copying",
      "zh-TW": "複写",
      "zh-CN": "複写",
      "ko": "copying",
      "vi": "copying",
      "id": "copying"
    }
  },
  {
    "id": "V0941",
    "w": "撮影",
    "r": "さつえい",
    "m": {
      "en": "photography",
      "zh-TW": "撮影",
      "zh-CN": "撮影",
      "ko": "photography",
      "vi": "photography",
      "id": "photography"
    }
  },
  {
    "id": "V0942",
    "w": "録音",
    "r": "ろくおん",
    "m": {
      "en": "recording",
      "zh-TW": "録音",
      "zh-CN": "録音",
      "ko": "recording",
      "vi": "recording",
      "id": "recording"
    }
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
      "id": "playback"
    }
  },
  {
    "id": "V0944",
    "w": "一時停止",
    "r": "いちじていし",
    "m": {
      "en": "pause",
      "zh-TW": "一時停止",
      "zh-CN": "一時停止",
      "ko": "pause",
      "vi": "pause",
      "id": "pause"
    }
  },
  {
    "id": "V0945",
    "w": "停止",
    "r": "ていし",
    "m": {
      "en": "stop",
      "zh-TW": "停止",
      "zh-CN": "停止",
      "ko": "stop",
      "vi": "stop",
      "id": "stop"
    }
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
      "id": "start"
    }
  },
  {
    "id": "V0947",
    "w": "完了",
    "r": "かんりょう",
    "m": {
      "en": "completion",
      "zh-TW": "完了",
      "zh-CN": "完了",
      "ko": "completion",
      "vi": "completion",
      "id": "completion"
    }
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
      "id": "progress"
    }
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
      "id": "cancellation"
    }
  },
  {
    "id": "V0950",
    "w": "延期",
    "r": "えんき",
    "m": {
      "en": "postponement",
      "zh-TW": "延期",
      "zh-CN": "延期",
      "ko": "postponement",
      "vi": "postponement",
      "id": "postponement"
    }
  },
  {
    "id": "V0951",
    "w": "実施",
    "r": "じっし",
    "m": {
      "en": "implementation",
      "zh-TW": "実施",
      "zh-CN": "実施",
      "ko": "implementation",
      "vi": "implementation",
      "id": "implementation"
    }
  },
  {
    "id": "V0952",
    "w": "開催",
    "r": "かいさい",
    "m": {
      "en": "holding",
      "zh-TW": "開催",
      "zh-CN": "開催",
      "ko": "holding",
      "vi": "holding",
      "id": "holding"
    }
  },
  {
    "id": "V0953",
    "w": "主催",
    "r": "しゅさい",
    "m": {
      "en": "sponsorship",
      "zh-TW": "主催",
      "zh-CN": "主催",
      "ko": "sponsorship",
      "vi": "sponsorship",
      "id": "sponsorship"
    }
  },
  {
    "id": "V0954",
    "w": "出演",
    "r": "しゅつえん",
    "m": {
      "en": "appearance",
      "zh-TW": "出演",
      "zh-CN": "出演",
      "ko": "appearance",
      "vi": "appearance",
      "id": "appearance"
    }
  },
  {
    "id": "V0955",
    "w": "観覧",
    "r": "かんらん",
    "m": {
      "en": "viewing",
      "zh-TW": "観覧",
      "zh-CN": "観覧",
      "ko": "viewing",
      "vi": "viewing",
      "id": "viewing"
    }
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
      "id": "tour"
    }
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
      "id": "experience"
    }
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
      "id": "fitting"
    }
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
      "id": "tasting"
    }
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
      "id": "admission"
    }
  },
  {
    "id": "V0961",
    "w": "退場",
    "r": "たいじょう",
    "m": {
      "en": "exit",
      "zh-TW": "退場",
      "zh-CN": "退場",
      "ko": "exit",
      "vi": "exit",
      "id": "exit"
    }
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
      "id": "opening"
    }
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
      "id": "closing"
    }
  },
  {
    "id": "V0964",
    "w": "満席",
    "r": "まんせき",
    "m": {
      "en": "full",
      "zh-TW": "満席",
      "zh-CN": "満席",
      "ko": "full",
      "vi": "full",
      "id": "full"
    }
  },
  {
    "id": "V0965",
    "w": "空席",
    "r": "くうせき",
    "m": {
      "en": "empty seat",
      "zh-TW": "空席",
      "zh-CN": "空席",
      "ko": "empty seat",
      "vi": "empty seat",
      "id": "empty seat"
    }
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
      "id": "cancel"
    }
  },
  {
    "id": "V0967",
    "w": "案内",
    "r": "あんない",
    "m": {
      "en": "guidance",
      "zh-TW": "案内",
      "zh-CN": "案内",
      "ko": "guidance",
      "vi": "guidance",
      "id": "guidance"
    }
  },
  {
    "id": "V0968",
    "w": "窓口",
    "r": "まどぐち",
    "m": {
      "en": "counter",
      "zh-TW": "窓口",
      "zh-CN": "窓口",
      "ko": "counter",
      "vi": "counter",
      "id": "counter"
    }
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
      "id": "waiting room"
    }
  },
  {
    "id": "V0970",
    "w": "会議室",
    "r": "かいぎしつ",
    "m": {
      "en": "meeting room",
      "zh-TW": "会議室",
      "zh-CN": "会議室",
      "ko": "meeting room",
      "vi": "meeting room",
      "id": "meeting room"
    }
  },
  {
    "id": "V0971",
    "w": "休憩室",
    "r": "きゅうけいしつ",
    "m": {
      "en": "break room",
      "zh-TW": "休憩室",
      "zh-CN": "休憩室",
      "ko": "break room",
      "vi": "break room",
      "id": "break room"
    }
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
      "id": "cafeteria"
    }
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
      "id": "shop"
    }
  },
  {
    "id": "V0974",
    "w": "自動販売機",
    "r": "じどうはんばいき",
    "m": {
      "en": "vending machine",
      "zh-TW": "自動販売機",
      "zh-CN": "自動販売機",
      "ko": "vending machine",
      "vi": "vending machine",
      "id": "vending machine"
    }
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
      "id": "toilet"
    }
  },
  {
    "id": "V0976",
    "w": "洗面所",
    "r": "せんめんじょ",
    "m": {
      "en": "washroom",
      "zh-TW": "洗面所",
      "zh-CN": "洗面所",
      "ko": "washroom",
      "vi": "washroom",
      "id": "washroom"
    }
  },
  {
    "id": "V0977",
    "w": "更衣室",
    "r": "こういしつ",
    "m": {
      "en": "changing room",
      "zh-TW": "更衣室",
      "zh-CN": "更衣室",
      "ko": "changing room",
      "vi": "changing room",
      "id": "changing room"
    }
  },
  {
    "id": "V0978",
    "w": "駐輪場",
    "r": "ちゅうりんじょう",
    "m": {
      "en": "bicycle parking",
      "zh-TW": "駐輪場",
      "zh-CN": "駐輪場",
      "ko": "bicycle parking",
      "vi": "bicycle parking",
      "id": "bicycle parking"
    }
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
      "id": "entrance/exit"
    }
  },
  {
    "id": "V0980",
    "w": "非常口",
    "r": "ひじょうぐち",
    "m": {
      "en": "emergency exit",
      "zh-TW": "非常口",
      "zh-CN": "非常口",
      "ko": "emergency exit",
      "vi": "emergency exit",
      "id": "emergency exit"
    }
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
      "id": "elevator"
    }
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
      "id": "escalator"
    }
  },
  {
    "id": "V0983",
    "w": "廊下",
    "r": "ろうか",
    "m": {
      "en": "corridor",
      "zh-TW": "廊下",
      "zh-CN": "廊下",
      "ko": "corridor",
      "vi": "corridor",
      "id": "corridor"
    }
  },
  {
    "id": "V0984",
    "w": "通路",
    "r": "つうろ",
    "m": {
      "en": "passage",
      "zh-TW": "通路",
      "zh-CN": "通路",
      "ko": "passage",
      "vi": "passage",
      "id": "passage"
    }
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
      "id": "plaza"
    }
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
      "id": "playground"
    }
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
      "id": "gymnasium"
    }
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
      "id": "library"
    }
  },
  {
    "id": "V0989",
    "w": "美術館",
    "r": "びじゅつかん",
    "m": {
      "en": "art museum",
      "zh-TW": "美術館",
      "zh-CN": "美術館",
      "ko": "art museum",
      "vi": "art museum",
      "id": "art museum"
    }
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
      "id": "aquarium"
    }
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
      "id": "zoo"
    }
  },
  {
    "id": "V0992",
    "w": "遊園地",
    "r": "ゆうえんち",
    "m": {
      "en": "amusement park",
      "zh-TW": "遊園地",
      "zh-CN": "遊園地",
      "ko": "amusement park",
      "vi": "amusement park",
      "id": "amusement park"
    }
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
      "id": "cinema"
    }
  },
  {
    "id": "V0994",
    "w": "劇場",
    "r": "げきじょう",
    "m": {
      "en": "theater",
      "zh-TW": "劇場",
      "zh-CN": "劇場",
      "ko": "theater",
      "vi": "theater",
      "id": "theater"
    }
  },
  {
    "id": "V0995",
    "w": "競技場",
    "r": "きょうぎじょう",
    "m": {
      "en": "stadium",
      "zh-TW": "競技場",
      "zh-CN": "競技場",
      "ko": "stadium",
      "vi": "stadium",
      "id": "stadium"
    }
  },
  {
    "id": "V0996",
    "w": "球場",
    "r": "きゅうじょう",
    "m": {
      "en": "ballpark",
      "zh-TW": "球場",
      "zh-CN": "球場",
      "ko": "ballpark",
      "vi": "ballpark",
      "id": "ballpark"
    }
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
      "id": "pool"
    }
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
      "id": "gym"
    }
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
      "id": "sports club"
    }
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
      "id": "lessons"
    }
  },
  {
    "id": "V1001",
    "w": "塾",
    "r": "じゅく",
    "m": {
      "en": "cram school",
      "zh-TW": "塾",
      "zh-CN": "塾",
      "ko": "cram school",
      "vi": "cram school",
      "id": "cram school"
    }
  },
  {
    "id": "V1002",
    "w": "予備校",
    "r": "よびこう",
    "m": {
      "en": "prep school",
      "zh-TW": "予備校",
      "zh-CN": "予備校",
      "ko": "prep school",
      "vi": "prep school",
      "id": "prep school"
    }
  },
  {
    "id": "V1003",
    "w": "専門学校",
    "r": "せんもんがっこう",
    "m": {
      "en": "vocational school",
      "zh-TW": "専門学校",
      "zh-CN": "専門学校",
      "ko": "vocational school",
      "vi": "vocational school",
      "id": "vocational school"
    }
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
      "id": "graduate school"
    }
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
      "id": "research institute"
    }
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
      "id": "company"
    }
  },
  {
    "id": "V1007",
    "w": "倉庫",
    "r": "そうこ",
    "m": {
      "en": "warehouse",
      "zh-TW": "倉庫",
      "zh-CN": "倉庫",
      "ko": "warehouse",
      "vi": "warehouse",
      "id": "warehouse"
    }
  },
  {
    "id": "V1008",
    "w": "店舗",
    "r": "てんぽ",
    "m": {
      "en": "store",
      "zh-TW": "店舗",
      "zh-CN": "店舗",
      "ko": "store",
      "vi": "store",
      "id": "store"
    }
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
      "id": "head office"
    }
  },
  {
    "id": "V1010",
    "w": "支店",
    "r": "してん",
    "m": {
      "en": "branch",
      "zh-TW": "支店",
      "zh-CN": "支店",
      "ko": "branch",
      "vi": "branch",
      "id": "branch"
    }
  },
  {
    "id": "V1011",
    "w": "営業所",
    "r": "えいぎょうしょ",
    "m": {
      "en": "sales office",
      "zh-TW": "営業所",
      "zh-CN": "営業所",
      "ko": "sales office",
      "vi": "sales office",
      "id": "sales office"
    }
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
      "id": "department"
    }
  },
  {
    "id": "V1013",
    "w": "課",
    "r": "か",
    "m": {
      "en": "section",
      "zh-TW": "課",
      "zh-CN": "課",
      "ko": "section",
      "vi": "section",
      "id": "section"
    }
  },
  {
    "id": "V1014",
    "w": "課長",
    "r": "かちょう",
    "m": {
      "en": "section chief",
      "zh-TW": "課長",
      "zh-CN": "課長",
      "ko": "section chief",
      "vi": "section chief",
      "id": "section chief"
    }
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
      "id": "chief clerk"
    }
  },
  {
    "id": "V1016",
    "w": "主任",
    "r": "しゅにん",
    "m": {
      "en": "supervisor",
      "zh-TW": "主任",
      "zh-CN": "主任",
      "ko": "supervisor",
      "vi": "supervisor",
      "id": "supervisor"
    }
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
      "id": "employee"
    }
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
      "id": "regular employee"
    }
  },
  {
    "id": "V1019",
    "w": "派遣",
    "r": "はけん",
    "m": {
      "en": "dispatch",
      "zh-TW": "派遣",
      "zh-CN": "派遣",
      "ko": "dispatch",
      "vi": "dispatch",
      "id": "dispatch"
    }
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
      "id": "part-time job"
    }
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
      "id": "part-time"
    }
  },
  {
    "id": "V1022",
    "w": "面接",
    "r": "めんせつ",
    "m": {
      "en": "interview",
      "zh-TW": "面接",
      "zh-CN": "面接",
      "ko": "interview",
      "vi": "interview",
      "id": "interview"
    }
  },
  {
    "id": "V1023",
    "w": "採用",
    "r": "さいよう",
    "m": {
      "en": "hiring",
      "zh-TW": "採用",
      "zh-CN": "採用",
      "ko": "hiring",
      "vi": "hiring",
      "id": "hiring"
    }
  },
  {
    "id": "V1024",
    "w": "不採用",
    "r": "ふさいよう",
    "m": {
      "en": "rejection",
      "zh-TW": "不採用",
      "zh-CN": "不採用",
      "ko": "rejection",
      "vi": "rejection",
      "id": "rejection"
    }
  },
  {
    "id": "V1025",
    "w": "内定",
    "r": "ないてい",
    "m": {
      "en": "informal offer",
      "zh-TW": "内定",
      "zh-CN": "内定",
      "ko": "informal offer",
      "vi": "informal offer",
      "id": "informal offer"
    }
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
      "id": "joining company"
    }
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
      "id": "training"
    }
  },
  {
    "id": "V1028",
    "w": "配属",
    "r": "はいぞく",
    "m": {
      "en": "assignment",
      "zh-TW": "配属",
      "zh-CN": "配属",
      "ko": "assignment",
      "vi": "assignment",
      "id": "assignment"
    }
  },
  {
    "id": "V1029",
    "w": "異動",
    "r": "いどう",
    "m": {
      "en": "transfer",
      "zh-TW": "異動",
      "zh-CN": "異動",
      "ko": "transfer",
      "vi": "transfer",
      "id": "transfer"
    }
  },
  {
    "id": "V1030",
    "w": "昇進",
    "r": "しょうしん",
    "m": {
      "en": "promotion",
      "zh-TW": "昇進",
      "zh-CN": "昇進",
      "ko": "promotion",
      "vi": "promotion",
      "id": "promotion"
    }
  },
  {
    "id": "V1031",
    "w": "降格",
    "r": "こうかく",
    "m": {
      "en": "demotion",
      "zh-TW": "降格",
      "zh-CN": "降格",
      "ko": "demotion",
      "vi": "demotion",
      "id": "demotion"
    }
  },
  {
    "id": "V1032",
    "w": "解雇",
    "r": "かいこ",
    "m": {
      "en": "dismissal",
      "zh-TW": "解雇",
      "zh-CN": "解雇",
      "ko": "dismissal",
      "vi": "dismissal",
      "id": "dismissal"
    }
  },
  {
    "id": "V1033",
    "w": "辞職",
    "r": "じしょく",
    "m": {
      "en": "resignation",
      "zh-TW": "辞職",
      "zh-CN": "辞職",
      "ko": "resignation",
      "vi": "resignation",
      "id": "resignation"
    }
  },
  {
    "id": "V1034",
    "w": "定年",
    "r": "ていねん",
    "m": {
      "en": "retirement age",
      "zh-TW": "定年",
      "zh-CN": "定年",
      "ko": "retirement age",
      "vi": "retirement age",
      "id": "retirement age"
    }
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
      "id": "pension"
    }
  },
  {
    "id": "V1036",
    "w": "手当",
    "r": "てあて",
    "m": {
      "en": "allowance",
      "zh-TW": "手当",
      "zh-CN": "手当",
      "ko": "allowance",
      "vi": "allowance",
      "id": "allowance"
    }
  },
  {
    "id": "V1037",
    "w": "賞与",
    "r": "しょうよ",
    "m": {
      "en": "bonus",
      "zh-TW": "賞与",
      "zh-CN": "賞与",
      "ko": "bonus",
      "vi": "bonus",
      "id": "bonus"
    }
  },
  {
    "id": "V1038",
    "w": "福利厚生",
    "r": "ふくりこうせい",
    "m": {
      "en": "benefits",
      "zh-TW": "福利厚生",
      "zh-CN": "福利厚生",
      "ko": "benefits",
      "vi": "benefits",
      "id": "benefits"
    }
  },
  {
    "id": "V1039",
    "w": "有給休暇",
    "r": "ゆうきゅうきゅうか",
    "m": {
      "en": "paid vacation",
      "zh-TW": "有給休暇",
      "zh-CN": "有給休暇",
      "ko": "paid vacation",
      "vi": "paid vacation",
      "id": "paid vacation"
    }
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
      "id": "maternity leave"
    }
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
      "id": "childcare leave"
    }
  },
  {
    "id": "V1042",
    "w": "介護",
    "r": "かいご",
    "m": {
      "en": "nursing care",
      "zh-TW": "介護",
      "zh-CN": "介護",
      "ko": "nursing care",
      "vi": "nursing care",
      "id": "nursing care"
    }
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
      "id": "illness"
    }
  },
  {
    "id": "V1044",
    "w": "怪我",
    "r": "けが",
    "m": {
      "en": "injury",
      "zh-TW": "怪我",
      "zh-CN": "怪我",
      "ko": "injury",
      "vi": "injury",
      "id": "injury"
    }
  },
  {
    "id": "V1045",
    "w": "健康",
    "r": "けんこう",
    "m": {
      "en": "health",
      "zh-TW": "健康",
      "zh-CN": "健康",
      "ko": "health",
      "vi": "health",
      "id": "health"
    }
  },
  {
    "id": "V1046",
    "w": "体調",
    "r": "たいちょう",
    "m": {
      "en": "physical condition",
      "zh-TW": "体調",
      "zh-CN": "体調",
      "ko": "physical condition",
      "vi": "physical condition",
      "id": "physical condition"
    }
  },
  {
    "id": "V1047",
    "w": "症状",
    "r": "しょうじょう",
    "m": {
      "en": "symptom",
      "zh-TW": "症状",
      "zh-CN": "症状",
      "ko": "symptom",
      "vi": "symptom",
      "id": "symptom"
    }
  },
  {
    "id": "V1048",
    "w": "診察",
    "r": "しんさつ",
    "m": {
      "en": "examination",
      "zh-TW": "診察",
      "zh-CN": "診察",
      "ko": "examination",
      "vi": "examination",
      "id": "examination"
    }
  },
  {
    "id": "V1049",
    "w": "治療",
    "r": "ちりょう",
    "m": {
      "en": "treatment",
      "zh-TW": "治療",
      "zh-CN": "治療",
      "ko": "treatment",
      "vi": "treatment",
      "id": "treatment"
    }
  },
  {
    "id": "V1050",
    "w": "手術",
    "r": "しゅじゅつ",
    "m": {
      "en": "surgery",
      "zh-TW": "手術",
      "zh-CN": "手術",
      "ko": "surgery",
      "vi": "surgery",
      "id": "surgery"
    }
  },
  {
    "id": "V1051",
    "w": "退院",
    "r": "たいいん",
    "m": {
      "en": "discharge",
      "zh-TW": "退院",
      "zh-CN": "退院",
      "ko": "discharge",
      "vi": "discharge",
      "id": "discharge"
    }
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
      "id": "outpatient"
    }
  },
  {
    "id": "V1053",
    "w": "処方",
    "r": "しょほう",
    "m": {
      "en": "prescription",
      "zh-TW": "処方",
      "zh-CN": "処方",
      "ko": "prescription",
      "vi": "prescription",
      "id": "prescription"
    }
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
      "id": "medicine"
    }
  },
  {
    "id": "V1055",
    "w": "副作用",
    "r": "ふくさよう",
    "m": {
      "en": "side effect",
      "zh-TW": "副作用",
      "zh-CN": "副作用",
      "ko": "side effect",
      "vi": "side effect",
      "id": "side effect"
    }
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
      "id": "allergy"
    }
  },
  {
    "id": "V1057",
    "w": "予防",
    "r": "よぼう",
    "m": {
      "en": "prevention",
      "zh-TW": "予防",
      "zh-CN": "予防",
      "ko": "prevention",
      "vi": "prevention",
      "id": "prevention"
    }
  },
  {
    "id": "V1058",
    "w": "検診",
    "r": "けんしん",
    "m": {
      "en": "checkup",
      "zh-TW": "検診",
      "zh-CN": "検診",
      "ko": "checkup",
      "vi": "checkup",
      "id": "checkup"
    }
  },
  {
    "id": "V1059",
    "w": "健康診断",
    "r": "けんこうしんだん",
    "m": {
      "en": "health examination",
      "zh-TW": "健康診断",
      "zh-CN": "健康診断",
      "ko": "health examination",
      "vi": "health examination",
      "id": "health examination"
    }
  },
  {
    "id": "V1060",
    "w": "血圧",
    "r": "けつあつ",
    "m": {
      "en": "blood pressure",
      "zh-TW": "血圧",
      "zh-CN": "血圧",
      "ko": "blood pressure",
      "vi": "blood pressure",
      "id": "blood pressure"
    }
  },
  {
    "id": "V1061",
    "w": "体温",
    "r": "たいおん",
    "m": {
      "en": "body temperature",
      "zh-TW": "体温",
      "zh-CN": "体温",
      "ko": "body temperature",
      "vi": "body temperature",
      "id": "body temperature"
    }
  },
  {
    "id": "V1062",
    "w": "脈拍",
    "r": "みゃくはく",
    "m": {
      "en": "pulse",
      "zh-TW": "脈拍",
      "zh-CN": "脈拍",
      "ko": "pulse",
      "vi": "pulse",
      "id": "pulse"
    }
  },
  {
    "id": "V1063",
    "w": "身長",
    "r": "しんちょう",
    "m": {
      "en": "height",
      "zh-TW": "身長",
      "zh-CN": "身長",
      "ko": "height",
      "vi": "height",
      "id": "height"
    }
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
      "id": "weight"
    }
  },
  {
    "id": "V1065",
    "w": "視力",
    "r": "しりょく",
    "m": {
      "en": "eyesight",
      "zh-TW": "視力",
      "zh-CN": "視力",
      "ko": "eyesight",
      "vi": "eyesight",
      "id": "eyesight"
    }
  },
  {
    "id": "V1066",
    "w": "聴力",
    "r": "ちょうりょく",
    "m": {
      "en": "hearing",
      "zh-TW": "聴力",
      "zh-CN": "聴力",
      "ko": "hearing",
      "vi": "hearing",
      "id": "hearing"
    }
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
      "id": "dentistry"
    }
  },
  {
    "id": "V1068",
    "w": "眼科",
    "r": "がんか",
    "m": {
      "en": "ophthalmology",
      "zh-TW": "眼科",
      "zh-CN": "眼科",
      "ko": "ophthalmology",
      "vi": "ophthalmology",
      "id": "ophthalmology"
    }
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
      "id": "internal medicine"
    }
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
      "id": "surgery"
    }
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
      "id": "pediatrics"
    }
  },
  {
    "id": "V1072",
    "w": "産婦人科",
    "r": "さんふじんか",
    "m": {
      "en": "obstetrics",
      "zh-TW": "産婦人科",
      "zh-CN": "産婦人科",
      "ko": "obstetrics",
      "vi": "obstetrics",
      "id": "obstetrics"
    }
  },
  {
    "id": "V1073",
    "w": "精神科",
    "r": "せいしんか",
    "m": {
      "en": "psychiatry",
      "zh-TW": "精神科",
      "zh-CN": "精神科",
      "ko": "psychiatry",
      "vi": "psychiatry",
      "id": "psychiatry"
    }
  },
  {
    "id": "V1074",
    "w": "皮膚科",
    "r": "ひふか",
    "m": {
      "en": "dermatology",
      "zh-TW": "皮膚科",
      "zh-CN": "皮膚科",
      "ko": "dermatology",
      "vi": "dermatology",
      "id": "dermatology"
    }
  },
  {
    "id": "V1075",
    "w": "耳鼻科",
    "r": "じびか",
    "m": {
      "en": "ENT",
      "zh-TW": "耳鼻科",
      "zh-CN": "耳鼻科",
      "ko": "ENT",
      "vi": "ENT",
      "id": "ENT"
    }
  },
  {
    "id": "V1076",
    "w": "整形外科",
    "r": "せいけいげか",
    "m": {
      "en": "orthopedics",
      "zh-TW": "整形外科",
      "zh-CN": "整形外科",
      "ko": "orthopedics",
      "vi": "orthopedics",
      "id": "orthopedics"
    }
  },
  {
    "id": "V1077",
    "w": "救急",
    "r": "きゅうきゅう",
    "m": {
      "en": "emergency",
      "zh-TW": "救急",
      "zh-CN": "救急",
      "ko": "emergency",
      "vi": "emergency",
      "id": "emergency"
    }
  },
  {
    "id": "V1078",
    "w": "救急車",
    "r": "きゅうきゅうしゃ",
    "m": {
      "en": "ambulance",
      "zh-TW": "救急車",
      "zh-CN": "救急車",
      "ko": "ambulance",
      "vi": "ambulance",
      "id": "ambulance"
    }
  },
  {
    "id": "V1079",
    "w": "消防",
    "r": "しょうぼう",
    "m": {
      "en": "fire fighting",
      "zh-TW": "消防",
      "zh-CN": "消防",
      "ko": "fire fighting",
      "vi": "fire fighting",
      "id": "fire fighting"
    }
  },
  {
    "id": "V1080",
    "w": "消防車",
    "r": "しょうぼうしゃ",
    "m": {
      "en": "fire engine",
      "zh-TW": "消防車",
      "zh-CN": "消防車",
      "ko": "fire engine",
      "vi": "fire engine",
      "id": "fire engine"
    }
  },
  {
    "id": "V1081",
    "w": "警察",
    "r": "けいさつ",
    "m": {
      "en": "police",
      "zh-TW": "警察",
      "zh-CN": "警察",
      "ko": "police",
      "vi": "police",
      "id": "police"
    }
  },
  {
    "id": "V1082",
    "w": "警察官",
    "r": "けいさつかん",
    "m": {
      "en": "police officer",
      "zh-TW": "警察官",
      "zh-CN": "警察官",
      "ko": "police officer",
      "vi": "police officer",
      "id": "police officer"
    }
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
      "id": "police box"
    }
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
      "id": "incident"
    }
  },
  {
    "id": "V1085",
    "w": "被害",
    "r": "ひがい",
    "m": {
      "en": "damage",
      "zh-TW": "被害",
      "zh-CN": "被害",
      "ko": "damage",
      "vi": "damage",
      "id": "damage"
    }
  },
  {
    "id": "V1086",
    "w": "加害",
    "r": "かがい",
    "m": {
      "en": "harm",
      "zh-TW": "加害",
      "zh-CN": "加害",
      "ko": "harm",
      "vi": "harm",
      "id": "harm"
    }
  },
  {
    "id": "V1087",
    "w": "逮捕",
    "r": "たいほ",
    "m": {
      "en": "arrest",
      "zh-TW": "逮捕",
      "zh-CN": "逮捕",
      "ko": "arrest",
      "vi": "arrest",
      "id": "arrest"
    }
  },
  {
    "id": "V1088",
    "w": "裁判",
    "r": "さいばん",
    "m": {
      "en": "trial",
      "zh-TW": "裁判",
      "zh-CN": "裁判",
      "ko": "trial",
      "vi": "trial",
      "id": "trial"
    }
  },
  {
    "id": "V1089",
    "w": "弁護士",
    "r": "べんごし",
    "m": {
      "en": "lawyer",
      "zh-TW": "弁護士",
      "zh-CN": "弁護士",
      "ko": "lawyer",
      "vi": "lawyer",
      "id": "lawyer"
    }
  },
  {
    "id": "V1090",
    "w": "検察",
    "r": "けんさつ",
    "m": {
      "en": "prosecution",
      "zh-TW": "検察",
      "zh-CN": "検察",
      "ko": "prosecution",
      "vi": "prosecution",
      "id": "prosecution"
    }
  },
  {
    "id": "V1091",
    "w": "刑務所",
    "r": "けいむしょ",
    "m": {
      "en": "prison",
      "zh-TW": "刑務所",
      "zh-CN": "刑務所",
      "ko": "prison",
      "vi": "prison",
      "id": "prison"
    }
  },
  {
    "id": "V1092",
    "w": "釈放",
    "r": "しゃくほう",
    "m": {
      "en": "release",
      "zh-TW": "釈放",
      "zh-CN": "釈放",
      "ko": "release",
      "vi": "release",
      "id": "release"
    }
  },
  {
    "id": "V1093",
    "w": "無罪",
    "r": "むざい",
    "m": {
      "en": "innocent",
      "zh-TW": "無罪",
      "zh-CN": "無罪",
      "ko": "innocent",
      "vi": "innocent",
      "id": "innocent"
    }
  },
  {
    "id": "V1094",
    "w": "有罪",
    "r": "ゆうざい",
    "m": {
      "en": "guilty",
      "zh-TW": "有罪",
      "zh-CN": "有罪",
      "ko": "guilty",
      "vi": "guilty",
      "id": "guilty"
    }
  },
  {
    "id": "V1095",
    "w": "罰金",
    "r": "ばっきん",
    "m": {
      "en": "fine",
      "zh-TW": "罰金",
      "zh-CN": "罰金",
      "ko": "fine",
      "vi": "fine",
      "id": "fine"
    }
  },
  {
    "id": "V1096",
    "w": "懲役",
    "r": "ちょうえき",
    "m": {
      "en": "imprisonment",
      "zh-TW": "懲役",
      "zh-CN": "懲役",
      "ko": "imprisonment",
      "vi": "imprisonment",
      "id": "imprisonment"
    }
  },
  {
    "id": "V1097",
    "w": "死刑",
    "r": "しけい",
    "m": {
      "en": "death penalty",
      "zh-TW": "死刑",
      "zh-CN": "死刑",
      "ko": "death penalty",
      "vi": "death penalty",
      "id": "death penalty"
    }
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
      "id": "citizen"
    }
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
      "id": "resident"
    }
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
      "id": "nation"
    }
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
      "id": "mayor"
    }
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
      "id": "governor"
    }
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
      "id": "prime minister"
    }
  },
  {
    "id": "V1104",
    "w": "大臣",
    "r": "だいじん",
    "m": {
      "en": "minister",
      "zh-TW": "大臣",
      "zh-CN": "大臣",
      "ko": "minister",
      "vi": "minister",
      "id": "minister"
    }
  },
  {
    "id": "V1105",
    "w": "選挙",
    "r": "せんきょ",
    "m": {
      "en": "election",
      "zh-TW": "選挙",
      "zh-CN": "選挙",
      "ko": "election",
      "vi": "election",
      "id": "election"
    }
  },
  {
    "id": "V1106",
    "w": "投票",
    "r": "とうひょう",
    "m": {
      "en": "voting",
      "zh-TW": "投票",
      "zh-CN": "投票",
      "ko": "voting",
      "vi": "voting",
      "id": "voting"
    }
  },
  {
    "id": "V1107",
    "w": "候補",
    "r": "こうほ",
    "m": {
      "en": "candidate",
      "zh-TW": "候補",
      "zh-CN": "候補",
      "ko": "candidate",
      "vi": "candidate",
      "id": "candidate"
    }
  },
  {
    "id": "V1108",
    "w": "当選",
    "r": "とうせん",
    "m": {
      "en": "elected",
      "zh-TW": "当選",
      "zh-CN": "当選",
      "ko": "elected",
      "vi": "elected",
      "id": "elected"
    }
  },
  {
    "id": "V1109",
    "w": "落選",
    "r": "らくせん",
    "m": {
      "en": "defeated",
      "zh-TW": "落選",
      "zh-CN": "落選",
      "ko": "defeated",
      "vi": "defeated",
      "id": "defeated"
    }
  },
  {
    "id": "V1110",
    "w": "議員",
    "r": "ぎいん",
    "m": {
      "en": "member of parliament",
      "zh-TW": "議員",
      "zh-CN": "議員",
      "ko": "member of parliament",
      "vi": "member of parliament",
      "id": "member of parliament"
    }
  },
  {
    "id": "V1111",
    "w": "議会",
    "r": "ぎかい",
    "m": {
      "en": "parliament",
      "zh-TW": "議会",
      "zh-CN": "議会",
      "ko": "parliament",
      "vi": "parliament",
      "id": "parliament"
    }
  },
  {
    "id": "V1112",
    "w": "法案",
    "r": "ほうあん",
    "m": {
      "en": "bill",
      "zh-TW": "法案",
      "zh-CN": "法案",
      "ko": "bill",
      "vi": "bill",
      "id": "bill"
    }
  },
  {
    "id": "V1113",
    "w": "可決",
    "r": "かけつ",
    "m": {
      "en": "passage",
      "zh-TW": "可決",
      "zh-CN": "可決",
      "ko": "passage",
      "vi": "passage",
      "id": "passage"
    }
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
      "id": "rejection"
    }
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
      "id": "diplomacy"
    }
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
      "id": "embassy"
    }
  },
  {
    "id": "V1117",
    "w": "領事館",
    "r": "りょうじかん",
    "m": {
      "en": "consulate",
      "zh-TW": "領事館",
      "zh-CN": "領事館",
      "ko": "consulate",
      "vi": "consulate",
      "id": "consulate"
    }
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
      "id": "visa"
    }
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
      "id": "passport"
    }
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
      "id": "entry"
    }
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
      "id": "departure"
    }
  },
  {
    "id": "V1122",
    "w": "税関",
    "r": "ぜいかん",
    "m": {
      "en": "customs",
      "zh-TW": "税関",
      "zh-CN": "税関",
      "ko": "customs",
      "vi": "customs",
      "id": "customs"
    }
  },
  {
    "id": "V1123",
    "w": "商品",
    "r": "しょうひん",
    "m": {
      "en": "product",
      "zh-TW": "商品",
      "zh-CN": "商品",
      "ko": "product",
      "vi": "product",
      "id": "product"
    }
  },
  {
    "id": "V1124",
    "w": "原料",
    "r": "げんりょう",
    "m": {
      "en": "raw material",
      "zh-TW": "原料",
      "zh-CN": "原料",
      "ko": "raw material",
      "vi": "raw material",
      "id": "raw material"
    }
  },
  {
    "id": "V1125",
    "w": "完成品",
    "r": "かんせいひん",
    "m": {
      "en": "finished product",
      "zh-TW": "完成品",
      "zh-CN": "完成品",
      "ko": "finished product",
      "vi": "finished product",
      "id": "finished product"
    }
  },
  {
    "id": "V1126",
    "w": "在庫",
    "r": "ざいこ",
    "m": {
      "en": "inventory",
      "zh-TW": "在庫",
      "zh-CN": "在庫",
      "ko": "inventory",
      "vi": "inventory",
      "id": "inventory"
    }
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
      "id": "order"
    }
  },
  {
    "id": "V1128",
    "w": "納品",
    "r": "のうひん",
    "m": {
      "en": "delivery",
      "zh-TW": "納品",
      "zh-CN": "納品",
      "ko": "delivery",
      "vi": "delivery",
      "id": "delivery"
    }
  },
  {
    "id": "V1129",
    "w": "不良品",
    "r": "ふりょうひん",
    "m": {
      "en": "defective",
      "zh-TW": "不良品",
      "zh-CN": "不良品",
      "ko": "defective",
      "vi": "defective",
      "id": "defective"
    }
  },
  {
    "id": "V1130",
    "w": "検品",
    "r": "けんぴん",
    "m": {
      "en": "inspection",
      "zh-TW": "検品",
      "zh-CN": "検品",
      "ko": "inspection",
      "vi": "inspection",
      "id": "inspection"
    }
  },
  {
    "id": "V1131",
    "w": "梱包",
    "r": "こんぽう",
    "m": {
      "en": "packing",
      "zh-TW": "梱包",
      "zh-CN": "梱包",
      "ko": "packing",
      "vi": "packing",
      "id": "packing"
    }
  },
  {
    "id": "V1132",
    "w": "出荷",
    "r": "しゅっか",
    "m": {
      "en": "shipping",
      "zh-TW": "出荷",
      "zh-CN": "出荷",
      "ko": "shipping",
      "vi": "shipping",
      "id": "shipping"
    }
  },
  {
    "id": "V1133",
    "w": "入荷",
    "r": "にゅうか",
    "m": {
      "en": "arrival",
      "zh-TW": "入荷",
      "zh-CN": "入荷",
      "ko": "arrival",
      "vi": "arrival",
      "id": "arrival"
    }
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
      "id": "out of stock"
    }
  },
  {
    "id": "V1135",
    "w": "取り寄せ",
    "r": "とりよせ",
    "m": {
      "en": "order",
      "zh-TW": "取り寄せ",
      "zh-CN": "取り寄せ",
      "ko": "order",
      "vi": "order",
      "id": "order"
    }
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
      "id": "advertisement"
    }
  },
  {
    "id": "V1137",
    "w": "宣伝",
    "r": "せんでん",
    "m": {
      "en": "publicity",
      "zh-TW": "宣伝",
      "zh-CN": "宣伝",
      "ko": "publicity",
      "vi": "publicity",
      "id": "publicity"
    }
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
      "id": "campaign"
    }
  },
  {
    "id": "V1139",
    "w": "販促",
    "r": "はんそく",
    "m": {
      "en": "promotion",
      "zh-TW": "販促",
      "zh-CN": "販促",
      "ko": "promotion",
      "vi": "promotion",
      "id": "promotion"
    }
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
      "id": "sales"
    }
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
      "id": "deficit"
    }
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
      "id": "surplus"
    }
  },
  {
    "id": "V1143",
    "w": "経費",
    "r": "けいひ",
    "m": {
      "en": "expense",
      "zh-TW": "経費",
      "zh-CN": "経費",
      "ko": "expense",
      "vi": "expense",
      "id": "expense"
    }
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
      "id": "cost"
    }
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
      "id": "budget"
    }
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
      "id": "settlement"
    }
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
      "id": "accounting"
    }
  },
  {
    "id": "V1148",
    "w": "監査",
    "r": "かんさ",
    "m": {
      "en": "audit",
      "zh-TW": "監査",
      "zh-CN": "監査",
      "ko": "audit",
      "vi": "audit",
      "id": "audit"
    }
  },
  {
    "id": "V1149",
    "w": "税金",
    "r": "ぜいきん",
    "m": {
      "en": "tax",
      "zh-TW": "税金",
      "zh-CN": "税金",
      "ko": "tax",
      "vi": "tax",
      "id": "tax"
    }
  },
  {
    "id": "V1150",
    "w": "確定申告",
    "r": "かくていしんこく",
    "m": {
      "en": "tax return",
      "zh-TW": "確定申告",
      "zh-CN": "確定申告",
      "ko": "tax return",
      "vi": "tax return",
      "id": "tax return"
    }
  },
  {
    "id": "V1151",
    "w": "節税",
    "r": "せつぜい",
    "m": {
      "en": "tax saving",
      "zh-TW": "節税",
      "zh-CN": "節税",
      "ko": "tax saving",
      "vi": "tax saving",
      "id": "tax saving"
    }
  },
  {
    "id": "V1152",
    "w": "脱税",
    "r": "だつぜい",
    "m": {
      "en": "tax evasion",
      "zh-TW": "脱税",
      "zh-CN": "脱税",
      "ko": "tax evasion",
      "vi": "tax evasion",
      "id": "tax evasion"
    }
  },
  {
    "id": "V1153",
    "w": "相続",
    "r": "そうぞく",
    "m": {
      "en": "inheritance",
      "zh-TW": "相続",
      "zh-CN": "相続",
      "ko": "inheritance",
      "vi": "inheritance",
      "id": "inheritance"
    }
  },
  {
    "id": "V1154",
    "w": "遺産",
    "r": "いさん",
    "m": {
      "en": "legacy",
      "zh-TW": "遺産",
      "zh-CN": "遺産",
      "ko": "legacy",
      "vi": "legacy",
      "id": "legacy"
    }
  },
  {
    "id": "V1155",
    "w": "財産",
    "r": "ざいさん",
    "m": {
      "en": "property",
      "zh-TW": "財産",
      "zh-CN": "財産",
      "ko": "property",
      "vi": "property",
      "id": "property"
    }
  },
  {
    "id": "V1156",
    "w": "資産",
    "r": "しさん",
    "m": {
      "en": "assets",
      "zh-TW": "資産",
      "zh-CN": "資産",
      "ko": "assets",
      "vi": "assets",
      "id": "assets"
    }
  },
  {
    "id": "V1157",
    "w": "負債",
    "r": "ふさい",
    "m": {
      "en": "liability",
      "zh-TW": "負債",
      "zh-CN": "負債",
      "ko": "liability",
      "vi": "liability",
      "id": "liability"
    }
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
      "id": "loan"
    }
  },
  {
    "id": "V1159",
    "w": "住宅ローン",
    "r": "じゅうたくろーん",
    "m": {
      "en": "mortgage",
      "zh-TW": "住宅ローン",
      "zh-CN": "住宅ローン",
      "ko": "mortgage",
      "vi": "mortgage",
      "id": "mortgage"
    }
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
      "id": "down payment"
    }
  },
  {
    "id": "V1161",
    "w": "分割払い",
    "r": "ぶんかつばらい",
    "m": {
      "en": "installment",
      "zh-TW": "分割払い",
      "zh-CN": "分割払い",
      "ko": "installment",
      "vi": "installment",
      "id": "installment"
    }
  },
  {
    "id": "V1162",
    "w": "一括払い",
    "r": "いっかつばらい",
    "m": {
      "en": "lump sum",
      "zh-TW": "一括払い",
      "zh-CN": "一括払い",
      "ko": "lump sum",
      "vi": "lump sum",
      "id": "lump sum"
    }
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
      "id": "interest rate"
    }
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
      "id": "principal"
    }
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
      "id": "interest"
    }
  },
  {
    "id": "V1166",
    "w": "複利",
    "r": "ふくり",
    "m": {
      "en": "compound interest",
      "zh-TW": "複利",
      "zh-CN": "複利",
      "ko": "compound interest",
      "vi": "compound interest",
      "id": "compound interest"
    }
  },
  {
    "id": "V1167",
    "w": "運用",
    "r": "うんよう",
    "m": {
      "en": "management",
      "zh-TW": "運用",
      "zh-CN": "運用",
      "ko": "management",
      "vi": "management",
      "id": "management"
    }
  },
  {
    "id": "V1168",
    "w": "配当",
    "r": "はいとう",
    "m": {
      "en": "dividend",
      "zh-TW": "配当",
      "zh-CN": "配当",
      "ko": "dividend",
      "vi": "dividend",
      "id": "dividend"
    }
  },
  {
    "id": "V1169",
    "w": "株価",
    "r": "かぶか",
    "m": {
      "en": "stock price",
      "zh-TW": "株価",
      "zh-CN": "株価",
      "ko": "stock price",
      "vi": "stock price",
      "id": "stock price"
    }
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
      "id": "listing"
    }
  },
  {
    "id": "V1171",
    "w": "下落",
    "r": "げらく",
    "m": {
      "en": "decline",
      "zh-TW": "下落",
      "zh-CN": "下落",
      "ko": "decline",
      "vi": "decline",
      "id": "decline"
    }
  },
  {
    "id": "V1172",
    "w": "高騰",
    "r": "こうとう",
    "m": {
      "en": "surge",
      "zh-TW": "高騰",
      "zh-CN": "高騰",
      "ko": "surge",
      "vi": "surge",
      "id": "surge"
    }
  },
  {
    "id": "V1173",
    "w": "暴落",
    "r": "ぼうらく",
    "m": {
      "en": "crash",
      "zh-TW": "暴落",
      "zh-CN": "暴落",
      "ko": "crash",
      "vi": "crash",
      "id": "crash"
    }
  },
  {
    "id": "V1174",
    "w": "安定",
    "r": "あんてい",
    "m": {
      "en": "stability",
      "zh-TW": "安定",
      "zh-CN": "安定",
      "ko": "stability",
      "vi": "stability",
      "id": "stability"
    }
  },
  {
    "id": "V1175",
    "w": "不安定",
    "r": "ふあんてい",
    "m": {
      "en": "instability",
      "zh-TW": "不安定",
      "zh-CN": "不安定",
      "ko": "instability",
      "vi": "instability",
      "id": "instability"
    }
  },
  {
    "id": "V1176",
    "w": "景気",
    "r": "けいき",
    "m": {
      "en": "economy",
      "zh-TW": "景気",
      "zh-CN": "景気",
      "ko": "economy",
      "vi": "economy",
      "id": "economy"
    }
  },
  {
    "id": "V1177",
    "w": "好景気",
    "r": "こうけいき",
    "m": {
      "en": "boom",
      "zh-TW": "好景気",
      "zh-CN": "好景気",
      "ko": "boom",
      "vi": "boom",
      "id": "boom"
    }
  },
  {
    "id": "V1178",
    "w": "不景気",
    "r": "ふけいき",
    "m": {
      "en": "recession",
      "zh-TW": "不景気",
      "zh-CN": "不景気",
      "ko": "recession",
      "vi": "recession",
      "id": "recession"
    }
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
      "id": "inflation"
    }
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
      "id": "deflation"
    }
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
      "id": "strong yen"
    }
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
      "id": "weak yen"
    }
  },
  {
    "id": "V1183",
    "w": "為替",
    "r": "かわせ",
    "m": {
      "en": "exchange",
      "zh-TW": "為替",
      "zh-CN": "為替",
      "ko": "exchange",
      "vi": "exchange",
      "id": "exchange"
    }
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
      "id": "market price"
    }
  },
  {
    "id": "V1185",
    "w": "物価",
    "r": "ぶっか",
    "m": {
      "en": "prices",
      "zh-TW": "物価",
      "zh-CN": "物価",
      "ko": "prices",
      "vi": "prices",
      "id": "prices"
    }
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
      "id": "price increase"
    }
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
      "id": "price cut"
    }
  },
  {
    "id": "V1188",
    "w": "特価",
    "r": "とっか",
    "m": {
      "en": "special price",
      "zh-TW": "特価",
      "zh-CN": "特価",
      "ko": "special price",
      "vi": "special price",
      "id": "special price"
    }
  },
  {
    "id": "V1189",
    "w": "底値",
    "r": "そこね",
    "m": {
      "en": "bottom price",
      "zh-TW": "底値",
      "zh-CN": "底値",
      "ko": "bottom price",
      "vi": "bottom price",
      "id": "bottom price"
    }
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
      "id": "high price"
    }
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
      "id": "low price"
    }
  },
  {
    "id": "V1192",
    "w": "適正価格",
    "r": "てきせいかかく",
    "m": {
      "en": "fair price",
      "zh-TW": "適正価格",
      "zh-CN": "適正価格",
      "ko": "fair price",
      "vi": "fair price",
      "id": "fair price"
    }
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
      "id": "market"
    }
  },
  {
    "id": "V1194",
    "w": "独占",
    "r": "どくせん",
    "m": {
      "en": "monopoly",
      "zh-TW": "独占",
      "zh-CN": "独占",
      "ko": "monopoly",
      "vi": "monopoly",
      "id": "monopoly"
    }
  },
  {
    "id": "V1195",
    "w": "競争",
    "r": "きょうそう",
    "m": {
      "en": "competition",
      "zh-TW": "競争",
      "zh-CN": "競争",
      "ko": "competition",
      "vi": "competition",
      "id": "competition"
    }
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
      "id": "joint"
    }
  },
  {
    "id": "V1197",
    "w": "提携",
    "r": "ていけい",
    "m": {
      "en": "partnership",
      "zh-TW": "提携",
      "zh-CN": "提携",
      "ko": "partnership",
      "vi": "partnership",
      "id": "partnership"
    }
  },
  {
    "id": "V1198",
    "w": "合併",
    "r": "がっぺい",
    "m": {
      "en": "merger",
      "zh-TW": "合併",
      "zh-CN": "合併",
      "ko": "merger",
      "vi": "merger",
      "id": "merger"
    }
  },
  {
    "id": "V1199",
    "w": "買収",
    "r": "ばいしゅう",
    "m": {
      "en": "acquisition",
      "zh-TW": "買収",
      "zh-CN": "買収",
      "ko": "acquisition",
      "vi": "acquisition",
      "id": "acquisition"
    }
  },
  {
    "id": "V1200",
    "w": "破産",
    "r": "はさん",
    "m": {
      "en": "bankruptcy",
      "zh-TW": "破産",
      "zh-CN": "破産",
      "ko": "bankruptcy",
      "vi": "bankruptcy",
      "id": "bankruptcy"
    }
  },
  {
    "id": "V1201",
    "w": "倒産",
    "r": "とうさん",
    "m": {
      "en": "failure",
      "zh-TW": "倒産",
      "zh-CN": "倒産",
      "ko": "failure",
      "vi": "failure",
      "id": "failure"
    }
  },
  {
    "id": "V1202",
    "w": "再建",
    "r": "さいけん",
    "m": {
      "en": "reconstruction",
      "zh-TW": "再建",
      "zh-CN": "再建",
      "ko": "reconstruction",
      "vi": "reconstruction",
      "id": "reconstruction"
    }
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
      "id": "restructuring"
    }
  },
  {
    "id": "V1204",
    "w": "経営",
    "r": "けいえい",
    "m": {
      "en": "management",
      "zh-TW": "経営",
      "zh-CN": "経営",
      "ko": "management",
      "vi": "management",
      "id": "management"
    }
  },
  {
    "id": "V1205",
    "w": "企業",
    "r": "きぎょう",
    "m": {
      "en": "enterprise",
      "zh-TW": "企業",
      "zh-CN": "企業",
      "ko": "enterprise",
      "vi": "enterprise",
      "id": "enterprise"
    }
  },
  {
    "id": "V1206",
    "w": "中小企業",
    "r": "ちゅうしょうきぎょう",
    "m": {
      "en": "SME",
      "zh-TW": "中小企業",
      "zh-CN": "中小企業",
      "ko": "SME",
      "vi": "SME",
      "id": "SME"
    }
  },
  {
    "id": "V1207",
    "w": "大企業",
    "r": "だいきぎょう",
    "m": {
      "en": "large company",
      "zh-TW": "大企業",
      "zh-CN": "大企業",
      "ko": "large company",
      "vi": "large company",
      "id": "large company"
    }
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
      "id": "venture"
    }
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
      "id": "startup"
    }
  },
  {
    "id": "V1210",
    "w": "創業",
    "r": "そうぎょう",
    "m": {
      "en": "founding",
      "zh-TW": "創業",
      "zh-CN": "創業",
      "ko": "founding",
      "vi": "founding",
      "id": "founding"
    }
  },
  {
    "id": "V1211",
    "w": "老舗",
    "r": "しにせ",
    "m": {
      "en": "long-established",
      "zh-TW": "老舗",
      "zh-CN": "老舗",
      "ko": "long-established",
      "vi": "long-established",
      "id": "long-established"
    }
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
      "id": "headquarters"
    }
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
      "id": "subsidiary"
    }
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
      "id": "parent company"
    }
  },
  {
    "id": "V1215",
    "w": "関連会社",
    "r": "かんれんがいしゃ",
    "m": {
      "en": "affiliate",
      "zh-TW": "関連会社",
      "zh-CN": "関連会社",
      "ko": "affiliate",
      "vi": "affiliate",
      "id": "affiliate"
    }
  },
  {
    "id": "V1216",
    "w": "取引先",
    "r": "とりひきさき",
    "m": {
      "en": "client",
      "zh-TW": "取引先",
      "zh-CN": "取引先",
      "ko": "client",
      "vi": "client",
      "id": "client"
    }
  },
  {
    "id": "V1217",
    "w": "顧客",
    "r": "こきゃく",
    "m": {
      "en": "customer",
      "zh-TW": "顧客",
      "zh-CN": "顧客",
      "ko": "customer",
      "vi": "customer",
      "id": "customer"
    }
  },
  {
    "id": "V1218",
    "w": "得意先",
    "r": "とくいさき",
    "m": {
      "en": "regular customer",
      "zh-TW": "得意先",
      "zh-CN": "得意先",
      "ko": "regular customer",
      "vi": "regular customer",
      "id": "regular customer"
    }
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
      "id": "supplier"
    }
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
      "id": "ordering party"
    }
  },
  {
    "id": "V1221",
    "w": "納品先",
    "r": "のうひんさき",
    "m": {
      "en": "delivery destination",
      "zh-TW": "納品先",
      "zh-CN": "納品先",
      "ko": "delivery destination",
      "vi": "delivery destination",
      "id": "delivery destination"
    }
  },
  {
    "id": "V1222",
    "w": "請求先",
    "r": "せいきゅうさき",
    "m": {
      "en": "billing address",
      "zh-TW": "請求先",
      "zh-CN": "請求先",
      "ko": "billing address",
      "vi": "billing address",
      "id": "billing address"
    }
  },
  {
    "id": "V1223",
    "w": "契約書",
    "r": "けいやくしょ",
    "m": {
      "en": "contract",
      "zh-TW": "契約書",
      "zh-CN": "契約書",
      "ko": "contract",
      "vi": "contract",
      "id": "contract"
    }
  },
  {
    "id": "V1224",
    "w": "見積書",
    "r": "みつもりしょ",
    "m": {
      "en": "estimate",
      "zh-TW": "見積書",
      "zh-CN": "見積書",
      "ko": "estimate",
      "vi": "estimate",
      "id": "estimate"
    }
  },
  {
    "id": "V1225",
    "w": "請求書",
    "r": "せいきゅうしょ",
    "m": {
      "en": "invoice",
      "zh-TW": "請求書",
      "zh-CN": "請求書",
      "ko": "invoice",
      "vi": "invoice",
      "id": "invoice"
    }
  },
  {
    "id": "V1226",
    "w": "納品書",
    "r": "のうひんしょ",
    "m": {
      "en": "delivery note",
      "zh-TW": "納品書",
      "zh-CN": "納品書",
      "ko": "delivery note",
      "vi": "delivery note",
      "id": "delivery note"
    }
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
      "id": "report"
    }
  },
  {
    "id": "V1228",
    "w": "企画書",
    "r": "きかくしょ",
    "m": {
      "en": "proposal",
      "zh-TW": "企画書",
      "zh-CN": "企画書",
      "ko": "proposal",
      "vi": "proposal",
      "id": "proposal"
    }
  },
  {
    "id": "V1229",
    "w": "仕様書",
    "r": "しようしょ",
    "m": {
      "en": "specification",
      "zh-TW": "仕様書",
      "zh-CN": "仕様書",
      "ko": "specification",
      "vi": "specification",
      "id": "specification"
    }
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
      "id": "manual"
    }
  },
  {
    "id": "V1231",
    "w": "議事録",
    "r": "ぎじろく",
    "m": {
      "en": "minutes",
      "zh-TW": "議事録",
      "zh-CN": "議事録",
      "ko": "minutes",
      "vi": "minutes",
      "id": "minutes"
    }
  },
  {
    "id": "V1232",
    "w": "名刺",
    "r": "めいし",
    "m": {
      "en": "business card",
      "zh-TW": "名刺",
      "zh-CN": "名刺",
      "ko": "business card",
      "vi": "business card",
      "id": "business card"
    }
  },
  {
    "id": "V1233",
    "w": "封筒",
    "r": "ふうとう",
    "m": {
      "en": "envelope",
      "zh-TW": "封筒",
      "zh-CN": "封筒",
      "ko": "envelope",
      "vi": "envelope",
      "id": "envelope"
    }
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
      "id": "stamp"
    }
  },
  {
    "id": "V1235",
    "w": "速達",
    "r": "そくたつ",
    "m": {
      "en": "express mail",
      "zh-TW": "速達",
      "zh-CN": "速達",
      "ko": "express mail",
      "vi": "express mail",
      "id": "express mail"
    }
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
      "id": "registered mail"
    }
  },
  {
    "id": "V1237",
    "w": "宅配便",
    "r": "たくはいびん",
    "m": {
      "en": "courier",
      "zh-TW": "宅配便",
      "zh-CN": "宅配便",
      "ko": "courier",
      "vi": "courier",
      "id": "courier"
    }
  },
  {
    "id": "V1238",
    "w": "着払い",
    "r": "ちゃくばらい",
    "m": {
      "en": "cash on delivery",
      "zh-TW": "着払い",
      "zh-CN": "着払い",
      "ko": "cash on delivery",
      "vi": "cash on delivery",
      "id": "cash on delivery"
    }
  },
  {
    "id": "V1239",
    "w": "元払い",
    "r": "もとばらい",
    "m": {
      "en": "prepaid",
      "zh-TW": "元払い",
      "zh-CN": "元払い",
      "ko": "prepaid",
      "vi": "prepaid",
      "id": "prepaid"
    }
  },
  {
    "id": "V1240",
    "w": "同封",
    "r": "どうふう",
    "m": {
      "en": "enclosure",
      "zh-TW": "同封",
      "zh-CN": "同封",
      "ko": "enclosure",
      "vi": "enclosure",
      "id": "enclosure"
    }
  },
  {
    "id": "V1241",
    "w": "添付",
    "r": "てんぷ",
    "m": {
      "en": "attachment",
      "zh-TW": "添付",
      "zh-CN": "添付",
      "ko": "attachment",
      "vi": "attachment",
      "id": "attachment"
    }
  },
  {
    "id": "V1242",
    "w": "転送",
    "r": "てんそう",
    "m": {
      "en": "forwarding",
      "zh-TW": "転送",
      "zh-CN": "転送",
      "ko": "forwarding",
      "vi": "forwarding",
      "id": "forwarding"
    }
  },
  {
    "id": "V1243",
    "w": "返送",
    "r": "へんそう",
    "m": {
      "en": "return",
      "zh-TW": "返送",
      "zh-CN": "返送",
      "ko": "return",
      "vi": "return",
      "id": "return"
    }
  },
  {
    "id": "V1244",
    "w": "受取",
    "r": "うけとり",
    "m": {
      "en": "receipt",
      "zh-TW": "受取",
      "zh-CN": "受取",
      "ko": "receipt",
      "vi": "receipt",
      "id": "receipt"
    }
  },
  {
    "id": "V1245",
    "w": "配送",
    "r": "はいそう",
    "m": {
      "en": "delivery",
      "zh-TW": "配送",
      "zh-CN": "配送",
      "ko": "delivery",
      "vi": "delivery",
      "id": "delivery"
    }
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
      "id": "transportation"
    }
  },
  {
    "id": "V1247",
    "w": "輸送",
    "r": "ゆそう",
    "m": {
      "en": "transport",
      "zh-TW": "輸送",
      "zh-CN": "輸送",
      "ko": "transport",
      "vi": "transport",
      "id": "transport"
    }
  },
  {
    "id": "V1248",
    "w": "航空便",
    "r": "こうくうびん",
    "m": {
      "en": "airmail",
      "zh-TW": "航空便",
      "zh-CN": "航空便",
      "ko": "airmail",
      "vi": "airmail",
      "id": "airmail"
    }
  },
  {
    "id": "V1249",
    "w": "船便",
    "r": "ふなびん",
    "m": {
      "en": "sea mail",
      "zh-TW": "船便",
      "zh-CN": "船便",
      "ko": "sea mail",
      "vi": "sea mail",
      "id": "sea mail"
    }
  },
  {
    "id": "V1250",
    "w": "陸送",
    "r": "りくそう",
    "m": {
      "en": "land transport",
      "zh-TW": "陸送",
      "zh-CN": "陸送",
      "ko": "land transport",
      "vi": "land transport",
      "id": "land transport"
    }
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
      "id": "container"
    }
  },
  {
    "id": "V1252",
    "w": "積載",
    "r": "せきさい",
    "m": {
      "en": "loading",
      "zh-TW": "積載",
      "zh-CN": "積載",
      "ko": "loading",
      "vi": "loading",
      "id": "loading"
    }
  },
  {
    "id": "V1253",
    "w": "荷降ろし",
    "r": "におろし",
    "m": {
      "en": "unloading",
      "zh-TW": "荷降ろし",
      "zh-CN": "荷降ろし",
      "ko": "unloading",
      "vi": "unloading",
      "id": "unloading"
    }
  },
  {
    "id": "V1254",
    "w": "保管",
    "r": "ほかん",
    "m": {
      "en": "storage",
      "zh-TW": "保管",
      "zh-CN": "保管",
      "ko": "storage",
      "vi": "storage",
      "id": "storage"
    }
  },
  {
    "id": "V1255",
    "w": "物流",
    "r": "ぶつりゅう",
    "m": {
      "en": "logistics",
      "zh-TW": "物流",
      "zh-CN": "物流",
      "ko": "logistics",
      "vi": "logistics",
      "id": "logistics"
    }
  },
  {
    "id": "V1256",
    "w": "在庫管理",
    "r": "ざいこかんり",
    "m": {
      "en": "inventory management",
      "zh-TW": "在庫管理",
      "zh-CN": "在庫管理",
      "ko": "inventory management",
      "vi": "inventory management",
      "id": "inventory management"
    }
  },
  {
    "id": "V1257",
    "w": "品質管理",
    "r": "ひんしつかんり",
    "m": {
      "en": "quality control",
      "zh-TW": "品質管理",
      "zh-CN": "品質管理",
      "ko": "quality control",
      "vi": "quality control",
      "id": "quality control"
    }
  },
  {
    "id": "V1258",
    "w": "生産管理",
    "r": "せいさんかんり",
    "m": {
      "en": "production management",
      "zh-TW": "生産管理",
      "zh-CN": "生産管理",
      "ko": "production management",
      "vi": "production management",
      "id": "production management"
    }
  },
  {
    "id": "V1259",
    "w": "工程",
    "r": "こうてい",
    "m": {
      "en": "process",
      "zh-TW": "工程",
      "zh-CN": "工程",
      "ko": "process",
      "vi": "process",
      "id": "process"
    }
  },
  {
    "id": "V1260",
    "w": "組立",
    "r": "くみたて",
    "m": {
      "en": "assembly",
      "zh-TW": "組立",
      "zh-CN": "組立",
      "ko": "assembly",
      "vi": "assembly",
      "id": "assembly"
    }
  },
  {
    "id": "V1261",
    "w": "加工",
    "r": "かこう",
    "m": {
      "en": "processing",
      "zh-TW": "加工",
      "zh-CN": "加工",
      "ko": "processing",
      "vi": "processing",
      "id": "processing"
    }
  },
  {
    "id": "V1262",
    "w": "塗装",
    "r": "とそう",
    "m": {
      "en": "painting",
      "zh-TW": "塗装",
      "zh-CN": "塗装",
      "ko": "painting",
      "vi": "painting",
      "id": "painting"
    }
  },
  {
    "id": "V1263",
    "w": "溶接",
    "r": "ようせつ",
    "m": {
      "en": "welding",
      "zh-TW": "溶接",
      "zh-CN": "溶接",
      "ko": "welding",
      "vi": "welding",
      "id": "welding"
    }
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
      "id": "pressing"
    }
  },
  {
    "id": "V1265",
    "w": "成形",
    "r": "せいけい",
    "m": {
      "en": "molding",
      "zh-TW": "成形",
      "zh-CN": "成形",
      "ko": "molding",
      "vi": "molding",
      "id": "molding"
    }
  },
  {
    "id": "V1266",
    "w": "切削",
    "r": "せっさく",
    "m": {
      "en": "cutting",
      "zh-TW": "切削",
      "zh-CN": "切削",
      "ko": "cutting",
      "vi": "cutting",
      "id": "cutting"
    }
  },
  {
    "id": "V1267",
    "w": "研磨",
    "r": "けんま",
    "m": {
      "en": "polishing",
      "zh-TW": "研磨",
      "zh-CN": "研磨",
      "ko": "polishing",
      "vi": "polishing",
      "id": "polishing"
    }
  },
  {
    "id": "V1268",
    "w": "検査",
    "r": "けんさ",
    "m": {
      "en": "inspection",
      "zh-TW": "検査",
      "zh-CN": "検査",
      "ko": "inspection",
      "vi": "inspection",
      "id": "inspection"
    }
  },
  {
    "id": "V1269",
    "w": "測定",
    "r": "そくてい",
    "m": {
      "en": "measurement",
      "zh-TW": "測定",
      "zh-CN": "測定",
      "ko": "measurement",
      "vi": "measurement",
      "id": "measurement"
    }
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
      "id": "test"
    }
  },
  {
    "id": "V1271",
    "w": "設計",
    "r": "せっけい",
    "m": {
      "en": "design",
      "zh-TW": "設計",
      "zh-CN": "設計",
      "ko": "design",
      "vi": "design",
      "id": "design"
    }
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
      "id": "development"
    }
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
      "id": "research"
    }
  },
  {
    "id": "V1274",
    "w": "特許",
    "r": "とっきょ",
    "m": {
      "en": "patent",
      "zh-TW": "特許",
      "zh-CN": "特許",
      "ko": "patent",
      "vi": "patent",
      "id": "patent"
    }
  },
  {
    "id": "V1275",
    "w": "商標",
    "r": "しょうひょう",
    "m": {
      "en": "trademark",
      "zh-TW": "商標",
      "zh-CN": "商標",
      "ko": "trademark",
      "vi": "trademark",
      "id": "trademark"
    }
  },
  {
    "id": "V1276",
    "w": "著作権",
    "r": "ちょさくけん",
    "m": {
      "en": "copyright",
      "zh-TW": "著作権",
      "zh-CN": "著作権",
      "ko": "copyright",
      "vi": "copyright",
      "id": "copyright"
    }
  },
  {
    "id": "V1277",
    "w": "知的財産",
    "r": "ちてきざいさん",
    "m": {
      "en": "intellectual property",
      "zh-TW": "知的財産",
      "zh-CN": "知的財産",
      "ko": "intellectual property",
      "vi": "intellectual property",
      "id": "intellectual property"
    }
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
      "id": "license"
    }
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
      "id": "royalty"
    }
  },
  {
    "id": "V1280",
    "w": "革新",
    "r": "かくしん",
    "m": {
      "en": "innovation",
      "zh-TW": "革新",
      "zh-CN": "革新",
      "ko": "innovation",
      "vi": "innovation",
      "id": "innovation"
    }
  },
  {
    "id": "V1281",
    "w": "改良",
    "r": "かいりょう",
    "m": {
      "en": "improvement",
      "zh-TW": "改良",
      "zh-CN": "改良",
      "ko": "improvement",
      "vi": "improvement",
      "id": "improvement"
    }
  },
  {
    "id": "V1282",
    "w": "効率化",
    "r": "こうりつか",
    "m": {
      "en": "efficiency",
      "zh-TW": "効率化",
      "zh-CN": "効率化",
      "ko": "efficiency",
      "vi": "efficiency",
      "id": "efficiency"
    }
  },
  {
    "id": "V1283",
    "w": "自動化",
    "r": "じどうか",
    "m": {
      "en": "automation",
      "zh-TW": "自動化",
      "zh-CN": "自動化",
      "ko": "automation",
      "vi": "automation",
      "id": "automation"
    }
  },
  {
    "id": "V1284",
    "w": "省力化",
    "r": "しょうりょくか",
    "m": {
      "en": "labor saving",
      "zh-TW": "省力化",
      "zh-CN": "省力化",
      "ko": "labor saving",
      "vi": "labor saving",
      "id": "labor saving"
    }
  },
  {
    "id": "V1285",
    "w": "合理化",
    "r": "ごうりか",
    "m": {
      "en": "rationalization",
      "zh-TW": "合理化",
      "zh-CN": "合理化",
      "ko": "rationalization",
      "vi": "rationalization",
      "id": "rationalization"
    }
  },
  {
    "id": "V1286",
    "w": "標準化",
    "r": "ひょうじゅんか",
    "m": {
      "en": "standardization",
      "zh-TW": "標準化",
      "zh-CN": "標準化",
      "ko": "standardization",
      "vi": "standardization",
      "id": "standardization"
    }
  },
  {
    "id": "V1287",
    "w": "均一化",
    "r": "きんいつか",
    "m": {
      "en": "uniformity",
      "zh-TW": "均一化",
      "zh-CN": "均一化",
      "ko": "uniformity",
      "vi": "uniformity",
      "id": "uniformity"
    }
  },
  {
    "id": "V1288",
    "w": "差別化",
    "r": "さべつか",
    "m": {
      "en": "differentiation",
      "zh-TW": "差別化",
      "zh-CN": "差別化",
      "ko": "differentiation",
      "vi": "differentiation",
      "id": "differentiation"
    }
  },
  {
    "id": "V1289",
    "w": "多様化",
    "r": "たようか",
    "m": {
      "en": "diversification",
      "zh-TW": "多様化",
      "zh-CN": "多様化",
      "ko": "diversification",
      "vi": "diversification",
      "id": "diversification"
    }
  },
  {
    "id": "V1290",
    "w": "複雑化",
    "r": "ふくざつか",
    "m": {
      "en": "complication",
      "zh-TW": "複雑化",
      "zh-CN": "複雑化",
      "ko": "complication",
      "vi": "complication",
      "id": "complication"
    }
  },
  {
    "id": "V1291",
    "w": "簡素化",
    "r": "かんそか",
    "m": {
      "en": "simplification",
      "zh-TW": "簡素化",
      "zh-CN": "簡素化",
      "ko": "simplification",
      "vi": "simplification",
      "id": "simplification"
    }
  },
  {
    "id": "V1292",
    "w": "迅速化",
    "r": "じんそくか",
    "m": {
      "en": "acceleration",
      "zh-TW": "迅速化",
      "zh-CN": "迅速化",
      "ko": "acceleration",
      "vi": "acceleration",
      "id": "acceleration"
    }
  },
  {
    "id": "V1293",
    "w": "警告",
    "r": "けいこく",
    "m": {
      "en": "warning",
      "zh-TW": "警告",
      "zh-CN": "警告",
      "ko": "warning",
      "vi": "warning",
      "id": "warning"
    }
  },
  {
    "id": "V1294",
    "w": "承認",
    "r": "しょうにん",
    "m": {
      "en": "approval",
      "zh-TW": "承認",
      "zh-CN": "承認",
      "ko": "approval",
      "vi": "approval",
      "id": "approval"
    }
  },
  {
    "id": "V1295",
    "w": "認可",
    "r": "にんか",
    "m": {
      "en": "authorization",
      "zh-TW": "認可",
      "zh-CN": "認可",
      "ko": "authorization",
      "vi": "authorization",
      "id": "authorization"
    }
  },
  {
    "id": "V1296",
    "w": "免許",
    "r": "めんきょ",
    "m": {
      "en": "license",
      "zh-TW": "免許",
      "zh-CN": "免許",
      "ko": "license",
      "vi": "license",
      "id": "license"
    }
  },
  {
    "id": "V1297",
    "w": "資格",
    "r": "しかく",
    "m": {
      "en": "qualification",
      "zh-TW": "資格",
      "zh-CN": "資格",
      "ko": "qualification",
      "vi": "qualification",
      "id": "qualification"
    }
  },
  {
    "id": "V1298",
    "w": "認定",
    "r": "にんてい",
    "m": {
      "en": "certification",
      "zh-TW": "認定",
      "zh-CN": "認定",
      "ko": "certification",
      "vi": "certification",
      "id": "certification"
    }
  },
  {
    "id": "V1299",
    "w": "申請",
    "r": "しんせい",
    "m": {
      "en": "application",
      "zh-TW": "申請",
      "zh-CN": "申請",
      "ko": "application",
      "vi": "application",
      "id": "application"
    }
  },
  {
    "id": "V1300",
    "w": "審査",
    "r": "しんさ",
    "m": {
      "en": "examination",
      "zh-TW": "審査",
      "zh-CN": "審査",
      "ko": "examination",
      "vi": "examination",
      "id": "examination"
    }
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
      "id": "pass or fail"
    }
  },
  {
    "id": "V1302",
    "w": "取消",
    "r": "とりけし",
    "m": {
      "en": "cancellation",
      "zh-TW": "取消",
      "zh-CN": "取消",
      "ko": "cancellation",
      "vi": "cancellation",
      "id": "cancellation"
    }
  },
  {
    "id": "V1303",
    "w": "改正",
    "r": "かいせい",
    "m": {
      "en": "revision",
      "zh-TW": "改正",
      "zh-CN": "改正",
      "ko": "revision",
      "vi": "revision",
      "id": "revision"
    }
  },
  {
    "id": "V1304",
    "w": "改善",
    "r": "かいぜん",
    "m": {
      "en": "improvement",
      "zh-TW": "改善",
      "zh-CN": "改善",
      "ko": "improvement",
      "vi": "improvement",
      "id": "improvement"
    }
  },
  {
    "id": "V1305",
    "w": "改革",
    "r": "かいかく",
    "m": {
      "en": "reform",
      "zh-TW": "改革",
      "zh-CN": "改革",
      "ko": "reform",
      "vi": "reform",
      "id": "reform"
    }
  },
  {
    "id": "V1306",
    "w": "変革",
    "r": "へんかく",
    "m": {
      "en": "reform",
      "zh-TW": "変革",
      "zh-CN": "変革",
      "ko": "reform",
      "vi": "reform",
      "id": "reform"
    }
  },
  {
    "id": "V1307",
    "w": "転換",
    "r": "てんかん",
    "m": {
      "en": "conversion",
      "zh-TW": "転換",
      "zh-CN": "転換",
      "ko": "conversion",
      "vi": "conversion",
      "id": "conversion"
    }
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
      "id": "transition"
    }
  },
  {
    "id": "V1309",
    "w": "導入",
    "r": "どうにゅう",
    "m": {
      "en": "introduction",
      "zh-TW": "導入",
      "zh-CN": "導入",
      "ko": "introduction",
      "vi": "introduction",
      "id": "introduction"
    }
  },
  {
    "id": "V1310",
    "w": "撤退",
    "r": "てったい",
    "m": {
      "en": "withdrawal",
      "zh-TW": "撤退",
      "zh-CN": "撤退",
      "ko": "withdrawal",
      "vi": "withdrawal",
      "id": "withdrawal"
    }
  },
  {
    "id": "V1311",
    "w": "撤廃",
    "r": "てっぱい",
    "m": {
      "en": "abolition",
      "zh-TW": "撤廃",
      "zh-CN": "撤廃",
      "ko": "abolition",
      "vi": "abolition",
      "id": "abolition"
    }
  },
  {
    "id": "V1312",
    "w": "廃止",
    "r": "はいし",
    "m": {
      "en": "abolition",
      "zh-TW": "廃止",
      "zh-CN": "廃止",
      "ko": "abolition",
      "vi": "abolition",
      "id": "abolition"
    }
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
      "id": "resumption"
    }
  },
  {
    "id": "V1314",
    "w": "達成",
    "r": "たっせい",
    "m": {
      "en": "achievement",
      "zh-TW": "達成",
      "zh-CN": "達成",
      "ko": "achievement",
      "vi": "achievement",
      "id": "achievement"
    }
  },
  {
    "id": "V1315",
    "w": "実現",
    "r": "じつげん",
    "m": {
      "en": "realization",
      "zh-TW": "実現",
      "zh-CN": "実現",
      "ko": "realization",
      "vi": "realization",
      "id": "realization"
    }
  },
  {
    "id": "V1316",
    "w": "成立",
    "r": "せいりつ",
    "m": {
      "en": "establishment",
      "zh-TW": "成立",
      "zh-CN": "成立",
      "ko": "establishment",
      "vi": "establishment",
      "id": "establishment"
    }
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
      "id": "inauguration"
    }
  },
  {
    "id": "V1318",
    "w": "解散",
    "r": "かいさん",
    "m": {
      "en": "dissolution",
      "zh-TW": "解散",
      "zh-CN": "解散",
      "ko": "dissolution",
      "vi": "dissolution",
      "id": "dissolution"
    }
  },
  {
    "id": "V1319",
    "w": "統合",
    "r": "とうごう",
    "m": {
      "en": "integration",
      "zh-TW": "統合",
      "zh-CN": "統合",
      "ko": "integration",
      "vi": "integration",
      "id": "integration"
    }
  },
  {
    "id": "V1320",
    "w": "分離",
    "r": "ぶんり",
    "m": {
      "en": "separation",
      "zh-TW": "分離",
      "zh-CN": "分離",
      "ko": "separation",
      "vi": "separation",
      "id": "separation"
    }
  },
  {
    "id": "V1321",
    "w": "独立",
    "r": "どくりつ",
    "m": {
      "en": "independence",
      "zh-TW": "独立",
      "zh-CN": "独立",
      "ko": "independence",
      "vi": "independence",
      "id": "independence"
    }
  },
  {
    "id": "V1322",
    "w": "依存",
    "r": "いそん",
    "m": {
      "en": "dependence",
      "zh-TW": "依存",
      "zh-CN": "依存",
      "ko": "dependence",
      "vi": "dependence",
      "id": "dependence"
    }
  },
  {
    "id": "V1323",
    "w": "連携",
    "r": "れんけい",
    "m": {
      "en": "cooperation",
      "zh-TW": "連携",
      "zh-CN": "連携",
      "ko": "cooperation",
      "vi": "cooperation",
      "id": "cooperation"
    }
  },
  {
    "id": "V1324",
    "w": "協力",
    "r": "きょうりょく",
    "m": {
      "en": "cooperation",
      "zh-TW": "協力",
      "zh-CN": "協力",
      "ko": "cooperation",
      "vi": "cooperation",
      "id": "cooperation"
    }
  },
  {
    "id": "V1325",
    "w": "対立",
    "r": "たいりつ",
    "m": {
      "en": "opposition",
      "zh-TW": "対立",
      "zh-CN": "対立",
      "ko": "opposition",
      "vi": "opposition",
      "id": "opposition"
    }
  },
  {
    "id": "V1326",
    "w": "妥協",
    "r": "だきょう",
    "m": {
      "en": "compromise",
      "zh-TW": "妥協",
      "zh-CN": "妥協",
      "ko": "compromise",
      "vi": "compromise",
      "id": "compromise"
    }
  },
  {
    "id": "V1327",
    "w": "調整",
    "r": "ちょうせい",
    "m": {
      "en": "adjustment",
      "zh-TW": "調整",
      "zh-CN": "調整",
      "ko": "adjustment",
      "vi": "adjustment",
      "id": "adjustment"
    }
  },
  {
    "id": "V1328",
    "w": "仲介",
    "r": "ちゅうかい",
    "m": {
      "en": "mediation",
      "zh-TW": "仲介",
      "zh-CN": "仲介",
      "ko": "mediation",
      "vi": "mediation",
      "id": "mediation"
    }
  },
  {
    "id": "V1329",
    "w": "交渉",
    "r": "こうしょう",
    "m": {
      "en": "negotiation",
      "zh-TW": "交渉",
      "zh-CN": "交渉",
      "ko": "negotiation",
      "vi": "negotiation",
      "id": "negotiation"
    }
  },
  {
    "id": "V1330",
    "w": "締結",
    "r": "ていけつ",
    "m": {
      "en": "conclusion",
      "zh-TW": "締結",
      "zh-CN": "締結",
      "ko": "conclusion",
      "vi": "conclusion",
      "id": "conclusion"
    }
  },
  {
    "id": "V1331",
    "w": "履行",
    "r": "りこう",
    "m": {
      "en": "performance",
      "zh-TW": "履行",
      "zh-CN": "履行",
      "ko": "performance",
      "vi": "performance",
      "id": "performance"
    }
  },
  {
    "id": "V1332",
    "w": "違反",
    "r": "いはん",
    "m": {
      "en": "violation",
      "zh-TW": "違反",
      "zh-CN": "違反",
      "ko": "violation",
      "vi": "violation",
      "id": "violation"
    }
  },
  {
    "id": "V1333",
    "w": "解除",
    "r": "かいじょ",
    "m": {
      "en": "cancellation",
      "zh-TW": "解除",
      "zh-CN": "解除",
      "ko": "cancellation",
      "vi": "cancellation",
      "id": "cancellation"
    }
  },
  {
    "id": "V1334",
    "w": "解約",
    "r": "かいやく",
    "m": {
      "en": "termination",
      "zh-TW": "解約",
      "zh-CN": "解約",
      "ko": "termination",
      "vi": "termination",
      "id": "termination"
    }
  },
  {
    "id": "V1335",
    "w": "増加",
    "r": "ぞうか",
    "m": {
      "en": "increase",
      "zh-TW": "増加",
      "zh-CN": "増加",
      "ko": "increase",
      "vi": "increase",
      "id": "increase"
    }
  },
  {
    "id": "V1336",
    "w": "減少",
    "r": "げんしょう",
    "m": {
      "en": "decrease",
      "zh-TW": "減少",
      "zh-CN": "減少",
      "ko": "decrease",
      "vi": "decrease",
      "id": "decrease"
    }
  },
  {
    "id": "V1337",
    "w": "上昇",
    "r": "じょうしょう",
    "m": {
      "en": "rise",
      "zh-TW": "上昇",
      "zh-CN": "上昇",
      "ko": "rise",
      "vi": "rise",
      "id": "rise"
    }
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
      "id": "descent"
    }
  },
  {
    "id": "V1339",
    "w": "向上",
    "r": "こうじょう",
    "m": {
      "en": "improvement",
      "zh-TW": "向上",
      "zh-CN": "向上",
      "ko": "improvement",
      "vi": "improvement",
      "id": "improvement"
    }
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
      "id": "decline"
    }
  },
  {
    "id": "V1341",
    "w": "悪化",
    "r": "あっか",
    "m": {
      "en": "deterioration",
      "zh-TW": "悪化",
      "zh-CN": "悪化",
      "ko": "deterioration",
      "vi": "deterioration",
      "id": "deterioration"
    }
  },
  {
    "id": "V1342",
    "w": "回復",
    "r": "かいふく",
    "m": {
      "en": "recovery",
      "zh-TW": "回復",
      "zh-CN": "回復",
      "ko": "recovery",
      "vi": "recovery",
      "id": "recovery"
    }
  },
  {
    "id": "V1343",
    "w": "維持",
    "r": "いじ",
    "m": {
      "en": "maintenance",
      "zh-TW": "維持",
      "zh-CN": "維持",
      "ko": "maintenance",
      "vi": "maintenance",
      "id": "maintenance"
    }
  },
  {
    "id": "V1344",
    "w": "継続",
    "r": "けいぞく",
    "m": {
      "en": "continuation",
      "zh-TW": "継続",
      "zh-CN": "継続",
      "ko": "continuation",
      "vi": "continuation",
      "id": "continuation"
    }
  },
  {
    "id": "V1345",
    "w": "中断",
    "r": "ちゅうだん",
    "m": {
      "en": "interruption",
      "zh-TW": "中断",
      "zh-CN": "中断",
      "ko": "interruption",
      "vi": "interruption",
      "id": "interruption"
    }
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
      "id": "pause"
    }
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
      "id": "activity"
    }
  },
  {
    "id": "V1348",
    "w": "実行",
    "r": "じっこう",
    "m": {
      "en": "execution",
      "zh-TW": "実行",
      "zh-CN": "実行",
      "ko": "execution",
      "vi": "execution",
      "id": "execution"
    }
  },
  {
    "id": "V1349",
    "w": "遂行",
    "r": "すいこう",
    "m": {
      "en": "accomplishment",
      "zh-TW": "遂行",
      "zh-CN": "遂行",
      "ko": "accomplishment",
      "vi": "accomplishment",
      "id": "accomplishment"
    }
  },
  {
    "id": "V1350",
    "w": "推進",
    "r": "すいしん",
    "m": {
      "en": "promotion",
      "zh-TW": "推進",
      "zh-CN": "推進",
      "ko": "promotion",
      "vi": "promotion",
      "id": "promotion"
    }
  },
  {
    "id": "V1351",
    "w": "促進",
    "r": "そくしん",
    "m": {
      "en": "acceleration",
      "zh-TW": "促進",
      "zh-CN": "促進",
      "ko": "acceleration",
      "vi": "acceleration",
      "id": "acceleration"
    }
  },
  {
    "id": "V1352",
    "w": "抑制",
    "r": "よくせい",
    "m": {
      "en": "restraint",
      "zh-TW": "抑制",
      "zh-CN": "抑制",
      "ko": "restraint",
      "vi": "restraint",
      "id": "restraint"
    }
  },
  {
    "id": "V1353",
    "w": "規制",
    "r": "きせい",
    "m": {
      "en": "regulation",
      "zh-TW": "規制",
      "zh-CN": "規制",
      "ko": "regulation",
      "vi": "regulation",
      "id": "regulation"
    }
  },
  {
    "id": "V1354",
    "w": "緩和",
    "r": "かんわ",
    "m": {
      "en": "relaxation",
      "zh-TW": "緩和",
      "zh-CN": "緩和",
      "ko": "relaxation",
      "vi": "relaxation",
      "id": "relaxation"
    }
  },
  {
    "id": "V1355",
    "w": "強化",
    "r": "きょうか",
    "m": {
      "en": "strengthening",
      "zh-TW": "強化",
      "zh-CN": "強化",
      "ko": "strengthening",
      "vi": "strengthening",
      "id": "strengthening"
    }
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
      "id": "weakening"
    }
  },
  {
    "id": "V1357",
    "w": "充実",
    "r": "じゅうじつ",
    "m": {
      "en": "enhancement",
      "zh-TW": "充実",
      "zh-CN": "充実",
      "ko": "enhancement",
      "vi": "enhancement",
      "id": "enhancement"
    }
  },
  {
    "id": "V1358",
    "w": "整備",
    "r": "せいび",
    "m": {
      "en": "maintenance",
      "zh-TW": "整備",
      "zh-CN": "整備",
      "ko": "maintenance",
      "vi": "maintenance",
      "id": "maintenance"
    }
  },
  {
    "id": "V1359",
    "w": "対応",
    "r": "たいおう",
    "m": {
      "en": "response",
      "zh-TW": "対応",
      "zh-CN": "対応",
      "ko": "response",
      "vi": "response",
      "id": "response"
    }
  },
  {
    "id": "V1360",
    "w": "対処",
    "r": "たいしょ",
    "m": {
      "en": "coping",
      "zh-TW": "対処",
      "zh-CN": "対処",
      "ko": "coping",
      "vi": "coping",
      "id": "coping"
    }
  },
  {
    "id": "V1361",
    "w": "処理",
    "r": "しょり",
    "m": {
      "en": "processing",
      "zh-TW": "処理",
      "zh-CN": "処理",
      "ko": "processing",
      "vi": "processing",
      "id": "processing"
    }
  },
  {
    "id": "V1362",
    "w": "管理",
    "r": "かんり",
    "m": {
      "en": "management",
      "zh-TW": "管理",
      "zh-CN": "管理",
      "ko": "management",
      "vi": "management",
      "id": "management"
    }
  },
  {
    "id": "V1363",
    "w": "監視",
    "r": "かんし",
    "m": {
      "en": "monitoring",
      "zh-TW": "監視",
      "zh-CN": "監視",
      "ko": "monitoring",
      "vi": "monitoring",
      "id": "monitoring"
    }
  },
  {
    "id": "V1364",
    "w": "点検",
    "r": "てんけん",
    "m": {
      "en": "inspection",
      "zh-TW": "点検",
      "zh-CN": "点検",
      "ko": "inspection",
      "vi": "inspection",
      "id": "inspection"
    }
  },
  {
    "id": "V1365",
    "w": "検証",
    "r": "けんしょう",
    "m": {
      "en": "verification",
      "zh-TW": "検証",
      "zh-CN": "検証",
      "ko": "verification",
      "vi": "verification",
      "id": "verification"
    }
  },
  {
    "id": "V1366",
    "w": "判定",
    "r": "はんてい",
    "m": {
      "en": "judgment",
      "zh-TW": "判定",
      "zh-CN": "判定",
      "ko": "judgment",
      "vi": "judgment",
      "id": "judgment"
    }
  },
  {
    "id": "V1367",
    "w": "選定",
    "r": "せんてい",
    "m": {
      "en": "selection",
      "zh-TW": "選定",
      "zh-CN": "選定",
      "ko": "selection",
      "vi": "selection",
      "id": "selection"
    }
  },
  {
    "id": "V1368",
    "w": "却下",
    "r": "きゃっか",
    "m": {
      "en": "rejection",
      "zh-TW": "却下",
      "zh-CN": "却下",
      "ko": "rejection",
      "vi": "rejection",
      "id": "rejection"
    }
  },
  {
    "id": "V1369",
    "w": "否認",
    "r": "ひにん",
    "m": {
      "en": "denial",
      "zh-TW": "否認",
      "zh-CN": "否認",
      "ko": "denial",
      "vi": "denial",
      "id": "denial"
    }
  },
  {
    "id": "V1370",
    "w": "指定",
    "r": "してい",
    "m": {
      "en": "designation",
      "zh-TW": "指定",
      "zh-CN": "指定",
      "ko": "designation",
      "vi": "designation",
      "id": "designation"
    }
  },
  {
    "id": "V1371",
    "w": "発令",
    "r": "はつれい",
    "m": {
      "en": "issuance",
      "zh-TW": "発令",
      "zh-CN": "発令",
      "ko": "issuance",
      "vi": "issuance",
      "id": "issuance"
    }
  },
  {
    "id": "V1372",
    "w": "施行",
    "r": "しこう",
    "m": {
      "en": "enforcement",
      "zh-TW": "施行",
      "zh-CN": "施行",
      "ko": "enforcement",
      "vi": "enforcement",
      "id": "enforcement"
    }
  },
  {
    "id": "V1373",
    "w": "適用",
    "r": "てきよう",
    "m": {
      "en": "application",
      "zh-TW": "適用",
      "zh-CN": "適用",
      "ko": "application",
      "vi": "application",
      "id": "application"
    }
  },
  {
    "id": "V1374",
    "w": "除外",
    "r": "じょがい",
    "m": {
      "en": "exclusion",
      "zh-TW": "除外",
      "zh-CN": "除外",
      "ko": "exclusion",
      "vi": "exclusion",
      "id": "exclusion"
    }
  },
  {
    "id": "V1375",
    "w": "対象",
    "r": "たいしょう",
    "m": {
      "en": "target",
      "zh-TW": "対象",
      "zh-CN": "対象",
      "ko": "target",
      "vi": "target",
      "id": "target"
    }
  },
  {
    "id": "V1376",
    "w": "基準",
    "r": "きじゅん",
    "m": {
      "en": "standard",
      "zh-TW": "基準",
      "zh-CN": "基準",
      "ko": "standard",
      "vi": "standard",
      "id": "standard"
    }
  },
  {
    "id": "V1377",
    "w": "条件",
    "r": "じょうけん",
    "m": {
      "en": "condition",
      "zh-TW": "条件",
      "zh-CN": "条件",
      "ko": "condition",
      "vi": "condition",
      "id": "condition"
    }
  },
  {
    "id": "V1378",
    "w": "要件",
    "r": "ようけん",
    "m": {
      "en": "requirement",
      "zh-TW": "要件",
      "zh-CN": "要件",
      "ko": "requirement",
      "vi": "requirement",
      "id": "requirement"
    }
  },
  {
    "id": "V1379",
    "w": "権限",
    "r": "けんげん",
    "m": {
      "en": "authority",
      "zh-TW": "権限",
      "zh-CN": "権限",
      "ko": "authority",
      "vi": "authority",
      "id": "authority"
    }
  },
  {
    "id": "V1380",
    "w": "機能",
    "r": "きのう",
    "m": {
      "en": "function",
      "zh-TW": "機能",
      "zh-CN": "機能",
      "ko": "function",
      "vi": "function",
      "id": "function"
    }
  },
  {
    "id": "V1381",
    "w": "性能",
    "r": "せいのう",
    "m": {
      "en": "performance",
      "zh-TW": "性能",
      "zh-CN": "性能",
      "ko": "performance",
      "vi": "performance",
      "id": "performance"
    }
  },
  {
    "id": "V1382",
    "w": "効果",
    "r": "こうか",
    "m": {
      "en": "effect",
      "zh-TW": "効果",
      "zh-CN": "効果",
      "ko": "effect",
      "vi": "effect",
      "id": "effect"
    }
  },
  {
    "id": "V1383",
    "w": "影響",
    "r": "えいきょう",
    "m": {
      "en": "influence",
      "zh-TW": "影響",
      "zh-CN": "影響",
      "ko": "influence",
      "vi": "influence",
      "id": "influence"
    }
  },
  {
    "id": "V1384",
    "w": "成果",
    "r": "せいか",
    "m": {
      "en": "achievement",
      "zh-TW": "成果",
      "zh-CN": "成果",
      "ko": "achievement",
      "vi": "achievement",
      "id": "achievement"
    }
  },
  {
    "id": "V1385",
    "w": "実績",
    "r": "じっせき",
    "m": {
      "en": "track record",
      "zh-TW": "実績",
      "zh-CN": "実績",
      "ko": "track record",
      "vi": "track record",
      "id": "track record"
    }
  },
  {
    "id": "V1386",
    "w": "業績",
    "r": "ぎょうせき",
    "m": {
      "en": "performance",
      "zh-TW": "業績",
      "zh-CN": "業績",
      "ko": "performance",
      "vi": "performance",
      "id": "performance"
    }
  },
  {
    "id": "V1387",
    "w": "評判",
    "r": "ひょうばん",
    "m": {
      "en": "reputation",
      "zh-TW": "評判",
      "zh-CN": "評判",
      "ko": "reputation",
      "vi": "reputation",
      "id": "reputation"
    }
  },
  {
    "id": "V1388",
    "w": "信用",
    "r": "しんよう",
    "m": {
      "en": "credit",
      "zh-TW": "信用",
      "zh-CN": "信用",
      "ko": "credit",
      "vi": "credit",
      "id": "credit"
    }
  },
  {
    "id": "V1389",
    "w": "実力",
    "r": "じつりょく",
    "m": {
      "en": "ability",
      "zh-TW": "実力",
      "zh-CN": "実力",
      "ko": "ability",
      "vi": "ability",
      "id": "ability"
    }
  },
  {
    "id": "V1390",
    "w": "学歴",
    "r": "がくれき",
    "m": {
      "en": "education",
      "zh-TW": "学歴",
      "zh-CN": "学歴",
      "ko": "education",
      "vi": "education",
      "id": "education"
    }
  },
  {
    "id": "V1391",
    "w": "職歴",
    "r": "しょくれき",
    "m": {
      "en": "career",
      "zh-TW": "職歴",
      "zh-CN": "職歴",
      "ko": "career",
      "vi": "career",
      "id": "career"
    }
  },
  {
    "id": "V1392",
    "w": "履歴",
    "r": "りれき",
    "m": {
      "en": "history",
      "zh-TW": "履歴",
      "zh-CN": "履歴",
      "ko": "history",
      "vi": "history",
      "id": "history"
    }
  },
  {
    "id": "V1393",
    "w": "経歴",
    "r": "けいれき",
    "m": {
      "en": "background",
      "zh-TW": "経歴",
      "zh-CN": "経歴",
      "ko": "background",
      "vi": "background",
      "id": "background"
    }
  },
  {
    "id": "V1394",
    "w": "略歴",
    "r": "りゃくれき",
    "m": {
      "en": "brief history",
      "zh-TW": "略歴",
      "zh-CN": "略歴",
      "ko": "brief history",
      "vi": "brief history",
      "id": "brief history"
    }
  },
  {
    "id": "V1395",
    "w": "詳細",
    "r": "しょうさい",
    "m": {
      "en": "details",
      "zh-TW": "詳細",
      "zh-CN": "詳細",
      "ko": "details",
      "vi": "details",
      "id": "details"
    }
  },
  {
    "id": "V1396",
    "w": "概要",
    "r": "がいよう",
    "m": {
      "en": "outline",
      "zh-TW": "概要",
      "zh-CN": "概要",
      "ko": "outline",
      "vi": "outline",
      "id": "outline"
    }
  },
  {
    "id": "V1397",
    "w": "要約",
    "r": "ようやく",
    "m": {
      "en": "summary",
      "zh-TW": "要約",
      "zh-CN": "要約",
      "ko": "summary",
      "vi": "summary",
      "id": "summary"
    }
  },
  {
    "id": "V1398",
    "w": "要点",
    "r": "ようてん",
    "m": {
      "en": "main point",
      "zh-TW": "要点",
      "zh-CN": "要点",
      "ko": "main point",
      "vi": "main point",
      "id": "main point"
    }
  },
  {
    "id": "V1399",
    "w": "論点",
    "r": "ろんてん",
    "m": {
      "en": "issue",
      "zh-TW": "論点",
      "zh-CN": "論点",
      "ko": "issue",
      "vi": "issue",
      "id": "issue"
    }
  },
  {
    "id": "V1400",
    "w": "争点",
    "r": "そうてん",
    "m": {
      "en": "point of contention",
      "zh-TW": "争点",
      "zh-CN": "争点",
      "ko": "point of contention",
      "vi": "point of contention",
      "id": "point of contention"
    }
  },
  {
    "id": "V1401",
    "w": "焦点",
    "r": "しょうてん",
    "m": {
      "en": "focus",
      "zh-TW": "焦点",
      "zh-CN": "焦点",
      "ko": "focus",
      "vi": "focus",
      "id": "focus"
    }
  },
  {
    "id": "V1402",
    "w": "視点",
    "r": "してん",
    "m": {
      "en": "viewpoint",
      "zh-TW": "視点",
      "zh-CN": "視点",
      "ko": "viewpoint",
      "vi": "viewpoint",
      "id": "viewpoint"
    }
  },
  {
    "id": "V1403",
    "w": "観点",
    "r": "かんてん",
    "m": {
      "en": "perspective",
      "zh-TW": "観点",
      "zh-CN": "観点",
      "ko": "perspective",
      "vi": "perspective",
      "id": "perspective"
    }
  },
  {
    "id": "V1404",
    "w": "立場",
    "r": "たちば",
    "m": {
      "en": "standpoint",
      "zh-TW": "立場",
      "zh-CN": "立場",
      "ko": "standpoint",
      "vi": "standpoint",
      "id": "standpoint"
    }
  },
  {
    "id": "V1405",
    "w": "見解",
    "r": "けんかい",
    "m": {
      "en": "view",
      "zh-TW": "見解",
      "zh-CN": "見解",
      "ko": "view",
      "vi": "view",
      "id": "view"
    }
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
      "id": "way of thinking"
    }
  },
  {
    "id": "V1407",
    "w": "方針",
    "r": "ほうしん",
    "m": {
      "en": "policy",
      "zh-TW": "方針",
      "zh-CN": "方針",
      "ko": "policy",
      "vi": "policy",
      "id": "policy"
    }
  },
  {
    "id": "V1408",
    "w": "目標",
    "r": "もくひょう",
    "m": {
      "en": "goal",
      "zh-TW": "目標",
      "zh-CN": "目標",
      "ko": "goal",
      "vi": "goal",
      "id": "goal"
    }
  },
  {
    "id": "V1409",
    "w": "狙い",
    "r": "ねらい",
    "m": {
      "en": "aim",
      "zh-TW": "狙い",
      "zh-CN": "狙い",
      "ko": "aim",
      "vi": "aim",
      "id": "aim"
    }
  },
  {
    "id": "V1410",
    "w": "趣旨",
    "r": "しゅし",
    "m": {
      "en": "purpose",
      "zh-TW": "趣旨",
      "zh-CN": "趣旨",
      "ko": "purpose",
      "vi": "purpose",
      "id": "purpose"
    }
  },
  {
    "id": "V1411",
    "w": "理念",
    "r": "りねん",
    "m": {
      "en": "principle",
      "zh-TW": "理念",
      "zh-CN": "理念",
      "ko": "principle",
      "vi": "principle",
      "id": "principle"
    }
  },
  {
    "id": "V1412",
    "w": "信念",
    "r": "しんねん",
    "m": {
      "en": "conviction",
      "zh-TW": "信念",
      "zh-CN": "信念",
      "ko": "conviction",
      "vi": "conviction",
      "id": "conviction"
    }
  },
  {
    "id": "V1413",
    "w": "価値観",
    "r": "かちかん",
    "m": {
      "en": "values",
      "zh-TW": "価値観",
      "zh-CN": "価値観",
      "ko": "values",
      "vi": "values",
      "id": "values"
    }
  },
  {
    "id": "V1414",
    "w": "世界観",
    "r": "せかいかん",
    "m": {
      "en": "worldview",
      "zh-TW": "世界観",
      "zh-CN": "世界観",
      "ko": "worldview",
      "vi": "worldview",
      "id": "worldview"
    }
  },
  {
    "id": "V1415",
    "w": "人生観",
    "r": "じんせいかん",
    "m": {
      "en": "view of life",
      "zh-TW": "人生観",
      "zh-CN": "人生観",
      "ko": "view of life",
      "vi": "view of life",
      "id": "view of life"
    }
  },
  {
    "id": "V1416",
    "w": "死生観",
    "r": "しせいかん",
    "m": {
      "en": "view of life and death",
      "zh-TW": "死生観",
      "zh-CN": "死生観",
      "ko": "view of life and death",
      "vi": "view of life and death",
      "id": "view of life and death"
    }
  },
  {
    "id": "V1417",
    "w": "常識",
    "r": "じょうしき",
    "m": {
      "en": "common sense",
      "zh-TW": "常識",
      "zh-CN": "常識",
      "ko": "common sense",
      "vi": "common sense",
      "id": "common sense"
    }
  },
  {
    "id": "V1418",
    "w": "良識",
    "r": "りょうしき",
    "m": {
      "en": "good sense",
      "zh-TW": "良識",
      "zh-CN": "良識",
      "ko": "good sense",
      "vi": "good sense",
      "id": "good sense"
    }
  },
  {
    "id": "V1419",
    "w": "道徳",
    "r": "どうとく",
    "m": {
      "en": "morality",
      "zh-TW": "道徳",
      "zh-CN": "道徳",
      "ko": "morality",
      "vi": "morality",
      "id": "morality"
    }
  },
  {
    "id": "V1420",
    "w": "倫理",
    "r": "りんり",
    "m": {
      "en": "ethics",
      "zh-TW": "倫理",
      "zh-CN": "倫理",
      "ko": "ethics",
      "vi": "ethics",
      "id": "ethics"
    }
  },
  {
    "id": "V1421",
    "w": "礼儀",
    "r": "れいぎ",
    "m": {
      "en": "etiquette",
      "zh-TW": "礼儀",
      "zh-CN": "礼儀",
      "ko": "etiquette",
      "vi": "etiquette",
      "id": "etiquette"
    }
  },
  {
    "id": "V1422",
    "w": "作法",
    "r": "さほう",
    "m": {
      "en": "manners",
      "zh-TW": "作法",
      "zh-CN": "作法",
      "ko": "manners",
      "vi": "manners",
      "id": "manners"
    }
  },
  {
    "id": "V1423",
    "w": "振る舞い",
    "r": "ふるまい",
    "m": {
      "en": "behavior",
      "zh-TW": "振る舞い",
      "zh-CN": "振る舞い",
      "ko": "behavior",
      "vi": "behavior",
      "id": "behavior"
    }
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
      "id": "souvenir"
    }
  },
  {
    "id": "V1425",
    "w": "横断歩道",
    "r": "おうだんほどう",
    "m": {
      "en": "pedestrian crossing",
      "zh-TW": "横断歩道",
      "zh-CN": "横断歩道",
      "ko": "pedestrian crossing",
      "vi": "pedestrian crossing",
      "id": "pedestrian crossing"
    }
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
      "id": "pedestrian bridge"
    }
  },
  {
    "id": "V1427",
    "w": "心配",
    "r": "しんぱい",
    "m": {
      "en": "worry",
      "zh-TW": "心配",
      "zh-CN": "心配",
      "ko": "worry",
      "vi": "worry",
      "id": "worry"
    }
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
      "id": "relief"
    }
  },
  {
    "id": "V1429",
    "w": "悲しい",
    "r": "かなしい",
    "m": {
      "en": "sad",
      "zh-TW": "悲しい",
      "zh-CN": "悲しい",
      "ko": "sad",
      "vi": "sad",
      "id": "sad"
    }
  },
  {
    "id": "V1430",
    "w": "寂しい",
    "r": "さびしい",
    "m": {
      "en": "lonely",
      "zh-TW": "寂しい",
      "zh-CN": "寂しい",
      "ko": "lonely",
      "vi": "lonely",
      "id": "lonely"
    }
  },
  {
    "id": "V1431",
    "w": "羨ましい",
    "r": "うらやましい",
    "m": {
      "en": "envious",
      "zh-TW": "羨ましい",
      "zh-CN": "羨ましい",
      "ko": "envious",
      "vi": "envious",
      "id": "envious"
    }
  },
  {
    "id": "V1432",
    "w": "懐かしい",
    "r": "なつかしい",
    "m": {
      "en": "nostalgic",
      "zh-TW": "懐かしい",
      "zh-CN": "懐かしい",
      "ko": "nostalgic",
      "vi": "nostalgic",
      "id": "nostalgic"
    }
  },
  {
    "id": "V1433",
    "w": "珍しい",
    "r": "めずらしい",
    "m": {
      "en": "rare",
      "zh-TW": "珍しい",
      "zh-CN": "珍しい",
      "ko": "rare",
      "vi": "rare",
      "id": "rare"
    }
  },
  {
    "id": "V1434",
    "w": "恐ろしい",
    "r": "おそろしい",
    "m": {
      "en": "frightening",
      "zh-TW": "恐ろしい",
      "zh-CN": "恐ろしい",
      "ko": "frightening",
      "vi": "frightening",
      "id": "frightening"
    }
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
      "id": "correct"
    }
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
      "id": "kind"
    }
  },
  {
    "id": "V1437",
    "w": "厳しい",
    "r": "きびしい",
    "m": {
      "en": "strict",
      "zh-TW": "厳しい",
      "zh-CN": "厳しい",
      "ko": "strict",
      "vi": "strict",
      "id": "strict"
    }
  },
  {
    "id": "V1438",
    "w": "激しい",
    "r": "はげしい",
    "m": {
      "en": "intense",
      "zh-TW": "激しい",
      "zh-CN": "激しい",
      "ko": "intense",
      "vi": "intense",
      "id": "intense"
    }
  },
  {
    "id": "V1439",
    "w": "詳しい",
    "r": "くわしい",
    "m": {
      "en": "detailed",
      "zh-TW": "詳しい",
      "zh-CN": "詳しい",
      "ko": "detailed",
      "vi": "detailed",
      "id": "detailed"
    }
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
      "id": "close/friendly"
    }
  },
  {
    "id": "V1441",
    "w": "等しい",
    "r": "ひとしい",
    "m": {
      "en": "equal",
      "zh-TW": "等しい",
      "zh-CN": "等しい",
      "ko": "equal",
      "vi": "equal",
      "id": "equal"
    }
  },
  {
    "id": "V1442",
    "w": "忙しい",
    "r": "いそがしい",
    "m": {
      "en": "busy",
      "zh-TW": "忙しい",
      "zh-CN": "忙しい",
      "ko": "busy",
      "vi": "busy",
      "id": "busy"
    }
  },
  {
    "id": "V1443",
    "w": "苦しい",
    "r": "くるしい",
    "m": {
      "en": "painful",
      "zh-TW": "苦しい",
      "zh-CN": "苦しい",
      "ko": "painful",
      "vi": "painful",
      "id": "painful"
    }
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
      "id": "fun"
    }
  },
  {
    "id": "V1445",
    "w": "美しい",
    "r": "うつくしい",
    "m": {
      "en": "beautiful",
      "zh-TW": "美しい",
      "zh-CN": "美しい",
      "ko": "beautiful",
      "vi": "beautiful",
      "id": "beautiful"
    }
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
      "id": "new"
    }
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
      "id": "old"
    }
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
      "id": "bright"
    }
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
      "id": "dark"
    }
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
      "id": "wide"
    }
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
      "id": "narrow"
    }
  },
  {
    "id": "V1452",
    "w": "浅い",
    "r": "あさい",
    "m": {
      "en": "shallow",
      "zh-TW": "浅い",
      "zh-CN": "浅い",
      "ko": "shallow",
      "vi": "shallow",
      "id": "shallow"
    }
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
      "id": "thick"
    }
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
      "id": "hard"
    }
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
      "id": "soft"
    }
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
      "id": "heavy"
    }
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
      "id": "light"
    }
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
      "id": "fast"
    }
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
      "id": "slow"
    }
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
      "id": "near"
    }
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
      "id": "far"
    }
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
      "id": "long"
    }
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
      "id": "short"
    }
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
      "id": "high/expensive"
    }
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
      "id": "low"
    }
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
      "id": "cheap"
    }
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
      "id": "tool"
    }
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
      "id": "goods"
    }
  },
  {
    "id": "V1469",
    "w": "申込む",
    "r": "もうしこむ",
    "m": {
      "en": "to apply",
      "zh-TW": "申込む",
      "zh-CN": "申込む",
      "ko": "to apply",
      "vi": "to apply",
      "id": "to apply"
    }
  },
  {
    "id": "V1470",
    "w": "証明",
    "r": "しょうめい",
    "m": {
      "en": "proof",
      "zh-TW": "証明",
      "zh-CN": "証明",
      "ko": "proof",
      "vi": "proof",
      "id": "proof"
    }
  },
  {
    "id": "V1471",
    "w": "了解",
    "r": "りょうかい",
    "m": {
      "en": "understanding",
      "zh-TW": "了解",
      "zh-CN": "了解",
      "ko": "understanding",
      "vi": "understanding",
      "id": "understanding"
    }
  },
  {
    "id": "V1472",
    "w": "承知",
    "r": "しょうち",
    "m": {
      "en": "consent",
      "zh-TW": "承知",
      "zh-CN": "承知",
      "ko": "consent",
      "vi": "consent",
      "id": "consent"
    }
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
      "id": "agreement"
    }
  },
  {
    "id": "V1474",
    "w": "取引",
    "r": "とりひき",
    "m": {
      "en": "transaction",
      "zh-TW": "取引",
      "zh-CN": "取引",
      "ko": "transaction",
      "vi": "transaction",
      "id": "transaction"
    }
  },
  {
    "id": "V1475",
    "w": "打ち合わせ",
    "r": "うちあわせ",
    "m": {
      "en": "meeting",
      "zh-TW": "打ち合わせ",
      "zh-CN": "打ち合わせ",
      "ko": "meeting",
      "vi": "meeting",
      "id": "meeting"
    }
  },
  {
    "id": "V1476",
    "w": "議論",
    "r": "ぎろん",
    "m": {
      "en": "discussion",
      "zh-TW": "議論",
      "zh-CN": "議論",
      "ko": "discussion",
      "vi": "discussion",
      "id": "discussion"
    }
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
      "id": "notice"
    }
  },
  {
    "id": "V1478",
    "w": "招待",
    "r": "しょうたい",
    "m": {
      "en": "invitation",
      "zh-TW": "招待",
      "zh-CN": "招待",
      "ko": "invitation",
      "vi": "invitation",
      "id": "invitation"
    }
  },
  {
    "id": "V1479",
    "w": "歓迎",
    "r": "かんげい",
    "m": {
      "en": "welcome",
      "zh-TW": "歓迎",
      "zh-CN": "歓迎",
      "ko": "welcome",
      "vi": "welcome",
      "id": "welcome"
    }
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
      "id": "seeing off"
    }
  },
  {
    "id": "V1481",
    "w": "出迎え",
    "r": "でむかえ",
    "m": {
      "en": "meeting someone",
      "zh-TW": "出迎え",
      "zh-CN": "出迎え",
      "ko": "meeting someone",
      "vi": "meeting someone",
      "id": "meeting someone"
    }
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
      "id": "parting"
    }
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
      "id": "reunion"
    }
  },
  {
    "id": "V1484",
    "w": "挨拶",
    "r": "あいさつ",
    "m": {
      "en": "greeting",
      "zh-TW": "挨拶",
      "zh-CN": "挨拶",
      "ko": "greeting",
      "vi": "greeting",
      "id": "greeting"
    }
  },
  {
    "id": "V1485",
    "w": "お礼",
    "r": "おれい",
    "m": {
      "en": "thanks",
      "zh-TW": "お礼",
      "zh-CN": "お礼",
      "ko": "thanks",
      "vi": "thanks",
      "id": "thanks"
    }
  },
  {
    "id": "V1486",
    "w": "お詫び",
    "r": "おわび",
    "m": {
      "en": "apology",
      "zh-TW": "お詫び",
      "zh-CN": "お詫び",
      "ko": "apology",
      "vi": "apology",
      "id": "apology"
    }
  },
  {
    "id": "V1487",
    "w": "お祝い",
    "r": "おいわい",
    "m": {
      "en": "celebration",
      "zh-TW": "お祝い",
      "zh-CN": "お祝い",
      "ko": "celebration",
      "vi": "celebration",
      "id": "celebration"
    }
  },
  {
    "id": "V1488",
    "w": "お見舞い",
    "r": "おみまい",
    "m": {
      "en": "visit to sick person",
      "zh-TW": "お見舞い",
      "zh-CN": "お見舞い",
      "ko": "visit to sick person",
      "vi": "visit to sick person",
      "id": "visit to sick person"
    }
  },
  {
    "id": "V1489",
    "w": "贈り物",
    "r": "おくりもの",
    "m": {
      "en": "gift",
      "zh-TW": "贈り物",
      "zh-CN": "贈り物",
      "ko": "gift",
      "vi": "gift",
      "id": "gift"
    }
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
      "id": "present"
    }
  },
  {
    "id": "V1491",
    "w": "記念",
    "r": "きねん",
    "m": {
      "en": "commemoration",
      "zh-TW": "記念",
      "zh-CN": "記念",
      "ko": "commemoration",
      "vi": "commemoration",
      "id": "commemoration"
    }
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
      "id": "trigger"
    }
  },
  {
    "id": "V1493",
    "w": "動機",
    "r": "どうき",
    "m": {
      "en": "motive",
      "zh-TW": "動機",
      "zh-CN": "動機",
      "ko": "motive",
      "vi": "motive",
      "id": "motive"
    }
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
      "id": "wish"
    }
  },
  {
    "id": "V1495",
    "w": "理想",
    "r": "りそう",
    "m": {
      "en": "ideal",
      "zh-TW": "理想",
      "zh-CN": "理想",
      "ko": "ideal",
      "vi": "ideal",
      "id": "ideal"
    }
  },
  {
    "id": "V1496",
    "w": "現実",
    "r": "げんじつ",
    "m": {
      "en": "reality",
      "zh-TW": "現実",
      "zh-CN": "現実",
      "ko": "reality",
      "vi": "reality",
      "id": "reality"
    }
  },
  {
    "id": "V1497",
    "w": "不要",
    "r": "ふよう",
    "m": {
      "en": "unnecessary",
      "zh-TW": "不要",
      "zh-CN": "不要",
      "ko": "unnecessary",
      "vi": "unnecessary",
      "id": "unnecessary"
    }
  },
  {
    "id": "V1498",
    "w": "必然",
    "r": "ひつぜん",
    "m": {
      "en": "inevitable",
      "zh-TW": "必然",
      "zh-CN": "必然",
      "ko": "inevitable",
      "vi": "inevitable",
      "id": "inevitable"
    }
  },
  {
    "id": "V1499",
    "w": "偶然",
    "r": "ぐうぜん",
    "m": {
      "en": "coincidence",
      "zh-TW": "偶然",
      "zh-CN": "偶然",
      "ko": "coincidence",
      "vi": "coincidence",
      "id": "coincidence"
    }
  },
  {
    "id": "V1500",
    "w": "当然",
    "r": "とうぜん",
    "m": {
      "en": "naturally",
      "zh-TW": "当然",
      "zh-CN": "当然",
      "ko": "naturally",
      "vi": "naturally",
      "id": "naturally"
    }
  }
];

if (typeof module !== 'undefined') module.exports = { N4_VOCAB };
