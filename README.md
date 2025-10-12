# LegalClaro 📜⚖️

Una extensión de Chrome que simplifica textos legales complejos usando IA (Google Gemini).

## � Repositorios

Este proyecto está dividido en dos repositorios:

- **Frontend (Extensión)**: Este repositorio - [LegalClaro](https://github.com/diegogalmarini/LegalClaro)
- **Backend (Serverless)**: [legalclaro-backend](https://github.com/diegogalmarini/legalclaro-backend)

## �🚀 Características

- **Análisis instantáneo**: Selecciona cualquier texto legal en una página web y obtén un análisis simplificado
- **Resumen inteligente**: Obtén el punto clave del documento en una frase
- **Puntos principales**: Lista clara de las cláusulas más importantes
- **Nivel de alerta**: Evaluación del riesgo del documento (Bajo, Medio, Alto)

## 📁 Estructura del Proyecto

**Nota**: El backend está en un [repositorio separado](https://github.com/diegogalmarini/legalclaro-backend).

```
LegalClaro/
└── LegalClaro-extension/     # Extensión de Chrome
    ├── manifest.json
    ├── popup/
    │   ├── popup.html
    │   ├── popup.css
    │   └── popup.js
    └── icons/
        ├── icon16.png
        ├── icon48.png
        └── icon128.png
```
    ├── vercel.json
    └── .env.example
```

## 🛠️ Instalación

### 1. Backend (Vercel)

1. Ve a la carpeta `vercel-backend`:
   ```bash
   cd vercel-backend
   ```

2. Instala las dependencias:
   ```bash
   npm install
   ```

3. Crea un archivo `.env` basado en `.env.example`:
   ```bash
   cp .env.example .env
   ```

4. Obtén tu API key de Google Gemini:
   - Ve a [Google AI Studio](https://makersuite.google.com/app/apikey)
   - Crea una nueva API key
   - Cópiala en el archivo `.env`

5. Instala Vercel CLI (si no lo tienes):
   ```bash
   npm install -g vercel
   ```

6. Despliega a Vercel:
   ```bash
   vercel
   ```

7. En el dashboard de Vercel, agrega la variable de entorno:
   - Ve a tu proyecto → Settings → Environment Variables
   - Agrega `GEMINI_API_KEY` con tu API key

8. Copia la URL de tu deployment (ej: `https://tu-proyecto.vercel.app`)

### 2. Extensión de Chrome

1. Abre `LegalClaro-extension/popup/popup.js`

2. Actualiza la variable `API_URL` con tu URL de Vercel:
   ```javascript
   const API_URL = 'https://tu-proyecto.vercel.app/api/simplify';
   ```

3. Carga la extensión en Chrome:
   - Abre Chrome y ve a `chrome://extensions/`
   - Activa el "Modo de desarrollador"
   - Haz clic en "Cargar extensión sin empaquetar"
   - Selecciona la carpeta `LegalClaro-extension`

4. **Importante**: Agrega iconos a la carpeta `icons/`:
   - Necesitas crear o agregar tres iconos: `icon16.png`, `icon48.png`, `icon128.png`
   - Puedes usar cualquier editor de imágenes o generarlos online

## 📖 Uso

1. Navega a cualquier página web con texto legal (términos de servicio, políticas de privacidad, etc.)
2. Selecciona el texto que quieres analizar
3. Haz clic en el icono de LegalClaro en la barra de herramientas de Chrome
4. Espera unos segundos mientras la IA analiza el texto
5. ¡Revisa tu análisis simplificado!

## 🔧 Tecnologías Utilizadas

- **Frontend**: HTML, CSS, JavaScript (Vanilla)
- **Backend**: Node.js (Serverless Functions en Vercel)
- **IA**: Google Gemini API
- **Hosting**: Vercel

## 📝 Notas de Desarrollo

- La extensión usa Manifest V3 (la última versión de Chrome Extensions)
- El backend es completamente serverless, sin costos de infraestructura
- La API de Gemini tiene un tier gratuito generoso para desarrollo

## 🐛 Solución de Problemas

### La extensión no se carga
- Verifica que todos los archivos estén en sus carpetas correctas
- Asegúrate de tener los iconos en la carpeta `icons/`

### Error al conectar con el backend
- Verifica que la URL en `popup.js` sea correcta
- Asegúrate de que el backend esté desplegado en Vercel
- Revisa la consola del navegador (F12) para más detalles

### Error de API Key
- Verifica que la variable `GEMINI_API_KEY` esté configurada en Vercel
- Asegúrate de que tu API key de Gemini sea válida

## 👨‍💻 Autor

Desarrollado por Diego

## 📄 Licencia

Este proyecto es de código abierto y está disponible para uso personal y educativo.
