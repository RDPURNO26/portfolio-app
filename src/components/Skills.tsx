"use client";

import { motion } from "framer-motion";

const groups = [
  { 
    label: "I build with", 
    subtitle: "(Core stacks I use regularly)",
    icon: "⚡", 
    tags: ["Python", "Java", "JavaScript", "HTML", "CSS"] 
  },
  { 
    label: "I've shipped with", 
    subtitle: "(Worked with & Learning further)",
    icon: "🚀", 
    tags: ["MediaPipe", "OpenCV", "PyQt6", "Firebase", "Arduino", "NodeMCU", "React", "Vite"] 
  },
  { 
    label: "I design with", 
    subtitle: "(Aesthetics & Imaginative Ideation)",
    icon: "🎨", 
    tags: ["Adobe Illustrator", "Photoshop", "UI/UX Prototyping", "Visual Ideation"] 
  },
  { 
    label: "I'm learning", 
    subtitle: "(Active study modules)",
    icon: "📡", 
    tags: ["NumPy", "Pandas", "Machine Learning", "Deep Learning", "Japanese (N4)"], 
    pulse: true 
  },
  { 
    label: "I work with AI as", 
    subtitle: "(My role in AI orchestration)",
    icon: "🤖", 
    tags: ["Researcher", "Director", "Pair Programmer"] 
  },
];

const containerV = { hidden: {}, visible: { transition: { staggerChildren: 0.12 } } };
const groupV = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] } } };
const tagContV = { hidden: {}, visible: { transition: { staggerChildren: 0.04 } } };
const tagV = { hidden: { opacity: 0, scale: 0.8, y: 10 }, visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.35 } } };

export default function Skills() {
  return (
    <section id="skills" className="relative py-28 md:py-40 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="section-label">
          {"// 03 SKILLS"}
        </motion.div>

        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-6 tracking-tight">
          What I Work With<span className="text-accent">.</span>
        </motion.h2>

        <motion.p initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }} className="text-muted text-base md:text-lg mb-14 max-w-2xl">
          Honest list. No padding. If it&apos;s here, I&apos;ve used it in a real project or I&apos;m actively learning it.
        </motion.p>

        <motion.div variants={containerV} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {groups.map((group) => (
            <motion.div key={group.label} variants={groupV} whileHover={{ y: -4, boxShadow: "0 0 40px #00d4ff08" }} className={`rounded-xl glass gradient-border p-6 transition-all duration-500 ${group.label === "I work with AI as" ? "md:col-span-2" : ""}`}>
              <div className="flex items-center gap-2.5 mb-5">
                <span className="text-lg">{group.icon}</span>
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-accent font-mono font-medium leading-none mb-1">{group.label}</p>
                  <p className="text-[10px] text-muted/60 font-mono tracking-tight">{group.subtitle}</p>
                </div>
              </div>

              <motion.div variants={tagContV} className="flex flex-wrap gap-2.5">
                {group.tags.map((tag) => (
                  <motion.span key={tag} variants={tagV} whileHover={{ scale: 1.08, borderColor: "#00d4ff40", backgroundColor: "#00d4ff10", boxShadow: "0 0 20px #00d4ff12" }} className={`px-3 py-1 rounded-full text-xs font-mono bg-transparent text-cyan-400 border border-cyan-400/30 hover:bg-cyan-400/10 transition-all duration-300 cursor-default ${group.pulse ? "animate-pulse-soft" : ""}`}>
                    {tag}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
