"user client";
import React from 'react';

const ContactForm = () => {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col items-center justify-center px-5 py-10 font-sans">
      <h2 className="text-3xl font-bold text-[#ff0080] mb-4">Contact</h2>
      <p className="text-center max-w-xl mb-8 leading-relaxed text-white">
        We would love to hear from you! Reach out to us at <strong>contact@codeAYNA.ai</strong> or use the form
        below to share any feedback or questions 💌
      </p>

      <div className="bg-white text-black rounded-xl p-8 w-full max-w-md shadow-xl">
        <form>
          <div className="mb-4">
            <label htmlFor="name" className="block font-bold mb-2 text-sm">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Your Name"
              required
              className="w-full px-4 py-3 rounded-md bg-gray-300 text-black focus:outline-none"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="message" className="block font-bold mb-2 text-sm">Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Your Message"
              required
              className="w-full px-4 py-3 rounded-md bg-gray-300 text-black min-h-[150px] resize-none focus:outline-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-black text-white font-bold px-6 py-3 rounded-md hover:bg-[#ff0080] transition duration-300 block mx-auto"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
