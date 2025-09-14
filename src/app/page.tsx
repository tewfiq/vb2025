import Header from "@/components/landing/header";
import Hero from "@/components/landing/hero";
import LeanMethodSection from "@/components/LeanMethodSection";
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
        <div className="py-12 md:py-20 lg:py-24">
          <LeanMethodSection />
        </div>
        <Testimonials />
        <Pricing />
        <Faq />
      </main>
      <Footer />
    </div>
  );
}
