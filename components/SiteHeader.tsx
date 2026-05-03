"use client";

import Link from "next/link";
import { ShieldCheck } from "lucide-react";

const LINKS = [
  { href: "/crowd-calendar", label: "Calendar" },
  { href: "/best-times", label: "Best Times" },
  { href: "/hotels", label: "Hotels" },
] as const;

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-stone-200 bg-stone-50/90 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center gap-4">
        <Link href="/" className="group flex items-center gap-2 no-underline">
          <div className="bg-sky-800 p-1.5 rounded-lg text-white group-hover:bg-slate-900 transition-colors">
            <ShieldCheck size={20} />
          </div>
          <div>
            <span className="font-display text-slate-900 text-2xl tracking-tight leading-none block">
              Anaheim<span className="text-amber-700">Crowds</span>
            </span>
            <small className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest leading-none mt-1">
              Disneyland Strategy, 2026
            </small>
          </div>
        </Link>

        <nav className="flex items-center gap-2 md:gap-4 flex-wrap justify-center" aria-label="Primary">
          {LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[11px] font-black uppercase tracking-widest text-slate-600 hover:text-sky-800 px-3 py-1.5 transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/crowd-calendar"
            className="bg-amber-700 text-white px-4 py-2 rounded-full text-[11px] font-black uppercase tracking-widest hover:bg-slate-900 transition-colors"
          >
            View Forecast
          </Link>
        </nav>
      </div>
    </header>
  );
}
