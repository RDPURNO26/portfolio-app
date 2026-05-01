"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const paragraphs = [
  "I'm Rahimanid Dian Purno — a final-semester Computer Science & Technology student from Bangladesh, working at the intersection of AI, human-computer interaction, and intelligent systems.",
  "My work starts with a question: how do we make computers understand humans more naturally? AURA was my first real answer — a gesture control system that replaced the mouse and keyboard entirely using only a webcam and hand tracking. No special hardware. Just code that understands what your hand is doing.",
  "I built JLPT Samurai because I needed it myself. I'm learning Japanese because Japan leads the research I want to pursue: HCI, robotics, and applied AI. I'm not going as a tourist. I'm going to work.",
  "Right now I'm studying ML module by module — not rushing, actually understanding. My industrial attachment targets an ML/AI placement. I direct AI as a research and build partner, not a shortcut. Research-first approach before every project.",
];

const quickFacts = [
  ["Location", "Bangladesh 🇧🇩"],
  ["Semester", "7th — Final Theory Year"],
  ["Focus", "HCI · AI · Intelligent Systems"],
  ["Language", "Japanese (→ N4)"],
  ["Goal", "BSc → PhD in AI in Japan 🇯🇵"],
  ["Available", "Internship · Scholarship · Work"],
];

const tags = [
  "Python", "MediaPipe", "Java", "Firebase", "IoT",
  "Adobe Illustrator", "ML (learning)", "Japanese (learning)",
];

const stats = [
  { value: "4+", label: "Projects Shipped" },
  { value: "7th Sem", label: "Diploma in CSE" },
  { value: "N4", label: "JLPT Target" },
  { value: "∞", label: "Curiosity" },
];

export default function About() {
  return (
    <section id="about" className="relative py-28 md:py-40 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="section-label">
          {"// 01 ABOUT"}
        </motion.div>

        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-16 tracking-tight">
          Who is RD Purno<span className="text-accent">?</span>
        </motion.h2>

        {/* Stats bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {stats.map((stat, i) => (
            <motion.div key={stat.label} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.2 + i * 0.08 }} className="text-center p-5 rounded-xl glass gradient-border">
              <div className="font-heading font-bold text-2xl md:text-3xl text-accent mb-1">{stat.value}</div>
              <div className="font-mono text-[10px] text-muted uppercase tracking-widest">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Text column */}
          <div className="lg:col-span-3 space-y-5">
            {paragraphs.map((text, i) => (
              <motion.p key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.15 + i * 0.08 }} className="text-base md:text-lg leading-[1.85] text-muted">
                {text}
              </motion.p>
            ))}
            <motion.p initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.6 }} className="text-base md:text-lg leading-[1.85] font-medium italic" style={{ background: "linear-gradient(135deg, #00d4ff, #00ffd5)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              &ldquo;I&apos;m not the finished product. I&apos;m someone in motion.&rdquo;
            </motion.p>
          </div>

          {/* Right column */}
          <div className="lg:col-span-2 flex flex-col gap-6 items-center lg:items-start">
            {/* Profile with rotating ring */}
            <motion.div initial={{ opacity: 0, scale: 0.85 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.3 }} className="relative w-52 h-52 md:w-60 md:h-60">
              <motion.div className="absolute -inset-[2px] rounded-2xl" style={{ background: "conic-gradient(from 0deg, #00d4ff40, transparent, #00ffd540, transparent, #00d4ff40)" }} animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} />
              <div className="absolute inset-[2px] rounded-2xl overflow-hidden bg-surface">
                <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, #0a0a1a 0%, #111128 30%, #00d4ff08 100%)" }} />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Image src="/RD.png" alt="Rahimanid Dian Purno — RD Purno, Computer Science student from Bangladesh" fill className="object-cover" />
                </div>
              </div>
            </motion.div>

            {/* Quick facts */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.5 }} className="w-full p-6 rounded-xl glass gradient-border">
              <div className="font-mono text-[10px] text-accent uppercase tracking-[0.2em] mb-4">Quick Facts</div>
              <ul className="space-y-3 font-mono text-xs">
                {quickFacts.map(([key, val], i) => (
                  <motion.li key={i} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.55 + i * 0.06, duration: 0.3 }} className="flex justify-between gap-4 py-1 border-b border-surface-border/50 last:border-0">
                    <span className="text-muted">{key}</span>
                    <span className="sr-only">: </span>
                    <span className="text-foreground text-right">{val}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {tags.map((tag, i) => (
                <motion.span key={tag} initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.7 + i * 0.05, duration: 0.3 }} whileHover={{ scale: 1.08, borderColor: "#00d4ff44", boxShadow: "0 0 16px #00d4ff15" }} className={`px-3 py-1.5 rounded-full text-xs font-mono bg-accent/[0.06] text-accent border border-accent/10 cursor-default transition-all duration-300 ${tag.includes("learning") ? "animate-pulse-soft" : ""}`}>
                  {tag}
                </motion.span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
