import React from "react";
import { FaExclamationTriangle, FaCheckCircle, FaBug, FaVirus, FaMicroscope, FaCameraRetro } from "react-icons/fa";
import ServiceSlider from "../components/ServiceSlider";
import img1 from "../assets/images/service/fles1.jpeg"
import img2 from "../assets/images/service/fles2.jpeg"
import img3 from "../assets/images/service/fles3.jpeg"

export default function FliesControl() {
  return (
    <>
    <div className="w-full bg-[#f3fdf7] text-[#1C1C1C]">
      {/* Top Section */}
      <div className="max-w-6xl mx-auto py-10 px-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#006644]">Flies Control Services</h1>
        <p className="text-lg md:text-xl text-gray-800">
          Get rid of disease-spreading flies from your environment with our safe, professional, and effective fly control treatments.
        </p>
      </div>

      {/* Description Section */}
      <div className="max-w-6xl mx-auto px-6 space-y-6">
        <p className="text-md text-gray-700 leading-relaxed">
          Flies are not just annoying—they are carriers of dangerous pathogens. These pests breed in decaying organic matter, garbage, and sewage, making them a serious threat to hygiene. Our experienced team uses eco-safe spraying and trap methods to manage and eliminate fly infestations indoors and outdoors.
        </p>

        {/* Highlight Box */}
        <div className="bg-green-100 border-l-4 border-green-800 p-6 shadow rounded">
          <p className="text-md font-semibold text-green-900">
            Our non-toxic and odourless treatment ensures that flies are removed effectively while keeping the safety of your family and pets intact.
          </p>
        </div>

        {/* Diseases Section */}
        <div className="bg-white shadow-md rounded p-6">
          <h2 className="text-2xl font-semibold mb-4 flex items-center text-[#006644] gap-2"><FaVirus /> Diseases Caused by Flies</h2>
          <ul className="list-disc ml-6 space-y-2 text-gray-700">
            <li>Typhoid</li>
            <li>Cholera</li>
            <li>Dysentery</li>
            <li>Gastroenteritis</li>
            <li>Eye Infections (Conjunctivitis)</li>
            <li>Skin Infections</li>
            <li>Tuberculosis</li>
          </ul>
        </div>

        {/* Problems You Face */}
        <div className="mt-10">
          <h2 className="text-2xl font-semibold mb-4 flex text-[#006644] items-center gap-2"><FaExclamationTriangle /> Common Fly Infestation Problems</h2>
          <ul className="space-y-2 text-gray-700 list-disc ml-6">
            <li>Flies hovering around garbage and food counters</li>
            <li>Constant buzzing and nuisance indoors</li>
            <li>Fly larvae breeding near drains or compost areas</li>
            <li>Food contamination in kitchens and pantries</li>
          </ul>
        </div>

        {/* Process */}
        <div className="mt-10">
          <h2 className="text-2xl font-semibold mb-4 text-[#006644] flex items-center gap-2"><FaCheckCircle /> Our Fly Control Treatment Process</h2>
          <ol className="list-decimal ml-6 space-y-2 text-gray-700">
            <li>Site inspection and assessment of breeding sources</li>
            <li>Use of targeted fly bait and UV traps in key areas</li>
            <li>Spraying herbal and chemical solutions in fly-prone zones</li>
            <li>Recommendations for sanitation and future prevention</li>
          </ol>
        </div>

        {/* Why Choose Us */}
        <div className="mt-10 bg-green-100 p-6 rounded shadow">
          <h2 className="text-2xl font-semibold text-[#006644] mb-4">Why Choose Our Fly Control Service?</h2>
          <ul className="list-disc ml-6 text-gray-800 space-y-2">
            <li>Odourless and eco-friendly treatment options</li>
            <li>Trained pest professionals with years of experience</li>
            <li>Quick same-day service available</li>
            <li>Affordable packages with post-treatment support</li>
          </ul>
        </div>

        {/* Gallery */}
        <div className="mt-10">
          <h2 className="text-2xl font-semibold mb-4 text-[#006644] flex items-center gap-2"><FaCameraRetro /> Treatment in Action</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <img src={img1} alt="Fly Control 1" className="rounded shadow h-52 object-cover w-full" />
            <img src={img2} alt="Fly Control 2" className="rounded shadow h-52 object-cover w-full" />
            <img src={img3} alt="Fly Control 3" className="rounded shadow h-52 object-cover w-full" />
          </div>
        </div>

        {/* Emergency CTA */}
        <div className="bg-gradient-to-r from-green-100 to-green-50 p-8 rounded-2xl border border-green-300 shadow-lg mb-8">
          <h2 className="text-xl font-bold text-green-900 mb-2">
            Flies Swarming Around You?
          </h2>
          <p className="text-gray-800 mb-4">
            Act quickly to avoid health hazards. Our expert team is available for rapid-response pest control across Delhi.
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
          Excel Pest Control – Serving Since 2017 | Your trusted name in pest elimination.
        </p>
      </div>
    </div>
     <ServiceSlider/>
    </>
  );
}
