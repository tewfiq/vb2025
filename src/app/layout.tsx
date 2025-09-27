import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { ClientProviders } from "@/components/client-providers";
import GoogleAnalytics from "@/components/analytics";
import { QrShareButton } from "@/components/ui/qr-share-button";

export const metadata: Metadata = {
  title:
    "Vibe Coding Paris — Débloque ton super pouvoir digital en 2h. De l'idée au site en ligne, avec l'IA comme copilote.",
  description:
    "Un atelier intensif et accessible. Tu explores, tu structures, tu repars avec un projet en ligne. Une compétence exploitable, en seulement 2h.",
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
