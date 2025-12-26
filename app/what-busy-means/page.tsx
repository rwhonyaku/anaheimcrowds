// app/what-busy-means/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { AdSlot } from "@/components/AdSlot";

export const metadata: Metadata = {
  title: "What “busy” means (Disneyland crowds) | AnaheimCrowds",
  description:
    "Static reference explaining what “busy” typically looks like at Disneyland Anaheim, using practical indicators. Not live data.",
  alternates: { canonical: "/what-busy-means" },
};

const CROWD_LEVELS: Array<{
  label: string;
  walkways: string;
  lines: string;
  dining: string;
  parking: string;
  firstToTighten: string;
}> = [
  {
    label: "Steadier",
    walkways: "Movement is generally smooth. Some pinch points still occur.",
    lines: "Many waits feel manageable outside peak periods.",
    dining: "Mobile order windows are usually available with some flexibility.",
    parking: "Security/entry lines exist but tend to move steadily.",
    firstToTighten: "Headliner attraction waits",
  },
  {
    label: "Busy",
    walkways: "More congestion in central walkways and near popular areas.",
    lines: "Headliners often hold longer waits for more of the day.",
    dining: "Mobile order return windows can push out; seating fills faster.",
    parking: "Entry/security lines can become noticeable at peak arrival times.",
    firstToTighten: "Dining windows and seating",
  },
  {
    label: "Very busy",
    walkways: "Frequent slowdowns at pinch points. More stop-and-go movement.",
    lines: "Long waits are common for many major attractions for extended periods.",
    dining: "Limited seating. Mobile order windows can become constrained.",
    parking: "Longer arrival friction; security/entry can feel like a bottleneck.",
    firstToTighten: "Walkways and dining capacity",
  },
];

const DAYPARTS: Array<{
  time: string;
  typical: string;
  notes: string;
}> = [
  {
    time: "Opening to late morning",
    typical: "Movement is usually easier and waits can build gradually.",
    notes: "Arrival timing often changes how the day feels.",
  },
  {
    time: "Midday",
    typical: "Walkways and dining areas often feel most congested.",
    notes: "Heat and fatigue can amplify perceived crowding.",
  },
  {
    time: "Evening",
    typical: "Some areas intensify while others ease depending on entertainment flow.",
    notes: "The same attendance level can feel different by location.",
  },
];

export default function WhatBusyMeansPage() {
  return (
    <div className="container stack-lg">
      <section className="card stack">
        <h1 className="h1">What “busy” means</h1>
        <p className="p">
          This page describes typical crowd signals in practical terms.
          It is static reference only. It is not live data and not a forecast.
        </p>
      </section>

      <section className="card stack">
        <h2 className="h2">Practical crowd indicators (reference)</h2>

        <div className="tablewrap">
          <table className="table">
            <thead>
              <tr>
                <th>Crowd label</th>
                <th>Walkways</th>
                <th>Attraction lines</th>
                <th>Dining</th>
                <th>Parking / entry</th>
                <th>First thing that often tightens</th>
              </tr>
            </thead>
            <tbody>
              {CROWD_LEVELS.map((r) => (
                <tr key={r.label}>
                  <td>{r.label}</td>
                  <td>{r.walkways}</td>
                  <td>{r.lines}</td>
                  <td>{r.dining}</td>
                  <td>{r.parking}</td>
                  <td>{r.firstToTighten}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="note">
          These are typical experience indicators. They can change due to weather, ride downtime, or events.
        </p>
      </section>

      <AdSlot id="ad-what-busy-means-mid" label="Mid-page ad (AdSense)" />

      <section className="card stack">
        <h2 className="h2">Time-of-day patterns (typical)</h2>

        <div className="tablewrap">
          <table className="table">
            <thead>
              <tr>
                <th>Time of day</th>
                <th>What typically tightens</th>
                <th>Notes</th>
              </tr>
            </thead>
            <tbody>
              {DAYPARTS.map((d) => (
                <tr key={d.time}>
                  <td>{d.time}</td>
                  <td>{d.typical}</td>
                  <td>{d.notes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="card stack">
        <h2 className="h2">Related pages</h2>
        <ul className="list">
          <li>
            <Link href="/crowd-calendar">Crowd calendar</Link>
          </li>
          <li>
            <Link href="/weekends-vs-weekdays">Weekends vs weekdays</Link>
          </li>
          <li>
            <Link href="/holidays-seasonal">Holidays & seasonal patterns</Link>
          </li>
          <li>
            <Link href="/best-times">Typical lighter vs heavier periods</Link>
          </li>
          <li>
            <Link href="/definitions">Crowd-related terms & definitions</Link>
          </li>

        </ul>
      </section>
    </div>
  );
}
