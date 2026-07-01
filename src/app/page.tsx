import Background3D from '@/components/Background3D';
import Link from 'next/link';
import MouseGlowContainer from '@/components/MouseGlowContainer';
import StatisticsCounter from '@/components/StatisticsCounter';
import ReviewSlider from '@/components/ReviewSlider';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <header className="relative w-full min-h-[100svh] md:h-[100svh] flex flex-col md:flex-row items-end md:items-center justify-start overflow-visible md:overflow-hidden -mt-24 md:-mt-32 pb-12 md:pb-0">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-r from-background/70 via-background/40 to-transparent z-0 md:w-2/3"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-background/40 md:via-transparent to-background/20 z-0"></div>
          {/* Render Background3D after overlays to make it pop and remove dullness */}
          <div 
            className="absolute top-0 left-0 right-0 h-[100svh] z-10"
            style={{ 
              maskImage: 'linear-gradient(to bottom, black 70%, transparent 100%)', 
              WebkitMaskImage: 'linear-gradient(to bottom, black 70%, transparent 100%)' 
            }}
          >
            <Background3D />
          </div>
        </div>

        <div className="relative z-20 text-left px-margin-mobile md:px-margin-desktop max-w-[1440px] mx-auto flex flex-col items-start justify-center pointer-events-none w-full pt-[95svh] md:pt-0 mt-auto md:mt-0">
          <h1 className="font-headline-xl-mobile md:font-headline-xl text-on-background mb-6 max-w-4xl hero-glow text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter">
            Experience <br className="hidden md:block" />
            <span className="text-primary-container drop-shadow-[0_0_20px_rgba(251,191,36,0.5)]">Light</span><br className="hidden md:block" />
            With Purpose.
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mb-12 opacity-80 text-lg md:text-xl">
            Luxury lighting design that brings architecture to life through beauty, balance, and intention.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 pointer-events-auto">
            <Link href="/portfolio" className="px-8 py-4 bg-primary-container text-black font-label-caps text-label-caps uppercase tracking-widest hover:shadow-[0_0_30px_rgba(251,191,36,0.4)] transition-all duration-300 rounded-sm text-center">
              View Portfolio
            </Link>
            <Link href="/process" className="px-8 py-4 border border-primary-container text-primary-container font-label-caps text-label-caps uppercase tracking-widest hover:bg-primary-container/10 hover:shadow-[0_0_20px_rgba(251,191,36,0.2)] transition-all duration-300 rounded-sm text-center">
              Our Process
            </Link>
          </div>
        </div>
      </header>

      {/* Intro Section */}
      <section className="py-20 md:py-24 px-margin-mobile md:px-margin-desktop bg-transparent relative z-10">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-gutter items-center group">
          <MouseGlowContainer className="md:col-span-5 md:col-start-2 mb-12 md:mb-0 p-6 md:p-12">
            <span className="inline-block px-3 py-1 border border-outline-variant text-primary font-label-caps text-label-caps uppercase tracking-widest rounded-sm mb-6 md:mb-8">
              Our Philosophy
            </span>
            <h2 className="text-3xl md:text-headline-lg font-headline-lg text-on-background mb-6 md:mb-8 leading-tight uppercase">
              LIGHT ISN’T JUST SEEN. <br /> IT’S FELT.
            </h2>
            <p className="text-base md:text-body-lg font-body-lg text-on-surface-variant leading-relaxed opacity-80 mb-6">
              At Luxury Lighting Studio, we believe exceptional lighting transforms the way a space is experienced. Thoughtfully designed architectural lighting enhances beauty, creates atmosphere, and reveals the finest details of every interior and exterior.
            </p>
            <p className="text-base md:text-body-lg font-body-lg text-on-surface-variant leading-relaxed opacity-80">
              Every project is crafted with purpose, balancing light and shadow to create spaces that feel timeless, elegant, and effortlessly refined.
            </p>
          </MouseGlowContainer>
          <div className="md:col-span-4 md:col-start-8 relative">
            <div tabIndex={0} className="aspect-[3/4] rounded-[2rem] overflow-hidden relative group cursor-pointer ambient-glow outline-none">
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105 group-focus:scale-105 filter grayscale-0 md:grayscale group-hover:grayscale-0 group-focus:grayscale-0" 
                style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBN4_g8GYq7tTLLEAElcSIfW8YsSxDb1khUn4FEjX4-XDIAKYNAUfmap253AkEqXtITsGo1Yrya-LFvdJAyCgmKy3XG4uiOU7CfpBMPBytEd7aI5IIVoRnotWuKmMVshOX8m6mxFH__2cU5tDXZvyS9BL2XDDOGnhUVQ8iwkzV0N9ndZNuqC2DyyIMFJjFoYhAXcKIihMLkPlvwzV_6zj_NxybKm08D-Yd8Lk_66_0jccKw4LGRcYFeIurqyIb9siiUMl9B_WWVAm4')" }}
              ></div>
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors duration-500"></div>
            </div>
            <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-primary-container/5 blur-[80px] rounded-full pointer-events-none"></div>
          </div>
        </div>
      </section>



      <StatisticsCounter />
      
      <ReviewSlider />

      {/* CTA Section */}
      <section className="py-20 md:py-24 px-margin-mobile md:px-margin-desktop bg-surface/30 relative z-10 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-headline-lg text-headline-lg text-on-background mb-6">Ready to Transform Your Space?</h2>
          <p className="text-body-lg text-on-surface-variant max-w-2xl mx-auto text-lg mb-12">
            Whether you’re designing a new space or renovating an existing one, we’ll help you design lighting that perfectly complements your vision.
          </p>
          <Link href="/contact" className="inline-block px-12 py-5 bg-primary-container text-black font-label-caps text-label-caps uppercase tracking-widest hover:shadow-[0_0_30px_rgba(251,191,36,0.4)] hover:brightness-110 transition-all duration-300 rounded-sm">
            Book a Free Consultation
          </Link>
        </div>
      </section>
    </>
  );
}
