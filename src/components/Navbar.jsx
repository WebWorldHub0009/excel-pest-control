import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FaBars, FaTimes, FaSearch,
  FaFacebookF, FaInstagram, FaLinkedinIn,
  FaHome, FaInfoCircle, FaCogs, FaPhoneAlt,
  FaCamera, FaFile, FaSignOutAlt
} from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import logo from "../assets/logo.png";

const ExcelNavbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  const navigate = useNavigate();
  const menuRef = useRef();


  const toggleMenu = () => setMenuOpen(!menuOpen);

  const handleClickOutside = (e) => {
    if (menuRef.current && !menuRef.current.contains(e.target)) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen]);

  const navLinks = [
    { name: "Home", path: "/", icon: <FaHome /> },
    { name: "About", path: "/about", icon: <FaInfoCircle /> },
    { name: "Gallery", path: "/gallery", icon: <FaCamera /> },
    { name: "Contact", path: "/contact", icon: <FaPhoneAlt /> },
    { name: "Docs", path: "/documentation", icon: <FaFile /> },
  ];

  const serviceItems = [
    "Pest Control", "Bees and Wasp Control", "Mosquito Control",
    "Cockroach Control", "Wood Borer Control", "Fleas Control",
    "Termite Control", "Bed Bugs Control", "Rodent Control",
    "Spiders Control", "Flies Control", "Lizards Control"
  ];

  const socialLinks = [
    { icon: <FaFacebookF />, url: "https://facebook.com" },
    { icon: <FaInstagram />, url: "https://instagram.com" },
    { icon: <FaLinkedinIn />, url: "https://linkedin.com" },
  ];

  return (
    <>
      {/* Top Header */}
      <div className="bg-[#0f241a] text-white text-[11px] py-1 px-3 flex justify-between items-center flex-wrap font-medium">
        <div className="flex gap-3 items-center flex-wrap">
          <span>📧 <a href="mailto:jitu.excelpest@gmail.com" className="hover:text-green-300">jitu.excelpest@gmail.com</a></span>
          <span>📞 <a href="tel:+919811776506" className="hover:text-green-300">+91 98117 76506</a></span>
        </div>
        <div className="flex gap-3 items-center flex-wrap mt-1 sm:mt-0">
          <span>📧 <a href="mailto:Excelpestcontrolservice@gmail.com" className="hover:text-green-300">Excelpestcontrolservice@gmail.com</a></span>
          <span>📞 <a href="tel:+919810765477" className="hover:text-green-300">+91 98107 65477</a></span>
        </div>
      </div>

      {/* Main Navbar */}
      <header className="bg-white shadow-md z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
          {/* Social */}
          <div className="hidden md:flex gap-4 text-[#168a45] text-lg">
            {socialLinks.map((s, i) => (
              <a key={i} href={s.url} target="_blank" rel="noreferrer" className="hover:text-black">
                {s.icon}
              </a>
            ))}
          </div>

          {/* Logo */}
          <Link to="/">
            <img src={logo} alt="Excel Pest Control Logo" className="w-56 h-auto" />
          </Link>

          {/* Search & Menu Toggle */}
          <div className="flex items-center gap-4">
            <div className="hidden md:block relative">
              <input type="text" placeholder="Search..." className="border px-4 py-1.5 rounded-full text-sm focus:outline-none shadow-inner" />
              <FaSearch className="absolute right-3 top-2 text-green-800" />
            </div>
            <button className="md:hidden text-2xl text-[#168a45]" onClick={toggleMenu}>
              {menuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex justify-center items-center  w-full mx-auto px-4 py-3 text-[#0D2606] bg-green-50 font-semibold text-sm uppercase border-t border-gray-200">

          <div className="flex gap-8">
            {navLinks.slice(0, 2).map((link) => (
            <Link
  key={link.name}
  to={link.path}
  className="flex items-center gap-2 text-[#0D2606] hover:text-green-700 transition-colors duration-200"
>
  {link.icon} {link.name}
</Link>

            ))}

            {/* Services Dropdown */}
            <div className="relative" onMouseEnter={() => setServicesOpen(true)} onMouseLeave={() => setServicesOpen(false)}>
              <button className="flex items-center gap-1 hover:text-green-700">
                <FaCogs /> SERVICES <IoIosArrowDown />
              </button>
              {servicesOpen && (
                <div className="absolute top-full left-0 w-64 bg-white border border-green-600 shadow-xl rounded-md z-50 p-3">
                  {serviceItems.map((item, index) => (
                    <Link
                      key={index}
                      to={`/services/${item.toLowerCase().replace(/ /g, "-")}`}
                      className="block py-1 text-sm hover:text-green-600"
                    >
                      {item}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {navLinks.slice(2).map((link) => (
              <Link key={link.name} to={link.path} className="flex items-center gap-2 hover:text-green-700">
                {link.icon} {link.name}
              </Link>
            ))}
          </div>

          
        </nav>

        {/* Mobile Overlay */}
        {menuOpen && <div className="fixed inset-0 bg-black/50 z-40"></div>}

        {/* Mobile Drawer */}
        <aside
          ref={menuRef}
          className={`fixed top-0 left-0 w-[80%] max-w-xs h-full bg-white z-50 transform ${
            menuOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-500 ease-in-out shadow-2xl`}
        >
          <div className="flex justify-between items-center px-6 py-4 border-b border-gray-200">
            <img src={logo} alt="Excel Pest Logo" className="w-20" />
            <button onClick={toggleMenu} className="text-2xl text-[#168a45]">
              <FaTimes />
            </button>
          </div>

          <nav className="px-6 py-6 space-y-5 text-[#0D2606] font-medium text-base">
            {navLinks.slice(0, 2).map((link) => (
              <Link key={link.name} to={link.path} onClick={() => setMenuOpen(false)} className="flex items-center gap-3 hover:text-green-600">
                {link.icon} {link.name}
              </Link>
            ))}

            {/* Collapsible Services Dropdown in Mobile */}
            <div>
              <button
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className="flex items-center gap-3 hover:text-green-600 w-full"
              >
                <FaCogs /> Services <IoIosArrowDown className={`transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              {mobileServicesOpen && (
                <div className="pl-5 mt-2 space-y-2">
                  {serviceItems.map((item, index) => (
                    <Link
                      key={index}
                      to={`/services/${item.toLowerCase().replace(/ /g, "-")}`}
                      onClick={() => setMenuOpen(false)}
                      className="block text-sm text-[#0D2606] hover:text-green-600"
                    >
                      {item}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {navLinks.slice(2).map((link) => (
              <Link key={link.name} to={link.path} onClick={() => setMenuOpen(false)} className="flex items-center gap-3 hover:text-green-600">
                {link.icon} {link.name}
              </Link>
            ))}

           
          </nav>

          <div className="px-6 py-4 text-xs text-gray-700 border-t">
            <p><strong>Email:</strong> jitu.excelpest@gmail.com</p>
            <p><strong>Phone:</strong> +91 98117 76506</p>
          </div>

          <div className="px-6 mt-4 flex gap-4 text-xl text-[#168a45]">
            {socialLinks.map((s, i) => (
              <a key={i} href={s.url} target="_blank" rel="noreferrer" className="hover:text-black">
                {s.icon}
              </a>
            ))}
          </div>
        </aside>
      </header>
    </>
  );
};

export default ExcelNavbar;
