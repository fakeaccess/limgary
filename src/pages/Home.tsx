import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { LogoMarquee } from "@/components/site/LogoMarquee";
import { CaseStudyCard } from "@/components/site/CaseStudyCard";
import { RevealOnScroll } from "@/components/site/RevealOnScroll";
import { caseStudies, experience, heroAvatar, siteMeta } from "@/lib/data";

export function Home() {
  return (
    <div>
      <section className="relative overflow-hidden pb-24 pt-20 text-center sm:pt-28">
        <div
          className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[420px] w-[720px] -translate-x-1/2 animate-glow rounded-full bg-violet-600/20 blur-[120px]"
          aria-hidden="true"
        />
        <div className="container flex flex-col items-center">
          <img
            src={heroAvatar}
            alt={siteMeta.name}
            className="size-24 rounded-full border border-white/10 object-cover"
            loading="eager"
          />
          <h1 className="mt-8 text-balance text-4xl font-semibold tracking-tight sm:text-6xl">
            Chaos to Clarity
          </h1>
          <p className="mt-6 max-w-xl text-balance text-muted-foreground sm:text-lg">
            Gary is a product design leader who bridges the gap between strategic vision and
            hands-on execution, turning ambitious challenges into elegant, user-centered
            solutions.
          </p>
          <Button asChild size="lg" variant="outline" className="mt-10">
            <a href="#work">
              View work <ArrowRight className="size-4" />
            </a>
          </Button>
        </div>
      </section>

      <LogoMarquee />

      <section id="work" className="container scroll-mt-20 py-24 sm:py-32">
        <div className="flex flex-col gap-10">
          {caseStudies.map((study, i) => {
            const stackWidth = 100 - (caseStudies.length - 1 - i) * 2.5;
            return (
              <div
                key={study.slug}
                className="mx-auto w-full rounded-3xl md:sticky md:w-[var(--stack-w)] md:bg-background"
                style={{
                  top: `${88 + i * 16}px`,
                  zIndex: i + 1,
                  ["--stack-w" as string]: `${stackWidth}%`,
                }}
              >
                <RevealOnScroll>
                  <CaseStudyCard study={study} reverse={i % 2 === 1} />
                </RevealOnScroll>
              </div>
            );
          })}
        </div>
      </section>

      <section id="experience" className="border-t border-white/5">
        <div className="container scroll-mt-20 py-24 sm:py-32">
          <RevealOnScroll>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Experience</h2>
          </RevealOnScroll>
          <div className="mt-12 divide-y divide-white/5">
            {experience.map((e) => (
              <RevealOnScroll key={e.company}>
                <div className="flex flex-col gap-2 py-6 sm:grid sm:grid-cols-[280px_1fr_96px] sm:items-center sm:gap-6">
                  <div className="flex items-center gap-3">
                    <span className="text-lg font-medium">{e.company}</span>
                    {e.tag && (
                      <span className="rounded-full border border-white/15 px-2.5 py-0.5 text-xs text-muted-foreground">
                        {e.tag}
                      </span>
                    )}
                  </div>
                  <span className="text-muted-foreground sm:text-left">{e.role}</span>
                  <span className="text-sm text-muted-foreground sm:text-right">{e.year}</span>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/5">
        <div className="container py-24 text-center sm:py-32">
          <RevealOnScroll>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">More projects</h2>
            <p className="mx-auto mt-4 max-w-md text-muted-foreground">
              Additional works include projects across banking, telecommunications, and consumer
              products, demonstrating range across industries and problem types.
            </p>
            <Button asChild variant="outline" className="mt-8">
              <a href={siteMeta.moreProjects} target="_blank" rel="noreferrer">
                Explore more
              </a>
            </Button>
          </RevealOnScroll>
        </div>
      </section>
    </div>
  );
}
