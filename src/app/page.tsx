"use client";

import { motion, AnimatePresence, MotionConfig } from "framer-motion";
import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

const CustomCursor = dynamic(() => import("@/components/CustomCursor"), {
  ssr: false,
});

const About = dynamic(() => import("@/components/About"));
const Projects = dynamic(() => import("@/components/Projects"));
const Skills = dynamic(() => import("@/components/Skills"));
const Journey = dynamic(() => import("@/components/Journey"));
const Contact = dynamic(() => import("@/components/Contact"));
const Footer = dynamic(() => import("@/components/Footer"));

const sectionAnim = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" as const },
  transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] },
};

function Divider() {
  return (
    <motion.div
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] }}
      className="gradient-line max-w-5xl mx-auto"
      style={{ transformOrigin: "center" }}
    />
  );
}



export default function Home() {
  return (
    <MotionConfig reducedMotion="user">
      <AnimatePresence>
        <main className="relative">
          <CustomCursor />
          <Navbar />
          <h1 className="sr-only">Rahimanid Dian Purno — RD Purno, Developer and AI Student from Bangladesh</h1>
          <Hero />

          <Divider />
          <motion.div {...sectionAnim}><About /></motion.div>

          <Divider />
          <motion.div {...sectionAnim}><Projects /></motion.div>

          <Divider />
          <motion.div {...sectionAnim}><Skills /></motion.div>

          <Divider />
          <motion.div {...sectionAnim}><Journey /></motion.div>

          <Divider />
          <motion.div {...sectionAnim}><Contact /></motion.div>

          <Divider />
          <Footer />
        </main>
      </AnimatePresence>
    </MotionConfig>
  );
}
