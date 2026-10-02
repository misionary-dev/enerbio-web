import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

const TEAM_EMAILS = ['adm.enerbiosrl@gmail.com', 'roettitomas@gmail.com']
const FROM_EMAIL = 'EnerBio <noreply@enerbiosrl.com>'

const SERVICIO_LABELS: Record<string, string> = {
  analisis: 'Análisis de proyecto energético',
  ingenieria: 'Ingeniería',
  montajes: 'Montajes y puesta en marcha',
  om: 'Operación y mantenimiento',
  ambiental: 'Ambiental y sustentabilidad',
  vapor: 'Vapor y Energía',
  general: 'Consulta general',
}

function teamNotificationHtml(data: Record<string, string>) {
  const { nombre, email, telefono, empresa, servicio, mensaje } = data
  return `<!DOCTYPE html>
<html lang="es">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Nueva consulta — EnerBio</title></head>
<body style="margin:0;padding:0;background:#f4f4f4;font-family:Arial,sans-serif;">
<table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f4f4;padding:40px 20px;">
  <tr><td align="center">
    <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:8px;overflow:hidden;max-width:600px;width:100%;">
      <tr><td style="background:#1a3a2e;padding:32px 40px;text-align:center;">
        <img src="https://cdn-enerbio.misionary.com.ar/Iconos/Logo-Enerbio.webp" alt="EnerBio" width="160" style="height:auto;" />
      </td></tr>
      <tr><td style="background:#4caf50;padding:12px 40px;text-align:center;">
        <p style="margin:0;color:#ffffff;font-size:14px;font-weight:bold;letter-spacing:2px;text-transform:uppercase;">Nueva consulta recibida</p>
      </td></tr>
      <tr><td style="padding:40px;">
        <h2 style="margin:0 0 24px;color:#1a3a2e;font-size:22px;">Detalle del formulario</h2>
        <table width="100%" cellpadding="0" cellspacing="0">
          <tr><td style="padding:12px 0;border-bottom:1px solid #eee;"><strong style="color:#888;font-size:12px;text-transform:uppercase;letter-spacing:1px;">Nombre</strong><br><span style="color:#1a3a2e;font-size:16px;font-weight:600;">${nombre}</span></td></tr>
          <tr><td style="padding:12px 0;border-bottom:1px solid #eee;"><strong style="color:#888;font-size:12px;text-transform:uppercase;letter-spacing:1px;">Email</strong><br><a href="mailto:${email}" style="color:#4caf50;font-size:16px;text-decoration:none;">${email}</a></td></tr>
          <tr><td style="padding:12px 0;border-bottom:1px solid #eee;"><strong style="color:#888;font-size:12px;text-transform:uppercase;letter-spacing:1px;">Teléfono</strong><br><a href="tel:${telefono}" style="color:#1a3a2e;font-size:16px;text-decoration:none;font-weight:600;">${telefono}</a></td></tr>
          <tr><td style="padding:12px 0;border-bottom:1px solid #eee;"><strong style="color:#888;font-size:12px;text-transform:uppercase;letter-spacing:1px;">Empresa</strong><br><span style="color:#1a3a2e;font-size:16px;font-weight:600;">${empresa}</span></td></tr>
          <tr><td style="padding:12px 0;${mensaje ? 'border-bottom:1px solid #eee;' : ''}"><strong style="color:#888;font-size:12px;text-transform:uppercase;letter-spacing:1px;">Servicio de interés</strong><br><span style="color:#1a3a2e;font-size:16px;font-weight:600;">${servicio}</span></td></tr>
          ${mensaje ? `<tr><td style="padding:12px 0;"><strong style="color:#888;font-size:12px;text-transform:uppercase;letter-spacing:1px;">Mensaje</strong><br><span style="color:#333;font-size:15px;line-height:1.7;">${mensaje.replace(/\n/g, '<br>')}</span></td></tr>` : ''}
        </table>
        <div style="margin-top:36px;text-align:center;">
          <a href="mailto:${email}" style="display:inline-block;background:#1a3a2e;color:#ffffff;text-decoration:none;padding:14px 32px;border-radius:6px;font-size:15px;font-weight:bold;">Responder a ${nombre}</a>
        </div>
      </td></tr>
      <tr><td style="background:#f8f8f8;padding:20px 40px;text-align:center;border-top:1px solid #eee;">
        <p style="margin:0;color:#aaa;font-size:12px;">EnerBio SRL · Av. Belgrano 675, Leandro N. Alem, Misiones · <a href="mailto:info@enerbio.com.ar" style="color:#aaa;text-decoration:none;">info@enerbio.com.ar</a></p>
      </td></tr>
    </table>
  </td></tr>
</table>
</body>
</html>`
}

function clientThankYouHtml({ nombre }: { nombre: string }) {
  return `<!DOCTYPE html>
<html lang="es">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Gracias por contactarnos — EnerBio</title></head>
<body style="margin:0;padding:0;background:#f4f4f4;font-family:Arial,sans-serif;">
<table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f4f4;padding:40px 20px;">
  <tr><td align="center">
    <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:8px;overflow:hidden;max-width:600px;width:100%;">
      <tr><td style="background:#1a3a2e;padding:32px 40px;text-align:center;">
        <img src="https://cdn-enerbio.misionary.com.ar/Iconos/Logo-Enerbio.webp" alt="EnerBio" width="160" style="height:auto;" />
      </td></tr>
      <tr><td style="padding:48px 40px 36px;text-align:center;">
        <div style="width:64px;height:64px;background:#e8f5e9;border-radius:50%;margin:0 auto 24px;line-height:64px;font-size:28px;">✓</div>
        <h1 style="margin:0 0 16px;color:#1a3a2e;font-size:26px;font-weight:bold;">¡Gracias, ${nombre}!</h1>
        <p style="margin:0 0 20px;color:#555;font-size:16px;line-height:1.7;">Recibimos tu consulta. Un miembro de nuestro equipo se pondrá en contacto a la brevedad para analizar tu proyecto energético.</p>
        <p style="margin:0 0 40px;color:#555;font-size:16px;line-height:1.7;">Mientras tanto, podés conocer más sobre nuestros servicios y proyectos en nuestra web.</p>
        <a href="https://enerbio.com.ar" style="display:inline-block;background:#1a3a2e;color:#ffffff;text-decoration:none;padding:14px 32px;border-radius:6px;font-size:15px;font-weight:bold;">Ver nuestros proyectos</a>
      </td></tr>
      <tr><td style="background:#f8f8f8;padding:28px 40px;border-top:1px solid #eee;">
        <table width="100%" cellpadding="0" cellspacing="0">
          <tr>
            <td style="text-align:center;padding:0 8px;width:33%;">
              <p style="margin:0 0 4px;color:#aaa;font-size:11px;text-transform:uppercase;letter-spacing:1px;">Teléfono</p>
              <a href="tel:+543584199465" style="color:#1a3a2e;font-size:14px;font-weight:bold;text-decoration:none;">+54 3584 199 465</a>
            </td>
            <td style="text-align:center;padding:0 8px;width:33%;border-left:1px solid #ddd;border-right:1px solid #ddd;">
              <p style="margin:0 0 4px;color:#aaa;font-size:11px;text-transform:uppercase;letter-spacing:1px;">Email</p>
              <a href="mailto:info@enerbio.com.ar" style="color:#1a3a2e;font-size:14px;font-weight:bold;text-decoration:none;">info@enerbio.com.ar</a>
            </td>
            <td style="text-align:center;padding:0 8px;width:33%;">
              <p style="margin:0 0 4px;color:#aaa;font-size:11px;text-transform:uppercase;letter-spacing:1px;">Ubicación</p>
              <span style="color:#1a3a2e;font-size:14px;font-weight:bold;">Leandro N. Alem, Misiones</span>
            </td>
          </tr>
        </table>
      </td></tr>
      <tr><td style="padding:20px 40px;text-align:center;">
        <p style="margin:0;color:#ccc;font-size:12px;">© 2026 EnerBio SRL · <a href="https://enerbio.com.ar" style="color:#ccc;text-decoration:none;">enerbio.com.ar</a></p>
      </td></tr>
    </table>
  </td></tr>
</table>
</body>
</html>`
}

export async function POST(request: Request) {
  try {
    const body = await request.json() as Record<string, string>
    const { nombre, email, telefono, empresa, servicio, mensaje } = body

    if (!nombre || !email || !telefono || !empresa || !servicio) {
      return NextResponse.json({ error: 'Faltan campos requeridos' }, { status: 400 })
    }

    const servicioLabel = SERVICIO_LABELS[servicio] ?? servicio

    await Promise.all([
      resend.emails.send({
        from: FROM_EMAIL,
        to: TEAM_EMAILS,
        subject: `Nueva consulta de ${nombre} — ${empresa}`,
        html: teamNotificationHtml({ nombre, email, telefono, empresa, servicio: servicioLabel, mensaje: mensaje ?? '' }),
      }),
      resend.emails.send({
        from: FROM_EMAIL,
        to: [email],
        subject: 'Recibimos tu consulta — EnerBio',
        html: clientThankYouHtml({ nombre }),
      }),
    ])

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json({ error: 'Error al enviar el mensaje' }, { status: 500 })
  }
}
