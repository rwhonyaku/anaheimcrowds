import type { Metadata } from "next";
import Link from "next/link";
import { AdSlot } from "@/components/AdSlot";
import { MonthNavigation } from "@/components/MonthNavigation";
import { AlertTriangle, CalendarDays, Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "Disneyland Crowds in December 2026 | AnaheimCrowds",
  description: "How to plan around December crowds, holiday weeks, and the busiest dates at Disneyland.",
  alternates: { canonical: "/crowds/december" },
};

export default function DecemberCrowdsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 space-y-12 text-slate-900">
      <section className="space-y-4">
        <h1 className="text-4xl md:text-6xl font-black tracking-tighter italic uppercase">
          Disneyland Crowds in <span className="text-blue-600">December 2026</span>
        </h1>
        <p className="text-xl text-slate-600 leading-relaxed font-medium">
          December is one of Disneyland's busiest months. The holiday atmosphere is great, but the dates near Christmas and New Year's need a tighter plan.
        </p>
      </section>

      <div className="bg-white border border-slate-200 rounded-[2.5rem] p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-3 text-blue-600">
          <CalendarDays size={24} />
          <h2 className="text-2xl font-black uppercase italic">What affects December crowds</h2>
        </div>
        <ul className="grid md:grid-cols-2 gap-6">
          <li className="space-y-1">
            <p className="font-bold text-slate-900 flex items-center gap-2">
              <Zap size={16} className="text-blue-500" /> Maximum Capacity
            </p>
            <p className="text-sm text-slate-500 leading-relaxed">
              Between Christmas and New Year's, the park hits its physical limit. Reservation windows will vanish months in advance.
            </p>
          </li>
          <li className="space-y-1">
            <p className="font-bold text-slate-900 flex items-center gap-2">
              <AlertTriangle size={16} className="text-amber-500" /> Pass Blockouts
            </p>
            <p className="text-sm text-slate-500 leading-relaxed">
              Locals are mostly blocked out in late December, meaning the crowd is 100% tourists who stay in the park for 14 hours straight.
            </p>
          </li>
        </ul>
      </div>

      <AdSlot id="ad-month-december-mid" label="Mid-month page ad" />

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-slate-50 p-8 rounded-[2rem] space-y-3">
          <h3 className="font-black uppercase italic text-slate-400 text-xs tracking-widest">When to go</h3>
          <p className="font-bold text-slate-900 leading-tight">The First Week of December</p>
          <p className="text-sm text-slate-600 italic">This is the only window where you can enjoy the decorations without shoulder-to-shoulder walkways.</p>
        </div>
        <div className="bg-slate-900 p-8 rounded-[2rem] space-y-3 text-white">
          <h3 className="font-black uppercase italic text-slate-500 text-xs tracking-widest text-blue-400">Watch the exit</h3>
          <p className="font-bold text-white leading-tight">The Late Night Exit</p>
          <p className="text-sm text-slate-400 italic">Expect a 45-minute wait just to get onto a parking lot shuttle after the late-night fireworks.</p>
        </div>
      </div>

      <section className="space-y-6">
        <h2 className="text-2xl font-black uppercase italic">The Best December Bet</h2>
        <p className="text-slate-700 leading-relaxed">
          If you want the holiday overlays without the worst late-December crowds, early December weekdays are the best bet. The atmosphere is there, but the full tourist rush has not peaked yet.
        </p>
        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
          <p className="font-bold text-slate-900">Best December target: Dec 1-10 weekdays.</p>
          <p className="mt-2 text-sm text-slate-600 leading-relaxed">
            Late December is not just busy. Many guests stay in the park from open to close, which changes ride planning, food timing, and even the walk out at night.
          </p>
        </div>
        <p className="text-slate-700 leading-relaxed">
          December works best when you pair the{" "}
          <Link href="/crowd-calendar" className="font-bold underline hover:text-blue-600">
            calendar
          </Link>{" "}
          with a realistic rope drop and hotel plan. If you are debating a holiday trip, compare early December with{" "}
          <Link href="/crowds/november" className="font-bold underline hover:text-blue-600">
            November
          </Link>{" "}
          and the{" "}
          <Link href="/best-times" className="font-bold underline hover:text-blue-600">
            best-times guide
          </Link>
          .
        </p>
      </section>

      <section className="pt-8 border-t border-slate-100 space-y-6">
        <p className="text-xs font-black text-slate-400 uppercase tracking-[0.2em] mb-6">More planning help</p>
        <div className="flex flex-wrap gap-4">
          <Link href="/crowd-calendar" className="text-sm font-bold text-slate-900 hover:text-blue-600 underline">2026 Forecast</Link>
          <Link href="/best-times" className="text-sm font-bold text-slate-900 hover:text-blue-600 underline">Best Times</Link>
          <Link href="/school-breaks-calendar" className="text-sm font-bold text-slate-900 hover:text-blue-600 underline">School Break Calendar</Link>
          <Link href="/crowds/november" className="text-sm font-bold text-slate-900 hover:text-blue-600 underline">November Crowds</Link>
          <Link href="/articles/disneyland-midday-break-strategy" className="text-sm font-bold text-slate-900 hover:text-blue-600 underline">Midday Break Guide</Link>
          <Link href="/articles/harbor-advantage" className="text-sm font-bold text-slate-900 hover:text-blue-600 underline">Harbor Advantage</Link>
        </div>
        <MonthNavigation currentMonth="december" />
      </section>
    </div>
  );
}
