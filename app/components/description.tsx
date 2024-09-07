import React from "react";
import { Heart } from "lucide-react";

export const Description = () => {
  const services = [
    {
      title: "Γάμος",
      items: [
        "Βίντεο",
        "Φώτο",
        "Drone",
        "Pre-wedding",
        "Day After",
        "Wedding Site",
        "Άλμπουμ",
      ],
    },
    {
      title: "Βάπτιση",
      items: [
        "Βίντεο",
        "Φώτο",
        "Drone",
        "Pre-wedding",
        "Day After",
        "Wedding Site",
        "Άλμπουμ",
      ],
    },
    {
      title: "Εκδηλώσεις",
      items: [
        "Βίντεο",
        "Φώτο",
        "Drone",
        "Pre-wedding",
        "Day After",
        "Wedding Site",
        "Άλμπουμ",
      ],
    },
    {
      title: "Εκτυπώσεις",
      items: [
        "Βίντεο",
        "Φώτο",
        "Drone",
        "Pre-wedding",
        "Day After",
        "Wedding Site",
        "Άλμπουμ",
      ],
    },
  ];
  return (
    <section className="text-center bg-[#F6F6F6]">
      <div className="flex justify-center items-center gap-4">
        <div className="border border-[#e9a257] h-0 w-12"></div>
        <h3 className="text-3xl text-[#e9a257]">
          Video & Photo Production Experts
        </h3>
        <div className="border border-[#e9a257] h-0 w-12"></div>
      </div>

      <h4 className="text-xl text-gray-600 italic">
        Καλύπτουμε όλες τις ανάγκες σας για βίντεο & φωτογραφία
      </h4>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-8">
        {services.map((service, index) => (
          <div
            key={index}
            className={`${
              index === 3 ? "md:col-start-2 lg:col-start-auto" : ""
            }`}
          >
            <Heart className="mx-auto text-[#e9a257]" />
            <p className="text-lg mt-2 text-[#e9a257] text-center">
              {service.title}
            </p>
            <ul className="italic text-sm mt-4 text-gray-600">
              {service.items.map((item, itemIndex) => (
                <li key={itemIndex} className="text-center">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};
