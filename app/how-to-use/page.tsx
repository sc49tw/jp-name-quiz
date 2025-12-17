//app/how-to-use/page.tsx
export const metadata = {
  title: "How to Use | JP Name Quiz",
  description: "How to use JP Name Quiz effectively for Japanese name reading practice.",
};

export default function HowToUsePage() {
  return (
    <main style={{ maxWidth: 860, margin: "0 auto", padding: "24px 16px", lineHeight: 1.8 }}>
      <h1>How to Use JP Name Quiz</h1>

      <h2>Recommended workflow</h2>
      <ol>
        <li>Start with short daily sessions (5–10 minutes)</li>
        <li>Answer first, then review the correct reading carefully</li>
        <li>Repeat names you got wrong and look for reading patterns</li>
        <li>Keep a personal list of “frequent misses” for quick review</li>
      </ol>

      <h2>Learning tips</h2>
      <ul>
        <li>Focus on common surname readings first, then move to given names</li>
        <li>Pay attention to kanji variants and sound changes (rendaku, long vowels)</li>
        <li>Use spaced repetition: revisit the same set after 1 day / 3 days / 1 week</li>
      </ul>

      <h2>Notes</h2>
      <p>
        This site is intended for language learning. If any content appears incorrect or outdated,
        please report it so it can be improved.
      </p>
    </main>
  );
}
