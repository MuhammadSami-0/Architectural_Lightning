"use client";

import { motion, useScroll, useSpring } from 'framer-motion';
import { useRef } from 'react';

const steps = [
  {
    title: "The Discovery",
    desc: "An intimate consultation to understand the structural canvas, architectural constraints, and your deepest atmospheric desires.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDOYYJTdUbioluEW36ccYWHe6Ec9YpdDEnGThPzdHzATnvWxAj9k8Kl1ZMfj-xQ9F2hC4UVO-YRJfyhuA1Lw0cD8CcfJJAbbgWwfVFdF6i35-LEDPHIkaO_oFoCvta2BnY0cYkBltRCH2tVHD1g6J5tFYtY6zHeKyQCwCDvmd1DzQm7LS04I3Wyz3LkGcoaOJZ603gd97txboAtXOxFUqiEG7bQTwjUelxsf70VKGfk8oi0KEdZtSdhr3IOUZRHObAtdTcJhQkJLLc"
  },
  {
    title: "Conceptual Mapping",
    desc: "Drafting precise photometric calculations, light-scapes, and hardware specifications to ensure technical feasibility.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA92c9e-15j6knwVmZokrNnlTb7_jVDfLkJMWbf4cRgMKEUJuunZ9Fkl0EssVSSD4L9Rgnz9vioX-vIqGicoM0MOk1cvCffPXJ2SPYRRZUTUTqsIsXzf7ViiHZOuieUImnzfsJ5bWkTyImFqTM69arO-QAjdU7XNx2tS_KrJa67zziMyMihp4KmrdmTljYz0O_qN32EshWAzTklg1RkYgguFZFM-74eUy5AwfFWUR6fLQURQl6pht2KrJux97VQT3jlpmt1xAP84lM"
  },
  {
    title: "Prototyping",
    desc: "Testing bespoke fixtures and color rendering indexes (CRI) in controlled environments to guarantee absolute perfection.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA0yMynJtLRwP4CR9ECIX3LqQR1JKaKBVbT4oKLJWavUlDsL-n3sMLgKU4F1Y1xAhlam_zUbecaesDDyJY4qglX1SkARegNvZEE_ZIojkow8N5U0ohOtA5vNP_kJXHSzUidkIXaWtt6-MROM_IP69oCNbwQeX7LzzmV3r_gJ2ImcLSBjeDwTGj32tUk4Rn3N2YkBvQXhrJN8OKAOvAWgeLW-T8JjaOEtoNB7wo2Kn5fm8nJCvn5fZi_YeGDWr7UXovD7kyrEU3SHSc"
  },
  {
    title: "Precision Execution",
    desc: "Flawless on-site installation and final focusing, orchestrated by our master technicians to bring the vision to life.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCHLBoctrQP3xN3LEP7m65I77vV1KufcEdLGjfAV4RmyjCmybFhs9eUCLCu9bmJIssizkldrcgKnLUpXxw8OMFJuixyQtZAvN9sOzjWZChhWSnIlIWCCaVrE-5pSjArhJJbHJruCZ_01CTGWIIBeJGRHFeJNqMRzpCj0Sr9Kq3CtaOqvmldabbo3YbhNwhjENoqohqEdrOGJ9og7woEmZWQoYmN1C_Q6SaQFBjDOmlWCH-An8ah3GR-MloNu7NOIWptzyAko2gDYX8"
  }
];

const ProcessStep = ({ step, index }: { step: any, index: number }) => {
  const isEven = index % 2 === 0;
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`relative flex flex-col md:flex-row items-center justify-between w-full mb-32 group ${!isEven ? 'md:flex-row-reverse' : ''}`}
    >
      <div className={`w-full md:w-5/12 ${isEven ? 'md:text-right md:pr-12' : 'md:text-left md:pl-12'} mb-8 md:mb-0`}>
        <span className="text-label-caps font-label-caps text-primary-container mb-2 block">Step 0{index + 1}</span>
        <h3 className="text-headline-md font-headline-md text-on-surface mb-4">{step.title}</h3>
        <p className="text-body-md font-body-md text-on-surface-variant text-lg leading-relaxed">{step.desc}</p>
      </div>
      
      <div className="hidden md:block absolute left-1/2 -translate-x-1/2 w-6 h-6 rounded-full border-2 border-primary bg-surface-container-lowest z-10 shadow-[0_0_15px_rgba(245,158,11,0.5)]"></div>
      
      <div className={`w-full md:w-5/12 ${isEven ? 'md:pl-12' : 'md:pr-12'}`}>
        <div className="w-full h-64 bg-surface-container-low rounded-sm overflow-hidden relative group-hover:shadow-[0_0_30px_rgba(212,175,55,0.15)] transition-shadow duration-500">
          <img 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out" 
            src={step.image} 
            alt={step.title} 
          />
        </div>
      </div>
    </motion.div>
  );
};

export default function Process() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });
  
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="pb-32 px-margin-mobile md:px-margin-desktop max-w-[1440px] mx-auto w-full">
      {/* Header */}
      <header className="text-center mb-32">
        <h1 className="text-headline-xl-mobile md:text-headline-xl font-headline-xl text-on-surface mb-6">The Methodology.</h1>
        <p className="text-body-lg text-on-surface-variant max-w-2xl mx-auto text-lg">
          A rigorous sequence of creative exploration and technical precision, ensuring every lumen is placed with absolute intentionality.
        </p>
      </header>

      {/* Timeline Section */}
      <section ref={containerRef} className="relative max-w-4xl mx-auto">
        {/* Central Line Background */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-surface-container-highest -translate-x-1/2"></div>
        
        {/* Progress Line */}
        <motion.div 
          className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[2px] bg-primary -translate-x-1/2 origin-top"
          style={{ scaleY }}
        ></motion.div>

        {steps.map((step, index) => (
          <ProcessStep key={index} step={step} index={index} />
        ))}
      </section>
    </div>
  );
}
