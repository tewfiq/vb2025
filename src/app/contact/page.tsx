import { Metadata } from 'next/types';
import { BackButton } from '@/components/ui/back-button';

export const metadata: Metadata = {
  title: "Contact | Vibe Coding Paris",
  description: "Contactez l'équipe de Vibe Coding Paris pour toute question ou demande",
};

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <BackButton />
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl font-headline mb-8">
          Contactez-nous
        </h1>
        <div className="prose prose-lg max-w-none">
          <p>
            Contenu à venir... Cette page contiendra les informations de contact et un formulaire pour joindre l'équipe de Vibe Coding Paris.
          </p>
          <p>
            Placeholder pour le contenu détaillé à venir.
          </p>
        </div>
      </div>
    </div>
  );
}