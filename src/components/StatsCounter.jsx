import React, { useEffect, useState } from "react";
import bg from "../assets/images/home/19089.jpg"; // Use a subtle dark image

const counters = [
  { label: "Years Experience", target: 15 },
  { label: "Projects Completed", target: 1200 },
  { label: "Satisfied Clients", target: 1050 },
  { label: "Cities Covered", target: 50 },
];

export default function StatsSection() {
  const [counts, setCounts] = useState(Array(counters.length).fill(0));

  useEffect(() => {
    const intervals = counters.map((counter, i) =>
      setInterval(() => {
        setCounts((prev) => {
          const newCounts = [...prev];
          if (newCounts[i] < counter.target) {
            newCounts[i] += Math.ceil(counter.target / 100);
            if (newCounts[i] > counter.target) newCounts[i] = counter.target;
          }
          return newCounts;
        });
      }, 50)
    );

    return () => intervals.forEach((int) => clearInterval(int));
  }, []);

  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat text-white min-h-[55vh] flex items-center"
      style={{
        backgroundImage: `url(${bg})`,
      }}
    >
      <div className="absolute inset-0 bg-black/70 backdrop-blur-[1px]" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 w-full">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
          {counters.map((item, i) => (
            <div
              key={i}
              className="flex flex-col items-center justify-center gap-2"
            >
              <h2 className="text-3xl md:text-5xl font-extrabold text-[#3CB371] drop-shadow-lg">
                {counts[i]}+
              </h2>
              <p className="text-sm md:text-base font-medium text-gray-200 tracking-wide">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
