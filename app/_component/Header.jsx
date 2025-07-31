"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";
import { auth } from "../lib/firebase"; // adjust path if needed
import {
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (u) => setUser(u));
    return () => unsubscribe();
  }, []);

  const handleLogin = async () => {
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
    } catch (err) {
      console.error("Login Error:", err);
    }
  };

  const handleLogout = async () => {
    await signOut(auth);
    setDropdownOpen(false);
  };

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

          {user ? (
            <div className="relative">
              <img
                src={user.photoURL || "/default.jpg"}
                onClick={() => setDropdownOpen(!dropdownOpen)}
                alt="Profile"
                className="w-9 h-9 rounded-full cursor-pointer border-2 border-pink-500"
              />
              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-white text-black rounded-md shadow-lg z-50">
                  <Link
                    href="/profile"
                    className="block px-4 py-2 hover:bg-gray-100"
                    onClick={() => setDropdownOpen(false)}
                  >
                    Settings
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-4 py-2 hover:bg-gray-100"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <button
              onClick={handleLogin}
              className="bg-gray-800 text-sm px-4 py-2 rounded-md hover:bg-gray-700"
            >
              Login
            </button>
          )}
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
          <Link href="/" className="block hover:text-gray-300" onClick={() => setIsMenuOpen(false)}>
            Home
          </Link>
          <Link href="/converter" className="block hover:text-gray-300" onClick={() => setIsMenuOpen(false)}>
            Converter
          </Link>
          <Link href="/pricing" className="block hover:text-gray-300" onClick={() => setIsMenuOpen(false)}>
            Pricing
          </Link>
          <Link href="/contact" className="block hover:text-gray-300" onClick={() => setIsMenuOpen(false)}>
            Contact
          </Link>
          {user ? (
            <>
              <Link
                href="/profile"
                className="block hover:text-gray-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Settings
              </Link>
              <button
                onClick={() => {
                  handleLogout();
                  setIsMenuOpen(false);
                }}
                className="block text-left w-full hover:text-gray-300"
              >
                Logout
              </button>
            </>
          ) : (
            <button
              onClick={() => {
                handleLogin();
                setIsMenuOpen(false);
              }}
              className="block bg-gray-800 text-sm px-4 py-2 rounded-md hover:bg-gray-700"
            >
              Login
            </button>
          )}
        </div>
      )}
    </header>
  );
}
