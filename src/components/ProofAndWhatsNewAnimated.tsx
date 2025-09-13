"use client";
import { useMemo, useEffect, useRef, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

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
        date: "récemment",
        title: "Changelog compatible light/dark",
        text:
          "Refactorisation de la section 'Quoi de neuf ?' pour respecter le design system et fonctionner en light/dark mode.",
      },
      {
        date: "récemment",
        title: "Itération continue",
        text:
          "Ajout d'une carte 'Itération continue' et ajustement du footer pour refléter le cycle d'amélioration.",
      },
      {
        date: "récemment",
        title: "Stack & Méthode",
        text:
          "Section 'proof of concept' pour expliquer que ce site applique la méthode Vibe Coding.",
      },
      {
        date: "récemment",
        title: "Lisibilité du Hero",
        text:
          "Titrages et sauts de ligne optimisés pour une lecture plus rapide sur mobile et desktop.",
      },
      {
        date: "récemment",
        title: "Mobile & performances",
        text:
          "Optimisations responsive et rationalisation des espacements pour une navigation plus fluide.",
      },
      {
        date: "récemment",
        title: "Dark mode",
        text:
          "Amélioration du rendu des logos partenaires en mode sombre.",
      },
      {
        date: "récemment",
        title: "Sections pédagogiques",
        text:
          "Refonte des sections Méthode / BYOD en cartes plus claires et animées.",
      },
    ],
    []
  );

  const bar = useInView<HTMLDivElement>();
  const list = useInView<HTMLDivElement>();

  return (
    <section id="proof" className="py-12 md:py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 max-w-6xl">
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

        {/* Changelog cards */}
        <div
          ref={list.ref}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
        >
          {changes.map((change, index) => (
            <Card
              key={`${change.title}-${index}`}
              className={`flex flex-col overflow-hidden bg-card/80 backdrop-blur-sm transition-all duration-500 hover:scale-[1.02] hover:shadow-lg
              ${list.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}`}
              style={{ transitionDelay: `${index * 70}ms` }}
            >
              <CardHeader>
                <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                  <span className="inline-block h-2 w-2 rounded-full bg-violet-500" aria-hidden />
                  <time>{change.date}</time>
                </div>
                <CardTitle className="font-headline text-xl">{change.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-sm text-muted-foreground leading-relaxed">{change.text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}