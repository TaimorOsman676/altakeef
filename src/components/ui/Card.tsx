'use client';

import React from 'react';
import { motion, type HTMLMotionProps } from 'framer-motion';

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */

export interface CardProps extends Omit<HTMLMotionProps<'div'>, 'children'> {
  children: React.ReactNode;
  className?: string;
  /** Enable glass-morphism backdrop blur */
  glass?: boolean;
  /** Enable hover lift animation */
  hover?: boolean;
  /** Show gradient border (blue → navy) */
  gradientBorder?: boolean;
}

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export default function Card({
  children,
  className = '',
  glass = false,
  hover = true,
  gradientBorder = false,
  ...rest
}: CardProps) {
  const baseClasses = [
    'rounded-[5%_0%_5%_0%] overflow-hidden',
    glass
      ? 'bg-white/10 backdrop-blur-xl border border-white/20 shadow-xl'
      : 'bg-[#111827] shadow-lg border border-[#B8C4CE]/20',
    className,
  ].join(' ');

  const hoverAnimation: any = hover
    ? {
        whileHover: {
          y: -6,
          boxShadow:
            '0 25px 50px -12px rgba(43, 158, 212, 0.15), 0 12px 24px -8px rgba(26, 58, 92, 0.1)',
        },
        transition: { type: 'spring' as const, stiffness: 300, damping: 20 },
      }
    : {};

  if (gradientBorder) {
    return (
      <motion.div
        className="rounded-[5%_0%_5%_0%] p-[2px] bg-gradient-to-br from-[#00E5FF] to-[#1E293B] overflow-hidden"
        {...hoverAnimation}
      >
        <div className={`rounded-[5%_0%_5%_0%] overflow-hidden ${glass ? 'bg-white/10 backdrop-blur-xl' : 'bg-[#111827]'} ${className}`} {...rest as React.HTMLAttributes<HTMLDivElement>}>
          {children}
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div className={baseClasses} {...hoverAnimation} {...rest}>
      {children}
    </motion.div>
  );
}
