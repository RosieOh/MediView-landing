import { Container, Section, Card, Button } from "./ui";
import {
  Video,
  Calendar,
  Pulse,
  Lock,
  IdCard,
  ShieldCheck,
  Clipboard,
  Chat,
  ArrowRight,
  Check,
} from "./icons";

/* ---------------- Stats ---------------- */
export function Stats() {
  const items = [
    { v: "1,200+", k: "검증된 의료진" },
    { v: "3분", k: "평균 연결 시간" },
    { v: "AES‑256", k: "진료기록 암호화" },
    { v: "99.9%", k: "서비스 가동률" },
  ];
  return (
    <Container>
      <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-4">
        {items.map((s) => (
          <div key={s.k} className="bg-surface px-6 py-7 text-center">
            <div className="tnum text-[28px] font-extrabold tracking-tight text-content md:text-[32px]">
              {s.v}
            </div>
            <div className="mt-1 text-[14px] text-muted">{s.k}</div>
          </div>
        ))}
      </div>
    </Container>
  );
}

/* ---------------- Features ---------------- */
const features = [
  {
    icon: Video,
    title: "화상 + 채팅 진료",
    desc: "WebRTC 기반 안정적인 화상 진료와 실시간 채팅을 한 화면에서.",
  },
  {
    icon: Calendar,
    title: "대기 없는 예약",
    desc: "예약제와 실시간 대기열을 함께. 순번은 서버가 정확하게 관리합니다.",
  },
  {
    icon: Pulse,
    title: "AI 문진 요약",
    desc: "환자 문진을 구조화해 의료진에게 전달. 민감정보는 자동 마스킹됩니다.",
  },
  {
    icon: Clipboard,
    title: "처방·서류 발급",
    desc: "진단서·처방전을 담당 의료진만 발급. 상태 전이까지 추적합니다.",
  },
  {
    icon: ShieldCheck,
    title: "검증된 의료진",
    desc: "면허 검증을 통과한 의료진만 진료에 배정됩니다.",
  },
  {
    icon: Lock,
    title: "안전한 간편결제",
    desc: "PG 서버 검증·부분 환불·멱등 처리로 결제 무결성을 보장합니다.",
  },
];

export function Features() {
  return (
    <Section id="features">
      <Container>
        <div className="max-w-2xl">
          <h2 className="text-balance text-[32px] font-bold leading-tight text-content md:text-[40px]">
            진료의 처음부터 끝까지,
            <br />
            매끄럽게 그리고 안전하게
          </h2>
          <p className="mt-4 text-[17px] leading-8 text-muted">
            예약·진료·처방·결제까지 하나의 흐름으로. 각 단계는 접근 권한과
            감사 로그로 보호됩니다.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <Card key={f.title} className="group">
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-primary-50 text-brand transition-colors group-hover:bg-brand group-hover:text-white">
                <f.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-[19px] font-semibold text-content">
                {f.title}
              </h3>
              <p className="mt-2 text-[15px] leading-7 text-muted">{f.desc}</p>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}

/* ---------------- How it works ---------------- */
const steps = [
  {
    icon: IdCard,
    title: "본인확인",
    desc: "휴대폰 본인확인(KYC)으로 안전하게 시작합니다.",
  },
  {
    icon: Calendar,
    title: "의료진 선택·예약",
    desc: "전문 분야로 검증된 의료진을 찾아 예약하거나 바로 대기열에 참여합니다.",
  },
  {
    icon: Chat,
    title: "진료 & 처방",
    desc: "화상·채팅으로 진료를 받고, 처방과 결제까지 앱에서 완료합니다.",
  },
];

export function HowItWorks() {
  return (
    <Section id="how" className="bg-surface-2/60">
      <Container>
        <div className="max-w-2xl">
          <h2 className="text-balance text-[32px] font-bold leading-tight text-content md:text-[40px]">
            세 단계면 충분합니다
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {steps.map((s, i) => (
            <div key={s.title} className="relative">
              <div className="rounded-2xl border border-line bg-surface p-7 shadow-e1">
                <div className="flex items-center justify-between">
                  <div className="grid h-12 w-12 place-items-center rounded-xl bg-primary-50 text-brand">
                    <s.icon className="h-6 w-6" />
                  </div>
                  <span className="tnum text-[40px] font-extrabold leading-none text-line-strong">
                    0{i + 1}
                  </span>
                </div>
                <h3 className="mt-5 text-[20px] font-semibold text-content">
                  {s.title}
                </h3>
                <p className="mt-2 text-[15px] leading-7 text-muted">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}

/* ---------------- Security ---------------- */
const guards = [
  "휴대폰 본인확인(KYC)",
  "의료진 면허 검증 게이트",
  "진료기록·문진 AES‑256 암호화",
  "역할 기반 접근제어(RBAC)",
  "민감정보 접근 감사 로그",
  "결제 PG 서버 검증·멱등성",
];

export function Security() {
  return (
    <Section id="security">
      <Container>
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-balance text-[32px] font-bold leading-tight text-content md:text-[40px]">
              의료 데이터는
              <br />
              타협하지 않습니다
            </h2>
            <p className="mt-4 max-w-lg text-[17px] leading-8 text-muted">
              “이 데이터를 이 사람이 봐도 되는가”를 모든 경로에서 증명합니다.
              인가·감사·개인정보 보호를 기능이 아닌 기본값으로 두었습니다.
            </p>
            <div className="mt-8">
              <Button href="#cta" variant="secondary">
                보안 백서 보기
                <ArrowRight className="h-[18px] w-[18px]" />
              </Button>
            </div>
          </div>

          <div className="rounded-2xl border border-line bg-surface p-3 shadow-e2">
            <div className="rounded-xl bg-gradient-to-br from-primary-700 to-primary-900 px-6 py-6 text-white">
              <div className="flex items-center gap-2 text-[14px] font-semibold">
                <Lock className="h-5 w-5 text-accent-400" />
                설계에 담은 보안
              </div>
              <ul className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {guards.map((g) => (
                  <li key={g} className="flex items-start gap-2.5 text-[14px]">
                    <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-white/15">
                      <Check className="h-3.5 w-3.5 text-accent-400" />
                    </span>
                    <span className="text-white/90">{g}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}

/* ---------------- FAQ ---------------- */
const faqs = [
  {
    q: "비대면 진료는 어떤 경우에 받을 수 있나요?",
    a: "재진·경증 상담 등 비대면 진료가 허용되는 범위에서 이용할 수 있습니다. 진료 가능 여부는 담당 의료진이 판단합니다.",
  },
  {
    q: "본인확인은 왜 필요한가요?",
    a: "환자 식별과 안전한 처방을 위해 휴대폰 본인확인(KYC)을 거칩니다. 확인 정보는 암호화되어 보관됩니다.",
  },
  {
    q: "진료기록은 안전하게 보관되나요?",
    a: "진료기록과 문진 내용은 저장 시 AES‑256으로 암호화되며, 접근은 권한이 있는 사용자로 제한되고 모든 접근이 감사 로그로 남습니다.",
  },
  {
    q: "결제와 환불은 어떻게 처리되나요?",
    a: "PG 서버 검증을 통과한 결제만 승인되며, 부분 환불과 중복 방지(멱등) 처리를 지원합니다.",
  },
];

export function Faq() {
  return (
    <Section id="faq" className="bg-surface-2/60">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-[32px] font-bold text-content md:text-[40px]">
            궁금한 점이 있으신가요?
          </h2>
        </div>
        <div className="mx-auto mt-10 max-w-2xl space-y-3">
          {faqs.map((f) => (
            <details
              key={f.q}
              className="group rounded-2xl border border-line bg-surface px-6 py-1 open:shadow-e1"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between py-4 text-[16px] font-semibold text-content">
                {f.q}
                <span className="ml-4 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-surface-2 text-muted transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="pb-5 text-[15px] leading-7 text-muted">{f.a}</p>
            </details>
          ))}
        </div>
      </Container>
    </Section>
  );
}

/* ---------------- CTA ---------------- */
export function Cta() {
  return (
    <Section id="cta">
      <Container>
        <div className="relative overflow-hidden rounded-[28px] bg-gradient-to-br from-primary-600 to-primary-800 px-8 py-14 text-center shadow-e3 md:px-16 md:py-20">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-60"
            style={{
              background:
                "radial-gradient(40% 60% at 85% 10%, rgba(134,172,249,0.30), transparent 60%)",
            }}
          />
          <div className="relative">
            <h2 className="mx-auto max-w-2xl text-[30px] font-extrabold leading-tight text-white md:text-[42px]">
              지금, 더 안전한 진료를 시작하세요
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-[16px] leading-7 text-white/80 md:text-[18px]">
              앱을 열고 본인확인 한 번이면 준비 끝. 첫 상담은 무료입니다.
            </p>
            <div className="mt-9 flex flex-wrap justify-center gap-3">
              <Button
                href="#"
                size="lg"
                className="bg-white !text-primary-700 hover:bg-white hover:!text-primary-800"
              >
                앱 다운로드
                <ArrowRight className="h-[18px] w-[18px]" />
              </Button>
              <Button
                href="#"
                size="lg"
                variant="ghost"
                className="!text-white ring-1 ring-inset ring-white/30 hover:bg-white/10"
              >
                의료기관으로 시작
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
