import type { Metadata } from "next";
import { Target } from "lucide-react";

export const metadata: Metadata = {
  title: "Tactical Definitions | AnaheimCrowds",
  description: "A working glossary for AnaheimCrowds terms and Disneyland planning language in 2026.",
  alternates: { canonical: "/definitions" },
};

const TERMS = [
  {
    term: "The Esplanade",
    definition: "The open space between Disneyland and DCA. Where you stand here before open still shapes the first part of your morning.",
  },
  {
    term: "Multi-Pass Saturation",
    definition: "The point in the day when too much attraction capacity is going to Lightning Lane returns and standby stops moving well.",
  },
  {
    term: "Tier 0 Trap",
    definition: "A low-priced date that still feels crowded because locals, expiring offers, or event pressure fill the park anyway.",
  },
  {
    term: "Single Rider Split",
    definition: "The practical trade where your group separates for speed on a ride that rewards it.",
  },
];

export default function DefinitionsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 space-y-8 py-12">
      <h1 className="font-display text-5xl text-slate-900">
        Tactical <span className="text-sky-800">Glossary</span>
      </h1>

      <div className="grid grid-cols-1 gap-4">
        {TERMS.map((term) => (
          <div key={term.term} className="group p-6 bg-white border border-slate-200 rounded-2xl hover:border-sky-800 transition-all shadow-sm">
            <h3 className="text-xl font-black text-slate-900 mb-2 group-hover:text-sky-800">{term.term}</h3>
            <p className="text-slate-600 leading-relaxed text-sm">{term.definition}</p>
          </div>
        ))}
      </div>

      <section className="p-8 bg-slate-50 rounded-3xl border border-slate-100 flex flex-col md:flex-row gap-6 items-center">
        <div className="bg-sky-800 p-4 rounded-full text-white">
          <Target size={32} />
        </div>
        <div>
          <h2 className="text-lg font-bold">Why terminology still matters</h2>
          <p className="text-sm text-slate-500">
            A lot of Disneyland advice gets fuzzy because people use the same words for different things. The point of this glossary is clarity, not insider cosplay.
          </p>
        </div>
      </section>
    </div>
  );
}
