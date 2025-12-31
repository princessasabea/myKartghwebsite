
import React from 'react';
import { Link } from 'react-router-dom';

const Vision: React.FC = () => {
  return (
    <div className="flex flex-col w-full bg-bg-light min-h-screen">
      {/* Vision Hero */}
      <section className="py-24 px-4 bg-white dark:bg-white/5 border-b border-gray-100 relative overflow-hidden">
        <div className="max-w-6xl mx-auto relative z-10">
          <span className="text-primary font-black text-xs uppercase tracking-[0.3em] block mb-4">OUR VISION</span>
          <h1 className="text-5xl md:text-8xl font-black mb-8 text-dark dark:text-white tracking-tighter leading-[0.95]">
            Reimagining retail <br/> with a <span className="text-primary italic">Global Vision.</span>
          </h1>
          <p className="text-2xl text-muted dark:text-gray-300 max-w-2xl leading-relaxed font-medium">
            The story of a team building the bridge between technology and Ghanaian market realities.
          </p>
        </div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 -skew-x-12 transform origin-top-right"></div>
      </section>

      {/* Vision Introduction */}
      <section className="py-24 px-4 bg-dark text-white">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1">
             <span className="inline-block px-4 py-1 bg-white dark:bg-white/5/10 backdrop-blur border border-white/20 text-white text-xs font-bold rounded-full mb-6 uppercase tracking-widest">The Core Vision</span>
             <h2 className="text-4xl md:text-6xl font-black leading-tight mb-8">Building for the <br/>Ghanaian Context.</h2>
             <p className="text-xl text-gray-300 leading-relaxed">
                MyKart was born from a simple observation: getting reliable groceries shouldn't be a gamble. We are building a platform that doesn't just deliver food, but builds trust between modern technology and local market vendors.
             </p>
          </div>
          <div className="flex-1">
             <div className="relative mx-auto w-full max-w-[320px] aspect-[9/19] rounded-[3rem] border-[12px] border-black shadow-2xl overflow-hidden bg-bg-light">
                <img 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDm9yQivXoP34fFXrvm3b9NKeSaOm5r5eHRJvlerRUuqNPSU_HiOxwYjTMo0jSnS_TWMKLj8Mn3HSKMpTzQJFb4YLdyAxhdyMuWVO9NoSNhhsiPTxbiqXyXQjIgVbwhDOQkz8Y84H9MuDKcxa_pJg1uu1TKknsamvOxkmv9srQc-Dl2uDxdVEvGA4vEpItcZTY8hpbQQdt9HsBCGdzX-7ze_XqrfFGDaA0ivmmYCD8eVRX4BSz-ukLXnhyCN3NVZKaUaBXSvotfkMA" 
                  className="w-full h-full object-cover" 
                  alt="MyKart Vision App"
                />
             </div>
          </div>
        </div>
      </section>

      {/* The Roadmap */}
      <section className="py-24 px-4 bg-bg-light">
        <div className="max-w-6xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black mb-4 tracking-tighter">MyKart Roadmap.</h2>
          <p className="text-muted dark:text-gray-300 text-lg font-medium">Three core pillars guiding our launch.</p>
        </div>
        
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {[
            { title: 'Planned Transparency', text: 'Developing a zero-hidden-fee model. What you see on the upcoming app will be what you pay.', icon: 'verified_user', color: 'bg-orange-500' },
            { title: 'Live Stock Engine', text: 'Building inventory integration with vendors to eliminate out-of-stock surprises from day one.', icon: 'inventory_2', color: 'bg-green-500' },
            { title: 'Reliable Slots', text: 'Designing delivery windows that fit your life. Engineering a system for high punctuality.', icon: 'schedule', color: 'bg-blue-500' }
          ].map((item, idx) => (
            <div key={idx} className="bg-white dark:bg-white/5 p-10 rounded-[2.5rem] shadow-xl shadow-gray-200/50 border border-gray-50 text-center flex flex-col items-center">
              <div className={`w-16 h-16 ${item.color} text-white rounded-2xl flex items-center justify-center mb-8 shadow-lg`}>
                <span className="material-symbols-outlined text-[32px]">{item.icon}</span>
              </div>
              <h4 className="text-2xl font-bold mb-4">{item.title}</h4>
              <p className="text-muted dark:text-gray-300 leading-relaxed font-medium">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Origin Story */}
      <section className="py-24 px-4 bg-white dark:bg-white/5 border-t border-gray-100">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-16">
            <div className="flex flex-col md:flex-row gap-12 items-start">
              <div className="w-20 h-20 bg-dark rounded-3xl flex items-center justify-center text-primary shrink-0">
                <span className="material-symbols-outlined text-[40px]">school</span>
              </div>
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-black text-dark dark:text-white tracking-tighter">A Student Spark</h2>
                <div className="text-muted dark:text-gray-300 text-lg leading-relaxed font-medium space-y-4">
                  <p>
                    MyKart started in dorm rooms—a simple, hungry idea among students looking to create something meaningful. We wanted to blend global technology with what we call a <span className="italic text-primary font-bold">"Swift Culture Touch"</span>—modern speed that respects traditional market values.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-12 items-start">
              <div className="w-20 h-20 bg-primary/10 rounded-3xl flex items-center justify-center text-primary shrink-0">
                <span className="material-symbols-outlined text-[40px]">query_stats</span>
              </div>
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-black text-dark dark:text-white tracking-tighter">Data Meets Friendship</h2>
                <div className="text-muted dark:text-gray-300 text-lg leading-relaxed font-medium space-y-4">
                  <p>
                    We spoke to over 100 potential users. The data was clear: <span className="text-dark dark:text-white font-bold">65% of Ghanaians</span> avoid online groceries because they want to physically see their items. This insight became the foundation of our "Personal Shopper" model.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-12 items-start">
              <div className="w-20 h-20 bg-accent/20 rounded-3xl flex items-center justify-center text-muted dark:text-gray-300 shrink-0">
                <span className="material-symbols-outlined text-[40px]">public</span>
              </div>
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-black text-dark dark:text-white tracking-tighter">A Global Team</h2>
                <div className="text-muted dark:text-gray-300 text-lg leading-relaxed font-medium space-y-4">
                  <p>
                    Today, our team spans continents, from North America to Accra. This diversity allows us to think globally while executing with deep Ghanaian roots. We balance lectures with logistics, and deadlines with development.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Closing Statement */}
      <section className="py-24 px-4 bg-bg-light border-t border-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-black text-dark dark:text-white mb-6 italic">"The story is just beginning."</h2>
          <p className="text-muted dark:text-gray-300 text-lg font-medium mb-10 max-w-2xl mx-auto leading-relaxed">
            We are building for the future, ready to grow, and ready to expand. Join us as we write the next chapter of Ghanaian retail.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
             <a 
               href="https://tally.so/r/aQeLEW" 
               target="_blank" 
               rel="noopener noreferrer" 
               className="px-10 py-5 bg-primary text-white font-black rounded-2xl shadow-xl shadow-primary/20 hover:scale-105 transition-all"
             >
               Support Our Growth
             </a>
            <Link to="/contact" className="px-10 py-5 bg-dark text-white font-black rounded-2xl hover:scale-105 transition-all">
               Contact the Team
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Vision;
