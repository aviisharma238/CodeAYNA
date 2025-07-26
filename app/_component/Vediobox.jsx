"use client";
import React from "react";

export default function FeatureSection() {
  return (
    <section className="bg-black text-white px-4 md:px-6 py-16 text-center">
      {/* Title Section */}
      <div className="py-8">
        <h4 className="text-3xl md:text-4xl font-bold">
          <span className="text-white">Languages </span>
          <span className="bg-gradient-to-l from-[#E626FF] to-[#ff0000] bg-clip-text text-transparent bg-[length:300%_300%] bg-[position:100%_0%] animate-gradient-x">
            Supported
          </span>
        </h4>
        <p className="text-sm md:text-base text-gray-300 mt-2">
          Convert code across 50+ programming languages like C++, Golang, Python & more.
        </p>
      </div>

      {/* Video Section */}
      <div className="max-w-[1000px] w-full h-[55vw] md:h-[530px] mx-auto rounded-lg overflow-hidden shadow-[0_0_35px_10px_rgba(255,0,125,1)]">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover pointer-events-none select-none"
        >
          <source src="/video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
}
