import React from 'react';
import { PROCESS_STEPS } from '../constants';
import { ArrowRight } from 'lucide-react';

const Process: React.FC = () => {
  return (
    <section id="process" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-brand-600 font-semibold tracking-wide uppercase text-sm mb-3">The Process</h2>
          <h3 className="text-3xl md:text-4xl font-serif font-bold text-slate-900">Your journey to a new smile</h3>
        </div>

        <div className="relative">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROCESS_STEPS.map((step, index) => (
              <div key={index} className="relative z-10 group">
                <div className="bg-white rounded-2xl border border-slate-100 shadow-sm group-hover:shadow-xl group-hover:-translate-y-2 transition-all duration-300 h-full flex flex-col overflow-hidden">
                  
                  {/* Image Section */}
                  <div className="h-48 w-full overflow-hidden relative">
                    <img 
                      src={step.image} 
                      alt={step.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </div>

                  <div className="p-8 pt-10 relative flex-grow flex flex-col items-center text-center">
                    {/* Step Number Badge - overlapping image and content */}
                    <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-brand-600 text-white flex items-center justify-center font-bold text-lg shadow-lg ring-4 ring-white z-10">
                      {step.number}
                    </div>
                    
                    <h4 className="text-lg font-bold text-slate-900 mb-3">{step.title}</h4>
                    <p className="text-slate-500 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-slate-500 mb-8 max-w-2xl mx-auto">
            We understand that every patient is unique. Times may vary according to your specific healing and treatment needs.
          </p>
          <a 
            href="#contact" 
            className="inline-flex justify-center items-center px-8 py-3 bg-brand-600 hover:bg-brand-700 text-white font-semibold rounded-full transition-all shadow-lg hover:shadow-brand-500/30 text-lg group"
          >
            Book Your Free Consultation
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Process;