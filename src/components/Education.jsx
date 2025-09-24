
import React from "react";
import { education } from "../data";

const Education = () => (
  <section className="py-12 sm:py-16 px-6 sm:px-12">
    <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8">Education</h2>
    <div className="max-w-4xl mx-auto space-y-4">
      {education.map((edu, i) => (
        <div key={i} className="bg-white shadow-md rounded-lg p-4 sm:p-6 hover:shadow-lg">
          <h3 className="font-semibold text-lg sm:text-xl">{edu.degree}</h3>
          <p className="text-gray-500">{edu.institution} | {edu.duration}</p>
          <p className="text-gray-700">Grade: {edu.grade}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Education;
