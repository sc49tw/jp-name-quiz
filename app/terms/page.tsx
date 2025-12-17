//app/terms/page.tsx
export const metadata = {
  title: "Terms | JP Name Quiz",
  description: "Terms of use for JP Name Quiz.",
};

export default function TermsPage() {
  return (
    <main style={{ maxWidth: 860, margin: "0 auto", padding: "24px 16px", lineHeight: 1.8 }}>
      <h1>Terms of Use</h1>
      <p>Last updated: 2025-12-17</p>

      <h2>Educational purpose</h2>
      <p>
        This site is provided for educational and informational purposes. Content may change over
        time as the site improves.
      </p>

      <h2>No warranty</h2>
      <p>
        The site is provided “as is” without warranties of any kind. The site owner is not liable
        for damages resulting from the use of the site.
      </p>

      <h2>Acceptable use</h2>
      <p>
        You agree not to misuse the site, attempt to disrupt service, or scrape content in a way
        that harms the service.
      </p>
    </main>
  );
}
