import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "School Break Impact 2026 | AnaheimCrowds",
  description: "Why school calendars are one of the biggest drivers of Disneyland crowd pressure in 2026.",
};

export default function SchoolBreaksPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 space-y-10">
      <div className="space-y-4">
        <h1 className="font-display text-5xl text-slate-900">
          School Break Impact
        </h1>
        <p className="text-lg text-slate-600 leading-relaxed">
          The biggest crowd question is usually not the weather. It is how many families are out of school at the same time.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <h2 className="font-bold text-slate-900 mb-2 uppercase text-sm tracking-widest text-rose-700">Late February risk</h2>
          <p className="text-sm text-slate-600">
            Late February can jump quickly when Presidents Day and ski-week style breaks overlap. That is one of the easiest times of year to underestimate.
          </p>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <h2 className="font-bold text-slate-900 mb-2 uppercase text-sm tracking-widest text-rose-700">Mid-October risk</h2>
          <p className="text-sm text-slate-600">
            Mid-October can look ordinary on a local calendar and still get heavy because regional fall breaks push more families into the parks.
          </p>
        </div>
      </div>

      <div className="bg-slate-900 text-white p-8 rounded-3xl">
        <h2 className="text-xl font-bold mb-4">What to take from this</h2>
        <p className="text-slate-300 leading-relaxed">
          A low-break date does not guarantee an easy day, and a high-break date does not guarantee disaster. But once enough districts are out at once, Disneyland stops behaving like a normal weekday park.
        </p>
      </div>
    </div>
  );
}
