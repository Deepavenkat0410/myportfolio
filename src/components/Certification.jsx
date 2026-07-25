import React, { useState } from "react";
import {
  Award,
  Code2,
  Globe,
  Cpu,
  X,
} from "lucide-react";

export const Certification = () => {
  const [activeModal, setActiveModal] = useState(null);

  const certifications = [
    {
      id: "c1",
      title: "Junior English Typing",
      icon: <Award className="w-10 h-10 text-amber-500" />,
      description:
        "Successfully completed Junior English Typewriting with First Class and Distinction.",
      fullDetails:
        "Successfully completed the Junior English Typewriting Examination conducted by the Government of Tamil Nadu Department of Technical Education with First Class and Distinction.",
      provider:
        "Government of Tamil Nadu Department of Technical Education",
      year: "2024",
      certificate: "/certificates/typing.jpg",
    },

    {
      id: "c2",
      title: "Problem Solving Python Programming",
      icon: <Code2 className="w-10 h-10 text-blue-500" />,
      description:
        "Participated in a one-day Python Programming workshop.",
      fullDetails:
        "Attended a hands-on workshop on Problem Solving using Python Programming conducted by ACGCET covering Python fundamentals and problem-solving techniques.",
      provider: "ACGCET",
      year: "2023 - 1 Day",
      certificate: "/certificates/python.jpg",
    },

    {
      id: "c3",
      title: "Full Stack & Web Development Internship",
      icon: <Globe className="w-10 h-10 text-emerald-500" />,
      description:
        "Completed one-week internship in Full Stack Web Development.",
      fullDetails:
        "Completed an intensive internship at NSIC focusing on HTML, CSS, JavaScript, React, APIs, Responsive Web Design and Full Stack Development concepts.",
      provider: "NSIC",
      year: "2025 - 1 Week",
      certificate: "/certificates/nsic.jpg",
    },

    {
      id: "c4",
      title: "Electronic Systems Design - Circuits & PCB Design",
      icon: <Cpu className="w-10 h-10 text-purple-500" />,
      description:
        "Completed NPTEL course on Electronic Systems Design.",
      fullDetails:
        "Successfully completed the 12-week NPTEL certification covering Electronic Circuits, PCB Design, CAD Software and Hardware Design concepts.",
      provider: "NPTEL",
      year: "2025 - 12 Weeks",
      certificate: "/certificates/nptel.jpg",
    },
  ];

  return (
    <section
      id="certification"
      className="py-16 sm:py-20 bg-gray-50/50 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
<div className="relative flex items-center justify-center mb-12 sm:mb-16 select-none">
  <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-black uppercase text-stroke-bg tracking-widest text-center pointer-events-none">
    Certificate
  </h1>
          <h2 className="absolute text-xl sm:text-3xl md:text-4xl font-bold uppercase text-[#0BCEAF] tracking-wider text-center">
            My Certifications
          </h2>
        </div>

        {/* Section Title */}
        <div className="flex items-center gap-3 mb-8 border-b-2 border-[#0BCEAF] pb-2 w-fit">
          <Award className="w-7 h-7 text-[#0BCEAF]" />

          <h3 className="text-2xl sm:text-3xl font-bold text-gray-800">
            Certifications
          </h3>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
          {certifications.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 p-5 sm:p-6 lg:p-8 group"
            >
              {/* Icon */}
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-cyan-50 to-cyan-100 border border-cyan-200 flex items-center justify-center shadow-sm group-hover:scale-110 transition duration-300">
                  {item.icon}
                </div>
              </div>

              {/* Title */}
              <h3 className="text-lg sm:text-xl font-bold text-center text-gray-800 mb-4 group-hover:text-[#0BCEAF] transition-colors duration-300">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-sm sm:text-base text-gray-600 text-center leading-relaxed mb-6">
                {item.description}
              </p>

              {/* Button */}
              <div className="flex justify-center">
                <button
                  onClick={() => setActiveModal(item)}
                  className="px-6 py-2.5 rounded-lg bg-[#0BCEAF] text-white font-semibold hover:bg-[#089e86] transition duration-300"
                >
                  Read More →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
            {/* Responsive Modal */}
      {activeModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
          onClick={() => setActiveModal(null)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-[95%] sm:max-w-lg lg:max-w-xl max-h-[90vh] overflow-y-auto rounded-2xl bg-white shadow-2xl p-5 sm:p-6 lg:p-8"
          >
            {/* Close Button */}
            <button
              onClick={() => setActiveModal(null)}
              className="absolute top-4 right-4 rounded-full p-2 hover:bg-gray-100 transition"
            >
              <X className="w-6 h-6 text-gray-500" />
            </button>

            {/* Icon & Title */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 mb-6 text-center sm:text-left">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-r from-[#0BCEAF] to-cyan-200 flex items-center justify-center shadow-lg shrink-0">
                {activeModal.icon}
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-800">
                  {activeModal.title}
                </h3>

                <p className="text-sm text-[#0BCEAF] font-semibold mt-1">
                  {activeModal.provider}
                </p>
              </div>
            </div>

            {/* Details */}
            <p className="text-sm sm:text-base text-gray-600 leading-7 mb-6">
              {activeModal.fullDetails}
            </p>

            {/* Provider */}
            <div className="mb-4 text-sm sm:text-base break-words">
              <span className="font-semibold text-gray-800">
                Provider :
              </span>{" "}
              <span className="text-[#0BCEAF] font-medium">
                {activeModal.provider}
              </span>
            </div>

            {/* Year */}
            <div className="mb-6 text-sm sm:text-base">
              <span className="font-semibold text-gray-800">
                Year :
              </span>{" "}
              <span className="text-gray-600">
                {activeModal.year}
              </span>
            </div>

            {/* Certificate Button */}
            <div className="flex flex-col sm:flex-row justify-between gap-4 mt-8">
              <a
                href={activeModal.certificate}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto text-center px-6 py-3 rounded-full bg-[#0BCEAF] text-white font-semibold hover:bg-[#089e86] transition"
              >
                View Certificate
              </a>

              <button
                onClick={() => setActiveModal(null)}
                className="w-full sm:w-auto px-6 py-3 rounded-full bg-gray-800 text-white hover:bg-black transition"
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