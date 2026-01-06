'use client';

import { useEffect, useState } from 'react';

export function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [isFooterVisible, setIsFooterVisible] = useState(false);

  useEffect(() => {
    const header = document.getElementById('site-header');

    if (!header || typeof IntersectionObserver === 'undefined') {
      const fallbackThreshold = 320;
      const update = () => setIsVisible(window.scrollY > fallbackThreshold);
      update();
      window.addEventListener('scroll', update, { passive: true });
      return () => window.removeEventListener('scroll', update);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setIsVisible(!entry.isIntersecting);
      },
      {
        threshold: 0,
      },
    );

    observer.observe(header);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const footer = document.getElementById('site-footer');

    if (!footer || typeof IntersectionObserver === 'undefined') {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setIsFooterVisible(entry.isIntersecting);
      },
      {
        threshold: 0,
      },
    );

    observer.observe(footer);
    return () => observer.disconnect();
  }, []);

  if (!isVisible) return null;

  const wrapperClassName = isFooterVisible
    ? 'fixed inset-x-0 bottom-24 z-50 pointer-events-none'
    : 'fixed inset-x-0 bottom-6 z-50 pointer-events-none';

  return (
    <div className={wrapperClassName}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-10">
        <div className="flex justify-end -mr-2 sm:-mr-3 lg:-mr-6">
          <a
            href="#overview"
            aria-label="Back to top"
            className="cut-corner pointer-events-auto inline-flex h-12 w-12 items-center justify-center border border-slate-200 bg-white text-teal-strong shadow-[0_15px_35px_rgba(0,30,24,0.08)] ring-1 ring-white/40 transition hover:bg-sand"
          >
            <span aria-hidden className="text-lg leading-none">
              ↑
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}
