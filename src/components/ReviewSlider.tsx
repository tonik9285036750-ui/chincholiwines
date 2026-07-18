import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { REVIEWS } from '../data';

export default function ReviewSlider() {
  const [currentIndex, setCurrentSlide] = useState(0);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? REVIEWS.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === REVIEWS.length - 1 ? 0 : prev + 1));
  };

  const currentReview = REVIEWS[currentIndex];

  return (
    <section id="reviews" className="py-24 relative overflow-hidden bg-[#FAF8F5]">
      {/* Decorative gradient overlay */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-stone-200 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-stone-200 to-transparent" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-2">
          <span className="text-[#b99d6d] font-sans font-extrabold text-xs uppercase tracking-[0.25em] block">
            Patron Stories
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-extrabold text-stone-900 tracking-tight">
            What Our Guests Say
          </h2>
          <div className="w-12 h-[2px] bg-[#b99d6d] mx-auto mt-4" />
        </div>

        {/* Slider Box */}
        <div className="relative min-h-[340px] md:min-h-[280px] bg-white rounded-2xl border border-stone-200 p-8 md:p-12 flex flex-col justify-between shadow-sm hover:border-[#b99d6d]/30 transition-colors duration-300">
          <Quote className="absolute top-8 left-8 w-12 h-12 text-[#5c0620]/5 rotate-180 pointer-events-none" />

          <AnimatePresence mode="wait">
            <motion.div
              key={currentReview.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              className="space-y-6"
            >
              {/* Rating stars */}
              <div className="flex items-center gap-1">
                {[...Array(currentReview.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-[#b99d6d] fill-[#b99d6d]" />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-stone-800 font-sans text-base md:text-lg leading-relaxed font-normal">
                "{currentReview.text}"
              </p>

              {/* Author Row */}
              <div className="flex items-center gap-4 pt-4 border-t border-stone-100">
                <div className="w-12 h-12 rounded-xl bg-[#5c0620]/5 border border-[#5c0620]/20 flex items-center justify-center font-bold text-[#5c0620] font-sans text-sm">
                  {currentReview.avatar}
                </div>
                <div>
                  <h4 className="font-sans font-bold text-stone-900 text-sm">{currentReview.author}</h4>
                  <p className="text-xs text-[#b99d6d] tracking-wider font-extrabold uppercase font-sans mt-0.5">{currentReview.role}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <div className="absolute right-8 bottom-8 flex items-center gap-3">
            <button
              onClick={prevSlide}
              className="w-10 h-10 rounded-xl border border-stone-200 bg-stone-50 hover:border-[#5c0620]/30 text-stone-500 hover:text-[#5c0620] flex items-center justify-center transition-all duration-300 cursor-pointer"
              aria-label="Previous Slide"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              className="w-10 h-10 rounded-xl border border-stone-200 bg-stone-50 hover:border-[#5c0620]/30 text-stone-500 hover:text-[#5c0620] flex items-center justify-center transition-all duration-300 cursor-pointer"
              aria-label="Next Slide"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Indicators dot bar */}
        <div className="flex items-center justify-center gap-2 mt-6">
          {REVIEWS.map((rev, index) => (
            <button
              key={rev.id}
              onClick={() => setCurrentSlide(index)}
              className={`h-[4px] rounded-full transition-all duration-500 cursor-pointer ${
                index === currentIndex ? 'w-8 bg-[#5c0620]' : 'w-2 bg-stone-200'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
