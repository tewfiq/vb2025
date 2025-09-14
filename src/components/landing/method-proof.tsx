import Link from 'next/link';
import { Button } from '@/components/ui/button';
import ChangelogGithub from '@/components/ChangelogGithub';

export default function MethodProof() {
  const steps = [
    {
      step: "1",
      title: "Tu poses l'idée",
      text: "Tu écris en français. On clarifie l'intention et le scope. Rien d'autre.",
      meta: "BYOD — viens avec ton laptop.",
      icon: "📝"
    },
    {
      step: "2", 
      title: "L'IA structure et génère",
      text: "ChatGPT, Claude ou Gemini transforment l'intention en code. Tu avances en comprenant.",
      meta: "Spec & tâches, pas de blabla.",
      icon: "🤖"
    },
    {
      step: "3",
      title: "C'est en ligne", 
      text: "GitHub → Netlify/Vercel. URL publique prête à partager. Immédiatement.",
      meta: "CI/CD simple, vérifications guidées.",
      icon: "🚀"
    }
  ];

  const techBadges = [
    {
      icon: "⚡",
      label: "Next.js 15",
      note: "Prototypage → production"
    },
    {
      icon: "🎨", 
      label: "Tailwind CSS",
      note: "Design system rapide"
    },
    {
      icon: "🐙",
      label: "GitHub", 
      note: "Versionning & historique"
    },
    {
      icon: "☁️",
      label: "Netlify / Vercel",
      note: "Déploiement instantané"
    },
    {
      icon: "♻️",
      label: "Itération continue",
      note: "Chaque merge → nouvelle entrée"
    }
  ];

  return (
    <section id="method-proof" className="py-12 md:py-20 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-12 md:mb-20">
          <div className="mb-4 text-sm font-bold uppercase tracking-wider text-accent">
            Processus + preuve, en un coup d'œil
          </div>
          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl md:text-4xl lg:text-5xl font-headline mb-6">
            Comment ça marche (et pourquoi tu peux y croire)
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
            Pas de jargon. Pas de promesses. Un process qui tient en trois mouvements — et un site qui en est la preuve.
          </p>
        </div>

        {/* Timeline horizontal */}
        <div className="max-w-6xl mx-auto mb-16 md:mb-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Connector line (desktop only) */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-12 left-full w-12 h-0.5 bg-border z-0" 
                       style={{ transform: 'translateX(-50%)' }} />
                )}
                
                <div className="neo-brutalist-card p-6 relative z-10 text-center">
                  <div className="text-4xl mb-4">{step.icon}</div>
                  <div className="w-8 h-8 mx-auto mb-4 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-bold mb-3 font-headline">{step.title}</h3>
                  <p className="text-muted-foreground text-sm mb-3">{step.text}</p>
                  <div className="text-xs text-accent font-medium">{step.meta}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Proof Section */}
        <div className="max-w-5xl mx-auto mb-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold mb-4 font-headline">Proof of concept</h3>
            <p className="text-muted-foreground">
              Le site que tu lis est construit avec la même méthode.
            </p>
          </div>

          {/* Tech badges */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-12">
            {techBadges.map((badge, index) => (
              <div key={index} className="neo-brutalist-card p-4 text-center">
                <div className="text-2xl mb-2">{badge.icon}</div>
                <div className="text-sm font-bold mb-1">{badge.label}</div>
                <div className="text-xs text-muted-foreground">{badge.note}</div>
              </div>
            ))}
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button variant="outline" asChild className="neo-brutalist-button">
              <Link 
                href="https://github.com/tewfiq/vb2025/pulls?q=is%3Apr+is%3Amerged" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Voir les itérations
              </Link>
            </Button>
            <Button variant="outline" asChild className="neo-brutalist-button">
              <Link href="#faq">
                Pourquoi cette méthode ?
              </Link>
            </Button>
          </div>
        </div>

        {/* Embedded Changelog */}
        {/* @ts-expect-error Server Component */}
        <ChangelogGithub />

        {/* Footer */}
        <div className="text-center mt-12 pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground font-medium">
            Une compétence en 2h. Une méthode réutilisable après l'atelier.{" "}
            <span className="text-foreground">Business, rien de personnel.</span>
          </p>
        </div>
      </div>
    </section>
  );
}