import { PageHeader } from '@/components/ui';
import { BlogGrid, CTABanner } from '@/components/sections';
import { blogPosts } from '@/data/blog';

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
  return (
    <div className="bg-[#0B1120]">
      <PageHeader titleKey="title" subtitleKey="subtitle" namespace="blog" />
      <div className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <BlogGrid posts={blogPosts} />
      </div>
      <CTABanner />
    </div>
  );
}
