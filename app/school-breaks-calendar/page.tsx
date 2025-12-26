// app/school-breaks-calendar/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { AdSlot } from "@/components/AdSlot";

export const metadata: Metadata = {
  title: "School breaks calendar (Southern California) | AnaheimCrowds",
  description:
    "Static reference of common school break windows in Southern California (LA, OC, SD, Inland Empire). Not live data.",
  alternates: { canonical: "/school-breaks-calendar" },
};

type Row = {
  breakType: string;
  dateRange: string;
  coverage: "High" | "Medium" | "Low";
  notes: string;
  la: string;
  oc: string;
  sd: string;
  ie: string;
};

const SOCAL_2025_2026: Row[] = [
  {
    breakType: "Winter break",
    dateRange: "Dec 22 – Jan 9",
    coverage: "High",
    notes: "All major districts overlap. LA and IE extend later than OC/SD.",
    la: "Dec 22 – Jan 9",
    oc: "Dec 22 – Jan 2",
    sd: "Dec 22 – Jan 2",
    ie: "Dec 22 – Jan 9",
  },
  {
    breakType: "Spring break",
    dateRange: "Mar 23 – Apr 3",
    coverage: "High",
    notes: "Most districts align. IE begins earlier.",
    la: "Mar 30 – Apr 3",
    oc: "Mar 30 – Apr 3",
    sd: "Mar 30 – Apr 3",
    ie: "Mar 23 – Apr 3",
  },
  {
    breakType: "Summer break",
    dateRange: "May 28 – Aug 13",
    coverage: "High",
    notes: "Start/end varies by district. SD starts earliest; OC ends latest.",
    la: "Jun 10 – Aug 12",
    oc: "Jun 5 – Aug 13",
    sd: "May 28 – Aug 10",
    ie: "Jun 4 – Aug 3",
  },
];

export default function SchoolBreaksCalendarPage() {
  return (
    <div className="container stack-lg">
      <section className="card stack">
        <h1 className="h1">School breaks calendar (Southern California)</h1>
        <p className="p">
          This is a static reference of common break windows in Southern California
          (LA, Orange County, San Diego, Inland Empire). It is not live data and not a forecast.
        </p>
        <p className="note">
          Dates vary by district. Ranges below show observed windows for the school year shown.
        </p>
      </section>

      <section className="card stack">
        <h2 className="h2">School year 2025–2026 (SoCal)</h2>

        <div className="tablewrap">
          <table className="table">
            <thead>
              <tr>
                <th>Break</th>
                <th>SoCal range</th>
                <th>Coverage</th>
                <th>LA</th>
                <th>OC</th>
                <th>SD</th>
                <th>IE</th>
                <th>Notes</th>
              </tr>
            </thead>
            <tbody>
              {SOCAL_2025_2026.map((r) => (
                <tr key={r.breakType}>
                  <td>{r.breakType}</td>
                  <td>{r.dateRange}</td>
                  <td>{r.coverage}</td>
                  <td>{r.la}</td>
                  <td>{r.oc}</td>
                  <td>{r.sd}</td>
                  <td>{r.ie}</td>
                  <td>{r.notes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <AdSlot id="ad-school-breaks-calendar-mid" label="Mid-page ad (AdSense)" />

      <section className="card stack">
        <h2 className="h2">How to use this page</h2>
        <ul className="list">
          <li>Use the SoCal range to identify weeks that often see higher regional travel flexibility.</li>
          <li>Then check weekends, holiday proximity, and weather effects on other pages.</li>
          <li>Confirm specific district dates on official sources if precision is required.</li>
        </ul>
      </section>

      <section className="card stack">
        <h2 className="h2">Related pages</h2>
        <ul className="list">
          <li><Link href="/crowd-calendar">Crowd calendar</Link></li>
          <li><Link href="/school-breaks">School breaks (concept)</Link></li>
          <li><Link href="/holidays-seasonal">Holidays & seasonal patterns</Link></li>
          <li><Link href="/what-busy-means">What “busy” means</Link></li>
        </ul>
      </section>
    </div>
  );
}
