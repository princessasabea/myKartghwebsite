import React, { useState } from 'react';

// --- COMPONENT: UNITY ORBIT ANIMATION (RESPONSIVE) ---
const UnityOrbitAnimation = ({ team }) => {
  const [isPaused, setIsPaused] = useState(false);

  // We use CSS transforms to handle the scaling rather than fixed pixel math for responsiveness
  const RADIUS = 160; 
  const CENTER = 250; 

  return (
    <div className="w-full h-[450px] md:h-[700px] relative overflow-hidden bg-gradient-to-b from-sky-50 to-white dark:from-[#0f172a] dark:to-[#121212] border-t border-gray-200 dark:border-white/5 font-sans group select-none flex flex-col items-center justify-center transition-colors duration-300">
      
      {/* --- CONTROLS --- */}
      <div className="absolute top-4 left-4 z-50">
        <button 
          onClick={() => setIsPaused(!isPaused)}
          className="bg-white/80 dark:bg-black/50 backdrop-blur-md px-3 py-1.5 md:px-4 md:py-2 rounded-md shadow-lg border border-gray-200 dark:border-white/10 text-dark dark:text-white font-bold text-[10px] md:text-xs uppercase tracking-widest hover:scale-105 transition-transform flex items-center gap-2"
        >
          <span className="material-symbols-outlined text-sm">{isPaused ? 'play_arrow' : 'pause'}</span>
          {isPaused ? 'Resume' : 'Pause'}
        </button>
      </div>

      {/* --- BACKGROUND DECORATION --- */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
         <div className="absolute top-1/4 left-1/4 w-32 md:w-64 h-32 md:h-64 bg-primary/20 rounded-full blur-[60px] md:blur-[100px]"></div>
         <div className="absolute bottom-1/4 right-1/4 w-32 md:w-64 h-32 md:h-64 bg-blue-400/20 rounded-full blur-[60px] md:blur-[100px]"></div>
      </div>

      {/* --- THE ANIMATION CONTAINER --- */}
      {/* RESPONSIVE STRATEGY:
          - scale-[0.60]: Fits on small mobile (320px+)
          - sm:scale-[0.8]: Fits on tablets
          - md:scale-100: Full size on desktop
      */}
      <div className="relative w-[500px] h-[500px] shrink-0 transform scale-[0.60] sm:scale-[0.8] md:scale-100 transition-transform origin-center">
        
        {/* CSS for Rotation */}
        <style>{`
          @keyframes orbit {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          @keyframes counter-rotate {
            from { transform: rotate(0deg); }
            to { transform: rotate(-360deg); }
          }
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-5px); }
          }
          .animate-orbit {
            animation: orbit 60s linear infinite;
          }
          .animate-counter-rotate {
            animation: counter-rotate 60s linear infinite;
          }
          .animate-float {
            animation: float 3s ease-in-out infinite;
          }
          .paused {
            animation-play-state: paused !important;
          }
        `}</style>

        {/* 1. CENTER TROLLEY (Stationary) */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center justify-center">
           <div className="w-24 h-24 bg-white dark:bg-[#1e1e1e] rounded-full shadow-[0_0_40px_rgba(250,121,33,0.3)] flex items-center justify-center border-4 border-primary/20 z-20 relative">
              <span className="material-symbols-outlined text-5xl text-primary animate-pulse">shopping_cart</span>
           </div>
           {/* Visual Connecting Ring */}
           <svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] pointer-events-none z-0 opacity-20 animate-spin-slow">
              <circle cx="200" cy="200" r="80" stroke="currentColor" strokeWidth="1" fill="none" className="text-primary" strokeDasharray="4 4" />
           </svg>
        </div>

        {/* 2. THE RING OF PEOPLE (Rotates) */}
        <div 
          className={`absolute inset-0 w-full h-full ${isPaused ? 'paused' : 'animate-orbit'}`}
        >
           <svg className="w-full h-full absolute inset-0 overflow-visible" viewBox="0 0 500 500">
              {/* The "Holding Hands" Line */}
              <circle cx={CENTER} cy={CENTER} r={RADIUS} stroke="#cbd5e1" strokeWidth="2" fill="none" className="dark:stroke-white/10" />
           </svg>

           {team.map((member, idx) => {
              const total = team.length;
              const angle = (idx / total) * 360; 
              const radian = (angle * Math.PI) / 180;
              
              const x = CENTER + RADIUS * Math.cos(radian);
              const y = CENTER + RADIUS * Math.sin(radian);
              const delay = idx * 0.2;

              return (
                <div
                  key={idx}
                  className="absolute w-12 h-12 -ml-6 -mt-6 z-30"
                  style={{ left: `${x}px`, top: `${y}px` }}
                >
                   {/* Counter-Rotate Container */}
                   <div className={`w-full h-full flex flex-col items-center justify-center ${isPaused ? 'paused' : 'animate-counter-rotate'}`}>
                      {/* Floating Wrapper */}
                      <div className={`relative group cursor-pointer ${isPaused ? 'paused' : 'animate-float'}`} style={{ animationDelay: `${delay}s` }}>
                         {/* Avatar Circle */}
                         <div className="w-12 h-12 rounded-full bg-white dark:bg-[#232323] border-2 border-primary shadow-lg flex items-center justify-center overflow-hidden hover:scale-125 transition-transform duration-300">
                            {member.image ? (
                               <img src={member.image} className="w-full h-full object-cover" alt="" />
                            ) : (
                               <span className="text-xs font-black text-dark dark:text-white">
                                  {member.name.split(' ').map(n => n[0]).join('')}
                               </span>
                            )}
                         </div>
                         {/* Name Tooltip */}
                         <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-dark dark:bg-white text-white dark:text-dark text-[8px] font-bold px-2 py-1 rounded whitespace-nowrap pointer-events-none shadow-xl z-50">
                            {member.name}
                         </div>
                      </div>
                   </div>
                </div>
              );
           })}
        </div>
      </div>
      
      <div className="absolute bottom-4 md:bottom-10 text-center opacity-60">
         <p className="text-[8px] md:text-[10px] font-bold uppercase tracking-[0.3em] text-muted dark:text-gray-400">United around the Mission</p>
      </div>
    </div>
  );
};

// --- MAIN TEAM COMPONENT ---
const Team = () => {
  const [selectedMember, setSelectedMember] = useState(null);
  const [activeCategory, setActiveCategory] = useState('product');

  const team = [
    {
      name: 'Ama Obeng',
      role: 'Founder & Project Lead',
      description: 'The visionary force behind MyKart, orchestrating the product roadmap and leading a global team to modernize Ghanaian retail.',
      category: 'lead',
      linkedin: 'https://www.linkedin.com/in/ama-obeng-9b70912a1/'
    },
    {
      name: 'Sika Boateng',
      role: 'Project Manager',
      description: 'Keeps the team aligned and moving forward. Manages timelines, resources, and ensures we hit our milestones effectively.',
      category: 'product',
      linkedin: 'https://www.linkedin.com/in/sika-boateng-62a099357/'
    },
    {
      name: 'Peter Kersi',
      role: 'Technical Product & UI Design',
      description: 'Bridges the gap between product vision and technical execution. Translates ideas into actionable tasks, contributes to Figma designs, and supports implementation.',
      category: 'product',
      linkedin: 'https://www.linkedin.com/in/peter-kersi-9826372b7/',
      github: 'https://github.com/jpkersi'
    },
    {
      name: 'Alyn Tetteh',
      role: 'Frontend Team Lead',
      description: 'Leads the development of user-facing features and frontend architecture.',
      category: 'frontend',
      linkedin: 'https://www.linkedin.com/in/alyn-tetteh',
      github: 'https://github.com/AlynTetteh'
    },
    {
      name: 'Nana Yaw Akuffo-Parry',
      role: 'Frontend Developer',
      description: 'Building beautiful, responsive user interfaces and ensuring a seamless experience for our customers.',
      category: 'frontend',
    },
    {
      name: 'Seth Akoto',
      role: 'Frontend Developer',
      description: 'Contributes to UI implementation and helps shape the initial conceptualization of the MyKart platform.',
      category: 'frontend',
      linkedin: 'https://www.linkedin.com/in/sethakoto/'
    },
    {
      name: 'Kwaku Aboagye-Frempong',
      role: 'Backend Team Lead',
      description: 'Leads backend architecture, APIs, and core system design.',
      category: 'backend',
      linkedin: 'https://www.linkedin.com/in/kwaku-aboagye-frempong'
    },
    {
      name: 'Theoford Gyanfosu',
      role: 'Backend Developer',
      description: 'Supporting backend logic requirements and assisting with core system architecture discussions.',
      category: 'backend',
      linkedin: 'https://www.linkedin.com/in/theoford-gyanfosu-7b2a5a2b8/',
      github: 'https://github.com/nanagyanfosu'
    },
    {
      name: 'Damilola Tomisin Ayodeji',
      role: 'UI/UX Designer',
      description: 'Designs intuitive user flows and validates product experience through research.',
      category: 'design',
      linkedin: 'https://www.linkedin.com/in/damilola-tomisin-ayodeji-12b801336',
      github: 'https://github.com/deji445'
    },
    {
      name: 'Josiah',
      role: 'Brand & Visual Identity',
      description: 'Ensuring MyKart’s visual language resonates with the local Ghanaian market through thoughtful design and branding.',
      category: 'design',
    },
    {
      name: 'Joanna Oseghale',
      role: 'Business & Strategy',
      description: 'Handles business modeling, pricing ideas, and partnerships support.',
      category: 'ops',
      linkedin: 'https://www.linkedin.com/in/joanna-oseghale-753b63260'
    },
    {
      name: 'Akua Obeng',
      role: 'Operations Manager',
      description: 'Coordinating local logistics, streamlining operations, and managing market vendor relations on the ground.',
      category: 'ops',
    },
    {
      name: 'Antoungmine Omar',
      role: 'Marketing & Growth',
      description: 'Leads early growth strategy and customer acquisition.',
      category: 'ops',
      linkedin: 'https://www.linkedin.com/in/antoungmine-omar'
    }
  ];

  const categories = [
    { id: 'product', label: 'Product & Mgmt', icon: 'manage_accounts' },
    { id: 'frontend', label: 'Frontend', icon: 'code' },
    { id: 'backend', label: 'Backend', icon: 'dns' },
    { id: 'design', label: 'Design', icon: 'palette' },
    { id: 'ops', label: 'Operations', icon: 'rocket_launch' },
  ];

  const leadMember = team.find(m => m.category === 'lead');

  // Updated Card with responsiveness
  const renderMemberCard = (member, idx, isLarge = false) => (
    <div 
      key={idx} 
      onClick={() => setSelectedMember(member)}
      className={`group cursor-pointer bg-white dark:bg-white/5 border border-gray-100 dark:border-white/10 hover:border-primary/50 dark:hover:border-primary/50 hover:shadow-xl transition-all flex flex-col gap-3 relative overflow-hidden 
      ${isLarge 
         ? 'p-6 md:p-8 rounded-lg w-full max-w-sm mx-auto z-20 shadow-2xl ring-4 ring-white dark:ring-dark' 
         : 'p-4 md:p-5 rounded-md animate-in zoom-in-95 duration-300'}`}
    >
      <div className={`flex flex-col items-center text-center`}>
        <div className={`${isLarge ? 'w-24 h-24 md:w-32 md:h-32 mb-3 md:mb-4' : 'w-14 h-14 md:w-16 md:h-16 mb-2 md:mb-3'} bg-bg-light dark:bg-white/10 rounded-md flex items-center justify-center font-black text-primary overflow-hidden border-2 border-gray-100 dark:border-white/5 shadow-inner`}>
          {member.image ? (
            <img src={member.image} className="w-full h-full object-cover" alt={member.name} />
          ) : (
            <span className={isLarge ? 'text-3xl md:text-4xl' : 'text-lg md:text-xl'}>
              {member.name.split(' ').map(n => n[0]).join('')}
            </span>
          )}
        </div>
        <h4 className={`${isLarge ? 'text-xl md:text-2xl' : 'text-base md:text-lg'} font-black text-dark dark:text-white group-hover:text-primary transition-colors leading-tight`}>{member.name}</h4>
        <p className={`${isLarge ? 'text-xs md:text-sm' : 'text-[10px]'} text-primary font-bold uppercase tracking-widest mt-1`}>{member.role}</p>
        
        {!isLarge && (
           <span className="mt-2 text-[10px] text-muted dark:text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
             View <span className="material-symbols-outlined text-[10px]">arrow_forward</span>
           </span>
        )}
      </div>
    </div>
  );

  return (
    <div className="flex flex-col w-full bg-bg-light dark:bg-dark min-h-screen transition-colors duration-300">
      
      {/* Header */}
      <section className="pt-24 pb-8 md:pb-10 px-4 text-center">
        <span className="text-primary font-bold text-xs uppercase tracking-widest block mb-4">The Structure</span>
        <h1 className="text-4xl md:text-6xl font-black text-dark dark:text-white tracking-tighter">The myKart Team</h1>
      </section>

      {/* TREE DIAGRAM SECTION - RESPONSIVE LAYOUT */}
      <section className="px-4 relative z-10 w-full">
        {/* We removed min-w-[800px] and overflow-auto. Instead we use a flex layout that adapts. */}
        <div className="w-full max-w-6xl mx-auto flex flex-col items-center">
          
          {/* LEVEL 1: FOUNDER (ROOT) */}
          <div className="relative mb-8 md:mb-12 w-full flex justify-center">
             {leadMember && renderMemberCard(leadMember, 0, true)}
             {/* Vertical line connecting root to next level */}
             <div className="absolute left-1/2 -translate-x-1/2 top-full h-8 md:h-12 w-0.5 bg-gray-300 dark:bg-gray-700"></div>
          </div>

          {/* LEVEL 2: BRANCHES (Categories) */}
          {/* Mobile: Wrap (Stack), Desktop: No Wrap (Line) */}
          <div className="w-full flex flex-wrap md:flex-nowrap justify-center items-start gap-4 md:gap-4 relative">
             
             {/* Desktop Horizontal Line (Hidden on Mobile) */}
             <div className="hidden md:block absolute top-0 left-[10%] right-[10%] h-0.5 bg-gray-300 dark:bg-gray-700"></div>

             {categories.map((cat, idx) => {
               const isActive = activeCategory === cat.id;
               return (
                 <div key={cat.id} className="flex flex-col items-center flex-1 min-w-[140px] md:min-w-0 relative mb-4 md:mb-0">
                    
                    {/* Vertical Stem (Different height for mobile vs desktop) */}
                    <div className="h-0 md:h-8 w-0.5 bg-gray-300 dark:bg-gray-700 hidden md:block"></div>
                    
                    {/* BUTTONS */}
                    <button 
                      onClick={() => setActiveCategory(cat.id)}
                      className={`relative z-10 px-4 py-2 md:px-6 md:py-3 rounded-md border-2 transition-all duration-300 flex items-center gap-2 shadow-lg w-full md:w-auto justify-center
                      ${isActive 
                        ? 'bg-primary border-primary text-white scale-105 md:scale-110 shadow-primary/30' 
                        : 'bg-white dark:bg-[#1e1e1e] border-gray-200 dark:border-white/10 text-muted dark:text-gray-400 hover:border-primary/50'}`}
                    >
                       <span className="material-symbols-outlined text-[16px] md:text-[18px]">{cat.icon}</span>
                       <span className="font-bold text-xs md:text-sm whitespace-nowrap">{cat.label}</span>
                    </button>

                    {/* Active Stem Down */}
                    <div className={`w-0.5 transition-all duration-300 hidden md:block ${isActive ? 'bg-primary h-12' : 'bg-transparent h-0'}`}></div>
                 </div>
               );
             })}
          </div>

          {/* LEVEL 3: LEAVES - RECTANGULAR CONTAINER */}
          <div className="w-full bg-gray-50/50 dark:bg-white/5 rounded-lg border border-gray-200 dark:border-white/10 p-4 md:p-12 mt-4 min-h-[300px] md:min-h-[400px] transition-all relative">
             {/* Decorator Triangle (Desktop Only) */}
             <div className="hidden md:block absolute top-0 left-1/2 -translate-x-1/2 -mt-2 w-4 h-2 bg-primary rounded-b-full"></div>

             {/* Grid: 1 col mobile, 2 cols tablet, 3 cols desktop */}
             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
               {team.filter(m => m.category === activeCategory).map((m, idx) => renderMemberCard(m, idx))}
               {team.filter(m => m.category === activeCategory).length === 0 && (
                 <div className="col-span-full text-center py-20 text-muted dark:text-gray-500">
                    No members found in this branch yet.
                 </div>
               )}
             </div>
          </div>
        </div>
      </section>

      {/* --- UNITY ORBIT ANIMATION --- */}
      <section className="w-full mt-0">
         <UnityOrbitAnimation team={team} />
      </section>

      {/* Bio Modal */}
      {selectedMember && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-dark/80 backdrop-blur-md animate-in fade-in duration-300" onClick={() => setSelectedMember(null)}>
          <div className="bg-white dark:bg-gray-900 rounded-lg w-full max-w-lg shadow-2xl animate-in zoom-in-95 duration-200 p-6 md:p-12 text-center relative overflow-hidden border border-gray-100 dark:border-white/10 overflow-y-auto max-h-[90vh]" onClick={(e) => e.stopPropagation()}>
            <div className="absolute top-0 right-0 p-4 md:p-6">
               <button onClick={() => setSelectedMember(null)} className="w-10 h-10 rounded-md bg-gray-50 dark:bg-white/10 flex items-center justify-center text-muted dark:text-white hover:bg-gray-100 transition-colors">
                 <span className="material-symbols-outlined">close</span>
               </button>
            </div>
            <div className="w-20 h-20 md:w-24 md:h-24 bg-bg-light dark:bg-white/5 rounded-md flex items-center justify-center font-black text-primary overflow-hidden border border-gray-50 dark:border-white/5 shadow-inner mx-auto mb-6 mt-4">
              {selectedMember.image ? <img src={selectedMember.image} className="w-full h-full object-cover" alt={selectedMember.name} /> : <span className="text-3xl">{selectedMember.name.split(' ').map(n => n[0]).join('')}</span>}
            </div>
            <h3 className="text-2xl md:text-3xl font-black text-dark dark:text-white mb-1">{selectedMember.name}</h3>
            <p className="text-primary font-extrabold uppercase tracking-widest text-xs mb-6">{selectedMember.role}</p>
            <p className="text-muted dark:text-gray-300 text-sm md:text-lg leading-relaxed mb-8">{selectedMember.description}</p>
            <div className="flex justify-center gap-4 mb-8">
              {selectedMember.linkedin && <a href={selectedMember.linkedin} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-md bg-gray-50 dark:bg-white/10 flex items-center justify-center text-muted dark:text-white hover:bg-primary hover:text-white transition-all"><span className="material-symbols-outlined">link</span></a>}
              {selectedMember.github && <a href={selectedMember.github} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-md bg-gray-50 dark:bg-white/10 flex items-center justify-center text-muted dark:text-white hover:bg-primary hover:text-white transition-all"><span className="material-symbols-outlined text-[20px]">code</span></a>}
            </div>
            <button onClick={() => setSelectedMember(null)} className="w-full py-4 bg-dark dark:bg-white text-white dark:text-dark font-bold rounded-md hover:bg-black transition-colors">Close Bio</button>
          </div>
        </div>
      )}

      {/* Join CTA */}
      <section className="py-20 md:py-32 px-4 bg-white dark:bg-white/5 border-t border-gray-100 dark:border-white/10 relative overflow-hidden text-center">
         <div className="max-w-4xl mx-auto relative z-10">
            <h2 className="text-4xl md:text-7xl font-black text-dark dark:text-white tracking-tighter mb-8">Grow with us.</h2>
            <a href="https://tally.so/r/WO2v4v" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 px-10 py-5 bg-primary text-white font-black text-lg rounded-md shadow-2xl hover:scale-105 transition-all">
              Apply to Join <span className="material-symbols-outlined">north_east</span>
            </a>
         </div>
      </section>
    </div>
  );
};

export default Team;
