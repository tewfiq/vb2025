"use client";
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from '@/components/ui/carousel';
import React from 'react';

const images = [
  { src: '/slideshow/IMG_1290-min.jpeg', alt: 'Atelier Vibe Coding 1', hint: 'people learning' },
  { src: '/slideshow/IMG_1297-min.jpeg', alt: 'Atelier Vibe Coding 2', hint: 'presenting code' },
  { src: '/slideshow/IMG_1319-min.jpeg', alt: 'Atelier Vibe Coding 3', hint: 'UI design' },
  { src: '/slideshow/IMG_1320-min.jpeg', alt: 'Atelier Vibe Coding 4', hint: 'developer smiling' },
  { src: '/slideshow/IMG_1321-min.jpeg', alt: 'Atelier Vibe Coding 5', hint: 'group discussion' },
  { src: '/slideshow/IMG_1347-min.jpeg', alt: 'Atelier Vibe Coding 6', hint: 'laptop screen' },
  { src: '/slideshow/IMG_1349-min.jpeg', alt: 'Atelier Vibe Coding 7', hint: 'pair programming' },
  { src: '/slideshow/IMG_1436-min.jpeg', alt: 'Atelier Vibe Coding 8', hint: 'creative workspace' },
  { src: '/slideshow/IMG_1437-min.jpeg', alt: 'Atelier Vibe Coding 9', hint: 'coding students' },
  { src: '/slideshow/IMG_1438-min.jpeg', alt: 'Atelier Vibe Coding 10', hint: 'project success' },
];

export default function Gallery() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <section id="programme" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <Carousel setApi={setApi} className="w-full max-w-4xl mx-auto">
          <CarouselContent>
            {images.map((image, index) => (
              <CarouselItem key={index}>
                <Card>
                  <CardContent className="flex aspect-video items-center justify-center p-0 overflow-hidden rounded-lg">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      width={800}
                      height={450}
                      className="w-full h-full object-cover"
                      data-ai-hint={image.hint}
                    />
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
        <div className="py-4 text-center text-sm text-muted-foreground">
          {current} / {count}
        </div>
      </div>
    </section>
  );
}
