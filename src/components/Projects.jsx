import React from "react";
import { projects } from "../data";
import { motion } from "framer-motion";

const cardVariants = {
  offscreen: { y: 50, opacity: 0 },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", bounce: 0.2, duration: 0.8 }
  }
};

const Projects = () => (
  <section className="py-16 px-6 sm:px-12 bg-gray-100">
    <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10">Projects</h2>

    <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project, i) => {
        const Icon = project.icon; // Get icon component
        return (
          <motion.div
            key={i}
            className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition-shadow flex flex-col cursor-pointer"
            whileHover={{ scale: 1.05 }}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariants}
          >
            <div className="flex flex-col flex-1">
              {/* Icon */}
              {Icon && <Icon className="text-blue-500 text-3xl mb-4" />}

              <h3 className="text-xl sm:text-2xl font-semibold mb-2 text-blue-600">
                {project.title}
              </h3>
              <p className="text-gray-700 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tools.map((tech, idx) => (
                  <span
                    key={idx}
                    className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium transition-transform hover:scale-105"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  </section>
);

export default Projects;
