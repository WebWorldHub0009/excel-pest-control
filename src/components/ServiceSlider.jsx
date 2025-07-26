import React from "react";
import {
  GiAnt,
  GiBee,
  GiCoconuts,
  GiWoodPile,
  GiFlyingFlag,
  GiBed,
  GiRat,
  GiSpiderWeb,
  GiFly,
  GiLiar,
  GiAmberMosquito,
  GiTerror,
} from "react-icons/gi";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

// Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const services = [
  { icon: <GiAnt />, title: "Ants Control", route: "/services/pest-control" },
  { icon: <GiBee />, title: "Bees & Wasp Control", route: "/services/bees-and-wasp-control" },
  { icon: <GiAmberMosquito />, title: "Mosquito Control", route: "/services/mosquito-control" },
  { icon: <GiCoconuts />, title: "Cockroach Control", route: "/services/cockroach-control" },
  { icon: <GiWoodPile />, title: "Wood Borer Control", route: "/services/wood-borer-control" },
  { icon: <GiFlyingFlag />, title: "Fleas Control", route: "/services/fleas-control" },
  { icon: <GiTerror />, title: "Termite Control", route: "/services/termite-control" },
  { icon: <GiBed />, title: "Bed Bugs Control", route: "/services/bed-bugs-control" },
  { icon: <GiRat />, title: "Rodent Control", route: "/services/rodent-control" },
  { icon: <GiSpiderWeb />, title: "Spiders Control", route: "/services/spiders-control" },
  { icon: <GiFly />, title: "Flies Control", route: "/services/flies-control" },
  { icon: <GiLiar />, title: "Lizards Control", route: "/services/lizards-control" },
];

export default function ServiceSlider() {
  return (
    <div className="w-full bg-green-50 ">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-green-800 mb-10">Our Pest Control Services</h2>

        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          slidesPerView={1.2}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
          loop={true}
        >
          {services.map((service, idx) => (
            <SwiperSlide key={idx}>
              <Link
                to={service.route}
                className="bg-white shadow-lg border hover:border-green-600 rounded-xl w-full h-full p-5 flex flex-col items-center text-center group transition hover:shadow-xl"
              >
                <div className="text-4xl text-green-700 mb-3 group-hover:scale-110 transition">
                  {service.icon}
                </div>
                <h4 className="font-semibold text-lg text-green-800 group-hover:text-green-900 uppercase">
                  {service.title}
                </h4>
                <p className="text-sm text-gray-600 mt-2">
                  Complete solution for {service.title.toLowerCase()}.
                </p>
                <FaArrowRight className="text-green-600 mt-3 group-hover:translate-x-1 transition" />
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
