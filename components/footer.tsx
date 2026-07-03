import { Container } from "./ui";
import { Logo } from "./icons";

const groups = [
  {
    title: "서비스",
    links: ["비대면 진료", "예약/대기", "처방·서류", "간편결제"],
  },
  {
    title: "회사",
    links: ["소개", "채용", "블로그", "문의하기"],
  },
  {
    title: "정책",
    links: ["이용약관", "개인정보처리방침", "보안", "의료광고 심의"],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-line bg-surface">
      <Container className="py-14">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div className="col-span-2 md:col-span-1">
            <Logo />
            <p className="mt-4 max-w-xs text-[14px] leading-7 text-muted">
              안전을 설계에 담은 비대면 진료 플랫폼. 언제 어디서나, 믿을 수
              있는 의료를 연결합니다.
            </p>
          </div>
          {groups.map((g) => (
            <div key={g.title}>
              <div className="text-[13px] font-bold uppercase tracking-wide text-subtle">
                {g.title}
              </div>
              <ul className="mt-4 space-y-3">
                {g.links.map((l) => (
                  <li key={l}>
                    <a
                      href="#"
                      className="text-[15px] text-muted transition-colors hover:text-content"
                    >
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-line pt-8 text-[13px] text-subtle md:flex-row md:items-center">
          <p>© 2026 MediView. All rights reserved.</p>
          <p>
            본 서비스는 비대면 진료 관련 법령이 허용하는 범위에서 제공됩니다.
          </p>
        </div>
      </Container>
    </footer>
  );
}
