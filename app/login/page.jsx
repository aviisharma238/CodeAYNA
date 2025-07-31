'use client';

import { useRouter } from 'next/navigation';
import { FaGoogle, FaGithub } from 'react-icons/fa';
import { auth } from '@/lib/firebase';
import {
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
  onAuthStateChanged,
} from 'firebase/auth';
import { useEffect } from 'react';

export default function Login() {
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        router.push('/');
      }
    });
    return () => unsubscribe();
  }, [router]);

  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      router.push('/');
    } catch (error) {
      console.error('Google login error:', error);
    }
  };

  const handleGithubLogin = async () => {
    const provider = new GithubAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      router.push('/');
    } catch (error) {
      console.error('GitHub login error:', error);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-4 py-10 text-center">
      <div className="w-full max-w-md space-y-6">
        {/* Logo */}
        <h1 className="text-3xl font-extrabold text-pink-500">
          <span className="text-white">Code</span>AYNA
        </h1>

        <p className="text-gray-300 text-sm">
          Choose an option to login to your account
        </p>

        {/* Social Buttons */}
        <div className="space-y-3">
          <button
            onClick={handleGoogleLogin}
            className="w-full flex items-center justify-center gap-3 bg-zinc-800 text-white py-2 rounded-md hover:bg-zinc-700 transition"
          >
            <FaGoogle className="text-lg" />
            Login with Google
          </button>
          <button
            onClick={handleGithubLogin}
            className="w-full flex items-center justify-center gap-3 bg-zinc-800 text-white py-2 rounded-md hover:bg-zinc-700 transition"
          >
            <FaGithub className="text-lg" />
            Login with GitHub
          </button>
        </div>

        {/* Divider */}
        <div className="flex items-center gap-2 text-sm text-gray-400">
          <div className="flex-1 h-px bg-white/20" />
          Or continue with email
          <div className="flex-1 h-px bg-white/20" />
        </div>

        {/* Email Input */}
        <div className="space-y-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full bg-zinc-800 text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
          <button className="w-full bg-pink-500 hover:bg-pink-600 text-white font-semibold py-2 rounded-md transition">
            Send OTP
          </button>
        </div>

        {/* Subtext */}
        <p className="text-xs text-gray-500">
          We’ll never share your email with anyone else.
        </p>

        {/* Footer Links */}
        <div className="flex justify-between text-xs text-gray-500 pt-4">
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
