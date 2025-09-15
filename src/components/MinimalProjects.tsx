"use client";

import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";

// Local images from src/Image (user-provided)
import firefoxImg from "@/Image/pi-hole.png";
import truenasImg from "@/Image/truenas.png";
import vjusImg from "@/Image/vjus.png";
import twelveBasesImg from "@/Image/12bases.png";
import selfHostedImg from "@/Image/self-hosted.png";

type Project = {
  id: number;
  title: string;
  slug: string; // used to resolve local image
  description: string;
  tags: string[];
  live?: string;
  code?: string;
};

const projects: Project[] = [
  {
    id: 0,
    title: "Self Hosted Home Server",
    slug: "self-hosted-home-server",
    description:
      "A fully self-hosted home server solution for backups, media streaming, and private cloud services, running on repurposed hardware.",
    tags: ["Self-Hosted", "Server", "Docker", "Home Lab"],
    live: undefined,
    code: undefined,
  },
  {
    id: 1,
    title: "VJUS — Land Survey Development",
    slug: "vjus",
    description:
      "A focused platform for land survey workflows: clean information structure, responsive layouts, and fast access to project data.",
    tags: ["Next.js", "Tailwind", "Content"],
    live: "https://www.vjus.org",
    code: "#",
  },
  {
    id: 2,
    title: "12Bases — IT Solutions Startup",
    slug: "12bases",
    description:
      "Brand site for an IT solutions startup: services overview, lightweight pages, and performance‑first build.",
    tags: ["Next.js", "UI", "Perf"],
    live: "https://www.12bases.xyz",
    code: "#",
  },
  {
    id: 3,
    title: "Network Attached Storage (Old Laptop)",
    slug: "home-server",
    description:
      "Repurposed an old laptop into a reliable home server for backups, media, and self‑hosted services (storage, shares, and containers).",
    tags: ["Server", "Storage", "Backups", "Docker"],
  },
  {
    id: 4,
    title: "Home Pi-hole DNS Server",
    slug: "home-pi-hole",
    description:
      "Home network-wide ad blocker , hardened and monitored.",
    tags: ["Self-Hosted", "Ubuntu", "Nginx", "Docker"],
  },
];

const localImageMap: Record<string, StaticImageData> = {
  vjus: vjusImg,
  "12bases": twelveBasesImg,
  "home-server": truenasImg,
  "home-pi-hole": firefoxImg,
  "self-hosted-home-server": selfHostedImg,
};

function ProjectImage({ title, slug }: { title: string; slug: string }) {
  const src = localImageMap[slug];
  // Make self-hosted-home-server image smaller
  const isSelfHosted = slug === "self-hosted-home-server";
  if (!src) return null;
  return (
    <Image
      src={src}
      alt={title}
      width={isSelfHosted ? 200 : 1200}
      height={isSelfHosted ? 120 : 800}
      className={
        isSelfHosted
          ? "w-64 h-40 object-contain mx-auto my-4 transition duration-300 ease-out"
          : "w-full h-56 object-cover transition duration-300 ease-out"
      }
      priority={false}
    />
  );
}

export default function MinimalProjects() {
  return (
    <section id="projects" className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 py-16">
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center text-black dark:text-white text-xl font-medium mb-8"
      >
        Projects
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {projects.map((p, index) => (
          <motion.article
            key={p.id}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: index * 0.05 }}
            className="group border border-zinc-200 dark:border-zinc-800 rounded-xl overflow-hidden bg-white dark:bg-zinc-950 shadow-sm hover:shadow-md transition"
          >
            <div className="relative">
              <ProjectImage title={p.title} slug={p.slug} />
              {(p.live || p.code) && (
                <div className="pointer-events-none absolute inset-0 bg-black/0 group-hover:bg-black/30 transition flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100">
                  {p.live && (
                    <a
                      href={p.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="pointer-events-auto px-3 py-2 text-xs md:text-sm rounded-md border border-white/70 text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/60"
                    >
                      Live
                    </a>
                  )}
                  {p.code && (
                    <a
                      href={p.code}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="pointer-events-auto px-3 py-2 text-xs md:text-sm rounded-md border border-white/70 text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/60"
                    >
                      Code
                    </a>
                  )}
                </div>
              )}
            </div>

            <div className="p-4 md:p-5">
              <h3 className="text-sm md:text-base font-semibold text-zinc-900 dark:text-zinc-100">{p.title}</h3>
              <p className="mt-2 text-xs md:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                {p.description}
              </p>
              {p.tags?.length > 0 && (
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 text-[10px] md:text-[11px] rounded-full border border-zinc-300 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
