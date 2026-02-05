import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-900 text-brand-100 py-12 border-t border-brand-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center">
          <img
            src="/logo.png"
            alt="Birchwood Dental"
            className="h-10 w-auto brightness-0 invert opacity-90"
          />
        </div>
        <div className="text-sm text-center md:text-right opacity-80">
          <p>© {new Date().getFullYear()} Birchwood Dental. All rights reserved.</p>
          <p className="mt-1">Designed for dental excellence.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;