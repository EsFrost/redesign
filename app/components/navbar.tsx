"use client";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const menuItems = [
    { name: "Υπηρεσίες" },
    { name: "Δείγματα" },
    { name: "Το Πακέτο Σας" },
    { name: "Επικοινωνία" },
  ];

  return (
    <nav className="bg-black h-[120px] relative z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[120px]">
          {/* Desktop menu */}
          <div className="hidden lg:flex items-center justify-between w-full">
            <div className="flex-shrink-0 flex items-center">
              {menuItems.slice(0, 2).map((item) => (
                <p
                  key={item.name}
                  className="text-white hover:text-[#EACFB2] px-8 py-2 rounded-md text-lg font-medium cursor-pointer transition-all duration-300"
                >
                  {item.name}
                </p>
              ))}
            </div>
            <div className="flex-shrink-0">
              <Image src="/logo.png" alt="Site Logo" width={200} height={120} />
            </div>
            <div className="flex-shrink-0 flex items-center">
              {menuItems.slice(2).map((item) => (
                <p
                  key={item.name}
                  className="text-white hover:text-[#EACFB2] px-8 py-2 rounded-md text-lg font-medium cursor-pointer transition-all duration-300"
                >
                  {item.name}
                </p>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center mx-auto">
            <button
              onClick={toggleMenu}
              className="absolute top-[40px] left-[40px] inline-flex items-center justify-center p-2 rounded-md text-white hover:text-black hover:bg-[#EACFB2] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#EACFB2] z-50"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>

            <Image src="/logo.png" alt="Site Logo" width={200} height={120} />
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="lg:hidden absolute top-[120px] left-0 right-0 bg-black z-50 -mt-1">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {menuItems.map((item) => (
              <p
                key={item.name}
                className="text-white hover:text-[#EACFB2] px-8 py-2 rounded-md text-lg font-medium cursor-pointer"
              >
                {item.name}
              </p>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
