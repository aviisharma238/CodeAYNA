"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { auth } from "@/lib/firebase";
import { onAuthStateChanged, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

export default function LoginPage() {
  const router = useRouter();

  const handleLogin = async () => {
    const provider = new GoogleAuthProvider();
    await signInWithPopup(auth, provider);
    router.push("/"); // redirect to homepage after login
  };

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      if (user) router.push("/");
    });
    return () => unsub();
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <div className="text-center space-y-6">
        <h1 className="text-3xl font-bold text-pink-500">Login to CodeAYNA</h1>
        <button
          onClick={handleLogin}
          className="bg-pink-500 hover:bg-pink-600 px-6 py-3 rounded-full text-white text-lg"
        >
          Login with Google
        </button>
      </div>
    </div>
  );
}
