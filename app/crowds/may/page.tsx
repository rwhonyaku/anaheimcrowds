import type { Metadata } from "next";
import Link from "next/link";
import { AdSlot } from "@/components/AdSlot";
import { AlertTriangle, CalendarDays, Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "Disneyland Crowds in May 2026 | AnaheimCrowds",
  description: "Why May is the best time for a low-crowd trip to Disneyland in 2026.",
  alternates: { canonical: "/crowds/may" },
};

export default function MayCrowdsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 space-y-12 text-slate-900">
      <section className="space-y-4">
        <h1 className="text-4xl md:text-6xl font-black tracking-tighter italic uppercase">
          Disneyland Crowds in <span className="text-blue-600">May 2026</span>
        </h1>
        <p className="text-xl text-slate-600 leading-relaxed font-medium">
          May is arguably the best month of the year to visit. You're catching the "sweet spot" before the summer rush.
        </p>
      </section>

      <div className="bg-white border border-slate-200 rounded-[2.5rem] p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-3 text-blue-600">
          <CalendarDays size={24} />
          <h2 className="text-2xl font-black uppercase italic">May Demand Drivers</h2>
        </div>
        <ul className="grid md:grid-cols-2 gap-6">
          <li className="space-y-1">
            <p className="font-bold text-slate-900 flex items-center gap-2">
              <Zap size={16} className="text-blue-500" /> The Spring Lull
            </p>
            <p className="text-sm text-slate-500 leading-relaxed">
              With Spring Break over and schools still in session, the park's baseline capacity remains exceptionally manageable.
            </p>
          </li>
          <li className="space-y-1">
            <p className="font-bold text-slate-900 flex items-center gap-2">
              <AlertTriangle size={16} className="text-amber-500" /> Star Wars Month
            </p>
            <p className="text-sm text-slate-500 leading-relaxed">
              Special merch and events drive "Super-Fans" to Galaxy's Edge. Expect Frontierland to feel more crowded than usual.
            </p>
          </li>
        </ul>
      </div>

      <AdSlot id="ad-month-may-mid" label="Mid-month page ad" />

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-slate-50 p-8 rounded-[2rem] space-y-3">
          <h3 className="font-black uppercase italic text-slate-400 text-xs tracking-widest">When to go</h3>
          <p className="font-bold text-slate-900 leading-tight">The First Two Weeks of May</p>
          <p className="text-sm text-slate-600 italic">This is the definitive "Sweet Spot" for 2026. Minimal lines and perfect weather.</p>
        </div>
        <div className="bg-slate-900 p-8 rounded-[2rem] space-y-3 text-white">
          <h3 className="font-black uppercase italic text-slate-500 text-xs tracking-widest text-blue-400">Where the Day Gets Away From You</h3>
          <p className="font-bold text-white leading-tight">Memorial Day Weekend</p>
          <p className="text-sm text-slate-400 italic">The weekend that officially launches the summer season. Demand hits its first major peak here.</p>
        </div>
      </div>

      <section className="space-y-6">
        <h2 className="text-2xl font-black uppercase italic">Why Early May Is So Strong</h2>
        <p className="text-slate-700 leading-relaxed">
          Early May is one of the best blends of weather, school-in-session behavior, and lower weekday pressure. If you want a high-upside trip without January's refurbishment risk, this is the cleanest target.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-green-50 border border-green-200 rounded-2xl p-6">
            <h3 className="font-bold text-slate-900">Best May target</h3>
            <p className="mt-2 text-sm text-slate-700 leading-relaxed">May 4-14 weekdays.</p>
          </div>
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
            <h3 className="font-bold text-slate-900">Where it slips</h3>
            <p className="mt-2 text-sm text-slate-600 leading-relaxed">
              The back half of May gets less forgiving once Grad Nite logistics and Memorial Day demand start stacking.
            </p>
          </div>
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
