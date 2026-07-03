import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base = {
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.75,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

/* 브랜드 로고마크 — 의료 십자를 품은 방패(신뢰) */
export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden>
        <path
          d="M14 2.5 24 6v7.5c0 6.2-4.1 10.4-10 12-5.9-1.6-10-5.8-10-12V6l10-3.5Z"
          fill="var(--brand)"
        />
        <path
          d="M14 8.6v7.8M10.1 12.5h7.8"
          stroke="#fff"
          strokeWidth="2.1"
          strokeLinecap="round"
        />
      </svg>
      <span className="text-[19px] font-extrabold tracking-tight text-content">
        Medi<span className="text-brand">View</span>
      </span>
    </span>
  );
}

export function Video(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <rect x="2.5" y="6" width="12.5" height="12" rx="2.5" />
      <path d="M15 10.5 21.5 7v10L15 13.5" />
    </svg>
  );
}

export function ShieldCheck(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M12 3 20 6v6c0 5-3.4 8.4-8 9.7C7.4 20.4 4 17 4 12V6l8-3Z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

export function IdCard(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <rect x="2.5" y="5" width="19" height="14" rx="2.5" />
      <circle cx="8" cy="11" r="2.2" />
      <path d="M5 16c.6-1.6 1.9-2.4 3-2.4s2.4.8 3 2.4M14 9.5h4.5M14 13h4.5" />
    </svg>
  );
}

export function Lock(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <rect x="4.5" y="10.5" width="15" height="9.5" rx="2.5" />
      <path d="M8 10.5V8a4 4 0 0 1 8 0v2.5M12 14.5v2.5" />
    </svg>
  );
}

export function Clipboard(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <rect x="5" y="4.5" width="14" height="16" rx="2.5" />
      <path d="M9 4.5h6v3H9zM8.5 12h7M8.5 15.5h4.5" />
    </svg>
  );
}

export function Pulse(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M2.5 12.5h4l2-6 3.5 12 2.5-8 1.5 2h5.5" />
    </svg>
  );
}

export function Calendar(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <rect x="3.5" y="5" width="17" height="15.5" rx="2.5" />
      <path d="M3.5 9.5h17M8 3.5v3M16 3.5v3" />
    </svg>
  );
}

export function Chat(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M4 5.5h16a1.5 1.5 0 0 1 1.5 1.5v8a1.5 1.5 0 0 1-1.5 1.5H9l-4 3.5V17H4A1.5 1.5 0 0 1 2.5 15.5V7A1.5 1.5 0 0 1 4 5.5Z" />
      <path d="M7.5 10h9M7.5 13h5" />
    </svg>
  );
}

export function Sun(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2.5v2.5M12 19v2.5M4.2 4.2l1.8 1.8M18 18l1.8 1.8M2.5 12H5M19 12h2.5M4.2 19.8 6 18M18 6l1.8-1.8" />
    </svg>
  );
}

export function Moon(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M20 14.5A8 8 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5Z" />
    </svg>
  );
}

export function ArrowRight(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M4.5 12h15M13 5.5 19.5 12 13 18.5" />
    </svg>
  );
}

export function Check(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="m5 12.5 4.5 4.5L19 7" />
    </svg>
  );
}
