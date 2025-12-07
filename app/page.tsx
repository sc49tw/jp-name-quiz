"use client";

import { useEffect, useMemo, useState } from "react";
import { QUESTIONS } from "./data/questions";

export default function HomePage() {
  const [category, setCategory] = useState<string>("all");
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const [score, setScore] = useState(0);

  const categories = useMemo(
    () => Array.from(new Set(QUESTIONS.map((q) => q.category))),
    []
  );

  const filteredQuestions = useMemo(
    () =>
      category === "all"
        ? QUESTIONS
        : QUESTIONS.filter((q) => q.category === category),
    [category]
  );

  // 類別切換時重置狀態
  useEffect(() => {
    setIndex(0);
    setSelected(null);
    setShowAnswer(false);
  }, [category]);

  const hasQuestion = filteredQuestions.length > 0;
  const q = hasQuestion ? filteredQuestions[index] : null;

  const handleChoice = (i: number) => {
    if (!q || showAnswer) return;
    setSelected(i);
  };

  const handleSubmit = () => {
    if (!q || selected === null) return;
    const isCorrect = selected === q.answerIndex;
    if (isCorrect) setScore((s) => s + 1);
    setShowAnswer(true);
  };

  const handleNext = () => {
    if (!hasQuestion) return;
    setSelected(null);
    setShowAnswer(false);
    setIndex((prev) => (prev + 1) % filteredQuestions.length);
  };

  // Initialize AdSense after component mounts and ensure container is visible
  useEffect(() => {
    const initAd = () => {
      try {
        // @ts-ignore
        if (window.adsbygoogle && !window.adsbygoogle.loaded) {
          // @ts-ignore
          (window.adsbygoogle = window.adsbygoogle || []).push({});
        }
      } catch (err) {
        console.error('AdSense error:', err);
      }
    };

    // Initialize ad after a short delay to ensure container is rendered
    const timer = setTimeout(initAd, 100);
    
    // Also try to initialize when window loads if not already done
    window.addEventListener('load', initAd);
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener('load', initAd);
    };
  }, []);

  return (
    <main className="min-h-screen bg-slate-50 p-4 md:p-6">
      <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-sm p-6 md:p-8 my-8">
        {/* 標題列 */}
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-xl font-bold text-slate-900">読み方クイズ</h1>
            <p className="text-xs text-slate-500">
              日本の有名人の名前の読み方を当ててみよう
            </p>
          </div>
          <div className="text-right text-xs text-slate-500">
            <div>スコア：{score}</div>
            {hasQuestion && (
              <div>
                問題 {index + 1} / {filteredQuestions.length}
              </div>
            )}
          </div>
        </div>

        {/* 類別選擇 */}
        <div className="flex flex-wrap gap-2 mb-6 text-sm">
          <button
            onClick={() => setCategory("all")}
            className={`px-4 py-1.5 rounded-full transition-colors ${
              category === "all"
                ? "bg-blue-600 text-white hover:bg-blue-700"
                : "bg-white text-slate-700 border border-slate-200 hover:bg-slate-50"
            }`}
          >
            すべて
          </button>
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setCategory(c)}
              className={`px-4 py-1.5 rounded-full transition-colors ${
                category === c
                  ? "bg-blue-600 text-white hover:bg-blue-700"
                  : "bg-white text-slate-700 border border-slate-200 hover:bg-slate-50"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        {!hasQuestion && (
          <div className="text-center text-sm text-slate-500">
            このカテゴリーにはまだ問題がありません。
          </div>
        )}

        {q && (
          <>
            {/* 小標題：この人は誰？ */}
            <div className="inline-flex items-center px-3 py-1 rounded-md bg-blue-50 text-blue-700 text-xs font-medium mb-4">
              この人は誰？
            </div>

            {/* 名人姓名 */}
            <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-3 leading-tight">
              {q.nameKanji}
            </h2>

            {/* 簡短介紹 */}
            <p className="text-sm text-slate-600 mb-6 leading-relaxed">
              {q.description}
            </p>

            {/* 選項 */}
            <div className="grid grid-cols-1 gap-3 mb-6">
              {q.choices.map((c, i) => {
                const isCorrect = showAnswer && i === q.answerIndex;
                const isWrong = showAnswer && selected === i && i !== q.answerIndex;
                const isSelected = selected === i;

                return (
                  <button
                    key={i}
                    onClick={() => handleChoice(i)}
                    disabled={showAnswer}
                    className={`
                      w-full rounded-xl px-5 py-4 text-left transition-all duration-200
                      border bg-white shadow-sm
                      ${isSelected ? 'border-blue-500 ring-2 ring-blue-100' : 'border-slate-200'}
                      ${isCorrect ? '!border-green-500 !ring-2 !ring-green-100 bg-green-50' : ''}
                      ${isWrong ? '!border-red-400 !ring-2 !ring-red-100 bg-red-50' : ''}
                      ${!showAnswer ? 'hover:shadow-md hover:border-blue-300' : ''}
                      ${showAnswer && i === q.answerIndex ? 'text-green-700' : 'text-slate-800'}
                      disabled:opacity-100 disabled:cursor-default
                    `}
                  >
                    <div className="flex items-center">
                      <div className={`
                        flex items-center justify-center w-6 h-6 rounded-full mr-3 text-sm font-medium
                        ${isCorrect ? 'bg-green-500 text-white' : ''}
                        ${isWrong ? 'bg-red-500 text-white' : ''}
                        ${!showAnswer && isSelected ? 'bg-blue-100 text-blue-600' : ''}
                        ${!showAnswer && !isSelected ? 'bg-slate-100 text-slate-500' : ''}
                      `}>
                        {String.fromCharCode(65 + i)}
                      </div>
                      <span className="text-base">{c}</span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* 按鈕 */}
            <div className="mb-2">
              <button
                onClick={!showAnswer ? handleSubmit : handleNext}
                disabled={!showAnswer && selected === null}
                className={`
                  w-full py-3 px-4 rounded-xl text-base font-semibold text-white
                  transition-colors duration-200
                  ${!showAnswer 
                    ? 'bg-blue-600 hover:bg-blue-700 disabled:bg-blue-300' 
                    : 'bg-blue-600 hover:bg-blue-700'
                  }
                `}
              >
                {!showAnswer ? '確認する' : '次の問題へ'}
              </button>
            </div>

            {/* 小提示：正解 */}
            {showAnswer && (
              <div className="mt-4 p-3 bg-blue-50 rounded-lg text-sm text-blue-800">
                <div className="font-medium">正しい読み方：</div>
                <div className="font-semibold text-base mt-1">
                  {q.choices[q.answerIndex]}
                </div>
              </div>
            )}
          </>
        )}

        {/* AdSense Ad Unit */}
        <div className="mt-10 w-full" key="ad-container">
          <div className="text-center text-xs text-slate-400 mb-2">Advertisement</div>
          <div className="bg-slate-100 rounded-lg p-4 flex items-center justify-center min-h-[90px] w-full">
            <ins
              className="adsbygoogle"
              style={{
                display: 'block',
                minWidth: '320px',
                minHeight: '90px',
                width: '100%',
                height: '100%'
              }}
              data-ad-client="ca-pub-7828199437770684"
              data-ad-slot="3942777683"
              data-ad-format="auto"
              data-full-width-responsive="true"
            ></ins>
          </div>
        </div>
      </div>
    </main>
  );
}
