"use client";

import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { GraduationCap } from 'lucide-react';
import { useTranslation } from '@/hooks/use-translation';

// Extend Window interface for Cal.com
declare global {
  interface Window {
    Cal?: any;
  }
}

interface StudentDialogProps {
  variant?: 'default' | 'outline' | 'ghost';
  size?: 'default' | 'sm' | 'lg' | 'icon';
  className?: string;
}

export default function StudentDialog({
  variant = 'outline',
  size = 'default',
  className = ''
}: StudentDialogProps) {
  const t = useTranslation();

  useEffect(() => {
    // Cal.com initialization function - exact copy of their embed code
    const initCal = () => {
      if (typeof window !== 'undefined') {
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

        // Initialize Cal for students dialog
        window.Cal("init", "students15min", { origin: "https://app.cal.com" });

        // Setup inline widget for students
        window.Cal.ns["students15min"]("inline", {
          elementOrSelector: "#students-cal-inline",
          config: { layout: "month_view" },
          calLink: "tewfiqferahi/15min?utm_source=students_dialog&utm_medium=popup",
        });

        // Setup UI
        window.Cal.ns["students15min"]("ui", {
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
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={variant} size={size} className={className}>
          <GraduationCap className="mr-2 h-4 w-4" />
          {t.navigation.students}
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-center text-2xl font-bold">
            {t.studentsDialog.title}
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Message d'accueil */}
          <div className="text-center space-y-4">
            <h3 className="text-xl font-semibold text-accent">
              {t.studentsDialog.welcome}
            </h3>
            <p className="text-muted-foreground">
              {t.studentsDialog.description}
            </p>

            {/* Tarif spécial */}
            <div className="bg-accent/10 border border-accent/20 rounded-lg p-4">
              <p className="font-semibold text-accent">
                {t.studentsDialog.specialPricing}
              </p>
            </div>

            {/* Processus */}
            <div className="bg-muted/50 rounded-lg p-4">
              <p className="text-sm font-medium">
                {t.studentsDialog.process}
              </p>
            </div>
          </div>

          {/* Widget Cal.com */}
          <div className="bg-background rounded-lg border overflow-hidden">
            <div
              style={{ width: '100%', height: '600px', overflow: 'scroll' }}
              id="students-cal-inline"
            />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}