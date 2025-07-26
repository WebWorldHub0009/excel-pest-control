import React from "react";
import {
  FaExclamationTriangle,
  FaCheckCircle,
  FaBug,
  FaVirus,
  FaMicroscope,
  FaCameraRetro,
} from "react-icons/fa";
import ServiceSlider from "../components/ServiceSlider";
import img1 from "../assets/images/service/wood1.jpg"
import img2 from "../assets/images/service/wood2.jpg"
import img3 from "../assets/images/service/wood3.jpg"



export default function WoodBorerControl() {
  return (
    <>
    <div className="w-full bg-[#f3fdf7] text-[#1C1C1C]">
      {/* Top Section */}
      <div className="max-w-6xl mx-auto py-10 px-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#006644]">
          Wood Borer Control Services
        </h1>
        <p className="text-lg md:text-xl text-gray-800">
          Protect your valuable wooden furniture, doors, and structures from destructive wood borers with our specialized pest control treatments.
        </p>
      </div>

      {/* Description Section */}
      <div className="max-w-6xl mx-auto px-6 space-y-6">
        <p className="text-md text-gray-700 leading-relaxed">
          Wood borers are tiny insects that can cause extensive damage to wooden items by burrowing and laying eggs inside them. These pests can remain unnoticed until significant harm is done. Infestations weaken wood from within and lead to costly repairs. Our trained experts provide targeted and safe solutions to detect, eliminate, and protect against wood borer attacks.
        </p>

        {/* Highlight Box */}
        <div className="bg-green-100 border-l-4 border-green-800 p-6 shadow rounded">
          <p className="text-md font-semibold text-green-900">
            Our wood borer treatment uses odorless, eco-safe chemicals that penetrate deep into the wood and eliminate eggs, larvae, and adult pests.
          </p>
        </div>

        {/* Signs of Infestation */}
        <div className="bg-white shadow-md rounded p-6">
          <h2 className="text-2xl font-semibold mb-4 flex items-center text-[#006644] gap-2">
            <FaExclamationTriangle /> Signs of Wood Borer Infestation
          </h2>
          <ul className="list-disc ml-6 space-y-2 text-gray-700">
            <li>Fine powder (frass) around wooden surfaces</li>
            <li>Small round exit holes on wood</li>
            <li>Cracking, blistering, or weakening of wood</li>
            <li>Damaged or hollow-sounding furniture</li>
            <li>Dead adult borers near windows or light sources</li>
          </ul>
        </div>

        {/* Diseases / Impact */}
        <div className="mt-10">
          <h2 className="text-2xl font-semibold mb-4 flex items-center text-[#006644] gap-2">
            <FaVirus /> Dangers of Ignoring Wood Borer Damage
          </h2>
          <ul className="space-y-2 text-gray-700 list-disc ml-6">
            <li>Structural weakening of wooden beams and flooring</li>
            <li>Irreparable damage to antique furniture</li>
            <li>Reduced property value and safety hazards</li>
            <li>Costly replacements if left untreated</li>
          </ul>
        </div>

        {/* Treatment Process */}
        <div className="mt-10">
          <h2 className="text-2xl font-semibold mb-4 text-[#006644] flex items-center gap-2">
            <FaCheckCircle /> Our Wood Borer Treatment Process
          </h2>
          <ol className="list-decimal ml-6 space-y-2 text-gray-700">
            <li>Detailed inspection of wooden assets and affected zones</li>
            <li>Application of specialized chemicals using syringe injection</li>
            <li>Surface coating with wood-preservative solutions</li>
            <li>Monitoring and post-treatment checks</li>
          </ol>
        </div>

        {/* Why Choose Us */}
        <div className="mt-10 bg-green-100 p-6 rounded shadow">
          <h2 className="text-2xl font-semibold text-[#006644] mb-4">
            Why Choose Our Service?
          </h2>
          <ul className="list-disc ml-6 text-gray-800 space-y-2">
            <li>Advanced odorless and child-safe solutions</li>
            <li>Technicians with specialized wood borer experience</li>
            <li>Customized treatment plans</li>
            <li>Complete protection for your wooden valuables</li>
          </ul>
        </div>

        {/* Gallery */}
        <div className="mt-10">
          <h2 className="text-2xl font-semibold mb-4 text-[#006644] flex items-center gap-2">
            <FaCameraRetro /> Treatment in Action
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <img
              src={img1}
              alt="Wood Borer Control 1"
              className="rounded shadow h-52 object-cover w-full"
            />
            <img
              src={img2}
              alt="Wood Borer Control 2"
              className="rounded shadow h-52 object-cover w-full"
            />
            <img
              src={img3}
              alt="Wood Borer Control 3"
              className="rounded shadow h-52 object-cover w-full"
            />
          </div>
        </div>

        {/* Emergency CTA */}
        <div className="bg-gradient-to-r from-green-100 to-green-50 p-8 rounded-2xl border border-green-300 shadow-lg mb-8">
          <h2 className="text-xl font-bold text-green-900 mb-2">
            Suspect Wood Borer Activity?
          </h2>
          <p className="text-gray-800 mb-4">
            Act now before the damage spreads. Our team can treat and save your wooden assets with expert care.
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
      </div>
      <div className="text-center text-sm py-5 text-gray-500">
          Excel Pest Control – Safe Living Starts With Us. ISO Certified Service Since 2017.
        </div>
    </div>
     <ServiceSlider/>
    </>
  );
}
