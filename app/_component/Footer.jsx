"use client";
import React from "react";
import { Instagram, Linkedin, Github, Facebook, Send } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-white px-6 md:px-14 py-14">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        
        {/* Logo & Description */}
        <div className="space-y-4">
          <a href="/" className="text-2xl text-[#ff0080] font-extrabold">CodeAYNA</a>
          <p className="text-sm text-gray-300 leading-relaxed">
            Effortlessly Convert, Generate, and Understand Code.
            <br />
            Powered by AI.
          </p>

          <div className="mt-4">
            <p className="text-sm font-semibold mb-2">Follow us</p>
            <div className="flex gap-4 text-white text-xl">
              <a href="#" target="_blank" rel="noopener noreferrer"><Instagram /></a>
              <a href="#" target="_blank" rel="noopener noreferrer"><Linkedin /></a>
              <a href="#" target="_blank" rel="noopener noreferrer"><Github /></a>
              <a href="#" target="_blank" rel="noopener noreferrer"><Facebook /></a>
            </div>
          </div>
        </div>

        {/* Essentials Links */}
        <div>
          <h4 className="font-semibold text-[#ff0080] mb-3">Essentials</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="/">Home</a></li>
            <li><a href="/converter">Converter</a></li>
            <li><a href="/pricing">Pricing</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/login">Login</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="font-semibold text-[#ff0080] mb-3">Join Our Newsletter</h4>
          <p className="text-sm text-gray-300 mb-4">
            Get the latest in AI-driven code conversion, fresh features, and
            smart dev solutions delivered directly to your inbox.
          </p>

          <div className="flex w-full max-w-md">
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 w-full text-black rounded-l-md outline-none"
            />
            <button className="bg-[#ff0080] hover:bg-[#ff0070] text-white px-4 rounded-r-md">
              <Send size={18} className="rotate-[45deg]" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
