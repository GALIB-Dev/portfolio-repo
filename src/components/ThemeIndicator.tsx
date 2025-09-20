"use client";

import { useTheme } from "./ThemeProvider";

export default function ThemeIndicator() {
  const { theme } = useTheme();

  return (
    <div className="fixed top-20 left-4 p-4 bg-yellow-200 dark:bg-yellow-800 border-2 border-yellow-500 rounded-lg text-black dark:text-white font-bold z-50">
      <div>Context Theme: {theme}</div>
      <div>HTML Class: {typeof window !== "undefined" && document.documentElement.classList.contains("dark") ? "dark" : "light"}</div>
      <div className="text-xs mt-1">
        {theme === "dark" ? "🌙 Dark Mode Active" : "☀️ Light Mode Active"}
      </div>
    </div>
  );
}