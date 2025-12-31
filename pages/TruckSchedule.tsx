

import React, { useState } from 'react';

type Neighborhood = 'East Legon' | 'Madina' | 'Spintex' | 'Tema' | 'Dansoman';

interface ScheduleItem {
  day: string;
  time: string;
  location: string;
  neighborhood: Neighborhood;
  status: 'Planned' | 'Active' | 'Expanding';
}

interface TruckScheduleProps {
  showHero?: boolean;
}

const TruckSchedule: React.FC<TruckScheduleProps> = ({ showHero = true }) => {
  const [activeTab, setActiveTab] = useState<Neighborhood>('East Legon');
  const [showProposalPopup, setShowProposalPopup] = useState(false);

  const schedule: ScheduleItem[] = [
    { day: 'Monday', time: '10:00 AM - 12:00 PM', location: 'A&C Mall Parking', neighborhood: 'East Legon', status: 'Planned' },
    { day: 'Wednesday', time: '2:00 PM - 4:00 PM', location: 'Starbites Enclave', neighborhood: 'East Legon', status: 'Planned' },
    { day: 'Tuesday', time: '11:00 AM - 1:00 PM', location: 'Madina Zongo Junction', neighborhood: 'Madina', status: 'Planned' },
    { day: 'Friday', time: '4:00 PM - 6:00 PM', location: 'Atomic Junction', neighborhood: 'Madina', status: 'Planned' },
    { day: 'Monday', time: '3:00 PM - 5:00 PM', location: 'Coastal Junction', neighborhood: 'Spintex', status: 'Planned' },
    { day: 'Thursday', time: '9:00 AM - 11:00 AM', location: 'Manet Junction', neighborhood: 'Spintex', status: 'Planned' },
    { day: 'Saturday', time: '10:00 AM - 2:00 PM', location: 'Tema Community 1 Market', neighborhood: 'Tema', status: 'Planned' },
    { day: 'Sunday', time: '1:00 PM - 4:00 PM', location: 'Tema Harbour Road', neighborhood: 'Tema', status: 'Planned' },
    { day: 'Wednesday', time: '10:00 AM - 12:00 PM', location: 'Dansoman Roundabout', neighborhood: 'Dansoman', status: 'Planned' },
  ];

  const filteredSchedule = schedule.filter(item => item.neighborhood === activeTab);

  return (
    <div className={`flex flex-col w-full ${showHero ? 'bg-bg-light min-h-screen' : ''}`}>
      {showHero && (
        <section className="py-20 px-4 bg-white dark:bg-white/5 border-b border-gray-100">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 rounded-full mb-6">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
                <span className="text-xs font-black text-primary uppercase tracking-widest">Roadmap Phase 2</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-black mb-6 text-dark dark:text-white tracking-tighter">Kommunity Truck.</h1>
              <p className="text-xl text-muted dark:text-gray-300 leading-relaxed font-medium">
                Bridging the accessibility gap. Our planned fleet of mobile distribution hubs will bring fresh market produce to neighborhoods outside standard delivery zones at wholesale prices.
              </p>
            </div>
            <div className="flex-1 bg-primary/10 p-8 rounded-[3rem] border border-primary/20 relative overflow-hidden group">
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center text-white">
                    <span className="material-symbols-outlined">notifications_active</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-dark dark:text-white">Beta Waitlist</h4>
                    <p className="text-xs text-muted dark:text-gray-300">Join 500+ households for early access.</p>
                  </div>
                </div>
                <a 
                  href="https://tally.so/r/rjB4J2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-block px-8 py-4 bg-primary text-white font-bold rounded-2xl text-center shadow-lg shadow-primary/20 hover:scale-105 transition-all"
                >
                  Join the Waitlist Now
                </a>
              </div>
              <div className="absolute top-[-20px] right-[-20px] opacity-5 group-hover:opacity-10 transition-opacity">
                <span className="material-symbols-outlined text-[150px]">local_shipping</span>
              </div>
            </div>
          </div>
        </section>
      )}

      <section className={`${showHero ? 'py-20' : ''} px-4`}>
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
             <h2 className="text-3xl font-black text-dark dark:text-white tracking-tight">Planned Weekly Routes</h2>
             <p className="text-muted dark:text-gray-300 font-medium">Select a neighborhood to view the projected mobile market schedule.</p>
          </div>

          <div className="flex flex-wrap gap-4 mb-12 border-b border-gray-100 pb-8">
            {(['East Legon', 'Madina', 'Spintex', 'Tema', 'Dansoman'] as Neighborhood[]).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-8 py-3 rounded-2xl font-black text-sm transition-all shadow-sm ${
                  activeTab === tab 
                  ? 'bg-primary text-white shadow-xl shadow-primary/30 scale-105' 
                  : 'bg-white dark:bg-white/5 text-muted dark:text-gray-300 hover:bg-gray-50'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            <div className="lg:col-span-2 space-y-4">
              {filteredSchedule.map((item, idx) => (
                <div key={idx} className="bg-white dark:bg-white/5 p-8 rounded-3xl border border-gray-50 shadow-sm flex flex-col md:flex-row justify-between items-center group hover:border-primary/30 transition-all">
                  <div className="flex items-center gap-6 w-full md:w-auto mb-4 md:mb-0">
                    <div className="w-16 h-16 bg-bg-light rounded-2xl flex flex-col items-center justify-center text-primary border border-primary/10">
                      <span className="text-[10px] font-black uppercase">{item.day.substring(0, 3)}</span>
                      <span className="material-symbols-outlined text-[24px]">location_on</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-black text-dark dark:text-white">{item.location}</h4>
                      <p className="text-muted dark:text-gray-300 font-bold text-sm">Target: {item.time}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 w-full md:w-auto justify-between md:justify-end">
                    <span className="px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest bg-gray-100 text-muted dark:text-gray-300">
                      {item.status}
                    </span>
                    <button className="p-4 bg-bg-light rounded-xl hover:bg-primary hover:text-white transition-colors">
                      <span className="material-symbols-outlined text-[20px]">bookmark</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-6">
              <div className="bg-dark p-8 rounded-[2.5rem] text-white overflow-hidden relative">
                <div className="relative z-10">
                  <p className="text-primary font-black uppercase text-[10px] tracking-widest mb-2">NETWORK GOALS</p>
                  <h3 className="text-3xl font-black mb-4 tracking-tighter">Projected Reach.</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center border-b border-white/10 pb-2">
                      <span className="text-gray-400 text-sm">Initial Fleet</span>
                      <span className="font-black">15 Units</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-white/10 pb-2">
                      <span className="text-gray-400 text-sm">Weekly Points</span>
                      <span className="font-black">60+ Stops</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400 text-sm">Impact Goal</span>
                      <span className="font-black">5,000 Homes</span>
                    </div>
                  </div>
                </div>
                <div className="absolute top-[-20px] right-[-20px] opacity-10">
                  <span className="material-symbols-outlined text-[120px]">analytics</span>
                </div>
              </div>

              {!showHero && (
                <div className="bg-primary/10 p-8 rounded-[2.5rem] border border-primary/20">
                  <h4 className="font-bold text-dark dark:text-white mb-2">Join the Waitlist</h4>
                  <p className="text-sm text-muted dark:text-gray-300 mb-6">Be the first to know when we launch in your area.</p>
                  <a 
                    href="https://tally.so/r/rjB4J2"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-block py-4 bg-primary text-white font-black rounded-2xl text-center shadow-lg shadow-primary/20 hover:scale-105 transition-all"
                  >
                    Apply Now
                  </a>
                </div>
              )}

              <div className="bg-accent/20 p-8 rounded-[2.5rem] border border-accent/30">
                <h4 className="font-bold text-dark dark:text-white mb-2">Request a New Stop</h4>
                <p className="text-sm text-muted dark:text-gray-300 mb-6">Suggest a neighborhood landmark for our pilot expansion.</p>
                <button 
                  onClick={() => setShowProposalPopup(true)}
                  className="w-full py-4 bg-white dark:bg-white/5 text-dark dark:text-white font-black rounded-2xl shadow-sm hover:shadow-md transition-all active:scale-95"
                >
                  Submit Proposal
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Proposal Popup */}
      {showProposalPopup && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-dark/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white dark:bg-white/5 rounded-[2.5rem] p-10 max-w-md w-full shadow-2xl animate-in zoom-in-95 duration-300 relative">
             <button 
                onClick={() => setShowProposalPopup(false)}
                className="absolute top-6 right-6 text-muted dark:text-gray-300 hover:text-dark dark:text-white"
             >
                <span className="material-symbols-outlined">close</span>
             </button>
             <div className="w-20 h-20 bg-primary/10 rounded-3xl flex items-center justify-center text-primary mb-8 mx-auto">
                <span className="material-symbols-outlined text-[40px]">construction</span>
             </div>
             <h3 className="text-3xl font-black text-center text-dark dark:text-white mb-4 tracking-tight">Coming soon in 2026!</h3>
             <p className="text-muted dark:text-gray-300 text-center leading-relaxed mb-8 font-medium">
                We're currently perfecting our logistics model. Expansion proposals will be processed starting in 2026!
             </p>
             <button 
                onClick={() => setShowProposalPopup(false)}
                className="w-full py-4 bg-dark text-white font-bold rounded-2xl hover:bg-black transition-colors"
             >
                Close
             </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TruckSchedule;
