import Link from "next/link";
import { AdSlot } from "@/components/AdSlot";
import { HARBOR_HOTELS, HotelProperty } from "@/lib/hotel-data";
import {
  Timer,
  AlertTriangle,
  MapPin,
  ChevronRight,
  Star,
  Footprints,
  ShieldAlert,
  Info,
} from "lucide-react";

const AS_OF_DATE = "February 19, 2026";

function mapsSearchUrl(hotelName: string) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    `${hotelName} Anaheim CA`
  )}`;
}

function WalkBadge({ minutes }: { minutes: number }) {
  return (
    <span className="flex items-center gap-1.5 text-blue-600 bg-blue-50 px-3 py-1 rounded-lg text-sm font-bold uppercase tracking-wider">
      <Timer size={16} /> {minutes} mins to gate
    </span>
  );
}

function HotelCard({
  hotel,
  rank,
  highlight,
}: {
  hotel: HotelProperty;
  rank?: number;
  highlight?: "top" | "none";
}) {
  return (
    <div className="group bg-white border border-slate-200 rounded-3xl p-8 shadow-sm hover:border-blue-300 transition-all flex flex-col md:flex-row gap-8 items-center">
      <div className="flex-1 space-y-4">
        <div className="flex items-center gap-3">
          {typeof rank === "number" ? (
            <span className="bg-slate-900 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">
              {rank}
            </span>
          ) : null}

          <h3 className="text-2xl font-bold">{hotel.name}</h3>
        </div>

        <div className="flex flex-wrap gap-3">
          <WalkBadge minutes={hotel.walkTimeMinutes} />
          {typeof hotel.distanceSteps === "number" ? (
            <span className="flex items-center gap-1.5 text-slate-700 bg-slate-50 px-3 py-1 rounded-lg text-sm font-bold uppercase tracking-wider">
              <Footprints size={16} /> ~{hotel.distanceSteps} steps
            </span>
          ) : null}
          {highlight === "top" ? (
            <span className="flex items-center gap-1.5 text-amber-700 bg-amber-50 px-3 py-1 rounded-lg text-sm font-bold uppercase tracking-wider">
              <Star size={16} /> Top pick
            </span>
          ) : null}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
          <div className="space-y-1">
            <strong className="text-slate-900 text-xs uppercase tracking-widest block">
              Best for
            </strong>
            <p className="text-slate-600 text-sm">{hotel.bestFor}</p>
          </div>
          <div className="space-y-1">
            <strong className="text-red-600 text-xs uppercase tracking-widest block">
              Watch out for
            </strong>
            <p className="text-slate-600 text-sm italic">{hotel.caution}</p>
          </div>
        </div>
      </div>

      <a
        href={mapsSearchUrl(hotel.name)}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full md:w-auto bg-slate-900 text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-600 transition-all flex items-center justify-center gap-2"
      >
        View on Google Maps <ChevronRight size={18} />
      </a>
    </div>
  );
}

export default function HotelRankingsPage() {
  // Buckets
  const sub5: HotelProperty[] = HARBOR_HOTELS.filter((h) => h.walkTimeMinutes <= 5);
  const fiveToTen: HotelProperty[] = HARBOR_HOTELS.filter(
    (h) => h.walkTimeMinutes >= 6 && h.walkTimeMinutes <= 10
  );
  const elevenToFifteen: HotelProperty[] = HARBOR_HOTELS.filter(
    (h) => h.walkTimeMinutes >= 11 && h.walkTimeMinutes <= 15
  );
  const sixteenToTwenty: HotelProperty[] = HARBOR_HOTELS.filter(
    (h) => h.walkTimeMinutes >= 16 && h.walkTimeMinutes <= 20
  );
  const overTwenty: HotelProperty[] = HARBOR_HOTELS.filter((h) => h.walkTimeMinutes >= 21);

  const topTen = HARBOR_HOTELS.slice(0, 10);

  return (
    <article className="max-w-6xl mx-auto px-4 py-10 space-y-12 text-slate-900">
      {/* Header */}
      <section className="relative overflow-hidden rounded-[3rem] border border-stone-200 bg-stone-50 p-6 md:p-10 shadow-sm">
        <div className="absolute inset-0 bg-[url('/images/entrance.jpg')] bg-cover bg-center opacity-22" />
        <div className="absolute inset-0 bg-stone-50/86" />
        <div className="absolute inset-x-0 top-0 h-full opacity-40 [background-image:linear-gradient(rgba(148,163,184,0.16)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.16)_1px,transparent_1px)] [background-size:28px_28px]" />

        <div className="relative grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
          <div className="space-y-5">
            <p className="inline-flex items-center gap-2 rounded-full border border-stone-200 bg-white/85 px-4 py-2 text-xs font-black uppercase tracking-widest text-sky-800 shadow-sm">
              <MapPin size={14} /> Harbor Blvd hotel guide
            </p>

            <h1 className="font-display text-5xl md:text-7xl text-slate-900 leading-[0.92]">
              Disneyland hotels ranked by walk time
            </h1>

            <p className="max-w-2xl text-lg md:text-xl text-slate-700 leading-relaxed font-medium">
              If you’re searching “closest hotels to Disneyland entrance,” ignore map distance. Around Disneyland,
              <strong> the number that matters is walk time to the entrance gates</strong>.
              This page ranks Harbor Blvd hotels by how fast you can get from the lobby to The Esplanade.
            </p>

            <p className="text-sm text-slate-500">Last updated: {AS_OF_DATE}</p>
          </div>

          <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
            <div className="rounded-2xl border border-stone-200 bg-white/90 p-4 shadow-sm">
              <p className="text-[10px] font-black uppercase tracking-widest text-slate-500">Fastest group</p>
              <p className="mt-1 text-2xl font-black text-slate-900">Under 5 min</p>
            </div>
            <div className="rounded-2xl border border-stone-200 bg-white/90 p-4 shadow-sm">
              <p className="text-[10px] font-black uppercase tracking-widest text-slate-500">Best route</p>
              <p className="mt-1 text-2xl font-black text-slate-900">Harbor side</p>
            </div>
            <div className="rounded-2xl border border-stone-200 bg-slate-900 p-4 text-white shadow-sm">
              <p className="text-[10px] font-black uppercase tracking-widest text-amber-300">Best for</p>
              <p className="mt-1 text-2xl font-black">Early mornings</p>
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <div className="p-6 bg-amber-50 border-l-4 border-amber-400 rounded-r-2xl shadow-sm space-y-2">
          <p className="text-lg font-bold text-amber-900 leading-tight">
            “0.3 miles” can still be a bad hotel choice if the route forces a detour or sends you through slower walking areas.
          </p>
          <p className="text-sm text-amber-900 leading-relaxed">
            Want the proof and the morning security explanation? Read:
            <Link href="/articles/harbor-advantage" className="ml-2 underline font-bold hover:text-slate-900">
              The Harbor Blvd Advantage →
            </Link>
          </p>
        </div>
      </section>

      {/* Quick answers */}
      <section className="bg-white border border-slate-200 rounded-[2.5rem] p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-3 text-blue-600">
          <Info size={22} />
          <h2 className="text-2xl font-black uppercase italic">Quick Answers</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 text-sm text-slate-700 leading-relaxed">
          <div className="space-y-2">
            <p className="font-bold text-slate-900">What are the closest hotels to the Disneyland entrance?</p>
            <p>
              The closest walkable hotels are the{" "}
              <strong>sub-5 minute Harbor Blvd properties</strong> listed below. They’re the fastest “hotel-room-to-gate”
              options you can buy without paying Disney-owned hotel prices.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-bold text-slate-900">What’s the best location for rope drop?</p>
            <p>
              Harbor Blvd across from the main pedestrian entrance. You want a hotel that keeps your morning routine simple:
              short walk, no shuttles, no “surprise” detours.
            </p>
          </div>
        </div>
      </section>

      {/* Top 10 quick table */}
      <section className="space-y-6">
        <h2 className="text-3xl font-black flex items-center gap-2">
          Closest Hotels to Disneyland Entrance{" "}
          <span className="text-sm font-normal text-slate-400 block ml-2">Top 10 (fast scan)</span>
        </h2>

        <div className="overflow-x-auto bg-white border border-slate-200 rounded-[2rem] p-6 shadow-sm">
          <table className="min-w-[720px] w-full text-sm">
            <thead>
              <tr className="text-left text-slate-500">
                <th className="py-3 pr-4 font-black uppercase tracking-widest text-xs">Rank</th>
                <th className="py-3 pr-4 font-black uppercase tracking-widest text-xs">Hotel</th>
                <th className="py-3 pr-4 font-black uppercase tracking-widest text-xs">Walk time</th>
                <th className="py-3 pr-4 font-black uppercase tracking-widest text-xs">Best for</th>
                <th className="py-3 pr-4 font-black uppercase tracking-widest text-xs">Map</th>
              </tr>
            </thead>
            <tbody className="text-slate-800">
              {topTen.map((h, idx) => (
                <tr key={h.name} className="border-t border-slate-100 align-top">
                  <td className="py-4 pr-4 font-bold">{idx + 1}</td>
                  <td className="py-4 pr-4 font-semibold">{h.name}</td>
                  <td className="py-4 pr-4">
                    <span className="inline-flex items-center gap-2 text-blue-700 bg-blue-50 px-3 py-1 rounded-lg font-bold">
                      <Timer size={16} /> {h.walkTimeMinutes} min
                    </span>
                  </td>
                  <td className="py-4 pr-4 text-slate-600">{h.bestFor}</td>
                  <td className="py-4 pr-4">
                    <a
                      href={mapsSearchUrl(h.name)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 font-bold underline hover:text-blue-600"
                    >
                      Google Maps <ChevronRight size={16} />
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <AdSlot id="ad-hotels-mid-1" label="Hotels mid (after table)" />
      </section>

      {/* Methodology */}
      <section className="space-y-6">
        <div className="flex items-center gap-3">
          <ShieldAlert className="text-blue-600" />
          <h2 className="text-2xl font-black uppercase italic tracking-tight">
            How We Measure “Walking Distance”
          </h2>
        </div>

        <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 space-y-4 text-slate-700 leading-relaxed">
          <ul className="list-disc ml-6 space-y-2">
            <li>
              Measured as a real-world walk from <strong>hotel exit to the Disneyland entrance gates</strong> (not “distance to a point on a map”).
            </li>
            <li>Assumes normal walking speed. Strollers and small kids can add time.</li>
            <li>Does not include elevator waits or stopping for coffee.</li>
            <li>
              The goal is a predictable morning: if you plan to arrive before opening, your hotel walk should be simple at 7:00-8:00 AM.
            </li>
          </ul>
          <p className="text-sm text-slate-600 italic">
            If you’re comparing a Disney-owned hotel with Harbor Blvd, the security route difference is the whole story.
            That’s why the Harbor Blvd guide matters.
          </p>
        </div>
      </section>

      {/* Elite Three */}
      <section className="grid grid-cols-1 gap-6">
        <h2 className="text-3xl font-black flex items-center gap-2">
          The Elite Three{" "}
          <span className="text-sm font-normal text-slate-400 block ml-2">
            Closest walks
          </span>
        </h2>

        {sub5.map((hotel, i) => (
          <HotelCard
            key={hotel.name}
            hotel={hotel}
            rank={i + 1}
            highlight={i === 0 ? "top" : "none"}
          />
        ))}
      </section>

      <AdSlot id="ad-hotels-mid-2" label="Hotels mid (after elite)" />

      {/* Next tier: 6–10 */}
      {fiveToTen.length > 0 ? (
        <section className="space-y-6">
          <h2 className="text-2xl font-black uppercase italic tracking-tight">
            Still Walkable: 6–10 Minutes
          </h2>
          <p className="text-slate-700 leading-relaxed">
            This is the sweet spot for a lot of families: still easy for an early start, still practical for a mid-day break,
            and usually more forgiving on price than the sub-5 group.
          </p>
          <div className="grid gap-6">
            {fiveToTen.map((hotel, idx) => (
              <HotelCard
                key={hotel.name}
                hotel={hotel}
                rank={sub5.length + idx + 1}
                highlight="none"
              />
            ))}
          </div>
        </section>
      ) : null}

      {/* 11–15 */}
      {elevenToFifteen.length > 0 ? (
        <section className="space-y-6">
          <h2 className="text-2xl font-black uppercase italic tracking-tight">
            Still Possible for an Early Start: 11-15 Minutes
          </h2>
          <p className="text-slate-700 leading-relaxed">
            These can still work, but you have less room for a slow morning. If you’re trying to be through security and at the gates early,
            you’ll feel the difference. This tier is best when you want to save money but still stay on the Harbor side.
          </p>
          <div className="grid gap-6">
            {elevenToFifteen.map((hotel, idx) => (
              <HotelCard
                key={hotel.name}
                hotel={hotel}
                rank={sub5.length + fiveToTen.length + idx + 1}
                highlight="none"
              />
            ))}
          </div>
        </section>
      ) : null}

      {/* 16–20 */}
      {sixteenToTwenty.length > 0 ? (
        <section className="space-y-6">
          <h2 className="text-2xl font-black uppercase italic tracking-tight">
            Longer Walks: 16–20 Minutes
          </h2>
          <p className="text-slate-700 leading-relaxed">
            At this point, “walking distance” is still true, but it’s not the fast version people imagine.
            If you’re staying here, plan like you’re commuting: leave earlier, and don’t expect to casually bounce back
            to your hotel mid-day without paying for it in time.
          </p>
          <div className="grid gap-6">
            {sixteenToTwenty.map((hotel, idx) => (
              <HotelCard
                key={hotel.name}
                hotel={hotel}
                rank={sub5.length + fiveToTen.length + elevenToFifteen.length + idx + 1}
                highlight="none"
              />
            ))}
          </div>
        </section>
      ) : null}

      {/* 21+ */}
      {overTwenty.length > 0 ? (
        <section className="space-y-6">
          <h2 className="text-2xl font-black uppercase italic tracking-tight">
            “Walkable on Paper”: 21+ Minutes
          </h2>
          <p className="text-slate-700 leading-relaxed">
            If your goal is rope drop, these are usually not the best fit. They can still make sense for price,
            but you should treat them as a trade: you’re saving money and paying in walking time.
          </p>
          <div className="grid gap-6">
            {overTwenty.map((hotel, idx) => (
              <HotelCard
                key={hotel.name}
                hotel={hotel}
                rank={
                  sub5.length +
                  fiveToTen.length +
                  elevenToFifteen.length +
                  sixteenToTwenty.length +
                  idx +
                  1
                }
                highlight="none"
              />
            ))}
          </div>
        </section>
      ) : null}

      <AdSlot id="ad-hotels-bottom" label="Hotels Bottom" />

      {/* Katella note */}
      <section className="bg-red-50 border border-red-100 p-8 rounded-3xl space-y-4">
        <h3 className="text-xl font-bold text-red-900 flex items-center gap-2">
          <AlertTriangle className="text-red-600" /> The “Looks Close on the Map” Problem (Katella)
        </h3>
        <p className="text-red-800 text-sm leading-relaxed">
          Hotels near <strong>Katella Ave</strong> can look “next to Disneyland,” but pedestrian entry is effectively concentrated on
          <strong> Harbor Blvd</strong>. The south side doesn’t have a simple “walk straight in” entrance.
          That detour can turn a short-looking route into a long morning.
        </p>
        <p className="text-red-800 text-sm leading-relaxed">
          If rope drop matters, choose based on <strong>Harbor Blvd walk time</strong>, not “distance from the park.”
        </p>
      </section>

      {/* Internal links / funnel */}
      <section className="pt-2 space-y-4">
        <p className="text-xs font-black text-slate-400 uppercase tracking-[0.2em]">
          Planning Tools
        </p>
        <div className="flex flex-wrap gap-4">
          <Link href="/crowd-calendar" className="text-sm font-bold text-slate-900 hover:text-blue-600 underline">
            2026 Crowd Calendar →
          </Link>
          <Link href="/best-times" className="text-sm font-bold text-slate-900 hover:text-blue-600 underline">
            Best Times to Visit →
          </Link>
          <Link href="/school-breaks-calendar" className="text-sm font-bold text-slate-900 hover:text-blue-600 underline">
            School Break Calendar →
          </Link>
          <Link href="/articles/harbor-advantage" className="text-sm font-bold text-slate-900 hover:text-blue-600 underline">
            Harbor Blvd Advantage (why this works) →
          </Link>
        </div>
      </section>
    </article>
  );
}
