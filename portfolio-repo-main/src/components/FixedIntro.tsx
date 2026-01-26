"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./minimal.module.scss";
import ThemeToggleButton from "./ThemeToggleButton";

export default function FixedIntro() {
  const [opacity, setOpacity] = useState(1);
  const raf = useRef<number | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const fadeStart = 0; // px
    const fadeEnd = 240; // px: fully hidden around this scroll

    const update = () => {
      const y = window.scrollY || 0;
      const t = Math.min(Math.max((y - fadeStart) / (fadeEnd - fadeStart), 0), 1);
      setOpacity(1 - t);
      raf.current = null;
    };

    const onScroll = () => {
      if (raf.current == null) raf.current = window.requestAnimationFrame(update);
    };

    // initialize and attach
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      if (raf.current) cancelAnimationFrame(raf.current);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div className={`${styles.fixedIntro} pointer-events-none`} style={{ opacity }}>
      <div className="pointer-events-auto select-none transition-opacity duration-300 ease-out flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img
            src="/me.jpg"
            alt="Mohammad Al Galib"
            className="w-15 h-15 md:w-18 md:h-18 rounded-full object-cover border border-zinc-200 dark:border-zinc-800 filter "
            onError={(e) => {
              const t = e.currentTarget as HTMLImageElement;
              if (t.src !== "https://picsum.photos/200") t.src = "https://picsum.photos/200";
            }}
          />
          <div>
            <h1 className="font-semibold text-black dark:text-white text-2xl md:text-3xl leading-tight">Mohammad Al Galib</h1>
            <p className="text-sm md:text-base text-zinc-600 dark:text-zinc-300 mt-1">Student | Tech Enthusiast | Bangladesh</p>
          </div>
        </div>
        {mounted && (
          <div className="pointer-events-auto">
            <ThemeToggleButton />
          </div>
        )}
      </div>
    </div>
  );
}
