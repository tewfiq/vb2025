"use client";

import { ChatBubbleIcon, LaptopIcon, RocketIcon } from "@radix-ui/react-icons";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const steps = [
  {
    icon: ChatBubbleIcon,
    title: "1. Idée → intention",
    copy: "On clarifie ton idée avec un LLM. Objectif: intention nette.",
    more: "Méthode Kindlin en 5 minutes, sans jargon."
  },
  {
    icon: LaptopIcon,
    title: "2. Atelier BYOD",
    copy: "Tu viens avec ton laptop. On prépare l'environnement et on construit ensemble.",
    more: "Aucun prérequis d'installation. Comptes créés sur place si besoin."
  },
  {
    icon: RocketIcon,
    title: "3. Mise en ligne",
    copy: "GitHub → Netlify/Vercel. Tu repars avec une URL publique.",
    more: "Vérification à chaque étape pour que tout fonctionne."
  }
];

export default function MethodSteps() {
  return (
    <section className="py-12 md:py-20 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl font-headline">
            Comment ça marche ?
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-6">
            {steps.map((step, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border border-border rounded-lg px-6">
                <AccordionTrigger className="hover:no-underline">
                  <div className="flex items-center gap-4 text-left">
                    <div className="flex-shrink-0 w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                      <step.icon className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold font-headline">{step.title}</h3>
                      <p className="text-muted-foreground text-sm">{step.copy}</p>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-4 pb-2">
                  <p className="text-muted-foreground ml-14">{step.more}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}