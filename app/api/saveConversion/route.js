import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";
import { db } from "/firebase";
import { collection, addDoc } from "firebase/firestore";

export async function POST(req) {
  const session = await getServerSession(authOptions);

  if (!session) {
    return new Response(
      JSON.stringify({ error: "unauthorized" }),
      { status: 401 }
    );
  }

  const body = await req.json();
  const { sourceLang, targetLang, inputCode, outputCode } = body;

  try {
    await addDoc(collection(db, "conversions"), {
      userEmail: session.user.email,
      sourceLang,
      targetLang,
      inputCode,
      outputCode,
      createdAt: Date.now(),
    });

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error("Save error:", error);
    return new Response(JSON.stringify({ error: "failed" }), {
      status: 500,
    });
  }
}
