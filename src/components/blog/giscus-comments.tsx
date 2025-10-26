"use client";

import { useEffect, useState } from "react";
import Giscus from "@giscus/react";
import { useTheme } from "next-themes";
import { useLanguage } from "@/components/language-provider";
import { useTranslation } from "@/hooks/use-translation";
import { giscusConfig } from "@/lib/giscus-config";
import { Button } from "@/components/ui/button";

interface GiscusCommentsProps {
  slug: string;
}

export default function GiscusComments({ slug }: GiscusCommentsProps) {
  const { theme } = useTheme();
  const { language } = useLanguage();
  const t = useTranslation();
  const [mounted, setMounted] = useState(false);

  // Ensure component is mounted before rendering to avoid hydration issues
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="animate-pulse">
        <div className="h-32 bg-muted rounded-lg"></div>
      </div>
    );
  }

  // Map theme to giscus theme
  const giscusTheme =
    theme === "dark"
      ? "dark"
      : theme === "light"
        ? "light"
        : "preferred_color_scheme";

  // Map language to giscus language code
  const giscusLang = language === "fr" ? "fr" : "en";

  return (
    <div className="space-y-6">
      {/* Educational Message */}
      <div className="bg-muted rounded-lg border border-border p-6">
        <div className="space-y-3">
          <p className="font-headline font-semibold text-foreground whitespace-pre-line">
            {t.comments.whyGithub}
          </p>
          <p className="text-sm text-muted-foreground">
            GitHub est LA plateforme des développeurs. Commencez maintenant !
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <a
              href="https://github.com/signup"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button>{t.comments.createAccount}</Button>
            </a>
            <a
              href="https://github.com/login"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline">{t.comments.signIn}</Button>
            </a>
          </div>
        </div>
      </div>

      {/* Giscus Comments Widget */}
      <Giscus
        repo={giscusConfig.repo as `${string}/${string}`}
        repoId={giscusConfig.repoId}
        category={giscusConfig.category}
        categoryId={giscusConfig.categoryId}
        mapping={giscusConfig.mapping}
        term={slug}
        reactionsEnabled={giscusConfig.reactionsEnabled}
        emitMetadata={giscusConfig.emitMetadata}
        inputPosition={giscusConfig.inputPosition}
        theme={giscusTheme}
        lang={giscusLang}
        loading={giscusConfig.loading}
        strict={giscusConfig.strict}
      />
    </div>
  );
}
