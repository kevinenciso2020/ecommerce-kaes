import axios from 'axios'

const WOMPI_ENV = process.env.WOMPI_ENV || 'sandbox'
const BASE_URL = WOMPI_ENV === 'production' 
  ? 'https://production.wompi.co/v1'
  : 'https://sandbox.wompi.co/v1'

const wompiClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

wompiClient.interceptors.request.use((config) => {
  const privateKey = process.env.WOMPI_PRIVATE_KEY
  if (privateKey) {
    config.headers.Authorization = `Bearer ${privateKey}`
  }
  return config
})

export async function getPresignedAcceptance() {
  const publicKey = process.env.WOMPI_PUBLIC_KEY
  if (!publicKey) {
    throw new Error('WOMPI_PUBLIC_KEY no configurada')
  }

  const response = await wompiClient.get('/merchants/' + publicKey)
  return response.data.data.presigned_acceptance
}

export async function createTransaction({
  amountInCents,
  currency,
  customerEmail,
  reference,
  acceptanceToken,
  acceptPersonalAuth,
  paymentMethod,
  paymentMethodType,
  redirectUrl,
  ip,
}) {
  const payload = {
    amount_in_cents: amountInCents,
    currency: currency || 'COP',
    customer_email: customerEmail,
    reference: reference,
    acceptance_token: acceptanceToken,
    accept_personal_auth: acceptPersonalAuth,
    payment_method: paymentMethod,
    payment_method_type: paymentMethodType,
    redirect_url: redirectUrl,
    ip: ip,
  }

  const response = await wompiClient.post('/transactions', payload)
  return response.data.data
}

export async function getTransaction(transactionId) {
  const response = await wompiClient.get(`/transactions/${transactionId}`)
  return response.data.data
}

export default {
  client: wompiClient,
  getPresignedAcceptance,
  createTransaction,
  getTransaction,
}