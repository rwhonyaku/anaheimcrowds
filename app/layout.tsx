import type { Metadata } from "next";
import Script from "next/script";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-display",
});

const SITE = {
  name: "AnaheimCrowds",
  origin: "https://anaheimcrowds.com",
  description:
    "Expert Disneyland crowd analysis. We track Magic Key tiers, Anaheim convention schedules, and school calendars to help you navigate the park like a local.",
  contactEmail: "support@anaheimcrowds.com",
} as const;

export const metadata: Metadata = {
  metadataBase: new URL(SITE.origin),
  title: {
    default: `Disneyland crowds (typical patterns, Anaheim) | ${SITE.name}`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    url: SITE.origin,
    siteName: SITE.name,
    title: `Disneyland Crowd Patterns & Strategy | ${SITE.name}`,
    description: SITE.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `Disneyland Crowd Patterns & Strategy | ${SITE.name}`,
    description: SITE.description,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const adsenseClient = process.env.NEXT_PUBLIC_ADSENSE_CLIENT;

  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} scroll-smooth`}>
      <body className="min-h-screen flex flex-col font-sans antialiased bg-stone-50 text-slate-900">
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-L0VDH1T2KZ"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-L0VDH1T2KZ');
          `}
        </Script>

        {adsenseClient ? (
          <Script
            async
            strategy="afterInteractive"
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${adsenseClient}`}
            crossOrigin="anonymous"
          />
        ) : null}

        <SiteHeader />

        <main className="flex-1 w-full">{children}</main>

        <SiteFooter contactEmail={SITE.contactEmail} />
      </body>
    </html>
  );
}
