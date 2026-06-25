import Background3D from '@/components/Background3D';
import Link from 'next/link';
import MouseGlowContainer from '@/components/MouseGlowContainer';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <header className="relative w-full h-screen min-h-[800px] flex items-center justify-start overflow-hidden -mt-24 md:-mt-32">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent z-10 md:w-2/3"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50 z-10"></div>
        </div>
        
        {/* Render Background3D after overlays to make it pop and remove dullness */}
        <Background3D />

        <div className="relative z-20 text-left px-margin-mobile md:px-margin-desktop max-w-[1440px] mx-auto flex flex-col items-start justify-center mt-20 pointer-events-none w-full">
          <h1 className="font-headline-xl-mobile md:font-headline-xl text-on-background mb-6 max-w-4xl hero-glow text-4xl md:text-8xl font-bold tracking-tighter">
            Designing the absence of <br className="hidden md:block" />
            <span className="text-primary-container drop-shadow-[0_0_20px_rgba(251,191,36,0.5)]">Light</span>
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mb-12 opacity-80 text-lg md:text-xl">
            We craft immersive architectural experiences through the intentional interplay of illumination and shadow. Elevating spaces beyond the visible.
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
      <section className="py-32 px-margin-mobile md:px-margin-desktop bg-transparent relative z-10">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-gutter items-center group">
          <MouseGlowContainer className="md:col-span-5 md:col-start-2 mb-12 md:mb-0 p-6 md:p-12">
            <span className="inline-block px-3 py-1 border border-outline-variant text-primary font-label-caps text-label-caps uppercase tracking-widest rounded-sm mb-6 md:mb-8">
              Our Philosophy
            </span>
            <h2 className="text-3xl md:text-headline-lg font-headline-lg text-on-background mb-6 md:mb-8 leading-tight">
              Light is not merely seen. <br /> It is felt.
            </h2>
            <p className="text-base md:text-body-lg font-body-lg text-on-surface-variant leading-relaxed opacity-80">
              At Lumen & Shadow, we approach lighting design as a sculptural medium. We don't just illuminate spaces; we curate atmosphere, direct focus, and establish emotional resonance. Our methodology embraces darkness as the canvas, allowing strategic light to reveal texture, form, and narrative.
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

      {/* Featured Work Gallery */}
      <section className="py-32 px-margin-mobile md:px-margin-desktop bg-surface relative z-10">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div>
              <span className="inline-block px-3 py-1 border border-outline-variant text-primary font-label-caps text-label-caps uppercase tracking-widest rounded-sm mb-6">
                Featured Projects
              </span>
              <h2 className="font-headline-lg text-headline-lg text-on-background">Curated Illumination</h2>
            </div>
            <Link href="/portfolio" className="hidden md:flex items-center gap-2 text-primary font-label-caps text-label-caps uppercase tracking-widest hover:drop-shadow-[0_0_10px_rgba(251,191,36,0.3)] transition-all duration-300">
              Explore Gallery <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div tabIndex={0} className="group relative aspect-square md:aspect-[4/5] rounded-[2rem] overflow-hidden cursor-pointer card-glow bg-zinc-900/40 backdrop-blur-2xl border border-white/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.1),0_20px_40px_-15px_rgba(0,0,0,0.5)] transition-all duration-500 ease-out hover:bg-zinc-900/50 hover:border-white/20 focus:bg-zinc-900/50 outline-none">
              <div 
                className="absolute inset-0 bg-cover bg-center filter grayscale-0 md:grayscale group-hover:grayscale-0 group-focus:grayscale-0 transition-all duration-700 group-hover:scale-105 group-focus:scale-105" 
                style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuA1AuiQoVulykNnTeIbHwzQthFKdWypuArQ1weNM5ad-fjSEGmQbN9oxKyHWj0NE4k45mdV78Speczv7leefuiWkOvd1H2YqVvCStGgf4sQzwR-_Gobs4L5Agkrus-KY7iexE1G1R9bEnNYmBa08GMPg5GAsGIQksy9a2HUWH1qGUpIrd2avYe8G-jBMm8hRsng0t9LL_AriJZPejNFwVCxjzGyRHz_9IPWPmLuDpatW0_shFLkA1xhOUZWEkaPXDEjJhP9jNRHLkc')" }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-90 group-hover:opacity-70 transition-opacity duration-500"></div>
              <div className="absolute bottom-0 left-0 p-8 w-full hover-card-content">
                <span className="inline-block px-2 py-1 border border-outline-variant/50 text-on-surface-variant font-label-caps text-label-caps uppercase tracking-widest rounded-sm mb-3">Residential</span>
                <h3 className="font-headline-md text-headline-md text-on-background mb-2">The Glass Pavilion</h3>
                <p className="font-body-md text-body-md text-on-surface-variant opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">Ambient & Accent Lighting</p>
              </div>
            </div>
            
            <div tabIndex={0} className="group relative aspect-square md:aspect-[4/5] rounded-[2rem] overflow-hidden cursor-pointer card-glow bg-zinc-900/40 backdrop-blur-2xl border border-white/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.1),0_20px_40px_-15px_rgba(0,0,0,0.5)] transition-all duration-500 ease-out hover:bg-zinc-900/50 hover:border-white/20 md:translate-y-12 outline-none">
              <div 
                className="absolute inset-0 bg-cover bg-center filter grayscale-0 md:grayscale group-hover:grayscale-0 group-focus:grayscale-0 transition-all duration-700 group-hover:scale-105 group-focus:scale-105" 
                style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCeOb7TP9PiCBn-WhIXyL8XjFE_kz2ApzycdDmAJrkn8QBsfMqHjqHSxYJPyqgm_nkoZa5W832bjXTgJ7qS_cUajP3SMb88w6TVRvFZS1hlwFfcXryv9F6BW7i_wjKLCfEp-N6IVm1mZnLZwFa-dYPeJZwstYMroE5wFsYLaGCUUtbfqzXZkzF5zIFEM6w2_xiNSyIAn39OPcsL7ct9nA4mZbvmcLd8EBtYEp19sokaCX-p1ZX3wHfFYf97J9FkOLvnwNlEiKIJUm0')" }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-90 group-hover:opacity-70 transition-opacity duration-500"></div>
              <div className="absolute bottom-0 left-0 p-8 w-full hover-card-content">
                <span className="inline-block px-2 py-1 border border-outline-variant/50 text-on-surface-variant font-label-caps text-label-caps uppercase tracking-widest rounded-sm mb-3">Commercial</span>
                <h3 className="font-headline-md text-headline-md text-on-background mb-2">Aura Headquarters</h3>
                <p className="font-body-md text-body-md text-on-surface-variant opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">Custom Fixture Design</p>
              </div>
            </div>

            <div tabIndex={0} className="group relative aspect-square md:aspect-[4/5] rounded-[2rem] overflow-hidden cursor-pointer card-glow bg-zinc-900/40 backdrop-blur-2xl border border-white/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.1),0_20px_40px_-15px_rgba(0,0,0,0.5)] transition-all duration-500 ease-out hover:bg-zinc-900/50 hover:border-white/20 outline-none">
              <div 
                className="absolute inset-0 bg-cover bg-center filter grayscale-0 md:grayscale group-hover:grayscale-0 group-focus:grayscale-0 transition-all duration-700 group-hover:scale-105 group-focus:scale-105" 
                style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDMVrTtuX0qSHa7RSVzHW4oHrmFalVDk591pYPfTjFxG3_mfySuvgwzSJ5rruV8lF4ebteVVV2mM_d4n7ImAiSU1ePhS80kC2zJ1QMZval9jdhIm6lzQktf_uszYGNcVLEmCTPKhzqav_XSS7LV9vJrehFjhBlnsQstLG1z-g8qPutBfbd5sBuF4GI3Ubt1B5g72x_NDONkn5a68j4qNwcvye5oF9es-eNTXW7SR88A-KOjDMGFt9K7v6c-Z2S_4IU2RmexH_pCQN0')" }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-90 group-hover:opacity-70 transition-opacity duration-500"></div>
              <div className="absolute bottom-0 left-0 p-8 w-full hover-card-content">
                <span className="inline-block px-2 py-1 border border-outline-variant/50 text-on-surface-variant font-label-caps text-label-caps uppercase tracking-widest rounded-sm mb-3">Hospitality</span>
                <h3 className="font-headline-md text-headline-md text-on-background mb-2">Nocturne Dining</h3>
                <p className="font-body-md text-body-md text-on-surface-variant opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">Task & Atmospheric</p>
              </div>
            </div>
          </div>
          <Link href="/portfolio" className="md:hidden mt-12 inline-flex items-center justify-center w-full py-4 border border-outline text-primary font-label-caps text-label-caps uppercase tracking-widest rounded-sm">
            Explore Gallery
          </Link>
        </div>
      </section>
    </>
  );
}
