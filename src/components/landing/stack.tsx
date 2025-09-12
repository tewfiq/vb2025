import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const stackCards = [
  {
    name: "Next.js 15",
    description: "Framework front-end moderne, idéal pour prototyper et passer en production.",
    icon: "⚡"
  },
  {
    name: "Tailwind CSS",
    description: "Design system réactif et cohérent, pensé pour aller vite sans sacrifier la lisibilité.",
    icon: "🎨"
  },
  {
    name: "Firebase Studio",
    description: "Orchestration, base de données et hosting intégrés pour itérer sans friction.",
    icon: "🔥"
  },
  {
    name: "Netlify / Vercel",
    description: "Déploiement instantané, CI/CD automatisé, URL publique en quelques secondes.",
    icon: "🚀"
  },
  {
    name: "GitHub",
    description: "Versionning, collaboration et historique : garder trace de chaque itération.",
    icon: "🐙"
  },
  {
    name: "Itération continue",
    description: "Au-delà de l'atelier de 2h : poursuivre avec des outils de coding asynchrone (Claude Code, Gemini CLI, Qwen, Codex…). Chaque session ouvre sur une trajectoire durable.",
    icon: "🔄"
  }
];

export default function Stack() {
  return (
    <section id="stack" className="py-12 md:py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center max-w-3xl mx-auto mb-8 md:mb-16">
          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl md:text-4xl lg:text-5xl font-headline">
            Stack & Méthode
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Ce site est lui-même un proof of concept de Vibe Coding.
          </p>
          <p className="mt-2 text-sm text-muted-foreground">
            Construit en rapid prototyping, déployé en production continue. 
            L'approche montre qu'avec la méthode Vibe Coding, on peut bâtir rapidement 
            tout type de dispositif digital — site, app, outil interne ou expérimentation.
          </p>
        </div>

        {/* Cartes de la stack */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {stackCards.map((card, index) => (
            <Card key={index} className="flex flex-col overflow-hidden bg-card/80 backdrop-blur-sm transition-all hover:scale-[1.02] hover:shadow-lg">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl">{card.icon}</span>
                  <CardTitle className="font-headline text-xl">{card.name}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-sm text-muted-foreground">{card.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Footer text */}
        <div className="text-center mt-8 md:mt-12">
          <p className="text-sm text-muted-foreground italic">
            La stack peut varier. L'important, c'est le processus : une idée → un prototype → en ligne → une itération continue.
          </p>
        </div>
      </div>
    </section>
  );
}