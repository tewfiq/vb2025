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
    console.log("[TrackVisit] Component mounted, enabled:", enabled);

    if (!enabled) {
      console.log("[TrackVisit] Social proof is disabled, skipping track");
      return;
    }

    // Anti-doublon: 1 envoi par URL par session
    const key = `track:${location.pathname}`;
    if (sessionStorage.getItem(key)) {
      console.log(
        "[TrackVisit] Already tracked this URL in this session, skipping",
      );
      return;
    }
    sessionStorage.setItem(key, "1");

    const eventType = detectEventType(location.pathname);
    const body = JSON.stringify({
      pagePath: location.pathname || "/",
      lang: navigator.language?.split("-")[0] || "fr",
      eventType,
    });

    const url = "/api/track";
    console.log("[TrackVisit] Sending track request to /api/track", {
      pagePath: location.pathname || "/",
      lang: navigator.language?.split("-")[0] || "fr",
      eventType,
    });

    // Envoi discret qui survit aux navigations (sendBeacon)
    if ("sendBeacon" in navigator) {
      const blob = new Blob([body], { type: "application/json" });
      const result = navigator.sendBeacon(url, blob);
      console.log("[TrackVisit] sendBeacon result:", result);
    } else {
      // Fallback pour les navigateurs sans sendBeacon
      fetch(url, {
        method: "POST",
        body,
        headers: { "Content-Type": "application/json" },
        keepalive: true,
      })
        .then((res) => {
          console.log("[TrackVisit] fetch response status:", res.status);
        })
        .catch((err) => {
          console.error("[TrackVisit] fetch error:", err);
        });
    }
  }, [enabled]);

  return null;
}
