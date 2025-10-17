"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Clock, MapPin, Navigation } from "lucide-react";
import { useTranslation } from "@/hooks/use-translation";

export default function NextMasterclass() {
  const t = useTranslation();

  const infoItems = [
    {
      icon: Calendar,
      label: t.nextMasterclass.info.date,
      bgColor: "bg-cyan-50 dark:bg-cyan-500/10",
      iconColor: "text-cyan-500 dark:text-cyan-400"
    },
    {
      icon: Clock,
      label: t.nextMasterclass.info.time,
      bgColor: "bg-cyan-50 dark:bg-cyan-500/10",
      iconColor: "text-cyan-500 dark:text-cyan-400"
    },
    {
      icon: MapPin,
      label: t.nextMasterclass.info.location,
      bgColor: "bg-cyan-50 dark:bg-cyan-500/10",
      iconColor: "text-cyan-500 dark:text-cyan-400"
    },
    {
      icon: Navigation,
      label: t.nextMasterclass.info.metro,
      bgColor: "bg-cyan-50 dark:bg-cyan-500/10",
      iconColor: "text-cyan-500 dark:text-cyan-400"
    }
  ];

  return (
    <section id="next-masterclass" className="py-12 md:py-20 lg:py-32 bg-background -scroll-mt-16">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-8 md:mb-16">
          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl md:text-4xl lg:text-5xl font-headline whitespace-pre-line">
            {t.nextMasterclass.title}
          </h2>
          <p className="mt-2 md:mt-4 text-base md:text-lg text-muted-foreground">
            {t.nextMasterclass.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Colonne gauche : Informations */}
          <div className="space-y-4">
            {infoItems.map((item, index) => (
              <Card
                key={index}
              >
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className={`flex-shrink-0 w-12 h-12 ${item.bgColor} rounded-lg flex items-center justify-center`}>
                      <item.icon className={`w-6 h-6 ${item.iconColor}`} />
                    </div>
                    <div className="flex-1">
                      <p className="text-base md:text-lg font-medium text-foreground">
                        {item.label}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Colonne droite : Google Maps */}
          <Card className="overflow-hidden h-full min-h-[400px] lg:min-h-[500px]">
            <CardContent className="p-0 h-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.4385449371564!2d2.3633333!3d48.8625825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e1c3df3c7d5%3A0x9b6c1c3c3c3c3c3c!2s1%20Rue%20de%20Bretagne%2C%2075003%20Paris!5e0!3m2!1sfr!2sfr!4v1234567890123!5m2!1sfr!2sfr"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "400px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localisation de la masterclass"
                className="w-full h-full"
              />
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
