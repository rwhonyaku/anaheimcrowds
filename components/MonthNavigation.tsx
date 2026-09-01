import Link from "next/link";
import { getEarlier2026Months, getPlanningMonths } from "@/lib/planning-window";

export function MonthNavigation({ currentMonth }: { currentMonth: string }) {
  const planningMonths = getPlanningMonths();
  const earlierMonths = getEarlier2026Months();

  return (
    <nav className="py-8 border-b border-slate-100 mb-12 space-y-4">
      <div className="overflow-x-auto">
        <div className="flex gap-2 min-w-max">
          {planningMonths.map((month) => (
            <Link
              key={`${month.year}-${month.slug}`}
              href={month.href}
              className={`px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest transition-all ${
                currentMonth.toLowerCase() === `${month.slug}-${month.year}` ||
                (currentMonth.toLowerCase() === month.slug && month.year === 2026)
                  ? "bg-blue-600 text-white italic"
                  : "bg-slate-100 text-slate-500 hover:bg-slate-200"
              }`}
            >
              {month.name}
              <span className="ml-1 opacity-70">{month.year}</span>
            </Link>
          ))}
        </div>
      </div>

      {earlierMonths.length > 0 && (
        <details className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
          <summary className="cursor-pointer text-xs font-black uppercase tracking-widest text-slate-500">
            Earlier 2026 months
          </summary>
          <div className="mt-3 flex flex-wrap gap-2">
            {earlierMonths.map((month) => (
              <Link
                key={`${month.year}-${month.slug}`}
                href={month.href}
                className="rounded-full bg-white px-3 py-1.5 text-[11px] font-bold text-slate-700 hover:text-blue-600"
              >
                {month.name}
              </Link>
            ))}
          </div>
        </details>
      )}
    </nav>
  );
}
