import "server-only";
import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

// Asegura runtime Node.js (Resend no funciona en edge)
export const runtime = "nodejs";

function getResend() {
  const key = process.env.RESEND_API_KEY;
  if (!key) {
    throw new Error("Falta la variable de entorno RESEND_API_KEY");
  }
  return new Resend(key);
}

function escapeHtml(str: string) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const name = String(body?.name ?? "").trim();
    const email = String(body?.email ?? "").trim();
    const subject = String(body?.subject ?? "").trim();
    const message = String(body?.message ?? "").trim();

    // Validaciones
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "Todos los campos son requeridos" },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Formato de email inválido" },
        { status: 400 }
      );
    }

    // Instanciar Resend en runtime
    let resend: Resend;
    try {
      resend = getResend();
    } catch (e: any) {
      console.error("Config error:", e?.message ?? e);
      return NextResponse.json(
        {
          error:
            "Configuración del servidor incompleta (RESEND_API_KEY ausente)",
        },
        { status: 500 }
      );
    }

    // Construir HTML seguro
    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safeSubject = escapeHtml(subject);
    const safeMessage = escapeHtml(message).replace(/\n/g, "<br>");

    const { data, error } = await resend.emails.send({
      // Puedes usar onboarding@resend.dev para pruebas.
      // En producción usa un dominio verificado: "Contacto <no-reply@tudominio.com>"
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: ["alexanderbonifacio8@gmail.com"],
      subject: `Nuevo mensaje de contacto: ${safeSubject}`,
      replyTo: safeEmail,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #007bff; padding-bottom: 10px;">
            Nuevo mensaje de contacto desde tu portfolio
          </h2>
          
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #495057; margin-top: 0;">Información del contacto:</h3>
            <p><strong>Nombre:</strong> ${safeName}</p>
            <p><strong>Email:</strong> ${safeEmail}</p>
            <p><strong>Asunto:</strong> ${safeSubject}</p>
          </div>
          
          <div style="background-color: #ffffff; padding: 20px; border: 1px solid #dee2e6; border-radius: 8px;">
            <h3 style="color: #495057; margin-top: 0;">Mensaje:</h3>
            <p style="line-height: 1.6; color: #333;">${safeMessage}</p>
          </div>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #dee2e6; color: #6c757d; font-size: 14px;">
            <p>Este mensaje fue enviado desde el formulario de contacto de tu portfolio.</p>
            <p>Fecha: ${new Date().toLocaleString("es-ES")}</p>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Error al enviar el email" },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: "Email enviado exitosamente", id: data?.id },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("API error:", error);
    return NextResponse.json(
      { error: "Error interno del servidor" },
      { status: 500 }
    );
  }
}
