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
      title: "Junior English Typing ",
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
      className="py-20 bg-gray-50/50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
        <div className="relative flex items-center justify-center mb-16 select-none">
          <h1 className="text-6xl sm:text-8xl md:text-9xl font-black uppercase text-stroke-bg tracking-widest text-center">
            Certification
          </h1>

          <h2 className="absolute text-2xl sm:text-4xl font-bold uppercase text-[#0BCEAF] tracking-wider">
            My Certifications
          </h2>
        </div>

        {/* Section Heading */}
        <div className="flex items-center gap-3 mb-8 border-b-2 border-[#0BCEAF] pb-2 inline-flex">
          <Award className="w-7 h-7 text-[#0BCEAF]" />

          <h3 className="text-2xl sm:text-3xl font-bold text-gray-800">
            Certifications
          </h3>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certifications.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 p-8 group"
            >
              {/* Icon */}
              <div className="mb-6 flex justify-center">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-cyan-50 to-cyan-100 border border-cyan-200 flex items-center justify-center shadow-sm group-hover:scale-110 transition duration-300">
                  {item.icon}
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-center text-gray-800 mb-4 group-hover:text-[#0BCEAF] transition-colors">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-center leading-relaxed mb-6">
                {item.description}
              </p>

              {/* Button */}
              <div className="flex justify-center">
                <button
                  onClick={() => setActiveModal(item)}
                  className="px-5 py-2 rounded-lg bg-[#0BCEAF] text-white font-medium hover:bg-[#089e86] transition"
                >
                  Read More →
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
            {/* Modal */}
      {activeModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
          onClick={() => setActiveModal(null)}
        >
          <div
            className="bg-white rounded-2xl shadow-2xl max-w-xl w-full p-8 relative animate-in fade-in zoom-in duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setActiveModal(null)}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 transition"
            >
              <X className="w-6 h-6 text-gray-500" />
            </button>

            {/* Icon + Title */}
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-50 to-cyan-100 border border-cyan-200 flex items-center justify-center">
                {activeModal.icon}
              </div>

              <h3 className="text-2xl font-bold text-gray-800">
                {activeModal.title}
              </h3>
            </div>

            {/* Details */}
            <p className="text-gray-600 leading-7 mb-6">
              {activeModal.fullDetails}
            </p>

            {/* Provider & Year */}
            <div className="border-t pt-5 space-y-3">
              <p>
                <span className="font-semibold text-gray-800">
                  Provider :
                </span>{" "}
                <span className="text-[#0BCEAF]">
                  {activeModal.provider}
                </span>
              </p>

              <p>
                <span className="font-semibold text-gray-800">
                  Year :
                </span>{" "}
                <span className="text-gray-600">
                  {activeModal.year}
                </span>
              </p>
            </div>

            {/* Buttons */}
            <div className="mt-8 flex justify-between items-center">
              <a
                href={activeModal.certificate}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2 rounded-lg bg-[#0BCEAF] text-white font-medium hover:bg-[#089e86] transition"
              >
                View Certificate →
              </a>

              <button
                onClick={() => setActiveModal(null)}
                className="px-5 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-100 transition"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
            {/* Modal */}
      {activeModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
          onClick={() => setActiveModal(null)}
        >
          <div
            className="bg-white rounded-2xl shadow-2xl max-w-xl w-full p-8 relative animate-in fade-in zoom-in duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setActiveModal(null)}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 transition"
            >
              <X className="w-6 h-6 text-gray-500" />
            </button>

            {/* Icon + Title */}
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-r from-[#0BCEAF] to-cyan-200 flex items-center justify-center shadow-lg">
                {activeModal.icon}
              </div>

              <h3 className="text-2xl font-bold text-gray-800">
                {activeModal.title}
              </h3>
            </div>

            {/* Details */}
            <p className="text-gray-600 leading-relaxed mb-6">
              {activeModal.fullDetails}
            </p>

            {/* Provider */}
            <div className="mb-3">
              <span className="font-semibold text-gray-800">
                Provider :
              </span>{" "}
              <span className="text-[#0BCEAF] font-medium">
                {activeModal.provider}
              </span>
            </div>

            {/* Year */}
            <div className="mb-6">
              <span className="font-semibold text-gray-800">
                Year :
              </span>{" "}
              <span className="text-gray-600">
                {activeModal.year}
              </span>
            </div>

            {/* View Certificate 
            <div className="mt-6 flex justify-center">
              <a
                href={activeModal.certificate}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-lg bg-[#0BCEAF] text-white font-semibold hover:bg-[#089e86] transition-all duration-300 shadow-md"
              >
                View Certificate →
              </a>
            </div>*/}

            {/* Close */}
            <div className="mt-8 flex justify-end">
              <button
                onClick={() => setActiveModal(null)}
                className="px-6 py-2 rounded-full bg-gray-800 text-white hover:bg-black transition"
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