import React, { useState, useEffect, useRef } from 'react';

// --- COMPONENT: THE GROWTH CYCLE ANIMATION (INDIVIDUAL SPROUTING) ---
const GrowthAnimation = ({ team }) => {
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0); // 0 to 100
  const requestRef = useRef();

  // Animation Speed Configuration
  const SPEED = 0.2; 

  const animate = () => {
    if (!isPaused) {
      setProgress(prev => {
        if (prev >= 100) return 0; // Auto-loop
        return prev + SPEED;
      });
    }
    requestRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current);
  }, [isPaused]);

  const handleRestart = () => {
    setProgress(0);
    setIsPaused(false);
  };

  // Fixed positions on the tree (X, Y percentages)
  const treePositions = [
    { x: 30, y: 30 }, { x: 70, y: 35 }, { x: 50, y: 15 }, 
    { x: 20, y: 50 }, { x: 80, y: 55 }, { x: 10, y: 40 },
    { x: 90, y: 40 }, { x: 40, y: 25 }, { x: 60, y: 25 },
    { x: 25, y: 60 }, { x: 75, y: 60 }, { x: 50, y: 40 },
    { x: 35, y: 50 }, { x: 65, y: 50 }
  ];

  return (
    <div className="w-full h-[850px] relative overflow-hidden bg-gradient-to-b from-sky-100 to-sky-50 dark:from-[#0f172a] dark:to-[#1e293b] border-t border-gray-200 dark:border-white/5 font-sans group select-none">
      
      {/* --- CONTROLS --- */}
      <div className="absolute top-6 left-6 z-50 flex gap-2">
        <button 
          onClick={() => setIsPaused(!isPaused)}
          className="bg-white/80 dark:bg-black/50 backdrop-blur-md px-4 py-2 rounded-md shadow-lg border border-gray-200 dark:border-white/10 text-dark dark:text-white font-bold text-xs uppercase tracking-widest hover:scale-105 transition-transform flex items-center gap-2"
        >
          <span className="material-symbols-outlined text-sm">{isPaused ? 'play_arrow' : 'pause'}</span>
          {isPaused ? 'Resume' : 'Pause'}
        </button>
        <button 
          onClick={handleRestart}
          className="bg-white/80 dark:bg-black/50 backdrop-blur-md p-2 rounded-md shadow-lg border border-gray-200 dark:border-white/10 text-dark dark:text-white hover:rotate-180 transition-transform"
        >
          <span className="material-symbols-outlined text-sm">refresh</span>
        </button>
      </div>

      {/* --- BACKGROUND --- */}
      <div className="absolute top-10 right-10 w-32 h-32 bg-yellow-300 rounded-full blur-[60px] opacity-60 animate-pulse"></div>
      
      {/* Ground Layers */}
      <div className="absolute bottom-0 w-[150%] -left-[25%] h-[200px] bg-[#4ade80] dark:bg-[#064e3b] rounded-[100%] translate-y-1/2 blur-sm"></div>
      <div className="absolute bottom-0 w-full h-[100px] bg-gradient-to-t from-[#22c55e] to-[#86efac] dark:from-[#065f46] dark:to-[#10b981]"></div>

      {/* --- THE GIANT TREE --- */}
      <div className="absolute bottom-[80px] left-1/2 -translate-x-1/2 w-[800px] h-[700px] flex items-end justify-center pointer-events-none origin-bottom">
        <svg className="w-full h-full" viewBox="0 0 500 500" preserveAspectRatio="xMidYMax meet">
           {/* Trunk Growth */}
           <path 
             d="M230,500 Q250,400 250,300 Q250,400 270,500 Z" 
             fill="#5D4037" 
             className="transition-transform duration-100 origin-bottom"
             style={{ transform: `scaleY(${Math.min(1, progress / 20)})` }}
           />
           {/* Branches */}
           <g className="transition-opacity duration-500" style={{ opacity: progress > 15 ? 1 : 0 }}>
              <path d="M250,300 Q150,200 50,250" stroke="#5D4037" strokeWidth="12" fill="none" strokeLinecap="round" />
              <path d="M250,280 Q180,180 80,150" stroke="#5D4037" strokeWidth="10" fill="none" strokeLinecap="round" />
              <path d="M250,300 Q350,200 450,250" stroke="#5D4037" strokeWidth="12" fill="none" strokeLinecap="round" />
              <path d="M250,280 Q320,180 420,150" stroke="#5D4037" strokeWidth="10" fill="none" strokeLinecap="round" />
              <path d="M250,250 V100" stroke="#5D4037" strokeWidth="12" fill="none" strokeLinecap="round" />
              <path d="M250,200 Q200,100 150,80" stroke="#5D4037" strokeWidth="8" fill="none" strokeLinecap="round" />
              <path d="M250,200 Q300,100 350,80" stroke="#5D4037" strokeWidth="8" fill="none" strokeLinecap="round" />
           </g>
           {/* Leaves */}
           <g className="transition-transform duration-1000 origin-center" style={{ transform: progress > 20 ? 'scale(1)' : 'scale(0)', opacity: progress > 20 ? 0.9 : 0 }}>
              <circle cx="250" cy="150" r="100" fill="#22c55e" />
              <circle cx="150" cy="200" r="80" fill="#22c55e" />
              <circle cx="350" cy="200" r="80" fill="#22c55e" />
              <circle cx="250" cy="80" r="70" fill="#22c55e" />
              <circle cx="100" cy="250" r="60" fill="#22c55e" />
              <circle cx="400" cy="250" r="60" fill="#22c55e" />
           </g>
        </svg>
      </div>

      {/* --- THE TEAM MEMBERS (INDIVIDUAL LIFECYCLES) --- */}
      <div className="absolute inset-0 pointer-events-none">
         {team.map((member, idx) => {
            const treePos = treePositions[idx % treePositions.length];
            
            // --- TIMING LOGIC ---
            // We stagger the "Start Drop" time for each person
            // Global 'progress' goes 0 -> 100
            
            // When does THIS person appear on the tree? (25% + slight random offset)
            const appearTime = 25 + (idx * 2);
            
            // When does THIS person start falling? (45% + heavy stagger)
            // We spread the drop times out significantly so they don't fall in a clump
            const dropStartTime = 45 + (idx * 3.5); 
            
            // Fall duration (how long it takes to hit ground)
            const dropDuration = 5; 
            
            // When does the sprout start? (Immediately after landing)
            const landTime = dropStartTime + dropDuration;

            // --- CALCULATE STATE ---
            let state = 'hidden'; // hidden, tree, falling, grounded
            let localProgress = 0; // 0-1 for current phase

            if (progress < appearTime) {
               state = 'hidden';
            } else if (progress < dropStartTime) {
               state = 'tree';
               localProgress = Math.min(1, (progress - appearTime) / 10); // Grow scale on tree
            } else if (progress < landTime) {
               state = 'falling';
               localProgress = (progress - dropStartTime) / dropDuration; // 0 (top) to 1 (ground)
            } else {
               state = 'grounded';
               localProgress = Math.min(1, (progress - landTime) / 10); // Bloom progress
            }

            // --- POSITION LOGIC ---
            const groundX = 8 + (idx * (84 / (team.length - 1))); // Spread 8% to 92%
            const treeLeftAbsolute = 50 + ((treePos.x - 50) * 0.4); // Centered tree coordinates

            let top = `${treePos.y}%`;
            let left = `${treeLeftAbsolute}%`;
            let scale = state === 'tree' ? localProgress : 1;
            let opacity = state === 'hidden' ? 0 : 1;
            
            // Stem Height Calculation (Grows from 0px to 40px)
            const stemHeight = state === 'grounded' ? localProgress * 40 : 0;

            if (state === 'falling') {
               // Lerp Y: Tree Y -> 85% (Ground)
               const currentY = treePos.y + (localProgress * (85 - treePos.y));
               top = `${currentY}%`;
               
               // Lerp X: Tree X -> Ground X
               const currentX = treeLeftAbsolute + (localProgress * (groundX - treeLeftAbsolute));
               left = `${currentX}%`;
            } else if (state === 'grounded') {
               top = '85%'; 
               left = `${groundX}%`;
            }

            return (
               <div 
                 key={idx}
                 className="absolute transition-transform duration-75 ease-linear flex flex-col items-center pointer-events-auto"
                 style={{ 
                    top, 
                    left, 
                    transform: `translate(-50%, -50%) scale(${scale})`, 
                    opacity,
                    zIndex: state === 'grounded' ? 20 + idx : 10
                 }}
               >
                  {/* VISUAL: THE FRUIT (Hidden once sprouted) */}
                  {state !== 'grounded' && (
                     <div className="w-10 h-10 rounded-full bg-white dark:bg-white/10 shadow-lg border-2 border-primary flex items-center justify-center relative animate-pulse">
                        <span className="text-xs font-black text-primary">
                           {member.name.split(' ').map(n => n[0]).join('')}
                        </span>
                     </div>
                  )}

                  {/* VISUAL: THE SPROUTING FLOWER (Only when grounded) */}
                  {state === 'grounded' && (
                     <div className="flex flex-col items-center justify-end relative -top-8">
                        
                        {/* The Card (Blooms Scale 0 -> 1) */}
                        <div 
                           className="bg-white dark:bg-[#232323] p-2 rounded-md shadow-xl border-b-4 border-primary w-24 hover:scale-125 hover:z-50 transition-transform cursor-pointer origin-bottom"
                           style={{ 
                              transform: `scale(${localProgress})`,
                              opacity: localProgress 
                           }}
                        >
                           <div className="w-8 h-8 bg-gray-100 dark:bg-white/10 rounded-md mx-auto mb-2 overflow-hidden">
                              {member.image ? (
                                <img src={member.image} className="w-full h-full object-cover" alt="" />
                              ) : (
                                <span className="flex items-center justify-center h-full text-[10px] font-black text-muted dark:text-gray-400">
                                   {member.name.charAt(0)}
                                </span>
                              )}
                           </div>
                           <p className="text-[9px] font-black text-dark dark:text-white text-center leading-tight truncate">{member.name}</p>
                           <p className="text-[7px] font-bold text-primary text-center uppercase tracking-wider truncate mt-1">{member.role}</p>
                        </div>

                        {/* The Stem (Grows Height) */}
                        <div 
                           className="w-1 bg-green-600 rounded-full"
                           style={{ height: `${stemHeight}px` }}
                        ></div>
                     </div>
                  )}
               </div>
            );
         })}
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 h-1 bg-primary z-50 transition-all duration-100 ease-linear" style={{ width: `${progress}%` }}></div>

    </div>
  );
};

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
      role: 'Technical Product Associate',
      description: 'Bridges the gap between product vision and technical execution. Translates ideas into actionable tasks and supports implementation planning.',
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

  const renderMemberCard = (member, idx, isLarge = false) => (
    <div 
      key={idx} 
      onClick={() => setSelectedMember(member)}
      className={`group cursor-pointer bg-white dark:bg-white/5 border border-gray-100 dark:border-white/10 hover:border-primary/50 dark:hover:border-primary/50 hover:shadow-xl transition-all flex flex-col gap-3 relative overflow-hidden ${isLarge ? 'p-8 rounded-lg w-full max-w-sm mx-auto z-20 shadow-2xl ring-4 ring-white dark:ring-dark' : 'p-5 rounded-md animate-in zoom-in-95 duration-300'}`}
    >
      <div className={`flex flex-col items-center text-center`}>
        <div className={`${isLarge ? 'w-32 h-32 mb-4' : 'w-16 h-16 mb-3'} bg-bg-light dark:bg-white/10 rounded-md flex items-center justify-center font-black text-primary overflow-hidden border-2 border-gray-100 dark:border-white/5 shadow-inner`}>
          {member.image ? (
            <img src={member.image} className="w-full h-full object-cover" alt={member.name} />
          ) : (
            <span className={isLarge ? 'text-4xl' : 'text-xl'}>
              {member.name.split(' ').map(n => n[0]).join('')}
            </span>
          )}
        </div>
        <h4 className={`${isLarge ? 'text-2xl' : 'text-lg'} font-black text-dark dark:text-white group-hover:text-primary transition-colors`}>{member.name}</h4>
        <p className={`${isLarge ? 'text-sm' : 'text-[10px]'} text-primary font-bold uppercase tracking-widest`}>{member.role}</p>
        
        {!isLarge && (
           <span className="mt-2 text-[10px] text-muted dark:text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
             View Profile <span className="material-symbols-outlined text-[10px]">arrow_forward</span>
           </span>
        )}
      </div>
    </div>
  );

  return (
    <div className="flex flex-col w-full bg-bg-light dark:bg-dark min-h-screen transition-colors duration-300">
      
      {/* Header */}
      <section className="pt-24 pb-10 px-4 text-center">
        <span className="text-primary font-bold text-xs uppercase tracking-widest block mb-4">The Structure</span>
        <h1 className="text-4xl md:text-6xl font-black text-dark dark:text-white tracking-tighter">The myKart Team</h1>
      </section>

      {/* TREE DIAGRAM SECTION */}
      <section className="px-4 overflow-x-auto relative z-10">
        <div className="min-w-[800px] max-w-6xl mx-auto flex flex-col items-center">
          
          {/* LEVEL 1: FOUNDER (ROOT) */}
          <div className="relative mb-12">
             {leadMember && renderMemberCard(leadMember, 0, true)}
             <div className="absolute left-1/2 -translate-x-1/2 top-full h-12 w-0.5 bg-gray-300 dark:bg-gray-700"></div>
          </div>

          {/* LEVEL 2: BRANCHES */}
          <div className="w-full flex justify-center items-start gap-4 relative">
             <div className="absolute top-0 left-[10%] right-[10%] h-0.5 bg-gray-300 dark:bg-gray-700"></div>

             {categories.map((cat, idx) => {
               const isActive = activeCategory === cat.id;
               return (
                 <div key={cat.id} className="flex flex-col items-center flex-1 relative">
                    <div className="h-8 w-0.5 bg-gray-300 dark:bg-gray-700"></div>
                    
                    <button 
                      onClick={() => setActiveCategory(cat.id)}
                      className={`relative z-10 px-6 py-3 rounded-md border-2 transition-all duration-300 flex items-center gap-2 shadow-lg hover:scale-105 active:scale-95 ${isActive ? 'bg-primary border-primary text-white scale-110 shadow-primary/30' : 'bg-white dark:bg-[#1e1e1e] border-gray-200 dark:border-white/10 text-muted dark:text-gray-400 hover:border-primary/50'}`}
                    >
                       <span className="material-symbols-outlined text-[18px]">{cat.icon}</span>
                       <span className="font-bold text-sm whitespace-nowrap">{cat.label}</span>
                    </button>

                    <div className={`h-12 w-0.5 transition-all duration-300 ${isActive ? 'bg-primary h-12' : 'bg-transparent h-0'}`}></div>
                 </div>
               );
             })}
          </div>

          {/* LEVEL 3: LEAVES */}
          <div className="w-full bg-gray-50/50 dark:bg-white/5 rounded-lg border border-gray-200 dark:border-white/10 p-8 md:p-12 mt-4 min-h-[400px] transition-all relative">
             <div className="absolute top-0 left-1/2 -translate-x-1/2 -mt-2 w-4 h-2 bg-primary rounded-b-full"></div>

             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
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

      {/* --- UNITY ANIMATION (No Gap Above) --- */}
      <section className="w-full mt-0">
         <GrowthAnimation team={team} />
      </section>

      {/* Bio Modal */}
      {selectedMember && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-dark/80 backdrop-blur-md animate-in fade-in duration-300" onClick={() => setSelectedMember(null)}>
          <div className="bg-white dark:bg-gray-900 rounded-lg w-full max-w-lg shadow-2xl animate-in zoom-in-95 duration-200 p-8 md:p-12 text-center relative overflow-hidden border border-gray-100 dark:border-white/10" onClick={(e) => e.stopPropagation()}>
            <div className="absolute top-0 right-0 p-6">
               <button onClick={() => setSelectedMember(null)} className="w-10 h-10 rounded-md bg-gray-50 dark:bg-white/10 flex items-center justify-center text-muted dark:text-white hover:bg-gray-100 transition-colors">
                 <span className="material-symbols-outlined">close</span>
               </button>
            </div>
            <div className="w-24 h-24 bg-bg-light dark:bg-white/5 rounded-md flex items-center justify-center font-black text-primary overflow-hidden border border-gray-50 dark:border-white/5 shadow-inner mx-auto mb-6">
              {selectedMember.image ? <img src={selectedMember.image} className="w-full h-full object-cover" alt={selectedMember.name} /> : <span className="text-3xl">{selectedMember.name.split(' ').map(n => n[0]).join('')}</span>}
            </div>
            <h3 className="text-3xl font-black text-dark dark:text-white mb-1">{selectedMember.name}</h3>
            <p className="text-primary font-extrabold uppercase tracking-widest text-xs mb-6">{selectedMember.role}</p>
            <p className="text-muted dark:text-gray-300 text-lg leading-relaxed mb-8">{selectedMember.description}</p>
            <div className="flex justify-center gap-4 mb-8">
              {selectedMember.linkedin && <a href={selectedMember.linkedin} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-md bg-gray-50 dark:bg-white/10 flex items-center justify-center text-muted dark:text-white hover:bg-primary hover:text-white transition-all"><span className="material-symbols-outlined">link</span></a>}
              {selectedMember.github && <a href={selectedMember.github} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-md bg-gray-50 dark:bg-white/10 flex items-center justify-center text-muted dark:text-white hover:bg-primary hover:text-white transition-all"><span className="material-symbols-outlined text-[20px]">code</span></a>}
            </div>
            <button onClick={() => setSelectedMember(null)} className="w-full py-4 bg-dark dark:bg-white text-white dark:text-dark font-bold rounded-md hover:bg-black transition-colors">Close Bio</button>
          </div>
        </div>
      )}

      {/* Join CTA */}
      <section className="py-32 px-4 bg-white dark:bg-white/5 border-t border-gray-100 dark:border-white/10 relative overflow-hidden text-center">
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
