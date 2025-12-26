// app/crowds/february/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { AdSlot } from "@/components/AdSlot";


export const metadata: Metadata = {
  title: "Disneyland crowds in February (typical patterns) | AnaheimCrowds",
  description:
    "Typical Disneyland Anaheim crowd patterns in February. Static reference only.",
  alternates: { canonical: "/crowds/february" },
};

export default function FebruaryCrowdsPage() {
  return (
    <div className="container stack-lg">
      <section className="card stack">
        <h1 className="h1">Disneyland crowds in February</h1>
        <p className="p">Static reference only. Not live data. Not a prediction.</p>
      </section>

      <section className="card stack">
        <h2 className="h2">Typical demand drivers</h2>
        <ul className="list">
          <li>School is generally in session outside holiday weekends.</li>
          <li>Three-day weekends can shift weekday behavior.</li>
          <li>Weather can change perceived crowds and pacing.</li>
        </ul>
      </section>

      <AdSlot id="ad-month-february-mid" label="Mid-month page ad (AdSense)" />

      <section className="card stack">
        <h2 className="h2">Typical lighter vs heavier periods</h2>
        <ul className="list">
          <li>Lighter: mid-week days away from long weekends.</li>
          <li>Heavier: holiday-adjacent weekends and nearby travel windows.</li>
        </ul>
      </section>

      <section className="card stack">
        <h2 className="h2">What can change the day</h2>
        <ul className="list">
          <li>Weather.</li>
          <li>Ride downtime.</li>
          <li>Holiday spillover.</li>
        </ul>
      </section>

      <section className="card stack">
        <h2 className="h2">Related pages</h2>
        <ul className="list">
          <li><Link href="/crowd-calendar">Crowd calendar</Link></li>
          <li><Link href="/holidays-seasonal">Holidays & seasons</Link></li>
          <li><Link href="/weekends-vs-weekdays">Weekends vs weekdays</Link></li>
          <li><Link href="/what-busy-means">What “busy” means</Link></li>
          <li><Link href="/crowd-drivers">Crowd drivers</Link></li>
        </ul>
      </section>
    </div>
  );
}
