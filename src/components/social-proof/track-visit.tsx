"use client";

import { useEffect } from "react";
import type { EventType } from "@/types/social-proof";

interface TrackVisitProps {
  enabled?: boolean;
}

// Détecte le type d'événement basé sur la page
function detectEventType(pathname: string): EventType {
  if (pathname.includes("/blog")) return "blog_view";
  if (pathname.includes("/pricing")) return "pricing_view";
  if (pathname.includes("#pricing")) return "pricing_view";
  return "visit";
}

export default function TrackVisit({ enabled = true }: TrackVisitProps) {
  useEffect(() => {
    if (!enabled) return;

    // Anti-doublon: 1 envoi par URL par session
    const key = `track:${location.pathname}`;
    if (sessionStorage.getItem(key)) return;
    sessionStorage.setItem(key, "1");

    const eventType = detectEventType(location.pathname);
    const body = JSON.stringify({
      pagePath: location.pathname || "/",
      lang: navigator.language?.split("-")[0] || "fr",
      eventType,
    });

    const url = "/api/track";

    // Envoi discret qui survit aux navigations (sendBeacon)
    if ("sendBeacon" in navigator) {
      const blob = new Blob([body], { type: "application/json" });
      navigator.sendBeacon(url, blob);
    } else {
      // Fallback pour les navigateurs sans sendBeacon
      fetch(url, {
        method: "POST",
        body,
        headers: { "Content-Type": "application/json" },
        keepalive: true,
      }).catch(() => {
        // Silencieusement échouer
      });
    }
  }, [enabled]);

  return null;
}
