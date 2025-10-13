# LegalClaro - API Backend 📜⚖️

Backend serverless que funciona como el cerebro de **LegalClaro**, un Micro-SaaS que simplifica textos legales complejos usando la IA de Google Gemini.

## 🎯 Contexto Estratégico

Este backend es una pieza central del reto público **#ElRetoMVP**, un sprint de una semana para pasar de un 'dolor de mercado' a una solución funcional.

El proyecto es una demostración práctica de la filosofía **"Demostrar, No Solo Decir"**: construir y desplegar activos de alto valor a gran velocidad, utilizando arquitecturas modernas y un enfoque implacable en los resultados.

* **Repositorio Frontend (Extensión de Chrome):** [diegogalmarini/LegalClaro](https://github.com/diegogalmarini/LegalClaro)

---

## 🚀 API en Producción

* **Estado:** ✅ **Online y Operativo**
* **URL Base:** `https://legalclaro.vercel.app`
* **Endpoint Principal:** `POST /api/simplify`

### Cómo Usar la API

Para analizar un texto, realiza una petición `POST` al endpoint `/api/simplify`.

#### **Petición (Request)**
* **Header:** `Content-Type: application/json`
* **Body:**
    ```json
    {
      "text": "El usuario se compromete a ceder a la compañía los derechos a perpetuidad sobre el contenido generado, sin limitación territorial ni temporal, para su uso en cualquier medio presente o futuro."
    }
    ```

#### **Respuesta Exitosa (Response `200 OK`)**
* **Body:**
    ```json
    {
      "simplifiedText": "**1. Resumen Clave:** Aceptas ceder para siempre y en todo el mundo todos los derechos sobre el contenido que crees.\n\n**2. Puntos Principales:**\n* **Cesión Total:** Le das a la empresa la propiedad completa de tu contenido.\n* **Sin Límites:** Pueden usarlo donde quieran (cualquier país) y cuando quieran (para siempre).\n* **Uso Amplio:** Pueden utilizarlo en cualquier formato, incluso en tecnologías que aún no existen.\n\n**3. Nivel de Alerta:** Alto. Estás renunciando a todos tus derechos de propiedad sobre tu trabajo."
    }
    ```

---

## 🛠️ Desarrollo y Despliegue

### Entorno Local
1.  **Clonar el repositorio.**
2.  **Instalar dependencias:**
    ```bash
    npm install
    ```
3.  **Configurar variables de entorno:** Crear un archivo `.env` a partir de `.env.example` y añadir la `GEMINI_API_KEY`.
    ```
    GEMINI_API_KEY=tu_api_key_de_google_gemini
    ```
4.  **Ejecutar el servidor de desarrollo:**
    ```bash
    vercel dev
    ```

### Despliegue (Deployment)
El proyecto está conectado a Vercel para un despliegue continuo. Cualquier `push` a la rama `main` en GitHub dispara automáticamente un nuevo despliegue en producción. La variable de entorno `GEMINI_API_KEY` está configurada de forma segura en el panel de Vercel.

---

## ⚙️ Arquitectura y Características

<<<<<<< HEAD
## 🔗 Repositorios Relacionados

- **Frontend (Extensión Chrome)**: https://github.com/diegogalmarini/LegalClaro

## 🔗 Relación de repos

- Repo principal (workspace completo): https://github.com/diegogalmarini/LegalClaro
- Este repo (backend y demo en Vercel): https://github.com/diegogalmarini/legalclaro-backend

Notas:
- Este directorio (`vercel-backend/`) es un repositorio Git independiente dentro del repo principal. Tiene su propio `origin` apuntando a `legalclaro-backend`.
- Flujo típico: editar aquí → `git commit` → `git push` → `vercel --prod`.
=======
* **Serverless:** Cero infraestructura que mantener, escalabilidad automática y costos optimizados.
* **IA:** Integración directa con la API de Google Gemini para un análisis de texto avanzado.
* **CORS Abierto:** La API está configurada para aceptar peticiones desde cualquier origen, permitiendo su uso en extensiones de navegador y otras aplicaciones web.
* **Demo Integrada:** La ruta raíz (`/`) contiene un formulario simple para realizar pruebas manuales de la API directamente desde el navegador.
>>>>>>> 7db008f427a364902d062f07c3a0b5a0f68c281d
