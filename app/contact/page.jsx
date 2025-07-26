"use client";
import React from 'react';

const ContactForm = () => {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col items-center justify-center px-5 py-16 font-sans">
      <h2 className="text-4xl font-extrabold text-[#ff0080] mb-4">Contact</h2>
      <p className="text-center max-w-xl mb-8 text-gray-200 leading-relaxed">
        We'd love to hear from you! Reach out at <strong>contact@codeAYNA.ai</strong> or use the form below to share any feedback or questions 💌
      </p>

      <div className="bg-white text-black rounded-xl p-6 sm:p-8 w-full max-w-md shadow-lg">
        <form>
          {/* Name Input */}
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-semibold mb-1">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Your Name"
              required
              className="w-full px-4 py-2 rounded-md bg-gray-200 focus:outline-none focus:ring-2 focus:ring-[#ff0080]"
            />
          </div>

          {/* Message Box */}
          <div className="mb-6">
            <label htmlFor="message" className="block text-sm font-semibold mb-1">Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Your Message"
              required
              className="w-full px-4 py-2 rounded-md bg-gray-200 min-h-[120px] resize-none focus:outline-none focus:ring-2 focus:ring-[#ff0080]"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-[#ff0080] text-white font-semibold py-2 rounded-md hover:bg-[#e60073] transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
