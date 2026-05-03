import type { Metadata } from "next";
import Link from "next/link";
import { AdSlot } from "@/components/AdSlot";
import { AlertTriangle, CalendarDays, Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "Disneyland Crowds in August 2026 | AnaheimCrowds",
  description: "When to catch the late-summer lull at Disneyland in August.",
  alternates: { canonical: "/crowds/august" },
};

export default function AugustCrowdsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 space-y-12 text-slate-900">
      <section className="space-y-4">
        <h1 className="text-4xl md:text-6xl font-black tracking-tighter italic uppercase">
          Disneyland Crowds in <span className="text-blue-600">August 2026</span>
        </h1>
        <p className="text-xl text-slate-600 leading-relaxed font-medium">
          August is a month of two halves. Once schools head back to class, the park’s energy shifts from peak vacation to a local lull.
        </p>
      </section>

      <div className="bg-white border border-slate-200 rounded-[2.5rem] p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-3 text-blue-600">
          <CalendarDays size={24} />
          <h2 className="text-2xl font-black uppercase italic">August Demand Drivers</h2>
        </div>
        <ul className="grid md:grid-cols-2 gap-6">
          <li className="space-y-1">
            <p className="font-bold text-slate-900 flex items-center gap-2">
              <Zap size={16} className="text-blue-500" /> The School Reset
            </p>
            <p className="text-sm text-slate-500 leading-relaxed">
              By mid-August, most local districts are back in session. Mid-week wait times drop by nearly 50%.
            </p>
          </li>
          <li className="space-y-1">
            <p className="font-bold text-slate-900 flex items-center gap-2">
              <AlertTriangle size={16} className="text-amber-500" /> Peak Humidity
            </p>
            <p className="text-sm text-slate-500 leading-relaxed">
              August is often the hottest month in Anaheim. Expect crowds to cluster in shops and AC-heavy attractions.
            </p>
          </li>
        </ul>
      </div>

      <AdSlot id="ad-month-august-mid" label="Mid-month page ad" />

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-slate-50 p-8 rounded-[2rem] space-y-3">
          <h3 className="font-black uppercase italic text-slate-400 text-xs tracking-widest">When to go</h3>
          <p className="font-bold text-slate-900 leading-tight">The Final Week of August</p>
          <p className="text-sm text-slate-600 italic">This is the best "Value window" of the year. Low crowds and full operating hours.</p>
        </div>
        <div className="bg-slate-900 p-8 rounded-[2rem] space-y-3 text-white">
          <h3 className="font-black uppercase italic text-slate-500 text-xs tracking-widest text-blue-400">Where the Day Gets Away From You</h3>
          <p className="font-bold text-white leading-tight">The 2 PM Meltdown</p>
          <p className="text-sm text-slate-400 italic">High temps and long lines make the early afternoon brutal. Head back to the hotel for a swim.</p>
        </div>
      </div>

      <section className="space-y-6">
        <h2 className="text-2xl font-black uppercase italic">Why Late August Matters</h2>
        <p className="text-slate-700 leading-relaxed">
          Once more districts return to school, late August can soften faster than people expect. It is still summer, but weekday pressure usually drops enough to make rope drop gains stick longer.
        </p>
        <p className="text-slate-700 leading-relaxed">
          Best August target: <strong>Aug 17-27 weekdays</strong>. Use the{" "}
          <Link href="/crowd-calendar" className="font-bold underline hover:text-blue-600">crowd calendar</Link>{" "}
          to avoid the dates where lingering summer travel collides with the start of Halloween demand.
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
