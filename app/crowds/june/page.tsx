import type { Metadata } from "next";
import Link from "next/link";
import { AdSlot } from "@/components/AdSlot";
import { MonthNavigation } from "@/components/MonthNavigation";
import { AlertTriangle, CalendarDays, Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "Disneyland Crowds in June 2026 | AnaheimCrowds",
  description: "Navigating the start of summer and Grad Nite surges at Disneyland in June.",
  alternates: { canonical: "/crowds/june" },
};

export default function JuneCrowdsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 space-y-12 text-slate-900">
      <section className="space-y-4">
        <h1 className="text-4xl md:text-6xl font-black tracking-tighter italic uppercase">
          Disneyland Crowds in <span className="text-blue-600">June 2026</span>
        </h1>
        <p className="text-xl text-slate-600 leading-relaxed font-medium">
          June is the official kickoff of the Summer Marathon. It's about heat management and navigating graduation spikes.
        </p>
      </section>

      <div className="bg-white border border-slate-200 rounded-[2.5rem] p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-3 text-blue-600">
          <CalendarDays size={24} />
          <h2 className="text-2xl font-black uppercase italic">June Demand Drivers</h2>
        </div>
        <ul className="grid md:grid-cols-2 gap-6">
          <li className="space-y-1">
            <p className="font-bold text-slate-900 flex items-center gap-2">
              <Zap size={16} className="text-blue-500" /> Grad Nite Shifts
            </p>
            <p className="text-sm text-slate-500 leading-relaxed">
              DCA often closes early for high school graduation parties, pushing thousands of guests into Disneyland Park after dark.
            </p>
          </li>
          <li className="space-y-1">
            <p className="font-bold text-slate-900 flex items-center gap-2">
              <AlertTriangle size={16} className="text-amber-500" /> Regional Release
            </p>
            <p className="text-sm text-slate-500 leading-relaxed">
              As local schools let out for the summer, the park baseline density increases by 30-40%.
            </p>
          </li>
        </ul>
      </div>

      <AdSlot id="ad-month-june-mid" label="Mid-month page ad" />

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-slate-50 p-8 rounded-[2rem] space-y-3">
          <h3 className="font-black uppercase italic text-slate-400 text-xs tracking-widest">When to go</h3>
          <p className="font-bold text-slate-900 leading-tight">Mid-Week Sundays</p>
          <p className="text-sm text-slate-600 italic">Paradoxically, Sundays can feel more open in June because many local passholders are blocked out.</p>
        </div>
        <div className="bg-slate-900 p-8 rounded-[2rem] space-y-3 text-white">
          <h3 className="font-black uppercase italic text-slate-500 text-xs tracking-widest text-blue-400">Where the Day Gets Away From You</h3>
          <p className="font-bold text-white leading-tight">The 3 PM Heat Peak</p>
          <p className="text-sm text-slate-400 italic">June heat drives everyone to the water rides. Expect Splash and Pirates to hit peak waits by noon.</p>
        </div>
      </div>

      <section className="space-y-6">
        <h2 className="text-2xl font-black uppercase italic">June Is About Timing, Not Hope</h2>
        <p className="text-slate-700 leading-relaxed">
          The first few weekdays of June are your last realistic shot at a calmer summer-style trip. Once more districts finish school, the entire baseline rises and the easy mornings disappear.
        </p>
        <p className="text-slate-700 leading-relaxed">
          Best June target: <strong>Jun 1-4</strong>. After that, use the{" "}
          <Link href="/crowd-calendar" className="font-bold underline hover:text-blue-600">crowd calendar</Link>{" "}
          for exact-date triage and the{" "}
          <Link href="/best-times" className="font-bold underline hover:text-blue-600">best-times guide</Link>{" "}
          if you are considering a different month entirely.
        </p>
      </section>

      <section className="pt-8 border-t border-slate-100 space-y-6">
        <p className="text-xs font-black text-slate-400 uppercase tracking-[0.2em] mb-6">Deep Dives</p>
        <div className="flex flex-wrap gap-4">
          <Link href="/crowd-calendar" className="text-sm font-bold text-slate-900 hover:text-blue-600 underline">2026 Forecast</Link>
          <Link href="/best-times" className="text-sm font-bold text-slate-900 hover:text-blue-600 underline">Best Times</Link>
          <Link href="/school-breaks-calendar" className="text-sm font-bold text-slate-900 hover:text-blue-600 underline">Heatmap</Link>
          <Link href="/crowds/may" className="text-sm font-bold text-slate-900 hover:text-blue-600 underline">May Crowds</Link>
          <Link href="/crowds/july" className="text-sm font-bold text-slate-900 hover:text-blue-600 underline">July Crowds</Link>
          <Link href="/articles/disneyland-rope-drop-strategy-2026" className="text-sm font-bold text-slate-900 hover:text-blue-600 underline">Rope Drop Strategy</Link>
          <Link href="/articles/harbor-advantage" className="text-sm font-bold text-slate-900 hover:text-blue-600 underline">Harbor Advantage</Link>
        </div>
        <MonthNavigation currentMonth="june" />
      </section>
    </div>
  );
}
