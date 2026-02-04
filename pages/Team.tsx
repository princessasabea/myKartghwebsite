import React, { useState, useEffect } from 'react';

// --- COMPONENT: THE GROWTH CYCLE ANIMATION ---
const GrowthAnimation = ({ team }) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0); // 0 to 100
  
  // Animation Phases based on progress:
  // 0-20: Tree Growth
  // 20-40: Foliage & Fruits Appear
  // 40-60: Fruits Fall
  // 60-100: Blooming into Flowers (Cards)

  useEffect(() => {
    let interval;
    if (isPlaying) {
      interval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            setIsPlaying(false); // Stop at end
            return 100;
          }
          return prev + 0.4; // Speed of animation
        });
      }, 30); // 30ms tick
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  const handleReset = () => {
    setIsPlaying(false);
    setProgress(0);
    setTimeout(() => setIsPlaying(true), 500);
  };

  // Hardcoded positions for fruits on the tree (X%, Y% relative to tree container)
  const fruitPositions = [
    { x: 20, y: 30 }, { x: 80, y: 35 }, { x: 50, y: 15 }, 
    { x: 30, y: 50 }, { x: 70, y: 55 }, { x: 10, y: 40 },
    { x: 90, y: 45 }, { x: 40, y: 25 }, { x: 60, y: 25 },
    { x: 25, y: 65 }, { x: 75, y: 65 }, { x: 50, y: 40 },
    { x: 15, y: 55 }
  ];

  return (
    <div className="w-full h-[700px] relative overflow-hidden bg-gradient-to-b from-sky-200 to-sky-50 dark:from-[#0f172a] dark:to-[#1e293b] border-t border-gray-200 dark:border-white/5 font-sans group select-none">
      
      {/* --- CONTROLS --- */}
      <div className="absolute top-6 left-6 z-50 flex gap-2">
        <button 
          onClick={() => setIsPlaying(!isPlaying)}
          className="bg-white dark:bg-black/50 backdrop-blur-md px-4 py-2 rounded-md shadow-lg border border-gray-200 dark:border-white/10 text-dark dark:text-white font-bold text-xs uppercase tracking-widest hover:scale-105 transition-transform flex items-center gap-2"
        >
          <span className="material-symbols-outlined text-sm">{isPlaying ? 'pause' : 'play_arrow'}</span>
          {isPlaying ? 'Pause' : 'Play'}
        </button>
        <button 
          onClick={handleReset}
          className="bg-white dark:bg-black/50 backdrop-blur-md p-2 rounded-md shadow-lg border border-gray-200 dark:border-white/10 text-dark dark:text-white hover:rotate-180 transition-transform"
        >
          <span className="material-symbols-outlined text-sm">refresh</span>
        </button>
      </div>

      {/* --- BACKGROUND ELEMENTS --- */}
      {/* Sun */}
      <div className="absolute top-10 right-10 w-24 h-24 bg-yellow-300 rounded-full blur-[40px] opacity-60 animate-pulse"></div>
      
      {/* The Field (Ground) */}
      <div className="absolute bottom-0 w-[120%] -left-[10%] h-[150px] bg-[#4ade80] dark:bg-[#064e3b] rounded-[100%] translate-y-1/2 blur-sm scale-110"></div>
      <div className="absolute bottom-0 w-full h-[80px] bg-gradient-to-t from-[#22c55e] to-[#86efac] dark:from-[#065f46] dark:to-[#10b981]"></div>

      {/* --- THE TREE SVG --- */}
      <div className="absolute bottom-[60px] left-1/2 -translate-x-1/2 w-[600px] h-[500px] flex items-end justify-center pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 400 400" preserveAspectRatio="xMidYMax meet">
           {/* Trunk Growth Animation */}
           <path 
             d="M190,400 Q200,350 200,250 Q200,350 210,400 Z" 
             fill="#5D4037" 
             className="origin-bottom transition-transform duration-1000 ease-out"
             style={{ transform: `scaleY(${Math.min(1, progress / 20)})` }}
           />
           {/* Branches Growth */}
           <g className="origin-center transition-all duration-1000 delay-300" style={{ opacity: progress > 15 ? 1 : 0, transform: `scale(${Math.min(1, (progress - 15) / 10)})` }}>
              <path d="M200,250 Q150,150 100,200" stroke="#5D4037" strokeWidth="8" fill="none" strokeLinecap="round" />
              <path d="M200,250 Q250,150 300,200" stroke="#5D4037" strokeWidth="8" fill="none" strokeLinecap="round" />
              <path d="M200,220 Q180,120 140,100" stroke="#5D4037" strokeWidth="6" fill="none" strokeLinecap="round" />
              <path d="M200,220 Q220,120 260,100" stroke="#5D4037" strokeWidth="6" fill="none" strokeLinecap="round" />
              <path d="M200,180 V80" stroke="#5D4037" strokeWidth="6" fill="none" strokeLinecap="round" />
           </g>
           {/* Foliage (Leaves) */}
           <g className="origin-center transition-all duration-1000 delay-500" style={{ opacity: progress > 25 ? 1 : 0, transform: `scale(${Math.min(1, (progress - 25) / 10)})` }}>
              <circle cx="200" cy="100" r="60" fill="#22c55e" fillOpacity="0.8" />
              <circle cx="140" cy="150" r="50" fill="#22c55e" fillOpacity="0.8" />
              <circle cx="260" cy="150" r="50" fill="#22c55e" fillOpacity="0.8" />
              <circle cx="100" cy="200" r="40" fill="#22c55e" fillOpacity="0.8" />
              <circle cx="300" cy="200" r="40" fill="#22c55e" fillOpacity="0.8" />
           </g>
        </svg>
      </div>

      {/* --- THE TEAM (FRUITS -> FLOWERS) --- */}
      <div className="absolute inset-0 w-[600px] h-[500px] left-1/2 -translate-x-1/2 bottom-[60px] pointer-events-none">
         {team.map((member, idx) => {
            // Assign a fixed position from our array (loop if more members than positions)
            const pos = fruitPositions[idx % fruitPositions.length];
            
            // ANIMATION LOGIC:
            // 1. Growth: Scale from 0 to 1 (Progress 25-40)
            let scale = 0;
            if (progress > 25) scale = Math.min(1, (progress - 25) / 10);
            
            // 2. Falling: Top position changes (Progress 40-60)
            let topPos = `${pos.y}%`;
            let isFalling = false;
            let isGrounded = false;

            if (progress > 40) {
               const fallProgress = Math.min(1, (progress - 40 - (idx * 1.5)) / 15); // Staggered fall
               if (fallProgress > 0) isFalling = true;
               if (fallProgress >= 1) isGrounded = true;
               
               // Lerp from Tree Y to Ground Y (approx 90%)
               const currentY = pos.y + (fallProgress * (90 - pos.y));
               topPos = `${currentY}%`;
            }

            // 3. Blooming: Transform from ball to Card (Progress 60+)
            let bloomScale = 1;
            if (isGrounded && progress > 60) {
               bloomScale = 1; 
            }

            // Calculate horizontal spread on ground so they don't pile up
            // Map index to a spread from -250px to +250px
            const groundX = (idx - (team.length / 2)) * 40; 
            const finalLeft = isGrounded ? `calc(50% + ${groundX}px)` : `${pos.x}%`;

            return (
               <div 
                 key={idx}
                 className="absolute transition-all duration-700 ease-out flex flex-col items-center justify-center pointer-events-auto group/fruit"
                 style={{ 
                    top: topPos, 
                    left: finalLeft, 
                    transform: `scale(${scale})`,
                    zIndex: isGrounded ? 10 + idx : 5
                 }}
               >
                  {/* VISUAL STATE 1: THE FRUIT (While on tree or falling) */}
                  {!isGrounded && (
                     <div className="w-8 h-8 rounded-full bg-orange-500 shadow-lg border-2 border-orange-600 relative animate-bounce">
                        <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-1 h-2 bg-green-700"></div>
                        <div className="absolute -top-2 left-1/2 w-3 h-3 bg-green-500 rounded-full rounded-bl-none -translate-x-full"></div>
                     </div>
                  )}

                  {/* VISUAL STATE 2: THE FLOWER/CARD (Once landed) */}
                  {isGrounded && (
                     <div className="animate-in zoom-in spin-in-3 duration-500 origin-bottom">
                        {/* The Stem */}
                        <div className="w-1 h-6 bg-green-600 mx-auto"></div>
                        
                        {/* The Card (Flower) - RECTANGULAR SHAPE AS REQUESTED */}
                        <div className="relative -mt-16 bg-white dark:bg-[#232323] p-3 w-28 rounded-md shadow-xl border border-gray-200 dark:border-white/10 hover:scale-125 hover:z-50 transition-transform cursor-pointer">
                           <div className="w-8 h-8 bg-gray-100 dark:bg-white/10 rounded-sm mb-2 mx-auto overflow-hidden">
                              {member.image ? (
                                <img src={member.image} className="w-full h-full object-cover" alt="" />
                              ) : (
                                <span className="flex items-center justify-center h-full text-[10px] font-black text-muted dark:text-gray-400">
                                   {member.name.charAt(0)}
                                </span>
                              )}
                           </div>
                           <p className="text-[8px] font-black text-dark dark:text-white text-center leading-tight truncate">{member.name}</p>
                           <p className="text-[6px] font-bold text-primary text-center uppercase tracking-wider truncate mt-0.5">{member.role}</p>
                        </div>
                     </div>
                  )}
               </div>
            );
         })}
      </div>
      
      {/* Overlay Text during growth */}
      <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center transition-opacity duration-1000 pointer-events-none ${progress > 10 && progress < 40 ? 'opacity-100' : 'opacity-0'}`}>
         <h2 className="text-4xl font-black text-white drop-shadow-lg">We Started as a Seed.</h2>
      </div>
      <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center transition-opacity duration-1000 pointer-events-none ${progress > 60 && progress < 90 ? 'opacity-100' : 'opacity-0'}`}>
         <h2 className="text-4xl font-black text-white drop-shadow-lg">And Bloomed Together.</h2>
      </div>

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
    // --- PRODUCT TEAM ---
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
    // --- FRONTEND TEAM ---
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
    // --- BACKEND TEAM ---
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
    // --- DESIGN TEAM ---
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
    // --- OPS TEAM ---
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

  // Updated Card Render to be RECTANGULAR
  const renderMemberCard = (member, idx, isLarge = false) => (
    <div 
      key={idx} 
      onClick={() => setSelectedMember(member)}
      className={`group cursor-pointer bg-white dark:bg-white/5 border border-gray-100 dark:border-white/10 hover:border-primary/50 dark:hover:border-primary/50 hover:shadow-xl transition-all flex flex-col gap-3 relative overflow-hidden ${isLarge ? 'p-8 rounded-lg w-full max-w-sm mx-auto z-20 shadow-2xl ring-4 ring-white dark:ring-dark' : 'p-5 rounded-md animate-in zoom-in-95 duration-300'}`}
    >
      <div className={`flex flex-col items-center text-center`}>
        {/* SHAPE CHANGE: Rounded-md instead of rounded-full */}
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
                    
                    {/* BUTTONS: RECTANGULAR SHAPE (rounded-md) */}
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

          {/* LEVEL 3: LEAVES - RECTANGULAR CONTAINER */}
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
            {/* RECTANGULAR MODAL IMAGE */}
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
