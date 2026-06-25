"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import MouseGlowContainer from '@/components/MouseGlowContainer';

export default function About() {
  const [isTextHovered, setIsTextHovered] = useState(false);

  return (
    <main className="min-h-screen relative overflow-hidden pt-32 pb-24">
      <div className="max-w-[1400px] mx-auto px-8 relative z-10 group">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="mb-12"
        >
          <h1 className="font-headline-xl-mobile md:font-headline-xl text-on-surface">
            Sculpting Space <br className="hidden md:block" /> Through Absence.
          </h1>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-stretch">
          
          {/* Left: Image Pane */}
          <div className="relative w-full h-full min-h-[500px] rounded-[2rem] overflow-hidden shadow-2xl cursor-pointer">
            <div className={`absolute inset-0 z-10 pointer-events-none transition-colors duration-700 ${isTextHovered ? 'bg-transparent' : 'bg-black/20'}`}></div>
            <img 
              className={`w-full h-full object-cover object-center filter transition-all duration-700 contrast-125 ${isTextHovered ? 'grayscale-0 scale-105' : 'grayscale-0 md:grayscale scale-100'}`} 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAYGa4jwbSNXgdapilHbikh6eMDXYrkKHcCoxeRfV9mdAYUwLYW7qM-OnV4t-6T95zGcc2K3y-D3X6KXwc0Qp7eTKdAHlpWTOXYQ-orVdWNDRlVZfpN1F1KOvVmX8vY8zFCOecXTRPNEIlj_16vXIMUsYWpuGduJdV_cGKEHVh_A-iV3jea1qBTxMQ1do51nnpyUYzOwMo4Pl7F8CGcGKeBvLBakhQiLFzS-8u_D0LAbS0ZQoe9q37Wz7dLdGMxQoK_0-wBJvoQP0w" 
              alt="About Lumen & Shadow"
            />
          </div>

          {/* Right: Content Canvas */}
          <div className="w-full h-full">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
              className="h-full"
            >
              <div 
                onMouseEnter={() => setIsTextHovered(true)}
                onMouseLeave={() => setIsTextHovered(false)}
                className="h-full"
              >
                <MouseGlowContainer className="p-8 md:p-12 h-full flex flex-col justify-center">
                  <div className="space-y-6 font-body-lg text-body-lg text-on-surface-variant mb-12 text-lg">
                  <p>
                    At Lumen & Shadow, we believe that light is only half of the equation. True architectural brilliance is defined by what remains unseen. We are a boutique consultancy dedicated to the art of high-end lighting design, where shadow is our primary medium.
                  </p>
                  <p>
                    Founded by visionary architects and technical luminaries, our practice bridges the gap between raw emotion and precise engineering. We curate environments for luxury residences, avant-garde galleries, and flagship commercial spaces, ensuring every beam serves a deliberate purpose.
                  </p>
                </div>
                
                <blockquote className="pl-8 border-l-[4px] border-primary relative">
                  <div className="absolute -left-2 top-0 bottom-0 w-4 bg-primary/20 blur-md -z-10 pointer-events-none"></div>
                  <p className="font-headline-lg text-headline-lg text-on-surface italic leading-snug">
                    "To reveal the architecture, you must first master the dark. Light is merely the tool we use to carve the shadow."
                  </p>
                  <footer className="mt-6 font-label-caps text-label-caps uppercase tracking-widest text-primary">
                    — The Founders
                  </footer>
                </blockquote>
              </MouseGlowContainer>
            </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </main>
  );
}
