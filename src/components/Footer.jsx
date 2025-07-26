import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaEnvelope,
  FaSearchLocation,
  FaHome,
  FaTruck,
  FaImage,
  FaInfoCircle,
  FaPhoneAlt,
} from "react-icons/fa";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import VisitorCounter from "./VisitorCounter";
import Translator from "./Translator";
import bgImg from "../assets/fbg.PNG";
import logo from "../assets/clogo.png";

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

export default function Footer() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2 });

  useEffect(() => {
    controls.start(inView ? "visible" : "hidden");
  }, [inView, controls]);

  return (
    <motion.footer
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={controls}
      className="relative bg-cover bg-center bg-no-repeat text-[#F3F3F3] pt-20 pb-10 px-6 md:px-16 overflow-hidden font-sans font-semibold"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      {/* Glow accents */}
      <div className="absolute -top-20 left-[-100px] w-[300px] h-[300px] bg-[#3CB371]/10 blur-[130px] opacity-20 rounded-full z-0" />
      <div className="absolute -bottom-20 right-[-100px] w-[300px] h-[300px] bg-[#D4AF37]/10 blur-[150px] opacity-20 rounded-full z-0" />

      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 text-sm">
        {/* About */}
        <div className="flex flex-col space-y-3">
          <img src={logo} alt="Excel Pest Logo" className="w-[120px] md:w-[120px]" />
          <h4 className="font-bold mb-2 text-3xl text-[#3CB371]">About Excel Pest</h4>
          <p className="leading-relaxed text-gray-800">
            Excel Pest Control Services is ISO 9001:2015 certified, operating since 2017. We deliver reliable pest control solutions across Delhi NCR, ensuring safety and satisfaction.
          </p>
          <div className="text-gray-800 text-xs space-y-1 mt-2">
            <p>GSTIN/UIN: 07AQHPP4954D1ZP</p>
            <p>UDYAM: DL-08-0025657</p>
            <p>ISO 9001:2015 — Cert. No: 305025011153Q</p>
          </div>
          <div className="mt-4">
            <a
              href="https://www.indiamart.com/excel-pest/products-and-services.html"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-4 py-2 border border-[#3CB371] text-[#3CB371] rounded hover:bg-[#D4AF37] hover:text-black transition duration-300 text-sm font-medium"
            >
              View on IndiaMART
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-bold text-2xl mb-4 text-[#3CB371]">Quick Links</h4>
          <ul className="space-y-2 text-gray-800">
            {[
              ["Home", "/", <FaHome />],
              ["About Us", "/about", <FaInfoCircle />],
              ["Gallery", "/gallery", <FaImage />],
              ["Contact", "/contact", <FaPhoneAlt />],
              ["Documentations", "/documentation", <FaTruck />],
            ].map(([text, link, icon], i) => (
              <li key={i}>
                <Link
                  to={link}
                  className="flex items-center gap-2 hover:text-[#3CB371] transition duration-300"
                >
                  {icon} {text}
                </Link>
              </li>
            ))}
          </ul>

          <h4 className="mt-6 font-bold text-2xl text-[#3CB371]">Emails</h4>
          <ul className="mt-2 space-y-2 text-gray-800">
            {[
              "jitu.excelpest@gmail.com",
              "Excelpestcontrolservice@gmail.com",
            ].map((email, i) => (
              <li key={i}>
                <a
                  href={`mailto:${email}`}
                  className="flex items-center space-x-2 hover:text-[#3CB371] transition duration-300"
                >
                  <FaEnvelope className="text-[#0e773d]" />
                  <span>{email}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-bold text-2xl mb-4 text-[#3CB371]">Our Services</h4>
          <ul className="space-y-2 text-gray-800">
            {[
              "Termite Control",
              "Cockroach Control",
              "Rodent Control",
              "Bed Bug Treatment",
              "Mosquito Control",
              "Ant Control",
              "Lizard & Spider Control",
              "Residential & Commercial Services",
              "Fumigation Services",
              "Pre-Construction Termite Treatment",
              "Post-Construction Termite Treatment",
            ].map((svc, i) => (
              <li key={i}>
                <Link
                  to="/services"
                  className="hover:text-[#3CB371] transition duration-300"
                >
                  {svc}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Address & Social */}
        <div>
          <h4 className="font-bold text-2xl mb-4 text-[#3CB371]">Contact Info</h4>
          <address className="not-italic leading-relaxed mb-4 text-gray-800 text-sm">
            Plot No. B-1047 D, Sangam Vihar, Mehrauli, South Delhi, Delhi 110062<br />
            Plot No. 42 A, 88 Block A, Chittaranjan Park, New Delhi 110019
          </address>
          <p className="text-sm text-gray-800 mb-2">
            <FaPhoneAlt className="inline text-[#3CB371] mr-1" />
            <a href="tel:+919811776506">+91 98117 76506</a><br />
            <FaPhoneAlt className="inline text-[#3CB371] mr-1" />
            <a href="tel:+919810765477">+91 98107 65477</a>
          </p>
          <div className="mb-4 flex justify-center items-center relative right-8">
            <div><Translator /></div>
          </div>
          <div className="mt-6 flex space-x-4">
            {[FaInstagram, FaFacebookF, FaYoutube, FaSearchLocation].map((Icon, i) => (
              <a key={i} href="#" className="text-[#3CB371] hover:text-[#D4AF37] transition">
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 text-center text-xs text-gray-700 border-t border-[#444] pt-6 space-y-2 relative z-10">
        <VisitorCounter />
        <p>© {new Date().getFullYear()} Excel Pest Control Services. All rights reserved.</p>
        <p>
          Designed by{" "}
          <a
            href="https://webworldhub.co.in"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold hover:text-[#D4AF37] transition"
          >
            Web World Hub
          </a>
        </p>
      </div>
    </motion.footer>
  );
}
