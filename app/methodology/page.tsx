import type { Metadata } from "next";
import { ShieldCheck, GraduationCap, Ticket, Hotel, Zap } from "lucide-react";
import { AdSlot } from "@/components/AdSlot";

export const metadata: Metadata = {
  title: "Methodology | AnaheimCrowds",
  description: "How AnaheimCrowds weighs school breaks, ticket pricing, convention weeks, and weekday patterns in its 2026 forecasts.",
};

export default function MethodologyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 space-y-16 text-slate-900">
      <section className="space-y-4">
        <h1 className="font-display text-5xl md:text-6xl text-slate-900 leading-none">
          Methodology
        </h1>
        <p className="text-xl text-slate-600 leading-relaxed font-medium">
          Most crowd calendars lean too hard on old attendance patterns. AnaheimCrowds starts with that history, but puts more weight on the signals that actually move Disneyland dates in 2026.
        </p>
      </section>

      <AdSlot id="method-top" label="Methodology Header Ad" />

      <section className="space-y-12">
        <div className="flex items-start gap-6 group">
          <div className="bg-red-50 text-red-600 p-4 rounded-3xl group-hover:bg-red-600 group-hover:text-white transition-colors">
            <GraduationCap size={32} />
          </div>
          <div className="space-y-2">
            <h2 className="text-2xl font-black uppercase italic tracking-tight">School breaks come first</h2>
            <p className="text-slate-600 leading-relaxed">
              School calendars are the biggest driver in the model. We track major districts across Southern California and nearby feeder markets because Disneyland weekday pressure changes fast when families are out of school at the same time.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-6 group">
          <div className="bg-blue-50 text-blue-600 p-4 rounded-3xl group-hover:bg-blue-600 group-hover:text-white transition-colors">
            <Ticket size={32} />
          </div>
          <div className="space-y-2">
            <h2 className="text-2xl font-black uppercase italic tracking-tight">Disney pricing is a useful clue</h2>
            <p className="text-slate-600 leading-relaxed">
              Ticket tiers are not perfect, but they are one of the clearest public demand signals Disney gives you. Lower-priced dates usually deserve a second look. Higher-priced weekends and holiday dates usually confirm what the calendar is already warning you about.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-6 group">
          <div className="bg-amber-50 text-amber-600 p-4 rounded-3xl group-hover:bg-amber-600 group-hover:text-white transition-colors">
            <Hotel size={32} />
          </div>
          <div className="space-y-2">
            <h2 className="text-2xl font-black uppercase italic tracking-tight">Anaheim convention weeks still matter</h2>
            <p className="text-slate-600 leading-relaxed">
              Convention traffic does not always flood the parks, but it can tighten hotels, restaurants, and the general feel around Harbor. That matters most when a date is already borderline and a convention week removes the little bit of breathing room it had.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-6 group">
          <div className="bg-slate-100 text-slate-900 p-4 rounded-3xl group-hover:bg-slate-900 group-hover:text-white transition-colors">
            <Zap size={32} />
          </div>
          <div className="space-y-2">
            <h2 className="text-2xl font-black uppercase italic tracking-tight">Weekday patterns still need context</h2>
            <p className="text-slate-600 leading-relaxed">
              A Tuesday is not automatically good, and a Monday is not automatically bad. We treat weekday patterns as a supporting signal, not the whole answer, because the week itself matters more than the label on the calendar.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-sky-800 rounded-[3rem] p-10 md:p-16 text-white space-y-6">
        <div className="flex items-center gap-3 mb-2">
          <ShieldCheck size={32} />
          <h2 className="text-3xl font-black uppercase italic">How to read the forecast</h2>
        </div>
        <p className="text-sky-100 leading-relaxed text-lg">
          The forecast is meant to help you make better date decisions, not promise a perfect park day. Ride downtime, weather, and event noise can always change the feel of a trip. The goal is better odds and fewer bad surprises.
        </p>
      </section>
    </div>
  );
}
