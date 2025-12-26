import type { Metadata } from "next";
import Link from "next/link";
import { AdSlot } from "@/components/AdSlot";


export const metadata: Metadata = {
  title: "Disneyland crowds in January (typical patterns) | AnaheimCrowds",
  description:
    "Typical Disneyland Anaheim crowd patterns in January. Static reference only.",
  alternates: { canonical: "/crowds/january" },
};

export default function JanuaryCrowdsPage() {
  return (
    <div className="container stack-lg">
      <section className="card stack">
        <h1 className="h1">Disneyland crowds in January</h1>
        <p className="p">
          This page describes typical patterns.
          It is not live data and not a prediction.
        </p>
      </section>

      <section className="card stack">
        <h2 className="h2">Typical demand drivers</h2>
        <ul className="list">
          <li>Post-holiday travel drop-off.</li>
          <li>School resumes after winter break.</li>
          <li>Weather-related variation.</li>
          <li>
            SoCal school breaks overlap: winter break spillover may still apply early in the month.{" "}
            <Link href="/school-breaks-calendar">SoCal school breaks</Link>
          </li>
        </ul>
      </section>

      <AdSlot id="ad-month-january-mid" label="Mid-month page ad (AdSense)" />

      <section className="card stack">
        <h2 className="h2">Typical lighter vs heavier periods</h2>
        <ul className="list">
          <li>Lighter: mid-week days after early January.</li>
          <li>Heavier: New Year proximity and weekends.</li>
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
