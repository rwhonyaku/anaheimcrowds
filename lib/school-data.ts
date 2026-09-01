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

export type SoCalDistrictBreak = {
  region: "Los Angeles" | "Orange County" | "San Diego" | "Inland Empire";
  district: string;
  firstDay: string;
  thanksgiving: string;
  winterBreak: string;
  springBreak: string;
  lastDay: string;
  notes: string;
  sourceLabel: string;
  sourceUrl: string;
};

export type UtahFallBreakDistrict = {
  district: string;
  dates: string;
  notes: string;
  sourceLabel: string;
  sourceUrl: string;
};

export type Convention = {
  name: string;
  start: string; // YYYY-MM-DD
  end: string;   // YYYY-MM-DD
  impact: "High" | "Medium";
};

/**
 * Disney tier type (0-6).
 * We store per-date tiers here so the crowd engine can weight them directly.
 */
export type DisneyTier = 0 | 1 | 2 | 3 | 4 | 5 | 6;

/**
 * 2026-27 REGIONAL SCHOOL CALENDAR (SoCal + key feeder markets)
 */
export const SOCAL_2025_2026: SchoolBreak[] = [
  {
    breakType: "Winter Break",
    dateRange: "Dec 22 – Jan 9",
    startDate: "2025-12-22",
    endDate: "2026-01-09",
    coverage: "High",
    notes: "The post-New Year stretch stays busy because some districts remain out longer than others.",
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
    notes: "Presidents Day long weekends overlap with ski-week travel from Northern California.",
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
    notes: "Most Southern California districts are out, so weekdays still carry summer-level crowds.",
    la: "Jun 4 – Aug 25",
    oc: "May 25 – Aug 18",
    sd: "May 26 – Aug 10",
    ie: "May 27 – Aug 10",
  },
  {
    breakType: "Late Summer School Return",
    dateRange: "Aug 14-25",
    startDate: "2026-08-14",
    endDate: "2026-08-25",
    coverage: "Low",
    notes: "San Diego and Inland Empire districts are mostly back, but LAUSD, Long Beach, and some Orange County students are still finishing summer.",
    la: "LAUSD starts Aug 12; Long Beach starts Aug 25",
    oc: "Many districts start Aug 10-18",
    sd: "Most students back Aug 10",
    ie: "Most students back Aug 3-10",
  },
  {
    breakType: "Thanksgiving Week",
    dateRange: "Nov 23-29",
    startDate: "2026-11-23",
    endDate: "2026-11-29",
    coverage: "High",
    notes: "Most Southern California districts are out for the full week or at least the Thursday-Friday holiday, making this a busy travel week.",
    la: "Nov 23-27",
    oc: "Nov 23-27",
    sd: "Nov 23-27",
    ie: "Nov 23-27",
  },
  {
    breakType: "Winter Break 2026-27",
    dateRange: "Dec 19-Jan 10",
    startDate: "2026-12-19",
    endDate: "2027-01-10",
    coverage: "High",
    notes: "The Christmas and New Year weeks overlap across every local region, with LAUSD and some other districts staying out into early January.",
    la: "Dec 21 – Jan 8",
    oc: "Dec 19 – Jan 10",
    sd: "Dec 21 – Jan 4",
    ie: "Dec 21 – Jan 8",
  },
  {
    breakType: "Utah Fall Break Window",
    dateRange: "Oct 14-23",
    startDate: "2026-10-14",
    endDate: "2026-10-23",
    coverage: "Medium",
    notes: "Many large Utah districts have no-school days from Oct 14-23, with the first wave Oct 15-16 and Jordan later on Oct 20-23.",
    la: "N/A",
    oc: "N/A",
    sd: "N/A",
    ie: "N/A",
  },
  {
    breakType: "Spring Break 2027",
    dateRange: "Mar 13-Apr 9",
    startDate: "2027-03-13",
    endDate: "2027-04-09",
    coverage: "High",
    notes: "Spring break is staggered across Southern California, so late March and early April should be treated carefully.",
    la: "Mar 20 – Mar 28",
    oc: "Mar 13 – Apr 9",
    sd: "Mar 29 – Apr 2",
    ie: "Mar 29 – Apr 2",
  },
];

export const SOCAL_DISTRICT_BREAKS_2026_2027: SoCalDistrictBreak[] = [
  {
    region: "Los Angeles",
    district: "Los Angeles Unified School District",
    firstDay: "Aug 12, 2026",
    thanksgiving: "Nov 23-27, 2026",
    winterBreak: "Dec 21, 2026-Jan 8, 2027",
    springBreak: "Mar 22-26, 2027",
    lastDay: "Jun 4, 2027",
    notes: "LAUSD keeps a longer winter break than many nearby districts, extending the post-New Year travel window.",
    sourceLabel: "LAUSD 2026-2027 instructional calendar",
    sourceUrl: "https://www.lausd.org/apps/pages/index.jsp?uREC_ID=4432518&type=d&pREC_ID=2672183",
  },
  {
    region: "Los Angeles",
    district: "Long Beach Unified School District",
    firstDay: "Aug 25, 2026",
    thanksgiving: "Nov 23-27, 2026",
    winterBreak: "Dec 21, 2026-Jan 1, 2027",
    springBreak: "Apr 5-9, 2027",
    lastDay: "Jun 10, 2027",
    notes: "Long Beach starts later and also has an April spring break, which stretches the larger spring travel period.",
    sourceLabel: "Long Beach Unified 2026-2027 school calendar",
    sourceUrl: "https://www.lbschools.net/about/calendar",
  },
  {
    region: "Orange County",
    district: "Garden Grove Unified School District",
    firstDay: "Aug 10, 2026",
    thanksgiving: "Nov 23-27, 2026",
    winterBreak: "Dec 21, 2026-Jan 4, 2027",
    springBreak: "Mar 15-19, 2027",
    lastDay: "May 25, 2027",
    notes: "Garden Grove brings an earlier March break into the local mix.",
    sourceLabel: "Garden Grove Unified 2026-2027 school year calendar",
    sourceUrl: "https://www.ggusd.k12.ca.us/schools/calendar",
  },
  {
    region: "Orange County",
    district: "Anaheim Elementary School District",
    firstDay: "Aug 6, 2026",
    thanksgiving: "Nov 23-27, 2026",
    winterBreak: "Dec 21, 2026-Jan 8, 2027",
    springBreak: "Mar 22-26, 2027",
    lastDay: "Jun 3, 2027",
    notes: "Anaheim Elementary adds the closest local elementary-school schedule to the resort area.",
    sourceLabel: "Anaheim Elementary 2026-2027 student calendar",
    sourceUrl: "https://anaheimelementary.org/calendars/",
  },
  {
    region: "Orange County",
    district: "Anaheim Union High School District",
    firstDay: "Aug 12, 2026",
    thanksgiving: "Nov 23-27, 2026",
    winterBreak: "Dec 21, 2026-Jan 1, 2027",
    springBreak: "Mar 22-26, 2027",
    lastDay: "May 27, 2027",
    notes: "Anaheim Union is the closest high-school district to the resort and lines up with the March 22 spring-break week.",
    sourceLabel: "Anaheim Union High School District 2026-2027 calendar reference",
    sourceUrl: "https://schools-calendar.com/school-calendar/ca/anaheim-union-high-school-district/",
  },
  {
    region: "Orange County",
    district: "Santa Ana Unified School District",
    firstDay: "Aug 10, 2026",
    thanksgiving: "Nov 23-27, 2026",
    winterBreak: "Dec 21, 2026-Jan 1, 2027",
    springBreak: "Apr 5-9, 2027",
    lastDay: "May 28, 2027",
    notes: "Santa Ana shares the early-August start but places spring break in early April.",
    sourceLabel: "Santa Ana Unified 2026-2027 calendar reference",
    sourceUrl: "https://www.californiaschoolcalendar.com/santa-ana-unified/2026-2027/",
  },
  {
    region: "Orange County",
    district: "Irvine Unified School District",
    firstDay: "Aug 18, 2026",
    thanksgiving: "Nov 23-27, 2026",
    winterBreak: "Dec 21, 2026-Jan 1, 2027",
    springBreak: "Mar 29-Apr 2, 2027",
    lastDay: "Jun 4, 2027",
    notes: "Irvine starts later than Anaheim and Garden Grove, and its spring break lands in the late-March wave.",
    sourceLabel: "Irvine Unified 2026-2027 calendar reference",
    sourceUrl: "https://www.educounty.net/calendars/california/irvine-unified-school-district-iusd/",
  },
  {
    region: "Orange County",
    district: "Capistrano Unified School District",
    firstDay: "Aug 18, 2026",
    thanksgiving: "Nov 23-27, 2026",
    winterBreak: "Dec 21, 2026-Jan 1, 2027",
    springBreak: "Apr 5-9, 2027",
    lastDay: "Jun 3, 2027",
    notes: "Capistrano adds another later-starting Orange County district and a spring break in early April.",
    sourceLabel: "Capistrano Unified 2026-2027 calendar",
    sourceUrl: "https://www.capousd.org/District/Our-District/Calendars/",
  },
  {
    region: "San Diego",
    district: "San Diego Unified School District",
    firstDay: "Aug 10, 2026",
    thanksgiving: "Nov 23-27, 2026",
    winterBreak: "Dec 21, 2026-Jan 4, 2027",
    springBreak: "Mar 29-Apr 2, 2027",
    lastDay: "May 26, 2027",
    notes: "San Diego returns earlier than LAUSD after winter break, but its spring break lands in the late-March wave.",
    sourceLabel: "San Diego Unified 2026-2027 academic calendars",
    sourceUrl: "https://www.sandiegounified.org/academics/academic_calendars",
  },
  {
    region: "Inland Empire",
    district: "Riverside Unified School District",
    firstDay: "Aug 10, 2026",
    thanksgiving: "Nov 23-27, 2026",
    winterBreak: "Dec 21, 2026-Jan 1, 2027",
    springBreak: "Mar 29-Apr 2, 2027",
    lastDay: "May 27, 2027",
    notes: "Riverside lines up with the late-March spring break wave.",
    sourceLabel: "Riverside Unified 2026-2027 calendar-at-a-glance",
    sourceUrl: "https://www.riversideunified.org/our-district/district-calendar",
  },
  {
    region: "Inland Empire",
    district: "San Bernardino City Unified School District",
    firstDay: "Aug 3, 2026",
    thanksgiving: "Nov 23-27, 2026",
    winterBreak: "Dec 21, 2026-Jan 8, 2027",
    springBreak: "Mar 22-Apr 2, 2027",
    lastDay: "Jun 3, 2027",
    notes: "San Bernardino adds a longer winter break and a broad late-March spring-break window to the Inland Empire picture.",
    sourceLabel: "San Bernardino City Unified 2026-2027 school year calendar",
    sourceUrl: "https://www.sbcusd.com/about-us/school-year-calendars",
  },
];

export const UTAH_FALL_BREAK_2026: UtahFallBreakDistrict[] = [
  {
    district: "Davis School District",
    dates: "Oct 15-16",
    notes: "Students are also out Oct 14 for professional development; classes resume Oct 19.",
    sourceLabel: "Davis School District calendar page",
    sourceUrl: "https://www.davis.k12.ut.us/documents/parent-information/school-year-calendar/26371133",
  },
  {
    district: "Canyons School District",
    dates: "Oct 15-16",
    notes: "District K-12 calendar lists Fall Recess on Oct 15 and Oct 16.",
    sourceLabel: "Canyons School District 2026-2027 calendars",
    sourceUrl: "https://www.canyonsdistrict.org/calendars/employee-calendars/2026-2027/",
  },
  {
    district: "Granite School District",
    dates: "Oct 15-16",
    notes: "Fall Break is Oct 15-16, with additional student recess days shown Oct 19-20.",
    sourceLabel: "Granite 2026-27 calendar reference",
    sourceUrl: "https://schools-calendar.com/school-calendar/ut/granite-school-district/",
  },
  {
    district: "Alpine School District",
    dates: "Oct 15-16",
    notes: "Fall Break is Oct 15-16; Oct 19 is a staff workday before students return.",
    sourceLabel: "Alpine School District calendars",
    sourceUrl: "https://www.alpineschools.org/page/district-calendars",
  },
  {
    district: "Jordan School District",
    dates: "Oct 20-23",
    notes: "Students are also out Oct 19 for grade transmittal, creating a longer late-October break.",
    sourceLabel: "Jordan School District calendars",
    sourceUrl: "https://planning.jordandistrict.org/calendars/",
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

  // Middle tiers
  const tier1 = ["2026-01-05", "2026-02-23", "2026-03-02", "2026-09-14"];
  for (const d of tier1) map[d] = 1;

  const tier3 = ["2026-01-09", "2026-02-20", "2026-03-08", "2026-05-25"];
  for (const d of tier3) map[d] = 3;

  // High Tiers
  for (const d of TIER_4_DATES) map[d] = 4;
  for (const d of TIER_5_DATES) map[d] = 5;

  // Highest tier
  for (const d of TIER_6_DATES) map[d] = 6;

  return map;
})();

export function getDisneyTier(dateISO: string): DisneyTier | null {
  return TIER_BY_DATE[dateISO] ?? null;
}
