// Importar el SDK de Google Generative AI
import { GoogleGenerativeAI } from '@google/generative-ai';

// Configurar CORS
const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
};

// Función principal serverless
export default async function handler(req, res) {
  // Aplicar CORS a todas las respuestas
  Object.entries(corsHeaders).forEach(([k, v]) => res.setHeader(k, v));
  // Manejar preflight request (CORS)
  if (req.method === 'OPTIONS') {
    return res.status(204).end();
  }
  
  // Solo permitir POST
  if (req.method !== 'POST') {
  return res.status(405).json({ error: 'Método no permitido' });
  }
  
  try {
    // Obtener el texto del body
    const { text } = req.body;
    
    if (!text || text.trim() === '') {
      return res.status(400).json({ error: 'No se proporcionó texto para analizar' });
    }
    
    // Verificar que la API key esté configurada
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      console.error('GEMINI_API_KEY no está configurada');
      return res.status(500).json({ error: 'Error de configuración del servidor' });
    }
    
  // Inicializar el cliente de Gemini
  const genAI = new GoogleGenerativeAI(apiKey);
  const modelName = process.env.GEMINI_MODEL || 'gemini-2.0-flash';
  const model = genAI.getGenerativeModel({ model: modelName });
    
    // Crear el prompt para Gemini
    const prompt = `Eres 'LegalClaro', un asistente experto en derecho y comunicación que se especializa en traducir jerga legal compleja a un lenguaje claro, sencillo y fácilmente comprensible para una persona sin conocimientos legales.

Tu tarea es tomar el siguiente texto legal y hacer tres cosas:
1.  **Resumen Clave:** En una sola frase, dime cuál es el punto más importante o la acción principal que este texto me obliga a aceptar.
2.  **Puntos Principales:** En una lista de 3 a 5 puntos (usando viñetas), explica las cláusulas más relevantes de forma simple. Concéntrate en lo que gano, lo que cedo y a qué me estoy comprometiendo.
3.  **Nivel de Alerta:** Asigna un nivel de alerta (Bajo, Medio, Alto) basado en si el texto contiene cláusulas inusuales, renuncia de derechos importantes o compromisos significativos. Justifícalo brevemente.

Mantén un tono neutral, informativo y directo. No des consejos legales, solo simplifica la información.

Aquí está el texto a analizar:
---
${text}
---`;
    
    // Enviar el prompt a Gemini
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const simplifiedText = response.text();
    
    // Devolver la respuesta
    return res.status(200).json({
      simplifiedText: simplifiedText
    });
    
  } catch (error) {
    // Normalizar mensaje
    const msg = (error && error.message) ? String(error.message) : String(error);

    // Log lato servidor sin exponer secretos
    console.error('Error al procesar la solicitud:', msg);

    // Mapeo de errores comunes
    const isRateLimit = /\b429\b|RATE_LIMIT_EXCEEDED|quota/i.test(msg);
    const isAuth = /API key|PERMISSION_DENIED|UNAUTHENTICATED|invalid api key/i.test(msg);

    if (isRateLimit) {
      return res.status(429).json({
        error: 'Límite de uso alcanzado. Intenta nuevamente en 1-2 minutos.',
        code: 429,
        details: msg
      });
    }

    if (isAuth) {
      return res.status(401).json({
        error: 'Autenticación fallida con la API de IA. Verifica la clave GEMINI_API_KEY.',
        code: 401,
        details: msg
      });
    }

    return res.status(500).json({
      error: 'Error al procesar el texto',
      code: 500,
      details: msg
    });
  }
}

// Configurar CORS en la respuesta
export const config = {
  api: {
    bodyParser: true,
  },
};
