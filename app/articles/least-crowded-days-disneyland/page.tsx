import type { Metadata } from "next";
import Link from "next/link";
import { AdSlot } from "@/components/AdSlot";
import { VALUE_DATES } from "@/lib/school-data";

export const metadata: Metadata = {
  title: "Least Crowded Days at Disneyland in 2026 | AnaheimCrowds",
  description:
    "The least crowded days at Disneyland in 2026: exact lower-crowd date windows, why they work, and which similar dates to avoid.",
  alternates: { canonical: "/articles/least-crowded-days-disneyland" },
};

const dateGroups = [
  {
    label: "Mid-January reset",
    dates: VALUE_DATES.filter((date) => date.startsWith("2026-01")).slice(3, 11),
    takeaway:
      "This is one of the best school-is-back windows of the year if you avoid the MLK weekend.",
  },
  {
    label: "Early February weekdays",
    dates: VALUE_DATES.filter((date) => date.startsWith("2026-02")).slice(0, 6),
    takeaway:
      "These dates stay strong because they sit before Presidents Day and most ski-week overlap.",
  },
  {
    label: "Early May shoulder season",
    dates: VALUE_DATES.filter((date) => date.startsWith("2026-05")).slice(0, 4),
    takeaway:
      "Early May is one of the best combinations of weather, lower pricing, and manageable weekday crowds.",
  },
  {
    label: "Mid-September school-is-back window",
    dates: VALUE_DATES.filter((date) => date.startsWith("2026-09")).slice(0, 6),
    takeaway:
      "September wins when school is back and Halloween demand has not fully taken over every weekday.",
  },
];

export default function LeastCrowdedDaysDisneylandPage() {
  return (
    <article className="max-w-4xl mx-auto px-4 py-10 space-y-12 text-slate-900 leading-relaxed">
      <section className="space-y-4">
        <p className="text-xs font-black uppercase tracking-[0.2em] text-slate-400">
          2026 Search Intent Guide
        </p>
        <h1 className="text-4xl md:text-6xl font-black tracking-tight">
          Least Crowded Days at Disneyland in 2026
        </h1>
        <p className="text-lg text-slate-600">
          The least crowded Disneyland days in 2026 are mostly <strong>Tuesday through Thursday dates in mid-January,
          early February, early May, and mid-September</strong>. If you want the safest exact-date starting points, this is the shortlist.
        </p>
      </section>

      <section className="rounded-3xl border border-slate-200 bg-slate-50 p-8 space-y-4">
        <h2 className="text-2xl font-bold">Quick Verdict</h2>
        <p className="text-slate-700">
          If you only want the answer, start with <strong>Jan 12-29</strong>, <strong>Feb 3-12</strong>,{" "}
          <strong>May 4-14</strong>, and <strong>Sep 14-24</strong>, then confirm the exact weekday on the{" "}
          <Link href="/crowd-calendar" className="font-bold underline hover:text-blue-600">
            2026 crowd calendar
          </Link>
          . If your trip is still flexible, compare those windows against the{" "}
          <Link href="/best-times" className="font-bold underline hover:text-blue-600">
            best times to visit Disneyland
          </Link>{" "}
          guide before you book hotels.
        </p>
        <p className="text-slate-700">
          The matching month guides are{" "}
          <Link href="/crowds/january" className="font-bold underline hover:text-blue-600">
            January
          </Link>
          ,{" "}
          <Link href="/crowds/february" className="font-bold underline hover:text-blue-600">
            February
          </Link>
          ,{" "}
          <Link href="/crowds/may" className="font-bold underline hover:text-blue-600">
            May
          </Link>
          , and{" "}
          <Link href="/crowds/september" className="font-bold underline hover:text-blue-600">
            September
          </Link>
          .
        </p>
      </section>

      <AdSlot id="least-crowded-days-top" label="Least crowded days top" />

      <section className="space-y-6">
        <h2 className="text-2xl font-bold">Best Exact Date Windows</h2>
        <div className="grid gap-6">
          {dateGroups.map((group) => (
            <div key={group.label} className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm space-y-4">
              <div>
                <p className="text-xs font-black uppercase tracking-widest text-blue-600">{group.label}</p>
                <p className="mt-2 text-lg font-bold text-slate-900">
                  {group.dates.join(", ")}
                </p>
              </div>
              <p className="text-slate-700">{group.takeaway}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-bold">What These Days Have in Common</h2>
        <ul className="list-disc ml-6 space-y-2 text-slate-700">
          <li>School is mostly in session across Southern California and nearby travel markets.</li>
          <li>They sit outside major holiday weekends.</li>
          <li>Disney pricing usually signals lower expected demand.</li>
          <li>They are usually Tuesday through Thursday, not Monday and not Saturday.</li>
        </ul>
      </section>

      <section className="rounded-3xl border border-amber-200 bg-amber-50 p-8 space-y-4">
        <h2 className="text-2xl font-bold text-amber-900">Dates That Look Similar but Are Worse</h2>
        <p className="text-amber-900">
          The biggest mistakes are <strong>MLK weekend</strong>, <strong>Presidents Day weekend</strong>, the first half of{" "}
          <Link href="/crowds/april" className="font-bold underline hover:text-amber-950">
            April
          </Link>
          ,{" "}
          <Link href="/crowds/october" className="font-bold underline hover:text-amber-950">
            mid-to-late October
          </Link>
          , and{" "}
          <Link href="/crowds/december" className="font-bold underline hover:text-amber-950">
            late December
          </Link>
          . Those dates can sit near
          a strong low-crowd pocket on the calendar and still behave like a completely different trip.
        </p>
      </section>

      <AdSlot id="least-crowded-days-mid" label="Least crowded days mid" />

      <section className="space-y-6">
        <h2 className="text-2xl font-bold">How to Use This Page</h2>
        <p className="text-slate-700">
          Use this shortlist to find the date family you want, then move to the{" "}
          <Link href="/crowd-calendar" className="font-bold underline hover:text-blue-600">
            crowd calendar
          </Link>{" "}
          for day-level selection and the{" "}
          <Link href="/school-breaks-calendar" className="font-bold underline hover:text-blue-600">
            school-breaks calendar
          </Link>{" "}
          for overlap risk. If your dates are not flexible, the{" "}
          <Link href="/best-times" className="font-bold underline hover:text-blue-600">
            best-times guide
          </Link>{" "}
          is the page that helps you judge whether your week is still workable.
        </p>
      </section>
    </article>
  );
}
