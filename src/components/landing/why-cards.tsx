import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CodeSnippet, MockAppList, CommitList, DeploymentLog } from "./mock-components";
import { MessageCircle, Laptop, Rocket } from "lucide-react";

const features = [
    { title: "Apprends à coder… en parlant !", description: "Prends en main les outils qui buzzent : ChatGPT, Copilot, Bolt, Cursor.", content: <CodeSnippet /> },
    { title: "Lance tes projets sans barrière", description: "Sites, apps, scripts, IA – ton idée, on la prototype ensemble.", content: <DeploymentLog /> },
    { title: "Ateliers interactifs ✨", description: "Coaching par des formateurs passionnés, ambiance bienveillante et collaborative.", content: <MockAppList /> },
    { title: "Créa instantanée", description: "Ton flow créatif, boosté par l'IA → résultat immédiat.", content: <CommitList /> },
    { title: "Team Spirit", description: "Évolue dans une vibe collaborative, partage tes skills et ton énergie.", content: <CommitList /> },
    { title: "Unfair Advantage", description: "Pendant que d'autres scrollent, toi tu crées. Ne passe pas à côté de cette compétence rare.", content: <DeploymentLog /> }
];

const practicalCards = [
    {
      icon: <MessageCircle className="h-5 w-5 text-accent" />,
      title: "Méthode",
      description: "Processus simple : tu discutes, tu structures, tu crées."
    },
    {
      icon: <Laptop className="h-5 w-5 text-accent" />,
      title: "BYOD",
      description: "Apporte ton laptop, on fait le reste ensemble."
    },
    {
      icon: <Rocket className="h-5 w-5 text-accent" />,
      title: "Publication",
      description: "GitHub + déploiement → URL publique en 2h."
    }
];

export default function WhyCards() {
    return (
        <section id="why" className="py-20 md:py-32 bg-muted/30">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl font-headline">
                        Pourquoi rejoindre Vibe Coding Paris ?
                    </h2>
                    <p className="mt-4 text-lg text-muted-foreground">
                        Ton unfair advantage dans la révolution Gen AI.
                    </p>
                </div>

                {/* Cartes principales */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {features.map((feature, index) => (
                        <Card key={index} className="flex flex-col overflow-hidden bg-card/80 backdrop-blur-sm transition-all hover:scale-[1.02] hover:shadow-lg">
                            <CardHeader>
                                <CardTitle className="font-headline text-xl">{feature.title}</CardTitle>
                                <p className="text-sm font-normal text-muted-foreground pt-1">{feature.description}</p>
                            </CardHeader>
                            <CardContent className="flex-grow">
                                {feature.content}
                            </CardContent>
                        </Card>
                    ))}
                </div>
                
                {/* Petites cartes pratiques */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
                    {practicalCards.map((card, index) => (
                        <Card key={index} className="bg-background/60 backdrop-blur-sm border-accent/20 hover:border-accent/40 transition-colors">
                            <CardContent className="p-4 text-center">
                                <div className="flex flex-col items-center gap-2">
                                    {card.icon}
                                    <h3 className="font-semibold text-sm">{card.title}</h3>
                                    <p className="text-xs text-muted-foreground">{card.description}</p>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}