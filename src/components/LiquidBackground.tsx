"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function LiquidBackground() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none bg-background">
      {/* Base dark layer */}
      <div className="absolute inset-0 bg-[#131313]"></div>
      
      {/* Orb 1: Warm Gold */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-[40vw] h-[40vw] rounded-full mix-blend-screen opacity-10"
        style={{
          background: "radial-gradient(circle, #CA8A04 0%, transparent 70%)",
          filter: "blur(100px)",
        }}
        animate={{
          x: [0, 100, -50, 0],
          y: [0, -100, 50, 0],
          scale: [1, 1.2, 0.8, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Orb 2: Deep Stone/Bronze */}
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-[50vw] h-[50vw] rounded-full mix-blend-screen opacity-15"
        style={{
          background: "radial-gradient(circle, #44403C 0%, transparent 70%)",
          filter: "blur(120px)",
        }}
        animate={{
          x: [0, -120, 80, 0],
          y: [0, 100, -80, 0],
          scale: [1, 0.9, 1.1, 1],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </div>
  );
}
