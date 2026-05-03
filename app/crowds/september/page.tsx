import type { Metadata } from "next";
import Link from "next/link";
import { AdSlot } from "@/components/AdSlot";
import { AlertTriangle, CalendarDays, Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "Disneyland Crowds in September 2026 | AnaheimCrowds",
  description: "How to balance the start of Halloween with low September crowds.",
  alternates: { canonical: "/crowds/september" },
};

export default function SeptemberCrowdsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 space-y-12 text-slate-900">
      <section className="space-y-4">
        <h1 className="text-4xl md:text-6xl font-black tracking-tighter italic uppercase">
          Disneyland Crowds in <span className="text-blue-600">September 2026</span>
        </h1>
        <p className="text-xl text-slate-600 leading-relaxed font-medium">
          September is the "Golden Month" for locals. The return to school creates beautiful mid-week lulls, even with Halloween decorations up.
        </p>
      </section>

      <div className="bg-white border border-slate-200 rounded-[2.5rem] p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-3 text-blue-600">
          <CalendarDays size={24} />
          <h2 className="text-2xl font-black uppercase italic">September Demand Drivers</h2>
        </div>
        <ul className="grid md:grid-cols-2 gap-6">
          <li className="space-y-1">
            <p className="font-bold text-slate-900 flex items-center gap-2">
              <Zap size={16} className="text-blue-500" /> Halloween Time
            </p>
            <p className="text-sm text-slate-500 leading-relaxed">
              As soon as the pumpkins appear, weekend demand spikes. This is a highly localized surge.
            </p>
          </li>
          <li className="space-y-1">
            <p className="font-bold text-slate-900 flex items-center gap-2">
              <AlertTriangle size={16} className="text-amber-500" /> Oogie Boogie Spillover
            </p>
            <p className="text-sm text-slate-500 leading-relaxed">
              On party nights at DCA, thousands of guests without party tickets flood into Disneyland Park, creating heavy evening congestion.
            </p>
          </li>
        </ul>
      </div>

      <AdSlot id="ad-month-september-mid" label="Mid-month page ad" />

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-slate-50 p-8 rounded-[2rem] space-y-3">
          <h3 className="font-black uppercase italic text-slate-400 text-xs tracking-widest">When to go</h3>
          <p className="font-bold text-slate-900 leading-tight">Tuesdays & Wednesdays</p>
          <p className="text-sm text-slate-600 italic">Hands down the best time to visit if you want to see Halloween decor without the October chaos.</p>
        </div>
        <div className="bg-slate-900 p-8 rounded-[2rem] space-y-3 text-white">
          <h3 className="font-black uppercase italic text-slate-500 text-xs tracking-widest text-blue-400">Where the Day Gets Away From You</h3>
          <p className="font-bold text-white leading-tight">The 6 PM Spillover</p>
          <p className="text-sm text-slate-400 italic">If there is a party at California Adventure, Disneyland Park will be gridlocked by dinner time.</p>
        </div>
      </div>

      <section className="space-y-6">
        <h2 className="text-2xl font-black uppercase italic">September Rewards Precision</h2>
        <p className="text-slate-700 leading-relaxed">
          September is one of the best school-is-back windows on the calendar. Mid-week dates can be legitimately efficient even with Halloween decor already drawing attention.
        </p>
        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
          <p className="font-bold text-slate-900">Best September target: Sep 14-24 weekdays.</p>
          <p className="mt-2 text-sm text-slate-600 leading-relaxed">
            Party nights, Labor Day spillover, and Friday evening locals can still break the pattern, so September rewards exact date picking more than broad month-level planning.
          </p>
        </div>
      </section>

      <section className="pt-8 border-t border-slate-100">
        <p className="text-xs font-black text-slate-400 uppercase tracking-[0.2em] mb-6">Deep Dives</p>
        <div className="flex flex-wrap gap-4">
          <Link href="/crowd-calendar" className="text-sm font-bold text-slate-900 hover:text-blue-600 underline">2026 Forecast</Link>
          <Link href="/best-times" className="text-sm font-bold text-slate-900 hover:text-blue-600 underline">Best Times</Link>
          <Link href="/school-breaks-calendar" className="text-sm font-bold text-slate-900 hover:text-blue-600 underline">Heatmap</Link>
        </div>
      </section>
    </div>
  );
}
