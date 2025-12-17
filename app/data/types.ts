export type CelebrityQuestion = {
  id: number;
  nameKanji: string;   // 名人姓名（漢字）
  choices: string[];   // 讀音選項（平假名）
  answerIndex: number; // 正確選項 index
  description: string; // 簡短介紹
  category: string;    // 類別（作家、監督、歴史人物等）
};
