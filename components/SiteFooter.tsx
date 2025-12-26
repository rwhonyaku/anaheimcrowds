import Link from "next/link";
import { AdSlot } from "@/components/AdSlot";

export function SiteFooter({ contactEmail }: { contactEmail: string }) {
  return (
    <footer className="footer">
      <div className="container stack">
        <AdSlot id="ad-footer" label="Footer ad (AdSense)" />

        <div className="stack">
          <p>
            AnaheimCrowds is an independent informational site. It is not affiliated with Disney or Disneyland Resort.
            This site provides static, typical patterns only. Actual conditions can differ.
          </p>
          <p>
            Contact: <a href={`mailto:${contactEmail}`}>{contactEmail}</a> ·{" "}
            <Link href="/privacy">Privacy / Disclaimer</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
