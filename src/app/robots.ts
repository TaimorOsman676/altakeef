import { MetadataRoute } from 'next';
import { siteUrl } from '@/data/seo';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [
        '/studio',
        '/api',
        '/*/studio',
        '/*/api',
      ],
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
