"use client";

import { motion } from "framer-motion";
import { ExternalLink, Code } from "lucide-react";

interface ProjectLink { label: string; href: string; }

interface ProjectData {
  label: string; name: string; tagline: string; description: string;
  tags: string[]; status: string; statusColor: string;
  links: ProjectLink[]; featured?: boolean;
}

const projects: ProjectData[] = [
  {
    label: "AI / Desktop System", name: "AURA ⭐",
    tagline: "Control your PC with your hand. No gloves. No sensors. Just a webcam.",
    description: "AURA is a real-time gesture control system that replaces your mouse and keyboard entirely using hand tracking. It uses MediaPipe's 21-point landmark model, a custom Gesture FSM, multi-process architecture with SharedMemory IPC, and a PyQt6 dashboard with live telemetry. 11 distinct gestures. Zero overlap. Runs completely offline.",
    tags: ["Python", "MediaPipe", "PyQt6", "OpenCV", "Multiprocessing", "Win32"],
    status: "Active", statusColor: "#4ade80",
    links: [
      { label: "GitHub ↗", href: "https://github.com/RDPURNO26/AURA" },
      { label: "Download .exe ↗", href: "https://github.com/RDPURNO26/AURA/releases" },
    ],
    featured: true,
  },
  {
    label: "Web Platform", name: "JLPT Samurai ⚔️",
    tagline: "I needed a Japanese learning platform. So I built one.",
    description: "Full JLPT study platform with Kana Dojo, N5/N4 vocabulary, 3D flashcards, Spaced Repetition System, time-attack quiz engine, and Firebase cloud sync. Used by me daily.",
    tags: ["JavaScript", "Firebase", "HTML", "CSS", "Web Speech API"],
    status: "Live", statusColor: "#4ade80",
    links: [
      { label: "Live Demo ↗", href: "https://rdpurno26.github.io/JLPT-Samurai/" },
      { label: "GitHub ↗", href: "https://github.com/RDPURNO26" },
    ],
  },
  {
    label: "IoT / Hardware", name: "Smart Home 🏠",
    tagline: "Works even when the internet goes down.",
    description: "Dual-microcontroller system. Voice control via Alexa and Google Home. But the safety pipeline — fire detection, gas monitoring, emergency door unlock — runs fully offline. No WiFi needed for safety.",
    tags: ["NodeMCU", "Arduino", "I2C", "Sinric Pro", "DHT11"],
    status: "Hardware", statusColor: "#60a5fa",
    links: [{ label: "GitHub ↗", href: "https://github.com/RDPURNO26" }],
  },
  {
    label: "Web App", name: "UniLib 📚",
    tagline: "AI-assisted. Human-directed.",
    description: "Next-gen library management system built with React + Vite. I directed the architecture and all decisions. AI handled implementation. A deliberate, honest workflow.",
    tags: ["React", "Vite", "MySQL"],
    status: "In Development", statusColor: "#facc15",
    links: [{ label: "GitHub ↗", href: "https://github.com/RDPURNO26" }],
  },
];

function ProjectCard({ project, index }: { project: ProjectData; index: number }) {
  const isFeatured = project.featured;
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay: index * 0.12, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] }}
      whileHover={{ y: -8, scale: 1.015 }}
      style={{ transformPerspective: 1000 }}
      className={`group relative rounded-2xl bg-surface border border-surface-border p-6 md:p-8 card-glow gradient-border cursor-default ${isFeatured ? "md:col-span-3" : ""} ${isFeatured ? "featured-glow" : ""}`}
    >
      {/* Featured top glow strip */}
      {isFeatured && (
        <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
      )}

      {/* Corner accent */}
      <div className="absolute top-4 right-4 w-8 h-8 border-t border-r border-accent/10 rounded-tr-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Header */}
      <div className="flex items-start justify-between mb-5">
        <div>
          <span className="font-mono text-[10px] text-accent/60 uppercase tracking-[0.2em]">{project.label}</span>
          <h3 className="font-heading font-bold text-xl md:text-2xl mt-1.5 tracking-tight">{project.name}</h3>
        </div>
        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[10px] font-mono font-semibold uppercase tracking-wider" style={{ color: project.statusColor, backgroundColor: `${project.statusColor}12`, border: `1px solid ${project.statusColor}25` }}>
          <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: project.statusColor }} />
          {project.status}
        </span>
      </div>

      {/* Tagline */}
      <p className="text-accent/70 font-medium text-sm md:text-base mb-3 italic">&ldquo;{project.tagline}&rdquo;</p>

      {/* Description */}
      <p className="text-muted text-sm md:text-[15px] leading-relaxed mb-6">{project.description}</p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-6">
        {project.tags.map((tag) => (
          <span key={tag} className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-surface-light text-muted/80 border border-surface-border hover:border-accent/20 hover:text-accent/70 transition-all duration-300">{tag}</span>
        ))}
      </div>

      {/* Links */}
      <div className="flex flex-wrap gap-3">
        {project.links.map((link) => (
          <a key={link.href + link.label} href={link.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-mono text-accent border border-accent/15 bg-accent/[0.04] hover:bg-accent/[0.12] hover:border-accent/35 hover:shadow-[0_0_20px_#00d4ff15] transition-all duration-400" data-hover>
            {link.label.includes("GitHub") ? <Code size={13} /> : <ExternalLink size={13} />}
            {link.label}
          </a>
        ))}
      </div>

      {/* Hover gradient */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none bg-gradient-to-br from-accent/[0.02] via-transparent to-accent-secondary/[0.02]" />
    </motion.div>
  );
}

export default function Projects() {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="relative py-28 md:py-40 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="section-label">
          {"// 02 PROJECTS"}
        </motion.div>

        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-6 tracking-tight">
          Things I&apos;ve Built<span className="text-accent">.</span>
        </motion.h2>

        <motion.p initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }} className="text-muted text-base md:text-lg mb-14 max-w-2xl">
          Real projects, shipped and used. Not tutorials repackaged.
        </motion.p>

        {featured.map((p, i) => (
          <div key={p.name} className="mb-8">
            <ProjectCard project={p} index={i} />
          </div>
        ))}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {rest.map((p, i) => (
            <ProjectCard key={p.name} project={p} index={i + 1} />
          ))}
        </div>
      </div>
    </section>
  );
}
