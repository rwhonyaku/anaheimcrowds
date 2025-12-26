import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Crowd calendar (static reference) | AnaheimCrowds",
  description:
    "Static crowd calendar showing typical monthly crowd patterns at Disneyland Anaheim. Not live data.",
  alternates: { canonical: "/crowd-calendar" },
};

export default function CrowdCalendarPage() {
  return (
    <div className="container stack-lg">
      <section className="card stack">
        <h1 className="h1">Crowd calendar (static reference)</h1>
        <p className="p">
          This calendar summarizes typical monthly crowd patterns.
          It is not live data and not a forecast.
        </p>
      </section>

      <section className="card stack">
        <h2 className="h2">Months</h2>
        <ul className="list grid-3">
          <li><Link href="/crowds/january">January</Link></li>
          <li><Link href="/crowds/february">February</Link></li>
          <li><Link href="/crowds/march">March</Link></li>
          <li><Link href="/crowds/april">April</Link></li>
          <li><Link href="/crowds/may">May</Link></li>
          <li><Link href="/crowds/june">June</Link></li>
          <li><Link href="/crowds/july">July</Link></li>
          <li><Link href="/crowds/august">August</Link></li>
          <li><Link href="/crowds/september">September</Link></li>
          <li><Link href="/crowds/october">October</Link></li>
          <li><Link href="/crowds/november">November</Link></li>
          <li><Link href="/crowds/december">December</Link></li>
        </ul>
      </section>

      <section className="card stack">
        <h2 className="h2">How to read this</h2>
        <ul className="list">
          <li>Start with the month.</li>
          <li>Then consider weekdays vs weekends.</li>
          <li>Check holiday proximity.</li>
        </ul>
      </section>
    </div>
  );
}
