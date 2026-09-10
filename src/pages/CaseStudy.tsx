import type { ReactNode } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { CardArt } from "@/components/site/CardArt";
import { RevealOnScroll } from "@/components/site/RevealOnScroll";
import { caseStudies } from "@/lib/data";

export function CaseStudy() {
  const { slug } = useParams();
  const study = caseStudies.find((s) => s.slug === slug);

  if (!study) return <Navigate to="/" replace />;

  return (
    <article className="container max-w-3xl py-16 sm:py-24">
      <RevealOnScroll>
        <Link
          to="/#work"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="size-4" /> Back to work
        </Link>

        <h1 className="mt-6 text-balance text-3xl font-semibold tracking-tight sm:text-5xl">
          {study.title}
        </h1>
        <p className="mt-5 text-lg text-muted-foreground">{study.summary}</p>

        <div className="mt-8">
          <CardArt art={study.cardArt} image={study.image} alt={study.title} />
        </div>

        <p className="mt-8 text-lg">{study.intro}</p>

        <div className="mt-10 grid grid-cols-3 gap-4 rounded-2xl border border-white/8 bg-white/[0.02] p-6 text-sm sm:p-8">
          <div>
            <p className="text-muted-foreground">Role</p>
            <p className="mt-1 font-medium">{study.role}</p>
          </div>
          <div>
            <p className="text-muted-foreground">Year</p>
            <p className="mt-1 font-medium">{study.year}</p>
          </div>
          <div>
            <p className="text-muted-foreground">Industry</p>
            <p className="mt-1 font-medium">{study.industry}</p>
          </div>
        </div>
      </RevealOnScroll>

      <Section title="Challenge" delay={50}>
        {study.challenge.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </Section>

      <Section title="Role" delay={0}>
        {study.roleDetail.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </Section>

      <Section title="Impact" delay={0}>
        {study.impact.intro && <p>{study.impact.intro}</p>}
        {study.impact.points.length > 0 && (
          <ul className="space-y-3">
            {study.impact.points.map((pt, i) => (
              <li key={i} className="flex gap-3">
                <span className="mt-2 size-1.5 shrink-0 rounded-full bg-foreground" />
                <span>{pt}</span>
              </li>
            ))}
          </ul>
        )}
      </Section>

      <RevealOnScroll>
        <div className="my-16 grid grid-cols-2 gap-8 sm:grid-cols-3">
          {study.impactStats.map((s) => (
            <div key={s.label}>
              <p className="text-3xl font-semibold sm:text-4xl">{s.value}</p>
              <p className="mt-2 text-sm text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>
      </RevealOnScroll>

      {study.gallery.length > 0 && (
        <RevealOnScroll>
          <div className="my-16 grid gap-6 sm:grid-cols-2">
            {study.gallery.map((g, i) => (
              <figure key={i}>
                <CardArt art={study.cardArt} image={g.image} alt={g.caption} />
                <figcaption className="mt-3 text-sm text-muted-foreground">
                  {g.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </RevealOnScroll>
      )}

      <Section title={study.behindClosedDoors.heading} delay={0}>
        {study.behindClosedDoors.paragraphs.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
        {study.behindClosedDoors.actions && (
          <ul className="space-y-4">
            {study.behindClosedDoors.actions.map((a, i) => (
              <li key={i} className="flex gap-3">
                <span className="mt-2 size-1.5 shrink-0 rounded-full bg-foreground" />
                <span>{a}</span>
              </li>
            ))}
          </ul>
        )}
      </Section>

      {study.quote && (
        <RevealOnScroll>
          <blockquote className="my-14 border-l-2 border-white/15 pl-6 text-xl italic text-foreground/90">
            “{study.quote.text}”
            <footer className="mt-3 text-sm not-italic text-muted-foreground">
              {study.quote.attribution}
            </footer>
          </blockquote>
        </RevealOnScroll>
      )}

      <Section title="Learning" delay={0}>
        {study.learning.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </Section>

      <Separator className="my-16" />

      <RevealOnScroll>
        <div className="flex flex-wrap gap-2">
          <Badge>{study.industry}</Badge>
          <Badge>{study.year}</Badge>
        </div>
      </RevealOnScroll>
    </article>
  );
}

function Section({
  title,
  children,
  delay = 0,
}: {
  title: string;
  children: ReactNode;
  delay?: number;
}) {
  return (
    <RevealOnScroll delay={delay}>
      <section className="mt-14">
        <h2 className="text-2xl font-semibold tracking-tight">{title}</h2>
        <div className="mt-5 space-y-4 text-muted-foreground [&_li]:text-muted-foreground">
          {children}
        </div>
      </section>
    </RevealOnScroll>
  );
}
