import { Metadata } from 'next/types';
import { BackButton } from '@/components/ui/back-button';

export const metadata: Metadata = {
  title: "Mentions légales | Vibe Coding Paris",
  description: "Mentions légales de Vibe Coding Paris",
};

export default function LegalNoticePage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <BackButton />
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl font-headline mb-4">
            Mentions légales
          </h1>
          <p className="text-lg text-accent font-semibold mb-2">
            Vibe Coding Paris
          </p>
          <p className="text-sm text-muted-foreground">
            Dernière mise à jour : 24 septembre 2025
          </p>
        </div>

        <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed">

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4 font-headline">1. Éditeur du site</h2>
            <p className="mb-4">Le présent site est édité par :</p>
            <div className="bg-muted/30 rounded-lg p-4 mb-4">
              <p className="mb-2"><strong>Tewfiq Ferahi</strong></p>
              <p className="mb-2">Vibe Coding Paris</p>
              <p className="mb-2">25, rue des Renaudes</p>
              <p className="mb-2">75017 Paris — France</p>
              <p className="mb-2">Email : tewfiqonline@gmail.com</p>
            </div>
            <p className="mb-2">Statut juridique : Micro-entreprise</p>
            <p className="mb-2">N° SIRET : 803 737 311</p>
            <p>TVA intracommunautaire : FR10803737311</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4 font-headline">2. Directeur de publication</h2>
            <p>Le directeur de la publication est Tewfiq Ferahi, en sa qualité de fondateur de Vibe Coding Paris.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4 font-headline">3. Hébergeur du site</h2>
            <p className="mb-3">Le site est hébergé par :</p>
            <div className="bg-muted/30 rounded-lg p-4">
              <p className="mb-2"><strong>Netlify</strong></p>
              <p className="mb-2">Adresse : <a href="https://www.netlify.com/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">https://www.netlify.com/</a></p>
              <p>Site web : <a href="https://vb.tfq.one/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">https://vb.tfq.one/</a></p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4 font-headline">4. Propriété intellectuelle</h2>
            <p className="mb-3">L'ensemble des contenus du site (textes, images, graphismes, logos, vidéos, etc.) est protégé par le droit d'auteur et reste la propriété exclusive de Vibe Coding Paris, sauf mention contraire.</p>
            <p>Toute reproduction, représentation, modification ou exploitation, totale ou partielle, sans autorisation écrite préalable, est strictement interdite.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4 font-headline">5. Données personnelles</h2>
            <p className="mb-3">Conformément au Règlement Général sur la Protection des Données (RGPD) :</p>
            <p className="mb-3">Les informations collectées via le site (formulaire de contact, réservation, paiement) sont nécessaires à la gestion des inscriptions et de la relation client.</p>
            <p className="mb-3">Les données sont traitées de manière confidentielle et ne sont jamais revendues à des tiers.</p>
            <p>Vous disposez d'un droit d'accès, de rectification et de suppression de vos données, que vous pouvez exercer en écrivant à : <a href="mailto:tewfiqonline@gmail.com" className="text-accent hover:underline">tewfiqonline@gmail.com</a></p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4 font-headline">6. Cookies</h2>
            <p className="mb-3">Le site peut utiliser des cookies pour améliorer l'expérience utilisateur et des outils de mesure d'audience.</p>
            <p>Vous pouvez gérer vos préférences de cookies directement depuis votre navigateur.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4 font-headline">7. Responsabilité</h2>
            <p className="mb-3">L'éditeur du site met tout en œuvre pour assurer l'exactitude des informations diffusées, mais ne peut être tenu responsable d'erreurs, d'omissions ou de dysfonctionnements techniques.</p>
            <p>L'utilisation du site se fait sous la responsabilité exclusive de l'utilisateur.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4 font-headline">8. Droit applicable</h2>
            <p className="mb-3">Les présentes mentions légales sont régies par le droit français.</p>
            <p>Tout litige relatif à l'utilisation du site sera soumis à la compétence exclusive des tribunaux de Paris.</p>
          </section>

        </div>
      </div>
    </div>
  );
}