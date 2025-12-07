export type CelebrityQuestion = {
  id: number;
  nameKanji: string;   // 名人姓名（漢字）
  choices: string[];   // 讀音選項（平假名）
  answerIndex: number; // 正確選項 index
  description: string; // 簡短介紹
  category: string;    // 類別（作家、監督、歴史人物等）
};

export const QUESTIONS: CelebrityQuestion[] = [
  {
    id: 1,
    nameKanji: "江戸川乱歩",
    choices: [
      "えどがわらんぽ",
      "えどがわらんすけ",
      "えどがわらんぼ",
      "えどがわらんぷ"
    ],
    answerIndex: 0,
    description:
      "日本の推理作家であり、探偵小説の草分け的な存在。「怪人二十面相」や「少年探偵団」シリーズで知られる。",
    category: "作家"
  },
  {
    id: 2,
    nameKanji: "宮崎駿",
    choices: [
      "みやざきはやお",
      "みやさきしゅん",
      "みやざきしゅん",
      "みやさきはやお"
    ],
    answerIndex: 0,
    description:
      "スタジオジブリの共同創設者で、『となりのトトロ』『千と千尋の神隠し』など多くの長編アニメ映画を監督した。",
    category: "監督"
  },
  {
    id: 3,
    nameKanji: "野口英世",
    choices: [
      "のぐちひでよ",
      "のぐちえいせい",
      "のぐちひでお",
      "のくちひでよ"
    ],
    answerIndex: 2,
    description:
      "日本の細菌学者。黄熱病などの研究で知られ、日本の千円札の肖像としても有名。",
    category: "科学者"
  },
  {
    id: 4,
    nameKanji: "水樹奈々",
    choices: [
      "みずきなな",
      "みずきななえ",
      "みずきななこ",
      "みずななき"
    ],
    answerIndex: 0,
    description:
      "声優・歌手として活躍し、多くのアニメ作品で主役級のキャラクターを演じている。",
    category: "声優"
  },
  {
    id: 5,
    nameKanji: "木村拓哉",
    choices: [
      "きむらたくや",
      "きむらひろや",
      "きむらたつや",
      "きむらたかや"
    ],
    answerIndex: 0,
    description:
      "日本を代表する俳優・タレント。ドラマや映画で幅広く活躍し、高い知名度を持つ。",
    category: "俳優"
  },
  {
    id: 6,
    nameKanji: "綾瀬はるか",
    choices: [
      "あやせはるか",
      "あやせはるこ",
      "あやせはるな",
      "あやせはるえ"
    ],
    answerIndex: 0,
    description:
      "ドラマや映画で活躍する人気女優。親しみやすいキャラクターと演技力で支持される。",
    category: "女優"
  },
  {
    id: 7,
    nameKanji: "福山雅治",
    choices: [
      "ふくやままさはる",
      "ふくやままさじ",
      "ふくやままさひろ",
      "ふくやままさる"
    ],
    answerIndex: 0,
    description:
      "シンガーソングライター兼俳優。歌手活動と俳優活動の両方で高い人気を誇る。",
    category: "歌手"
  },
  {
    id: 8,
    nameKanji: "新垣結衣",
    choices: [
      "あらがきゆい",
      "しんがきゆい",
      "あらかきゆい",
      "にいがきゆい"
    ],
    answerIndex: 0,
    description:
      "ドラマや映画、CMで活躍する女優。自然体の演技と笑顔で幅広い世代に愛されている。",
    category: "女優"
  },
  {
    id: 9,
    nameKanji: "星野源",
    choices: [
      "ほしのげん",
      "ほしのみなもと",
      "ほしげん",
      "ほしのはじめ"
    ],
    answerIndex: 0,
    description:
      "シンガーソングライター・俳優として活躍。音楽と演技の両面で高い評価を受けている。",
    category: "歌手"
  },
  {
    id: 10,
    nameKanji: "北川景子",
    choices: [
      "きたがわけいこ",
      "きたかわけいこ",
      "きたがわけいこー",
      "きたがわけいこく"
    ],
    answerIndex: 0,
    description:
      "クールなイメージと確かな演技力で知られる女優。多くのドラマや映画に出演している。",
    category: "女優"
  },
  {
    id: 11,
    nameKanji: "佐藤健",
    choices: [
      "さとうたける",
      "さとうけん",
      "さどうたける",
      "さとうたけし"
    ],
    answerIndex: 0,
    description:
      "アクションから恋愛作品まで幅広くこなす俳優。『るろうに剣心』シリーズなどで知られる。",
    category: "俳優"
  },
  {
    id: 12,
    nameKanji: "橋本環奈",
    choices: [
      "はしもとかんな",
      "はしもとかんあ",
      "はしもとたまな",
      "はしもとかんなこ"
    ],
    answerIndex: 0,
    description:
      "アイドル出身の女優。バラエティ番組でも活躍し、明るいキャラクターで人気。",
    category: "女優"
  },
  {
    id: 13,
    nameKanji: "菅田将暉",
    choices: [
      "すだまさき",
      "すがたまさき",
      "すだしょうき",
      "すがだまさき"
    ],
    answerIndex: 0,
    description:
      "個性派俳優・歌手として知られ、幅広いジャンルの作品に出演している。",
    category: "俳優"
  },
  {
    id: 14,
    nameKanji: "石原さとみ",
    choices: [
      "いしはらさとみ",
      "いしばらさとみ",
      "いしはらさとめ",
      "いしはらさとみん"
    ],
    answerIndex: 0,
    description:
      "華やかな存在感を持つ女優。多くの恋愛ドラマでヒロインを務めている。",
    category: "女優"
  },
  {
    id: 15,
    nameKanji: "有吉弘行",
    choices: [
      "ありよしひろいき",
      "ありよしひろゆき",
      "ありよしひろゆき",
      "ありきちひろいき"
    ],
    answerIndex: 0,
    description:
      "毒舌とユーモアで人気のお笑いタレント。多くのバラエティ番組で司会を務める。",
    category: "お笑い芸人"
  },
  {
    id: 16,
    nameKanji: "明石家さんま",
    choices: [
      "あかしやさんま",
      "あかしけさんま",
      "あかしやさんまる",
      "あかしやさまん"
    ],
    answerIndex: 0,
    description:
      "長年第一線で活躍するお笑いタレント。トーク力の高さで知られている。",
    category: "お笑い芸人"
  },
  {
    id: 17,
    nameKanji: "ビートたけし",
    choices: [
      "びーとたけし",
      "びいとたけし",
      "びーどたけし",
      "びーとたけじ"
    ],
    answerIndex: 0,
    description:
      "お笑いタレント、映画監督、小説家として多才な活動を行う国民的芸能人。",
    category: "お笑い芸人"
  },
  {
    id: 18,
    nameKanji: "松本人志",
    choices: [
      "まつもとひとし",
      "まつもとじんし",
      "まつもとひとじ",
      "まつもととうし"
    ],
    answerIndex: 0,
    description:
      "お笑いコンビ「ダウンタウン」のボケ担当。独特な世界観のコントやトークで知られる。",
    category: "お笑い芸人"
  },
  {
    id: 19,
    nameKanji: "浜田雅功",
    choices: [
      "はまだまさとし",
      "はまだまさのり",
      "はまたまさとし",
      "はまだまさこう"
    ],
    answerIndex: 0,
    description:
      "「ダウンタウン」のツッコミ担当。鋭いツッコミとバラエティ番組での存在感が特徴。",
    category: "お笑い芸人"
  },
  {
    id: 20,
    nameKanji: "大谷翔平",
    choices: [
      "おおたにしょうへい",
      "おおやしょうへい",
      "おおたにしょうへ",
      "おおたにしょうひら"
    ],
    answerIndex: 0,
    description:
      "投手と打者の二刀流で世界的に注目されるプロ野球選手。MLBで活躍している。",
    category: "スポーツ選手"
  },
  {
    id: 21,
    nameKanji: "羽生結弦",
    choices: [
      "はにゅうゆづる",
      "はにゅうけつづる",
      "はぶゆづる",
      "はにゅうゆずる"
    ],
    answerIndex: 0,
    description:
      "フィギュアスケート男子シングルのオリンピック金メダリスト。高い表現力と技術で知られる。",
    category: "スポーツ選手"
  },
  {
    id: 22,
    nameKanji: "本田圭佑",
    choices: [
      "ほんだけいすけ",
      "ほんだけいゆう",
      "ほんだけいすけい",
      "ほんだけいすき"
    ],
    answerIndex: 0,
    description:
      "日本代表として活躍したサッカー選手。強気な発言とリーダーシップでも注目された。",
    category: "スポーツ選手"
  },
  {
    id: 23,
    nameKanji: "坂本龍馬",
    choices: [
      "さかもとりょうま",
      "さかもとたつま",
      "さかもとりゅうま",
      "さかもとりょうば"
    ],
    answerIndex: 0,
    description:
      "幕末期の志士。日本の近代化に影響を与えた歴史上の人物として広く知られる。",
    category: "歴史人物"
  },
  {
    id: 24,
    nameKanji: "徳川家康",
    choices: [
      "とくがわいえやす",
      "とくがわいえやすけ",
      "とくがわけいあん",
      "とくがわいえす"
    ],
    answerIndex: 0,
    description:
      "江戸幕府の初代将軍。長期政権の基礎を築き、日本史上重要な人物とされる。",
    category: "歴史人物"
  },
  {
    id: 25,
    nameKanji: "紫式部",
    choices: [
      "むらさきしきぶ",
      "むらさきしきへ",
      "むらさきしきぼ",
      "むらさきしきべ"
    ],
    answerIndex: 0,
    description:
      "平安時代の女流作家。『源氏物語』の作者として世界的に知られる。",
    category: "作家"
  },
  {
    id: 26,
    nameKanji: "夏目漱石",
    choices: [
      "なつめそうせき",
      "なつめそうせつ",
      "なつめそうしき",
      "なつめそうせっき"
    ],
    answerIndex: 0,
    description:
      "明治時代の代表的な文学者。『吾輩は猫である』『こころ』などの作品で名高い。",
    category: "作家"
  },
  {
    id: 27,
    nameKanji: "村上春樹",
    choices: [
      "むらかみはるき",
      "むらかみはるきよ",
      "むらかみしゅんじ",
      "むらがみはるき"
    ],
    answerIndex: 0,
    description:
      "現代日本を代表する作家。独特の文体と幻想的な世界観で世界中に読者を持つ。",
    category: "作家"
  },
  {
    id: 28,
    nameKanji: "黒澤明",
    choices: [
      "くろさわあきら",
      "くろざわあきら",
      "くろさわめい",
      "くろさわあきらん"
    ],
    answerIndex: 0,
    description:
      "世界的に評価される映画監督。『七人の侍』『羅生門』など多くの名作を生み出した。",
    category: "監督"
  },
  {
    id: 29,
    nameKanji: "庵野秀明",
    choices: [
      "あんのひであき",
      "あんのしゅうめい",
      "あんのひであきら",
      "あんのひでみょう"
    ],
    answerIndex: 0,
    description:
      "アニメ『新世紀エヴァンゲリオン』などで知られる監督。実写作品でも活躍している。",
    category: "監督"
  },
  {
    id: 30,
    nameKanji: "所ジョージ",
    choices: [
      "ところじょーじ",
      "ところじょうじ",
      "ところじょじ",
      "ところじょーじい"
    ],
    answerIndex: 0,
    description:
      "タレント・歌手・MCとしてマルチに活躍。趣味の多さでも知られる。",
    category: "タレント"
  },
  {
    id: 31,
    nameKanji: "ローラ",
    choices: [
      "ろーら",
      "ろうら",
      "らーら",
      "ろらー"
    ],
    answerIndex: 0,
    description:
      "モデル・タレントとして活躍。独特のキャラクターと発言で人気を集める。",
    category: "タレント"
  },
  {
    id: 32,
    nameKanji: "指原莉乃",
    choices: [
      "さしはらりの",
      "さしはらりな",
      "さしはらりのん",
      "さしばらりの"
    ],
    answerIndex: 0,
    description:
      "元アイドルグループメンバーで、現在はタレント・プロデューサーとして活動している。",
    category: "タレント"
  },
  {
    id: 33,
    nameKanji: "長澤まさみ",
    choices: [
      "ながさわまさみ",
      "ながざわまさみ",
      "ながさわまさみん",
      "ながさわまさみえ"
    ],
    answerIndex: 0,
    description:
      "幅広いジャンルの作品に出演する女優。自然な演技と存在感で高く評価されている。",
    category: "女優"
  },
  {
    id: 34,
    nameKanji: "小栗旬",
    choices: [
      "おぐりしゅん",
      "こぐりしゅん",
      "おぐりじゅん",
      "おくりしゅん"
    ],
    answerIndex: 0,
    description:
      "ドラマ・映画・舞台で活躍する俳優。シリアスからコメディまで幅広い役柄をこなす。",
    category: "俳優"
  },
  {
    id: 35,
    nameKanji: "山崎賢人",
    choices: [
      "やまざきけんと",
      "やまさきけんと",
      "やまざきけんじ",
      "やまざきけんとお"
    ],
    answerIndex: 0,
    description:
      "若手人気俳優として多くの恋愛ドラマや漫画原作作品に出演している。",
    category: "俳優"
  },
  {
    id: 36,
    nameKanji: "広瀬すず",
    choices: [
      "ひろせすず",
      "ひろせすづ",
      "ひろせすずう",
      "ひろせしず"
    ],
    answerIndex: 0,
    description:
      "映画やドラマで活躍する女優。フレッシュな印象と高い演技力で注目される。",
    category: "女優"
  },
  {
    id: 37,
    nameKanji: "中居正広",
    choices: [
      "なかいまさひろ",
      "なかえまさひろ",
      "なかいまさひろう",
      "なかいせいひろ"
    ],
    answerIndex: 0,
    description:
      "元アイドルグループメンバーで、現在は司会者・タレントとして多くの番組に出演。",
    category: "タレント"
  },
  {
    id: 38,
    nameKanji: "香取慎吾",
    choices: [
      "かとりしんご",
      "かとりしんごう",
      "かどりしんご",
      "かとりしのぶ"
    ],
    answerIndex: 0,
    description:
      "俳優・歌手・タレントとして幅広く活動。アート作品の制作でも知られる。",
    category: "タレント"
  },
  {
    id: 39,
    nameKanji: "井上陽水",
    choices: [
      "いのうえようすい",
      "いのえようすい",
      "いのうえひようすい",
      "いのうえようみず"
    ],
    answerIndex: 0,
    description:
      "独特の歌声と世界観を持つシンガーソングライター。多くの名曲を世に送り出した。",
    category: "歌手"
  },
  {
    id: 40,
    nameKanji: "宇多田ヒカル",
    choices: [
      "うただひかる",
      "うだたひかる",
      "うただひかり",
      "うただひかるう"
    ],
    answerIndex: 0,
    description:
      "デビュー当時から音楽シーンに大きな影響を与えてきたシンガーソングライター。",
    category: "歌手"
  }
];

