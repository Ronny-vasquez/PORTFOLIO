# Configuración de Resend para el formulario de contacto

## Pasos para configurar Resend:

1. **Crear cuenta en Resend:**
   - Ve a [resend.com](https://resend.com)
   - Crea una cuenta gratuita

2. **Obtener API Key:**
   - Ve a [API Keys](https://resend.com/api-keys)
   - Crea una nueva API key
   - Copia la clave (comienza con `re_`)

3. **Configurar variables de entorno:**
   - Crea un archivo `.env.local` en la raíz del proyecto
   - Agrega la siguiente línea:
   ```
   RESEND_API_KEY=tu_clave_api_aqui
   ```

4. **Verificar dominio (opcional pero recomendado):**
   - En el dashboard de Resend, ve a "Domains"
   - Agrega tu dominio para enviar emails desde tu propio dominio
   - Si no tienes dominio, puedes usar el dominio por defecto de Resend

## Notas importantes:

- El formulario ahora enviará emails directamente a `alexanderbonifacio8@gmail.com`
- Los emails incluyen el email del remitente como "reply-to" para que puedas responder directamente
- El sistema incluye validación de campos y formato de email
- Los emails tienen un diseño HTML profesional con toda la información del contacto

## Estructura del email:

- **Asunto:** "Nuevo mensaje de contacto: [asunto del usuario]"
- **Contenido:** 
  - Información del contacto (nombre, email, asunto)
  - Mensaje completo
  - Fecha y hora del envío
- **Reply-to:** Email del remitente para respuesta directa
