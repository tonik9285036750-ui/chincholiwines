import { useEffect } from 'react';
import { motion } from 'motion/react';
import { Truck, Gem, Wine, Phone } from 'lucide-react';

interface SEOLandingProps {
  title: string;
}

export default function SEOLanding({ title }: SEOLandingProps) {
  useEffect(() => {
    // Update document title
    document.title = `${title} | Chincholi Wines Mumbai`;

    // Update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute(
      'content',
      `Order your favorite drinks with our ${title} service. Fast home delivery across all branches in Mumbai.`
    );
    
    // Scroll to top on mount
    window.scrollTo(0, 0);
  }, [title]);

  const brandName = "Chincholi Wines";

  return (
    <div className="pt-20 bg-[#FAF8F5]">
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 overflow-hidden bg-stone-900 border-b border-stone-800">
        <div className="absolute inset-0 opacity-20 bg-[url('https://oniksds23.sirv.com/ChatGPT%20Image%20Jul%2018%2C%202026%2C%2010_08_26%20PM%20(1).png')] bg-cover bg-center mix-blend-overlay"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#5c0620]/20 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-[#b99d6d] font-sans font-extrabold text-xs md:text-sm uppercase tracking-[0.2em] mb-4 block">
              Premium Services
            </span>
            <h1 className="font-serif text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
              {title}
            </h1>
            <p className="text-stone-300 max-w-2xl mx-auto text-lg mb-8 leading-relaxed">
              Experience the finest collection of spirits and exceptional service right at your doorstep.
            </p>
            
            <a
              href="https://wa.me/919424769902?text=Hi%20Chincholi%20Wines!%20I%20am%20interested%20in%20your%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-[#5c0620] text-white font-bold uppercase tracking-wider text-sm hover:bg-[#77102e] transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
            >
              <Phone className="w-5 h-5" />
              Reserve Now
            </a>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl bg-[#FAF8F5] border border-stone-100 hover:border-[#b99d6d]/30 transition-colors group"
            >
              <div className="w-14 h-14 rounded-xl bg-[#b99d6d]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Truck className="w-7 h-7 text-[#b99d6d]" />
              </div>
              <h3 className="font-serif text-xl font-bold text-stone-900 mb-3">Fast Delivery</h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                Prompt and safe delivery directly to your doorstep with secure packaging across all neighborhoods.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-8 rounded-2xl bg-[#FAF8F5] border border-stone-100 hover:border-[#5c0620]/30 transition-colors group"
            >
              <div className="w-14 h-14 rounded-xl bg-[#5c0620]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Gem className="w-7 h-7 text-[#5c0620]" />
              </div>
              <h3 className="font-serif text-xl font-bold text-stone-900 mb-3">Premium Experience</h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                Elevate your celebrations with our elite repository, matching extensive inventory with expert advice.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="p-8 rounded-2xl bg-[#FAF8F5] border border-stone-100 hover:border-[#b99d6d]/30 transition-colors group"
            >
              <div className="w-14 h-14 rounded-xl bg-[#b99d6d]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Wine className="w-7 h-7 text-[#b99d6d]" />
              </div>
              <h3 className="font-serif text-xl font-bold text-stone-900 mb-3">Extensive Selection</h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                Choose from over 500 handpicked labels, vintage single malts, classic global wines, and craft brews.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Deep-Dive Content */}
      <section className="py-24 bg-[#FAF8F5] border-t border-stone-200">
        <div className="max-w-4xl mx-auto px-6 md:px-8 text-center space-y-8">
          <h2 className="font-serif text-3xl md:text-5xl font-extrabold text-stone-900 leading-tight">
            Why Choose {brandName} for <br />
            <span className="text-[#5c0620]">{title}?</span>
          </h2>
          
          <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-stone-100 text-left space-y-6">
            <p className="text-stone-700 text-lg leading-relaxed">
              Order Your Favorite Drinks from <strong>{brandName}</strong> – Fast Home Delivery Across All Branches! 
            </p>
            <p className="text-stone-700 text-lg leading-relaxed">
              Choose from an extensive collection of premium wines, spirits, craft beers, and mixers delivered directly to your doorstep. Simple, hassle-free ordering available via our app and website for every neighborhood branch. 
            </p>
            <p className="text-stone-700 text-lg leading-relaxed">
              Enjoy prompt, safe delivery with secure packaging and complete peace of mind. Skip the store run today and elevate your celebrations effortlessly!
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
