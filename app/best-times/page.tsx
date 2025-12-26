import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best times to go",
  description:
    "Neutral guidance on typically lighter and heavier periods for Disneyland Anaheim crowds. Static reference only.",
  alternates: { canonical: "/best-times" },
};

export default function BestTimesPage() {
  return (
    <div className="container stack-lg">
      <section className="card stack">
        <h1 className="h1">Best times to go</h1>
        <p className="p">
          This page describes typical patterns. It is not a prediction.
          Specific dates can behave differently.
        </p>
      </section>

      <section className="card stack">
        <h2 className="h2">Typical lighter periods</h2>
        <ul className="list">
          <li>Mid-week days outside major school breaks.</li>
          <li>Weeks that are not near major U.S. holidays.</li>
          <li>Early in the day, especially near opening.</li>
        </ul>
        <p className="note">
          Lighter does not mean empty. It often means shorter waits and easier movement.
        </p>
      </section>

      <section className="card stack">
        <h2 className="h2">Typical heavier periods</h2>
        <ul className="list">
          <li>Weekends.</li>
          <li>School breaks and peak vacation windows.</li>
          <li>Major holiday weeks.</li>
        </ul>
        <p className="note">
          Heavier can mean longer waits, slower walkways, and limited dining capacity.
        </p>
      </section>

      <section className="card stack">
        <h2 className="h2">A practical way to decide</h2>
        <ul className="list">
          <li>Pick a season first.</li>
          <li>Prefer weekdays if you can.</li>
          <li>Avoid holiday-adjacent weekends when possible.</li>
        </ul>
      </section>

      <section className="card stack">
        <h2 className="h2">Optional planning link (text only)</h2>
        <p className="p">
          If you need tickets or reservations, use the official Disneyland site.
          If you use third-party travel resources, confirm terms and dates carefully.
        </p>
      </section>
    </div>
  );
}
