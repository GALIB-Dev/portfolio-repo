"use client";

import { motion } from "framer-motion";

const skillCategories = [
  {
    name: "Linux & Systems",
    prefix: "os",
    color: "text-[#00ff41]",
    barColor: "bg-[#00ff41]",
    skills: [
      { name: "Arch Linux", level: 85 },
      { name: "Kali Linux", level: 70 },
      { name: "Bash/Shell", level: 80 },
      { name: "System Config", level: 75 },
    ],
  },
  {
    name: "Networking & Servers",
    prefix: "net",
    color: "text-[#00e5ff]",
    barColor: "bg-[#00e5ff]",
    skills: [
      { name: "TrueNAS", level: 80 },
      { name: "Cloudflare", level: 85 },
      { name: "Nginx", level: 70 },
      { name: "Docker", level: 75 },
    ],
  },
  {
    name: "Web Development",
    prefix: "web",
    color: "text-[#ffb000]",
    barColor: "bg-[#ffb000]",
    skills: [
      { name: "Next.js", level: 75 },
      { name: "React", level: 70 },
      { name: "Tailwind CSS", level: 85 },
      { name: "TypeScript", level: 65 },
    ],
  },
  {
    name: "Self-Hosting & Cloud",
    prefix: "cloud",
    color: "text-[#ff3333]",
    barColor: "bg-[#ff3333]",
    skills: [
      { name: "Nextcloud", level: 80 },
      { name: "MinIO", level: 65 },
      { name: "CF Tunnel", level: 85 },
      { name: "Home Server", level: 90 },
    ],
  },
  {
    name: "AI & Exploration",
    prefix: "ai",
    color: "text-[#a855f7]",
    barColor: "bg-[#a855f7]",
    skills: [
      { name: "LLMs", level: 60 },
      { name: "Python", level: 70 },
      { name: "Discord Bots", level: 75 },
      { name: "Automation", level: 80 },
    ],
  },
];

function SkillBar({ level, color }: { level: number; color: string }) {
  const filled = Math.round(level / 5);
  const empty = 20 - filled;
  return (
    <span className="font-mono text-xs">
      {/* Block chars for sm+ screens */}
      <span className="hidden sm:inline">
        <span className={color}>{"█".repeat(filled)}</span>
        <span className="text-[#222]">{"░".repeat(empty)}</span>
      </span>
      {/* CSS bar for mobile */}
      <span className="sm:hidden inline-flex items-center gap-2 w-full">
        <span className="flex-1 h-2 bg-[#111] rounded overflow-hidden">
          <span className={`block h-full rounded ${color.replace("text-", "bg-")}`} style={{ width: `${level}%` }} />
        </span>
      </span>
      <span className="text-[#555] ml-2">{level}%</span>
    </span>
  );
}

export default function MinimalSkills() {
  return (
    <section id="skills" className="py-12 sm:py-20 px-3 sm:px-4">
      <div className="max-w-4xl mx-auto">
        {/* Command */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-[#00ff41] text-glow text-sm mb-4 font-mono"
        >
          $ neofetch --skills
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="terminal-card rounded-lg overflow-hidden"
        >
          <div className="flex items-center gap-2 px-4 py-2 bg-[#1a1a1a] border-b border-[#222]">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
              <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
              <div className="w-3 h-3 rounded-full bg-[#28c840]" />
            </div>
            <span className="text-[#555] text-xs ml-2">skills — neofetch</span>
          </div>

          <div className="p-4 sm:p-6 font-mono text-sm space-y-5 sm:space-y-6">
            {/* Neofetch header */}
            <div className="text-[#ffb000] text-glow-amber">
              <p>galib@arch</p>
              <p className="text-[#555]">-----------</p>
            </div>

            {skillCategories.map((cat, catIndex) => (
              <motion.div
                key={cat.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: catIndex * 0.1 }}
                className="space-y-2"
              >
                <p>
                  <span className={`${cat.color} font-bold`}>{cat.prefix}</span>
                  <span className="text-[#555]">://</span>
                  <span className="text-[#ccc]">{cat.name}</span>
                </p>
                {cat.skills.map((skill) => (
                  <div key={skill.name} className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 pl-2 sm:pl-4">
                    <span className="text-[#888] sm:w-28 shrink-0 text-xs">{skill.name}</span>
                    <SkillBar level={skill.level} color={cat.barColor} />
                  </div>
                ))}
              </motion.div>
            ))}

            {/* Color blocks */}
            <div className="flex gap-1 pt-2">
              {["bg-[#0a0a0a]", "bg-[#ff3333]", "bg-[#00ff41]", "bg-[#ffb000]", "bg-[#00e5ff]", "bg-[#a855f7]", "bg-[#ff5f57]", "bg-[#ccc]"].map((c, i) => (
                <div key={i} className={`w-6 h-3 ${c} rounded-sm`} />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
