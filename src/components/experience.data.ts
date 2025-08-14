export type ExperienceItem = {
  title: string;
  company: string;
  duration: string;
  description: string;
};

export const MY_EXPERIENCE: ExperienceItem[] = [
  {
    title: 'Linux & Cloud Engineer',
    company: 'Self-hosted Projects',
    duration: 'Jan 2023 - Present',
    description:
      "Built and maintained personal servers, deployed cloud instances, configured Docker containers, automated tasks with scripts, managed networking, and optimized Linux systems.",
  },
  {
    title: 'Full-Stack Web Developer (Vibe Coder)',
    company: 'Freelance / Personal Projects',
    duration: '2022 - Present',
    description:
      "Developed multiple websites using React, Next.js, Tailwind CSS, Node.js. Integrated backend APIs, handled CI/CD, and ensured responsive, fast-loading interfaces. Fun fact: I'm a vibe coder.",
  },
  {
    title: 'Open Source Contributor',
    company: 'GitHub & Community Projects',
    duration: '2021 - Present',
    description:
      "Contributed to open source projects, created libraries, submitted pull requests, and collaborated with developers worldwide.",
  },
  {
    title: 'DevOps & Automation',
    company: 'Self-hosted / Personal Projects',
    duration: '2022 - Present',
    description:
      "Built Dockerized apps, automated deployments, monitored servers, configured cloud infrastructure, and handled backups and system optimization.",
  },
  {
    title: 'Networking & System Administration',
    company: 'Personal Projects',
    duration: '2022 - Present',
    description:
      "Set up LAN/WAN networks, configured routers, firewalls, VPNs, managed Linux machines, and ensured secure and stable connections.",
  },
  {
    title: 'Homelab Architect',
    company: 'Personal Lab',
    duration: '2023 - Present',
    description:
      'Designed and maintained a self-hosted homelab: Ubuntu/Proxmox servers, Docker-based services (Nextcloud, MinIO), reverse proxy, monitoring, automated backups, and network hardening.',
  },
];
