import React from 'react';
import { TypedText } from './TypedText.jsx';
import { Download, Play, Github, Mail, Phone, Linkedin } from 'lucide-react';
import myphoto from "/assets/.aistudio/DEEPAPIC.jpg";

export const Header = ({ onPlayVideo }) => {
  const typedStrings = [
    'Front-End Developer',
    'EEE Graduate & Engineer',
  ];

  const handleDownloadCV = (e) => {
    e.preventDefault();
    const cvContent = `
==================================================
DEEPA V - FRONT-END DEVELOPER
==================================================
Phone: +91 8608612728
Email: deepavenkat093@gmail.com
Location: No.4, Periyar Street, Anna Nagar, Karaikudi
GitHub: https://github.com/Deepavenkat0410

ABOUT ME
--------------------------------------------------
Aspiring Front-End Developer with a background in Electrical and Electronics Engineering and hands-on experience in HTML, CSS, and JavaScript, seeking an entry-level opportunity to build responsive and user-friendly web applications.

SKILLS
--------------------------------------------------
• Front-End: HTML5, CSS3, JavaScript (ES6+), React.js, Tailwind CSS, Bootstrap
• Programming & Tools: Python, GitHub, Git, VS Code
• Concepts: Responsive Design, Client-Side Validation, Component Architecture

EDUCATION
--------------------------------------------------
1. B.E. Electrical and Electronics Engineering
   Alagappa Chettiar Government College of Engineering and Technology, Karaikudi
   2022 - 2026 | CGPA: 7.6950

2. HSC (Higher Secondary Certificate)
   Government Girls Higher Secondary School, Karaikudi
   2021 - 2022 | Percentage: 83.8%

3. SSLC (Secondary School Leaving Certificate)
   Government Girls Higher Secondary School, Karaikudi
   2019 - 2020 | Percentage: 73.8%

PROJECTS
--------------------------------------------------
1. FARM2INDUSTRY
   • Developed a responsive web platform connecting farmers and industries.
   • Designed user interface using HTML, CSS, and JavaScript.
   • Implemented interactive forms and basic client-side validation.

2. SELF POWERED SPEED MEASURING SYSTEM
   • Designed a motor speed measurement system powered by rotational energy.
   • Integrated IR sensor with ESP8266 for RPM calculation.
   • Displayed real-time speed data on LCD screen.

3. NETFLIX WEBSITE CLONE
   • Cloned the Netflix platform using HTML, CSS, and JavaScript.
   • Used AI tools to assist in UI design and code optimization.
   • Built responsive pages similar to the original Netflix layout.

4. MEESHO WEBSITE CLONE
   • Built a responsive e-commerce website using React.js.
   • Implemented product listing, category filtering, search, and shopping cart features.
   • Used React Hooks and React Router for efficient navigation.
   • Followed a component-based architecture for reusable code.

CERTIFICATIONS & INTERNSHIPS
--------------------------------------------------
• 1-Week Internship in Full Stack and Web Development at NSIC.
• Junior English Typing with First Class and Distinction.

LANGUAGES
--------------------------------------------------
• Tamil (Native)
• English (Professional)
`;
    const blob = new Blob([cvContent.trim()], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Deepa_V_Resume.txt';
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div
      id="home"
      className="hero-header relative min-h-screen flex items-center justify-center pt-28 pb-16  px-4  sm:px-6 lg:px-40 overflow-hidden bg-cover  bg-[#0BCEAF]  bg-center "
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-30 items-center">
          {/* Profile Avatar Column */}
          <div className="lg:col-span-5 flex justify-center lg:justify-start">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full overflow-hidden shadow-2xl border-4 border-white/30 p-1.5 bg-white/10 backdrop-blur-sm group">
              <img
                src={myphoto}
                alt="Deepa V"
                className="w-full h-full object-cover rounded-full transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </div>

          {/* Intro Text Column */}
          <div className="lg:col-span-7 text-center  lg:text-left text-white">
            <h3 className="text-xl sm:text-2xl font-normal text-white/90 mb-1">I'm</h3>
            <h1 className="text-4xl sm:text-6xl xl:text-7xl font-black uppercase text-stroke-lg-white mb-3 tracking-tight drop-shadow-sm">
              DEEPA V
            </h1>

            <div className="text-2xl sm:text-3xl xl:text-4xl font-light mb-6 h-12 flex items-center justify-center lg:justify-start">
              <TypedText strings={typedStrings} typeSpeed={90} backSpeed={30} />
            </div>

            {/* Quick Contact Chips */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8 text-sm text-white/95">
              <a
                href="https://github.com/Deepavenkat0410"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 bg-white/15 hover:scale-110 duration-300 hover:bg-white/25 px-3.5 py-1.5 rounded-full transition-all border border-white/20"
              >
                <Github className="w-5 h-5" />
               
              </a>
              <a
                href="mailto:deepavenkat093@gmail.com"
                className="inline-flex items-center gap-1.5 bg-white/15 hover:scale-110 duration-300 hover:bg-white/25 px-3.5 py-1.5 rounded-full transition-all border border-white/20"
              >
                <Mail className="w-5 h-5" />
                
              </a>
              <a
                href="https://www.linkedin.com/in/deepa-venkat-3585522a7?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                className="inline-flex items-center gap-1.5 bg-white/15 hover:bg-white/25 hover:scale-110 duration-300 px-3.5 py-1.5 rounded-full transition-all border border-white/20"
              >
                <Linkedin className="w-5 h-5" />
             
              </a>
            </div>

            {/* Buttons Row */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-5 pt-2">
              <a
                href="#download"
                onClick={handleDownloadCV}
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#0BCEAF] hover:bg-[#089e86] text-white  border-2 border-white text-white  font-bold rounded-full transition-all shadow- hover:bg-white hover:text-[#0BCEAF] hover:scale-110 duration-300 hover:shadow-xl transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <Download className="w-5 h-5" />
                Download Resume
              </a>

             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
