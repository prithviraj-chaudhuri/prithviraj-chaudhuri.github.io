import type { MetadataRoute } from "next";
import siteContent from "../../public/data/site-content.json";

export const dynamic = "force-static";

const site = siteContent.content.site;

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: site.url,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
