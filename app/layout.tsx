import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "全方位 AI 深度文章與程式碼產生器",
  description: "支援數據論文引用、動態表格排版，一鍵產出完整 React 網頁元件",
  // 加入 icons 設定，路徑直接指向 public 下的檔案
  icons: {
    icon: "/favicon.svg",
  },

  openGraph: {
    title: "全方位 AI 深度文章與程式碼產生器",
    description: "支援數據論文引用、動態表格排版，一鍵產出完整 React 網頁元件",
    url: "https://article-flame-mu.vercel.app/", // 建議改為您的實際網址
    siteName: "全方位 AI 深度文章與程式碼產生器",
    images: [
      {
        url: "/og-image.webp", // 圖片檔案需放在 public 資料夾內
        width: 1200,
        height: 630,
        alt: "智網網站 SEO 評估工具預覽圖",
      },
    ],
    locale: "zh_TW",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="zh-TW"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}