"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { label: "about", cmd: "./about.sh" },
  { label: "skills", cmd: "neofetch" },
  { label: "projects", cmd: "ls projects/" },
  { label: "vision", cmd: "cat goals.md" },
  { label: "contact", cmd: "ping galib" },
];

export default function FixedIntro() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [pid, setPid] = useState<number | null>(null);

  useEffect(() => {
    setPid(Math.floor(Math.random() * 9000 + 1000));
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
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
        <a href="#" className="flex items-center gap-1 sm:gap-2 group min-w-0">
          <span className="text-[#00ff41] text-glow text-xs sm:text-sm font-bold">galib</span>
          <span className="text-[#555]">@</span>
          <span className="text-[#ffb000] text-xs sm:text-sm">portfolio</span>
          <span className="text-[#555] hidden sm:inline">:~$</span>
          <span className="text-[#00ff41] cursor-blink ml-1 hidden sm:inline">▋</span>
        </a>

        {/* Center: nav as commands (desktop) */}
        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
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

        {/* Right: status + hamburger */}
        <div className="flex items-center gap-3 text-xs">
          {pid !== null && (
            <span className="hidden sm:inline text-[#555]">PID:{pid}</span>
          )}
          <div className="hidden sm:flex items-center gap-1.5">
            <div className="w-2 h-2 rounded-full bg-[#ff3333]" />
            <div className="w-2 h-2 rounded-full bg-[#ffb000]" />
            <div className="w-2 h-2 rounded-full bg-[#00ff41]" />
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col gap-1 p-2 -mr-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`block w-5 h-0.5 bg-[#00ff41] transition-transform duration-200 ${menuOpen ? "rotate-45 translate-y-1.5" : ""}`} />
            <span className={`block w-5 h-0.5 bg-[#00ff41] transition-opacity duration-200 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block w-5 h-0.5 bg-[#00ff41] transition-transform duration-200 ${menuOpen ? "-rotate-45 -translate-y-1.5" : ""}`} />
          </button>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden overflow-hidden bg-[#0a0a0a]/95 border-b border-[#1a1a1a] backdrop-blur-sm"
          >
            <div className="max-w-6xl mx-auto px-4 py-3 space-y-1">
              {navItems.map((item, i) => (
                <motion.a
                  key={item.label}
                  href={`#${item.label}`}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => setMenuOpen(false)}
                  className="block px-3 py-2 text-sm text-[#888] hover:text-[#00ff41] hover:bg-[#00ff41]/5 rounded transition-all"
                >
                  <span className="text-[#555] mr-2">$</span>
                  {item.cmd}
                </motion.a>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
