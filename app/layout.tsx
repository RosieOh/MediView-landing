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
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f6f8f9" },
    { media: "(prefers-color-scheme: dark)", color: "#0f1518" },
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
