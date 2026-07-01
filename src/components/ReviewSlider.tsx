"use client";

import { motion } from "framer-motion";

const reviews = [
  { text: "The lighting completely transformed our villa. Every fixture feels like a piece of art, and the team’s recommendations were spot on.", author: "Sarah M.", role: "Luxury Villa Owner" },
  { text: "Unparalleled attention to detail. They didn't just light our space, they gave it a soul and completely redefined our hotel's ambiance.", author: "James R.", role: "Boutique Hotel Owner" },
  { text: "A truly collaborative and visionary team. The final result exceeded all our expectations, blending seamlessly with our architectural design.", author: "Elena V.", role: "Lead Architect" },
  { text: "Their ability to balance functional illumination with dramatic shadows is masterful. Our flagship store has never looked better.", author: "Michael T.", role: "Retail Director" }
];

export default function ReviewSlider() {
  return (
    <section className="py-32 bg-transparent relative z-10 overflow-hidden">
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
          will-change: transform;
          display: flex;
          width: max-content;
        }
      `}} />
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="max-w-[1440px] mx-auto px-margin-mobile md:px-margin-desktop mb-16 text-center">
          <span className="inline-block px-3 py-1 border border-outline-variant text-primary font-label-caps text-label-caps uppercase tracking-widest rounded-sm mb-6">
            Testimonials
          </span>
          <h2 className="font-headline-lg text-headline-lg text-on-background mb-4">What Our Clients Say</h2>
          <p className="text-body-lg text-on-surface-variant max-w-2xl mx-auto text-lg">
            Hear from homeowners, interior designers, architects, and contractors who trusted us to illuminate their spaces.
          </p>
        </div>

        {/* Infinite Slider */}
        <div className="relative w-full overflow-hidden py-8 hover:[&>div]:[animation-play-state:paused]">
          
          <div className="animate-marquee">
            {[...reviews, ...reviews].map((review, i) => (
              <div key={i} className="pr-6 md:pr-8 shrink-0">
                <div 
                  className="w-[85vw] md:w-[450px] bg-[#161616] rounded-[2rem] border border-white/5 p-10 flex flex-col justify-between hover:bg-[#1a1a1a] transition-colors duration-300 h-full"
                >
                  <div>
                    <div className="flex gap-1 text-primary-container mb-8">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="material-symbols-outlined text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                      ))}
                    </div>
                    <p className="text-lg md:text-xl font-body-md text-on-surface leading-relaxed mb-12">
                      "{review.text}"
                    </p>
                  </div>
                  <div className="border-t border-white/10 pt-6">
                    <p className="font-headline-md text-on-background text-lg">{review.author}</p>
                    <p className="text-primary-container/80 font-label-caps uppercase tracking-widest text-sm mt-2">{review.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
        </div>
      </motion.div>
    </section>
  );
}
