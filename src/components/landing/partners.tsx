"use client";

import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { useTranslation } from "@/hooks/use-translation";

export default function Partners() {
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const t = useTranslation();

  useEffect(() => {
    setMounted(true);
  }, []);

  // Rendu conditionnel pour éviter les erreurs de hydration
  if (!mounted) {
    return (
      <section className="bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h3 className="text-lg font-semibold text-muted-foreground font-headline" dangerouslySetInnerHTML={{ __html: t.partners.title }}>
            </h3>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8">
            <div className="h-[60px] w-full max-w-4xl" />
          </div>
        </div>
      </section>
    );
  }

  // Utiliser resolvedTheme qui donne le thème réel (même si theme est "system")
  const isDark = resolvedTheme === "dark";
  const logoSrc = isDark
    ? "/Schools/schools-logos_white.png"
    : "/Schools/schools-logos_black.png";

  return (
    <section className="bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h3 className="text-lg font-semibold text-muted-foreground font-headline" dangerouslySetInnerHTML={{ __html: t.partners.title }}>
          </h3>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8">
          <Image
            src={logoSrc}
            alt="Partner logos"
            data-ai-hint="school logos"
            width={1000}
            height={60}
            className="h-auto w-full max-w-4xl object-contain"
          />
        </div>
      </div>
    </section>
  );
}
