"use client";

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function GlobalScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    // Only run on client
    if (typeof window === 'undefined') return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed');
          } else {
            // Fade away when scrolling out of view
            entry.target.classList.remove('is-revealed');
          }
        });
      },
      {
        threshold: 0.1, // Trigger when 10% visible
        rootMargin: "0px 0px -50px 0px"
      }
    );

    const observeElements = () => {
      // Select elements inside main and footer to animate. 
      // Avoid animating the 3D Canvas itself.
      const elements = document.querySelectorAll(
        'main h1, main h2, main h3, main p, main img, main a, main button, footer h2, footer p, footer a'
      );
      
      elements.forEach((el) => {
        if (!el.classList.contains('reveal-base')) {
          el.classList.add('reveal-base');
          observer.observe(el);
        }
      });
    };

    // Run slightly after mount to ensure DOM is ready
    const timer = setTimeout(observeElements, 100);

    // Setup mutation observer for dynamically added elements
    const mutationObserver = new MutationObserver(() => {
      observeElements();
    });

    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      clearTimeout(timer);
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, [pathname]);

  return null;
}
