import React, { useState } from "react";

const Skills = ({ darkMode }) => {
  const [activeTab, setActiveTab] = useState("Frontend");

  const skills = {
    Frontend: [
      { name: "HTML", image: "/src/assets/HTML.jpeg" },
      { name: "CSS", image: "/src/assets/CSS.jpeg" },
      { name: "JavaScript", image: "/src/assets/JavaScript.jpeg" },
      { name: "React.js", image: "/src/assets/Reactjs.png" },
    ],
    Backend: [
      { name: "Node.js", image: "/src/assets/Node.png" },
      { name: "Express.js", image: "/src/assets/Express.jpeg" },
      { name: "MongoDB", image: "/src/assets/MongoDB.png" },
      { name: "Firebase", image: "/src/assets/FireBase.png" },
      { name: "Java", image: "/src/assets/Java.jpeg" },
      { name: "Python", image: "/src/assets/Python.jpeg" },
      { name: "MySQL", image: "/src/assets/MySQL.png" },
    ],
    Technology: [
      { name: "Git", image: "/src/assets/Git.png" },
      { name: "GitHub", image: "/src/assets/GitHub.png" },
      { name: "Docker", image: "/src/assets/docker.jpeg" },
      { name: "AWS", image: "/src/assets/AWS.png" },
      { name: "Linux", image: "/src/assets/Linux.jpeg" },
    ],
  };

  return (
    <div
      className={`pt-16 transition-all duration-300 ${
        darkMode ? "bg-gray-900" : "bg-white"
      }`}
    >
      <section
        id="skills"
        className={`py-20 transition-all duration-300 ${
          darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-black"
        }`}
      >
        <div className="w-full px-4 sm:px-6 lg:px-8 transition-all">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-6 mt-10">My Skills</h2>
            <p
              className={`mb-8 text-2xl ${
                darkMode ? "text-gray-300" : "text-gray-600"
              }`}
            >
              Specialized in full-stack development
            </p>
          </div>

          {/* Tabs */}
          <div className="flex flex-wrap justify-center mb-8 gap-4">
            {Object.keys(skills).map((tab, index) => (
              <button
                key={tab}
                className={`px-6 py-2 text-lg font-semibold rounded-md transition-all cursor-pointer ${
                  activeTab === tab
                    ? "bg-blue-600 text-white"
                    : darkMode
                    ? "bg-gray-800 text-gray-300 hover:bg-gray-700"
                    : "bg-gray-300 text-black hover:bg-gray-400"
                } ${index === 2 ? "mt-2 sm:mt-0" : ""}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Skills Content */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {skills[activeTab].map((skill, index) => (
              <div
                key={index}
                className={`p-6 rounded-lg shadow-lg flex flex-col items-center transition-transform hover:-translate-y-2 ${
                  darkMode ? "bg-gray-800" : "bg-white"
                }`}
              >
                <div
                  className={`p-4 rounded-lg flex items-center justify-center ${
                    darkMode ? "bg-gray-900" : "bg-gray-100"
                  }`}
                >
                  <img
                    src={skill.image}
                    alt={skill.name}
                    className="h-16 w-16 object-contain"
                  />
                </div>
                <span
                  className={`text-xl font-semibold mt-2 ${
                    darkMode ? "text-white" : "text-black"
                  }`}
                >
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills;
