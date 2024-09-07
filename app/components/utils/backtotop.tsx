"use client";
import React, { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

const BackToTopButton: React.FC = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      setScrollPercentage(scrollPercent);
      setIsVisible(scrollTop > 100); // Show button when scrolled down 100px
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-4 right-4 p-2 rounded-full bg-[#e9a257] text-white shadow-lg transition-all duration-300 hover:bg-[#9a6b3a] focus:outline-none focus:ring-2 focus:ring-[#9a6b3a] z-50"
      style={{
        background: `linear-gradient(to top, #9a6b3a ${scrollPercentage}%, #e9a257 ${scrollPercentage}%)`,
      }}
      aria-label="Scroll to top"
    >
      <ArrowUp size={24} />
    </button>
  );
};

export default BackToTopButton;
