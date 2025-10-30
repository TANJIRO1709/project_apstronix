"use client";
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export default function Careers() {
  const formRef = useRef();
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);

    emailjs.sendForm(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
      process.env.NEXT_PUBLIC_EMAILJS_CAREER_TEMPLATE_ID,
      formRef.current,
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
    ).then(() => {
      alert('Thank you for applying! We will review your application and get back to you soon.');
      formRef.current.reset();
      setSubmitting(false);
    }).catch(() => {
      alert('Failed to send application. Please try again later.');
      setSubmitting(false);
    });
  };

  return (
    <div className="flex-grow py-10 px-2 sm:py-12 sm:px-6 lg:px-8">
      <div className="max-w-4xl h-120 sm:h-[550px] lg:h-[700px] mx-auto">
        <h1 className="pt-12 sm:pt-16 text-3xl sm:text-4xl font-bold text-center mb-6 sm:mb-8 transition-all duration-500 hover:text-blue-400 hover:scale-110">
          HIRING
        </h1>
        <h2 className="text-xl sm:text-2xl font-semibold text-center mb-8 sm:mb-12 text-gray-300">
          Open for Hardware Engineering
        </h2>
        <div className="bg-gray-900 rounded-lg p-4 sm:p-8 border border-gray-800 hover:border-gray-700 transition-all duration-300 ">
          <form ref={formRef} onSubmit={handleSubmit}>
            {/* Name Field */}
            <div className="mb-4 sm:mb-6">
              <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-3 py-2 sm:px-4 sm:py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 hover:bg-gray-750 text-white transition-all duration-200"
                placeholder="Enter your name"
                required
              />
            </div>
            {/* Contact Number Field */}
            <div className="mb-4 sm:mb-6">
              <label htmlFor="contact" className="block text-sm font-medium mb-2">Contact Number</label>
              <input
                type="tel"
                id="contact"
                name="contact"
                className="w-full px-3 py-2 sm:px-4 sm:py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 hover:bg-gray-750 text-white transition-all duration-200"
                placeholder="Enter your contact number"
                required
              />
            </div>
            {/* Resume Google Drive Link Field */}
            <div className="mb-4 sm:mb-6">
              <label htmlFor="resume_link" className="block text-sm font-medium mb-2">Resume (Google Drive Link)</label>
              <input
                type="url"
                id="resume_link"
                name="resume_link"
                className="w-full px-3 py-2 sm:px-4 sm:py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 hover:bg-gray-750 text-white transition-all duration-200"
                placeholder="Paste your Google Drive link here"
                required
              />
              <p className="py-4 text-xs text-gray-400 mt-2">
                Upload your resume to Google Drive and paste the shareable link here
              </p>
            </div>
            <button
              type="submit"
              disabled={submitting}
              className="w-full bg-blue-600 hover:bg-blue-700 hover:shadow-lg text-white font-semibold py-2 px-4 sm:py-3 sm:px-6 rounded-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {submitting ? "Submitting..." : "Submit Application"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
