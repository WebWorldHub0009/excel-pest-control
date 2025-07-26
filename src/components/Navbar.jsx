import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiMail, FiPhone, FiSearch, FiHome, FiInfo, FiImage, FiFileText, FiPhoneCall, FiGrid } from "react-icons/fi";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import logo from "../assets/logo.png";

export default function Navbar() {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [search, setSearch] = useState("");

  const serviceItems = [
    "Pest Control",
    "Bees and Wasp Control",
    "Mosquito Control",
    "Cockroach Control",
    "Wood Borer Control",
    "Fleas Control",
    "Termite Control",
    "Bed Bugs Control",
    "Rodent Control",
    "Spiders Control",
    "Flies Control",
    "Lizards Control",
  ];

  return (
    <>
      {/* Top Info Bar */}
      <div className="w-full bg-[#0f241a] text-white text-xs py-2 px-4 flex justify-between items-center font-medium tracking-wide">
        <div className="flex items-center gap-4 flex-wrap">
          <a href="mailto:jitu.excelpest@gmail.com" className="flex items-center gap-1 hover:text-green-400 transition">
            <FiMail /> jitu.excelpest@gmail.com
          </a>
          <a href="mailto:Excelpestcontrolservice@gmail.com" className="flex items-center gap-1 hover:text-green-400 transition">
            <FiMail /> Excelpestcontrolservice@gmail.com
          </a>
        </div>
        <div className="flex items-center gap-4 flex-wrap">
          <a href="tel:+919811776506" className="flex items-center gap-1 hover:text-green-400 transition">
            <FiPhone /> +91 98117 76506
          </a>
          <a href="tel:+919810765477" className="flex items-center gap-1 hover:text-green-400 transition">
            <FiPhone /> +91 98107 65477
          </a>
          <span className="text-green-300 font-semibold">UDYAM-DL-08-0025657</span>
        </div>
      </div>

      {/* Mid Navbar */}
      <div className="w-full bg-white px-6 py-4 shadow-md flex items-center justify-between relative z-50">
        {/* Left: Social Icons */}
        <div className="flex items-center gap-4 text-green-800 text-xl">
          <a href="#" className="hover:text-[#0f241a] transition duration-300"><FaFacebookF /></a>
          <a href="#" className="hover:text-[#0f241a] transition duration-300"><FaInstagram /></a>
          <a href="#" className="hover:text-[#0f241a] transition duration-300"><FaLinkedinIn /></a>
        </div>

        {/* Center: Logo */}
        <Link to="/" className="absolute left-1/2 transform -translate-x-1/2">
          <img
            src={logo}
            alt="Excel Pest Control"
            className="h-12 object-contain drop-shadow-lg hover:scale-105 transition duration-300"
          />
        </Link>

        {/* Right: Search */}
        <div className="w-full max-w-[14rem] px-2 flex items-center relative justify-end">
          <input
            type="text"
            placeholder="Search services..."
            className="w-full border border-gray-300 rounded-full px-3 py-2 text-sm focus:outline-none shadow-inner transition duration-300 hover:border-green-700"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button className="absolute right-4 text-green-700 hover:scale-110 transition">
            <FiSearch size={18} />
          </button>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="w-full bg-[#0D2606] text-white py-2 shadow-lg border-b border-green-700 font-medium">
        <div className="max-w-7xl mx-auto px-6 flex justify-center items-center font-inter text-sm tracking-wide">
          <div className="flex gap-6 items-center justify-center">
            <Link to="/" className="flex items-center gap-2 hover:text-green-300 transition duration-300">
              <FiHome /> Home
            </Link>
            <Link to="/about" className="flex items-center gap-2 hover:text-green-300 transition duration-300">
              <FiInfo /> About
            </Link>

            {/* Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button className="flex items-center gap-2 hover:text-green-300 transition duration-300">
                <FiGrid /> Services <IoIosArrowDown className="mt-[1px]" />
              </button>

              {servicesOpen && (
                <div className="absolute top-full left-0  w-64 bg-white text-[#0D2606] rounded-xl shadow-2xl z-50 p-4 grid grid-cols-1 gap-2 border border-green-600">
                  {serviceItems.map((item, index) => (
                    <Link
                      key={index}
                      to={`/services/${item.toLowerCase().replace(/ /g, "-")}`}
                      className="hover:text-green-700 text-sm font-medium transition duration-200"
                    >
                      {item}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link to="/gallery" className="flex items-center gap-2 hover:text-green-300 transition duration-300">
              <FiImage /> Gallery
            </Link>
            <Link to="/documentation" className="flex items-center gap-2 hover:text-green-300 transition duration-300">
              <FiFileText /> Documentation
            </Link>
            <Link to="/contact" className="flex items-center gap-2 hover:text-green-300 transition duration-300">
              <FiPhoneCall /> Contact
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
