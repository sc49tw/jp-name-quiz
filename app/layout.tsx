import "./globals.css";
import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "読み方クイズ",
  description: "日本の有名人の名前の読み方クイズ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <head>
        {/* 原生 AdSense script，Google 一定能抓到 */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7828199437770684"
          crossOrigin="anonymous"
        />

        {/* 其他 head elements */}
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>


      <body className="bg-slate-50 text-slate-800">
        {/* ------------------ NAVIGATION ------------------ */}
        <nav className="w-full px-4 py-3 text-sm bg-white border-b border-slate-200 flex justify-end gap-4">
          <a
            href="/about"
            className="text-slate-600 hover:text-slate-900 hover:underline"
          >
            About
          </a>
          <a
            href="/privacy"
            className="text-slate-600 hover:text-slate-900 hover:underline"
          >
            Privacy
          </a>
        </nav>

        {/* ------------------ MAIN CONTENT ------------------ */}
        <div className="min-h-screen">
          {children}
        </div>

        {/* ------------------ FOOTER ------------------ */}
        <footer className="w-full text-center text-xs text-slate-500 py-6 border-t border-slate-200">
          © {new Date().getFullYear()} 読み方クイズ · All rights reserved.
        </footer>
      </body>
    </html>
  );
}
