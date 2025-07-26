import React from "react";
import {
  FaCheckCircle,
  FaExclamationTriangle,
  FaCameraRetro,
  
} from "react-icons/fa";
import ServiceSlider from "../components/ServiceSlider";
import img1 from "../assets/images/service/mos.avif"
import img2 from "../assets/images/service/mos2.PNG"
import img3 from "../assets/images/service/mos3.PNG"
import img4 from "../assets/images/service/mos4.PNG"

export default function MosquitoControl() {
  return (
    <>
    <div className="bg-[#f3fdf7] text-[#1C1C1C]">
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-14">
        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-green-800 mb-4">
          Mosquito Control Services
        </h1>
        <p className="text-lg text-gray-700 leading-8 mb-8 max-w-4xl">
          Mosquitoes are more than just a nuisance — they are carriers of deadly
          diseases like dengue, malaria, and chikungunya. At Excel Pest Control,
          we deliver professional, safe, and eco-conscious mosquito control
          services tailored for both residential and commercial properties.
        </p>

        {/* Hero Highlight */}
        <div className="bg-gradient-to-br from-green-50 to-white border-l-4 border-green-600 p-6 rounded-xl shadow-md mb-10">
          <p className="text-lg font-semibold text-green-900">
            ✅ WHO Approved Chemicals | 💧 Larval Control | 🦟 Ultra Low Volume Fogging
          </p>
        </div>

        {/* Common Issues */}
        <div className="bg-white p-8 rounded-2xl shadow-lg mb-12">
          <h2 className="text-2xl font-bold text-green-700 mb-4">
            Common Mosquito Problems
          </h2>
          <ul className="space-y-4 text-gray-800">
            <li className="flex items-start gap-3">
              <FaExclamationTriangle className="text-red-600 mt-1" />
              Mosquito breeding in stagnant water around your home or office
            </li>
            <li className="flex items-start gap-3">
              <FaExclamationTriangle className="text-red-600 mt-1" />
              Regular mosquito bites causing skin rashes and irritation
            </li>
            <li className="flex items-start gap-3">
              <FaExclamationTriangle className="text-red-600 mt-1" />
              High mosquito presence at dusk and dawn, indoors and outdoors
            </li>
            <li className="flex items-start gap-3">
              <FaExclamationTriangle className="text-red-600 mt-1" />
              Risk of mosquito-borne diseases like Dengue, Malaria, and Zika
            </li>
          </ul>
        </div>

        {/* Process */}
        <div className="bg-[#f0fef4] p-8 rounded-2xl shadow-inner mb-12 border border-green-100">
          <h2 className="text-2xl font-bold text-green-800 mb-6">
            Our 3-Step Mosquito Control Process
          </h2>
          <ul className="space-y-5 text-gray-700">
            <li className="flex gap-3 items-start">
              <FaCheckCircle className="text-green-700 mt-1" />
              <div>
                <strong>Site Survey & Analysis:</strong> We locate breeding
                zones, water stagnation points, and mosquito entry routes.
              </div>
            </li>
            <li className="flex gap-3 items-start">
              <FaCheckCircle className="text-green-700 mt-1" />
              <div>
                <strong>Larvicide & Chemical Control:</strong> We use
                water-based larvicides and odorless adulticides to eliminate
                breeding and active mosquitoes.
              </div>
            </li>
            <li className="flex gap-3 items-start">
              <FaCheckCircle className="text-green-700 mt-1" />
              <div>
                <strong>Fogging & Monitoring:</strong> ULV fogging ensures wide
                coverage across lawns, balconies, corridors, and storage areas.
              </div>
            </li>
          </ul>
        </div>

        {/* Why Excel Pest Control */}
        <div className="bg-white p-8 rounded-2xl shadow-xl mb-12">
          <h2 className="text-2xl font-bold text-green-700 mb-4">
            Why Choose Excel for Mosquito Control?
          </h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-800">
            <li className="flex items-start gap-3">
              <FaCheckCircle className="text-green-700 mt-1" />
              Trained & certified technicians with vector biology knowledge
            </li>
            <li className="flex items-start gap-3">
              <FaCheckCircle className="text-green-700 mt-1" />
              Eco-friendly, odorless & child-safe treatments
            </li>
            <li className="flex items-start gap-3">
              <FaCheckCircle className="text-green-700 mt-1" />
              Flexible AMC plans & one-time treatments available
            </li>
            <li className="flex items-start gap-3">
              <FaCheckCircle className="text-green-700 mt-1" />
              Trusted by hospitals, hotels, schools & gated societies
            </li>
          </ul>
        </div>

        {/* 🖼️ Gallery Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-green-800 flex items-center gap-2 mb-6">
            <FaCameraRetro className="text-green-700" />
            Recent Mosquito Control Projects
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <img
              src={img1}
              alt="Fogging in residential society"
              className="rounded-xl shadow-md object-cover h-52 w-full"
            />
            <img
              src={img2}
              alt="Mosquito treatment indoor"
              className="rounded-xl shadow-md object-cover h-52 w-full"
            />
            <img
              src={img3}
              alt="Mosquito breeding area treatment"
              className="rounded-xl shadow-md object-cover h-52 w-full"
            />
            <img
              src={img4}
              alt="Larvicide treatment in water tank"
              className="rounded-xl shadow-md object-cover h-52 w-full"
            />
          </div>
        </div>

        {/* Emergency CTA */}
        <div className="bg-gradient-to-r from-green-100 to-green-50 p-8 rounded-2xl border border-green-300 shadow-lg mb-8">
          <h2 className="text-xl font-bold text-green-900 mb-2">
            Mosquito Outbreak at Your Place?
          </h2>
          <p className="text-gray-800 mb-4">
            Don’t wait till it's too late. Our emergency mosquito control
            response teams are ready to act within hours.
          </p>
          <div className="flex gap-4 flex-wrap">
            <a
              href="tel:+919811776506"
              className="bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-full font-semibold transition"
            >
              📞 Call +91 98117 76506
            </a>
            <a
              href="/contact"
              className="border-2 border-green-700 text-green-800 px-6 py-3 rounded-full font-semibold hover:bg-green-700 hover:text-white transition"
            >
              📩 Book a Mosquito Inspection
            </a>
          </div>
        </div>

        {/* Final Note */}
        <div className="text-center text-sm py-5 text-gray-500">
          Excel Pest Control – Safe Living Starts With Us. ISO Certified Service Since 2017.
        </div>
      </section>
    </div>
     <ServiceSlider/>
    </>
  );
}
