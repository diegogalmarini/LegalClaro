// Test directo con la API REST de Gemini
const API_KEY = 'AIzaSyCqokGOSbb1mPfR6XrfxDdV2lYBefcXtc0';

async function testDirectAPI() {
  console.log('🧪 Probando Gemini con API REST directa...\n');
  
  const url = `https://generativelanguage.googleapis.com/v1/models/gemini-pro:generateContent?key=${API_KEY}`;
  
  const body = {
    contents: [{
      parts: [{
        text: 'Di "Hola" en una palabra.'
      }]
    }]
  };
  
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    });
    
    console.log('📊 Status:', response.status);
    const data = await response.json();
    
    if (response.ok) {
      console.log('✅ ¡Funciona! Respuesta:', JSON.stringify(data, null, 2));
    } else {
      console.log('❌ Error:', JSON.stringify(data, null, 2));
    }
  } catch (error) {
    console.log('❌ Error de red:', error.message);
  }
}

testDirectAPI();
