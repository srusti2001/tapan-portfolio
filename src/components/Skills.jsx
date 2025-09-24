import React from "react";
import { skills } from "../data";

const Skills = () => (
  <section className="py-16 px-6 sm:px-12 bg-white">
    <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10">Skills & Expertise</h2>

    <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      
      {/* Languages */}
      <div className="bg-gray-50 rounded-2xl shadow-md p-6 hover:shadow-xl transition-shadow">
        <h3 className="font-semibold text-xl mb-4 text-blue-600">Languages</h3>
        <div className="flex flex-wrap gap-3">
          {skills.languages.map((lang, i) => (
            <span
              key={i}
              className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium hover:bg-blue-200 transition-colors"
            >
              {lang}
            </span>
          ))}
        </div>
      </div>

      {/* Tools */}
      <div className="bg-gray-50 rounded-2xl shadow-md p-6 hover:shadow-xl transition-shadow">
        <h3 className="font-semibold text-xl mb-4 text-green-600">Tools & Technologies</h3>
        <div className="flex flex-wrap gap-3">
          {skills.tools.map((tool, i) => (
            <span
              key={i}
              className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium hover:bg-green-200 transition-colors"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>

      {/* Expertise */}
      <div className="bg-gray-50 rounded-2xl shadow-md p-6 hover:shadow-xl transition-shadow">
        <h3 className="font-semibold text-xl mb-4 text-purple-600">Professional Expertise</h3>
        <div className="flex flex-wrap gap-3">
          {skills.softSkills.map((exp, i) => (
            <span
              key={i}
              className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium hover:bg-purple-200 transition-colors"
            >
              {exp}
            </span>
          ))}
        </div>
      </div>

    </div>
  </section>
);

export default Skills;
