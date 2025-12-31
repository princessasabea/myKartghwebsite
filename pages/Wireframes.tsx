
import React, { useState, useEffect, useRef } from 'react';
import TruckSchedule from './TruckSchedule';

const LiveTruckMap: React.FC = () => {
  const [isMoving, setIsMoving] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let interval: any;
    if (isMoving) {
      interval = setInterval(() => {
        setProgress((prev) => (prev >= 100 ? 0 : prev + 0.5));
      }, 50);
    }
    return () => clearInterval(interval);
  }, [isMoving]);

  const getPathPos = (p: number) => {
    const x = p;
    const y = 50 + Math.sin(p * 0.1) * 20;
    return { x, y };
  };

  const pos = getPathPos(progress);

  return (
    <div className="w-full h-full bg-[#e5e7eb] relative overflow-hidden rounded-[2rem] border-4 border-dark shadow-2xl">
      <div className="absolute inset-0 opacity-20" 
           style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
        <path d="M0,50 Q25,30 50,50 T100,50" fill="none" stroke="#fff" strokeWidth="6" strokeLinecap="round" opacity="0.8" />
        <path d="M20,0 V100" fill="none" stroke="#fff" strokeWidth="2" strokeDasharray="6" opacity="0.5" />
        <path d="M80,0 V100" fill="none" stroke="#fff" strokeWidth="2" strokeDasharray="6" opacity="0.5" />
        <path d="M0,20 H100" fill="none" stroke="#fff" strokeWidth="1" strokeDasharray="4" opacity="0.3" />
        <path d="M0,80 H100" fill="none" stroke="#fff" strokeWidth="1" strokeDasharray="4" opacity="0.3" />
      </svg>
      <div className="absolute top-[40%] right-[10%] text-primary animate-bounce">
        <span className="material-symbols-outlined text-4xl drop-shadow-md">location_on</span>
      </div>
      <div 
        className="absolute w-16 h-16 bg-white dark:bg-white/5 rounded-2xl shadow-2xl flex flex-col items-center justify-center border-2 border-primary transition-all duration-75 ease-linear z-20"
        style={{ left: `${pos.x}%`, top: `${pos.y}%`, transform: 'translate(-50%, -50%)' }}
      >
        <span className="material-symbols-outlined text-primary text-3xl">local_shipping</span>
        <div className="absolute -top-10 bg-primary text-white text-[10px] px-3 py-1 rounded-full whitespace-nowrap font-black uppercase tracking-widest shadow-lg border border-white/20">
          K-Truck En Route
        </div>
      </div>
      <div className="absolute top-6 left-6 z-10 pointer-events-none">
        <div className="bg-dark/90 backdrop-blur-md p-4 rounded-2xl border border-white/10 shadow-xl">
           <div className="flex items-center gap-3 mb-2">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              <p className="text-[10px] font-black text-white uppercase tracking-widest">Live Signal: Active</p>
           </div>
           <p className="text-white font-bold text-sm">East Legon Route 4</p>
           <p className="text-white/60 text-xs">Estimated Arrival: 12 mins</p>
        </div>
      </div>
      <div className="absolute bottom-6 left-6 right-6 flex justify-between items-center pointer-events-none">
        <div className="bg-white dark:bg-white/5/95 backdrop-blur-md p-4 rounded-2xl border border-gray-200 pointer-events-auto shadow-xl flex items-center gap-4">
          <div className="flex flex-col">
            <p className="text-[10px] font-black text-muted dark:text-gray-300 uppercase mb-0.5 tracking-widest">Next Stop</p>
            <p className="text-sm font-black text-dark dark:text-white">A&C Mall Enclave</p>
          </div>
          <div className="w-px h-8 bg-gray-200"></div>
          <div className="flex flex-col">
            <p className="text-[10px] font-black text-muted dark:text-gray-300 uppercase mb-0.5 tracking-widest">Speed</p>
            <p className="text-sm font-black text-dark dark:text-white">35 km/h</p>
          </div>
        </div>
        <button 
          onClick={() => setIsMoving(!isMoving)}
          className="w-14 h-14 bg-primary text-white rounded-2xl flex items-center justify-center shadow-2xl shadow-primary/40 pointer-events-auto active:scale-90 transition-all hover:scale-105"
        >
          <span className="material-symbols-outlined text-3xl">{isMoving ? 'pause' : 'play_arrow'}</span>
        </button>
      </div>
    </div>
  );
};

const Wireframes: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  
  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 400;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const appScreens = [
    { title: "Authentication", description: "Secure login/signup with Ghana Card integration.", img: "https://raw.githubusercontent.com/princessasabea/myKartghwebsite/main/public/signin.png" },
    { title: "Become a Partner", description: "Vendor onboarding for market mamas and chefs.", img: "https://raw.githubusercontent.com/princessasabea/myKartghwebsite/main/public/vendordashboard.png" },
    { title: "Order History", description: "Transparent log of all past and current orders.", img: "https://raw.githubusercontent.com/princessasabea/myKartghwebsite/main/public/order%20history%20screen.png" },
    { title: "Roommate Run", description: "Shared group carts for kommunity purchasing.", img: "https://raw.githubusercontent.com/princessasabea/myKartghwebsite/main/public/group-order-screen.png" },
    { title: "University Roommates", description: "Shared group carts for Kommunity purchasing.", img: "https://raw.githubusercontent.com/princessasabea/myKartghwebsite/main/public/uniroommates.png" },
    { title: "Active Tracking", description: "Live GPS updates for direct and truck deliveries.", img: "https://raw.githubusercontent.com/princessasabea/myKartghwebsite/main/public/truck-tracking.png" }
  ];

  const mvpFeatures = [
    { title: "Community Truck Delivery", text: "Shared grocery deliveries to scheduled pickup points", icon: "local_shipping" },
    { title: "Shop Multiple Stores in One Cart", text: "Groceries from different vendors, one checkout", icon: "shopping_basket" },
    { title: "Made in Ghana Marketplace", text: "Discover and support local brands and producers", icon: "verified" },
    { title: "Group Orders & Shared Carts", text: "Order together with friends, family, or neighbors", icon: "group_add" },
    { title: "Flexible Delivery for Underserved Areas", text: "Access groceries even outside normal delivery zones", icon: "explore" },
    { title: "Smart Shopping Assistant", text: "Get help planning meals and finding items", icon: "psychology" },
    { title: "Community Hub", text: "Recipes, chefs, vendors, and local events in one place", icon: "forum" },
    { title: "Scheduled Pickups", text: "Predictable delivery days by area", icon: "event_available" },
    { title: "Simple, Fast Checkout", text: "Designed for convenience", icon: "speed" },
    { title: "Built for the 24-Hour Economy", text: "Order anytime, pickup when it works for you", icon: "history_toggle_off" },
  ];

  return (
    <div className="flex flex-col w-full bg-bg-light min-h-screen overflow-x-hidden">
      <section className="py-24 px-4 bg-white dark:bg-white/5 border-b border-gray-100">
        <div className="max-w-6xl mx-auto">
          <span className="text-primary font-bold text-xs uppercase tracking-widest block mb-4">PRODUCTION PREVIEW</span>
          <h1 className="text-5xl md:text-8xl font-black mb-8 text-dark dark:text-white tracking-tighter">View MVP.</h1>
          <p className="text-xl text-muted dark:text-gray-300 font-medium max-w-2xl leading-relaxed">
            Explore the core features of the MyKart app, from high-fidelity screens to our interactive Kommunity Truck tracking system.
          </p>
        </div>
      </section>

      <section className="py-20 flex flex-col gap-32">
        {/* Interactive Slider Container */}
        <div className="relative w-full group">
          {/* Navigation Arrows */}
          <button 
            onClick={() => scroll('left')}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-14 h-14 bg-white dark:bg-white/5/90 backdrop-blur border border-gray-100 rounded-full flex items-center justify-center shadow-xl text-dark dark:text-white hover:bg-primary hover:text-white transition-all opacity-0 group-hover:opacity-100 active:scale-90"
            aria-label="Scroll left"
          >
            <span className="material-symbols-outlined text-3xl">chevron_left</span>
          </button>
          
          <button 
            onClick={() => scroll('right')}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-14 h-14 bg-white dark:bg-white/5/90 backdrop-blur border border-gray-100 rounded-full flex items-center justify-center shadow-xl text-dark dark:text-white hover:bg-primary hover:text-white transition-all opacity-0 group-hover:opacity-100 active:scale-90"
            aria-label="Scroll right"
          >
            <span className="material-symbols-outlined text-3xl">chevron_right</span>
          </button>

          <div 
            ref={scrollRef}
            className="flex gap-12 overflow-x-auto no-scrollbar scroll-smooth px-8 py-12"
            style={{ scrollSnapType: 'x mandatory' }}
          >
            {appScreens.map((screen, idx) => (
              <div 
                key={idx} 
                className="inline-block w-[280px] md:w-[340px] group flex-shrink-0 scroll-snap-align-start"
              >
                <div className="relative aspect-[9/19] rounded-[3rem] border-[12px] border-dark overflow-hidden shadow-2xl bg-white dark:bg-white/5 transition-all duration-500 group-hover:scale-[1.02] group-hover:-translate-y-2 group-hover:shadow-primary/20">
                  <img src={screen.img} className="w-full h-full object-cover" alt={screen.title} />
                </div>
                <div className="mt-10 text-center">
                  <h4 className="text-xl font-black text-dark dark:text-white group-hover:text-primary transition-colors">{screen.title}</h4>
                  <p className="text-muted dark:text-gray-300 text-sm font-medium px-4 mt-2">{screen.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-bg-light to-transparent z-10 pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-bg-light to-transparent z-10 pointer-events-none"></div>
        </div>
        {/* --- NEW: ROOMMATE RUN / CAMPUS LAUNCH SPOTLIGHT SECTION --- */}
        <section className="mx-auto max-w-6xl px-4">
           <div className="bg-[#FFF8F0] rounded-[3rem] p-8 md:p-16 overflow-hidden border border-orange-100 relative">
             <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
                <div className="order-2 lg:order-1">
                   <div className="inline-flex items-center gap-2 px-4 py-2 bg-white dark:bg-white/5 text-primary font-bold rounded-full text-sm mb-6 shadow-sm border border-orange-100">
                      <span className="relative flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
                      </span>
                      Launching First at University of Ghana 🇬🇭
                   </div>
                   <h2 className="text-4xl md:text-5xl font-black text-dark dark:text-white mb-6 leading-tight">
                      Roommate Run: <br />
                      <span className="text-primary">Split the Bill,</span> Not the Vibes.
                   </h2>
                   <p className="text-lg text-muted dark:text-gray-300 leading-relaxed mb-8">
                      Living in <strong>Legon Hall, Volta, or Pent?</strong> Stop paying full delivery fees for solo orders. 
                      Our "Roommate Run" feature lets you build a shared cart with your roommates in real-time.
                   </p>
                   <div className="space-y-4">
                      <div className="flex items-start gap-4">
                         <div className="w-10 h-10 bg-white dark:bg-white/5 rounded-xl shadow-sm flex items-center justify-center text-primary shrink-0 mt-1">
                            <span className="material-symbols-outlined">call_split</span>
                         </div>
                         <div>
                            <h4 className="font-bold text-dark dark:text-white">Split Payments Instantly</h4>
                            <p className="text-sm text-muted dark:text-gray-300">Everyone pays their exact share via Mobile Money. No more "I owe you".</p>
                         </div>
                      </div>
                      <div className="flex items-start gap-4">
                         <div className="w-10 h-10 bg-white dark:bg-white/5 rounded-xl shadow-sm flex items-center justify-center text-primary shrink-0 mt-1">
                            <span className="material-symbols-outlined">savings</span>
                         </div>
                         <div>
                            <h4 className="font-bold text-dark dark:text-white">Slash Delivery Fees</h4>
                            <p className="text-sm text-muted dark:text-gray-300">Split one delivery fee among 4 people. Save up to 15 GHS per order.</p>
                         </div>
                      </div>
                   </div>
                </div>
                <div className="order-1 lg:order-2 flex justify-center">
                   <div className="relative w-[280px] rotate-3 hover:rotate-0 transition-all duration-500">
                      <img 
                        src="https://raw.githubusercontent.com/princessasabea/princess-website/a73b75287274cf45ce2f7e2de7ef9914b9ed6f28/public/legonroomate.png" 
                        alt="MyKart Roommate Run Feature Screen" 
                        className="w-full rounded-[2.5rem] shadow-2xl border-8 border-white"
                      />
                   </div>
                </div>
             </div>
             {/* Decorative blob */}
             <div className="absolute top-0 right-0 w-96 h-96 bg-orange-200/20 rounded-full blur-3xl -z-0 translate-x-1/2 -translate-y-1/2"></div>
           </div>
        </section>
        {/* Unified Kommunity Truck & Logistics Space */}
        <div className="max-w-6xl mx-auto px-4 w-full flex flex-col gap-12">
          <div id="kommunity-truck" className="bg-white dark:bg-white/5 rounded-[4rem] border border-gray-100 shadow-2xl overflow-hidden">
            {/* Live Tracking Header & Map */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center p-10 md:p-20 relative overflow-hidden">
               <div className="absolute -top-40 -left-40 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>
               <div className="space-y-10 relative z-10">
                  <div className="inline-flex items-center gap-3 px-5 py-2 bg-primary/10 rounded-full border border-primary/20">
                    <span className="material-symbols-outlined text-primary text-[20px] animate-pulse">near_me</span>
                    <span className="text-xs font-black text-primary uppercase tracking-[0.3em]">Live Interaction Mockup</span>
                  </div>
                  <h2 className="text-5xl md:text-7xl font-black text-dark dark:text-white leading-[0.9] tracking-tighter">
                    Kommunity <br/> <span className="text-primary italic">Truck.</span>
                  </h2>
                  <p className="text-xl text-muted dark:text-gray-300 leading-relaxed font-medium max-w-md">
                    We've built an intuitive visual feedback system for our mobile hubs. 
                    Monitor the K-Truck route exactly as it navigates your neighborhood.
                  </p>
                  <div className="flex gap-6 pt-4">
                     <div className="flex flex-col">
                        <span className="text-4xl font-black text-dark dark:text-white">100%</span>
                        <span className="text-[10px] font-black text-muted dark:text-gray-300 uppercase tracking-widest">Transparency</span>
                     </div>
                     <div className="w-px h-12 bg-gray-200"></div>
                     <div className="flex flex-col">
                        <span className="text-4xl font-black text-dark dark:text-white">&lt;1m</span>
                        <span className="text-[10px] font-black text-muted dark:text-gray-300 uppercase tracking-widest">GPS Accuracy</span>
                     </div>
                  </div>
               </div>
               <div className="h-[500px] lg:h-[650px] w-full">
                  <LiveTruckMap />
               </div>
            </div>

            {/* Weekly Routes - Hidden Hero to group under the same space */}
            <div id="planned-routes" className="bg-bg-light/50 border-t border-gray-100 py-16">
              <TruckSchedule showHero={false} />
            </div>
          </div>

          <div className="mt-24 py-20 border-t border-gray-100">
             <div className="mb-16">
                <span className="text-primary font-bold text-xs uppercase tracking-widest block mb-4">EXTENDED CAPABILITIES</span>
                <h2 className="text-4xl md:text-6xl font-black text-dark dark:text-white tracking-tighter mb-4">Other Features in MVP.</h2>
                <p className="text-xl text-muted dark:text-gray-300 font-medium max-w-2xl leading-relaxed">
                  Beyond tracking and scheduling, MyKart is packed with tools designed to simplify your life and support local ecosystems.
                </p>
             </div>
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {mvpFeatures.map((feature, idx) => (
                   <div key={idx} className="bg-white dark:bg-white/5 p-8 rounded-[2.5rem] border border-gray-100 shadow-sm hover:border-primary/30 transition-all group">
                      <div className="w-14 h-14 bg-primary/5 rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                         <span className="material-symbols-outlined text-[32px]">{feature.icon}</span>
                      </div>
                      <h4 className="text-xl font-black text-dark dark:text-white mb-2 leading-tight">{feature.title}</h4>
                      <p className="text-muted dark:text-gray-300 font-medium text-sm leading-relaxed">{feature.text}</p>
                   </div>
                ))}
             </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Wireframes;
