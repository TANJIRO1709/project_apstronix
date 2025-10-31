"use client";
import React, { useState, useEffect, useRef } from "react";
import { Poppins, Space_Grotesk } from "next/font/google";

// === Google Fonts ===
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-poppins",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-space-grotesk",
});

function CountUp({
  end,
  trigger,
  suffix = "",
}: {
  end: number;
  trigger: boolean;
  suffix?: string;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!trigger) return;

    setCount(0);
    let current = 0;
    const increment = Math.ceil(end / 50);
    const interval = setInterval(() => {
      current += increment;
      if (current >= end) {
        setCount(end);
        clearInterval(interval);
      } else {
        setCount(current);
      }
    }, 30);

    return () => clearInterval(interval);
  }, [end, trigger]);

  return (
    <span className={`text-xl md:text-4xl text-white ${poppins.className}`}>
      {count.toLocaleString() + suffix}
    </span>
  );
}

function About() {
  const [triggerCount, setTriggerCount] = useState(false);
  const aboutRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTriggerCount(true);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
    };
  }, []);

  return (
    <div
      id="About"
      ref={aboutRef}
      className="bg-gradient-to-br from-black via-gray-900 to-black"
    >
      {/* === Heading === */}
      <div
        className={`text-white text-6xl flex justify-center p-10 font-bold ${poppins.className}`}
      >
        About Us
      </div>

      {/* === About Content === */}
      <div
        className={`p-8 text-lg md:text-xl text-white max-w-7xl mx-auto space-y-6 ${spaceGrotesk.className}`}
      >
        <p className="text-center lg:text-center">
          Apstronics Technologies Private Limited is a deep-tech company focused
          on delivering innovative solutions in the fields of industrial
          automation, embedded systems, IoT, UAV (Drone) technologies, and
          customized R&D product development.
        </p>

        <p className="text-center lg:text-center">
          Founded and incubated at FTBI, NIT Rourkela, Apstronics is driven by a
          strong vision to bridge the gap between practical industrial
          challenges and innovative technological solutions. We specialize in
          the end-to-end design, development, and manufacturing of customized
          solutions tailored to the unique needs of industries, research
          institutes, and startups.
        </p>

        <p className="text-center lg:text-center">
          At Apstronics, we believe in{" "}
          <span className="font-semibold">
            Make in India, Design in India, and Innovate for the World
          </span>
          . Every product and solution we build reflects our strong emphasis on
          quality, performance, and long-term reliability.
        </p>

        {/* === Vision & Mission === */}
        <div className="grid md:grid-cols-2 gap-8 pt-6">
          <div>
            <h3
              className={`text-2xl font-bold mb-4 text-center md:text-left ${poppins.className}`}
            >
              Our Vision
            </h3>
            <p>
              To become a globally recognized technology partner, delivering
              high-end, innovative, and reliable solutions that contribute to
              industrial growth, safety, and sustainability.
            </p>
          </div>

          <div>
            <h3
              className={`text-2xl font-bold mb-4 text-center md:text-left ${poppins.className}`}
            >
              Our Mission
            </h3>
            <ul className="space-y-2 list-disc list-inside">
              <li>
                Provide customized automation, embedded, and sensing solutions
                across industries
              </li>
              <li>
                Offer end-to-end product design, prototyping, and manufacturing
                services
              </li>
              <li>
                Foster research, innovation, and skill development among young
                engineers
              </li>
              <li>
                Continuously improve through R&D and practical field deployments
              </li>
            </ul>
          </div>
        </div>

        {/* === Core Expertise === */}
        <div className="pt-6">
          <h3
            className={`text-2xl font-bold mb-4 text-center ${poppins.className}`}
          >
            Our Core Areas of Expertise
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {[
              "Industrial Automation",
              "Embedded Systems",
              "IoT & Wireless Solutions",
              "Drone & UAV Tech",
              "Sensor Integration",
              "Environmental Monitoring",
              "Photocatalytic Reactors",
              "Custom Prototyping",
            ].map((area) => (
              <div key={area} className="bg-gray-800/50 p-4 rounded-lg">
                {area}
              </div>
            ))}
          </div>
        </div>

        {/* === Why Choose Us === */}
        <div className="pt-6">
          <h3
            className={`text-2xl font-bold mb-4 text-center ${poppins.className}`}
          >
            Why Choose Us?
          </h3>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              "100% In-house Design",
              "Customized Solutions",
              "Strong R&D Capabilities",
              "Industry Collaboration",
              "Professional Team",
              "Quality & Reliability",
            ].map((reason) => (
              <div
                key={reason}
                className="bg-gray-800/30 p-4 rounded-lg text-center"
              >
                <p className="font-semibold">{reason}</p>
              </div>
            ))}
          </div>
        </div>

        {/* === Closing Statement === */}
        <div className="pt-6 text-center">
          <p
            className={`text-xl font-semibold italic ${spaceGrotesk.className}`}
          >
            We are committed to delivering technology that works — solutions
            that are practical, scalable, and built to perform. From initial
            concept to full-scale deployment, Apstronics stands with its clients
            at every step.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
