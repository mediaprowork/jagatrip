export function initReveal() {
  if (typeof IntersectionObserver === 'undefined') return;

  // Mark JS as loaded — CSS will then hide .reveal items (opacity:0) until
  // observer triggers. Without JS, items remain visible (progressive enhancement).
  document.documentElement.classList.add('js-loaded');

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
  );

  document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
}
