import React from "react";
import { certificates } from "../data";
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

const Certificates = () => (
  <section className="py-16 px-6 sm:px-12 bg-white">
    <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10">Certificates</h2>

    <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {certificates.map((cert, i) => (
        <motion.div
          key={i}
          className="bg-gray-50 rounded-xl shadow-md p-5 flex flex-col justify-between hover:shadow-lg transition-shadow"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.3 }}
          variants={cardVariants}
        >
          {/* Logo and Name */}
          <div className="flex items-center gap-3 mb-3">
            {cert.logo && (
              <img
                src={cert.logo}
                alt="Organization Logo"
                className="w-10 h-10 object-contain"
              />
            )}
            <h3 className="text-lg font-semibold">{cert.name}</h3>
          </div>

          {/* View Certificate Link */}
          <a
            href={cert.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-auto text-blue-600 font-medium hover:underline"
          >
            View Certificate <FiExternalLink />
          </a>
        </motion.div>
      ))}
    </div>
  </section>
);

export default Certificates;
