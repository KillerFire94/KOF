import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateChristmasWish = async (name: string): Promise<string> => {
  try {
    const prompt = `Escribe un mensaje de Navidad muy corto (máximo 40 palabras), mágico, cálido, poético y personalizado para una persona llamada "${name}". El tono debe ser de esperanza y alegría. Responde solo con el mensaje en texto plano.`;
    
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
    });

    return response.text || "¡Que la magia de la Navidad ilumine tu corazón hoy y siempre!";
  } catch (error) {
    console.error("Error generating wish:", error);
    return "¡Feliz Navidad! Que este día esté lleno de alegría y paz para ti y los tuyos.";
  }
};