import type { Metadata } from "next";
import { getCrowdEstimate } from "@/lib/crowd-engine";
import { AdSlot } from "@/components/AdSlot";
import { AlertTriangle } from "lucide-react";
import Link from "next/link";
import { CrowdScanner } from "@/components/CrowdScanner";
import { EditorialImage } from "@/components/EditorialImage";
import { getPlanningMonths } from "@/lib/planning-window";

export const metadata: Metadata = {
  title: "Disneyland Crowd Calendar 2026-2027 | Daily Crowd Levels",
  description:
    "Disneyland crowd calendar for Anaheim trip planning, with daily 1-10 crowd levels, lower-crowd dates, busy weeks to avoid, and school-break overlap.",
};

function getDaysInMonth(year: number, month: number) {
  const date = new Date(year, month, 1);
  const days: string[] = [];
  while (date.getMonth() === month) {
    days.push(new Date(date).toISOString().split("T")[0]);
    date.setDate(date.getDate() + 1);
  }
  return days;
}

function getMonthStartOffset(year: number, month: number) {
  return new Date(year, month, 1).getDay();
}

export default function CrowdCalendarPage() {
  const planningMonths = getPlanningMonths();

  return (
    <div className="max-w-6xl mx-auto px-4 py-12 space-y-12">
      <section className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="space-y-4">
          <h1 className="font-display text-5xl md:text-6xl text-slate-900 leading-none">
            Disneyland Crowd Calendar 2026-2027
          </h1>

          <p className="text-slate-600 max-w-2xl font-medium leading-relaxed">
            This Disneyland crowd calendar shows the next 12 months of dates with a visible <strong>1-10 crowd level</strong> for Anaheim trip planning, based on school breaks, season, weekends, and Disney pricing when it is available.
            Use it as a <strong>Disneyland busy days calendar</strong> to spot the roughest weeks before you choose tickets or hotels.
            Use the{" "}
            <Link href="/best-times" className="font-bold underline hover:text-sky-800">
              best times to visit Disneyland
            </Link>{" "}
            page to narrow the window, then use this calendar to choose the exact dates.
          </p>
          <p className="text-sm text-slate-500 leading-relaxed max-w-2xl">
            Major calendar updates are tracked on the{" "}
            <Link href="/forecast-updates" className="font-bold underline hover:text-sky-800">
              forecast updates
            </Link>{" "}
            page.
          </p>
        </div>

        <div className="bg-white border border-stone-200 p-4 rounded-2xl flex gap-6 shadow-sm">
          <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-emerald-700">
            <div className="w-3 h-3 bg-emerald-500 rounded-full" /> 1-4 Lower crowds
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

      <EditorialImage
        src="/images/Big%20Thunder%20scenic%202.jpg"
        alt="Big Thunder Mountain area at Disneyland on a clear afternoon"
        caption="Big Thunder Mountain area at Disneyland. Photo: AnaheimCrowds."
        priority
        imageClassName="aspect-[16/7] object-cover"
      />

      <section className="rounded-2xl border border-blue-200 bg-blue-50 p-6 shadow-sm">
          <h2 className="text-2xl font-black text-slate-900">
          Disneyland crowd calendar for the next 12 months
        </h2>
        <p className="mt-2 text-slate-700 leading-relaxed">
          This calendar currently covers {planningMonths[0].label} through {planningMonths[planningMonths.length - 1].label}. Use the daily crowd levels to compare dates,
          then check the month guides for the reason behind each busy stretch.
        </p>
        <div className="mt-4 flex flex-wrap gap-3 text-sm">
          <Link href="/crowds/september" className="font-bold underline hover:text-blue-600">
            September 2026 crowds
          </Link>
          <Link href="/crowds/october" className="font-bold underline hover:text-blue-600">
            October 2026 crowds
          </Link>
          <Link href="/best-times" className="font-bold underline hover:text-blue-600">
            Best times to visit Disneyland
          </Link>
        </div>
      </section>

      <section className="rounded-[2.5rem] border border-slate-200 bg-slate-50 p-6 md:p-8">
        <CrowdScanner />
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {planningMonths.map((month) => {
          const days = getDaysInMonth(month.year, month.monthIndex);
          const offset = getMonthStartOffset(month.year, month.monthIndex);

          return (
            <div
              key={`${month.year}-${month.slug}`}
              className="bg-white border border-stone-200 rounded-3xl p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="text-lg font-black mb-4 flex items-center justify-between">
                <Link href={month.href} className="hover:text-blue-600">
                  {month.name}
                </Link>
                <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">
                  {month.year}
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
                  <div key={`pad-${month.label}-${index}`} className="h-12" />
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
            Better Weeks to Check First
          </h2>
          <p className="text-sm leading-relaxed text-slate-700">
            In the current window, start with <strong>Sep 14-24, 2026</strong>, early November weekdays, early December weekdays,
            and the quieter 2027 weekday stretches after major school breaks end.
          </p>
        </div>

        <div className="rounded-[2rem] border border-rose-200 bg-rose-50 p-6 space-y-3">
          <h2 className="text-xl font-black uppercase italic text-rose-800">
            Hardest Weeks to Avoid
          </h2>
          <p className="text-sm leading-relaxed text-slate-700">
            The roughest dates fall around <strong>Oct 12-31, 2026</strong>, <strong>Thanksgiving week</strong>,{" "}
            <strong>Dec 19, 2026-Jan 10, 2027</strong>, spring break, and peak summer. If October is still on the table, read the{" "}
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
            Rule out Saturdays first. Then target Tuesday through Thursday dates inside the quieter stretches. Finally, compare those dates with the{" "}
            <Link href="/best-times" className="font-bold underline hover:text-sky-800">
              best-times guide
            </Link>{" "}
            and the{" "}
            <Link href="/school-breaks-calendar" className="font-bold underline hover:text-sky-800">
              school-breaks calendar
            </Link>{" "}
            before you book hotels or tickets. If the trip depends on rope drop, pair your dates with the{" "}
            <Link href="/articles/harbor-advantage" className="font-bold underline hover:text-sky-800">
              Harbor Blvd hotel-location guide
            </Link>
            .
          </p>
        </div>
      </section>

      <section className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm space-y-3">
        <h2 className="text-xl font-black uppercase italic text-slate-900">
          Disneyland Anaheim Crowd Calendar Notes
        </h2>
        <p className="text-sm leading-relaxed text-slate-700">
          Search results often mix Disneyland in Anaheim with Disney World in Florida. This page is only for the Anaheim parks:
          Disneyland Park and Disney California Adventure. For a month-by-month view, start with{" "}
          <Link href="/crowds/september" className="font-bold underline hover:text-sky-800">
            September 2026 crowds
          </Link>{" "}
          and{" "}
          <Link href="/crowds/october" className="font-bold underline hover:text-sky-800">
            October 2026 crowds
          </Link>
          , because those are the fall pages getting the most search impressions.
        </p>
      </section>

      <section className="grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-black text-slate-900">Is this a Disneyland crowd calendar for Anaheim?</h2>
          <p className="mt-2 text-sm leading-relaxed text-slate-700">
            Yes. This calendar is for Disneyland Resort in Anaheim, California, including Disneyland Park and Disney California Adventure.
            It is not a Disney World crowd calendar.
          </p>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-black text-slate-900">How should I use the 1-10 crowd level?</h2>
          <p className="mt-2 text-sm leading-relaxed text-slate-700">
            Use the number to choose between dates, not to promise an empty park. A lower level usually means the morning is easier,
            while an 8-10 means you should plan your early start, meals, and breaks before you arrive.
          </p>
        </div>
      </section>

      <section className="bg-slate-900 rounded-[2.5rem] p-8 md:p-12 text-white relative overflow-hidden">
        <div className="relative z-10 space-y-6">
          <div className="flex items-center gap-2 text-amber-300 font-black text-xs uppercase tracking-widest">
            <AlertTriangle size={16} /> What the number does not tell you
          </div>

          <h2 className="font-display text-4xl leading-tight">
            A 4 in July is not the same as a 4 in February
          </h2>

          <p className="text-slate-300 leading-relaxed max-w-2xl">
            Summer feels heavier all day: longer hours, slower walkways, and a park that stays full later into the night.
            If you are looking at summer dates, pair this calendar with the{" "}
            <Link href="/crowds/july" className="text-amber-300 hover:underline">
              July crowd guide
            </Link>{" "}
            so you understand what an easier day actually feels like on the ground. On packed dates, the{" "}
            <Link href="/articles/disneyland-midday-break-strategy" className="text-amber-300 hover:underline">
              midday break guide
            </Link>{" "}
            becomes part of the plan, not an extra.
          </p>
        </div>
      </section>
    </div>
  );
}
