import React from 'react';
import Link from 'next/link';

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */

export interface BreadcrumbItem {
  /** Display label */
  label: string;
  /** URL — omit for the current (last) item */
  href?: string;
}

export interface BreadcrumbProps {
  items: BreadcrumbItem[];
  /** Custom separator (defaults to /) */
  separator?: React.ReactNode;
  className?: string;
}

/* ------------------------------------------------------------------ */
/*  Default separator (slash that mirrors in RTL via logical transform)*/
/* ------------------------------------------------------------------ */

function DefaultSeparator() {
  return (
    <span
      className="mx-2 text-[#94A3B8] select-none rtl:rotate-180 inline-block"
      aria-hidden="true"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="h-4 w-4"
      >
        <path
          fillRule="evenodd"
          d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
          clipRule="evenodd"
        />
      </svg>
    </span>
  );
}

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export default function Breadcrumb({
  items,
  separator,
  className = '',
}: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className={className}>
      <ol className="flex flex-wrap items-center text-sm">
        {items.map((item, idx) => {
          const isLast = idx === items.length - 1;

          return (
            <li key={idx} className="flex items-center">
              {idx > 0 && (separator ?? <DefaultSeparator />)}

              {item.href && !isLast ? (
                <Link
                  href={item.href}
                  className="text-[#00E5FF] hover:text-white font-medium transition-colors"
                >
                  {item.label}
                </Link>
              ) : (
                <span
                  className={
                    isLast
                      ? 'text-white font-semibold'
                      : 'text-[#94A3B8]'
                  }
                  aria-current={isLast ? 'page' : undefined}
                >
                  {item.label}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
