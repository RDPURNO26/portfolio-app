"use client";

import { useEffect, useRef, useMemo } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

/* ── tiny seeded RNG so SSR & client agree ── */
function seededRandom(seed: number) {
  let s = seed;
  return () => {
    s = (s * 16807 + 0) % 2147483647;
    return (s - 1) / 2147483646;
  };
}

/* ── Particle field background (canvas) ── */
function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);

    const particles: {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      alpha: number;
    }[] = [];

    for (let i = 0; i < 80; i++) {
      particles.push({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 1.5 + 0.5,
        alpha: Math.random() * 0.4 + 0.1,
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, w, h);

      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = w;
        if (p.x > w) p.x = 0;
        if (p.y < 0) p.y = h;
        if (p.y > h) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 212, 255, ${p.alpha})`;
        ctx.fill();
      }

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(0, 212, 255, ${0.06 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      animId = requestAnimationFrame(draw);
    };

    draw();

    const onResize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      aria-hidden="true"
    />
  );
}

export default function Hero() {
  const line1 = "The plan might not work.";
  const line2 = "I'm building it anyway.";
  const words = [...line1.split(" "), "||", ...line2.split(" ")];
  const breakIndex = words.indexOf("||");

  /* deterministic particles for SSR */
  const floatingDots = useMemo(() => {
    const rng = seededRandom(42);
    return Array.from({ length: 24 }, () => ({
      w: rng() * 3 + 1,
      left: rng() * 100,
      top: rng() * 100,
      dur: rng() * 14 + 8,
      delay: rng() * 12,
    }));
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6">
      {/* Particle canvas */}
      <ParticleCanvas />

      {/* Animated grid background */}
      <div className="hero-grid" aria-hidden="true" />

      {/* Multiple radial glows */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[700px] rounded-full opacity-25 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, #00d4ff10 0%, #00ffd508 40%, transparent 70%)",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] rounded-full opacity-15 pointer-events-none blur-3xl"
        style={{ background: "#00d4ff08" }}
        aria-hidden="true"
      />

      {/* Floating dots */}
      <div
        className="absolute inset-0 overflow-hidden pointer-events-none"
        aria-hidden="true"
      >
        {floatingDots.map((dot, i) => (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              width: `${dot.w}px`,
              height: `${dot.w}px`,
              left: `${dot.left}%`,
              top: `${dot.top}%`,
              background: `radial-gradient(circle, #00d4ff60, #00d4ff20)`,
              animation: `float-up ${dot.dur}s linear ${dot.delay}s infinite`,
            }}
          />
        ))}
      </div>

      {/* Orbiting decorative elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] pointer-events-none opacity-20" aria-hidden="true">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="w-full h-full"
        >
          <div className="absolute top-0 left-1/2 w-1.5 h-1.5 rounded-full bg-accent" />
        </motion.div>
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] pointer-events-none opacity-10" aria-hidden="true">
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className="w-full h-full"
        >
          <div className="absolute top-0 left-1/2 w-1 h-1 rounded-full bg-accent-secondary" />
        </motion.div>
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center max-w-5xl">
        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 rounded-full border border-accent/15 bg-accent/5"
        >
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span className="font-mono text-[11px] tracking-wider text-accent/80">
            OPEN TO OPPORTUNITIES
          </span>
        </motion.div>

        {/* Heading — word-by-word stagger */}
        <h1 className="font-heading font-[800] text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-[1.1] tracking-tight mb-8">
          {words.map((word, i) =>
            word === "||" ? (
              <br key={i} />
            ) : (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 40, filter: "blur(12px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{
                  delay: 0.5 + i * 0.1,
                  duration: 0.7,
                  ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
                }}
                className="inline-block mr-[0.3em]"
                style={{
                  background:
                    i > breakIndex
                      ? "linear-gradient(135deg, #00d4ff, #00ffd5, #00d4ff)"
                      : "linear-gradient(135deg, #f0f0f0 20%, #a0a0b8)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {word}
              </motion.span>
            )
          )}
        </h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 0.7 }}
          className="text-muted text-base sm:text-lg md:text-xl font-sans mb-12 tracking-wide max-w-2xl mx-auto"
        >
          Diploma student from Bangladesh. Targeting Japan.
          <br />
          <span className="text-accent/60 text-sm">
            CS &bull; AI &bull; Gesture Systems &bull; Japanese
          </span>
        </motion.p>

        {/* CTA */}
        <motion.a
          href="#projects"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 2, duration: 0.5 }}
          whileHover={{
            scale: 1.06,
            boxShadow: "0 0 40px #00d4ff33, 0 0 80px #00d4ff15",
          }}
          whileTap={{ scale: 0.97 }}
          className="relative inline-flex items-center gap-2.5 px-10 py-4 rounded-full border border-accent/30 text-accent font-mono text-sm tracking-[0.15em] uppercase bg-accent/[0.06] hover:bg-accent/[0.12] transition-all duration-500 group"
          data-hover
        >
          <span className="absolute inset-0 rounded-full bg-gradient-to-r from-accent/10 via-transparent to-accent-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <span className="relative">See My Work</span>
          <ChevronDown size={16} className="relative" />
        </motion.a>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="font-mono text-[9px] tracking-[0.3em] text-muted/50 uppercase">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ChevronDown size={18} className="text-accent/30" />
        </motion.div>
      </motion.div>
    </section>
  );
}
