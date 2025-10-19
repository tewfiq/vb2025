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

// Configuration des vidéos YouTube Shorts
const testimonialVideos = [
  {
    youtubeId: "j6ozc_gm9LU",
    alt: "Témoignage participant 1",
  },
  {
    youtubeId: "Wi023ODB78Y",
    alt: "Témoignage participant 2",
  },
  {
    youtubeId: "w17p8dwWysg",
    alt: "Témoignage participant 3",
  },
  {
    youtubeId: "A9Wct5BJPNo",
    alt: "Témoignage participant 4",
  },
  {
    youtubeId: "D3wDdYA2UJg",
    alt: "Témoignage participant 5",
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
        // Retour au début pour loop infini
        api.scrollTo(0);
      }
    }, 8000); // Change de vidéo toutes les 8 secondes

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
            <div className="max-w-sm mx-auto">
              <IPhoneMockup>
                <Carousel
                  setApi={setApi}
                  opts={{
                    align: "center",
                    loop: true,
                  }}
                  orientation="vertical"
                  className="w-full h-full"
                >
                  <CarouselContent className="h-full -mt-4">
                    {testimonialVideos.map((video, index) => (
                      <CarouselItem key={index} className="h-full pt-4 basis-full">
                        <div className="relative w-full h-full bg-black">
                          <iframe
                            src={`https://www.youtube.com/embed/${video.youtubeId}?rel=0&modestbranding=1&playsinline=1&enablejsapi=1`}
                            title={video.alt}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                            className="w-full h-full border-0"
                            style={{ minHeight: '600px' }}
                            loading={index === 0 ? "eager" : "lazy"}
                          />
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                </Carousel>
              </IPhoneMockup>
            </div>
          </div>

          {/* Mobile: Plein écran sans mockup */}
          <div className="md:hidden">
            <Carousel
              setApi={setApi}
              opts={{
                align: "center",
                loop: true,
              }}
              orientation="vertical"
              className="w-full max-w-md mx-auto"
            >
              <CarouselContent className="-mt-4">
                {testimonialVideos.map((video, index) => (
                  <CarouselItem key={index} className="pt-4 basis-full">
                    <div className="relative w-full bg-black rounded-lg overflow-hidden" style={{ paddingBottom: '177.78%' }}>
                      <iframe
                        src={`https://www.youtube.com/embed/${video.youtubeId}?rel=0&modestbranding=1&playsinline=1&enablejsapi=1`}
                        title={video.alt}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                        className="absolute top-0 left-0 w-full h-full border-0"
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
                aria-label={`Aller à la vidéo ${index + 1}`}
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
              Défilement automatique en pause
            </span>
          </div>
        )}
      </div>
    </section>
  );
}
