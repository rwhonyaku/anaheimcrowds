import type { Metadata } from "next";
import Link from "next/link";
import { AdSlot } from "@/components/AdSlot";
import { AlertTriangle, CalendarDays, Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "Disneyland Crowds in July 2026 | AnaheimCrowds",
  description: "Tactical advice for navigating the busiest and hottest month at Disneyland.",
  alternates: { canonical: "/crowds/july" },
};

export default function JulyCrowdsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 space-y-12 text-slate-900">
      <section className="space-y-4">
        <h1 className="text-4xl md:text-6xl font-black tracking-tighter italic uppercase">
          Disneyland Crowds in <span className="text-blue-600">July 2026</span>
        </h1>
        <p className="text-xl text-slate-600 leading-relaxed font-medium">
          July is about survival. It is the peak of the tourist season, where high out-of-state volume meets intense SoCal heat.
        </p>
      </section>

      <div className="bg-white border border-slate-200 rounded-[2.5rem] p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-3 text-blue-600">
          <CalendarDays size={24} />
          <h2 className="text-2xl font-black uppercase italic">July Demand Drivers</h2>
        </div>
        <ul className="grid md:grid-cols-2 gap-6">
          <li className="space-y-1">
            <p className="font-bold text-slate-900 flex items-center gap-2">
              <Zap size={16} className="text-blue-500" /> July 4th Peak
            </p>
            <p className="text-sm text-slate-500 leading-relaxed">
              A guaranteed capacity event. If you aren't in the park by 11 AM, you may not get in at all.
            </p>
          </li>
          <li className="space-y-1">
            <p className="font-bold text-slate-900 flex items-center gap-2">
              <AlertTriangle size={16} className="text-amber-500" /> Out-of-State Waves
            </p>
            <p className="text-sm text-slate-500 leading-relaxed">
              Travelers from across the country fill hotels. These guests stay all day, meaning wait times don't "dip" until after 10 PM.
            </p>
          </li>
        </ul>
      </div>

      <AdSlot id="ad-month-july-mid" label="Mid-month page ad" />

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-slate-50 p-8 rounded-[2rem] space-y-3">
          <h3 className="font-black uppercase italic text-slate-400 text-xs tracking-widest">When to go</h3>
          <p className="font-bold text-slate-900 leading-tight">Sunday Mornings</p>
          <p className="text-sm text-slate-600 italic">Rope-drop on Sundays is the only way to beat the heat and the crowds before the tourist wave arrives.</p>
        </div>
        <div className="bg-slate-900 p-8 rounded-[2rem] space-y-3 text-white">
          <h3 className="font-black uppercase italic text-slate-500 text-xs tracking-widest text-blue-400">Where the Day Gets Away From You</h3>
          <p className="font-bold text-white leading-tight">Mobile Order Gridlock</p>
          <p className="text-sm text-slate-400 italic">In July, "Tier 1" restaurants sell out of lunch slots by 10:30 AM. Order early or don't eat at noon.</p>
        </div>
      </div>

      <section className="space-y-6">
        <h2 className="text-2xl font-black uppercase italic">What a Good July Day Actually Means</h2>
        <p className="text-slate-700 leading-relaxed">
          July rarely gives you a true low-crowd experience. Your real goal is not finding an empty day. It is finding the least punishing weekday and treating rope drop as mandatory.
        </p>
        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
          <p className="font-bold text-slate-900">Best July target: Jul 7-9.</p>
          <p className="mt-2 text-sm text-slate-600 leading-relaxed">
            That does not mean light crowds. It means a slightly better chance to control the first half of your day after the July 4 holiday stack clears.
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
