"use client";
import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const orbiters = [
  { src: "/codeimg/c.svg", alt: "C", top: "12%", left: "50%" },
  { src: "/codeimg/c++.svg", alt: "C++", top: "30%", left: "85%" },
  { src: "/codeimg/python.svg", alt: "Python", top: "60%", left: "90%" },
  { src: "/codeimg/mysql.svg", alt: "MySQL", top: "75%", left: "65%" },
  { src: "/codeimg/sql.svg", alt: "SQL", top: "85%", left: "35%" },
  {
    src: "/codeimg/javascript.svg",
    alt: "JavaScript",
    top: "60%",
    left: "10%",
  },
  { src: "/codeimg/java.svg", alt: "Java", top: "35%", left: "10%" },
  { src: "/codeimg/php.svg", alt: "PHP", top: "10%", left: "30%" },
  { src: "/codeimg/ruby.svg", alt: "Ruby", top: "40%", left: "70%" },
  { src: "/codeimg/swift.svg", alt: "Swift", top: "85%", left: "50%" },
  {
    src: "/codeimg/typescript.svg",
    alt: "TypeScript",
    top: "18%",
    left: "75%",
  },
  { src: "/codeimg/kotlin.svg", alt: "Kotlin", top: "68%", left: "78%" },
  { src: "/codeimg/rust.svg", alt: "Rust", top: "78%", left: "20%" },
];

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#000000] via-[#1b1b2f] to-[#000000] text-white overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        {/* Central Orbit Rings */}
        <div className="absolute w-[900px] h-[900px] rounded-full border border-white/10 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute w-[800px] h-[800px] rounded-full border border-white/10 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute w-[700px] h-[700px] rounded-full border border-white/10 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute w-[600px] h-[600px] rounded-full border border-white/10 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute w-[500px] h-[500px] rounded-full border border-white/10 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute w-[400px] h-[400px] rounded-full border border-white/10 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute w-[300px] h-[300px] rounded-full border border-white/10 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute w-[200px] h-[200px] rounded-full border border-white/10 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"></div>

        {orbiters.map((user, index) => {
  const floatClass = `animate-float${(index % 4) + 1}`;
  return (
    <div
      key={index}
      className={`absolute w-14 h-14 ${floatClass} hover:scale-110 transition-transform`}
      style={{ top: user.top, left: user.left }}
    >
      <Image src={user.src} alt={user.alt} width={48} height={48} />
    </div>
  );
})}

      </div>

      {/* Main Content */}
      <div className="z-10 text-center max-w-2xl px-4 animate-fade-in">
        <h1 className="text-6xl font-bold leading-tight text-white inline-block overflow-hidden whitespace-nowrap border-r-4 border-white animate-typingLoop">
          CodeAYNA
        </h1>

        <h2 className="text-2xl text-white/80 mt-4">
          Code conversion made super simple to save you hours of time from
          learning a completely new language. – <br />
          <span className="text-white/60">Now Just One Click Away!</span>
        </h2>

        <div className="mt-8 flex flex-col items-center justify-center gap-3">
          <a href="/converter" className="px-6 py-3 rounded-full bg-gradient-to-r from-purple-700 to-purple-500 text-white hover:opacity-90 transition text-lg font-medium">
            <a >Try for free</a>
            <ArrowRight className="inline ml-2" />
          </a>
          <p className="text-sm text-white/50">50+ language support</p>
        </div>
      </div>
    </section>
  );
}
