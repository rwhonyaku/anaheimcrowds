export function DateReasons({ reasons }: { reasons: string[] }) {
  return (
    <details className="mt-3 text-sm text-slate-700">
      <summary className="cursor-pointer font-bold">Why this date looks this way</summary>
      <ul className="mt-3 list-disc space-y-2 pl-5">
        {reasons.map((reason) => <li key={reason}>{reason}</li>)}
      </ul>
      <p className="mt-3 text-xs text-slate-500">An estimate for comparing dates, not a promise of wait times. Disneyland and Disney California Adventure can differ.</p>
    </details>
  );
}
