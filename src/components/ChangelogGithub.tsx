// Server Component — Next.js App Router
// Affiche les dernières PR mergées comme changelog (minimal & sûr)

import React from "react";

// ❗️Configurer ces variables dans .env.local (serveur uniquement, pas NEXT_PUBLIC)
// GITHUB_TOKEN=ghp_xxx (scopes lecture sur le repo si privé)
// GITHUB_OWNER=tewfiq
// GITHUB_REPO=vb2025

const GH_TOKEN = process.env.GITHUB_TOKEN;
// TEMPORARY FIX: Hardcode values since process.env is undefined in Server Component
const GH_OWNER = process.env.GITHUB_OWNER || "tewfiq";
const GH_REPO = process.env.GITHUB_REPO || "vb2025";

// DEBUG: Log environment variables
console.log("🔍 ChangelogGithub Environment Check:", {
  GITHUB_OWNER: process.env.GITHUB_OWNER || "UNDEFINED - using fallback",
  GITHUB_REPO: process.env.GITHUB_REPO || "UNDEFINED - using fallback",
  GH_OWNER_final: GH_OWNER,
  GH_REPO_final: GH_REPO,
  NODE_ENV: process.env.NODE_ENV
});

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
  if (!GH_OWNER || !GH_REPO) {
    console.log("ChangelogGithub: GITHUB_OWNER ou GITHUB_REPO manquant dans .env.local");
    return [];
  }

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

  console.log("🌐 Fetching GitHub API:", {
    url: url.toString(),
    headers_count: Object.keys(headers).length,
    has_auth: !!headers.Authorization
  });

  try {
    const res = await fetch(url, {
      headers,
      // TEMPORARY: Disable cache to force fresh API calls
      cache: 'no-store'
    });

    console.log("📡 GitHub API Response:", {
      status: res.status,
      statusText: res.statusText,
      ok: res.ok,
      headers: Object.fromEntries(res.headers.entries())
    });

    if (!res.ok) {
      const errorText = await res.text();
      console.log(`❌ GitHub API Error ${res.status}:`, {
        url: url.toString(),
        status: res.status,
        statusText: res.statusText,
        errorBody: errorText.substring(0, 500)
      });
      return [];
    }

    const responseText = await res.text();
    console.log("📄 Raw API Response:", {
      bodyLength: responseText.length,
      firstChars: responseText.substring(0, 200) + "..."
    });

    const pulls = JSON.parse(responseText) as Pull[];
    console.log("🔄 Processing PRs:", {
      totalReceived: pulls.length,
      samplePR: pulls[0] ? {
        number: pulls[0].number,
        title: pulls[0].title.substring(0, 50) + "...",
        state: pulls[0].state,
        merged_at: pulls[0].merged_at
      } : "No PRs received"
    });

    const mergedPulls = pulls.filter((p) => p.merged_at);
    console.log(`✅ Final Result: ${mergedPulls.length} PR mergées trouvées sur ${pulls.length} total`);
    
    if (mergedPulls.length > 0) {
      console.log("📋 Sample merged PRs:", mergedPulls.slice(0, 3).map(pr => ({
        number: pr.number,
        title: pr.title.substring(0, 40) + "...",
        merged_at: pr.merged_at
      })));
    }

    return mergedPulls;
  } catch (error) {
    console.error("💥 ChangelogGithub: Erreur lors de la récupération des PRs:", error);
    return [];
  }
}

export default async function ChangelogGithub() {
  console.log("ChangelogGithub: Composant rendu côté serveur");
  const items = await fetchMergedPRs();
  console.log("ChangelogGithub: Items récupérés:", items.length, "entrées");

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
    <section className="py-12 md:py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Proof bar compacte */}
        <div
          className="mx-auto mb-8 md:mb-12 flex w-full flex-wrap items-center justify-center gap-3 rounded-2xl border bg-card/80 backdrop-blur-sm px-4 py-3 text-sm"
          role="status"
          aria-live="polite"
        >
          <span className="text-muted-foreground">Dév actif</span>
          <span className="h-1 w-1 rounded-full bg-muted-foreground/60" aria-hidden />
          <span className="font-medium text-foreground">{total} merges</span>

          <span className="h-1 w-1 rounded-full bg-muted-foreground/60" aria-hidden />
          <span className="text-muted-foreground">Dernière mise à jour</span>
          <span className="h-1 w-1 rounded-full bg-muted-foreground/60" aria-hidden />
          <span className="font-medium text-foreground">{latestHuman}</span>

          <span className="h-1 w-1 rounded-full bg-muted-foreground/60" aria-hidden />
          <span className="text-muted-foreground">Cycle</span>
          <span className="h-1 w-1 rounded-full bg-muted-foreground/60" aria-hidden />
          <span className="font-medium text-foreground">
            rapid prototyping → production continue
          </span>
        </div>

        <div className="text-center max-w-3xl mx-auto mb-8 md:mb-16">
          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl md:text-4xl lg:text-5xl font-headline">
            Quoi de neuf ?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Ce site est un proof of concept vivant : cycles courts, résultats visibles.
          </p>
          <p className="mt-2 text-sm text-muted-foreground">
            Entrées auto-générées depuis les PR mergées du dépôt.
          </p>
        </div>

      {items.length === 0 ? (
        <div className="text-center space-y-4">
          <div className="mx-auto w-16 h-16 bg-neutral-100 dark:bg-neutral-800 rounded-full flex items-center justify-center">
            <svg className="w-8 h-8 text-neutral-400 dark:text-neutral-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          <div>
            <p className="text-sm text-neutral-500 dark:text-neutral-400 font-medium">
              Aucune entrée disponible pour le moment
            </p>
            <p className="text-xs text-neutral-400 dark:text-neutral-500 mt-1">
              Vérifiez la configuration GitHub dans .env.local ou les logs du serveur
            </p>
          </div>
        </div>
      ) : (
        <div className="space-y-4">
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
              <div
                key={c.number}
                className="flex items-center gap-6 p-4 rounded-xl border bg-card/80 backdrop-blur-sm transition-all duration-500 hover:bg-card/90 hover:shadow-sm"
              >
                {/* Date */}
                <div className="flex flex-col items-center min-w-[60px] text-center">
                  <span className="text-lg font-bold text-foreground leading-none">
                    {dt ? dt.getDate().toString().padStart(2, '0') : '—'}
                  </span>
                  <span className="text-xs text-muted-foreground uppercase tracking-wide">
                    {dt ? dt.toLocaleDateString('fr-FR', { month: 'short' }) : '—'}
                  </span>
                </div>
                
                {/* Content */}
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-foreground text-base leading-tight">
                    {c.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
                    Auteur : <span className="text-foreground">{c.user?.login ?? "—"}</span>
                    {" · "}
                    <time dateTime={c.merged_at ?? undefined} title={c.merged_at ?? undefined}>
                      {human}
                    </time>
                    {" · "}
                    <a
                      className="underline decoration-muted-foreground underline-offset-4 hover:text-foreground"
                      href={c.html_url}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Voir sur GitHub
                    </a>
                  </p>
                </div>
                
                {/* Badge */}
                <div className="flex-shrink-0">
                  <span className="inline-flex px-2 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400">
                    merged
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      )}
      </div>
    </section>
  );
}