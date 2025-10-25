'use client';

import { useTranslation } from '@/hooks/use-translation';
import { BookOpen } from 'lucide-react';

export default function BlogHero() {
  const t = useTranslation();

  return (
    <section className="py-20 bg-gradient-to-b from-primary/10 via-background to-background">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
            <BookOpen className="h-8 w-8 text-primary" />
          </div>
          <h1 className="font-headline text-4xl md:text-5xl font-bold mb-4">
            {t.blog.title}
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground">
            {t.blog.subtitle}
          </p>
        </div>
      </div>
    </section>
  );
}
