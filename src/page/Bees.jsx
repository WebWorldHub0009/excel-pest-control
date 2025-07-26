import React from "react";
import { FaCheckCircle, FaExclamationTriangle, FaCameraRetro } from "react-icons/fa";
import ServiceSlider from "../components/ServiceSlider";
import img1 from "../assets/images/service/b1.jpg"
import img2 from "../assets/images/service/b2.jpg"
import img3 from "../assets/images/service/b3.jpg"
import img4 from "../assets/images/service/b4.jpg"

export default function BeesWaspControl() {
  return (
    <>
    <div className="bg-[#f3fdf7] text-[#1C1C1C]">
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-14">
        <h1 className="text-4xl md:text-5xl font-extrabold text-green-800 mb-4">
          Bees & Wasp Control Services
        </h1>
        <p className="text-lg text-gray-700 leading-8 mb-8 max-w-4xl">
          Bees and wasps are nature’s pollinators — but when they establish nests near homes or commercial properties, they become a serious threat. At Excel Pest Control, we offer responsible, effective, and child-safe solutions to keep you protected while maintaining environmental integrity.
        </p>

        {/* Hero Highlight */}
        <div className="bg-gradient-to-br from-green-50 to-white border-l-4 border-green-600 p-6 rounded-xl shadow-md mb-10">
          <p className="text-lg font-semibold text-green-900">
            ✅ 100% Safe | 🧪 Eco-Friendly | 🚫 Zero Damage to Structure
          </p>
        </div>

        {/* Common Issues */}
        <div className="bg-white p-8 rounded-2xl shadow-lg mb-12">
          <h2 className="text-2xl font-bold text-green-700 mb-4">Common Issues You Might Face</h2>
          <ul className="space-y-4 text-gray-800">
            <li className="flex items-start gap-3">
              <FaExclamationTriangle className="text-red-600 mt-1" />
              Bees nesting under roofs, sheds, and attics — hidden and dangerous
            </li>
            <li className="flex items-start gap-3">
              <FaExclamationTriangle className="text-red-600 mt-1" />
              Aggressive wasp activity around outdoor areas and gardens
            </li>
            <li className="flex items-start gap-3">
              <FaExclamationTriangle className="text-red-600 mt-1" />
              Increased sting risks, especially for kids and pets
            </li>
            <li className="flex items-start gap-3">
              <FaExclamationTriangle className="text-red-600 mt-1" />
              Property damage from nesting inside cavities or walls
            </li>
          </ul>
        </div>

        {/* Process */}
        <div className="bg-[#f0fef4] p-8 rounded-2xl shadow-inner mb-12 border border-green-100">
          <h2 className="text-2xl font-bold text-green-800 mb-6">How We Work</h2>
          <ul className="space-y-5 text-gray-700">
            <li className="flex gap-3 items-start">
              <FaCheckCircle className="text-green-700 mt-1" />
              <div>
                <strong>Detailed Site Inspection:</strong> Our technicians assess species, entry points, and nest size.
              </div>
            </li>
            <li className="flex gap-3 items-start">
              <FaCheckCircle className="text-green-700 mt-1" />
              <div>
                <strong>Professional Nest Removal:</strong> Using targeted and eco-safe treatments, we neutralize colonies without harming the surroundings.
              </div>
            </li>
            <li className="flex gap-3 items-start">
              <FaCheckCircle className="text-green-700 mt-1" />
              <div>
                <strong>Prevention & Sealing:</strong> After removal, we seal cracks and provide aftercare advice to ensure no re-infestation.
              </div>
            </li>
          </ul>
        </div>

        {/* Why Choose Us */}
        <div className="bg-white p-8 rounded-2xl shadow-xl mb-12">
          <h2 className="text-2xl font-bold text-green-700 mb-4">Why Excel Pest Control?</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-800">
            <li className="flex items-start gap-3">
              <FaCheckCircle className="text-green-700 mt-1" />
              Government licensed and highly trained pest experts
            </li>
            <li className="flex items-start gap-3">
              <FaCheckCircle className="text-green-700 mt-1" />
              Odorless and herbal pest solutions available
            </li>
            <li className="flex items-start gap-3">
              <FaCheckCircle className="text-green-700 mt-1" />
              Quick response team – same-day service in South Delhi
            </li>
            <li className="flex items-start gap-3">
              <FaCheckCircle className="text-green-700 mt-1" />
              Affordable and transparent pricing – no hidden charges
            </li>
          </ul>
        </div>

        {/* 🖼️ Gallery Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-green-800 flex items-center gap-2 mb-6">
            <FaCameraRetro className="text-green-700" />
            Proof of Protection – Recent Bees/Wasp Jobs
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <img
              src={img1}
              alt="Bee nest removal 1"
              className="rounded-xl shadow-md object-cover h-52 w-full"
            />
            <img
              src={img2}
              alt="Wasp control on roof"
              className="rounded-xl shadow-md object-cover h-52 w-full"
            />
            <img
              src={img3}
              alt="Excel team removing nest"
              className="rounded-xl shadow-md object-cover h-52 w-full"
            />
            <img
              src={img4}
              alt="Wasps treated in attic"
              className="rounded-xl shadow-md object-cover h-52 w-full"
            />
          </div>
        </div>

        {/* Emergency Help */}
        <div className="bg-gradient-to-r from-green-100 to-green-50 p-8 rounded-2xl border border-green-300 shadow-lg mb-8">
          <h2 className="text-xl font-bold text-green-900 mb-2">Need Immediate Help?</h2>
          <p className="text-gray-800 mb-4">
            Our emergency teams are ready to handle any bee or wasp threat within hours. Don't wait for the situation to get worse. Your safety is our priority.
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
              📩 Book an Inspection
            </a>
          </div>
        </div>

        {/* Final Tip */}
        <div className="text-center text-sm py-5 text-gray-500">
          Excel Pest Control – Serving Homes, Restaurants, Hospitals & Offices since 2017
        </div>
      </section>
    </div>
    <ServiceSlider/>
    </>
  );
}
