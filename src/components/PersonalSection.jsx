import React from "react";
import { personal } from "../data";
import { FaVolleyballBall, FaBook, FaLaptopCode, FaPlane } from "react-icons/fa";
import { motion } from "framer-motion";

// Map icons to react-icons
const iconMap = {
  FaVolleyballBall: FaVolleyballBall,
  FaBook: FaBook,
  FaLaptopCode: FaLaptopCode,
  FaPlane: FaPlane
};

// Map icons to color accents
const colorMap = {
  FaVolleyballBall: "bg-orange-100 text-orange-600",
  FaBook: "bg-blue-100 text-blue-600",
  FaLaptopCode: "bg-green-100 text-green-600",
  FaPlane: "bg-purple-100 text-purple-600"
};

// Animation variants
const cardVariants = {
  offscreen: { y: 30, opacity: 0 },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", bounce: 0.2, duration: 0.6 }
  }
};

const PersonalSection = () => (
  <section className="py-16 px-6 sm:px-12 bg-gradient-to-r from-indigo-50 to-blue-50">
    <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10">Personal Interests</h2>

    <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {personal.hobbies.map((hobby, i) => {
        const Icon = iconMap[hobby.icon];
        return (
          <motion.div
            key={i}
            className={`rounded-xl p-6 flex flex-col items-center text-center shadow-md cursor-pointer ${colorMap[hobby.icon]} transition-shadow`}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariants}
            whileHover={{ scale: 1.08, rotate: 2, boxShadow: "0 10px 20px rgba(0,0,0,0.2)" }}
          >
            {Icon && <Icon className="text-4xl mb-3" />}
            <h3 className="text-lg font-semibold mb-1">{hobby.title}</h3>
            <p className="text-gray-700 text-sm">{hobby.detail}</p>
          </motion.div>
        );
      })}
    </div>

    {/* Fun Fact */}
    <motion.div
      className="mt-10 text-center text-gray-600 italic text-sm"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {personal.funFact}
    </motion.div>
  </section>
);

export default PersonalSection;
