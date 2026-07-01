"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
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
          <div className="relative w-full h-full min-h-[500px] rounded-[2rem] overflow-hidden shadow-2xl cursor-pointer group">
            <div className={`absolute inset-0 z-10 pointer-events-none transition-colors duration-700 ${isTextHovered ? 'bg-transparent' : 'bg-black/20'}`}></div>
            <img 
              className={`w-full h-full object-cover object-center filter transition-all duration-700 contrast-125 group-active:scale-105 group-active:grayscale-0 ${isTextHovered ? 'grayscale-0 scale-105' : 'grayscale-0 md:grayscale scale-100'}`} 
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
                <MouseGlowContainer className="p-6 md:p-12 h-full flex flex-col justify-center">
                  <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="text-4xl md:text-5xl font-headline-md text-primary-container tracking-wide uppercase mb-12">Where Engineering Meets Light.</h2>
          <div className="text-xl text-on-surface-variant leading-relaxed font-body-lg space-y-6">
            <p>
              At Luxury Lighting Studio, we believe exceptional lighting is never an afterthought—it is an essential element of exceptional architecture. Every project begins with a thoughtful understanding of the space, allowing us to create lighting that enhances its character, celebrates its materials, and transforms the way it is experienced.
            </p>
            <p>
              Founded by Muhammad Affan Nadeem, an Electrical Engineer, Luxury Lighting Studio brings together technical expertise and refined design. Every lighting scheme is carefully tailored to complement the architecture while balancing aesthetics, performance, and functionality.
            </p>
            <p>
              From luxury residences and private villas to commercial developments, we deliver bespoke architectural lighting solutions that combine precision, craftsmanship, and timeless elegance.
            </p>
          </div>
        </div>

        <div className="mt-32 max-w-5xl mx-auto bg-zinc-900/40 backdrop-blur-2xl rounded-[2rem] border border-white/10 p-8 md:p-16 flex flex-col md:flex-row gap-12 items-center luxury-card-hover">
          <div className="w-full md:w-1/3 aspect-[3/4] relative rounded-2xl overflow-hidden border border-white/20 shadow-[0_0_30px_rgba(212,175,55,0.1)]">
            <Image 
              src="/images/founder.jpg" 
              alt="Muhammad Affan Nadeem" 
              fill 
              className="object-cover object-top"
            />
          </div>
          <div className="w-full md:w-2/3 space-y-6">
            <h3 className="text-primary text-sm font-label-caps tracking-widest uppercase">Meet Our Founder</h3>
            <h2 className="text-4xl font-headline-md text-on-surface">Muhammad Affan Nadeem</h2>
            <p className="text-primary-container text-lg font-label-md tracking-wider uppercase">Electrical Engineer | Lighting Design Specialist</p>
            <div className="w-12 h-1 bg-primary/30 rounded-full my-6"></div>
            <p className="text-2xl text-on-surface-variant italic font-serif leading-relaxed">
              “The finest lighting doesn’t ask to be noticed. It quietly reveals the beauty that was always there.”
            </p>
          </div>
        </div>
            </MouseGlowContainer>
            </div>
            </motion.div>
          </div>
        </div>
      </div>
    </main>
  );
}
