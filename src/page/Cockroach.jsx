import React from "react";
import { FaExclamationTriangle, FaCheckCircle, FaBug, FaVirus, FaMicroscope, FaCameraRetro } from "react-icons/fa";
import ServiceSlider from "../components/ServiceSlider";

export default function CockroachControl() {
  return (
    <>
    <div className="w-full bg-[#f3fdf7] text-[#1C1C1C]">
      {/* Top Section */}
      <div className="max-w-6xl mx-auto py-10 px-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-4  text-[#006644]">Cockroach Control Services</h1>
        <p className="text-lg md:text-xl text-gray-800">
          Eliminate disease-carrying cockroaches from your home or workplace with our professional pest control treatments.
        </p>
      </div>

      {/* Description Section */}
      <div className="max-w-6xl mx-auto px-6 space-y-6">
        <p className="text-md text-gray-700 leading-relaxed">
          Cockroaches are not just unsightly—they pose serious health risks as they are known to spread bacteria and allergens. They commonly infest kitchens, bathrooms, and drains, contaminating food and surfaces. Our expert technicians use advanced gel-bait and chemical treatment methods to eliminate cockroaches from even the hardest-to-reach areas.
        </p>

        {/* Highlight Box */}
        <div className="bg-green-100 border-l-4 border-green-800 p-6 shadow rounded">
          <p className="text-md font-semibold text-green-900">
            Our odourless and eco-friendly cockroach control ensures long-lasting results while maintaining safety for children and pets.
          </p>
        </div>

        {/* Diseases Section */}
        <div className="bg-white shadow-md rounded p-6">
          <h2 className="text-2xl font-semibold mb-4 flex items-center  text-[#006644] gap-2"><FaVirus /> Diseases Caused by Cockroaches</h2>
          <ul className="list-disc ml-6 space-y-2 text-gray-700">
            <li>Salmonella & Food Poisoning</li>
            <li>Typhoid Fever</li>
            <li>Cholera</li>
            <li>Dysentery</li>
            <li>Allergic Reactions & Asthma (due to cockroach droppings and body parts)</li>
            <li>Gastroenteritis</li>
            <li>E. coli Contamination</li>
          </ul>
        </div>

        {/* Problems You Face */}
        <div className="mt-10">
          <h2 className="text-2xl font-semibold mb-4 flex  text-[#006644] items-center gap-2"><FaExclamationTriangle /> Common Cockroach Problems</h2>
          <ul className="space-y-2 text-gray-700 list-disc ml-6">
            <li>Cockroaches in kitchen drawers and cabinets</li>
            <li>Increased allergic symptoms among children</li>
            <li>Foul smell and droppings in hidden corners</li>
            <li>Infestation behind fridges and drains</li>
          </ul>
        </div>

        {/* Process */}
        <div className="mt-10">
          <h2 className="text-2xl font-semibold mb-4  text-[#006644] flex items-center gap-2"><FaCheckCircle /> Our Cockroach Treatment Process</h2>
          <ol className="list-decimal ml-6 space-y-2 text-gray-700">
            <li>Initial inspection and infestation level assessment</li>
            <li>Application of gel-based baits in infected zones</li>
            <li>Spraying eco-safe chemical in drains and damp zones</li>
            <li>Follow-up treatments if required</li>
          </ol>
        </div>

        {/* Why Choose Us */}
        <div className="mt-10 bg-green-100 p-6 rounded shadow">
          <h2 className="text-2xl font-semibold  text-[#006644] mb-4">Why Choose Our Service?</h2>
          <ul className="list-disc ml-6 text-gray-800 space-y-2">
            <li>100% safe and odourless solutions</li>
            <li>Certified and experienced professionals</li>
            <li>Same-day service available</li>
            <li>Service warranty provided</li>
          </ul>
        </div>

        {/* Gallery */}
        <div className="mt-10">
          <h2 className="text-2xl font-semibold mb-4 text-[#006644] flex items-center gap-2"><FaCameraRetro /> Treatment in Action</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <img src="/images/cockroach1.jpg" alt="Cockroach Control 1" className="rounded shadow h-52 object-cover w-full" />
            <img src="/images/cockroach2.jpg" alt="Cockroach Control 2" className="rounded shadow h-52 object-cover w-full" />
            <img src="/images/cockroach3.jpg" alt="Cockroach Control 3" className="rounded shadow h-52 object-cover w-full" />
          </div>
        </div>

        {/* Emergency CTA */}
       <div className="bg-gradient-to-r from-green-100 to-green-50 p-8 rounded-2xl border border-green-300 shadow-lg mb-8">
          <h2 className="text-xl font-bold text-green-900 mb-2">
            Cockroach Outbreak at Your Place?
          </h2>
          <p className="text-gray-800 mb-4">
            Don’t wait till it's too late. Our emergency excel pest control team
            are ready to act within hours.
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
      </div>
      <div className="text-center text-sm py-5 text-gray-500">
          Excel Pest Control – Safe Living Starts With Us. ISO Certified Service Since 2017.
        </div>
    </div>
     <ServiceSlider/>
    </>
  );
}
