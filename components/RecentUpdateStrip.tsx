import Link from "next/link";
import { CalendarCheck } from "lucide-react";

export function RecentUpdateStrip() {
  return (
    <section className="max-w-6xl mx-auto w-full px-4">
      <div className="flex flex-col gap-3 rounded-2xl border border-sky-200 bg-sky-50 p-4 text-sm text-slate-800 shadow-sm md:flex-row md:items-center md:justify-between">
        <div className="flex items-start gap-3">
          <CalendarCheck className="mt-0.5 shrink-0 text-sky-800" size={18} />
          <p>
            <strong>Updated September 1:</strong> added local 2026-27 school calendars and a rolling 12-month planning window.
          </p>
        </div>
        <Link href="/forecast-updates" className="font-bold underline hover:text-blue-600">
          See recent changes
        </Link>
      </div>
    </section>
  );
}
