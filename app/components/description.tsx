import React from "react";
import { Heart } from "lucide-react";
import Image from "next/image";

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
    <section className="text-center bg-[#F6F6F6] py-12">
      <div className="flex justify-center items-center gap-4 px-4 lg:px-0">
        <div className="border border-[#e9a257] h-0 w-12"></div>
        <h3 className="text-3xl text-[#e9a257]">
          Video & Photo Production Experts
        </h3>
        <div className="border border-[#e9a257] h-0 w-12"></div>
      </div>

      <h4 className="text-xl text-gray-600 italic mt-2">
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
            <ul className="italic mt-4 text-gray-600">
              {service.items.map((item, itemIndex) => (
                <li key={itemIndex} className="text-center">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="mt-12">
        <div className="flex justify-center items-center gap-4 px-4 lg:px-0">
          <div className="border border-[#e9a257] h-0 w-12"></div>
          <h3 className="text-3xl text-[#e9a257]">
            Ψηφιακά άλμπουμ & εκτυπώσεις
          </h3>
          <div className="border border-[#e9a257] h-0 w-12"></div>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center mx-auto max-w-7xl mt-4">
          <Image
            width={1000}
            height={1000}
            src={"/photo-album.jpg"}
            alt="Album of photos"
            className="w-full h-auto px-4 md:w-1/3"
          />
          <div className="flex flex-col text-gray-600 px-4 lg:px-0 max-w-xl mt-8 md:mt-0">
            <p>
              Επιλέξτε να εκτυπώσετε σε εμάς τα ψηφιακά σας άλμπουμ ή και τις
              φωτογραφίες απο τον γάμο, την βάπτιση ή την εκδήλωση σας και
              κερδίστε μοναδικές εκπτώσεις!
            </p>
            <p className="mt-4">
              Αναλαμβάνουμε εκτύπωση σε κάθε είδους υλικό όπως καμβά, κούπα,
              πέτρα, φωτογραφικό και μή χαρτί, καθώς και οτιδήποτε άλλο θέλετε
            </p>
            <p className="mt-4">
              Επικοινωνήστε μαζί μας για να μάθετε τιμές και προσφορές!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
