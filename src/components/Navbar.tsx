"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Process', path: '/process' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all ease-in-out duration-500 border-b ${isScrolled ? 'bg-background/90 backdrop-blur-md border-primary/20 shadow-[0_0_30px_rgba(212,175,55,0.05)] py-4' : 'bg-transparent border-transparent py-6'}`}>
      <div className="flex justify-between items-center w-full px-margin-mobile md:px-margin-desktop max-w-[1440px] mx-auto">
        <Link href="/" className="text-headline-md font-headline-md tracking-tighter text-on-surface uppercase hover:text-primary transition-colors duration-500">
          LUMEN & SHADOW
        </Link>
        
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.path;
            return (
              <Link 
                key={link.name} 
                href={link.path}
                className={`text-label-caps font-label-caps uppercase transition-all duration-500 ease-in-out ${isActive ? 'text-primary font-semibold border-b-2 border-primary pb-1 scale-[0.98]' : 'text-on-surface-variant hover:text-primary'}`}
              >
                {link.name}
              </Link>
            )
          })}
        </div>

        <Link href="/contact" className="hidden md:block bg-primary-container text-[#050505] px-6 py-3 font-label-caps text-label-caps uppercase hover:shadow-[0_0_30px_rgba(212,175,55,0.15)] hover:brightness-110 transition-all duration-500 rounded-sm">
          Consultation
        </Link>

        <button 
          className="md:hidden text-on-surface p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-background/95 backdrop-blur-xl border-b border-surface-container-highest/20 py-8 flex flex-col items-center gap-6">
           {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-label-caps font-label-caps uppercase tracking-widest ${pathname === link.path ? 'text-primary' : 'text-on-surface-variant'}`}
              >
                {link.name}
              </Link>
            ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
