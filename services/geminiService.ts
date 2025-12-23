
import { GoogleGenAI } from "@google/genai";
import { MENU_ITEMS } from "../constants";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const SYSTEM_INSTRUCTION = `
You are the 'Rasoi Concierge' for 'Khatti Methi Rasoi', a premium Lahori restaurant located in Karachi (DHA Phase 6).
Your tone is incredibly hospitable (typical Lahori 'Mehman-Nawazi') yet sophisticated.

Menu Reference:
${JSON.stringify(MENU_ITEMS, null, 2)}

Context:
- We bring the authentic flavors of Lahore's Gawalmandi and Lakshmi Chowk to the modern Karachi diner.
- Mention Karachi's DHA location if asked where we are.
- We do NOT take reservations. We operate on a walk-in basis. If asked, invite them to visit us directly.
- Use 'Namaste' or 'Salam' warmly.

Keywords:
'Khatti' (Sour/Zesty) and 'Methi' (Sweet/Smooth) describe our balance.
`;

export const getAiResponse = async (userPrompt: string, history: {role: string, content: string}[]) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: [
        ...history.map(h => ({ 
          role: h.role === 'user' ? 'user' : 'model', 
          parts: [{ text: h.content }] 
        })),
        { role: 'user', parts: [{ text: userPrompt }] }
      ],
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.8,
      },
    });

    return response.text || "Forgive me, my thoughts are lost in the aroma of our Karahi. How else may I assist your journey?";
  } catch (error) {
    return "The Concierge is momentarily indisposed. Please explore our Lahori menu in the meantime.";
  }
};
