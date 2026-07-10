import type { Metadata } from "next";
import Link from "next/link";
import { AdSlot } from "@/components/AdSlot";
import { MonthNavigation } from "@/components/MonthNavigation";
import { AlertTriangle, CalendarDays, Info, Zap, ExternalLink } from "lucide-react";

const AS_OF_DATE = "February 19, 2026";

export const metadata: Metadata = {
  title: "Disneyland Crowds in October 2026 | AnaheimCrowds",
  description:
    "Disneyland crowds in October 2026—week-by-week breakdown, the Utah fall break effect, Halloween event impact, ticket tier patterns, hotel price trends, and Lightning Lane sellout timing.",
  alternates: { canonical: "/crowds/october" },
};

export default function OctoberCrowdsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 space-y-12 text-slate-900">
      {/* Header */}
      <section className="space-y-5">
        <p className="text-xs font-black text-slate-400 uppercase tracking-[0.2em]">
          2026 Monthly Crowd Guide
        </p>

        <h1 className="text-4xl md:text-6xl font-black tracking-tighter italic uppercase">
          Disneyland Crowds in <span className="text-blue-600">October 2026</span>
        </h1>

        <p className="text-xl text-slate-600 leading-relaxed font-medium">
          October used to be a shoulder month. In 2026 it behaves like peak season. Halloween demand, weekend locals,
          and stacked fall breaks keep the parks busy from rope drop through late night—especially in the second half
          of the month.
        </p>

        {/* Required: clear, confident answer */}
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 text-sm text-slate-700 leading-relaxed">
          <strong className="text-slate-900">Is Disneyland busy in October 2026?</strong>{" "}
          <span className="font-semibold">Yes.</span> Expect a month where “moderate” days are the exception, not the
          rule. Your best odds are <strong>early-October weekdays</strong>. The hardest stretch is{" "}
          <strong>mid-October through Halloween weekend</strong> (Halloween is{" "}
          <strong>Saturday, October 31, 2026</strong>).
        </div>

        <p className="text-sm text-slate-400">Last updated: {AS_OF_DATE}</p>
      </section>

      <AdSlot id="october-top" label="October page top" />

      {/* Week-by-week breakdown table (required) */}
      <section className="space-y-6">
        <div className="flex items-center gap-3">
          <CalendarDays className="text-blue-600" />
          <h2 className="text-2xl font-black uppercase italic tracking-tight">
            Week-by-Week Breakdown (October 2026)
          </h2>
        </div>

        <p className="text-slate-700 leading-relaxed">
          If you only take one thing from this page, take this: October is not “one crowd level.” It’s a moving target.
          Some weeks feel like a normal busy season. Others feel like the week between Christmas and New Year’s—just
          with pumpkins.
        </p>

        <div className="overflow-x-auto bg-white border border-slate-200 rounded-[2rem] p-6 shadow-sm">
          <table className="min-w-[720px] w-full text-sm">
            <thead>
              <tr className="text-left text-slate-500">
                <th className="py-3 pr-4 font-black uppercase tracking-widest text-xs">Week</th>
                <th className="py-3 pr-4 font-black uppercase tracking-widest text-xs">Dates</th>
                <th className="py-3 pr-4 font-black uppercase tracking-widest text-xs">Crowd expectation</th>
                <th className="py-3 pr-4 font-black uppercase tracking-widest text-xs">Why it looks like this</th>
              </tr>
            </thead>
            <tbody className="text-slate-800">
              <tr className="border-t border-slate-100">
                <td className="py-4 pr-4 font-bold">Week 1</td>
                <td className="py-4 pr-4">Sep 28 (Mon) – Oct 4 (Sun)</td>
                <td className="py-4 pr-4">
                  <span className="font-semibold">Best window</span> (weekdays win)
                </td>
                <td className="py-4 pr-4 text-slate-600">
                  Halloween season is running, but the big travel wave hasn’t fully arrived yet.
                </td>
              </tr>

              <tr className="border-t border-slate-100">
                <td className="py-4 pr-4 font-bold">Week 2</td>
                <td className="py-4 pr-4">Oct 5 (Mon) – Oct 11 (Sun)</td>
                <td className="py-4 pr-4">
                  <span className="font-semibold">Busy</span> (weekends heavy)
                </td>
                <td className="py-4 pr-4 text-slate-600">
                  Early fall breaks begin overlapping. Weekend locals add an evening spike.
                </td>
              </tr>

              <tr className="border-t border-slate-100">
                <td className="py-4 pr-4 font-bold">Week 3</td>
                <td className="py-4 pr-4">Oct 12 (Mon) – Oct 18 (Sun)</td>
                <td className="py-4 pr-4">
                  <span className="font-semibold">Very busy</span>
                </td>
                <td className="py-4 pr-4 text-slate-600">
                  This is the classic “why is Tuesday packed?” week—Utah break + other regional breaks.
                </td>
              </tr>

              <tr className="border-t border-slate-100">
                <td className="py-4 pr-4 font-bold">Week 4</td>
                <td className="py-4 pr-4">Oct 19 (Mon) – Oct 25 (Sun)</td>
                <td className="py-4 pr-4">
                  <span className="font-semibold">Very busy</span> (late-week surge)
                </td>
                <td className="py-4 pr-4 text-slate-600">
                  The “pre-Halloween” ramp starts. More first-timers, more multi-day trips, less rope drop slack.
                </td>
              </tr>

              <tr className="border-t border-slate-100">
                <td className="py-4 pr-4 font-bold">Week 5</td>
                <td className="py-4 pr-4">Oct 26 (Mon) – Oct 31 (Sat)</td>
                <td className="py-4 pr-4">
                  <span className="font-semibold">Peak</span> (Oct 31 is brutal)
                </td>
                <td className="py-4 pr-4 text-slate-600">
                  Halloween is Saturday in 2026. The final stretch pulls both travelers and locals.
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 text-sm text-slate-700 leading-relaxed">
          <strong className="text-slate-900">Quick call:</strong> If your calendar is flexible, aim for{" "}
          <strong>Tue–Thu, Oct 6–8</strong>. If you’re choosing between mid-month and late-month, mid-month is crowded
          because of breaks; late-month is crowded because of Halloween energy. Pick your poison—but go in with a plan.
        </div>
      </section>

      <AdSlot id="october-mid-1" label="October page mid (after table)" />

      {/* Early / Mid / Late (required) */}
      <section className="space-y-6">
        <div className="flex items-center gap-3">
          <Info className="text-blue-600" />
          <h2 className="text-2xl font-black uppercase italic tracking-tight">
            Early vs Mid vs Late October (What Changes)
          </h2>
        </div>

        <div className="grid gap-6">
          <div className="bg-white border border-slate-200 rounded-[2rem] p-7 shadow-sm space-y-3">
            <p className="text-xs font-black uppercase tracking-widest text-slate-400">Early October</p>
            <p className="text-lg font-bold">Oct 1–8</p>
            <p className="text-slate-700 leading-relaxed">
              This is the closest you’ll get to “October with breathing room.” You still get the seasonal vibe—decor,
              food, and the Halloween draw—without the full fall break pile-on. That doesn’t mean empty. It means your
              day stays controllable if you show up early and avoid peak afternoons.
            </p>
            <p className="text-slate-700 leading-relaxed">
              If you’re traveling with kids or you hate long security lines, early October weekdays are the smart play.
              If you can only do one park day and you want a better shot at headliners without paying in time, this is
              where you place your bet.
            </p>
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-[2rem] p-7 space-y-3">
            <p className="text-xs font-black uppercase tracking-widest text-amber-800">Mid October</p>
            <p className="text-lg font-bold">Oct 9–18</p>
            <p className="text-slate-800 leading-relaxed">
              Mid-October is where people get surprised. Locally, it can look like a “normal” week. But regionally,
              multiple school calendars often line up. That’s how you get a Tuesday that feels like a Saturday.
            </p>
            <p className="text-slate-800 leading-relaxed">
              If you’re visiting in this window, assume Lightning Lane Multi-Pass demand will be strong, Harbor Blvd
              hotels will be tighter, and the morning rush will matter more than it does in slower months.
            </p>
            <div className="pt-2">
              <Link
                href="/articles/utah-trap"
                className="inline-flex items-center gap-2 text-sm font-bold text-slate-900 hover:text-blue-600 underline"
              >
                Read the deep dive: Utah October Effect
              </Link>
            </div>
          </div>

          <div className="bg-white border border-slate-200 rounded-[2rem] p-7 shadow-sm space-y-3">
            <p className="text-xs font-black uppercase tracking-widest text-slate-400">Late October</p>
            <p className="text-lg font-bold">Oct 19–31</p>
            <p className="text-slate-700 leading-relaxed">
              Late October is peak Halloween behavior. You get more “special trip” energy—people who planned this
              specifically for the season. Add weekend locals and you get a pattern that’s common in 2026: mornings
              start busy, afternoons swell, and evenings stay packed instead of easing off.
            </p>
            <p className="text-slate-700 leading-relaxed">
              In 2026, Halloween lands on a Saturday. That tends to turn the final week into a steady climb, with the
              sharpest spike on Friday night and Saturday.
            </p>
          </div>
        </div>
      </section>

      {/* Utah break dates + linked sources (required) */}
      <section className="space-y-6">
        <div className="flex items-center gap-3">
          <AlertTriangle className="text-amber-500" />
          <h2 className="text-2xl font-black uppercase italic tracking-tight">
            Utah Fall Break Windows (Why Mid-October Jumps)
          </h2>
        </div>

        <p className="text-slate-700 leading-relaxed">
          The “Utah effect” is real, but the important nuance is this: the dates vary by district. Utah families still
          travel during mid-October fall recess windows, and Disneyland is a popular target. When those travel days
          overlap with other Western fall breaks, crowd levels don’t just rise—they stay elevated across multiple
          weekdays.
        </p>

        <div className="bg-slate-50 border border-slate-200 rounded-[2rem] p-7 space-y-4">
          <p className="text-slate-800 leading-relaxed">
            For 2025–2026, Utah district calendars show many fall recess windows in mid-to-late October (commonly a
            Thu–Fri pair). Use the official sources below to verify the districts you care about and to spot the
            overlap weeks.
          </p>

          <ul className="space-y-3 text-sm">
            <li>
              <a
                href="https://schools.utah.gov/schoolcalendars/2526DistrictCalendar.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-bold text-slate-900 hover:text-blue-600 underline"
              >
                Utah State Board of Education — 2025–2026 District Calendar (PDF) <ExternalLink size={14} />
              </a>
            </li>
            <li>
              <a
                href="https://myuea.org/professional-excellence/conferences-events/events"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-bold text-slate-900 hover:text-blue-600 underline"
              >
                Utah Education Association — Events Calendar <ExternalLink size={14} />
              </a>
            </li>
          </ul>

          <div className="bg-white border border-slate-200 rounded-2xl p-5 text-sm text-slate-700 leading-relaxed">
            <strong className="text-slate-900">What this means for your trip:</strong> If you are trying to “thread the
            needle,” avoid <strong>Oct 12–18</strong> unless you can rope drop, use Lightning Lane well, and accept that
            mid-week lines may look like weekend lines.
          </div>
        </div>
      </section>

      {/* Fall break states (required) */}
      <section className="space-y-6">
        <div className="flex items-center gap-3">
          <Zap className="text-blue-600" />
          <h2 className="text-2xl font-black uppercase italic tracking-tight">Fall Break States That Matter</h2>
        </div>

        <p className="text-slate-700 leading-relaxed">
          Utah is the headline, but it’s rarely the only contributor. October crowds get heavy when multiple school
          calendars line up across the West and Southwest. You don’t need every district off to feel the impact. You
          just need enough families traveling at once to change the mix from locals to “multi-day vacation.”
        </p>

        <div className="bg-white border border-slate-200 rounded-[2rem] p-7 shadow-sm space-y-4">
          <p className="text-slate-700 leading-relaxed">
            Common contributors in October include parts of: <strong>Arizona</strong>, <strong>Nevada</strong>,{" "}
            <strong>Colorado</strong>, <strong>Idaho</strong>, and pockets of the <strong>Pacific Northwest</strong>.
            Some districts schedule a full week; others schedule long weekends. The practical takeaway is simple:
          </p>
          <ul className="list-disc ml-6 space-y-2 text-slate-700">
            <li>
              If you see <strong>two or more</strong> overlapping regional breaks in the same week, assume Disneyland
              feels “one notch busier” all day.
            </li>
            <li>
              If your trip is a weekend-only visit in October, assume crowds are high unless proven otherwise by your
              own data.
            </li>
          </ul>
        </div>
      </section>

      <AdSlot id="october-mid-2" label="October page mid (after fall breaks)" />

      {/* Halloween events impact (required) */}
      <section className="space-y-6">
        <div className="flex items-center gap-3">
          <CalendarDays className="text-blue-600" />
          <h2 className="text-2xl font-black uppercase italic tracking-tight">Halloween Events Impact</h2>
        </div>

        <p className="text-slate-700 leading-relaxed">
          October crowds are not just “more people.” They’re also different behavior. Halloween season pushes repeat
          rides, photo stops, seasonal food lines, and a higher percentage of guests who are willing to stay late.
          That’s why October can feel crowded even when a crowd calendar says “only a 7.”
        </p>

        <div className="bg-white border border-slate-200 rounded-[2rem] p-7 shadow-sm space-y-4">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <p className="font-bold text-slate-900">Halloween Time (official season dates)</p>
              <p className="text-sm text-slate-700 leading-relaxed">
                In 2026, Halloween Time is scheduled from <strong>Aug 21 through Oct 31</strong>. That means October is
                the “fully online” month—everything is in place, and demand builds as you get closer to Halloween.
              </p>
              <a
                href="https://disneyland.disney.go.com/events-tours/halloween-time-at-the-disneyland-resort/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-bold text-slate-900 hover:text-blue-600 underline"
              >
                Disneyland: Halloween Time 2026 <ExternalLink size={14} />
              </a>
            </div>

            <div className="space-y-3">
              <p className="font-bold text-slate-900">Oogie Boogie Bash nights (DCA party)</p>
              <p className="text-sm text-slate-700 leading-relaxed">
                Party nights reshape the day. Some guests shift to Disneyland Park. Some hop earlier. And the Harbor
                Blvd area can feel tighter even if you’re not attending the event.
              </p>
              <a
                href="https://disneyland.disney.go.com/events-tours/disney-california-adventure/oogie-boogie-bash-halloween-party/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-bold text-slate-900 hover:text-blue-600 underline"
              >
                Disneyland: Oogie Boogie Bash 2026 dates <ExternalLink size={14} />
              </a>
            </div>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 text-sm text-slate-700 leading-relaxed">
            <strong className="text-slate-900">Reality check:</strong> On party days, the parks can feel “busy in a
            different way.” Walkways, food, and chokepoints can be crowded even if some ride waits look normal.
          </div>
        </div>
      </section>

      {/* Ticket tier patterns (required) */}
      <section className="space-y-6">
        <div className="flex items-center gap-3">
          <Info className="text-blue-600" />
          <h2 className="text-2xl font-black uppercase italic tracking-tight">Ticket Tier Patterns</h2>
        </div>

        <p className="text-slate-700 leading-relaxed">
          Disneyland’s ticket pricing tends to “tell on” demand. When October dates jump tiers, it’s usually because
          Disney expects higher attendance. You don’t have to obsess over the exact tier number to use this. You just
          need to notice the pattern: early October weekdays are usually the best deal, while weekends and late October
          carry the premium.
        </p>

        <div className="bg-white border border-slate-200 rounded-[2rem] p-7 shadow-sm space-y-4">
          <ul className="list-disc ml-6 space-y-2 text-slate-700">
            <li>
              <strong>Early October weekdays</strong> often sit in a lower pricing band than the back half of the month.
            </li>
            <li>
              <strong>Fridays and Saturdays</strong> are where pricing and crowds align most consistently.
            </li>
            <li>
              The <strong>final week</strong> usually prices like a holiday run-up—especially when Halloween is on a
              weekend (as it is in 2026).
            </li>
          </ul>

          <div className="pt-2">
            <Link href="/articles/value-strategy" className="text-sm font-bold text-slate-900 hover:text-blue-600 underline">
              See the “Value Dates” shortlist (our easiest wins)
            </Link>
          </div>
        </div>
      </section>

      {/* Hotel price trends (required) */}
      <section className="space-y-6">
        <div className="flex items-center gap-3">
          <AlertTriangle className="text-amber-500" />
          <h2 className="text-2xl font-black uppercase italic tracking-tight">Hotel Price Trends (Harbor Blvd)</h2>
        </div>

        <p className="text-slate-700 leading-relaxed">
          October hotel pricing near Disneyland tends to move in the same direction as crowds: early month is your best
          shot, mid-month tightens, and late month can get expensive fast—especially around weekends. The big mistake is
          waiting “because it’s not summer.” In October, that logic backfires.
        </p>

        <div className="bg-white border border-slate-200 rounded-[2rem] p-7 shadow-sm space-y-4">
          <ul className="list-disc ml-6 space-y-2 text-slate-700">
            <li>
              <strong>Early October</strong>: more availability, better pricing, fewer sold-out walkable options.
            </li>
            <li>
              <strong>Mid October</strong>: rates climb, and the most convenient hotels fill first (especially weekends).
            </li>
            <li>
              <strong>Late October</strong>: pricing behaves like a mini-holiday season; last-minute options are usually
              either far, pricey, or both.
            </li>
          </ul>

          <div className="pt-2">
            <Link href="/hotels" className="text-sm font-bold text-slate-900 hover:text-blue-600 underline">
              Walkable hotels ranked (Harbor Blvd strategy)
            </Link>
            <p className="mt-3 text-sm text-slate-700 leading-relaxed">
              If rope drop matters on your dates, the{" "}
              <Link href="/articles/harbor-advantage" className="font-bold underline hover:text-blue-600">
                Harbor Blvd advantage
              </Link>{" "}
              explains why location changes the whole morning in October.
            </p>
          </div>
        </div>
      </section>

      {/* Lightning Lane sellout timing (required) */}
      <section className="space-y-6">
        <div className="flex items-center gap-3">
          <Zap className="text-blue-600" />
          <h2 className="text-2xl font-black uppercase italic tracking-tight">Lightning Lane Sellout Timing</h2>
        </div>

        <p className="text-slate-700 leading-relaxed">
          October is one of the months where Lightning Lane Multi-Pass demand is most predictable: on busy days it gets
          purchased early, and the “good” return times disappear fast. In 2026, with Disneyland’s shift away from
          traditional early-entry advantages and toward limited perks, the playing field is closer to level. That means
          you can’t count on being “fine” because you’re staying nearby or because you arrived in the afternoon.
        </p>

        <div className="bg-white border border-slate-200 rounded-[2rem] p-7 shadow-sm space-y-4">
          <p className="text-slate-700 leading-relaxed">
            A practical way to think about it in October:
          </p>

          <ul className="list-disc ml-6 space-y-2 text-slate-700">
            <li>
              On <strong>Week 3–5</strong> dates, assume Multi-Pass demand is high. If you’re buying, buy early.
            </li>
            <li>
              If you’re trying to ride the big headliners, treat the first <strong>90 minutes</strong> of the day as
              your “free advantage” window.
            </li>
            <li>
              If you wait until mid-day to decide, you’ll often be choosing from leftovers (or spending your day in
              standby).
            </li>
          </ul>

          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 text-sm text-slate-700 leading-relaxed">
            <strong className="text-slate-900">The October pattern:</strong> The month is busy enough that “we’ll just
            see how it goes” usually turns into “we did half of what we wanted.”
          </div>
        </div>
      </section>

      {/* Close: strategy + internal links */}
      <section className="space-y-6">
        <div className="flex items-center gap-3">
          <Info className="text-blue-600" />
          <h2 className="text-2xl font-black uppercase italic tracking-tight">So When Should You Go?</h2>
        </div>

        <p className="text-slate-700 leading-relaxed">
          If your goal is to experience Halloween season without donating half your day to lines, the best bet is still
          early October weekdays—especially Tuesday through Thursday. If your only option is mid-month or late-month,
          it’s not “doomed,” but you need to approach the day differently: earlier arrival, tighter priorities, and a
          plan for breaks so you don’t burn out when the park hits its afternoon peak.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-slate-50 border border-slate-200 rounded-[2rem] p-7 space-y-3">
            <p className="text-xs font-black uppercase tracking-widest text-slate-400">Best odds</p>
            <p className="font-bold text-slate-900 text-lg">Early October Tue–Thu</p>
            <p className="text-slate-700 leading-relaxed">
              You still get the seasonal overlays and vibe, but with better control over your day—especially if you
              arrive before open and knock out headliners early.
            </p>
            <Link href="/articles/value-strategy" className="text-sm font-bold text-slate-900 hover:text-blue-600 underline">
              Value Dates: best October picks
            </Link>
          </div>

          <div className="bg-slate-900 rounded-[2rem] p-7 space-y-3 text-white">
            <p className="text-xs font-black uppercase tracking-widest text-blue-300">Hard mode</p>
            <p className="font-bold text-white text-lg">Oct 12–18 and Oct 26–31</p>
            <p className="text-slate-300 leading-relaxed">
              These stretches punish late starts. If you’re going anyway, plan rope drop, pick a walkable hotel, and
              decide ahead of time which 5–7 rides matter most to you.
            </p>
            <Link href="/hotels" className="text-sm font-bold text-white hover:text-blue-300 underline">
              Hotels: walkable picks that save time
            </Link>
          </div>
        </div>

        <div className="bg-white border border-slate-200 rounded-[2rem] p-7 shadow-sm space-y-3">
          <p className="font-bold text-slate-900">If you want the “why” behind mid-October crowds</p>
          <p className="text-slate-700 leading-relaxed">
            The Utah fall break effect is the most common reason people get blindsided by October weekdays. If your trip
            overlaps mid-month, read this before you commit to dates.
          </p>
          <Link href="/articles/utah-trap" className="text-sm font-bold text-slate-900 hover:text-blue-600 underline">
            Utah Trap deep dive (what to avoid + what still works)
          </Link>
        </div>
      </section>

      <AdSlot id="october-bottom" label="October page bottom" />

      {/* Deep dives + month nav */}
      <section className="pt-8 border-t border-slate-100 space-y-6">
        <p className="text-xs font-black text-slate-400 uppercase tracking-[0.2em]">Internal Links</p>

        <div className="flex flex-wrap gap-4">
          <Link href="/articles/utah-trap" className="text-sm font-bold text-slate-900 hover:text-blue-600 underline">
            Utah Trap Article
          </Link>
          <Link href="/articles/magic-key-crowd" className="text-sm font-bold text-slate-900 hover:text-blue-600 underline">
            Magic Key Evening Spike
          </Link>
          <Link href="/articles/disneyland-midday-break-strategy" className="text-sm font-bold text-slate-900 hover:text-blue-600 underline">
            Midday Break Strategy
          </Link>
          <Link href="/hotels" className="text-sm font-bold text-slate-900 hover:text-blue-600 underline">
            Hotels Near Disneyland
          </Link>
          <Link href="/articles/value-strategy" className="text-sm font-bold text-slate-900 hover:text-blue-600 underline">
            Value Date Shortlist
          </Link>
          <Link href="/crowd-calendar" className="text-sm font-bold text-slate-900 hover:text-blue-600 underline">
            2026 Crowd Calendar
          </Link>
          <Link href="/best-times" className="text-sm font-bold text-slate-900 hover:text-blue-600 underline">
            Best Times to Visit
          </Link>
          <Link href="/crowds/september" className="text-sm font-bold text-slate-900 hover:text-blue-600 underline">
            September Crowds
          </Link>
          <Link href="/crowds/november" className="text-sm font-bold text-slate-900 hover:text-blue-600 underline">
            November Crowds
          </Link>
          <Link
            href="/school-breaks-calendar"
            className="text-sm font-bold text-slate-900 hover:text-blue-600 underline"
          >
            School Break Heatmap
          </Link>
        </div>

        <div className="pt-6">
          <MonthNavigation currentMonth="october" />
        </div>
      </section>
    </div>
  );
}
