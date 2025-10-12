// Test del backend de LegalClaro
const testBackend = async () => {
  const API_URL = 'https://legalclaro.vercel.app/api/simplify';
  
  const testText = `
El USUARIO acepta que al utilizar este SERVICIO, otorga permiso irrevocable 
para el uso de sus DATOS PERSONALES con fines comerciales. La EMPRESA no se 
hace responsable por pérdidas o daños derivados del uso del servicio.
  `;
  
  console.log('🧪 Probando backend de LegalClaro...\n');
  console.log('📝 Texto de prueba:', testText.trim(), '\n');
  
  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ text: testText })
    });
    
    console.log('📊 Status:', response.status);
    
    const data = await response.json();
    
    if (response.ok) {
      console.log('\n✅ ¡Éxito! Respuesta del backend:\n');
      console.log(data.simplifiedText);
    } else {
      console.log('\n❌ Error:', data);
    }
  } catch (error) {
    console.log('\n❌ Error de red:', error.message);
  }
};

testBackend();
