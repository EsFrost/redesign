import React from "react";

const getCurrentYear = () => {
  return new Date().getFullYear();
};

export const Footer = () => {
  return (
    <section className="h-[120px] flex justify-center items-center bg-[#EACFB2]">
      <p className="text-lg">
        Copyright © {getCurrentYear()} -{" "}
        <a href="https://github.com/EsFrost" target="_blank">
          Sigmund Frost
        </a>
      </p>
    </section>
  );
};
