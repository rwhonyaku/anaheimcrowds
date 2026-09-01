"use client";

import { useMemo, useState } from "react";
import { Footprints, Hotel, MapPin } from "lucide-react";
import { HARBOR_HOTELS } from "@/lib/hotel-data";

export function HotelDecisionHelper() {
  const [hotelName, setHotelName] = useState(HARBOR_HOTELS[0]?.name ?? "");

  const hotel = useMemo(
    () => HARBOR_HOTELS.find((item) => item.name === hotelName) ?? HARBOR_HOTELS[0],
    [hotelName]
  );

  if (!hotel) return null;

  const walkNote =
    hotel.walkTimeMinutes <= 5
      ? "This is one of the easiest Harbor-side walks for early mornings and midday breaks."
      : hotel.walkTimeMinutes <= 10
        ? "This is still a practical walk, but mornings will feel better if everyone is ready before you leave the room."
        : "This can work, but the walk back at night will feel longer than it looks on a map.";

  return (
    <section className="rounded-[2.5rem] border border-stone-200 bg-white p-6 shadow-sm md:p-8">
      <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-sky-800">
            <Hotel size={22} />
            <h2 className="text-2xl font-black">Check a hotel walk</h2>
          </div>
          <p className="text-slate-600 leading-relaxed">
            Choose a hotel from the current Harbor list and see whether the walk is easy enough for early starts and afternoon breaks.
          </p>
          <select
            value={hotelName}
            onChange={(event) => setHotelName(event.target.value)}
            className="min-h-12 w-full rounded-2xl border border-stone-300 bg-white px-4 font-bold text-slate-900 outline-none focus:ring-2 focus:ring-amber-600"
          >
            {HARBOR_HOTELS.map((option) => (
              <option key={option.name} value={option.name}>
                {option.name}
              </option>
            ))}
          </select>
        </div>

        <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-5">
          <p className="text-xs font-black uppercase tracking-widest text-slate-500">Selected hotel</p>
          <h3 className="mt-1 text-2xl font-black text-slate-900">{hotel.name}</h3>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            <div className="rounded-2xl bg-white p-4">
              <p className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-sky-800">
                <Footprints size={15} /> Walk time
              </p>
              <p className="mt-1 text-2xl font-black text-slate-900">{hotel.walkTimeMinutes} minutes</p>
            </div>
            <div className="rounded-2xl bg-white p-4">
              <p className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-amber-700">
                <MapPin size={15} /> Best for
              </p>
              <p className="mt-1 text-sm font-bold text-slate-800">{hotel.bestFor}</p>
            </div>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-slate-700">{walkNote}</p>
          <p className="mt-2 text-sm leading-relaxed text-slate-600">{hotel.caution}</p>
        </div>
      </div>
    </section>
  );
}
