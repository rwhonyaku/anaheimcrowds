import { 
  SOCAL_2025_2026, 
  MAJOR_CONVENTIONS, 
  PEAK_TIER_DATES, 
  VALUE_DATES 
} from "./school-data";
import { isWeekend, parseISO, isWithinInterval, format } from "date-fns";

export type CrowdLevel = {
  score: number; // 1-10
  label: "Lower" | "Busy" | "Heavy";
  color: string;
  description: string;
};

export function getCrowdEstimate(dateString: string): CrowdLevel {
  const date = parseISO(dateString);
  const dateKey = format(date, 'yyyy-MM-dd');
  
  // Start with a neutral baseline
  let score = 5;

  // 1. School Breaks (The "Locals" Factor)
  // High impact for Disneyland as it is a locals-heavy park
  const isSchoolBreak = SOCAL_2025_2026.some((period) =>
    isWithinInterval(date, {
      start: parseISO(period.startDate),
      end: parseISO(period.endDate),
    })
  );
  if (isSchoolBreak) score += 3;

  // 2. Disney Demand Tiers (The "Price" Factor)
  // If Disney sets a Tier 5 or 6 price, they expect maximum capacity
  if (PEAK_TIER_DATES.includes(dateKey)) score += 3;
  
  // If Disney sets a Tier 0 or 1 price, it's a confirmed "Value" day
  if (VALUE_DATES.includes(dateKey)) score -= 2;

  // 3. Anaheim Conventions (The "Hotel" Factor)
  // Massive events like Expo West (March) or D23 (August) saturate the area
  const activeConvention = MAJOR_CONVENTIONS.find(event => 
    isWithinInterval(date, { start: parseISO(event.start), end: parseISO(event.end) })
  );
  if (activeConvention) score += 1;

  // 4. Weekend vs Weekday
  // Standard logic: Weekends are busier, but Sundays are often lighter than Saturdays
  if (isWeekend(date)) {
    score += (format(date, 'EEEE') === 'Saturday') ? 2 : 1;
  }

  // 5. Final Score Normalization (Clamp between 1 and 10)
  const finalScore = Math.max(1, Math.min(score, 10));

  // 6. Strategist Labels & Colors
  if (finalScore <= 4) {
    return { 
      score: finalScore, 
      label: "Lower", 
      color: "text-green-600",
      description: "One of the lighter dates on the calendar."
    };
  }
  
  if (finalScore <= 7) {
    return { 
      score: finalScore, 
      label: "Busy", 
      color: "text-amber-600",
      description: "A workable date that still needs a solid morning plan."
    };
  }

  return { 
    score: finalScore, 
    label: "Heavy", 
    color: "text-red-600",
    description: "A hard date with long waits and less room for mistakes."
  };
}
