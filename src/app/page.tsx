import Header from "@/components/landing/header";
import Hero from "@/components/landing/hero";
import Manifesto from "@/components/landing/manifesto";
import MethodSteps from "@/components/landing/method-steps";
import ProofOfConcept from "@/components/landing/proof-of-concept";
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
        <Manifesto />
        <section id="comment-ca-marche">
          <MethodSteps />
        </section>
        <ProofOfConcept />
        <Testimonials />
        <Pricing />
        <Faq />
      </main>
      <Footer />
    </div>
  );
}
