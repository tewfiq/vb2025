export default function Newcomers() {
  const bullets = [
    "Créer ton premier compte et dépôt GitHub",
    "Déployer ton projet sur Netlify (ou Vercel)",
    "Obtenir ton URL publique et partageable"
  ];

  return (
    <section id="newcomers" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl font-headline">
            GitHub + Netlify pour les nouveaux
          </h2>
          <p className="mt-8 text-lg text-muted-foreground leading-relaxed">
            Ton premier repo. Ton premier site.<br />
            Tu n'as jamais utilisé GitHub ou déployé un projet ?<br />
            Pas de problème : en 2h, tu crées ton dépôt, tu déploies ton projet,<br />
            et tu repars avec une URL publique.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <ul className="space-y-6">
            {bullets.map((bullet, index) => (
              <li key={index} className="flex items-start gap-4 text-lg">
                <span className="flex-shrink-0 w-2 h-2 bg-accent rounded-full mt-3"></span>
                <span className="text-foreground">{bullet}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}