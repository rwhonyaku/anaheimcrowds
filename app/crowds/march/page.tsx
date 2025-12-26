// app/crowds/march/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { AdSlot } from "@/components/AdSlot";


export const metadata: Metadata = {
  title: "Disneyland crowds in March (typical patterns) | AnaheimCrowds",
  description:
    "Typical Disneyland Anaheim crowd patterns in March. Static reference only.",
  alternates: { canonical: "/crowds/march" },
};

export default function MarchCrowdsPage() {
  return (
    <div className="container stack-lg">
      <section className="card stack">
        <h1 className="h1">Disneyland crowds in March</h1>
        <p className="p">Static reference only. Not live data. Not a prediction.</p>
      </section>

      <section className="card stack">
        <h2 className="h2">Typical demand drivers</h2>
        <ul className="list">
          <li>Spring break schedules begin for some schools.</li>
          <li>Weekend travel tends to rise as weather improves.</li>
          <li>Holiday-adjacent periods can cluster demand.</li>
          <li>
            SoCal school breaks overlap: spring break begins for some districts late month.{" "}
            <Link href="/school-breaks-calendar">SoCal school breaks</Link>
          </li>

        </ul>
      </section>

      <AdSlot id="ad-month-march-mid" label="Mid-month page ad (AdSense)" />

      <section className="card stack">
        <h2 className="h2">Typical lighter vs heavier periods</h2>
        <ul className="list">
          <li>Lighter: mid-week outside spring break windows.</li>
          <li>Heavier: spring break weeks and weekends.</li>
        </ul>
      </section>

      <section className="card stack">
        <h2 className="h2">What can change the day</h2>
        <ul className="list">
          <li>School calendar variation by region.</li>
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
