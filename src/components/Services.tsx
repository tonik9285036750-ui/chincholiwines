import { Snowflake, Gift, Truck } from 'lucide-react';
import { motion } from 'motion/react';

export default function Services() {
  const services = [
    {
      title: 'Chilled & Ready',
      description: 'All our craft beers, white wines, and champagnes are stored in state-of-the-art coolers, served at the exact temperature intended by the brewer or winemaker.',
      icon: Snowflake,
    },
    {
      title: 'Custom Gifting',
      description: 'Elevate corporate celebrations or personal milestones with our bespoke luxury packaging, custom liquor boxes, and sommelier-selected gift baskets.',
      icon: Gift,
    },
    {
      title: 'Bulk Inquiries',
      description: 'Planning a wedding, corporate meeting, or family milestone? Contact our team directly for customized estimates and curated event menus.',
      icon: Truck,
    },
  ];

  return (
    <section id="services" className="py-24 relative overflow-hidden bg-white border-t border-stone-200/60">
      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-2">
          <span className="text-[#b99d6d] font-sans font-extrabold text-xs uppercase tracking-[0.25em] block">
            Our Standards
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-extrabold text-stone-900 tracking-tight">
            The Boutique Experience
          </h2>
          <div className="w-12 h-[2px] bg-[#b99d6d] mx-auto mt-4" />
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((svc, idx) => {
            const Icon = svc.icon;
            return (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                key={idx}
                className="group relative bg-stone-50 border border-stone-200/80 rounded-2xl p-8 hover:shadow-md hover:border-[#b99d6d]/30 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-6">
                  {/* Icon Block */}
                  <div className="w-12 h-12 rounded-xl bg-[#5c0620]/5 border border-[#5c0620]/10 flex items-center justify-center text-[#5c0620] transition-colors duration-300">
                    <Icon className="w-5 h-5" />
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-serif text-lg font-bold text-stone-900">
                      {svc.title}
                    </h3>
                    <p className="text-stone-600 text-xs font-normal leading-relaxed">
                      {svc.description}
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
