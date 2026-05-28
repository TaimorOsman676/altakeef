'use client';

import React, { useState, useId } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  /** Floating label text */
  label?: string;
  /** Error message */
  error?: string;
  /** Additional wrapper classes */
  wrapperClassName?: string;
}

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export default function Textarea({
  label,
  error,
  wrapperClassName = '',
  className = '',
  id: externalId,
  onFocus,
  onBlur,
  ...rest
}: TextareaProps) {
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
          'relative rounded-xl border bg-[#111827] transition-all duration-200',
          'focus-within:ring-2',
          borderColor,
        ].join(' ')}
      >
        <textarea
          id={id}
          className={[
            'peer w-full bg-transparent px-4 py-3.5 text-white placeholder-transparent',
            'outline-none text-base min-h-[120px] resize-y',
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
