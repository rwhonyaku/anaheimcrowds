import type { Metadata } from "next";
import Link from "next/link";
import { AdSlot } from "@/components/AdSlot";
import { MonthNavigation } from "@/components/MonthNavigation";
import { AlertTriangle, CalendarDays, Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "Disneyland Crowds in January 2026 | AnaheimCrowds",
  description: "Navigating the post-holiday lull and refurbishment season at Disneyland in January.",
  alternates: { canonical: "/crowds/january" },
};

export default function JanuaryCrowdsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 space-y-12 text-slate-900">
      <section className="space-y-4">
        <h1 className="text-4xl md:text-6xl font-black tracking-tighter italic uppercase">
          Disneyland Crowds in <span className="text-blue-600">January 2026</span>
        </h1>
        <p className="text-xl text-slate-600 leading-relaxed font-medium">
          January is the ultimate "reset" month. Once the first week of the new year clears out, the park enters its quietest window.
        </p>
      </section>

      <div className="bg-white border border-slate-200 rounded-[2.5rem] p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-3 text-blue-600">
          <CalendarDays size={24} />
          <h2 className="text-2xl font-black uppercase italic">January Demand Drivers</h2>
        </div>
        <ul className="grid md:grid-cols-2 gap-6">
          <li className="space-y-1">
            <p className="font-bold text-slate-900 flex items-center gap-2">
              <Zap size={16} className="text-blue-500" /> Holiday Hangover
            </p>
            <p className="text-sm text-slate-500 leading-relaxed">
              Travel volume crashes after the first weekend. Local families are "parked out," leading to significant mid-week lulls.
            </p>
          </li>
          <li className="space-y-1">
            <p className="font-bold text-slate-900 flex items-center gap-2">
              <AlertTriangle size={16} className="text-amber-500" /> Maintenance Windows
            </p>
            <p className="text-sm text-slate-500 leading-relaxed">
              Because demand is low, Disney schedules major ride refurbishments. Check the schedule for "E-Ticket" closures before booking.
            </p>
          </li>
        </ul>
      </div>

      <AdSlot id="ad-month-january-mid" label="Mid-month page ad" />

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-slate-50 p-8 rounded-[2rem] space-y-3">
          <h3 className="font-black uppercase italic text-slate-400 text-xs tracking-widest">When to go</h3>
          <p className="font-bold text-slate-900 leading-tight">Last Two Weeks of January</p>
          <p className="text-sm text-slate-600 italic">Historically the lightest crowd density of the entire year, provided you avoid holiday weekends.</p>
        </div>
        <div className="bg-slate-900 p-8 rounded-[2rem] space-y-3 text-white">
          <h3 className="font-black uppercase italic text-slate-500 text-xs tracking-widest text-blue-400">Where the Day Gets Away From You</h3>
          <p className="font-bold text-white leading-tight">Martin Luther King Jr. Day</p>
          <p className="text-sm text-slate-400 italic">This 3-day weekend acts as a magnet for locals, turning a quiet month into a temporary "Level 9" event.</p>
        </div>
      </div>

      <section className="space-y-6">
        <h2 className="text-2xl font-black uppercase italic">January 2026 Booking Notes</h2>
        <p className="text-slate-700 leading-relaxed">
          Late January is usually the cleanest low-crowd stretch of the year, but it is not automatic. Use the{" "}
          <Link href="/crowd-calendar" className="font-bold underline hover:text-blue-600">2026 crowd calendar</Link>{" "}
          to isolate the best Tue-Thu dates, then compare them with the{" "}
          <Link href="/best-times" className="font-bold underline hover:text-blue-600">best times to visit Disneyland</Link>{" "}
          guide before you commit.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
            <h3 className="font-bold text-slate-900">Best January target</h3>
            <p className="mt-2 text-sm text-slate-600 leading-relaxed">
              <strong>Jan 12-29 weekdays.</strong> This is the cleanest post-holiday window if your priority is shorter waits over full ride availability.
            </p>
          </div>
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
            <h3 className="font-bold text-slate-900">The tradeoff</h3>
            <p className="mt-2 text-sm text-slate-600 leading-relaxed">
              January can look light in the parks while hotels tighten around Anaheim conventions, and refurbishments matter more here than in other months.
            </p>
          </div>
        </div>
        <p className="text-slate-700 leading-relaxed">
          If January is your target, compare it with{" "}
          <Link href="/crowds/february" className="font-bold underline hover:text-blue-600">
            February
          </Link>{" "}
          and the{" "}
          <Link href="/best-times" className="font-bold underline hover:text-blue-600">
            best-times guide
          </Link>{" "}
          before you lock the trip. January usually wins on crowd levels, but February can be easier if refurbishments are the bigger risk for your family.
        </p>
      </section>

      <section className="pt-8 border-t border-slate-100 space-y-6">
        <p className="text-xs font-black text-slate-400 uppercase tracking-[0.2em] mb-6">Deep Dives</p>
        <div className="flex flex-wrap gap-4">
          <Link href="/crowd-calendar" className="text-sm font-bold text-slate-900 hover:text-blue-600 underline">2026 Forecast</Link>
          <Link href="/best-times" className="text-sm font-bold text-slate-900 hover:text-blue-600 underline">Best Times</Link>
          <Link href="/school-breaks-calendar" className="text-sm font-bold text-slate-900 hover:text-blue-600 underline">Heatmap</Link>
          <Link href="/crowds/february" className="text-sm font-bold text-slate-900 hover:text-blue-600 underline">February Crowds</Link>
          <Link href="/articles/least-crowded-days-disneyland" className="text-sm font-bold text-slate-900 hover:text-blue-600 underline">Least Crowded Days</Link>
          <Link href="/articles/value-strategy" className="text-sm font-bold text-slate-900 hover:text-blue-600 underline">Value Date Strategy</Link>
        </div>
        <MonthNavigation currentMonth="january" />
      </section>
    </div>
  );
}
