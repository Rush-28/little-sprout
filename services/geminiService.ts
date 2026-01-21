
import { GoogleGenAI } from "@google/genai";

/**
 * AI Assistant for Little Sprouts Play School.
 * Uses Gemini for helpful, nurturing parent support.
 */
export const askAssistant = async (question: string) => {
  // Always initialize GoogleGenAI inside the function as per best practices
  // to ensure the latest API key is used.
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: question,
      config: {
        systemInstruction: `You are the AI Assistant for 'Little Sprouts Play School'. 
        You are professional, warm, nurturing, and helpful. 
        We follow a mix of Montessori and Reggio Emilia philosophies. 
        Safety is our priority (CCTV, First Aid, Sanitzation). 
        Always encourage parents to book a tour. Keep answers concise and friendly.`,
        temperature: 0.7,
      }
    });
    
    // Use the .text property to extract content from the response
    return response.text || "I'm here to help you with any questions about our curriculum or facilities.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "I am having trouble connecting right now. Please try again later or call our office directly!";
  }
};
