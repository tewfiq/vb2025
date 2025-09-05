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
  { src: 'https://storage.googleapis.com/maker-studio-5a503.appspot.com/user_managed/6b85d4f3-a26a-4993-a442-d699e15f839a/cap-no-2-1200x900.jpg', alt: 'Atelier Vibe Coding 1', hint: 'coding workshop' },
  { src: 'https://picsum.photos/800/450?random=2', alt: 'Atelier Vibe Coding 2', hint: 'team collaboration' },
  { src: 'https://picsum.photos/800/450?random=3', alt: 'Atelier Vibe Coding 3', hint: 'people learning' },
  { src: 'https://picsum.photos/800/450?random=4', alt: 'Atelier Vibe Coding 4', hint: 'presenting code' },
  { src: 'https://picsum.photos/800/450?random=5', alt: 'Atelier Vibe Coding 5', hint: 'UI design' },
  { src: 'https://picsum.photos/800/450?random=6', alt: 'Atelier Vibe Coding 6', hint: 'developer smiling' },
  { src: 'https://picsum.photos/800/450?random=7', alt: 'Atelier Vibe Coding 7', hint: 'group discussion' },
  { src: 'https://picsum.photos/800/450?random=8', alt: 'Atelier Vibe Coding 8', hint: 'laptop screen' },
  { src: 'https://picsum.photos/800/450?random=9', alt: 'Atelier Vibe Coding 9', hint: 'pair programming' },
  { src: 'https://picsum.photos/800/450?random=10', alt: 'Atelier Vibe Coding 10', hint: 'creative workspace' },
  { src: 'https://picsum.photos/800/450?random=11', alt: 'Atelier Vibe Coding 11', hint: 'coding students' },
  { src: 'https://picsum.photos/800/450?random=12', alt: 'Atelier Vibe Coding 12', hint: 'project success' },
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
