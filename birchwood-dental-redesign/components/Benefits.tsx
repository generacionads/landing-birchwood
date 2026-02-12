import React from 'react';
import { BENEFITS } from '../constants';
import { ArrowRight } from 'lucide-react';

const Benefits: React.FC = () => {
  return (
    <section id="benefits" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-6 leading-tight">
              Why choose <br />
              <span className="text-brand-600">dental implants?</span>
            </h2>
            <p className="text-slate-600 text-lg mb-10 leading-relaxed">
              Implants are not just an aesthetic improvement; they are an investment in your long-term health. Unlike traditional dentures, implants prevent bone loss and offer unmatched stability.
            </p>

            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-10 mb-12">
              {BENEFITS.map((benefit, index) => (
                <div key={index} className="flex flex-col gap-3">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-brand-100 text-brand-600 rounded-lg">
                      <benefit.icon size={20} />
                    </div>
                    <h4 className="font-bold text-slate-900">{benefit.title}</h4>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed pl-12">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="pl-0 sm:pl-12">
              <a
                href="#contact"
                className="inline-flex items-center px-6 py-3 bg-brand-600 hover:bg-brand-700 text-white font-semibold rounded-full transition-all shadow-md hover:shadow-brand-500/30 gap-2"
              >
                Book Your Free Enquiry
                <ArrowRight size={18} />
              </a>
            </div>
          </div>

          {/* Right Image/Visual */}
          <div className="relative">
            <div className="absolute -inset-4 bg-brand-200/30 rounded-full blur-3xl opacity-50"></div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=1974"
                alt="Doctor explaining dental implant model"
                className="w-full h-auto object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-white/95 backdrop-blur p-6 border-t border-slate-100">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold text-slate-900">Success Rate</p>
                    <p className="text-3xl font-bold text-brand-600">98%</p>
                  </div>
                  <div className="h-10 w-px bg-slate-200"></div>
                  <div>
                    <p className="text-sm font-semibold text-slate-900">Guarantee</p>
                    <p className="text-3xl font-bold text-brand-600">Lifetime</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Benefits;