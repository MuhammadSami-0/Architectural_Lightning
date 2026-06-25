"use client";

import { MouseEvent as ReactMouseEvent, TouchEvent, useState } from "react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";

export default function MouseGlowContainer({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);
  const [isTouched, setIsTouched] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  function handleMouseMove({ currentTarget, clientX, clientY }: ReactMouseEvent) {
    let { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  function handleTouchMove(e: TouchEvent) {
    setIsTouched(true);
    if (e.touches.length > 0) {
      let { left, top } = e.currentTarget.getBoundingClientRect();
      mouseX.set(e.touches[0].clientX - left);
      mouseY.set(e.touches[0].clientY - top);
    }
  }

  return (
    <div
      className={`group/glow relative overflow-hidden rounded-sm bg-black/40 backdrop-blur-md border border-white/5 transition-colors duration-700 ease-out hover:bg-black/60 active:bg-black/60 ${className}`}
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
      onTouchStart={handleTouchMove}
      onTouchEnd={() => setIsTouched(false)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Mobile-only static ambient glow */}
      <div className="md:hidden pointer-events-none absolute -inset-px rounded-sm opacity-100" style={{ background: 'radial-gradient(circle at 50% 50%, rgba(212, 175, 55, 0.08), transparent 80%)' }} />
      
      {/* Desktop: Ambient glow when hovering the parent group (e.g. the image) but NOT hovering this text container directly */}
      <div 
        className={`hidden md:block pointer-events-none absolute -inset-px rounded-sm transition-opacity duration-700 ease-out ${!isHovered ? 'group-hover:opacity-100 opacity-0' : 'opacity-0'}`} 
        style={{ background: 'radial-gradient(circle at 50% 50%, rgba(212, 175, 55, 0.12), transparent 80%)' }} 
      />

      {/* Dynamic tracking glow (Desktop + Active Touch) */}
      <motion.div
        className={`pointer-events-none absolute -inset-px rounded-sm transition-opacity duration-700 ease-out ${isTouched || isHovered ? 'opacity-100' : 'opacity-0'}`}
        style={{
          background: useMotionTemplate`
            radial-gradient(
              600px circle at ${mouseX}px ${mouseY}px,
              rgba(212, 175, 55, 0.15),
              transparent 80%
            )
          `,
        }}
      />
      <div className="relative z-10 w-full h-full">
        {children}
      </div>
    </div>
  );
}
