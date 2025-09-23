"use client";

import { useState, useEffect } from 'react';
import { useTranslation } from '@/hooks/use-translation';
import { useLanguage } from '@/components/language-provider';

export default function SocialProofBadge() {
  const [currentDateTime, setCurrentDateTime] = useState('');
  const t = useTranslation();
  const { language } = useLanguage();

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        timeZone: 'Europe/Paris'
      };

      // Use the appropriate locale based on the current language
      const locale = language === 'fr' ? 'fr-FR' : 'en-US';
      const formattedDate = now.toLocaleDateString(locale, options);
      setCurrentDateTime(formattedDate);
    };

    updateDateTime();
    const interval = setInterval(updateDateTime, 60000);

    return () => clearInterval(interval);
  }, [language]);

  return (
    <div className="flex flex-col items-center max-w-xs">
      <div className="inline-flex items-center gap-2 bg-lime-400 text-lime-950 px-3 py-1.5 rounded-full text-xs font-bold border border-lime-300 shadow-lg shadow-lime-400/30 whitespace-nowrap">
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-400"></span>
        </span>
        <span className="text-xs">{t.socialProofBadge.spotsRemaining}</span>
      </div>
      <div className="mt-1 text-xs text-muted-foreground font-medium text-center leading-tight">
        {currentDateTime} {t.socialProofBadge.timezone}
      </div>
    </div>
  );
}