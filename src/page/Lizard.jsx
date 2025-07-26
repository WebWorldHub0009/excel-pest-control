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
import img1 from "../assets/images/service/l1.jpeg"
import img2 from "../assets/images/service/l2.jpeg"
import img3 from "../assets/images/service/l3.jpeg"

export default function LizardControl() {
  return (
    <>
   
    <div className="w-full bg-[#f3fdf7] text-[#1C1C1C]">
      {/* Top Section */}
      <div className="max-w-6xl mx-auto py-10 px-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#006644]">
          Lizard Control Services
        </h1>
        <p className="text-lg md:text-xl text-gray-800">
          Say goodbye to unwanted reptiles — protect your home or commercial space with our expert lizard removal and prevention treatments.
        </p>
      </div>

      {/* Description Section */}
      <div className="max-w-6xl mx-auto px-6 space-y-6">
        <p className="text-md text-gray-700 leading-relaxed">
          Lizards are not just an unpleasant sight for many — they can leave droppings, create mess, and trigger phobias. Commonly found near ceilings, windows, and kitchen lights, lizards thrive in humid environments. Our advanced, non-toxic gel and repellent sprays target common lizard hiding spots and prevent their return effectively.
        </p>

        {/* Highlight Box */}
        <div className="bg-green-100 border-l-4 border-green-800 p-6 shadow rounded">
          <p className="text-md font-semibold text-green-900">
            We use herbal-based, safe, and eco-conscious solutions that repel lizards without harming the environment or pets.
          </p>
        </div>

        {/* Risks of Lizard Infestation */}
        <div className="bg-white shadow-md rounded p-6">
          <h2 className="text-2xl font-semibold mb-4 flex items-center text-[#006644] gap-2">
            <FaVirus /> Why You Shouldn’t Ignore Lizards
          </h2>
          <ul className="list-disc ml-6 space-y-2 text-gray-700">
            <li>They drop faeces that can stain walls and contaminate surfaces</li>
            <li>Lizards often attract predators like snakes</li>
            <li>Possible carriers of salmonella and pathogens</li>
            <li>Major cause of fear and unease, especially in children and elderly</li>
          </ul>
        </div>

        {/* Common Lizard Issues */}
        <div className="mt-10">
          <h2 className="text-2xl font-semibold mb-4 flex text-[#006644] items-center gap-2">
            <FaExclamationTriangle /> Common Lizard Problems
          </h2>
          <ul className="space-y-2 text-gray-700 list-disc ml-6">
            <li>Lizards stuck on ceilings, windows, and tube lights</li>
            <li>Droppings on floors, counters, or furniture</li>
            <li>Disturbance during the night due to sudden sightings</li>
            <li>Fear of infestation in bedrooms and kitchens</li>
          </ul>
        </div>

        {/* Our Process */}
        <div className="mt-10">
          <h2 className="text-2xl font-semibold mb-4 text-[#006644] flex items-center gap-2">
            <FaCheckCircle /> Our Lizard Control Process
          </h2>
          <ol className="list-decimal ml-6 space-y-2 text-gray-700">
            <li>Thorough inspection of premises for infestation zones</li>
            <li>Application of herbal gel in corners and wall joins</li>
            <li>Spraying of safe repellents in ceilings, entry points, and kitchen areas</li>
            <li>Installation of repellent strips and sealing of gaps</li>
            <li>Optional follow-up treatment depending on severity</li>
          </ol>
        </div>

        {/* Why Choose Us */}
        <div className="mt-10 bg-green-100 p-6 rounded shadow">
          <h2 className="text-2xl font-semibold text-[#006644] mb-4">Why Excel Pest Control?</h2>
          <ul className="list-disc ml-6 text-gray-800 space-y-2">
            <li>Eco-friendly and herbal repellent options</li>
            <li>No harm to humans, children, or pets</li>
            <li>Odourless and non-staining treatment</li>
            <li>Years of experience in reptile deterrent service</li>
            <li>Custom treatment plans for homes, offices & commercial kitchens</li>
          </ul>
        </div>

        {/* Gallery */}
        <div className="mt-10">
          <h2 className="text-2xl font-semibold mb-4 text-[#006644] flex items-center gap-2">
            <FaCameraRetro /> Lizard Control in Action
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <img
              src={img1}
              alt="Lizard Control 1"
              className="rounded shadow h-52 object-cover w-full"
            />
            <img
              src={img2}
              alt="Lizard Control 2"
              className="rounded shadow h-52 object-cover w-full"
            />
            <img
              src={img3}
              alt="Lizard Control 3"
              className="rounded shadow h-52 object-cover w-full"
            />
          </div>
        </div>

        {/* Emergency CTA */}
        <div className="bg-gradient-to-r from-green-100 to-green-50 p-8 rounded-2xl border border-green-300 shadow-lg mb-8">
          <h2 className="text-xl font-bold text-green-900 mb-2">
            Spot Lizards Crawling Around?
          </h2>
          <p className="text-gray-800 mb-4">
            Don’t let the problem grow. Contact our certified team for instant, reliable lizard control service.
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
          Excel Pest Control – Trusted Since 2017. Serving South Delhi’s Homes & Businesses with Care.
        </p>
      </div>
    </div>
     <ServiceSlider/>
     </>
  );
}
