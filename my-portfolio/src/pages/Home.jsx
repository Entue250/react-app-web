// import React from "react";
// import { motion } from "framer-motion";
// import { FaRegFileAlt, FaPaperPlane } from "react-icons/fa";
// import profileImage from "/src/assets/AIT.jpg";

// const Home = ({ darkMode }) => {
//   return (
//     <section
//       id="home"
//       className={`min-h-screen flex items-center justify-center px-10 lg:px-20 pt-28 transition-colors duration-300 ${
//         darkMode ? "bg-gray-900 text-white" : "bg-white text-black"
//       }`}
//     >
//       <div className="flex flex-col lg:flex-row items-center w-full max-w-6xl">
//         {/* Left Side (Text Content) */}
//         <div className="lg:w-1/2 space-y-4">
//           <motion.h2
//             className="text-4xl md:text-5xl font-bold text-blue-500"
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5 }}
//           >
//             Hi there 👋, I'm
//           </motion.h2>

//           <motion.h1
//             className="text-5xl md:text-6xl font-extrabold"
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.7 }}
//           >
//             Eduard NIYOMUGABO
//           </motion.h1>

//           <motion.h3
//             className="text-2xl font-semibold"
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.9 }}
//           >
//             Full Stack Developer
//           </motion.h3>

//           <motion.p
//             className={`text-lg ${
//               darkMode ? "text-gray-300" : "text-gray-600"
//             }`}
//             initial={{ opacity: 0, y: -10 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1 }}
//           >
//             I'm a passionate full-stack developer specializing in building
//             exceptional digital experiences. With expertise in React, Node.js,
//             and cloud technologies, I create scalable solutions that solve
//             real-world problems.
//           </motion.p>

//           {/* Buttons */}
//           <motion.div
//             className="flex space-x-4 mt-4"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 1.2 }}
//           >
//             <a
//               href="https://your-google-drive-resume-link"
//               className="flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition duration-300 hover:scale-110"
//             >
//               <FaRegFileAlt className="mr-2" /> Resume
//             </a>
//             <a
//               href="#contact"
//               className="flex items-center border-2 border-blue-500 text-blue-500 px-6 py-3 rounded-lg hover:bg-blue-500 hover:text-white transition duration-300 hover:scale-110"
//             >
//               <FaPaperPlane className="mr-2" /> Contact
//             </a>
//           </motion.div>
//         </div>

//         {/* Right Side (Image) */}
//         <motion.div
//           className="lg:w-1/2 flex justify-center mt-10 lg:mt-0 relative z-10"
//           initial={{ opacity: 0, x: 50 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 1.5 }}
//         >
//           <div
//             className={`relative w-72 h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden shadow-xl border-4 ${
//               darkMode ? "border-gray-600" : "border-blue-500"
//             } z-0`}
//           >
//             <img
//               src={profileImage}
//               alt="Eduard NIYOMUGABO"
//               className="w-full h-full object-cover"
//             />
//           </div>
//           <span
//             className={`absolute -bottom-6 right-6 w-10 h-10 rounded-full ${
//               darkMode ? "bg-gray-600" : "bg-blue-500"
//             } z-0`}
//           ></span>
//           <span
//             className={`absolute -top-6 left-6 w-10 h-10 rounded-full ${
//               darkMode ? "bg-gray-600" : "bg-blue-500"
//             } z-0`}
//           ></span>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default Home;

import React from "react";
import { motion } from "framer-motion";
import { FaRegFileAlt, FaPaperPlane } from "react-icons/fa";
import profileImage from "/src/assets/AIT.jpg";

const Home = ({ darkMode }) => {
  return (
    <section
      id="home"
      className={`min-h-screen flex items-center justify-center px-6 sm:px-10 lg:px-16 xl:px-24 pt-28 transition-colors duration-300 ${
        darkMode ? "bg-gray-900 text-white" : "bg-white text-black"
      }`}
    >
      <div className="flex flex-col lg:flex-row items-center w-full max-w-7xl">
        {/* Left Side (Text Content) */}
        <div className="lg:w-1/2 text-center lg:text-left space-y-6">
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-500"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Hi there 👋, I'm
          </motion.h2>

          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            Eduard NIYOMUGABO
          </motion.h1>

          <motion.h3
            className="text-xl sm:text-2xl font-semibold"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
          >
            Full Stack Developer
          </motion.h3>

          <motion.p
            className={`text-base sm:text-lg ${
              darkMode ? "text-gray-300" : "text-gray-600"
            }`}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            I'm a passionate full-stack developer specializing in building
            exceptional digital experiences. With expertise in React, Node.js,
            and cloud technologies, I create scalable solutions that solve
            real-world problems.
          </motion.p>

          {/* Buttons */}
          <motion.div
            className="flex flex-wrap justify-center lg:justify-start gap-4 mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
          >
            <a
              href="https://your-google-drive-resume-link"
              className="flex items-center bg-blue-600 text-white px-5 sm:px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition duration-300 hover:scale-105"
            >
              <FaRegFileAlt className="mr-2" /> Resume
            </a>
            <a
              href="#contact"
              className="flex items-center border-2 border-blue-500 text-blue-500 px-5 sm:px-6 py-3 rounded-lg hover:bg-blue-500 hover:text-white transition duration-300 hover:scale-105"
            >
              <FaPaperPlane className="mr-2" /> Contact
            </a>
          </motion.div>
        </div>

        {/* Right Side (Image) */}
        <motion.div
          className="lg:w-1/2 flex justify-center mt-10 lg:mt-0 relative"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5 }}
        >
          <div
            className={`relative w-60 h-60 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-xl border-4 ${
              darkMode ? "border-gray-600" : "border-blue-500"
            }`}
          >
            <img
              src={profileImage}
              alt="Eduard NIYOMUGABO"
              className="w-full h-full object-cover"
            />
          </div>
          <span
            className={`absolute -bottom-6 right-6 w-8 h-8 sm:w-10 sm:h-10 rounded-full ${
              darkMode ? "bg-gray-600" : "bg-blue-500"
            }`}
          ></span>
          <span
            className={`absolute -top-6 left-6 w-8 h-8 sm:w-10 sm:h-10 rounded-full ${
              darkMode ? "bg-gray-600" : "bg-blue-500"
            }`}
          ></span>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
