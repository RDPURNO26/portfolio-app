"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Journey", href: "#journey" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);

  /* Scroll progress bar */
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Intersection observer for active section */
  useEffect(() => {
    const ids = links.map((l) => l.href.replace("#", ""));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Scroll progress indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] z-[110] origin-left"
        style={{
          scaleX,
          background:
            "linear-gradient(90deg, #00d4ff, #00ffd5)",
          boxShadow: "0 0 10px #00d4ff66",
        }}
      />

      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{
          duration: 0.7,
          ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
        }}
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
          scrolled
            ? "bg-background/60 backdrop-blur-2xl border-b border-surface-border/50 shadow-lg shadow-black/20"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Name / Logo */}
          <a
            href="#"
            className="group font-heading font-bold text-lg tracking-tight text-foreground hover:text-accent transition-colors duration-300"
            data-hover
          >
            Purno
            <span className="text-accent group-hover:text-accent-secondary transition-colors duration-300">
              .
            </span>
          </a>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-8">
            {links.map((link) => {
              const isActive =
                activeSection === link.href.replace("#", "");
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className={`relative font-mono text-xs tracking-wider uppercase transition-colors duration-300 ${
                      isActive
                        ? "text-accent"
                        : "text-muted hover:text-foreground"
                    }`}
                    data-hover
                  >
                    {link.label}
                    {isActive && (
                      <motion.div
                        layoutId="nav-underline"
                        className="absolute -bottom-1 left-0 right-0 h-[2px] rounded-full"
                        style={{
                          background:
                            "linear-gradient(90deg, #00d4ff, #00ffd5)",
                          boxShadow: "0 0 8px #00d4ff44",
                        }}
                        transition={{
                          type: "spring",
                          stiffness: 350,
                          damping: 30,
                        }}
                      />
                    )}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-foreground hover:text-accent transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            data-hover
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-background/95 backdrop-blur-2xl border-b border-surface-border overflow-hidden"
            >
              <ul className="flex flex-col gap-1 px-6 py-4">
                {links.map((link, i) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05, duration: 0.3 }}
                  >
                    <a
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="block py-3 font-mono text-sm tracking-wider text-muted hover:text-accent transition-colors"
                    >
                      {link.label}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}
