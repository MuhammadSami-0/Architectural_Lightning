"use client";

import { useState, useEffect } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export default function CursorTrail() {
  const [isVisible, setIsVisible] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Spring physics for a smooth, trailing effect
  const springConfig = { damping: 25, stiffness: 120, mass: 0.5 };
  const smoothX = useSpring(cursorX, springConfig);
  const smoothY = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Disable on mobile/touch devices for performance and UX
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 15); // Offset by half width to center the trail
      cursorY.set(e.clientY - 15);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);
    
    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [isVisible, cursorX, cursorY]);

  if (!isVisible) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 w-[30px] h-[30px] rounded-full pointer-events-none z-[100] mix-blend-screen"
      style={{
        x: smoothX,
        y: smoothY,
        background: "radial-gradient(circle, rgba(242, 202, 80, 0.9) 0%, rgba(242, 202, 80, 0) 70%)",
        boxShadow: "0 0 30px 10px rgba(242, 202, 80, 0.3)",
      }}
    />
  );
}
