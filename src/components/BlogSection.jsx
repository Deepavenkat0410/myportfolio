import React, { useState } from 'react';
import { X, Calendar, Clock, ArrowRight } from 'lucide-react';

export const BlogSection = () => {
  const [selectedPost, setSelectedPost] = useState(null);

  const posts = [
    {
      id: 'b1',
      title: '10 Essential JavaScript & React Patterns for Clean Front-End Code',
      dateDay: '15',
      dateMonth: 'Jul',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800',
      excerpt:
        'Explore modern state management, component composition, form verification, and layout optimization strategies for JavaScript web applications.',
    },
    {
      id: 'b2',
      title: 'Designing Accessible & Responsive UI Systems with Tailwind CSS',
      dateDay: '08',
      dateMonth: 'Jun',
      image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=800',
      excerpt:
        'How to create WCAG-compliant design tokens, typography scales, and fluid layout structures without CSS bloat.',
    },
    {
      id: 'b3',
      title: 'Building High-Converting Entry-Level Developer Portfolios',
      dateDay: '22',
      dateMonth: 'May',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800',
      excerpt:
        'Proven strategies to showcase academic projects like Farm2Industry and IoT hardware systems with clear GitHub integration.',
    },
  ];

  return (
    <section id="blog" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Background Stroke */}
        <div className="relative flex items-center justify-center mb-16 select-none">
          <h1 className="text-6xl sm:text-8xl md:text-9xl font-black uppercase text-stroke-bg tracking-widest text-center">
            Blog
          </h1>
          <h2 className="absolute text-2xl sm:text-4xl font-bold uppercase text-[#0BCEAF] tracking-wider">
            Latest Blog
          </h2>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 flex flex-col group"
            >
              {/* Image Container with Badge */}
              <div className="relative overflow-hidden h-56 bg-gray-100">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
                />
                {/* Round Date Badge */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-[#0BCEAF] text-white flex flex-col items-center justify-center shadow-lg font-bold">
                  <span className="text-lg leading-tight">{post.dateDay}</span>
                  <span className="text-xs uppercase tracking-wider">{post.dateMonth}</span>
                </div>
              </div>

              {/* Body Content */}
              <div className="p-6 flex flex-col flex-grow">
                <h5 className="text-lg font-bold text-gray-800 mb-3 group-hover:text-[#0BCEAF] transition-colors leading-snug">
                  {post.title}
                </h5>
                <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow line-clamp-3">
                  {post.excerpt}
                </p>

                <div>
                  <button
                    type="button"
                    onClick={() => setSelectedPost(post)}
                    className="inline-flex items-center gap-2 text-sm font-bold text-[#0BCEAF] hover:text-[#089e86] border-2 border-[#0BCEAF] hover:border-[#089e86] px-5 py-2 rounded-full transition-all"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Blog Detail Modal */}
      {selectedPost && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
          onClick={() => setSelectedPost(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-2xl w-full p-6 sm:p-8 relative shadow-2xl overflow-y-auto max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedPost(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 p-1.5 rounded-full hover:bg-gray-100"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="mb-4 rounded-xl overflow-hidden h-64 bg-gray-100">
              <img
                src={selectedPost.image}
                alt={selectedPost.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex items-center gap-4 text-xs font-semibold text-[#0BCEAF] mb-3">
              <span className="inline-flex items-center gap-1 bg-[#0BCEAF]/10 px-3 py-1 rounded-full">
                <Calendar className="w-3.5 h-3.5" />
                {selectedPost.dateDay} {selectedPost.dateMonth} 2026
              </span>
              <span className="inline-flex items-center gap-1 bg-gray-100 text-gray-600 px-3 py-1 rounded-full">
                <Clock className="w-3.5 h-3.5" />5 min read
              </span>
            </div>

            <h3 className="text-2xl font-bold text-gray-800 mb-4">{selectedPost.title}</h3>

            <div className="prose text-gray-600 leading-relaxed space-y-4">
              <p>{selectedPost.excerpt}</p>
              <p>
                Building production web products in JavaScript requires balancing clean visual aesthetics with rapid runtime performance. By enforcing modular component boundaries, efficient event listeners, and semantic HTML structures, web applications remain smooth and responsive.
              </p>
              <p>
                Always prioritize accessibility contrast ratios, semantic element hierarchy, and clear micro-interactions across devices to maximize user delight and engagement.
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-gray-100 flex justify-end">
              <button
                type="button"
                onClick={() => setSelectedPost(null)}
                className="px-6 py-2 bg-[#0BCEAF] text-white font-medium rounded-full hover:bg-[#089e86] transition-colors"
              >
                Close Article
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
