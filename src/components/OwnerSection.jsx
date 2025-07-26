import React from "react";
import { motion } from "framer-motion";
import { FiPhone, FiMail, FiMapPin, FiUser } from "react-icons/fi";
import owner from "../assets/owner.jpg"; 

export default function OwnerSection() {
  return (
    <section className="relative w-full bg-gradient-to-br from-[#f8fdf8] to-[#e7f4ed] py-16 px-6 md:px-20 overflow-hidden">
      <div className="absolute top-[-50px] left-[-100px] w-[300px] h-[300px] bg-green-100 rounded-full blur-3xl opacity-40 animate-pulse" />
      <div className="absolute bottom-[-50px] right-[-100px] w-[300px] h-[300px] bg-green-200 rounded-full blur-3xl opacity-30 animate-pulse" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center z-10 relative">
        
        {/* Owner Info FIRST on mobile */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-4 text-gray-800 order-1 md:order-none"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-green-700 mb-2">
            Meet the Founder
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            <strong className="text-green-800">Jitendra Kumar Prasad</strong>, the visionary behind <span className="font-semibold">Excel Pest Control Services</span>, has been leading the company since 2017 with dedication and passion. Under his leadership, the company has emerged as a trusted name in Delhi NCR for reliable and eco-friendly pest solutions.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
            <div className="flex items-center gap-3 bg-white p-4 shadow-md rounded-xl border border-green-100">
              <FiUser className="text-green-700 text-xl" />
              <span><strong>Owner:</strong> Jitendra Kumar Prasad</span>
            </div>
            <div className="flex items-center gap-3 bg-white p-4 shadow-md rounded-xl border border-green-100">
              <FiMail className="text-green-700 text-xl" />
              <span>jitu.excelpest@gmail.com</span>
            </div>
            <div className="flex items-center gap-3 bg-white p-4 shadow-md rounded-xl border border-green-100">
              <FiPhone className="text-green-700 text-xl" />
              <span>+91 98117 76506, +91 98107 65477</span>
            </div>
            <div className="flex items-center gap-3 bg-white p-4 shadow-md rounded-xl border border-green-100">
              <FiMapPin className="text-green-700 text-xl" />
              <span>
                B-1047 D, Sangam Vihar, South Delhi, 110062<br />
                & 42A, 88 Block A, CR Park, Delhi 110019
              </span>
            </div>
          </div>

          <div className="mt-6 bg-white p-4 rounded-xl shadow-inner border-l-4 border-green-500">
            <p className="text-sm text-gray-600">
              <strong>GSTIN/UIN:</strong> 07AQHPP4954D1ZP
              <br />
              <strong>Established:</strong> 24/07/2017
            </p>
          </div>
        </motion.div>

        {/* Owner Image (BELOW content on mobile) */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="relative order-2 md:order-none"
        >
          <div className="rounded-2xl overflow-hidden shadow-xl border border-green-200">
            <img
              src={owner}
              alt="Jitendra Kumar Prasad"
              className="object-cover w-full h-[500px]"
            />
          </div>
          <div className="absolute bottom-4 left-4 bg-green-600 text-white text-xs md:text-sm px-4 py-2 rounded-full shadow-lg">
            8+ Years of Excellence
          </div>
        </motion.div>
      </div>
    </section>
  );
}
