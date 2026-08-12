import { motion } from 'motion/react';
import { Gem, ShieldCheck, MapPin, ArrowDown, Phone, Handshake } from 'lucide-react';
import Collections from '../components/Collections';
import FeaturedProducts from '../components/FeaturedProducts';
import Services from '../components/Services';
import ReviewSlider from '../components/ReviewSlider';
import Gallery from '../components/Gallery';
import Contact from '../components/Contact';

export default function Home() {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
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
      {/* Hero Section */}
      <section
        id="home"
        className="relative h-screen min-h-[750px] flex items-center justify-center overflow-hidden bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(12, 10, 9, 0.96) 35%, rgba(12, 10, 9, 0.82) 70%, rgba(12, 10, 9, 0.45) 100%), url('https://oniksds23.sirv.com/ChatGPT%20Image%20Jul%2018%2C%202026%2C%2010_08_26%20PM%20(1).png')`,
        }}
      >
        {/* Soft elegant ambient lighting */}
        <div className="absolute top-1/4 left-1/4 w-[350px] h-[350px] bg-[#b99d6d]/5 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 md:px-8 w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Main Copy */}
          <div className="lg:col-span-8 space-y-6 text-left">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="block"
            >
              <span className="text-xs font-extrabold uppercase tracking-[0.25em] text-[#b99d6d] font-sans">
                Mumbai's Premier Taste Destination
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-serif text-5xl md:text-7xl font-extrabold text-white leading-[1.1] tracking-tight"
            >
              Premium Wine & Whisky Shop <br />
              in <span className="text-[#b99d6d]">
                Malad West, Mumbai
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-stone-300 text-base md:text-lg font-normal max-w-xl leading-relaxed"
            >
              Welcome to Chincholi Wines, Mumbai's elite repository in Malad West. Savor our carefully curated handpicked labels, vintage single malts, classic global wines, and ice-cold microbrews.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="pt-4 flex flex-wrap gap-4 items-center"
            >
              <a
                href="https://wa.me/919424769902?text=Hi%20Chincholi%20Wines!%20I%20have%20an%20inquiry%20about%20your%20premium%20collection."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#5c0620] text-white font-bold uppercase tracking-wider text-xs hover:bg-[#77102e] transition-colors duration-300 shadow-sm cursor-pointer"
              >
                <Phone className="w-4 h-4 text-white" />
                WhatsApp Us
              </a>
              <button
                onClick={() => scrollToSection('contact')}
                className="px-8 py-4 rounded-xl bg-transparent text-white border border-stone-700 hover:border-[#b99d6d]/40 font-bold uppercase tracking-wider text-xs transition-colors duration-300 cursor-pointer"
              >
                Locate Store
              </button>
            </motion.div>
          </div>

          {/* Quick Stats Bento card overlay */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="hidden lg:block lg:col-span-4 bg-stone-900/90 border border-stone-800 rounded-2xl p-8 space-y-6 shadow-2xl backdrop-blur-md"
          >
            <div className="space-y-1">
              <span className="text-[10px] text-stone-500 uppercase tracking-widest font-mono font-bold">Boutique Metrics</span>
              <h3 className="font-serif text-xl font-bold text-white">Why Connoisseurs Choose Us</h3>
            </div>

            <div className="space-y-4">
              {[
                { count: '500+', label: 'Global Labels In Stock', color: 'text-[#b99d6d]' },
                { count: '100%', label: 'Temperature Cellars', color: 'text-[#b99d6d]' },
                { count: '20+', label: 'Single Malt Vintages', color: 'text-[#b99d6d]' },
              ].map((stat, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-stone-950/50 border border-stone-800/80 flex items-center justify-between">
                  <span className="text-xs text-stone-400 font-sans font-medium">{stat.label}</span>
                  <span className={`text-xl font-mono font-extrabold ${stat.color}`}>{stat.count}</span>
                </div>
              ))}
            </div>

            <div className="pt-2 flex items-center gap-2 text-xs text-stone-400 justify-center font-bold">
              <ShieldCheck className="w-4 h-4 text-[#b99d6d]" />
              <span>100% Genuine Certified Stocks</span>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator banner */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 cursor-pointer" onClick={() => scrollToSection('collections')}>
          <span className="text-[10px] tracking-[0.25em] text-stone-400 font-bold uppercase">Scroll to Explore</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
          >
            <ArrowDown className="w-4 h-4 text-[#5c0620]" />
          </motion.div>
        </div>
      </section>

      {/* Our Story / About Section */}
      <section
        id="about"
        className="py-24 relative overflow-hidden bg-stone-50 border-t border-stone-200/60"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            {/* Context Story */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-[#b99d6d] font-sans font-extrabold text-xs uppercase tracking-[0.25em] block">
                Our Heritage
              </span>
              <h2 className="font-serif text-3xl md:text-5xl font-extrabold text-stone-900 leading-tight tracking-tight">
                Chincholi Wines <br />
                <span className="text-[#5c0620]">
                  Mumbai's Trusted Taste Experts
                </span>
              </h2>

              <p className="text-stone-600 text-base font-normal leading-relaxed">
                Situated Besides Chincholi Fire Station, Opposite Nirlon Housing Society, Malad Link Road, Malad West, Chincholi Wines is more than just a wine shop. It is a premier destination dedicated to the appreciation of fine vintages, single malts, and unique brews.
              </p>

              <p className="text-stone-600 text-base font-normal leading-relaxed">
                We pride ourselves on offering an elite shopping experience, matching our extensive inventory with expert advice. Whether you are hosting a formal banquet, stocking your private collection, or searching for the perfect celebratory gift, our curated boutique has everything you need to celebrate life's finest moments.
              </p>

              {/* Quote card */}
              <div className="border-l-4 border-[#5c0620] pl-6 py-2 text-stone-800 bg-white rounded-r-2xl p-6 shadow-sm border-stone-200 text-sm md:text-base leading-relaxed font-medium">
                "Wine is geography in a bottle, and spirits are history in a glass. At Chincholi Wines, we bring the best of the world's geographies and histories straight to Mumbai."
              </div>
            </div>

            {/* Quality Bento features */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-white rounded-2xl border border-stone-200/80 p-8 space-y-6 shadow-sm">
                <h4 className="font-serif text-lg font-bold text-stone-900 uppercase tracking-wider border-b border-stone-100 pb-4 flex items-center gap-2">
                  <Gem className="w-5 h-5 text-[#5c0620]" />
                  Boutique Standards
                </h4>

                <div className="space-y-6">
                  {/* Feature 1 */}
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#5c0620]/5 border border-[#5c0620]/20 flex items-center justify-center shrink-0">
                      <Gem className="w-5 h-5 text-[#5c0620]" />
                    </div>
                    <div>
                      <h5 className="font-bold text-stone-900 text-sm">Exclusive Boutique Vibe</h5>
                      <p className="text-xs text-stone-500 mt-1 font-normal leading-relaxed">
                        We provide a premium, clean, and organized space to browse safely and comfortably.
                      </p>
                    </div>
                  </div>

                  {/* Feature 2 */}
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#b99d6d]/5 border border-[#b99d6d]/25 flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-[#b99d6d]" />
                    </div>
                    <div>
                      <h5 className="font-bold text-stone-900 text-sm">Prime Mumbai Location</h5>
                      <p className="text-xs text-stone-500 mt-1 font-normal leading-relaxed">
                        Easily accessible on Malad Link Road, Malad West, with dedicated customer parking.
                      </p>
                    </div>
                  </div>

                  {/* Feature 3 */}
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#5c0620]/5 border border-[#5c0620]/20 flex items-center justify-center shrink-0">
                      <Handshake className="w-5 h-5 text-[#5c0620]" />
                    </div>
                    <div>
                      <h5 className="font-bold text-stone-900 text-sm">Personalized Sommelier Advice</h5>
                      <p className="text-xs text-stone-500 mt-1 font-normal leading-relaxed">
                        Our store crew helps you choose the perfect drinks and pairings for any event.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Curated Collections Section */}
      <Collections />

      {/* Featured Products Section */}
      <FeaturedProducts />

      {/* Services Section */}
      <Services />

      {/* Interactive Gallery */}
      <Gallery />

      {/* Customer Testimonials */}
      <ReviewSlider />

      {/* Contact Panel Coordinates & Map */}
      <Contact />
    </>
  );
}
