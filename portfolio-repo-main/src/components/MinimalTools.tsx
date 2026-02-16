"use client";

import { motion } from "framer-motion";

type Tool = { name: string; note?: string; img?: string };
type DeviceSpec = { label: string; value: string };

const tools: Tool[] = [
  {
    name: "Obsidian",
    note: "PKM & notes",
    img: "https://cdn.simpleicons.org/obsidian/7C3AED",
  },
  {
    name: "Neovim",
    note: "Code editing",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/neovim/neovim-original.svg",
  },
  {
    name: "Cursor AI",
    note: "AI pair programmer",
  },
  {
    name: "VS Code",
    note: "Primary IDE",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
  },
];

const primarySpecs: DeviceSpec[] = [
  { label: "Device", value: "ThinkPad X1 Yoga Gen 8" },
  { label: "Processor", value: "Intel Core i7-1355U" },
  { label: "RAM", value: "16 GB" },
  { label: "Display", value: "14\" WUXGA Touch" },
  { label: "Storage", value: "512 GB NVMe SSD" },
  { label: "OS", value: "Arch Linux & Windows 11" },
];

const labSpecs: DeviceSpec[] = [
  { label: "Model", value: "TOSHIBA Satellite C40‑A" },
  { label: "CPU", value: "Intel i3‑3110M" },
  { label: "Storage", value: "1.5 TB Combined" },
  { label: "Role", value: "Home Server / NAS" },
];

export default function MinimalTools() {
  return (
    <section id="tools" className="py-16 px-4 bg-zinc-50 dark:bg-zinc-900/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-sm font-medium text-zinc-500 dark:text-zinc-400 mb-6">Tools & Setup</h2>

        <div className="grid md:grid-cols-2 gap-4">
          {tools.map((tool, index) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="p-4 rounded-lg bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800"
            >
              <div className="flex items-center gap-2 mb-2">
                {tool.img ? (
                  <img
                    src={tool.img}
                    alt={tool.name}
                    loading="lazy"
                    referrerPolicy="no-referrer"
                    className="w-4 h-4 object-contain"
                    onError={(e) => {
                      const t = e.currentTarget as HTMLImageElement;
                      if (!t.dataset.fallback) {
                        t.dataset.fallback = "1";
                        t.src = `https://picsum.photos/seed/${encodeURIComponent(tool.name)}/48/48`;
                      }
                    }}
                  />
                ) : (
                  <span className="text-sm font-bold text-zinc-700 dark:text-zinc-300">
                    {tool.name.split(" ").map(w => w[0]).join("")}
                  </span>
                )}
                <h3 className="text-sm font-semibold text-zinc-900 dark:text-white">
                  {tool.name}
                </h3>
              </div>
              {tool.note && (
                <p className="text-xs text-zinc-600 dark:text-zinc-400">
                  {tool.note}
                </p>
              )}
            </motion.div>
          ))}

          {[
            { title: "Primary Laptop", specs: primarySpecs },
            { title: "Lab Node", specs: labSpecs },
          ].map((device, index) => (
            <motion.div
              key={device.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: (tools.length + index) * 0.05 }}
              className="p-4 rounded-lg bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800"
            >
              <h3 className="text-sm font-semibold text-zinc-900 dark:text-white mb-3">
                {device.title}
              </h3>
              <div className="space-y-1">
                {device.specs.map((spec) => (
                  <div key={spec.label} className="flex justify-between items-center text-xs">
                    <span className="text-zinc-500 dark:text-zinc-400">
                      {spec.label}
                    </span>
                    <span className="text-zinc-700 dark:text-zinc-300 font-medium">
                      {spec.value}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
