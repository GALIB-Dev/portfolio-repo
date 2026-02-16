"use client";

import { useEffect, useState } from "react";

export default function ThemeToggleButton() {
  const [mounted, setMounted] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    setMounted(true);
    // Get initial theme from localStorage or system preference
    const stored = localStorage.getItem("theme") as "light" | "dark" | null;
    const initialTheme = stored || "light";
    setTheme(initialTheme);
  }, []);

  const handleToggle = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    
    // Update DOM
    const html = document.documentElement;
    const body = document.body;
    html.style.colorScheme = newTheme;
    if (newTheme === "dark") {
      html.classList.add("dark");
      html.classList.remove("light");
      body.classList.add("dark");
      body.classList.remove("light");
    } else {
      html.classList.remove("dark");
      html.classList.add("light");
      body.classList.remove("dark");
      body.classList.add("light");
    }
  };

  if (!mounted) {
    return (
      <button
        className="p-2 rounded-lg transition-all duration-300"
        aria-label="Toggle theme"
        disabled
      >
        <div className="w-6 h-6" />
      </button>
    );
  }

  return (
    <button
      onClick={handleToggle}
      className="relative inline-flex items-center justify-center p-2 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-all duration-300 ease-in-out group"
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
      title={`Current: ${theme} mode. Click to switch.`}
    >
      {/* Sun Icon */}
      <svg
        className={`absolute w-6 h-6 text-amber-500 transition-all duration-300 ${
          theme === "light"
            ? "opacity-100 rotate-0 scale-100"
            : "opacity-0 -rotate-90 scale-0"
        }`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path
          fillRule="evenodd"
          d="M10 2a1 1 0 011 1v2a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.536l1.414 1.414a1 1 0 001.414-1.414l-1.414-1.414a1 1 0 00-1.414 1.414zM2.05 6.464A1 1 0 103.464 5.05l-1.414 1.414a1 1 0 00 1.414z"
          clipRule="evenodd"
        />
        <path d="M17 11a1 1 0 100-2h-2a1 1 0 100 2h2zM3 11a1 1 0 100-2H1a1 1 0 100 2h2zm9.464-7.464a1 1 0 001.414-1.414L9.172 1.05A1 1 0 107.758 2.464l1.706 1.706z" />
      </svg>

      {/* Moon Icon */}
      <svg
        className={`absolute w-6 h-6 text-blue-400 transition-all duration-300 ${
          theme === "dark"
            ? "opacity-100 rotate-0 scale-100"
            : "opacity-0 rotate-90 scale-0"
        }`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
      </svg>
    </button>
  );
}
