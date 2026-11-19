import { 
  SOCAL_2025_2026, 
  MAJOR_CONVENTIONS, 
  PEAK_TIER_DATES, 
  VALUE_DATES 
} from "./school-data";
import { isWeekend, parseISO, isWithinInterval, format } from "date-fns";

export type CrowdLevel = {
  reasons: string[];
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
  const reasons: string[] = [];

  // 1. School breaks
  const schoolBreakImpact = SOCAL_2025_2026.reduce((impact, period) => {
    const isActive = isWithinInterval(date, {
      start: parseISO(period.startDate),
      end: parseISO(period.endDate),
    });

    if (!isActive) return impact;
    reasons.push(`${period.breakType}: ${period.notes}`);

    const periodImpact =
      period.coverage === "High" ? 3 : period.coverage === "Medium" ? 2 : 1;

    return Math.max(impact, periodImpact);
  }, 0);

  score += schoolBreakImpact;

  // 2. Disney ticket tiers
  if (PEAK_TIER_DATES.includes(dateKey)) {
    score += 3;
    reasons.push("A higher ticket tier is listed for this date, which raises our crowd estimate.");
  }
  
  // Disney's lowest ticket tiers usually point to easier dates.
  if (VALUE_DATES.includes(dateKey)) {
    score -= 2;
    reasons.push("A lower ticket tier is listed for this date, which lowers our crowd estimate.");
  }

  // 3. Anaheim conventions
  const activeConvention = MAJOR_CONVENTIONS.find(event => 
    isWithinInterval(date, { start: parseISO(event.start), end: parseISO(event.end) })
  );
  if (activeConvention) {
    score += 1;
    reasons.push(`${activeConvention.name} is listed in Anaheim on this date. Nearby hotels may be busier; convention attendance does not necessarily mean longer ride waits.`);
  }

  // 4. Weekend vs Weekday
  if (isWeekend(date)) {
    score += (format(date, 'EEEE') === 'Saturday') ? 2 : 1;
    reasons.push(format(date, 'EEEE') === 'Saturday'
      ? "Saturday adds to the estimate because weekend visits can make the parks busier."
      : "Sunday adds to the estimate, though less than Saturday.");
  }
  if (!schoolBreakImpact) reasons.push("No school-break window is listed in our calendar for this date. That does not mean every district is in class.");
  if (!isWeekend(date)) reasons.push("This is a weekday, so no weekend increase is included.");
  if (!PEAK_TIER_DATES.includes(dateKey) && !VALUE_DATES.includes(dateKey)) {
    reasons.push("No ticket-price adjustment is included for this date. Check Disney for current prices, hours, reservations, and closures before booking.");
  }

  // 5. Clamp between 1 and 10
  const finalScore = Math.max(1, Math.min(score, 10));

  // 6. Labels and colors
  if (finalScore <= 4) {
    return { 
      score: finalScore, 
      reasons,
      label: "Lower", 
      color: "text-green-600",
      description: "One of the lighter dates on the calendar."
    };
  }
  
  if (finalScore <= 7) {
    return { 
      score: finalScore, 
      reasons,
      label: "Busy", 
      color: "text-amber-600",
      description: "A workable date that still needs a solid morning plan."
    };
  }

  return { 
    score: finalScore, 
    reasons,
    label: "Heavy", 
    color: "text-red-600",
    description: "A hard date with long waits and less room for mistakes."
  };
}
