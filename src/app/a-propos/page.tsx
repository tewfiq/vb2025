"use client";

import { Metadata } from 'next/types';
import { BackButton } from '@/components/ui/back-button';
import { useTranslation } from '@/hooks/use-translation';
import { AnimatedTiles } from '@/components/ui/animated-tiles';

// Note: This will be replaced with dynamic metadata when we implement server-side translation support
// export const metadata: Metadata = {
//   title: "À propos | Vibe Coding Paris",
//   description: "Découvrez l'histoire et les valeurs de Vibe Coding Paris",
// };

export default function AboutPage() {
  const t = useTranslation();
  return (
    <div className="container mx-auto px-4 py-16">
      <BackButton />
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl font-headline mb-4">
            {t.about.name}
          </h1>
          <p className="text-xl text-accent font-semibold mb-8">
            {t.about.role}
          </p>

          <div className="flex justify-center mb-12">
            <div className="rounded-lg shadow-2xl overflow-hidden w-full max-w-2xl">
              <AnimatedTiles
                rows={12}
                cols={16}
                tileSize={50}
                imageUrl="/tewfiq-teaching.png"
                backgroundColor="transparent"
              />
            </div>
          </div>
        </div>

        <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed">
          <p className="text-lg mb-6">
            {t.about.paragraphs.experience}
          </p>

          <p className="text-lg mb-6">
            {t.about.paragraphs.excellence}
          </p>

          <p className="text-lg mb-6">
            {t.about.paragraphs.background}
          </p>

          <p className="text-lg mb-8">
            {t.about.paragraphs.passion}
          </p>

          <blockquote className="border-l-4 border-accent pl-6 py-4 bg-muted/30 rounded-r-lg">
            <p className="text-lg italic text-foreground font-medium">
              "{t.about.mission}"
            </p>
          </blockquote>

          <div className="flex justify-center gap-6 mt-8">
            <a
              href="https://x.com/tewfiq"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg border hover:bg-muted/50 transition-colors"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
              <span>X (Twitter)</span>
            </a>
            <a
              href="https://www.linkedin.com/in/tewfiq/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg border hover:bg-muted/50 transition-colors"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}