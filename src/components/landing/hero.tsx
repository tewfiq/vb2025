import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowDown } from 'lucide-react';

export default function Hero() {
  return (
    <section id="hero" className="relative w-full py-20 md:py-32 lg:py-40 bg-background">
      <div className="container mx-auto px-4 text-center">
        <div className="mb-4">
          <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-sm font-semibold text-primary font-headline">
            🚀 Formation Vibe Coding | Septembre 2025
          </span>
        </div>
        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl font-headline">
          Code l'avenir, <br className="hidden md:block" /> libère ta créativité avec l'IA
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-lg text-muted-foreground md:text-xl">
          En 2h, deviens celui qui <span className="font-bold text-accent">slay</span> le digital.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="lg" asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
            <Link href="#pricing">Je m'inscris à -50%</Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="#programme">
              Voir le programme
              <ArrowDown className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
