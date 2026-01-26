"use client";

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

export default function MinimalAbout() {
  const containerRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    // Animated lights/particles on SVG lines
    const lights = [
      { delay: 0, color: "#3b82f6", duration: 4 }, // Blue
      { delay: 0.5, color: "#8b5cf6", duration: 4.5 }, // Purple
      { delay: 1, color: "#ec4899", duration: 4 }, // Pink
      { delay: 1.5, color: "#06b6d4", duration: 4.2 }, // Cyan
      { delay: 2, color: "#10b981", duration: 4.5 }, // Green
    ];

    const paths = svgRef.current?.querySelectorAll("path");
    if (!paths) return;

    lights.forEach((light, idx) => {
      paths.forEach((path, pathIdx) => {
        const length = path.getTotalLength();
        const animation = document.createElement("style");
        const keyframeName = `light-${idx}-${pathIdx}`;

        animation.innerHTML = `
          @keyframes ${keyframeName} {
            0% {
              stroke-dashoffset: ${length};
              opacity: 0;
            }
            5% {
              opacity: 1;
            }
            95% {
              opacity: 1;
            }
            100% {
              stroke-dashoffset: 0;
              opacity: 0;
            }
          }
          
          .light-${idx}-${pathIdx} {
            animation: ${keyframeName} ${light.duration}s ease-in-out ${light.delay + pathIdx * 0.2}s infinite;
            stroke: ${light.color};
            stroke-width: 2;
            fill: none;
            filter: drop-shadow(0 0 6px ${light.color});
          }
        `;
        document.head.appendChild(animation);
        path.classList.add(`light-${idx}-${pathIdx}`);
      });
    });
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9, x: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const listItemVariants = {
    hidden: { opacity: 0, x: -15 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
    hover: {
      x: 6,
      transition: { duration: 0.3 },
    },
  };

  return (
    <section id="about" className="max-w-5xl mx-auto px-4 md:px-6 lg:px-8 py-14 md:py-16 relative">
      <motion.h2
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="text-center text-black dark:text-white text-xl font-medium mb-6"
      >
        About
      </motion.h2>

      {/* Circuit board SVG background - animated light paths */}
      <svg
        ref={svgRef}
        className="absolute inset-0 w-full h-full pointer-events-none opacity-40 dark:opacity-30"
        style={{ overflow: "visible" }}
      >
        {/* Horizontal lines from image to text */}
        <path d="M 50% 40%, L 20% 40%" strokeDasharray="500" />
        <path d="M 50% 45%, L 20% 45%" strokeDasharray="500" />
        <path d="M 50% 50%, L 20% 50%" strokeDasharray="500" />
        
        {/* Diagonal lines spreading outward */}
        <path d="M 50% 50% L 15% 20%" strokeDasharray="500" />
        <path d="M 50% 50% L 10% 50%" strokeDasharray="500" />
        <path d="M 50% 50% L 15% 80%" strokeDasharray="500" />
        
        {/* Right side connections */}
        <path d="M 50% 35% L 85% 35%" strokeDasharray="500" />
        <path d="M 50% 50% L 85% 50%" strokeDasharray="500" />
        <path d="M 50% 65% L 85% 65%" strokeDasharray="500" />
        
        {/* Corner circuit points */}
        <circle cx="15%" cy="20%" r="3" fill="currentColor" opacity="0.4" />
        <circle cx="85%" cy="35%" r="3" fill="currentColor" opacity="0.4" />
        <circle cx="85%" cy="65%" r="3" fill="currentColor" opacity="0.4" />
        <circle cx="15%" cy="80%" r="3" fill="currentColor" opacity="0.4" />
      </svg>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6 md:p-8 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors duration-300 relative"
        ref={containerRef}
      >
        {/* Chip glow effect */}
        <div className="absolute inset-0 rounded-2xl opacity-0 dark:opacity-5 pointer-events-none"
          style={{
            background: "radial-gradient(circle at 50% 35%, rgba(59, 130, 246, 0.1), transparent 60%)"
          }}
        />

        <motion.div
          variants={containerVariants}
          className="grid gap-8 md:gap-10 md:grid-cols-2 relative z-10"
        >
          {/* Text content */}
          <motion.div
            variants={itemVariants}
            className="text-zinc-700 dark:text-zinc-300 leading-relaxed"
          >
            <p className="group">
              I'm <span className="font-semibold text-zinc-900 dark:text-zinc-100">Mohammad Galib</span>, a student and tech enthusiast exploring the web platform.
              I enjoy building minimal, fast, and accessible interfaces using React, Next.js, and TypeScript.
            </p>
            <p className="mt-3 group">
              My focus is on clarity, performance, and a clean aesthetic—black & white, subtle motion,
              and purposeful interactions.
            </p>
          </motion.div>

          {/* Image with enhanced animation - CHIP */}
          <motion.div
            variants={imageVariants}
            className="flex flex-col items-center group relative"
            whileHover={{ y: -8 }}
            transition={{ duration: 0.4 }}
          >
            {/* Animated glow around chip */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <motion.div
                className="absolute w-full max-w-sm aspect-square rounded-xl"
                animate={{
                  boxShadow: [
                    "0 0 20px rgba(59, 130, 246, 0.3)",
                    "0 0 40px rgba(139, 92, 246, 0.4)",
                    "0 0 20px rgba(59, 130, 246, 0.3)",
                  ],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              />
            </div>

            {/* Pulsing rings around chip */}
            <motion.div
              className="absolute w-[380px] aspect-square rounded-full border border-blue-400/30"
              animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <motion.div
              className="absolute w-[420px] aspect-square rounded-full border border-purple-400/20"
              animate={{ scale: [1, 1.15, 1], opacity: [0, 0.5, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, delay: 0.3 }}
            />

            {/* Actual image (chip) */}
            <motion.img
              src="/me2.jpg"
              alt="Portrait of Mohammad Al Galib"
              className="w-full max-w-sm aspect-square object-cover rounded-xl border-2 border-zinc-300 dark:border-zinc-700 shadow-lg relative z-10"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4 }}
              style={{
                filter: "drop-shadow(0 0 10px rgba(59, 130, 246, 0.4))"
              }}
            />
          </motion.div>

          {/* List items with stagger */}
          <motion.ul
            variants={containerVariants}
            className="space-y-3 text-zinc-800 dark:text-zinc-200 md:col-span-2"
          >
            {[
              "Focused on fundamentals and simplicity",
              "Comfortable with React, Next.js, TypeScript, Tailwind",
              "Exploring motion with Framer Motion and GSAP",
            ].map((item, index) => (
              <motion.li
                key={index}
                variants={listItemVariants}
                whileHover="hover"
                className="flex items-start gap-3 group cursor-default"
              >
                <motion.span
                  className="mt-[6px] block h-1.5 w-1.5 rounded-full bg-zinc-900 dark:bg-zinc-100 flex-shrink-0"
                  whileHover={{ scale: 1.5 }}
                  transition={{ duration: 0.3 }}
                />
                <span className="group-hover:text-zinc-900 dark:group-hover:text-zinc-50 transition-colors duration-300">
                  {item}
                </span>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </motion.div>
    </section>
  );
}
