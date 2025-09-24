import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { heroData } from "../data";

const Hero = () => (
  <section className="h-screen flex flex-col md:flex-row items-center justify-center bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-6 sm:px-12">
    
    {/* Profile Picture */}
    <motion.img
      src="/profile.jpeg"
      alt={heroData.name}
      className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 rounded-full border-4 border-white shadow-lg mb-6 md:mb-0 md:mr-12"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
    />

    {/* Hero Info */}
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      className="text-center md:text-left"
    >
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">{heroData.name}</h1>
      <h2 className="text-xl sm:text-2xl md:text-3xl mt-3 sm:mt-4">{heroData.role}</h2>

      {/* Social Icons */}
      <div className="flex justify-center md:justify-start mt-6 space-x-6 text-3xl sm:text-4xl">
        <a href={heroData.github} target="_blank" rel="noopener noreferrer" className="hover:text-gray-200 transition-colors">
          <FaGithub />
        </a>
        <a href={heroData.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-gray-200 transition-colors">
          <FaLinkedin />
        </a>
        <a href={`mailto:${heroData.email}`} className="hover:text-gray-200 transition-colors">
          <FaEnvelope />
        </a>
      </div>

      {/* Download Resume Button */}
      <a
        href="/tapanResume.pdf"
        download
        className="inline-block mt-6 px-6 py-3 bg-white text-blue-600 font-semibold rounded-full shadow-lg hover:bg-gray-100 transition-colors"
      >
        Download Resume
      </a>
    </motion.div>
  </section>
);

export default Hero;
