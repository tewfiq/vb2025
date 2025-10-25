import Header from "@/components/landing/header";
import AnnouncementBanner from "@/components/landing/announcement-banner";
import Hero from "@/components/landing/hero";
import Programme from "@/components/landing/programme";
import NextMasterclass from "@/components/landing/next-masterclass";

import { WorkshopsSection } from "@/components/landing/workshops-section";
import WhyCards from "@/components/landing/why-cards";
import MethodSteps from "@/components/landing/method-steps";
import Pricing from "@/components/landing/pricing";
import FirstMasterclassGallery from "@/components/landing/first-masterclass-gallery";
// import TestimonialsVideo from "@/components/landing/testimonials-video";
import Faq from "@/components/landing/faq";
import Changelog from "@/components/landing/changelog";
import GitHubContributions from "@/components/landing/github-contributions";
import BlogLatest from "@/components/blog/blog-latest";
import Footer from "@/components/landing/footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <AnnouncementBanner />
      <Header />
      <main className="flex-1">
        <Hero />
        <Programme />
        <FirstMasterclassGallery />
        {/* <TestimonialsVideo /> */}
        <WhyCards />
        <section id="comment-ca-marche">
          <MethodSteps />
        </section>
        <NextMasterclass />
        <Pricing />
        <WorkshopsSection />
        <Faq />
        <Changelog />
        <GitHubContributions />
        <BlogLatest />
      </main>
      <Footer />
    </div>
  );
}
