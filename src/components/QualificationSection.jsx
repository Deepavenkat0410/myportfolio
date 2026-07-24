import React, { useEffect } from "react";
import { CircleDot, GraduationCap } from "lucide-react";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
} from "recharts";
import AOS from "aos";
import "aos/dist/aos.css";

const COLORS = ["#0BCEAF", "#E5E7EB"];

const educationList = [
  {
    id: "edu-1",
    title: "B.E. Electrical and Electronics Engineering",
    institution:
      "ALAGAPPA CHETTIAR GOVERNMENT COLLEGE OF ENGINEERING AND TECHNOLOGY, KARAIKUDI",
    period: "2022 - 2026",
    description:
      "Specializing in Electrical Engineering principles, microcontroller programming, hardware interfaces, and web technology integration.",
    value: 7.695,
    max: 10,
    label: "CGPA",
  },
  {
    id: "edu-2",
    title: "HSC (Higher Secondary Certificate)",
    institution:
      "GOVERNMENT GIRLS HIGHER SECONDARY SCHOOL, KARAIKUDI",
    period: "2021 - 2022",
    description:
      "Passed with 83.8% distinction in Physics, Chemistry, Mathematics, and Biology stream.",
    value: 83.8,
    max: 100,
    label: "HSC",
  },
  {
    id: "edu-3",
    title: "SSLC (Secondary School Leaving Certificate)",
    institution:
      "GOVERNMENT GIRLS HIGHER SECONDARY SCHOOL, KARAIKUDI",
    period: "2019 - 2020",
    description: "Passed with 73.8% across core curriculum.",
    value: 73.8,
    max: 100,
    label: "SSLC",
  },
];

function ScoreChart({ value, max, label }) {
  const data = [
    { name: label, value },
    { name: "Remaining", value: max - value },
  ];

  return (
    <div className="w-32 h-32 outline-none focus:outline-none">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart tabIndex={-1}>
          <Pie
            data={data}
            dataKey="value"
            innerRadius={35}
            outerRadius={50}
            startAngle={90}
            endAngle={-270}
            rootTabIndex={-1}
          >
            {data.map((_, index) => (
              <Cell key={index} fill={COLORS[index]} />
            ))}
          </Pie>

          <text
            x="50%"
            y="45%"
            textAnchor="middle"
            dominantBaseline="middle"
            style={{
              fontSize: "14px",
              fontWeight: "bold",
              fill: "#111827",
            }}
          >
            {value}
            {max === 10 ? "/10" : "%"}
          </text>

          <text
            x="50%"
            y="60%"
            textAnchor="middle"
            dominantBaseline="middle"
            style={{
              fontSize: "11px",
              fill: "#6B7280",
            }}
          >
            {label}
          </text>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

export const QualificationSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section id="qualification" className="py-20 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="relative flex items-center justify-center mb-16 select-none">
          <h1 className="text-6xl sm:text-8xl md:text-9xl font-black uppercase text-stroke-bg tracking-widest text-center">
            Learning
          </h1>

          <h2 className="absolute text-xl sm:text-3xl md:text-4xl font-bold uppercase text-[#0BCEAF] tracking-wider text-center">
             My Education 
          </h2>
        </div>

        <div className="mr-50 lg:grid-cols-1 gap-12">
          {/* Education */}
          <div>
            <div className="flex items-center gap-3 mb-8 border-b-2 border-[#0BCEAF] pb-2 inline-flex">
              <GraduationCap className="w-7 h-7 text-[#0BCEAF]" />

              <h3 className="text-2xl sm:text-3xl font-bold text-gray-800">
               Education
              </h3>
            </div>

            <div
              className="w-[110%] border-r-2 border-[#0BCEAF] pl-6 ml-3 space-y-8"
              data-aos="fade-left"
            >
              {educationList.map((item, index) => (
                <div
                  key={item.id}
                  data-aos="fade-right"
                  data-aos-delay={index * 100}
                  className={`relative w-[75%] group bg-white p-5 rounded-2xl border border-[#0BCEAF] shadow-sm hover:shadow-lg transition-all duration-300 flex justify-between items-center gap-6
                    ${index === 1 ? "ml-[100px]" : ""}
                    ${index === 2 ? "ml-[200px]" : ""}
                  `}
                >
                  {/* Timeline Dot */}
                  <CircleDot className="absolute -left-[35px] top-6 text-[#0BCEAF] bg-white rounded-full h-5 w-5 fill-[#0BCEAF]/20" />

                  {/* Left Content */}
                  <div className="flex-1">
                    <h5 className="text-lg font-bold text-gray-800 mb-1 group-hover:text-[#0BCEAF] transition-colors">
                      {item.title}
                    </h5>

                    <p className="text-xs text-[#0BCEAF] font-bold mb-2 uppercase tracking-wide">
                      {item.institution}
                    </p>

                    <span className="inline-block bg-gray-100 text-gray-700 text-xs px-2.5 py-1 rounded-full font-semibold mb-3">
                      {item.period}
                    </span>

                    <p className="text-gray-600 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {/* Right Pie Chart */}
                  <ScoreChart
                    value={item.value}
                    max={item.max}
                    label={item.label}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};