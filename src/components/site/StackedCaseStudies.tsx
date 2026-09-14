import { useEffect, useRef } from "react";

import { CaseStudyCard } from "@/components/site/CaseStudyCard";
import { RevealOnScroll } from "@/components/site/RevealOnScroll";
import type { CaseStudy } from "@/lib/data";

// All cards render at full width. As the user scrolls, each sticky card gets
// covered by the next one stacking on top of it — at that point (and only
// then) it scales down slightly, so it visually recedes into the stack
// instead of just disappearing behind the next card.
const MIN_SCALE = 0.94;

export function StackedCaseStudies({ caseStudies }: { caseStudies: CaseStudy[] }) {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    let rafId: number | null = null;

    const update = () => {
      rafId = null;
      const cards = cardRefs.current;
      for (let i = 0; i < cards.length - 1; i++) {
        const current = cards[i];
        const next = cards[i + 1];
        if (!current || !next) continue;

        // How much the next card, stacking up from below, is currently
        // covering this one.
        const currentRect = current.getBoundingClientRect();
        const nextRect = next.getBoundingClientRect();
        const overlap = Math.max(0, currentRect.bottom - nextRect.top);
        const normalizer = Math.max(currentRect.height * 0.6, 1);
        const progress = Math.min(1, overlap / normalizer);
        const scale = 1 - progress * (1 - MIN_SCALE);

        current.style.transform = scale < 1 ? `scale(${scale})` : "";
      }
    };

    const onScrollOrResize = () => {
      if (rafId !== null) return;
      rafId = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScrollOrResize, { passive: true });
    window.addEventListener("resize", onScrollOrResize);
    return () => {
      window.removeEventListener("scroll", onScrollOrResize);
      window.removeEventListener("resize", onScrollOrResize);
      if (rafId !== null) cancelAnimationFrame(rafId);
    };
  }, [caseStudies.length]);

  return (
    <div className="flex flex-col gap-10">
      {caseStudies.map((study, i) => (
        <div
          key={study.slug}
          ref={(el) => {
            cardRefs.current[i] = el;
          }}
          className="sticky mx-auto w-full origin-top rounded-3xl bg-background will-change-transform"
          style={{ top: `${88 + i * 16}px`, zIndex: i + 1 }}
        >
          <RevealOnScroll>
            <CaseStudyCard study={study} reverse={i % 2 === 1} />
          </RevealOnScroll>
        </div>
      ))}
    </div>
  );
}
