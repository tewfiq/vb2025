"use client";

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { RetroGrid } from '@/components/ui/retro-grid';
import Logo from '@/components/logo';
import SocialProofBadge from '@/components/landing/social-proof-badge';

export default function Hero() {
  return (
    <section id="hero" className="relative w-full min-h-screen flex items-center justify-center bg-background hero-provoc">
      <RetroGrid />
      <div className="container mx-auto px-4 text-center relative z-10">
        {/* Badge de social proof déplacé au-dessus du titre */}
        <div className="mb-8">
          <SocialProofBadge />
        </div>
        
        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl font-headline">
          Une compétence en 2h.
          <br />
          Rien de personnel.
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground md:text-xl">
          Tu écris en français, l'IA génère le code, tu déploies ton site.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="lg" asChild className="bg-accent hover:bg-accent/90 text-accent-foreground relative">
            <Link href="#pricing">
              Je m'inscris — 149 € (-26 ans)
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                ✨
              </span>
            </Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="#pricing">
              Réserver au tarif normal — 299 €
            </Link>
          </Button>
        </div>
        
        <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
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