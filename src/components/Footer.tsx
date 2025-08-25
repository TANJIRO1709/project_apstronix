"use client"
import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 gap-4 sm:gap-8 lg:gap-12">
          {/* Left Section - Contact Info */}
          <div className="space-y-4 sm:space-y-6 lg:space-y-8 text-center">
            {/* Logo Section */}
            <div className="flex items-center justify-center space-x-1 sm:space-x-2 lg:space-x-4">
              <div className="w-8 h-8 sm:w-12 sm:h-12 lg:w-16 lg:h-16 bg-pink-400 rounded-full flex items-center justify-center">
                <div className="w-4 h-4 sm:w-6 sm:h-6 lg:w-8 lg:h-8 border-1 sm:border-2 lg:border-4 border-gray-800 rounded-full relative">
                  <div className="absolute inset-0 border-1 sm:border-2 lg:border-4 border-transparent border-l-gray-800 rotate-45"></div>
                </div>
              </div>
              <div className="w-8 h-8 sm:w-12 sm:h-12 lg:w-16 lg:h-16 bg-orange-600 rounded-full flex items-center justify-center relative">
                <div className="text-white font-bold text-xs sm:text-sm lg:text-xl">NIT</div>
                <div className="absolute -top-0.5 -right-0.5 sm:-top-1 sm:-right-1 w-3 h-3 sm:w-4 sm:h-4 lg:w-6 lg:h-6 bg-yellow-400 rounded-full"></div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-2 sm:space-y-4 lg:space-y-6">
              <div className="flex items-center justify-center space-x-2 sm:space-x-3 lg:space-x-4">
                <div className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 bg-gray-700 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-pink-400" />
                </div>
                <a 
                  href="mailto:ics@nitrkl.ac.in"
                  className="text-gray-300 hover:text-white transition-colors duration-200 text-xs sm:text-sm lg:text-base"
                >
                  ics@nitrkl.ac.in
                </a>
              </div>

              <div className="flex items-center justify-center space-x-2 sm:space-x-3 lg:space-x-4">
                <div className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 bg-gray-700 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-pink-400" />
                </div>
                <a 
                  href="tel:+916612462955"
                  className="text-gray-300 hover:text-white transition-colors duration-200 text-xs sm:text-sm lg:text-base"
                >
                  +91 661-246-2955
                </a>
              </div>

              <div className="flex items-start justify-center space-x-2 sm:space-x-3 lg:space-x-4">
                <div className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 bg-gray-700 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <MapPin className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-pink-400" />
                </div>
                <div className="text-gray-300 text-xs sm:text-sm lg:text-base">
                  ICS, Near BPCL, NITR
                </div>
              </div>
            </div>
          </div>

          {/* Right Section - Links */}
          <div className="space-y-3 sm:space-y-4 lg:space-y-6 text-center">
            <h3 className="text-white text-base sm:text-xl lg:text-2xl xl:text-3xl font-light">Links</h3>
            
            <nav className="space-y-2 sm:space-y-3 lg:space-y-4">
              <a 
                href="/offline-counselling"
                className="block text-gray-400 hover:text-white transition-colors duration-200 text-xs sm:text-sm lg:text-base xl:text-lg py-1 sm:py-1 lg:py-2"
              >
                Offline Counselling
              </a>
              
              <a 
                href="/online-counselling"
                className="block text-gray-400 hover:text-white transition-colors duration-200 text-xs sm:text-sm lg:text-base xl:text-lg py-1 sm:py-1 lg:py-2"
              >
                YOUR DOST Online Counselling
              </a>
              
              <a 
                href="/academic-counselling"
                className="block text-gray-400 hover:text-white transition-colors duration-200 text-xs sm:text-sm lg:text-base xl:text-lg py-1 sm:py-1 lg:py-2"
              >
                Academic Counselling
              </a>
              
              <a 
                href="/remedial-classes"
                className="block text-gray-400 hover:text-white transition-colors duration-200 text-xs sm:text-sm lg:text-base xl:text-lg py-1 sm:py-1 lg:py-2"
              >
                Remedial Classes
              </a>
            </nav>
          </div>
        </div>

        {/* Bottom Section - Copyright */}
        <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-gray-700">
          <div className="text-center text-gray-500 text-xs sm:text-sm">
            <p>&copy; 2024 NIT Rourkela. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;