import type { Metadata } from "next";
import { HelpCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "FAQ | AnaheimCrowds",
  description: "Common questions about how AnaheimCrowds approaches Disneyland forecasting in 2026.",
  alternates: { canonical: "/faq" },
};

function QA({ q, a }: { q: string; a: string }) {
  return (
    <div className="p-6 bg-white border border-slate-200 rounded-2xl space-y-3 shadow-sm">
      <h2 className="text-lg font-black text-slate-900 flex items-center gap-2 italic">
        <HelpCircle size={18} className="text-blue-600" /> {q}
      </h2>
      <p className="text-slate-600 text-sm leading-relaxed">{a}</p>
    </div>
  );
}

export default function FaqPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 space-y-10 py-12">
      <div className="space-y-4 text-center">
        <h1 className="font-display text-5xl text-slate-900">FAQ</h1>
        <p className="text-slate-500">Straight answers about how the site works and what the forecasts are meant to do.</p>
      </div>

      <div className="space-y-4">
        <QA q="Is this live wait time data?" a="No. Live wait times are already in the official Disneyland app. AnaheimCrowds is for choosing dates, setting expectations, and making a better plan before you walk into the park." />
        <QA q="Can you guarantee a low-crowd day?" a="No. Weather, ride breakdowns, and unplanned events can change the feel of any day. The point of the forecast is not certainty. It is better odds." />
        <QA q="Why does rope drop still matter in 2026?" a="Because the first hour is still the cheapest time-savings window in the park. Paid line-skipping helps, but it does not replace a good date and a strong start." />
        <QA q="Are you affiliated with Disney?" a="No. AnaheimCrowds is an independent planning site built for people who want a clearer read on dates, crowd patterns, and trip tradeoffs." />
      </div>
    </div>
  );
}
