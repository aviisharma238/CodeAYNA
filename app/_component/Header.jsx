import React, { useState, useEffect } from "react";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";
import { auth } from "../lib/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => setUser(user));
    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    await signOut(auth);
    setDropdownOpen(false);
  };

  return (
    <header className="bg-black text-white px-6 py-4 sticky top-0 z-50">
      <div className="max-w-8xl mx-auto flex items-center justify-between">
        <Link href="/" className="text-2xl text-[#ff0080] font-extrabold">
          CodeAYNA
        </Link>

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
                src={user.photoURL}
                alt="profile"
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="w-9 h-9 rounded-full cursor-pointer border-2 border-pink-500"
              />
              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-white text-black rounded-md shadow-md">
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
            <Link
              href="/login"
              className="bg-gray-800 text-sm px-4 py-2 rounded-md hover:bg-gray-700"
            >
              Login
            </Link>
          )}
        </nav>

        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>
    </header>
  );
}
