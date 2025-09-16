import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { Check } from 'lucide-react';
import SocialProofBadge from '@/components/landing/social-proof-badge';

const includedFeaturesReduit = [
    'Atelier 2h complet',
    'Même contenu que l'atelier principal',
    'Coaching & accompagnement',
    'Compétence pratique immédiatement applicable',
];

const includedFeatures = [
    'Atelier 2h intensif en présentiel',
    'Méthode complète end-to-end : idée → code → déploiement',
    'Pratique guidée étape par étape',
    'Projet en ligne, immédiatement partageable',
    'Kit documentaire pour continuer après l'atelier',
];

const includedFeaturesTeam = [
    'Session privative',
    'Contenu personnalisé (vos cas/projets)',
    'Planning dédié',
    'Idéal pour écoles, agences et incubateurs',
];

// Pricing Plan v6.4 - Updated with "🚀 Devenez Product Builder" and enhanced value propositions
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
                    <p className="mt-2 text-sm md:text-base text-muted-foreground italic">
                        Chaque formule vous transmet la même compétence : apprendre à coder de bout en bout par la pratique et devenir Product Builder.
                    </p>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto items-start justify-items-center">
                    {/* Réduit Card - Featured */}
                    <Card className="flex flex-col h-full w-full max-w-sm border-2 border-accent shadow-2xl shadow-accent/20 relative transition-all hover:scale-[1.02] hover:shadow-2xl">
                         <div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2">
                            <div className="bg-accent text-accent-foreground px-4 py-1 rounded-full text-sm font-semibold">
                                🔥 Plus de 50% des places partent en tarif -26
                            </div>
                        </div>
                        <CardHeader className="pb-4 pt-10">
                            <CardTitle className="font-headline text-2xl">Réduit</CardTitle>
                            <div className="flex items-baseline gap-2">
                                <span className="text-5xl font-bold tracking-tight text-accent">149 €</span>
                            </div>
                            <p className="text-sm text-muted-foreground">TTC / -26 ans & demandeurs d'emploi</p>
                        </CardHeader>
                        <CardContent className="flex-1">
                            <ul className="space-y-3 text-sm">
                                {includedFeaturesReduit.map(feature => (
                                    <li key={feature} className="flex items-center gap-2">
                                        <Check className="h-4 w-4 text-accent" />
                                        <span className="text-muted-foreground">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </CardContent>
                        <CardFooter className="flex-col gap-3">
                            <Button className="w-full bg-accent hover:bg-accent/90" asChild>
                                <Link href="https://buy.stripe.com/bJe8wQ3dN7NGc5EcJv7EQ0b">Je m'inscris — 149 €</Link>
                            </Button>
                        </CardFooter>
                    </Card>

                    {/* Standard Card */}
                    <Card className="flex flex-col h-full w-full max-w-sm transition-all hover:scale-[1.02] hover:shadow-lg">
                        <CardHeader className="pb-4">
                            <CardTitle className="font-headline text-xl">🚀 Devenez Product Builder</CardTitle>
                            <div className="flex items-baseline gap-2">
                                <span className="text-5xl font-bold tracking-tight">299 €</span>
                            </div>
                            <p className="text-sm text-muted-foreground">TTC / personne</p>
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
                            <Button className="w-full" asChild>
                                <Link href="https://buy.stripe.com/bJe5kEdSrgkcfhQaBn7EQ0c">Réserver — 299 €</Link>
                            </Button>
                        </CardFooter>
                    </Card>

                    {/* Team Card */}
                    <Card className="flex flex-col h-full w-full max-w-sm transition-all hover:scale-[1.02] hover:shadow-lg">
                        <CardHeader className="pb-4">
                            <CardTitle className="font-headline text-2xl">Équipe</CardTitle>
                            <div className="flex items-baseline gap-2">
                                <span className="text-5xl font-bold tracking-tight">Sur devis</span>
                            </div>
                            <p className="text-sm text-muted-foreground">Entreprise / École (5 à 20 pers.)</p>
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
                            <Button className="w-full" variant="outline" asChild>
                                <Link href="https://cal.com/tewfiqferahi/15min" target="_blank" rel="noopener noreferrer">Demander un devis</Link>
                            </Button>
                        </CardFooter>
                    </Card>
                </div>
            </div>
        </section>
    );
}

