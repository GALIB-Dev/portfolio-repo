"use client";

import { motion } from "framer-motion";

type Tool = { name: string; note?: string; img?: string; color?: string };

type DeviceSpec = { label: string; value: string };

type DeviceCardProps = { title: string; specs: DeviceSpec[] };

const tools: Tool[] = [
  {
    name: "Obsidian",
    note: "PKM & notes",
    img: "https://cdn.simpleicons.org/obsidian/7C3AED",
    color: "#7C3AED",
  },
  {
    name: "Neovim",
    note: "Code editing",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/neovim/neovim-original.svg",
    color: "#18A999",
  },
  {
    name: "Cursor AI",
    note: "AI pair programmer",
  },
  {
    name: "Googling",
    note: "Because we all do",
    img: "https://cdn.simpleicons.org/google/4285F4",
    color: "#4285F4",
  },
];

const primarySpecs: DeviceSpec[] = [
  { label: "Device", value: "ThinkPad X1 Yoga Gen 8 " },
  { label: "Processor", value: "13th Gen Intel Core i7-1355U (1.70 GHz)" },
  { label: "RAM", value: "16 GB (15.7 GB usable)" },
  { label: "System type", value: "64-bit OS, x64-based processor" },
  { label: "Pen & Touch", value: "Pen and touch support with 10 touch points" },
  { label: "Display", value: "14\" WUXGA Touch (1920x1200)" },
  { label: "Storage", value: "512 GB NVMe SSD" },
  { label: "OS", value: "Dual boot: Arch Linux & Windows 11 Pro" },
  { label: "Weight", value: "1.4 kg" },
];

const labSpecs: DeviceSpec[] = [
  { label: "Manufacturer", value: "TOSHIBA" },
  { label: "Model", value: "Satellite C40‑A" },
  { label: "CPU", value: "Intel i3‑3110M (2C/4T)" },
  { label: "Drives", value: "500 GB + 1 TB" },
];

function Badge({ tool }: { tool: Tool }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      whileHover={{ y: -3, scale: 1.02 }}
      transition={{ duration: 0.35 }}
      className="group flex items-center gap-3 border border-zinc-200 dark:border-zinc-800 rounded-lg p-4 bg-white dark:bg-zinc-950 shadow-sm hover:shadow-md transition"
      title={tool.note || tool.name}
    >
      <div className="w-9 h-9 rounded-md flex items-center justify-center bg-zinc-100 dark:bg-zinc-900 overflow-hidden">
        {tool.img ? (
          <img
            src={tool.img}
            alt={tool.name}
            loading="lazy"
            referrerPolicy="no-referrer"
            className="w-6 h-6 object-contain transition"
            onError={(e) => {
              const t = e.currentTarget as HTMLImageElement;
              if (!t.dataset.fallback) {
                t.dataset.fallback = "1";
                t.src = `https://picsum.photos/seed/${encodeURIComponent(tool.name)}/48/48`;
              }
            }}
          />
        ) : (
          <span className="text-[11px] text-zinc-700 dark:text-zinc-300 font-medium">
            {tool.name.split(" ").map(w => w[0]).join("")}
          </span>
        )}
      </div>
      <div className="flex flex-col">
        <span className="text-sm text-zinc-900 dark:text-zinc-100 font-medium">{tool.name}</span>
        {tool.note && (
          <span className="text-xs text-zinc-500 dark:text-zinc-400">{tool.note}</span>
        )}
      </div>
    </motion.div>
  );
}

function DeviceCard({ title, specs }: DeviceCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45 }}
      className="border border-zinc-200 dark:border-zinc-800 rounded-xl bg-white dark:bg-zinc-950 shadow-sm"
    >
      <header className="px-4 md:px-5 py-3 border-b border-zinc-200 dark:border-zinc-800">
        <h3 className="text-sm md:text-base font-semibold text-zinc-900 dark:text-zinc-100">{title}</h3>
      </header>
      <div className="px-4 md:px-5 py-3">
        <dl className="divide-y divide-zinc-100 dark:divide-zinc-900">
          {specs.map((s) => (
            <div key={s.label} className="py-2 flex items-start justify-between gap-3">
              <dt className="text-xs md:text-sm text-zinc-500 dark:text-zinc-400 whitespace-nowrap">{s.label}</dt>
              <dd className="text-xs md:text-sm text-zinc-900 dark:text-zinc-100 text-right ml-auto max-w-[70%] break-words">{s.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </motion.article>
  );
}

export default function MinimalTools() {
  return (
    <section id="tools" className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 py-16">
      <div className="text-center mb-8">
        <h2 className="text-xl md:text-2xl font-medium text-black dark:text-white">Daily Tools</h2>
        <p className="mt-2 text-sm md:text-base text-zinc-600 dark:text-zinc-400">
          Lightweight, privacy‑friendly list — just what I actually use
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        {tools.map((t) => (
          <Badge key={t.name} tool={t} />
        ))}
      </div>

      <div className="mt-12 text-center mb-6">
        <h3 className="text-sm md:text-base font-semibold text-zinc-900 dark:text-zinc-100">Devices</h3>
        <p className="mt-1 text-xs md:text-sm text-zinc-500 dark:text-zinc-400">Minimal snapshots of my current gear</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        <DeviceCard title="Primary Laptop" specs={primarySpecs} />
        <DeviceCard title="Lab Node" specs={labSpecs} />
      </div>

      <p className="mt-6 text-center text-xs text-zinc-500 dark:text-zinc-400">
        And yes, sometimes the best tool is simply <span className="underline">Googling</span> 😉
      </p>
    </section>
  );
}
