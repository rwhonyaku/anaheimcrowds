export type MonthGuide2027 = {
  slug: string;
  name: string;
  title: string;
  intro: string;
  bestDates: string;
  avoidDates: string;
  notes: string[];
  nearbyLinks: { href: string; label: string }[];
};

export const MONTH_GUIDES_2027: MonthGuide2027[] = [
  {
    slug: "january",
    name: "January",
    title: "Disneyland Crowds in January 2027",
    intro:
      "January starts busy while winter break is still active, then usually becomes one of the better winter planning windows after schools reopen.",
    bestDates: "Midweek dates after Jan 11",
    avoidDates: "Jan 1-10 and MLK weekend",
    notes: [
      "LAUSD is scheduled to remain out through Jan 8, so the first full week still deserves caution.",
      "After the holiday break ends, Tuesday through Thursday dates usually become easier than the surrounding weekends.",
      "Watch for ride closures, because January can trade lighter crowds for more maintenance work.",
    ],
    nearbyLinks: [
      { href: "/crowds/december", label: "December 2026 crowds" },
      { href: "/crowds/2027/february", label: "February 2027 crowds" },
    ],
  },
  {
    slug: "february",
    name: "February",
    title: "Disneyland Crowds in February 2027",
    intro:
      "February can be very useful before Presidents Day, but long weekends and school breaks can change the feel quickly.",
    bestDates: "Early February weekdays",
    avoidDates: "Presidents Day weekend and the following week",
    notes: [
      "The first half of February is usually easier than the second half.",
      "Presidents Day can pull in both local visitors and short fly-in trips.",
      "If you can choose Tuesday through Thursday before the holiday weekend, start there.",
    ],
    nearbyLinks: [
      { href: "/crowds/2027/january", label: "January 2027 crowds" },
      { href: "/crowds/2027/march", label: "March 2027 crowds" },
    ],
  },
  {
    slug: "march",
    name: "March",
    title: "Disneyland Crowds in March 2027",
    intro:
      "March is shaped by spring break. Some Orange County districts start earlier, while LAUSD and Anaheim-area districts build into the March 22 week.",
    bestDates: "Early March weekdays before spring break grows",
    avoidDates: "Mar 13-31",
    notes: [
      "Garden Grove is scheduled for spring break Mar 15-19.",
      "LAUSD, Anaheim Elementary, Anaheim Union, and San Bernardino are part of the Mar 22-26 week.",
      "The last two weeks of March should be planned like busy travel dates, not ordinary weekdays.",
    ],
    nearbyLinks: [
      { href: "/school-breaks-calendar", label: "School Break Calendar" },
      { href: "/crowds/2027/april", label: "April 2027 crowds" },
    ],
  },
  {
    slug: "april",
    name: "April",
    title: "Disneyland Crowds in April 2027",
    intro:
      "April starts with lingering spring-break travel, then improves after the main school-break stretch clears.",
    bestDates: "Midweek dates after Apr 12",
    avoidDates: "Apr 1-9",
    notes: [
      "Long Beach, Santa Ana, and Capistrano are scheduled for spring break Apr 5-9.",
      "Early April can still feel busy even after some districts have returned.",
      "The second half of April is often more useful if you want a calmer spring trip.",
    ],
    nearbyLinks: [
      { href: "/crowds/2027/march", label: "March 2027 crowds" },
      { href: "/crowds/2027/may", label: "May 2027 crowds" },
    ],
  },
  {
    slug: "may",
    name: "May",
    title: "Disneyland Crowds in May 2027",
    intro:
      "May is often one of the better months before summer, but the last week begins to change as schools finish for the year.",
    bestDates: "Early and mid-May weekdays",
    avoidDates: "Memorial Day weekend and the final week",
    notes: [
      "Several Orange County and San Diego-area districts finish school in late May.",
      "The first half of May is usually the better choice if you want lighter crowds and comfortable weather.",
      "Memorial Day weekend starts the summer travel pattern earlier than many visitors expect.",
    ],
    nearbyLinks: [
      { href: "/crowds/2027/april", label: "April 2027 crowds" },
      { href: "/crowds/2027/june", label: "June 2027 crowds" },
    ],
  },
  {
    slug: "june",
    name: "June",
    title: "Disneyland Crowds in June 2027",
    intro:
      "June moves from end-of-school trips into full summer travel. The later you go, the more the parks behave like peak vacation season.",
    bestDates: "Early June weekdays",
    avoidDates: "Late June weekends",
    notes: [
      "By mid-June, most nearby districts are out for summer.",
      "Early June can still be better than July if you start early and avoid weekends.",
      "Hotel breaks matter more once afternoons get hot and walkways stay busy later.",
    ],
    nearbyLinks: [
      { href: "/crowds/2027/may", label: "May 2027 crowds" },
      { href: "/crowds/2027/july", label: "July 2027 crowds" },
    ],
  },
  {
    slug: "july",
    name: "July",
    title: "Disneyland Crowds in July 2027",
    intro:
      "July is summer at full strength: family travel, long operating days, heat, and fewer truly quiet dates.",
    bestDates: "Midweek dates away from July 4",
    avoidDates: "July 4 week and Saturdays",
    notes: [
      "The July 4 holiday keeps the first week busy.",
      "Weekdays are still better than Saturdays, but summer crowds do not disappear midweek.",
      "Plan breaks before the afternoon heat, not after everyone is already worn down.",
    ],
    nearbyLinks: [
      { href: "/crowds/2027/june", label: "June 2027 crowds" },
      { href: "/crowds/2027/august", label: "August 2027 crowds" },
    ],
  },
  {
    slug: "august",
    name: "August",
    title: "Disneyland Crowds in August 2027",
    intro:
      "August starts as summer, then begins to improve as Southern California schools return. Exact district dates will be clearer as more 2027-28 calendars are posted.",
    bestDates: "Late August weekdays",
    avoidDates: "Early August weekends",
    notes: [
      "Early August is still a summer travel period.",
      "Late August usually gets easier as more families return to school routines.",
      "Check this month again before booking, because school start dates matter more here than in most months.",
    ],
    nearbyLinks: [
      { href: "/crowds/2027/july", label: "July 2027 crowds" },
      { href: "/school-breaks-calendar", label: "School Break Calendar" },
    ],
  },
  {
    slug: "september",
    name: "September",
    title: "Disneyland Crowds in September 2027",
    intro:
      "September is often one of the better fall choices after Labor Day, especially on Tuesday through Thursday dates before Halloween demand builds.",
    bestDates: "Mid-September weekdays after Labor Day",
    avoidDates: "Labor Day weekend and Friday nights",
    notes: [
      "Halloween season can start before September, so the month is not automatically quiet.",
      "After Labor Day, school schedules usually help weekdays more than weekends.",
      "Friday evenings can feel busier than the crowd level suggests because local visits pick up after work.",
    ],
    nearbyLinks: [
      { href: "/crowds/2027/august", label: "August 2027 crowds" },
      { href: "/crowds/2027/october", label: "October 2027 crowds" },
    ],
  },
  {
    slug: "october",
    name: "October",
    title: "Disneyland Crowds in October 2027",
    intro:
      "October is no longer a quiet fall secret. Halloween season, weekends, and fall breaks can make the middle and end of the month very busy.",
    bestDates: "Early October weekdays",
    avoidDates: "Fall-break weeks, weekends, and Halloween week",
    notes: [
      "Utah fall break dates matter for October and should be checked again once 2027 district calendars are posted.",
      "Early October weekdays are usually easier than the back half of the month.",
      "Halloween week often draws both travelers and local visitors.",
    ],
    nearbyLinks: [
      { href: "/crowds/2027/september", label: "September 2027 crowds" },
      { href: "/crowds/2027/november", label: "November 2027 crowds" },
    ],
  },
  {
    slug: "november",
    name: "November",
    title: "Disneyland Crowds in November 2027",
    intro:
      "November can be useful right after Halloween, but Thanksgiving week is one of the easiest weeks of the year to overestimate.",
    bestDates: "Early November weekdays",
    avoidDates: "Thanksgiving week",
    notes: [
      "The first half of November can work well if you avoid event-heavy weekends.",
      "Thanksgiving week should be treated like a holiday travel week.",
      "Christmas decor can bring extra interest even before the largest holiday crowds arrive.",
    ],
    nearbyLinks: [
      { href: "/crowds/2027/october", label: "October 2027 crowds" },
      { href: "/crowds/2027/december", label: "December 2027 crowds" },
    ],
  },
  {
    slug: "december",
    name: "December",
    title: "Disneyland Crowds in December 2027",
    intro:
      "December is best early in the month. The closer you get to Christmas and New Year's, the less forgiving the parks become.",
    bestDates: "Early December weekdays",
    avoidDates: "Christmas week through New Year's Eve",
    notes: [
      "Early December usually gives you the holiday atmosphere with fewer of the late-month problems.",
      "Once schools start winter break, the parks can stay busy from late morning through closing.",
      "Book hotels carefully for late December because location matters more when the days are long and crowded.",
    ],
    nearbyLinks: [
      { href: "/crowds/2027/november", label: "November 2027 crowds" },
      { href: "/best-times", label: "Best Times" },
    ],
  },
];

export function getMonthGuide2027(slug: string) {
  return MONTH_GUIDES_2027.find((month) => month.slug === slug);
}
