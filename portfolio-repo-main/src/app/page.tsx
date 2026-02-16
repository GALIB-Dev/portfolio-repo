"use client";

import FixedIntro from "@/components/FixedIntro";
import MinimalHero from "@/components/MinimalHero";
import MinimalAbout from "@/components/MinimalAbout";
import MinimalProjects from "@/components/MinimalProjects";
import MinimalSkills from "@/components/MinimalSkills";
import Vision from "@/components/Vision";
import MinimalFooter from "@/components/MinimalFooter";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] relative overflow-x-hidden crt-flicker">
      {/* Matrix rain background */}
      <div className="fixed inset-0 -z-10 opacity-[0.03]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00ff41_1px,transparent_1px),linear-gradient(to_bottom,#00ff41_1px,transparent_1px)] bg-[size:20px_20px]" />
      </div>

      <FixedIntro />
      <MinimalHero />
      <MinimalAbout />
      <MinimalSkills />
      <MinimalProjects />
      <Vision />
      <MinimalFooter />
    </main>
  );
}
