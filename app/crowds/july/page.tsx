// app/crowds/july/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { AdSlot } from "@/components/AdSlot";


export const metadata: Metadata = {
  title: "Disneyland crowds in July (typical patterns) | AnaheimCrowds",
  description:
    "Typical Disneyland Anaheim crowd patterns in July. Static reference only.",
  alternates: { canonical: "/crowds/july" },
};

export default function JulyCrowdsPage() {
  return (
    <div className="container stack-lg">
      <section className="card stack">
        <h1 className="h1">Disneyland crowds in July</h1>
        <p className="p">Static reference only. Not live data. Not a prediction.</p>
      </section>

      <section className="card stack">
        <h2 className="h2">Typical demand drivers</h2>
        <ul className="list">
          <li>Summer break is widespread.</li>
          <li>Vacation travel increases weekday demand.</li>
          <li>Holiday proximity can lift short windows further.</li>
          <li>
            SoCal school breaks overlap: broad summer break coverage.{" "}
            <Link href="/school-breaks-calendar">SoCal school breaks</Link>
          </li>
        </ul>
      </section>

      <AdSlot id="ad-month-july-mid" label="Mid-month page ad (AdSense)" />

      <section className="card stack">
        <h2 className="h2">Typical lighter vs heavier periods</h2>
        <ul className="list">
          <li>Lighter: limited; some mid-week days can feel steadier than weekends.</li>
          <li>Heavier: many weekends and holiday-adjacent windows.</li>
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
