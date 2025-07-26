"use client"
import React from "react";
import Link from 'next/link';


export default function Header() {
return (
    <header className="bg-black text-white px-9 py-4">
    <div className="max-w-7x1 mx-auto flex items-center justify-between">
        {/* Logo Text */}
        <a href="/" className="text-2xl text-[#ff0080] font-extrabold">CodeAYNA</a>

        {/* Navigation Links */}
        <nav className="flex items-center gap-6 font-semibold">
        <Link href="/pricing" className="hover:text-gray-300">Pricing</Link>
        
        <Link href="/contact" className="hover:text-gray-300">Contact</Link>
        
        <Link href="/login" className="bg-gray-800 text-sm px-4 py-2 rounded-md hover:bg-gray-700">login</Link>

          
        </nav>
    </div>
    </header>
);
}