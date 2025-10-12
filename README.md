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

## 📖 Guía de Uso Rápido

1.  **Navega:** Ve a cualquier página con un texto legal (Términos de Servicio, Política de Privacidad, etc.).
2.  **Selecciona:** Sombrea con tu ratón el párrafo o la sección que quieres analizar.
3.  **Activa:** Haz clic en el icono de LegalClaro en tu barra de herramientas.
4.  **Descubre:** En segundos, aparecerá una ventana con un análisis claro y estructurado del texto.

---

## 🔧 Arquitectura y Tecnologías

* **Frontend:** HTML, CSS, JavaScript (Vanilla). Ligero, rápido y sin dependencias.
* **Manifiesto:** Cumple con Manifest V3, el estándar moderno y seguro para extensiones de Chrome.
* **Backend:** Se comunica con una API de Node.js desplegada en [Vercel Serverless Functions](https://github.com/diegogalmarini/legalclaro-backend).
* **IA:** El análisis del lenguaje es procesado por la API de **Google Gemini**.

---

## 👨‍💻 Sobre el Autor

Este proyecto fue ideado y desarrollado por **Diego Galmarini** como una demostración práctica de estrategia, ejecución y entrega de resultados.

* **LinkedIn:** [https://www.linkedin.com/in/diegogalmarini/](https://www.linkedin.com/in/diegogalmarini/)
