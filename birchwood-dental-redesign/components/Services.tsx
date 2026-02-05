import React from 'react';
import { SERVICES } from '../constants';
import { ArrowRight } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-brand-600 font-semibold tracking-wide uppercase text-sm mb-3">Our Treatments</h2>
          <h3 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-4">Bespoke solutions for every patient</h3>
          <p className="text-slate-600 text-lg">
            We use state-of-the-art technology and the highest quality biocompatible materials.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:border-brand-200 hover:shadow-xl hover:shadow-brand-900/5 transition-all duration-300 relative overflow-hidden flex flex-col"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-100/50 rounded-full -mr-16 -mt-16 group-hover:bg-brand-100 transition-colors"></div>

              <div className="relative z-10 flex-grow">
                <div className="w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center text-brand-600 mb-6 group-hover:scale-110 transition-transform duration-300">
                  {typeof service.icon === 'string' ? (
                    <img src={service.icon} alt={service.title} className="w-8 h-8 object-contain" />
                  ) : (
                    <service.icon size={28} strokeWidth={1.5} />
                  )}
                </div>

                <h4 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h4>
                <p className="text-slate-600 leading-relaxed mb-6">
                  {service.description}
                </p>
              </div>

              <div className="relative z-10 pt-4 mt-auto">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center w-full px-4 py-3 bg-white border border-brand-200 text-brand-700 font-semibold rounded-xl hover:bg-brand-600 hover:text-white hover:border-brand-600 transition-all duration-300 group/btn shadow-sm"
                >
                  Book Your Free Consultation
                  <ArrowRight size={18} className="ml-2 group-hover/btn:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;