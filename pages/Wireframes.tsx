import React, { useState, useEffect, useRef } from 'react';
import TruckSchedule from './TruckSchedule';

// --- COMPONENT 1: REAL ACCRA ROUTE SIMULATION ---
const LiveTruckMap: React.FC = () => {
  const [progress, setProgress] = useState(0);
  const [isStopped, setIsStopped] = useState(false);
  const [stopTimer, setStopTimer] = useState(0);
  const [statusText, setStatusText] = useState("Loading Route...");

  const STOPS = [
    { percent: 5, name: "Melcom Depot", area: "North Ind. Area" },
    { percent: 45, name: "A&C Mall", area: "East Legon" }, 
    { percent: 90, name: "Community 1", area: "Tema" }
  ];

  useEffect(() => {
    let animationFrameId: number;
    
    const animate = () => {
      if (isStopped) {
        if (Date.now() > stopTimer) setIsStopped(false);
      } else {
        setProgress((prev) => {
          let nextProgress = prev + 0.12;
          if (nextProgress >= 100) nextProgress = 0;
          const stopLocation = STOPS.find(s => Math.abs(s.percent - nextProgress) < 0.5);
          if (stopLocation && stopTimer === 0) {
            setIsStopped(true);
            setStopTimer(Date.now() + 3000);
            return stopLocation.percent;
          }
          if (!stopLocation) setStopTimer(0);
          return nextProgress;
        });
      }

      if (progress < 25) setStatusText("Departing: Melcom Warehouse");
      else if (progress < 40) setStatusText("En Route: Madina Zongo Jxn");
      else if (progress < 50) setStatusText("Arriving: East Legon Hub");
      else if (progress < 75) setStatusText("Heading to: Spintex Road");
      else setStatusText("Final Stretch: Tema Motorway");

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isStopped, stopTimer, progress]);

  const getBezierPos = (t: number) => {
    const safeT = Math.max(0, Math.min(1, t));
    const p0 = { x: 10, y: 20 };
    const p1 = { x: 30, y: 90 };
    const p2 = { x: 60, y: 90 };
    const p3 = { x: 90, y: 30 };
    const oneMinusT = 1 - safeT;
    const x = Math.pow(oneMinusT, 3) * p0.x + 3 * Math.pow(oneMinusT, 2) * safeT * p1.x + 3 * oneMinusT * Math.pow(safeT, 2) * p2.x + Math.pow(safeT, 3) * p3.x;
    const y = Math.pow(oneMinusT, 3) * p0.y + 3 * Math.pow(oneMinusT, 2) * safeT * p1.y + 3 * oneMinusT * Math.pow(safeT, 2) * p2.y + Math.pow(safeT, 3) * p3.y;
    return { x, y };
  };

  const t = progress / 100;
  const pos = getBezierPos(t);
  const lookAheadPos = getBezierPos(Math.min(1, t + 0.01));
  const angle = Math.atan2(lookAheadPos.y - pos.y, lookAheadPos.x - pos.x) * (180 / Math.PI);

  return (
    <div className="w-full h-full bg-[#e8eaf6] dark:bg-[#1a1a1a] relative overflow-hidden rounded-[2rem] border-4 border-dark dark:border-gray-700 shadow-2xl transition-colors duration-300">
      <div className="absolute inset-0 opacity-10 dark:opacity-20" style={{ backgroundImage: 'linear-gradient(#9fa8da 1px, transparent 1px), linear-gradient(90deg, #9fa8da 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      <div className="absolute top-[20%] left-[10%] text-[10px] font-black text-muted/50 uppercase tracking-widest">North Ind. Area</div>
      <div className="absolute bottom-[10%] left-[30%] text-[10px] font-black text-muted/50 uppercase tracking-widest">Madina</div>
      <div className="absolute bottom-[20%] right-[30%] text-[10px] font-black text-muted/50 uppercase tracking-widest">Spintex</div>
      <div className="absolute top-[30%] right-[10%] text-[10px] font-black text-muted/50 uppercase tracking-widest">Tema Comm. 1</div>
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
        <path d="M 10,20 C 30,90 60,90 90,30" fill="none" stroke="#cbd5e1" strokeWidth="12" strokeLinecap="round" className="dark:stroke-gray-700" />
        <path d="M 10,20 C 30,90 60,90 90,30" fill="none" stroke="#fff" strokeWidth="8" strokeLinecap="round" className="dark:stroke-gray-600" />
        <path d="M 10,20 C 30,90 60,90 90,30" fill="none" stroke="#fbbf24" strokeWidth="1" strokeDasharray="4 4" strokeLinecap="round" />
      </svg>
      <div className="absolute z-20 transition-transform duration-75 ease-linear will-change-transform" style={{ left: `${pos.x}%`, top: `${pos.y}%`, transform: `translate(-50%, -50%) rotate(${angle}deg)` }}>
        <div className="relative">
          {isStopped && <div className="absolute left-[-10px] top-1/2 -translate-y-1/2 w-8 h-8 bg-red-500/50 blur-md rounded-full animate-pulse"></div>}
          <div className="w-16 h-9 bg-dark dark:bg-white rounded-lg shadow-2xl border border-white/20 flex items-center justify-between px-1 relative z-10">
            <div className="w-4 h-6 bg-blue-300 dark:bg-blue-900 rounded-sm"></div>
            <span className="text-[7px] font-black text-white dark:text-dark uppercase tracking-tighter">MyKart</span>
            <div className={`w-1 h-6 ${isStopped ? 'bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.8)]' : 'bg-red-900'} rounded-full transition-colors duration-200`}></div>
          </div>
          {isStopped && (
            <div className="absolute -top-20 left-1/2 -translate-x-1/2 bg-white dark:bg-gray-800 p-3 rounded-xl shadow-xl border-2 border-primary animate-in zoom-in slide-in-from-bottom-2 duration-300 min-w-[160px] z-50">
               <div className="flex flex-col items-center text-center">
                  <div className="flex items-center gap-1 mb-1">
                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                    <span className="text-[10px] font-bold text-dark dark:text-white uppercase">Pickup Active</span>
                  </div>
                  <span className="text-xs font-black text-primary uppercase tracking-wider">{statusText.split(':')[1]}</span>
                  <span className="text-[8px] text-muted dark:text-gray-400 mt-1">Departing in 2 mins...</span>
               </div>
               <div className="absolute bottom-[-8px] left-1/2 -translate-x-1/2 w-4 h-4 bg-white dark:bg-gray-800 border-b-2 border-r-2 border-primary rotate-45"></div>
            </div>
          )}
        </div>
      </div>
      <div className="absolute bottom-6 left-6 right-6 bg-white/90 dark:bg-black/80 backdrop-blur-md p-4 rounded-2xl border border-gray-100 dark:border-white/10 shadow-lg flex justify-between items-center">
         <div className="flex flex-col">
            <span className="text-[10px] font-black text-muted dark:text-gray-400 uppercase tracking-widest">Live Status</span>
            <span className="text-sm font-bold text-dark dark:text-white truncate max-w-[200px] md:max-w-none">{statusText}</span>
         </div>
         <div className="hidden md:flex flex-col items-end">
            <span className="text-[10px] font-black text-muted dark:text-gray-400 uppercase tracking-widest">Route ID</span>
            <span className="text-xs font-mono text-primary">KART-ACC-004</span>
         </div>
      </div>
    </div>
  );
};

// --- COMPONENT 2: ROOMMATE GROUP ORDER SIMULATION (AUTO-PLAY) ---
const RoommateAppSim: React.FC = () => {
  const [stage, setStage] = useState(0); 
  // Stages: 0=Intro, 1=AddingItems, 2=CartSummary, 3=SplitBill, 4=Paying, 5=Success

  useEffect(() => {
    // Timeline of the simulation (total loop ~20s)
    const timers = [
      setTimeout(() => setStage(1), 2500),  // Go to Adding Items
      setTimeout(() => setStage(2), 8500),  // Go to Cart Summary (after items added)
      setTimeout(() => setStage(3), 11500), // Go to Bill Split
      setTimeout(() => setStage(4), 15000), // Go to Payment Processing
      setTimeout(() => setStage(5), 18000), // Go to Success
      setTimeout(() => setStage(0), 22000), // Reset Loop
    ];
    return () => timers.forEach(t => clearTimeout(t));
  }, [stage === 0]); // Only re-run when stage resets to 0

  return (
    <div className="bg-white dark:bg-[#121212] w-full max-w-[350px] mx-auto h-[600px] rounded-[3rem] border-[8px] border-dark dark:border-gray-700 shadow-2xl relative overflow-hidden flex flex-col font-sans transition-colors duration-300">
       {/* Phone Status Bar */}
       <div className="h-8 bg-transparent w-full flex justify-between items-center px-6 pt-3 relative z-20">
          <span className="text-[10px] font-bold text-dark dark:text-white">9:41</span>
          <div className="flex gap-1">
             <div className="w-4 h-4 bg-dark dark:bg-white rounded-full opacity-20"></div>
             <div className="w-4 h-4 bg-dark dark:bg-white rounded-full opacity-20"></div>
          </div>
       </div>

       {/* APP HEADER */}
       <div className="px-6 pt-4 pb-4 border-b border-gray-100 dark:border-white/5 relative z-10 bg-white dark:bg-[#121212]">
          <div className="flex items-center gap-2 mb-1">
             <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white">
                <span className="material-symbols-outlined text-sm">home</span>
             </div>
             <div>
                <h3 className="text-sm font-black text-dark dark:text-white leading-none">Legon Flatmates 🏠</h3>
                <p className="text-[10px] text-muted dark:text-gray-400">Shoprite • East Legon</p>
             </div>
          </div>
          {/* Avatars */}
          <div className="flex -space-x-2 mt-2">
             <div className="w-6 h-6 rounded-full bg-blue-500 border-2 border-white dark:border-dark flex items-center justify-center text-[8px] text-white font-bold">AM</div>
             <div className="w-6 h-6 rounded-full bg-purple-500 border-2 border-white dark:border-dark flex items-center justify-center text-[8px] text-white font-bold">KJ</div>
             <div className="w-6 h-6 rounded-full bg-green-500 border-2 border-white dark:border-dark flex items-center justify-center text-[8px] text-white font-bold">ME</div>
             <div className="w-6 h-6 rounded-full bg-gray-100 dark:bg-white/10 border-2 border-white dark:border-dark flex items-center justify-center text-[8px] text-muted font-bold">+</div>
          </div>
       </div>

       {/* MAIN CONTENT AREA - SCROLLABLE */}
       <div className="flex-1 bg-gray-50 dark:bg-white/5 p-4 relative overflow-hidden">
          
          {/* STAGE 0 & 1: LIVE FEED */}
          <div className={`absolute inset-0 p-4 transition-all duration-500 ${stage <= 1 ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-full'}`}>
             <p className="text-[10px] font-bold text-muted/60 dark:text-gray-500 uppercase tracking-widest mb-4 text-center">Live Activity</p>
             
             <div className="space-y-3">
                {/* Item 1 */}
                <div className={`flex items-center gap-3 bg-white dark:bg-white/5 p-3 rounded-2xl shadow-sm border border-gray-100 dark:border-white/5 transition-all duration-500 ${stage >= 1 ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                   <div className="w-10 h-10 bg-orange-50 rounded-xl flex items-center justify-center text-xl">🍚</div>
                   <div className="flex-1">
                      <p className="text-xs font-bold text-dark dark:text-white">Rice (5kg)</p>
                      <p className="text-[10px] text-blue-500 font-bold">Added by Ama</p>
                   </div>
                   <span className="text-xs font-black text-dark dark:text-white">GH₵70</span>
                </div>

                {/* Item 2 - Delayed */}
                <div className={`flex items-center gap-3 bg-white dark:bg-white/5 p-3 rounded-2xl shadow-sm border border-gray-100 dark:border-white/5 transition-all duration-500 delay-700 ${stage >= 1 ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                   <div className="w-10 h-10 bg-yellow-50 rounded-xl flex items-center justify-center text-xl">🥚</div>
                   <div className="flex-1">
                      <p className="text-xs font-bold text-dark dark:text-white">Eggs (Crate)</p>
                      <p className="text-[10px] text-purple-500 font-bold">Added by Kojo</p>
                   </div>
                   <span className="text-xs font-black text-dark dark:text-white">GH₵60</span>
                </div>

                {/* Item 3 - Delayed */}
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

          {/* STAGE 2 & 3 & 4: BILL SPLIT */}
          <div className={`absolute inset-0 p-4 transition-all duration-500 ${stage >= 2 && stage < 5 ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'}`}>
             <p className="text-[10px] font-bold text-muted/60 dark:text-gray-500 uppercase tracking-widest mb-4 text-center">Smart Split Breakdown</p>
             
             <div className="bg-white dark:bg-white/5 rounded-2xl border border-gray-100 dark:border-white/5 p-4 shadow-sm space-y-4">
                {/* Ama Row */}
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

                {/* Kojo Row */}
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

                {/* You Row */}
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

          {/* STAGE 5: SUCCESS */}
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
       
       {/* APP FOOTER (SIMULATED) */}
       <div className="bg-white dark:bg-[#121212] p-4 border-t border-gray-100 dark:border-white/5 flex justify-between items-center relative z-10">
          <div className="flex flex-col gap-1 w-full">
              {/* Progress Bar for Demo */}
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

// --- COMPONENT 3: GHANA CARD MOCK DATA SIM ---
const GhanaCardSim: React.FC = () => {
  const [stage, setStage] = useState(0); 

  useEffect(() => {
    const interval = setInterval(() => {
      setStage(prev => (prev + 1) % 3);
    }, 4000); 
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white dark:bg-white/5 rounded-3xl p-6 border border-gray-100 dark:border-white/10 shadow-sm relative overflow-hidden h-full flex flex-col">
       <div className="mb-4">
          <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-2">
             <span className="material-symbols-outlined">fingerprint</span>
          </div>
          <h4 className="font-bold text-dark dark:text-white">Identity Verification</h4>
          <p className="text-xs text-muted dark:text-gray-300">NIA Database Integration</p>
       </div>
       
       <div className="flex-1 bg-gray-50 dark:bg-black/20 rounded-xl relative flex items-center justify-center overflow-hidden border border-gray-100 dark:border-white/5 p-4">
          <div className={`w-full max-w-[200px] bg-white dark:bg-gray-800 rounded-lg shadow-sm p-3 transition-all duration-500 ${stage === 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 absolute'}`}>
             <div className="flex items-center gap-2 mb-3 border-b border-gray-100 dark:border-white/10 pb-2">
                <img src="/logo.png" className="w-4 h-4 opacity-50" alt="" />
                <span className="text-[10px] font-bold text-gray-400">NIA DATA PREVIEW</span>
             </div>
             <div className="space-y-2">
                <div>
                   <div className="text-[8px] text-gray-400 uppercase">Surname</div>
                   <div className="h-3 w-16 bg-gray-200 dark:bg-white/10 rounded animate-pulse"></div>
                </div>
                <div>
                   <div className="text-[8px] text-gray-400 uppercase">First Name</div>
                   <div className="h-3 w-20 bg-gray-200 dark:bg-white/10 rounded animate-pulse delay-75"></div>
                </div>
                <div>
                   <div className="text-[8px] text-gray-400 uppercase">Card ID</div>
                   <div className="flex items-center gap-1">
                      <span className="text-[10px] font-mono text-dark dark:text-white">GHA-72</span>
                      <div className="h-2 w-12 bg-gray-200 dark:bg-white/10 rounded blur-[2px]"></div>
                   </div>
                </div>
             </div>
             <div className="mt-3 pt-2 border-t border-gray-100 dark:border-white/10 flex justify-between items-center">
                 <span className="text-[8px] text-green-500 font-bold">MATCH FOUND</span>
                 <span className="material-symbols-outlined text-[12px] text-green-500">verified</span>
             </div>
          </div>
          <div className={`w-40 h-24 bg-gradient-to-br from-[#2F855A] to-[#ECC94B] rounded-xl shadow-lg relative transition-all duration-500 ${stage === 2 ? 'opacity-0 scale-90 absolute' : 'opacity-100 scale-100'}`}>
             <div className="absolute top-2 left-2 w-8 h-8 bg-gray-200/50 rounded-full"></div>
             <div className="absolute top-4 right-2 w-16 h-2 bg-white/30 rounded-full"></div>
             <div className="absolute bottom-2 left-2 w-24 h-2 bg-white/30 rounded-full"></div>
             <div className="absolute bottom-2 right-2 w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-[6px] text-white font-black opacity-50">ECOWAS</div>
          </div>
          {stage === 1 && (
             <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent via-green-400/50 to-transparent w-full h-[4px] animate-[scan_1s_ease-in-out_infinite]"></div>
          )}
          <div className="absolute top-2 right-2 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 text-[9px] font-black px-2 py-1 rounded-md border border-orange-200 dark:border-orange-500/20">
             COMING SOON
          </div>
       </div>
    </div>
  );
};

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

        {/* --- ROOMMATE RUN SPOTLIGHT (REPLACED WITH LIVE DEMO) --- */}
        <section className="mx-auto max-w-6xl px-4">
           <div className="bg-[#FFF8F0] dark:bg-white/5 rounded-[3rem] p-8 md:p-16 overflow-hidden border border-orange-100 dark:border-white/10 relative transition-colors">
             <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
                <div className="order-2 lg:order-1">
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
                {/* --- REPLACED STATIC IMAGE WITH INTERACTIVE DEMO --- */}
                <div className="order-1 lg:order-2 flex justify-center">
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
               <GhanaCardSim />
               {/* Note: Removed duplicate RoommateSplitSim since it's now the main hero demo above */}
               <div className="bg-gradient-to-br from-primary to-orange-600 rounded-3xl p-8 flex flex-col justify-between text-white shadow-lg relative overflow-hidden h-full">
                  <div className="relative z-10">
                    <h3 className="text-2xl font-black mb-2">Join the Pilot</h3>
                    <p className="text-white/80 text-sm mb-6">Be the first to test Roommate Run on your campus.</p>
                    <a href="https://tally.so/r/WO2v4v" target="_blank" rel="noreferrer" className="inline-flex px-6 py-3 bg-white text-primary font-bold rounded-xl shadow-lg hover:scale-105 transition-transform">
                       Join Waitlist
                    </a>
                  </div>
                  <div className="absolute bottom-[-20px] right-[-20px] opacity-20">
                     <span className="material-symbols-outlined text-[150px]">rocket_launch</span>
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
                     <div className="w-px h-12 bg-gray-200 dark:bg-white/10"></div>
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
