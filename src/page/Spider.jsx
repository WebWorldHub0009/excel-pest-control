import React from "react";
import { FaExclamationTriangle, FaCheckCircle, FaBug, FaVirus, FaMicroscope, FaCameraRetro } from "react-icons/fa";
import ServiceSlider from "../components/ServiceSlider";
import img1 from "../assets/images/service/spider.avif"
import img2 from "../assets/images/service/spider2.avif"
import img3 from "../assets/images/service/spider3.jpg"


export default function SpiderControl() {
  return (
    <>
    <div className="w-full bg-[#f3fdf7] text-[#1C1C1C]">
      {/* Top Section */}
      <div className="max-w-6xl mx-auto py-10 px-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#006644]">Spider Control Services</h1>
        <p className="text-lg md:text-xl text-gray-800">
          Say goodbye to unwanted eight-legged guests. We provide professional, safe, and effective spider control solutions.
        </p>
      </div>

      {/* Description Section */}
      <div className="max-w-6xl mx-auto px-6 space-y-6">
        <p className="text-md text-gray-700 leading-relaxed">
          While most spiders are harmless, their presence can be unsettling. Some species can cause painful bites and trigger allergic reactions. Spiders often build webs in corners, basements, attics, and other low-traffic areas. Our trained pest control experts utilize targeted techniques to remove spiders and prevent re-infestation effectively.
        </p>

        {/* Highlight Box */}
        <div className="bg-green-100 border-l-4 border-green-800 p-6 shadow rounded">
          <p className="text-md font-semibold text-green-900">
            Our eco-safe spider treatment ensures peace of mind—no harm to pets, kids, or the environment.
          </p>
        </div>

        {/* Health Risks */}
        <div className="bg-white shadow-md rounded p-6">
          <h2 className="text-2xl font-semibold mb-4 flex items-center text-[#006644] gap-2"><FaVirus /> Health Risks Due to Spider Bites</h2>
          <ul className="list-disc ml-6 space-y-2 text-gray-700">
            <li>Redness, swelling, and pain at the bite site</li>
            <li>Allergic reactions including skin rashes</li>
            <li>Fever, chills, and nausea (from venomous bites)</li>
            <li>Secondary infections due to scratching</li>
            <li>Anxiety and fear in children and elders</li>
          </ul>
        </div>

        {/* Types of Spiders Found Indoors */}
        <div className="mt-10">
          <h2 className="text-2xl font-semibold mb-4 flex text-[#006644] items-center gap-2"><FaMicroscope /> Common Indoor Spiders in Delhi</h2>
          <ul className="space-y-2 text-gray-700 list-disc ml-6">
            <li>House Spiders</li>
            <li>Wolf Spiders</li>
            <li>Jumping Spiders</li>
            <li>Brown Recluse (Rare but dangerous)</li>
            <li>Cellar Spiders (a.k.a. Daddy Long Legs)</li>
          </ul>
        </div>

        {/* Problems You Face */}
        <div className="mt-10">
          <h2 className="text-2xl font-semibold mb-4 flex text-[#006644] items-center gap-2"><FaExclamationTriangle /> Common Spider Problems</h2>
          <ul className="space-y-2 text-gray-700 list-disc ml-6">
            <li>Unwanted webs in ceilings, corners, and basements</li>
            <li>Spider egg sacs in undisturbed spaces</li>
            <li>Fear and discomfort among family members</li>
            <li>Venomous spiders in storage rooms or closets</li>
          </ul>
        </div>

        {/* Process */}
        <div className="mt-10">
          <h2 className="text-2xl font-semibold mb-4 text-[#006644] flex items-center gap-2"><FaCheckCircle /> Our Spider Control Process</h2>
          <ol className="list-decimal ml-6 space-y-2 text-gray-700">
            <li>Full home inspection to identify spider hiding zones</li>
            <li>Spider web removal from ceilings and surfaces</li>
            <li>Application of anti-spider spray in attics, basements & corners</li>
            <li>Crack & crevice treatment to block entry points</li>
            <li>Optional herbal & odourless treatments available</li>
          </ol>
        </div>

        {/* Why Choose Us */}
        <div className="mt-10 bg-green-100 p-6 rounded shadow">
          <h2 className="text-2xl font-semibold text-[#006644] mb-4">Why Excel Pest Control?</h2>
          <ul className="list-disc ml-6 text-gray-800 space-y-2">
            <li>Expertise in handling venomous and non-venomous spiders</li>
            <li>Environment-friendly treatment options</li>
            <li>Affordable packages with repeat visits (if needed)</li>
            <li>Quick response and guaranteed service</li>
          </ul>
        </div>

        {/* Prevention Tips */}
        <div className="mt-10 bg-white p-6 rounded shadow">
          <h2 className="text-2xl font-semibold mb-4 text-[#006644] flex items-center gap-2"><FaBug /> Spider Prevention Tips</h2>
          <ul className="list-disc ml-6 text-gray-700 space-y-2">
            <li>Seal all wall cracks and window gaps</li>
            <li>Keep basements and storage areas clutter-free</li>
            <li>Use natural repellents like peppermint oil</li>
            <li>Regular cleaning behind furniture and corners</li>
            <li>Install door sweeps and fine mesh on windows</li>
          </ul>
        </div>

        {/* Gallery */}
        <div className="mt-10">
          <h2 className="text-2xl font-semibold mb-4 text-[#006644] flex items-center gap-2"><FaCameraRetro /> Our Spider Control in Action</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <img src={img1} alt="Spider Control 1" className="rounded shadow h-52 object-cover w-full" />
            <img src={img2} alt="Spider Control 2" className="rounded shadow h-52 object-cover w-full" />
            <img src={img3} alt="Spider Control 3" className="rounded shadow h-52 object-cover w-full" />
          </div>
        </div>

        {/* Emergency CTA */}
        <div className="bg-gradient-to-r from-green-100 to-green-50 p-8 rounded-2xl border border-green-300 shadow-lg mb-8 mt-10">
          <h2 className="text-xl font-bold text-green-900 mb-2">
            Spider Infestation Scaring You?
          </h2>
          <p className="text-gray-800 mb-4">
            Act fast and call our emergency team to make your home spider-free. We are ready to respond quickly.
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
              📩 Book Now
            </a>
          </div>
        </div>
      </div>

      {/* Footer Note */}
      <div className="text-center text-sm py-5 text-gray-500 mb-6">
        Excel Pest Control – Since 2017. Protecting Homes. Building Trust.
      </div>
    </div>
     <ServiceSlider/>
    </>
  );
}
