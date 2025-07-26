import React from "react";
import {
  FaExclamationTriangle,
  FaCheckCircle,
  FaBug,
  FaHammer,
  FaShieldAlt,
  FaCameraRetro,
} from "react-icons/fa";
import ServiceSlider from "../components/ServiceSlider";
import img1 from "../assets/images/service/ter1.jpeg"
import img2 from "../assets/images/service/ter2.jpeg"
import img3 from "../assets/images/service/ter3.jpeg"



export default function TermiteControl() {
  return (
    <>
    <div className="w-full bg-[#f3fdf7] text-[#1C1C1C]">
      {/* Top Section */}
      <div className="max-w-6xl mx-auto py-10 px-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#006644]">
          Termite Control Services
        </h1>
        <p className="text-lg md:text-xl text-gray-800">
          Protect your property from costly damage with our advanced anti-termite treatments and monitoring systems.
        </p>
      </div>

      {/* Description Section */}
      <div className="max-w-6xl mx-auto px-6 space-y-6">
        <p className="text-md text-gray-700 leading-relaxed">
          Termites silently destroy your furniture, wooden structures, and even books or documents. Their activity often goes unnoticed until significant damage has been done. Our trained professionals use advanced drilling and chemical barrier techniques to detect and eliminate termite colonies at the source.
        </p>

        {/* Highlight Box */}
        <div className="bg-green-100 border-l-4 border-green-800 p-6 shadow rounded">
          <p className="text-md font-semibold text-green-900">
            We offer both pre-construction and post-construction termite treatments with eco-friendly, odourless solutions.
          </p>
        </div>

        {/* Structural Risks */}
        <div className="bg-white shadow-md rounded p-6">
          <h2 className="text-2xl font-semibold mb-4 flex items-center text-[#006644] gap-2">
            <FaHammer /> Damage Caused by Termites
          </h2>
          <ul className="list-disc ml-6 space-y-2 text-gray-700">
            <li>Weakened foundations and wall structures</li>
            <li>Destroyed wooden furniture, doors, and flooring</li>
            <li>Severe damage to paper files, books, and artwork</li>
            <li>Invisible underground infestation spreading across rooms</li>
            <li>Long-term financial loss and safety hazards</li>
          </ul>
        </div>

        {/* Signs of Infestation */}
        <div className="mt-10">
          <h2 className="text-2xl font-semibold mb-4 flex text-[#006644] items-center gap-2">
            <FaExclamationTriangle /> Warning Signs of Termite Infestation
          </h2>
          <ul className="space-y-2 text-gray-700 list-disc ml-6">
            <li>Hollow sounding wood or damaged furniture</li>
            <li>Swarming winged termites near lights or windows</li>
            <li>Tiny mud tubes on walls or furniture</li>
            <li>Discarded wings near doors or windowsills</li>
          </ul>
        </div>

        {/* Process */}
        <div className="mt-10">
          <h2 className="text-2xl font-semibold mb-4 text-[#006644] flex items-center gap-2">
            <FaCheckCircle /> Our Anti-Termite Treatment Process
          </h2>
          <ol className="list-decimal ml-6 space-y-2 text-gray-700">
            <li>Detailed inspection using moisture meters and probes</li>
            <li>Drilling and chemical injection in walls, floors, and baseboards</li>
            <li>Trenching around foundation for soil treatment (for external areas)</li>
            <li>Sealing entry points and providing post-treatment report</li>
            <li>Optional yearly AMC for continued protection</li>
          </ol>
        </div>

        {/* Why Choose Us */}
        <div className="mt-10 bg-green-100 p-6 rounded shadow">
          <h2 className="text-2xl font-semibold text-[#006644] mb-4">Why Choose Our Service?</h2>
          <ul className="list-disc ml-6 text-gray-800 space-y-2">
            <li>Government approved chemicals & certified technicians</li>
            <li>Complete home/office protection with 1–5 year warranty options</li>
            <li>No damage to walls or interiors during application</li>
            <li>Emergency same-day inspections available</li>
          </ul>
        </div>

        {/* Gallery */}
        <div className="mt-10">
          <h2 className="text-2xl font-semibold mb-4 text-[#006644] flex items-center gap-2">
            <FaCameraRetro /> Termite Elimination in Action
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <img src={img1} alt="Termite Control 1" className="rounded shadow h-52 object-cover w-full" />
            <img src={img2} alt="Termite Control 2" className="rounded shadow h-52 object-cover w-full" />
            <img src={img3} alt="Termite Control 3" className="rounded shadow h-52 object-cover w-full" />
          </div>
        </div>

        {/* Emergency CTA */}
        <div className="bg-gradient-to-r from-green-100 to-green-50 p-8 rounded-2xl border border-green-300 shadow-lg mb-8 mt-10">
          <h2 className="text-xl font-bold text-green-900 mb-2">
            Suspect Termites at Your Place?
          </h2>
          <p className="text-gray-800 mb-4">
            Termites work silently—don’t wait for visible damage. Our team can inspect and start treatment immediately.
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

        {/* Footer Note */}
        <p className="text-sm text-center py-5 mb-5 text-gray-500 mt-10">
        Excel Pest Control – Trusted Termite Solution Experts in India for Over a Decade.
        </p>
      </div>
    </div>
     <ServiceSlider/>
    </>
  );
}
