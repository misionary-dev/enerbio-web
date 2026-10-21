import { S3Client, PutObjectCommand, GetObjectCommand } from '@aws-sdk/client-s3'
import { getSignedUrl } from '@aws-sdk/s3-request-presigner'
import { Resend } from 'resend'

export const runtime = 'edge'

function getR2Client() {
  return new S3Client({
    region: 'auto',
    endpoint: process.env.R2_ENDPOINT!,
    credentials: {
      accessKeyId: process.env.R2_ACCESS_KEY_ID!,
      secretAccessKey: process.env.R2_SECRET_ACCESS_KEY!,
    },
  })
}

export async function POST(request: Request) {
  try {
    const formData = await request.formData()

    const nombre = formData.get('nombre') as string
    const apellido = formData.get('apellido') as string
    const email = formData.get('email') as string
    const telefono = formData.get('telefono') as string
    const asunto = formData.get('asunto') as string
    const mensaje = (formData.get('mensaje') as string) || ''
    const cvFile = formData.get('curriculum') as File

    if (!cvFile || cvFile.size === 0) {
      return Response.json({ error: 'CV requerido' }, { status: 400 })
    }

    // Subir CV a R2
    const r2 = getR2Client()
    const safeName = `${nombre}-${apellido}`.replace(/[^a-zA-Z0-9-]/g, '_')
    const ext = cvFile.name.split('.').pop() ?? 'pdf'
    const key = `postulaciones/${Date.now()}-${safeName}.${ext}`

    const cvBuffer = await cvFile.arrayBuffer()
    await r2.send(new PutObjectCommand({
      Bucket: process.env.R2_BUCKET_NAME!,
      Key: key,
      Body: new Uint8Array(cvBuffer),
      ContentType: cvFile.type || 'application/octet-stream',
      ContentDisposition: `attachment; filename="${cvFile.name}"`,
    }))

    // Generar link de descarga (válido 30 días)
    const downloadUrl = await getSignedUrl(
      r2,
      new GetObjectCommand({ Bucket: process.env.R2_BUCKET_NAME!, Key: key }),
      { expiresIn: 60 * 60 * 24 * 7 }
    )

    // Enviar emails
    const resend = new Resend(process.env.RESEND_API_KEY)
    const fecha = new Date().toLocaleDateString('es-AR', { day: '2-digit', month: '2-digit', year: 'numeric' })

    const notificacionHtml = `
<!DOCTYPE html>
<html lang="es">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#f4f4f4;font-family:Arial,sans-serif">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f4f4;padding:40px 0">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08)">
        <tr><td style="background:#1a3a2e;padding:32px 40px;text-align:center">
          <img src="https://cdn-enerbio.misionary.com.ar/Iconos/Logo-Enerbio.webp" alt="EnerBio" height="48" style="display:block;margin:0 auto" />
        </td></tr>
        <tr><td style="padding:40px">
          <h2 style="margin:0 0 8px;color:#1a3a2e;font-size:22px">Nueva postulación recibida</h2>
          <p style="margin:0 0 24px;color:#666;font-size:14px">${fecha}</p>
          <table width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #e8e8e8;border-radius:8px;overflow:hidden">
            <tr style="background:#f8f8f8"><td style="padding:12px 16px;font-size:13px;font-weight:bold;color:#1a3a2e;width:140px">Nombre</td><td style="padding:12px 16px;font-size:13px;color:#333">${nombre} ${apellido}</td></tr>
            <tr><td style="padding:12px 16px;font-size:13px;font-weight:bold;color:#1a3a2e">Email</td><td style="padding:12px 16px;font-size:13px;color:#333"><a href="mailto:${email}" style="color:#2d6a4f">${email}</a></td></tr>
            <tr style="background:#f8f8f8"><td style="padding:12px 16px;font-size:13px;font-weight:bold;color:#1a3a2e">Teléfono</td><td style="padding:12px 16px;font-size:13px;color:#333">${telefono}</td></tr>
            <tr><td style="padding:12px 16px;font-size:13px;font-weight:bold;color:#1a3a2e">Asunto</td><td style="padding:12px 16px;font-size:13px;color:#333">${asunto}</td></tr>
            ${mensaje ? `<tr style="background:#f8f8f8"><td style="padding:12px 16px;font-size:13px;font-weight:bold;color:#1a3a2e">Mensaje</td><td style="padding:12px 16px;font-size:13px;color:#333">${mensaje}</td></tr>` : ''}
          </table>
          <div style="margin:32px 0;text-align:center">
            <a href="${downloadUrl}" style="display:inline-block;background:#2d6a4f;color:#ffffff;text-decoration:none;padding:14px 32px;border-radius:8px;font-weight:bold;font-size:15px">Descargar CV →</a>
            <p style="margin:12px 0 0;color:#999;font-size:12px">Este link es válido por 30 días.</p>
          </div>
        </td></tr>
        <tr><td style="background:#f8f8f8;padding:20px 40px;text-align:center;color:#999;font-size:12px">EnerBio SRL · info@enerbio.com.ar</td></tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`

    const graciasHtml = `
<!DOCTYPE html>
<html lang="es">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#f4f4f4;font-family:Arial,sans-serif">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f4f4;padding:40px 0">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08)">
        <tr><td style="background:#1a3a2e;padding:32px 40px;text-align:center">
          <img src="https://cdn-enerbio.misionary.com.ar/Iconos/Logo-Enerbio.webp" alt="EnerBio" height="48" style="display:block;margin:0 auto" />
        </td></tr>
        <tr><td style="padding:40px;text-align:center">
          <div style="width:64px;height:64px;background:#e8f5e9;border-radius:50%;margin:0 auto 24px;display:flex;align-items:center;justify-content:center;font-size:28px">✓</div>
          <h2 style="margin:0 0 16px;color:#1a3a2e;font-size:24px">¡Gracias, ${nombre}!</h2>
          <p style="margin:0 0 16px;color:#555;font-size:16px;line-height:1.6">Recibimos tu postulación y tu CV correctamente. Nuestro equipo lo va a revisar y te vamos a contactar si tu perfil encaja con una búsqueda activa o futura.</p>
          <p style="margin:0;color:#888;font-size:14px">Seguinos en LinkedIn e Instagram para estar al tanto de nuestras novedades.</p>
          <div style="margin:32px 0;display:flex;gap:12px;justify-content:center">
            <a href="https://www.linkedin.com/in/enerbio-s-r-l-34753a254/" style="display:inline-block;background:#1a3a2e;color:#fff;text-decoration:none;padding:10px 20px;border-radius:6px;font-weight:bold;font-size:13px">LinkedIn</a>
            <a href="https://www.instagram.com/enerbiosrl/" style="display:inline-block;background:#1a3a2e;color:#fff;text-decoration:none;padding:10px 20px;border-radius:6px;font-weight:bold;font-size:13px">Instagram</a>
          </div>
        </td></tr>
        <tr><td style="background:#f8f8f8;padding:20px 40px;text-align:center;color:#999;font-size:12px">EnerBio SRL · info@enerbio.com.ar</td></tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`

    await Promise.all([
      resend.emails.send({
        from: 'EnerBio <noreply@enerbiosrl.com>',
        to: ['adm.enerbiosrl@gmail.com', 'roettitomas@gmail.com'],
        subject: `Nueva postulación: ${nombre} ${apellido} — ${asunto}`,
        html: notificacionHtml,
      }),
      resend.emails.send({
        from: 'EnerBio <noreply@enerbiosrl.com>',
        to: [email],
        subject: '¡Recibimos tu postulación! — EnerBio',
        html: graciasHtml,
      }),
    ])

    return Response.json({ ok: true })
  } catch (err) {
    console.error('Error en postulacion:', err)
    return Response.json({ error: 'Error interno' }, { status: 500 })
  }
}
