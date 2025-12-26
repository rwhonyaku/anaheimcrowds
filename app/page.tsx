import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { AdSlot } from "@/components/AdSlot";

export const metadata: Metadata = {
  title: "Disneyland crowds (typical patterns, Anaheim) | AnaheimCrowds",
  description:
    "Static reference for typical Disneyland Anaheim crowd patterns by season, weekdays/weekends, and holidays. Not live data. Not a forecast.",
  alternates: { canonical: "/" },
};


export default function HomePage() {
  return (
    <div className="container stack-lg">
      <section className="card stack">
        <span className="badge">Static reference</span>

        <div
          style={{
            borderRadius: 10,
            overflow: "hidden",
            border: "1px solid var(--border)",
          }}
        >
          <Image
            src="/images/entrance.jpg"
            alt="Disneyland Resort entrance, Anaheim"
            width={1200}
            height={600}
            priority
            style={{ width: "100%", height: "auto", display: "block" }}
          />
        </div>

        <p className="note">
          Image for geographic context only. AnaheimCrowds is independent and not affiliated with Disney.
        </p>

        <h1 className="h1">AnaheimCrowds</h1>
        <p className="p">
          This site summarizes typical crowd patterns for Disneyland Resort in Anaheim.
          It is not live data. It is not a forecast.
        </p>
        <p className="p">
          Use it to set expectations before you plan a day.
          Then confirm details on official sources.
        </p>
      </section>

      <section className="kv">
        <div className="card stack">
          <h2 className="h2">What you can learn here</h2>
          <ul className="list">
            <li>How weekdays often differ from weekends.</li>
            <li>How major holidays can shift typical patterns.</li>
            <li>How seasons and school calendars can matter.</li>
            <li>What “busy” usually means in practical terms.</li>
          </ul>
        </div>

        <div className="card stack">
          <h2 className="h2">How to use this site</h2>
          <ul className="list">
            <li>Start with the season you plan to visit.</li>
            <li>Check whether it is a weekday or weekend.</li>
            <li>Scan for nearby holidays or school breaks.</li>
            <li>Expect exceptions. Weather and events can change things.</li>
          </ul>
        </div>
      </section>

      <AdSlot id="ad-home-mid" label="Mid-homepage ad (AdSense)" />

      <section className="card stack">
        <h2 className="h2">Crowd overview (not real-time)</h2>
        <p className="p">
          Crowds vary by weekday, weekends, holidays, and weather.
          AnaheimCrowds summarizes typical trends based on widely observed patterns.
        </p>
        <p className="p">
          Actual conditions can be lighter or heavier than expected.
          This site does not track current park entry data.
        </p>
        <div className="hr" />
        <div className="stack">
          <Link href="/crowd-calendar">Go to: Crowd calendar (static reference)</Link>
          <Link href="/best-times">Go to: Typical lighter vs heavier periods</Link>
          <Link href="/weekends-vs-weekdays">Go to: Weekends vs weekdays</Link>
          <Link href="/holidays-seasonal">Go to: Holidays & seasonal patterns</Link>
        </div>

      </section>

      <section className="card stack">
        <h2 className="h2">Affiliate note (light)</h2>
        <p className="p">
          Some pages may include a small number of text links to planning resources.
          If you use a link, AnaheimCrowds may earn a referral fee. The content stays neutral.
        </p>
      </section>

      <section className="card stack">
        <h2 className="h2">Disclaimer</h2>
        <p className="p">
          AnaheimCrowds is an independent informational site and is not affiliated with Disney.
          Disneyland, Disney California Adventure, and related names are trademarks of their owners.
        </p>
      </section>
    </div>
  );
}
