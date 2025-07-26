'use client';
import { FaGoogle, FaGithub } from 'react-icons/fa';

export default function Login() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-4">
      <div className="w-full max-w-md space-y-6 text-center">
        <h1 className="text-2xl font-bold text-pink-500">
          <span className="text-white">Code</span>AYNA
        </h1>
        <p className="text-gray-300">Choose an option to login to your account</p>

        {/* Social Buttons */}
        <div className="space-y-4">
          <button className="w-full flex items-center justify-center gap-3 bg-zinc-800 text-white py-2 rounded-lg hover:bg-zinc-700 transition">
            <FaGoogle className="text-lg" />
            Login with Google
          </button>
          <button className="w-full flex items-center justify-center gap-3 bg-zinc-800 text-white py-2 rounded-lg hover:bg-zinc-700 transition">
            <FaGithub className="text-lg" />
            Login with GitHub
          </button>
        </div>

        {/* Divider */}
        <div className="flex items-center gap-2 text-sm text-gray-400">
          <div className="flex-1 h-px bg-white" />
          Or continue with email
          <div className="flex-1 h-px bg-white" />
        </div>

        {/* Email Input */}
        <div className="space-y-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full bg-zinc-800 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
          <button className="w-full bg-pink-500 hover:bg-pink-600 text-white font-semibold py-2 rounded-lg transition">
            Sent otp
          </button>
        </div>

        <p className="text-xs text-gray-400 mt-2">Choose an option to login to your account</p>

        {/* Footer Links */}
        <div className="flex justify-between text-xs text-gray-400 pt-6">
          <a href="#" className="hover:underline">
            Privacy Policy
          </a>
          <a href="#" className="hover:underline">
            Terms of Service
          </a>
        </div>
      </div>
    </div>
  );
}
