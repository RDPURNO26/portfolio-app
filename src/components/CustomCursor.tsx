"use client";

import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);

  const springConfig = { damping: 25, stiffness: 300, mass: 0.5 };
  const x = useSpring(0, springConfig);
  const y = useSpring(0, springConfig);

  useEffect(() => {
    /* Hide on touch devices */
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      if (!visible) setVisible(true);
    };

    const addHover = () => setHovered(true);
    const removeHover = () => setHovered(false);

    window.addEventListener("mousemove", move);

    const attach = () => {
      document.querySelectorAll("a, button, [data-hover]").forEach((el) => {
        el.addEventListener("mouseenter", addHover);
        el.addEventListener("mouseleave", removeHover);
      });
    };

    attach();
    const observer = new MutationObserver(attach);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("mousemove", move);
      observer.disconnect();
    };
  }, [x, y, visible]);

  if (!visible) return null;

  return (
    <>
      {/* Inner dot */}
      <motion.div
        className="custom-cursor fixed top-0 left-0 pointer-events-none z-[9999]"
        style={{
          x,
          y,
          translateX: "-50%",
          translateY: "-50%",
          width: hovered ? 12 : 6,
          height: hovered ? 12 : 6,
          backgroundColor: "#00d4ff",
          borderRadius: "50%",
          boxShadow: "0 0 12px #00d4ff88, 0 0 24px #00d4ff44",
          transition: "width 0.2s, height 0.2s",
        }}
      />
      {/* Outer ring */}
      <motion.div
        className="custom-cursor fixed top-0 left-0 pointer-events-none z-[9998]"
        style={{
          x,
          y,
          translateX: "-50%",
          translateY: "-50%",
          width: hovered ? 48 : 32,
          height: hovered ? 48 : 32,
          border: "1px solid #00d4ff44",
          borderRadius: "50%",
          transition: "width 0.3s, height 0.3s, border-color 0.3s",
          borderColor: hovered ? "#00d4ff88" : "#00d4ff33",
        }}
      />
    </>
  );
}
