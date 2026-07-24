import { motion } from 'motion/react';
import { PRODUCTS } from '../data';

export default function FeaturedProducts() {
  const featured = PRODUCTS.filter((p) => p.isPopular);

  return (
    <section id="featured-products" className="py-24 relative overflow-hidden bg-stone-50 border-t border-stone-200/60">
      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-2">
          <span className="text-[#b99d6d] font-sans font-extrabold text-xs uppercase tracking-[0.25em] block">
            In Stock Now
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-extrabold text-stone-900 tracking-tight">
            Featured Selections
          </h2>
          <p className="text-stone-600 text-sm font-normal mt-2">
            A glimpse of the single malts, wines, beers and spirits available at our Malad West boutique.
          </p>
          <div className="w-12 h-[2px] bg-[#b99d6d] mx-auto mt-4" />
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map((product, idx) => (
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              key={product.id}
              className="group bg-white border border-stone-200/80 rounded-2xl overflow-hidden shadow-sm hover:shadow-md hover:border-[#b99d6d]/30 transition-all duration-300 flex flex-col"
            >
              <div className="h-44 overflow-hidden relative bg-stone-100">
                <img
                  src={product.image}
                  alt={`${product.name} - ${product.subcategory} from ${product.origin}, available at Chincholi Wines Malad West`}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <span className="absolute top-3 right-3 px-2.5 py-1 rounded-lg bg-stone-900/85 text-[10px] font-bold text-[#b99d6d] uppercase tracking-wider backdrop-blur-sm">
                  {product.priceRange}
                </span>
              </div>

              <div className="p-6 space-y-2 flex-grow flex flex-col">
                <span className="text-[9px] text-[#b99d6d] font-extrabold uppercase tracking-widest block font-sans">
                  {product.subcategory}
                </span>
                <h3 className="font-serif text-lg font-bold text-stone-900 leading-snug">
                  {product.name}
                </h3>
                <p className="text-stone-500 text-xs leading-relaxed font-normal flex-grow">
                  {product.description}
                </p>
                <div className="pt-3 mt-auto flex items-center justify-between text-[11px] text-stone-400 font-medium border-t border-stone-100">
                  <span>{product.origin}</span>
                  <span className="font-mono font-bold text-stone-600">{product.abv} ABV</span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
