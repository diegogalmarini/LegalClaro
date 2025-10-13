// Listar modelos disponibles
const API_KEY = 'AIzaSyCqokGOSbb1mPfR6XrfxDdV2lYBefcXtc0';

async function listModels() {
  console.log('📋 Listando modelos disponibles en Gemini...\n');
  
  const url = `https://generativelanguage.googleapis.com/v1/models?key=${API_KEY}`;
  
  try {
    const response = await fetch(url);
    
    console.log('📊 Status:', response.status);
    const data = await response.json();
    
    if (response.ok) {
      console.log('\n✅ Modelos disponibles:\n');
      data.models?.forEach(model => {
        console.log(`  - ${model.name}`);
        console.log(`    Descripción: ${model.displayName}`);
        console.log(`    Métodos: ${model.supportedGenerationMethods?.join(', ')}\n`);
      });
    } else {
      console.log('❌ Error:', JSON.stringify(data, null, 2));
    }
  } catch (error) {
    console.log('❌ Error de red:', error.message);
  }
}

listModels();
