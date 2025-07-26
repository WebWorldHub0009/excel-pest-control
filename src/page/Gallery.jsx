import React from "react";
import { motion } from "framer-motion";
import heroImg from "../assets/images/gallery/hero.jpg";

import img1 from "../assets/images/gallery/h1.jpg";
import img2 from "../assets/images/gallery/h2.jpg";
import img3 from "../assets/images/gallery/h3.jpg";
import img4 from "../assets/images/gallery/h4.jpg";
import img5 from "../assets/images/gallery/g1.jpg";
import img6 from "../assets/images/gallery/g2.jpg";
import img7 from "../assets/images/gallery/g3.jpg";
import img8 from "../assets/images/gallery/g4.jpg";
import img9 from "../assets/images/gallery/img1.avif";
import img10 from "../assets/images/gallery/img2.jpg";

const galleryImages = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];

export default function Gallery() {
  return (
    <div className="font-[Outfit] bg-white text-[#1C1C1C]">

      {/* HERO SECTION */}
      <div className="relative h-[80vh] w-full bg-cover bg-center" style={{ backgroundImage: `url(${heroImg})` }}>
        <div className="absolute inset-0 bg-black/50 bg-opacity-60 flex flex-col justify-center items-center text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-[#059766] text-4xl md:text-6xl font-extrabold drop-shadow-lg"
          >
            Witness Our Excellence in Every Detail
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-white text-lg md:text-xl mt-4 max-w-3xl"
          >
            Explore our pest control journey through images that tell stories of cleaner, safer environments. Trusted by hundreds, delivered with precision.
          </motion.p>
        </div>
      </div>

      {/* GALLERY INTRO HEADING */}
      <section className="py-12 px-6 md:px-20 text-center bg-[#F9F9F9]">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-[#1C1C1C]"
        >
          Our Work Speaks for Itself
        </motion.h2>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Discover how Excel Pest Control transforms homes and businesses with clean, pest-free solutions.
        </p>
      </section>

      {/* GALLERY GRID SECTION */}
      <section className="px-6 md:px-20 pb-20">
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {galleryImages.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition duration-300 group"
            >
              <img
                src={img}
                alt={`Gallery Image ${index + 1}`}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* CONTACT CTA SECTION */}
      <section className="bg-[#1C1C1C] text-white px-6 md:px-20 py-10 relative overflow-hidden">
        <div className="absolute w-96 h-96 bg-[#3CB371]/20 rounded-full -top-20 -left-20 blur-3xl opacity-40 animate-pulse"></div>
        <div className="absolute w-72 h-72 bg-[#3CB371]/30 rounded-full -bottom-20 -right-20 blur-3xl opacity-50 animate-ping"></div>

        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <motion.h3
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Want This Kind of Clean in Your Space?
          </motion.h3>
          <p className="text-lg mb-8 text-gray-300">
            Get in touch with Excel Pest Control – we’ll bring hygiene and protection to your doorstep.
          </p>
          <a
            href="/contact"
            className="inline-block bg-[#3CB371] hover:bg-white hover:text-[#1C1C1C] transition text-white px-8 py-3 font-semibold rounded-full shadow-lg"
          >
            Contact Excel Pest Control
          </a>
        </div>
      </section>
    </div>
  );
}
