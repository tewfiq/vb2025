import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { ClientProviders } from "@/components/client-providers";
import GoogleAnalytics from "@/components/analytics";
import { QrShareButton } from "@/components/ui/qr-share-button";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Vibe Coding Paris — Débloque ton super pouvoir digital en 2h. De l'idée au site en ligne, avec l'IA comme copilote.",
    template: "%s - Vibe Coding Paris",
  },
  description: siteConfig.description,
  keywords: [
    "vibe coding",
    "coding paris",
    "atelier code",
    "apprentissage programmation",
    "développement web",
    "IA",
    "workshop",
    "bootcamp",
    "Next.js",
    "React",
  ],
  authors: [{ name: "Tewfiq Ziouche" }],
  creator: "Vibe Coding Paris",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: siteConfig.url,
    title: "Vibe Coding Paris",
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: "Vibe Coding Paris",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vibe Coding Paris",
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: siteConfig.social.twitter,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=PT+Sans:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body antialiased" suppressHydrationWarning={true}>
        {process.env.NEXT_PUBLIC_GA_TRACKING_ID && (
          <GoogleAnalytics
            GA_TRACKING_ID={process.env.NEXT_PUBLIC_GA_TRACKING_ID}
          />
        )}
        <ClientProviders>
          {children}
          <Toaster />
          <QrShareButton />
        </ClientProviders>
      </body>
    </html>
  );
}
