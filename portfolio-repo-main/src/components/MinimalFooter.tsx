"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function MinimalFooter() {
  const year = new Date().getFullYear();
  const [uptimeSeconds, setUptimeSeconds] = useState(0);

  useEffect(() => {
    const start = Date.now();
    const interval = setInterval(() => {
      setUptimeSeconds(Math.floor((Date.now() - start) / 1000));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const formatUptime = (s: number) => {
    const h = Math.floor(s / 3600);
    const m = Math.floor((s % 3600) / 60);
    const sec = s % 60;
    return `${h.toString().padStart(2, "0")}:${m
      .toString()
      .padStart(2, "0")}:${sec.toString().padStart(2, "0")}`;
  };

  const connections = [
    {
      protocol: "ssh",
      host: "galu@example.com",
      port: "25",
      label: "Email",
      href: "mailto:galu@example.com",
      status: "ESTABLISHED",
      color: "text-[#00ff41]",
    },
    {
      protocol: "https",
      host: "github.com/galibtech",
      port: "443",
      label: "GitHub",
      href: "https://github.com/galibtech",
      status: "ESTABLISHED",
      color: "text-[#00ff41]",
    },
    {
      protocol: "wss",
      host: "discord.com/galu",
      port: "443",
      label: "Discord",
      href: "https://discord.com/users/galu",
      status: "ESTABLISHED",
      color: "text-[#00ff41]",
    },
  ];

  return (
    <>
      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Command */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[#00ff41] text-glow text-sm mb-4 font-mono"
          >
            $ ping galib
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
                contact — netstat
              </span>
            </div>

            <div className="p-6 font-mono text-sm space-y-6">
              {/* Ping output */}
              <div className="space-y-1">
                <p className="text-[#888]">
                  PING galib (127.0.0.1) 56(84) bytes of data.
                </p>
                {[1, 2, 3].map((i) => (
                  <motion.p
                    key={i}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.3 }}
                    className="text-[#ccc]"
                  >
                    <span className="text-[#555]">64 bytes from</span>{" "}
                    <span className="text-[#00ff41]">galib</span>
                    <span className="text-[#555]">
                      : icmp_seq={i} ttl=64 time=
                    </span>
                    <span className="text-[#00e5ff]">
                      {(Math.random() * 2 + 0.1).toFixed(2)}
                    </span>
                    <span className="text-[#555]"> ms</span>
                  </motion.p>
                ))}
              </div>

              {/* Connection table */}
              <div>
                <p className="text-[#ffb000] text-glow-amber mb-2">
                  $ netstat -an | grep ESTABLISHED
                </p>
                <div className="space-y-1">
                  {connections.map((conn, i) => (
                    <motion.a
                      key={conn.label}
                      href={conn.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.15 }}
                      className="block hover:bg-[#111] px-2 py-1 rounded transition-colors group"
                    >
                      <span className="text-[#00e5ff]">
                        {conn.protocol}
                      </span>
                      <span className="text-[#555]"> → </span>
                      <span className="text-[#ccc] group-hover:text-[#fff] transition-colors">
                        {conn.host}
                      </span>
                      <span className="text-[#555]">:{conn.port}</span>
                      <span className={`ml-4 text-xs ${conn.color}`}>
                        {conn.status}
                      </span>
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Location */}
              <div className="border border-[#222] rounded p-3">
                <p className="text-[#555] text-xs">
                  <span className="text-[#ffb000]">$GEO</span>=
                  <span className="text-[#00ff41]">
                    &quot;Bangladesh&quot;
                  </span>
                </p>
                <p className="text-[#555] text-xs">
                  <span className="text-[#ffb000]">$STATUS</span>=
                  <span className="text-[#00ff41]">
                    &quot;Open to remote opportunities worldwide&quot;
                  </span>
                </p>
                <p className="text-[#555] text-xs">
                  <span className="text-[#ffb000]">$UPTIME</span>=
                  <span className="text-[#00e5ff]">
                    {formatUptime(uptimeSeconds)}
                  </span>
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 px-4 border-t border-[#222]">
        <div className="max-w-4xl mx-auto font-mono text-xs">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-[#555]">
              <span className="text-[#00ff41]">galib</span>
              <span className="text-[#333]">@</span>
              <span className="text-[#00e5ff]">portfolio</span>
              <span className="text-[#333]">:</span>
              <span className="text-[#ffb000]">~</span>
              <span className="text-[#555]">
                {" "}
                // session active
              </span>
            </p>
            <p className="text-[#333]">
              © {year} galib · compiled with next.js · 0 errors · 0
              warnings
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
