import { Metadata } from 'next/types';
import { BackButton } from '@/components/ui/back-button';

export const metadata: Metadata = {
  title: "À propos | Vibe Coding",
  description: "Découvrez l'histoire et les valeurs de Vibe Coding",
};

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <BackButton />
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl font-headline mb-8">
          À propos de Vibe Coding
        </h1>
        <div className="prose prose-lg max-w-none">
          <p>
            Contenu à venir... Cette page présentera l'histoire, les valeurs et l'équipe de Vibe Coding.
          </p>
          <p>
            Placeholder pour le contenu détaillé à venir.
          </p>
        </div>
      </div>
    </div>
  );
}