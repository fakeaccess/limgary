import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { siteMeta } from "@/lib/data";

const links = [
  { label: "Work", href: "/#work" },
  { label: "Experience", href: "/#experience" },
  { label: "About", href: "/about" },
];

export function Navbar() {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  const workHref = location.pathname === "/" ? "#work" : "/#work";
  const experienceHref = location.pathname === "/" ? "#experience" : "/#experience";

  return (
    <header className="sticky top-0 z-40 border-b border-white/5 bg-background/80 backdrop-blur-md">
      <div className="container flex h-20 items-center justify-between">
        <Link to="/" className="text-lg font-semibold tracking-tight">
          GL
        </Link>

        <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
          <a href={workHref} className="transition-colors hover:text-foreground">
            Work
          </a>
          <a href={experienceHref} className="transition-colors hover:text-foreground">
            Experience
          </a>
          <Link to="/about" className="transition-colors hover:text-foreground">
            About
          </Link>
          <a
            href={siteMeta.resume}
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-foreground"
          >
            Resume
          </a>
        </nav>

        <div className="hidden md:block">
          <Button asChild size="sm">
            <a href={`mailto:${siteMeta.email}`}>Let's talk</a>
          </Button>
        </div>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <button
              className="rounded-full p-2 text-foreground md:hidden"
              aria-label="Open menu"
            >
              <Menu className="size-6" />
            </button>
          </SheetTrigger>
          <SheetContent>
            <nav className="mt-4 flex flex-col gap-5 text-lg">
              {links.map((l) => (
                <SheetClose asChild key={l.label}>
                  <a href={l.href} className="text-foreground">
                    {l.label}
                  </a>
                </SheetClose>
              ))}
              <SheetClose asChild>
                <a href={siteMeta.resume} target="_blank" rel="noreferrer">
                  Resume
                </a>
              </SheetClose>
              <SheetClose asChild>
                <a href={`mailto:${siteMeta.email}`} className="font-medium">
                  Let's talk
                </a>
              </SheetClose>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
