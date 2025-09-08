const bullets = [
    "Apprendre à coder en parlant : explorer avec ChatGPT, Claude ou Gemini",
    "Donner de la forme à ses idées : passer de l'intuition à une version exploitable",
    "Obtenir un projet concret : repo GitHub + URL publique en 2h",
    "Une méthode claire : une compétence, rien de personnel"
];

export default function WhyVibe() {
    return (
        <section id="why" className="py-20 md:py-32 bg-muted/30">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl font-headline">
                        Pourquoi rejoindre Vibe Coding ?
                    </h2>
                </div>

                <div className="max-w-2xl mx-auto">
                    <ul className="space-y-6">
                        {bullets.map((bullet, index) => (
                            <li key={index} className="flex items-start gap-4 text-lg">
                                <span className="flex-shrink-0 w-2 h-2 bg-accent rounded-full mt-3"></span>
                                <span className="text-foreground">{bullet}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}
