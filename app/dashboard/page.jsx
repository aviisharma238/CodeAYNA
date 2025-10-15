"use client";

import React, { useEffect, useState } from "react";
import { auth } from "@/firebase";
import { onAuthStateChanged } from "firebase/auth";
import {
  getFirestore,
  collection,
  query,
  where,
  orderBy,
  getDocs,
} from "firebase/firestore";
import Link from "next/link";

const db = getFirestore();

export default function Dashboard() {
  const [user, setUser] = useState(null);
  const [conversions, setConversions] = useState([]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        setUser(currentUser);

        // fetch user's conversions
        try {
          const q = query(
            collection(db, "conversions"),
            where("uid", "==", currentUser.uid),
            orderBy("createdAt", "desc")
          );
          const snapshot = await getDocs(q);
          const data = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          setConversions(data);
        } catch (err) {
          console.error("Error fetching conversions:", err);
        }
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  if (!user)
    return (
      <p className="text-center mt-10 text-white">
        Please login to view your dashboard.
      </p>
    );

  return (
    <div className="min-h-screen bg-black text-white p-6 md:p-10">
      {/* Welcome */}
      <div className="flex flex-col md:flex-row items-center justify-between mb-8">
        <div className="flex items-center gap-4">
          {user.photoURL && (
            <img
              src={user.photoURL}
              alt="avatar"
              className="w-12 h-12 rounded-full border-2 border-pink-500"
            />
          )}
          <h2 className="text-2xl font-bold">Welcome, {user.displayName}</h2>
        </div>
        <Link
          href="/converter"
          className="mt-4 md:mt-0 bg-pink-500 hover:bg-pink-600 px-4 py-2 rounded-md font-semibold"
        >
          New Conversion
        </Link>
      </div>

      {/* Conversions */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {conversions.length === 0 && (
          <p className="text-gray-400 col-span-full text-center mt-10">
            No conversions yet. Start converting your code!
          </p>
        )}

        {conversions.map((conv) => (
          <div
            key={conv.id}
            className="bg-gray-800 rounded-md p-4 flex flex-col gap-2 shadow-md"
          >
            <div>
              <h3 className="font-semibold text-pink-400">Original:</h3>
              <pre className="text-xs overflow-x-auto bg-gray-900 p-2 rounded mt-1">
                {conv.original}
              </pre>
            </div>
            <div>
              <h3 className="font-semibold text-pink-400">Converted:</h3>
              <pre className="text-xs overflow-x-auto bg-gray-900 p-2 rounded mt-1">
                {conv.converted}
              </pre>
            </div>
            <p className="text-gray-400 text-xs mt-1">
              Created:{" "}
              {conv.createdAt?.seconds
                ? new Date(conv.createdAt.seconds * 1000).toLocaleString()
                : "N/A"}
            </p>

            {/* Actions */}
            <div className="flex gap-2 mt-2">
              <button
                className="flex-1 bg-pink-500 hover:bg-pink-600 py-1 rounded-md text-sm font-semibold"
                onClick={() => navigator.clipboard.writeText(conv.converted)}
              >
                Copy
              </button>

              <a
                href={`data:text/plain;charset=utf-8,${encodeURIComponent(
                  conv.converted || ""
                )}`}
                download={`converted-${conv.id}.txt`}
                className="flex-1 bg-gray-700 hover:bg-gray-600 py-1 rounded-md text-sm font-semibold text-center"
              >
                Download
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
