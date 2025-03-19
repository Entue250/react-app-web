import React from "react";
import { FaCode, FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "E-commerce Platform",
    description:
      "Full-stack e-commerce platform built with React, Node.js, and MongoDB.",
    image: "/src/assets/ecommerce.png",
    technologies: [
      "React JS",
      "TypeScript",
      "Tailwind CSS",
      "PostgreSQL",
      "Express JS",
    ],
    demoLink: "#",
    codeLink: "https://github.com/Entue250",
  },
  {
    title: "Issue Tracker App",
    description:
      "An issue tracking application for tracking, managing, and resolving issues efficiently with real-time collaboration, notifications, and workflow automation.",
    image: "/src/assets/issueTracker.jpg",
    technologies: ["Next.js", "Tailwind CSS", "Radix UI", "Prisma"],
    demoLink: "#",
    codeLink: "https://github.com/Entue250",
  },
  {
    title: "Video Chat App",
    description:
      "Connect instantly with seamless video calls, messaging, and secure communication anytime, anywhere.",
    image: "/src/assets/videoChat.jpeg",
    technologies: ["React JS", "Peer JS", "Material UI"],
    demoLink: "#",
    codeLink: "https://github.com/Entue250",
  },
  {
    title: "Movie Hub Platform",
    description:
      "Stream, discover, and review movies with personalized recommendations, high-quality playback, and an engaging user experience.",
    image: "/src/assets/movie.jpg",
    technologies: ["React Native", "TypeScript", "Tailwind CSS", "Appwrite"],
    demoLink: "#",
    codeLink: "https://github.com/Entue250",
  },
  {
    title: "Multi-Cart Restaurant App",
    description:
      "Restaurant app which helps to order from multiple restaurants in one app with seamless browsing, secure payments, and real-time tracking.",
    image: "/src/assets/restaurant.jpeg",
    technologies: ["React Native", "TypeScript", "MongoDB", "Redux"],
    demoLink: "#",
    codeLink: "https://github.com/Entue250",
  },
  {
    title: "Polling System",
    description:
      "A digital election platform for conducting surveys effortlessly with customizable polls, secure voting, real-time results, and detailed analytics.",
    image: "/src/assets/polling.png",
    technologies: ["React JS", "MongoDB", "Tailwind CSS", "Express.js"],
    demoLink: "#",
    codeLink: "https://github.com/Entue250",
  },
];

const Projects = ({ darkMode }) => {
  return (
    <div
      className={`pt-16 transition-all duration-300 ${
        darkMode ? "bg-gray-900" : "bg-white"
      }`}
    >
      <div
        id="projects"
        className={
          darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"
        }
      >
        <div className="w-full px-4 sm:px-6 lg:px-8 transition-all py-20">
          <div className="flex flex-col items-center mb-12">
            <div className="flex items-center justify-center mb-3">
              <FaCode className="text-5xl text-blue-500 mx-auto mt-10 mr-3" />
              <h2 className="text-4xl font-bold mt-10">My Projects</h2>
            </div>
            <p
              className={
                darkMode
                  ? "text-xl text-center text-gray-300"
                  : "text-xl text-center text-gray-800"
              }
            >
              Explore my latest projects showcasing my expertise in full-stack
              development
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`${
                  darkMode ? "bg-gray-800" : "bg-white"
                } rounded-xl shadow-lg overflow-hidden h-full flex flex-col`}
              >
                <div className="relative group overflow-hidden h-48">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-65 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/60">
                    <a
                      href={project.codeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white text-3xl mx-3 hover:text-blue-400 transition-colors"
                    >
                      <FaGithub />
                    </a>
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white text-3xl mx-3 hover:text-blue-400 transition-colors"
                    >
                      <FaExternalLinkAlt />
                    </a>
                  </div>
                </div>

                <div
                  className={`p-6 flex flex-col flex-grow ${
                    darkMode ? "bg-gray-800" : "bg-white"
                  }`}
                >
                  <h3 className="text-2xl font-semibold mb-3">
                    {project.title}
                  </h3>
                  <p
                    className={`${
                      darkMode ? "text-gray-300" : "text-gray-600"
                    } mb-4 flex-grow`}
                  >
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className={`${
                          darkMode
                            ? "bg-gray-600 text-blue-100"
                            : "bg-gray-100 text-blue-500"
                        } text-xs px-3 py-1 rounded-full`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex justify-between gap-4 mt-auto">
                    <a
                      href={project.codeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`px-6 py-3 rounded-lg flex-1 text-center font-medium border transition-colors flex justify-center items-center gap-2 ${
                        darkMode
                          ? "bg-gray-700 text-white border-gray-600 hover:bg-blue-500 hover:text-white hover:border-blue-500"
                          : "bg-white text-blue-500 border-blue-500 hover:bg-blue-500 hover:text-white hover:border-blue-500"
                      }`}
                    >
                      <FaGithub className="text-lg" /> Code
                    </a>
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-blue-500 text-white px-6 py-3 rounded-lg flex-1 text-center font-medium hover:bg-blue-600 transition-colors flex justify-center items-center gap-2"
                    >
                      <FaExternalLinkAlt className="text-lg" /> Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
