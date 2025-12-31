
import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="flex flex-col w-full bg-white dark:bg-white/5">
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20">
          <div>
            <h1 className="text-4xl md:text-7xl font-black leading-tight mb-8">Get in Touch</h1>
            <p className="text-xl text-muted dark:text-gray-300 leading-relaxed mb-12">
              Have questions, ideas, or want to follow our progress? Drop us a message and we'll get back to you within 24 hours.
            </p>
            
            <div className="space-y-8">
               <div className="flex gap-6 items-start">
                  <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary shrink-0">
                    <span className="material-symbols-outlined text-[32px]">mail</span>
                  </div>
                  <div>
                    <h4 className="font-black text-lg">Email Us</h4>
                    <p className="text-muted dark:text-gray-300">info@mykartgrocery.com</p>
                  </div>
               </div>
               <div className="flex gap-6 items-start">
                  <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary shrink-0">
                    <span className="material-symbols-outlined text-[32px]">map</span>
                  </div>
                  <div>
                    <h4 className="font-black text-lg">Headquarters</h4>
                    <p className="text-muted dark:text-gray-300">Accra, Ghana</p>
                  </div>
               </div>
            </div>
          </div>

          <div className="flex items-center">
            <div className="w-full bg-white dark:bg-white/5 p-10 md:p-12 rounded-[3rem] shadow-xl shadow-gray-200/50 border border-gray-100 text-center flex flex-col items-center justify-center">
               <div className="w-20 h-20 bg-primary/10 rounded-3xl flex items-center justify-center text-primary mb-8">
                  <span className="material-symbols-outlined text-[40px]">forum</span>
               </div>
               <h3 className="text-3xl font-black text-dark dark:text-white mb-4">Message Our Team</h3>
               <p className="text-muted dark:text-gray-300 text-lg mb-10 leading-relaxed">
                  To ensure we capture all your details correctly, we use a secure form for all inquiries.
               </p>
               <a 
                 href="https://tally.so/r/aQeLEW" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="w-full py-5 bg-primary text-white font-black text-xl rounded-2xl shadow-xl shadow-primary/30 flex items-center justify-center gap-3 hover:bg-orange-600 transition-all hover:scale-105 active:scale-95"
               >
                  Send a message
                  <span className="material-symbols-outlined">send</span>
               </a>
               <p className="mt-6 text-xs text-muted dark:text-gray-300/60 font-bold uppercase tracking-widest">Powered by Tally Forms</p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24 px-4">
         <div className="max-w-6xl mx-auto bg-primary rounded-[3rem] p-12 md:p-24 text-white text-center relative overflow-hidden">
            <div className="relative z-10">
               <h2 className="text-3xl md:text-5xl font-black mb-6">Stay Updated</h2>
               <p className="text-lg opacity-90 max-w-xl mx-auto mb-10">Join the MyKart kommunity! Get the latest news on our launch and fresh features.</p>
               <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
                  <input type="email" placeholder="Enter your email" className="flex-1 px-8 py-4 rounded-2xl text-dark dark:text-white outline-none font-bold" />
                  <button className="px-8 py-4 bg-dark text-white font-bold rounded-2xl shadow-xl hover:bg-black transition-colors">Subscribe</button>
               </div>
            </div>
            <div className="absolute top-[-20px] left-[-20px] opacity-10">
               <span className="material-symbols-outlined text-[300px]">mail</span>
            </div>
         </div>
      </section>
    </div>
  );
};

export default Contact;
