// app/crowds/november/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { AdSlot } from "@/components/AdSlot";


export const metadata: Metadata = {
  title: "Disneyland crowds in November (typical patterns) | AnaheimCrowds",
  description:
    "Typical Disneyland Anaheim crowd patterns in November. Static reference only.",
  alternates: { canonical: "/crowds/november" },
};

export default function NovemberCrowdsPage() {
  return (
    <div className="container stack-lg">
      <section className="card stack">
        <h1 className="h1">Disneyland crowds in November</h1>
        <p className="p">Static reference only. Not live data. Not a prediction.</p>
      </section>

      <section className="card stack">
        <h2 className="h2">Typical demand drivers</h2>
        <ul className="list">
          <li>School is in session outside major holiday windows.</li>
          <li>Thanksgiving week can shift weekday behavior.</li>
          <li>Late-month travel can start increasing toward year-end.</li>
        </ul>
      </section>

      <AdSlot id="ad-month-november-mid" label="Mid-month page ad (AdSense)" />

      <section className="card stack">
        <h2 className="h2">Typical lighter vs heavier periods</h2>
        <ul className="list">
          <li>Lighter: mid-week days outside Thanksgiving proximity.</li>
          <li>Heavier: Thanksgiving week and many weekends.</li>
        </ul>
      </section>

      <section className="card stack">
        <h2 className="h2">What can change the day</h2>
        <ul className="list">
          <li>Holiday proximity.</li>
          <li>Weather.</li>
          <li>Ride downtime.</li>
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
