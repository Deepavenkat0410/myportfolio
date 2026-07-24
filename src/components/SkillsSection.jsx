import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export const SkillsSection = () => {
  const Skills = [
    {
      name: "HTML5",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    },
    {
      name: "CSS3",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    },
    {
      name: "JavaScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    {
      name: "React JS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      name: "Tailwind CSS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
    },
    {
      name: "Bootstrap",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
    },
    {
      name: "Python",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    },
    {
      name: "GitHub",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    },
  ];
   useEffect(() => {
  AOS.init({
    duration: 800,
    once: true,
  });
}, []);
  return (
    <section id="skill" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="relative flex items-center justify-center mb-16 select-none">
          <h1 className="text-6xl sm:text-8xl md:text-9xl font-black uppercase text-stroke-bg tracking-widest text-center">
            Skills
          </h1>

          <h2 className="absolute text-2xl sm:text-4xl font-bold uppercase text-[#0BCEAF] tracking-wider">
            My Skills
          </h2>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {Skills.map((skill, index) => (
           <div
  key={index}
  data-aos="fade-up"
  className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col items-center justify-center"
>
              <img
                src={skill.icon}
                alt={skill.name}
                className="w-14 h-14 object-contain"
              />

              <h3 className="mt-4 text-lg font-semibold text-gray-800 text-center">
                {skill.name}
              </h3>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};