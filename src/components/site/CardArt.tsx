import { cn } from "@/lib/utils";
import type { CardArt as CardArtType } from "@/lib/data";

const palettes: Record<CardArtType, { from: string; via: string; to: string; accent: string }> = {
  gaming: { from: "#7c3aed", via: "#312e81", to: "#0a0a0a", accent: "#a3e635" },
  brands: { from: "#e11d48", via: "#1f1147", to: "#0a0a0a", accent: "#fda4af" },
  healthcare: { from: "#059669", via: "#0f2027", to: "#0a0a0a", accent: "#6ee7b7" },
  androidtv: { from: "#2563eb", via: "#0f172a", to: "#0a0a0a", accent: "#93c5fd" },
  system: { from: "#d97706", via: "#1c1917", to: "#0a0a0a", accent: "#fcd34d" },
  desktop: { from: "#0ea5e9", via: "#111827", to: "#0a0a0a", accent: "#7dd3fc" },
};

/** Per-project text-gradient classes for the case study intro paragraph — a subtle tint tied to each project's card art color. */
export const cardArtTextGradient: Record<CardArtType, string> = {
  gaming: "from-violet-300 to-indigo-300",
  brands: "from-rose-300 to-fuchsia-200",
  healthcare: "from-emerald-300 to-teal-200",
  androidtv: "from-blue-300 to-sky-200",
  system: "from-amber-300 to-yellow-200",
  desktop: "from-sky-300 to-cyan-200",
};

const marks: Record<CardArtType, string> = {
  gaming: "M6 12h4M8 10v4M15 10.5h.01M17.5 13h.01",
  brands: "M8 8h3v3H8zM13 8h3v3h-3zM8 13h3v3H8zM13 13h3v3h-3z",
  healthcare: "M12 6v12M6 12h12",
  androidtv: "M4 6h16v9H4zM9 19h6",
  system: "M4 7h6v6H4zM14 7h6v3h-6zM14 13h6v6h-6zM4 15h6v4H4z",
  desktop: "M4 5h16v10H4zM9 19h6M12 15v4",
};

export function CardArt({
  art,
  image,
  video,
  videoWebm,
  alt,
  className,
  crop,
}: {
  art: CardArtType;
  image?: string;
  /** Looping video (mp4/h264) shown instead of a static image — e.g. an export of an interactive prototype. */
  video?: string;
  /** Optional webm/vp9 source, offered before the mp4 fallback for smaller size and broader headless/Linux support. */
  videoWebm?: string;
  alt?: string;
  className?: string;
  /** Constrain the image to a 16:9 box (cropped via object-cover) instead of showing it at its natural size. */
  crop?: boolean;
}) {
  const p = palettes[art];
  const id = `card-art-${art}`;

  if (video) {
    return (
      <div
        className={cn(
          "relative w-full overflow-hidden rounded-2xl border border-white/10 bg-[#0c0c0c]",
          crop && "aspect-[16/9]",
          className
        )}
      >
        <video
          poster={image}
          autoPlay
          loop
          muted
          playsInline
          aria-label={alt}
          className={cn("block w-full", crop ? "h-full object-cover" : "h-auto")}
        >
          {videoWebm && <source src={videoWebm} type="video/webm" />}
          <source src={video} type="video/mp4" />
        </video>
      </div>
    );
  }

  if (image) {
    return (
      <div
        className={cn(
          "relative w-full overflow-hidden rounded-2xl border border-white/10 bg-[#0c0c0c]",
          crop && "aspect-[16/9]",
          className
        )}
      >
        <img
          src={image}
          alt={alt ?? ""}
          className={cn("block w-full", crop ? "h-full object-cover" : "h-auto")}
          loading="lazy"
        />
      </div>
    );
  }

  return (
    <div
      className={cn(
        "relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-white/10",
        className
      )}
      style={{
        background: `radial-gradient(120% 100% at 15% 15%, ${p.from}55, transparent 60%), radial-gradient(100% 100% at 90% 90%, ${p.via}aa, transparent 65%), #0c0c0c`,
      }}
    >
      <svg
        className="absolute inset-0 h-full w-full opacity-[0.35]"
        viewBox="0 0 400 300"
        fill="none"
        aria-hidden="true"
      >
        <defs>
          <pattern id={id} width="28" height="28" patternUnits="userSpaceOnUse">
            <circle cx="1" cy="1" r="1" fill="white" opacity="0.5" />
          </pattern>
        </defs>
        <rect width="400" height="300" fill={`url(#${id})`} />
      </svg>
      <div
        className="absolute -bottom-10 -right-10 h-40 w-40 rounded-full blur-3xl"
        style={{ background: p.accent, opacity: 0.25 }}
      />
      <svg
        viewBox="0 0 24 24"
        className="absolute bottom-5 right-5 size-10 stroke-[1.4]"
        style={{ color: p.accent }}
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d={marks[art]} />
      </svg>
    </div>
  );
}
