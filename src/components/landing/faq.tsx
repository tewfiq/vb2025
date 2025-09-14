import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button";
import Link from "next/link";

const faqs = [
    { question: 'Faut-il savoir coder ?', answer: "Non. Tu écris en français, l'IA génère le code." },
    { question: 'Je repars vraiment avec un projet en ligne ?', answer: "Oui, publié et accessible via une URL publique." },
    { question: 'Le code est à qui ?', answer: "À toi. Dépôt GitHub personnel inclus." },
    { question: 'Et si je n\'ai pas d\'idée ?', answer: "On t'aide à en formuler une simple et efficace." },
    { question: 'C\'est pour qui ?', answer: "Étudiants, freelances, curieux, équipes : tous niveaux." },
];

export default function Faq() {
    return (
        <section id="faq" className="py-12 md:py-20 lg:py-32 bg-background">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-8 md:mb-12">
                        <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl md:text-4xl lg:text-5xl font-headline">
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
