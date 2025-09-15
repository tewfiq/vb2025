import ManifestoCard from '@/components/ManifestoCard';

export default function Manifesto() {
  return (
    <section id="manifesto" className="py-12 md:py-20 lg:py-24">
      <ManifestoCard 
        primaryHref="#pricing"
        secondaryHref="#comment-ca-marche"
      />
    </section>
  );
}