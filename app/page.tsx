export const metadata = {
  title: "JP Name Quiz | Practice Japanese Name Readings",
  description: "A learning-focused quiz site to practice Japanese name readings (kanji → kana).",
};

export default function HomePage() {
  return (
    <main style={{ maxWidth: 860, margin: "0 auto", padding: "24px 16px", lineHeight: 1.8 }}>
      <h1>JP Name Quiz</h1>
      <p>
        Practice Japanese name readings (kanji → kana) with a simple quiz format. This site is built
        for Japanese learners who want to improve real-world reading confidence.
      </p>

      <h2>Why name readings?</h2>
      <ul>
        <li>Names often have irregular readings and exceptions</li>
        <li>Commonly appear in news, profiles, business documents, and daily life</li>
        <li>Short daily practice can significantly improve recognition</li>
      </ul>

      <h2>Get started</h2>
      <p>
        Start with a short session, review mistakes, and repeat. For best results, practice a little
        every day.
      </p>

      <p style={{ marginTop: 16 }}>
        <a href="/quiz" style={{ textDecoration: "underline" }}>Start the Quiz</a>
        {"  "} | {"  "}
        <a href="/how-to-use" style={{ textDecoration: "underline" }}>How to Use</a>
        {"  "} | {"  "}
        <a href="/about" style={{ textDecoration: "underline" }}>About</a>
        {"  "} | {"  "}
        <a href="/privacy" style={{ textDecoration: "underline" }}>Privacy</a>
      </p>
    </main>
  );
}
