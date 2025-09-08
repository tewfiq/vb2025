"use client";

import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Partners() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Rendu conditionnel pour éviter les erreurs de hydration
  if (!mounted) {
    return (
      <section className="bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h3 className="text-lg font-semibold text-muted-foreground font-headline">
              Un grand merci à tous mes Étudiants en Bachelor, Master & MBA en
              2024-2025 👏
            </h3>
            <p className="text-sm text-muted-foreground">
              Logos des écoles partenaires - Bachelor, Master & MBA 2024-2025
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8">
            <div className="h-[60px] w-full max-w-4xl" />
          </div>
        </div>
      </section>
    );
  }

  // Déterminer quelle image utiliser selon le thème
  const logoSrc =
    theme === "dark"
      ? "/Schools/schools-logos_white.png"
      : "/Schools/schools-logos_black.png";

  return (
    <section className="bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h3 className="text-lg font-semibold text-muted-foreground font-headline">
            Un grand merci à tous mes Étudiants en Bachelor, Master & MBA en
            2024-2025 👏
          </h3>
          <p className="text-sm text-muted-foreground">
            Logos des écoles partenaires - Bachelor, Master & MBA 2024-2025
          </p>
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
