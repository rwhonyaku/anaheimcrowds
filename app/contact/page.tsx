import type { Metadata } from "next";
import { Mail, AlertCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact | AnaheimCrowds",
  description: "Contact AnaheimCrowds.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 space-y-8 py-12">
      <section className="bg-slate-900 text-white rounded-2xl p-8 space-y-4 shadow-xl">
        <h1 className="text-3xl font-black tracking-tight">Contact</h1>
        <p className="text-slate-400">
          Found a mistake in a 2026 date, park policy note, or hotel walk time? Email us. We’d rather fix the data than defend it.
        </p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <section className="bg-white border border-slate-200 rounded-2xl p-6 space-y-4 shadow-sm">
          <div className="flex items-center gap-2 text-blue-600 font-bold">
            <Mail size={20} />
            <h2>General</h2>
          </div>
          <a
            href="mailto:support@anaheimcrowds.com"
            className="text-xl font-bold text-slate-900 hover:text-blue-600 underline decoration-blue-200 underline-offset-4 transition-colors"
          >
            support@anaheimcrowds.com
          </a>
          <p className="text-sm text-slate-500">
            If you’re reporting an issue, include the date and what page you were on.
          </p>
        </section>

        <section className="bg-amber-50 border border-amber-200 rounded-2xl p-6 space-y-4">
          <div className="flex items-center gap-2 text-amber-700 font-bold">
            <AlertCircle size={20} />
            <h2>Report something that felt “off”</h2>
          </div>
          <p className="text-sm text-amber-800 leading-relaxed">
            If a “low crowd” day felt unusually heavy, tell us the date, which park you visited, your entry time,
            and what you noticed (security backup, return times disappearing early, unusually dense evenings, etc.).
          </p>
        </section>
      </div>
    </div>
  );
}
