import React from "react";
import { Link } from "react-router-dom";
import { FaLeaf, FaUserShield, FaShieldAlt, FaMagic } from "react-icons/fa";

export default function WhyChooseUs() {
  const reasons = [
    {
      icon: <FaLeaf size={32} />,
      title: "Eco-Friendly Solutions",
      desc: "We use certified herbal products that are safe for families, pets, and the planet, while effectively eliminating pests.",
      active: true,
    },
    {
      icon: <FaMagic size={32} />,
      title: "Customized Treatment",
      desc: "Our specialists tailor treatment plans to your specific pest issues, property type, and environmental conditions.",
    },
    {
      icon: <FaUserShield size={32} />,
      title: "Certified Professionals",
      desc: "Our expert technicians are licensed, background-checked, and highly trained in modern, herbal-based pest control.",
    },
    {
      icon: <FaShieldAlt size={32} />,
      title: "Guaranteed Results",
      desc: "We ensure long-term protection with follow-ups and warranties, giving you complete peace of mind.",
    },
  ];

  return (
    <section className="bg-[#e7fae7] py-16 px-4 sm:px-8 md:px-16 lg:px-24 text-[#0d1f0d]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
          <div>
            <h2 className="text-4xl font-bold text-green-800 mb-2">
              Why Choose Excel Pest Control?
            </h2>
            <p className="text-lg text-gray-800 max-w-xl">
              Safe. Herbal. Guaranteed. Discover what makes us the trusted choice for thousands of pest-free homes and businesses.
            </p>
          </div>

          <Link
            to="/contact"
            className="bg-green-800 text-white px-6 py-3 rounded-full hover:bg-green-700 transition shadow-md font-semibold"
          >
            Contact Us
          </Link>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {reasons.map((reason, idx) => (
            <div
              key={idx}
              className={`rounded-2xl p-6 flex flex-col justify-between items-center text-center shadow-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl h-[50vh] ${
                reason.active
                  ? "bg-green-800 text-white"
                  : "bg-[#d4f3cc] text-green-900"
              } animate-fade-in`}
            >
              {/* Icon */}
              <div
                className={`w-14 h-14 flex items-center justify-center rounded-full mb-5 shadow-md ${
                  reason.active
                    ? "bg-white text-green-800"
                    : "bg-green-800 text-white"
                }`}
              >
                {reason.icon}
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 justify-between">
                <h3 className="text-xl font-semibold mb-3">{reason.title}</h3>
                <p className="text-sm leading-relaxed">{reason.desc}</p>
              </div>

              {/* Button */}
              <Link
                to="/contact"
                className={`mt-6 px-5 py-2 rounded-full font-medium transition shadow ${
                  reason.active
                    ? "bg-white text-green-800 hover:bg-green-100"
                    : "bg-green-800 text-white hover:bg-green-700"
                }`}
              >
                Learn More
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Animation Keyframes (Tailwind CSS Custom Classes) */}
      <style>
        {`
          @keyframes fade-in {
            0% { opacity: 0; transform: translateY(20px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in {
            animation: fade-in 0.6s ease-in-out both;
          }
        `}
      </style>
    </section>
  );
}
