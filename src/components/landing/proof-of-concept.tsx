import ChangelogGithub from '@/components/ChangelogGithub';

export default function ProofOfConcept() {
  const features = [
    {
      icon: "⚡",
      title: "Next.js 15",
      text: "Framework moderne, idéal pour prototyper et passer en production."
    },
    {
      icon: "🎨",
      title: "Tailwind CSS",
      text: "Design system réactif et cohérent, pensé pour aller vite sans perdre en lisibilité."
    },
    {
      icon: "🔥",
      title: "Firebase Studio",
      text: "Orchestration, base de données et hosting intégrés."
    },
    {
      icon: "🚀",
      title: "Netlify / Vercel",
      text: "Déploiement instantané, CI/CD automatisé."
    },
    {
      icon: "🐙",
      title: "GitHub",
      text: "Versionning et historique de chaque itération."
    },
    {
      icon: "♻️",
      title: "Itération continue",
      text: "Chaque merge request génère une entrée dans le changelog. Cycle court, résultat visible."
    }
  ];

  return (
    <section id="proof-of-concept" className="py-12 md:py-20 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-8 md:mb-16">
          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl md:text-4xl lg:text-5xl font-headline">
            Preuve vivante
          </h2>
          <p className="mt-2 md:mt-4 text-base md:text-lg text-muted-foreground">
            Ce site est lui-même un proof of concept : conçu et déployé en Vibe Coding, avec itération continue.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="neo-brutalist-card p-6 rounded-lg"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2 font-headline">{feature.title}</h3>
              <p className="text-muted-foreground text-sm">{feature.text}</p>
            </div>
          ))}
        </div>

        {/* @ts-expect-error Server Component */}
        <ChangelogGithub />
      </div>
    </section>
  );
}