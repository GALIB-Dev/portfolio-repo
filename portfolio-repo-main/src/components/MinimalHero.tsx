"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";

const lines = [
  { text: "$ whoami", color: "text-[#00ff41]", delay: 0 },
  { text: "mohammad_al_galib", color: "text-[#ffb000]", delay: 0.3 },
  { text: "", color: "", delay: 0.5 },
  { text: "$ cat /etc/hostname", color: "text-[#00ff41]", delay: 0.7 },
  { text: "village-kid-turned-hacker", color: "text-[#ffb000]", delay: 1.0 },
  { text: "", color: "", delay: 1.2 },
  { text: "$ uname -a", color: "text-[#00ff41]", delay: 1.4 },
  { text: "Linux galib 6.x.x #1 SMP // Bangladesh // Gap Year // Building the Future", color: "text-[#888]", delay: 1.7 },
];

export default function MinimalHero() {
  const [visibleLines, setVisibleLines] = useState(0);
  const [showAscii, setShowAscii] = useState(false);

  useEffect(() => {
    const timers = lines.map((line, i) =>
      setTimeout(() => setVisibleLines(i + 1), line.delay * 1000)
    );
    const asciiTimer = setTimeout(() => setShowAscii(true), 400);
    return () => {
      timers.forEach(clearTimeout);
      clearTimeout(asciiTimer);
    };
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center px-4 pt-20 pb-12 relative overflow-hidden">
      <div className="max-w-4xl mx-auto w-full">
        {/* ASCII art name */}
        <motion.pre
          initial={{ opacity: 0 }}
          animate={{ opacity: showAscii ? 1 : 0 }}
          transition={{ duration: 0.8 }}
          className="text-[#00ff41] text-glow text-[0.45rem] sm:text-xs md:text-sm leading-tight mb-8 select-none font-mono"
          aria-label="Galib"
        >
{`  ██████   █████  ██      ██ ██████  
 ██       ██   ██ ██      ██ ██   ██ 
 ██   ███ ███████ ██      ██ ██████  
 ██    ██ ██   ██ ██      ██ ██   ██ 
  ██████  ██   ██ ███████ ██ ██████  `}
        </motion.pre>

        {/* Terminal window */}
        <div className="terminal-card rounded-lg overflow-hidden">
          {/* Title bar */}
          <div className="flex items-center gap-2 px-4 py-2 bg-[#1a1a1a] border-b border-[#222]">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
              <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
              <div className="w-3 h-3 rounded-full bg-[#28c840]" />
            </div>
            <span className="text-[#555] text-xs ml-2 flex-1 text-center">galib@arch — bash — 80×24</span>
          </div>

          {/* Terminal content */}
          <div className="p-6 font-mono text-sm leading-relaxed min-h-[280px] flex">
            {/* Left: commands */}
            <div className="flex-1 space-y-1">
            <p className="text-[#555] text-xs mb-4">Last login: Sun Feb 15 03:14:07 2026 on tty1</p>
            
            {lines.slice(0, visibleLines).map((line, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.2 }}
                className={`${line.color} ${line.text.startsWith("$") ? "text-glow" : ""}`}
              >
                {line.text || "\u00A0"}
              </motion.p>
            ))}

            {visibleLines >= lines.length && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="pt-4 flex items-center gap-4"
              >
                <a
                  href="#projects"
                  className="text-[#00ff41] text-glow hover:underline text-sm"
                >
                  [ls projects/]
                </a>
                <a
                  href="#contact"
                  className="text-[#ffb000] text-glow-amber hover:underline text-sm"
                >
                  [ping galib]
                </a>
              </motion.div>
            )}

            {visibleLines >= lines.length && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="text-[#00ff41] pt-2"
              >
                $ <span className="cursor-blink">▋</span>
              </motion.p>
            )}
            </div>

            {/* Right: profile photo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="hidden md:flex flex-col items-center justify-center ml-6 pl-6 border-l border-[#222]"
            >
              <div className="relative w-32 h-32 lg:w-40 lg:h-40 rounded-lg overflow-hidden border-2 border-[#00ff41]/40 shadow-[0_0_20px_rgba(0,255,65,0.15)]">
                <Image
                  src="/me.jpg"
                  alt="Mohammad Al Galib"
                  fill
                  className="object-cover"
                  priority
                />
                {/* Scanline overlay on photo */}
                <div className="absolute inset-0 bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(0,0,0,0.15)_2px,rgba(0,0,0,0.15)_4px)] pointer-events-none" />
              </div>
              <p className="text-[#555] text-xs mt-3 text-center">
                <span className="text-[#00ff41]">user</span>@galib
              </p>
              <p className="text-[#333] text-[10px] mt-1">// me.jpg</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
