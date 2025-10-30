"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

function Hero() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleMenuItemClick = (sectionId: string) => {
    setIsMenuOpen(false);
    const targetSection = document.getElementById(sectionId);
    targetSection?.scrollIntoView({ behavior: "smooth" });
  };
  const closeNavbar = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <section>
      {/* Navbar */}
      <nav
        className={`fixed top-0 left-0 z-50 w-full bg-white backdrop-blur-md text-black transition-transform duration-300 ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="flex items-center justify-between px-6 md:px-12">
          {/* Logo */}
          <Image
            src="/Nav_Assests/image1-removebg.png"
            alt="logo"
            width={75}
            height={75}
            className="lg:h-[90px] lg:w-[100px]"
          />

          {/* Navbar Links for Desktop (center aligned) */}
          <div className="hidden md:flex md:items-center md:justify-center md:flex-1 gap-8 font-bold">
            <a
              onClick={() => handleMenuItemClick("About")}
              className="block px-4 py-2 lg:text-lg text-sm transition duration-300 hover:text-[#0064E0] cursor-pointer"
            >
              ABOUT US
            </a>
            <a
              onClick={() => handleMenuItemClick("Speakers")}
              className="block px-4 py-2 lg:text-lg text-sm transition duration-300 hover:text-[#0064E0] cursor-pointer"
            >
              FEATURED COMPONENTS
            </a>
           <Link
  href="/contact"
  className="block px-4 py-2 lg:text-lg text-sm transition duration-300 hover:text-[#0064E0]"
>
  CONTACT US
</Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={
                    isMenuOpen
                      ? "M6 18L18 6M6 6l12 12" // Close icon
                      : "M4 6h16M4 12h16M4 18h16" // Hamburger menu
                  }
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 left-0 z-50 w-3/5 h-screen bg-white text-black transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col items-center justify-between h-full p-4">
          {/* Menu Links */}
          <ul className="flex flex-col items-center gap-4 font-bold mt-10">
            <li>
              <a
                onClick={() => handleMenuItemClick("About")}
                className="block px-4 py-2 text-sm transition duration-300 hover:text-[#0064E0] cursor-pointer"
              >
                ABOUT US
              </a>
            </li>
            <li>
              <a
                onClick={() => handleMenuItemClick("Speakers")}
                className="block px-4 py-2 text-sm transition duration-300 hover:text-[#0064E0] cursor-pointer"
              >
                FEATURED COMPONENTS
              </a>
            </li>
            <li>
              <a
                onClick={() => handleMenuItemClick("Contact")}
                className="block px-4 py-2 text-sm transition duration-300 hover:text-[#0064E0] cursor-pointer"
              >
                CONTACT US
              </a>
            </li>
          </ul>
        </div>
      </div>
      {isMenuOpen && (
        <div
          className="fixed inset-0 z-10 bg-black bg-opacity-50"
          onClick={closeNavbar}
        />
      )}

      {/* Hero Section */}
      <div
        className="relative flex flex-col items-center justify-center h-screen bg-white text-black"
        style={{
          backgroundImage: `url('/Hero_Assests/bgImage.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="text-center z-10">
          <h1 className="text-6xl md:text-8xl ">
            <p className="text-[#0064E0] italic font-bold">Apstronix</p>
          </h1>
          <p className="mt-6 text-lg md:text-xl">
            Turn your dreams into reality. Join our community and bring your
            ideas to life.
          </p>
        </div>

        <div className="absolute bottom-16">
          <button
            onClick={() => {
              const aboutSection = document.getElementById("About");
              aboutSection?.scrollIntoView({ behavior: "smooth" });
            }}
            className="text-3xl border border-black rounded-full w-12 h-12 flex items-center justify-center transition duration-300 animate-bounce"
          >
            <Image
              src="/Hero_Assests/guidance_up-arrow-removebg-preview.png"
              alt="arrow"
              width={50}
              height={50}
            />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
