import MouseGlowContainer from '@/components/MouseGlowContainer';

const services = [
  {
    title: "Residential Lighting",
    description: "Curated illumination strategies for luxury homes. We design with an emphasis on creating warm, dynamic environments that adapt to the daily rhythms of life, highlighting architectural details and art collections.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDTBxHsPIHZFbu34u_kh6kbPRviYaeY3zjo0QWThCliWL38BXrw1ISN9DwEoEQ1Xgu3xxrrTF0T_lE4ZhXlfKX4LNXV90NdofN_kOGKSVv2dBCLBfBFyXMucQK8r-gyKJdcOmWR5kljX3RjfhjUWt0V_j8Jplg1Pf6LxqaWXCIUMy2zlcZkd6AuKYa5xDqeDvnxCNp1JdEIIGUdr-1dsgJBeoOZc2sQJIEiXnICxdAKUKeZrfnNQwlhE5ThOUT0PY_Ub9nReH-5wdg"
  },
  {
    title: "Commercial Spaces",
    description: "Strategic lighting design for high-end retail, hospitality, and corporate headquarters. We balance visual comfort with dramatic focal points to guide customer journeys and reinforce brand identity.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA5SbwSnleHCTlk9YVzC_YcZtM-GNvujGWnM0pdY7xSGUphrZ-hIO-00ImI27zWRcReJy8EDaesknSNeUM8d6_2nTjEO-RMZRz3DUZDk7v_NodZq1aVLmm2P01RkGSFIZWMFGQJ9hF5osp22d1BvdTzUKVhwFNo9mYbbGClJH4ot7RE5GbDfhbIj2iGT_XrWslW-ia_BUwyMP3IP3o_esg3qP8TCEOGBdpeyMbGm2Stx1rjuztkwD_rrgK1QLd6P46eKYQhgBJIXmE"
  },
  {
    title: "Custom Fixtures",
    description: "Bespoke luminaire design and fabrication. When off-the-shelf solutions fail to meet the architectural vision, we engineer custom fixtures that serve as functional works of art.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuArbGBv1kIOGSIwRYA7Ka5xCQ5nuRgtPKqzI9z73UMP67kjOELa55oaasi7U-Ohn4Rbohi87p4m7G9304b8FwXqJHQc6_w03tFcS05pgbDSaf0srS3lIKFBox3I9GrpEWdQefaW_zDGnAjycOEMMB2VW3UbjeCn2YZ1nqXWo5woYASpmtUkWqPNUWK-KfxzCUz0-el_cd5uCvFuG1X75TpVu-hWh9MGbLio96Nwi4faA8RTO3fUyKAGBFa3zNwmzCD24OdpJX1itus"
  },
  {
    title: "Lighting Control Systems",
    description: "Seamless integration of advanced control protocols (DALI, DMX, Casambi). We program sophisticated scenes that allow spaces to transition effortlessly from vibrant day settings to intimate evening atmospheres.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC5t5fSGN1NCQ-FK7HWWL9HiL0JT33q_7Vz9pXl3tyEhtMjC5ClCVPhvwIlphMOgojV-t4SFSCgDNd0cEESd4s7Piv3FV_mhqPGyjsKBxSiFmKeso1SeiiFDgm7FzQUNIXudkNXnaNgOtj-EKfYHyJDOmSRy1D_O3HonKwttbiiMmgWdFxFcBnkSfEZAcrWwjC9YLzBs_F--hmdoqsZpDwL3H2q6QtZObCTUDaMFGdmi5_xkuyg3WZHAvVDk72Kz0ONgUHdPwBx2PI"
  }
];

export default function Services() {
  return (
    <div className="pb-32 px-margin-mobile md:px-margin-desktop max-w-[1440px] mx-auto w-full">
      {/* Header */}
      <header className="mb-24 md:mb-32 max-w-4xl pt-12">
        <span className="text-label-caps font-label-caps text-primary uppercase tracking-widest mb-4 block">Our Expertise</span>
        <h1 className="text-4xl md:text-headline-xl text-on-surface mb-8 leading-tight font-headline-xl-mobile md:font-headline-xl">
          Comprehensive <br /> Lighting Design.
        </h1>
        <p className="text-base md:text-body-lg text-on-surface-variant max-w-2xl text-lg">
          We offer a full spectrum of architectural lighting services, from initial conceptualization to precise on-site focusing and programming.
        </p>
      </header>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
        {services.map((service, index) => (
          <div tabIndex={0} key={index} className="group relative flex flex-col outline-none">
            {/* Image Container */}
            <div className="w-full aspect-[4/3] rounded-[2rem] overflow-hidden relative mb-8 card-glow bg-zinc-900/40 backdrop-blur-2xl border border-white/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.1),0_20px_40px_-15px_rgba(0,0,0,0.5)] transition-all duration-500 ease-out hover:bg-zinc-900/50 hover:border-white/20 focus:bg-zinc-900/50">
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 ease-in-out group-hover:scale-105 group-focus:scale-105 filter grayscale-0 md:grayscale group-hover:grayscale-0 group-focus:grayscale-0" 
                style={{ backgroundImage: `url('${service.image}')` }}
              ></div>
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors duration-500"></div>
            </div>
            
            {/* Content Container */}
            <MouseGlowContainer className="flex flex-col flex-grow p-6 md:p-8">
              <div className="flex items-center gap-4 mb-4">
                <span className="text-label-caps font-label-caps text-primary/60 uppercase">0{index + 1}</span>
                <div className="h-px bg-surface-container-highest flex-grow"></div>
              </div>
              <h2 className="text-2xl md:text-[32px] font-headline-lg-mobile md:font-headline-lg text-on-surface mb-4">
                {service.title}
              </h2>
              <p className="text-base md:text-body-lg text-on-surface-variant flex-grow leading-relaxed">
                {service.description}
              </p>
            </MouseGlowContainer>
          </div>
        ))}
      </div>
    </div>
  );
}
