import { useState, useEffect } from 'react';
import { MapPin, Phone, Clock, Send, Share2, Instagram, Facebook } from 'lucide-react';

export default function Contact() {
  const [storeStatus, setStoreStatus] = useState({ isOpen: true, message: '' });

  useEffect(() => {
    const checkStoreStatus = () => {
      // Open hours: 10:00 AM to 10:30 PM (10:00 to 22:30)
      const now = new Date();
      // Adjust to Indian Standard Time (IST, UTC+5:30) if checking global times,
      // but let's do a reliable local hours check
      const currentHour = now.getHours();
      const currentMinute = now.getMinutes();
      const totalMinutes = currentHour * 60 + currentMinute;

      const openMinutes = 10 * 60; // 10:00 AM
      const closeMinutes = 22 * 60 + 30; // 10:30 PM

      if (totalMinutes >= openMinutes && totalMinutes < closeMinutes) {
        setStoreStatus({
          isOpen: true,
          message: '🟢 OPEN NOW (Closes at 10:30 PM)',
        });
      } else {
        setStoreStatus({
          isOpen: false,
          message: '🔴 CLOSED NOW (Opens at 10:00 AM)',
        });
      }
    };

    checkStoreStatus();
    const interval = setInterval(checkStoreStatus, 60000); // refresh every minute
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-stone-50 border-t border-stone-200/60">
      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-2">
          <span className="text-[#b99d6d] font-sans font-extrabold text-xs uppercase tracking-[0.25em] block">
            Reach Out
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-extrabold text-stone-900 tracking-tight">
            Connect With Our Boutique
          </h2>
          <p className="text-stone-600 text-sm font-normal mt-2">
            Plan your visit, order for private banquets, or request specific rare vintages directly from our crew.
          </p>
          <div className="w-12 h-[2px] bg-[#b99d6d] mx-auto mt-4" />
        </div>

        {/* Info panel grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          {/* Details Column */}
          <div className="lg:col-span-5 bg-white rounded-2xl border border-stone-200 p-8 flex flex-col justify-between space-y-8 shadow-sm">
            <div className="space-y-6">
              <div>
                <h3 className="font-serif text-2xl font-bold text-stone-900 mb-2">Chincholi Wines</h3>
                <p className="text-stone-600 text-sm leading-relaxed font-normal">
                  Visit us in our sophisticated environment on Malad Link Road. Enjoy premium customer parking and a secure, curated space.
                </p>
              </div>

              {/* Dynamic status badge */}
              <div className="inline-flex items-center px-4 py-2 rounded-xl bg-[#5c0620]/5 border border-[#5c0620]/10 text-xs font-bold text-stone-700 font-mono">
                {storeStatus.message}
              </div>

              {/* Detail Items */}
              <div className="space-y-4 pt-4">
                {/* Item: Address */}
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#5c0620]/5 border border-[#5c0620]/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-[#5c0620]" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-stone-800">Boutique Address</h4>
                    <p className="text-xs text-stone-500 mt-1 leading-relaxed font-normal">
                      Besides Chincholi Fire Station, Opposite Nirlon Housing Society, Malad Link Road, Malad West, Mumbai-400064, Maharashtra
                    </p>
                  </div>
                </div>

                {/* Item: Phone */}
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#5c0620]/5 border border-[#5c0620]/10 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-[#5c0620]" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-stone-800">Direct Contact</h4>
                    <a
                      href="tel:+919285036750"
                      className="text-xs text-[#5c0620] hover:text-[#77102e] font-extrabold transition-colors mt-1 block"
                    >
                      +91 9285036750
                    </a>
                  </div>
                </div>

                {/* Item: Hours */}
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#5c0620]/5 border border-[#5c0620]/10 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-[#5c0620]" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-stone-800">Store Timings</h4>
                    <p className="text-xs text-stone-500 mt-1 font-normal">
                      Monday - Sunday: 10:00 AM - 10:30 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social shares */}
            <div className="pt-6 border-t border-stone-100 space-y-3">
              <p className="text-[10px] text-stone-400 uppercase tracking-widest font-mono font-bold flex items-center gap-1.5">
                <Share2 className="w-3.5 h-3.5 text-[#b99d6d]" />
                Follow Our Boutique
              </p>
              <div className="flex gap-3">
                <a
                  href="https://wa.me/919285036750"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl border border-stone-200 bg-stone-50 hover:bg-stone-100/50 hover:border-emerald-500/30 text-stone-500 hover:text-emerald-500 flex items-center justify-center transition-all duration-300"
                  aria-label="WhatsApp Support"
                >
                  <Send className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-xl border border-stone-200 bg-stone-50 hover:bg-stone-100/50 hover:border-pink-500/30 text-stone-500 hover:text-pink-500 flex items-center justify-center transition-all duration-300"
                  aria-label="Instagram Feed"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-xl border border-stone-200 bg-stone-50 hover:bg-stone-100/50 hover:border-blue-500/30 text-stone-500 hover:text-blue-500 flex items-center justify-center transition-all duration-300"
                  aria-label="Facebook Page"
                >
                  <Facebook className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Maps Column */}
          <div className="lg:col-span-7 h-[420px] rounded-2xl overflow-hidden border border-stone-200 shadow-sm relative">
            <iframe
              src="https://maps.google.com/maps?q=Besides%20Chincholi%20Fire%20Station,%20Opposite%20Nirlon%20Housing%20Society,%20Malad%20Link%20Road,%20Malad%20West,%20Mumbai-400064,%20Maharashtra&z=17&ie=UTF8&iwloc=&output=embed"
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 w-full h-full border-none opacity-90"
              style={{ filter: 'grayscale(15%) opacity(95%)' }}
              title="Chincholi Wines Google Map"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
