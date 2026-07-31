import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'qualification', label: 'Learning' },
    { id: 'skill', label: 'Skill' },
    { id: 'certification', label: 'Certification' },
    { id: 'portfolio', label: 'Project' },
   
    { id: 'contact', label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Toggle navbar visibility on scroll > 200px
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Scroll spy for active link
      const sections = navLinks.map((link) => document.getElementById(link.id));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navLinks[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e, id) => {
    e.preventDefault();
    setActiveSection(id);
    setIsMobileMenuOpen(false);

    const element = document.getElementById(id);
    if (element) {
      const yOffset = -45;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 bg-fuchsia-300/90 transition-all duration-500 ${
        isScrolled
          ? 'opacity-100 translate-y-0 py-2 sm:py-3'
          : 'opacity-0 -translate-y-full pointer-events-none'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center  justify-between h-16">
        {/* Brand Logo */}
        <a
          href="#home"
          onClick={(e) => scrollToSection(e, 'home')}
          className="text-2xl italic font-black tracking-tight text-fuchsia-900 rounded-full border-1 bg-fuchsia-500/30 p-2"
        >
          <span className="text-fuchsia-900">DV</span> 
        </a>

        {/* Mobile Toggle Button */}
        <button
          type="button"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden p-2 rounded-md text-gray-700 hover:text-fuchsia-700 hover:bg-fuchsia-100 focus:outline-none"
          aria-label="Toggle Navigation"
        >
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>

        {/* Desktop Navbar Links */}
        <div className="hidden lg:flex items-center space-x-1 xl:space-x-3">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => scrollToSection(e, link.id)}
                className={`px-3 py-2 text-sm font-medium transition-colors rounded-md ${
                  isActive
                    ? 'text-fuchsia-700 font-bold'
                    : 'text-black hover:text-fuchsia-700'
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </div>

        {/* Contact CTA Button */}
        <div className="hidden lg:block">
          <a
            href="#contact"
            onClick={(e) => scrollToSection(e, 'contact')}
            className="px-5 py-2 border-2 border-fuchsia-700 text-fuchsia-700 font-medium text-sm rounded-full hover:bg-fuchsia-700 hover:text-white transition-all shadow-sm"
          >
            Hire Me
          </a>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-fuchsia-100 px-4 pt-2 pb-4 space-y-1 shadow-lg">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => scrollToSection(e, link.id)}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  isActive
                    ? 'bg-fuchsia-700/10 text-fuchsia-700 font-bold'
                    : 'text-gray-700 hover:bg-gray-50 hover:text-fuchsia-700'
                }`}
              >
                {link.label}
              </a>
            );
          })}
          <div className="pt-2">
            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, 'contact')}
              className="block w-full text-center px-4 py-2 border-2 border-fuchsia-700 text-fuchsia-700 font-medium text-sm rounded-full hover:bg-fuchsia-700 hover:text-white transition-colors"
            >
              Hire Me
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};
