"use client";

import { useTheme } from "./ThemeProvider";

export default function ThemeToggleNew() {
  const { theme, toggleTheme } = useTheme();

  console.log("ThemeToggleNew: Current theme is", theme);

  return (
    <button
      onClick={() => {
        console.log("ThemeToggleNew: Button clicked, current theme:", theme);
        toggleTheme();
      }}
      className="p-2 rounded-lg border-2 border-red-500 bg-red-100 hover:bg-red-200 transition-colors"
      style={{
        backgroundColor: theme === "dark" ? "#7f1d1d" : "#fee2e2",
        borderColor: "#ef4444",
        color: theme === "dark" ? "#fecaca" : "#7f1d1d"
      }}
      title={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
    >
      <div className="flex items-center gap-2">
        {theme === "light" ? (
          <>🌙 Dark</>
        ) : (
          <>☀️ Light</>
        )}
      </div>
    </button>
  );
}