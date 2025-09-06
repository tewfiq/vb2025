import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function Footer() {
    return (
        <footer className="bg-muted/30">
            <div className="container mx-auto px-4 py-16">
                <div className="text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-headline">
                        Vibe Coding Paris
                    </h2>
                    <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
                        Vibe Coding Paris — Débloque ton super pouvoir digital en 2h. De l'idée au site en ligne, avec l'IA comme copilote.
                    </p>
                    <Button size="lg" className="mt-8" asChild>
                        <Link href="#pricing">Slay le code, inscris-toi maintenant</Link>
                    </Button>
                </div>
                <div className="mt-16 pt-8 border-t flex flex-col sm:flex-row justify-between items-center gap-4">
                    <div className="flex gap-6 text-sm">
                        <Link href="/a-propos" className="text-muted-foreground hover:text-foreground">À propos</Link>
                        <Link href="/contact" className="text-muted-foreground hover:text-foreground">Contact</Link>
                        <Link href="/mentions-legales" className="text-muted-foreground hover:text-foreground">Mentions</Link>
                        <Link href="/cgv" className="text-muted-foreground hover:text-foreground">CGV</Link>
                    </div>
                    <p className="text-sm text-muted-foreground">
                        © {new Date().getFullYear()} Vibe Coding Paris. Tous droits réservés.
                    </p>
                </div>
            </div>
        </footer>
    );
}
