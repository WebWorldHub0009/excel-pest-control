import React from 'react';
import { motion } from 'framer-motion';
import { MdVerified, MdOutlineHistoryEdu } from 'react-icons/md';
import { FaLeaf, FaAward } from 'react-icons/fa';

export default function OurStory() {
  return (
    <div className="relative bg-gradient-to-br from-white via-lime-50 to-green-100 text-gray-800 overflow-hidden">
      {/* Top wave */}
      <div className="absolute top-0 w-full h-32 bg-gradient-to-r from-green-300 via-green-400 to-lime-400 rounded-b-full blur-2xl opacity-40 z-0"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-10">
        <motion.div 
          initial={{ opacity: 0, y: 40 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1 }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-center text-green-800 tracking-tight mb-4">
            Our Story
          </h2>
          <p className="text-center max-w-3xl mx-auto text-lg text-gray-600 mb-12">
            Since our inception in 2017, Excel Pest Control has been committed to redefining hygiene and safety. Our journey from a small team to a leading pest control solution provider has been driven by trust, innovation, and customer satisfaction.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Card 1 */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.8 }}
            className="bg-white rounded-2xl shadow-xl border border-lime-100 p-6 hover:shadow-2xl transition"
          >
            <MdOutlineHistoryEdu className="text-5xl text-green-500 mb-4" />
            <h4 className="text-xl font-semibold mb-2 text-green-800">Founded in 2017</h4>
            <p className="text-gray-600 leading-relaxed">
              With a dream to make Delhi safer and cleaner, our founder started Excel Pest Control from a small office in Sangam Vihar. Today, we proudly serve thousands of homes and businesses.
            </p>
          </motion.div>

          {/* Card 2 */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white rounded-2xl shadow-xl border border-lime-100 p-6 hover:shadow-2xl transition"
          >
            <FaAward className="text-5xl text-green-500 mb-4" />
            <h4 className="text-xl font-semibold mb-2 text-green-800">Award-Winning Quality</h4>
            <p className="text-gray-600 leading-relaxed">
              Our consistent service and eco-safe methods have earned us the reputation of being one of Delhi’s most trusted pest control brands.
            </p>
          </motion.div>

          {/* Card 3 */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white rounded-2xl shadow-xl border border-lime-100 p-6 hover:shadow-2xl transition"
          >
            <FaLeaf className="text-5xl text-green-500 mb-4" />
            <h4 className="text-xl font-semibold mb-2 text-green-800">Eco-Friendly Approach</h4>
            <p className="text-gray-600 leading-relaxed">
              Sustainability is at the heart of our mission. We use certified herbal and non-toxic solutions to ensure safety for families, pets, and the environment.
            </p>
          </motion.div>

          {/* Card 4 */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-white rounded-2xl shadow-xl border border-lime-100 p-6 hover:shadow-2xl transition"
          >
            <MdVerified className="text-5xl text-green-500 mb-4" />
            <h4 className="text-xl font-semibold mb-2 text-green-800">Trust & Transparency</h4>
            <p className="text-gray-600 leading-relaxed">
              From transparent pricing to timely delivery, we believe in keeping our clients informed and protected every step of the way.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Bottom Decoration */}
      <div className="absolute bottom-0 w-full h-32 bg-gradient-to-l from-lime-300 via-green-300 to-white rounded-t-full blur-2xl opacity-30 z-0"></div>
    </div>
  );
}
