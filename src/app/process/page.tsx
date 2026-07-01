"use client";

import { useEffect } from "react";
import Link from "next/link";
import MouseGlowContainer from "@/components/MouseGlowContainer";

export default function ProcessPage() {
  useEffect(() => {
    const reveals = document.querySelectorAll('.reveal-base');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px"
    });

    reveals.forEach(reveal => observer.observe(reveal));
    return () => observer.disconnect();
  }, []);

  const steps = [
    {
      number: "01",
      title: "Discover",
      description: "Every project begins with listening. We take the time to understand your architecture, lifestyle, vision, and the atmosphere you want to create.",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80"
    },
    {
      number: "02",
      title: "Design",
      description: "We transform ideas into bespoke architectural lighting concepts, carefully balancing beauty, function, and the unique character of every space.",
      image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80"
    },
    {
      number: "03",
      title: "Specify",
      description: "Every lighting scheme is supported by detailed layouts, fixture schedules, technical drawings, and carefully selected product recommendations, giving your project complete clarity before implementation.",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80"
    },
    {
      number: "04",
      title: "Collaborate",
      description: "We work closely with your architect, contractor, electrician, or installer throughout the project, providing technical guidance and design support to ensure the lighting is delivered exactly as intended.",
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80"
    }
  ];

  return (
    <main className="min-h-screen pt-32 pb-24">
      {/* Header */}
      <div className="max-w-[1440px] mx-auto px-margin-mobile md:px-margin-desktop mb-24 reveal-base text-center">
        <h3 className="text-primary text-sm font-label-caps tracking-widest uppercase mb-4">OUR PROCESS</h3>
        <h1 className="text-5xl md:text-7xl font-headline-xl text-primary-container tracking-tight uppercase mb-8">
          From Vision<br/>to Illumination.
        </h1>
        <p className="text-body-lg md:text-xl text-on-surface-variant max-w-3xl leading-relaxed mx-auto">
          Every exceptional lighting design begins with understanding. Our process combines creative thinking with engineering precision, ensuring every detail is thoughtfully considered before a single fixture is specified.
        </p>
      </div>

      {/* Timeline */}
      <div className="max-w-5xl mx-auto px-margin-mobile md:px-margin-desktop relative mt-32">
        {/* Central Line */}
        <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[2px] bg-primary/20 -translate-x-1/2"></div>
        
        {steps.map((step, index) => {
          const isEven = index % 2 === 0;
          return (
            <div key={index} className={`relative flex flex-col md:flex-row items-center mb-32 ${isEven ? 'md:flex-row-reverse' : ''} reveal-base`}>
              
              {/* Timeline Node */}
              <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-6 h-6 rounded-full border-2 border-primary bg-surface-container-lowest z-10 shadow-[0_0_15px_rgba(245,158,11,0.5)]"></div>
              
              {/* Image Side */}
              <div className={`w-full md:w-5/12 pl-16 md:pl-0 ${isEven ? 'md:pr-12' : 'md:pl-12'} mb-8 md:mb-0`}>
                <MouseGlowContainer className="w-full h-64 outline-none overflow-hidden block">
                  <div 
                    className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-700 ease-in-out filter grayscale-0 md:grayscale group-hover:grayscale-0" 
                    style={{ backgroundImage: `url('${step.image}')` }}
                    aria-hidden="true"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors duration-500"></div>
                </MouseGlowContainer>
              </div>

              {/* Spacer for center line */}
              <div className="hidden md:block w-2/12"></div>

              {/* Content Side */}
              <div className={`w-full md:w-5/12 pl-16 md:pl-0 ${isEven ? 'md:pl-12 md:text-left' : 'md:pr-12 md:text-right'}`}>
                <div className="text-primary font-headline-md text-6xl opacity-20 absolute -z-10 -top-8 -left-4 md:-left-8">{step.number}</div>
                <h3 className="text-primary text-sm font-label-caps tracking-widest uppercase mb-2">Step {step.number}</h3>
                <h2 className="text-3xl font-headline-md text-on-surface mb-4">{step.title}</h2>
                <p className="text-on-surface-variant font-body-md text-lg leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* The Result Section */}
      <div className="max-w-4xl mx-auto px-margin-mobile md:px-margin-desktop mt-40 text-center reveal-base">
        <h2 className="text-3xl md:text-5xl font-headline-md text-primary-container mb-12">The Result</h2>
        <div className="text-xl md:text-3xl text-on-surface-variant font-serif italic space-y-6">
          <p>Lighting that feels effortless.</p>
          <p>Architecture that speaks for itself.</p>
          <p>Spaces designed to be experienced.</p>
        </div>
      </div>

      {/* Final CTA */}
      <div className="max-w-[1440px] mx-auto px-margin-mobile md:px-margin-desktop mt-32 text-center reveal-base">
        <div className="max-w-3xl mx-auto py-24 bg-zinc-900/40 backdrop-blur-sm border-t border-b border-primary/20">
          <h2 className="text-4xl md:text-5xl font-headline-md text-primary-container mb-6">Let’s Bring Your Vision to Light.</h2>
          <p className="text-xl text-on-surface-variant mb-12">
            Whether you’re designing a luxury residence, a commercial environment, or an architectural façade, we’re here to create lighting that’s tailored to your space and crafted to last.
          </p>
          <Link href="/contact" className="btn-primary">
            Book a Consultation
          </Link>
        </div>
      </div>
    </main>
  );
}
