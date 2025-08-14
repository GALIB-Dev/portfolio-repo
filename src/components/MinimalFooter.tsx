export default function MinimalFooter() {
  const year = new Date().getFullYear();
  return (
    <>
      <section id="contact" className="max-w-3xl mx-auto px-4 md:px-6 lg:px-8 py-12">
        <h2 className="text-center text-black dark:text-white text-xl font-medium mb-4">Contact</h2>
        <div className="text-center text-zinc-700 dark:text-zinc-300 text-sm space-y-2">
          <p>
            Email: <a href="mailto:mohammadalgalib71@gmail.com" className="underline hover:no-underline">mohammadalgalib71@gmail.com</a>
          </p>
          <p>
            Phone: <a href="tel:+8801785904899" className="underline hover:no-underline">+880 1785 904 899</a>
          </p>
          <p>
            PGP: <a href="/pgp.asc" className="underline hover:no-underline" download>Download public key</a>
          </p>
        </div>
        <p className="mt-3 text-center text-xs text-zinc-500 dark:text-zinc-400">Prefer encrypted email? Use my PGP key.</p>
      </section>

      <footer id="footer" className="py-12 bg-white dark:bg-black border-t border-zinc-200 dark:border-zinc-800">
        <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand */}
            <div>
              <div className="text-zinc-900 dark:text-zinc-100 font-semibold">Mohammad Al Galib</div>
              <p className="mt-2 text-xs text-zinc-600 dark:text-zinc-400">Student • Tech Enthusiast • Explorer</p>
              <p className="mt-2 text-xs text-zinc-500 dark:text-zinc-500">Minimal portfolio. Built with Next.js & Tailwind.</p>
            </div>

            {/* Quick Links */}
            <div>
              <div className="text-sm font-medium text-zinc-900 dark:text-zinc-100 mb-2">Navigate</div>
              <ul className="space-y-1 text-sm">
                {[
                  { href: "#about", label: "About" },
                  { href: "#skills", label: "Skills" },
                  { href: "#experience", label: "Experience" },
                  { href: "#projects", label: "Projects" },
                  { href: "#tools", label: "Tools & Devices" },
                  { href: "#contact", label: "Contact" },
                ].map((l) => (
                  <li key={l.href}>
                    <a href={l.href} className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200 transition-colors">
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact summary */}
            <div>
              <div className="text-sm font-medium text-zinc-900 dark:text-zinc-100 mb-2">Contact</div>
              <ul className="space-y-1 text-sm">
                <li>
                  <a href="mailto:mohammadalgalib71@gmail.com" className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200">mohammadalgalib71@gmail.com</a>
                </li>
                <li>
                  <a href="tel:+8801785904899" className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200">+880 1785 904 899</a>
                </li>
                <li>
                  <a href="/pgp.asc" className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200" download>PGP public key</a>
                </li>
              </ul>
            </div>

            {/* Utilities */}
            <div>
              <div className="text-sm font-medium text-zinc-900 dark:text-zinc-100 mb-2">Utilities</div>
              <ul className="space-y-1 text-sm">
                <li>
                  <a href="#home" className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200">Back to top ↑</a>
                </li>
                <li>
                  <span className="text-zinc-500 dark:text-zinc-500">Last updated: {year}</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 pt-4 border-t border-zinc-200 dark:border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-xs text-zinc-600 dark:text-zinc-400">© {year} Mohammad Galib. All rights reserved.</p>
            <div className="text-xs text-zinc-500 dark:text-zinc-500">Made with ❤️ in black & white.</div>
          </div>
        </div>
      </footer>
    </>
  );
}
