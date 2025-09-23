"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  MockEditorLight,
  MockTerminalClean,
  MockWorkshopRoom,
  MockCardsGrid,
  MockPeopleAvatars,
  MockBadgeRareté
} from "./mock-components";
import { useTranslation } from "@/hooks/use-translation";

export default function WhyCards() {
    const t = useTranslation();

    const features = [
        { title: t.whyCards.features.learnByWriting.title, description: t.whyCards.features.learnByWriting.description, content: <MockEditorLight /> },
        { title: t.whyCards.features.launchProjects.title, description: t.whyCards.features.launchProjects.description, content: <MockTerminalClean /> },
        { title: t.whyCards.features.interactiveWorkshops.title, description: t.whyCards.features.interactiveWorkshops.description, content: <MockWorkshopRoom /> },
        { title: t.whyCards.features.instantCreation.title, description: t.whyCards.features.instantCreation.description, content: <MockCardsGrid /> },
        { title: t.whyCards.features.teamSpirit.title, description: t.whyCards.features.teamSpirit.description, content: <MockPeopleAvatars /> },
        { title: t.whyCards.features.unfairAdvantage.title, description: t.whyCards.features.unfairAdvantage.description, content: <MockBadgeRareté /> }
    ];

    return (
        <section id="why" className="py-12 md:py-20 lg:py-32 bg-muted/30">
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="text-center max-w-3xl mx-auto mb-8 md:mb-16">
                    <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl md:text-4xl lg:text-5xl font-headline">
                        {t.whyCards.title.line1}<br />{t.whyCards.title.line2}
                    </h2>
                    <p className="mt-4 text-lg text-muted-foreground">
                        {t.whyCards.subtitle}
                    </p>
                </div>

                {/* Cartes principales */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <Card key={index} className="flex flex-col overflow-hidden bg-card/80 backdrop-blur-sm transition-all hover:scale-[1.02] hover:shadow-lg">
                            <CardHeader>
                                <CardTitle className="font-headline text-xl" dangerouslySetInnerHTML={{ __html: feature.title }}></CardTitle>
                                <p className="text-sm font-normal text-muted-foreground pt-1">{feature.description}</p>
                            </CardHeader>
                            <CardContent className="flex-grow">
                                {feature.content}
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}