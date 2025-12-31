
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const InteractiveStory: React.FC<{ 
  title: string; 
  subtitle: string; 
  steps: { title: string; desc: string; icon: string; image: string }[] 
}> = ({ title, subtitle, steps }) => {
  const [currentStep, setCurrentStep] = useState(0);

  const next = () => setCurrentStep((prev) => (prev === steps.length - 1 ? 0 : prev + 1));
  const prev = () => setCurrentStep((prev) => (prev === 0 ? steps.length - 1 : prev - 1));

  return (
    <div className="w-full bg-white dark:bg-white/5 rounded-2xl md:rounded-[3rem] border border-gray-100 shadow-2xl overflow-hidden mb-8 md:mb-16">
      <div className="p-5 md:p-12 border-b border-gray-50 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h3 className="text-xl md:text-3xl font-black text-dark dark:text-white tracking-tighter leading-tight">{title}</h3>
          <p className="text-xs md:text-base text-muted dark:text-gray-300 font-medium">{subtitle}</p>
        </div>
        <div className="flex gap-2 w-full md:w-auto">
          <button onClick={prev} className="flex-1 md:flex-none w-10 h-10 md:w-12 md:h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 active:scale-90 transition-all">
            <span className="material-symbols-outlined">chevron_left</span>
          </button>
          <button onClick={next} className="flex-1 md:flex-none w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary text-white flex items-center justify-center hover:bg-orange-600 active:scale-90 transition-all shadow-lg shadow-primary/20">
            <span className="material-symbols-outlined">chevron_right</span>
          </button>
        </div>
      </div>
      
      <div className="flex flex-col md:flex-row">
        <div className="flex-1 p-5 md:p-12 flex flex-col justify-center bg-gradient-to-br from-white to-gray-50 min-h-[240px] md:min-h-[450px]">
          <div className="flex items-center gap-3 mb-4 md:mb-6">
            <div className="w-8 h-8 md:w-12 md:h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary font-black text-sm md:text-base">
              {currentStep + 1}
            </div>
            <span className="text-[10px] md:text-xs font-black text-muted dark:text-gray-300 uppercase tracking-[0.2em]">Step {currentStep + 1} of {steps.length}</span>
          </div>
          <h4 className="text-lg md:text-3xl font-black text-dark dark:text-white mb-3 md:mb-4 leading-tight">{steps[currentStep].title}</h4>
          <p className="text-sm md:text-lg text-muted dark:text-gray-300 font-medium leading-relaxed mb-6 md:mb-8">
            {steps[currentStep].desc}
          </p>
          <div className="flex gap-2 mt-auto">
            {steps.map((_, idx) => (
              <div 
                key={idx} 
                className={`h-1 md:h-1.5 rounded-full transition-all duration-300 ${idx === currentStep ? 'w-8 bg-primary' : 'w-2 bg-gray-200'}`}
              />
            ))}
          </div>
        </div>
        <div className="flex-1 relative overflow-hidden h-[200px] md:h-auto min-h-[200px]">
          <img 
            src={steps[currentStep].image} 
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500" 
            alt={steps[currentStep].title} 
          />
          <div className="absolute inset-0 bg-dark/20 backdrop-blur-[1px] flex items-center justify-center">
             <div className="w-12 h-12 md:w-24 md:h-24 bg-white dark:bg-white/5/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 text-white animate-pulse">
                <span className="material-symbols-outlined text-2xl md:text-[48px]">{steps[currentStep].icon}</span>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Community: React.FC = () => {
  const feedItems = [
    {
      type: 'Vendor Spotlight',
      author: 'Auntie Mansa',
      location: 'Makola Market',
      content: 'Fresh batch of organic garden eggs just arrived! Picked this morning from the Aburi hills. Come find me at Stall 42 or order through the K-Truck.',
      time: '2h ago',
      icon: 'storefront',
      image: 'https://raw.githubusercontent.com/princessasabea/myKartghwebsite/main/public/ghanaian%20market.jpg'
    },
    {
      type: 'Chef\'s Corner',
      author: 'Chef Selassie',
      location: 'East Legon',
      content: 'Secret technique alert! For the perfect Red-Red, always soak your beans for at least 6 hours and add a pinch of cloves while boiling. Full recipe in the Hub!',
      time: '5h ago',
      icon: 'cooking',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDU2nTF3e_Pfk3HxGvcjC1OCainWfhtvmFhYpKYW2iRvuH4Uc6m7ORkxyeMQ8F5GKE68xotiDw3OqmZwEoyl1du725caX35_QVsKHfSsOepAIvu1lO8buQnsTz1Jizjkr9mf6C8WN3TvXZNKQvOO2T3L9y7Qtbs2R-7xwlT4C_CZE-tiNPwJ9mr7XhFkNlH7BPRIo1wnxPQazqMaqA5JstTEvvlpRTeIDq2nk6nttXwkJest6NQRcK_Rd5FtWrVqdrjWDp-ThwGVEw'
    }
  ];

  const truckStory = [
    { title: "Schedule Set", desc: "MyKart sets a schedule per area. For example, Wednesday at Madina Market Car Park. Neighbors see the cut-off time (Tuesday 10 PM) in-app.", icon: "calendar_month", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAqsLfSScRC9-KJf0BkFs7yI_o_4Ii2oZw9MQrSvz7XwgF7cRozZJoyI7nIrV6Oud_dSRZeaLnZDxb8h4tQF-5HlttV5ZlDz4mGGTAE6v2yGksl5cve1qg2PXzQPF4dfTP_btEwRUigXlkmWS97Mh5pRKsLTkDNu5DKu6yJxvBUCo9kL9lLHy3GZpGTc5CyeXVIXe3UrLcrsOq4ZE2pKnxlPJkad-JM3hbKO4f6YNX-VdjFEGGJNhnc_SC2SsZpW9biiVUe0HPWcCc" },
    { title: "Neighbor Starts the Order", desc: "A user taps 'Start a Community Group Order'. The app auto-selects the area and upcoming pickup point. This creates a magic shareable link.", icon: "add_circle", image: "https://raw.githubusercontent.com/princessasabea/myKartghwebsite/main/public/group-order-screen.png" },
    { title: "The Community Joins", desc: "The link is shared to the WhatsApp group. Each neighbor opens it, shops normally, and adds items to their own separate cart privately.", icon: "share", image: "https://raw.githubusercontent.com/princessasabea/myKartghwebsite/main/public/ghanaian%20market.jpg" },
    { title: "Private Checkout", desc: "No bill splitting drama. Each neighbor pays for their own groceries individually and gets their own receipt. MyKart bundles them behind the scenes.", icon: "payments", image: "https://raw.githubusercontent.com/princessasabea/myKartghwebsite/main/public/signin.png" },
    { title: "One Big Bundle", desc: "Instead of 10 bikes, one truck deliveres everything. Orders are packed per person and labeled with names/order codes for easy sorting.", icon: "package_2", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA_kPOpx_83WwiEKqtZkWQfWRED61slNiHHp4tA3r6ZUHEsXhiQPXKDwjRXgnv7atk2A3mVKKQ2GENZzweXQ4dfNx9HVqXGM91i_H4ygzgzQGGo4wCgOgwaRm3Q9AqcufKJIZPqRmHHNkMd5bFh3NUWH6cZ6m_-Xa7VYy-U6EfrAEOztHKq2FajDxX71ooVpvws8MtUJXUTYTsFHpz8FWSZT0pvYcgupxgKivqfhcb52LOiAG8kgQcL5IBrl5rO47SL3FMkVz3_7NE" },
    { title: "Pickup & Go", desc: "Neighbors meet the K-Truck at the pickup point, show their QR code, and grab their labeled package. Fast, efficient, and cheaper for everyone.", icon: "task_alt", image: "https://raw.githubusercontent.com/princessasabea/myKartghwebsite/main/public/truck-tracking.png"}
  ];

  const uniStory = [
    { title: "Start the Session", desc: "One roommate selects Shoprite and chooses 'Roommate Order'. They set the hostel/apartment address and a delivery window.", icon: "school", image: "https://raw.githubusercontent.com/princessasabea/myKartghwebsite/main/public/uniroommates.png" },
    { title: "Roomies Join In", desc: "Share the link or scan the QR. Each roommate joins the session and gets their own private cart within the same store run.", icon: "group_add", image: "https://raw.githubusercontent.com/princessasabea/myKartghwebsite/main/public/group-order-screen.png" },
    { title: "Shop individually", desc: "Everyone adds their specific items from the Shoprite catalog. Carts remain private—no one knows you're buying extra indomie!", icon: "shopping_cart", image: "https://raw.githubusercontent.com/princessasabea/myKartghwebsite/main/public/group-order-screen.png" },
    { title: "Separate Payments", desc: "Each roommate pays for their own items. No one has to 'owe' anyone money. MyKart merges it into one delivery task automatically.", icon: "account_balance_wallet", image: "https://raw.githubusercontent.com/princessasabea/myKartghwebsite/main/public/signin.png" },
    { title: "The Single Run", desc: "A personal shopper picks all items in one efficient run, packing them into separate bags for each roommate. One rider brings it all.", icon: "delivery_dining", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBX6IdYG5gZ1ig2wwDuzW1Mh_wiMfLWi3jezSpif86v-fv38DOYqc-IMn5DTyCLwoTLqUpmwGkr5iajlR7uKDM8nRzPpNxbImA7-jPCuKEsRQGn5eTDAIuF9aIK4SY40Bpbixu9vFzfie63ZW8OZlVVkM3ehDr7FSu1jqP9YKhR7m7_YzYucKJpH89wwG6y7Lr3vq41_UsiUvie35X1cEvEviNRrxn4DodCc7Z-wEGszVFnaWKNa2ybjzqq1wMt3JeqShj_VVYZb7k" },
    { title: "Drop-off", desc: "Bags are labeled by name/room number. Cheap delivery, no payment stress, and bulk efficiency for the whole apartment.", icon: "check_circle", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDm9yQivXoP34fFXrvm3b9NKeSaOm5r5eHRJvlerRUuqNPSU_HiOxwYjTMo0jSnS_TWMKLj8Mn3HSKMpTzQJFb4YLdyAxhdyMuWVO9NoSNhhsiPTxbiqXyXQjIgVbwhDOQkz8Y84H9MuDKcxa_pJg1uu1TKknsamvOxkmv9srQc-Dl2uDxdVEvGA4vEpItcZTY8hpbQQdt9HsBCGdzX-7ze_XqrfFGDaA0ivmmYCD8eVRX4BSz-ukLXnhyCN3NVZKaUaBXSvotfkMA" }
  ];

  return (
    <div className="flex flex-col w-full bg-bg-light">
      <section className="relative min-h-[40vh] md:h-[60vh] flex items-end overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://raw.githubusercontent.com/princessasabea/myKartghwebsite/main/public/ghanaian%20market.jpg" 
            className="w-full h-full object-cover" 
            alt="Ghanaian Market Scene"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark/95 via-dark/50 to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-6xl mx-auto px-4 pb-10 md:pb-16 w-full">
          <span className="inline-block px-3 py-1 bg-primary text-white text-[10px] md:text-xs font-bold rounded-full mb-3 uppercase tracking-[0.2em]">Our Ecosystem</span>
          <h1 className="text-3xl md:text-8xl font-black text-white leading-[0.95] mb-3 md:mb-6 tracking-tighter">Ghana's Fresh <br/><span className="text-primary italic">Kommunity.</span></h1>
          <p className="text-sm md:text-xl text-gray-200 max-w-2xl leading-relaxed font-medium">
            MyKart is more than a delivery app; we are a hub for the stories, flavors, and people that define our local markets.
          </p>
        </div>
      </section>

      <section className="py-10 md:py-24 px-4 bg-white dark:bg-white/5 border-b border-gray-100">
        <div className="max-w-4xl mx-auto text-center">
           <h2 className="text-xl md:text-5xl font-black mb-4 md:mb-8 tracking-tighter text-dark dark:text-white">More Than Just Groceries.</h2>
           <p className="text-sm md:text-xl text-muted dark:text-gray-300 leading-relaxed font-medium mb-6 md:mb-12">
             We believe every meal has a story. From the "Market Mama" who selects the perfect yams to the "K-Truck" driver who brings the savings to your doorstep. We are building a space where technology honors tradition.
           </p>
           <div className="w-12 md:w-24 h-1 bg-primary/20 mx-auto rounded-full"></div>
        </div>
      </section>

      {/* Story Mode Sections */}
      <section className="py-10 md:py-24 px-4 bg-bg-light">
        <div className="max-w-6xl mx-auto">
          <InteractiveStory 
            title="The Neighborhood Bundle" 
            subtitle="Place separate orders for one shared Community Truck delivery."
            steps={truckStory} 
          />
          <InteractiveStory 
            title="The Uni Run" 
            subtitle="Separate roommate carts, one shared Shoprite delivery."
            steps={uniStory} 
          />
        </div>
      </section>

      <section className="py-10 md:py-24 px-4 bg-bg-light pt-0">
        <div className="max-w-6xl mx-auto">
          <div className="mb-6 md:mb-16">
            <span className="text-primary font-bold text-[10px] md:text-xs uppercase tracking-widest block mb-2 md:mb-4">COMMUNITY FEED</span>
            <h2 className="text-2xl md:text-6xl font-black text-dark dark:text-white tracking-tighter mb-2 md:mb-4">Kommunity Hub <span className="text-[10px] md:text-sm font-bold bg-dark text-white px-2 md:px-3 py-1 rounded-full align-middle ml-1 md:ml-2 uppercase tracking-widest">MVP</span></h2>
            <p className="text-sm md:text-xl text-muted dark:text-gray-300 font-medium max-w-2xl">
              Stay connected with local vendors, discover new recipes from local chefs, and keep up with neighborhood events.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8">
             {feedItems.map((item, idx) => (
                <div key={idx} className="bg-white dark:bg-white/5 rounded-2xl md:rounded-[3rem] overflow-hidden border border-gray-100 shadow-xl shadow-gray-200/50 hover:border-primary/20 transition-all flex flex-col">
                   <div className="p-4 md:p-8 border-b border-gray-50 flex items-center justify-between">
                      <div className="flex items-center gap-2 md:gap-4">
                         <div className="w-8 h-8 md:w-12 md:h-12 bg-primary/10 rounded-lg md:rounded-2xl flex items-center justify-center text-primary">
                            <span className="material-symbols-outlined text-lg md:text-2xl">{item.icon}</span>
                         </div>
                         <div>
                            <h4 className="font-black text-dark dark:text-white leading-none mb-1 text-xs md:text-base">{item.author}</h4>
                            <p className="text-[8px] md:text-[10px] font-bold text-muted dark:text-gray-300 uppercase tracking-widest">{item.location} • {item.time}</p>
                         </div>
                      </div>
                      <span className="text-[8px] md:text-[10px] font-black text-primary uppercase bg-primary/5 px-2 md:px-3 py-1 rounded-full whitespace-nowrap">
                         {item.type}
                      </span>
                   </div>
                   <div className="p-4 md:p-8 flex-1">
                      <p className="text-muted dark:text-gray-300 font-medium text-sm md:text-lg leading-relaxed mb-4 md:mb-6">
                         "{item.content}"
                      </p>
                      <div className="relative aspect-video rounded-xl md:rounded-3xl overflow-hidden border border-gray-100">
                         <img src={item.image} className="w-full h-full object-cover" alt={item.type} />
                      </div>
                   </div>
                </div>
             ))}
          </div>
        </div>
      </section>

      <section className="py-10 md:py-24 px-4 bg-white dark:bg-white/5">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-16">
          <div className="flex-1">
            <h2 className="text-primary text-[10px] md:text-sm font-bold tracking-widest uppercase mb-2 md:mb-4">VENDOR ONBOARDING</h2>
            <h3 className="text-xl md:text-5xl font-extrabold mb-4 md:mb-6">Partnering with Market Mamas</h3>
            <p className="text-muted dark:text-gray-300 text-sm md:text-lg leading-relaxed mb-4 md:mb-6">
              We are currently establishing relationships with over 200 local vendors across Makola, Agbogbloshie, and Tema. Our team is working on the ground to prepare traditional vendors for a new generation of digital customers.
            </p>
            <div className="grid grid-cols-2 gap-3 md:gap-4">
              <div className="p-3 md:p-6 bg-cream rounded-xl md:rounded-2xl text-center">
                <p className="text-xl md:text-3xl font-black text-primary mb-1">200+</p>
                <p className="text-[8px] md:text-xs font-bold text-muted dark:text-gray-300 uppercase tracking-tighter">Target Partners</p>
              </div>
              <div className="p-3 md:p-6 bg-cream rounded-xl md:rounded-2xl text-center">
                <p className="text-xl md:text-3xl font-black text-primary mb-1">Planned</p>
                <p className="text-[8px] md:text-xs font-bold text-muted dark:text-gray-300 uppercase tracking-tighter">Fair Trade Policy</p>
              </div>
            </div>
          </div>
          <div className="flex-1 w-full">
            <img 
              src="https://raw.githubusercontent.com/princessasabea/myKartghwebsite/main/public/shop-from-mama.jpg" 
              className="w-full aspect-square object-cover rounded-xl md:rounded-[3rem] shadow-2xl" 
              alt="Vendor Partnership"
            />
          </div>
        </div>
      </section>

      <section className="py-10 md:py-24 bg-bg-light px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-16">
          <div className="flex-1 order-2 md:order-1 w-full">
            <div className="relative p-2 md:p-4">
              <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full"></div>
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAqsLfSScRC9-KJf0BkFs7yI_o_4Ii2oZw9MQrSvz7XwgF7cRozZJoyI7nIrV6Oud_dSRZeaLnZDxb8h4tQF-5HlttV5ZlDz4mGGTAE6v2yGksl5cve1qg2PXzQPF4dfTP_btEwRUigXlkmWS97Mh5pRKsLTkDNu5DKu6yJxvBUCo9kL9lLHy3GZpGTc5CyeXVIXe3UrLcrsOq4ZE2pKnxlPJkad-JM3hbKO4f6YNX-VdjFEGGJNhnc_SC2SsZpW9biiVUe0HPWcCc" 
                className="w-full rounded-xl md:rounded-[3rem] shadow-2xl relative z-10" 
                alt="MyKart Truck"
              />
            </div>
          </div>
          <div className="flex-1 order-1 md:order-2">
             <div className="bg-primary/20 p-2 md:p-4 rounded-xl md:rounded-3xl inline-block mb-4 md:mb-8">
                <span className="material-symbols-outlined text-primary text-2xl md:text-[40px]">local_shipping</span>
             </div>
             <h2 className="text-xl md:text-5xl font-extrabold mb-4 md:mb-6">Upcoming: Kommunity Truck</h2>
             <p className="text-muted dark:text-gray-300 text-sm md:text-lg leading-relaxed mb-6 md:mb-8">
               Our planned weekly Kommunity Truck will bring essentials to underserved neighborhoods at bulk prices. We are currently mapping routes to ensure quality nutrition is accessible to everyone.
             </p>
             <Link to="/wireframes#planned-routes" className="inline-block px-6 py-3 md:px-8 md:py-4 bg-dark text-white font-bold rounded-xl md:rounded-2xl hover:scale-105 transition-all shadow-lg text-center w-full md:w-auto text-sm md:text-base">
                View Planned Routes
             </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Community;
