// Test local de la API de Gemini
import { GoogleGenerativeAI } from '@google/generative-ai';

const API_KEY = 'AIzaSyCqokGOSbb1mPfR6XrfxDdV2lYBefcXtc0';

async function testGemini() {
  console.log('🧪 Probando API de Gemini localmente...\n');
  
  try {
    const genAI = new GoogleGenerativeAI(API_KEY);
    
    // Intentar con diferentes modelos incluyendo versiones antiguas
    const models = [
      'gemini-2.0-flash',
      'gemini-2.5-flash',
      'gemini-2.5-pro',
      'gemini-1.5-flash',
      'gemini-1.5-pro',
    ];
    
    for (const modelName of models) {
      try {
        console.log(`\n📝 Probando modelo: ${modelName}`);
        const model = genAI.getGenerativeModel({ model: modelName });
        
        const result = await model.generateContent('Di "Hola" en una palabra.');
        const response = await result.response;
        const text = response.text();
        
        console.log(`✅ ¡Funciona! Respuesta: ${text}`);
        console.log(`\n🎯 Modelo correcto: ${modelName}`);
        return modelName; // Retornar el modelo que funciona
      } catch (error) {
        console.log(`❌ Error con ${modelName}: ${error.message.substring(0, 100)}...`);
      }
    }
    
    console.log('\n❌ Ningún modelo funcionó. La API key puede necesitar ser regenerada.');
  } catch (error) {
    console.log('❌ Error general:', error.message);
  }
}

testGemini();
