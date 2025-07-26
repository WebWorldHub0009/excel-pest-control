import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import bgImage from "../assets/images/about/bg.jpg"; 
import foregroundImage from "../assets/images/about/main.png"; 

const headings = [
  { main: "Committed to ", highlight: "Safe Homes" },
  { main: "Precision in ", highlight: "Pest Protection" },
  { main: "Excellence in ", highlight: "Every Visit" },
];

const HeroAbout = () => {
  const [currentText, setCurrentText] = useState("");
  const [currentHeadingIndex, setCurrentHeadingIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  const fullText = headings[currentHeadingIndex].main + headings[currentHeadingIndex].highlight;
  const splitIndex = headings[currentHeadingIndex].main.length;

  useEffect(() => {
    if (isTyping) {
      if (charIndex < fullText.length) {
        const timeout = setTimeout(() => {
          setCurrentText((prev) => prev + fullText[charIndex]);
          setCharIndex((prev) => prev + 1);
        }, 60);
        return () => clearTimeout(timeout);
      } else {
        setIsTyping(false);
        setTimeout(() => setIsTyping(true), 1200);
      }
    } else {
      const nextIndex = (currentHeadingIndex + 1) % headings.length;
      setTimeout(() => {
        setCurrentText("");
        setCharIndex(0);
        setCurrentHeadingIndex(nextIndex);
      }, 1000);
    }
  }, [charIndex, isTyping, currentHeadingIndex, fullText]);

  const normalPart = currentText.slice(0, Math.min(splitIndex, currentText.length));
  const highlightedPart = currentText.length > splitIndex ? currentText.slice(splitIndex) : "";

  return (
    <section
      className="relative w-full min-h-[90vh] bg-cover bg-center bg-no-repeat flex flex-col md:flex-row"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 z-0" />

      {/* Text Section */}
      <div className="w-full md:w-1/2 px-8 md:px-16 py-20 flex flex-col justify-center z-10">
        <motion.span
          className="uppercase tracking-wider text-sm text-green-300 font-medium"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Excel Pest Control
        </motion.span>

        <h1 className="text-3xl md:text-6xl font-extrabold text-white leading-tight mt-4 min-h-[110px] md:min-h-[130px]">
          {normalPart}
          <span className="bg-gradient-to-r from-lime-300 to-green-400 bg-clip-text text-transparent">
            {highlightedPart}
          </span>
          <span className="text-green-300 animate-pulse inline-block w-[1ch]">|</span>
        </h1>

        <motion.p
          className="mt-6 text-gray-200 text-base md:text-lg leading-relaxed max-w-xl"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          With over two decades of experience, Excel Pest Control ensures your home and business remain pest-free with safe, eco-friendly, and reliable solutions—delivered by trained professionals you can trust.
        </motion.p>

        <motion.button
          className="mt-8 px-8 py-3 text-lg font-semibold rounded-lg bg-white/10 backdrop-blur-md border border-lime-300 text-white hover:bg-green-300 hover:text-black transition-all duration-300 w-fit shadow-md"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          Book Your Slot
        </motion.button>
      </div>

      {/* Image Section */}
      <div className="w-full md:w-1/2 relative flex items-end justify-center md:justify-end px-6 pb-10 md:pb-0 z-10">
        <motion.img
          src={foregroundImage}
          alt="Pest Control Expert"
          className="w-full max-w-md md:max-w-lg h-auto object-contain"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        />
      </div>
    </section>
  );
};

export default HeroAbout;
