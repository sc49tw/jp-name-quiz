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
  }
];
