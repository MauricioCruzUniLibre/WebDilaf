
import { GoogleGenAI } from "@google/genai";

const SYSTEM_INSTRUCTION = `
Eres el asistente experto de "Dilaf - Soluciones Contables". 
Tu objetivo es ayudar a clientes en Colombia (emprendedores, PYMES y grandes empresas) con dudas generales sobre contabilidad, impuestos (IVA, ICA, Retefuente), nómina electrónica y facturación electrónica.
Sé profesional, moderno, preciso y amigable. 
Si el usuario pregunta por servicios específicos de la empresa, redirígelos a agendar una asesoría.
No proporciones asesoría legal vinculante; siempre aclara que deben consultar con un contador asignado de Dilaf para casos complejos.
Contexto: Colombia, DIAN, normatividad contable vigente.
`;

export class GeminiService {
  private ai: GoogleGenAI;

  constructor() {
    this.ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  }

  async generateChatResponse(history: { role: string; parts: { text: string }[] }[], userMessage: string) {
    try {
      const response = await this.ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: [...history, { role: 'user', parts: [{ text: userMessage }] }],
        config: {
          systemInstruction: SYSTEM_INSTRUCTION,
          temperature: 0.7,
        },
      });

      return response.text || "Lo siento, hubo un error procesando tu consulta financiera. Inténtalo de nuevo.";
    } catch (error) {
      console.error("Gemini API Error:", error);
      return "Error de conexión con el núcleo de datos. Por favor, contacta a soporte.";
    }
  }
}

export const geminiService = new GeminiService();
