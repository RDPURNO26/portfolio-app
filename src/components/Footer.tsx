"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="relative py-16 px-6">
      <div className="max-w-5xl mx-auto flex flex-col items-center">
        <div className="gradient-line w-32 mb-8" />
        
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <p className="font-heading font-semibold text-lg mb-2">
            RD Purno<span className="text-accent">.</span>
          </p>
          <p className="text-[11px] text-muted/80 font-mono tracking-wider">
            © 2026 Rahimanid Dian Purno (RD Purno) — Bangladesh → Japan
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-6 flex items-center gap-3"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-accent/30" />
          <span className="font-mono text-[10px] text-muted/40 tracking-widest uppercase">
            Built with intent
          </span>
          <div className="w-1.5 h-1.5 rounded-full bg-accent/30" />
        </motion.div>
      </div>
    </footer>
  );
}
