import { MetadataRoute } from 'next';
import { services } from '@/data/services';
import { blogPosts } from '@/data/blog';
import { siteUrl } from '@/data/seo';

export default function sitemap(): MetadataRoute.Sitemap {
  const locales = ['ar', 'en'];
  const baseRoutes = ['', '/about', '/contact', '/projects', '/services', '/store', '/blog'];
  
  const sitemapEntries: MetadataRoute.Sitemap = [];
  
  // Base routes for all locales
  locales.forEach((locale) => {
    baseRoutes.forEach((route) => {
      sitemapEntries.push({
        url: `${siteUrl}/${locale}${route}`,
        lastModified: new Date(),
        changeFrequency: route === '' ? 'daily' : 'weekly',
        priority: route === '' ? 1.0 : 0.8,
      });
    });
    
    // Services sub-routes
    services.forEach((service) => {
      sitemapEntries.push({
        url: `${siteUrl}/${locale}/services/${service.slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.7,
      });
    });

    // Blog sub-routes
    blogPosts.forEach((post) => {
      sitemapEntries.push({
        url: `${siteUrl}/${locale}/blog/${post.slug}`,
        lastModified: new Date(post.date),
        changeFrequency: 'monthly',
        priority: 0.6,
      });
    });
  });

  return sitemapEntries;
}
