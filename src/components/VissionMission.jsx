import React from "react";
import { motion } from "framer-motion";
import { FaEye, FaBullseye } from "react-icons/fa";

export default function VisionMission() {
  return (
    <div className="relative z-10 w-full bg-gradient-to-br from-white via-lime-100 to-green-200 py-16 px-6 md:px-20 overflow-hidden">
      {/* Glowing abstract circles */}
      <div className="absolute w-[300px] h-[300px] bg-green-300/30 rounded-full blur-3xl top-10 left-10 animate-pulse z-0" />
      <div className="absolute w-[200px] h-[200px] bg-lime-200/40 rounded-full blur-2xl bottom-10 right-20 animate-ping z-0" />

      <div className="relative z-10 max-w-7xl mx-auto text-center mb-20">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl font-extrabold text-green-900 tracking-tight"
        >
          Our Vision & Mission
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="mt-4 text-lg md:text-xl text-green-800 font-medium max-w-3xl mx-auto"
        >
          We’re committed to redefining pest control standards with sustainability, safety, and satisfaction.
        </motion.p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 relative z-10 max-w-6xl mx-auto">
        {/* Vision Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="bg-white/70 backdrop-blur-md border border-green-300 shadow-xl rounded-3xl p-8 text-left hover:shadow-2xl transition-all duration-500"
        >
          <div className="flex items-center gap-4 mb-6">
            <FaEye className="text-green-700 text-3xl" />
            <h3 className="text-2xl font-semibold text-green-900">Our Vision</h3>
          </div>
          <p className="text-green-800 leading-relaxed text-lg">
            To become the most trusted pest control brand in India by delivering innovative, eco-friendly, and high-quality pest management services, ensuring healthy living and working environments.
          </p>
        </motion.div>

        {/* Mission Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9 }}
          className="bg-white/70 backdrop-blur-md border border-lime-300 shadow-xl rounded-3xl p-8 text-left hover:shadow-2xl transition-all duration-500"
        >
          <div className="flex items-center gap-4 mb-6">
            <FaBullseye className="text-lime-700 text-3xl" />
            <h3 className="text-2xl font-semibold text-green-900">Our Mission</h3>
          </div>
          <p className="text-green-800 leading-relaxed text-lg">
            To protect homes, businesses, and communities from pests through safe, effective, and personalized solutions while maintaining integrity, professionalism, and environmental responsibility.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
