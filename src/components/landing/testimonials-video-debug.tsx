"use client";

import React from "react";
import { useTranslation } from "@/hooks/use-translation";

// Version simple de débogage - sans carousel
export default function TestimonialsVideoDebug() {
  const t = useTranslation();

  return (
    <section className="py-12 md:py-20 lg:py-32 bg-muted/30 dark:bg-muted/10">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-8">
          <h2 className="text-2xl font-bold font-headline mb-4">
            Test Vidéo YouTube Shorts
          </h2>
          <p className="text-muted-foreground">
            Test d'intégration simple d'une vidéo YouTube Shorts
          </p>
        </div>

        <div className="max-w-sm mx-auto bg-black rounded-lg overflow-hidden" style={{ aspectRatio: '9/16' }}>
          <iframe
            src="https://www.youtube.com/embed/j6ozc_gm9LU"
            title="Test vidéo YouTube Shorts"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="w-full h-full border-0"
          />
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-muted-foreground">
            Si vous voyez un cadre noir vide, YouTube Shorts peut bloquer l'intégration iframe.
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            Solution alternative : utiliser des vidéos YouTube normales (pas Shorts)
          </p>
        </div>
      </div>
    </section>
  );
}
