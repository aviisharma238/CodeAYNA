"user client";
import React from 'react';
import { FaInfinity, FaTrophy, FaTools, FaShieldAlt } from 'react-icons/fa';

function WhyUseCodeConvert() {
  return (
    <section className="bg-[#1a1a1d] text-white py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">
          Why use <span className="bg-gradient-to-l to-[#ff0000] from-[#E626FF] bg-clip-text text-transparent">Code Convert</span>
        </h2>
        <p className="text-gray-300 mb-16">
          With automated code conversion, you don't have to spend hours manually rewriting code in a different language.
        </p>

        <div className="relative flex h-300 justify-center items-center">
          {/* Left Features */}
          <div className="flex flex-col gap-24 text-left">
            <div className="flex items-start gap-4 max-w-xs">
              <FaInfinity className="text-cyan-400 text-5xl" />
              <div>
                <h3 className="font-semibold text-lg mb-1">Unlimited Use</h3>
                <p className="text-gray-400 text-sm">
                  All our paid plans come with unlimited usage. Convert as much code as you want using our web tool.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 max-w-xs">
              <FaTrophy className="text-cyan-400 text-5xl" />
              <div>
                <h3 className="font-semibold text-lg mb-1">High Quality Code</h3>
                <p className="text-gray-400 text-sm">
                  We use advanced AI models to ensure your code is converted with the highest accuracy and quality.
                </p>
              </div>
            </div>
          </div>

          {/* Center Mockup */}
          <div className="mx-10">
            <div className="transform rotate-[-15deg]  w-full h-72 flex items-center justify-center shadow-xl rounded-lg">
              <img src="/phone.png" alt="Code Convert Mockup" className="w-full h-full object-cover rounded-lg" />
            </div>
          </div>

          {/* Right Features */}
          <div className="flex flex-col gap-24 text-left">
            <div className="flex items-start gap-4 max-w-xs">
              <FaTools className="text-cyan-400 text-5xl" />
              <div>
                <h3 className="font-semibold text-lg mb-1">No Setup Required</h3>
                <p className="text-gray-400 text-sm">
                  No need to download or install any software. Just paste your code and click a button to convert it.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 max-w-xs">
              <FaShieldAlt className="text-cyan-400 text-5xl" />
              <div>
                <h3 className="font-semibold text-lg mb-1">Privacy and Security</h3>
                <p className="text-gray-400 text-sm">
                  We take your privacy seriously. We never store or share your input or output code.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyUseCodeConvert;
