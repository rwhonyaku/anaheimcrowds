import type { Metadata } from "next";
import Link from "next/link";
import { AdSlot } from "@/components/AdSlot";
import { AlertTriangle, CalendarDays, Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "Disneyland Crowds in November 2026 | AnaheimCrowds",
  description: "Balancing the post-Halloween lull with the Thanksgiving rush at Disneyland.",
  alternates: { canonical: "/crowds/november" },
};

export default function NovemberCrowdsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 space-y-12 text-slate-900">
      <section className="space-y-4">
        <h1 className="text-4xl md:text-6xl font-black tracking-tighter italic uppercase">
          Disneyland Crowds in <span className="text-blue-600">November 2026</span>
        </h1>
        <p className="text-xl text-slate-600 leading-relaxed font-medium">
          November is a transition month. It's the "bridge" between the spooky fall and the winter holidays.
        </p>
      </section>

      <div className="bg-white border border-slate-200 rounded-[2.5rem] p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-3 text-blue-600">
          <CalendarDays size={24} />
          <h2 className="text-2xl font-black uppercase italic">November Demand Drivers</h2>
        </div>
        <ul className="grid md:grid-cols-2 gap-6">
          <li className="space-y-1">
            <p className="font-bold text-slate-900 flex items-center gap-2">
              <Zap size={16} className="text-blue-500" /> Holiday Prep
            </p>
            <p className="text-sm text-slate-500 leading-relaxed">
              Mid-month, the park flips to Christmas decor. This transition draws massive fan interest but light tourist volume.
            </p>
          </li>
          <li className="space-y-1">
            <p className="font-bold text-slate-900 flex items-center gap-2">
              <AlertTriangle size={16} className="text-amber-500" /> Thanksgiving Peak
            </p>
            <p className="text-sm text-slate-500 leading-relaxed">
              The entire week of Thanksgiving is a capacity risk. Expect long waits across the board.
            </p>
          </li>
        </ul>
      </div>

      <AdSlot id="ad-month-november-mid" label="Mid-month page ad" />

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-slate-50 p-8 rounded-[2rem] space-y-3">
          <h3 className="font-black uppercase italic text-slate-400 text-xs tracking-widest">When to go</h3>
          <p className="font-bold text-slate-900 leading-tight">The First Week of November</p>
          <p className="text-sm text-slate-600 italic">The "Post-Halloween Lull" is one of the year's best windows for low crowd density.</p>
        </div>
        <div className="bg-slate-900 p-8 rounded-[2rem] space-y-3 text-white">
          <h3 className="font-black uppercase italic text-slate-500 text-xs tracking-widest text-blue-400">Where the Day Gets Away From You</h3>
          <p className="font-bold text-white leading-tight">D3 Weekend / Events</p>
          <p className="text-sm text-slate-400 italic">Occasional Disney-run races or events in November can turn a quiet weekend into a nightmare.</p>
        </div>
      </div>

      <section className="space-y-6">
        <h2 className="text-2xl font-black uppercase italic">November's Real Sweet Spot</h2>
        <p className="text-slate-700 leading-relaxed">
          Early November is one of the better fallback windows after October if you still want holiday atmosphere without Thanksgiving-level demand. Mid-week dates are the clear winners.
        </p>
        <p className="text-slate-700 leading-relaxed">
          Best November target: <strong>Nov 3-12 weekdays</strong>. Thanksgiving week behaves like a holiday season launch, so use the{" "}
          <Link href="/crowd-calendar" className="font-bold underline hover:text-blue-600">crowd calendar</Link>{" "}
          before assuming a cheap-looking date is still worth it.
        </p>
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
