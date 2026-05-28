'use client';

import React, { useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */

export interface ModalProps {
  /** Whether the modal is currently open */
  open: boolean;
  /** Called when the modal should close */
  onClose: () => void;
  /** Modal content */
  children: React.ReactNode;
  /** Optional title rendered in the header */
  title?: string;
  /** Max-width class (default: max-w-lg) */
  maxWidth?: string;
  /** Additional wrapper classes */
  className?: string;
  /** Hide the built-in close button */
  hideCloseButton?: boolean;
}

/* ------------------------------------------------------------------ */
/*  Close icon                                                         */
/* ------------------------------------------------------------------ */

function CloseIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-5 w-5"
    >
      <path
        fillRule="evenodd"
        d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
        clipRule="evenodd"
      />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  Animations                                                         */
/* ------------------------------------------------------------------ */

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const panelVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: 'spring' as const, stiffness: 300, damping: 25 },
  },
  exit: { opacity: 0, scale: 0.95, y: 20, transition: { duration: 0.15 } },
};

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export default function Modal({
  open,
  onClose,
  children,
  title,
  maxWidth = 'max-w-lg',
  className = '',
  hideCloseButton = false,
}: ModalProps) {
  /* Close on Escape */
  const handleKey = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    },
    [onClose],
  );

  useEffect(() => {
    if (open) {
      document.addEventListener('keydown', handleKey);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [open, handleKey]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          aria-modal="true"
          role="dialog"
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-[#1E293B]/40 backdrop-blur-sm"
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            onClick={onClose}
          />

          {/* Panel */}
          <motion.div
            className={[
              'relative z-10 w-full rounded-2xl bg-[#111827] shadow-2xl',
              'border border-[#B8C4CE]/20',
              maxWidth,
              className,
            ].join(' ')}
            variants={panelVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {/* Header */}
            {(title || !hideCloseButton) && (
              <div className="flex items-center justify-between px-6 pt-6 pb-0">
                {title && (
                  <h3 className="text-xl font-bold text-white">{title}</h3>
                )}
                {!hideCloseButton && (
                  <button
                    onClick={onClose}
                    aria-label="Close"
                    className="ms-auto -me-1 rounded-lg p-1.5 text-[#64748B] hover:bg-[#0F172A] hover:text-white transition-colors cursor-pointer"
                  >
                    <CloseIcon />
                  </button>
                )}
              </div>
            )}

            {/* Body */}
            <div className="p-6">{children}</div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
