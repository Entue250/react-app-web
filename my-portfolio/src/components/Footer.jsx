import React, { useState } from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = ({ darkMode }) => {
  const [hoveredIcon, setHoveredIcon] = useState(null);

  const socialLinks = [
    {
      id: "github",
      icon: <FaGithub />,
      url: import.meta.env.VITE_GITHUB_URL,
      label: "GitHub",
      hoverColor: "bg-gray-800",
      textColor: "text-white",
    },
    {
      id: "linkedin",
      icon: <FaLinkedin />,
      url: import.meta.env.VITE_LINKEDIN_URL,
      label: "LinkedIn",
      hoverColor: "bg-blue-600",
      textColor: "text-white",
    },
    {
      id: "twitter",
      icon: <FaXTwitter />,
      url: import.meta.env.VITE_TWITTER_URL,
      label: "Twitter",
      hoverColor: "bg-sky-500",
      textColor: "text-white",
    },
    {
      id: "instagram",
      icon: <FaInstagram />,
      url: import.meta.env.VITE_INSTAGRAM_URL,
      label: "Instagram",
      hoverColor: "bg-pink-600",
      textColor: "text-white",
    },
    {
      id: "email",
      icon: <FaEnvelope />,
      url: "mailto:entue@gmail.com",
      label: "Email",
      hoverColor: "bg-gray-600",
      textColor: "text-white",
    },
  ];

  return (
    <div
      className={`pt-16 transition-all duration-300 ${
        darkMode ? "bg-gray-900" : "bg-white"
      }`}
    >
      <footer
        className={`transition-all duration-300 ${
          darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-700"
        } py-10`}
      >
        <div className="container mx-auto text-center flex flex-col items-center">
          {/* Desktop Social Icons */}
          <div className="hidden md:flex justify-center space-x-8 md:space-x-12 mb-8">
            {socialLinks.map((social) => (
              <div
                key={social.id}
                className="relative group"
                onMouseEnter={() => setHoveredIcon(social.id)}
                onMouseLeave={() => setHoveredIcon(null)}
              >
                <a
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className={`text-2xl transition-all duration-300 flex items-center justify-center cursor-pointer ${
                    hoveredIcon === social.id
                      ? `${social.textColor}`
                      : darkMode
                      ? "text-gray-400"
                      : "text-gray-600"
                  }`}
                >
                  <div
                    className={`p-2 rounded-full transition-all duration-300 transform ${
                      hoveredIcon === social.id
                        ? `${social.hoverColor} scale-110`
                        : "scale-100"
                    }`}
                  >
                    {social.icon}
                  </div>
                </a>

                {/* Tooltip */}
                {hoveredIcon === social.id && (
                  <div className="absolute top-full mt-2 left-1/2 transform -translate-x-1/2 px-2 py-1 text-xs rounded bg-gray-800 text-white whitespace-nowrap z-10">
                    {social.label}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Social Icons in Grid - with same hover effects as desktop */}
          <div className="grid grid-cols-3 gap-x-0 gap-y-8 mb-8 px-2 w-full md:hidden">
            {socialLinks.map((social) => (
              <div
                key={social.id}
                className="relative group"
                onMouseEnter={() => setHoveredIcon(social.id)}
                onMouseLeave={() => setHoveredIcon(null)}
              >
                <a
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className={`text-xl transition-all duration-300 flex items-center justify-center cursor-pointer ${
                    hoveredIcon === social.id
                      ? `${social.textColor}`
                      : darkMode
                      ? "text-gray-400"
                      : "text-gray-600"
                  }`}
                >
                  <div
                    className={`p-2 rounded-full transition-all duration-300 transform ${
                      hoveredIcon === social.id
                        ? `${social.hoverColor} scale-110`
                        : "scale-100"
                    }`}
                  >
                    {social.icon}
                  </div>
                </a>

                {/* Mobile Tooltip */}
                {hoveredIcon === social.id && (
                  <div className="absolute top-full mt-2 left-1/2 transform -translate-x-1/2 px-2 py-1 text-xs rounded bg-gray-800 text-white whitespace-nowrap z-10">
                    {social.label}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Copyright Text & Tagline - Responsive */}
          <div className="text-center w-full px-4 sm:px-6 max-w-md mx-auto">
            <p
              className={`text-sm sm:text-md mb-2 ${
                darkMode ? "text-gray-300" : "text-gray-600"
              }`}
            >
              © 2025 Eduard NIYOMUGABO. All rights reserved.
            </p>

            <p
              className={`text-xs sm:text-sm ${
                darkMode ? "text-gray-400" : "text-gray-600"
              }`}
            >
              Built with passion and modern technologies
            </p>
          </div>
        </div>
      </footer>

      {/* Fix for white space at bottom - extend dark mode to full page */}
      <div
        className={`w-full h-screen fixed bottom-0 -z-10 ${
          darkMode ? "bg-gray-900" : "bg-white"
        }`}
      ></div>
    </div>
  );
};

export default Footer;
