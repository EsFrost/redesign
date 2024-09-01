"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import {
  Camera,
  Aperture,
  Crop,
  Focus,
  Fullscreen,
  Printer,
  WandSparkles,
} from "lucide-react";

const images = ["/hero-1.jpg", "/hero-2.jpg", "/hero-3.jpg"];

const HeroSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [nextImageIndex, setNextImageIndex] = useState(1);
  const imagesRef = useRef(images);

  useEffect(() => {
    const interval = setInterval(() => {
      setNextImageIndex((prevIndex) =>
        prevIndex === imagesRef.current.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentImageIndex(nextImageIndex);
    }, 2500); // Half of the interval time for a smooth crossfade

    return () => clearTimeout(timer);
  }, [nextImageIndex]);

  return (
    <div className="relative h-[calc(100vh-120px)] w-full overflow-hidden">
      {/* Image Carousel */}
      {imagesRef.current.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-[2500ms] ${
            index === currentImageIndex
              ? "opacity-100"
              : index === nextImageIndex
              ? "opacity-0 z-10"
              : "opacity-0"
          }`}
        >
          <Image
            src={image}
            alt={`Slide ${index + 1}`}
            className="w-full h-full object-cover"
            width={5000}
            height={5000}
          />
        </div>
      ))}

      {/* Overlay with Text */}
      <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-[#EACFB2]">
            Video & Photo Production
          </h1>
          <div>
            <h2 className="text-xl md:text-3xl mb-4 text-[#EACFB2] flex flex-row items-center">
              <div className="border border-[#EACFB2] w-12 h-0 mr-4"></div>
              <i>Όνομα Επιχείρησης</i>
              <div className="border border-[#EACFB2] w-12 h-0 ml-4"></div>
            </h2>
            <ul className="flex flex-col items-start text-lg md:text:lg">
              <li className="text-[#EACFB2] flex items-center">
                <Camera className="mr-2 h-5" />
                Γάμος/Βάπτιση
              </li>
              <li className="text-[#EACFB2] flex items-center">
                <Aperture className="mr-2 h-5" />
                Παιδικά Πάρτυ, Παιδότοποι, Σχολεία
              </li>
              <li className="text-[#EACFB2] flex items-center">
                <Focus className="mr-2 h-5" />
                Αεροφωτογράφηση Πλοίων
              </li>
              <li className="text-[#EACFB2] flex items-center">
                <Crop className="mr-2 h-5" />
                Εγκαίνια Καταστημάτων, Συνέδρια
              </li>
              <li className="text-[#EACFB2] flex items-center">
                <Fullscreen className="mr-2 h-5" />
                Προϊοντική Φωτογράφηση
              </li>
              <li className="text-[#EACFB2] flex items-center">
                <WandSparkles className="mr-2 h-5" />
                Σχεδιασμός Λογότυπου
              </li>
              <li className="text-[#EACFB2] flex items-center">
                <Printer className="mr-2 h-5" />
                Εκτυπώσεις Παντός Είδους
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
