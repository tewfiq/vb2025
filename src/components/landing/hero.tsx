import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Hero() {
  return (
    <section id="hero" className="relative w-full py-16 md:py-24 lg:py-32 bg-background hero-provoc">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl font-headline">
          Pendant qu'ils scrollent, toi t'apprends à Vibe coder.
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground md:text-xl">
          2h. Business, rien de perso. Juste toi et ton projet en ligne.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="lg" asChild className="bg-accent hover:bg-accent/90 text-accent-foreground relative">
            <Link href="#pricing">
              Je m'inscris à -50% — 149 €
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
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-3xl mx-auto text-sm text-muted-foreground">
          <div className="flex items-center justify-center gap-2">
            <span>📍</span>
            <span>Paris — salle équipée</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <span>🎟️</span>
            <span>10 places / session</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <span>✨</span>
            <span>Tous niveaux</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <span>📅</span>
            <span>Samedi 4 Octobre 2025</span>
          </div>
        </div>
      </div>
    </section>
  );
}
