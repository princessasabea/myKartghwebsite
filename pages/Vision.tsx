import React from 'react';
import { Link } from 'react-router-dom';

const Vision: React.FC = () => {
  return (
    <div className="flex flex-col w-full bg-bg-light min-h-screen transition-colors duration-300">
      
      {/* --- HERO SECTION: SHARED BELIEF --- */}
      <section className="py-24 px-4 bg-white dark:bg-white/5 border-b border-gray-100 dark:border-white/10 relative overflow-hidden">
        <div className="max-w-6xl mx-auto relative z-10">
          <span className="text-primary font-black text-xs uppercase tracking-[0.3em] block mb-4">OUR ORIGIN</span>
          <h1 className="text-5xl md:text-7xl font-black mb-8 text-dark dark:text-white tracking-tighter leading-[0.95]">
            Different Countries. <br/>
            Different Time Zones. <br/>
            <span className="text-primary italic">One Shared Belief.</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted dark:text-gray-300 max-w-3xl leading-relaxed font-medium">
            What started as a simple idea to share with friends back home became a late-night journey across continents. This is the story of students building something meaningful for Ghana.
          </p>
        </div>
        {/* Abstract Background Shape */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 -skew-x-12 transform origin-top-right"></div>
      </section>

      {/* --- SECTION 1: THE LEARNING CURVE (The "Hard Truth") --- */}
      <section className="py-24 px-4 bg-dark text-white relative overflow-hidden">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
             <span className="inline-block px-4 py-1 bg-white/10 backdrop-blur border border-white/20 text-white text-xs font-bold rounded-full mb-6 uppercase tracking-widest">The Beginning</span>
             <h2 className="text-4xl md:text-5xl font-black leading-tight mb-8">"Wireframes. APIs. Expo Go."</h2>
             <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
               <p>
                 These were completely new concepts to a girl who simply had an idea. When the idea was first presented, the hard truth came quickly: <span className="text-white font-bold">This wasn't simple, and it definitely wasn't plug-and-play.</span>
               </p>
               <p>
                 We spent months questioning assumptions, searching for solutions, and figuring out the structure—deciding who focuses on frontend, who takes on backend, and how everything connects.
               </p>
             </div>
          </div>
          <div className="relative">
             <div className="absolute -inset-4 bg-primary/20 rounded-full blur-3xl"></div>
             <div className="relative bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-sm">
                <span className="material-symbols-outlined text-5xl text-primary mb-4">school</span>
                <h3 className="text-2xl font-bold mb-2">The Student Reality</h3>
                <p className="text-gray-400 leading-relaxed">
                  We are students cutting across engineering, computer science, and business. This means balancing degrees, exams, deadlines, and real life. Progress wasn't always linear, but the commitment never faded.
                </p>
             </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 2: THE EVOLUTION (More than an App) --- */}
      <section className="py-24 px-4 bg-bg-light dark:bg-dark transition-colors duration-300">
        <div className="max-w-6xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tighter text-dark dark:text-white">More Than Just Code.</h2>
          <p className="text-muted dark:text-gray-300 text-lg max-w-2xl mx-auto">
            We quickly realized this was more than just an app. It became an open space to explore logistics, marketing, and business models built specifically for Ghana.
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { 
              title: 'Community Driven', 
              text: 'Designed for the Ghanaian market, connecting people to real stores they know and trust.', 
              icon: 'groups', 
              bg: 'bg-orange-100 dark:bg-orange-900/20', 
              iconColor: 'text-orange-600 dark:text-orange-400' 
            },
            { 
              title: 'Reducing Friction', 
              text: 'Eliminating the "delivery gamble" by building systems that prioritize communication and reliability.', 
              icon: 'handshake', 
              bg: 'bg-blue-100 dark:bg-blue-900/20', 
              iconColor: 'text-blue-600 dark:text-blue-400' 
            },
            { 
              title: 'Local Logistics', 
              text: 'Creating smarter, shared logistics that actually work within local infrastructure constraints.', 
              icon: 'local_shipping', 
              bg: 'bg-green-100 dark:bg-green-900/20', 
              iconColor: 'text-green-600 dark:text-green-400' 
            }
          ].map((item, idx) => (
            <div key={idx} className="bg-white dark:bg-white/5 p-8 rounded-[2rem] shadow-xl shadow-gray-200/50 dark:shadow-none border border-gray-50 dark:border-white/10 hover:-translate-y-2 transition-transform duration-300">
              <div className={`w-14 h-14 ${item.bg} ${item.iconColor} rounded-2xl flex items-center justify-center mb-6`}>
                <span className="material-symbols-outlined text-[28px]">{item.icon}</span>
              </div>
              <h4 className="text-xl font-bold mb-3 text-dark dark:text-white">{item.title}</h4>
              <p className="text-muted dark:text-gray-400 leading-relaxed text-sm">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* --- SECTION 3: THE FUTURE (Work in Progress) --- */}
      <section className="py-24 px-4 bg-white dark:bg-white/5 border-t border-gray-100 dark:border-white/10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-10">
             <span className="material-symbols-outlined text-6xl text-primary animate-pulse">engineering</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-dark dark:text-white mb-8 tracking-tighter">Still a Work in Progress.</h2>
          <p className="text-xl text-muted dark:text-gray-300 font-medium mb-8 leading-relaxed">
            We’re learning, refining, questioning, and improving every step of the way. 
            We are deeply grateful to the people who chose to learn, struggle, and build alongside us.
          </p>
          
          <div className="bg-bg-light dark:bg-black/20 p-8 rounded-2xl border border-gray-200 dark:border-white/10 inline-block mx-auto mb-10">
            <p className="text-lg italic font-serif text-dark dark:text-gray-200">
              “Great things in business are never done by one person. They’re done by a team of people.”
            </p>
            <span className="block mt-4 text-sm font-bold text-primary uppercase tracking-widest">— Steve Jobs</span>
          </div>

          <div className="flex flex-col items-center gap-4">
             <span className="px-6 py-2 bg-black/5 dark:bg-white/10 rounded-full text-sm font-bold text-dark dark:text-white uppercase tracking-widest">
               📍 Launching Late 2026
             </span>
             <p className="text-muted dark:text-gray-400 text-sm">We are open to thoughtful input and support as we build.</p>
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
             <a 
               href="https://tally.so/r/aQeLEW" 
               target="_blank" 
               rel="noopener noreferrer" 
               className="px-8 py-4 bg-primary text-white font-black rounded-xl shadow-lg hover:scale-105 transition-all flex items-center gap-2"
             >
               Volunteer / Reach Out
             </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Vision;
