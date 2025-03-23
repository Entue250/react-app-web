// import React, { useState, useEffect, useRef } from "react";
// import { Link } from "react-scroll";
// import {
//   FaRegMoon,
//   FaRegCommentDots,
//   FaDesktop,
//   FaBars,
//   FaTimes,
// } from "react-icons/fa";
// import { WiDaySunny } from "react-icons/wi";

// const Navbar = ({ darkMode, setDarkMode }) => {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const [activeSection, setActiveSection] = useState("home");
//   const navbarRef = useRef(null);

//   const sections = ["home", "about", "skills", "projects", "contact"];

//   const toggleDarkMode = () => {
//     setDarkMode(!darkMode);
//     document.documentElement.classList.toggle("dark");
//   };

//   const toggleMobileMenu = (e) => {
//     e.stopPropagation();
//     setMobileMenuOpen(!mobileMenuOpen);
//   };

//   // Close mobile menu when clicking outside
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (navbarRef.current && !navbarRef.current.contains(event.target)) {
//         setMobileMenuOpen(false);
//       }
//     };

//     if (mobileMenuOpen) {
//       document.addEventListener("mousedown", handleClickOutside);
//     }

//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, [mobileMenuOpen]);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 10) {
//         setScrolled(true);
//       } else {
//         setScrolled(false);
//       }

//       // Determine active section based on scroll position
//       const currentPosition = window.scrollY + 100; // Add offset for better detection

//       // Find which section is currently in view
//       for (let i = sections.length - 1; i >= 0; i--) {
//         const section = document.getElementById(sections[i]);
//         if (section) {
//           const sectionTop = section.offsetTop;
//           const sectionHeight = section.offsetHeight;

//           if (
//             currentPosition >= sectionTop &&
//             currentPosition <= sectionTop + sectionHeight
//           ) {
//             setActiveSection(sections[i]);
//             break;
//           }
//         }
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   return (
//     <div ref={navbarRef}>
//       <nav
//         className={`fixed top-0 left-0 w-full p-4 flex justify-between items-center shadow-md z-50 transition-all duration-300 ${
//           scrolled ? "py-4" : "py-4"
//         } ${darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-black"}`}
//       >
//         {/* Logo - Visible on all screen sizes */}
//         <Link
//           to="home"
//           smooth={true}
//           duration={500}
//           className="flex items-center border-2 border-blue-500 px-2 py-2 rounded-xl cursor-pointer hover:bg-blue-500 hover:text-white transition"
//         >
//           <FaDesktop className="text-xl mr-2" />
//           <span className="font-bold text-lg">EntueCode...</span>
//         </Link>

//         {/* Desktop Navigation Links - Hidden on mobile */}
//         <ul
//           className={`hidden md:flex space-x-6 border-2 px-8 py-3 rounded-xl shadow-sm ${
//             darkMode
//               ? "bg-gray-900 text-white border-gray-700"
//               : "bg-gray-100 text-black border-gray-400"
//           }`}
//         >
//           {sections.map((item) => (
//             <li key={item}>
//               <Link
//                 to={item}
//                 smooth={true}
//                 duration={500}
//                 className={`cursor-pointer px-5 py-2 rounded-lg transition ${
//                   activeSection === item
//                     ? darkMode
//                       ? "bg-blue-600 text-white font-medium"
//                       : "bg-blue-500 text-white font-medium"
//                     : darkMode
//                     ? "hover:bg-gray-700 hover:text-white"
//                     : "hover:bg-blue-500 hover:text-white"
//                 }`}
//               >
//                 {item.charAt(0).toUpperCase() + item.slice(1)}
//               </Link>
//             </li>
//           ))}
//         </ul>

//         {/* Right Icons - Desktop Version */}
//         <div
//           className={`hidden md:flex items-center border-2 px-6 py-2 rounded-xl shadow-sm space-x-6 ${
//             darkMode
//               ? "bg-gray-900 text-white border-gray-700"
//               : "bg-gray-100 text-black border-gray-400"
//           }`}
//         >
//           <span
//             className="cursor-pointer text-xl transition hover:bg-blue-500 hover:text-white p-1 rounded-lg"
//             onClick={toggleDarkMode}
//           >
//             {darkMode ? <WiDaySunny className="text-2xl" /> : <FaRegMoon />}
//           </span>
//           <div className="border-l h-5"></div>
//           <FaRegCommentDots className="text-3xl cursor-pointer transition hover:bg-blue-500 hover:text-white p-1 rounded-lg" />
//         </div>

//         {/* Mobile Controls */}
//         <div className="flex md:hidden items-center">
//           {/* Mobile Right Icons */}
//           <div
//             className={`flex items-center mr-2 border-2 px-3 py-2 rounded-xl shadow-sm ${
//               darkMode
//                 ? "bg-gray-900 text-white border-gray-700"
//                 : "bg-gray-100 text-black border-gray-400"
//             }`}
//           >
//             <span
//               className="cursor-pointer transition p-1 text-sm rounded-lg hover:bg-blue-500 hover:text-white"
//               onClick={toggleDarkMode}
//             >
//               {darkMode ? (
//                 <WiDaySunny className="text-xl" />
//               ) : (
//                 <FaRegMoon className="text-sm" />
//               )}
//             </span>
//             <div className="border-l h-4 mx-2"></div>
//             <FaRegCommentDots className="text-2xl cursor-pointer transition hover:bg-blue-500 hover:text-white p-1 rounded-lg" />
//           </div>

//           {/* Mobile Menu Toggle Button */}
//           <button
//             onClick={toggleMobileMenu}
//             className={`p-2 rounded-lg border-2 text-2xl focus:outline-none ${
//               darkMode
//                 ? "bg-gray-900 text-white border-gray-700"
//                 : "bg-gray-100 text-black border-gray-400"
//             } border border-gray-300 cursor-pointer`}
//           >
//             {mobileMenuOpen ? <FaTimes /> : <FaBars />}
//           </button>
//         </div>
//       </nav>

//       {/* Mobile Menu - Dropdown (Fixed position to avoid gap) */}
//       {mobileMenuOpen && (
//         <div
//           className={`fixed top-[72px] left-0 right-0 md:hidden ${
//             darkMode
//               ? "bg-gray-900 text-white border-gray-700"
//               : "bg-gray-100 text-black border-gray-400"
//           } border-2 mx-3 rounded-lg shadow-lg z-40`}
//         >
//           <ul className="py-2">
//             {sections.map((item) => (
//               <li key={item} className="py-1">
//                 <Link
//                   to={item}
//                   smooth={true}
//                   duration={500}
//                   className={`block px-4 py-2 transition ${
//                     activeSection === item
//                       ? darkMode
//                         ? "bg-gray-700 font-medium"
//                         : "bg-gray-200 font-medium"
//                       : darkMode
//                       ? "hover:bg-gray-700"
//                       : "hover:bg-gray-200"
//                   } cursor-pointer`}
//                   onClick={() => setMobileMenuOpen(false)}
//                 >
//                   {item.charAt(0).toUpperCase() + item.slice(1)}
//                   {activeSection === item && (
//                     <span className="ml-2 inline-block h-2 w-2 rounded-full bg-blue-500"></span>
//                   )}
//                 </Link>
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Navbar;

import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-scroll";
import {
  FaRegMoon,
  FaRegCommentDots,
  FaDesktop,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { WiDaySunny } from "react-icons/wi";

const Navbar = ({ darkMode, setDarkMode }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const navbarRef = useRef(null);

  const sections = ["home", "about", "skills", "projects", "contact"];

  // WhatsApp phone number and message
  // const phoneNumber = "+250788402197"; // Replace with your actual WhatsApp number
  // const message = "Hello! I'm reaching out from your website."; // Default message

  const phoneNumber = import.meta.env.VITE_WHATSAPP_NUMBER;
  const message = import.meta.env.VITE_WHATSAPP_MESSAGE;

  // const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  const toggleMobileMenu = (e) => {
    e.stopPropagation();
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setMobileMenuOpen(false);
      }
    };

    if (mobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Determine active section based on scroll position
      const currentPosition = window.scrollY + 100; // Add offset for better detection

      // Find which section is currently in view
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;

          if (
            currentPosition >= sectionTop &&
            currentPosition <= sectionTop + sectionHeight
          ) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div ref={navbarRef}>
      <nav
        className={`fixed top-0 left-0 w-full p-4 flex justify-between items-center shadow-md z-50 transition-all duration-300 ${
          scrolled ? "py-4" : "py-4"
        } ${darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-black"}`}
      >
        {/* Logo - Visible on all screen sizes */}
        <Link
          to="home"
          smooth={true}
          duration={500}
          className="flex items-center border-2 border-blue-500 px-2 py-2 rounded-xl cursor-pointer hover:bg-blue-500 hover:text-white transition"
        >
          <FaDesktop className="text-xl mr-2" />
          <span className="font-bold text-lg">EntueCode👑</span>
        </Link>

        {/* Desktop Navigation Links - Hidden on mobile */}
        <ul
          className={`hidden md:flex space-x-6 border-2 px-8 py-3 rounded-xl shadow-sm ${
            darkMode
              ? "bg-gray-900 text-white border-gray-700"
              : "bg-gray-100 text-black border-gray-400"
          }`}
        >
          {sections.map((item) => (
            <li key={item}>
              <Link
                to={item}
                smooth={true}
                duration={500}
                className={`cursor-pointer px-5 py-2 rounded-lg transition ${
                  activeSection === item
                    ? darkMode
                      ? "bg-blue-600 text-white font-medium"
                      : "bg-blue-500 text-white font-medium"
                    : darkMode
                    ? "hover:bg-gray-700 hover:text-white"
                    : "hover:bg-blue-500 hover:text-white"
                }`}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right Icons - Desktop Version */}
        <div
          className={`hidden md:flex items-center border-2 px-6 py-2 rounded-xl shadow-sm space-x-6 ${
            darkMode
              ? "bg-gray-900 text-white border-gray-700"
              : "bg-gray-100 text-black border-gray-400"
          }`}
        >
          <span
            className="cursor-pointer text-xl transition hover:bg-blue-500 hover:text-white p-1 rounded-lg"
            onClick={toggleDarkMode}
          >
            {darkMode ? <WiDaySunny className="text-2xl" /> : <FaRegMoon />}
          </span>
          <div className="border-l h-5"></div>
          <FaRegCommentDots
            className="text-3xl cursor-pointer transition hover:bg-blue-500 hover:text-white p-1 rounded-lg"
            onClick={handleWhatsAppClick}
          />
        </div>

        {/* Mobile Controls */}
        <div className="flex md:hidden items-center">
          {/* Mobile Right Icons */}
          <div
            className={`flex items-center mr-2 border-2 px-3 py-2 rounded-xl shadow-sm ${
              darkMode
                ? "bg-gray-900 text-white border-gray-700"
                : "bg-gray-100 text-black border-gray-400"
            }`}
          >
            <span
              className="cursor-pointer transition p-1 text-sm rounded-lg hover:bg-blue-500 hover:text-white"
              onClick={toggleDarkMode}
            >
              {darkMode ? (
                <WiDaySunny className="text-xl" />
              ) : (
                <FaRegMoon className="text-sm" />
              )}
            </span>
            <div className="border-l h-4 mx-2"></div>
            <FaRegCommentDots
              className="text-2xl cursor-pointer transition hover:bg-blue-500 hover:text-white p-1 rounded-lg"
              onClick={handleWhatsAppClick}
            />
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={toggleMobileMenu}
            className={`p-2 rounded-lg border-2 text-2xl focus:outline-none ${
              darkMode
                ? "bg-gray-900 text-white border-gray-700"
                : "bg-gray-100 text-black border-gray-400"
            } border border-gray-300 cursor-pointer`}
          >
            {mobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu - Dropdown (Fixed position to avoid gap) */}
      {mobileMenuOpen && (
        <div
          className={`fixed top-[72px] left-0 right-0 md:hidden ${
            darkMode
              ? "bg-gray-900 text-white border-gray-700"
              : "bg-gray-100 text-black border-gray-400"
          } border-2 mx-3 rounded-lg shadow-lg z-40`}
        >
          <ul className="py-2">
            {sections.map((item) => (
              <li key={item} className="py-1">
                <Link
                  to={item}
                  smooth={true}
                  duration={500}
                  className={`block px-4 py-2 transition ${
                    activeSection === item
                      ? darkMode
                        ? "bg-gray-700 font-medium"
                        : "bg-gray-200 font-medium"
                      : darkMode
                      ? "hover:bg-gray-700"
                      : "hover:bg-gray-200"
                  } cursor-pointer`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                  {activeSection === item && (
                    <span className="ml-2 inline-block h-2 w-2 rounded-full bg-blue-500"></span>
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
