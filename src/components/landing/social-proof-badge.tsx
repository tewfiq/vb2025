"use client";

import { useState, useEffect } from 'react';

export default function SocialProofBadge() {
  const [currentDateTime, setCurrentDateTime] = useState('');
  
  useEffect(() => {
    // Fonction pour mettre à jour la date et l'heure
    const updateDateTime = () => {
      const now = new Date();
      // Définir le fuseau horaire pour Paris (UTC+2 en été)
      const options: Intl.DateTimeFormatOptions = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        timeZone: 'Europe/Paris'
      };
      const formattedDate = now.toLocaleDateString('fr-FR', options);
      setCurrentDateTime(formattedDate);
    };
    
    // Mettre à jour immédiatement et ensuite toutes les minutes
    updateDateTime();
    const interval = setInterval(updateDateTime, 60000);
    
    // Nettoyer l'intervalle quand le composant est démonté
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className="flex flex-col items-center">
      <div className="inline-flex items-center gap-2 bg-lime-400 text-lime-950 px-4 py-2 rounded-full text-sm font-bold border border-lime-300 shadow-lg shadow-lime-400/30">
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-red-400"></span>
        </span>
        <span>🔥 Il reste 6 places ! Prenez la vôtre</span>
      </div>
      <div className="mt-2 text-xs text-muted-foreground font-medium">
        {currentDateTime} (Paris UTC+2)
      </div>
    </div>
  );
}