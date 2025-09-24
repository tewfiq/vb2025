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
          <p className="text-lg text-muted-foreground mb-6">
            Réservez directement un créneau de 15 minutes pour discuter de votre projet ou poser vos questions.
          </p>

          <div className="flex justify-center gap-6 mb-8">
            <a
              href="https://x.com/tewfiq"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg border hover:bg-muted/50 transition-colors"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
              <span>X (Twitter)</span>
            </a>
            <a
              href="https://www.linkedin.com/in/tewfiq/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg border hover:bg-muted/50 transition-colors"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              <span>LinkedIn</span>
            </a>
          </div>
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