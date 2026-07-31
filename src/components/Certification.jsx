import React, { useState } from "react";
import { Award, Code2, Globe, Cpu, X } from "lucide-react";
import typing from "/assets/.aistudio/typing.jpg";
import pspp from "/assets/.aistudio/pspp.jpg";
import Nptel from "/assets/.aistudio/Nptel.jpg";
import fullstack from "/assets/.aistudio/fullstack.jpg";

export const Certification = () => {
 const [activeModal, setActiveModal] = useState(null);
const [showCertificate, setShowCertificate] = useState(false);
  // Priority Order:
  // 1. NPTEL
  // 2. NSIC Internship
  // 3. Government Typing
  // 4. Python Workshop

  const certifications = [
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
      certificate: Nptel,
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
      certificate: fullstack,
    },

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
      certificate: typing,
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
      certificate: pspp,
    },
  ];

  return (
    <section
      id="certification"
      className="py-16 sm:py-20  overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="relative flex items-center justify-center mb-12 sm:mb-16 select-none">
          <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-black uppercase text-stroke-bg tracking-widest text-center pointer-events-none">
            Certificate
          </h1>

          <h2 className="absolute text-xl sm:text-3xl md:text-4xl font-bold uppercase text-fuchsia-900 tracking-wider text-center">
            My Certifications
          </h2>
        </div>

        {/* Section Title */}
        <div className="flex items-center gap-3 mb-8 border-b-2 border-fuchsia-900 pb-2 w-fit">
          <Award className="w-7 h-7 text-fuchsia-900" />
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
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-fuchsia-50 to-fuchsia-100 border border-fuchsia-200 flex items-center justify-center shadow-sm group-hover:scale-110 transition duration-300">
                  {item.icon}
                </div>
              </div>

              {/* Title */}
              <h3 className="text-lg sm:text-xl font-bold text-center text-gray-800 mb-4 group-hover:text-fuchsia-900 transition-colors duration-300">
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
                  className="px-6 py-2.5 rounded-lg bg-fuchsia-900 text-white font-semibold hover:bg-fuchsia-800 transition duration-300"
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
            className="relative w-full max-w-[95%] sm:max-w-lg lg:max-w-xl max-h-[90vh] overflow-y-auto rounded-2xl bg-white/95 shadow-2xl p-5 sm:p-6 lg:p-10"
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
              <div className="w-16 h-16 rounded-xl bg-gradient-to-r from-fuchsia-900 to-fuchsia-700 flex items-center justify-center shadow-lg shrink-0">
                {activeModal.icon}
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-800">
                  {activeModal.title}
                </h3>

                <p className="text-sm text-fuchsia-900 font-semibold mt-1">
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
              <span className="text-fuchsia-900 font-medium">
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

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row justify-between gap-4 mt-8">
              <button
  onClick={() => setShowCertificate(true)}
  className="
    w-full
    sm:w-auto
    text-center
    px-6
    py-3
    rounded-full
    bg-fuchsia-900
    text-white
    font-semibold
    hover:bg-fuchsia-800
    transition
  "
>
  View Certificate
</button>

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
      {/* Certificate Viewer */}

{showCertificate && activeModal && (
  <div
    className="
      fixed
      inset-0
      z-[60]
      flex
      items-center
      justify-center
      bg-black/70
      backdrop-blur-sm
      p-4
    "
    onClick={() => setShowCertificate(false)}
  >
    <div
      className="
        relative
        w-full
        max-w-xl
        max-h-[95vh]
        overflow-auto
       
        p
        sm:p-6
        shadow-2xl
      "
      onClick={(e) => e.stopPropagation()}
    >
      {/* Close Button */}
      <button
        onClick={() => setShowCertificate(false)}
        className="
          absolute
          right-1
          top-4
          z-10
          rounded-full
          bg-white/50
          p-2
          shadow-md
          transition
          hover:bg-gray-100
        "
      >
        <X className="w-6 h-6 text-gray-600" />
      </button>

     
      {/* Certificate Image */}
      <div className="flex justify-center rounded-xl p-3 sm:p-5">
        <img
          src={activeModal.certificate}
          alt={`${activeModal.title} Certificate`}
          className="
            h-auto
            max-h-[75vh]
            w-auto
            max-w-full
            rounded-lg
            object-contain
            shadow-lg
          "
        />
      </div>

     
    </div>
  </div>
)}
    </section>
  );
};