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
  const timer = useRef<NodeJS.Timeout | null>(null);

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

  // Rotation des toasts
  useEffect(() => {
    if (!enabled || !mounted) return;

    if (!current && queue.length) {
      const nextVisit = queue[0];
      setCurrent(nextVisit);
      setQueue((q) => q.slice(1));

      if (timer.current) clearTimeout(timer.current);
      timer.current = setTimeout(() => {
        setCurrent(null);
      }, SHOW_MS);
    }

    return () => {
      if (timer.current) clearTimeout(timer.current);
    };
  }, [queue, current, enabled, mounted]);

  if (!enabled || !mounted || !current) return null;

  // Générer contenu du toast
  const name = NAMES[Math.floor(Math.random() * NAMES.length)];
  const city =
    current.city && CITIES.includes(current.city)
      ? current.city
      : CITIES[Math.floor(Math.random() * CITIES.length)];

  const page = current.page_path || "/";

  let message = "";
  let ctaText = "";

  // Génération du message selon le type d'événement
  if (current.event_type === "booking") {
    message = `${t.socialProofToasts.booked} ${t.socialProofToasts.tariff}`;
    ctaText = t.socialProofToasts.viewPage;
  } else if (current.event_type === "blog_view") {
    message = `${t.socialProofToasts.blogViewed} ${t.socialProofToasts.article}`;
    ctaText = t.socialProofToasts.viewPage;
  } else if (current.event_type === "pricing_view") {
    message = `${t.socialProofToasts.viewed} ${t.socialProofToasts.masterclass}`;
    ctaText = t.socialProofToasts.viewPage;
  } else {
    // Default: visit
    const pageLabel =
      page === "/"
        ? t.socialProofToasts.masterclass
        : t.socialProofToasts.article;
    message = `${t.socialProofToasts.viewed} ${pageLabel}`;
    ctaText = t.socialProofToasts.viewPage;
  }

  const positionClass = side === "left" ? "left-4" : "right-4";

  return (
    <div
      className={`fixed bottom-4 ${positionClass} z-40 max-w-[92vw] sm:max-w-sm`}
    >
      <AnimatePresence mode="wait">
        {current && (
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

            {/* CTA Button */}
            <a
              href={page}
              className="text-xs px-2 py-1 flex-shrink-0 rounded-lg bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 whitespace-nowrap"
            >
              {ctaText}
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
