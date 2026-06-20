import Image from 'next/image';
import React from 'react';

interface ImageAuditProps {
  src: string;
  altText: string;
  aspectRatio?: string;
  priority?: boolean;
}

export const OptimizedImageContainer: React.FC<ImageAuditProps> = ({ 
  src, 
  altText,
  aspectRatio = '16/9',
  priority = false
}) => {
  return (
    <div
      className="relative w-full overflow-hidden rounded-lg bg-[#F0F2F5] group"
      style={{ aspectRatio }}
    >
      <Image
        src={src}
        alt={altText}
        fill
        priority={priority}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="object-cover transition-opacity duration-[400ms] ease-in-out opacity-30 group-hover:opacity-60"
        loading={priority ? 'eager' : 'lazy'}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/10 via-transparent to-transparent pointer-events-none" />
    </div>
  );
};

export default OptimizedImageContainer;
