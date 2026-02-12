import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=2068"
          alt="Dental Patient Smiling"
          className="w-full h-full object-cover"
        />
        {/* Gradient Overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/60 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/20 border border-brand-400/30 text-brand-100 text-sm font-medium mb-6 backdrop-blur-sm">
            <CheckCircle2 size={16} className="text-brand-400" />
            <span>Leading Dental Implant Clinic Walsall</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white leading-tight mb-6">
            Restore your confidence with expert <span className="text-brand-400">dental implants</span>
          </h1>

          <p className="text-lg md:text-xl text-slate-200 mb-8 leading-relaxed max-w-lg">
            Durable and aesthetic dental implant solutions. Eat, laugh, and speak with total security again.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="inline-flex justify-center items-center px-8 py-4 bg-brand-600 hover:bg-brand-500 text-white font-semibold rounded-full transition-all shadow-lg hover:shadow-brand-500/40 text-lg"
            >
              Book Your Free Enquiry
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
            <a
              href="#process"
              className="inline-flex justify-center items-center px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 font-semibold rounded-full transition-all text-lg"
            >
              How it works
            </a>
          </div>

          <div className="mt-16 border-t border-slate-700/50 pt-8">
            <p className="text-slate-400 text-sm font-medium mb-4 uppercase tracking-wider">Brands We Use At The Surgery</p>
            <div className="flex flex-wrap items-center gap-8 md:gap-12">
              <img
                src="/logos/straumann.png"
                alt="Straumann"
                className="h-6 md:h-8 object-contain brightness-0 invert opacity-70 hover:opacity-100 transition-opacity"
              />
              <img
                src="/logos/osstem.png"
                alt="Osstem Implant"
                className="h-8 md:h-10 object-contain brightness-0 invert opacity-70 hover:opacity-100 transition-opacity"
              />
              <img
                src="/logos/invisalign.png"
                alt="Invisalign"
                className="h-6 md:h-8 object-contain brightness-0 invert opacity-70 hover:opacity-100 transition-opacity"
              />
              <img
                src="/logos/denplan.png"
                alt="Denplan"
                className="h-10 md:h-12 object-contain brightness-0 invert opacity-70 hover:opacity-100 transition-opacity"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;