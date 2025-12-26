import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Weekends vs weekdays",
  description:
    "How Disneyland Anaheim crowds typically differ on weekends versus weekdays. Static reference only.",
  alternates: { canonical: "/weekends-vs-weekdays" },
};

export default function WeekendsVsWeekdaysPage() {
  return (
    <div className="container stack-lg">
      <section className="card stack">
        <h1 className="h1">Weekends vs weekdays</h1>
        <p className="p">
          Weekends often behave differently from weekdays.
          The difference is more visible during school breaks.
        </p>
      </section>

      <section className="card stack">
        <h2 className="h2">Typical weekend traits</h2>
        <ul className="list">
          <li>Higher local attendance.</li>
          <li>More peak-time congestion in walkways.</li>
          <li>Longer waits for headliner attractions.</li>
        </ul>
      </section>

      <section className="card stack">
        <h2 className="h2">Typical weekday traits</h2>
        <ul className="list">
          <li>More variation by season.</li>
          <li>More predictable midday flow.</li>
          <li>Better chances for shorter waits outside peak periods.</li>
        </ul>
      </section>

      <section className="card stack">
        <h2 className="h2">What still changes day-to-day</h2>
        <ul className="list">
          <li>Weather.</li>
          <li>Special events.</li>
          <li>Ride downtime.</li>
          <li>School calendars and travel seasons.</li>
        </ul>
        <p className="note">
          This site does not measure current conditions.
        </p>
      </section>
    </div>
  );
}
