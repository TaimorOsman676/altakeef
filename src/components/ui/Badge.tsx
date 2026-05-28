import React from 'react';

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */

type BadgeVariant = 'default' | 'success' | 'warning' | 'info';

export interface BadgeProps {
  children: React.ReactNode;
  variant?: BadgeVariant;
  className?: string;
  /** Optional leading icon */
  icon?: React.ReactNode;
}

/* ------------------------------------------------------------------ */
/*  Style map                                                          */
/* ------------------------------------------------------------------ */

const variantClasses: Record<BadgeVariant, string> = {
  default:
    'bg-[#1E293B]/10 text-white border-white/10',
  success:
    'bg-emerald-50 text-emerald-700 border-emerald-200',
  warning:
    'bg-amber-50 text-amber-700 border-amber-200',
  info:
    'bg-[#00E5FF]/10 text-[#00E5FF] border-[#00E5FF]/20',
};

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export default function Badge({
  children,
  variant = 'default',
  className = '',
  icon,
}: BadgeProps) {
  return (
    <span
      className={[
        'inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-semibold leading-none whitespace-nowrap',
        variantClasses[variant],
        className,
      ].join(' ')}
    >
      {icon && <span className="flex-shrink-0">{icon}</span>}
      {children}
    </span>
  );
}
