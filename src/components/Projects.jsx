import React, { useState } from "react";
import { projects } from "../data";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

const Projects = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section className="py-16 px-6 sm:px-12 bg-gray-100">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10">
        Projects
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, i) => {
          const Icon = project.icon;
          const isExpanded = expandedIndex === i;

          return (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow"
            >
              {/* Project Image */}
              {project.image && (
                <div className="h-40 sm:h-48 w-full overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                  />
                </div>
              )}

              {/* Title + Arrow */}
              <div
                className="flex items-center justify-between px-6 py-4 cursor-pointer"
                onClick={() => toggleExpand(i)}
              >
                <h3 className="text-xl font-semibold text-blue-600">
                  {project.title}
                </h3>
                {isExpanded ? (
                  <ChevronUp className="text-gray-600" />
                ) : (
                  <ChevronDown className="text-gray-600" />
                )}
              </div>

              {/* Expandable Content */}
              <AnimatePresence>
                {isExpanded && (
                  <motion.div
                    key="content"
                    className="px-6 pb-6 flex flex-col gap-4"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Icon */}
                    {Icon && <Icon className="text-blue-500 text-2xl" />}

                    {/* Description */}
                    <p className="text-gray-700">{project.description}</p>

                    {/* Tools */}
                    <div className="flex flex-wrap gap-2">
                      {project.tools.map((tech, idx) => (
                        <span
                          key={idx}
                          className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* View Project */}
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-blue-600 text-white rounded-md px-4 py-2 text-sm font-medium text-center hover:bg-blue-700 transition-colors"
                      >
                        View Project
                      </a>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
