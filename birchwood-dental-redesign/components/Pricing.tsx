import React from 'react';
import { PRICING_TIERS } from '../constants';
import { Check } from 'lucide-react';

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-4">Transparent Pricing</h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            No hidden costs.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {PRICING_TIERS.map((tier, index) => (
            <div
              key={index}
              className={`relative rounded-2xl p-8 bg-white border ${tier.isPopular ? 'border-brand-500 shadow-2xl scale-105 z-10' : 'border-slate-200 shadow-lg'} transition-all h-full flex flex-col`}
            >
              {tier.isPopular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-600 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-md">
                  Most Popular
                </div>
              )}

              <h3 className="text-xl font-bold text-slate-900 mb-2">{tier.name}</h3>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-4xl font-bold text-brand-600 tracking-tight">{tier.price}</span>
              </div>

              <ul className="space-y-4 mb-8">
                {tier.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check size={18} className="text-brand-500 mt-0.5 shrink-0" />
                    <span className="text-slate-600 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`block w-full text-center py-3 rounded-xl font-semibold transition-colors mt-auto ${tier.isPopular
                  ? 'bg-brand-600 hover:bg-brand-700 text-white shadow-lg shadow-brand-500/30'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-900'
                  }`}
              >
                Book Your Free Consultation
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;