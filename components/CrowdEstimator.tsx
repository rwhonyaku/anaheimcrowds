"use client";

import React, { useState } from "react";
import { getCrowdEstimate } from "@/lib/crowd-engine";
import { Calendar, AlertCircle, Info, ChevronRight } from "lucide-react";

export default function CrowdEstimator() {
  const [selectedDate, setSelectedDate] = useState("");
  const [result, setResult] = useState<any>(null);

  const handleCheck = () => {
    if (!selectedDate) return;
    const estimate = getCrowdEstimate(selectedDate);
    setResult(estimate);
  };

  return (
    <div className="w-full max-w-xl mx-auto bg-white border border-slate-200 rounded-3xl shadow-xl overflow-hidden">
      <div className="bg-slate-900 p-6 text-white text-center">
        <h3 className="text-xl font-black italic uppercase tracking-tighter">The 2026 Crowd Checker</h3>
        <p className="text-slate-400 text-xs">Based on Regional School Saturation & Historical Data</p>
      </div>

      <div className="p-8 space-y-6">
        <div className="flex flex-col gap-2">
          <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Select Arrival Date</label>
          <div className="flex gap-2">
            <input 
              type="date" 
              className="flex-1 bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 font-bold focus:ring-2 focus:ring-blue-500 outline-none"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
            />
            <button 
              onClick={handleCheck}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-black transition-all flex items-center gap-2"
            >
              CHECK <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {result && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 pt-4 border-t border-slate-100">
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="text-[10px] font-black text-slate-400 uppercase">Projected Saturation</p>
                <h4 className={`text-3xl font-black ${result.color}`}>{result.label}</h4>
              </div>
              <div className="bg-slate-50 w-16 h-16 rounded-2xl flex items-center justify-center border border-slate-100">
                <span className={`text-3xl font-black ${result.color}`}>{result.score}</span>
                <span className="text-[10px] font-bold text-slate-300 absolute mt-10">/ 10</span>
              </div>
            </div>

            <div className="bg-blue-50 p-4 rounded-2xl flex gap-3 items-start">
              <AlertCircle className="text-blue-500 shrink-0" size={18} />
              <p className="text-xs text-blue-800 leading-relaxed font-medium">
                {result.score >= 8 
                  ? "Extreme regional overlap detected. Rope Drop strategy is non-negotiable for this date." 
                  : "Standard patterns detected. Mid-day breaks are viable, but monitor mobile order windows."}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}