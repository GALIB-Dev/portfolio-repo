"use client";

import { motion } from "framer-motion";

export default function Vision() {
  const goals = [
    {
      status: "IN_PROGRESS",
      priority: "HIGH",
      title: "Manufacturing & Tech",
      description:
        "Build advanced manufacturing systems leveraging automation and AI in Bangladesh",
      progress: 25,
    },
    {
      status: "ACTIVE",
      priority: "HIGH",
      title: "Global Innovation",
      description:
        "Contribute to open-source projects and collaborate with tech communities worldwide",
      progress: 40,
    },
    {
      status: "PLANNED",
      priority: "MEDIUM",
      title: "Large-Scale Systems",
      description:
        "Design and deploy enterprise-grade infrastructure and cloud solutions",
      progress: 15,
    },
    {
      status: "ACTIVE",
      priority: "HIGH",
      title: "Continuous Learning",
      description:
        "Master emerging technologies: AI/ML, cloud architecture, and advanced networking",
      progress: 60,
    },
  ];

  const statusColor: Record<string, string> = {
    IN_PROGRESS: "text-[#ffb000]",
    ACTIVE: "text-[#00ff41]",
    PLANNED: "text-[#00e5ff]",
  };

  const priorityColor: Record<string, string> = {
    HIGH: "text-[#ff3333]",
    MEDIUM: "text-[#ffb000]",
    LOW: "text-[#00e5ff]",
  };

  return (
    <section id="vision" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Command */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-[#00ff41] text-glow text-sm mb-4 font-mono"
        >
          $ cat ~/goals.md
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
            <span className="text-[#555] text-xs ml-2">
              vision — goals.md
            </span>
          </div>

          <div className="p-6 font-mono text-sm space-y-6">
            {/* Header */}
            <div>
              <p className="text-[#ffb000] text-glow-amber text-base">
                # ROADMAP.md
              </p>
              <p className="text-[#555] mt-1">
                ## Vision: From a village in Bangladesh to the world.
              </p>
              <p className="text-[#888] text-xs mt-2">
                I don&apos;t just want to be a developer — I want to be a{" "}
                <span className="text-[#00e5ff]">tech innovator</span> who
                builds solutions that matter.
              </p>
            </div>

            {/* Goals */}
            <div className="space-y-4">
              {goals.map((goal, index) => (
                <motion.div
                  key={goal.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="border border-[#222] rounded p-4 hover:border-[#333] transition-colors"
                >
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <span
                      className={`text-xs font-bold ${
                        statusColor[goal.status] || "text-[#555]"
                      }`}
                    >
                      [{goal.status}]
                    </span>
                    <span
                      className={`text-xs ${
                        priorityColor[goal.priority] || "text-[#555]"
                      }`}
                    >
                      priority={goal.priority}
                    </span>
                    <span className="text-[#ccc] font-bold">{goal.title}</span>
                  </div>

                  <p className="text-[#888] text-xs mb-3 pl-2 border-l border-[#333]">
                    {goal.description}
                  </p>

                  {/* Progress bar */}
                  <div className="flex items-center gap-3">
                    <span className="text-[#555] text-xs w-12">
                      {goal.progress}%
                    </span>
                    <div className="flex-1 h-2 bg-[#111] rounded overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${goal.progress}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: index * 0.2 }}
                        className="h-full bg-[#00ff41] rounded"
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Quote */}
            <div className="border-l-2 border-[#00ff41] pl-4 mt-6">
              <p className="text-[#00ff41] text-glow text-xs italic">
                &quot;With dedication, curiosity, and the right mindset, anything
                is possible. Every commit is a step toward the future.&quot;
              </p>
              <p className="text-[#555] text-xs mt-1">— galib@terminal</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
