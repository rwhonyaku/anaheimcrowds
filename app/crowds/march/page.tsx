import type { Metadata } from "next";
import Link from "next/link";
import { AdSlot } from "@/components/AdSlot";
import { MonthNavigation } from "@/components/MonthNavigation";
import { AlertTriangle, CalendarDays, Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "Disneyland Crowds in March 2026 | AnaheimCrowds",
  description: "How to survive the first wave of Spring Break at Disneyland in March.",
  alternates: { canonical: "/crowds/march" },
};

export default function MarchCrowdsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 space-y-12 text-slate-900">
      <section className="space-y-4">
        <h1 className="text-4xl md:text-6xl font-black tracking-tighter italic uppercase">
          Disneyland Crowds in <span className="text-blue-600">March 2026</span>
        </h1>
        <p className="text-xl text-slate-600 leading-relaxed font-medium">
          March marks the end of the "off-season." Once the first Spring Break districts release, the park baseline shifts to high demand.
        </p>
      </section>

      <div className="bg-white border border-slate-200 rounded-[2.5rem] p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-3 text-blue-600">
          <CalendarDays size={24} />
          <h2 className="text-2xl font-black uppercase italic">March Demand Drivers</h2>
        </div>
        <ul className="grid md:grid-cols-2 gap-6">
          <li className="space-y-1">
            <p className="font-bold text-slate-900 flex items-center gap-2">
              <Zap size={16} className="text-blue-500" /> Staggered Breaks
            </p>
            <p className="text-sm text-slate-500 leading-relaxed">
              Not all schools break at once. March is a "rolling surge" month as different states cycle through their holidays.
            </p>
          </li>
          <li className="space-y-1">
            <p className="font-bold text-slate-900 flex items-center gap-2">
              <AlertTriangle size={16} className="text-amber-500" /> Food & Wine Spike
            </p>
            <p className="text-sm text-slate-500 leading-relaxed">
              DCA’s Food & Wine Festival pulls in massive local crowds on Fridays and weekends.
            </p>
          </li>
        </ul>
      </div>

      <AdSlot id="ad-month-march-mid" label="Mid-month page ad" />

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-slate-50 p-8 rounded-[2rem] space-y-3">
          <h3 className="font-black uppercase italic text-slate-400 text-xs tracking-widest">When to go</h3>
          <p className="font-bold text-slate-900 leading-tight">The First Tuesday of March</p>
          <p className="text-sm text-slate-600 italic">Often the last "quiet" weekday before the mid-month Spring Break chaos officially takes hold.</p>
        </div>
        <div className="bg-slate-900 p-8 rounded-[2rem] space-y-3 text-white">
          <h3 className="font-black uppercase italic text-slate-500 text-xs tracking-widest text-blue-400">Where the Day Gets Away From You</h3>
          <p className="font-bold text-white leading-tight">Spring Break Peak</p>
          <p className="text-sm text-slate-400 italic">If you visit during the last week of March, Genie+ is non-negotiable for "E-Ticket" attractions.</p>
        </div>
      </div>

      <section className="space-y-6">
        <h2 className="text-2xl font-black uppercase italic">March Split: Early vs Late</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
            <h3 className="font-bold text-slate-900">Last clean exit</h3>
            <p className="mt-2 text-sm text-slate-600 leading-relaxed">
              <strong>Mar 3-12 weekdays</strong> are usually your final shoulder-season shot before spring-break overlap takes over.
            </p>
          </div>
          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6">
            <h3 className="font-bold text-slate-900">Where March turns</h3>
            <p className="mt-2 text-sm text-slate-700 leading-relaxed">
              Once you hit late March, hotels tighten, Lightning Lane demand rises earlier, and mid-week waits start looking like weekend waits.
            </p>
          </div>
        </div>
        <p className="text-slate-700 leading-relaxed">
          Use the{" "}
          <Link href="/crowd-calendar" className="font-bold underline hover:text-blue-600">crowd calendar</Link>{" "}
          to judge exact dates. If you are deciding whether to push the trip later, compare this month against the{" "}
          <Link href="/best-times" className="font-bold underline hover:text-blue-600">best times guide</Link>.
        </p>
      </section>

      <section className="pt-8 border-t border-slate-100 space-y-6">
        <p className="text-xs font-black text-slate-400 uppercase tracking-[0.2em] mb-6">Deep Dives</p>
        <div className="flex flex-wrap gap-4">
          <Link href="/crowd-calendar" className="text-sm font-bold text-slate-900 hover:text-blue-600 underline">2026 Forecast</Link>
          <Link href="/best-times" className="text-sm font-bold text-slate-900 hover:text-blue-600 underline">Best Times</Link>
          <Link href="/school-breaks-calendar" className="text-sm font-bold text-slate-900 hover:text-blue-600 underline">Heatmap</Link>
          <Link href="/crowds/february" className="text-sm font-bold text-slate-900 hover:text-blue-600 underline">February Crowds</Link>
          <Link href="/crowds/april" className="text-sm font-bold text-slate-900 hover:text-blue-600 underline">April Crowds</Link>
          <Link href="/articles/lightning-lane-reality" className="text-sm font-bold text-slate-900 hover:text-blue-600 underline">Lightning Lane Reality</Link>
          <Link href="/articles/disneyland-rope-drop-strategy-2026" className="text-sm font-bold text-slate-900 hover:text-blue-600 underline">Rope Drop Strategy</Link>
        </div>
        <MonthNavigation currentMonth="march" />
      </section>
    </div>
  );
}
