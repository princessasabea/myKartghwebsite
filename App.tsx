import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Community from './pages/Community';
import Vision from './pages/Vision';
import Delivery from './pages/Delivery';
import Team from './pages/Team';
import Contact from './pages/Contact';
import Privacy from './pages/Privacy';
import Wireframes from './pages/Wireframes';
import Reserve from './pages/Reserve';
import TruckSchedule from './pages/TruckSchedule';
import Story from './pages/Story';
import Terms from './pages/Terms';

// Component to handle scroll to top or scroll to anchor on route change
const ScrollToTop: React.FC = () => {
  const { pathname, hash } = useLocation();
  
  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
    } else {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [pathname, hash]);

  return null;
};

const BackToTop: React.FC<{ isMenuOpen: boolean }> = ({ isMenuOpen }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button 
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 z-[120] w-14 h-14 bg-primary text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-all active:scale-90"
      aria-label="Back to top"
    >
      <span className="material-symbols-outlined text-3xl">arrow_upward</span>
    </button>
  );
};

const Navbar: React.FC<{ onToggle: (open: boolean) => void }> = ({ onToggle }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    const newState = !isOpen;
    setIsOpen(newState);
    onToggle(newState);
    if (newState) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  };

  useEffect(() => {
    setIsOpen(false);
    onToggle(false);
    document.body.style.overflow = 'unset';
  }, [location, onToggle]);

  return (
    // ADDED: dark:bg-dark dark:border-white/10 transition-colors
    <nav className="sticky top-0 z-[100] w-full bg-bg-light dark:bg-dark border-b border-gray-100 dark:border-white/10 shadow-sm transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center relative z-[110]">
        <Link to="/" className="flex items-center gap-2 group">
          <img src="/logo.png" alt="MyKart Logo" className="h-10 w-auto object-contain" />
          {/* ADDED: dark:text-white */}
          <span className="text-xl font-extrabold tracking-tight text-dark dark:text-white dark:text-white transition-colors">MyKart</span>
        </Link>

        {/* Desktop Menu - ADDED: dark:text-white dark:hover:text-primary */}
        <div className="hidden md:flex items-center gap-8">
          <Link to="/" className="text-sm font-semibold text-dark dark:text-white dark:text-white hover:text-primary dark:hover:text-primary transition-colors">Home</Link>
          <Link to="/vision" className="text-sm font-semibold text-dark dark:text-white dark:text-white hover:text-primary dark:hover:text-primary transition-colors">Vision</Link>
          <Link to="/delivery" className="text-sm font-semibold text-dark dark:text-white dark:text-white hover:text-primary dark:hover:text-primary transition-colors">Delivery</Link>
          <Link to="/community" className="text-sm font-semibold text-dark dark:text-white dark:text-white hover:text-primary dark:hover:text-primary transition-colors">Kommunity</Link>
          <Link to="/team" className="text-sm font-semibold text-dark dark:text-white dark:text-white hover:text-primary dark:hover:text-primary transition-colors">Team</Link>
          <Link to="/wireframes" className="px-5 py-2 bg-dark dark:bg-white dark:bg-white/5 text-white dark:text-dark dark:text-white text-sm font-bold rounded-full hover:bg-black dark:hover:bg-gray-200 transition-all active:scale-95 shadow-md">
            View MVP
          </Link>
        </div>

        {/* Mobile Toggle - ADDED: dark:text-white dark:hover:bg-white dark:bg-white/5/10 */}
        <button onClick={toggleMenu} className="md:hidden flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-100 dark:hover:bg-white dark:bg-white/5/10 transition-colors">
          <span className="material-symbols-outlined text-dark dark:text-white dark:text-white">{isOpen ? 'close' : 'menu'}</span>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        // ADDED: dark:bg-dark
        <div className="fixed inset-0 top-0 bg-[#fcfaf8] dark:bg-dark z-[105] p-6 pt-24 flex flex-col gap-6 md:hidden animate-in slide-in-from-top-full duration-500 ease-out h-screen overflow-y-auto">
          <div className="flex flex-col gap-4">
            {/* Added dark classes to all links below */}
            <Link to="/" className="text-2xl font-black text-dark dark:text-white dark:text-white border-b border-gray-100 dark:border-white/10 pb-4 flex justify-between items-center group">
              Home <span className="material-symbols-outlined text-primary group-hover:translate-x-1 transition-transform">chevron_right</span>
            </Link>
            <Link to="/vision" className="text-2xl font-black text-dark dark:text-white dark:text-white border-b border-gray-100 dark:border-white/10 pb-4 flex justify-between items-center group">
              Vision <span className="material-symbols-outlined text-primary group-hover:translate-x-1 transition-transform">chevron_right</span>
            </Link>
            <Link to="/delivery" className="text-2xl font-black text-dark dark:text-white dark:text-white border-b border-gray-100 dark:border-white/10 pb-4 flex justify-between items-center group">
              Delivery Modes <span className="material-symbols-outlined text-primary group-hover:translate-x-1 transition-transform">chevron_right</span>
            </Link>
            <Link to="/community" className="text-2xl font-black text-dark dark:text-white dark:text-white border-b border-gray-100 dark:border-white/10 pb-4 flex justify-between items-center group">
              Our Kommunity <span className="material-symbols-outlined text-primary group-hover:translate-x-1 transition-transform">chevron_right</span>
            </Link>
            <Link to="/team" className="text-2xl font-black text-dark dark:text-white dark:text-white border-b border-gray-100 dark:border-white/10 pb-4 flex justify-between items-center group">
              The Team <span className="material-symbols-outlined text-primary group-hover:translate-x-1 transition-transform">chevron_right</span>
            </Link>
            <Link to="/wireframes" className="text-2xl font-black text-dark dark:text-white dark:text-white border-b border-gray-100 dark:border-white/10 pb-4 flex justify-between items-center group">
              View MVP <span className="material-symbols-outlined text-primary group-hover:translate-x-1 transition-transform">chevron_right</span>
            </Link>
            <Link to="/contact" className="text-2xl font-black text-dark dark:text-white dark:text-white border-b border-gray-100 dark:border-white/10 pb-4 flex justify-between items-center group">
              Contact Us <span className="material-symbols-outlined text-primary group-hover:translate-x-1 transition-transform">chevron_right</span>
            </Link>
          </div>
          <div className="mt-8 pb-10">
            <Link to="/reserve" className="block w-full py-5 bg-primary text-white text-center font-black rounded-3xl text-xl shadow-2xl shadow-primary/30 active:scale-95 transition-all">
              Partner with Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

const Footer: React.FC = () => (
  // ADDED: dark:bg-dark dark:border-white/10
  <footer className="bg-white dark:bg-white/5 dark:bg-dark border-t border-gray-100 dark:border-white/10 py-12 px-4 transition-colors duration-300">
    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
      <div className="col-span-1 md:col-span-2">
        <div className="flex items-center gap-2 mb-4">
          <img src="/logo.png" alt="MyKart Logo" className="h-8 w-auto object-contain" />
          {/* ADDED: dark:text-white */}
          <span className="text-xl font-black text-dark dark:text-white dark:text-white">MyKart</span>
        </div>
        {/* ADDED: dark:text-gray-400 */}
        <p className="text-muted dark:text-gray-300 dark:text-gray-400 text-sm leading-relaxed max-sm mb-6">
          MyKart is the premier <strong>Ghana grocery store online</strong>. We connect you directly to fresh market produce and deliver seamlessly across Accra.
        </p>
        <div className="flex gap-4">
          <a href="https://www.linkedin.com/company/mykartstartup/posts/?feedView=all" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-50 dark:bg-white dark:bg-white/5/10 rounded-full flex items-center justify-center text-muted dark:text-gray-300 dark:text-white hover:bg-primary hover:text-white transition-all" title="LinkedIn">
             <span className="material-symbols-outlined text-[20px]">link</span>
          </a>
          <a href="mailto:info@mykartgrocery.com" className="w-10 h-10 bg-gray-50 dark:bg-white dark:bg-white/5/10 rounded-full flex items-center justify-center text-muted dark:text-gray-300 dark:text-white hover:bg-primary hover:text-white transition-all" title="Email Us">
             <span className="material-symbols-outlined text-[20px]">mail</span>
          </a>
        </div>
      </div>
      <div>
        {/* ADDED: dark:text-white */}
        <h4 className="font-bold mb-4 text-dark dark:text-white dark:text-white">Company</h4>
        <div className="flex flex-col gap-2">
          {/* ADDED: dark:text-gray-400 */}
          <Link to="/vision" className="text-sm text-muted dark:text-gray-300 dark:text-gray-400 hover:text-primary dark:hover:text-primary">Our Vision</Link>
          <Link to="/team" className="text-sm text-muted dark:text-gray-300 dark:text-gray-400 hover:text-primary dark:hover:text-primary">Meet the Team</Link>
          <Link to="/community" className="text-sm text-muted dark:text-gray-300 dark:text-gray-400 hover:text-primary dark:hover:text-primary">Kommunity Focus</Link>
          <Link to="/story" className="text-sm text-muted dark:text-gray-300 dark:text-gray-400 hover:text-primary dark:hover:text-primary">Our Story</Link>
        </div>
      </div>
      <div>
        <h4 className="font-bold mb-4 text-dark dark:text-white dark:text-white">Legal</h4>
        <div className="flex flex-col gap-2">
          <Link to="/privacy" className="text-sm text-muted dark:text-gray-300 dark:text-gray-400 hover:text-primary dark:hover:text-primary">Privacy Policy</Link>
          <Link to="/terms" className="text-sm text-muted dark:text-gray-300 dark:text-gray-400 hover:text-primary dark:hover:text-primary">Terms of Service</Link>
          <Link to="/contact" className="text-sm text-muted dark:text-gray-300 dark:text-gray-400 hover:text-primary dark:hover:text-primary">Support</Link>
        </div>
      </div>
    </div>
    <div className="max-w-6xl mx-auto mt-12 pt-8 border-t border-gray-100 dark:border-white/10 text-center">
      <p className="text-xs text-muted dark:text-gray-300/60 dark:text-gray-500">© 2025 MyKart Ghana. Reimagining retail for the Ghanaian context. Launching Soon.</p>
    </div>
  </footer>
);

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <HashRouter>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col transition-colors duration-300">
        <Navbar onToggle={setIsMenuOpen} />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/community" element={<Community />} />
            <Route path="/vision" element={<Vision />} />
            <Route path="/delivery" element={<Delivery />} />
            <Route path="/team" element={<Team />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/wireframes" element={<Wireframes />} />
            <Route path="/reserve" element={<Reserve />} />
            <Route path="/truck-schedule" element={<TruckSchedule />} />
            <Route path="/story" element={<Story />} />
            <Route path="/terms" element={<Terms />} />
          </Routes>
        </main>
        <Footer />
        <BackToTop isMenuOpen={isMenuOpen} />
      </div>
    </HashRouter>
  );
};

export default App;
