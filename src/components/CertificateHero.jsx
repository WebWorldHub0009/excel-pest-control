import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import bg from "../assets/images/doc/docmm.jpg"; // You can replace this with a cleaner image (lab, eco field, expert spraying, etc.)

export default function CertificateHero() {
  return (
    <section className="relative w-full min-h-[80vh] flex items-center justify-center overflow-hidden bg-white">
      
      {/* Background Image + Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-105 brightness-90"
        style={{ backgroundImage: `url(${bg})` }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-br from-white/80 via-[#e6fff3]/70 to-white/90 backdrop-blur-sm"></div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl px-6 md:px-12 text-center text-[#0B1F3A]">
        <motion.h1
          className="text-4xl md:text-6xl font-bold font-serif mb-4 text-emerald-700"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Excel Pest Control Services
        </motion.h1>

        <motion.div
          className="text-lg md:text-2xl font-light text-gray-700 mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <Typewriter
            options={{
              strings: [
                "Certified Pest Management Experts",
                "Protecting Homes & Businesses Since 2017",
                "Safe, Hygienic, Government-Approved Solutions"
              ],
              autoStart: true,
              loop: true,
              delay: 50,
              deleteSpeed: 25
            }}
          />
        </motion.div>

        <motion.p
          className="text-gray-600 max-w-2xl mx-auto mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1 }}
        >
          Trusted across Delhi-NCR for professional, eco-friendly pest control. Our verified certifications prove our dedication to health, hygiene, and legal compliance.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
        >
         
          <Link
            to="/contact"
            className="border border-emerald-600 text-emerald-600 font-semibold px-6 py-3 rounded-full hover:bg-emerald-600 hover:text-white transition"
          >
            Get In Touch
          </Link>
        </motion.div>
      </div>

      {/* Decorative Soft Glows */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-emerald-300/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-green-500/10 rounded-full blur-3xl"></div>
    </section>
  );
}
