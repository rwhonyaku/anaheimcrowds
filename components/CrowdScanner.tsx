"use client";

import { useState } from "react";
import { Search, AlertTriangle, CheckCircle, Info, Zap } from "lucide-react";
import { getCrowdEstimate } from "@/lib/crowd-engine";

function getScannerCopy(score: number, date: string) {
  const month = new Date(date).getUTCMonth();

  if (score <= 4) {
    return {
      status: "good" as const,
      text: "This is one of the lighter dates on the calendar. That does not mean empty, but it does mean you have room to make normal mistakes and still have a good day.",
      strategy:
        month >= 5 && month <= 8
          ? "Even on a lighter summer date, use the first 90 minutes well. The score is soft for the season, not soft in an absolute sense."
          : "Start with one true headliner, then let the day breathe a little. You do not need panic-mode rope drop, but you should still use the morning on purpose.",
    };
  }

  if (score <= 7) {
    return {
      status: "warning" as const,
      text: "This is a workable date, not a free pass. Expect real waits, but a day you can still control if you do not waste the morning.",
      strategy:
        "Treat the first 90 minutes like your advantage window. Do the high-demand rides first and leave lower-capacity filler or shows for later.",
    };
  }

  return {
    status: "bad" as const,
    text: "This is a hard date. The park will feel tighter, waits will stack earlier, and a casual start will cost you more than usual.",
    strategy:
      "If this date is locked in, get through security early, narrow the priority list before you enter, and assume the afternoon will be slower and more crowded than you want.",
  };
}

export function CrowdScanner() {
  const [date, setDate] = useState("");
  const [result, setResult] = useState<{
    score: number;
    text: string;
    status: "good" | "warning" | "bad";
    strategy: string;
  } | null>(null);

  const scanDate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!date) return;

    const forecast = getCrowdEstimate(date);
    const copy = getScannerCopy(forecast.score, date);

    setResult({
      score: forecast.score,
      status: copy.status,
      text: copy.text,
      strategy: copy.strategy,
    });
  };

  return (
    <div className="space-y-8">
      <div className="text-center space-y-3">
        <p className="text-xs font-black uppercase tracking-[0.2em] text-slate-500">
          Start Here
        </p>
        <h2 className="font-display text-4xl md:text-5xl text-slate-900 leading-tight">
          Check your date before you build the trip around it
        </h2>
        <p className="text-slate-600 text-base md:text-lg font-medium max-w-2xl mx-auto">
          Enter a date and see the same 1-10 forecast logic the calendar uses, plus the practical version of what that score means.
        </p>
      </div>

      <form onSubmit={scanDate} className="max-w-3xl mx-auto flex flex-col md:flex-row gap-3">
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="flex-1 bg-white border border-stone-300 rounded-2xl px-6 py-5 text-slate-900 text-lg font-bold focus:ring-2 focus:ring-amber-600 outline-none transition-all"
        />
        <button
          type="submit"
          className="bg-sky-800 text-white px-8 py-5 rounded-2xl font-black uppercase tracking-tight hover:bg-slate-900 transition-all flex items-center justify-center gap-2 whitespace-nowrap"
        >
          <Search size={18} /> Scan Date
        </button>
      </form>

      {result && (
        <div
          className={`mt-6 overflow-hidden rounded-[2.5rem] border animate-in fade-in slide-in-from-bottom-4 duration-500 ${
            result.status === "good"
              ? "bg-emerald-50 border-emerald-200"
              : result.status === "warning"
              ? "bg-amber-50 border-amber-200"
              : "bg-rose-50 border-rose-200"
          }`}
        >
          <div className="p-8 space-y-4">
            <div className="flex items-center justify-between">
              <span
                className={`font-display text-5xl ${
                  result.status === "good"
                    ? "text-emerald-700"
                    : result.status === "warning"
                    ? "text-amber-700"
                    : "text-rose-700"
                }`}
              >
                {result.score}/10
              </span>
              <div
                className={`p-2 rounded-xl ${
                  result.status === "good"
                    ? "bg-emerald-100 text-emerald-700"
                    : result.status === "warning"
                    ? "bg-amber-100 text-amber-700"
                    : "bg-rose-100 text-rose-700"
                }`}
              >
                {result.status === "good" && <CheckCircle size={24} />}
                {result.status === "warning" && <Info size={24} />}
                {result.status === "bad" && <AlertTriangle size={24} />}
              </div>
            </div>

            <div>
              <p className="text-slate-900 font-black uppercase italic text-sm mb-1">What this day feels like</p>
              <p className="text-slate-700 font-medium leading-relaxed">{result.text}</p>
            </div>

            <div className="pt-4 border-t border-slate-200/60">
              <p className="text-slate-900 font-black uppercase italic text-sm mb-1 flex items-center gap-2">
                <Zap size={14} className="text-amber-700" /> What to do about it
              </p>
              <p className="text-sm text-slate-600 leading-relaxed">{result.strategy}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
