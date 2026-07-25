import React, { useState } from "react";
import {
  Send,
  CheckCircle,
  Mail,
  MapPin,
  Phone,
  Github,
} from "lucide-react";

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      formData.name &&
      formData.email &&
      formData.message
    ) {
      setSubmitted(true);
    }
  };

  return (
    <section
      id="contact"
      className="py-16 sm:py-20 bg-gray-50/50 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
      <div className="relative flex items-center justify-center mb-12 sm:mb-16 select-none">
  <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-black uppercase text-stroke-bg tracking-widest text-center pointer-events-none">
    Contact
  </h1>
          <h2
            className="
              absolute
              text-xl
              sm:text-3xl
              md:text-4xl
              font-bold
              uppercase
              text-[#0BCEAF]
              tracking-wider
              text-center
            "
          >
            Contact Me
          </h2>

        </div>

        <div className="max-w-6xl mx-auto">

          {/* Contact Cards */}

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 lg:gap-6 mb-10 lg:mb-12">

            {/* Location */}

            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 p-5 flex items-center gap-4">

              <div className="w-12 h-12 rounded-full bg-[#0BCEAF]/10 flex items-center justify-center shrink-0">
                <MapPin className="w-6 h-6 text-[#0BCEAF]" />
              </div>

              <div className="min-w-0">
                <h5 className="font-bold text-gray-800 text-sm mb-1">
                  Location
                </h5>

                <a
                  href="https://maps.google.com/?q=Periyar+Street,+Anna+Nagar,+Karaikudi,+Tamil+Nadu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-gray-600 hover:text-[#0BCEAF] break-words"
                >
                  Periyar Street,
                  <br />
                  Anna Nagar,
                  <br />
                  Karaikudi
                </a>
              </div>

            </div>

            {/* Email */}

            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 p-5 flex items-center gap-4">

              <div className="w-12 h-12 rounded-full bg-[#0BCEAF]/10 flex items-center justify-center shrink-0">
                <Mail className="w-6 h-6 text-[#0BCEAF]" />
              </div>

              <div className="min-w-0">
                <h5 className="font-bold text-gray-800 text-sm mb-1">
                  Email
                </h5>

                <a
                  href="mailto:deepavenkat093@gmail.com"
                  className="text-xs text-gray-600 hover:text-[#0BCEAF] break-all"
                >
                  deepavenkat093
                  <br />
                  @gmail.com
                </a>
              </div>

            </div>

            {/* Phone */}

            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 p-5 flex items-center gap-4">

              <div className="w-12 h-12 rounded-full bg-[#0BCEAF]/10 flex items-center justify-center shrink-0">
                <Phone className="w-6 h-6 text-[#0BCEAF]" />
              </div>

              <div>
                <h5 className="font-bold text-gray-800 text-sm mb-1">
                  Phone
                </h5>

                <a
                  href="tel:8608612728"
                  className="text-xs text-gray-600 hover:text-[#0BCEAF]"
                >
                  +91 8608612728
                </a>
              </div>

            </div>

            {/* GitHub */}

            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 p-5 flex items-center gap-4">

              <div className="w-12 h-12 rounded-full bg-[#0BCEAF]/10 flex items-center justify-center shrink-0">
                <Github className="w-6 h-6 text-[#0BCEAF]" />
              </div>

              <div className="min-w-0">
                <h5 className="font-bold text-gray-800 text-sm mb-1">
                  GitHub
                </h5>

                <a
                  href="https://github.com/Deepavenkat0410"
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs text-gray-600 hover:text-[#0BCEAF] break-all"
                >
                  Deepavenkat0410
                </a>
              </div>

            </div>

          </div>

          {/* Form / Success Message */}

          <div className="bg-white rounded-3xl border border-gray-200 shadow-sm p-5 sm:p-8 lg:p-12">

            {submitted ? (
              <>
  <div className="text-center py-6 sm:py-10">

    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#0BCEAF]/10 flex items-center justify-center mx-auto mb-5">
      <CheckCircle className="w-10 h-10 sm:w-12 sm:h-12 text-[#0BCEAF]" />
    </div>

    <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-3">
      Message Sent Successfully!
    </h3>

    <p className="text-gray-600 max-w-md mx-auto leading-relaxed text-sm sm:text-base">
      Thank you for reaching out. I'll review your message and get back to you as soon as possible.
    </p>

    <button
      type="button"
      onClick={() => {
        setSubmitted(false);
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      }}
      className="mt-8 px-7 py-3 rounded-full bg-[#0BCEAF] text-white font-semibold hover:bg-[#089e86] transition-all duration-300"
    >
      Send Another Message
    </button>

  </div>
</>
) : (

<form
  onSubmit={handleSubmit}
  className="space-y-6"
>

  {/* Name + Email */}

  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

    <div>

      <label className="block text-sm font-semibold text-gray-700 mb-2">
        Your Name *
      </label>

      <input
        type="text"
        name="name"
        required
        value={formData.name}
        onChange={handleChange}
        placeholder="Enter your name"
        className="w-full rounded-xl border border-gray-200 bg-gray-50 px-5 py-3 focus:outline-none focus:border-[#0BCEAF] focus:ring-2 focus:ring-[#0BCEAF]/20 transition"
      />

    </div>

    <div>

      <label className="block text-sm font-semibold text-gray-700 mb-2">
        Your Email *
      </label>

      <input
        type="email"
        name="email"
        required
        value={formData.email}
        onChange={handleChange}
        placeholder="Enter your email"
        className="w-full rounded-xl border border-gray-200 bg-gray-50 px-5 py-3 focus:outline-none focus:border-[#0BCEAF] focus:ring-2 focus:ring-[#0BCEAF]/20 transition"
      />

    </div>

  </div>

  {/* Subject */}

  <div>

    <label className="block text-sm font-semibold text-gray-700 mb-2">
      Subject
    </label>

    <input
      type="text"
      name="subject"
      value={formData.subject}
      onChange={handleChange}
      placeholder="Subject"
      className="w-full rounded-xl border border-gray-200 bg-gray-50 px-5 py-3 focus:outline-none focus:border-[#0BCEAF] focus:ring-2 focus:ring-[#0BCEAF]/20 transition"
    />

  </div>

  {/* Message */}

  <div>

    <label className="block text-sm font-semibold text-gray-700 mb-2">
      Message *
    </label>

    <textarea
      name="message"
      rows={6}
      required
      value={formData.message}
      onChange={handleChange}
      placeholder="Write your message..."
      className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-5 py-4 resize-none focus:outline-none focus:border-[#0BCEAF] focus:ring-2 focus:ring-[#0BCEAF]/20 transition"
    />

  </div>
    {/* Submit Button */}

  <div className="flex justify-center pt-2">

    <button
      type="submit"
      className="
        inline-flex
        items-center
        justify-center
        gap-2
        w-full
        sm:w-auto
        px-8
        sm:px-10
        py-3.5
        rounded-full
        bg-[#0BCEAF]
        text-white
        font-bold
        shadow-lg
        hover:bg-[#089e86]
        hover:shadow-xl
        transition-all
        duration-300
      "
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
