import React from "react";
import {
  FaExclamationTriangle,
  FaCheckCircle,
  FaBug,
  FaVirus,
  FaMicroscope,
  FaCameraRetro
} from "react-icons/fa";
import ServiceSlider from "../components/ServiceSlider";

export default function FleasControl() {
  return (
    <>
    <div className="w-full bg-[#f3fdf7] text-[#1C1C1C]">
      {/* Top Section */}
      <div className="max-w-6xl mx-auto py-10 px-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#006644]">
          Fleas Control Services
        </h1>
        <p className="text-lg md:text-xl text-gray-800">
          Say goodbye to itchy bites and discomfort. Our expert flea control services ensure a safe, flea-free environment for your home and pets.
        </p>
      </div>

      {/* Description Section */}
      <div className="max-w-6xl mx-auto px-6 space-y-6">
        <p className="text-md text-gray-700 leading-relaxed">
          Fleas are small, wingless parasites that feed on the blood of animals and humans. These pests often hitchhike on pets and spread rapidly throughout the home. A single female flea can lay hundreds of eggs in its lifetime, making prompt control essential.
        </p>

        {/* Highlight Box */}
        <div className="bg-green-100 border-l-4 border-green-800 p-6 shadow rounded">
          <p className="text-md font-semibold text-green-900">
            Our non-toxic, pet-safe treatments effectively eliminate fleas at all life stages—eggs, larvae, and adults.
          </p>
        </div>

        {/* Health Risks Section */}
        <div className="bg-white shadow-md rounded p-6">
          <h2 className="text-2xl font-semibold mb-4 flex items-center text-[#006644] gap-2">
            <FaVirus /> Health Risks & Issues Due to Fleas
          </h2>
          <ul className="list-disc ml-6 space-y-2 text-gray-700">
            <li>Intense itching and allergic reactions</li>
            <li>Flea Allergy Dermatitis (FAD) in pets</li>
            <li>Tapeworm infections from flea ingestion</li>
            <li>Bacterial infections due to excessive scratching</li>
            <li>Transmission of murine typhus and plague (rare but possible)</li>
          </ul>
        </div>

        {/* Signs of Infestation */}
        <div className="mt-10">
          <h2 className="text-2xl font-semibold mb-4 flex text-[#006644] items-center gap-2">
            <FaExclamationTriangle /> Signs of Flea Infestation
          </h2>
          <ul className="space-y-2 text-gray-700 list-disc ml-6">
            <li>Excessive scratching or biting in pets</li>
            <li>Visible small insects hopping on carpet or furniture</li>
            <li>Flea dirt (black pepper-like particles) in pet fur or bedding</li>
            <li>Red bite marks on ankles or legs</li>
          </ul>
        </div>

        {/* Process */}
        <div className="mt-10">
          <h2 className="text-2xl font-semibold mb-4 text-[#006644] flex items-center gap-2">
            <FaCheckCircle /> Our Flea Treatment Process
          </h2>
          <ol className="list-decimal ml-6 space-y-2 text-gray-700">
            <li>Thorough inspection of indoor and outdoor spaces</li>
            <li>Application of insect growth regulators (IGRs)</li>
            <li>Steam or chemical treatment of bedding, carpets, cracks</li>
            <li>Pet-safe follow-up sprays and foggers</li>
          </ol>
        </div>

        {/* Why Choose Us */}
        <div className="mt-10 bg-green-100 p-6 rounded shadow">
          <h2 className="text-2xl font-semibold text-[#006644] mb-4">
            Why Trust Our Flea Control?
          </h2>
          <ul className="list-disc ml-6 text-gray-800 space-y-2">
            <li>100% safe for pets and children</li>
            <li>Experienced flea treatment specialists</li>
            <li>Guaranteed follow-up visits</li>
            <li>Affordable packages with long-term results</li>
          </ul>
        </div>

        {/* Gallery */}
        <div className="mt-10">
          <h2 className="text-2xl font-semibold mb-4 text-[#006644] flex items-center gap-2">
            <FaCameraRetro /> Real Treatment in Progress
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <img src="/images/flea1.jpg" alt="Flea Control 1" className="rounded shadow h-52 object-cover w-full" />
            <img src="/images/flea2.jpg" alt="Flea Control 2" className="rounded shadow h-52 object-cover w-full" />
            <img src="/images/flea3.jpg" alt="Flea Control 3" className="rounded shadow h-52 object-cover w-full" />
          </div>
        </div>

        {/* Emergency CTA */}
        <div className="bg-gradient-to-r from-green-100 to-green-50 p-8 rounded-2xl border border-green-300 shadow-lg mb-8">
          <h2 className="text-xl font-bold text-green-900 mb-2">
            Fleas Getting Out of Control?
          </h2>
          <p className="text-gray-800 mb-4">
            Don’t let fleas bite into your comfort. Book an emergency visit now and reclaim a peaceful, pest-free home.
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
              📩 Book a Slot
            </a>
          </div>
        </div>

        {/* Footer Note */}
        <p className="text-sm text-center mb-5 py-5 text-gray-500 mt-10">
          Excel Pest Control – Protecting pets, families & homes for over 8+ years.
        </p>
      </div>
    </div>
     <ServiceSlider/>
    </>
  );
}
