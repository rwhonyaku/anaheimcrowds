import type { MetadataRoute } from "next";
import { statSync } from "node:fs";
import { join } from "node:path";

type SitemapEntry = {
  path: string;
  file: string;
  priority: number;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
};

function getLastModified(relativeFile: string) {
  return statSync(join(process.cwd(), relativeFile)).mtime;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://anaheimcrowds.com";

  const routes: SitemapEntry[] = [
    { path: "", file: "app/page.tsx", priority: 1.0, changeFrequency: "weekly" },

    { path: "/crowd-calendar", file: "app/crowd-calendar/page.tsx", priority: 0.95, changeFrequency: "weekly" },
    { path: "/best-times", file: "app/best-times/page.tsx", priority: 0.95, changeFrequency: "weekly" },
    { path: "/hotels", file: "app/hotels/page.tsx", priority: 0.9, changeFrequency: "monthly" },
    { path: "/school-breaks-calendar", file: "app/school-breaks-calendar/page.tsx", priority: 0.9, changeFrequency: "monthly" },

    { path: "/crowds/january", file: "app/crowds/january/page.tsx", priority: 0.8, changeFrequency: "monthly" },
    { path: "/crowds/february", file: "app/crowds/february/page.tsx", priority: 0.8, changeFrequency: "monthly" },
    { path: "/crowds/march", file: "app/crowds/march/page.tsx", priority: 0.8, changeFrequency: "monthly" },
    { path: "/crowds/april", file: "app/crowds/april/page.tsx", priority: 0.8, changeFrequency: "monthly" },
    { path: "/crowds/may", file: "app/crowds/may/page.tsx", priority: 0.8, changeFrequency: "monthly" },
    { path: "/crowds/june", file: "app/crowds/june/page.tsx", priority: 0.8, changeFrequency: "monthly" },
    { path: "/crowds/july", file: "app/crowds/july/page.tsx", priority: 0.8, changeFrequency: "monthly" },
    { path: "/crowds/august", file: "app/crowds/august/page.tsx", priority: 0.8, changeFrequency: "monthly" },
    { path: "/crowds/september", file: "app/crowds/september/page.tsx", priority: 0.8, changeFrequency: "monthly" },
    { path: "/crowds/october", file: "app/crowds/october/page.tsx", priority: 0.85, changeFrequency: "monthly" },
    { path: "/crowds/november", file: "app/crowds/november/page.tsx", priority: 0.8, changeFrequency: "monthly" },
    { path: "/crowds/december", file: "app/crowds/december/page.tsx", priority: 0.8, changeFrequency: "monthly" },

    { path: "/crowd-drivers", file: "app/crowd-drivers/page.tsx", priority: 0.7, changeFrequency: "monthly" },
    { path: "/school-breaks", file: "app/school-breaks/page.tsx", priority: 0.7, changeFrequency: "monthly" },
    { path: "/holidays-seasonal", file: "app/holidays-seasonal/page.tsx", priority: 0.7, changeFrequency: "monthly" },
    { path: "/planning-resources", file: "app/planning-resources/page.tsx", priority: 0.6, changeFrequency: "monthly" },
    { path: "/methodology", file: "app/methodology/page.tsx", priority: 0.6, changeFrequency: "monthly" },
    { path: "/definitions", file: "app/definitions/page.tsx", priority: 0.5, changeFrequency: "monthly" },
    { path: "/faq", file: "app/faq/page.tsx", priority: 0.5, changeFrequency: "monthly" },

    { path: "/articles/least-crowded-days-disneyland", file: "app/articles/least-crowded-days-disneyland/page.tsx", priority: 0.75, changeFrequency: "monthly" },
    { path: "/articles/best-day-of-week-disneyland", file: "app/articles/best-day-of-week-disneyland/page.tsx", priority: 0.75, changeFrequency: "monthly" },
    { path: "/articles/disneyland-rope-drop-strategy-2026", file: "app/articles/disneyland-rope-drop-strategy-2026/page.tsx", priority: 0.75, changeFrequency: "monthly" },
    { path: "/articles/harbor-advantage", file: "app/articles/harbor-advantage/page.tsx", priority: 0.7, changeFrequency: "monthly" },
    { path: "/articles/lightning-lane-reality", file: "app/articles/lightning-lane-reality/page.tsx", priority: 0.7, changeFrequency: "monthly" },
    { path: "/articles/magic-key-crowd", file: "app/articles/magic-key-crowd/page.tsx", priority: 0.7, changeFrequency: "monthly" },
    { path: "/articles/utah-trap", file: "app/articles/utah-trap/page.tsx", priority: 0.7, changeFrequency: "monthly" },
    { path: "/articles/value-strategy", file: "app/articles/value-strategy/page.tsx", priority: 0.7, changeFrequency: "monthly" },

    { path: "/about", file: "app/about/page.tsx", priority: 0.3, changeFrequency: "yearly" },
    { path: "/contact", file: "app/contact/page.tsx", priority: 0.3, changeFrequency: "yearly" },
    { path: "/privacy", file: "app/privacy/page.tsx", priority: 0.2, changeFrequency: "yearly" },
  ];

  return routes.map((route) => ({
    url: `${base}${route.path}`,
    lastModified: getLastModified(route.file),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
