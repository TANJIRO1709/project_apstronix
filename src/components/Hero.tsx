"use client";
import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Space_Grotesk, Poppins } from "next/font/google";

// === Fonts ===
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-space-grotesk",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-poppins",
});

// === Animation Variants ===
const heroVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const menuVariants = {
  open: { opacity: 1, y: 0, pointerEvents: "auto", visibility: "visible" },
  closed: { opacity: 0, y: -20, pointerEvents: "none", visibility: "hidden" },
};

// === Navbar Links ===
const navItems = [
  { label: "ABOUT US", path: "#About" },
  { label: "CAREER", path: "/career" },
  { label: "CONTACT US", path: "/contact" },
  { label: "COMPONENTS", path: "#components" },
  { label: "SHOP", path: "/shop" },
];

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleSmoothScroll = (path: string) => {
    setIsMenuOpen(false);
    if (path.startsWith("#")) {
      const sectionId = path.substring(1);
      const targetSection = document.getElementById(sectionId);
      if (targetSection) targetSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* === Navbar Container === */}
      <div className="fixed top-0 left-0 w-full z-50 flex justify-center py-6">
        <motion.nav
          className={`bg-[#0d0d0d]/90 w-[98%] sm:w-[95%] max-w-[1200px] shadow-lg h-[60px] md:h-[70px] flex justify-between items-center rounded-[34px] xs:rounded-[40px] sm:rounded-[62px] px-2 xs:px-4 md:px-8 border border-[#3f3f3f] ${spaceGrotesk.variable} ${poppins.variable}`}
          initial="hidden"
          animate="visible"
          variants={heroVariants}
        >
          {/* === Logo === */}
          <Link href="/" className="flex items-center gap-3 text-white">
            <img
              src="https://res.cloudinary.com/dpzac6uao/image/upload/e_background_removal/f_png/v1761857515/PHOTO-2025-10-31-02-21-45_soevap.jpg"
              alt="Logo"
              className="h-14 w-auto sm:h-16"
            />
          </Link>

          {/* === Desktop Nav === */}
          <div className="hidden md:flex flex-1 justify-around items-center gap-4 md:gap-6 px-2 md:px-6">
            {navItems.map((item) =>
              item.path.startsWith("#") ? (
                <a
                  key={item.path}
                  onClick={() => handleSmoothScroll(item.path)}
                  className={`cursor-pointer text-white font-medium hover:text-purple-400 transition-all duration-300 transform hover:scale-105 px-1 uppercase ${poppins.className}`}
                  style={{
                    letterSpacing: "0.15em",
                    fontSize: "1rem",
                  }}
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  key={item.path}
                  href={item.path}
                  className={`text-white font-medium hover:text-purple-400 transition-all duration-300 transform hover:scale-105 px-1 uppercase ${poppins.className}`}
                  style={{
                    letterSpacing: "0.15em",
                    fontSize: "1rem",
                  }}
                >
                  {item.label}
                </Link>
              )
            )}
          </div>

          {/* === Hamburger (Mobile) === */}
          <button
            onClick={toggleMenu}
            className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1 cursor-pointer z-50"
            aria-label="Toggle menu"
          >
            <span
              className={`block h-0.5 w-full bg-white rounded-sm transform transition duration-300 ease-in-out origin-[1px_1px] ${
                isMenuOpen ? "rotate-45 translate-y-0.5" : "rotate-0"
              }`}
            />
            <span
              className={`block h-0.5 w-full bg-white rounded-sm transition-opacity duration-300 ease-in-out ${
                isMenuOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`block h-0.5 w-full bg-white rounded-sm transform transition duration-300 ease-in-out origin-[1px_0px] ${
                isMenuOpen ? "-rotate-45 -translate-y-0.5" : "rotate-0"
              }`}
            />
          </button>
        </motion.nav>
      </div>

      {/* === Mobile Dropdown Menu === */}
      <motion.div
        className="md:hidden fixed top-[60px] xs:top-[70px] left-0 w-full px-1 z-40"
        initial="closed"
        animate={isMenuOpen ? "open" : "closed"}
        variants={menuVariants}
      >
        <div className="mx-auto w-full max-w-[420px] bg-[#0d0d0d]/95 rounded-2xl overflow-hidden border border-[#3f3f3f] flex flex-col items-center gap-4 py-6 px-2 xs:px-4">
          {navItems.map((item) =>
            item.path.startsWith("#") ? (
              <a
                key={item.path}
                onClick={() => {
                  toggleMenu();
                  handleSmoothScroll(item.path);
                }}
                className={`text-white uppercase tracking-widest font-medium hover:text-purple-400 transition-all duration-300 transform hover:scale-105 text-center ${poppins.className}`}
                style={{ letterSpacing: "0.12em" }}
              >
                {item.label}
              </a>
            ) : (
              <Link
                key={item.path}
                href={item.path}
                onClick={toggleMenu}
                className={`text-white uppercase tracking-widest font-medium hover:text-purple-400 transition-all duration-300 transform hover:scale-105 text-center ${poppins.className}`}
                style={{ letterSpacing: "0.12em" }}
              >
                {item.label}
              </Link>
            )
          )}
        </div>
      </motion.div>
    </>
  );
};

// === HERO SECTION ===
const Hero: React.FC = () => {
  return (
    <section
      className={`relative flex flex-col items-center justify-center min-h-screen text-white overflow-hidden ${poppins.className}`}
    >
      {/* === Background Image === */}
      <div className="absolute inset-0 z-0">
        <div
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://res.cloudinary.com/dpzac6uao/image/upload/v1761840882/PHOTO-2025-10-30-21-44-35_zu1wt8.jpg')",
            filter: "brightness(0.85) contrast(1.1) saturate(1.2)",
          }}
        />
        {/* Soft gradient overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/70" />
      </div>

      {/* === Hero Content === */}
      <div className="relative z-10 text-center px-4 pt-20">
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold italic text-[#8e7fff] drop-shadow-[0_4px_8px_rgba(0,0,0,0.6)]">
          Apstronix
        </h1>
        <p className="mt-6 text-lg sm:text-xl md:text-2xl max-w-2xl mx-auto text-gray-200 leading-relaxed">
          Turn your dreams into reality. Join our community and bring your ideas to life.
        </p>
      </div>

      {/* === Scroll Button === */}
      <div className="absolute bottom-12 z-10">
        <button
          onClick={() => {
            const aboutSection = document.getElementById("About");
            aboutSection?.scrollIntoView({ behavior: "smooth" });
          }}
          className="border-2 border-white rounded-full w-14 h-14 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:bg-white/10 animate-bounce"
          aria-label="Scroll to About section"
        >
         <svg
  xmlns="http://www.w3.org/2000/svg"
  fill="none"
  viewBox="0 0 24 24"
  strokeWidth={2.5}
  stroke="currentColor"
  className="w-6 h-6"
>
  <path
    strokeLinecap="round"
    strokeLinejoin="round"
    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
  />
</svg>

        </button>
      </div>
    </section>
  );
};

// === COMBINED COMPONENT ===
export default function HeroWithNavbar() {
  return (
    <>
      <Navbar />
      <Hero />
    </>
  );
}
