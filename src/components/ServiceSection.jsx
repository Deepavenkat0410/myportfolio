import React, { useState } from 'react';
import { Layout, Code, Smartphone, SmartphoneNfc, Search, Edit3, X, CheckCircle2 } from 'lucide-react';

export const ServiceSection = () => {
  const [activeModal, setActiveModal] = useState(null);

  const services = [
    {
      id: 's1',
      title: 'Web Design',
      icon: <Layout className="w-7 h-7 text-white" />,
      description:
        'Crafting modern, accessible, and user-centric website designs tailored to brand goals and audience engagement.',
      fullDetails:
        'Our Web Design solutions focus on wireframing, high-fidelity UI design, component systems, brand aesthetics, and responsive layout planning to ensure seamless experiences on desktop, tablet, and mobile screens.',
      features: ['UI/UX Prototyping', 'Design Systems', 'Responsive Layouts', 'Design Audits'],
    },
    {
      id: 's2',
      title: 'Web Development',
      icon: <Code className="w-7 h-7 text-white" />,
      description:
        'Building fast, scalable full-stack web applications with modern frameworks like React, JavaScript, and Node.js.',
      fullDetails:
        'Transforming designs into high-performance, SEO-optimized, and clean codebases with seamless API integration, efficient state management, and robust security standards.',
      features: ['React & JavaScript Apps', 'Component Architecture', 'API & Database Integration', 'Performance Tuning'],
    },
    {
      id: 's3',
      title: 'Apps Design',
      icon: <Smartphone className="w-7 h-7 text-white" />,
      description:
        'Designing intuitive mobile application interfaces for iOS and Android platforms with smooth touch interactions.',
      fullDetails:
        'We craft pixel-perfect mobile UX/UI layouts built specifically for native touch feedback, gesture navigation, and cohesive dark/light visual modes.',
      features: ['iOS & Android Layouts', 'Interactive Micro-animations', 'Touch-First Design', 'User Journey Mapping'],
    },
    {
      id: 's4',
      title: 'Apps Development',
      icon: <SmartphoneNfc className="w-7 h-7 text-white" />,
      description:
        'Developing cross-platform mobile apps that deliver native speeds and responsive user interfaces.',
      fullDetails:
        'From single-codebase mobile solutions to cloud backends, we build reliable mobile applications equipped with offline caching, push notifications, and fast load times.',
      features: ['Cross-Platform Apps', 'Offline Data Storage', 'Push Notification Setup', 'App Store Deployment'],
    },
    {
      id: 's5',
      title: 'SEO Optimization',
      icon: <Search className="w-7 h-7 text-white" />,
      description:
        'Optimizing search engine visibility, performance metrics, and organic web traffic through strategic SEO practices.',
      fullDetails:
        'Boosting search visibility through technical SEO, Core Web Vitals optimization, structured data schemas, keywords research, and semantic HTML markup.',
      features: ['Core Web Vitals Audit', 'Technical SEO Refactoring', 'Structured Data Schemas', 'Keyword Strategy'],
    },
    {
      id: 's6',
      title: 'Content Creation',
      icon: <Edit3 className="w-7 h-7 text-white" />,
      description:
        'Generating engaging digital copy, technical documentation, and visual media tailored to convert visitors.',
      fullDetails:
        'Creating high-impact copy, visual content strategies, product descriptions, and technical blog posts that communicate complex ideas into clear value propositions.',
      features: ['Technical Copywriting', 'Brand Voice Guidelines', 'Blog & Article Writing', 'Social Asset Design'],
    },
  ];

  return (
    <section id="service" className="py-20 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Background Stroke */}
        <div className="relative flex items-center justify-center mb-16 select-none">
          <h1 className="text-6xl sm:text-8xl md:text-9xl font-black uppercase text-stroke-bg tracking-widest text-center">
            Service
          </h1>
          <h2 className="absolute text-2xl sm:text-4xl font-bold uppercase text-[#0BCEAF] tracking-wider">
            My Services
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((item) => (
            <div
              key={item.id}
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 text-center flex flex-col items-center group"
            >
              <div className="w-16 h-16 bg-[#0BCEAF] rounded-full flex items-center justify-center mb-6 shadow-md group-hover:scale-110 transition-transform">
                {item.icon}
              </div>

              <h4 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-[#0BCEAF] transition-colors">
                {item.title}
              </h4>

              <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">
                {item.description}
              </p>

              <button
                type="button"
                onClick={() => setActiveModal(item)}
                className="text-[#0BCEAF] font-bold text-sm hover:text-[#089e86] border-b-2 border-[#0BCEAF] pb-0.5 hover:border-[#089e86] transition-colors"
              >
                Read More
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Service Details Modal */}
      {activeModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
          onClick={() => setActiveModal(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 relative shadow-2xl animate-in fade-in zoom-in duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveModal(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 p-1 rounded-full hover:bg-gray-100"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-[#0BCEAF] rounded-full flex items-center justify-center shrink-0">
                {activeModal.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-800">{activeModal.title}</h3>
            </div>

            <p className="text-gray-600 leading-relaxed mb-6">{activeModal.fullDetails}</p>

            <div className="space-y-2 border-t border-gray-100 pt-4">
              <h5 className="font-bold text-gray-800 mb-2">Key Deliverables:</h5>
              {activeModal.features.map((feature, i) => (
                <div key={i} className="flex items-center gap-2 text-sm text-gray-700">
                  <CheckCircle2 className="w-4 h-4 text-[#0BCEAF]" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-4 border-t border-gray-100 flex justify-end">
              <button
                type="button"
                onClick={() => setActiveModal(null)}
                className="px-6 py-2 bg-[#0BCEAF] text-white font-medium rounded-full hover:bg-[#089e86] transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
