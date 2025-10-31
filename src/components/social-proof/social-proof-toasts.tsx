"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useTranslation } from "@/hooks/use-translation";
import { supabaseClient } from "@/lib/supabase/client";
import type { Visit } from "@/types/social-proof";

// Noms français modernes
const NAMES = [
  "Sophie",
  "Mohamed",
  "Camille",
  "Antoine",
  "Léa",
  "Kevin",
  "Sofia",
  "Thomas",
  "Tatiana",
  "Jordan",
  "Fatou",
  "Lucas",
  "Maya",
  "Ibrahim",
  "Chloé",
  "Malik",
  "Emma",
  "Yanis",
];

// Villes françaises
const CITIES = [
  "Paris",
  "Lyon",
  "Marseille",
  "Toulouse",
  "Bordeaux",
  "Nice",
  "Nantes",
  "Strasbourg",
  "Lille",
  "Rennes",
  "Montpellier",
  "Grenoble",
];

const SHOW_MS = Number(process.env.NEXT_PUBLIC_TOAST_SHOW_MS || 6000);

interface SocialProofToastsProps {
  side?: "left" | "right";
  enabled?: boolean;
}

export default function SocialProofToasts({
  side = "left",
  enabled = true,
}: SocialProofToastsProps) {
  const t = useTranslation();
  const [queue, setQueue] = useState<Visit[]>([]);
  const [current, setCurrent] = useState<Visit | null>(null);
  const [mounted, setMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [pauseUntil, setPauseUntil] = useState<number>(0);
  const timer = useRef<NodeJS.Timeout | null>(null);
  const exitTimer = useRef<NodeJS.Timeout | null>(null);
  const pauseTimer = useRef<NodeJS.Timeout | null>(null);

  // Montage côté client seulement
  useEffect(() => {
    setMounted(true);
  }, []);

  // Écoute Realtime Supabase
  useEffect(() => {
    if (!enabled || !mounted) return;

    const sb = supabaseClient();

    // Charger les derniers événements
    sb.from("visits")
      .select("*")
      .order("created_at", { ascending: false })
      .limit(5)
      .then(({ data, error }) => {
        if (error) {
          console.error("Failed to fetch visits:", error);
        } else if (data?.length) {
          setQueue((q) => [...data.reverse(), ...q]);
        }
      });

    // S'abonner aux nouveaux inserts en temps réel
    const channel = sb
      .channel("realtime:visits")
      .on(
        "postgres_changes",
        { event: "INSERT", schema: "public", table: "visits" },
        (payload: any) => {
          const v = payload.new as Visit;
          setQueue((q) => [...q, v]);
        },
      )
      .subscribe((status) => {
        if (status === "SUBSCRIBED") {
          console.log("Social proof realtime subscribed");
        }
      });

    return () => {
      sb.removeChannel(channel);
    };
  }, [enabled, mounted]);

  // Rotation des toasts avec délai aléatoire entre les affichages
  useEffect(() => {
    if (!enabled || !mounted) return;

    const now = Date.now();
    const isInPause = now < pauseUntil;

    if (!current && queue.length && !isInPause) {
      const nextVisit = queue[0];
      setCurrent(nextVisit);
      setIsVisible(true);
      setQueue((q) => q.slice(1));
    }
  }, [queue, current, enabled, mounted, pauseUntil]);

  // Gestion des timers pour la disparition du toast actuel
  useEffect(() => {
    if (!enabled || !mounted || !current) return;

    if (timer.current) clearTimeout(timer.current);
    if (exitTimer.current) clearTimeout(exitTimer.current);
    if (pauseTimer.current) clearTimeout(pauseTimer.current);

    // Déclencher la disparition après 9650ms (lecture + début transition)
    exitTimer.current = setTimeout(() => {
      setIsVisible(false);
    }, 9650);

    // Retirer complètement après 10000ms (9650ms + 350ms transition)
    timer.current = setTimeout(() => {
      setCurrent(null);

      // Ajouter un délai aléatoire entre 20-40 secondes avant le prochain toast
      const randomDelay = Math.random() * (40000 - 20000) + 20000; // 20-40 secondes
      setPauseUntil(Date.now() + randomDelay);

      // Réinitialiser la pause après le délai
      pauseTimer.current = setTimeout(() => {
        setPauseUntil(0);
      }, randomDelay);
    }, 10000);

    return () => {
      if (timer.current) clearTimeout(timer.current);
      if (exitTimer.current) clearTimeout(exitTimer.current);
      if (pauseTimer.current) clearTimeout(pauseTimer.current);
    };
  }, [current, enabled, mounted]);

  if (!enabled || !mounted || !current) return null;

  // Générer contenu du toast
  const name = NAMES[Math.floor(Math.random() * NAMES.length)];
  const city =
    current.city && CITIES.includes(current.city)
      ? current.city
      : CITIES[Math.floor(Math.random() * CITIES.length)];

  const page = current.page_path || "/";

  let message = "";

  // Génération du message selon le type d'événement
  if (current.event_type === "booking") {
    message = `${t.socialProofToasts.booked} ${t.socialProofToasts.tariff}`;
  } else if (current.event_type === "blog_view") {
    message = `${t.socialProofToasts.blogViewed} ${t.socialProofToasts.article}`;
  } else if (current.event_type === "pricing_view") {
    message = `${t.socialProofToasts.viewed} ${t.socialProofToasts.masterclass}`;
  } else {
    // Default: visit
    const pageLabel =
      page === "/"
        ? t.socialProofToasts.masterclass
        : t.socialProofToasts.article;
    message = `${t.socialProofToasts.viewed} ${pageLabel}`;
  }

  const positionClass = side === "left" ? "left-4" : "right-4";

  return (
    <div
      className={`fixed bottom-4 ${positionClass} z-40 max-w-[92vw] sm:max-w-sm`}
    >
      <AnimatePresence mode="wait">
        {current && isVisible && (
          <motion.div
            key={current.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.35 }}
            role="status"
            aria-live="polite"
            className="flex items-center gap-3 bg-white/95 dark:bg-neutral-900/95 backdrop-blur-sm shadow-lg border border-neutral-200 dark:border-neutral-800 rounded-2xl px-3 py-2"
          >
            {/* Icon */}
            <div className="h-10 w-10 flex-shrink-0 rounded-xl bg-neutral-100 dark:bg-neutral-800 grid place-items-center text-lg">
              👀
            </div>

            {/* Message */}
            <div className="flex-1 text-sm leading-snug min-w-0">
              <p className="truncate">
                <strong>{name}</strong> {t.socialProofToasts.from} {city}{" "}
                {message}
              </p>
              <p className="text-xs text-neutral-500">
                {t.socialProofToasts.justNow}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
