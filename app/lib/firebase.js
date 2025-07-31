import { initializeApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";

let app;
if (typeof window !== "undefined") {
  const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    projectId: "codeayna",
    storageBucket: "codeayna.appspot.com", // ❗fix this too (see below)
    messagingSenderId: "1021409351140",
    appId: "1:1021409351140:web:d5042a00d13c06dda0a3f1",
    measurementId: "G-EG9GDMEWK7",
  };

  if (!getApps().length) {
    app = initializeApp(firebaseConfig);
  } else {
    app = getApps()[0];
  }
}

export const auth = typeof window !== "undefined" ? getAuth(app) : null;
