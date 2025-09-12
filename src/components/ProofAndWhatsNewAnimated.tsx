// /components/ProofAndWhatsNewAnimated.tsx
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
  const list = useInView<HTMLUListElement>();

  return (
    <section
      id="proof"
      aria-labelledby="proof-title"
      className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 lg:px-8"
    >
      {/* ProofBar */}
      <div
        ref={bar.ref}
        className={`mx-auto mb-8 flex w-full flex-wrap items-center justify-center gap-3 rounded-2xl border border-neutral-800/60 bg-neutral-900/50 px-4 py-3 text-sm text-neutral-300 backdrop-blur transition-all duration-700 ease-out
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
            <span className="text-neutral-400">{m.label}</span>
            <span className="h-1 w-1 rounded-full bg-neutral-600" aria-hidden />
            <span className="font-medium text-white">{m.value}</span>
          </div>
        ))}
      </div>

      {/* What's new */}
      <header className="mb-6 text-center">
        <h2
          id="proof-title"
          className="text-2xl font-semibold tracking-tight text-neutral-50 sm:text-3xl"
        >
          Quoi de neuf ?
        </h2>
        <p className="mt-2 text-sm text-neutral-400">
          Ce site est un proof of concept vivant : cycles courts, résultats visibles.
        </p>
      </header>

      <ul
        ref={list.ref}
        className="grid grid-cols-1 gap-4 md:grid-cols-2"
      >
        {changes.map((c, i) => (
          <li
            key={`${c.title}-${i}`}
            className={`group rounded-2xl border border-neutral-800/60 bg-neutral-900/40 p-5 shadow-sm transition-all duration-500 hover:bg-neutral-900
            ${list.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}`}
            style={{ transitionDelay: `${i * 70}ms` }}
          >
            <div className="flex items-center gap-2 text-xs text-neutral-400">
              <span className="inline-block h-2 w-2 rounded-full bg-violet-500" aria-hidden />
              <time>{c.date}</time>
            </div>
            <h3 className="mt-2 text-base font-medium text-neutral-100">
              {c.title}
            </h3>
            <p className="mt-1 text-sm leading-relaxed text-neutral-300">
              {c.text}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}