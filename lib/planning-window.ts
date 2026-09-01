export type PlanningMonth = {
  name: string;
  slug: string;
  year: number;
  monthIndex: number;
  href: string;
  label: string;
};

export const MONTH_NAMES = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
] as const;

export const MONTH_SLUGS = MONTH_NAMES.map((month) => month.toLowerCase());

export function getMonthHref(year: number, slug: string) {
  return year === 2026 ? `/crowds/${slug}` : `/crowds/${year}/${slug}`;
}

export function getPlanningMonths(referenceDate = new Date(), count = 12): PlanningMonth[] {
  const startYear = referenceDate.getFullYear();
  const startMonth = referenceDate.getMonth();

  return Array.from({ length: count }, (_, offset) => {
    const monthDate = new Date(startYear, startMonth + offset, 1);
    const year = monthDate.getFullYear();
    const monthIndex = monthDate.getMonth();
    const name = MONTH_NAMES[monthIndex];
    const slug = MONTH_SLUGS[monthIndex];

    return {
      name,
      slug,
      year,
      monthIndex,
      href: getMonthHref(year, slug),
      label: `${name} ${year}`,
    };
  });
}

export function getEarlier2026Months(referenceDate = new Date()): PlanningMonth[] {
  if (referenceDate.getFullYear() > 2026) {
    return MONTH_NAMES.map((name, monthIndex) => {
      const slug = MONTH_SLUGS[monthIndex];
      return {
        name,
        slug,
        year: 2026,
        monthIndex,
        href: getMonthHref(2026, slug),
        label: `${name} 2026`,
      };
    });
  }

  if (referenceDate.getFullYear() < 2026) return [];

  return MONTH_NAMES.slice(0, referenceDate.getMonth()).map((name, monthIndex) => {
    const slug = MONTH_SLUGS[monthIndex];
    return {
      name,
      slug,
      year: 2026,
      monthIndex,
      href: getMonthHref(2026, slug),
      label: `${name} 2026`,
    };
  });
}
