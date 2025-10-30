"use client";
import React from "react";

const Hero: React.FC = () => {
  return (
    <div className="relative flex flex-col items-center justify-center h-screen overflow-hidden">
      {/* === Background Image Only === */}
      <img
        src="/Hero_Assets/photo.jpg"
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover object-center -z-10"
        style={{ pointerEvents: "none" }}
      />
      {/* === Hero Content === */}
      <div className="text-center z-10">
        <h1 className="text-4xl xs:text-5xl sm:text-6xl md:text-8xl">
          <span className="text-[#0064E0] italic font-bold">Apstronix</span>
        </h1>
        <p className="mt-6 text-base xs:text-lg md:text-xl">
          Turn your dreams into reality. Join our community and bring your ideas to life.
        </p>
      </div>
      <div className="absolute bottom-16 z-10">
        <button
          onClick={() => {
            const aboutSection = document.getElementById("About");
            aboutSection?.scrollIntoView({ behavior: "smooth" });
          }}
          className="text-3xl border border-black rounded-full w-12 h-12 flex items-center justify-center transition duration-300 animate-bounce"
        >
          <img
            src="/Hero_Assests/guidance_up-arrow-removebg-preview.png"
            alt="arrow"
            className="w-[50px] h-[50px]"
          />
        </button>
      </div>
    </div>
  );
};

export default Hero;
