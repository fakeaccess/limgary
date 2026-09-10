import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

import { CardArt } from "@/components/site/CardArt";
import { Button } from "@/components/ui/button";
import type { CaseStudy } from "@/lib/data";

export function CaseStudyCard({ study, reverse }: { study: CaseStudy; reverse?: boolean }) {
  return (
    <div className="group grid gap-8 rounded-3xl border border-white/8 bg-white/[0.02] p-6 transition-colors hover:border-white/15 sm:p-10 md:grid-cols-2 md:items-center md:gap-12">
      <div className={reverse ? "md:order-2" : ""}>
        <h3 className="text-balance text-2xl font-semibold tracking-tight sm:text-3xl">
          {study.title}
        </h3>
        <p className="mt-4 text-muted-foreground">{study.summary}</p>

        <Button asChild variant="outline" className="mt-8">
          <Link to={`/case-studies/${study.slug}`}>
            View case study <ArrowUpRight className="size-4" />
          </Link>
        </Button>

        <div className="mt-10 flex flex-wrap gap-10">
          {study.cardStats.map((s) => (
            <div key={s.label}>
              <p className="text-sm text-muted-foreground">{s.label}</p>
              <p className="mt-1 text-3xl font-semibold">{s.value}</p>
            </div>
          ))}
        </div>
      </div>

      <Link
        to={`/case-studies/${study.slug}`}
        className={reverse ? "md:order-1" : ""}
        tabIndex={-1}
      >
        <CardArt
          art={study.cardArt}
          image={study.image}
          alt={study.title}
          crop
          className="transition-transform duration-500 group-hover:scale-[1.02]"
        />
      </Link>
    </div>
  );
}
