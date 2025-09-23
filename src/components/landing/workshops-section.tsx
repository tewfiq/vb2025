"use client";

import { useTranslation } from '@/hooks/use-translation';
import Gallery from '@/components/landing/gallery';
import Partners from '@/components/landing/partners';

export function WorkshopsSection() {
  const t = useTranslation();

  return (
    <section id="ateliers" className="py-12 md:py-20 lg:py-24">
      <div className="text-center mb-8 md:mb-12">
        <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl md:text-4xl lg:text-5xl font-headline">
          {t.workshops.title.line1}<br />
          {t.workshops.title.line2}
        </h2>
        <p className="text-muted-foreground mt-1 md:mt-2 text-sm md:text-base">
          {t.workshops.subtitle}
        </p>
      </div>
      <Gallery />
      <Partners />
    </section>
  );
}