
import React, { useState } from 'react';

interface TeamMember {
  name: string;
  role: string;
  description: string;
  linkedin?: string;
  github?: string;
  image?: string;
  category: 'lead' | 'tech' | 'design' | 'ops' | 'contributor';
}

const Team: React.FC = () => {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  const team: TeamMember[] = [
    {
      name: 'Ama Obeng',
      role: 'Founder & Project Lead',
      description: 'The visionary force behind MyKart, orchestrating the product roadmap and leading a global team to modernize Ghanaian retail.',
      category: 'lead',
      linkedin: 'https://www.linkedin.com/in/ama-obeng-9b70912a1/'
    },
    {
      name: 'Alyn Tetteh',
      role: 'Frontend Team Lead',
      description: 'Leads the development of user-facing features and frontend architecture.',
      category: 'tech',
      linkedin: 'https://www.linkedin.com/in/alyn-tetteh',
      github: 'https://github.com/AlynTetteh'
    },
    {
      name: 'Kwaku Aboagye-Frempong',
      role: 'Backend Team Lead',
      description: 'Leads backend architecture, APIs, and core system design.',
      category: 'tech',
      linkedin: 'https://www.linkedin.com/in/kwaku-aboagye-frempong'
    },
    {
      name: 'Nana Yaw',
      role: 'Frontend Developer',
      description: 'Building beautiful, responsive user interfaces and ensuring a seamless experience for our customers.',
      category: 'tech',
    },
    // MOVED SETH TO CONTRIBUTOR
    {
      name: 'Seth Akoto',
      role: 'Community & Ideation',
      description: 'Contributed to early brainstorming sessions and helped shape the initial conceptualization of the MyKart platform.',
      category: 'contributor',
      linkedin: 'https://www.linkedin.com/in/sethakoto/'
    },
    // MOVED PETER TO CONTRIBUTOR
    {
      name: 'Peter Kersi',
      role: 'Community & Ideation',
      description: 'Provided valuable input on product direction and user experience concepts during the foundational phase.',
      category: 'contributor',
      linkedin: 'https://www.linkedin.com/in/peter-kersi-9826372b7/',
      github: 'https://github.com/jpkersi'
    },
    // MOVED THEOFORD TO CONTRIBUTOR
    {
      name: 'Theoford Gyanfosu',
      role: 'Community & Ideation',
      description: 'Supported the team with core ideas and strategic discussions that helped define the backend logic requirements.',
      category: 'contributor',
      linkedin: 'https://www.linkedin.com/in/theoford-gyanfosu-7b2a5a2b8/',
      github: 'https://github.com/nanagyanfosu'
    },
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
      name: 'Antown',
      role: 'Marketing & Growth',
      description: 'Leads early growth strategy and customer acquisition.',
      category: 'ops',
      linkedin: 'https://www.linkedin.com/in/antoungmine-omar'
    }
  ];

  const renderMemberCard = (member: TeamMember, idx: number, isLarge: boolean = false) => (
    <div 
      key={idx} 
      onClick={() => setSelectedMember(member)}
      className={`group cursor-pointer bg-white border border-gray-100 hover:border-primary/20 hover:shadow-2xl hover:shadow-gray-200/50 transition-all flex flex-col gap-4 relative overflow-hidden ${isLarge ? 'p-10 rounded-[3rem] max-w-2xl mx-auto' : 'p-6 rounded-3xl'}`}
    >
      <div className={`flex justify-between items-start ${isLarge ? 'flex-col items-center text-center' : ''}`}>
        <div className={`${isLarge ? 'w-32 h-32 md:w-48 md:h-48 mb-6' : 'w-14 h-14'} bg-bg-light rounded-2xl md:rounded-[2rem] flex items-center justify-center font-black text-primary overflow-hidden border border-gray-50 shadow-inner`}>
          {member.image ? (
            <img src={member.image} className="w-full h-full object-cover" alt={member.name} />
          ) : (
            <span className={isLarge ? 'text-4xl' : 'text-lg'}>
              {member.name.split(' ').map(n => n[0]).join('')}
            </span>
          )}
        </div>
        {!isLarge && (
          <div className="flex gap-2">
            {member.linkedin && (
              <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-muted hover:bg-primary hover:text-white transition-all" onClick={(e) => e.stopPropagation()}>
                <span className="material-symbols-outlined text-[20px]">link</span>
              </a>
            )}
          </div>
        )}
      </div>
      <div className={isLarge ? 'text-center' : ''}>
        <h4 className={`${isLarge ? 'text-3xl md:text-4xl' : 'text-lg'} font-black text-dark group-hover:text-primary transition-colors`}>{member.name}</h4>
        <p className={`${isLarge ? 'text-sm mb-4' : 'text-[10px]'} text-primary font-extrabold uppercase tracking-widest`}>{member.role}</p>
        {isLarge && <p className="text-muted text-lg leading-relaxed max-w-lg mx-auto">{member.description}</p>}
      </div>
      {!isLarge && (
        <div className="mt-2 flex items-center gap-1">
          <span className="text-[10px] text-primary font-bold uppercase tracking-tighter">View Bio</span>
          <span className="material-symbols-outlined text-[14px] text-primary">arrow_forward</span>
        </div>
      )}
    </div>
  );

  const leadMember = team.find(m => m.category === 'lead')!;

  return (
    <div className="flex flex-col w-full bg-bg-light min-h-screen">
      <section className="pt-24 pb-16 px-4 bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto text-center">
          <span className="text-primary font-bold text-xs uppercase tracking-widest block mb-4">EST. 2025</span>
          <h1 className="text-5xl md:text-8xl font-black mb-8 text-dark tracking-tighter leading-none">Our Core Team.</h1>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-sm font-black mb-12 text-center uppercase tracking-widest text-dark/40">Founder & Lead</h2>
          {renderMemberCard(leadMember, 0, true)}
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          {['tech', 'design', 'ops'].map(cat => {
            const filteredMembers = team.filter(m => m.category === cat);
            const title = cat === 'tech' ? 'Technology' : cat === 'design' ? 'Design' : 'Operations';
            if (filteredMembers.length === 0) return null;
            return (
              <div key={cat} className="mb-20">
                <h2 className="text-sm font-black mb-8 border-l-4 border-primary pl-4 uppercase tracking-widest text-dark/40">{title}</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredMembers.map((m, idx) => renderMemberCard(m, idx))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Bio Modal */}
      {selectedMember && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-dark/80 backdrop-blur-md animate-in fade-in duration-300"
          onClick={() => setSelectedMember(null)}
        >
          <div 
            className="bg-white rounded-[2.5rem] w-full max-w-lg shadow-2xl animate-in zoom-in-95 duration-200 p-8 md:p-12 text-center relative overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="absolute top-0 right-0 p-6">
               <button 
                  onClick={() => setSelectedMember(null)}
                  className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-muted hover:bg-gray-100 transition-colors"
               >
                  <span className="material-symbols-outlined">close</span>
               </button>
            </div>
            
            <div className="w-24 h-24 bg-bg-light rounded-[2rem] flex items-center justify-center font-black text-primary overflow-hidden border border-gray-50 shadow-inner mx-auto mb-6">
              {selectedMember.image ? (
                <img src={selectedMember.image} className="w-full h-full object-cover" alt={selectedMember.name} />
              ) : (
                <span className="text-3xl">
                  {selectedMember.name.split(' ').map(n => n[0]).join('')}
                </span>
              )}
            </div>
            
            <h3 className="text-3xl font-black text-dark mb-1">{selectedMember.name}</h3>
            <p className="text-primary font-extrabold uppercase tracking-widest text-xs mb-6">{selectedMember.role}</p>
            
            <p className="text-muted text-lg leading-relaxed mb-8">
              {selectedMember.description}
            </p>
            
            <div className="flex justify-center gap-4 mb-8">
              {selectedMember.linkedin && (
                <a href={selectedMember.linkedin} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center text-muted hover:bg-primary hover:text-white transition-all">
                  <span className="material-symbols-outlined">link</span>
                </a>
              )}
              {selectedMember.github && (
                <a href={selectedMember.github} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center text-muted hover:bg-primary hover:text-white transition-all">
                  <span className="material-symbols-outlined text-[20px]">code</span>
                </a>
              )}
            </div>
            
            <button 
              onClick={() => setSelectedMember(null)}
              className="w-full py-4 bg-dark text-white font-bold rounded-2xl hover:bg-black transition-colors"
            >
              Close Bio
            </button>
          </div>
        </div>
      )}

      {/* Join the Team Section */}
      <section className="py-32 px-4 bg-white border-t border-gray-100 relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative z-10">
           <div className="inline-flex items-center gap-2 px-4 py-1 bg-primary/10 rounded-full mb-8">
              <span className="material-symbols-outlined text-primary text-[18px]">rocket_launch</span>
              <span className="text-xs font-black text-primary uppercase tracking-widest">We are Looking for Volunteers</span>
           </div>
           <h2 className="text-4xl md:text-7xl font-black text-dark tracking-tighter leading-[0.95] mb-8">Join the Mission.</h2>
           <p className="text-xl text-muted font-medium max-w-2xl mx-auto leading-relaxed mb-12">
             We are looking for passionate builders, designers, and operators to help us reshape retail in Ghana. If you want to build for the future, we want to meet you.
           </p>
           <a 
             href="https://tally.so/r/WO2v4v" 
             target="_blank" 
             rel="noopener noreferrer"
             className="inline-flex items-center gap-3 px-10 py-5 bg-primary text-white font-black text-lg rounded-2xl shadow-2xl shadow-primary/30 hover:bg-orange-600 hover:scale-105 active:scale-95 transition-all group"
           >
             Apply to Join Us
             <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">north_east</span>
           </a>
        </div>
        <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-accent/20 rounded-full blur-[100px]"></div>
        <div className="absolute -top-20 -left-20 w-80 h-80 bg-primary/5 rounded-full blur-[100px]"></div>
      </section>
    </div>
  );
};

export default Team;

