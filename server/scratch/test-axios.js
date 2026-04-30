import 'dotenv/config'
import axios from 'axios'

async function testAxios() {
  const key = process.env.GEMINI_API_KEY;
  try {
    const url = `https://generativelanguage.googleapis.com/v1beta/models?key=${key}`;
    const response = await axios.get(url);
    const geminiModels = response.data.models.filter(m => m.name.includes('gemini'));
    console.log("Available Gemini Models:", JSON.stringify(geminiModels, null, 2));
    if (response.data.nextPageToken) {
        const nextUrl = `${url}&pageToken=${response.data.nextPageToken}`;
        const nextResponse = await axios.get(nextUrl);
        const nextGeminiModels = nextResponse.data.models.filter(m => m.name.includes('gemini'));
        console.log("More Gemini Models:", JSON.stringify(nextGeminiModels, null, 2));
    }
  } catch (error) {
    console.error("Axios Error Status:", error.response?.status);
    console.error("Axios Error Data:", JSON.stringify(error.response?.data, null, 2));
  }
}

testAxios();
