import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MediView — 믿을 수 있는 비대면 진료",
  description:
    "본인확인·의료진 검증·기록 암호화까지. 안전을 설계에 담은 비대면 진료 플랫폼 MediView.",
  keywords: ["비대면진료", "원격의료", "telehealth", "MediView", "진료 예약"],
  openGraph: {
    title: "MediView — 믿을 수 있는 비대면 진료",
    description:
      "본인확인·의료진 검증·기록 암호화까지. 안전을 설계에 담은 비대면 진료 플랫폼.",
    type: "website",
  },
};

export const viewport: Viewport = {
  // globals.css 의 --canvas 와 정확히 일치시켜 브라우저 크롬과 페이지 배경의 경계를 없앤다.
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f9fafb" },
    { media: "(prefers-color-scheme: dark)", color: "#0b0d0e" },
  ],
};

const themeInit = `
try {
  var t = localStorage.getItem('mv-theme');
  if (t) document.documentElement.setAttribute('data-theme', t);
} catch (e) {}
`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInit }} />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
