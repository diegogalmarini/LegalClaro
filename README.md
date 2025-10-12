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

### 1. Backend (Vercel) ✅ COMPLETADO

El backend ya está desplegado y funcionando:
- **URL**: https://legalclaro.vercel.app
- **Endpoint**: https://legalclaro.vercel.app/api/simplify
- **IA**: Google Gemini 2.0 Flash

### 2. Extensión de Chrome

#### Paso 1: Crear los Iconos (Requerido)
Agrega tres iconos PNG en la carpeta `LegalClaro-extension/icons/`:
- `icon16.png` (16x16 px)
- `icon48.png` (48x48 px)
- `icon128.png` (128x128 px)

**Sugerencia**: Usa un emoji ⚖️ o 📜 y conviértelo a PNG usando:
- https://favicon.io/favicon-generator/
- https://www.canva.com/

#### Paso 2: Cargar la Extensión en Chrome
1. Abre Chrome y ve a `chrome://extensions/`
2. Activa el **"Modo de desarrollador"** (esquina superior derecha)
3. Haz clic en **"Cargar extensión sin empaquetar"**
4. Selecciona la carpeta `LegalClaro-extension`
5. ¡La extensión está lista para usar!

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
