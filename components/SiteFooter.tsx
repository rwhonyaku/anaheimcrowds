"use client";

import Link from "next/link";
import { AdSlot } from "@/components/AdSlot";
import { getEarlier2026Months, getPlanningMonths } from "@/lib/planning-window";

export function SiteFooter({ contactEmail }: { contactEmail: string }) {
  const planningMonths = getPlanningMonths();
  const earlierMonths = getEarlier2026Months();

  const planningLinks = [
    { href: "/crowd-calendar", label: "2026-2027 Crowd Calendar" },
    { href: "/best-times", label: "Best Times" },
    { href: "/school-breaks-calendar", label: "School Break Calendar" },
    { href: "/forecast-updates", label: "Recent Updates" },
    { href: "/hotels", label: "Hotels Walking Distance" },
  ];

  const powerArticles = [
    { href: "/articles/lightning-lane-reality", label: "Lightning Lane Reality (2026)" },
    { href: "/articles/harbor-advantage", label: "Why Harbor Blvd Works" },
    { href: "/articles/utah-october-effect", label: "Utah October Effect" },
    { href: "/articles/value-strategy", label: "Lower-Price Dates" },
    { href: "/articles/magic-key-crowd", label: "Magic Key Evening Spike" },
  ];

  return (
    <footer className="border-t border-slate-200 bg-slate-50 mt-20">
      <div className="max-w-4xl mx-auto px-4 py-12 space-y-12">
        <AdSlot id="ad-footer" label="Footer Placement" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-8 border-t border-slate-200">
          <div className="space-y-4">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">
              About AnaheimCrowds
            </p>
            <p className="text-[13px] text-slate-500 leading-relaxed font-medium">
              Independent Disneyland planning resource focused on school calendars,
              ticket pricing, and hotel walking distance.
            </p>
          </div>

          <div className="space-y-4">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">
              Planning Tools
            </p>
            <nav className="flex flex-col gap-2">
              {planningLinks.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="text-sm font-bold text-slate-900 hover:text-blue-600 transition-colors"
                >
                  {l.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="space-y-4">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">
              Guides
            </p>
            <nav className="flex flex-col gap-2">
              {powerArticles.map((art) => (
                <Link
                  key={art.href}
                  href={art.href}
                  className="text-sm font-bold text-slate-900 hover:text-blue-600 transition-colors"
                >
                  {art.label}
                </Link>
              ))}
            </nav>

            <div className="pt-4">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                Legal
              </p>
              <div className="flex flex-col gap-2 mt-2">
                <Link
                  href="/about"
                  className="text-sm font-bold text-slate-900 hover:text-blue-600 underline decoration-blue-200 underline-offset-4 transition-colors"
                >
                  About AnaheimCrowds
                </Link>
                <Link
                  href="/privacy"
                  className="text-sm font-bold text-slate-900 hover:text-blue-600 underline decoration-blue-200 underline-offset-4 transition-colors"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="/methodology"
                  className="text-sm font-bold text-slate-900 hover:text-blue-600 underline decoration-blue-200 underline-offset-4 transition-colors"
                >
                  How Our Forecasts Work
                </Link>
                <Link
                  href="/contact"
                  className="text-sm font-bold text-slate-900 hover:text-blue-600 underline decoration-blue-200 underline-offset-4 transition-colors"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-200 space-y-4">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-widest text-center">
            Monthly Crowd Guides
          </p>
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-y-3 gap-x-4 text-center">
            {planningMonths.map((month) => (
              <Link
                key={`${month.year}-${month.slug}`}
                href={month.href}
                className="text-[12px] font-bold text-slate-900 hover:text-blue-600 transition-colors"
              >
                {month.name} {month.year}
              </Link>
            ))}
          </div>
          {earlierMonths.length > 0 && (
            <div className="pt-4 text-center">
              <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
                Earlier 2026
              </p>
              <div className="mt-2 flex flex-wrap justify-center gap-x-3 gap-y-2">
                {earlierMonths.map((month) => (
                  <Link
                    key={`${month.year}-${month.slug}`}
                    href={month.href}
                    className="text-[11px] font-bold text-slate-500 hover:text-blue-600"
                  >
                    {month.name}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="text-center pt-8 border-t border-slate-100">
          <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">
            © {new Date().getFullYear()} AnaheimCrowds · Not affiliated with The Walt Disney Co.
          </p>
          <p className="mt-2 text-[10px] text-slate-400">
            Contact: {contactEmail}
          </p>
        </div>
      </div>
    </footer>
  );
}
