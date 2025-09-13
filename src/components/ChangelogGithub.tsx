// Server Component — Next.js App Router
// Affiche les dernières PR mergées comme changelog (minimal & sûr)

import React from "react";

// ❗️Configurer ces variables dans .env.local (serveur uniquement, pas NEXT_PUBLIC)
// GITHUB_TOKEN=ghp_xxx (scopes lecture sur le repo si privé)
// GITHUB_OWNER=tewfiq
// GITHUB_REPO=vb2025

const GH_TOKEN = process.env.GITHUB_TOKEN;
const GH_OWNER = process.env.GITHUB_OWNER;
const GH_REPO  = process.env.GITHUB_REPO;

// Nombre d'entrées à afficher & durée de cache (en secondes)
const PER_PAGE = 10;
const REVALIDATE_SECONDS = 300;

type Pull = {
  number: number;
  title: string;
  merged_at: string | null;
  html_url: string;
  user?: { login?: string };
};

async function fetchMergedPRs(): Promise<Pull[]> {
  if (!GH_OWNER || !GH_REPO) return [];

  const url = new URL(`https://api.github.com/repos/${GH_OWNER}/${GH_REPO}/pulls`);
  url.searchParams.set("state", "closed");
  url.searchParams.set("sort", "updated");
  url.searchParams.set("direction", "desc");
  url.searchParams.set("per_page", String(PER_PAGE));

  const headers: Record<string, string> = {
    Accept: "application/vnd.github+json",
    "X-GitHub-Api-Version": "2022-11-28",
    "User-Agent": "vibe-coding-changelog",
  };
  if (GH_TOKEN) headers.Authorization = `Bearer ${GH_TOKEN}`;

  const res = await fetch(url, {
    headers,
    // Revalidation côté serveur (évite de taper l'API à chaque vue)
    next: { revalidate: REVALIDATE_SECONDS },
  });

  if (!res.ok) {
    // On échoue en silence : la section ne casse pas la page
    return [];
  }

  const pulls = (await res.json()) as Pull[];
  return pulls.filter((p) => p.merged_at); // ne garder que les PR réellement mergées
}

export default async function ChangelogGithub() {
  const items = await fetchMergedPRs();

  // métriques simples
  const total = items.length;
  const latestISO = items[0]?.merged_at ?? null;
  const latestHuman = latestISO
    ? new Date(latestISO).toLocaleString(undefined, {
        year: "numeric",
        month: "short",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
      })
    : "—";

  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      {/* Proof bar compacte */}
      <div
        className="mx-auto mb-8 flex w-full flex-wrap items-center justify-center gap-3 rounded-2xl border border-neutral-200 bg-white/70 px-4 py-3 text-sm text-neutral-700 backdrop-blur
                   dark:border-neutral-800 dark:bg-neutral-900/50 dark:text-neutral-300"
        role="status"
        aria-live="polite"
      >
        <span className="text-neutral-500 dark:text-neutral-400">Dév actif</span>
        <span className="h-1 w-1 rounded-full bg-neutral-300 dark:bg-neutral-600" aria-hidden />
        <span className="font-medium text-neutral-900 dark:text-white">{total} merges</span>

        <span className="h-1 w-1 rounded-full bg-neutral-300 dark:bg-neutral-600" aria-hidden />
        <span className="text-neutral-500 dark:text-neutral-400">Dernière mise à jour</span>
        <span className="h-1 w-1 rounded-full bg-neutral-300 dark:bg-neutral-600" aria-hidden />
        <span className="font-medium text-neutral-900 dark:text-white">{latestHuman}</span>

        <span className="h-1 w-1 rounded-full bg-neutral-300 dark:bg-neutral-600" aria-hidden />
        <span className="text-neutral-500 dark:text-neutral-400">Cycle</span>
        <span className="h-1 w-1 rounded-full bg-neutral-300 dark:bg-neutral-600" aria-hidden />
        <span className="font-medium text-neutral-900 dark:text-white">
          rapid prototyping → production continue
        </span>
      </div>

      <header className="mb-6 text-center">
        <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-50 sm:text-3xl">
          Quoi de neuf ?
        </h2>
        <p className="mt-2 text-sm text-neutral-500 dark:text-neutral-400">
          Entrées auto-générées depuis les PR mergées du dépôt.
        </p>
      </header>

      {items.length === 0 ? (
        <p className="text-sm text-neutral-500 dark:text-neutral-400 text-center">
          Aucune entrée disponible pour le moment.
        </p>
      ) : (
        <ul className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {items.map((c) => {
            const dt = c.merged_at ? new Date(c.merged_at) : null;
            const human = dt
              ? dt.toLocaleString(undefined, {
                  year: "numeric",
                  month: "short",
                  day: "2-digit",
                  hour: "2-digit",
                  minute: "2-digit",
                })
              : "—";
            return (
              <li
                key={c.number}
                className="group rounded-2xl border border-neutral-200 bg-white/75 p-5 shadow-sm backdrop-blur transition-colors hover:bg-white
                           dark:border-neutral-800 dark:bg-neutral-900/40 dark:hover:bg-neutral-900"
              >
                <div className="flex items-center gap-2 text-xs text-neutral-500 dark:text-neutral-400">
                  <span className="inline-block h-2 w-2 rounded-full bg-violet-500" aria-hidden />
                  <time dateTime={c.merged_at ?? undefined} title={c.merged_at ?? undefined}>
                    {human}
                  </time>
                  <span className="h-1 w-1 rounded-full bg-neutral-300 dark:bg-neutral-600" aria-hidden />
                  <span>PR #{c.number}</span>
                </div>
                <h3 className="mt-2 text-base font-medium text-neutral-900 dark:text-neutral-100">
                  {c.title}
                </h3>
                <p className="mt-1 text-sm text-neutral-500 dark:text-neutral-400">
                  Auteur : <span className="text-neutral-800 dark:text-neutral-200">{c.user?.login ?? "—"}</span>
                  {" · "}
                  <a
                    className="underline decoration-neutral-300 underline-offset-4 hover:text-neutral-900 dark:decoration-neutral-700 dark:hover:text-neutral-100"
                    href={c.html_url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Voir sur GitHub
                  </a>
                </p>
              </li>
            );
          })}
        </ul>
      )}

      {/* Lien global vers la liste complète sur GitHub */}
      <div className="mt-6 text-center">
        <a
          href={`https://github.com/${GH_OWNER ?? "owner"}/${GH_REPO ?? "repo"}/pulls?q=is%3Apr+is%3Aclosed+is%3Amerged`}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-xl border border-neutral-300 px-4 py-2 text-sm font-medium text-neutral-800 hover:bg-neutral-50
                     dark:border-neutral-700 dark:text-neutral-200 dark:hover:bg-neutral-800"
        >
          Voir toutes les merges
          <svg className="h-4 w-4" viewBox="0 0 20 20" fill="none" aria-hidden>
            <path d="M5 10h10M10 5l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </div>
    </section>
  );
}