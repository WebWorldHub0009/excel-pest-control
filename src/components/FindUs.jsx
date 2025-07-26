import React from "react";
import { motion } from "framer-motion";
import { FaMapMarkedAlt } from "react-icons/fa";

export default function FindUs() {
  return (
    <div className="relative w-full bg-[#0d1f16] py-20 px-4 md:px-10 lg:px-32 overflow-hidden">
      {/* Glowing Background Circles */}
      <div className="absolute top-10 -left-20 w-72 h-72 bg-green-500 opacity-20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-10 -right-20 w-96 h-96 bg-green-800 opacity-10 rounded-full blur-3xl animate-ping" />

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12 z-10 relative"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-wide flex justify-center items-center gap-4">
          <FaMapMarkedAlt className="text-green-400 animate-bounce" />
          Find Us on Map
        </h2>
        <p className="text-neutral-300 mt-4 max-w-2xl mx-auto">
          Visit our office or drop by our service centers. We’re closer than you think!
        </p>
      </motion.div>

      {/* Map Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="relative w-full h-[450px] rounded-3xl overflow-hidden shadow-2xl ring-1 ring-white/10 backdrop-blur-md bg-white/5 z-20"
      >
        <iframe
          title="Excel Pest Control Map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d794.0417409852556!2d77.24203013483147!3d28.540326735291085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m3!3e6!4m0!4m0!5e0!3m2!1sen!2sin!4v1753423064203!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: "0" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="rounded-3xl"
        ></iframe>
      </motion.div>
    </div>
  );
}
