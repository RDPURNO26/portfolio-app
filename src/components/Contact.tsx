"use client";

import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaLinkedin, FaEnvelope } from "react-icons/fa";

const contacts = [
  { icon: FaGithub, label: "github.com/RDPURNO26", sub: "See the code", href: "https://github.com/RDPURNO26" },
  { icon: FaExternalLinkAlt, label: "JLPT Samurai", sub: "See it running", href: "https://rdpurno26.github.io/JLPT-Samurai/" },
  { icon: FaLinkedin, label: "linkedin.com/in/rdpurno26", sub: "Connect professionally", href: "https://www.linkedin.com/in/rdpurno26/" },
  { icon: FaEnvelope, label: "rdpurno417@gmail.com", sub: "For opportunities", href: "mailto:rdpurno417@gmail.com" },
];

export default function Contact() {
  return (
    <section id="contact" className="relative py-28 md:py-40 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="section-label">
          {"// 05 CONTACT"}
        </motion.div>
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 tracking-tight">
          Let&apos;s Talk<span className="text-accent">.</span>
        </motion.h2>
        <motion.p initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }} className="text-muted text-base md:text-lg mb-10 max-w-2xl leading-relaxed">
          Whether you&apos;re a recruiter, a scholarship committee, or just someone curious — I&apos;m reachable.
        </motion.p>
        
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }} className="mb-14">
          <a href="/RD_Purno_CV.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full border border-accent/30 bg-accent/5 text-accent font-mono text-sm uppercase tracking-widest hover:bg-accent/15 hover:shadow-[0_0_20px_#00d4ff20] transition-all duration-300" data-hover>
             Download Resume
          </a>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {contacts.map((c, i) => {
            const Icon = c.icon;
            return (
              <motion.a
                key={c.label}
                href={c.href}
                target={c.icon === FaEnvelope ? undefined : "_blank"}
                rel={c.icon === FaEnvelope ? undefined : "noopener noreferrer"}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.15 + i * 0.1 }}
                whileHover={{ y: -8, scale: 1.03, boxShadow: "0 0 50px #00d4ff15" }}
                className="group flex flex-col items-center text-center p-7 rounded-2xl glass gradient-border transition-all duration-500"
                data-hover
              >
                <motion.div
                  className="mb-5 p-3 rounded-xl bg-accent/[0.06] border border-accent/10 group-hover:bg-accent/[0.12] group-hover:border-accent/25 transition-all duration-500"
                  whileHover={{ rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  <Icon size={22} className="text-accent/60 group-hover:text-accent transition-colors duration-300" />
                </motion.div>
                <p className="font-mono text-xs text-foreground mb-1.5 break-all leading-snug">{c.label}</p>
                <p className="text-[11px] text-muted/70">{c.sub}</p>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
