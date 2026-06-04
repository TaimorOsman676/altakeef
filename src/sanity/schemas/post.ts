import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'post',
  title: 'Blog Post',
  type: 'document',
  fields: [
    // Bilingual Titles
    defineField({
      name: 'titleAr',
      title: 'Title (Arabic) | العنوان بالعربية',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'titleEn',
      title: 'Title (English) | العنوان بالإنجليزية',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),

    // Slug for clean SEO URL
    defineField({
      name: 'slug',
      title: 'Slug (URL path) | الرابط الفرعي للعنوان',
      type: 'slug',
      options: {
        source: 'titleEn', // Auto-generates from English Title
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),

    // Category mapping
    defineField({
      name: 'category',
      title: 'Technical Category (System slug) | التصنيف التقني',
      type: 'string',
      options: {
        list: [
          { title: 'Preventive Maintenance (الصيانة)', value: 'maintenance' },
          { title: 'HVAC Technology (تقنيات التكييف)', value: 'tech' },
          { title: 'Commercial Contracting (تكييف تجاري)', value: 'commercial' },
          { title: 'Energy Saving (توفير الطاقة)', value: 'saving' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'categoryAr',
      title: 'Category Label (Arabic) | اسم التصنيف بالعربية',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'categoryEn',
      title: 'Category Label (English) | اسم التصنيف بالإنجليزية',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),

    // Metadata & Authors
    defineField({
      name: 'authorAr',
      title: 'Author Name (Arabic) | اسم الكاتب بالعربية',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'authorEn',
      title: 'Author Name (English) | اسم الكاتب بالإنجليزية',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'dateAr',
      title: 'Date Display (Arabic text) | تاريخ العرض بالعربية',
      type: 'string',
      description: 'e.g. ٢٠ مايو ٢٠٢٦',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'readTimeAr',
      title: 'Read Time (Arabic text) | وقت القراءة بالعربية',
      type: 'string',
      description: 'e.g. ٥ دقائق قراءة',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'readTimeEn',
      title: 'Read Time (English text) | وقت القراءة بالإنجليزية',
      type: 'string',
      description: 'e.g. 5 min read',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'publishedAt',
      title: 'Publish Date & Time | تاريخ النشر المجدول',
      type: 'datetime',
      validation: (Rule) => Rule.required(),
    }),

    // Visuals & Images
    defineField({
      name: 'mainImage',
      title: 'Featured Image | الصورة الرئيسية للمقال',
      type: 'image',
      options: {
        hotspot: true, // Enables visual framing controls in sanity
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative Text (SEO Alt) | النص البديل للصورة',
          validation: (Rule) => Rule.required(),
        },
      ],
      validation: (Rule) => Rule.required(),
    }),

    // SEO Excerpt
    defineField({
      name: 'excerpt',
      title: 'SEO Meta Description / Excerpt | الوصف المختصر لمحركات البحث',
      type: 'text',
      rows: 3,
      description: 'Recommended limit is 160 characters (الوصف المعروض في محرك بحث جوجل)',
      validation: (Rule) => Rule.max(160).warning('Longer excerpts might be truncated in search engines.'),
    }),

    // Rich Text Content Blocks
    defineField({
      name: 'bodyAr',
      title: 'Body Content (Arabic) | نص الموضوع بالعربية',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            { title: 'Normal', value: 'normal' },
            { title: 'H1', value: 'h1' },
            { title: 'H2', value: 'h2' },
            { title: 'H3', value: 'h3' },
            { title: 'Quote', value: 'blockquote' },
          ],
          lists: [
            { title: 'Bullet', value: 'bullet' },
            { title: 'Numbered', value: 'number' },
          ],
        },
        {
          type: 'image',
          options: { hotspot: true },
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Alt Text | النص البديل للصورة',
            },
          ],
        },
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'bodyEn',
      title: 'Body Content (English) | نص الموضوع بالإنجليزية',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            { title: 'Normal', value: 'normal' },
            { title: 'H1', value: 'h1' },
            { title: 'H2', value: 'h2' },
            { title: 'H3', value: 'h3' },
            { title: 'Quote', value: 'blockquote' },
          ],
          lists: [
            { title: 'Bullet', value: 'bullet' },
            { title: 'Numbered', value: 'number' },
          ],
        },
        {
          type: 'image',
          options: { hotspot: true },
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Alt Text | النص البديل للصورة',
            },
          ],
        },
      ],
      validation: (Rule) => Rule.required(),
    }),

    // SEO tags
    defineField({
      name: 'seoKeywords',
      title: 'SEO Tags / Keywords | الكلمات الدلالية المستهدفة',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags',
      },
    }),
  ],
  preview: {
    select: {
      title: 'titleEn',
      media: 'mainImage',
    },
  },
});
