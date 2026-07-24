import React, { useState } from 'react';
import { Send, CheckCircle, Mail, MapPin, Phone, Github } from 'lucide-react';

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Background Stroke */}
        <div className="relative flex items-center justify-center mb-16 select-none">
          <h1 className="text-6xl sm:text-8xl md:text-9xl font-black uppercase text-stroke-bg tracking-widest text-center">
            Contact
          </h1>
          <h2 className="absolute text-2xl sm:text-4xl font-bold uppercase text-[#0BCEAF] tracking-wider">
            Contact Me
          </h2>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Quick Contact Info Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#0BCEAF]/10 text-[#0BCEAF] flex items-center justify-center shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h5 className="font-bold text-gray-800 text-sm">Location</h5>
                  <a
      href="https://maps.google.com/?q=Periyar+Street,+Anna+Nagar,+Karaikudi,+Tamil+Nadu"
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-600 hover:text-[#0BCEAF] text-xs block"
    >
      Periyar Street, Anna Nagar, Karaikudi
    </a>
              </div>
            </div>

            <div className="bg-white p-3 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#0BCEAF]/10 text-[#0BCEAF] flex items-center justify-center shrink-0">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h5 className="font-bold text-gray-800 text-sm">Email</h5>
                <a href="mailto:deepavenkat093@gmail.com" className="text-gray-600 hover:text-[#0BCEAF] text-xs truncate block">
                  deepavenkat093@gmail.com
                </a>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#0BCEAF]/10 text-[#0BCEAF] flex items-center justify-center shrink-0">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h5 className="font-bold text-gray-800 text-sm">Phone</h5>
                <a href="tel:8608612728" className="text-gray-600 hover:text-[#0BCEAF] text-xs">
                  +91 8608612728
                </a>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#0BCEAF]/10 text-[#0BCEAF] flex items-center justify-center shrink-0">
                <Github className="w-6 h-6" />
              </div>
              <div>
                <h5 className="font-bold text-gray-800 text-sm">GitHub</h5>
                <a href="https://github.com/Deepavenkat0410" target="_blank" rel="noreferrer" className="text-gray-600 hover:text-[#0BCEAF] text-xs truncate block">
                  Deepavenkat0410
                </a>
              </div>
            </div>
          </div>

          {/* Form / Success Feedback */}
          <div className="bg-white p-8 sm:p-12 rounded-3xl shadow-sm border border-gray-100">
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 bg-[#0BCEAF]/10 text-[#0BCEAF] rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Message Sent Successfully!</h3>
                <p className="text-gray-600 max-w-md mx-auto">
                  Thank you for reaching out to Deepa V. I will review your message and respond promptly!
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: '', email: '', subject: '', message: '' });
                  }}
                  className="px-6 py-2.5 bg-[#0BCEAF] text-white font-semibold rounded-full hover:bg-[#089e86] transition-colors mt-4 inline-block"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Your Name *</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Anitha Kumar"
                      className="w-full px-5 py-3.5 rounded-full bg-gray-50 border border-gray-200 focus:outline-none focus:border-[#0BCEAF] focus:ring-2 focus:ring-[#0BCEAF]/20 text-gray-800 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Your Email *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. recruiter@company.com"
                      className="w-full px-5 py-3.5 rounded-full bg-gray-50 border border-gray-200 focus:outline-none focus:border-[#0BCEAF] focus:ring-2 focus:ring-[#0BCEAF]/20 text-gray-800 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Front-End Developer Job Opportunity"
                    className="w-full px-5 py-3.5 rounded-full bg-gray-50 border border-gray-200 focus:outline-none focus:border-[#0BCEAF] focus:ring-2 focus:ring-[#0BCEAF]/20 text-gray-800 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Message *</label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Hi Deepa, I reviewed your Farm2Industry and Netflix clone projects and would love to connect regarding an entry-level Front-End role..."
                    className="w-full px-6 py-4 rounded-3xl bg-gray-50 border border-gray-200 focus:outline-none focus:border-[#0BCEAF] focus:ring-2 focus:ring-[#0BCEAF]/20 text-gray-800 transition-all resize-y"
                  ></textarea>
                </div>

                <div className="text-center pt-2">
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 px-10 py-4 bg-[#0BCEAF] hover:bg-[#089e86] text-white font-bold rounded-full transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 active:translate-y-0"
                  >
                    <Send className="w-5 h-5" />
                    Send Message
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
