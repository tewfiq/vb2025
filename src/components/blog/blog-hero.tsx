"use client";

import Link from "next/link";
import { useTranslation } from "@/hooks/use-translation";
import { useLanguage } from "@/components/language-provider";
import { BookOpen, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function BlogHero() {
  const t = useTranslation();
  const { language } = useLanguage();

  return (
    <section className="py-20 bg-gradient-to-b from-primary/10 via-background to-background">
      <div className="container">
        <div className="mb-8">
          <Link href="/">
            <Button variant="ghost" className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              {language === "fr" ? "Retour à l'accueil" : "Back to home"}
            </Button>
          </Link>
        </div>
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
