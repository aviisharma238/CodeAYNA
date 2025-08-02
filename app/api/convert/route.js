import { NextResponse } from "next/server";

function cleanOutput(raw) {
  return raw
    .replace(/^```[\s\S]*?\n/, "") // Remove ``` and optional language at start
    .replace(/```$/, "")           // Remove ``` at end
    .trim();                       // Clean extra space/newlines
}

export async function POST(req) {
  try {
    const { sourceLang, targetLang, inputCode } = await req.json();

    const prompt = `
Convert the following code from ${sourceLang} to ${targetLang}.
Only return the converted code. Do not include any explanation or extra text and you add text then comment then.

${sourceLang}
${inputCode}
`;

    const groqResponse = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${process.env.GROQ_API_KEY}`,
      },
      body: JSON.stringify({
        model: "llama3-8b-8192",
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

    const result = await groqResponse.json();

    const rawCode = result.choices?.[0]?.message?.content || "";
    const convertedCode = cleanOutput(rawCode); // 🧼 clean triple backticks

    return NextResponse.json({ convertedCode });
  } catch (err) {
    console.error("GROQ error:", err);
    return NextResponse.json({ error: "Failed to convert code." }, { status: 500 });
  }
}
