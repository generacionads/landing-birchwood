"use client";

import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src="/logo.png"
              alt="Birchwood Dental"
              className={`h-10 md:h-12 w-auto transition-all duration-300 ${scrolled ? '' : 'lg:brightness-0 lg:invert'}`}
            />
          </div>

          {/* Desktop Menu - CTA Only */}
          <div className="hidden md:flex items-center">
            <a
              href="#contact"
              className="bg-brand-600 hover:bg-brand-700 text-white px-5 py-2.5 rounded-full text-sm font-medium transition-all shadow-lg hover:shadow-brand-500/30 flex items-center gap-2"
            >
              <Phone size={16} />
              Book Your Free Enquiry
            </a>
          </div>

          {/* Mobile Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`${scrolled ? 'text-slate-800' : 'text-slate-800 lg:text-white'} p-2`}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu - CTA Only */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t border-slate-100">
          <div className="px-4 pt-6 pb-6">
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center bg-brand-600 text-white px-5 py-3 rounded-lg font-bold shadow-md active:scale-95 transition-transform"
            >
              Book Your Free Enquiry
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;