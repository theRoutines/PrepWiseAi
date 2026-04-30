import { GoogleGenAI } from "@google/genai";

const genAI = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

export const askAi = async (messages) => {
  try {
    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      throw new Error("Messages array is empty.");
    }

    const systemInstruction =
      messages.find((m) => m.role === "system")?.content || "";

    const userMessages = messages.filter((m) => m.role === "user");
    const lastUserMessage =
      userMessages[userMessages.length - 1]?.content || "";

    const response = await genAI.models.generateContent({
      model: "gemini-2.5-flash",
      contents: lastUserMessage,
      config: {
        systemInstruction,
        temperature: 0.7,
      },
    });

    let text = response.text;

    if (!text || !text.trim()) {
      throw new Error("Gemini returned empty response.");
    }

    // Clean markdown if needed
    if (text.includes("```")) {
      text = text.replace(/```json|```/g, "").trim();
    }

    return text;
  } catch (error) {
    console.error("Gemini API Error:", error.message);
    throw new Error("Gemini API Error: " + error.message);
  }
};