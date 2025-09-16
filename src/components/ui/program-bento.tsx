"use client";

import { ReactNode, useEffect, useRef, useState } from "react";
import {
  LightningBoltIcon,
  TargetIcon,
  MagicWandIcon,
  Link2Icon,
  GlobeIcon,
  RocketIcon,
  ArrowRightIcon
} from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

// Hook pour fade-in on scroll
function useInView<T extends HTMLElement>(options?: IntersectionObserverInit) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(([entry]) => {
      setInView(entry.isIntersecting);
    }, { threshold: 0.15, ...(options || {}) });
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, [options]);
  return { ref, inView };
}

// Types pour les cartes
interface ProgramCard {
  icon: 'LightningBoltIcon' | 'TargetIcon' | 'MagicWandIcon' | 'Link2Icon' | 'GlobeIcon' | 'RocketIcon';
  title: string;
  copy: string;
  emphasis_bg?: string;
  rowcol: string;
}

interface ProgramBentoSectionProps {
  headline: string;
  kicker: string;
  cards: ProgramCard[];
  className?: string;
}

// Mapping des icônes
const iconMap = {
  LightningBoltIcon,
  TargetIcon,
  MagicWandIcon,
  Link2Icon,
  GlobeIcon,
  RocketIcon,
};

// Composant pour le gradient emphasis
const EmphasisBackground = () => (
  <div className="absolute inset-0 opacity-10">
    <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-violet-400 rounded-2xl" />
  </div>
);

// Composant carte Bento spécialisé pour le programme
const ProgramBentoCard = ({
  card,
  index,
  inView,
}: {
  card: ProgramCard;
  index: number;
  inView: boolean;
}) => {
  const IconComponent = iconMap[card.icon];
  const hasEmphasis = card.emphasis_bg?.includes('gradient:blue->violet');

  return (
    <div
      className={cn(
        "group relative flex flex-col justify-between overflow-hidden rounded-2xl",
        "bg-card border border-border shadow-sm",
        "transform-gpu transition-all duration-300 hover:-translate-y-[10px] hover:shadow-lg",
        "min-h-[200px]",
        card.rowcol,
        `transition-all duration-300 ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`
      )}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Background avec emphasis si nécessaire */}
      {hasEmphasis && <EmphasisBackground />}

      {/* Veil sur hover */}
      <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-black/5 dark:group-hover:bg-white/5 rounded-2xl" />

      {/* Contenu principal */}
      <div className="pointer-events-none z-10 flex transform-gpu flex-col gap-3 p-6 transition-all duration-300 group-hover:-translate-y-1 h-full">
        <IconComponent
          className="h-10 w-10 origin-left transform-gpu text-accent transition-all duration-300 ease-in-out group-hover:scale-90 flex-shrink-0"
          aria-hidden="true"
        />
        <div className="flex-1 flex flex-col">
          <h3 className="text-base lg:text-lg font-semibold text-foreground font-headline leading-tight mb-3">
            {card.title}
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed flex-1">
            {card.copy}
          </p>
        </div>
      </div>

    </div>
  );
};

// Composant principal ProgramBentoSection
export function ProgramBentoSection({
  headline,
  kicker,
  cards,
  className
}: ProgramBentoSectionProps) {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <section
      id="programme"
      aria-labelledby="programme-title"
      className={cn("relative mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8", className)}
    >
      {/* Background subtil */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-neutral-50 to-transparent dark:via-neutral-900/40"
        aria-hidden="true"
      />

      <div
        ref={ref}
        className={`transition-opacity duration-700 ease-out ${
          inView ? "opacity-100" : "opacity-0"
        }`}
      >
        {/* Header */}
        <header className="mx-auto mb-12 max-w-3xl text-center">
          <h2
            id="programme-title"
            className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl font-headline"
          >
            {headline}
          </h2>
          <p className="mt-3 text-base text-muted-foreground leading-relaxed">
            {kicker}
          </p>
        </header>

        {/* Bento Grid 2×3 */}
        <div className="w-full">
          <div className="grid w-full auto-rows-[200px] sm:auto-rows-[220px] lg:auto-rows-[240px] grid-cols-1 gap-4 lg:grid-cols-3 lg:grid-rows-3">
            {cards.map((card, index) => (
              <ProgramBentoCard
                key={card.title}
                card={card}
                index={index}
                inView={inView}
              />
            ))}
          </div>
        </div>

        {/* CTA Global */}
        <div className="mt-12 flex justify-center">
          <Button variant="outline" size="lg" asChild>
            <a
              href="#infos"
              className="inline-flex items-center gap-2"
              onClick={() => {
                if (typeof window !== 'undefined' && window.gtag) {
                  window.gtag('event', 'click_bento_cta', {
                    event_category: 'Programme Bento',
                    event_label: 'Global CTA - Voir modalités inscription',
                  });
                }
              }}
            >
              Voir les modalités d'inscription
              <ArrowRightIcon className="h-4 w-4" aria-hidden="true" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}

// Export par défaut du composant avec les données v6
export default function ProgramBentoDefaultV6() {
  const cardsData: ProgramCard[] = [
    {
      icon: "LightningBoltIcon",
      title: "De l'idée à l'intention",
      copy: "Clarifie ton idée ou génère-la avec un LLM. Pose-la simplement, sans jargon technique. On part de tes intuitions pour construire une intention claire et actionnable. Cette étape détermine tout le reste : mieux tu defines ton projet, plus l'IA peut t'aider efficacement.",
      emphasis_bg: "gradient:blue->violet (10% opacity)",
      rowcol: "lg:row-start-1 lg:row-end-3 lg:col-start-1 lg:col-end-2",
    },
    {
      icon: "TargetIcon",
      title: "Stratégie & cadrage",
      copy: "Problème/Solution avec la méthode Kindlin. Business model & pricing. Un meta prompt solide guide la suite.",
      rowcol: "lg:row-start-1 lg:row-end-2 lg:col-start-2 lg:col-end-3",
    },
    {
      icon: "MagicWandIcon",
      title: "Travailler avec l'IA",
      copy: "Apprends à converser et prompter efficacement. Obtiens des outputs de qualité. Tu restes owner du process.",
      rowcol: "lg:row-start-2 lg:row-end-3 lg:col-start-2 lg:col-end-3",
    },
    {
      icon: "Link2Icon",
      title: "Extensions & APIs",
      copy: "Ajoute une base simple, une API ou une extension. Notions: sécurité & analytics.",
      rowcol: "lg:row-start-1 lg:row-end-2 lg:col-start-3 lg:col-end-4",
    },
    {
      icon: "GlobeIcon",
      title: "Mise en ligne",
      copy: "GitHub → Netlify/Vercel. À la fin: une URL publique partageable, immédiate.",
      rowcol: "lg:row-start-2 lg:row-end-3 lg:col-start-3 lg:col-end-4",
    },
    {
      icon: "RocketIcon",
      title: "Ton rôle de Product Builder",
      copy: "Pilote design, code, SEO, versioning. Posture « Agency of One ». Suite: ressources & prochaines étapes.",
      rowcol: "lg:row-start-3 lg:row-end-4 lg:col-start-1 lg:col-end-4",
    },
  ];

  return (
    <ProgramBentoSection
      headline="Programme"
      kicker="En 2h, transforme une idée en projet concret. Apporte ton ordinateur, utilise tes propres fichiers."
      cards={cardsData}
    />
  );
}