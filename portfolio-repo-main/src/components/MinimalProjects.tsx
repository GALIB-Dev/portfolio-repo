"use client";

import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import { useEffect, useRef } from "react";

// Local images from src/Image (user-provided)
import firefoxImg from "@/Image/pi-hole.png";
import truenasImg from "@/Image/truenas.png";
import vjusImg from "@/Image/vjus.png";
import twelveBasesImg from "@/Image/12bases.png";
import selfHostedImg from "@/Image/self-hosted.png";

type Project = {
  id: number;
  title: string;
  slug: string;
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
    live: "https://12bases.netlify.app/",
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
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    // Animated lights on circuit lines
    const lights = [
      { delay: 0, color: "#3b82f6", duration: 4 },
      { delay: 0.8, color: "#8b5cf6", duration: 4.5 },
      { delay: 1.6, color: "#ec4899", duration: 4 },
      { delay: 2.4, color: "#06b6d4", duration: 4.2 },
    ];

    const paths = svgRef.current?.querySelectorAll("path");
    if (!paths) return;

    lights.forEach((light, idx) => {
      paths.forEach((path, pathIdx) => {
        const length = path.getTotalLength();
        const animation = document.createElement("style");
        const keyframeName = `project-light-${idx}-${pathIdx}`;

        animation.innerHTML = `
          @keyframes ${keyframeName} {
            0% {
              stroke-dashoffset: ${length};
              opacity: 0;
            }
            5% {
              opacity: 1;
            }
            95% {
              opacity: 1;
            }
            100% {
              stroke-dashoffset: 0;
              opacity: 0;
            }
          }
          
          .project-light-${idx}-${pathIdx} {
            animation: ${keyframeName} ${light.duration}s ease-in-out ${light.delay + pathIdx * 0.25}s infinite;
            stroke: ${light.color};
            stroke-width: 2;
            fill: none;
            filter: drop-shadow(0 0 6px ${light.color});
          }
        `;
        document.head.appendChild(animation);
        path.classList.add(`project-light-${idx}-${pathIdx}`);
      });
    });
  }, []);

  return (
    <section id="projects" className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-16 relative">
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center text-black dark:text-white text-xl font-medium mb-4"
      >
        Projects
      </motion.h2>

      {/* Circuit board SVG - animated light paths */}
      <svg
        ref={svgRef}
        className="absolute inset-0 w-full h-full pointer-events-none opacity-30 dark:opacity-20"
        style={{ overflow: "visible" }}
      >
        {/* Lines spreading to cards */}
        <path d="M 20% 30%, L 20% 50%" strokeDasharray="500" />
        <path d="M 50% 30%, L 50% 50%" strokeDasharray="500" />
        <path d="M 80% 30%, L 80% 50%" strokeDasharray="500" />
        
        {/* Junction circles */}
        <circle cx="20%" cy="30%" r="3" fill="currentColor" opacity="0.2" />
        <circle cx="50%" cy="30%" r="3" fill="currentColor" opacity="0.2" />
        <circle cx="80%" cy="30%" r="3" fill="currentColor" opacity="0.2" />
      </svg>

      {/* Projects grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 relative z-10">
        {projects.map((p, index) => (
          <motion.article
            key={p.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group border border-zinc-200 dark:border-zinc-800 rounded-xl overflow-hidden bg-white dark:bg-zinc-950 shadow-sm hover:shadow-lg hover:border-blue-400/50 dark:hover:border-purple-400/50 transition"
          >
            <div className="relative h-40 bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center">
              <ProjectImage title={p.title} slug={p.slug} />
              {(p.live || p.code) && (
                <div className="pointer-events-none absolute inset-0 bg-black/0 group-hover:bg-black/40 transition flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100">
                  {p.live && (
                    <a
                      href={p.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="pointer-events-auto px-3 py-2 text-xs rounded-md border border-white/70 text-white hover:bg-white/20 transition"
                    >
                      Live
                    </a>
                  )}
                  {p.code && (
                    <a
                      href={p.code}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="pointer-events-auto px-3 py-2 text-xs rounded-md border border-white/70 text-white hover:bg-white/20 transition"
                    >
                      Code
                    </a>
                  )}
                </div>
              )}
            </div>

            <div className="p-4">
              <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition">
                {p.title}
              </h3>
              <p className="mt-2 text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed line-clamp-2">
                {p.description}
              </p>
              {p.tags?.length > 0 && (
                <div className="mt-3 flex flex-wrap gap-1">
                  {p.tags.slice(0, 3).map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 text-[10px] rounded-full bg-blue-500/10 dark:bg-purple-500/10 text-blue-700 dark:text-purple-300 border border-blue-200 dark:border-purple-800/50"
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
