import { useState } from 'react';
import { Navbar } from './components/Navbar.jsx';
import { Header } from './components/Header.jsx';
import { AboutSection } from './components/AboutSection.jsx';
import { QualificationSection } from './components/QualificationSection.jsx';
import { SkillsSection } from './components/SkillsSection.jsx';
import { ServiceSection } from './components/ServiceSection.jsx';
import { PortfolioSection } from './components/PortfolioSection.jsx';
import { TestimonialSection } from './components/TestimonialSection.jsx';
import { BlogSection } from './components/BlogSection.jsx';
import { ContactSection } from './components/ContactSection.jsx';
import { Footer } from './components/Footer.jsx';
import { VideoModal } from './components/VideoModal.jsx';
import { ScrollControls } from './components/ScrollControls.jsx';
import  {Certification } from'./components/Certification.jsx';

export default function App() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [videoSrc] = useState('https://www.youtube.com/embed/DWRcNpR6Kdc');

  return (
    <div className="min-h-screen bg-white text-gray-700 antialiased selection:bg-[#0BCEAF] selection:text-white">
      {/* Sticky Fixed Navbar on Scroll */}
      <Navbar />

      {/* Main Header / Hero Section */}
      <Header onPlayVideo={() => setIsVideoOpen(true)} />

      {/* About Section */}
      <AboutSection />

      {/* Quality - Qualification Section (Education & Experience) */}
      <QualificationSection />
    
      {/* Skills Section with Progress Bar Waypoints */}
      <SkillsSection />

      {/*my all certificate*/   }
      <Certification/>

     
      {/* Portfolio Gallery Section with Category Filters & Lightbox */}
      <PortfolioSection />

      

     

      {/* Contact Form Section */}
      <ContactSection />

      {/* Footer */}
      <Footer />

      {/* Floating Scroll Controls (Scroll to bottom & Back to Top) */}
      <ScrollControls />

      {/* Video Modal Popup */}
      <VideoModal
        isOpen={isVideoOpen}
        videoSrc={videoSrc}
        onClose={() => setIsVideoOpen(false)}
      />
    </div>
  );
}
