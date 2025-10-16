"use client";

import Link from "next/link";
import { Calendar, ChevronRight, X } from "lucide-react";
import { useTranslation } from "@/hooks/use-translation";
import { useState } from "react";

export default function AnnouncementBanner() {
  const t = useTranslation();
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="relative bg-gradient-to-r from-cyan-500 to-blue-600 dark:from-cyan-600 dark:to-blue-700">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-3 gap-4">
          {/* Contenu principal */}
          <Link
            href="#next-masterclass"
            className="flex-1 flex items-center justify-center gap-3 text-white hover:text-white/90 transition-colors group"
          >
            <Calendar className="w-5 h-5 flex-shrink-0" />
            <span className="font-medium text-sm md:text-base">
              <span className="hidden sm:inline">{t.announcementBanner.text} — </span>
              <span className="font-bold">{t.announcementBanner.date}</span>
            </span>
            <span className="hidden md:flex items-center gap-1 text-sm font-semibold bg-white/20 hover:bg-white/30 px-3 py-1 rounded-full transition-colors">
              {t.announcementBanner.cta}
              <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </span>
          </Link>

          {/* Bouton de fermeture */}
          <button
            onClick={() => setIsVisible(false)}
            className="flex-shrink-0 p-1 text-white/80 hover:text-white hover:bg-white/10 rounded transition-colors"
            aria-label="Fermer l'annonce"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
