"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface Orb {
  id: number;
  size: number;
  startX: number;
  startY: number;
  moveX: string[];
  moveY: string[];
  duration: number;
  delay: number;
  opacity: number;
  color: string;
}

export default function LiquidBackground() {
  const [orbs, setOrbs] = useState<Orb[]>([]);

  useEffect(() => {
    // Colors that fit the architectural lighting aesthetic
    const colors = ["#D4AF37", "#F2CA50", "#E5E2E1", "#FFFFFF"];
    
    // Generate random orbs only on the client to prevent hydration mismatch
    const generatedOrbs = Array.from({ length: 50 }).map((_, i) => {
      const size = Math.random() * 4 + 2; // 2px to 6px
      return {
        id: i,
        size,
        startX: Math.random() * 100, // vw
        startY: Math.random() * 100, // vh
        // Create a random, wide-drifting path
        moveX: [
          "0vw",
          `${(Math.random() - 0.5) * 30}vw`,
          `${(Math.random() - 0.5) * 50}vw`,
          `${(Math.random() - 0.5) * 30}vw`,
          "0vw"
        ],
        moveY: [
          "0vh",
          `${(Math.random() - 0.5) * 30}vh`,
          `${(Math.random() - 0.5) * 50}vh`,
          `${(Math.random() - 0.5) * 30}vh`,
          "0vh"
        ],
        duration: Math.random() * 30 + 30, // 30s to 60s
        delay: Math.random() * -60, // Start randomly inside the animation loop
        opacity: Math.random() * 0.4 + 0.1, // 0.1 to 0.5
        color: colors[Math.floor(Math.random() * colors.length)],
      };
    });
    setOrbs(generatedOrbs);
  }, []);

  if (orbs.length === 0) {
    return (
      <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none bg-background">
        <div className="absolute inset-0 bg-[#131313]"></div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none bg-background">
      {/* Base dark layer */}
      <div className="absolute inset-0 bg-[#131313]"></div>
      
      {/* Floating Tiny Orbs (Dust/Fireflies Effect) */}
      {orbs.map((orb) => (
        <motion.div
          key={orb.id}
          className="absolute rounded-full"
          style={{
            left: `${orb.startX}vw`,
            top: `${orb.startY}vh`,
            width: `${orb.size}px`,
            height: `${orb.size}px`,
            backgroundColor: orb.color,
            opacity: orb.opacity,
            filter: `blur(${Math.max(1, orb.size / 3)}px)`,
            boxShadow: `0 0 ${orb.size * 3}px ${orb.color}80`, // Adding glow
          }}
          animate={{
            x: orb.moveX,
            y: orb.moveY,
          }}
          transition={{
            duration: orb.duration,
            repeat: Infinity,
            ease: "linear",
            delay: orb.delay,
          }}
        />
      ))}
    </div>
  );
}
