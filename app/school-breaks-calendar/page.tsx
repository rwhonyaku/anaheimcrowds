import type { Metadata } from "next";
import { SOCAL_2025_2026, SOCAL_DISTRICT_BREAKS_2026_2027, UTAH_FALL_BREAK_2026 } from "@/lib/school-data";
import { Map, AlertCircle, CalendarDays, Users, Zap, ExternalLink } from "lucide-react";
import { AdSlot } from "@/components/AdSlot";
import Link from "next/link";

export const metadata: Metadata = {
  title: "School Break Calendar | AnaheimCrowds",
  description: "2026 Disneyland school break calendar with Southern California district dates, Utah fall break dates, and planning notes.",
};

const AS_OF_DATE = "September 1, 2026";

const utahSourceLinks = [
  {
    label: "Davis School District calendar page",
    href: "https://www.davis.k12.ut.us/documents/parent-information/school-year-calendar/26371133",
  },
  {
    label: "Canyons School District calendars",
    href: "https://www.canyonsdistrict.org/calendars/employee-calendars/2026-2027/",
  },
  {
    label: "Alpine School District calendars",
    href: "https://www.alpineschools.org/page/district-calendars",
  },
  {
    label: "Jordan School District calendars",
    href: "https://planning.jordandistrict.org/calendars/",
  },
  {
    label: "Granite 2026-27 calendar reference",
    href: "https://schools-calendar.com/school-calendar/ut/granite-school-district/",
  },
];

const sourceLinks = [
  ...SOCAL_DISTRICT_BREAKS_2026_2027.map((source) => ({
    label: source.sourceLabel,
    href: source.sourceUrl,
  })),
  ...utahSourceLinks,
];

export default function PeakDemandPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 space-y-16 text-slate-900">
      <section className="space-y-4 text-center md:text-left">
        <h1 className="font-display text-5xl md:text-6xl text-slate-900 leading-none">
          School Break <span className="text-sky-800">Calendar</span>
        </h1>
        <p className="text-xl text-slate-600 leading-relaxed font-medium max-w-2xl">
          Disneyland does not get busy by accident. These are the 2026 school-break windows and travel overlaps that turn an ordinary weekday into a much harder park day.
        </p>
        <p className="text-sm text-slate-400">Last updated: {AS_OF_DATE}</p>
      </section>

      <AdSlot id="school-break-calendar-top" label="School Break Calendar Top Ad" />

      <section className="grid md:grid-cols-3 gap-6">
        <div className="p-6 bg-slate-50 rounded-[2rem] border border-slate-100">
          <Users className="text-sky-800 mb-3" size={24} />
          <h3 className="font-bold text-sm uppercase mb-2">Overlap matters</h3>
          <p className="text-xs text-slate-500 leading-relaxed italic">
            When multiple districts are out at once, Disneyland feels crowded for longer parts of the day.
          </p>
        </div>
        <div className="p-6 bg-slate-50 rounded-[2rem] border border-slate-100">
          <CalendarDays className="text-sky-800 mb-3" size={24} />
          <h3 className="font-bold text-sm uppercase mb-2">Weekdays can still break</h3>
          <p className="text-xs text-slate-500 leading-relaxed italic">
            A Tuesday inside the wrong break window can be worse than a normal Friday outside it.
          </p>
        </div>
        <div className="p-6 bg-slate-50 rounded-[2rem] border border-slate-100">
          <Zap className="text-sky-800 mb-3" size={24} />
          <h3 className="font-bold text-sm uppercase mb-2">What to do with it</h3>
          <p className="text-xs text-slate-500 leading-relaxed italic">
            Use this page to rule out bad windows first, then move to the calendar for exact date picking.
          </p>
        </div>
      </section>

      <section className="relative overflow-hidden rounded-[2.5rem] border border-slate-200 bg-slate-900 p-6 md:p-8 text-white shadow-sm">
        <div className="absolute inset-0 bg-[url('/images/crowds.jpg')] bg-cover bg-center opacity-30" />
        <div className="absolute inset-0 bg-slate-950/70" />
        <div className="relative max-w-2xl space-y-3">
          <p className="text-xs font-black uppercase tracking-[0.2em] text-amber-300">
            Why school calendars matter
          </p>
          <h2 className="text-2xl md:text-3xl font-black tracking-tight">
            Break weeks change how the whole day feels.
          </h2>
          <p className="text-sm leading-relaxed text-slate-100">
            When nearby districts and fly-in markets line up, the park can stay busy from late morning through closing.
            That is why this page feeds into the daily crowd calendar instead of standing alone.
          </p>
        </div>
      </section>

      <section className="space-y-8">
        <div className="space-y-3">
          <h2 className="text-2xl font-black uppercase italic flex items-center gap-2">
            <Map className="text-sky-800" /> Local Districts We Track
          </h2>
          <p className="text-slate-600 leading-relaxed">
            These 2026-27 calendars cover the nearby districts most likely to affect Disneyland day trips and short hotel stays:
            Los Angeles, Orange County, San Diego, and the Inland Empire.
          </p>
        </div>

        <div className="grid gap-4">
          {SOCAL_DISTRICT_BREAKS_2026_2027.map((row) => (
            <article key={row.district} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm space-y-4">
              <div className="flex flex-col gap-1 md:flex-row md:items-start md:justify-between">
                <div>
                  <p className="text-xs font-black uppercase tracking-widest text-slate-400">{row.region}</p>
                  <h3 className="text-lg font-black text-slate-900">{row.district}</h3>
                </div>
                <a
                  href={row.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-bold underline hover:text-blue-600"
                >
                  Calendar source <ExternalLink size={14} />
                </a>
              </div>

              <div className="grid grid-cols-2 gap-4 md:grid-cols-5">
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">First day</p>
                  <p className="text-sm font-bold text-slate-800">{row.firstDay}</p>
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Thanksgiving</p>
                  <p className="text-sm font-bold text-slate-800">{row.thanksgiving}</p>
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Winter break</p>
                  <p className="text-sm font-bold text-slate-800">{row.winterBreak}</p>
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Spring break</p>
                  <p className="text-sm font-bold text-slate-800">{row.springBreak}</p>
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Last day</p>
                  <p className="text-sm font-bold text-slate-800">{row.lastDay}</p>
                </div>
              </div>

              <p className="text-sm leading-relaxed text-slate-600">{row.notes}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="space-y-8">
        <div className="flex items-center justify-between border-b border-slate-200 pb-4">
          <h2 className="text-2xl font-black uppercase italic flex items-center gap-2">
            <Map className="text-sky-800" /> 2026 High-Volume Windows
          </h2>
        </div>

        <div className="grid gap-6">
          {SOCAL_2025_2026.map((breakPeriod, index) => (
            <div key={index} className="bg-white border border-slate-200 rounded-[2.5rem] overflow-hidden shadow-sm hover:border-sky-700 transition-all">
              <div className="p-6 border-b border-slate-100 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-slate-50/30">
                <div className="space-y-1">
                  <h4 className="font-black text-xl uppercase italic tracking-tight text-slate-800">
                    {breakPeriod.breakType}
                  </h4>
                  <p className="text-sky-800 font-bold text-sm tracking-tight">
                    Primary Window: {breakPeriod.dateRange}
                  </p>
                </div>
                <div
                  className={`px-4 py-2 rounded-2xl font-black text-[10px] uppercase tracking-[0.2em] shadow-sm ${
                    breakPeriod.coverage === "High" ? "bg-rose-700 text-white" : "bg-sky-800 text-white"
                  }`}
                >
                  {breakPeriod.coverage} Impact Window
                </div>
              </div>

              <div className="p-8 space-y-8">
                <div className="flex gap-4 items-start">
                  <AlertCircle className="text-amber-600 shrink-0 mt-1" size={20} />
                  <div className="space-y-1">
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">What to notice</p>
                    <p className="text-sm text-slate-600 leading-relaxed">{breakPeriod.notes}</p>
                  </div>
                </div>

                {breakPeriod.breakType.includes("Utah") ? (
                  <div className="grid gap-3 pt-6 border-t border-slate-50">
                    {UTAH_FALL_BREAK_2026.map((row) => (
                      <div key={row.district} className="grid gap-1 md:grid-cols-[1.2fr_0.7fr_1.8fr]">
                        <p className="text-sm font-bold text-slate-800">{row.district}</p>
                        <p className="text-sm font-bold text-sky-800">{row.dates}</p>
                        <p className="text-xs text-slate-500 leading-relaxed">{row.notes}</p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-6 border-t border-slate-50">
                    <div className="space-y-1">
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Los Angeles</p>
                      <p className="text-sm font-bold text-slate-700">{breakPeriod.la}</p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Orange Co.</p>
                      <p className="text-sm font-bold text-slate-700">{breakPeriod.oc}</p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">San Diego</p>
                      <p className="text-sm font-bold text-slate-700">{breakPeriod.sd}</p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Inland Empire</p>
                      <p className="text-sm font-bold text-slate-700">{breakPeriod.ie}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-900 rounded-[3rem] p-10 md:p-16 text-white text-center space-y-6">
        <h2 className="font-display text-4xl text-amber-300">How to use this page</h2>
        <p className="text-slate-300 max-w-2xl mx-auto leading-relaxed">
          If your dates land inside a busier school-break window, assume the day will need a tighter morning plan and less room for wasted time. Rule out the hardest windows here, then move to the crowd calendar for exact dates.
        </p>
        <div className="flex flex-wrap justify-center gap-4 text-sm font-bold">
          <Link href="/crowd-calendar" className="text-amber-300 hover:underline">
            2026 Crowd Calendar
          </Link>
          <Link href="/best-times" className="text-amber-300 hover:underline">
            Best Times
          </Link>
          <Link href="/forecast-updates" className="text-amber-300 hover:underline">
            Forecast Updates
          </Link>
        </div>
      </section>

      <section className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm space-y-4">
        <h2 className="text-2xl font-black uppercase italic">Where These Dates Come From</h2>
        <p className="text-slate-700 leading-relaxed">
          The calendar combines Southern California school-break timing with nearby travel markets that regularly affect Disneyland,
          especially Utah in October. For recent date changes, see the{" "}
          <Link href="/forecast-updates" className="font-bold underline hover:text-blue-600">
            forecast updates
          </Link>{" "}
          page. For how the daily calendar works, see{" "}
          <Link href="/methodology" className="font-bold underline hover:text-blue-600">
            how our forecasts work
          </Link>
          .
        </p>
        <ul className="grid gap-2 text-sm">
          {sourceLinks.map((source) => (
            <li key={source.href}>
              <a
                href={source.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-bold underline hover:text-blue-600"
              >
                {source.label} <ExternalLink size={14} />
              </a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
