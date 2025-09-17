import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

export default function ProgrammeCard() {
  return (
    <section
      id="programme"
      aria-labelledby="programme-title"
      className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8"
    >
      {/* Background subtil */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-neutral-50 to-transparent dark:via-neutral-900/40"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <header className="mx-auto mb-12 max-w-3xl text-center">
          <h2
            id="programme-title"
            className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl font-headline"
          >
            Programme
          </h2>
          <p className="mt-3 text-base text-muted-foreground leading-relaxed">
            En 2h, transforme ton idée en projet concret.
          </p>
        </header>

        {/* Carte principale */}
        <Card className="transition-all hover:shadow-lg">
          <CardHeader className="text-center">
            <CardTitle className="font-headline text-2xl">Programme</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">

            <div>
              <h3 className="font-semibold text-lg mb-2 text-foreground">Apporte ton ordinateur</h3>
              <p className="text-muted-foreground leading-relaxed">
                Utilise tes propres fichiers et deviens un(e) Creative Product Builder.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2 text-foreground">De l'idée à l'intention</h3>
              <p className="text-muted-foreground leading-relaxed">
                Clarifie ton idée avec l'IA. Pose-la simplement, sans jargon.<br />
                Ensemble, nous transformons tes intuitions en une intention claire et actionnable.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2 text-foreground">Stratégie & cadrage</h3>
              <p className="text-muted-foreground leading-relaxed">
                Avec la méthode Kindlin, tu formules ton problème,<br />
                explores la solution, définis ton business model et ton pricing.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2 text-foreground">Travail avec l'IA</h3>
              <p className="text-muted-foreground leading-relaxed">
                Apprends à dialoguer et à "prompt-er" efficacement.<br />
                Tu obtiens des outputs de qualité, tout en gardant la maîtrise de ton projet.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2 text-foreground">Extensions, APIs, itérations & Debugging</h3>
              <p className="text-muted-foreground leading-relaxed">
                Mets à jours, itère, corrige.<br />
                Ajoute une base simple, une API ou une extension.<br />
                Découvre les notions clés de sécurité et d'analytics.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2 text-foreground">Mise en ligne immédiate</h3>
              <p className="text-muted-foreground leading-relaxed">
                Ton projet prend vie :<br />
                AI Code Assistant → GitHub → Netlify/Vercel → AI Code Asynchrone<br />
                Au bout de 2h, tu repars avec une URL publique et partageable.<br />
                Tu poursuis le développement en autonomie ou tu lances un nouveau projet !
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2 text-foreground">Ton premier rôle de Creative Product Builder</h3>
              <p className="text-muted-foreground leading-relaxed">
                Tu pilotes le design, le code, le SEO, le versioning, ...<br />
                Creative Product Builder : « Agency of One ».<br />
                Ressources & prochaines étapes pour continuer en autonomie.
              </p>
            </div>

          </CardContent>
        </Card>
      </div>
    </section>
  );
}