"use client";
import React from "react";

export default function GetStartedSection() {
  return (
    <section className="bg-black text-white py-20 px-4">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Left - Video */}
        <div className="w-full lg:w-1/2">
          <img
            src="/whyimg.png"
            alt="whyimg.png"
            className="w-full h-auto rounded-2xl shadow-lg"
          />
        </div>

        {/* Right - Text Content */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-snug">
            Get Started Today for <br />
            <span className="text-[#ff0080]">FREE!</span>
          </h2>
          <p className="text-gray-300 mb-6 text-sm md:text-base">
            No credit card or login required.
          </p>
          
            <a href="/converter" className="bg-[#1a1a1d] text-white px-6 py-3 rounded-md hover:bg-gray-800 transition duration-300">
              Try for free
            </a>
          
        </div>
      </div>
    </section>
  );
}
