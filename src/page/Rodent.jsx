import React from "react";
import { FaExclamationTriangle, FaCheckCircle, FaBug, FaVirus, FaMicroscope, FaCameraRetro, FaSkullCrossbones } from "react-icons/fa";
import { GiRat, GiChewedSkull, GiDeadHead, GiPoisonBottle } from "react-icons/gi";
import ServiceSlider from "../components/ServiceSlider";

import img1 from "../assets/images/service/rat1.jpg"
import img2 from "../assets/images/service/rat2.jpg"
import img3 from "../assets/images/service/rat3.jpeg"


export default function RodentControl() {
  return (
    <>
    <div className="w-full bg-[#f3fdf7] text-[#1C1C1C]">
      {/* Top Section */}
      <div className="max-w-6xl mx-auto py-10 px-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#006644]">Rodent Control Services</h1>
        <p className="text-lg md:text-xl text-gray-800">
          Protect your space from disease-spreading rats and mice with our expert rodent control solutions.
        </p>
      </div>

      {/* Description Section */}
      <div className="max-w-6xl mx-auto px-6 space-y-6">
        <p className="text-md text-gray-700 leading-relaxed">
          Rodents not only damage property by gnawing through wires, wood, and insulation, but they also spread numerous diseases through their droppings, urine, and bites. Our trained technicians use a combination of baiting, trapping, and sealing to ensure your home or workplace is rodent-free and protected long term.
        </p>

        {/* Highlight Box */}
        <div className="bg-green-100 border-l-4 border-green-800 p-6 shadow rounded">
          <p className="text-md font-semibold text-green-900">
            Our safe, humane, and eco-friendly rodent control ensures long-lasting protection without harming pets or children.
          </p>
        </div>

        {/* Diseases Section */}
        <div className="bg-white shadow-md rounded p-6">
          <h2 className="text-2xl font-semibold mb-4 flex items-center text-[#006644] gap-2"><FaVirus /> Diseases Caused by Rodents</h2>
          <ul className="list-disc ml-6 space-y-2 text-gray-700">
            <li>Leptospirosis</li>
            <li>Hantavirus</li>
            <li>Plague</li>
            <li>Salmonellosis</li>
            <li>Rat-bite Fever</li>
            <li>Tularemia</li>
            <li>Lymphocytic choriomeningitis (LCM)</li>
          </ul>
        </div>

        {/* Problems You Face */}
        <div className="mt-10">
          <h2 className="text-2xl font-semibold mb-4 flex text-[#006644] items-center gap-2"><FaExclamationTriangle /> Common Rodent Problems</h2>
          <ul className="space-y-2 text-gray-700 list-disc ml-6">
            <li>Chewed wires causing short circuits</li>
            <li>Foul smell due to rodent droppings and urine</li>
            <li>Scratching noises inside walls or ceilings</li>
            <li>Contaminated food and kitchen surfaces</li>
            <li>Rapid reproduction leading to large infestations</li>
          </ul>
        </div>

        {/* Process */}
        <div className="mt-10">
          <h2 className="text-2xl font-semibold mb-4 text-[#006644] flex items-center gap-2"><FaCheckCircle /> Our Rodent Treatment Process</h2>
          <ol className="list-decimal ml-6 space-y-2 text-gray-700">
            <li>Site inspection to assess rodent entry and nesting points</li>
            <li>Placement of bait stations and traps at strategic locations</li>
            <li>Use of tamper-proof traps to ensure safety for kids and pets</li>
            <li>Sealing of holes, gaps, and entry points</li>
            <li>Monitoring and follow-up to ensure total elimination</li>
          </ol>
        </div>

        {/* Why Choose Us */}
        <div className="mt-10 bg-green-100 p-6 rounded shadow">
          <h2 className="text-2xl font-semibold text-[#006644] mb-4">Why Choose Our Service?</h2>
          <ul className="list-disc ml-6 text-gray-800 space-y-2">
            <li>Certified rodent control experts with years of experience</li>
            <li>Safe and pet-friendly baiting techniques</li>
            <li>Comprehensive proofing and prevention service</li>
            <li>Guaranteed service results with regular follow-up</li>
          </ul>
        </div>

        {/* Gallery */}
        <div className="mt-10">
          <h2 className="text-2xl font-semibold mb-4 text-[#006644] flex items-center gap-2"><FaCameraRetro /> Treatment in Action</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <img src={img1} alt="Rodent Control 1" className="rounded shadow h-52 object-cover w-full" />
            <img src={img2} alt="Rodent Control 2" className="rounded shadow h-52 object-cover w-full" />
            <img src={img3} alt="Rodent Control 3" className="rounded shadow h-52 object-cover w-full" />
          </div>
        </div>

        {/* Emergency CTA */}
        <div className="bg-gradient-to-r from-green-100 to-green-50 p-8 rounded-2xl border border-green-300 shadow-lg mb-8 mt-10">
          <h2 className="text-xl font-bold text-green-900 mb-2">
            Rodent Infestation Problem?
          </h2>
          <p className="text-gray-800 mb-4">
            Don’t wait until they cause major damage. Our emergency pest control team is available 24/7.
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
        <p className="text-sm text-center py-5 text-gray-500 mt-10">
          Your safety and hygiene is our top priority. Excel Pest Control – Trusted Since 2017.
        </p>
      </div>
    </div>
     <ServiceSlider/>
    </>
  );
}
