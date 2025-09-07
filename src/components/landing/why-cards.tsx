import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageCircle, Wrench, Github } from "lucide-react";

export default function WhyCards() {
  const cards = [
    {
      icon: <MessageCircle className="h-8 w-8 text-accent" />,
      title: "La méthode Vibe Coding",
      description: "Pas de recette miracle. Pas de jargon inutile.",
      content: "Vibe Coding, c'est un processus simple : tu discutes, tu structures, tu crées. Le reste, tu l'exploites comme tu veux.",
      bullets: [
        "Apprendre à coder en parlant : explorer avec ChatGPT, Claude ou Gemini",
        "Donner de la forme à ses idées : passer de l'intuition à une version exploitable",
        "Obtenir un projet concret : repo GitHub + URL publique en 2h",
        "Une méthode claire : une compétence, rien de personnel"
      ]
    },
    {
      icon: <Wrench className="h-8 w-8 text-accent" />,
      title: "BYOD — Apporte ton ordinateur",
      description: "L'atelier est en mode BYOD (Bring Your Own Device).",
      content: "Tu viens avec ton laptop, c'est tout ce qu'il faut. On fait le reste ensemble.",
      bullets: []
    },
    {
      icon: <Github className="h-8 w-8 text-accent" />,
      title: "GitHub + Netlify pour les nouveaux",
      description: "Ton premier repo. Ton premier site.",
      content: "Tu n'as jamais utilisé GitHub ou déployé un projet ? Pas de problème : en 2h, tu crées ton dépôt, tu déploies ton projet, et tu repars avec une URL publique.",
      bullets: [
        "Créer ton premier compte et dépôt GitHub",
        "Déployer ton projet sur Netlify (ou Vercel)",
        "Obtenir ton URL publique et partageable"
      ]
    }
  ];

  return (
    <section id="why" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl font-headline">
            Pourquoi rejoindre Vibe Coding ?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {cards.map((card, index) => (
            <Card key={index} className="flex flex-col h-full bg-card/80 backdrop-blur-sm transition-all hover:scale-[1.02] hover:shadow-lg">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3 mb-3">
                  {card.icon}
                  <CardTitle className="font-headline text-xl">{card.title}</CardTitle>
                </div>
                <p className="text-sm text-muted-foreground font-medium">{card.description}</p>
              </CardHeader>
              <CardContent className="flex-1 space-y-4">
                <p className="text-foreground leading-relaxed">{card.content}</p>
                {card.bullets.length > 0 && (
                  <ul className="space-y-3">
                    {card.bullets.map((bullet, bulletIndex) => (
                      <li key={bulletIndex} className="flex items-start gap-3 text-sm">
                        <span className="flex-shrink-0 w-1.5 h-1.5 bg-accent rounded-full mt-2"></span>
                        <span className="text-muted-foreground">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}