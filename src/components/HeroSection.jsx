import React from 'react';
import { motion } from 'framer-motion';
import { FaLeaf } from 'react-icons/fa';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import img1 from "../assets/images/hero/h1.jpg";
import img2 from "../assets/images/hero/h2.jpg";
import img3 from "../assets/images/hero/h4.jpg";
import img4 from "../assets/images/hero/h3.jpg";
import bgOverlay from "../assets/main.avif";
import { Link } from 'react-router-dom';

const images = [img1, img2, img3,img4];

export default function HeroSlider() {
  const sliderSettings = {
    dots: true,
    autoplay: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <div
      className="relative w-full min-h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-14 overflow-hidden font-[Outfit] text-white"
      style={{
        backgroundImage: `url(${bgOverlay})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* ✅ Semi-transparent dark overlay */}
      <div className="absolute inset-0 z-0"></div>

      {/* ✅ Soft Hollow Circular SVGs */}
      <div className="absolute -top-24 left-10 w-[250px] h-[250px] border-[8px] border-green-500/20 rounded-full animate-pulse z-0"></div>
      <div className="absolute -bottom-16 right-10 w-[300px] h-[300px] border-[40px] border-green-600/10 rounded-full animate-spin-slow z-0"></div>

      {/* ✅ Left Text Section */}
      <div className="md:w-1/2 space-y-7 z-10">
        <div className="flex items-center gap-2 text-black text-xl font-semibold">
          <FaLeaf />
          <span>Eco-Friendly • Safe • Trusted</span>
        </div>

        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-green-800">
          Make Your Home<br />
          Pest-Free & Healthy<br />
          with <span className="text-white">Excel Pest Control</span>
        </h1>

        <p className="text-lg max-w-xl text-gray-800 font-light leading-relaxed">
          Excel Pest Control offers long-lasting pest protection using environmentally safe, non-toxic treatments.
          We prioritize your health and home with tailored solutions backed by certified professionals.
        </p>
        <button className="group relative overflow-hidden rounded-full bg-[#3CB371] px-6 py-3 text-white font-semibold shadow-lg transition-all duration-300 hover:bg-white hover:text-[#3CB371] border-2 border-[#3CB371]">
  <Link to="/contact" className="relative z-10">
    Book Your Inspection
  </Link>
  <span className="absolute inset-0 bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out origin-left opacity-10"></span>
</button>

      </div>

      {/* ✅ Image Slider Section */}
      <motion.div
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2 }}
        className="md:w-1/2 mt-12 md:mt-0 z-10"
      >
        <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-green-400/30">
          <Slider {...sliderSettings}>
            {images.map((src, idx) => (
              <div key={idx}>
                <img
                  src={src}
                  alt={`Slide ${idx + 1}`}
                  className="w-full h-[550px] object-cover"
                />
              </div>
            ))}
          </Slider>
        </div>
      </motion.div>
    </div>
  );
}
