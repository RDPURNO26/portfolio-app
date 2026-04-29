"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const nodes = [
  { time: "Right Now", badge: "2026", text: "7th semester. Final theory year. Building AURA v4 actively. Studying ML modules one by one. Japanese every single day." },
  { time: "Next Step", badge: "Soon", text: "Industrial attachment in ML/AI field. Real world experience. Not just coursework." },
  { time: "The Language", badge: "In Progress", text: "JLPT N4 → N3 → N2. The language is the key to the door. Learning it because I need it. Not because it looks good on a CV." },
  { time: "The Door", badge: "The Goal", text: "BSc in Japan. Artificial Intelligence. This portfolio is part of that application." },
  { time: "The Dream", badge: "Why", text: "PhD in AI. Build something that actually thinks. That's why all of this exists." },
];

export default function Journey() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start 80%", "end 60%"] });
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section id="journey" className="relative py-28 md:py-40 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="section-label">
          {"// 04 JOURNEY"}
        </motion.div>
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-6 tracking-tight">
          The Road So Far<span className="text-accent">.</span>
        </motion.h2>
        <motion.p initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }} className="text-muted text-base md:text-lg mb-16 max-w-2xl">
          Not a timeline of achievements. A map of where I&apos;m going.
        </motion.p>

        <div ref={containerRef} className="relative pl-10 md:pl-14">
          {/* Timeline line */}
          <div className="absolute left-[7px] md:left-[11px] top-0 bottom-0 w-[2px] bg-surface-border">
            <motion.div className="absolute top-0 left-0 right-0 bg-gradient-to-b from-accent via-accent to-accent-secondary" style={{ scaleY, transformOrigin: "top", height: "100%", boxShadow: "0 0 12px #00d4ff44, 0 0 24px #00d4ff22" }} />
          </div>

          <div className="space-y-14 md:space-y-18">
            {nodes.map((node, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] }} className="relative">
                {/* Glowing dot */}
                <div className="absolute -left-10 md:-left-14 top-1.5 glow-dot" />
                
                {/* Card */}
                <motion.div whileHover={{ x: 6, boxShadow: "0 0 40px #00d4ff08" }} className="rounded-xl glass gradient-border p-6 md:p-7 transition-all duration-500">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <h3 className="font-heading font-semibold text-lg md:text-xl text-foreground">{node.time}</h3>
                    <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-accent/10 text-accent border border-accent/15">{node.badge}</span>
                  </div>
                  <p className="text-muted text-sm md:text-base leading-relaxed">{node.text}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
