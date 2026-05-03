import type { Metadata } from "next";
import Link from "next/link";
import { AdSlot } from "@/components/AdSlot";
import { VALUE_DATES } from "@/lib/school-data";
import { format, parseISO } from "date-fns";

export const metadata: Metadata = {
  title: "Disneyland Value Dates Strategy 2026 | AnaheimCrowds",
  description:
    "How to use Disney's lower-priced 2026 dates as a crowd signal, plus the exact value-date windows that deserve a closer look.",
  alternates: { canonical: "/articles/value-strategy" },
};

const AS_OF_DATE = "2026-02-18";

export default function ValueStrategyArticle() {
  const referenceDate = parseISO(AS_OF_DATE);
  const upcomingValueDates = VALUE_DATES.filter((date) => parseISO(date) >= referenceDate).slice(0, 6);

  return (
    <article className="max-w-4xl mx-auto px-4 py-10 space-y-12 text-slate-900 leading-relaxed">
      <section className="space-y-4">
        <p className="text-xs font-black uppercase tracking-[0.2em] text-slate-400">
          Pricing Signal Guide
        </p>
        <h1 className="text-4xl md:text-6xl font-black tracking-tight">
          2026 Value Date Strategy
        </h1>
        <p className="text-lg text-slate-600">
          Lower Disneyland ticket prices do not guarantee empty parks, but they are one of the clearest public demand signals Disney gives you. Value dates are where low-crowd planning usually starts.
        </p>
        <p className="text-sm text-slate-400">
          Data reference date: {format(referenceDate, "MMMM dd, yyyy")}
        </p>
      </section>

      <section className="rounded-3xl border border-slate-200 bg-slate-50 p-8 space-y-4">
        <h2 className="text-2xl font-bold">Quick Verdict</h2>
        <p className="text-slate-700">
          Use value dates as a filter, not a final answer. Start with these lower-priced dates, then verify them on the{" "}
          <Link href="/crowd-calendar" className="font-bold underline hover:text-blue-600">
            crowd calendar
          </Link>{" "}
          and compare them with the{" "}
          <Link href="/best-times" className="font-bold underline hover:text-blue-600">
            best-times guide
          </Link>
          .
        </p>
      </section>

      <AdSlot id="value-top" label="Value article top" />

      <section className="space-y-6">
        <h2 className="text-2xl font-bold">Upcoming Value-Date Targets</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {upcomingValueDates.map((date) => (
            <div key={date} className="rounded-2xl border border-slate-200 bg-white p-5 text-center shadow-sm">
              <p className="text-sm text-slate-500">{format(parseISO(date), "EEEE")}</p>
              <p className="text-xl font-bold text-slate-900">{format(parseISO(date), "MMM dd")}</p>
              <p className="text-green-600 font-semibold">Value signal date</p>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-bold">How to Read a Value Date Correctly</h2>
        <ul className="list-disc ml-6 space-y-2 text-slate-700">
          <li>Lower price usually means Disney expects softer demand.</li>
          <li>It does not cancel out a bad week like spring break or late October.</li>
          <li>Tuesday through Thursday value dates are usually stronger than Monday value dates.</li>
          <li>Clusters of value dates are often more useful than any one date by itself.</li>
        </ul>
        <p className="text-slate-700">
          That is why the right workflow is to start with value signals, confirm the exact dates on the{" "}
          <Link href="/crowd-calendar" className="font-bold underline hover:text-blue-600">
            crowd calendar
          </Link>
          , and then sanity-check the whole window against the{" "}
          <Link href="/best-times" className="font-bold underline hover:text-blue-600">
            best-times guide
          </Link>
          .
        </p>
      </section>

      <AdSlot id="value-mid" label="Value article mid" />

      <section className="space-y-6">
        <h2 className="text-2xl font-bold">Best Follow-Up Pages</h2>
        <p className="text-slate-700">
          If you want the shortest shortlist, move next to the{" "}
          <Link href="/articles/least-crowded-days-disneyland" className="font-bold underline hover:text-blue-600">
            least crowded days guide
          </Link>
          . If you are choosing between weekdays, the{" "}
          <Link href="/articles/best-day-of-week-disneyland" className="font-bold underline hover:text-blue-600">
            best day of week page
          </Link>{" "}
          is the right companion.
        </p>
      </section>
    </article>
  );
}
