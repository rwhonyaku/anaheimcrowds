import type { Metadata } from "next";
import Link from "next/link";
import {
  Info,
  Sun,
  Snowflake,
  Leaf,
  Flower2,
  CalendarCheck,
  AlertTriangle,
  Zap,
} from "lucide-react";
import { AdSlot } from "@/components/AdSlot";

export const metadata: Metadata = {
  title: "Best Time to Go to Disneyland 2026 (Best Dates + Crowd Windows) | AnaheimCrowds",
  description:
    "Best time to go to Disneyland in 2026: the best low-crowd windows, why they work (school breaks + ticket tiers), Monday patterns, Magic Key spikes, and a 3-day first-timer plan.",
  alternates: { canonical: "/best-times" },
};

const AS_OF_DATE = "February 19, 2026";

export default function BestTimesPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 space-y-16 text-slate-900">
      {/* Editorial Header */}
      <section className="space-y-5">
        <p className="text-xs font-black text-slate-400 uppercase tracking-[0.2em]">
          2026 Planning Pillar
        </p>

        <h1 className="text-4xl md:text-6xl font-black tracking-tighter italic uppercase">
          Best Time to Go to Disneyland <span className="text-blue-600 italic">in 2026</span>
        </h1>

        <p className="text-xl text-slate-600 leading-relaxed font-medium">
          This page is built for planners and first-time visitors. You’ll get{" "}
          <strong>specific 2026 date windows</strong>, why they work (school calendars + pricing signals),
          and how to build a 3-day trip that avoids the most common mistakes.
        </p>

        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-green-200 bg-green-50 p-5">
            <p className="text-xs font-black uppercase tracking-widest text-green-700">Best overall time</p>
            <p className="mt-2 text-lg font-bold text-slate-900">Mid-January through early February</p>
            <p className="mt-2 text-sm leading-relaxed text-slate-700">
              If you want the highest success rate, target weekday trips from <strong>Jan 12 to Feb 12, 2026</strong>.
            </p>
          </div>

          <div className="rounded-2xl border border-blue-200 bg-blue-50 p-5">
            <p className="text-xs font-black uppercase tracking-widest text-blue-700">Best low-crowd window</p>
            <p className="mt-2 text-lg font-bold text-slate-900">May 4-14 and Sep 14-24</p>
            <p className="mt-2 text-sm leading-relaxed text-slate-700">
              These are the cleanest shoulder-season weekday windows if you want lighter parks without the January refurbishment tradeoff.
            </p>
          </div>

          <div className="rounded-2xl border border-red-200 bg-red-50 p-5">
            <p className="text-xs font-black uppercase tracking-widest text-red-700">Worst times to avoid</p>
            <p className="mt-2 text-lg font-bold text-slate-900">Spring break, late October, late December</p>
            <p className="mt-2 text-sm leading-relaxed text-slate-700">
              Avoid <strong>Mar 23-Apr 10</strong>, <strong>Oct 12-31</strong>, and <strong>Dec 18-31</strong> if lower stress and shorter waits are the priority.
            </p>
          </div>
        </div>

        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 text-sm text-slate-700 leading-relaxed">
          <strong className="text-slate-900">Bottom line:</strong>{" "}
          The best “low-stress” windows in 2026 are when <strong>school is in session</strong> and
          Disney pricing usually signals lower demand: <strong>mid-January</strong>,{" "}
          <strong>early February</strong>, <strong>early May</strong>, and <strong>mid-September</strong>. Once you have a shortlist,
          verify the exact days on the{" "}
          <Link href="/crowd-calendar" className="font-bold underline hover:text-blue-600">
            2026 crowd calendar
          </Link>
          .
        </div>

        <div className="flex flex-wrap gap-4 text-sm">
          <a href="#best-windows-2026" className="font-bold underline hover:text-blue-600">
            Best windows (2026)
          </a>
          <a href="#three-day-plan" className="font-bold underline hover:text-blue-600">
            Best 3-day plan
          </a>
          <a href="#faq" className="font-bold underline hover:text-blue-600">
            FAQ
          </a>
        </div>

        <p className="text-sm text-slate-400">Last updated: {AS_OF_DATE}</p>
      </section>

      <AdSlot id="best-times-top" label="Top Guide Ad" />

      {/* Best Windows in 2026 (Specific Dates) */}
      <section id="best-windows-2026" className="space-y-8 scroll-mt-24">
        <div className="flex items-center gap-3">
          <CalendarCheck className="text-blue-600" />
          <h2 className="text-3xl font-black italic uppercase">
            Best Time to Visit Disneyland in 2026 (Best Windows + Exact Dates)
          </h2>
        </div>

        <p className="text-slate-700 leading-relaxed">
          These windows consistently outperform the rest of the year because they avoid the two big crowd accelerators:
          <strong> school-out travel</strong> and <strong>holiday/weekend stacking</strong>.
          If you can move your trip by even a few days, this section is where you’ll save the most time.
        </p>

        <div className="grid gap-8">
          {/* Window 1 */}
          <div className="group bg-white border border-slate-200 rounded-[2.5rem] p-8 hover:border-blue-300 transition-all shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-blue-50 text-blue-600 rounded-2xl">
                <Snowflake />
              </div>
              <h3 className="text-2xl font-black uppercase italic tracking-tight">
                Mid-January (Post-Holiday Reset)
              </h3>
            </div>

            <div className="space-y-4 text-slate-600">
              <p className="leading-relaxed font-medium">
                <strong>Best 2026 dates:</strong> <strong>Jan 12 (Mon) – Jan 30 (Fri)</strong>
              </p>

              <p className="text-sm leading-relaxed">
                This is the cleanest “back to routine” stretch of the year. Holiday travel is done, most schools are back,
                and the parks usually behave more predictably. If you want the best shot at manageable waits with fewer
                surprises, this is it.
              </p>

              <div className="bg-slate-50 p-4 rounded-2xl flex gap-2 italic text-xs border-l-4 border-blue-500">
                <Info size={18} className="shrink-0 text-blue-500" />
                <span>
                  Avoid the MLK long weekend: <strong>Jan 17–19, 2026</strong>.
                </span>
              </div>

              <div className="pt-1">
                <Link href="/crowds/january" className="text-sm font-bold text-slate-900 hover:text-blue-600 underline">
                  January crowds guide →
                </Link>
              </div>
            </div>
          </div>

          {/* Window 2 */}
          <div className="group bg-white border border-slate-200 rounded-[2.5rem] p-8 hover:border-blue-300 transition-all shadow-sm">
            <div className="flex items-center gap-3 mb-6 text-blue-700">
              <div className="p-3 bg-blue-50 rounded-2xl">
                <Snowflake />
              </div>
              <h3 className="text-2xl font-black uppercase italic tracking-tight">
                Early February (Non-Holiday Weekdays)
              </h3>
            </div>

            <div className="space-y-4 text-slate-600">
              <p className="leading-relaxed font-medium">
                <strong>Best 2026 dates:</strong> <strong>Feb 3 (Tue) – Feb 12 (Thu)</strong>
              </p>

              <p className="text-sm leading-relaxed">
                A strong “quiet pocket” before the next holiday bump. If you care about reducing wait-time risk without
                traveling in January, early February is the next best play.
              </p>

              <div className="bg-slate-50 p-4 rounded-2xl flex gap-2 italic text-xs border-l-4 border-blue-500">
                <Info size={18} className="shrink-0 text-blue-500" />
                <span>
                  Try not to overlap Presidents’ Day weekend: <strong>Feb 14–16, 2026</strong>.
                </span>
              </div>

              <div className="pt-1">
                <Link href="/crowds/february" className="text-sm font-bold text-slate-900 hover:text-blue-600 underline">
                  February crowds guide →
                </Link>
              </div>
            </div>
          </div>

          <AdSlot id="best-times-mid" label="Mid-Guide Ad" />

          {/* Window 3 */}
          <div className="group bg-white border border-slate-200 rounded-[2.5rem] p-8 hover:border-blue-300 transition-all shadow-sm">
            <div className="flex items-center gap-3 mb-6 text-green-700">
              <div className="p-3 bg-green-50 rounded-2xl">
                <Flower2 />
              </div>
              <h3 className="text-2xl font-black uppercase italic tracking-tight">
                Early May (Between Breaks)
              </h3>
            </div>

            <div className="space-y-4 text-slate-600">
              <p className="leading-relaxed font-medium">
                <strong>Best 2026 dates:</strong> <strong>May 4 (Mon) – May 14 (Thu)</strong>
              </p>

              <p className="text-sm leading-relaxed">
                This is the “in-between” stretch: spring breaks have cleared, summer isn’t here yet, and many schools are still
                in full session. You get good weather and a better chance at a smooth day than most of the year.
              </p>

              <div className="pt-1">
                <Link href="/crowds/may" className="text-sm font-bold text-slate-900 hover:text-blue-600 underline">
                  May crowds guide →
                </Link>
              </div>
            </div>
          </div>

          {/* Window 4 */}
          <div className="group bg-white border border-slate-200 rounded-[2.5rem] p-8 hover:border-blue-300 transition-all shadow-sm">
            <div className="flex items-center gap-3 mb-6 text-orange-700">
              <div className="p-3 bg-orange-50 rounded-2xl">
                <Leaf />
              </div>
              <h3 className="text-2xl font-black uppercase italic tracking-tight">
                Mid-September (School Is Back)
              </h3>
            </div>

            <div className="space-y-4 text-slate-600">
              <p className="leading-relaxed font-medium">
                <strong>Best 2026 dates:</strong> <strong>Sep 14 (Mon) – Sep 24 (Thu)</strong>
              </p>

              <p className="text-sm leading-relaxed">
                Mid-September is one of the most reliable “school is back” windows. Summer travel fades,
                and weekday crowd pressure often drops compared to October and the holidays.
              </p>

              <div className="bg-slate-50 p-4 rounded-2xl flex gap-2 italic text-xs border-l-4 border-blue-500">
                <Info size={18} className="shrink-0 text-blue-500" />
                <span>
                  Avoid Labor Day spillover: <strong>Sep 5–7, 2026</strong>.
                </span>
              </div>

              <div className="pt-1">
                <Link
                  href="/crowds/september"
                  className="text-sm font-bold text-slate-900 hover:text-blue-600 underline"
                >
                  September crowds guide →
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Tool links (funnel) */}
        <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6 text-sm text-blue-900 leading-relaxed">
          <strong>Want to confirm your exact dates?</strong> Use your tools in this order:
          <ol className="list-decimal ml-6 mt-3 space-y-1">
            <li>
              <Link href="/school-breaks-calendar" className="font-bold underline hover:text-slate-900">
                School Break Heatmap
              </Link>{" "}
              (spot overlap weeks)
            </li>
            <li>
              <Link href="/crowd-calendar" className="font-bold underline hover:text-slate-900">
                2026 Crowd Calendar
              </Link>{" "}
              (day-by-day reality check)
            </li>
            <li>
              <Link href="/hotels" className="font-bold underline hover:text-slate-900">
                Hotels (walking distance)
              </Link>{" "}
              (make rope drop easier)
            </li>
          </ol>
        </div>
      </section>

      {/* Modeling */}
      <section className="space-y-6">
        <div className="flex items-center gap-3">
          <Zap className="text-blue-600" />
          <h2 className="text-3xl font-black italic uppercase">Why These Windows Work</h2>
        </div>

        <p className="text-slate-700 leading-relaxed">
          Disneyland crowds aren’t random. The biggest driver is simple:{" "}
          <strong>when families can travel</strong>. That’s why school calendars matter more than almost anything else.
          When multiple districts are out at once, weekday crowds rise and Lightning Lane demand jumps.
        </p>

        <div className="bg-white border border-slate-200 rounded-[2.5rem] p-8 shadow-sm space-y-5">
          <ul className="list-disc ml-6 space-y-2 text-slate-700">
            <li>
              <strong>School break modeling:</strong> More school-out overlap = heavier weekday crowds.
            </li>
            <li>
              <strong>Ticket tiers:</strong> Higher price dates usually signal higher expected demand.
            </li>
            <li>
              <strong>Local patterns:</strong> Even on “school is in session” weeks, evenings can spike on Fri–Sun.
            </li>
          </ul>

          <div className="bg-slate-50 p-4 rounded-2xl flex gap-2 italic text-xs border-l-4 border-blue-500">
            <Info size={18} className="shrink-0 text-blue-500" />
            <span>
              October is the best example of school-out overlap beating “local calendar logic.” If you’re considering October,
              start here:{" "}
              <Link href="/crowds/october" className="underline font-bold hover:text-slate-900">
                October crowds →
              </Link>{" "}
              and{" "}
              <Link href="/articles/utah-trap" className="underline font-bold hover:text-slate-900">
                Utah October Effect →
              </Link>
            </span>
          </div>
        </div>
      </section>

      {/* Ticket tiers */}
      <section className="space-y-6">
        <div className="flex items-center gap-3">
          <Info className="text-blue-600" />
          <h2 className="text-3xl font-black italic uppercase">Ticket Tiers: A Simple Demand Check</h2>
        </div>

        <p className="text-slate-700 leading-relaxed">
          You don’t need insider info to spot busy days. Pricing is often your fastest warning sign.
          When dates jump into higher bands, it usually means Disney expects heavier attendance.
        </p>

        <div className="bg-white border border-slate-200 rounded-[2.5rem] p-8 shadow-sm space-y-4">
          <ul className="list-disc ml-6 space-y-2 text-slate-700">
            <li>
              <strong>Lower-priced weekdays</strong> are your best targets outside major breaks.
            </li>
            <li>
              <strong>Fridays and Saturdays</strong> are where price and crowds line up most reliably.
            </li>
            <li>
              The roughest trips usually combine <strong>school out + weekend + high pricing</strong>.
            </li>
          </ul>
        </div>
      </section>

      {/* Monday pattern */}
      <section className="space-y-6">
        <div className="flex items-center gap-3">
          <Sun className="text-amber-600" />
          <h2 className="text-3xl font-black italic uppercase">The Monday Pattern (And When It Breaks)</h2>
        </div>

        <p className="text-slate-700 leading-relaxed">
          Monday is often better than Saturday—but it’s not automatically “good.” Mondays can be travel days, locals can
          take PTO, and holiday Mondays pull everyone in.
        </p>

        <div className="bg-white border border-slate-200 rounded-[2.5rem] p-8 shadow-sm space-y-4">
          <p className="text-slate-700 leading-relaxed">
            Mondays tend to behave best when all three are true:
          </p>
          <ul className="list-disc ml-6 space-y-2 text-slate-700">
            <li>It’s not a holiday Monday.</li>
            <li>It’s outside a major school-out window.</li>
            <li>It’s not priced like a peak date.</li>
          </ul>

          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5 text-sm text-amber-900 leading-relaxed">
            <strong>Practical rule:</strong> If you can choose any weekday,{" "}
            <strong>Tuesday–Thursday</strong> is usually safer than Monday.
          </div>
        </div>
      </section>

      {/* Magic Key spikes */}
      <section className="space-y-6">
        <div className="flex items-center gap-3">
          <AlertTriangle className="text-amber-500" />
          <h2 className="text-3xl font-black italic uppercase">Magic Key Spikes</h2>
        </div>

        <p className="text-slate-700 leading-relaxed">
          A lot of “surprise” crowd days aren’t driven by tourists—they’re driven by locals. The most common shape:
          the morning feels fine, and the evening turns packed (especially Friday).
        </p>

        <div className="bg-white border border-slate-200 rounded-[2.5rem] p-8 shadow-sm space-y-4">
          <ul className="list-disc ml-6 space-y-2 text-slate-700">
            <li>
              <strong>Friday night</strong> is the most common local spike.
            </li>
            <li>
              When key blockouts lift, you can get an “extra” evening wave that school calendars won’t explain.
            </li>
            <li>
              If your date is local-heavy, do headliners early. Don’t save everything for night.
            </li>
          </ul>

          <div className="pt-2">
            <Link href="/crowd-calendar" className="text-sm font-bold text-slate-900 hover:text-blue-600 underline">
              Check the 2026 day-by-day calendar →
            </Link>
          </div>
        </div>
      </section>

      {/* Best 3-day plan (required) */}
      <section id="three-day-plan" className="space-y-6 scroll-mt-24">
        <div className="flex items-center gap-3">
          <CalendarCheck className="text-blue-600" />
          <h2 className="text-3xl font-black italic uppercase">
            Best 3-Day Disneyland Trip Plan (2026) — First-Time Visitors
          </h2>
        </div>

        <p className="text-slate-700 leading-relaxed">
          This is the highest success-rate shape for a first trip. It assumes you want the big rides without burning out,
          and it’s designed around how crowds actually build in 2026.
        </p>

        <div className="bg-white border border-slate-200 rounded-[2.5rem] p-8 shadow-sm space-y-6">
          <div className="space-y-3">
            <h3 className="text-xl font-black uppercase italic tracking-tight">Day 0 (Arrival Night)</h3>
            <ul className="list-disc ml-6 space-y-2 text-slate-700">
              <li>Stay walkable if possible so rope drop is realistic.</li>
              <li>Pick your top 5 priorities now (don’t decide at 10:30am in the park).</li>
              <li>Set expectations: mornings are the advantage; afternoons are the grind.</li>
            </ul>
            <Link href="/hotels" className="text-sm font-bold text-slate-900 hover:text-blue-600 underline">
              Walkable hotels guide →
            </Link>
          </div>

          <div className="border-t border-slate-100 pt-6 space-y-3">
            <h3 className="text-xl font-black uppercase italic tracking-tight">Day 1 (Disneyland Park — Rope Drop Day)</h3>
            <ul className="list-disc ml-6 space-y-2 text-slate-700">
              <li>Arrive early. Your goal is to bank 2–3 headliners before the park “fully wakes up.”</li>
              <li>Do your highest priority rides first. Don’t “warm up” with filler attractions.</li>
              <li>Midday: take a hotel break if you can. Come back for evening atmosphere.</li>
            </ul>
            <p className="text-sm text-slate-600 leading-relaxed">
              Why this works: Disneyland Park has the most “must-do” rides and the strongest morning-to-afternoon crowd swing.
              Winning Day 1 lowers pressure for the rest of the trip.
            </p>
          </div>

          <div className="border-t border-slate-100 pt-6 space-y-3">
            <h3 className="text-xl font-black uppercase italic tracking-tight">
              Day 2 (DCA + Flex Night)
            </h3>
            <ul className="list-disc ml-6 space-y-2 text-slate-700">
              <li>DCA tends to feel easier to navigate mid-day than Disneyland, especially on non-holiday weekdays.</li>
              <li>Use Day 2 to catch what you missed and keep energy in the tank.</li>
              <li>If you’re doing a nighttime show anywhere, pick Day 2 so you’re not exhausted on Day 3.</li>
            </ul>
          </div>

          <div className="border-t border-slate-100 pt-6 space-y-3">
            <h3 className="text-xl font-black uppercase italic tracking-tight">
              Day 3 (Second Disneyland Day — Clean Up + Favorites)
            </h3>
            <ul className="list-disc ml-6 space-y-2 text-slate-700">
              <li>Re-ride favorites early while waits are reasonable.</li>
              <li>Use this day for the “we didn’t get to that” list without forcing it.</li>
              <li>If crowds feel heavy, pivot to lower-stress experiences instead of fighting every line.</li>
            </ul>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 text-sm text-slate-700 leading-relaxed">
            <strong className="text-slate-900">Scheduling tip:</strong> If you can pick weekdays, put your Disneyland Park days on{" "}
            <strong>Tue/Thu</strong> and your DCA day on <strong>Wednesday</strong>. Avoid making Day 1 a Saturday.
          </div>
        </div>
      </section>

      {/* Internal links to monthly pages (supporting cluster) */}
      <section className="space-y-6">
        <div className="flex items-center gap-3">
          <Leaf className="text-orange-600" />
          <h2 className="text-3xl font-black italic uppercase">Month Guides to Pair With This Page</h2>
        </div>

        <p className="text-slate-700 leading-relaxed">
          If you want deeper detail (what pushes crowds that month, and which weeks are the traps), use the month guides below.
          These pages support the windows listed above and help you choose dates with fewer surprises.
        </p>

        <div className="flex flex-wrap gap-4">
          <Link href="/crowds/january" className="text-sm font-bold text-slate-900 hover:text-blue-600 underline">
            January 2026 crowds →
          </Link>
          <Link href="/crowds/february" className="text-sm font-bold text-slate-900 hover:text-blue-600 underline">
            February 2026 crowds →
          </Link>
          <Link href="/crowds/may" className="text-sm font-bold text-slate-900 hover:text-blue-600 underline">
            May 2026 crowds →
          </Link>
          <Link href="/crowds/september" className="text-sm font-bold text-slate-900 hover:text-blue-600 underline">
            September 2026 crowds →
          </Link>
          <Link href="/crowds/october" className="text-sm font-bold text-slate-900 hover:text-blue-600 underline">
            October 2026 crowds →
          </Link>
        </div>
      </section>

      {/* FAQ (tight SEO signals) */}
      <section id="faq" className="space-y-6 scroll-mt-24">
        <div className="flex items-center gap-3">
          <Info className="text-blue-600" />
          <h2 className="text-3xl font-black italic uppercase">FAQ: Best Time to Go to Disneyland 2026</h2>
        </div>

        <div className="grid gap-4">
          <div className="bg-white border border-slate-200 rounded-2xl p-6">
            <h3 className="font-black text-lg">What is the best month to go to Disneyland in 2026?</h3>
            <p className="text-slate-700 leading-relaxed mt-2">
              For the best blend of crowds and trip smoothness,{" "}
              <strong>January (after the holidays)</strong>, <strong>early February</strong>,{" "}
              <strong>early May</strong>, and <strong>mid-September</strong> are the most reliable picks.
              Those windows avoid the highest concentration of school-out travel.
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-6">
            <h3 className="font-black text-lg">What are the least crowded weeks at Disneyland in 2026?</h3>
            <p className="text-slate-700 leading-relaxed mt-2">
              The strongest “least crowded week” candidates are the weekday-heavy windows listed above:
              <strong> Jan 12–30</strong>, <strong>Feb 3–12</strong>, <strong>May 4–14</strong>, and{" "}
              <strong>Sep 14–24</strong>. Confirm with the{" "}
              <Link href="/crowd-calendar" className="underline font-bold hover:text-blue-600">
                2026 Crowd Calendar
              </Link>{" "}
              to match your exact dates.
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-6">
            <h3 className="font-black text-lg">Is Monday a good day to go to Disneyland in 2026?</h3>
            <p className="text-slate-700 leading-relaxed mt-2">
              Sometimes. A normal Monday can be better than the weekend, but Monday breaks down on holidays and during major
              school-out periods. If you can choose, <strong>Tuesday–Thursday</strong> is typically the safer weekday bet.
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-6">
            <h3 className="font-black text-lg">Why do some “school is in session” days still feel crowded?</h3>
            <p className="text-slate-700 leading-relaxed mt-2">
              Two big reasons: <strong>locals</strong> (especially Friday evenings) and <strong>break overlap in feeder states</strong>.
              That’s why this site uses both school calendar modeling and observed patterns, not just a local calendar check.
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-6">
            <h3 className="font-black text-lg">Is October 2026 a good time to visit Disneyland?</h3>
            <p className="text-slate-700 leading-relaxed mt-2">
              If your goal is low crowds, October is not ideal in 2026—especially mid-month through Halloween.
              If you’re going for Halloween season, pick early October weekdays and read the month guide first:
              <Link href="/crowds/october" className="underline font-bold hover:text-blue-600 ml-1">
                October crowds →
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* Avoid list */}
      <section className="bg-slate-900 rounded-[3rem] p-10 md:p-16 text-white space-y-10">
        <div className="space-y-2">
          <h2 className="text-3xl font-black italic uppercase text-blue-400">If You Can Avoid These, Do</h2>
          <p className="text-slate-400 font-medium">
            These windows are the most likely to produce heavy lines, higher hotel pricing, and a “we didn’t get enough done” trip.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-3">
            <h4 className="font-bold flex items-center gap-2 text-red-400">
              Holiday Weekends
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed italic">
              MLK (Jan 17–19), Presidents’ Day (Feb 14–16), Memorial Day (May 23–25), and Labor Day (Sep 5–7) pull locals and long-weekend travelers.
              If those are your only options, plan rope drop and keep your priority list tight.
            </p>
          </div>

          <div className="space-y-3">
            <h4 className="font-bold flex items-center gap-2 text-red-400">
              Major School-Out Overlaps
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed italic">
              Spring breaks, mid-October overlaps, and late-December holidays are consistently heavy.
              Use your heatmap to catch overlap weeks before you book.
            </p>
            <Link href="/school-breaks-calendar" className="text-xs font-bold underline hover:text-blue-300">
              School Break Heatmap →
            </Link>
          </div>
        </div>
      </section>

      <AdSlot id="best-times-bottom" label="Bottom Guide Ad" />

      {/* Final CTA */}
      <section className="text-center py-6">
        <div className="inline-flex items-center gap-3 bg-blue-50 text-blue-700 px-6 py-3 rounded-2xl font-bold italic">
          <CalendarCheck size={20} />
          <span>Ready to pick your exact dates?</span>
          <Link href="/crowd-calendar" className="underline hover:text-slate-900">
            Check the 2026 Forecast →
          </Link>
        </div>
      </section>
    </div>
  );
}
