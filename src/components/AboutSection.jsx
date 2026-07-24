import React from "react";
import { Award, Languages } from "lucide-react";
import { motion } from "framer-motion";

export const AboutSection = () => {
  const infoItems = [
    { label: "Name", value: "Deepa V" },
    { label: "Role", value: "Front-End Developer" },
    { label: "Degree", value: "B.E. EEE (2022 - 2026)" },
    { label: "CGPA", value: "7.6950 / 10" },
    { label: "Phone", value: "8608612728" },
    { label: "Email", value: "deepavenkat093@gmail.com" },
    { label: "Address", value: "No.4, Periyar St, Anna Nagar, Karaikudi" },
    { label: "GitHub", value: "github.com/Deepavenkat0410" },
  ];

  const scrollToContact = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -45;
      const y =
        element.getBoundingClientRect().top +
        window.pageYOffset +
        yOffset;

      window.scrollTo({
        top: y,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="relative flex items-center justify-center mb-16 select-none">
          <h1 className="text-6xl sm:text-8xl md:text-9xl font-black uppercase text-stroke-bg tracking-widest text-center">
            About
          </h1>

          <h2 className="absolute text-2xl sm:text-4xl font-bold uppercase text-[#0BCEAF] tracking-wider">
            About Me
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-1 gap-10 items-center">
          {/* About Image */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl overflow-hidden shadow-xl border border-[#0BCEAF] group relative">
              {/* Image here */}
            </div>
          </div>

          {/* About Content */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-800">
              Aspiring Front-End Developer
            </h3>

            <p className="text-gray-600 leading-relaxed text-base">
              Aspiring Front-End Developer with a background in Electrical and
              Electronics Engineering and hands-on experience in HTML, CSS,
              JavaScript, React.js, and Tailwind CSS. Seeking an entry-level
              opportunity to build responsive, accessible, and user-friendly web
              applications.
            </p>

            {/* Resume Info Animation */}
            <motion.div
              className="grid pl-30 sm:grid-cols-2 gap-y-3 gap-x-5 border-l-2 border-[#0BCEAF] py-8 my-6"
              initial={{ opacity: 0, x: 120 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              {infoItems.map((item, idx) => (
                <motion.div
                  key={idx}
                  className="flex items-center text-sm sm:text-base"
                  initial={{ opacity: 0, x: 80 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: idx * 0.12,
                  }}
                  viewport={{ once: true }}
                >
                  <span className="font-bold text-gray-800 w-24 shrink-0">
                    {item.label}:
                  </span>

                  {item.label === "GitHub" ? (
                    <a
                      href="https://github.com/Deepavenkat0410"
                      target="_blank"
                      rel="noreferrer"
                      className="text-[#0BCEAF] font-medium hover:underline truncate"
                    >
                      Deepavenkat0410
                    </a>
                  ) : item.label === "Email" ? (
                    <a
                      href={`mailto:${item.value}`}
                      className="text-[#0BCEAF] font-medium hover:underline truncate"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <span className="text-gray-600 font-medium truncate">
                      {item.value}
                    </span>
                  )}
                </motion.div>
              ))}
            </motion.div>

            {/* Languages */}
            <div className="flex flex-wrap justify-center items-center gap-10 text-sm text-gray-700">
              <div className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-xl border border-gray-200">
                <Languages className="w-8 h-8 text-[#0BCEAF]" />
                <span className="font-semibold text-gray-800">
                  Languages:
                </span>
                <span>Tamil (Native), English</span>
              </div>

              <div className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-xl border border-gray-200">
                <Award className="w-8 h-8 text-[#0BCEAF]" />
                <span className="font-semibold text-gray-800">
                  Typing:
                </span>
                <span>Junior English (Distinction)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};