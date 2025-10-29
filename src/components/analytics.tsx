"use client";

import Script from "next/script";
import { useEffect, useState } from "react";

const GoogleAnalytics = ({ GA_TRACKING_ID }: { GA_TRACKING_ID: string }) => {
  const [hasCookieConsent, setHasCookieConsent] = useState(false);

  useEffect(() => {
    // Check if user has already consented to cookies
    const cookieConsent = document.cookie.includes("cookieConsent=true");
    setHasCookieConsent(cookieConsent);

    // Listen for cookie consent updates
    const handleStorageChange = () => {
      const updatedConsent = document.cookie.includes("cookieConsent=true");
      setHasCookieConsent(updatedConsent);
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  // Only load GA if user has consented to cookies
  if (!hasCookieConsent) {
    return null;
  }

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('consent', 'default', {
            'analytics_storage': 'denied',
            'ad_storage': 'denied'
          });
          gtag('config', '${GA_TRACKING_ID}', {
            page_title: document.title,
            page_location: window.location.href,
          });
        `}
      </Script>
    </>
  );
};

export default GoogleAnalytics;
