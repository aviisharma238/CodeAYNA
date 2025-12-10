import { NextResponse } from "next/server";

function cleanOutput(raw) {
  return raw
    .replace(/^```[\s\S]*?\n/, "") // Remove opening ```
    .replace(/```$/, "")           // Remove closing ```
    .trim();
}

export async function POST(req) {
  try {
    const { sourceLang, targetLang, inputCode } = await req.json();

    if (!sourceLang || !targetLang || !inputCode) {
      return NextResponse.json(
        { error: "Missing fields: sourceLang, targetLang, inputCode are required." },
        { status: 400 }
      );
    }

    const prompt = `
Convert the following code from ${sourceLang} to ${targetLang}.
Only return the converted code. If you add text, put it in comments.

${sourceLang} code:
${inputCode}
`;

    const groqResponse = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
      },
      body: JSON.stringify({
        model: "llama-3.1-8b-instant",
        messages: [
          {
            role: "system",
            content: "You are a helpful coding assistant that converts code from one language to another.",
          },
          {
            role: "user",
            content: prompt,
          },
        ],
        temperature: 0.2,
      }),
    });

    if (!groqResponse.ok) {
      const errText = await groqResponse.text();
      console.error("Groq API error:", errText);
      return NextResponse.json({ error: " Groq API request failed " }, { status: 500 });
    }

    const result = await groqResponse.json();
    console.log(" Groq raw response: ", result); // 👀 debug

    const rawCode =
      result.choices?.[0]?.message?.content ||
      result.choices?.[0]?.delta?.content ||
      "";

    if (!rawCode) {
      return NextResponse.json(
        { error: " Api fail Groq " },
        { status: 500 }
      );
    }

    const convertedCode = cleanOutput(rawCode);
    return NextResponse.json({ convertedCode });
  } catch (err) {
    console.error("Backend error: ", err);
    return NextResponse.json({ error: " Failed to convert code. " }, { status: 500 });
  }
}