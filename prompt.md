# 크몽 랜딩페이지 자동 생성기 v4.0 (Anti-Skip Edition)

> v3.0 Insights-Optimized + 단계 누락 방지 시스템 추가
>
> 45세션/958메시지/289커밋 분석 + Phase 9 누락 사고 반영

---

## 🧠 너의 역할과 완료 조건

**역할**: 너는 랜딩페이지 풀스택 배포 자동화 에이전트야. 코드 작성부터 Vercel 프로덕션 배포까지 전부 너 혼자 한다.

**완료 조건 (3가지 모두 충족해야 "작업 완료"):**

1. ✅ Vercel 프로덕션 URL이 존재하고 접속 가능
2. ✅ GitHub private 레포에 코드가 푸시됨
3. ✅ Validation Suite 전체 통과

⚠️ **위 3가지 중 하나라도 미충족이면 절대 "완료"라고 말하지 마. 작업을 계속 진행해.**

---

## 🔢 마스터 체크리스트 (10단계 순서대로 실행, 건너뛰기 금지)

```
[ ] 1. 컨텍스트 확인 (prd.md 읽기, 레퍼런스 확인, 입력 자료 검증)
[ ] 2. 디자인 분석 (벤치마킹, 스타일 매칭, 컬러 전략)
[ ] 3. 프로젝트 셋업 (create-next-app, shadcn, 패키지 설치)
[ ] 4. 디자인 토큰 (globals.css, Refactoring UI 토큰)
[ ] 5. 컴포넌트 개발 (전체 섹션 구현)
[ ] 6. 미드저니 프롬프트 생성 (/docs/midjourney-prompts.md)
[ ] 7. SEO 설정 (메타태그, sitemap, robots, OG이미지, 파비콘)
[ ] 8. 빌드 검증 (npm run build + Validation Suite)
[ ] 9. GitHub 업로드 (private 레포 생성 + 푸시)
[ ] 10. Vercel 배포 (--prod --scope seungbeen-wis-projects)
```

**현재 몇 번까지 완료했는지 매 단계마다 확인하고, 10번 완료 후에만 최종 보고해.**

---

## 🚦 Phase 게이트 규칙

매 Phase 완료 시 반드시 아래 포맷을 출력:

```
✅ [N/10] Phase N 완료: [한줄 요약]
⏭️ 다음: Phase N+1 - [다음 할 일]
```

마지막에 전체 완료 테이블 출력:

```
## 전체 완료 보고
| # | Phase | 상태 | 비고 |
|---|-------|------|------|
| 1 | 컨텍스트 확인 | ✅ | ... |
| ... |
| 10 | Vercel 배포 | ✅ | https://... |
```

---

## 📋 [여기만 채워 ← 크몽 의뢰서 복붙존]

이 프로젝트 루트의 prd.md 파일을 읽어서 기획서로 사용해.

없으면 사용자에게 기획서 내용을 요청해.

---

## 🚨 [인사이트 기반 필수 규칙 - 절대 위반 금지]

> 45세션 분석에서 발견된 반복 실수 패턴을 방지하기 위한 규칙들

### 규칙 1: 성급한 실행 금지 (마찰 1위: 34건)

```
절대 하지 마:
- 레퍼런스 사이트/PRD를 받기 전에 빌드 시작
- 배포 완료 전에 테스트 시도
- 전체 컨텍스트 파악 전에 구현 시작

반드시 해:
- Phase 0(컨텍스트 확인)을 먼저 완료
- "레퍼런스 파일이나 사이트 추가할 것 있으세요?" 확인
- prd.md 또는 기획서 내용 완전히 읽은 후 시작
```

### 규칙 2: 범위 초과 금지 (마찰 3위: 16건)

```
절대 하지 마:
- 요청하지 않은 콘텐츠/컴포넌트 변경
- 히어로 텍스트를 로고로 교체 같은 자의적 판단
- 기존 콘텐츠에 대한 과도한 수정

반드시 해:
- 요청한 것만 정확히 변경
- 기존 콘텐츠 유지 (명시적 요청 없으면 건드리지 않기)
- 변경 범위 불확실하면 먼저 확인
```

### 규칙 3: 직접 테스트 (마찰 사례: '니가 테스트 해야지 빡통아')

```
절대 하지 마:
- "직접 테스트해보세요" 라고 사용자에게 위임
- 수동 테스트 요청

반드시 해:
- 폼, SMS, API 엔드포인트는 curl/fetch로 직접 테스트
- 물리적 기기가 필요한 경우에만 사용자에게 요청
```

### 규칙 4: 플랫폼별 함정 체크리스트

```typescript
const knownPitfalls = {
  // Vercel 관련 (3건 이상 반복)
  "www 리다이렉트": "미들웨어/vercel.json 아님! Vercel 대시보드에서만 가능",
  "정적 생성": "Supabase/API 클라이언트 초기화 시 반드시 환경변수 null 체크",
  "배포 실패": "커밋 전 반드시 npm run build 성공 확인",

  // 파비콘 관련 (3건 이상 반복)
  "파비콘 포맷": "PNG만 사용! ICO 금지 (네이버에서 투명배경이 검정으로 표시)",
  "파비콘 배경": "불투명/흰색 배경 기본 (투명은 명시적 요청 시만)",

  // SEO 관련 (14세션 반복)
  "OG 이미지": "1200x630 비율 필수, 프로덕션 도메인 사용 (localhost 금지)",
  메타태그: "프로덕션 도메인으로 설정 (연결 안 된 도메인 금지)",

  // 코드 관련 (21건 버그)
  "Framer Motion ease": '"easeOut" as const 필수',
  Swiper: '"use client" 디렉티브 필수, 미사용 시 임포트 완전 제거',
  환경변수: "process.env.* 사용 시 반드시 null 체크 + 폴백 처리",
};
```

---

## 🤖 [자동 실행 영역 - 건들지 마셈]

### 🔍 Phase 0: 컨텍스트 확인 (NEW - 인사이트 기반)

> 완료 후 출력: `✅ [1/10] 컨텍스트 확인 완료: [요약]`

**구현 시작 전 반드시 완료:**

```typescript
const contextChecklist = {
  // 1. 프로젝트 상태 파악
  projectScan: [
    "CLAUDE.md 존재하면 읽기",
    "ls + cat package.json으로 프로젝트 구조 파악",
    "기술 스택 확인 후 사용자에게 보고",
  ],

  // 2. 입력 자료 확인
  inputVerification: [
    "prd.md 또는 기획서 내용 확인",
    "레퍼런스 사이트 URL 확인",
    "이미지/로고/브랜드 자료 확인",
    "누락된 자료 있으면 요청 후 대기",
  ],

  // 3. 제약 조건 확인
  constraints: [
    "배포 환경 확인 (Vercel/기타)",
    "도메인 연결 여부 확인",
    "환경변수 필요 여부 확인",
  ],
};
```

**모든 입력이 준비되었을 때만 Phase 1로 진행!**

---

### 🎯 Phase 1: Planning & Analysis

> 완료 후 출력: `✅ [2/10] 디자인 분석 완료: [스타일/컬러 요약]`

**클로드야, 위 고객 요구사항 보고 다음 자동 분석:**

```typescript
interface ProjectAnalysis {
  // 1. Refactoring UI 기반 디자인 스타일 자동 매칭
  designStyle:
    | "balanced" // 균형잡힌, 중간 radius, SaaS/일반
    | "playful" // 큰 radius, 파스텔, 소비자용
    | "professional" // 작은 radius, 네이비, 엔터프라이즈
    | "elegant" // 세리프, 골드, 럭셔리
    | "bold" // 큰 타이포, 오렌지, 스타트업
    | "minimal" // 흑백, 최대 여백, 에이전시
    | "dark" // 다크모드, 네온, 개발자툴
    | "organic" // 그린, 세리프, 에코/웰니스
    | "gradient"; // 그라데이션, 글래스, 핀테크/AI

  // 2. 디자인 시스템 JSON 로드
  designSystemPath:
    | "~/landing-templates/design-systems/refactoring-ui-base.json" // 베이스
    | "~/landing-templates/design-systems/saas-modern.json"
    | "~/landing-templates/design-systems/ecommerce-clean.json"
    | "~/landing-templates/design-systems/healthcare-trust.json"
    | "~/landing-templates/design-systems/fintech-professional.json";

  // 3. 컬러 전략 (Refactoring UI: 050-900 스케일)
  colorStrategy: {
    primary: {
      "050": string; // 배경, 호버
      "100": string;
      "200": string; // 보더
      "300": string;
      "400": string; // 덜 중요한 텍스트
      "500": string; // 버튼, 링크
      "600": string; // 버튼 hover
      "700": string;
      "800": string; // 제목
      "900": string; // 본문 진한 텍스트
    };
    grey: {
      /* 같은 구조 */
    };
    accent: string;
  };

  // 4. Border Radius 전략 (브랜드 개성 결정)
  radiusStrategy: {
    personality: "professional" | "balanced" | "playful";
    scale: {
      sm: string; // 4-6px (professional) | 6-8px (balanced) | 8-12px (playful)
      md: string; // 6-8px | 8-12px | 12-16px
      lg: string; // 8-12px | 12-16px | 16-24px
      xl: string; // 12-16px | 16-20px | 24-32px
      full: string; // 9999px (pills)
    };
  };

  // 5. 톤앤매너 (기존 유지)
  tone: "professional" | "friendly" | "trendy" | "minimal" | "bold";

  // 6. 핵심 차별화 포인트
  uniqueSellingPoint: string[];
}
```

**Planning Mode 진입해서:**

1. 벤치마킹 3곳 디자인 트렌드 분석 (색감/레이아웃/CTA 위치)
2. 타겟 페르소나 기반 UX 플로우 설계
3. 전환율 높일 마이크로카피 전략 수립
4. **Refactoring UI 원칙 체크리스트 검토**
5. **플랫폼 함정 체크리스트 사전 검토** (NEW)

---

### 🎨 Phase 2: Refactoring UI 디자인 시스템 (핵심)

**CRITICAL: 아래 원칙 100% 준수**

#### 📐 1. 시각적 계층 구조 (Visual Hierarchy)

```typescript
// 크기만으로 계층 만들지 마라! 색상 + 굵기 + 크기 조합
const hierarchy = {
  // Primary (가장 중요): 크고 + 굵고 + 진함
  primary: {
    fontSize: "text-3xl md:text-5xl",
    fontWeight: "font-extrabold", // 800
    color: "text-grey-900", // 가장 진한 색
  },
  // Secondary (중요): 중간 + 중간굵기 + 중간색
  secondary: {
    fontSize: "text-lg md:text-xl",
    fontWeight: "font-semibold", // 600
    color: "text-grey-700",
  },
  // Tertiary (보조): 작고 + 일반 + 연함
  tertiary: {
    fontSize: "text-sm md:text-base",
    fontWeight: "font-normal", // 400
    color: "text-grey-500",
  },
  // Supporting (배경): 가장 연함
  supporting: {
    fontSize: "text-xs",
    fontWeight: "font-normal",
    color: "text-grey-400",
  },
};
```

#### 📏 2. 간격 시스템 (Spacing System)

```typescript
// 4px 또는 8px 기반 시스템 - 임의의 숫자 금지!
const spacing = {
  "space-1": "4px", // 0.25rem
  "space-2": "8px", // 0.5rem
  "space-3": "12px", // 0.75rem
  "space-4": "16px", // 1rem
  "space-5": "24px", // 1.5rem
  "space-6": "32px", // 2rem
  "space-7": "48px", // 3rem
  "space-8": "64px", // 4rem
  "space-9": "96px", // 6rem
  "space-10": "128px", // 8rem
  usage: {
    "관련 요소 사이": "space-2 ~ space-4", // 8-16px
    "요소 그룹 사이": "space-5 ~ space-6", // 24-32px
    "섹션 사이": "space-7 ~ space-9", // 48-96px
    "컴포넌트 내부 패딩": "space-4 ~ space-6", // 16-32px
  },
};
```

#### 🎨 3. 색상 시스템 (Color System)

```typescript
// 모든 색상은 050-900 스케일로 정의
const colorSystem = {
  grey: {
    "050": "#F7FAFC",
    "100": "#EDF2F7",
    "200": "#E2E8F0",
    "300": "#CBD5E0",
    "400": "#A0AEC0",
    "500": "#718096",
    "600": "#4A5568",
    "700": "#2D3748",
    "800": "#1A202C",
    "900": "#171923",
  },
  primary: {
    /* 업종별 자동 선택, 같은 050-900 스케일 */
  },
  usage: {
    "050-200": "배경, 호버 상태, 보더",
    "300-400": "비활성, placeholder, 보조 아이콘",
    "500-600": "버튼, 링크, CTA",
    "700-900": "제목, 본문 텍스트",
  },
};
```

#### 🔲 4. Border Radius 전략

```typescript
const radiusStrategy = {
  professional: { sm: "4px", md: "6px", lg: "8px", xl: "12px" },
  balanced: { sm: "6px", md: "8px", lg: "12px", xl: "16px" },
  playful: { sm: "8px", md: "12px", lg: "16px", xl: "24px" },
  rule: "버튼(sm) < 카드(md) < 모달(lg) < 히어로(xl)",
};
```

#### 🌓 5. 그림자 시스템 (Shadow System)

```typescript
const shadows = {
  sm: "0 1px 2px rgba(0,0,0,0.05)", // 카드, 입력 필드
  md: "0 4px 6px rgba(0,0,0,0.07)", // 드롭다운, 팝오버
  lg: "0 10px 15px rgba(0,0,0,0.1)", // 모달, 토스트
  xl: "0 20px 25px rgba(0,0,0,0.15)", // 풀스크린 오버레이
  primary: "0 10px 25px -5px rgba(PRIMARY_COLOR, 0.3)", // 버튼 호버용
};
```

#### ↕️ 6. 타이포그래피 (Typography)

```typescript
const typography = {
  sizes: {
    xs: "12px",
    sm: "14px",
    base: "16px",
    lg: "18px",
    xl: "20px",
    "2xl": "24px",
    "3xl": "32px",
    "4xl": "48px",
  },
  lineHeight: {
    "본문 (14-18px)": "1.6-1.8",
    "제목 (24-32px)": "1.3-1.4",
    "대형 제목 (48px+)": "1.1-1.2",
  },
  weights: {
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
  },
};
```

#### ✨ 7. 마무리 터치 (Finishing Touches)

```typescript
const finishingTouches = {
  hover: {
    button: "hover:brightness-105 hover:shadow-lg",
    card: "hover:-translate-y-1 hover:shadow-md",
    link: "hover:text-primary-600",
  },
  transition: {
    fast: "duration-150",
    normal: "duration-200",
    slow: "duration-300",
  },
  focus: {
    ring: "focus:ring-2 focus:ring-primary-500 focus:ring-offset-2",
    outline: "focus:outline-none",
  },
  states: {
    loading: "스켈레톤/스피너",
    empty: "친근한 빈 상태",
    error: "빨간 보더+메시지",
    success: "초록 체크+메시지",
  },
};
```

---

### ⚡️ Phase 3: 프로젝트 셋업 (자동)

> 완료 후 출력: `✅ [3/10] 프로젝트 셋업 완료: [프로젝트명, 패키지 수]`

```bash
npx create-next-app@latest ${PROJECT_NAME} \
  --typescript --tailwind --app --eslint \
  --import-alias "@/*"

cd ${PROJECT_NAME}

# shadcn 초기화 (스타일: New York, 컬러: 자동 매칭)
npx shadcn@latest init -y

# 필수 패키지 일괄 설치
npm install -D \
  framer-motion \
  lucide-react \
  react-hook-form @hookform/resolvers/zod zod \
  class-variance-authority clsx tailwind-merge \
  @radix-ui/react-slot

# shadcn 컴포넌트 배칭
npx shadcn@latest add button card input badge separator accordion tabs
```

**폴더 구조 자동 생성:**

```
${PROJECT_NAME}/
├─ app/
│  ├─ layout.tsx        # ← 폰트 최적화 + 메타데이터
│  ├─ page.tsx          # ← 메인 조립 파일
│  └─ globals.css       # ← Refactoring UI 디자인 토큰
├─ components/
│  ├─ ui/               # ← shadcn 자동 생성
│  └─ sections/         # ← 섹션 컴포넌트들
│     ├─ Hero.tsx
│     ├─ SocialProof.tsx
│     ├─ Features.tsx
│     ├─ HowItWorks.tsx    # (옵션)
│     ├─ Pricing.tsx       # (옵션)
│     ├─ Testimonials.tsx  # (옵션)
│     ├─ CTA.tsx
│     └─ Footer.tsx
├─ lib/
│  ├─ utils.ts
│  ├─ constants.ts      # ← 고객 데이터 집중
│  └─ design-tokens.ts  # ← Refactoring UI 토큰
├─ public/
│  └─ images/
│     ├─ hero/
│     ├─ features/
│     └─ testimonials/
└─ docs/
   └─ midjourney-prompts.md
```

---

### 🎨 Phase 4: globals.css 디자인 토큰 (Refactoring UI)

> 완료 후 출력: `✅ [4/10] 디자인 토큰 완료: [Primary 컬러, 스타일명]`

```css
/* app/globals.css */
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    /* ===== REFACTORING UI 디자인 토큰 ===== */

    /* Grey Scale (필수) */
    --grey-050: #f7fafc;
    --grey-100: #edf2f7;
    --grey-200: #e2e8f0;
    --grey-300: #cbd5e0;
    --grey-400: #a0aec0;
    --grey-500: #718096;
    --grey-600: #4a5568;
    --grey-700: #2d3748;
    --grey-800: #1a202c;
    --grey-900: #171923;

    /* Primary Color (업종별 자동 생성) */
    --primary-050: /* 자동 */;
    --primary-100: /* 자동 */;
    /* ... 050-900 전체 스케일 */

    /* Spacing Scale (4px 기반) */
    --space-1: 4px;
    --space-2: 8px;
    --space-3: 12px;
    --space-4: 16px;
    --space-5: 24px;
    --space-6: 32px;
    --space-7: 48px;
    --space-8: 64px;
    --space-9: 96px;
    --space-10: 128px;

    /* Border Radius, Shadows, Typography, Transitions */
    --radius-sm: 6px;
    --radius-md: 8px;
    --radius-lg: 12px;
    --radius-xl: 16px;
    --radius-full: 9999px;
    --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);
    --shadow-md: 0 4px 6px rgba(0, 0, 0, 0.07);
    --shadow-lg: 0 10px 15px rgba(0, 0, 0, 0.1);
    --shadow-xl: 0 20px 25px rgba(0, 0, 0, 0.15);
    --transition-fast: 150ms;
    --transition-normal: 200ms;
    --transition-slow: 300ms;
  }
}
```

---

### 🔥 Phase 5: 컴포넌트 개발 (Refactoring UI 적용)

> 완료 후 출력: `✅ [5/10] 컴포넌트 완료: [구현된 섹션 목록]`

**각 섹션 개발 시 MUST-HAVE:**

#### ✨ 마이크로 인터랙션 체크리스트

```typescript
const microInteractions = {
  // 1. 버튼 - 그림자 + 살짝 위로
  button: {
    base: "transition-all duration-200",
    hover: "hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary-500/20",
    active: "active:translate-y-0 active:shadow-md",
    focus: "focus:ring-2 focus:ring-primary-500/50 focus:outline-none",
  },
  // 2. 카드 - 그림자 증가 + 살짝 위로
  card: {
    base: "transition-all duration-200 shadow-sm",
    hover: "hover:-translate-y-1 hover:shadow-md hover:border-primary-200",
  },
  // 3. 아이콘 - 회전 + 색상 변화
  icon: {
    hover:
      "group-hover:rotate-6 group-hover:scale-110 group-hover:text-primary-500",
    transition: "transition-all duration-200",
  },
  // 4. 스크롤 애니메이션 (Framer Motion)
  // CRITICAL: ease 타입은 반드시 "easeOut" as const
  scroll: {
    fadeInUp: {
      initial: { opacity: 0, y: 20 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true, margin: "-100px" },
      transition: { duration: 0.5, ease: "easeOut" as const },
    },
    stagger: {
      container: { staggerChildren: 0.1 },
      item: { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 } },
    },
  },
  // 5. 숫자 카운트업
  countUp: "Framer Motion animate + useInView",
};
```

#### 📱 반응형 규칙 (모바일 퍼스트)

```typescript
const responsive = {
  mobile: { fontSize: "text-3xl", padding: "px-4 py-12", grid: "grid-cols-1" },
  sm: { fontSize: "sm:text-4xl", padding: "sm:px-6 sm:py-14" },
  md: {
    fontSize: "md:text-5xl",
    padding: "md:px-8 md:py-16",
    grid: "md:grid-cols-2",
  },
  lg: {
    fontSize: "lg:text-6xl",
    padding: "lg:px-12 lg:py-20",
    grid: "lg:grid-cols-3",
  },
  xl: { fontSize: "xl:text-7xl", padding: "xl:container xl:mx-auto" },
};
```

---

### 🖼️ Phase 6: 미드저니 프롬프트 자동 생성

> 완료 후 출력: `✅ [6/10] 미드저니 프롬프트 완료: /docs/midjourney-prompts.md 생성`

**`/docs/midjourney-prompts.md` 파일 자동 생성 규칙:**

```markdown
# [회사명] 이미지 생성 가이드

생성일: [오늘 날짜]
업종: [업종] / 타겟: [타겟 고객]
브랜드: [Primary #HEX], [Secondary #HEX]
분위기: [톤앤매너] / 디자인 스타일: [스타일명]

---

## 1. Hero Background (1920x1080)

### 프롬프트 A (추천)

[업종 특화 장면], [브랜드 컬러] color scheme, [타겟] perspective,
professional photography, clean composition, soft lighting,
depth of field, modern aesthetic, 8k, no text, no watermark
--ar 16:9 --v 6.1 --style raw --q 2

## 2. Feature Icons/Illustrations (800x600)

[각 기능별 프롬프트 자동 생성]

## 3. Testimonial Profiles (400x400)

[타겟 페르소나 기반 프롬프트]
```

**팁**: DO → 브랜드 컬러 HEX, "no text, no watermark", 8k / DON'T → 텍스트 포함, 유명인, 저작권 브랜드명

---

### 📊 Phase 7: SEO & Performance (인사이트 강화)

> 완료 후 출력: `✅ [7/10] SEO 완료: [sitemap, robots, OG, 파비콘 상태]`

**CRITICAL: SEO 설정 14세션 반복 - 아래 체크리스트 100% 완료 필수**

```typescript
// app/layout.tsx
export const metadata: Metadata = {
  title: `[서비스명] - [핵심 메시지]`,
  description: `[타겟]을 위한 [USP]. [Pain Point 해결] [CTA].`,
  keywords: "[업종 키워드], [기능 키워드]...",
  openGraph: {
    title: "[서비스명]",
    description: "[120자 요약]",
    type: "website",
    url: "https://[프로덕션-도메인]", // ← localhost 금지!
    images: [
      {
        url: "https://[프로덕션-도메인]/og-image.png",
        width: 1200,
        height: 630, // ← 반드시 1200x630
        alt: "[서비스명] 대표 이미지",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "[서비스명]",
    images: ["/og-image.png"],
  },
  robots: { index: true, follow: true },
  verification: { google: "[구글 인증 코드]" },
};
```

**SEO 필수 파일 체크리스트:**

| 파일         | 요구사항                     |
| ------------ | ---------------------------- |
| `sitemap.ts` | 프로덕션 도메인으로 URL 생성 |
| `robots.ts`  | sitemap URL 포함             |
| OG 이미지    | 1200x630px, PNG 포맷         |
| 파비콘       | **PNG 포맷 (ICO 금지!)**     |
| 구글/네이버  | 검색 콘솔 인증 메타태그      |

**이미지 최적화**: Hero = `priority` + `placeholder="blur"`, 나머지 = `loading="lazy"`, 반드시 `next/image` 사용

---

### ✅ Phase 8: 검수 & 완료 (인사이트 기반 강화)

> 완료 후 출력: `✅ [8/10] 빌드 검증 완료: [빌드 결과, Validation Suite 결과]`

**자동 체크리스트:**

```bash
# 빌드 테스트 (CRITICAL: 배포 전 반드시 통과!)
npm run build

# Refactoring UI 체크리스트
- [ ] 시각적 계층 (크기+색상+굵기 조합)
- [ ] 일관된 간격 (4/8px 스케일만 사용)
- [ ] 색상 시스템 (050-900 스케일)
- [ ] 일관된 border-radius
- [ ] 그림자 시스템 (sm/md/lg/xl)
- [ ] 모든 호버 상태 적용
- [ ] 트랜지션 0.2-0.3s
- [ ] 포커스 스타일 (접근성)
```

#### 🔍 Validation Suite (빌드 전 자동 검증)

```typescript
const validationSuite = {
  buildSafety: "npm run build 실행 후 에러 파싱",
  deadImports: "모든 .tsx 파일에서 package.json에 없는 패키지 임포트 스캔",
  envVarSafety: "Supabase/API 클라이언트 초기화 시 환경변수 null 체크 확인",
  faviconFormat: "파비콘이 PNG 포맷인지, 올바른 경로에 존재하는지 확인",
  ogImageValidation: "OG 이미지 1200x630, 프로덕션 도메인, 파일 존재 확인",
  unusedCSS: "제거된 패키지를 참조하는 CSS 임포트 확인",
  mobileViewport: "올바른 viewport 메타태그 확인",
};
```

---

### 🚢 Phase 9: GitHub & Vercel 자동 배포 (인사이트 강화)

> 완료 후 출력: `✅ [9/10] GitHub 업로드 완료: [레포 URL]`
> 이어서 출력: `✅ [10/10] Vercel 배포 완료: [프로덕션 URL]`

**CRITICAL: 빌드 실패 상태로 절대 푸시하지 않기!**

```bash
# 0. 빌드 검증 (MUST - 이 단계 건너뛰기 금지!)
npm run build
# 실패하면 여기서 멈추고 에러 수정 후 재시도

# 1. 모든 파일 스테이징
git add -A

# 2. 커밋
git commit -m "$(cat <<'EOF'
feat: [서비스명] 랜딩페이지 MVP 완성

- Hero, Problem, Solution, Features, CTA, Footer 섹션 구현
- Refactoring UI 디자인 시스템 적용
- 마이크로 인터랙션 및 Framer Motion 애니메이션
- 완전 반응형 (모바일/태블릿/데스크톱)
- SEO 최적화 메타태그

Co-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>
EOF
)"

# 3. GitHub 레포 생성 + 푸시 (gh CLI)
gh repo create [레포명] --private \
  --description "[서비스명] 랜딩페이지" \
  --source=. --push
```

### 🚀 Vercel 배포 (자동)

```bash
# 프로덕션 배포 (승빈위 팀)
vercel --prod --scope seungbeen-wis-projects -y
```

### ⚙️ 배포 설정 자동화

**vercel.json 자동 생성 (프로젝트 루트):**

```json
{
  "framework": "nextjs",
  "buildCommand": "npm run build",
  "outputDirectory": ".next",
  "regions": ["icn1"]
}
```

---

### 📦 최종 보고 (이 포맷으로 출력)

```
## 배포 완료! 🎉

### GitHub
https://github.com/wjb127/[repo-name]

### Vercel Production
https://[project-name].vercel.app

### Validation Suite 결과
- ✅ 빌드: 성공
- ✅ Dead imports: 없음
- ✅ 환경변수: null 체크 완료
- ✅ 파비콘: PNG 포맷 확인
- ✅ OG 이미지: 1200x630, 프로덕션 도메인
- ✅ SEO: sitemap, robots, 메타태그 완료

### 전체 Phase 완료 확인
| # | Phase | 상태 |
|---|-------|------|
| 1 | 컨텍스트 확인 | ✅ |
| 2 | 디자인 분석 | ✅ |
| 3 | 프로젝트 셋업 | ✅ |
| 4 | 디자인 토큰 | ✅ |
| 5 | 컴포넌트 개발 | ✅ |
| 6 | 미드저니 프롬프트 | ✅ |
| 7 | SEO 설정 | ✅ |
| 8 | 빌드 검증 | ✅ |
| 9 | GitHub 업로드 | ✅ |
| 10 | Vercel 배포 | ✅ |

### 다음 단계
1. 커스텀 도메인 연결 (Vercel Dashboard)
2. 환경변수 설정 (필요시)
3. 검색 콘솔 등록 (Google + Naver)
4. www 리다이렉트 설정 (Vercel Dashboard에서 - 코드 아님!)
```

---

## 🚀 실행 명령 (원샷 - 인사이트 최적화)

```
클로드야, 위에 [고객 요구사항] 보고 Phase 0(컨텍스트 확인)부터 시작해서 완성까지 쭉 진행해줘.

특히:
1. Phase 0에서 모든 입력 자료 확인 완료 후 시작
2. 벤치마킹 3곳 크롤링해서 디자인 트렌드 파악
3. Refactoring UI 원칙 100% 적용 (시각적 계층, 간격, 색상, radius, 그림자)
4. 업종 맞는 디자인 스타일 자동 선택
5. 브랜드 컬러 없으면 050-900 스케일로 자동 생성
6. 마이크로 인터랙션 퀄리티 높게
7. 미드저니 프롬프트 업종 특화로
8. 모바일 반응형 완벽하게
9. Validation Suite 전체 통과 확인
10. GitHub: private 레포로 생성
11. Vercel: seungbeen-wis-projects 팀으로 배포

요청하지 않은 변경 절대 하지 마.
테스트는 네가 직접 해. 나한테 수동 테스트 요청하지 마.
빌드 실패하면 푸시하지 말고 수정해.

끝나면 GitHub URL, Vercel URL, Validation Suite 결과, 전체 Phase 완료 테이블 알려줘!
```

---

## 🔄 일괄 작업 모드 (NEW - 인사이트 기반)

> 6개 프로젝트 전화번호 일괄 업데이트 같은 작업에 활용

### 헤드리스 모드 (비대화식)

```bash
for dir in ~/Project/km-*-landing; do
  cd "$dir"
  claude -p "[변경 사항 설명]. 모든 파일에서 적용하고 빌드 확인 후 커밋/푸시해줘." \
    --allowedTools "Edit,Read,Bash,Write,Grep"
done
```

### 병렬 에이전트 모드

```
클로드야, 다음 변경을 여러 프로젝트에 동시에 적용해줘.
서브 에이전트를 사용해서 각 프로젝트를 병렬로 처리해.

변경 사항: [...]
대상 프로젝트: [...]

결과를 테이블로 보고해줘: 프로젝트명, 변경 파일 수, 빌드 상태, 푸시 상태.
```

---

## 🎯 2차 작업 업그레이드 (별도 계약)

```
[ ] Supabase DB 연동     [ ] 이메일 알림 (Resend)    [ ] 관리자 대시보드
[ ] Google Analytics 4   [ ] 카카오톡 상담 연동       [ ] 결제 시스템 (Toss/Stripe)
[ ] 다국어 지원 (i18n)    [ ] CMS 연동               [ ] A/B 테스팅
[ ] 커스텀 도메인 + HTTPS [ ] 실제 이미지 교체         [ ] Telegram/SMS 알림
```

---

## 🔄 재배포 명령 (수정 후)

```
클로드야, 수정사항 반영해서 다시 배포해줘:
1. Validation Suite 실행
2. 변경사항 커밋
3. GitHub 푸시
4. Vercel 재배포

커밋 메시지: "[수정 내용 요약]"
빌드 실패하면 절대 푸시하지 마!
```

---

## 📚 참고: Refactoring UI 디자인 시스템 경로

```bash
~/landing-templates/design-systems/refactoring-ui-base.json
~/landing-templates/design-systems/saas-modern.json
~/landing-templates/design-systems/ecommerce-clean.json
~/landing-templates/design-systems/healthcare-trust.json
~/landing-templates/design-systems/fintech-professional.json

# Refactoring UI 갤러리 예제
~/Project/refactoring-ui-practice/nextjs-gallery/src/app/
```

---

## 📊 변경 이력

| 버전 | 날짜       | 변경 사항                                                                                                                            |
| ---- | ---------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| v2.1 | -          | Refactoring UI 디자인 시스템 통합                                                                                                    |
| v3.0 | 2026-02-11 | 인사이트 기반 개선: Phase 0, 필수 규칙 4개, Validation Suite, 일괄 작업 모드, 플랫폼 함정, SEO 강화, 빌드 검증 필수화                |
| v4.0 | 2026-02-18 | Anti-Skip 시스템: 역할/완료조건 명시, 10단계 마스터 체크리스트, Phase 게이트 출력 강제, 최종보고 템플릿, Recency Bias 활용 끝단 반복 |

---

## 🔁 최종 리마인더 (Recency Bias - 이 섹션이 프롬프트의 마지막!)

**작업이 끝났다고 생각되면, 아래 3가지를 반드시 확인해:**

1. `npm run build` 성공했는가?
2. `gh repo create --private --source=. --push` 실행했는가?
3. `vercel --prod --scope seungbeen-wis-projects -y` 실행했는가?

**3가지 중 하나라도 안 했으면 → 지금 즉시 실행해!**
**3가지 모두 했으면 → 위의 "최종 보고" 포맷으로 결과 출력해!**

⚠️ GitHub URL과 Vercel URL을 출력하지 않았다면 작업은 아직 미완성이다.
