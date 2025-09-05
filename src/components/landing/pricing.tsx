import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { Check } from 'lucide-react';

const includedFeatures = [
    'Workshop 2h en présentiel',
    'Dépôt GitHub personnel',
    'Déploiement + URL publique',
    'Kit documentaire (brandbook, pitch, Value Prop)',
];

const includedFeaturesBanger = [
    'Workshop 2h complet',
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
        <section id="pricing" className="py-20 md:py-32 bg-muted/30">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl font-headline">
                        Tarifs simples <br /> pour passer à l'action
                    </h2>
                    <p className="mt-4 text-lg text-muted-foreground">
                        Des prix qui matchent ton budget, pour que tu puisses enfin glow up tes skills tech ✨
                    </p>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-5xl mx-auto items-start">
                    {/* Standard Card */}
                    <Card className="flex flex-col h-full">
                        <CardHeader className="pb-4">
                            <CardTitle className="font-headline text-2xl">Standard</CardTitle>
                            <div className="flex items-baseline gap-2">
                                <span className="text-5xl font-bold tracking-tight">299 €</span>
                                <span className="text-muted-foreground">TTC / personne</span>
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
                            <Button className="w-full" variant="outline">Réserver – 299 €</Button>
                        </CardFooter>
                    </Card>

                    {/* Banger Card */}
                    <Card className="flex flex-col h-full border-2 border-accent shadow-2xl shadow-accent/20 relative">
                         <div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2">
                            <div className="bg-accent text-accent-foreground px-4 py-1 rounded-full text-sm font-semibold">
                                🔥 BANGER !
                            </div>
                        </div>
                        <CardHeader className="pb-4 pt-10">
                            <CardTitle className="font-headline text-2xl">C'est Carré</CardTitle>
                            <p className="text-sm text-muted-foreground">(-26 ans / Demandeurs d'emploi)</p>
                            <div className="flex items-baseline gap-2 pt-2">
                                <span className="text-5xl font-bold tracking-tight text-accent">149 €</span>
                                <span className="text-muted-foreground">TTC / personne</span>
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
                        <CardFooter>
                            <Button className="w-full bg-accent hover:bg-accent/90">Je m'inscris à -50%</Button>
                        </CardFooter>
                    </Card>

                    {/* Team Card */}
                    <Card className="flex flex-col h-full">
                        <CardHeader className="pb-4">
                            <CardTitle className="font-headline text-2xl">La Team</CardTitle>
                             <div className="flex items-baseline gap-2">
                                <span className="text-5xl font-bold tracking-tight">Sur devis</span>
                                <span className="text-muted-foreground">Jusqu'à 10 personnes</span>
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
                            <Button className="w-full" variant="outline">Demander un devis</Button>
                        </CardFooter>
                    </Card>
                </div>
                 <p className="text-center mt-8 text-sm text-muted-foreground">🔥 Offre -50% pour les -26 ans et demandeurs d'emploi. Places limitées.</p>
            </div>
        </section>
    );
}
