"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const orbiters = [
  { src: "/codeimg/c.svg", alt: "C", top: "12%", left: "50%" },
  { src: "/codeimg/c++.svg", alt: "C++", top: "30%", left: "85%" },
  { src: "/codeimg/python.svg", alt: "Python", top: "60%", left: "90%" },
  { src: "/codeimg/mysql.svg", alt: "MySQL", top: "75%", left: "65%" },
  { src: "/codeimg/sql.svg", alt: "SQL", top: "85%", left: "35%" },
  { src: "/codeimg/javascript.svg", alt: "JavaScript", top: "60%", left: "10%" },
  { src: "/codeimg/java.svg", alt: "Java", top: "35%", left: "10%" },
  { src: "/codeimg/php.svg", alt: "PHP", top: "10%", left: "30%" },
  { src: "/codeimg/ruby.svg", alt: "Ruby", top: "40%", left: "70%" },
  { src: "/codeimg/swift.svg", alt: "Swift", top: "85%", left: "50%" },
  { src: "/codeimg/typescript.svg", alt: "TypeScript", top: "18%", left: "75%" },
  { src: "/codeimg/kotlin.svg", alt: "Kotlin", top: "68%", left: "78%" },
  { src: "/codeimg/rust.svg", alt: "Rust", top: "78%", left: "20%" },
];

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#000000] via-[#1b1b2f] to-[#000000] text-white overflow-hidden px-4">
      <div className="absolute inset-0 pointer-events-none">
        {/* Orbit rings */}
        {[...Array(7)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-[${900 - i * 100}px] h-[${900 - i * 100}px] rounded-full border border-white/10 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2`}
          />
        ))}

        {/* Floating logos */}
        {orbiters.map((orb, i) => {
          const floatClass = `animate-float${(i % 4) + 1}`;
          return (
            <div
              key={i}
              className={`absolute w-14 h-14 ${floatClass} hover:scale-110 transition-transform`}
              style={{ top: orb.top, left: orb.left }}
            >
              <Image src={orb.src} alt={orb.alt} width={48} height={48} />
            </div>
          );
        })}
      </div>

      {/* Center Content */}
      <div className="z-10 text-center max-w-2xl animate-fade-in">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white inline-block overflow-hidden whitespace-nowrap border-r-4 border-white animate-typingLoop">
          CodeAYNA
        </h1>

        <h2 className="text-lg md:text-2xl text-white/80 mt-4 px-2">
          Code conversion made super simple to save you hours of time from
          learning a completely new language.
          <br />
          <span className="text-white/60">Now Just One Click Away!</span>
        </h2>

        <div className="mt-8 flex flex-col items-center gap-3">
          <Link
            href="/converter"
            className="flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-purple-700 to-purple-500 text-white hover:opacity-90 transition text-lg font-medium"
          >
            Try for free <ArrowRight size={20} />
          </Link>
          <p className="text-sm text-white/50">50+ language support</p>
        </div>
      </div>
    </section>
  );
}
