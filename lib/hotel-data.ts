export type HotelProperty = {
  name: string;
  distanceSteps: number;
  walkTimeMinutes: number;
  tier: "Value" | "Moderate" | "Deluxe";
  bestFor: string;
  trap: string; // The "Advocate's Warning" copy
  affiliateLink: string;
  priceRange: string; // e.g., "$$$"
};

/**
 * THE HARBOR BLVD COLLECTION
 * Sorted by "Pillow-to-Security" proximity for 2026.
 */
export const HARBOR_HOTELS: HotelProperty[] = [
  {
    name: "Best Western Plus Park Place Inn",
    distanceSteps: 450,
    walkTimeMinutes: 2,
    tier: "Moderate",
    bestFor: "The absolute closest room to the crosswalk. No long waits.",
    trap: "High price-to-amenity ratio. You pay for the feet, not the sheets.",
    affiliateLink: "/links/bw-park-place",
    priceRange: "$$$"
  },
  {
    name: "Tropicana Inn & Suites",
    distanceSteps: 550,
    walkTimeMinutes: 3,
    tier: "Moderate",
    bestFor: "Perfect for multi-generational groups needing mid-day breaks.",
    trap: "Elevator capacity is low; if you're on the 3rd floor, take the stairs at 7:00 AM.",
    affiliateLink: "/links/tropicana",
    priceRange: "$$"
  },
  {
    name: "Park Vue Inn",
    distanceSteps: 550,
    walkTimeMinutes: 3,
    tier: "Moderate",
    bestFor: "Superior breakfast value compared to immediate neighbors.",
    trap: "Extremely limited parking; late arrivals will be forced into valet-only.",
    affiliateLink: "/links/park-vue",
    priceRange: "$$"
  },
  {
    name: "Courtyard Anaheim Theme Park Entrance",
    distanceSteps: 900,
    walkTimeMinutes: 7,
    tier: "Deluxe",
    bestFor: "Families with kids who want the best on-site waterpark.",
    trap: "Strictly valet parking only (~$50/night) and often sells out 6 months early.",
    affiliateLink: "/links/courtyard-marriott",
    priceRange: "$$$$"
  },
  {
    name: "Fairfield Anaheim Resort",
    distanceSteps: 950,
    walkTimeMinutes: 8,
    tier: "Moderate",
    bestFor: "Marriott Bonvoy members and families who want reliable consistency.",
    trap: "The themed rooms are just stickers on the wall; don't overpay for them.",
    affiliateLink: "/links/fairfield",
    priceRange: "$$$"
  },
  {
    name: "Castle Inn & Suites",
    distanceSteps: 1300,
    walkTimeMinutes: 12,
    tier: "Value",
    bestFor: "Themed castle vibes for kids on a strict budget.",
    trap: "The walk feels twice as long on the way back at midnight. No breakfast.",
    affiliateLink: "/links/castle-inn",
    priceRange: "$"
  }
];