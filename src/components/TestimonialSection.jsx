import React, { useState, useEffect, useRef } from 'react';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';

export const TestimonialSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef(null);

  const testimonials = [
    {
      id: 't1',
      name: 'Sarah Jenkins',
      profession: 'CEO at FinTech Cloud',
      quote:
        'Deepa delivered an outstanding web application ahead of deadline. Her technical skill in JavaScript and React, eye for layout detail, and clear communication made our project launch a great success!',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200',
    },
    {
      id: 't2',
      name: 'Michael Chang',
      profession: 'Product Lead at Innovate AI',
      quote:
        'Working with Deepa was fantastic. She built responsive interface components and optimized client-side interactions with smooth animations.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200',
    },
    {
      id: 't3',
      name: 'Emily Watson',
      profession: 'Project Manager at Tech Solutions',
      quote:
        'Exceptional dedication and speed! The Farm2Industry and Netflix clone projects demonstrate great front-end craftsmanship and clean code structure.',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200',
    },
  ];

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    if (!isPaused) {
      timerRef.current = setInterval(nextSlide, 5000);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, activeIndex]);

  return (
    <section id="testimonial" className="py-20 bg-gray-50/50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Background Stroke */}
        <div className="relative flex items-center justify-center mb-16 select-none">
          <h1 className="text-6xl sm:text-8xl md:text-9xl font-black uppercase text-stroke-bg tracking-widest text-center">
            Review
          </h1>
          <h2 className="absolute text-2xl sm:text-4xl font-bold uppercase text-[#0BCEAF] tracking-wider">
            Recommendations
          </h2>
        </div>

        {/* Testimonial Carousel Container */}
        <div
          className="max-w-3xl mx-auto relative px-4"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Main Slide Card */}
          <div className="text-center transition-all duration-500 min-h-[300px] flex flex-col items-center justify-between">
            <Quote className="w-16 h-16 text-[#0BCEAF] mb-6 mx-auto opacity-80" />

            <h4 className="text-lg sm:text-xl md:text-2xl font-light text-gray-700 mb-8 leading-relaxed italic max-w-2xl">
              "{testimonials[activeIndex].quote}"
            </h4>

            <div className="flex flex-col items-center">
              <img
                src={testimonials[activeIndex].image}
                alt={testimonials[activeIndex].name}
                className="w-20 h-20 rounded-full object-cover shadow-lg border-2 border-[#0BCEAF] mb-3"
              />
              <h5 className="font-bold text-gray-800 text-lg m-0">
                {testimonials[activeIndex].name}
              </h5>
              <span className="text-sm font-medium text-[#0BCEAF]">
                {testimonials[activeIndex].profession}
              </span>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white shadow-md text-gray-600 hover:text-[#0BCEAF] hover:scale-110 transition-all"
            aria-label="Previous review"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white shadow-md text-gray-600 hover:text-[#0BCEAF] hover:scale-110 transition-all"
            aria-label="Next review"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Carousel Dots */}
          <div className="flex justify-center items-center gap-2.5 mt-8">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`h-3 rounded-full transition-all duration-300 ${
                  activeIndex === idx ? 'w-8 bg-[#0BCEAF]' : 'w-3 bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
