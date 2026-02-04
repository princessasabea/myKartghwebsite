import React, { useState } from 'react';

const Team = () => {
  const [selectedMember, setSelectedMember] = useState(null);
  // Default to opening the 'product' branch first
  const [activeCategory, setActiveCategory] = useState('product');

  const team = [
    {
      name: 'Ama Obeng',
      role: 'Founder & Project Lead',
      description: 'The visionary force behind MyKart, orchestrating the product roadmap and leading a global team to modernize Ghanaian retail.',
      category: 'lead',
      linkedin: 'https://www.linkedin.com/in/ama-obeng-9b70912a1/'
    },
    // --- PRODUCT TEAM (Sika & Peter) ---
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
    // --- FRONTEND TEAM (Alyn, Nana, Seth) ---
    {
      name: 'Alyn Tetteh',
      role: 'Frontend Team Lead',
      description: 'Leads the development of user-facing features and frontend architecture.',
      category: 'frontend',
      linkedin: 'https://www.linkedin.com/in/alyn-tetteh',
      github: 'https://github.com/AlynTetteh'
    },
    {
      name: 'Nana Yaw',
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
    // --- BACKEND TEAM (Kwaku, Theoford) ---
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
      name: 'Damilola',
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

  const leadMember = team.find(m => m.category === 'lead');

  // Categories for the tree branches
  const categories = [
    { id: 'product', label: 'Product & Mgmt', icon: 'manage_accounts' },
    { id: 'frontend', label: 'Frontend', icon: 'code' },
    { id: 'backend', label: 'Backend', icon: 'dns' },
    { id: 'design', label: 'Design', icon: 'palette' },
    { id: 'ops', label: 'Operations', icon: 'rocket_launch' },
  ];

  const renderMemberCard = (member, idx, isLarge = false) => (
    <div 
      key={idx} 
      onClick={() => setSelectedMember(member)}
      className={`group cursor-pointer bg-white dark:bg-white/5 border border-gray-100 dark:border-white/10 hover:border-primary/50 dark:hover:border-primary/50 hover:shadow-xl transition-all flex flex-col gap-3 relative overflow-hidden ${isLarge ? 'p-8 rounded-[2.5rem] w-full max-w-sm mx-auto z-20 shadow-2xl ring-4 ring-white dark:ring-dark' : 'p-5 rounded-3xl animate-in zoom-in-95 duration-300'}`}
    >
      <div className={`flex flex-col items-center text-center`}>
        <div className={`${isLarge ? 'w-32 h-32 mb-4' : 'w-16 h-16 mb-3'} bg-bg-light dark:bg-white/10 rounded-full flex items-center justify-center font-black text-primary overflow-hidden border-2 border-gray-100 dark:border-white/5 shadow-inner`}>
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
      <section className="pb-32 px-4 overflow-x-auto">
        <div className="min-w-[800px] max-w-6xl mx-auto flex flex-col items-center">
          
          {/* LEVEL 1: FOUNDER (ROOT) */}
          <div className="relative mb-12">
             {leadMember && renderMemberCard(leadMember, 0, true)}
             {/* Vertical Line Down from Founder */}
             <div className="absolute left-1/2 -translate-x-1/2 top-full h-12 w-0.5 bg-gray-300 dark:bg-gray-700"></div>
          </div>

          {/* LEVEL 2: BRANCHES (Categories) */}
          <div className="w-full flex justify-center items-start gap-4 relative">
             {/* Horizontal Connecting Line */}
             <div className="absolute top-0 left-[10%] right-[10%] h-0.5 bg-gray-300 dark:bg-gray-700"></div>

             {categories.map((cat, idx) => {
               const isActive = activeCategory === cat.id;
               return (
                 <div key={cat.id} className="flex flex-col items-center flex-1 relative">
                    {/* Vertical Connector from Horizontal Line to Bubble */}
                    <div className="h-8 w-0.5 bg-gray-300 dark:bg-gray-700"></div>
                    
                    {/* Category Bubble Button */}
                    <button 
                      onClick={() => setActiveCategory(cat.id)}
                      className={`relative z-10 px-6 py-3 rounded-2xl border-2 transition-all duration-300 flex items-center gap-2 shadow-lg hover:scale-105 active:scale-95 ${isActive ? 'bg-primary border-primary text-white scale-110 shadow-primary/30' : 'bg-white dark:bg-[#1e1e1e] border-gray-200 dark:border-white/10 text-muted dark:text-gray-400 hover:border-primary/50'}`}
                    >
                       <span className="material-symbols-outlined text-[18px]">{cat.icon}</span>
                       <span className="font-bold text-sm whitespace-nowrap">{cat.label}</span>
                    </button>

                    {/* Active Line Down to Members */}
                    <div className={`h-12 w-0.5 transition-all duration-300 ${isActive ? 'bg-primary h-12' : 'bg-transparent h-0'}`}></div>
                 </div>
               );
             })}
          </div>

          {/* LEVEL 3: LEAVES (Members Grid) */}
          <div className="w-full bg-gray-50/50 dark:bg-white/5 rounded-[3rem] border border-gray-200 dark:border-white/10 p-8 md:p-12 mt-4 min-h-[400px] transition-all relative">
             {/* Decorative Corner Lines */}
             <div className="absolute top-0 left-1/2 -translate-x-1/2 -mt-4 w-4 h-4 bg-primary rounded-full animate-bounce"></div>

             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
               {team
                 .filter(m => m.category === activeCategory)
                 .map((m, idx) => renderMemberCard(m, idx))
               }
               {team.filter(m => m.category === activeCategory).length === 0 && (
                 <div className="col-span-full text-center py-20 text-muted dark:text-gray-500">
                    No members found in this branch yet.
                 </div>
               )}
             </div>
          </div>

        </div>
      </section>

      {/* Bio Modal (Unchanged logic, just keeping it consistent) */}
      {selectedMember && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-dark/80 backdrop-blur-md animate-in fade-in duration-300"
          onClick={() => setSelectedMember(null)}
        >
          <div 
            className="bg-white dark:bg-gray-900 rounded-[2.5rem] w-full max-w-lg shadow-2xl animate-in zoom-in-95 duration-200 p-8 md:p-12 text-center relative overflow-hidden border border-gray-100 dark:border-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="absolute top-0 right-0 p-6">
               <button onClick={() => setSelectedMember(null)} className="w-10 h-10 rounded-full bg-gray-50 dark:bg-white/10 flex items-center justify-center text-muted dark:text-white hover:bg-gray-100 transition-colors">
                 <span className="material-symbols-outlined">close</span>
               </button>
            </div>
            <div className="w-24 h-24 bg-bg-light dark:bg-white/5 rounded-[2rem] flex items-center justify-center font-black text-primary overflow-hidden border border-gray-50 dark:border-white/5 shadow-inner mx-auto mb-6">
              {selectedMember.image ? (
                <img src={selectedMember.image} className="w-full h-full object-cover" alt={selectedMember.name} />
              ) : (
                <span className="text-3xl">{selectedMember.name.split(' ').map(n => n[0]).join('')}</span>
              )}
            </div>
            <h3 className="text-3xl font-black text-dark dark:text-white mb-1">{selectedMember.name}</h3>
            <p className="text-primary font-extrabold uppercase tracking-widest text-xs mb-6">{selectedMember.role}</p>
            <p className="text-muted dark:text-gray-300 text-lg leading-relaxed mb-8">{selectedMember.description}</p>
            <div className="flex justify-center gap-4 mb-8">
              {selectedMember.linkedin && (
                <a href={selectedMember.linkedin} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-gray-50 dark:bg-white/10 flex items-center justify-center text-muted dark:text-white hover:bg-primary hover:text-white transition-all">
                  <span className="material-symbols-outlined">link</span>
                </a>
              )}
              {selectedMember.github && (
                <a href={selectedMember.github} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-gray-50 dark:bg-white/10 flex items-center justify-center text-muted dark:text-white hover:bg-primary hover:text-white transition-all">
                  <span className="material-symbols-outlined text-[20px]">code</span>
                </a>
              )}
            </div>
            <button onClick={() => setSelectedMember(null)} className="w-full py-4 bg-dark dark:bg-white text-white dark:text-dark font-bold rounded-2xl hover:bg-black transition-colors">Close Bio</button>
          </div>
        </div>
      )}

      {/* Join CTA */}
      <section className="py-32 px-4 bg-white dark:bg-white/5 border-t border-gray-100 dark:border-white/10 relative overflow-hidden text-center">
         <div className="max-w-4xl mx-auto relative z-10">
            <h2 className="text-4xl md:text-7xl font-black text-dark dark:text-white tracking-tighter mb-8">Grow with us.</h2>
            <a href="https://tally.so/r/WO2v4v" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 px-10 py-5 bg-primary text-white font-black text-lg rounded-2xl shadow-2xl hover:scale-105 transition-all">
              Apply to Join <span className="material-symbols-outlined">north_east</span>
            </a>
         </div>
      </section>
    </div>
  );
};

export default Team;
