import Link from "next/link";

const months = [
  "January", "February", "March", "April", "May", "June", 
  "July", "August", "September", "October", "November", "December"
];

export function MonthNavigation({ currentMonth }: { currentMonth: string }) {
  return (
    <nav className="py-8 border-b border-slate-100 mb-12 overflow-x-auto">
      <div className="flex gap-2 min-w-max">
        {months.map((month) => (
          <Link
            key={month}
            href={`/crowds/${month.toLowerCase()}`}
            className={`px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest transition-all ${
              currentMonth.toLowerCase() === month.toLowerCase()
                ? "bg-blue-600 text-white italic"
                : "bg-slate-100 text-slate-400 hover:bg-slate-200"
            }`}
          >
            {month}
          </Link>
        ))}
      </div>
    </nav>
  );
}