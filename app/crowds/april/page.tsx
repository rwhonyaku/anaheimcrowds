import type { Metadata } from "next";
import Link from "next/link";
import { AdSlot } from "@/components/AdSlot";
import { MonthNavigation } from "@/components/MonthNavigation";
import { AlertTriangle, CalendarDays, Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "Disneyland Crowds in April 2026 | AnaheimCrowds",
  description: "What to actually expect at Disneyland in April, from Spring Break overlaps to the post-Easter lull.",
  alternates: { canonical: "/crowds/april" },
};

export default function AprilCrowdsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 space-y-12 text-slate-900">
      <section className="space-y-4">
        <h1 className="text-4xl md:text-6xl font-black tracking-tighter italic uppercase">
          Disneyland Crowds in <span className="text-blue-600">April 2026</span>
        </h1>
        <p className="text-xl text-slate-600 leading-relaxed font-medium">
          April is a month of two halves. You’re either dealing with the peak Spring Break "squeeze" or enjoying the quiet transition into May.
        </p>
      </section>

      <div className="bg-white border border-slate-200 rounded-[2.5rem] p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-3 text-blue-600">
          <CalendarDays size={24} />
          <h2 className="text-2xl font-black uppercase italic">April Demand Drivers</h2>
        </div>
        <ul className="grid md:grid-cols-2 gap-6">
          <li className="space-y-1">
            <p className="font-bold text-slate-900 flex items-center gap-2">
              <Zap size={16} className="text-blue-500" /> The Easter Wave
            </p>
            <p className="text-sm text-slate-500 leading-relaxed">
              The weeks surrounding Easter are historically max capacity. Expect Level 9 demand for the entire holiday week.
            </p>
          </li>
          <li className="space-y-1">
            <p className="font-bold text-slate-900 flex items-center gap-2">
              <AlertTriangle size={16} className="text-amber-500" /> Spring Break Tails
            </p>
            <p className="text-sm text-slate-500 leading-relaxed">
              Staggered breaks in neighboring states like Utah and Arizona often bleed into the first half of April.
            </p>
          </li>
        </ul>
      </div>

      <AdSlot id="ad-month-april-mid" label="Mid-month page ad" />

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-slate-50 p-8 rounded-[2rem] space-y-3">
          <h3 className="font-black uppercase italic text-slate-400 text-xs tracking-widest">When to go</h3>
          <p className="font-bold text-slate-900 leading-tight">Late April Mid-Week</p>
          <p className="text-sm text-slate-600 italic">Once schools return to class after April 15th, Tuesday and Wednesday become the month's sweet spot.</p>
        </div>
        <div className="bg-slate-900 p-8 rounded-[2rem] space-y-3 text-white">
          <h3 className="font-black uppercase italic text-slate-500 text-xs tracking-widest text-blue-400">Where the Day Gets Away From You</h3>
          <p className="font-bold text-white leading-tight">The "Holiday" Saturday</p>
          <p className="text-sm text-slate-400 italic">April weekends are dominated by out-of-state travelers staying for long holiday blocks.</p>
        </div>
      </div>

      <section className="space-y-6">
        <h2 className="text-2xl font-black uppercase italic">Why April Burns Flexible Planners</h2>
        <p className="text-slate-700 leading-relaxed">
          April is not one crowd level. Early April can still feel like full spring break, while the back half of the month can relax fast enough to feel much closer to May.
        </p>
        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
          <p className="font-bold text-slate-900">Best April target: Apr 21-30 weekdays.</p>
          <p className="mt-2 text-sm text-slate-600 leading-relaxed">
            This is one of the better shoulder-season backup plans if you miss early May. Confirm exact dates on the{" "}
            <Link href="/crowd-calendar" className="font-bold underline hover:text-blue-600">crowd calendar</Link>{" "}
            and compare with the{" "}
            <Link href="/best-times" className="font-bold underline hover:text-blue-600">best-times guide</Link>.
          </p>
        </div>
      </section>

      <section className="pt-8 border-t border-slate-100 space-y-6">
        <p className="text-xs font-black text-slate-400 uppercase tracking-[0.2em] mb-6">Deep Dives</p>
        <div className="flex flex-wrap gap-4">
          <Link href="/crowd-calendar" className="text-sm font-bold text-slate-900 hover:text-blue-600 underline">2026 Forecast</Link>
          <Link href="/best-times" className="text-sm font-bold text-slate-900 hover:text-blue-600 underline">Best Times</Link>
          <Link href="/school-breaks-calendar" className="text-sm font-bold text-slate-900 hover:text-blue-600 underline">Heatmap</Link>
          <Link href="/crowds/march" className="text-sm font-bold text-slate-900 hover:text-blue-600 underline">March Crowds</Link>
          <Link href="/crowds/may" className="text-sm font-bold text-slate-900 hover:text-blue-600 underline">May Crowds</Link>
          <Link href="/articles/disneyland-midday-break-strategy" className="text-sm font-bold text-slate-900 hover:text-blue-600 underline">Midday Break Strategy</Link>
          <Link href="/articles/lightning-lane-reality" className="text-sm font-bold text-slate-900 hover:text-blue-600 underline">Lightning Lane Reality</Link>
        </div>
        <MonthNavigation currentMonth="april" />
      </section>
    </div>
  );
}
