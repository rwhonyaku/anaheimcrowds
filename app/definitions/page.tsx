// app/definitions/page.tsx
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Crowd-related terms & definitions | AnaheimCrowds",
  description:
    "Neutral definitions of common terms used when discussing Disneyland Anaheim crowd patterns. Static reference only.",
  alternates: { canonical: "/definitions" },
};

const TERMS: Array<{
  term: string;
  definition: string;
  whyItMatters: string;
}> = [
  {
    term: "Rope drop",
    definition:
      "The opening of the park to guests at the start of the operating day.",
    whyItMatters:
      "Early arrival often changes how crowded the first part of the day feels.",
  },
  {
    term: "Headliner attraction",
    definition:
      "A popular attraction that typically draws higher demand than average.",
    whyItMatters:
      "Wait times at these attractions often tighten before other areas.",
  },
  {
    term: "Peak hours",
    definition:
      "The portion of the day when attendance concentration and movement are highest.",
    whyItMatters:
      "Crowding is often felt most strongly during these periods.",
  },
  {
    term: "Holiday proximity",
    definition:
      "The days immediately before or after a major holiday.",
    whyItMatters:
      "Travel timing around holidays can shift crowds even if the holiday itself is brief.",
  },
  {
    term: "School break",
    definition:
      "A period when schools are not in session for multiple days or weeks.",
    whyItMatters:
      "Weekday attendance often increases when families have more flexibility.",
  },
  {
    term: "Capacity",
    definition:
      "The practical limit of how many guests can be accommodated at a time.",
    whyItMatters:
      "As capacity is approached, walkways and dining tend to feel constrained first.",
  },
  {
    term: "Downtime",
    definition:
      "Periods when an attraction is unavailable due to maintenance or technical issues.",
    whyItMatters:
      "Crowds can shift toward remaining attractions when options are reduced.",
  },
  {
    term: "Mobile order",
    definition:
      "A system that allows food orders to be placed in advance for pickup.",
    whyItMatters:
      "Order windows can tighten earlier as crowd levels rise.",
  },
];

export default function DefinitionsPage() {
  return (
    <div className="container stack-lg">
      <section className="card stack">
        <h1 className="h1">Crowd-related terms & definitions</h1>
        <p className="p">
          This page defines commonly used terms in a neutral, descriptive way.
          It is static reference only and does not reflect real-time conditions.
        </p>
      </section>

      <section className="card stack">
        <div className="tablewrap">
          <table className="table">
            <thead>
              <tr>
                <th>Term</th>
                <th>Definition</th>
                <th>Why it matters</th>
              </tr>
            </thead>
            <tbody>
              {TERMS.map((t) => (
                <tr key={t.term}>
                  <td>{t.term}</td>
                  <td>{t.definition}</td>
                  <td>{t.whyItMatters}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="card stack">
        <h2 className="h2">Related pages</h2>
        <ul className="list">
          <li><Link href="/what-busy-means">What “busy” means</Link></li>
          <li><Link href="/crowd-drivers">Crowd drivers</Link></li>
          <li><Link href="/crowd-calendar">Crowd calendar</Link></li>
        </ul>
      </section>
    </div>
  );
}
