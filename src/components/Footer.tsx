import { Wine, AlertTriangle, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollTo = (id: string) => {
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
    <footer className="relative bg-[#FAF8F5] pt-20 pb-10 border-t border-stone-200 overflow-hidden">
      {/* Excise Policy Disclaimer strip */}
      <div className="bg-[#5c0620]/5 border-y border-[#5c0620]/10 py-4 mb-16">
        <div className="max-w-7xl mx-auto px-6 md:px-8 flex flex-col md:flex-row items-center justify-center gap-3 text-center">
          <AlertTriangle className="w-5 h-5 text-[#5c0620] shrink-0" />
          <p className="text-xs tracking-wider uppercase font-extrabold text-[#5c0620] font-sans">
            EXCISE DEPARTMENT NOTICE: Consuming liquor is injurious to health. Strict legal age limits apply. Drive safe, consume responsibly.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-9 h-10 rounded-xl bg-[#5c0620]/5 border border-[#5c0620]/20 flex items-center justify-center">
                <Wine className="w-5 h-5 text-[#5c0620]" />
              </div>
              <div>
                <span className="font-serif text-lg font-bold text-stone-900 uppercase tracking-wider block leading-none">
                  Chincholi
                </span>
                <span className="text-[9px] tracking-[0.25em] uppercase text-[#b99d6d] font-extrabold block mt-1">
                  Wines
                </span>
              </div>
            </div>
            <p className="text-stone-600 text-sm font-normal leading-relaxed max-w-sm">
              Mumbai's flagship destination for fine labels, legendary single malts, curated wines, and artisanal craft brews on Malad Link Road, Malad West. Elevating customer taste since inception.
            </p>
          </div>

          {/* Quick Nav links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-stone-900 font-sans">Sitemap</h4>
            <ul className="space-y-2.5">
              {[
                { label: 'Home', id: 'home' },
                { label: 'Collections', id: 'collections' },
                { label: 'Featured Picks', id: 'featured-products' },
                { label: 'Our Story', id: 'about' },
                { label: 'Services', id: 'services' },
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollTo(link.id)}
                    className="text-xs text-stone-600 hover:text-[#5c0620] hover:pl-1 transition-all duration-300 font-sans font-bold uppercase tracking-wider cursor-pointer"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Support links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-stone-900 font-sans">Connect</h4>
            <ul className="space-y-2.5">
              {[
                { label: 'Visual Gallery', id: 'gallery' },
                { label: 'Patron Reviews', id: 'testimonials' },
                { label: 'Store Contact', id: 'contact' },
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollTo(link.id)}
                    className="text-xs text-stone-600 hover:text-[#5c0620] hover:pl-1 transition-all duration-300 font-sans font-bold uppercase tracking-wider cursor-pointer"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Coordinates details */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-stone-900 font-sans">Malad West Store</h4>
            <p className="text-xs text-stone-600 font-normal leading-relaxed">
              Besides Chincholi Fire Station,
              <br />
              Opposite Nirlon Housing Society, Malad Link Road,
              <br />
              Malad West, Mumbai-400064, Maharashtra
            </p>
            <a
              href="tel:+919285036750"
              className="inline-block text-xs font-extrabold text-[#5c0620] hover:text-[#77102e] transition-colors"
            >
              Ph: +91 9285036750
            </a>
          </div>
        </div>

        {/* Bottom copyright and Scroll-to-top */}
        <div className="pt-8 border-t border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="text-xs text-stone-400 font-sans font-medium text-center sm:text-left">
            &copy; 2026 Chincholi Wines (Malad West, Mumbai). All rights reserved. Crafted for premium representation.
          </p>

          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="w-10 h-10 rounded-xl bg-white border border-stone-200 text-stone-500 hover:text-[#5c0620] hover:border-[#5c0620]/20 flex items-center justify-center transition-all duration-300 cursor-pointer"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
