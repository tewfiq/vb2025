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
    // Use the exact Cal.com embed script provided
    const initCal = () => {
      if (typeof window !== 'undefined') {
        // Cal.com initialization function - exact copy of their embed code
        (function (C: any, A: string, L: string) {
          let p = function (a: any, ar: any) { a.q.push(ar); };
          let d = C.document;
          C.Cal = C.Cal || function () {
            let cal = C.Cal;
            let ar = arguments;
            if (!cal.loaded) {
              cal.ns = {};
              cal.q = cal.q || [];
              d.head.appendChild(d.createElement("script")).src = A;
              cal.loaded = true;
            }
            if (ar[0] === L) {
              const api = function () { p(api, arguments); };
              const namespace = ar[1];
              api.q = api.q || [];
              if (typeof namespace === "string") {
                cal.ns[namespace] = cal.ns[namespace] || api;
                p(cal.ns[namespace], ar);
                p(cal, ["initNamespace", namespace]);
              } else p(cal, ar);
              return;
            }
            p(cal, ar);
          };
        })(window, "https://app.cal.com/embed/embed.js", "init");

        // Initialize Cal
        window.Cal("init", "15min", { origin: "https://app.cal.com" });

        // Setup inline widget
        window.Cal.ns["15min"]("inline", {
          elementOrSelector: "#my-cal-inline-15min",
          config: { layout: "month_view" },
          calLink: "tewfiqferahi/15min",
        });

        // Setup UI
        window.Cal.ns["15min"]("ui", {
          hideEventTypeDetails: false,
          layout: "month_view"
        });
      }
    };

    // Add a small delay to ensure DOM is ready
    const timer = setTimeout(initCal, 100);
    return () => clearTimeout(timer);
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

        <div className="bg-background rounded-lg shadow-lg border overflow-hidden">
          <div
            style={{ width: '100%', height: '600px', overflow: 'scroll' }}
            id="my-cal-inline-15min"
          />
        </div>
      </div>
    </div>
  );
}