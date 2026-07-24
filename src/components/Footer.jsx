import React from 'react';
import { Github, Mail, Phone } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white py-12 px-4 sm:px-6 lg:px-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto text-center">
        {/* Social / Contact Icons */}
        <div className="flex justify-center items-center gap-4 mb-8">
          <a
            href="https://github.com/Deepavenkat0410"
            target="_blank"
            rel="noreferrer"
            className="w-12 h-12 bg-white text-gray-800 rounded-full flex items-center justify-center hover:bg-gray-900 hover:text-white transition-all transform hover:-translate-y-1 shadow-md"
            aria-label="GitHub Profile"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="mailto:deepavenkat093@gmail.com"
            className="w-12 h-12 bg-white text-gray-800 rounded-full flex items-center justify-center hover:bg-gray-900 hover:text-white transition-all transform hover:-translate-y-1 shadow-md"
            aria-label="Email Deepa"
          >
            <Mail className="w-5 h-5" />
          </a>
          <a
            href="tel:8608612728"
            className="w-12 h-12 bg-white text-gray-800 rounded-full flex items-center justify-center hover:bg-gray-900 hover:text-white transition-all transform hover:-translate-y-1 shadow-md"
            aria-label="Call Deepa"
          >
            <Phone className="w-5 h-5" />
          </a>
        </div>

        {/* Quick Links */}
        <div className="flex flex-wrap justify-center items-center gap-4 text-sm font-medium mb-6">
          <a href="#about" className="hover:underline text-white/90 hover:text-white">
            About Me
          </a>
          <span className="text-white/50">|</span>
          <a href="#qualification" className="hover:underline text-white/90 hover:text-white">
            Education
          </a>
          <span className="text-white/50">|</span>
          <a href="#skill" className="hover:underline text-white/90 hover:text-white">
            Skills
          </a>
          <span className="text-white/50">|</span>
          <a href="#portfolio" className="hover:underline text-white/90 hover:text-white">
            Projects
          </a>
          <span className="text-white/50">|</span>
          <a href="#contact" className="hover:underline text-white/90 hover:text-white">
            Contact
          </a>
        </div>

        {/* Copyright */}
        <p className="text-sm text-white/90 font-light">
          &copy; {new Date().getFullYear()}{' '}
          <a href="#home" className="font-bold underline hover:text-white">
            DEEPA V
          </a>
          . All Rights Reserved. Front-End Developer Portfolio.
        </p>
      </div>
    </footer>
  );
};
