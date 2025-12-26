import Link from "next/link";

const LINKS = [
  { href: "/crowd-calendar", label: "Crowd calendar" },
  { href: "/school-breaks-calendar", label: "SoCal school breaks" },
  { href: "/what-busy-means", label: "What “busy” means" },
  { href: "/best-times", label: "Lighter vs heavier periods" },
  { href: "/weekends-vs-weekdays", label: "Weekends vs weekdays" },
  { href: "/holidays-seasonal", label: "Holidays & seasons" },
  { href: "/privacy", label: "Privacy / Disclaimer" },
] as const;

export function SiteHeader() {
  return (
    <header className="navbar">
      <div className="navinner">
        <div className="brand">
          <Link href="/">AnaheimCrowds</Link>
          <small>Static reference. No live data.</small>
        </div>
        <nav className="navlinks" aria-label="Primary">
          {LINKS.map((l) => (
            <Link key={l.href} href={l.href}>
              {l.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
