import React from "react";
import { motion } from "framer-motion";
import { FaEye, FaDownload, FaShieldAlt } from "react-icons/fa";
import CertificateHero from "../components/CertificateHero";
import img1 from "../assets/images/doc/udyam.jpg"
import img2 from "../assets/images/doc/cor.jpg"
import img3 from "../assets/images/doc/par.jpg"
import img4 from "../assets/images/doc/tran.jpg"
import img5 from "../assets/images/doc/enuv.jpg"
import img6 from "../assets/images/doc/gst.jpg"
import img7 from "../assets/images/doc/lic.jpg"

const certifications = [
  {
    title: "Udyam Registration Certificate",
    file: img1,
    thumbnail: "",
  },
  {
    title: "Certificate of Registration ",
    file: img2,
    thumbnail: "",
  },
  {
    title: "Certificate of Participation",
    file: img3,
    thumbnail: "",
  },
 {
    title: "Certificate of SPS Product",
    file: img4,
    thumbnail: "",
  },
  {
    title: "ENVU Certificate",
    file: img5,
    thumbnail: "",
  },
  {
    title: "GST Certificate",
    file: img6,
    thumbnail: "",
  },
   {
    title: "Licence",
    file: img7,
    thumbnail: "",
  },
];

export default function CertificationPage() {
  return (
    <>
      <CertificateHero />

      {/* Light Premium Background */}
      <section className="bg-gradient-to-br from-white via-[#f0fdf4] to-[#e6fffa] py-20 px-6 text-[#0B1F3A]">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-wide mb-4">
            Verified <span className="text-emerald-600">Documentations</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Each document we present is a seal of trust, quality, and a legally compliant pest control standard.
          </p>
          <div className="w-24 h-1 bg-emerald-500 mx-auto mt-6 rounded-full" />
        </div>

        <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center">
          {certifications.map((cert, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.03 }}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="relative bg-white backdrop-blur-lg rounded-xl border border-gray-200 shadow-md hover:shadow-xl overflow-hidden w-full max-w-sm p-5 transition-all"
            >
              {/* Badge */}
              <div className="absolute top-4 right-4 bg-emerald-500 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center gap-2 shadow">
                <FaShieldAlt /> Verified
              </div>

              {/* Thumbnail Placeholder */}
              <div className="w-full h-60 bg-gradient-to-tr from-emerald-100 to-emerald-50 rounded-lg flex items-center justify-center text-emerald-400 text-4xl">
                📄
              </div>

              {/* Title and Actions */}
              <div className="text-center px-2 py-6">
                <h3 className="text-xl font-semibold">{cert.title}</h3>
                <div className="flex justify-center gap-4 mt-4">
                  <a
                    href={cert.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white py-2 px-5 rounded-full text-sm font-medium transition"
                  >
                    <FaEye /> View
                  </a>
                  <a
                    href={cert.file}
                    download
                    className="flex items-center gap-2 border border-emerald-600 text-emerald-600 py-2 px-5 rounded-full text-sm font-medium hover:bg-emerald-600 hover:text-white transition"
                  >
                    <FaDownload /> Download
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why It Matters Section */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold mb-6"
          >
            Why <span className="text-emerald-600">Certifications</span> Matter
          </motion.h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-10">
            Trust in pest control starts with compliance. These certificates represent our ethical promise and verified legal identity as a pest control leader in India.
          </p>
          <motion.a
            whileHover={{ scale: 1.05 }}
            href="/contact"
            className="inline-block bg-emerald-600 text-white font-semibold py-3 px-6 rounded-full hover:bg-emerald-700 transition"
          >
            Contact Our Certified Experts
          </motion.a>
        </div>
      </section>
    </>
  );
}
