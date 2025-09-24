"use client";

import { Metadata } from 'next/types';
import { BackButton } from '@/components/ui/back-button';
import { useTranslation } from '@/hooks/use-translation';

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
            <img
              src="/tewfiq-teaching.png"
              alt="Tewfiq Ferahi en train de donner un atelier avec ses étudiants"
              className="rounded-lg shadow-2xl w-full max-w-2xl h-auto"
            />
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
        </div>
      </div>
    </div>
  );
}