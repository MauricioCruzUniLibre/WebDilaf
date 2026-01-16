import { GoogleGenAI } from "@google/genai";

const SYSTEM_INSTRUCTION = `
Eres el asistente experto de "Dilaf - Soluciones Contables". 
Tu objetivo es ayudar a clientes en Colombia (emprendedores, PYMES y grandes empresas) con dudas generales sobre contabilidad, impuestos (IVA, ICA, Retefuente), nómina electrónica y facturación electrónica.
Sé profesional, moderno, preciso y amigable. 
Si el usuario pregunta por servicios específicos de la empresa, redirígelos a agendar una asesoría.
No proporciones asesoría legal vinculante; siempre aclara que deben consultar con un contador asignado de Dilaf para casos complejos.
Contexto: Colombia, DIAN, normatividad contable vigente.
`;

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const apiKey = process.env.GOOGLE_API_KEY;
  if (!apiKey) return res.status(500).json({ error: 'API key not configured' });

  const { message, history } = req.body || {};
  if (!message) return res.status(400).json({ error: 'Missing message' });

  try {
    const ai = new GoogleGenAI({ apiKey });

    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: [...(history || []), { role: 'user', parts: [{ text: message }] }],
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
    });

    return res.json({ text: response.text });
  } catch (err) {
    console.error('Gemini API error:', err);
    return res.status(500).json({ error: 'AI error' });
  }
}
