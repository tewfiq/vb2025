"use client";

import { useEffect } from 'react';
import { BackButton } from '@/components/ui/back-button';
import { useTranslation } from '@/hooks/use-translation';

// Extend Window interface for Cal.com
declare global {
  interface Window {
    Cal?: any;
  }
}

export default function ContactPage() {
  const t = useTranslation();

  useEffect(() => {
    // Check if Cal script is already loaded
    if (typeof window !== 'undefined' && !window.Cal) {
      const script = document.createElement('script');
      script.src = 'https://app.cal.com/embed/embed.js';
      script.async = true;
      document.head.appendChild(script);

      script.onload = () => {
        // Initialize Cal.com widget
        if (window.Cal) {
          window.Cal("init", "15min", { origin: "https://app.cal.com" });

          window.Cal.ns["15min"]("inline", {
            elementOrSelector: "#my-cal-inline-15min",
            config: { layout: "month_view" },
            calLink: "tewfiqferahi/15min",
          });

          window.Cal.ns["15min"]("ui", {
            hideEventTypeDetails: false,
            layout: "month_view"
          });
        }
      };
    } else if (window.Cal) {
      // Cal is already loaded, just initialize the widget
      window.Cal("init", "15min", { origin: "https://app.cal.com" });

      window.Cal.ns["15min"]("inline", {
        elementOrSelector: "#my-cal-inline-15min",
        config: { layout: "month_view" },
        calLink: "tewfiqferahi/15min",
      });

      window.Cal.ns["15min"]("ui", {
        hideEventTypeDetails: false,
        layout: "month_view"
      });
    }
  }, []);

  return (
    <div className="container mx-auto px-4 py-16">
      <BackButton />
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl font-headline mb-4">
            Contact
          </h1>
          <p className="text-lg text-muted-foreground mb-8">
            Réservez directement un créneau de 15 minutes pour discuter de votre projet ou poser vos questions.
          </p>
        </div>

        <div className="bg-background rounded-lg shadow-lg border">
          <div
            style={{ width: '100%', height: '600px', overflow: 'scroll' }}
            id="my-cal-inline-15min"
          >
            <div className="flex items-center justify-center h-full">
              <div className="text-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-accent mx-auto mb-4"></div>
                <p className="text-muted-foreground">Chargement du calendrier...</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}