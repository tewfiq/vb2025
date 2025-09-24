"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Check } from "lucide-react";
import SocialProofBadge from "@/components/landing/social-proof-badge";
import { useTranslation } from "@/hooks/use-translation";

export default function Pricing() {
  const t = useTranslation();

  return (
    <section id="pricing" className="py-12 md:py-20 lg:py-32 bg-muted/30 scroll-mt-16">
      <div className="container mx-auto px-4">

        <div className="text-center max-w-3xl mx-auto mb-8 md:mb-16">
          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl md:text-4xl lg:text-5xl font-headline">
            {t.pricing.title}
          </h2>
          <p className="mt-2 md:mt-4 text-base md:text-lg text-muted-foreground">
            {t.pricing.subtitle}
          </p>
          <p className="mt-2 text-sm md:text-base text-muted-foreground italic" dangerouslySetInnerHTML={{ __html: t.pricing.description }}>
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto items-start justify-items-center">
          {/* Starter Card - Featured */}
          <Card className="flex flex-col h-full w-full max-w-sm border-2 border-accent shadow-2xl shadow-accent/20 relative transition-all hover:scale-[1.02] hover:shadow-2xl">
            <CardHeader className="pb-4">
              <CardTitle className="font-headline text-2xl">
                {t.pricing.plans.starter.title}
              </CardTitle>
              <div className="flex items-baseline gap-2">
                <span className="text-5xl font-bold tracking-tight text-accent">
                  {t.pricing.plans.starter.price}
                </span>
              </div>
              <p className="text-sm text-muted-foreground">
                {t.pricing.plans.starter.description}
              </p>
            </CardHeader>
            <CardContent className="flex-1">
              <ul className="space-y-3 text-sm">
                {t.pricing.plans.starter.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-accent" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter className="flex-col gap-3">
              <Button className="w-full bg-accent hover:bg-accent/90" asChild>
                <Link href="https://buy.stripe.com/bJe8wQ3dN7NGc5EcJv7EQ0b">
                  {t.pricing.plans.starter.buttonText}
                </Link>
              </Button>
            </CardFooter>
          </Card>

          {/* Standard Card - Highlighted */}
          <Card className="flex flex-col h-full w-full max-w-sm border-2 border-primary shadow-2xl shadow-primary/20 relative transition-all hover:scale-[1.02] hover:shadow-2xl">
            <CardHeader className="pb-4">
              <CardTitle className="font-headline text-xl">
                {t.pricing.plans.standard.title}
              </CardTitle>
              <div className="flex items-baseline gap-2">
                <span className="text-5xl font-bold tracking-tight">{t.pricing.plans.standard.price}</span>
              </div>
              <p className="text-sm text-muted-foreground">{t.pricing.plans.standard.description}</p>
            </CardHeader>
            <CardContent className="flex-1">
              <ul className="space-y-3 text-sm">
                {t.pricing.plans.standard.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span className="text-muted-foreground" dangerouslySetInnerHTML={{ __html: feature }}></span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full" asChild>
                <Link href="https://buy.stripe.com/bJe5kEdSrgkcfhQaBn7EQ0c">
                  {t.pricing.plans.standard.buttonText}
                </Link>
              </Button>{" "}
            </CardFooter>
          </Card>

          {/* Team Card */}
          <Card className="flex flex-col h-full w-full max-w-sm transition-all hover:scale-[1.02] hover:shadow-lg">
            <CardHeader className="pb-4">
              <CardTitle className="font-headline text-2xl">
                {t.pricing.plans.team.title}
              </CardTitle>
              <div className="flex items-baseline gap-2">
                <span className="text-5xl font-bold tracking-tight">
                  {t.pricing.plans.team.price}
                </span>
              </div>
              <p className="text-sm text-muted-foreground">
                {t.pricing.plans.team.description}
              </p>
            </CardHeader>
            <CardContent className="flex-1">
              <ul className="space-y-3 text-sm">
                {t.pricing.plans.team.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full" variant="outline" asChild>
                <Link href="https://cal.com/tewfiqferahi/15min">
                  {t.pricing.plans.team.buttonText}
                </Link>
              </Button>{" "}
            </CardFooter>
          </Card>
        </div>

        {/* Badge de social proof repositionné sous les cartes */}
        <div className="flex justify-center mt-8 md:mt-12">
          <SocialProofBadge />
        </div>
      </div>
    </section>
  );
}
