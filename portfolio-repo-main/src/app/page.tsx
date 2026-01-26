"use client";

import FixedIntro from "@/components/FixedIntro";
import RightSideNav from "@/components/RightSideNav";
import MinimalHero from "@/components/MinimalHero";
import MinimalAbout from "@/components/MinimalAbout";
import MinimalProjects from "@/components/MinimalProjects";
import MinimalSkills from "@/components/MinimalSkills";
import Experience from "@/components/Experience";
import MinimalTools from "@/components/MinimalTools";
import MinimalFooter from "@/components/MinimalFooter";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100">
      {/* Background: professional grid with theme-aware colors */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-white dark:bg-zinc-950"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,0,0,0.05) 1px, transparent 1px), 
            linear-gradient(90deg, rgba(0,0,0,0.05) 1px, transparent 1px)
          `,
          backgroundSize: "44px 44px",
          backgroundPosition: "center",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-0 dark:opacity-100 transition-opacity duration-300"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), 
            linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)
          `,
          backgroundSize: "44px 44px",
          backgroundPosition: "center",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-30"
        style={{
          background: `
            radial-gradient(ellipse at 50% -10%, rgba(59, 130, 246, 0.1), transparent 50%), 
            radial-gradient(ellipse at 50% 110%, rgba(139, 92, 246, 0.05), transparent 50%)
          `,
        }}
      />
      <FixedIntro />
      <RightSideNav />
      <MinimalHero />
      <MinimalAbout />
      <MinimalProjects />
      <MinimalSkills />
      <Experience />
      <MinimalTools />
      <MinimalFooter />
    </main>
  );
}
