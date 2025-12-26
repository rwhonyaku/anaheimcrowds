// app/crowds/june/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { AdSlot } from "@/components/AdSlot";


export const metadata: Metadata = {
  title: "Disneyland crowds in June (typical patterns) | AnaheimCrowds",
  description:
    "Typical Disneyland Anaheim crowd patterns in June. Static reference only.",
  alternates: { canonical: "/crowds/june" },
};

export default function JuneCrowdsPage() {
  return (
    <div className="container stack-lg">
      <section className="card stack">
        <h1 className="h1">Disneyland crowds in June</h1>
        <p className="p">Static reference only. Not live data. Not a prediction.</p>
      </section>

      <section className="card stack">
        <h2 className="h2">Typical demand drivers</h2>
        <ul className="list">
          <li>Summer break begins for many schools toward mid/late month.</li>
          <li>Weekday attendance often rises as school schedules loosen.</li>
          <li>Seasonal travel increases overall demand.</li>
          <li>
            SoCal school breaks overlap: summer break expands through the month as schools release.{" "}
            <Link href="/school-breaks-calendar">SoCal school breaks</Link>
          </li>
        </ul>
      </section>

      <AdSlot id="ad-month-june-mid" label="Mid-month page ad (AdSense)" />


      <section className="card stack">
        <h2 className="h2">Typical lighter vs heavier periods</h2>
        <ul className="list">
          <li>Lighter: early-month mid-week before widespread summer break.</li>
          <li>Heavier: late-month weeks and weekends.</li>
        </ul>
      </section>

      <section className="card stack">
        <h2 className="h2">What can change the day</h2>
        <ul className="list">
          <li>School release timing by district.</li>
          <li>Weather.</li>
          <li>Ride downtime.</li>
        </ul>
      </section>

      <section className="card stack">
        <h2 className="h2">Related pages</h2>
        <ul className="list">
          <li><Link href="/crowd-calendar">Crowd calendar</Link></li>
          <li><Link href="/school-breaks">School breaks</Link></li>
          <li><Link href="/holidays-seasonal">Holidays & seasons</Link></li>
          <li><Link href="/weekends-vs-weekdays">Weekends vs weekdays</Link></li>
          <li><Link href="/what-busy-means">What “busy” means</Link></li>
          <li><Link href="/crowd-drivers">Crowd drivers</Link></li>
        </ul>
      </section>
    </div>
  );
}
