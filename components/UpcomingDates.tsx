import Link from "next/link";
import { AlertTriangle, CheckCircle2 } from "lucide-react";
import { getCrowdEstimate } from "@/lib/crowd-engine";
import { formatShortDate, toISODate } from "@/lib/date-utils";

function getNextDates(count: number) {
  const today = new Date();
  today.setHours(12, 0, 0, 0);

  return Array.from({ length: count }, (_, offset) => {
    const date = new Date(today);
    date.setDate(today.getDate() + offset);
    const iso = toISODate(date);
    const estimate = getCrowdEstimate(iso);
    const day = date.getDay();

    return {
      iso,
      label: formatShortDate(iso),
      score: estimate.score,
      level: estimate.label,
      isWeekend: day === 0 || day === 6,
    };
  });
}

export function UpcomingDates() {
  const dates = getNextDates(30);
  const betterDates = dates
    .filter((date) => date.score <= 5 && !date.isWeekend)
    .slice(0, 5);
  const hardDates = dates
    .filter((date) => date.score >= 8 || (date.score >= 7 && date.isWeekend))
    .slice(0, 5);

  return (
    <section className="max-w-6xl mx-auto w-full px-4">
      <div className="grid gap-6 rounded-[2.5rem] border border-stone-200 bg-white p-6 shadow-sm md:grid-cols-2 md:p-8">
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-emerald-800">
            <CheckCircle2 size={20} />
            <h2 className="text-2xl font-black">Better dates in the next 30 days</h2>
          </div>
          <div className="grid gap-2">
            {betterDates.length > 0 ? (
              betterDates.map((date) => (
                <Link
                  key={date.iso}
                  href={`/crowd-calendar?date=${date.iso}`}
                  className="flex items-center justify-between rounded-2xl border border-emerald-100 bg-emerald-50 px-4 py-3 hover:border-emerald-300"
                >
                  <span className="font-bold text-slate-900">{date.label}</span>
                  <span className="text-sm font-black text-emerald-800">{date.score}/10</span>
                </Link>
              ))
            ) : (
              <p className="rounded-2xl bg-slate-50 p-4 text-sm text-slate-600">
                No clearly easier weekdays in the next 30 days. Compare exact dates before booking.
              </p>
            )}
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-center gap-2 text-rose-800">
            <AlertTriangle size={20} />
            <h2 className="text-2xl font-black">Dates to be careful with</h2>
          </div>
          <div className="grid gap-2">
            {hardDates.length > 0 ? (
              hardDates.map((date) => (
                <Link
                  key={date.iso}
                  href={`/crowd-calendar?date=${date.iso}`}
                  className="flex items-center justify-between rounded-2xl border border-rose-100 bg-rose-50 px-4 py-3 hover:border-rose-300"
                >
                  <span className="font-bold text-slate-900">{date.label}</span>
                  <span className="text-sm font-black text-rose-800">{date.score}/10</span>
                </Link>
              ))
            ) : (
              <p className="rounded-2xl bg-slate-50 p-4 text-sm text-slate-600">
                The next 30 days do not show any extreme dates yet. Weekends can still be busy.
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
