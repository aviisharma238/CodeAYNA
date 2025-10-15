"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { auth, googleProvider, githubProvider } from "@/firebase";
import { signInWithPopup, onAuthStateChanged } from "firebase/auth";
import { FaGoogle, FaGithub } from "react-icons/fa";

export default function Login() {
  const router = useRouter();

  // Redirect if already logged in
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        router.push("/"); // redirect to home
      }
    });  
    return () => unsubscribe();
  }, [router]);

  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      router.push("/"); // redirect after login
    } catch (error) {
      console.error(error);
    }
  };

  const handleGithubLogin = async () => {
    try {
      await signInWithPopup(auth, githubProvider);
      router.push("/"); // redirect after login
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-4 py-10 text-center">
      <div className="w-full max-w-md space-y-6">
        <h1 className="text-3xl font-extrabold text-pink-500">
          <span className="text-white">Code</span>AYNA
        </h1>

        <p className="text-gray-300 text-sm">
          Choose an option to login to your account
        </p>

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
      </div>
    </div>
  );
}
