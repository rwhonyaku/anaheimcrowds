import type { Metadata } from "next";
import Link from "next/link";
import { AdSlot } from "@/components/AdSlot";
import { MonthNavigation } from "@/components/MonthNavigation";
import { AlertTriangle, CalendarDays, Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "Disneyland Crowds in February 2026 | AnaheimCrowds",
  description: "Navigating the Lunar New Year and President's Day weekend at Disneyland in February.",
  alternates: { canonical: "/crowds/february" },
};

export default function FebruaryCrowdsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 space-y-12 text-slate-900">
      <section className="space-y-4">
        <h1 className="text-4xl md:text-6xl font-black tracking-tighter italic uppercase">
          Disneyland Crowds in <span className="text-blue-600">February 2026</span>
        </h1>
        <p className="text-xl text-slate-600 leading-relaxed font-medium">
          February balances a relaxed "off-season" vibe with localized surges driven by DCA festivals and holiday weekends.
        </p>
      </section>

      <div className="bg-white border border-slate-200 rounded-[2.5rem] p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-3 text-blue-600">
          <CalendarDays size={24} />
          <h2 className="text-2xl font-black uppercase italic">February Demand Drivers</h2>
        </div>
        <ul className="grid md:grid-cols-2 gap-6">
          <li className="space-y-1">
            <p className="font-bold text-slate-900 flex items-center gap-2">
              <Zap size={16} className="text-blue-500" /> Lunar New Year
            </p>
            <p className="text-sm text-slate-500 leading-relaxed">
              DCA becomes a hub for foodies. While this spikes California Adventure, Disneyland Park often remains a refuge.
            </p>
          </li>
          <li className="space-y-1">
            <p className="font-bold text-slate-900 flex items-center gap-2">
              <AlertTriangle size={16} className="text-amber-500" /> President's Day
            </p>
            <p className="text-sm text-slate-500 leading-relaxed">
              A major crowd spike. This holiday weekend pulls in large numbers of local Magic Key holders.
            </p>
          </li>
        </ul>
      </div>

      <AdSlot id="ad-month-february-mid" label="Mid-month page ad" />

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-slate-50 p-8 rounded-[2rem] space-y-3">
          <h3 className="font-black uppercase italic text-slate-400 text-xs tracking-widest">When to go</h3>
          <p className="font-bold text-slate-900 leading-tight">First Two Weeks Mid-Week</p>
          <p className="text-sm text-slate-600 italic">The post-January lull continues into early Feb, making for excellent walk-on wait times.</p>
        </div>
        <div className="bg-slate-900 p-8 rounded-[2rem] space-y-3 text-white">
          <h3 className="font-black uppercase italic text-slate-500 text-xs tracking-widest text-blue-400">Where the Day Gets Away From You</h3>
          <p className="font-bold text-white leading-tight">Valentine's Day Crowds</p>
          <p className="text-sm text-slate-400 italic">Evening dining reservations vanish weeks in advance. If you aren't doing a "Date Night," avoid the parks after 5 PM.</p>
        </div>
      </div>

      <section className="space-y-6">
        <h2 className="text-2xl font-black uppercase italic">Where February Still Wins</h2>
        <p className="text-slate-700 leading-relaxed">
          Early February is one of the cleanest combinations on the calendar: school is mostly in session, pricing stays softer, and you still avoid the heavier March travel wave. Start with{" "}
          <Link href="/crowd-calendar" className="font-bold underline hover:text-blue-600">the day-by-day calendar</Link>{" "}
          and then check the{" "}
          <Link href="/best-times" className="font-bold underline hover:text-blue-600">best-times guide</Link>{" "}
          if you are comparing February with May or September.
        </p>
        <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6">
          <p className="font-bold text-slate-900">Best February target: Feb 3-12 weekdays.</p>
          <p className="mt-2 text-sm text-slate-700 leading-relaxed">
            Stay clear of Feb 13-16 and Valentine weekend evenings. February is only easy if you stay away from the holiday stack.
          </p>
        </div>
      </section>

      <section className="pt-8 border-t border-slate-100 space-y-6">
        <p className="text-xs font-black text-slate-400 uppercase tracking-[0.2em] mb-6">Deep Dives</p>
        <div className="flex flex-wrap gap-4">
          <Link href="/crowd-calendar" className="text-sm font-bold text-slate-900 hover:text-blue-600 underline">2026 Forecast</Link>
          <Link href="/best-times" className="text-sm font-bold text-slate-900 hover:text-blue-600 underline">Best Times</Link>
          <Link href="/school-breaks-calendar" className="text-sm font-bold text-slate-900 hover:text-blue-600 underline">Heatmap</Link>
          <Link href="/crowds/january" className="text-sm font-bold text-slate-900 hover:text-blue-600 underline">January Crowds</Link>
          <Link href="/crowds/march" className="text-sm font-bold text-slate-900 hover:text-blue-600 underline">March Crowds</Link>
          <Link href="/articles/least-crowded-days-disneyland" className="text-sm font-bold text-slate-900 hover:text-blue-600 underline">Least Crowded Days</Link>
          <Link href="/articles/best-day-of-week-disneyland" className="text-sm font-bold text-slate-900 hover:text-blue-600 underline">Best Weekdays</Link>
        </div>
        <MonthNavigation currentMonth="february" />
      </section>
    </div>
  );
}
