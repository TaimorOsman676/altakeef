import { PageHeader } from '@/components/ui';
import { BlogGrid, CTABanner } from '@/components/sections';
import { blogPosts } from '@/data/blog';
import { client, isSanityConfigured } from '@/lib/sanity';
import { allPostsQuery } from '@/lib/sanity.queries';

// Revalidate the blog index cache every hour automatically (ISR)
export const revalidate = 3600;

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const resolvedParams = await params;
  const isRTL = resolvedParams.locale === 'ar';
  return {
    title: isRTL ? 'المدونة وحلول التكييف | أعمال التكييف' : 'Blog & HVAC Solutions | Al-Takeef Est.',
    description: isRTL 
      ? 'مقالات متخصصة في صيانة وتصميم وتوريد أنظمة التكييف بالرياض والخرج. نصائح ترشيد فاتورة الكهرباء.' 
      : 'Expert HVAC articles on central, VRF, split AC, and maintenance in Saudi Arabia. Energy saving tips.',
  };
}

export default async function BlogPage() {
  let posts = blogPosts;

  if (isSanityConfigured && client) {
    try {
      const sanityPosts = await client.fetch(allPostsQuery);
      if (Array.isArray(sanityPosts) && sanityPosts.length > 0) {
        // Merge sanity posts first, then static posts (avoiding duplicate slugs if any)
        const sanitySlugs = new Set(sanityPosts.map(p => p.slug));
        const uniqueStaticPosts = blogPosts.filter(p => !sanitySlugs.has(p.slug));
        posts = [...sanityPosts, ...uniqueStaticPosts];
      }
    } catch (error) {
      console.error('Error fetching blog posts from Sanity, falling back to static database:', error);
    }
  }

  return (
    <div className="bg-[#0B1120]">
      <PageHeader titleKey="title" subtitleKey="subtitle" namespace="blog" />
      <div className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <BlogGrid posts={posts as any[]} />
      </div>
      <CTABanner />
    </div>
  );
}

