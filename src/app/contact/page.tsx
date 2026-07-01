"use client";

import { useState, useRef, useEffect } from "react";

export default function Contact() {
  const [inquiryType, setInquiryType] = useState("Residential Project");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const options = [
    "Residential Project",
    "Commercial Space",
    "Custom Fixture Design",
    "Press / Media"
  ];

  return (
    <div className="flex-grow flex flex-col md:flex-row w-full max-w-[1440px] mx-auto min-h-[calc(100vh-100px)]">
      {/* Left Column - Contact Info */}
      <div className="w-full md:w-7/12 py-20 md:py-32 pr-0 md:pr-16 relative z-10">
          <h1 className="text-5xl md:text-7xl lg:text-[100px] font-headline-xl leading-[0.9] text-primary-container uppercase tracking-tighter mb-8 break-words max-w-[100%]">
            LET’S CREATE<br />
            SOMETHING<br />
            EXCEPTIONAL.
          </h1>
          <p className="text-body-lg md:text-xl text-on-surface-variant max-w-xl leading-relaxed mb-12">
            Whether you’re designing a luxury residence, a commercial environment, or an architectural façade, we’d be delighted to learn about your vision. Share your project with us, and we’ll create a bespoke lighting design that complements your architecture and elevates every space.
          </p>

          <div className="space-y-12">
            <div>
              <h3 className="text-primary text-sm font-label-caps tracking-widest uppercase mb-6">Begin the Conversation</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-xs font-label-caps tracking-widest uppercase text-on-surface-variant mb-1">Location</h4>
                  <p className="text-body-md text-on-surface text-lg">Global</p>
                </div>
                <div>
                  <h4 className="text-xs font-label-caps tracking-widest uppercase text-on-surface-variant mb-1">Email</h4>
                  <a href="mailto:affannadeem@luxurylightingstudio.com" className="text-body-md text-on-surface hover:text-primary transition-colors text-lg block mb-2">
                    affannadeem@luxurylightingstudio.com
                  </a>
                </div>
                <div>
                  <h4 className="text-xs font-label-caps tracking-widest uppercase text-on-surface-variant mb-1">Number</h4>
                  <a href="tel:03342342188" className="text-body-md text-on-surface hover:text-primary transition-colors text-lg block">
                    03342342188
                  </a>
                </div>
              </div>
            </div>
          </div>
      </div>

      {/* Right Column - Form */}
      <div className="w-full md:w-7/12 px-margin-mobile md:px-margin-desktop py-20 md:py-24 bg-background flex flex-col justify-center">
        <form className="max-w-2xl w-full mx-auto space-y-10" onSubmit={(e) => e.preventDefault()}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="flex flex-col relative group">
              <label htmlFor="name" className="text-label-caps font-label-caps text-on-surface-variant uppercase tracking-widest mb-3">Full Name</label>
              <input 
                type="text" 
                id="name" 
                className="bg-transparent border-b border-surface-container-highest text-on-surface text-lg py-3 focus:outline-none focus:border-primary transition-colors rounded-none"
                placeholder="John Doe"
              />
              <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-primary transition-all duration-300 group-focus-within:w-full"></div>
            </div>
            <div className="flex flex-col relative group">
              <label htmlFor="email" className="text-label-caps font-label-caps text-on-surface-variant uppercase tracking-widest mb-3">Email Address</label>
              <input 
                type="email" 
                id="email" 
                className="bg-transparent border-b border-surface-container-highest text-on-surface text-lg py-3 focus:outline-none focus:border-primary transition-colors rounded-none"
                placeholder="john@example.com"
              />
              <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-primary transition-all duration-300 group-focus-within:w-full"></div>
            </div>
          </div>

          <div className="flex flex-col relative group z-20" ref={dropdownRef}>
              <label htmlFor="project" className="block text-xs font-label-caps tracking-widest uppercase text-on-surface-variant mb-3">
                Project Type
              </label>
              <div className="relative">
                <select 
                  id="project" 
                  className="w-full bg-transparent border-b border-white/20 pb-4 text-on-surface font-body-md text-lg focus:outline-none focus:border-primary transition-colors appearance-none cursor-pointer rounded-none"
                  required
                >
                  <option value="" disabled selected className="bg-[#1a1a1a]">Select</option>
                  <option value="residential" className="bg-[#1a1a1a]">Luxury Residence</option>
                  <option value="commercial" className="bg-[#1a1a1a]">Commercial Environment</option>
                  <option value="facade" className="bg-[#1a1a1a]">Architectural Façade</option>
                </select>
                <span className="absolute right-0 top-1/2 -translate-y-1/2 text-primary pointer-events-none material-symbols-outlined text-sm">
                  expand_more
                </span>
              </div>
            </div>

            <div>
              <label htmlFor="details" className="block text-xs font-label-caps tracking-widest uppercase text-on-surface-variant mb-3">
                Your Vision
              </label>
              <textarea 
                id="details" 
                rows={4}
                className="w-full bg-transparent border-b border-white/20 pb-4 text-on-surface font-body-md text-lg focus:outline-none focus:border-primary transition-colors placeholder:text-white/20 resize-none rounded-none"
                placeholder="Tell us about your project, architectural style, timeline, or any specific lighting requirements."
                required
              ></textarea>
            </div>

          <button 
            type="submit"
            className="w-full btn-primary mt-4"
          >
            Request a Consultation
          </button>
        </form>
      </div>
    </div>
  );
}
