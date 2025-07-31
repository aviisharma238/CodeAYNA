// app/lib/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: "codeayna",
  storageBucket: "codeayna.firebasestorage.app",
  messagingSenderId: "1021409351140",
  appId: "1:1021409351140:web:d5042a00d13c06dda0a3f1",
  measurementId: "G-EG9GDMEWK7",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
