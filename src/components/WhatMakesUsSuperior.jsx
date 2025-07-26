import React from "react";
import { MdOutlineVerifiedUser } from "react-icons/md";
import bgImg from "../assets/images/home/man2.png";
import { Link } from "react-router-dom";

const features = [
  "Trusted Since 2008",
  "Timely & Safe Deliveries",
  "Expert & Trained Staff",
  "Pan India Coverage",
  "Affordable & Transparent Pricing",
  "Clean & Secured Vehicles",
  "24/7 Support Availability",
  "Customised Service Plans",
];

const WhatMakesUsSuperior = () => {
  return (
    <section className="w-full bg-gradient-to-br from-[#f9f9f9] via-gray-50 to-gray-200 py-16 px-4 sm:px-6 md:px-12 lg:px-16">
      <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
        
        {/* Left Image Section - Hidden on Mobile */}
        <div className="w-full lg:w-1/2 relative justify-center items-center hidden lg:flex">
          <div
            className="absolute -top-10 -left-10 w-[300px] sm:w-[380px] md:w-[460px] lg:w-[580px] h-[300px] sm:h-[380px] md:h-[460px] lg:h-[580px] rounded-full bg-[#6CB371]/20 z-0"
            aria-hidden="true"
          ></div>

          <img
            src={bgImg}
            alt="Superior Service Image"
            className="relative w-[250px] sm:w-[320px] md:w-[300px] lg:w-[358px] object-contain rounded-xl z-10"
            loading="lazy"
          />
        </div>

        {/* Right Content Section */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center text-center lg:text-left">
          <div className="flex justify-center lg:justify-start items-center gap-2 mb-2">
            <MdOutlineVerifiedUser className="text-[#3CB371] text-2xl sm:text-3xl" />
            <p className="text-[#3CB371] uppercase tracking-wider font-semibold text-xs sm:text-sm">
              What Makes Us Superior
            </p>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 leading-snug">
            Delivering Excellence, Earning Trust –{" "}
            <span className="text-[#3CB371]">Every Single Time</span>
          </h2>

          <p className="text-gray-700 text-sm sm:text-base max-w-xl mb-6 sm:mb-8 mx-auto lg:mx-0 leading-relaxed font-medium">
            We go beyond transportation — we deliver satisfaction, safety, and service that’s tailored to your exact needs. With years of experience and a customer-first approach, we lead with excellence.
          </p>

          {/* Feature Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-3 border-t border-gray-300 pt-5 mb-6 sm:mb-10 max-w-xl mx-auto lg:mx-0">
            {features.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-2 text-gray-800 font-semibold text-sm"
              >
                <MdOutlineVerifiedUser className="text-[#3CB371] text-base flex-shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 justify-center lg:justify-start">
            <Link to="/contact">
              <button className="cursor-pointer bg-[#3CB371] hover:bg-[#2e9a64] transition-colors text-white font-bold py-3 px-8 rounded-lg shadow-md focus:outline-none focus:ring-4 focus:ring-[#3CB371]/30 text-sm sm:text-base">
                Get Free Quote
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatMakesUsSuperior;
