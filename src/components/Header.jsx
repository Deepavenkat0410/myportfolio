import React from 'react';
import { TypedText } from './TypedText.jsx';
import { Download, Github, Mail, Linkedin } from 'lucide-react';
import myphoto from "/assets/.aistudio/DEEPAPIC.jpg";

export const Header = ({ onPlayVideo }) => {

  const typedStrings = [
    'Front-End Developer',
    'EEE Graduate & Engineer',
  ];


  const handleDownloadCV = (e) => {
    e.preventDefault();

    // உன்னுடைய existing cvContent code இங்கே அப்படியே இருக்கட்டும்

    const blob = new Blob(
      [cvContent.trim()],
      { type: 'text/plain' }
    );

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
      className="
      hero-header 
      relative 
      min-h-screen 
      flex 
      items-center 
      justify-center 
      pt-24 
      sm:pt-28 
      pb-16 
      px-4 
      sm:px-6 
      md:px-10 
      lg:px-20 
      xl:px-32
      overflow-hidden 
      bg-cover 
      bg-[#0BCEAF] 
      bg-center
      "
    >


      <div className="max-w-7xl mx-auto w-full">


        <div 
          className="
          grid 
          grid-cols-1 
          lg:grid-cols-12 
          gap-8 
          lg:gap-16 
          xl:gap-20 
          items-center
          "
        >



          {/* Profile Image */}

          <div 
            className="
            lg:col-span-5 
            flex 
            justify-center 
            lg:justify-start
            "
          >


            <div
              className="
              relative
              w-52
              h-52
              sm:w-64
              sm:h-64
              md:w-80
              md:h-80
              lg:w-96
              lg:h-96
              rounded-full
              overflow-hidden
              shadow-2xl
              border-4
              border-white/30
              p-1.5
              bg-white/10
              backdrop-blur-sm
              group
              "
            >

              <img
                src={myphoto}
                alt="Deepa V"
                className="
                w-full
                h-full
                object-cover
                rounded-full
                transition-transform
                duration-700
                group-hover:scale-105
                "
              />

            </div>


          </div>





          {/* Intro Text */}


          <div
            className="
            lg:col-span-7 
            text-center 
            lg:text-left 
            text-white
            flex
            flex-col
            items-center
            lg:items-start
            "
          >


            <h3
              className="
              text-xl 
              sm:text-2xl 
              font-normal 
              text-white/90 
              mb-1
              "
            >
              I'm
            </h3>




            <h1
              className="
              text-4xl 
              sm:text-5xl
              md:text-6xl
              xl:text-7xl 
              font-black 
              uppercase 
              text-stroke-lg-white 
              mb-3 
              tracking-tight 
              drop-shadow-sm
              "
            >

              DEEPA V

            </h1>




            <div
              className="
              text-xl 
              sm:text-2xl 
              md:text-3xl 
              xl:text-4xl 
              font-light 
              mb-6 
              h-12 
              flex 
              items-center 
              justify-center 
              lg:justify-start
              "
            >

              <TypedText
                strings={typedStrings}
                typeSpeed={90}
                backSpeed={30}
              />

            </div>






            {/* Contact Icons */}


            <div
              className="
              flex 
              flex-wrap 
              justify-center 
              lg:justify-start 
              gap-3 
              sm:gap-4 
              mb-8 
              text-sm 
              text-white/95
              "
            >



              <a
                href="https://github.com/Deepavenkat0410"
                target="_blank"
                rel="noreferrer"
                className="
                inline-flex
                items-center
                justify-center
                w-12
                h-12
                bg-white/15
                hover:bg-white/25
                rounded-full
                transition-all
                border
                border-white/20
                hover:scale-110
                "
              >

                <Github className="w-5 h-5"/>

              </a>




              <a
                href="mailto:deepavenkat093@gmail.com"
                className="
                inline-flex
                items-center
                justify-center
                w-12
                h-12
                bg-white/15
                hover:bg-white/25
                rounded-full
                transition-all
                border
                border-white/20
                hover:scale-110
                "
              >

                <Mail className="w-5 h-5"/>

              </a>




              <a
                href="https://www.linkedin.com/in/deepa-venkat-3585522a7"
                target="_blank"
                rel="noreferrer"
                className="
                inline-flex
                items-center
                justify-center
                w-12
                h-12
                bg-white/15
                hover:bg-white/25
                rounded-full
                transition-all
                border
                border-white/20
                hover:scale-110
                "
              >

                <Linkedin className="w-5 h-5"/>

              </a>



            </div>







            {/* Download Button */}


            <div
              className="
              flex 
              flex-wrap 
              items-center 
              justify-center 
              lg:justify-start 
              gap-5 
              pt-2
              w-full
              "
            >


              <a
                href="#download"
                onClick={handleDownloadCV}
                className="
                inline-flex 
                items-center 
                justify-center
                gap-2 
                w-full
                sm:w-auto
                px-8 
                py-3.5 
                bg-[#0BCEAF]
                hover:bg-[#089e86]
                text-white
                border-2 
                border-white 
                font-bold 
                rounded-full 
                transition-all 
                duration-300
                hover:bg-white 
                hover:text-[#0BCEAF] 
                hover:scale-110
                hover:shadow-xl
                "
              >

                <Download className="w-5 h-5"/>

                Download Resume

              </a>


            </div>



          </div>



        </div>


      </div>


    </div>

  );

};