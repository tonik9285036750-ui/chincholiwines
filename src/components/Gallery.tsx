import { motion } from 'motion/react';
import { Image } from 'lucide-react';
import { GALLERY } from '../data';

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 relative overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-2">
          <span className="text-[#b99d6d] font-sans font-extrabold text-xs uppercase tracking-[0.25em] block">
            Visual Tour
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-extrabold text-stone-900 tracking-tight">
            Chincholi Experience
          </h2>
          <div className="w-12 h-[2px] bg-[#b99d6d] mx-auto mt-4" />
        </div>

        {/* Grid Images */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {GALLERY.map((item, idx) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              key={item.id}
              className="group relative h-[300px] bg-stone-50 rounded-2xl border border-stone-200 overflow-hidden hover:border-[#b99d6d]/45 transition-all duration-500 shadow-sm"
            >
              {/* Photo */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                referrerPolicy="no-referrer"
              />

              {/* Glassmorphic Overlay on hover */}
              <div className="absolute inset-0 bg-white/95 opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-[2px] flex flex-col items-center justify-center p-6 text-center border border-[#b99d6d]/20 rounded-2xl">
                <div className="w-10 h-10 rounded-xl bg-[#5c0620]/5 border border-[#5c0620]/25 flex items-center justify-center mb-4 transform scale-75 group-hover:scale-100 transition-transform duration-500">
                  <Image className="w-5 h-5 text-[#5c0620]" />
                </div>
                <h3 className="font-serif text-lg font-bold text-stone-900 transform translate-y-3 group-hover:translate-y-0 transition-transform duration-500">
                  {item.title}
                </h3>
                <p className="text-xs text-[#b99d6d] uppercase tracking-widest font-extrabold mt-1 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  {item.category}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
