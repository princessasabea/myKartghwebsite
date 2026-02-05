import React from 'react';
import { Link } from 'react-router-dom';

const Vision: React.FC = () => {
  return (
    <div className="flex flex-col w-full bg-bg-light min-h-screen transition-colors duration-300">
      
      {/* --- HERO: THE ORIGIN --- */}
      <section className="py-24 px-4 bg-white dark:bg-white/5 border-b border-gray-100 dark:border-white/10 relative overflow-hidden">
        <div className="max-w-6xl mx-auto relative z-10">
          <span className="text-primary font-black text-xs uppercase tracking-[0.3em] block mb-4">THE MISSION</span>
          <h1 className="text-5xl md:text-7xl font-black mb-8 text-dark dark:text-white tracking-tighter leading-[0.95]">
            Making grocery shopping <br/>
            <span className="text-primary italic">easy for Ghana.</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted dark:text-gray-300 max-w-3xl leading-relaxed font-medium">
            Born from late-night calls across time zones and a refusal to accept the status quo. We are students building the infrastructure for a more convenient life.
          </p>
        </div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 -skew-x-12 transform origin-top-right"></div>
      </section>

      {/* --- SECTION 1: THE CORE MODEL (Personal Shoppers) --- */}
      <section className="py-24 px-4 bg-bg-light dark:bg-dark">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
             <div className="inline-flex items-center gap-2 px-4 py-1 bg-orange-100 dark:bg-orange-900/20 text-orange-700 dark:text-orange-400 text-xs font-bold rounded-full mb-6 uppercase tracking-widest">
                <span className="material-symbols-outlined text-sm">shopping_bag</span>
                Convenience First
             </div>
             <h2 className="text-4xl md:text-5xl font-black text-dark dark:text-white leading-tight mb-6">Your Personal Shopper.</h2>
             <div className="space-y-6 text-lg text-muted dark:text-gray-300 leading-relaxed font-medium">
               <p>
                 For busy professionals, students, and families in Accra, time is luxury. MyKart gives that time back to you.
               </p>
               <p>
                 <strong className="text-dark dark:text-white">You Order, We Handle the Rest.</strong><br/>
                 We connect you to the stores you already trust—like <span className="text-primary">Most of the retail stores & marts you know</span>. A dedicated shopper picks your items with care and delivers them straight to your doorstep.
               </p>
             </div>
          </div>
          <div className="relative h-full min-h-[300px] bg-white dark:bg-white/5 rounded-3xl border border-gray-100 dark:border-white/10 p-8 shadow-xl flex flex-col justify-center">
             <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-gray-100 dark:bg-white/10 flex items-center justify-center">
                   <span className="material-symbols-outlined text-dark dark:text-white">schedule</span>
                </div>
                <div>
                   <h4 className="font-bold text-dark dark:text-white">Save Hours Weekly</h4>
                   <p className="text-xs text-muted dark:text-gray-400">Skip the traffic and queues.</p>
                </div>
             </div>
             <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gray-100 dark:bg-white/10 flex items-center justify-center">
                   <span className="material-symbols-outlined text-dark dark:text-white">verified</span>
                </div>
                <div>
                   <h4 className="font-bold text-dark dark:text-white">Trusted Quality</h4>
                   <p className="text-xs text-muted dark:text-gray-400">Hand-picked by trained shoppers.</p>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 2: THE KOMMUNITY TRUCK (Freshness) --- */}
      <section className="py-24 px-4 bg-dark text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
           <div className="absolute right-0 top-0 w-[500px] h-[500px] bg-primary rounded-full blur-[120px]"></div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="mb-12">
             <span className="inline-block px-4 py-1 bg-white/10 backdrop-blur border border-white/20 text-white text-xs font-bold rounded-full mb-6 uppercase tracking-widest">Bridging the Gap</span>
             <h2 className="text-4xl md:text-6xl font-black leading-tight mb-4">The Kommunity Truck.</h2>
             <p className="text-xl text-gray-400 max-w-2xl">
                We know that for essentials like Yam, Onions, and Tomatoes, you want <span className="text-white font-bold">market freshness at market prices</span>—not supermarket markups.
             </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
             {[
               { title: 'Market to Neighborhood', desc: 'We bring bulk fresh produce directly from the market to your community, cutting out the middleman costs.', icon: 'agriculture' },
               { title: 'Wider Reach', desc: 'Serving extended zones (like Madina & Dzorwulu) with scheduled stops, bringing convenience closer to home.', icon: 'map' },
               { title: 'Flexible Pickup', desc: 'Missed home delivery? Use a secure code to pick up your package from our truck at hubs like Accra Mall.', icon: 'qr_code_scanner' }
             ].map((item, i) => (
               <div key={i} className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors">
                  <span className="material-symbols-outlined text-4xl text-primary mb-4">{item.icon}</span>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* --- SECTION 3: STUDENT FOCUS (Roommate Groups) --- */}
      <section className="py-24 px-4 bg-white dark:bg-white/5 border-b border-gray-100 dark:border-white/10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
           <div className="order-2 md:order-1">
              {/* Visual abstraction of splitting the bill */}
              <div className="relative mx-auto w-full max-w-[320px] bg-bg-light dark:bg-dark border-4 border-gray-100 dark:border-white/10 rounded-3xl p-6 shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
                 <div className="flex items-center justify-between mb-6 border-b border-gray-200 dark:border-white/10 pb-4">
                    <span className="text-sm font-bold text-dark dark:text-white">Roommate Group</span>
                    <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full font-bold">Active</span>
                 </div>
                 <div className="space-y-3 mb-6">
                    <div className="flex justify-between text-sm text-muted dark:text-gray-400">
                       <span>Bulk Rice (5kg)</span>
                       <span>Shared</span>
                    </div>
                    <div className="flex justify-between text-sm text-muted dark:text-gray-400">
                       <span>Oil (3L)</span>
                       <span>Shared</span>
                    </div>
                 </div>
                 <div className="bg-primary/10 p-4 rounded-xl text-center">
                    <p className="text-primary font-black text-lg">Split Bill Instantly</p>
                    <p className="text-[10px] text-muted dark:text-gray-400 uppercase tracking-widest mt-1">Simple & Fair</p>
                 </div>
              </div>
           </div>
           
           <div className="order-1 md:order-2">
              <span className="text-primary font-black text-xs uppercase tracking-widest mb-2 block">BUILT FOR STUDENTS</span>
              <h2 className="text-4xl md:text-5xl font-black text-dark dark:text-white mb-6">The "Roommate Run."</h2>
              <p className="text-lg text-muted dark:text-gray-300 leading-relaxed mb-6">
                 We understand the student budget. That's why we are introducing <strong>Group Ordering</strong>—allowing roommates to buy bulk groceries together and split the cost instantly.
              </p>
              <ul className="space-y-3">
                 <li className="flex items-center gap-3 text-muted dark:text-gray-300 font-medium">
                    <span className="material-symbols-outlined text-green-500 text-sm">check_circle</span>
                    Launching first at University of Ghana (Legon)
                 </li>
                 <li className="flex items-center gap-3 text-muted dark:text-gray-300 font-medium">
                    <span className="material-symbols-outlined text-green-500 text-sm">check_circle</span>
                    Save money on everyday meals
                 </li>
                 <li className="flex items-center gap-3 text-muted dark:text-gray-300 font-medium">
                    <span className="material-symbols-outlined text-green-500 text-sm">check_circle</span>
                    Seamless split payments
                 </li>
              </ul>
           </div>
        </div>
      </section>

      {/* --- SECTION 4: TRUST & SAFETY --- */}
      <section className="py-24 px-4 bg-bg-light dark:bg-dark">
         <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-black text-dark dark:text-white mb-6">Built on Trust.</h2>
            <p className="text-muted dark:text-gray-300 text-lg max-w-2xl mx-auto mb-12">
               Safety and reliability are our foundation. We are building a secure platform where every interaction is verified.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
               <div className="bg-white dark:bg-white/5 p-8 rounded-2xl shadow-lg border-l-4 border-primary">
                  <span className="material-symbols-outlined text-3xl text-dark dark:text-white mb-4">verified_user</span>
                  <h3 className="text-xl font-bold text-dark dark:text-white mb-2">Verified Identity</h3>
                  <p className="text-muted dark:text-gray-400 text-sm leading-relaxed">
                     To ensure the safety of our community, we integrate robust verification (Ghana Card) for advanced features, keeping both our shoppers and customers safe.
                  </p>
               </div>

               <div className="bg-white dark:bg-white/5 p-8 rounded-2xl shadow-lg border-l-4 border-dark dark:border-gray-500">
                  <span className="material-symbols-outlined text-3xl text-dark dark:text-white mb-4">location_on</span>
                  <h3 className="text-xl font-bold text-dark dark:text-white mb-2">Accurate Tracking</h3>
                  <p className="text-muted dark:text-gray-400 text-sm leading-relaxed">
                     No more guessing games. We are committed to providing precise, real-time tracking for your deliveries so you are always in the loop.
                  </p>
               </div>
            </div>
         </div>
      </section>

      {/* --- FOOTER CTA --- */}
      <section className="py-24 px-4 bg-white dark:bg-white/5 border-t border-gray-100 dark:border-white/10 text-center">
        <div className="max-w-2xl mx-auto">
          <p className="text-xl italic font-serif text-dark dark:text-gray-200 mb-8">
            "Great things in business are never done by one person. They’re done by a team of people."
          </p>
          <div className="inline-block px-6 py-2 bg-primary/10 rounded-full text-primary font-bold text-sm uppercase tracking-widest mb-8">
             📍 Launching Late 2026
          </div>
          <div className="flex justify-center gap-4">
             <a href="https://tally.so/r/aQeLEW" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-dark text-white font-bold rounded-xl hover:scale-105 transition-transform">
                Join the Team
             </a>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Vision;
