"use client";

import FixedIntro from "@/components/FixedIntro";
import MinimalHero from "@/components/MinimalHero";
import MinimalAbout from "@/components/MinimalAbout";
import MinimalProjects from "@/components/MinimalProjects";
import MinimalSkills from "@/components/MinimalSkills";
import Experience from "@/components/Experience";
import MinimalTools from "@/components/MinimalTools";
import MinimalFooter from "@/components/MinimalFooter";

export default function Home() {
  return (
    <main className="relative min-h-screen text-white">
      {/* Background: bark green with subtle professional grid and vignette */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          backgroundColor: "#030f0c", // ultra-deep bark green
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
          backgroundPosition: "center",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse at 50% -10%, rgba(255,255,255,0.10), transparent 50%), radial-gradient(ellipse at 50% 110%, rgba(0,0,0,0.5), transparent 50%)",
          mixBlendMode: "overlay",
        }}
      />
      <FixedIntro />
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
