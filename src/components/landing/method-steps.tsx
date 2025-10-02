"use client";

import { ChatBubbleIcon, LaptopIcon, RocketIcon } from "@radix-ui/react-icons";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useTranslation } from "@/hooks/use-translation";

export default function MethodSteps() {
  const t = useTranslation();

  const steps = [
    {
      icon: ChatBubbleIcon,
      title: t.methodSteps.steps.ideaToIntention.title,
      copy: t.methodSteps.steps.ideaToIntention.copy,
      more: t.methodSteps.steps.ideaToIntention.more
    },
    {
      icon: LaptopIcon,
      title: t.methodSteps.steps.byodWorkshop.title,
      copy: t.methodSteps.steps.byodWorkshop.copy,
      more: t.methodSteps.steps.byodWorkshop.more
    },
    {
      icon: RocketIcon,
      title: t.methodSteps.steps.deployment.title,
      copy: t.methodSteps.steps.deployment.copy,
      more: t.methodSteps.steps.deployment.more
    }
  ];

  return (
    <section className="py-12 md:py-20 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl font-headline">
            {t.methodSteps.title}
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-6">
            {steps.map((step, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-[3px] border-border rounded-lg px-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,0.4)] transition-all duration-300 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[2px_2px_0px_0px_rgba(255,255,255,0.4)] bg-card">
                <AccordionTrigger className="hover:no-underline">
                  <div className="flex items-center gap-4 text-left">
                    <div className="flex-shrink-0 w-10 h-10 bg-accent/10 dark:bg-accent/20 rounded-lg flex items-center justify-center">
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