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
import img1 from "../assets/images/service/bed1.jpg"
import img2 from "../assets/images/service/bed2.avif"
import img3 from "../assets/images/service/bed3.avif"


export default function BedBugsControl() {
  return (
    <>

    <div className="w-full bg-[#f3fdf7] text-[#1C1C1C]">
      {/* Top Section */}
      <div className="max-w-6xl mx-auto py-10 px-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#006644]">
          Bed Bugs Control Services
        </h1>
        <p className="text-lg md:text-xl text-gray-800">
          Get rid of persistent bed bugs with our expert treatment solutions designed for your comfort and hygiene.
        </p>
      </div>

      {/* Description Section */}
      <div className="max-w-6xl mx-auto px-6 space-y-6">
        <p className="text-md text-gray-700 leading-relaxed">
          Bed bugs are nocturnal pests that hide in mattresses, bed frames, and crevices, feeding on human blood during the night. Their bites cause itching, allergic reactions, and psychological stress. Our team uses state-of-the-art heat and chemical treatments to completely eradicate bed bug colonies from your living space.
        </p>

        {/* Highlight Box */}
        <div className="bg-green-100 border-l-4 border-green-800 p-6 shadow rounded">
          <p className="text-md font-semibold text-green-900">
            Our treatment is safe, odourless, and child-friendly while being lethal to even the most hidden bed bugs and eggs.
          </p>
        </div>

        {/* Health Impact Section */}
        <div className="bg-white shadow-md rounded p-6">
          <h2 className="text-2xl font-semibold mb-4 flex items-center text-[#006644] gap-2">
            <FaVirus /> Health Effects of Bed Bug Infestation
          </h2>
          <ul className="list-disc ml-6 space-y-2 text-gray-700">
            <li>Itchy red bites and rashes</li>
            <li>Severe allergic reactions in sensitive individuals</li>
            <li>Insomnia and stress due to constant itching</li>
            <li>Skin infections from excessive scratching</li>
            <li>Potential anemia in extreme infestations</li>
          </ul>
        </div>

        {/* Problems You Face */}
        <div className="mt-10">
          <h2 className="text-2xl font-semibold mb-4 flex text-[#006644] items-center gap-2">
            <FaExclamationTriangle /> Signs of Bed Bug Infestation
          </h2>
          <ul className="space-y-2 text-gray-700 list-disc ml-6">
            <li>Red bite marks on arms, back, and neck</li>
            <li>Blood stains on bed sheets or pillowcases</li>
            <li>Musty odour in the bedroom</li>
            <li>Live bugs or molted skin found in mattress seams</li>
          </ul>
        </div>

        {/* Process */}
        <div className="mt-10">
          <h2 className="text-2xl font-semibold mb-4 text-[#006644] flex items-center gap-2">
            <FaCheckCircle /> Our Bed Bug Treatment Process
          </h2>
          <ol className="list-decimal ml-6 space-y-2 text-gray-700">
            <li>Thorough inspection of beds, furniture, and rooms</li>
            <li>Targeted application of non-toxic heat & chemical treatment</li>
            <li>Use of insecticidal dust and spray in crevices and corners</li>
            <li>Monitoring and follow-up visit if necessary</li>
          </ol>
        </div>

        {/* Why Choose Us */}
        <div className="mt-10 bg-green-100 p-6 rounded shadow">
          <h2 className="text-2xl font-semibold text-[#006644] mb-4">Why Choose Our Bed Bug Control?</h2>
          <ul className="list-disc ml-6 text-gray-800 space-y-2">
            <li>Safe for children and pets</li>
            <li>Long-lasting relief with deep penetration treatment</li>
            <li>24/7 emergency services available</li>
            <li>Experienced pest professionals</li>
          </ul>
        </div>

        {/* Gallery */}
        <div className="mt-10">
          <h2 className="text-2xl font-semibold mb-4 text-[#006644] flex items-center gap-2">
            <FaCameraRetro /> Real Treatment Snapshots
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <img
              src={img1}
              alt="Bed Bug Control 1"
              className="rounded shadow h-52 object-cover w-full"
            />
            <img
              src={img2}
             alt="Bed Bug Control 2"
              className="rounded shadow h-52 object-cover w-full"
            />
            <img
              src={img3}
              alt="Bed Bug Control 3"
              className="rounded shadow h-52 object-cover w-full"
            />
          </div>
        </div>

        {/* Emergency CTA */}
        <div className="bg-gradient-to-r from-green-100 to-green-50 p-8 rounded-2xl border border-green-300 shadow-lg mb-8">
          <h2 className="text-xl font-bold text-green-900 mb-2">
            Battling Bed Bugs Right Now?
          </h2>
          <p className="text-gray-800 mb-4">
            Don’t suffer through another sleepless night. Our trained team is ready to help you with swift, same-day service.
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
        <p className="text-sm text-center py-6 text-gray-500 mt-10">
          Excel Pest Control – Trusted Experts in Bed Bug Eradication Across India.
        </p>
      </div>
    </div>
<ServiceSlider/>
        </>
  );
}
