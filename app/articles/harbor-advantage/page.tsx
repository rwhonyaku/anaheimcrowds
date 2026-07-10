import type { Metadata } from "next";
import { AdSlot } from "@/components/AdSlot";
import { HARBOR_HOTELS } from "@/lib/hotel-data";
import { Timer, Footprints } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Harbor Blvd Advantage Near Disneyland in 2026 | AnaheimCrowds",
  description:
    "Why Harbor Blvd hotels often beat Disney-owned hotels on pure walk-to-gate speed in 2026, especially for rope drop mornings.",
  alternates: { canonical: "/articles/harbor-advantage" },
};

const AS_OF_DATE = "February 18, 2026";

export default function HarborAdvantageArticle() {
  const kingOfProximity = HARBOR_HOTELS[0];
  const runnerUp = HARBOR_HOTELS[1];

  return (
    <article className="max-w-4xl mx-auto px-4 py-10 space-y-12 text-slate-900 leading-relaxed">
      <section className="space-y-4">
        <h1 className="text-4xl md:text-6xl font-black tracking-tight">
          The Harbor Blvd Advantage in 2026
        </h1>
        <p className="text-lg text-slate-600">
          Staying on Harbor Blvd often puts you closer to the Disneyland entrance than staying at a Disney-owned hotel.
        </p>
        <p className="text-sm text-slate-400">Last updated: {AS_OF_DATE}</p>
      </section>

      <section className="bg-slate-50 rounded-3xl p-8 border border-slate-200 space-y-6">
        <h2 className="text-2xl font-bold">The 7:30 AM Comparison</h2>
        <p>
          At 7:30 AM, guests staying at the Disneyland Hotel or Pixar Place still have to deal with the Downtown Disney route.
          Guests staying on Harbor Blvd are already playing the simpler game: shorter walk, cleaner approach, faster shot at the turnstiles.
        </p>
        <p>
          If your whole trip depends on winning the first hour, this is not a branding question. It is a geometry question.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-2xl border">
            <h3 className="font-bold text-red-600">Disney-Owned Hotel Route</h3>
            <p className="text-3xl font-black mt-2">15-22 Minutes</p>
            <p className="text-sm text-slate-500 mt-2">
              Assumes a normal early morning walk through Downtown Disney security and the full approach to the Esplanade.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-blue-200">
            <h3 className="font-bold text-blue-600">Harbor Blvd Crosswalk</h3>
            <p className="text-3xl font-black mt-2 text-blue-600">
              {kingOfProximity.walkTimeMinutes} Minutes
            </p>
            <p className="text-sm text-slate-500 mt-2">
              From {kingOfProximity.name} to the scanners. Direct walk. No Downtown Disney detour.
            </p>
          </div>
        </div>
      </section>

      <AdSlot id="harbor-top" label="Harbor Article Top" />

      <section className="space-y-6">
        <h2 className="text-2xl font-bold">The Only Hotel Metric That Actually Matters</h2>
        <p>
          People search "closest hotel to Disneyland entrance" and then get tricked by mileage. Mileage is the wrong metric.
          Around Disneyland, the useful number is <strong>walk time to the turnstiles</strong>.
        </p>
        <p>
          If you are still choosing dates, use the{" "}
          <Link href="/crowd-calendar" className="font-bold underline hover:text-blue-600">
            2026 crowd calendar
          </Link>{" "}
          and the{" "}
          <Link href="/best-times" className="font-bold underline hover:text-blue-600">
            best times to visit Disneyland
          </Link>{" "}
          first. If your dates are busy, Harbor proximity matters even more because rope drop stops being optional.
        </p>
        <p>
          This matters most on heavy-demand weeks like{" "}
          <Link href="/crowds/october" className="font-bold underline hover:text-blue-600">
            October
          </Link>{" "}
          and{" "}
          <Link href="/crowds/december" className="font-bold underline hover:text-blue-600">
            late December
          </Link>
          , when a late start is much harder to recover from.
        </p>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-bold">The Sub-5 Minute Edge</h2>

        {[kingOfProximity, runnerUp].map((hotel) => (
          <div key={hotel.name} className="border rounded-2xl p-6 bg-white">
            <h3 className="font-bold text-lg">{hotel.name}</h3>
            <div className="flex gap-4 text-sm text-slate-500 mt-2">
              <span className="flex items-center gap-1">
                <Timer size={14} /> {hotel.walkTimeMinutes} min
              </span>
              <span className="flex items-center gap-1">
                <Footprints size={14} /> ~{hotel.distanceSteps} steps
              </span>
            </div>
            <p className="text-sm text-slate-600 mt-3 leading-relaxed">
              This is the kind of location that makes a 7:10 AM start feel realistic instead of aspirational.
            </p>
          </div>
        ))}
      </section>

      <AdSlot id="harbor-mid" label="Harbor Article Mid" />

      <section className="bg-amber-50 border border-amber-200 rounded-3xl p-8 space-y-4">
        <h2 className="font-bold text-amber-700">Important Note About Katella Ave</h2>
        <p>
          Some hotels south of the park look close on a map and still lose on the ground.
          There is no magic south-side entrance that saves you. If the route forces the wrong detour, the morning gets slower fast.
        </p>
        <p>
          If you want the ranked list, go straight to{" "}
          <Link href="/hotels" className="text-amber-700 font-semibold underline">
            the Harbor hotel rankings
          </Link>
          . If you want the tactical follow-up, read the{" "}
          <Link
            href="/articles/disneyland-rope-drop-strategy-2026"
            className="text-amber-700 font-semibold underline"
          >
            2026 rope drop strategy
          </Link>
          . If you are planning midday hotel breaks on a packed day, the{" "}
          <Link
            href="/articles/disneyland-midday-break-strategy"
            className="text-amber-700 font-semibold underline"
          >
            midday break guide
          </Link>{" "}
          is the natural follow-up.
        </p>
      </section>
    </article>
  );
}
