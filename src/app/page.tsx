import Header from "@/components/landing/header";
import Hero from "@/components/landing/hero";
import Programme from "@/components/landing/programme";

import Gallery from "@/components/landing/gallery";
import Partners from "@/components/landing/partners";
import WhyCards from "@/components/landing/why-cards";
import MethodSteps from "@/components/landing/method-steps";
import Testimonials from "@/components/landing/testimonials";
import Pricing from "@/components/landing/pricing";
import Faq from "@/components/landing/faq";
import Changelog from "@/components/landing/changelog";
import Footer from "@/components/landing/footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <Hero />
        <Programme />

        <section id="ateliers" className="py-12 md:py-20 lg:py-24">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl md:text-4xl lg:text-5xl font-headline">
              Nos Ateliers<br />en Solutions Gen AI
            </h2>
            <p className="text-muted-foreground mt-1 md:mt-2 text-sm md:text-base">
              pendant l'année académique 2024 - 2025
            </p>
          </div>
          <Gallery />
          <Partners />
        </section>
        <WhyCards />
        <section id="comment-ca-marche">
          <MethodSteps />
        </section>
        <Testimonials />
        <Pricing />
        <Faq />
        <Changelog />
      </main>
      <Footer />
    </div>
  );
}
