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
    <main className="min-h-screen bg-white dark:bg-black text-black dark:text-white">
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
