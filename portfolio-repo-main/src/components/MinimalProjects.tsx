"use client";

import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import { useState } from "react";

import truenasImg from "@/Image/truenas.png";
import selfHostedImg from "@/Image/self-hosted.png";
import twelveBasesImg from "@/Image/12bases.png";
import praxisImg from "@/Image/Praxis.jpeg";
import vjusImg from "@/Image/vjus.png";

type Project = {
  id: number;
  title: string;
  slug: string;
  description: string;
  tags: string[];
  live?: string;
  code?: string;
  category: string;
  permissions: string;
  size: string;
  image?: StaticImageData;
};

const projects: Project[] = [
  {
    id: 0,
    title: "Personal Cloud with Nextcloud",
    slug: "nextcloud-cloud",
    description:
      "Built a self-hosted personal cloud on TrueNAS with Nextcloud, accessible anywhere via Cloudflare Tunnel. Full control over my data.",
    tags: ["TrueNAS", "Nextcloud", "Cloudflare", "Self-Hosting"],
    category: "Infrastructure",
    permissions: "drwxr-xr-x",
    size: "4.2G",
    image: truenasImg,
  },
  {
    id: 1,
    title: "Discord Automation Bots",
    slug: "discord-bots",
    description:
      "Created custom Discord bots for server automation, moderation, and fun features using Python and discord.py library.",
    tags: ["Python", "Discord.py", "Automation", "Bots"],
    code: "#",
    category: "Automation",
    permissions: "-rwxr-xr-x",
    size: "856K",
    image: praxisImg,
  },
  {
    id: 2,
    title: "Home Server with Cloudflare Tunnel",
    slug: "home-server",
    description:
      "Set up multiple self-hosted services (Pi-hole, web apps) accessible securely from anywhere using Cloudflare Tunnel without port forwarding.",
    tags: ["Cloudflare Tunnel", "Docker", "Nginx", "Networking"],
    category: "Infrastructure",
    permissions: "drwxr-xr-x",
    size: "12.8G",
    image: selfHostedImg,
  },
  {
    id: 3,
    title: "Experimental Arch Linux Setup",
    slug: "arch-linux",
    description:
      "Customized Arch Linux installation with i3wm, configured from scratch. Daily driver for learning and experimenting with Linux systems.",
    tags: ["Arch Linux", "i3wm", "Bash", "System Config"],
    code: "#",
    category: "Linux",
    permissions: "drwxr-xr-x",
    size: "28.4G",
    image: twelveBasesImg,
  },
  {
    id: 4,
    title: "Network Lab & Testing",
    slug: "network-lab",
    description:
      "Home networking lab for testing VLANs, firewall rules, and network security concepts. Learning by doing with real hardware.",
    tags: ["Networking", "Security", "Learning", "Experimentation"],
    category: "Infrastructure",
    permissions: "drwx------",
    size: "2.1G",
    image: twelveBasesImg,
  },
  {
    id: 5,
    title: "MinIO Object Storage",
    slug: "minio-storage",
    description:
      "Deployed MinIO for S3-compatible object storage on home server. Great for backups and media storage with web interface.",
    tags: ["MinIO", "S3", "Storage", "Docker"],
    category: "Infrastructure",
    permissions: "drwxr-xr-x",
    size: "64.0G",
    image: vjusImg,
  },
];

const categories = ["All", "Infrastructure", "Automation", "Linux"];

export default function MinimalProjects() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-12 sm:py-20 px-3 sm:px-4">
      <div className="max-w-4xl mx-auto">
        {/* Command */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-[#00ff41] text-glow text-sm mb-4 font-mono"
        >
          $ ls -la ~/projects/
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
              projects — ls -la
            </span>
          </div>

          <div className="p-4 font-mono text-xs sm:text-sm">
            {/* Filter tabs as pipe commands */}
            <div className="flex flex-wrap gap-2 mb-4 pb-3 border-b border-[#222]">
              <span className="text-[#555]">| grep</span>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3 py-1 rounded text-xs font-mono transition-all ${
                    activeCategory === cat
                      ? "bg-[#00ff41]/10 text-[#00ff41] border border-[#00ff41]/30"
                      : "text-[#555] border border-[#222] hover:text-[#888] hover:border-[#444]"
                  }`}
                >
                  {cat === "All" ? "--all" : `"${cat}"`}
                </button>
              ))}
            </div>

            {/* Project cards */}
            <div className="grid gap-4 sm:grid-cols-2">
              {filteredProjects.map((p, index) => (
                <motion.div
                  key={p.id}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.08 }}
                  className="border border-[#222] rounded-lg overflow-hidden hover:border-[#00ff41]/30 transition-colors group"
                >
                  {/* Image */}
                  {p.image && (
                    <div className="relative w-full h-36 bg-[#111]">
                      <Image
                        src={p.image}
                        alt={p.title}
                        fill
                        className="object-cover opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                      />
                      <div className="absolute inset-0 bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(0,0,0,0.1)_2px,rgba(0,0,0,0.1)_4px)] pointer-events-none" />
                    </div>
                  )}

                  {/* Info */}
                  <div className="p-3 space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="text-[#ffb000] text-xs">{p.permissions}</span>
                      <span className="text-[#00e5ff] text-xs">{p.size}</span>
                    </div>
                    <p className={`text-sm font-bold ${p.permissions.startsWith("d") ? "text-[#00ff41] text-glow" : "text-[#ccc]"}`}>
                      {p.permissions.startsWith("d") ? `${p.slug}/` : p.slug}
                    </p>
                    <p className="text-[#888] text-xs leading-relaxed">
                      <span className="text-[#555]"># </span>{p.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {p.tags.map((t) => (
                        <span
                          key={t}
                          className="px-2 py-0.5 text-[10px] border border-[#333] text-[#ffb000] rounded"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Summary */}
            <div className="mt-4 pt-3 border-t border-[#222] text-[#555]">
              <p>
                total {filteredProjects.length} items · {filteredProjects.filter((p) => p.permissions.startsWith("d")).length} directories ·{" "}
                {filteredProjects.filter((p) => !p.permissions.startsWith("d")).length} files
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
