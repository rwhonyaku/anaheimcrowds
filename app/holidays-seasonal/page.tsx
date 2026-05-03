import type { Metadata } from "next";
import { AdSlot } from "@/components/AdSlot";
import { Ghost, TreePine, Heart, PartyPopper, Info } from "lucide-react";

export const metadata: Metadata = {
  title: "Seasonal Patterns 2026 | AnaheimCrowds",
  description: "How seasonal events and holiday periods change the feel of Disneyland across the year.",
};

export default function HolidaysPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 space-y-16 text-slate-900">
      <section className="space-y-4">
        <h1 className="font-display text-5xl md:text-6xl text-slate-900 leading-none">
          Seasonal Patterns
        </h1>
        <p className="text-xl text-slate-600 leading-relaxed font-medium">
          Seasons at Disneyland change more than the decorations. They shift crowd shape, park energy, and how much patience a day will require.
        </p>
      </section>

      <AdSlot id="seasons-top" label="Seasonal Header Ad" />

      <div className="grid gap-8">
        <div className="group bg-white border border-slate-200 rounded-[2.5rem] p-8 hover:border-orange-300 transition-all shadow-sm">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-orange-50 text-orange-600 rounded-2xl"><Ghost /></div>
            <h2 className="text-2xl font-black uppercase italic tracking-tight text-slate-800">Halloween season</h2>
          </div>
          <div className="space-y-4">
            <p className="text-sm text-slate-600 leading-relaxed">
              Late August through October 31.
            </p>
            <p className="text-sm text-slate-600 leading-relaxed">
              Halloween season now brings its own travel demand. Even weekdays that look mild on pricing can still feel busy because the park has more seasonal purpose: party nights, themed food, repeat rides, and guests who are staying late on purpose.
            </p>
            <div className="bg-orange-50/50 p-4 rounded-2xl border-l-4 border-orange-400">
              <p className="text-xs text-orange-700 leading-relaxed">
                The most common mistake is assuming October behaves like a normal shoulder month. It does not.
              </p>
            </div>
          </div>
        </div>

        <div className="group bg-white border border-slate-200 rounded-[2.5rem] p-8 hover:border-red-300 transition-all shadow-sm">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-red-50 text-red-600 rounded-2xl"><TreePine /></div>
            <h2 className="text-2xl font-black uppercase italic tracking-tight text-slate-800">Holiday season</h2>
          </div>
          <div className="space-y-4">
            <p className="text-sm text-slate-600 leading-relaxed">
              Mid-November through early January.
            </p>
            <p className="text-sm text-slate-600 leading-relaxed">
              This is the part of the year where Disneyland can feel most unforgiving. Early December can still work well, but once the late-December travel wave arrives, the whole park moves slower and stays full longer.
            </p>
          </div>
        </div>

        <div className="group bg-white border border-slate-200 rounded-[2.5rem] p-8 hover:border-pink-300 transition-all shadow-sm">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-pink-50 text-pink-600 rounded-2xl"><Heart /></div>
            <h2 className="text-2xl font-black uppercase italic tracking-tight text-slate-800">Winter stretch</h2>
          </div>
          <div className="space-y-4">
            <p className="text-sm text-slate-600 leading-relaxed">
              Mid-January through February.
            </p>
            <p className="text-sm text-slate-600 leading-relaxed">
              This is where the calmer dates usually live, especially once holiday travel clears. It is not perfect, and Presidents Day still bends the month, but this is where the calendar starts giving you real room to choose better weekdays.
            </p>
          </div>
        </div>

        <div className="group bg-white border border-slate-200 rounded-[2.5rem] p-8 hover:border-blue-300 transition-all shadow-sm">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-blue-50 text-blue-600 rounded-2xl"><PartyPopper /></div>
            <h2 className="text-2xl font-black uppercase italic tracking-tight text-slate-800">Grad Nite dates</h2>
          </div>
          <div className="space-y-4">
            <p className="text-sm text-slate-600 leading-relaxed">
              Select dates in May and June.
            </p>
            <p className="text-sm text-slate-600 leading-relaxed">
              These dates do not always destroy ride waits, but they can change the mood of the day and make evenings feel louder, fuller, and harder to manage than the score alone suggests.
            </p>
          </div>
        </div>
      </div>

      <AdSlot id="seasons-bottom" label="Seasonal Footer Ad" />

      <section className="bg-slate-900 rounded-[3rem] p-10 md:p-16 text-white space-y-6">
        <div className="flex items-center gap-3 text-amber-300 mb-2">
          <Info size={24} />
          <h2 className="text-2xl font-black uppercase italic">Simple rule</h2>
        </div>
        <p className="text-slate-300 leading-relaxed">
          Decorations and events matter, but the harder days usually come when seasonality stacks with a school-break window. Always check the seasonal context and the school calendar together before you book around a holiday period.
        </p>
      </section>
    </div>
  );
}
