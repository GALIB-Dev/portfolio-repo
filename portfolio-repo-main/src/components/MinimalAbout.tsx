"use client";

import { motion } from "framer-motion";

export default function MinimalAbout() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          {/* Command */}
          <p className="text-[#00ff41] text-glow text-sm mb-4 font-mono">
            $ cat ~/about.txt
          </p>

          {/* Terminal output card */}
          <div className="terminal-card rounded-lg overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-2 bg-[#1a1a1a] border-b border-[#222]">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                <div className="w-3 h-3 rounded-full bg-[#28c840]" />
              </div>
              <span className="text-[#555] text-xs ml-2">about.txt</span>
            </div>

            <div className="p-6 font-mono text-sm leading-relaxed space-y-4">
              <div className="flex gap-4 items-start">
                <div className="text-[#555] text-xs select-none w-4 text-right shrink-0">1</div>
                <p className="text-[#ffb000] text-glow-amber font-bold text-lg">
                  # Mohammad Al Galib <span className="text-[#555] font-normal text-sm">(aka Galu)</span>
                </p>
              </div>

              <div className="flex gap-4 items-start">
                <div className="text-[#555] text-xs select-none w-4 text-right shrink-0">2</div>
                <p className="text-[#555]">---</p>
              </div>

              <div className="flex gap-4 items-start">
                <div className="text-[#555] text-xs select-none w-4 text-right shrink-0">3</div>
                <p className="text-[#ccc]">
                  Student from a small village in <span className="text-[#00ff41]">Bangladesh</span>.
                  Currently on a gap year dedicated to{" "}
                  <span className="text-[#00e5ff]">self-learning</span> and exploring
                  the infinite possibilities of technology.
                </p>
              </div>

              <div className="flex gap-4 items-start">
                <div className="text-[#555] text-xs select-none w-4 text-right shrink-0">4</div>
                <p className="text-[#ccc]">
                  From mastering <span className="text-[#00ff41]">Linux systems</span> (Arch, Kali)
                  to deploying <span className="text-[#ffb000]">self-hosted servers</span> with TrueNAS
                  and Cloudflare Tunnel, from building{" "}
                  <span className="text-[#ff3333]">web apps</span> to diving deep into
                  networking protocols. I break things, I rebuild them better.
                </p>
              </div>

              <div className="flex gap-4 items-start">
                <div className="text-[#555] text-xs select-none w-4 text-right shrink-0">5</div>
                <p className="text-[#ccc]">
                  Dream: become a <span className="text-[#00ff41] text-glow font-bold">tech innovator</span> who
                  builds large-scale solutions — from advanced manufacturing
                  to cutting-edge digital infrastructure.
                </p>
              </div>

              <div className="flex gap-4 items-start">
                <div className="text-[#555] text-xs select-none w-4 text-right shrink-0">6</div>
                <p className="text-[#555]">---</p>
              </div>

              {/* Tags as env vars */}
              <div className="flex gap-4 items-start">
                <div className="text-[#555] text-xs select-none w-4 text-right shrink-0">7</div>
                <div className="flex flex-wrap gap-2">
                  {["LINUX_ENTHUSIAST", "SELF_HOSTING_NERD", "FUTURE_BUILDER", "SYS_ARCHITECT"].map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-mono rounded bg-[#00ff41]/10 border border-[#00ff41]/20 text-[#00ff41]"
                    >
                      ${tag}=true
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
