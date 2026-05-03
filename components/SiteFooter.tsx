"use client";

import Link from "next/link";
import { AdSlot } from "@/components/AdSlot";

export function SiteFooter({ contactEmail }: { contactEmail: string }) {
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December",
  ];

  const planningLinks = [
    { href: "/crowd-calendar", label: "2026 Crowd Calendar" },
    { href: "/best-times", label: "Best Times (2026)" },
    { href: "/school-breaks-calendar", label: "School Break Heatmap" },
    { href: "/hotels", label: "Hotels Walking Distance" },
  ];

  const powerArticles = [
    { href: "/articles/lightning-lane-reality", label: "Lightning Lane Reality (2026)" },
    { href: "/articles/harbor-advantage", label: "Harbor Blvd Advantage" },
    { href: "/articles/utah-trap", label: "The October Utah Trap" },
    { href: "/articles/value-strategy", label: "2026 Value Date Playbook" },
    { href: "/articles/magic-key-crowd", label: "Magic Key Evening Spike" },
  ];

  return (
    <footer className="border-t border-slate-200 bg-slate-50 mt-20">
      <div className="max-w-4xl mx-auto px-4 py-12 space-y-12">
        <AdSlot id="ad-footer" label="Footer Placement" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-8 border-t border-slate-200">
          {/* About */}
          <div className="space-y-4">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">
              About AnaheimCrowds
            </p>
            <p className="text-[13px] text-slate-500 leading-relaxed font-medium">
              Independent 2026 planning resource focused on school calendars,
              pricing tiers, and hotel proximity patterns.
            </p>
          </div>

          {/* Planning Tools */}
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

          {/* Intelligence */}
          <div className="space-y-4">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">
              Intelligence
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
                  Our Methodology
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

        {/* Monthly Grid */}
        <div className="pt-8 border-t border-slate-200 space-y-4">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-widest text-center">
            2026 Monthly Crowd Forecasts
          </p>
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-y-3 gap-x-4 text-center">
            {months.map((month) => (
              <Link
                key={month}
                href={`/crowds/${month.toLowerCase()}`}
                className="text-[12px] font-bold text-slate-900 hover:text-blue-600 transition-colors"
              >
                {month}
              </Link>
            ))}
          </div>
        </div>

        <div className="text-center pt-8 border-t border-slate-100">
          <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">
            © {new Date().getFullYear()} AnaheimCrowds · Not affiliated with The Walt Disney Co.
          </p>
        </div>
      </div>
    </footer>
  );
}