import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CalendarDays, AlertTriangle, CheckCircle2 } from "lucide-react";
import { AdSlot } from "@/components/AdSlot";
import { MonthNavigation } from "@/components/MonthNavigation";
import { getMonthGuide2027, MONTH_GUIDES_2027 } from "@/lib/month-guide-2027";

type PageProps = {
  params: Promise<{ month: string }>;
};

export function generateStaticParams() {
  return MONTH_GUIDES_2027.map((month) => ({ month: month.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { month } = await params;
  const guide = getMonthGuide2027(month);

  if (!guide) return {};

  return {
    title: `${guide.title} | AnaheimCrowds`,
    description: `${guide.title}: best dates, dates to avoid, school breaks, and early planning notes for Disneyland Resort in Anaheim.`,
    alternates: { canonical: `/crowds/2027/${guide.slug}` },
  };
}

export default async function MonthGuide2027Page({ params }: PageProps) {
  const { month } = await params;
  const guide = getMonthGuide2027(month);

  if (!guide) notFound();

  return (
    <div className="max-w-4xl mx-auto px-4 py-12 space-y-12 text-slate-900">
      <section className="space-y-4">
        <p className="text-xs font-black uppercase tracking-[0.2em] text-slate-400">
          Early 2027 planning
        </p>
        <h1 className="text-4xl md:text-6xl font-black tracking-tight">
          {guide.title}
        </h1>
        <p className="text-xl text-slate-600 leading-relaxed font-medium">
          {guide.intro}
        </p>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        <div className="rounded-[2rem] border border-emerald-200 bg-emerald-50 p-6 space-y-3">
          <div className="flex items-center gap-2 text-emerald-800">
            <CheckCircle2 size={20} />
            <h2 className="text-xl font-black">Better dates to check first</h2>
          </div>
          <p className="text-slate-800 font-bold">{guide.bestDates}</p>
        </div>

        <div className="rounded-[2rem] border border-rose-200 bg-rose-50 p-6 space-y-3">
          <div className="flex items-center gap-2 text-rose-800">
            <AlertTriangle size={20} />
            <h2 className="text-xl font-black">Dates to be careful with</h2>
          </div>
          <p className="text-slate-800 font-bold">{guide.avoidDates}</p>
        </div>
      </section>

      <AdSlot id={`ad-month-2027-${guide.slug}-mid`} label="Mid-month page ad" />

      <section className="rounded-[2.5rem] border border-slate-200 bg-white p-6 md:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-3 text-blue-600">
          <CalendarDays size={24} />
          <h2 className="text-2xl font-black uppercase italic">What to know</h2>
        </div>
        <ul className="grid gap-4">
          {guide.notes.map((note) => (
            <li key={note} className="text-slate-700 leading-relaxed">
              {note}
            </li>
          ))}
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-black uppercase italic">Plan the exact dates</h2>
        <p className="text-slate-700 leading-relaxed">
          Use this page to pick the better part of the month, then compare exact dates on the{" "}
          <Link href="/crowd-calendar" className="font-bold underline hover:text-blue-600">
            Disneyland crowd calendar
          </Link>
          . The{" "}
          <Link href="/school-breaks-calendar" className="font-bold underline hover:text-blue-600">
            school-break calendar
          </Link>{" "}
          is the best place to check the district dates behind the busier windows.
        </p>
      </section>

      <section className="pt-8 border-t border-slate-100 space-y-6">
        <p className="text-xs font-black text-slate-400 uppercase tracking-[0.2em] mb-6">More planning help</p>
        <div className="flex flex-wrap gap-4">
          <Link href="/crowd-calendar" className="text-sm font-bold text-slate-900 hover:text-blue-600 underline">Crowd Calendar</Link>
          <Link href="/best-times" className="text-sm font-bold text-slate-900 hover:text-blue-600 underline">Best Times</Link>
          <Link href="/school-breaks-calendar" className="text-sm font-bold text-slate-900 hover:text-blue-600 underline">School Break Calendar</Link>
          {guide.nearbyLinks.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm font-bold text-slate-900 hover:text-blue-600 underline">
              {link.label}
            </Link>
          ))}
        </div>
        <MonthNavigation currentMonth={`${guide.slug}-2027`} />
      </section>
    </div>
  );
}
