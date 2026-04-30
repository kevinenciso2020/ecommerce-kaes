import nodemailer from 'nodemailer'

const createTransporter = () => {
  const host = process.env.SMTP_HOST || 'smtp.gmail.com'
  const port = parseInt(process.env.SMTP_PORT || '587', 10)
  const secure = process.env.SMTP_SECURE === 'true'

  return nodemailer.createTransport({
    host,
    port,
    secure,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  })
}

export const emailTransporter = createTransporter()

export const verifyEmailConfig = async () => {
  try {
    await emailTransporter.verify()
    console.log('✅ Email transporter configurado correctamente')
    return true
  } catch (error) {
    console.error('❌ Error configurando email:', error.message)
    return false
  }
}