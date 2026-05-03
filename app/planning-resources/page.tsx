import { Smartphone, Car, Zap } from "lucide-react";
import { AdSlot } from "@/components/AdSlot";

export default function PlanningResources() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 space-y-16 text-slate-900">
      <section className="space-y-4">
        <h1 className="font-display text-5xl md:text-6xl text-slate-900 leading-none">
          Planning Notes
        </h1>
        <p className="text-xl text-slate-600 leading-relaxed font-medium">
          A good Disneyland day usually comes down to a few small decisions made early enough to matter.
        </p>
      </section>

      <AdSlot id="planning-top" label="Planning Resource Ad" />

      <div className="grid gap-8">
        <div className="bg-white border border-slate-200 rounded-[2.5rem] p-8 shadow-sm">
          <div className="flex items-center gap-3 mb-4 text-sky-800">
            <Smartphone size={24} />
            <h2 className="text-xl font-black uppercase italic">Order food earlier than you think</h2>
          </div>
          <p className="text-slate-600 leading-relaxed">
            Waiting until noon to decide on lunch is how mobile-order windows slide too far into the afternoon. If you know where you want to eat, place the order earlier and adjust the pickup window later if you need to.
          </p>
        </div>

        <div className="bg-white border border-slate-200 rounded-[2.5rem] p-8 shadow-sm">
          <div className="flex items-center gap-3 mb-4 text-sky-800">
            <Car size={24} />
            <h2 className="text-xl font-black uppercase italic">Parking choice changes the morning</h2>
          </div>
          <p className="text-slate-600 leading-relaxed">
            Most people default to Mickey & Friends. On heavier dates, that is not always the fastest move. Sometimes the better play is the option that keeps your arrival flow simpler, even if it is not the one people talk about most.
          </p>
        </div>

        <div className="bg-slate-900 text-white rounded-[2.5rem] p-8 md:p-12 shadow-xl">
          <div className="flex items-center gap-3 mb-6 text-amber-300">
            <Zap size={24} />
            <h2 className="text-2xl font-black uppercase italic tracking-tight">Midday break or midday reset</h2>
          </div>
          <p className="text-slate-300 leading-relaxed mb-6">
            The hardest stretch of the day is usually early afternoon. The park feels hotter, slower, and more crowded even when the score itself is not extreme.
          </p>
          <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700">
            <p className="text-sm text-slate-300">
              If your hotel is close enough, leaving for a couple of hours can save the evening. If it is not, at least use that window differently by shifting to easier attractions, indoor shows, or an early meal.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
