"use client";

import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import MouseGlowContainer from "@/components/MouseGlowContainer";

export default function ExpertisePage() {
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

  const expertiseAreas = [
    {
      title: "Luxury Residences",
      category: "RESIDENTIAL",
      description: "A remarkable home deserves lighting that is as considered as its architecture. We design bespoke residential lighting that enhances every room, celebrates every material, and creates an atmosphere that feels warm, elegant, and inviting.\n\nEvery lighting scheme is carefully tailored to complement your lifestyle while bringing harmony to both interior and exterior spaces.",
      points: [
        "Architectural Lighting Design",
        "Interior & Exterior Lighting",
        "Landscape & Garden Lighting",
        "Smart Lighting & Control Systems",
        "Lighting Consultancy & Specifications"
      ],
      image: "/images/residential.png"
    },
    {
      title: "Commercial Environments",
      category: "COMMERCIAL",
      description: "Exceptional lighting shapes how people experience a space. Whether it’s a boutique retail destination, hospitality venue, corporate office, or mixed-use development, we create lighting that strengthens identity, enhances functionality, and leaves a lasting impression.\n\nOur commercial lighting solutions are designed to balance aesthetics, performance, and efficiency without compromising architectural integrity.",
      points: [
        "Office & Workplace Lighting",
        "Retail & Showroom Lighting",
        "Hospitality & Restaurant Lighting",
        "Commercial Developments",
        "Lighting Control & Automation"
      ],
      image: "/images/commercial.png"
    },
    {
      title: "Architectural Façades",
      category: "FAÇADE",
      description: "Architecture deserves to be admired long after sunset. Our façade lighting designs reveal the character, texture, and craftsmanship of every building, creating elegant night-time identities that remain true to the original design.\n\nThrough carefully positioned illumination, we create façades that are visually striking, energy efficient, and timeless.",
      points: [
        "Architectural Façade Lighting",
        "Feature & Landmark Lighting",
        "Dynamic Lighting Systems",
        "Landscape Integration",
        "Energy-Efficient Lighting Solutions"
      ],
      image: "/images/facade.png"
    }
  ];

  return (
    <main className="min-h-screen pt-32 pb-24">
      {/* Header */}
      <div className="max-w-[1440px] mx-auto px-margin-mobile md:px-margin-desktop mb-24 reveal-base">
        <h3 className="text-primary text-sm font-label-caps tracking-widest uppercase mb-4">OUR EXPERTISE</h3>
        <h1 className="text-5xl md:text-7xl font-headline-xl text-primary-container tracking-tight uppercase mb-8">
          Architectural<br/>Lighting, Perfected.
        </h1>
        <p className="text-body-lg md:text-xl text-on-surface-variant max-w-3xl leading-relaxed">
          From luxury residences and commercial environments to iconic façades, our lighting solutions combine creative vision with engineering precision—delivering beauty, performance, and lasting impact.
        </p>
      </div>

      {/* Expertise Areas */}
      <div className="max-w-[1440px] mx-auto px-margin-mobile md:px-margin-desktop space-y-32">
        {expertiseAreas.map((area, index) => (
          <div key={index} className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 lg:gap-24 items-center reveal-base`}>
            
            {/* Image Column */}
            <div className="w-full md:w-1/2">
              <MouseGlowContainer className="w-full aspect-[4/3] outline-none group cursor-pointer block">
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 ease-in-out group-hover:scale-105 group-focus:scale-105" 
                  style={{ backgroundImage: `url('${area.image}')` }}
                  aria-hidden="true"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors duration-500"></div>
              </MouseGlowContainer>
            </div>

            {/* Content Column */}
            <div className="w-full md:w-1/2 space-y-8">
              <div>
                <span className="text-primary font-label-caps text-xs tracking-[0.2em] uppercase">{area.category}</span>
                <h2 className="text-4xl md:text-5xl font-headline-md text-on-surface mt-3 mb-6">{area.title}</h2>
                <div className="space-y-4">
                  {area.description.split('\n\n').map((paragraph, i) => (
                    <p key={i} className="text-on-surface-variant font-body-md text-lg leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
              
              <div className="pt-6 border-t border-white/10">
                <h4 className="text-primary-container font-label-caps text-sm tracking-widest uppercase mb-4">Our Expertise</h4>
                <ul className="space-y-3">
                  {area.points.map((point, i) => (
                    <li key={i} className="flex items-start text-on-surface-variant font-body-md">
                      <span className="text-primary mr-3 mt-1 text-sm">•</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>
        ))}
      </div>

      {/* CTA Section - Expertise Design */}
      <div className="max-w-[1440px] mx-auto px-margin-mobile md:px-margin-desktop mt-40 reveal-base">
        <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-zinc-900/80 to-zinc-950 border border-white/5 p-12 md:p-20 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Subtle glow effect in the background */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 blur-[100px] rounded-full pointer-events-none"></div>
          
          <div className="w-full md:w-2/3 relative z-10">
            <div className="w-12 h-1 bg-primary/40 mb-8 rounded-full"></div>
            <h2 className="text-4xl md:text-5xl font-headline-md text-on-surface mb-6">Designed Around Your Vision.</h2>
            <p className="text-xl text-on-surface-variant mb-8 max-w-2xl leading-relaxed">
              Every project begins with understanding your architecture, your aspirations, and the experience you want to create. Whether you’re designing a luxury residence, a commercial destination, or a landmark façade, we create lighting that is tailored exclusively to your space.
            </p>
            <p className="text-2xl font-serif italic text-primary-container">
              Let’s create something extraordinary.
            </p>
          </div>
          
          <div className="w-full md:w-1/3 flex justify-start md:justify-end relative z-10">
            <Link href="/contact" className="btn-primary whitespace-nowrap px-10 py-5 text-lg">
              Book a Consultation
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
