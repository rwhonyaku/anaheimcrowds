import Link from "next/link";
import { CrowdScanner } from "@/components/CrowdScanner";
import { AdSlot } from "@/components/AdSlot";
import { EditorialImage } from "@/components/EditorialImage";
import { MoveRight, CalendarDays, Hotel, Map, Search, Clock3 } from "lucide-react";

const sampleCalendarDays = [
  { day: "Mon", date: "14", score: 3, color: "bg-emerald-100 text-emerald-800 border-emerald-200" },
  { day: "Tue", date: "15", score: 3, color: "bg-emerald-100 text-emerald-800 border-emerald-200" },
  { day: "Wed", date: "16", score: 4, color: "bg-emerald-100 text-emerald-800 border-emerald-200" },
  { day: "Thu", date: "17", score: 5, color: "bg-amber-100 text-amber-800 border-amber-200" },
  { day: "Fri", date: "18", score: 7, color: "bg-amber-100 text-amber-800 border-amber-200" },
  { day: "Sat", date: "19", score: 8, color: "bg-rose-100 text-rose-800 border-rose-200" },
  { day: "Sun", date: "20", score: 7, color: "bg-amber-100 text-amber-800 border-amber-200" },
];

export default function HomePage() {
  return (
    <div className="flex flex-col gap-16 pb-20">
      <section className="relative overflow-hidden px-4 pt-8 md:pt-12">
        <div className="absolute inset-0 bg-[url('/images/entrance.jpg')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-stone-50/90" />
        <div className="absolute inset-x-0 top-0 h-full opacity-45 [background-image:linear-gradient(rgba(148,163,184,0.18)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.18)_1px,transparent_1px)] [background-size:28px_28px]" />

        <div className="relative max-w-6xl mx-auto">
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div className="space-y-7 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-white/80 text-sky-800 px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest border border-stone-200 shadow-sm">
                <CalendarDays size={14} /> Disneyland crowd calendar 2026
              </div>

              <div className="space-y-5">
                <h1 className="font-display text-5xl md:text-7xl text-slate-900 leading-[0.92]">
                  Disneyland crowd calendar and date estimator
                </h1>
                <p className="text-xl text-slate-700 font-medium leading-relaxed max-w-2xl mx-auto lg:mx-0">
                  Check a 2026 Disneyland date, compare expected crowd levels, and see which weeks are easier before
                  you book tickets or a hotel near the parks.
                </p>
              </div>

              <div className="flex flex-wrap justify-center lg:justify-start gap-3">
                <Link
                  href="/crowd-calendar"
                  className="bg-amber-700 text-white px-8 py-4 rounded-2xl font-black uppercase tracking-tight hover:bg-slate-900 transition-all flex items-center gap-2"
                >
                  View Crowd Calendar <MoveRight size={20} />
                </Link>
                <Link
                  href="/best-times"
                  className="bg-white text-slate-900 px-8 py-4 rounded-2xl font-black uppercase tracking-tight border border-stone-300 hover:border-amber-700 hover:text-amber-700 transition-all"
                >
                  Best Dates
                </Link>
              </div>

              <div className="grid grid-cols-3 gap-3 max-w-xl mx-auto lg:mx-0 text-left">
                <div className="rounded-2xl border border-stone-200 bg-white/85 p-4 shadow-sm">
                  <p className="text-[10px] font-black uppercase tracking-widest text-slate-500">Crowd level</p>
                  <p className="mt-1 text-2xl font-black text-slate-900">1-10</p>
                </div>
                <div className="rounded-2xl border border-stone-200 bg-white/85 p-4 shadow-sm">
                  <p className="text-[10px] font-black uppercase tracking-widest text-slate-500">Best window</p>
                  <p className="mt-1 text-lg font-black text-slate-900">Sep 14-24</p>
                </div>
                <div className="rounded-2xl border border-stone-200 bg-white/85 p-4 shadow-sm">
                  <p className="text-[10px] font-black uppercase tracking-widest text-slate-500">Updated</p>
                  <p className="mt-1 text-lg font-black text-slate-900">2026</p>
                </div>
              </div>

              <EditorialImage
                src="/images/scnic.jpg"
                alt="Small World and a topiary at Disneyland on a sunny day"
                caption="Original AnaheimCrowds photo from Disneyland."
                priority
                imageClassName="aspect-[16/7] max-h-52 object-cover"
                className="max-w-xl mx-auto lg:mx-0"
              />
            </div>

            <div className="relative">
              <div className="rounded-[2.5rem] border border-stone-200 bg-white/95 p-5 md:p-7 shadow-2xl shadow-stone-900/15 backdrop-blur-sm">
                <div className="grid gap-5">
                  <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-5">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-xs font-black uppercase tracking-[0.2em] text-slate-500">
                          Example week
                        </p>
                        <h2 className="mt-1 text-2xl font-black text-slate-900">
                          September 2026 crowd levels
                        </h2>
                      </div>
                      <div className="rounded-2xl bg-sky-800 px-3 py-2 text-xs font-black uppercase tracking-widest text-white">
                        Anaheim
                      </div>
                    </div>

                    <div className="mt-5 grid grid-cols-7 gap-2">
                      {sampleCalendarDays.map((day) => (
                        <div
                          key={`${day.day}-${day.date}`}
                          className={`min-h-20 rounded-2xl border p-2 text-center ${day.color}`}
                        >
                          <p className="text-[10px] font-black uppercase tracking-widest opacity-75">{day.day}</p>
                          <p className="mt-1 text-sm font-bold">{day.date}</p>
                          <p className="mt-1 text-2xl font-black">{day.score}</p>
                        </div>
                      ))}
                    </div>

                    <div className="mt-4 grid gap-2 text-sm text-slate-700 md:grid-cols-2">
                      <p className="flex items-center gap-2">
                        <Search size={16} className="text-sky-800" /> Search any 2026 date
                      </p>
                      <p className="flex items-center gap-2">
                        <Clock3 size={16} className="text-amber-700" /> Plan mornings around the crowd level
                      </p>
                    </div>
                  </div>

                  <CrowdScanner />
                </div>
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
