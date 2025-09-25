import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { heroData } from "../data";
import TypingText from "./TypingText"; // custom typing effect

const Hero = () => (
  <section className="relative h-screen flex flex-col md:flex-row items-center justify-center bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-6 sm:px-12 overflow-hidden">
    
    {/* Floating Background Circles */}
    <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
      <motion.div
        className="absolute w-72 h-72 bg-white/10 rounded-full top-10 left-10"
        animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 0] }}
        transition={{ duration: 12, repeat: Infinity, repeatType: "loop" }}
      />
      <motion.div
        className="absolute w-96 h-96 bg-white/5 rounded-full bottom-10 right-10"
        animate={{ scale: [1, 1.3, 1], rotate: [0, 360, 0] }}
        transition={{ duration: 18, repeat: Infinity, repeatType: "loop" }}
      />
    </div>

    {/* Profile Picture */}
    <motion.img
      src="/profile.jpeg"
      alt={heroData.name}
      className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 rounded-full border-4 border-white shadow-lg mb-6 md:mb-0 md:mr-12 z-10"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
    />

    {/* Hero Info */}
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      className="text-center md:text-left z-10"
    >
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">{heroData.name}</h1>
      <h2 className="text-xl sm:text-2xl md:text-3xl mt-3 sm:mt-4 font-medium">{heroData.role}</h2>
      
      {/* Typing Animated Tagline */}
      <motion.div
        className="mt-4 sm:mt-6 max-w-md mx-auto md:mx-0 text-lg sm:text-xl text-gray-200"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <TypingText
          lines={[
            "Transforming data into actionable insights...",
            "Building interactive Power BI dashboards...",
            "Automating processes for efficiency..."
          ]}
        />
      </motion.div>

      {/* Social Icons */}
      <motion.div
        className="flex justify-center md:justify-start mt-6 space-x-6 text-3xl sm:text-4xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
      >
        <a href={heroData.github} target="_blank" rel="noopener noreferrer" className="hover:text-gray-200 transition-transform transform hover:scale-125">
          <FaGithub />
        </a>
        <a href={heroData.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-gray-200 transition-transform transform hover:scale-125">
          <FaLinkedin />
        </a>
        <a href={`mailto:${heroData.email}`} className="hover:text-gray-200 transition-transform transform hover:scale-125">
          <FaEnvelope />
        </a>
      </motion.div>

      {/* Download Resume Button */}
      <motion.a
        href="/tapanResume.pdf"
        download
        className="inline-block mt-6 px-6 py-3 bg-white text-blue-600 font-semibold rounded-full shadow-lg hover:bg-gray-100 transition-colors hover:scale-105"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9 }}
      >
        Download Resume
      </motion.a>
    </motion.div>
  </section>
);

export default Hero;
