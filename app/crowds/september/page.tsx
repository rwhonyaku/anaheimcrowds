import type { Metadata } from "next";
import Link from "next/link";
import { AdSlot } from "@/components/AdSlot";
import { MonthNavigation } from "@/components/MonthNavigation";
import { AlertTriangle, CalendarDays, MoveRight, Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "Disneyland September Crowd Calendar 2026 | Crowds, Best Dates",
  description:
    "Disneyland September crowd calendar 2026: crowds, best dates, Sep 14-24 weekdays, Halloween Time, Oogie Boogie spillover, and when to avoid weekends.",
  alternates: { canonical: "/crowds/september" },
};

export default function SeptemberCrowdsPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10 space-y-12 text-slate-900">
      <section className="relative overflow-hidden rounded-[3rem] border border-stone-200 bg-slate-950 p-6 md:p-10 shadow-sm">
        <div className="absolute inset-0 bg-[url('/images/scnic.jpg')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/66 to-slate-950/25" />
        <div className="absolute inset-x-0 top-0 h-full opacity-25 [background-image:linear-gradient(rgba(255,255,255,0.18)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.18)_1px,transparent_1px)] [background-size:28px_28px]" />

        <div className="relative grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
          <div className="space-y-5 text-white">
            <p className="inline-flex items-center gap-2 rounded-full border border-stone-200 bg-white/85 px-4 py-2 text-xs font-black uppercase tracking-widest text-sky-800 shadow-sm">
              <CalendarDays size={14} /> September crowd guide
            </p>
            <h1 className="max-w-xl font-display text-5xl md:text-6xl text-white leading-[0.95]">
              Disneyland in September 2026
            </h1>
            <p className="max-w-xl text-lg md:text-xl text-slate-100 leading-relaxed font-medium">
              September is one of the better Disneyland months if you can go mid-week after Labor Day.
              School is back in session, but Halloween decorations are already up.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/crowd-calendar"
                className="inline-flex items-center gap-2 rounded-2xl bg-amber-700 px-6 py-3 font-black uppercase tracking-tight text-white transition-all hover:bg-slate-900"
              >
                Check Daily Dates <MoveRight size={18} />
              </Link>
              <Link
                href="/best-times"
                className="rounded-2xl border border-stone-300 bg-white px-6 py-3 font-black uppercase tracking-tight text-slate-900 transition-all hover:border-amber-700 hover:text-amber-700"
              >
                Compare Best Months
              </Link>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
            <div className="rounded-2xl border border-stone-200 bg-white/90 p-4 shadow-sm">
              <p className="text-[10px] font-black uppercase tracking-widest text-slate-500">Best dates</p>
              <p className="mt-1 text-2xl font-black text-slate-900">Sep 14-24</p>
              <p className="mt-1 text-sm text-slate-600">Weekdays are the target.</p>
            </div>
            <div className="rounded-2xl border border-stone-200 bg-white/90 p-4 shadow-sm">
              <p className="text-[10px] font-black uppercase tracking-widest text-slate-500">Best feel</p>
              <p className="mt-1 text-2xl font-black text-slate-900">Halloween</p>
              <p className="mt-1 text-sm text-slate-600">Decor without full October crowds.</p>
            </div>
            <div className="rounded-2xl border border-stone-200 bg-slate-900 p-4 text-white shadow-sm">
              <p className="text-[10px] font-black uppercase tracking-widest text-amber-300">Watch</p>
              <p className="mt-1 text-2xl font-black">Party nights</p>
              <p className="mt-1 text-sm text-slate-300">DCA parties can shift crowds.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-blue-50 border border-blue-200 rounded-2xl p-5 space-y-3">
        <p className="text-xs font-black uppercase tracking-widest text-blue-700">Plan September</p>
        <p className="text-sm text-slate-700 leading-relaxed">
          Disneyland crowd calendar September 2026 shortcut: the best dates are <strong>Sep 14-24 weekdays</strong>,
          especially Tuesday and Wednesday.{" "}
          Use September when you want Halloween atmosphere without the heavier October crowds. Compare it with{" "}
          <Link href="/crowds/october" className="font-bold underline hover:text-blue-600">
            October
          </Link>
          , watch for the{" "}
          <Link href="/articles/magic-key-crowd" className="font-bold underline hover:text-blue-600">
            Magic Key evening crowds
          </Link>
          , and confirm exact dates on the{" "}
          <Link href="/crowd-calendar" className="font-bold underline hover:text-blue-600">
            crowd calendar
          </Link>
          .
        </p>
        <p className="text-sm text-slate-700 leading-relaxed">
          If you are comparing the whole year, September is one of the{" "}
          <Link href="/best-times" className="font-bold underline hover:text-blue-600">
            best times to visit Disneyland in 2026
          </Link>
          , mainly because the best September weekdays land after Labor Day and before October gets crowded.
        </p>
      </section>

      <section className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-3">
        <h2 className="text-2xl font-black text-slate-900">
          Is September a good time to visit Disneyland in 2026?
        </h2>
        <p className="text-slate-700 leading-relaxed">
          Yes, especially after Labor Day. For lower crowds, the best September 2026 dates are{" "}
          <strong>Tuesday through Thursday from Sep 14-24</strong>. Weekends are harder because Halloween Time brings
          local visits, photos, seasonal food, and party-night movement between the parks.
        </p>
        <p className="text-sm text-slate-600 leading-relaxed">
          For more good date options, compare September with January, February, and May on the{" "}
          <Link href="/best-times" className="font-bold underline hover:text-blue-600">
            best times to visit Disneyland
          </Link>{" "}
          page.
        </p>
      </section>

      <div className="bg-white border border-slate-200 rounded-[2.5rem] p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-3 text-blue-600">
          <CalendarDays size={24} />
          <h2 className="text-2xl font-black uppercase italic">What affects September crowds</h2>
        </div>
        <ul className="grid md:grid-cols-2 gap-6">
          <li className="space-y-1">
            <p className="font-bold text-slate-900 flex items-center gap-2">
              <Zap size={16} className="text-blue-500" /> Halloween Time
            </p>
            <p className="text-sm text-slate-500 leading-relaxed">
              As soon as the pumpkins appear, weekends get noticeably busier.
            </p>
          </li>
          <li className="space-y-1">
            <p className="font-bold text-slate-900 flex items-center gap-2">
              <AlertTriangle size={16} className="text-amber-500" /> Oogie Boogie Spillover
            </p>
            <p className="text-sm text-slate-500 leading-relaxed">
              On party nights at DCA, thousands of guests without party tickets flood into Disneyland Park, creating heavy evening congestion.
            </p>
          </li>
        </ul>
      </div>

      <AdSlot id="ad-month-september-mid" label="Mid-month page ad" />

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-slate-50 p-8 rounded-[2rem] space-y-3">
          <h3 className="font-black uppercase italic text-slate-400 text-xs tracking-widest">When to go</h3>
          <p className="font-bold text-slate-900 leading-tight">Tuesdays & Wednesdays</p>
          <p className="text-sm text-slate-600 italic">The best time to visit if you want to see Halloween decor before October gets heavier.</p>
        </div>
        <div className="bg-slate-900 p-8 rounded-[2rem] space-y-3 text-white">
          <h3 className="font-black uppercase italic text-slate-500 text-xs tracking-widest text-blue-400">Watch the evening</h3>
          <p className="font-bold text-white leading-tight">The 6 PM Spillover</p>
          <p className="text-sm text-slate-400 italic">If there is a party at California Adventure, Disneyland Park can feel crowded by dinner time.</p>
        </div>
      </div>

      <section className="space-y-6">
        <h2 className="text-2xl font-black uppercase italic">September Rewards Precision</h2>
        <p className="text-slate-700 leading-relaxed">
          September is one of the best school-is-back windows on the calendar. Mid-week dates can be easier even with Halloween decor already drawing attention.
        </p>
        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
          <p className="font-bold text-slate-900">Best September target: Sep 14-24 weekdays.</p>
          <p className="mt-2 text-sm text-slate-600 leading-relaxed">
            Party nights, Labor Day spillover, and Friday evening locals can still make the park feel crowded, so exact date picking matters more than the month average.
          </p>
        </div>
        <p className="text-slate-700 leading-relaxed">
          If you want Halloween atmosphere without full October crowds, use the{" "}
          <Link href="/crowd-calendar" className="font-bold underline hover:text-blue-600">
            crowd calendar
          </Link>{" "}
          for exact dates, then compare September against{" "}
          <Link href="/crowds/october" className="font-bold underline hover:text-blue-600">
            October
          </Link>{" "}
          before you book.
        </p>
      </section>

      <section className="pt-8 border-t border-slate-100 space-y-6">
        <p className="text-xs font-black text-slate-400 uppercase tracking-[0.2em] mb-6">More planning help</p>
        <div className="flex flex-wrap gap-4">
          <Link href="/crowd-calendar" className="text-sm font-bold text-slate-900 hover:text-blue-600 underline">2026 Forecast</Link>
          <Link href="/best-times" className="text-sm font-bold text-slate-900 hover:text-blue-600 underline">Best Times</Link>
          <Link href="/school-breaks-calendar" className="text-sm font-bold text-slate-900 hover:text-blue-600 underline">School Break Calendar</Link>
          <Link href="/crowds/august" className="text-sm font-bold text-slate-900 hover:text-blue-600 underline">August Crowds</Link>
          <Link href="/crowds/october" className="text-sm font-bold text-slate-900 hover:text-blue-600 underline">October Crowds</Link>
          <Link href="/articles/magic-key-crowd" className="text-sm font-bold text-slate-900 hover:text-blue-600 underline">Magic Key Evening Spike</Link>
          <Link href="/articles/value-strategy" className="text-sm font-bold text-slate-900 hover:text-blue-600 underline">Lower-Price Dates</Link>
        </div>
        <MonthNavigation currentMonth="september" />
      </section>
    </div>
  );
}
