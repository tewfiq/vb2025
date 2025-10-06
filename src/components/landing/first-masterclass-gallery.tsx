"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import React from "react";
import { useTranslation } from "@/hooks/use-translation";

const images = [
  {
    src: "/slideshow/IMG_1158-min.jpeg",
    alt: "Atelier Vibe Coding Paris 1",
  },
  {
    src: "/slideshow/IMG_1187-min.jpeg",
    alt: "Atelier Vibe Coding Paris 2",
  },
  {
    src: "/slideshow/IMG_1290-min.jpeg",
    alt: "Atelier Vibe Coding Paris 3",
  },
  {
    src: "/slideshow/IMG_1297-min.jpeg",
    alt: "Atelier Vibe Coding Paris 4",
  },
  {
    src: "/slideshow/IMG_1319-min.jpeg",
    alt: "Atelier Vibe Coding Paris 5",
  },
  {
    src: "/slideshow/IMG_1320-min.jpeg",
    alt: "Atelier Vibe Coding Paris 6",
  },
  {
    src: "/slideshow/IMG_1321-min.jpeg",
    alt: "Atelier Vibe Coding Paris 7",
  },
  {
    src: "/slideshow/IMG_1347-min.jpeg",
    alt: "Atelier Vibe Coding Paris 8",
  },
  {
    src: "/slideshow/IMG_1349-min.jpeg",
    alt: "Atelier Vibe Coding Paris 9",
  },
  {
    src: "/slideshow/IMG_1436-min.jpeg",
    alt: "Atelier Vibe Coding Paris 10",
  },
  {
    src: "/slideshow/IMG_1437-min.jpeg",
    alt: "Atelier Vibe Coding Paris 11",
  },
  {
    src: "/slideshow/IMG_1438-min.jpeg",
    alt: "Atelier Vibe Coding Paris 12",
  },
];

const companies = [
  {
    name: "Seven Boys & Girls",
    logo: "/companies/seven.png",
  },
  {
    name: "Le Progrès",
    logo: "/companies/le-progres.png",
  },
  {
    name: "Moon Croissant",
    logo: "/companies/moon.png",
  },
  {
    name: "Ray Ban Meta",
    logo: "/companies/rayban-meta.png",
  },
];

export default function FirstMasterclassGallery() {
  const t = useTranslation();
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);
  const [isClient, setIsClient] = React.useState(false);

  React.useEffect(() => {
    setIsClient(true);
  }, []);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });

    const interval = setInterval(() => {
      if (api.canScrollNext()) {
        api.scrollNext();
      } else {
        api.scrollTo(0);
      }
    }, 4000);

    return () => clearInterval(interval);
  }, [api]);

  if (!isClient) {
    return (
      <section className="py-12 md:py-20 lg:py-32 bg-muted/30 dark:bg-muted/10">
        <div className="container mx-auto px-4">
          <div className="w-full max-w-4xl mx-auto">
            <div className="flex aspect-video items-center justify-center p-0 overflow-hidden rounded-lg bg-muted">
              <span className="text-muted-foreground">
                Chargement...
              </span>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-12 md:py-20 lg:py-32 bg-muted/30 dark:bg-muted/10">
      <div className="container mx-auto px-4">
        {/* Titre et message de remerciement */}
        <div className="text-center max-w-3xl mx-auto mb-8 md:mb-12">
          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl md:text-4xl lg:text-5xl font-headline mb-4">
            {t.firstMasterclassGallery.title}
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground">
            {t.firstMasterclassGallery.thanksMessage}
          </p>
        </div>

        {/* Carousel */}
        <Carousel setApi={setApi} className="w-full max-w-4xl mx-auto mb-8">
          <CarouselContent>
            {images.map((image, index) => (
              <CarouselItem key={index}>
                <Card>
                  <CardContent className="flex aspect-video items-center justify-center p-0 overflow-hidden rounded-lg">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      width={1200}
                      height={675}
                      className="w-full h-full object-cover"
                      priority={index === 0}
                    />
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>

        <div className="py-2 text-center text-sm text-muted-foreground mb-8">
          {current} / {count}
        </div>

        {/* Logos des entreprises participantes */}
        <div className="text-center max-w-4xl mx-auto">
          <p className="text-base md:text-lg text-muted-foreground mb-6 font-medium">
            {t.firstMasterclassGallery.participatingCompanies}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            {companies.map((company, index) => (
              <div
                key={index}
                className="relative w-20 h-20 md:w-24 md:h-24 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100"
              >
                <Image
                  src={company.logo}
                  alt={company.name}
                  width={100}
                  height={100}
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
