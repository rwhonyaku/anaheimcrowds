import type { Metadata } from "next";
import Link from "next/link";
import { TrendingUp } from "lucide-react";

export const metadata: Metadata = {
  title: "What Moves Disneyland Crowds in 2026 | AnaheimCrowds",
  description: "A practical breakdown of the signals that shift Disneyland crowd pressure in 2026.",
  alternates: { canonical: "/crowd-drivers" },
};

const DRIVERS = [
  {
    driver: "School-break overlap",
    effect: "The biggest all-day shift",
    impact2026:
      "When multiple districts are out at once, Disneyland stops behaving like a normal weekday park. That is the cleanest reason a Tuesday suddenly feels too full.",
    indicator: "Weekday wait pressure from open to late afternoon",
  },
  {
    driver: "Magic Key access patterns",
    effect: "Evening spikes",
    impact2026:
      "Some dates stay reasonable at lunch and tighten after work. That is usually a local access pattern, not a random surprise.",
    indicator: "Heavier walkways and food lines after 5 PM",
  },
  {
    driver: "Ticket pricing signals",
    effect: "Demand warning sign",
    impact2026:
      "Lower-priced dates are often worth a second look. Higher-priced Fridays and Saturdays are usually telling you the hard truth up front.",
    indicator: "Tier jumps around weekends and holidays",
  },
  {
    driver: "Seasonal event stacking",
    effect: "Crowded in a different way",
    impact2026:
      "Halloween season, holiday runs, and event nights do not just add people. They also change how those people move through the park.",
    indicator: "Full walkways, food lines, and slower evenings",
  },
];

export default function CrowdDriversPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 space-y-10 py-12">
      <section className="bg-sky-50 border-l-8 border-sky-800 p-8 rounded-r-2xl space-y-4">
        <h1 className="font-display text-4xl text-slate-900">What actually moves Disneyland crowds</h1>
        <p className="text-lg text-slate-700 leading-relaxed">
          The old weekend-versus-weekday rule is not enough on its own. In 2026, crowd pressure comes from a few repeat signals, and the useful question is not "Is it a Tuesday?" but "What kind of Tuesday is it?"
        </p>
      </section>

      <section className="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-sm">
        <div className="bg-slate-900 p-6">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <TrendingUp className="text-amber-300" /> Crowd Driver Matrix
          </h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 text-slate-500 uppercase text-xs font-black tracking-widest border-b border-slate-200">
                <th className="p-6">Driver</th>
                <th className="p-6">What it changes</th>
                <th className="p-6">What you notice first</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {DRIVERS.map((driver) => (
                <tr key={driver.driver} className="hover:bg-slate-50/50 transition-colors">
                  <td className="p-6 font-bold text-slate-900">
                    {driver.driver}
                    <br />
                    <span className="text-sky-800 text-xs">{driver.effect}</span>
                  </td>
                  <td className="p-6 text-sm text-slate-600 leading-relaxed">{driver.impact2026}</td>
                  <td className="p-6 text-sm text-slate-500">{driver.indicator}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <div className="bg-slate-900 rounded-2xl p-1 text-center">
        <Link href="/rope-drop" className="block p-4 text-white font-bold hover:text-amber-300 transition-colors">
          See the 2026 rope drop guide &rarr;
        </Link>
      </div>
    </div>
  );
}
