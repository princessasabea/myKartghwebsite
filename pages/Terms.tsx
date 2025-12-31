
import React from 'react';

const Terms: React.FC = () => {
  return (
    <div className="flex flex-col w-full bg-white dark:bg-white/5 py-24 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-7xl font-black mb-4">Terms of Service</h1>
        <p className="text-muted dark:text-gray-300 mb-12">Last updated: January 1, 2025</p>
        
        <div className="prose prose-lg text-muted dark:text-gray-300 space-y-8">
           <section>
              <h3 className="text-2xl font-black text-dark dark:text-white mb-4">1. Acceptance of Terms</h3>
              <p>By accessing and using MyKart, you agree to be bound by these Terms of Service. If you do not agree to all of these terms, please do not use our services.</p>
           </section>

           <section>
              <h3 className="text-2xl font-black text-dark dark:text-white mb-4">2. Description of Service</h3>
              <p>MyKart provides a platform connecting users with local grocery retailers and personal shoppers for the delivery of goods within specified zones in Ghana.</p>
           </section>

           <section>
              <h3 className="text-2xl font-black text-dark dark:text-white mb-4">3. User Responsibilities</h3>
              <p>Users are responsible for providing accurate delivery addresses and being present to receive orders at the time of delivery. Failure to do so may result in additional fees.</p>
           </section>

           <section>
              <h3 className="text-2xl font-black text-dark dark:text-white mb-4">4. Payments and Refunds</h3>
              <p>All payments are processed securely via Mobile Money or integrated card payments. Refunds are handled on a case-by-case basis through our support team at info@mykartgrocery.com.</p>
           </section>

           <section>
              <h3 className="text-2xl font-black text-dark dark:text-white mb-4">5. Modifications</h3>
              <p>MyKart reserves the right to modify these terms at any time. Continued use of the service following such changes constitutes your acceptance of the new terms.</p>
           </section>
        </div>
      </div>
    </div>
  );
};

export default Terms;
