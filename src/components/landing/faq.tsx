"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useTranslation } from "@/hooks/use-translation";

export default function Faq() {
    const t = useTranslation();

    const faqs = [
        { question: t.faq.questions.needToCoding.question, answer: t.faq.questions.needToCoding.answer },
        { question: t.faq.questions.projectOnline.question, answer: t.faq.questions.projectOnline.answer },
        { question: t.faq.questions.codeOwnership.question, answer: t.faq.questions.codeOwnership.answer },
        { question: t.faq.questions.noIdea.question, answer: t.faq.questions.noIdea.answer },
        { question: t.faq.questions.whoIsItFor.question, answer: t.faq.questions.whoIsItFor.answer },
    ];

    return (
        <section id="faq" className="py-12 md:py-20 lg:py-32 bg-background">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-8 md:mb-12">
                        <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl md:text-4xl lg:text-5xl font-headline">
                            {t.faq.title}
                        </h2>
                    </div>

                    <Accordion type="single" collapsible className="w-full">
                        {faqs.map((faq, index) => (
                            <AccordionItem key={index} value={`item-${index}`}>
                                <AccordionTrigger className="text-lg font-semibold text-left">{faq.question}</AccordionTrigger>
                                <AccordionContent className="text-base text-muted-foreground">
                                    {faq.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </div>
        </section>
    );
}
