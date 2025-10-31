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
  weight: ["600"],
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
  { label: "ABOUT US", path: "/#About" },
  { label: "CAREER", path: "/career" },
  { label: "CONTACT US", path: "/contact" },
  { label: "COMPONENTS", path: "/#components" },
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
          className={`bg-[#b5a1e02f] w-[98%] sm:w-[95%] max-w-[1200px] backdrop-blur-sm shadow-xl h-[60px] md:h-[70px] flex justify-between items-center rounded-[34px] xs:rounded-[40px] sm:rounded-[62px] px-2 xs:px-4 md:px-8 ring-1 ring-[#ffffff75] ${spaceGrotesk.variable} ${poppins.variable}`}
          initial="hidden"
          animate="visible"
          variants={heroVariants}
        >
          {/* === Logo === */}
          <Link href="/" className="flex items-center gap-3 hoverable text-white">
            <img
              src="https://res.cloudinary.com/dpzac6uao/image/upload/e_background_removal/f_png/v1761857515/PHOTO-2025-10-31-02-21-45_soevap.jpg"
              alt="Logo"
              className="h-16 w-auto sm:h-16"
            />
          </Link>

          {/* === Desktop Nav === */}
          <div className="hidden md:flex flex-1 justify-around items-center gap-4 md:gap-6 px-2 md:px-6">
            {navItems.map((item) =>
              item.path.startsWith("#") ? (
                <a
                  key={item.path}
                  onClick={() => handleSmoothScroll(item.path)}
                  className={`cursor-pointer text-white font-medium hover:text-purple-300 transition-all duration-300 transform hover:scale-105 hoverable px-1 uppercase ${poppins.className}`}
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
                  className={`text-white font-medium hover:text-purple-300 transition-all duration-300 transform hover:scale-105 hoverable px-1 uppercase ${poppins.className}`}
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

      {/* === Mobile Dropdown Menu === */}
      <motion.div
        className="md:hidden fixed top-[60px] xs:top-[70px] left-0 w-full px-1 z-40"
        initial="closed"
        animate={isMenuOpen ? "open" : "closed"}
        variants={menuVariants}
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
                className={`text-white uppercase tracking-widest font-medium hover:text-purple-300 transition-all duration-300 transform hover:scale-105 hoverable text-center ${poppins.className}`}
                style={{ letterSpacing: "0.12em" }}
              >
                {item.label}
              </a>
            ) : (
              <Link
                key={item.path}
                href={item.path}
                onClick={toggleMenu}
                className={`text-white uppercase tracking-widest font-medium hover:text-purple-300 transition-all duration-300 transform hover:scale-105 hoverable text-center ${poppins.className}`}
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

export default Navbar;
