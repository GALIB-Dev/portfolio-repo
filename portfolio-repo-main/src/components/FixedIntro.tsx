"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function FixedIntro() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 font-mono ${
        scrolled
          ? "bg-[#0a0a0a]/95 border-b border-[#1a1a1a] py-2 backdrop-blur-sm"
          : "py-4 bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
        {/* Left: user@host */}
        <a href="#" className="flex items-center gap-2 group">
          <span className="text-[#00ff41] text-glow text-sm font-bold">galib</span>
          <span className="text-[#555]">@</span>
          <span className="text-[#ffb000] text-sm">portfolio</span>
          <span className="text-[#555]">:~$</span>
          <span className="text-[#00ff41] cursor-blink ml-1">▋</span>
        </a>

        {/* Center: nav as commands */}
        <nav className="hidden md:flex items-center gap-1">
          {[
            { label: "about", cmd: "./about.sh" },
            { label: "skills", cmd: "neofetch" },
            { label: "projects", cmd: "ls projects/" },
            { label: "vision", cmd: "cat goals.md" },
            { label: "contact", cmd: "ping galib" },
          ].map((item) => (
            <a
              key={item.label}
              href={`#${item.label}`}
              className="px-3 py-1.5 text-xs text-[#888] hover:text-[#00ff41] hover:bg-[#00ff41]/5 rounded transition-all duration-200 group"
              title={item.cmd}
            >
              <span className="text-[#555] group-hover:text-[#00ff41] mr-1">$</span>
              {item.label}
            </a>
          ))}
        </nav>

        {/* Right: status */}
        <div className="flex items-center gap-3 text-xs">
          <span className="hidden sm:inline text-[#555]">
            PID:{Math.floor(Math.random() * 9000 + 1000)}
          </span>
          <div className="flex items-center gap-1.5">
            <div className="w-2 h-2 rounded-full bg-[#ff3333]" />
            <div className="w-2 h-2 rounded-full bg-[#ffb000]" />
            <div className="w-2 h-2 rounded-full bg-[#00ff41]" />
          </div>
        </div>
      </div>
    </motion.header>
  );
}
