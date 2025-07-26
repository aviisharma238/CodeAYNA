"user client";
import React from 'react';


export default function GetStartedSection() {
  return (
    <section className="bg-black text-white py-20 px-4">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10">
        
        {/* Left Image */}
        <div className="w-full lg:w-1/2">
  <video
    src="/codeayna/Team spirit.mp4"
    width={500}
    height={500}
    autoPlay
    loop
    muted
    playsInline
    className="rounded-2xl "
  />
</div>

        {/* Right Content */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get Started Today for <br />
            <span className="text-[#ff0080]">FREE!</span>
          </h2>
          <p className="text-gray-300 mb-6">
            No credit card or login required.
          </p>
          <button className="bg-[#1a1a1d] text-white px-6 py-3 rounded-md hover:bg-gray-800 transition">
            Try for free
          </button>
        </div>

      </div>
    </section>
  );
}