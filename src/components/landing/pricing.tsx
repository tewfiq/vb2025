import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { Check } from 'lucide-react';
import SocialProofBadge from '@/components/landing/social-proof-badge';

const includedFeatures = [
    'Atelier 2h en présentiel',
    'Dépôt GitHub personnel',
    'Déploiement + URL publique',
    'Kit documentaire',
];

const includedFeaturesBanger = [
    'Atelier 2h complet',
    'Accès aux mêmes livrables',
    'Coaching et accompagnement',
];

const includedFeaturesTeam = [
    'Session privative entreprise/école',
    'Personnalisation du contenu',
    'Planning dédié',
];

export default function Pricing() {
    return (
        <section id="pricing" className="py-12 md:py-20 lg:py-32 bg-muted/30">
            <div className="container mx-auto px-4">
                {/* Badge de social proof ajouté au-dessus du titre */}
                <div className="mb-4 md:mb-8 flex justify-center">
                    <SocialProofBadge />
                </div>
                
                <div className="text-center max-w-3xl mx-auto mb-8 md:mb-16">
                    <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl md:text-4xl lg:text-5xl font-headline">
                        Tarifs
                    </h2>
                    <p className="mt-2 md:mt-4 text-base md:text-lg text-muted-foreground">
                        Des formules simples et claires, pour tous les profils.
                    </p>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto items-start justify-items-center">
                    {/* Standard Card */}
                    <Card className="neo-brutalist-card flex flex-col h-full w-full max-w-sm transition-all hover:scale-[1.02]">
                        <CardHeader className="pb-4">
                            <CardTitle className="font-headline text-2xl">Standard</CardTitle>
                            <div className="flex items-baseline gap-2">
                                <span className="text-5xl font-bold tracking-tight">299 €</span>
                                <span className="text-muted-foreground">TTC</span>
                            </div>
                        </CardHeader>
                        <CardContent className="flex-1">
                            <ul className="space-y-3 text-sm">
                                {includedFeatures.map(feature => (
                                    <li key={feature} className="flex items-center gap-2">
                                        <Check className="h-4 w-4 text-primary" />
                                        <span className="text-muted-foreground">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </CardContent>
                        <CardFooter>
                            <Button className="neo-brutalist-button w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground" asChild>
                                <Link href="https://buy.stripe.com/bJe5kEdSrgkcfhQaBn7EQ0c">Réserver — 299 €</Link>
                            </Button>
                        </CardFooter>
                    </Card>

                    {/* Banger Card */}
                    <Card className="neo-brutalist-card flex flex-col h-full w-full max-w-sm relative transition-all hover:scale-[1.02] border-accent shadow-[8px_8px_0px_theme(colors.accent)]">
                         <div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2">
                            <div className="bg-accent text-accent-foreground px-4 py-1 rounded-full text-sm font-semibold border-2 border-foreground">
                                🔥 BANGER !
                            </div>
                        </div>
                        <CardHeader className="pb-4 pt-10">
                            <CardTitle className="font-headline text-2xl">Réduit</CardTitle>
                            <p className="text-sm text-muted-foreground">Tarif réservé aux -26 ans et demandeurs d'emploi</p>
                            <div className="flex items-baseline gap-2 pt-2">
                                <span className="text-5xl font-bold tracking-tight text-accent">149 €</span>
                                <span className="text-muted-foreground">TTC</span>
                            </div>
                        </CardHeader>
                        <CardContent className="flex-1">
                            <ul className="space-y-3 text-sm">
                                {includedFeaturesBanger.map(feature => (
                                    <li key={feature} className="flex items-center gap-2">
                                        <Check className="h-4 w-4 text-accent" />
                                        <span className="text-muted-foreground">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </CardContent>
                        <CardFooter className="flex-col gap-3">
                            <Button className="neo-brutalist-button w-full bg-accent hover:bg-accent/90" asChild>
                                <Link href="https://buy.stripe.com/bJe8wQ3dN7NGc5EcJv7EQ0b">Je m'inscris — 149 €</Link>
                            </Button>
                        </CardFooter>
                    </Card>

                    {/* Team Card */}
                    <Card className="neo-brutalist-card flex flex-col h-full w-full max-w-sm transition-all hover:scale-[1.02]">
                        <CardHeader className="pb-4">
                            <CardTitle className="font-headline text-2xl">Équipe</CardTitle>
                             <div className="flex items-baseline gap-2">
                                <span className="text-5xl font-bold tracking-tight">Sur devis</span>
                            </div>
                        </CardHeader>
                        <CardContent className="flex-1">
                            <ul className="space-y-3 text-sm">
                                {includedFeaturesTeam.map(feature => (
                                    <li key={feature} className="flex items-center gap-2">
                                        <Check className="h-4 w-4 text-primary" />
                                        <span className="text-muted-foreground">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </CardContent>
                        <CardFooter>
                            <Button className="neo-brutalist-button w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground" asChild>
                                <Link href="https://cal.com/tewfiqferahi/15min" target="_blank" rel="noopener noreferrer">Demander un devis</Link>
                            </Button>
                        </CardFooter>
                    </Card>
                </div>
            </div>
        </section>
    );
}
