import type { Metadata } from "next";
import { getCrowdEstimate } from "@/lib/crowd-engine";
import { AdSlot } from "@/components/AdSlot";
import { AlertTriangle } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Disneyland Crowd Calendar 2026: Daily Crowd Scores | AnaheimCrowds",
  description:
    "Disneyland crowd calendar 2026 with daily 1-10 crowd scores, lower-crowd dates, busy weeks to avoid, and school-break demand signals.",
};

function getDaysInMonth(month: number) {
  const date = new Date(2026, month, 1);
  const days: string[] = [];
  while (date.getMonth() === month) {
    days.push(new Date(date).toISOString().split("T")[0]);
    date.setDate(date.getDate() + 1);
  }
  return days;
}

function getMonthStartOffset(month: number) {
  return new Date(2026, month, 1).getDay();
}

const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export default function CrowdCalendarPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12 space-y-12">
      <section className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="space-y-4">
          <h1 className="font-display text-5xl md:text-6xl text-slate-900 leading-none">
            Disneyland Crowd Calendar 2026
          </h1>

          <p className="text-slate-600 max-w-2xl font-medium leading-relaxed">
            This Disneyland crowd calendar for 2026 gives every date a visible <strong>1-10 crowd score</strong> based on school-break overlap, seasonal pressure, weekends, and Disney demand signals.
            Use the{" "}
            <Link href="/best-times" className="font-bold underline hover:text-sky-800">
              best times to visit Disneyland
            </Link>{" "}
            page to narrow the window, then use this calendar to choose the exact dates.
          </p>
        </div>

        <div className="bg-white border border-stone-200 p-4 rounded-2xl flex gap-6 shadow-sm">
          <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-emerald-700">
            <div className="w-3 h-3 bg-emerald-500 rounded-full" /> 1-4 Lower pressure
          </div>
          <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-amber-700">
            <div className="w-3 h-3 bg-amber-500 rounded-full" /> 5-7 Busy
          </div>
          <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-rose-700">
            <div className="w-3 h-3 bg-rose-500 rounded-full" /> 8-10 Rough day
          </div>
        </div>
      </section>

      <AdSlot id="calendar-top" label="High Visibility Placement" />

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {MONTHS.map((monthName, monthIndex) => {
          const days = getDaysInMonth(monthIndex);
          const offset = getMonthStartOffset(monthIndex);

          return (
            <div
              key={monthName}
              className="bg-white border border-stone-200 rounded-3xl p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="text-lg font-black mb-4 flex items-center justify-between">
                {monthName}
                <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">
                  2026
                </span>
              </h3>

              <div className="grid grid-cols-7 gap-1 text-center mb-2">
                {["S", "M", "T", "W", "T", "F", "S"].map((day, index) => (
                  <span key={index} className="text-[10px] font-black text-slate-300">
                    {day}
                  </span>
                ))}
              </div>

              <div className="grid grid-cols-7 gap-1">
                {Array.from({ length: offset }).map((_, index) => (
                  <div key={`pad-${monthName}-${index}`} className="h-12" />
                ))}

                {days.map((dateStr) => {
                  const estimate = getCrowdEstimate(dateStr);

                  const bgColor =
                    estimate.score <= 4
                      ? "bg-emerald-100 hover:bg-emerald-200"
                      : estimate.score <= 7
                      ? "bg-amber-100 hover:bg-amber-200"
                      : "bg-rose-100 hover:bg-rose-200";

                  return (
                    <div
                      key={dateStr}
                      title={`${dateStr}: ${estimate.score}/10`}
                      className={`h-12 rounded-xl px-1 py-1 flex flex-col items-center justify-center transition-colors ${bgColor}`}
                    >
                      <span className="text-[9px] leading-none text-slate-500">
                        {new Date(dateStr).getDate()}
                      </span>
                      <span className="text-sm font-black leading-none text-slate-900">
                        {estimate.score}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </section>

      <section className="grid gap-6 md:grid-cols-3">
        <div className="rounded-[2rem] border border-emerald-200 bg-emerald-50 p-6 space-y-3">
          <h2 className="text-xl font-black uppercase italic text-emerald-800">
            Best Weeks in 2026
          </h2>
          <p className="text-sm leading-relaxed text-slate-700">
            The strongest stretches are <strong>Jan 12-30</strong>, <strong>Feb 3-12</strong>, <strong>May 4-14</strong>, and{" "}
            <strong>Sep 14-24</strong>. These are the weeks where the calendar, school patterns, and pricing signals line up.
          </p>
        </div>

        <div className="rounded-[2rem] border border-rose-200 bg-rose-50 p-6 space-y-3">
          <h2 className="text-xl font-black uppercase italic text-rose-800">
            Worst Weeks in 2026
          </h2>
          <p className="text-sm leading-relaxed text-slate-700">
            The roughest dates cluster in <strong>Mar 23-Apr 10</strong>, <strong>late June through July</strong>,{" "}
            <strong>Oct 12-31</strong>, and <strong>Dec 18-31</strong>. If October is still on the table, read the{" "}
            <Link href="/crowds/october" className="font-bold underline hover:text-sky-800">
              October crowd guide
            </Link>{" "}
            before you treat it like a normal fall trip.
          </p>
        </div>

        <div className="rounded-[2rem] border border-stone-200 bg-white p-6 space-y-3 shadow-sm">
          <h2 className="text-xl font-black uppercase italic text-slate-900">
            How to Use This Calendar
          </h2>
          <p className="text-sm leading-relaxed text-slate-700">
            Rule out Saturdays first. Then target Tuesday through Thursday dates inside the softer stretches. Finally, validate those dates against the{" "}
            <Link href="/best-times" className="font-bold underline hover:text-sky-800">
              best-times guide
            </Link>{" "}
            and the{" "}
            <Link href="/school-breaks-calendar" className="font-bold underline hover:text-sky-800">
              school-breaks calendar
            </Link>{" "}
            before you book hotels or tickets. If the trip depends on rope drop, pair your dates with the{" "}
            <Link href="/articles/harbor-advantage" className="font-bold underline hover:text-sky-800">
              Harbor Blvd hotel-location strategy
            </Link>
            .
          </p>
        </div>
      </section>

      <section className="bg-slate-900 rounded-[2.5rem] p-8 md:p-12 text-white relative overflow-hidden">
        <div className="relative z-10 space-y-6">
          <div className="flex items-center gap-2 text-amber-300 font-black text-xs uppercase tracking-widest">
            <AlertTriangle size={16} /> What the score does not tell you
          </div>

          <h2 className="font-display text-4xl leading-tight">
            A 4 in July is not the same as a 4 in February
          </h2>

          <p className="text-slate-300 leading-relaxed max-w-2xl">
            Summer carries a heavier baseline: longer hours, slower walkways, and a park that stays full later into the night.
            If you are looking at summer dates, pair this calendar with the{" "}
            <Link href="/crowds/july" className="text-amber-300 hover:underline">
              July crowd guide
            </Link>{" "}
            so you understand what a "manageable" score actually feels like on the ground. On packed dates, the{" "}
            <Link href="/articles/disneyland-midday-break-strategy" className="text-amber-300 hover:underline">
              midday break strategy
            </Link>{" "}
            becomes part of the plan, not an extra.
          </p>
        </div>
      </section>
    </div>
  );
}
