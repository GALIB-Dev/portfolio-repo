'use client';

import { motion } from 'framer-motion';
import { MY_EXPERIENCE } from './experience.data';

const Experience = () => {
  return (
    <section id="experience" className="py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-sm font-medium text-zinc-500 dark:text-zinc-400 mb-8">Experience</h2>

        <div className="space-y-6">
          {MY_EXPERIENCE.map((exp, idx) => (
            <motion.div
              key={`${exp.title}-${idx}`}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.05 }}
              className="relative pl-6 border-l-2 border-zinc-200 dark:border-zinc-800"
            >
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-zinc-900 dark:bg-white border-2 border-white dark:border-zinc-900" />
              
              <div className="pb-6">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="text-sm font-semibold text-zinc-900 dark:text-white">
                    {exp.title}
                  </h3>
                  <span className="text-[10px] font-medium px-2 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 whitespace-nowrap">
                    {exp.duration}
                  </span>
                </div>
                <p className="text-xs text-zinc-600 dark:text-zinc-400 mb-1">
                  {exp.company}
                </p>
                <p className="text-xs text-zinc-500 dark:text-zinc-500 leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
