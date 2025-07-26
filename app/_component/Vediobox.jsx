"use client";
import React from "react";
import { FaInfinity, FaTrophy, FaTools, FaShieldAlt } from "react-icons/fa";

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
      <div className="max-w-[1000px] w-full h-[55vw] md:h-[530px] mx-auto rounded-lg overflow-hidden shadow-[0_0_200px_10px_rgba(255,0,125,1)]">
        <video
          src="/video.mp4"
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

      <div className="max-w-6xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Why use{" "}
                <span className="bg-gradient-to-l to-[#ff0000] from-[#E626FF] bg-clip-text text-transparent">
                  Code Convert
                </span>
              </h2>
              <p className="text-gray-300 mb-16 max-w-2xl mx-auto">
                With automated code conversion, you don't have to spend hours manually
                rewriting code in a different language.
              </p>
      
              <div className="flex flex-col md:flex-row items-center justify-between gap-12">
                {/* Left Features */}
                <div className="flex flex-col gap-16 text-left items-start">
                  <div className="flex items-start gap-4 max-w-xs">
                    <FaInfinity className="text-cyan-400 text-6xl " />
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Unlimited Use</h3>
                      <p className="text-gray-400 text-sm">
                        All our paid plans come with unlimited usage. Convert as much
                        code as you want using our web tool.
                      </p>
                    </div>
                  </div>
      
                  <div className="flex items-start gap-4 max-w-xs">
                    <FaTrophy className="text-cyan-400 text-6xl " />
                    <div>
                      <h3 className="font-semibold text-lg mb-1">High Quality Code</h3>
                      <p className="text-gray-400 text-sm">
                        We use advanced AI models to ensure your code is converted
                        with the highest accuracy and quality.
                      </p>
                    </div>
                  </div>
                </div>
      
                {/* Center Image */}
                <div className="mx-auto md:mx-0 transform rotate-[-15deg] w-[250px] md:w-[300px] lg:w-[350px] shadow-2xl rounded-lg overflow-hidden">
                  <img
                    src="/phone.png"
                    alt="Code Convert Mockup"
                    width={350}
                    height={350}
                    className="w-full h-full object-cover"
                  />
                </div>
      
                {/* Right Features */}
                <div className="flex flex-col gap-16 text-left items-start">
                  <div className="flex items-start gap-4 max-w-xs">
                    <FaTools className="text-cyan-400 text-6xl " />
                    <div>
                      <h3 className="font-semibold text-lg mb-1">No Setup Required</h3>
                      <p className="text-gray-400 text-sm">
                        No need to download or install any software. Just paste your
                        code and click a button to convert it.
                      </p>
                    </div>
                  </div>
      
                  <div className="flex items-start gap-4 max-w-xs">
                    <FaShieldAlt className="text-cyan-400 text-6xl " />
                    <div>
                      <h3 className="font-semibold text-lg mb-1">
                        Privacy and Security
                      </h3>
                      <p className="text-gray-400 text-sm">
                        We take your privacy seriously. We never store or share your
                        input or output code.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

    </section>
  );
}
