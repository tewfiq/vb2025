"use client";
import { useMemo, useEffect, useRef, useState } from "react";

function useInView<T extends HTMLElement>(opts?: IntersectionObserverInit) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const io = new IntersectionObserver(
      ([e]) => setInView(e.isIntersecting),
      { threshold: 0.15, ...(opts || {}) }
    );
    io.observe(ref.current);
    return () => io.disconnect();
  }, [opts]);
  return { ref, inView };
}

export default function ProofAndWhatsNewAnimated() {
  const metrics = useMemo(
    () => [
      { label: "Dév actif", value: "31 PRs fermées" },
      { label: "Dernière itération", value: "il y a quelques jours" },
      { label: "Cycle", value: "rapid prototyping → production continue" },
    ],
    []
  );

  const changes = useMemo(
    () => [
      {
        day: "13",
        month: "Sep",
        title: "Design changelog timeline",
        text: "Refonte de la section en véritable changelog avec timeline et badges de type de changement.",
        type: "updated" as const,
      },
      {
        day: "12",
        month: "Sep", 
        title: "Changelog compatible light/dark",
        text: "Refactorisation de la section 'Quoi de neuf ?' pour respecter le design system et fonctionner en light/dark mode.",
        type: "updated" as const,
      },
      {
        day: "11",
        month: "Sep",
        title: "Itération continue",
        text: "Ajout d'une carte 'Itération continue' et ajustement du footer pour refléter le cycle d'amélioration.",
        type: "added" as const,
      },
      {
        day: "10",
        month: "Sep",
        title: "Stack & Méthode",
        text: "Section 'proof of concept' pour expliquer que ce site applique la méthode Vibe Coding.",
        type: "added" as const,
      },
      {
        day: "09",
        month: "Sep",
        title: "Lisibilité du Hero",
        text: "Titrages et sauts de ligne optimisés pour une lecture plus rapide sur mobile et desktop.",
        type: "updated" as const,
      },
      {
        day: "08",
        month: "Sep",
        title: "Mobile & performances",
        text: "Optimisations responsive et rationalisation des espacements pour une navigation plus fluide.",
        type: "updated" as const,
      },
      {
        day: "07",
        month: "Sep",
        title: "Dark mode",
        text: "Amélioration du rendu des logos partenaires en mode sombre.",
        type: "updated" as const,
      },
    ],
    []
  );

  const getTypeColor = (type: "added" | "updated" | "removed") => {
    switch (type) {
      case "added":
        return "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400";
      case "updated":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400";
      case "removed":
        return "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400";
    }
  };

  const bar = useInView<HTMLDivElement>();
  const list = useInView<HTMLDivElement>();

  return (
    <section id="proof" className="py-12 md:py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center max-w-3xl mx-auto mb-8 md:mb-16">
          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl md:text-4xl lg:text-5xl font-headline">
            Quoi de neuf ?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Ce site est un proof of concept vivant : cycles courts, résultats visibles.
          </p>
          <p className="mt-2 text-sm text-muted-foreground">
            C'est ce qu'on appelle un Changelog (le suivi des modifications).
          </p>
        </div>

        {/* ProofBar */}
        <div
          ref={bar.ref}
          className={`mx-auto mb-8 md:mb-12 flex w-full flex-wrap items-center justify-center gap-3 rounded-2xl border bg-card/80 backdrop-blur-sm px-4 py-3 text-sm transition-all duration-700 ease-out
          ${bar.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}`}
          role="status"
          aria-live="polite"
        >
          {metrics.map((m, i) => (
            <div
              key={m.label}
              className="flex items-center gap-2"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <span className="text-muted-foreground">{m.label}</span>
              <span className="h-1 w-1 rounded-full bg-muted-foreground/60" aria-hidden />
              <span className="font-medium text-foreground">{m.value}</span>
            </div>
          ))}
        </div>

        {/* Changelog timeline */}
        <div
          ref={list.ref}
          className="space-y-4"
        >
          {changes.map((change, index) => (
            <div
              key={`${change.title}-${index}`}
              className={`flex items-center gap-6 p-4 rounded-xl border bg-card/80 backdrop-blur-sm transition-all duration-500 hover:bg-card/90 hover:shadow-sm
              ${list.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}`}
              style={{ transitionDelay: `${index * 70}ms` }}
            >
              {/* Date */}
              <div className="flex flex-col items-center min-w-[60px] text-center">
                <span className="text-lg font-bold text-foreground leading-none">{change.day}</span>
                <span className="text-xs text-muted-foreground uppercase tracking-wide">{change.month}</span>
              </div>
              
              {/* Content */}
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-foreground text-base leading-tight">
                  {change.title}
                </h3>
                <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
                  {change.text}
                </p>
              </div>
              
              {/* Badge */}
              <div className="flex-shrink-0">
                <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${getTypeColor(change.type)}`}>
                  {change.type}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}