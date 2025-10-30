"use client";
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export default function ContactUs() {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    query: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
      formRef.current,
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
    ).then(() => {
      alert('Thank you for contacting us! We will get back to you soon.');
      setFormData({ name: '', contact: '', query: '' });
    }).catch(() => {
      alert('Failed to send email. Please try again later.');
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white flex flex-col">
      <div className="flex-grow py-10 px-2 sm:py-12 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-bold text-center mb-6 sm:mb-8">
            Contact Us
          </h1>

          {/* Contact Form Box */}
          <div
            className="bg-gray-900 rounded-lg p-4 sm:p-8 border border-gray-800 hover:border-gray-700 transition-all duration-300 min-h-[480px] flex flex-col justify-center"
          >
            <form ref={formRef} onSubmit={handleSubmit}>
              <div className="mb-4 sm:mb-6">
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-3 py-2 sm:px-4 sm:py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 hover:bg-gray-750 text-white transition-all duration-200"
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div className="mb-4 sm:mb-6">
                <label htmlFor="contact" className="block text-sm font-medium mb-2">
                  Contact Number
                </label>
                <input
                  type="tel"
                  id="contact"
                  name="contact"
                  value={formData.contact}
                  onChange={handleChange}
                  className="w-full px-3 py-2 sm:px-4 sm:py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 hover:bg-gray-750 text-white transition-all duration-200"
                  placeholder="Enter your contact number"
                  required
                />
              </div>

              <div className="mb-4 sm:mb-6">
                <label htmlFor="query" className="block text-sm font-medium mb-2">
                  Your Query
                </label>
                <textarea
                  id="query"
                  name="query"
                  value={formData.query}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-3 py-2 sm:px-4 sm:py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 hover:bg-gray-750 text-white resize-none transition-all duration-200"
                  placeholder="Enter your query"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 hover:shadow-lg text-white font-semibold py-2 px-4 sm:py-3 sm:px-6 rounded-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Submit
              </button>
            </form>
          </div>

          {/* Support Channel Message */}
          <div className="text-center mb-6 sm:mb-8 py-4 sm:py-6">
            <p className="text-gray-300 mb-3 sm:mb-4 text-base sm:text-lg">
              Best way to contact us is through our support channel. Visit link below and submit the ticket.
            </p>
            <a
              href="https://support.example.com/submit-ticket"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 underline text-base sm:text-lg"
            >
              Submit a Support Ticket
            </a>
          </div>
        </div>
      </div>

      {/* Contact Information and Footer Box */}
      <div className="w-full bg-gray-900 border-t border-gray-800 p-4 sm:p-8">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8 mb-6 sm:mb-8">
            {/* Technical and Sales Queries Column */}
            <div className="flex flex-col justify-center items-start">
              <h3 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2 flex items-center gap-2">
                {/* Phone Icon */}
                <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h1.5a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 7h8M8 11h4m-1 8h5a2 2 0 002-2V7a2 2 0 00-2-2h-2" />
                </svg>
                Technical & Sales Queries
              </h3>
              <a
                href="tel:+1234567890"
                className="text-blue-400 hover:text-blue-300 text-base sm:text-lg transition-colors duration-200"
              >
                +1 (234) 567-890
              </a>
            </div>
            {/* Email Us Column shifted right and styled */}
            <div className="flex flex-col justify-center items-start sm:ml-12 border-l border-gray-700 pl-6">
              <h3 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2 flex items-center gap-2">
                {/* Mail Icon */}
                <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16 12v2a4 4 0 01-4 4m0 0a4 4 0 01-4-4v-2a4 4 0 114 0zm0 6a6 6 0 100-12 6 6 0 000 12z" />
                </svg>
                Email Us
              </h3>
              <a
                href="mailto:support@example.com"
                className="text-blue-400 hover:text-blue-300 text-base sm:text-lg transition-colors duration-200"
              >
                support@example.com
              </a>
            </div>
          </div>
          {/* Footer Section */}
          <div className="border-t border-gray-700 pt-4 sm:pt-6 text-center">
            <p className="text-gray-300 text-base sm:text-lg">
              All Days: <span className="text-white font-medium">9:15 AM&nbsp;to&nbsp;6:15 PM</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
