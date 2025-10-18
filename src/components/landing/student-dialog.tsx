"use client";

import { useEffect, useState } from 'react';
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
import { trackConsultationClick } from '@/lib/analytics';

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
  const [isOpen, setIsOpen] = useState(false);
  const [calInitialized, setCalInitialized] = useState(false);

  const handleStudentDialogOpen = () => {
    trackConsultationClick("Student Dialog - Header");
  };

  useEffect(() => {
    if (!isOpen || calInitialized) return;

    // Wait for the dialog to be fully rendered
    const timer = setTimeout(() => {
      const targetElement = document.getElementById('students-cal-inline');
      if (!targetElement) {
        console.warn('Cal.com target element not found, retrying...');
        return;
      }

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

          setCalInitialized(true);
        }
      };

      initCal();
    }, 500); // Increased delay to ensure dialog is fully rendered

    return () => clearTimeout(timer);
  }, [isOpen, calInitialized]);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant={variant} size={size} className={className} onClick={handleStudentDialogOpen}>
          <GraduationCap className="mr-2 h-4 w-4" />
          {t.navigation.students}
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-center text-2xl font-bold whitespace-pre-line">
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
            {!calInitialized && (
              <div className="flex items-center justify-center h-96">
                <div className="text-center">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-accent mx-auto mb-4"></div>
                  <p className="text-muted-foreground">Chargement du calendrier...</p>
                </div>
              </div>
            )}
            <div
              style={{
                width: '100%',
                height: '600px',
                overflow: 'scroll',
                display: calInitialized ? 'block' : 'none'
              }}
              id="students-cal-inline"
            />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}