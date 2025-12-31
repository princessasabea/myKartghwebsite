
import React from 'react';

const Privacy: React.FC = () => {
  return (
    <div className="flex flex-col w-full bg-white dark:bg-white/5 py-24 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-7xl font-black mb-4">Privacy Policy</h1>
        <p className="text-muted dark:text-gray-300 mb-12">Last updated: January 1, 2026</p>
        
        <div className="prose prose-lg text-muted dark:text-gray-300 space-y-8">
           <section>
              <h3 className="text-2xl font-black text-dark dark:text-white mb-4">Introduction</h3>
              <p>Welcome to MyKart. We are committed to protecting your personal information and your right to privacy. If you have any questions or concerns about our policy, please contact us at support@mykart.gh.</p>
           </section>

           <section>
              <h3 className="text-2xl font-black text-dark dark:text-white mb-4">How We Use Your Info</h3>
              <ul className="list-disc pl-6 space-y-3 font-medium">
                 <li>To facilitate account creation and log-on/in process.</li>
                 <li>To fulfill and manage your orders.</li>
                 <li>To send you administrative information.</li>
                 <li>To protect our services from fraud.</li>
              </ul>
           </section>

           <section className="bg-bg-light p-8 rounded-3xl border border-gray-100">
              <h3 className="text-xl font-bold text-dark dark:text-white mb-4">Location Data</h3>
              <p className="text-sm">We collect precise location data to track deliveries and show nearby stores, even when the app is in the background, to ensure accurate delivery times.</p>
           </section>

           <section>
              <h3 className="text-2xl font-black text-dark dark:text-white mb-4">Data Security</h3>
              <p>We have implemented appropriate technical and organizational security measures designed to protect the security of any personal information we process.</p>
           </section>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
