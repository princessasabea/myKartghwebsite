
import React, { useState } from 'react';

interface DeliveryMode {
  id: string;
  title: string;
  tag: string;
  text: string;
  icon: string;
  img: string;
  longDesc: string;
}

const Delivery: React.FC = () => {
  const [selectedDetail, setSelectedDetail] = useState<DeliveryMode | null>(null);

  const deliveryModes: DeliveryMode[] = [
    { 
      id: 'direct',
      title: 'Upcoming: Direct Delivery', 
      tag: 'IN DEVELOPMENT', 
      text: 'Our primary launch model. Your Personal Shopper is also your Delivery Driver.',
      icon: 'directions_car',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA_kPOpx_83WwiEKqtZkWQfWRED61slNiHHp4tA3r6ZUHEsXhiQPXKDwjRXgnv7atk2A3mVKKQ2GENZzweXQ4dfNx9HVqXGM91i_H4ygzgzQGGo4wCgOgwaRm3Q9AqcufKJIZPqRmHHNkMd5bFh3NUWH6cZ6m_-Xa7VYy-U6EfrAEOztHKq2FajDxX71ooVpvws8MtUJXUTYTsFHpz8FWSZT0pvYcgupxgKivqfhcb52LOiAG8kgQcL5IBrl5rO47SL3FMkVz3_7NE',
      longDesc: "Planned Direct Delivery is a revolutionary model built specifically for the Ghanaian context. We are reimagining the grocery chain by merging the role of the Personal Shopper and the Delivery Driver into one trusted individual.\n\nIn typical apps, shoppers and riders are different people. At MyKart, we are building a system where the person who picks your tomatoes is the same person who drives them to your door. This ensures absolute accountability and eliminates the 'broken link' often found in multi-stage deliveries. Your dedicated Shopper will ensure every item is fresh, then personally handle the delivery in a salon car to shield your groceries from heat and dust."
    },
    { 
      id: 'truck',
      title: 'Planned: Kommunity Truck', 
      tag: 'LOGISTICS PHASE 2', 
      text: 'Bulk purchasing and flexible neighborhood hubs for a wider audience.',
      icon: 'groups',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAqsLfSScRC9-KJf0BkFs7yI_o_4Ii2oZw9MQrSvz7XwgF7cRozZJoyI7nIrV6Oud_dSRZeaLnZDxb8h4tQF-5HlttV5ZlDz4mGGTAE6v2yGksl5cve1qg2PXzQPF4dfTP_btEwRUigXlkmWS97Mh5pRKsLTkDNu5DKu6yJxvBUCo9kL9lLHy3GZpGTc5CyeXVIXe3UrLcrsOq4ZE2pKnxlPJkad-JM3hbKO4f6YNX-VdjFEGGJNhnc_SC2SsZpW9biiVUe0HPWcCc',
      longDesc: "The upcoming Kommunity Truck is our answer to making high-quality groceries accessible and affordable to a wider audience. This planned option allows users to purchase in bulk at significant savings, perfectly suited for large households and neighborhood co-ops.\n\nWe are designing for unparalleled flexibility: choosing from various designated pick-up spots throughout the week based on our published schedule. Our system will allow you to follow the truck coming to your area and see who else has started an order to unlock collective discounts. It's about more than just food; it's about shopping together as a Kommunity."
    },
    { 
      id: 'express',
      title: 'Upcoming: Express Bike', 
      tag: 'PHASE 1 EXPANSION', 
      text: 'For small top-up orders and exclusive chef-curated meals.',
      icon: 'bolt',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBX6IdYG5gZ1ig2wwDuzW1Mh_wiMfLWi3jezSpif86v-fv38DOYqc-IMn5DTyCLwoTLqUpmwGkr5iajlR7uKDM8nRzPpNxbImA7-jPCuKEsRQGn5eTDAIuF9aIK4SY40Bpbixu9vFzfie63ZW8OZlVVkM3ehDr7FSu1jqP9YKhR7m7_YzYucKJpH89wwG6y7Lr3vq41_UsiUvie35X1cEvEviNRrxn4DodCc7Z-wEGszVFnaWKNa2ybjzqq1wMt3JeqShj_VVYZb7k',
      longDesc: "Express Bike is currently being planned for those 'just in time' moments. It's the perfect solution for small top-up orders of essential items that can navigate traffic quickly to reach you.\n\nAdditionally, this mode will handle our upcoming 'Chef Orders' feature. We are currently identifying local culinary talent to deliver curated recipe packs and exclusive, high-quality meals directly to your door. When speed is paramount for your light shopping or gourmet needs, Express Bike will be the most efficient choice."
    }
  ];

  return (
    <div className="flex flex-col w-full bg-bg-light min-h-screen">
      <section className="py-16 md:py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-2xl mb-16">
            <span className="text-primary font-bold text-xs uppercase tracking-widest block mb-4">Infrastructure Planning</span>
            <h1 className="text-4xl md:text-7xl font-extrabold leading-tight mb-6">Planned Delivery Ecosystem</h1>
            <p className="text-xl text-muted dark:text-gray-300 leading-relaxed">
              We are perfecting several modes of delivery to ensure we reach every corner of the community efficiently.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {deliveryModes.map((item, idx) => (
              <div key={idx} className="bg-white dark:bg-white/5 rounded-[2rem] shadow-xl shadow-gray-200/50 overflow-hidden flex flex-col group hover:scale-[1.02] transition-transform duration-300 border border-gray-100">
                <div className="h-48 overflow-hidden">
                  <img src={item.img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={item.title} />
                </div>
                <div className="p-8 flex flex-col flex-1">
                  <span className="inline-flex items-center gap-1 px-3 py-1 bg-primary/10 text-primary text-[10px] font-black rounded-full mb-4 uppercase tracking-widest self-start">
                    <span className="material-symbols-outlined text-[14px]">{item.icon}</span>
                    {item.tag}
                  </span>
                  <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                  <p className="text-muted dark:text-gray-300 leading-relaxed mb-6 flex-1">{item.text}</p>
                  <button 
                    onClick={() => setSelectedDetail(item)}
                    className="flex items-center gap-2 text-primary font-bold hover:gap-4 transition-all"
                  >
                    View Planned Details <span className="material-symbols-outlined">arrow_forward</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedDetail && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-dark/80 backdrop-blur-md animate-in fade-in duration-300"
          onClick={() => setSelectedDetail(null)}
        >
          <div 
            className="bg-white dark:bg-white/5 rounded-[2.5rem] w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl animate-in zoom-in-95 duration-200 p-8 md:p-12"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-start mb-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined text-[24px]">{selectedDetail.icon}</span>
                </div>
                <div>
                  <h2 className="text-3xl font-black text-dark dark:text-white">Upcoming Feature</h2>
                  <p className="text-primary font-bold text-xs uppercase tracking-widest">{selectedDetail.tag}</p>
                </div>
              </div>
              <button 
                onClick={() => setSelectedDetail(null)}
                className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-muted dark:text-gray-300 hover:bg-gray-100 transition-colors"
              >
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>
            
            <div className="aspect-video rounded-3xl overflow-hidden mb-8 border border-gray-100">
              <img src={selectedDetail.img} className="w-full h-full object-cover" alt={selectedDetail.title} />
            </div>

            <div className="prose prose-lg">
              {selectedDetail.longDesc.split('\n\n').map((para, i) => (
                <p key={i} className="text-muted dark:text-gray-300 text-lg leading-relaxed mb-6 whitespace-pre-line">
                  {para}
                </p>
              ))}
            </div>

            <div className="mt-8 pt-8 border-t border-gray-100 flex justify-end">
              <button 
                onClick={() => setSelectedDetail(null)}
                className="px-8 py-3 bg-dark text-white font-bold rounded-xl hover:bg-black transition-all"
              >
                Close Preview
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Delivery;
