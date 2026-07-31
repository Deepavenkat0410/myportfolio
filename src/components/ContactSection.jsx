import React from "react";
import {
  Mail,
  MapPin,
  Phone,
  Github,
} from "lucide-react";

export const ContactSection = () => {
  return (
    <section
      id="contact"
      className="py-16 sm:py-20 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="relative flex items-center justify-center mb-12 sm:mb-16 select-none">
          <h1
            className="
              text-5xl
              sm:text-6xl
              md:text-8xl
              lg:text-9xl
              font-black
              uppercase
              text-stroke-bg
              tracking-widest
              text-center
              pointer-events-none
            "
          >
            Contact
          </h1>

          <h2
            className="
              absolute
              text-xl
              sm:text-3xl
              md:text-4xl
              font-bold
              uppercase
              text-fuchsia-900
              tracking-wider
              text-center
            "
          >
            Contact Me
          </h2>
        </div>

        {/* Contact Cards */}
        <div
          className="
            max-w-6xl
            mx-auto
            grid
            grid-cols-1
            sm:grid-cols-2
            xl:grid-cols-4
            gap-5
            lg:gap-6
          "
        >

          {/* Location */}
          <div
            className="
              bg-white
              rounded-2xl
              border
              border-gray-200
              shadow-sm
              hover:shadow-lg
              hover:-translate-y-1
              transition-all
              duration-300
              p-5
              flex
              items-center
              gap-4
            "
          >
            <div
              className="
                w-12
                h-12
                rounded-full
                bg-fuchsia-900/10
                flex
                items-center
                justify-center
                shrink-0
              "
            >
              <MapPin className="w-6 h-6 text-fuchsia-900" />
            </div>

            <div className="min-w-0">
              <h5 className="font-bold text-gray-800 text-sm mb-1">
                Location
              </h5>

              <a
                href="https://maps.google.com/?q=Periyar+Street,+Anna+Nagar,+Karaikudi,+Tamil+Nadu"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  text-xs
                  text-gray-600
                  hover:text-fuchsia-900
                  break-words
                "
              >
                Periyar Street,
                <br />
                Anna Nagar,
                <br />
                Karaikudi
              </a>
            </div>
          </div>

          {/* Email */}
          <div
            className="
              bg-white
              rounded-2xl
              border
              border-gray-200
              shadow-sm
              hover:shadow-lg
              hover:-translate-y-1
              transition-all
              duration-300
              p-5
              flex
              items-center
              gap-4
            "
          >
            <div
              className="
                w-12
                h-12
                rounded-full
                bg-fuchsia-900/10
                flex
                items-center
                justify-center
                shrink-0
              "
            >
              <Mail className="w-6 h-6 text-fuchsia-900" />
            </div>

            <div className="min-w-0">
              <h5 className="font-bold text-gray-800 text-sm mb-1">
                Email
              </h5>

              <a
                href="mailto:deepavenkat093@gmail.com"
                className="
                  text-xs
                  text-gray-600
                  hover:text-fuchsia-900
                  break-all
                "
              >
                deepavenkat093
                <br />
                @gmail.com
              </a>
            </div>
          </div>

          {/* Phone */}
          <div
            className="
              bg-white
              rounded-2xl
              border
              border-gray-200
              shadow-sm
              hover:shadow-lg
              hover:-translate-y-1
              transition-all
              duration-300
              p-5
              flex
              items-center
              gap-4
            "
          >
            <div
              className="
                w-12
                h-12
                rounded-full
                bg-fuchsia-900/10
                flex
                items-center
                justify-center
                shrink-0
              "
            >
              <Phone className="w-6 h-6 text-fuchsia-900" />
            </div>

            <div>
              <h5 className="font-bold text-gray-800 text-sm mb-1">
                Phone
              </h5>

              <a
                href="tel:8608612728"
                className="
                  text-xs
                  text-gray-600
                  hover:text-fuchsia-900
                "
              >
                +91 8608612728
              </a>
            </div>
          </div>

          {/* GitHub */}
          <div
            className="
              bg-white
              rounded-2xl
              border
              border-gray-200
              shadow-sm
              hover:shadow-lg
              hover:-translate-y-1
              transition-all
              duration-300
              p-5
              flex
              items-center
              gap-4
            "
          >
            <div
              className="
                w-12
                h-12
                rounded-full
                bg-fuchsia-900/10
                flex
                items-center
                justify-center
                shrink-0
              "
            >
              <Github className="w-6 h-6 text-fuchsia-900" />
            </div>

            <div className="min-w-0">
              <h5 className="font-bold text-gray-800 text-sm mb-1">
                GitHub
              </h5>

              <a
                href="https://github.com/Deepavenkat0410"
                target="_blank"
                rel="noreferrer"
                className="
                  text-xs
                  text-gray-600
                  hover:text-fuchsia-900
                  break-all
                "
              >
                Deepavenkat0410
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};