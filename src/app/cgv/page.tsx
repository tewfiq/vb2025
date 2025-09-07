import { Metadata } from 'next/types';
import { BackButton } from '@/components/ui/back-button';

export const metadata: Metadata = {
  title: "Conditions Générales de Vente | Vibe Coding Paris",
  description: "Conditions Générales de Vente de Vibe Coding Paris",
};

export default function TermsOfServicePage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <BackButton />
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl font-headline mb-8">
          Conditions Générales de Vente
        </h1>
        <div className="prose prose-lg max-w-none">
          <p>
            Contenu à venir... Cette page contiendra les Conditions Générales de Vente de Vibe Coding Paris.
          </p>
          <p>
            Placeholder pour le contenu détaillé à venir.
          </p>
        </div>
      </div>
    </div>
  );
}