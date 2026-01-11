// Fujisan.AI Data
// Count: 80

const N5_GRAMMAR = [
  {
    "id": "G0001",
    "p": "〜は〜です",
    "m": {
      "en": "X is Y",
      "zh-TW": "X是Y",
      "zh-CN": "X是Y",
      "ko": "[X is Y]",
      "vi": "[X is Y]",
      "id": "[X is Y]",
      "es": "X is Y",
      "pt": "X is Y"
    },
    "ex": "私は学生です",
    "exm": {
      "en": "I am a student",
      "zh-TW": "我是學生",
      "zh-CN": "我是学生",
      "ko": "[I am a student]",
      "vi": "[I am a student]",
      "id": "[I am a student]",
      "es": "I am a student",
      "pt": "I am a student"
    }
  },
  {
    "id": "G0002",
    "p": "〜は〜じゃないです",
    "m": {
      "en": "X is not Y",
      "zh-TW": "X不是Y",
      "zh-CN": "X不是Y",
      "ko": "[X is not Y]",
      "vi": "[X is not Y]",
      "id": "[X is not Y]",
      "es": "X is not Y",
      "pt": "X is not Y"
    },
    "ex": "私は先生じゃないです",
    "exm": {
      "en": "I am not a teacher",
      "zh-TW": "我不是老師",
      "zh-CN": "我不是老师",
      "ko": "[I am not a teacher]",
      "vi": "[I am not a teacher]",
      "id": "[I am not a teacher]",
      "es": "I am not a teacher",
      "pt": "I am not a teacher"
    }
  },
  {
    "id": "G0003",
    "p": "〜は〜ですか",
    "m": {
      "en": "Is X Y?",
      "zh-TW": "X是Y嗎?",
      "zh-CN": "X是Y吗?",
      "ko": "[Is X Y?]",
      "vi": "[Is X Y?]",
      "id": "[Is X Y?]",
      "es": "Is X Y?",
      "pt": "Is X Y?"
    },
    "ex": "あなたは学生ですか",
    "exm": {
      "en": "Are you a student?",
      "zh-TW": "你是學生嗎",
      "zh-CN": "你是学生吗",
      "ko": "[Are you a student?]",
      "vi": "[Are you a student?]",
      "id": "[Are you a student?]",
      "es": "Are you a student?",
      "pt": "Are you a student?"
    }
  },
  {
    "id": "G0004",
    "p": "〜も",
    "m": {
      "en": "also/too",
      "zh-TW": "也",
      "zh-CN": "也",
      "ko": "[also/too]",
      "vi": "[also/too]",
      "id": "[also/too]",
      "es": "also/too",
      "pt": "also/too"
    },
    "ex": "私も学生です",
    "exm": {
      "en": "I am also a student",
      "zh-TW": "我也是學生",
      "zh-CN": "我也是学生",
      "ko": "[I am also a student]",
      "vi": "[I am also a student]",
      "id": "[I am also a student]",
      "es": "I am also a student",
      "pt": "I am also a student"
    }
  },
  {
    "id": "G0005",
    "p": "〜の",
    "m": {
      "en": "possessive",
      "zh-TW": "的",
      "zh-CN": "的",
      "ko": "[possessive]",
      "vi": "[possessive]",
      "id": "[possessive]",
      "es": "possessive",
      "pt": "possessive"
    },
    "ex": "私の本",
    "exm": {
      "en": "my book",
      "zh-TW": "我的書",
      "zh-CN": "我的书",
      "ko": "[my book]",
      "vi": "[my book]",
      "id": "[my book]",
      "es": "my book",
      "pt": "my book"
    }
  },
  {
    "id": "G0006",
    "p": "〜に",
    "m": {
      "en": "to/at (location)",
      "zh-TW": "在/到",
      "zh-CN": "在/到",
      "ko": "[to/at (location)]",
      "vi": "[to/at (location)]",
      "id": "[to/at (location)]",
      "es": "to/at (location)",
      "pt": "to/at (location)"
    },
    "ex": "学校に行く",
    "exm": {
      "en": "go to school",
      "zh-TW": "去學校",
      "zh-CN": "去学校",
      "ko": "[go to school]",
      "vi": "[go to school]",
      "id": "[go to school]",
      "es": "go to school",
      "pt": "go to school"
    }
  },
  {
    "id": "G0007",
    "p": "〜で",
    "m": {
      "en": "at/by means of",
      "zh-TW": "在/用",
      "zh-CN": "在/用",
      "ko": "[at/by means of]",
      "vi": "[at/by means of]",
      "id": "[at/by means of]",
      "es": "at/by means of",
      "pt": "at/by means of"
    },
    "ex": "電車で行く",
    "exm": {
      "en": "go by train",
      "zh-TW": "搭電車去",
      "zh-CN": "坐电车去",
      "ko": "[go by train]",
      "vi": "[go by train]",
      "id": "[go by train]",
      "es": "go by train",
      "pt": "go by train"
    }
  },
  {
    "id": "G0008",
    "p": "〜を",
    "m": {
      "en": "object marker",
      "zh-TW": "(受詞助詞)",
      "zh-CN": "(宾语助词)",
      "ko": "[object marker]",
      "vi": "[object marker]",
      "id": "[object marker]",
      "es": "object marker",
      "pt": "object marker"
    },
    "ex": "本を読む",
    "exm": {
      "en": "read a book",
      "zh-TW": "看書",
      "zh-CN": "看书",
      "ko": "[read a book]",
      "vi": "[read a book]",
      "id": "[read a book]",
      "es": "read a book",
      "pt": "read a book"
    }
  },
  {
    "id": "G0009",
    "p": "〜が",
    "m": {
      "en": "subject marker",
      "zh-TW": "(主詞助詞)",
      "zh-CN": "(主语助词)",
      "ko": "[subject marker]",
      "vi": "[subject marker]",
      "id": "[subject marker]",
      "es": "subject marker",
      "pt": "subject marker"
    },
    "ex": "雨が降る",
    "exm": {
      "en": "rain falls",
      "zh-TW": "下雨",
      "zh-CN": "下雨",
      "ko": "[rain falls]",
      "vi": "[rain falls]",
      "id": "[rain falls]",
      "es": "rain falls",
      "pt": "rain falls"
    }
  },
  {
    "id": "G0010",
    "p": "〜と",
    "m": {
      "en": "and/with",
      "zh-TW": "和/與",
      "zh-CN": "和/与",
      "ko": "[and/with]",
      "vi": "[and/with]",
      "id": "[and/with]",
      "es": "and/with",
      "pt": "and/with"
    },
    "ex": "友達と行く",
    "exm": {
      "en": "go with friend",
      "zh-TW": "和朋友去",
      "zh-CN": "和朋友去",
      "ko": "[go with friend]",
      "vi": "[go with friend]",
      "id": "[go with friend]",
      "es": "go with friend",
      "pt": "go with friend"
    }
  },
  {
    "id": "G0011",
    "p": "〜から〜まで",
    "m": {
      "en": "from...to...",
      "zh-TW": "從...到...",
      "zh-CN": "从...到...",
      "ko": "[from...to...]",
      "vi": "[from...to...]",
      "id": "[from...to...]",
      "es": "from...to...",
      "pt": "from...to..."
    },
    "ex": "9時から5時まで",
    "exm": {
      "en": "from 9 to 5",
      "zh-TW": "從9點到5點",
      "zh-CN": "从9点到5点",
      "ko": "[from 9 to 5]",
      "vi": "[from 9 to 5]",
      "id": "[from 9 to 5]",
      "es": "from 9 to 5",
      "pt": "from 9 to 5"
    }
  },
  {
    "id": "G0012",
    "p": "〜ます",
    "m": {
      "en": "polite verb ending",
      "zh-TW": "(動詞禮貌形)",
      "zh-CN": "(动词礼貌形)",
      "ko": "[polite verb ending]",
      "vi": "[polite verb ending]",
      "id": "[polite verb ending]",
      "es": "polite verb ending",
      "pt": "polite verb ending"
    },
    "ex": "食べます",
    "exm": {
      "en": "eat (polite)",
      "zh-TW": "吃(禮貌)",
      "zh-CN": "吃(礼貌)",
      "ko": "[eat (polite)]",
      "vi": "[eat (polite)]",
      "id": "[eat (polite)]",
      "es": "eat (polite)",
      "pt": "eat (polite)"
    }
  },
  {
    "id": "G0013",
    "p": "〜ません",
    "m": {
      "en": "polite negative",
      "zh-TW": "不...",
      "zh-CN": "不...",
      "ko": "[polite negative]",
      "vi": "[polite negative]",
      "id": "[polite negative]",
      "es": "polite negative",
      "pt": "polite negative"
    },
    "ex": "食べません",
    "exm": {
      "en": "don't eat",
      "zh-TW": "不吃",
      "zh-CN": "不吃",
      "ko": "[don't eat]",
      "vi": "[don't eat]",
      "id": "[don't eat]",
      "es": "don't eat",
      "pt": "don't eat"
    }
  },
  {
    "id": "G0014",
    "p": "〜ました",
    "m": {
      "en": "polite past",
      "zh-TW": "...了",
      "zh-CN": "...了",
      "ko": "[polite past]",
      "vi": "[polite past]",
      "id": "[polite past]",
      "es": "polite past",
      "pt": "polite past"
    },
    "ex": "食べました",
    "exm": {
      "en": "ate",
      "zh-TW": "吃了",
      "zh-CN": "吃了",
      "ko": "[ate]",
      "vi": "[ate]",
      "id": "[ate]",
      "es": "ate",
      "pt": "ate"
    }
  },
  {
    "id": "G0015",
    "p": "〜ませんでした",
    "m": {
      "en": "polite past negative",
      "zh-TW": "沒...",
      "zh-CN": "没...",
      "ko": "[polite past negative]",
      "vi": "[polite past negative]",
      "id": "[polite past negative]",
      "es": "polite past negative",
      "pt": "polite past negative"
    },
    "ex": "食べませんでした",
    "exm": {
      "en": "didn't eat",
      "zh-TW": "沒吃",
      "zh-CN": "没吃",
      "ko": "[didn't eat]",
      "vi": "[didn't eat]",
      "id": "[didn't eat]",
      "es": "didn't eat",
      "pt": "didn't eat"
    }
  },
  {
    "id": "G0016",
    "p": "〜ましょう",
    "m": {
      "en": "let's...",
      "zh-TW": "一起...吧",
      "zh-CN": "一起...吧",
      "ko": "[let's...]",
      "vi": "[let's...]",
      "id": "[let's...]",
      "es": "let's...",
      "pt": "let's..."
    },
    "ex": "食べましょう",
    "exm": {
      "en": "let's eat",
      "zh-TW": "一起吃吧",
      "zh-CN": "一起吃吧",
      "ko": "[let's eat]",
      "vi": "[let's eat]",
      "id": "[let's eat]",
      "es": "let's eat",
      "pt": "let's eat"
    }
  },
  {
    "id": "G0017",
    "p": "〜たい",
    "m": {
      "en": "want to...",
      "zh-TW": "想...",
      "zh-CN": "想...",
      "ko": "[want to...]",
      "vi": "[want to...]",
      "id": "[want to...]",
      "es": "want to...",
      "pt": "want to..."
    },
    "ex": "食べたい",
    "exm": {
      "en": "want to eat",
      "zh-TW": "想吃",
      "zh-CN": "想吃",
      "ko": "[want to eat]",
      "vi": "[want to eat]",
      "id": "[want to eat]",
      "es": "want to eat",
      "pt": "want to eat"
    }
  },
  {
    "id": "G0018",
    "p": "〜てください",
    "m": {
      "en": "please do...",
      "zh-TW": "請...",
      "zh-CN": "请...",
      "ko": "[please do...]",
      "vi": "[please do...]",
      "id": "[please do...]",
      "es": "please do...",
      "pt": "please do..."
    },
    "ex": "食べてください",
    "exm": {
      "en": "please eat",
      "zh-TW": "請吃",
      "zh-CN": "请吃",
      "ko": "[please eat]",
      "vi": "[please eat]",
      "id": "[please eat]",
      "es": "please eat",
      "pt": "please eat"
    }
  },
  {
    "id": "G0019",
    "p": "〜ている",
    "m": {
      "en": "be doing...",
      "zh-TW": "正在...",
      "zh-CN": "正在...",
      "ko": "[be doing...]",
      "vi": "[be doing...]",
      "id": "[be doing...]",
      "es": "be doing...",
      "pt": "be doing..."
    },
    "ex": "食べている",
    "exm": {
      "en": "eating",
      "zh-TW": "正在吃",
      "zh-CN": "正在吃",
      "ko": "[eating]",
      "vi": "[eating]",
      "id": "[eating]",
      "es": "eating",
      "pt": "eating"
    }
  },
  {
    "id": "G0020",
    "p": "〜てもいい",
    "m": {
      "en": "may/can...",
      "zh-TW": "可以...",
      "zh-CN": "可以...",
      "ko": "[may/can...]",
      "vi": "[may/can...]",
      "id": "[may/can...]",
      "es": "may/can...",
      "pt": "may/can..."
    },
    "ex": "食べてもいい",
    "exm": {
      "en": "may eat",
      "zh-TW": "可以吃",
      "zh-CN": "可以吃",
      "ko": "[may eat]",
      "vi": "[may eat]",
      "id": "[may eat]",
      "es": "may eat",
      "pt": "may eat"
    }
  },
  {
    "id": "G0021",
    "p": "〜てはいけない",
    "m": {
      "en": "must not...",
      "zh-TW": "不可以...",
      "zh-CN": "不可以...",
      "ko": "[must not...]",
      "vi": "[must not...]",
      "id": "[must not...]",
      "es": "must not...",
      "pt": "must not..."
    },
    "ex": "食べてはいけない",
    "exm": {
      "en": "must not eat",
      "zh-TW": "不可以吃",
      "zh-CN": "不可以吃",
      "ko": "[must not eat]",
      "vi": "[must not eat]",
      "id": "[must not eat]",
      "es": "must not eat",
      "pt": "must not eat"
    }
  },
  {
    "id": "G0022",
    "p": "〜なければならない",
    "m": {
      "en": "must...",
      "zh-TW": "必須...",
      "zh-CN": "必须...",
      "ko": "[must...]",
      "vi": "[must...]",
      "id": "[must...]",
      "es": "must...",
      "pt": "must..."
    },
    "ex": "食べなければならない",
    "exm": {
      "en": "must eat",
      "zh-TW": "必須吃",
      "zh-CN": "必须吃",
      "ko": "[must eat]",
      "vi": "[must eat]",
      "id": "[must eat]",
      "es": "must eat",
      "pt": "must eat"
    }
  },
  {
    "id": "G0023",
    "p": "〜ことができる",
    "m": {
      "en": "can...",
      "zh-TW": "能...",
      "zh-CN": "能...",
      "ko": "[can...]",
      "vi": "[can...]",
      "id": "[can...]",
      "es": "can...",
      "pt": "can..."
    },
    "ex": "食べることができる",
    "exm": {
      "en": "can eat",
      "zh-TW": "能吃",
      "zh-CN": "能吃",
      "ko": "[can eat]",
      "vi": "[can eat]",
      "id": "[can eat]",
      "es": "can eat",
      "pt": "can eat"
    }
  },
  {
    "id": "G0024",
    "p": "〜たことがある",
    "m": {
      "en": "have done...",
      "zh-TW": "曾經...過",
      "zh-CN": "曾经...过",
      "ko": "[have done...]",
      "vi": "[have done...]",
      "id": "[have done...]",
      "es": "have done...",
      "pt": "have done..."
    },
    "ex": "食べたことがある",
    "exm": {
      "en": "have eaten",
      "zh-TW": "曾經吃過",
      "zh-CN": "曾经吃过",
      "ko": "[have eaten]",
      "vi": "[have eaten]",
      "id": "[have eaten]",
      "es": "have eaten",
      "pt": "have eaten"
    }
  },
  {
    "id": "G0025",
    "p": "〜前に",
    "m": {
      "en": "before...",
      "zh-TW": "...之前",
      "zh-CN": "...之前",
      "ko": "[before...]",
      "vi": "[before...]",
      "id": "[before...]",
      "es": "before...",
      "pt": "before..."
    },
    "ex": "食べる前に",
    "exm": {
      "en": "before eating",
      "zh-TW": "吃之前",
      "zh-CN": "吃之前",
      "ko": "[before eating]",
      "vi": "[before eating]",
      "id": "[before eating]",
      "es": "before eating",
      "pt": "before eating"
    }
  },
  {
    "id": "G0026",
    "p": "〜後で",
    "m": {
      "en": "after...",
      "zh-TW": "...之後",
      "zh-CN": "...之后",
      "ko": "[after...]",
      "vi": "[after...]",
      "id": "[after...]",
      "es": "after...",
      "pt": "after..."
    },
    "ex": "食べた後で",
    "exm": {
      "en": "after eating",
      "zh-TW": "吃之後",
      "zh-CN": "吃之后",
      "ko": "[after eating]",
      "vi": "[after eating]",
      "id": "[after eating]",
      "es": "after eating",
      "pt": "after eating"
    }
  },
  {
    "id": "G0027",
    "p": "〜ながら",
    "m": {
      "en": "while...",
      "zh-TW": "一邊...一邊",
      "zh-CN": "一边...一边",
      "ko": "[while...]",
      "vi": "[while...]",
      "id": "[while...]",
      "es": "while...",
      "pt": "while..."
    },
    "ex": "食べながら話す",
    "exm": {
      "en": "talk while eating",
      "zh-TW": "邊吃邊說",
      "zh-CN": "边吃边说",
      "ko": "[talk while eating]",
      "vi": "[talk while eating]",
      "id": "[talk while eating]",
      "es": "talk while eating",
      "pt": "talk while eating"
    }
  },
  {
    "id": "G0028",
    "p": "〜たり〜たりする",
    "m": {
      "en": "do things like...",
      "zh-TW": "又...又...",
      "zh-CN": "又...又...",
      "ko": "[do things like...]",
      "vi": "[do things like...]",
      "id": "[do things like...]",
      "es": "do things like...",
      "pt": "do things like..."
    },
    "ex": "食べたり飲んだりする",
    "exm": {
      "en": "eat and drink",
      "zh-TW": "又吃又喝",
      "zh-CN": "又吃又喝",
      "ko": "[eat and drink]",
      "vi": "[eat and drink]",
      "id": "[eat and drink]",
      "es": "eat and drink",
      "pt": "eat and drink"
    }
  },
  {
    "id": "G0029",
    "p": "〜のが好き",
    "m": {
      "en": "like doing...",
      "zh-TW": "喜歡...",
      "zh-CN": "喜欢...",
      "ko": "[like doing...]",
      "vi": "[like doing...]",
      "id": "[like doing...]",
      "es": "like doing...",
      "pt": "like doing..."
    },
    "ex": "食べるのが好き",
    "exm": {
      "en": "like eating",
      "zh-TW": "喜歡吃",
      "zh-CN": "喜欢吃",
      "ko": "[like eating]",
      "vi": "[like eating]",
      "id": "[like eating]",
      "es": "like eating",
      "pt": "like eating"
    }
  },
  {
    "id": "G0030",
    "p": "〜のが上手",
    "m": {
      "en": "good at...",
      "zh-TW": "擅長...",
      "zh-CN": "擅长...",
      "ko": "[good at...]",
      "vi": "[good at...]",
      "id": "[good at...]",
      "es": "good at...",
      "pt": "good at..."
    },
    "ex": "料理するのが上手",
    "exm": {
      "en": "good at cooking",
      "zh-TW": "擅長做菜",
      "zh-CN": "擅长做菜",
      "ko": "[good at cooking]",
      "vi": "[good at cooking]",
      "id": "[good at cooking]",
      "es": "good at cooking",
      "pt": "good at cooking"
    }
  },
  {
    "id": "G0031",
    "p": "〜つもり",
    "m": {
      "en": "intend to...",
      "zh-TW": "打算...",
      "zh-CN": "打算...",
      "ko": "[intend to...]",
      "vi": "[intend to...]",
      "id": "[intend to...]",
      "es": "intend to...",
      "pt": "intend to..."
    },
    "ex": "食べるつもり",
    "exm": {
      "en": "intend to eat",
      "zh-TW": "打算吃",
      "zh-CN": "打算吃",
      "ko": "[intend to eat]",
      "vi": "[intend to eat]",
      "id": "[intend to eat]",
      "es": "intend to eat",
      "pt": "intend to eat"
    }
  },
  {
    "id": "G0032",
    "p": "〜ほうがいい",
    "m": {
      "en": "should...",
      "zh-TW": "最好...",
      "zh-CN": "最好...",
      "ko": "[should...]",
      "vi": "[should...]",
      "id": "[should...]",
      "es": "should...",
      "pt": "should..."
    },
    "ex": "食べたほうがいい",
    "exm": {
      "en": "should eat",
      "zh-TW": "最好吃",
      "zh-CN": "最好吃",
      "ko": "[should eat]",
      "vi": "[should eat]",
      "id": "[should eat]",
      "es": "should eat",
      "pt": "should eat"
    }
  },
  {
    "id": "G0033",
    "p": "〜と思う",
    "m": {
      "en": "think that...",
      "zh-TW": "認為...",
      "zh-CN": "认为...",
      "ko": "[think that...]",
      "vi": "[think that...]",
      "id": "[think that...]",
      "es": "think that...",
      "pt": "think that..."
    },
    "ex": "美味しいと思う",
    "exm": {
      "en": "think delicious",
      "zh-TW": "覺得好吃",
      "zh-CN": "觉得好吃",
      "ko": "[think delicious]",
      "vi": "[think delicious]",
      "id": "[think delicious]",
      "es": "think delicious",
      "pt": "think delicious"
    }
  },
  {
    "id": "G0034",
    "p": "〜と言う",
    "m": {
      "en": "say that...",
      "zh-TW": "說...",
      "zh-CN": "说...",
      "ko": "[say that...]",
      "vi": "[say that...]",
      "id": "[say that...]",
      "es": "say that...",
      "pt": "say that..."
    },
    "ex": "美味しいと言う",
    "exm": {
      "en": "say delicious",
      "zh-TW": "說好吃",
      "zh-CN": "说好吃",
      "ko": "[say delicious]",
      "vi": "[say delicious]",
      "id": "[say delicious]",
      "es": "say delicious",
      "pt": "say delicious"
    }
  },
  {
    "id": "G0035",
    "p": "〜そうです",
    "m": {
      "en": "I heard...",
      "zh-TW": "聽說...",
      "zh-CN": "听说...",
      "ko": "[I heard...]",
      "vi": "[I heard...]",
      "id": "[I heard...]",
      "es": "I heard...",
      "pt": "I heard..."
    },
    "ex": "美味しいそうです",
    "exm": {
      "en": "I heard it's delicious",
      "zh-TW": "聽說好吃",
      "zh-CN": "听说好吃",
      "ko": "[I heard it's delicious]",
      "vi": "[I heard it's delicious]",
      "id": "[I heard it's delicious]",
      "es": "I heard it's delicious",
      "pt": "I heard it's delicious"
    }
  },
  {
    "id": "G0036",
    "p": "〜ようにする",
    "m": {
      "en": "try to...",
      "zh-TW": "盡量...",
      "zh-CN": "尽量...",
      "ko": "[try to...]",
      "vi": "[try to...]",
      "id": "[try to...]",
      "es": "try to...",
      "pt": "try to..."
    },
    "ex": "毎日食べるようにする",
    "exm": {
      "en": "try to eat daily",
      "zh-TW": "盡量每天吃",
      "zh-CN": "尽量每天吃",
      "ko": "[try to eat daily]",
      "vi": "[try to eat daily]",
      "id": "[try to eat daily]",
      "es": "try to eat daily",
      "pt": "try to eat daily"
    }
  },
  {
    "id": "G0037",
    "p": "〜になる",
    "m": {
      "en": "become...",
      "zh-TW": "變成...",
      "zh-CN": "变成...",
      "ko": "[become...]",
      "vi": "[become...]",
      "id": "[become...]",
      "es": "become...",
      "pt": "become..."
    },
    "ex": "医者になる",
    "exm": {
      "en": "become a doctor",
      "zh-TW": "成為醫生",
      "zh-CN": "成为医生",
      "ko": "[become a doctor]",
      "vi": "[become a doctor]",
      "id": "[become a doctor]",
      "es": "become a doctor",
      "pt": "become a doctor"
    }
  },
  {
    "id": "G0038",
    "p": "〜にする",
    "m": {
      "en": "decide on...",
      "zh-TW": "決定...",
      "zh-CN": "决定...",
      "ko": "[decide on...]",
      "vi": "[decide on...]",
      "id": "[decide on...]",
      "es": "decide on...",
      "pt": "decide on..."
    },
    "ex": "これにする",
    "exm": {
      "en": "decide on this",
      "zh-TW": "決定這個",
      "zh-CN": "决定这个",
      "ko": "[decide on this]",
      "vi": "[decide on this]",
      "id": "[decide on this]",
      "es": "decide on this",
      "pt": "decide on this"
    }
  },
  {
    "id": "G0039",
    "p": "〜くなる",
    "m": {
      "en": "become (adj)",
      "zh-TW": "變得...",
      "zh-CN": "变得...",
      "ko": "[become (adj)]",
      "vi": "[become (adj)]",
      "id": "[become (adj)]",
      "es": "become (adj)",
      "pt": "become (adj)"
    },
    "ex": "暖かくなる",
    "exm": {
      "en": "become warm",
      "zh-TW": "變暖",
      "zh-CN": "变暖",
      "ko": "[become warm]",
      "vi": "[become warm]",
      "id": "[become warm]",
      "es": "become warm",
      "pt": "become warm"
    }
  },
  {
    "id": "G0040",
    "p": "〜すぎる",
    "m": {
      "en": "too much...",
      "zh-TW": "太...",
      "zh-CN": "太...",
      "ko": "[too much...]",
      "vi": "[too much...]",
      "id": "[too much...]",
      "es": "too much...",
      "pt": "too much..."
    },
    "ex": "食べすぎる",
    "exm": {
      "en": "eat too much",
      "zh-TW": "吃太多",
      "zh-CN": "吃太多",
      "ko": "[eat too much]",
      "vi": "[eat too much]",
      "id": "[eat too much]",
      "es": "eat too much",
      "pt": "eat too much"
    }
  },
  {
    "id": "G0041",
    "p": "〜てから",
    "m": {
      "en": "after doing",
      "zh-TW": "做完...之後",
      "zh-CN": "做完...之后",
      "ko": "~하고 나서",
      "vi": "sau khi",
      "id": "setelah",
      "es": "after doing",
      "pt": "after doing"
    },
    "ex": "食べてから寝る",
    "exm": {
      "en": "sleep after eating",
      "zh-TW": "吃完後睡覺",
      "zh-CN": "吃完后睡觉",
      "ko": "먹고 나서 자다",
      "vi": "ngủ sau khi ăn",
      "id": "tidur setelah makan",
      "es": "sleep after eating",
      "pt": "sleep after eating"
    }
  },
  {
    "id": "G0042",
    "p": "〜前に",
    "m": {
      "en": "before",
      "zh-TW": "...之前",
      "zh-CN": "...之前",
      "ko": "~하기 전에",
      "vi": "trước khi",
      "id": "sebelum",
      "es": "before",
      "pt": "before"
    },
    "ex": "寝る前に歯を磨く",
    "exm": {
      "en": "brush teeth before bed",
      "zh-TW": "睡前刷牙",
      "zh-CN": "睡前刷牙",
      "ko": "자기 전에 이를 닦다",
      "vi": "đánh răng trước khi ngủ",
      "id": "sikat gigi sebelum tidur",
      "es": "brush teeth before bed",
      "pt": "brush teeth before bed"
    }
  },
  {
    "id": "G0043",
    "p": "〜後で",
    "m": {
      "en": "after",
      "zh-TW": "...之後",
      "zh-CN": "...之后",
      "ko": "~한 후에",
      "vi": "sau khi",
      "id": "setelah",
      "es": "after",
      "pt": "after"
    },
    "ex": "仕事の後で飲む",
    "exm": {
      "en": "drink after work",
      "zh-TW": "工作後喝酒",
      "zh-CN": "工作后喝酒",
      "ko": "일 후에 마시다",
      "vi": "uống sau giờ làm",
      "id": "minum setelah kerja",
      "es": "drink after work",
      "pt": "drink after work"
    }
  },
  {
    "id": "G0044",
    "p": "〜時",
    "m": {
      "en": "when",
      "zh-TW": "...的時候",
      "zh-CN": "...的时候",
      "ko": "~할 때",
      "vi": "khi",
      "id": "ketika",
      "es": "when",
      "pt": "when"
    },
    "ex": "暇な時本を読む",
    "exm": {
      "en": "read when free",
      "zh-TW": "有空時看書",
      "zh-CN": "有空时看书",
      "ko": "한가할 때 책을 읽다",
      "vi": "đọc sách khi rảnh",
      "id": "membaca saat senggang",
      "es": "read when free",
      "pt": "read when free"
    }
  },
  {
    "id": "G0045",
    "p": "〜ながら",
    "m": {
      "en": "while doing",
      "zh-TW": "一邊...一邊",
      "zh-CN": "一边...一边",
      "ko": "~하면서",
      "vi": "vừa...vừa",
      "id": "sambil",
      "es": "while doing",
      "pt": "while doing"
    },
    "ex": "歌いながら歩く",
    "exm": {
      "en": "walk while singing",
      "zh-TW": "一邊唱歌一邊走",
      "zh-CN": "一边唱歌一边走",
      "ko": "노래하면서 걷다",
      "vi": "vừa hát vừa đi",
      "id": "berjalan sambil bernyanyi",
      "es": "walk while singing",
      "pt": "walk while singing"
    }
  },
  {
    "id": "G0046",
    "p": "〜たり〜たり",
    "m": {
      "en": "doing things like",
      "zh-TW": "又...又...",
      "zh-CN": "又...又...",
      "ko": "~하거나 ~하거나",
      "vi": "khi thì...khi thì",
      "id": "kadang...kadang",
      "es": "doing things like",
      "pt": "doing things like"
    },
    "ex": "食べたり飲んだりする",
    "exm": {
      "en": "eat and drink etc",
      "zh-TW": "又吃又喝",
      "zh-CN": "又吃又喝",
      "ko": "먹거나 마시거나 하다",
      "vi": "ăn uống",
      "id": "makan minum dll",
      "es": "eat and drink etc",
      "pt": "eat and drink etc"
    }
  },
  {
    "id": "G0047",
    "p": "〜し〜し",
    "m": {
      "en": "and also",
      "zh-TW": "又...又...",
      "zh-CN": "又...又...",
      "ko": "~하고 ~하고",
      "vi": "vừa...vừa",
      "id": "dan juga",
      "es": "and also",
      "pt": "and also"
    },
    "ex": "安いし美味しい",
    "exm": {
      "en": "cheap and delicious",
      "zh-TW": "又便宜又好吃",
      "zh-CN": "又便宜又好吃",
      "ko": "싸고 맛있다",
      "vi": "vừa rẻ vừa ngon",
      "id": "murah dan enak",
      "es": "cheap and delicious",
      "pt": "cheap and delicious"
    }
  },
  {
    "id": "G0048",
    "p": "〜のに",
    "m": {
      "en": "although",
      "zh-TW": "雖然...但是",
      "zh-CN": "虽然...但是",
      "ko": "~하는데도",
      "vi": "mặc dù",
      "id": "meskipun",
      "es": "although",
      "pt": "although"
    },
    "ex": "高いのに買った",
    "exm": {
      "en": "bought although expensive",
      "zh-TW": "雖然貴但還是買了",
      "zh-CN": "虽然贵但还是买了",
      "ko": "비싼데도 샀다",
      "vi": "mặc dù đắt nhưng đã mua",
      "id": "meskipun mahal tetap beli",
      "es": "bought although expensive",
      "pt": "bought although expensive"
    }
  },
  {
    "id": "G0049",
    "p": "〜ても",
    "m": {
      "en": "even if",
      "zh-TW": "即使...也",
      "zh-CN": "即使...也",
      "ko": "~해도",
      "vi": "dù...cũng",
      "id": "walaupun",
      "es": "even if",
      "pt": "even if"
    },
    "ex": "雨が降っても行く",
    "exm": {
      "en": "go even if rains",
      "zh-TW": "即使下雨也去",
      "zh-CN": "即使下雨也去",
      "ko": "비가 와도 간다",
      "vi": "dù mưa cũng đi",
      "id": "pergi walaupun hujan",
      "es": "go even if rains",
      "pt": "go even if rains"
    }
  },
  {
    "id": "G0050",
    "p": "〜たら",
    "m": {
      "en": "if/when",
      "zh-TW": "如果...的話",
      "zh-CN": "如果...的话",
      "ko": "~하면",
      "vi": "nếu",
      "id": "kalau",
      "es": "if/when",
      "pt": "if/when"
    },
    "ex": "雨が降ったら中止",
    "exm": {
      "en": "cancel if rain",
      "zh-TW": "如果下雨就取消",
      "zh-CN": "如果下雨就取消",
      "ko": "비가 오면 중지",
      "vi": "nếu mưa thì hủy",
      "id": "kalau hujan dibatalkan",
      "es": "cancel if rain",
      "pt": "cancel if rain"
    }
  },
  {
    "id": "G0051",
    "p": "〜ば",
    "m": {
      "en": "if",
      "zh-TW": "如果",
      "zh-CN": "如果",
      "ko": "~하면",
      "vi": "nếu",
      "id": "jika",
      "es": "if",
      "pt": "if"
    },
    "ex": "行けば分かる",
    "exm": {
      "en": "will know if go",
      "zh-TW": "去了就知道",
      "zh-CN": "去了就知道",
      "ko": "가면 알 수 있다",
      "vi": "đi sẽ biết",
      "id": "pergi akan tahu",
      "es": "will know if go",
      "pt": "will know if go"
    }
  },
  {
    "id": "G0052",
    "p": "〜なら",
    "m": {
      "en": "if it's",
      "zh-TW": "如果是...的話",
      "zh-CN": "如果是...的话",
      "ko": "~라면",
      "vi": "nếu là",
      "id": "kalau",
      "es": "if it's",
      "pt": "if it's"
    },
    "ex": "あなたなら大丈夫",
    "exm": {
      "en": "you will be fine",
      "zh-TW": "如果是你就沒問題",
      "zh-CN": "如果是你就没问题",
      "ko": "너라면 괜찮아",
      "vi": "nếu là bạn thì ổn",
      "id": "kalau kamu pasti baik",
      "es": "you will be fine",
      "pt": "you will be fine"
    }
  },
  {
    "id": "G0053",
    "p": "〜そうだ(様態)",
    "m": {
      "en": "looks like",
      "zh-TW": "看起來",
      "zh-CN": "看起来",
      "ko": "~할 것 같다",
      "vi": "trông có vẻ",
      "id": "kelihatannya",
      "es": "looks like",
      "pt": "looks like"
    },
    "ex": "美味しそう",
    "exm": {
      "en": "looks delicious",
      "zh-TW": "看起來很好吃",
      "zh-CN": "看起来很好吃",
      "ko": "맛있어 보인다",
      "vi": "trông ngon",
      "id": "kelihatannya enak",
      "es": "looks delicious",
      "pt": "looks delicious"
    }
  },
  {
    "id": "G0054",
    "p": "〜そうだ(伝聞)",
    "m": {
      "en": "I heard that",
      "zh-TW": "聽說",
      "zh-CN": "听说",
      "ko": "~라고 한다",
      "vi": "nghe nói",
      "id": "katanya",
      "es": "I heard that",
      "pt": "I heard that"
    },
    "ex": "明日雨だそうだ",
    "exm": {
      "en": "I heard it will rain",
      "zh-TW": "聽說明天會下雨",
      "zh-CN": "听说明天会下雨",
      "ko": "내일 비가 온다고 한다",
      "vi": "nghe nói mai mưa",
      "id": "katanya besok hujan",
      "es": "I heard it will rain",
      "pt": "I heard it will rain"
    }
  },
  {
    "id": "G0055",
    "p": "〜ようだ",
    "m": {
      "en": "seems like",
      "zh-TW": "好像",
      "zh-CN": "好像",
      "ko": "~인 것 같다",
      "vi": "có vẻ như",
      "id": "sepertinya",
      "es": "seems like",
      "pt": "seems like"
    },
    "ex": "風邪のようだ",
    "exm": {
      "en": "seems like cold",
      "zh-TW": "好像感冒了",
      "zh-CN": "好像感冒了",
      "ko": "감기인 것 같다",
      "vi": "có vẻ bị cảm",
      "id": "sepertinya masuk angin",
      "es": "seems like cold",
      "pt": "seems like cold"
    }
  },
  {
    "id": "G0056",
    "p": "〜らしい",
    "m": {
      "en": "apparently",
      "zh-TW": "好像",
      "zh-CN": "好像",
      "ko": "~인 것 같다",
      "vi": "hình như",
      "id": "sepertinya",
      "es": "apparently",
      "pt": "apparently"
    },
    "ex": "彼は医者らしい",
    "exm": {
      "en": "he's apparently doctor",
      "zh-TW": "他好像是醫生",
      "zh-CN": "他好像是医生",
      "ko": "그는 의사인 것 같다",
      "vi": "hình như anh ấy là bác sĩ",
      "id": "sepertinya dia dokter",
      "es": "he's apparently doctor",
      "pt": "he's apparently doctor"
    }
  },
  {
    "id": "G0057",
    "p": "〜かもしれない",
    "m": {
      "en": "might",
      "zh-TW": "也許",
      "zh-CN": "也许",
      "ko": "~할지도 모른다",
      "vi": "có thể",
      "id": "mungkin",
      "es": "might",
      "pt": "might"
    },
    "ex": "雨かもしれない",
    "exm": {
      "en": "might rain",
      "zh-TW": "也許會下雨",
      "zh-CN": "也许会下雨",
      "ko": "비가 올지도 모른다",
      "vi": "có thể mưa",
      "id": "mungkin hujan",
      "es": "might rain",
      "pt": "might rain"
    }
  },
  {
    "id": "G0058",
    "p": "〜はずだ",
    "m": {
      "en": "should be",
      "zh-TW": "應該",
      "zh-CN": "应该",
      "ko": "~할 것이다",
      "vi": "chắc hẳn",
      "id": "seharusnya",
      "es": "should be",
      "pt": "should be"
    },
    "ex": "届くはずだ",
    "exm": {
      "en": "should arrive",
      "zh-TW": "應該會到",
      "zh-CN": "应该会到",
      "ko": "도착할 것이다",
      "vi": "chắc sẽ đến",
      "id": "seharusnya sampai",
      "es": "should arrive",
      "pt": "should arrive"
    }
  },
  {
    "id": "G0059",
    "p": "〜つもりだ",
    "m": {
      "en": "intend to",
      "zh-TW": "打算",
      "zh-CN": "打算",
      "ko": "~할 생각이다",
      "vi": "định",
      "id": "berniat",
      "es": "intend to",
      "pt": "intend to"
    },
    "ex": "行くつもりだ",
    "exm": {
      "en": "intend to go",
      "zh-TW": "打算去",
      "zh-CN": "打算去",
      "ko": "갈 생각이다",
      "vi": "định đi",
      "id": "berniat pergi",
      "es": "intend to go",
      "pt": "intend to go"
    }
  },
  {
    "id": "G0060",
    "p": "〜ことにする",
    "m": {
      "en": "decide to",
      "zh-TW": "決定",
      "zh-CN": "决定",
      "ko": "~하기로 하다",
      "vi": "quyết định",
      "id": "memutuskan",
      "es": "decide to",
      "pt": "decide to"
    },
    "ex": "行くことにした",
    "exm": {
      "en": "decided to go",
      "zh-TW": "決定去了",
      "zh-CN": "决定去了",
      "ko": "가기로 했다",
      "vi": "đã quyết định đi",
      "id": "memutuskan pergi",
      "es": "decided to go",
      "pt": "decided to go"
    }
  },
  {
    "id": "G0061",
    "p": "〜ことになる",
    "m": {
      "en": "it's been decided",
      "zh-TW": "變成",
      "zh-CN": "变成",
      "ko": "~하게 되다",
      "vi": "trở nên",
      "id": "menjadi",
      "es": "it's been decided",
      "pt": "it's been decided"
    },
    "ex": "行くことになった",
    "exm": {
      "en": "it was decided to go",
      "zh-TW": "變成要去了",
      "zh-CN": "变成要去了",
      "ko": "가게 되었다",
      "vi": "đã được quyết định đi",
      "id": "jadi pergi",
      "es": "it was decided to go",
      "pt": "it was decided to go"
    }
  },
  {
    "id": "G0062",
    "p": "〜ようにする",
    "m": {
      "en": "try to",
      "zh-TW": "盡量",
      "zh-CN": "尽量",
      "ko": "~하도록 하다",
      "vi": "cố gắng",
      "id": "berusaha",
      "es": "try to",
      "pt": "try to"
    },
    "ex": "早く寝るようにする",
    "exm": {
      "en": "try to sleep early",
      "zh-TW": "盡量早睡",
      "zh-CN": "尽量早睡",
      "ko": "일찍 자도록 하다",
      "vi": "cố gắng ngủ sớm",
      "id": "berusaha tidur awal",
      "es": "try to sleep early",
      "pt": "try to sleep early"
    }
  },
  {
    "id": "G0063",
    "p": "〜ようになる",
    "m": {
      "en": "come to be able",
      "zh-TW": "變得能",
      "zh-CN": "变得能",
      "ko": "~하게 되다",
      "vi": "trở nên có thể",
      "id": "menjadi bisa",
      "es": "come to be able",
      "pt": "come to be able"
    },
    "ex": "話せるようになった",
    "exm": {
      "en": "came to be able to speak",
      "zh-TW": "變得會說了",
      "zh-CN": "变得会说了",
      "ko": "말할 수 있게 되었다",
      "vi": "đã có thể nói được",
      "id": "menjadi bisa berbicara",
      "es": "came to be able to speak",
      "pt": "came to be able to speak"
    }
  },
  {
    "id": "G0064",
    "p": "〜てしまう",
    "m": {
      "en": "end up doing",
      "zh-TW": "不小心",
      "zh-CN": "不小心",
      "ko": "~해 버리다",
      "vi": "lỡ",
      "id": "terlanjur",
      "es": "end up doing",
      "pt": "end up doing"
    },
    "ex": "食べてしまった",
    "exm": {
      "en": "ended up eating",
      "zh-TW": "不小心吃掉了",
      "zh-CN": "不小心吃掉了",
      "ko": "먹어 버렸다",
      "vi": "đã lỡ ăn",
      "id": "terlanjur makan",
      "es": "ended up eating",
      "pt": "ended up eating"
    }
  },
  {
    "id": "G0065",
    "p": "〜ておく",
    "m": {
      "en": "do in advance",
      "zh-TW": "事先",
      "zh-CN": "事先",
      "ko": "~해 두다",
      "vi": "làm trước",
      "id": "siap-siap",
      "es": "do in advance",
      "pt": "do in advance"
    },
    "ex": "買っておく",
    "exm": {
      "en": "buy in advance",
      "zh-TW": "事先買好",
      "zh-CN": "事先买好",
      "ko": "사 두다",
      "vi": "mua trước",
      "id": "beli dulu",
      "es": "buy in advance",
      "pt": "buy in advance"
    }
  },
  {
    "id": "G0066",
    "p": "〜てある",
    "m": {
      "en": "has been done",
      "zh-TW": "已經...了",
      "zh-CN": "已经...了",
      "ko": "~해 있다",
      "vi": "đã được",
      "id": "sudah",
      "es": "has been done",
      "pt": "has been done"
    },
    "ex": "窓が開けてある",
    "exm": {
      "en": "window has been opened",
      "zh-TW": "窗戶開著",
      "zh-CN": "窗户开着",
      "ko": "창문이 열려 있다",
      "vi": "cửa sổ đã được mở",
      "id": "jendela sudah dibuka",
      "es": "window has been opened",
      "pt": "window has been opened"
    }
  },
  {
    "id": "G0067",
    "p": "〜ている(状態)",
    "m": {
      "en": "is in state",
      "zh-TW": "正在...狀態",
      "zh-CN": "正在...状态",
      "ko": "~하고 있다",
      "vi": "đang ở trạng thái",
      "id": "sedang",
      "es": "is in state",
      "pt": "is in state"
    },
    "ex": "結婚している",
    "exm": {
      "en": "is married",
      "zh-TW": "已婚",
      "zh-CN": "已婚",
      "ko": "결혼하고 있다",
      "vi": "đã kết hôn",
      "id": "sudah menikah",
      "es": "is married",
      "pt": "is married"
    }
  },
  {
    "id": "G0068",
    "p": "〜てくる",
    "m": {
      "en": "come to do",
      "zh-TW": "...過來",
      "zh-CN": "...过来",
      "ko": "~해 오다",
      "vi": "đến",
      "id": "datang",
      "es": "come to do",
      "pt": "come to do"
    },
    "ex": "持ってくる",
    "exm": {
      "en": "bring",
      "zh-TW": "帶過來",
      "zh-CN": "带过来",
      "ko": "가져오다",
      "vi": "mang đến",
      "id": "membawa",
      "es": "bring",
      "pt": "bring"
    }
  },
  {
    "id": "G0069",
    "p": "〜ていく",
    "m": {
      "en": "go on doing",
      "zh-TW": "...下去",
      "zh-CN": "...下去",
      "ko": "~해 가다",
      "vi": "tiếp tục",
      "id": "terus",
      "es": "go on doing",
      "pt": "go on doing"
    },
    "ex": "続けていく",
    "exm": {
      "en": "keep continuing",
      "zh-TW": "繼續下去",
      "zh-CN": "继续下去",
      "ko": "계속해 가다",
      "vi": "tiếp tục",
      "id": "terus berlanjut",
      "es": "keep continuing",
      "pt": "keep continuing"
    }
  },
  {
    "id": "G0070",
    "p": "〜てみる",
    "m": {
      "en": "try doing",
      "zh-TW": "試著",
      "zh-CN": "试着",
      "ko": "~해 보다",
      "vi": "thử",
      "id": "coba",
      "es": "try doing",
      "pt": "try doing"
    },
    "ex": "食べてみる",
    "exm": {
      "en": "try eating",
      "zh-TW": "試著吃",
      "zh-CN": "试着吃",
      "ko": "먹어 보다",
      "vi": "thử ăn",
      "id": "coba makan",
      "es": "try eating",
      "pt": "try eating"
    }
  },
  {
    "id": "G0071",
    "p": "〜てほしい",
    "m": {
      "en": "want someone to",
      "zh-TW": "希望...",
      "zh-CN": "希望...",
      "ko": "~해 주길 바라다",
      "vi": "muốn ai đó",
      "id": "ingin seseorang",
      "es": "want someone to",
      "pt": "want someone to"
    },
    "ex": "来てほしい",
    "exm": {
      "en": "want you to come",
      "zh-TW": "希望你來",
      "zh-CN": "希望你来",
      "ko": "와 주길 바란다",
      "vi": "muốn bạn đến",
      "id": "ingin kamu datang",
      "es": "want you to come",
      "pt": "want you to come"
    }
  },
  {
    "id": "G0072",
    "p": "〜てあげる",
    "m": {
      "en": "do for someone",
      "zh-TW": "為...做",
      "zh-CN": "为...做",
      "ko": "~해 주다",
      "vi": "làm cho",
      "id": "melakukan untuk",
      "es": "do for someone",
      "pt": "do for someone"
    },
    "ex": "教えてあげる",
    "exm": {
      "en": "teach for you",
      "zh-TW": "教你",
      "zh-CN": "教你",
      "ko": "가르쳐 주다",
      "vi": "dạy cho bạn",
      "id": "mengajarkan untukmu",
      "es": "teach for you",
      "pt": "teach for you"
    }
  },
  {
    "id": "G0073",
    "p": "〜てもらう",
    "m": {
      "en": "have someone do",
      "zh-TW": "請...做",
      "zh-CN": "请...做",
      "ko": "~해 받다",
      "vi": "được ai đó",
      "id": "minta tolong",
      "es": "have someone do",
      "pt": "have someone do"
    },
    "ex": "手伝ってもらう",
    "exm": {
      "en": "have someone help",
      "zh-TW": "請人幫忙",
      "zh-CN": "请人帮忙",
      "ko": "도와 받다",
      "vi": "được giúp đỡ",
      "id": "minta bantuan",
      "es": "have someone help",
      "pt": "have someone help"
    }
  },
  {
    "id": "G0074",
    "p": "〜てくれる",
    "m": {
      "en": "someone does for me",
      "zh-TW": "為我...",
      "zh-CN": "为我...",
      "ko": "~해 주다",
      "vi": "ai đó làm cho tôi",
      "id": "seseorang melakukan untukku",
      "es": "someone does for me",
      "pt": "someone does for me"
    },
    "ex": "友達が助けてくれた",
    "exm": {
      "en": "friend helped me",
      "zh-TW": "朋友幫了我",
      "zh-CN": "朋友帮了我",
      "ko": "친구가 도와주었다",
      "vi": "bạn đã giúp tôi",
      "id": "teman membantu saya",
      "es": "friend helped me",
      "pt": "friend helped me"
    }
  },
  {
    "id": "G0075",
    "p": "〜させる",
    "m": {
      "en": "make/let do",
      "zh-TW": "讓...做",
      "zh-CN": "让...做",
      "ko": "~시키다",
      "vi": "bắt/cho",
      "id": "menyuruh",
      "es": "make/let do",
      "pt": "make/let do"
    },
    "ex": "子供に手伝わせる",
    "exm": {
      "en": "make child help",
      "zh-TW": "讓孩子幫忙",
      "zh-CN": "让孩子帮忙",
      "ko": "아이에게 돕게 하다",
      "vi": "bắt con giúp",
      "id": "menyuruh anak membantu",
      "es": "make child help",
      "pt": "make child help"
    }
  },
  {
    "id": "G0076",
    "p": "〜れる/られる(受身)",
    "m": {
      "en": "passive",
      "zh-TW": "被",
      "zh-CN": "被",
      "ko": "~당하다",
      "vi": "bị",
      "id": "di-",
      "es": "passive",
      "pt": "passive"
    },
    "ex": "母に叱られた",
    "exm": {
      "en": "was scolded by mother",
      "zh-TW": "被媽媽罵",
      "zh-CN": "被妈妈骂",
      "ko": "엄마에게 혼났다",
      "vi": "bị mẹ mắng",
      "id": "dimarahi ibu",
      "es": "was scolded by mother",
      "pt": "was scolded by mother"
    }
  },
  {
    "id": "G0077",
    "p": "〜れる/られる(可能)",
    "m": {
      "en": "can do",
      "zh-TW": "能",
      "zh-CN": "能",
      "ko": "~할 수 있다",
      "vi": "có thể",
      "id": "bisa",
      "es": "can do",
      "pt": "can do"
    },
    "ex": "食べられる",
    "exm": {
      "en": "can eat",
      "zh-TW": "能吃",
      "zh-CN": "能吃",
      "ko": "먹을 수 있다",
      "vi": "có thể ăn",
      "id": "bisa makan",
      "es": "can eat",
      "pt": "can eat"
    }
  },
  {
    "id": "G0078",
    "p": "〜れる/られる(尊敬)",
    "m": {
      "en": "honorific",
      "zh-TW": "(敬語)",
      "zh-CN": "(敬语)",
      "ko": "(존경)",
      "vi": "(kính ngữ)",
      "id": "(hormat)",
      "es": "honorific",
      "pt": "honorific"
    },
    "ex": "先生が来られる",
    "exm": {
      "en": "teacher comes",
      "zh-TW": "老師來(敬語)",
      "zh-CN": "老师来(敬语)",
      "ko": "선생님이 오시다",
      "vi": "thầy đến",
      "id": "guru datang",
      "es": "teacher comes",
      "pt": "teacher comes"
    }
  },
  {
    "id": "G0079",
    "p": "〜ないでください",
    "m": {
      "en": "please don't",
      "zh-TW": "請不要",
      "zh-CN": "请不要",
      "ko": "~하지 마세요",
      "vi": "xin đừng",
      "id": "tolong jangan",
      "es": "please don't",
      "pt": "please don't"
    },
    "ex": "触らないでください",
    "exm": {
      "en": "please don't touch",
      "zh-TW": "請不要摸",
      "zh-CN": "请不要摸",
      "ko": "만지지 마세요",
      "vi": "xin đừng chạm",
      "id": "tolong jangan sentuh",
      "es": "please don't touch",
      "pt": "please don't touch"
    }
  },
  {
    "id": "G0080",
    "p": "〜なければならない",
    "m": {
      "en": "must do",
      "zh-TW": "必須",
      "zh-CN": "必须",
      "ko": "~해야 한다",
      "vi": "phải",
      "id": "harus",
      "es": "must do",
      "pt": "must do"
    },
    "ex": "行かなければならない",
    "exm": {
      "en": "must go",
      "zh-TW": "必須去",
      "zh-CN": "必须去",
      "ko": "가야 한다",
      "vi": "phải đi",
      "id": "harus pergi",
      "es": "must go",
      "pt": "must go"
    }
  }
];