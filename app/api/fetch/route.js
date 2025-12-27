import { GoogleGenAI } from "@google/genai";

export async function POST(req) {
  try {
    const body = await req.json();
    const  prompt  = body;

    if (!prompt) {
      return Response.json(
        { success: false, error: "prompt is required" },
        { status: 400 }
      );
    }

    const ai = new GoogleGenAI({
      apiKey: process.env.GEMINI_API,
    });
    const result = await ai.models.generateContentStream({
      model: "gemini-2.5-flash-lite",
      contents: prompt.contentMessage,
      config: {
        systemInstruction: "Kamu adalah AI yang ramah, santai, dan membantu. Persingkat kata-kata dan hindari kata-kata yang berlebihan. Gunakan emoji secara natural (2–5 emoji per pesan).Hindari emoji berlebihan atau tidak relevan.",
      },
    });
    

    const encoder = new TextEncoder()
    return new Response(
        new ReadableStream({
            async start(controller) {
                for await (const chunk of result) {
                    const text = chunk.text;
                    if (text) {
                        controller.enqueue(encoder.encode(text))
                    }
                }
                controller.close()
            }
        }),
        {
            headers: {
                "Content-Type": "text/plain; charset=utf-8"
            }
        }
    )
  } catch (err) {
    console.error(err);
    return Response.json(
      { success: false, error: "internal server error" },
      { status: 500 }
    );
  }
}
