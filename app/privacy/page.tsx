import type { Metadata } from "next";
import { ShieldCheck, EyeOff, Scale, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy & Disclaimer | AnaheimCrowds",
  description: "How we handle data and our independent status regarding Disney Resorts.",
};

export default function PrivacyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 space-y-16 text-slate-900">
      {/* Human Header */}
      <section className="space-y-4">
        <h1 className="text-4xl font-black tracking-tighter uppercase italic">
          Privacy <span className="text-blue-600">&</span> Disclaimer
        </h1>
        <p className="text-lg text-slate-600 font-medium">
          We believe in transparency. This page covers how we use data and clarifies our relationship with the theme parks we cover.
        </p>
      </section>

      {/* 1. THE DISCLAIMER */}
      <section className="bg-slate-900 rounded-[2.5rem] p-8 md:p-12 text-white space-y-6 shadow-xl relative overflow-hidden">
        <div className="relative z-10 space-y-4">
          <div className="flex items-center gap-2 text-blue-400 font-black text-xs uppercase tracking-widest">
            <Scale size={18} /> Legal Status
          </div>
          <h2 className="text-2xl font-black">Independent Status</h2>
          <p className="text-slate-400 leading-relaxed text-sm md:text-base">
            AnaheimCrowds is an independent, unofficial enthusiast site. We are{" "}
            <strong>not</strong> affiliated with, authorized, endorsed by, or in any way officially connected with
            The Walt Disney Company, Disney Enterprises Inc., or any of their subsidiaries or affiliates.
          </p>
          <p className="text-slate-400 leading-relaxed text-sm md:text-base">
            The names Disney, Disneyland, and Disney California Adventure, as well as related names, marks, emblems,
            and images, are registered trademarks of their respective owners. Our use of these names is for{" "}
            <strong>descriptive and informational purposes only.</strong>
          </p>
        </div>
      </section>

      {/* 2. PRIVACY DETAILS */}
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-4 p-8 bg-white border border-slate-200 rounded-[2.5rem]">
          <div className="p-3 bg-blue-50 text-blue-600 rounded-2xl w-fit">
            <EyeOff size={24} />
          </div>
          <h3 className="text-xl font-black italic uppercase">What we track</h3>
          <p className="text-sm text-slate-600 leading-relaxed">
            We don&apos;t know who you are. We use standard tools like Google Analytics to see which pages are popular
            and how people use the site. This helps us decide which school districts to audit next.
          </p>
        </div>

        <div className="space-y-4 p-8 bg-white border border-slate-200 rounded-[2.5rem]">
          <div className="p-3 bg-slate-50 text-slate-600 rounded-2xl w-fit">
            <ShieldCheck size={24} />
          </div>
          <h3 className="text-xl font-black italic uppercase">Cookies & Ads</h3>
          <p className="text-sm text-slate-600 leading-relaxed">
            We use cookies to serve relevant ads via Google AdSense. These ads help keep the site free to use. You can
            manage your ad preferences through your browser settings at any time.
          </p>
        </div>
      </div>

      {/* 3. ACCURACY NOTE */}
      <section className="space-y-4 border-t border-slate-100 pt-12">
        <h3 className="text-xl font-black uppercase italic">The &quot;Actual Reality&quot; Clause</h3>
        <p className="text-slate-600 leading-relaxed text-sm">
          While we spend a massive amount of time auditing school schedules and historical patterns, Disneyland is
          unpredictable. Weather, ride breakdowns, and unannounced events can change the feel of the park instantly.
          Our data is a <strong>forecast</strong>, not a guarantee. We are not responsible for any travel decisions
          made based on this site’s information.
        </p>
      </section>

      {/* 4. CONTACT */}
      <section className="text-center bg-slate-50 p-10 rounded-[2.5rem] border border-slate-100">
        <Mail className="mx-auto mb-4 text-blue-600" size={32} />
        <h3 className="text-lg font-black uppercase">Questions?</h3>
        <p className="text-sm text-slate-500 mb-6">
          If you have concerns about our data or privacy practices, reach out.
        </p>
        <a
          href="mailto:contact@anaheimcrowds.com"
          className="text-blue-600 font-bold hover:underline"
        >
          contact@anaheimcrowds.com
        </a>
      </section>
    </div>
  );
}
