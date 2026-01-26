"use client";

import { motion } from "framer-motion";
import { useState } from "react";

interface NavLink {
  href: string;
  label: string;
  icon: string;
}

const navLinks: NavLink[] = [
  { href: "#about", label: "About", icon: "👨‍💻" },
  { href: "#projects", label: "Projects", icon: "🚀" },
  { href: "#skills", label: "Skills", icon: "⚙️" },
  { href: "#experience", label: "Experience", icon: "📈" },
  { href: "#tools", label: "Tools", icon: "🔧" },
  { href: "#contact", label: "Contact", icon: "💬" },
];

export default function RightSideNav() {
  const [activeSection, setActiveSection] = useState("about");
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  return (
    <motion.nav
      className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col gap-3"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
    >
      {navLinks.map((link, index) => (
        <motion.div
          key={link.href}
          className="relative"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: index * 0.08 }}
          onMouseEnter={() => setHoveredLink(link.href)}
          onMouseLeave={() => setHoveredLink(null)}
        >
          {/* Active indicator */}
          {activeSection === link.href.slice(1) && (
            <motion.div
              className="absolute -left-2 top-1/2 -translate-y-1/2 w-1 h-6 bg-zinc-900 dark:bg-zinc-100 rounded-full"
              layoutId="activeIndicator"
              transition={{ duration: 0.3 }}
            />
          )}

          {/* Link button */}
          <a
            href={link.href}
            onClick={() => setActiveSection(link.href.slice(1))}
            className="flex items-center justify-center w-10 h-10 rounded-lg transition-colors duration-300 hover:bg-zinc-100 dark:hover:bg-zinc-800"
          >
            <motion.span
              className="text-xl"
              animate={{
                scale: hoveredLink === link.href ? 1.2 : 1,
              }}
              transition={{ duration: 0.2 }}
            >
              {link.icon}
            </motion.span>
          </a>

          {/* Tooltip - minimal */}
          <motion.div
            className="absolute right-full mr-3 top-1/2 -translate-y-1/2 text-xs font-medium text-zinc-700 dark:text-zinc-300 whitespace-nowrap pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{
              opacity: hoveredLink === link.href ? 1 : 0,
            }}
            transition={{ duration: 0.2 }}
          >
            {link.label}
          </motion.div>
        </motion.div>
      ))}
    </motion.nav>
  );
}
