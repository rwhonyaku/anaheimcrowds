import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Holidays & seasonal patterns",
  description:
    "How holidays and seasons typically affect Disneyland Anaheim crowds. Static reference only.",
  alternates: { canonical: "/holidays-seasonal" },
};

export default function HolidaysSeasonalPage() {
  return (
    <div className="container stack-lg">
      <section className="card stack">
        <h1 className="h1">Holidays & seasonal patterns</h1>

        <div
          style={{
            borderRadius: 10,
            overflow: "hidden",
            border: "1px solid var(--border)",
          }}
        >
          <Image
            src="/images/crowds.jpg"
            alt="Theme park pedestrian crowd during daytime"
            width={1200}
            height={600}
            style={{ width: "100%", height: "auto", display: "block" }}
          />
        </div>

        <p className="note">
          Image shown for general context. This page describes typical patterns, not real-time conditions.
        </p>

        <p className="p">
          Crowds often follow school breaks and holiday travel.
          The same holiday can look different year to year.
        </p>
      </section>

      <section className="card stack">
        <h2 className="h2">Common peak windows</h2>
        <ul className="list">
          <li>Major U.S. holiday weeks.</li>
          <li>Spring break windows.</li>
          <li>Summer travel season.</li>
          <li>Late-year holiday season.</li>
        </ul>
      </section>

      <section className="card stack">
        <h2 className="h2">Common steadier windows</h2>
        <ul className="list">
          <li>Non-holiday weeks during the school year.</li>
          <li>Mid-week days away from three-day weekends.</li>
        </ul>
      </section>

      <section className="card stack">
        <h2 className="h2">Season notes</h2>
        <ul className="list">
          <li>Weather can change how the day feels, even if attendance is similar.</li>
          <li>Seasonal entertainment can increase interest and attendance.</li>
          <li>Local events can add visitors beyond typical patterns.</li>
        </ul>
      </section>
    </div>
  );
}
