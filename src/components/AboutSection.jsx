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
    {
      label: "Address",
      value: "No.4, Periyar Street, Anna Nagar, Karaikudi",
    },
    { label: "GitHub", value: "github.com/Deepavenkat0410" },
  ];

  return (
    <section id="about" className="py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="relative flex items-center justify-center mb-14 select-none">
          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black uppercase text-stroke-bg tracking-widest text-center">
            About
          </h1>

          <h2 className="absolute text-xl sm:text-3xl md:text-4xl font-bold uppercase text-[#0BCEAF] tracking-wider">
            About Me
          </h2>
        </div>

        {/* Main Content */}
        <div className="flex flex-col gap-10">

          {/* About Content */}
          <div className="space-y-8">

            <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 text-center lg:text-left">
              Aspiring Front-End Developer
            </h3>

            <p className="text-gray-600 leading-8 text-base text-justify">
              Aspiring Front-End Developer with a background in Electrical and
              Electronics Engineering and hands-on experience in HTML, CSS,
              JavaScript, React.js, and Tailwind CSS. Seeking an entry-level
              opportunity to build responsive, accessible, and user-friendly web
              applications.
            </p>

            {/* Personal Information */}
            <motion.div
              initial={{ opacity: 0, x: 120 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="border-l-4 border-[#0BCEAF] pl-5 sm:pl-8"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-5 gap-x-8">

                {infoItems.map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: 60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: idx * 0.1,
                    }}
                    viewport={{ once: true }}
                    className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-2"
                  >
                    <span className="font-bold text-gray-800 min-w-[90px]">
                      {item.label} :
                    </span>

                    {item.label === "GitHub" ? (
                      <a
                        href="https://github.com/Deepavenkat0410"
                        target="_blank"
                        rel="noreferrer"
                        className="text-[#0BCEAF] hover:underline break-all"
                      >
                        Deepavenkat0410
                      </a>
                    ) : item.label === "Email" ? (
                      <a
                        href={`mailto:${item.value}`}
                        className="text-[#0BCEAF] hover:underline break-all"
                      >
                        {item.value}
                      </a>
                    ) : item.label === "Phone" ? (
                      <a
                        href={`tel:${item.value}`}
                        className="text-gray-600 hover:text-[#0BCEAF]"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <span className="text-gray-600 break-words">
                        {item.value}
                      </span>
                    )}
                  </motion.div>
                ))}

              </div>
            </motion.div>

            {/* Language & Typing */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

              {/* Languages */}
              <div className="flex items-center gap-4 bg-gray-50 border border-gray-200 rounded-2xl p-5 hover:shadow-lg transition duration-300">

                <div className="w-12 h-12 rounded-full bg-[#0BCEAF]/10 flex items-center justify-center shrink-0">
                  <Languages className="w-6 h-6 text-[#0BCEAF]" />
                </div>

                <div>
                  <h4 className="font-bold text-gray-800">
                    Languages
                  </h4>

                  <p className="text-gray-600 text-sm">
                    Tamil (Native), English
                  </p>
                </div>

              </div>

              {/* Typing */}
              <div className="flex items-center gap-4 bg-gray-50 border border-gray-200 rounded-2xl p-5 hover:shadow-lg transition duration-300">

                <div className="w-12 h-12 rounded-full bg-[#0BCEAF]/10 flex items-center justify-center shrink-0">
                  <Award className="w-6 h-6 text-[#0BCEAF]" />
                </div>

                <div>
                  <h4 className="font-bold text-gray-800">
                    Typing
                  </h4>

                  <p className="text-gray-600 text-sm">
                    Junior English (Distinction)
                  </p>
                </div>

              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
};