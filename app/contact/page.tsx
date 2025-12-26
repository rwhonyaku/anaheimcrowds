import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact AnaheimCrowds support.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <div className="container stack-lg">
      <section className="card stack">
        <h1 className="h1">Contact</h1>
        <p className="p">
          Email is the fastest way to reach us.
        </p>
      </section>

      <section className="card stack">
        <h2 className="h2">Support</h2>
        <p className="p">
          <a href="mailto:support@anaheimcrowds.com">support@anaheimcrowds.com</a>
        </p>
        <p className="note">
          Please include the page URL you were viewing, if relevant.
        </p>
      </section>
    </div>
  );
}
