import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button";
import Link from "next/link";

const faqs = [
    { question: 'Faut-il savoir coder ?', answer: "Absolument pas ! L'atelier est conçu pour tous les niveaux, des débutants complets aux curieux de la tech. On vous guide de A à Z." },
    { question: 'Je repars vraiment avec un projet en ligne ?', answer: "Oui ! Chaque participant repart avec son projet hébergé sur une URL publique, prêt à être partagé. C'est du concret." },
    { question: 'Le code est à qui ?', answer: "À vous ! Vous repartez avec l'accès complet au dépôt GitHub de votre projet. Vous en êtes le propriétaire et pouvez le modifier comme vous le souhaitez." },
    { question: 'Et si j\'ai zéro idée ?', answer: "Pas de panique. On a une banque d'idées de projets funs et réalisables en 2h. On peut aussi utiliser notre outil IA pour générer une idée qui vous correspond." },
    { question: 'C\'est pour qui ?', answer: "Pour les étudiants, les freelances, les entrepreneurs, les créatifs, les pros en reconversion... Bref, pour tous ceux qui veulent comprendre et utiliser la puissance de l'IA pour créer, sans se prendre la tête." },
];

export default function Faq() {
    return (
        <section id="faq" className="py-20 md:py-32 bg-background">
            <div className="container mx-auto px-4">
                <div className="max-w-3xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl font-headline">
                            FAQ
                        </h2>
                        <p className="mt-4 text-lg text-muted-foreground">
                            Questions que tout le monde se pose (mais que toi tu oses demander)
                        </p>
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
