# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 프로젝트 개요

뷰락쿠 vs 코락쿠 일본 변비약 비교 랜딩페이지. 순수 HTML/CSS/JS 정적 사이트 (프레임워크 없음).
Vercel 정적 호스팅으로 배포. 프로덕션: https://km-88-acess-landing-v2.vercel.app

## 기술 스택

- **HTML5 + CSS3 + Vanilla JavaScript** (빌드 도구/번들러 없음)
- Google Fonts (Noto Sans KR)
- Vercel 정적 배포 (서울 리전 icn1)

## 개발 & 배포

```bash
# 로컬 서버 실행
python3 -m http.server 8000

# 배포: main 브랜치에 push하면 Vercel 자동 배포
# 빌드 명령/출력 디렉토리 없음 (정적 사이트)
```

## 파일 구조

```
index.html          # 메인 페이지 (~560줄, 8개 섹션)
css/style.css       # 메인 스타일시트 (~1270줄, CSS 변수 기반 디자인 토큰)
js/main.js          # 인터랙션 (~115줄, IntersectionObserver 기반)
images/             # 제품/히어로/OG 이미지
vercel.json         # Vercel 설정 (보안 헤더, 캐시)
prd.md              # 기획서 (제품 정보, 섹션 구성, 디자인 가이드)
```

## 페이지 섹션 구조

1. `#hero` - 히어로 (다크 배경 + 블루 그라디언트 오버레이)
2. `#byurakku` - 뷰락쿠 제품 소개
3. `#colac` - 코락쿠 제품 소개
4. `#comparison` - 비교표 (3열 테이블)
5. `#usage` - 복용법/주의사항
6. `#guide` - 직구 가이드 (4단계)
7. `#products` - 상품 카드 그리드
8. `#pricing` - 가격 비교 테이블
+ 하단 고정 CTA 바 (z-50), Back to Top 버튼 (z-40)

## CSS 디자인 시스템

CSS Custom Properties 기반. `var(--*)` 토큰 사용 필수:
- **색상**: `--primary-050` ~ `--primary-900` (블루 #1976D2 기반), `--grey-050` ~ `--grey-900`, accent 색상 (pink, green, orange, red)
- **간격**: `--space-1`(4px) ~ `--space-10`(128px)
- **반경**: `--radius-sm`(6px) ~ `--radius-full`(9999px)
- **그림자**: `--shadow-1` ~ `--shadow-4`
- **트랜지션**: `--transition-fast`(150ms), `--transition-normal`(200ms), `--transition-slow`(300ms)

## 반응형 브레이크포인트

모바일 우선. 미디어 쿼리 순서:
- 기본: 모바일
- `@media (min-width: 480px)`: 소형 태블릿
- `@media (min-width: 768px)`: 태블릿 (네비 전환점)
- `@media (min-width: 1024px)`: 데스크탑

## JS 패턴

- `initHeader()` - 스크롤 시 헤더 배경 변경
- `initMobileMenu()` - 모바일 메뉴 토글 (aria-expanded)
- `initScrollAnimations()` - IntersectionObserver로 `.fade-in` → `.visible` 전환
- `initCtaBar()` - 히어로 벗어나면 하단 CTA 바 표시
- `initBackToTop()` - 맨 위로 버튼
- 모든 scroll 이벤트에 `{ passive: true }` 사용

## 애니메이션 규칙

```css
.fade-in → .fade-in.visible  /* IntersectionObserver가 토글 */
.stagger > *                  /* 자식 요소에 순차 딜레이 */
```

## 외부 링크

- 구매 링크: https://www.taikokum.com (외부 쇼핑몰)
- 모든 외부 링크는 `target="_blank" rel="noopener noreferrer"`

## SEO

sitemap.xml, robots.txt, OG 메타태그 (1200x630), 파비콘 (PNG) 모두 설정 완료.
