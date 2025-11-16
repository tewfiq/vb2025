"use client";

import { Button } from "@/components/ui/button";
import { useTranslation } from "@/hooks/use-translation";
import { useEffect, useState } from "react";

export default function MeetupSection() {
  const t = useTranslation();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    console.log("MeetupSection mounted, translations:", t.meetup);
  }, []);

  if (!isMounted) {
    return (
      <section className="py-12 md:py-16 lg:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-muted-foreground">Loading meetup section...</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-10 md:mb-12">
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl md:text-4xl font-headline">
              {t.meetup.title}
            </h2>
            <p className="text-muted-foreground mt-4 text-base md:text-lg">
              {t.meetup.subtitle}
            </p>
          </div>

          {/* Flyer Images */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {/* First Masterclass Flyer */}
            <div className="flex justify-center">
              <div className="w-full">
                <img
                  src="/avatars/masterclass-creative-coding-flyer.jpg"
                  alt="Creative Coding Workshop: Learn to Code with a Social Twist! - Masterclass Flyer"
                  className="w-full h-auto rounded-lg border border-border shadow-lg"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Current Event Flyer */}
            <div className="flex justify-center">
              <div className="w-full">
                <img
                  src="/avatars/event-flyer.jpg"
                  alt="Paris Social Vibe Coding Meetup Event Flyer"
                  className="w-full h-auto rounded-lg border border-border shadow-lg"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="flex justify-center">
            <Button size="lg" asChild className="px-8">
              <a
                href="https://www.meetup.com/paris-social-vibe-coding-meetup-group/"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t.meetup.ctaButton}
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
