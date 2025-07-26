import React, { useState } from "react";
import {
  FaBug, FaSearch, FaShieldAlt, FaLeaf, FaHome, FaCheckCircle,
} from "react-icons/fa";
import { MdPestControlRodent, MdOutlineHealthAndSafety } from "react-icons/md";
import { GiWoodPile, GiChemicalDrop } from "react-icons/gi";

const services = [
  {
    title: "Herbal Pest Control",
    icon: <FaLeaf />,
    desc: "Eco-friendly herbal pest control services that are safe for children and pets. Designed for sustainable pest eradication.",
  },
  {
    title: "Household Pest Control",
    icon: <FaHome />,
    desc: "We eliminate cockroaches, ants, and other pests invading your home. Our household treatment is safe and effective.",
  },
  {
    title: "Bed Bugs Treatment",
    icon: <FaBug />,
    desc: "Advanced thermal and chemical treatment to remove bed bugs from every corner, ensuring restful nights.",
  },
  {
    title: "Antiwood Bugs & Termite",
    icon: <GiWoodPile />,
    desc: "Our anti-wood bug and termite treatment protects your valuable furniture and structure from wood-eating insects.",
  },
  {
    title: "Reticulated Termite System",
    icon: <GiChemicalDrop />,
    desc: "Pre and post-construction termite control with pipe injection systems ensuring long-term protection.",
  },
  {
    title: "Rodent Control",
    icon: <MdPestControlRodent />,
    desc: "Intelligent and safe rodent control plans customized for your space and needs.",
  },
  {
    title: "Mosquito & Fly Control",
    icon: <FaShieldAlt />,
    desc: "Effective solutions against mosquitoes and flies using fogging, spraying, and growth regulator techniques.",
  },
  {
    title: "Export Fragmentation",
    icon: <MdOutlineHealthAndSafety />,
    desc: "Certified export packaging disinfestation ensuring compliance with international fumigation standards.",
  },
];

export default function PestControlServices() {
  const [query, setQuery] = useState("");

  const filteredServices = services.filter(service =>
    service.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-lime-50 to-green-100 text-gray-800">
      {/* Header */}
      <div className="text-center py-10">
        <h1 className="text-4xl md:text-5xl font-bold text-green-800">Our Pest Control Services</h1>
        <p className="text-lg mt-2 text-gray-600">Reliable • Safe • Premium Protection</p>
      </div>

      {/* Layout */}
      <div className="max-w-7xl mx-auto px-4 md:flex gap-6 pb-16">
        {/* Sidebar */}
        <aside className="w-full md:w-1/4 bg-white shadow-lg rounded-xl p-6 mb-6 md:mb-0 border border-lime-200">
          <h2 className="text-xl font-semibold mb-4 text-green-700">Service Categories</h2>
          <ul className="space-y-3 text-green-900 font-medium">
            {services.map((s, i) => (
              <li key={i} className="flex items-center gap-2 hover:text-green-600 transition">
                <FaCheckCircle className="text-green-500" />
                {s.title}
              </li>
            ))}
          </ul>
        </aside>

        {/* Content */}
        <main className="w-full md:w-3/4">
          {/* Search */}
          <div className="flex items-center gap-3 mb-6">
            <FaSearch className="text-green-700 text-xl" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search service..."
              className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {filteredServices.map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-md border border-green-100 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="text-4xl text-green-700 mb-4 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-semibold text-green-800 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
