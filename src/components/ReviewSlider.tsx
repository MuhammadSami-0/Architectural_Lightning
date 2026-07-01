"use client";

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
          0% { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(-50%, 0, 0); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
          will-change: transform;
        }
      `}} />
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
      <div className="relative w-full overflow-hidden flex">
        <div className="flex gap-6 md:gap-8 px-4 md:px-0 w-max animate-marquee hover:[animation-play-state:paused]">
          {/* Double the array for seamless infinite looping */}
          {[...reviews, ...reviews].map((review, i) => (
            <div 
              key={i} 
              className="w-[85vw] md:w-[450px] flex-shrink-0 bg-surface/80 rounded-[2rem] border border-white/5 p-10 flex flex-col justify-between hover:bg-surface transition-colors duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
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
          ))}
        </div>
      </div>
    </section>
  );
}
