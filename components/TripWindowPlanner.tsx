"use client";

import { useEffect, useMemo, useState } from "react";
import { CalendarRange, Printer, Save, Share2 } from "lucide-react";
import { HARBOR_HOTELS } from "@/lib/hotel-data";
import { DateReasons } from "@/components/DateReasons";
import { getCrowdEstimate } from "@/lib/crowd-engine";
import { eachDateInRange, formatLongDate, isValidDate } from "@/lib/date-utils";

const STORAGE_KEY = "anaheimcrowds.tripWindow";

type SavedTrip = {
  arrival: string;
  departure: string;
  hotel?: string;
  notes?: string;
};

export function TripWindowPlanner() {
  const [arrival, setArrival] = useState("");
  const [departure, setDeparture] = useState("");
  const [savedMessage, setSavedMessage] = useState("");
  const [hotel, setHotel] = useState("");
  const [notes, setNotes] = useState("");
  const [shareUrl, setShareUrl] = useState("");
  const selectedHotel = HARBOR_HOTELS.find((item) => item.name === hotel);

  useEffect(() => {
    try {
      const shared = new URLSearchParams(window.location.hash.slice(1)).get("trip");
      const raw = shared ?? window.localStorage.getItem(STORAGE_KEY);
      if (!raw) return;
      const parsed = JSON.parse(raw) as SavedTrip;
      if (isValidDate(parsed?.arrival)) setArrival(parsed.arrival);
      if (isValidDate(parsed?.departure)) setDeparture(parsed.departure);
      if (typeof parsed?.hotel === "string" && HARBOR_HOTELS.some((item) => item.name === parsed.hotel)) setHotel(parsed.hotel);
      if (typeof parsed?.notes === "string") setNotes(parsed.notes.slice(0, 2000));
    } catch {
      setSavedMessage("Your saved trip could not be loaded.");
    }
  }, []);

  const tripDays = useMemo(() => {
    const dates = eachDateInRange(arrival, departure);

    if (dates.length > 14) return [];
    return dates.map((date) => {
      const estimate = getCrowdEstimate(date);
      const weekday = new Date(`${date}T12:00:00`).toLocaleDateString("en-US", {
        weekday: "long",
      });

      return {
        date,
        label: formatLongDate(date),
        weekday,
        score: estimate.score,
        reasons: estimate.reasons,
        level: estimate.label,
      };
    });
  }, [arrival, departure]);

  const bestDays = [...tripDays].sort((a, b) => a.score - b.score).slice(0, 3);
  const hardestDay = [...tripDays].sort((a, b) => b.score - a.score)[0];
  const firstBestDay = bestDays[0];

  function saveTrip() {
    if (!tripDays.length) return;
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify({ arrival, departure, hotel, notes }));
    } catch {
      setSavedMessage("Your browser could not save this trip.");
      return;
    }
    setSavedMessage("Saved in this browser.");
    window.setTimeout(() => setSavedMessage(""), 2500);
  }

  async function shareTrip() {
    const url = new URL("/crowd-calendar", window.location.origin);
    url.hash = new URLSearchParams({ trip: JSON.stringify({ arrival, departure, hotel, notes }) }).toString();
    setShareUrl(url.toString());
    try {
      await navigator.clipboard.writeText(url.toString());
      setSavedMessage("Link copied. It includes your hotel and notes, so share it only with people you choose.");
    } catch {
      setSavedMessage("Your trip link is ready below. It includes your hotel and notes.");
    }
  }

  return (
    <section className="trip-plan rounded-[2.5rem] border border-stone-200 bg-white p-6 shadow-sm md:p-8">
      <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
        <div className="max-w-2xl space-y-3">
          <div className="flex items-center gap-2 text-sky-800">
            <CalendarRange size={22} />
            <h2 className="text-2xl font-black">Your Disneyland trip plan</h2>
          </div>
          <p className="text-slate-600 leading-relaxed">
            Enter your arrival and departure dates to see which park days look easiest, which one needs the tightest plan,
            and where a break day may make sense.
          </p>
        </div>
      </div>

      <div className="mt-6 grid gap-3 sm:grid-cols-2 md:items-end">
        <label className="grid gap-2 text-sm font-bold text-slate-700">
          Arrival
          <input
            type="date"
            value={arrival}
            onChange={(event) => setArrival(event.target.value)}
            className="min-h-12 rounded-2xl border border-stone-300 bg-white px-4 font-bold text-slate-900 outline-none focus:ring-2 focus:ring-amber-600"
          />
        </label>
        <label className="grid gap-2 text-sm font-bold text-slate-700">
          Departure
          <input
            type="date"
            value={departure}
            onChange={(event) => setDeparture(event.target.value)}
            className="min-h-12 rounded-2xl border border-stone-300 bg-white px-4 font-bold text-slate-900 outline-none focus:ring-2 focus:ring-amber-600"
          />
        </label>
        <button
          type="button"
          onClick={saveTrip}
          disabled={tripDays.length === 0}
          className="inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl bg-sky-800 px-5 font-black uppercase tracking-tight text-white hover:bg-slate-900 disabled:cursor-not-allowed disabled:bg-slate-300"
        >
          <Save size={18} /> Save
        </button>
        <button
          type="button"
          onClick={() => window.print()}
          disabled={tripDays.length === 0}
          className="inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl border border-stone-300 bg-white px-5 font-black uppercase tracking-tight text-slate-900 hover:border-amber-700 hover:text-amber-700 disabled:cursor-not-allowed disabled:text-slate-300"
        >
          <Printer size={18} /> Print
        </button>
      </div>

      {savedMessage ? <p className="mt-3 text-sm font-bold text-emerald-700">{savedMessage}</p> : null}

      <div className="mt-6 grid gap-4">
        <label className="grid gap-2 text-sm font-bold text-slate-700">
          Hotel (optional)
          <select value={hotel} onChange={(event) => setHotel(event.target.value)} className="min-h-12 w-full rounded-lg border border-stone-300 bg-white px-3">
            <option value="">Choose a hotel</option>
            {HARBOR_HOTELS.map((item) => <option key={item.name}>{item.name}</option>)}
          </select>
        </label>
        {selectedHotel && <p className="text-sm text-slate-700">{selectedHotel.name}: about {selectedHotel.walkTimeMinutes} minutes to the entrance gates, before security and other stops.</p>}
        <label className="grid gap-2 text-sm font-bold text-slate-700">
          Your notes
          <textarea value={notes} maxLength={2000} onChange={(event) => setNotes(event.target.value)} rows={3} className="w-full rounded-lg border border-stone-300 p-3" />
        </label>
        <p className="hidden print:block whitespace-pre-wrap">{notes}</p>
        <button type="button" onClick={shareTrip} disabled={!tripDays.length} className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-stone-300 px-4 font-bold disabled:opacity-40"><Share2 size={18} /> Share trip</button>
        {shareUrl && <label className="grid gap-2 text-sm font-bold">Trip link<input readOnly value={shareUrl} onFocus={(event) => event.target.select()} className="min-w-0 w-full rounded-lg border p-3 text-sm font-normal" /></label>}
      </div>

      {tripDays.length > 0 ? (
        <div className="mt-8 space-y-6">
          <p className="font-bold text-slate-900">{formatLongDate(arrival)} to {formatLongDate(departure)}</p>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-4">
              <p className="text-xs font-black uppercase tracking-widest text-emerald-800">Best park day</p>
              <p className="mt-1 font-black text-slate-900">{firstBestDay?.label}</p>
              <p className="text-sm text-slate-700">{firstBestDay?.score}/10 crowd level</p>
            </div>
            <div className="rounded-2xl border border-blue-200 bg-blue-50 p-4">
              <p className="text-xs font-black uppercase tracking-widest text-blue-800">Another date to consider</p>
              <p className="mt-1 font-black text-slate-900">{bestDays[1]?.label ?? firstBestDay?.label}</p>
              <p className="text-sm text-slate-700">Use the easier day for your longest park plan.</p>
            </div>
            <div className="rounded-2xl border border-rose-200 bg-rose-50 p-4">
              <p className="text-xs font-black uppercase tracking-widest text-rose-800">Hardest day</p>
              <p className="mt-1 font-black text-slate-900">{hardestDay?.label}</p>
              <p className="text-sm text-slate-700">{hardestDay?.score}/10 crowd level</p>
            </div>
          </div>

          <div className="grid gap-2">
            {tripDays.map((day) => (
              <div key={day.date} className="grid gap-2 rounded-2xl border border-slate-200 bg-slate-50 p-4 md:grid-cols-[1fr_auto] md:items-center">
                <div>
                  <p className="font-bold text-slate-900">{day.label}</p>
                  <DateReasons reasons={day.reasons} />
                  <p className="text-sm text-slate-600">
                    {day.score >= 8
                      ? "Make this a lighter park day if you can."
                      : day.score <= 4
                        ? "Good candidate for your biggest park day."
                        : "Workable with an early start."}
                  </p>
                </div>
                <p className="text-xl font-black text-slate-900">{day.score}/10</p>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <p className="mt-6 rounded-2xl bg-slate-50 p-4 text-sm text-slate-600">
          {arrival && departure && arrival > departure
            ? "Departure must be on or after arrival."
            : eachDateInRange(arrival, departure).length > 14
              ? "Choose up to 14 days, including arrival and departure."
              : "Pick a date range up to 14 days long to compare each day."}
        </p>
      )}
    </section>
  );
}
