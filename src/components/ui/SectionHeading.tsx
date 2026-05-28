'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */

export interface SectionHeadingProps {
  /** Main heading text */
  title: string;
  /** Optional subtitle / description */
  subtitle?: string;
  /** Center-align the heading block */
  centered?: boolean;
  /** Light color scheme for dark backgrounds */
  light?: boolean;
  /** Additional wrapper classes */
  className?: string;
}

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export default function SectionHeading({
  title,
  subtitle,
  centered = true,
  light = false,
  className = '',
}: SectionHeadingProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <div
      ref={ref}
      className={[
        'mb-12',
        centered ? 'text-center' : 'text-start',
        className,
      ].join(' ')}
    >
      {/* Title */}
      <motion.h2
        className={[
          'text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight',
          light ? 'text-white' : 'text-white',
        ].join(' ')}
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        {title}
      </motion.h2>

      {/* Animated gradient underline */}
      <motion.div
        className={[
          'h-1 rounded-full bg-gradient-to-r from-[#00E5FF] to-[#1E293B] mt-4',
          centered ? 'mx-auto' : 'me-auto ms-0',
        ].join(' ')}
        initial={{ width: 0 }}
        animate={isInView ? { width: 80 } : {}}
        transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
      />

      {/* Subtitle */}
      {subtitle && (
        <motion.p
          className={[
            'mt-4 text-lg sm:text-xl max-w-2xl leading-relaxed',
            centered ? 'mx-auto' : '',
            light ? 'text-white/70' : 'text-[#94A3B8]',
          ].join(' ')}
          initial={{ opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3, ease: 'easeOut' }}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
