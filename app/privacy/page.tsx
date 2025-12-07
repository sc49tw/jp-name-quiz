export default function PrivacyPage() {
  return (
    <main className="max-w-2xl mx-auto p-6 text-slate-800">
      <h1 className="text-2xl font-bold mb-4">プライバシーポリシー</h1>

      <p className="text-sm mb-4 leading-relaxed">
        本サイト「読み方クイズ」では、サービス向上のために Google AdSense などの第三者配信広告サービスを利用しています。
        AdSense 広告は、ユーザーの興味に応じた広告を表示するために Cookie を使用する場合があります。
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">収集されるデータについて</h2>
      <p className="text-sm mb-4 leading-relaxed">
        本サイト自体は個人を特定できるデータを収集しません。ただし、広告配信事業者は Cookie や関連技術を用いてユーザーのアクセス情報を取得することがあります。
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">第三者配信広告について</h2>
      <p className="text-sm mb-4 leading-relaxed">
        Google を含む第三者配信事業者は、ユーザーの興味・関心に基づいた広告を表示するために Cookie を使用することがあります。
        Google 広告に関する詳細や、パーソナライズ広告を無効にする方法については以下をご確認ください。
      </p>
      <p className="text-sm mb-4">
        <a
          href="https://policies.google.com/technologies/ads"
          className="text-blue-600 underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Google 広告と Cookie の仕組み
        </a>
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Cookie の利用について</h2>
      <p className="text-sm mb-4 leading-relaxed">
        本サイトでは、閲覧体験の改善やアクセス解析のために Cookie を使用する場合があります。
        Cookie 情報からユーザー個人を特定することはありません。
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">免責事項</h2>
      <p className="text-sm mb-4 leading-relaxed">
        本サイトに掲載された情報により発生したいかなる損害についても責任を負いません。
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">お問い合わせ</h2>
      <p className="text-sm">
        プライバシーに関するご質問がありましたら、お気軽にご連絡ください。
      </p>
    </main>
  );
}
