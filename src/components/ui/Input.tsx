'use client';

import React, { useState, useId } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  /** Floating label text */
  label?: string;
  /** Error message – when truthy the field turns red */
  error?: string;
  /** Icon placed at the start (respects RTL) */
  icon?: React.ReactNode;
  /** Icon placed at the end (respects RTL) */
  trailingIcon?: React.ReactNode;
  /** Additional wrapper classes */
  wrapperClassName?: string;
}

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export default function Input({
  label,
  error,
  icon,
  trailingIcon,
  wrapperClassName = '',
  className = '',
  id: externalId,
  onFocus,
  onBlur,
  ...rest
}: InputProps) {
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
      {/* ---- wrapper ---- */}
      <div
        className={[
          'relative flex items-center rounded-xl border bg-[#111827] transition-all duration-200',
          'focus-within:ring-2',
          borderColor,
        ].join(' ')}
      >
        {/* Leading icon */}
        {icon && (
          <span className="ps-3 text-[#64748B] flex-shrink-0">{icon}</span>
        )}

        {/* Input */}
        <input
          id={id}
          className={[
            'peer w-full bg-transparent px-4 py-3.5 text-white placeholder-transparent',
            'outline-none text-base',
            icon ? 'ps-2' : '',
            trailingIcon ? 'pe-2' : '',
            className,
          ].join(' ')}
          placeholder={label}
          onFocus={(e) => {
            setFocused(true);
            onFocus?.(e);
          }}
          onBlur={(e) => {
            setFocused(false);
            onBlur?.(e);
          }}
          {...rest}
        />

        {/* Floating label */}
        {label && (
          <label
            htmlFor={id}
            className={[
              'absolute start-4 transition-all duration-200 pointer-events-none origin-[0]',
              icon ? 'start-10' : 'start-4',
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

        {/* Trailing icon */}
        {trailingIcon && (
          <span className="pe-3 text-[#64748B] flex-shrink-0">
            {trailingIcon}
          </span>
        )}
      </div>

      {/* ---- Error message ---- */}
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
