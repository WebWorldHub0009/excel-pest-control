import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaQuoteLeft } from "react-icons/fa";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

const testimonials = [
  {
    name: "Riya Malhotra",
    title: "Homeowner, South Delhi",
    text: "Excel Pest Control made my home feel safe again. Their attention to detail and eco-friendly methods are unmatched. Truly a five-star service.",
  },
  {
    name: "Amit Verma",
    title: "Restaurant Owner, CR Park",
    text: "We had a major rodent issue in our kitchen. Excel's team responded immediately, handled it professionally, and followed up after treatment. Highly reliable!",
  },
  {
    name: "Sonal Singh",
    title: "Office Manager, Saket",
    text: "Punctual, polite, and extremely effective. We’ve subscribed to their annual maintenance program and couldn’t be happier.",
  },
  {
    name: "Dr. Neha Kapoor",
    title: "Clinic Owner, Delhi",
    text: "As a healthcare provider, cleanliness is crucial. Excel Pest Control ensures our clinic remains hygienic and pest-free year-round.",
  },
  {
    name: "Rajeev Bansal",
    title: "Apartment Owner",
    text: "I trust Excel Pest Control blindly now. Termite issue gone, no smell, no mess — and the team was courteous and professional.",
  },
];

export default function TestimonialSlider() {
  return (
    <section className="w-full bg-gradient-to-br from-[#f3faf4] to-[#e8f6ee] py-16 px-4 md:px-10 font-[Poppins] relative overflow-hidden">
      <div className="absolute w-96 h-96 bg-green-100 rounded-full blur-3xl opacity-20 top-[-100px] left-[-100px]" />
      <div className="absolute w-96 h-96 bg-green-200 rounded-full blur-2xl opacity-20 bottom-[-100px] right-[-100px]" />

      <div className="max-w-7xl mx-auto text-center mb-12 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-green-800">
          What Our Clients Say About{" "}
          <span className="bg-green-100 px-3 py-1 rounded-xl text-green-700 inline-block">
            Excel Pest Control
          </span>
        </h2>
        <p className="italic text-gray-600 mt-3 text-sm md:text-base max-w-xl mx-auto">
          "Delivering pest-free peace of mind — one home at a time."
        </p>
      </div>

      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 4500, disableOnInteraction: false }}
        spaceBetween={30}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="max-w-7xl mx-auto relative z-10"
      >
        {testimonials.map((item, idx) => (
          <SwiperSlide key={idx}>
            <div
              className={`rounded-2xl p-6 shadow-md h-full ${
                idx % 2 === 0
                  ? "bg-white text-gray-800"
                  : "bg-green-50 text-green-900"
              } border border-green-100 transition duration-300`}
            >
              <FaQuoteLeft className="text-2xl mb-4 text-green-700" />
              <p className="mb-4 italic leading-relaxed">"{item.text}"</p>
              <div>
                <p className="font-semibold text-green-800">{item.name}</p>
                <p className="text-sm text-gray-500">{item.title}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
