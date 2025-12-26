import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy / Disclaimer",
  description:
    "Privacy notes and disclaimers for AnaheimCrowds. Independent site. Static reference only.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <div className="container stack-lg">
      <section className="card stack">
        <h1 className="h1">Privacy / Disclaimer</h1>
        <p className="p">
          This page explains how this site operates. It is short by design.
        </p>
      </section>

      <section className="card stack">
        <h2 className="h2">Privacy</h2>
        <ul className="list">
          <li>No accounts.</li>
          <li>No forms that collect personal data.</li>
          <li>Basic analytics may be added later.</li>
        </ul>
        <p className="note">
          If analytics or ads are enabled, third parties may use cookies or similar technologies.
        </p>
      </section>

      <section className="card stack">
        <h2 className="h2">Advertising</h2>
        <p className="p">
          AnaheimCrowds may display ads (for example, Google AdSense).
          Ads are placed in fixed locations and do not change the site’s neutral intent.
        </p>
      </section>

      <section className="card stack">
        <h2 className="h2">Affiliate links</h2>
        <p className="p">
          Some pages may contain a small number of text links to resources.
          If you use a link, AnaheimCrowds may earn a referral fee.
        </p>
        <p className="note">
          Links are not rankings. They are optional references.
        </p>
      </section>

      <section className="card stack">
        <h2 className="h2">Disclaimer</h2>
        <p className="p">
          AnaheimCrowds is independent and not affiliated with Disney or Disneyland Resort.
          Disneyland and related marks belong to their owners.
        </p>
        <p className="p">
          Content is static and informational. It does not guarantee outcomes.
          Actual crowd levels can differ for many reasons.
        </p>
      </section>
    </div>
  );
}
