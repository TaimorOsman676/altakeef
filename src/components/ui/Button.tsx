'use client';

import React from 'react';
import Link from 'next/link';
import { motion, type HTMLMotionProps } from 'framer-motion';

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */

type ButtonVariant = 'primary' | 'secondary' | 'accent' | 'ghost' | 'phone';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonBaseProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: React.ReactNode;
  iconPosition?: 'start' | 'end';
  loading?: boolean;
  href?: string;
  external?: boolean;
  className?: string;
  children?: React.ReactNode;
}

type NativeButtonProps = ButtonBaseProps &
  Omit<HTMLMotionProps<'button'>, keyof ButtonBaseProps>;

type AnchorButtonProps = ButtonBaseProps &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof ButtonBaseProps>;

export type ButtonProps = NativeButtonProps | AnchorButtonProps;

/* ------------------------------------------------------------------ */
/*  Style maps                                                         */
/* ------------------------------------------------------------------ */

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    'bg-gradient-to-r from-[#00E5FF] to-[#1E293B] text-white shadow-lg shadow-[#00E5FF]/25 hover:shadow-xl hover:shadow-[#00E5FF]/35',
  secondary:
    'border-2 border-[#00E5FF] text-[#00E5FF] bg-transparent hover:bg-[#00E5FF]/10',
  accent:
    'bg-gradient-to-r from-[#D42B2B] to-[#b51f1f] text-white shadow-lg shadow-[#D42B2B]/25 hover:shadow-xl hover:shadow-[#D42B2B]/35',
  ghost:
    'bg-transparent text-white hover:bg-[#1E293B]/5',
  phone:
    'bg-gradient-to-r from-[#00E5FF] to-[#1E293B] text-white shadow-lg shadow-[#00E5FF]/25 hover:shadow-xl hover:shadow-[#00E5FF]/35',
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'px-4 py-2 text-sm rounded-lg gap-1.5',
  md: 'px-6 py-3 text-base rounded-xl gap-2',
  lg: 'px-8 py-4 text-lg rounded-xl gap-2.5',
};

/* ------------------------------------------------------------------ */
/*  Spinner (inline)                                                   */
/* ------------------------------------------------------------------ */

function InlineSpinner() {
  return (
    <svg
      className="animate-spin h-4 w-4"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
      />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  Phone icon (inline SVG)                                            */
/* ------------------------------------------------------------------ */

function PhoneIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-5 w-5"
    >
      <path
        fillRule="evenodd"
        d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
        clipRule="evenodd"
      />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

const PHONE_NUMBER = '+966552239595';

export default function Button({
  variant = 'primary',
  size = 'md',
  icon,
  iconPosition = 'start',
  loading = false,
  href,
  external = false,
  className = '',
  children,
  ...rest
}: ButtonProps) {
  /* Build phone href automatically */
  const resolvedHref =
    variant === 'phone' ? `tel:${PHONE_NUMBER}` : href;

  const classes = [
    'inline-flex items-center justify-center font-semibold transition-colors duration-200 cursor-pointer select-none',
    'disabled:opacity-50 disabled:cursor-not-allowed',
    variantClasses[variant],
    sizeClasses[size],
    className,
  ].join(' ');

  const iconNode = variant === 'phone' && !icon ? <PhoneIcon /> : icon;

  const content = (
    <>
      {loading && <InlineSpinner />}
      {!loading && iconNode && iconPosition === 'start' && iconNode}
      {children}
      {!loading && iconNode && iconPosition === 'end' && iconNode}
    </>
  );

  const motionProps = {
    whileHover: { scale: 1.03 },
    whileTap: { scale: 0.97 },
    transition: { type: 'spring' as const, stiffness: 400, damping: 17 },
  };

  /* ---- Render as <a> (external) ---- */
  if (resolvedHref && (external || variant === 'phone')) {
    return (
      <motion.a
        href={resolvedHref}
        className={classes}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
        {...motionProps}
        {...(rest as any)}
      >
        {content}
      </motion.a>
    );
  }

  /* ---- Render as Next Link ---- */
  if (resolvedHref) {
    const MotionLink = motion.create(Link as any);
    return (
      <MotionLink
        href={resolvedHref}
        className={classes}
        {...motionProps}
        {...(rest as any)}
      >
        {content}
      </MotionLink>
    );
  }

  /* ---- Render as <button> ---- */
  return (
    <motion.button
      className={classes}
      disabled={loading || (rest as NativeButtonProps).disabled}
      {...motionProps}
      {...(rest as any)}
    >
      {content}
    </motion.button>
  );
}
