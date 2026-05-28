'use client';

import React, { useState, useId } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */

export interface SelectOption {
  value: string;
  label: string;
}

export interface SelectProps
  extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'size'> {
  /** Floating label text */
  label?: string;
  /** Error message */
  error?: string;
  /** Select options */
  options: SelectOption[];
  /** Placeholder option text */
  placeholder?: string;
  /** Additional wrapper classes */
  wrapperClassName?: string;
}

/* ------------------------------------------------------------------ */
/*  Chevron icon                                                       */
/* ------------------------------------------------------------------ */

function ChevronDown() {
  return (
    <svg
      className="h-4 w-4 text-[#64748B] pointer-events-none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
        clipRule="evenodd"
      />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export default function Select({
  label,
  error,
  options,
  placeholder,
  wrapperClassName = '',
  className = '',
  id: externalId,
  onFocus,
  onBlur,
  ...rest
}: SelectProps) {
  const autoId = useId();
  const id = externalId ?? autoId;

  const [focused, setFocused] = useState(false);
  const hasValue = rest.value !== undefined && rest.value !== '';
  const floated = focused || hasValue;

  const borderColor = error
    ? 'border-[#D42B2B] focus-within:ring-[#D42B2B]/30'
    : focused
      ? 'border-[#00E5FF] focus-within:ring-[#00E5FF]/20'
      : 'border-[#B8C4CE]/40 hover:border-[#00E5FF]/60';

  return (
    <div className={`relative ${wrapperClassName}`}>
      <div
        className={[
          'relative flex items-center rounded-xl border bg-[#111827] transition-all duration-200',
          'focus-within:ring-2',
          borderColor,
        ].join(' ')}
      >
        <select
          id={id}
          className={[
            'peer w-full appearance-none bg-transparent px-4 py-3.5 text-white',
            'outline-none text-base pe-10 cursor-pointer',
            !hasValue && !focused ? 'text-transparent' : '',
            className,
          ].join(' ')}
          onFocus={(e) => {
            setFocused(true);
            onFocus?.(e);
          }}
          onBlur={(e) => {
            setFocused(false);
            onBlur?.(e);
          }}
          {...rest}
        >
          {placeholder && (
            <option value="" disabled>
              {placeholder}
            </option>
          )}
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>

        {/* Floating label */}
        {label && (
          <label
            htmlFor={id}
            className={[
              'absolute start-4 transition-all duration-200 pointer-events-none origin-[0]',
              floated
                ? '-top-2.5 text-xs bg-[#111827] px-1 font-medium'
                : 'top-3.5 text-base',
              error
                ? 'text-[#D42B2B]'
                : focused
                  ? 'text-[#00E5FF]'
                  : 'text-[#64748B]',
            ].join(' ')}
          >
            {label}
          </label>
        )}

        {/* Chevron */}
        <span className="absolute end-3 top-1/2 -translate-y-1/2">
          <ChevronDown />
        </span>
      </div>

      {/* Error message */}
      <AnimatePresence>
        {error && (
          <motion.p
            className="mt-1.5 text-sm text-[#D42B2B] ps-1"
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.2 }}
          >
            {error}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}
