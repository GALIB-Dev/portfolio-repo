"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";

type Theme = "light" | "dark";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}

interface ThemeProviderProps {
  children: ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setThemeState] = useState<Theme>("light");
  const [mounted, setMounted] = useState(false);

  // Initialize theme on mount
  useEffect(() => {
    setMounted(true);
    
    // Get stored theme or default to light
    const stored = localStorage.getItem("theme") as Theme | null;
    const initialTheme = stored || "light";
    
    console.log("ThemeProvider: Initializing with theme:", initialTheme);
    applyTheme(initialTheme);
    setThemeState(initialTheme);
  }, []);

  const applyTheme = (newTheme: Theme) => {
    console.log("ThemeProvider: Applying theme:", newTheme);
    
    const root = document.documentElement;
    const body = document.body;
    
    // Remove all theme classes
    root.classList.remove("light", "dark");
    body.classList.remove("light", "dark");
    
    // Apply new theme
    root.classList.add(newTheme);
    body.classList.add(newTheme);
    
    // Store preference
    localStorage.setItem("theme", newTheme);
    
    // Force style recalculation
    root.style.colorScheme = newTheme;
    
    console.log("ThemeProvider: Applied classes:", {
      rootClasses: root.className,
      bodyClasses: body.className,
      colorScheme: root.style.colorScheme
    });
  };

  const setTheme = (newTheme: Theme) => {
    console.log("ThemeProvider: setTheme called with:", newTheme);
    applyTheme(newTheme);
    setThemeState(newTheme);
  };

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    console.log("ThemeProvider: toggleTheme from", theme, "to", newTheme);
    setTheme(newTheme);
  };

  // Don't render until mounted
  if (!mounted) {
    return <div style={{ visibility: "hidden" }}>{children}</div>;
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}