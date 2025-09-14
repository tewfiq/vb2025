"use client";

type Props = {
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
  primaryHref?: string;
  secondaryHref?: string;
};

export default function ManifestoCard({
  onPrimaryClick,
  onSecondaryClick,
  primaryHref = "#pricing",
  secondaryHref = "#method-timeline",
}: Props) {
  return (
    <section
      aria-label="Manifeste : Vibe Coding, une compétence digitale indispensable en 2025"
      className="mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8"
    >
      {/* Shadow décalée (neo-brutalism) */}
      <div className="relative">
        <div
          aria-hidden
          className="pointer-events-none absolute left-3 top-3 h-full w-full rounded-xl bg-black/90"
          style={{ filter: "none" }}
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
              href={primaryHref}
              onClick={onPrimaryClick}
              className="inline-flex items-center justify-center rounded-lg border-2 border-black bg-[#A020F0] px-5 py-3 text-sm font-extrabold uppercase tracking-wide text-white shadow-[6px_6px_0_0_#000] transition-transform active:translate-x-0.5 active:translate-y-0.5"
            >
              Tester en 2h
            </a>
            <a
              href={secondaryHref}
              onClick={onSecondaryClick}
              className="inline-flex items-center justify-center rounded-lg border-2 border-black bg-white px-5 py-3 text-sm font-extrabold uppercase tracking-wide text-black shadow-[6px_6px_0_0_#000] transition-transform active:translate-x-0.5 active:translate-y-0.5"
            >
              Voir la méthode
            </a>
          </div>
        </article>
      </div>
    </section>
  );
}