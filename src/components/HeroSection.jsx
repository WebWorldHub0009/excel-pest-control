import React from 'react';
import { motion } from 'framer-motion';
import { FaLeaf } from 'react-icons/fa';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import img1 from "../assets/images/hero/h1.jpg";
import img2 from "../assets/images/hero/h2.jpg";
import img3 from "../assets/images/hero/h4.jpg";
import img4 from "../assets/images/hero/h3.jpg";
import bgOverlay from "../assets/main.avif";

const images = [img1, img2, img3, img4];

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
      className="relative w-full min-h-screen flex flex-col md:flex-row items-center justify-between px-4 md:px-16 py-10 md:py-20 overflow-hidden font-[Outfit] text-white"
      style={{
        backgroundImage: `url(${bgOverlay})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* 🔆 Overlay Effects */}
      <div className="absolute inset-0  z-0"></div>
      <div className="absolute -top-20 left-10 w-[200px] h-[200px] border-[6px] border-green-500/30 rounded-full animate-pulse z-0"></div>
      <div className="absolute -bottom-20 right-10 w-[250px] h-[250px] border-[30px] border-green-600/10 rounded-full animate-spin-slow z-0"></div>

      {/* 🔹 Left Text Content */}
      <div className="md:w-1/2 z-10 text-center md:text-left space-y-6">
        <div className="flex justify-center md:justify-start items-center gap-2 text-green-400 text-lg font-medium">
          <FaLeaf className="text-green-400" />
          <span>Eco-Friendly • Safe • Trusted</span>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-green-800 drop-shadow-md">
          Make Your Home<br />
          Pest-Free & Healthy<br />
          with <span className="text-white">Excel Pest Control</span>
        </h1>

        <p className="text-base sm:text-lg md:text-lg text-gray-800 font-light leading-relaxed max-w-xl mx-auto md:mx-0">
          Excel Pest Control offers long-lasting pest protection using eco-safe, certified, and non-toxic solutions.
          We prioritize your health, home, and safety — always.
        </p>

        <Link
          to="/contact"
          className="inline-block bg-[#205e3c] hover:bg-white text-white hover:text-[#3CB371] font-semibold px-6 py-3 mt-2 rounded-full border-2 border-[#3CB371] transition-all duration-300 shadow-lg group relative overflow-hidden"
        >
          <span className="z-10 relative">Book Your Inspection</span>
          <span className="absolute inset-0 bg-white scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-in-out opacity-10"></span>
        </Link>
      </div>

      {/* 🔹 Right Image Slider */}
      <motion.div
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="w-full md:w-1/2 mt-0 md:mt-0 z-10"
      >
        <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-green-300/30 max-w-xl mx-auto">
          <Slider {...sliderSettings}>
            {images.map((src, idx) => (
              <div key={idx}>
                <img
                  src={src}
                  alt={`Slide ${idx + 1}`}
                  className="w-full h-[450px] sm:h-[400px] md:h-[500px] object-cover"
                />
              </div>
            ))}
          </Slider>
        </div>
      </motion.div>
    </div>
  );
}
