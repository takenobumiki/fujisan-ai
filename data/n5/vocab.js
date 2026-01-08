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
      "id": "Makan"
    },
    "ex": "ご飯を食べる",
    "exm": {
      "en": "eat rice",
      "zh-TW": "吃飯",
      "zh-CN": "吃饭",
      "ko": "[eat rice]",
      "vi": "[eat rice]",
      "id": "[eat rice]"
    }
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
      "id": "Minum"
    },
    "ex": "水を飲む",
    "exm": {
      "en": "drink water",
      "zh-TW": "喝水",
      "zh-CN": "喝水",
      "ko": "[drink water]",
      "vi": "[drink water]",
      "id": "[drink water]"
    }
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
      "id": "melihat"
    },
    "ex": "テレビを見る",
    "exm": {
      "en": "watch TV",
      "zh-TW": "看電視",
      "zh-CN": "看电视",
      "ko": "[watch TV]",
      "vi": "[watch TV]",
      "id": "[watch TV]"
    }
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
      "id": "mendengar"
    },
    "ex": "音楽を聞く",
    "exm": {
      "en": "listen to music",
      "zh-TW": "聽音樂",
      "zh-CN": "听音乐",
      "ko": "[listen to music]",
      "vi": "[listen to music]",
      "id": "[listen to music]"
    }
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
      "id": "Membaca"
    },
    "ex": "本を読む",
    "exm": {
      "en": "read a book",
      "zh-TW": "讀書",
      "zh-CN": "读书",
      "ko": "[read a book]",
      "vi": "[read a book]",
      "id": "[read a book]"
    }
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
      "id": "Menulis"
    },
    "ex": "手紙を書く",
    "exm": {
      "en": "write a letter",
      "zh-TW": "寫信",
      "zh-CN": "写信",
      "ko": "[write a letter]",
      "vi": "[write a letter]",
      "id": "[write a letter]"
    }
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
      "id": "Berbicara"
    },
    "ex": "日本語を話す",
    "exm": {
      "en": "speak Japanese",
      "zh-TW": "說日語",
      "zh-CN": "说日语",
      "ko": "[speak Japanese]",
      "vi": "[speak Japanese]",
      "id": "[speak Japanese]"
    }
  },
  {
    "id": "V0008",
    "w": "言う",
    "r": "いう",
    "m": {
      "en": "to say",
      "zh-TW": "說",
      "zh-CN": "说",
      "ko": "[to say]",
      "vi": "[to say]",
      "id": "[to say]"
    },
    "ex": "名前を言う",
    "exm": {
      "en": "say name",
      "zh-TW": "說名字",
      "zh-CN": "说名字",
      "ko": "[say name]",
      "vi": "[say name]",
      "id": "[say name]"
    }
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
      "id": "Pergi"
    },
    "ex": "学校に行く",
    "exm": {
      "en": "go to school",
      "zh-TW": "去學校",
      "zh-CN": "去学校",
      "ko": "[go to school]",
      "vi": "[go to school]",
      "id": "[go to school]"
    }
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
      "id": "Datang"
    },
    "ex": "友達が来る",
    "exm": {
      "en": "friend comes",
      "zh-TW": "朋友來",
      "zh-CN": "朋友来",
      "ko": "[friend comes]",
      "vi": "[friend comes]",
      "id": "[friend comes]"
    }
  },
  {
    "id": "V0011",
    "w": "帰る",
    "r": "かえる",
    "m": {
      "en": "to return",
      "zh-TW": "回來",
      "zh-CN": "回来",
      "ko": "돌아오다",
      "vi": "Trở về",
      "id": "Kembali"
    },
    "ex": "家に帰る",
    "exm": {
      "en": "go home",
      "zh-TW": "回家",
      "zh-CN": "回家",
      "ko": "[go home]",
      "vi": "[go home]",
      "id": "[go home]"
    }
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
      "id": "Masuk"
    },
    "ex": "部屋に入る",
    "exm": {
      "en": "enter room",
      "zh-TW": "進房間",
      "zh-CN": "进房间",
      "ko": "[enter room]",
      "vi": "[enter room]",
      "id": "[enter room]"
    }
  },
  {
    "id": "V0013",
    "w": "出る",
    "r": "でる",
    "m": {
      "en": "to exit/leave",
      "zh-TW": "出去",
      "zh-CN": "出去",
      "ko": "[to exit/leave]",
      "vi": "[to exit/leave]",
      "id": "[to exit/leave]"
    },
    "ex": "外に出る",
    "exm": {
      "en": "go outside",
      "zh-TW": "出去外面",
      "zh-CN": "出去外面",
      "ko": "[go outside]",
      "vi": "[go outside]",
      "id": "[go outside]"
    }
  },
  {
    "id": "V0014",
    "w": "起きる",
    "r": "おきる",
    "m": {
      "en": "to wake up",
      "zh-TW": "起床",
      "zh-CN": "起床",
      "ko": "일어나다",
      "vi": "Thức dậy",
      "id": "Bangun"
    },
    "ex": "朝起きる",
    "exm": {
      "en": "wake up morning",
      "zh-TW": "早上起床",
      "zh-CN": "早上起床",
      "ko": "[wake up morning]",
      "vi": "[wake up morning]",
      "id": "[wake up morning]"
    }
  },
  {
    "id": "V0015",
    "w": "寝る",
    "r": "ねる",
    "m": {
      "en": "to sleep",
      "zh-TW": "睡覺",
      "zh-CN": "睡觉",
      "ko": "자다",
      "vi": "Ngủ",
      "id": "Tidur"
    },
    "ex": "夜寝る",
    "exm": {
      "en": "sleep at night",
      "zh-TW": "晚上睡覺",
      "zh-CN": "晚上睡觉",
      "ko": "[sleep at night]",
      "vi": "[sleep at night]",
      "id": "[sleep at night]"
    }
  },
  {
    "id": "V0016",
    "w": "座る",
    "r": "すわる",
    "m": {
      "en": "to sit",
      "zh-TW": "坐",
      "zh-CN": "坐",
      "ko": "앉다",
      "vi": "Ngồi",
      "id": "Duduk"
    },
    "ex": "椅子に座る",
    "exm": {
      "en": "sit on chair",
      "zh-TW": "坐椅子",
      "zh-CN": "坐椅子",
      "ko": "[sit on chair]",
      "vi": "[sit on chair]",
      "id": "[sit on chair]"
    }
  },
  {
    "id": "V0017",
    "w": "立つ",
    "r": "たつ",
    "m": {
      "en": "to stand",
      "zh-TW": "站",
      "zh-CN": "站",
      "ko": "서다",
      "vi": "Đứng",
      "id": "Berdiri"
    },
    "ex": "ここに立つ",
    "exm": {
      "en": "stand here",
      "zh-TW": "站在這裡",
      "zh-CN": "站在这里",
      "ko": "[stand here]",
      "vi": "[stand here]",
      "id": "[stand here]"
    }
  },
  {
    "id": "V0018",
    "w": "歩く",
    "r": "あるく",
    "m": {
      "en": "to walk",
      "zh-TW": "走路",
      "zh-CN": "走路",
      "ko": "걷다",
      "vi": "Đi bộ",
      "id": "Berjalan"
    },
    "ex": "道を歩く",
    "exm": {
      "en": "walk on road",
      "zh-TW": "走路",
      "zh-CN": "走路",
      "ko": "[walk on road]",
      "vi": "[walk on road]",
      "id": "[walk on road]"
    }
  },
  {
    "id": "V0019",
    "w": "走る",
    "r": "はしる",
    "m": {
      "en": "to run",
      "zh-TW": "跑",
      "zh-CN": "跑",
      "ko": "달리다",
      "vi": "Chạy",
      "id": "Berlari"
    },
    "ex": "公園を走る",
    "exm": {
      "en": "run in park",
      "zh-TW": "在公園跑步",
      "zh-CN": "在公园跑步",
      "ko": "[run in park]",
      "vi": "[run in park]",
      "id": "[run in park]"
    }
  },
  {
    "id": "V0020",
    "w": "泳ぐ",
    "r": "およぐ",
    "m": {
      "en": "to swim",
      "zh-TW": "游泳",
      "zh-CN": "游泳",
      "ko": "[to swim]",
      "vi": "[to swim]",
      "id": "[to swim]"
    },
    "ex": "海で泳ぐ",
    "exm": {
      "en": "swim in sea",
      "zh-TW": "在海游泳",
      "zh-CN": "在海游泳",
      "ko": "[swim in sea]",
      "vi": "[swim in sea]",
      "id": "[swim in sea]"
    }
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
      "id": "Membeli"
    },
    "ex": "本を買う",
    "exm": {
      "en": "buy a book",
      "zh-TW": "買書",
      "zh-CN": "买书",
      "ko": "[buy a book]",
      "vi": "[buy a book]",
      "id": "[buy a book]"
    }
  },
  {
    "id": "V0022",
    "w": "売る",
    "r": "うる",
    "m": {
      "en": "to sell",
      "zh-TW": "賣",
      "zh-CN": "卖",
      "ko": "팔다",
      "vi": "Bán",
      "id": "Menjual"
    },
    "ex": "車を売る",
    "exm": {
      "en": "sell a car",
      "zh-TW": "賣車",
      "zh-CN": "卖车",
      "ko": "[sell a car]",
      "vi": "[sell a car]",
      "id": "[sell a car]"
    }
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
      "id": "Membuat"
    },
    "ex": "料理を作る",
    "exm": {
      "en": "make food",
      "zh-TW": "做菜",
      "zh-CN": "做菜",
      "ko": "[make food]",
      "vi": "[make food]",
      "id": "[make food]"
    }
  },
  {
    "id": "V0024",
    "w": "使う",
    "r": "つかう",
    "m": {
      "en": "to use",
      "zh-TW": "使用",
      "zh-CN": "使用",
      "ko": "사용하다",
      "vi": "Dùng",
      "id": "Menggunakan"
    },
    "ex": "パソコンを使う",
    "exm": {
      "en": "use computer",
      "zh-TW": "用電腦",
      "zh-CN": "用电脑",
      "ko": "[use computer]",
      "vi": "[use computer]",
      "id": "[use computer]"
    }
  },
  {
    "id": "V0025",
    "w": "持つ",
    "r": "もつ",
    "m": {
      "en": "to hold/have",
      "zh-TW": "拿/有",
      "zh-CN": "拿/有",
      "ko": "오래되다",
      "vi": "cũ",
      "id": "lama"
    },
    "ex": "かばんを持つ",
    "exm": {
      "en": "carry bag",
      "zh-TW": "拿包",
      "zh-CN": "拿包",
      "ko": "[carry bag]",
      "vi": "[carry bag]",
      "id": "[carry bag]"
    }
  },
  {
    "id": "V0026",
    "w": "置く",
    "r": "おく",
    "m": {
      "en": "to put/place",
      "zh-TW": "放",
      "zh-CN": "放",
      "ko": "[to put/place]",
      "vi": "[to put/place]",
      "id": "[to put/place]"
    },
    "ex": "本を置く",
    "exm": {
      "en": "put book",
      "zh-TW": "放書",
      "zh-CN": "放书",
      "ko": "[put book]",
      "vi": "[put book]",
      "id": "[put book]"
    }
  },
  {
    "id": "V0027",
    "w": "取る",
    "r": "とる",
    "m": {
      "en": "to take",
      "zh-TW": "拿",
      "zh-CN": "拿",
      "ko": "가지다",
      "vi": "Lấy",
      "id": "Mengambil"
    },
    "ex": "写真を取る",
    "exm": {
      "en": "take photo",
      "zh-TW": "拍照",
      "zh-CN": "拍照",
      "ko": "[take photo]",
      "vi": "[take photo]",
      "id": "[take photo]"
    }
  },
  {
    "id": "V0028",
    "w": "待つ",
    "r": "まつ",
    "m": {
      "en": "to wait",
      "zh-TW": "等待",
      "zh-CN": "等待",
      "ko": "기다리다",
      "vi": "Đợi",
      "id": "Menunggu"
    },
    "ex": "ここで待つ",
    "exm": {
      "en": "wait here",
      "zh-TW": "在這等",
      "zh-CN": "在这等",
      "ko": "[wait here]",
      "vi": "[wait here]",
      "id": "[wait here]"
    }
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
      "id": "Bertemu"
    },
    "ex": "友達に会う",
    "exm": {
      "en": "meet friend",
      "zh-TW": "見朋友",
      "zh-CN": "见朋友",
      "ko": "[meet friend]",
      "vi": "[meet friend]",
      "id": "[meet friend]"
    }
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
      "id": "Mengajar"
    },
    "ex": "英語を教える",
    "exm": {
      "en": "teach English",
      "zh-TW": "教英語",
      "zh-CN": "教英语",
      "ko": "[teach English]",
      "vi": "[teach English]",
      "id": "[teach English]"
    }
  },
  {
    "id": "V0031",
    "w": "習う",
    "r": "ならう",
    "m": {
      "en": "to learn",
      "zh-TW": "學",
      "zh-CN": "学",
      "ko": "배우다",
      "vi": "Học",
      "id": "Belajar"
    },
    "ex": "日本語を習う",
    "exm": {
      "en": "learn Japanese",
      "zh-TW": "學日語",
      "zh-CN": "学日语",
      "ko": "[learn Japanese]",
      "vi": "[learn Japanese]",
      "id": "[learn Japanese]"
    }
  },
  {
    "id": "V0032",
    "w": "勉強する",
    "r": "べんきょうする",
    "m": {
      "en": "to study",
      "zh-TW": "學習",
      "zh-CN": "学习",
      "ko": "공부하다",
      "vi": "Học",
      "id": "Belajar"
    },
    "ex": "毎日勉強する",
    "exm": {
      "en": "study daily",
      "zh-TW": "每天學習",
      "zh-CN": "每天学习",
      "ko": "[study daily]",
      "vi": "[study daily]",
      "id": "[study daily]"
    }
  },
  {
    "id": "V0033",
    "w": "働く",
    "r": "はたらく",
    "m": {
      "en": "to work",
      "zh-TW": "工作",
      "zh-CN": "工作",
      "ko": "일하다",
      "vi": "Làm việc",
      "id": "Bekerja"
    },
    "ex": "会社で働く",
    "exm": {
      "en": "work at company",
      "zh-TW": "在公司工作",
      "zh-CN": "在公司工作",
      "ko": "[work at company]",
      "vi": "[work at company]",
      "id": "[work at company]"
    }
  },
  {
    "id": "V0034",
    "w": "休む",
    "r": "やすむ",
    "m": {
      "en": "to rest",
      "zh-TW": "休息",
      "zh-CN": "休息",
      "ko": "[to rest]",
      "vi": "[to rest]",
      "id": "[to rest]"
    },
    "ex": "少し休む",
    "exm": {
      "en": "rest a little",
      "zh-TW": "休息一下",
      "zh-CN": "休息一下",
      "ko": "[rest a little]",
      "vi": "[rest a little]",
      "id": "[rest a little]"
    }
  },
  {
    "id": "V0035",
    "w": "遊ぶ",
    "r": "あそぶ",
    "m": {
      "en": "to play",
      "zh-TW": "玩",
      "zh-CN": "玩",
      "ko": "놀다",
      "vi": "Chơi",
      "id": "Bermain"
    },
    "ex": "公園で遊ぶ",
    "exm": {
      "en": "play in park",
      "zh-TW": "在公園玩",
      "zh-CN": "在公园玩",
      "ko": "[play in park]",
      "vi": "[play in park]",
      "id": "[play in park]"
    }
  },
  {
    "id": "V0036",
    "w": "歌う",
    "r": "うたう",
    "m": {
      "en": "to sing",
      "zh-TW": "唱歌",
      "zh-CN": "唱歌",
      "ko": "[to sing]",
      "vi": "[to sing]",
      "id": "[to sing]"
    },
    "ex": "歌を歌う",
    "exm": {
      "en": "sing a song",
      "zh-TW": "唱歌",
      "zh-CN": "唱歌",
      "ko": "[sing a song]",
      "vi": "[sing a song]",
      "id": "[sing a song]"
    }
  },
  {
    "id": "V0037",
    "w": "踊る",
    "r": "おどる",
    "m": {
      "en": "to dance",
      "zh-TW": "跳舞",
      "zh-CN": "跳舞",
      "ko": "[to dance]",
      "vi": "[to dance]",
      "id": "[to dance]"
    },
    "ex": "ダンスを踊る",
    "exm": {
      "en": "dance",
      "zh-TW": "跳舞",
      "zh-CN": "跳舞",
      "ko": "[dance]",
      "vi": "[dance]",
      "id": "[dance]"
    }
  },
  {
    "id": "V0038",
    "w": "弾く",
    "r": "ひく",
    "m": {
      "en": "to play (instrument)",
      "zh-TW": "彈奏",
      "zh-CN": "弹奏",
      "ko": "[to play (instrument)]",
      "vi": "[to play (instrument)]",
      "id": "[to play (instrument)]"
    },
    "ex": "ピアノを弾く",
    "exm": {
      "en": "play piano",
      "zh-TW": "彈鋼琴",
      "zh-CN": "弹钢琴",
      "ko": "[play piano]",
      "vi": "[play piano]",
      "id": "[play piano]"
    }
  },
  {
    "id": "V0039",
    "w": "撮る",
    "r": "とる",
    "m": {
      "en": "to take (photo)",
      "zh-TW": "拍",
      "zh-CN": "拍",
      "ko": "덥다",
      "vi": "nóng",
      "id": "panas"
    },
    "ex": "写真を撮る",
    "exm": {
      "en": "take photo",
      "zh-TW": "拍照",
      "zh-CN": "拍照",
      "ko": "[take photo]",
      "vi": "[take photo]",
      "id": "[take photo]"
    }
  },
  {
    "id": "V0040",
    "w": "描く",
    "r": "かく",
    "m": {
      "en": "to draw",
      "zh-TW": "畫",
      "zh-CN": "画",
      "ko": "[to draw]",
      "vi": "[to draw]",
      "id": "[to draw]"
    },
    "ex": "絵を描く",
    "exm": {
      "en": "draw picture",
      "zh-TW": "畫畫",
      "zh-CN": "画画",
      "ko": "[draw picture]",
      "vi": "[draw picture]",
      "id": "[draw picture]"
    }
  },
  {
    "id": "V0041",
    "w": "洗う",
    "r": "あらう",
    "m": {
      "en": "to wash",
      "zh-TW": "洗",
      "zh-CN": "洗",
      "ko": "[to wash]",
      "vi": "[to wash]",
      "id": "[to wash]"
    },
    "ex": "手を洗う",
    "exm": {
      "en": "wash hands",
      "zh-TW": "洗手",
      "zh-CN": "洗手",
      "ko": "[wash hands]",
      "vi": "[wash hands]",
      "id": "[wash hands]"
    }
  },
  {
    "id": "V0042",
    "w": "掃除する",
    "r": "そうじする",
    "m": {
      "en": "to clean",
      "zh-TW": "打掃",
      "zh-CN": "打扫",
      "ko": "[to clean]",
      "vi": "[to clean]",
      "id": "[to clean]"
    },
    "ex": "部屋を掃除する",
    "exm": {
      "en": "clean room",
      "zh-TW": "打掃房間",
      "zh-CN": "打扫房间",
      "ko": "[clean room]",
      "vi": "[clean room]",
      "id": "[clean room]"
    }
  },
  {
    "id": "V0043",
    "w": "料理する",
    "r": "りょうりする",
    "m": {
      "en": "to cook",
      "zh-TW": "做菜",
      "zh-CN": "做菜",
      "ko": "[to cook]",
      "vi": "[to cook]",
      "id": "[to cook]"
    },
    "ex": "夕飯を料理する",
    "exm": {
      "en": "cook dinner",
      "zh-TW": "做晚餐",
      "zh-CN": "做晚餐",
      "ko": "[cook dinner]",
      "vi": "[cook dinner]",
      "id": "[cook dinner]"
    }
  },
  {
    "id": "V0044",
    "w": "切る",
    "r": "きる",
    "m": {
      "en": "to cut",
      "zh-TW": "切",
      "zh-CN": "切",
      "ko": "[to cut]",
      "vi": "[to cut]",
      "id": "[to cut]"
    },
    "ex": "野菜を切る",
    "exm": {
      "en": "cut vegetables",
      "zh-TW": "切菜",
      "zh-CN": "切菜",
      "ko": "[cut vegetables]",
      "vi": "[cut vegetables]",
      "id": "[cut vegetables]"
    }
  },
  {
    "id": "V0045",
    "w": "開ける",
    "r": "あける",
    "m": {
      "en": "to open",
      "zh-TW": "打開",
      "zh-CN": "打开",
      "ko": "열다",
      "vi": "Mở",
      "id": "Membuka"
    },
    "ex": "窓を開ける",
    "exm": {
      "en": "open window",
      "zh-TW": "開窗",
      "zh-CN": "开窗",
      "ko": "[open window]",
      "vi": "[open window]",
      "id": "[open window]"
    }
  },
  {
    "id": "V0046",
    "w": "閉める",
    "r": "しめる",
    "m": {
      "en": "to close",
      "zh-TW": "關閉",
      "zh-CN": "关闭",
      "ko": "닫다",
      "vi": "Đóng",
      "id": "Menutup"
    },
    "ex": "ドアを閉める",
    "exm": {
      "en": "close door",
      "zh-TW": "關門",
      "zh-CN": "关门",
      "ko": "[close door]",
      "vi": "[close door]",
      "id": "[close door]"
    }
  },
  {
    "id": "V0047",
    "w": "つける",
    "r": "つける",
    "m": {
      "en": "to turn on",
      "zh-TW": "開(電器)",
      "zh-CN": "开(电器)",
      "ko": "[to turn on]",
      "vi": "[to turn on]",
      "id": "[to turn on]"
    },
    "ex": "電気をつける",
    "exm": {
      "en": "turn on light",
      "zh-TW": "開燈",
      "zh-CN": "开灯",
      "ko": "[turn on light]",
      "vi": "[turn on light]",
      "id": "[turn on light]"
    }
  },
  {
    "id": "V0048",
    "w": "消す",
    "r": "けす",
    "m": {
      "en": "to turn off",
      "zh-TW": "關(電器)",
      "zh-CN": "关(电器)",
      "ko": "[to turn off]",
      "vi": "[to turn off]",
      "id": "[to turn off]"
    },
    "ex": "電気を消す",
    "exm": {
      "en": "turn off light",
      "zh-TW": "關燈",
      "zh-CN": "关灯",
      "ko": "[turn off light]",
      "vi": "[turn off light]",
      "id": "[turn off light]"
    }
  },
  {
    "id": "V0049",
    "w": "着る",
    "r": "きる",
    "m": {
      "en": "to wear",
      "zh-TW": "穿",
      "zh-CN": "穿",
      "ko": "[to wear]",
      "vi": "[to wear]",
      "id": "[to wear]"
    },
    "ex": "服を着る",
    "exm": {
      "en": "wear clothes",
      "zh-TW": "穿衣服",
      "zh-CN": "穿衣服",
      "ko": "[wear clothes]",
      "vi": "[wear clothes]",
      "id": "[wear clothes]"
    }
  },
  {
    "id": "V0050",
    "w": "脱ぐ",
    "r": "ぬぐ",
    "m": {
      "en": "to take off",
      "zh-TW": "脫",
      "zh-CN": "脱",
      "ko": "[to take off]",
      "vi": "[to take off]",
      "id": "[to take off]"
    },
    "ex": "靴を脱ぐ",
    "exm": {
      "en": "take off shoes",
      "zh-TW": "脫鞋",
      "zh-CN": "脱鞋",
      "ko": "[take off shoes]",
      "vi": "[take off shoes]",
      "id": "[take off shoes]"
    }
  },
  {
    "id": "V0051",
    "w": "履く",
    "r": "はく",
    "m": {
      "en": "to wear (shoes/pants)",
      "zh-TW": "穿(鞋/褲)",
      "zh-CN": "穿(鞋/裤)",
      "ko": "[to wear (shoes/pants)]",
      "vi": "[to wear (shoes/pants)]",
      "id": "[to wear (shoes/pants)]"
    },
    "ex": "靴を履く",
    "exm": {
      "en": "wear shoes",
      "zh-TW": "穿鞋",
      "zh-CN": "穿鞋",
      "ko": "[wear shoes]",
      "vi": "[wear shoes]",
      "id": "[wear shoes]"
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
      "ko": "[to wear (hat)]",
      "vi": "[to wear (hat)]",
      "id": "[to wear (hat)]"
    },
    "ex": "帽子をかぶる",
    "exm": {
      "en": "wear hat",
      "zh-TW": "戴帽子",
      "zh-CN": "戴帽子",
      "ko": "[wear hat]",
      "vi": "[wear hat]",
      "id": "[wear hat]"
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
      "ko": "[to wear (glasses)]",
      "vi": "[to wear (glasses)]",
      "id": "[to wear (glasses)]"
    },
    "ex": "眼鏡をかける",
    "exm": {
      "en": "wear glasses",
      "zh-TW": "戴眼鏡",
      "zh-CN": "戴眼镜",
      "ko": "[wear glasses]",
      "vi": "[wear glasses]",
      "id": "[wear glasses]"
    }
  },
  {
    "id": "V0054",
    "w": "乗る",
    "r": "のる",
    "m": {
      "en": "to ride",
      "zh-TW": "搭乘",
      "zh-CN": "搭乘",
      "ko": "[to ride]",
      "vi": "[to ride]",
      "id": "[to ride]"
    },
    "ex": "電車に乗る",
    "exm": {
      "en": "ride train",
      "zh-TW": "搭電車",
      "zh-CN": "坐电车",
      "ko": "[ride train]",
      "vi": "[ride train]",
      "id": "[ride train]"
    }
  },
  {
    "id": "V0055",
    "w": "降りる",
    "r": "おりる",
    "m": {
      "en": "to get off",
      "zh-TW": "下車",
      "zh-CN": "下车",
      "ko": "[to get off]",
      "vi": "[to get off]",
      "id": "[to get off]"
    },
    "ex": "電車を降りる",
    "exm": {
      "en": "get off train",
      "zh-TW": "下電車",
      "zh-CN": "下电车",
      "ko": "[get off train]",
      "vi": "[get off train]",
      "id": "[get off train]"
    }
  },
  {
    "id": "V0056",
    "w": "運転する",
    "r": "うんてんする",
    "m": {
      "en": "to drive",
      "zh-TW": "開車",
      "zh-CN": "开车",
      "ko": "[to drive]",
      "vi": "[to drive]",
      "id": "[to drive]"
    },
    "ex": "車を運転する",
    "exm": {
      "en": "drive car",
      "zh-TW": "開車",
      "zh-CN": "开车",
      "ko": "[drive car]",
      "vi": "[drive car]",
      "id": "[drive car]"
    }
  },
  {
    "id": "V0057",
    "w": "止まる",
    "r": "とまる",
    "m": {
      "en": "to stop",
      "zh-TW": "停",
      "zh-CN": "停",
      "ko": "[to stop]",
      "vi": "[to stop]",
      "id": "[to stop]"
    },
    "ex": "車が止まる",
    "exm": {
      "en": "car stops",
      "zh-TW": "車停了",
      "zh-CN": "车停了",
      "ko": "[car stops]",
      "vi": "[car stops]",
      "id": "[car stops]"
    }
  },
  {
    "id": "V0058",
    "w": "曲がる",
    "r": "まがる",
    "m": {
      "en": "to turn",
      "zh-TW": "轉彎",
      "zh-CN": "转弯",
      "ko": "[to turn]",
      "vi": "[to turn]",
      "id": "[to turn]"
    },
    "ex": "右に曲がる",
    "exm": {
      "en": "turn right",
      "zh-TW": "向右轉",
      "zh-CN": "向右转",
      "ko": "[turn right]",
      "vi": "[turn right]",
      "id": "[turn right]"
    }
  },
  {
    "id": "V0059",
    "w": "渡る",
    "r": "わたる",
    "m": {
      "en": "to cross",
      "zh-TW": "過(馬路)",
      "zh-CN": "过(马路)",
      "ko": "[to cross]",
      "vi": "[to cross]",
      "id": "[to cross]"
    },
    "ex": "道を渡る",
    "exm": {
      "en": "cross road",
      "zh-TW": "過馬路",
      "zh-CN": "过马路",
      "ko": "[cross road]",
      "vi": "[cross road]",
      "id": "[cross road]"
    }
  },
  {
    "id": "V0060",
    "w": "登る",
    "r": "のぼる",
    "m": {
      "en": "to climb",
      "zh-TW": "爬",
      "zh-CN": "爬",
      "ko": "[to climb]",
      "vi": "[to climb]",
      "id": "[to climb]"
    },
    "ex": "山を登る",
    "exm": {
      "en": "climb mountain",
      "zh-TW": "爬山",
      "zh-CN": "爬山",
      "ko": "[climb mountain]",
      "vi": "[climb mountain]",
      "id": "[climb mountain]"
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
      "id": "Tahu"
    },
    "ex": "名前を知る",
    "exm": {
      "en": "know name",
      "zh-TW": "知道名字",
      "zh-CN": "知道名字",
      "ko": "[know name]",
      "vi": "[know name]",
      "id": "[know name]"
    }
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
      "id": "Mengerti"
    },
    "ex": "意味が分かる",
    "exm": {
      "en": "understand meaning",
      "zh-TW": "明白意思",
      "zh-CN": "明白意思",
      "ko": "[understand meaning]",
      "vi": "[understand meaning]",
      "id": "[understand meaning]"
    }
  },
  {
    "id": "V0063",
    "w": "覚える",
    "r": "おぼえる",
    "m": {
      "en": "to memorize",
      "zh-TW": "記住",
      "zh-CN": "记住",
      "ko": "[to memorize]",
      "vi": "[to memorize]",
      "id": "[to memorize]"
    },
    "ex": "漢字を覚える",
    "exm": {
      "en": "memorize kanji",
      "zh-TW": "記漢字",
      "zh-CN": "记汉字",
      "ko": "[memorize kanji]",
      "vi": "[memorize kanji]",
      "id": "[memorize kanji]"
    }
  },
  {
    "id": "V0064",
    "w": "忘れる",
    "r": "わすれる",
    "m": {
      "en": "to forget",
      "zh-TW": "忘記",
      "zh-CN": "忘记",
      "ko": "[to forget]",
      "vi": "[to forget]",
      "id": "[to forget]"
    },
    "ex": "名前を忘れる",
    "exm": {
      "en": "forget name",
      "zh-TW": "忘記名字",
      "zh-CN": "忘记名字",
      "ko": "[forget name]",
      "vi": "[forget name]",
      "id": "[forget name]"
    }
  },
  {
    "id": "V0065",
    "w": "思う",
    "r": "おもう",
    "m": {
      "en": "to think",
      "zh-TW": "想",
      "zh-CN": "想",
      "ko": "생각하다",
      "vi": "Nghĩ",
      "id": "Berpikir"
    },
    "ex": "そう思う",
    "exm": {
      "en": "think so",
      "zh-TW": "這樣想",
      "zh-CN": "这样想",
      "ko": "[think so]",
      "vi": "[think so]",
      "id": "[think so]"
    }
  },
  {
    "id": "V0066",
    "w": "考える",
    "r": "かんがえる",
    "m": {
      "en": "to consider",
      "zh-TW": "考慮",
      "zh-CN": "考虑",
      "ko": "[to consider]",
      "vi": "[to consider]",
      "id": "[to consider]"
    },
    "ex": "よく考える",
    "exm": {
      "en": "think carefully",
      "zh-TW": "仔細考慮",
      "zh-CN": "仔细考虑",
      "ko": "[think carefully]",
      "vi": "[think carefully]",
      "id": "[think carefully]"
    }
  },
  {
    "id": "V0067",
    "w": "決める",
    "r": "きめる",
    "m": {
      "en": "to decide",
      "zh-TW": "決定",
      "zh-CN": "决定",
      "ko": "[to decide]",
      "vi": "[to decide]",
      "id": "[to decide]"
    },
    "ex": "予定を決める",
    "exm": {
      "en": "decide schedule",
      "zh-TW": "決定行程",
      "zh-CN": "决定行程",
      "ko": "[decide schedule]",
      "vi": "[decide schedule]",
      "id": "[decide schedule]"
    }
  },
  {
    "id": "V0068",
    "w": "信じる",
    "r": "しんじる",
    "m": {
      "en": "to believe",
      "zh-TW": "相信",
      "zh-CN": "相信",
      "ko": "[to believe]",
      "vi": "[to believe]",
      "id": "[to believe]"
    },
    "ex": "友達を信じる",
    "exm": {
      "en": "believe friend",
      "zh-TW": "相信朋友",
      "zh-CN": "相信朋友",
      "ko": "[believe friend]",
      "vi": "[believe friend]",
      "id": "[believe friend]"
    }
  },
  {
    "id": "V0069",
    "w": "探す",
    "r": "さがす",
    "m": {
      "en": "to search",
      "zh-TW": "找",
      "zh-CN": "找",
      "ko": "[to search]",
      "vi": "[to search]",
      "id": "[to search]"
    },
    "ex": "鍵を探す",
    "exm": {
      "en": "search for key",
      "zh-TW": "找鑰匙",
      "zh-CN": "找钥匙",
      "ko": "[search for key]",
      "vi": "[search for key]",
      "id": "[search for key]"
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
      "ko": "[to find]",
      "vi": "[to find]",
      "id": "[to find]"
    },
    "ex": "財布を見つける",
    "exm": {
      "en": "find wallet",
      "zh-TW": "找到錢包",
      "zh-CN": "找到钱包",
      "ko": "[find wallet]",
      "vi": "[find wallet]",
      "id": "[find wallet]"
    }
  },
  {
    "id": "V0071",
    "w": "始める",
    "r": "はじめる",
    "m": {
      "en": "to begin",
      "zh-TW": "開始",
      "zh-CN": "开始",
      "ko": "시작하다",
      "vi": "Bắt đầu",
      "id": "Mulai"
    },
    "ex": "仕事を始める",
    "exm": {
      "en": "start work",
      "zh-TW": "開始工作",
      "zh-CN": "开始工作",
      "ko": "[start work]",
      "vi": "[start work]",
      "id": "[start work]"
    }
  },
  {
    "id": "V0072",
    "w": "終わる",
    "r": "おわる",
    "m": {
      "en": "to end",
      "zh-TW": "結束",
      "zh-CN": "结束",
      "ko": "끝나다",
      "vi": "Kết thúc",
      "id": "Selesai"
    },
    "ex": "授業が終わる",
    "exm": {
      "en": "class ends",
      "zh-TW": "下課",
      "zh-CN": "下课",
      "ko": "[class ends]",
      "vi": "[class ends]",
      "id": "[class ends]"
    }
  },
  {
    "id": "V0073",
    "w": "続ける",
    "r": "つづける",
    "m": {
      "en": "to continue",
      "zh-TW": "繼續",
      "zh-CN": "继续",
      "ko": "[to continue]",
      "vi": "[to continue]",
      "id": "[to continue]"
    },
    "ex": "勉強を続ける",
    "exm": {
      "en": "continue study",
      "zh-TW": "繼續學習",
      "zh-CN": "继续学习",
      "ko": "[continue study]",
      "vi": "[continue study]",
      "id": "[continue study]"
    }
  },
  {
    "id": "V0074",
    "w": "止める",
    "r": "やめる",
    "m": {
      "en": "to stop/quit",
      "zh-TW": "停止",
      "zh-CN": "停止",
      "ko": "[to stop/quit]",
      "vi": "[to stop/quit]",
      "id": "[to stop/quit]"
    },
    "ex": "仕事を止める",
    "exm": {
      "en": "quit job",
      "zh-TW": "辭職",
      "zh-CN": "辞职",
      "ko": "[quit job]",
      "vi": "[quit job]",
      "id": "[quit job]"
    }
  },
  {
    "id": "V0075",
    "w": "変える",
    "r": "かえる",
    "m": {
      "en": "to change",
      "zh-TW": "改變",
      "zh-CN": "改变",
      "ko": "[to change]",
      "vi": "[to change]",
      "id": "[to change]"
    },
    "ex": "予定を変える",
    "exm": {
      "en": "change schedule",
      "zh-TW": "改變計劃",
      "zh-CN": "改变计划",
      "ko": "[change schedule]",
      "vi": "[change schedule]",
      "id": "[change schedule]"
    }
  },
  {
    "id": "V0076",
    "w": "変わる",
    "r": "かわる",
    "m": {
      "en": "to be changed",
      "zh-TW": "變化",
      "zh-CN": "变化",
      "ko": "[to be changed]",
      "vi": "[to be changed]",
      "id": "[to be changed]"
    },
    "ex": "天気が変わる",
    "exm": {
      "en": "weather changes",
      "zh-TW": "天氣變化",
      "zh-CN": "天气变化",
      "ko": "[weather changes]",
      "vi": "[weather changes]",
      "id": "[weather changes]"
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
      "ko": "[to exist (inanimate)]",
      "vi": "[to exist (inanimate)]",
      "id": "[to exist (inanimate)]"
    },
    "ex": "本がある",
    "exm": {
      "en": "there is a book",
      "zh-TW": "有書",
      "zh-CN": "有书",
      "ko": "[there is a book]",
      "vi": "[there is a book]",
      "id": "[there is a book]"
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
      "ko": "[to exist (animate)]",
      "vi": "[to exist (animate)]",
      "id": "[to exist (animate)]"
    },
    "ex": "猫がいる",
    "exm": {
      "en": "there is a cat",
      "zh-TW": "有貓",
      "zh-CN": "有猫",
      "ko": "[there is a cat]",
      "vi": "[there is a cat]",
      "id": "[there is a cat]"
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
      "ko": "[to become]",
      "vi": "[to become]",
      "id": "[to become]"
    },
    "ex": "医者になる",
    "exm": {
      "en": "become doctor",
      "zh-TW": "成為醫生",
      "zh-CN": "成为医生",
      "ko": "[become doctor]",
      "vi": "[become doctor]",
      "id": "[become doctor]"
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
      "ko": "[can do]",
      "vi": "[can do]",
      "id": "[can do]"
    },
    "ex": "日本語ができる",
    "exm": {
      "en": "can speak Japanese",
      "zh-TW": "會日語",
      "zh-CN": "会日语",
      "ko": "[can speak Japanese]",
      "vi": "[can speak Japanese]",
      "id": "[can speak Japanese]"
    }
  },
  {
    "id": "V0081",
    "w": "要る",
    "r": "いる",
    "m": {
      "en": "to need",
      "zh-TW": "需要",
      "zh-CN": "需要",
      "ko": "필요하다",
      "vi": "Cần",
      "id": "Butuh"
    },
    "ex": "お金が要る",
    "exm": {
      "en": "need money",
      "zh-TW": "需要錢",
      "zh-CN": "需要钱",
      "ko": "[need money]",
      "vi": "[need money]",
      "id": "[need money]"
    }
  },
  {
    "id": "V0082",
    "w": "欲しい",
    "r": "ほしい",
    "m": {
      "en": "to want",
      "zh-TW": "想要",
      "zh-CN": "想要",
      "ko": "원하다",
      "vi": "Muốn",
      "id": "Ingin"
    },
    "ex": "車が欲しい",
    "exm": {
      "en": "want a car",
      "zh-TW": "想要車",
      "zh-CN": "想要车",
      "ko": "[want a car]",
      "vi": "[want a car]",
      "id": "[want a car]"
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
      "id": "Memberi"
    },
    "ex": "プレゼントをあげる",
    "exm": {
      "en": "give present",
      "zh-TW": "送禮物",
      "zh-CN": "送礼物",
      "ko": "[give present]",
      "vi": "[give present]",
      "id": "[give present]"
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
      "id": "Menerima"
    },
    "ex": "手紙をもらう",
    "exm": {
      "en": "receive letter",
      "zh-TW": "收到信",
      "zh-CN": "收到信",
      "ko": "[receive letter]",
      "vi": "[receive letter]",
      "id": "[receive letter]"
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
      "ko": "[to give (to me)]",
      "vi": "[to give (to me)]",
      "id": "[to give (to me)]"
    },
    "ex": "本をくれる",
    "exm": {
      "en": "give me book",
      "zh-TW": "給我書",
      "zh-CN": "给我书",
      "ko": "[give me book]",
      "vi": "[give me book]",
      "id": "[give me book]"
    }
  },
  {
    "id": "V0086",
    "w": "貸す",
    "r": "かす",
    "m": {
      "en": "to lend",
      "zh-TW": "借(出)",
      "zh-CN": "借(出)",
      "ko": "[to lend]",
      "vi": "[to lend]",
      "id": "[to lend]"
    },
    "ex": "本を貸す",
    "exm": {
      "en": "lend book",
      "zh-TW": "借書給人",
      "zh-CN": "借书给人",
      "ko": "[lend book]",
      "vi": "[lend book]",
      "id": "[lend book]"
    }
  },
  {
    "id": "V0087",
    "w": "借りる",
    "r": "かりる",
    "m": {
      "en": "to borrow",
      "zh-TW": "借(入)",
      "zh-CN": "借(入)",
      "ko": "[to borrow]",
      "vi": "[to borrow]",
      "id": "[to borrow]"
    },
    "ex": "本を借りる",
    "exm": {
      "en": "borrow book",
      "zh-TW": "向人借書",
      "zh-CN": "向人借书",
      "ko": "[borrow book]",
      "vi": "[borrow book]",
      "id": "[borrow book]"
    }
  },
  {
    "id": "V0088",
    "w": "返す",
    "r": "かえす",
    "m": {
      "en": "to return",
      "zh-TW": "回來",
      "zh-CN": "回来",
      "ko": "돌아오다",
      "vi": "Trở về",
      "id": "Kembali"
    },
    "ex": "本を返す",
    "exm": {
      "en": "return book",
      "zh-TW": "還書",
      "zh-CN": "还书",
      "ko": "[return book]",
      "vi": "[return book]",
      "id": "[return book]"
    }
  },
  {
    "id": "V0089",
    "w": "払う",
    "r": "はらう",
    "m": {
      "en": "to pay",
      "zh-TW": "付",
      "zh-CN": "付",
      "ko": "[to pay]",
      "vi": "[to pay]",
      "id": "[to pay]"
    },
    "ex": "お金を払う",
    "exm": {
      "en": "pay money",
      "zh-TW": "付錢",
      "zh-CN": "付钱",
      "ko": "[pay money]",
      "vi": "[pay money]",
      "id": "[pay money]"
    }
  },
  {
    "id": "V0090",
    "w": "送る",
    "r": "おくる",
    "m": {
      "en": "to send",
      "zh-TW": "送",
      "zh-CN": "送",
      "ko": "보내다",
      "vi": "Gửi",
      "id": "Mengirim"
    },
    "ex": "手紙を送る",
    "exm": {
      "en": "send letter",
      "zh-TW": "寄信",
      "zh-CN": "寄信",
      "ko": "[send letter]",
      "vi": "[send letter]",
      "id": "[send letter]"
    }
  },
  {
    "id": "V0091",
    "w": "届ける",
    "r": "とどける",
    "m": {
      "en": "to deliver",
      "zh-TW": "送達",
      "zh-CN": "送达",
      "ko": "[to deliver]",
      "vi": "[to deliver]",
      "id": "[to deliver]"
    },
    "ex": "荷物を届ける",
    "exm": {
      "en": "deliver package",
      "zh-TW": "送貨",
      "zh-CN": "送货",
      "ko": "[deliver package]",
      "vi": "[deliver package]",
      "id": "[deliver package]"
    }
  },
  {
    "id": "V0092",
    "w": "届く",
    "r": "とどく",
    "m": {
      "en": "to arrive",
      "zh-TW": "到達",
      "zh-CN": "到达",
      "ko": "[to arrive]",
      "vi": "[to arrive]",
      "id": "[to arrive]"
    },
    "ex": "手紙が届く",
    "exm": {
      "en": "letter arrives",
      "zh-TW": "信到了",
      "zh-CN": "信到了",
      "ko": "[letter arrives]",
      "vi": "[letter arrives]",
      "id": "[letter arrives]"
    }
  },
  {
    "id": "V0093",
    "w": "預ける",
    "r": "あずける",
    "m": {
      "en": "to deposit",
      "zh-TW": "寄存",
      "zh-CN": "寄存",
      "ko": "[to deposit]",
      "vi": "[to deposit]",
      "id": "[to deposit]"
    },
    "ex": "荷物を預ける",
    "exm": {
      "en": "deposit luggage",
      "zh-TW": "寄放行李",
      "zh-CN": "寄放行李",
      "ko": "[deposit luggage]",
      "vi": "[deposit luggage]",
      "id": "[deposit luggage]"
    }
  },
  {
    "id": "V0094",
    "w": "受け取る",
    "r": "うけとる",
    "m": {
      "en": "to receive",
      "zh-TW": "收到",
      "zh-CN": "收到",
      "ko": "받다",
      "vi": "Nhận",
      "id": "Menerima"
    },
    "ex": "荷物を受け取る",
    "exm": {
      "en": "receive package",
      "zh-TW": "領取包裹",
      "zh-CN": "领取包裹",
      "ko": "[receive package]",
      "vi": "[receive package]",
      "id": "[receive package]"
    }
  },
  {
    "id": "V0095",
    "w": "落とす",
    "r": "おとす",
    "m": {
      "en": "to drop",
      "zh-TW": "掉落",
      "zh-CN": "掉落",
      "ko": "[to drop]",
      "vi": "[to drop]",
      "id": "[to drop]"
    },
    "ex": "財布を落とす",
    "exm": {
      "en": "drop wallet",
      "zh-TW": "掉錢包",
      "zh-CN": "掉钱包",
      "ko": "[drop wallet]",
      "vi": "[drop wallet]",
      "id": "[drop wallet]"
    }
  },
  {
    "id": "V0096",
    "w": "拾う",
    "r": "ひろう",
    "m": {
      "en": "to pick up",
      "zh-TW": "撿",
      "zh-CN": "捡",
      "ko": "[to pick up]",
      "vi": "[to pick up]",
      "id": "[to pick up]"
    },
    "ex": "ゴミを拾う",
    "exm": {
      "en": "pick up trash",
      "zh-TW": "撿垃圾",
      "zh-CN": "捡垃圾",
      "ko": "[pick up trash]",
      "vi": "[pick up trash]",
      "id": "[pick up trash]"
    }
  },
  {
    "id": "V0097",
    "w": "直す",
    "r": "なおす",
    "m": {
      "en": "to fix",
      "zh-TW": "修理",
      "zh-CN": "修理",
      "ko": "[to fix]",
      "vi": "[to fix]",
      "id": "[to fix]"
    },
    "ex": "車を直す",
    "exm": {
      "en": "fix car",
      "zh-TW": "修車",
      "zh-CN": "修车",
      "ko": "[fix car]",
      "vi": "[fix car]",
      "id": "[fix car]"
    }
  },
  {
    "id": "V0098",
    "w": "壊す",
    "r": "こわす",
    "m": {
      "en": "to break",
      "zh-TW": "弄壞",
      "zh-CN": "弄坏",
      "ko": "[to break]",
      "vi": "[to break]",
      "id": "[to break]"
    },
    "ex": "パソコンを壊す",
    "exm": {
      "en": "break computer",
      "zh-TW": "弄壞電腦",
      "zh-CN": "弄坏电脑",
      "ko": "[break computer]",
      "vi": "[break computer]",
      "id": "[break computer]"
    }
  },
  {
    "id": "V0099",
    "w": "壊れる",
    "r": "こわれる",
    "m": {
      "en": "to be broken",
      "zh-TW": "壞掉",
      "zh-CN": "坏掉",
      "ko": "[to be broken]",
      "vi": "[to be broken]",
      "id": "[to be broken]"
    },
    "ex": "時計が壊れる",
    "exm": {
      "en": "watch breaks",
      "zh-TW": "手錶壞了",
      "zh-CN": "手表坏了",
      "ko": "[watch breaks]",
      "vi": "[watch breaks]",
      "id": "[watch breaks]"
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
      "id": "Melakukan"
    },
    "ex": "運動をする",
    "exm": {
      "en": "exercise",
      "zh-TW": "運動",
      "zh-CN": "运动",
      "ko": "[exercise]",
      "vi": "[exercise]",
      "id": "[exercise]"
    }
  },
  {
    "id": "V0101",
    "w": "好き",
    "r": "すき",
    "m": {
      "en": "to like",
      "zh-TW": "喜歡",
      "zh-CN": "喜欢",
      "ko": "좋아하다",
      "vi": "Thích",
      "id": "Suka"
    },
    "ex": "寿司が好き",
    "exm": {
      "en": "like sushi",
      "zh-TW": "喜歡壽司",
      "zh-CN": "喜欢寿司",
      "ko": "[like sushi]",
      "vi": "[like sushi]",
      "id": "[like sushi]"
    }
  },
  {
    "id": "V0102",
    "w": "嫌い",
    "r": "きらい",
    "m": {
      "en": "to dislike",
      "zh-TW": "討厭",
      "zh-CN": "讨厌",
      "ko": "[to dislike]",
      "vi": "[to dislike]",
      "id": "[to dislike]"
    },
    "ex": "野菜が嫌い",
    "exm": {
      "en": "dislike vegetables",
      "zh-TW": "討厭蔬菜",
      "zh-CN": "讨厌蔬菜",
      "ko": "[dislike vegetables]",
      "vi": "[dislike vegetables]",
      "id": "[dislike vegetables]"
    }
  },
  {
    "id": "V0103",
    "w": "笑う",
    "r": "わらう",
    "m": {
      "en": "to laugh",
      "zh-TW": "笑",
      "zh-CN": "笑",
      "ko": "[to laugh]",
      "vi": "[to laugh]",
      "id": "[to laugh]"
    },
    "ex": "面白くて笑う",
    "exm": {
      "en": "laugh funny",
      "zh-TW": "好笑而笑",
      "zh-CN": "好笑而笑",
      "ko": "[laugh funny]",
      "vi": "[laugh funny]",
      "id": "[laugh funny]"
    }
  },
  {
    "id": "V0104",
    "w": "泣く",
    "r": "なく",
    "m": {
      "en": "to cry",
      "zh-TW": "哭",
      "zh-CN": "哭",
      "ko": "[to cry]",
      "vi": "[to cry]",
      "id": "[to cry]"
    },
    "ex": "悲しくて泣く",
    "exm": {
      "en": "cry sad",
      "zh-TW": "傷心而哭",
      "zh-CN": "伤心而哭",
      "ko": "[cry sad]",
      "vi": "[cry sad]",
      "id": "[cry sad]"
    }
  },
  {
    "id": "V0105",
    "w": "怒る",
    "r": "おこる",
    "m": {
      "en": "to get angry",
      "zh-TW": "生氣",
      "zh-CN": "生气",
      "ko": "[to get angry]",
      "vi": "[to get angry]",
      "id": "[to get angry]"
    },
    "ex": "先生が怒る",
    "exm": {
      "en": "teacher angry",
      "zh-TW": "老師生氣",
      "zh-CN": "老师生气",
      "ko": "[teacher angry]",
      "vi": "[teacher angry]",
      "id": "[teacher angry]"
    }
  },
  {
    "id": "V0106",
    "w": "喜ぶ",
    "r": "よろこぶ",
    "m": {
      "en": "to be happy",
      "zh-TW": "高興",
      "zh-CN": "高兴",
      "ko": "[to be happy]",
      "vi": "[to be happy]",
      "id": "[to be happy]"
    },
    "ex": "プレゼントを喜ぶ",
    "exm": {
      "en": "happy gift",
      "zh-TW": "收到禮物很高興",
      "zh-CN": "收到礼物很高兴",
      "ko": "[happy gift]",
      "vi": "[happy gift]",
      "id": "[happy gift]"
    }
  },
  {
    "id": "V0107",
    "w": "悲しむ",
    "r": "かなしむ",
    "m": {
      "en": "to be sad",
      "zh-TW": "悲傷",
      "zh-CN": "悲伤",
      "ko": "[to be sad]",
      "vi": "[to be sad]",
      "id": "[to be sad]"
    },
    "ex": "別れを悲しむ",
    "exm": {
      "en": "sad parting",
      "zh-TW": "為離別而悲傷",
      "zh-CN": "为离别而悲伤",
      "ko": "[sad parting]",
      "vi": "[sad parting]",
      "id": "[sad parting]"
    }
  },
  {
    "id": "V0108",
    "w": "驚く",
    "r": "おどろく",
    "m": {
      "en": "to be surprised",
      "zh-TW": "驚訝",
      "zh-CN": "惊讶",
      "ko": "[to be surprised]",
      "vi": "[to be surprised]",
      "id": "[to be surprised]"
    },
    "ex": "ニュースに驚く",
    "exm": {
      "en": "surprised news",
      "zh-TW": "對新聞感到驚訝",
      "zh-CN": "对新闻感到惊讶",
      "ko": "[surprised news]",
      "vi": "[surprised news]",
      "id": "[surprised news]"
    }
  },
  {
    "id": "V0109",
    "w": "心配する",
    "r": "しんぱいする",
    "m": {
      "en": "to worry",
      "zh-TW": "擔心",
      "zh-CN": "担心",
      "ko": "[to worry]",
      "vi": "[to worry]",
      "id": "[to worry]"
    },
    "ex": "友達を心配する",
    "exm": {
      "en": "worry friend",
      "zh-TW": "擔心朋友",
      "zh-CN": "担心朋友",
      "ko": "[worry friend]",
      "vi": "[worry friend]",
      "id": "[worry friend]"
    }
  },
  {
    "id": "V0110",
    "w": "安心する",
    "r": "あんしんする",
    "m": {
      "en": "to be relieved",
      "zh-TW": "放心",
      "zh-CN": "放心",
      "ko": "[to be relieved]",
      "vi": "[to be relieved]",
      "id": "[to be relieved]"
    },
    "ex": "無事で安心する",
    "exm": {
      "en": "relieved safe",
      "zh-TW": "平安而放心",
      "zh-CN": "平安而放心",
      "ko": "[relieved safe]",
      "vi": "[relieved safe]",
      "id": "[relieved safe]"
    }
  },
  {
    "id": "V0111",
    "w": "困る",
    "r": "こまる",
    "m": {
      "en": "to be troubled",
      "zh-TW": "困擾",
      "zh-CN": "困扰",
      "ko": "[to be troubled]",
      "vi": "[to be troubled]",
      "id": "[to be troubled]"
    },
    "ex": "お金に困る",
    "exm": {
      "en": "troubled money",
      "zh-TW": "為錢困擾",
      "zh-CN": "为钱困扰",
      "ko": "[troubled money]",
      "vi": "[troubled money]",
      "id": "[troubled money]"
    }
  },
  {
    "id": "V0112",
    "w": "疲れる",
    "r": "つかれる",
    "m": {
      "en": "to be tired",
      "zh-TW": "累",
      "zh-CN": "累",
      "ko": "[to be tired]",
      "vi": "[to be tired]",
      "id": "[to be tired]"
    },
    "ex": "仕事で疲れる",
    "exm": {
      "en": "tired work",
      "zh-TW": "工作累了",
      "zh-CN": "工作累了",
      "ko": "[tired work]",
      "vi": "[tired work]",
      "id": "[tired work]"
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
      "ko": "[healthy/energetic]",
      "vi": "[healthy/energetic]",
      "id": "[healthy/energetic]"
    },
    "ex": "今日は元気",
    "exm": {
      "en": "energetic today",
      "zh-TW": "今天精神好",
      "zh-CN": "今天精神好",
      "ko": "[energetic today]",
      "vi": "[energetic today]",
      "id": "[energetic today]"
    }
  },
  {
    "id": "V0114",
    "w": "病気",
    "r": "びょうき",
    "m": {
      "en": "sick",
      "zh-TW": "生病",
      "zh-CN": "生病",
      "ko": "[sick]",
      "vi": "[sick]",
      "id": "[sick]"
    },
    "ex": "病気になる",
    "exm": {
      "en": "get sick",
      "zh-TW": "生病了",
      "zh-CN": "生病了",
      "ko": "[get sick]",
      "vi": "[get sick]",
      "id": "[get sick]"
    }
  },
  {
    "id": "V0115",
    "w": "治る",
    "r": "なおる",
    "m": {
      "en": "to heal",
      "zh-TW": "痊癒",
      "zh-CN": "痊愈",
      "ko": "[to heal]",
      "vi": "[to heal]",
      "id": "[to heal]"
    },
    "ex": "風邪が治る",
    "exm": {
      "en": "cold heals",
      "zh-TW": "感冒好了",
      "zh-CN": "感冒好了",
      "ko": "[cold heals]",
      "vi": "[cold heals]",
      "id": "[cold heals]"
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
      "id": "Lahir"
    },
    "ex": "東京で生まれる",
    "exm": {
      "en": "born Tokyo",
      "zh-TW": "在東京出生",
      "zh-CN": "在东京出生",
      "ko": "[born Tokyo]",
      "vi": "[born Tokyo]",
      "id": "[born Tokyo]"
    }
  },
  {
    "id": "V0117",
    "w": "死ぬ",
    "r": "しぬ",
    "m": {
      "en": "to die",
      "zh-TW": "死",
      "zh-CN": "死",
      "ko": "죽다",
      "vi": "Chết",
      "id": "Mati"
    },
    "ex": "花が死ぬ",
    "exm": {
      "en": "flower dies",
      "zh-TW": "花死了",
      "zh-CN": "花死了",
      "ko": "[flower dies]",
      "vi": "[flower dies]",
      "id": "[flower dies]"
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
      "id": "Tinggal"
    },
    "ex": "幸せに生きる",
    "exm": {
      "en": "live happy",
      "zh-TW": "幸福地活著",
      "zh-CN": "幸福地活着",
      "ko": "[live happy]",
      "vi": "[live happy]",
      "id": "[live happy]"
    }
  },
  {
    "id": "V0119",
    "w": "住む",
    "r": "すむ",
    "m": {
      "en": "to live/reside",
      "zh-TW": "住",
      "zh-CN": "住",
      "ko": "[to live/reside]",
      "vi": "[to live/reside]",
      "id": "[to live/reside]"
    },
    "ex": "東京に住む",
    "exm": {
      "en": "live Tokyo",
      "zh-TW": "住在東京",
      "zh-CN": "住在东京",
      "ko": "[live Tokyo]",
      "vi": "[live Tokyo]",
      "id": "[live Tokyo]"
    }
  },
  {
    "id": "V0120",
    "w": "引っ越す",
    "r": "ひっこす",
    "m": {
      "en": "to move house",
      "zh-TW": "搬家",
      "zh-CN": "搬家",
      "ko": "[to move house]",
      "vi": "[to move house]",
      "id": "[to move house]"
    },
    "ex": "大阪に引っ越す",
    "exm": {
      "en": "move Osaka",
      "zh-TW": "搬到大阪",
      "zh-CN": "搬到大阪",
      "ko": "[move Osaka]",
      "vi": "[move Osaka]",
      "id": "[move Osaka]"
    }
  },
  {
    "id": "V0121",
    "w": "結婚する",
    "r": "けっこんする",
    "m": {
      "en": "to marry",
      "zh-TW": "結婚",
      "zh-CN": "结婚",
      "ko": "[to marry]",
      "vi": "[to marry]",
      "id": "[to marry]"
    },
    "ex": "来年結婚する",
    "exm": {
      "en": "marry next year",
      "zh-TW": "明年結婚",
      "zh-CN": "明年结婚",
      "ko": "[marry next year]",
      "vi": "[marry next year]",
      "id": "[marry next year]"
    }
  },
  {
    "id": "V0122",
    "w": "離婚する",
    "r": "りこんする",
    "m": {
      "en": "to divorce",
      "zh-TW": "離婚",
      "zh-CN": "离婚",
      "ko": "[to divorce]",
      "vi": "[to divorce]",
      "id": "[to divorce]"
    },
    "ex": "去年離婚した",
    "exm": {
      "en": "divorced last year",
      "zh-TW": "去年離婚了",
      "zh-CN": "去年离婚了",
      "ko": "[divorced last year]",
      "vi": "[divorced last year]",
      "id": "[divorced last year]"
    }
  },
  {
    "id": "V0123",
    "w": "付き合う",
    "r": "つきあう",
    "m": {
      "en": "to date",
      "zh-TW": "交往",
      "zh-CN": "交往",
      "ko": "[to date]",
      "vi": "[to date]",
      "id": "[to date]"
    },
    "ex": "彼と付き合う",
    "exm": {
      "en": "date him",
      "zh-TW": "和他交往",
      "zh-CN": "和他交往",
      "ko": "[date him]",
      "vi": "[date him]",
      "id": "[date him]"
    }
  },
  {
    "id": "V0124",
    "w": "別れる",
    "r": "わかれる",
    "m": {
      "en": "to break up",
      "zh-TW": "分手",
      "zh-CN": "分手",
      "ko": "[to break up]",
      "vi": "[to break up]",
      "id": "[to break up]"
    },
    "ex": "彼女と別れる",
    "exm": {
      "en": "break up her",
      "zh-TW": "和她分手",
      "zh-CN": "和她分手",
      "ko": "[break up her]",
      "vi": "[break up her]",
      "id": "[break up her]"
    }
  },
  {
    "id": "V0125",
    "w": "起こす",
    "r": "おこす",
    "m": {
      "en": "to wake (someone)",
      "zh-TW": "叫醒",
      "zh-CN": "叫醒",
      "ko": "[to wake (someone)]",
      "vi": "[to wake (someone)]",
      "id": "[to wake (someone)]"
    },
    "ex": "子供を起こす",
    "exm": {
      "en": "wake child",
      "zh-TW": "叫醒小孩",
      "zh-CN": "叫醒小孩",
      "ko": "[wake child]",
      "vi": "[wake child]",
      "id": "[wake child]"
    }
  },
  {
    "id": "V0126",
    "w": "寝かす",
    "r": "ねかす",
    "m": {
      "en": "to put to sleep",
      "zh-TW": "哄睡",
      "zh-CN": "哄睡",
      "ko": "[to put to sleep]",
      "vi": "[to put to sleep]",
      "id": "[to put to sleep]"
    },
    "ex": "赤ちゃんを寝かす",
    "exm": {
      "en": "put baby sleep",
      "zh-TW": "哄嬰兒睡覺",
      "zh-CN": "哄婴儿睡觉",
      "ko": "[put baby sleep]",
      "vi": "[put baby sleep]",
      "id": "[put baby sleep]"
    }
  },
  {
    "id": "V0127",
    "w": "遅れる",
    "r": "おくれる",
    "m": {
      "en": "to be late",
      "zh-TW": "遲到",
      "zh-CN": "迟到",
      "ko": "[to be late]",
      "vi": "[to be late]",
      "id": "[to be late]"
    },
    "ex": "会議に遅れる",
    "exm": {
      "en": "late meeting",
      "zh-TW": "開會遲到",
      "zh-CN": "开会迟到",
      "ko": "[late meeting]",
      "vi": "[late meeting]",
      "id": "[late meeting]"
    }
  },
  {
    "id": "V0128",
    "w": "急ぐ",
    "r": "いそぐ",
    "m": {
      "en": "to hurry",
      "zh-TW": "趕快",
      "zh-CN": "赶快",
      "ko": "[to hurry]",
      "vi": "[to hurry]",
      "id": "[to hurry]"
    },
    "ex": "駅に急ぐ",
    "exm": {
      "en": "hurry station",
      "zh-TW": "趕去車站",
      "zh-CN": "赶去车站",
      "ko": "[hurry station]",
      "vi": "[hurry station]",
      "id": "[hurry station]"
    }
  },
  {
    "id": "V0129",
    "w": "間に合う",
    "r": "まにあう",
    "m": {
      "en": "to be on time",
      "zh-TW": "趕上",
      "zh-CN": "赶上",
      "ko": "[to be on time]",
      "vi": "[to be on time]",
      "id": "[to be on time]"
    },
    "ex": "電車に間に合う",
    "exm": {
      "en": "catch train",
      "zh-TW": "趕上電車",
      "zh-CN": "赶上电车",
      "ko": "[catch train]",
      "vi": "[catch train]",
      "id": "[catch train]"
    }
  },
  {
    "id": "V0130",
    "w": "落ちる",
    "r": "おちる",
    "m": {
      "en": "to fall",
      "zh-TW": "掉落",
      "zh-CN": "掉落",
      "ko": "[to fall]",
      "vi": "[to fall]",
      "id": "[to fall]"
    },
    "ex": "葉が落ちる",
    "exm": {
      "en": "leaves fall",
      "zh-TW": "葉子掉落",
      "zh-CN": "叶子掉落",
      "ko": "[leaves fall]",
      "vi": "[leaves fall]",
      "id": "[leaves fall]"
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
      "id": "pergi"
    },
    "ex": "温度が上がる",
    "exm": {
      "en": "temp rises",
      "zh-TW": "溫度上升",
      "zh-CN": "温度上升",
      "ko": "[temp rises]",
      "vi": "[temp rises]",
      "id": "[temp rises]"
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
      "id": "pergi"
    },
    "ex": "温度が下がる",
    "exm": {
      "en": "temp drops",
      "zh-TW": "溫度下降",
      "zh-CN": "温度下降",
      "ko": "[temp drops]",
      "vi": "[temp drops]",
      "id": "[temp drops]"
    }
  },
  {
    "id": "V0133",
    "w": "集まる",
    "r": "あつまる",
    "m": {
      "en": "to gather",
      "zh-TW": "聚集",
      "zh-CN": "聚集",
      "ko": "[to gather]",
      "vi": "[to gather]",
      "id": "[to gather]"
    },
    "ex": "人が集まる",
    "exm": {
      "en": "people gather",
      "zh-TW": "人聚集",
      "zh-CN": "人聚集",
      "ko": "[people gather]",
      "vi": "[people gather]",
      "id": "[people gather]"
    }
  },
  {
    "id": "V0134",
    "w": "集める",
    "r": "あつめる",
    "m": {
      "en": "to collect",
      "zh-TW": "收集",
      "zh-CN": "收集",
      "ko": "[to collect]",
      "vi": "[to collect]",
      "id": "[to collect]"
    },
    "ex": "切手を集める",
    "exm": {
      "en": "collect stamps",
      "zh-TW": "收集郵票",
      "zh-CN": "收集邮票",
      "ko": "[collect stamps]",
      "vi": "[collect stamps]",
      "id": "[collect stamps]"
    }
  },
  {
    "id": "V0135",
    "w": "並ぶ",
    "r": "ならぶ",
    "m": {
      "en": "to line up",
      "zh-TW": "排隊",
      "zh-CN": "排队",
      "ko": "[to line up]",
      "vi": "[to line up]",
      "id": "[to line up]"
    },
    "ex": "店に並ぶ",
    "exm": {
      "en": "line up shop",
      "zh-TW": "在店排隊",
      "zh-CN": "在店排队",
      "ko": "[line up shop]",
      "vi": "[line up shop]",
      "id": "[line up shop]"
    }
  },
  {
    "id": "V0136",
    "w": "並べる",
    "r": "ならべる",
    "m": {
      "en": "to arrange",
      "zh-TW": "排列",
      "zh-CN": "排列",
      "ko": "[to arrange]",
      "vi": "[to arrange]",
      "id": "[to arrange]"
    },
    "ex": "本を並べる",
    "exm": {
      "en": "arrange books",
      "zh-TW": "排列書",
      "zh-CN": "排列书",
      "ko": "[arrange books]",
      "vi": "[arrange books]",
      "id": "[arrange books]"
    }
  },
  {
    "id": "V0137",
    "w": "増える",
    "r": "ふえる",
    "m": {
      "en": "to increase",
      "zh-TW": "增加",
      "zh-CN": "增加",
      "ko": "[to increase]",
      "vi": "[to increase]",
      "id": "[to increase]"
    },
    "ex": "人口が増える",
    "exm": {
      "en": "pop increases",
      "zh-TW": "人口增加",
      "zh-CN": "人口增加",
      "ko": "[pop increases]",
      "vi": "[pop increases]",
      "id": "[pop increases]"
    }
  },
  {
    "id": "V0138",
    "w": "減る",
    "r": "へる",
    "m": {
      "en": "to decrease",
      "zh-TW": "減少",
      "zh-CN": "减少",
      "ko": "[to decrease]",
      "vi": "[to decrease]",
      "id": "[to decrease]"
    },
    "ex": "人口が減る",
    "exm": {
      "en": "pop decreases",
      "zh-TW": "人口減少",
      "zh-CN": "人口减少",
      "ko": "[pop decreases]",
      "vi": "[pop decreases]",
      "id": "[pop decreases]"
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
      "ko": "[to be enough]",
      "vi": "[to be enough]",
      "id": "[to be enough]"
    },
    "ex": "お金が足りる",
    "exm": {
      "en": "money enough",
      "zh-TW": "錢足夠",
      "zh-CN": "钱足够",
      "ko": "[money enough]",
      "vi": "[money enough]",
      "id": "[money enough]"
    }
  },
  {
    "id": "V0140",
    "w": "余る",
    "r": "あまる",
    "m": {
      "en": "to be left over",
      "zh-TW": "剩餘",
      "zh-CN": "剩余",
      "ko": "[to be left over]",
      "vi": "[to be left over]",
      "id": "[to be left over]"
    },
    "ex": "お金が余る",
    "exm": {
      "en": "money left",
      "zh-TW": "錢剩下",
      "zh-CN": "钱剩下",
      "ko": "[money left]",
      "vi": "[money left]",
      "id": "[money left]"
    }
  },
  {
    "id": "V0141",
    "w": "掛かる",
    "r": "かかる",
    "m": {
      "en": "to take (time/money)",
      "zh-TW": "花費",
      "zh-CN": "花费",
      "ko": "[to take (time/money)]",
      "vi": "[to take (time/money)]",
      "id": "[to take (time/money)]"
    },
    "ex": "時間が掛かる",
    "exm": {
      "en": "takes time",
      "zh-TW": "花時間",
      "zh-CN": "花时间",
      "ko": "[takes time]",
      "vi": "[takes time]",
      "id": "[takes time]"
    }
  },
  {
    "id": "V0142",
    "w": "役に立つ",
    "r": "やくにたつ",
    "m": {
      "en": "to be useful",
      "zh-TW": "有用",
      "zh-CN": "有用",
      "ko": "[to be useful]",
      "vi": "[to be useful]",
      "id": "[to be useful]"
    },
    "ex": "辞書が役に立つ",
    "exm": {
      "en": "dictionary useful",
      "zh-TW": "字典很有用",
      "zh-CN": "字典很有用",
      "ko": "[dictionary useful]",
      "vi": "[dictionary useful]",
      "id": "[dictionary useful]"
    }
  },
  {
    "id": "V0143",
    "w": "似る",
    "r": "にる",
    "m": {
      "en": "to resemble",
      "zh-TW": "像",
      "zh-CN": "像",
      "ko": "[to resemble]",
      "vi": "[to resemble]",
      "id": "[to resemble]"
    },
    "ex": "父に似る",
    "exm": {
      "en": "resemble father",
      "zh-TW": "像爸爸",
      "zh-CN": "像爸爸",
      "ko": "[resemble father]",
      "vi": "[resemble father]",
      "id": "[resemble father]"
    }
  },
  {
    "id": "V0144",
    "w": "違う",
    "r": "ちがう",
    "m": {
      "en": "to be different",
      "zh-TW": "不同",
      "zh-CN": "不同",
      "ko": "[to be different]",
      "vi": "[to be different]",
      "id": "[to be different]"
    },
    "ex": "意見が違う",
    "exm": {
      "en": "opinions differ",
      "zh-TW": "意見不同",
      "zh-CN": "意见不同",
      "ko": "[opinions differ]",
      "vi": "[opinions differ]",
      "id": "[opinions differ]"
    }
  },
  {
    "id": "V0145",
    "w": "合う",
    "r": "あう",
    "m": {
      "en": "to fit/match",
      "zh-TW": "合適",
      "zh-CN": "合适",
      "ko": "[to fit/match]",
      "vi": "[to fit/match]",
      "id": "[to fit/match]"
    },
    "ex": "サイズが合う",
    "exm": {
      "en": "size fits",
      "zh-TW": "尺寸合適",
      "zh-CN": "尺寸合适",
      "ko": "[size fits]",
      "vi": "[size fits]",
      "id": "[size fits]"
    }
  },
  {
    "id": "V0146",
    "w": "慣れる",
    "r": "なれる",
    "m": {
      "en": "to get used to",
      "zh-TW": "習慣",
      "zh-CN": "习惯",
      "ko": "[to get used to]",
      "vi": "[to get used to]",
      "id": "[to get used to]"
    },
    "ex": "日本に慣れる",
    "exm": {
      "en": "used to Japan",
      "zh-TW": "習慣日本",
      "zh-CN": "习惯日本",
      "ko": "[used to Japan]",
      "vi": "[used to Japan]",
      "id": "[used to Japan]"
    }
  },
  {
    "id": "V0147",
    "w": "比べる",
    "r": "くらべる",
    "m": {
      "en": "to compare",
      "zh-TW": "比較",
      "zh-CN": "比较",
      "ko": "[to compare]",
      "vi": "[to compare]",
      "id": "[to compare]"
    },
    "ex": "値段を比べる",
    "exm": {
      "en": "compare prices",
      "zh-TW": "比較價格",
      "zh-CN": "比较价格",
      "ko": "[compare prices]",
      "vi": "[compare prices]",
      "id": "[compare prices]"
    }
  },
  {
    "id": "V0148",
    "w": "選ぶ",
    "r": "えらぶ",
    "m": {
      "en": "to choose",
      "zh-TW": "選擇",
      "zh-CN": "选择",
      "ko": "[to choose]",
      "vi": "[to choose]",
      "id": "[to choose]"
    },
    "ex": "色を選ぶ",
    "exm": {
      "en": "choose color",
      "zh-TW": "選顏色",
      "zh-CN": "选颜色",
      "ko": "[choose color]",
      "vi": "[choose color]",
      "id": "[choose color]"
    }
  },
  {
    "id": "V0149",
    "w": "数える",
    "r": "かぞえる",
    "m": {
      "en": "to count",
      "zh-TW": "數",
      "zh-CN": "数",
      "ko": "[to count]",
      "vi": "[to count]",
      "id": "[to count]"
    },
    "ex": "お金を数える",
    "exm": {
      "en": "count money",
      "zh-TW": "數錢",
      "zh-CN": "数钱",
      "ko": "[count money]",
      "vi": "[count money]",
      "id": "[count money]"
    }
  },
  {
    "id": "V0150",
    "w": "調べる",
    "r": "しらべる",
    "m": {
      "en": "to investigate",
      "zh-TW": "調查",
      "zh-CN": "调查",
      "ko": "[to investigate]",
      "vi": "[to investigate]",
      "id": "[to investigate]"
    },
    "ex": "辞書で調べる",
    "exm": {
      "en": "look up dictionary",
      "zh-TW": "查字典",
      "zh-CN": "查字典",
      "ko": "[look up dictionary]",
      "vi": "[look up dictionary]",
      "id": "[look up dictionary]"
    }
  },
  {
    "id": "V0151",
    "w": "試す",
    "r": "ためす",
    "m": {
      "en": "to try",
      "zh-TW": "嘗試",
      "zh-CN": "尝试",
      "ko": "[to try]",
      "vi": "[to try]",
      "id": "[to try]"
    },
    "ex": "新しい料理を試す",
    "exm": {
      "en": "try new food",
      "zh-TW": "嘗試新菜",
      "zh-CN": "尝试新菜",
      "ko": "[try new food]",
      "vi": "[try new food]",
      "id": "[try new food]"
    }
  },
  {
    "id": "V0152",
    "w": "努力する",
    "r": "どりょくする",
    "m": {
      "en": "to make effort",
      "zh-TW": "努力",
      "zh-CN": "努力",
      "ko": "[to make effort]",
      "vi": "[to make effort]",
      "id": "[to make effort]"
    },
    "ex": "毎日努力する",
    "exm": {
      "en": "effort daily",
      "zh-TW": "每天努力",
      "zh-CN": "每天努力",
      "ko": "[effort daily]",
      "vi": "[effort daily]",
      "id": "[effort daily]"
    }
  },
  {
    "id": "V0153",
    "w": "成功する",
    "r": "せいこうする",
    "m": {
      "en": "to succeed",
      "zh-TW": "成功",
      "zh-CN": "成功",
      "ko": "[to succeed]",
      "vi": "[to succeed]",
      "id": "[to succeed]"
    },
    "ex": "試験に成功する",
    "exm": {
      "en": "succeed exam",
      "zh-TW": "考試成功",
      "zh-CN": "考试成功",
      "ko": "[succeed exam]",
      "vi": "[succeed exam]",
      "id": "[succeed exam]"
    }
  },
  {
    "id": "V0154",
    "w": "失敗する",
    "r": "しっぱいする",
    "m": {
      "en": "to fail",
      "zh-TW": "失敗",
      "zh-CN": "失败",
      "ko": "[to fail]",
      "vi": "[to fail]",
      "id": "[to fail]"
    },
    "ex": "試験に失敗する",
    "exm": {
      "en": "fail exam",
      "zh-TW": "考試失敗",
      "zh-CN": "考试失败",
      "ko": "[fail exam]",
      "vi": "[fail exam]",
      "id": "[fail exam]"
    }
  },
  {
    "id": "V0155",
    "w": "参加する",
    "r": "さんかする",
    "m": {
      "en": "to participate",
      "zh-TW": "參加",
      "zh-CN": "参加",
      "ko": "[to participate]",
      "vi": "[to participate]",
      "id": "[to participate]"
    },
    "ex": "パーティーに参加する",
    "exm": {
      "en": "join party",
      "zh-TW": "參加派對",
      "zh-CN": "参加派对",
      "ko": "[join party]",
      "vi": "[join party]",
      "id": "[join party]"
    }
  },
  {
    "id": "V0156",
    "w": "招待する",
    "r": "しょうたいする",
    "m": {
      "en": "to invite",
      "zh-TW": "邀請",
      "zh-CN": "邀请",
      "ko": "[to invite]",
      "vi": "[to invite]",
      "id": "[to invite]"
    },
    "ex": "友達を招待する",
    "exm": {
      "en": "invite friend",
      "zh-TW": "邀請朋友",
      "zh-CN": "邀请朋友",
      "ko": "[invite friend]",
      "vi": "[invite friend]",
      "id": "[invite friend]"
    }
  },
  {
    "id": "V0157",
    "w": "紹介する",
    "r": "しょうかいする",
    "m": {
      "en": "to introduce",
      "zh-TW": "介紹",
      "zh-CN": "介绍",
      "ko": "[to introduce]",
      "vi": "[to introduce]",
      "id": "[to introduce]"
    },
    "ex": "友達を紹介する",
    "exm": {
      "en": "introduce friend",
      "zh-TW": "介紹朋友",
      "zh-CN": "介绍朋友",
      "ko": "[introduce friend]",
      "vi": "[introduce friend]",
      "id": "[introduce friend]"
    }
  },
  {
    "id": "V0158",
    "w": "案内する",
    "r": "あんないする",
    "m": {
      "en": "to guide",
      "zh-TW": "引導",
      "zh-CN": "引导",
      "ko": "[to guide]",
      "vi": "[to guide]",
      "id": "[to guide]"
    },
    "ex": "町を案内する",
    "exm": {
      "en": "guide town",
      "zh-TW": "導覽城市",
      "zh-CN": "导览城市",
      "ko": "[guide town]",
      "vi": "[guide town]",
      "id": "[guide town]"
    }
  },
  {
    "id": "V0159",
    "w": "説明する",
    "r": "せつめいする",
    "m": {
      "en": "to explain",
      "zh-TW": "說明",
      "zh-CN": "说明",
      "ko": "[to explain]",
      "vi": "[to explain]",
      "id": "[to explain]"
    },
    "ex": "使い方を説明する",
    "exm": {
      "en": "explain use",
      "zh-TW": "說明用法",
      "zh-CN": "说明用法",
      "ko": "[explain use]",
      "vi": "[explain use]",
      "id": "[explain use]"
    }
  },
  {
    "id": "V0160",
    "w": "質問する",
    "r": "しつもんする",
    "m": {
      "en": "to ask",
      "zh-TW": "問",
      "zh-CN": "问",
      "ko": "묻다",
      "vi": "Hỏi",
      "id": "Bertanya"
    },
    "ex": "先生に質問する",
    "exm": {
      "en": "ask teacher",
      "zh-TW": "問老師",
      "zh-CN": "问老师",
      "ko": "[ask teacher]",
      "vi": "[ask teacher]",
      "id": "[ask teacher]"
    }
  },
  {
    "id": "V0161",
    "w": "答える",
    "r": "こたえる",
    "m": {
      "en": "to answer",
      "zh-TW": "回答",
      "zh-CN": "回答",
      "ko": "대답하다",
      "vi": "Trả lời",
      "id": "Menjawab"
    },
    "ex": "質問に答える",
    "exm": {
      "en": "answer question",
      "zh-TW": "回答問題",
      "zh-CN": "回答问题",
      "ko": "[answer question]",
      "vi": "[answer question]",
      "id": "[answer question]"
    }
  },
  {
    "id": "V0162",
    "w": "頼む",
    "r": "たのむ",
    "m": {
      "en": "to request",
      "zh-TW": "拜託",
      "zh-CN": "拜托",
      "ko": "[to request]",
      "vi": "[to request]",
      "id": "[to request]"
    },
    "ex": "友達に頼む",
    "exm": {
      "en": "ask friend",
      "zh-TW": "拜託朋友",
      "zh-CN": "拜托朋友",
      "ko": "[ask friend]",
      "vi": "[ask friend]",
      "id": "[ask friend]"
    }
  },
  {
    "id": "V0163",
    "w": "断る",
    "r": "ことわる",
    "m": {
      "en": "to refuse",
      "zh-TW": "拒絕",
      "zh-CN": "拒绝",
      "ko": "[to refuse]",
      "vi": "[to refuse]",
      "id": "[to refuse]"
    },
    "ex": "招待を断る",
    "exm": {
      "en": "refuse invitation",
      "zh-TW": "拒絕邀請",
      "zh-CN": "拒绝邀请",
      "ko": "[refuse invitation]",
      "vi": "[refuse invitation]",
      "id": "[refuse invitation]"
    }
  },
  {
    "id": "V0164",
    "w": "許す",
    "r": "ゆるす",
    "m": {
      "en": "to forgive",
      "zh-TW": "原諒",
      "zh-CN": "原谅",
      "ko": "[to forgive]",
      "vi": "[to forgive]",
      "id": "[to forgive]"
    },
    "ex": "友達を許す",
    "exm": {
      "en": "forgive friend",
      "zh-TW": "原諒朋友",
      "zh-CN": "原谅朋友",
      "ko": "[forgive friend]",
      "vi": "[forgive friend]",
      "id": "[forgive friend]"
    }
  },
  {
    "id": "V0165",
    "w": "謝る",
    "r": "あやまる",
    "m": {
      "en": "to apologize",
      "zh-TW": "道歉",
      "zh-CN": "道歉",
      "ko": "[to apologize]",
      "vi": "[to apologize]",
      "id": "[to apologize]"
    },
    "ex": "間違いを謝る",
    "exm": {
      "en": "apologize mistake",
      "zh-TW": "為錯誤道歉",
      "zh-CN": "为错误道歉",
      "ko": "[apologize mistake]",
      "vi": "[apologize mistake]",
      "id": "[apologize mistake]"
    }
  },
  {
    "id": "V0166",
    "w": "褒める",
    "r": "ほめる",
    "m": {
      "en": "to praise",
      "zh-TW": "稱讚",
      "zh-CN": "称赞",
      "ko": "[to praise]",
      "vi": "[to praise]",
      "id": "[to praise]"
    },
    "ex": "子供を褒める",
    "exm": {
      "en": "praise child",
      "zh-TW": "稱讚小孩",
      "zh-CN": "称赞小孩",
      "ko": "[praise child]",
      "vi": "[praise child]",
      "id": "[praise child]"
    }
  },
  {
    "id": "V0167",
    "w": "叱る",
    "r": "しかる",
    "m": {
      "en": "to scold",
      "zh-TW": "責罵",
      "zh-CN": "责骂",
      "ko": "오래되다",
      "vi": "cũ",
      "id": "lama"
    },
    "ex": "子供を叱る",
    "exm": {
      "en": "scold child",
      "zh-TW": "罵小孩",
      "zh-CN": "骂小孩",
      "ko": "[scold child]",
      "vi": "[scold child]",
      "id": "[scold child]"
    }
  },
  {
    "id": "V0168",
    "w": "手伝う",
    "r": "てつだう",
    "m": {
      "en": "to help",
      "zh-TW": "幫忙",
      "zh-CN": "帮忙",
      "ko": "[to help]",
      "vi": "[to help]",
      "id": "[to help]"
    },
    "ex": "母を手伝う",
    "exm": {
      "en": "help mother",
      "zh-TW": "幫媽媽",
      "zh-CN": "帮妈妈",
      "ko": "[help mother]",
      "vi": "[help mother]",
      "id": "[help mother]"
    }
  },
  {
    "id": "V0169",
    "w": "助ける",
    "r": "たすける",
    "m": {
      "en": "to rescue",
      "zh-TW": "救助",
      "zh-CN": "救助",
      "ko": "[to rescue]",
      "vi": "[to rescue]",
      "id": "[to rescue]"
    },
    "ex": "友達を助ける",
    "exm": {
      "en": "help friend",
      "zh-TW": "救助朋友",
      "zh-CN": "救助朋友",
      "ko": "[help friend]",
      "vi": "[help friend]",
      "id": "[help friend]"
    }
  },
  {
    "id": "V0170",
    "w": "守る",
    "r": "まもる",
    "m": {
      "en": "to protect",
      "zh-TW": "保護",
      "zh-CN": "保护",
      "ko": "[to protect]",
      "vi": "[to protect]",
      "id": "[to protect]"
    },
    "ex": "約束を守る",
    "exm": {
      "en": "keep promise",
      "zh-TW": "遵守約定",
      "zh-CN": "遵守约定",
      "ko": "[keep promise]",
      "vi": "[keep promise]",
      "id": "[keep promise]"
    }
  },
  {
    "id": "V0171",
    "w": "触る",
    "r": "さわる",
    "m": {
      "en": "to touch",
      "zh-TW": "觸摸",
      "zh-CN": "触摸",
      "ko": "[to touch]",
      "vi": "[to touch]",
      "id": "[to touch]"
    },
    "ex": "壁に触る",
    "exm": {
      "en": "touch wall",
      "zh-TW": "觸摸牆壁",
      "zh-CN": "触摸墙壁",
      "ko": "[touch wall]",
      "vi": "[touch wall]",
      "id": "[touch wall]"
    }
  },
  {
    "id": "V0172",
    "w": "押す",
    "r": "おす",
    "m": {
      "en": "to push",
      "zh-TW": "推/按",
      "zh-CN": "推/按",
      "ko": "[to push]",
      "vi": "[to push]",
      "id": "[to push]"
    },
    "ex": "ボタンを押す",
    "exm": {
      "en": "push button",
      "zh-TW": "按按鈕",
      "zh-CN": "按按钮",
      "ko": "[push button]",
      "vi": "[push button]",
      "id": "[push button]"
    }
  },
  {
    "id": "V0173",
    "w": "引く",
    "r": "ひく",
    "m": {
      "en": "to pull",
      "zh-TW": "拉",
      "zh-CN": "拉",
      "ko": "[to pull]",
      "vi": "[to pull]",
      "id": "[to pull]"
    },
    "ex": "ドアを引く",
    "exm": {
      "en": "pull door",
      "zh-TW": "拉門",
      "zh-CN": "拉门",
      "ko": "[pull door]",
      "vi": "[pull door]",
      "id": "[pull door]"
    }
  },
  {
    "id": "V0174",
    "w": "投げる",
    "r": "なげる",
    "m": {
      "en": "to throw",
      "zh-TW": "扔",
      "zh-CN": "扔",
      "ko": "[to throw]",
      "vi": "[to throw]",
      "id": "[to throw]"
    },
    "ex": "ボールを投げる",
    "exm": {
      "en": "throw ball",
      "zh-TW": "扔球",
      "zh-CN": "扔球",
      "ko": "[throw ball]",
      "vi": "[throw ball]",
      "id": "[throw ball]"
    }
  },
  {
    "id": "V0175",
    "w": "捕まえる",
    "r": "つかまえる",
    "m": {
      "en": "to catch",
      "zh-TW": "抓住",
      "zh-CN": "抓住",
      "ko": "[to catch]",
      "vi": "[to catch]",
      "id": "[to catch]"
    },
    "ex": "ボールを捕まえる",
    "exm": {
      "en": "catch ball",
      "zh-TW": "接球",
      "zh-CN": "接球",
      "ko": "[catch ball]",
      "vi": "[catch ball]",
      "id": "[catch ball]"
    }
  },
  {
    "id": "V0176",
    "w": "飛ぶ",
    "r": "とぶ",
    "m": {
      "en": "to fly",
      "zh-TW": "飛",
      "zh-CN": "飞",
      "ko": "[to fly]",
      "vi": "[to fly]",
      "id": "[to fly]"
    },
    "ex": "鳥が飛ぶ",
    "exm": {
      "en": "bird flies",
      "zh-TW": "鳥飛",
      "zh-CN": "鸟飞",
      "ko": "[bird flies]",
      "vi": "[bird flies]",
      "id": "[bird flies]"
    }
  },
  {
    "id": "V0177",
    "w": "跳ぶ",
    "r": "とぶ",
    "m": {
      "en": "to jump",
      "zh-TW": "跳",
      "zh-CN": "跳",
      "ko": "[to jump]",
      "vi": "[to jump]",
      "id": "[to jump]"
    },
    "ex": "高く跳ぶ",
    "exm": {
      "en": "jump high",
      "zh-TW": "跳得高",
      "zh-CN": "跳得高",
      "ko": "[jump high]",
      "vi": "[jump high]",
      "id": "[jump high]"
    }
  },
  {
    "id": "V0178",
    "w": "蹴る",
    "r": "ける",
    "m": {
      "en": "to kick",
      "zh-TW": "踢",
      "zh-CN": "踢",
      "ko": "[to kick]",
      "vi": "[to kick]",
      "id": "[to kick]"
    },
    "ex": "ボールを蹴る",
    "exm": {
      "en": "kick ball",
      "zh-TW": "踢球",
      "zh-CN": "踢球",
      "ko": "[kick ball]",
      "vi": "[kick ball]",
      "id": "[kick ball]"
    }
  },
  {
    "id": "V0179",
    "w": "打つ",
    "r": "うつ",
    "m": {
      "en": "to hit",
      "zh-TW": "打",
      "zh-CN": "打",
      "ko": "[to hit]",
      "vi": "[to hit]",
      "id": "[to hit]"
    },
    "ex": "ボールを打つ",
    "exm": {
      "en": "hit ball",
      "zh-TW": "打球",
      "zh-CN": "打球",
      "ko": "[hit ball]",
      "vi": "[hit ball]",
      "id": "[hit ball]"
    }
  },
  {
    "id": "V0180",
    "w": "叩く",
    "r": "たたく",
    "m": {
      "en": "to knock",
      "zh-TW": "敲",
      "zh-CN": "敲",
      "ko": "[to knock]",
      "vi": "[to knock]",
      "id": "[to knock]"
    },
    "ex": "ドアを叩く",
    "exm": {
      "en": "knock door",
      "zh-TW": "敲門",
      "zh-CN": "敲门",
      "ko": "[knock door]",
      "vi": "[knock door]",
      "id": "[knock door]"
    }
  },
  {
    "id": "V0181",
    "w": "呼ぶ",
    "r": "よぶ",
    "m": {
      "en": "to call",
      "zh-TW": "打電話",
      "zh-CN": "打电话",
      "ko": "전화하다",
      "vi": "Gọi điện",
      "id": "Menelepon"
    },
    "ex": "名前を呼ぶ",
    "exm": {
      "en": "call name",
      "zh-TW": "叫名字",
      "zh-CN": "叫名字",
      "ko": "[call name]",
      "vi": "[call name]",
      "id": "[call name]"
    }
  },
  {
    "id": "V0182",
    "w": "叫ぶ",
    "r": "さけぶ",
    "m": {
      "en": "to shout",
      "zh-TW": "喊叫",
      "zh-CN": "喊叫",
      "ko": "[to shout]",
      "vi": "[to shout]",
      "id": "[to shout]"
    },
    "ex": "大声で叫ぶ",
    "exm": {
      "en": "shout loud",
      "zh-TW": "大聲喊",
      "zh-CN": "大声喊",
      "ko": "[shout loud]",
      "vi": "[shout loud]",
      "id": "[shout loud]"
    }
  },
  {
    "id": "V0183",
    "w": "鳴く",
    "r": "なく",
    "m": {
      "en": "to make sound (animal)",
      "zh-TW": "叫(動物)",
      "zh-CN": "叫(动物)",
      "ko": "[to make sound (animal)]",
      "vi": "[to make sound (animal)]",
      "id": "[to make sound (animal)]"
    },
    "ex": "犬が鳴く",
    "exm": {
      "en": "dog barks",
      "zh-TW": "狗叫",
      "zh-CN": "狗叫",
      "ko": "[dog barks]",
      "vi": "[dog barks]",
      "id": "[dog barks]"
    }
  },
  {
    "id": "V0184",
    "w": "鳴る",
    "r": "なる",
    "m": {
      "en": "to ring",
      "zh-TW": "響",
      "zh-CN": "响",
      "ko": "[to ring]",
      "vi": "[to ring]",
      "id": "[to ring]"
    },
    "ex": "電話が鳴る",
    "exm": {
      "en": "phone rings",
      "zh-TW": "電話響",
      "zh-CN": "电话响",
      "ko": "[phone rings]",
      "vi": "[phone rings]",
      "id": "[phone rings]"
    }
  },
  {
    "id": "V0185",
    "w": "光る",
    "r": "ひかる",
    "m": {
      "en": "to shine",
      "zh-TW": "發光",
      "zh-CN": "发光",
      "ko": "[to shine]",
      "vi": "[to shine]",
      "id": "[to shine]"
    },
    "ex": "星が光る",
    "exm": {
      "en": "star shines",
      "zh-TW": "星星發光",
      "zh-CN": "星星发光",
      "ko": "[star shines]",
      "vi": "[star shines]",
      "id": "[star shines]"
    }
  },
  {
    "id": "V0186",
    "w": "燃える",
    "r": "もえる",
    "m": {
      "en": "to burn",
      "zh-TW": "燃燒",
      "zh-CN": "燃烧",
      "ko": "[to burn]",
      "vi": "[to burn]",
      "id": "[to burn]"
    },
    "ex": "火が燃える",
    "exm": {
      "en": "fire burns",
      "zh-TW": "火在燒",
      "zh-CN": "火在烧",
      "ko": "[fire burns]",
      "vi": "[fire burns]",
      "id": "[fire burns]"
    }
  },
  {
    "id": "V0187",
    "w": "消える",
    "r": "きえる",
    "m": {
      "en": "to disappear",
      "zh-TW": "消失",
      "zh-CN": "消失",
      "ko": "[to disappear]",
      "vi": "[to disappear]",
      "id": "[to disappear]"
    },
    "ex": "火が消える",
    "exm": {
      "en": "fire goes out",
      "zh-TW": "火滅了",
      "zh-CN": "火灭了",
      "ko": "[fire goes out]",
      "vi": "[fire goes out]",
      "id": "[fire goes out]"
    }
  },
  {
    "id": "V0188",
    "w": "溶ける",
    "r": "とける",
    "m": {
      "en": "to melt",
      "zh-TW": "融化",
      "zh-CN": "融化",
      "ko": "[to melt]",
      "vi": "[to melt]",
      "id": "[to melt]"
    },
    "ex": "雪が溶ける",
    "exm": {
      "en": "snow melts",
      "zh-TW": "雪融化",
      "zh-CN": "雪融化",
      "ko": "[snow melts]",
      "vi": "[snow melts]",
      "id": "[snow melts]"
    }
  },
  {
    "id": "V0189",
    "w": "凍る",
    "r": "こおる",
    "m": {
      "en": "to freeze",
      "zh-TW": "結冰",
      "zh-CN": "结冰",
      "ko": "[to freeze]",
      "vi": "[to freeze]",
      "id": "[to freeze]"
    },
    "ex": "水が凍る",
    "exm": {
      "en": "water freezes",
      "zh-TW": "水結冰",
      "zh-CN": "水结冰",
      "ko": "[water freezes]",
      "vi": "[water freezes]",
      "id": "[water freezes]"
    }
  },
  {
    "id": "V0190",
    "w": "乾く",
    "r": "かわく",
    "m": {
      "en": "to dry",
      "zh-TW": "乾燥",
      "zh-CN": "干燥",
      "ko": "[to dry]",
      "vi": "[to dry]",
      "id": "[to dry]"
    },
    "ex": "洗濯物が乾く",
    "exm": {
      "en": "laundry dries",
      "zh-TW": "衣服乾了",
      "zh-CN": "衣服干了",
      "ko": "[laundry dries]",
      "vi": "[laundry dries]",
      "id": "[laundry dries]"
    }
  },
  {
    "id": "V0191",
    "w": "濡れる",
    "r": "ぬれる",
    "m": {
      "en": "to get wet",
      "zh-TW": "濕",
      "zh-CN": "湿",
      "ko": "[to get wet]",
      "vi": "[to get wet]",
      "id": "[to get wet]"
    },
    "ex": "雨で濡れる",
    "exm": {
      "en": "wet from rain",
      "zh-TW": "被雨淋濕",
      "zh-CN": "被雨淋湿",
      "ko": "[wet from rain]",
      "vi": "[wet from rain]",
      "id": "[wet from rain]"
    }
  },
  {
    "id": "V0192",
    "w": "汚れる",
    "r": "よごれる",
    "m": {
      "en": "to get dirty",
      "zh-TW": "弄髒",
      "zh-CN": "弄脏",
      "ko": "[to get dirty]",
      "vi": "[to get dirty]",
      "id": "[to get dirty]"
    },
    "ex": "服が汚れる",
    "exm": {
      "en": "clothes dirty",
      "zh-TW": "衣服髒了",
      "zh-CN": "衣服脏了",
      "ko": "[clothes dirty]",
      "vi": "[clothes dirty]",
      "id": "[clothes dirty]"
    }
  },
  {
    "id": "V0193",
    "w": "片付ける",
    "r": "かたづける",
    "m": {
      "en": "to tidy up",
      "zh-TW": "整理",
      "zh-CN": "整理",
      "ko": "[to tidy up]",
      "vi": "[to tidy up]",
      "id": "[to tidy up]"
    },
    "ex": "部屋を片付ける",
    "exm": {
      "en": "tidy room",
      "zh-TW": "整理房間",
      "zh-CN": "整理房间",
      "ko": "[tidy room]",
      "vi": "[tidy room]",
      "id": "[tidy room]"
    }
  },
  {
    "id": "V0194",
    "w": "散らかす",
    "r": "ちらかす",
    "m": {
      "en": "to mess up",
      "zh-TW": "弄亂",
      "zh-CN": "弄乱",
      "ko": "[to mess up]",
      "vi": "[to mess up]",
      "id": "[to mess up]"
    },
    "ex": "部屋を散らかす",
    "exm": {
      "en": "mess room",
      "zh-TW": "弄亂房間",
      "zh-CN": "弄乱房间",
      "ko": "[mess room]",
      "vi": "[mess room]",
      "id": "[mess room]"
    }
  },
  {
    "id": "V0195",
    "w": "包む",
    "r": "つつむ",
    "m": {
      "en": "to wrap",
      "zh-TW": "包",
      "zh-CN": "包",
      "ko": "[to wrap]",
      "vi": "[to wrap]",
      "id": "[to wrap]"
    },
    "ex": "プレゼントを包む",
    "exm": {
      "en": "wrap gift",
      "zh-TW": "包禮物",
      "zh-CN": "包礼物",
      "ko": "[wrap gift]",
      "vi": "[wrap gift]",
      "id": "[wrap gift]"
    }
  },
  {
    "id": "V0196",
    "w": "縛る",
    "r": "しばる",
    "m": {
      "en": "to tie",
      "zh-TW": "綁",
      "zh-CN": "绑",
      "ko": "[to tie]",
      "vi": "[to tie]",
      "id": "[to tie]"
    },
    "ex": "紐で縛る",
    "exm": {
      "en": "tie with string",
      "zh-TW": "用繩子綁",
      "zh-CN": "用绳子绑",
      "ko": "[tie with string]",
      "vi": "[tie with string]",
      "id": "[tie with string]"
    }
  },
  {
    "id": "V0197",
    "w": "混ぜる",
    "r": "まぜる",
    "m": {
      "en": "to mix",
      "zh-TW": "混合",
      "zh-CN": "混合",
      "ko": "[to mix]",
      "vi": "[to mix]",
      "id": "[to mix]"
    },
    "ex": "材料を混ぜる",
    "exm": {
      "en": "mix ingredients",
      "zh-TW": "混合材料",
      "zh-CN": "混合材料",
      "ko": "[mix ingredients]",
      "vi": "[mix ingredients]",
      "id": "[mix ingredients]"
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
      "ko": "[to divide]",
      "vi": "[to divide]",
      "id": "[to divide]"
    },
    "ex": "ケーキを分ける",
    "exm": {
      "en": "divide cake",
      "zh-TW": "分蛋糕",
      "zh-CN": "分蛋糕",
      "ko": "[divide cake]",
      "vi": "[divide cake]",
      "id": "[divide cake]"
    }
  },
  {
    "id": "V0199",
    "w": "繋ぐ",
    "r": "つなぐ",
    "m": {
      "en": "to connect",
      "zh-TW": "連接",
      "zh-CN": "连接",
      "ko": "[to connect]",
      "vi": "[to connect]",
      "id": "[to connect]"
    },
    "ex": "手を繋ぐ",
    "exm": {
      "en": "hold hands",
      "zh-TW": "牽手",
      "zh-CN": "牵手",
      "ko": "[hold hands]",
      "vi": "[hold hands]",
      "id": "[hold hands]"
    }
  },
  {
    "id": "V0200",
    "w": "離す",
    "r": "はなす",
    "m": {
      "en": "to separate",
      "zh-TW": "分開",
      "zh-CN": "分开",
      "ko": "[to separate]",
      "vi": "[to separate]",
      "id": "[to separate]"
    },
    "ex": "手を離す",
    "exm": {
      "en": "let go hand",
      "zh-TW": "放開手",
      "zh-CN": "放开手",
      "ko": "[let go hand]",
      "vi": "[let go hand]",
      "id": "[let go hand]"
    }
  },
  {
    "id": "V0201",
    "w": "私",
    "r": "わたし",
    "m": {
      "en": "I/me",
      "zh-TW": "我",
      "zh-CN": "我",
      "ko": "[I/me]",
      "vi": "[I/me]",
      "id": "[I/me]"
    },
    "ex": "私は学生です",
    "exm": {
      "en": "I am a student",
      "zh-TW": "我是學生",
      "zh-CN": "我是学生",
      "ko": "[I am a student]",
      "vi": "[I am a student]",
      "id": "[I am a student]"
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
      "id": "Anda"
    },
    "ex": "あなたは先生ですか",
    "exm": {
      "en": "Are you a teacher?",
      "zh-TW": "你是老師嗎",
      "zh-CN": "你是老师吗",
      "ko": "[Are you a teacher?]",
      "vi": "[Are you a teacher?]",
      "id": "[Are you a teacher?]"
    }
  },
  {
    "id": "V0203",
    "w": "彼",
    "r": "かれ",
    "m": {
      "en": "he/boyfriend",
      "zh-TW": "他",
      "zh-CN": "他",
      "ko": "[he/boyfriend]",
      "vi": "[he/boyfriend]",
      "id": "[he/boyfriend]"
    },
    "ex": "彼は日本人です",
    "exm": {
      "en": "He is Japanese",
      "zh-TW": "他是日本人",
      "zh-CN": "他是日本人",
      "ko": "[He is Japanese]",
      "vi": "[He is Japanese]",
      "id": "[He is Japanese]"
    }
  },
  {
    "id": "V0204",
    "w": "彼女",
    "r": "かのじょ",
    "m": {
      "en": "she/girlfriend",
      "zh-TW": "她",
      "zh-CN": "她",
      "ko": "[she/girlfriend]",
      "vi": "[she/girlfriend]",
      "id": "[she/girlfriend]"
    },
    "ex": "彼女は学生です",
    "exm": {
      "en": "She is a student",
      "zh-TW": "她是學生",
      "zh-CN": "她是学生",
      "ko": "[She is a student]",
      "vi": "[She is a student]",
      "id": "[She is a student]"
    }
  },
  {
    "id": "V0205",
    "w": "皆さん",
    "r": "みなさん",
    "m": {
      "en": "everyone",
      "zh-TW": "大家",
      "zh-CN": "大家",
      "ko": "[everyone]",
      "vi": "[everyone]",
      "id": "[everyone]"
    },
    "ex": "皆さん、おはよう",
    "exm": {
      "en": "Good morning everyone",
      "zh-TW": "大家早安",
      "zh-CN": "大家早安",
      "ko": "[Good morning everyone]",
      "vi": "[Good morning everyone]",
      "id": "[Good morning everyone]"
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
      "id": "Orang"
    },
    "ex": "あの人は誰ですか",
    "exm": {
      "en": "Who is that person?",
      "zh-TW": "那個人是誰",
      "zh-CN": "那个人是谁",
      "ko": "[Who is that person?]",
      "vi": "[Who is that person?]",
      "id": "[Who is that person?]"
    }
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
      "id": "Pria"
    },
    "ex": "あの男の人は誰",
    "exm": {
      "en": "Who is that man?",
      "zh-TW": "那個男人是誰",
      "zh-CN": "那个男人是谁",
      "ko": "[Who is that man?]",
      "vi": "[Who is that man?]",
      "id": "[Who is that man?]"
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
      "id": "Wanita"
    },
    "ex": "あの女の人は誰",
    "exm": {
      "en": "Who is that woman?",
      "zh-TW": "那個女人是誰",
      "zh-CN": "那个女人是谁",
      "ko": "[Who is that woman?]",
      "vi": "[Who is that woman?]",
      "id": "[Who is that woman?]"
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
      "ko": "[boy]",
      "vi": "[boy]",
      "id": "[boy]"
    },
    "ex": "男の子が遊んでいる",
    "exm": {
      "en": "A boy is playing",
      "zh-TW": "男孩在玩",
      "zh-CN": "男孩在玩",
      "ko": "[A boy is playing]",
      "vi": "[A boy is playing]",
      "id": "[A boy is playing]"
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
      "ko": "[girl]",
      "vi": "[girl]",
      "id": "[girl]"
    },
    "ex": "女の子が歌っている",
    "exm": {
      "en": "A girl is singing",
      "zh-TW": "女孩在唱歌",
      "zh-CN": "女孩在唱歌",
      "ko": "[A girl is singing]",
      "vi": "[A girl is singing]",
      "id": "[A girl is singing]"
    }
  },
  {
    "id": "V0211",
    "w": "子供",
    "r": "こども",
    "m": {
      "en": "child",
      "zh-TW": "孩子",
      "zh-CN": "孩子",
      "ko": "아이",
      "vi": "Trẻ em",
      "id": "Anak"
    },
    "ex": "子供が二人います",
    "exm": {
      "en": "I have two children",
      "zh-TW": "有兩個小孩",
      "zh-CN": "有两个小孩",
      "ko": "[I have two children]",
      "vi": "[I have two children]",
      "id": "[I have two children]"
    }
  },
  {
    "id": "V0212",
    "w": "赤ちゃん",
    "r": "あかちゃん",
    "m": {
      "en": "baby",
      "zh-TW": "嬰兒",
      "zh-CN": "婴儿",
      "ko": "[baby]",
      "vi": "[baby]",
      "id": "[baby]"
    },
    "ex": "赤ちゃんが泣いている",
    "exm": {
      "en": "The baby is crying",
      "zh-TW": "嬰兒在哭",
      "zh-CN": "婴儿在哭",
      "ko": "[The baby is crying]",
      "vi": "[The baby is crying]",
      "id": "[The baby is crying]"
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
      "ko": "[adult]",
      "vi": "[adult]",
      "id": "[adult]"
    },
    "ex": "大人になりたい",
    "exm": {
      "en": "I want to become an adult",
      "zh-TW": "想成為大人",
      "zh-CN": "想成为大人",
      "ko": "[I want to become an adult]",
      "vi": "[I want to become an adult]",
      "id": "[I want to become an adult]"
    }
  },
  {
    "id": "V0214",
    "w": "家族",
    "r": "かぞく",
    "m": {
      "en": "family",
      "zh-TW": "家人",
      "zh-CN": "家人",
      "ko": "가족",
      "vi": "Gia đình",
      "id": "Keluarga"
    },
    "ex": "家族は4人です",
    "exm": {
      "en": "My family has 4 people",
      "zh-TW": "家裡有4個人",
      "zh-CN": "家里有4个人",
      "ko": "[My family has 4 people]",
      "vi": "[My family has 4 people]",
      "id": "[My family has 4 people]"
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
      "id": "Ayah"
    },
    "ex": "父は会社員です",
    "exm": {
      "en": "Father is office worker",
      "zh-TW": "父親是上班族",
      "zh-CN": "父亲是上班族",
      "ko": "[Father is office worker]",
      "vi": "[Father is office worker]",
      "id": "[Father is office worker]"
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
      "id": "Ibu"
    },
    "ex": "母は先生です",
    "exm": {
      "en": "Mother is teacher",
      "zh-TW": "母親是老師",
      "zh-CN": "母亲是老师",
      "ko": "[Mother is teacher]",
      "vi": "[Mother is teacher]",
      "id": "[Mother is teacher]"
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
      "ko": "[father (polite)]",
      "vi": "[father (polite)]",
      "id": "[father (polite)]"
    },
    "ex": "お父さんは元気ですか",
    "exm": {
      "en": "Is your father well?",
      "zh-TW": "爸爸好嗎",
      "zh-CN": "爸爸好吗",
      "ko": "[Is your father well?]",
      "vi": "[Is your father well?]",
      "id": "[Is your father well?]"
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
      "ko": "[mother (polite)]",
      "vi": "[mother (polite)]",
      "id": "[mother (polite)]"
    },
    "ex": "お母さんに会いたい",
    "exm": {
      "en": "I want to see mom",
      "zh-TW": "想見媽媽",
      "zh-CN": "想见妈妈",
      "ko": "[I want to see mom]",
      "vi": "[I want to see mom]",
      "id": "[I want to see mom]"
    }
  },
  {
    "id": "V0219",
    "w": "兄",
    "r": "あに",
    "m": {
      "en": "older brother",
      "zh-TW": "哥哥",
      "zh-CN": "哥哥",
      "ko": "오래되다",
      "vi": "cũ",
      "id": "lama"
    },
    "ex": "兄は大学生です",
    "exm": {
      "en": "Brother is university student",
      "zh-TW": "哥哥是大學生",
      "zh-CN": "哥哥是大学生",
      "ko": "[Brother is university student]",
      "vi": "[Brother is university student]",
      "id": "[Brother is university student]"
    }
  },
  {
    "id": "V0220",
    "w": "姉",
    "r": "あね",
    "m": {
      "en": "older sister",
      "zh-TW": "姊姊",
      "zh-CN": "姐姐",
      "ko": "오래되다",
      "vi": "cũ",
      "id": "lama"
    },
    "ex": "姉は医者です",
    "exm": {
      "en": "Sister is doctor",
      "zh-TW": "姊姊是醫生",
      "zh-CN": "姐姐是医生",
      "ko": "[Sister is doctor]",
      "vi": "[Sister is doctor]",
      "id": "[Sister is doctor]"
    }
  },
  {
    "id": "V0221",
    "w": "弟",
    "r": "おとうと",
    "m": {
      "en": "younger brother",
      "zh-TW": "弟弟",
      "zh-CN": "弟弟",
      "ko": "[younger brother]",
      "vi": "[younger brother]",
      "id": "[younger brother]"
    },
    "ex": "弟は高校生です",
    "exm": {
      "en": "Brother is high schooler",
      "zh-TW": "弟弟是高中生",
      "zh-CN": "弟弟是高中生",
      "ko": "[Brother is high schooler]",
      "vi": "[Brother is high schooler]",
      "id": "[Brother is high schooler]"
    }
  },
  {
    "id": "V0222",
    "w": "妹",
    "r": "いもうと",
    "m": {
      "en": "younger sister",
      "zh-TW": "妹妹",
      "zh-CN": "妹妹",
      "ko": "[younger sister]",
      "vi": "[younger sister]",
      "id": "[younger sister]"
    },
    "ex": "妹は中学生です",
    "exm": {
      "en": "Sister is middle schooler",
      "zh-TW": "妹妹是國中生",
      "zh-CN": "妹妹是初中生",
      "ko": "[Sister is middle schooler]",
      "vi": "[Sister is middle schooler]",
      "id": "[Sister is middle schooler]"
    }
  },
  {
    "id": "V0223",
    "w": "お兄さん",
    "r": "おにいさん",
    "m": {
      "en": "older brother (polite)",
      "zh-TW": "哥哥",
      "zh-CN": "哥哥",
      "ko": "오래되다",
      "vi": "cũ",
      "id": "lama"
    },
    "ex": "お兄さんは優しい",
    "exm": {
      "en": "Brother is kind",
      "zh-TW": "哥哥很溫柔",
      "zh-CN": "哥哥很温柔",
      "ko": "[Brother is kind]",
      "vi": "[Brother is kind]",
      "id": "[Brother is kind]"
    }
  },
  {
    "id": "V0224",
    "w": "お姉さん",
    "r": "おねえさん",
    "m": {
      "en": "older sister (polite)",
      "zh-TW": "姊姊",
      "zh-CN": "姐姐",
      "ko": "오래되다",
      "vi": "cũ",
      "id": "lama"
    },
    "ex": "お姉さんは綺麗",
    "exm": {
      "en": "Sister is beautiful",
      "zh-TW": "姊姊很漂亮",
      "zh-CN": "姐姐很漂亮",
      "ko": "[Sister is beautiful]",
      "vi": "[Sister is beautiful]",
      "id": "[Sister is beautiful]"
    }
  },
  {
    "id": "V0225",
    "w": "祖父",
    "r": "そふ",
    "m": {
      "en": "grandfather",
      "zh-TW": "祖父",
      "zh-CN": "祖父",
      "ko": "[grandfather]",
      "vi": "[grandfather]",
      "id": "[grandfather]"
    },
    "ex": "祖父は元気です",
    "exm": {
      "en": "Grandfather is healthy",
      "zh-TW": "祖父很健康",
      "zh-CN": "祖父很健康",
      "ko": "[Grandfather is healthy]",
      "vi": "[Grandfather is healthy]",
      "id": "[Grandfather is healthy]"
    }
  },
  {
    "id": "V0226",
    "w": "祖母",
    "r": "そぼ",
    "m": {
      "en": "grandmother",
      "zh-TW": "祖母",
      "zh-CN": "祖母",
      "ko": "[grandmother]",
      "vi": "[grandmother]",
      "id": "[grandmother]"
    },
    "ex": "祖母は80歳です",
    "exm": {
      "en": "Grandmother is 80",
      "zh-TW": "祖母80歲",
      "zh-CN": "祖母80岁",
      "ko": "[Grandmother is 80]",
      "vi": "[Grandmother is 80]",
      "id": "[Grandmother is 80]"
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
      "ko": "[grandfather (polite)]",
      "vi": "[grandfather (polite)]",
      "id": "[grandfather (polite)]"
    },
    "ex": "おじいさんに会う",
    "exm": {
      "en": "Meet grandfather",
      "zh-TW": "見爺爺",
      "zh-CN": "见爷爷",
      "ko": "[Meet grandfather]",
      "vi": "[Meet grandfather]",
      "id": "[Meet grandfather]"
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
      "ko": "[grandmother (polite)]",
      "vi": "[grandmother (polite)]",
      "id": "[grandmother (polite)]"
    },
    "ex": "おばあさんの料理",
    "exm": {
      "en": "Grandmother's cooking",
      "zh-TW": "奶奶的菜",
      "zh-CN": "奶奶的菜",
      "ko": "[Grandmother's cooking]",
      "vi": "[Grandmother's cooking]",
      "id": "[Grandmother's cooking]"
    }
  },
  {
    "id": "V0229",
    "w": "夫",
    "r": "おっと",
    "m": {
      "en": "husband",
      "zh-TW": "丈夫",
      "zh-CN": "丈夫",
      "ko": "[husband]",
      "vi": "[husband]",
      "id": "[husband]"
    },
    "ex": "夫は会社員です",
    "exm": {
      "en": "Husband is office worker",
      "zh-TW": "丈夫是上班族",
      "zh-CN": "丈夫是上班族",
      "ko": "[Husband is office worker]",
      "vi": "[Husband is office worker]",
      "id": "[Husband is office worker]"
    }
  },
  {
    "id": "V0230",
    "w": "妻",
    "r": "つま",
    "m": {
      "en": "wife",
      "zh-TW": "妻子",
      "zh-CN": "妻子",
      "ko": "[wife]",
      "vi": "[wife]",
      "id": "[wife]"
    },
    "ex": "妻は先生です",
    "exm": {
      "en": "Wife is teacher",
      "zh-TW": "妻子是老師",
      "zh-CN": "妻子是老师",
      "ko": "[Wife is teacher]",
      "vi": "[Wife is teacher]",
      "id": "[Wife is teacher]"
    }
  },
  {
    "id": "V0231",
    "w": "主人",
    "r": "しゅじん",
    "m": {
      "en": "husband (humble)",
      "zh-TW": "丈夫",
      "zh-CN": "丈夫",
      "ko": "[husband (humble)]",
      "vi": "[husband (humble)]",
      "id": "[husband (humble)]"
    },
    "ex": "主人は出張中です",
    "exm": {
      "en": "Husband on business trip",
      "zh-TW": "丈夫出差中",
      "zh-CN": "丈夫出差中",
      "ko": "[Husband on business trip]",
      "vi": "[Husband on business trip]",
      "id": "[Husband on business trip]"
    }
  },
  {
    "id": "V0232",
    "w": "奥さん",
    "r": "おくさん",
    "m": {
      "en": "wife (polite)",
      "zh-TW": "太太",
      "zh-CN": "太太",
      "ko": "[wife (polite)]",
      "vi": "[wife (polite)]",
      "id": "[wife (polite)]"
    },
    "ex": "奥さんはお元気ですか",
    "exm": {
      "en": "Is your wife well?",
      "zh-TW": "太太好嗎",
      "zh-CN": "太太好吗",
      "ko": "[Is your wife well?]",
      "vi": "[Is your wife well?]",
      "id": "[Is your wife well?]"
    }
  },
  {
    "id": "V0233",
    "w": "友達",
    "r": "ともだち",
    "m": {
      "en": "friend",
      "zh-TW": "朋友",
      "zh-CN": "朋友",
      "ko": "친구",
      "vi": "Bạn",
      "id": "Teman"
    },
    "ex": "友達と遊ぶ",
    "exm": {
      "en": "Play with friend",
      "zh-TW": "和朋友玩",
      "zh-CN": "和朋友玩",
      "ko": "[Play with friend]",
      "vi": "[Play with friend]",
      "id": "[Play with friend]"
    }
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
      "id": "Guru"
    },
    "ex": "先生に聞く",
    "exm": {
      "en": "Ask teacher",
      "zh-TW": "問老師",
      "zh-CN": "问老师",
      "ko": "[Ask teacher]",
      "vi": "[Ask teacher]",
      "id": "[Ask teacher]"
    }
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
      "id": "Murid"
    },
    "ex": "私は学生です",
    "exm": {
      "en": "I am a student",
      "zh-TW": "我是學生",
      "zh-CN": "我是学生",
      "ko": "[I am a student]",
      "vi": "[I am a student]",
      "id": "[I am a student]"
    }
  },
  {
    "id": "V0236",
    "w": "医者",
    "r": "いしゃ",
    "m": {
      "en": "doctor",
      "zh-TW": "醫生",
      "zh-CN": "医生",
      "ko": "의사",
      "vi": "Bác sĩ",
      "id": "Dokter"
    },
    "ex": "医者になりたい",
    "exm": {
      "en": "Want to be doctor",
      "zh-TW": "想當醫生",
      "zh-CN": "想当医生",
      "ko": "[Want to be doctor]",
      "vi": "[Want to be doctor]",
      "id": "[Want to be doctor]"
    }
  },
  {
    "id": "V0237",
    "w": "看護師",
    "r": "かんごし",
    "m": {
      "en": "nurse",
      "zh-TW": "護士",
      "zh-CN": "护士",
      "ko": "[nurse]",
      "vi": "[nurse]",
      "id": "[nurse]"
    },
    "ex": "看護師は優しい",
    "exm": {
      "en": "Nurse is kind",
      "zh-TW": "護士很溫柔",
      "zh-CN": "护士很温柔",
      "ko": "[Nurse is kind]",
      "vi": "[Nurse is kind]",
      "id": "[Nurse is kind]"
    }
  },
  {
    "id": "V0238",
    "w": "会社員",
    "r": "かいしゃいん",
    "m": {
      "en": "office worker",
      "zh-TW": "上班族",
      "zh-CN": "上班族",
      "ko": "[office worker]",
      "vi": "[office worker]",
      "id": "[office worker]"
    },
    "ex": "会社員として働く",
    "exm": {
      "en": "Work as office worker",
      "zh-TW": "當上班族工作",
      "zh-CN": "当上班族工作",
      "ko": "[Work as office worker]",
      "vi": "[Work as office worker]",
      "id": "[Work as office worker]"
    }
  },
  {
    "id": "V0239",
    "w": "店員",
    "r": "てんいん",
    "m": {
      "en": "shop clerk",
      "zh-TW": "店員",
      "zh-CN": "店员",
      "ko": "[shop clerk]",
      "vi": "[shop clerk]",
      "id": "[shop clerk]"
    },
    "ex": "店員に聞く",
    "exm": {
      "en": "Ask clerk",
      "zh-TW": "問店員",
      "zh-CN": "问店员",
      "ko": "[Ask clerk]",
      "vi": "[Ask clerk]",
      "id": "[Ask clerk]"
    }
  },
  {
    "id": "V0240",
    "w": "運転手",
    "r": "うんてんしゅ",
    "m": {
      "en": "driver",
      "zh-TW": "司機",
      "zh-CN": "司机",
      "ko": "[driver]",
      "vi": "[driver]",
      "id": "[driver]"
    },
    "ex": "タクシーの運転手",
    "exm": {
      "en": "Taxi driver",
      "zh-TW": "計程車司機",
      "zh-CN": "出租车司机",
      "ko": "[Taxi driver]",
      "vi": "[Taxi driver]",
      "id": "[Taxi driver]"
    }
  },
  {
    "id": "V0241",
    "w": "警察",
    "r": "けいさつ",
    "m": {
      "en": "police",
      "zh-TW": "警察",
      "zh-CN": "警察",
      "ko": "[police]",
      "vi": "[police]",
      "id": "[police]"
    },
    "ex": "警察に聞く",
    "exm": {
      "en": "Ask police",
      "zh-TW": "問警察",
      "zh-CN": "问警察",
      "ko": "[Ask police]",
      "vi": "[Ask police]",
      "id": "[Ask police]"
    }
  },
  {
    "id": "V0242",
    "w": "客",
    "r": "きゃく",
    "m": {
      "en": "customer",
      "zh-TW": "客人",
      "zh-CN": "客人",
      "ko": "[customer]",
      "vi": "[customer]",
      "id": "[customer]"
    },
    "ex": "客が来る",
    "exm": {
      "en": "Customer comes",
      "zh-TW": "客人來了",
      "zh-CN": "客人来了",
      "ko": "[Customer comes]",
      "vi": "[Customer comes]",
      "id": "[Customer comes]"
    }
  },
  {
    "id": "V0243",
    "w": "お客さん",
    "r": "おきゃくさん",
    "m": {
      "en": "customer (polite)",
      "zh-TW": "顧客",
      "zh-CN": "顾客",
      "ko": "[customer (polite)]",
      "vi": "[customer (polite)]",
      "id": "[customer (polite)]"
    },
    "ex": "お客さんを案内する",
    "exm": {
      "en": "Guide customer",
      "zh-TW": "引導顧客",
      "zh-CN": "引导顾客",
      "ko": "[Guide customer]",
      "vi": "[Guide customer]",
      "id": "[Guide customer]"
    }
  },
  {
    "id": "V0244",
    "w": "隣の人",
    "r": "となりのひと",
    "m": {
      "en": "neighbor",
      "zh-TW": "鄰居",
      "zh-CN": "邻居",
      "ko": "[neighbor]",
      "vi": "[neighbor]",
      "id": "[neighbor]"
    },
    "ex": "隣の人に挨拶する",
    "exm": {
      "en": "Greet neighbor",
      "zh-TW": "向鄰居打招呼",
      "zh-CN": "向邻居打招呼",
      "ko": "[Greet neighbor]",
      "vi": "[Greet neighbor]",
      "id": "[Greet neighbor]"
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
      "ko": "[company president]",
      "vi": "[company president]",
      "id": "[company president]"
    },
    "ex": "社長に会う",
    "exm": {
      "en": "Meet president",
      "zh-TW": "見社長",
      "zh-CN": "见社长",
      "ko": "[Meet president]",
      "vi": "[Meet president]",
      "id": "[Meet president]"
    }
  },
  {
    "id": "V0246",
    "w": "部長",
    "r": "ぶちょう",
    "m": {
      "en": "department head",
      "zh-TW": "部長",
      "zh-CN": "部长",
      "ko": "[department head]",
      "vi": "[department head]",
      "id": "[department head]"
    },
    "ex": "部長に報告する",
    "exm": {
      "en": "Report to head",
      "zh-TW": "向部長報告",
      "zh-CN": "向部长报告",
      "ko": "[Report to head]",
      "vi": "[Report to head]",
      "id": "[Report to head]"
    }
  },
  {
    "id": "V0247",
    "w": "課長",
    "r": "かちょう",
    "m": {
      "en": "section chief",
      "zh-TW": "課長",
      "zh-CN": "课长",
      "ko": "[section chief]",
      "vi": "[section chief]",
      "id": "[section chief]"
    },
    "ex": "課長に相談する",
    "exm": {
      "en": "Consult chief",
      "zh-TW": "和課長商量",
      "zh-CN": "和课长商量",
      "ko": "[Consult chief]",
      "vi": "[Consult chief]",
      "id": "[Consult chief]"
    }
  },
  {
    "id": "V0248",
    "w": "同僚",
    "r": "どうりょう",
    "m": {
      "en": "colleague",
      "zh-TW": "同事",
      "zh-CN": "同事",
      "ko": "[colleague]",
      "vi": "[colleague]",
      "id": "[colleague]"
    },
    "ex": "同僚と話す",
    "exm": {
      "en": "Talk with colleague",
      "zh-TW": "和同事說話",
      "zh-CN": "和同事说话",
      "ko": "[Talk with colleague]",
      "vi": "[Talk with colleague]",
      "id": "[Talk with colleague]"
    }
  },
  {
    "id": "V0249",
    "w": "後輩",
    "r": "こうはい",
    "m": {
      "en": "junior",
      "zh-TW": "後輩",
      "zh-CN": "后辈",
      "ko": "[junior]",
      "vi": "[junior]",
      "id": "[junior]"
    },
    "ex": "後輩を助ける",
    "exm": {
      "en": "Help junior",
      "zh-TW": "幫助後輩",
      "zh-CN": "帮助后辈",
      "ko": "[Help junior]",
      "vi": "[Help junior]",
      "id": "[Help junior]"
    }
  },
  {
    "id": "V0250",
    "w": "先輩",
    "r": "せんぱい",
    "m": {
      "en": "senior",
      "zh-TW": "前輩",
      "zh-CN": "前辈",
      "ko": "[senior]",
      "vi": "[senior]",
      "id": "[senior]"
    },
    "ex": "先輩に教わる",
    "exm": {
      "en": "Learn from senior",
      "zh-TW": "向前輩學習",
      "zh-CN": "向前辈学习",
      "ko": "[Learn from senior]",
      "vi": "[Learn from senior]",
      "id": "[Learn from senior]"
    }
  },
  {
    "id": "V0251",
    "w": "家",
    "r": "いえ",
    "m": {
      "en": "house",
      "zh-TW": "房子",
      "zh-CN": "房子",
      "ko": "집",
      "vi": "Nhà",
      "id": "Rumah"
    },
    "ex": "家に帰る",
    "exm": {
      "en": "Go home",
      "zh-TW": "回家",
      "zh-CN": "回家",
      "ko": "[Go home]",
      "vi": "[Go home]",
      "id": "[Go home]"
    }
  },
  {
    "id": "V0252",
    "w": "部屋",
    "r": "へや",
    "m": {
      "en": "room",
      "zh-TW": "房間",
      "zh-CN": "房间",
      "ko": "방",
      "vi": "Phòng",
      "id": "Kamar"
    },
    "ex": "部屋を掃除する",
    "exm": {
      "en": "Clean room",
      "zh-TW": "打掃房間",
      "zh-CN": "打扫房间",
      "ko": "[Clean room]",
      "vi": "[Clean room]",
      "id": "[Clean room]"
    }
  },
  {
    "id": "V0253",
    "w": "台所",
    "r": "だいどころ",
    "m": {
      "en": "kitchen",
      "zh-TW": "廚房",
      "zh-CN": "厨房",
      "ko": "[kitchen]",
      "vi": "[kitchen]",
      "id": "[kitchen]"
    },
    "ex": "台所で料理する",
    "exm": {
      "en": "Cook in kitchen",
      "zh-TW": "在廚房做菜",
      "zh-CN": "在厨房做菜",
      "ko": "[Cook in kitchen]",
      "vi": "[Cook in kitchen]",
      "id": "[Cook in kitchen]"
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
      "ko": "[toilet]",
      "vi": "[toilet]",
      "id": "[toilet]"
    },
    "ex": "トイレに行く",
    "exm": {
      "en": "Go to toilet",
      "zh-TW": "去廁所",
      "zh-CN": "去厕所",
      "ko": "[Go to toilet]",
      "vi": "[Go to toilet]",
      "id": "[Go to toilet]"
    }
  },
  {
    "id": "V0255",
    "w": "お風呂",
    "r": "おふろ",
    "m": {
      "en": "bath",
      "zh-TW": "浴室",
      "zh-CN": "浴室",
      "ko": "[bath]",
      "vi": "[bath]",
      "id": "[bath]"
    },
    "ex": "お風呂に入る",
    "exm": {
      "en": "Take bath",
      "zh-TW": "洗澡",
      "zh-CN": "洗澡",
      "ko": "[Take bath]",
      "vi": "[Take bath]",
      "id": "[Take bath]"
    }
  },
  {
    "id": "V0256",
    "w": "玄関",
    "r": "げんかん",
    "m": {
      "en": "entrance",
      "zh-TW": "玄關",
      "zh-CN": "玄关",
      "ko": "[entrance]",
      "vi": "[entrance]",
      "id": "[entrance]"
    },
    "ex": "玄関で靴を脱ぐ",
    "exm": {
      "en": "Take off shoes",
      "zh-TW": "在玄關脫鞋",
      "zh-CN": "在玄关脱鞋",
      "ko": "[Take off shoes]",
      "vi": "[Take off shoes]",
      "id": "[Take off shoes]"
    }
  },
  {
    "id": "V0257",
    "w": "庭",
    "r": "にわ",
    "m": {
      "en": "garden",
      "zh-TW": "庭院",
      "zh-CN": "庭院",
      "ko": "[garden]",
      "vi": "[garden]",
      "id": "[garden]"
    },
    "ex": "庭で遊ぶ",
    "exm": {
      "en": "Play in garden",
      "zh-TW": "在庭院玩",
      "zh-CN": "在庭院玩",
      "ko": "[Play in garden]",
      "vi": "[Play in garden]",
      "id": "[Play in garden]"
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
      "id": "Sekolah"
    },
    "ex": "学校に行く",
    "exm": {
      "en": "Go to school",
      "zh-TW": "去學校",
      "zh-CN": "去学校",
      "ko": "[Go to school]",
      "vi": "[Go to school]",
      "id": "[Go to school]"
    }
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
      "id": "Universitas"
    },
    "ex": "大学で勉強する",
    "exm": {
      "en": "Study at university",
      "zh-TW": "在大學學習",
      "zh-CN": "在大学学习",
      "ko": "[Study at university]",
      "vi": "[Study at university]",
      "id": "[Study at university]"
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
      "ko": "[classroom]",
      "vi": "[classroom]",
      "id": "[classroom]"
    },
    "ex": "教室で勉強する",
    "exm": {
      "en": "Study in classroom",
      "zh-TW": "在教室學習",
      "zh-CN": "在教室学习",
      "ko": "[Study in classroom]",
      "vi": "[Study in classroom]",
      "id": "[Study in classroom]"
    }
  },
  {
    "id": "V0261",
    "w": "図書館",
    "r": "としょかん",
    "m": {
      "en": "library",
      "zh-TW": "圖書館",
      "zh-CN": "图书馆",
      "ko": "[library]",
      "vi": "[library]",
      "id": "[library]"
    },
    "ex": "図書館で本を借りる",
    "exm": {
      "en": "Borrow at library",
      "zh-TW": "在圖書館借書",
      "zh-CN": "在图书馆借书",
      "ko": "[Borrow at library]",
      "vi": "[Borrow at library]",
      "id": "[Borrow at library]"
    }
  },
  {
    "id": "V0262",
    "w": "病院",
    "r": "びょういん",
    "m": {
      "en": "hospital",
      "zh-TW": "醫院",
      "zh-CN": "医院",
      "ko": "병원",
      "vi": "Bệnh viện",
      "id": "Rumah sakit"
    },
    "ex": "病院に行く",
    "exm": {
      "en": "Go to hospital",
      "zh-TW": "去醫院",
      "zh-CN": "去医院",
      "ko": "[Go to hospital]",
      "vi": "[Go to hospital]",
      "id": "[Go to hospital]"
    }
  },
  {
    "id": "V0263",
    "w": "銀行",
    "r": "ぎんこう",
    "m": {
      "en": "bank",
      "zh-TW": "銀行",
      "zh-CN": "银行",
      "ko": "은행",
      "vi": "Ngân hàng",
      "id": "Bank"
    },
    "ex": "銀行でお金をおろす",
    "exm": {
      "en": "Withdraw at bank",
      "zh-TW": "在銀行領錢",
      "zh-CN": "在银行取钱",
      "ko": "[Withdraw at bank]",
      "vi": "[Withdraw at bank]",
      "id": "[Withdraw at bank]"
    }
  },
  {
    "id": "V0264",
    "w": "郵便局",
    "r": "ゆうびんきょく",
    "m": {
      "en": "post office",
      "zh-TW": "郵局",
      "zh-CN": "邮局",
      "ko": "우체국",
      "vi": "Bưu điện",
      "id": "Kantor pos"
    },
    "ex": "郵便局で送る",
    "exm": {
      "en": "Send at post office",
      "zh-TW": "在郵局寄",
      "zh-CN": "在邮局寄",
      "ko": "[Send at post office]",
      "vi": "[Send at post office]",
      "id": "[Send at post office]"
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
      "id": "Stasiun"
    },
    "ex": "駅で待つ",
    "exm": {
      "en": "Wait at station",
      "zh-TW": "在車站等",
      "zh-CN": "在车站等",
      "ko": "[Wait at station]",
      "vi": "[Wait at station]",
      "id": "[Wait at station]"
    }
  },
  {
    "id": "V0266",
    "w": "空港",
    "r": "くうこう",
    "m": {
      "en": "airport",
      "zh-TW": "機場",
      "zh-CN": "机场",
      "ko": "공항",
      "vi": "Sân bay",
      "id": "Bandara"
    },
    "ex": "空港に行く",
    "exm": {
      "en": "Go to airport",
      "zh-TW": "去機場",
      "zh-CN": "去机场",
      "ko": "[Go to airport]",
      "vi": "[Go to airport]",
      "id": "[Go to airport]"
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
      "id": "Hotel"
    },
    "ex": "ホテルに泊まる",
    "exm": {
      "en": "Stay at hotel",
      "zh-TW": "住飯店",
      "zh-CN": "住酒店",
      "ko": "[Stay at hotel]",
      "vi": "[Stay at hotel]",
      "id": "[Stay at hotel]"
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
      "id": "Restoran"
    },
    "ex": "レストランで食べる",
    "exm": {
      "en": "Eat at restaurant",
      "zh-TW": "在餐廳吃",
      "zh-CN": "在餐厅吃",
      "ko": "[Eat at restaurant]",
      "vi": "[Eat at restaurant]",
      "id": "[Eat at restaurant]"
    }
  },
  {
    "id": "V0269",
    "w": "店",
    "r": "みせ",
    "m": {
      "en": "shop",
      "zh-TW": "店",
      "zh-CN": "店",
      "ko": "[shop]",
      "vi": "[shop]",
      "id": "[shop]"
    },
    "ex": "店で買う",
    "exm": {
      "en": "Buy at shop",
      "zh-TW": "在店裡買",
      "zh-CN": "在店里买",
      "ko": "[Buy at shop]",
      "vi": "[Buy at shop]",
      "id": "[Buy at shop]"
    }
  },
  {
    "id": "V0270",
    "w": "スーパー",
    "r": "スーパー",
    "m": {
      "en": "supermarket",
      "zh-TW": "超市",
      "zh-CN": "超市",
      "ko": "[supermarket]",
      "vi": "[supermarket]",
      "id": "[supermarket]"
    },
    "ex": "スーパーで買い物",
    "exm": {
      "en": "Shop at supermarket",
      "zh-TW": "在超市購物",
      "zh-CN": "在超市购物",
      "ko": "[Shop at supermarket]",
      "vi": "[Shop at supermarket]",
      "id": "[Shop at supermarket]"
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
      "ko": "[convenience store]",
      "vi": "[convenience store]",
      "id": "[convenience store]"
    },
    "ex": "コンビニで買う",
    "exm": {
      "en": "Buy at convenience store",
      "zh-TW": "在便利商店買",
      "zh-CN": "在便利店买",
      "ko": "[Buy at convenience store]",
      "vi": "[Buy at convenience store]",
      "id": "[Buy at convenience store]"
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
      "ko": "[department store]",
      "vi": "[department store]",
      "id": "[department store]"
    },
    "ex": "デパートで買い物",
    "exm": {
      "en": "Shop at department store",
      "zh-TW": "在百貨公司購物",
      "zh-CN": "在百货公司购物",
      "ko": "[Shop at department store]",
      "vi": "[Shop at department store]",
      "id": "[Shop at department store]"
    }
  },
  {
    "id": "V0273",
    "w": "公園",
    "r": "こうえん",
    "m": {
      "en": "park",
      "zh-TW": "公園",
      "zh-CN": "公园",
      "ko": "[park]",
      "vi": "[park]",
      "id": "[park]"
    },
    "ex": "公園で遊ぶ",
    "exm": {
      "en": "Play in park",
      "zh-TW": "在公園玩",
      "zh-CN": "在公园玩",
      "ko": "[Play in park]",
      "vi": "[Play in park]",
      "id": "[Play in park]"
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
      "ko": "[company]",
      "vi": "[company]",
      "id": "[company]"
    },
    "ex": "会社で働く",
    "exm": {
      "en": "Work at company",
      "zh-TW": "在公司工作",
      "zh-CN": "在公司工作",
      "ko": "[Work at company]",
      "vi": "[Work at company]",
      "id": "[Work at company]"
    }
  },
  {
    "id": "V0275",
    "w": "工場",
    "r": "こうじょう",
    "m": {
      "en": "factory",
      "zh-TW": "工廠",
      "zh-CN": "工厂",
      "ko": "[factory]",
      "vi": "[factory]",
      "id": "[factory]"
    },
    "ex": "工場で働く",
    "exm": {
      "en": "Work at factory",
      "zh-TW": "在工廠工作",
      "zh-CN": "在工厂工作",
      "ko": "[Work at factory]",
      "vi": "[Work at factory]",
      "id": "[Work at factory]"
    }
  },
  {
    "id": "V0276",
    "w": "映画館",
    "r": "えいがかん",
    "m": {
      "en": "movie theater",
      "zh-TW": "電影院",
      "zh-CN": "电影院",
      "ko": "[movie theater]",
      "vi": "[movie theater]",
      "id": "[movie theater]"
    },
    "ex": "映画館で映画を見る",
    "exm": {
      "en": "Watch movie at theater",
      "zh-TW": "在電影院看電影",
      "zh-CN": "在电影院看电影",
      "ko": "[Watch movie at theater]",
      "vi": "[Watch movie at theater]",
      "id": "[Watch movie at theater]"
    }
  },
  {
    "id": "V0277",
    "w": "美術館",
    "r": "びじゅつかん",
    "m": {
      "en": "art museum",
      "zh-TW": "美術館",
      "zh-CN": "美术馆",
      "ko": "[art museum]",
      "vi": "[art museum]",
      "id": "[art museum]"
    },
    "ex": "美術館で絵を見る",
    "exm": {
      "en": "See art at museum",
      "zh-TW": "在美術館看畫",
      "zh-CN": "在美术馆看画",
      "ko": "[See art at museum]",
      "vi": "[See art at museum]",
      "id": "[See art at museum]"
    }
  },
  {
    "id": "V0278",
    "w": "博物館",
    "r": "はくぶつかん",
    "m": {
      "en": "museum",
      "zh-TW": "博物館",
      "zh-CN": "博物馆",
      "ko": "[museum]",
      "vi": "[museum]",
      "id": "[museum]"
    },
    "ex": "博物館に行く",
    "exm": {
      "en": "Go to museum",
      "zh-TW": "去博物館",
      "zh-CN": "去博物馆",
      "ko": "[Go to museum]",
      "vi": "[Go to museum]",
      "id": "[Go to museum]"
    }
  },
  {
    "id": "V0279",
    "w": "神社",
    "r": "じんじゃ",
    "m": {
      "en": "shrine",
      "zh-TW": "神社",
      "zh-CN": "神社",
      "ko": "[shrine]",
      "vi": "[shrine]",
      "id": "[shrine]"
    },
    "ex": "神社に参る",
    "exm": {
      "en": "Visit shrine",
      "zh-TW": "參拜神社",
      "zh-CN": "参拜神社",
      "ko": "[Visit shrine]",
      "vi": "[Visit shrine]",
      "id": "[Visit shrine]"
    }
  },
  {
    "id": "V0280",
    "w": "お寺",
    "r": "おてら",
    "m": {
      "en": "temple",
      "zh-TW": "寺廟",
      "zh-CN": "寺庙",
      "ko": "[temple]",
      "vi": "[temple]",
      "id": "[temple]"
    },
    "ex": "お寺を見る",
    "exm": {
      "en": "See temple",
      "zh-TW": "看寺廟",
      "zh-CN": "看寺庙",
      "ko": "[See temple]",
      "vi": "[See temple]",
      "id": "[See temple]"
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
      "ko": "[road]",
      "vi": "[road]",
      "id": "[road]"
    },
    "ex": "道を歩く",
    "exm": {
      "en": "Walk on road",
      "zh-TW": "走路",
      "zh-CN": "走路",
      "ko": "[Walk on road]",
      "vi": "[Walk on road]",
      "id": "[Walk on road]"
    }
  },
  {
    "id": "V0282",
    "w": "通り",
    "r": "とおり",
    "m": {
      "en": "street",
      "zh-TW": "街道",
      "zh-CN": "街道",
      "ko": "[street]",
      "vi": "[street]",
      "id": "[street]"
    },
    "ex": "この通りをまっすぐ",
    "exm": {
      "en": "Straight on this street",
      "zh-TW": "這條街直走",
      "zh-CN": "这条街直走",
      "ko": "[Straight on this street]",
      "vi": "[Straight on this street]",
      "id": "[Straight on this street]"
    }
  },
  {
    "id": "V0283",
    "w": "橋",
    "r": "はし",
    "m": {
      "en": "bridge",
      "zh-TW": "橋",
      "zh-CN": "桥",
      "ko": "[bridge]",
      "vi": "[bridge]",
      "id": "[bridge]"
    },
    "ex": "橋を渡る",
    "exm": {
      "en": "Cross bridge",
      "zh-TW": "過橋",
      "zh-CN": "过桥",
      "ko": "[Cross bridge]",
      "vi": "[Cross bridge]",
      "id": "[Cross bridge]"
    }
  },
  {
    "id": "V0284",
    "w": "交差点",
    "r": "こうさてん",
    "m": {
      "en": "intersection",
      "zh-TW": "十字路口",
      "zh-CN": "十字路口",
      "ko": "[intersection]",
      "vi": "[intersection]",
      "id": "[intersection]"
    },
    "ex": "交差点を右に曲がる",
    "exm": {
      "en": "Turn right at intersection",
      "zh-TW": "在十字路口右轉",
      "zh-CN": "在十字路口右转",
      "ko": "[Turn right at intersection]",
      "vi": "[Turn right at intersection]",
      "id": "[Turn right at intersection]"
    }
  },
  {
    "id": "V0285",
    "w": "信号",
    "r": "しんごう",
    "m": {
      "en": "traffic light",
      "zh-TW": "紅綠燈",
      "zh-CN": "红绿灯",
      "ko": "[traffic light]",
      "vi": "[traffic light]",
      "id": "[traffic light]"
    },
    "ex": "信号を待つ",
    "exm": {
      "en": "Wait for light",
      "zh-TW": "等紅綠燈",
      "zh-CN": "等红绿灯",
      "ko": "[Wait for light]",
      "vi": "[Wait for light]",
      "id": "[Wait for light]"
    }
  },
  {
    "id": "V0286",
    "w": "角",
    "r": "かど",
    "m": {
      "en": "corner",
      "zh-TW": "轉角",
      "zh-CN": "转角",
      "ko": "[corner]",
      "vi": "[corner]",
      "id": "[corner]"
    },
    "ex": "角を曲がる",
    "exm": {
      "en": "Turn at corner",
      "zh-TW": "在轉角轉彎",
      "zh-CN": "在转角转弯",
      "ko": "[Turn at corner]",
      "vi": "[Turn at corner]",
      "id": "[Turn at corner]"
    }
  },
  {
    "id": "V0287",
    "w": "町",
    "r": "まち",
    "m": {
      "en": "town",
      "zh-TW": "城鎮",
      "zh-CN": "城镇",
      "ko": "[town]",
      "vi": "[town]",
      "id": "[town]"
    },
    "ex": "町を歩く",
    "exm": {
      "en": "Walk in town",
      "zh-TW": "在城鎮走",
      "zh-CN": "在城镇走",
      "ko": "[Walk in town]",
      "vi": "[Walk in town]",
      "id": "[Walk in town]"
    }
  },
  {
    "id": "V0288",
    "w": "村",
    "r": "むら",
    "m": {
      "en": "village",
      "zh-TW": "村莊",
      "zh-CN": "村庄",
      "ko": "[village]",
      "vi": "[village]",
      "id": "[village]"
    },
    "ex": "小さい村",
    "exm": {
      "en": "Small village",
      "zh-TW": "小村莊",
      "zh-CN": "小村庄",
      "ko": "[Small village]",
      "vi": "[Small village]",
      "id": "[Small village]"
    }
  },
  {
    "id": "V0289",
    "w": "市",
    "r": "し",
    "m": {
      "en": "city",
      "zh-TW": "市",
      "zh-CN": "市",
      "ko": "[city]",
      "vi": "[city]",
      "id": "[city]"
    },
    "ex": "東京市",
    "exm": {
      "en": "Tokyo City",
      "zh-TW": "東京市",
      "zh-CN": "东京市",
      "ko": "[Tokyo City]",
      "vi": "[Tokyo City]",
      "id": "[Tokyo City]"
    }
  },
  {
    "id": "V0290",
    "w": "県",
    "r": "けん",
    "m": {
      "en": "prefecture",
      "zh-TW": "縣",
      "zh-CN": "县",
      "ko": "[prefecture]",
      "vi": "[prefecture]",
      "id": "[prefecture]"
    },
    "ex": "大阪府",
    "exm": {
      "en": "Osaka Prefecture",
      "zh-TW": "大阪府",
      "zh-CN": "大阪府",
      "ko": "[Osaka Prefecture]",
      "vi": "[Osaka Prefecture]",
      "id": "[Osaka Prefecture]"
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
      "id": "Negara"
    },
    "ex": "日本という国",
    "exm": {
      "en": "Country called Japan",
      "zh-TW": "日本這個國家",
      "zh-CN": "日本这个国家",
      "ko": "[Country called Japan]",
      "vi": "[Country called Japan]",
      "id": "[Country called Japan]"
    }
  },
  {
    "id": "V0292",
    "w": "世界",
    "r": "せかい",
    "m": {
      "en": "world",
      "zh-TW": "世界",
      "zh-CN": "世界",
      "ko": "[world]",
      "vi": "[world]",
      "id": "[world]"
    },
    "ex": "世界を旅行する",
    "exm": {
      "en": "Travel the world",
      "zh-TW": "環遊世界",
      "zh-CN": "环游世界",
      "ko": "[Travel the world]",
      "vi": "[Travel the world]",
      "id": "[Travel the world]"
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
      "ko": "[foreign country]",
      "vi": "[foreign country]",
      "id": "[foreign country]"
    },
    "ex": "外国に行く",
    "exm": {
      "en": "Go abroad",
      "zh-TW": "去外國",
      "zh-CN": "去外国",
      "ko": "[Go abroad]",
      "vi": "[Go abroad]",
      "id": "[Go abroad]"
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
      "id": "Gunung"
    },
    "ex": "山に登る",
    "exm": {
      "en": "Climb mountain",
      "zh-TW": "爬山",
      "zh-CN": "爬山",
      "ko": "[Climb mountain]",
      "vi": "[Climb mountain]",
      "id": "[Climb mountain]"
    }
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
      "id": "Sungai"
    },
    "ex": "川で泳ぐ",
    "exm": {
      "en": "Swim in river",
      "zh-TW": "在河裡游泳",
      "zh-CN": "在河里游泳",
      "ko": "[Swim in river]",
      "vi": "[Swim in river]",
      "id": "[Swim in river]"
    }
  },
  {
    "id": "V0296",
    "w": "海",
    "r": "うみ",
    "m": {
      "en": "sea",
      "zh-TW": "海",
      "zh-CN": "海",
      "ko": "바다",
      "vi": "Biển",
      "id": "Laut"
    },
    "ex": "海で泳ぐ",
    "exm": {
      "en": "Swim in sea",
      "zh-TW": "在海游泳",
      "zh-CN": "在海游泳",
      "ko": "[Swim in sea]",
      "vi": "[Swim in sea]",
      "id": "[Swim in sea]"
    }
  },
  {
    "id": "V0297",
    "w": "湖",
    "r": "みずうみ",
    "m": {
      "en": "lake",
      "zh-TW": "湖",
      "zh-CN": "湖",
      "ko": "[lake]",
      "vi": "[lake]",
      "id": "[lake]"
    },
    "ex": "湖を見る",
    "exm": {
      "en": "See lake",
      "zh-TW": "看湖",
      "zh-CN": "看湖",
      "ko": "[See lake]",
      "vi": "[See lake]",
      "id": "[See lake]"
    }
  },
  {
    "id": "V0298",
    "w": "島",
    "r": "しま",
    "m": {
      "en": "island",
      "zh-TW": "島",
      "zh-CN": "岛",
      "ko": "[island]",
      "vi": "[island]",
      "id": "[island]"
    },
    "ex": "島に行く",
    "exm": {
      "en": "Go to island",
      "zh-TW": "去島上",
      "zh-CN": "去岛上",
      "ko": "[Go to island]",
      "vi": "[Go to island]",
      "id": "[Go to island]"
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
      "ko": "[forest]",
      "vi": "[forest]",
      "id": "[forest]"
    },
    "ex": "森を歩く",
    "exm": {
      "en": "Walk in forest",
      "zh-TW": "在森林走",
      "zh-CN": "在森林走",
      "ko": "[Walk in forest]",
      "vi": "[Walk in forest]",
      "id": "[Walk in forest]"
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
      "id": "Pohon"
    },
    "ex": "木に登る",
    "exm": {
      "en": "Climb tree",
      "zh-TW": "爬樹",
      "zh-CN": "爬树",
      "ko": "[Climb tree]",
      "vi": "[Climb tree]",
      "id": "[Climb tree]"
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
      "id": "Bunga"
    },
    "ex": "花をあげる",
    "exm": {
      "en": "Give flowers",
      "zh-TW": "送花",
      "zh-CN": "送花",
      "ko": "[Give flowers]",
      "vi": "[Give flowers]",
      "id": "[Give flowers]"
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
      "id": "Langit"
    },
    "ex": "空を見る",
    "exm": {
      "en": "Look at sky",
      "zh-TW": "看天空",
      "zh-CN": "看天空",
      "ko": "[Look at sky]",
      "vi": "[Look at sky]",
      "id": "[Look at sky]"
    }
  },
  {
    "id": "V0303",
    "w": "雲",
    "r": "くも",
    "m": {
      "en": "cloud",
      "zh-TW": "雲",
      "zh-CN": "云",
      "ko": "[cloud]",
      "vi": "[cloud]",
      "id": "[cloud]"
    },
    "ex": "雲が多い",
    "exm": {
      "en": "Many clouds",
      "zh-TW": "雲很多",
      "zh-CN": "云很多",
      "ko": "[Many clouds]",
      "vi": "[Many clouds]",
      "id": "[Many clouds]"
    }
  },
  {
    "id": "V0304",
    "w": "星",
    "r": "ほし",
    "m": {
      "en": "star",
      "zh-TW": "星星",
      "zh-CN": "星星",
      "ko": "별",
      "vi": "Ngôi sao",
      "id": "Bintang"
    },
    "ex": "星を見る",
    "exm": {
      "en": "Look at stars",
      "zh-TW": "看星星",
      "zh-CN": "看星星",
      "ko": "[Look at stars]",
      "vi": "[Look at stars]",
      "id": "[Look at stars]"
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
      "id": "Bulan"
    },
    "ex": "月がきれい",
    "exm": {
      "en": "Moon is beautiful",
      "zh-TW": "月亮很美",
      "zh-CN": "月亮很美",
      "ko": "[Moon is beautiful]",
      "vi": "[Moon is beautiful]",
      "id": "[Moon is beautiful]"
    }
  },
  {
    "id": "V0306",
    "w": "太陽",
    "r": "たいよう",
    "m": {
      "en": "sun",
      "zh-TW": "太陽",
      "zh-CN": "太阳",
      "ko": "태양",
      "vi": "Mặt trời",
      "id": "Matahari"
    },
    "ex": "太陽が出る",
    "exm": {
      "en": "Sun comes out",
      "zh-TW": "太陽出來",
      "zh-CN": "太阳出来",
      "ko": "[Sun comes out]",
      "vi": "[Sun comes out]",
      "id": "[Sun comes out]"
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
      "id": "Cuaca"
    },
    "ex": "今日の天気",
    "exm": {
      "en": "Today's weather",
      "zh-TW": "今天的天氣",
      "zh-CN": "今天的天气",
      "ko": "[Today's weather]",
      "vi": "[Today's weather]",
      "id": "[Today's weather]"
    }
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
      "id": "Hujan"
    },
    "ex": "雨が降る",
    "exm": {
      "en": "Rain falls",
      "zh-TW": "下雨",
      "zh-CN": "下雨",
      "ko": "[Rain falls]",
      "vi": "[Rain falls]",
      "id": "[Rain falls]"
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
      "id": "Salju"
    },
    "ex": "雪が降る",
    "exm": {
      "en": "Snow falls",
      "zh-TW": "下雪",
      "zh-CN": "下雪",
      "ko": "[Snow falls]",
      "vi": "[Snow falls]",
      "id": "[Snow falls]"
    }
  },
  {
    "id": "V0310",
    "w": "風",
    "r": "かぜ",
    "m": {
      "en": "wind",
      "zh-TW": "風",
      "zh-CN": "风",
      "ko": "바람",
      "vi": "Gió",
      "id": "Angin"
    },
    "ex": "風が吹く",
    "exm": {
      "en": "Wind blows",
      "zh-TW": "風吹",
      "zh-CN": "风吹",
      "ko": "[Wind blows]",
      "vi": "[Wind blows]",
      "id": "[Wind blows]"
    }
  },
  {
    "id": "V0311",
    "w": "春",
    "r": "はる",
    "m": {
      "en": "spring",
      "zh-TW": "春天",
      "zh-CN": "春天",
      "ko": "[spring]",
      "vi": "[spring]",
      "id": "[spring]"
    },
    "ex": "春が来た",
    "exm": {
      "en": "Spring came",
      "zh-TW": "春天來了",
      "zh-CN": "春天来了",
      "ko": "[Spring came]",
      "vi": "[Spring came]",
      "id": "[Spring came]"
    }
  },
  {
    "id": "V0312",
    "w": "夏",
    "r": "なつ",
    "m": {
      "en": "summer",
      "zh-TW": "夏天",
      "zh-CN": "夏天",
      "ko": "[summer]",
      "vi": "[summer]",
      "id": "[summer]"
    },
    "ex": "夏は暑い",
    "exm": {
      "en": "Summer is hot",
      "zh-TW": "夏天很熱",
      "zh-CN": "夏天很热",
      "ko": "[Summer is hot]",
      "vi": "[Summer is hot]",
      "id": "[Summer is hot]"
    }
  },
  {
    "id": "V0313",
    "w": "秋",
    "r": "あき",
    "m": {
      "en": "autumn",
      "zh-TW": "秋天",
      "zh-CN": "秋天",
      "ko": "[autumn]",
      "vi": "[autumn]",
      "id": "[autumn]"
    },
    "ex": "秋は涼しい",
    "exm": {
      "en": "Autumn is cool",
      "zh-TW": "秋天很涼爽",
      "zh-CN": "秋天很凉爽",
      "ko": "[Autumn is cool]",
      "vi": "[Autumn is cool]",
      "id": "[Autumn is cool]"
    }
  },
  {
    "id": "V0314",
    "w": "冬",
    "r": "ふゆ",
    "m": {
      "en": "winter",
      "zh-TW": "冬天",
      "zh-CN": "冬天",
      "ko": "[winter]",
      "vi": "[winter]",
      "id": "[winter]"
    },
    "ex": "冬は寒い",
    "exm": {
      "en": "Winter is cold",
      "zh-TW": "冬天很冷",
      "zh-CN": "冬天很冷",
      "ko": "[Winter is cold]",
      "vi": "[Winter is cold]",
      "id": "[Winter is cold]"
    }
  },
  {
    "id": "V0315",
    "w": "朝",
    "r": "あさ",
    "m": {
      "en": "morning",
      "zh-TW": "早上",
      "zh-CN": "早上",
      "ko": "아침",
      "vi": "Buổi sáng",
      "id": "Pagi"
    },
    "ex": "朝起きる",
    "exm": {
      "en": "Wake up morning",
      "zh-TW": "早上起床",
      "zh-CN": "早上起床",
      "ko": "[Wake up morning]",
      "vi": "[Wake up morning]",
      "id": "[Wake up morning]"
    }
  },
  {
    "id": "V0316",
    "w": "昼",
    "r": "ひる",
    "m": {
      "en": "noon",
      "zh-TW": "中午",
      "zh-CN": "中午",
      "ko": "[noon]",
      "vi": "[noon]",
      "id": "[noon]"
    },
    "ex": "昼ご飯を食べる",
    "exm": {
      "en": "Eat lunch",
      "zh-TW": "吃午餐",
      "zh-CN": "吃午餐",
      "ko": "[Eat lunch]",
      "vi": "[Eat lunch]",
      "id": "[Eat lunch]"
    }
  },
  {
    "id": "V0317",
    "w": "夜",
    "r": "よる",
    "m": {
      "en": "night",
      "zh-TW": "夜晚",
      "zh-CN": "夜晚",
      "ko": "밤",
      "vi": "Đêm",
      "id": "Malam"
    },
    "ex": "夜寝る",
    "exm": {
      "en": "Sleep at night",
      "zh-TW": "晚上睡覺",
      "zh-CN": "晚上睡觉",
      "ko": "[Sleep at night]",
      "vi": "[Sleep at night]",
      "id": "[Sleep at night]"
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
      "id": "Hari ini"
    },
    "ex": "今日は月曜日",
    "exm": {
      "en": "Today is Monday",
      "zh-TW": "今天是星期一",
      "zh-CN": "今天是星期一",
      "ko": "[Today is Monday]",
      "vi": "[Today is Monday]",
      "id": "[Today is Monday]"
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
      "id": "Besok"
    },
    "ex": "明日会おう",
    "exm": {
      "en": "Let's meet tomorrow",
      "zh-TW": "明天見",
      "zh-CN": "明天见",
      "ko": "[Let's meet tomorrow]",
      "vi": "[Let's meet tomorrow]",
      "id": "[Let's meet tomorrow]"
    }
  },
  {
    "id": "V0320",
    "w": "昨日",
    "r": "きのう",
    "m": {
      "en": "yesterday",
      "zh-TW": "昨天",
      "zh-CN": "昨天",
      "ko": "어제",
      "vi": "Hôm qua",
      "id": "Kemarin"
    },
    "ex": "昨日は休み",
    "exm": {
      "en": "Yesterday was off",
      "zh-TW": "昨天休息",
      "zh-CN": "昨天休息",
      "ko": "[Yesterday was off]",
      "vi": "[Yesterday was off]",
      "id": "[Yesterday was off]"
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
      "id": "Sekarang"
    },
    "ex": "今何時ですか",
    "exm": {
      "en": "What time now?",
      "zh-TW": "現在幾點",
      "zh-CN": "现在几点",
      "ko": "[What time now?]",
      "vi": "[What time now?]",
      "id": "[What time now?]"
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
      "ko": "[later]",
      "vi": "[later]",
      "id": "[later]"
    },
    "ex": "後で電話する",
    "exm": {
      "en": "Call later",
      "zh-TW": "之後打電話",
      "zh-CN": "之后打电话",
      "ko": "[Call later]",
      "vi": "[Call later]",
      "id": "[Call later]"
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
      "ko": "[Monday]",
      "vi": "[Monday]",
      "id": "[Monday]"
    },
    "ex": "月曜日に会う",
    "exm": {
      "en": "Meet on Monday",
      "zh-TW": "星期一見",
      "zh-CN": "星期一见",
      "ko": "[Meet on Monday]",
      "vi": "[Meet on Monday]",
      "id": "[Meet on Monday]"
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
      "ko": "[Tuesday]",
      "vi": "[Tuesday]",
      "id": "[Tuesday]"
    },
    "ex": "火曜日は休み",
    "exm": {
      "en": "Tuesday off",
      "zh-TW": "星期二休息",
      "zh-CN": "星期二休息",
      "ko": "[Tuesday off]",
      "vi": "[Tuesday off]",
      "id": "[Tuesday off]"
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
      "ko": "[Wednesday]",
      "vi": "[Wednesday]",
      "id": "[Wednesday]"
    },
    "ex": "水曜日に来る",
    "exm": {
      "en": "Come Wednesday",
      "zh-TW": "星期三來",
      "zh-CN": "星期三来",
      "ko": "[Come Wednesday]",
      "vi": "[Come Wednesday]",
      "id": "[Come Wednesday]"
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
      "ko": "[Thursday]",
      "vi": "[Thursday]",
      "id": "[Thursday]"
    },
    "ex": "木曜日は忙しい",
    "exm": {
      "en": "Thursday busy",
      "zh-TW": "星期四很忙",
      "zh-CN": "星期四很忙",
      "ko": "[Thursday busy]",
      "vi": "[Thursday busy]",
      "id": "[Thursday busy]"
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
      "ko": "[Friday]",
      "vi": "[Friday]",
      "id": "[Friday]"
    },
    "ex": "金曜日に終わる",
    "exm": {
      "en": "Finish Friday",
      "zh-TW": "星期五結束",
      "zh-CN": "星期五结束",
      "ko": "[Finish Friday]",
      "vi": "[Finish Friday]",
      "id": "[Finish Friday]"
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
      "ko": "[Saturday]",
      "vi": "[Saturday]",
      "id": "[Saturday]"
    },
    "ex": "土曜日に遊ぶ",
    "exm": {
      "en": "Play Saturday",
      "zh-TW": "星期六玩",
      "zh-CN": "星期六玩",
      "ko": "[Play Saturday]",
      "vi": "[Play Saturday]",
      "id": "[Play Saturday]"
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
      "ko": "[Sunday]",
      "vi": "[Sunday]",
      "id": "[Sunday]"
    },
    "ex": "日曜日は休み",
    "exm": {
      "en": "Sunday off",
      "zh-TW": "星期日休息",
      "zh-CN": "星期日休息",
      "ko": "[Sunday off]",
      "vi": "[Sunday off]",
      "id": "[Sunday off]"
    }
  },
  {
    "id": "V0330",
    "w": "週末",
    "r": "しゅうまつ",
    "m": {
      "en": "weekend",
      "zh-TW": "週末",
      "zh-CN": "周末",
      "ko": "[weekend]",
      "vi": "[weekend]",
      "id": "[weekend]"
    },
    "ex": "週末に旅行",
    "exm": {
      "en": "Travel weekend",
      "zh-TW": "週末旅行",
      "zh-CN": "周末旅行",
      "ko": "[Travel weekend]",
      "vi": "[Travel weekend]",
      "id": "[Travel weekend]"
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
      "ko": "[this week]",
      "vi": "[this week]",
      "id": "[this week]"
    },
    "ex": "今週は忙しい",
    "exm": {
      "en": "This week busy",
      "zh-TW": "這週很忙",
      "zh-CN": "这周很忙",
      "ko": "[This week busy]",
      "vi": "[This week busy]",
      "id": "[This week busy]"
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
      "ko": "[next week]",
      "vi": "[next week]",
      "id": "[next week]"
    },
    "ex": "来週会おう",
    "exm": {
      "en": "Meet next week",
      "zh-TW": "下週見",
      "zh-CN": "下周见",
      "ko": "[Meet next week]",
      "vi": "[Meet next week]",
      "id": "[Meet next week]"
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
      "ko": "[last week]",
      "vi": "[last week]",
      "id": "[last week]"
    },
    "ex": "先週行った",
    "exm": {
      "en": "Went last week",
      "zh-TW": "上週去了",
      "zh-CN": "上周去了",
      "ko": "[Went last week]",
      "vi": "[Went last week]",
      "id": "[Went last week]"
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
      "ko": "[this month]",
      "vi": "[this month]",
      "id": "[this month]"
    },
    "ex": "今月は忙しい",
    "exm": {
      "en": "This month busy",
      "zh-TW": "這個月很忙",
      "zh-CN": "这个月很忙",
      "ko": "[This month busy]",
      "vi": "[This month busy]",
      "id": "[This month busy]"
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
      "ko": "[next month]",
      "vi": "[next month]",
      "id": "[next month]"
    },
    "ex": "来月旅行する",
    "exm": {
      "en": "Travel next month",
      "zh-TW": "下個月旅行",
      "zh-CN": "下个月旅行",
      "ko": "[Travel next month]",
      "vi": "[Travel next month]",
      "id": "[Travel next month]"
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
      "ko": "[last month]",
      "vi": "[last month]",
      "id": "[last month]"
    },
    "ex": "先月買った",
    "exm": {
      "en": "Bought last month",
      "zh-TW": "上個月買的",
      "zh-CN": "上个月买的",
      "ko": "[Bought last month]",
      "vi": "[Bought last month]",
      "id": "[Bought last month]"
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
      "ko": "[this year]",
      "vi": "[this year]",
      "id": "[this year]"
    },
    "ex": "今年は2024年",
    "exm": {
      "en": "This year 2024",
      "zh-TW": "今年2024年",
      "zh-CN": "今年2024年",
      "ko": "[This year 2024]",
      "vi": "[This year 2024]",
      "id": "[This year 2024]"
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
      "ko": "[next year]",
      "vi": "[next year]",
      "id": "[next year]"
    },
    "ex": "来年結婚する",
    "exm": {
      "en": "Marry next year",
      "zh-TW": "明年結婚",
      "zh-CN": "明年结婚",
      "ko": "[Marry next year]",
      "vi": "[Marry next year]",
      "id": "[Marry next year]"
    }
  },
  {
    "id": "V0339",
    "w": "去年",
    "r": "きょねん",
    "m": {
      "en": "last year",
      "zh-TW": "去年",
      "zh-CN": "去年",
      "ko": "[last year]",
      "vi": "[last year]",
      "id": "[last year]"
    },
    "ex": "去年日本に行った",
    "exm": {
      "en": "Went Japan last year",
      "zh-TW": "去年去日本",
      "zh-CN": "去年去日本",
      "ko": "[Went Japan last year]",
      "vi": "[Went Japan last year]",
      "id": "[Went Japan last year]"
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
      "ko": "[every day]",
      "vi": "[every day]",
      "id": "[every day]"
    },
    "ex": "毎日勉強する",
    "exm": {
      "en": "Study daily",
      "zh-TW": "每天學習",
      "zh-CN": "每天学习",
      "ko": "[Study daily]",
      "vi": "[Study daily]",
      "id": "[Study daily]"
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
      "ko": "[every week]",
      "vi": "[every week]",
      "id": "[every week]"
    },
    "ex": "毎週日曜日に",
    "exm": {
      "en": "Every Sunday",
      "zh-TW": "每週日",
      "zh-CN": "每周日",
      "ko": "[Every Sunday]",
      "vi": "[Every Sunday]",
      "id": "[Every Sunday]"
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
      "ko": "[every month]",
      "vi": "[every month]",
      "id": "[every month]"
    },
    "ex": "毎月一回",
    "exm": {
      "en": "Once a month",
      "zh-TW": "每月一次",
      "zh-CN": "每月一次",
      "ko": "[Once a month]",
      "vi": "[Once a month]",
      "id": "[Once a month]"
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
      "ko": "[every year]",
      "vi": "[every year]",
      "id": "[every year]"
    },
    "ex": "毎年旅行する",
    "exm": {
      "en": "Travel yearly",
      "zh-TW": "每年旅行",
      "zh-CN": "每年旅行",
      "ko": "[Travel yearly]",
      "vi": "[Travel yearly]",
      "id": "[Travel yearly]"
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
      "id": "Waktu"
    },
    "ex": "時間がない",
    "exm": {
      "en": "No time",
      "zh-TW": "沒時間",
      "zh-CN": "没时间",
      "ko": "[No time]",
      "vi": "[No time]",
      "id": "[No time]"
    }
  },
  {
    "id": "V0345",
    "w": "午前",
    "r": "ごぜん",
    "m": {
      "en": "morning/AM",
      "zh-TW": "上午",
      "zh-CN": "上午",
      "ko": "[morning/AM]",
      "vi": "[morning/AM]",
      "id": "[morning/AM]"
    },
    "ex": "午前中に",
    "exm": {
      "en": "In the morning",
      "zh-TW": "在上午",
      "zh-CN": "在上午",
      "ko": "[In the morning]",
      "vi": "[In the morning]",
      "id": "[In the morning]"
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
      "ko": "[afternoon/PM]",
      "vi": "[afternoon/PM]",
      "id": "[afternoon/PM]"
    },
    "ex": "午後に会う",
    "exm": {
      "en": "Meet afternoon",
      "zh-TW": "下午見",
      "zh-CN": "下午见",
      "ko": "[Meet afternoon]",
      "vi": "[Meet afternoon]",
      "id": "[Meet afternoon]"
    }
  },
  {
    "id": "V0347",
    "w": "晩",
    "r": "ばん",
    "m": {
      "en": "evening",
      "zh-TW": "晚上",
      "zh-CN": "晚上",
      "ko": "저녁",
      "vi": "Buổi tối",
      "id": "Malam"
    },
    "ex": "晩ご飯を食べる",
    "exm": {
      "en": "Eat dinner",
      "zh-TW": "吃晚餐",
      "zh-CN": "吃晚餐",
      "ko": "[Eat dinner]",
      "vi": "[Eat dinner]",
      "id": "[Eat dinner]"
    }
  },
  {
    "id": "V0348",
    "w": "夕方",
    "r": "ゆうがた",
    "m": {
      "en": "evening",
      "zh-TW": "晚上",
      "zh-CN": "晚上",
      "ko": "저녁",
      "vi": "Buổi tối",
      "id": "Malam"
    },
    "ex": "夕方に帰る",
    "exm": {
      "en": "Return evening",
      "zh-TW": "傍晚回來",
      "zh-CN": "傍晚回来",
      "ko": "[Return evening]",
      "vi": "[Return evening]",
      "id": "[Return evening]"
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
      "id": "Menit"
    },
    "ex": "10分待つ",
    "exm": {
      "en": "Wait 10 minutes",
      "zh-TW": "等10分鐘",
      "zh-CN": "等10分钟",
      "ko": "[Wait 10 minutes]",
      "vi": "[Wait 10 minutes]",
      "id": "[Wait 10 minutes]"
    }
  },
  {
    "id": "V0350",
    "w": "秒",
    "r": "びょう",
    "m": {
      "en": "second",
      "zh-TW": "秒",
      "zh-CN": "秒",
      "ko": "초",
      "vi": "Giây",
      "id": "Detik"
    },
    "ex": "30秒待つ",
    "exm": {
      "en": "Wait 30 seconds",
      "zh-TW": "等30秒",
      "zh-CN": "等30秒",
      "ko": "[Wait 30 seconds]",
      "vi": "[Wait 30 seconds]",
      "id": "[Wait 30 seconds]"
    }
  },
  {
    "id": "V0351",
    "w": "物",
    "r": "もの",
    "m": {
      "en": "thing",
      "zh-TW": "東西",
      "zh-CN": "东西",
      "ko": "[thing]",
      "vi": "[thing]",
      "id": "[thing]"
    },
    "ex": "何か物を買う",
    "exm": {
      "en": "Buy something",
      "zh-TW": "買東西",
      "zh-CN": "买东西",
      "ko": "[Buy something]",
      "vi": "[Buy something]",
      "id": "[Buy something]"
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
      "id": "Uang"
    },
    "ex": "お金を払う",
    "exm": {
      "en": "Pay money",
      "zh-TW": "付錢",
      "zh-CN": "付钱",
      "ko": "[Pay money]",
      "vi": "[Pay money]",
      "id": "[Pay money]"
    }
  },
  {
    "id": "V0353",
    "w": "財布",
    "r": "さいふ",
    "m": {
      "en": "wallet",
      "zh-TW": "錢包",
      "zh-CN": "钱包",
      "ko": "[wallet]",
      "vi": "[wallet]",
      "id": "[wallet]"
    },
    "ex": "財布を落とす",
    "exm": {
      "en": "Drop wallet",
      "zh-TW": "掉錢包",
      "zh-CN": "掉钱包",
      "ko": "[Drop wallet]",
      "vi": "[Drop wallet]",
      "id": "[Drop wallet]"
    }
  },
  {
    "id": "V0354",
    "w": "鍵",
    "r": "かぎ",
    "m": {
      "en": "key",
      "zh-TW": "鑰匙",
      "zh-CN": "钥匙",
      "ko": "[key]",
      "vi": "[key]",
      "id": "[key]"
    },
    "ex": "鍵をかける",
    "exm": {
      "en": "Lock",
      "zh-TW": "鎖門",
      "zh-CN": "锁门",
      "ko": "[Lock]",
      "vi": "[Lock]",
      "id": "[Lock]"
    }
  },
  {
    "id": "V0355",
    "w": "傘",
    "r": "かさ",
    "m": {
      "en": "umbrella",
      "zh-TW": "雨傘",
      "zh-CN": "雨伞",
      "ko": "우산",
      "vi": "Ô",
      "id": "Payung"
    },
    "ex": "傘を持つ",
    "exm": {
      "en": "Bring umbrella",
      "zh-TW": "帶傘",
      "zh-CN": "带伞",
      "ko": "[Bring umbrella]",
      "vi": "[Bring umbrella]",
      "id": "[Bring umbrella]"
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
      "id": "Tas"
    },
    "ex": "かばんを持つ",
    "exm": {
      "en": "Carry bag",
      "zh-TW": "拿包",
      "zh-CN": "拿包",
      "ko": "[Carry bag]",
      "vi": "[Carry bag]",
      "id": "[Carry bag]"
    }
  },
  {
    "id": "V0357",
    "w": "荷物",
    "r": "にもつ",
    "m": {
      "en": "luggage",
      "zh-TW": "行李",
      "zh-CN": "行李",
      "ko": "[luggage]",
      "vi": "[luggage]",
      "id": "[luggage]"
    },
    "ex": "荷物を預ける",
    "exm": {
      "en": "Check luggage",
      "zh-TW": "寄放行李",
      "zh-CN": "寄放行李",
      "ko": "[Check luggage]",
      "vi": "[Check luggage]",
      "id": "[Check luggage]"
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
      "id": "Buku"
    },
    "ex": "本を読む",
    "exm": {
      "en": "Read book",
      "zh-TW": "看書",
      "zh-CN": "看书",
      "ko": "[Read book]",
      "vi": "[Read book]",
      "id": "[Read book]"
    }
  },
  {
    "id": "V0359",
    "w": "雑誌",
    "r": "ざっし",
    "m": {
      "en": "magazine",
      "zh-TW": "雜誌",
      "zh-CN": "杂志",
      "ko": "[magazine]",
      "vi": "[magazine]",
      "id": "[magazine]"
    },
    "ex": "雑誌を買う",
    "exm": {
      "en": "Buy magazine",
      "zh-TW": "買雜誌",
      "zh-CN": "买杂志",
      "ko": "[Buy magazine]",
      "vi": "[Buy magazine]",
      "id": "[Buy magazine]"
    }
  },
  {
    "id": "V0360",
    "w": "新聞",
    "r": "しんぶん",
    "m": {
      "en": "newspaper",
      "zh-TW": "報紙",
      "zh-CN": "报纸",
      "ko": "새롭다",
      "vi": "mới",
      "id": "baru"
    },
    "ex": "新聞を読む",
    "exm": {
      "en": "Read newspaper",
      "zh-TW": "看報紙",
      "zh-CN": "看报纸",
      "ko": "[Read newspaper]",
      "vi": "[Read newspaper]",
      "id": "[Read newspaper]"
    }
  },
  {
    "id": "V0361",
    "w": "手紙",
    "r": "てがみ",
    "m": {
      "en": "letter",
      "zh-TW": "信",
      "zh-CN": "信",
      "ko": "[letter]",
      "vi": "[letter]",
      "id": "[letter]"
    },
    "ex": "手紙を書く",
    "exm": {
      "en": "Write letter",
      "zh-TW": "寫信",
      "zh-CN": "写信",
      "ko": "[Write letter]",
      "vi": "[Write letter]",
      "id": "[Write letter]"
    }
  },
  {
    "id": "V0362",
    "w": "写真",
    "r": "しゃしん",
    "m": {
      "en": "photo",
      "zh-TW": "照片",
      "zh-CN": "照片",
      "ko": "사진",
      "vi": "Ảnh",
      "id": "Foto"
    },
    "ex": "写真を撮る",
    "exm": {
      "en": "Take photo",
      "zh-TW": "拍照",
      "zh-CN": "拍照",
      "ko": "[Take photo]",
      "vi": "[Take photo]",
      "id": "[Take photo]"
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
      "ko": "[picture]",
      "vi": "[picture]",
      "id": "[picture]"
    },
    "ex": "絵を描く",
    "exm": {
      "en": "Draw picture",
      "zh-TW": "畫畫",
      "zh-CN": "画画",
      "ko": "[Draw picture]",
      "vi": "[Draw picture]",
      "id": "[Draw picture]"
    }
  },
  {
    "id": "V0364",
    "w": "地図",
    "r": "ちず",
    "m": {
      "en": "map",
      "zh-TW": "地圖",
      "zh-CN": "地图",
      "ko": "[map]",
      "vi": "[map]",
      "id": "[map]"
    },
    "ex": "地図を見る",
    "exm": {
      "en": "Look at map",
      "zh-TW": "看地圖",
      "zh-CN": "看地图",
      "ko": "[Look at map]",
      "vi": "[Look at map]",
      "id": "[Look at map]"
    }
  },
  {
    "id": "V0365",
    "w": "紙",
    "r": "かみ",
    "m": {
      "en": "paper",
      "zh-TW": "紙",
      "zh-CN": "纸",
      "ko": "종이",
      "vi": "Giấy",
      "id": "Kertas"
    },
    "ex": "紙に書く",
    "exm": {
      "en": "Write on paper",
      "zh-TW": "寫在紙上",
      "zh-CN": "写在纸上",
      "ko": "[Write on paper]",
      "vi": "[Write on paper]",
      "id": "[Write on paper]"
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
      "id": "Pena"
    },
    "ex": "ペンで書く",
    "exm": {
      "en": "Write with pen",
      "zh-TW": "用筆寫",
      "zh-CN": "用笔写",
      "ko": "[Write with pen]",
      "vi": "[Write with pen]",
      "id": "[Write with pen]"
    }
  },
  {
    "id": "V0367",
    "w": "鉛筆",
    "r": "えんぴつ",
    "m": {
      "en": "pencil",
      "zh-TW": "鉛筆",
      "zh-CN": "铅笔",
      "ko": "연필",
      "vi": "Bút chì",
      "id": "Pensil"
    },
    "ex": "鉛筆で書く",
    "exm": {
      "en": "Write with pencil",
      "zh-TW": "用鉛筆寫",
      "zh-CN": "用铅笔写",
      "ko": "[Write with pencil]",
      "vi": "[Write with pencil]",
      "id": "[Write with pencil]"
    }
  },
  {
    "id": "V0368",
    "w": "消しゴム",
    "r": "けしゴム",
    "m": {
      "en": "eraser",
      "zh-TW": "橡皮擦",
      "zh-CN": "橡皮擦",
      "ko": "[eraser]",
      "vi": "[eraser]",
      "id": "[eraser]"
    },
    "ex": "消しゴムで消す",
    "exm": {
      "en": "Erase with eraser",
      "zh-TW": "用橡皮擦擦",
      "zh-CN": "用橡皮擦擦",
      "ko": "[Erase with eraser]",
      "vi": "[Erase with eraser]",
      "id": "[Erase with eraser]"
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
      "id": "Buku catatan"
    },
    "ex": "ノートに書く",
    "exm": {
      "en": "Write in notebook",
      "zh-TW": "寫在筆記本",
      "zh-CN": "写在笔记本",
      "ko": "[Write in notebook]",
      "vi": "[Write in notebook]",
      "id": "[Write in notebook]"
    }
  },
  {
    "id": "V0370",
    "w": "辞書",
    "r": "じしょ",
    "m": {
      "en": "dictionary",
      "zh-TW": "字典",
      "zh-CN": "字典",
      "ko": "사전",
      "vi": "Từ điển",
      "id": "Kamus"
    },
    "ex": "辞書で調べる",
    "exm": {
      "en": "Look up dictionary",
      "zh-TW": "查字典",
      "zh-CN": "查字典",
      "ko": "[Look up dictionary]",
      "vi": "[Look up dictionary]",
      "id": "[Look up dictionary]"
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
      "id": "Telepon"
    },
    "ex": "電話をかける",
    "exm": {
      "en": "Make call",
      "zh-TW": "打電話",
      "zh-CN": "打电话",
      "ko": "[Make call]",
      "vi": "[Make call]",
      "id": "[Make call]"
    }
  },
  {
    "id": "V0372",
    "w": "携帯",
    "r": "けいたい",
    "m": {
      "en": "mobile phone",
      "zh-TW": "手機",
      "zh-CN": "手机",
      "ko": "[mobile phone]",
      "vi": "[mobile phone]",
      "id": "[mobile phone]"
    },
    "ex": "携帯を使う",
    "exm": {
      "en": "Use mobile",
      "zh-TW": "使用手機",
      "zh-CN": "使用手机",
      "ko": "[Use mobile]",
      "vi": "[Use mobile]",
      "id": "[Use mobile]"
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
      "ko": "[computer]",
      "vi": "[computer]",
      "id": "[computer]"
    },
    "ex": "パソコンで仕事",
    "exm": {
      "en": "Work on PC",
      "zh-TW": "用電腦工作",
      "zh-CN": "用电脑工作",
      "ko": "[Work on PC]",
      "vi": "[Work on PC]",
      "id": "[Work on PC]"
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
      "ko": "[television]",
      "vi": "[television]",
      "id": "[television]"
    },
    "ex": "テレビを見る",
    "exm": {
      "en": "Watch TV",
      "zh-TW": "看電視",
      "zh-CN": "看电视",
      "ko": "[Watch TV]",
      "vi": "[Watch TV]",
      "id": "[Watch TV]"
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
      "ko": "[camera]",
      "vi": "[camera]",
      "id": "[camera]"
    },
    "ex": "カメラで撮る",
    "exm": {
      "en": "Take with camera",
      "zh-TW": "用相機拍",
      "zh-CN": "用相机拍",
      "ko": "[Take with camera]",
      "vi": "[Take with camera]",
      "id": "[Take with camera]"
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
      "ko": "[watch/clock]",
      "vi": "[watch/clock]",
      "id": "[watch/clock]"
    },
    "ex": "時計を見る",
    "exm": {
      "en": "Look at watch",
      "zh-TW": "看手錶",
      "zh-CN": "看手表",
      "ko": "[Look at watch]",
      "vi": "[Look at watch]",
      "id": "[Look at watch]"
    }
  },
  {
    "id": "V0377",
    "w": "眼鏡",
    "r": "めがね",
    "m": {
      "en": "glasses",
      "zh-TW": "眼鏡",
      "zh-CN": "眼镜",
      "ko": "[glasses]",
      "vi": "[glasses]",
      "id": "[glasses]"
    },
    "ex": "眼鏡をかける",
    "exm": {
      "en": "Wear glasses",
      "zh-TW": "戴眼鏡",
      "zh-CN": "戴眼镜",
      "ko": "[Wear glasses]",
      "vi": "[Wear glasses]",
      "id": "[Wear glasses]"
    }
  },
  {
    "id": "V0378",
    "w": "机",
    "r": "つくえ",
    "m": {
      "en": "desk",
      "zh-TW": "桌子",
      "zh-CN": "桌子",
      "ko": "책상",
      "vi": "Bàn",
      "id": "Meja"
    },
    "ex": "机で勉強する",
    "exm": {
      "en": "Study at desk",
      "zh-TW": "在書桌學習",
      "zh-CN": "在书桌学习",
      "ko": "[Study at desk]",
      "vi": "[Study at desk]",
      "id": "[Study at desk]"
    }
  },
  {
    "id": "V0379",
    "w": "椅子",
    "r": "いす",
    "m": {
      "en": "chair",
      "zh-TW": "椅子",
      "zh-CN": "椅子",
      "ko": "의자",
      "vi": "Ghế",
      "id": "Kursi"
    },
    "ex": "椅子に座る",
    "exm": {
      "en": "Sit on chair",
      "zh-TW": "坐椅子",
      "zh-CN": "坐椅子",
      "ko": "[Sit on chair]",
      "vi": "[Sit on chair]",
      "id": "[Sit on chair]"
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
      "ko": "[bed]",
      "vi": "[bed]",
      "id": "[bed]"
    },
    "ex": "ベッドで寝る",
    "exm": {
      "en": "Sleep in bed",
      "zh-TW": "在床上睡覺",
      "zh-CN": "在床上睡觉",
      "ko": "[Sleep in bed]",
      "vi": "[Sleep in bed]",
      "id": "[Sleep in bed]"
    }
  },
  {
    "id": "V0381",
    "w": "窓",
    "r": "まど",
    "m": {
      "en": "window",
      "zh-TW": "窗戶",
      "zh-CN": "窗户",
      "ko": "창문",
      "vi": "Cửa sổ",
      "id": "Jendela"
    },
    "ex": "窓を開ける",
    "exm": {
      "en": "Open window",
      "zh-TW": "開窗",
      "zh-CN": "开窗",
      "ko": "[Open window]",
      "vi": "[Open window]",
      "id": "[Open window]"
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
      "id": "Pintu"
    },
    "ex": "ドアを閉める",
    "exm": {
      "en": "Close door",
      "zh-TW": "關門",
      "zh-CN": "关门",
      "ko": "[Close door]",
      "vi": "[Close door]",
      "id": "[Close door]"
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
      "ko": "[electricity]",
      "vi": "[electricity]",
      "id": "[electricity]"
    },
    "ex": "電気をつける",
    "exm": {
      "en": "Turn on light",
      "zh-TW": "開燈",
      "zh-CN": "开灯",
      "ko": "[Turn on light]",
      "vi": "[Turn on light]",
      "id": "[Turn on light]"
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
      "ko": "[air conditioner]",
      "vi": "[air conditioner]",
      "id": "[air conditioner]"
    },
    "ex": "エアコンをつける",
    "exm": {
      "en": "Turn on AC",
      "zh-TW": "開冷氣",
      "zh-CN": "开空调",
      "ko": "[Turn on AC]",
      "vi": "[Turn on AC]",
      "id": "[Turn on AC]"
    }
  },
  {
    "id": "V0385",
    "w": "冷蔵庫",
    "r": "れいぞうこ",
    "m": {
      "en": "refrigerator",
      "zh-TW": "冰箱",
      "zh-CN": "冰箱",
      "ko": "[refrigerator]",
      "vi": "[refrigerator]",
      "id": "[refrigerator]"
    },
    "ex": "冷蔵庫に入れる",
    "exm": {
      "en": "Put in fridge",
      "zh-TW": "放進冰箱",
      "zh-CN": "放进冰箱",
      "ko": "[Put in fridge]",
      "vi": "[Put in fridge]",
      "id": "[Put in fridge]"
    }
  },
  {
    "id": "V0386",
    "w": "洗濯機",
    "r": "せんたくき",
    "m": {
      "en": "washing machine",
      "zh-TW": "洗衣機",
      "zh-CN": "洗衣机",
      "ko": "[washing machine]",
      "vi": "[washing machine]",
      "id": "[washing machine]"
    },
    "ex": "洗濯機で洗う",
    "exm": {
      "en": "Wash in machine",
      "zh-TW": "用洗衣機洗",
      "zh-CN": "用洗衣机洗",
      "ko": "[Wash in machine]",
      "vi": "[Wash in machine]",
      "id": "[Wash in machine]"
    }
  },
  {
    "id": "V0387",
    "w": "ご飯",
    "r": "ごはん",
    "m": {
      "en": "rice/meal",
      "zh-TW": "飯",
      "zh-CN": "饭",
      "ko": "[rice/meal]",
      "vi": "[rice/meal]",
      "id": "[rice/meal]"
    },
    "ex": "ご飯を食べる",
    "exm": {
      "en": "Eat rice",
      "zh-TW": "吃飯",
      "zh-CN": "吃饭",
      "ko": "[Eat rice]",
      "vi": "[Eat rice]",
      "id": "[Eat rice]"
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
      "id": "Roti"
    },
    "ex": "パンを食べる",
    "exm": {
      "en": "Eat bread",
      "zh-TW": "吃麵包",
      "zh-CN": "吃面包",
      "ko": "[Eat bread]",
      "vi": "[Eat bread]",
      "id": "[Eat bread]"
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
      "id": "Daging"
    },
    "ex": "肉を食べる",
    "exm": {
      "en": "Eat meat",
      "zh-TW": "吃肉",
      "zh-CN": "吃肉",
      "ko": "[Eat meat]",
      "vi": "[Eat meat]",
      "id": "[Eat meat]"
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
      "id": "Ikan"
    },
    "ex": "魚を食べる",
    "exm": {
      "en": "Eat fish",
      "zh-TW": "吃魚",
      "zh-CN": "吃鱼",
      "ko": "[Eat fish]",
      "vi": "[Eat fish]",
      "id": "[Eat fish]"
    }
  },
  {
    "id": "V0391",
    "w": "野菜",
    "r": "やさい",
    "m": {
      "en": "vegetable",
      "zh-TW": "蔬菜",
      "zh-CN": "蔬菜",
      "ko": "야채",
      "vi": "Rau",
      "id": "Sayuran"
    },
    "ex": "野菜を食べる",
    "exm": {
      "en": "Eat vegetables",
      "zh-TW": "吃蔬菜",
      "zh-CN": "吃蔬菜",
      "ko": "[Eat vegetables]",
      "vi": "[Eat vegetables]",
      "id": "[Eat vegetables]"
    }
  },
  {
    "id": "V0392",
    "w": "果物",
    "r": "くだもの",
    "m": {
      "en": "fruit",
      "zh-TW": "水果",
      "zh-CN": "水果",
      "ko": "과일",
      "vi": "Trái cây",
      "id": "Buah"
    },
    "ex": "果物を食べる",
    "exm": {
      "en": "Eat fruit",
      "zh-TW": "吃水果",
      "zh-CN": "吃水果",
      "ko": "[Eat fruit]",
      "vi": "[Eat fruit]",
      "id": "[Eat fruit]"
    }
  },
  {
    "id": "V0393",
    "w": "卵",
    "r": "たまご",
    "m": {
      "en": "egg",
      "zh-TW": "蛋",
      "zh-CN": "蛋",
      "ko": "달걀",
      "vi": "Trứng",
      "id": "Telur"
    },
    "ex": "卵を食べる",
    "exm": {
      "en": "Eat egg",
      "zh-TW": "吃蛋",
      "zh-CN": "吃蛋",
      "ko": "[Eat egg]",
      "vi": "[Eat egg]",
      "id": "[Eat egg]"
    }
  },
  {
    "id": "V0394",
    "w": "牛乳",
    "r": "ぎゅうにゅう",
    "m": {
      "en": "milk",
      "zh-TW": "牛奶",
      "zh-CN": "牛奶",
      "ko": "우유",
      "vi": "Sữa",
      "id": "Susu"
    },
    "ex": "牛乳を飲む",
    "exm": {
      "en": "Drink milk",
      "zh-TW": "喝牛奶",
      "zh-CN": "喝牛奶",
      "ko": "[Drink milk]",
      "vi": "[Drink milk]",
      "id": "[Drink milk]"
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
      "id": "Air"
    },
    "ex": "水を飲む",
    "exm": {
      "en": "Drink water",
      "zh-TW": "喝水",
      "zh-CN": "喝水",
      "ko": "[Drink water]",
      "vi": "[Drink water]",
      "id": "[Drink water]"
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
      "id": "Teh"
    },
    "ex": "お茶を飲む",
    "exm": {
      "en": "Drink tea",
      "zh-TW": "喝茶",
      "zh-CN": "喝茶",
      "ko": "[Drink tea]",
      "vi": "[Drink tea]",
      "id": "[Drink tea]"
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
      "id": "Kopi"
    },
    "ex": "コーヒーを飲む",
    "exm": {
      "en": "Drink coffee",
      "zh-TW": "喝咖啡",
      "zh-CN": "喝咖啡",
      "ko": "[Drink coffee]",
      "vi": "[Drink coffee]",
      "id": "[Drink coffee]"
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
      "ko": "[juice]",
      "vi": "[juice]",
      "id": "[juice]"
    },
    "ex": "ジュースを飲む",
    "exm": {
      "en": "Drink juice",
      "zh-TW": "喝果汁",
      "zh-CN": "喝果汁",
      "ko": "[Drink juice]",
      "vi": "[Drink juice]",
      "id": "[Drink juice]"
    }
  },
  {
    "id": "V0399",
    "w": "お酒",
    "r": "おさけ",
    "m": {
      "en": "alcohol",
      "zh-TW": "酒",
      "zh-CN": "酒",
      "ko": "[alcohol]",
      "vi": "[alcohol]",
      "id": "[alcohol]"
    },
    "ex": "お酒を飲む",
    "exm": {
      "en": "Drink alcohol",
      "zh-TW": "喝酒",
      "zh-CN": "喝酒",
      "ko": "[Drink alcohol]",
      "vi": "[Drink alcohol]",
      "id": "[Drink alcohol]"
    }
  },
  {
    "id": "V0400",
    "w": "料理",
    "r": "りょうり",
    "m": {
      "en": "cooking/dish",
      "zh-TW": "料理",
      "zh-CN": "料理",
      "ko": "[cooking/dish]",
      "vi": "[cooking/dish]",
      "id": "[cooking/dish]"
    },
    "ex": "料理を作る",
    "exm": {
      "en": "Make dish",
      "zh-TW": "做菜",
      "zh-CN": "做菜",
      "ko": "[Make dish]",
      "vi": "[Make dish]",
      "id": "[Make dish]"
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
      "id": "Besar"
    },
    "ex": "大きい家",
    "exm": {
      "en": "Big house",
      "zh-TW": "大房子",
      "zh-CN": "大房子",
      "ko": "[Big house]",
      "vi": "[Big house]",
      "id": "[Big house]"
    }
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
      "id": "Kecil"
    },
    "ex": "小さい犬",
    "exm": {
      "en": "Small dog",
      "zh-TW": "小狗",
      "zh-CN": "小狗",
      "ko": "[Small dog]",
      "vi": "[Small dog]",
      "id": "[Small dog]"
    }
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
      "id": "tinggi"
    },
    "ex": "高いビル",
    "exm": {
      "en": "Tall building",
      "zh-TW": "高樓",
      "zh-CN": "高楼",
      "ko": "[Tall building]",
      "vi": "[Tall building]",
      "id": "[Tall building]"
    }
  },
  {
    "id": "V0404",
    "w": "安い",
    "r": "やすい",
    "m": {
      "en": "cheap",
      "zh-TW": "便宜",
      "zh-CN": "便宜",
      "ko": "싼",
      "vi": "Rẻ",
      "id": "Murah"
    },
    "ex": "安い店",
    "exm": {
      "en": "Cheap shop",
      "zh-TW": "便宜的店",
      "zh-CN": "便宜的店",
      "ko": "[Cheap shop]",
      "vi": "[Cheap shop]",
      "id": "[Cheap shop]"
    }
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
      "id": "Panjang"
    },
    "ex": "長い髪",
    "exm": {
      "en": "Long hair",
      "zh-TW": "長頭髮",
      "zh-CN": "长头发",
      "ko": "[Long hair]",
      "vi": "[Long hair]",
      "id": "[Long hair]"
    }
  },
  {
    "id": "V0406",
    "w": "短い",
    "r": "みじかい",
    "m": {
      "en": "short",
      "zh-TW": "短",
      "zh-CN": "短",
      "ko": "짧은",
      "vi": "Ngắn",
      "id": "Pendek"
    },
    "ex": "短いスカート",
    "exm": {
      "en": "Short skirt",
      "zh-TW": "短裙",
      "zh-CN": "短裙",
      "ko": "[Short skirt]",
      "vi": "[Short skirt]",
      "id": "[Short skirt]"
    }
  },
  {
    "id": "V0407",
    "w": "新しい",
    "r": "あたらしい",
    "m": {
      "en": "new",
      "zh-TW": "新",
      "zh-CN": "新",
      "ko": "새로운",
      "vi": "Mới",
      "id": "Baru"
    },
    "ex": "新しい車",
    "exm": {
      "en": "New car",
      "zh-TW": "新車",
      "zh-CN": "新车",
      "ko": "[New car]",
      "vi": "[New car]",
      "id": "[New car]"
    }
  },
  {
    "id": "V0408",
    "w": "古い",
    "r": "ふるい",
    "m": {
      "en": "old",
      "zh-TW": "舊",
      "zh-CN": "旧",
      "ko": "오래된",
      "vi": "Cũ",
      "id": "Lama"
    },
    "ex": "古い家",
    "exm": {
      "en": "Old house",
      "zh-TW": "舊房子",
      "zh-CN": "旧房子",
      "ko": "[Old house]",
      "vi": "[Old house]",
      "id": "[Old house]"
    }
  },
  {
    "id": "V0409",
    "w": "良い",
    "r": "よい",
    "m": {
      "en": "good",
      "zh-TW": "好",
      "zh-CN": "好",
      "ko": "좋은",
      "vi": "Tốt",
      "id": "Bagus"
    },
    "ex": "良い天気",
    "exm": {
      "en": "Good weather",
      "zh-TW": "好天氣",
      "zh-CN": "好天气",
      "ko": "[Good weather]",
      "vi": "[Good weather]",
      "id": "[Good weather]"
    }
  },
  {
    "id": "V0410",
    "w": "悪い",
    "r": "わるい",
    "m": {
      "en": "bad",
      "zh-TW": "壞",
      "zh-CN": "坏",
      "ko": "나쁜",
      "vi": "Xấu",
      "id": "Buruk"
    },
    "ex": "悪い人",
    "exm": {
      "en": "Bad person",
      "zh-TW": "壞人",
      "zh-CN": "坏人",
      "ko": "[Bad person]",
      "vi": "[Bad person]",
      "id": "[Bad person]"
    }
  },
  {
    "id": "V0411",
    "w": "熱い",
    "r": "あつい",
    "m": {
      "en": "hot (thing)",
      "zh-TW": "熱",
      "zh-CN": "热",
      "ko": "덥다",
      "vi": "nóng",
      "id": "panas"
    },
    "ex": "熱いお茶",
    "exm": {
      "en": "Hot tea",
      "zh-TW": "熱茶",
      "zh-CN": "热茶",
      "ko": "[Hot tea]",
      "vi": "[Hot tea]",
      "id": "[Hot tea]"
    }
  },
  {
    "id": "V0412",
    "w": "暑い",
    "r": "あつい",
    "m": {
      "en": "hot (weather)",
      "zh-TW": "熱",
      "zh-CN": "热",
      "ko": "덥다",
      "vi": "nóng",
      "id": "panas"
    },
    "ex": "今日は暑い",
    "exm": {
      "en": "Today is hot",
      "zh-TW": "今天很熱",
      "zh-CN": "今天很热",
      "ko": "[Today is hot]",
      "vi": "[Today is hot]",
      "id": "[Today is hot]"
    }
  },
  {
    "id": "V0413",
    "w": "冷たい",
    "r": "つめたい",
    "m": {
      "en": "cold (thing)",
      "zh-TW": "冷",
      "zh-CN": "冷",
      "ko": "오래되다",
      "vi": "cũ",
      "id": "lama"
    },
    "ex": "冷たい水",
    "exm": {
      "en": "Cold water",
      "zh-TW": "冷水",
      "zh-CN": "冷水",
      "ko": "[Cold water]",
      "vi": "[Cold water]",
      "id": "[Cold water]"
    }
  },
  {
    "id": "V0414",
    "w": "寒い",
    "r": "さむい",
    "m": {
      "en": "cold (weather)",
      "zh-TW": "冷",
      "zh-CN": "冷",
      "ko": "오래되다",
      "vi": "cũ",
      "id": "lama"
    },
    "ex": "今日は寒い",
    "exm": {
      "en": "Today is cold",
      "zh-TW": "今天很冷",
      "zh-CN": "今天很冷",
      "ko": "[Today is cold]",
      "vi": "[Today is cold]",
      "id": "[Today is cold]"
    }
  },
  {
    "id": "V0415",
    "w": "忙しい",
    "r": "いそがしい",
    "m": {
      "en": "busy",
      "zh-TW": "忙",
      "zh-CN": "忙",
      "ko": "바쁜",
      "vi": "Bận",
      "id": "Sibuk"
    },
    "ex": "忙しい日",
    "exm": {
      "en": "Busy day",
      "zh-TW": "忙碌的一天",
      "zh-CN": "忙碌的一天",
      "ko": "[Busy day]",
      "vi": "[Busy day]",
      "id": "[Busy day]"
    }
  },
  {
    "id": "V0416",
    "w": "楽しい",
    "r": "たのしい",
    "m": {
      "en": "fun",
      "zh-TW": "開心",
      "zh-CN": "开心",
      "ko": "[fun]",
      "vi": "[fun]",
      "id": "[fun]"
    },
    "ex": "楽しいパーティー",
    "exm": {
      "en": "Fun party",
      "zh-TW": "開心的派對",
      "zh-CN": "开心的派对",
      "ko": "[Fun party]",
      "vi": "[Fun party]",
      "id": "[Fun party]"
    }
  },
  {
    "id": "V0417",
    "w": "嬉しい",
    "r": "うれしい",
    "m": {
      "en": "happy",
      "zh-TW": "開心",
      "zh-CN": "开心",
      "ko": "행복한",
      "vi": "Vui",
      "id": "Senang"
    },
    "ex": "嬉しいニュース",
    "exm": {
      "en": "Happy news",
      "zh-TW": "高興的消息",
      "zh-CN": "高兴的消息",
      "ko": "[Happy news]",
      "vi": "[Happy news]",
      "id": "[Happy news]"
    }
  },
  {
    "id": "V0418",
    "w": "悲しい",
    "r": "かなしい",
    "m": {
      "en": "sad",
      "zh-TW": "悲傷",
      "zh-CN": "悲伤",
      "ko": "슬픈",
      "vi": "Buồn",
      "id": "Sedih"
    },
    "ex": "悲しい映画",
    "exm": {
      "en": "Sad movie",
      "zh-TW": "悲傷的電影",
      "zh-CN": "悲伤的电影",
      "ko": "[Sad movie]",
      "vi": "[Sad movie]",
      "id": "[Sad movie]"
    }
  },
  {
    "id": "V0419",
    "w": "面白い",
    "r": "おもしろい",
    "m": {
      "en": "interesting",
      "zh-TW": "有趣",
      "zh-CN": "有趣",
      "ko": "재미있는",
      "vi": "Thú vị",
      "id": "Menarik"
    },
    "ex": "面白い本",
    "exm": {
      "en": "Interesting book",
      "zh-TW": "有趣的書",
      "zh-CN": "有趣的书",
      "ko": "[Interesting book]",
      "vi": "[Interesting book]",
      "id": "[Interesting book]"
    }
  },
  {
    "id": "V0420",
    "w": "難しい",
    "r": "むずかしい",
    "m": {
      "en": "difficult",
      "zh-TW": "困難",
      "zh-CN": "困难",
      "ko": "어려운",
      "vi": "Khó",
      "id": "Sulit"
    },
    "ex": "難しい問題",
    "exm": {
      "en": "Difficult problem",
      "zh-TW": "困難的問題",
      "zh-CN": "困难的问题",
      "ko": "[Difficult problem]",
      "vi": "[Difficult problem]",
      "id": "[Difficult problem]"
    }
  },
  {
    "id": "V0421",
    "w": "易しい",
    "r": "やさしい",
    "m": {
      "en": "easy",
      "zh-TW": "簡單",
      "zh-CN": "简单",
      "ko": "쉬운",
      "vi": "Dễ",
      "id": "Mudah"
    },
    "ex": "易しい問題",
    "exm": {
      "en": "Easy problem",
      "zh-TW": "簡單的問題",
      "zh-CN": "简单的问题",
      "ko": "[Easy problem]",
      "vi": "[Easy problem]",
      "id": "[Easy problem]"
    }
  },
  {
    "id": "V0422",
    "w": "優しい",
    "r": "やさしい",
    "m": {
      "en": "kind",
      "zh-TW": "親切",
      "zh-CN": "亲切",
      "ko": "친절한",
      "vi": "Tử tế",
      "id": "Baik"
    },
    "ex": "優しい人",
    "exm": {
      "en": "Kind person",
      "zh-TW": "溫柔的人",
      "zh-CN": "温柔的人",
      "ko": "[Kind person]",
      "vi": "[Kind person]",
      "id": "[Kind person]"
    }
  },
  {
    "id": "V0423",
    "w": "美味しい",
    "r": "おいしい",
    "m": {
      "en": "delicious",
      "zh-TW": "好吃",
      "zh-CN": "好吃",
      "ko": "맛있는",
      "vi": "Ngon",
      "id": "Enak"
    },
    "ex": "美味しい料理",
    "exm": {
      "en": "Delicious food",
      "zh-TW": "好吃的菜",
      "zh-CN": "好吃的菜",
      "ko": "[Delicious food]",
      "vi": "[Delicious food]",
      "id": "[Delicious food]"
    }
  },
  {
    "id": "V0424",
    "w": "甘い",
    "r": "あまい",
    "m": {
      "en": "sweet",
      "zh-TW": "甜",
      "zh-CN": "甜",
      "ko": "[sweet]",
      "vi": "[sweet]",
      "id": "[sweet]"
    },
    "ex": "甘いケーキ",
    "exm": {
      "en": "Sweet cake",
      "zh-TW": "甜蛋糕",
      "zh-CN": "甜蛋糕",
      "ko": "[Sweet cake]",
      "vi": "[Sweet cake]",
      "id": "[Sweet cake]"
    }
  },
  {
    "id": "V0425",
    "w": "辛い",
    "r": "からい",
    "m": {
      "en": "spicy",
      "zh-TW": "辣",
      "zh-CN": "辣",
      "ko": "[spicy]",
      "vi": "[spicy]",
      "id": "[spicy]"
    },
    "ex": "辛い料理",
    "exm": {
      "en": "Spicy food",
      "zh-TW": "辣菜",
      "zh-CN": "辣菜",
      "ko": "[Spicy food]",
      "vi": "[Spicy food]",
      "id": "[Spicy food]"
    }
  },
  {
    "id": "V0426",
    "w": "白い",
    "r": "しろい",
    "m": {
      "en": "white",
      "zh-TW": "白色",
      "zh-CN": "白色",
      "ko": "흰색",
      "vi": "Trắng",
      "id": "Putih"
    },
    "ex": "白い雪",
    "exm": {
      "en": "White snow",
      "zh-TW": "白雪",
      "zh-CN": "白雪",
      "ko": "[White snow]",
      "vi": "[White snow]",
      "id": "[White snow]"
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
      "id": "Hitam"
    },
    "ex": "黒い髪",
    "exm": {
      "en": "Black hair",
      "zh-TW": "黑頭髮",
      "zh-CN": "黑头发",
      "ko": "[Black hair]",
      "vi": "[Black hair]",
      "id": "[Black hair]"
    }
  },
  {
    "id": "V0428",
    "w": "赤い",
    "r": "あかい",
    "m": {
      "en": "red",
      "zh-TW": "紅色",
      "zh-CN": "红色",
      "ko": "빨간색",
      "vi": "Đỏ",
      "id": "Merah"
    },
    "ex": "赤い花",
    "exm": {
      "en": "Red flower",
      "zh-TW": "紅花",
      "zh-CN": "红花",
      "ko": "[Red flower]",
      "vi": "[Red flower]",
      "id": "[Red flower]"
    }
  },
  {
    "id": "V0429",
    "w": "青い",
    "r": "あおい",
    "m": {
      "en": "blue",
      "zh-TW": "藍色",
      "zh-CN": "蓝色",
      "ko": "파란색",
      "vi": "Xanh dương",
      "id": "Biru"
    },
    "ex": "青い空",
    "exm": {
      "en": "Blue sky",
      "zh-TW": "藍天",
      "zh-CN": "蓝天",
      "ko": "[Blue sky]",
      "vi": "[Blue sky]",
      "id": "[Blue sky]"
    }
  },
  {
    "id": "V0430",
    "w": "広い",
    "r": "ひろい",
    "m": {
      "en": "wide",
      "zh-TW": "寬",
      "zh-CN": "宽",
      "ko": "넓은",
      "vi": "Rộng",
      "id": "Lebar"
    },
    "ex": "広い部屋",
    "exm": {
      "en": "Spacious room",
      "zh-TW": "寬敞的房間",
      "zh-CN": "宽敞的房间",
      "ko": "[Spacious room]",
      "vi": "[Spacious room]",
      "id": "[Spacious room]"
    }
  },
  {
    "id": "V0431",
    "w": "狭い",
    "r": "せまい",
    "m": {
      "en": "narrow",
      "zh-TW": "窄",
      "zh-CN": "窄",
      "ko": "좁은",
      "vi": "Hẹp",
      "id": "Sempit"
    },
    "ex": "狭い道",
    "exm": {
      "en": "Narrow road",
      "zh-TW": "窄路",
      "zh-CN": "窄路",
      "ko": "[Narrow road]",
      "vi": "[Narrow road]",
      "id": "[Narrow road]"
    }
  },
  {
    "id": "V0432",
    "w": "重い",
    "r": "おもい",
    "m": {
      "en": "heavy",
      "zh-TW": "重",
      "zh-CN": "重",
      "ko": "무거운",
      "vi": "Nặng",
      "id": "Berat"
    },
    "ex": "重い荷物",
    "exm": {
      "en": "Heavy luggage",
      "zh-TW": "重行李",
      "zh-CN": "重行李",
      "ko": "[Heavy luggage]",
      "vi": "[Heavy luggage]",
      "id": "[Heavy luggage]"
    }
  },
  {
    "id": "V0433",
    "w": "軽い",
    "r": "かるい",
    "m": {
      "en": "light",
      "zh-TW": "輕",
      "zh-CN": "轻",
      "ko": "가벼운",
      "vi": "Nhẹ",
      "id": "Ringan"
    },
    "ex": "軽いかばん",
    "exm": {
      "en": "Light bag",
      "zh-TW": "輕的包",
      "zh-CN": "轻的包",
      "ko": "[Light bag]",
      "vi": "[Light bag]",
      "id": "[Light bag]"
    }
  },
  {
    "id": "V0434",
    "w": "速い",
    "r": "はやい",
    "m": {
      "en": "fast",
      "zh-TW": "快",
      "zh-CN": "快",
      "ko": "빠른",
      "vi": "Nhanh",
      "id": "Cepat"
    },
    "ex": "速い電車",
    "exm": {
      "en": "Fast train",
      "zh-TW": "快車",
      "zh-CN": "快车",
      "ko": "[Fast train]",
      "vi": "[Fast train]",
      "id": "[Fast train]"
    }
  },
  {
    "id": "V0435",
    "w": "遅い",
    "r": "おそい",
    "m": {
      "en": "slow",
      "zh-TW": "慢",
      "zh-CN": "慢",
      "ko": "느린",
      "vi": "Chậm",
      "id": "Lambat"
    },
    "ex": "遅い時間",
    "exm": {
      "en": "Late time",
      "zh-TW": "很晚",
      "zh-CN": "很晚",
      "ko": "[Late time]",
      "vi": "[Late time]",
      "id": "[Late time]"
    }
  },
  {
    "id": "V0436",
    "w": "早い",
    "r": "はやい",
    "m": {
      "en": "early",
      "zh-TW": "早",
      "zh-CN": "早",
      "ko": "[early]",
      "vi": "[early]",
      "id": "[early]"
    },
    "ex": "早い朝",
    "exm": {
      "en": "Early morning",
      "zh-TW": "很早的早上",
      "zh-CN": "很早的早上",
      "ko": "[Early morning]",
      "vi": "[Early morning]",
      "id": "[Early morning]"
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
      "id": "Terang"
    },
    "ex": "明るい部屋",
    "exm": {
      "en": "Bright room",
      "zh-TW": "明亮的房間",
      "zh-CN": "明亮的房间",
      "ko": "[Bright room]",
      "vi": "[Bright room]",
      "id": "[Bright room]"
    }
  },
  {
    "id": "V0438",
    "w": "暗い",
    "r": "くらい",
    "m": {
      "en": "dark",
      "zh-TW": "暗",
      "zh-CN": "暗",
      "ko": "어두운",
      "vi": "Tối",
      "id": "Gelap"
    },
    "ex": "暗い部屋",
    "exm": {
      "en": "Dark room",
      "zh-TW": "暗的房間",
      "zh-CN": "暗的房间",
      "ko": "[Dark room]",
      "vi": "[Dark room]",
      "id": "[Dark room]"
    }
  },
  {
    "id": "V0439",
    "w": "強い",
    "r": "つよい",
    "m": {
      "en": "strong",
      "zh-TW": "強",
      "zh-CN": "强",
      "ko": "[strong]",
      "vi": "[strong]",
      "id": "[strong]"
    },
    "ex": "強い風",
    "exm": {
      "en": "Strong wind",
      "zh-TW": "強風",
      "zh-CN": "强风",
      "ko": "[Strong wind]",
      "vi": "[Strong wind]",
      "id": "[Strong wind]"
    }
  },
  {
    "id": "V0440",
    "w": "弱い",
    "r": "よわい",
    "m": {
      "en": "weak",
      "zh-TW": "弱",
      "zh-CN": "弱",
      "ko": "[weak]",
      "vi": "[weak]",
      "id": "[weak]"
    },
    "ex": "弱い人",
    "exm": {
      "en": "Weak person",
      "zh-TW": "弱的人",
      "zh-CN": "弱的人",
      "ko": "[Weak person]",
      "vi": "[Weak person]",
      "id": "[Weak person]"
    }
  },
  {
    "id": "V0441",
    "w": "若い",
    "r": "わかい",
    "m": {
      "en": "young",
      "zh-TW": "年輕",
      "zh-CN": "年轻",
      "ko": "[young]",
      "vi": "[young]",
      "id": "[young]"
    },
    "ex": "若い人",
    "exm": {
      "en": "Young person",
      "zh-TW": "年輕人",
      "zh-CN": "年轻人",
      "ko": "[Young person]",
      "vi": "[Young person]",
      "id": "[Young person]"
    }
  },
  {
    "id": "V0442",
    "w": "近い",
    "r": "ちかい",
    "m": {
      "en": "near",
      "zh-TW": "近",
      "zh-CN": "近",
      "ko": "가까운",
      "vi": "Gần",
      "id": "Dekat"
    },
    "ex": "近い所",
    "exm": {
      "en": "Near place",
      "zh-TW": "近的地方",
      "zh-CN": "近的地方",
      "ko": "[Near place]",
      "vi": "[Near place]",
      "id": "[Near place]"
    }
  },
  {
    "id": "V0443",
    "w": "遠い",
    "r": "とおい",
    "m": {
      "en": "far",
      "zh-TW": "遠",
      "zh-CN": "远",
      "ko": "먼",
      "vi": "Xa",
      "id": "Jauh"
    },
    "ex": "遠い所",
    "exm": {
      "en": "Far place",
      "zh-TW": "遠的地方",
      "zh-CN": "远的地方",
      "ko": "[Far place]",
      "vi": "[Far place]",
      "id": "[Far place]"
    }
  },
  {
    "id": "V0444",
    "w": "多い",
    "r": "おおい",
    "m": {
      "en": "many",
      "zh-TW": "多",
      "zh-CN": "多",
      "ko": "많다",
      "vi": "nhiều",
      "id": "banyak"
    },
    "ex": "人が多い",
    "exm": {
      "en": "Many people",
      "zh-TW": "人很多",
      "zh-CN": "人很多",
      "ko": "[Many people]",
      "vi": "[Many people]",
      "id": "[Many people]"
    }
  },
  {
    "id": "V0445",
    "w": "少ない",
    "r": "すくない",
    "m": {
      "en": "few",
      "zh-TW": "少",
      "zh-CN": "少",
      "ko": "적다",
      "vi": "ít",
      "id": "sedikit"
    },
    "ex": "人が少ない",
    "exm": {
      "en": "Few people",
      "zh-TW": "人很少",
      "zh-CN": "人很少",
      "ko": "[Few people]",
      "vi": "[Few people]",
      "id": "[Few people]"
    }
  },
  {
    "id": "V0446",
    "w": "痛い",
    "r": "いたい",
    "m": {
      "en": "painful",
      "zh-TW": "痛",
      "zh-CN": "痛",
      "ko": "[painful]",
      "vi": "[painful]",
      "id": "[painful]"
    },
    "ex": "頭が痛い",
    "exm": {
      "en": "Headache",
      "zh-TW": "頭痛",
      "zh-CN": "头痛",
      "ko": "[Headache]",
      "vi": "[Headache]",
      "id": "[Headache]"
    }
  },
  {
    "id": "V0447",
    "w": "怖い",
    "r": "こわい",
    "m": {
      "en": "scary",
      "zh-TW": "可怕",
      "zh-CN": "可怕",
      "ko": "[scary]",
      "vi": "[scary]",
      "id": "[scary]"
    },
    "ex": "怖い映画",
    "exm": {
      "en": "Scary movie",
      "zh-TW": "可怕的電影",
      "zh-CN": "可怕的电影",
      "ko": "[Scary movie]",
      "vi": "[Scary movie]",
      "id": "[Scary movie]"
    }
  },
  {
    "id": "V0448",
    "w": "眠い",
    "r": "ねむい",
    "m": {
      "en": "sleepy",
      "zh-TW": "睏",
      "zh-CN": "困",
      "ko": "[sleepy]",
      "vi": "[sleepy]",
      "id": "[sleepy]"
    },
    "ex": "とても眠い",
    "exm": {
      "en": "Very sleepy",
      "zh-TW": "很睏",
      "zh-CN": "很困",
      "ko": "[Very sleepy]",
      "vi": "[Very sleepy]",
      "id": "[Very sleepy]"
    }
  },
  {
    "id": "V0449",
    "w": "可愛い",
    "r": "かわいい",
    "m": {
      "en": "cute",
      "zh-TW": "可愛",
      "zh-CN": "可爱",
      "ko": "[cute]",
      "vi": "[cute]",
      "id": "[cute]"
    },
    "ex": "可愛い子",
    "exm": {
      "en": "Cute child",
      "zh-TW": "可愛的孩子",
      "zh-CN": "可爱的孩子",
      "ko": "[Cute child]",
      "vi": "[Cute child]",
      "id": "[Cute child]"
    }
  },
  {
    "id": "V0450",
    "w": "有名",
    "r": "ゆうめい",
    "m": {
      "en": "famous",
      "zh-TW": "有名",
      "zh-CN": "有名",
      "ko": "[famous]",
      "vi": "[famous]",
      "id": "[famous]"
    },
    "ex": "有名な人",
    "exm": {
      "en": "Famous person",
      "zh-TW": "有名的人",
      "zh-CN": "有名的人",
      "ko": "[Famous person]",
      "vi": "[Famous person]",
      "id": "[Famous person]"
    }
  },
  {
    "id": "V0451",
    "w": "静か",
    "r": "しずか",
    "m": {
      "en": "quiet",
      "zh-TW": "安靜",
      "zh-CN": "安静",
      "ko": "조용한",
      "vi": "Yên tĩnh",
      "id": "Tenang"
    },
    "ex": "静かな部屋",
    "exm": {
      "en": "Quiet room",
      "zh-TW": "安靜的房間",
      "zh-CN": "安静的房间",
      "ko": "[Quiet room]",
      "vi": "[Quiet room]",
      "id": "[Quiet room]"
    }
  },
  {
    "id": "V0452",
    "w": "賑やか",
    "r": "にぎやか",
    "m": {
      "en": "lively",
      "zh-TW": "熱鬧",
      "zh-CN": "热闹",
      "ko": "[lively]",
      "vi": "[lively]",
      "id": "[lively]"
    },
    "ex": "賑やかな町",
    "exm": {
      "en": "Lively town",
      "zh-TW": "熱鬧的城鎮",
      "zh-CN": "热闹的城镇",
      "ko": "[Lively town]",
      "vi": "[Lively town]",
      "id": "[Lively town]"
    }
  },
  {
    "id": "V0453",
    "w": "綺麗",
    "r": "きれい",
    "m": {
      "en": "beautiful",
      "zh-TW": "美麗",
      "zh-CN": "美丽",
      "ko": "아름다운",
      "vi": "Đẹp",
      "id": "Indah"
    },
    "ex": "綺麗な花",
    "exm": {
      "en": "Beautiful flower",
      "zh-TW": "漂亮的花",
      "zh-CN": "漂亮的花",
      "ko": "[Beautiful flower]",
      "vi": "[Beautiful flower]",
      "id": "[Beautiful flower]"
    }
  },
  {
    "id": "V0454",
    "w": "便利",
    "r": "べんり",
    "m": {
      "en": "convenient",
      "zh-TW": "方便",
      "zh-CN": "方便",
      "ko": "[convenient]",
      "vi": "[convenient]",
      "id": "[convenient]"
    },
    "ex": "便利な場所",
    "exm": {
      "en": "Convenient place",
      "zh-TW": "方便的地方",
      "zh-CN": "方便的地方",
      "ko": "[Convenient place]",
      "vi": "[Convenient place]",
      "id": "[Convenient place]"
    }
  },
  {
    "id": "V0455",
    "w": "大切",
    "r": "たいせつ",
    "m": {
      "en": "important",
      "zh-TW": "重要",
      "zh-CN": "重要",
      "ko": "[important]",
      "vi": "[important]",
      "id": "[important]"
    },
    "ex": "大切な人",
    "exm": {
      "en": "Important person",
      "zh-TW": "重要的人",
      "zh-CN": "重要的人",
      "ko": "[Important person]",
      "vi": "[Important person]",
      "id": "[Important person]"
    }
  },
  {
    "id": "V0456",
    "w": "大丈夫",
    "r": "だいじょうぶ",
    "m": {
      "en": "okay",
      "zh-TW": "沒問題",
      "zh-CN": "没问题",
      "ko": "[okay]",
      "vi": "[okay]",
      "id": "[okay]"
    },
    "ex": "大丈夫ですか",
    "exm": {
      "en": "Are you okay?",
      "zh-TW": "沒問題嗎",
      "zh-CN": "没问题吗",
      "ko": "[Are you okay?]",
      "vi": "[Are you okay?]",
      "id": "[Are you okay?]"
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
      "id": "baik"
    },
    "ex": "日本語が上手",
    "exm": {
      "en": "Good at Japanese",
      "zh-TW": "日語很好",
      "zh-CN": "日语很好",
      "ko": "[Good at Japanese]",
      "vi": "[Good at Japanese]",
      "id": "[Good at Japanese]"
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
      "id": "buruk"
    },
    "ex": "料理が下手",
    "exm": {
      "en": "Bad at cooking",
      "zh-TW": "不擅長做菜",
      "zh-CN": "不擅长做菜",
      "ko": "[Bad at cooking]",
      "vi": "[Bad at cooking]",
      "id": "[Bad at cooking]"
    }
  },
  {
    "id": "V0459",
    "w": "簡単",
    "r": "かんたん",
    "m": {
      "en": "simple",
      "zh-TW": "簡單",
      "zh-CN": "简单",
      "ko": "[simple]",
      "vi": "[simple]",
      "id": "[simple]"
    },
    "ex": "簡単な問題",
    "exm": {
      "en": "Simple problem",
      "zh-TW": "簡單的問題",
      "zh-CN": "简单的问题",
      "ko": "[Simple problem]",
      "vi": "[Simple problem]",
      "id": "[Simple problem]"
    }
  },
  {
    "id": "V0460",
    "w": "親切",
    "r": "しんせつ",
    "m": {
      "en": "kind",
      "zh-TW": "親切",
      "zh-CN": "亲切",
      "ko": "친절한",
      "vi": "Tử tế",
      "id": "Baik"
    },
    "ex": "親切な人",
    "exm": {
      "en": "Kind person",
      "zh-TW": "親切的人",
      "zh-CN": "亲切的人",
      "ko": "[Kind person]",
      "vi": "[Kind person]",
      "id": "[Kind person]"
    }
  },
  {
    "id": "V0461",
    "w": "暇",
    "r": "ひま",
    "m": {
      "en": "free time",
      "zh-TW": "空閒",
      "zh-CN": "空闲",
      "ko": "[free time]",
      "vi": "[free time]",
      "id": "[free time]"
    },
    "ex": "暇な時",
    "exm": {
      "en": "Free time",
      "zh-TW": "有空的時候",
      "zh-CN": "有空的时候",
      "ko": "[Free time]",
      "vi": "[Free time]",
      "id": "[Free time]"
    }
  },
  {
    "id": "V0462",
    "w": "駄目",
    "r": "だめ",
    "m": {
      "en": "no good",
      "zh-TW": "不行",
      "zh-CN": "不行",
      "ko": "좋다",
      "vi": "tốt",
      "id": "baik"
    },
    "ex": "それは駄目",
    "exm": {
      "en": "That's no good",
      "zh-TW": "那不行",
      "zh-CN": "那不行",
      "ko": "[That's no good]",
      "vi": "[That's no good]",
      "id": "[That's no good]"
    }
  },
  {
    "id": "V0463",
    "w": "特別",
    "r": "とくべつ",
    "m": {
      "en": "special",
      "zh-TW": "特別",
      "zh-CN": "特别",
      "ko": "[special]",
      "vi": "[special]",
      "id": "[special]"
    },
    "ex": "特別な日",
    "exm": {
      "en": "Special day",
      "zh-TW": "特別的日子",
      "zh-CN": "特别的日子",
      "ko": "[Special day]",
      "vi": "[Special day]",
      "id": "[Special day]"
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
      "ko": "[various]",
      "vi": "[various]",
      "id": "[various]"
    },
    "ex": "色々な物",
    "exm": {
      "en": "Various things",
      "zh-TW": "各種東西",
      "zh-CN": "各种东西",
      "ko": "[Various things]",
      "vi": "[Various things]",
      "id": "[Various things]"
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
      "ko": "[same]",
      "vi": "[same]",
      "id": "[same]"
    },
    "ex": "同じ物",
    "exm": {
      "en": "Same thing",
      "zh-TW": "相同的東西",
      "zh-CN": "相同的东西",
      "ko": "[Same thing]",
      "vi": "[Same thing]",
      "id": "[Same thing]"
    }
  },
  {
    "id": "V0466",
    "w": "普通",
    "r": "ふつう",
    "m": {
      "en": "ordinary",
      "zh-TW": "普通",
      "zh-CN": "普通",
      "ko": "[ordinary]",
      "vi": "[ordinary]",
      "id": "[ordinary]"
    },
    "ex": "普通の人",
    "exm": {
      "en": "Ordinary person",
      "zh-TW": "普通人",
      "zh-CN": "普通人",
      "ko": "[Ordinary person]",
      "vi": "[Ordinary person]",
      "id": "[Ordinary person]"
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
      "ko": "[very]",
      "vi": "[very]",
      "id": "[very]"
    },
    "ex": "とても暑い",
    "exm": {
      "en": "Very hot",
      "zh-TW": "非常熱",
      "zh-CN": "非常热",
      "ko": "[Very hot]",
      "vi": "[Very hot]",
      "id": "[Very hot]"
    }
  },
  {
    "id": "V0468",
    "w": "少し",
    "r": "すこし",
    "m": {
      "en": "a little",
      "zh-TW": "一點",
      "zh-CN": "一点",
      "ko": "[a little]",
      "vi": "[a little]",
      "id": "[a little]"
    },
    "ex": "少し食べる",
    "exm": {
      "en": "Eat a little",
      "zh-TW": "吃一點",
      "zh-CN": "吃一点",
      "ko": "[Eat a little]",
      "vi": "[Eat a little]",
      "id": "[Eat a little]"
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
      "ko": "[a little]",
      "vi": "[a little]",
      "id": "[a little]"
    },
    "ex": "ちょっと待って",
    "exm": {
      "en": "Wait a bit",
      "zh-TW": "等一下",
      "zh-CN": "等一下",
      "ko": "[Wait a bit]",
      "vi": "[Wait a bit]",
      "id": "[Wait a bit]"
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
      "id": "banyak"
    },
    "ex": "たくさん食べる",
    "exm": {
      "en": "Eat a lot",
      "zh-TW": "吃很多",
      "zh-CN": "吃很多",
      "ko": "[Eat a lot]",
      "vi": "[Eat a lot]",
      "id": "[Eat a lot]"
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
      "ko": "[more]",
      "vi": "[more]",
      "id": "[more]"
    },
    "ex": "もっと食べる",
    "exm": {
      "en": "Eat more",
      "zh-TW": "吃更多",
      "zh-CN": "吃更多",
      "ko": "[Eat more]",
      "vi": "[Eat more]",
      "id": "[Eat more]"
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
      "ko": "[still/not yet]",
      "vi": "[still/not yet]",
      "id": "[still/not yet]"
    },
    "ex": "まだ食べていない",
    "exm": {
      "en": "Haven't eaten yet",
      "zh-TW": "還沒吃",
      "zh-CN": "还没吃",
      "ko": "[Haven't eaten yet]",
      "vi": "[Haven't eaten yet]",
      "id": "[Haven't eaten yet]"
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
      "ko": "[already]",
      "vi": "[already]",
      "id": "[already]"
    },
    "ex": "もう食べた",
    "exm": {
      "en": "Already ate",
      "zh-TW": "已經吃了",
      "zh-CN": "已经吃了",
      "ko": "[Already ate]",
      "vi": "[Already ate]",
      "id": "[Already ate]"
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
      "ko": "[always]",
      "vi": "[always]",
      "id": "[always]"
    },
    "ex": "いつも早く起きる",
    "exm": {
      "en": "Always wake up early",
      "zh-TW": "總是早起",
      "zh-CN": "总是早起",
      "ko": "[Always wake up early]",
      "vi": "[Always wake up early]",
      "id": "[Always wake up early]"
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
      "ko": "[sometimes]",
      "vi": "[sometimes]",
      "id": "[sometimes]"
    },
    "ex": "時々映画を見る",
    "exm": {
      "en": "Sometimes watch movies",
      "zh-TW": "有時看電影",
      "zh-CN": "有时看电影",
      "ko": "[Sometimes watch movies]",
      "vi": "[Sometimes watch movies]",
      "id": "[Sometimes watch movies]"
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
      "ko": "[often]",
      "vi": "[often]",
      "id": "[often]"
    },
    "ex": "よく勉強する",
    "exm": {
      "en": "Study often",
      "zh-TW": "經常學習",
      "zh-CN": "经常学习",
      "ko": "[Study often]",
      "vi": "[Study often]",
      "id": "[Study often]"
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
      "ko": "[not much]",
      "vi": "[not much]",
      "id": "[not much]"
    },
    "ex": "あまり好きじゃない",
    "exm": {
      "en": "Don't like much",
      "zh-TW": "不太喜歡",
      "zh-CN": "不太喜欢",
      "ko": "[Don't like much]",
      "vi": "[Don't like much]",
      "id": "[Don't like much]"
    }
  },
  {
    "id": "V0478",
    "w": "全然",
    "r": "ぜんぜん",
    "m": {
      "en": "not at all",
      "zh-TW": "完全不",
      "zh-CN": "完全不",
      "ko": "[not at all]",
      "vi": "[not at all]",
      "id": "[not at all]"
    },
    "ex": "全然分からない",
    "exm": {
      "en": "Don't understand",
      "zh-TW": "完全不懂",
      "zh-CN": "完全不懂",
      "ko": "[Don't understand]",
      "vi": "[Don't understand]",
      "id": "[Don't understand]"
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
      "ko": "[slowly]",
      "vi": "[slowly]",
      "id": "[slowly]"
    },
    "ex": "ゆっくり話す",
    "exm": {
      "en": "Speak slowly",
      "zh-TW": "慢慢說",
      "zh-CN": "慢慢说",
      "ko": "[Speak slowly]",
      "vi": "[Speak slowly]",
      "id": "[Speak slowly]"
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
      "ko": "[immediately]",
      "vi": "[immediately]",
      "id": "[immediately]"
    },
    "ex": "すぐ来る",
    "exm": {
      "en": "Come immediately",
      "zh-TW": "馬上來",
      "zh-CN": "马上来",
      "ko": "[Come immediately]",
      "vi": "[Come immediately]",
      "id": "[Come immediately]"
    }
  },
  {
    "id": "V0481",
    "w": "一緒に",
    "r": "いっしょに",
    "m": {
      "en": "together",
      "zh-TW": "一起",
      "zh-CN": "一起",
      "ko": "[together]",
      "vi": "[together]",
      "id": "[together]"
    },
    "ex": "一緒に行く",
    "exm": {
      "en": "Go together",
      "zh-TW": "一起去",
      "zh-CN": "一起去",
      "ko": "[Go together]",
      "vi": "[Go together]",
      "id": "[Go together]"
    }
  },
  {
    "id": "V0482",
    "w": "初めて",
    "r": "はじめて",
    "m": {
      "en": "first time",
      "zh-TW": "第一次",
      "zh-CN": "第一次",
      "ko": "[first time]",
      "vi": "[first time]",
      "id": "[first time]"
    },
    "ex": "初めて会う",
    "exm": {
      "en": "Meet for first time",
      "zh-TW": "第一次見面",
      "zh-CN": "第一次见面",
      "ko": "[Meet for first time]",
      "vi": "[Meet for first time]",
      "id": "[Meet for first time]"
    }
  },
  {
    "id": "V0483",
    "w": "多分",
    "r": "たぶん",
    "m": {
      "en": "probably",
      "zh-TW": "大概",
      "zh-CN": "大概",
      "ko": "[probably]",
      "vi": "[probably]",
      "id": "[probably]"
    },
    "ex": "多分来る",
    "exm": {
      "en": "Probably come",
      "zh-TW": "大概會來",
      "zh-CN": "大概会来",
      "ko": "[Probably come]",
      "vi": "[Probably come]",
      "id": "[Probably come]"
    }
  },
  {
    "id": "V0484",
    "w": "本当に",
    "r": "ほんとうに",
    "m": {
      "en": "really",
      "zh-TW": "真的",
      "zh-CN": "真的",
      "ko": "[really]",
      "vi": "[really]",
      "id": "[really]"
    },
    "ex": "本当に美味しい",
    "exm": {
      "en": "Really delicious",
      "zh-TW": "真的好吃",
      "zh-CN": "真的好吃",
      "ko": "[Really delicious]",
      "vi": "[Really delicious]",
      "id": "[Really delicious]"
    }
  },
  {
    "id": "V0485",
    "w": "必ず",
    "r": "かならず",
    "m": {
      "en": "certainly",
      "zh-TW": "一定",
      "zh-CN": "一定",
      "ko": "[certainly]",
      "vi": "[certainly]",
      "id": "[certainly]"
    },
    "ex": "必ず来る",
    "exm": {
      "en": "Certainly come",
      "zh-TW": "一定來",
      "zh-CN": "一定来",
      "ko": "[Certainly come]",
      "vi": "[Certainly come]",
      "id": "[Certainly come]"
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
      "ko": "[gradually]",
      "vi": "[gradually]",
      "id": "[gradually]"
    },
    "ex": "だんだん上手になる",
    "exm": {
      "en": "Gradually improve",
      "zh-TW": "漸漸變好",
      "zh-CN": "渐渐变好",
      "ko": "[Gradually improve]",
      "vi": "[Gradually improve]",
      "id": "[Gradually improve]"
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
      "id": "Apa"
    },
    "ex": "何を食べる",
    "exm": {
      "en": "What to eat",
      "zh-TW": "吃什麼",
      "zh-CN": "吃什么",
      "ko": "[What to eat]",
      "vi": "[What to eat]",
      "id": "[What to eat]"
    }
  },
  {
    "id": "V0488",
    "w": "誰",
    "r": "だれ",
    "m": {
      "en": "who",
      "zh-TW": "誰",
      "zh-CN": "谁",
      "ko": "누구",
      "vi": "Ai",
      "id": "Siapa"
    },
    "ex": "誰ですか",
    "exm": {
      "en": "Who is it?",
      "zh-TW": "是誰",
      "zh-CN": "是谁",
      "ko": "[Who is it?]",
      "vi": "[Who is it?]",
      "id": "[Who is it?]"
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
      "id": "Di mana"
    },
    "ex": "どこに行く",
    "exm": {
      "en": "Where to go",
      "zh-TW": "去哪裡",
      "zh-CN": "去哪里",
      "ko": "[Where to go]",
      "vi": "[Where to go]",
      "id": "[Where to go]"
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
      "id": "Kapan"
    },
    "ex": "いつ来る",
    "exm": {
      "en": "When to come",
      "zh-TW": "什麼時候來",
      "zh-CN": "什么时候来",
      "ko": "[When to come]",
      "vi": "[When to come]",
      "id": "[When to come]"
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
      "id": "Mengapa"
    },
    "ex": "どうして来ない",
    "exm": {
      "en": "Why not come",
      "zh-TW": "為什麼不來",
      "zh-CN": "为什么不来",
      "ko": "[Why not come]",
      "vi": "[Why not come]",
      "id": "[Why not come]"
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
      "id": "Bagaimana"
    },
    "ex": "どうですか",
    "exm": {
      "en": "How is it?",
      "zh-TW": "怎麼樣",
      "zh-CN": "怎么样",
      "ko": "[How is it?]",
      "vi": "[How is it?]",
      "id": "[How is it?]"
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
      "id": "Berapa"
    },
    "ex": "いくらですか",
    "exm": {
      "en": "How much?",
      "zh-TW": "多少錢",
      "zh-CN": "多少钱",
      "ko": "[How much?]",
      "vi": "[How much?]",
      "id": "[How much?]"
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
      "id": "banyak"
    },
    "ex": "いくつありますか",
    "exm": {
      "en": "How many?",
      "zh-TW": "有幾個",
      "zh-CN": "有几个",
      "ko": "[How many?]",
      "vi": "[How many?]",
      "id": "[How many?]"
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
      "id": "Ini"
    },
    "ex": "これは何",
    "exm": {
      "en": "What is this?",
      "zh-TW": "這是什麼",
      "zh-CN": "这是什么",
      "ko": "[What is this?]",
      "vi": "[What is this?]",
      "id": "[What is this?]"
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
      "id": "Itu"
    },
    "ex": "それは本",
    "exm": {
      "en": "That is a book",
      "zh-TW": "那是書",
      "zh-CN": "那是书",
      "ko": "[That is a book]",
      "vi": "[That is a book]",
      "id": "[That is a book]"
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
      "ko": "[that (far)]",
      "vi": "[that (far)]",
      "id": "[that (far)]"
    },
    "ex": "あれは何",
    "exm": {
      "en": "What is that?",
      "zh-TW": "那是什麼",
      "zh-CN": "那是什么",
      "ko": "[What is that?]",
      "vi": "[What is that?]",
      "id": "[What is that?]"
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
      "id": "Ini"
    },
    "ex": "この本",
    "exm": {
      "en": "This book",
      "zh-TW": "這本書",
      "zh-CN": "这本书",
      "ko": "[This book]",
      "vi": "[This book]",
      "id": "[This book]"
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
      "id": "Itu"
    },
    "ex": "その本",
    "exm": {
      "en": "That book",
      "zh-TW": "那本書",
      "zh-CN": "那本书",
      "ko": "[That book]",
      "vi": "[That book]",
      "id": "[That book]"
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
      "ko": "[that (far)]",
      "vi": "[that (far)]",
      "id": "[that (far)]"
    },
    "ex": "あの人",
    "exm": {
      "en": "That person",
      "zh-TW": "那個人",
      "zh-CN": "那个人",
      "ko": "[That person]",
      "vi": "[That person]",
      "id": "[That person]"
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
      "ko": "[here]",
      "vi": "[here]",
      "id": "[here]"
    },
    "ex": "ここに座る",
    "exm": {
      "en": "Sit here",
      "zh-TW": "坐這裡",
      "zh-CN": "坐这里",
      "ko": "[Sit here]",
      "vi": "[Sit here]",
      "id": "[Sit here]"
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
      "ko": "[there]",
      "vi": "[there]",
      "id": "[there]"
    },
    "ex": "そこに置く",
    "exm": {
      "en": "Put there",
      "zh-TW": "放那裡",
      "zh-CN": "放那里",
      "ko": "[Put there]",
      "vi": "[Put there]",
      "id": "[Put there]"
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
      "ko": "[over there]",
      "vi": "[over there]",
      "id": "[over there]"
    },
    "ex": "あそこに行く",
    "exm": {
      "en": "Go there",
      "zh-TW": "去那邊",
      "zh-CN": "去那边",
      "ko": "[Go there]",
      "vi": "[Go there]",
      "id": "[Go there]"
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
      "id": "Atas"
    },
    "ex": "机の上",
    "exm": {
      "en": "On desk",
      "zh-TW": "桌上",
      "zh-CN": "桌上",
      "ko": "[On desk]",
      "vi": "[On desk]",
      "id": "[On desk]"
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
      "id": "Bawah"
    },
    "ex": "机の下",
    "exm": {
      "en": "Under desk",
      "zh-TW": "桌下",
      "zh-CN": "桌下",
      "ko": "[Under desk]",
      "vi": "[Under desk]",
      "id": "[Under desk]"
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
      "id": "Dalam"
    },
    "ex": "かばんの中",
    "exm": {
      "en": "Inside bag",
      "zh-TW": "包裡",
      "zh-CN": "包里",
      "ko": "[Inside bag]",
      "vi": "[Inside bag]",
      "id": "[Inside bag]"
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
      "id": "Luar"
    },
    "ex": "家の外",
    "exm": {
      "en": "Outside house",
      "zh-TW": "房外",
      "zh-CN": "房外",
      "ko": "[Outside house]",
      "vi": "[Outside house]",
      "id": "[Outside house]"
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
      "id": "Depan"
    },
    "ex": "駅の前",
    "exm": {
      "en": "Front of station",
      "zh-TW": "車站前",
      "zh-CN": "车站前",
      "ko": "[Front of station]",
      "vi": "[Front of station]",
      "id": "[Front of station]"
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
      "ko": "[behind]",
      "vi": "[behind]",
      "id": "[behind]"
    },
    "ex": "家の後ろ",
    "exm": {
      "en": "Behind house",
      "zh-TW": "房後",
      "zh-CN": "房后",
      "ko": "[Behind house]",
      "vi": "[Behind house]",
      "id": "[Behind house]"
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
      "id": "Kanan"
    },
    "ex": "右に曲がる",
    "exm": {
      "en": "Turn right",
      "zh-TW": "向右轉",
      "zh-CN": "向右转",
      "ko": "[Turn right]",
      "vi": "[Turn right]",
      "id": "[Turn right]"
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
      "id": "Kiri"
    },
    "ex": "左に曲がる",
    "exm": {
      "en": "Turn left",
      "zh-TW": "向左轉",
      "zh-CN": "向左转",
      "ko": "[Turn left]",
      "vi": "[Turn left]",
      "id": "[Turn left]"
    }
  },
  {
    "id": "V0512",
    "w": "隣",
    "r": "となり",
    "m": {
      "en": "next to",
      "zh-TW": "隔壁",
      "zh-CN": "隔壁",
      "ko": "[next to]",
      "vi": "[next to]",
      "id": "[next to]"
    },
    "ex": "隣の部屋",
    "exm": {
      "en": "Next room",
      "zh-TW": "隔壁房",
      "zh-CN": "隔壁房",
      "ko": "[Next room]",
      "vi": "[Next room]",
      "id": "[Next room]"
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
      "ko": "[between]",
      "vi": "[between]",
      "id": "[between]"
    },
    "ex": "駅と家の間",
    "exm": {
      "en": "Between",
      "zh-TW": "之間",
      "zh-CN": "之间",
      "ko": "[Between]",
      "vi": "[Between]",
      "id": "[Between]"
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
      "ko": "[yes]",
      "vi": "[yes]",
      "id": "[yes]"
    },
    "ex": "はい、そうです",
    "exm": {
      "en": "Yes",
      "zh-TW": "是的",
      "zh-CN": "是的",
      "ko": "[Yes]",
      "vi": "[Yes]",
      "id": "[Yes]"
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
      "ko": "[no]",
      "vi": "[no]",
      "id": "[no]"
    },
    "ex": "いいえ、違います",
    "exm": {
      "en": "No",
      "zh-TW": "不是",
      "zh-CN": "不是",
      "ko": "[No]",
      "vi": "[No]",
      "id": "[No]"
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
      "id": "Terima kasih"
    },
    "ex": "ありがとうございます",
    "exm": {
      "en": "Thank you",
      "zh-TW": "謝謝",
      "zh-CN": "谢谢",
      "ko": "[Thank you]",
      "vi": "[Thank you]",
      "id": "[Thank you]"
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
      "id": "Permisi"
    },
    "ex": "すみません",
    "exm": {
      "en": "Excuse me",
      "zh-TW": "對不起",
      "zh-CN": "对不起",
      "ko": "[Excuse me]",
      "vi": "[Excuse me]",
      "id": "[Excuse me]"
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
      "ko": "[sorry]",
      "vi": "[sorry]",
      "id": "[sorry]"
    },
    "ex": "ごめんなさい",
    "exm": {
      "en": "I'm sorry",
      "zh-TW": "抱歉",
      "zh-CN": "抱歉",
      "ko": "[I'm sorry]",
      "vi": "[I'm sorry]",
      "id": "[I'm sorry]"
    }
  },
  {
    "id": "V0519",
    "w": "お願いします",
    "r": "おねがいします",
    "m": {
      "en": "please",
      "zh-TW": "拜託",
      "zh-CN": "拜托",
      "ko": "[please]",
      "vi": "[please]",
      "id": "[please]"
    },
    "ex": "お願いします",
    "exm": {
      "en": "Please",
      "zh-TW": "拜託",
      "zh-CN": "拜托",
      "ko": "[Please]",
      "vi": "[Please]",
      "id": "[Please]"
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
      "id": "Selamat pagi"
    },
    "ex": "おはようございます",
    "exm": {
      "en": "Good morning",
      "zh-TW": "早安",
      "zh-CN": "早安",
      "ko": "[Good morning]",
      "vi": "[Good morning]",
      "id": "[Good morning]"
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
      "id": "Halo"
    },
    "ex": "こんにちは",
    "exm": {
      "en": "Hello",
      "zh-TW": "你好",
      "zh-CN": "你好",
      "ko": "[Hello]",
      "vi": "[Hello]",
      "id": "[Hello]"
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
      "id": "Selamat malam"
    },
    "ex": "こんばんは",
    "exm": {
      "en": "Good evening",
      "zh-TW": "晚上好",
      "zh-CN": "晚上好",
      "ko": "[Good evening]",
      "vi": "[Good evening]",
      "id": "[Good evening]"
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
      "id": "Selamat tinggal"
    },
    "ex": "さようなら",
    "exm": {
      "en": "Goodbye",
      "zh-TW": "再見",
      "zh-CN": "再见",
      "ko": "[Goodbye]",
      "vi": "[Goodbye]",
      "id": "[Goodbye]"
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
      "id": "baik"
    },
    "ex": "おやすみなさい",
    "exm": {
      "en": "Good night",
      "zh-TW": "晚安",
      "zh-CN": "晚安",
      "ko": "[Good night]",
      "vi": "[Good night]",
      "id": "[Good night]"
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
      "ko": "[bon appetit]",
      "vi": "[bon appetit]",
      "id": "[bon appetit]"
    },
    "ex": "いただきます",
    "exm": {
      "en": "Let's eat",
      "zh-TW": "開動了",
      "zh-CN": "开动了",
      "ko": "[Let's eat]",
      "vi": "[Let's eat]",
      "id": "[Let's eat]"
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
      "ko": "[thanks for meal]",
      "vi": "[thanks for meal]",
      "id": "[thanks for meal]"
    },
    "ex": "ごちそうさまでした",
    "exm": {
      "en": "Thanks for meal",
      "zh-TW": "謝謝款待",
      "zh-CN": "谢谢款待",
      "ko": "[Thanks for meal]",
      "vi": "[Thanks for meal]",
      "id": "[Thanks for meal]"
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
      "ko": "[one thing]",
      "vi": "[one thing]",
      "id": "[one thing]"
    },
    "ex": "一つください",
    "exm": {
      "en": "One please",
      "zh-TW": "請給一個",
      "zh-CN": "请给一个",
      "ko": "[One please]",
      "vi": "[One please]",
      "id": "[One please]"
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
      "ko": "[two things]",
      "vi": "[two things]",
      "id": "[two things]"
    },
    "ex": "二つ買う",
    "exm": {
      "en": "Buy two",
      "zh-TW": "買兩個",
      "zh-CN": "买两个",
      "ko": "[Buy two]",
      "vi": "[Buy two]",
      "id": "[Buy two]"
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
      "ko": "[three things]",
      "vi": "[three things]",
      "id": "[three things]"
    },
    "ex": "三つある",
    "exm": {
      "en": "There are three",
      "zh-TW": "有三個",
      "zh-CN": "有三个",
      "ko": "[There are three]",
      "vi": "[There are three]",
      "id": "[There are three]"
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
      "ko": "[four things]",
      "vi": "[four things]",
      "id": "[four things]"
    },
    "ex": "四つください",
    "exm": {
      "en": "Four please",
      "zh-TW": "請給四個",
      "zh-CN": "请给四个",
      "ko": "[Four please]",
      "vi": "[Four please]",
      "id": "[Four please]"
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
      "ko": "[five things]",
      "vi": "[five things]",
      "id": "[five things]"
    },
    "ex": "五つ食べた",
    "exm": {
      "en": "Ate five",
      "zh-TW": "吃了五個",
      "zh-CN": "吃了五个",
      "ko": "[Ate five]",
      "vi": "[Ate five]",
      "id": "[Ate five]"
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
      "ko": "[one person]",
      "vi": "[one person]",
      "id": "[one person]"
    },
    "ex": "一人で行く",
    "exm": {
      "en": "Go alone",
      "zh-TW": "一個人去",
      "zh-CN": "一个人去",
      "ko": "[Go alone]",
      "vi": "[Go alone]",
      "id": "[Go alone]"
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
      "ko": "[two people]",
      "vi": "[two people]",
      "id": "[two people]"
    },
    "ex": "二人で行く",
    "exm": {
      "en": "Go with two",
      "zh-TW": "兩個人去",
      "zh-CN": "两个人去",
      "ko": "[Go with two]",
      "vi": "[Go with two]",
      "id": "[Go with two]"
    }
  },
  {
    "id": "V0534",
    "w": "一回",
    "r": "いっかい",
    "m": {
      "en": "one time",
      "zh-TW": "一次",
      "zh-CN": "一次",
      "ko": "[one time]",
      "vi": "[one time]",
      "id": "[one time]"
    },
    "ex": "一回行った",
    "exm": {
      "en": "Went once",
      "zh-TW": "去了一次",
      "zh-CN": "去了一次",
      "ko": "[Went once]",
      "vi": "[Went once]",
      "id": "[Went once]"
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
      "ko": "[one (long)]",
      "vi": "[one (long)]",
      "id": "[one (long)]"
    },
    "ex": "ペンを一本",
    "exm": {
      "en": "One pen",
      "zh-TW": "一支筆",
      "zh-CN": "一支笔",
      "ko": "[One pen]",
      "vi": "[One pen]",
      "id": "[One pen]"
    }
  },
  {
    "id": "V0536",
    "w": "一枚",
    "r": "いちまい",
    "m": {
      "en": "one (flat)",
      "zh-TW": "一張",
      "zh-CN": "一张",
      "ko": "[one (flat)]",
      "vi": "[one (flat)]",
      "id": "[one (flat)]"
    },
    "ex": "紙を一枚",
    "exm": {
      "en": "One paper",
      "zh-TW": "一張紙",
      "zh-CN": "一张纸",
      "ko": "[One paper]",
      "vi": "[One paper]",
      "id": "[One paper]"
    }
  },
  {
    "id": "V0537",
    "w": "映画",
    "r": "えいが",
    "m": {
      "en": "movie",
      "zh-TW": "電影",
      "zh-CN": "电影",
      "ko": "[movie]",
      "vi": "[movie]",
      "id": "[movie]"
    },
    "ex": "映画を見る",
    "exm": {
      "en": "Watch movie",
      "zh-TW": "看電影",
      "zh-CN": "看电影",
      "ko": "[Watch movie]",
      "vi": "[Watch movie]",
      "id": "[Watch movie]"
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
      "ko": "[music]",
      "vi": "[music]",
      "id": "[music]"
    },
    "ex": "音楽を聞く",
    "exm": {
      "en": "Listen to music",
      "zh-TW": "聽音樂",
      "zh-CN": "听音乐",
      "ko": "[Listen to music]",
      "vi": "[Listen to music]",
      "id": "[Listen to music]"
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
      "ko": "[sports]",
      "vi": "[sports]",
      "id": "[sports]"
    },
    "ex": "スポーツをする",
    "exm": {
      "en": "Do sports",
      "zh-TW": "做運動",
      "zh-CN": "做运动",
      "ko": "[Do sports]",
      "vi": "[Do sports]",
      "id": "[Do sports]"
    }
  },
  {
    "id": "V0540",
    "w": "趣味",
    "r": "しゅみ",
    "m": {
      "en": "hobby",
      "zh-TW": "興趣",
      "zh-CN": "兴趣",
      "ko": "[hobby]",
      "vi": "[hobby]",
      "id": "[hobby]"
    },
    "ex": "趣味は何",
    "exm": {
      "en": "What's your hobby?",
      "zh-TW": "興趣是什麼",
      "zh-CN": "兴趣是什么",
      "ko": "[What's your hobby?]",
      "vi": "[What's your hobby?]",
      "id": "[What's your hobby?]"
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
      "ko": "[holiday]",
      "vi": "[holiday]",
      "id": "[holiday]"
    },
    "ex": "明日は休み",
    "exm": {
      "en": "Tomorrow off",
      "zh-TW": "明天休息",
      "zh-CN": "明天休息",
      "ko": "[Tomorrow off]",
      "vi": "[Tomorrow off]",
      "id": "[Tomorrow off]"
    }
  },
  {
    "id": "V0542",
    "w": "旅行",
    "r": "りょこう",
    "m": {
      "en": "travel",
      "zh-TW": "旅行",
      "zh-CN": "旅行",
      "ko": "[travel]",
      "vi": "[travel]",
      "id": "[travel]"
    },
    "ex": "旅行に行く",
    "exm": {
      "en": "Go on trip",
      "zh-TW": "去旅行",
      "zh-CN": "去旅行",
      "ko": "[Go on trip]",
      "vi": "[Go on trip]",
      "id": "[Go on trip]"
    }
  },
  {
    "id": "V0543",
    "w": "仕事",
    "r": "しごと",
    "m": {
      "en": "work",
      "zh-TW": "工作",
      "zh-CN": "工作",
      "ko": "[work]",
      "vi": "[work]",
      "id": "[work]"
    },
    "ex": "仕事をする",
    "exm": {
      "en": "Do work",
      "zh-TW": "工作",
      "zh-CN": "工作",
      "ko": "[Do work]",
      "vi": "[Do work]",
      "id": "[Do work]"
    }
  },
  {
    "id": "V0544",
    "w": "会議",
    "r": "かいぎ",
    "m": {
      "en": "meeting",
      "zh-TW": "會議",
      "zh-CN": "会议",
      "ko": "[meeting]",
      "vi": "[meeting]",
      "id": "[meeting]"
    },
    "ex": "会議に出る",
    "exm": {
      "en": "Attend meeting",
      "zh-TW": "開會",
      "zh-CN": "开会",
      "ko": "[Attend meeting]",
      "vi": "[Attend meeting]",
      "id": "[Attend meeting]"
    }
  },
  {
    "id": "V0545",
    "w": "宿題",
    "r": "しゅくだい",
    "m": {
      "en": "homework",
      "zh-TW": "作業",
      "zh-CN": "作业",
      "ko": "[homework]",
      "vi": "[homework]",
      "id": "[homework]"
    },
    "ex": "宿題をする",
    "exm": {
      "en": "Do homework",
      "zh-TW": "做作業",
      "zh-CN": "做作业",
      "ko": "[Do homework]",
      "vi": "[Do homework]",
      "id": "[Do homework]"
    }
  },
  {
    "id": "V0546",
    "w": "試験",
    "r": "しけん",
    "m": {
      "en": "exam",
      "zh-TW": "考試",
      "zh-CN": "考试",
      "ko": "[exam]",
      "vi": "[exam]",
      "id": "[exam]"
    },
    "ex": "試験を受ける",
    "exm": {
      "en": "Take exam",
      "zh-TW": "考試",
      "zh-CN": "考试",
      "ko": "[Take exam]",
      "vi": "[Take exam]",
      "id": "[Take exam]"
    }
  },
  {
    "id": "V0547",
    "w": "問題",
    "r": "もんだい",
    "m": {
      "en": "problem",
      "zh-TW": "問題",
      "zh-CN": "问题",
      "ko": "[problem]",
      "vi": "[problem]",
      "id": "[problem]"
    },
    "ex": "問題を解く",
    "exm": {
      "en": "Solve problem",
      "zh-TW": "解決問題",
      "zh-CN": "解决问题",
      "ko": "[Solve problem]",
      "vi": "[Solve problem]",
      "id": "[Solve problem]"
    }
  },
  {
    "id": "V0548",
    "w": "答え",
    "r": "こたえ",
    "m": {
      "en": "answer",
      "zh-TW": "答案",
      "zh-CN": "答案",
      "ko": "[answer]",
      "vi": "[answer]",
      "id": "[answer]"
    },
    "ex": "答えを書く",
    "exm": {
      "en": "Write answer",
      "zh-TW": "寫答案",
      "zh-CN": "写答案",
      "ko": "[Write answer]",
      "vi": "[Write answer]",
      "id": "[Write answer]"
    }
  },
  {
    "id": "V0549",
    "w": "質問",
    "r": "しつもん",
    "m": {
      "en": "question",
      "zh-TW": "問題",
      "zh-CN": "问题",
      "ko": "[question]",
      "vi": "[question]",
      "id": "[question]"
    },
    "ex": "質問がある",
    "exm": {
      "en": "Have question",
      "zh-TW": "有問題",
      "zh-CN": "有问题",
      "ko": "[Have question]",
      "vi": "[Have question]",
      "id": "[Have question]"
    }
  },
  {
    "id": "V0550",
    "w": "意味",
    "r": "いみ",
    "m": {
      "en": "meaning",
      "zh-TW": "意思",
      "zh-CN": "意思",
      "ko": "[meaning]",
      "vi": "[meaning]",
      "id": "[meaning]"
    },
    "ex": "意味が分かる",
    "exm": {
      "en": "Understand",
      "zh-TW": "了解意思",
      "zh-CN": "了解意思",
      "ko": "[Understand]",
      "vi": "[Understand]",
      "id": "[Understand]"
    }
  },
  {
    "id": "V0551",
    "w": "言葉",
    "r": "ことば",
    "m": {
      "en": "word",
      "zh-TW": "單詞",
      "zh-CN": "单词",
      "ko": "단어",
      "vi": "Từ",
      "id": "Kata"
    },
    "ex": "言葉を覚える",
    "exm": {
      "en": "Learn words",
      "zh-TW": "記住話",
      "zh-CN": "记住话",
      "ko": "[Learn words]",
      "vi": "[Learn words]",
      "id": "[Learn words]"
    }
  },
  {
    "id": "V0552",
    "w": "漢字",
    "r": "かんじ",
    "m": {
      "en": "kanji",
      "zh-TW": "漢字",
      "zh-CN": "汉字",
      "ko": "[kanji]",
      "vi": "[kanji]",
      "id": "[kanji]"
    },
    "ex": "漢字を覚える",
    "exm": {
      "en": "Learn kanji",
      "zh-TW": "記漢字",
      "zh-CN": "记汉字",
      "ko": "[Learn kanji]",
      "vi": "[Learn kanji]",
      "id": "[Learn kanji]"
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
      "id": "Nama"
    },
    "ex": "名前を書く",
    "exm": {
      "en": "Write name",
      "zh-TW": "寫名字",
      "zh-CN": "写名字",
      "ko": "[Write name]",
      "vi": "[Write name]",
      "id": "[Write name]"
    }
  },
  {
    "id": "V0554",
    "w": "住所",
    "r": "じゅうしょ",
    "m": {
      "en": "address",
      "zh-TW": "地址",
      "zh-CN": "地址",
      "ko": "[address]",
      "vi": "[address]",
      "id": "[address]"
    },
    "ex": "住所を書く",
    "exm": {
      "en": "Write address",
      "zh-TW": "寫地址",
      "zh-CN": "写地址",
      "ko": "[Write address]",
      "vi": "[Write address]",
      "id": "[Write address]"
    }
  },
  {
    "id": "V0555",
    "w": "誕生日",
    "r": "たんじょうび",
    "m": {
      "en": "birthday",
      "zh-TW": "生日",
      "zh-CN": "生日",
      "ko": "[birthday]",
      "vi": "[birthday]",
      "id": "[birthday]"
    },
    "ex": "誕生日を祝う",
    "exm": {
      "en": "Celebrate",
      "zh-TW": "慶祝生日",
      "zh-CN": "庆祝生日",
      "ko": "[Celebrate]",
      "vi": "[Celebrate]",
      "id": "[Celebrate]"
    }
  },
  {
    "id": "V0556",
    "w": "犬",
    "r": "いぬ",
    "m": {
      "en": "dog",
      "zh-TW": "狗",
      "zh-CN": "狗",
      "ko": "개",
      "vi": "Chó",
      "id": "Anjing"
    },
    "ex": "犬を飼う",
    "exm": {
      "en": "Keep dog",
      "zh-TW": "養狗",
      "zh-CN": "养狗",
      "ko": "[Keep dog]",
      "vi": "[Keep dog]",
      "id": "[Keep dog]"
    }
  },
  {
    "id": "V0557",
    "w": "猫",
    "r": "ねこ",
    "m": {
      "en": "cat",
      "zh-TW": "貓",
      "zh-CN": "猫",
      "ko": "고양이",
      "vi": "Mèo",
      "id": "Kucing"
    },
    "ex": "猫が好き",
    "exm": {
      "en": "Like cats",
      "zh-TW": "喜歡貓",
      "zh-CN": "喜欢猫",
      "ko": "[Like cats]",
      "vi": "[Like cats]",
      "id": "[Like cats]"
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
      "id": "Burung"
    },
    "ex": "鳥が飛ぶ",
    "exm": {
      "en": "Bird flies",
      "zh-TW": "鳥飛",
      "zh-CN": "鸟飞",
      "ko": "[Bird flies]",
      "vi": "[Bird flies]",
      "id": "[Bird flies]"
    }
  },
  {
    "id": "V0559",
    "w": "動物",
    "r": "どうぶつ",
    "m": {
      "en": "animal",
      "zh-TW": "動物",
      "zh-CN": "动物",
      "ko": "동물",
      "vi": "Động vật",
      "id": "Hewan"
    },
    "ex": "動物が好き",
    "exm": {
      "en": "Like animals",
      "zh-TW": "喜歡動物",
      "zh-CN": "喜欢动物",
      "ko": "[Like animals]",
      "vi": "[Like animals]",
      "id": "[Like animals]"
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
      "id": "Mobil"
    },
    "ex": "車を運転する",
    "exm": {
      "en": "Drive car",
      "zh-TW": "開車",
      "zh-CN": "开车",
      "ko": "[Drive car]",
      "vi": "[Drive car]",
      "id": "[Drive car]"
    }
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
      "id": "Kereta"
    },
    "ex": "電車に乗る",
    "exm": {
      "en": "Ride train",
      "zh-TW": "搭電車",
      "zh-CN": "坐电车",
      "ko": "[Ride train]",
      "vi": "[Ride train]",
      "id": "[Ride train]"
    }
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
      "id": "Bus"
    },
    "ex": "バスに乗る",
    "exm": {
      "en": "Ride bus",
      "zh-TW": "搭公車",
      "zh-CN": "坐公交车",
      "ko": "[Ride bus]",
      "vi": "[Ride bus]",
      "id": "[Ride bus]"
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
      "id": "Taksi"
    },
    "ex": "タクシーに乗る",
    "exm": {
      "en": "Take taxi",
      "zh-TW": "搭計程車",
      "zh-CN": "打出租车",
      "ko": "[Take taxi]",
      "vi": "[Take taxi]",
      "id": "[Take taxi]"
    }
  },
  {
    "id": "V0564",
    "w": "飛行機",
    "r": "ひこうき",
    "m": {
      "en": "airplane",
      "zh-TW": "飛機",
      "zh-CN": "飞机",
      "ko": "비행기",
      "vi": "Máy bay",
      "id": "Pesawat"
    },
    "ex": "飛行機に乗る",
    "exm": {
      "en": "Ride airplane",
      "zh-TW": "搭飛機",
      "zh-CN": "坐飞机",
      "ko": "[Ride airplane]",
      "vi": "[Ride airplane]",
      "id": "[Ride airplane]"
    }
  },
  {
    "id": "V0565",
    "w": "自転車",
    "r": "じてんしゃ",
    "m": {
      "en": "bicycle",
      "zh-TW": "自行車",
      "zh-CN": "自行车",
      "ko": "자전거",
      "vi": "Xe đạp",
      "id": "Sepeda"
    },
    "ex": "自転車に乗る",
    "exm": {
      "en": "Ride bicycle",
      "zh-TW": "騎腳踏車",
      "zh-CN": "骑自行车",
      "ko": "[Ride bicycle]",
      "vi": "[Ride bicycle]",
      "id": "[Ride bicycle]"
    }
  },
  {
    "id": "V0566",
    "w": "切符",
    "r": "きっぷ",
    "m": {
      "en": "ticket",
      "zh-TW": "票",
      "zh-CN": "票",
      "ko": "[ticket]",
      "vi": "[ticket]",
      "id": "[ticket]"
    },
    "ex": "切符を買う",
    "exm": {
      "en": "Buy ticket",
      "zh-TW": "買票",
      "zh-CN": "买票",
      "ko": "[Buy ticket]",
      "vi": "[Buy ticket]",
      "id": "[Buy ticket]"
    }
  },
  {
    "id": "V0567",
    "w": "体",
    "r": "からだ",
    "m": {
      "en": "body",
      "zh-TW": "身體",
      "zh-CN": "身体",
      "ko": "[body]",
      "vi": "[body]",
      "id": "[body]"
    },
    "ex": "体が大きい",
    "exm": {
      "en": "Big body",
      "zh-TW": "身體大",
      "zh-CN": "身体大",
      "ko": "[Big body]",
      "vi": "[Big body]",
      "id": "[Big body]"
    }
  },
  {
    "id": "V0568",
    "w": "頭",
    "r": "あたま",
    "m": {
      "en": "head",
      "zh-TW": "頭",
      "zh-CN": "头",
      "ko": "[head]",
      "vi": "[head]",
      "id": "[head]"
    },
    "ex": "頭が痛い",
    "exm": {
      "en": "Headache",
      "zh-TW": "頭痛",
      "zh-CN": "头痛",
      "ko": "[Headache]",
      "vi": "[Headache]",
      "id": "[Headache]"
    }
  },
  {
    "id": "V0569",
    "w": "顔",
    "r": "かお",
    "m": {
      "en": "face",
      "zh-TW": "臉",
      "zh-CN": "脸",
      "ko": "[face]",
      "vi": "[face]",
      "id": "[face]"
    },
    "ex": "顔を洗う",
    "exm": {
      "en": "Wash face",
      "zh-TW": "洗臉",
      "zh-CN": "洗脸",
      "ko": "[Wash face]",
      "vi": "[Wash face]",
      "id": "[Wash face]"
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
      "ko": "[eye]",
      "vi": "[eye]",
      "id": "[eye]"
    },
    "ex": "目が大きい",
    "exm": {
      "en": "Big eyes",
      "zh-TW": "眼睛大",
      "zh-CN": "眼睛大",
      "ko": "[Big eyes]",
      "vi": "[Big eyes]",
      "id": "[Big eyes]"
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
      "ko": "[ear]",
      "vi": "[ear]",
      "id": "[ear]"
    },
    "ex": "耳が痛い",
    "exm": {
      "en": "Ear hurts",
      "zh-TW": "耳朵痛",
      "zh-CN": "耳朵痛",
      "ko": "[Ear hurts]",
      "vi": "[Ear hurts]",
      "id": "[Ear hurts]"
    }
  },
  {
    "id": "V0572",
    "w": "鼻",
    "r": "はな",
    "m": {
      "en": "nose",
      "zh-TW": "鼻子",
      "zh-CN": "鼻子",
      "ko": "[nose]",
      "vi": "[nose]",
      "id": "[nose]"
    },
    "ex": "鼻が高い",
    "exm": {
      "en": "Tall nose",
      "zh-TW": "鼻子高",
      "zh-CN": "鼻子高",
      "ko": "[Tall nose]",
      "vi": "[Tall nose]",
      "id": "[Tall nose]"
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
      "ko": "[mouth]",
      "vi": "[mouth]",
      "id": "[mouth]"
    },
    "ex": "口を開ける",
    "exm": {
      "en": "Open mouth",
      "zh-TW": "張嘴",
      "zh-CN": "张嘴",
      "ko": "[Open mouth]",
      "vi": "[Open mouth]",
      "id": "[Open mouth]"
    }
  },
  {
    "id": "V0574",
    "w": "歯",
    "r": "は",
    "m": {
      "en": "tooth",
      "zh-TW": "牙齒",
      "zh-CN": "牙齿",
      "ko": "[tooth]",
      "vi": "[tooth]",
      "id": "[tooth]"
    },
    "ex": "歯を磨く",
    "exm": {
      "en": "Brush teeth",
      "zh-TW": "刷牙",
      "zh-CN": "刷牙",
      "ko": "[Brush teeth]",
      "vi": "[Brush teeth]",
      "id": "[Brush teeth]"
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
      "ko": "[hand]",
      "vi": "[hand]",
      "id": "[hand]"
    },
    "ex": "手を洗う",
    "exm": {
      "en": "Wash hands",
      "zh-TW": "洗手",
      "zh-CN": "洗手",
      "ko": "[Wash hands]",
      "vi": "[Wash hands]",
      "id": "[Wash hands]"
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
      "ko": "[leg]",
      "vi": "[leg]",
      "id": "[leg]"
    },
    "ex": "足が痛い",
    "exm": {
      "en": "Foot hurts",
      "zh-TW": "腳痛",
      "zh-CN": "脚痛",
      "ko": "[Foot hurts]",
      "vi": "[Foot hurts]",
      "id": "[Foot hurts]"
    }
  },
  {
    "id": "V0577",
    "w": "服",
    "r": "ふく",
    "m": {
      "en": "clothes",
      "zh-TW": "衣服",
      "zh-CN": "衣服",
      "ko": "[clothes]",
      "vi": "[clothes]",
      "id": "[clothes]"
    },
    "ex": "服を着る",
    "exm": {
      "en": "Wear clothes",
      "zh-TW": "穿衣服",
      "zh-CN": "穿衣服",
      "ko": "[Wear clothes]",
      "vi": "[Wear clothes]",
      "id": "[Wear clothes]"
    }
  },
  {
    "id": "V0578",
    "w": "靴",
    "r": "くつ",
    "m": {
      "en": "shoes",
      "zh-TW": "鞋子",
      "zh-CN": "鞋子",
      "ko": "[shoes]",
      "vi": "[shoes]",
      "id": "[shoes]"
    },
    "ex": "靴を履く",
    "exm": {
      "en": "Wear shoes",
      "zh-TW": "穿鞋",
      "zh-CN": "穿鞋",
      "ko": "[Wear shoes]",
      "vi": "[Wear shoes]",
      "id": "[Wear shoes]"
    }
  },
  {
    "id": "V0579",
    "w": "帽子",
    "r": "ぼうし",
    "m": {
      "en": "hat",
      "zh-TW": "帽子",
      "zh-CN": "帽子",
      "ko": "[hat]",
      "vi": "[hat]",
      "id": "[hat]"
    },
    "ex": "帽子をかぶる",
    "exm": {
      "en": "Wear hat",
      "zh-TW": "戴帽子",
      "zh-CN": "戴帽子",
      "ko": "[Wear hat]",
      "vi": "[Wear hat]",
      "id": "[Wear hat]"
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
      "id": "Warna"
    },
    "ex": "何色が好き",
    "exm": {
      "en": "What color?",
      "zh-TW": "喜歡什麼色",
      "zh-CN": "喜欢什么色",
      "ko": "[What color?]",
      "vi": "[What color?]",
      "id": "[What color?]"
    }
  },
  {
    "id": "V0581",
    "w": "値段",
    "r": "ねだん",
    "m": {
      "en": "price",
      "zh-TW": "價格",
      "zh-CN": "价格",
      "ko": "[price]",
      "vi": "[price]",
      "id": "[price]"
    },
    "ex": "値段を聞く",
    "exm": {
      "en": "Ask price",
      "zh-TW": "問價格",
      "zh-CN": "问价格",
      "ko": "[Ask price]",
      "vi": "[Ask price]",
      "id": "[Ask price]"
    }
  },
  {
    "id": "V0582",
    "w": "買い物",
    "r": "かいもの",
    "m": {
      "en": "shopping",
      "zh-TW": "購物",
      "zh-CN": "购物",
      "ko": "[shopping]",
      "vi": "[shopping]",
      "id": "[shopping]"
    },
    "ex": "買い物に行く",
    "exm": {
      "en": "Go shopping",
      "zh-TW": "去購物",
      "zh-CN": "去购物",
      "ko": "[Go shopping]",
      "vi": "[Go shopping]",
      "id": "[Go shopping]"
    }
  },
  {
    "id": "V0583",
    "w": "予約",
    "r": "よやく",
    "m": {
      "en": "reservation",
      "zh-TW": "預約",
      "zh-CN": "预约",
      "ko": "[reservation]",
      "vi": "[reservation]",
      "id": "[reservation]"
    },
    "ex": "予約する",
    "exm": {
      "en": "Reserve",
      "zh-TW": "預約",
      "zh-CN": "预约",
      "ko": "[Reserve]",
      "vi": "[Reserve]",
      "id": "[Reserve]"
    }
  },
  {
    "id": "V0584",
    "w": "薬",
    "r": "くすり",
    "m": {
      "en": "medicine",
      "zh-TW": "藥",
      "zh-CN": "药",
      "ko": "[medicine]",
      "vi": "[medicine]",
      "id": "[medicine]"
    },
    "ex": "薬を飲む",
    "exm": {
      "en": "Take medicine",
      "zh-TW": "吃藥",
      "zh-CN": "吃药",
      "ko": "[Take medicine]",
      "vi": "[Take medicine]",
      "id": "[Take medicine]"
    }
  },
  {
    "id": "V0585",
    "w": "風邪",
    "r": "かぜ",
    "m": {
      "en": "cold",
      "zh-TW": "冷",
      "zh-CN": "冷",
      "ko": "추운",
      "vi": "Lạnh",
      "id": "Dingin"
    },
    "ex": "風邪をひく",
    "exm": {
      "en": "Catch cold",
      "zh-TW": "感冒了",
      "zh-CN": "感冒了",
      "ko": "[Catch cold]",
      "vi": "[Catch cold]",
      "id": "[Catch cold]"
    }
  },
  {
    "id": "V0586",
    "w": "約束",
    "r": "やくそく",
    "m": {
      "en": "promise",
      "zh-TW": "約定",
      "zh-CN": "约定",
      "ko": "[promise]",
      "vi": "[promise]",
      "id": "[promise]"
    },
    "ex": "約束を守る",
    "exm": {
      "en": "Keep promise",
      "zh-TW": "遵守約定",
      "zh-CN": "遵守约定",
      "ko": "[Keep promise]",
      "vi": "[Keep promise]",
      "id": "[Keep promise]"
    }
  },
  {
    "id": "V0587",
    "w": "練習",
    "r": "れんしゅう",
    "m": {
      "en": "practice",
      "zh-TW": "練習",
      "zh-CN": "练习",
      "ko": "[practice]",
      "vi": "[practice]",
      "id": "[practice]"
    },
    "ex": "練習する",
    "exm": {
      "en": "Practice",
      "zh-TW": "練習",
      "zh-CN": "练习",
      "ko": "[Practice]",
      "vi": "[Practice]",
      "id": "[Practice]"
    }
  },
  {
    "id": "V0588",
    "w": "準備",
    "r": "じゅんび",
    "m": {
      "en": "preparation",
      "zh-TW": "準備",
      "zh-CN": "准备",
      "ko": "[preparation]",
      "vi": "[preparation]",
      "id": "[preparation]"
    },
    "ex": "準備をする",
    "exm": {
      "en": "Prepare",
      "zh-TW": "準備",
      "zh-CN": "准备",
      "ko": "[Prepare]",
      "vi": "[Prepare]",
      "id": "[Prepare]"
    }
  },
  {
    "id": "V0589",
    "w": "紹介",
    "r": "しょうかい",
    "m": {
      "en": "introduction",
      "zh-TW": "介紹",
      "zh-CN": "介绍",
      "ko": "[introduction]",
      "vi": "[introduction]",
      "id": "[introduction]"
    },
    "ex": "紹介する",
    "exm": {
      "en": "Introduce",
      "zh-TW": "介紹",
      "zh-CN": "介绍",
      "ko": "[Introduce]",
      "vi": "[Introduce]",
      "id": "[Introduce]"
    }
  },
  {
    "id": "V0590",
    "w": "連絡",
    "r": "れんらく",
    "m": {
      "en": "contact",
      "zh-TW": "聯絡",
      "zh-CN": "联络",
      "ko": "[contact]",
      "vi": "[contact]",
      "id": "[contact]"
    },
    "ex": "連絡する",
    "exm": {
      "en": "Contact",
      "zh-TW": "聯絡",
      "zh-CN": "联络",
      "ko": "[Contact]",
      "vi": "[Contact]",
      "id": "[Contact]"
    }
  },
  {
    "id": "V0591",
    "w": "全部",
    "r": "ぜんぶ",
    "m": {
      "en": "all",
      "zh-TW": "全部",
      "zh-CN": "全部",
      "ko": "[all]",
      "vi": "[all]",
      "id": "[all]"
    },
    "ex": "全部食べる",
    "exm": {
      "en": "Eat all",
      "zh-TW": "全部吃",
      "zh-CN": "全部吃",
      "ko": "[Eat all]",
      "vi": "[Eat all]",
      "id": "[Eat all]"
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
      "ko": "[half]",
      "vi": "[half]",
      "id": "[half]"
    },
    "ex": "半分食べる",
    "exm": {
      "en": "Eat half",
      "zh-TW": "吃一半",
      "zh-CN": "吃一半",
      "ko": "[Eat half]",
      "vi": "[Eat half]",
      "id": "[Eat half]"
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
      "ko": "[oneself]",
      "vi": "[oneself]",
      "id": "[oneself]"
    },
    "ex": "自分でする",
    "exm": {
      "en": "Do by oneself",
      "zh-TW": "自己做",
      "zh-CN": "自己做",
      "ko": "[Do by oneself]",
      "vi": "[Do by oneself]",
      "id": "[Do by oneself]"
    }
  },
  {
    "id": "V0594",
    "w": "皆",
    "r": "みんな",
    "m": {
      "en": "everyone",
      "zh-TW": "大家",
      "zh-CN": "大家",
      "ko": "[everyone]",
      "vi": "[everyone]",
      "id": "[everyone]"
    },
    "ex": "皆で行く",
    "exm": {
      "en": "Go together",
      "zh-TW": "大家去",
      "zh-CN": "大家去",
      "ko": "[Go together]",
      "vi": "[Go together]",
      "id": "[Go together]"
    }
  },
  {
    "id": "V0595",
    "w": "本当",
    "r": "ほんとう",
    "m": {
      "en": "truth",
      "zh-TW": "真的",
      "zh-CN": "真的",
      "ko": "[truth]",
      "vi": "[truth]",
      "id": "[truth]"
    },
    "ex": "本当ですか",
    "exm": {
      "en": "Is it true?",
      "zh-TW": "真的嗎",
      "zh-CN": "真的吗",
      "ko": "[Is it true?]",
      "vi": "[Is it true?]",
      "id": "[Is it true?]"
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
      "ko": "[exit]",
      "vi": "[exit]",
      "id": "[exit]"
    },
    "ex": "出口はどこ",
    "exm": {
      "en": "Where exit?",
      "zh-TW": "出口在哪",
      "zh-CN": "出口在哪",
      "ko": "[Where exit?]",
      "vi": "[Where exit?]",
      "id": "[Where exit?]"
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
      "id": "ukuran"
    },
    "ex": "サイズを選ぶ",
    "exm": {
      "en": "choose size",
      "zh-TW": "選尺寸",
      "zh-CN": "选尺寸",
      "ko": "사이즈를 고르다",
      "vi": "chọn kích cỡ",
      "id": "memilih ukuran"
    }
  },
  {
    "id": "V0598",
    "w": "割引",
    "r": "わりびき",
    "m": {
      "en": "discount",
      "zh-TW": "折扣",
      "zh-CN": "折扣",
      "ko": "할인",
      "vi": "giảm giá",
      "id": "diskon"
    },
    "ex": "割引がある",
    "exm": {
      "en": "there is discount",
      "zh-TW": "有折扣",
      "zh-CN": "有折扣",
      "ko": "할인이 있다",
      "vi": "có giảm giá",
      "id": "ada diskon"
    }
  },
  {
    "id": "V0599",
    "w": "現金",
    "r": "げんきん",
    "m": {
      "en": "cash",
      "zh-TW": "現金",
      "zh-CN": "现金",
      "ko": "현금",
      "vi": "tiền mặt",
      "id": "tunai"
    },
    "ex": "現金で払う",
    "exm": {
      "en": "pay in cash",
      "zh-TW": "付現",
      "zh-CN": "付现",
      "ko": "현금으로 내다",
      "vi": "trả tiền mặt",
      "id": "bayar tunai"
    }
  },
  {
    "id": "V0600",
    "w": "注文",
    "r": "ちゅうもん",
    "m": {
      "en": "order",
      "zh-TW": "點餐",
      "zh-CN": "点餐",
      "ko": "주문",
      "vi": "gọi món",
      "id": "pesanan"
    },
    "ex": "注文する",
    "exm": {
      "en": "order",
      "zh-TW": "點餐",
      "zh-CN": "点餐",
      "ko": "주문하다",
      "vi": "gọi món",
      "id": "memesan"
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
      "id": "tagihan"
    },
    "ex": "会計をする",
    "exm": {
      "en": "pay bill",
      "zh-TW": "結帳",
      "zh-CN": "结账",
      "ko": "계산하다",
      "vi": "thanh toán",
      "id": "membayar"
    }
  },
  {
    "id": "V0602",
    "w": "無料",
    "r": "むりょう",
    "m": {
      "en": "free",
      "zh-TW": "空閒",
      "zh-CN": "空闲",
      "ko": "한가한",
      "vi": "Rảnh",
      "id": "Bebas"
    },
    "ex": "無料です",
    "exm": {
      "en": "it is free",
      "zh-TW": "免費",
      "zh-CN": "免费",
      "ko": "무료입니다",
      "vi": "miễn phí",
      "id": "gratis"
    }
  },
  {
    "id": "V0603",
    "w": "心配",
    "r": "しんぱい",
    "m": {
      "en": "worry",
      "zh-TW": "擔心",
      "zh-CN": "担心",
      "ko": "걱정",
      "vi": "lo lắng",
      "id": "khawatir"
    },
    "ex": "心配しないで",
    "exm": {
      "en": "don't worry",
      "zh-TW": "別擔心",
      "zh-CN": "别担心",
      "ko": "걱정하지 마",
      "vi": "đừng lo",
      "id": "jangan khawatir"
    }
  },
  {
    "id": "V0604",
    "w": "安心",
    "r": "あんしん",
    "m": {
      "en": "relief",
      "zh-TW": "放心",
      "zh-CN": "放心",
      "ko": "안심",
      "vi": "yên tâm",
      "id": "lega"
    },
    "ex": "安心する",
    "exm": {
      "en": "feel relieved",
      "zh-TW": "放心",
      "zh-CN": "放心",
      "ko": "안심하다",
      "vi": "yên tâm",
      "id": "merasa lega"
    }
  },
  {
    "id": "V0605",
    "w": "夢",
    "r": "ゆめ",
    "m": {
      "en": "dream",
      "zh-TW": "夢",
      "zh-CN": "梦",
      "ko": "꿈",
      "vi": "giấc mơ",
      "id": "mimpi"
    },
    "ex": "夢を見る",
    "exm": {
      "en": "have a dream",
      "zh-TW": "做夢",
      "zh-CN": "做梦",
      "ko": "꿈을 꾸다",
      "vi": "mơ",
      "id": "bermimpi"
    }
  },
  {
    "id": "V0606",
    "w": "努力",
    "r": "どりょく",
    "m": {
      "en": "effort",
      "zh-TW": "努力",
      "zh-CN": "努力",
      "ko": "노력",
      "vi": "nỗ lực",
      "id": "usaha"
    },
    "ex": "努力する",
    "exm": {
      "en": "make effort",
      "zh-TW": "努力",
      "zh-CN": "努力",
      "ko": "노력하다",
      "vi": "nỗ lực",
      "id": "berusaha"
    }
  },
  {
    "id": "V0607",
    "w": "成功",
    "r": "せいこう",
    "m": {
      "en": "success",
      "zh-TW": "成功",
      "zh-CN": "成功",
      "ko": "성공",
      "vi": "thành công",
      "id": "sukses"
    },
    "ex": "成功する",
    "exm": {
      "en": "succeed",
      "zh-TW": "成功",
      "zh-CN": "成功",
      "ko": "성공하다",
      "vi": "thành công",
      "id": "berhasil"
    }
  },
  {
    "id": "V0608",
    "w": "失敗",
    "r": "しっぱい",
    "m": {
      "en": "failure",
      "zh-TW": "失敗",
      "zh-CN": "失败",
      "ko": "실패",
      "vi": "thất bại",
      "id": "gagal"
    },
    "ex": "失敗する",
    "exm": {
      "en": "fail",
      "zh-TW": "失敗",
      "zh-CN": "失败",
      "ko": "실패하다",
      "vi": "thất bại",
      "id": "gagal"
    }
  },
  {
    "id": "V0609",
    "w": "経験",
    "r": "けいけん",
    "m": {
      "en": "experience",
      "zh-TW": "經驗",
      "zh-CN": "经验",
      "ko": "경험",
      "vi": "kinh nghiệm",
      "id": "pengalaman"
    },
    "ex": "経験がある",
    "exm": {
      "en": "have experience",
      "zh-TW": "有經驗",
      "zh-CN": "有经验",
      "ko": "경험이 있다",
      "vi": "có kinh nghiệm",
      "id": "punya pengalaman"
    }
  },
  {
    "id": "V0610",
    "w": "興味",
    "r": "きょうみ",
    "m": {
      "en": "interest",
      "zh-TW": "興趣",
      "zh-CN": "兴趣",
      "ko": "흥미",
      "vi": "hứng thú",
      "id": "minat"
    },
    "ex": "興味がある",
    "exm": {
      "en": "have interest",
      "zh-TW": "有興趣",
      "zh-CN": "有兴趣",
      "ko": "흥미가 있다",
      "vi": "có hứng thú",
      "id": "punya minat"
    }
  },
  {
    "id": "V0611",
    "w": "理由",
    "r": "りゆう",
    "m": {
      "en": "reason",
      "zh-TW": "理由",
      "zh-CN": "理由",
      "ko": "이유",
      "vi": "lý do",
      "id": "alasan"
    },
    "ex": "理由を聞く",
    "exm": {
      "en": "ask reason",
      "zh-TW": "問理由",
      "zh-CN": "问理由",
      "ko": "이유를 묻다",
      "vi": "hỏi lý do",
      "id": "bertanya alasan"
    }
  },
  {
    "id": "V0612",
    "w": "結果",
    "r": "けっか",
    "m": {
      "en": "result",
      "zh-TW": "結果",
      "zh-CN": "结果",
      "ko": "결과",
      "vi": "kết quả",
      "id": "hasil"
    },
    "ex": "結果を待つ",
    "exm": {
      "en": "wait for result",
      "zh-TW": "等結果",
      "zh-CN": "等结果",
      "ko": "결과를 기다리다",
      "vi": "chờ kết quả",
      "id": "menunggu hasil"
    }
  },
  {
    "id": "V0613",
    "w": "関係",
    "r": "かんけい",
    "m": {
      "en": "relationship",
      "zh-TW": "關係",
      "zh-CN": "关系",
      "ko": "관계",
      "vi": "mối quan hệ",
      "id": "hubungan"
    },
    "ex": "関係がある",
    "exm": {
      "en": "have relation",
      "zh-TW": "有關係",
      "zh-CN": "有关系",
      "ko": "관계가 있다",
      "vi": "có quan hệ",
      "id": "ada hubungan"
    }
  },
  {
    "id": "V0614",
    "w": "終える",
    "r": "おえる",
    "m": {
      "en": "finish",
      "zh-TW": "結束",
      "zh-CN": "结束",
      "ko": "끝내다",
      "vi": "kết thúc",
      "id": "menyelesaikan"
    },
    "ex": "仕事を終える",
    "exm": {
      "en": "finish work",
      "zh-TW": "結束工作",
      "zh-CN": "结束工作",
      "ko": "일을 끝내다",
      "vi": "kết thúc công việc",
      "id": "menyelesaikan kerja"
    }
  },
  {
    "id": "V0615",
    "w": "過ぎる",
    "r": "すぎる",
    "m": {
      "en": "pass",
      "zh-TW": "經過",
      "zh-CN": "经过",
      "ko": "지나다",
      "vi": "qua",
      "id": "lewat"
    },
    "ex": "時間が過ぎる",
    "exm": {
      "en": "time passes",
      "zh-TW": "時間過去",
      "zh-CN": "时间过去",
      "ko": "시간이 지나다",
      "vi": "thời gian trôi qua",
      "id": "waktu berlalu"
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
      "id": "lalu"
    },
    "ex": "食べた、そして寝た",
    "exm": {
      "en": "ate, then slept",
      "zh-TW": "吃了，然後睡了",
      "zh-CN": "吃了，然后睡了",
      "ko": "먹고 그리고 잤다",
      "vi": "ăn rồi ngủ",
      "id": "makan lalu tidur"
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
      "id": "tapi"
    },
    "ex": "でも大丈夫",
    "exm": {
      "en": "but it's okay",
      "zh-TW": "但是沒關係",
      "zh-CN": "但是没关系",
      "ko": "하지만 괜찮아",
      "vi": "nhưng không sao",
      "id": "tapi tidak apa-apa"
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
      "id": "karena itu"
    },
    "ex": "だから行った",
    "exm": {
      "en": "so I went",
      "zh-TW": "所以去了",
      "zh-CN": "所以去了",
      "ko": "그래서 갔다",
      "vi": "vì vậy đã đi",
      "id": "karena itu pergi"
    }
  },
  {
    "id": "V0619",
    "w": "例えば",
    "r": "たとえば",
    "m": {
      "en": "for example",
      "zh-TW": "例如",
      "zh-CN": "例如",
      "ko": "예를 들어",
      "vi": "ví dụ",
      "id": "misalnya"
    },
    "ex": "例えば日本",
    "exm": {
      "en": "for example Japan",
      "zh-TW": "例如日本",
      "zh-CN": "例如日本",
      "ko": "예를 들어 일본",
      "vi": "ví dụ Nhật Bản",
      "id": "misalnya Jepang"
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
      "id": "jika"
    },
    "ex": "もし雨なら",
    "exm": {
      "en": "if it rains",
      "zh-TW": "如果下雨",
      "zh-CN": "如果下雨",
      "ko": "만약 비가 오면",
      "vi": "nếu trời mưa",
      "id": "jika hujan"
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
      "id": "ternyata"
    },
    "ex": "やっぱりそうだ",
    "exm": {
      "en": "as I thought",
      "zh-TW": "果然是這樣",
      "zh-CN": "果然是这样",
      "ko": "역시 그렇다",
      "vi": "quả nhiên vậy",
      "id": "ternyata begitu"
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
      "id": "akhirnya"
    },
    "ex": "やっと終わった",
    "exm": {
      "en": "finally finished",
      "zh-TW": "終於結束了",
      "zh-CN": "终于结束了",
      "ko": "드디어 끝났다",
      "vi": "cuối cùng xong",
      "id": "akhirnya selesai"
    }
  },
  {
    "id": "V0623",
    "w": "急に",
    "r": "きゅうに",
    "m": {
      "en": "suddenly",
      "zh-TW": "突然",
      "zh-CN": "突然",
      "ko": "갑자기",
      "vi": "đột nhiên",
      "id": "tiba-tiba"
    },
    "ex": "急に雨が降る",
    "exm": {
      "en": "suddenly rains",
      "zh-TW": "突然下雨",
      "zh-CN": "突然下雨",
      "ko": "갑자기 비가 오다",
      "vi": "đột nhiên mưa",
      "id": "tiba-tiba hujan"
    }
  },
  {
    "id": "V0624",
    "w": "久しぶり",
    "r": "ひさしぶり",
    "m": {
      "en": "long time",
      "zh-TW": "好久不見",
      "zh-CN": "好久不见",
      "ko": "오랜만",
      "vi": "lâu rồi",
      "id": "lama tidak jumpa"
    },
    "ex": "久しぶりですね",
    "exm": {
      "en": "long time no see",
      "zh-TW": "好久不見",
      "zh-CN": "好久不见",
      "ko": "오랜만이네요",
      "vi": "lâu rồi không gặp",
      "id": "lama tidak jumpa"
    }
  },
  {
    "id": "V0625",
    "w": "最近",
    "r": "さいきん",
    "m": {
      "en": "recently",
      "zh-TW": "最近",
      "zh-CN": "最近",
      "ko": "최근",
      "vi": "gần đây",
      "id": "akhir-akhir ini"
    },
    "ex": "最近忙しい",
    "exm": {
      "en": "busy recently",
      "zh-TW": "最近很忙",
      "zh-CN": "最近很忙",
      "ko": "최근 바쁘다",
      "vi": "gần đây bận",
      "id": "akhir-akhir ini sibuk"
    }
  },
  {
    "id": "V0626",
    "w": "将来",
    "r": "しょうらい",
    "m": {
      "en": "future",
      "zh-TW": "將來",
      "zh-CN": "将来",
      "ko": "장래",
      "vi": "tương lai",
      "id": "masa depan"
    },
    "ex": "将来の夢",
    "exm": {
      "en": "future dream",
      "zh-TW": "將來的夢想",
      "zh-CN": "将来的梦想",
      "ko": "장래 꿈",
      "vi": "ước mơ tương lai",
      "id": "mimpi masa depan"
    }
  },
  {
    "id": "V0627",
    "w": "絶対",
    "r": "ぜったい",
    "m": {
      "en": "absolutely",
      "zh-TW": "絕對",
      "zh-CN": "绝对",
      "ko": "절대",
      "vi": "tuyệt đối",
      "id": "pasti"
    },
    "ex": "絶対に行く",
    "exm": {
      "en": "will definitely go",
      "zh-TW": "一定去",
      "zh-CN": "一定去",
      "ko": "절대 간다",
      "vi": "chắc chắn đi",
      "id": "pasti pergi"
    }
  },
  {
    "id": "V0628",
    "w": "残念",
    "r": "ざんねん",
    "m": {
      "en": "regrettable",
      "zh-TW": "可惜",
      "zh-CN": "可惜",
      "ko": "아쉽다",
      "vi": "đáng tiếc",
      "id": "sayang"
    },
    "ex": "残念ですね",
    "exm": {
      "en": "that's too bad",
      "zh-TW": "真可惜",
      "zh-CN": "真可惜",
      "ko": "아쉽네요",
      "vi": "thật đáng tiếc",
      "id": "sayang sekali"
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
      "id": "puluh ribu"
    },
    "ex": "一万円",
    "exm": {
      "en": "10000 yen",
      "zh-TW": "一萬日圓",
      "zh-CN": "一万日元",
      "ko": "만 엔",
      "vi": "một vạn yên",
      "id": "sepuluh ribu yen"
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
      "id": "Seratus"
    },
    "ex": "三百円",
    "exm": {
      "en": "300 yen",
      "zh-TW": "三百日圓",
      "zh-CN": "三百日元",
      "ko": "삼백 엔",
      "vi": "ba trăm yên",
      "id": "tiga ratus yen"
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
      "id": "Seribu"
    },
    "ex": "五千円",
    "exm": {
      "en": "5000 yen",
      "zh-TW": "五千日圓",
      "zh-CN": "五千日元",
      "ko": "오천 엔",
      "vi": "năm nghìn yên",
      "id": "lima ribu yen"
    }
  },
  {
    "id": "V0632",
    "w": "歳",
    "r": "さい",
    "m": {
      "en": "years old",
      "zh-TW": "歲",
      "zh-CN": "岁",
      "ko": "살",
      "vi": "tuổi",
      "id": "tahun"
    },
    "ex": "二十歳",
    "exm": {
      "en": "20 years old",
      "zh-TW": "二十歲",
      "zh-CN": "二十岁",
      "ko": "스무 살",
      "vi": "hai mươi tuổi",
      "id": "dua puluh tahun"
    }
  },
  {
    "id": "V0633",
    "w": "個",
    "r": "こ",
    "m": {
      "en": "counter",
      "zh-TW": "個",
      "zh-CN": "个",
      "ko": "개",
      "vi": "cái",
      "id": "buah"
    },
    "ex": "りんご三個",
    "exm": {
      "en": "three apples",
      "zh-TW": "三個蘋果",
      "zh-CN": "三个苹果",
      "ko": "사과 세 개",
      "vi": "ba quả táo",
      "id": "tiga buah apel"
    }
  },
  {
    "id": "V0634",
    "w": "枚",
    "r": "まい",
    "m": {
      "en": "sheet",
      "zh-TW": "張",
      "zh-CN": "张",
      "ko": "장",
      "vi": "tờ",
      "id": "lembar"
    },
    "ex": "紙三枚",
    "exm": {
      "en": "three sheets",
      "zh-TW": "三張紙",
      "zh-CN": "三张纸",
      "ko": "종이 세 장",
      "vi": "ba tờ giấy",
      "id": "tiga lembar kertas"
    }
  },
  {
    "id": "V0635",
    "w": "冊",
    "r": "さつ",
    "m": {
      "en": "books",
      "zh-TW": "本",
      "zh-CN": "本",
      "ko": "권",
      "vi": "quyển",
      "id": "buku"
    },
    "ex": "本二冊",
    "exm": {
      "en": "two books",
      "zh-TW": "兩本書",
      "zh-CN": "两本书",
      "ko": "책 두 권",
      "vi": "hai quyển sách",
      "id": "dua buku"
    }
  },
  {
    "id": "V0636",
    "w": "杯",
    "r": "はい",
    "m": {
      "en": "cup",
      "zh-TW": "杯",
      "zh-CN": "杯",
      "ko": "잔",
      "vi": "ly",
      "id": "gelas"
    },
    "ex": "コーヒー一杯",
    "exm": {
      "en": "one cup of coffee",
      "zh-TW": "一杯咖啡",
      "zh-CN": "一杯咖啡",
      "ko": "커피 한 잔",
      "vi": "một ly cà phê",
      "id": "satu gelas kopi"
    }
  },
  {
    "id": "V0637",
    "w": "匹",
    "r": "ひき",
    "m": {
      "en": "animal",
      "zh-TW": "動物",
      "zh-CN": "动物",
      "ko": "동물",
      "vi": "Động vật",
      "id": "Hewan"
    },
    "ex": "猫二匹",
    "exm": {
      "en": "two cats",
      "zh-TW": "兩隻貓",
      "zh-CN": "两只猫",
      "ko": "고양이 두 마리",
      "vi": "hai con mèo",
      "id": "dua ekor kucing"
    }
  },
  {
    "id": "V0638",
    "w": "台",
    "r": "だい",
    "m": {
      "en": "machine",
      "zh-TW": "臺",
      "zh-CN": "台",
      "ko": "대",
      "vi": "chiếc",
      "id": "unit"
    },
    "ex": "車一台",
    "exm": {
      "en": "one car",
      "zh-TW": "一輛車",
      "zh-CN": "一辆车",
      "ko": "차 한 대",
      "vi": "một chiếc xe",
      "id": "satu unit mobil"
    }
  },
  {
    "id": "V0639",
    "w": "階",
    "r": "かい",
    "m": {
      "en": "floor",
      "zh-TW": "樓",
      "zh-CN": "楼",
      "ko": "층",
      "vi": "tầng",
      "id": "lantai"
    },
    "ex": "三階",
    "exm": {
      "en": "3rd floor",
      "zh-TW": "三樓",
      "zh-CN": "三楼",
      "ko": "삼층",
      "vi": "tầng ba",
      "id": "lantai tiga"
    }
  },
  {
    "id": "V0640",
    "w": "番",
    "r": "ばん",
    "m": {
      "en": "number",
      "zh-TW": "數字",
      "zh-CN": "数字",
      "ko": "숫자",
      "vi": "Số",
      "id": "Angka"
    },
    "ex": "一番",
    "exm": {
      "en": "number one",
      "zh-TW": "第一",
      "zh-CN": "第一",
      "ko": "일번",
      "vi": "số một",
      "id": "nomor satu"
    }
  },
  {
    "id": "V0641",
    "w": "度",
    "r": "ど",
    "m": {
      "en": "degree",
      "zh-TW": "度",
      "zh-CN": "度",
      "ko": "도",
      "vi": "độ",
      "id": "derajat"
    },
    "ex": "三十度",
    "exm": {
      "en": "30 degrees",
      "zh-TW": "三十度",
      "zh-CN": "三十度",
      "ko": "삼십 도",
      "vi": "ba mươi độ",
      "id": "tiga puluh derajat"
    }
  },
  {
    "id": "V0642",
    "w": "回",
    "r": "かい",
    "m": {
      "en": "times",
      "zh-TW": "次",
      "zh-CN": "次",
      "ko": "번",
      "vi": "lần",
      "id": "kali"
    },
    "ex": "二回",
    "exm": {
      "en": "two times",
      "zh-TW": "兩次",
      "zh-CN": "两次",
      "ko": "두 번",
      "vi": "hai lần",
      "id": "dua kali"
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
      "id": "masyarakat"
    },
    "ex": "社会人",
    "exm": {
      "en": "working adult",
      "zh-TW": "社會人",
      "zh-CN": "社会人",
      "ko": "사회인",
      "vi": "người đi làm",
      "id": "pekerja"
    }
  },
  {
    "id": "V0644",
    "w": "文化",
    "r": "ぶんか",
    "m": {
      "en": "culture",
      "zh-TW": "文化",
      "zh-CN": "文化",
      "ko": "문화",
      "vi": "văn hóa",
      "id": "budaya"
    },
    "ex": "日本文化",
    "exm": {
      "en": "Japanese culture",
      "zh-TW": "日本文化",
      "zh-CN": "日本文化",
      "ko": "일본 문화",
      "vi": "văn hóa Nhật",
      "id": "budaya Jepang"
    }
  },
  {
    "id": "V0645",
    "w": "歴史",
    "r": "れきし",
    "m": {
      "en": "history",
      "zh-TW": "歷史",
      "zh-CN": "历史",
      "ko": "역사",
      "vi": "lịch sử",
      "id": "sejarah"
    },
    "ex": "歴史を学ぶ",
    "exm": {
      "en": "learn history",
      "zh-TW": "學歷史",
      "zh-CN": "学历史",
      "ko": "역사를 배우다",
      "vi": "học lịch sử",
      "id": "belajar sejarah"
    }
  },
  {
    "id": "V0646",
    "w": "環境",
    "r": "かんきょう",
    "m": {
      "en": "environment",
      "zh-TW": "環境",
      "zh-CN": "环境",
      "ko": "환경",
      "vi": "môi trường",
      "id": "lingkungan"
    },
    "ex": "環境問題",
    "exm": {
      "en": "environmental issue",
      "zh-TW": "環境問題",
      "zh-CN": "环境问题",
      "ko": "환경 문제",
      "vi": "vấn đề môi trường",
      "id": "masalah lingkungan"
    }
  },
  {
    "id": "V0647",
    "w": "自然",
    "r": "しぜん",
    "m": {
      "en": "nature",
      "zh-TW": "自然",
      "zh-CN": "自然",
      "ko": "자연",
      "vi": "tự nhiên",
      "id": "alam"
    },
    "ex": "自然が美しい",
    "exm": {
      "en": "nature is beautiful",
      "zh-TW": "自然很美",
      "zh-CN": "自然很美",
      "ko": "자연이 아름답다",
      "vi": "thiên nhiên đẹp",
      "id": "alam indah"
    }
  },
  {
    "id": "V0648",
    "w": "技術",
    "r": "ぎじゅつ",
    "m": {
      "en": "technology",
      "zh-TW": "技術",
      "zh-CN": "技术",
      "ko": "기술",
      "vi": "kỹ thuật",
      "id": "teknologi"
    },
    "ex": "新しい技術",
    "exm": {
      "en": "new technology",
      "zh-TW": "新技術",
      "zh-CN": "新技术",
      "ko": "새로운 기술",
      "vi": "kỹ thuật mới",
      "id": "teknologi baru"
    }
  },
  {
    "id": "V0649",
    "w": "事故",
    "r": "じこ",
    "m": {
      "en": "accident",
      "zh-TW": "事故",
      "zh-CN": "事故",
      "ko": "사고",
      "vi": "tai nạn",
      "id": "kecelakaan"
    },
    "ex": "事故が起きる",
    "exm": {
      "en": "accident happens",
      "zh-TW": "發生事故",
      "zh-CN": "发生事故",
      "ko": "사고가 일어나다",
      "vi": "tai nạn xảy ra",
      "id": "kecelakaan terjadi"
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
      "id": "berita"
    },
    "ex": "ニュースを見る",
    "exm": {
      "en": "watch news",
      "zh-TW": "看新聞",
      "zh-CN": "看新闻",
      "ko": "뉴스를 보다",
      "vi": "xem tin tức",
      "id": "menonton berita"
    }
  },
  {
    "id": "V0651",
    "w": "情報",
    "r": "じょうほう",
    "m": {
      "en": "information",
      "zh-TW": "資訊",
      "zh-CN": "信息",
      "ko": "정보",
      "vi": "thông tin",
      "id": "informasi"
    },
    "ex": "情報を集める",
    "exm": {
      "en": "gather info",
      "zh-TW": "收集資訊",
      "zh-CN": "收集信息",
      "ko": "정보를 모으다",
      "vi": "thu thập thông tin",
      "id": "mengumpulkan informasi"
    }
  },
  {
    "id": "V0652",
    "w": "意見",
    "r": "いけん",
    "m": {
      "en": "opinion",
      "zh-TW": "意見",
      "zh-CN": "意见",
      "ko": "의견",
      "vi": "ý kiến",
      "id": "pendapat"
    },
    "ex": "意見を言う",
    "exm": {
      "en": "give opinion",
      "zh-TW": "發表意見",
      "zh-CN": "发表意见",
      "ko": "의견을 말하다",
      "vi": "nêu ý kiến",
      "id": "memberikan pendapat"
    }
  },
  {
    "id": "V0653",
    "w": "素晴らしい",
    "r": "すばらしい",
    "m": {
      "en": "wonderful",
      "zh-TW": "太棒了",
      "zh-CN": "太棒了",
      "ko": "훌륭하다",
      "vi": "tuyệt vời",
      "id": "luar biasa"
    },
    "ex": "素晴らしい景色",
    "exm": {
      "en": "wonderful view",
      "zh-TW": "美麗的景色",
      "zh-CN": "美丽的景色",
      "ko": "훌륭한 경치",
      "vi": "cảnh đẹp",
      "id": "pemandangan indah"
    }
  },
  {
    "id": "V0654",
    "w": "最高",
    "r": "さいこう",
    "m": {
      "en": "best",
      "zh-TW": "最棒",
      "zh-CN": "最棒",
      "ko": "최고",
      "vi": "tuyệt nhất",
      "id": "terbaik"
    },
    "ex": "最高の日",
    "exm": {
      "en": "best day",
      "zh-TW": "最棒的一天",
      "zh-CN": "最棒的一天",
      "ko": "최고의 날",
      "vi": "ngày tuyệt nhất",
      "id": "hari terbaik"
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
      "id": "benar"
    },
    "ex": "正しい答え",
    "exm": {
      "en": "correct answer",
      "zh-TW": "正確答案",
      "zh-CN": "正确答案",
      "ko": "올바른 답",
      "vi": "câu trả lời đúng",
      "id": "jawaban benar"
    }
  },
  {
    "id": "V0656",
    "w": "間違い",
    "r": "まちがい",
    "m": {
      "en": "mistake",
      "zh-TW": "錯誤",
      "zh-CN": "错误",
      "ko": "실수",
      "vi": "lỗi",
      "id": "kesalahan"
    },
    "ex": "間違いがある",
    "exm": {
      "en": "there is mistake",
      "zh-TW": "有錯誤",
      "zh-CN": "有错误",
      "ko": "실수가 있다",
      "vi": "có lỗi",
      "id": "ada kesalahan"
    }
  },
  {
    "id": "V0657",
    "w": "完璧",
    "r": "かんぺき",
    "m": {
      "en": "perfect",
      "zh-TW": "完美",
      "zh-CN": "完美",
      "ko": "완벽",
      "vi": "hoàn hảo",
      "id": "sempurna"
    },
    "ex": "完璧です",
    "exm": {
      "en": "it's perfect",
      "zh-TW": "完美",
      "zh-CN": "完美",
      "ko": "완벽해요",
      "vi": "hoàn hảo",
      "id": "sempurna"
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
      "id": "cukup"
    },
    "ex": "十分です",
    "exm": {
      "en": "it's enough",
      "zh-TW": "夠了",
      "zh-CN": "够了",
      "ko": "충분해요",
      "vi": "đủ rồi",
      "id": "cukup"
    }
  },
  {
    "id": "V0659",
    "w": "自由",
    "r": "じゆう",
    "m": {
      "en": "free",
      "zh-TW": "空閒",
      "zh-CN": "空闲",
      "ko": "한가한",
      "vi": "Rảnh",
      "id": "Bebas"
    },
    "ex": "自由な時間",
    "exm": {
      "en": "free time",
      "zh-TW": "自由時間",
      "zh-CN": "自由时间",
      "ko": "자유 시간",
      "vi": "thời gian tự do",
      "id": "waktu bebas"
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
      "id": "bentuk"
    },
    "ex": "丸い形",
    "exm": {
      "en": "round shape",
      "zh-TW": "圓形",
      "zh-CN": "圆形",
      "ko": "둥근 모양",
      "vi": "hình tròn",
      "id": "bentuk bulat"
    }
  },
  {
    "id": "V0661",
    "w": "味",
    "r": "あじ",
    "m": {
      "en": "taste",
      "zh-TW": "味道",
      "zh-CN": "味道",
      "ko": "맛",
      "vi": "vị",
      "id": "rasa"
    },
    "ex": "味が良い",
    "exm": {
      "en": "taste good",
      "zh-TW": "味道好",
      "zh-CN": "味道好",
      "ko": "맛이 좋다",
      "vi": "ngon",
      "id": "rasanya enak"
    }
  },
  {
    "id": "V0662",
    "w": "匂い",
    "r": "におい",
    "m": {
      "en": "smell",
      "zh-TW": "氣味",
      "zh-CN": "气味",
      "ko": "냄새",
      "vi": "mùi",
      "id": "bau"
    },
    "ex": "いい匂い",
    "exm": {
      "en": "good smell",
      "zh-TW": "好聞",
      "zh-CN": "好闻",
      "ko": "좋은 냄새",
      "vi": "mùi thơm",
      "id": "bau enak"
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
      "id": "suara"
    },
    "ex": "音がする",
    "exm": {
      "en": "make sound",
      "zh-TW": "發出聲音",
      "zh-CN": "发出声音",
      "ko": "소리가 나다",
      "vi": "có tiếng",
      "id": "bersuara"
    }
  },
  {
    "id": "V0664",
    "w": "光",
    "r": "ひかり",
    "m": {
      "en": "light",
      "zh-TW": "輕",
      "zh-CN": "轻",
      "ko": "가벼운",
      "vi": "Nhẹ",
      "id": "Ringan"
    },
    "ex": "光が見える",
    "exm": {
      "en": "see light",
      "zh-TW": "看到光",
      "zh-CN": "看到光",
      "ko": "빛이 보이다",
      "vi": "thấy ánh sáng",
      "id": "melihat cahaya"
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
      "id": "kekuatan"
    },
    "ex": "力がある",
    "exm": {
      "en": "have power",
      "zh-TW": "有力量",
      "zh-CN": "有力量",
      "ko": "힘이 있다",
      "vi": "có sức mạnh",
      "id": "punya kekuatan"
    }
  },
  {
    "id": "V0666",
    "w": "気持ち",
    "r": "きもち",
    "m": {
      "en": "feeling",
      "zh-TW": "心情",
      "zh-CN": "心情",
      "ko": "기분",
      "vi": "cảm giác",
      "id": "perasaan"
    },
    "ex": "気持ちがいい",
    "exm": {
      "en": "feel good",
      "zh-TW": "心情好",
      "zh-CN": "心情好",
      "ko": "기분이 좋다",
      "vi": "cảm giác tốt",
      "id": "perasaan baik"
    }
  },
  {
    "id": "V0667",
    "w": "生活",
    "r": "せいかつ",
    "m": {
      "en": "life",
      "zh-TW": "生活",
      "zh-CN": "生活",
      "ko": "생활",
      "vi": "cuộc sống",
      "id": "kehidupan"
    },
    "ex": "日本での生活",
    "exm": {
      "en": "life in Japan",
      "zh-TW": "在日本的生活",
      "zh-CN": "在日本的生活",
      "ko": "일본에서의 생활",
      "vi": "cuộc sống ở Nhật",
      "id": "kehidupan di Jepang"
    }
  },
  {
    "id": "V0668",
    "w": "習慣",
    "r": "しゅうかん",
    "m": {
      "en": "habit",
      "zh-TW": "習慣",
      "zh-CN": "习惯",
      "ko": "습관",
      "vi": "thói quen",
      "id": "kebiasaan"
    },
    "ex": "良い習慣",
    "exm": {
      "en": "good habit",
      "zh-TW": "好習慣",
      "zh-CN": "好习惯",
      "ko": "좋은 습관",
      "vi": "thói quen tốt",
      "id": "kebiasaan baik"
    }
  },
  {
    "id": "V0669",
    "w": "計画",
    "r": "けいかく",
    "m": {
      "en": "plan",
      "zh-TW": "計劃",
      "zh-CN": "计划",
      "ko": "계획",
      "vi": "kế hoạch",
      "id": "rencana"
    },
    "ex": "計画を立てる",
    "exm": {
      "en": "make a plan",
      "zh-TW": "制定計劃",
      "zh-CN": "制定计划",
      "ko": "계획을 세우다",
      "vi": "lập kế hoạch",
      "id": "membuat rencana"
    }
  },
  {
    "id": "V0670",
    "w": "説明",
    "r": "せつめい",
    "m": {
      "en": "explanation",
      "zh-TW": "說明",
      "zh-CN": "说明",
      "ko": "설명",
      "vi": "giải thích",
      "id": "penjelasan"
    },
    "ex": "説明する",
    "exm": {
      "en": "explain",
      "zh-TW": "說明",
      "zh-CN": "说明",
      "ko": "설명하다",
      "vi": "giải thích",
      "id": "menjelaskan"
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
      "id": "terlihat"
    },
    "ex": "山が見える",
    "exm": {
      "en": "can see mountain",
      "zh-TW": "看得見山",
      "zh-CN": "看得见山",
      "ko": "산이 보이다",
      "vi": "nhìn thấy núi",
      "id": "gunung terlihat"
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
      "id": "terdengar"
    },
    "ex": "声が聞こえる",
    "exm": {
      "en": "can hear voice",
      "zh-TW": "聽得見聲音",
      "zh-CN": "听得见声音",
      "ko": "목소리가 들리다",
      "vi": "nghe thấy tiếng",
      "id": "suara terdengar"
    }
  },
  {
    "id": "V0673",
    "w": "混む",
    "r": "こむ",
    "m": {
      "en": "be crowded",
      "zh-TW": "擁擠",
      "zh-CN": "拥挤",
      "ko": "붐비다",
      "vi": "đông",
      "id": "ramai"
    },
    "ex": "電車が混む",
    "exm": {
      "en": "train is crowded",
      "zh-TW": "電車很擠",
      "zh-CN": "电车很挤",
      "ko": "전철이 붐비다",
      "vi": "tàu đông",
      "id": "kereta ramai"
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
      "id": "kosong"
    },
    "ex": "お腹が空く",
    "exm": {
      "en": "get hungry",
      "zh-TW": "肚子餓",
      "zh-CN": "肚子饿",
      "ko": "배가 고프다",
      "vi": "đói bụng",
      "id": "lapar"
    }
  },
  {
    "id": "V0675",
    "w": "思い出す",
    "r": "おもいだす",
    "m": {
      "en": "remember",
      "zh-TW": "想起",
      "zh-CN": "想起",
      "ko": "떠올리다",
      "vi": "nhớ ra",
      "id": "mengingat"
    },
    "ex": "昔を思い出す",
    "exm": {
      "en": "remember old days",
      "zh-TW": "想起以前",
      "zh-CN": "想起以前",
      "ko": "옛날을 떠올리다",
      "vi": "nhớ lại ngày xưa",
      "id": "mengingat masa lalu"
    }
  },
  {
    "id": "V0676",
    "w": "思い出",
    "r": "おもいで",
    "m": {
      "en": "memory",
      "zh-TW": "回憶",
      "zh-CN": "回忆",
      "ko": "추억",
      "vi": "kỷ niệm",
      "id": "kenangan"
    },
    "ex": "楽しい思い出",
    "exm": {
      "en": "fun memory",
      "zh-TW": "快樂的回憶",
      "zh-CN": "快乐的回忆",
      "ko": "즐거운 추억",
      "vi": "kỷ niệm vui",
      "id": "kenangan menyenangkan"
    }
  },
  {
    "id": "V0677",
    "w": "伝える",
    "r": "つたえる",
    "m": {
      "en": "convey",
      "zh-TW": "傳達",
      "zh-CN": "传达",
      "ko": "전하다",
      "vi": "truyền đạt",
      "id": "menyampaikan"
    },
    "ex": "気持ちを伝える",
    "exm": {
      "en": "convey feelings",
      "zh-TW": "傳達心意",
      "zh-CN": "传达心意",
      "ko": "마음을 전하다",
      "vi": "truyền đạt cảm xúc",
      "id": "menyampaikan perasaan"
    }
  },
  {
    "id": "V0678",
    "w": "受ける",
    "r": "うける",
    "m": {
      "en": "receive",
      "zh-TW": "接受",
      "zh-CN": "接受",
      "ko": "받다",
      "vi": "nhận",
      "id": "menerima"
    },
    "ex": "試験を受ける",
    "exm": {
      "en": "take exam",
      "zh-TW": "參加考試",
      "zh-CN": "参加考试",
      "ko": "시험을 보다",
      "vi": "thi",
      "id": "mengikuti ujian"
    }
  },
  {
    "id": "V0679",
    "w": "捨てる",
    "r": "すてる",
    "m": {
      "en": "throw away",
      "zh-TW": "丟掉",
      "zh-CN": "丢掉",
      "ko": "버리다",
      "vi": "vứt",
      "id": "membuang"
    },
    "ex": "ゴミを捨てる",
    "exm": {
      "en": "throw trash",
      "zh-TW": "丟垃圾",
      "zh-CN": "丢垃圾",
      "ko": "쓰레기를 버리다",
      "vi": "vứt rác",
      "id": "membuang sampah"
    }
  },
  {
    "id": "V0680",
    "w": "迎える",
    "r": "むかえる",
    "m": {
      "en": "welcome",
      "zh-TW": "迎接",
      "zh-CN": "迎接",
      "ko": "맞이하다",
      "vi": "đón",
      "id": "menyambut"
    },
    "ex": "客を迎える",
    "exm": {
      "en": "welcome guest",
      "zh-TW": "迎接客人",
      "zh-CN": "迎接客人",
      "ko": "손님을 맞이하다",
      "vi": "đón khách",
      "id": "menyambut tamu"
    }
  },
  {
    "id": "V0681",
    "w": "訪ねる",
    "r": "たずねる",
    "m": {
      "en": "visit",
      "zh-TW": "拜訪",
      "zh-CN": "拜访",
      "ko": "방문하다",
      "vi": "thăm",
      "id": "mengunjungi"
    },
    "ex": "友達を訪ねる",
    "exm": {
      "en": "visit friend",
      "zh-TW": "拜訪朋友",
      "zh-CN": "拜访朋友",
      "ko": "친구를 방문하다",
      "vi": "thăm bạn",
      "id": "mengunjungi teman"
    }
  },
  {
    "id": "V0682",
    "w": "訪問",
    "r": "ほうもん",
    "m": {
      "en": "visit",
      "zh-TW": "訪問",
      "zh-CN": "访问",
      "ko": "방문",
      "vi": "viếng thăm",
      "id": "kunjungan"
    },
    "ex": "訪問する",
    "exm": {
      "en": "pay a visit",
      "zh-TW": "訪問",
      "zh-CN": "访问",
      "ko": "방문하다",
      "vi": "viếng thăm",
      "id": "berkunjung"
    }
  },
  {
    "id": "V0683",
    "w": "案内",
    "r": "あんない",
    "m": {
      "en": "guide",
      "zh-TW": "指引",
      "zh-CN": "指引",
      "ko": "안내",
      "vi": "hướng dẫn",
      "id": "panduan"
    },
    "ex": "案内する",
    "exm": {
      "en": "guide",
      "zh-TW": "指引",
      "zh-CN": "指引",
      "ko": "안내하다",
      "vi": "hướng dẫn",
      "id": "memandu"
    }
  },
  {
    "id": "V0684",
    "w": "相談",
    "r": "そうだん",
    "m": {
      "en": "consultation",
      "zh-TW": "商量",
      "zh-CN": "商量",
      "ko": "상담",
      "vi": "tham khảo",
      "id": "konsultasi"
    },
    "ex": "相談する",
    "exm": {
      "en": "consult",
      "zh-TW": "商量",
      "zh-CN": "商量",
      "ko": "상담하다",
      "vi": "tham khảo",
      "id": "berkonsultasi"
    }
  },
  {
    "id": "V0685",
    "w": "招待",
    "r": "しょうたい",
    "m": {
      "en": "invitation",
      "zh-TW": "邀請",
      "zh-CN": "邀请",
      "ko": "초대",
      "vi": "mời",
      "id": "undangan"
    },
    "ex": "招待する",
    "exm": {
      "en": "invite",
      "zh-TW": "邀請",
      "zh-CN": "邀请",
      "ko": "초대하다",
      "vi": "mời",
      "id": "mengundang"
    }
  },
  {
    "id": "V0686",
    "w": "お祝い",
    "r": "おいわい",
    "m": {
      "en": "celebration",
      "zh-TW": "慶祝",
      "zh-CN": "庆祝",
      "ko": "축하",
      "vi": "chúc mừng",
      "id": "perayaan"
    },
    "ex": "お祝いする",
    "exm": {
      "en": "celebrate",
      "zh-TW": "慶祝",
      "zh-CN": "庆祝",
      "ko": "축하하다",
      "vi": "chúc mừng",
      "id": "merayakan"
    }
  },
  {
    "id": "V0687",
    "w": "お礼",
    "r": "おれい",
    "m": {
      "en": "thanks",
      "zh-TW": "感謝",
      "zh-CN": "感谢",
      "ko": "감사",
      "vi": "cảm ơn",
      "id": "terima kasih"
    },
    "ex": "お礼を言う",
    "exm": {
      "en": "say thanks",
      "zh-TW": "道謝",
      "zh-CN": "道谢",
      "ko": "감사 인사를 하다",
      "vi": "nói cảm ơn",
      "id": "mengucapkan terima kasih"
    }
  },
  {
    "id": "V0688",
    "w": "お詫び",
    "r": "おわび",
    "m": {
      "en": "apology",
      "zh-TW": "道歉",
      "zh-CN": "道歉",
      "ko": "사과",
      "vi": "xin lỗi",
      "id": "permintaan maaf"
    },
    "ex": "お詫びする",
    "exm": {
      "en": "apologize",
      "zh-TW": "道歉",
      "zh-CN": "道歉",
      "ko": "사과하다",
      "vi": "xin lỗi",
      "id": "meminta maaf"
    }
  },
  {
    "id": "V0689",
    "w": "お願い",
    "r": "おねがい",
    "m": {
      "en": "request",
      "zh-TW": "拜託",
      "zh-CN": "拜托",
      "ko": "부탁",
      "vi": "nhờ",
      "id": "permintaan"
    },
    "ex": "お願いする",
    "exm": {
      "en": "request",
      "zh-TW": "拜託",
      "zh-CN": "拜托",
      "ko": "부탁하다",
      "vi": "nhờ",
      "id": "meminta"
    }
  },
  {
    "id": "V0690",
    "w": "挨拶",
    "r": "あいさつ",
    "m": {
      "en": "greeting",
      "zh-TW": "問候",
      "zh-CN": "问候",
      "ko": "인사",
      "vi": "chào hỏi",
      "id": "salam"
    },
    "ex": "挨拶する",
    "exm": {
      "en": "greet",
      "zh-TW": "問候",
      "zh-CN": "问候",
      "ko": "인사하다",
      "vi": "chào hỏi",
      "id": "menyapa"
    }
  },
  {
    "id": "V0691",
    "w": "返事",
    "r": "へんじ",
    "m": {
      "en": "reply",
      "zh-TW": "回答",
      "zh-CN": "回答",
      "ko": "대답",
      "vi": "trả lời",
      "id": "balasan"
    },
    "ex": "返事する",
    "exm": {
      "en": "reply",
      "zh-TW": "回答",
      "zh-CN": "回答",
      "ko": "대답하다",
      "vi": "trả lời",
      "id": "membalas"
    }
  },
  {
    "id": "V0692",
    "w": "予定",
    "r": "よてい",
    "m": {
      "en": "schedule",
      "zh-TW": "預定",
      "zh-CN": "预定",
      "ko": "예정",
      "vi": "lịch trình",
      "id": "jadwal"
    },
    "ex": "予定がある",
    "exm": {
      "en": "have plans",
      "zh-TW": "有預定",
      "zh-CN": "有预定",
      "ko": "예정이 있다",
      "vi": "có lịch",
      "id": "ada jadwal"
    }
  },
  {
    "id": "V0693",
    "w": "用事",
    "r": "ようじ",
    "m": {
      "en": "errand",
      "zh-TW": "事情",
      "zh-CN": "事情",
      "ko": "용무",
      "vi": "việc",
      "id": "urusan"
    },
    "ex": "用事がある",
    "exm": {
      "en": "have errand",
      "zh-TW": "有事情",
      "zh-CN": "有事情",
      "ko": "용무가 있다",
      "vi": "có việc",
      "id": "ada urusan"
    }
  },
  {
    "id": "V0694",
    "w": "用意",
    "r": "ようい",
    "m": {
      "en": "prepare",
      "zh-TW": "準備",
      "zh-CN": "准备",
      "ko": "준비",
      "vi": "chuẩn bị",
      "id": "persiapan"
    },
    "ex": "用意する",
    "exm": {
      "en": "prepare",
      "zh-TW": "準備",
      "zh-CN": "准备",
      "ko": "준비하다",
      "vi": "chuẩn bị",
      "id": "mempersiapkan"
    }
  },
  {
    "id": "V0695",
    "w": "注意",
    "r": "ちゅうい",
    "m": {
      "en": "caution",
      "zh-TW": "注意",
      "zh-CN": "注意",
      "ko": "주의",
      "vi": "chú ý",
      "id": "perhatian"
    },
    "ex": "注意する",
    "exm": {
      "en": "be careful",
      "zh-TW": "注意",
      "zh-CN": "注意",
      "ko": "주의하다",
      "vi": "chú ý",
      "id": "berhati-hati"
    }
  },
  {
    "id": "V0696",
    "w": "確認",
    "r": "かくにん",
    "m": {
      "en": "confirm",
      "zh-TW": "確認",
      "zh-CN": "确认",
      "ko": "확인",
      "vi": "xác nhận",
      "id": "konfirmasi"
    },
    "ex": "確認する",
    "exm": {
      "en": "confirm",
      "zh-TW": "確認",
      "zh-CN": "确认",
      "ko": "확인하다",
      "vi": "xác nhận",
      "id": "mengkonfirmasi"
    }
  },
  {
    "id": "V0697",
    "w": "賛成",
    "r": "さんせい",
    "m": {
      "en": "agree",
      "zh-TW": "贊成",
      "zh-CN": "赞成",
      "ko": "찬성",
      "vi": "đồng ý",
      "id": "setuju"
    },
    "ex": "賛成する",
    "exm": {
      "en": "agree",
      "zh-TW": "贊成",
      "zh-CN": "赞成",
      "ko": "찬성하다",
      "vi": "đồng ý",
      "id": "setuju"
    }
  },
  {
    "id": "V0698",
    "w": "反対",
    "r": "はんたい",
    "m": {
      "en": "oppose",
      "zh-TW": "反對",
      "zh-CN": "反对",
      "ko": "반대",
      "vi": "phản đối",
      "id": "menentang"
    },
    "ex": "反対する",
    "exm": {
      "en": "oppose",
      "zh-TW": "反對",
      "zh-CN": "反对",
      "ko": "반대하다",
      "vi": "phản đối",
      "id": "menentang"
    }
  },
  {
    "id": "V0699",
    "w": "参加",
    "r": "さんか",
    "m": {
      "en": "participate",
      "zh-TW": "參加",
      "zh-CN": "参加",
      "ko": "참가",
      "vi": "tham gia",
      "id": "berpartisipasi"
    },
    "ex": "参加する",
    "exm": {
      "en": "participate",
      "zh-TW": "參加",
      "zh-CN": "参加",
      "ko": "참가하다",
      "vi": "tham gia",
      "id": "berpartisipasi"
    }
  },
  {
    "id": "V0700",
    "w": "出席",
    "r": "しゅっせき",
    "m": {
      "en": "attend",
      "zh-TW": "出席",
      "zh-CN": "出席",
      "ko": "출석",
      "vi": "tham dự",
      "id": "hadir"
    },
    "ex": "出席する",
    "exm": {
      "en": "attend",
      "zh-TW": "出席",
      "zh-CN": "出席",
      "ko": "출석하다",
      "vi": "tham dự",
      "id": "hadir"
    }
  },
  {
    "id": "V0701",
    "w": "欠席",
    "r": "けっせき",
    "m": {
      "en": "absent",
      "zh-TW": "缺席",
      "zh-CN": "缺席",
      "ko": "결석",
      "vi": "vắng mặt",
      "id": "absen"
    },
    "ex": "欠席する",
    "exm": {
      "en": "be absent",
      "zh-TW": "缺席",
      "zh-CN": "缺席",
      "ko": "결석하다",
      "vi": "vắng mặt",
      "id": "absen"
    }
  },
  {
    "id": "V0702",
    "w": "遅刻",
    "r": "ちこく",
    "m": {
      "en": "late",
      "zh-TW": "遲到",
      "zh-CN": "迟到",
      "ko": "지각",
      "vi": "muộn",
      "id": "terlambat"
    },
    "ex": "遅刻する",
    "exm": {
      "en": "be late",
      "zh-TW": "遲到",
      "zh-CN": "迟到",
      "ko": "지각하다",
      "vi": "đến muộn",
      "id": "terlambat"
    }
  },
  {
    "id": "V0703",
    "w": "卒業",
    "r": "そつぎょう",
    "m": {
      "en": "graduate",
      "zh-TW": "畢業",
      "zh-CN": "毕业",
      "ko": "졸업",
      "vi": "tốt nghiệp",
      "id": "lulus"
    },
    "ex": "卒業する",
    "exm": {
      "en": "graduate",
      "zh-TW": "畢業",
      "zh-CN": "毕业",
      "ko": "졸업하다",
      "vi": "tốt nghiệp",
      "id": "lulus"
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
      "id": "masuk sekolah"
    },
    "ex": "入学する",
    "exm": {
      "en": "enroll",
      "zh-TW": "入學",
      "zh-CN": "入学",
      "ko": "입학하다",
      "vi": "nhập học",
      "id": "masuk sekolah"
    }
  },
  {
    "id": "V0705",
    "w": "就職",
    "r": "しゅうしょく",
    "m": {
      "en": "get job",
      "zh-TW": "就職",
      "zh-CN": "就职",
      "ko": "취직",
      "vi": "xin việc",
      "id": "mendapat pekerjaan"
    },
    "ex": "就職する",
    "exm": {
      "en": "get a job",
      "zh-TW": "就職",
      "zh-CN": "就职",
      "ko": "취직하다",
      "vi": "xin được việc",
      "id": "mendapat pekerjaan"
    }
  },
  {
    "id": "V0706",
    "w": "退職",
    "r": "たいしょく",
    "m": {
      "en": "retire",
      "zh-TW": "退休",
      "zh-CN": "退休",
      "ko": "퇴직",
      "vi": "nghỉ việc",
      "id": "pensiun"
    },
    "ex": "退職する",
    "exm": {
      "en": "retire",
      "zh-TW": "退休",
      "zh-CN": "退休",
      "ko": "퇴직하다",
      "vi": "nghỉ việc",
      "id": "pensiun"
    }
  },
  {
    "id": "V0707",
    "w": "出張",
    "r": "しゅっちょう",
    "m": {
      "en": "business trip",
      "zh-TW": "出差",
      "zh-CN": "出差",
      "ko": "출장",
      "vi": "công tác",
      "id": "perjalanan dinas"
    },
    "ex": "出張する",
    "exm": {
      "en": "go on business trip",
      "zh-TW": "出差",
      "zh-CN": "出差",
      "ko": "출장 가다",
      "vi": "đi công tác",
      "id": "perjalanan dinas"
    }
  },
  {
    "id": "V0708",
    "w": "休憩",
    "r": "きゅうけい",
    "m": {
      "en": "break",
      "zh-TW": "休息",
      "zh-CN": "休息",
      "ko": "휴식",
      "vi": "nghỉ ngơi",
      "id": "istirahat"
    },
    "ex": "休憩する",
    "exm": {
      "en": "take a break",
      "zh-TW": "休息",
      "zh-CN": "休息",
      "ko": "휴식하다",
      "vi": "nghỉ ngơi",
      "id": "beristirahat"
    }
  },
  {
    "id": "V0709",
    "w": "散歩",
    "r": "さんぽ",
    "m": {
      "en": "walk",
      "zh-TW": "散步",
      "zh-CN": "散步",
      "ko": "산책",
      "vi": "đi dạo",
      "id": "jalan-jalan"
    },
    "ex": "散歩する",
    "exm": {
      "en": "take a walk",
      "zh-TW": "散步",
      "zh-CN": "散步",
      "ko": "산책하다",
      "vi": "đi dạo",
      "id": "jalan-jalan"
    }
  },
  {
    "id": "V0710",
    "w": "見物",
    "r": "けんぶつ",
    "m": {
      "en": "sightseeing",
      "zh-TW": "觀光",
      "zh-CN": "观光",
      "ko": "구경",
      "vi": "tham quan",
      "id": "wisata"
    },
    "ex": "見物する",
    "exm": {
      "en": "go sightseeing",
      "zh-TW": "觀光",
      "zh-CN": "观光",
      "ko": "구경하다",
      "vi": "tham quan",
      "id": "berwisata"
    }
  },
  {
    "id": "V0711",
    "w": "食事",
    "r": "しょくじ",
    "m": {
      "en": "meal",
      "zh-TW": "用餐",
      "zh-CN": "用餐",
      "ko": "식사",
      "vi": "bữa ăn",
      "id": "makan"
    },
    "ex": "食事する",
    "exm": {
      "en": "have meal",
      "zh-TW": "用餐",
      "zh-CN": "用餐",
      "ko": "식사하다",
      "vi": "ăn cơm",
      "id": "makan"
    }
  },
  {
    "id": "V0712",
    "w": "洗濯",
    "r": "せんたく",
    "m": {
      "en": "laundry",
      "zh-TW": "洗衣",
      "zh-CN": "洗衣",
      "ko": "세탁",
      "vi": "giặt đồ",
      "id": "mencuci"
    },
    "ex": "洗濯する",
    "exm": {
      "en": "do laundry",
      "zh-TW": "洗衣服",
      "zh-CN": "洗衣服",
      "ko": "세탁하다",
      "vi": "giặt đồ",
      "id": "mencuci pakaian"
    }
  },
  {
    "id": "V0713",
    "w": "掃除",
    "r": "そうじ",
    "m": {
      "en": "cleaning",
      "zh-TW": "打掃",
      "zh-CN": "打扫",
      "ko": "청소",
      "vi": "dọn dẹp",
      "id": "bersih-bersih"
    },
    "ex": "掃除する",
    "exm": {
      "en": "clean",
      "zh-TW": "打掃",
      "zh-CN": "打扫",
      "ko": "청소하다",
      "vi": "dọn dẹp",
      "id": "membersihkan"
    }
  },
  {
    "id": "V0714",
    "w": "運動",
    "r": "うんどう",
    "m": {
      "en": "exercise",
      "zh-TW": "運動",
      "zh-CN": "运动",
      "ko": "운동",
      "vi": "vận động",
      "id": "olahraga"
    },
    "ex": "運動する",
    "exm": {
      "en": "exercise",
      "zh-TW": "運動",
      "zh-CN": "运动",
      "ko": "운동하다",
      "vi": "vận động",
      "id": "berolahraga"
    }
  },
  {
    "id": "V0715",
    "w": "運転",
    "r": "うんてん",
    "m": {
      "en": "drive",
      "zh-TW": "駕駛",
      "zh-CN": "驾驶",
      "ko": "운전",
      "vi": "lái xe",
      "id": "mengemudi"
    },
    "ex": "運転する",
    "exm": {
      "en": "drive",
      "zh-TW": "駕駛",
      "zh-CN": "驾驶",
      "ko": "운전하다",
      "vi": "lái xe",
      "id": "mengemudi"
    }
  },
  {
    "id": "V0716",
    "w": "利用",
    "r": "りよう",
    "m": {
      "en": "use",
      "zh-TW": "利用",
      "zh-CN": "利用",
      "ko": "이용",
      "vi": "sử dụng",
      "id": "menggunakan"
    },
    "ex": "利用する",
    "exm": {
      "en": "use",
      "zh-TW": "利用",
      "zh-CN": "利用",
      "ko": "이용하다",
      "vi": "sử dụng",
      "id": "menggunakan"
    }
  },
  {
    "id": "V0717",
    "w": "輸入",
    "r": "ゆにゅう",
    "m": {
      "en": "import",
      "zh-TW": "進口",
      "zh-CN": "进口",
      "ko": "수입",
      "vi": "nhập khẩu",
      "id": "impor"
    },
    "ex": "輸入する",
    "exm": {
      "en": "import",
      "zh-TW": "進口",
      "zh-CN": "进口",
      "ko": "수입하다",
      "vi": "nhập khẩu",
      "id": "mengimpor"
    }
  },
  {
    "id": "V0718",
    "w": "輸出",
    "r": "ゆしゅつ",
    "m": {
      "en": "export",
      "zh-TW": "出口",
      "zh-CN": "出口",
      "ko": "수출",
      "vi": "xuất khẩu",
      "id": "ekspor"
    },
    "ex": "輸出する",
    "exm": {
      "en": "export",
      "zh-TW": "出口",
      "zh-CN": "出口",
      "ko": "수출하다",
      "vi": "xuất khẩu",
      "id": "mengekspor"
    }
  },
  {
    "id": "V0719",
    "w": "発展",
    "r": "はってん",
    "m": {
      "en": "development",
      "zh-TW": "發展",
      "zh-CN": "发展",
      "ko": "발전",
      "vi": "phát triển",
      "id": "perkembangan"
    },
    "ex": "発展する",
    "exm": {
      "en": "develop",
      "zh-TW": "發展",
      "zh-CN": "发展",
      "ko": "발전하다",
      "vi": "phát triển",
      "id": "berkembang"
    }
  },
  {
    "id": "V0720",
    "w": "発明",
    "r": "はつめい",
    "m": {
      "en": "invention",
      "zh-TW": "發明",
      "zh-CN": "发明",
      "ko": "발명",
      "vi": "phát minh",
      "id": "penemuan"
    },
    "ex": "発明する",
    "exm": {
      "en": "invent",
      "zh-TW": "發明",
      "zh-CN": "发明",
      "ko": "발명하다",
      "vi": "phát minh",
      "id": "menemukan"
    }
  },
  {
    "id": "V0721",
    "w": "発見",
    "r": "はっけん",
    "m": {
      "en": "discovery",
      "zh-TW": "發現",
      "zh-CN": "发现",
      "ko": "발견",
      "vi": "phát hiện",
      "id": "penemuan"
    },
    "ex": "発見する",
    "exm": {
      "en": "discover",
      "zh-TW": "發現",
      "zh-CN": "发现",
      "ko": "발견하다",
      "vi": "phát hiện",
      "id": "menemukan"
    }
  },
  {
    "id": "V0722",
    "w": "研究",
    "r": "けんきゅう",
    "m": {
      "en": "research",
      "zh-TW": "研究",
      "zh-CN": "研究",
      "ko": "연구",
      "vi": "nghiên cứu",
      "id": "penelitian"
    },
    "ex": "研究する",
    "exm": {
      "en": "research",
      "zh-TW": "研究",
      "zh-CN": "研究",
      "ko": "연구하다",
      "vi": "nghiên cứu",
      "id": "meneliti"
    }
  },
  {
    "id": "V0723",
    "w": "調査",
    "r": "ちょうさ",
    "m": {
      "en": "survey",
      "zh-TW": "調查",
      "zh-CN": "调查",
      "ko": "조사",
      "vi": "điều tra",
      "id": "survei"
    },
    "ex": "調査する",
    "exm": {
      "en": "survey",
      "zh-TW": "調查",
      "zh-CN": "调查",
      "ko": "조사하다",
      "vi": "điều tra",
      "id": "mensurvei"
    }
  },
  {
    "id": "V0724",
    "w": "実験",
    "r": "じっけん",
    "m": {
      "en": "experiment",
      "zh-TW": "實驗",
      "zh-CN": "实验",
      "ko": "실험",
      "vi": "thí nghiệm",
      "id": "eksperimen"
    },
    "ex": "実験する",
    "exm": {
      "en": "experiment",
      "zh-TW": "實驗",
      "zh-CN": "实验",
      "ko": "실험하다",
      "vi": "thí nghiệm",
      "id": "bereksperimen"
    }
  },
  {
    "id": "V0725",
    "w": "報告",
    "r": "ほうこく",
    "m": {
      "en": "report",
      "zh-TW": "報告",
      "zh-CN": "报告",
      "ko": "보고",
      "vi": "báo cáo",
      "id": "laporan"
    },
    "ex": "報告する",
    "exm": {
      "en": "report",
      "zh-TW": "報告",
      "zh-CN": "报告",
      "ko": "보고하다",
      "vi": "báo cáo",
      "id": "melaporkan"
    }
  },
  {
    "id": "V0726",
    "w": "発表",
    "r": "はっぴょう",
    "m": {
      "en": "announce",
      "zh-TW": "發表",
      "zh-CN": "发表",
      "ko": "발표",
      "vi": "phát biểu",
      "id": "pengumuman"
    },
    "ex": "発表する",
    "exm": {
      "en": "announce",
      "zh-TW": "發表",
      "zh-CN": "发表",
      "ko": "발표하다",
      "vi": "phát biểu",
      "id": "mengumumkan"
    }
  },
  {
    "id": "V0727",
    "w": "放送",
    "r": "ほうそう",
    "m": {
      "en": "broadcast",
      "zh-TW": "播放",
      "zh-CN": "播放",
      "ko": "방송",
      "vi": "phát sóng",
      "id": "siaran"
    },
    "ex": "放送する",
    "exm": {
      "en": "broadcast",
      "zh-TW": "播放",
      "zh-CN": "播放",
      "ko": "방송하다",
      "vi": "phát sóng",
      "id": "menyiarkan"
    }
  },
  {
    "id": "V0728",
    "w": "録音",
    "r": "ろくおん",
    "m": {
      "en": "record",
      "zh-TW": "錄音",
      "zh-CN": "录音",
      "ko": "녹음",
      "vi": "ghi âm",
      "id": "rekaman"
    },
    "ex": "録音する",
    "exm": {
      "en": "record",
      "zh-TW": "錄音",
      "zh-CN": "录音",
      "ko": "녹음하다",
      "vi": "ghi âm",
      "id": "merekam"
    }
  },
  {
    "id": "V0729",
    "w": "撮影",
    "r": "さつえい",
    "m": {
      "en": "photography",
      "zh-TW": "拍攝",
      "zh-CN": "拍摄",
      "ko": "촬영",
      "vi": "chụp ảnh",
      "id": "fotografi"
    },
    "ex": "撮影する",
    "exm": {
      "en": "take photo",
      "zh-TW": "拍攝",
      "zh-CN": "拍摄",
      "ko": "촬영하다",
      "vi": "chụp ảnh",
      "id": "memotret"
    }
  },
  {
    "id": "V0730",
    "w": "印刷",
    "r": "いんさつ",
    "m": {
      "en": "print",
      "zh-TW": "印刷",
      "zh-CN": "印刷",
      "ko": "인쇄",
      "vi": "in ấn",
      "id": "cetak"
    },
    "ex": "印刷する",
    "exm": {
      "en": "print",
      "zh-TW": "印刷",
      "zh-CN": "印刷",
      "ko": "인쇄하다",
      "vi": "in ấn",
      "id": "mencetak"
    }
  },
  {
    "id": "V0731",
    "w": "翻訳",
    "r": "ほんやく",
    "m": {
      "en": "translate",
      "zh-TW": "翻譯",
      "zh-CN": "翻译",
      "ko": "번역",
      "vi": "dịch",
      "id": "terjemahan"
    },
    "ex": "翻訳する",
    "exm": {
      "en": "translate",
      "zh-TW": "翻譯",
      "zh-CN": "翻译",
      "ko": "번역하다",
      "vi": "dịch",
      "id": "menerjemahkan"
    }
  },
  {
    "id": "V0732",
    "w": "通訳",
    "r": "つうやく",
    "m": {
      "en": "interpret",
      "zh-TW": "口譯",
      "zh-CN": "口译",
      "ko": "통역",
      "vi": "phiên dịch",
      "id": "penerjemah"
    },
    "ex": "通訳する",
    "exm": {
      "en": "interpret",
      "zh-TW": "口譯",
      "zh-CN": "口译",
      "ko": "통역하다",
      "vi": "phiên dịch",
      "id": "menerjemahkan lisan"
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
      "id": "input"
    },
    "ex": "入力する",
    "exm": {
      "en": "input",
      "zh-TW": "輸入",
      "zh-CN": "输入",
      "ko": "입력하다",
      "vi": "nhập",
      "id": "memasukkan"
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
      "id": "output"
    },
    "ex": "出力する",
    "exm": {
      "en": "output",
      "zh-TW": "輸出",
      "zh-CN": "输出",
      "ko": "출력하다",
      "vi": "xuất",
      "id": "mengeluarkan"
    }
  },
  {
    "id": "V0735",
    "w": "検索",
    "r": "けんさく",
    "m": {
      "en": "search",
      "zh-TW": "搜尋",
      "zh-CN": "搜索",
      "ko": "검색",
      "vi": "tìm kiếm",
      "id": "pencarian"
    },
    "ex": "検索する",
    "exm": {
      "en": "search",
      "zh-TW": "搜尋",
      "zh-CN": "搜索",
      "ko": "검색하다",
      "vi": "tìm kiếm",
      "id": "mencari"
    }
  },
  {
    "id": "V0736",
    "w": "登録",
    "r": "とうろく",
    "m": {
      "en": "register",
      "zh-TW": "註冊",
      "zh-CN": "注册",
      "ko": "등록",
      "vi": "đăng ký",
      "id": "pendaftaran"
    },
    "ex": "登録する",
    "exm": {
      "en": "register",
      "zh-TW": "註冊",
      "zh-CN": "注册",
      "ko": "등록하다",
      "vi": "đăng ký",
      "id": "mendaftar"
    }
  },
  {
    "id": "V0737",
    "w": "削除",
    "r": "さくじょ",
    "m": {
      "en": "delete",
      "zh-TW": "刪除",
      "zh-CN": "删除",
      "ko": "삭제",
      "vi": "xóa",
      "id": "hapus"
    },
    "ex": "削除する",
    "exm": {
      "en": "delete",
      "zh-TW": "刪除",
      "zh-CN": "删除",
      "ko": "삭제하다",
      "vi": "xóa",
      "id": "menghapus"
    }
  },
  {
    "id": "V0738",
    "w": "保存",
    "r": "ほぞん",
    "m": {
      "en": "save",
      "zh-TW": "保存",
      "zh-CN": "保存",
      "ko": "저장",
      "vi": "lưu",
      "id": "simpan"
    },
    "ex": "保存する",
    "exm": {
      "en": "save",
      "zh-TW": "保存",
      "zh-CN": "保存",
      "ko": "저장하다",
      "vi": "lưu",
      "id": "menyimpan"
    }
  },
  {
    "id": "V0739",
    "w": "共有",
    "r": "きょうゆう",
    "m": {
      "en": "share",
      "zh-TW": "共享",
      "zh-CN": "共享",
      "ko": "공유",
      "vi": "chia sẻ",
      "id": "berbagi"
    },
    "ex": "共有する",
    "exm": {
      "en": "share",
      "zh-TW": "共享",
      "zh-CN": "共享",
      "ko": "공유하다",
      "vi": "chia sẻ",
      "id": "berbagi"
    }
  },
  {
    "id": "V0740",
    "w": "接続",
    "r": "せつぞく",
    "m": {
      "en": "connect",
      "zh-TW": "連接",
      "zh-CN": "连接",
      "ko": "접속",
      "vi": "kết nối",
      "id": "koneksi"
    },
    "ex": "接続する",
    "exm": {
      "en": "connect",
      "zh-TW": "連接",
      "zh-CN": "连接",
      "ko": "접속하다",
      "vi": "kết nối",
      "id": "menghubungkan"
    }
  },
  {
    "id": "V0741",
    "w": "充電",
    "r": "じゅうでん",
    "m": {
      "en": "charge",
      "zh-TW": "充電",
      "zh-CN": "充电",
      "ko": "충전",
      "vi": "sạc pin",
      "id": "mengisi daya"
    },
    "ex": "充電する",
    "exm": {
      "en": "charge",
      "zh-TW": "充電",
      "zh-CN": "充电",
      "ko": "충전하다",
      "vi": "sạc pin",
      "id": "mengisi daya"
    }
  },
  {
    "id": "V0742",
    "w": "故障",
    "r": "こしょう",
    "m": {
      "en": "breakdown",
      "zh-TW": "故障",
      "zh-CN": "故障",
      "ko": "고장",
      "vi": "hỏng",
      "id": "rusak"
    },
    "ex": "故障する",
    "exm": {
      "en": "break down",
      "zh-TW": "故障",
      "zh-CN": "故障",
      "ko": "고장나다",
      "vi": "bị hỏng",
      "id": "rusak"
    }
  },
  {
    "id": "V0743",
    "w": "修理",
    "r": "しゅうり",
    "m": {
      "en": "repair",
      "zh-TW": "修理",
      "zh-CN": "修理",
      "ko": "수리",
      "vi": "sửa chữa",
      "id": "perbaikan"
    },
    "ex": "修理する",
    "exm": {
      "en": "repair",
      "zh-TW": "修理",
      "zh-CN": "修理",
      "ko": "수리하다",
      "vi": "sửa chữa",
      "id": "memperbaiki"
    }
  },
  {
    "id": "V0744",
    "w": "交換",
    "r": "こうかん",
    "m": {
      "en": "exchange",
      "zh-TW": "交換",
      "zh-CN": "交换",
      "ko": "교환",
      "vi": "trao đổi",
      "id": "pertukaran"
    },
    "ex": "交換する",
    "exm": {
      "en": "exchange",
      "zh-TW": "交換",
      "zh-CN": "交换",
      "ko": "교환하다",
      "vi": "trao đổi",
      "id": "menukar"
    }
  },
  {
    "id": "V0745",
    "w": "返品",
    "r": "へんぴん",
    "m": {
      "en": "return item",
      "zh-TW": "退貨",
      "zh-CN": "退货",
      "ko": "반품",
      "vi": "trả hàng",
      "id": "pengembalian"
    },
    "ex": "返品する",
    "exm": {
      "en": "return item",
      "zh-TW": "退貨",
      "zh-CN": "退货",
      "ko": "반품하다",
      "vi": "trả hàng",
      "id": "mengembalikan barang"
    }
  },
  {
    "id": "V0746",
    "w": "配達",
    "r": "はいたつ",
    "m": {
      "en": "delivery",
      "zh-TW": "配送",
      "zh-CN": "配送",
      "ko": "배달",
      "vi": "giao hàng",
      "id": "pengiriman"
    },
    "ex": "配達する",
    "exm": {
      "en": "deliver",
      "zh-TW": "配送",
      "zh-CN": "配送",
      "ko": "배달하다",
      "vi": "giao hàng",
      "id": "mengirim"
    }
  },
  {
    "id": "V0747",
    "w": "発送",
    "r": "はっそう",
    "m": {
      "en": "ship",
      "zh-TW": "船",
      "zh-CN": "船",
      "ko": "배",
      "vi": "Tàu",
      "id": "Kapal"
    },
    "ex": "発送する",
    "exm": {
      "en": "ship",
      "zh-TW": "發貨",
      "zh-CN": "发货",
      "ko": "발송하다",
      "vi": "gửi đi",
      "id": "mengirim"
    }
  },
  {
    "id": "V0748",
    "w": "到着",
    "r": "とうちゃく",
    "m": {
      "en": "arrival",
      "zh-TW": "到達",
      "zh-CN": "到达",
      "ko": "도착",
      "vi": "đến nơi",
      "id": "kedatangan"
    },
    "ex": "到着する",
    "exm": {
      "en": "arrive",
      "zh-TW": "到達",
      "zh-CN": "到达",
      "ko": "도착하다",
      "vi": "đến nơi",
      "id": "tiba"
    }
  },
  {
    "id": "V0749",
    "w": "出発",
    "r": "しゅっぱつ",
    "m": {
      "en": "departure",
      "zh-TW": "出發",
      "zh-CN": "出发",
      "ko": "출발",
      "vi": "khởi hành",
      "id": "keberangkatan"
    },
    "ex": "出発する",
    "exm": {
      "en": "depart",
      "zh-TW": "出發",
      "zh-CN": "出发",
      "ko": "출발하다",
      "vi": "khởi hành",
      "id": "berangkat"
    }
  },
  {
    "id": "V0750",
    "w": "毎朝",
    "r": "まいあさ",
    "m": {
      "en": "every morning",
      "zh-TW": "毎朝",
      "zh-CN": "毎朝",
      "ko": "every morning",
      "vi": "every morning",
      "id": "every morning"
    }
  },
  {
    "id": "V0751",
    "w": "毎晩",
    "r": "まいばん",
    "m": {
      "en": "every night",
      "zh-TW": "毎晩",
      "zh-CN": "毎晩",
      "ko": "every night",
      "vi": "every night",
      "id": "every night"
    }
  },
  {
    "id": "V0752",
    "w": "今朝",
    "r": "けさ",
    "m": {
      "en": "this morning",
      "zh-TW": "今朝",
      "zh-CN": "今朝",
      "ko": "this morning",
      "vi": "this morning",
      "id": "this morning"
    }
  },
  {
    "id": "V0753",
    "w": "今晩",
    "r": "こんばん",
    "m": {
      "en": "tonight",
      "zh-TW": "今晩",
      "zh-CN": "今晩",
      "ko": "tonight",
      "vi": "tonight",
      "id": "tonight"
    }
  },
  {
    "id": "V0754",
    "w": "朝ご飯",
    "r": "あさごはん",
    "m": {
      "en": "breakfast",
      "zh-TW": "朝ご飯",
      "zh-CN": "朝ご飯",
      "ko": "breakfast",
      "vi": "breakfast",
      "id": "breakfast"
    }
  },
  {
    "id": "V0755",
    "w": "昼ご飯",
    "r": "ひるごはん",
    "m": {
      "en": "lunch",
      "zh-TW": "昼ご飯",
      "zh-CN": "昼ご飯",
      "ko": "lunch",
      "vi": "lunch",
      "id": "lunch"
    }
  },
  {
    "id": "V0756",
    "w": "晩ご飯",
    "r": "ばんごはん",
    "m": {
      "en": "dinner",
      "zh-TW": "晩ご飯",
      "zh-CN": "晩ご飯",
      "ko": "dinner",
      "vi": "dinner",
      "id": "dinner"
    }
  },
  {
    "id": "V0757",
    "w": "お弁当",
    "r": "おべんとう",
    "m": {
      "en": "bento",
      "zh-TW": "お弁当",
      "zh-CN": "お弁当",
      "ko": "bento",
      "vi": "bento",
      "id": "bento"
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
      "id": "water"
    }
  },
  {
    "id": "V0759",
    "w": "お菓子",
    "r": "おかし",
    "m": {
      "en": "sweets",
      "zh-TW": "お菓子",
      "zh-CN": "お菓子",
      "ko": "sweets",
      "vi": "sweets",
      "id": "sweets"
    }
  },
  {
    "id": "V0760",
    "w": "お店",
    "r": "おみせ",
    "m": {
      "en": "shop",
      "zh-TW": "お店",
      "zh-CN": "お店",
      "ko": "shop",
      "vi": "shop",
      "id": "shop"
    }
  },
  {
    "id": "V0761",
    "w": "地下鉄",
    "r": "ちかてつ",
    "m": {
      "en": "subway",
      "zh-TW": "地下鉄",
      "zh-CN": "地下鉄",
      "ko": "subway",
      "vi": "subway",
      "id": "subway"
    }
  },
  {
    "id": "V0762",
    "w": "バス停",
    "r": "バスてい",
    "m": {
      "en": "bus stop",
      "zh-TW": "バス停",
      "zh-CN": "バス停",
      "ko": "bus stop",
      "vi": "bus stop",
      "id": "bus stop"
    }
  },
  {
    "id": "V0763",
    "w": "階段",
    "r": "かいだん",
    "m": {
      "en": "stairs",
      "zh-TW": "階段",
      "zh-CN": "階段",
      "ko": "stairs",
      "vi": "stairs",
      "id": "stairs"
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
      "id": "elevator"
    }
  },
  {
    "id": "V0765",
    "w": "廊下",
    "r": "ろうか",
    "m": {
      "en": "hallway",
      "zh-TW": "廊下",
      "zh-CN": "廊下",
      "ko": "hallway",
      "vi": "hallway",
      "id": "hallway"
    }
  },
  {
    "id": "V0766",
    "w": "屋根",
    "r": "やね",
    "m": {
      "en": "roof",
      "zh-TW": "屋根",
      "zh-CN": "屋根",
      "ko": "roof",
      "vi": "roof",
      "id": "roof"
    }
  },
  {
    "id": "V0767",
    "w": "壁",
    "r": "かべ",
    "m": {
      "en": "wall",
      "zh-TW": "壁",
      "zh-CN": "壁",
      "ko": "wall",
      "vi": "wall",
      "id": "wall"
    }
  },
  {
    "id": "V0768",
    "w": "床",
    "r": "ゆか",
    "m": {
      "en": "floor",
      "zh-TW": "床",
      "zh-CN": "床",
      "ko": "floor",
      "vi": "floor",
      "id": "floor"
    }
  },
  {
    "id": "V0769",
    "w": "天井",
    "r": "てんじょう",
    "m": {
      "en": "ceiling",
      "zh-TW": "天井",
      "zh-CN": "天井",
      "ko": "ceiling",
      "vi": "ceiling",
      "id": "ceiling"
    }
  },
  {
    "id": "V0770",
    "w": "居間",
    "r": "いま",
    "m": {
      "en": "living room",
      "zh-TW": "居間",
      "zh-CN": "居間",
      "ko": "living room",
      "vi": "living room",
      "id": "living room"
    }
  },
  {
    "id": "V0771",
    "w": "寝室",
    "r": "しんしつ",
    "m": {
      "en": "bedroom",
      "zh-TW": "寝室",
      "zh-CN": "寝室",
      "ko": "bedroom",
      "vi": "bedroom",
      "id": "bedroom"
    }
  },
  {
    "id": "V0772",
    "w": "浴室",
    "r": "よくしつ",
    "m": {
      "en": "bathroom",
      "zh-TW": "浴室",
      "zh-CN": "浴室",
      "ko": "bathroom",
      "vi": "bathroom",
      "id": "bathroom"
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
      "id": "balcony"
    }
  },
  {
    "id": "V0774",
    "w": "駐車場",
    "r": "ちゅうしゃじょう",
    "m": {
      "en": "parking lot",
      "zh-TW": "駐車場",
      "zh-CN": "駐車場",
      "ko": "parking lot",
      "vi": "parking lot",
      "id": "parking lot"
    }
  },
  {
    "id": "V0775",
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
    "id": "V0776",
    "w": "歩道",
    "r": "ほどう",
    "m": {
      "en": "sidewalk",
      "zh-TW": "歩道",
      "zh-CN": "歩道",
      "ko": "sidewalk",
      "vi": "sidewalk",
      "id": "sidewalk"
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
      "id": "cafe"
    }
  },
  {
    "id": "V0778",
    "w": "港",
    "r": "みなと",
    "m": {
      "en": "port",
      "zh-TW": "港",
      "zh-CN": "港",
      "ko": "port",
      "vi": "port",
      "id": "port"
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
      "id": "table"
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
      "id": "sofa"
    }
  },
  {
    "id": "V0781",
    "w": "本棚",
    "r": "ほんだな",
    "m": {
      "en": "bookshelf",
      "zh-TW": "本棚",
      "zh-CN": "本棚",
      "ko": "bookshelf",
      "vi": "bookshelf",
      "id": "bookshelf"
    }
  },
  {
    "id": "V0782",
    "w": "掃除機",
    "r": "そうじき",
    "m": {
      "en": "vacuum cleaner",
      "zh-TW": "掃除機",
      "zh-CN": "掃除機",
      "ko": "vacuum cleaner",
      "vi": "vacuum cleaner",
      "id": "vacuum cleaner"
    }
  },
  {
    "id": "V0783",
    "w": "携帯電話",
    "r": "けいたいでんわ",
    "m": {
      "en": "mobile phone",
      "zh-TW": "携帯電話",
      "zh-CN": "携帯電話",
      "ko": "mobile phone",
      "vi": "mobile phone",
      "id": "mobile phone"
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
      "id": "shirt"
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
      "id": "pants"
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
      "id": "skirt"
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
      "id": "coat"
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
      "id": "sweater"
    }
  },
  {
    "id": "V0789",
    "w": "靴下",
    "r": "くつした",
    "m": {
      "en": "socks",
      "zh-TW": "靴下",
      "zh-CN": "靴下",
      "ko": "socks",
      "vi": "socks",
      "id": "socks"
    }
  },
  {
    "id": "V0790",
    "w": "手袋",
    "r": "てぶくろ",
    "m": {
      "en": "gloves",
      "zh-TW": "手袋",
      "zh-CN": "手袋",
      "ko": "gloves",
      "vi": "gloves",
      "id": "gloves"
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
      "id": "scarf"
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
      "id": "necktie"
    }
  },
  {
    "id": "V0793",
    "w": "鞄",
    "r": "かばん",
    "m": {
      "en": "bag",
      "zh-TW": "鞄",
      "zh-CN": "鞄",
      "ko": "bag",
      "vi": "bag",
      "id": "bag"
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
      "id": "backpack"
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
      "id": "pocket"
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
      "id": "button"
    }
  },
  {
    "id": "V0797",
    "w": "石鹸",
    "r": "せっけん",
    "m": {
      "en": "soap",
      "zh-TW": "石鹸",
      "zh-CN": "石鹸",
      "ko": "soap",
      "vi": "soap",
      "id": "soap"
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
      "id": "towel"
    }
  },
  {
    "id": "V0799",
    "w": "歯ブラシ",
    "r": "はブラシ",
    "m": {
      "en": "toothbrush",
      "zh-TW": "歯ブラシ",
      "zh-CN": "歯ブラシ",
      "ko": "toothbrush",
      "vi": "toothbrush",
      "id": "toothbrush"
    }
  },
  {
    "id": "V0800",
    "w": "歯磨き粉",
    "r": "はみがきこ",
    "m": {
      "en": "toothpaste",
      "zh-TW": "歯磨き粉",
      "zh-CN": "歯磨き粉",
      "ko": "toothpaste",
      "vi": "toothpaste",
      "id": "toothpaste"
    }
  }
];

if (typeof module !== 'undefined') module.exports = { N5_VOCAB };
