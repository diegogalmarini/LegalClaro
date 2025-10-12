# LegalClaro 📜⚖️ — La Extensión

Bienvenido al frontend de **LegalClaro**, una extensión de Chrome que traduce la jerga legal incomprensible a un lenguaje claro y directo, utilizando el poder de la IA.

Este repositorio contiene el código de la extensión de Chrome que los usuarios instalan en su navegador.

* **Backend (La API Serverless):** El cerebro de la operación reside en un [repositorio separado](https://github.com/diegogalmarini/legalclaro-backend).

---

## 🎯 Filosofía del Proyecto: El Manifiesto #ElRetoMVP

Este proyecto es la primera ejecución del reto público **#ElRetoMVP**. Nace de la filosofía **"Demostrar, No Solo Decir"**: la convicción de que la mejor manera de probar una capacidad es construyendo y entregando resultados tangibles.

LegalClaro fue concebido, construido y desplegado en un sprint de una semana para demostrar cómo se puede pasar de un 'dolor de mercado' a una solución funcional a gran velocidad, transformando una idea en un activo real.

### ✨ Estado Actual del Sprint

* **Fase:** 2 de 3 (Ejecución)
* **Backend:** ✅ Desplegado y 100% funcional en Vercel.
* **Frontend:** ✅ Estructura base completada y lista para conectar.

---

## 🚀 Cómo Ponerlo en Marcha (Instalación en 2 minutos)

El backend ya está operativo. Para activar la extensión en tu navegador, sigue estos pasos:

1.  **Descarga el Código:** Clona o descarga este repositorio en tu ordenador.
2.  **Abre Chrome Extensions:** Ve a la dirección `chrome://extensions/`.
3.  **Activa el Modo Desarrollador:** Activa el interruptor en la esquina superior derecha.
4.  **Carga la Extensión:**
    * Haz clic en **"Cargar extensión sin empaquetar"**.
    * Selecciona la carpeta `LegalClaro-extension` de este repositorio.
5.  **¡Listo!** El icono de LegalClaro aparecerá en tu barra de herramientas, listo para usar.

*(**Nota:** Asegúrate de que la carpeta `LegalClaro-extension/icons/` contiene los tres archivos de icono necesarios: `icon16.png`, `icon48.png`, `icon128.png`)*

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
