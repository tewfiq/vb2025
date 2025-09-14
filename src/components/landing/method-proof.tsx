import Link from 'next/link';
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
        {/* ManifestoCard Header */}
        <div className="mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8 mb-16 md:mb-24">
          <div className="relative">
            <div
              aria-hidden
              className="pointer-events-none absolute left-3 top-3 h-full w-full rounded-xl bg-black/90"
            />
            <article className="relative rounded-xl border-2 border-black bg-white p-7 sm:p-10">
              {/* Kicker */}
              <p className="mb-2 text-center text-xs font-bold uppercase tracking-[0.18em] text-black">
                Compétence clé
              </p>

              {/* Titre */}
              <h2 className="text-center text-3xl font-extrabold leading-tight text-black sm:text-4xl">
                Vibe Coding, indispensable en 2025
              </h2>

              {/* Sous-titre */}
              <p className="mt-2 text-center text-sm text-neutral-700">
                De l'idée au projet en ligne, en 2 heures.
              </p>

              {/* Divider brut */}
              <div className="mx-auto my-6 h-2 w-16 bg-black" />

              {/* Corps */}
              <div className="mx-auto max-w-3xl space-y-4 text-[17px] leading-7 text-neutral-900">
                <p>
                  Le Vibe Coding est une <strong>compétence digitale opérationnelle</strong>.
                  Elle permet de transformer une intention claire en produit fonctionnel :
                  idée posée, code généré par l'IA, projet déployé immédiatement.
                </p>
                <p>
                  En 2025, maîtriser ce process rapide et structuré, c'est tenir la posture
                  de <strong>Product Builder</strong> : passer du concept à un résultat
                  exploitable, puis poursuivre en itérations continues. Ni théorie, ni
                  promesse&nbsp;: une méthode directe et réutilisable.
                </p>
              </div>

              {/* Chips */}
              <ul className="mt-6 flex flex-wrap justify-center gap-2">
                {[
                  "Idée → code → déploiement",
                  "Méthode directe",
                  "Résultat en 2h",
                  "Compétence réutilisable",
                ].map((label) => (
                  <li
                    key={label}
                    className="rounded-md border-2 border-black bg-white px-3 py-1 text-xs font-semibold text-black shadow-[4px_4px_0_0_#000]"
                  >
                    {label}
                  </li>
                ))}
              </ul>

              {/* CTAs brutaux */}
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <a
                  href="#pricing"
                  className="inline-flex items-center justify-center rounded-lg border-2 border-black bg-[#A020F0] px-5 py-3 text-sm font-extrabold uppercase tracking-wide text-white shadow-[6px_6px_0_0_#000] transition-transform active:translate-x-0.5 active:translate-y-0.5"
                >
                  Tester en 2h
                </a>
                <a
                  href="#method-timeline"
                  className="inline-flex items-center justify-center rounded-lg border-2 border-black bg-white px-5 py-3 text-sm font-extrabold uppercase tracking-wide text-black shadow-[6px_6px_0_0_#000] transition-transform active:translate-x-0.5 active:translate-y-0.5"
                >
                  Voir la méthode
                </a>
              </div>
            </article>
          </div>
        </div>

        {/* Timeline horizontal - Neo-brutalist style */}
        <div id="method-timeline" className="max-w-6xl mx-auto mb-16 md:mb-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Connector line (desktop only) */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-12 left-full w-12 h-0.5 bg-black z-0" 
                       style={{ transform: 'translateX(-50%)' }} />
                )}
                
                <div className="relative">
                  <div
                    aria-hidden
                    className="pointer-events-none absolute left-2 top-2 h-full w-full rounded-lg bg-black/90"
                  />
                  <div className="relative rounded-lg border-2 border-black bg-white p-6 text-center">
                    <div className="text-4xl mb-4">{step.icon}</div>
                    <div className="w-8 h-8 mx-auto mb-4 rounded-full bg-[#A020F0] text-white flex items-center justify-center font-bold text-sm">
                      {step.step}
                    </div>
                    <h3 className="text-xl font-extrabold mb-3 text-black">{step.title}</h3>
                    <p className="text-neutral-700 text-sm mb-3">{step.text}</p>
                    <div className="text-xs text-[#A020F0] font-bold uppercase tracking-wide">{step.meta}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Proof Section - Neo-brutalist style */}
        <div className="max-w-5xl mx-auto mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-extrabold mb-4 text-black">Proof of concept</h3>
            <p className="text-neutral-700 text-lg">
              Le site que tu lis est construit avec la même méthode.
            </p>
          </div>

          {/* Tech badges - Neo-brutalist style */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-12">
            {techBadges.map((badge, index) => (
              <div key={index} className="relative">
                <div
                  aria-hidden
                  className="pointer-events-none absolute left-1.5 top-1.5 h-full w-full rounded-md bg-black/90"
                />
                <div className="relative rounded-md border-2 border-black bg-white p-4 text-center">
                  <div className="text-2xl mb-2">{badge.icon}</div>
                  <div className="text-sm font-bold mb-1 text-black">{badge.label}</div>
                  <div className="text-xs text-neutral-600">{badge.note}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Actions - Neo-brutalist style */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <a
              href="https://github.com/tewfiq/vb2025/pulls?q=is%3Apr+is%3Amerged"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-lg border-2 border-black bg-white px-5 py-3 text-sm font-extrabold uppercase tracking-wide text-black shadow-[6px_6px_0_0_#000] transition-transform active:translate-x-0.5 active:translate-y-0.5"
            >
              Voir les itérations
            </a>
            <a
              href="#faq"
              className="inline-flex items-center justify-center rounded-lg border-2 border-black bg-white px-5 py-3 text-sm font-extrabold uppercase tracking-wide text-black shadow-[6px_6px_0_0_#000] transition-transform active:translate-x-0.5 active:translate-y-0.5"
            >
              Pourquoi cette méthode ?
            </a>
          </div>
        </div>

        {/* Embedded Changelog */}
        {/* @ts-expect-error Server Component */}
        <ChangelogGithub />

        {/* Footer - Neo-brutalist style */}
        <div className="text-center mt-12 pt-8">
          <div className="mx-auto w-fit relative">
            <div
              aria-hidden
              className="pointer-events-none absolute left-1 top-1 h-full w-full rounded-md bg-black/90"
            />
            <div className="relative rounded-md border-2 border-black bg-white px-6 py-4">
              <p className="text-sm font-bold text-black">
                Une compétence en 2h. Une méthode réutilisable après l'atelier.{" "}
                <span className="text-[#A020F0]">Business, rien de personnel.</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}