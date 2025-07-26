"user client";
import React from "react";

export default function FeatureSection() {
return (
    <section className="bg-black text-white px-6 py-16 text-center">
      {/* Languages Supported */}
      <div className=" py-8">
        <h4 className="text-2xl font-bold">
          <span className="text-white">Languages </span>
          <span className=" bg-gradient-to-l from-[#E626FF] to-[#ff0000] bg-clip-text text-transparent bg-[length:300%_300%] bg-[position:100%_0%] animate-gradient-x">Supported</span>
        </h4>
        <p className="text-sm text-gray-300 mt-2">
          Convert code across 50+ programming languages C++ Golang
        </p>
      </div>

      {/* Video Placeholder */}
        <div className="w-[1000px] h-[530px] mx-auto rounded-lg overflow-hidden shadow-[0_0_35px_10px_rgba(255,0,125,1)]">
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