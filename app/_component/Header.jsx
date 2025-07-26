"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-black text-white px-6 py-4 sticky top-0 z-50">
      <div className="max-w-8xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-2xl text-[#ff0080] font-extrabold">
          CodeAYNA
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 font-semibold">
          <Link href="/converter" className="hover:text-gray-300">
            Converter
          </Link>
          <Link href="/pricing" className="hover:text-gray-300">
            Pricing
          </Link>
          <Link href="/contact" className="hover:text-gray-300">
            Contact
          </Link>
          <Link
            href="/login"
            className="bg-gray-800 text-sm px-4 py-2 rounded-md hover:bg-gray-700"
          >
            Login
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 px-4 space-y-3 font-medium">
          <Link
            href="/"
            className="block hover:text-gray-300"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/converter"
            className="block hover:text-gray-300"
            onClick={() => setIsMenuOpen(false)}
          >
            Converter
          </Link>
          <Link
            href="/pricing"
            className="block hover:text-gray-300"
            onClick={() => setIsMenuOpen(false)}
          >
            Pricing
          </Link>
          <Link
            href="/contact"
            className="block hover:text-gray-300"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </Link>
          <Link
            href="/login"
            className="block bg-gray-800 text-sm px-4 py-2 rounded-md hover:bg-gray-700"
            onClick={() => setIsMenuOpen(false)}
          >
            Login
          </Link>
        </div>
      )}
    </header>
  );
}
