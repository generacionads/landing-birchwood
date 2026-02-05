import React from 'react';
import { CASE_STUDIES } from '../constants';

const Gallery: React.FC = () => {
  // Select the featured case (the first one)
  const featuredCase = CASE_STUDIES[0];

  return (
    <section id="gallery" className="py-24 bg-white">
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-brand-600 font-semibold tracking-wide uppercase text-sm mb-3">Real Results</h2>
          <h3 className="text-3xl md:text-4xl font-serif font-bold text-slate-900">Life Transformations</h3>
        </div>

        <div className="max-w-6xl mx-auto bg-slate-50 rounded-3xl overflow-hidden shadow-2xl border border-slate-100">
          <div className="flex flex-col md:flex-row">
            
            {/* Before Image */}
            <div className="relative w-full md:w-1/2 h-80 md:h-[500px] group overflow-hidden">
              <img 
                src={featuredCase.beforeImage} 
                alt="Before treatment" 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
              />
              <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors duration-500"></div>
              <div className="absolute top-6 left-6">
                <span className="bg-slate-900/80 backdrop-blur-md text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg">
                  Before
                </span>
              </div>
            </div>

            {/* After Image */}
            <div className="relative w-full md:w-1/2 h-80 md:h-[500px] group overflow-hidden border-t md:border-t-0 md:border-l border-white/20">
              <img 
                src={featuredCase.afterImage} 
                alt="After treatment" 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
              />
               <div className="absolute top-6 right-6 md:left-6 md:right-auto">
                <span className="bg-brand-600/90 backdrop-blur-md text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg">
                  After
                </span>
              </div>
            </div>

          </div>

          {/* Description Content */}
          <div className="p-8 md:p-12 text-center bg-white relative z-10">
            <h4 className="text-3xl font-serif font-bold text-slate-900 mb-6">
              {featuredCase.title}
            </h4>
            <p className="text-slate-600 text-lg md:text-xl leading-relaxed max-w-4xl mx-auto">
              "{featuredCase.description}"
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;