export type SchoolBreak = {
  breakType: string;
  dateRange: string;
  coverage: "High" | "Medium" | "Low";
  notes: string;
  la: string;
  oc: string;
  sd: string;
  ie: string;
  startDate: string;
  endDate: string;
};

export type Convention = {
  name: string;
  start: string; // YYYY-MM-DD
  end: string;   // YYYY-MM-DD
  impact: "High" | "Medium";
};

/**
 * Disney tier type (0–6).
 * We store per-date tiers here so the crowd engine can weight them directly.
 */
export type DisneyTier = 0 | 1 | 2 | 3 | 4 | 5 | 6;

/**
 * 2026 REGIONAL SCHOOL CALENDAR (SoCal baseline)
 */
export const SOCAL_2025_2026: SchoolBreak[] = [
  {
    breakType: "Winter Break",
    dateRange: "Dec 22 – Jan 9",
    startDate: "2025-12-22",
    endDate: "2026-01-09",
    coverage: "High",
    notes: "Post-New Year crush as some districts extend later than others.",
    la: "Dec 22 – Jan 9",
    oc: "Dec 22 – Jan 2",
    sd: "Dec 22 – Jan 2",
    ie: "Dec 22 – Jan 9",
  },
  {
    breakType: "Ski Week / Presidents",
    dateRange: "Feb 13 – Feb 20",
    startDate: "2026-02-13",
    endDate: "2026-02-20",
    coverage: "Medium",
    notes: "NorCal ski week overlap + local 3–4 day weekends.",
    la: "Feb 13 – Feb 16",
    oc: "Feb 13 – Feb 16",
    sd: "Feb 13 – Feb 16",
    ie: "Feb 13 – Feb 20",
  },
  {
    breakType: "Spring Break",
    dateRange: "Mar 23 – Apr 10",
    startDate: "2026-03-23",
    endDate: "2026-04-10",
    coverage: "High",
    notes: "The late-March travel wave starts; overlaps hit hardest on weekends.",
    la: "Mar 30 – Apr 3",
    oc: "Mar 30 – Apr 3",
    sd: "Mar 30 – Apr 3",
    ie: "Mar 23 – Apr 3",
  },
  {
    breakType: "Summer Break",
    dateRange: "May 28 – Aug 13",
    startDate: "2026-05-28",
    endDate: "2026-08-13",
    coverage: "High",
    notes: "Grad Nite season flows into summer peak.",
    la: "Jun 10 – Aug 12",
    oc: "Jun 5 – Aug 13",
    sd: "May 28 – Aug 10",
    ie: "Jun 4 – Aug 3",
  },
  {
    breakType: "Utah Fall Break Window (Travel Impact)",
    dateRange: "Mid-October (varies by district)",
    startDate: "2026-10-15",
    endDate: "2026-10-18",
    coverage: "Medium",
    notes: "Many Utah districts cluster fall recess in mid-October.",
    la: "N/A",
    oc: "N/A",
    sd: "N/A",
    ie: "N/A",
  },
];

export const MAJOR_CONVENTIONS: Convention[] = [
  { name: "NAMM Show", start: "2026-01-22", end: "2026-01-25", impact: "High" },
  { name: "Natural Products Expo West", start: "2026-03-04", end: "2026-03-07", impact: "High" },
  { name: "WonderCon", start: "2026-03-27", end: "2026-03-29", impact: "Medium" },
  { name: "VidCon", start: "2026-06-24", end: "2026-06-27", impact: "Medium" },
  { name: "Disney D23 Expo", start: "2026-08-07", end: "2026-08-09", impact: "High" },
];

/** * 2026 DISNEY TIER SIGNALING DATA 
 */

// Tier 6: Maximum Demand ($224)
export const TIER_6_DATES = [
  "2026-01-01", "2026-01-02", "2026-01-03", "2026-12-25", "2026-12-31"
];

// CRITICAL FIX: Alias for the crowd engine
export const PEAK_TIER_DATES = TIER_6_DATES;

// Tier 5: High-Demand Saturdays/Holidays ($199)
export const TIER_5_DATES = [
  "2026-01-04", "2026-02-14", "2026-02-15", "2026-03-28", "2026-03-29", 
  "2026-04-03", "2026-04-04", "2026-05-02", "2026-05-16", "2026-05-23", 
  "2026-05-30", "2026-06-06", "2026-06-13", "2026-06-20", "2026-06-27",
  "2026-07-04", "2026-07-11", "2026-07-18", "2026-07-25", "2026-08-01", 
  "2026-08-08", "2026-08-15", "2026-08-22", "2026-09-05", "2026-09-12", 
  "2026-09-19", "2026-10-03", "2026-10-10"
];

// Tier 4: Most Weekends/Fridays ($184)
export const TIER_4_DATES = [
  "2026-01-10", "2026-01-11", "2026-01-17", "2026-01-18", "2026-01-24", 
  "2026-01-31", "2026-02-07", "2026-02-08", "2026-02-21", "2026-03-07", 
  "2026-03-14", "2026-03-21", "2026-03-22", "2026-03-27", "2026-03-30",
  "2026-04-02", "2026-04-05", "2026-04-11", "2026-04-12", "2026-04-18", 
  "2026-04-19", "2026-04-25", "2026-04-26", "2026-05-01", "2026-05-03",
  "2026-10-04", "2026-10-05", "2026-10-06", "2026-10-07", "2026-10-11", "2026-10-12"
];

// Tier 0: Insider Value Baseline ($104)
export const VALUE_DATES = [
  "2026-01-06", "2026-01-07", "2026-01-08", "2026-01-12", "2026-01-13", 
  "2026-01-14", "2026-01-15", "2026-01-20", "2026-01-21", "2026-01-22", 
  "2026-01-26", "2026-01-27", "2026-02-03", "2026-02-04", "2026-02-05", 
  "2026-02-10", "2026-02-11", "2026-02-12", "2026-02-24", "2026-02-25", 
  "2026-02-26", "2026-03-03", "2026-03-04", "2026-03-05", "2026-04-21", 
  "2026-04-22", "2026-04-23", "2026-04-28", "2026-04-29", "2026-04-30", 
  "2026-05-05", "2026-05-06", "2026-05-12", "2026-05-13", "2026-06-01", 
  "2026-06-02", "2026-06-03", "2026-06-04", "2026-09-15", "2026-09-16", 
  "2026-09-17", "2026-09-21", "2026-09-22", "2026-09-23", "2026-09-24", 
  "2026-09-29"
];

export const TIER_BY_DATE: Record<string, DisneyTier> = (() => {
  const map: Record<string, DisneyTier> = {};

  // Baseline
  for (const d of VALUE_DATES) map[d] = 0;

  // Intermediate signals
  const tier1 = ["2026-01-05", "2026-02-23", "2026-03-02", "2026-09-14"];
  for (const d of tier1) map[d] = 1;

  const tier3 = ["2026-01-09", "2026-02-20", "2026-03-08", "2026-05-25"];
  for (const d of tier3) map[d] = 3;

  // High Tiers
  for (const d of TIER_4_DATES) map[d] = 4;
  for (const d of TIER_5_DATES) map[d] = 5;

  // Maximum Signal
  for (const d of TIER_6_DATES) map[d] = 6;

  return map;
})();

export function getDisneyTier(dateISO: string): DisneyTier | null {
  return TIER_BY_DATE[dateISO] ?? null;
}