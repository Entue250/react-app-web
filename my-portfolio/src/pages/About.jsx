import React from "react";
import { FaCode, FaServer, FaCloud } from "react-icons/fa";
import { motion } from "framer-motion";

const About = ({ darkMode }) => {
  return (
    <div
      className={`pt-16 transition-all duration-300 ${
        darkMode ? "bg-gray-900" : "bg-white"
      }`}
    >
      <section
        id="about"
        className={`pt-16 pb-20 transition-colors duration-300 ${
          darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-black"
        }`}
      >
        <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          <motion.h2
            className="text-4xl font-bold mb-10 mt-10 text-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            About Me
          </motion.h2>

          {/* Skill Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                icon: (
                  <FaCode className="text-5xl text-blue-500 mx-auto mb-4" />
                ),
                title: "Frontend Development",
                description:
                  "Building responsive web applications using React, Next.js, and modern CSS frameworks.",
              },
              {
                icon: (
                  <FaServer className="text-5xl text-blue-500 mx-auto mb-4" />
                ),
                title: "Backend Development",
                description:
                  "Creating robust server-side applications with Node.js, Express.js, Java, and Python.",
              },
              {
                icon: (
                  <FaCloud className="text-5xl text-blue-500 mx-auto mb-4" />
                ),
                title: "DevOps & Cloud",
                description:
                  "Deploying and managing applications using AWS and Linux systems.",
              },
            ].map((skill, index) => (
              <motion.div
                key={index}
                className={`p-5 rounded-xl shadow-lg flex flex-col items-center text-center transition ${
                  darkMode ? "bg-gray-800" : "bg-white"
                }`}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ scale: 1.05 }}
              >
                {skill.icon}
                <h3 className="text-lg md:text-xl font-semibold mb-2">
                  {skill.title}
                </h3>
                <p
                  className={`text-lg ${
                    darkMode ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  {skill.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Personal Introduction Section */}
          <motion.div
            className={`mt-12 p-10 rounded-xl shadow-lg w-full mx-auto ${
              darkMode ? "bg-gray-800 text-white" : "bg-white text-black"
            }`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <p
              className={`text-lg ${
                darkMode ? "text-gray-300" : "text-gray-600"
              }`}
            >
              I am a passionate full-stack developer with expertise in creating
              dynamic, high-quality web applications. My journey in tech has
              allowed me to build user-friendly frontends using modern
              frameworks and develop scalable, secure backends tailored to meet
              business needs.
            </p>
            <p
              className={`text-lg mt-4 ${
                darkMode ? "text-gray-300" : "text-gray-600"
              }`}
            >
              With a strong focus on cloud technologies and DevOps, I ensure
              seamless deployment and management of projects across diverse
              environments. Collaboration, problem-solving, and staying updated
              with the latest trends in software development are key drivers of
              my professional growth. My goal is to deliver solutions that work
              efficiently and bring value to users and organizations alike.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
