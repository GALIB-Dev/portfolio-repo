"use client";

import { useEffect, useState } from "react";

export default function ThemeDebug() {
  const [themeInfo, setThemeInfo] = useState({
    domClass: "unknown",
    localStorage: "unknown",
    systemPreference: "unknown"
  });

  useEffect(() => {
    const updateInfo = () => {
      const root = document.documentElement;
      const stored = localStorage.getItem("theme");
      const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      
      setThemeInfo({
        domClass: root.classList.contains("dark") ? "dark" : "light",
        localStorage: stored || "null",
        systemPreference: systemPrefersDark ? "dark" : "light"
      });
    };

    updateInfo();
    
    // Listen for storage changes
    const handleStorage = () => updateInfo();
    window.addEventListener("storage", handleStorage);
    
    // Listen for DOM changes
    const observer = new MutationObserver(updateInfo);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"]
    });

    return () => {
      window.removeEventListener("storage", handleStorage);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="fixed bottom-4 right-4 p-3 bg-white dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-700 rounded-lg text-xs font-mono opacity-70 hover:opacity-100 transition-opacity z-50">
      <div className="font-bold mb-2">Theme Debug:</div>
      <div>DOM: {themeInfo.domClass}</div>
      <div>Storage: {themeInfo.localStorage}</div>
      <div>System: {themeInfo.systemPreference}</div>
    </div>
  );
}