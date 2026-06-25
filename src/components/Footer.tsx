const Footer = () => {
  return (
    <footer className="bg-surface-container-lowest border-t border-surface-container-highest w-full py-20 relative z-10">
      <div className="flex flex-col md:flex-row justify-between items-center px-margin-mobile md:px-margin-desktop w-full max-w-[1440px] mx-auto gap-gutter">
        <div className="text-headline-md font-headline-md text-on-surface mb-8 md:mb-0 uppercase tracking-tighter">
          LUMEN & SHADOW
        </div>
        <div className="flex flex-wrap gap-6 justify-center mb-8 md:mb-0">
          <a className="text-label-caps font-label-caps text-on-tertiary-fixed-variant hover:text-primary transition-colors duration-500 ease-in-out uppercase" href="#">Privacy Policy</a>
          <a className="text-label-caps font-label-caps text-on-tertiary-fixed-variant hover:text-primary transition-colors duration-500 ease-in-out uppercase" href="#">Terms of Service</a>
          <a className="text-label-caps font-label-caps text-on-tertiary-fixed-variant hover:text-primary transition-colors duration-500 ease-in-out uppercase" href="#">Accessibility</a>
          <a className="text-label-caps font-label-caps text-on-tertiary-fixed-variant hover:text-primary transition-colors duration-500 ease-in-out uppercase" href="#">Sustainability</a>
        </div>
        <div className="text-body-md font-body-md text-on-tertiary-fixed-variant text-center md:text-right">
          © {new Date().getFullYear()} LUMEN & SHADOW. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
