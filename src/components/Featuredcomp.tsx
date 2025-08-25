"use client"
import { useState, useEffect } from 'react';

const FeaturedComponentsCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Sample electronic components data
  const components = [
    {
      id: 1,
      name: "Arduino Uno R3",
      description: "Microcontroller board based on ATmega328P with 14 digital I/O pins",
      price: "$24.99",
      image: "https://images.unsplash.com/photo-1553406830-ef2513450d76?w=300&h=200&fit=crop",
      category: "Microcontrollers"
    },
    {
      id: 2,
      name: "Servo Motor SG90",
      description: "Precision servo motor for robotic applications with 180° rotation",
      price: "$8.99",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=300&h=200&fit=crop",
      category: "Motors"
    },
    {
      id: 3,
      name: "Ultrasonic Sensor HC-SR04",
      description: "Distance measurement sensor with 2cm-400cm detection range",
      price: "$3.99",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=300&h=200&fit=crop",
      category: "Sensors"
    },
    {
      id: 4,
      name: "Raspberry Pi 4",
      description: "Single-board computer with quad-core ARM processor and 4GB RAM",
      price: "$75.00",
      image: "https://images.unsplash.com/photo-1566207474742-de921626ad0c?w=300&h=200&fit=crop",
      category: "Single Board Computers"
    },
    {
      id: 5,
      name: "Stepper Motor NEMA17",
      description: "High-precision stepper motor for 3D printers and CNC machines",
      price: "$15.99",
      image: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?w=300&h=200&fit=crop",
      category: "Motors"
    },
    {
      id: 6,
      name: "ESP32 DevKit",
      description: "WiFi and Bluetooth enabled microcontroller for IoT projects",
      price: "$12.99",
      image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=300&h=200&fit=crop",
      category: "Microcontrollers"
    }
  ];

  // Auto-slide functionality
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % Math.ceil(components.length / getSlidesPerView()));
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(slideInterval);
  }, [components.length]);

  // Get number of slides per view based on screen size
  const getSlidesPerView = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth >= 1024) return 3; // Desktop: 3 items
      if (window.innerWidth >= 768) return 2;  // Tablet: 2 items
      return 1; // Mobile: 1 item
    }
    return 3;
  };

  const [slidesPerView, setSlidesPerView] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      setSlidesPerView(getSlidesPerView());
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalSlides = Math.ceil(components.length / slidesPerView);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="bg-gray-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Components</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our premium selection of electronic components perfect for your robotics projects
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          <div className="overflow-hidden rounded-xl bg-white shadow-lg">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ 
                transform: `translateX(-${currentSlide * 100}%)`,
                width: `${totalSlides * 100}%`
              }}
            >
              {Array.from({ length: totalSlides }, (_, slideIndex) => (
                <div 
                  key={slideIndex}
                  className="flex"
                  style={{ width: `${100 / totalSlides}%` }}
                >
                  {components
                    .slice(slideIndex * slidesPerView, (slideIndex + 1) * slidesPerView)
                    .map((component) => (
                      <div 
                        key={component.id}
                        className={`p-6 ${
                          slidesPerView === 1 ? 'w-full' : 
                          slidesPerView === 2 ? 'w-1/2' : 'w-1/3'
                        }`}
                      >
                        <div className="group cursor-pointer">
                          {/* Image */}
                          <div className="relative overflow-hidden rounded-lg mb-4">
                            <img
                              src={component.image}
                              alt={component.name}
                              className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                            <div className="absolute top-3 left-3">
                              <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded-full">
                                {component.category}
                              </span>
                            </div>
                          </div>

                          {/* Content */}
                          <div className="space-y-2">
                            <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                              {component.name}
                            </h3>
                            <p className="text-gray-600 text-sm line-clamp-2">
                              {component.description}
                            </p>
                            <div className="flex items-center justify-between pt-2">
                              <span className="text-2xl font-bold text-blue-600">
                                {component.price}
                              </span>
                              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                                View Details
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white hover:bg-gray-50 p-3 rounded-full shadow-lg border border-gray-200 transition-colors z-10"
          >
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white hover:bg-gray-50 p-3 rounded-full shadow-lg border border-gray-200 transition-colors z-10"
          >
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center space-x-2 mt-8">
          {Array.from({ length: totalSlides }, (_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                currentSlide === index 
                  ? 'bg-blue-600' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>

        
      </div>
    </div>
  );
};

export default FeaturedComponentsCarousel;