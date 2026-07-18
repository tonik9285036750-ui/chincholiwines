import { Wine, Beer, GlassWater } from 'lucide-react';
import { motion } from 'motion/react';

interface CollectionItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  imageUrl: string;
  icon: any;
}

export default function Collections() {
  const items: CollectionItem[] = [
    {
      id: 'wines',
      title: 'Fine Wines',
      subtitle: 'Global Vintages',
      description: 'A sophisticated collection of vintage reds, crisp white wines, premium rosés, and champagne sourced from legendary global vineyards.',
      imageUrl: 'https://images.unsplash.com/photo-1584916201218-f4242ceb4809?q=80&w=600&auto=format&fit=crop',
      icon: Wine,
    },
    {
      id: 'malts',
      title: 'Single Malts',
      subtitle: 'Legendary Distillers',
      description: 'Indulge in a premium lineup of aged single malts, peated scotch, and smooth blends crafted by historic distillers.',
      imageUrl: 'https://oniksds23.sirv.com/SFD_Lebanon-Beyond-Musar-by-Courtney-Schiessel_Lebanese-wines-on-ililis-wine-list_CO_ilili_Hero_2520x1420-768x432.jpg',
      icon: Wine,
    },
    {
      id: 'brews',
      title: 'Craft Brews',
      subtitle: 'Chilled & Fresh',
      description: 'A refreshing assortment of regional craft beers, local microbrew stouts, IPA handles, and international lagers chilled to perfection.',
      imageUrl: 'https://images.unsplash.com/photo-1600788886242-5c96aabe3757?q=80&w=600&auto=format&fit=crop',
      icon: Beer,
    },
    {
      id: 'spirits',
      title: 'Fine Spirits',
      subtitle: 'Small-Batch Craft',
      description: 'From small-batch botanical gins and rich barrel-aged rums to ultra-smooth vodkas and hand-harvested blue agave tequilas.',
      imageUrl: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=600&auto=format&fit=crop',
      icon: GlassWater,
    },
  ];

  return (
    <section id="collections" className="py-24 relative overflow-hidden bg-[#0c0a09] border-t border-stone-800/80">
      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-2">
          <span className="text-[#b99d6d] font-sans font-extrabold text-xs uppercase tracking-[0.25em] block">
            Our Vault Collection
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-extrabold text-white tracking-tight">
            The Curated Collections
          </h2>
          <div className="w-12 h-[2px] bg-[#b99d6d] mx-auto mt-4" />
        </div>

        {/* Collections Grid - 1 Row, 4 Cards on Desktop */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {items.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                key={item.id}
                className="group bg-stone-900/40 border border-stone-800 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl hover:border-[#b99d6d]/40 transition-all duration-300 flex flex-col"
              >
                {/* Image container */}
                <div className="h-56 overflow-hidden relative bg-stone-950">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500 opacity-90 group-hover:opacity-100"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4 w-9 h-9 rounded-xl bg-stone-900/90 border border-stone-800/60 flex items-center justify-center shadow-sm backdrop-blur-sm">
                    <Icon className="w-4.5 h-4.5 text-[#b99d6d]" />
                  </div>
                </div>

                {/* Content Panel */}
                <div className="p-6 space-y-3 flex-grow flex flex-col justify-between bg-stone-900/20">
                  <div className="space-y-2">
                    <span className="text-[9px] text-[#b99d6d] font-extrabold uppercase tracking-widest block font-sans">
                      {item.subtitle}
                    </span>
                    <h3 className="font-serif text-xl font-bold text-stone-100 tracking-wide">
                      {item.title}
                    </h3>
                    <p className="text-stone-400 text-[11px] leading-relaxed font-normal">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
