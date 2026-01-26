"use client";

import { motion } from "framer-motion";

export default function MinimalHero() {
  return (
    <section className="min-h-[50vh] flex items-center justify-center px-4">
      <div className="w-full max-w-4xl">
        <motion.h1
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center text-2xl md:text-3xl lg:text-4xl font-medium text-black dark:text-white"
          style={{ opacity: 0, transform: "translateY(6px)" }}
        >
          Welcome to my portfolio
        </motion.h1>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-2 md:gap-3">
          {[
            { href: "#about", label: "About" },
            { href: "#skills", label: "Skills" },
            { href: "#experience", label: "Experience" },
            { href: "#projects", label: "Projects" },
            { href: "#thoughts", label: "Thoughts" },
            { href: "#contact", label: "যোগাযোগ" },
          ].map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="px-3 md:px-4 py-2 border border-zinc-300 dark:border-zinc-700 rounded-md text-xs md:text-sm text-zinc-800 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-900 transition"
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
