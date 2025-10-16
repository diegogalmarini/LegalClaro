// Elementos del DOM
const resultDiv = document.getElementById('result');
const spinnerDiv = document.getElementById('spinner');

// URL del backend en Vercel
const API_URL = 'https://legalclaro.vercel.app/api/simplify';

// Función para obtener el texto seleccionado
async function getSelectedText() {
  try {
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    
    const results = await chrome.scripting.executeScript({
      target: { tabId: tab.id },
      func: () => window.getSelection().toString()
    });
    
    return results[0].result;
  } catch (error) {
  // No mostrar error en consola, solo manejar en UI
    return '';
  }
}

// Función para mostrar el spinner
function showSpinner() {
  spinnerDiv.classList.remove('hidden');
  resultDiv.classList.add('hidden');
}

// Función para ocultar el spinner
function hideSpinner() {
  spinnerDiv.classList.add('hidden');
  resultDiv.classList.remove('hidden');
}

// Función para mostrar el texto truncado
function showSelectedText(text) {
  const truncated = text.length > 100 ? text.substring(0, 100) + '...' : text;
  return `<div class="selected-text"><strong>Texto seleccionado:</strong><br>${truncated}</div>`;
}

// Función para formatear el texto simplificado
function formatSimplifiedText(text) {
  // Procesar el texto para agregar clases CSS a los niveles de alerta
  let formattedText = text
    .replace(/\*\*Nivel de Alerta:\*\* Bajo/gi, '**Nivel de Alerta:** <span class="alert-level alert-bajo">Bajo</span>')
    .replace(/\*\*Nivel de Alerta:\*\* Medio/gi, '**Nivel de Alerta:** <span class="alert-level alert-medio">Medio</span>')
    .replace(/\*\*Nivel de Alerta:\*\* Alto/gi, '**Nivel de Alerta:** <span class="alert-level alert-alto">Alto</span>');
  
  // Convertir markdown básico a HTML
  formattedText = formattedText
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/^\* (.+)$/gm, '<li>$1</li>')
    .replace(/^(\d+\.) (.+)$/gm, '<li>$2</li>')
    .replace(/\n\n/g, '</p><p>')
    .replace(/^### (.+)$/gm, '<h3>$1</h3>')
    .replace(/^## (.+)$/gm, '<h3>$1</h3>');
  
  // Envolver listas en <ul>
  formattedText = formattedText.replace(/(<li>.*?<\/li>\s*)+/gs, '<ul>$&</ul>');
  
  return `<div class="simplified-text"><p>${formattedText}</p></div>`;
}

// Función para simplificar el texto
async function simplifyText(text) {
  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ text })
    });
    
    if (!response.ok) {
      throw new Error(`Error del servidor: ${response.status}`);
    }
    
    const data = await response.json();
    return data.simplifiedText;
  } catch (error) {
    console.error('Error al simplificar texto:', error);
    throw error;
  }
}

// Función principal
async function init() {
  const selectedText = await getSelectedText();
  // Si no se puede acceder al texto seleccionado (chrome://, error de permisos, etc)
  if (selectedText === '' || selectedText === undefined) {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      const url = tabs[0]?.url || '';
      if (url.startsWith('chrome://') || url.startsWith('chrome-extension://')) {
        resultDiv.innerHTML = '<div class="error"><strong>No disponible en esta página.</strong><br>Por seguridad, Chrome no permite usar extensiones en páginas internas (chrome://, extensiones, configuración, etc).<br><br>Prueba en cualquier sitio web normal.</div>';
      } else {
        resultDiv.innerHTML = '<p class="initial-message">Selecciona un texto legal en la página...</p>';
      }
    });
    return;
  }
  // Mostrar texto seleccionado y spinner
  resultDiv.innerHTML = showSelectedText(selectedText);
  showSpinner();
  try {
    // Llamar al backend
    const simplifiedText = await simplifyText(selectedText);
    // Ocultar spinner y mostrar resultado
    hideSpinner();
    resultDiv.innerHTML = showSelectedText(selectedText) + formatSimplifiedText(simplifiedText);
  } catch (error) {
    hideSpinner();
    resultDiv.innerHTML = `
      <div class="error">
        <strong>Error:</strong> No se pudo procesar el texto. Por favor, verifica que el backend esté configurado correctamente.<br><br><small>${error.message}</small>
      </div>
    `;
  }
}

// Ejecutar al cargar el popup
document.addEventListener('DOMContentLoaded', init);

// Popover de información para visitar la web
const infoBtn = document.getElementById('infoBadge');
const infoPopover = document.getElementById('infoPopover');
if (infoBtn && infoPopover) {
  const hide = () => infoPopover.classList.add('hidden');
  const toggle = (e) => {
    e.stopPropagation();
    infoPopover.classList.toggle('hidden');
  };
  infoBtn.addEventListener('click', toggle);
  document.addEventListener('click', (e) => {
    if (!infoPopover.classList.contains('hidden')) hide();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') hide();
  });
}
