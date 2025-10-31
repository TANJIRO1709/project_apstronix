"use client";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function ContactUs() {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    query: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formRef.current) return;

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string,
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string
      )
      .then(() => {
        alert("Thank you for contacting us! We will get back to you soon.");
        setFormData({ name: "", contact: "", query: "" });
      })
      .catch(() => {
        alert("Failed to send email. Please try again later.");
      });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white flex flex-col">
      {/* === Contact Form Section === */}
      <div className="flex-grow py-10 px-4 sm:py-12 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-center mb-10 pt-14">
            Contact Us
          </h1>

          <div className="bg-gray-900 rounded-lg p-6 sm:p-8 border border-gray-800 hover:border-gray-700 transition-all duration-300 shadow-xl">
            <form ref={formRef} onSubmit={handleSubmit}>
              {/* === Name Field === */}
              <div className="mb-6">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2 text-gray-300"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-400"
                  placeholder="Enter your name"
                  required
                />
              </div>

              {/* === Contact Field === */}
              <div className="mb-6">
                <label
                  htmlFor="contact"
                  className="block text-sm font-medium mb-2 text-gray-300"
                >
                  Contact Number
                </label>
                <input
                  type="tel"
                  id="contact"
                  name="contact"
                  value={formData.contact}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-400"
                  placeholder="Enter your contact number"
                  required
                />
              </div>

              {/* === Query Field === */}
              <div className="mb-6">
                <label
                  htmlFor="query"
                  className="block text-sm font-medium mb-2 text-gray-300"
                >
                  Your Query
                </label>
                <textarea
                  id="query"
                  name="query"
                  value={formData.query}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-400 resize-none"
                  placeholder="Enter your query"
                  required
                />
              </div>

              {/* === Submit Button === */}
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Submit
              </button>
            </form>
          </div>

          {/* === Support Message === */}
          <div className="text-center mt-10">
            <p className="text-gray-400 mb-3 text-base sm:text-lg">
              The best way to reach us is through our support channel.
            </p>
            
          </div>
        </div>
      </div>

      {/* === Contact Info Footer === */}
      <div className="w-full bg-gray-900 border-t border-gray-800 p-6 sm:p-8">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 mb-6">
            {/* Technical & Sales Queries */}
            <div className="flex flex-col">
              <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-blue-400"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 5a2 2 0 012-2h1.5a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8 7h8M8 11h4m-1 8h5a2 2 0 002-2V7a2 2 0 00-2-2h-2"
                  />
                </svg>
                Technical & Sales Queries
              </h3>
              <a
                href="tel:+917008717365"
                className="text-blue-400 hover:text-blue-300 text-lg transition-colors duration-200"
              >
                7008717365 / 8847834048
              </a>
            </div>

            {/* Email Us */}
            <div className="flex flex-col sm:border-l border-gray-700 sm:pl-6">
              <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-blue-400"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16 12v2a4 4 0 01-4 4m0 0a4 4 0 01-4-4v-2a4 4 0 114 0zm0 6a6 6 0 100-12 6 6 0 000 12z"
                  />
                </svg>
                Email Us
              </h3>
              <a
                href="mailto:purushotam.apstronics@gmail.com"
                className="text-blue-400 hover:text-blue-300 text-lg transition-colors duration-200"
              >
                purushotam.apstronics@gmail.com
              </a>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-4 text-center">
            <p className="text-gray-400 text-base sm:text-lg">
              Working Hours:{" "}
              <span className="text-white font-medium">
                9:15 AM – 6:15 PM (All Days)
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
