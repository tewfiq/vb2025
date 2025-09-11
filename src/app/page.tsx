import Header from "@/components/landing/header";
import Hero from "@/components/landing/hero";

import Gallery from "@/components/landing/gallery";
import Partners from "@/components/landing/partners";
import WhyCards from "@/components/landing/why-cards";
import MethodSteps from "@/components/landing/method-steps";
import BYOD from "@/components/landing/byod";
import Testimonials from "@/components/landing/testimonials";
import Pricing from "@/components/landing/pricing";
import Faq from "@/components/landing/faq";
import Footer from "@/components/landing/footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <Hero />

        <section id="ateliers" className="py-20 md:py-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl font-headline">
              Nos Ateliers en Solutions Gen AI
            </h2>
            <p className="text-muted-foreground mt-2">
              pendant l'année académique 2024 - 2025
            </p>
          </div>
          <Gallery />
          <Partners />
        </section>
        <WhyCards />
        <MethodSteps />
        <BYOD />
        <Testimonials />
        <Pricing />
        <Faq />
      </main>
      <Footer />
    </div>
  );
}
