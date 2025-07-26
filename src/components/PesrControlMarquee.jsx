import React from "react";
import { motion } from "framer-motion";
import {
  GiAnt,
  GiBee,
  GiWoodPile,
  GiRat,
  GiSpiderWeb,
  GiFly,
  GiBed,
  GiLizardTongue,
  GiAmberMosquito
} from "react-icons/gi";

import { FaBug, FaBed } from "react-icons/fa";
import { IoMdAlert } from "react-icons/io";
import { FiMousePointer } from "react-icons/fi";

const services = [
  { icon: <GiAnt />, title: "Ants Control" },
  { icon: <GiBee />, title: "Bees & Wasp Control" },
  { icon: <GiAmberMosquito />, title: "Mosquito Control" },
  { icon: <GiWoodPile />, title: "Wood Borer Control" },
  { icon: <GiBed />, title: "Bed Bugs Control" },
  { icon: <GiRat />, title: "Rodent Control" },
  { icon: <GiSpiderWeb />, title: "Spiders Control" },
  { icon: <GiFly />, title: "Flies Control" },
  { icon: <GiLizardTongue />, title: "Lizards Control" },
];



export default function PestControlMarquee() {
  return (
    <div className="w-full overflow-hidden bg-green-700 py-4 relative">
      <motion.div
        className="flex gap-6 items-center"
        initial={{ x: "100%" }}
        animate={{ x: "-100%" }}
        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
      >
        {services.concat(services).map((item, idx) => (
          <div
            key={idx}
            className="flex items-center gap-2 text-white text-lg font-semibold px-4 whitespace-nowrap"
          >
            <span className="text-xl">{item.icon}</span>
            <span>{item.title}</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
