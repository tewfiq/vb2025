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
    <div className="flex flex-col items-center">
      <div className="inline-flex items-center gap-2 bg-lime-400 text-lime-950 px-4 py-2 rounded-full text-sm font-bold border border-lime-300 shadow-lg shadow-lime-400/30">
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-red-400"></span>
        </span>
        <span>{t.socialProofBadge.spotsRemaining}</span>
      </div>
      <div className="mt-2 text-xs text-muted-foreground font-medium">
        {currentDateTime} {t.socialProofBadge.timezone}
      </div>
    </div>
  );
}