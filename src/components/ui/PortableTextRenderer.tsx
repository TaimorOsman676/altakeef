import React from 'react';
import { PortableText, PortableTextComponents } from '@portabletext/react';
import Image from 'next/image';

interface PortableTextRendererProps {
  value: any;
}

const customComponents: PortableTextComponents = {
  block: {
    normal: ({ children }) => (
      <p className="text-sm md:text-base leading-relaxed text-[#94A3B8] mb-6">
        {children}
      </p>
    ),
    h1: ({ children }) => (
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-white mt-8 mb-4 leading-tight">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mt-8 mb-4 leading-tight">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-lg md:text-xl font-bold text-white mt-6 mb-3">
        {children}
      </h3>
    ),
    blockquote: ({ children }) => (
      <blockquote className="p-5 my-6 rounded-2xl bg-[#E0F2FE]/5 border-r-4 border-l-4 border-[#00E5FF] text-[#94A3B8] italic text-sm md:text-base leading-relaxed">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="list-disc ps-5 space-y-2 mb-6 text-sm md:text-base text-[#94A3B8]">
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol className="list-decimal ps-5 space-y-2 mb-6 text-sm md:text-base text-[#94A3B8]">
        {children}
      </ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => <li className="marker:text-[#00E5FF]">{children}</li>,
    number: ({ children }) => <li className="marker:text-[#00E5FF]">{children}</li>,
  },
  marks: {
    strong: ({ children }) => <strong className="text-white font-bold">{children}</strong>,
    em: ({ children }) => <em className="text-white/90 italic">{children}</em>,
    code: ({ children }) => (
      <code className="px-1.5 py-0.5 rounded bg-gray-800 text-pink-400 font-mono text-xs md:text-sm">
        {children}
      </code>
    ),
    link: ({ children, value }) => {
      const target = (value?.href || '').startsWith('http') ? '_blank' : undefined;
      return (
        <a
          href={value?.href}
          target={target}
          rel={target === '_blank' ? 'noopener noreferrer' : undefined}
          className="text-[#00E5FF] hover:text-[#00E5FF]/85 underline decoration-2 underline-offset-4 transition-colors font-semibold"
        >
          {children}
        </a>
      );
    },
  },
  types: {
    image: ({ value }) => {
      const imageUrl = value?.asset?.url || '';
      const altText = value?.alt || 'Blog illustration';
      if (!imageUrl) return null;
      return (
        <div className="relative my-8 w-full h-64 sm:h-96 rounded-2xl overflow-hidden bg-[#0F172A]">
          <Image
            src={imageUrl}
            alt={altText}
            fill
            className="object-cover"
            sizes="(max-width: 1280px) 100vw, 800px"
          />
        </div>
      );
    },
  },
};

export default function PortableTextRenderer({ value }: PortableTextRendererProps) {
  if (!value) return null;
  return <PortableText value={value} components={customComponents} />;
}
