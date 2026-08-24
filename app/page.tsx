import Link from "next/link";
import { CrowdScanner } from "@/components/CrowdScanner";
import { AdSlot } from "@/components/AdSlot";
import { MoveRight, CalendarDays, Hotel, Map } from "lucide-react";

const schoolBreakBars = [
  "bg-emerald-300/60",
  "bg-emerald-400/60",
  "bg-amber-300/60",
  "bg-amber-400/60",
  "bg-rose-400/60",
  "bg-rose-500/60",
  "bg-amber-400/60",
  "bg-emerald-400/60",
  "bg-emerald-300/60",
];

export default function HomePage() {
  return (
    <div className="flex flex-col gap-16 pb-20">
      <section className="relative overflow-hidden px-4 pt-10 md:pt-16">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(180,83,9,0.12),_transparent_35%),linear-gradient(180deg,rgba(255,255,255,0.65),rgba(245,245,244,0.95))]" />
        <div className="absolute inset-x-0 top-0 h-full opacity-40 [background-image:linear-gradient(rgba(148,163,184,0.18)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.18)_1px,transparent_1px)] [background-size:28px_28px]" />

        <div className="relative max-w-6xl mx-auto">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="space-y-7 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-white/80 text-sky-800 px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest border border-stone-200 shadow-sm">
                <CalendarDays size={14} /> Disneyland crowd calendar
              </div>

              <div className="space-y-5">
                <h1 className="font-display text-5xl md:text-7xl text-slate-900 leading-[0.9]">
                  Pick the right week.
                  <br />
                  Skip the wrong crowd.
                </h1>
                <p className="text-xl text-slate-700 font-medium leading-relaxed max-w-2xl mx-auto lg:mx-0">
                  We track the things that actually change Disneyland crowds: school breaks, holiday weeks,
                  Magic Key blockouts, and hotel location. We want to help you pick better dates before
                  the trip gets expensive.
                </p>
              </div>

              <div className="flex flex-wrap justify-center lg:justify-start gap-3">
                <Link
                  href="/crowd-calendar"
                  className="bg-amber-700 text-white px-8 py-4 rounded-2xl font-black uppercase tracking-tight hover:bg-slate-900 transition-all flex items-center gap-2"
                >
                  View Forecast <MoveRight size={20} />
                </Link>
                <Link
                  href="/best-times"
                  className="bg-white text-slate-900 px-8 py-4 rounded-2xl font-black uppercase tracking-tight border border-stone-300 hover:border-amber-700 hover:text-amber-700 transition-all"
                >
                  Best Times
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-[2.5rem] border border-stone-200 bg-white/90 p-6 md:p-8 shadow-2xl shadow-stone-900/10 backdrop-blur-sm">
                <div className="mb-6">
                  <p className="text-xs font-black uppercase tracking-[0.2em] text-slate-500 mb-3">
                    2026 monthly forecast
                  </p>
                  <div className="grid grid-cols-9 gap-2">
                    {schoolBreakBars.map((bar, index) => (
                      <div key={index} className={`h-12 rounded-2xl ${bar}`} />
                    ))}
                  </div>
                </div>
                <CrowdScanner />
              </div>
            </div>
          </div>
        </div>
      </section>

      <AdSlot id="home-mid" label="Homepage Featured Ad" />

      <section className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-8">
        <Link
          href="/methodology"
          className="group space-y-4 p-8 bg-white border border-stone-200 rounded-[2.5rem] shadow-sm hover:border-sky-700 transition-all"
        >
          <div className="bg-sky-50 w-12 h-12 rounded-2xl flex items-center justify-center text-sky-800 group-hover:bg-sky-800 group-hover:text-white transition-colors">
            <CalendarDays size={24} />
          </div>
          <p className="text-xs font-black uppercase tracking-[0.2em] text-slate-500">Ticket prices</p>
          <h3 className="font-display text-3xl text-slate-900 leading-tight">
            Lower-priced days are often the better bet
          </h3>
          <p className="text-sm text-slate-600 leading-relaxed">
            Disney pricing is not perfect, but it usually tells you which weekdays are worth a closer look and
            which "cheap" dates are still likely to be annoying.
          </p>
        </Link>

        <Link
          href="/school-breaks-calendar"
          className="group space-y-4 p-8 bg-white border border-stone-200 rounded-[2.5rem] shadow-sm hover:border-sky-700 transition-all"
        >
          <div className="bg-amber-50 w-12 h-12 rounded-2xl flex items-center justify-center text-amber-700 group-hover:bg-amber-700 group-hover:text-white transition-colors">
            <Map size={24} />
          </div>
          <p className="text-xs font-black uppercase tracking-[0.2em] text-slate-500">School breaks</p>
          <h3 className="font-display text-3xl text-slate-900 leading-tight">
            Out-of-state breaks can wreck an otherwise normal week
          </h3>
          <p className="text-sm text-slate-600 leading-relaxed">
            Local calendars are not enough. We track the outside school breaks that can make a plain Tuesday feel
            much busier than people expect.
          </p>
        </Link>

        <Link
          href="/hotels"
          className="group space-y-4 p-8 bg-slate-900 text-white rounded-[2.5rem] shadow-xl"
        >
          <div className="bg-white/10 w-12 h-12 rounded-2xl flex items-center justify-center text-amber-400">
            <Hotel size={24} />
          </div>
          <p className="text-xs font-black uppercase tracking-[0.2em] text-slate-400">Hotels</p>
          <h3 className="font-display text-3xl text-white leading-tight">
            The right Harbor hotel can save your morning
          </h3>
          <p className="text-sm text-slate-300 leading-relaxed">
            Not every "close" hotel is actually convenient. We focus on the walks that make rope drop easier
            and Disney hotels that are worth paying extra for.
          </p>
        </Link>
      </section>

      <section className="max-w-4xl mx-auto px-4 w-full">
        <div className="bg-sky-800 rounded-[3rem] p-10 md:p-20 text-center text-white space-y-8">
          <h2 className="font-display text-4xl md:text-6xl leading-none">
            Stop guessing.
            <br />
            Start with the calendar.
          </h2>
          <p className="text-sky-100 text-lg font-medium max-w-xl mx-auto">
            If the week is wrong, the rest of the plan gets expensive fast. Start with the forecast, then build hotels and park strategy around it.
          </p>
          <Link
            href="/crowd-calendar"
            className="inline-block bg-white text-sky-800 px-10 py-5 rounded-2xl font-black uppercase tracking-tight hover:bg-slate-900 hover:text-white transition-all"
          >
            See the 2026 Forecast
          </Link>
        </div>
      </section>
    </div>
  );
}
