import { RevealOnScroll } from "@/components/site/RevealOnScroll";
import { aboutContent, aboutStats } from "@/lib/data";

export function About() {
  return (
    <div className="container py-20 sm:py-28">
      <RevealOnScroll>
        <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
          About
        </p>
        <h1 className="mt-4 max-w-3xl text-balance text-3xl font-semibold tracking-tight sm:text-5xl">
          {aboutContent.heading}
        </h1>
      </RevealOnScroll>

      <RevealOnScroll delay={100}>
        <div className="mt-14 grid grid-cols-1 gap-8 border-y border-white/5 py-10 sm:grid-cols-3">
          {aboutStats.map((s) => (
            <div key={s.label}>
              <p className="text-4xl font-semibold">{s.value}</p>
              <p className="mt-2 text-sm text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>
      </RevealOnScroll>

      <div className="mt-14 grid gap-14 md:grid-cols-[1.3fr_1fr]">
        <RevealOnScroll>
          <div className="space-y-6 text-muted-foreground">
            {aboutContent.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
            <p>{aboutContent.closing}</p>
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={100}>
          <div className="rounded-2xl border border-white/8 bg-white/[0.02] p-8">
            <h2 className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
              Career Highlights
            </h2>
            <ul className="mt-6 space-y-4">
              {aboutContent.highlights.map((h) => (
                <li key={h} className="flex gap-3 text-sm">
                  <span className="mt-1 size-1.5 shrink-0 rounded-full bg-foreground" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>
        </RevealOnScroll>
      </div>
    </div>
  );
}
