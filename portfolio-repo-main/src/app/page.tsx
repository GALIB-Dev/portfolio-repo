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
    <main className="min-h-screen bg-[#0a0a0a]/80 relative overflow-x-hidden crt-flicker">
      {/* Video background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="fixed inset-0 w-full h-full object-cover -z-20"
      >
        <source src="/blackout-bg.mp4" type="video/mp4" />
      </video>

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
