import Link from "next/link";

const LINKS = [
  { href: "/best-times", label: "Best times to go" },
  { href: "/weekends-vs-weekdays", label: "Weekends vs weekdays" },
  { href: "/holidays-seasonal", label: "Holidays & seasons" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
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
