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
      <div className="w-full md:w-5/12 px-margin-mobile md:px-margin-desktop py-20 md:py-24 bg-zinc-900/40 backdrop-blur-2xl border-r border-white/10 shadow-[inset_-1px_0_0_rgba(255,255,255,0.1),20px_0_40px_-15px_rgba(0,0,0,0.5)] transition-all duration-500 ease-out hover:bg-zinc-900/50 flex flex-col justify-between">
        <div>
          <h1 className="text-headline-xl-mobile md:text-headline-xl font-headline-xl text-on-surface mb-8 leading-tight">
            Begin the <br /> Dialogue.
          </h1>
          <p className="text-body-lg text-on-surface-variant max-w-sm mb-16 text-lg">
            Whether you are conceptualizing a new architectural space or refining an existing one, we invite you to connect with our studio.
          </p>

          <div className="space-y-12">
            <div>
              <span className="text-label-caps font-label-caps text-primary uppercase tracking-widest block mb-4">Studio</span>
              <address className="not-italic text-body-md text-on-surface-variant text-lg leading-relaxed">
                1200 Obsidian Way<br />
                Suite 404<br />
                London, UK W1B 3AG
              </address>
            </div>
            
            <div>
              <span className="text-label-caps font-label-caps text-primary uppercase tracking-widest block mb-4">Inquiries</span>
              <a href="mailto:consult@lumenandshadow.com" className="text-body-md text-on-surface hover:text-primary transition-colors text-lg block mb-2">
                consult@lumenandshadow.com
              </a>
              <a href="tel:+442071234567" className="text-body-md text-on-surface hover:text-primary transition-colors text-lg block">
                +44 207 123 4567
              </a>
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
            <label className="text-label-caps font-label-caps text-on-surface-variant uppercase tracking-widest mb-3">Inquiry Type</label>
            <div 
              className="bg-transparent border-b border-surface-container-highest text-on-surface text-lg py-3 flex justify-between items-center cursor-pointer select-none"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              <span>{inquiryType}</span>
              <div className={`material-symbols-outlined text-on-surface-variant transition-transform duration-300 ${dropdownOpen ? 'rotate-180' : ''}`}>expand_more</div>
            </div>
            <div className={`absolute bottom-0 left-0 h-[2px] bg-primary transition-all duration-300 ${dropdownOpen ? 'w-full' : 'w-0'}`}></div>
            
            {/* Custom Dropdown Menu */}
            <div 
              className={`absolute top-full left-0 w-full mt-2 bg-zinc-900 border border-white/10 shadow-2xl overflow-hidden transition-all duration-300 transform origin-top ${dropdownOpen ? 'opacity-100 scale-y-100 pointer-events-auto' : 'opacity-0 scale-y-95 pointer-events-none'}`}
            >
              {options.map((opt) => (
                <div 
                  key={opt}
                  className="px-6 py-4 text-on-surface hover:bg-primary/20 hover:text-primary cursor-pointer transition-colors"
                  onClick={() => {
                    setInquiryType(opt);
                    setDropdownOpen(false);
                  }}
                >
                  {opt}
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col relative group">
            <label htmlFor="message" className="text-label-caps font-label-caps text-on-surface-variant uppercase tracking-widest mb-3">Project Details</label>
            <textarea 
              id="message" 
              rows={4}
              className="bg-transparent border-b border-surface-container-highest text-on-surface text-lg py-3 focus:outline-none focus:border-primary transition-colors rounded-none resize-none"
              placeholder="Tell us about your vision, architectural scale, and timeline..."
            ></textarea>
            <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-primary transition-all duration-300 group-focus-within:w-full"></div>
          </div>

          <button 
            type="submit" 
            className="mt-8 bg-primary-container text-[#050505] px-12 py-5 font-label-caps text-label-caps uppercase tracking-widest hover:shadow-[0_0_40px_rgba(212,175,55,0.2)] hover:brightness-110 transition-all duration-500 rounded-sm w-full md:w-auto self-start"
          >
            Submit Inquiry
          </button>
        </form>
      </div>
    </div>
  );
}
