import type { Metadata } from "next";
import { SOCAL_2025_2026 } from "@/lib/school-data";
import { Map, AlertCircle, CalendarDays, Users, Zap } from "lucide-react";
import { AdSlot } from "@/components/AdSlot";

export const metadata: Metadata = {
  title: "Peak Demand Heatmap | AnaheimCrowds",
  description: "Identifying the 2026 windows where regional travel demand creates peak park crowds.",
};

export default function PeakDemandPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 space-y-16 text-slate-900">
      <section className="space-y-4 text-center md:text-left">
        <h1 className="font-display text-5xl md:text-6xl text-slate-900 leading-none">
          Peak Demand <span className="text-sky-800">Heatmap</span>
        </h1>
        <p className="text-xl text-slate-600 leading-relaxed font-medium max-w-2xl">
          Disneyland does not get busy by accident. These are the school-break windows and travel overlaps that turn an ordinary weekday into a much harder park day.
        </p>
      </section>

      <AdSlot id="heatmap-top" label="Heatmap Top Ad" />

      <section className="grid md:grid-cols-3 gap-6">
        <div className="p-6 bg-slate-50 rounded-[2rem] border border-slate-100">
          <Users className="text-sky-800 mb-3" size={24} />
          <h3 className="font-bold text-sm uppercase mb-2">Overlap matters</h3>
          <p className="text-xs text-slate-500 leading-relaxed italic">
            When multiple districts are out at once, Disneyland feels crowded for longer parts of the day.
          </p>
        </div>
        <div className="p-6 bg-slate-50 rounded-[2rem] border border-slate-100">
          <CalendarDays className="text-sky-800 mb-3" size={24} />
          <h3 className="font-bold text-sm uppercase mb-2">Weekdays can still break</h3>
          <p className="text-xs text-slate-500 leading-relaxed italic">
            A Tuesday inside the wrong break window can be worse than a normal Friday outside it.
          </p>
        </div>
        <div className="p-6 bg-slate-50 rounded-[2rem] border border-slate-100">
          <Zap className="text-sky-800 mb-3" size={24} />
          <h3 className="font-bold text-sm uppercase mb-2">What to do with it</h3>
          <p className="text-xs text-slate-500 leading-relaxed italic">
            Use this page to rule out bad windows first, then move to the calendar for exact date picking.
          </p>
        </div>
      </section>

      <section className="space-y-8">
        <div className="flex items-center justify-between border-b border-slate-200 pb-4">
          <h2 className="text-2xl font-black uppercase italic flex items-center gap-2">
            <Map className="text-sky-800" /> 2026 High-Volume Windows
          </h2>
        </div>

        <div className="grid gap-6">
          {SOCAL_2025_2026.map((breakPeriod, index) => (
            <div key={index} className="bg-white border border-slate-200 rounded-[2.5rem] overflow-hidden shadow-sm hover:border-sky-700 transition-all">
              <div className="p-6 border-b border-slate-100 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-slate-50/30">
                <div className="space-y-1">
                  <h4 className="font-black text-xl uppercase italic tracking-tight text-slate-800">
                    {breakPeriod.breakType}
                  </h4>
                  <p className="text-sky-800 font-bold text-sm tracking-tight">
                    Primary Window: {breakPeriod.dateRange}
                  </p>
                </div>
                <div
                  className={`px-4 py-2 rounded-2xl font-black text-[10px] uppercase tracking-[0.2em] shadow-sm ${
                    breakPeriod.coverage === "High" ? "bg-rose-700 text-white" : "bg-sky-800 text-white"
                  }`}
                >
                  {breakPeriod.coverage} Impact Window
                </div>
              </div>

              <div className="p-8 space-y-8">
                <div className="flex gap-4 items-start">
                  <AlertCircle className="text-amber-600 shrink-0 mt-1" size={20} />
                  <div className="space-y-1">
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">What to notice</p>
                    <p className="text-sm text-slate-600 leading-relaxed">{breakPeriod.notes}</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-6 border-t border-slate-50">
                  <div className="space-y-1">
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Los Angeles</p>
                    <p className="text-sm font-bold text-slate-700">{breakPeriod.la}</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Orange Co.</p>
                    <p className="text-sm font-bold text-slate-700">{breakPeriod.oc}</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">San Diego</p>
                    <p className="text-sm font-bold text-slate-700">{breakPeriod.sd}</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Inland Empire</p>
                    <p className="text-sm font-bold text-slate-700">{breakPeriod.ie}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-900 rounded-[3rem] p-10 md:p-16 text-white text-center space-y-6">
        <h2 className="font-display text-4xl text-amber-300">How to use this page</h2>
        <p className="text-slate-300 max-w-2xl mx-auto leading-relaxed">
          If your dates land inside a high-impact window, assume the day will need a tighter morning plan and less margin for wasted time. Rule out the worst windows here, then move to the crowd calendar for exact dates.
        </p>
      </section>
    </div>
  );
}
