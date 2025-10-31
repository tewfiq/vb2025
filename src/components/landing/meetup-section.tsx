"use client";

import { useTranslation } from "@/hooks/use-translation";

export default function MeetupSection() {
  const t = useTranslation();

  return (
    <section className="py-12 md:py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl md:text-4xl lg:text-5xl font-headline">
              {t.meetup.title}
            </h2>
            <p className="text-muted-foreground mt-4 text-lg">
              {t.meetup.subtitle}
            </p>
          </div>

          {/* Meetup Widget Container */}
          <div className="w-full overflow-hidden rounded-lg border border-border shadow-sm">
            <iframe
              src="https://widgets.sociablekit.com/meetup-group-events/iframe/25616961"
              frameBorder="0"
              width="100%"
              height="1000"
              className="w-full"
              style={{ minHeight: "1000px" }}
              title="Paris Social Vibe Coding Meetup"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
