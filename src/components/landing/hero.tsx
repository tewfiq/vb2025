"use client";

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { RetroGrid } from '@/components/ui/retro-grid';
import Logo from '@/components/logo';
import SocialProofBadge from '@/components/landing/social-proof-badge';
import { useTranslation } from '@/hooks/use-translation';

export default function Hero() {
  const t = useTranslation()

  return (
    <section id="hero" className="relative w-full min-h-[100dvh] md:min-h-screen flex items-center justify-center bg-background hero-provoc overflow-hidden">
      {/* Animated Paris GIF Background */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat z-0"
        style={{
          backgroundImage: 'url(/backgrounds/paris-hero.gif)',
          backgroundColor: '#1a1a1a', // Fallback color to see if div is working
        }}
        role="img"
        aria-label="Animation de Paris en arrière-plan"
      />

      {/* Overlay for better text contrast - adaptive for light/dark mode */}
      <div className="absolute inset-0 bg-black/50 dark:bg-black/30 z-10" />

      <div className="relative z-20">
        <RetroGrid />
      </div>
      <div className="container mx-auto px-4 text-center relative z-30">
        {/* Badge de social proof déplacé au-dessus du titre */}
        <div className="mb-4 md:mb-8 flex justify-center">
          <SocialProofBadge />
        </div>
        
        <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-headline">
          {/* Version mobile */}
          <span className="block md:hidden">
            {t.hero.title.mobile.line1}<br />
            {t.hero.title.mobile.line2}<br />
            {t.hero.title.mobile.line3}
          </span>
          {/* Version desktop */}
          <span className="hidden md:block">
            {t.hero.title.desktop.line1}<br />
            {t.hero.title.desktop.line2}
          </span>
        </h1>
        <p className="mt-2 md:mt-4 max-w-2xl mx-auto text-base text-white/90 md:text-lg lg:text-xl">
          {t.hero.subtitle.line1}<br />
          {t.hero.subtitle.line2}
        </p>
        <p className="mt-2 md:mt-4 max-w-2xl mx-auto text-sm text-white/80 md:text-base font-medium">
          {t.hero.description}
        </p>
        <p className="mt-3 md:mt-4 text-sm text-accent font-semibold">
          {t.hero.studentsCount}
        </p>
        <div className="mt-4 md:mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4">
          <Button size="lg" asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
            <Link href="#pricing">
              {t.hero.buttons.register}
            </Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="#pricing">
              {t.hero.buttons.registerNormal}
            </Link>
          </Button>
        </div>
        
        <div className="mt-6 md:mt-12 flex flex-wrap items-center justify-center gap-4 md:gap-6 text-xs md:text-sm text-white/70">
          <div className="flex items-center gap-2">
            <span>{t.hero.features.capacity}</span>
          </div>
          <div className="flex items-center gap-2">
            <span>{t.hero.features.location}</span>
          </div>
          <div className="flex items-center gap-2">
            <span>{t.hero.features.level}</span>
          </div>
          <div className="flex items-center gap-2">
            <span>{t.hero.features.date}</span>
          </div>
        </div>
      </div>
    </section>
  );
}