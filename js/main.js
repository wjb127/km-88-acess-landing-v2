/* ===== 메인 JavaScript ===== */

document.addEventListener('DOMContentLoaded', () => {
  initHeader();
  initMobileMenu();
  initScrollAnimations();
  initCtaBar();
  initBackToTop();
});

/* ===== 헤더 스크롤 효과 ===== */
function initHeader() {
  const header = document.querySelector('.header');
  if (!header) return;

  let lastScroll = 0;

  window.addEventListener('scroll', () => {
    const currentScroll = window.scrollY;
    if (currentScroll > 10) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
    lastScroll = currentScroll;
  }, { passive: true });
}

/* ===== 모바일 메뉴 토글 ===== */
function initMobileMenu() {
  const menuBtn = document.querySelector('.menu-btn');
  const mobileNav = document.querySelector('.nav-mobile');
  if (!menuBtn || !mobileNav) return;

  menuBtn.addEventListener('click', () => {
    const isOpen = mobileNav.classList.toggle('open');
    menuBtn.setAttribute('aria-expanded', isOpen);
    menuBtn.innerHTML = isOpen ? '✕' : '☰';
  });

  // 메뉴 링크 클릭 시 닫기
  mobileNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mobileNav.classList.remove('open');
      menuBtn.setAttribute('aria-expanded', 'false');
      menuBtn.innerHTML = '☰';
    });
  });

  // 외부 클릭 시 닫기
  document.addEventListener('click', (e) => {
    if (!menuBtn.contains(e.target) && !mobileNav.contains(e.target)) {
      mobileNav.classList.remove('open');
      menuBtn.setAttribute('aria-expanded', 'false');
      menuBtn.innerHTML = '☰';
    }
  });
}

/* ===== 스크롤 애니메이션 (IntersectionObserver) ===== */
function initScrollAnimations() {
  const elements = document.querySelectorAll('.fade-in, .stagger');
  if (!elements.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '-50px 0px'
  });

  elements.forEach(el => observer.observe(el));
}

/* ===== 하단 CTA 바 ===== */
function initCtaBar() {
  const ctaBar = document.querySelector('.cta-bar');
  const hero = document.querySelector('.hero');
  if (!ctaBar || !hero) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        ctaBar.classList.remove('visible');
      } else {
        ctaBar.classList.add('visible');
      }
    });
  }, { threshold: 0 });

  observer.observe(hero);
}

/* ===== 맨 위로 가기 버튼 ===== */
function initBackToTop() {
  const btn = document.querySelector('.back-to-top');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 600) {
      btn.classList.add('visible');
    } else {
      btn.classList.remove('visible');
    }
  }, { passive: true });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}
