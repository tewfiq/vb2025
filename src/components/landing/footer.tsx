"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import Logo from "@/components/logo";
import { useTranslation } from "@/hooks/use-translation";
import { trackCTAClick } from "@/lib/analytics";

export default function Footer() {
  const t = useTranslation();

  const handleFooterCTAClick = () => {
    trackCTAClick("Join Next Session", "Footer");
  };

  return (
    <footer className="bg-muted/30">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-headline">
            {t.footer.title}
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
            <span className="block">
              {t.footer.description.line1}
            </span>
            <span className="block">
              {t.footer.description.line2}
            </span>
          </p>
          <Button size="lg" className="mt-8" asChild>
            <Link href="#pricing" onClick={handleFooterCTAClick}>{t.footer.cta}</Link>
          </Button>
        </div>
        <div className="mt-16 pt-8 border-t flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex gap-6 text-sm">
            <Link
              href="/a-propos"
              className="text-muted-foreground hover:text-foreground"
            >
              {t.footer.links.about}
            </Link>
            <Link
              href="/blog"
              className="text-muted-foreground hover:text-foreground"
            >
              {t.footer.links.blog}
            </Link>
            <Link
              href="/contact"
              className="text-muted-foreground hover:text-foreground"
            >
              {t.footer.links.contact}
            </Link>
            <Link
              href="/mentions-legales"
              className="text-muted-foreground hover:text-foreground"
            >
              {t.footer.links.mentions}
            </Link>
            <Link
              href="/cgv"
              className="text-muted-foreground hover:text-foreground"
            >
              {t.footer.links.cgv}
            </Link>
          </div>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Vibe Coding Paris. {t.footer.copyright}
          </p>
        </div>
        <div className="mt-8 text-center">
          <p className="text-sm text-muted-foreground italic">
            {t.footer.tagline}
          </p>
        </div>
      </div>
    </footer>
  );
}
