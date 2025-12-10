"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";
import { auth, githubProvider } from "/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  return (
    <header className="bg-transparent text-white px-6 py-4 sticky top-0 z-50">
      <div className="max-w-8xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-2xl text-[#ff0080] font-extrabold">
          <span className="text-gray-200">Code</span>AYNA
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

          {/* Dashboard link only for logged-in users */}
          {user && (
            <Link
              href="/dashboard"
              className="hover:text-gray-300 px-3 py-1 rounded-md bg-gray-800 hover:bg-gray-700"
            >
              Dashboard
            </Link>
          )}

          {/* Login / Avatar */}
          {!user ? (
            <Link
              href="/login"
              className="bg-gray-800 text-sm px-4 py-2 rounded-md hover:bg-gray-700"
            >
              Login
            </Link>
          ) : (
            <div className="relative group">
              <img
                src={user.photoURL}
                alt="user"
                className="w-8 h-8 rounded-full cursor-pointer border-2 border-pink-500"
              />
              {/* Optional dropdown */}
              <div className="absolute right-0 mt-2 w-32 bg-gray-800 rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity text-sm">
                <button
                  onClick={() => signOut(auth)}
                  className="block w-full text-left px-4 py-2 hover:bg-gray-700"
                >
                  Logout
                </button>
              </div>
            </div>
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

          {user && (
            <Link
              href="/dashboard"
              className="block bg-gray-800 text-sm px-4 py-2 rounded-md hover:bg-gray-700"
              onClick={() => setIsMenuOpen(false)}
            >
              Dashboard
            </Link>
          )}

          {!user ? (
            <Link
              href="/login"
              className="block bg-gray-800 text-sm px-4 py-2 rounded-md hover:bg-gray-700"
              onClick={() => setIsMenuOpen(false)}
            >
              Login
            </Link>
          ) : (
            <button
              onClick={() => {
                signOut(auth);
                setIsMenuOpen(false);
              }}
              className="block w-full text-left bg-gray-800 text-sm px-4 py-2 rounded-md hover:bg-gray-700"
            >
              Logout
            </button>
          )}
        </div>
      )}
    </header>
  );
}
``;
