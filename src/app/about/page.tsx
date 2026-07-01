"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import MouseGlowContainer from '@/components/MouseGlowContainer';

export default function About() {
  return (
    <main className="min-h-screen relative overflow-hidden pt-32 pb-24">
      <div className="max-w-[1400px] mx-auto px-8 relative z-10 group">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="mb-12"
        >
          <h3 className="text-primary text-sm font-label-caps tracking-widest uppercase mb-4">OUR STUDIO</h3>
          <h1 className="text-5xl md:text-7xl font-headline-xl text-primary-container tracking-tight uppercase mb-8">
            Where Engineering <br className="hidden md:block" /> Meets Light.
          </h1>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-stretch">
          
          {/* Left: Image Pane */}
          <div className="lg:col-span-5 relative w-full h-full min-h-[500px] rounded-[2rem] overflow-hidden shadow-2xl">
            <Image 
              src="/images/founder.jpg" 
              alt="Muhammad Affan Nadeem"
              fill
              className="object-cover object-top filter contrast-110"
            />
          </div>

          {/* Right: Content Canvas */}
          <div className="lg:col-span-7 w-full h-full">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
              className="h-full"
            >
              <MouseGlowContainer className="p-8 md:p-16 h-full flex flex-col justify-center">
                <div className="space-y-8 text-on-surface-variant font-body-lg text-lg leading-relaxed mb-16">
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
                
                <div className="border-t border-white/10 pt-12">
                  <h3 className="text-primary text-sm font-label-caps tracking-widest uppercase mb-2">Meet Our Founder</h3>
                  <h2 className="text-3xl md:text-4xl font-headline-md text-on-surface mb-4">Muhammad Affan Nadeem</h2>
                  <p className="text-primary-container text-sm font-label-md tracking-wider uppercase mb-8">Electrical Engineer | Lighting Design Specialist</p>
                  
                  <blockquote className="pl-6 border-l-[3px] border-primary relative">
                    <div className="absolute -left-2 top-0 bottom-0 w-4 bg-primary/20 blur-md -z-10 pointer-events-none"></div>
                    <p className="text-xl md:text-2xl font-serif italic text-on-surface leading-snug">
                      “The finest lighting doesn’t ask to be noticed. It quietly reveals the beauty that was always there.”
                    </p>
                  </blockquote>
                </div>
              </MouseGlowContainer>
            </motion.div>
          </div>
        </div>
      </div>
    </main>
  );
}
