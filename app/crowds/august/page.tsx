import type { Metadata } from "next";
import Link from "next/link";
import { AdSlot } from "@/components/AdSlot";
import { MonthNavigation } from "@/components/MonthNavigation";
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
          August is a month of two halves. Early August still feels like summer vacation, while the second half improves as more Southern California schools reopen.
        </p>
      </section>

      <div className="bg-white border border-slate-200 rounded-[2.5rem] p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-3 text-blue-600">
          <CalendarDays size={24} />
          <h2 className="text-2xl font-black uppercase italic">What affects August crowds</h2>
        </div>
        <ul className="grid md:grid-cols-2 gap-6">
          <li className="space-y-1">
            <p className="font-bold text-slate-900 flex items-center gap-2">
              <Zap size={16} className="text-blue-500" /> School Start Dates
            </p>
            <p className="text-sm text-slate-500 leading-relaxed">
              San Diego and many Inland Empire schools are back around Aug 3-10, LAUSD starts Aug 12, and Long Beach starts Aug 25.
            </p>
          </li>
          <li className="space-y-1">
            <p className="font-bold text-slate-900 flex items-center gap-2">
              <AlertTriangle size={16} className="text-amber-500" /> Peak Humidity
            </p>
            <p className="text-sm text-slate-500 leading-relaxed">
              August is often the hottest month in Anaheim. Expect crowds to bunch up in shops and AC-heavy attractions.
            </p>
          </li>
        </ul>
      </div>

      <AdSlot id="ad-month-august-mid" label="Mid-month page ad" />

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-slate-50 p-8 rounded-[2rem] space-y-3">
          <h3 className="font-black uppercase italic text-slate-400 text-xs tracking-widest">When to go</h3>
          <p className="font-bold text-slate-900 leading-tight">Aug 17-27 weekdays</p>
          <p className="text-sm text-slate-600 italic">A useful late-summer window, especially after more local schools are back in session.</p>
        </div>
        <div className="bg-slate-900 p-8 rounded-[2rem] space-y-3 text-white">
          <h3 className="font-black uppercase italic text-slate-500 text-xs tracking-widest text-blue-400">Watch this part of the day</h3>
          <p className="font-bold text-white leading-tight">Early Afternoon Heat</p>
          <p className="text-sm text-slate-400 italic">Hot afternoons can make waits feel longer. A hotel swim or indoor meal break can save the evening.</p>
        </div>
      </div>

      <section className="space-y-6">
        <h2 className="text-2xl font-black uppercase italic">Why Late August Matters</h2>
        <p className="text-slate-700 leading-relaxed">
          Once more districts return to school, late August can improve faster than people expect. It is still summer, but weekdays usually stay easier than the first half of the month.
        </p>
        <p className="text-slate-700 leading-relaxed">
          Best August target: <strong>Aug 17-27 weekdays</strong>, with Aug 25 onward helped by Long Beach returning to school. Use the{" "}
          <Link href="/crowd-calendar" className="font-bold underline hover:text-blue-600">crowd calendar</Link>{" "}
          to avoid the dates where lingering summer travel collides with the start of Halloween crowds.
        </p>
      </section>

      <section className="pt-8 border-t border-slate-100 space-y-6">
        <p className="text-xs font-black text-slate-400 uppercase tracking-[0.2em] mb-6">More planning help</p>
        <div className="flex flex-wrap gap-4">
          <Link href="/crowd-calendar" className="text-sm font-bold text-slate-900 hover:text-blue-600 underline">2026 Forecast</Link>
          <Link href="/best-times" className="text-sm font-bold text-slate-900 hover:text-blue-600 underline">Best Times</Link>
          <Link href="/school-breaks-calendar" className="text-sm font-bold text-slate-900 hover:text-blue-600 underline">School Break Calendar</Link>
          <Link href="/crowds/july" className="text-sm font-bold text-slate-900 hover:text-blue-600 underline">July Crowds</Link>
          <Link href="/crowds/september" className="text-sm font-bold text-slate-900 hover:text-blue-600 underline">September Crowds</Link>
          <Link href="/articles/disneyland-midday-break-strategy" className="text-sm font-bold text-slate-900 hover:text-blue-600 underline">Midday Break Guide</Link>
          <Link href="/articles/harbor-advantage" className="text-sm font-bold text-slate-900 hover:text-blue-600 underline">Harbor Advantage</Link>
        </div>
        <MonthNavigation currentMonth="august" />
      </section>
    </div>
  );
}
