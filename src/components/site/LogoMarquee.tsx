import { logos } from "@/lib/data";

export function LogoMarquee() {
  const track = [...logos, ...logos, ...logos];
  return (
    <div className="relative overflow-hidden border-y border-white/5 py-8 [mask-image:linear-gradient(90deg,transparent,black_10%,black_90%,transparent)]">
      <div className="flex w-max animate-marquee gap-16 hover:[animation-play-state:paused]">
        {track.map((logo, i) => (
          <div key={`${logo.name}-${i}`} className="flex w-64 shrink-0 flex-col items-start gap-2">
            <img
              src={logo.logo}
              alt={logo.name}
              className="h-7 w-auto max-w-[10rem] object-contain opacity-60 brightness-0 invert transition-opacity duration-200 hover:opacity-100"
            />
            <span className="text-xs text-muted-foreground">{logo.blurb}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
