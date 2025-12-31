import React, { useState, useEffect, useRef } from 'react';
import TruckSchedule from './TruckSchedule';

// --- COMPONENT 1: KOMMUNITY TRUCK JOURNEY SIMULATION ---
const KommunityTruckJourney: React.FC = () => {
  const [stage, setStage] = useState(0); 
  const [subTick, setSubTick] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setStage(1), 4000),   // T+4s
      setTimeout(() => setStage(2), 8000),   // T+8s
      setTimeout(() => setStage(3), 16000),  // T+16s
      setTimeout(() => setStage(4), 28000),  // T+28s
      setTimeout(() => setStage(5), 42000),  // T+42s
      setTimeout(() => setStage(6), 58000),  // T+58s
      setTimeout(() => setStage(7), 70000),  // T+70s
      setTimeout(() => setStage(0), 80000),  // Loop
    ];
    
    const interval = setInterval(() => {
      setSubTick(prev => prev + 1);
    }, 1000);

    return () => {
      timers.forEach(t => clearTimeout(t));
      clearInterval(interval);
    };
  }, [stage === 0]);

  return (
    <div className="w-full h-[500px] lg:h-[600px] bg-[#e8eaf6] dark:bg-[#1a1a1a] relative overflow-hidden rounded-[2rem] border-4 border-dark dark:border-gray-700 shadow-2xl transition-colors duration-300 font-sans select-none">
      <div className="absolute inset-0 opacity-10 dark:opacity-20" 
           style={{ backgroundImage: 'linear-gradient(#9fa8da 1px, transparent 1px), linear-gradient(90deg, #9fa8da 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      
      {/* STAGE 0: INTRO */}
      <div className={`absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-700 ${stage === 0 ? 'opacity-100 z-20' : 'opacity-0 z-0'}`}>
         <div className="relative mb-8">
            <div className="w-32 h-32 bg-primary/10 rounded-full flex items-center justify-center animate-[slideRight_3s_ease-in-out_infinite]">
               <span className="material-symbols-outlined text-6xl text-primary">local_shipping</span>
            </div>
            <div className="absolute -bottom-4 left-[-100px] right-[-100px] h-2 bg-gray-300 dark:bg-gray-700 rounded-full overflow-hidden">
               <div className="w-full h-full bg-dashed-line animate-[roadScroll_1s_linear_infinite]"></div>
            </div>
         </div>
         <h2 className="text-4xl font-black text-dark dark:text-white mb-2 text-center">Kommunity Truck Delivery</h2>
         <p className="text-lg text-muted dark:text-gray-400 font-medium tracking-wide">Community-powered grocery logistics</p>
      </div>

      {/* STAGE 1: AREA DETECTION */}
      <div className={`absolute inset-0 flex flex-col items-center justify-center bg-white/90 dark:bg-black/90 backdrop-blur-sm transition-opacity duration-700 ${stage === 1 ? 'opacity-100 z-20' : 'opacity-0 z-0'}`}>
         <div className="w-20 h-20 bg-gray-100 dark:bg-white/10 rounded-full flex items-center justify-center mb-6 animate-bounce">
            <span className="material-symbols-outlined text-4xl text-dark dark:text-white">location_on</span>
         </div>
         <h3 className="text-2xl font-bold text-dark dark:text-white mb-1">Your area: <span className="text-primary">Madina</span></h3>
         <div className="mt-6 space-y-3 w-full max-w-sm px-6">
            <div className="flex items-center gap-3 p-3 bg-red-50 dark:bg-red-900/20 border border-red-100 dark:border-red-900/30 rounded-xl opacity-60">
               <span className="material-symbols-outlined text-red-500">block</span>
               <span className="text-sm font-bold text-red-600 dark:text-red-400">Standard delivery unavailable</span>
            </div>
            <div className="flex items-center gap-3 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-900/30 rounded-xl shadow-lg transform scale-105 transition-transform">
               <span className="material-symbols-outlined text-green-600 dark:text-green-400">check_circle</span>
               <span className="text-sm font-bold text-green-700 dark:text-green-400">Kommunity Truck available</span>
            </div>
         </div>
      </div>

      {/* STAGE 2: SCHEDULE VIEW */}
      <div className={`absolute inset-0 flex flex-col items-center justify-center transition-all duration-700 ${stage === 2 ? 'translate-y-0 opacity-100 z-20' : 'translate-y-10 opacity-0 z-0'}`}>
         <div className="w-full max-w-md bg-white dark:bg-[#232323] rounded-3xl shadow-2xl border border-gray-100 dark:border-white/10 overflow-hidden m-4">
            <div className="bg-primary p-6 text-white text-center">
               <h3 className="text-2xl font-black uppercase tracking-tight">Madina Kommunity Truck</h3>
               <p className="text-white/80 text-sm font-medium mt-1">Scheduled Route</p>
            </div>
            <div className="p-8 space-y-6">
               <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-gray-50 dark:bg-white/5 rounded-full flex items-center justify-center text-primary shrink-0">
                     <span className="material-symbols-outlined">calendar_month</span>
                  </div>
                  <div>
                     <p className="text-xs text-muted dark:text-gray-400 uppercase font-bold tracking-wider">Day & Time</p>
                     <p className="text-lg font-black text-dark dark:text-white">Friday</p>
                     <p className="text-sm font-medium text-dark dark:text-gray-300">4:00 PM – 7:00 PM</p>
                  </div>
               </div>
               <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-gray-50 dark:bg-white/5 rounded-full flex items-center justify-center text-primary shrink-0">
                     <span className="material-symbols-outlined">share_location</span>
                  </div>
                  <div>
                     <p className="text-xs text-muted dark:text-gray-400 uppercase font-bold tracking-wider">Pickup Location</p>
                     <p className="text-lg font-black text-dark dark:text-white">Madina Main Junction</p>
                     <p className="text-xs text-orange-500 font-bold mt-1">Stop-based Pickup</p>
                  </div>
               </div>
            </div>
         </div>
      </div>

      {/* STAGE 3: JOINING TRUCK */}
      <div className={`absolute inset-0 flex flex-col items-center justify-center bg-white/95 dark:bg-black/95 transition-opacity duration-500 ${stage === 3 ? 'opacity-100 z-20' : 'opacity-0 z-0'}`}>
         <div className="relative w-32 h-32 flex items-center justify-center mb-8">
            <div className="absolute inset-0 border-4 border-gray-100 dark:border-white/10 rounded-full"></div>
            <div className="absolute inset-0 border-4 border-t-primary border-r-primary border-b-transparent border-l-transparent rounded-full animate-spin"></div>
            <span className="material-symbols-outlined text-5xl text-dark dark:text-white animate-pulse">local_shipping</span>
         </div>
         <h3 className="text-2xl font-black text-dark dark:text-white mb-2 text-center">You're on the Truck!</h3>
         <p className="text-muted dark:text-gray-400 mb-8 font-medium">Madina Friday Route</p>
         <div className="flex items-center gap-3 bg-white dark:bg-white/10 px-6 py-3 rounded-full shadow-lg border border-gray-100 dark:border-white/10">
            <div className="flex -space-x-2">
               {[1,2,3].map(i => <div key={i} className="w-6 h-6 rounded-full bg-gray-300 border-2 border-white dark:border-gray-800"></div>)}
            </div>
            <span className="text-sm font-bold text-dark dark:text-white">27 community orders onboard</span>
         </div>
      </div>

      {/* STAGE 4: PROCESSING */}
      <div className={`absolute inset-0 flex flex-col items-center justify-center px-6 transition-all duration-700 ${stage === 4 ? 'opacity-100 z-20' : 'opacity-0 z-0'}`}>
         <h3 className="text-xl font-black text-dark dark:text-white mb-10 tracking-tight">Order Processing</h3>
         <div className="w-full max-w-lg relative">
            <div className="absolute top-4 left-0 w-full h-1 bg-gray-200 dark:bg-gray-700 rounded-full"></div>
            <div className={`absolute top-4 left-0 h-1 bg-primary rounded-full transition-all duration-[8000ms] ease-linear`} style={{ width: subTick > 1 ? '100%' : '10%' }}></div>
            <div className="flex justify-between relative z-10 w-full">
               <div className="flex flex-col items-center gap-2">
                  <div className="w-9 h-9 bg-primary text-white rounded-full flex items-center justify-center shadow-lg transition-transform duration-500 scale-110">
                     <span className="material-symbols-outlined text-sm">shopping_cart</span>
                  </div>
                  <span className="text-xs font-bold text-dark dark:text-white">Placed</span>
               </div>
               <div className="flex flex-col items-center gap-2">
                  <div className={`w-9 h-9 rounded-full flex items-center justify-center shadow-lg transition-all duration-500 ${subTick > 2 ? 'bg-primary text-white scale-110' : 'bg-gray-200 dark:bg-gray-700 text-gray-400'}`}>
                     <span className="material-symbols-outlined text-sm">inventory_2</span>
                  </div>
                  <span className={`text-xs font-bold transition-colors ${subTick > 2 ? 'text-dark dark:text-white' : 'text-gray-400'}`}>Packed</span>
               </div>
               <div className="flex flex-col items-center gap-2">
                  <div className={`w-9 h-9 rounded-full flex items-center justify-center shadow-lg transition-all duration-500 ${subTick > 6 ? 'bg-primary text-white scale-110' : 'bg-gray-200 dark:bg-gray-700 text-gray-400'}`}>
                     <span className="material-symbols-outlined text-sm">local_shipping</span>
                  </div>
                  <span className={`text-xs font-bold transition-colors ${subTick > 6 ? 'text-dark dark:text-white' : 'text-gray-400'}`}>Loaded</span>
               </div>
            </div>
         </div>
      </div>

      {/* STAGE 5: EN ROUTE */}
      <div className={`absolute inset-0 bg-[#e3f2fd] dark:bg-[#0f172a] transition-opacity duration-700 ${stage === 5 ? 'opacity-100 z-20' : 'opacity-0 z-0'}`}>
         <div className="relative w-full h-full">
            <svg className="absolute inset-0 w-full h-full p-10" viewBox="0 0 100 100" preserveAspectRatio="none">
               <path d="M 10,50 L 90,50" stroke="#cbd5e1" strokeWidth="8" strokeLinecap="round" className="dark:stroke-gray-700" />
               <path d="M 10,50 L 90,50" stroke="#fff" strokeWidth="4" strokeLinecap="round" strokeDasharray="8 8" className="dark:stroke-gray-600" />
            </svg>
            <div className="absolute left-[10%] top-1/2 -translate-y-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
               <div className="w-4 h-4 bg-gray-400 rounded-full"></div>
               <span className="text-[10px] font-bold text-muted uppercase">Shoprite</span>
            </div>
            <div className="absolute right-[10%] top-1/2 -translate-y-1/2 translate-x-1/2 flex flex-col items-center gap-2">
               <div className="w-6 h-6 bg-primary rounded-full border-4 border-white shadow-lg"></div>
               <span className="text-xs font-black text-dark dark:text-white uppercase bg-white/80 dark:bg-black/50 px-2 rounded">Madina</span>
            </div>
            <div className="absolute top-1/2 -translate-y-1/2 transition-all duration-[14000ms] ease-linear"
                 style={{ left: stage === 5 ? '85%' : '10%' }}>
               <div className="bg-dark dark:bg-white text-white dark:text-dark p-2 rounded-lg shadow-xl flex items-center gap-2 transform -translate-x-1/2 -translate-y-8">
                  <span className="material-symbols-outlined text-sm">local_shipping</span>
                  <span className="text-xs font-bold whitespace-nowrap">En Route</span>
               </div>
            </div>
         </div>
      </div>

      {/* STAGE 6: PICKUP */}
      <div className={`absolute inset-0 flex flex-col items-center justify-center bg-primary transition-all duration-500 ${stage === 6 ? 'opacity-100 z-20' : 'opacity-0 z-0'}`}>
         <div className="bg-white p-8 rounded-[2rem] shadow-2xl text-center max-w-xs w-full mx-4 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-green-500"></div>
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 text-green-600">
               <span className="material-symbols-outlined text-4xl">flag</span>
            </div>
            <h3 className="text-2xl font-black text-dark mb-2">Truck Arrived!</h3>
            <p className="text-sm text-muted font-medium mb-6">At Madina Main Junction</p>
            <div className="bg-gray-100 p-4 rounded-xl border border-dashed border-gray-300 mb-4">
               <p className="text-[10px] text-muted uppercase font-bold mb-1">Your Pickup Code</p>
               <p className="text-3xl font-mono font-black text-dark tracking-widest">88-2A</p>
            </div>
         </div>
      </div>

      {/* STAGE 7: END */}
      <div className={`absolute inset-0 flex flex-col items-center justify-center bg-dark dark:bg-black transition-opacity duration-700 ${stage === 7 ? 'opacity-100 z-20' : 'opacity-0 z-0'}`}>
         <div className="text-center px-8">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight">
               Lower Costs.<br/>
               <span className="text-primary">Less Traffic.</span>
            </h2>
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 rounded-full border border-white/20">
               <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
               <span className="text-sm font-bold text-white uppercase tracking-widest">Restarting Demo...</span>
            </div>
         </div>
      </div>

      {/* TIMELINE BAR */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gray-200 dark:bg-gray-800 z-50">
         <div 
            className="h-full bg-primary transition-all duration-[1000ms] ease-linear"
            style={{ width: `${(stage / 7) * 100}%` }}
         ></div>
      </div>
    </div>
  );
};

// --- COMPONENT 2: ROOMMATE APP SIM (Auto-Play) ---
const RoommateAppSim: React.FC = () => {
  const [stage, setStage] = useState(0); 
  useEffect(() => {
    const timers = [
      setTimeout(() => setStage(1), 2500),  
      setTimeout(() => setStage(2), 8500),  
      setTimeout(() => setStage(3), 11500), 
      setTimeout(() => setStage(4), 15000), 
      setTimeout(() => setStage(5), 18000), 
      setTimeout(() => setStage(0), 22000), 
    ];
    return () => timers.forEach(t => clearTimeout(t));
  }, [stage === 0]);

  return (
    <div className="bg-white dark:bg-[#121212] w-full max-w-[350px] mx-auto h-[600px] rounded-[3rem] border-[8px] border-dark dark:border-gray-700 shadow-2xl relative overflow-hidden flex flex-col font-sans transition-colors duration-300">
       <div className="h-8 bg-transparent w-full flex justify-between items-center px-6 pt-3 relative z-20">
          <span className="text-[10px] font-bold text-dark dark:text-white">9:41</span>
          <div className="flex gap-1">
             <div className="w-4 h-4 bg-dark dark:bg-white rounded-full opacity-20"></div>
             <div className="w-4 h-4 bg-dark dark:bg-white rounded-full opacity-20"></div>
          </div>
       </div>
       <div className="px-6 pt-4 pb-4 border-b border-gray-100 dark:border-white/5 relative z-10 bg-white dark:bg-[#121212]">
          <div className="flex items-center gap-2 mb-1">
             <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white">
                <span className="material-symbols-outlined text-sm">home</span>
             </div>
             <div>
                <h3 className="text-sm font-black text-dark dark:text-white leading-none">Pent Block B: Room 236 🏠</h3>
                <p className="text-[10px] text-muted dark:text-gray-400">Shoprite • East Legon</p>
             </div>
          </div>
          <div className="flex -space-x-2 mt-2">
             <div className="w-6 h-6 rounded-full bg-blue-500 border-2 border-white dark:border-dark flex items-center justify-center text-[8px] text-white font-bold">AM</div>
             <div className="w-6 h-6 rounded-full bg-purple-500 border-2 border-white dark:border-dark flex items-center justify-center text-[8px] text-white font-bold">KJ</div>
             <div className="w-6 h-6 rounded-full bg-green-500 border-2 border-white dark:border-dark flex items-center justify-center text-[8px] text-white font-bold">ME</div>
             <div className="w-6 h-6 rounded-full bg-gray-100 dark:bg-white/10 border-2 border-white dark:border-dark flex items-center justify-center text-[8px] text-muted font-bold">+</div>
          </div>
       </div>
       <div className="flex-1 bg-gray-50 dark:bg-white/5 p-4 relative overflow-hidden">
          <div className={`absolute inset-0 p-4 transition-all duration-500 ${stage <= 1 ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-full'}`}>
             <p className="text-[10px] font-bold text-muted/60 dark:text-gray-500 uppercase tracking-widest mb-4 text-center">Live Activity</p>
             <div className="space-y-3">
                <div className={`flex items-center gap-3 bg-white dark:bg-white/5 p-3 rounded-2xl shadow-sm border border-gray-100 dark:border-white/5 transition-all duration-500 ${stage >= 1 ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                   <div className="w-10 h-10 bg-orange-50 rounded-xl flex items-center justify-center text-xl">🍚</div>
                   <div className="flex-1">
                      <p className="text-xs font-bold text-dark dark:text-white">Rice (5kg)</p>
                      <p className="text-[10px] text-blue-500 font-bold">Added by Ama</p>
                   </div>
                   <span className="text-xs font-black text-dark dark:text-white">GH₵70</span>
                </div>
                <div className={`flex items-center gap-3 bg-white dark:bg-white/5 p-3 rounded-2xl shadow-sm border border-gray-100 dark:border-white/5 transition-all duration-500 delay-700 ${stage >= 1 ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                   <div className="w-10 h-10 bg-yellow-50 rounded-xl flex items-center justify-center text-xl">🥚</div>
                   <div className="flex-1">
                      <p className="text-xs font-bold text-dark dark:text-white">Eggs (Crate)</p>
                      <p className="text-[10px] text-purple-500 font-bold">Added by Kojo</p>
                   </div>
                   <span className="text-xs font-black text-dark dark:text-white">GH₵60</span>
                </div>
                <div className={`flex items-center gap-3 bg-white dark:bg-white/5 p-3 rounded-2xl shadow-sm border border-gray-100 dark:border-white/5 transition-all duration-500 delay-[1500ms] ${stage >= 1 ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                   <div className="w-10 h-10 bg-red-50 rounded-xl flex items-center justify-center text-xl">🍜</div>
                   <div className="flex-1">
                      <p className="text-xs font-bold text-dark dark:text-white">Indomie (Box)</p>
                      <p className="text-[10px] text-green-500 font-bold">Added by You</p>
                   </div>
                   <span className="text-xs font-black text-dark dark:text-white">GH₵80</span>
                </div>
             </div>
          </div>
          <div className={`absolute inset-0 p-4 transition-all duration-500 ${stage >= 2 && stage < 5 ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'}`}>
             <p className="text-[10px] font-bold text-muted/60 dark:text-gray-500 uppercase tracking-widest mb-4 text-center">Smart Split Breakdown</p>
             <div className="bg-white dark:bg-white/5 rounded-2xl border border-gray-100 dark:border-white/5 p-4 shadow-sm space-y-4">
                <div className="flex justify-between items-center">
                   <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-blue-500 text-white flex items-center justify-center text-[8px] font-bold">AM</div>
                      <span className="text-xs font-bold text-dark dark:text-white">Ama</span>
                   </div>
                   <div className="text-right">
                      <span className="block text-xs font-black text-dark dark:text-white">GH₵ 70.00</span>
                      {stage >= 4 ? (
                         <span className="text-[8px] font-bold text-green-500 flex items-center justify-end gap-1"><span className="material-symbols-outlined text-[10px]">check_circle</span> PAID</span>
                      ) : (
                         <span className="text-[8px] font-bold text-orange-500">Pending...</span>
                      )}
                   </div>
                </div>
                <div className="flex justify-between items-center">
                   <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-purple-500 text-white flex items-center justify-center text-[8px] font-bold">KJ</div>
                      <span className="text-xs font-bold text-dark dark:text-white">Kojo</span>
                   </div>
                   <div className="text-right">
                      <span className="block text-xs font-black text-dark dark:text-white">GH₵ 60.00</span>
                      {stage >= 4 ? (
                         <span className="text-[8px] font-bold text-green-500 flex items-center justify-end gap-1"><span className="material-symbols-outlined text-[10px]">check_circle</span> PAID</span>
                      ) : (
                         <span className="text-[8px] font-bold text-orange-500">Pending...</span>
                      )}
                   </div>
                </div>
                <div className="flex justify-between items-center bg-green-50 dark:bg-green-900/20 p-2 rounded-lg -mx-2">
                   <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-green-500 text-white flex items-center justify-center text-[8px] font-bold">ME</div>
                      <span className="text-xs font-bold text-dark dark:text-white">You</span>
                   </div>
                   <div className="text-right">
                      <span className="block text-xs font-black text-dark dark:text-white">GH₵ 80.00</span>
                      {stage >= 4 ? (
                         <span className="text-[8px] font-bold text-green-500 flex items-center justify-end gap-1"><span className="material-symbols-outlined text-[10px]">check_circle</span> PAID</span>
                      ) : (
                         <button className="text-[8px] font-bold bg-dark text-white px-2 py-1 rounded shadow-sm">PAY NOW</button>
                      )}
                   </div>
                </div>
                <div className="border-t border-dashed border-gray-200 pt-2 mt-2 flex justify-between">
                   <span className="text-xs font-bold text-muted dark:text-gray-400">Total Cart</span>
                   <span className="text-sm font-black text-dark dark:text-white">GH₵ 210.00</span>
                </div>
             </div>
          </div>
          <div className={`absolute inset-0 flex flex-col items-center justify-center p-6 text-center transition-all duration-500 ${stage === 5 ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
             <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center text-white mb-4 shadow-xl shadow-green-200 dark:shadow-none animate-bounce">
                <span className="material-symbols-outlined text-4xl">local_shipping</span>
             </div>
             <h3 className="text-xl font-black text-dark dark:text-white mb-2">Order Scheduled!</h3>
             <p className="text-xs text-muted dark:text-gray-300 mb-6">Everyone has paid. Your roommate run is confirmed.</p>
             <div className="w-full bg-white dark:bg-white/5 p-3 rounded-xl border border-gray-100 dark:border-white/5">
                <p className="text-[10px] font-bold text-muted uppercase tracking-widest mb-1">Estimated Delivery</p>
                <p className="text-sm font-black text-primary">Today, 6:00 PM</p>
             </div>
          </div>
       </div>
       <div className="bg-white dark:bg-[#121212] p-4 border-t border-gray-100 dark:border-white/5 flex justify-between items-center relative z-10">
          <div className="flex flex-col gap-1 w-full">
              <div className="h-1 w-full bg-gray-100 dark:bg-white/10 rounded-full overflow-hidden">
                 <div 
                   className="h-full bg-primary transition-all duration-[500ms] ease-linear"
                   style={{ width: `${(stage / 5) * 100}%` }}
                 ></div>
              </div>
              <p className="text-[8px] text-center text-muted dark:text-gray-500 mt-1 uppercase tracking-widest font-bold">
                 {stage === 0 ? "Loading Group..." : 
                  stage === 1 ? "Roommates adding items..." : 
                  stage === 2 ? "Reviewing Cart..." : 
                  stage === 3 ? "Splitting Bill..." : 
                  stage === 4 ? "Processing Payments..." : "Order Confirmed"}
              </p>
          </div>
       </div>
    </div>
  );
};

// --- COMPONENT 3: GHANA CARD VERIFICATION JOURNEY ---
const GhanaCardVerificationJourney: React.FC = () => {
  const [stage, setStage] = useState(0); 
  const [subTick, setSubTick] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setStage(1), 5000),   // T+5s: Scan
      setTimeout(() => setStage(2), 12000),  // T+12s: Processing
      setTimeout(() => setStage(3), 22000),  // T+22s: Cross-Check
      setTimeout(() => setStage(4), 30000),  // T+30s: Success
      setTimeout(() => setStage(5), 40000),  // T+40s: Access
      setTimeout(() => setStage(6), 50000),  // T+50s: End
      setTimeout(() => setStage(0), 60000),  // T+60s: Loop
    ];
    
    const interval = setInterval(() => {
      setSubTick(prev => prev + 1);
    }, 1000);

    return () => {
      timers.forEach(t => clearTimeout(t));
      clearInterval(interval);
    };
  }, [stage === 0]);

  return (
    <div className="bg-white dark:bg-white/5 rounded-3xl p-6 border border-gray-100 dark:border-white/10 shadow-sm relative overflow-hidden h-[400px] flex flex-col">
       <div className="mb-4">
          <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-2">
             <span className="material-symbols-outlined">verified_user</span>
          </div>
          <h4 className="font-bold text-dark dark:text-white">Ghana Card Verification</h4>
          <p className="text-xs text-muted dark:text-gray-300">Identity Security Protocol</p>
       </div>
       
       <div className="flex-1 bg-gray-50 dark:bg-black/20 rounded-xl relative flex items-center justify-center overflow-hidden border border-gray-100 dark:border-white/5 p-4 text-center">
          
          {/* STAGE 0: INTRO */}
          <div className={`absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-500 ${stage === 0 ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}>
             <h3 className="text-xl font-black text-dark dark:text-white mb-2 leading-tight">Identity Verification<br/>Required</h3>
             <p className="text-xs text-muted dark:text-gray-400 max-w-[200px] mb-6">To host or manage community deliveries, identity verification is required.</p>
             <div className="inline-flex items-center gap-1 px-3 py-1 bg-white dark:bg-white/10 rounded-full border border-gray-200 dark:border-white/10">
                <img src="/logo.png" className="w-3 h-3 opacity-50" alt="" />
                <span className="text-[9px] font-bold text-gray-500 dark:text-gray-400 uppercase">Powered by Ghana Card</span>
             </div>
          </div>

          {/* STAGE 1: SCAN SIMULATION */}
          <div className={`absolute inset-0 flex flex-col items-center justify-center transition-all duration-500 ${stage === 1 ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}>
             <div className="w-48 h-28 bg-gradient-to-br from-[#2F855A] to-[#ECC94B] rounded-xl shadow-xl relative overflow-hidden mb-4 animate-[float_3s_ease-in-out_infinite]">
                 {/* Card Details */}
                 <div className="absolute top-3 left-3 w-10 h-10 bg-gray-200/50 rounded-md"></div>
                 <div className="absolute top-4 left-16 space-y-2">
                    <div className="w-24 h-2 bg-white/30 rounded-full"></div>
                    <div className="w-16 h-2 bg-white/30 rounded-full"></div>
                 </div>
                 <div className="absolute bottom-2 right-2 w-6 h-6 rounded-full border border-white/20 flex items-center justify-center text-[5px] text-white font-black opacity-50">ECOWAS</div>
                 {/* Scanning Light */}
                 <div className="absolute inset-0 bg-white/20 h-[2px] w-full top-0 animate-[scan_1.5s_linear_infinite]"></div>
             </div>
             <p className="text-xs font-bold text-primary animate-pulse">Scanning Ghana Card...</p>
          </div>

          {/* STAGE 2: PROCESSING */}
          <div className={`absolute inset-0 flex flex-col items-center justify-center transition-all duration-500 ${stage === 2 ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}>
             <div className="w-12 h-12 border-4 border-gray-200 dark:border-gray-700 border-t-primary rounded-full animate-spin mb-4"></div>
             <p className="text-sm font-bold text-dark dark:text-white">
                {subTick % 3 === 0 ? "Validating identity..." : subTick % 3 === 1 ? "Checking national registry..." : "Confirming uniqueness..."}
             </p>
             <p className="text-[10px] text-muted dark:text-gray-400 mt-2 flex items-center gap-1">
                <span className="material-symbols-outlined text-[10px]">lock</span> All data securely processed
             </p>
          </div>

          {/* STAGE 3: CROSS-CHECK */}
          <div className={`absolute inset-0 flex flex-col items-center justify-center transition-all duration-500 ${stage === 3 ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}>
             <div className="space-y-3 w-full max-w-[200px]">
                <div className="flex items-center gap-3 p-2 bg-white dark:bg-white/5 rounded-lg border border-gray-100 dark:border-white/5 animate-in slide-in-from-bottom-2 duration-300">
                   <span className="material-symbols-outlined text-green-500 text-sm">check_circle</span>
                   <span className="text-xs font-bold text-dark dark:text-white">Name matched</span>
                </div>
                <div className="flex items-center gap-3 p-2 bg-white dark:bg-white/5 rounded-lg border border-gray-100 dark:border-white/5 animate-in slide-in-from-bottom-2 duration-500 delay-300">
                   <span className="material-symbols-outlined text-green-500 text-sm">check_circle</span>
                   <span className="text-xs font-bold text-dark dark:text-white">ID number valid</span>
                </div>
                <div className="flex items-center gap-3 p-2 bg-white dark:bg-white/5 rounded-lg border border-gray-100 dark:border-white/5 animate-in slide-in-from-bottom-2 duration-700 delay-500">
                   <span className="material-symbols-outlined text-green-500 text-sm">check_circle</span>
                   <span className="text-xs font-bold text-dark dark:text-white">Region verified</span>
                </div>
             </div>
             <p className="text-xs font-bold text-green-600 dark:text-green-400 mt-4">Identity Confirmed</p>
          </div>

          {/* STAGE 4: SUCCESS */}
          <div className={`absolute inset-0 flex flex-col items-center justify-center transition-all duration-500 ${stage === 4 ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}>
             <div className="w-16 h-16 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center text-green-600 dark:text-green-400 mb-4 animate-bounce">
                <span className="material-symbols-outlined text-4xl">verified_user</span>
             </div>
             <h3 className="text-xl font-black text-dark dark:text-white mb-2">Verification Complete</h3>
             <p className="text-xs text-muted dark:text-gray-400 mb-4">You are now a verified community member</p>
             <div className="bg-green-600 text-white px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg">Verified Host</div>
          </div>

          {/* STAGE 5: ACCESS GRANTED */}
          <div className={`absolute inset-0 flex flex-col items-center justify-center p-6 transition-all duration-500 ${stage === 5 ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}>
             <div className="bg-white dark:bg-gray-800 w-full rounded-2xl shadow-xl p-5 border border-primary/20">
                <h4 className="font-black text-dark dark:text-white mb-4 uppercase text-xs tracking-widest text-left">Unlocked Features</h4>
                <div className="space-y-3">
                   <div className="flex items-center gap-2">
                      <div className="w-5 h-5 bg-primary/10 rounded-full flex items-center justify-center text-primary"><span className="material-symbols-outlined text-[10px]">local_shipping</span></div>
                      <span className="text-xs font-bold text-dark dark:text-white">Host Kommunity Truck</span>
                   </div>
                   <div className="flex items-center gap-2">
                      <div className="w-5 h-5 bg-primary/10 rounded-full flex items-center justify-center text-primary"><span className="material-symbols-outlined text-[10px]">groups</span></div>
                      <span className="text-xs font-bold text-dark dark:text-white">Manage pickup groups</span>
                   </div>
                   <div className="flex items-center gap-2">
                      <div className="w-5 h-5 bg-primary/10 rounded-full flex items-center justify-center text-primary"><span className="material-symbols-outlined text-[10px]">star</span></div>
                      <span className="text-xs font-bold text-dark dark:text-white">Appear as verified organizer</span>
                   </div>
                </div>
             </div>
             <p className="text-[10px] text-muted dark:text-gray-400 mt-4 font-medium">Trusted hosts help keep the community safe.</p>
          </div>

          {/* STAGE 6: END */}
          <div className={`absolute inset-0 flex flex-col items-center justify-center transition-all duration-500 ${stage === 6 ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}>
             <h3 className="text-lg font-black text-dark dark:text-white mb-4 text-center leading-tight">Verification builds<br/>Trust across the<br/><span className="text-primary">Kommunity</span></h3>
             <div className="flex items-center gap-3">
                <span className="text-[10px] font-bold text-muted dark:text-gray-400 uppercase tracking-widest">Secure</span>
                <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                <span className="text-[10px] font-bold text-muted dark:text-gray-400 uppercase tracking-widest">Local</span>
                <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                <span className="text-[10px] font-bold text-muted dark:text-gray-400 uppercase tracking-widest">Community</span>
             </div>
             <div className="mt-8 text-[9px] text-gray-300 dark:text-gray-600 font-mono">RESTARTING DEMO...</div>
          </div>

       </div>
       
       {/* PROGRESS BAR */}
       <div className="absolute bottom-0 left-0 w-full h-1 bg-gray-100 dark:bg-white/5">
          <div 
             className="h-full bg-primary transition-all duration-[1000ms] ease-linear"
             style={{ width: `${(stage / 6) * 100}%` }}
          ></div>
       </div>
    </div>
  );
};

// --- MAIN COMPONENT ---
const Wireframes: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  
  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 320;
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

  return (
    <div className="flex flex-col w-full bg-bg-light min-h-screen overflow-x-hidden transition-colors duration-300">
      <section className="py-24 px-4 bg-white dark:bg-white/5 border-b border-gray-100 dark:border-white/10">
        <div className="max-w-6xl mx-auto">
          <span className="text-primary font-bold text-xs uppercase tracking-widest block mb-4">PRODUCTION PREVIEW</span>
          <h1 className="text-5xl md:text-8xl font-black mb-8 text-dark dark:text-white tracking-tighter">View MVP.</h1>
          <p className="text-xl text-muted dark:text-gray-300 font-medium max-w-2xl leading-relaxed">
            Explore the core features of the MyKart app, from high-fidelity screens to our interactive Kommunity Truck tracking system.
          </p>
        </div>
      </section>

      <section className="py-20 flex flex-col gap-32">
        <div className="relative w-full group">
          <button 
            onClick={() => scroll('left')}
            className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 md:w-14 md:h-14 bg-white/90 dark:bg-white/10 backdrop-blur-md border border-gray-200 dark:border-white/10 rounded-full flex items-center justify-center shadow-lg text-dark dark:text-white hover:bg-primary hover:text-white transition-all active:scale-90 opacity-100 md:opacity-0 md:group-hover:opacity-100"
            aria-label="Scroll left"
          >
            <span className="material-symbols-outlined text-2xl md:text-3xl">chevron_left</span>
          </button>
          
          <button 
            onClick={() => scroll('right')}
            className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 md:w-14 md:h-14 bg-white/90 dark:bg-white/10 backdrop-blur-md border border-gray-200 dark:border-white/10 rounded-full flex items-center justify-center shadow-lg text-dark dark:text-white hover:bg-primary hover:text-white transition-all active:scale-90 opacity-100 md:opacity-0 md:group-hover:opacity-100"
            aria-label="Scroll right"
          >
            <span className="material-symbols-outlined text-2xl md:text-3xl">chevron_right</span>
          </button>

          <div 
            ref={scrollRef}
            className="flex gap-8 md:gap-12 overflow-x-auto no-scrollbar scroll-smooth px-8 py-12 snap-x snap-mandatory"
          >
            {appScreens.map((screen, idx) => (
              <div 
                key={idx} 
                className="inline-block w-[280px] md:w-[340px] group flex-shrink-0 snap-center md:snap-start"
              >
                <div className="relative aspect-[9/19] rounded-[3rem] border-[8px] md:border-[12px] border-dark overflow-hidden shadow-2xl bg-white dark:bg-white/5 transition-all duration-500 group-hover:scale-[1.02] group-hover:-translate-y-2 group-hover:shadow-primary/20">
                  <img src={screen.img} className="w-full h-full object-cover" alt={screen.title} />
                </div>
                <div className="mt-8 text-center">
                  <h4 className="text-xl font-black text-dark dark:text-white group-hover:text-primary transition-colors">{screen.title}</h4>
                  <p className="text-muted dark:text-gray-300 text-sm font-medium px-4 mt-2">{screen.description}</p>
                </div>
              </div>
            ))}
            <div className="w-4 shrink-0"></div>
          </div>
          
          <div className="absolute inset-y-0 left-0 w-24 md:w-32 bg-gradient-to-r from-bg-light dark:from-[#23170f] to-transparent z-10 pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-24 md:w-32 bg-gradient-to-l from-bg-light dark:from-[#23170f] to-transparent z-10 pointer-events-none"></div>
        </div>

        {/* --- ROOMMATE RUN SPOTLIGHT --- */}
        <section className="mx-auto max-w-6xl px-4">
           <div className="bg-[#FFF8F0] dark:bg-white/5 rounded-[3rem] p-8 md:p-16 overflow-hidden border border-orange-100 dark:border-white/10 relative transition-colors">
             <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start relative z-10">
                <div className="order-2 lg:order-1 self-center">
                   <div className="inline-flex items-center gap-2 px-4 py-2 bg-white dark:bg-white/10 text-primary font-bold rounded-full text-sm mb-6 shadow-sm border border-orange-100 dark:border-white/5">
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
                         <div className="w-10 h-10 bg-white dark:bg-white/10 rounded-xl shadow-sm flex items-center justify-center text-primary shrink-0 mt-1">
                            <span className="material-symbols-outlined">call_split</span>
                         </div>
                         <div>
                            <h4 className="font-bold text-dark dark:text-white">Split Payments Instantly</h4>
                            <p className="text-sm text-muted dark:text-gray-300">Everyone pays their exact share via Mobile Money. No more "I owe you".</p>
                         </div>
                      </div>
                      <div className="flex items-start gap-4">
                         <div className="w-10 h-10 bg-white dark:bg-white/10 rounded-xl shadow-sm flex items-center justify-center text-primary shrink-0 mt-1">
                            <span className="material-symbols-outlined">savings</span>
                         </div>
                         <div>
                            <h4 className="font-bold text-dark dark:text-white">Slash Delivery Fees</h4>
                            <p className="text-sm text-muted dark:text-gray-300">Split one delivery fee among 4 people. Save up to 15 GHS per order.</p>
                         </div>
                      </div>
                   </div>
                </div>
                
                <div className="order-1 lg:order-2 flex flex-col items-center gap-12">
                   {/* 1. Static Image */}
                   <div className="relative w-[280px] rotate-3 hover:rotate-0 transition-all duration-500">
                      <img 
                        src="https://raw.githubusercontent.com/princessasabea/princess-website/a73b75287274cf45ce2f7e2de7ef9914b9ed6f28/public/legonroomate.png" 
                        alt="MyKart Roommate Run Feature Screen" 
                        className="w-full rounded-[2.5rem] shadow-2xl border-8 border-white dark:border-gray-800"
                      />
                   </div>
                   {/* 2. Divider */}
                   <div className="flex items-center gap-4 w-full justify-center opacity-50">
                      <span className="h-px w-12 bg-dark dark:bg-white"></span>
                      <span className="text-[10px] font-black uppercase text-dark dark:text-white tracking-widest">Live Interactive Demo</span>
                      <span className="h-px w-12 bg-dark dark:bg-white"></span>
                   </div>
                   {/* 3. Interactive Simulation */}
                   <div className="relative w-full max-w-[350px]">
                      <RoommateAppSim />
                   </div>
                </div>
             </div>
             <div className="absolute top-0 right-0 w-96 h-96 bg-orange-200/20 dark:bg-primary/10 rounded-full blur-3xl -z-0 translate-x-1/2 -translate-y-1/2"></div>
           </div>
        </section>

        {/* --- INTERACTIVE FEATURE SIMULATIONS --- */}
        <div className="max-w-6xl mx-auto px-4 w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
               {/* Ghana Card Verification (Updated) */}
               <GhanaCardVerificationJourney />
               
               {/* Join Pilot Card */}
               <div className="bg-gradient-to-br from-primary to-orange-600 rounded-3xl p-8 flex flex-col justify-between text-white shadow-lg relative overflow-hidden h-[400px]">
                  <div className="relative z-10">
                    <h3 className="text-3xl font-black mb-4">Join the Pilot</h3>
                    <p className="text-white/80 text-lg mb-8 max-w-xs leading-relaxed">Be the first to test Roommate Run on your campus.</p>
                    <a href="https://tally.so/r/WO2v4v" target="_blank" rel="noreferrer" className="inline-flex px-8 py-4 bg-white text-primary font-black rounded-2xl shadow-xl hover:scale-105 transition-transform active:scale-95">
                       Join Waitlist
                    </a>
                  </div>
                  <div className="absolute bottom-[-40px] right-[-40px] opacity-20">
                     <span className="material-symbols-outlined text-[250px]">rocket_launch</span>
                  </div>
               </div>
            </div>
        </div>

        {/* Unified Kommunity Truck & Logistics Space */}
        <div className="max-w-6xl mx-auto px-4 w-full flex flex-col gap-12">
          <div id="kommunity-truck" className="bg-white dark:bg-white/5 rounded-[4rem] border border-gray-100 dark:border-white/10 shadow-2xl overflow-hidden transition-colors">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center p-10 md:p-20 relative overflow-hidden">
               <div className="absolute -top-40 -left-40 w-96 h-96 bg-primary/5 dark:bg-primary/10 rounded-full blur-[100px] pointer-events-none"></div>
               <div className="space-y-10 relative z-10">
                  <div className="inline-flex items-center gap-3 px-5 py-2 bg-primary/10 dark:bg-primary/20 rounded-full border border-primary/20">
                    <span className="material-symbols-outlined text-primary text-[20px] animate-pulse">local_shipping</span>
                    <span className="text-xs font-black text-primary uppercase tracking-[0.3em]">User Journey Demo</span>
                  </div>
                  <h2 className="text-5xl md:text-7xl font-black text-dark dark:text-white leading-[0.9] tracking-tighter">
                    Kommunity <br/> <span className="text-primary italic">Truck.</span>
                  </h2>
                  <p className="text-xl text-muted dark:text-gray-300 leading-relaxed font-medium max-w-md">
                    Experience the complete lifecycle of a community order. 
                    From area detection to final pickup, see how we group orders to save you money.
                  </p>
                  <div className="flex gap-6 pt-4">
                     <div className="flex flex-col">
                        <span className="text-4xl font-black text-dark dark:text-white">70s</span>
                        <span className="text-[10px] font-black text-muted dark:text-gray-300 uppercase tracking-widest">Full Cycle</span>
                     </div>
                     <div className="w-px h-12 bg-gray-200 dark:bg-white/10"></div>
                     <div className="flex flex-col">
                        <span className="text-4xl font-black text-dark dark:text-white">Auto</span>
                        <span className="text-[10px] font-black text-muted dark:text-gray-300 uppercase tracking-widest">Simulation</span>
                     </div>
                  </div>
               </div>
               <div className="w-full">
                  <KommunityTruckJourney />
               </div>
            </div>
            <div id="planned-routes" className="bg-bg-light/50 dark:bg-black/20 border-t border-gray-100 dark:border-white/10 py-16">
              <TruckSchedule showHero={false} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Wireframes;
