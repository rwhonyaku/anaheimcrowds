import type { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck, MapPin, CalendarClock, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "About | AnaheimCrowds",
  description: "What AnaheimCrowds is, what it is not, and how we keep the 2026 forecasts grounded.",
};

const AS_OF_DATE = "February 18, 2026";

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 space-y-16 text-slate-900">
      {/* Header */}
      <section className="space-y-4">
        <h1 className="text-4xl md:text-6xl font-black tracking-tighter italic uppercase">
          About <span className="text-blue-600">AnaheimCrowds</span>
        </h1>
        <p className="text-xl text-slate-600 leading-relaxed font-medium">
          AnaheimCrowds exists to help you make better Disneyland date and hotel decisions before the trip gets expensive.
        </p>
        <p className="text-sm text-slate-400">Last updated: {AS_OF_DATE}</p>
      </section>

      {/* Independent status */}
      <section className="bg-slate-50 border border-slate-200 rounded-[2.5rem] p-8 md:p-12 space-y-4">
        <div className="flex items-center gap-2 text-slate-900 font-bold uppercase tracking-widest text-xs">
          <ShieldCheck size={16} /> Independent Site
        </div>
        <p className="text-slate-700 leading-relaxed">
          We are an independent, unofficial resource. AnaheimCrowds is not affiliated with, endorsed by, or connected to
          The Walt Disney Company or Disneyland Resort.
        </p>
        <p className="text-slate-700 leading-relaxed">
          We use publicly available schedules and pricing signals to explain <em>why</em> certain days feel heavier than others.
        </p>
        <Link href="/privacy" className="underline font-semibold text-blue-600">
          Read the full disclaimer and privacy policy
        </Link>
      </section>

      {/* What we do */}
      <section className="space-y-10">
        <div className="flex items-start gap-5">
          <div className="bg-blue-50 text-blue-600 p-3 rounded-2xl">
            <CalendarClock size={22} />
          </div>
          <div className="space-y-2">
            <h2 className="text-2xl font-black tracking-tight">What we publish</h2>
            <p className="text-slate-600 leading-relaxed">
              We publish 2026 crowd forecasts, date-based planning notes, and a small set of focused strategy articles
              (like the October Utah break and the lowest price windows).
            </p>
            <p className="text-slate-600 leading-relaxed">
              The goal is not to guess wait times down to the minute. The goal is to help you choose dates and plans that
              avoid the most common surprises.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-5">
          <div className="bg-amber-50 text-amber-700 p-3 rounded-2xl">
            <MapPin size={22} />
          </div>
          <div className="space-y-2">
            <h3 className="text-xl font-black tracking-tight">Why we focus on Harbor Blvd</h3>
            <p className="text-slate-600 leading-relaxed">
              For many visitors, the most practical “advantage” is not a hotel brand — it’s walking time. Harbor Blvd
              hotels can be closer to security and the turnstiles than many on-property routes.
            </p>
            <Link href="/hotels" className="underline font-semibold text-blue-600">
              See Harbor hotels ranked by walk time
            </Link>
          </div>
        </div>
      </section>

      {/* How we keep it grounded */}
      <section className="bg-white border border-slate-200 rounded-[2.5rem] p-8 md:p-12 space-y-4">
        <h2 className="text-2xl font-black tracking-tight">How we keep forecasts grounded</h2>
        <ul className="list-disc ml-6 space-y-2 text-slate-700">
          <li>We track school break timing across major feeder regions (Southern California, Arizona, Utah).</li>
          <li>We track Disneyland’s ticket pricing tiers as a demand signal.</li>
          <li>We watch major Anaheim convention weeks that affect hotels, restaurants, and security flow.</li>
          <li>We document recurring patterns (for example: Monday behavior and evening crowd shifts).</li>
        </ul>
        <p className="text-slate-600 leading-relaxed">
          For the full breakdown, including how we weigh inputs, start here:
        </p>
        <Link href="/methodology" className="underline font-semibold text-blue-600">
          Read our methodology
        </Link>
      </section>

      {/* Contact */}
      <section className="text-center bg-slate-50 p-10 rounded-[2.5rem] border border-slate-100">
        <Mail className="mx-auto mb-4 text-blue-600" size={32} />
        <h3 className="text-lg font-black uppercase">Contact</h3>
        <p className="text-sm text-slate-500 mb-6">
          If you spot a schedule issue, a broken link, or a date that looks off, email us.
        </p>
        <a
          href="mailto:contact@anaheimcrowds.com"
          className="text-blue-600 font-bold hover:underline"
        >
          contact@anaheimcrowds.com
        </a>
      </section>
    </div>
  );
}
