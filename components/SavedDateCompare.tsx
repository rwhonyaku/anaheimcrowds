"use client";

import { useEffect, useMemo, useState } from "react";
import { Bookmark, Plus, Trash2 } from "lucide-react";
import { getCrowdEstimate } from "@/lib/crowd-engine";
import { formatLongDate } from "@/lib/date-utils";

const STORAGE_KEY = "anaheimcrowds.savedDates";

function cleanDates(dates: string[]) {
  return Array.from(new Set(dates)).filter(Boolean).sort().slice(0, 8);
}

export function SavedDateCompare() {
  const [date, setDate] = useState("");
  const [savedDates, setSavedDates] = useState<string[]>([]);

  useEffect(() => {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return;

    try {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed)) setSavedDates(cleanDates(parsed));
    } catch {
      setSavedDates([]);
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(savedDates));
  }, [savedDates]);

  const rows = useMemo(
    () =>
      savedDates.map((savedDate) => {
        const estimate = getCrowdEstimate(savedDate);
        const day = new Date(`${savedDate}T12:00:00`).toLocaleDateString("en-US", {
          weekday: "long",
        });

        return {
          date: savedDate,
          label: formatLongDate(savedDate),
          score: estimate.score,
          level: estimate.label,
          day,
        };
      }),
    [savedDates]
  );

  const bestRow = rows.reduce<(typeof rows)[number] | null>((best, row) => {
    if (!best) return row;
    return row.score < best.score ? row : best;
  }, null);

  function addDate() {
    if (!date) return;
    setSavedDates((current) => cleanDates([...current, date]));
    setDate("");
  }

  function removeDate(target: string) {
    setSavedDates((current) => current.filter((savedDate) => savedDate !== target));
  }

  return (
    <section className="rounded-[2.5rem] border border-stone-200 bg-white p-6 shadow-sm md:p-8">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
        <div className="max-w-xl space-y-3">
          <div className="flex items-center gap-2 text-sky-800">
            <Bookmark size={20} />
            <h2 className="text-2xl font-black">Save and compare dates</h2>
          </div>
          <p className="text-slate-600 leading-relaxed">
            Save a few possible park days, then come back later and compare them again. Your list stays in this browser.
          </p>
        </div>

        <div className="flex w-full flex-col gap-2 sm:flex-row lg:max-w-md">
          <input
            type="date"
            value={date}
            onChange={(event) => setDate(event.target.value)}
            className="min-h-12 flex-1 rounded-2xl border border-stone-300 bg-white px-4 font-bold text-slate-900 outline-none focus:ring-2 focus:ring-amber-600"
          />
          <button
            type="button"
            onClick={addDate}
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl bg-sky-800 px-5 font-black uppercase tracking-tight text-white hover:bg-slate-900"
          >
            <Plus size={18} /> Add
          </button>
        </div>
      </div>

      <div className="mt-6 grid gap-3">
        {rows.length === 0 ? (
          <p className="rounded-2xl bg-slate-50 p-4 text-sm text-slate-600">
            Add two or three possible dates to see which one looks easiest.
          </p>
        ) : (
          rows.map((row) => (
            <div
              key={row.date}
              className={`grid gap-3 rounded-2xl border p-4 md:grid-cols-[1fr_auto_auto] md:items-center ${
                bestRow?.date === row.date
                  ? "border-emerald-200 bg-emerald-50"
                  : "border-slate-200 bg-slate-50"
              }`}
            >
              <div>
                <p className="font-black text-slate-900">{row.label}</p>
                <p className="text-sm text-slate-600">{row.day}</p>
              </div>
              <div className="text-left md:text-right">
                <p className="text-2xl font-black text-slate-900">{row.score}/10</p>
                <p className="text-xs font-bold uppercase tracking-widest text-slate-500">{row.level}</p>
              </div>
              <button
                type="button"
                onClick={() => removeDate(row.date)}
                aria-label={`Remove ${row.label}`}
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-500 hover:text-rose-700"
              >
                <Trash2 size={16} />
              </button>
            </div>
          ))
        )}
      </div>
    </section>
  );
}
