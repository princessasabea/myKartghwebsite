
import React, { useState } from 'react';

const Reserve: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setTimeout(() => setStatus('success'), 2000);
  };

  return (
    <div className="flex flex-col w-full bg-bg-light min-h-screen">
      <section className="py-24 px-4 bg-white dark:bg-white/5 border-b border-gray-100">
        <div className="max-w-6xl mx-auto text-center">
          <span className="text-primary font-bold text-xs uppercase tracking-widest block mb-4 tracking-[0.2em]">PARTNERSHIP & GROWTH</span>
          <h1 className="text-5xl md:text-7xl font-black mb-8 text-dark dark:text-white tracking-tighter">Scale with MyKart.</h1>
          <p className="text-xl text-muted dark:text-gray-300 max-w-2xl mx-auto leading-relaxed font-medium">
            We are building the future of Ghanaian retail. Whether you're an investor, a vendor, or a builder, let's create value together.
          </p>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto">
          {status === 'success' ? (
            <div className="p-16 bg-white dark:bg-white/5 rounded-[3rem] border border-gray-100 text-center animate-in zoom-in-95 duration-500 shadow-2xl">
              <div className="w-24 h-24 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-8 shadow-xl shadow-primary/20">
                <span className="material-symbols-outlined text-5xl">handshake</span>
              </div>
              <h2 className="text-3xl font-black text-dark dark:text-white mb-4">Application Received</h2>
              <p className="text-muted dark:text-gray-300 text-lg mb-8">Our partnership team will review your details and reach out within 48 hours to discuss next steps.</p>
              <button 
                onClick={() => setStatus('idle')}
                className="text-primary font-bold hover:underline"
              >
                Submit another inquiry
              </button>
            </div>
          ) : (
            <div className="bg-white dark:bg-white/5 p-8 md:p-12 rounded-[3rem] shadow-2xl shadow-gray-200/50 border border-gray-100">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-muted dark:text-gray-300 px-2">Full Name</label>
                    <input 
                      required
                      type="text" 
                      placeholder="e.g. Ama Serwaa"
                      className="w-full px-6 py-4 bg-bg-light border border-gray-100 rounded-2xl focus:ring-2 focus:ring-primary outline-none transition-all font-medium text-dark dark:text-white"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-muted dark:text-gray-300 px-2">Organization</label>
                    <input 
                      required
                      type="text" 
                      placeholder="e.g. ABC Capital / Market St."
                      className="w-full px-6 py-4 bg-bg-light border border-gray-100 rounded-2xl focus:ring-2 focus:ring-primary outline-none transition-all font-medium text-dark dark:text-white"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-muted dark:text-gray-300 px-2">Email Address</label>
                  <input 
                    required
                    type="email" 
                    placeholder="partner@company.com"
                    className="w-full px-6 py-4 bg-bg-light border border-gray-100 rounded-2xl focus:ring-2 focus:ring-primary outline-none transition-all font-medium text-dark dark:text-white"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-muted dark:text-gray-300 px-2">I am interested in...</label>
                  <select 
                    required
                    className="w-full px-6 py-4 bg-bg-light border border-gray-100 rounded-2xl focus:ring-2 focus:ring-primary outline-none transition-all font-medium text-dark dark:text-white appearance-none"
                  >
                    <option value="">Select your interest</option>
                    <option value="investor">Investment Opportunities</option>
                    <option value="retail">Retail Partnership (Supermarket)</option>
                    <option value="vendor">Local Vendor / Market Stall</option>
                    <option value="logistics">Logistics & Fleet Partner</option>
                    <option value="other">Other / General Inquiry</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-muted dark:text-gray-300 px-2">Tell us more</label>
                  <textarea 
                    rows={4}
                    placeholder="How can we work together?"
                    className="w-full px-6 py-4 bg-bg-light border border-gray-100 rounded-2xl focus:ring-2 focus:ring-primary outline-none transition-all font-medium text-dark dark:text-white resize-none"
                  ></textarea>
                </div>

                <button 
                  disabled={status === 'submitting'}
                  className="w-full py-5 bg-dark text-white font-black text-xl rounded-2xl shadow-2xl hover:bg-black active:scale-[0.98] transition-all flex items-center justify-center gap-3 disabled:opacity-70"
                >
                  {status === 'submitting' ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      Submit Partnership Request
                      <span className="material-symbols-outlined">north_east</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          )}
        </div>
      </section>

      {/* Info Grid */}
      <section className="py-24 px-4 bg-white dark:bg-white/5 border-t border-gray-100">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="p-8">
            <h4 className="text-xl font-black mb-4">Investors</h4>
            <p className="text-muted dark:text-gray-300 leading-relaxed">Early-stage participation in Ghana's most promising grocery logistics play. Reach out for our pitch deck and financial models.</p>
          </div>
          <div className="p-8 border-l border-gray-100">
            <h4 className="text-xl font-black mb-4">Retailers</h4>
            <p className="text-muted dark:text-gray-300 leading-relaxed">Expand your store's footprint without building your own fleet. Integrate with our high-reliability dispatch system.</p>
          </div>
          <div className="p-8 border-l border-gray-100">
            <h4 className="text-xl font-black mb-4">Market Mamas</h4>
            <p className="text-muted dark:text-gray-300 leading-relaxed">Bringing tradition into the digital age. We provide the tools to sell your fresh local produce to the whole city.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Reserve;
