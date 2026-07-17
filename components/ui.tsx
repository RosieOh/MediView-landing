import Link from "next/link";
import type { ReactNode } from "react";

/* 레이아웃 컨테이너 — 최대 폭과 좌우 여백을 일관되게 */
export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-[1160px] px-6 md:px-8 ${className}`}>
      {children}
    </div>
  );
}

/* 섹션 세로 리듬 */
export function Section({
  children,
  className = "",
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`py-16 md:py-28 ${className}`}>
      {children}
    </section>
  );
}

/* 카테고리 라벨(overline) */
export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.08em] text-brand-ink">
      <span className="h-1 w-1 rounded-full bg-brand" />
      {children}
    </span>
  );
}

type ButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "ghost";
  size?: "md" | "lg";
  className?: string;
};

export function Button({
  children,
  href = "#",
  variant = "primary",
  size = "md",
  className = "",
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-200 ease-[var(--ease-out-quart)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary-500/25";
  const sizes = {
    md: "h-11 px-5 text-[15px]",
    lg: "h-13 px-7 text-[16px]",
  };
  const variants = {
    primary:
      "bg-brand text-white shadow-e1 hover:shadow-[var(--shadow-glow)] hover:-translate-y-0.5 active:translate-y-0",
    secondary:
      "bg-surface text-content border border-line-strong hover:border-brand hover:text-brand-ink",
    ghost: "text-content hover:bg-surface-2",
  };
  return (
    <Link
      href={href}
      className={`${base} ${sizes[size]} ${variants[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}

/* 카드 */
export function Card({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-2xl border border-line bg-surface p-6 shadow-e1 transition-shadow duration-200 hover:shadow-e2 ${className}`}
    >
      {children}
    </div>
  );
}
