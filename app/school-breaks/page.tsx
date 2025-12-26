import type { Metadata } from "next";
import Link from "next/link";


export const metadata: Metadata = {
  title: "School breaks and crowd patterns | AnaheimCrowds",
  description:
    "How school breaks typically affect Disneyland Anaheim crowds. Static reference only.",
  alternates: { canonical: "/school-breaks" },
};

export default function SchoolBreaksPage() {
  return (
    <div className="container stack-lg">
      <section className="card stack">
        <h1 className="h1">School breaks and crowd patterns</h1>
        <p className="p">
          School schedules are a major driver of crowd variation.
          Dates and impact vary by district and year.
        </p>
      </section>

      <section className="card stack">
        <h2 className="h2">Common break types</h2>
        <ul className="list">
          <li>Winter break.</li>
          <li>Spring break.</li>
          <li>Summer break.</li>
          <li>Three-day weekends.</li>
          <li>Year-round school calendars.</li>
        </ul>
      </section>

      <section className="card stack">
        <h2 className="h2">Why breaks matter</h2>
        <ul className="list">
          <li>More families are able to travel.</li>
          <li>Weekday attendance rises.</li>
          <li>Local and regional demand overlaps.</li>
        </ul>
      </section>

      <section className="card stack">
        <h2 className="h2">Related pages</h2>
        <ul className="list">
          <li>
            <Link href="/school-breaks-calendar">
            School breaks calendar (Southern California)
            </Link>
          </li>
          <li>
            <Link href="/crowd-calendar">Crowd calendar</Link>
          </li>
          <li>
            <Link href="/what-busy-means">What “busy” means</Link>
          </li>
        </ul>
      </section>

    </div>
  );
}
