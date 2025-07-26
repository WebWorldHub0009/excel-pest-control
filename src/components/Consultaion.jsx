import { FiPhoneCall, FiMail } from "react-icons/fi";
import { motion } from "framer-motion";

export default function Consultation() {
  return (
    <section className="w-full py-16 px-4 bg-gradient-to-br from-white via-lime-100 to-green-300">
      <div className="max-w-6xl mx-auto rounded-3xl shadow-2xl p-10 bg-white/30 backdrop-blur-md border border-white/40">
        <motion.div 
          initial={{ opacity: 0, y: 40 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-green-800 drop-shadow-lg">
            Free Expert Consultation
          </h2>
          <p className="text-md mt-2 text-gray-700 max-w-2xl mx-auto">
            Reach out to Excel Pest Control anytime. We’re here to protect your home & workspace — professionally.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Phone Numbers */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white/70 rounded-2xl p-6 shadow-lg flex items-center gap-4 border border-gray-200 hover:shadow-xl transition"
          >
            <FiPhoneCall className="text-green-700 text-4xl" />
            <div>
              <p className="text-lg text-gray-900 font-semibold">Call Us</p>
              <a href="tel:+919811776506" className="block text-md text-gray-700 hover:text-green-700 transition font-medium">
                +91 98117 76506
              </a>
              <a href="tel:+919810765477" className="block text-md text-gray-700 hover:text-green-700 transition font-medium">
                +91 98107 65477
              </a>
            </div>
          </motion.div>

          {/* Emails */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white/70 rounded-2xl p-6 shadow-lg flex items-center gap-4 border border-gray-200 hover:shadow-xl transition"
          >
            <FiMail className="text-green-700 text-4xl" />
            <div>
              <p className="text-lg text-gray-900 font-semibold">Email Us</p>
              <a href="mailto:jitu.excelpest@gmail.com" className="block text-md text-gray-700 hover:text-green-700 transition font-medium">
                jitu.excelpest@gmail.com
              </a>
              <a href="mailto:Excelpestcontrolservice@gmail.com" className="block text-md text-gray-700 hover:text-green-700 transition font-medium">
                Excelpestcontrolservice@gmail.com
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
