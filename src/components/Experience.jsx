import React, { useState } from "react";
import { experience } from "../data";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const Experience = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 px-6 sm:px-12 bg-gray-50">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10">Experience</h2>
      <div className="max-w-5xl mx-auto space-y-4">
        {experience.map((exp, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl shadow-md p-4 sm:p-6 hover:shadow-xl transition-shadow"
          >
            {/* Header */}
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggle(i)}
            >
              <div>
                <h3 className="text-xl sm:text-2xl font-semibold">{exp.role}</h3>
                <p className="text-gray-500 text-sm sm:text-base">
                  {exp.company} | {exp.duration}
                </p>
              </div>
              <div className="text-blue-600 text-lg sm:text-xl">
                {openIndex === i ? <FaChevronUp /> : <FaChevronDown />}
              </div>
            </div>

            {/* Collapsible content */}
            <AnimatePresence>
              {openIndex === i && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden mt-4 text-gray-700"
                >
                  {/* Project Brief */}
                  <p className="mb-2">
                    <span className="font-semibold">Project Brief:</span> {exp.projectBrief}
                  </p>
                  <ul className="list-disc list-inside space-y-1">
                    {exp.responsibilities.map((resp, idx) => (
                      <li key={idx}>{resp}</li>
                    ))}
                  </ul>
                  {exp.result && (
                    <p className="mt-2 text-green-600 font-medium">
                      Result: {exp.result}
                    </p>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
