import type { Metadata } from "next";
import Link from "next/link";
import { CalendarCheck, ExternalLink, FileText } from "lucide-react";
import { SOCAL_DISTRICT_BREAKS_2026_2027 } from "@/lib/school-data";

export const metadata: Metadata = {
  title: "Disneyland Crowd Forecast Updates | AnaheimCrowds",
  description:
    "A plain update log for AnaheimCrowds 2026 Disneyland crowd forecast changes, school calendar checks, and date changes.",
  alternates: { canonical: "/forecast-updates" },
};

const updates = [
  {
    date: "September 1, 2026",
    title: "Added local 2026-27 school district dates",
    details:
      "Added 2026-27 calendars for LAUSD, Long Beach, Garden Grove, Anaheim Union, San Diego, Riverside, and San Bernardino. This helps the August back-to-school period, Thanksgiving week, winter break, and spring break line up more closely with nearby family travel.",
    links: [
      { href: "/school-breaks-calendar", label: "School Break Calendar" },
      { href: "/crowds/august", label: "August crowds" },
      { href: "/crowds/december", label: "December crowds" },
    ],
  },
  {
    date: "August 24, 2026",
    title: "Added 2026 Utah fall break district dates",
    details:
      "Updated the October and school-break pages with district-level Utah fall recess dates for Davis, Canyons, Granite, Alpine, and Jordan. The main window to watch is Oct 14-23, with the first large wave Oct 15-16 and Jordan later on Oct 20-23.",
    links: [
      { href: "/articles/utah-october-effect", label: "Utah October Effect" },
      { href: "/crowds/october", label: "October crowds" },
      { href: "/school-breaks-calendar", label: "School Break Calendar" },
    ],
  },
  {
    date: "August 24, 2026",
    title: "Improved the main 2026 crowd calendar page",
    details:
      "Added the existing date checker to the crowd calendar page and clarified that the calendar is for Disneyland Resort in Anaheim, not Walt Disney World.",
    links: [
      { href: "/crowd-calendar", label: "2026 crowd calendar" },
      { href: "/best-times", label: "Best Times" },
    ],
  },
  {
    date: "August 24, 2026",
    title: "Tightened Best Times answers",
    details:
      "Added a faster answer for visitors searching for the best time to visit Disneyland in 2026, with clearer links to January, February, May, September, and the daily calendar.",
    links: [
      { href: "/best-times", label: "Best Times" },
      { href: "/crowds/september", label: "September crowds" },
      { href: "/crowd-calendar", label: "Crowd Calendar" },
    ],
  },
];

const sourceChecks = [
  ...SOCAL_DISTRICT_BREAKS_2026_2027.map((source) => ({
    label: source.sourceLabel,
    href: source.sourceUrl,
  })),
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

export default function ForecastUpdatesPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12 space-y-12 text-slate-900">
      <section className="space-y-4">
        <p className="text-xs font-black uppercase tracking-[0.2em] text-slate-400">
          Recent Changes
        </p>
        <h1 className="text-4xl md:text-6xl font-black tracking-tight">
          Disneyland Crowd Forecast Updates
        </h1>
        <p className="text-xl text-slate-600 leading-relaxed font-medium">
          This page tracks meaningful changes to the AnaheimCrowds 2026 forecasts, school calendar checks, and date changes.
          It is here so readers can see what changed and why.
        </p>
      </section>

      <section className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6 space-y-3">
        <div className="flex items-center gap-2 text-slate-900 font-bold">
          <CalendarCheck size={18} />
          Current status
        </div>
        <p className="text-slate-700 leading-relaxed">
          The daily crowd calendar, month guides, and School Break Calendar now include local 2026-27 district dates
          for Los Angeles, Orange County, San Diego, and the Inland Empire, checked September 1, 2026.
        </p>
      </section>

      <section className="space-y-5">
        <h2 className="text-2xl font-black uppercase italic">Update Log</h2>
        <div className="grid gap-4">
          {updates.map((update) => (
            <article key={`${update.date}-${update.title}`} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm space-y-3">
              <p className="text-xs font-black uppercase tracking-widest text-slate-400">{update.date}</p>
              <h3 className="text-xl font-black text-slate-900">{update.title}</h3>
              <p className="text-slate-700 leading-relaxed">{update.details}</p>
              <div className="flex flex-wrap gap-3 pt-1">
                {update.links.map((link) => (
                  <Link key={link.href} href={link.href} className="text-sm font-bold underline hover:text-blue-600">
                    {link.label}
                  </Link>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm space-y-4">
        <div className="flex items-center gap-2">
          <FileText className="text-blue-600" size={20} />
          <h2 className="text-2xl font-black uppercase italic">Recent School Calendar Checks</h2>
        </div>
        <p className="text-slate-700 leading-relaxed">
          These are the public school calendars used for the latest local and Utah school-break updates. District calendars can change,
          so date-specific trip planning should still be checked before booking.
        </p>
        <ul className="grid gap-2 text-sm">
          {sourceChecks.map((source) => (
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
    </main>
  );
}
