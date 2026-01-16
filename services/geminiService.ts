
// Frontend client wrapper that calls the serverless API at `/api/chat`.
// This keeps the API key private on the server and avoids exposing it to the browser.

type HistoryItem = { role: string; parts: { text: string }[] };

export const geminiService = {
  async generateChatResponse(history: HistoryItem[], userMessage: string) {
    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userMessage, history })
      });

      if (!res.ok) {
        let body: any = null;
        try { body = await res.json(); } catch (_) { body = null; }
        console.error('/api/chat error', res.status, body);
        return 'Error conectando con el servicio de IA. Intenta de nuevo.';
      }

      const data = await res.json();
      return data?.text || 'Lo siento, no obtuve respuesta del asistente.';
    } catch (err) {
      console.error('Network error calling /api/chat', err);
      return 'Error de red al conectar con el servicio de IA.';
    }
  }
};
