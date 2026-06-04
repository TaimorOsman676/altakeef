import { groq } from 'next-sanity';

// Query all blog posts for list grids (optimized, excludes large body blocks)
export const allPostsQuery = groq`
  *[_type == "post"] | order(publishedAt desc) {
    "id": _id,
    "slug": slug.current,
    "category": category,
    "categoryAr": categoryAr,
    "categoryEn": categoryEn,
    "date": publishedAt,
    "dateAr": dateAr,
    "readTimeAr": readTimeAr,
    "readTimeEn": readTimeEn,
    "image": mainImage.asset->url,
    "authorAr": authorAr,
    "authorEn": authorEn,
    "titleAr": titleAr,
    "titleEn": titleEn,
    "summaryAr": excerpt,
    "summaryEn": excerpt,
    "keywordsAr": seoKeywords,
    "keywordsEn": seoKeywords
  }
`;

// Query single blog post details by slug (includes localized PortableText body blocks)
export const postBySlugQuery = groq`
  *[_type == "post" && slug.current == $slug][0] {
    "id": _id,
    "slug": slug.current,
    "category": category,
    "categoryAr": categoryAr,
    "categoryEn": categoryEn,
    "date": publishedAt,
    "dateAr": dateAr,
    "readTimeAr": readTimeAr,
    "readTimeEn": readTimeEn,
    "image": mainImage.asset->url,
    "authorAr": authorAr,
    "authorEn": authorEn,
    "titleAr": titleAr,
    "titleEn": titleEn,
    "summaryAr": excerpt,
    "summaryEn": excerpt,
    "contentAr": bodyAr,
    "contentEn": bodyEn,
    "keywordsAr": seoKeywords,
    "keywordsEn": seoKeywords
  }
`;
