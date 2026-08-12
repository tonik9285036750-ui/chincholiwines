import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Phone, Wine, ChevronDown } from 'lucide-react';
import { useNavigate, useLocation, Link } from 'react-router-dom';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isExploreOpen, setIsExploreOpen] = useState(false);
  const [isMobileExploreOpen, setIsMobileExploreOpen] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      if (location.pathname !== '/') return;

      // Track active section on scroll
      const sections = ['home', 'collections', 'about', 'services', 'gallery', 'testimonials', 'contact'];
      const scrollPosition = window.scrollY + 120;

      let found = false;
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            found = true;
            break;
          }
        }
      }
      if (!found && window.scrollY < 100) setActiveSection('home');
    };

    window.addEventListener('scroll', handleScroll);
    
    // Also handle scroll on mount if hash is present
    if (location.pathname === '/' && location.hash) {
      setTimeout(() => {
        const id = location.hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          const offset = 80;
          const bodyRect = document.body.getBoundingClientRect().top;
          const elementRect = element.getBoundingClientRect().top;
          const elementPosition = elementRect - bodyRect;
          const offsetPosition = elementPosition - offset;
          window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
        }
      }, 100);
    }

    return () => window.removeEventListener('scroll', handleScroll);
  }, [location]);

  const navItems = [
    { label: 'Home', target: 'home' },
    { label: 'Collections', target: 'collections' },
    { label: 'Our Story', target: 'about' },
    { label: 'Services', target: 'services' },
    { label: 'Gallery', target: 'gallery' },
    { label: 'Reviews', target: 'testimonials' },
    { label: 'Contact', target: 'contact' },
  ];

  const exploreLinks = [
    { label: 'Order Wines Online', path: '/order-wines-online' },
    { label: 'Hotel Booking', path: '/hotel-booking' },
    { label: 'Wine Shop', path: '/wine-shop' },
    { label: 'Home Delivery', path: '/home-delivery' },
    { label: 'VIP Lounge Booking', path: '/vip-lounge-booking' },
    { label: 'Event Venues', path: '/event-venues' },
  ];

  const scrollTo = (id: string) => {
    setIsMobileMenuOpen(false);
    
    if (location.pathname !== '/') {
      navigate(`/#${id}`);
      return;
    }

    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          isScrolled || location.pathname !== '/'
            ? 'bg-white/95 backdrop-blur-xl border-b border-stone-200/60 py-3 shadow-sm'
            : 'bg-transparent py-5 border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <nav className="flex items-center justify-between">
            {/* Brand Logo */}
            <button
              onClick={() => scrollTo('home')}
              className="flex items-center gap-3 text-left group cursor-pointer focus:outline-none"
              id="nav-logo"
            >
              <div className="w-10 h-10 rounded-xl bg-[#5c0620]/5 border border-[#5c0620]/20 flex items-center justify-center shadow-sm group-hover:border-[#5c0620]/45 transition-all duration-500">
                <Wine className="w-5 h-5 text-[#5c0620] group-hover:scale-110 transition-transform duration-500" />
              </div>
              <div>
                <p className="font-serif text-xl tracking-wider text-stone-900 font-extrabold leading-none uppercase">
                  Chincholi
                </p>
                <p className="text-[10px] tracking-[0.3em] uppercase text-[#b99d6d] font-bold mt-0.5 font-sans">
                  Wines
                </p>
              </div>
            </button>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center gap-8">
              <ul className="flex items-center gap-8">
                {navItems.map((item) => (
                  <li key={item.target}>
                    <button
                      onClick={() => scrollTo(item.target)}
                      className={`relative py-1 text-xs font-sans font-bold uppercase tracking-wider transition-colors duration-300 cursor-pointer hover:text-[#5c0620] ${
                        activeSection === item.target && location.pathname === '/'
                          ? 'text-[#5c0620]'
                          : 'text-stone-500'
                      }`}
                    >
                      {item.label}
                      {activeSection === item.target && location.pathname === '/' && (
                        <motion.span
                          layoutId="activeNavLine"
                          className="absolute bottom-0 left-0 w-full h-[2px] bg-[#5c0620]"
                          transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                        />
                      )}
                    </button>
                  </li>
                ))}
                
                {/* Explore Dropdown */}
                <li 
                  className="relative"
                  onMouseEnter={() => setIsExploreOpen(true)}
                  onMouseLeave={() => setIsExploreOpen(false)}
                >
                  <button className="flex items-center gap-1 py-1 text-xs font-sans font-bold uppercase tracking-wider transition-colors duration-300 cursor-pointer text-stone-500 hover:text-[#5c0620]">
                    Explore <ChevronDown className="w-3 h-3" />
                  </button>
                  <AnimatePresence>
                    {isExploreOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-56 bg-white border border-stone-200 rounded-xl shadow-xl overflow-hidden py-2 z-50"
                      >
                        {exploreLinks.map((link) => (
                          <Link
                            key={link.path}
                            to={link.path}
                            className="block px-4 py-2.5 text-xs font-bold text-stone-700 hover:bg-stone-50 hover:text-[#5c0620] transition-colors"
                          >
                            {link.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>
              </ul>

              {/* CTAs */}
              <div className="h-4 w-[1px] bg-stone-200" />
              <a
                href="https://wa.me/919424769902?text=Hi%20Chincholi%20Wines!%20I%20have%20an%20inquiry%20about%20your%20premium%20collection."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 hover:bg-emerald-500/25 text-emerald-700 font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-sm"
              >
                <Phone className="w-3.5 h-3.5" />
                WhatsApp Order
              </a>
            </div>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl border border-stone-200 hover:border-[#5c0620]/30 text-stone-600 hover:text-[#5c0620] transition-colors duration-300 focus:outline-none"
              aria-label="Toggle Menu"
              id="menu-toggle"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile Menu Drawer Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-stone-900/30 backdrop-blur-sm z-40 lg:hidden"
            />

            {/* Sidebar Content */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.35, ease: 'easeInOut' }}
              className="fixed top-0 right-0 h-full w-[280px] bg-[#FAF8F5] border-l border-stone-200/80 z-50 p-8 flex flex-col justify-between shadow-2xl lg:hidden overflow-y-auto"
            >
              <div className="space-y-8">
                {/* Logo and close btn */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Wine className="w-5 h-5 text-[#5c0620]" />
                    <span className="font-serif font-extrabold text-lg tracking-wider text-stone-900 uppercase">CHINCHOLI WINES</span>
                  </div>
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-1.5 rounded-lg border border-stone-200 text-stone-400 hover:text-stone-900"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                {/* Nav Links */}
                <ul className="space-y-4 pt-4">
                  {navItems.map((item, index) => (
                    <motion.li
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      key={item.target}
                    >
                      <button
                        onClick={() => scrollTo(item.target)}
                        className={`w-full text-left py-2 font-sans font-bold text-xs uppercase tracking-wider transition-all duration-300 ${
                          activeSection === item.target && location.pathname === '/'
                            ? 'text-[#5c0620] pl-2 border-l-2 border-[#5c0620]'
                            : 'text-stone-500 hover:text-stone-900'
                        }`}
                      >
                        {item.label}
                      </button>
                    </motion.li>
                  ))}
                  
                  {/* Mobile Explore Section */}
                  <motion.li
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: navItems.length * 0.05 }}
                  >
                    <button
                      onClick={() => setIsMobileExploreOpen(!isMobileExploreOpen)}
                      className="flex items-center justify-between w-full text-left py-2 font-sans font-bold text-xs uppercase tracking-wider text-stone-500 hover:text-stone-900 transition-all duration-300"
                    >
                      Explore
                      <ChevronDown className={`w-4 h-4 transition-transform ${isMobileExploreOpen ? 'rotate-180' : ''}`} />
                    </button>
                    <AnimatePresence>
                      {isMobileExploreOpen && (
                        <motion.ul
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="pl-4 border-l border-stone-200 mt-2 space-y-3 overflow-hidden"
                        >
                          {exploreLinks.map((link) => (
                            <li key={link.path}>
                              <Link
                                to={link.path}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="block text-xs font-bold text-stone-600 hover:text-[#5c0620]"
                              >
                                {link.label}
                              </Link>
                            </li>
                          ))}
                        </motion.ul>
                      )}
                    </AnimatePresence>
                  </motion.li>
                </ul>
              </div>

              {/* Mobile CTA */}
              <div className="space-y-4 mt-8">
                <div className="h-[1px] bg-stone-200" />
                <p className="text-[10px] text-stone-500 font-sans text-center">
                  Consuming liquor is injurious to health. Play safe, drink responsibly.
                </p>
                <a
                  href="https://wa.me/919424769902?text=Hi%20Chincholi%20Wines!%20I%20have%20an%20inquiry%20about%20your%20premium%20collection."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-[#5c0620] text-white font-bold text-xs uppercase tracking-wider hover:bg-[#77102e] transition-colors duration-300 shadow-md"
                >
                  <Phone className="w-4 h-4" />
                  WhatsApp Support
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
