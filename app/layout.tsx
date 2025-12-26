import type { Metadata } from "next";
import Script from "next/script";
import { Inter } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

const SITE = {
  name: "AnaheimCrowds",
  origin: "https://anaheimcrowds.com",
  description:
    "AnaheimCrowds is an independent, static reference site that summarizes typical crowd patterns around Disneyland Resort in Anaheim. No live data. Not affiliated with Disney.",
  contactEmail: "support@anaheimcrowds.com",
} as const;

export const metadata: Metadata = {
  metadataBase: new URL(SITE.origin),
  title: {
    default: `${SITE.name} — typical Disneyland crowd patterns (static reference)`,
    template: `%s — ${SITE.name}`,
  },
  description: SITE.description,
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    url: SITE.origin,
    siteName: SITE.name,
    title: `${SITE.name} — typical crowd patterns (static reference)`,
    description: SITE.description,
  },
  twitter: {
    card: "summary",
    title: `${SITE.name} — typical crowd patterns (static reference)`,
    description: SITE.description,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const adsenseClient = process.env.NEXT_PUBLIC_ADSENSE_CLIENT;

  return (
    <html lang="en" className={inter.variable}>
      <body>
        {adsenseClient ? (
          <Script
            async
            strategy="afterInteractive"
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${adsenseClient}`}
            crossOrigin="anonymous"
          />
        ) : null}

        <div className="shell">
          <SiteHeader />
          <main className="main">{children}</main>
          <SiteFooter contactEmail={SITE.contactEmail} />
        </div>
      </body>
    </html>
  );
}
