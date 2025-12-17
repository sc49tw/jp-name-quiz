//app/about/page.tsx
export default function AboutPage() {
  return (
    <main className="max-w-2xl mx-auto p-6 text-slate-800">
      <h1 className="text-2xl font-bold mb-4">このサイトについて</h1>

      <p className="mb-4 text-sm leading-relaxed">
        本サイト「読み方クイズ」は、日本の有名人・著名人の名前の読み方を気軽に学べる無料の Web アプリです。
        名字・名前の読み方をクイズ形式で学ぶことで、日本語学習者や日本文化に興味がある方に役立つことを目的としています。
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">特徴</h2>
      <ul className="list-disc ml-6 text-sm space-y-2">
        <li>有名人の名前を題材にした読み方クイズ</li>
        <li>カテゴリー別に問題を選択可能</li>
        <li>すべて無料で利用可能</li>
        <li>将来的に問題数を拡充予定</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">免責事項</h2>
      <p className="mb-4 text-sm leading-relaxed">
        本サイトの内容は正確性を保証するものではありません。学習目的の補助ツールとしてご利用ください。
        表示される情報は公開データや一般的な知識に基づいており、誤りが含まれる可能性があります。
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">運営者情報</h2>
      <p className="text-sm leading-relaxed mb-4">
        運営：個人開発（JP Name Quiz）<br />
        連絡：GitHub Issues よりご連絡ください
      </p>
      
      <h2 className="text-xl font-semibold mt-6 mb-2">お問い合わせ</h2>
      <p className="text-sm">
        内容の修正依頼や不具合報告がありましたら、GitHub リポジトリまたはご利用の連絡手段よりお知らせください。
      </p>
    </main>
  );
}
