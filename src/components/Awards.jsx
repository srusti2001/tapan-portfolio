import React from "react";
import { awards } from "../data";
import { FiExternalLink } from "react-icons/fi";
import { motion } from "framer-motion";

const cardVariants = {
  offscreen: { y: 30, opacity: 0 },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", bounce: 0.2, duration: 0.6 }
  }
};

const Awards = () => (
  <section className="py-16 px-6 sm:px-12 bg-gray-50">
    <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10">Awards</h2>

    <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {awards.map((award, i) => (
        <motion.div
          key={i}
          className="bg-white rounded-xl shadow-md p-5 flex flex-col justify-between hover:shadow-lg transition-shadow"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.3 }}
          variants={cardVariants}
        >
          {/* Logo and Title */}
          <div className="flex items-center gap-3 mb-3">
            {award.logo && (
              <img
                src={award.logo}
                alt={`${award.organization} Logo`}
                className="w-10 h-10 object-contain"
              />
            )}
            <div>
              <h3 className="text-lg font-semibold">{award.title}</h3>
              <p className="text-sm text-gray-500">{award.organization}</p>
            </div>
          </div>

          {/* Description */}
          <p className="text-gray-700 mb-3">{award.description}</p>
          <p className="text-sm text-gray-400 mb-3">{award.date}</p>

          {/* View Award Link */}
          {award.link && (
            <a
              href={award.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-auto text-blue-600 font-medium hover:underline"
            >
              View Award <FiExternalLink />
            </a>
          )}
        </motion.div>
      ))}
    </div>
  </section>
);

export default Awards;
