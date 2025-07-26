import React from "react";
import { NavLink } from "react-router-dom";
import { FaBug, FaLeaf, FaHome, FaSkull, FaShieldAlt } from "react-icons/fa";
import { FaMagento } from "react-icons/fa6";

const services = [
  { name: "Herbal Pest Control", path: "herbal", icon: <FaLeaf /> },
  { name: "Household Pest Control", path: "household", icon: <FaHome /> },
  { name: "Bed Bugs Control", path: "bedbugs", icon: <FaBug /> },
  { name: "Antiwood Bug Treatment", path: "antiwood", icon: <FaSkull /> },
  { name: "Anti Termite", path: "termite", icon: <FaShieldAlt /> },
  { name: "Rodent/Rat Control", path: "rodent", icon: <FaBug /> },
  { name: "Reticular Termite System", path: "reticular", icon: <FaShieldAlt /> },
  { name: "Mosquito & Fly Control", path: "mosquito", icon: <FaMagento /> },
  { name: "Export Fragmentation", path: "export", icon: <FaBug /> },
];

export default function Sidebar() {
  return (
    <aside className="fixed top-20 left-0 h-[90vh] w-[280px] bg-[#1C1C1C] text-white shadow-xl z-50 p-6 overflow-y-auto">
      <h2 className="text-2xl font-bold mb-6 border-b border-gray-600 pb-2">Our Services</h2>
      <ul className="space-y-3">
        {services.map((service) => (
          <li key={service.path}>
            <NavLink
              to={`/services/${service.path}`}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-2 rounded-lg transition duration-200 ${
                  isActive
                    ? "bg-emerald-600 text-white shadow-md"
                    : "hover:bg-[#333] hover:text-emerald-400"
                }`
              }
            >
              <span className="text-lg">{service.icon}</span>
              <span className="text-sm font-medium">{service.name}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </aside>
  );
}
