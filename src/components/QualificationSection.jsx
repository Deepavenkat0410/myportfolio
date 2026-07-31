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

const COLORS = ["#86198F", "#E5E7EB"];

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
    description:
      "Passed with 73.8% across core curriculum.",
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
    <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            innerRadius={35}
            outerRadius={50}
            startAngle={90}
            endAngle={-270}
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
    <section
      id="qualification"
      className="py-16 sm:py-20  overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
       <div className="relative flex items-center justify-center mb-12 sm:mb-16 select-none">
  <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-black uppercase text-stroke-bg tracking-widest text-center pointer-events-none">
    Learning
  </h1>


          <h2 className="absolute text-xl sm:text-3xl md:text-4xl font-bold uppercase text-fuchsia-900 tracking-wider text-center">
            My Education
          </h2>
        </div>

        {/* Title */}
        <div className="flex items-center gap-3 mb-8 border-b-2 border-fuchsia-900 pb-2 inline-flex">
          <GraduationCap className="w-7 h-7 text-fuchsia-900" />

          <h3 className="text-2xl sm:text-3xl font-bold text-gray-800">
            Education
          </h3>
        </div>

        {/* Timeline */}
        <div
          className="relative border-l-2 border-fuchsia-900 pl-6 space-y-8"
          data-aos="fade-left"
        >
          {educationList.map((item, index) => (
            <div
              key={item.id}
              data-aos="fade-right"
              data-aos-delay={index * 100}
              className={`relative
              bg-white
              border
              border-fuchsia-900
              rounded-2xl
              p-5
              shadow-sm
              hover:shadow-xl
              transition-all
              duration-300
              flex
              flex-col
              md:flex-row
              items-center
              gap-6
              w-full
              md:w-[95%]
              lg:w-[85%]

              ${
                index === 1
                  ? "md:ml-10 lg:ml-20"
                  : index === 2
                  ? "md:ml-20 lg:ml-40"
                  : ""
              }
              `}
            >
              {/* Timeline Dot */}
              <CircleDot className="absolute -left-[36px] top-8 text-fuchsia-00 bg-white rounded-full h-5 w-5 fill-fuchsia-900/20" />

              {/* Content */}
              <div className="flex-1 text-center md:text-left">
                <h5 className="text-lg font-bold text-gray-800 group-hover:text-fuchsia-900 transition-colors">
                  {item.title}
                </h5>

                <p className="text-xs text-fuchsia-900 font-bold uppercase mt-2">
                  {item.institution}
                </p>

                <span className="inline-block mt-3 bg-gray-100 px-3 py-1 rounded-full text-xs font-semibold">
                  {item.period}
                </span>

                <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Chart */}
              <div className="flex justify-center md:justify-end">
                <ScoreChart
                  value={item.value}
                  max={item.max}
                  label={item.label}
                />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};