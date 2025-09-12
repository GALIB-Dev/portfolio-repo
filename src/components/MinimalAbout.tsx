"use client";

import { motion } from "framer-motion";

export default function MinimalAbout() {
  return (
    <section id="about" className="max-w-5xl mx-auto px-4 md:px-6 lg:px-8 py-14 md:py-16">
      <motion.h2
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="text-center text-black dark:text-white text-xl font-medium mb-6"
      >
        About
      </motion.h2>

      <div className="bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6 md:p-8">
        <div className="grid gap-8 md:gap-10 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.05 }}
          className="text-zinc-700 dark:text-zinc-300 leading-relaxed"
        >
          <p>
            I’m Mohammad Galib, a student and tech enthusiast exploring the web platform.
            I enjoy building minimal, fast, and accessible interfaces using React, Next.js, and TypeScript.
          </p>
          <p className="mt-3">
            My focus is on clarity, performance, and a clean aesthetic—black & white, subtle motion,
            and purposeful interactions.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.08 }}
          className="flex flex-col items-center"
        >
          <img
            src="/me2.jpg"
            alt="Portrait of Mohammad Al Galib"
            className="w-full max-w-sm aspect-square object-cover rounded-xl border border-zinc-200 dark:border-zinc-800"
          />
        </motion.div>

        <motion.ul
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="space-y-2 text-zinc-800 dark:text-zinc-200"
        >
          <li className="flex items-start gap-2"><span className="mt-[6px] block h-1.5 w-1.5 rounded-full bg-zinc-900 dark:bg-zinc-100" />
            Focused on fundamentals and simplicity
          </li>
          <li className="flex items-start gap-2"><span className="mt-[6px] block h-1.5 w-1.5 rounded-full bg-zinc-900 dark:bg-zinc-100" />
            Comfortable with React, Next.js, TypeScript, Tailwind
          </li>
          <li className="flex items-start gap-2"><span className="mt-[6px] block h-1.5 w-1.5 rounded-full bg-zinc-900 dark:bg-zinc-100" />
            Exploring motion with Framer Motion and GSAP
          </li>
        </motion.ul>
        </div>
      </div>
    </section>
  );
}
