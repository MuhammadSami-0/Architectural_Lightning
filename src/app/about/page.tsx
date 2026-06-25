"use client";

import { motion } from 'framer-motion';

export default function About() {
  return (
    <main className="min-h-[calc(100vh-200px)] w-full flex flex-col md:flex-row">
      {/* Left: Image Pane */}
      <div className="relative w-full md:w-5/12 h-[614px] md:h-auto md:sticky md:top-0">
        <div className="absolute inset-0 bg-black/20 z-10"></div>
        <img 
          className="w-full h-full object-cover object-center grayscale-[0.2] contrast-125" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAYGa4jwbSNXgdapilHbikh6eMDXYrkKHcCoxeRfV9mdAYUwLYW7qM-OnV4t-6T95zGcc2K3y-D3X6KXwc0Qp7eTKdAHlpWTOXYQ-orVdWNDRlVZfpN1F1KOvVmX8vY8zFCOecXTRPNEIlj_16vXIMUsYWpuGduJdV_cGKEHVh_A-iV3jea1qBTxMQ1do51nnpyUYzOwMo4Pl7F8CGcGKeBvLBakhQiLFzS-8u_D0LAbS0ZQoe9q37Wz7dLdGMxQoK_0-wBJvoQP0w" 
          alt="About Lumen & Shadow"
        />
      </div>

      {/* Right: Content Canvas */}
      <div className="w-full md:w-7/12 bg-surface-container-lowest flex items-center pt-32 pb-24 px-margin-mobile md:px-margin-desktop lg:px-24">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="max-w-2xl"
        >
          <h1 className="font-headline-xl-mobile md:font-headline-xl text-on-surface mb-8">
            Sculpting Space <br /> Through Absence.
          </h1>
          
          <div className="space-y-6 font-body-lg text-body-lg text-on-surface-variant mb-16 text-lg">
            <p>
              At Lumen & Shadow, we believe that light is only half of the equation. True architectural brilliance is defined by what remains unseen. We are a boutique consultancy dedicated to the art of high-end lighting design, where shadow is our primary medium.
            </p>
            <p>
              Founded by visionary architects and technical luminaries, our practice bridges the gap between raw emotion and precise engineering. We curate environments for luxury residences, avant-garde galleries, and flagship commercial spaces, ensuring every beam serves a deliberate purpose.
            </p>
          </div>
          
          <blockquote className="pl-8 border-l-[4px] border-primary-container relative">
            <div className="absolute -left-2 top-0 bottom-0 w-4 bg-primary/20 blur-md -z-10"></div>
            <p className="font-headline-lg text-headline-lg text-on-surface italic leading-snug">
              "To reveal the architecture, you must first master the dark. Light is merely the tool we use to carve the shadow."
            </p>
            <footer className="mt-6 font-label-caps text-label-caps uppercase tracking-widest text-primary">
              — The Founders
            </footer>
          </blockquote>
        </motion.div>
      </div>
    </main>
  );
}
