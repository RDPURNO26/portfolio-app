"use client";

import { motion } from "framer-motion";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-[999] flex flex-col items-center justify-center bg-background">
      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.6, 1, 0.6] }}
        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        className="flex items-center gap-2 mb-4"
      >
        <span className="font-heading font-bold text-3xl tracking-tight text-foreground">
          RD Purno
        </span>
        <span className="w-2.5 h-2.5 rounded-full bg-accent" />
      </motion.div>
      <div className="w-48 h-[2px] bg-surface-border rounded-full overflow-hidden">
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: "100%" }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
          className="w-1/2 h-full bg-gradient-to-r from-transparent via-accent to-transparent"
        />
      </div>
    </div>
  );
}
