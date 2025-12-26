// app/best-times/page.tsx
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Typical lighter vs heavier periods (Disneyland Anaheim) | AnaheimCrowds",
  description:
    "Static reference on typically lighter and heavier periods for Disneyland Anaheim crowds. Not live data.",
  alternates: { canonical: "/best-times" },
};

export default function TypicalLighterHeavierPage() {
  return (
    <div className="container stack-lg">
      <section className="card stack">
        <h1 className="h1">Typical lighter vs heavier periods</h1>
        <p className="p">
          This page describes typical patterns. It is not live data and not a forecast.
          Specific dates can behave differently.
        </p>
      </section>

      <section className="card stack">
        <h2 className="h2">Typically lighter</h2>
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
        <h2 className="h2">Typically heavier</h2>
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
        <h2 className="h2">A practical way to read patterns</h2>
        <ul className="list">
          <li>Pick a season first.</li>
          <li>Prefer weekdays when possible.</li>
          <li>Check holiday proximity.</li>
        </ul>
      </section>

      <section className="card stack">
        <h2 className="h2">Related pages</h2>
        <ul className="list">
          <li>
            <Link href="/weekends-vs-weekdays">Weekends vs weekdays</Link>
          </li>
          <li>
            <Link href="/holidays-seasonal">Holidays & seasonal patterns</Link>
          </li>
          <li>
            <Link href="/crowd-calendar">Crowd calendar</Link>
          </li>
        </ul>
      </section>
    </div>
  );
}
