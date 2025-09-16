import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  MockEditorLight,
  MockTerminalClean,
  MockWorkshopRoom,
  MockCardsGrid,
  MockPeopleAvatars,
  MockBadgeRareté
} from "./mock-components";

const features = [
    { title: "Apprends en écrivant", description: "Prends en main ChatGPT, Copilot, Cursor... et construis en langage naturel.", content: <MockEditorLight /> },
    { title: "Lance tes projets sans barrière", description: "Sites, apps, scripts, IA — on prototype ensemble, de A à Z.", content: <MockTerminalClean /> },
    { title: "Ateliers interactifs ✨", description: "Coaching bienveillant, pratique guidée, feedback immédiat.", content: <MockWorkshopRoom /> },
    { title: "Créa instantanée", description: "Ton flow créatif, boosté par l'IA. Résultat concret immédiat.", content: <MockCardsGrid /> },
    { title: "Team Spirit", description: "Une vibe collaborative pour progresser plus vite.", content: <MockPeopleAvatars /> },
    { title: "Unfair Advantage", description: "Pendant que d'autres scrollent, toi tu crées. Compétence rare et transférable.", content: <MockBadgeRareté /> }
];

export default function WhyCards() {
    return (
        <section id="why" className="py-12 md:py-20 lg:py-32 bg-muted/30">
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="text-center max-w-3xl mx-auto mb-8 md:mb-16">
                    <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl md:text-4xl lg:text-5xl font-headline">
                        Pourquoi rejoindre<br />Vibe Coding Paris ?
                    </h2>
                    <p className="mt-4 text-lg text-muted-foreground">
                        Ton unfair advantage dans la révolution Gen AI.
                    </p>
                </div>

                {/* Cartes principales */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <Card key={index} className="flex flex-col overflow-hidden bg-card/80 backdrop-blur-sm transition-all hover:scale-[1.02] hover:shadow-lg">
                            <CardHeader>
                                <CardTitle className="font-headline text-xl" dangerouslySetInnerHTML={{ __html: feature.title }}></CardTitle>
                                <p className="text-sm font-normal text-muted-foreground pt-1">{feature.description}</p>
                            </CardHeader>
                            <CardContent className="flex-grow">
                                {feature.content}
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}