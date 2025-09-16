"use client";
import { useEffect, useRef, useState } from "react";
import {
  LightningBoltIcon,
  TargetIcon,
  MagicWandIcon,
  Link2Icon,
  GlobeIcon,
  RocketIcon,
} from "@radix-ui/react-icons";

import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";

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

// petit helper visuel pour le fond
const Bg = () => (
  <div className="absolute inset-0">
    <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full opacity-20 blur-2xl bg-gradient-to-br from-blue-400 to-violet-400" />
    <div className="absolute -left-24 -bottom-24 h-64 w-64 rounded-full opacity-10 blur-2xl bg-gradient-to-br from-emerald-300 to-cyan-400" />
  </div>
);

const features = [
  {
    Icon: LightningBoltIcon,
    name: "1) De l'idée à l'intention",
    description:
      "Clarifie ton idée (ou génère-la avec un LLM). Pose-la simplement, sans jargon.",
    href: "#infos",
    cta: "Voir les modalités",
    background: <Bg />,
    className: "lg:row-start-1 lg:row-end-3 lg:col-start-1 lg:col-end-2",
  },
  {
    Icon: TargetIcon,
    name: "2) Stratégie & cadrage",
    description:
      "Problème/Solution (Kindlin), business model & pricing. Un meta prompt solide guide la suite.",
    href: "#infos",
    cta: "Voir les modalités",
    background: <Bg />,
    className: "lg:row-start-1 lg:row-end-2 lg:col-start-2 lg:col-end-3",
  },
  {
    Icon: MagicWandIcon,
    name: "3) Travailler avec l'IA",
    description:
      "Apprends à converser et prompter. Obtiens des outputs de qualité. Tu restes owner du process.",
    href: "#infos",
    cta: "Voir les modalités",
    background: <Bg />,
    className: "lg:row-start-2 lg:row-end-3 lg:col-start-2 lg:col-end-3",
  },
  {
    Icon: Link2Icon,
    name: "4) Extensions & APIs",
    description:
      "Ajoute une base simple, une API ou une extension. Notions: sécurité & analytics.",
    href: "#infos",
    cta: "Voir les modalités",
    background: <Bg />,
    className: "lg:row-start-1 lg:row-end-2 lg:col-start-3 lg:col-end-4",
  },
  {
    Icon: GlobeIcon,
    name: "5) Mise en ligne",
    description:
      "GitHub → Netlify/Vercel. À la fin: une URL publique partageable, immédiate.",
    href: "#infos",
    cta: "Voir les modalités",
    background: <Bg />,
    className: "lg:row-start-2 lg:row-end-3 lg:col-start-3 lg:col-end-4",
  },
  {
    Icon: RocketIcon,
    name: "6) Ton rôle de Product Builder",
    description:
      "Pilote design, code, SEO, versioning. Posture « Agency of One ». Suite: ressources & prochaines étapes.",
    href: "#infos",
    cta: "Voir les modalités",
    background: <Bg />,
    className: "lg:row-start-3 lg:row-end-4 lg:col-start-1 lg:col-end-4",
  },
];

export default function Programme() {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <section
      id="programme"
      aria-labelledby="programme-title"
      className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8"
    >
      {/* Background subtil */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-neutral-50 to-transparent dark:via-neutral-900/40"
        aria-hidden
      />

      <div
        ref={ref}
        className={`transition-opacity duration-700 ease-out ${
          inView ? "opacity-100" : "opacity-0"
        }`}
      >
        {/* Header */}
        <header className="mx-auto mb-10 max-w-3xl text-center">
          <h2
            id="programme-title"
            className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl font-headline"
          >
            Programme
          </h2>
          <p className="mt-3 text-muted-foreground">
            En 2h, transforme une idée en projet concret. Apporte ton ordinateur, utilise tes propres fichiers.
          </p>
        </header>

        {/* Bento Grid 2×3 */}
        <div
          className={`transition-all duration-700 ease-out ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <BentoGrid className="lg:grid-rows-3">
            {features.map((f, i) => (
              <div
                key={f.name}
                className={`transition-all duration-300 ${
                  inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <BentoCard {...f} />
              </div>
            ))}
          </BentoGrid>
        </div>

        {/* CTA */}
        <div className="mt-10 flex justify-center">
          <a
            href="#pricing"
            className="inline-flex items-center gap-2 rounded-2xl border border-border bg-background px-5 py-3 text-sm font-medium text-foreground transition hover:bg-accent hover:text-accent-foreground"
          >
            Voir les modalités d'inscription
            <svg
              className="h-4 w-4"
              viewBox="0 0 20 20"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M5 10h10M10 5l5 5-5 5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}