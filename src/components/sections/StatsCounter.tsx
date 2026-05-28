'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Building2, Calendar, ThumbsUp, Users } from 'lucide-react';

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */

interface StatItem {
  icon: React.ReactNode;
  value: number;
  suffix: string;
  labelKey: string;
}

/* ------------------------------------------------------------------ */
/*  Animated Counter Hook                                              */
/* ------------------------------------------------------------------ */

function useCounter(target: number, isInView: boolean, duration = 2000) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const startTime = performance.now();

    function step(currentTime: number) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const currentCount = Math.floor(eased * target);

      if (currentCount !== start) {
        start = currentCount;
        setCount(currentCount);
      }

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        setCount(target);
      }
    }

    requestAnimationFrame(step);
  }, [isInView, target, duration]);

  return count;
}

/* ------------------------------------------------------------------ */
/*  Single Stat Card                                                   */
/* ------------------------------------------------------------------ */

function StatCard({
  icon,
  value,
  suffix,
  label,
  isInView,
  index,
}: {
  icon: React.ReactNode;
  value: number;
  suffix: string;
  label: string;
  isInView: boolean;
  index: number;
}) {
  const count = useCounter(value, isInView);

  return (
    <motion.div
      className="flex flex-col items-center gap-3 px-4 py-6"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.15, ease: 'easeOut' }}
    >
      <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-[#00E5FF]/10 to-[#1E293B]/10 text-[#00E5FF]">
        {icon}
      </div>
      <div className="text-4xl sm:text-5xl font-bold text-white tabular-nums">
        {count}
        <span className="text-[#00E5FF]">{suffix}</span>
      </div>
      <p className="text-sm sm:text-base text-[#94A3B8] font-medium">
        {label}
      </p>
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/*  Stats Counter Section                                              */
/* ------------------------------------------------------------------ */

export default function StatsCounter() {
  const t = useTranslations('stats');
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const stats: StatItem[] = [
    {
      icon: <Building2 className="h-7 w-7" />,
      value: 500,
      suffix: '+',
      labelKey: 'projects',
    },
    {
      icon: <Calendar className="h-7 w-7" />,
      value: 10,
      suffix: '+',
      labelKey: 'years',
    },
    {
      icon: <ThumbsUp className="h-7 w-7" />,
      value: 100,
      suffix: '%',
      labelKey: 'satisfaction',
    },
    {
      icon: <Users className="h-7 w-7" />,
      value: 300,
      suffix: '+',
      labelKey: 'clients',
    },
  ];

  return (
    <section ref={ref} className="bg-[#111827] py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0">
          {stats.map((stat, i) => (
            <div
              key={stat.labelKey}
              className={[
                'relative',
                /* Vertical dividers on desktop */
                i < stats.length - 1
                  ? 'lg:border-e lg:border-white/10'
                  : '',
              ].join(' ')}
            >
              <StatCard
                icon={stat.icon}
                value={stat.value}
                suffix={stat.suffix}
                label={t(stat.labelKey)}
                isInView={isInView}
                index={i}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
