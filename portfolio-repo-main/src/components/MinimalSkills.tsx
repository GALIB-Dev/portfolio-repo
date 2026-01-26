"use client";

import { motion } from "framer-motion";

type Skill = { name: string; img: string; tip?: string };

export default function MinimalSkills() {
  const skills: Skill[] = [
    { name: "React", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Next.js", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
    { name: "TypeScript", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
    { name: "JavaScript", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },

    { name: "Linux System", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" },
    { name: "Arch Linux", img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/archlinux/archlinux-original.svg" },
    { name: "Server", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ubuntu/ubuntu-plain.svg", tip: "Ubuntu server" },
    { name: "Shell", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg" },

    { name: "Cloudflare", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cloudflare/cloudflare-original.svg" },
    { name: "NAS", img: "https://cdn.simpleicons.org/truenas/0095D5" },
    { name: "Nextcloud", img: "https://cdn.simpleicons.org/nextcloud/0082C9" },
    { name: "Self-hosted Cloud Storage", img: "https://cdn.simpleicons.org/minio/C72C48" },
    { name: "HTML5", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", tip: "Markup language" },

    { name: "Docker", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
    { name: "Neovim", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/neovim/neovim-original.svg", tip: "Vim-based editor" },

    { name: "Tailwind CSS", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
    { name: "Node.js", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "Git", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  ];

  return (
    <section id="skills" className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 py-16">
      <h2 className="text-center text-black dark:text-white text-xl font-medium mb-8">Skills</h2>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.4 }}
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6"
      >
        {skills.map((s, i) => (
          <motion.div
            key={s.name}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, delay: i * 0.03 }}
            whileHover={{ y: -3, scale: 1.02 }}
            className="group flex flex-col items-center justify-center gap-2 border border-zinc-200 dark:border-zinc-800 rounded-lg p-4 bg-white dark:bg-zinc-950 shadow-sm hover:shadow-md transition"
            title={s.tip || s.name}
          >
            <div className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center">
              <img
                src={s.img}
                alt={s.name}
                loading="lazy"
                referrerPolicy="no-referrer"
                className="max-w-full max-h-full object-contain transition"
                onError={(e) => {
                  const t = e.currentTarget as HTMLImageElement;
                  if (!t.dataset.fallback) {
                    t.dataset.fallback = '1';
                    t.src = `https://picsum.photos/seed/${encodeURIComponent(s.name)}/64/64`;
                  }
                }}
              />
            </div>
            <div className="text-xs md:text-sm text-zinc-800 dark:text-zinc-200 text-center">{s.name}</div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
