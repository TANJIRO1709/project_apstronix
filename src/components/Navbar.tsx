"use client";
import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const heroVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};
const menuVariants = {
  open: { opacity: 1, y: 0, pointerEvents: "auto", visibility: "visible" },
  closed: { opacity: 0, y: -20, pointerEvents: "none", visibility: "hidden" },
};

const navItems = [
  { label: "ABOUT US", path: "#About" },
  { label: "CAREER", path: "/career" },
  { label: "CONTACT US", path: "/contact" },
  { label: "COMPONENTS", path: "/components" },
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
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <>
      {/* Navbar */}
      <div className="fixed top-0 left-0 w-full z-50 flex justify-center py-6">
        <motion.nav
          className="bg-[#b5a1e02f] w-[98%] sm:w-[95%] max-w-[1200px] backdrop-blur-sm shadow-xl h-[60px] md:h-[70px] flex justify-between items-center rounded-[34px] xs:rounded-[40px] sm:rounded-[62px] px-2 xs:px-4 md:px-8 ring-1 ring-[#ffffff75]"
          initial="hidden"
          animate="visible"
          variants={heroVariants}
        >
          {/* Logo / Home link (place logo at public/logo.png or update the src) */}
          <Link href="/" className="flex items-center gap-3 hoverable text-white">
            <img src="/Hero_Assets/Logo.png" alt="Logo" className="h-7 w-auto sm:h-8" />
            <span className="sr-only">Home</span>
          </Link>
          {/* Desktop Nav */}
          <div className="hidden md:flex flex-1 justify-around items-center gap-4 md:gap-6 px-2 md:px-6">
            {navItems.map((item) =>
              item.path.startsWith("#") ? (
                <a
                  key={item.path}
                  onClick={() => handleSmoothScroll(item.path)}
                  className="cursor-pointer text-sm sm:text-base md:text-lg text-[#ffffff] font-light hover:text-purple-300 transition-all duration-300 transform hover:scale-105 hoverable px-1"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  key={item.path}
                  href={item.path}
                  className="text-sm sm:text-base md:text-lg text-[#ffffff] font-light hover:text-purple-300 transition-all duration-300 transform hover:scale-105 hoverable px-1"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  {item.label}
                </Link>
              )
            )}
          </div>
          {/* Hamburger for Mobile */}
          <button
            onClick={toggleMenu}
            className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1 cursor-pointer z-50 hoverable"
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

      {/* Mobile Menu Dropdown */}
      <motion.div
        className="md:hidden fixed top-[60px] xs:top-[70px] left-0 w-full px-1 z-40"
        initial="closed"
        animate={isMenuOpen ? "open" : "closed"}
        variants={menuVariants}
        style={{
          pointerEvents: isMenuOpen ? "auto" : "none",
          visibility: isMenuOpen ? "visible" : "hidden",
        }}
      >
        <div className="mx-auto w-full max-w-[420px] bg-[#b5a1e015] backdrop-blur-md rounded-2xl overflow-hidden ring-1 ring-[#ffffff75] flex flex-col items-center gap-4 py-6 px-2 xs:px-4">
          {navItems.map((item) =>
            item.path.startsWith("#") ? (
              <a
                key={item.path}
                onClick={() => {
                  toggleMenu();
                  handleSmoothScroll(item.path);
                }}
                className="text-sm sm:text-base text-[#ffffff] font-light hover:text-purple-300 transition-all duration-300 transform hover:scale-105 hoverable w-full text-center cursor-pointer"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                {item.label}
              </a>
            ) : (
              <Link
                key={item.path}
                href={item.path}
                onClick={toggleMenu}
                className="text-sm sm:text-base text-[#ffffff] font-light hover:text-purple-300 transition-all duration-300 transform hover:scale-105 hoverable w-full text-center"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
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

export default Navbar;
