import Header from '@/components/landing/header';
import Hero from '@/components/landing/hero';
import WhyVibe from '@/components/landing/why-vibe';
import Method from '@/components/landing/method';
import BYOD from '@/components/landing/byod';
import Newcomers from '@/components/landing/newcomers';
import Testimonials from '@/components/landing/testimonials';
import Pricing from '@/components/landing/pricing';
import Faq from '@/components/landing/faq';
import Footer from '@/components/landing/footer';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <Hero />
        <WhyVibe />
        <Method />
        <BYOD />
        <Newcomers />
        <Testimonials />
        <Pricing />
        <Faq />
      </main>
      <Footer />
    </div>
  );
}
