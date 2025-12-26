import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Frequently asked questions about AnaheimCrowds and what it does (and does not) provide.",
  alternates: { canonical: "/faq" },
};

function QA({ q, a }: { q: string; a: string }) {
  return (
    <div className="stack">
      <h2 className="h2">{q}</h2>
      <p className="p">{a}</p>
    </div>
  );
}

export default function FaqPage() {
  return (
    <div className="container stack-lg">
      <section className="card stack">
        <h1 className="h1">FAQ</h1>
        <p className="p">Clear answers. No hype.</p>
      </section>

      <section className="card stack-lg">
        <QA
          q="Is this live crowd data?"
          a="No. AnaheimCrowds is static. It summarizes typical patterns only."
        />
        <div className="hr" />
        <QA
          q="Is this a forecast?"
          a="No. It is a reference. Actual conditions can differ due to weather, events, and operations."
        />
        <div className="hr" />
        <QA
          q="Are you affiliated with Disney?"
          a="No. AnaheimCrowds is independent and not affiliated with Disney or Disneyland Resort."
        />
        <div className="hr" />
        <QA
          q="Do you track wait times?"
          a="No. There is no wait-time tracking on this site."
        />
        <div className="hr" />
        <QA
          q="Why use this site?"
          a="To understand common crowd patterns at a glance. Then confirm details using official sources."
        />
      </section>
    </div>
  );
}
