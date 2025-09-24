import { Metadata } from 'next/types';
import { BackButton } from '@/components/ui/back-button';

export const metadata: Metadata = {
  title: "Conditions Générales de Vente | Vibe Coding Paris",
  description: "Conditions Générales de Vente de Vibe Coding Paris",
};

export default function TermsOfServicePage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <BackButton />
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl font-headline mb-4">
            Conditions Générales de Vente (CGV)
          </h1>
          <p className="text-lg text-accent font-semibold mb-2">
            Vibe Coding Paris — Masterclass & Formations
          </p>
          <p className="text-sm text-muted-foreground">
            Dernière mise à jour : 24 septembre 2025
          </p>
        </div>

        <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed">

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4 font-headline">1. Objet</h2>
            <p className="mb-4">
              Les présentes Conditions Générales de Vente (CGV) régissent la vente en ligne des ateliers et formations proposés par Vibe Coding Paris (ci-après "l'Organisateur"), accessibles via le site internet https://vb.tfq.one/
            </p>
            <p>
              Toute inscription à une formation implique l'acceptation sans réserve des présentes CGV.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4 font-headline">2. Inscription & Public concerné</h2>
            <p className="mb-3">Les formations sont ouvertes à toute personne majeure.</p>
            <p className="mb-3">Les mineurs de plus de 15 ans peuvent participer uniquement avec une autorisation écrite de leurs représentants légaux.</p>
            <p className="mb-3">Chaque session est limitée à 14 participants maximum.</p>
            <p>L'inscription est validée après paiement en ligne via Stripe et réception de l'email de confirmation.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4 font-headline">3. Tarifs & Modalités de paiement</h2>
            <p className="mb-4">Les prix sont indiqués en euros, TTC (toutes taxes comprises).</p>
            <p className="mb-4">Trois formules sont proposées :</p>
            <ul className="mb-4 space-y-2">
              <li><strong>Starter :</strong> 149 € TTC (tarif -26 ans et demandeurs d'emploi).</li>
              <li><strong>Standard :</strong> 299 € TTC par personne.</li>
              <li><strong>Entreprise/École :</strong> tarif sur devis.</li>
            </ul>
            <p className="mb-3">Le paiement s'effectue exclusivement en ligne via la plateforme sécurisée Stripe.</p>
            <p>Aucune participation ne sera possible sans paiement complet au moment de l'inscription.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4 font-headline">4. Droit de rétractation</h2>
            <p className="mb-3">Conformément au Code de la consommation :</p>
            <p className="mb-3">Vous disposez d'un délai de 14 jours après votre inscription pour exercer votre droit de rétractation, sans motif.</p>
            <p className="mb-3">Pour exercer ce droit, envoyez un email à [adresse de contact] en indiquant vos coordonnées et la formation concernée.</p>
            <p className="mb-4">Le remboursement sera effectué via Stripe dans un délai de 14 jours maximum.</p>
            <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4">
              <p className="text-yellow-800 dark:text-yellow-200">
                <span className="font-semibold">⚠️ Attention :</span> Si la formation a lieu avant la fin du délai légal de rétractation, vous reconnaissez renoncer expressément à ce droit.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4 font-headline">5. Annulation & report</h2>
            <p className="mb-3">En cas d'annulation de la part de l'Organisateur (force majeure, nombre insuffisant de participants…), un remboursement intégral sera proposé ou une reprogrammation à une date ultérieure.</p>
            <p className="mb-3">En cas d'annulation par le participant après la période légale de rétractation, aucun remboursement ne sera effectué, sauf cas de force majeure justifié (maladie grave, hospitalisation).</p>
            <p>Le transfert d'une place à une autre personne est possible sur demande écrite avant la formation.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4 font-headline">6. Déroulement des formations</h2>
            <p className="mb-3">Les ateliers se déroulent en présentiel à Paris, en salle équipée (adresse précisée lors de l'inscription).</p>
            <p className="mb-3">Les sessions accueillent jusqu'à 14 participants.</p>
            <p className="mb-3">Les participants doivent apporter leur propre ordinateur (BYOD – Bring Your Own Device).</p>
            <p>L'Organisateur ne pourra être tenu responsable d'éventuels problèmes techniques liés au matériel personnel du participant.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4 font-headline">7. Propriété intellectuelle</h2>
            <p className="mb-3">Les supports pédagogiques, méthodes et contenus partagés durant les formations sont protégés par le droit d'auteur.</p>
            <p className="mb-3">Toute reproduction, diffusion ou utilisation en dehors d'un cadre strictement personnel est interdite sans l'accord écrit de l'Organisateur.</p>
            <p>Le participant conserve l'entière propriété des projets réalisés lors de la formation.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4 font-headline">8. Responsabilité</h2>
            <p className="mb-3">L'Organisateur met tout en œuvre pour assurer la qualité des formations.</p>
            <p className="mb-3">Il ne pourra être tenu responsable en cas de force majeure (grève, coupure internet/électricité, indisponibilité des locaux, etc.).</p>
            <p>L'Organisateur ne pourra être tenu responsable des dommages matériels, pertes de données ou préjudices indirects liés à l'utilisation des outils présentés.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4 font-headline">9. Protection des données personnelles (RGPD)</h2>
            <p className="mb-3">Les informations collectées (nom, prénom, email, données de paiement) sont nécessaires pour gérer les inscriptions et le suivi des formations.</p>
            <p className="mb-3">Elles sont traitées de manière confidentielle et sécurisée via Stripe et Cal.com.</p>
            <p>Conformément à la réglementation RGPD, vous pouvez exercer vos droits d'accès, de rectification ou de suppression de vos données en écrivant à [adresse de contact].</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4 font-headline">10. Droit applicable & litiges</h2>
            <p className="mb-3">Les présentes CGV sont régies par le droit français.</p>
            <p>En cas de litige, une solution amiable sera recherchée. À défaut, les tribunaux de Paris seront compétents.</p>
          </section>

          <section className="mt-12">
            <div className="bg-accent/10 border border-accent/20 rounded-lg p-6">
              <h2 className="text-2xl font-bold text-foreground mb-4 font-headline">✍️ Acceptation</h2>
              <p className="text-foreground font-medium">
                En validant votre inscription et en procédant au paiement en ligne, vous reconnaissez avoir lu, compris et accepté les présentes CGV.
              </p>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}