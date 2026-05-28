import React from 'react';

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */

type SpinnerSize = 'sm' | 'md' | 'lg' | 'xl';

export interface SpinnerProps {
  /** Spinner size */
  size?: SpinnerSize;
  /** Additional classes */
  className?: string;
  /** Accessible label */
  label?: string;
}

/* ------------------------------------------------------------------ */
/*  Size map                                                           */
/* ------------------------------------------------------------------ */

const sizeClasses: Record<SpinnerSize, string> = {
  sm: 'h-4 w-4 border-2',
  md: 'h-6 w-6 border-2',
  lg: 'h-10 w-10 border-3',
  xl: 'h-14 w-14 border-4',
};

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export default function Spinner({
  size = 'md',
  className = '',
  label = 'Loading…',
}: SpinnerProps) {
  return (
    <div
      role="status"
      aria-label={label}
      className={`inline-flex items-center justify-center ${className}`}
    >
      <div
        className={[
          'animate-spin rounded-full border-[#00E5FF] border-t-transparent',
          sizeClasses[size],
        ].join(' ')}
      />
      <span className="sr-only">{label}</span>
    </div>
  );
}
