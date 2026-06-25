const projects = [
  {
    title: "The Obsidian Residence",
    location: "London, UK",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDTBxHsPIHZFbu34u_kh6kbPRviYaeY3zjo0QWThCliWL38BXrw1ISN9DwEoEQ1Xgu3xxrrTF0T_lE4ZhXlfKX4LNXV90NdofN_kOGKSVv2dBCLBfBFyXMucQK8r-gyKJdcOmWR5kljX3RjfhjUWt0V_j8Jplg1Pf6LxqaWXCIUMy2zlcZkd6AuKYa5xDqeDvnxCNp1JdEIIGUdr-1dsgJBeoOZc2sQJIEiXnICxdAKUKeZrfnNQwlhE5ThOUT0PY_Ub9nReH-5wdg",
    aspect: "aspect-[4/5]"
  },
  {
    title: "Aura Hospitality Suite",
    location: "Dubai, UAE",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA5SbwSnleHCTlk9YVzC_YcZtM-GNvujGWnM0pdY7xSGUphrZ-hIO-00ImI27zWRcReJy8EDaesknSNeUM8d6_2nTjEO-RMZRz3DUZDk7v_NodZq1aVLmm2P01RkGSFIZWMFGQJ9hF5osp22d1BvdTzUKVhwFNo9mYbbGClJH4ot7RE5GbDfhbIj2iGT_XrWslW-ia_BUwyMP3IP3o_esg3qP8TCEOGBdpeyMbGm2Stx1rjuztkwD_rrgK1QLd6P46eKYQhgBJIXmE",
    aspect: "aspect-square"
  },
  {
    title: "Lumina Corporate HQ",
    location: "New York, USA",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC5t5fSGN1NCQ-FK7HWWL9HiL0JT33q_7Vz9pXl3tyEhtMjC5ClCVPhvwIlphMOgojV-t4SFSCgDNd0cEESd4s7Piv3FV_mhqPGyjsKBxSiFmKeso1SeiiFDgm7FzQUNIXudkNXnaNgOtj-EKfYHyJDOmSRy1D_O3HonKwttbiiMmgWdFxFcBnkSfEZAcrWwjC9YLzBs_F--hmdoqsZpDwL3H2q6QtZObCTUDaMFGdmi5_xkuyg3WZHAvVDk72Kz0ONgUHdPwBx2PI",
    aspect: "aspect-[3/4]"
  },
  {
    title: "Void Gallery",
    location: "Tokyo, Japan",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuArbGBv1kIOGSIwRYA7Ka5xCQ5nuRgtPKqzI9z73UMP67kjOELa55oaasi7U-Ohn4Rbohi87p4m7G9304b8FwXqJHQc6_w03tFcS05pgbDSaf0srS3lIKFBox3I9GrpEWdQefaW_zDGnAjycOEMMB2VW3UbjeCn2YZ1nqXWo5woYASpmtUkWqPNUWK-KfxzCUz0-el_cd5uCvFuG1X75TpVu-hWh9MGbLio96Nwi4faA8RTO3fUyKAGBFa3zNwmzCD24OdpJX1itus",
    aspect: "aspect-video"
  }
];

export default function Portfolio() {
  return (
    <div className="pb-32 px-margin-mobile md:px-margin-desktop max-w-[1440px] mx-auto w-full">
      {/* Header Section */}
      <header className="mb-24 md:mb-32 max-w-4xl">
        <h1 className="text-4xl md:text-headline-xl text-on-surface mb-6 font-headline-xl-mobile md:font-headline-xl">
          A Gallery of Light.
        </h1>
        <p className="text-base md:text-body-lg text-on-surface-variant max-w-2xl text-lg">
          Explore our portfolio. Every project is a unique dialogue between architecture, shadow, and luminance.
        </p>
      </header>

      {/* Masonry Gallery */}
      <div className="masonry-grid w-full">
        {projects.map((project, index) => (
          <div tabIndex={0} key={index} className="masonry-item w-full relative group overflow-hidden cursor-pointer ambient-glow rounded-[2rem] bg-zinc-900/40 backdrop-blur-2xl border border-white/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.1),0_20px_40px_-15px_rgba(0,0,0,0.5)] transition-all duration-500 ease-out hover:bg-zinc-900/50 hover:border-white/20 outline-none">
            <div className={`${project.aspect} w-full overflow-hidden`}>
              <img 
                className="w-full h-full object-cover transition-all duration-700 ease-in-out group-hover:scale-105 group-focus:scale-105 filter grayscale-0 md:grayscale group-hover:grayscale-0 group-focus:grayscale-0" 
                src={project.image}
                alt={project.title}
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent flex flex-col justify-end p-8">
              <div className="hover-card-content">
                <span className="text-label-caps font-label-caps text-primary uppercase mb-2 block tracking-widest">{project.location}</span>
                <h2 className="text-headline-md font-headline-md text-on-surface">{project.title}</h2>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
