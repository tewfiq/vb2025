// /components/LeanMethodSection.tsx
"use client";

export default function LeanMethodSection() {
  return (
    <section aria-label="Méthode et preuve Vibe Coding" className="mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8">
      {/* ===== Manifesto card (WHY) ===== */}
      <div className="relative mt-8">
        <div aria-hidden className="pointer-events-none absolute left-3 top-3 h-full w-full rounded-xl bg-black/90" />
        <article className="relative rounded-xl border-2 border-black bg-white p-7 sm:p-9">
          <p className="mb-2 text-center text-xs font-bold uppercase tracking-[0.18em]">Compétence clé</p>
          <h2 className="text-center text-3xl font-extrabold leading-tight text-black sm:text-4xl">
            Vibe Coding, indispensable en 2025
          </h2>
          <p className="mt-2 text-center text-sm text-neutral-700">De l'idée au projet en ligne, en 2 heures.</p>
          <div className="mx-auto my-6 h-2 w-16 bg-black" />
          <div className="mx-auto max-w-3xl space-y-4 text-[17px] leading-7 text-neutral-900">
            <p>
              Le Vibe Coding est une <strong>compétence digitale opérationnelle</strong> : intention claire → code
              généré par l'IA → projet déployé immédiatement.
            </p>
            <p>
              En 2025, tenir cette posture de <strong>Product Builder</strong>, c'est passer du concept à un résultat
              exploitable et poursuivre en itérations continues. Ni théorie, ni promesse : une méthode directe et
              réutilisable.
            </p>
          </div>

          {/* Chips */}
          <ul className="mt-6 flex flex-wrap justify-center gap-2">
            {["Idée → code → déploiement", "Méthode directe", "Résultat en 2h", "Compétence réutilisable"].map(
              (label) => (
                <li
                  key={label}
                  className="rounded-md border-2 border-black bg-white px-3 py-1 text-xs font-semibold text-black shadow-[4px_4px_0_0_#000]"
                >
                  {label}
                </li>
              )
            )}
          </ul>

          {/* CTAs */}
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#pricing"
              className="inline-flex items-center justify-center rounded-lg border-2 border-black bg-[#A020F0] px-5 py-3 text-sm font-extrabold uppercase tracking-wide text-white shadow-[6px_6px_0_0_#000] transition-transform active:translate-x-0.5 active:translate-y-0.5"
            >
              Tester en 2h
            </a>
            <a
              href="#programme"
              className="inline-flex items-center justify-center rounded-lg border-2 border-black bg-white px-5 py-3 text-sm font-extrabold uppercase tracking-wide text-black shadow-[6px_6px_0_0_#000] transition-transform active:translate-x-0.5 active:translate-y-0.5"
            >
              Voir le programme
            </a>
          </div>
        </article>
      </div>

      {/* ===== Flow condensé (HOW) ===== */}
      <details className="mx-auto mt-10 w-full max-w-4xl" data-variant="brutal">
        <summary className="group list-none cursor-pointer rounded-lg border-2 border-black bg-white px-4 py-3 text-center text-sm font-extrabold uppercase shadow-[6px_6px_0_0_#000] transition-colors hover:bg-neutral-50">
          Voir le déroulé en 4 lignes
          <span className="ml-2 inline-block transition-transform group-open:-rotate-180">▾</span>
        </summary>
        <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
          {[
            { n: "1", t: "Idéation claire", d: "Tu écris en français. On cadre l'intention et le scope." },
            { n: "2", t: "One-shot prompt", d: "Un prompt efficace pour un premier output exploitable." },
            { n: "3", t: "Dépôt & déploiement", d: "GitHub → Netlify/Vercel. URL publique immédiate." },
            { n: "4", t: "Itérations continues", d: "Assistants de code asynchrones (Claude Code, Gemini CLI, Qwen, Codex…)." },
          ].map(({ n, t, d }) => (
            <div
              key={n}
              className="flex items-start gap-3 rounded-lg border-2 border-black bg-white p-4 shadow-[6px_6px_0_0_#000]"
            >
              <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full border-2 border-black bg-white text-xs font-black">
                {n}
              </span>
              <div>
                <p className="text-sm font-bold">{t}</p>
                <p className="text-sm text-neutral-700">{d}</p>
              </div>
            </div>
          ))}
        </div>
      </details>

      {/* ===== Proof row (REAL) ===== */}
      <div className="mx-auto mt-10 grid w-full max-w-4xl grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5">
        {[
          ["⚡", "Next.js 15", "Prototypage → production"],
          ["🎨", "Tailwind", "Design system rapide"],
          ["🐙", "GitHub", "Versionning & historique"],
          ["☁️", "Netlify / Vercel", "Déploiement instantané"],
          ["♻️", "Itération continue", "Chaque merge → entrée"],
        ].map(([icon, title, note]) => (
          <div key={title as string} className="rounded-lg border-2 border-black bg-white p-3 text-center shadow-[6px_6px_0_0_#000]">
            <div className="text-lg">{icon}</div>
            <div className="text-sm font-bold">{title}</div>
            <div className="text-xs text-neutral-700">{note}</div>
          </div>
        ))}
      </div>

      {/* Lien vers l'historique complet */}
      <div className="mt-6 flex justify-center">
        <a
          href="https://github.com/tewfiq/vb2025/pulls?q=is%3Apr+is%3Amerged"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center rounded-lg border-2 border-black bg-white px-4 py-2 text-xs font-extrabold uppercase tracking-wide text-black shadow-[4px_4px_0_0_#000] transition-transform active:translate-x-0.5 active:translate-y-0.5"
        >
          Voir les itérations sur GitHub
        </a>
      </div>
    </section>
  );
}