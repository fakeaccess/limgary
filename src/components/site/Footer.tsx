import { Button } from "@/components/ui/button";
import { RevealOnScroll } from "@/components/site/RevealOnScroll";
import { siteMeta } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-white/5">
      <div className="container py-28 text-center">
        <RevealOnScroll>
          <h2 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
            I'm ready, are you?
          </h2>
          <p className="mx-auto mt-4 max-w-md text-muted-foreground">
            My passion is creating solutions that deliver results. If you're looking for a
            partner to help you achieve your goals, let's start the conversation.
          </p>
          <div className="mt-8 flex justify-center">
            <Button asChild size="lg">
              <a href={`mailto:${siteMeta.email}`}>Let's talk</a>
            </Button>
          </div>
        </RevealOnScroll>
      </div>

      <div className="container flex flex-col items-center gap-4 border-t border-white/5 py-8 text-sm text-muted-foreground sm:flex-row sm:justify-between">
        <p>© {siteMeta.name} {new Date().getFullYear()}</p>
        <div className="flex gap-6">
          <a href={siteMeta.linkedin} target="_blank" rel="noreferrer" className="hover:text-foreground">
            LinkedIn
          </a>
          <a href={siteMeta.resume} target="_blank" rel="noreferrer" className="hover:text-foreground">
            Resume
          </a>
          <a href={`mailto:${siteMeta.email}`} className="hover:text-foreground">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
