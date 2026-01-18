// Fujisan.AI Data
// Count: 800

const N5_VOCAB = [
  {
    "id": "V0001",
    "w": "食べる",
    "r": "たべる",
    "m": {
      "en": "to eat",
      "zh-TW": "吃",
      "zh-CN": "吃",
      "ko": "먹다",
      "vi": "Ăn",
      "id": "Makan",
      "es": "comer",
      "pt": "comer"
    },
    "ex": "ご飯を食べる",
    "exm": {
      "en": "eat rice",
      "zh-TW": "吃飯",
      "zh-CN": "吃饭",
      "ko": "밥을 먹다",
      "vi": "ăn cơm",
      "id": "makan nasi",
      "es": "eat rice",
      "pt": "eat rice"
    },
    "syn": [
      "食す",
      "召し上がる",
      "いただく"
    ]
  },
  {
    "id": "V0002",
    "w": "飲む",
    "r": "のむ",
    "m": {
      "en": "to drink",
      "zh-TW": "喝",
      "zh-CN": "喝",
      "ko": "마시다",
      "vi": "Uống",
      "id": "Minum",
      "es": "beber",
      "pt": "beber"
    },
    "ex": "水を飲む",
    "exm": {
      "en": "drink water",
      "zh-TW": "喝水",
      "zh-CN": "喝水",
      "ko": "물을 마시다",
      "vi": "uống nước",
      "id": "minum air",
      "es": "drink water",
      "pt": "drink water"
    },
    "syn": [
      "服用する",
      "いただく",
      "摂取する"
    ]
  },
  {
    "id": "V0003",
    "w": "見る",
    "r": "みる",
    "m": {
      "en": "to see/watch",
      "zh-TW": "看",
      "zh-CN": "看",
      "ko": "보다",
      "vi": "xem",
      "id": "melihat",
      "es": "ver",
      "pt": "ver"
    },
    "ex": "テレビを見る",
    "exm": {
      "en": "watch TV",
      "zh-TW": "看電視",
      "zh-CN": "看电视",
      "ko": "TV를 보다",
      "vi": "xem TV",
      "id": "menonton TV",
      "es": "watch TV",
      "pt": "watch TV"
    },
    "syn": [
      "観る",
      "眺める",
      "見つめる"
    ]
  },
  {
    "id": "V0004",
    "w": "聞く",
    "r": "きく",
    "m": {
      "en": "to hear/listen",
      "zh-TW": "聽",
      "zh-CN": "听",
      "ko": "듣다",
      "vi": "nghe",
      "id": "mendengar",
      "es": "escuchar",
      "pt": "ouvir"
    },
    "ex": "音楽を聞く",
    "exm": {
      "en": "listen to music",
      "zh-TW": "聽音樂",
      "zh-CN": "听音乐",
      "ko": "음악을 듣다",
      "vi": "nghe nhạc",
      "id": "mendengarkan musik",
      "es": "listen to music",
      "pt": "listen to music"
    },
    "syn": [
      "聴く",
      "伺う",
      "耳にする"
    ]
  },
  {
    "id": "V0005",
    "w": "読む",
    "r": "よむ",
    "m": {
      "en": "to read",
      "zh-TW": "讀",
      "zh-CN": "读",
      "ko": "읽다",
      "vi": "Đọc",
      "id": "Membaca",
      "es": "leer",
      "pt": "ler"
    },
    "ex": "本を読む",
    "exm": {
      "en": "read a book",
      "zh-TW": "讀書",
      "zh-CN": "读书",
      "ko": "책을 읽다",
      "vi": "đọc sách",
      "id": "membaca buku",
      "es": "read a book",
      "pt": "read a book"
    },
    "syn": [
      "目を通す",
      "読書する",
      "拝読する"
    ]
  },
  {
    "id": "V0006",
    "w": "書く",
    "r": "かく",
    "m": {
      "en": "to write",
      "zh-TW": "寫",
      "zh-CN": "写",
      "ko": "쓰다",
      "vi": "Viết",
      "id": "Menulis",
      "es": "escribir",
      "pt": "escrever"
    },
    "ex": "手紙を書く",
    "exm": {
      "en": "write a letter",
      "zh-TW": "寫信",
      "zh-CN": "写信",
      "ko": "편지를 쓰다",
      "vi": "viết thư",
      "id": "menulis surat",
      "es": "write a letter",
      "pt": "write a letter"
    },
    "syn": [
      "記す",
      "記入する",
      "執筆する"
    ]
  },
  {
    "id": "V0007",
    "w": "話す",
    "r": "はなす",
    "m": {
      "en": "to speak",
      "zh-TW": "說",
      "zh-CN": "说",
      "ko": "말하다",
      "vi": "Nói",
      "id": "Berbicara",
      "es": "to speak",
      "pt": "to speak"
    },
    "ex": "日本語を話す",
    "exm": {
      "en": "speak Japanese",
      "zh-TW": "說日語",
      "zh-CN": "说日语",
      "ko": "일본어를 말하다",
      "vi": "nói tiếng Nhật",
      "id": "berbicara bahasa Jepang",
      "es": "speak Japanese",
      "pt": "speak Japanese"
    },
    "syn": [
      "喋る",
      "語る",
      "述べる"
    ]
  },
  {
    "id": "V0008",
    "w": "いう",
    "r": "いう",
    "m": {
      "en": "to say",
      "zh-TW": "說",
      "zh-CN": "说",
      "ko": "to say",
      "vi": "to say",
      "id": "to say",
      "es": "to say",
      "pt": "to say"
    },
    "ex": "名前を言う",
    "exm": {
      "en": "say name",
      "zh-TW": "說名字",
      "zh-CN": "说名字",
      "ko": "say name",
      "vi": "say name",
      "id": "say name",
      "es": "say name",
      "pt": "say name"
    },
    "syn": [
      "述べる",
      "語る",
      "申す"
    ]
  },
  {
    "id": "V0009",
    "w": "行く",
    "r": "いく",
    "m": {
      "en": "to go",
      "zh-TW": "去",
      "zh-CN": "去",
      "ko": "가다",
      "vi": "Đi",
      "id": "Pergi",
      "es": "ir",
      "pt": "ir"
    },
    "ex": "学校に行く",
    "exm": {
      "en": "go to school",
      "zh-TW": "去學校",
      "zh-CN": "去学校",
      "ko": "학교에 가다",
      "vi": "đi học",
      "id": "pergi ke sekolah",
      "es": "go to school",
      "pt": "go to school"
    },
    "syn": [
      "向かう",
      "参る",
      "出かける"
    ]
  },
  {
    "id": "V0010",
    "w": "来る",
    "r": "くる",
    "m": {
      "en": "to come",
      "zh-TW": "來",
      "zh-CN": "来",
      "ko": "오다",
      "vi": "Đến",
      "id": "Datang",
      "es": "venir",
      "pt": "vir"
    },
    "ex": "友達が来る",
    "exm": {
      "en": "friend comes",
      "zh-TW": "朋友來",
      "zh-CN": "朋友来",
      "ko": "친구",
      "vi": "bạn",
      "id": "teman",
      "es": "friend comes",
      "pt": "friend comes"
    },
    "syn": [
      "訪れる",
      "いらっしゃる",
      "参る"
    ]
  },
  {
    "id": "V0011",
    "w": "かえる",
    "r": "かえる",
    "m": {
      "en": "to return",
      "zh-TW": "回來",
      "zh-CN": "回来",
      "ko": "돌아오다",
      "vi": "Trở về",
      "id": "Kembali",
      "es": "volver",
      "pt": "voltar"
    },
    "ex": "家に帰る",
    "exm": {
      "en": "go home",
      "zh-TW": "回家",
      "zh-CN": "回家",
      "ko": "가다",
      "vi": "đi",
      "id": "pergi",
      "es": "go home",
      "pt": "go home"
    },
    "syn": [
      "戻る",
      "帰宅する",
      "引き返す"
    ]
  },
  {
    "id": "V0012",
    "w": "入る",
    "r": "はいる",
    "m": {
      "en": "to enter",
      "zh-TW": "進入",
      "zh-CN": "进入",
      "ko": "들어가다",
      "vi": "Vào",
      "id": "Masuk",
      "es": "to enter",
      "pt": "to enter"
    },
    "ex": "部屋に入る",
    "exm": {
      "en": "enter room",
      "zh-TW": "進房間",
      "zh-CN": "进房间",
      "ko": "들어가다 방",
      "vi": "vào phòng",
      "id": "masuk kamar",
      "es": "enter room",
      "pt": "enter room"
    },
    "syn": [
      "入室する",
      "加わる",
      "参加する"
    ]
  },
  {
    "id": "V0013",
    "w": "出る",
    "r": "でる",
    "m": {
      "en": "to exit/leave",
      "zh-TW": "出去",
      "zh-CN": "出去",
      "ko": "to exit/leave",
      "vi": "to exit/leave",
      "id": "to exit/leave",
      "es": "to exit/leave",
      "pt": "to exit/leave"
    },
    "ex": "外に出る",
    "exm": {
      "en": "go outside",
      "zh-TW": "出去外面",
      "zh-CN": "出去外面",
      "ko": "가다",
      "vi": "đi",
      "id": "pergi",
      "es": "go outside",
      "pt": "go outside"
    },
    "syn": [
      "出発する",
      "退出する",
      "現れる"
    ]
  },
  {
    "id": "V0014",
    "w": "おきる",
    "r": "おきる",
    "m": {
      "en": "to wake up",
      "zh-TW": "起床",
      "zh-CN": "起床",
      "ko": "일어나다",
      "vi": "Thức dậy",
      "id": "Bangun",
      "es": "to wake up",
      "pt": "to wake up"
    },
    "ex": "朝起きる",
    "exm": {
      "en": "wake up morning",
      "zh-TW": "早上起床",
      "zh-CN": "早上起床",
      "ko": "일어나다 위로 아침",
      "vi": "thức dậy lên sáng",
      "id": "bangun naik pagi",
      "es": "wake up morning",
      "pt": "wake up morning"
    },
    "syn": [
      "起床する",
      "目覚める",
      "起き上がる"
    ]
  },
  {
    "id": "V0015",
    "w": "ねる",
    "r": "ねる",
    "m": {
      "en": "to sleep",
      "zh-TW": "睡覺",
      "zh-CN": "睡觉",
      "ko": "자다",
      "vi": "Ngủ",
      "id": "Tidur",
      "es": "to sleep",
      "pt": "to sleep"
    },
    "ex": "夜寝る",
    "exm": {
      "en": "sleep at night",
      "zh-TW": "晚上睡覺",
      "zh-CN": "晚上睡觉",
      "ko": "자다 밤",
      "vi": "ngủ đêm",
      "id": "tidur malam",
      "es": "sleep at night",
      "pt": "sleep at night"
    },
    "syn": [
      "就寝する",
      "眠る",
      "休む"
    ]
  },
  {
    "id": "V0016",
    "w": "すわる",
    "r": "すわる",
    "m": {
      "en": "to sit",
      "zh-TW": "坐",
      "zh-CN": "坐",
      "ko": "앉다",
      "vi": "Ngồi",
      "id": "Duduk",
      "es": "to sit",
      "pt": "to sit"
    },
    "ex": "椅子に座る",
    "exm": {
      "en": "sit on chair",
      "zh-TW": "坐椅子",
      "zh-CN": "坐椅子",
      "ko": "앉다 의자",
      "vi": "ngồi ghế",
      "id": "duduk kursi",
      "es": "sit on chair",
      "pt": "sit on chair"
    },
    "syn": [
      "着席する",
      "腰掛ける",
      "座す"
    ]
  },
  {
    "id": "V0017",
    "w": "たつ",
    "r": "たつ",
    "m": {
      "en": "to stand",
      "zh-TW": "站",
      "zh-CN": "站",
      "ko": "서다",
      "vi": "Đứng",
      "id": "Berdiri",
      "es": "to stand",
      "pt": "to stand"
    },
    "ex": "ここに立つ",
    "exm": {
      "en": "stand here",
      "zh-TW": "站在這裡",
      "zh-CN": "站在这里",
      "ko": "서다 여기",
      "vi": "đứng đây",
      "id": "berdiri di sini",
      "es": "stand here",
      "pt": "stand here"
    },
    "syn": [
      "起立する",
      "立ち上がる",
      "直立する"
    ]
  },
  {
    "id": "V0018",
    "w": "あるく",
    "r": "あるく",
    "m": {
      "en": "to walk",
      "zh-TW": "走路",
      "zh-CN": "走路",
      "ko": "걷다",
      "vi": "Đi bộ",
      "id": "Berjalan",
      "es": "to walk",
      "pt": "to walk"
    },
    "ex": "道を歩く",
    "exm": {
      "en": "walk on road",
      "zh-TW": "走路",
      "zh-CN": "走路",
      "ko": "걷다",
      "vi": "đi bộ",
      "id": "berjalan",
      "es": "walk on road",
      "pt": "walk on road"
    },
    "syn": [
      "歩行する",
      "散歩する",
      "徒歩で行く"
    ]
  },
  {
    "id": "V0019",
    "w": "はしる",
    "r": "はしる",
    "m": {
      "en": "to run",
      "zh-TW": "跑",
      "zh-CN": "跑",
      "ko": "달리다",
      "vi": "Chạy",
      "id": "Berlari",
      "es": "to run",
      "pt": "to run"
    },
    "ex": "公園を走る",
    "exm": {
      "en": "run in park",
      "zh-TW": "在公園跑步",
      "zh-CN": "在公园跑步",
      "ko": "달리다 공원",
      "vi": "chạy công viên",
      "id": "berlari taman",
      "es": "run in park",
      "pt": "run in park"
    },
    "syn": [
      "駆ける",
      "疾走する",
      "ダッシュする"
    ]
  },
  {
    "id": "V0020",
    "w": "およぐ",
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
    "ex": "海で泳ぐ",
    "exm": {
      "en": "swim in sea",
      "zh-TW": "在海游泳",
      "zh-CN": "在海游泳",
      "ko": "수영하다 바다",
      "vi": "bơi biển",
      "id": "berenang laut",
      "es": "swim in sea",
      "pt": "swim in sea"
    },
    "syn": [
      "水泳する",
      "遊泳する",
      "泳ぎ回る"
    ]
  },
  {
    "id": "V0021",
    "w": "買う",
    "r": "かう",
    "m": {
      "en": "to buy",
      "zh-TW": "買",
      "zh-CN": "买",
      "ko": "사다",
      "vi": "Mua",
      "id": "Membeli",
      "es": "to buy",
      "pt": "to buy"
    },
    "ex": "本を買う",
    "exm": {
      "en": "buy a book",
      "zh-TW": "買書",
      "zh-CN": "买书",
      "ko": "사다 책",
      "vi": "mua sách",
      "id": "membeli buku",
      "es": "buy a book",
      "pt": "buy a book"
    },
    "syn": [
      "購入する",
      "求める",
      "手に入れる"
    ]
  },
  {
    "id": "V0022",
    "w": "うる",
    "r": "うる",
    "m": {
      "en": "to sell",
      "zh-TW": "賣",
      "zh-CN": "卖",
      "ko": "팔다",
      "vi": "Bán",
      "id": "Menjual",
      "es": "to sell",
      "pt": "to sell"
    },
    "ex": "車を売る",
    "exm": {
      "en": "sell a car",
      "zh-TW": "賣車",
      "zh-CN": "卖车",
      "ko": "팔다 차",
      "vi": "bán xe",
      "id": "menjual mobil",
      "es": "sell a car",
      "pt": "sell a car"
    },
    "syn": [
      "販売する",
      "売却する",
      "売りさばく"
    ]
  },
  {
    "id": "V0023",
    "w": "作る",
    "r": "つくる",
    "m": {
      "en": "to make",
      "zh-TW": "製作",
      "zh-CN": "制作",
      "ko": "만들다",
      "vi": "Làm",
      "id": "Membuat",
      "es": "to make",
      "pt": "to make"
    },
    "ex": "料理を作る",
    "exm": {
      "en": "make food",
      "zh-TW": "做菜",
      "zh-CN": "做菜",
      "ko": "만들다 음식",
      "vi": "làm đồ ăn",
      "id": "membuat makanan",
      "es": "make food",
      "pt": "make food"
    },
    "syn": [
      "製作する",
      "制作する",
      "作成する"
    ]
  },
  {
    "id": "V0024",
    "w": "つかう",
    "r": "つかう",
    "m": {
      "en": "to use",
      "zh-TW": "使用",
      "zh-CN": "使用",
      "ko": "사용하다",
      "vi": "Dùng",
      "id": "Menggunakan",
      "es": "to use",
      "pt": "to use"
    },
    "ex": "パソコンを使う",
    "exm": {
      "en": "use computer",
      "zh-TW": "用電腦",
      "zh-CN": "用电脑",
      "ko": "사용하다 컴퓨터",
      "vi": "dùng máy tính",
      "id": "menggunakan komputer",
      "es": "use computer",
      "pt": "use computer"
    },
    "syn": [
      "利用する",
      "活用する",
      "用いる"
    ]
  },
  {
    "id": "V0025",
    "w": "もつ",
    "r": "もつ",
    "m": {
      "en": "to hold/have",
      "zh-TW": "拿/有",
      "zh-CN": "拿/有",
      "ko": "오래되다",
      "vi": "cũ",
      "id": "lama",
      "es": "to hold/have",
      "pt": "to hold/have"
    },
    "ex": "かばんを持つ",
    "exm": {
      "en": "carry bag",
      "zh-TW": "拿包",
      "zh-CN": "拿包",
      "ko": "나르다",
      "vi": "mang",
      "id": "membawa",
      "es": "carry bag",
      "pt": "carry bag"
    },
    "syn": [
      "所有する",
      "保持する",
      "携帯する"
    ]
  },
  {
    "id": "V0026",
    "w": "おく",
    "r": "おく",
    "m": {
      "en": "to put/place",
      "zh-TW": "放",
      "zh-CN": "放",
      "ko": "to put/place",
      "vi": "to put/place",
      "id": "to put/place",
      "es": "to put/place",
      "pt": "to put/place"
    },
    "ex": "本を置く",
    "exm": {
      "en": "put book",
      "zh-TW": "放書",
      "zh-CN": "放书",
      "ko": "놓다 책",
      "vi": "đặt sách",
      "id": "meletakkan buku",
      "es": "put book",
      "pt": "put book"
    },
    "syn": [
      "設置する",
      "配置する",
      "据える"
    ]
  },
  {
    "id": "V0027",
    "w": "とる",
    "r": "とる",
    "m": {
      "en": "to take",
      "zh-TW": "拿",
      "zh-CN": "拿",
      "ko": "가지다",
      "vi": "Lấy",
      "id": "Mengambil",
      "es": "to take",
      "pt": "to take"
    },
    "ex": "写真を取る",
    "exm": {
      "en": "take photo",
      "zh-TW": "拍照",
      "zh-CN": "拍照",
      "ko": "가지다",
      "vi": "lấy",
      "id": "mengambil",
      "es": "take photo",
      "pt": "take photo"
    }
  },
  {
    "id": "V0028",
    "w": "まつ",
    "r": "まつ",
    "m": {
      "en": "to wait",
      "zh-TW": "等待",
      "zh-CN": "等待",
      "ko": "기다리다",
      "vi": "Đợi",
      "id": "Menunggu",
      "es": "to wait",
      "pt": "to wait"
    },
    "ex": "ここで待つ",
    "exm": {
      "en": "wait here",
      "zh-TW": "在這等",
      "zh-CN": "在这等",
      "ko": "기다리다 여기",
      "vi": "đợi đây",
      "id": "menunggu di sini",
      "es": "wait here",
      "pt": "wait here"
    },
    "syn": [
      "待機する",
      "お待ちする",
      "待ち受ける"
    ]
  },
  {
    "id": "V0029",
    "w": "会う",
    "r": "あう",
    "m": {
      "en": "to meet",
      "zh-TW": "見面",
      "zh-CN": "见面",
      "ko": "만나다",
      "vi": "Gặp",
      "id": "Bertemu",
      "es": "to meet",
      "pt": "to meet"
    },
    "ex": "友達に会う",
    "exm": {
      "en": "meet friend",
      "zh-TW": "見朋友",
      "zh-CN": "见朋友",
      "ko": "만나다 친구",
      "vi": "gặp bạn",
      "id": "bertemu teman",
      "es": "meet friend",
      "pt": "meet friend"
    },
    "syn": [
      "お目にかかる",
      "面会する",
      "対面する"
    ]
  },
  {
    "id": "V0030",
    "w": "教える",
    "r": "おしえる",
    "m": {
      "en": "to teach",
      "zh-TW": "教",
      "zh-CN": "教",
      "ko": "가르치다",
      "vi": "Dạy",
      "id": "Mengajar",
      "es": "to teach",
      "pt": "to teach"
    },
    "ex": "英語を教える",
    "exm": {
      "en": "teach English",
      "zh-TW": "教英語",
      "zh-CN": "教英语",
      "ko": "영어를 가르치다",
      "vi": "dạy tiếng Anh",
      "id": "mengajar bahasa Inggris",
      "es": "teach English",
      "pt": "teach English"
    },
    "syn": [
      "指導する",
      "伝授する",
      "教授する"
    ]
  },
  {
    "id": "V0031",
    "w": "ならう",
    "r": "ならう",
    "m": {
      "en": "to learn",
      "zh-TW": "學",
      "zh-CN": "学",
      "ko": "배우다",
      "vi": "Học",
      "id": "Belajar",
      "es": "to learn",
      "pt": "to learn"
    },
    "ex": "日本語を習う",
    "exm": {
      "en": "learn Japanese",
      "zh-TW": "學日語",
      "zh-CN": "学日语",
      "ko": "배우다",
      "vi": "học",
      "id": "belajar",
      "es": "learn Japanese",
      "pt": "learn Japanese"
    },
    "syn": [
      "学ぶ",
      "習得する",
      "マスターする"
    ]
  },
  {
    "id": "V0032",
    "w": "べんきょうする",
    "r": "べんきょうする",
    "m": {
      "en": "to study",
      "zh-TW": "學習",
      "zh-CN": "学习",
      "ko": "공부하다",
      "vi": "Học",
      "id": "Belajar",
      "es": "to study",
      "pt": "to study"
    },
    "ex": "毎日勉強する",
    "exm": {
      "en": "study daily",
      "zh-TW": "每天學習",
      "zh-CN": "每天学习",
      "ko": "공부하다",
      "vi": "học",
      "id": "belajar",
      "es": "study daily",
      "pt": "study daily"
    },
    "syn": [
      "学習する",
      "学ぶ",
      "習う"
    ]
  },
  {
    "id": "V0033",
    "w": "はたらく",
    "r": "はたらく",
    "m": {
      "en": "to work",
      "zh-TW": "工作",
      "zh-CN": "工作",
      "ko": "일하다",
      "vi": "Làm việc",
      "id": "Bekerja",
      "es": "to work",
      "pt": "to work"
    },
    "ex": "会社で働く",
    "exm": {
      "en": "work at company",
      "zh-TW": "在公司工作",
      "zh-CN": "在公司工作",
      "ko": "일하다 회사",
      "vi": "làm việc công ty",
      "id": "bekerja perusahaan",
      "es": "work at company",
      "pt": "work at company"
    },
    "syn": [
      "勤務する",
      "労働する",
      "就労する"
    ]
  },
  {
    "id": "V0034",
    "w": "休む",
    "r": "やすむ",
    "m": {
      "en": "to rest",
      "zh-TW": "休息",
      "zh-CN": "休息",
      "ko": "to rest",
      "vi": "to rest",
      "id": "to rest",
      "es": "to rest",
      "pt": "to rest"
    },
    "ex": "少し休む",
    "exm": {
      "en": "rest a little",
      "zh-TW": "休息一下",
      "zh-CN": "休息一下",
      "ko": "rest a little",
      "vi": "rest a little",
      "id": "rest a little",
      "es": "rest a little",
      "pt": "rest a little"
    },
    "syn": [
      "休憩する",
      "休息する",
      "一服する"
    ]
  },
  {
    "id": "V0035",
    "w": "あそぶ",
    "r": "あそぶ",
    "m": {
      "en": "to play",
      "zh-TW": "玩",
      "zh-CN": "玩",
      "ko": "놀다",
      "vi": "Chơi",
      "id": "Bermain",
      "es": "to play",
      "pt": "to play"
    },
    "ex": "公園で遊ぶ",
    "exm": {
      "en": "play in park",
      "zh-TW": "在公園玩",
      "zh-CN": "在公园玩",
      "ko": "놀다 공원",
      "vi": "chơi công viên",
      "id": "bermain taman",
      "es": "play in park",
      "pt": "play in park"
    },
    "syn": [
      "戯れる",
      "楽しむ",
      "レジャーを楽しむ"
    ]
  },
  {
    "id": "V0036",
    "w": "うたう",
    "r": "うたう",
    "m": {
      "en": "to sing",
      "zh-TW": "唱歌",
      "zh-CN": "唱歌",
      "ko": "to sing",
      "vi": "to sing",
      "id": "to sing",
      "es": "to sing",
      "pt": "to sing"
    },
    "ex": "歌を歌う",
    "exm": {
      "en": "sing a song",
      "zh-TW": "唱歌",
      "zh-CN": "唱歌",
      "ko": "sing a song",
      "vi": "sing a song",
      "id": "sing a song",
      "es": "sing a song",
      "pt": "sing a song"
    }
  },
  {
    "id": "V0037",
    "w": "おどる",
    "r": "おどる",
    "m": {
      "en": "to dance",
      "zh-TW": "跳舞",
      "zh-CN": "跳舞",
      "ko": "to dance",
      "vi": "to dance",
      "id": "to dance",
      "es": "to dance",
      "pt": "to dance"
    },
    "ex": "ダンスを踊る",
    "exm": {
      "en": "dance",
      "zh-TW": "跳舞",
      "zh-CN": "跳舞",
      "ko": "dance",
      "vi": "dance",
      "id": "dance",
      "es": "dance",
      "pt": "dance"
    }
  },
  {
    "id": "V0038",
    "w": "ひく",
    "r": "ひく",
    "m": {
      "en": "to play (instrument)",
      "zh-TW": "彈奏",
      "zh-CN": "弹奏",
      "ko": "to play (instrument)",
      "vi": "to play (instrument)",
      "id": "to play (instrument)",
      "es": "to play (instrument)",
      "pt": "to play (instrument)"
    },
    "ex": "ピアノを弾く",
    "exm": {
      "en": "play piano",
      "zh-TW": "彈鋼琴",
      "zh-CN": "弹钢琴",
      "ko": "놀다",
      "vi": "chơi",
      "id": "bermain",
      "es": "play piano",
      "pt": "play piano"
    }
  },
  {
    "id": "V0039",
    "w": "とる",
    "r": "とる",
    "m": {
      "en": "to take (photo)",
      "zh-TW": "拍",
      "zh-CN": "拍",
      "ko": "덥다",
      "vi": "nóng",
      "id": "panas",
      "es": "to take (photo)",
      "pt": "to take (photo)"
    },
    "ex": "写真を撮る",
    "exm": {
      "en": "take photo",
      "zh-TW": "拍照",
      "zh-CN": "拍照",
      "ko": "가지다",
      "vi": "lấy",
      "id": "mengambil",
      "es": "take photo",
      "pt": "take photo"
    }
  },
  {
    "id": "V0040",
    "w": "かく",
    "r": "かく",
    "m": {
      "en": "to draw",
      "zh-TW": "畫",
      "zh-CN": "画",
      "ko": "to draw",
      "vi": "to draw",
      "id": "to draw",
      "es": "to draw",
      "pt": "to draw"
    },
    "ex": "絵を描く",
    "exm": {
      "en": "draw picture",
      "zh-TW": "畫畫",
      "zh-CN": "画画",
      "ko": "draw picture",
      "vi": "draw picture",
      "id": "draw picture",
      "es": "draw picture",
      "pt": "draw picture"
    }
  },
  {
    "id": "V0041",
    "w": "あらう",
    "r": "あらう",
    "m": {
      "en": "to wash",
      "zh-TW": "洗",
      "zh-CN": "洗",
      "ko": "씻다",
      "vi": "rửa",
      "id": "mencuci",
      "es": "to wash",
      "pt": "to wash"
    },
    "ex": "手を洗う",
    "exm": {
      "en": "wash hands",
      "zh-TW": "洗手",
      "zh-CN": "洗手",
      "ko": "손을 씻다",
      "vi": "rửa tay",
      "id": "cuci tangan",
      "es": "wash hands",
      "pt": "wash hands"
    }
  },
  {
    "id": "V0042",
    "w": "そうじする",
    "r": "そうじする",
    "m": {
      "en": "to clean",
      "zh-TW": "打掃",
      "zh-CN": "打扫",
      "ko": "깨끗한",
      "vi": "sạch",
      "id": "bersih",
      "es": "to clean",
      "pt": "to clean"
    },
    "ex": "部屋を掃除する",
    "exm": {
      "en": "clean room",
      "zh-TW": "打掃房間",
      "zh-CN": "打扫房间",
      "ko": "깨끗한 방",
      "vi": "sạch phòng",
      "id": "bersih kamar",
      "es": "clean room",
      "pt": "clean room"
    }
  },
  {
    "id": "V0043",
    "w": "りょうりする",
    "r": "りょうりする",
    "m": {
      "en": "to cook",
      "zh-TW": "做菜",
      "zh-CN": "做菜",
      "ko": "요리하다",
      "vi": "nấu",
      "id": "memasak",
      "es": "to cook",
      "pt": "to cook"
    },
    "ex": "夕飯を料理する",
    "exm": {
      "en": "cook dinner",
      "zh-TW": "做晚餐",
      "zh-CN": "做晚餐",
      "ko": "저녁을 요리하다",
      "vi": "nấu bữa tối",
      "id": "memasak makan malam",
      "es": "cook dinner",
      "pt": "cook dinner"
    }
  },
  {
    "id": "V0044",
    "w": "きる",
    "r": "きる",
    "m": {
      "en": "to cut",
      "zh-TW": "切",
      "zh-CN": "切",
      "ko": "자르다",
      "vi": "cắt",
      "id": "memotong",
      "es": "to cut",
      "pt": "to cut"
    },
    "ex": "野菜を切る",
    "exm": {
      "en": "cut vegetables",
      "zh-TW": "切菜",
      "zh-CN": "切菜",
      "ko": "자르다",
      "vi": "cắt",
      "id": "memotong",
      "es": "cut vegetables",
      "pt": "cut vegetables"
    }
  },
  {
    "id": "V0045",
    "w": "あける",
    "r": "あける",
    "m": {
      "en": "to open",
      "zh-TW": "打開",
      "zh-CN": "打开",
      "ko": "열다",
      "vi": "Mở",
      "id": "Membuka",
      "es": "to open",
      "pt": "to open"
    },
    "ex": "窓を開ける",
    "exm": {
      "en": "open window",
      "zh-TW": "開窗",
      "zh-CN": "开窗",
      "ko": "열다 창문",
      "vi": "mở cửa sổ",
      "id": "membuka jendela",
      "es": "open window",
      "pt": "open window"
    },
    "syn": [
      "開く",
      "開放する",
      "オープンする"
    ]
  },
  {
    "id": "V0046",
    "w": "しめる",
    "r": "しめる",
    "m": {
      "en": "to close",
      "zh-TW": "關閉",
      "zh-CN": "关闭",
      "ko": "닫다",
      "vi": "Đóng",
      "id": "Menutup",
      "es": "to close",
      "pt": "to close"
    },
    "ex": "ドアを閉める",
    "exm": {
      "en": "close door",
      "zh-TW": "關門",
      "zh-CN": "关门",
      "ko": "닫다 문",
      "vi": "đóng cửa",
      "id": "menutup pintu",
      "es": "close door",
      "pt": "close door"
    },
    "syn": [
      "閉じる",
      "閉鎖する",
      "クローズする"
    ]
  },
  {
    "id": "V0047",
    "w": "つける",
    "r": "つける",
    "m": {
      "en": "to turn on",
      "zh-TW": "開(電器)",
      "zh-CN": "开(电器)",
      "ko": "돌다",
      "vi": "quay",
      "id": "berputar",
      "es": "to turn on",
      "pt": "to turn on"
    },
    "ex": "電気をつける",
    "exm": {
      "en": "turn on light",
      "zh-TW": "開燈",
      "zh-CN": "开灯",
      "ko": "돌다 가벼운",
      "vi": "quay nhẹ",
      "id": "berputar ringan",
      "es": "turn on light",
      "pt": "turn on light"
    }
  },
  {
    "id": "V0048",
    "w": "けす",
    "r": "けす",
    "m": {
      "en": "to turn off",
      "zh-TW": "關(電器)",
      "zh-CN": "关(电器)",
      "ko": "돌다 쉬는",
      "vi": "quay nghỉ",
      "id": "berputar libur",
      "es": "to turn off",
      "pt": "to turn off"
    },
    "ex": "電気を消す",
    "exm": {
      "en": "turn off light",
      "zh-TW": "關燈",
      "zh-CN": "关灯",
      "ko": "돌다 쉬는 가벼운",
      "vi": "quay nghỉ nhẹ",
      "id": "berputar libur ringan",
      "es": "turn off light",
      "pt": "turn off light"
    }
  },
  {
    "id": "V0049",
    "w": "きる",
    "r": "きる",
    "m": {
      "en": "to wear",
      "zh-TW": "穿",
      "zh-CN": "穿",
      "ko": "입다",
      "vi": "mặc",
      "id": "memakai",
      "es": "to wear",
      "pt": "to wear"
    },
    "ex": "服を着る",
    "exm": {
      "en": "wear clothes",
      "zh-TW": "穿衣服",
      "zh-CN": "穿衣服",
      "ko": "입다",
      "vi": "mặc",
      "id": "memakai",
      "es": "wear clothes",
      "pt": "wear clothes"
    }
  },
  {
    "id": "V0050",
    "w": "ぬぐ",
    "r": "ぬぐ",
    "m": {
      "en": "to take off",
      "zh-TW": "脫",
      "zh-CN": "脱",
      "ko": "가지다 쉬는",
      "vi": "lấy nghỉ",
      "id": "mengambil libur",
      "es": "to take off",
      "pt": "to take off"
    },
    "ex": "靴を脱ぐ",
    "exm": {
      "en": "take off shoes",
      "zh-TW": "脫鞋",
      "zh-CN": "脱鞋",
      "ko": "가지다 쉬는",
      "vi": "lấy nghỉ",
      "id": "mengambil libur",
      "es": "take off shoes",
      "pt": "take off shoes"
    }
  },
  {
    "id": "V0051",
    "w": "はく",
    "r": "はく",
    "m": {
      "en": "to wear (shoes/pants)",
      "zh-TW": "穿(鞋/褲)",
      "zh-CN": "穿(鞋/裤)",
      "ko": "to wear (shoes/pants)",
      "vi": "to wear (shoes/pants)",
      "id": "to wear (shoes/pants)",
      "es": "to wear (shoes/pants)",
      "pt": "to wear (shoes/pants)"
    },
    "ex": "靴を履く",
    "exm": {
      "en": "wear shoes",
      "zh-TW": "穿鞋",
      "zh-CN": "穿鞋",
      "ko": "입다",
      "vi": "mặc",
      "id": "memakai",
      "es": "wear shoes",
      "pt": "wear shoes"
    }
  },
  {
    "id": "V0052",
    "w": "かぶる",
    "r": "かぶる",
    "m": {
      "en": "to wear (hat)",
      "zh-TW": "戴(帽子)",
      "zh-CN": "戴(帽子)",
      "ko": "to wear (hat)",
      "vi": "to wear (hat)",
      "id": "to wear (hat)",
      "es": "to wear (hat)",
      "pt": "to wear (hat)"
    },
    "ex": "帽子をかぶる",
    "exm": {
      "en": "wear hat",
      "zh-TW": "戴帽子",
      "zh-CN": "戴帽子",
      "ko": "입다",
      "vi": "mặc",
      "id": "memakai",
      "es": "wear hat",
      "pt": "wear hat"
    }
  },
  {
    "id": "V0053",
    "w": "かける",
    "r": "かける",
    "m": {
      "en": "to wear (glasses)",
      "zh-TW": "戴(眼鏡)",
      "zh-CN": "戴(眼镜)",
      "ko": "to wear (glasses)",
      "vi": "to wear (glasses)",
      "id": "to wear (glasses)",
      "es": "to wear (glasses)",
      "pt": "to wear (glasses)"
    },
    "ex": "眼鏡をかける",
    "exm": {
      "en": "wear glasses",
      "zh-TW": "戴眼鏡",
      "zh-CN": "戴眼镜",
      "ko": "입다",
      "vi": "mặc",
      "id": "memakai",
      "es": "wear glasses",
      "pt": "wear glasses"
    }
  },
  {
    "id": "V0054",
    "w": "のる",
    "r": "のる",
    "m": {
      "en": "to ride",
      "zh-TW": "搭乘",
      "zh-CN": "搭乘",
      "ko": "타다",
      "vi": "đi",
      "id": "naik",
      "es": "to ride",
      "pt": "to ride"
    },
    "ex": "電車に乗る",
    "exm": {
      "en": "ride train",
      "zh-TW": "搭電車",
      "zh-CN": "坐电车",
      "ko": "타다 기차",
      "vi": "đi tàu",
      "id": "naik kereta",
      "es": "ride train",
      "pt": "ride train"
    }
  },
  {
    "id": "V0055",
    "w": "おりる",
    "r": "おりる",
    "m": {
      "en": "to get off",
      "zh-TW": "下車",
      "zh-CN": "下车",
      "ko": "쉬는",
      "vi": "nghỉ",
      "id": "libur",
      "es": "to get off",
      "pt": "to get off"
    },
    "ex": "電車を降りる",
    "exm": {
      "en": "get off train",
      "zh-TW": "下電車",
      "zh-CN": "下电车",
      "ko": "쉬는 기차",
      "vi": "nghỉ tàu",
      "id": "libur kereta",
      "es": "get off train",
      "pt": "get off train"
    }
  },
  {
    "id": "V0056",
    "w": "うんてんする",
    "r": "うんてんする",
    "m": {
      "en": "to drive",
      "zh-TW": "開車",
      "zh-CN": "开车",
      "ko": "운전하다",
      "vi": "lái xe",
      "id": "mengendarai",
      "es": "to drive",
      "pt": "to drive"
    },
    "ex": "車を運転する",
    "exm": {
      "en": "drive car",
      "zh-TW": "開車",
      "zh-CN": "开车",
      "ko": "운전하다 차",
      "vi": "lái xe xe",
      "id": "mengendarai mobil",
      "es": "drive car",
      "pt": "drive car"
    }
  },
  {
    "id": "V0057",
    "w": "とまる",
    "r": "とまる",
    "m": {
      "en": "to stop",
      "zh-TW": "停",
      "zh-CN": "停",
      "ko": "멈추다",
      "vi": "dừng",
      "id": "berhenti",
      "es": "to stop",
      "pt": "to stop"
    },
    "ex": "車が止まる",
    "exm": {
      "en": "car stops",
      "zh-TW": "車停了",
      "zh-CN": "车停了",
      "ko": "차 멈추다",
      "vi": "xe dừng",
      "id": "mobil berhenti",
      "es": "car stops",
      "pt": "car stops"
    }
  },
  {
    "id": "V0058",
    "w": "まがる",
    "r": "まがる",
    "m": {
      "en": "to turn",
      "zh-TW": "轉彎",
      "zh-CN": "转弯",
      "ko": "돌다",
      "vi": "quay",
      "id": "berputar",
      "es": "to turn",
      "pt": "to turn"
    },
    "ex": "右に曲がる",
    "exm": {
      "en": "turn right",
      "zh-TW": "向右轉",
      "zh-CN": "向右转",
      "ko": "돌다",
      "vi": "quay",
      "id": "berputar",
      "es": "turn right",
      "pt": "turn right"
    }
  },
  {
    "id": "V0059",
    "w": "わたる",
    "r": "わたる",
    "m": {
      "en": "to cross",
      "zh-TW": "過(馬路)",
      "zh-CN": "过(马路)",
      "ko": "to cross",
      "vi": "to cross",
      "id": "to cross",
      "es": "to cross",
      "pt": "to cross"
    },
    "ex": "道を渡る",
    "exm": {
      "en": "cross road",
      "zh-TW": "過馬路",
      "zh-CN": "过马路",
      "ko": "cross road",
      "vi": "cross road",
      "id": "cross road",
      "es": "cross road",
      "pt": "cross road"
    }
  },
  {
    "id": "V0060",
    "w": "のぼる",
    "r": "のぼる",
    "m": {
      "en": "to climb",
      "zh-TW": "爬",
      "zh-CN": "爬",
      "ko": "to climb",
      "vi": "to climb",
      "id": "to climb",
      "es": "to climb",
      "pt": "to climb"
    },
    "ex": "山を登る",
    "exm": {
      "en": "climb mountain",
      "zh-TW": "爬山",
      "zh-CN": "爬山",
      "ko": "산",
      "vi": "núi",
      "id": "gunung",
      "es": "climb mountain",
      "pt": "climb mountain"
    }
  },
  {
    "id": "V0061",
    "w": "知る",
    "r": "しる",
    "m": {
      "en": "to know",
      "zh-TW": "知道",
      "zh-CN": "知道",
      "ko": "알다",
      "vi": "Biết",
      "id": "Tahu",
      "es": "to know",
      "pt": "to know"
    },
    "ex": "名前を知る",
    "exm": {
      "en": "know name",
      "zh-TW": "知道名字",
      "zh-CN": "知道名字",
      "ko": "알다",
      "vi": "biết",
      "id": "tahu",
      "es": "know name",
      "pt": "know name"
    },
    "syn": [
      "理解する",
      "把握する",
      "認識する"
    ]
  },
  {
    "id": "V0062",
    "w": "分かる",
    "r": "わかる",
    "m": {
      "en": "to understand",
      "zh-TW": "理解",
      "zh-CN": "理解",
      "ko": "이해하다",
      "vi": "Hiểu",
      "id": "Mengerti",
      "es": "to understand",
      "pt": "to understand"
    },
    "ex": "意味が分かる",
    "exm": {
      "en": "understand meaning",
      "zh-TW": "明白意思",
      "zh-CN": "明白意思",
      "ko": "이해하다",
      "vi": "hiểu",
      "id": "mengerti",
      "es": "understand meaning",
      "pt": "understand meaning"
    },
    "syn": [
      "理解する",
      "把握する",
      "了解する"
    ]
  },
  {
    "id": "V0063",
    "w": "おぼえる",
    "r": "おぼえる",
    "m": {
      "en": "to memorize",
      "zh-TW": "記住",
      "zh-CN": "记住",
      "ko": "to memorize",
      "vi": "to memorize",
      "id": "to memorize",
      "es": "to memorize",
      "pt": "to memorize"
    },
    "ex": "漢字を覚える",
    "exm": {
      "en": "memorize kanji",
      "zh-TW": "記漢字",
      "zh-CN": "记汉字",
      "ko": "memorize kanji",
      "vi": "memorize kanji",
      "id": "memorize kanji",
      "es": "memorize kanji",
      "pt": "memorize kanji"
    },
    "syn": [
      "記憶する",
      "暗記する",
      "習得する"
    ]
  },
  {
    "id": "V0064",
    "w": "わすれる",
    "r": "わすれる",
    "m": {
      "en": "to forget",
      "zh-TW": "忘記",
      "zh-CN": "忘记",
      "ko": "잊다",
      "vi": "quên",
      "id": "lupa",
      "es": "to forget",
      "pt": "to forget"
    },
    "ex": "名前を忘れる",
    "exm": {
      "en": "forget name",
      "zh-TW": "忘記名字",
      "zh-CN": "忘记名字",
      "ko": "잊다",
      "vi": "quên",
      "id": "lupa",
      "es": "forget name",
      "pt": "forget name"
    },
    "syn": [
      "失念する",
      "度忘れする",
      "記憶から消える"
    ]
  },
  {
    "id": "V0065",
    "w": "おもう",
    "r": "おもう",
    "m": {
      "en": "to think",
      "zh-TW": "想",
      "zh-CN": "想",
      "ko": "생각하다",
      "vi": "Nghĩ",
      "id": "Berpikir",
      "es": "to think",
      "pt": "to think"
    },
    "ex": "そう思う",
    "exm": {
      "en": "think so",
      "zh-TW": "這樣想",
      "zh-CN": "这样想",
      "ko": "생각하다",
      "vi": "nghĩ",
      "id": "berpikir",
      "es": "think so",
      "pt": "think so"
    },
    "syn": [
      "考える",
      "感じる",
      "思案する"
    ]
  },
  {
    "id": "V0066",
    "w": "かんがえる",
    "r": "かんがえる",
    "m": {
      "en": "to consider",
      "zh-TW": "考慮",
      "zh-CN": "考虑",
      "ko": "to consider",
      "vi": "to consider",
      "id": "to consider",
      "es": "to consider",
      "pt": "to consider"
    },
    "ex": "よく考える",
    "exm": {
      "en": "think carefully",
      "zh-TW": "仔細考慮",
      "zh-CN": "仔细考虑",
      "ko": "생각하다",
      "vi": "nghĩ",
      "id": "berpikir",
      "es": "think carefully",
      "pt": "think carefully"
    }
  },
  {
    "id": "V0067",
    "w": "きめる",
    "r": "きめる",
    "m": {
      "en": "to decide",
      "zh-TW": "決定",
      "zh-CN": "决定",
      "ko": "to decide",
      "vi": "to decide",
      "id": "to decide",
      "es": "to decide",
      "pt": "to decide"
    },
    "ex": "予定を決める",
    "exm": {
      "en": "decide schedule",
      "zh-TW": "決定行程",
      "zh-CN": "决定行程",
      "ko": "decide schedule",
      "vi": "decide schedule",
      "id": "decide schedule",
      "es": "decide schedule",
      "pt": "decide schedule"
    }
  },
  {
    "id": "V0068",
    "w": "しんじる",
    "r": "しんじる",
    "m": {
      "en": "to believe",
      "zh-TW": "相信",
      "zh-CN": "相信",
      "ko": "to believe",
      "vi": "to believe",
      "id": "to believe",
      "es": "to believe",
      "pt": "to believe"
    },
    "ex": "友達を信じる",
    "exm": {
      "en": "believe friend",
      "zh-TW": "相信朋友",
      "zh-CN": "相信朋友",
      "ko": "친구",
      "vi": "bạn",
      "id": "teman",
      "es": "believe friend",
      "pt": "believe friend"
    }
  },
  {
    "id": "V0069",
    "w": "さがす",
    "r": "さがす",
    "m": {
      "en": "to search",
      "zh-TW": "找",
      "zh-CN": "找",
      "ko": "to search",
      "vi": "to search",
      "id": "to search",
      "es": "to search",
      "pt": "to search"
    },
    "ex": "鍵を探す",
    "exm": {
      "en": "search for key",
      "zh-TW": "找鑰匙",
      "zh-CN": "找钥匙",
      "ko": "search for key",
      "vi": "search for key",
      "id": "search for key",
      "es": "search for key",
      "pt": "search for key"
    }
  },
  {
    "id": "V0070",
    "w": "見つける",
    "r": "みつける",
    "m": {
      "en": "to find",
      "zh-TW": "找到",
      "zh-CN": "找到",
      "ko": "to find",
      "vi": "to find",
      "id": "to find",
      "es": "to find",
      "pt": "to find"
    },
    "ex": "財布を見つける",
    "exm": {
      "en": "find wallet",
      "zh-TW": "找到錢包",
      "zh-CN": "找到钱包",
      "ko": "find wallet",
      "vi": "find wallet",
      "id": "find wallet",
      "es": "find wallet",
      "pt": "find wallet"
    }
  },
  {
    "id": "V0071",
    "w": "はじめる",
    "r": "はじめる",
    "m": {
      "en": "to begin",
      "zh-TW": "開始",
      "zh-CN": "开始",
      "ko": "시작하다",
      "vi": "Bắt đầu",
      "id": "Mulai",
      "es": "to begin",
      "pt": "to begin"
    },
    "ex": "仕事を始める",
    "exm": {
      "en": "start work",
      "zh-TW": "開始工作",
      "zh-CN": "开始工作",
      "ko": "일하다",
      "vi": "làm việc",
      "id": "bekerja",
      "es": "start work",
      "pt": "start work"
    },
    "syn": [
      "開始する",
      "スタートする",
      "着手する"
    ]
  },
  {
    "id": "V0072",
    "w": "おわる",
    "r": "おわる",
    "m": {
      "en": "to end",
      "zh-TW": "結束",
      "zh-CN": "结束",
      "ko": "끝나다",
      "vi": "Kết thúc",
      "id": "Selesai",
      "es": "to end",
      "pt": "to end"
    },
    "ex": "授業が終わる",
    "exm": {
      "en": "class ends",
      "zh-TW": "下課",
      "zh-CN": "下课",
      "ko": "class ends",
      "vi": "class ends",
      "id": "class ends",
      "es": "class ends",
      "pt": "class ends"
    },
    "syn": [
      "終了する",
      "完了する",
      "済む"
    ]
  },
  {
    "id": "V0073",
    "w": "つづける",
    "r": "つづける",
    "m": {
      "en": "to continue",
      "zh-TW": "繼續",
      "zh-CN": "继续",
      "ko": "to continue",
      "vi": "to continue",
      "id": "to continue",
      "es": "to continue",
      "pt": "to continue"
    },
    "ex": "勉強を続ける",
    "exm": {
      "en": "continue study",
      "zh-TW": "繼續學習",
      "zh-CN": "继续学习",
      "ko": "공부하다",
      "vi": "học",
      "id": "belajar",
      "es": "continue study",
      "pt": "continue study"
    }
  },
  {
    "id": "V0074",
    "w": "やめる",
    "r": "やめる",
    "m": {
      "en": "to stop/quit",
      "zh-TW": "停止",
      "zh-CN": "停止",
      "ko": "to stop/quit",
      "vi": "to stop/quit",
      "id": "to stop/quit",
      "es": "to stop/quit",
      "pt": "to stop/quit"
    },
    "ex": "仕事を止める",
    "exm": {
      "en": "quit job",
      "zh-TW": "辭職",
      "zh-CN": "辞职",
      "ko": "quit job",
      "vi": "quit job",
      "id": "quit job",
      "es": "quit job",
      "pt": "quit job"
    }
  },
  {
    "id": "V0075",
    "w": "かえる",
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
    "ex": "予定を変える",
    "exm": {
      "en": "change schedule",
      "zh-TW": "改變計劃",
      "zh-CN": "改变计划",
      "ko": "바꾸다",
      "vi": "thay đổi",
      "id": "mengubah",
      "es": "change schedule",
      "pt": "change schedule"
    }
  },
  {
    "id": "V0076",
    "w": "かわる",
    "r": "かわる",
    "m": {
      "en": "to be changed",
      "zh-TW": "變化",
      "zh-CN": "变化",
      "ko": "to be changed",
      "vi": "to be changed",
      "id": "to be changed",
      "es": "to be changed",
      "pt": "to be changed"
    },
    "ex": "天気が変わる",
    "exm": {
      "en": "weather changes",
      "zh-TW": "天氣變化",
      "zh-CN": "天气变化",
      "ko": "날씨",
      "vi": "thời tiết",
      "id": "cuaca",
      "es": "weather changes",
      "pt": "weather changes"
    }
  },
  {
    "id": "V0077",
    "w": "ある",
    "r": "ある",
    "m": {
      "en": "to exist (inanimate)",
      "zh-TW": "有(物)",
      "zh-CN": "有(物)",
      "ko": "to exist (inanimate)",
      "vi": "to exist (inanimate)",
      "id": "to exist (inanimate)",
      "es": "to exist (inanimate)",
      "pt": "to exist (inanimate)"
    },
    "ex": "本がある",
    "exm": {
      "en": "there is a book",
      "zh-TW": "有書",
      "zh-CN": "有书",
      "ko": "거기 책",
      "vi": "đó sách",
      "id": "di sana buku",
      "es": "there is a book",
      "pt": "there is a book"
    }
  },
  {
    "id": "V0078",
    "w": "いる",
    "r": "いる",
    "m": {
      "en": "to exist (animate)",
      "zh-TW": "有(人/動物)",
      "zh-CN": "有(人/动物)",
      "ko": "to exist (animate)",
      "vi": "to exist (animate)",
      "id": "to exist (animate)",
      "es": "to exist (animate)",
      "pt": "to exist (animate)"
    },
    "ex": "猫がいる",
    "exm": {
      "en": "there is a cat",
      "zh-TW": "有貓",
      "zh-CN": "有猫",
      "ko": "거기 고양이",
      "vi": "đó mèo",
      "id": "di sana kucing",
      "es": "there is a cat",
      "pt": "there is a cat"
    }
  },
  {
    "id": "V0079",
    "w": "なる",
    "r": "なる",
    "m": {
      "en": "to become",
      "zh-TW": "變成",
      "zh-CN": "变成",
      "ko": "to become",
      "vi": "to become",
      "id": "to become",
      "es": "to become",
      "pt": "to become"
    },
    "ex": "医者になる",
    "exm": {
      "en": "become doctor",
      "zh-TW": "成為醫生",
      "zh-CN": "成为医生",
      "ko": "의사",
      "vi": "bác sĩ",
      "id": "dokter",
      "es": "become doctor",
      "pt": "become doctor"
    }
  },
  {
    "id": "V0080",
    "w": "できる",
    "r": "できる",
    "m": {
      "en": "can do",
      "zh-TW": "能/會",
      "zh-CN": "能/会",
      "ko": "can do",
      "vi": "can do",
      "id": "can do",
      "es": "can do",
      "pt": "can do"
    },
    "ex": "日本語ができる",
    "exm": {
      "en": "can speak Japanese",
      "zh-TW": "會日語",
      "zh-CN": "会日语",
      "ko": "말하다",
      "vi": "nói",
      "id": "berbicara",
      "es": "can speak Japanese",
      "pt": "can speak Japanese"
    }
  },
  {
    "id": "V0081",
    "w": "いる",
    "r": "いる",
    "m": {
      "en": "to need",
      "zh-TW": "需要",
      "zh-CN": "需要",
      "ko": "필요하다",
      "vi": "Cần",
      "id": "Butuh",
      "es": "to need",
      "pt": "to need"
    },
    "ex": "お金が要る",
    "exm": {
      "en": "need money",
      "zh-TW": "需要錢",
      "zh-CN": "需要钱",
      "ko": "필요하다",
      "vi": "cần",
      "id": "perlu",
      "es": "need money",
      "pt": "need money"
    }
  },
  {
    "id": "V0082",
    "w": "ほしい",
    "r": "ほしい",
    "m": {
      "en": "to want",
      "zh-TW": "想要",
      "zh-CN": "想要",
      "ko": "원하다",
      "vi": "Muốn",
      "id": "Ingin",
      "es": "to want",
      "pt": "to want"
    },
    "ex": "車が欲しい",
    "exm": {
      "en": "want a car",
      "zh-TW": "想要車",
      "zh-CN": "想要车",
      "ko": "원하다 차",
      "vi": "muốn xe",
      "id": "ingin mobil",
      "es": "want a car",
      "pt": "want a car"
    }
  },
  {
    "id": "V0083",
    "w": "あげる",
    "r": "あげる",
    "m": {
      "en": "to give",
      "zh-TW": "給",
      "zh-CN": "给",
      "ko": "주다",
      "vi": "Cho",
      "id": "Memberi",
      "es": "to give",
      "pt": "to give"
    },
    "ex": "プレゼントをあげる",
    "exm": {
      "en": "give present",
      "zh-TW": "送禮物",
      "zh-CN": "送礼物",
      "ko": "주다",
      "vi": "cho",
      "id": "memberi",
      "es": "give present",
      "pt": "give present"
    }
  },
  {
    "id": "V0084",
    "w": "もらう",
    "r": "もらう",
    "m": {
      "en": "to receive",
      "zh-TW": "收到",
      "zh-CN": "收到",
      "ko": "받다",
      "vi": "Nhận",
      "id": "Menerima",
      "es": "to receive",
      "pt": "to receive"
    },
    "ex": "手紙をもらう",
    "exm": {
      "en": "receive letter",
      "zh-TW": "收到信",
      "zh-CN": "收到信",
      "ko": "받다 편지",
      "vi": "nhận thư",
      "id": "menerima surat",
      "es": "receive letter",
      "pt": "receive letter"
    }
  },
  {
    "id": "V0085",
    "w": "くれる",
    "r": "くれる",
    "m": {
      "en": "to give (to me)",
      "zh-TW": "給(我)",
      "zh-CN": "给(我)",
      "ko": "to give (to me)",
      "vi": "to give (to me)",
      "id": "to give (to me)",
      "es": "to give (to me)",
      "pt": "to give (to me)"
    },
    "ex": "本をくれる",
    "exm": {
      "en": "give me book",
      "zh-TW": "給我書",
      "zh-CN": "给我书",
      "ko": "주다 책",
      "vi": "cho sách",
      "id": "memberi buku",
      "es": "give me book",
      "pt": "give me book"
    }
  },
  {
    "id": "V0086",
    "w": "かす",
    "r": "かす",
    "m": {
      "en": "to lend",
      "zh-TW": "借(出)",
      "zh-CN": "借(出)",
      "ko": "빌려주다",
      "vi": "cho mượn",
      "id": "meminjamkan",
      "es": "to lend",
      "pt": "to lend"
    },
    "ex": "本を貸す",
    "exm": {
      "en": "lend book",
      "zh-TW": "借書給人",
      "zh-CN": "借书给人",
      "ko": "빌려주다 책",
      "vi": "cho mượn sách",
      "id": "meminjamkan buku",
      "es": "lend book",
      "pt": "lend book"
    }
  },
  {
    "id": "V0087",
    "w": "かりる",
    "r": "かりる",
    "m": {
      "en": "to borrow",
      "zh-TW": "借(入)",
      "zh-CN": "借(入)",
      "ko": "빌리다",
      "vi": "mượn",
      "id": "meminjam",
      "es": "to borrow",
      "pt": "to borrow"
    },
    "ex": "本を借りる",
    "exm": {
      "en": "borrow book",
      "zh-TW": "向人借書",
      "zh-CN": "向人借书",
      "ko": "빌리다 책",
      "vi": "mượn sách",
      "id": "meminjam buku",
      "es": "borrow book",
      "pt": "borrow book"
    }
  },
  {
    "id": "V0088",
    "w": "かえす",
    "r": "かえす",
    "m": {
      "en": "to return",
      "zh-TW": "回來",
      "zh-CN": "回来",
      "ko": "돌아오다",
      "vi": "Trở về",
      "id": "Kembali",
      "es": "volver",
      "pt": "voltar"
    },
    "ex": "本を返す",
    "exm": {
      "en": "return book",
      "zh-TW": "還書",
      "zh-CN": "还书",
      "ko": "돌아가다 책",
      "vi": "trở về sách",
      "id": "kembali buku",
      "es": "return book",
      "pt": "return book"
    }
  },
  {
    "id": "V0089",
    "w": "はらう",
    "r": "はらう",
    "m": {
      "en": "to pay",
      "zh-TW": "付",
      "zh-CN": "付",
      "ko": "지불하다",
      "vi": "trả",
      "id": "membayar",
      "es": "to pay",
      "pt": "to pay"
    },
    "ex": "お金を払う",
    "exm": {
      "en": "pay money",
      "zh-TW": "付錢",
      "zh-CN": "付钱",
      "ko": "지불하다",
      "vi": "trả",
      "id": "membayar",
      "es": "pay money",
      "pt": "pay money"
    }
  },
  {
    "id": "V0090",
    "w": "おくる",
    "r": "おくる",
    "m": {
      "en": "to send",
      "zh-TW": "送",
      "zh-CN": "送",
      "ko": "보내다",
      "vi": "Gửi",
      "id": "Mengirim",
      "es": "to send",
      "pt": "to send"
    },
    "ex": "手紙を送る",
    "exm": {
      "en": "send letter",
      "zh-TW": "寄信",
      "zh-CN": "寄信",
      "ko": "보내다 편지",
      "vi": "gửi thư",
      "id": "mengirim surat",
      "es": "send letter",
      "pt": "send letter"
    }
  },
  {
    "id": "V0091",
    "w": "とどける",
    "r": "とどける",
    "m": {
      "en": "to deliver",
      "zh-TW": "送達",
      "zh-CN": "送达",
      "ko": "to deliver",
      "vi": "to deliver",
      "id": "to deliver",
      "es": "to deliver",
      "pt": "to deliver"
    },
    "ex": "荷物を届ける",
    "exm": {
      "en": "deliver package",
      "zh-TW": "送貨",
      "zh-CN": "送货",
      "ko": "deliver package",
      "vi": "deliver package",
      "id": "deliver package",
      "es": "deliver package",
      "pt": "deliver package"
    }
  },
  {
    "id": "V0092",
    "w": "とどく",
    "r": "とどく",
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
    "ex": "手紙が届く",
    "exm": {
      "en": "letter arrives",
      "zh-TW": "信到了",
      "zh-CN": "信到了",
      "ko": "편지",
      "vi": "thư",
      "id": "surat",
      "es": "letter arrives",
      "pt": "letter arrives"
    }
  },
  {
    "id": "V0093",
    "w": "あずける",
    "r": "あずける",
    "m": {
      "en": "to deposit",
      "zh-TW": "寄存",
      "zh-CN": "寄存",
      "ko": "to deposit",
      "vi": "to deposit",
      "id": "to deposit",
      "es": "to deposit",
      "pt": "to deposit"
    },
    "ex": "荷物を預ける",
    "exm": {
      "en": "deposit luggage",
      "zh-TW": "寄放行李",
      "zh-CN": "寄放行李",
      "ko": "deposit luggage",
      "vi": "deposit luggage",
      "id": "deposit luggage",
      "es": "deposit luggage",
      "pt": "deposit luggage"
    }
  },
  {
    "id": "V0094",
    "w": "うけとる",
    "r": "うけとる",
    "m": {
      "en": "to receive",
      "zh-TW": "收到",
      "zh-CN": "收到",
      "ko": "받다",
      "vi": "Nhận",
      "id": "Menerima",
      "es": "to receive",
      "pt": "to receive"
    },
    "ex": "荷物を受け取る",
    "exm": {
      "en": "receive package",
      "zh-TW": "領取包裹",
      "zh-CN": "领取包裹",
      "ko": "받다",
      "vi": "nhận",
      "id": "menerima",
      "es": "receive package",
      "pt": "receive package"
    }
  },
  {
    "id": "V0095",
    "w": "おとす",
    "r": "おとす",
    "m": {
      "en": "to drop",
      "zh-TW": "掉落",
      "zh-CN": "掉落",
      "ko": "to drop",
      "vi": "to drop",
      "id": "to drop",
      "es": "to drop",
      "pt": "to drop"
    },
    "ex": "財布を落とす",
    "exm": {
      "en": "drop wallet",
      "zh-TW": "掉錢包",
      "zh-CN": "掉钱包",
      "ko": "drop wallet",
      "vi": "drop wallet",
      "id": "drop wallet",
      "es": "drop wallet",
      "pt": "drop wallet"
    }
  },
  {
    "id": "V0096",
    "w": "ひろう",
    "r": "ひろう",
    "m": {
      "en": "to pick up",
      "zh-TW": "撿",
      "zh-CN": "捡",
      "ko": "위로",
      "vi": "lên",
      "id": "naik",
      "es": "to pick up",
      "pt": "to pick up"
    },
    "ex": "ゴミを拾う",
    "exm": {
      "en": "pick up trash",
      "zh-TW": "撿垃圾",
      "zh-CN": "捡垃圾",
      "ko": "위로",
      "vi": "lên",
      "id": "naik",
      "es": "pick up trash",
      "pt": "pick up trash"
    }
  },
  {
    "id": "V0097",
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
    "ex": "車を直す",
    "exm": {
      "en": "fix car",
      "zh-TW": "修車",
      "zh-CN": "修车",
      "ko": "고치다 차",
      "vi": "sửa xe",
      "id": "memperbaiki mobil",
      "es": "fix car",
      "pt": "fix car"
    }
  },
  {
    "id": "V0098",
    "w": "こわす",
    "r": "こわす",
    "m": {
      "en": "to break",
      "zh-TW": "弄壞",
      "zh-CN": "弄坏",
      "ko": "부수다",
      "vi": "phá",
      "id": "memecahkan",
      "es": "to break",
      "pt": "to break"
    },
    "ex": "パソコンを壊す",
    "exm": {
      "en": "break computer",
      "zh-TW": "弄壞電腦",
      "zh-CN": "弄坏电脑",
      "ko": "부수다 컴퓨터",
      "vi": "phá máy tính",
      "id": "memecahkan komputer",
      "es": "break computer",
      "pt": "break computer"
    }
  },
  {
    "id": "V0099",
    "w": "こわれる",
    "r": "こわれる",
    "m": {
      "en": "to be broken",
      "zh-TW": "壞掉",
      "zh-CN": "坏掉",
      "ko": "to be broken",
      "vi": "to be broken",
      "id": "to be broken",
      "es": "to be broken",
      "pt": "to be broken"
    },
    "ex": "時計が壊れる",
    "exm": {
      "en": "watch breaks",
      "zh-TW": "手錶壞了",
      "zh-CN": "手表坏了",
      "ko": "보다",
      "vi": "xem",
      "id": "menonton",
      "es": "watch breaks",
      "pt": "watch breaks"
    }
  },
  {
    "id": "V0100",
    "w": "する",
    "r": "する",
    "m": {
      "en": "to do",
      "zh-TW": "做",
      "zh-CN": "做",
      "ko": "하다",
      "vi": "Làm",
      "id": "Melakukan",
      "es": "to do",
      "pt": "to do"
    },
    "ex": "運動をする",
    "exm": {
      "en": "exercise",
      "zh-TW": "運動",
      "zh-CN": "运动",
      "ko": "exercise",
      "vi": "exercise",
      "id": "exercise",
      "es": "exercise",
      "pt": "exercise"
    }
  },
  {
    "id": "V0101",
    "w": "すき",
    "r": "すき",
    "m": {
      "en": "to like",
      "zh-TW": "喜歡",
      "zh-CN": "喜欢",
      "ko": "좋아하다",
      "vi": "Thích",
      "id": "Suka",
      "es": "to like",
      "pt": "to like"
    },
    "ex": "寿司が好き",
    "exm": {
      "en": "like sushi",
      "zh-TW": "喜歡壽司",
      "zh-CN": "喜欢寿司",
      "ko": "좋아하다",
      "vi": "thích",
      "id": "suka",
      "es": "like sushi",
      "pt": "like sushi"
    }
  },
  {
    "id": "V0102",
    "w": "きらい",
    "r": "きらい",
    "m": {
      "en": "to dislike",
      "zh-TW": "討厭",
      "zh-CN": "讨厌",
      "ko": "to dislike",
      "vi": "to dislike",
      "id": "to dislike",
      "es": "to dislike",
      "pt": "to dislike"
    },
    "ex": "野菜が嫌い",
    "exm": {
      "en": "dislike vegetables",
      "zh-TW": "討厭蔬菜",
      "zh-CN": "讨厌蔬菜",
      "ko": "dislike vegetables",
      "vi": "dislike vegetables",
      "id": "dislike vegetables",
      "es": "dislike vegetables",
      "pt": "dislike vegetables"
    }
  },
  {
    "id": "V0103",
    "w": "わらう",
    "r": "わらう",
    "m": {
      "en": "to laugh",
      "zh-TW": "笑",
      "zh-CN": "笑",
      "ko": "to laugh",
      "vi": "to laugh",
      "id": "to laugh",
      "es": "to laugh",
      "pt": "to laugh"
    },
    "ex": "面白くて笑う",
    "exm": {
      "en": "laugh funny",
      "zh-TW": "好笑而笑",
      "zh-CN": "好笑而笑",
      "ko": "laugh funny",
      "vi": "laugh funny",
      "id": "laugh funny",
      "es": "laugh funny",
      "pt": "laugh funny"
    }
  },
  {
    "id": "V0104",
    "w": "なく",
    "r": "なく",
    "m": {
      "en": "to cry",
      "zh-TW": "哭",
      "zh-CN": "哭",
      "ko": "to cry",
      "vi": "to cry",
      "id": "to cry",
      "es": "to cry",
      "pt": "to cry"
    },
    "ex": "悲しくて泣く",
    "exm": {
      "en": "cry sad",
      "zh-TW": "傷心而哭",
      "zh-CN": "伤心而哭",
      "ko": "슬픈",
      "vi": "buồn",
      "id": "sedih",
      "es": "cry sad",
      "pt": "cry sad"
    }
  },
  {
    "id": "V0105",
    "w": "おこる",
    "r": "おこる",
    "m": {
      "en": "to get angry",
      "zh-TW": "生氣",
      "zh-CN": "生气",
      "ko": "화난",
      "vi": "giận",
      "id": "marah",
      "es": "to get angry",
      "pt": "to get angry"
    },
    "ex": "先生が怒る",
    "exm": {
      "en": "teacher angry",
      "zh-TW": "老師生氣",
      "zh-CN": "老师生气",
      "ko": "선생님 화난",
      "vi": "giáo viên giận",
      "id": "guru marah",
      "es": "teacher angry",
      "pt": "teacher angry"
    }
  },
  {
    "id": "V0106",
    "w": "よろこぶ",
    "r": "よろこぶ",
    "m": {
      "en": "to be happy",
      "zh-TW": "高興",
      "zh-CN": "高兴",
      "ko": "행복한",
      "vi": "vui",
      "id": "bahagia",
      "es": "to be happy",
      "pt": "to be happy"
    },
    "ex": "プレゼントを喜ぶ",
    "exm": {
      "en": "happy gift",
      "zh-TW": "收到禮物很高興",
      "zh-CN": "收到礼物很高兴",
      "ko": "행복한",
      "vi": "vui",
      "id": "bahagia",
      "es": "happy gift",
      "pt": "happy gift"
    }
  },
  {
    "id": "V0107",
    "w": "かなしむ",
    "r": "かなしむ",
    "m": {
      "en": "to be sad",
      "zh-TW": "悲傷",
      "zh-CN": "悲伤",
      "ko": "슬픈",
      "vi": "buồn",
      "id": "sedih",
      "es": "to be sad",
      "pt": "to be sad"
    },
    "ex": "別れを悲しむ",
    "exm": {
      "en": "sad parting",
      "zh-TW": "為離別而悲傷",
      "zh-CN": "为离别而悲伤",
      "ko": "슬픈",
      "vi": "buồn",
      "id": "sedih",
      "es": "sad parting",
      "pt": "sad parting"
    }
  },
  {
    "id": "V0108",
    "w": "おどろく",
    "r": "おどろく",
    "m": {
      "en": "to be surprised",
      "zh-TW": "驚訝",
      "zh-CN": "惊讶",
      "ko": "to be surprised",
      "vi": "to be surprised",
      "id": "to be surprised",
      "es": "to be surprised",
      "pt": "to be surprised"
    },
    "ex": "ニュースに驚く",
    "exm": {
      "en": "surprised news",
      "zh-TW": "對新聞感到驚訝",
      "zh-CN": "对新闻感到惊讶",
      "ko": "surprised news",
      "vi": "surprised news",
      "id": "surprised news",
      "es": "surprised news",
      "pt": "surprised news"
    }
  },
  {
    "id": "V0109",
    "w": "しんぱいする",
    "r": "しんぱいする",
    "m": {
      "en": "to worry",
      "zh-TW": "擔心",
      "zh-CN": "担心",
      "ko": "to worry",
      "vi": "to worry",
      "id": "to worry",
      "es": "to worry",
      "pt": "to worry"
    },
    "ex": "友達を心配する",
    "exm": {
      "en": "worry friend",
      "zh-TW": "擔心朋友",
      "zh-CN": "担心朋友",
      "ko": "친구",
      "vi": "bạn",
      "id": "teman",
      "es": "worry friend",
      "pt": "worry friend"
    }
  },
  {
    "id": "V0110",
    "w": "あんしんする",
    "r": "あんしんする",
    "m": {
      "en": "to be relieved",
      "zh-TW": "放心",
      "zh-CN": "放心",
      "ko": "to be relieved",
      "vi": "to be relieved",
      "id": "to be relieved",
      "es": "to be relieved",
      "pt": "to be relieved"
    },
    "ex": "無事で安心する",
    "exm": {
      "en": "relieved safe",
      "zh-TW": "平安而放心",
      "zh-CN": "平安而放心",
      "ko": "relieved safe",
      "vi": "relieved safe",
      "id": "relieved safe",
      "es": "relieved safe",
      "pt": "relieved safe"
    }
  },
  {
    "id": "V0111",
    "w": "こまる",
    "r": "こまる",
    "m": {
      "en": "to be troubled",
      "zh-TW": "困擾",
      "zh-CN": "困扰",
      "ko": "to be troubled",
      "vi": "to be troubled",
      "id": "to be troubled",
      "es": "to be troubled",
      "pt": "to be troubled"
    },
    "ex": "お金に困る",
    "exm": {
      "en": "troubled money",
      "zh-TW": "為錢困擾",
      "zh-CN": "为钱困扰",
      "ko": "troubled money",
      "vi": "troubled money",
      "id": "troubled money",
      "es": "troubled money",
      "pt": "troubled money"
    }
  },
  {
    "id": "V0112",
    "w": "つかれる",
    "r": "つかれる",
    "m": {
      "en": "to be tired",
      "zh-TW": "累",
      "zh-CN": "累",
      "ko": "피곤한",
      "vi": "mệt",
      "id": "lelah",
      "es": "to be tired",
      "pt": "to be tired"
    },
    "ex": "仕事で疲れる",
    "exm": {
      "en": "tired work",
      "zh-TW": "工作累了",
      "zh-CN": "工作累了",
      "ko": "피곤한 일하다",
      "vi": "mệt làm việc",
      "id": "lelah bekerja",
      "es": "tired work",
      "pt": "tired work"
    }
  },
  {
    "id": "V0113",
    "w": "元気",
    "r": "げんき",
    "m": {
      "en": "healthy/energetic",
      "zh-TW": "精神好",
      "zh-CN": "精神好",
      "ko": "healthy/energetic",
      "vi": "healthy/energetic",
      "id": "healthy/energetic",
      "es": "healthy/energetic",
      "pt": "healthy/energetic"
    },
    "ex": "今日は元気",
    "exm": {
      "en": "energetic today",
      "zh-TW": "今天精神好",
      "zh-CN": "今天精神好",
      "ko": "오늘",
      "vi": "hôm nay",
      "id": "hari ini",
      "es": "energetic today",
      "pt": "energetic today"
    }
  },
  {
    "id": "V0114",
    "w": "びょうき",
    "r": "びょうき",
    "m": {
      "en": "sick",
      "zh-TW": "生病",
      "zh-CN": "生病",
      "ko": "아픈",
      "vi": "ốm",
      "id": "sakit",
      "es": "sick",
      "pt": "sick"
    },
    "ex": "病気になる",
    "exm": {
      "en": "get sick",
      "zh-TW": "生病了",
      "zh-CN": "生病了",
      "ko": "아픈",
      "vi": "ốm",
      "id": "sakit",
      "es": "get sick",
      "pt": "get sick"
    }
  },
  {
    "id": "V0115",
    "w": "なおる",
    "r": "なおる",
    "m": {
      "en": "to heal",
      "zh-TW": "痊癒",
      "zh-CN": "痊愈",
      "ko": "낫다",
      "vi": "lành",
      "id": "sembuh",
      "es": "to heal",
      "pt": "to heal"
    },
    "ex": "風邪が治る",
    "exm": {
      "en": "cold heals",
      "zh-TW": "感冒好了",
      "zh-CN": "感冒好了",
      "ko": "차가운 낫다",
      "vi": "lạnh lành",
      "id": "dingin sembuh",
      "es": "cold heals",
      "pt": "cold heals"
    }
  },
  {
    "id": "V0116",
    "w": "生まれる",
    "r": "うまれる",
    "m": {
      "en": "to be born",
      "zh-TW": "出生",
      "zh-CN": "出生",
      "ko": "태어나다",
      "vi": "Sinh ra",
      "id": "Lahir",
      "es": "to be born",
      "pt": "to be born"
    },
    "ex": "東京で生まれる",
    "exm": {
      "en": "born Tokyo",
      "zh-TW": "在東京出生",
      "zh-CN": "在东京出生",
      "ko": "태어나다 도쿄",
      "vi": "sinh ra Tokyo",
      "id": "lahir Tokyo",
      "es": "born Tokyo",
      "pt": "born Tokyo"
    }
  },
  {
    "id": "V0117",
    "w": "しぬ",
    "r": "しぬ",
    "m": {
      "en": "to die",
      "zh-TW": "死",
      "zh-CN": "死",
      "ko": "죽다",
      "vi": "Chết",
      "id": "Mati",
      "es": "to die",
      "pt": "to die"
    },
    "ex": "花が死ぬ",
    "exm": {
      "en": "flower dies",
      "zh-TW": "花死了",
      "zh-CN": "花死了",
      "ko": "꽃",
      "vi": "hoa",
      "id": "bunga",
      "es": "flower dies",
      "pt": "flower dies"
    }
  },
  {
    "id": "V0118",
    "w": "生きる",
    "r": "いきる",
    "m": {
      "en": "to live",
      "zh-TW": "住",
      "zh-CN": "住",
      "ko": "살다",
      "vi": "Sống",
      "id": "Tinggal",
      "es": "to live",
      "pt": "to live"
    },
    "ex": "幸せに生きる",
    "exm": {
      "en": "live happy",
      "zh-TW": "幸福地活著",
      "zh-CN": "幸福地活着",
      "ko": "살다 행복한",
      "vi": "sống vui",
      "id": "tinggal bahagia",
      "es": "live happy",
      "pt": "live happy"
    }
  },
  {
    "id": "V0119",
    "w": "すむ",
    "r": "すむ",
    "m": {
      "en": "to live/reside",
      "zh-TW": "住",
      "zh-CN": "住",
      "ko": "to live/reside",
      "vi": "to live/reside",
      "id": "to live/reside",
      "es": "to live/reside",
      "pt": "to live/reside"
    },
    "ex": "東京に住む",
    "exm": {
      "en": "live Tokyo",
      "zh-TW": "住在東京",
      "zh-CN": "住在东京",
      "ko": "살다 도쿄",
      "vi": "sống Tokyo",
      "id": "tinggal Tokyo",
      "es": "live Tokyo",
      "pt": "live Tokyo"
    }
  },
  {
    "id": "V0120",
    "w": "ひっこす",
    "r": "ひっこす",
    "m": {
      "en": "to move house",
      "zh-TW": "搬家",
      "zh-CN": "搬家",
      "ko": "집",
      "vi": "nhà",
      "id": "rumah",
      "es": "to move house",
      "pt": "to move house"
    },
    "ex": "大阪に引っ越す",
    "exm": {
      "en": "move Osaka",
      "zh-TW": "搬到大阪",
      "zh-CN": "搬到大阪",
      "ko": "move Osaka",
      "vi": "move Osaka",
      "id": "move Osaka",
      "es": "move Osaka",
      "pt": "move Osaka"
    }
  },
  {
    "id": "V0121",
    "w": "けっこんする",
    "r": "けっこんする",
    "m": {
      "en": "to marry",
      "zh-TW": "結婚",
      "zh-CN": "结婚",
      "ko": "to marry",
      "vi": "to marry",
      "id": "to marry",
      "es": "to marry",
      "pt": "to marry"
    },
    "ex": "来年結婚する",
    "exm": {
      "en": "marry next year",
      "zh-TW": "明年結婚",
      "zh-CN": "明年结婚",
      "ko": "년",
      "vi": "năm",
      "id": "tahun",
      "es": "marry next year",
      "pt": "marry next year"
    }
  },
  {
    "id": "V0122",
    "w": "りこんする",
    "r": "りこんする",
    "m": {
      "en": "to divorce",
      "zh-TW": "離婚",
      "zh-CN": "离婚",
      "ko": "to divorce",
      "vi": "to divorce",
      "id": "to divorce",
      "es": "to divorce",
      "pt": "to divorce"
    },
    "ex": "去年離婚した",
    "exm": {
      "en": "divorced last year",
      "zh-TW": "去年離婚了",
      "zh-CN": "去年离婚了",
      "ko": "년",
      "vi": "năm",
      "id": "tahun",
      "es": "divorced last year",
      "pt": "divorced last year"
    }
  },
  {
    "id": "V0123",
    "w": "つきあう",
    "r": "つきあう",
    "m": {
      "en": "to date",
      "zh-TW": "交往",
      "zh-CN": "交往",
      "ko": "to date",
      "vi": "to date",
      "id": "to date",
      "es": "to date",
      "pt": "to date"
    },
    "ex": "彼と付き合う",
    "exm": {
      "en": "date him",
      "zh-TW": "和他交往",
      "zh-CN": "和他交往",
      "ko": "date him",
      "vi": "date him",
      "id": "date him",
      "es": "date him",
      "pt": "date him"
    }
  },
  {
    "id": "V0124",
    "w": "わかれる",
    "r": "わかれる",
    "m": {
      "en": "to break up",
      "zh-TW": "分手",
      "zh-CN": "分手",
      "ko": "부수다 위로",
      "vi": "phá lên",
      "id": "memecahkan naik",
      "es": "to break up",
      "pt": "to break up"
    },
    "ex": "彼女と別れる",
    "exm": {
      "en": "break up her",
      "zh-TW": "和她分手",
      "zh-CN": "和她分手",
      "ko": "부수다 위로",
      "vi": "phá lên",
      "id": "memecahkan naik",
      "es": "break up her",
      "pt": "break up her"
    }
  },
  {
    "id": "V0125",
    "w": "おこす",
    "r": "おこす",
    "m": {
      "en": "to wake (someone)",
      "zh-TW": "叫醒",
      "zh-CN": "叫醒",
      "ko": "to wake (someone)",
      "vi": "to wake (someone)",
      "id": "to wake (someone)",
      "es": "to wake (someone)",
      "pt": "to wake (someone)"
    },
    "ex": "子供を起こす",
    "exm": {
      "en": "wake child",
      "zh-TW": "叫醒小孩",
      "zh-CN": "叫醒小孩",
      "ko": "일어나다 아이",
      "vi": "thức dậy trẻ em",
      "id": "bangun anak",
      "es": "wake child",
      "pt": "wake child"
    }
  },
  {
    "id": "V0126",
    "w": "ねかす",
    "r": "ねかす",
    "m": {
      "en": "to put to sleep",
      "zh-TW": "哄睡",
      "zh-CN": "哄睡",
      "ko": "놓다 자다",
      "vi": "đặt ngủ",
      "id": "meletakkan tidur",
      "es": "to put to sleep",
      "pt": "to put to sleep"
    },
    "ex": "赤ちゃんを寝かす",
    "exm": {
      "en": "put baby sleep",
      "zh-TW": "哄嬰兒睡覺",
      "zh-CN": "哄婴儿睡觉",
      "ko": "놓다 자다",
      "vi": "đặt ngủ",
      "id": "meletakkan tidur",
      "es": "put baby sleep",
      "pt": "put baby sleep"
    }
  },
  {
    "id": "V0127",
    "w": "おくれる",
    "r": "おくれる",
    "m": {
      "en": "to be late",
      "zh-TW": "遲到",
      "zh-CN": "迟到",
      "ko": "늦은",
      "vi": "muộn",
      "id": "terlambat",
      "es": "to be late",
      "pt": "to be late"
    },
    "ex": "会議に遅れる",
    "exm": {
      "en": "late meeting",
      "zh-TW": "開會遲到",
      "zh-CN": "开会迟到",
      "ko": "늦은 회의",
      "vi": "muộn cuộc họp",
      "id": "terlambat rapat",
      "es": "late meeting",
      "pt": "late meeting"
    }
  },
  {
    "id": "V0128",
    "w": "いそぐ",
    "r": "いそぐ",
    "m": {
      "en": "to hurry",
      "zh-TW": "趕快",
      "zh-CN": "赶快",
      "ko": "to hurry",
      "vi": "to hurry",
      "id": "to hurry",
      "es": "to hurry",
      "pt": "to hurry"
    },
    "ex": "駅に急ぐ",
    "exm": {
      "en": "hurry station",
      "zh-TW": "趕去車站",
      "zh-CN": "赶去车站",
      "ko": "역",
      "vi": "ga",
      "id": "stasiun",
      "es": "hurry station",
      "pt": "hurry station"
    }
  },
  {
    "id": "V0129",
    "w": "まにあう",
    "r": "まにあう",
    "m": {
      "en": "to be on time",
      "zh-TW": "趕上",
      "zh-CN": "赶上",
      "ko": "시간",
      "vi": "thời gian",
      "id": "waktu",
      "es": "to be on time",
      "pt": "to be on time"
    },
    "ex": "電車に間に合う",
    "exm": {
      "en": "catch train",
      "zh-TW": "趕上電車",
      "zh-CN": "赶上电车",
      "ko": "잡다 기차",
      "vi": "bắt tàu",
      "id": "menangkap kereta",
      "es": "catch train",
      "pt": "catch train"
    }
  },
  {
    "id": "V0130",
    "w": "おちる",
    "r": "おちる",
    "m": {
      "en": "to fall",
      "zh-TW": "掉落",
      "zh-CN": "掉落",
      "ko": "to fall",
      "vi": "to fall",
      "id": "to fall",
      "es": "to fall",
      "pt": "to fall"
    },
    "ex": "葉が落ちる",
    "exm": {
      "en": "leaves fall",
      "zh-TW": "葉子掉落",
      "zh-CN": "叶子掉落",
      "ko": "leaves fall",
      "vi": "leaves fall",
      "id": "leaves fall",
      "es": "leaves fall",
      "pt": "leaves fall"
    }
  },
  {
    "id": "V0131",
    "w": "上がる",
    "r": "あがる",
    "m": {
      "en": "to go up",
      "zh-TW": "上升",
      "zh-CN": "上升",
      "ko": "가다",
      "vi": "đi",
      "id": "pergi",
      "es": "to go up",
      "pt": "to go up"
    },
    "ex": "温度が上がる",
    "exm": {
      "en": "temp rises",
      "zh-TW": "溫度上升",
      "zh-CN": "温度上升",
      "ko": "temp rises",
      "vi": "temp rises",
      "id": "temp rises",
      "es": "temp rises",
      "pt": "temp rises"
    }
  },
  {
    "id": "V0132",
    "w": "下がる",
    "r": "さがる",
    "m": {
      "en": "to go down",
      "zh-TW": "下降",
      "zh-CN": "下降",
      "ko": "가다",
      "vi": "đi",
      "id": "pergi",
      "es": "to go down",
      "pt": "to go down"
    },
    "ex": "温度が下がる",
    "exm": {
      "en": "temp drops",
      "zh-TW": "溫度下降",
      "zh-CN": "温度下降",
      "ko": "temp drops",
      "vi": "temp drops",
      "id": "temp drops",
      "es": "temp drops",
      "pt": "temp drops"
    }
  },
  {
    "id": "V0133",
    "w": "あつまる",
    "r": "あつまる",
    "m": {
      "en": "to gather",
      "zh-TW": "聚集",
      "zh-CN": "聚集",
      "ko": "to gather",
      "vi": "to gather",
      "id": "to gather",
      "es": "to gather",
      "pt": "to gather"
    },
    "ex": "人が集まる",
    "exm": {
      "en": "people gather",
      "zh-TW": "人聚集",
      "zh-CN": "人聚集",
      "ko": "사람들",
      "vi": "mọi người",
      "id": "orang-orang",
      "es": "people gather",
      "pt": "people gather"
    }
  },
  {
    "id": "V0134",
    "w": "あつめる",
    "r": "あつめる",
    "m": {
      "en": "to collect",
      "zh-TW": "收集",
      "zh-CN": "收集",
      "ko": "to collect",
      "vi": "to collect",
      "id": "to collect",
      "es": "to collect",
      "pt": "to collect"
    },
    "ex": "切手を集める",
    "exm": {
      "en": "collect stamps",
      "zh-TW": "收集郵票",
      "zh-CN": "收集邮票",
      "ko": "collect stamps",
      "vi": "collect stamps",
      "id": "collect stamps",
      "es": "collect stamps",
      "pt": "collect stamps"
    }
  },
  {
    "id": "V0135",
    "w": "ならぶ",
    "r": "ならぶ",
    "m": {
      "en": "to line up",
      "zh-TW": "排隊",
      "zh-CN": "排队",
      "ko": "위로",
      "vi": "lên",
      "id": "naik",
      "es": "to line up",
      "pt": "to line up"
    },
    "ex": "店に並ぶ",
    "exm": {
      "en": "line up shop",
      "zh-TW": "在店排隊",
      "zh-CN": "在店排队",
      "ko": "위로 가게",
      "vi": "lên cửa hàng",
      "id": "naik toko",
      "es": "line up shop",
      "pt": "line up shop"
    }
  },
  {
    "id": "V0136",
    "w": "ならべる",
    "r": "ならべる",
    "m": {
      "en": "to arrange",
      "zh-TW": "排列",
      "zh-CN": "排列",
      "ko": "to arrange",
      "vi": "to arrange",
      "id": "to arrange",
      "es": "to arrange",
      "pt": "to arrange"
    },
    "ex": "本を並べる",
    "exm": {
      "en": "arrange books",
      "zh-TW": "排列書",
      "zh-CN": "排列书",
      "ko": "arrange books",
      "vi": "arrange books",
      "id": "arrange books",
      "es": "arrange books",
      "pt": "arrange books"
    }
  },
  {
    "id": "V0137",
    "w": "ふえる",
    "r": "ふえる",
    "m": {
      "en": "to increase",
      "zh-TW": "增加",
      "zh-CN": "增加",
      "ko": "to increase",
      "vi": "to increase",
      "id": "to increase",
      "es": "to increase",
      "pt": "to increase"
    },
    "ex": "人口が増える",
    "exm": {
      "en": "pop increases",
      "zh-TW": "人口增加",
      "zh-CN": "人口增加",
      "ko": "pop increases",
      "vi": "pop increases",
      "id": "pop increases",
      "es": "pop increases",
      "pt": "pop increases"
    }
  },
  {
    "id": "V0138",
    "w": "へる",
    "r": "へる",
    "m": {
      "en": "to decrease",
      "zh-TW": "減少",
      "zh-CN": "减少",
      "ko": "to decrease",
      "vi": "to decrease",
      "id": "to decrease",
      "es": "to decrease",
      "pt": "to decrease"
    },
    "ex": "人口が減る",
    "exm": {
      "en": "pop decreases",
      "zh-TW": "人口減少",
      "zh-CN": "人口减少",
      "ko": "pop decreases",
      "vi": "pop decreases",
      "id": "pop decreases",
      "es": "pop decreases",
      "pt": "pop decreases"
    }
  },
  {
    "id": "V0139",
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
    "ex": "お金が足りる",
    "exm": {
      "en": "money enough",
      "zh-TW": "錢足夠",
      "zh-CN": "钱足够",
      "ko": "충분하다",
      "vi": "đủ",
      "id": "cukup",
      "es": "money enough",
      "pt": "money enough"
    }
  },
  {
    "id": "V0140",
    "w": "あまる",
    "r": "あまる",
    "m": {
      "en": "to be left over",
      "zh-TW": "剩餘",
      "zh-CN": "剩余",
      "ko": "to be left over",
      "vi": "to be left over",
      "id": "to be left over",
      "es": "to be left over",
      "pt": "to be left over"
    },
    "ex": "お金が余る",
    "exm": {
      "en": "money left",
      "zh-TW": "錢剩下",
      "zh-CN": "钱剩下",
      "ko": "money left",
      "vi": "money left",
      "id": "money left",
      "es": "money left",
      "pt": "money left"
    }
  },
  {
    "id": "V0141",
    "w": "かかる",
    "r": "かかる",
    "m": {
      "en": "to take (time/money)",
      "zh-TW": "花費",
      "zh-CN": "花费",
      "ko": "to take (time/money)",
      "vi": "to take (time/money)",
      "id": "to take (time/money)",
      "es": "to take (time/money)",
      "pt": "to take (time/money)"
    },
    "ex": "時間が掛かる",
    "exm": {
      "en": "takes time",
      "zh-TW": "花時間",
      "zh-CN": "花时间",
      "ko": "시간",
      "vi": "thời gian",
      "id": "waktu",
      "es": "takes time",
      "pt": "takes time"
    }
  },
  {
    "id": "V0142",
    "w": "やくにたつ",
    "r": "やくにたつ",
    "m": {
      "en": "to be useful",
      "zh-TW": "有用",
      "zh-CN": "有用",
      "ko": "유용한",
      "vi": "hữu ích",
      "id": "berguna",
      "es": "to be useful",
      "pt": "to be useful"
    },
    "ex": "辞書が役に立つ",
    "exm": {
      "en": "dictionary useful",
      "zh-TW": "字典很有用",
      "zh-CN": "字典很有用",
      "ko": "사전 유용한",
      "vi": "từ điển hữu ích",
      "id": "kamus berguna",
      "es": "dictionary useful",
      "pt": "dictionary useful"
    }
  },
  {
    "id": "V0143",
    "w": "にる",
    "r": "にる",
    "m": {
      "en": "to resemble",
      "zh-TW": "像",
      "zh-CN": "像",
      "ko": "to resemble",
      "vi": "to resemble",
      "id": "to resemble",
      "es": "to resemble",
      "pt": "to resemble"
    },
    "ex": "父に似る",
    "exm": {
      "en": "resemble father",
      "zh-TW": "像爸爸",
      "zh-CN": "像爸爸",
      "ko": "resemble father",
      "vi": "resemble father",
      "id": "resemble father",
      "es": "resemble father",
      "pt": "resemble father"
    }
  },
  {
    "id": "V0144",
    "w": "ちがう",
    "r": "ちがう",
    "m": {
      "en": "to be different",
      "zh-TW": "不同",
      "zh-CN": "不同",
      "ko": "다른",
      "vi": "khác",
      "id": "berbeda",
      "es": "to be different",
      "pt": "to be different"
    },
    "ex": "意見が違う",
    "exm": {
      "en": "opinions differ",
      "zh-TW": "意見不同",
      "zh-CN": "意见不同",
      "ko": "opinions differ",
      "vi": "opinions differ",
      "id": "opinions differ",
      "es": "opinions differ",
      "pt": "opinions differ"
    }
  },
  {
    "id": "V0145",
    "w": "あう",
    "r": "あう",
    "m": {
      "en": "to fit/match",
      "zh-TW": "合適",
      "zh-CN": "合适",
      "ko": "to fit/match",
      "vi": "to fit/match",
      "id": "to fit/match",
      "es": "to fit/match",
      "pt": "to fit/match"
    },
    "ex": "サイズが合う",
    "exm": {
      "en": "size fits",
      "zh-TW": "尺寸合適",
      "zh-CN": "尺寸合适",
      "ko": "size fits",
      "vi": "size fits",
      "id": "size fits",
      "es": "size fits",
      "pt": "size fits"
    }
  },
  {
    "id": "V0146",
    "w": "なれる",
    "r": "なれる",
    "m": {
      "en": "to get used to",
      "zh-TW": "習慣",
      "zh-CN": "习惯",
      "ko": "to get used to",
      "vi": "to get used to",
      "id": "to get used to",
      "es": "to get used to",
      "pt": "to get used to"
    },
    "ex": "日本に慣れる",
    "exm": {
      "en": "used to Japan",
      "zh-TW": "習慣日本",
      "zh-CN": "习惯日本",
      "ko": "used to Japan",
      "vi": "used to Japan",
      "id": "used to Japan",
      "es": "used to Japan",
      "pt": "used to Japan"
    }
  },
  {
    "id": "V0147",
    "w": "くらべる",
    "r": "くらべる",
    "m": {
      "en": "to compare",
      "zh-TW": "比較",
      "zh-CN": "比较",
      "ko": "to compare",
      "vi": "to compare",
      "id": "to compare",
      "es": "to compare",
      "pt": "to compare"
    },
    "ex": "値段を比べる",
    "exm": {
      "en": "compare prices",
      "zh-TW": "比較價格",
      "zh-CN": "比较价格",
      "ko": "compare prices",
      "vi": "compare prices",
      "id": "compare prices",
      "es": "compare prices",
      "pt": "compare prices"
    }
  },
  {
    "id": "V0148",
    "w": "えらぶ",
    "r": "えらぶ",
    "m": {
      "en": "to choose",
      "zh-TW": "選擇",
      "zh-CN": "选择",
      "ko": "to choose",
      "vi": "to choose",
      "id": "to choose",
      "es": "to choose",
      "pt": "to choose"
    },
    "ex": "色を選ぶ",
    "exm": {
      "en": "choose color",
      "zh-TW": "選顏色",
      "zh-CN": "选颜色",
      "ko": "choose color",
      "vi": "choose color",
      "id": "choose color",
      "es": "choose color",
      "pt": "choose color"
    }
  },
  {
    "id": "V0149",
    "w": "かぞえる",
    "r": "かぞえる",
    "m": {
      "en": "to count",
      "zh-TW": "數",
      "zh-CN": "数",
      "ko": "to count",
      "vi": "to count",
      "id": "to count",
      "es": "to count",
      "pt": "to count"
    },
    "ex": "お金を数える",
    "exm": {
      "en": "count money",
      "zh-TW": "數錢",
      "zh-CN": "数钱",
      "ko": "count money",
      "vi": "count money",
      "id": "count money",
      "es": "count money",
      "pt": "count money"
    }
  },
  {
    "id": "V0150",
    "w": "しらべる",
    "r": "しらべる",
    "m": {
      "en": "to investigate",
      "zh-TW": "調查",
      "zh-CN": "调查",
      "ko": "to investigate",
      "vi": "to investigate",
      "id": "to investigate",
      "es": "to investigate",
      "pt": "to investigate"
    },
    "ex": "辞書で調べる",
    "exm": {
      "en": "look up dictionary",
      "zh-TW": "查字典",
      "zh-CN": "查字典",
      "ko": "위로 사전",
      "vi": "lên từ điển",
      "id": "naik kamus",
      "es": "look up dictionary",
      "pt": "look up dictionary"
    }
  },
  {
    "id": "V0151",
    "w": "ためす",
    "r": "ためす",
    "m": {
      "en": "to try",
      "zh-TW": "嘗試",
      "zh-CN": "尝试",
      "ko": "시도하다",
      "vi": "thử",
      "id": "mencoba",
      "es": "to try",
      "pt": "to try"
    },
    "ex": "新しい料理を試す",
    "exm": {
      "en": "try new food",
      "zh-TW": "嘗試新菜",
      "zh-CN": "尝试新菜",
      "ko": "시도하다 새로운 음식",
      "vi": "thử mới đồ ăn",
      "id": "mencoba baru makanan",
      "es": "try new food",
      "pt": "try new food"
    }
  },
  {
    "id": "V0152",
    "w": "どりょくする",
    "r": "どりょくする",
    "m": {
      "en": "to make effort",
      "zh-TW": "努力",
      "zh-CN": "努力",
      "ko": "만들다",
      "vi": "làm",
      "id": "membuat",
      "es": "to make effort",
      "pt": "to make effort"
    },
    "ex": "毎日努力する",
    "exm": {
      "en": "effort daily",
      "zh-TW": "每天努力",
      "zh-CN": "每天努力",
      "ko": "effort daily",
      "vi": "effort daily",
      "id": "effort daily",
      "es": "effort daily",
      "pt": "effort daily"
    }
  },
  {
    "id": "V0153",
    "w": "せいこうする",
    "r": "せいこうする",
    "m": {
      "en": "to succeed",
      "zh-TW": "成功",
      "zh-CN": "成功",
      "ko": "to succeed",
      "vi": "to succeed",
      "id": "to succeed",
      "es": "to succeed",
      "pt": "to succeed"
    },
    "ex": "試験に成功する",
    "exm": {
      "en": "succeed exam",
      "zh-TW": "考試成功",
      "zh-CN": "考试成功",
      "ko": "succeed exam",
      "vi": "succeed exam",
      "id": "succeed exam",
      "es": "succeed exam",
      "pt": "succeed exam"
    }
  },
  {
    "id": "V0154",
    "w": "しっぱいする",
    "r": "しっぱいする",
    "m": {
      "en": "to fail",
      "zh-TW": "失敗",
      "zh-CN": "失败",
      "ko": "to fail",
      "vi": "to fail",
      "id": "to fail",
      "es": "to fail",
      "pt": "to fail"
    },
    "ex": "試験に失敗する",
    "exm": {
      "en": "fail exam",
      "zh-TW": "考試失敗",
      "zh-CN": "考试失败",
      "ko": "fail exam",
      "vi": "fail exam",
      "id": "fail exam",
      "es": "fail exam",
      "pt": "fail exam"
    }
  },
  {
    "id": "V0155",
    "w": "さんかする",
    "r": "さんかする",
    "m": {
      "en": "to participate",
      "zh-TW": "參加",
      "zh-CN": "参加",
      "ko": "to participate",
      "vi": "to participate",
      "id": "to participate",
      "es": "to participate",
      "pt": "to participate"
    },
    "ex": "パーティーに参加する",
    "exm": {
      "en": "join party",
      "zh-TW": "參加派對",
      "zh-CN": "参加派对",
      "ko": "join party",
      "vi": "join party",
      "id": "join party",
      "es": "join party",
      "pt": "join party"
    }
  },
  {
    "id": "V0156",
    "w": "しょうたいする",
    "r": "しょうたいする",
    "m": {
      "en": "to invite",
      "zh-TW": "邀請",
      "zh-CN": "邀请",
      "ko": "to invite",
      "vi": "to invite",
      "id": "to invite",
      "es": "to invite",
      "pt": "to invite"
    },
    "ex": "友達を招待する",
    "exm": {
      "en": "invite friend",
      "zh-TW": "邀請朋友",
      "zh-CN": "邀请朋友",
      "ko": "친구",
      "vi": "bạn",
      "id": "teman",
      "es": "invite friend",
      "pt": "invite friend"
    }
  },
  {
    "id": "V0157",
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
    "ex": "友達を紹介する",
    "exm": {
      "en": "introduce friend",
      "zh-TW": "介紹朋友",
      "zh-CN": "介绍朋友",
      "ko": "소개하다 친구",
      "vi": "giới thiệu bạn",
      "id": "memperkenalkan teman",
      "es": "introduce friend",
      "pt": "introduce friend"
    }
  },
  {
    "id": "V0158",
    "w": "あんないする",
    "r": "あんないする",
    "m": {
      "en": "to guide",
      "zh-TW": "引導",
      "zh-CN": "引导",
      "ko": "to guide",
      "vi": "to guide",
      "id": "to guide",
      "es": "to guide",
      "pt": "to guide"
    },
    "ex": "町を案内する",
    "exm": {
      "en": "guide town",
      "zh-TW": "導覽城市",
      "zh-CN": "导览城市",
      "ko": "guide town",
      "vi": "guide town",
      "id": "guide town",
      "es": "guide town",
      "pt": "guide town"
    }
  },
  {
    "id": "V0159",
    "w": "せつめいする",
    "r": "せつめいする",
    "m": {
      "en": "to explain",
      "zh-TW": "說明",
      "zh-CN": "说明",
      "ko": "to explain",
      "vi": "to explain",
      "id": "to explain",
      "es": "to explain",
      "pt": "to explain"
    },
    "ex": "使い方を説明する",
    "exm": {
      "en": "explain use",
      "zh-TW": "說明用法",
      "zh-CN": "说明用法",
      "ko": "사용하다",
      "vi": "dùng",
      "id": "menggunakan",
      "es": "explain use",
      "pt": "explain use"
    }
  },
  {
    "id": "V0160",
    "w": "しつもんする",
    "r": "しつもんする",
    "m": {
      "en": "to ask",
      "zh-TW": "問",
      "zh-CN": "问",
      "ko": "묻다",
      "vi": "Hỏi",
      "id": "Bertanya",
      "es": "to ask",
      "pt": "to ask"
    },
    "ex": "先生に質問する",
    "exm": {
      "en": "ask teacher",
      "zh-TW": "問老師",
      "zh-CN": "问老师",
      "ko": "묻다 선생님",
      "vi": "hỏi giáo viên",
      "id": "bertanya guru",
      "es": "ask teacher",
      "pt": "ask teacher"
    }
  },
  {
    "id": "V0161",
    "w": "こたえる",
    "r": "こたえる",
    "m": {
      "en": "to answer",
      "zh-TW": "回答",
      "zh-CN": "回答",
      "ko": "대답하다",
      "vi": "Trả lời",
      "id": "Menjawab",
      "es": "to answer",
      "pt": "to answer"
    },
    "ex": "質問に答える",
    "exm": {
      "en": "answer question",
      "zh-TW": "回答問題",
      "zh-CN": "回答问题",
      "ko": "대답하다",
      "vi": "trả lời",
      "id": "menjawab",
      "es": "answer question",
      "pt": "answer question"
    },
    "syn": [
      "返答する",
      "回答する",
      "応答する"
    ]
  },
  {
    "id": "V0162",
    "w": "たのむ",
    "r": "たのむ",
    "m": {
      "en": "to request",
      "zh-TW": "拜託",
      "zh-CN": "拜托",
      "ko": "to request",
      "vi": "to request",
      "id": "to request",
      "es": "to request",
      "pt": "to request"
    },
    "ex": "友達に頼む",
    "exm": {
      "en": "ask friend",
      "zh-TW": "拜託朋友",
      "zh-CN": "拜托朋友",
      "ko": "묻다 친구",
      "vi": "hỏi bạn",
      "id": "bertanya teman",
      "es": "ask friend",
      "pt": "ask friend"
    }
  },
  {
    "id": "V0163",
    "w": "ことわる",
    "r": "ことわる",
    "m": {
      "en": "to refuse",
      "zh-TW": "拒絕",
      "zh-CN": "拒绝",
      "ko": "to refuse",
      "vi": "to refuse",
      "id": "to refuse",
      "es": "to refuse",
      "pt": "to refuse"
    },
    "ex": "招待を断る",
    "exm": {
      "en": "refuse invitation",
      "zh-TW": "拒絕邀請",
      "zh-CN": "拒绝邀请",
      "ko": "refuse invitation",
      "vi": "refuse invitation",
      "id": "refuse invitation",
      "es": "refuse invitation",
      "pt": "refuse invitation"
    }
  },
  {
    "id": "V0164",
    "w": "ゆるす",
    "r": "ゆるす",
    "m": {
      "en": "to forgive",
      "zh-TW": "原諒",
      "zh-CN": "原谅",
      "ko": "to forgive",
      "vi": "to forgive",
      "id": "to forgive",
      "es": "to forgive",
      "pt": "to forgive"
    },
    "ex": "友達を許す",
    "exm": {
      "en": "forgive friend",
      "zh-TW": "原諒朋友",
      "zh-CN": "原谅朋友",
      "ko": "친구",
      "vi": "bạn",
      "id": "teman",
      "es": "forgive friend",
      "pt": "forgive friend"
    }
  },
  {
    "id": "V0165",
    "w": "あやまる",
    "r": "あやまる",
    "m": {
      "en": "to apologize",
      "zh-TW": "道歉",
      "zh-CN": "道歉",
      "ko": "to apologize",
      "vi": "to apologize",
      "id": "to apologize",
      "es": "to apologize",
      "pt": "to apologize"
    },
    "ex": "間違いを謝る",
    "exm": {
      "en": "apologize mistake",
      "zh-TW": "為錯誤道歉",
      "zh-CN": "为错误道歉",
      "ko": "apologize mistake",
      "vi": "apologize mistake",
      "id": "apologize mistake",
      "es": "apologize mistake",
      "pt": "apologize mistake"
    }
  },
  {
    "id": "V0166",
    "w": "ほめる",
    "r": "ほめる",
    "m": {
      "en": "to praise",
      "zh-TW": "稱讚",
      "zh-CN": "称赞",
      "ko": "to praise",
      "vi": "to praise",
      "id": "to praise",
      "es": "to praise",
      "pt": "to praise"
    },
    "ex": "子供を褒める",
    "exm": {
      "en": "praise child",
      "zh-TW": "稱讚小孩",
      "zh-CN": "称赞小孩",
      "ko": "아이",
      "vi": "trẻ em",
      "id": "anak",
      "es": "praise child",
      "pt": "praise child"
    }
  },
  {
    "id": "V0167",
    "w": "しかる",
    "r": "しかる",
    "m": {
      "en": "to scold",
      "zh-TW": "責罵",
      "zh-CN": "责骂",
      "ko": "오래되다",
      "vi": "cũ",
      "id": "lama",
      "es": "to scold",
      "pt": "to scold"
    },
    "ex": "子供を叱る",
    "exm": {
      "en": "scold child",
      "zh-TW": "罵小孩",
      "zh-CN": "骂小孩",
      "ko": "아이",
      "vi": "trẻ em",
      "id": "anak",
      "es": "scold child",
      "pt": "scold child"
    }
  },
  {
    "id": "V0168",
    "w": "てつだう",
    "r": "てつだう",
    "m": {
      "en": "to help",
      "zh-TW": "幫忙",
      "zh-CN": "帮忙",
      "ko": "돕다",
      "vi": "giúp",
      "id": "membantu",
      "es": "to help",
      "pt": "to help"
    },
    "ex": "母を手伝う",
    "exm": {
      "en": "help mother",
      "zh-TW": "幫媽媽",
      "zh-CN": "帮妈妈",
      "ko": "돕다",
      "vi": "giúp",
      "id": "membantu",
      "es": "help mother",
      "pt": "help mother"
    }
  },
  {
    "id": "V0169",
    "w": "たすける",
    "r": "たすける",
    "m": {
      "en": "to rescue",
      "zh-TW": "救助",
      "zh-CN": "救助",
      "ko": "to rescue",
      "vi": "to rescue",
      "id": "to rescue",
      "es": "to rescue",
      "pt": "to rescue"
    },
    "ex": "友達を助ける",
    "exm": {
      "en": "help friend",
      "zh-TW": "救助朋友",
      "zh-CN": "救助朋友",
      "ko": "돕다 친구",
      "vi": "giúp bạn",
      "id": "membantu teman",
      "es": "help friend",
      "pt": "help friend"
    }
  },
  {
    "id": "V0170",
    "w": "まもる",
    "r": "まもる",
    "m": {
      "en": "to protect",
      "zh-TW": "保護",
      "zh-CN": "保护",
      "ko": "to protect",
      "vi": "to protect",
      "id": "to protect",
      "es": "to protect",
      "pt": "to protect"
    },
    "ex": "約束を守る",
    "exm": {
      "en": "keep promise",
      "zh-TW": "遵守約定",
      "zh-CN": "遵守约定",
      "ko": "keep promise",
      "vi": "keep promise",
      "id": "keep promise",
      "es": "keep promise",
      "pt": "keep promise"
    }
  },
  {
    "id": "V0171",
    "w": "さわる",
    "r": "さわる",
    "m": {
      "en": "to touch",
      "zh-TW": "觸摸",
      "zh-CN": "触摸",
      "ko": "to touch",
      "vi": "to touch",
      "id": "to touch",
      "es": "to touch",
      "pt": "to touch"
    },
    "ex": "壁に触る",
    "exm": {
      "en": "touch wall",
      "zh-TW": "觸摸牆壁",
      "zh-CN": "触摸墙壁",
      "ko": "touch wall",
      "vi": "touch wall",
      "id": "touch wall",
      "es": "touch wall",
      "pt": "touch wall"
    }
  },
  {
    "id": "V0172",
    "w": "おす",
    "r": "おす",
    "m": {
      "en": "to push",
      "zh-TW": "推/按",
      "zh-CN": "推/按",
      "ko": "밀다",
      "vi": "đẩy",
      "id": "mendorong",
      "es": "to push",
      "pt": "to push"
    },
    "ex": "ボタンを押す",
    "exm": {
      "en": "push button",
      "zh-TW": "按按鈕",
      "zh-CN": "按按钮",
      "ko": "밀다",
      "vi": "đẩy",
      "id": "mendorong",
      "es": "push button",
      "pt": "push button"
    }
  },
  {
    "id": "V0173",
    "w": "ひく",
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
    "ex": "ドアを引く",
    "exm": {
      "en": "pull door",
      "zh-TW": "拉門",
      "zh-CN": "拉门",
      "ko": "당기다 문",
      "vi": "kéo cửa",
      "id": "menarik pintu",
      "es": "pull door",
      "pt": "pull door"
    }
  },
  {
    "id": "V0174",
    "w": "なげる",
    "r": "なげる",
    "m": {
      "en": "to throw",
      "zh-TW": "扔",
      "zh-CN": "扔",
      "ko": "던지다",
      "vi": "ném",
      "id": "melempar",
      "es": "to throw",
      "pt": "to throw"
    },
    "ex": "ボールを投げる",
    "exm": {
      "en": "throw ball",
      "zh-TW": "扔球",
      "zh-CN": "扔球",
      "ko": "던지다",
      "vi": "ném",
      "id": "melempar",
      "es": "throw ball",
      "pt": "throw ball"
    }
  },
  {
    "id": "V0175",
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
    "ex": "ボールを捕まえる",
    "exm": {
      "en": "catch ball",
      "zh-TW": "接球",
      "zh-CN": "接球",
      "ko": "잡다",
      "vi": "bắt",
      "id": "menangkap",
      "es": "catch ball",
      "pt": "catch ball"
    }
  },
  {
    "id": "V0176",
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
    "ex": "鳥が飛ぶ",
    "exm": {
      "en": "bird flies",
      "zh-TW": "鳥飛",
      "zh-CN": "鸟飞",
      "ko": "새",
      "vi": "chim",
      "id": "burung",
      "es": "bird flies",
      "pt": "bird flies"
    }
  },
  {
    "id": "V0177",
    "w": "とぶ",
    "r": "とぶ",
    "m": {
      "en": "to jump",
      "zh-TW": "跳",
      "zh-CN": "跳",
      "ko": "to jump",
      "vi": "to jump",
      "id": "to jump",
      "es": "to jump",
      "pt": "to jump"
    },
    "ex": "高く跳ぶ",
    "exm": {
      "en": "jump high",
      "zh-TW": "跳得高",
      "zh-CN": "跳得高",
      "ko": "높은",
      "vi": "cao",
      "id": "tinggi",
      "es": "jump high",
      "pt": "jump high"
    }
  },
  {
    "id": "V0178",
    "w": "ける",
    "r": "ける",
    "m": {
      "en": "to kick",
      "zh-TW": "踢",
      "zh-CN": "踢",
      "ko": "to kick",
      "vi": "to kick",
      "id": "to kick",
      "es": "to kick",
      "pt": "to kick"
    },
    "ex": "ボールを蹴る",
    "exm": {
      "en": "kick ball",
      "zh-TW": "踢球",
      "zh-CN": "踢球",
      "ko": "kick ball",
      "vi": "kick ball",
      "id": "kick ball",
      "es": "kick ball",
      "pt": "kick ball"
    }
  },
  {
    "id": "V0179",
    "w": "うつ",
    "r": "うつ",
    "m": {
      "en": "to hit",
      "zh-TW": "打",
      "zh-CN": "打",
      "ko": "치다",
      "vi": "đánh",
      "id": "memukul",
      "es": "to hit",
      "pt": "to hit"
    },
    "ex": "ボールを打つ",
    "exm": {
      "en": "hit ball",
      "zh-TW": "打球",
      "zh-CN": "打球",
      "ko": "치다",
      "vi": "đánh",
      "id": "memukul",
      "es": "hit ball",
      "pt": "hit ball"
    }
  },
  {
    "id": "V0180",
    "w": "たたく",
    "r": "たたく",
    "m": {
      "en": "to knock",
      "zh-TW": "敲",
      "zh-CN": "敲",
      "ko": "to knock",
      "vi": "to knock",
      "id": "to knock",
      "es": "to knock",
      "pt": "to knock"
    },
    "ex": "ドアを叩く",
    "exm": {
      "en": "knock door",
      "zh-TW": "敲門",
      "zh-CN": "敲门",
      "ko": "문",
      "vi": "cửa",
      "id": "pintu",
      "es": "knock door",
      "pt": "knock door"
    }
  },
  {
    "id": "V0181",
    "w": "よぶ",
    "r": "よぶ",
    "m": {
      "en": "to call",
      "zh-TW": "打電話",
      "zh-CN": "打电话",
      "ko": "전화하다",
      "vi": "Gọi điện",
      "id": "Menelepon",
      "es": "to call",
      "pt": "to call"
    },
    "ex": "名前を呼ぶ",
    "exm": {
      "en": "call name",
      "zh-TW": "叫名字",
      "zh-CN": "叫名字",
      "ko": "전화하다",
      "vi": "gọi",
      "id": "menelepon",
      "es": "call name",
      "pt": "call name"
    }
  },
  {
    "id": "V0182",
    "w": "さけぶ",
    "r": "さけぶ",
    "m": {
      "en": "to shout",
      "zh-TW": "喊叫",
      "zh-CN": "喊叫",
      "ko": "to shout",
      "vi": "to shout",
      "id": "to shout",
      "es": "to shout",
      "pt": "to shout"
    },
    "ex": "大声で叫ぶ",
    "exm": {
      "en": "shout loud",
      "zh-TW": "大聲喊",
      "zh-CN": "大声喊",
      "ko": "shout loud",
      "vi": "shout loud",
      "id": "shout loud",
      "es": "shout loud",
      "pt": "shout loud"
    }
  },
  {
    "id": "V0183",
    "w": "なく",
    "r": "なく",
    "m": {
      "en": "to make sound (animal)",
      "zh-TW": "叫(動物)",
      "zh-CN": "叫(动物)",
      "ko": "to make sound (animal)",
      "vi": "to make sound (animal)",
      "id": "to make sound (animal)",
      "es": "to make sound (animal)",
      "pt": "to make sound (animal)"
    },
    "ex": "犬が鳴く",
    "exm": {
      "en": "dog barks",
      "zh-TW": "狗叫",
      "zh-CN": "狗叫",
      "ko": "개",
      "vi": "chó",
      "id": "anjing",
      "es": "dog barks",
      "pt": "dog barks"
    }
  },
  {
    "id": "V0184",
    "w": "なる",
    "r": "なる",
    "m": {
      "en": "to ring",
      "zh-TW": "響",
      "zh-CN": "响",
      "ko": "to ring",
      "vi": "to ring",
      "id": "to ring",
      "es": "to ring",
      "pt": "to ring"
    },
    "ex": "電話が鳴る",
    "exm": {
      "en": "phone rings",
      "zh-TW": "電話響",
      "zh-CN": "电话响",
      "ko": "전화",
      "vi": "điện thoại",
      "id": "telepon",
      "es": "phone rings",
      "pt": "phone rings"
    }
  },
  {
    "id": "V0185",
    "w": "ひかる",
    "r": "ひかる",
    "m": {
      "en": "to shine",
      "zh-TW": "發光",
      "zh-CN": "发光",
      "ko": "to shine",
      "vi": "to shine",
      "id": "to shine",
      "es": "to shine",
      "pt": "to shine"
    },
    "ex": "星が光る",
    "exm": {
      "en": "star shines",
      "zh-TW": "星星發光",
      "zh-CN": "星星发光",
      "ko": "star shines",
      "vi": "star shines",
      "id": "star shines",
      "es": "star shines",
      "pt": "star shines"
    }
  },
  {
    "id": "V0186",
    "w": "もえる",
    "r": "もえる",
    "m": {
      "en": "to burn",
      "zh-TW": "燃燒",
      "zh-CN": "燃烧",
      "ko": "to burn",
      "vi": "to burn",
      "id": "to burn",
      "es": "to burn",
      "pt": "to burn"
    },
    "ex": "火が燃える",
    "exm": {
      "en": "fire burns",
      "zh-TW": "火在燒",
      "zh-CN": "火在烧",
      "ko": "fire burns",
      "vi": "fire burns",
      "id": "fire burns",
      "es": "fire burns",
      "pt": "fire burns"
    }
  },
  {
    "id": "V0187",
    "w": "きえる",
    "r": "きえる",
    "m": {
      "en": "to disappear",
      "zh-TW": "消失",
      "zh-CN": "消失",
      "ko": "to disappear",
      "vi": "to disappear",
      "id": "to disappear",
      "es": "to disappear",
      "pt": "to disappear"
    },
    "ex": "火が消える",
    "exm": {
      "en": "fire goes out",
      "zh-TW": "火滅了",
      "zh-CN": "火灭了",
      "ko": "fire goes out",
      "vi": "fire goes out",
      "id": "fire goes out",
      "es": "fire goes out",
      "pt": "fire goes out"
    }
  },
  {
    "id": "V0188",
    "w": "とける",
    "r": "とける",
    "m": {
      "en": "to melt",
      "zh-TW": "融化",
      "zh-CN": "融化",
      "ko": "녹다",
      "vi": "tan",
      "id": "meleleh",
      "es": "to melt",
      "pt": "to melt"
    },
    "ex": "雪が溶ける",
    "exm": {
      "en": "snow melts",
      "zh-TW": "雪融化",
      "zh-CN": "雪融化",
      "ko": "눈 녹다",
      "vi": "tuyết tan",
      "id": "salju meleleh",
      "es": "snow melts",
      "pt": "snow melts"
    }
  },
  {
    "id": "V0189",
    "w": "こおる",
    "r": "こおる",
    "m": {
      "en": "to freeze",
      "zh-TW": "結冰",
      "zh-CN": "结冰",
      "ko": "to freeze",
      "vi": "to freeze",
      "id": "to freeze",
      "es": "to freeze",
      "pt": "to freeze"
    },
    "ex": "水が凍る",
    "exm": {
      "en": "water freezes",
      "zh-TW": "水結冰",
      "zh-CN": "水结冰",
      "ko": "물",
      "vi": "nước",
      "id": "air",
      "es": "water freezes",
      "pt": "water freezes"
    }
  },
  {
    "id": "V0190",
    "w": "かわく",
    "r": "かわく",
    "m": {
      "en": "to dry",
      "zh-TW": "乾燥",
      "zh-CN": "干燥",
      "ko": "to dry",
      "vi": "to dry",
      "id": "to dry",
      "es": "to dry",
      "pt": "to dry"
    },
    "ex": "洗濯物が乾く",
    "exm": {
      "en": "laundry dries",
      "zh-TW": "衣服乾了",
      "zh-CN": "衣服干了",
      "ko": "laundry dries",
      "vi": "laundry dries",
      "id": "laundry dries",
      "es": "laundry dries",
      "pt": "laundry dries"
    }
  },
  {
    "id": "V0191",
    "w": "ぬれる",
    "r": "ぬれる",
    "m": {
      "en": "to get wet",
      "zh-TW": "濕",
      "zh-CN": "湿",
      "ko": "to get wet",
      "vi": "to get wet",
      "id": "to get wet",
      "es": "to get wet",
      "pt": "to get wet"
    },
    "ex": "雨で濡れる",
    "exm": {
      "en": "wet from rain",
      "zh-TW": "被雨淋濕",
      "zh-CN": "被雨淋湿",
      "ko": "비",
      "vi": "mưa",
      "id": "hujan",
      "es": "wet from rain",
      "pt": "wet from rain"
    }
  },
  {
    "id": "V0192",
    "w": "よごれる",
    "r": "よごれる",
    "m": {
      "en": "to get dirty",
      "zh-TW": "弄髒",
      "zh-CN": "弄脏",
      "ko": "더러운",
      "vi": "bẩn",
      "id": "kotor",
      "es": "to get dirty",
      "pt": "to get dirty"
    },
    "ex": "服が汚れる",
    "exm": {
      "en": "clothes dirty",
      "zh-TW": "衣服髒了",
      "zh-CN": "衣服脏了",
      "ko": "더러운",
      "vi": "bẩn",
      "id": "kotor",
      "es": "clothes dirty",
      "pt": "clothes dirty"
    }
  },
  {
    "id": "V0193",
    "w": "かたづける",
    "r": "かたづける",
    "m": {
      "en": "to tidy up",
      "zh-TW": "整理",
      "zh-CN": "整理",
      "ko": "위로",
      "vi": "lên",
      "id": "naik",
      "es": "to tidy up",
      "pt": "to tidy up"
    },
    "ex": "部屋を片付ける",
    "exm": {
      "en": "tidy room",
      "zh-TW": "整理房間",
      "zh-CN": "整理房间",
      "ko": "방",
      "vi": "phòng",
      "id": "kamar",
      "es": "tidy room",
      "pt": "tidy room"
    }
  },
  {
    "id": "V0194",
    "w": "ちらかす",
    "r": "ちらかす",
    "m": {
      "en": "to mess up",
      "zh-TW": "弄亂",
      "zh-CN": "弄乱",
      "ko": "위로",
      "vi": "lên",
      "id": "naik",
      "es": "to mess up",
      "pt": "to mess up"
    },
    "ex": "部屋を散らかす",
    "exm": {
      "en": "mess room",
      "zh-TW": "弄亂房間",
      "zh-CN": "弄乱房间",
      "ko": "방",
      "vi": "phòng",
      "id": "kamar",
      "es": "mess room",
      "pt": "mess room"
    }
  },
  {
    "id": "V0195",
    "w": "つつむ",
    "r": "つつむ",
    "m": {
      "en": "to wrap",
      "zh-TW": "包",
      "zh-CN": "包",
      "ko": "to wrap",
      "vi": "to wrap",
      "id": "to wrap",
      "es": "to wrap",
      "pt": "to wrap"
    },
    "ex": "プレゼントを包む",
    "exm": {
      "en": "wrap gift",
      "zh-TW": "包禮物",
      "zh-CN": "包礼物",
      "ko": "wrap gift",
      "vi": "wrap gift",
      "id": "wrap gift",
      "es": "wrap gift",
      "pt": "wrap gift"
    }
  },
  {
    "id": "V0196",
    "w": "しばる",
    "r": "しばる",
    "m": {
      "en": "to tie",
      "zh-TW": "綁",
      "zh-CN": "绑",
      "ko": "to tie",
      "vi": "to tie",
      "id": "to tie",
      "es": "to tie",
      "pt": "to tie"
    },
    "ex": "紐で縛る",
    "exm": {
      "en": "tie with string",
      "zh-TW": "用繩子綁",
      "zh-CN": "用绳子绑",
      "ko": "tie with string",
      "vi": "tie with string",
      "id": "tie with string",
      "es": "tie with string",
      "pt": "tie with string"
    }
  },
  {
    "id": "V0197",
    "w": "まぜる",
    "r": "まぜる",
    "m": {
      "en": "to mix",
      "zh-TW": "混合",
      "zh-CN": "混合",
      "ko": "to mix",
      "vi": "to mix",
      "id": "to mix",
      "es": "to mix",
      "pt": "to mix"
    },
    "ex": "材料を混ぜる",
    "exm": {
      "en": "mix ingredients",
      "zh-TW": "混合材料",
      "zh-CN": "混合材料",
      "ko": "mix ingredients",
      "vi": "mix ingredients",
      "id": "mix ingredients",
      "es": "mix ingredients",
      "pt": "mix ingredients"
    }
  },
  {
    "id": "V0198",
    "w": "分ける",
    "r": "わける",
    "m": {
      "en": "to divide",
      "zh-TW": "分",
      "zh-CN": "分",
      "ko": "to divide",
      "vi": "to divide",
      "id": "to divide",
      "es": "to divide",
      "pt": "to divide"
    },
    "ex": "ケーキを分ける",
    "exm": {
      "en": "divide cake",
      "zh-TW": "分蛋糕",
      "zh-CN": "分蛋糕",
      "ko": "divide cake",
      "vi": "divide cake",
      "id": "divide cake",
      "es": "divide cake",
      "pt": "divide cake"
    }
  },
  {
    "id": "V0199",
    "w": "つなぐ",
    "r": "つなぐ",
    "m": {
      "en": "to connect",
      "zh-TW": "連接",
      "zh-CN": "连接",
      "ko": "to connect",
      "vi": "to connect",
      "id": "to connect",
      "es": "to connect",
      "pt": "to connect"
    },
    "ex": "手を繋ぐ",
    "exm": {
      "en": "hold hands",
      "zh-TW": "牽手",
      "zh-CN": "牵手",
      "ko": "잡다",
      "vi": "cầm",
      "id": "memegang",
      "es": "hold hands",
      "pt": "hold hands"
    }
  },
  {
    "id": "V0200",
    "w": "はなす",
    "r": "はなす",
    "m": {
      "en": "to separate",
      "zh-TW": "分開",
      "zh-CN": "分开",
      "ko": "to separate",
      "vi": "to separate",
      "id": "to separate",
      "es": "to separate",
      "pt": "to separate"
    },
    "ex": "手を離す",
    "exm": {
      "en": "let go hand",
      "zh-TW": "放開手",
      "zh-CN": "放开手",
      "ko": "가다 손",
      "vi": "đi tay",
      "id": "pergi tangan",
      "es": "let go hand",
      "pt": "let go hand"
    }
  },
  {
    "id": "V0201",
    "w": "わたし",
    "r": "わたし",
    "m": {
      "en": "I/me",
      "zh-TW": "我",
      "zh-CN": "我",
      "ko": "I/me",
      "vi": "I/me",
      "id": "I/me",
      "es": "I/me",
      "pt": "I/me"
    },
    "ex": "私は学生です",
    "exm": {
      "en": "I am a student",
      "zh-TW": "我是學生",
      "zh-CN": "我是学生",
      "ko": "학생",
      "vi": "học sinh",
      "id": "siswa",
      "es": "I am a student",
      "pt": "I am a student"
    }
  },
  {
    "id": "V0202",
    "w": "あなた",
    "r": "あなた",
    "m": {
      "en": "you",
      "zh-TW": "你",
      "zh-CN": "你",
      "ko": "너",
      "vi": "Bạn",
      "id": "Anda",
      "es": "you",
      "pt": "you"
    },
    "ex": "あなたは先生ですか",
    "exm": {
      "en": "Are you a teacher?",
      "zh-TW": "你是老師嗎",
      "zh-CN": "你是老师吗",
      "ko": "Are you a teacher?",
      "vi": "Are you a teacher?",
      "id": "Are you a teacher?",
      "es": "Are you a teacher?",
      "pt": "Are you a teacher?"
    }
  },
  {
    "id": "V0203",
    "w": "かれ",
    "r": "かれ",
    "m": {
      "en": "he/boyfriend",
      "zh-TW": "他",
      "zh-CN": "他",
      "ko": "he/boyfriend",
      "vi": "he/boyfriend",
      "id": "he/boyfriend",
      "es": "he/boyfriend",
      "pt": "he/boyfriend"
    },
    "ex": "彼は日本人です",
    "exm": {
      "en": "He is Japanese",
      "zh-TW": "他是日本人",
      "zh-CN": "他是日本人",
      "ko": "He is Japanese",
      "vi": "He is Japanese",
      "id": "He is Japanese",
      "es": "He is Japanese",
      "pt": "He is Japanese"
    }
  },
  {
    "id": "V0204",
    "w": "かのじょ",
    "r": "かのじょ",
    "m": {
      "en": "she/girlfriend",
      "zh-TW": "她",
      "zh-CN": "她",
      "ko": "she/girlfriend",
      "vi": "she/girlfriend",
      "id": "she/girlfriend",
      "es": "she/girlfriend",
      "pt": "she/girlfriend"
    },
    "ex": "彼女は学生です",
    "exm": {
      "en": "She is a student",
      "zh-TW": "她是學生",
      "zh-CN": "她是学生",
      "ko": "학생",
      "vi": "học sinh",
      "id": "siswa",
      "es": "She is a student",
      "pt": "She is a student"
    }
  },
  {
    "id": "V0205",
    "w": "みなさん",
    "r": "みなさん",
    "m": {
      "en": "everyone",
      "zh-TW": "大家",
      "zh-CN": "大家",
      "ko": "everyone",
      "vi": "everyone",
      "id": "everyone",
      "es": "everyone",
      "pt": "everyone"
    },
    "ex": "皆さん、おはよう",
    "exm": {
      "en": "Good morning everyone",
      "zh-TW": "大家早安",
      "zh-CN": "大家早安",
      "ko": "좋은 아침",
      "vi": "tốt sáng",
      "id": "bagus pagi",
      "es": "Good morning everyone",
      "pt": "Good morning everyone"
    }
  },
  {
    "id": "V0206",
    "w": "人",
    "r": "ひと",
    "m": {
      "en": "person",
      "zh-TW": "人",
      "zh-CN": "人",
      "ko": "사람",
      "vi": "Người",
      "id": "Orang",
      "es": "person",
      "pt": "person"
    },
    "ex": "あの人は誰ですか",
    "exm": {
      "en": "Who is that person?",
      "zh-TW": "那個人是誰",
      "zh-CN": "那个人是谁",
      "ko": "Who is that person?",
      "vi": "Who is that person?",
      "id": "Who is that person?",
      "es": "Who is that person?",
      "pt": "Who is that person?"
    },
    "syn": [
      "人間",
      "人物",
      "人々"
    ]
  },
  {
    "id": "V0207",
    "w": "男",
    "r": "おとこ",
    "m": {
      "en": "man",
      "zh-TW": "男人",
      "zh-CN": "男人",
      "ko": "남자",
      "vi": "Đàn ông",
      "id": "Pria",
      "es": "man",
      "pt": "man"
    },
    "ex": "あの男の人は誰",
    "exm": {
      "en": "Who is that man?",
      "zh-TW": "那個男人是誰",
      "zh-CN": "那个男人是谁",
      "ko": "Who is that man?",
      "vi": "Who is that man?",
      "id": "Who is that man?",
      "es": "Who is that man?",
      "pt": "Who is that man?"
    }
  },
  {
    "id": "V0208",
    "w": "女",
    "r": "おんな",
    "m": {
      "en": "woman",
      "zh-TW": "女人",
      "zh-CN": "女人",
      "ko": "여자",
      "vi": "Phụ nữ",
      "id": "Wanita",
      "es": "woman",
      "pt": "woman"
    },
    "ex": "あの女の人は誰",
    "exm": {
      "en": "Who is that woman?",
      "zh-TW": "那個女人是誰",
      "zh-CN": "那个女人是谁",
      "ko": "Who is that woman?",
      "vi": "Who is that woman?",
      "id": "Who is that woman?",
      "es": "Who is that woman?",
      "pt": "Who is that woman?"
    }
  },
  {
    "id": "V0209",
    "w": "男の子",
    "r": "おとこのこ",
    "m": {
      "en": "boy",
      "zh-TW": "男孩",
      "zh-CN": "男孩",
      "ko": "boy",
      "vi": "boy",
      "id": "boy",
      "es": "boy",
      "pt": "boy"
    },
    "ex": "男の子が遊んでいる",
    "exm": {
      "en": "A boy is playing",
      "zh-TW": "男孩在玩",
      "zh-CN": "男孩在玩",
      "ko": "A boy is playing",
      "vi": "A boy is playing",
      "id": "A boy is playing",
      "es": "A boy is playing",
      "pt": "A boy is playing"
    }
  },
  {
    "id": "V0210",
    "w": "女の子",
    "r": "おんなのこ",
    "m": {
      "en": "girl",
      "zh-TW": "女孩",
      "zh-CN": "女孩",
      "ko": "girl",
      "vi": "girl",
      "id": "girl",
      "es": "girl",
      "pt": "girl"
    },
    "ex": "女の子が歌っている",
    "exm": {
      "en": "A girl is singing",
      "zh-TW": "女孩在唱歌",
      "zh-CN": "女孩在唱歌",
      "ko": "A girl is singing",
      "vi": "A girl is singing",
      "id": "A girl is singing",
      "es": "A girl is singing",
      "pt": "A girl is singing"
    }
  },
  {
    "id": "V0211",
    "w": "こども",
    "r": "こども",
    "m": {
      "en": "child",
      "zh-TW": "孩子",
      "zh-CN": "孩子",
      "ko": "아이",
      "vi": "Trẻ em",
      "id": "Anak",
      "es": "child",
      "pt": "child"
    },
    "ex": "子供が二人います",
    "exm": {
      "en": "I have two children",
      "zh-TW": "有兩個小孩",
      "zh-CN": "有两个小孩",
      "ko": "I have two children",
      "vi": "I have two children",
      "id": "I have two children",
      "es": "I have two children",
      "pt": "I have two children"
    },
    "syn": [
      "子ども",
      "お子さん",
      "児童"
    ]
  },
  {
    "id": "V0212",
    "w": "あかちゃん",
    "r": "あかちゃん",
    "m": {
      "en": "baby",
      "zh-TW": "嬰兒",
      "zh-CN": "婴儿",
      "ko": "baby",
      "vi": "baby",
      "id": "baby",
      "es": "baby",
      "pt": "baby"
    },
    "ex": "赤ちゃんが泣いている",
    "exm": {
      "en": "The baby is crying",
      "zh-TW": "嬰兒在哭",
      "zh-CN": "婴儿在哭",
      "ko": "The baby is crying",
      "vi": "The baby is crying",
      "id": "The baby is crying",
      "es": "The baby is crying",
      "pt": "The baby is crying"
    }
  },
  {
    "id": "V0213",
    "w": "大人",
    "r": "おとな",
    "m": {
      "en": "adult",
      "zh-TW": "大人",
      "zh-CN": "大人",
      "ko": "adult",
      "vi": "adult",
      "id": "adult",
      "es": "adult",
      "pt": "adult"
    },
    "ex": "大人になりたい",
    "exm": {
      "en": "I want to become an adult",
      "zh-TW": "想成為大人",
      "zh-CN": "想成为大人",
      "ko": "원하다",
      "vi": "muốn",
      "id": "ingin",
      "es": "I want to become an adult",
      "pt": "I want to become an adult"
    }
  },
  {
    "id": "V0214",
    "w": "かぞく",
    "r": "かぞく",
    "m": {
      "en": "family",
      "zh-TW": "家人",
      "zh-CN": "家人",
      "ko": "가족",
      "vi": "Gia đình",
      "id": "Keluarga",
      "es": "family",
      "pt": "family"
    },
    "ex": "家族は4人です",
    "exm": {
      "en": "My family has 4 people",
      "zh-TW": "家裡有4個人",
      "zh-CN": "家里有4个人",
      "ko": "가족 사람들",
      "vi": "gia đình mọi người",
      "id": "keluarga orang-orang",
      "es": "My family has 4 people",
      "pt": "My family has 4 people"
    }
  },
  {
    "id": "V0215",
    "w": "父",
    "r": "ちち",
    "m": {
      "en": "father",
      "zh-TW": "父親",
      "zh-CN": "父亲",
      "ko": "아버지",
      "vi": "Bố",
      "id": "Ayah",
      "es": "father",
      "pt": "father"
    },
    "ex": "父は会社員です",
    "exm": {
      "en": "Father is office worker",
      "zh-TW": "父親是上班族",
      "zh-CN": "父亲是上班族",
      "ko": "사무실",
      "vi": "văn phòng",
      "id": "kantor",
      "es": "Father is office worker",
      "pt": "Father is office worker"
    }
  },
  {
    "id": "V0216",
    "w": "母",
    "r": "はは",
    "m": {
      "en": "mother",
      "zh-TW": "母親",
      "zh-CN": "母亲",
      "ko": "어머니",
      "vi": "Mẹ",
      "id": "Ibu",
      "es": "mother",
      "pt": "mother"
    },
    "ex": "母は先生です",
    "exm": {
      "en": "Mother is teacher",
      "zh-TW": "母親是老師",
      "zh-CN": "母亲是老师",
      "ko": "선생님",
      "vi": "giáo viên",
      "id": "guru",
      "es": "Mother is teacher",
      "pt": "Mother is teacher"
    }
  },
  {
    "id": "V0217",
    "w": "お父さん",
    "r": "おとうさん",
    "m": {
      "en": "father (polite)",
      "zh-TW": "爸爸",
      "zh-CN": "爸爸",
      "ko": "father (polite)",
      "vi": "father (polite)",
      "id": "father (polite)",
      "es": "father (polite)",
      "pt": "father (polite)"
    },
    "ex": "お父さんは元気ですか",
    "exm": {
      "en": "Is your father well?",
      "zh-TW": "爸爸好嗎",
      "zh-CN": "爸爸好吗",
      "ko": "Is your father well?",
      "vi": "Is your father well?",
      "id": "Is your father well?",
      "es": "Is your father well?",
      "pt": "Is your father well?"
    }
  },
  {
    "id": "V0218",
    "w": "お母さん",
    "r": "おかあさん",
    "m": {
      "en": "mother (polite)",
      "zh-TW": "媽媽",
      "zh-CN": "妈妈",
      "ko": "mother (polite)",
      "vi": "mother (polite)",
      "id": "mother (polite)",
      "es": "mother (polite)",
      "pt": "mother (polite)"
    },
    "ex": "お母さんに会いたい",
    "exm": {
      "en": "I want to see mom",
      "zh-TW": "想見媽媽",
      "zh-CN": "想见妈妈",
      "ko": "원하다 보다",
      "vi": "muốn xem",
      "id": "ingin melihat",
      "es": "I want to see mom",
      "pt": "I want to see mom"
    }
  },
  {
    "id": "V0219",
    "w": "あに",
    "r": "あに",
    "m": {
      "en": "older brother",
      "zh-TW": "哥哥",
      "zh-CN": "哥哥",
      "ko": "오래되다",
      "vi": "cũ",
      "id": "lama",
      "es": "older brother",
      "pt": "older brother"
    },
    "ex": "兄は大学生です",
    "exm": {
      "en": "Brother is university student",
      "zh-TW": "哥哥是大學生",
      "zh-CN": "哥哥是大学生",
      "ko": "대학교 학생",
      "vi": "đại học học sinh",
      "id": "universitas siswa",
      "es": "Brother is university student",
      "pt": "Brother is university student"
    }
  },
  {
    "id": "V0220",
    "w": "あね",
    "r": "あね",
    "m": {
      "en": "older sister",
      "zh-TW": "姊姊",
      "zh-CN": "姐姐",
      "ko": "오래되다",
      "vi": "cũ",
      "id": "lama",
      "es": "older sister",
      "pt": "older sister"
    },
    "ex": "姉は医者です",
    "exm": {
      "en": "Sister is doctor",
      "zh-TW": "姊姊是醫生",
      "zh-CN": "姐姐是医生",
      "ko": "의사",
      "vi": "bác sĩ",
      "id": "dokter",
      "es": "Sister is doctor",
      "pt": "Sister is doctor"
    }
  },
  {
    "id": "V0221",
    "w": "おとうと",
    "r": "おとうと",
    "m": {
      "en": "younger brother",
      "zh-TW": "弟弟",
      "zh-CN": "弟弟",
      "ko": "younger brother",
      "vi": "younger brother",
      "id": "younger brother",
      "es": "younger brother",
      "pt": "younger brother"
    },
    "ex": "弟は高校生です",
    "exm": {
      "en": "Brother is high schooler",
      "zh-TW": "弟弟是高中生",
      "zh-CN": "弟弟是高中生",
      "ko": "높은",
      "vi": "cao",
      "id": "tinggi",
      "es": "Brother is high schooler",
      "pt": "Brother is high schooler"
    }
  },
  {
    "id": "V0222",
    "w": "いもうと",
    "r": "いもうと",
    "m": {
      "en": "younger sister",
      "zh-TW": "妹妹",
      "zh-CN": "妹妹",
      "ko": "younger sister",
      "vi": "younger sister",
      "id": "younger sister",
      "es": "younger sister",
      "pt": "younger sister"
    },
    "ex": "妹は中学生です",
    "exm": {
      "en": "Sister is middle schooler",
      "zh-TW": "妹妹是國中生",
      "zh-CN": "妹妹是初中生",
      "ko": "Sister is middle schooler",
      "vi": "Sister is middle schooler",
      "id": "Sister is middle schooler",
      "es": "Sister is middle schooler",
      "pt": "Sister is middle schooler"
    }
  },
  {
    "id": "V0223",
    "w": "おにいさん",
    "r": "おにいさん",
    "m": {
      "en": "older brother (polite)",
      "zh-TW": "哥哥",
      "zh-CN": "哥哥",
      "ko": "오래되다",
      "vi": "cũ",
      "id": "lama",
      "es": "older brother (polite)",
      "pt": "older brother (polite)"
    },
    "ex": "お兄さんは優しい",
    "exm": {
      "en": "Brother is kind",
      "zh-TW": "哥哥很溫柔",
      "zh-CN": "哥哥很温柔",
      "ko": "Brother is kind",
      "vi": "Brother is kind",
      "id": "Brother is kind",
      "es": "Brother is kind",
      "pt": "Brother is kind"
    }
  },
  {
    "id": "V0224",
    "w": "おねえさん",
    "r": "おねえさん",
    "m": {
      "en": "older sister (polite)",
      "zh-TW": "姊姊",
      "zh-CN": "姐姐",
      "ko": "오래되다",
      "vi": "cũ",
      "id": "lama",
      "es": "older sister (polite)",
      "pt": "older sister (polite)"
    },
    "ex": "お姉さんは綺麗",
    "exm": {
      "en": "Sister is beautiful",
      "zh-TW": "姊姊很漂亮",
      "zh-CN": "姐姐很漂亮",
      "ko": "아름다운",
      "vi": "đẹp",
      "id": "indah",
      "es": "Sister is beautiful",
      "pt": "Sister is beautiful"
    }
  },
  {
    "id": "V0225",
    "w": "そふ",
    "r": "そふ",
    "m": {
      "en": "grandfather",
      "zh-TW": "祖父",
      "zh-CN": "祖父",
      "ko": "grandfather",
      "vi": "grandfather",
      "id": "grandfather",
      "es": "grandfather",
      "pt": "grandfather"
    },
    "ex": "祖父は元気です",
    "exm": {
      "en": "Grandfather is healthy",
      "zh-TW": "祖父很健康",
      "zh-CN": "祖父很健康",
      "ko": "건강한",
      "vi": "khỏe",
      "id": "sehat",
      "es": "Grandfather is healthy",
      "pt": "Grandfather is healthy"
    }
  },
  {
    "id": "V0226",
    "w": "そぼ",
    "r": "そぼ",
    "m": {
      "en": "grandmother",
      "zh-TW": "祖母",
      "zh-CN": "祖母",
      "ko": "grandmother",
      "vi": "grandmother",
      "id": "grandmother",
      "es": "grandmother",
      "pt": "grandmother"
    },
    "ex": "祖母は80歳です",
    "exm": {
      "en": "Grandmother is 80",
      "zh-TW": "祖母80歲",
      "zh-CN": "祖母80岁",
      "ko": "Grandmother is 80",
      "vi": "Grandmother is 80",
      "id": "Grandmother is 80",
      "es": "Grandmother is 80",
      "pt": "Grandmother is 80"
    }
  },
  {
    "id": "V0227",
    "w": "おじいさん",
    "r": "おじいさん",
    "m": {
      "en": "grandfather (polite)",
      "zh-TW": "爺爺",
      "zh-CN": "爷爷",
      "ko": "grandfather (polite)",
      "vi": "grandfather (polite)",
      "id": "grandfather (polite)",
      "es": "grandfather (polite)",
      "pt": "grandfather (polite)"
    },
    "ex": "おじいさんに会う",
    "exm": {
      "en": "Meet grandfather",
      "zh-TW": "見爺爺",
      "zh-CN": "见爷爷",
      "ko": "만나다",
      "vi": "gặp",
      "id": "bertemu",
      "es": "Meet grandfather",
      "pt": "Meet grandfather"
    }
  },
  {
    "id": "V0228",
    "w": "おばあさん",
    "r": "おばあさん",
    "m": {
      "en": "grandmother (polite)",
      "zh-TW": "奶奶",
      "zh-CN": "奶奶",
      "ko": "grandmother (polite)",
      "vi": "grandmother (polite)",
      "id": "grandmother (polite)",
      "es": "grandmother (polite)",
      "pt": "grandmother (polite)"
    },
    "ex": "おばあさんの料理",
    "exm": {
      "en": "Grandmother's cooking",
      "zh-TW": "奶奶的菜",
      "zh-CN": "奶奶的菜",
      "ko": "Grandmother's cooking",
      "vi": "Grandmother's cooking",
      "id": "Grandmother's cooking",
      "es": "Grandmother's cooking",
      "pt": "Grandmother's cooking"
    }
  },
  {
    "id": "V0229",
    "w": "おっと",
    "r": "おっと",
    "m": {
      "en": "husband",
      "zh-TW": "丈夫",
      "zh-CN": "丈夫",
      "ko": "husband",
      "vi": "husband",
      "id": "husband",
      "es": "husband",
      "pt": "husband"
    },
    "ex": "夫は会社員です",
    "exm": {
      "en": "Husband is office worker",
      "zh-TW": "丈夫是上班族",
      "zh-CN": "丈夫是上班族",
      "ko": "사무실",
      "vi": "văn phòng",
      "id": "kantor",
      "es": "Husband is office worker",
      "pt": "Husband is office worker"
    }
  },
  {
    "id": "V0230",
    "w": "つま",
    "r": "つま",
    "m": {
      "en": "wife",
      "zh-TW": "妻子",
      "zh-CN": "妻子",
      "ko": "wife",
      "vi": "wife",
      "id": "wife",
      "es": "wife",
      "pt": "wife"
    },
    "ex": "妻は先生です",
    "exm": {
      "en": "Wife is teacher",
      "zh-TW": "妻子是老師",
      "zh-CN": "妻子是老师",
      "ko": "선생님",
      "vi": "giáo viên",
      "id": "guru",
      "es": "Wife is teacher",
      "pt": "Wife is teacher"
    }
  },
  {
    "id": "V0231",
    "w": "しゅじん",
    "r": "しゅじん",
    "m": {
      "en": "husband (humble)",
      "zh-TW": "丈夫",
      "zh-CN": "丈夫",
      "ko": "husband (humble)",
      "vi": "husband (humble)",
      "id": "husband (humble)",
      "es": "husband (humble)",
      "pt": "husband (humble)"
    },
    "ex": "主人は出張中です",
    "exm": {
      "en": "Husband on business trip",
      "zh-TW": "丈夫出差中",
      "zh-CN": "丈夫出差中",
      "ko": "Husband on business trip",
      "vi": "Husband on business trip",
      "id": "Husband on business trip",
      "es": "Husband on business trip",
      "pt": "Husband on business trip"
    }
  },
  {
    "id": "V0232",
    "w": "おくさん",
    "r": "おくさん",
    "m": {
      "en": "wife (polite)",
      "zh-TW": "太太",
      "zh-CN": "太太",
      "ko": "wife (polite)",
      "vi": "wife (polite)",
      "id": "wife (polite)",
      "es": "wife (polite)",
      "pt": "wife (polite)"
    },
    "ex": "奥さんはお元気ですか",
    "exm": {
      "en": "Is your wife well?",
      "zh-TW": "太太好嗎",
      "zh-CN": "太太好吗",
      "ko": "Is your wife well?",
      "vi": "Is your wife well?",
      "id": "Is your wife well?",
      "es": "Is your wife well?",
      "pt": "Is your wife well?"
    }
  },
  {
    "id": "V0233",
    "w": "ともだち",
    "r": "ともだち",
    "m": {
      "en": "friend",
      "zh-TW": "朋友",
      "zh-CN": "朋友",
      "ko": "친구",
      "vi": "Bạn",
      "id": "Teman",
      "es": "friend",
      "pt": "friend"
    },
    "ex": "友達と遊ぶ",
    "exm": {
      "en": "Play with friend",
      "zh-TW": "和朋友玩",
      "zh-CN": "和朋友玩",
      "ko": "놀다 친구",
      "vi": "chơi bạn",
      "id": "bermain teman",
      "es": "Play with friend",
      "pt": "Play with friend"
    },
    "syn": [
      "友人",
      "仲間",
      "親友"
    ]
  },
  {
    "id": "V0234",
    "w": "先生",
    "r": "せんせい",
    "m": {
      "en": "teacher",
      "zh-TW": "老師",
      "zh-CN": "老师",
      "ko": "선생님",
      "vi": "Giáo viên",
      "id": "Guru",
      "es": "teacher",
      "pt": "teacher"
    },
    "ex": "先生に聞く",
    "exm": {
      "en": "Ask teacher",
      "zh-TW": "問老師",
      "zh-CN": "问老师",
      "ko": "묻다 선생님",
      "vi": "hỏi giáo viên",
      "id": "bertanya guru",
      "es": "Ask teacher",
      "pt": "Ask teacher"
    },
    "syn": [
      "教師",
      "教員",
      "講師"
    ]
  },
  {
    "id": "V0235",
    "w": "学生",
    "r": "がくせい",
    "m": {
      "en": "student",
      "zh-TW": "學生",
      "zh-CN": "学生",
      "ko": "학생",
      "vi": "Học sinh",
      "id": "Murid",
      "es": "student",
      "pt": "student"
    },
    "ex": "私は学生です",
    "exm": {
      "en": "I am a student",
      "zh-TW": "我是學生",
      "zh-CN": "我是学生",
      "ko": "학생",
      "vi": "học sinh",
      "id": "siswa",
      "es": "I am a student",
      "pt": "I am a student"
    },
    "syn": [
      "生徒",
      "学習者",
      "受講生"
    ]
  },
  {
    "id": "V0236",
    "w": "いしゃ",
    "r": "いしゃ",
    "m": {
      "en": "doctor",
      "zh-TW": "醫生",
      "zh-CN": "医生",
      "ko": "의사",
      "vi": "Bác sĩ",
      "id": "Dokter",
      "es": "doctor",
      "pt": "doctor"
    },
    "ex": "医者になりたい",
    "exm": {
      "en": "Want to be doctor",
      "zh-TW": "想當醫生",
      "zh-CN": "想当医生",
      "ko": "원하다 의사",
      "vi": "muốn bác sĩ",
      "id": "ingin dokter",
      "es": "Want to be doctor",
      "pt": "Want to be doctor"
    }
  },
  {
    "id": "V0237",
    "w": "かんごし",
    "r": "かんごし",
    "m": {
      "en": "nurse",
      "zh-TW": "護士",
      "zh-CN": "护士",
      "ko": "nurse",
      "vi": "nurse",
      "id": "nurse",
      "es": "nurse",
      "pt": "nurse"
    },
    "ex": "看護師は優しい",
    "exm": {
      "en": "Nurse is kind",
      "zh-TW": "護士很溫柔",
      "zh-CN": "护士很温柔",
      "ko": "Nurse is kind",
      "vi": "Nurse is kind",
      "id": "Nurse is kind",
      "es": "Nurse is kind",
      "pt": "Nurse is kind"
    }
  },
  {
    "id": "V0238",
    "w": "かいしゃいん",
    "r": "かいしゃいん",
    "m": {
      "en": "office worker",
      "zh-TW": "上班族",
      "zh-CN": "上班族",
      "ko": "사무실",
      "vi": "văn phòng",
      "id": "kantor",
      "es": "office worker",
      "pt": "office worker"
    },
    "ex": "会社員として働く",
    "exm": {
      "en": "Work as office worker",
      "zh-TW": "當上班族工作",
      "zh-CN": "当上班族工作",
      "ko": "일하다 사무실",
      "vi": "làm việc văn phòng",
      "id": "bekerja kantor",
      "es": "Work as office worker",
      "pt": "Work as office worker"
    }
  },
  {
    "id": "V0239",
    "w": "てんいん",
    "r": "てんいん",
    "m": {
      "en": "shop clerk",
      "zh-TW": "店員",
      "zh-CN": "店员",
      "ko": "가게",
      "vi": "cửa hàng",
      "id": "toko",
      "es": "shop clerk",
      "pt": "shop clerk"
    },
    "ex": "店員に聞く",
    "exm": {
      "en": "Ask clerk",
      "zh-TW": "問店員",
      "zh-CN": "问店员",
      "ko": "묻다",
      "vi": "hỏi",
      "id": "bertanya",
      "es": "Ask clerk",
      "pt": "Ask clerk"
    }
  },
  {
    "id": "V0240",
    "w": "うんてんしゅ",
    "r": "うんてんしゅ",
    "m": {
      "en": "driver",
      "zh-TW": "司機",
      "zh-CN": "司机",
      "ko": "driver",
      "vi": "driver",
      "id": "driver",
      "es": "driver",
      "pt": "driver"
    },
    "ex": "タクシーの運転手",
    "exm": {
      "en": "Taxi driver",
      "zh-TW": "計程車司機",
      "zh-CN": "出租车司机",
      "ko": "Taxi driver",
      "vi": "Taxi driver",
      "id": "Taxi driver",
      "es": "Taxi driver",
      "pt": "Taxi driver"
    }
  },
  {
    "id": "V0241",
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
    "ex": "警察に聞く",
    "exm": {
      "en": "Ask police",
      "zh-TW": "問警察",
      "zh-CN": "问警察",
      "ko": "묻다",
      "vi": "hỏi",
      "id": "bertanya",
      "es": "Ask police",
      "pt": "Ask police"
    }
  },
  {
    "id": "V0242",
    "w": "きゃく",
    "r": "きゃく",
    "m": {
      "en": "customer",
      "zh-TW": "客人",
      "zh-CN": "客人",
      "ko": "customer",
      "vi": "customer",
      "id": "customer",
      "es": "customer",
      "pt": "customer"
    },
    "ex": "客が来る",
    "exm": {
      "en": "Customer comes",
      "zh-TW": "客人來了",
      "zh-CN": "客人来了",
      "ko": "Customer comes",
      "vi": "Customer comes",
      "id": "Customer comes",
      "es": "Customer comes",
      "pt": "Customer comes"
    }
  },
  {
    "id": "V0243",
    "w": "おきゃくさん",
    "r": "おきゃくさん",
    "m": {
      "en": "customer (polite)",
      "zh-TW": "顧客",
      "zh-CN": "顾客",
      "ko": "customer (polite)",
      "vi": "customer (polite)",
      "id": "customer (polite)",
      "es": "customer (polite)",
      "pt": "customer (polite)"
    },
    "ex": "お客さんを案内する",
    "exm": {
      "en": "Guide customer",
      "zh-TW": "引導顧客",
      "zh-CN": "引导顾客",
      "ko": "Guide customer",
      "vi": "Guide customer",
      "id": "Guide customer",
      "es": "Guide customer",
      "pt": "Guide customer"
    }
  },
  {
    "id": "V0244",
    "w": "となりのひと",
    "r": "となりのひと",
    "m": {
      "en": "neighbor",
      "zh-TW": "鄰居",
      "zh-CN": "邻居",
      "ko": "neighbor",
      "vi": "neighbor",
      "id": "neighbor",
      "es": "neighbor",
      "pt": "neighbor"
    },
    "ex": "隣の人に挨拶する",
    "exm": {
      "en": "Greet neighbor",
      "zh-TW": "向鄰居打招呼",
      "zh-CN": "向邻居打招呼",
      "ko": "Greet neighbor",
      "vi": "Greet neighbor",
      "id": "Greet neighbor",
      "es": "Greet neighbor",
      "pt": "Greet neighbor"
    }
  },
  {
    "id": "V0245",
    "w": "社長",
    "r": "しゃちょう",
    "m": {
      "en": "company president",
      "zh-TW": "社長",
      "zh-CN": "社长",
      "ko": "회사",
      "vi": "công ty",
      "id": "perusahaan",
      "es": "company president",
      "pt": "company president"
    },
    "ex": "社長に会う",
    "exm": {
      "en": "Meet president",
      "zh-TW": "見社長",
      "zh-CN": "见社长",
      "ko": "만나다",
      "vi": "gặp",
      "id": "bertemu",
      "es": "Meet president",
      "pt": "Meet president"
    }
  },
  {
    "id": "V0246",
    "w": "ぶちょう",
    "r": "ぶちょう",
    "m": {
      "en": "department head",
      "zh-TW": "部長",
      "zh-CN": "部长",
      "ko": "머리",
      "vi": "đầu",
      "id": "kepala",
      "es": "department head",
      "pt": "department head"
    },
    "ex": "部長に報告する",
    "exm": {
      "en": "Report to head",
      "zh-TW": "向部長報告",
      "zh-CN": "向部长报告",
      "ko": "머리",
      "vi": "đầu",
      "id": "kepala",
      "es": "Report to head",
      "pt": "Report to head"
    }
  },
  {
    "id": "V0247",
    "w": "かちょう",
    "r": "かちょう",
    "m": {
      "en": "section chief",
      "zh-TW": "課長",
      "zh-CN": "课长",
      "ko": "section chief",
      "vi": "section chief",
      "id": "section chief",
      "es": "section chief",
      "pt": "section chief"
    },
    "ex": "課長に相談する",
    "exm": {
      "en": "Consult chief",
      "zh-TW": "和課長商量",
      "zh-CN": "和课长商量",
      "ko": "Consult chief",
      "vi": "Consult chief",
      "id": "Consult chief",
      "es": "Consult chief",
      "pt": "Consult chief"
    }
  },
  {
    "id": "V0248",
    "w": "どうりょう",
    "r": "どうりょう",
    "m": {
      "en": "colleague",
      "zh-TW": "同事",
      "zh-CN": "同事",
      "ko": "colleague",
      "vi": "colleague",
      "id": "colleague",
      "es": "colleague",
      "pt": "colleague"
    },
    "ex": "同僚と話す",
    "exm": {
      "en": "Talk with colleague",
      "zh-TW": "和同事說話",
      "zh-CN": "和同事说话",
      "ko": "Talk with colleague",
      "vi": "Talk with colleague",
      "id": "Talk with colleague",
      "es": "Talk with colleague",
      "pt": "Talk with colleague"
    }
  },
  {
    "id": "V0249",
    "w": "こうはい",
    "r": "こうはい",
    "m": {
      "en": "junior",
      "zh-TW": "後輩",
      "zh-CN": "后辈",
      "ko": "junior",
      "vi": "junior",
      "id": "junior",
      "es": "junior",
      "pt": "junior"
    },
    "ex": "後輩を助ける",
    "exm": {
      "en": "Help junior",
      "zh-TW": "幫助後輩",
      "zh-CN": "帮助后辈",
      "ko": "돕다",
      "vi": "giúp",
      "id": "membantu",
      "es": "Help junior",
      "pt": "Help junior"
    }
  },
  {
    "id": "V0250",
    "w": "せんぱい",
    "r": "せんぱい",
    "m": {
      "en": "senior",
      "zh-TW": "前輩",
      "zh-CN": "前辈",
      "ko": "senior",
      "vi": "senior",
      "id": "senior",
      "es": "senior",
      "pt": "senior"
    },
    "ex": "先輩に教わる",
    "exm": {
      "en": "Learn from senior",
      "zh-TW": "向前輩學習",
      "zh-CN": "向前辈学习",
      "ko": "배우다",
      "vi": "học",
      "id": "belajar",
      "es": "Learn from senior",
      "pt": "Learn from senior"
    }
  },
  {
    "id": "V0251",
    "w": "いえ",
    "r": "いえ",
    "m": {
      "en": "house",
      "zh-TW": "房子",
      "zh-CN": "房子",
      "ko": "집",
      "vi": "Nhà",
      "id": "Rumah",
      "es": "house",
      "pt": "house"
    },
    "ex": "家に帰る",
    "exm": {
      "en": "Go home",
      "zh-TW": "回家",
      "zh-CN": "回家",
      "ko": "가다",
      "vi": "đi",
      "id": "pergi",
      "es": "Go home",
      "pt": "Go home"
    },
    "syn": [
      "住宅",
      "住居",
      "自宅"
    ]
  },
  {
    "id": "V0252",
    "w": "へや",
    "r": "へや",
    "m": {
      "en": "room",
      "zh-TW": "房間",
      "zh-CN": "房间",
      "ko": "방",
      "vi": "Phòng",
      "id": "Kamar",
      "es": "room",
      "pt": "room"
    },
    "ex": "部屋を掃除する",
    "exm": {
      "en": "Clean room",
      "zh-TW": "打掃房間",
      "zh-CN": "打扫房间",
      "ko": "깨끗한 방",
      "vi": "sạch phòng",
      "id": "bersih kamar",
      "es": "Clean room",
      "pt": "Clean room"
    },
    "syn": [
      "室",
      "ルーム",
      "室内"
    ]
  },
  {
    "id": "V0253",
    "w": "だいどころ",
    "r": "だいどころ",
    "m": {
      "en": "kitchen",
      "zh-TW": "廚房",
      "zh-CN": "厨房",
      "ko": "kitchen",
      "vi": "kitchen",
      "id": "kitchen",
      "es": "kitchen",
      "pt": "kitchen"
    },
    "ex": "台所で料理する",
    "exm": {
      "en": "Cook in kitchen",
      "zh-TW": "在廚房做菜",
      "zh-CN": "在厨房做菜",
      "ko": "요리하다",
      "vi": "nấu",
      "id": "memasak",
      "es": "Cook in kitchen",
      "pt": "Cook in kitchen"
    }
  },
  {
    "id": "V0254",
    "w": "トイレ",
    "r": "トイレ",
    "m": {
      "en": "toilet",
      "zh-TW": "廁所",
      "zh-CN": "厕所",
      "ko": "toilet",
      "vi": "toilet",
      "id": "toilet",
      "es": "toilet",
      "pt": "toilet"
    },
    "ex": "トイレに行く",
    "exm": {
      "en": "Go to toilet",
      "zh-TW": "去廁所",
      "zh-CN": "去厕所",
      "ko": "가다",
      "vi": "đi",
      "id": "pergi",
      "es": "Go to toilet",
      "pt": "Go to toilet"
    }
  },
  {
    "id": "V0255",
    "w": "おふろ",
    "r": "おふろ",
    "m": {
      "en": "bath",
      "zh-TW": "浴室",
      "zh-CN": "浴室",
      "ko": "bath",
      "vi": "bath",
      "id": "bath",
      "es": "bath",
      "pt": "bath"
    },
    "ex": "お風呂に入る",
    "exm": {
      "en": "Take bath",
      "zh-TW": "洗澡",
      "zh-CN": "洗澡",
      "ko": "가지다",
      "vi": "lấy",
      "id": "mengambil",
      "es": "Take bath",
      "pt": "Take bath"
    }
  },
  {
    "id": "V0256",
    "w": "げんかん",
    "r": "げんかん",
    "m": {
      "en": "entrance",
      "zh-TW": "玄關",
      "zh-CN": "玄关",
      "ko": "entrance",
      "vi": "entrance",
      "id": "entrance",
      "es": "entrance",
      "pt": "entrance"
    },
    "ex": "玄関で靴を脱ぐ",
    "exm": {
      "en": "Take off shoes",
      "zh-TW": "在玄關脫鞋",
      "zh-CN": "在玄关脱鞋",
      "ko": "가지다 쉬는",
      "vi": "lấy nghỉ",
      "id": "mengambil libur",
      "es": "Take off shoes",
      "pt": "Take off shoes"
    }
  },
  {
    "id": "V0257",
    "w": "にわ",
    "r": "にわ",
    "m": {
      "en": "garden",
      "zh-TW": "庭院",
      "zh-CN": "庭院",
      "ko": "garden",
      "vi": "garden",
      "id": "garden",
      "es": "garden",
      "pt": "garden"
    },
    "ex": "庭で遊ぶ",
    "exm": {
      "en": "Play in garden",
      "zh-TW": "在庭院玩",
      "zh-CN": "在庭院玩",
      "ko": "놀다",
      "vi": "chơi",
      "id": "bermain",
      "es": "Play in garden",
      "pt": "Play in garden"
    }
  },
  {
    "id": "V0258",
    "w": "学校",
    "r": "がっこう",
    "m": {
      "en": "school",
      "zh-TW": "學校",
      "zh-CN": "学校",
      "ko": "학교",
      "vi": "Trường học",
      "id": "Sekolah",
      "es": "school",
      "pt": "school"
    },
    "ex": "学校に行く",
    "exm": {
      "en": "Go to school",
      "zh-TW": "去學校",
      "zh-CN": "去学校",
      "ko": "가다 학교",
      "vi": "đi trường",
      "id": "pergi sekolah",
      "es": "Go to school",
      "pt": "Go to school"
    },
    "syn": [
      "教育機関",
      "学園",
      "スクール"
    ]
  },
  {
    "id": "V0259",
    "w": "大学",
    "r": "だいがく",
    "m": {
      "en": "university",
      "zh-TW": "大學",
      "zh-CN": "大学",
      "ko": "대학교",
      "vi": "Đại học",
      "id": "Universitas",
      "es": "university",
      "pt": "university"
    },
    "ex": "大学で勉強する",
    "exm": {
      "en": "Study at university",
      "zh-TW": "在大學學習",
      "zh-CN": "在大学学习",
      "ko": "공부하다 대학교",
      "vi": "học đại học",
      "id": "belajar universitas",
      "es": "Study at university",
      "pt": "Study at university"
    }
  },
  {
    "id": "V0260",
    "w": "教室",
    "r": "きょうしつ",
    "m": {
      "en": "classroom",
      "zh-TW": "教室",
      "zh-CN": "教室",
      "ko": "classroom",
      "vi": "classroom",
      "id": "classroom",
      "es": "classroom",
      "pt": "classroom"
    },
    "ex": "教室で勉強する",
    "exm": {
      "en": "Study in classroom",
      "zh-TW": "在教室學習",
      "zh-CN": "在教室学习",
      "ko": "공부하다",
      "vi": "học",
      "id": "belajar",
      "es": "Study in classroom",
      "pt": "Study in classroom"
    }
  },
  {
    "id": "V0261",
    "w": "としょかん",
    "r": "としょかん",
    "m": {
      "en": "library",
      "zh-TW": "圖書館",
      "zh-CN": "图书馆",
      "ko": "도서관",
      "vi": "thư viện",
      "id": "perpustakaan",
      "es": "library",
      "pt": "library"
    },
    "ex": "図書館で本を借りる",
    "exm": {
      "en": "Borrow at library",
      "zh-TW": "在圖書館借書",
      "zh-CN": "在图书馆借书",
      "ko": "빌리다 도서관",
      "vi": "mượn thư viện",
      "id": "meminjam perpustakaan",
      "es": "Borrow at library",
      "pt": "Borrow at library"
    }
  },
  {
    "id": "V0262",
    "w": "びょういん",
    "r": "びょういん",
    "m": {
      "en": "hospital",
      "zh-TW": "醫院",
      "zh-CN": "医院",
      "ko": "병원",
      "vi": "Bệnh viện",
      "id": "Rumah sakit",
      "es": "hospital",
      "pt": "hospital"
    },
    "ex": "病院に行く",
    "exm": {
      "en": "Go to hospital",
      "zh-TW": "去醫院",
      "zh-CN": "去医院",
      "ko": "가다 병원",
      "vi": "đi bệnh viện",
      "id": "pergi rumah sakit",
      "es": "Go to hospital",
      "pt": "Go to hospital"
    },
    "syn": [
      "医療機関",
      "医院",
      "クリニック"
    ]
  },
  {
    "id": "V0263",
    "w": "ぎんこう",
    "r": "ぎんこう",
    "m": {
      "en": "bank",
      "zh-TW": "銀行",
      "zh-CN": "银行",
      "ko": "은행",
      "vi": "Ngân hàng",
      "id": "Bank",
      "es": "bank",
      "pt": "bank"
    },
    "ex": "銀行でお金をおろす",
    "exm": {
      "en": "Withdraw at bank",
      "zh-TW": "在銀行領錢",
      "zh-CN": "在银行取钱",
      "ko": "은행",
      "vi": "ngân hàng",
      "id": "bank",
      "es": "Withdraw at bank",
      "pt": "Withdraw at bank"
    }
  },
  {
    "id": "V0264",
    "w": "ゆうびんきょく",
    "r": "ゆうびんきょく",
    "m": {
      "en": "post office",
      "zh-TW": "郵局",
      "zh-CN": "邮局",
      "ko": "우체국",
      "vi": "Bưu điện",
      "id": "Kantor pos",
      "es": "post office",
      "pt": "post office"
    },
    "ex": "郵便局で送る",
    "exm": {
      "en": "Send at post office",
      "zh-TW": "在郵局寄",
      "zh-CN": "在邮局寄",
      "ko": "보내다 우체국 사무실",
      "vi": "gửi bưu điện văn phòng",
      "id": "mengirim kantor pos kantor",
      "es": "Send at post office",
      "pt": "Send at post office"
    }
  },
  {
    "id": "V0265",
    "w": "駅",
    "r": "えき",
    "m": {
      "en": "station",
      "zh-TW": "車站",
      "zh-CN": "车站",
      "ko": "역",
      "vi": "Ga",
      "id": "Stasiun",
      "es": "station",
      "pt": "station"
    },
    "ex": "駅で待つ",
    "exm": {
      "en": "Wait at station",
      "zh-TW": "在車站等",
      "zh-CN": "在车站等",
      "ko": "기다리다 역",
      "vi": "đợi ga",
      "id": "menunggu stasiun",
      "es": "Wait at station",
      "pt": "Wait at station"
    },
    "syn": [
      "ステーション",
      "停車場",
      "乗り場"
    ]
  },
  {
    "id": "V0266",
    "w": "くうこう",
    "r": "くうこう",
    "m": {
      "en": "airport",
      "zh-TW": "機場",
      "zh-CN": "机场",
      "ko": "공항",
      "vi": "Sân bay",
      "id": "Bandara",
      "es": "airport",
      "pt": "airport"
    },
    "ex": "空港に行く",
    "exm": {
      "en": "Go to airport",
      "zh-TW": "去機場",
      "zh-CN": "去机场",
      "ko": "가다 공항",
      "vi": "đi sân bay",
      "id": "pergi bandara",
      "es": "Go to airport",
      "pt": "Go to airport"
    }
  },
  {
    "id": "V0267",
    "w": "ホテル",
    "r": "ホテル",
    "m": {
      "en": "hotel",
      "zh-TW": "飯店",
      "zh-CN": "饭店",
      "ko": "호텔",
      "vi": "Khách sạn",
      "id": "Hotel",
      "es": "hotel",
      "pt": "hotel"
    },
    "ex": "ホテルに泊まる",
    "exm": {
      "en": "Stay at hotel",
      "zh-TW": "住飯店",
      "zh-CN": "住酒店",
      "ko": "머무르다",
      "vi": "ở lại",
      "id": "tinggal",
      "es": "Stay at hotel",
      "pt": "Stay at hotel"
    }
  },
  {
    "id": "V0268",
    "w": "レストラン",
    "r": "レストラン",
    "m": {
      "en": "restaurant",
      "zh-TW": "餐廳",
      "zh-CN": "餐厅",
      "ko": "식당",
      "vi": "Nhà hàng",
      "id": "Restoran",
      "es": "restaurant",
      "pt": "restaurant"
    },
    "ex": "レストランで食べる",
    "exm": {
      "en": "Eat at restaurant",
      "zh-TW": "在餐廳吃",
      "zh-CN": "在餐厅吃",
      "ko": "먹다 식당",
      "vi": "ăn nhà hàng",
      "id": "makan restoran",
      "es": "Eat at restaurant",
      "pt": "Eat at restaurant"
    }
  },
  {
    "id": "V0269",
    "w": "みせ",
    "r": "みせ",
    "m": {
      "en": "shop",
      "zh-TW": "店",
      "zh-CN": "店",
      "ko": "가게",
      "vi": "cửa hàng",
      "id": "toko",
      "es": "shop",
      "pt": "shop"
    },
    "ex": "店で買う",
    "exm": {
      "en": "Buy at shop",
      "zh-TW": "在店裡買",
      "zh-CN": "在店里买",
      "ko": "사다 가게",
      "vi": "mua cửa hàng",
      "id": "membeli toko",
      "es": "Buy at shop",
      "pt": "Buy at shop"
    },
    "syn": [
      "ショップ",
      "店舗",
      "販売店"
    ]
  },
  {
    "id": "V0270",
    "w": "スーパー",
    "r": "スーパー",
    "m": {
      "en": "supermarket",
      "zh-TW": "超市",
      "zh-CN": "超市",
      "ko": "supermarket",
      "vi": "supermarket",
      "id": "supermarket",
      "es": "supermarket",
      "pt": "supermarket"
    },
    "ex": "スーパーで買い物",
    "exm": {
      "en": "Shop at supermarket",
      "zh-TW": "在超市購物",
      "zh-CN": "在超市购物",
      "ko": "가게",
      "vi": "cửa hàng",
      "id": "toko",
      "es": "Shop at supermarket",
      "pt": "Shop at supermarket"
    }
  },
  {
    "id": "V0271",
    "w": "コンビニ",
    "r": "コンビニ",
    "m": {
      "en": "convenience store",
      "zh-TW": "便利商店",
      "zh-CN": "便利店",
      "ko": "가게",
      "vi": "cửa hàng",
      "id": "toko",
      "es": "convenience store",
      "pt": "convenience store"
    },
    "ex": "コンビニで買う",
    "exm": {
      "en": "Buy at convenience store",
      "zh-TW": "在便利商店買",
      "zh-CN": "在便利店买",
      "ko": "사다 가게",
      "vi": "mua cửa hàng",
      "id": "membeli toko",
      "es": "Buy at convenience store",
      "pt": "Buy at convenience store"
    }
  },
  {
    "id": "V0272",
    "w": "デパート",
    "r": "デパート",
    "m": {
      "en": "department store",
      "zh-TW": "百貨公司",
      "zh-CN": "百货公司",
      "ko": "가게",
      "vi": "cửa hàng",
      "id": "toko",
      "es": "department store",
      "pt": "department store"
    },
    "ex": "デパートで買い物",
    "exm": {
      "en": "Shop at department store",
      "zh-TW": "在百貨公司購物",
      "zh-CN": "在百货公司购物",
      "ko": "가게 가게",
      "vi": "cửa hàng cửa hàng",
      "id": "toko toko",
      "es": "Shop at department store",
      "pt": "Shop at department store"
    }
  },
  {
    "id": "V0273",
    "w": "こうえん",
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
    "ex": "公園で遊ぶ",
    "exm": {
      "en": "Play in park",
      "zh-TW": "在公園玩",
      "zh-CN": "在公园玩",
      "ko": "놀다 공원",
      "vi": "chơi công viên",
      "id": "bermain taman",
      "es": "Play in park",
      "pt": "Play in park"
    }
  },
  {
    "id": "V0274",
    "w": "会社",
    "r": "かいしゃ",
    "m": {
      "en": "company",
      "zh-TW": "公司",
      "zh-CN": "公司",
      "ko": "회사",
      "vi": "công ty",
      "id": "perusahaan",
      "es": "company",
      "pt": "company"
    },
    "ex": "会社で働く",
    "exm": {
      "en": "Work at company",
      "zh-TW": "在公司工作",
      "zh-CN": "在公司工作",
      "ko": "일하다 회사",
      "vi": "làm việc công ty",
      "id": "bekerja perusahaan",
      "es": "Work at company",
      "pt": "Work at company"
    },
    "syn": [
      "企業",
      "会社組織",
      "法人"
    ]
  },
  {
    "id": "V0275",
    "w": "こうじょう",
    "r": "こうじょう",
    "m": {
      "en": "factory",
      "zh-TW": "工廠",
      "zh-CN": "工厂",
      "ko": "factory",
      "vi": "factory",
      "id": "factory",
      "es": "factory",
      "pt": "factory"
    },
    "ex": "工場で働く",
    "exm": {
      "en": "Work at factory",
      "zh-TW": "在工廠工作",
      "zh-CN": "在工厂工作",
      "ko": "일하다",
      "vi": "làm việc",
      "id": "bekerja",
      "es": "Work at factory",
      "pt": "Work at factory"
    }
  },
  {
    "id": "V0276",
    "w": "えいがかん",
    "r": "えいがかん",
    "m": {
      "en": "movie theater",
      "zh-TW": "電影院",
      "zh-CN": "电影院",
      "ko": "영화",
      "vi": "phim",
      "id": "film",
      "es": "movie theater",
      "pt": "movie theater"
    },
    "ex": "映画館で映画を見る",
    "exm": {
      "en": "Watch movie at theater",
      "zh-TW": "在電影院看電影",
      "zh-CN": "在电影院看电影",
      "ko": "보다 영화",
      "vi": "xem phim",
      "id": "menonton film",
      "es": "Watch movie at theater",
      "pt": "Watch movie at theater"
    }
  },
  {
    "id": "V0277",
    "w": "びじゅつかん",
    "r": "びじゅつかん",
    "m": {
      "en": "art museum",
      "zh-TW": "美術館",
      "zh-CN": "美术馆",
      "ko": "art museum",
      "vi": "art museum",
      "id": "art museum",
      "es": "art museum",
      "pt": "art museum"
    },
    "ex": "美術館で絵を見る",
    "exm": {
      "en": "See art at museum",
      "zh-TW": "在美術館看畫",
      "zh-CN": "在美术馆看画",
      "ko": "보다",
      "vi": "xem",
      "id": "melihat",
      "es": "See art at museum",
      "pt": "See art at museum"
    }
  },
  {
    "id": "V0278",
    "w": "はくぶつかん",
    "r": "はくぶつかん",
    "m": {
      "en": "museum",
      "zh-TW": "博物館",
      "zh-CN": "博物馆",
      "ko": "museum",
      "vi": "museum",
      "id": "museum",
      "es": "museum",
      "pt": "museum"
    },
    "ex": "博物館に行く",
    "exm": {
      "en": "Go to museum",
      "zh-TW": "去博物館",
      "zh-CN": "去博物馆",
      "ko": "가다",
      "vi": "đi",
      "id": "pergi",
      "es": "Go to museum",
      "pt": "Go to museum"
    }
  },
  {
    "id": "V0279",
    "w": "じんじゃ",
    "r": "じんじゃ",
    "m": {
      "en": "shrine",
      "zh-TW": "神社",
      "zh-CN": "神社",
      "ko": "shrine",
      "vi": "shrine",
      "id": "shrine",
      "es": "shrine",
      "pt": "shrine"
    },
    "ex": "神社に参る",
    "exm": {
      "en": "Visit shrine",
      "zh-TW": "參拜神社",
      "zh-CN": "参拜神社",
      "ko": "Visit shrine",
      "vi": "Visit shrine",
      "id": "Visit shrine",
      "es": "Visit shrine",
      "pt": "Visit shrine"
    }
  },
  {
    "id": "V0280",
    "w": "おてら",
    "r": "おてら",
    "m": {
      "en": "temple",
      "zh-TW": "寺廟",
      "zh-CN": "寺庙",
      "ko": "temple",
      "vi": "temple",
      "id": "temple",
      "es": "temple",
      "pt": "temple"
    },
    "ex": "お寺を見る",
    "exm": {
      "en": "See temple",
      "zh-TW": "看寺廟",
      "zh-CN": "看寺庙",
      "ko": "보다",
      "vi": "xem",
      "id": "melihat",
      "es": "See temple",
      "pt": "See temple"
    }
  },
  {
    "id": "V0281",
    "w": "道",
    "r": "みち",
    "m": {
      "en": "road",
      "zh-TW": "路",
      "zh-CN": "路",
      "ko": "road",
      "vi": "road",
      "id": "road",
      "es": "road",
      "pt": "road"
    },
    "ex": "道を歩く",
    "exm": {
      "en": "Walk on road",
      "zh-TW": "走路",
      "zh-CN": "走路",
      "ko": "걷다",
      "vi": "đi bộ",
      "id": "berjalan",
      "es": "Walk on road",
      "pt": "Walk on road"
    },
    "syn": [
      "道路",
      "通り",
      "ストリート"
    ]
  },
  {
    "id": "V0282",
    "w": "とおり",
    "r": "とおり",
    "m": {
      "en": "street",
      "zh-TW": "街道",
      "zh-CN": "街道",
      "ko": "street",
      "vi": "street",
      "id": "street",
      "es": "street",
      "pt": "street"
    },
    "ex": "この通りをまっすぐ",
    "exm": {
      "en": "Straight on this street",
      "zh-TW": "這條街直走",
      "zh-CN": "这条街直走",
      "ko": "Straight on this street",
      "vi": "Straight on this street",
      "id": "Straight on this street",
      "es": "Straight on this street",
      "pt": "Straight on this street"
    }
  },
  {
    "id": "V0283",
    "w": "はし",
    "r": "はし",
    "m": {
      "en": "bridge",
      "zh-TW": "橋",
      "zh-CN": "桥",
      "ko": "bridge",
      "vi": "bridge",
      "id": "bridge",
      "es": "bridge",
      "pt": "bridge"
    },
    "ex": "橋を渡る",
    "exm": {
      "en": "Cross bridge",
      "zh-TW": "過橋",
      "zh-CN": "过桥",
      "ko": "Cross bridge",
      "vi": "Cross bridge",
      "id": "Cross bridge",
      "es": "Cross bridge",
      "pt": "Cross bridge"
    }
  },
  {
    "id": "V0284",
    "w": "こうさてん",
    "r": "こうさてん",
    "m": {
      "en": "intersection",
      "zh-TW": "十字路口",
      "zh-CN": "十字路口",
      "ko": "intersection",
      "vi": "intersection",
      "id": "intersection",
      "es": "intersection",
      "pt": "intersection"
    },
    "ex": "交差点を右に曲がる",
    "exm": {
      "en": "Turn right at intersection",
      "zh-TW": "在十字路口右轉",
      "zh-CN": "在十字路口右转",
      "ko": "돌다",
      "vi": "quay",
      "id": "berputar",
      "es": "Turn right at intersection",
      "pt": "Turn right at intersection"
    }
  },
  {
    "id": "V0285",
    "w": "しんごう",
    "r": "しんごう",
    "m": {
      "en": "traffic light",
      "zh-TW": "紅綠燈",
      "zh-CN": "红绿灯",
      "ko": "가벼운",
      "vi": "nhẹ",
      "id": "ringan",
      "es": "traffic light",
      "pt": "traffic light"
    },
    "ex": "信号を待つ",
    "exm": {
      "en": "Wait for light",
      "zh-TW": "等紅綠燈",
      "zh-CN": "等红绿灯",
      "ko": "기다리다 가벼운",
      "vi": "đợi nhẹ",
      "id": "menunggu ringan",
      "es": "Wait for light",
      "pt": "Wait for light"
    }
  },
  {
    "id": "V0286",
    "w": "かど",
    "r": "かど",
    "m": {
      "en": "corner",
      "zh-TW": "轉角",
      "zh-CN": "转角",
      "ko": "corner",
      "vi": "corner",
      "id": "corner",
      "es": "corner",
      "pt": "corner"
    },
    "ex": "角を曲がる",
    "exm": {
      "en": "Turn at corner",
      "zh-TW": "在轉角轉彎",
      "zh-CN": "在转角转弯",
      "ko": "돌다",
      "vi": "quay",
      "id": "berputar",
      "es": "Turn at corner",
      "pt": "Turn at corner"
    }
  },
  {
    "id": "V0287",
    "w": "まち",
    "r": "まち",
    "m": {
      "en": "town",
      "zh-TW": "城鎮",
      "zh-CN": "城镇",
      "ko": "town",
      "vi": "town",
      "id": "town",
      "es": "town",
      "pt": "town"
    },
    "ex": "町を歩く",
    "exm": {
      "en": "Walk in town",
      "zh-TW": "在城鎮走",
      "zh-CN": "在城镇走",
      "ko": "걷다",
      "vi": "đi bộ",
      "id": "berjalan",
      "es": "Walk in town",
      "pt": "Walk in town"
    }
  },
  {
    "id": "V0288",
    "w": "むら",
    "r": "むら",
    "m": {
      "en": "village",
      "zh-TW": "村莊",
      "zh-CN": "村庄",
      "ko": "village",
      "vi": "village",
      "id": "village",
      "es": "village",
      "pt": "village"
    },
    "ex": "小さい村",
    "exm": {
      "en": "Small village",
      "zh-TW": "小村莊",
      "zh-CN": "小村庄",
      "ko": "작은",
      "vi": "nhỏ",
      "id": "kecil",
      "es": "Small village",
      "pt": "Small village"
    }
  },
  {
    "id": "V0289",
    "w": "し",
    "r": "し",
    "m": {
      "en": "city",
      "zh-TW": "市",
      "zh-CN": "市",
      "ko": "도시",
      "vi": "thành phố",
      "id": "kota",
      "es": "city",
      "pt": "city"
    },
    "ex": "東京市",
    "exm": {
      "en": "Tokyo City",
      "zh-TW": "東京市",
      "zh-CN": "东京市",
      "ko": "도쿄 도시",
      "vi": "Tokyo thành phố",
      "id": "Tokyo kota",
      "es": "Tokyo City",
      "pt": "Tokyo City"
    }
  },
  {
    "id": "V0290",
    "w": "けん",
    "r": "けん",
    "m": {
      "en": "prefecture",
      "zh-TW": "縣",
      "zh-CN": "县",
      "ko": "prefecture",
      "vi": "prefecture",
      "id": "prefecture",
      "es": "prefecture",
      "pt": "prefecture"
    },
    "ex": "大阪府",
    "exm": {
      "en": "Osaka Prefecture",
      "zh-TW": "大阪府",
      "zh-CN": "大阪府",
      "ko": "Osaka Prefecture",
      "vi": "Osaka Prefecture",
      "id": "Osaka Prefecture",
      "es": "Osaka Prefecture",
      "pt": "Osaka Prefecture"
    }
  },
  {
    "id": "V0291",
    "w": "国",
    "r": "くに",
    "m": {
      "en": "country",
      "zh-TW": "國家",
      "zh-CN": "国家",
      "ko": "나라",
      "vi": "Quốc gia",
      "id": "Negara",
      "es": "country",
      "pt": "country"
    },
    "ex": "日本という国",
    "exm": {
      "en": "Country called Japan",
      "zh-TW": "日本這個國家",
      "zh-CN": "日本这个国家",
      "ko": "나라",
      "vi": "nước",
      "id": "negara",
      "es": "Country called Japan",
      "pt": "Country called Japan"
    }
  },
  {
    "id": "V0292",
    "w": "せかい",
    "r": "せかい",
    "m": {
      "en": "world",
      "zh-TW": "世界",
      "zh-CN": "世界",
      "ko": "world",
      "vi": "world",
      "id": "world",
      "es": "world",
      "pt": "world"
    },
    "ex": "世界を旅行する",
    "exm": {
      "en": "Travel the world",
      "zh-TW": "環遊世界",
      "zh-CN": "环游世界",
      "ko": "Travel the world",
      "vi": "Travel the world",
      "id": "Travel the world",
      "es": "Travel the world",
      "pt": "Travel the world"
    }
  },
  {
    "id": "V0293",
    "w": "外国",
    "r": "がいこく",
    "m": {
      "en": "foreign country",
      "zh-TW": "外國",
      "zh-CN": "外国",
      "ko": "나라",
      "vi": "nước",
      "id": "negara",
      "es": "foreign country",
      "pt": "foreign country"
    },
    "ex": "外国に行く",
    "exm": {
      "en": "Go abroad",
      "zh-TW": "去外國",
      "zh-CN": "去外国",
      "ko": "가다",
      "vi": "đi",
      "id": "pergi",
      "es": "Go abroad",
      "pt": "Go abroad"
    }
  },
  {
    "id": "V0294",
    "w": "山",
    "r": "やま",
    "m": {
      "en": "mountain",
      "zh-TW": "山",
      "zh-CN": "山",
      "ko": "산",
      "vi": "Núi",
      "id": "Gunung",
      "es": "mountain",
      "pt": "mountain"
    },
    "ex": "山に登る",
    "exm": {
      "en": "Climb mountain",
      "zh-TW": "爬山",
      "zh-CN": "爬山",
      "ko": "산",
      "vi": "núi",
      "id": "gunung",
      "es": "Climb mountain",
      "pt": "Climb mountain"
    },
    "syn": [
      "山岳",
      "山脈",
      "マウンテン"
    ]
  },
  {
    "id": "V0295",
    "w": "川",
    "r": "かわ",
    "m": {
      "en": "river",
      "zh-TW": "河",
      "zh-CN": "河",
      "ko": "강",
      "vi": "Sông",
      "id": "Sungai",
      "es": "river",
      "pt": "river"
    },
    "ex": "川で泳ぐ",
    "exm": {
      "en": "Swim in river",
      "zh-TW": "在河裡游泳",
      "zh-CN": "在河里游泳",
      "ko": "수영하다 강",
      "vi": "bơi sông",
      "id": "berenang sungai",
      "es": "Swim in river",
      "pt": "Swim in river"
    },
    "syn": [
      "河川",
      "河",
      "リバー"
    ]
  },
  {
    "id": "V0296",
    "w": "うみ",
    "r": "うみ",
    "m": {
      "en": "sea",
      "zh-TW": "海",
      "zh-CN": "海",
      "ko": "바다",
      "vi": "Biển",
      "id": "Laut",
      "es": "sea",
      "pt": "sea"
    },
    "ex": "海で泳ぐ",
    "exm": {
      "en": "Swim in sea",
      "zh-TW": "在海游泳",
      "zh-CN": "在海游泳",
      "ko": "수영하다 바다",
      "vi": "bơi biển",
      "id": "berenang laut",
      "es": "Swim in sea",
      "pt": "Swim in sea"
    },
    "syn": [
      "大海",
      "オーシャン",
      "海洋"
    ]
  },
  {
    "id": "V0297",
    "w": "みずうみ",
    "r": "みずうみ",
    "m": {
      "en": "lake",
      "zh-TW": "湖",
      "zh-CN": "湖",
      "ko": "lake",
      "vi": "lake",
      "id": "lake",
      "es": "lake",
      "pt": "lake"
    },
    "ex": "湖を見る",
    "exm": {
      "en": "See lake",
      "zh-TW": "看湖",
      "zh-CN": "看湖",
      "ko": "보다",
      "vi": "xem",
      "id": "melihat",
      "es": "See lake",
      "pt": "See lake"
    }
  },
  {
    "id": "V0298",
    "w": "しま",
    "r": "しま",
    "m": {
      "en": "island",
      "zh-TW": "島",
      "zh-CN": "岛",
      "ko": "island",
      "vi": "island",
      "id": "island",
      "es": "island",
      "pt": "island"
    },
    "ex": "島に行く",
    "exm": {
      "en": "Go to island",
      "zh-TW": "去島上",
      "zh-CN": "去岛上",
      "ko": "가다",
      "vi": "đi",
      "id": "pergi",
      "es": "Go to island",
      "pt": "Go to island"
    }
  },
  {
    "id": "V0299",
    "w": "森",
    "r": "もり",
    "m": {
      "en": "forest",
      "zh-TW": "森林",
      "zh-CN": "森林",
      "ko": "forest",
      "vi": "forest",
      "id": "forest",
      "es": "forest",
      "pt": "forest"
    },
    "ex": "森を歩く",
    "exm": {
      "en": "Walk in forest",
      "zh-TW": "在森林走",
      "zh-CN": "在森林走",
      "ko": "걷다",
      "vi": "đi bộ",
      "id": "berjalan",
      "es": "Walk in forest",
      "pt": "Walk in forest"
    }
  },
  {
    "id": "V0300",
    "w": "木",
    "r": "き",
    "m": {
      "en": "tree",
      "zh-TW": "樹",
      "zh-CN": "树",
      "ko": "나무",
      "vi": "Cây",
      "id": "Pohon",
      "es": "tree",
      "pt": "tree"
    },
    "ex": "木に登る",
    "exm": {
      "en": "Climb tree",
      "zh-TW": "爬樹",
      "zh-CN": "爬树",
      "ko": "나무",
      "vi": "cây",
      "id": "pohon",
      "es": "Climb tree",
      "pt": "Climb tree"
    }
  },
  {
    "id": "V0301",
    "w": "花",
    "r": "はな",
    "m": {
      "en": "flower",
      "zh-TW": "花",
      "zh-CN": "花",
      "ko": "꽃",
      "vi": "Hoa",
      "id": "Bunga",
      "es": "flower",
      "pt": "flower"
    },
    "ex": "花をあげる",
    "exm": {
      "en": "Give flowers",
      "zh-TW": "送花",
      "zh-CN": "送花",
      "ko": "주다",
      "vi": "cho",
      "id": "memberi",
      "es": "Give flowers",
      "pt": "Give flowers"
    }
  },
  {
    "id": "V0302",
    "w": "空",
    "r": "そら",
    "m": {
      "en": "sky",
      "zh-TW": "天空",
      "zh-CN": "天空",
      "ko": "하늘",
      "vi": "Bầu trời",
      "id": "Langit",
      "es": "sky",
      "pt": "sky"
    },
    "ex": "空を見る",
    "exm": {
      "en": "Look at sky",
      "zh-TW": "看天空",
      "zh-CN": "看天空",
      "ko": "하늘",
      "vi": "trời",
      "id": "langit",
      "es": "Look at sky",
      "pt": "Look at sky"
    },
    "syn": [
      "天空",
      "上空",
      "スカイ"
    ]
  },
  {
    "id": "V0303",
    "w": "くも",
    "r": "くも",
    "m": {
      "en": "cloud",
      "zh-TW": "雲",
      "zh-CN": "云",
      "ko": "cloud",
      "vi": "cloud",
      "id": "cloud",
      "es": "cloud",
      "pt": "cloud"
    },
    "ex": "雲が多い",
    "exm": {
      "en": "Many clouds",
      "zh-TW": "雲很多",
      "zh-CN": "云很多",
      "ko": "많은",
      "vi": "nhiều",
      "id": "banyak",
      "es": "Many clouds",
      "pt": "Many clouds"
    }
  },
  {
    "id": "V0304",
    "w": "ほし",
    "r": "ほし",
    "m": {
      "en": "star",
      "zh-TW": "星星",
      "zh-CN": "星星",
      "ko": "별",
      "vi": "Ngôi sao",
      "id": "Bintang",
      "es": "star",
      "pt": "star"
    },
    "ex": "星を見る",
    "exm": {
      "en": "Look at stars",
      "zh-TW": "看星星",
      "zh-CN": "看星星",
      "ko": "Look at stars",
      "vi": "Look at stars",
      "id": "Look at stars",
      "es": "Look at stars",
      "pt": "Look at stars"
    }
  },
  {
    "id": "V0305",
    "w": "月",
    "r": "つき",
    "m": {
      "en": "moon",
      "zh-TW": "月亮",
      "zh-CN": "月亮",
      "ko": "달",
      "vi": "Mặt trăng",
      "id": "Bulan",
      "es": "moon",
      "pt": "moon"
    },
    "ex": "月がきれい",
    "exm": {
      "en": "Moon is beautiful",
      "zh-TW": "月亮很美",
      "zh-CN": "月亮很美",
      "ko": "달 아름다운",
      "vi": "mặt trăng đẹp",
      "id": "bulan indah",
      "es": "Moon is beautiful",
      "pt": "Moon is beautiful"
    }
  },
  {
    "id": "V0306",
    "w": "たいよう",
    "r": "たいよう",
    "m": {
      "en": "sun",
      "zh-TW": "太陽",
      "zh-CN": "太阳",
      "ko": "태양",
      "vi": "Mặt trời",
      "id": "Matahari",
      "es": "sun",
      "pt": "sun"
    },
    "ex": "太陽が出る",
    "exm": {
      "en": "Sun comes out",
      "zh-TW": "太陽出來",
      "zh-CN": "太阳出来",
      "ko": "해",
      "vi": "mặt trời",
      "id": "matahari",
      "es": "Sun comes out",
      "pt": "Sun comes out"
    }
  },
  {
    "id": "V0307",
    "w": "天気",
    "r": "てんき",
    "m": {
      "en": "weather",
      "zh-TW": "天氣",
      "zh-CN": "天气",
      "ko": "날씨",
      "vi": "Thời tiết",
      "id": "Cuaca",
      "es": "weather",
      "pt": "weather"
    },
    "ex": "今日の天気",
    "exm": {
      "en": "Today's weather",
      "zh-TW": "今天的天氣",
      "zh-CN": "今天的天气",
      "ko": "날씨",
      "vi": "thời tiết",
      "id": "cuaca",
      "es": "Today's weather",
      "pt": "Today's weather"
    },
    "syn": [
      "天候",
      "気象",
      "空模様"
    ]
  },
  {
    "id": "V0308",
    "w": "雨",
    "r": "あめ",
    "m": {
      "en": "rain",
      "zh-TW": "雨",
      "zh-CN": "雨",
      "ko": "비",
      "vi": "Mưa",
      "id": "Hujan",
      "es": "rain",
      "pt": "rain"
    },
    "ex": "雨が降る",
    "exm": {
      "en": "Rain falls",
      "zh-TW": "下雨",
      "zh-CN": "下雨",
      "ko": "비",
      "vi": "mưa",
      "id": "hujan",
      "es": "Rain falls",
      "pt": "Rain falls"
    }
  },
  {
    "id": "V0309",
    "w": "雪",
    "r": "ゆき",
    "m": {
      "en": "snow",
      "zh-TW": "雪",
      "zh-CN": "雪",
      "ko": "눈",
      "vi": "Tuyết",
      "id": "Salju",
      "es": "snow",
      "pt": "snow"
    },
    "ex": "雪が降る",
    "exm": {
      "en": "Snow falls",
      "zh-TW": "下雪",
      "zh-CN": "下雪",
      "ko": "눈",
      "vi": "tuyết",
      "id": "salju",
      "es": "Snow falls",
      "pt": "Snow falls"
    }
  },
  {
    "id": "V0310",
    "w": "かぜ",
    "r": "かぜ",
    "m": {
      "en": "wind",
      "zh-TW": "風",
      "zh-CN": "风",
      "ko": "바람",
      "vi": "Gió",
      "id": "Angin",
      "es": "wind",
      "pt": "wind"
    },
    "ex": "風が吹く",
    "exm": {
      "en": "Wind blows",
      "zh-TW": "風吹",
      "zh-CN": "风吹",
      "ko": "Wind blows",
      "vi": "Wind blows",
      "id": "Wind blows",
      "es": "Wind blows",
      "pt": "Wind blows"
    }
  },
  {
    "id": "V0311",
    "w": "はる",
    "r": "はる",
    "m": {
      "en": "spring",
      "zh-TW": "春天",
      "zh-CN": "春天",
      "ko": "spring",
      "vi": "spring",
      "id": "spring",
      "es": "spring",
      "pt": "spring"
    },
    "ex": "春が来た",
    "exm": {
      "en": "Spring came",
      "zh-TW": "春天來了",
      "zh-CN": "春天来了",
      "ko": "Spring came",
      "vi": "Spring came",
      "id": "Spring came",
      "es": "Spring came",
      "pt": "Spring came"
    }
  },
  {
    "id": "V0312",
    "w": "なつ",
    "r": "なつ",
    "m": {
      "en": "summer",
      "zh-TW": "夏天",
      "zh-CN": "夏天",
      "ko": "summer",
      "vi": "summer",
      "id": "summer",
      "es": "summer",
      "pt": "summer"
    },
    "ex": "夏は暑い",
    "exm": {
      "en": "Summer is hot",
      "zh-TW": "夏天很熱",
      "zh-CN": "夏天很热",
      "ko": "뜨거운",
      "vi": "nóng",
      "id": "panas",
      "es": "Summer is hot",
      "pt": "Summer is hot"
    }
  },
  {
    "id": "V0313",
    "w": "あき",
    "r": "あき",
    "m": {
      "en": "autumn",
      "zh-TW": "秋天",
      "zh-CN": "秋天",
      "ko": "autumn",
      "vi": "autumn",
      "id": "autumn",
      "es": "autumn",
      "pt": "autumn"
    },
    "ex": "秋は涼しい",
    "exm": {
      "en": "Autumn is cool",
      "zh-TW": "秋天很涼爽",
      "zh-CN": "秋天很凉爽",
      "ko": "시원한",
      "vi": "mát",
      "id": "sejuk",
      "es": "Autumn is cool",
      "pt": "Autumn is cool"
    }
  },
  {
    "id": "V0314",
    "w": "ふゆ",
    "r": "ふゆ",
    "m": {
      "en": "winter",
      "zh-TW": "冬天",
      "zh-CN": "冬天",
      "ko": "winter",
      "vi": "winter",
      "id": "winter",
      "es": "winter",
      "pt": "winter"
    },
    "ex": "冬は寒い",
    "exm": {
      "en": "Winter is cold",
      "zh-TW": "冬天很冷",
      "zh-CN": "冬天很冷",
      "ko": "차가운",
      "vi": "lạnh",
      "id": "dingin",
      "es": "Winter is cold",
      "pt": "Winter is cold"
    }
  },
  {
    "id": "V0315",
    "w": "あさ",
    "r": "あさ",
    "m": {
      "en": "morning",
      "zh-TW": "早上",
      "zh-CN": "早上",
      "ko": "아침",
      "vi": "Buổi sáng",
      "id": "Pagi",
      "es": "morning",
      "pt": "morning"
    },
    "ex": "朝起きる",
    "exm": {
      "en": "Wake up morning",
      "zh-TW": "早上起床",
      "zh-CN": "早上起床",
      "ko": "일어나다 위로 아침",
      "vi": "thức dậy lên sáng",
      "id": "bangun naik pagi",
      "es": "Wake up morning",
      "pt": "Wake up morning"
    }
  },
  {
    "id": "V0316",
    "w": "ひる",
    "r": "ひる",
    "m": {
      "en": "noon",
      "zh-TW": "中午",
      "zh-CN": "中午",
      "ko": "noon",
      "vi": "noon",
      "id": "noon",
      "es": "noon",
      "pt": "noon"
    },
    "ex": "昼ご飯を食べる",
    "exm": {
      "en": "Eat lunch",
      "zh-TW": "吃午餐",
      "zh-CN": "吃午餐",
      "ko": "먹다 점심",
      "vi": "ăn bữa trưa",
      "id": "makan makan siang",
      "es": "Eat lunch",
      "pt": "Eat lunch"
    }
  },
  {
    "id": "V0317",
    "w": "よる",
    "r": "よる",
    "m": {
      "en": "night",
      "zh-TW": "夜晚",
      "zh-CN": "夜晚",
      "ko": "밤",
      "vi": "Đêm",
      "id": "Malam",
      "es": "night",
      "pt": "night"
    },
    "ex": "夜寝る",
    "exm": {
      "en": "Sleep at night",
      "zh-TW": "晚上睡覺",
      "zh-CN": "晚上睡觉",
      "ko": "자다 밤",
      "vi": "ngủ đêm",
      "id": "tidur malam",
      "es": "Sleep at night",
      "pt": "Sleep at night"
    }
  },
  {
    "id": "V0318",
    "w": "今日",
    "r": "きょう",
    "m": {
      "en": "today",
      "zh-TW": "今天",
      "zh-CN": "今天",
      "ko": "오늘",
      "vi": "Hôm nay",
      "id": "Hari ini",
      "es": "today",
      "pt": "today"
    },
    "ex": "今日は月曜日",
    "exm": {
      "en": "Today is Monday",
      "zh-TW": "今天是星期一",
      "zh-CN": "今天是星期一",
      "ko": "오늘 월요일",
      "vi": "hôm nay thứ hai",
      "id": "hari ini Senin",
      "es": "Today is Monday",
      "pt": "Today is Monday"
    }
  },
  {
    "id": "V0319",
    "w": "明日",
    "r": "あした",
    "m": {
      "en": "tomorrow",
      "zh-TW": "明天",
      "zh-CN": "明天",
      "ko": "내일",
      "vi": "Ngày mai",
      "id": "Besok",
      "es": "tomorrow",
      "pt": "tomorrow"
    },
    "ex": "明日会おう",
    "exm": {
      "en": "Let's meet tomorrow",
      "zh-TW": "明天見",
      "zh-CN": "明天见",
      "ko": "만나다 내일",
      "vi": "gặp ngày mai",
      "id": "bertemu besok",
      "es": "Let's meet tomorrow",
      "pt": "Let's meet tomorrow"
    }
  },
  {
    "id": "V0320",
    "w": "きのう",
    "r": "きのう",
    "m": {
      "en": "yesterday",
      "zh-TW": "昨天",
      "zh-CN": "昨天",
      "ko": "어제",
      "vi": "Hôm qua",
      "id": "Kemarin",
      "es": "yesterday",
      "pt": "yesterday"
    },
    "ex": "昨日は休み",
    "exm": {
      "en": "Yesterday was off",
      "zh-TW": "昨天休息",
      "zh-CN": "昨天休息",
      "ko": "어제 쉬는",
      "vi": "hôm qua nghỉ",
      "id": "kemarin libur",
      "es": "Yesterday was off",
      "pt": "Yesterday was off"
    }
  },
  {
    "id": "V0321",
    "w": "今",
    "r": "いま",
    "m": {
      "en": "now",
      "zh-TW": "現在",
      "zh-CN": "现在",
      "ko": "지금",
      "vi": "Bây giờ",
      "id": "Sekarang",
      "es": "now",
      "pt": "now"
    },
    "ex": "今何時ですか",
    "exm": {
      "en": "What time now?",
      "zh-TW": "現在幾點",
      "zh-CN": "现在几点",
      "ko": "What time now?",
      "vi": "What time now?",
      "id": "What time now?",
      "es": "What time now?",
      "pt": "What time now?"
    }
  },
  {
    "id": "V0322",
    "w": "後で",
    "r": "あとで",
    "m": {
      "en": "later",
      "zh-TW": "之後",
      "zh-CN": "之后",
      "ko": "나중에",
      "vi": "sau",
      "id": "nanti",
      "es": "later",
      "pt": "later"
    },
    "ex": "後で電話する",
    "exm": {
      "en": "Call later",
      "zh-TW": "之後打電話",
      "zh-CN": "之后打电话",
      "ko": "전화하다 나중에",
      "vi": "gọi sau",
      "id": "menelepon nanti",
      "es": "Call later",
      "pt": "Call later"
    }
  },
  {
    "id": "V0323",
    "w": "月曜日",
    "r": "げつようび",
    "m": {
      "en": "Monday",
      "zh-TW": "星期一",
      "zh-CN": "星期一",
      "ko": "월요일",
      "vi": "thứ hai",
      "id": "Senin",
      "es": "Monday",
      "pt": "Monday"
    },
    "ex": "月曜日に会う",
    "exm": {
      "en": "Meet on Monday",
      "zh-TW": "星期一見",
      "zh-CN": "星期一见",
      "ko": "만나다 월요일",
      "vi": "gặp thứ hai",
      "id": "bertemu Senin",
      "es": "Meet on Monday",
      "pt": "Meet on Monday"
    }
  },
  {
    "id": "V0324",
    "w": "火曜日",
    "r": "かようび",
    "m": {
      "en": "Tuesday",
      "zh-TW": "星期二",
      "zh-CN": "星期二",
      "ko": "화요일",
      "vi": "thứ ba",
      "id": "Selasa",
      "es": "Tuesday",
      "pt": "Tuesday"
    },
    "ex": "火曜日は休み",
    "exm": {
      "en": "Tuesday off",
      "zh-TW": "星期二休息",
      "zh-CN": "星期二休息",
      "ko": "화요일 쉬는",
      "vi": "thứ ba nghỉ",
      "id": "Selasa libur",
      "es": "Tuesday off",
      "pt": "Tuesday off"
    }
  },
  {
    "id": "V0325",
    "w": "水曜日",
    "r": "すいようび",
    "m": {
      "en": "Wednesday",
      "zh-TW": "星期三",
      "zh-CN": "星期三",
      "ko": "수요일",
      "vi": "thứ tư",
      "id": "Rabu",
      "es": "Wednesday",
      "pt": "Wednesday"
    },
    "ex": "水曜日に来る",
    "exm": {
      "en": "Come Wednesday",
      "zh-TW": "星期三來",
      "zh-CN": "星期三来",
      "ko": "오다 수요일",
      "vi": "đến thứ tư",
      "id": "datang Rabu",
      "es": "Come Wednesday",
      "pt": "Come Wednesday"
    }
  },
  {
    "id": "V0326",
    "w": "木曜日",
    "r": "もくようび",
    "m": {
      "en": "Thursday",
      "zh-TW": "星期四",
      "zh-CN": "星期四",
      "ko": "목요일",
      "vi": "thứ năm",
      "id": "Kamis",
      "es": "Thursday",
      "pt": "Thursday"
    },
    "ex": "木曜日は忙しい",
    "exm": {
      "en": "Thursday busy",
      "zh-TW": "星期四很忙",
      "zh-CN": "星期四很忙",
      "ko": "목요일 바쁜",
      "vi": "thứ năm bận",
      "id": "Kamis sibuk",
      "es": "Thursday busy",
      "pt": "Thursday busy"
    }
  },
  {
    "id": "V0327",
    "w": "金曜日",
    "r": "きんようび",
    "m": {
      "en": "Friday",
      "zh-TW": "星期五",
      "zh-CN": "星期五",
      "ko": "금요일",
      "vi": "thứ sáu",
      "id": "Jumat",
      "es": "Friday",
      "pt": "Friday"
    },
    "ex": "金曜日に終わる",
    "exm": {
      "en": "Finish Friday",
      "zh-TW": "星期五結束",
      "zh-CN": "星期五结束",
      "ko": "끝내다 금요일",
      "vi": "kết thúc thứ sáu",
      "id": "selesai Jumat",
      "es": "Finish Friday",
      "pt": "Finish Friday"
    }
  },
  {
    "id": "V0328",
    "w": "土曜日",
    "r": "どようび",
    "m": {
      "en": "Saturday",
      "zh-TW": "星期六",
      "zh-CN": "星期六",
      "ko": "토요일",
      "vi": "thứ bảy",
      "id": "Sabtu",
      "es": "Saturday",
      "pt": "Saturday"
    },
    "ex": "土曜日に遊ぶ",
    "exm": {
      "en": "Play Saturday",
      "zh-TW": "星期六玩",
      "zh-CN": "星期六玩",
      "ko": "놀다 토요일",
      "vi": "chơi thứ bảy",
      "id": "bermain Sabtu",
      "es": "Play Saturday",
      "pt": "Play Saturday"
    }
  },
  {
    "id": "V0329",
    "w": "日曜日",
    "r": "にちようび",
    "m": {
      "en": "Sunday",
      "zh-TW": "星期日",
      "zh-CN": "星期日",
      "ko": "일요일",
      "vi": "chủ nhật",
      "id": "Minggu",
      "es": "Sunday",
      "pt": "Sunday"
    },
    "ex": "日曜日は休み",
    "exm": {
      "en": "Sunday off",
      "zh-TW": "星期日休息",
      "zh-CN": "星期日休息",
      "ko": "일요일 쉬는",
      "vi": "chủ nhật nghỉ",
      "id": "Minggu libur",
      "es": "Sunday off",
      "pt": "Sunday off"
    }
  },
  {
    "id": "V0330",
    "w": "しゅうまつ",
    "r": "しゅうまつ",
    "m": {
      "en": "weekend",
      "zh-TW": "週末",
      "zh-CN": "周末",
      "ko": "weekend",
      "vi": "weekend",
      "id": "weekend",
      "es": "weekend",
      "pt": "weekend"
    },
    "ex": "週末に旅行",
    "exm": {
      "en": "Travel weekend",
      "zh-TW": "週末旅行",
      "zh-CN": "周末旅行",
      "ko": "Travel weekend",
      "vi": "Travel weekend",
      "id": "Travel weekend",
      "es": "Travel weekend",
      "pt": "Travel weekend"
    }
  },
  {
    "id": "V0331",
    "w": "今週",
    "r": "こんしゅう",
    "m": {
      "en": "this week",
      "zh-TW": "這週",
      "zh-CN": "这周",
      "ko": "이번 주",
      "vi": "tuần này",
      "id": "minggu ini",
      "es": "this week",
      "pt": "this week"
    },
    "ex": "今週は忙しい",
    "exm": {
      "en": "This week busy",
      "zh-TW": "這週很忙",
      "zh-CN": "这周很忙",
      "ko": "주 바쁜",
      "vi": "tuần bận",
      "id": "minggu sibuk",
      "es": "This week busy",
      "pt": "This week busy"
    }
  },
  {
    "id": "V0332",
    "w": "来週",
    "r": "らいしゅう",
    "m": {
      "en": "next week",
      "zh-TW": "下週",
      "zh-CN": "下周",
      "ko": "주",
      "vi": "tuần",
      "id": "minggu",
      "es": "next week",
      "pt": "next week"
    },
    "ex": "来週会おう",
    "exm": {
      "en": "Meet next week",
      "zh-TW": "下週見",
      "zh-CN": "下周见",
      "ko": "만나다 주",
      "vi": "gặp tuần",
      "id": "bertemu minggu",
      "es": "Meet next week",
      "pt": "Meet next week"
    }
  },
  {
    "id": "V0333",
    "w": "先週",
    "r": "せんしゅう",
    "m": {
      "en": "last week",
      "zh-TW": "上週",
      "zh-CN": "上周",
      "ko": "주",
      "vi": "tuần",
      "id": "minggu",
      "es": "last week",
      "pt": "last week"
    },
    "ex": "先週行った",
    "exm": {
      "en": "Went last week",
      "zh-TW": "上週去了",
      "zh-CN": "上周去了",
      "ko": "주",
      "vi": "tuần",
      "id": "minggu",
      "es": "Went last week",
      "pt": "Went last week"
    }
  },
  {
    "id": "V0334",
    "w": "今月",
    "r": "こんげつ",
    "m": {
      "en": "this month",
      "zh-TW": "這個月",
      "zh-CN": "这个月",
      "ko": "달",
      "vi": "tháng",
      "id": "bulan",
      "es": "this month",
      "pt": "this month"
    },
    "ex": "今月は忙しい",
    "exm": {
      "en": "This month busy",
      "zh-TW": "這個月很忙",
      "zh-CN": "这个月很忙",
      "ko": "달 바쁜",
      "vi": "tháng bận",
      "id": "bulan sibuk",
      "es": "This month busy",
      "pt": "This month busy"
    }
  },
  {
    "id": "V0335",
    "w": "来月",
    "r": "らいげつ",
    "m": {
      "en": "next month",
      "zh-TW": "下個月",
      "zh-CN": "下个月",
      "ko": "다음 달",
      "vi": "tháng sau",
      "id": "bulan depan",
      "es": "next month",
      "pt": "next month"
    },
    "ex": "来月旅行する",
    "exm": {
      "en": "Travel next month",
      "zh-TW": "下個月旅行",
      "zh-CN": "下个月旅行",
      "ko": "달",
      "vi": "tháng",
      "id": "bulan",
      "es": "Travel next month",
      "pt": "Travel next month"
    }
  },
  {
    "id": "V0336",
    "w": "先月",
    "r": "せんげつ",
    "m": {
      "en": "last month",
      "zh-TW": "上個月",
      "zh-CN": "上个月",
      "ko": "달",
      "vi": "tháng",
      "id": "bulan",
      "es": "last month",
      "pt": "last month"
    },
    "ex": "先月買った",
    "exm": {
      "en": "Bought last month",
      "zh-TW": "上個月買的",
      "zh-CN": "上个月买的",
      "ko": "달",
      "vi": "tháng",
      "id": "bulan",
      "es": "Bought last month",
      "pt": "Bought last month"
    }
  },
  {
    "id": "V0337",
    "w": "今年",
    "r": "ことし",
    "m": {
      "en": "this year",
      "zh-TW": "今年",
      "zh-CN": "今年",
      "ko": "년",
      "vi": "năm",
      "id": "tahun",
      "es": "this year",
      "pt": "this year"
    },
    "ex": "今年は2024年",
    "exm": {
      "en": "This year 2024",
      "zh-TW": "今年2024年",
      "zh-CN": "今年2024年",
      "ko": "년",
      "vi": "năm",
      "id": "tahun",
      "es": "This year 2024",
      "pt": "This year 2024"
    }
  },
  {
    "id": "V0338",
    "w": "来年",
    "r": "らいねん",
    "m": {
      "en": "next year",
      "zh-TW": "明年",
      "zh-CN": "明年",
      "ko": "년",
      "vi": "năm",
      "id": "tahun",
      "es": "next year",
      "pt": "next year"
    },
    "ex": "来年結婚する",
    "exm": {
      "en": "Marry next year",
      "zh-TW": "明年結婚",
      "zh-CN": "明年结婚",
      "ko": "년",
      "vi": "năm",
      "id": "tahun",
      "es": "Marry next year",
      "pt": "Marry next year"
    }
  },
  {
    "id": "V0339",
    "w": "きょねん",
    "r": "きょねん",
    "m": {
      "en": "last year",
      "zh-TW": "去年",
      "zh-CN": "去年",
      "ko": "작년",
      "vi": "năm ngoái",
      "id": "tahun lalu",
      "es": "last year",
      "pt": "last year"
    },
    "ex": "去年日本に行った",
    "exm": {
      "en": "Went Japan last year",
      "zh-TW": "去年去日本",
      "zh-CN": "去年去日本",
      "ko": "년",
      "vi": "năm",
      "id": "tahun",
      "es": "Went Japan last year",
      "pt": "Went Japan last year"
    }
  },
  {
    "id": "V0340",
    "w": "毎日",
    "r": "まいにち",
    "m": {
      "en": "every day",
      "zh-TW": "每天",
      "zh-CN": "每天",
      "ko": "매일",
      "vi": "mỗi ngày",
      "id": "setiap hari",
      "es": "every day",
      "pt": "every day"
    },
    "ex": "毎日勉強する",
    "exm": {
      "en": "Study daily",
      "zh-TW": "每天學習",
      "zh-CN": "每天学习",
      "ko": "공부하다",
      "vi": "học",
      "id": "belajar",
      "es": "Study daily",
      "pt": "Study daily"
    }
  },
  {
    "id": "V0341",
    "w": "毎週",
    "r": "まいしゅう",
    "m": {
      "en": "every week",
      "zh-TW": "每週",
      "zh-CN": "每周",
      "ko": "매주",
      "vi": "mỗi tuần",
      "id": "setiap minggu",
      "es": "every week",
      "pt": "every week"
    },
    "ex": "毎週日曜日に",
    "exm": {
      "en": "Every Sunday",
      "zh-TW": "每週日",
      "zh-CN": "每周日",
      "ko": "일요일",
      "vi": "chủ nhật",
      "id": "Minggu",
      "es": "Every Sunday",
      "pt": "Every Sunday"
    }
  },
  {
    "id": "V0342",
    "w": "毎月",
    "r": "まいつき",
    "m": {
      "en": "every month",
      "zh-TW": "每月",
      "zh-CN": "每月",
      "ko": "매달",
      "vi": "mỗi tháng",
      "id": "setiap bulan",
      "es": "every month",
      "pt": "every month"
    },
    "ex": "毎月一回",
    "exm": {
      "en": "Once a month",
      "zh-TW": "每月一次",
      "zh-CN": "每月一次",
      "ko": "달",
      "vi": "tháng",
      "id": "bulan",
      "es": "Once a month",
      "pt": "Once a month"
    }
  },
  {
    "id": "V0343",
    "w": "毎年",
    "r": "まいとし",
    "m": {
      "en": "every year",
      "zh-TW": "每年",
      "zh-CN": "每年",
      "ko": "년",
      "vi": "năm",
      "id": "tahun",
      "es": "every year",
      "pt": "every year"
    },
    "ex": "毎年旅行する",
    "exm": {
      "en": "Travel yearly",
      "zh-TW": "每年旅行",
      "zh-CN": "每年旅行",
      "ko": "Travel yearly",
      "vi": "Travel yearly",
      "id": "Travel yearly",
      "es": "Travel yearly",
      "pt": "Travel yearly"
    }
  },
  {
    "id": "V0344",
    "w": "時間",
    "r": "じかん",
    "m": {
      "en": "time",
      "zh-TW": "時間",
      "zh-CN": "时间",
      "ko": "시간",
      "vi": "Thời gian",
      "id": "Waktu",
      "es": "time",
      "pt": "time"
    },
    "ex": "時間がない",
    "exm": {
      "en": "No time",
      "zh-TW": "沒時間",
      "zh-CN": "没时间",
      "ko": "시간",
      "vi": "thời gian",
      "id": "waktu",
      "es": "No time",
      "pt": "No time"
    },
    "syn": [
      "時刻",
      "タイム",
      "時"
    ]
  },
  {
    "id": "V0345",
    "w": "午前",
    "r": "ごぜん",
    "m": {
      "en": "morning/AM",
      "zh-TW": "上午",
      "zh-CN": "上午",
      "ko": "morning/AM",
      "vi": "morning/AM",
      "id": "morning/AM",
      "es": "morning/AM",
      "pt": "morning/AM"
    },
    "ex": "午前中に",
    "exm": {
      "en": "In the morning",
      "zh-TW": "在上午",
      "zh-CN": "在上午",
      "ko": "아침",
      "vi": "sáng",
      "id": "pagi",
      "es": "In the morning",
      "pt": "In the morning"
    }
  },
  {
    "id": "V0346",
    "w": "午後",
    "r": "ごご",
    "m": {
      "en": "afternoon/PM",
      "zh-TW": "下午",
      "zh-CN": "下午",
      "ko": "afternoon/PM",
      "vi": "afternoon/PM",
      "id": "afternoon/PM",
      "es": "afternoon/PM",
      "pt": "afternoon/PM"
    },
    "ex": "午後に会う",
    "exm": {
      "en": "Meet afternoon",
      "zh-TW": "下午見",
      "zh-CN": "下午见",
      "ko": "만나다 오후",
      "vi": "gặp chiều",
      "id": "bertemu sore",
      "es": "Meet afternoon",
      "pt": "Meet afternoon"
    }
  },
  {
    "id": "V0347",
    "w": "ばん",
    "r": "ばん",
    "m": {
      "en": "evening",
      "zh-TW": "晚上",
      "zh-CN": "晚上",
      "ko": "저녁",
      "vi": "Buổi tối",
      "id": "Malam",
      "es": "evening",
      "pt": "evening"
    },
    "ex": "晩ご飯を食べる",
    "exm": {
      "en": "Eat dinner",
      "zh-TW": "吃晚餐",
      "zh-CN": "吃晚餐",
      "ko": "먹다 저녁식사",
      "vi": "ăn bữa tối",
      "id": "makan makan malam",
      "es": "Eat dinner",
      "pt": "Eat dinner"
    }
  },
  {
    "id": "V0348",
    "w": "ゆうがた",
    "r": "ゆうがた",
    "m": {
      "en": "evening",
      "zh-TW": "晚上",
      "zh-CN": "晚上",
      "ko": "저녁",
      "vi": "Buổi tối",
      "id": "Malam",
      "es": "evening",
      "pt": "evening"
    },
    "ex": "夕方に帰る",
    "exm": {
      "en": "Return evening",
      "zh-TW": "傍晚回來",
      "zh-CN": "傍晚回来",
      "ko": "돌아가다 저녁",
      "vi": "trở về tối",
      "id": "kembali malam",
      "es": "Return evening",
      "pt": "Return evening"
    }
  },
  {
    "id": "V0349",
    "w": "分",
    "r": "ふん",
    "m": {
      "en": "minute",
      "zh-TW": "分鐘",
      "zh-CN": "分钟",
      "ko": "분",
      "vi": "Phút",
      "id": "Menit",
      "es": "minute",
      "pt": "minute"
    },
    "ex": "10分待つ",
    "exm": {
      "en": "Wait 10 minutes",
      "zh-TW": "等10分鐘",
      "zh-CN": "等10分钟",
      "ko": "기다리다",
      "vi": "đợi",
      "id": "menunggu",
      "es": "Wait 10 minutes",
      "pt": "Wait 10 minutes"
    }
  },
  {
    "id": "V0350",
    "w": "びょう",
    "r": "びょう",
    "m": {
      "en": "second",
      "zh-TW": "秒",
      "zh-CN": "秒",
      "ko": "초",
      "vi": "Giây",
      "id": "Detik",
      "es": "second",
      "pt": "second"
    },
    "ex": "30秒待つ",
    "exm": {
      "en": "Wait 30 seconds",
      "zh-TW": "等30秒",
      "zh-CN": "等30秒",
      "ko": "기다리다",
      "vi": "đợi",
      "id": "menunggu",
      "es": "Wait 30 seconds",
      "pt": "Wait 30 seconds"
    }
  },
  {
    "id": "V0351",
    "w": "もの",
    "r": "もの",
    "m": {
      "en": "thing",
      "zh-TW": "東西",
      "zh-CN": "东西",
      "ko": "thing",
      "vi": "thing",
      "id": "thing",
      "es": "thing",
      "pt": "thing"
    },
    "ex": "何か物を買う",
    "exm": {
      "en": "Buy something",
      "zh-TW": "買東西",
      "zh-CN": "买东西",
      "ko": "사다",
      "vi": "mua",
      "id": "membeli",
      "es": "Buy something",
      "pt": "Buy something"
    }
  },
  {
    "id": "V0352",
    "w": "お金",
    "r": "おかね",
    "m": {
      "en": "money",
      "zh-TW": "錢",
      "zh-CN": "钱",
      "ko": "돈",
      "vi": "Tiền",
      "id": "Uang",
      "es": "money",
      "pt": "money"
    },
    "ex": "お金を払う",
    "exm": {
      "en": "Pay money",
      "zh-TW": "付錢",
      "zh-CN": "付钱",
      "ko": "지불하다",
      "vi": "trả",
      "id": "membayar",
      "es": "Pay money",
      "pt": "Pay money"
    }
  },
  {
    "id": "V0353",
    "w": "さいふ",
    "r": "さいふ",
    "m": {
      "en": "wallet",
      "zh-TW": "錢包",
      "zh-CN": "钱包",
      "ko": "wallet",
      "vi": "wallet",
      "id": "wallet",
      "es": "wallet",
      "pt": "wallet"
    },
    "ex": "財布を落とす",
    "exm": {
      "en": "Drop wallet",
      "zh-TW": "掉錢包",
      "zh-CN": "掉钱包",
      "ko": "Drop wallet",
      "vi": "Drop wallet",
      "id": "Drop wallet",
      "es": "Drop wallet",
      "pt": "Drop wallet"
    }
  },
  {
    "id": "V0354",
    "w": "かぎ",
    "r": "かぎ",
    "m": {
      "en": "key",
      "zh-TW": "鑰匙",
      "zh-CN": "钥匙",
      "ko": "key",
      "vi": "key",
      "id": "key",
      "es": "key",
      "pt": "key"
    },
    "ex": "鍵をかける",
    "exm": {
      "en": "Lock",
      "zh-TW": "鎖門",
      "zh-CN": "锁门",
      "ko": "Lock",
      "vi": "Lock",
      "id": "Lock",
      "es": "Lock",
      "pt": "Lock"
    }
  },
  {
    "id": "V0355",
    "w": "かさ",
    "r": "かさ",
    "m": {
      "en": "umbrella",
      "zh-TW": "雨傘",
      "zh-CN": "雨伞",
      "ko": "우산",
      "vi": "Ô",
      "id": "Payung",
      "es": "umbrella",
      "pt": "umbrella"
    },
    "ex": "傘を持つ",
    "exm": {
      "en": "Bring umbrella",
      "zh-TW": "帶傘",
      "zh-CN": "带伞",
      "ko": "Bring umbrella",
      "vi": "Bring umbrella",
      "id": "Bring umbrella",
      "es": "Bring umbrella",
      "pt": "Bring umbrella"
    }
  },
  {
    "id": "V0356",
    "w": "かばん",
    "r": "かばん",
    "m": {
      "en": "bag",
      "zh-TW": "包",
      "zh-CN": "包",
      "ko": "가방",
      "vi": "Túi",
      "id": "Tas",
      "es": "bag",
      "pt": "bag"
    },
    "ex": "かばんを持つ",
    "exm": {
      "en": "Carry bag",
      "zh-TW": "拿包",
      "zh-CN": "拿包",
      "ko": "나르다",
      "vi": "mang",
      "id": "membawa",
      "es": "Carry bag",
      "pt": "Carry bag"
    }
  },
  {
    "id": "V0357",
    "w": "にもつ",
    "r": "にもつ",
    "m": {
      "en": "luggage",
      "zh-TW": "行李",
      "zh-CN": "行李",
      "ko": "luggage",
      "vi": "luggage",
      "id": "luggage",
      "es": "luggage",
      "pt": "luggage"
    },
    "ex": "荷物を預ける",
    "exm": {
      "en": "Check luggage",
      "zh-TW": "寄放行李",
      "zh-CN": "寄放行李",
      "ko": "Check luggage",
      "vi": "Check luggage",
      "id": "Check luggage",
      "es": "Check luggage",
      "pt": "Check luggage"
    }
  },
  {
    "id": "V0358",
    "w": "本",
    "r": "ほん",
    "m": {
      "en": "book",
      "zh-TW": "書",
      "zh-CN": "书",
      "ko": "책",
      "vi": "Sách",
      "id": "Buku",
      "es": "book",
      "pt": "book"
    },
    "ex": "本を読む",
    "exm": {
      "en": "Read book",
      "zh-TW": "看書",
      "zh-CN": "看书",
      "ko": "읽다 책",
      "vi": "đọc sách",
      "id": "membaca buku",
      "es": "Read book",
      "pt": "Read book"
    }
  },
  {
    "id": "V0359",
    "w": "ざっし",
    "r": "ざっし",
    "m": {
      "en": "magazine",
      "zh-TW": "雜誌",
      "zh-CN": "杂志",
      "ko": "잡지",
      "vi": "tạp chí",
      "id": "majalah",
      "es": "magazine",
      "pt": "magazine"
    },
    "ex": "雑誌を買う",
    "exm": {
      "en": "Buy magazine",
      "zh-TW": "買雜誌",
      "zh-CN": "买杂志",
      "ko": "사다 잡지",
      "vi": "mua tạp chí",
      "id": "membeli majalah",
      "es": "Buy magazine",
      "pt": "Buy magazine"
    }
  },
  {
    "id": "V0360",
    "w": "しんぶん",
    "r": "しんぶん",
    "m": {
      "en": "newspaper",
      "zh-TW": "報紙",
      "zh-CN": "报纸",
      "ko": "새롭다",
      "vi": "mới",
      "id": "baru",
      "es": "newspaper",
      "pt": "newspaper"
    },
    "ex": "新聞を読む",
    "exm": {
      "en": "Read newspaper",
      "zh-TW": "看報紙",
      "zh-CN": "看报纸",
      "ko": "읽다 신문",
      "vi": "đọc báo",
      "id": "membaca koran",
      "es": "Read newspaper",
      "pt": "Read newspaper"
    }
  },
  {
    "id": "V0361",
    "w": "てがみ",
    "r": "てがみ",
    "m": {
      "en": "letter",
      "zh-TW": "信",
      "zh-CN": "信",
      "ko": "편지",
      "vi": "thư",
      "id": "surat",
      "es": "letter",
      "pt": "letter"
    },
    "ex": "手紙を書く",
    "exm": {
      "en": "Write letter",
      "zh-TW": "寫信",
      "zh-CN": "写信",
      "ko": "쓰다 편지",
      "vi": "viết thư",
      "id": "menulis surat",
      "es": "Write letter",
      "pt": "Write letter"
    }
  },
  {
    "id": "V0362",
    "w": "しゃしん",
    "r": "しゃしん",
    "m": {
      "en": "photo",
      "zh-TW": "照片",
      "zh-CN": "照片",
      "ko": "사진",
      "vi": "Ảnh",
      "id": "Foto",
      "es": "photo",
      "pt": "photo"
    },
    "ex": "写真を撮る",
    "exm": {
      "en": "Take photo",
      "zh-TW": "拍照",
      "zh-CN": "拍照",
      "ko": "가지다",
      "vi": "lấy",
      "id": "mengambil",
      "es": "Take photo",
      "pt": "Take photo"
    }
  },
  {
    "id": "V0363",
    "w": "絵",
    "r": "え",
    "m": {
      "en": "picture",
      "zh-TW": "畫",
      "zh-CN": "画",
      "ko": "picture",
      "vi": "picture",
      "id": "picture",
      "es": "picture",
      "pt": "picture"
    },
    "ex": "絵を描く",
    "exm": {
      "en": "Draw picture",
      "zh-TW": "畫畫",
      "zh-CN": "画画",
      "ko": "Draw picture",
      "vi": "Draw picture",
      "id": "Draw picture",
      "es": "Draw picture",
      "pt": "Draw picture"
    }
  },
  {
    "id": "V0364",
    "w": "ちず",
    "r": "ちず",
    "m": {
      "en": "map",
      "zh-TW": "地圖",
      "zh-CN": "地图",
      "ko": "map",
      "vi": "map",
      "id": "map",
      "es": "map",
      "pt": "map"
    },
    "ex": "地図を見る",
    "exm": {
      "en": "Look at map",
      "zh-TW": "看地圖",
      "zh-CN": "看地图",
      "ko": "Look at map",
      "vi": "Look at map",
      "id": "Look at map",
      "es": "Look at map",
      "pt": "Look at map"
    }
  },
  {
    "id": "V0365",
    "w": "かみ",
    "r": "かみ",
    "m": {
      "en": "paper",
      "zh-TW": "紙",
      "zh-CN": "纸",
      "ko": "종이",
      "vi": "Giấy",
      "id": "Kertas",
      "es": "paper",
      "pt": "paper"
    },
    "ex": "紙に書く",
    "exm": {
      "en": "Write on paper",
      "zh-TW": "寫在紙上",
      "zh-CN": "写在纸上",
      "ko": "쓰다",
      "vi": "viết",
      "id": "menulis",
      "es": "Write on paper",
      "pt": "Write on paper"
    }
  },
  {
    "id": "V0366",
    "w": "ペン",
    "r": "ペン",
    "m": {
      "en": "pen",
      "zh-TW": "筆",
      "zh-CN": "笔",
      "ko": "펜",
      "vi": "Bút",
      "id": "Pena",
      "es": "pen",
      "pt": "pen"
    },
    "ex": "ペンで書く",
    "exm": {
      "en": "Write with pen",
      "zh-TW": "用筆寫",
      "zh-CN": "用笔写",
      "ko": "쓰다",
      "vi": "viết",
      "id": "menulis",
      "es": "Write with pen",
      "pt": "Write with pen"
    }
  },
  {
    "id": "V0367",
    "w": "えんぴつ",
    "r": "えんぴつ",
    "m": {
      "en": "pencil",
      "zh-TW": "鉛筆",
      "zh-CN": "铅笔",
      "ko": "연필",
      "vi": "Bút chì",
      "id": "Pensil",
      "es": "pencil",
      "pt": "pencil"
    },
    "ex": "鉛筆で書く",
    "exm": {
      "en": "Write with pencil",
      "zh-TW": "用鉛筆寫",
      "zh-CN": "用铅笔写",
      "ko": "쓰다",
      "vi": "viết",
      "id": "menulis",
      "es": "Write with pencil",
      "pt": "Write with pencil"
    }
  },
  {
    "id": "V0368",
    "w": "けしゴム",
    "r": "けしゴム",
    "m": {
      "en": "eraser",
      "zh-TW": "橡皮擦",
      "zh-CN": "橡皮擦",
      "ko": "eraser",
      "vi": "eraser",
      "id": "eraser",
      "es": "eraser",
      "pt": "eraser"
    },
    "ex": "消しゴムで消す",
    "exm": {
      "en": "Erase with eraser",
      "zh-TW": "用橡皮擦擦",
      "zh-CN": "用橡皮擦擦",
      "ko": "Erase with eraser",
      "vi": "Erase with eraser",
      "id": "Erase with eraser",
      "es": "Erase with eraser",
      "pt": "Erase with eraser"
    }
  },
  {
    "id": "V0369",
    "w": "ノート",
    "r": "ノート",
    "m": {
      "en": "notebook",
      "zh-TW": "筆記本",
      "zh-CN": "笔记本",
      "ko": "노트",
      "vi": "Vở",
      "id": "Buku catatan",
      "es": "notebook",
      "pt": "notebook"
    },
    "ex": "ノートに書く",
    "exm": {
      "en": "Write in notebook",
      "zh-TW": "寫在筆記本",
      "zh-CN": "写在笔记本",
      "ko": "쓰다",
      "vi": "viết",
      "id": "menulis",
      "es": "Write in notebook",
      "pt": "Write in notebook"
    }
  },
  {
    "id": "V0370",
    "w": "じしょ",
    "r": "じしょ",
    "m": {
      "en": "dictionary",
      "zh-TW": "字典",
      "zh-CN": "字典",
      "ko": "사전",
      "vi": "Từ điển",
      "id": "Kamus",
      "es": "dictionary",
      "pt": "dictionary"
    },
    "ex": "辞書で調べる",
    "exm": {
      "en": "Look up dictionary",
      "zh-TW": "查字典",
      "zh-CN": "查字典",
      "ko": "위로 사전",
      "vi": "lên từ điển",
      "id": "naik kamus",
      "es": "Look up dictionary",
      "pt": "Look up dictionary"
    }
  },
  {
    "id": "V0371",
    "w": "電話",
    "r": "でんわ",
    "m": {
      "en": "telephone",
      "zh-TW": "電話",
      "zh-CN": "电话",
      "ko": "전화",
      "vi": "Điện thoại",
      "id": "Telepon",
      "es": "telephone",
      "pt": "telephone"
    },
    "ex": "電話をかける",
    "exm": {
      "en": "Make call",
      "zh-TW": "打電話",
      "zh-CN": "打电话",
      "ko": "만들다 전화하다",
      "vi": "làm gọi",
      "id": "membuat menelepon",
      "es": "Make call",
      "pt": "Make call"
    },
    "syn": [
      "通話",
      "コール",
      "テレフォン"
    ]
  },
  {
    "id": "V0372",
    "w": "けいたい",
    "r": "けいたい",
    "m": {
      "en": "mobile phone",
      "zh-TW": "手機",
      "zh-CN": "手机",
      "ko": "전화",
      "vi": "điện thoại",
      "id": "telepon",
      "es": "mobile phone",
      "pt": "mobile phone"
    },
    "ex": "携帯を使う",
    "exm": {
      "en": "Use mobile",
      "zh-TW": "使用手機",
      "zh-CN": "使用手机",
      "ko": "사용하다",
      "vi": "dùng",
      "id": "menggunakan",
      "es": "Use mobile",
      "pt": "Use mobile"
    }
  },
  {
    "id": "V0373",
    "w": "パソコン",
    "r": "パソコン",
    "m": {
      "en": "computer",
      "zh-TW": "電腦",
      "zh-CN": "电脑",
      "ko": "컴퓨터",
      "vi": "máy tính",
      "id": "komputer",
      "es": "computer",
      "pt": "computer"
    },
    "ex": "パソコンで仕事",
    "exm": {
      "en": "Work on PC",
      "zh-TW": "用電腦工作",
      "zh-CN": "用电脑工作",
      "ko": "일하다",
      "vi": "làm việc",
      "id": "bekerja",
      "es": "Work on PC",
      "pt": "Work on PC"
    }
  },
  {
    "id": "V0374",
    "w": "テレビ",
    "r": "テレビ",
    "m": {
      "en": "television",
      "zh-TW": "電視",
      "zh-CN": "电视",
      "ko": "television",
      "vi": "television",
      "id": "television",
      "es": "television",
      "pt": "television"
    },
    "ex": "テレビを見る",
    "exm": {
      "en": "Watch TV",
      "zh-TW": "看電視",
      "zh-CN": "看电视",
      "ko": "보다 TV",
      "vi": "xem TV",
      "id": "menonton TV",
      "es": "Watch TV",
      "pt": "Watch TV"
    }
  },
  {
    "id": "V0375",
    "w": "カメラ",
    "r": "カメラ",
    "m": {
      "en": "camera",
      "zh-TW": "相機",
      "zh-CN": "相机",
      "ko": "camera",
      "vi": "camera",
      "id": "camera",
      "es": "camera",
      "pt": "camera"
    },
    "ex": "カメラで撮る",
    "exm": {
      "en": "Take with camera",
      "zh-TW": "用相機拍",
      "zh-CN": "用相机拍",
      "ko": "가지다",
      "vi": "lấy",
      "id": "mengambil",
      "es": "Take with camera",
      "pt": "Take with camera"
    }
  },
  {
    "id": "V0376",
    "w": "時計",
    "r": "とけい",
    "m": {
      "en": "watch/clock",
      "zh-TW": "手錶",
      "zh-CN": "手表",
      "ko": "watch/clock",
      "vi": "watch/clock",
      "id": "watch/clock",
      "es": "watch/clock",
      "pt": "watch/clock"
    },
    "ex": "時計を見る",
    "exm": {
      "en": "Look at watch",
      "zh-TW": "看手錶",
      "zh-CN": "看手表",
      "ko": "보다",
      "vi": "xem",
      "id": "menonton",
      "es": "Look at watch",
      "pt": "Look at watch"
    }
  },
  {
    "id": "V0377",
    "w": "めがね",
    "r": "めがね",
    "m": {
      "en": "glasses",
      "zh-TW": "眼鏡",
      "zh-CN": "眼镜",
      "ko": "glasses",
      "vi": "glasses",
      "id": "glasses",
      "es": "glasses",
      "pt": "glasses"
    },
    "ex": "眼鏡をかける",
    "exm": {
      "en": "Wear glasses",
      "zh-TW": "戴眼鏡",
      "zh-CN": "戴眼镜",
      "ko": "입다",
      "vi": "mặc",
      "id": "memakai",
      "es": "Wear glasses",
      "pt": "Wear glasses"
    }
  },
  {
    "id": "V0378",
    "w": "つくえ",
    "r": "つくえ",
    "m": {
      "en": "desk",
      "zh-TW": "桌子",
      "zh-CN": "桌子",
      "ko": "책상",
      "vi": "Bàn",
      "id": "Meja",
      "es": "desk",
      "pt": "desk"
    },
    "ex": "机で勉強する",
    "exm": {
      "en": "Study at desk",
      "zh-TW": "在書桌學習",
      "zh-CN": "在书桌学习",
      "ko": "공부하다",
      "vi": "học",
      "id": "belajar",
      "es": "Study at desk",
      "pt": "Study at desk"
    }
  },
  {
    "id": "V0379",
    "w": "いす",
    "r": "いす",
    "m": {
      "en": "chair",
      "zh-TW": "椅子",
      "zh-CN": "椅子",
      "ko": "의자",
      "vi": "Ghế",
      "id": "Kursi",
      "es": "chair",
      "pt": "chair"
    },
    "ex": "椅子に座る",
    "exm": {
      "en": "Sit on chair",
      "zh-TW": "坐椅子",
      "zh-CN": "坐椅子",
      "ko": "앉다 의자",
      "vi": "ngồi ghế",
      "id": "duduk kursi",
      "es": "Sit on chair",
      "pt": "Sit on chair"
    }
  },
  {
    "id": "V0380",
    "w": "ベッド",
    "r": "ベッド",
    "m": {
      "en": "bed",
      "zh-TW": "床",
      "zh-CN": "床",
      "ko": "침대",
      "vi": "giường",
      "id": "tempat tidur",
      "es": "bed",
      "pt": "bed"
    },
    "ex": "ベッドで寝る",
    "exm": {
      "en": "Sleep in bed",
      "zh-TW": "在床上睡覺",
      "zh-CN": "在床上睡觉",
      "ko": "자다 침대",
      "vi": "ngủ giường",
      "id": "tidur tempat tidur",
      "es": "Sleep in bed",
      "pt": "Sleep in bed"
    }
  },
  {
    "id": "V0381",
    "w": "まど",
    "r": "まど",
    "m": {
      "en": "window",
      "zh-TW": "窗戶",
      "zh-CN": "窗户",
      "ko": "창문",
      "vi": "Cửa sổ",
      "id": "Jendela",
      "es": "window",
      "pt": "window"
    },
    "ex": "窓を開ける",
    "exm": {
      "en": "Open window",
      "zh-TW": "開窗",
      "zh-CN": "开窗",
      "ko": "열다 창문",
      "vi": "mở cửa sổ",
      "id": "membuka jendela",
      "es": "Open window",
      "pt": "Open window"
    }
  },
  {
    "id": "V0382",
    "w": "ドア",
    "r": "ドア",
    "m": {
      "en": "door",
      "zh-TW": "門",
      "zh-CN": "门",
      "ko": "문",
      "vi": "Cửa",
      "id": "Pintu",
      "es": "door",
      "pt": "door"
    },
    "ex": "ドアを閉める",
    "exm": {
      "en": "Close door",
      "zh-TW": "關門",
      "zh-CN": "关门",
      "ko": "닫다 문",
      "vi": "đóng cửa",
      "id": "menutup pintu",
      "es": "Close door",
      "pt": "Close door"
    }
  },
  {
    "id": "V0383",
    "w": "電気",
    "r": "でんき",
    "m": {
      "en": "electricity",
      "zh-TW": "電/燈",
      "zh-CN": "电/灯",
      "ko": "electricity",
      "vi": "electricity",
      "id": "electricity",
      "es": "electricity",
      "pt": "electricity"
    },
    "ex": "電気をつける",
    "exm": {
      "en": "Turn on light",
      "zh-TW": "開燈",
      "zh-CN": "开灯",
      "ko": "돌다 가벼운",
      "vi": "quay nhẹ",
      "id": "berputar ringan",
      "es": "Turn on light",
      "pt": "Turn on light"
    }
  },
  {
    "id": "V0384",
    "w": "エアコン",
    "r": "エアコン",
    "m": {
      "en": "air conditioner",
      "zh-TW": "冷氣",
      "zh-CN": "空调",
      "ko": "air conditioner",
      "vi": "air conditioner",
      "id": "air conditioner",
      "es": "air conditioner",
      "pt": "air conditioner"
    },
    "ex": "エアコンをつける",
    "exm": {
      "en": "Turn on AC",
      "zh-TW": "開冷氣",
      "zh-CN": "开空调",
      "ko": "돌다",
      "vi": "quay",
      "id": "berputar",
      "es": "Turn on AC",
      "pt": "Turn on AC"
    }
  },
  {
    "id": "V0385",
    "w": "れいぞうこ",
    "r": "れいぞうこ",
    "m": {
      "en": "refrigerator",
      "zh-TW": "冰箱",
      "zh-CN": "冰箱",
      "ko": "refrigerator",
      "vi": "refrigerator",
      "id": "refrigerator",
      "es": "refrigerator",
      "pt": "refrigerator"
    },
    "ex": "冷蔵庫に入れる",
    "exm": {
      "en": "Put in fridge",
      "zh-TW": "放進冰箱",
      "zh-CN": "放进冰箱",
      "ko": "놓다",
      "vi": "đặt",
      "id": "meletakkan",
      "es": "Put in fridge",
      "pt": "Put in fridge"
    }
  },
  {
    "id": "V0386",
    "w": "せんたくき",
    "r": "せんたくき",
    "m": {
      "en": "washing machine",
      "zh-TW": "洗衣機",
      "zh-CN": "洗衣机",
      "ko": "washing machine",
      "vi": "washing machine",
      "id": "washing machine",
      "es": "washing machine",
      "pt": "washing machine"
    },
    "ex": "洗濯機で洗う",
    "exm": {
      "en": "Wash in machine",
      "zh-TW": "用洗衣機洗",
      "zh-CN": "用洗衣机洗",
      "ko": "씻다",
      "vi": "rửa",
      "id": "mencuci",
      "es": "Wash in machine",
      "pt": "Wash in machine"
    }
  },
  {
    "id": "V0387",
    "w": "ごはん",
    "r": "ごはん",
    "m": {
      "en": "rice/meal",
      "zh-TW": "飯",
      "zh-CN": "饭",
      "ko": "rice/meal",
      "vi": "rice/meal",
      "id": "rice/meal",
      "es": "rice/meal",
      "pt": "rice/meal"
    },
    "ex": "ご飯を食べる",
    "exm": {
      "en": "Eat rice",
      "zh-TW": "吃飯",
      "zh-CN": "吃饭",
      "ko": "먹다 밥",
      "vi": "ăn cơm",
      "id": "makan nasi",
      "es": "Eat rice",
      "pt": "Eat rice"
    }
  },
  {
    "id": "V0388",
    "w": "パン",
    "r": "パン",
    "m": {
      "en": "bread",
      "zh-TW": "麵包",
      "zh-CN": "面包",
      "ko": "빵",
      "vi": "Bánh mì",
      "id": "Roti",
      "es": "bread",
      "pt": "bread"
    },
    "ex": "パンを食べる",
    "exm": {
      "en": "Eat bread",
      "zh-TW": "吃麵包",
      "zh-CN": "吃面包",
      "ko": "먹다",
      "vi": "ăn",
      "id": "makan",
      "es": "Eat bread",
      "pt": "Eat bread"
    }
  },
  {
    "id": "V0389",
    "w": "肉",
    "r": "にく",
    "m": {
      "en": "meat",
      "zh-TW": "肉",
      "zh-CN": "肉",
      "ko": "고기",
      "vi": "Thịt",
      "id": "Daging",
      "es": "meat",
      "pt": "meat"
    },
    "ex": "肉を食べる",
    "exm": {
      "en": "Eat meat",
      "zh-TW": "吃肉",
      "zh-CN": "吃肉",
      "ko": "먹다",
      "vi": "ăn",
      "id": "makan",
      "es": "Eat meat",
      "pt": "Eat meat"
    }
  },
  {
    "id": "V0390",
    "w": "魚",
    "r": "さかな",
    "m": {
      "en": "fish",
      "zh-TW": "魚",
      "zh-CN": "鱼",
      "ko": "생선",
      "vi": "Cá",
      "id": "Ikan",
      "es": "fish",
      "pt": "fish"
    },
    "ex": "魚を食べる",
    "exm": {
      "en": "Eat fish",
      "zh-TW": "吃魚",
      "zh-CN": "吃鱼",
      "ko": "먹다 물고기",
      "vi": "ăn cá",
      "id": "makan ikan",
      "es": "Eat fish",
      "pt": "Eat fish"
    }
  },
  {
    "id": "V0391",
    "w": "やさい",
    "r": "やさい",
    "m": {
      "en": "vegetable",
      "zh-TW": "蔬菜",
      "zh-CN": "蔬菜",
      "ko": "야채",
      "vi": "Rau",
      "id": "Sayuran",
      "es": "vegetable",
      "pt": "vegetable"
    },
    "ex": "野菜を食べる",
    "exm": {
      "en": "Eat vegetables",
      "zh-TW": "吃蔬菜",
      "zh-CN": "吃蔬菜",
      "ko": "먹다",
      "vi": "ăn",
      "id": "makan",
      "es": "Eat vegetables",
      "pt": "Eat vegetables"
    }
  },
  {
    "id": "V0392",
    "w": "くだもの",
    "r": "くだもの",
    "m": {
      "en": "fruit",
      "zh-TW": "水果",
      "zh-CN": "水果",
      "ko": "과일",
      "vi": "Trái cây",
      "id": "Buah",
      "es": "fruit",
      "pt": "fruit"
    },
    "ex": "果物を食べる",
    "exm": {
      "en": "Eat fruit",
      "zh-TW": "吃水果",
      "zh-CN": "吃水果",
      "ko": "먹다",
      "vi": "ăn",
      "id": "makan",
      "es": "Eat fruit",
      "pt": "Eat fruit"
    }
  },
  {
    "id": "V0393",
    "w": "たまご",
    "r": "たまご",
    "m": {
      "en": "egg",
      "zh-TW": "蛋",
      "zh-CN": "蛋",
      "ko": "달걀",
      "vi": "Trứng",
      "id": "Telur",
      "es": "egg",
      "pt": "egg"
    },
    "ex": "卵を食べる",
    "exm": {
      "en": "Eat egg",
      "zh-TW": "吃蛋",
      "zh-CN": "吃蛋",
      "ko": "먹다",
      "vi": "ăn",
      "id": "makan",
      "es": "Eat egg",
      "pt": "Eat egg"
    }
  },
  {
    "id": "V0394",
    "w": "ぎゅうにゅう",
    "r": "ぎゅうにゅう",
    "m": {
      "en": "milk",
      "zh-TW": "牛奶",
      "zh-CN": "牛奶",
      "ko": "우유",
      "vi": "Sữa",
      "id": "Susu",
      "es": "milk",
      "pt": "milk"
    },
    "ex": "牛乳を飲む",
    "exm": {
      "en": "Drink milk",
      "zh-TW": "喝牛奶",
      "zh-CN": "喝牛奶",
      "ko": "마시다",
      "vi": "uống",
      "id": "minum",
      "es": "Drink milk",
      "pt": "Drink milk"
    }
  },
  {
    "id": "V0395",
    "w": "水",
    "r": "みず",
    "m": {
      "en": "water",
      "zh-TW": "水",
      "zh-CN": "水",
      "ko": "물",
      "vi": "Nước",
      "id": "Air",
      "es": "water",
      "pt": "water"
    },
    "ex": "水を飲む",
    "exm": {
      "en": "Drink water",
      "zh-TW": "喝水",
      "zh-CN": "喝水",
      "ko": "마시다 물",
      "vi": "uống nước",
      "id": "minum air",
      "es": "Drink water",
      "pt": "Drink water"
    }
  },
  {
    "id": "V0396",
    "w": "お茶",
    "r": "おちゃ",
    "m": {
      "en": "tea",
      "zh-TW": "茶",
      "zh-CN": "茶",
      "ko": "차",
      "vi": "Trà",
      "id": "Teh",
      "es": "tea",
      "pt": "tea"
    },
    "ex": "お茶を飲む",
    "exm": {
      "en": "Drink tea",
      "zh-TW": "喝茶",
      "zh-CN": "喝茶",
      "ko": "마시다 차",
      "vi": "uống trà",
      "id": "minum teh",
      "es": "Drink tea",
      "pt": "Drink tea"
    }
  },
  {
    "id": "V0397",
    "w": "コーヒー",
    "r": "コーヒー",
    "m": {
      "en": "coffee",
      "zh-TW": "咖啡",
      "zh-CN": "咖啡",
      "ko": "커피",
      "vi": "Cà phê",
      "id": "Kopi",
      "es": "coffee",
      "pt": "coffee"
    },
    "ex": "コーヒーを飲む",
    "exm": {
      "en": "Drink coffee",
      "zh-TW": "喝咖啡",
      "zh-CN": "喝咖啡",
      "ko": "마시다 커피",
      "vi": "uống cà phê",
      "id": "minum kopi",
      "es": "Drink coffee",
      "pt": "Drink coffee"
    }
  },
  {
    "id": "V0398",
    "w": "ジュース",
    "r": "ジュース",
    "m": {
      "en": "juice",
      "zh-TW": "果汁",
      "zh-CN": "果汁",
      "ko": "juice",
      "vi": "juice",
      "id": "juice",
      "es": "juice",
      "pt": "juice"
    },
    "ex": "ジュースを飲む",
    "exm": {
      "en": "Drink juice",
      "zh-TW": "喝果汁",
      "zh-CN": "喝果汁",
      "ko": "마시다",
      "vi": "uống",
      "id": "minum",
      "es": "Drink juice",
      "pt": "Drink juice"
    }
  },
  {
    "id": "V0399",
    "w": "おさけ",
    "r": "おさけ",
    "m": {
      "en": "alcohol",
      "zh-TW": "酒",
      "zh-CN": "酒",
      "ko": "alcohol",
      "vi": "alcohol",
      "id": "alcohol",
      "es": "alcohol",
      "pt": "alcohol"
    },
    "ex": "お酒を飲む",
    "exm": {
      "en": "Drink alcohol",
      "zh-TW": "喝酒",
      "zh-CN": "喝酒",
      "ko": "마시다",
      "vi": "uống",
      "id": "minum",
      "es": "Drink alcohol",
      "pt": "Drink alcohol"
    }
  },
  {
    "id": "V0400",
    "w": "りょうり",
    "r": "りょうり",
    "m": {
      "en": "cooking/dish",
      "zh-TW": "料理",
      "zh-CN": "料理",
      "ko": "cooking/dish",
      "vi": "cooking/dish",
      "id": "cooking/dish",
      "es": "cooking/dish",
      "pt": "cooking/dish"
    },
    "ex": "料理を作る",
    "exm": {
      "en": "Make dish",
      "zh-TW": "做菜",
      "zh-CN": "做菜",
      "ko": "만들다",
      "vi": "làm",
      "id": "membuat",
      "es": "Make dish",
      "pt": "Make dish"
    }
  },
  {
    "id": "V0401",
    "w": "大きい",
    "r": "おおきい",
    "m": {
      "en": "big",
      "zh-TW": "大",
      "zh-CN": "大",
      "ko": "큰",
      "vi": "To",
      "id": "Besar",
      "es": "big",
      "pt": "big"
    },
    "ex": "大きい家",
    "exm": {
      "en": "Big house",
      "zh-TW": "大房子",
      "zh-CN": "大房子",
      "ko": "큰 집",
      "vi": "lớn nhà",
      "id": "besar rumah",
      "es": "Big house",
      "pt": "Big house"
    },
    "syn": [
      "巨大",
      "大型",
      "ビッグ"
    ]
  },
  {
    "id": "V0402",
    "w": "小さい",
    "r": "ちいさい",
    "m": {
      "en": "small",
      "zh-TW": "小",
      "zh-CN": "小",
      "ko": "작은",
      "vi": "Nhỏ",
      "id": "Kecil",
      "es": "pequeño",
      "pt": "pequeno"
    },
    "ex": "小さい犬",
    "exm": {
      "en": "Small dog",
      "zh-TW": "小狗",
      "zh-CN": "小狗",
      "ko": "작은 개",
      "vi": "nhỏ chó",
      "id": "kecil anjing",
      "es": "Small dog",
      "pt": "Small dog"
    },
    "syn": [
      "小型",
      "小さな",
      "ミニ"
    ]
  },
  {
    "id": "V0403",
    "w": "高い",
    "r": "たかい",
    "m": {
      "en": "high/expensive",
      "zh-TW": "高/貴",
      "zh-CN": "高/贵",
      "ko": "높다",
      "vi": "cao",
      "id": "tinggi",
      "es": "high/expensive",
      "pt": "high/expensive"
    },
    "ex": "高いビル",
    "exm": {
      "en": "Tall building",
      "zh-TW": "高樓",
      "zh-CN": "高楼",
      "ko": "Tall building",
      "vi": "Tall building",
      "id": "Tall building",
      "es": "Tall building",
      "pt": "Tall building"
    },
    "syn": [
      "高価",
      "高額",
      "高値"
    ]
  },
  {
    "id": "V0404",
    "w": "やすい",
    "r": "やすい",
    "m": {
      "en": "cheap",
      "zh-TW": "便宜",
      "zh-CN": "便宜",
      "ko": "싼",
      "vi": "Rẻ",
      "id": "Murah",
      "es": "cheap",
      "pt": "cheap"
    },
    "ex": "安い店",
    "exm": {
      "en": "Cheap shop",
      "zh-TW": "便宜的店",
      "zh-CN": "便宜的店",
      "ko": "싼 가게",
      "vi": "rẻ cửa hàng",
      "id": "murah toko",
      "es": "Cheap shop",
      "pt": "Cheap shop"
    },
    "syn": [
      "低価格",
      "格安",
      "リーズナブル"
    ]
  },
  {
    "id": "V0405",
    "w": "長い",
    "r": "ながい",
    "m": {
      "en": "long",
      "zh-TW": "長",
      "zh-CN": "长",
      "ko": "긴",
      "vi": "Dài",
      "id": "Panjang",
      "es": "long",
      "pt": "long"
    },
    "ex": "長い髪",
    "exm": {
      "en": "Long hair",
      "zh-TW": "長頭髮",
      "zh-CN": "长头发",
      "ko": "긴 머리카락",
      "vi": "dài tóc",
      "id": "panjang rambut",
      "es": "Long hair",
      "pt": "Long hair"
    },
    "syn": [
      "長大",
      "長期",
      "ロング"
    ]
  },
  {
    "id": "V0406",
    "w": "みじかい",
    "r": "みじかい",
    "m": {
      "en": "short",
      "zh-TW": "短",
      "zh-CN": "短",
      "ko": "짧은",
      "vi": "Ngắn",
      "id": "Pendek",
      "es": "short",
      "pt": "short"
    },
    "ex": "短いスカート",
    "exm": {
      "en": "Short skirt",
      "zh-TW": "短裙",
      "zh-CN": "短裙",
      "ko": "짧은",
      "vi": "ngắn",
      "id": "pendek",
      "es": "Short skirt",
      "pt": "Short skirt"
    },
    "syn": [
      "短期",
      "短小",
      "ショート"
    ]
  },
  {
    "id": "V0407",
    "w": "あたらしい",
    "r": "あたらしい",
    "m": {
      "en": "new",
      "zh-TW": "新",
      "zh-CN": "新",
      "ko": "새로운",
      "vi": "Mới",
      "id": "Baru",
      "es": "nuevo",
      "pt": "novo"
    },
    "ex": "新しい車",
    "exm": {
      "en": "New car",
      "zh-TW": "新車",
      "zh-CN": "新车",
      "ko": "새로운 차",
      "vi": "mới xe",
      "id": "baru mobil",
      "es": "New car",
      "pt": "New car"
    },
    "syn": [
      "新品",
      "最新",
      "ニュー"
    ]
  },
  {
    "id": "V0408",
    "w": "ふるい",
    "r": "ふるい",
    "m": {
      "en": "old",
      "zh-TW": "舊",
      "zh-CN": "旧",
      "ko": "오래된",
      "vi": "Cũ",
      "id": "Lama",
      "es": "viejo",
      "pt": "velho"
    },
    "ex": "古い家",
    "exm": {
      "en": "Old house",
      "zh-TW": "舊房子",
      "zh-CN": "旧房子",
      "ko": "오래된 집",
      "vi": "cũ nhà",
      "id": "lama rumah",
      "es": "Old house",
      "pt": "Old house"
    },
    "syn": [
      "旧式",
      "古風",
      "オールド"
    ]
  },
  {
    "id": "V0409",
    "w": "よい",
    "r": "よい",
    "m": {
      "en": "good",
      "zh-TW": "好",
      "zh-CN": "好",
      "ko": "좋은",
      "vi": "Tốt",
      "id": "Bagus",
      "es": "bueno",
      "pt": "bom"
    },
    "ex": "良い天気",
    "exm": {
      "en": "Good weather",
      "zh-TW": "好天氣",
      "zh-CN": "好天气",
      "ko": "좋은 날씨",
      "vi": "tốt thời tiết",
      "id": "bagus cuaca",
      "es": "Good weather",
      "pt": "Good weather"
    },
    "syn": [
      "優良",
      "優秀",
      "素晴らしい"
    ]
  },
  {
    "id": "V0410",
    "w": "わるい",
    "r": "わるい",
    "m": {
      "en": "bad",
      "zh-TW": "壞",
      "zh-CN": "坏",
      "ko": "나쁜",
      "vi": "Xấu",
      "id": "Buruk",
      "es": "malo",
      "pt": "mau"
    },
    "ex": "悪い人",
    "exm": {
      "en": "Bad person",
      "zh-TW": "壞人",
      "zh-CN": "坏人",
      "ko": "나쁜 사람",
      "vi": "xấu người",
      "id": "buruk orang",
      "es": "Bad person",
      "pt": "Bad person"
    },
    "syn": [
      "不良",
      "劣悪",
      "ひどい"
    ]
  },
  {
    "id": "V0411",
    "w": "あつい",
    "r": "あつい",
    "m": {
      "en": "hot (thing)",
      "zh-TW": "熱",
      "zh-CN": "热",
      "ko": "덥다",
      "vi": "nóng",
      "id": "panas",
      "es": "hot (thing)",
      "pt": "hot (thing)"
    },
    "ex": "熱いお茶",
    "exm": {
      "en": "Hot tea",
      "zh-TW": "熱茶",
      "zh-CN": "热茶",
      "ko": "뜨거운 차",
      "vi": "nóng trà",
      "id": "panas teh",
      "es": "Hot tea",
      "pt": "Hot tea"
    }
  },
  {
    "id": "V0412",
    "w": "あつい",
    "r": "あつい",
    "m": {
      "en": "hot (weather)",
      "zh-TW": "熱",
      "zh-CN": "热",
      "ko": "덥다",
      "vi": "nóng",
      "id": "panas",
      "es": "hot (weather)",
      "pt": "hot (weather)"
    },
    "ex": "今日は暑い",
    "exm": {
      "en": "Today is hot",
      "zh-TW": "今天很熱",
      "zh-CN": "今天很热",
      "ko": "오늘 뜨거운",
      "vi": "hôm nay nóng",
      "id": "hari ini panas",
      "es": "Today is hot",
      "pt": "Today is hot"
    },
    "syn": [
      "猛暑",
      "酷暑",
      "蒸し暑い"
    ]
  },
  {
    "id": "V0413",
    "w": "つめたい",
    "r": "つめたい",
    "m": {
      "en": "cold (thing)",
      "zh-TW": "冷",
      "zh-CN": "冷",
      "ko": "오래되다",
      "vi": "cũ",
      "id": "lama",
      "es": "cold (thing)",
      "pt": "cold (thing)"
    },
    "ex": "冷たい水",
    "exm": {
      "en": "Cold water",
      "zh-TW": "冷水",
      "zh-CN": "冷水",
      "ko": "차가운 물",
      "vi": "lạnh nước",
      "id": "dingin air",
      "es": "Cold water",
      "pt": "Cold water"
    }
  },
  {
    "id": "V0414",
    "w": "さむい",
    "r": "さむい",
    "m": {
      "en": "cold (weather)",
      "zh-TW": "冷",
      "zh-CN": "冷",
      "ko": "오래되다",
      "vi": "cũ",
      "id": "lama",
      "es": "cold (weather)",
      "pt": "cold (weather)"
    },
    "ex": "今日は寒い",
    "exm": {
      "en": "Today is cold",
      "zh-TW": "今天很冷",
      "zh-CN": "今天很冷",
      "ko": "오늘 차가운",
      "vi": "hôm nay lạnh",
      "id": "hari ini dingin",
      "es": "Today is cold",
      "pt": "Today is cold"
    },
    "syn": [
      "極寒",
      "冷たい",
      "冷え込む"
    ]
  },
  {
    "id": "V0415",
    "w": "いそがしい",
    "r": "いそがしい",
    "m": {
      "en": "busy",
      "zh-TW": "忙",
      "zh-CN": "忙",
      "ko": "바쁜",
      "vi": "Bận",
      "id": "Sibuk",
      "es": "busy",
      "pt": "busy"
    },
    "ex": "忙しい日",
    "exm": {
      "en": "Busy day",
      "zh-TW": "忙碌的一天",
      "zh-CN": "忙碌的一天",
      "ko": "바쁜 날",
      "vi": "bận ngày",
      "id": "sibuk hari",
      "es": "Busy day",
      "pt": "Busy day"
    },
    "syn": [
      "多忙",
      "繁忙",
      "慌ただしい"
    ]
  },
  {
    "id": "V0416",
    "w": "楽しい",
    "r": "たのしい",
    "m": {
      "en": "fun",
      "zh-TW": "開心",
      "zh-CN": "开心",
      "ko": "fun",
      "vi": "fun",
      "id": "fun",
      "es": "fun",
      "pt": "fun"
    },
    "ex": "楽しいパーティー",
    "exm": {
      "en": "Fun party",
      "zh-TW": "開心的派對",
      "zh-CN": "开心的派对",
      "ko": "Fun party",
      "vi": "Fun party",
      "id": "Fun party",
      "es": "Fun party",
      "pt": "Fun party"
    },
    "syn": [
      "愉快",
      "面白い",
      "ハッピー"
    ]
  },
  {
    "id": "V0417",
    "w": "うれしい",
    "r": "うれしい",
    "m": {
      "en": "happy",
      "zh-TW": "開心",
      "zh-CN": "开心",
      "ko": "행복한",
      "vi": "Vui",
      "id": "Senang",
      "es": "happy",
      "pt": "happy"
    },
    "ex": "嬉しいニュース",
    "exm": {
      "en": "Happy news",
      "zh-TW": "高興的消息",
      "zh-CN": "高兴的消息",
      "ko": "행복한",
      "vi": "vui",
      "id": "bahagia",
      "es": "Happy news",
      "pt": "Happy news"
    },
    "syn": [
      "喜ばしい",
      "幸せ",
      "ハッピー"
    ]
  },
  {
    "id": "V0418",
    "w": "かなしい",
    "r": "かなしい",
    "m": {
      "en": "sad",
      "zh-TW": "悲傷",
      "zh-CN": "悲伤",
      "ko": "슬픈",
      "vi": "Buồn",
      "id": "Sedih",
      "es": "sad",
      "pt": "sad"
    },
    "ex": "悲しい映画",
    "exm": {
      "en": "Sad movie",
      "zh-TW": "悲傷的電影",
      "zh-CN": "悲伤的电影",
      "ko": "슬픈 영화",
      "vi": "buồn phim",
      "id": "sedih film",
      "es": "Sad movie",
      "pt": "Sad movie"
    },
    "syn": [
      "哀しい",
      "寂しい",
      "切ない"
    ]
  },
  {
    "id": "V0419",
    "w": "おもしろい",
    "r": "おもしろい",
    "m": {
      "en": "interesting",
      "zh-TW": "有趣",
      "zh-CN": "有趣",
      "ko": "재미있는",
      "vi": "Thú vị",
      "id": "Menarik",
      "es": "interesting",
      "pt": "interesting"
    },
    "ex": "面白い本",
    "exm": {
      "en": "Interesting book",
      "zh-TW": "有趣的書",
      "zh-CN": "有趣的书",
      "ko": "재미있는 책",
      "vi": "thú vị sách",
      "id": "menarik buku",
      "es": "Interesting book",
      "pt": "Interesting book"
    },
    "syn": [
      "興味深い",
      "楽しい",
      "ユニーク"
    ]
  },
  {
    "id": "V0420",
    "w": "むずかしい",
    "r": "むずかしい",
    "m": {
      "en": "difficult",
      "zh-TW": "困難",
      "zh-CN": "困难",
      "ko": "어려운",
      "vi": "Khó",
      "id": "Sulit",
      "es": "difficult",
      "pt": "difficult"
    },
    "ex": "難しい問題",
    "exm": {
      "en": "Difficult problem",
      "zh-TW": "困難的問題",
      "zh-CN": "困难的问题",
      "ko": "어려운",
      "vi": "khó",
      "id": "sulit",
      "es": "Difficult problem",
      "pt": "Difficult problem"
    },
    "syn": [
      "困難",
      "複雑",
      "難解"
    ]
  },
  {
    "id": "V0421",
    "w": "やさしい",
    "r": "やさしい",
    "m": {
      "en": "easy",
      "zh-TW": "簡單",
      "zh-CN": "简单",
      "ko": "쉬운",
      "vi": "Dễ",
      "id": "Mudah",
      "es": "easy",
      "pt": "easy"
    },
    "ex": "易しい問題",
    "exm": {
      "en": "Easy problem",
      "zh-TW": "簡單的問題",
      "zh-CN": "简单的问题",
      "ko": "쉬운",
      "vi": "dễ",
      "id": "mudah",
      "es": "Easy problem",
      "pt": "Easy problem"
    },
    "syn": [
      "簡単",
      "シンプル",
      "平易"
    ]
  },
  {
    "id": "V0422",
    "w": "やさしい",
    "r": "やさしい",
    "m": {
      "en": "kind",
      "zh-TW": "親切",
      "zh-CN": "亲切",
      "ko": "친절한",
      "vi": "Tử tế",
      "id": "Baik",
      "es": "kind",
      "pt": "kind"
    },
    "ex": "優しい人",
    "exm": {
      "en": "Kind person",
      "zh-TW": "溫柔的人",
      "zh-CN": "温柔的人",
      "ko": "사람",
      "vi": "người",
      "id": "orang",
      "es": "Kind person",
      "pt": "Kind person"
    },
    "syn": [
      "親切",
      "思いやりがある",
      "温かい"
    ]
  },
  {
    "id": "V0423",
    "w": "おいしい",
    "r": "おいしい",
    "m": {
      "en": "delicious",
      "zh-TW": "好吃",
      "zh-CN": "好吃",
      "ko": "맛있는",
      "vi": "Ngon",
      "id": "Enak",
      "es": "delicious",
      "pt": "delicious"
    },
    "ex": "美味しい料理",
    "exm": {
      "en": "Delicious food",
      "zh-TW": "好吃的菜",
      "zh-CN": "好吃的菜",
      "ko": "맛있는 음식",
      "vi": "ngon đồ ăn",
      "id": "enak makanan",
      "es": "Delicious food",
      "pt": "Delicious food"
    },
    "syn": [
      "美味",
      "絶品",
      "グルメ"
    ]
  },
  {
    "id": "V0424",
    "w": "あまい",
    "r": "あまい",
    "m": {
      "en": "sweet",
      "zh-TW": "甜",
      "zh-CN": "甜",
      "ko": "sweet",
      "vi": "sweet",
      "id": "sweet",
      "es": "sweet",
      "pt": "sweet"
    },
    "ex": "甘いケーキ",
    "exm": {
      "en": "Sweet cake",
      "zh-TW": "甜蛋糕",
      "zh-CN": "甜蛋糕",
      "ko": "Sweet cake",
      "vi": "Sweet cake",
      "id": "Sweet cake",
      "es": "Sweet cake",
      "pt": "Sweet cake"
    }
  },
  {
    "id": "V0425",
    "w": "からい",
    "r": "からい",
    "m": {
      "en": "spicy",
      "zh-TW": "辣",
      "zh-CN": "辣",
      "ko": "spicy",
      "vi": "spicy",
      "id": "spicy",
      "es": "spicy",
      "pt": "spicy"
    },
    "ex": "辛い料理",
    "exm": {
      "en": "Spicy food",
      "zh-TW": "辣菜",
      "zh-CN": "辣菜",
      "ko": "음식",
      "vi": "đồ ăn",
      "id": "makanan",
      "es": "Spicy food",
      "pt": "Spicy food"
    }
  },
  {
    "id": "V0426",
    "w": "しろい",
    "r": "しろい",
    "m": {
      "en": "white",
      "zh-TW": "白色",
      "zh-CN": "白色",
      "ko": "흰색",
      "vi": "Trắng",
      "id": "Putih",
      "es": "white",
      "pt": "white"
    },
    "ex": "白い雪",
    "exm": {
      "en": "White snow",
      "zh-TW": "白雪",
      "zh-CN": "白雪",
      "ko": "흰 눈",
      "vi": "trắng tuyết",
      "id": "putih salju",
      "es": "White snow",
      "pt": "White snow"
    }
  },
  {
    "id": "V0427",
    "w": "黒い",
    "r": "くろい",
    "m": {
      "en": "black",
      "zh-TW": "黑色",
      "zh-CN": "黑色",
      "ko": "검은색",
      "vi": "Đen",
      "id": "Hitam",
      "es": "black",
      "pt": "black"
    },
    "ex": "黒い髪",
    "exm": {
      "en": "Black hair",
      "zh-TW": "黑頭髮",
      "zh-CN": "黑头发",
      "ko": "검은 머리카락",
      "vi": "đen tóc",
      "id": "hitam rambut",
      "es": "Black hair",
      "pt": "Black hair"
    }
  },
  {
    "id": "V0428",
    "w": "あかい",
    "r": "あかい",
    "m": {
      "en": "red",
      "zh-TW": "紅色",
      "zh-CN": "红色",
      "ko": "빨간색",
      "vi": "Đỏ",
      "id": "Merah",
      "es": "red",
      "pt": "red"
    },
    "ex": "赤い花",
    "exm": {
      "en": "Red flower",
      "zh-TW": "紅花",
      "zh-CN": "红花",
      "ko": "빨간 꽃",
      "vi": "đỏ hoa",
      "id": "merah bunga",
      "es": "Red flower",
      "pt": "Red flower"
    }
  },
  {
    "id": "V0429",
    "w": "あおい",
    "r": "あおい",
    "m": {
      "en": "blue",
      "zh-TW": "藍色",
      "zh-CN": "蓝色",
      "ko": "파란색",
      "vi": "Xanh dương",
      "id": "Biru",
      "es": "blue",
      "pt": "blue"
    },
    "ex": "青い空",
    "exm": {
      "en": "Blue sky",
      "zh-TW": "藍天",
      "zh-CN": "蓝天",
      "ko": "파란 하늘",
      "vi": "xanh trời",
      "id": "biru langit",
      "es": "Blue sky",
      "pt": "Blue sky"
    }
  },
  {
    "id": "V0430",
    "w": "ひろい",
    "r": "ひろい",
    "m": {
      "en": "wide",
      "zh-TW": "寬",
      "zh-CN": "宽",
      "ko": "넓은",
      "vi": "Rộng",
      "id": "Lebar",
      "es": "wide",
      "pt": "wide"
    },
    "ex": "広い部屋",
    "exm": {
      "en": "Spacious room",
      "zh-TW": "寬敞的房間",
      "zh-CN": "宽敞的房间",
      "ko": "방",
      "vi": "phòng",
      "id": "kamar",
      "es": "Spacious room",
      "pt": "Spacious room"
    }
  },
  {
    "id": "V0431",
    "w": "せまい",
    "r": "せまい",
    "m": {
      "en": "narrow",
      "zh-TW": "窄",
      "zh-CN": "窄",
      "ko": "좁은",
      "vi": "Hẹp",
      "id": "Sempit",
      "es": "narrow",
      "pt": "narrow"
    },
    "ex": "狭い道",
    "exm": {
      "en": "Narrow road",
      "zh-TW": "窄路",
      "zh-CN": "窄路",
      "ko": "좁은",
      "vi": "hẹp",
      "id": "sempit",
      "es": "Narrow road",
      "pt": "Narrow road"
    }
  },
  {
    "id": "V0432",
    "w": "おもい",
    "r": "おもい",
    "m": {
      "en": "heavy",
      "zh-TW": "重",
      "zh-CN": "重",
      "ko": "무거운",
      "vi": "Nặng",
      "id": "Berat",
      "es": "heavy",
      "pt": "heavy"
    },
    "ex": "重い荷物",
    "exm": {
      "en": "Heavy luggage",
      "zh-TW": "重行李",
      "zh-CN": "重行李",
      "ko": "무거운",
      "vi": "nặng",
      "id": "berat",
      "es": "Heavy luggage",
      "pt": "Heavy luggage"
    }
  },
  {
    "id": "V0433",
    "w": "かるい",
    "r": "かるい",
    "m": {
      "en": "light",
      "zh-TW": "輕",
      "zh-CN": "轻",
      "ko": "가벼운",
      "vi": "Nhẹ",
      "id": "Ringan",
      "es": "light",
      "pt": "light"
    },
    "ex": "軽いかばん",
    "exm": {
      "en": "Light bag",
      "zh-TW": "輕的包",
      "zh-CN": "轻的包",
      "ko": "가벼운",
      "vi": "nhẹ",
      "id": "ringan",
      "es": "Light bag",
      "pt": "Light bag"
    }
  },
  {
    "id": "V0434",
    "w": "はやい",
    "r": "はやい",
    "m": {
      "en": "fast",
      "zh-TW": "快",
      "zh-CN": "快",
      "ko": "빠른",
      "vi": "Nhanh",
      "id": "Cepat",
      "es": "fast",
      "pt": "fast"
    },
    "ex": "速い電車",
    "exm": {
      "en": "Fast train",
      "zh-TW": "快車",
      "zh-CN": "快车",
      "ko": "빠른 기차",
      "vi": "nhanh tàu",
      "id": "cepat kereta",
      "es": "Fast train",
      "pt": "Fast train"
    }
  },
  {
    "id": "V0435",
    "w": "おそい",
    "r": "おそい",
    "m": {
      "en": "slow",
      "zh-TW": "慢",
      "zh-CN": "慢",
      "ko": "느린",
      "vi": "Chậm",
      "id": "Lambat",
      "es": "slow",
      "pt": "slow"
    },
    "ex": "遅い時間",
    "exm": {
      "en": "Late time",
      "zh-TW": "很晚",
      "zh-CN": "很晚",
      "ko": "늦은 시간",
      "vi": "muộn thời gian",
      "id": "terlambat waktu",
      "es": "Late time",
      "pt": "Late time"
    }
  },
  {
    "id": "V0436",
    "w": "はやい",
    "r": "はやい",
    "m": {
      "en": "early",
      "zh-TW": "早",
      "zh-CN": "早",
      "ko": "이른",
      "vi": "sớm",
      "id": "awal",
      "es": "early",
      "pt": "early"
    },
    "ex": "早い朝",
    "exm": {
      "en": "Early morning",
      "zh-TW": "很早的早上",
      "zh-CN": "很早的早上",
      "ko": "이른 아침",
      "vi": "sớm sáng",
      "id": "awal pagi",
      "es": "Early morning",
      "pt": "Early morning"
    }
  },
  {
    "id": "V0437",
    "w": "明るい",
    "r": "あかるい",
    "m": {
      "en": "bright",
      "zh-TW": "亮",
      "zh-CN": "亮",
      "ko": "밝은",
      "vi": "Sáng",
      "id": "Terang",
      "es": "bright",
      "pt": "bright"
    },
    "ex": "明るい部屋",
    "exm": {
      "en": "Bright room",
      "zh-TW": "明亮的房間",
      "zh-CN": "明亮的房间",
      "ko": "밝은 방",
      "vi": "sáng phòng",
      "id": "terang kamar",
      "es": "Bright room",
      "pt": "Bright room"
    }
  },
  {
    "id": "V0438",
    "w": "くらい",
    "r": "くらい",
    "m": {
      "en": "dark",
      "zh-TW": "暗",
      "zh-CN": "暗",
      "ko": "어두운",
      "vi": "Tối",
      "id": "Gelap",
      "es": "dark",
      "pt": "dark"
    },
    "ex": "暗い部屋",
    "exm": {
      "en": "Dark room",
      "zh-TW": "暗的房間",
      "zh-CN": "暗的房间",
      "ko": "어두운 방",
      "vi": "tối phòng",
      "id": "gelap kamar",
      "es": "Dark room",
      "pt": "Dark room"
    }
  },
  {
    "id": "V0439",
    "w": "つよい",
    "r": "つよい",
    "m": {
      "en": "strong",
      "zh-TW": "強",
      "zh-CN": "强",
      "ko": "강한",
      "vi": "mạnh",
      "id": "kuat",
      "es": "strong",
      "pt": "strong"
    },
    "ex": "強い風",
    "exm": {
      "en": "Strong wind",
      "zh-TW": "強風",
      "zh-CN": "强风",
      "ko": "강한",
      "vi": "mạnh",
      "id": "kuat",
      "es": "Strong wind",
      "pt": "Strong wind"
    }
  },
  {
    "id": "V0440",
    "w": "よわい",
    "r": "よわい",
    "m": {
      "en": "weak",
      "zh-TW": "弱",
      "zh-CN": "弱",
      "ko": "약한",
      "vi": "yếu",
      "id": "lemah",
      "es": "weak",
      "pt": "weak"
    },
    "ex": "弱い人",
    "exm": {
      "en": "Weak person",
      "zh-TW": "弱的人",
      "zh-CN": "弱的人",
      "ko": "약한 사람",
      "vi": "yếu người",
      "id": "lemah orang",
      "es": "Weak person",
      "pt": "Weak person"
    }
  },
  {
    "id": "V0441",
    "w": "わかい",
    "r": "わかい",
    "m": {
      "en": "young",
      "zh-TW": "年輕",
      "zh-CN": "年轻",
      "ko": "young",
      "vi": "young",
      "id": "young",
      "es": "young",
      "pt": "young"
    },
    "ex": "若い人",
    "exm": {
      "en": "Young person",
      "zh-TW": "年輕人",
      "zh-CN": "年轻人",
      "ko": "사람",
      "vi": "người",
      "id": "orang",
      "es": "Young person",
      "pt": "Young person"
    }
  },
  {
    "id": "V0442",
    "w": "ちかい",
    "r": "ちかい",
    "m": {
      "en": "near",
      "zh-TW": "近",
      "zh-CN": "近",
      "ko": "가까운",
      "vi": "Gần",
      "id": "Dekat",
      "es": "near",
      "pt": "near"
    },
    "ex": "近い所",
    "exm": {
      "en": "Near place",
      "zh-TW": "近的地方",
      "zh-CN": "近的地方",
      "ko": "Near place",
      "vi": "Near place",
      "id": "Near place",
      "es": "Near place",
      "pt": "Near place"
    }
  },
  {
    "id": "V0443",
    "w": "とおい",
    "r": "とおい",
    "m": {
      "en": "far",
      "zh-TW": "遠",
      "zh-CN": "远",
      "ko": "먼",
      "vi": "Xa",
      "id": "Jauh",
      "es": "far",
      "pt": "far"
    },
    "ex": "遠い所",
    "exm": {
      "en": "Far place",
      "zh-TW": "遠的地方",
      "zh-CN": "远的地方",
      "ko": "Far place",
      "vi": "Far place",
      "id": "Far place",
      "es": "Far place",
      "pt": "Far place"
    }
  },
  {
    "id": "V0444",
    "w": "おおい",
    "r": "おおい",
    "m": {
      "en": "many",
      "zh-TW": "多",
      "zh-CN": "多",
      "ko": "많다",
      "vi": "nhiều",
      "id": "banyak",
      "es": "many",
      "pt": "many"
    },
    "ex": "人が多い",
    "exm": {
      "en": "Many people",
      "zh-TW": "人很多",
      "zh-CN": "人很多",
      "ko": "많은 사람들",
      "vi": "nhiều mọi người",
      "id": "banyak orang-orang",
      "es": "Many people",
      "pt": "Many people"
    },
    "syn": [
      "多数",
      "多量",
      "豊富"
    ]
  },
  {
    "id": "V0445",
    "w": "すくない",
    "r": "すくない",
    "m": {
      "en": "few",
      "zh-TW": "少",
      "zh-CN": "少",
      "ko": "적다",
      "vi": "ít",
      "id": "sedikit",
      "es": "few",
      "pt": "few"
    },
    "ex": "人が少ない",
    "exm": {
      "en": "Few people",
      "zh-TW": "人很少",
      "zh-CN": "人很少",
      "ko": "적은 사람들",
      "vi": "ít mọi người",
      "id": "sedikit orang-orang",
      "es": "Few people",
      "pt": "Few people"
    },
    "syn": [
      "少数",
      "少量",
      "僅か"
    ]
  },
  {
    "id": "V0446",
    "w": "いたい",
    "r": "いたい",
    "m": {
      "en": "painful",
      "zh-TW": "痛",
      "zh-CN": "痛",
      "ko": "painful",
      "vi": "painful",
      "id": "painful",
      "es": "painful",
      "pt": "painful"
    },
    "ex": "頭が痛い",
    "exm": {
      "en": "Headache",
      "zh-TW": "頭痛",
      "zh-CN": "头痛",
      "ko": "Headache",
      "vi": "Headache",
      "id": "Headache",
      "es": "Headache",
      "pt": "Headache"
    }
  },
  {
    "id": "V0447",
    "w": "こわい",
    "r": "こわい",
    "m": {
      "en": "scary",
      "zh-TW": "可怕",
      "zh-CN": "可怕",
      "ko": "scary",
      "vi": "scary",
      "id": "scary",
      "es": "scary",
      "pt": "scary"
    },
    "ex": "怖い映画",
    "exm": {
      "en": "Scary movie",
      "zh-TW": "可怕的電影",
      "zh-CN": "可怕的电影",
      "ko": "영화",
      "vi": "phim",
      "id": "film",
      "es": "Scary movie",
      "pt": "Scary movie"
    },
    "syn": [
      "恐ろしい",
      "恐い",
      "不気味"
    ]
  },
  {
    "id": "V0448",
    "w": "ねむい",
    "r": "ねむい",
    "m": {
      "en": "sleepy",
      "zh-TW": "睏",
      "zh-CN": "困",
      "ko": "sleepy",
      "vi": "sleepy",
      "id": "sleepy",
      "es": "sleepy",
      "pt": "sleepy"
    },
    "ex": "とても眠い",
    "exm": {
      "en": "Very sleepy",
      "zh-TW": "很睏",
      "zh-CN": "很困",
      "ko": "매우",
      "vi": "rất",
      "id": "sangat",
      "es": "Very sleepy",
      "pt": "Very sleepy"
    }
  },
  {
    "id": "V0449",
    "w": "かわいい",
    "r": "かわいい",
    "m": {
      "en": "cute",
      "zh-TW": "可愛",
      "zh-CN": "可爱",
      "ko": "cute",
      "vi": "cute",
      "id": "cute",
      "es": "cute",
      "pt": "cute"
    },
    "ex": "可愛い子",
    "exm": {
      "en": "Cute child",
      "zh-TW": "可愛的孩子",
      "zh-CN": "可爱的孩子",
      "ko": "아이",
      "vi": "trẻ em",
      "id": "anak",
      "es": "Cute child",
      "pt": "Cute child"
    }
  },
  {
    "id": "V0450",
    "w": "ゆうめい",
    "r": "ゆうめい",
    "m": {
      "en": "famous",
      "zh-TW": "有名",
      "zh-CN": "有名",
      "ko": "유명한",
      "vi": "nổi tiếng",
      "id": "terkenal",
      "es": "famous",
      "pt": "famous"
    },
    "ex": "有名な人",
    "exm": {
      "en": "Famous person",
      "zh-TW": "有名的人",
      "zh-CN": "有名的人",
      "ko": "유명한 사람",
      "vi": "nổi tiếng người",
      "id": "terkenal orang",
      "es": "Famous person",
      "pt": "Famous person"
    }
  },
  {
    "id": "V0451",
    "w": "しずか",
    "r": "しずか",
    "m": {
      "en": "quiet",
      "zh-TW": "安靜",
      "zh-CN": "安静",
      "ko": "조용한",
      "vi": "Yên tĩnh",
      "id": "Tenang",
      "es": "quiet",
      "pt": "quiet"
    },
    "ex": "静かな部屋",
    "exm": {
      "en": "Quiet room",
      "zh-TW": "安靜的房間",
      "zh-CN": "安静的房间",
      "ko": "조용한 방",
      "vi": "yên tĩnh phòng",
      "id": "tenang kamar",
      "es": "Quiet room",
      "pt": "Quiet room"
    }
  },
  {
    "id": "V0452",
    "w": "にぎやか",
    "r": "にぎやか",
    "m": {
      "en": "lively",
      "zh-TW": "熱鬧",
      "zh-CN": "热闹",
      "ko": "lively",
      "vi": "lively",
      "id": "lively",
      "es": "lively",
      "pt": "lively"
    },
    "ex": "賑やかな町",
    "exm": {
      "en": "Lively town",
      "zh-TW": "熱鬧的城鎮",
      "zh-CN": "热闹的城镇",
      "ko": "Lively town",
      "vi": "Lively town",
      "id": "Lively town",
      "es": "Lively town",
      "pt": "Lively town"
    }
  },
  {
    "id": "V0453",
    "w": "きれい",
    "r": "きれい",
    "m": {
      "en": "beautiful",
      "zh-TW": "美麗",
      "zh-CN": "美丽",
      "ko": "아름다운",
      "vi": "Đẹp",
      "id": "Indah",
      "es": "beautiful",
      "pt": "beautiful"
    },
    "ex": "綺麗な花",
    "exm": {
      "en": "Beautiful flower",
      "zh-TW": "漂亮的花",
      "zh-CN": "漂亮的花",
      "ko": "아름다운 꽃",
      "vi": "đẹp hoa",
      "id": "indah bunga",
      "es": "Beautiful flower",
      "pt": "Beautiful flower"
    }
  },
  {
    "id": "V0454",
    "w": "べんり",
    "r": "べんり",
    "m": {
      "en": "convenient",
      "zh-TW": "方便",
      "zh-CN": "方便",
      "ko": "convenient",
      "vi": "convenient",
      "id": "convenient",
      "es": "convenient",
      "pt": "convenient"
    },
    "ex": "便利な場所",
    "exm": {
      "en": "Convenient place",
      "zh-TW": "方便的地方",
      "zh-CN": "方便的地方",
      "ko": "Convenient place",
      "vi": "Convenient place",
      "id": "Convenient place",
      "es": "Convenient place",
      "pt": "Convenient place"
    }
  },
  {
    "id": "V0455",
    "w": "たいせつ",
    "r": "たいせつ",
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
    "ex": "大切な人",
    "exm": {
      "en": "Important person",
      "zh-TW": "重要的人",
      "zh-CN": "重要的人",
      "ko": "중요한 사람",
      "vi": "quan trọng người",
      "id": "penting orang",
      "es": "Important person",
      "pt": "Important person"
    }
  },
  {
    "id": "V0456",
    "w": "だいじょうぶ",
    "r": "だいじょうぶ",
    "m": {
      "en": "okay",
      "zh-TW": "沒問題",
      "zh-CN": "没问题",
      "ko": "okay",
      "vi": "okay",
      "id": "okay",
      "es": "okay",
      "pt": "okay"
    },
    "ex": "大丈夫ですか",
    "exm": {
      "en": "Are you okay?",
      "zh-TW": "沒問題嗎",
      "zh-CN": "没问题吗",
      "ko": "Are you okay?",
      "vi": "Are you okay?",
      "id": "Are you okay?",
      "es": "Are you okay?",
      "pt": "Are you okay?"
    }
  },
  {
    "id": "V0457",
    "w": "上手",
    "r": "じょうず",
    "m": {
      "en": "good at",
      "zh-TW": "擅長",
      "zh-CN": "擅长",
      "ko": "좋다",
      "vi": "tốt",
      "id": "baik",
      "es": "good at",
      "pt": "good at"
    },
    "ex": "日本語が上手",
    "exm": {
      "en": "Good at Japanese",
      "zh-TW": "日語很好",
      "zh-CN": "日语很好",
      "ko": "좋은",
      "vi": "tốt",
      "id": "bagus",
      "es": "Good at Japanese",
      "pt": "Good at Japanese"
    }
  },
  {
    "id": "V0458",
    "w": "下手",
    "r": "へた",
    "m": {
      "en": "bad at",
      "zh-TW": "不擅長",
      "zh-CN": "不擅长",
      "ko": "나쁘다",
      "vi": "xấu",
      "id": "buruk",
      "es": "bad at",
      "pt": "bad at"
    },
    "ex": "料理が下手",
    "exm": {
      "en": "Bad at cooking",
      "zh-TW": "不擅長做菜",
      "zh-CN": "不擅长做菜",
      "ko": "나쁜",
      "vi": "xấu",
      "id": "buruk",
      "es": "Bad at cooking",
      "pt": "Bad at cooking"
    }
  },
  {
    "id": "V0459",
    "w": "かんたん",
    "r": "かんたん",
    "m": {
      "en": "simple",
      "zh-TW": "簡單",
      "zh-CN": "简单",
      "ko": "simple",
      "vi": "simple",
      "id": "simple",
      "es": "simple",
      "pt": "simple"
    },
    "ex": "簡単な問題",
    "exm": {
      "en": "Simple problem",
      "zh-TW": "簡單的問題",
      "zh-CN": "简单的问题",
      "ko": "Simple problem",
      "vi": "Simple problem",
      "id": "Simple problem",
      "es": "Simple problem",
      "pt": "Simple problem"
    }
  },
  {
    "id": "V0460",
    "w": "しんせつ",
    "r": "しんせつ",
    "m": {
      "en": "kind",
      "zh-TW": "親切",
      "zh-CN": "亲切",
      "ko": "친절한",
      "vi": "Tử tế",
      "id": "Baik",
      "es": "kind",
      "pt": "kind"
    },
    "ex": "親切な人",
    "exm": {
      "en": "Kind person",
      "zh-TW": "親切的人",
      "zh-CN": "亲切的人",
      "ko": "사람",
      "vi": "người",
      "id": "orang",
      "es": "Kind person",
      "pt": "Kind person"
    }
  },
  {
    "id": "V0461",
    "w": "ひま",
    "r": "ひま",
    "m": {
      "en": "free time",
      "zh-TW": "空閒",
      "zh-CN": "空闲",
      "ko": "자유로운 시간",
      "vi": "rảnh thời gian",
      "id": "bebas waktu",
      "es": "free time",
      "pt": "free time"
    },
    "ex": "暇な時",
    "exm": {
      "en": "Free time",
      "zh-TW": "有空的時候",
      "zh-CN": "有空的时候",
      "ko": "자유로운 시간",
      "vi": "rảnh thời gian",
      "id": "bebas waktu",
      "es": "Free time",
      "pt": "Free time"
    },
    "syn": [
      "閑暇",
      "余暇",
      "フリー"
    ]
  },
  {
    "id": "V0462",
    "w": "だめ",
    "r": "だめ",
    "m": {
      "en": "no good",
      "zh-TW": "不行",
      "zh-CN": "不行",
      "ko": "좋다",
      "vi": "tốt",
      "id": "baik",
      "es": "no good",
      "pt": "no good"
    },
    "ex": "それは駄目",
    "exm": {
      "en": "That's no good",
      "zh-TW": "那不行",
      "zh-CN": "那不行",
      "ko": "좋은",
      "vi": "tốt",
      "id": "bagus",
      "es": "That's no good",
      "pt": "That's no good"
    }
  },
  {
    "id": "V0463",
    "w": "とくべつ",
    "r": "とくべつ",
    "m": {
      "en": "special",
      "zh-TW": "特別",
      "zh-CN": "特别",
      "ko": "special",
      "vi": "special",
      "id": "special",
      "es": "special",
      "pt": "special"
    },
    "ex": "特別な日",
    "exm": {
      "en": "Special day",
      "zh-TW": "特別的日子",
      "zh-CN": "特别的日子",
      "ko": "날",
      "vi": "ngày",
      "id": "hari",
      "es": "Special day",
      "pt": "Special day"
    }
  },
  {
    "id": "V0464",
    "w": "色々",
    "r": "いろいろ",
    "m": {
      "en": "various",
      "zh-TW": "各種",
      "zh-CN": "各种",
      "ko": "various",
      "vi": "various",
      "id": "various",
      "es": "various",
      "pt": "various"
    },
    "ex": "色々な物",
    "exm": {
      "en": "Various things",
      "zh-TW": "各種東西",
      "zh-CN": "各种东西",
      "ko": "Various things",
      "vi": "Various things",
      "id": "Various things",
      "es": "Various things",
      "pt": "Various things"
    }
  },
  {
    "id": "V0465",
    "w": "同じ",
    "r": "おなじ",
    "m": {
      "en": "same",
      "zh-TW": "相同",
      "zh-CN": "相同",
      "ko": "같은",
      "vi": "giống",
      "id": "sama",
      "es": "same",
      "pt": "same"
    },
    "ex": "同じ物",
    "exm": {
      "en": "Same thing",
      "zh-TW": "相同的東西",
      "zh-CN": "相同的东西",
      "ko": "같은",
      "vi": "giống",
      "id": "sama",
      "es": "Same thing",
      "pt": "Same thing"
    }
  },
  {
    "id": "V0466",
    "w": "ふつう",
    "r": "ふつう",
    "m": {
      "en": "ordinary",
      "zh-TW": "普通",
      "zh-CN": "普通",
      "ko": "ordinary",
      "vi": "ordinary",
      "id": "ordinary",
      "es": "ordinary",
      "pt": "ordinary"
    },
    "ex": "普通の人",
    "exm": {
      "en": "Ordinary person",
      "zh-TW": "普通人",
      "zh-CN": "普通人",
      "ko": "사람",
      "vi": "người",
      "id": "orang",
      "es": "Ordinary person",
      "pt": "Ordinary person"
    }
  },
  {
    "id": "V0467",
    "w": "とても",
    "r": "とても",
    "m": {
      "en": "very",
      "zh-TW": "非常",
      "zh-CN": "非常",
      "ko": "매우",
      "vi": "rất",
      "id": "sangat",
      "es": "very",
      "pt": "very"
    },
    "ex": "とても暑い",
    "exm": {
      "en": "Very hot",
      "zh-TW": "非常熱",
      "zh-CN": "非常热",
      "ko": "매우 뜨거운",
      "vi": "rất nóng",
      "id": "sangat panas",
      "es": "Very hot",
      "pt": "Very hot"
    }
  },
  {
    "id": "V0468",
    "w": "すこし",
    "r": "すこし",
    "m": {
      "en": "a little",
      "zh-TW": "一點",
      "zh-CN": "一点",
      "ko": "a little",
      "vi": "a little",
      "id": "a little",
      "es": "a little",
      "pt": "a little"
    },
    "ex": "少し食べる",
    "exm": {
      "en": "Eat a little",
      "zh-TW": "吃一點",
      "zh-CN": "吃一点",
      "ko": "먹다",
      "vi": "ăn",
      "id": "makan",
      "es": "Eat a little",
      "pt": "Eat a little"
    }
  },
  {
    "id": "V0469",
    "w": "ちょっと",
    "r": "ちょっと",
    "m": {
      "en": "a little",
      "zh-TW": "一點",
      "zh-CN": "一点",
      "ko": "a little",
      "vi": "a little",
      "id": "a little",
      "es": "a little",
      "pt": "a little"
    },
    "ex": "ちょっと待って",
    "exm": {
      "en": "Wait a bit",
      "zh-TW": "等一下",
      "zh-CN": "等一下",
      "ko": "기다리다",
      "vi": "đợi",
      "id": "menunggu",
      "es": "Wait a bit",
      "pt": "Wait a bit"
    }
  },
  {
    "id": "V0470",
    "w": "たくさん",
    "r": "たくさん",
    "m": {
      "en": "many",
      "zh-TW": "很多",
      "zh-CN": "很多",
      "ko": "많다",
      "vi": "nhiều",
      "id": "banyak",
      "es": "many",
      "pt": "many"
    },
    "ex": "たくさん食べる",
    "exm": {
      "en": "Eat a lot",
      "zh-TW": "吃很多",
      "zh-CN": "吃很多",
      "ko": "먹다",
      "vi": "ăn",
      "id": "makan",
      "es": "Eat a lot",
      "pt": "Eat a lot"
    }
  },
  {
    "id": "V0471",
    "w": "もっと",
    "r": "もっと",
    "m": {
      "en": "more",
      "zh-TW": "更",
      "zh-CN": "更",
      "ko": "more",
      "vi": "more",
      "id": "more",
      "es": "more",
      "pt": "more"
    },
    "ex": "もっと食べる",
    "exm": {
      "en": "Eat more",
      "zh-TW": "吃更多",
      "zh-CN": "吃更多",
      "ko": "먹다",
      "vi": "ăn",
      "id": "makan",
      "es": "Eat more",
      "pt": "Eat more"
    }
  },
  {
    "id": "V0472",
    "w": "まだ",
    "r": "まだ",
    "m": {
      "en": "still/not yet",
      "zh-TW": "還",
      "zh-CN": "还",
      "ko": "still/not yet",
      "vi": "still/not yet",
      "id": "still/not yet",
      "es": "still/not yet",
      "pt": "still/not yet"
    },
    "ex": "まだ食べていない",
    "exm": {
      "en": "Haven't eaten yet",
      "zh-TW": "還沒吃",
      "zh-CN": "还没吃",
      "ko": "Haven't eaten yet",
      "vi": "Haven't eaten yet",
      "id": "Haven't eaten yet",
      "es": "Haven't eaten yet",
      "pt": "Haven't eaten yet"
    }
  },
  {
    "id": "V0473",
    "w": "もう",
    "r": "もう",
    "m": {
      "en": "already",
      "zh-TW": "已經",
      "zh-CN": "已经",
      "ko": "already",
      "vi": "already",
      "id": "already",
      "es": "already",
      "pt": "already"
    },
    "ex": "もう食べた",
    "exm": {
      "en": "Already ate",
      "zh-TW": "已經吃了",
      "zh-CN": "已经吃了",
      "ko": "Already ate",
      "vi": "Already ate",
      "id": "Already ate",
      "es": "Already ate",
      "pt": "Already ate"
    }
  },
  {
    "id": "V0474",
    "w": "いつも",
    "r": "いつも",
    "m": {
      "en": "always",
      "zh-TW": "總是",
      "zh-CN": "总是",
      "ko": "항상",
      "vi": "luôn luôn",
      "id": "selalu",
      "es": "always",
      "pt": "always"
    },
    "ex": "いつも早く起きる",
    "exm": {
      "en": "Always wake up early",
      "zh-TW": "總是早起",
      "zh-CN": "总是早起",
      "ko": "항상 일어나다 위로 이른",
      "vi": "luôn luôn thức dậy lên sớm",
      "id": "selalu bangun naik awal",
      "es": "Always wake up early",
      "pt": "Always wake up early"
    }
  },
  {
    "id": "V0475",
    "w": "時々",
    "r": "ときどき",
    "m": {
      "en": "sometimes",
      "zh-TW": "有時",
      "zh-CN": "有时",
      "ko": "가끔",
      "vi": "đôi khi",
      "id": "kadang-kadang",
      "es": "sometimes",
      "pt": "sometimes"
    },
    "ex": "時々映画を見る",
    "exm": {
      "en": "Sometimes watch movies",
      "zh-TW": "有時看電影",
      "zh-CN": "有时看电影",
      "ko": "가끔 보다",
      "vi": "đôi khi xem",
      "id": "kadang-kadang menonton",
      "es": "Sometimes watch movies",
      "pt": "Sometimes watch movies"
    }
  },
  {
    "id": "V0476",
    "w": "よく",
    "r": "よく",
    "m": {
      "en": "often",
      "zh-TW": "經常",
      "zh-CN": "经常",
      "ko": "자주",
      "vi": "thường",
      "id": "sering",
      "es": "often",
      "pt": "often"
    },
    "ex": "よく勉強する",
    "exm": {
      "en": "Study often",
      "zh-TW": "經常學習",
      "zh-CN": "经常学习",
      "ko": "공부하다 자주",
      "vi": "học thường",
      "id": "belajar sering",
      "es": "Study often",
      "pt": "Study often"
    }
  },
  {
    "id": "V0477",
    "w": "あまり",
    "r": "あまり",
    "m": {
      "en": "not much",
      "zh-TW": "不太",
      "zh-CN": "不太",
      "ko": "not much",
      "vi": "not much",
      "id": "not much",
      "es": "not much",
      "pt": "not much"
    },
    "ex": "あまり好きじゃない",
    "exm": {
      "en": "Don't like much",
      "zh-TW": "不太喜歡",
      "zh-CN": "不太喜欢",
      "ko": "좋아하다",
      "vi": "thích",
      "id": "suka",
      "es": "Don't like much",
      "pt": "Don't like much"
    }
  },
  {
    "id": "V0478",
    "w": "ぜんぜん",
    "r": "ぜんぜん",
    "m": {
      "en": "not at all",
      "zh-TW": "完全不",
      "zh-CN": "完全不",
      "ko": "not at all",
      "vi": "not at all",
      "id": "not at all",
      "es": "not at all",
      "pt": "not at all"
    },
    "ex": "全然分からない",
    "exm": {
      "en": "Don't understand",
      "zh-TW": "完全不懂",
      "zh-CN": "完全不懂",
      "ko": "이해하다",
      "vi": "hiểu",
      "id": "mengerti",
      "es": "Don't understand",
      "pt": "Don't understand"
    }
  },
  {
    "id": "V0479",
    "w": "ゆっくり",
    "r": "ゆっくり",
    "m": {
      "en": "slowly",
      "zh-TW": "慢慢",
      "zh-CN": "慢慢",
      "ko": "천천히",
      "vi": "chậm",
      "id": "pelan",
      "es": "slowly",
      "pt": "slowly"
    },
    "ex": "ゆっくり話す",
    "exm": {
      "en": "Speak slowly",
      "zh-TW": "慢慢說",
      "zh-CN": "慢慢说",
      "ko": "말하다 천천히",
      "vi": "nói chậm",
      "id": "berbicara pelan",
      "es": "Speak slowly",
      "pt": "Speak slowly"
    }
  },
  {
    "id": "V0480",
    "w": "すぐ",
    "r": "すぐ",
    "m": {
      "en": "immediately",
      "zh-TW": "馬上",
      "zh-CN": "马上",
      "ko": "immediately",
      "vi": "immediately",
      "id": "immediately",
      "es": "immediately",
      "pt": "immediately"
    },
    "ex": "すぐ来る",
    "exm": {
      "en": "Come immediately",
      "zh-TW": "馬上來",
      "zh-CN": "马上来",
      "ko": "오다",
      "vi": "đến",
      "id": "datang",
      "es": "Come immediately",
      "pt": "Come immediately"
    }
  },
  {
    "id": "V0481",
    "w": "いっしょに",
    "r": "いっしょに",
    "m": {
      "en": "together",
      "zh-TW": "一起",
      "zh-CN": "一起",
      "ko": "함께",
      "vi": "cùng nhau",
      "id": "bersama",
      "es": "together",
      "pt": "together"
    },
    "ex": "一緒に行く",
    "exm": {
      "en": "Go together",
      "zh-TW": "一起去",
      "zh-CN": "一起去",
      "ko": "가다 함께",
      "vi": "đi cùng nhau",
      "id": "pergi bersama",
      "es": "Go together",
      "pt": "Go together"
    }
  },
  {
    "id": "V0482",
    "w": "はじめて",
    "r": "はじめて",
    "m": {
      "en": "first time",
      "zh-TW": "第一次",
      "zh-CN": "第一次",
      "ko": "시간",
      "vi": "thời gian",
      "id": "waktu",
      "es": "first time",
      "pt": "first time"
    },
    "ex": "初めて会う",
    "exm": {
      "en": "Meet for first time",
      "zh-TW": "第一次見面",
      "zh-CN": "第一次见面",
      "ko": "만나다 시간",
      "vi": "gặp thời gian",
      "id": "bertemu waktu",
      "es": "Meet for first time",
      "pt": "Meet for first time"
    }
  },
  {
    "id": "V0483",
    "w": "たぶん",
    "r": "たぶん",
    "m": {
      "en": "probably",
      "zh-TW": "大概",
      "zh-CN": "大概",
      "ko": "probably",
      "vi": "probably",
      "id": "probably",
      "es": "probably",
      "pt": "probably"
    },
    "ex": "多分来る",
    "exm": {
      "en": "Probably come",
      "zh-TW": "大概會來",
      "zh-CN": "大概会来",
      "ko": "오다",
      "vi": "đến",
      "id": "datang",
      "es": "Probably come",
      "pt": "Probably come"
    }
  },
  {
    "id": "V0484",
    "w": "ほんとうに",
    "r": "ほんとうに",
    "m": {
      "en": "really",
      "zh-TW": "真的",
      "zh-CN": "真的",
      "ko": "정말",
      "vi": "thực sự",
      "id": "benar-benar",
      "es": "really",
      "pt": "really"
    },
    "ex": "本当に美味しい",
    "exm": {
      "en": "Really delicious",
      "zh-TW": "真的好吃",
      "zh-CN": "真的好吃",
      "ko": "정말 맛있는",
      "vi": "thực sự ngon",
      "id": "benar-benar enak",
      "es": "Really delicious",
      "pt": "Really delicious"
    }
  },
  {
    "id": "V0485",
    "w": "かならず",
    "r": "かならず",
    "m": {
      "en": "certainly",
      "zh-TW": "一定",
      "zh-CN": "一定",
      "ko": "certainly",
      "vi": "certainly",
      "id": "certainly",
      "es": "certainly",
      "pt": "certainly"
    },
    "ex": "必ず来る",
    "exm": {
      "en": "Certainly come",
      "zh-TW": "一定來",
      "zh-CN": "一定来",
      "ko": "오다",
      "vi": "đến",
      "id": "datang",
      "es": "Certainly come",
      "pt": "Certainly come"
    }
  },
  {
    "id": "V0486",
    "w": "だんだん",
    "r": "だんだん",
    "m": {
      "en": "gradually",
      "zh-TW": "漸漸",
      "zh-CN": "渐渐",
      "ko": "gradually",
      "vi": "gradually",
      "id": "gradually",
      "es": "gradually",
      "pt": "gradually"
    },
    "ex": "だんだん上手になる",
    "exm": {
      "en": "Gradually improve",
      "zh-TW": "漸漸變好",
      "zh-CN": "渐渐变好",
      "ko": "Gradually improve",
      "vi": "Gradually improve",
      "id": "Gradually improve",
      "es": "Gradually improve",
      "pt": "Gradually improve"
    }
  },
  {
    "id": "V0487",
    "w": "何",
    "r": "なに",
    "m": {
      "en": "what",
      "zh-TW": "什麼",
      "zh-CN": "什么",
      "ko": "무엇",
      "vi": "Cái gì",
      "id": "Apa",
      "es": "what",
      "pt": "what"
    },
    "ex": "何を食べる",
    "exm": {
      "en": "What to eat",
      "zh-TW": "吃什麼",
      "zh-CN": "吃什么",
      "ko": "먹다",
      "vi": "ăn",
      "id": "makan",
      "es": "What to eat",
      "pt": "What to eat"
    }
  },
  {
    "id": "V0488",
    "w": "だれ",
    "r": "だれ",
    "m": {
      "en": "who",
      "zh-TW": "誰",
      "zh-CN": "谁",
      "ko": "누구",
      "vi": "Ai",
      "id": "Siapa",
      "es": "who",
      "pt": "who"
    },
    "ex": "誰ですか",
    "exm": {
      "en": "Who is it?",
      "zh-TW": "是誰",
      "zh-CN": "是谁",
      "ko": "Who is it?",
      "vi": "Who is it?",
      "id": "Who is it?",
      "es": "Who is it?",
      "pt": "Who is it?"
    }
  },
  {
    "id": "V0489",
    "w": "どこ",
    "r": "どこ",
    "m": {
      "en": "where",
      "zh-TW": "哪裡",
      "zh-CN": "哪里",
      "ko": "어디",
      "vi": "Ở đâu",
      "id": "Di mana",
      "es": "where",
      "pt": "where"
    },
    "ex": "どこに行く",
    "exm": {
      "en": "Where to go",
      "zh-TW": "去哪裡",
      "zh-CN": "去哪里",
      "ko": "가다",
      "vi": "đi",
      "id": "pergi",
      "es": "Where to go",
      "pt": "Where to go"
    }
  },
  {
    "id": "V0490",
    "w": "いつ",
    "r": "いつ",
    "m": {
      "en": "when",
      "zh-TW": "什麼時候",
      "zh-CN": "什么时候",
      "ko": "언제",
      "vi": "Khi nào",
      "id": "Kapan",
      "es": "when",
      "pt": "when"
    },
    "ex": "いつ来る",
    "exm": {
      "en": "When to come",
      "zh-TW": "什麼時候來",
      "zh-CN": "什么时候来",
      "ko": "오다",
      "vi": "đến",
      "id": "datang",
      "es": "When to come",
      "pt": "When to come"
    }
  },
  {
    "id": "V0491",
    "w": "どうして",
    "r": "どうして",
    "m": {
      "en": "why",
      "zh-TW": "為什麼",
      "zh-CN": "为什么",
      "ko": "왜",
      "vi": "Tại sao",
      "id": "Mengapa",
      "es": "why",
      "pt": "why"
    },
    "ex": "どうして来ない",
    "exm": {
      "en": "Why not come",
      "zh-TW": "為什麼不來",
      "zh-CN": "为什么不来",
      "ko": "오다",
      "vi": "đến",
      "id": "datang",
      "es": "Why not come",
      "pt": "Why not come"
    }
  },
  {
    "id": "V0492",
    "w": "どう",
    "r": "どう",
    "m": {
      "en": "how",
      "zh-TW": "怎麼",
      "zh-CN": "怎么",
      "ko": "어떻게",
      "vi": "Như thế nào",
      "id": "Bagaimana",
      "es": "how",
      "pt": "how"
    },
    "ex": "どうですか",
    "exm": {
      "en": "How is it?",
      "zh-TW": "怎麼樣",
      "zh-CN": "怎么样",
      "ko": "How is it?",
      "vi": "How is it?",
      "id": "How is it?",
      "es": "How is it?",
      "pt": "How is it?"
    }
  },
  {
    "id": "V0493",
    "w": "いくら",
    "r": "いくら",
    "m": {
      "en": "how much",
      "zh-TW": "多少",
      "zh-CN": "多少",
      "ko": "얼마",
      "vi": "Bao nhiêu",
      "id": "Berapa",
      "es": "how much",
      "pt": "how much"
    },
    "ex": "いくらですか",
    "exm": {
      "en": "How much?",
      "zh-TW": "多少錢",
      "zh-CN": "多少钱",
      "ko": "How much?",
      "vi": "How much?",
      "id": "How much?",
      "es": "How much?",
      "pt": "How much?"
    }
  },
  {
    "id": "V0494",
    "w": "いくつ",
    "r": "いくつ",
    "m": {
      "en": "how many",
      "zh-TW": "幾個",
      "zh-CN": "几个",
      "ko": "많다",
      "vi": "nhiều",
      "id": "banyak",
      "es": "how many",
      "pt": "how many"
    },
    "ex": "いくつありますか",
    "exm": {
      "en": "How many?",
      "zh-TW": "有幾個",
      "zh-CN": "有几个",
      "ko": "How many?",
      "vi": "How many?",
      "id": "How many?",
      "es": "How many?",
      "pt": "How many?"
    }
  },
  {
    "id": "V0495",
    "w": "これ",
    "r": "これ",
    "m": {
      "en": "this",
      "zh-TW": "這個",
      "zh-CN": "这个",
      "ko": "이것",
      "vi": "Cái này",
      "id": "Ini",
      "es": "this",
      "pt": "this"
    },
    "ex": "これは何",
    "exm": {
      "en": "What is this?",
      "zh-TW": "這是什麼",
      "zh-CN": "这是什么",
      "ko": "What is this?",
      "vi": "What is this?",
      "id": "What is this?",
      "es": "What is this?",
      "pt": "What is this?"
    }
  },
  {
    "id": "V0496",
    "w": "それ",
    "r": "それ",
    "m": {
      "en": "that",
      "zh-TW": "那個",
      "zh-CN": "那个",
      "ko": "저것",
      "vi": "Cái đó",
      "id": "Itu",
      "es": "that",
      "pt": "that"
    },
    "ex": "それは本",
    "exm": {
      "en": "That is a book",
      "zh-TW": "那是書",
      "zh-CN": "那是书",
      "ko": "책",
      "vi": "sách",
      "id": "buku",
      "es": "That is a book",
      "pt": "That is a book"
    }
  },
  {
    "id": "V0497",
    "w": "あれ",
    "r": "あれ",
    "m": {
      "en": "that (far)",
      "zh-TW": "那個",
      "zh-CN": "那个",
      "ko": "that (far)",
      "vi": "that (far)",
      "id": "that (far)",
      "es": "that (far)",
      "pt": "that (far)"
    },
    "ex": "あれは何",
    "exm": {
      "en": "What is that?",
      "zh-TW": "那是什麼",
      "zh-CN": "那是什么",
      "ko": "What is that?",
      "vi": "What is that?",
      "id": "What is that?",
      "es": "What is that?",
      "pt": "What is that?"
    }
  },
  {
    "id": "V0498",
    "w": "この",
    "r": "この",
    "m": {
      "en": "this",
      "zh-TW": "這個",
      "zh-CN": "这个",
      "ko": "이것",
      "vi": "Cái này",
      "id": "Ini",
      "es": "this",
      "pt": "this"
    },
    "ex": "この本",
    "exm": {
      "en": "This book",
      "zh-TW": "這本書",
      "zh-CN": "这本书",
      "ko": "책",
      "vi": "sách",
      "id": "buku",
      "es": "This book",
      "pt": "This book"
    }
  },
  {
    "id": "V0499",
    "w": "その",
    "r": "その",
    "m": {
      "en": "that",
      "zh-TW": "那個",
      "zh-CN": "那个",
      "ko": "저것",
      "vi": "Cái đó",
      "id": "Itu",
      "es": "that",
      "pt": "that"
    },
    "ex": "その本",
    "exm": {
      "en": "That book",
      "zh-TW": "那本書",
      "zh-CN": "那本书",
      "ko": "책",
      "vi": "sách",
      "id": "buku",
      "es": "That book",
      "pt": "That book"
    }
  },
  {
    "id": "V0500",
    "w": "あの",
    "r": "あの",
    "m": {
      "en": "that (far)",
      "zh-TW": "那",
      "zh-CN": "那",
      "ko": "that (far)",
      "vi": "that (far)",
      "id": "that (far)",
      "es": "that (far)",
      "pt": "that (far)"
    },
    "ex": "あの人",
    "exm": {
      "en": "That person",
      "zh-TW": "那個人",
      "zh-CN": "那个人",
      "ko": "사람",
      "vi": "người",
      "id": "orang",
      "es": "That person",
      "pt": "That person"
    }
  },
  {
    "id": "V0501",
    "w": "ここ",
    "r": "ここ",
    "m": {
      "en": "here",
      "zh-TW": "這裡",
      "zh-CN": "这里",
      "ko": "여기",
      "vi": "đây",
      "id": "di sini",
      "es": "here",
      "pt": "here"
    },
    "ex": "ここに座る",
    "exm": {
      "en": "Sit here",
      "zh-TW": "坐這裡",
      "zh-CN": "坐这里",
      "ko": "앉다 여기",
      "vi": "ngồi đây",
      "id": "duduk di sini",
      "es": "Sit here",
      "pt": "Sit here"
    }
  },
  {
    "id": "V0502",
    "w": "そこ",
    "r": "そこ",
    "m": {
      "en": "there",
      "zh-TW": "那裡",
      "zh-CN": "那里",
      "ko": "거기",
      "vi": "đó",
      "id": "di sana",
      "es": "there",
      "pt": "there"
    },
    "ex": "そこに置く",
    "exm": {
      "en": "Put there",
      "zh-TW": "放那裡",
      "zh-CN": "放那里",
      "ko": "놓다 거기",
      "vi": "đặt đó",
      "id": "meletakkan di sana",
      "es": "Put there",
      "pt": "Put there"
    }
  },
  {
    "id": "V0503",
    "w": "あそこ",
    "r": "あそこ",
    "m": {
      "en": "over there",
      "zh-TW": "那邊",
      "zh-CN": "那边",
      "ko": "거기",
      "vi": "đó",
      "id": "di sana",
      "es": "over there",
      "pt": "over there"
    },
    "ex": "あそこに行く",
    "exm": {
      "en": "Go there",
      "zh-TW": "去那邊",
      "zh-CN": "去那边",
      "ko": "가다 거기",
      "vi": "đi đó",
      "id": "pergi di sana",
      "es": "Go there",
      "pt": "Go there"
    }
  },
  {
    "id": "V0504",
    "w": "上",
    "r": "うえ",
    "m": {
      "en": "above",
      "zh-TW": "上面",
      "zh-CN": "上面",
      "ko": "위",
      "vi": "Trên",
      "id": "Atas",
      "es": "above",
      "pt": "above"
    },
    "ex": "机の上",
    "exm": {
      "en": "On desk",
      "zh-TW": "桌上",
      "zh-CN": "桌上",
      "ko": "On desk",
      "vi": "On desk",
      "id": "On desk",
      "es": "On desk",
      "pt": "On desk"
    }
  },
  {
    "id": "V0505",
    "w": "下",
    "r": "した",
    "m": {
      "en": "below",
      "zh-TW": "下面",
      "zh-CN": "下面",
      "ko": "아래",
      "vi": "Dưới",
      "id": "Bawah",
      "es": "below",
      "pt": "below"
    },
    "ex": "机の下",
    "exm": {
      "en": "Under desk",
      "zh-TW": "桌下",
      "zh-CN": "桌下",
      "ko": "Under desk",
      "vi": "Under desk",
      "id": "Under desk",
      "es": "Under desk",
      "pt": "Under desk"
    }
  },
  {
    "id": "V0506",
    "w": "中",
    "r": "なか",
    "m": {
      "en": "inside",
      "zh-TW": "裡面",
      "zh-CN": "里面",
      "ko": "안",
      "vi": "Bên trong",
      "id": "Dalam",
      "es": "inside",
      "pt": "inside"
    },
    "ex": "かばんの中",
    "exm": {
      "en": "Inside bag",
      "zh-TW": "包裡",
      "zh-CN": "包里",
      "ko": "Inside bag",
      "vi": "Inside bag",
      "id": "Inside bag",
      "es": "Inside bag",
      "pt": "Inside bag"
    }
  },
  {
    "id": "V0507",
    "w": "外",
    "r": "そと",
    "m": {
      "en": "outside",
      "zh-TW": "外面",
      "zh-CN": "外面",
      "ko": "밖",
      "vi": "Bên ngoài",
      "id": "Luar",
      "es": "outside",
      "pt": "outside"
    },
    "ex": "家の外",
    "exm": {
      "en": "Outside house",
      "zh-TW": "房外",
      "zh-CN": "房外",
      "ko": "집",
      "vi": "nhà",
      "id": "rumah",
      "es": "Outside house",
      "pt": "Outside house"
    }
  },
  {
    "id": "V0508",
    "w": "前",
    "r": "まえ",
    "m": {
      "en": "front",
      "zh-TW": "前",
      "zh-CN": "前",
      "ko": "앞",
      "vi": "Trước",
      "id": "Depan",
      "es": "front",
      "pt": "front"
    },
    "ex": "駅の前",
    "exm": {
      "en": "Front of station",
      "zh-TW": "車站前",
      "zh-CN": "车站前",
      "ko": "역",
      "vi": "ga",
      "id": "stasiun",
      "es": "Front of station",
      "pt": "Front of station"
    }
  },
  {
    "id": "V0509",
    "w": "後ろ",
    "r": "うしろ",
    "m": {
      "en": "behind",
      "zh-TW": "後面",
      "zh-CN": "后面",
      "ko": "behind",
      "vi": "behind",
      "id": "behind",
      "es": "behind",
      "pt": "behind"
    },
    "ex": "家の後ろ",
    "exm": {
      "en": "Behind house",
      "zh-TW": "房後",
      "zh-CN": "房后",
      "ko": "집",
      "vi": "nhà",
      "id": "rumah",
      "es": "Behind house",
      "pt": "Behind house"
    }
  },
  {
    "id": "V0510",
    "w": "右",
    "r": "みぎ",
    "m": {
      "en": "right",
      "zh-TW": "右",
      "zh-CN": "右",
      "ko": "오른쪽",
      "vi": "Phải",
      "id": "Kanan",
      "es": "right",
      "pt": "right"
    },
    "ex": "右に曲がる",
    "exm": {
      "en": "Turn right",
      "zh-TW": "向右轉",
      "zh-CN": "向右转",
      "ko": "돌다",
      "vi": "quay",
      "id": "berputar",
      "es": "Turn right",
      "pt": "Turn right"
    }
  },
  {
    "id": "V0511",
    "w": "左",
    "r": "ひだり",
    "m": {
      "en": "left",
      "zh-TW": "左",
      "zh-CN": "左",
      "ko": "왼쪽",
      "vi": "Trái",
      "id": "Kiri",
      "es": "left",
      "pt": "left"
    },
    "ex": "左に曲がる",
    "exm": {
      "en": "Turn left",
      "zh-TW": "向左轉",
      "zh-CN": "向左转",
      "ko": "돌다",
      "vi": "quay",
      "id": "berputar",
      "es": "Turn left",
      "pt": "Turn left"
    }
  },
  {
    "id": "V0512",
    "w": "となり",
    "r": "となり",
    "m": {
      "en": "next to",
      "zh-TW": "隔壁",
      "zh-CN": "隔壁",
      "ko": "next to",
      "vi": "next to",
      "id": "next to",
      "es": "next to",
      "pt": "next to"
    },
    "ex": "隣の部屋",
    "exm": {
      "en": "Next room",
      "zh-TW": "隔壁房",
      "zh-CN": "隔壁房",
      "ko": "방",
      "vi": "phòng",
      "id": "kamar",
      "es": "Next room",
      "pt": "Next room"
    }
  },
  {
    "id": "V0513",
    "w": "間",
    "r": "あいだ",
    "m": {
      "en": "between",
      "zh-TW": "之間",
      "zh-CN": "之间",
      "ko": "between",
      "vi": "between",
      "id": "between",
      "es": "between",
      "pt": "between"
    },
    "ex": "駅と家の間",
    "exm": {
      "en": "Between",
      "zh-TW": "之間",
      "zh-CN": "之间",
      "ko": "Between",
      "vi": "Between",
      "id": "Between",
      "es": "Between",
      "pt": "Between"
    }
  },
  {
    "id": "V0514",
    "w": "はい",
    "r": "はい",
    "m": {
      "en": "yes",
      "zh-TW": "是",
      "zh-CN": "是",
      "ko": "yes",
      "vi": "yes",
      "id": "yes",
      "es": "yes",
      "pt": "yes"
    },
    "ex": "はい、そうです",
    "exm": {
      "en": "Yes",
      "zh-TW": "是的",
      "zh-CN": "是的",
      "ko": "Yes",
      "vi": "Yes",
      "id": "Yes",
      "es": "Yes",
      "pt": "Yes"
    }
  },
  {
    "id": "V0515",
    "w": "いいえ",
    "r": "いいえ",
    "m": {
      "en": "no",
      "zh-TW": "不是",
      "zh-CN": "不是",
      "ko": "no",
      "vi": "no",
      "id": "no",
      "es": "no",
      "pt": "no"
    },
    "ex": "いいえ、違います",
    "exm": {
      "en": "No",
      "zh-TW": "不是",
      "zh-CN": "不是",
      "ko": "No",
      "vi": "No",
      "id": "No",
      "es": "No",
      "pt": "No"
    }
  },
  {
    "id": "V0516",
    "w": "ありがとう",
    "r": "ありがとう",
    "m": {
      "en": "thank you",
      "zh-TW": "謝謝",
      "zh-CN": "谢谢",
      "ko": "감사합니다",
      "vi": "Cảm ơn",
      "id": "Terima kasih",
      "es": "thank you",
      "pt": "thank you"
    },
    "ex": "ありがとうございます",
    "exm": {
      "en": "Thank you",
      "zh-TW": "謝謝",
      "zh-CN": "谢谢",
      "ko": "Thank you",
      "vi": "Thank you",
      "id": "Thank you",
      "es": "Thank you",
      "pt": "Thank you"
    }
  },
  {
    "id": "V0517",
    "w": "すみません",
    "r": "すみません",
    "m": {
      "en": "excuse me",
      "zh-TW": "不好意思",
      "zh-CN": "不好意思",
      "ko": "실례합니다",
      "vi": "Xin lỗi",
      "id": "Permisi",
      "es": "excuse me",
      "pt": "excuse me"
    },
    "ex": "すみません",
    "exm": {
      "en": "Excuse me",
      "zh-TW": "對不起",
      "zh-CN": "对不起",
      "ko": "Excuse me",
      "vi": "Excuse me",
      "id": "Excuse me",
      "es": "Excuse me",
      "pt": "Excuse me"
    }
  },
  {
    "id": "V0518",
    "w": "ごめんなさい",
    "r": "ごめんなさい",
    "m": {
      "en": "sorry",
      "zh-TW": "抱歉",
      "zh-CN": "抱歉",
      "ko": "sorry",
      "vi": "sorry",
      "id": "sorry",
      "es": "sorry",
      "pt": "sorry"
    },
    "ex": "ごめんなさい",
    "exm": {
      "en": "I'm sorry",
      "zh-TW": "抱歉",
      "zh-CN": "抱歉",
      "ko": "I'm sorry",
      "vi": "I'm sorry",
      "id": "I'm sorry",
      "es": "I'm sorry",
      "pt": "I'm sorry"
    }
  },
  {
    "id": "V0519",
    "w": "おねがいします",
    "r": "おねがいします",
    "m": {
      "en": "please",
      "zh-TW": "拜託",
      "zh-CN": "拜托",
      "ko": "please",
      "vi": "please",
      "id": "please",
      "es": "please",
      "pt": "please"
    },
    "ex": "お願いします",
    "exm": {
      "en": "Please",
      "zh-TW": "拜託",
      "zh-CN": "拜托",
      "ko": "Please",
      "vi": "Please",
      "id": "Please",
      "es": "Please",
      "pt": "Please"
    }
  },
  {
    "id": "V0520",
    "w": "おはよう",
    "r": "おはよう",
    "m": {
      "en": "good morning",
      "zh-TW": "早安",
      "zh-CN": "早上好",
      "ko": "좋은 아침",
      "vi": "Chào buổi sáng",
      "id": "Selamat pagi",
      "es": "good morning",
      "pt": "good morning"
    },
    "ex": "おはようございます",
    "exm": {
      "en": "Good morning",
      "zh-TW": "早安",
      "zh-CN": "早安",
      "ko": "좋은 아침",
      "vi": "tốt sáng",
      "id": "bagus pagi",
      "es": "Good morning",
      "pt": "Good morning"
    }
  },
  {
    "id": "V0521",
    "w": "こんにちは",
    "r": "こんにちは",
    "m": {
      "en": "hello",
      "zh-TW": "你好",
      "zh-CN": "你好",
      "ko": "안녕하세요",
      "vi": "Xin chào",
      "id": "Halo",
      "es": "hello",
      "pt": "hello"
    },
    "ex": "こんにちは",
    "exm": {
      "en": "Hello",
      "zh-TW": "你好",
      "zh-CN": "你好",
      "ko": "Hello",
      "vi": "Hello",
      "id": "Hello",
      "es": "Hello",
      "pt": "Hello"
    }
  },
  {
    "id": "V0522",
    "w": "こんばんは",
    "r": "こんばんは",
    "m": {
      "en": "good evening",
      "zh-TW": "晚安",
      "zh-CN": "晚上好",
      "ko": "좋은 저녁",
      "vi": "Chào buổi tối",
      "id": "Selamat malam",
      "es": "good evening",
      "pt": "good evening"
    },
    "ex": "こんばんは",
    "exm": {
      "en": "Good evening",
      "zh-TW": "晚上好",
      "zh-CN": "晚上好",
      "ko": "좋은 저녁",
      "vi": "tốt tối",
      "id": "bagus malam",
      "es": "Good evening",
      "pt": "Good evening"
    }
  },
  {
    "id": "V0523",
    "w": "さようなら",
    "r": "さようなら",
    "m": {
      "en": "goodbye",
      "zh-TW": "再見",
      "zh-CN": "再见",
      "ko": "안녕히 가세요",
      "vi": "Tạm biệt",
      "id": "Selamat tinggal",
      "es": "goodbye",
      "pt": "goodbye"
    },
    "ex": "さようなら",
    "exm": {
      "en": "Goodbye",
      "zh-TW": "再見",
      "zh-CN": "再见",
      "ko": "Goodbye",
      "vi": "Goodbye",
      "id": "Goodbye",
      "es": "Goodbye",
      "pt": "Goodbye"
    }
  },
  {
    "id": "V0524",
    "w": "おやすみ",
    "r": "おやすみ",
    "m": {
      "en": "good night",
      "zh-TW": "晚安",
      "zh-CN": "晚安",
      "ko": "좋다",
      "vi": "tốt",
      "id": "baik",
      "es": "good night",
      "pt": "good night"
    },
    "ex": "おやすみなさい",
    "exm": {
      "en": "Good night",
      "zh-TW": "晚安",
      "zh-CN": "晚安",
      "ko": "좋은 밤",
      "vi": "tốt đêm",
      "id": "bagus malam",
      "es": "Good night",
      "pt": "Good night"
    }
  },
  {
    "id": "V0525",
    "w": "いただきます",
    "r": "いただきます",
    "m": {
      "en": "bon appetit",
      "zh-TW": "開動了",
      "zh-CN": "开动了",
      "ko": "bon appetit",
      "vi": "bon appetit",
      "id": "bon appetit",
      "es": "bon appetit",
      "pt": "bon appetit"
    },
    "ex": "いただきます",
    "exm": {
      "en": "Let's eat",
      "zh-TW": "開動了",
      "zh-CN": "开动了",
      "ko": "먹다",
      "vi": "ăn",
      "id": "makan",
      "es": "Let's eat",
      "pt": "Let's eat"
    }
  },
  {
    "id": "V0526",
    "w": "ごちそうさま",
    "r": "ごちそうさま",
    "m": {
      "en": "thanks for meal",
      "zh-TW": "謝謝款待",
      "zh-CN": "谢谢款待",
      "ko": "thanks for meal",
      "vi": "thanks for meal",
      "id": "thanks for meal",
      "es": "thanks for meal",
      "pt": "thanks for meal"
    },
    "ex": "ごちそうさまでした",
    "exm": {
      "en": "Thanks for meal",
      "zh-TW": "謝謝款待",
      "zh-CN": "谢谢款待",
      "ko": "Thanks for meal",
      "vi": "Thanks for meal",
      "id": "Thanks for meal",
      "es": "Thanks for meal",
      "pt": "Thanks for meal"
    }
  },
  {
    "id": "V0527",
    "w": "一つ",
    "r": "ひとつ",
    "m": {
      "en": "one thing",
      "zh-TW": "一個",
      "zh-CN": "一个",
      "ko": "one thing",
      "vi": "one thing",
      "id": "one thing",
      "es": "one thing",
      "pt": "one thing"
    },
    "ex": "一つください",
    "exm": {
      "en": "One please",
      "zh-TW": "請給一個",
      "zh-CN": "请给一个",
      "ko": "One please",
      "vi": "One please",
      "id": "One please",
      "es": "One please",
      "pt": "One please"
    }
  },
  {
    "id": "V0528",
    "w": "二つ",
    "r": "ふたつ",
    "m": {
      "en": "two things",
      "zh-TW": "兩個",
      "zh-CN": "两个",
      "ko": "two things",
      "vi": "two things",
      "id": "two things",
      "es": "two things",
      "pt": "two things"
    },
    "ex": "二つ買う",
    "exm": {
      "en": "Buy two",
      "zh-TW": "買兩個",
      "zh-CN": "买两个",
      "ko": "사다",
      "vi": "mua",
      "id": "membeli",
      "es": "Buy two",
      "pt": "Buy two"
    }
  },
  {
    "id": "V0529",
    "w": "三つ",
    "r": "みっつ",
    "m": {
      "en": "three things",
      "zh-TW": "三個",
      "zh-CN": "三个",
      "ko": "three things",
      "vi": "three things",
      "id": "three things",
      "es": "three things",
      "pt": "three things"
    },
    "ex": "三つある",
    "exm": {
      "en": "There are three",
      "zh-TW": "有三個",
      "zh-CN": "有三个",
      "ko": "거기",
      "vi": "đó",
      "id": "di sana",
      "es": "There are three",
      "pt": "There are three"
    }
  },
  {
    "id": "V0530",
    "w": "四つ",
    "r": "よっつ",
    "m": {
      "en": "four things",
      "zh-TW": "四個",
      "zh-CN": "四个",
      "ko": "four things",
      "vi": "four things",
      "id": "four things",
      "es": "four things",
      "pt": "four things"
    },
    "ex": "四つください",
    "exm": {
      "en": "Four please",
      "zh-TW": "請給四個",
      "zh-CN": "请给四个",
      "ko": "Four please",
      "vi": "Four please",
      "id": "Four please",
      "es": "Four please",
      "pt": "Four please"
    }
  },
  {
    "id": "V0531",
    "w": "五つ",
    "r": "いつつ",
    "m": {
      "en": "five things",
      "zh-TW": "五個",
      "zh-CN": "五个",
      "ko": "five things",
      "vi": "five things",
      "id": "five things",
      "es": "five things",
      "pt": "five things"
    },
    "ex": "五つ食べた",
    "exm": {
      "en": "Ate five",
      "zh-TW": "吃了五個",
      "zh-CN": "吃了五个",
      "ko": "Ate five",
      "vi": "Ate five",
      "id": "Ate five",
      "es": "Ate five",
      "pt": "Ate five"
    }
  },
  {
    "id": "V0532",
    "w": "一人",
    "r": "ひとり",
    "m": {
      "en": "one person",
      "zh-TW": "一個人",
      "zh-CN": "一个人",
      "ko": "한 사람",
      "vi": "một người",
      "id": "satu orang",
      "es": "one person",
      "pt": "one person"
    },
    "ex": "一人で行く",
    "exm": {
      "en": "Go alone",
      "zh-TW": "一個人去",
      "zh-CN": "一个人去",
      "ko": "가다 혼자",
      "vi": "đi một mình",
      "id": "pergi sendirian",
      "es": "Go alone",
      "pt": "Go alone"
    }
  },
  {
    "id": "V0533",
    "w": "二人",
    "r": "ふたり",
    "m": {
      "en": "two people",
      "zh-TW": "兩個人",
      "zh-CN": "两个人",
      "ko": "두 사람",
      "vi": "hai người",
      "id": "dua orang",
      "es": "two people",
      "pt": "two people"
    },
    "ex": "二人で行く",
    "exm": {
      "en": "Go with two",
      "zh-TW": "兩個人去",
      "zh-CN": "两个人去",
      "ko": "가다",
      "vi": "đi",
      "id": "pergi",
      "es": "Go with two",
      "pt": "Go with two"
    }
  },
  {
    "id": "V0534",
    "w": "いっかい",
    "r": "いっかい",
    "m": {
      "en": "one time",
      "zh-TW": "一次",
      "zh-CN": "一次",
      "ko": "시간",
      "vi": "thời gian",
      "id": "waktu",
      "es": "one time",
      "pt": "one time"
    },
    "ex": "一回行った",
    "exm": {
      "en": "Went once",
      "zh-TW": "去了一次",
      "zh-CN": "去了一次",
      "ko": "Went once",
      "vi": "Went once",
      "id": "Went once",
      "es": "Went once",
      "pt": "Went once"
    }
  },
  {
    "id": "V0535",
    "w": "一本",
    "r": "いっぽん",
    "m": {
      "en": "one (long)",
      "zh-TW": "一支",
      "zh-CN": "一支",
      "ko": "one (long)",
      "vi": "one (long)",
      "id": "one (long)",
      "es": "one (long)",
      "pt": "one (long)"
    },
    "ex": "ペンを一本",
    "exm": {
      "en": "One pen",
      "zh-TW": "一支筆",
      "zh-CN": "一支笔",
      "ko": "One pen",
      "vi": "One pen",
      "id": "One pen",
      "es": "One pen",
      "pt": "One pen"
    }
  },
  {
    "id": "V0536",
    "w": "いちまい",
    "r": "いちまい",
    "m": {
      "en": "one (flat)",
      "zh-TW": "一張",
      "zh-CN": "一张",
      "ko": "one (flat)",
      "vi": "one (flat)",
      "id": "one (flat)",
      "es": "one (flat)",
      "pt": "one (flat)"
    },
    "ex": "紙を一枚",
    "exm": {
      "en": "One paper",
      "zh-TW": "一張紙",
      "zh-CN": "一张纸",
      "ko": "One paper",
      "vi": "One paper",
      "id": "One paper",
      "es": "One paper",
      "pt": "One paper"
    }
  },
  {
    "id": "V0537",
    "w": "えいが",
    "r": "えいが",
    "m": {
      "en": "movie",
      "zh-TW": "電影",
      "zh-CN": "电影",
      "ko": "영화",
      "vi": "phim",
      "id": "film",
      "es": "movie",
      "pt": "movie"
    },
    "ex": "映画を見る",
    "exm": {
      "en": "Watch movie",
      "zh-TW": "看電影",
      "zh-CN": "看电影",
      "ko": "보다 영화",
      "vi": "xem phim",
      "id": "menonton film",
      "es": "Watch movie",
      "pt": "Watch movie"
    }
  },
  {
    "id": "V0538",
    "w": "音楽",
    "r": "おんがく",
    "m": {
      "en": "music",
      "zh-TW": "音樂",
      "zh-CN": "音乐",
      "ko": "음악",
      "vi": "nhạc",
      "id": "musik",
      "es": "music",
      "pt": "music"
    },
    "ex": "音楽を聞く",
    "exm": {
      "en": "Listen to music",
      "zh-TW": "聽音樂",
      "zh-CN": "听音乐",
      "ko": "듣다 음악",
      "vi": "nghe nhạc",
      "id": "mendengarkan musik",
      "es": "Listen to music",
      "pt": "Listen to music"
    }
  },
  {
    "id": "V0539",
    "w": "スポーツ",
    "r": "スポーツ",
    "m": {
      "en": "sports",
      "zh-TW": "運動",
      "zh-CN": "运动",
      "ko": "sports",
      "vi": "sports",
      "id": "sports",
      "es": "sports",
      "pt": "sports"
    },
    "ex": "スポーツをする",
    "exm": {
      "en": "Do sports",
      "zh-TW": "做運動",
      "zh-CN": "做运动",
      "ko": "Do sports",
      "vi": "Do sports",
      "id": "Do sports",
      "es": "Do sports",
      "pt": "Do sports"
    }
  },
  {
    "id": "V0540",
    "w": "しゅみ",
    "r": "しゅみ",
    "m": {
      "en": "hobby",
      "zh-TW": "興趣",
      "zh-CN": "兴趣",
      "ko": "hobby",
      "vi": "hobby",
      "id": "hobby",
      "es": "hobby",
      "pt": "hobby"
    },
    "ex": "趣味は何",
    "exm": {
      "en": "What's your hobby?",
      "zh-TW": "興趣是什麼",
      "zh-CN": "兴趣是什么",
      "ko": "What's your hobby?",
      "vi": "What's your hobby?",
      "id": "What's your hobby?",
      "es": "What's your hobby?",
      "pt": "What's your hobby?"
    }
  },
  {
    "id": "V0541",
    "w": "休み",
    "r": "やすみ",
    "m": {
      "en": "holiday",
      "zh-TW": "休息",
      "zh-CN": "休息",
      "ko": "holiday",
      "vi": "holiday",
      "id": "holiday",
      "es": "holiday",
      "pt": "holiday"
    },
    "ex": "明日は休み",
    "exm": {
      "en": "Tomorrow off",
      "zh-TW": "明天休息",
      "zh-CN": "明天休息",
      "ko": "내일 쉬는",
      "vi": "ngày mai nghỉ",
      "id": "besok libur",
      "es": "Tomorrow off",
      "pt": "Tomorrow off"
    }
  },
  {
    "id": "V0542",
    "w": "りょこう",
    "r": "りょこう",
    "m": {
      "en": "travel",
      "zh-TW": "旅行",
      "zh-CN": "旅行",
      "ko": "travel",
      "vi": "travel",
      "id": "travel",
      "es": "travel",
      "pt": "travel"
    },
    "ex": "旅行に行く",
    "exm": {
      "en": "Go on trip",
      "zh-TW": "去旅行",
      "zh-CN": "去旅行",
      "ko": "가다",
      "vi": "đi",
      "id": "pergi",
      "es": "Go on trip",
      "pt": "Go on trip"
    }
  },
  {
    "id": "V0543",
    "w": "しごと",
    "r": "しごと",
    "m": {
      "en": "work",
      "zh-TW": "工作",
      "zh-CN": "工作",
      "ko": "일하다",
      "vi": "làm việc",
      "id": "bekerja",
      "es": "work",
      "pt": "work"
    },
    "ex": "仕事をする",
    "exm": {
      "en": "Do work",
      "zh-TW": "工作",
      "zh-CN": "工作",
      "ko": "일하다",
      "vi": "làm việc",
      "id": "bekerja",
      "es": "Do work",
      "pt": "Do work"
    },
    "syn": [
      "業務",
      "職務",
      "労働"
    ]
  },
  {
    "id": "V0544",
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
    "ex": "会議に出る",
    "exm": {
      "en": "Attend meeting",
      "zh-TW": "開會",
      "zh-CN": "开会",
      "ko": "회의",
      "vi": "cuộc họp",
      "id": "rapat",
      "es": "Attend meeting",
      "pt": "Attend meeting"
    }
  },
  {
    "id": "V0545",
    "w": "しゅくだい",
    "r": "しゅくだい",
    "m": {
      "en": "homework",
      "zh-TW": "作業",
      "zh-CN": "作业",
      "ko": "homework",
      "vi": "homework",
      "id": "homework",
      "es": "homework",
      "pt": "homework"
    },
    "ex": "宿題をする",
    "exm": {
      "en": "Do homework",
      "zh-TW": "做作業",
      "zh-CN": "做作业",
      "ko": "Do homework",
      "vi": "Do homework",
      "id": "Do homework",
      "es": "Do homework",
      "pt": "Do homework"
    }
  },
  {
    "id": "V0546",
    "w": "しけん",
    "r": "しけん",
    "m": {
      "en": "exam",
      "zh-TW": "考試",
      "zh-CN": "考试",
      "ko": "exam",
      "vi": "exam",
      "id": "exam",
      "es": "exam",
      "pt": "exam"
    },
    "ex": "試験を受ける",
    "exm": {
      "en": "Take exam",
      "zh-TW": "考試",
      "zh-CN": "考试",
      "ko": "가지다",
      "vi": "lấy",
      "id": "mengambil",
      "es": "Take exam",
      "pt": "Take exam"
    }
  },
  {
    "id": "V0547",
    "w": "もんだい",
    "r": "もんだい",
    "m": {
      "en": "problem",
      "zh-TW": "問題",
      "zh-CN": "问题",
      "ko": "problem",
      "vi": "problem",
      "id": "problem",
      "es": "problem",
      "pt": "problem"
    },
    "ex": "問題を解く",
    "exm": {
      "en": "Solve problem",
      "zh-TW": "解決問題",
      "zh-CN": "解决问题",
      "ko": "Solve problem",
      "vi": "Solve problem",
      "id": "Solve problem",
      "es": "Solve problem",
      "pt": "Solve problem"
    }
  },
  {
    "id": "V0548",
    "w": "こたえ",
    "r": "こたえ",
    "m": {
      "en": "answer",
      "zh-TW": "答案",
      "zh-CN": "答案",
      "ko": "대답하다",
      "vi": "trả lời",
      "id": "menjawab",
      "es": "answer",
      "pt": "answer"
    },
    "ex": "答えを書く",
    "exm": {
      "en": "Write answer",
      "zh-TW": "寫答案",
      "zh-CN": "写答案",
      "ko": "쓰다 대답하다",
      "vi": "viết trả lời",
      "id": "menulis menjawab",
      "es": "Write answer",
      "pt": "Write answer"
    }
  },
  {
    "id": "V0549",
    "w": "しつもん",
    "r": "しつもん",
    "m": {
      "en": "question",
      "zh-TW": "問題",
      "zh-CN": "问题",
      "ko": "question",
      "vi": "question",
      "id": "question",
      "es": "question",
      "pt": "question"
    },
    "ex": "質問がある",
    "exm": {
      "en": "Have question",
      "zh-TW": "有問題",
      "zh-CN": "有问题",
      "ko": "Have question",
      "vi": "Have question",
      "id": "Have question",
      "es": "Have question",
      "pt": "Have question"
    }
  },
  {
    "id": "V0550",
    "w": "いみ",
    "r": "いみ",
    "m": {
      "en": "meaning",
      "zh-TW": "意思",
      "zh-CN": "意思",
      "ko": "meaning",
      "vi": "meaning",
      "id": "meaning",
      "es": "meaning",
      "pt": "meaning"
    },
    "ex": "意味が分かる",
    "exm": {
      "en": "Understand",
      "zh-TW": "了解意思",
      "zh-CN": "了解意思",
      "ko": "이해하다",
      "vi": "hiểu",
      "id": "mengerti",
      "es": "Understand",
      "pt": "Understand"
    }
  },
  {
    "id": "V0551",
    "w": "ことば",
    "r": "ことば",
    "m": {
      "en": "word",
      "zh-TW": "單詞",
      "zh-CN": "单词",
      "ko": "단어",
      "vi": "Từ",
      "id": "Kata",
      "es": "word",
      "pt": "word"
    },
    "ex": "言葉を覚える",
    "exm": {
      "en": "Learn words",
      "zh-TW": "記住話",
      "zh-CN": "记住话",
      "ko": "배우다",
      "vi": "học",
      "id": "belajar",
      "es": "Learn words",
      "pt": "Learn words"
    }
  },
  {
    "id": "V0552",
    "w": "かんじ",
    "r": "かんじ",
    "m": {
      "en": "kanji",
      "zh-TW": "漢字",
      "zh-CN": "汉字",
      "ko": "kanji",
      "vi": "kanji",
      "id": "kanji",
      "es": "kanji",
      "pt": "kanji"
    },
    "ex": "漢字を覚える",
    "exm": {
      "en": "Learn kanji",
      "zh-TW": "記漢字",
      "zh-CN": "记汉字",
      "ko": "배우다",
      "vi": "học",
      "id": "belajar",
      "es": "Learn kanji",
      "pt": "Learn kanji"
    }
  },
  {
    "id": "V0553",
    "w": "名前",
    "r": "なまえ",
    "m": {
      "en": "name",
      "zh-TW": "名字",
      "zh-CN": "名字",
      "ko": "이름",
      "vi": "Tên",
      "id": "Nama",
      "es": "name",
      "pt": "name"
    },
    "ex": "名前を書く",
    "exm": {
      "en": "Write name",
      "zh-TW": "寫名字",
      "zh-CN": "写名字",
      "ko": "쓰다",
      "vi": "viết",
      "id": "menulis",
      "es": "Write name",
      "pt": "Write name"
    }
  },
  {
    "id": "V0554",
    "w": "じゅうしょ",
    "r": "じゅうしょ",
    "m": {
      "en": "address",
      "zh-TW": "地址",
      "zh-CN": "地址",
      "ko": "address",
      "vi": "address",
      "id": "address",
      "es": "address",
      "pt": "address"
    },
    "ex": "住所を書く",
    "exm": {
      "en": "Write address",
      "zh-TW": "寫地址",
      "zh-CN": "写地址",
      "ko": "쓰다",
      "vi": "viết",
      "id": "menulis",
      "es": "Write address",
      "pt": "Write address"
    }
  },
  {
    "id": "V0555",
    "w": "たんじょうび",
    "r": "たんじょうび",
    "m": {
      "en": "birthday",
      "zh-TW": "生日",
      "zh-CN": "生日",
      "ko": "birthday",
      "vi": "birthday",
      "id": "birthday",
      "es": "birthday",
      "pt": "birthday"
    },
    "ex": "誕生日を祝う",
    "exm": {
      "en": "Celebrate",
      "zh-TW": "慶祝生日",
      "zh-CN": "庆祝生日",
      "ko": "Celebrate",
      "vi": "Celebrate",
      "id": "Celebrate",
      "es": "Celebrate",
      "pt": "Celebrate"
    }
  },
  {
    "id": "V0556",
    "w": "いぬ",
    "r": "いぬ",
    "m": {
      "en": "dog",
      "zh-TW": "狗",
      "zh-CN": "狗",
      "ko": "개",
      "vi": "Chó",
      "id": "Anjing",
      "es": "dog",
      "pt": "dog"
    },
    "ex": "犬を飼う",
    "exm": {
      "en": "Keep dog",
      "zh-TW": "養狗",
      "zh-CN": "养狗",
      "ko": "개",
      "vi": "chó",
      "id": "anjing",
      "es": "Keep dog",
      "pt": "Keep dog"
    }
  },
  {
    "id": "V0557",
    "w": "ねこ",
    "r": "ねこ",
    "m": {
      "en": "cat",
      "zh-TW": "貓",
      "zh-CN": "猫",
      "ko": "고양이",
      "vi": "Mèo",
      "id": "Kucing",
      "es": "cat",
      "pt": "cat"
    },
    "ex": "猫が好き",
    "exm": {
      "en": "Like cats",
      "zh-TW": "喜歡貓",
      "zh-CN": "喜欢猫",
      "ko": "좋아하다",
      "vi": "thích",
      "id": "suka",
      "es": "Like cats",
      "pt": "Like cats"
    }
  },
  {
    "id": "V0558",
    "w": "鳥",
    "r": "とり",
    "m": {
      "en": "bird",
      "zh-TW": "鳥",
      "zh-CN": "鸟",
      "ko": "새",
      "vi": "Chim",
      "id": "Burung",
      "es": "bird",
      "pt": "bird"
    },
    "ex": "鳥が飛ぶ",
    "exm": {
      "en": "Bird flies",
      "zh-TW": "鳥飛",
      "zh-CN": "鸟飞",
      "ko": "새",
      "vi": "chim",
      "id": "burung",
      "es": "Bird flies",
      "pt": "Bird flies"
    }
  },
  {
    "id": "V0559",
    "w": "どうぶつ",
    "r": "どうぶつ",
    "m": {
      "en": "animal",
      "zh-TW": "動物",
      "zh-CN": "动物",
      "ko": "동물",
      "vi": "Động vật",
      "id": "Hewan",
      "es": "animal",
      "pt": "animal"
    },
    "ex": "動物が好き",
    "exm": {
      "en": "Like animals",
      "zh-TW": "喜歡動物",
      "zh-CN": "喜欢动物",
      "ko": "좋아하다",
      "vi": "thích",
      "id": "suka",
      "es": "Like animals",
      "pt": "Like animals"
    }
  },
  {
    "id": "V0560",
    "w": "車",
    "r": "くるま",
    "m": {
      "en": "car",
      "zh-TW": "汽車",
      "zh-CN": "汽车",
      "ko": "자동차",
      "vi": "Xe hơi",
      "id": "Mobil",
      "es": "car",
      "pt": "car"
    },
    "ex": "車を運転する",
    "exm": {
      "en": "Drive car",
      "zh-TW": "開車",
      "zh-CN": "开车",
      "ko": "운전하다 차",
      "vi": "lái xe xe",
      "id": "mengendarai mobil",
      "es": "Drive car",
      "pt": "Drive car"
    },
    "syn": [
      "自動車",
      "自家用車",
      "カー"
    ]
  },
  {
    "id": "V0561",
    "w": "電車",
    "r": "でんしゃ",
    "m": {
      "en": "train",
      "zh-TW": "電車",
      "zh-CN": "电车",
      "ko": "전철",
      "vi": "Tàu điện",
      "id": "Kereta",
      "es": "train",
      "pt": "train"
    },
    "ex": "電車に乗る",
    "exm": {
      "en": "Ride train",
      "zh-TW": "搭電車",
      "zh-CN": "坐电车",
      "ko": "타다 기차",
      "vi": "đi tàu",
      "id": "naik kereta",
      "es": "Ride train",
      "pt": "Ride train"
    },
    "syn": [
      "列車",
      "鉄道",
      "トレイン"
    ]
  },
  {
    "id": "V0562",
    "w": "バス",
    "r": "バス",
    "m": {
      "en": "bus",
      "zh-TW": "公車",
      "zh-CN": "公交车",
      "ko": "버스",
      "vi": "Xe buýt",
      "id": "Bus",
      "es": "bus",
      "pt": "bus"
    },
    "ex": "バスに乗る",
    "exm": {
      "en": "Ride bus",
      "zh-TW": "搭公車",
      "zh-CN": "坐公交车",
      "ko": "타다 버스",
      "vi": "đi xe buýt",
      "id": "naik bus",
      "es": "Ride bus",
      "pt": "Ride bus"
    }
  },
  {
    "id": "V0563",
    "w": "タクシー",
    "r": "タクシー",
    "m": {
      "en": "taxi",
      "zh-TW": "計程車",
      "zh-CN": "出租车",
      "ko": "택시",
      "vi": "Taxi",
      "id": "Taksi",
      "es": "taxi",
      "pt": "taxi"
    },
    "ex": "タクシーに乗る",
    "exm": {
      "en": "Take taxi",
      "zh-TW": "搭計程車",
      "zh-CN": "打出租车",
      "ko": "가지다",
      "vi": "lấy",
      "id": "mengambil",
      "es": "Take taxi",
      "pt": "Take taxi"
    }
  },
  {
    "id": "V0564",
    "w": "ひこうき",
    "r": "ひこうき",
    "m": {
      "en": "airplane",
      "zh-TW": "飛機",
      "zh-CN": "飞机",
      "ko": "비행기",
      "vi": "Máy bay",
      "id": "Pesawat",
      "es": "airplane",
      "pt": "airplane"
    },
    "ex": "飛行機に乗る",
    "exm": {
      "en": "Ride airplane",
      "zh-TW": "搭飛機",
      "zh-CN": "坐飞机",
      "ko": "타다 비행기",
      "vi": "đi máy bay",
      "id": "naik pesawat",
      "es": "Ride airplane",
      "pt": "Ride airplane"
    },
    "syn": [
      "航空機",
      "飛行機",
      "プレーン"
    ]
  },
  {
    "id": "V0565",
    "w": "じてんしゃ",
    "r": "じてんしゃ",
    "m": {
      "en": "bicycle",
      "zh-TW": "自行車",
      "zh-CN": "自行车",
      "ko": "자전거",
      "vi": "Xe đạp",
      "id": "Sepeda",
      "es": "bicycle",
      "pt": "bicycle"
    },
    "ex": "自転車に乗る",
    "exm": {
      "en": "Ride bicycle",
      "zh-TW": "騎腳踏車",
      "zh-CN": "骑自行车",
      "ko": "타다 자전거",
      "vi": "đi xe đạp",
      "id": "naik sepeda",
      "es": "Ride bicycle",
      "pt": "Ride bicycle"
    }
  },
  {
    "id": "V0566",
    "w": "きっぷ",
    "r": "きっぷ",
    "m": {
      "en": "ticket",
      "zh-TW": "票",
      "zh-CN": "票",
      "ko": "ticket",
      "vi": "ticket",
      "id": "ticket",
      "es": "ticket",
      "pt": "ticket"
    },
    "ex": "切符を買う",
    "exm": {
      "en": "Buy ticket",
      "zh-TW": "買票",
      "zh-CN": "买票",
      "ko": "사다",
      "vi": "mua",
      "id": "membeli",
      "es": "Buy ticket",
      "pt": "Buy ticket"
    }
  },
  {
    "id": "V0567",
    "w": "からだ",
    "r": "からだ",
    "m": {
      "en": "body",
      "zh-TW": "身體",
      "zh-CN": "身体",
      "ko": "몸",
      "vi": "cơ thể",
      "id": "tubuh",
      "es": "body",
      "pt": "body"
    },
    "ex": "体が大きい",
    "exm": {
      "en": "Big body",
      "zh-TW": "身體大",
      "zh-CN": "身体大",
      "ko": "큰 몸",
      "vi": "lớn cơ thể",
      "id": "besar tubuh",
      "es": "Big body",
      "pt": "Big body"
    }
  },
  {
    "id": "V0568",
    "w": "あたま",
    "r": "あたま",
    "m": {
      "en": "head",
      "zh-TW": "頭",
      "zh-CN": "头",
      "ko": "머리",
      "vi": "đầu",
      "id": "kepala",
      "es": "head",
      "pt": "head"
    },
    "ex": "頭が痛い",
    "exm": {
      "en": "Headache",
      "zh-TW": "頭痛",
      "zh-CN": "头痛",
      "ko": "Headache",
      "vi": "Headache",
      "id": "Headache",
      "es": "Headache",
      "pt": "Headache"
    }
  },
  {
    "id": "V0569",
    "w": "かお",
    "r": "かお",
    "m": {
      "en": "face",
      "zh-TW": "臉",
      "zh-CN": "脸",
      "ko": "face",
      "vi": "face",
      "id": "face",
      "es": "face",
      "pt": "face"
    },
    "ex": "顔を洗う",
    "exm": {
      "en": "Wash face",
      "zh-TW": "洗臉",
      "zh-CN": "洗脸",
      "ko": "씻다",
      "vi": "rửa",
      "id": "mencuci",
      "es": "Wash face",
      "pt": "Wash face"
    }
  },
  {
    "id": "V0570",
    "w": "目",
    "r": "め",
    "m": {
      "en": "eye",
      "zh-TW": "眼睛",
      "zh-CN": "眼睛",
      "ko": "눈",
      "vi": "mắt",
      "id": "mata",
      "es": "eye",
      "pt": "eye"
    },
    "ex": "目が大きい",
    "exm": {
      "en": "Big eyes",
      "zh-TW": "眼睛大",
      "zh-CN": "眼睛大",
      "ko": "큰 눈",
      "vi": "lớn mắt",
      "id": "besar mata",
      "es": "Big eyes",
      "pt": "Big eyes"
    }
  },
  {
    "id": "V0571",
    "w": "耳",
    "r": "みみ",
    "m": {
      "en": "ear",
      "zh-TW": "耳朵",
      "zh-CN": "耳朵",
      "ko": "귀",
      "vi": "tai",
      "id": "telinga",
      "es": "ear",
      "pt": "ear"
    },
    "ex": "耳が痛い",
    "exm": {
      "en": "Ear hurts",
      "zh-TW": "耳朵痛",
      "zh-CN": "耳朵痛",
      "ko": "귀",
      "vi": "tai",
      "id": "telinga",
      "es": "Ear hurts",
      "pt": "Ear hurts"
    }
  },
  {
    "id": "V0572",
    "w": "はな",
    "r": "はな",
    "m": {
      "en": "nose",
      "zh-TW": "鼻子",
      "zh-CN": "鼻子",
      "ko": "코",
      "vi": "mũi",
      "id": "hidung",
      "es": "nose",
      "pt": "nose"
    },
    "ex": "鼻が高い",
    "exm": {
      "en": "Tall nose",
      "zh-TW": "鼻子高",
      "zh-CN": "鼻子高",
      "ko": "코",
      "vi": "mũi",
      "id": "hidung",
      "es": "Tall nose",
      "pt": "Tall nose"
    }
  },
  {
    "id": "V0573",
    "w": "口",
    "r": "くち",
    "m": {
      "en": "mouth",
      "zh-TW": "嘴巴",
      "zh-CN": "嘴巴",
      "ko": "입",
      "vi": "miệng",
      "id": "mulut",
      "es": "mouth",
      "pt": "mouth"
    },
    "ex": "口を開ける",
    "exm": {
      "en": "Open mouth",
      "zh-TW": "張嘴",
      "zh-CN": "张嘴",
      "ko": "열다 입",
      "vi": "mở miệng",
      "id": "membuka mulut",
      "es": "Open mouth",
      "pt": "Open mouth"
    }
  },
  {
    "id": "V0574",
    "w": "は",
    "r": "は",
    "m": {
      "en": "tooth",
      "zh-TW": "牙齒",
      "zh-CN": "牙齿",
      "ko": "tooth",
      "vi": "tooth",
      "id": "tooth",
      "es": "tooth",
      "pt": "tooth"
    },
    "ex": "歯を磨く",
    "exm": {
      "en": "Brush teeth",
      "zh-TW": "刷牙",
      "zh-CN": "刷牙",
      "ko": "Brush teeth",
      "vi": "Brush teeth",
      "id": "Brush teeth",
      "es": "Brush teeth",
      "pt": "Brush teeth"
    }
  },
  {
    "id": "V0575",
    "w": "手",
    "r": "て",
    "m": {
      "en": "hand",
      "zh-TW": "手",
      "zh-CN": "手",
      "ko": "손",
      "vi": "tay",
      "id": "tangan",
      "es": "hand",
      "pt": "hand"
    },
    "ex": "手を洗う",
    "exm": {
      "en": "Wash hands",
      "zh-TW": "洗手",
      "zh-CN": "洗手",
      "ko": "씻다",
      "vi": "rửa",
      "id": "mencuci",
      "es": "Wash hands",
      "pt": "Wash hands"
    }
  },
  {
    "id": "V0576",
    "w": "足",
    "r": "あし",
    "m": {
      "en": "leg",
      "zh-TW": "腳",
      "zh-CN": "脚",
      "ko": "leg",
      "vi": "leg",
      "id": "leg",
      "es": "leg",
      "pt": "leg"
    },
    "ex": "足が痛い",
    "exm": {
      "en": "Foot hurts",
      "zh-TW": "腳痛",
      "zh-CN": "脚痛",
      "ko": "발",
      "vi": "chân",
      "id": "kaki",
      "es": "Foot hurts",
      "pt": "Foot hurts"
    }
  },
  {
    "id": "V0577",
    "w": "ふく",
    "r": "ふく",
    "m": {
      "en": "clothes",
      "zh-TW": "衣服",
      "zh-CN": "衣服",
      "ko": "clothes",
      "vi": "clothes",
      "id": "clothes",
      "es": "clothes",
      "pt": "clothes"
    },
    "ex": "服を着る",
    "exm": {
      "en": "Wear clothes",
      "zh-TW": "穿衣服",
      "zh-CN": "穿衣服",
      "ko": "입다",
      "vi": "mặc",
      "id": "memakai",
      "es": "Wear clothes",
      "pt": "Wear clothes"
    }
  },
  {
    "id": "V0578",
    "w": "くつ",
    "r": "くつ",
    "m": {
      "en": "shoes",
      "zh-TW": "鞋子",
      "zh-CN": "鞋子",
      "ko": "shoes",
      "vi": "shoes",
      "id": "shoes",
      "es": "shoes",
      "pt": "shoes"
    },
    "ex": "靴を履く",
    "exm": {
      "en": "Wear shoes",
      "zh-TW": "穿鞋",
      "zh-CN": "穿鞋",
      "ko": "입다",
      "vi": "mặc",
      "id": "memakai",
      "es": "Wear shoes",
      "pt": "Wear shoes"
    }
  },
  {
    "id": "V0579",
    "w": "ぼうし",
    "r": "ぼうし",
    "m": {
      "en": "hat",
      "zh-TW": "帽子",
      "zh-CN": "帽子",
      "ko": "hat",
      "vi": "hat",
      "id": "hat",
      "es": "hat",
      "pt": "hat"
    },
    "ex": "帽子をかぶる",
    "exm": {
      "en": "Wear hat",
      "zh-TW": "戴帽子",
      "zh-CN": "戴帽子",
      "ko": "입다",
      "vi": "mặc",
      "id": "memakai",
      "es": "Wear hat",
      "pt": "Wear hat"
    }
  },
  {
    "id": "V0580",
    "w": "色",
    "r": "いろ",
    "m": {
      "en": "color",
      "zh-TW": "顏色",
      "zh-CN": "颜色",
      "ko": "색",
      "vi": "Màu",
      "id": "Warna",
      "es": "color",
      "pt": "color"
    },
    "ex": "何色が好き",
    "exm": {
      "en": "What color?",
      "zh-TW": "喜歡什麼色",
      "zh-CN": "喜欢什么色",
      "ko": "What color?",
      "vi": "What color?",
      "id": "What color?",
      "es": "What color?",
      "pt": "What color?"
    }
  },
  {
    "id": "V0581",
    "w": "ねだん",
    "r": "ねだん",
    "m": {
      "en": "price",
      "zh-TW": "價格",
      "zh-CN": "价格",
      "ko": "price",
      "vi": "price",
      "id": "price",
      "es": "price",
      "pt": "price"
    },
    "ex": "値段を聞く",
    "exm": {
      "en": "Ask price",
      "zh-TW": "問價格",
      "zh-CN": "问价格",
      "ko": "묻다",
      "vi": "hỏi",
      "id": "bertanya",
      "es": "Ask price",
      "pt": "Ask price"
    }
  },
  {
    "id": "V0582",
    "w": "かいもの",
    "r": "かいもの",
    "m": {
      "en": "shopping",
      "zh-TW": "購物",
      "zh-CN": "购物",
      "ko": "shopping",
      "vi": "shopping",
      "id": "shopping",
      "es": "shopping",
      "pt": "shopping"
    },
    "ex": "買い物に行く",
    "exm": {
      "en": "Go shopping",
      "zh-TW": "去購物",
      "zh-CN": "去购物",
      "ko": "가다",
      "vi": "đi",
      "id": "pergi",
      "es": "Go shopping",
      "pt": "Go shopping"
    }
  },
  {
    "id": "V0583",
    "w": "よやく",
    "r": "よやく",
    "m": {
      "en": "reservation",
      "zh-TW": "預約",
      "zh-CN": "预约",
      "ko": "reservation",
      "vi": "reservation",
      "id": "reservation",
      "es": "reservation",
      "pt": "reservation"
    },
    "ex": "予約する",
    "exm": {
      "en": "Reserve",
      "zh-TW": "預約",
      "zh-CN": "预约",
      "ko": "Reserve",
      "vi": "Reserve",
      "id": "Reserve",
      "es": "Reserve",
      "pt": "Reserve"
    }
  },
  {
    "id": "V0584",
    "w": "くすり",
    "r": "くすり",
    "m": {
      "en": "medicine",
      "zh-TW": "藥",
      "zh-CN": "药",
      "ko": "medicine",
      "vi": "medicine",
      "id": "medicine",
      "es": "medicine",
      "pt": "medicine"
    },
    "ex": "薬を飲む",
    "exm": {
      "en": "Take medicine",
      "zh-TW": "吃藥",
      "zh-CN": "吃药",
      "ko": "가지다",
      "vi": "lấy",
      "id": "mengambil",
      "es": "Take medicine",
      "pt": "Take medicine"
    }
  },
  {
    "id": "V0585",
    "w": "かぜ",
    "r": "かぜ",
    "m": {
      "en": "cold",
      "zh-TW": "冷",
      "zh-CN": "冷",
      "ko": "추운",
      "vi": "Lạnh",
      "id": "Dingin",
      "es": "cold",
      "pt": "cold"
    },
    "ex": "風邪をひく",
    "exm": {
      "en": "Catch cold",
      "zh-TW": "感冒了",
      "zh-CN": "感冒了",
      "ko": "잡다 차가운",
      "vi": "bắt lạnh",
      "id": "menangkap dingin",
      "es": "Catch cold",
      "pt": "Catch cold"
    }
  },
  {
    "id": "V0586",
    "w": "やくそく",
    "r": "やくそく",
    "m": {
      "en": "promise",
      "zh-TW": "約定",
      "zh-CN": "约定",
      "ko": "promise",
      "vi": "promise",
      "id": "promise",
      "es": "promise",
      "pt": "promise"
    },
    "ex": "約束を守る",
    "exm": {
      "en": "Keep promise",
      "zh-TW": "遵守約定",
      "zh-CN": "遵守约定",
      "ko": "Keep promise",
      "vi": "Keep promise",
      "id": "Keep promise",
      "es": "Keep promise",
      "pt": "Keep promise"
    }
  },
  {
    "id": "V0587",
    "w": "れんしゅう",
    "r": "れんしゅう",
    "m": {
      "en": "practice",
      "zh-TW": "練習",
      "zh-CN": "练习",
      "ko": "practice",
      "vi": "practice",
      "id": "practice",
      "es": "practice",
      "pt": "practice"
    },
    "ex": "練習する",
    "exm": {
      "en": "Practice",
      "zh-TW": "練習",
      "zh-CN": "练习",
      "ko": "Practice",
      "vi": "Practice",
      "id": "Practice",
      "es": "Practice",
      "pt": "Practice"
    }
  },
  {
    "id": "V0588",
    "w": "じゅんび",
    "r": "じゅんび",
    "m": {
      "en": "preparation",
      "zh-TW": "準備",
      "zh-CN": "准备",
      "ko": "preparation",
      "vi": "preparation",
      "id": "preparation",
      "es": "preparation",
      "pt": "preparation"
    },
    "ex": "準備をする",
    "exm": {
      "en": "Prepare",
      "zh-TW": "準備",
      "zh-CN": "准备",
      "ko": "Prepare",
      "vi": "Prepare",
      "id": "Prepare",
      "es": "Prepare",
      "pt": "Prepare"
    }
  },
  {
    "id": "V0589",
    "w": "しょうかい",
    "r": "しょうかい",
    "m": {
      "en": "introduction",
      "zh-TW": "介紹",
      "zh-CN": "介绍",
      "ko": "introduction",
      "vi": "introduction",
      "id": "introduction",
      "es": "introduction",
      "pt": "introduction"
    },
    "ex": "紹介する",
    "exm": {
      "en": "Introduce",
      "zh-TW": "介紹",
      "zh-CN": "介绍",
      "ko": "소개하다",
      "vi": "giới thiệu",
      "id": "memperkenalkan",
      "es": "Introduce",
      "pt": "Introduce"
    }
  },
  {
    "id": "V0590",
    "w": "れんらく",
    "r": "れんらく",
    "m": {
      "en": "contact",
      "zh-TW": "聯絡",
      "zh-CN": "联络",
      "ko": "contact",
      "vi": "contact",
      "id": "contact",
      "es": "contact",
      "pt": "contact"
    },
    "ex": "連絡する",
    "exm": {
      "en": "Contact",
      "zh-TW": "聯絡",
      "zh-CN": "联络",
      "ko": "Contact",
      "vi": "Contact",
      "id": "Contact",
      "es": "Contact",
      "pt": "Contact"
    }
  },
  {
    "id": "V0591",
    "w": "ぜんぶ",
    "r": "ぜんぶ",
    "m": {
      "en": "all",
      "zh-TW": "全部",
      "zh-CN": "全部",
      "ko": "all",
      "vi": "all",
      "id": "all",
      "es": "all",
      "pt": "all"
    },
    "ex": "全部食べる",
    "exm": {
      "en": "Eat all",
      "zh-TW": "全部吃",
      "zh-CN": "全部吃",
      "ko": "먹다",
      "vi": "ăn",
      "id": "makan",
      "es": "Eat all",
      "pt": "Eat all"
    }
  },
  {
    "id": "V0592",
    "w": "半分",
    "r": "はんぶん",
    "m": {
      "en": "half",
      "zh-TW": "一半",
      "zh-CN": "一半",
      "ko": "half",
      "vi": "half",
      "id": "half",
      "es": "half",
      "pt": "half"
    },
    "ex": "半分食べる",
    "exm": {
      "en": "Eat half",
      "zh-TW": "吃一半",
      "zh-CN": "吃一半",
      "ko": "먹다",
      "vi": "ăn",
      "id": "makan",
      "es": "Eat half",
      "pt": "Eat half"
    }
  },
  {
    "id": "V0593",
    "w": "自分",
    "r": "じぶん",
    "m": {
      "en": "oneself",
      "zh-TW": "自己",
      "zh-CN": "自己",
      "ko": "oneself",
      "vi": "oneself",
      "id": "oneself",
      "es": "oneself",
      "pt": "oneself"
    },
    "ex": "自分でする",
    "exm": {
      "en": "Do by oneself",
      "zh-TW": "自己做",
      "zh-CN": "自己做",
      "ko": "Do by oneself",
      "vi": "Do by oneself",
      "id": "Do by oneself",
      "es": "Do by oneself",
      "pt": "Do by oneself"
    }
  },
  {
    "id": "V0594",
    "w": "みんな",
    "r": "みんな",
    "m": {
      "en": "everyone",
      "zh-TW": "大家",
      "zh-CN": "大家",
      "ko": "everyone",
      "vi": "everyone",
      "id": "everyone",
      "es": "everyone",
      "pt": "everyone"
    },
    "ex": "皆で行く",
    "exm": {
      "en": "Go together",
      "zh-TW": "大家去",
      "zh-CN": "大家去",
      "ko": "가다 함께",
      "vi": "đi cùng nhau",
      "id": "pergi bersama",
      "es": "Go together",
      "pt": "Go together"
    }
  },
  {
    "id": "V0595",
    "w": "ほんとう",
    "r": "ほんとう",
    "m": {
      "en": "truth",
      "zh-TW": "真的",
      "zh-CN": "真的",
      "ko": "truth",
      "vi": "truth",
      "id": "truth",
      "es": "truth",
      "pt": "truth"
    },
    "ex": "本当ですか",
    "exm": {
      "en": "Is it true?",
      "zh-TW": "真的嗎",
      "zh-CN": "真的吗",
      "ko": "Is it true?",
      "vi": "Is it true?",
      "id": "Is it true?",
      "es": "Is it true?",
      "pt": "Is it true?"
    }
  },
  {
    "id": "V0596",
    "w": "出口",
    "r": "でぐち",
    "m": {
      "en": "exit",
      "zh-TW": "出口",
      "zh-CN": "出口",
      "ko": "나가다",
      "vi": "ra",
      "id": "keluar",
      "es": "exit",
      "pt": "exit"
    },
    "ex": "出口はどこ",
    "exm": {
      "en": "Where exit?",
      "zh-TW": "出口在哪",
      "zh-CN": "出口在哪",
      "ko": "Where exit?",
      "vi": "Where exit?",
      "id": "Where exit?",
      "es": "Where exit?",
      "pt": "Where exit?"
    }
  },
  {
    "id": "V0597",
    "w": "サイズ",
    "r": "サイズ",
    "m": {
      "en": "size",
      "zh-TW": "尺寸",
      "zh-CN": "尺寸",
      "ko": "사이즈",
      "vi": "kích cỡ",
      "id": "ukuran",
      "es": "size",
      "pt": "size"
    },
    "ex": "サイズを選ぶ",
    "exm": {
      "en": "choose size",
      "zh-TW": "選尺寸",
      "zh-CN": "选尺寸",
      "ko": "사이즈를 고르다",
      "vi": "chọn kích cỡ",
      "id": "memilih ukuran",
      "es": "choose size",
      "pt": "choose size"
    }
  },
  {
    "id": "V0598",
    "w": "わりびき",
    "r": "わりびき",
    "m": {
      "en": "discount",
      "zh-TW": "折扣",
      "zh-CN": "折扣",
      "ko": "할인",
      "vi": "giảm giá",
      "id": "diskon",
      "es": "discount",
      "pt": "discount"
    },
    "ex": "割引がある",
    "exm": {
      "en": "there is discount",
      "zh-TW": "有折扣",
      "zh-CN": "有折扣",
      "ko": "할인이 있다",
      "vi": "có giảm giá",
      "id": "ada diskon",
      "es": "there is discount",
      "pt": "there is discount"
    }
  },
  {
    "id": "V0599",
    "w": "げんきん",
    "r": "げんきん",
    "m": {
      "en": "cash",
      "zh-TW": "現金",
      "zh-CN": "现金",
      "ko": "현금",
      "vi": "tiền mặt",
      "id": "tunai",
      "es": "cash",
      "pt": "cash"
    },
    "ex": "現金で払う",
    "exm": {
      "en": "pay in cash",
      "zh-TW": "付現",
      "zh-CN": "付现",
      "ko": "현금으로 내다",
      "vi": "trả tiền mặt",
      "id": "bayar tunai",
      "es": "pay in cash",
      "pt": "pay in cash"
    }
  },
  {
    "id": "V0600",
    "w": "ちゅうもん",
    "r": "ちゅうもん",
    "m": {
      "en": "order",
      "zh-TW": "點餐",
      "zh-CN": "点餐",
      "ko": "주문",
      "vi": "gọi món",
      "id": "pesanan",
      "es": "order",
      "pt": "order"
    },
    "ex": "注文する",
    "exm": {
      "en": "order",
      "zh-TW": "點餐",
      "zh-CN": "点餐",
      "ko": "주문하다",
      "vi": "gọi món",
      "id": "memesan",
      "es": "order",
      "pt": "order"
    }
  },
  {
    "id": "V0601",
    "w": "会計",
    "r": "かいけい",
    "m": {
      "en": "bill",
      "zh-TW": "結帳",
      "zh-CN": "结账",
      "ko": "계산",
      "vi": "thanh toán",
      "id": "tagihan",
      "es": "bill",
      "pt": "bill"
    },
    "ex": "会計をする",
    "exm": {
      "en": "pay bill",
      "zh-TW": "結帳",
      "zh-CN": "结账",
      "ko": "계산하다",
      "vi": "thanh toán",
      "id": "membayar",
      "es": "pay bill",
      "pt": "pay bill"
    }
  },
  {
    "id": "V0602",
    "w": "むりょう",
    "r": "むりょう",
    "m": {
      "en": "free",
      "zh-TW": "空閒",
      "zh-CN": "空闲",
      "ko": "한가한",
      "vi": "Rảnh",
      "id": "Bebas",
      "es": "free",
      "pt": "free"
    },
    "ex": "無料です",
    "exm": {
      "en": "it is free",
      "zh-TW": "免費",
      "zh-CN": "免费",
      "ko": "무료입니다",
      "vi": "miễn phí",
      "id": "gratis",
      "es": "it is free",
      "pt": "it is free"
    }
  },
  {
    "id": "V0603",
    "w": "しんぱい",
    "r": "しんぱい",
    "m": {
      "en": "worry",
      "zh-TW": "擔心",
      "zh-CN": "担心",
      "ko": "걱정",
      "vi": "lo lắng",
      "id": "khawatir",
      "es": "worry",
      "pt": "worry"
    },
    "ex": "心配しないで",
    "exm": {
      "en": "don't worry",
      "zh-TW": "別擔心",
      "zh-CN": "别担心",
      "ko": "걱정하지 마",
      "vi": "đừng lo",
      "id": "jangan khawatir",
      "es": "don't worry",
      "pt": "don't worry"
    }
  },
  {
    "id": "V0604",
    "w": "あんしん",
    "r": "あんしん",
    "m": {
      "en": "relief",
      "zh-TW": "放心",
      "zh-CN": "放心",
      "ko": "안심",
      "vi": "yên tâm",
      "id": "lega",
      "es": "relief",
      "pt": "relief"
    },
    "ex": "安心する",
    "exm": {
      "en": "feel relieved",
      "zh-TW": "放心",
      "zh-CN": "放心",
      "ko": "안심하다",
      "vi": "yên tâm",
      "id": "merasa lega",
      "es": "feel relieved",
      "pt": "feel relieved"
    }
  },
  {
    "id": "V0605",
    "w": "ゆめ",
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
    "ex": "夢を見る",
    "exm": {
      "en": "have a dream",
      "zh-TW": "做夢",
      "zh-CN": "做梦",
      "ko": "꿈을 꾸다",
      "vi": "mơ",
      "id": "bermimpi",
      "es": "have a dream",
      "pt": "have a dream"
    }
  },
  {
    "id": "V0606",
    "w": "どりょく",
    "r": "どりょく",
    "m": {
      "en": "effort",
      "zh-TW": "努力",
      "zh-CN": "努力",
      "ko": "노력",
      "vi": "nỗ lực",
      "id": "usaha",
      "es": "effort",
      "pt": "effort"
    },
    "ex": "努力する",
    "exm": {
      "en": "make effort",
      "zh-TW": "努力",
      "zh-CN": "努力",
      "ko": "노력하다",
      "vi": "nỗ lực",
      "id": "berusaha",
      "es": "make effort",
      "pt": "make effort"
    }
  },
  {
    "id": "V0607",
    "w": "せいこう",
    "r": "せいこう",
    "m": {
      "en": "success",
      "zh-TW": "成功",
      "zh-CN": "成功",
      "ko": "성공",
      "vi": "thành công",
      "id": "sukses",
      "es": "success",
      "pt": "success"
    },
    "ex": "成功する",
    "exm": {
      "en": "succeed",
      "zh-TW": "成功",
      "zh-CN": "成功",
      "ko": "성공하다",
      "vi": "thành công",
      "id": "berhasil",
      "es": "succeed",
      "pt": "succeed"
    }
  },
  {
    "id": "V0608",
    "w": "しっぱい",
    "r": "しっぱい",
    "m": {
      "en": "failure",
      "zh-TW": "失敗",
      "zh-CN": "失败",
      "ko": "실패",
      "vi": "thất bại",
      "id": "gagal",
      "es": "failure",
      "pt": "failure"
    },
    "ex": "失敗する",
    "exm": {
      "en": "fail",
      "zh-TW": "失敗",
      "zh-CN": "失败",
      "ko": "실패하다",
      "vi": "thất bại",
      "id": "gagal",
      "es": "fail",
      "pt": "fail"
    }
  },
  {
    "id": "V0609",
    "w": "けいけん",
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
    "ex": "経験がある",
    "exm": {
      "en": "have experience",
      "zh-TW": "有經驗",
      "zh-CN": "有经验",
      "ko": "경험이 있다",
      "vi": "có kinh nghiệm",
      "id": "punya pengalaman",
      "es": "have experience",
      "pt": "have experience"
    }
  },
  {
    "id": "V0610",
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
    "ex": "興味がある",
    "exm": {
      "en": "have interest",
      "zh-TW": "有興趣",
      "zh-CN": "有兴趣",
      "ko": "흥미가 있다",
      "vi": "có hứng thú",
      "id": "punya minat",
      "es": "have interest",
      "pt": "have interest"
    }
  },
  {
    "id": "V0611",
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
    "ex": "理由を聞く",
    "exm": {
      "en": "ask reason",
      "zh-TW": "問理由",
      "zh-CN": "问理由",
      "ko": "이유를 묻다",
      "vi": "hỏi lý do",
      "id": "bertanya alasan",
      "es": "ask reason",
      "pt": "ask reason"
    }
  },
  {
    "id": "V0612",
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
    "ex": "結果を待つ",
    "exm": {
      "en": "wait for result",
      "zh-TW": "等結果",
      "zh-CN": "等结果",
      "ko": "결과를 기다리다",
      "vi": "chờ kết quả",
      "id": "menunggu hasil",
      "es": "wait for result",
      "pt": "wait for result"
    }
  },
  {
    "id": "V0613",
    "w": "かんけい",
    "r": "かんけい",
    "m": {
      "en": "relationship",
      "zh-TW": "關係",
      "zh-CN": "关系",
      "ko": "관계",
      "vi": "mối quan hệ",
      "id": "hubungan",
      "es": "relationship",
      "pt": "relationship"
    },
    "ex": "関係がある",
    "exm": {
      "en": "have relation",
      "zh-TW": "有關係",
      "zh-CN": "有关系",
      "ko": "관계가 있다",
      "vi": "có quan hệ",
      "id": "ada hubungan",
      "es": "have relation",
      "pt": "have relation"
    }
  },
  {
    "id": "V0614",
    "w": "おえる",
    "r": "おえる",
    "m": {
      "en": "finish",
      "zh-TW": "結束",
      "zh-CN": "结束",
      "ko": "끝내다",
      "vi": "kết thúc",
      "id": "menyelesaikan",
      "es": "finish",
      "pt": "finish"
    },
    "ex": "仕事を終える",
    "exm": {
      "en": "finish work",
      "zh-TW": "結束工作",
      "zh-CN": "结束工作",
      "ko": "일을 끝내다",
      "vi": "kết thúc công việc",
      "id": "menyelesaikan kerja",
      "es": "finish work",
      "pt": "finish work"
    }
  },
  {
    "id": "V0615",
    "w": "すぎる",
    "r": "すぎる",
    "m": {
      "en": "pass",
      "zh-TW": "經過",
      "zh-CN": "经过",
      "ko": "지나다",
      "vi": "qua",
      "id": "lewat",
      "es": "pass",
      "pt": "pass"
    },
    "ex": "時間が過ぎる",
    "exm": {
      "en": "time passes",
      "zh-TW": "時間過去",
      "zh-CN": "时间过去",
      "ko": "시간이 지나다",
      "vi": "thời gian trôi qua",
      "id": "waktu berlalu",
      "es": "time passes",
      "pt": "time passes"
    }
  },
  {
    "id": "V0616",
    "w": "そして",
    "r": "そして",
    "m": {
      "en": "and then",
      "zh-TW": "然後",
      "zh-CN": "然后",
      "ko": "그리고",
      "vi": "và rồi",
      "id": "lalu",
      "es": "and then",
      "pt": "and then"
    },
    "ex": "食べた、そして寝た",
    "exm": {
      "en": "ate, then slept",
      "zh-TW": "吃了，然後睡了",
      "zh-CN": "吃了，然后睡了",
      "ko": "먹고 그리고 잤다",
      "vi": "ăn rồi ngủ",
      "id": "makan lalu tidur",
      "es": "ate, then slept",
      "pt": "ate, then slept"
    }
  },
  {
    "id": "V0617",
    "w": "でも",
    "r": "でも",
    "m": {
      "en": "but",
      "zh-TW": "但是",
      "zh-CN": "但是",
      "ko": "하지만",
      "vi": "nhưng",
      "id": "tapi",
      "es": "but",
      "pt": "but"
    },
    "ex": "でも大丈夫",
    "exm": {
      "en": "but it's okay",
      "zh-TW": "但是沒關係",
      "zh-CN": "但是没关系",
      "ko": "하지만 괜찮아",
      "vi": "nhưng không sao",
      "id": "tapi tidak apa-apa",
      "es": "but it's okay",
      "pt": "but it's okay"
    }
  },
  {
    "id": "V0618",
    "w": "だから",
    "r": "だから",
    "m": {
      "en": "therefore",
      "zh-TW": "所以",
      "zh-CN": "所以",
      "ko": "그래서",
      "vi": "vì vậy",
      "id": "karena itu",
      "es": "therefore",
      "pt": "therefore"
    },
    "ex": "だから行った",
    "exm": {
      "en": "so I went",
      "zh-TW": "所以去了",
      "zh-CN": "所以去了",
      "ko": "그래서 갔다",
      "vi": "vì vậy đã đi",
      "id": "karena itu pergi",
      "es": "so I went",
      "pt": "so I went"
    }
  },
  {
    "id": "V0619",
    "w": "たとえば",
    "r": "たとえば",
    "m": {
      "en": "for example",
      "zh-TW": "例如",
      "zh-CN": "例如",
      "ko": "예를 들어",
      "vi": "ví dụ",
      "id": "misalnya",
      "es": "for example",
      "pt": "for example"
    },
    "ex": "例えば日本",
    "exm": {
      "en": "for example Japan",
      "zh-TW": "例如日本",
      "zh-CN": "例如日本",
      "ko": "예를 들어 일본",
      "vi": "ví dụ Nhật Bản",
      "id": "misalnya Jepang",
      "es": "for example Japan",
      "pt": "for example Japan"
    }
  },
  {
    "id": "V0620",
    "w": "もし",
    "r": "もし",
    "m": {
      "en": "if",
      "zh-TW": "如果",
      "zh-CN": "如果",
      "ko": "만약",
      "vi": "nếu",
      "id": "jika",
      "es": "if",
      "pt": "if"
    },
    "ex": "もし雨なら",
    "exm": {
      "en": "if it rains",
      "zh-TW": "如果下雨",
      "zh-CN": "如果下雨",
      "ko": "만약 비가 오면",
      "vi": "nếu trời mưa",
      "id": "jika hujan",
      "es": "if it rains",
      "pt": "if it rains"
    }
  },
  {
    "id": "V0621",
    "w": "やっぱり",
    "r": "やっぱり",
    "m": {
      "en": "as expected",
      "zh-TW": "果然",
      "zh-CN": "果然",
      "ko": "역시",
      "vi": "quả nhiên",
      "id": "ternyata",
      "es": "as expected",
      "pt": "as expected"
    },
    "ex": "やっぱりそうだ",
    "exm": {
      "en": "as I thought",
      "zh-TW": "果然是這樣",
      "zh-CN": "果然是这样",
      "ko": "역시 그렇다",
      "vi": "quả nhiên vậy",
      "id": "ternyata begitu",
      "es": "as I thought",
      "pt": "as I thought"
    }
  },
  {
    "id": "V0622",
    "w": "やっと",
    "r": "やっと",
    "m": {
      "en": "finally",
      "zh-TW": "終於",
      "zh-CN": "终于",
      "ko": "드디어",
      "vi": "cuối cùng",
      "id": "akhirnya",
      "es": "finally",
      "pt": "finally"
    },
    "ex": "やっと終わった",
    "exm": {
      "en": "finally finished",
      "zh-TW": "終於結束了",
      "zh-CN": "终于结束了",
      "ko": "드디어 끝났다",
      "vi": "cuối cùng xong",
      "id": "akhirnya selesai",
      "es": "finally finished",
      "pt": "finally finished"
    }
  },
  {
    "id": "V0623",
    "w": "きゅうに",
    "r": "きゅうに",
    "m": {
      "en": "suddenly",
      "zh-TW": "突然",
      "zh-CN": "突然",
      "ko": "갑자기",
      "vi": "đột nhiên",
      "id": "tiba-tiba",
      "es": "suddenly",
      "pt": "suddenly"
    },
    "ex": "急に雨が降る",
    "exm": {
      "en": "suddenly rains",
      "zh-TW": "突然下雨",
      "zh-CN": "突然下雨",
      "ko": "갑자기 비가 오다",
      "vi": "đột nhiên mưa",
      "id": "tiba-tiba hujan",
      "es": "suddenly rains",
      "pt": "suddenly rains"
    }
  },
  {
    "id": "V0624",
    "w": "ひさしぶり",
    "r": "ひさしぶり",
    "m": {
      "en": "long time",
      "zh-TW": "好久不見",
      "zh-CN": "好久不见",
      "ko": "오랜만",
      "vi": "lâu rồi",
      "id": "lama tidak jumpa",
      "es": "long time",
      "pt": "long time"
    },
    "ex": "久しぶりですね",
    "exm": {
      "en": "long time no see",
      "zh-TW": "好久不見",
      "zh-CN": "好久不见",
      "ko": "오랜만이네요",
      "vi": "lâu rồi không gặp",
      "id": "lama tidak jumpa",
      "es": "long time no see",
      "pt": "long time no see"
    }
  },
  {
    "id": "V0625",
    "w": "さいきん",
    "r": "さいきん",
    "m": {
      "en": "recently",
      "zh-TW": "最近",
      "zh-CN": "最近",
      "ko": "최근",
      "vi": "gần đây",
      "id": "akhir-akhir ini",
      "es": "recently",
      "pt": "recently"
    },
    "ex": "最近忙しい",
    "exm": {
      "en": "busy recently",
      "zh-TW": "最近很忙",
      "zh-CN": "最近很忙",
      "ko": "최근 바쁘다",
      "vi": "gần đây bận",
      "id": "akhir-akhir ini sibuk",
      "es": "busy recently",
      "pt": "busy recently"
    }
  },
  {
    "id": "V0626",
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
    "ex": "将来の夢",
    "exm": {
      "en": "future dream",
      "zh-TW": "將來的夢想",
      "zh-CN": "将来的梦想",
      "ko": "장래 꿈",
      "vi": "ước mơ tương lai",
      "id": "mimpi masa depan",
      "es": "future dream",
      "pt": "future dream"
    }
  },
  {
    "id": "V0627",
    "w": "ぜったい",
    "r": "ぜったい",
    "m": {
      "en": "absolutely",
      "zh-TW": "絕對",
      "zh-CN": "绝对",
      "ko": "절대",
      "vi": "tuyệt đối",
      "id": "pasti",
      "es": "absolutely",
      "pt": "absolutely"
    },
    "ex": "絶対に行く",
    "exm": {
      "en": "will definitely go",
      "zh-TW": "一定去",
      "zh-CN": "一定去",
      "ko": "절대 간다",
      "vi": "chắc chắn đi",
      "id": "pasti pergi",
      "es": "will definitely go",
      "pt": "will definitely go"
    }
  },
  {
    "id": "V0628",
    "w": "ざんねん",
    "r": "ざんねん",
    "m": {
      "en": "regrettable",
      "zh-TW": "可惜",
      "zh-CN": "可惜",
      "ko": "아쉽다",
      "vi": "đáng tiếc",
      "id": "sayang",
      "es": "regrettable",
      "pt": "regrettable"
    },
    "ex": "残念ですね",
    "exm": {
      "en": "that's too bad",
      "zh-TW": "真可惜",
      "zh-CN": "真可惜",
      "ko": "아쉽네요",
      "vi": "thật đáng tiếc",
      "id": "sayang sekali",
      "es": "that's too bad",
      "pt": "that's too bad"
    }
  },
  {
    "id": "V0629",
    "w": "万",
    "r": "まん",
    "m": {
      "en": "ten thousand",
      "zh-TW": "萬",
      "zh-CN": "万",
      "ko": "만",
      "vi": "vạn",
      "id": "puluh ribu",
      "es": "ten thousand",
      "pt": "ten thousand"
    },
    "ex": "一万円",
    "exm": {
      "en": "10000 yen",
      "zh-TW": "一萬日圓",
      "zh-CN": "一万日元",
      "ko": "만 엔",
      "vi": "một vạn yên",
      "id": "sepuluh ribu yen",
      "es": "10000 yen",
      "pt": "10000 yen"
    }
  },
  {
    "id": "V0630",
    "w": "百",
    "r": "ひゃく",
    "m": {
      "en": "hundred",
      "zh-TW": "百",
      "zh-CN": "百",
      "ko": "백",
      "vi": "Trăm",
      "id": "Seratus",
      "es": "hundred",
      "pt": "hundred"
    },
    "ex": "三百円",
    "exm": {
      "en": "300 yen",
      "zh-TW": "三百日圓",
      "zh-CN": "三百日元",
      "ko": "삼백 엔",
      "vi": "ba trăm yên",
      "id": "tiga ratus yen",
      "es": "300 yen",
      "pt": "300 yen"
    }
  },
  {
    "id": "V0631",
    "w": "千",
    "r": "せん",
    "m": {
      "en": "thousand",
      "zh-TW": "千",
      "zh-CN": "千",
      "ko": "천",
      "vi": "Nghìn",
      "id": "Seribu",
      "es": "thousand",
      "pt": "thousand"
    },
    "ex": "五千円",
    "exm": {
      "en": "5000 yen",
      "zh-TW": "五千日圓",
      "zh-CN": "五千日元",
      "ko": "오천 엔",
      "vi": "năm nghìn yên",
      "id": "lima ribu yen",
      "es": "5000 yen",
      "pt": "5000 yen"
    }
  },
  {
    "id": "V0632",
    "w": "さい",
    "r": "さい",
    "m": {
      "en": "years old",
      "zh-TW": "歲",
      "zh-CN": "岁",
      "ko": "살",
      "vi": "tuổi",
      "id": "tahun",
      "es": "years old",
      "pt": "years old"
    },
    "ex": "二十歳",
    "exm": {
      "en": "20 years old",
      "zh-TW": "二十歲",
      "zh-CN": "二十岁",
      "ko": "스무 살",
      "vi": "hai mươi tuổi",
      "id": "dua puluh tahun",
      "es": "20 years old",
      "pt": "20 years old"
    }
  },
  {
    "id": "V0633",
    "w": "こ",
    "r": "こ",
    "m": {
      "en": "counter",
      "zh-TW": "個",
      "zh-CN": "个",
      "ko": "개",
      "vi": "cái",
      "id": "buah",
      "es": "counter",
      "pt": "counter"
    },
    "ex": "りんご三個",
    "exm": {
      "en": "three apples",
      "zh-TW": "三個蘋果",
      "zh-CN": "三个苹果",
      "ko": "사과 세 개",
      "vi": "ba quả táo",
      "id": "tiga buah apel",
      "es": "three apples",
      "pt": "three apples"
    }
  },
  {
    "id": "V0634",
    "w": "まい",
    "r": "まい",
    "m": {
      "en": "sheet",
      "zh-TW": "張",
      "zh-CN": "张",
      "ko": "장",
      "vi": "tờ",
      "id": "lembar",
      "es": "sheet",
      "pt": "sheet"
    },
    "ex": "紙三枚",
    "exm": {
      "en": "three sheets",
      "zh-TW": "三張紙",
      "zh-CN": "三张纸",
      "ko": "종이 세 장",
      "vi": "ba tờ giấy",
      "id": "tiga lembar kertas",
      "es": "three sheets",
      "pt": "three sheets"
    }
  },
  {
    "id": "V0635",
    "w": "さつ",
    "r": "さつ",
    "m": {
      "en": "books",
      "zh-TW": "本",
      "zh-CN": "本",
      "ko": "권",
      "vi": "quyển",
      "id": "buku",
      "es": "books",
      "pt": "books"
    },
    "ex": "本二冊",
    "exm": {
      "en": "two books",
      "zh-TW": "兩本書",
      "zh-CN": "两本书",
      "ko": "책 두 권",
      "vi": "hai quyển sách",
      "id": "dua buku",
      "es": "two books",
      "pt": "two books"
    }
  },
  {
    "id": "V0636",
    "w": "はい",
    "r": "はい",
    "m": {
      "en": "cup",
      "zh-TW": "杯",
      "zh-CN": "杯",
      "ko": "잔",
      "vi": "ly",
      "id": "gelas",
      "es": "cup",
      "pt": "cup"
    },
    "ex": "コーヒー一杯",
    "exm": {
      "en": "one cup of coffee",
      "zh-TW": "一杯咖啡",
      "zh-CN": "一杯咖啡",
      "ko": "커피 한 잔",
      "vi": "một ly cà phê",
      "id": "satu gelas kopi",
      "es": "one cup of coffee",
      "pt": "one cup of coffee"
    }
  },
  {
    "id": "V0637",
    "w": "ひき",
    "r": "ひき",
    "m": {
      "en": "animal",
      "zh-TW": "動物",
      "zh-CN": "动物",
      "ko": "동물",
      "vi": "Động vật",
      "id": "Hewan",
      "es": "animal",
      "pt": "animal"
    },
    "ex": "猫二匹",
    "exm": {
      "en": "two cats",
      "zh-TW": "兩隻貓",
      "zh-CN": "两只猫",
      "ko": "고양이 두 마리",
      "vi": "hai con mèo",
      "id": "dua ekor kucing",
      "es": "two cats",
      "pt": "two cats"
    }
  },
  {
    "id": "V0638",
    "w": "だい",
    "r": "だい",
    "m": {
      "en": "machine",
      "zh-TW": "臺",
      "zh-CN": "台",
      "ko": "대",
      "vi": "chiếc",
      "id": "unit",
      "es": "machine",
      "pt": "machine"
    },
    "ex": "車一台",
    "exm": {
      "en": "one car",
      "zh-TW": "一輛車",
      "zh-CN": "一辆车",
      "ko": "차 한 대",
      "vi": "một chiếc xe",
      "id": "satu unit mobil",
      "es": "one car",
      "pt": "one car"
    }
  },
  {
    "id": "V0639",
    "w": "かい",
    "r": "かい",
    "m": {
      "en": "floor",
      "zh-TW": "樓",
      "zh-CN": "楼",
      "ko": "층",
      "vi": "tầng",
      "id": "lantai",
      "es": "floor",
      "pt": "floor"
    },
    "ex": "三階",
    "exm": {
      "en": "3rd floor",
      "zh-TW": "三樓",
      "zh-CN": "三楼",
      "ko": "삼층",
      "vi": "tầng ba",
      "id": "lantai tiga",
      "es": "3rd floor",
      "pt": "3rd floor"
    }
  },
  {
    "id": "V0640",
    "w": "ばん",
    "r": "ばん",
    "m": {
      "en": "number",
      "zh-TW": "數字",
      "zh-CN": "数字",
      "ko": "숫자",
      "vi": "Số",
      "id": "Angka",
      "es": "number",
      "pt": "number"
    },
    "ex": "一番",
    "exm": {
      "en": "number one",
      "zh-TW": "第一",
      "zh-CN": "第一",
      "ko": "일번",
      "vi": "số một",
      "id": "nomor satu",
      "es": "number one",
      "pt": "number one"
    }
  },
  {
    "id": "V0641",
    "w": "ど",
    "r": "ど",
    "m": {
      "en": "degree",
      "zh-TW": "度",
      "zh-CN": "度",
      "ko": "도",
      "vi": "độ",
      "id": "derajat",
      "es": "degree",
      "pt": "degree"
    },
    "ex": "三十度",
    "exm": {
      "en": "30 degrees",
      "zh-TW": "三十度",
      "zh-CN": "三十度",
      "ko": "삼십 도",
      "vi": "ba mươi độ",
      "id": "tiga puluh derajat",
      "es": "30 degrees",
      "pt": "30 degrees"
    }
  },
  {
    "id": "V0642",
    "w": "かい",
    "r": "かい",
    "m": {
      "en": "times",
      "zh-TW": "次",
      "zh-CN": "次",
      "ko": "번",
      "vi": "lần",
      "id": "kali",
      "es": "times",
      "pt": "times"
    },
    "ex": "二回",
    "exm": {
      "en": "two times",
      "zh-TW": "兩次",
      "zh-CN": "两次",
      "ko": "두 번",
      "vi": "hai lần",
      "id": "dua kali",
      "es": "two times",
      "pt": "two times"
    }
  },
  {
    "id": "V0643",
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
    "ex": "社会人",
    "exm": {
      "en": "working adult",
      "zh-TW": "社會人",
      "zh-CN": "社会人",
      "ko": "사회인",
      "vi": "người đi làm",
      "id": "pekerja",
      "es": "working adult",
      "pt": "working adult"
    }
  },
  {
    "id": "V0644",
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
    "ex": "日本文化",
    "exm": {
      "en": "Japanese culture",
      "zh-TW": "日本文化",
      "zh-CN": "日本文化",
      "ko": "일본 문화",
      "vi": "văn hóa Nhật",
      "id": "budaya Jepang",
      "es": "Japanese culture",
      "pt": "Japanese culture"
    }
  },
  {
    "id": "V0645",
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
    "ex": "歴史を学ぶ",
    "exm": {
      "en": "learn history",
      "zh-TW": "學歷史",
      "zh-CN": "学历史",
      "ko": "역사를 배우다",
      "vi": "học lịch sử",
      "id": "belajar sejarah",
      "es": "learn history",
      "pt": "learn history"
    }
  },
  {
    "id": "V0646",
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
    "ex": "環境問題",
    "exm": {
      "en": "environmental issue",
      "zh-TW": "環境問題",
      "zh-CN": "环境问题",
      "ko": "환경 문제",
      "vi": "vấn đề môi trường",
      "id": "masalah lingkungan",
      "es": "environmental issue",
      "pt": "environmental issue"
    }
  },
  {
    "id": "V0647",
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
    "ex": "自然が美しい",
    "exm": {
      "en": "nature is beautiful",
      "zh-TW": "自然很美",
      "zh-CN": "自然很美",
      "ko": "자연이 아름답다",
      "vi": "thiên nhiên đẹp",
      "id": "alam indah",
      "es": "nature is beautiful",
      "pt": "nature is beautiful"
    }
  },
  {
    "id": "V0648",
    "w": "ぎじゅつ",
    "r": "ぎじゅつ",
    "m": {
      "en": "technology",
      "zh-TW": "技術",
      "zh-CN": "技术",
      "ko": "기술",
      "vi": "kỹ thuật",
      "id": "teknologi",
      "es": "technology",
      "pt": "technology"
    },
    "ex": "新しい技術",
    "exm": {
      "en": "new technology",
      "zh-TW": "新技術",
      "zh-CN": "新技术",
      "ko": "새로운 기술",
      "vi": "kỹ thuật mới",
      "id": "teknologi baru",
      "es": "new technology",
      "pt": "new technology"
    }
  },
  {
    "id": "V0649",
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
    "ex": "事故が起きる",
    "exm": {
      "en": "accident happens",
      "zh-TW": "發生事故",
      "zh-CN": "发生事故",
      "ko": "사고가 일어나다",
      "vi": "tai nạn xảy ra",
      "id": "kecelakaan terjadi",
      "es": "accident happens",
      "pt": "accident happens"
    }
  },
  {
    "id": "V0650",
    "w": "ニュース",
    "r": "ニュース",
    "m": {
      "en": "news",
      "zh-TW": "新聞",
      "zh-CN": "新闻",
      "ko": "뉴스",
      "vi": "tin tức",
      "id": "berita",
      "es": "news",
      "pt": "news"
    },
    "ex": "ニュースを見る",
    "exm": {
      "en": "watch news",
      "zh-TW": "看新聞",
      "zh-CN": "看新闻",
      "ko": "뉴스를 보다",
      "vi": "xem tin tức",
      "id": "menonton berita",
      "es": "watch news",
      "pt": "watch news"
    }
  },
  {
    "id": "V0651",
    "w": "じょうほう",
    "r": "じょうほう",
    "m": {
      "en": "information",
      "zh-TW": "資訊",
      "zh-CN": "信息",
      "ko": "정보",
      "vi": "thông tin",
      "id": "informasi",
      "es": "information",
      "pt": "information"
    },
    "ex": "情報を集める",
    "exm": {
      "en": "gather info",
      "zh-TW": "收集資訊",
      "zh-CN": "收集信息",
      "ko": "정보를 모으다",
      "vi": "thu thập thông tin",
      "id": "mengumpulkan informasi",
      "es": "gather info",
      "pt": "gather info"
    }
  },
  {
    "id": "V0652",
    "w": "いけん",
    "r": "いけん",
    "m": {
      "en": "opinion",
      "zh-TW": "意見",
      "zh-CN": "意见",
      "ko": "의견",
      "vi": "ý kiến",
      "id": "pendapat",
      "es": "opinion",
      "pt": "opinion"
    },
    "ex": "意見を言う",
    "exm": {
      "en": "give opinion",
      "zh-TW": "發表意見",
      "zh-CN": "发表意见",
      "ko": "의견을 말하다",
      "vi": "nêu ý kiến",
      "id": "memberikan pendapat",
      "es": "give opinion",
      "pt": "give opinion"
    }
  },
  {
    "id": "V0653",
    "w": "すばらしい",
    "r": "すばらしい",
    "m": {
      "en": "wonderful",
      "zh-TW": "太棒了",
      "zh-CN": "太棒了",
      "ko": "훌륭하다",
      "vi": "tuyệt vời",
      "id": "luar biasa",
      "es": "wonderful",
      "pt": "wonderful"
    },
    "ex": "素晴らしい景色",
    "exm": {
      "en": "wonderful view",
      "zh-TW": "美麗的景色",
      "zh-CN": "美丽的景色",
      "ko": "훌륭한 경치",
      "vi": "cảnh đẹp",
      "id": "pemandangan indah",
      "es": "wonderful view",
      "pt": "wonderful view"
    }
  },
  {
    "id": "V0654",
    "w": "さいこう",
    "r": "さいこう",
    "m": {
      "en": "best",
      "zh-TW": "最棒",
      "zh-CN": "最棒",
      "ko": "최고",
      "vi": "tuyệt nhất",
      "id": "terbaik",
      "es": "best",
      "pt": "best"
    },
    "ex": "最高の日",
    "exm": {
      "en": "best day",
      "zh-TW": "最棒的一天",
      "zh-CN": "最棒的一天",
      "ko": "최고의 날",
      "vi": "ngày tuyệt nhất",
      "id": "hari terbaik",
      "es": "best day",
      "pt": "best day"
    }
  },
  {
    "id": "V0655",
    "w": "正しい",
    "r": "ただしい",
    "m": {
      "en": "correct",
      "zh-TW": "正確",
      "zh-CN": "正确",
      "ko": "올바르다",
      "vi": "đúng",
      "id": "benar",
      "es": "correct",
      "pt": "correct"
    },
    "ex": "正しい答え",
    "exm": {
      "en": "correct answer",
      "zh-TW": "正確答案",
      "zh-CN": "正确答案",
      "ko": "올바른 답",
      "vi": "câu trả lời đúng",
      "id": "jawaban benar",
      "es": "correct answer",
      "pt": "correct answer"
    }
  },
  {
    "id": "V0656",
    "w": "まちがい",
    "r": "まちがい",
    "m": {
      "en": "mistake",
      "zh-TW": "錯誤",
      "zh-CN": "错误",
      "ko": "실수",
      "vi": "lỗi",
      "id": "kesalahan",
      "es": "mistake",
      "pt": "mistake"
    },
    "ex": "間違いがある",
    "exm": {
      "en": "there is mistake",
      "zh-TW": "有錯誤",
      "zh-CN": "有错误",
      "ko": "실수가 있다",
      "vi": "có lỗi",
      "id": "ada kesalahan",
      "es": "there is mistake",
      "pt": "there is mistake"
    }
  },
  {
    "id": "V0657",
    "w": "かんぺき",
    "r": "かんぺき",
    "m": {
      "en": "perfect",
      "zh-TW": "完美",
      "zh-CN": "完美",
      "ko": "완벽",
      "vi": "hoàn hảo",
      "id": "sempurna",
      "es": "perfect",
      "pt": "perfect"
    },
    "ex": "完璧です",
    "exm": {
      "en": "it's perfect",
      "zh-TW": "完美",
      "zh-CN": "完美",
      "ko": "완벽해요",
      "vi": "hoàn hảo",
      "id": "sempurna",
      "es": "it's perfect",
      "pt": "it's perfect"
    }
  },
  {
    "id": "V0658",
    "w": "十分",
    "r": "じゅうぶん",
    "m": {
      "en": "enough",
      "zh-TW": "足夠",
      "zh-CN": "足够",
      "ko": "충분",
      "vi": "đủ",
      "id": "cukup",
      "es": "enough",
      "pt": "enough"
    },
    "ex": "十分です",
    "exm": {
      "en": "it's enough",
      "zh-TW": "夠了",
      "zh-CN": "够了",
      "ko": "충분해요",
      "vi": "đủ rồi",
      "id": "cukup",
      "es": "it's enough",
      "pt": "it's enough"
    }
  },
  {
    "id": "V0659",
    "w": "じゆう",
    "r": "じゆう",
    "m": {
      "en": "free",
      "zh-TW": "空閒",
      "zh-CN": "空闲",
      "ko": "한가한",
      "vi": "Rảnh",
      "id": "Bebas",
      "es": "free",
      "pt": "free"
    },
    "ex": "自由な時間",
    "exm": {
      "en": "free time",
      "zh-TW": "自由時間",
      "zh-CN": "自由时间",
      "ko": "자유 시간",
      "vi": "thời gian tự do",
      "id": "waktu bebas",
      "es": "free time",
      "pt": "free time"
    }
  },
  {
    "id": "V0660",
    "w": "形",
    "r": "かたち",
    "m": {
      "en": "shape",
      "zh-TW": "形狀",
      "zh-CN": "形状",
      "ko": "모양",
      "vi": "hình dạng",
      "id": "bentuk",
      "es": "shape",
      "pt": "shape"
    },
    "ex": "丸い形",
    "exm": {
      "en": "round shape",
      "zh-TW": "圓形",
      "zh-CN": "圆形",
      "ko": "둥근 모양",
      "vi": "hình tròn",
      "id": "bentuk bulat",
      "es": "round shape",
      "pt": "round shape"
    }
  },
  {
    "id": "V0661",
    "w": "あじ",
    "r": "あじ",
    "m": {
      "en": "taste",
      "zh-TW": "味道",
      "zh-CN": "味道",
      "ko": "맛",
      "vi": "vị",
      "id": "rasa",
      "es": "taste",
      "pt": "taste"
    },
    "ex": "味が良い",
    "exm": {
      "en": "taste good",
      "zh-TW": "味道好",
      "zh-CN": "味道好",
      "ko": "맛이 좋다",
      "vi": "ngon",
      "id": "rasanya enak",
      "es": "taste good",
      "pt": "taste good"
    }
  },
  {
    "id": "V0662",
    "w": "におい",
    "r": "におい",
    "m": {
      "en": "smell",
      "zh-TW": "氣味",
      "zh-CN": "气味",
      "ko": "냄새",
      "vi": "mùi",
      "id": "bau",
      "es": "smell",
      "pt": "smell"
    },
    "ex": "いい匂い",
    "exm": {
      "en": "good smell",
      "zh-TW": "好聞",
      "zh-CN": "好闻",
      "ko": "좋은 냄새",
      "vi": "mùi thơm",
      "id": "bau enak",
      "es": "good smell",
      "pt": "good smell"
    }
  },
  {
    "id": "V0663",
    "w": "音",
    "r": "おと",
    "m": {
      "en": "sound",
      "zh-TW": "聲音",
      "zh-CN": "声音",
      "ko": "소리",
      "vi": "âm thanh",
      "id": "suara",
      "es": "sound",
      "pt": "sound"
    },
    "ex": "音がする",
    "exm": {
      "en": "make sound",
      "zh-TW": "發出聲音",
      "zh-CN": "发出声音",
      "ko": "소리가 나다",
      "vi": "có tiếng",
      "id": "bersuara",
      "es": "make sound",
      "pt": "make sound"
    }
  },
  {
    "id": "V0664",
    "w": "ひかり",
    "r": "ひかり",
    "m": {
      "en": "light",
      "zh-TW": "輕",
      "zh-CN": "轻",
      "ko": "가벼운",
      "vi": "Nhẹ",
      "id": "Ringan",
      "es": "light",
      "pt": "light"
    },
    "ex": "光が見える",
    "exm": {
      "en": "see light",
      "zh-TW": "看到光",
      "zh-CN": "看到光",
      "ko": "빛이 보이다",
      "vi": "thấy ánh sáng",
      "id": "melihat cahaya",
      "es": "see light",
      "pt": "see light"
    }
  },
  {
    "id": "V0665",
    "w": "力",
    "r": "ちから",
    "m": {
      "en": "power",
      "zh-TW": "力量",
      "zh-CN": "力量",
      "ko": "힘",
      "vi": "sức mạnh",
      "id": "kekuatan",
      "es": "power",
      "pt": "power"
    },
    "ex": "力がある",
    "exm": {
      "en": "have power",
      "zh-TW": "有力量",
      "zh-CN": "有力量",
      "ko": "힘이 있다",
      "vi": "có sức mạnh",
      "id": "punya kekuatan",
      "es": "have power",
      "pt": "have power"
    }
  },
  {
    "id": "V0666",
    "w": "きもち",
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
    "ex": "気持ちがいい",
    "exm": {
      "en": "feel good",
      "zh-TW": "心情好",
      "zh-CN": "心情好",
      "ko": "기분이 좋다",
      "vi": "cảm giác tốt",
      "id": "perasaan baik",
      "es": "feel good",
      "pt": "feel good"
    }
  },
  {
    "id": "V0667",
    "w": "せいかつ",
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
    "ex": "日本での生活",
    "exm": {
      "en": "life in Japan",
      "zh-TW": "在日本的生活",
      "zh-CN": "在日本的生活",
      "ko": "일본에서의 생활",
      "vi": "cuộc sống ở Nhật",
      "id": "kehidupan di Jepang",
      "es": "life in Japan",
      "pt": "life in Japan"
    }
  },
  {
    "id": "V0668",
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
    "ex": "良い習慣",
    "exm": {
      "en": "good habit",
      "zh-TW": "好習慣",
      "zh-CN": "好习惯",
      "ko": "좋은 습관",
      "vi": "thói quen tốt",
      "id": "kebiasaan baik",
      "es": "good habit",
      "pt": "good habit"
    }
  },
  {
    "id": "V0669",
    "w": "けいかく",
    "r": "けいかく",
    "m": {
      "en": "plan",
      "zh-TW": "計劃",
      "zh-CN": "计划",
      "ko": "계획",
      "vi": "kế hoạch",
      "id": "rencana",
      "es": "plan",
      "pt": "plan"
    },
    "ex": "計画を立てる",
    "exm": {
      "en": "make a plan",
      "zh-TW": "制定計劃",
      "zh-CN": "制定计划",
      "ko": "계획을 세우다",
      "vi": "lập kế hoạch",
      "id": "membuat rencana",
      "es": "make a plan",
      "pt": "make a plan"
    }
  },
  {
    "id": "V0670",
    "w": "せつめい",
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
    "ex": "説明する",
    "exm": {
      "en": "explain",
      "zh-TW": "說明",
      "zh-CN": "说明",
      "ko": "설명하다",
      "vi": "giải thích",
      "id": "menjelaskan",
      "es": "explain",
      "pt": "explain"
    }
  },
  {
    "id": "V0671",
    "w": "見える",
    "r": "みえる",
    "m": {
      "en": "be visible",
      "zh-TW": "看得見",
      "zh-CN": "看得见",
      "ko": "보이다",
      "vi": "nhìn thấy",
      "id": "terlihat",
      "es": "be visible",
      "pt": "be visible"
    },
    "ex": "山が見える",
    "exm": {
      "en": "can see mountain",
      "zh-TW": "看得見山",
      "zh-CN": "看得见山",
      "ko": "산이 보이다",
      "vi": "nhìn thấy núi",
      "id": "gunung terlihat",
      "es": "can see mountain",
      "pt": "can see mountain"
    }
  },
  {
    "id": "V0672",
    "w": "聞こえる",
    "r": "きこえる",
    "m": {
      "en": "be audible",
      "zh-TW": "聽得見",
      "zh-CN": "听得见",
      "ko": "들리다",
      "vi": "nghe thấy",
      "id": "terdengar",
      "es": "be audible",
      "pt": "be audible"
    },
    "ex": "声が聞こえる",
    "exm": {
      "en": "can hear voice",
      "zh-TW": "聽得見聲音",
      "zh-CN": "听得见声音",
      "ko": "목소리가 들리다",
      "vi": "nghe thấy tiếng",
      "id": "suara terdengar",
      "es": "can hear voice",
      "pt": "can hear voice"
    }
  },
  {
    "id": "V0673",
    "w": "こむ",
    "r": "こむ",
    "m": {
      "en": "be crowded",
      "zh-TW": "擁擠",
      "zh-CN": "拥挤",
      "ko": "붐비다",
      "vi": "đông",
      "id": "ramai",
      "es": "be crowded",
      "pt": "be crowded"
    },
    "ex": "電車が混む",
    "exm": {
      "en": "train is crowded",
      "zh-TW": "電車很擠",
      "zh-CN": "电车很挤",
      "ko": "전철이 붐비다",
      "vi": "tàu đông",
      "id": "kereta ramai",
      "es": "train is crowded",
      "pt": "train is crowded"
    }
  },
  {
    "id": "V0674",
    "w": "空く",
    "r": "すく",
    "m": {
      "en": "become empty",
      "zh-TW": "空",
      "zh-CN": "空",
      "ko": "비다",
      "vi": "vắng",
      "id": "kosong",
      "es": "become empty",
      "pt": "become empty"
    },
    "ex": "お腹が空く",
    "exm": {
      "en": "get hungry",
      "zh-TW": "肚子餓",
      "zh-CN": "肚子饿",
      "ko": "배가 고프다",
      "vi": "đói bụng",
      "id": "lapar",
      "es": "get hungry",
      "pt": "get hungry"
    }
  },
  {
    "id": "V0675",
    "w": "おもいだす",
    "r": "おもいだす",
    "m": {
      "en": "remember",
      "zh-TW": "想起",
      "zh-CN": "想起",
      "ko": "떠올리다",
      "vi": "nhớ ra",
      "id": "mengingat",
      "es": "remember",
      "pt": "remember"
    },
    "ex": "昔を思い出す",
    "exm": {
      "en": "remember old days",
      "zh-TW": "想起以前",
      "zh-CN": "想起以前",
      "ko": "옛날을 떠올리다",
      "vi": "nhớ lại ngày xưa",
      "id": "mengingat masa lalu",
      "es": "remember old days",
      "pt": "remember old days"
    }
  },
  {
    "id": "V0676",
    "w": "おもいで",
    "r": "おもいで",
    "m": {
      "en": "memory",
      "zh-TW": "回憶",
      "zh-CN": "回忆",
      "ko": "추억",
      "vi": "kỷ niệm",
      "id": "kenangan",
      "es": "memory",
      "pt": "memory"
    },
    "ex": "楽しい思い出",
    "exm": {
      "en": "fun memory",
      "zh-TW": "快樂的回憶",
      "zh-CN": "快乐的回忆",
      "ko": "즐거운 추억",
      "vi": "kỷ niệm vui",
      "id": "kenangan menyenangkan",
      "es": "fun memory",
      "pt": "fun memory"
    }
  },
  {
    "id": "V0677",
    "w": "つたえる",
    "r": "つたえる",
    "m": {
      "en": "convey",
      "zh-TW": "傳達",
      "zh-CN": "传达",
      "ko": "전하다",
      "vi": "truyền đạt",
      "id": "menyampaikan",
      "es": "convey",
      "pt": "convey"
    },
    "ex": "気持ちを伝える",
    "exm": {
      "en": "convey feelings",
      "zh-TW": "傳達心意",
      "zh-CN": "传达心意",
      "ko": "마음을 전하다",
      "vi": "truyền đạt cảm xúc",
      "id": "menyampaikan perasaan",
      "es": "convey feelings",
      "pt": "convey feelings"
    }
  },
  {
    "id": "V0678",
    "w": "うける",
    "r": "うける",
    "m": {
      "en": "receive",
      "zh-TW": "接受",
      "zh-CN": "接受",
      "ko": "받다",
      "vi": "nhận",
      "id": "menerima",
      "es": "receive",
      "pt": "receive"
    },
    "ex": "試験を受ける",
    "exm": {
      "en": "take exam",
      "zh-TW": "參加考試",
      "zh-CN": "参加考试",
      "ko": "시험을 보다",
      "vi": "thi",
      "id": "mengikuti ujian",
      "es": "take exam",
      "pt": "take exam"
    }
  },
  {
    "id": "V0679",
    "w": "すてる",
    "r": "すてる",
    "m": {
      "en": "throw away",
      "zh-TW": "丟掉",
      "zh-CN": "丢掉",
      "ko": "버리다",
      "vi": "vứt",
      "id": "membuang",
      "es": "throw away",
      "pt": "throw away"
    },
    "ex": "ゴミを捨てる",
    "exm": {
      "en": "throw trash",
      "zh-TW": "丟垃圾",
      "zh-CN": "丢垃圾",
      "ko": "쓰레기를 버리다",
      "vi": "vứt rác",
      "id": "membuang sampah",
      "es": "throw trash",
      "pt": "throw trash"
    }
  },
  {
    "id": "V0680",
    "w": "むかえる",
    "r": "むかえる",
    "m": {
      "en": "welcome",
      "zh-TW": "迎接",
      "zh-CN": "迎接",
      "ko": "맞이하다",
      "vi": "đón",
      "id": "menyambut",
      "es": "welcome",
      "pt": "welcome"
    },
    "ex": "客を迎える",
    "exm": {
      "en": "welcome guest",
      "zh-TW": "迎接客人",
      "zh-CN": "迎接客人",
      "ko": "손님을 맞이하다",
      "vi": "đón khách",
      "id": "menyambut tamu",
      "es": "welcome guest",
      "pt": "welcome guest"
    }
  },
  {
    "id": "V0681",
    "w": "たずねる",
    "r": "たずねる",
    "m": {
      "en": "visit",
      "zh-TW": "拜訪",
      "zh-CN": "拜访",
      "ko": "방문하다",
      "vi": "thăm",
      "id": "mengunjungi",
      "es": "visit",
      "pt": "visit"
    },
    "ex": "友達を訪ねる",
    "exm": {
      "en": "visit friend",
      "zh-TW": "拜訪朋友",
      "zh-CN": "拜访朋友",
      "ko": "친구를 방문하다",
      "vi": "thăm bạn",
      "id": "mengunjungi teman",
      "es": "visit friend",
      "pt": "visit friend"
    }
  },
  {
    "id": "V0682",
    "w": "ほうもん",
    "r": "ほうもん",
    "m": {
      "en": "visit",
      "zh-TW": "訪問",
      "zh-CN": "访问",
      "ko": "방문",
      "vi": "viếng thăm",
      "id": "kunjungan",
      "es": "visit",
      "pt": "visit"
    },
    "ex": "訪問する",
    "exm": {
      "en": "pay a visit",
      "zh-TW": "訪問",
      "zh-CN": "访问",
      "ko": "방문하다",
      "vi": "viếng thăm",
      "id": "berkunjung",
      "es": "pay a visit",
      "pt": "pay a visit"
    }
  },
  {
    "id": "V0683",
    "w": "あんない",
    "r": "あんない",
    "m": {
      "en": "guide",
      "zh-TW": "指引",
      "zh-CN": "指引",
      "ko": "안내",
      "vi": "hướng dẫn",
      "id": "panduan",
      "es": "guide",
      "pt": "guide"
    },
    "ex": "案内する",
    "exm": {
      "en": "guide",
      "zh-TW": "指引",
      "zh-CN": "指引",
      "ko": "안내하다",
      "vi": "hướng dẫn",
      "id": "memandu",
      "es": "guide",
      "pt": "guide"
    }
  },
  {
    "id": "V0684",
    "w": "そうだん",
    "r": "そうだん",
    "m": {
      "en": "consultation",
      "zh-TW": "商量",
      "zh-CN": "商量",
      "ko": "상담",
      "vi": "tham khảo",
      "id": "konsultasi",
      "es": "consultation",
      "pt": "consultation"
    },
    "ex": "相談する",
    "exm": {
      "en": "consult",
      "zh-TW": "商量",
      "zh-CN": "商量",
      "ko": "상담하다",
      "vi": "tham khảo",
      "id": "berkonsultasi",
      "es": "consult",
      "pt": "consult"
    }
  },
  {
    "id": "V0685",
    "w": "しょうたい",
    "r": "しょうたい",
    "m": {
      "en": "invitation",
      "zh-TW": "邀請",
      "zh-CN": "邀请",
      "ko": "초대",
      "vi": "mời",
      "id": "undangan",
      "es": "invitation",
      "pt": "invitation"
    },
    "ex": "招待する",
    "exm": {
      "en": "invite",
      "zh-TW": "邀請",
      "zh-CN": "邀请",
      "ko": "초대하다",
      "vi": "mời",
      "id": "mengundang",
      "es": "invite",
      "pt": "invite"
    }
  },
  {
    "id": "V0686",
    "w": "おいわい",
    "r": "おいわい",
    "m": {
      "en": "celebration",
      "zh-TW": "慶祝",
      "zh-CN": "庆祝",
      "ko": "축하",
      "vi": "chúc mừng",
      "id": "perayaan",
      "es": "celebration",
      "pt": "celebration"
    },
    "ex": "お祝いする",
    "exm": {
      "en": "celebrate",
      "zh-TW": "慶祝",
      "zh-CN": "庆祝",
      "ko": "축하하다",
      "vi": "chúc mừng",
      "id": "merayakan",
      "es": "celebrate",
      "pt": "celebrate"
    }
  },
  {
    "id": "V0687",
    "w": "おれい",
    "r": "おれい",
    "m": {
      "en": "thanks",
      "zh-TW": "感謝",
      "zh-CN": "感谢",
      "ko": "감사",
      "vi": "cảm ơn",
      "id": "terima kasih",
      "es": "thanks",
      "pt": "thanks"
    },
    "ex": "お礼を言う",
    "exm": {
      "en": "say thanks",
      "zh-TW": "道謝",
      "zh-CN": "道谢",
      "ko": "감사 인사를 하다",
      "vi": "nói cảm ơn",
      "id": "mengucapkan terima kasih",
      "es": "say thanks",
      "pt": "say thanks"
    }
  },
  {
    "id": "V0688",
    "w": "おわび",
    "r": "おわび",
    "m": {
      "en": "apology",
      "zh-TW": "道歉",
      "zh-CN": "道歉",
      "ko": "사과",
      "vi": "xin lỗi",
      "id": "permintaan maaf",
      "es": "apology",
      "pt": "apology"
    },
    "ex": "お詫びする",
    "exm": {
      "en": "apologize",
      "zh-TW": "道歉",
      "zh-CN": "道歉",
      "ko": "사과하다",
      "vi": "xin lỗi",
      "id": "meminta maaf",
      "es": "apologize",
      "pt": "apologize"
    }
  },
  {
    "id": "V0689",
    "w": "おねがい",
    "r": "おねがい",
    "m": {
      "en": "request",
      "zh-TW": "拜託",
      "zh-CN": "拜托",
      "ko": "부탁",
      "vi": "nhờ",
      "id": "permintaan",
      "es": "request",
      "pt": "request"
    },
    "ex": "お願いする",
    "exm": {
      "en": "request",
      "zh-TW": "拜託",
      "zh-CN": "拜托",
      "ko": "부탁하다",
      "vi": "nhờ",
      "id": "meminta",
      "es": "request",
      "pt": "request"
    }
  },
  {
    "id": "V0690",
    "w": "あいさつ",
    "r": "あいさつ",
    "m": {
      "en": "greeting",
      "zh-TW": "問候",
      "zh-CN": "问候",
      "ko": "인사",
      "vi": "chào hỏi",
      "id": "salam",
      "es": "greeting",
      "pt": "greeting"
    },
    "ex": "挨拶する",
    "exm": {
      "en": "greet",
      "zh-TW": "問候",
      "zh-CN": "问候",
      "ko": "인사하다",
      "vi": "chào hỏi",
      "id": "menyapa",
      "es": "greet",
      "pt": "greet"
    }
  },
  {
    "id": "V0691",
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
    "ex": "返事する",
    "exm": {
      "en": "reply",
      "zh-TW": "回答",
      "zh-CN": "回答",
      "ko": "대답하다",
      "vi": "trả lời",
      "id": "membalas",
      "es": "reply",
      "pt": "reply"
    }
  },
  {
    "id": "V0692",
    "w": "よてい",
    "r": "よてい",
    "m": {
      "en": "schedule",
      "zh-TW": "預定",
      "zh-CN": "预定",
      "ko": "예정",
      "vi": "lịch trình",
      "id": "jadwal",
      "es": "schedule",
      "pt": "schedule"
    },
    "ex": "予定がある",
    "exm": {
      "en": "have plans",
      "zh-TW": "有預定",
      "zh-CN": "有预定",
      "ko": "예정이 있다",
      "vi": "có lịch",
      "id": "ada jadwal",
      "es": "have plans",
      "pt": "have plans"
    }
  },
  {
    "id": "V0693",
    "w": "ようじ",
    "r": "ようじ",
    "m": {
      "en": "errand",
      "zh-TW": "事情",
      "zh-CN": "事情",
      "ko": "용무",
      "vi": "việc",
      "id": "urusan",
      "es": "errand",
      "pt": "errand"
    },
    "ex": "用事がある",
    "exm": {
      "en": "have errand",
      "zh-TW": "有事情",
      "zh-CN": "有事情",
      "ko": "용무가 있다",
      "vi": "có việc",
      "id": "ada urusan",
      "es": "have errand",
      "pt": "have errand"
    }
  },
  {
    "id": "V0694",
    "w": "ようい",
    "r": "ようい",
    "m": {
      "en": "prepare",
      "zh-TW": "準備",
      "zh-CN": "准备",
      "ko": "준비",
      "vi": "chuẩn bị",
      "id": "persiapan",
      "es": "prepare",
      "pt": "prepare"
    },
    "ex": "用意する",
    "exm": {
      "en": "prepare",
      "zh-TW": "準備",
      "zh-CN": "准备",
      "ko": "준비하다",
      "vi": "chuẩn bị",
      "id": "mempersiapkan",
      "es": "prepare",
      "pt": "prepare"
    }
  },
  {
    "id": "V0695",
    "w": "ちゅうい",
    "r": "ちゅうい",
    "m": {
      "en": "caution",
      "zh-TW": "注意",
      "zh-CN": "注意",
      "ko": "주의",
      "vi": "chú ý",
      "id": "perhatian",
      "es": "caution",
      "pt": "caution"
    },
    "ex": "注意する",
    "exm": {
      "en": "be careful",
      "zh-TW": "注意",
      "zh-CN": "注意",
      "ko": "주의하다",
      "vi": "chú ý",
      "id": "berhati-hati",
      "es": "be careful",
      "pt": "be careful"
    }
  },
  {
    "id": "V0696",
    "w": "かくにん",
    "r": "かくにん",
    "m": {
      "en": "confirm",
      "zh-TW": "確認",
      "zh-CN": "确认",
      "ko": "확인",
      "vi": "xác nhận",
      "id": "konfirmasi",
      "es": "confirm",
      "pt": "confirm"
    },
    "ex": "確認する",
    "exm": {
      "en": "confirm",
      "zh-TW": "確認",
      "zh-CN": "确认",
      "ko": "확인하다",
      "vi": "xác nhận",
      "id": "mengkonfirmasi",
      "es": "confirm",
      "pt": "confirm"
    }
  },
  {
    "id": "V0697",
    "w": "さんせい",
    "r": "さんせい",
    "m": {
      "en": "agree",
      "zh-TW": "贊成",
      "zh-CN": "赞成",
      "ko": "찬성",
      "vi": "đồng ý",
      "id": "setuju",
      "es": "agree",
      "pt": "agree"
    },
    "ex": "賛成する",
    "exm": {
      "en": "agree",
      "zh-TW": "贊成",
      "zh-CN": "赞成",
      "ko": "찬성하다",
      "vi": "đồng ý",
      "id": "setuju",
      "es": "agree",
      "pt": "agree"
    }
  },
  {
    "id": "V0698",
    "w": "はんたい",
    "r": "はんたい",
    "m": {
      "en": "oppose",
      "zh-TW": "反對",
      "zh-CN": "反对",
      "ko": "반대",
      "vi": "phản đối",
      "id": "menentang",
      "es": "oppose",
      "pt": "oppose"
    },
    "ex": "反対する",
    "exm": {
      "en": "oppose",
      "zh-TW": "反對",
      "zh-CN": "反对",
      "ko": "반대하다",
      "vi": "phản đối",
      "id": "menentang",
      "es": "oppose",
      "pt": "oppose"
    }
  },
  {
    "id": "V0699",
    "w": "さんか",
    "r": "さんか",
    "m": {
      "en": "participate",
      "zh-TW": "參加",
      "zh-CN": "参加",
      "ko": "참가",
      "vi": "tham gia",
      "id": "berpartisipasi",
      "es": "participate",
      "pt": "participate"
    },
    "ex": "参加する",
    "exm": {
      "en": "participate",
      "zh-TW": "參加",
      "zh-CN": "参加",
      "ko": "참가하다",
      "vi": "tham gia",
      "id": "berpartisipasi",
      "es": "participate",
      "pt": "participate"
    }
  },
  {
    "id": "V0700",
    "w": "しゅっせき",
    "r": "しゅっせき",
    "m": {
      "en": "attend",
      "zh-TW": "出席",
      "zh-CN": "出席",
      "ko": "출석",
      "vi": "tham dự",
      "id": "hadir",
      "es": "attend",
      "pt": "attend"
    },
    "ex": "出席する",
    "exm": {
      "en": "attend",
      "zh-TW": "出席",
      "zh-CN": "出席",
      "ko": "출석하다",
      "vi": "tham dự",
      "id": "hadir",
      "es": "attend",
      "pt": "attend"
    }
  },
  {
    "id": "V0701",
    "w": "けっせき",
    "r": "けっせき",
    "m": {
      "en": "absent",
      "zh-TW": "缺席",
      "zh-CN": "缺席",
      "ko": "결석",
      "vi": "vắng mặt",
      "id": "absen",
      "es": "absent",
      "pt": "absent"
    },
    "ex": "欠席する",
    "exm": {
      "en": "be absent",
      "zh-TW": "缺席",
      "zh-CN": "缺席",
      "ko": "결석하다",
      "vi": "vắng mặt",
      "id": "absen",
      "es": "be absent",
      "pt": "be absent"
    }
  },
  {
    "id": "V0702",
    "w": "ちこく",
    "r": "ちこく",
    "m": {
      "en": "late",
      "zh-TW": "遲到",
      "zh-CN": "迟到",
      "ko": "지각",
      "vi": "muộn",
      "id": "terlambat",
      "es": "late",
      "pt": "late"
    },
    "ex": "遅刻する",
    "exm": {
      "en": "be late",
      "zh-TW": "遲到",
      "zh-CN": "迟到",
      "ko": "지각하다",
      "vi": "đến muộn",
      "id": "terlambat",
      "es": "be late",
      "pt": "be late"
    }
  },
  {
    "id": "V0703",
    "w": "そつぎょう",
    "r": "そつぎょう",
    "m": {
      "en": "graduate",
      "zh-TW": "畢業",
      "zh-CN": "毕业",
      "ko": "졸업",
      "vi": "tốt nghiệp",
      "id": "lulus",
      "es": "graduate",
      "pt": "graduate"
    },
    "ex": "卒業する",
    "exm": {
      "en": "graduate",
      "zh-TW": "畢業",
      "zh-CN": "毕业",
      "ko": "졸업하다",
      "vi": "tốt nghiệp",
      "id": "lulus",
      "es": "graduate",
      "pt": "graduate"
    }
  },
  {
    "id": "V0704",
    "w": "入学",
    "r": "にゅうがく",
    "m": {
      "en": "enroll",
      "zh-TW": "入學",
      "zh-CN": "入学",
      "ko": "입학",
      "vi": "nhập học",
      "id": "masuk sekolah",
      "es": "enroll",
      "pt": "enroll"
    },
    "ex": "入学する",
    "exm": {
      "en": "enroll",
      "zh-TW": "入學",
      "zh-CN": "入学",
      "ko": "입학하다",
      "vi": "nhập học",
      "id": "masuk sekolah",
      "es": "enroll",
      "pt": "enroll"
    }
  },
  {
    "id": "V0705",
    "w": "しゅうしょく",
    "r": "しゅうしょく",
    "m": {
      "en": "get job",
      "zh-TW": "就職",
      "zh-CN": "就职",
      "ko": "취직",
      "vi": "xin việc",
      "id": "mendapat pekerjaan",
      "es": "get job",
      "pt": "get job"
    },
    "ex": "就職する",
    "exm": {
      "en": "get a job",
      "zh-TW": "就職",
      "zh-CN": "就职",
      "ko": "취직하다",
      "vi": "xin được việc",
      "id": "mendapat pekerjaan",
      "es": "get a job",
      "pt": "get a job"
    }
  },
  {
    "id": "V0706",
    "w": "たいしょく",
    "r": "たいしょく",
    "m": {
      "en": "retire",
      "zh-TW": "退休",
      "zh-CN": "退休",
      "ko": "퇴직",
      "vi": "nghỉ việc",
      "id": "pensiun",
      "es": "retire",
      "pt": "retire"
    },
    "ex": "退職する",
    "exm": {
      "en": "retire",
      "zh-TW": "退休",
      "zh-CN": "退休",
      "ko": "퇴직하다",
      "vi": "nghỉ việc",
      "id": "pensiun",
      "es": "retire",
      "pt": "retire"
    }
  },
  {
    "id": "V0707",
    "w": "しゅっちょう",
    "r": "しゅっちょう",
    "m": {
      "en": "business trip",
      "zh-TW": "出差",
      "zh-CN": "出差",
      "ko": "출장",
      "vi": "công tác",
      "id": "perjalanan dinas",
      "es": "business trip",
      "pt": "business trip"
    },
    "ex": "出張する",
    "exm": {
      "en": "go on business trip",
      "zh-TW": "出差",
      "zh-CN": "出差",
      "ko": "출장 가다",
      "vi": "đi công tác",
      "id": "perjalanan dinas",
      "es": "go on business trip",
      "pt": "go on business trip"
    }
  },
  {
    "id": "V0708",
    "w": "きゅうけい",
    "r": "きゅうけい",
    "m": {
      "en": "break",
      "zh-TW": "休息",
      "zh-CN": "休息",
      "ko": "휴식",
      "vi": "nghỉ ngơi",
      "id": "istirahat",
      "es": "break",
      "pt": "break"
    },
    "ex": "休憩する",
    "exm": {
      "en": "take a break",
      "zh-TW": "休息",
      "zh-CN": "休息",
      "ko": "휴식하다",
      "vi": "nghỉ ngơi",
      "id": "beristirahat",
      "es": "take a break",
      "pt": "take a break"
    }
  },
  {
    "id": "V0709",
    "w": "さんぽ",
    "r": "さんぽ",
    "m": {
      "en": "walk",
      "zh-TW": "散步",
      "zh-CN": "散步",
      "ko": "산책",
      "vi": "đi dạo",
      "id": "jalan-jalan",
      "es": "walk",
      "pt": "walk"
    },
    "ex": "散歩する",
    "exm": {
      "en": "take a walk",
      "zh-TW": "散步",
      "zh-CN": "散步",
      "ko": "산책하다",
      "vi": "đi dạo",
      "id": "jalan-jalan",
      "es": "take a walk",
      "pt": "take a walk"
    }
  },
  {
    "id": "V0710",
    "w": "けんぶつ",
    "r": "けんぶつ",
    "m": {
      "en": "sightseeing",
      "zh-TW": "觀光",
      "zh-CN": "观光",
      "ko": "구경",
      "vi": "tham quan",
      "id": "wisata",
      "es": "sightseeing",
      "pt": "sightseeing"
    },
    "ex": "見物する",
    "exm": {
      "en": "go sightseeing",
      "zh-TW": "觀光",
      "zh-CN": "观光",
      "ko": "구경하다",
      "vi": "tham quan",
      "id": "berwisata",
      "es": "go sightseeing",
      "pt": "go sightseeing"
    }
  },
  {
    "id": "V0711",
    "w": "しょくじ",
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
    "ex": "食事する",
    "exm": {
      "en": "have meal",
      "zh-TW": "用餐",
      "zh-CN": "用餐",
      "ko": "식사하다",
      "vi": "ăn cơm",
      "id": "makan",
      "es": "have meal",
      "pt": "have meal"
    }
  },
  {
    "id": "V0712",
    "w": "せんたく",
    "r": "せんたく",
    "m": {
      "en": "laundry",
      "zh-TW": "洗衣",
      "zh-CN": "洗衣",
      "ko": "세탁",
      "vi": "giặt đồ",
      "id": "mencuci",
      "es": "laundry",
      "pt": "laundry"
    },
    "ex": "洗濯する",
    "exm": {
      "en": "do laundry",
      "zh-TW": "洗衣服",
      "zh-CN": "洗衣服",
      "ko": "세탁하다",
      "vi": "giặt đồ",
      "id": "mencuci pakaian",
      "es": "do laundry",
      "pt": "do laundry"
    }
  },
  {
    "id": "V0713",
    "w": "そうじ",
    "r": "そうじ",
    "m": {
      "en": "cleaning",
      "zh-TW": "打掃",
      "zh-CN": "打扫",
      "ko": "청소",
      "vi": "dọn dẹp",
      "id": "bersih-bersih",
      "es": "cleaning",
      "pt": "cleaning"
    },
    "ex": "掃除する",
    "exm": {
      "en": "clean",
      "zh-TW": "打掃",
      "zh-CN": "打扫",
      "ko": "청소하다",
      "vi": "dọn dẹp",
      "id": "membersihkan",
      "es": "clean",
      "pt": "clean"
    }
  },
  {
    "id": "V0714",
    "w": "うんどう",
    "r": "うんどう",
    "m": {
      "en": "exercise",
      "zh-TW": "運動",
      "zh-CN": "运动",
      "ko": "운동",
      "vi": "vận động",
      "id": "olahraga",
      "es": "exercise",
      "pt": "exercise"
    },
    "ex": "運動する",
    "exm": {
      "en": "exercise",
      "zh-TW": "運動",
      "zh-CN": "运动",
      "ko": "운동하다",
      "vi": "vận động",
      "id": "berolahraga",
      "es": "exercise",
      "pt": "exercise"
    }
  },
  {
    "id": "V0715",
    "w": "うんてん",
    "r": "うんてん",
    "m": {
      "en": "drive",
      "zh-TW": "駕駛",
      "zh-CN": "驾驶",
      "ko": "운전",
      "vi": "lái xe",
      "id": "mengemudi",
      "es": "drive",
      "pt": "drive"
    },
    "ex": "運転する",
    "exm": {
      "en": "drive",
      "zh-TW": "駕駛",
      "zh-CN": "驾驶",
      "ko": "운전하다",
      "vi": "lái xe",
      "id": "mengemudi",
      "es": "drive",
      "pt": "drive"
    }
  },
  {
    "id": "V0716",
    "w": "りよう",
    "r": "りよう",
    "m": {
      "en": "use",
      "zh-TW": "利用",
      "zh-CN": "利用",
      "ko": "이용",
      "vi": "sử dụng",
      "id": "menggunakan",
      "es": "use",
      "pt": "use"
    },
    "ex": "利用する",
    "exm": {
      "en": "use",
      "zh-TW": "利用",
      "zh-CN": "利用",
      "ko": "이용하다",
      "vi": "sử dụng",
      "id": "menggunakan",
      "es": "use",
      "pt": "use"
    }
  },
  {
    "id": "V0717",
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
    "ex": "輸入する",
    "exm": {
      "en": "import",
      "zh-TW": "進口",
      "zh-CN": "进口",
      "ko": "수입하다",
      "vi": "nhập khẩu",
      "id": "mengimpor",
      "es": "import",
      "pt": "import"
    }
  },
  {
    "id": "V0718",
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
    "ex": "輸出する",
    "exm": {
      "en": "export",
      "zh-TW": "出口",
      "zh-CN": "出口",
      "ko": "수출하다",
      "vi": "xuất khẩu",
      "id": "mengekspor",
      "es": "export",
      "pt": "export"
    }
  },
  {
    "id": "V0719",
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
    "ex": "発展する",
    "exm": {
      "en": "develop",
      "zh-TW": "發展",
      "zh-CN": "发展",
      "ko": "발전하다",
      "vi": "phát triển",
      "id": "berkembang",
      "es": "develop",
      "pt": "develop"
    }
  },
  {
    "id": "V0720",
    "w": "はつめい",
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
    "ex": "発明する",
    "exm": {
      "en": "invent",
      "zh-TW": "發明",
      "zh-CN": "发明",
      "ko": "발명하다",
      "vi": "phát minh",
      "id": "menemukan",
      "es": "invent",
      "pt": "invent"
    }
  },
  {
    "id": "V0721",
    "w": "はっけん",
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
    "ex": "発見する",
    "exm": {
      "en": "discover",
      "zh-TW": "發現",
      "zh-CN": "发现",
      "ko": "발견하다",
      "vi": "phát hiện",
      "id": "menemukan",
      "es": "discover",
      "pt": "discover"
    }
  },
  {
    "id": "V0722",
    "w": "けんきゅう",
    "r": "けんきゅう",
    "m": {
      "en": "research",
      "zh-TW": "研究",
      "zh-CN": "研究",
      "ko": "연구",
      "vi": "nghiên cứu",
      "id": "penelitian",
      "es": "research",
      "pt": "research"
    },
    "ex": "研究する",
    "exm": {
      "en": "research",
      "zh-TW": "研究",
      "zh-CN": "研究",
      "ko": "연구하다",
      "vi": "nghiên cứu",
      "id": "meneliti",
      "es": "research",
      "pt": "research"
    }
  },
  {
    "id": "V0723",
    "w": "ちょうさ",
    "r": "ちょうさ",
    "m": {
      "en": "survey",
      "zh-TW": "調查",
      "zh-CN": "调查",
      "ko": "조사",
      "vi": "điều tra",
      "id": "survei",
      "es": "survey",
      "pt": "survey"
    },
    "ex": "調査する",
    "exm": {
      "en": "survey",
      "zh-TW": "調查",
      "zh-CN": "调查",
      "ko": "조사하다",
      "vi": "điều tra",
      "id": "mensurvei",
      "es": "survey",
      "pt": "survey"
    }
  },
  {
    "id": "V0724",
    "w": "じっけん",
    "r": "じっけん",
    "m": {
      "en": "experiment",
      "zh-TW": "實驗",
      "zh-CN": "实验",
      "ko": "실험",
      "vi": "thí nghiệm",
      "id": "eksperimen",
      "es": "experiment",
      "pt": "experiment"
    },
    "ex": "実験する",
    "exm": {
      "en": "experiment",
      "zh-TW": "實驗",
      "zh-CN": "实验",
      "ko": "실험하다",
      "vi": "thí nghiệm",
      "id": "bereksperimen",
      "es": "experiment",
      "pt": "experiment"
    }
  },
  {
    "id": "V0725",
    "w": "ほうこく",
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
    "ex": "報告する",
    "exm": {
      "en": "report",
      "zh-TW": "報告",
      "zh-CN": "报告",
      "ko": "보고하다",
      "vi": "báo cáo",
      "id": "melaporkan",
      "es": "report",
      "pt": "report"
    }
  },
  {
    "id": "V0726",
    "w": "はっぴょう",
    "r": "はっぴょう",
    "m": {
      "en": "announce",
      "zh-TW": "發表",
      "zh-CN": "发表",
      "ko": "발표",
      "vi": "phát biểu",
      "id": "pengumuman",
      "es": "announce",
      "pt": "announce"
    },
    "ex": "発表する",
    "exm": {
      "en": "announce",
      "zh-TW": "發表",
      "zh-CN": "发表",
      "ko": "발표하다",
      "vi": "phát biểu",
      "id": "mengumumkan",
      "es": "announce",
      "pt": "announce"
    }
  },
  {
    "id": "V0727",
    "w": "ほうそう",
    "r": "ほうそう",
    "m": {
      "en": "broadcast",
      "zh-TW": "播放",
      "zh-CN": "播放",
      "ko": "방송",
      "vi": "phát sóng",
      "id": "siaran",
      "es": "broadcast",
      "pt": "broadcast"
    },
    "ex": "放送する",
    "exm": {
      "en": "broadcast",
      "zh-TW": "播放",
      "zh-CN": "播放",
      "ko": "방송하다",
      "vi": "phát sóng",
      "id": "menyiarkan",
      "es": "broadcast",
      "pt": "broadcast"
    }
  },
  {
    "id": "V0728",
    "w": "ろくおん",
    "r": "ろくおん",
    "m": {
      "en": "record",
      "zh-TW": "錄音",
      "zh-CN": "录音",
      "ko": "녹음",
      "vi": "ghi âm",
      "id": "rekaman",
      "es": "record",
      "pt": "record"
    },
    "ex": "録音する",
    "exm": {
      "en": "record",
      "zh-TW": "錄音",
      "zh-CN": "录音",
      "ko": "녹음하다",
      "vi": "ghi âm",
      "id": "merekam",
      "es": "record",
      "pt": "record"
    }
  },
  {
    "id": "V0729",
    "w": "さつえい",
    "r": "さつえい",
    "m": {
      "en": "photography",
      "zh-TW": "拍攝",
      "zh-CN": "拍摄",
      "ko": "촬영",
      "vi": "chụp ảnh",
      "id": "fotografi",
      "es": "photography",
      "pt": "photography"
    },
    "ex": "撮影する",
    "exm": {
      "en": "take photo",
      "zh-TW": "拍攝",
      "zh-CN": "拍摄",
      "ko": "촬영하다",
      "vi": "chụp ảnh",
      "id": "memotret",
      "es": "take photo",
      "pt": "take photo"
    }
  },
  {
    "id": "V0730",
    "w": "いんさつ",
    "r": "いんさつ",
    "m": {
      "en": "print",
      "zh-TW": "印刷",
      "zh-CN": "印刷",
      "ko": "인쇄",
      "vi": "in ấn",
      "id": "cetak",
      "es": "print",
      "pt": "print"
    },
    "ex": "印刷する",
    "exm": {
      "en": "print",
      "zh-TW": "印刷",
      "zh-CN": "印刷",
      "ko": "인쇄하다",
      "vi": "in ấn",
      "id": "mencetak",
      "es": "print",
      "pt": "print"
    }
  },
  {
    "id": "V0731",
    "w": "ほんやく",
    "r": "ほんやく",
    "m": {
      "en": "translate",
      "zh-TW": "翻譯",
      "zh-CN": "翻译",
      "ko": "번역",
      "vi": "dịch",
      "id": "terjemahan",
      "es": "translate",
      "pt": "translate"
    },
    "ex": "翻訳する",
    "exm": {
      "en": "translate",
      "zh-TW": "翻譯",
      "zh-CN": "翻译",
      "ko": "번역하다",
      "vi": "dịch",
      "id": "menerjemahkan",
      "es": "translate",
      "pt": "translate"
    }
  },
  {
    "id": "V0732",
    "w": "つうやく",
    "r": "つうやく",
    "m": {
      "en": "interpret",
      "zh-TW": "口譯",
      "zh-CN": "口译",
      "ko": "통역",
      "vi": "phiên dịch",
      "id": "penerjemah",
      "es": "interpret",
      "pt": "interpret"
    },
    "ex": "通訳する",
    "exm": {
      "en": "interpret",
      "zh-TW": "口譯",
      "zh-CN": "口译",
      "ko": "통역하다",
      "vi": "phiên dịch",
      "id": "menerjemahkan lisan",
      "es": "interpret",
      "pt": "interpret"
    }
  },
  {
    "id": "V0733",
    "w": "入力",
    "r": "にゅうりょく",
    "m": {
      "en": "input",
      "zh-TW": "輸入",
      "zh-CN": "输入",
      "ko": "입력",
      "vi": "nhập",
      "id": "input",
      "es": "input",
      "pt": "input"
    },
    "ex": "入力する",
    "exm": {
      "en": "input",
      "zh-TW": "輸入",
      "zh-CN": "输入",
      "ko": "입력하다",
      "vi": "nhập",
      "id": "memasukkan",
      "es": "input",
      "pt": "input"
    }
  },
  {
    "id": "V0734",
    "w": "出力",
    "r": "しゅつりょく",
    "m": {
      "en": "output",
      "zh-TW": "輸出",
      "zh-CN": "输出",
      "ko": "출력",
      "vi": "xuất",
      "id": "output",
      "es": "output",
      "pt": "output"
    },
    "ex": "出力する",
    "exm": {
      "en": "output",
      "zh-TW": "輸出",
      "zh-CN": "输出",
      "ko": "출력하다",
      "vi": "xuất",
      "id": "mengeluarkan",
      "es": "output",
      "pt": "output"
    }
  },
  {
    "id": "V0735",
    "w": "けんさく",
    "r": "けんさく",
    "m": {
      "en": "search",
      "zh-TW": "搜尋",
      "zh-CN": "搜索",
      "ko": "검색",
      "vi": "tìm kiếm",
      "id": "pencarian",
      "es": "search",
      "pt": "search"
    },
    "ex": "検索する",
    "exm": {
      "en": "search",
      "zh-TW": "搜尋",
      "zh-CN": "搜索",
      "ko": "검색하다",
      "vi": "tìm kiếm",
      "id": "mencari",
      "es": "search",
      "pt": "search"
    }
  },
  {
    "id": "V0736",
    "w": "とうろく",
    "r": "とうろく",
    "m": {
      "en": "register",
      "zh-TW": "註冊",
      "zh-CN": "注册",
      "ko": "등록",
      "vi": "đăng ký",
      "id": "pendaftaran",
      "es": "register",
      "pt": "register"
    },
    "ex": "登録する",
    "exm": {
      "en": "register",
      "zh-TW": "註冊",
      "zh-CN": "注册",
      "ko": "등록하다",
      "vi": "đăng ký",
      "id": "mendaftar",
      "es": "register",
      "pt": "register"
    }
  },
  {
    "id": "V0737",
    "w": "さくじょ",
    "r": "さくじょ",
    "m": {
      "en": "delete",
      "zh-TW": "刪除",
      "zh-CN": "删除",
      "ko": "삭제",
      "vi": "xóa",
      "id": "hapus",
      "es": "delete",
      "pt": "delete"
    },
    "ex": "削除する",
    "exm": {
      "en": "delete",
      "zh-TW": "刪除",
      "zh-CN": "删除",
      "ko": "삭제하다",
      "vi": "xóa",
      "id": "menghapus",
      "es": "delete",
      "pt": "delete"
    }
  },
  {
    "id": "V0738",
    "w": "ほぞん",
    "r": "ほぞん",
    "m": {
      "en": "save",
      "zh-TW": "保存",
      "zh-CN": "保存",
      "ko": "저장",
      "vi": "lưu",
      "id": "simpan",
      "es": "save",
      "pt": "save"
    },
    "ex": "保存する",
    "exm": {
      "en": "save",
      "zh-TW": "保存",
      "zh-CN": "保存",
      "ko": "저장하다",
      "vi": "lưu",
      "id": "menyimpan",
      "es": "save",
      "pt": "save"
    }
  },
  {
    "id": "V0739",
    "w": "きょうゆう",
    "r": "きょうゆう",
    "m": {
      "en": "share",
      "zh-TW": "共享",
      "zh-CN": "共享",
      "ko": "공유",
      "vi": "chia sẻ",
      "id": "berbagi",
      "es": "share",
      "pt": "share"
    },
    "ex": "共有する",
    "exm": {
      "en": "share",
      "zh-TW": "共享",
      "zh-CN": "共享",
      "ko": "공유하다",
      "vi": "chia sẻ",
      "id": "berbagi",
      "es": "share",
      "pt": "share"
    }
  },
  {
    "id": "V0740",
    "w": "せつぞく",
    "r": "せつぞく",
    "m": {
      "en": "connect",
      "zh-TW": "連接",
      "zh-CN": "连接",
      "ko": "접속",
      "vi": "kết nối",
      "id": "koneksi",
      "es": "connect",
      "pt": "connect"
    },
    "ex": "接続する",
    "exm": {
      "en": "connect",
      "zh-TW": "連接",
      "zh-CN": "连接",
      "ko": "접속하다",
      "vi": "kết nối",
      "id": "menghubungkan",
      "es": "connect",
      "pt": "connect"
    }
  },
  {
    "id": "V0741",
    "w": "じゅうでん",
    "r": "じゅうでん",
    "m": {
      "en": "charge",
      "zh-TW": "充電",
      "zh-CN": "充电",
      "ko": "충전",
      "vi": "sạc pin",
      "id": "mengisi daya",
      "es": "charge",
      "pt": "charge"
    },
    "ex": "充電する",
    "exm": {
      "en": "charge",
      "zh-TW": "充電",
      "zh-CN": "充电",
      "ko": "충전하다",
      "vi": "sạc pin",
      "id": "mengisi daya",
      "es": "charge",
      "pt": "charge"
    }
  },
  {
    "id": "V0742",
    "w": "こしょう",
    "r": "こしょう",
    "m": {
      "en": "breakdown",
      "zh-TW": "故障",
      "zh-CN": "故障",
      "ko": "고장",
      "vi": "hỏng",
      "id": "rusak",
      "es": "breakdown",
      "pt": "breakdown"
    },
    "ex": "故障する",
    "exm": {
      "en": "break down",
      "zh-TW": "故障",
      "zh-CN": "故障",
      "ko": "고장나다",
      "vi": "bị hỏng",
      "id": "rusak",
      "es": "break down",
      "pt": "break down"
    }
  },
  {
    "id": "V0743",
    "w": "しゅうり",
    "r": "しゅうり",
    "m": {
      "en": "repair",
      "zh-TW": "修理",
      "zh-CN": "修理",
      "ko": "수리",
      "vi": "sửa chữa",
      "id": "perbaikan",
      "es": "repair",
      "pt": "repair"
    },
    "ex": "修理する",
    "exm": {
      "en": "repair",
      "zh-TW": "修理",
      "zh-CN": "修理",
      "ko": "수리하다",
      "vi": "sửa chữa",
      "id": "memperbaiki",
      "es": "repair",
      "pt": "repair"
    }
  },
  {
    "id": "V0744",
    "w": "こうかん",
    "r": "こうかん",
    "m": {
      "en": "exchange",
      "zh-TW": "交換",
      "zh-CN": "交换",
      "ko": "교환",
      "vi": "trao đổi",
      "id": "pertukaran",
      "es": "exchange",
      "pt": "exchange"
    },
    "ex": "交換する",
    "exm": {
      "en": "exchange",
      "zh-TW": "交換",
      "zh-CN": "交换",
      "ko": "교환하다",
      "vi": "trao đổi",
      "id": "menukar",
      "es": "exchange",
      "pt": "exchange"
    }
  },
  {
    "id": "V0745",
    "w": "へんぴん",
    "r": "へんぴん",
    "m": {
      "en": "return item",
      "zh-TW": "退貨",
      "zh-CN": "退货",
      "ko": "반품",
      "vi": "trả hàng",
      "id": "pengembalian",
      "es": "return item",
      "pt": "return item"
    },
    "ex": "返品する",
    "exm": {
      "en": "return item",
      "zh-TW": "退貨",
      "zh-CN": "退货",
      "ko": "반품하다",
      "vi": "trả hàng",
      "id": "mengembalikan barang",
      "es": "return item",
      "pt": "return item"
    }
  },
  {
    "id": "V0746",
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
    "ex": "配達する",
    "exm": {
      "en": "deliver",
      "zh-TW": "配送",
      "zh-CN": "配送",
      "ko": "배달하다",
      "vi": "giao hàng",
      "id": "mengirim",
      "es": "deliver",
      "pt": "deliver"
    }
  },
  {
    "id": "V0747",
    "w": "はっそう",
    "r": "はっそう",
    "m": {
      "en": "ship",
      "zh-TW": "船",
      "zh-CN": "船",
      "ko": "배",
      "vi": "Tàu",
      "id": "Kapal",
      "es": "ship",
      "pt": "ship"
    },
    "ex": "発送する",
    "exm": {
      "en": "ship",
      "zh-TW": "發貨",
      "zh-CN": "发货",
      "ko": "발송하다",
      "vi": "gửi đi",
      "id": "mengirim",
      "es": "ship",
      "pt": "ship"
    }
  },
  {
    "id": "V0748",
    "w": "とうちゃく",
    "r": "とうちゃく",
    "m": {
      "en": "arrival",
      "zh-TW": "到達",
      "zh-CN": "到达",
      "ko": "도착",
      "vi": "đến nơi",
      "id": "kedatangan",
      "es": "arrival",
      "pt": "arrival"
    },
    "ex": "到着する",
    "exm": {
      "en": "arrive",
      "zh-TW": "到達",
      "zh-CN": "到达",
      "ko": "도착하다",
      "vi": "đến nơi",
      "id": "tiba",
      "es": "arrive",
      "pt": "arrive"
    }
  },
  {
    "id": "V0749",
    "w": "しゅっぱつ",
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
    "ex": "出発する",
    "exm": {
      "en": "depart",
      "zh-TW": "出發",
      "zh-CN": "出发",
      "ko": "출발하다",
      "vi": "khởi hành",
      "id": "berangkat",
      "es": "depart",
      "pt": "depart"
    }
  },
  {
    "id": "V0750",
    "w": "まいあさ",
    "r": "まいあさ",
    "m": {
      "en": "every morning",
      "zh-TW": "毎朝",
      "zh-CN": "毎朝",
      "ko": "every morning",
      "vi": "every morning",
      "id": "every morning",
      "es": "every morning",
      "pt": "every morning"
    }
  },
  {
    "id": "V0751",
    "w": "まいばん",
    "r": "まいばん",
    "m": {
      "en": "every night",
      "zh-TW": "毎晩",
      "zh-CN": "毎晩",
      "ko": "every night",
      "vi": "every night",
      "id": "every night",
      "es": "every night",
      "pt": "every night"
    }
  },
  {
    "id": "V0752",
    "w": "けさ",
    "r": "けさ",
    "m": {
      "en": "this morning",
      "zh-TW": "今朝",
      "zh-CN": "今朝",
      "ko": "this morning",
      "vi": "this morning",
      "id": "this morning",
      "es": "this morning",
      "pt": "this morning"
    }
  },
  {
    "id": "V0753",
    "w": "こんばん",
    "r": "こんばん",
    "m": {
      "en": "tonight",
      "zh-TW": "今晩",
      "zh-CN": "今晩",
      "ko": "tonight",
      "vi": "tonight",
      "id": "tonight",
      "es": "tonight",
      "pt": "tonight"
    }
  },
  {
    "id": "V0754",
    "w": "あさごはん",
    "r": "あさごはん",
    "m": {
      "en": "breakfast",
      "zh-TW": "朝ご飯",
      "zh-CN": "朝ご飯",
      "ko": "breakfast",
      "vi": "breakfast",
      "id": "breakfast",
      "es": "breakfast",
      "pt": "breakfast"
    }
  },
  {
    "id": "V0755",
    "w": "ひるごはん",
    "r": "ひるごはん",
    "m": {
      "en": "lunch",
      "zh-TW": "昼ご飯",
      "zh-CN": "昼ご飯",
      "ko": "lunch",
      "vi": "lunch",
      "id": "lunch",
      "es": "lunch",
      "pt": "lunch"
    }
  },
  {
    "id": "V0756",
    "w": "ばんごはん",
    "r": "ばんごはん",
    "m": {
      "en": "dinner",
      "zh-TW": "晩ご飯",
      "zh-CN": "晩ご飯",
      "ko": "dinner",
      "vi": "dinner",
      "id": "dinner",
      "es": "dinner",
      "pt": "dinner"
    }
  },
  {
    "id": "V0757",
    "w": "おべんとう",
    "r": "おべんとう",
    "m": {
      "en": "bento",
      "zh-TW": "お弁当",
      "zh-CN": "お弁当",
      "ko": "bento",
      "vi": "bento",
      "id": "bento",
      "es": "bento",
      "pt": "bento"
    }
  },
  {
    "id": "V0758",
    "w": "お水",
    "r": "おみず",
    "m": {
      "en": "water",
      "zh-TW": "お水",
      "zh-CN": "お水",
      "ko": "water",
      "vi": "water",
      "id": "water",
      "es": "water",
      "pt": "water"
    }
  },
  {
    "id": "V0759",
    "w": "おかし",
    "r": "おかし",
    "m": {
      "en": "sweets",
      "zh-TW": "お菓子",
      "zh-CN": "お菓子",
      "ko": "sweets",
      "vi": "sweets",
      "id": "sweets",
      "es": "sweets",
      "pt": "sweets"
    }
  },
  {
    "id": "V0760",
    "w": "おみせ",
    "r": "おみせ",
    "m": {
      "en": "shop",
      "zh-TW": "お店",
      "zh-CN": "お店",
      "ko": "shop",
      "vi": "shop",
      "id": "shop",
      "es": "shop",
      "pt": "shop"
    }
  },
  {
    "id": "V0761",
    "w": "ちかてつ",
    "r": "ちかてつ",
    "m": {
      "en": "subway",
      "zh-TW": "地下鉄",
      "zh-CN": "地下鉄",
      "ko": "subway",
      "vi": "subway",
      "id": "subway",
      "es": "subway",
      "pt": "subway"
    }
  },
  {
    "id": "V0762",
    "w": "バスてい",
    "r": "バスてい",
    "m": {
      "en": "bus stop",
      "zh-TW": "バス停",
      "zh-CN": "バス停",
      "ko": "bus stop",
      "vi": "bus stop",
      "id": "bus stop",
      "es": "bus stop",
      "pt": "bus stop"
    }
  },
  {
    "id": "V0763",
    "w": "かいだん",
    "r": "かいだん",
    "m": {
      "en": "stairs",
      "zh-TW": "階段",
      "zh-CN": "階段",
      "ko": "stairs",
      "vi": "stairs",
      "id": "stairs",
      "es": "stairs",
      "pt": "stairs"
    }
  },
  {
    "id": "V0764",
    "w": "エレベーター",
    "r": "エレベーター",
    "m": {
      "en": "elevator",
      "zh-TW": "エレベーター",
      "zh-CN": "エレベーター",
      "ko": "elevator",
      "vi": "elevator",
      "id": "elevator",
      "es": "elevator",
      "pt": "elevator"
    }
  },
  {
    "id": "V0765",
    "w": "ろうか",
    "r": "ろうか",
    "m": {
      "en": "hallway",
      "zh-TW": "廊下",
      "zh-CN": "廊下",
      "ko": "hallway",
      "vi": "hallway",
      "id": "hallway",
      "es": "hallway",
      "pt": "hallway"
    }
  },
  {
    "id": "V0766",
    "w": "やね",
    "r": "やね",
    "m": {
      "en": "roof",
      "zh-TW": "屋根",
      "zh-CN": "屋根",
      "ko": "roof",
      "vi": "roof",
      "id": "roof",
      "es": "roof",
      "pt": "roof"
    }
  },
  {
    "id": "V0767",
    "w": "かべ",
    "r": "かべ",
    "m": {
      "en": "wall",
      "zh-TW": "壁",
      "zh-CN": "壁",
      "ko": "wall",
      "vi": "wall",
      "id": "wall",
      "es": "wall",
      "pt": "wall"
    }
  },
  {
    "id": "V0768",
    "w": "ゆか",
    "r": "ゆか",
    "m": {
      "en": "floor",
      "zh-TW": "床",
      "zh-CN": "床",
      "ko": "floor",
      "vi": "floor",
      "id": "floor",
      "es": "floor",
      "pt": "floor"
    }
  },
  {
    "id": "V0769",
    "w": "てんじょう",
    "r": "てんじょう",
    "m": {
      "en": "ceiling",
      "zh-TW": "天井",
      "zh-CN": "天井",
      "ko": "ceiling",
      "vi": "ceiling",
      "id": "ceiling",
      "es": "ceiling",
      "pt": "ceiling"
    }
  },
  {
    "id": "V0770",
    "w": "いま",
    "r": "いま",
    "m": {
      "en": "living room",
      "zh-TW": "居間",
      "zh-CN": "居間",
      "ko": "living room",
      "vi": "living room",
      "id": "living room",
      "es": "living room",
      "pt": "living room"
    }
  },
  {
    "id": "V0771",
    "w": "しんしつ",
    "r": "しんしつ",
    "m": {
      "en": "bedroom",
      "zh-TW": "寝室",
      "zh-CN": "寝室",
      "ko": "bedroom",
      "vi": "bedroom",
      "id": "bedroom",
      "es": "bedroom",
      "pt": "bedroom"
    }
  },
  {
    "id": "V0772",
    "w": "よくしつ",
    "r": "よくしつ",
    "m": {
      "en": "bathroom",
      "zh-TW": "浴室",
      "zh-CN": "浴室",
      "ko": "bathroom",
      "vi": "bathroom",
      "id": "bathroom",
      "es": "bathroom",
      "pt": "bathroom"
    }
  },
  {
    "id": "V0773",
    "w": "ベランダ",
    "r": "ベランダ",
    "m": {
      "en": "balcony",
      "zh-TW": "ベランダ",
      "zh-CN": "ベランダ",
      "ko": "balcony",
      "vi": "balcony",
      "id": "balcony",
      "es": "balcony",
      "pt": "balcony"
    }
  },
  {
    "id": "V0774",
    "w": "ちゅうしゃじょう",
    "r": "ちゅうしゃじょう",
    "m": {
      "en": "parking lot",
      "zh-TW": "駐車場",
      "zh-CN": "駐車場",
      "ko": "parking lot",
      "vi": "parking lot",
      "id": "parking lot",
      "es": "parking lot",
      "pt": "parking lot"
    }
  },
  {
    "id": "V0775",
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
    }
  },
  {
    "id": "V0776",
    "w": "ほどう",
    "r": "ほどう",
    "m": {
      "en": "sidewalk",
      "zh-TW": "歩道",
      "zh-CN": "歩道",
      "ko": "sidewalk",
      "vi": "sidewalk",
      "id": "sidewalk",
      "es": "sidewalk",
      "pt": "sidewalk"
    }
  },
  {
    "id": "V0777",
    "w": "カフェ",
    "r": "カフェ",
    "m": {
      "en": "cafe",
      "zh-TW": "カフェ",
      "zh-CN": "カフェ",
      "ko": "cafe",
      "vi": "cafe",
      "id": "cafe",
      "es": "cafe",
      "pt": "cafe"
    }
  },
  {
    "id": "V0778",
    "w": "みなと",
    "r": "みなと",
    "m": {
      "en": "port",
      "zh-TW": "港",
      "zh-CN": "港",
      "ko": "port",
      "vi": "port",
      "id": "port",
      "es": "port",
      "pt": "port"
    }
  },
  {
    "id": "V0779",
    "w": "テーブル",
    "r": "テーブル",
    "m": {
      "en": "table",
      "zh-TW": "テーブル",
      "zh-CN": "テーブル",
      "ko": "table",
      "vi": "table",
      "id": "table",
      "es": "table",
      "pt": "table"
    }
  },
  {
    "id": "V0780",
    "w": "ソファ",
    "r": "ソファ",
    "m": {
      "en": "sofa",
      "zh-TW": "ソファ",
      "zh-CN": "ソファ",
      "ko": "sofa",
      "vi": "sofa",
      "id": "sofa",
      "es": "sofa",
      "pt": "sofa"
    }
  },
  {
    "id": "V0781",
    "w": "ほんだな",
    "r": "ほんだな",
    "m": {
      "en": "bookshelf",
      "zh-TW": "本棚",
      "zh-CN": "本棚",
      "ko": "bookshelf",
      "vi": "bookshelf",
      "id": "bookshelf",
      "es": "bookshelf",
      "pt": "bookshelf"
    }
  },
  {
    "id": "V0782",
    "w": "そうじき",
    "r": "そうじき",
    "m": {
      "en": "vacuum cleaner",
      "zh-TW": "掃除機",
      "zh-CN": "掃除機",
      "ko": "vacuum cleaner",
      "vi": "vacuum cleaner",
      "id": "vacuum cleaner",
      "es": "vacuum cleaner",
      "pt": "vacuum cleaner"
    }
  },
  {
    "id": "V0783",
    "w": "けいたいでんわ",
    "r": "けいたいでんわ",
    "m": {
      "en": "mobile phone",
      "zh-TW": "携帯電話",
      "zh-CN": "携帯電話",
      "ko": "mobile phone",
      "vi": "mobile phone",
      "id": "mobile phone",
      "es": "mobile phone",
      "pt": "mobile phone"
    }
  },
  {
    "id": "V0784",
    "w": "シャツ",
    "r": "シャツ",
    "m": {
      "en": "shirt",
      "zh-TW": "シャツ",
      "zh-CN": "シャツ",
      "ko": "shirt",
      "vi": "shirt",
      "id": "shirt",
      "es": "shirt",
      "pt": "shirt"
    }
  },
  {
    "id": "V0785",
    "w": "ズボン",
    "r": "ズボン",
    "m": {
      "en": "pants",
      "zh-TW": "ズボン",
      "zh-CN": "ズボン",
      "ko": "pants",
      "vi": "pants",
      "id": "pants",
      "es": "pants",
      "pt": "pants"
    }
  },
  {
    "id": "V0786",
    "w": "スカート",
    "r": "スカート",
    "m": {
      "en": "skirt",
      "zh-TW": "スカート",
      "zh-CN": "スカート",
      "ko": "skirt",
      "vi": "skirt",
      "id": "skirt",
      "es": "skirt",
      "pt": "skirt"
    }
  },
  {
    "id": "V0787",
    "w": "コート",
    "r": "コート",
    "m": {
      "en": "coat",
      "zh-TW": "コート",
      "zh-CN": "コート",
      "ko": "coat",
      "vi": "coat",
      "id": "coat",
      "es": "coat",
      "pt": "coat"
    }
  },
  {
    "id": "V0788",
    "w": "セーター",
    "r": "セーター",
    "m": {
      "en": "sweater",
      "zh-TW": "セーター",
      "zh-CN": "セーター",
      "ko": "sweater",
      "vi": "sweater",
      "id": "sweater",
      "es": "sweater",
      "pt": "sweater"
    }
  },
  {
    "id": "V0789",
    "w": "くつした",
    "r": "くつした",
    "m": {
      "en": "socks",
      "zh-TW": "靴下",
      "zh-CN": "靴下",
      "ko": "socks",
      "vi": "socks",
      "id": "socks",
      "es": "socks",
      "pt": "socks"
    }
  },
  {
    "id": "V0790",
    "w": "てぶくろ",
    "r": "てぶくろ",
    "m": {
      "en": "gloves",
      "zh-TW": "手袋",
      "zh-CN": "手袋",
      "ko": "gloves",
      "vi": "gloves",
      "id": "gloves",
      "es": "gloves",
      "pt": "gloves"
    }
  },
  {
    "id": "V0791",
    "w": "マフラー",
    "r": "マフラー",
    "m": {
      "en": "scarf",
      "zh-TW": "マフラー",
      "zh-CN": "マフラー",
      "ko": "scarf",
      "vi": "scarf",
      "id": "scarf",
      "es": "scarf",
      "pt": "scarf"
    }
  },
  {
    "id": "V0792",
    "w": "ネクタイ",
    "r": "ネクタイ",
    "m": {
      "en": "necktie",
      "zh-TW": "ネクタイ",
      "zh-CN": "ネクタイ",
      "ko": "necktie",
      "vi": "necktie",
      "id": "necktie",
      "es": "necktie",
      "pt": "necktie"
    }
  },
  {
    "id": "V0793",
    "w": "かばん",
    "r": "かばん",
    "m": {
      "en": "bag",
      "zh-TW": "鞄",
      "zh-CN": "鞄",
      "ko": "bag",
      "vi": "bag",
      "id": "bag",
      "es": "bag",
      "pt": "bag"
    }
  },
  {
    "id": "V0794",
    "w": "リュック",
    "r": "リュック",
    "m": {
      "en": "backpack",
      "zh-TW": "リュック",
      "zh-CN": "リュック",
      "ko": "backpack",
      "vi": "backpack",
      "id": "backpack",
      "es": "backpack",
      "pt": "backpack"
    }
  },
  {
    "id": "V0795",
    "w": "ポケット",
    "r": "ポケット",
    "m": {
      "en": "pocket",
      "zh-TW": "ポケット",
      "zh-CN": "ポケット",
      "ko": "pocket",
      "vi": "pocket",
      "id": "pocket",
      "es": "pocket",
      "pt": "pocket"
    }
  },
  {
    "id": "V0796",
    "w": "ボタン",
    "r": "ボタン",
    "m": {
      "en": "button",
      "zh-TW": "ボタン",
      "zh-CN": "ボタン",
      "ko": "button",
      "vi": "button",
      "id": "button",
      "es": "button",
      "pt": "button"
    }
  },
  {
    "id": "V0797",
    "w": "せっけん",
    "r": "せっけん",
    "m": {
      "en": "soap",
      "zh-TW": "石鹸",
      "zh-CN": "石鹸",
      "ko": "soap",
      "vi": "soap",
      "id": "soap",
      "es": "soap",
      "pt": "soap"
    }
  },
  {
    "id": "V0798",
    "w": "タオル",
    "r": "タオル",
    "m": {
      "en": "towel",
      "zh-TW": "タオル",
      "zh-CN": "タオル",
      "ko": "towel",
      "vi": "towel",
      "id": "towel",
      "es": "towel",
      "pt": "towel"
    }
  },
  {
    "id": "V0799",
    "w": "はブラシ",
    "r": "はブラシ",
    "m": {
      "en": "toothbrush",
      "zh-TW": "歯ブラシ",
      "zh-CN": "歯ブラシ",
      "ko": "toothbrush",
      "vi": "toothbrush",
      "id": "toothbrush",
      "es": "toothbrush",
      "pt": "toothbrush"
    }
  },
  {
    "id": "V0800",
    "w": "はみがきこ",
    "r": "はみがきこ",
    "m": {
      "en": "toothpaste",
      "zh-TW": "歯磨き粉",
      "zh-CN": "歯磨き粉",
      "ko": "toothpaste",
      "vi": "toothpaste",
      "id": "toothpaste",
      "es": "toothpaste",
      "pt": "toothpaste"
    }
  }
];