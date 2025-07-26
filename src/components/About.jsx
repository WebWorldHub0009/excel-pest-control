import React from 'react';
import { Link } from 'react-router-dom';
import { FiCheckCircle } from 'react-icons/fi';
import heroImg from '../assets/images/hero/about.jpg'; // your image
import overlayLeaf from '../assets/images/hero/logo.png'; // optional: corner image

export default function About() {
  return (
    <section className="relative bg-[#fcf7f1] overflow-hidden">
         {overlayLeaf && (
        <img
          src={overlayLeaf}
          alt="decorative leaf"
          className="absolute top-8  left-4 w-48 opacity-40 pointer-events-none"
        />
      )}
      {/* 🌿 Floating Leaf SVG Top Right */}
      <svg
        className="absolute top-4 right-4 w-16 opacity-30 md:opacity-50"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="#3CB371"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 2C6.477 2 2 6.477 2 12c2.5 1 5 1 8 1s5.5-.5 8-1c0-5.523-4.477-10-10-10z"
        />
      </svg>

      {/* 🍃 Floating Leaf SVG Bottom Left */}
      <svg
        className="absolute bottom-10 left-6 w-20 opacity-10 animate-spin-slow"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="#3CB371"
        strokeWidth={1.2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2 12c2.5 1 5 1 8 1s5.5-.5 8-1c0-5.523-4.477-10-10-10C4.477 2 2 6.477 2 12z"
        />
      </svg>

      {/* 🖼️ Grid Container */}
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-20 grid md:grid-cols-2 items-center gap-10 relative z-10">
        {/* Left Image with scroll info */}
        <div className="relative">
          <div className="rounded-xl overflow-hidden shadow-xl border-[5px] border-[#3CB371]">
            <img
              src={heroImg}
              alt="Excel Pest Control"
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Scroll Box Bottom Left */}
          <div className="absolute -bottom-6 left-0 bg-white px-8 py-3 w-[90%] ml-8 rounded-r-xl border-l-[6px] border-[#3CB371] shadow-md max-h-28 overflow-y-auto scrollbar-thin scrollbar-thumb-[#3CB371]/80 scrollbar-track-gray-200">
            <p className="text-sm text-gray-800 text-center rounded-2xl">
              ✅ Herbal & Eco-Safe | ✅ Trusted Professionals 
            </p>
          </div>
        </div>

        {/* Right Textual Content */}
        <div>
          <p className="text-[#3CB371] font-bold uppercase tracking-widest text-sm">
            Excel Green Protection
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-[#1C1C1C] leading-tight mt-2">
            Total Pest-Free Living <br /> with 100% Herbal Control
          </h1>

          <p className="mt-5 text-gray-700 text-base leading-relaxed max-w-xl">
            Excel Pest Control brings you the safest, most effective eco-friendly pest solutions in the industry. Our experts use certified herbal products that eliminate pests without compromising your family’s well-being or the planet’s health.
          </p>

          <ul className="mt-6 space-y-4 text-gray-700 text-base">
            <li className="flex items-start gap-3">
              <FiCheckCircle className="text-[#3CB371] mt-1" size={20} />
              <span><strong>Family-Safe:</strong> No toxins, no risk – just clean results.</span>
            </li>
            <li className="flex items-start gap-3">
              <FiCheckCircle className="text-[#3CB371] mt-1" size={20} />
              <span><strong>Zero Smell:</strong> Odor-free herbal solutions for every room.</span>
            </li>
            <li className="flex items-start gap-3">
              <FiCheckCircle className="text-[#3CB371] mt-1" size={20} />
              <span><strong>Trusted Service:</strong> Proven by 10,000+ happy homes & businesses.</span>
            </li>
          </ul>

          {/* CTA Button */}
          <div className="mt-8">
            <Link
              to="/services"
              className="inline-block bg-[#3CB371] hover:bg-white hover:text-[#3CB371] border-2 border-[#3CB371] text-white font-semibold px-7 py-3 rounded-full transition duration-300 shadow-lg"
            >
              Book a Service
            </Link>
          </div>
        </div>
      </div>

      {/* 🌿 Bottom-right overlay image */}
      {overlayLeaf && (
        <img
          src={overlayLeaf}
          alt="decorative leaf"
          className="absolute bottom-8 right-4 w-48 opacity-40 pointer-events-none"
        />
      )}
    </section>
  );
}
