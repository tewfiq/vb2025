"use client";
import { useEffect, useRef, useState } from "react";
import GradientBlobCard from "@/components/ui/gradient-bold-card";

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

// Étapes du programme
const STEPS = [
  {
    icon: "💡",
    title: "1. De l’idée à l’intention",
    text: "Vous arrivez avec une idée, ou sans idée : on la pose simplement, en français, sans jargon."
  },
  {
    icon: "🤖",
    title: "2. L’IA fait le travail",
    text: "ChatGPT, Claude ou Gemini génèrent le code. Vous guidez, vous comprenez, vous progressez."
  },
  {
    icon: "🌐",
    title: "3. Votre projet en ligne",
    text: "En fin d’atelier : dépôt GitHub + URL publique. Un résultat concret, partageable immédiatement."
  }
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
            className="text-3xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-50 sm:text-4xl"
          >
            Programme
          </h2>
          <p className="mt-3 text-neutral-600 dark:text-neutral-300">
            En 2h, découvrez comment transformer une idée en projet concret.
            <br />
            Apportez votre ordinateur, utilisez vos propres fichiers.
          </p>
        </header>

        {/* Grid 3 steps */}
        <ul className="grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-3">
          {STEPS.map((s, i) => (
            <li
              key={s.title}
              className={`group relative overflow-hidden rounded-2xl
                transition-all duration-300 hover:-translate-y-0.5
                ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <GradientBlobCard 
                icon={s.icon}
                title={s.title}
                text={s.text}
              />
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="mt-10 flex justify-center">
          <a
            href="#pricing"
            className="inline-flex items-center gap-2 rounded-2xl border border-neutral-300 px-5 py-3 text-sm font-medium text-neutral-900 transition hover:bg-neutral-50 dark:border-neutral-700 dark:text-neutral-100 dark:hover:bg-neutral-800"
          >
            Voir les modalités d’inscription
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