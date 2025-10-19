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
import { Play } from "lucide-react";
import Image from "next/image";

// Configuration des vidéos YouTube Shorts
const testimonialVideos = [
  {
    youtubeId: "j6ozc_gm9LU",
    shortsUrl: "https://www.youtube.com/shorts/j6ozc_gm9LU",
    alt: "Témoignage participant 1",
  },
  {
    youtubeId: "Wi023ODB78Y",
    shortsUrl: "https://www.youtube.com/shorts/Wi023ODB78Y",
    alt: "Témoignage participant 2",
  },
  {
    youtubeId: "w17p8dwWysg",
    shortsUrl: "https://www.youtube.com/shorts/w17p8dwWysg",
    alt: "Témoignage participant 3",
  },
  {
    youtubeId: "A9Wct5BJPNo",
    shortsUrl: "https://www.youtube.com/shorts/A9Wct5BJPNo",
    alt: "Témoignage participant 4",
  },
  {
    youtubeId: "D3wDdYA2UJg",
    shortsUrl: "https://www.youtube.com/shorts/D3wDdYA2UJg",
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
    }, 4000); // Change de vidéo toutes les 4 secondes

    return () => clearInterval(interval);
  }, [api, isPaused]);

  const handleVideoClick = (shortsUrl: string) => {
    window.open(shortsUrl, "_blank", "noopener,noreferrer");
  };

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
                        <button
                          onClick={() => handleVideoClick(video.shortsUrl)}
                          className="relative w-full h-full bg-black group cursor-pointer overflow-hidden"
                          style={{ minHeight: "600px" }}
                        >
                          {/* YouTube Thumbnail - qualité maximale */}
                          <Image
                            src={`https://img.youtube.com/vi/${video.youtubeId}/maxresdefault.jpg`}
                            alt={video.alt}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 384px"
                            priority={index === 0}
                          />

                          {/* Overlay avec bouton Play */}
                          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-all duration-300 flex items-center justify-center">
                            <div className="bg-white/90 dark:bg-black/90 rounded-full p-6 group-hover:scale-110 transition-transform duration-300">
                              <Play className="w-12 h-12 text-red-600 fill-red-600" />
                            </div>
                          </div>

                          {/* Texte "Cliquez pour voir" */}
                          <div className="absolute bottom-8 left-0 right-0 text-center">
                            <span className="bg-black/70 text-white px-4 py-2 rounded-full text-sm font-medium">
                              Cliquez pour voir le témoignage
                            </span>
                          </div>
                        </button>
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
                    <button
                      onClick={() => handleVideoClick(video.shortsUrl)}
                      className="relative w-full bg-black rounded-lg overflow-hidden group cursor-pointer"
                      style={{ paddingBottom: "177.78%" }}
                    >
                      {/* YouTube Thumbnail */}
                      <Image
                        src={`https://img.youtube.com/vi/${video.youtubeId}/maxresdefault.jpg`}
                        alt={video.alt}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 384px"
                        priority={index === 0}
                      />

                      {/* Overlay avec bouton Play */}
                      <div className="absolute inset-0 bg-black/30 group-active:bg-black/50 transition-all duration-300 flex items-center justify-center">
                        <div className="bg-white/90 dark:bg-black/90 rounded-full p-6 group-active:scale-110 transition-transform duration-300">
                          <Play className="w-12 h-12 text-red-600 fill-red-600" />
                        </div>
                      </div>

                      {/* Texte "Appuyez pour voir" */}
                      <div className="absolute bottom-8 left-0 right-0 text-center">
                        <span className="bg-black/70 text-white px-4 py-2 rounded-full text-sm font-medium">
                          Appuyez pour voir le témoignage
                        </span>
                      </div>
                    </button>
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
