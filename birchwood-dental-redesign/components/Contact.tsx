"use client";

import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    // Simulate network request
    setTimeout(() => {
      setFormStatus('success');
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-slate-50 text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">

          {/* Info Side */}
          <div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-slate-900">Ready to transform your smile?</h2>
            <p className="text-slate-600 text-lg mb-10 leading-relaxed">
              Request your free consultation today. Our team will coordinate an appointment that fits your schedule to assess your case without obligation.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-brand-100 rounded-lg text-brand-600">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-slate-900">Call Us</h4>
                  <p className="text-slate-600">01922 413275</p>
                  <p className="text-slate-500 text-sm">Mon-Fri: 9am - 6pm</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-brand-100 rounded-lg text-brand-600">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-slate-900">Email</h4>
                  <p className="text-slate-600">reception@birchwooddental.co.uk</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-brand-100 rounded-lg text-brand-600">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-slate-900">Visit Us</h4>
                  <p className="text-slate-600">171 Walsall Road, Great Wyrley<br />Walsall, West Midlands, WS6 6NL</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="bg-white rounded-2xl p-8 text-slate-900 shadow-2xl">
            {formStatus === 'success' ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4">
                  <Send size={32} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Message Sent!</h3>
                <p className="text-slate-600">We will be in touch within 24 hours.</p>
                <button
                  onClick={() => setFormStatus('idle')}
                  className="mt-6 text-brand-600 font-semibold hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">Full Name</label>
                  <input required type="text" id="name" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all" placeholder="John Doe" />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1">Phone</label>
                    <input required type="tel" id="phone" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all" placeholder="07123 456789" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Email</label>
                    <input required type="email" id="email" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all" placeholder="john@email.com" />
                  </div>
                </div>

                <div>
                  <label htmlFor="treatment" className="block text-sm font-medium text-slate-700 mb-1">Treatment of Interest</label>
                  <select id="treatment" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all">
                    <option>Single Tooth Implant</option>
                    <option>Multi Tooth Implants</option>
                    <option>Both Jaws</option>
                    <option>Full Arch Implants (All-on-X)</option>
                    <option>Denture Stabilisation</option>
                    <option>Not Sure / General Enquiry</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">Message (Optional)</label>
                  <textarea id="message" rows={4} className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all" placeholder="Any specific questions?"></textarea>
                </div>

                <button
                  type="submit"
                  disabled={formStatus === 'submitting'}
                  className="w-full bg-brand-600 hover:bg-brand-700 text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-brand-500/30 transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {formStatus === 'submitting' ? 'Sending...' : 'Book Your Free Consultation'}
                </button>

                <p className="text-xs text-slate-400 text-center mt-4">
                  Your data is protected. We do not share information with third parties.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;