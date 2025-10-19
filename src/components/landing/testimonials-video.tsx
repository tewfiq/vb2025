"use client";

import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { IPhoneMockup } from "@/components/ui/iphone-mockup";
import { useTranslation } from "@/hooks/use-translation";
import { cn } from "@/lib/utils";

// Configuration des vid\u00e9os YouTube Shorts
const testimonialVideos = [
  {
    youtubeId: "j6ozc_gm9LU",
    alt: "T\u00e9moignage participant 1",
  },
  {
    youtubeId: "Wi023ODB78Y",
    alt: "T\u00e9moignage participant 2",
  },
  {
    youtubeId: "w17p8dwWysg",
    alt: "T\u00e9moignage participant 3",
  },
  {
    youtubeId: "A9Wct5BJPNo",
    alt: "T\u00e9moignage participant 4",
  },
  {
    youtubeId: "D3wDdYA2UJg",
    alt: "T\u00e9moignage participant 5",
  },
];

export default function TestimonialsVideo() {
  const t = useTranslation();
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);
  const [isClient, setIsClient] = React.useState(false);
  const [isPaused, setIsPaused] = React.useState(false);

  React.useEffect(() => {
    setIsClient(true);
  }, []);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  // Auto-scroll avec loop infini
  React.useEffect(() => {
    if (!api || isPaused) {
      return;
    }

    const interval = setInterval(() => {
      if (api.canScrollNext()) {
        api.scrollNext();
      } else {
        // Retour au d\u00e9but pour loop infini
        api.scrollTo(0);
      }
    }, 8000); // Change de vid\u00e9o toutes les 8 secondes

    return () => clearInterval(interval);
  }, [api, isPaused]);

  if (!isClient) {
    return (
      <section className="py-12 md:py-20 lg:py-32 bg-background">
        <div className="container mx-auto px-4">
          <div className="w-full max-w-sm mx-auto">
            <div className="flex aspect-[9/19.5] items-center justify-center rounded-lg bg-muted">
              <span className="text-muted-foreground">Chargement...</span>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-12 md:py-20 lg:py-32 bg-muted/30 dark:bg-muted/10">
      <div className="container mx-auto px-4">
        {/* Titre et sous-titre */}
        <div className="text-center max-w-3xl mx-auto mb-8 md:mb-12">
          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl md:text-4xl lg:text-5xl font-headline mb-4">
            {t.testimonialsVideo.title}
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground">
            {t.testimonialsVideo.subtitle}
          </p>
        </div>

        {/* Carousel avec iPhone Mockup */}
        <div
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Desktop: iPhone Mockup visible */}
          <div className="hidden md:block">
            <IPhoneMockup className="max-w-sm mx-auto">
              <Carousel
                setApi={setApi}
                opts={{
                  align: "start",
                  loop: true,
                }}
                orientation="vertical"
                className="w-full h-full"
              >
                <CarouselContent className="h-full">
                  {testimonialVideos.map((video, index) => (
                    <CarouselItem key={index} className="h-full">
                      <div className="relative w-full h-full bg-black">
                        <iframe
                          src={`https://www.youtube.com/embed/${video.youtubeId}?autoplay=1&mute=1&loop=1&playlist=${video.youtubeId}&controls=0&modestbranding=1&rel=0&showinfo=0&playsinline=1`}
                          title={video.alt}
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          className="absolute inset-0 w-full h-full border-0"
                          loading={index === 0 ? "eager" : "lazy"}
                        />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
            </IPhoneMockup>
          </div>

          {/* Mobile: Plein \u00e9cran sans mockup */}
          <div className="md:hidden">
            <Carousel
              setApi={setApi}
              opts={{
                align: "start",
                loop: true,
              }}
              orientation="vertical"
              className="w-full max-w-md mx-auto"
            >
              <CarouselContent>
                {testimonialVideos.map((video, index) => (
                  <CarouselItem key={index}>
                    <div className="relative w-full aspect-[9/16] bg-black rounded-lg overflow-hidden">
                      <iframe
                        src={`https://www.youtube.com/embed/${video.youtubeId}?autoplay=1&mute=1&loop=1&playlist=${video.youtubeId}&controls=0&modestbranding=1&rel=0&showinfo=0&playsinline=1`}
                        title={video.alt}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="absolute inset-0 w-full h-full border-0"
                        loading={index === 0 ? "eager" : "lazy"}
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </div>

        {/* Indicateurs de progression */}
        <div className="mt-8 flex items-center justify-center gap-4">
          {/* Dots */}
          <div className="flex gap-2">
            {testimonialVideos.map((_, index) => (
              <button
                key={index}
                onClick={() => api?.scrollTo(index)}
                className={cn(
                  "w-2 h-2 rounded-full transition-all duration-300",
                  current === index
                    ? "bg-primary w-8"
                    : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                )}
                aria-label={`Aller \u00e0 la vid\u00e9o ${index + 1}`}
              />
            ))}
          </div>

          {/* Compteur */}
          <span className="text-sm text-muted-foreground">
            {current + 1} / {count}
          </span>
        </div>

        {/* Indication de pause au hover (desktop uniquement) */}
        {isPaused && (
          <div className="hidden md:block text-center mt-4">
            <span className="text-xs text-muted-foreground">
              D\u00e9filement automatique en pause
            </span>
          </div>
        )}
      </div>
    </section>
  );
}
