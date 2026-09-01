"use client";

import { useState } from "react";
import { Search, AlertTriangle, CheckCircle, Info, Zap } from "lucide-react";
import { getCrowdEstimate } from "@/lib/crowd-engine";

function getScannerCopy(score: number, date: string) {
  const month = new Date(date).getUTCMonth();

  if (score <= 4) {
    return {
      status: "good" as const,
      text: "This is one of the lighter dates on the calendar. It will not be empty, but it should be easier than most days if you start on time.",
      strategy:
        month >= 5 && month <= 8
          ? "Even on a lighter summer day, use the morning well. Summer still gets busy later, so do your biggest rides early."
          : "Start with your biggest ride first, then use the morning for the rest of your priority list. You do not need to rush all day, but you should still use the early hours well.",
    };
  }

  if (score <= 7) {
    return {
      status: "warning" as const,
      text: "This date is workable, but it is not an easy day. Expect real waits, especially if you get a late start.",
      strategy:
        "Use the first 90 minutes for your biggest rides. Save shows, shopping, and lower-priority attractions for later in the day.",
    };
  }

  return {
    status: "bad" as const,
    text: "This is a crowded date. Lines will build earlier than usual, and the park will feel busier for most of the day.",
    strategy:
      "If you have to go on this date, get there early, decide on your top priorities before you enter, and expect the afternoon to be the busiest part of the day.",
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
          Check a Date
        </p>
        <h2 className="font-display text-4xl md:text-5xl text-slate-900 leading-tight">
          Check your date before you build the trip around it
        </h2>
        <p className="text-slate-600 text-base md:text-lg font-medium max-w-2xl mx-auto">
          Enter a date and see the same 1-10 crowd level used on the calendar, plus a plain-English read on what
          that day is likely to feel like.
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
          <Search size={18} /> Check Date
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
              <p className="text-slate-900 font-black uppercase italic text-sm mb-1">What to expect</p>
              <p className="text-slate-700 font-medium leading-relaxed">{result.text}</p>
            </div>

            <div className="pt-4 border-t border-slate-200/60">
              <p className="text-slate-900 font-black uppercase italic text-sm mb-1 flex items-center gap-2">
                <Zap size={14} className="text-amber-700" /> How to plan for it
              </p>
              <p className="text-sm text-slate-600 leading-relaxed">{result.strategy}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
