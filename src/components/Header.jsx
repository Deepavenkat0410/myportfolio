import React from "react";
import { TypedText } from "./TypedText.jsx";
import {
  Download,
  Github,
  Mail,
  Linkedin,
  ChevronDown,
} from "lucide-react";

import myphoto from "/assets/.aistudio/DEEPAPIC1.png";
import { motion } from "framer-motion";

const cvContent = `
DEEPA V
Front-End Developer | B.E. EEE Graduate
Email: deepavenkat093@gmail.com | Phone: 8608612728
GitHub: github.com/Deepavenkat0410
Location: Karaikudi, Tamil Nadu, India

SUMMARY:
Aspiring Front-End Developer with a background in Electrical and Electronics Engineering and hands-on experience in HTML, CSS, JavaScript, React.js, and Tailwind CSS. Seeking an entry-level opportunity to build responsive, accessible, and user-friendly web applications.

TECHNICAL SKILLS:
- Frontend: HTML5, CSS3, JavaScript (ES6+), React.js, Tailwind CSS, Bootstrap
- Tools: Git, GitHub, VS Code
- Core Concepts: Component-based Architecture, Responsive Web Design, State Management, REST APIs

EDUCATION:
- B.E. Electrical and Electronics Engineering (2022 - 2026)
  CGPA: 7.695 / 10

PROJECTS:
- Meesho Website Clone (React.js, HTML, CSS, JavaScript)
- Farm2Industry Platform (HTML, CSS, JavaScript, Node.js, Express, MySQL)
- Self Powered Speed Measuring System (ESP8266, IR Sensor, Embedded C)
- Netflix Website Clone (HTML, CSS, JavaScript)
- Personal Portfolio Website (React.js, Tailwind CSS, Motion)

CERTIFICATIONS:
- Front-End Web Development
- JavaScript & React Essentials
`;

export const Header = ({ onPlayVideo }) => {
  const typedStrings = [
    "Front-End Developer",
    "EEE Graduate & Engineer",
  ];

  const handleDownloadCV = (e) => {
    e.preventDefault();

    const blob = new Blob([cvContent.trim()], {
      type: "text/plain",
    });

    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "Deepa_V_Resume.txt";
    a.click();

    URL.revokeObjectURL(url);
  };

  const socialButton =
    "flex h-14 w-14 items-center justify-center rounded-full " +
    "bg-fuchsia-100 text-fuchsia-700 " +
    "transition-all duration-300 " +
    "hover:-translate-y-1 hover:bg-fuchsia-700 hover:text-white " +
    "hover:shadow-lg hover:shadow-fuchsia-300/40";

  return (
    <section
      id="home"
      className="
        relative
        min-h-screen
        
      
        px-5
        sm:px-8
        lg:px-12
        xl:px-16
      "
    >

      {/* =====================================================
          BACKGROUND GLOW
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-[58%]
          h-[500px]
          w-[500px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-fuchsia-400/25
          blur-[130px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          left-[50%]
          top-[50%]
          h-[280px]
          w-[280px]
          -translate-x-1/2
          rounded-full
          bg-purple-400/20
          blur-[90px]
        "
      />

      {/* =====================================================
          MAIN CONTAINER
      ===================================================== */}

      <div
        className="
          relative
          mx-auto
          flex
          min-h-screen
          w-full
          max-w-[1500px]
          items-center
        "
      >

       {/* ===================================================
    ANIMATED LARGE BACKGROUND TEXT
=================================================== */}

<div
  className="
    pointer-events-none
    absolute
    left-1/2
    top-[7%]
    z-0
    w-full
    -translate-x-1/2
    overflow-hidden
    text-center
    select-none
  "
>
  {/* FRONTEND */}

  <motion.div
    initial={{
      opacity: 0,
      x: -180,
    }}
    animate={{
      opacity: 1,
      x: 0,
    }}
    transition={{
      duration: 1.2,
      ease: [0.22, 1, 0.36, 1],
    }}
    className="
      whitespace-nowrap
      text-[clamp(70px,10vw,155px)]
      font-black
      italic
      leading-[0.85]
      tracking-[-0.07em]
      text-transparent
      bg-gradient-to-r
      from-[#7518df]
      via-[#c126e8]
      to-[#ee57bf]
      bg-clip-text
    "
  >
    FRONTEND
  </motion.div>


  {/* DEVELOPER */}

  <motion.div
    initial={{
      opacity: 0,
      x: 180,
    }}
    animate={{
      opacity: 1,
      x: 0,
    }}
    transition={{
      duration: 1.2,
      delay: 0.2,
      ease: [0.22, 1, 0.36, 1],
    }}
    className="
      whitespace-nowrap
      text-[clamp(60px,9vw,140px)]
      font-black
      italic
      leading-[0.85]
      tracking-[-0.07em]
      text-fuchsia-500/35
    "
  >
    DEVELOPER
  </motion.div>
</div>

        {/* ===================================================
            DESKTOP HERO CONTENT
        =================================================== */}

        <div
          className="
            relative
            z-10
            hidden
            w-full
            grid-cols-[1fr_0.85fr_1fr]
            items-center
            gap-4
            lg:grid
          "
        >

          {/* =================================================
              LEFT — INTRO
          ================================================= */}
{/* =================================================
    LEFT — INTRO
================================================= */}

<div
  className="relative z-20"
  
>
  <p
    className="
      text-5xl
      font-bold
      leading-none
      tracking-tight
      text-[#111827]
      xl:text-6xl
    "
  >
    Hi, I'm
  </p>

  <h1
    className="
      mt-2
      text-6xl
      font-black
      leading-none
      tracking-[-0.06em]
      text-transparent
      bg-gradient-to-r
      from-[#7518df]
      via-[#c126e8]
      to-[#ee57bf]
      bg-clip-text
      xl:text-6xl
    "
  >
    Deepa V
  </h1>

  <div
    className="
      mt-6
      flex
      h-10
      items-center
      text-xl
      font-medium
      text-fuchsia-700
      xl:text-2xl
    "
  >
    <TypedText
      strings={typedStrings}
      typeSpeed={90}
      backSpeed={30}
    />
  </div>
</div>

          {/* =================================================
              CENTER — PROFILE
          ================================================= */}

          <div
            className="
              relative
              flex
              h-[680px]
              items-end
              justify-center
            "
          >

            {/* Glow behind person */}

            <div
              className="
                absolute
                bottom-[8%]
                h-[400px]
                w-[400px]
                rounded-full
              bg-cyan-700/30
                blur-[100px]
              "
            />

            <div
              className="
                absolute
                bottom-[18%]
                h-[250px]
                w-[250px]
                rounded-full
                bg-purple-400/25
                blur-[70px]
              "
            />

            {/* Person */}

            <img
              src={myphoto}
              alt="Deepa V"
              className="
                relative
                z-10
                h-[580px]
                w-auto
                object-contain
                drop-shadow-[0_25px_35px_rgba(80,20,100,0.15)]
                transition-transform
                duration-500
                hover:scale-[1.02]
                xl:h-[660px]
              "
            />

          </div>

          {/* =================================================
              RIGHT — WELCOME
          ================================================= */}

          <div
            className="
              relative
              z-20
              flex
              flex-col
              items-center
              justify-center
              pt-50
              text-center
            "
          ><motion.div
  className="
    relative
    z-20
    flex
    flex-col
    items-center
    justify-center
    pt-50
    text-center
  "
  initial={{
    opacity: 0,
    x: 150,
  }}
  animate={{
    opacity: 1,
    x: 0,
  }}
  transition={{
    duration: 1,
    delay: 0.3,
    ease: [0.22, 1, 0.36, 1],
  }}
>

            <h2
              className="
                text-4xl
                font-extrabold
                uppercase
                leading-[1.15]
                tracking-[0.08em]
                text-transparent
                bg-gradient-to-r
                from-[#7615ca]
                to-[#e33ca8]
                bg-clip-text
                xl:text-5xl
              "
            >
              Welcome To

              <span className="mt-2 block">
                My Portfolio
              </span>
            </h2>
</motion.div>
            {/* Pink underline */}

            <div
              className="
                mt-6
                h-1.5
                w-16
                rounded-full
                bg-gradient-to-r
                from-[#b629dd]
                to-[#e24ab8]
              "
            />

            {/* Social Icons */}

            <div className="mt-7 flex gap-5">

              <a
                href="https://github.com/Deepavenkat0410"
                target="_blank"
                rel="noreferrer"
                className={socialButton}
                aria-label="GitHub Profile"
              >
                <Github className="h-6 w-6" />
              </a>

              <a
                href="mailto:deepavenkat093@gmail.com"
                className={socialButton}
                aria-label="Send Email"
              >
                <Mail className="h-6 w-6" />
              </a>

              <a
                href="https://www.linkedin.com/in/deepa-venkat-3585522a7"
                target="_blank"
                rel="noreferrer"
                className={socialButton}
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="h-6 w-6" />
              </a>

            </div>

          </div>

        </div>

        {/* ===================================================
            MOBILE VERSION
        =================================================== */}

        <div
          className="
            relative
            z-20
            flex
            w-full
            flex-col
            items-center
            justify-center
            gap-5
            pt-20
            lg:hidden
          "
        >

          {/* Mobile background title */}

        
          {/* Mobile image */}

          <div className="relative mt-20">

            <div
              className="
                absolute
                left-1/2
                top-1/2
                h-72
                w-72
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                bg-fuchsia-400/20
                blur-[80px]
              "
            />

            <img
              src={myphoto}
              alt="Deepa V"
              className="
                relative
                z-10
                h-[420px]
                w-auto
                object-contain
              "
            />

          </div>

          {/* Mobile introduction */}

          <div className="text-center">

            <p className="text-4xl font-bold text-slate-900">
              Hi, I'm
            </p>

            <h1
              className="
                mt-1
                text-5xl
                font-black
                text-transparent
                bg-gradient-to-r
                from-fuchsia-600
                via-purple-600
                to-pink-500
                bg-clip-text
              "
            >
              Deepa V
            </h1>

            <div className="mt-4 text-lg text-fuchsia-700">
              <TypedText
                strings={typedStrings}
                typeSpeed={90}
                backSpeed={30}
              />
            </div>

          </div>

          {/* Mobile welcome */}

          <div className="mt-5 text-center">

            <h2
              className="
                text-3xl
                font-extrabold
                uppercase
                tracking-widest
                text-transparent
                bg-gradient-to-r
                from-purple-700
                to-pink-500
                bg-clip-text
              "
            >
              Welcome To
              <span className="mt-2 block">
                My Portfolio
              </span>
            </h2>

            <div
              className="
                mx-auto
                mt-5
                h-1.5
                w-14
                rounded-full
                bg-gradient-to-r
                from-purple-600
                to-pink-500
              "
            />

            <div className="mt-6 flex justify-center gap-4">

              <a
                href="https://github.com/Deepavenkat0410"
                target="_blank"
                rel="noreferrer"
                className={socialButton}
              >
                <Github className="h-5 w-5" />
              </a>

              <a
                href="mailto:deepavenkat093@gmail.com"
                className={socialButton}
              >
                <Mail className="h-5 w-5" />
              </a>

              <a
                href="https://www.linkedin.com/in/deepa-venkat-3585522a7"
                target="_blank"
                rel="noreferrer"
                className={socialButton}
              >
                <Linkedin className="h-5 w-5" />
              </a>

            </div>

          </div>

        </div>

        {/* ===================================================
            SCROLL DOWN
        =================================================== */}

        

      </div>
    </section>
  );
};