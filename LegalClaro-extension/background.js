// LegalClaro - Service Worker (Background Script)
// Maneja eventos de la extensión y comunicación entre componentes

chrome.runtime.onInstalled.addListener((details) => {
  console.log('LegalClaro instalado:', details.reason);
  
  // Mostrar página de bienvenida en primera instalación
  if (details.reason === 'install') {
    chrome.tabs.create({
      url: 'https://legalclaro.vercel.app/'
    });
  }
});

// Manejar clicks en el icono de la extensión
chrome.action.onClicked.addListener((tab) => {
  // El popup se abrirá automáticamente, este handler es backup
  console.log('LegalClaro activado en tab:', tab.url);
});

// Opcional: Manejar atajos de teclado si los agregamos en el futuro
chrome.commands?.onCommand.addListener((command) => {
  console.log('Comando ejecutado:', command);
});

// Manejar errores de red o API
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === 'API_ERROR') {
    console.error('Error de API:', message.error);
    // Aquí podrías implementar fallbacks o notificaciones
  }
});

console.log('LegalClaro Service Worker iniciado');