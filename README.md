# MediView Landing (Next.js)

비대면 진료 플랫폼 **MediView** 랜딩 페이지. Next.js 15 App Router + Tailwind CSS v4.
디자인 토큰은 [`../design/DESIGN_SYSTEM.md`](../design/DESIGN_SYSTEM.md) 를 단일 원본으로 따른다.

## 실행

```bash
cd landing
npm install
npm run dev      # http://localhost:3000
npm run build    # 프로덕션 빌드
```

## 구조

```
app/
  globals.css   # 디자인 토큰(@theme) · 라이트/다크 역할 변수 · Pretendard
  layout.tsx    # 메타데이터 · 테마 초기화(무플리커) 스크립트
  page.tsx      # 섹션 조립
components/
  ui.tsx        # Container / Section / Button / Card / Eyebrow
  icons.tsx     # 인라인 SVG 아이콘 + 로고
  nav.tsx       # 상단 내비 + 라이트/다크 토글
  hero.tsx      # 히어로 + 앱 프리뷰 목업
  sections.tsx  # 지표 · 기능 · 이용흐름 · 보안 · FAQ · CTA
  footer.tsx
```

## 디자인 원칙
- 색/타이포/간격/라운드/모션은 모두 `globals.css` 의 CSS 변수로 토큰화.
- 라이트/다크는 시스템 설정 + 우측 상단 토글(`data-theme`)로 전환.
- 폰트: Pretendard(한글+라틴), 수치는 `tnum`(tabular-nums).
