import { useEffect, useRef } from "react";

import { CaseStudyCard } from "@/components/site/CaseStudyCard";
import { RevealOnScroll } from "@/components/site/RevealOnScroll";
import type { CaseStudy } from "@/lib/data";

// All cards render at full width. As the user scrolls, each sticky card gets
// covered by the next one stacking on top of it, and shrinks a little for
// every card that has since stacked on top of it — the shrink is cumulative,
// not a one-time flip, so depth keeps building the further back a card is.
// By the end of the gallery the first card is the smallest, each one after
// it a little larger, down to the currently active card at full size.
const PER_LEVEL_SHRINK = 0.04; // ~4% smaller for each additional card stacked on top
const FLOOR_SCALE = 0.78; // safety floor so a long gallery never gets unreadably small

export function StackedCaseStudies({ caseStudies }: { caseStudies: CaseStudy[] }) {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    let rafId: number | null = null;

    const update = () => {
      rafId = null;
      const cards = cardRefs.current;
      const n = cards.length;

      // How far each card has been covered by the one right after it (0 =
      // not covered yet, 1 = fully handed off to the next card).
      const transitions: number[] = new Array(Math.max(n - 1, 0)).fill(0);
      for (let k = 0; k < n - 1; k++) {
        const current = cards[k];
        const next = cards[k + 1];
        if (!current || !next) continue;
        const currentRect = current.getBoundingClientRect();
        const nextRect = next.getBoundingClientRect();
        const overlap = Math.max(0, currentRect.bottom - nextRect.top);
        const normalizer = Math.max(currentRect.height * 0.6, 1);
        transitions[k] = Math.min(1, overlap / normalizer);
      }

      // Compound a small shrink for every transition that has happened at or
      // beyond this card's own position, so depth accumulates: a card buried
      // under five later cards shrinks more than one buried under just one.
      for (let i = 0; i < n; i++) {
        const card = cards[i];
        if (!card) continue;
        let scale = 1;
        for (let k = i; k < n - 1; k++) {
          scale *= 1 - PER_LEVEL_SHRINK * transitions[k];
        }
        scale = Math.max(scale, FLOOR_SCALE);
        card.style.transform = scale < 1 ? `scale(${scale})` : "";
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
