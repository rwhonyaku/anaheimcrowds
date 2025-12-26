// app/crowd-drivers/page.tsx
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Crowd drivers (reference) | AnaheimCrowds",
  description:
    "Static reference on the common drivers that typically increase or decrease Disneyland Anaheim crowds. Not live data.",
  alternates: { canonical: "/crowd-drivers" },
};

const DRIVERS: Array<{
  driver: string;
  typicalEffect: string;
  timeHorizon: string;
  whatChangesFirst: string;
  notes: string;
}> = [
  {
    driver: "Weekend vs weekday",
    typicalEffect: "Often raises demand on weekends",
    timeHorizon: "Weekly pattern",
    whatChangesFirst: "Walkways and headliner waits",
    notes: "Impact is stronger during school breaks.",
  },
  {
    driver: "Holiday proximity",
    typicalEffect: "Often raises demand near major holidays",
    timeHorizon: "Short window (days to a week)",
    whatChangesFirst: "Arrivals, dining, headliner waits",
    notes: "Adjacency (Fri–Mon) often matters more than the holiday itself.",
  },
  {
    driver: "School breaks",
    typicalEffect: "Often raises weekday demand",
    timeHorizon: "Seasonal / calendar-driven",
    whatChangesFirst: "Midday congestion and dining capacity",
    notes: "Dates vary by district and year.",
  },
  {
    driver: "Weather",
    typicalEffect: "Mixed",
    timeHorizon: "Same-day / short window",
    whatChangesFirst: "Perceived crowding and pacing",
    notes: "The same attendance level can feel different by temperature or rain.",
  },
  {
    driver: "Ride downtime / refurbishments",
    typicalEffect: "Mixed (can concentrate crowds)",
    timeHorizon: "Same-day to multi-week",
    whatChangesFirst: "Wait times at remaining headliners",
    notes: "Fewer available attractions can shift demand to other areas.",
  },
  {
    driver: "Special events / seasonal entertainment",
    typicalEffect: "Often raises interest in specific windows",
    timeHorizon: "Short window to seasonal",
    whatChangesFirst: "Evening flow and entertainment areas",
    notes: "Effect can be localized by time and location.",
  },
];

export default function CrowdDriversPage() {
  return (
    <div className="container stack-lg">
      <section className="card stack">
        <h1 className="h1">Crowd drivers (reference)</h1>
        <p className="p">
          These are common factors that typically shift crowd patterns.
          This page is static reference only. It is not live data and not a forecast.
        </p>
      </section>

      <section className="card stack">
        <h2 className="h2">Drivers table</h2>

        <div className="tablewrap">
          <table className="table">
            <thead>
              <tr>
                <th>Driver</th>
                <th>Typical effect</th>
                <th>Time horizon</th>
                <th>What changes first</th>
                <th>Notes</th>
              </tr>
            </thead>
            <tbody>
              {DRIVERS.map((d) => (
                <tr key={d.driver}>
                  <td>{d.driver}</td>
                  <td>{d.typicalEffect}</td>
                  <td>{d.timeHorizon}</td>
                  <td>{d.whatChangesFirst}</td>
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
            <Link href="/what-busy-means">What “busy” means</Link>
          </li>
          <li>
            <Link href="/crowd-calendar">Crowd calendar</Link>
          </li>
          <li>
            <Link href="/holidays-seasonal">Holidays & seasonal patterns</Link>
          </li>
          <li>
            <Link href="/school-breaks">School breaks</Link>
          </li>
        </ul>
      </section>
    </div>
  );
}
