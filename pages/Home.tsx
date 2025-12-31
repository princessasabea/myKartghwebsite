
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <div className="flex flex-col w-full overflow-hidden">
      {/* Coming Soon Banner */}
      <div className="w-full bg-secondary/10 border-b border-secondary/20 py-3 px-4">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-center">
          <p className="text-xs md:text-sm font-bold text-dark dark:text-white flex items-center gap-2">
            <span className="material-symbols-outlined text-primary text-[18px]">construction</span>
            MyKart is currently in production — building Ghana’s kommunity-powered grocery delivery platform.
          </p>
          <Link 
            to="/wireframes" 
            className="text-[10px] md:text-xs font-black uppercase tracking-widest text-primary hover:text-orange-700 underline underline-offset-4 decoration-2 transition-colors shrink-0"
          >
            Preview the MVP →
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative px-4 pt-12 pb-20 md:py-32 bg-gradient-to-br from-cream/20 to-white overflow-hidden">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 text-left z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white dark:bg-white/5 border border-secondary/30 rounded-full mb-6 shadow-sm">
              <span className="material-symbols-outlined text-primary text-[18px]">bolt</span>
              <span className="text-xs font-bold text-primary uppercase tracking-wider">Launching Soon in Accra & Tema</span>
            </div>
            <h1 className="text-4xl md:text-7xl font-extrabold leading-[1.1] tracking-tight text-dark dark:text-white mb-6">
              Building Ghana's grocery delivery, <br/>
              <span className="text-primary italic">for ultimate reliability.</span>
            </h1>
            <p className="text-lg md:text-xl text-muted dark:text-gray-300 font-medium leading-relaxed mb-8 max-w-lg">
              We are reimagining fresh produce delivery from local Market Mamas and staples from trusted retailers. Currently building a dedicated network of Personal Shoppers for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => setShowPopup(true)}
                className="px-8 py-4 bg-primary text-white font-bold rounded-2xl shadow-xl shadow-primary/30 hover:bg-orange-600 transition-all hover:scale-105 active:scale-95"
              >
                App Launching late 2026
              </button>
              <a 
                href="https://tally.so/r/rjB4J2"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-white dark:bg-white/5 border border-gray-200 text-dark dark:text-white text-center font-bold rounded-2xl shadow-sm hover:bg-gray-50 transition-all active:scale-95"
              >
                Join the Waitlist
              </a>
            </div>
          </div>
          
          <div className="flex-1 relative">
            <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl z-10 group">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDm9yQivXoP34fFXrvm3b9NKeSaOm5r5eHRJvlerRUuqNPSU_HiOxwYjTMo0jSnS_TWMKLj8Mn3HSKMpTzQJFb4YLdyAxhdyMuWVO9NoSNhhsiPTxbiqXyXQjIgVbwhDOQkz8Y84H9MuDKcxa_pJg1uu1TKknsamvOxkmv9srQc-Dl2uDxdVEvGA4vEpItcZTY8hpbQQdt9HsBCGdzX-7ze_XqrfFGDaA0ivmmYCD8eVRX4BSz-ukLXnhyCN3NVZKaUaBXSvotfkMA" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                alt="MyKart Grocery bag"
              />
              <div className="absolute top-6 right-6 bg-white dark:bg-white/5/95 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-primary/10 animate-bounce">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                    <span className="material-symbols-outlined text-[20px]">local_shipping</span>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-muted dark:text-gray-300 uppercase">Status</p>
                    <p className="text-xs font-bold text-dark dark:text-white">Simulating logistics...</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Background decorative blob */}
            <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-accent/30 rounded-full blur-3xl -z-0"></div>
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-secondary/20 rounded-full blur-2xl -z-0"></div>
          </div>
        </div>
      </section>

      {/* Feature Section */}
      <section className="py-24 bg-white dark:bg-white/5 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-4">Our Commitment to You.</h2>
            <p className="text-muted dark:text-gray-300 text-lg max-w-2xl mx-auto">We are building a platform founded on trust and local integration. Here is what we're perfecting for our launch.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl bg-bg-light border border-gray-100 group hover:border-primary/30 transition-all hover:shadow-xl hover:shadow-primary/5">
              <div className="w-14 h-14 bg-white dark:bg-white/5 rounded-2xl flex items-center justify-center text-primary shadow-sm mb-6">
                <span className="material-symbols-outlined text-[32px]">receipt_long</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Transparent Pricing</h3>
              <p className="text-muted dark:text-gray-300 leading-relaxed">We're finalizing a system that ensures the price you see is the final price. No inflation, no surprises.</p>
            </div>
            
            <div className="p-8 rounded-3xl bg-bg-light border border-gray-100 group hover:border-primary/30 transition-all hover:shadow-xl hover:shadow-primary/5">
              <div className="w-14 h-14 bg-white dark:bg-white/5 rounded-2xl flex items-center justify-center text-primary shadow-sm mb-6">
                <span className="material-symbols-outlined text-[32px]">inventory_2</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Live Integration</h3>
              <p className="text-muted dark:text-gray-300 leading-relaxed">Developing real-time inventory tools for market vendors to ensure high fulfillment rates from day one.</p>
            </div>

            <div className="p-8 rounded-3xl bg-bg-light border border-gray-100 group hover:border-primary/30 transition-all hover:shadow-xl hover:shadow-primary/5">
              <div className="w-14 h-14 bg-white dark:bg-white/5 rounded-2xl flex items-center justify-center text-primary shadow-sm mb-6">
                <span className="material-symbols-outlined text-[32px]">person_check</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Trained Shoppers</h3>
              <p className="text-muted dark:text-gray-300 leading-relaxed">Currently training our first cohort of professional Personal Shoppers to pick quality produce for you.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Intro to Story Section */}
      <section className="py-20 bg-cream/30 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1 order-2 md:order-1">
             <div className="relative w-full aspect-square md:aspect-[4/5] bg-bg-light rounded-[3rem] p-4 shadow-app overflow-hidden ring-8 ring-dark shadow-2xl">
                <div className="w-full h-full bg-white dark:bg-white/5 rounded-[2rem] overflow-hidden flex flex-col">
                   <div className="p-6 border-b border-gray-50 flex justify-between items-center">
                      <div className="flex items-center gap-2">
                         <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white">
                            <span className="material-symbols-outlined text-[18px]">shopping_cart</span>
                         </div>
                         <span className="font-extrabold text-sm">MyKart</span>
                      </div>
                      <span className="material-symbols-outlined text-muted dark:text-gray-300">menu</span>
                   </div>
                   <div className="p-6 flex-1 bg-gray-50 flex flex-col gap-6">
                      <div className="h-12 bg-white dark:bg-white/5 rounded-xl flex items-center px-4 gap-3 text-muted dark:text-gray-300 text-xs shadow-sm">
                        <span className="material-symbols-outlined text-primary text-[18px]">search</span>
                        Building search...
                      </div>
                      <div className="h-32 bg-primary rounded-2xl p-4 text-white relative overflow-hidden">
                         <p className="text-[10px] font-bold uppercase tracking-widest opacity-80">Pre-launch Preview</p>
                         <p className="text-lg font-black leading-tight">Ghana's First Ecosystem</p>
                         <div className="absolute right-[-10px] bottom-[-10px] opacity-10">
                            <span className="material-symbols-outlined text-[80px]">nutrition</span>
                         </div>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-white dark:bg-white/5 p-3 rounded-2xl shadow-sm border border-gray-100">
                          <div className="h-20 bg-gray-50 rounded-lg mb-2"></div>
                          <div className="h-2 w-1/2 bg-gray-200 rounded-full mb-1"></div>
                          <div className="h-2 w-1/4 bg-primary rounded-full"></div>
                        </div>
                        <div className="bg-white dark:bg-white/5 p-3 rounded-2xl shadow-sm border border-gray-100 text-center flex flex-col justify-center items-center">
                          <span className="material-symbols-outlined text-primary mb-2">stars</span>
                          <div className="h-2 w-3/4 bg-gray-100 rounded-full"></div>
                        </div>
                      </div>
                   </div>
                </div>
             </div>
          </div>
          
          <div className="flex-1 order-1 md:order-2">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-8">Smart Shopping, <br/>Currently in Development.</h2>
            <div className="space-y-6">
              {[
                { title: 'Designing for Families', text: 'Tailoring the app experience for modern Ghanaian households.', icon: 'favorite' },
                { title: 'Local Insights', text: 'Validating our model with market research across Accra.', icon: 'map' },
                { title: 'Kommunity First', text: 'Engaging with Market Mamas to prepare for their digital transition.', icon: 'groups' }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4 p-4 rounded-2xl hover:bg-white dark:bg-white/5 transition-colors">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary shrink-0">
                    <span className="material-symbols-outlined">{item.icon}</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">{item.title}</h4>
                    <p className="text-muted dark:text-gray-300 text-sm leading-relaxed">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
            <Link 
              to="/story"
              className="inline-block mt-8 px-10 py-4 bg-dark text-white font-bold rounded-2xl hover:bg-black transition-all active:scale-95"
            >
              Explore Our Story
            </Link>
          </div>
        </div>
      </section>

      {/* Support CTA */}
      <section className="py-24 px-4 bg-bg-light">
        <div className="max-w-4xl mx-auto text-center">
          <div className="p-12 md:p-20 bg-white dark:bg-white/5 rounded-[4rem] shadow-xl border border-gray-100 relative overflow-hidden">
             <div className="relative z-10">
                <h2 className="text-3xl md:text-5xl font-black text-dark dark:text-white mb-6">Our Journey is In Progress</h2>
                <p className="text-xl text-muted dark:text-gray-300 mb-10 max-w-xl mx-auto font-medium">
                  We are still growing, still learning, and still building. Join our waitlist to be part of the first launch cohort.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                   <a 
                     href="https://tally.so/r/rjB4J2"
                     target="_blank"
                     rel="noopener noreferrer"
                     className="px-10 py-5 bg-primary text-white font-black rounded-2xl shadow-xl shadow-primary/20 hover:scale-105 transition-all"
                   >
                      Join the Waitlist
                   </a>
                   <a 
                     href="https://tally.so/r/aQeLEW" 
                     target="_blank" 
                     rel="noopener noreferrer" 
                     className="px-10 py-5 bg-dark text-white font-black rounded-2xl shadow-xl hover:scale-105 transition-all"
                   >
                      Support the Build
                   </a>
                </div>
             </div>
             <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl"></div>
             <div className="absolute bottom-0 left-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl"></div>
          </div>
        </div>
      </section>

      {/* Download Popup */}
      {showPopup && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-dark/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white dark:bg-white/5 rounded-[2.5rem] p-10 max-w-md w-full shadow-2xl animate-in zoom-in-95 duration-300">
             <div className="w-20 h-20 bg-primary/10 rounded-3xl flex items-center justify-center text-primary mb-8 mx-auto">
                <span className="material-symbols-outlined text-[40px]">construction</span>
             </div>
             <h3 className="text-3xl font-black text-center text-dark dark:text-white mb-4 tracking-tight">Development Phase</h3>
             <p className="text-muted dark:text-gray-300 text-center leading-relaxed mb-8 font-medium">
                The MyKart app is currently being built. Follow our journey on LinkedIn to see real-time updates from our team!
             </p>
             <div className="flex flex-col gap-3">
                <a 
                  href="https://www.linkedin.com/company/mykartstartup/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full py-4 bg-dark text-white font-bold rounded-2xl text-center flex items-center justify-center gap-2 hover:bg-black transition-colors"
                >
                  Follow our Build
                  <span className="material-symbols-outlined text-[20px]">link</span>
                </a>
                <button 
                  onClick={() => setShowPopup(false)}
                  className="w-full py-4 bg-gray-100 text-dark dark:text-white font-bold rounded-2xl hover:bg-gray-200 transition-colors"
                >
                  Close
                </button>
             </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
