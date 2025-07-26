import React, { useState } from "react";
import {
  GiAnt,
  GiBee,
  
  GiCoconuts,
  GiWoodPile,
  GiFlyingFlag,
 
  GiBed,
  GiRat,
  GiSpiderWeb,
  GiFly,

  GiLiar,
  GiAmberMosquito,
  GiTerror,
} from "react-icons/gi";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import bg from "../assets/images/hero/Sbg.jpg"; 

const allServices = [
  { icon: <GiAnt className="text-4xl text-green-700" />, title: "Ants Control" },
  { icon: <GiBee className="text-4xl text-green-700" />, title: "Bees & Wasp Control" },
  { icon: <GiAmberMosquito className="text-4xl text-green-700" />, title: "Mosquito Control" },
  { icon: <GiCoconuts className="text-4xl text-green-700" />, title: "Cockroach Control" },
  { icon: <GiWoodPile className="text-4xl text-green-700" />, title: "Wood Borer Control" },
  { icon: <GiFlyingFlag className="text-4xl text-green-700" />, title: "Fleas Control" },
  { icon: <GiTerror className="text-4xl text-green-700" />, title: "Termite Control" },
  { icon: <GiBed className="text-4xl text-green-700" />, title: "Bed Bugs Control" },
  { icon: <GiRat className="text-4xl text-green-700" />, title: "Rodent Control" },
  { icon: <GiSpiderWeb className="text-4xl text-green-700" />, title: "Spiders Control" },
  { icon: <GiFly className="text-4xl text-green-700" />, title: "Flies Control" },
  { icon: <GiLiar className="text-4xl text-green-700" />, title: "Lizards Control" },
];

export default function Service() {
  const [visibleCount, setVisibleCount] = useState(6);

  const handleLoadMore = () => {
    setVisibleCount((prev) => Math.min(prev + 3, allServices.length));
  };

  return (
    <>
    <section
      className="relative py-20 text-center text-white bg-fixed bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bg})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-white opacity-85 z-0"></div>

      {/* Content */}
      <div className="relative z-10 px-4 max-w-7xl mx-auto">
        <h2 className="text-sm uppercase font-bold text-green-800 tracking-wider">
          Our <span className="text-green-600">Pest Control</span> Services
        </h2>
        <h3 className="text-3xl sm:text-5xl font-bold text-green-900 mt-2">
          Safe. Reliable. Eco-Friendly.
        </h3>
        <p className="text-gray-700 max-w-3xl mx-auto mt-4 mb-10 text-sm sm:text-base">
          Excel Pest Control offers specialized pest solutions for all types of infestations — from homes to businesses.
        </p>

        {/* Services Grid */}
        <div className="flex flex-wrap justify-center gap-6">
          {allServices.slice(0, visibleCount).map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="bg-white text-black shadow-md rounded-xl p-5 w-72 sm:w-80 flex flex-col items-center hover:shadow-lg transition duration-300"
            >
              {service.icon}
              <h4 className="text-lg font-semibold mt-3 text-green-800 uppercase text-center">
                {service.title}
              </h4>
              <p className="text-xs text-gray-600 mt-2 text-center">
                We offer expert treatment and protection for {service.title.toLowerCase()}.
              </p>
            </motion.div>
          ))}
        </div>

        {/* Load More Button */}
        {visibleCount < allServices.length && (
          <div className="mt-10">
            <button
              onClick={handleLoadMore}
              className="bg-green-700 text-white px-6 py-2 rounded-full hover:bg-green-800 transition"
            >
              Load More
            </button>
          </div>
        )}

        {/* CTA */}
        <p className="mt-10 text-gray-700">
          Ready to get rid of pests?{" "}
          <Link
            to="/contact"
            className="text-green-600 underline hover:text-green-800 transition"
          >
            Book Now
          </Link>
        </p>
      </div>
    </section>
     <div className="w-full h-[2px] bg-green-800"></div>
    </>
    
  );
}
