import { Container, Button, Eyebrow } from "./ui";
import { ArrowRight, ShieldCheck, Video, Pulse, Check, IdCard } from "./icons";

export function Hero() {
  return (
    <div id="top" className="relative overflow-hidden">
      {/* 배경: 부드러운 teal 글로우 + 미세 그리드 */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(60% 50% at 78% 0%, rgba(18,163,168,0.14), transparent 60%), radial-gradient(45% 40% at 10% 15%, rgba(251,112,96,0.10), transparent 55%)",
        }}
      />
      <Container className="grid grid-cols-1 items-center gap-14 pb-20 pt-16 md:pb-28 md:pt-24 lg:grid-cols-[1.05fr_0.95fr]">
        {/* Left — copy */}
        <div>
          <Eyebrow>비대면 진료, 다시 설계하다</Eyebrow>
          <h1 className="mt-5 text-[40px] font-extrabold leading-[1.1] tracking-[-0.02em] text-content md:text-[56px] md:leading-[1.06]">
            집에서 만나는
            <br />
            <span className="text-brand">믿을 수 있는</span> 진료
          </h1>
          <p className="mt-6 max-w-[30rem] text-[17px] leading-8 text-muted md:text-[18px]">
            본인확인부터 의료진 면허 검증, 진료기록 암호화까지. MediView는
            안전을 나중에 붙이지 않고 처음부터 설계에 담았습니다.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <Button href="#cta" size="lg">
              무료로 시작하기
              <ArrowRight className="h-[18px] w-[18px]" />
            </Button>
            <Button href="#how" variant="secondary" size="lg">
              이용 방법 보기
            </Button>
          </div>

          {/* 신뢰 칩 */}
          <ul className="mt-9 flex flex-wrap gap-x-6 gap-y-3">
            {[
              { icon: IdCard, label: "본인확인(KYC) 연동" },
              { icon: ShieldCheck, label: "면허 검증 의료진" },
              { icon: Check, label: "기록 AES‑256 암호화" },
            ].map((c) => (
              <li
                key={c.label}
                className="inline-flex items-center gap-2 text-[14px] font-medium text-muted"
              >
                <c.icon className="h-[18px] w-[18px] text-brand" />
                {c.label}
              </li>
            ))}
          </ul>
        </div>

        {/* Right — 앱 프리뷰 목업 */}
        <div className="relative mx-auto w-full max-w-[420px]">
          <div
            aria-hidden
            className="absolute -inset-6 -z-10 rounded-[40px] opacity-70 blur-2xl"
            style={{
              background:
                "linear-gradient(140deg, rgba(18,163,168,0.20), rgba(251,112,96,0.14))",
            }}
          />
          <div className="rounded-[28px] border border-line bg-surface p-4 shadow-e3">
            {/* 상단 진료 카드 */}
            <div className="rounded-2xl bg-gradient-to-br from-primary-600 to-primary-800 p-5 text-white">
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-2.5 py-1 text-[12px] font-semibold">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent-400" />
                  진료 중
                </span>
                <Video className="h-5 w-5 opacity-90" />
              </div>
              <div className="mt-5 flex items-center gap-3">
                <div className="grid h-12 w-12 place-items-center rounded-full bg-white/15 text-[18px] font-bold">
                  김
                </div>
                <div>
                  <div className="flex items-center gap-1.5 text-[15px] font-semibold">
                    김서연 내과 전문의
                    <ShieldCheck className="h-4 w-4 text-accent-400" />
                  </div>
                  <div className="text-[13px] text-white/70">
                    비대면 진료 · 04:12
                  </div>
                </div>
              </div>
              <div className="mt-5 flex items-center gap-2 rounded-xl bg-white/10 px-3 py-2.5">
                <Pulse className="h-[18px] w-[18px] text-accent-400" />
                <span className="text-[13px] text-white/85">
                  실시간 문진 요약 생성 중…
                </span>
              </div>
            </div>

            {/* 하단 요약 리스트 */}
            <div className="space-y-2.5 px-1 py-4">
              {[
                { k: "본인확인", v: "완료", ok: true },
                { k: "처방전 발급", v: "검토 중", ok: false },
                { k: "결제(간편)", v: "12,000원", ok: true },
              ].map((r) => (
                <div
                  key={r.k}
                  className="flex items-center justify-between rounded-xl bg-surface-2 px-4 py-3"
                >
                  <span className="text-[14px] text-muted">{r.k}</span>
                  <span
                    className={`tnum text-[14px] font-semibold ${
                      r.ok ? "text-brand-ink" : "text-muted"
                    }`}
                  >
                    {r.v}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* 플로팅 배지 */}
          <div className="absolute -left-5 top-24 hidden rounded-2xl border border-line bg-surface px-4 py-3 shadow-e2 sm:block">
            <div className="text-[12px] font-medium text-muted">평균 대기</div>
            <div className="tnum text-[20px] font-extrabold text-content">
              3분 이내
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
