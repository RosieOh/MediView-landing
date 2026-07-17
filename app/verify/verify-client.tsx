"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8080";

type VerificationResult = {
  valid: boolean;
  typeLabel?: string;
  issuedAt?: string;
  orgName?: string;
  doctorName?: string;
  patientName?: string;
};

type State =
  | { kind: "loading" }
  | { kind: "missing" }
  | { kind: "error" }
  | { kind: "done"; result: VerificationResult };

export function VerifyClient() {
  const params = useSearchParams();
  const doc = params.get("doc");
  const code = params.get("code");
  const [state, setState] = useState<State>({ kind: "loading" });

  useEffect(() => {
    if (!doc || !code) {
      setState({ kind: "missing" });
      return;
    }
    let alive = true;
    (async () => {
      try {
        const res = await fetch(
          `${API_URL}/api/public/documents/verify?doc=${encodeURIComponent(doc)}&code=${encodeURIComponent(code)}`,
          { headers: { Accept: "application/json" } },
        );
        const body = await res.json();
        if (alive) setState({ kind: "done", result: body?.data ?? { valid: false } });
      } catch {
        if (alive) setState({ kind: "error" });
      }
    })();
    return () => {
      alive = false;
    };
  }, [doc, code]);

  return (
    <main className="min-h-dvh bg-canvas text-content flex flex-col items-center px-5 py-16">
      <div className="w-full max-w-md">
        {/* 브랜드 */}
        <div className="flex items-center justify-center gap-2 mb-8">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-brand text-white font-extrabold">
            M
          </span>
          <span className="text-lg font-extrabold tracking-tight">MediView</span>
        </div>

        <h1 className="text-center text-2xl font-extrabold mb-1">문서 진위확인</h1>
        <p className="text-center text-muted text-sm mb-8">
          MediView 전자문서의 발급 진위를 확인합니다.
        </p>

        {state.kind === "loading" && <LoadingCard />}
        {state.kind === "missing" && (
          <ResultCard tone="neutral" title="확인 정보가 없습니다" desc="QR 코드를 다시 스캔해 주세요." />
        )}
        {state.kind === "error" && (
          <ResultCard
            tone="neutral"
            title="확인할 수 없습니다"
            desc="네트워크 문제로 확인에 실패했습니다. 잠시 후 다시 시도해 주세요."
          />
        )}
        {state.kind === "done" &&
          (state.result.valid ? (
            <ValidCard result={state.result} />
          ) : (
            <ResultCard
              tone="danger"
              title="확인할 수 없는 문서입니다"
              desc="발급 정보가 일치하지 않거나 유효하지 않은 문서입니다. 발급 의료기관에 문의하세요."
            />
          ))}

        <p className="text-center text-subtle text-xs mt-8 leading-relaxed">
          본 확인은 문서의 발급 사실만 검증하며, 개인정보는 마스킹되어 표시됩니다.
        </p>
      </div>
    </main>
  );
}

function LoadingCard() {
  return (
    <div className="rounded-2xl border border-line bg-surface shadow-e2 p-8 flex flex-col items-center gap-4">
      <div className="h-10 w-10 rounded-full border-2 border-line border-t-brand animate-spin" />
      <p className="text-muted text-sm">확인 중…</p>
    </div>
  );
}

function ValidCard({ result }: { result: VerificationResult }) {
  return (
    <div className="rounded-2xl border border-line bg-surface shadow-e2 overflow-hidden">
      <div className="bg-success/10 px-6 py-5 flex items-center gap-3 border-b border-line">
        <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-success text-white text-lg">
          ✓
        </span>
        <div>
          <p className="font-bold text-success">유효한 문서입니다</p>
          <p className="text-xs text-muted">MediView 전자문서 시스템 발급 확인</p>
        </div>
      </div>
      <dl className="divide-y divide-line">
        <Row label="문서 종류" value={result.typeLabel} />
        <Row label="발급 일시" value={result.issuedAt} />
        <Row label="의료기관" value={result.orgName} />
        <Row label="담당 의사" value={result.doctorName} />
        <Row label="환자" value={result.patientName} />
      </dl>
    </div>
  );
}

function Row({ label, value }: { label: string; value?: string }) {
  return (
    <div className="flex items-center justify-between px-6 py-3.5">
      <dt className="text-sm text-muted">{label}</dt>
      <dd className="text-sm font-semibold text-content">{value || "-"}</dd>
    </div>
  );
}

function ResultCard({
  tone,
  title,
  desc,
}: {
  tone: "danger" | "neutral";
  title: string;
  desc: string;
}) {
  const badge = tone === "danger" ? "bg-danger text-white" : "bg-surface-2 text-muted";
  const titleColor = tone === "danger" ? "text-danger" : "text-content";
  return (
    <div className="rounded-2xl border border-line bg-surface shadow-e2 p-8 flex flex-col items-center text-center gap-3">
      <span className={`inline-flex h-11 w-11 items-center justify-center rounded-full text-xl ${badge}`}>
        {tone === "danger" ? "!" : "?"}
      </span>
      <p className={`font-bold ${titleColor}`}>{title}</p>
      <p className="text-sm text-muted leading-relaxed">{desc}</p>
    </div>
  );
}
