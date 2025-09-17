"use client";

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { RetroGrid } from '@/components/ui/retro-grid';
import Logo from '@/components/logo';
import SocialProofBadge from '@/components/landing/social-proof-badge';

export default function Hero() {
  return (
    <section id="hero" className="relative w-full min-h-[100dvh] md:min-h-screen flex items-center justify-center bg-background hero-provoc">
      <RetroGrid />
      <div className="container mx-auto px-4 text-center relative z-10">
        {/* Badge de social proof déplacé au-dessus du titre */}
        <div className="mb-4 md:mb-8">
          <SocialProofBadge />
        </div>
        
        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-headline">
          {/* Version mobile: Une compétence → 2h. → Rien de personnel. */}
          <span className="block md:hidden">
            Une compétence<br />
            2h.<br />
            Rien de personnel.
          </span>
          {/* Version desktop: Une compétence en 2h. → Rien de personnel. */}
          <span className="hidden md:block">
            Une compétence en 2h.<br />
            Rien de personnel.
          </span>
        </h1>
        <p className="mt-2 md:mt-4 max-w-2xl mx-auto text-base text-muted-foreground md:text-lg lg:text-xl">
          Apprends à coder sans coder.<br />
          Tu écris en français, l'IA t'aide à générer le code et tu déploies ton site.
        </p>
        <p className="mt-2 md:mt-4 max-w-2xl mx-auto text-sm text-muted-foreground/80 md:text-base font-medium">
          Une compétence digitale transférable pour tes études, ton CV et tes projets.
        </p>
        <p className="mt-3 md:mt-4 text-sm text-accent font-semibold">
          +1 000 étudiants formés en 2024–2025
        </p>
        <div className="mt-4 md:mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4">
          <Button size="lg" asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
            <Link href="#pricing">
              Je m'inscris — 149 € (-26 ans) ✨
            </Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="#pricing">
              Réserver au tarif normal — 299 €
            </Link>
          </Button>
        </div>
        
        <div className="mt-6 md:mt-12 flex flex-wrap items-center justify-center gap-4 md:gap-6 text-xs md:text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <span>🎟️ 10 places / session</span>
          </div>
          <div className="flex items-center gap-2">
            <span>📍 Paris — salle équipée</span>
          </div>
          <div className="flex items-center gap-2">
            <span>✨ Tous niveaux</span>
          </div>
          <div className="flex items-center gap-2">
            <span>📅 Samedi 4 Octobre 2025</span>
          </div>
        </div>
      </div>
    </section>
  );
}