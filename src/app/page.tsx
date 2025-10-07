import Header from "@/components/landing/header";
import Hero from "@/components/landing/hero";
import Programme from "@/components/landing/programme";

import { WorkshopsSection } from "@/components/landing/workshops-section";
import WhyCards from "@/components/landing/why-cards";
import MethodSteps from "@/components/landing/method-steps";
import Pricing from "@/components/landing/pricing";
import FirstMasterclassGallery from "@/components/landing/first-masterclass-gallery";
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

        <WorkshopsSection />
        <WhyCards />
        <section id="comment-ca-marche">
          <MethodSteps />
        </section>
        <Pricing />
        <FirstMasterclassGallery />
        <Faq />
        <Changelog />
      </main>
      <Footer />
    </div>
  );
}
