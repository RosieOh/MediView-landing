import { Suspense } from "react";
import type { Metadata } from "next";
import { VerifyClient } from "./verify-client";

export const metadata: Metadata = {
  title: "문서 진위확인 — MediView",
  description: "MediView 전자문서(처방전·진료내역서)의 발급 진위를 확인합니다.",
  robots: { index: false },
};

export default function VerifyPage() {
  return (
    <Suspense
      fallback={<main className="min-h-dvh bg-canvas" />}
    >
      <VerifyClient />
    </Suspense>
  );
}
