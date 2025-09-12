'use client';

import { motion, type Variants, easeOut } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { MY_EXPERIENCE } from './experience.data';

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const container: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 18 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: easeOut } },
  };

  return (
    <section id="experience" className="py-16 md:py-20 bg-white dark:bg-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-14">
          <h2 className="text-xl md:text-2xl font-medium text-black dark:text-white">Experience</h2>
          <p className="mt-2 text-sm md:text-base text-zinc-600 dark:text-zinc-400">Roles and projects I&apos;ve been working on</p>
        </div>

        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
        >
          {MY_EXPERIENCE.map((exp, idx) => (
            <motion.article
              key={`${exp.title}-${idx}`}
              variants={item}
              className="group relative border border-zinc-200 dark:border-zinc-800 rounded-xl p-5 md:p-6 bg-white dark:bg-zinc-950 shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Accent bar on hover (modern, minimal) */}
              <span className="pointer-events-none absolute inset-y-0 left-0 w-0.5 bg-zinc-900 dark:bg-zinc-100 opacity-0 group-hover:opacity-100 rounded-l-xl transition-opacity" />

              <header className="mb-3">
                <h3 className="text-base md:text-lg font-semibold text-black dark:text-white">{exp.title}</h3>
                <div className="mt-1 text-xs md:text-sm text-zinc-600 dark:text-zinc-400">
                  {exp.company} <span className="mx-1">•</span> {exp.duration}
                </div>
              </header>

              <p className="text-sm md:text-[15px] leading-relaxed text-zinc-700 dark:text-zinc-300">
                {exp.description}
              </p>

              {/* Subtle bottom actions / meta (optional placeholder for future) */}
              <div className="mt-4 flex items-center gap-3 text-xs text-zinc-500 dark:text-zinc-400">
                <span className="hidden md:inline">—</span>
                <span>Frontend • Systems • Automation</span>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
