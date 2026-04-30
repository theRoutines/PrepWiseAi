import 'dotenv/config'
import { GoogleGenerativeAI } from "@google/generative-ai";

async function listModels() {
  try {
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    // There isn't a direct listModels on the genAI instance in the SDK normally, 
    // it's usually done via the rest API or a specific client.
    // However, we can try to use a model name that is definitely correct.
    console.log("Checking GEMINI_API_KEY:", process.env.GEMINI_API_KEY ? "Present" : "Missing");
    
    const modelsToTry = ["gemini-1.5-flash", "gemini-1.5-flash-latest", "gemini-1.5-pro", "gemini-pro"];
    
    for (const modelName of modelsToTry) {
      try {
        console.log(`Testing model: ${modelName}`);
        const model = genAI.getGenerativeModel({ model: modelName });
        const result = await model.generateContent("test");
        console.log(`Success with ${modelName}:`, result.response.text());
        return;
      } catch (e) {
        console.error(`Failed with ${modelName}:`, e.message);
      }
    }
  } catch (error) {
    console.error("Error Details:", error);
    if (error.response) {
      console.error("Response Data:", error.response.data);
    }
  }
}

listModels();
