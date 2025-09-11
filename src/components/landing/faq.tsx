import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button";
import Link from "next/link";

const faqs = [
    { question: 'Faut-il savoir coder ?', answer: "Non. Tout est guidé, aucun prérequis." },
    { question: 'Je repars vraiment avec un projet en ligne ?', answer: "Oui. Tu obtiens ton repo GitHub et une URL publique." },
    { question: 'Le code est à qui ?', answer: "À toi. Le repo est personnel et réutilisable." },
    { question: 'Et si je n\'ai pas d\'idée ?', answer: "On en trouve une ensemble, pendant la session." },
    { question: 'C\'est pour qui ?', answer: "Pour toute personne curieuse d'apprendre et d'expérimenter." },
];

export default function Faq() {
    return (
        <section id="faq" className="py-20 md:py-32 bg-background">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl font-headline">
                            FAQ
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
