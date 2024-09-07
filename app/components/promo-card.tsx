import React from "react";
import Image from "next/image";
import { Aperture } from "lucide-react";

export const PromoCard = () => {
  return (
    <section className="w-full min-h-screen py-16 bg-[url('/shutter-promo-card.png')] bg-cover bg-center">
      <div className="h-screen flex">
        <div className="flex justify-center mx-auto items-center">
          <div className=" max-w-7xl shadow-none md:shadow-[0_0_0_4px_rgba(0,0,0,1)] p-1">
            <div className="border-[4px] mt-[334px] md:mt-0 border-black p-6 bg-[#F5F5F5] relative">
              <Image
                src="/flower-3.png"
                width={2000}
                height={2000}
                alt="Logo"
                className="absolute top-0 left-0 w-auto h-auto z-0"
              />
              <div className="flex flex-col md:flex-row text-3xl relative z-10">
                <div className="w-full justify-center items-center md:w-1/2 order-2 md:order-1">
                  <Image
                    src="/hero-3.jpg"
                    width={2000}
                    height={2000}
                    alt="Rings"
                    className="w-[calc(100%-32px)] md:w-full h-auto mx-4 my-4 -rotate-6 transition-all duration-300 hover:rotate-0 shadow-[10px_35px_18px_4px_rgba(0,0,0,0.25)] hover:shadow-[5px_5px_18px_4px_rgba(0,0,0,0.25)]"
                  />
                  <Image
                    src="/hero-2.jpg"
                    width={2000}
                    height={2000}
                    alt="Rings"
                    className="w-[calc(100%-32px)] md:w-full h-auto mx-4 mb-4 mt-12 md:mt-4 rotate-2 transition-all duration-300 hover:rotate-0 shadow-[15px_10px_18px_4px_rgba(0,0,0,0.25)] hover:shadow-[5px_5px_18px_4px_rgba(0,0,0,0.25)]"
                  />
                  <p className="text-gray-400 text-center text-sm">
                    w w w . m y s i t e . c o m
                  </p>
                </div>
                <div className="w-full justify-center items-center md:w-1/2 md:mx-4 my-4 order-1 md:order-2 text-center flex flex-col">
                  <Image
                    src="/logo.png"
                    width={2000}
                    height={2000}
                    alt="Site Logo"
                    className="w-32 h-auto mx-auto mb-8"
                  />
                  <h2 className="text-3xl my-2 font-bold">Προσφορά</h2>
                  <h3 className="text-xl mb-6">Γάμου / Βάπτισης</h3>
                  <h3 className="text-2xl font-bold mb-8">600€</h3>
                  <ul className="text-[1.2rem] leading-10">
                    <li className="flex justify-center items-center">
                      <Aperture className="w-2 h-2 mr-1" /> Φώτο / βίντεο
                      μυστηρίου
                    </li>
                    <li className="flex justify-center items-center">
                      <Aperture className="w-2 h-2 mr-1" />
                      Photoshoot μετά το μυστήριο
                    </li>
                    <li className="flex justify-center items-center">
                      <Aperture className="w-2 h-2 mr-1" />
                      Φώτο/βίντεο δεξίωσης (3 ώρες)
                    </li>
                    <li className="flex justify-center items-center">
                      <Aperture className="w-2 h-2 mr-1" />
                      Όλες οι φώτο σε υψηλή ανάλυση
                    </li>
                    <li className="flex justify-center items-center">
                      <Aperture className="w-2 h-2 mr-1" /> Μονταρισμένο βίντεο
                      + 3λεπτο κλιπ
                    </li>
                    <li className="flex justify-center items-center">
                      <Aperture className="w-2 h-2 mr-1" />
                      Παράδοση σε USB stick
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
