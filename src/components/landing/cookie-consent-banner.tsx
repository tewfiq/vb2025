"use client";

import * as React from "react";
import { Cookie } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useTranslation } from "@/hooks/use-translation";
import { cn } from "@/lib/utils";

export function CookieConsentBanner() {
  const t = useTranslation();
  const [isOpen, setIsOpen] = React.useState(false);
  const [hide, setHide] = React.useState(false);
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const handleAccept = React.useCallback(() => {
    setIsOpen(false);
    document.cookie =
      "cookieConsent=true; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/";

    // Trigger analytics if available
    if (window.gtag) {
      window.gtag("consent", "update", {
        analytics_storage: "granted",
        ad_storage: "granted",
      });
    }

    setTimeout(() => {
      setHide(true);
    }, 700);
  }, []);

  const handleDecline = React.useCallback(() => {
    setIsOpen(false);
    document.cookie =
      "cookieConsent=false; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/";

    setTimeout(() => {
      setHide(true);
    }, 700);
  }, []);

  React.useEffect(() => {
    if (!mounted) return;

    try {
      setIsOpen(true);
      if (document.cookie.includes("cookieConsent=true")) {
        setIsOpen(false);
        setTimeout(() => {
          setHide(true);
        }, 700);
      }
    } catch (error) {
      console.warn("Cookie consent error:", error);
    }
  }, [mounted]);

  if (!mounted || hide) return null;

  const containerClasses = cn(
    "fixed z-50 transition-all duration-700",
    !isOpen ? "translate-y-full opacity-0" : "translate-y-0 opacity-100",
    "bottom-0 left-0 right-0 sm:left-4 sm:bottom-4 w-full sm:max-w-md",
  );

  return (
    <div className={containerClasses}>
      <Card className="m-3 shadow-lg">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 h-0 px-4">
          <CardTitle className="text-base">{t.cookieConsent.title}</CardTitle>
          <Cookie className="h-4 w-4" />
        </CardHeader>
        <CardContent className="pt-0 pb-2 px-4">
          <CardDescription className="text-sm">
            {t.cookieConsent.description}
          </CardDescription>
        </CardContent>
        <CardFooter className="flex gap-2 h-0 py-2 px-4">
          <Button
            onClick={handleDecline}
            variant="secondary"
            size="sm"
            className="flex-1 rounded-full"
          >
            {t.cookieConsent.declineButton}
          </Button>
          <Button
            onClick={handleAccept}
            size="sm"
            className="flex-1 rounded-full"
          >
            {t.cookieConsent.acceptButton}
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
