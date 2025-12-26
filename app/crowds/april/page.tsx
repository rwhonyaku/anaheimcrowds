// app/crowds/april/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { AdSlot } from "@/components/AdSlot";


export const metadata: Metadata = {
  title: "Disneyland crowds in April (typical patterns) | AnaheimCrowds",
  description:
    "Typical Disneyland Anaheim crowd patterns in April. Static reference only.",
  alternates: { canonical: "/crowds/april" },
};

export default function AprilCrowdsPage() {
  return (
    <div className="container stack-lg">
      <section className="card stack">
        <h1 className="h1">Disneyland crowds in April</h1>
        <p className="p">Static reference only. Not live data. Not a prediction.</p>
      </section>

      <section className="card stack">
        <h2 className="h2">Typical demand drivers</h2>
        <ul className="list">
          <li>Spring break overlap can extend into April.</li>
          <li>Weekday behavior varies more during break windows.</li>
          <li>Seasonal travel demand can remain elevated.</li>
          <li>
            SoCal school breaks overlap: spring break can continue into early April.{" "}
            <Link href="/school-breaks-calendar">SoCal school breaks</Link>
          </li>
        </ul>
      </section>

      <AdSlot id="ad-month-april-mid" label="Mid-month page ad (AdSense)" />

      <section className="card stack">
        <h2 className="h2">Typical lighter vs heavier periods</h2>
        <ul className="list">
          <li>Lighter: mid-week once most schools are back in session.</li>
          <li>Heavier: spring break overlap and weekends.</li>
        </ul>
      </section>

      <section className="card stack">
        <h2 className="h2">What can change the day</h2>
        <ul className="list">
          <li>School calendar variation.</li>
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
