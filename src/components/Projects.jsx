import React from "react";
import { projects } from "../data";
import { motion } from "framer-motion";

const containerVariants = {
  offscreen: {},
  onscreen: {
    transition: {
      staggerChildren: 0.2, // Delay between each card
    },
  },
};

const cardVariants = {
  offscreen: { y: 50, opacity: 0 },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", bounce: 0.2, duration: 0.8 },
  },
};

const Projects = () => (
  <section className="py-16 px-6 sm:px-12 bg-gray-100">
    <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10">Projects</h2>

    <motion.div
      className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      {projects.map((project, i) => {
        const Icon = project.icon;
        return (
          <motion.div
            key={i}
            className="relative bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition-shadow flex flex-col"
            variants={cardVariants}
            whileHover={{ scale: 1.03 }}
          >
            {/* Ribbon for New Projects */}
            {project.isNew && (
              <span className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full transform rotate-12 shadow-lg">
                NEW
              </span>
            )}

            <div className="flex flex-col flex-1">
              {/* Icon */}
              {Icon && <Icon className="text-blue-500 text-3xl mb-4" />}

              <h3 className="text-xl sm:text-2xl font-semibold mb-2 text-blue-600">
                {project.title}
              </h3>

              <p className="text-gray-700 mb-4">{project.description}</p>

              {/* Tools Tags with Animated Hover */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tools.map((tech, idx) => (
                  <motion.span
                    key={idx}
                    className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium cursor-pointer"
                    whileHover={{ scale: 1.2, backgroundColor: "#3b82f6", color: "#fff" }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>

              {/* View Project Button */}
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto inline-block bg-blue-600 text-white rounded-md px-4 py-2 text-sm font-medium text-center hover:bg-blue-700 transition-colors"
                >
                  View Project
                </a>
              )}
            </div>
          </motion.div>
        );
      })}
    </motion.div>
  </section>
);

export default Projects;
