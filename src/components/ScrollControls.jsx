import React, { useState, useEffect } from 'react';
import { ChevronDown, ChevronsUp } from 'lucide-react';

export const ScrollControls = () => {
  const [showScrollBottom, setShowScrollBottom] = useState(true);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      // Scroll to Bottom is visible when near the top (scrollY <= 100)
      if (scrollY > 100) {
        setShowScrollBottom(false);
      } else {
        setShowScrollBottom(true);
      }

      // Back to top button visible when scrollY > 200
      if (scrollY > 200) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToBottom = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      const yOffset = -45;
      const y = aboutSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    } else {
      window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Animated Scroll to Bottom Indicator */}
      {showScrollBottom && (
        <button
          type="button"
          onClick={scrollToBottom}
          className="fixed left-1/2 -translate-x-1/2 bottom-8 z-30 text-white hover:text-white/80 p-2 rounded-full cursor-pointer animate-float transition-opacity duration-500 bg-[#0BCEAF]/30 backdrop-blur-sm border border-white/30 shadow-lg"
          aria-label="Scroll to content"
        >
          <ChevronDown className="w-8 h-8" />
        </button>
      )}

      {/* Back to Top Floating Button */}
      {showBackToTop && (
        <button
          type="button"
          onClick={scrollToTop}
          className="fixed right-6 bottom-8 z-40 w-12 h-12 rounded-full bg-gray-900 border-2 border-[#0BCEAF] text-[#0BCEAF] hover:bg-[#0BCEAF] hover:text-white flex items-center justify-center shadow-2xl transition-all duration-300 transform hover:scale-110 active:scale-95"
          aria-label="Back to Top"
        >
          <ChevronsUp className="w-6 h-6" />
        </button>
      )}
    </>
  );
};
